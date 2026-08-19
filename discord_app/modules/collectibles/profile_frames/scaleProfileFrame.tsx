// discord_app/modules/collectibles/profile_frames/scaleProfileFrame.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";

let result = obj132.fileFinishedImporting("modules/collectibles/profile_frames/scaleProfileFrame.tsx");

export default function scaleProfileFrame(innerWidth) {
  const result = arg1 / innerWidth.innerWidth;
  return { overflowTop: innerWidth.overflowTop * result, overflowBottom: innerWidth.overflowBottom * result, overflowHorizontal: innerWidth.overflowHorizontal * result };
};