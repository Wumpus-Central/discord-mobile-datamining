// === Module 11579: UnifiedGiftModalSuccessScreen ===

// Module 11579 (UnifiedGiftModalSuccessScreen)
import nativeDefault from "native" /* 575 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import openUserSettings from "openUserSettings" /* 8109 */;
import noop from "module_19" /* 19 */;

require = fn;
const UserSettingsSections = fn(1071).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5043);
let obj2 = { alertContainer: { paddingHorizontal: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_24, alignItems: "center" }, image: { position: "relative", top: -50 }, title: null, description: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_24, alignItems: "center" };
obj2.title = { marginTop: -nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_8 };
let obj4 = { marginTop: -nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_8 };
obj2.description = { marginBottom: nativeDefault.space.PX_24 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModalSuccessScreen.tsx");

export default function UnifiedGiftModalSuccessScreen(giftBadgeProgress) {
  giftBadgeProgress = giftBadgeProgress.giftBadgeProgress;
  const onClose = giftBadgeProgress.onClose;
  const tmp = closure_7();
  items = [giftBadgeProgress, onClose];
  const callback = noop.useCallback(() => {
    onClose();
    if (null != giftBadgeProgress) {
      const obj2 = { giftBadgeProgress: tmp2 };
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11591, dependencyMap.paths), obj2, "collectibles_shop_gift_badge_modal");
    }
  }, items);
  const items1 = [onClose];
  const callback1 = noop.useCallback(() => {
    onClose();
    openUserSettings.openUserSettings({ screen: UserSettingsSections.PREMIUM_GIFTING, params: {} });
  }, items1);
  let obj = { onClose: callback, noDefaultButtons: true, style: tmp.alertContainer, children: null };
  const tmp4 = giftBadgeProgress(11580).GIFT_STYLE_IMG[giftBadgeProgress.giftStyle];
  const tmp8 = onClose(6118);
  const items2 = [closure_5(onClose(5730), { source: tmp4, style: tmp.image }), , , ];
  const obj3 = { variant: "heading-lg/semibold", style: tmp.title, children: null };
  const intl = tmp2(1112).intl;
  obj3.children = intl.string(giftBadgeProgress(1112).t.MqZXbv);
  items2[1] = closure_5(giftBadgeProgress(5634).Text, obj3);
  const obj4 = { variant: "body-md/medium", style: tmp.description, children: null };
  const intl2 = tmp2(1112).intl;
  obj4.children = intl2.format(giftBadgeProgress(1112).t.YS2J4S, { onClick: callback1 });
  items2[2] = closure_5(giftBadgeProgress(5634).Text, obj4);
  const obj5 = { onPress: callback, text: null, textVariant: "body-md/semibold", grow: true };
  const intl3 = tmp2(1112).intl;
  if (null != giftBadgeProgress) {
    let cpT0Cq = tmp2(1112).t.PDTjLN;
  } else {
    cpT0Cq = tmp2(1112).t.cpT0Cq;
  }
  obj5.text = intl3.string(cpT0Cq);
  items2[3] = closure_5(giftBadgeProgress(5642).BaseTextButton, obj5);
  obj.children = items2;
  return closure_6(tmp8, obj);
};