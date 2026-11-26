// discord_app/modules/user_profile/native/ChangeAvatarActionSheet.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import TableRowGroup from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import TableRow from "../../../design/components/TableRow/native/TableRow.native.tsx";
import useAnalyticsLocations from "../../app_analytics/useAnalyticsLocations.tsx";
import BottomSheetTitleHeader from "../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import Form from "../../../design/void/Form/native/index.tsx";
import NitroWheelIcon from "../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import ProfileEditSheetNitroUpdatesExperiment from "../experiments/ProfileEditSheetNitroUpdatesExperiment.tsx";
import UserProfileUpsellButtonDefault from "UserProfileUpsellButton.tsx";
import ProfileEditNitroSubLabelDefault from "ProfileEditNitroSubLabel.tsx";
import ProfileEditNitroUpsellRowDefault from "ProfileEditNitroUpsellRow.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const AnalyticsObjects = fn(1071).AnalyticsObjects;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault, Fragment: closure_8 } = jsxProd);
const createStyles = fn(5043);
let obj2 = {
  nitroWheel: { marginLeft: nativeDefault.space.PX_8 },
  sublabel: null,
  label: null,
  remove: null,
  upsellButton: null,
  upsellTitleContainer: null,
  titleWrapper: null,
  titleContainer: null,
};
let obj3 = { marginLeft: nativeDefault.space.PX_8 };
obj2.sublabel = { color: nativeDefault.colors.TEXT_DEFAULT };
const obj4 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj2.label = {
  marginBottom: 4,
  color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
  alignItems: "center",
  flexDirection: "row",
};
let obj5 = {
  marginBottom: 4,
  color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
  alignItems: "center",
  flexDirection: "row",
};
obj2.remove = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let obj6 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
obj2.upsellButton = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 };
obj2.upsellTitleContainer = { flexDirection: "row", alignItems: "flex-end" };
obj2.titleWrapper = { flex: 0 };
obj2.titleContainer = { justifyContent: "flex-start" };
let closure_9 = createStyles.createStyles(obj2);
let closure_10 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/ChangeAvatarActionSheet.tsx");

export default function ChangeAvatarActionSheet(showRemoveAvatar) {
  ({
    handleUploadAvatarSelect,
    handleRemoveAvatarSelect,
    handleUploadGIFAvatarSelect,
    handleEditAvatarDecorationSelect,
    showAnimatedAvatarUpsell,
  } = showRemoveAvatar);
  if (showAnimatedAvatarUpsell === undefined) {
    showAnimatedAvatarUpsell = false;
  }
  let flag = showRemoveAvatar.showRemoveAvatar;
  if (flag === undefined) {
    flag = false;
  }
  ({ analyticsLocations, guildId } = showRemoveAvatar);
  if (analyticsLocations === undefined) {
    analyticsLocations = closure_10;
  }
  const tmp = closure_9();
  items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  let isPremiumResult = PremiumUtilsDefault.isPremium(stateFromStores);
  const profileEditSheetNitroUpdatesConfig =
    ProfileEditSheetNitroUpdatesExperiment.useProfileEditSheetNitroUpdatesConfig("change_avatar_action_sheet_native");
  let tmp23Result = null != handleUploadGIFAvatarSelect;
  ({ enabled, skipRoadblock } = profileEditSheetNitroUpdatesConfig);
  if (tmp23Result) {
    tmp23Result = !showAnimatedAvatarUpsell;
  }
  if (null != guildId) {
    let avatar;
    if (stateFromStores != null) {
      avatar = stateFromStores.avatar;
    }
    if (null != avatar) {
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t.TDjKDm);
    }
    if (enabled) {
      const obj5 = { value: analyticsLocations, children: null };
      const obj6 = { title: null };
      const intl11 = util.intl;
      obj6.title = intl11.string(util.t.lqaIxI);
      const items1 = [timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, obj6)];
      const obj7 = { label: null, onPress: null };
      const intl12 = util.intl;
      obj7.label = intl12.string(util.t["MsUY/S"]);
      obj7.onPress = handleUploadAvatarSelect;
      const items2 = [timestampProducer(TableRow.TableRow, obj7), , , ,];
      if (showAnimatedAvatarUpsell) {
        const obj8 = { label: null, subLabel: null, analyticsObject: null, skipRoadblock: null };
        const intl13 = util.intl;
        obj8.label = intl13.string(util.t["xsC+/y"]);
        const intl14 = util.intl;
        obj8.subLabel = intl14.string(util.t.IsWCZP);
        obj8.analyticsObject = AnalyticsObjects.ANIMATED_AVATAR;
        obj8.skipRoadblock = skipRoadblock;
        showAnimatedAvatarUpsell = timestampProducer(ProfileEditNitroUpsellRowDefault, obj8);
        const tmp5Result = ProfileEditNitroUpsellRowDefault;
      }
      items2[1] = showAnimatedAvatarUpsell;
      if (tmp23Result) {
        const obj9 = { label: null, subLabel: null, onPress: null };
        const intl15 = util.intl;
        obj9.label = intl15.string(util.t["xsC+/y"]);
        const obj10 = { text: null };
        const intl16 = util.intl;
        obj10.text = intl16.string(util.t.TiLCgw);
        obj9.subLabel = timestampProducer(ProfileEditNitroSubLabelDefault, obj10);
        obj9.onPress = handleUploadGIFAvatarSelect;
        tmp23Result = timestampProducer(TableRow.TableRow, obj9);
        const tmp5Result3 = ProfileEditNitroSubLabelDefault;
      }
      items2[2] = tmp23Result;
      let tmp23Result3 = null != handleEditAvatarDecorationSelect;
      if (tmp23Result3) {
        const obj11 = { label: null, onPress: null };
        const intl17 = util.intl;
        obj11.label = intl17.string(util.t.BVcYCx);
        obj11.onPress = handleEditAvatarDecorationSelect;
        tmp23Result3 = timestampProducer(TableRow.TableRow, obj11);
      }
      items2[3] = tmp23Result3;
      if (flag) {
        const obj12 = { label: stringResult, variant: "danger", onPress: handleRemoveAvatarSelect };
        flag = timestampProducer(TableRow.TableRow, obj12);
      }
      const obj13 = { children: null };
      const obj14 = { hasIcons: false, children: null };
      items2[4] = flag;
      obj14.children = items2;
      items1[1] = metroImportDefault(TableRowGroup.TableRowGroup, obj14);
      obj13.children = items1;
      obj5.children = metroImportDefault(ActionSheet.ActionSheet, obj13);
      let tmp23Result4 = timestampProducer(useAnalyticsLocations.AnalyticsLocationProvider, obj5);
    } else {
      const obj15 = { title: null, trailing: null, titleWrapperStyle: null, titleContainerStyle: null };
      const intl3 = util.intl;
      obj15.title = intl3.string(util.t.lqaIxI);
      if (isPremiumResult) {
        isPremiumResult = timestampProducer(NitroWheelIcon.NitroWheelIcon, {});
      }
      obj15.trailing = isPremiumResult;
      ({ titleWrapper: obj4.titleWrapperStyle, titleContainer: obj4.titleContainerStyle } = tmp);
      const items3 = [timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, obj15)];
      const obj16 = { label: null, subLabel: null, onPress: null };
      const intl4 = util.intl;
      obj16.label = intl4.string(util.t["MsUY/S"]);
      const intl5 = util.intl;
      obj16.subLabel = intl5.string(util.t.r5hKOy);
      obj16.onPress = handleUploadAvatarSelect;
      const items4 = [timestampProducer(TableRow.TableRow, obj16), , , ,];
      let tmp12Result = tmp23Result;
      if (tmp23Result) {
        const obj17 = { label: null, onPress: null };
        const intl6 = util.intl;
        obj17.label = intl6.string(util.t["xsC+/y"]);
        obj17.onPress = handleUploadGIFAvatarSelect;
        tmp12Result = timestampProducer(TableRow.TableRow, obj17);
      }
      items4[1] = tmp12Result;
      let tmp12Result4 = showAnimatedAvatarUpsell;
      if (showAnimatedAvatarUpsell) {
        const obj18 = { label: null, subLabel: null };
        const obj19 = { style: tmp.upsellTitleContainer, children: null };
        const obj20 = { text: null };
        const intl7 = util.intl;
        obj20.text = intl7.string(util.t.xZ0Wot);
        const items5 = [timestampProducer(Form.FormLabel, obj20)];
        const obj21 = { style: tmp.nitroWheel, size: "sm" };
        items5[1] = timestampProducer(NitroWheelIcon.NitroWheelIcon, obj21);
        obj19.children = items5;
        obj18.label = metroImportDefault(View, obj19);
        const obj22 = { children: null };
        const obj23 = { style: tmp.sublabel, numberOfLines: 3, text: null };
        const intl8 = util.intl;
        obj23.text = intl8.string(util.t.L3UPqR);
        const items6 = [timestampProducer(Form.FormSubLabel, obj23)];
        const obj24 = { style: tmp.upsellButton, children: null };
        const obj25 = { analyticsObject: AnalyticsObjects.ANIMATED_AVATAR, label: null };
        const intl9 = util.intl;
        obj25.label = intl9.string(util.t.mr4K7D);
        obj24.children = timestampProducer(UserProfileUpsellButtonDefault, obj25);
        items6[1] = timestampProducer(View, obj24);
        obj22.children = items6;
        obj18.subLabel = metroImportDefault(React5, obj22);
        tmp12Result4 = timestampProducer(TableRow.TableRow, obj18);
        const tmp5Result4 = UserProfileUpsellButtonDefault;
      }
      items4[2] = tmp12Result4;
      let tmp12Result5 = null != handleEditAvatarDecorationSelect;
      if (tmp12Result5) {
        const obj26 = { label: null, onPress: null };
        const obj27 = { style: tmp.upsellTitleContainer, children: null };
        const obj28 = { text: null };
        const intl10 = util.intl;
        obj28.text = intl10.string(util.t.BVcYCx);
        obj27.children = timestampProducer(Form.FormLabel, obj28);
        obj26.label = timestampProducer(View, obj27);
        obj26.onPress = handleEditAvatarDecorationSelect;
        tmp12Result5 = timestampProducer(TableRow.TableRow, obj26);
      }
      items4[3] = tmp12Result5;
      let tmp12Result6 = flag;
      if (flag) {
        const obj29 = { label: null, onPress: null };
        const obj30 = { style: null, text: null };
        const items7 = [,];
        ({ label: arr6[0], remove: arr6[1] } = tmp);
        obj30.style = items7;
        obj30.text = stringResult;
        obj29.label = timestampProducer(Form.FormLabel, obj30);
        obj29.onPress = handleRemoveAvatarSelect;
        tmp12Result6 = timestampProducer(TableRow.TableRow, obj29);
      }
      const obj31 = { children: null };
      const obj59 = { hasIcons: false, children: null };
      items4[4] = tmp12Result6;
      obj59.children = items4;
      items3[1] = metroImportDefault(TableRowGroup.TableRowGroup, obj59);
      obj31.children = items3;
      tmp23Result4 = metroImportDefault(ActionSheet.ActionSheet, obj31);
    }
    return tmp23Result4;
  }
  const intl = util.intl;
  stringResult = intl.string(util.t.twB3fz);
}
