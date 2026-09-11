// === Module 12616: GuildPowerupsImage ===

// Module 12616 (GuildPowerupsImage)
import initialize from "initialize" /* 504 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1116 */;
import FastImageDefault from "FastImage" /* 5638 */;
import APNGDecorationNativeComponentDefault from "APNGDecorationNativeComponent" /* 8901 */;
import AccessibilityStore from "AccessibilityStore" /* 4598 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4606);
let closure_5 = createStyles.createStyles({ image: { width: "75%", height: "100%", alignSelf: "center", resizeMode: "contain" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsImage.tsx");

export default function GuildPowerupsImage(style) {
  ({ imageUrl, isAnimated } = style);
  if (isAnimated === undefined) {
    isAnimated = true;
  }
  style = style.style;
  const tmp = closure_5();
  let obj = initialize;
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (obj2.isAndroid()) {
    if (isAnimated) {
      if (!stateFromStores) {
        obj = { style: null, url: null };
        const items1 = [tmp.image, style];
        obj.style = items1;
        obj.url = imageUrl;
        let tmp6 = jsx(APNGDecorationNativeComponentDefault, { style: null, url: null });
      }
      return tmp6;
    }
  }
  obj = { style: null, source: { uri: imageUrl } };
  const items2 = [tmp.image, style];
  obj.style = items2;
  tmp6 = jsx(FastImageDefault, { style: null, source: { uri: imageUrl } });
  obj2 = utils_PlatformUtils;
};