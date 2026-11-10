// === Module 14263: LiveVoiceLevelView ===

// Module 14263 (LiveVoiceLevelView)
import LiveVoiceLevelViewNativeComponentDefault from "LiveVoiceLevelViewNativeComponent" /* 14264 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_engine/native/LiveVoiceLevelView.tsx");

export default function LiveVoiceLevelView(staticLevel) {
  staticLevel = staticLevel.staticLevel;
  const merged = Object.assign(staticLevel, Object.assign({ staticLevel: 0 }));
  const obj = {};
  const merged1 = Object.assign(merged);
  let num = -1;
  if (null != staticLevel) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.min(Math.max(staticLevel, 0), 1);
  }
  obj.staticLevel = num;
  return jsx(LiveVoiceLevelViewNativeComponentDefault, {});
};