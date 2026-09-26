// === Module 10481: UnifiedGiftModalSuccessScreen ===

// Module 10481 (UnifiedGiftModalSuccessScreen)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import openUserSettings from "openUserSettings" /* 6800 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const UserSettingsSections = fn(1074).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4836);
let obj2 = { alertContainer: { paddingHorizontal: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_24, alignItems: "center" }, image: { position: "relative", top: -50 }, title: null, description: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_24, alignItems: "center" };
obj2.title = { marginTop: -nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_8 };
let obj4 = { marginTop: -nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_8 };
obj2.description = { marginBottom: nativeDefault.space.PX_24 };
let closure_8 = createStyles.createStyles(obj2);
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
      const obj2 = { giftBadgeProgress };
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10493, dependencyMap.paths), obj2, "collectibles_shop_gift_badge_modal");
    }
  }, items);
  const items1 = [onClose];
  const callback1 = noop.useCallback(() => {
    onClose();
    openUserSettings.openUserSettings({ screen: UserSettingsSections.PREMIUM_GIFTING, params: {} });
  }, items1);
  let obj = { onClose: callback, noDefaultButtons: true, style: tmp.alertContainer, children: null };
  let obj2 = { source: giftBadgeProgress(enabled[6]).GIFT_STYLE_IMG[giftBadgeProgress.giftStyle], style: tmp.image };
  const items2 = [closure_6(Image, obj2), , , ];
  const obj3 = { variant: "heading-lg/bold", style: tmp.title, children: null };
  const intl = giftBadgeProgress(enabled[14]).intl;
  obj3.children = intl.string(giftBadgeProgress(enabled[14]).t.MqZXbv);
  items2[1] = closure_6(giftBadgeProgress(enabled[13]).Text, obj3);
  const obj4 = { variant: "text-md/medium", style: tmp.description, children: null };
  const intl2 = giftBadgeProgress(enabled[14]).intl;
  obj4.children = intl2.format(giftBadgeProgress(enabled[14]).t.YS2J4S, { onClick: callback1 });
  items2[2] = closure_6(giftBadgeProgress(enabled[13]).Text, obj4);
  const obj5 = { onPress: callback, text: null, textVariant: "text-md/semibold", grow: true };
  if (enabled) {
    if (null != giftBadgeProgress) {
      let cpT0Cq = tmp2(tmp3[14]).t.PDTjLN;
    }
    obj5.text = tmp9(cpT0Cq);
    items2[3] = closure_6(giftBadgeProgress(enabled[15]).BaseTextButton, obj5);
    obj.children = items2;
    return closure_7(tmp7, obj);
  }
  cpT0Cq = tmp2(tmp3[14]).t.cpT0Cq;
  tmp7 = onClose(enabled[12]);
};