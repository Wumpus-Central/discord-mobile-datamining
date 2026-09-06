// discord_app/modules/premium/powerups/native/GuildPowerupsImage.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import utils_PlatformUtils from "../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import APNGDecorationNativeComponentDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/APNGDecorationNativeComponent.tsx";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles({
  image: { width: "75%", height: "100%", alignSelf: "center", resizeMode: "contain" },
});
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
}
