// discord_app/modules/premium/powerups/native/GuildPowerupsImage.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../../_runtime/00576_react.js";
import utils_PlatformUtils from "../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import APNGDecorationNativeComponentDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/APNGDecorationNativeComponent.tsx";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({
  image: { width: "75%", height: "100%", alignSelf: "center", resizeMode: "contain" },
});
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let imageUrl;
      let isAnimated;
      let style;
      let tmp10;
      let tmp6;
      let tmp7;
      let useReducedMotion;
      const obj = react;
      const cResult = obj.c(8);
      ({ imageUrl, isAnimated, style } = arg0);
      const tmp5 = closure_5();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn = function l() {
          return useReducedMotion.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp6 = items;
        tmp7 = fn;
      } else {
        [tmp6, tmp7] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
      if (cResult[2] === imageUrl) {
        if (cResult[3] === (undefined === isAnimated || isAnimated)) {
          if (cResult[4] === style) {
            if (cResult[5] === tmp5.image) {
              if (cResult[6] === stateFromStores) {
                tmp10 = cResult[7];
              }
              return tmp10;
            }
          }
        }
      }
      const tmpResult2 = utils_PlatformUtils;
      if (tmpResult2.isAndroid()) {
        if (undefined === isAnimated || isAnimated) {
          let tmp13;
          if (!stateFromStores) {
            const items1 = [tmp5.image, style];
            tmp13 = jsx(APNGDecorationNativeComponentDefault, { style: items1, url: imageUrl });
          }
          cResult[2] = imageUrl;
          cResult[3] = undefined === isAnimated || isAnimated;
          cResult[4] = style;
          cResult[5] = tmp5.image;
          cResult[6] = stateFromStores;
          cResult[7] = tmp13;
          tmp10 = tmp13;
        }
      }
      const items2 = [tmp5.image, style];
      tmp13 = jsx(FastImageDefault, { style: items2, source: { uri: imageUrl } });
    }
  : (style) => {
      let imageUrl;
      let isAnimated;
      let useReducedMotion;
      ({ imageUrl, isAnimated } = style);
      if (isAnimated === undefined) {
        isAnimated = true;
      }
      style = style.style;
      const tmp = closure_5();
      const items = [AccessibilityStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      const obj2 = utils_PlatformUtils;
      if (obj2.isAndroid()) {
        if (isAnimated) {
          let tmp6;
          if (!stateFromStores) {
            const items1 = [tmp.image, style];
            tmp6 = jsx(APNGDecorationNativeComponentDefault, { style: items1, url: imageUrl });
          }
          return tmp6;
        }
      }
      const items2 = [tmp.image, style];
      tmp6 = jsx(FastImageDefault, { style: items2, source: { uri: imageUrl } });
    };
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsImage.tsx");

export default tmp2;
