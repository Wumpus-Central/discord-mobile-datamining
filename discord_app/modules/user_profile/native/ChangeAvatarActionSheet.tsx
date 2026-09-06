// discord_app/modules/user_profile/native/ChangeAvatarActionSheet.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import TableRow from "../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import BottomSheetTitleHeader from "../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import UserProfileUpsellButtonDefault from "UserProfileUpsellButton.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const AnalyticsObjects = fn(1074).AnalyticsObjects;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
fn(4560);
let createStyles = {
  nitroWheel: null,
  sublabel: null,
  label: null,
  remove: null,
  upsellButton: null,
  upsellTitleContainer: null,
  titleWrapper: null,
  titleContainer: null,
};
createStyles = { marginLeft: nativeDefault.space.PX_8 };
createStyles.nitroWheel = createStyles;
createStyles.sublabel = { color: nativeDefault.colors.TEXT_DEFAULT };
let obj1 = { color: nativeDefault.colors.TEXT_DEFAULT };
createStyles.label = {
  marginBottom: 4,
  color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
  alignItems: "center",
  flexDirection: "row",
};
let obj2 = {
  marginBottom: 4,
  color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
  alignItems: "center",
  flexDirection: "row",
};
createStyles.remove = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let obj3 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
createStyles.upsellButton = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 };
createStyles.upsellTitleContainer = { flexDirection: "row", alignItems: "flex-end" };
createStyles.titleWrapper = { flex: 0 };
createStyles.titleContainer = { justifyContent: "flex-start" };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/ChangeAvatarActionSheet.tsx");

export default function ChangeAvatarActionSheet(showRemoveAvatar) {
  ({ handleUploadGIFAvatarSelect, handleEditAvatarDecorationSelect, showAnimatedAvatarUpsell } = showRemoveAvatar);
  ({ handleUploadAvatarSelect, handleRemoveAvatarSelect } = showRemoveAvatar);
  if (showAnimatedAvatarUpsell === undefined) {
    showAnimatedAvatarUpsell = false;
  }
  let flag = showRemoveAvatar.showRemoveAvatar;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_9();
  let obj = initialize;
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = PremiumUtilsDefault;
  let isPremiumResult = obj1.isPremium(stateFromStores);
  obj = { title: null, trailing: null, titleWrapperStyle: null, titleContainerStyle: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.lqaIxI);
  if (isPremiumResult) {
    isPremiumResult = tmp8(tmp2(8662).NitroWheelIcon, {});
  }
  obj.trailing = isPremiumResult;
  ({ titleWrapper: obj3.titleWrapperStyle, titleContainer: obj3.titleContainerStyle } = tmp);
  const items1 = [timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, obj)];
  obj = { label: null, subLabel: null, onPress: null };
  const intl2 = tmp2(1114).intl;
  obj.label = intl2.string(util.t["MsUY/S"]);
  const intl3 = tmp2(1114).intl;
  obj.subLabel = intl3.string(util.t.r5hKOy);
  obj.onPress = handleUploadAvatarSelect;
  const items2 = [timestampProducer(TableRow.TableRow, obj), , , ,];
  let tmp8Result = null != handleUploadGIFAvatarSelect && !showAnimatedAvatarUpsell;
  if (tmp8Result) {
    obj1 = { label: null, onPress: null };
    const intl4 = tmp2(1114).intl;
    obj1.label = intl4.string(tmp2(1114).t["xsC+/y"]);
    obj1.onPress = handleUploadGIFAvatarSelect;
    tmp8Result = tmp8(tmp2(5605).TableRow, obj1);
  }
  items2[1] = tmp8Result;
  if (showAnimatedAvatarUpsell) {
    const obj2 = { label: null, subLabel: null };
    const obj3 = { style: tmp.upsellTitleContainer, children: null };
    const obj4 = { text: null };
    const intl5 = tmp2(1114).intl;
    obj4.text = intl5.string(tmp2(1114).t.xZ0Wot);
    const items3 = [tmp8(tmp2(8593).FormLabel, obj4)];
    const obj5 = { style: tmp.nitroWheel, size: "sm" };
    items3[1] = tmp8(tmp2(8662).NitroWheelIcon, obj5);
    obj3.children = items3;
    obj2.label = tmp7(View, obj3);
    const obj6 = { children: null };
    const obj7 = { style: tmp.sublabel, numberOfLines: 3, text: null };
    const intl6 = tmp2(1114).intl;
    obj7.text = intl6.string(tmp2(1114).t.L3UPqR);
    const items4 = [tmp8(tmp2(8593).FormSubLabel, obj7)];
    const obj8 = { style: tmp.upsellButton, children: null };
    const obj9 = { analyticsObject: AnalyticsObjects.ANIMATED_AVATAR, label: null };
    const intl7 = tmp2(1114).intl;
    obj9.label = intl7.string(tmp2(1114).t.mr4K7D);
    obj8.children = tmp8(UserProfileUpsellButtonDefault, obj9);
    items4[1] = tmp8(View, obj8);
    obj6.children = items4;
    obj2.subLabel = tmp7(React6, obj6);
    showAnimatedAvatarUpsell = tmp8(tmp2(5605).TableRow, obj2);
    const tmp5Result = UserProfileUpsellButtonDefault;
  }
  items2[2] = showAnimatedAvatarUpsell;
  tmp8Result = null != handleEditAvatarDecorationSelect;
  if (tmp8Result) {
    const obj10 = { label: null, onPress: null };
    const obj11 = { style: tmp.upsellTitleContainer, children: null };
    const obj12 = { text: null };
    const intl8 = tmp2(1114).intl;
    obj12.text = intl8.string(tmp2(1114).t.BVcYCx);
    obj11.children = tmp8(tmp2(8593).FormLabel, obj12);
    obj10.label = tmp8(View, obj11);
    obj10.onPress = handleEditAvatarDecorationSelect;
    tmp8Result = tmp8(tmp2(5605).TableRow, obj10);
  }
  items2[3] = tmp8Result;
  if (flag) {
    const obj13 = { label: null, onPress: null };
    const obj14 = { style: null, text: null };
    const items5 = [,];
    ({ label: arr6[0], remove: arr6[1] } = tmp);
    obj14.style = items5;
    const intl9 = tmp2(1114).intl;
    obj14.text = intl9.string(tmp2(1114).t.twB3fz);
    obj13.label = tmp8(tmp2(8593).FormLabel, obj14);
    obj13.onPress = handleRemoveAvatarSelect;
    flag = tmp8(tmp2(5605).TableRow, obj13);
  }
  const obj15 = { children: null };
  items2[4] = flag;
  items1[1] = React5(TableRowGroup.TableRowGroup, { hasIcons: false, children: items2 });
  obj15.children = items1;
  return React5(ActionSheet.ActionSheet, obj15);
}
