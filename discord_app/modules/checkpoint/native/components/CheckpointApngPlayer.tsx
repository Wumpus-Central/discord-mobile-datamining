// discord_app/modules/checkpoint/native/components/CheckpointApngPlayer.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import utils_PlatformUtils from "../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import APNGPlayer from "../../../image/native/APNGPlayer.android.tsx";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
const jsx = jsxProd.jsx;
let closure_6 = createStyles.createStyles({ container: { alignItems: "center", justifyContent: "center" } });
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointApngPlayer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let obj = dependencyMap;
      const cResult = c.c(9);
      ({ uri, style } = arg0);
      const tmp3 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn = function u() {
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
      if (cResult[2] === stateFromStores) {
        if (cResult[3] === style) {
          if (cResult[4] === uri) {
            if (cResult[6] === tmp3.container) {
              if (cResult[7] === tmp8) {
                let tmp13 = cResult[8];
              }
              return tmp13;
            }
            const obj3 = { style: tmp3.container, children: cResult[5] };
            const tmp16 = <View style={tmp3.container}>{cResult[5]}</View>;
            cResult[6] = tmp3.container;
            cResult[7] = cResult[5];
            cResult[8] = tmp16;
            tmp13 = tmp16;
          }
        }
      }
      const tmpResult = initialize;
      if (tmpResult2.isIOS()) {
        obj = { source: null, style: null, resizeMode: "cover", enableAnimation: null };
        const obj4 = { uri };
        obj.source = obj4;
        obj.style = style;
        obj.enableAnimation = !stateFromStores;
        let tmp9Result = jsx(FastImageDefault, {
          source: null,
          style: null,
          resizeMode: "cover",
          enableAnimation: null,
        });
      } else {
        const obj5 = { url: uri, autoplay: !stateFromStores, style };
        tmp9Result = jsx(APNGPlayer.APNGPlayer, { url: uri, autoplay: !stateFromStores, style });
      }
      cResult[2] = stateFromStores;
      cResult[3] = style;
      cResult[4] = uri;
      cResult[5] = tmp9Result;
      tmpResult2 = utils_PlatformUtils;
    }
  : (arg0) => {
      ({ uri, style } = arg0);
      const tmp = closure_6();
      const items = [AccessibilityStore];
      const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      const obj2 = { style: tmp.container, children: null };
      if (obj3.isIOS()) {
        const obj4 = { source: null, style: null, resizeMode: "cover", enableAnimation: null };
        const obj5 = { uri };
        obj4.source = obj5;
        obj4.style = style;
        obj4.enableAnimation = !stateFromStores;
        let tmp5Result = jsx(FastImageDefault, {
          source: null,
          style: null,
          resizeMode: "cover",
          enableAnimation: null,
        });
      } else {
        const obj6 = { url: uri, autoplay: !stateFromStores, style };
        tmp5Result = jsx(APNGPlayer.APNGPlayer, { url: uri, autoplay: !stateFromStores, style });
      }
      obj2.children = tmp5Result;
      return <View style={tmp.container}>{null}</View>;
    };
