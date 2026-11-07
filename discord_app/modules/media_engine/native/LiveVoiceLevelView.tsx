// discord_app/modules/media_engine/native/LiveVoiceLevelView.tsx
import LiveVoiceLevelViewNativeComponentDefault from "../../../../discord_common/js/packages/rtn-codegen/js/LiveVoiceLevelViewNativeComponent.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
}
