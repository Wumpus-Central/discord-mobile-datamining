// === Module 12257: GuildPowerupsImage ===

// Module 12257 (GuildPowerupsImage)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1383 */;
import FastImageDefault from "FastImage" /* 6156 */;
import APNGDecorationNativeComponentDefault from "APNGDecorationNativeComponent" /* 9012 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_5 = createStyles.createStyles({ image: { width: "75%", height: "100%", alignSelf: "center", resizeMode: "contain" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsImage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildPowerupsImage(arg0) {
  let obj = dependencyMap;
  const cResult = c.c(8);
  ({ imageUrl, isAnimated, style } = arg0);
  let image = closure_5();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function n() {
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
  if (cResult[2] === imageUrl) {
    if (cResult[3] === tmp3) {
      if (cResult[4] === style) {
        if (cResult[5] === image.image) {
          if (cResult[6] === stateFromStores) {
            return cResult[7];
          }
        }
      }
    }
  }
  const tmpResult = initialize;
  if (tmpResult2.isAndroid()) {
    if (tmp3) {
      if (!stateFromStores) {
        const obj3 = { style: null, url: null };
        const items1 = [image.image, style];
        obj3.style = items1;
        obj3.url = imageUrl;
        let tmp10 = jsx(APNGDecorationNativeComponentDefault, { style: null, url: null });
      }
      cResult[2] = imageUrl;
      cResult[3] = tmp3;
      cResult[4] = style;
      image = image.image;
      cResult[5] = image;
      cResult[6] = stateFromStores;
      cResult[7] = tmp10;
    }
  }
  tmpResult2 = utils_PlatformUtils;
  obj = { style: null, source: { uri: imageUrl } };
  const items2 = [image.image, style];
  obj.style = items2;
  tmp10 = jsx(FastImageDefault, { style: null, source: { uri: imageUrl } });
}) : (function GuildPowerupsImage(style) {
  ({ imageUrl, isAnimated } = style);
  if (isAnimated === undefined) {
    isAnimated = true;
  }
  style = style.style;
  const tmp = closure_5();
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (obj2.isAndroid()) {
    if (isAnimated) {
      if (!stateFromStores) {
        const obj3 = { style: null, url: null };
        const items1 = [tmp.image, style];
        obj3.style = items1;
        obj3.url = imageUrl;
        let tmp6 = jsx(APNGDecorationNativeComponentDefault, { style: null, url: null });
      }
      return tmp6;
    }
  }
  const obj4 = { style: null, source: { uri: imageUrl } };
  const items2 = [tmp.image, style];
  obj4.style = items2;
  tmp6 = jsx(FastImageDefault, { style: null, source: { uri: imageUrl } });
  obj2 = utils_PlatformUtils;
});