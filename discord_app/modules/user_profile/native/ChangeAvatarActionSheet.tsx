// === Module 14886: ChangeAvatarActionSheet ===

// Module 14886 (ChangeAvatarActionSheet)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4414 */;
import TableRow from "TableRow" /* 5822 */;
import TableRowGroup from "TableRowGroup" /* 5904 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7394 */;
import ActionSheet from "ActionSheet" /* 7442 */;
import Form from "Form" /* 8871 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8940 */;
import UserProfileUpsellButtonDefault from "UserProfileUpsellButton" /* 14870 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const View = fn(17).View;
const AnalyticsObjects = fn(1074).AnalyticsObjects;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(4756);
const obj2 = { nitroWheel: { marginLeft: nativeDefault.space.PX_8 }, sublabel: null, label: null, remove: null, upsellButton: null, upsellTitleContainer: null, titleWrapper: null, titleContainer: null };
const obj3 = { marginLeft: nativeDefault.space.PX_8 };
obj2.sublabel = { color: nativeDefault.colors.TEXT_DEFAULT };
let obj4 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj2.label = { marginBottom: 4, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, alignItems: "center", flexDirection: "row" };
let obj5 = { marginBottom: 4, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, alignItems: "center", flexDirection: "row" };
obj2.remove = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let obj6 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
obj2.upsellButton = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 };
obj2.upsellTitleContainer = { flexDirection: "row", alignItems: "flex-end" };
obj2.titleWrapper = { flex: 0 };
obj2.titleContainer = { justifyContent: "flex-start" };
let closure_9 = createStyles.createStyles(obj2);
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
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  let isPremiumResult = PremiumUtilsDefault.isPremium(stateFromStores);
  const obj4 = { title: null, trailing: null, titleWrapperStyle: null, titleContainerStyle: null };
  const intl = util.intl;
  obj4.title = intl.string(util.t.lqaIxI);
  if (isPremiumResult) {
    isPremiumResult = timestampProducer(NitroWheelIcon.NitroWheelIcon, {});
  }
  obj4.trailing = isPremiumResult;
  ({ titleWrapper: obj3.titleWrapperStyle, titleContainer: obj3.titleContainerStyle } = tmp);
  const items1 = [timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, obj4), ];
  const obj5 = { label: null, subLabel: null, onPress: null };
  const intl2 = util.intl;
  obj5.label = intl2.string(util.t["MsUY/S"]);
  const intl3 = util.intl;
  obj5.subLabel = intl3.string(util.t.r5hKOy);
  obj5.onPress = handleUploadAvatarSelect;
  const items2 = [timestampProducer(TableRow.TableRow, obj5), , , , ];
  let tmp8Result = null != handleUploadGIFAvatarSelect && !showAnimatedAvatarUpsell;
  if (tmp8Result) {
    const obj6 = { label: null, onPress: null };
    const intl4 = util.intl;
    obj6.label = intl4.string(util.t["xsC+/y"]);
    obj6.onPress = handleUploadGIFAvatarSelect;
    tmp8Result = timestampProducer(TableRow.TableRow, obj6);
  }
  items2[1] = tmp8Result;
  if (showAnimatedAvatarUpsell) {
    const obj7 = { label: null, subLabel: null };
    const obj8 = { style: tmp.upsellTitleContainer, children: null };
    const obj9 = { text: null };
    const intl5 = util.intl;
    obj9.text = intl5.string(util.t.xZ0Wot);
    const items3 = [timestampProducer(Form.FormLabel, obj9), ];
    const obj10 = { style: tmp.nitroWheel, size: "sm" };
    items3[1] = timestampProducer(NitroWheelIcon.NitroWheelIcon, obj10);
    obj8.children = items3;
    obj7.label = React5(View, obj8);
    const obj11 = { children: null };
    const obj12 = { style: tmp.sublabel, numberOfLines: 3, text: null };
    const intl6 = util.intl;
    obj12.text = intl6.string(util.t.L3UPqR);
    const items4 = [timestampProducer(Form.FormSubLabel, obj12), ];
    const obj13 = { style: tmp.upsellButton, children: null };
    const obj14 = { analyticsObject: AnalyticsObjects.ANIMATED_AVATAR, label: null };
    const intl7 = util.intl;
    obj14.label = intl7.string(util.t.mr4K7D);
    obj13.children = timestampProducer(UserProfileUpsellButtonDefault, obj14);
    items4[1] = timestampProducer(View, obj13);
    obj11.children = items4;
    obj7.subLabel = React5(React6, obj11);
    showAnimatedAvatarUpsell = timestampProducer(TableRow.TableRow, obj7);
    const tmp5Result = UserProfileUpsellButtonDefault;
  }
  items2[2] = showAnimatedAvatarUpsell;
  let tmp8Result2 = null != handleEditAvatarDecorationSelect;
  if (tmp8Result2) {
    const obj15 = { label: null, onPress: null };
    const obj16 = { style: tmp.upsellTitleContainer, children: null };
    const obj17 = { text: null };
    const intl8 = util.intl;
    obj17.text = intl8.string(util.t.BVcYCx);
    obj16.children = timestampProducer(Form.FormLabel, obj17);
    obj15.label = timestampProducer(View, obj16);
    obj15.onPress = handleEditAvatarDecorationSelect;
    tmp8Result2 = timestampProducer(TableRow.TableRow, obj15);
  }
  items2[3] = tmp8Result2;
  if (flag) {
    const obj18 = { label: null, onPress: null };
    const obj19 = { style: null, text: null };
    const items5 = [, ];
    ({ label: arr6[0], remove: arr6[1] } = tmp);
    obj19.style = items5;
    const intl9 = util.intl;
    obj19.text = intl9.string(util.t.twB3fz);
    obj18.label = timestampProducer(Form.FormLabel, obj19);
    obj18.onPress = handleRemoveAvatarSelect;
    flag = timestampProducer(TableRow.TableRow, obj18);
  }
  const obj36 = { children: null };
  items2[4] = flag;
  items1[1] = React5(TableRowGroup.TableRowGroup, { hasIcons: false, children: items2 });
  obj36.children = items1;
  return React5(ActionSheet.ActionSheet, obj36);
};