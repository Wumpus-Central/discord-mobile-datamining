// discord_app/modules/conjure/background_frames/conjureFrameSound.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/background_frames/conjureFrameSound.tsx");

export const showsFrameSoundToggle = function showsFrameSoundToggle(frame) {
  return frame.data.audible || frame.data.userMuted;
};
