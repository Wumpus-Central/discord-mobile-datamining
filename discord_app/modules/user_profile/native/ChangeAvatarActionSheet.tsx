// === Module 14610: ChangeAvatarActionSheet ===

// Module 14610 (ChangeAvatarActionSheet)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4218 */;
import TableRow from "TableRow" /* 5605 */;
import TableRowGroup from "TableRowGroup" /* 5687 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7149 */;
import ActionSheet from "ActionSheet" /* 7198 */;
import Form from "Form" /* 8593 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8662 */;
import UserProfileUpsellButtonDefault from "UserProfileUpsellButton" /* 14594 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const View = fn(17).View;
const AnalyticsObjects = fn(1074).AnalyticsObjects;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
fn(4560);
let createStyles = { nitroWheel: null, sublabel: null, label: null, remove: null, upsellButton: null, upsellTitleContainer: null, titleWrapper: null, titleContainer: null };
createStyles = { marginLeft: nativeDefault.space.PX_8 };
createStyles.nitroWheel = createStyles;
createStyles.sublabel = { color: nativeDefault.colors.TEXT_DEFAULT };
let obj1 = { color: nativeDefault.colors.TEXT_DEFAULT };
createStyles.label = { marginBottom: 4, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, alignItems: "center", flexDirection: "row" };
let obj2 = { marginBottom: 4, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, alignItems: "center", flexDirection: "row" };
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
    isPremiumResult = timestampProducer(NitroWheelIcon.NitroWheelIcon, {});
  }
  obj.trailing = isPremiumResult;
  ({ titleWrapper: obj3.titleWrapperStyle, titleContainer: obj3.titleContainerStyle } = tmp);
  const items1 = [timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, obj), ];
  obj = { label: null, subLabel: null, onPress: null };
  const intl2 = util.intl;
  obj.label = intl2.string(util.t["MsUY/S"]);
  const intl3 = util.intl;
  obj.subLabel = intl3.string(util.t.r5hKOy);
  obj.onPress = handleUploadAvatarSelect;
  const items2 = [timestampProducer(TableRow.TableRow, obj), , , , ];
  let tmp8Result = null != handleUploadGIFAvatarSelect && !showAnimatedAvatarUpsell;
  if (tmp8Result) {
    obj1 = { label: null, onPress: null };
    const intl4 = util.intl;
    obj1.label = intl4.string(util.t["xsC+/y"]);
    obj1.onPress = handleUploadGIFAvatarSelect;
    tmp8Result = timestampProducer(TableRow.TableRow, obj1);
  }
  items2[1] = tmp8Result;
  if (showAnimatedAvatarUpsell) {
    const obj2 = { label: null, subLabel: null };
    const obj3 = { style: tmp.upsellTitleContainer, children: null };
    const obj4 = { text: null };
    const intl5 = util.intl;
    obj4.text = intl5.string(util.t.xZ0Wot);
    const items3 = [timestampProducer(Form.FormLabel, obj4), ];
    const obj5 = { style: tmp.nitroWheel, size: "sm" };
    items3[1] = timestampProducer(NitroWheelIcon.NitroWheelIcon, obj5);
    obj3.children = items3;
    obj2.label = React5(View, obj3);
    const obj6 = { children: null };
    const obj7 = { style: tmp.sublabel, numberOfLines: 3, text: null };
    const intl6 = util.intl;
    obj7.text = intl6.string(util.t.L3UPqR);
    const items4 = [timestampProducer(Form.FormSubLabel, obj7), ];
    const obj8 = { style: tmp.upsellButton, children: null };
    const obj9 = { analyticsObject: AnalyticsObjects.ANIMATED_AVATAR, label: null };
    const intl7 = util.intl;
    obj9.label = intl7.string(util.t.mr4K7D);
    obj8.children = timestampProducer(UserProfileUpsellButtonDefault, obj9);
    items4[1] = timestampProducer(View, obj8);
    obj6.children = items4;
    obj2.subLabel = React5(React6, obj6);
    showAnimatedAvatarUpsell = timestampProducer(TableRow.TableRow, obj2);
    const tmp5Result = UserProfileUpsellButtonDefault;
  }
  items2[2] = showAnimatedAvatarUpsell;
  tmp8Result = null != handleEditAvatarDecorationSelect;
  if (tmp8Result) {
    const obj10 = { label: null, onPress: null };
    const obj11 = { style: tmp.upsellTitleContainer, children: null };
    const obj12 = { text: null };
    const intl8 = util.intl;
    obj12.text = intl8.string(util.t.BVcYCx);
    obj11.children = timestampProducer(Form.FormLabel, obj12);
    obj10.label = timestampProducer(View, obj11);
    obj10.onPress = handleEditAvatarDecorationSelect;
    tmp8Result = timestampProducer(TableRow.TableRow, obj10);
  }
  items2[3] = tmp8Result;
  if (flag) {
    const obj13 = { label: null, onPress: null };
    const obj14 = { style: null, text: null };
    const items5 = [, ];
    ({ label: arr6[0], remove: arr6[1] } = tmp);
    obj14.style = items5;
    const intl9 = util.intl;
    obj14.text = intl9.string(util.t.twB3fz);
    obj13.label = timestampProducer(Form.FormLabel, obj14);
    obj13.onPress = handleRemoveAvatarSelect;
    flag = timestampProducer(TableRow.TableRow, obj13);
  }
  const obj15 = { children: null };
  items2[4] = flag;
  items1[1] = React5(TableRowGroup.TableRowGroup, { hasIcons: false, children: items2 });
  obj15.children = items1;
  return React5(ActionSheet.ActionSheet, obj15);
};