// discord_app/modules/collectibles/profile_frames/hooks/useFramePreviewOverrideFrame.native.tsx
import CollectiblesItemType from "../../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ProfileFrameRecord from "../../records/ProfileFrameRecord.tsx";

require = fn;
let closure_4 = fn(8203).useFramePreviewOverrideStore;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/collectibles/profile_frames/hooks/useFramePreviewOverrideFrame.native.tsx",
);

export default function useFramePreviewOverrideFrame() {
  const tmp = closure_4((override) => override.override);
  closure_0 = tmp;
  const items = [tmp];
  return noop.useMemo(() => {
    let tmp2 = null;
    if (null != closure_0) {
      const obj = {
        type: CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME,
        skuId: "frame-preview-override",
        label: null,
        layers: null,
        innerWidth: null,
        overflowTop: null,
        overflowBottom: null,
        overflowHorizontal: null,
      };
      ({
        frameKey: obj.label,
        layers: obj.layers,
        innerWidth: obj.innerWidth,
        overflowTop: obj.overflowTop,
        overflowBottom: obj.overflowBottom,
        overflowHorizontal: obj.overflowHorizontal,
      } = closure_0);
      tmp2 = new ProfileFrameRecord(obj);
    }
    return tmp2;
  }, items);
}
