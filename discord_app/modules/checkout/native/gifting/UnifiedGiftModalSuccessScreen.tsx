// === Module 11972: UnifiedGiftModalSuccessScreen ===

// Module 11972 (UnifiedGiftModalSuccessScreen)
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 19 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { UserSettingsSections } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_24, paddingBottom: ThemesDefault.space.PX_24, alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "relative", top: -50 };
createCacheKey[2] = { marginTop: -ThemesDefault.space.PX_24, marginBottom: ThemesDefault.space.PX_8 };
createCacheKey[3] = { marginBottom: ThemesDefault.space.PX_24 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModalSuccessScreen.tsx");

export default function UnifiedGiftModalSuccessScreen(giftBadgeProgress) {
  giftBadgeProgress = giftBadgeProgress.giftBadgeProgress;
  const onClose = giftBadgeProgress.onClose;
  let enabled;
  const tmp = callback2();
  const GiftingBadgeExperiment = giftBadgeProgress(enabled[7]).GiftingBadgeExperiment;
  enabled = GiftingBadgeExperiment.useConfig({ location: "UnifiedGiftModalSuccessScreen" }).enabled;
  const items = [enabled, giftBadgeProgress, onClose];
  const callback = React.useCallback(() => {
    onClose();
    let tmp2 = enabled;
    if (enabled) {
      tmp2 = null != giftBadgeProgress;
    }
    if (tmp2) {
      onClose(enabled[8]);
      const obj = { giftBadgeProgress: null };
      obj[0] = giftBadgeProgress;
      obj.pushLazy(giftBadgeProgress(enabled[10])(enabled[9], enabled.paths), obj, "collectibles_shop_gift_badge_modal");
    }
  }, items);
  const items1 = [onClose];
  const callback1 = React.useCallback(() => {
    onClose();
    giftBadgeProgress(enabled[11]);
    const obj = { screen: UserSettingsSections.PREMIUM_GIFTING, params: {} };
    obj.openUserSettings(obj);
  }, items1);
  let obj = { source: giftBadgeProgress(enabled[6]).GIFT_STYLE_IMG[giftBadgeProgress.giftStyle], style: tmp.image };
  const items2 = [callback(Image, obj), , , ];
  obj = { variant: "heading-lg/bold", style: tmp.title, children: null };
  const intl = giftBadgeProgress(enabled[14]).intl;
  obj[2] = intl.string(giftBadgeProgress(enabled[14]).t.MqZXbv);
  items2[1] = callback(giftBadgeProgress(enabled[13]).Text, obj);
  obj1 = { variant: "text-md/medium", style: tmp.description, children: null };
  const intl2 = giftBadgeProgress(enabled[14]).intl;
  obj1[2] = intl2.format(giftBadgeProgress(enabled[14]).t.YS2J4S, { onClick: callback1 });
  items2[2] = callback(giftBadgeProgress(enabled[13]).Text, obj1);
  const obj2 = { onPress: callback, text: null, textVariant: "text-md/semibold", grow: true };
  if (enabled) {
    if (null != giftBadgeProgress) {
      let cpT0Cq = tmp2(tmp3[14]).t.PDTjLN;
    }
    obj2[1] = tmp9(cpT0Cq);
    items2[3] = tmp8(giftBadgeProgress(enabled[15]).BaseTextButton, obj2);
    obj[3] = items2;
    return callback(tmp7, obj);
  }
  cpT0Cq = tmp2(tmp3[14]).t.cpT0Cq;
  tmp7 = onClose(enabled[12]);
  tmp8 = callback;
};