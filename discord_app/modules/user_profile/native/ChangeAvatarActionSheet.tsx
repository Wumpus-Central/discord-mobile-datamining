// discord_app/modules/user_profile/native/ChangeAvatarActionSheet.tsx
import "noop";
import { View } from "set";
import mergeGuildAvatar from "mergeGuildAvatar";
import { AnalyticsObjects } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { ActionSheet } from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import { RedesignBottomSheetTitleHeaderBase } from "../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import { TableRowInner } from "../../../design/components/TableRow/native/TableRow.native.tsx";
import { TableRowGroupTitle } from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { getPremiumPlanItem } from "../../../utils/PremiumUtils.tsx";
import { UserProfileUpsellButton } from "UserProfileUpsellButton.tsx";

let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ jsx: closure_6, jsxs: error, Fragment: metroImportAll } = jsxProd);
createCacheKey = { nitroWheel: null, sublabel: null, label: null, remove: null, upsellButton: null, upsellTitleContainer: null, titleWrapper: null, titleContainer: null };
createCacheKey = { marginLeft: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { color: require("Themes").colors.TEXT_DEFAULT };
let obj1 = { color: require("Themes").colors.TEXT_DEFAULT };
createCacheKey[2] = { marginBottom: 4, color: require("Themes").colors.INTERACTIVE_TEXT_ACTIVE, alignItems: "center", flexDirection: "row" };
let obj2 = { marginBottom: 4, color: require("Themes").colors.INTERACTIVE_TEXT_ACTIVE, alignItems: "center", flexDirection: "row" };
createCacheKey[3] = { color: require("Themes").colors.TEXT_FEEDBACK_CRITICAL };
let obj3 = { color: require("Themes").colors.TEXT_FEEDBACK_CRITICAL };
createCacheKey[4] = { marginTop: require("Themes").space.PX_12, marginBottom: require("Themes").space.PX_8 };
createCacheKey[5] = { flexDirection: "row", alignItems: "flex-end" };
createCacheKey[6] = { flex: 0 };
createCacheKey[7] = { justifyContent: "flex-start" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj4 = { marginTop: require("Themes").space.PX_12, marginBottom: require("Themes").space.PX_8 };
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/user_profile/native/ChangeAvatarActionSheet.tsx");

export default function ChangeAvatarActionSheet(showRemoveAvatar) {
  let handleEditAvatarDecorationSelect;
  let handleRemoveAvatarSelect;
  let handleUploadAvatarSelect;
  let handleUploadGIFAvatarSelect;
  let showAnimatedAvatarUpsell;
  ({ handleUploadGIFAvatarSelect, handleEditAvatarDecorationSelect, showAnimatedAvatarUpsell } = showRemoveAvatar);
  ({ handleUploadAvatarSelect, handleRemoveAvatarSelect } = showRemoveAvatar);
  if (showAnimatedAvatarUpsell === undefined) {
    showAnimatedAvatarUpsell = false;
  }
  let flag = showRemoveAvatar.showRemoveAvatar;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = createCacheKey();
  let obj = initialize;
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = getPremiumPlanItem;
  let isPremiumResult = obj1.isPremium(stateFromStores);
  obj = { title: null, trailing: null, titleWrapperStyle: null, titleContainerStyle: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.lqaIxI);
  if (isPremiumResult) {
    isPremiumResult = tmp8(tmp2(7988).NitroWheelIcon, {});
  }
  obj[1] = isPremiumResult;
  ({ titleWrapper: obj3[2], titleContainer: obj3[3] } = tmp);
  const items1 = [closure_6(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj), ];
  obj = { label: null, subLabel: null, onPress: null };
  const intl2 = tmp2(1236).intl;
  obj[0] = intl2.string(getSystemLocale.t["MsUY/S"]);
  const intl3 = tmp2(1236).intl;
  obj[1] = intl3.string(getSystemLocale.t.r5hKOy);
  obj[2] = handleUploadAvatarSelect;
  const items2 = [closure_6(TableRowInner.TableRow, obj), , , , ];
  let tmp8Result = null != handleUploadGIFAvatarSelect && !showAnimatedAvatarUpsell;
  if (tmp8Result) {
    obj1 = { label: null, onPress: null };
    const intl4 = tmp2(1236).intl;
    obj1[0] = intl4.string(tmp2(1236).t["xsC+/y"]);
    obj1[1] = handleUploadGIFAvatarSelect;
    tmp8Result = tmp8(tmp2(6291).TableRow, obj1);
  }
  items2[1] = tmp8Result;
  if (showAnimatedAvatarUpsell) {
    const obj2 = { label: null, subLabel: null };
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.upsellTitleContainer;
    const obj4 = { text: null };
    const intl5 = tmp2(1236).intl;
    obj4[0] = intl5.string(tmp2(1236).t.xZ0Wot);
    const items3 = [tmp8(tmp2(8083).FormLabel, obj4), ];
    const obj5 = { style: null, size: "sm" };
    obj5[0] = tmp.nitroWheel;
    items3[1] = tmp8(tmp2(7988).NitroWheelIcon, obj5);
    obj3[1] = items3;
    obj2[0] = tmp7(View, obj3);
    const obj6 = { children: null };
    const obj7 = { style: null, numberOfLines: 3, text: null };
    obj7[0] = tmp.sublabel;
    const intl6 = tmp2(1236).intl;
    obj7[2] = intl6.string(tmp2(1236).t.L3UPqR);
    const items4 = [tmp8(tmp2(8083).FormSubLabel, obj7), ];
    const obj8 = { style: null, children: null };
    obj8[0] = tmp.upsellButton;
    const obj9 = { analyticsObject: null, label: null };
    obj9[0] = AnalyticsObjects.ANIMATED_AVATAR;
    const intl7 = tmp2(1236).intl;
    obj9[1] = intl7.string(tmp2(1236).t.mr4K7D);
    obj8[1] = tmp8(UserProfileUpsellButton, obj9);
    items4[1] = tmp8(View, obj8);
    obj6[0] = items4;
    obj2[1] = tmp7(closure_8, obj6);
    showAnimatedAvatarUpsell = tmp8(tmp2(6291).TableRow, obj2);
    const tmp5Result = UserProfileUpsellButton;
  }
  items2[2] = showAnimatedAvatarUpsell;
  tmp8Result = null != handleEditAvatarDecorationSelect;
  if (tmp8Result) {
    const obj10 = { label: null, onPress: null };
    const obj11 = { style: null, children: null };
    obj11[0] = tmp.upsellTitleContainer;
    const obj12 = { text: null };
    const intl8 = tmp2(1236).intl;
    obj12[0] = intl8.string(tmp2(1236).t.BVcYCx);
    obj11[1] = tmp8(tmp2(8083).FormLabel, obj12);
    obj10[0] = tmp8(View, obj11);
    obj10[1] = handleEditAvatarDecorationSelect;
    tmp8Result = tmp8(tmp2(6291).TableRow, obj10);
  }
  items2[3] = tmp8Result;
  if (flag) {
    const obj13 = { label: null, onPress: null };
    const obj14 = { style: null, text: null };
    const items5 = [, ];
    ({ label: arr6[0], remove: arr6[1] } = tmp);
    obj14[0] = items5;
    const intl9 = tmp2(1236).intl;
    obj14[1] = intl9.string(tmp2(1236).t.twB3fz);
    obj13[0] = tmp8(tmp2(8083).FormLabel, obj14);
    obj13[1] = handleRemoveAvatarSelect;
    flag = tmp8(tmp2(6291).TableRow, obj13);
  }
  const obj15 = { children: null };
  items2[4] = flag;
  items1[1] = closure_7(TableRowGroupTitle.TableRowGroup, { hasIcons: false, children: items2 });
  obj15[0] = items1;
  return closure_7(ActionSheet.ActionSheet, obj15);
};