// === Module 11015: UnifiedGiftModalSuccessScreen ===

// Module 11015 (UnifiedGiftModalSuccessScreen)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import openUserSettings from "openUserSettings" /* 7382 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const UserSettingsSections = fn(1074).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { alertContainer: null, image: null, title: null, description: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_24, alignItems: "center" };
createStyles.alertContainer = createStyles;
createStyles.image = { position: "relative", top: -50 };
createStyles.title = { marginTop: -nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_8 };
let obj1 = { marginTop: -nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_8 };
createStyles.description = { marginBottom: nativeDefault.space.PX_24 };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModalSuccessScreen.tsx");

export default function UnifiedGiftModalSuccessScreen(giftBadgeProgress) {
  giftBadgeProgress = giftBadgeProgress.giftBadgeProgress;
  const onClose = giftBadgeProgress.onClose;
  let enabled;
  const tmp = closure_8();
  const GiftingBadgeExperiment = giftBadgeProgress(enabled[7]).GiftingBadgeExperiment;
  enabled = GiftingBadgeExperiment.useConfig({ location: "UnifiedGiftModalSuccessScreen" }).enabled;
  const items = [enabled, giftBadgeProgress, onClose];
  const callback = noop.useCallback(() => {
    onClose();
    let tmp2 = enabled;
    if (enabled) {
      tmp2 = null != giftBadgeProgress;
    }
    if (tmp2) {
      const obj = { giftBadgeProgress };
      obj.pushLazy(asyncRequireImpl(11027, dependencyMap.paths), obj, "collectibles_shop_gift_badge_modal");
    }
  }, items);
  const items1 = [onClose];
  const callback1 = noop.useCallback(() => {
    onClose();
    const obj = { screen: UserSettingsSections.PREMIUM_GIFTING, params: {} };
    obj.openUserSettings(obj);
  }, items1);
  let obj = { onClose: callback, noDefaultButtons: true, style: tmp.alertContainer, children: null };
  obj = { source: giftBadgeProgress(enabled[6]).GIFT_STYLE_IMG[giftBadgeProgress.giftStyle], style: tmp.image };
  const items2 = [closure_6(Image, obj), , , ];
  obj = { variant: "heading-lg/bold", style: tmp.title, children: null };
  const intl = giftBadgeProgress(enabled[14]).intl;
  obj.children = intl.string(giftBadgeProgress(enabled[14]).t.MqZXbv);
  items2[1] = closure_6(giftBadgeProgress(enabled[13]).Text, obj);
  const obj1 = { variant: "text-md/medium", style: tmp.description, children: null };
  const intl2 = giftBadgeProgress(enabled[14]).intl;
  obj1.children = intl2.format(giftBadgeProgress(enabled[14]).t.YS2J4S, { onClick: callback1 });
  items2[2] = closure_6(giftBadgeProgress(enabled[13]).Text, obj1);
  const obj2 = { onPress: callback, text: null, textVariant: "text-md/semibold", grow: true };
  if (enabled) {
    if (null != giftBadgeProgress) {
      let cpT0Cq = tmp2(tmp3[14]).t.PDTjLN;
    }
    obj2.text = tmp9(cpT0Cq);
    items2[3] = closure_6(giftBadgeProgress(enabled[15]).BaseTextButton, obj2);
    obj.children = items2;
    return closure_7(tmp7, obj);
  }
  cpT0Cq = tmp2(tmp3[14]).t.cpT0Cq;
};