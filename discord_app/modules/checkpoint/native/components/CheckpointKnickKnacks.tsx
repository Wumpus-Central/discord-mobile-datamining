// discord_app/modules/checkpoint/native/components/CheckpointKnickKnacks.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import _mod4610 from "../../../../../discord_common/js/packages/design/components/Rive/native/generated/index.tsx";
import CheckpointConstants from "../../CheckpointConstants.tsx";
import react from "../../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let style;

const View = react_native.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ rive: { width: 143, height: 32 } });
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (style) => {
      let tmp4;
      let tmp5;
      let tmp9;
      let useReducedMotion;
      const obj = react2;
      const cResult = obj.c(12);
      style = style.style;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn = function v() {
          return useReducedMotion.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      const tmp8 = closure_7();
      if (cResult[2] !== stateFromStores) {
        const obj2 = { iconColor: CHECKPOINT_PRIMARY, reducedMotion: stateFromStores };
        cResult[2] = stateFromStores;
        cResult[3] = obj2;
        tmp9 = obj2;
      } else {
        tmp9 = cResult[3];
      }
      let tmp11 = null;
      const tmpResult2 = PlatformUtils;
      if (!tmpResult2.isAndroid()) {
        if (cResult[4] === style) {
          let tmp12;
          let tmp13;
          if (cResult[5] === tmp8.rive) {
            tmp12 = cResult[6];
          }
          if (cResult[7] !== tmp9) {
            const tmp15 = jsx(_mod4610.CheckpointKnickKnacksRive, { artboard: "Entry", dataBinding: tmp9 });
            cResult[7] = tmp9;
            cResult[8] = tmp15;
            tmp13 = tmp15;
          } else {
            tmp13 = cResult[8];
          }
          if (cResult[9] === tmp12) {
            let tmp16;
            if (cResult[10] === tmp13) {
              tmp16 = cResult[11];
            }
            tmp11 = tmp16;
          }
          const tmp19 = <View style={tmp12}>{tmp13}</View>;
          cResult[9] = tmp12;
          cResult[10] = tmp13;
          cResult[11] = tmp19;
          tmp16 = tmp19;
        }
        const items1 = [tmp8.rive, style];
        cResult[4] = style;
        cResult[5] = tmp8.rive;
        cResult[6] = items1;
        tmp12 = items1;
      }
      return tmp11;
    }
  : (style) => {
      let useReducedMotion;
      let stateFromStores;
      style = style.style;
      const items = [AccessibilityStore];
      const obj = stateFromStores(504);
      stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      const items1 = [stateFromStores];
      const tmp4 = closure_7();
      const memo = react.useMemo(() => ({ iconColor: CHECKPOINT_PRIMARY, reducedMotion: stateFromStores }), items1);
      let tmp6 = null;
      const obj2 = stateFromStores(1369);
      if (!obj2.isAndroid()) {
        const items2 = [tmp4.rive, style];
        tmp6 = <View style={items2}>{null}</View>;
      }
      return tmp6;
    };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointKnickKnacks.tsx");

export default tmp2;
