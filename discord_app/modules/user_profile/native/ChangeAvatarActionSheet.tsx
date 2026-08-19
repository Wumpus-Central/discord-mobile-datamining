// === Module 14028: ChangeAvatarActionSheet ===

// Module 14028 (ChangeAvatarActionSheet)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getPremiumPlanItemDefault from "getPremiumPlanItem" /* 4039 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 6286 */;
import TableRowInner from "TableRowInner" /* 6291 */;
import RedesignBottomSheetTitleHeaderBase from "RedesignBottomSheetTitleHeaderBase" /* 6949 */;
import ActionSheet from "ActionSheet" /* 7175 */;
import NitroWheelIcon from "NitroWheelIcon" /* 7988 */;
import Form from "Form" /* 8083 */;
import UserProfileUpsellButtonDefault from "UserProfileUpsellButton" /* 14008 */;
import { View } from "get ActivityIndicator" /* 17 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { AnalyticsObjects } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
({ jsx: closure_6, jsxs: error, Fragment: closure_8 } = jsxProd);
const createCacheKey = { marginLeft: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { color: ThemesDefault.colors.TEXT_DEFAULT };
createCacheKey[2] = { marginBottom: 4, color: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE, alignItems: "center", flexDirection: "row" };
createCacheKey[3] = { color: ThemesDefault.colors.TEXT_FEEDBACK_CRITICAL };
createCacheKey[4] = { marginTop: ThemesDefault.space.PX_12, marginBottom: ThemesDefault.space.PX_8 };
createCacheKey[5] = { flexDirection: "row", alignItems: "flex-end" };
createCacheKey[6] = { flex: 0 };
createCacheKey[7] = { justifyContent: "flex-start" };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/user_profile/native/ChangeAvatarActionSheet.tsx");

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
  const tmp = callback();
  let obj = initialize;
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  obj1 = getPremiumPlanItemDefault;
  let isPremiumResult = obj1.isPremium(stateFromStores);
  obj = { title: null, trailing: null, titleWrapperStyle: null, titleContainerStyle: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.lqaIxI);
  if (isPremiumResult) {
    isPremiumResult = callback(NitroWheelIcon.NitroWheelIcon, {});
  }
  obj[1] = isPremiumResult;
  ({ titleWrapper: obj3[2], titleContainer: obj3[3] } = tmp);
  const items1 = [callback(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj), ];
  obj = { label: null, subLabel: null, onPress: null };
  const intl2 = getSystemLocale.intl;
  obj[0] = intl2.string(getSystemLocale.t["MsUY/S"]);
  const intl3 = getSystemLocale.intl;
  obj[1] = intl3.string(getSystemLocale.t.r5hKOy);
  obj[2] = handleUploadAvatarSelect;
  const items2 = [callback(TableRowInner.TableRow, obj), , , , ];
  let tmp8Result = null != handleUploadGIFAvatarSelect && !showAnimatedAvatarUpsell;
  if (tmp8Result) {
    obj1 = { label: null, onPress: null };
    const intl4 = getSystemLocale.intl;
    obj1[0] = intl4.string(getSystemLocale.t["xsC+/y"]);
    obj1[1] = handleUploadGIFAvatarSelect;
    tmp8Result = callback(TableRowInner.TableRow, obj1);
  }
  items2[1] = tmp8Result;
  if (showAnimatedAvatarUpsell) {
    const obj2 = { label: null, subLabel: null };
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.upsellTitleContainer;
    const obj4 = { text: null };
    const intl5 = getSystemLocale.intl;
    obj4[0] = intl5.string(getSystemLocale.t.xZ0Wot);
    const items3 = [callback(Form.FormLabel, obj4), ];
    const obj5 = { style: null, size: "sm" };
    obj5[0] = tmp.nitroWheel;
    items3[1] = callback(NitroWheelIcon.NitroWheelIcon, obj5);
    obj3[1] = items3;
    obj2[0] = callback2(View, obj3);
    const obj6 = { children: null };
    const obj7 = { style: null, numberOfLines: 3, text: null };
    obj7[0] = tmp.sublabel;
    const intl6 = getSystemLocale.intl;
    obj7[2] = intl6.string(getSystemLocale.t.L3UPqR);
    const items4 = [callback(Form.FormSubLabel, obj7), ];
    const obj8 = { style: null, children: null };
    obj8[0] = tmp.upsellButton;
    const obj9 = { analyticsObject: null, label: null };
    obj9[0] = AnalyticsObjects.ANIMATED_AVATAR;
    const intl7 = getSystemLocale.intl;
    obj9[1] = intl7.string(getSystemLocale.t.mr4K7D);
    obj8[1] = callback(UserProfileUpsellButtonDefault, obj9);
    items4[1] = callback(View, obj8);
    obj6[0] = items4;
    obj2[1] = callback2(closure_8, obj6);
    showAnimatedAvatarUpsell = callback(TableRowInner.TableRow, obj2);
    const tmp5Result = UserProfileUpsellButtonDefault;
  }
  items2[2] = showAnimatedAvatarUpsell;
  tmp8Result = null != handleEditAvatarDecorationSelect;
  if (tmp8Result) {
    const obj10 = { label: null, onPress: null };
    const obj11 = { style: null, children: null };
    obj11[0] = tmp.upsellTitleContainer;
    const obj12 = { text: null };
    const intl8 = getSystemLocale.intl;
    obj12[0] = intl8.string(getSystemLocale.t.BVcYCx);
    obj11[1] = callback(Form.FormLabel, obj12);
    obj10[0] = callback(View, obj11);
    obj10[1] = handleEditAvatarDecorationSelect;
    tmp8Result = callback(TableRowInner.TableRow, obj10);
  }
  items2[3] = tmp8Result;
  if (flag) {
    const obj13 = { label: null, onPress: null };
    const obj14 = { style: null, text: null };
    const items5 = [, ];
    ({ label: arr6[0], remove: arr6[1] } = tmp);
    obj14[0] = items5;
    const intl9 = getSystemLocale.intl;
    obj14[1] = intl9.string(getSystemLocale.t.twB3fz);
    obj13[0] = callback(Form.FormLabel, obj14);
    obj13[1] = handleRemoveAvatarSelect;
    flag = callback(TableRowInner.TableRow, obj13);
  }
  const obj15 = { children: null };
  items2[4] = flag;
  items1[1] = callback2(TableRowGroupTitle.TableRowGroup, { hasIcons: false, children: items2 });
  obj15[0] = items1;
  return callback2(ActionSheet.ActionSheet, obj15);
};