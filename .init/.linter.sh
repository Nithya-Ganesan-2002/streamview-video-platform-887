#!/bin/bash
cd /home/kavia/workspace/code-generation/streamview-video-platform-887/video_streamer_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

