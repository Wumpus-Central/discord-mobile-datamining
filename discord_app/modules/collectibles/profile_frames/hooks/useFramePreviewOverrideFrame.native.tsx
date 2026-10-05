// discord_app/modules/collectibles/profile_frames/hooks/useFramePreviewOverrideFrame.native.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import CollectiblesItemType from "../../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import FramePreviewOverrideStore from "../native/tooling/FramePreviewOverrideStore.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ProfileFrameRecord from "../../records/ProfileFrameRecord.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_4 = FramePreviewOverrideStore.useFramePreviewOverrideStore;
let c5 = "frame-preview-override";
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function () {
      let first;
      const obj = react2;
      const cResult = obj.c(8);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o(override) {
          return override.override;
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      const tmp5 = closure_4(first);
      let tmp6 = null;
      if (null != tmp5) {
        if (cResult[1] === tmp5.frameKey) {
          if (cResult[2] === tmp5.innerWidth) {
            if (cResult[3] === tmp5.layers) {
              if (cResult[4] === tmp5.overflowBottom) {
                if (cResult[5] === tmp5.overflowHorizontal) {
                  let tmp7;
                  if (cResult[6] === tmp5.overflowTop) {
                    tmp7 = cResult[7];
                  }
                  tmp6 = tmp7;
                }
              }
            }
          }
        }
        ({
          frameKey: obj2.label,
          layers: obj2.layers,
          innerWidth: obj2.innerWidth,
          overflowTop: obj2.overflowTop,
          overflowBottom: obj2.overflowBottom,
          overflowHorizontal: obj2.overflowHorizontal,
        } = tmp5);
        const self = this;
        const self2 = this;
        const obj3 = {
          type: CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME,
          skuId,
          label: null,
          layers: null,
          innerWidth: null,
          overflowTop: null,
          overflowBottom: null,
          overflowHorizontal: null,
        };
        const tmp11 = new ProfileFrameRecord(obj3);
        cResult[1] = tmp5.frameKey;
        cResult[2] = tmp5.innerWidth;
        cResult[3] = tmp5.layers;
        cResult[4] = tmp5.overflowBottom;
        cResult[5] = tmp5.overflowHorizontal;
        cResult[6] = tmp5.overflowTop;
        cResult[7] = tmp11;
        tmp7 = tmp11;
      }
      return tmp6;
    }
  : () => {
      const tmp = closure_4((override) => override.override);
      let closure_0 = tmp;
      const items = [tmp];
      return react.useMemo(function () {
        let tmp2 = null;
        if (null != closure_0) {
          const obj = {
            type: CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME,
            skuId,
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
          const self = this;
          const self2 = this;
          tmp2 = new ProfileFrameRecord(obj);
        }
        return tmp2;
      }, items);
    };
const result = size.fileFinishedImporting(
  "modules/collectibles/profile_frames/hooks/useFramePreviewOverrideFrame.native.tsx",
);

export default tmp2;
