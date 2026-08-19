// discord_app/modules/premium/powerups/native/GuildPowerupsPerkCard.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Button from "../../../../design/void/native.tsx";
import AccessibilityAnnouncer from "../../../../design/shared.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../../_runtime/04756_LinearGradient.js";
import apexExperiment from "../../../design/ManaTypeConsolidationExperiment.tsx";
import GuildPowerupsImageDefault from "GuildPowerupsImage.tsx";
import GuildPowerupCardFooterActive from "GuildPowerupsCardFooter.tsx";
import importDefaultResult1Default from "GuildPowerupsCard.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { marginHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: 0, overflow: "hidden" };
createCacheKey[2] = { gap: ThemesDefault.space.PX_16, padding: ThemesDefault.space.PX_16 };
createCacheKey[3] = { width: "100%", height: 160 };
createCacheKey[4] = { position: "absolute", left: 0, right: 0, top: 0, height: "100%" };
createCacheKey[5] = { gap: ThemesDefault.space.PX_4 };
createCacheKey[6] = { position: "absolute", top: ThemesDefault.space.PX_12, right: ThemesDefault.space.PX_12 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsPerkCard.tsx");

export default function GuildPowerupsPerkCard(arg0) {
  ({ imageUrl, isImageAnimated } = arg0);
  ({ title, description } = arg0);
  if (isImageAnimated === undefined) {
    isImageAnimated = true;
  }
  ({ riveComponent, status, badge } = arg0);
  ({ style, onPress } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const tmp2 = callback2();
  let obj = AccessibilityAnnouncer;
  const tmp5 = useThemeDefault();
  obj1 = apexExperiment;
  const manaTypeConsolidationExperiment = obj1.useManaTypeConsolidationExperiment("GuildPowerupsPerkCard");
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  const items = [tmp2.container, style];
  obj = { style: tmp2.imageContainer, children: null };
  let tmp3Result = importDefaultResult1Default;
  if (riveComponent == null) {
    tmp3Result = GuildPowerupsImageDefault;
    if (imageUrl == null) {
      imageUrl = "";
    }
    obj1 = { imageUrl: null, isAnimated: null };
    obj1[0] = imageUrl;
    obj1[1] = isImageAnimated;
    riveComponent = callback(tmp3Result, obj1);
  }
  const items1 = [riveComponent, ];
  const tmp9 = obj.isThemeDark(useThemeDefault()) ? ["#0f101100", "#0f101166"] : ["#0f101100", "#0f10111a"];
  items1[1] = callback(LinearGradientDefault, { colors: obj.isThemeDark(useThemeDefault()) ? ["#0f101100", "#0f101166"] : ["#0f101100", "#0f10111a"], style: tmp2.gradient });
  obj[1] = items1;
  const items2 = [callback(View, obj), , , ];
  const obj3 = { style: tmp2.contentContainer, children: null };
  const obj4 = { style: tmp2.headerContainer, children: null };
  let str;
  if (manaTypeConsolidationExperiment) {
    str = "text-strong";
  }
  const obj5 = { color: str, variant: null, children: null };
  let str2 = "heading-md/bold";
  if (manaTypeConsolidationExperiment) {
    str2 = "experimental/heading-md/semibold";
  }
  obj5[1] = str2;
  obj5[2] = title;
  const items3 = [callback(Text.Text, obj5), ];
  let str3 = "text-sm/medium";
  if (manaTypeConsolidationExperiment) {
    str3 = "experimental/body-sm/normal";
  }
  items3[1] = callback(Text.Text, { variant: str3, children: description });
  obj4[1] = items3;
  const items4 = [callback(View, obj4), ];
  const obj6 = {};
  const merged1 = Object.assign(merged);
  obj6.status = status;
  items4[1] = callback(GuildPowerupCardFooterActive.GuildPowerupsCardFooter, obj6);
  obj3[1] = items4;
  items2[1] = callback(View, obj3);
  let tmp15Result = "new" === badge;
  if (tmp15Result) {
    const obj7 = { text: null, style: null };
    const intl = getSystemLocale.intl;
    obj7[0] = intl.string(getSystemLocale.t.y2b7CA);
    obj7[1] = tmp2.badge;
    tmp15Result = callback(Button.TextBadge, obj7);
  }
  items2[2] = tmp15Result;
  tmp15Result = "beta" === badge;
  if (tmp15Result) {
    const obj8 = { text: null, color: null, style: null };
    const intl2 = getSystemLocale.intl;
    obj8[0] = intl2.string(getSystemLocale.t.oW0eUd);
    obj8[1] = Button.BadgeColors.BRAND;
    obj8[2] = tmp2.badge;
    tmp15Result = callback(Button.TextBadge, obj8);
  }
  items2[3] = tmp15Result;
  obj[4] = items2;
  return callback(tmp3Result, obj);
};