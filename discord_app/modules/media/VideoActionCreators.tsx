// discord_app/modules/media/VideoActionCreators.tsx
const result = require("set").fileFinishedImporting("modules/media/VideoActionCreators.tsx");

export const updateVideoSize = function updateVideoSize(streamId, dimensions, sharedValue2) {
  let obj = require("../../Dispatcher.tsx");
  obj = { type: "VIDEO_SIZE_UPDATE", streamId, dimensions, zoom: sharedValue2 };
  obj.dispatch(obj);
};