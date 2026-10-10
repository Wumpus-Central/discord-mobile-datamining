// discord_app/modules/checkpoint/native/components/CheckpointKnickKnacks.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import _mod4842 from "../../../../../discord_common/js/packages/design/components/Rive/native/generated/index.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
const View = fn(17).View;
const CHECKPOINT_PRIMARY = fn(5437).CHECKPOINT_PRIMARY;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_7 = createStyles.createStyles({ rive: { width: 143, height: 32 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointKnickKnacks.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CheckpointKnickKnacks(style) {
      const cResult = c.c(12);
      style = style.style;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn = function k() {
          return useReducedMotion.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      const tmp8 = closure_7();
      if (cResult[2] !== stateFromStores) {
        const obj2 = { iconColor: CHECKPOINT_PRIMARY, reducedMotion: stateFromStores };
        cResult[2] = stateFromStores;
        cResult[3] = obj2;
        let tmp9 = obj2;
      } else {
        tmp9 = cResult[3];
      }
      const tmpResult = initialize;
      if (tmpResult2.isAndroid()) {
        return null;
      } else {
        if (cResult[4] === style) {
          if (cResult[5] === tmp8.rive) {
            let tmp11 = cResult[6];
          }
          if (cResult[7] !== tmp9) {
            const obj3 = { artboard: "Entry", dataBinding: tmp9 };
            const tmp14 = jsx(_mod4842.CheckpointKnickKnacksRive, { artboard: "Entry", dataBinding: tmp9 });
            cResult[7] = tmp9;
            cResult[8] = tmp14;
            let tmp12 = tmp14;
          } else {
            tmp12 = cResult[8];
          }
          if (cResult[9] === tmp11) {
          }
          const obj4 = { style: tmp11, children: tmp12 };
          const tmp18 = <View style={tmp11}>{tmp12}</View>;
          cResult[9] = tmp11;
          cResult[10] = tmp12;
          cResult[11] = tmp18;
        }
        const items1 = [tmp8.rive, style];
        cResult[4] = style;
        cResult[5] = tmp8.rive;
        cResult[6] = items1;
        tmp11 = items1;
      }
      tmpResult2 = PlatformUtils;
    }
  : function CheckpointKnickKnacks(style) {
      let stateFromStores;
      const items = [AccessibilityStore];
      stateFromStores = stateFromStores(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      const items1 = [stateFromStores];
      const obj = stateFromStores(504);
      const tmp = stateFromStores;
      const memo = noop.useMemo(() => ({ iconColor: CHECKPOINT_PRIMARY, reducedMotion: stateFromStores }), items1);
      const tmp4 = closure_7();
      let tmp6 = null;
      if (!obj2.isAndroid()) {
        const obj3 = { style: null, children: null };
        const items2 = [tmp4.rive, style.style];
        obj3.style = items2;
        const obj4 = { artboard: "Entry", dataBinding: memo };
        obj3.children = jsx(tmp(4842).CheckpointKnickKnacksRive, { artboard: "Entry", dataBinding: memo });
        tmp6 = <View style={null}>{null}</View>;
      }
      return tmp6;
    };
