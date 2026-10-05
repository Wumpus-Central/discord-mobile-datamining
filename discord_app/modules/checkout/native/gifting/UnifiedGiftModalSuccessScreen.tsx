// === Module 10751: UnifiedGiftModalSuccessScreen ===

// Module 10751 (UnifiedGiftModalSuccessScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import openUserSettings from "openUserSettings" /* 6885 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
const Image = react_native.Image;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { alertContainer: obj2, image: { position: "relative", top: -50 }, title: obj3, description: obj4 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_24, alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { marginTop: -nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_8 };
obj4 = { marginBottom: nativeDefault.space.PX_24 };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModalSuccessScreen.tsx");

export default function UnifiedGiftModalSuccessScreen(giftBadgeProgress) {
  let intl;
  let intl2;
  giftBadgeProgress = giftBadgeProgress.giftBadgeProgress;
  const onClose = giftBadgeProgress.onClose;
  let enabled;
  const giftStyle = giftBadgeProgress.giftStyle;
  const tmp = closure_8();
  let tmp2 = giftBadgeProgress;
  const tmp4 = giftBadgeProgress(enabled[6]).GIFT_STYLE_IMG[giftStyle];
  const GiftingBadgeExperiment = giftBadgeProgress(enabled[7]).GiftingBadgeExperiment;
  enabled = GiftingBadgeExperiment.useConfig({ location: "UnifiedGiftModalSuccessScreen" }).enabled;
  const items = [enabled, giftBadgeProgress, onClose];
  const callback = react.useCallback(() => {
    onClose();
    const tmp2 = enabled && null != giftBadgeProgress;
    if (tmp2) {
      const obj2 = { giftBadgeProgress };
      const obj = ModalActionCreatorsDefault;
      obj.pushLazy(asyncRequire(10763, dependencyMap.paths), obj2, "collectibles_shop_gift_badge_modal");
    }
  }, items);
  const items1 = [onClose];
  const callback1 = react.useCallback(() => {
    onClose();
    const obj = openUserSettings;
    const obj2 = { screen: UserSettingsSections.PREMIUM_GIFTING, params: {} };
    obj.openUserSettings(obj2);
  }, items1);
  let obj = { onClose: callback, noDefaultButtons: true, style: tmp.alertContainer, children: null };
  let obj2 = { source: tmp4, style: tmp.image };
  const items2 = [, , , ];
  const tmp8 = onClose(enabled[12]);
  items2[0] = closure_6(Image, obj2);
  const obj3 = { variant: "heading-lg/bold", style: tmp.title, children: intl.string(tmp2(enabled[14]).t.MqZXbv) };
  const Text = tmp2(tmp3[13]).Text;
  intl = tmp2(tmp3[14]).intl;
  items2[1] = closure_6(Text, obj3);
  const obj4 = { variant: "text-md/medium", style: tmp.description, children: intl2.format(tmp2(enabled[14]).t.YS2J4S, { onClick: callback1 }) };
  const Text2 = tmp2(tmp3[13]).Text;
  intl2 = tmp2(tmp3[14]).intl;
  items2[2] = closure_6(Text2, obj4);
  const obj5 = { onPress: callback, text: null, textVariant: "text-md/semibold", grow: true };
  const BaseTextButton = tmp2(tmp3[15]).BaseTextButton;
  const intl3 = tmp2(tmp3[14]).intl;
  if (enabled) {
    let cpT0Cq;
    if (null != giftBadgeProgress) {
      cpT0Cq = tmp2(tmp3[14]).t.PDTjLN;
    }
    obj5.text = tmp11(cpT0Cq);
    items2[3] = closure_6(BaseTextButton, obj5);
    obj.children = items2;
    return closure_7(tmp8, obj);
  }
  cpT0Cq = tmp2(tmp3[14]).t.cpT0Cq;
};