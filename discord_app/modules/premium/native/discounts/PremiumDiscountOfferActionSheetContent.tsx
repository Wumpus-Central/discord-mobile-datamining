// discord_app/modules/premium/native/discounts/PremiumDiscountOfferActionSheetContent.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import FolderIcon from "../../../../design/components/Icon/native/redesign/generated/FolderIcon.tsx";
import native from "../../../../design/assets/native.tsx";
import NitroWheelIcon from "../../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import ChatSmileIcon from "../../../../design/components/Icon/native/redesign/generated/ChatSmileIcon.tsx";
import UserIcon from "../../../../design/components/Icon/native/redesign/generated/UserIcon.tsx";
import PremiumPerksListDefault from "../../../../components_native/premium/PremiumPerksList.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
let obj = { contentContainer: null, buttonContainer: null, title: null, heroIllustrationContainer: null };
obj = {
  paddingHorizontal: 36,
  paddingTop: 18,
  paddingBottom: 36,
  width: "100%",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
  gap: 0,
};
obj.contentContainer = obj;
obj.buttonContainer = { marginVertical: 6, width: "100%", height: 48 };
obj.title = { width: "100%", textAlign: "center" };
obj.heroIllustrationContainer = { alignItems: "center", justifyContent: "center", height: 188, width: "100%" };
let closure_6 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/premium/native/discounts/PremiumDiscountOfferActionSheetContent.tsx",
);

export default noop.memo(function PremiumDiscountOfferActionSheetContent(arg0) {
  ({ discountOffer, onConfirm } = arg0);
  const tmp = closure_6();
  let obj = { IconComponent: UserIcon.UserIcon, label: null, description: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.kpMomJ);
  const intl2 = util.intl;
  obj.description = intl2.string(util.t.uVUtPw);
  const items = [obj, ,];
  obj = { IconComponent: ChatSmileIcon.ChatSmileIcon, label: null, description: null };
  const intl3 = util.intl;
  obj.label = intl3.string(util.t["R2IV/Q"]);
  const intl4 = util.intl;
  obj.description = intl4.string(util.t["3SUJLd"]);
  items[1] = obj;
  obj = { IconComponent: FolderIcon.FolderIcon, label: null, description: null };
  const intl5 = util.intl;
  obj.label = intl5.string(util.t["u/NJKc"]);
  const intl6 = util.intl;
  obj.description = intl6.string(util.t.i1UuMk);
  items[2] = obj;
  const amount = discountOffer.discount.amount;
  const obj1 = { style: tmp.contentContainer, children: null };
  const items1 = [
    React4(View, {
      style: tmp.heroIllustrationContainer,
      children: React4(native.NitroWumpusFlightRight3dIllustration, { width: 180, height: 180 }),
    }),
    ,
    ,
  ];
  const obj3 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, children: null };
  const intl7 = util.intl;
  obj3.children = intl7.formatToPlainString(util.t.qowbUk, { percent: amount });
  items1[1] = React4(Text_Text.Text, obj3);
  items1[2] = React4(PremiumPerksListDefault, { perks: items });
  const obj4 = { style: tmp.buttonContainer, children: null };
  const obj5 = { size: "lg", text: null, onPress: null, grow: true, icon: null };
  const intl8 = util.intl;
  obj5.text = intl8.formatToPlainString(util.t.bkQ4bH, { percent: amount });
  obj5.onPress = onConfirm;
  const obj2 = {
    style: tmp.heroIllustrationContainer,
    children: React4(native.NitroWumpusFlightRight3dIllustration, { width: 180, height: 180 }),
  };
  obj5.icon = React4(NitroWheelIcon.NitroWheelIcon, { size: "md", color: nativeDefault.unsafe_rawColors.WHITE });
  obj4.children = React4(components_Button_Button.Button, obj5);
  items1[3] = React4(View, obj4);
  obj1.children = items1;
  return hasOwnProperty(View, obj1);
});
