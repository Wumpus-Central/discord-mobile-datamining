// discord_app/modules/collectibles/profile_frames/scaleProfileFrame.tsx
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/collectibles/profile_frames/scaleProfileFrame.tsx");

export default function scaleProfileFrame(innerWidth, arg1) {
  const result = arg1 / innerWidth.innerWidth;
  return {
    overflowTop: innerWidth.overflowTop * result,
    overflowBottom: innerWidth.overflowBottom * result,
    overflowHorizontal: innerWidth.overflowHorizontal * result,
  };
}
