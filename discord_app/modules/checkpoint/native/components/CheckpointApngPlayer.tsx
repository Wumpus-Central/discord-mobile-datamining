// discord_app/modules/checkpoint/native/components/CheckpointApngPlayer.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../../_runtime/00576_react.js";
import utils_PlatformUtils from "../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import APNGPlayer from "../../../image/native/APNGPlayer.android.tsx";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ container: { alignItems: "center", justifyContent: "center" } });
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let style;
      let tmp10Result;
      let tmp5;
      let tmp6;
      let uri;
      let useReducedMotion;
      const obj = react;
      const cResult = obj.c(9);
      ({ uri, style } = arg0);
      const tmp4 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn = function u() {
          return useReducedMotion.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      if (cResult[2] === stateFromStores) {
        if (cResult[3] === style) {
          let tmp9;
          if (cResult[4] === uri) {
            tmp9 = cResult[5];
          }
          if (cResult[6] === tmp4.container) {
            let tmp13;
            if (cResult[7] === tmp9) {
              tmp13 = cResult[8];
            }
            return tmp13;
          }
          const tmp16 = <View style={tmp4.container}>{tmp9}</View>;
          cResult[6] = tmp4.container;
          cResult[7] = tmp9;
          cResult[8] = tmp16;
          tmp13 = tmp16;
        }
      }
      const tmpResult2 = utils_PlatformUtils;
      if (tmpResult2.isIOS()) {
        const obj4 = { uri };
        tmp10Result = jsx(FastImageDefault, {
          source: obj4,
          style,
          resizeMode: "cover",
          enableAnimation: !stateFromStores,
        });
      } else {
        tmp10Result = jsx(APNGPlayer.APNGPlayer, { url: uri, autoplay: !stateFromStores, style });
      }
      cResult[2] = stateFromStores;
      cResult[3] = style;
      cResult[4] = uri;
      cResult[5] = tmp10Result;
      tmp9 = tmp10Result;
    }
  : (arg0) => {
      let style;
      let tmp5Result;
      let uri;
      let useReducedMotion;
      ({ uri, style } = arg0);
      const items = [AccessibilityStore];
      const tmp = closure_6();
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      const obj3 = utils_PlatformUtils;
      if (obj3.isIOS()) {
        const obj5 = { uri };
        tmp5Result = jsx(FastImageDefault, {
          source: obj5,
          style,
          resizeMode: "cover",
          enableAnimation: !stateFromStores,
        });
      } else {
        tmp5Result = jsx(APNGPlayer.APNGPlayer, { url: uri, autoplay: !stateFromStores, style });
      }
      return <View style={tmp.container}>{tmp5Result}</View>;
    };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointApngPlayer.tsx");

export default tmp2;
