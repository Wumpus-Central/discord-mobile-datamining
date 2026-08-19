// discord_app/modules/premium/powerups/native/GuildPowerupsImage.tsx
import PlatformTypes from "../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import preloadDefault from "../../../../components_native/common/FastImage.tsx";
import __INTERNAL_VIEW_CONFIGDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/APNGDecorationNativeComponent.tsx";
import maybeApplyNoTextColorForLightCustomTheme from "../../../a11y/AccessibilityStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = fn;
let closure_5 = createCacheKey.createStyles({ image: { width: "75%", height: "100%", alignSelf: "center", resizeMode: "contain" } });
const result = require("obj132").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsImage.tsx");

export default function GuildPowerupsImage(style) {
  ({ imageUrl, isAnimated } = style);
  if (isAnimated === undefined) {
    isAnimated = true;
  }
  style = style.style;
  const tmp = callback();
  let obj = initialize;
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (obj2.isAndroid()) {
    if (isAnimated) {
      if (!stateFromStores) {
        obj = { style: null, url: null };
        const items1 = [tmp.image, style];
        obj[0] = items1;
        obj[1] = imageUrl;
        let tmp6 = jsx(__INTERNAL_VIEW_CONFIGDefault, { style: null, url: null });
      }
      return tmp6;
    }
  }
  const items2 = [tmp.image, style];
  tmp6 = jsx(preloadDefault, { style: items2, source: { uri: imageUrl } });
  obj2 = PlatformTypes;
};