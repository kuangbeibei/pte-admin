import React, { useState } from 'react';
import { Mic, Pause, Stop } from '../Icon';

let URL = window.URL || window.webkitURL;

let gumStream: any; //stream from getUserMedia()
let rec: any; //Recorder.js object
let input; //MediaStreamAudioSourceNode we'll be recording

// shim for AudioContext when it's not avb.
let AudioContext = window.AudioContext;
let audioContext;

const Record = () => {
	const [list, setList] = useState<
		{
			blobAddr: string;
			time: string;
		}[]
	>([]);

	function createDownloadLink(blob: any) {
		setList([
			{
				blobAddr: URL.createObjectURL(blob),
				time: new Date().toISOString(),
			},
		]);
	}

	const micClick = () => {
		console.log('recordButton clicked');
		window.navigator.mediaDevices
			.getUserMedia({
				audio: true,
				video: false,
			})
			.then((stream) => {
				console.log('getUserMedia() success, stream created, initializing ...');
				audioContext = new AudioContext();
				/*  assign to gumStream for later use  */
				gumStream = stream;
				/* use the stream */
				input = audioContext.createMediaStreamSource(stream);

				// @ts-ignore
				rec = new window.Recorder(input, {
					numChannels: 1,
				});

				rec.record();
				console.log('Recording started');
			})
			.catch((e) => {});
	};
	const pauseClick = () => {};
	const stopClick = () => {
		rec.stop();
		gumStream.getAudioTracks()[0].stop();
		rec.exportWAV(createDownloadLink);
	};

	return (
		<>
			<Mic clickFn={micClick} />
			<Pause clickFn={pauseClick} />
			<Stop clickFn={stopClick} />
			<ol>
				{list.length &&
					list.map(({ blobAddr, time }) => (
						<li key={blobAddr}>
							<audio controls src={`${blobAddr}`}></audio>
							<a href={`${blobAddr}`} download={`${time}.wav`}>
								保存至硬盘
							</a>
							<a href="#">上传</a>
						</li>
					))}
			</ol>
		</>
	);
};

export default Record;
