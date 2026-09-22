// discord_app/modules/parent_tools/native/FamilyCenterSettingsControls.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../_runtime/01980_asyncRequireImpl.js";
import _modDef2482 from "../FamilyCenter.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ChannelActionCreatorsDefault from "../../../actions/ChannelActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import FamilyCenterActionCreatorsDefault from "../FamilyCenterActionCreators.tsx";
import LayerActionCreators from "../../../actions/LayerActionCreators.tsx";
import useUserLinks from "../hooks/useUserLinks.tsx";
import useUserIsTeenAgeGroupDefault from "../hooks/useUserIsTeenAgeGroup.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function SpendingLimitRow(teenId) {
  teenId = teenId.teenId;
  const tmp = closure_9();
  const spendingLimitDisplayState = teenId(15194).useSpendingLimitDisplayState(teenId.cap);
  const kind = spendingLimitDisplayState.kind;
  if ("off" === kind) {
    const obj2 = { trailing: null };
    const intl2 = tmp2(1115).intl;
    const obj3 = { variant: "text-sm/normal", color: "text-muted", children: intl2.string(_modDef2482.YEnpaj) };
    obj2.trailing = closure_7(tmp2(4753).Text, obj3);
    let tmp8 = obj2;
    const stringResult = intl2.string(_modDef2482.YEnpaj);
  } else if ("on" === kind) {
    const obj4 = { trailing: null };
    const obj5 = { variant: "text-sm/normal", color: "text-muted", children: spendingLimitDisplayState.monthlyText };
    obj4.trailing = closure_7(tmp2(4753).Text, obj5);
    tmp8 = obj4;
  } else if ("close-to-limit" === kind) {
    const obj6 = { trailing: null, subLabel: null };
    const obj7 = { variant: "text-sm/normal", color: "text-muted", children: spendingLimitDisplayState.monthlyText };
    obj6.trailing = closure_7(tmp2(4753).Text, obj7);
    const obj8 = {
      variant: "text-sm/normal",
      style: tmp.subLabelWarning,
      children: spendingLimitDisplayState.remainingText,
    };
    obj6.subLabel = closure_7(tmp2(4753).Text, obj8);
    tmp8 = obj6;
  } else if ("spent" === kind) {
    const obj9 = { trailing: null, subLabel: null };
    const obj10 = { variant: "text-sm/normal", color: "text-muted", children: spendingLimitDisplayState.monthlyText };
    obj9.trailing = closure_7(tmp2(4753).Text, obj10);
    const intl = tmp2(1115).intl;
    const obj11 = { variant: "text-sm/normal", style: tmp.subLabelCritical, children: intl.string(_modDef2482.Q2msVQ) };
    obj9.subLabel = closure_7(tmp2(4753).Text, obj11);
    tmp8 = obj9;
    const stringResult1 = intl.string(_modDef2482.Q2msVQ);
  } else if ("blocked" === kind) {
    const obj12 = { trailing: null, subLabel: null };
    const intl4 = tmp2(1115).intl;
    const obj13 = { variant: "text-sm/normal", color: "text-muted", children: intl4.string(_modDef2482.kGFuGn) };
    obj12.trailing = closure_7(tmp2(4753).Text, obj13);
    const intl5 = tmp2(1115).intl;
    const stringResult2 = intl4.string(_modDef2482.kGFuGn);
    const obj14 = {
      variant: "text-sm/normal",
      style: tmp.subLabelCritical,
      children: intl5.string(_modDef2482.FUu2b0),
    };
    obj12.subLabel = closure_7(tmp2(4753).Text, obj14);
    tmp8 = obj12;
    const stringResult3 = intl5.string(_modDef2482.FUu2b0);
  }
  ({ trailing, subLabel } = tmp8);
  const obj15 = { label: null, trailing: null, subLabel: null, onPress: null, arrow: null, disabled: null };
  const intl3 = tmp2(1115).intl;
  obj15.label = intl3.string(_modDef2482.gMeekL);
  obj15.trailing = trailing;
  obj15.subLabel = subLabel;
  let fn;
  if (null != teenId) {
    fn = () => {
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15192, dependencyMap.paths), { teenId }, undefined, {
        animation: "slide_from_right",
      });
    };
  }
  obj15.onPress = fn;
  obj15.arrow = null != teenId;
  obj15.disabled = null == teenId;
  return closure_7(teenId(5824).TableRow, obj15);
}
function FamilyCenterSettingsTeenControls() {
  function handleOpenSettings() {
    navigation.navigate(UserSettingsSections.CONTENT_AND_SOCIAL);
  }
  const tmp = closure_9();
  activeLinkUserIds = activeLinkUserIds(handleOpenSettings[15]).useActiveLinkUserIds();
  let obj = activeLinkUserIds(handleOpenSettings[15]);
  const selectedTeenUser = activeLinkUserIds(handleOpenSettings[16]).useSelectedTeenUser();
  const obj2 = activeLinkUserIds(handleOpenSettings[16]);
  importDefault = activeLinkUserIds(handleOpenSettings[17]).useNavigation();
  let rules;
  if (selectedTeenUser != null) {
    const restrictedSchedule = selectedTeenUser.restrictedSchedule;
    if (restrictedSchedule != null) {
      rules = restrictedSchedule.rules;
    }
  }
  if (rules == null) {
    rules = [];
  }
  const obj3 = activeLinkUserIds(handleOpenSettings[17]);
  const spendingLimitFromUserSettings = activeLinkUserIds(handleOpenSettings[13]).useSpendingLimitFromUserSettings();
  const tmp2Result = activeLinkUserIds(handleOpenSettings[13]);
  const tmp6 = importDefault;
  ({ subLabel, trailing } = require("useScheduleTimeControlsRowProps")(rules));
  const obj4 = { style: tmp.teenControlsContainer, children: null };
  const obj5 = { style: tmp.controlledSettingsHeader, children: null };
  const obj6 = { variant: "text-sm/semibold", children: null };
  const intl = tmp2(tmp3[8]).intl;
  obj6.children = intl.string(require("../FamilyCenter.messages.js").ahKIJO);
  const items = [closure_7(activeLinkUserIds(handleOpenSettings[7]).Text, obj6)];
  const obj7 = { variant: "text-sm/medium", color: "text-muted", children: null };
  const intl2 = tmp2(tmp3[8]).intl;
  obj7.children = intl2.format(require("../FamilyCenter.messages.js").X9rW0j, {
    openSettingsHook(children, arg1) {
      return React5(
        Text_Text.Text,
        { variant: "text-sm/medium", color: "text-link", onPress: handleOpenSettings, children },
        arg1,
      );
    },
  });
  items[1] = closure_7(activeLinkUserIds(handleOpenSettings[7]).Text, obj7);
  obj5.children = items;
  const items1 = [closure_8(activeLinkUserIds(handleOpenSettings[19]).Stack, obj5), ,];
  const obj9 = { style: tmp.controlsGroup, children: null };
  const items2 = [closure_7(SpendingLimitRow, { cap: spendingLimitFromUserSettings })];
  const obj10 = { label: null, subLabel: null, trailing: null, onPress: null, arrow: null };
  const intl3 = tmp2(tmp3[8]).intl;
  obj10.label = intl3.string(require("../FamilyCenter.messages.js")["1Op+NP"]);
  obj10.subLabel = subLabel;
  obj10.trailing = trailing;
  let fn;
  if (rules.length > 0) {
    fn = () => {
      navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, {
        selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS,
      });
    };
  }
  const obj11 = { hasIcons: false, children: null };
  obj10.onPress = fn;
  obj10.arrow = rules.length > 0;
  items2[1] = closure_7(activeLinkUserIds(handleOpenSettings[14]).TableRow, obj10);
  obj11.children = items2;
  obj9.children = closure_8(activeLinkUserIds(handleOpenSettings[20]).TableRowGroup, obj11);
  items1[1] = closure_7(View, obj9);
  const obj12 = { text: null, onPress: null, shrink: true, grow: false, variant: "secondary", size: "sm" };
  const intl4 = tmp2(tmp3[8]).intl;
  obj12.text = intl4.formatToPlainString(tmp6(handleOpenSettings[9]).w0JA3P, { count: activeLinkUserIds.length });
  obj12.onPress = function onPress() {
    LayerActionCreators.popLayer();
    ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: activeLinkUserIds });
  };
  items1[2] = closure_7(activeLinkUserIds(handleOpenSettings[21]).Button, obj12);
  obj4.children = items1;
  return closure_8(activeLinkUserIds(handleOpenSettings[19]).Stack, obj4);
}
function FamilyCenterSettingsParentalControls() {
  const tmp = closure_9();
  selectedTeenUser = selectedTeenUser(15178).useSelectedTeenUser();
  let obj = selectedTeenUser(15178);
  const shouldLoadSettingsForSelectedTeenUser = selectedTeenUser(15178).useShouldLoadSettingsForSelectedTeenUser();
  const obj2 = selectedTeenUser(15178);
  dependencyMap = selectedTeenUser(1484).useNavigation();
  let rules;
  if (selectedTeenUser != null) {
    const restrictedSchedule = selectedTeenUser.restrictedSchedule;
    if (restrictedSchedule != null) {
      rules = restrictedSchedule.rules;
    }
  }
  if (rules == null) {
    rules = [];
  }
  const ParentalControlledSpendingLimit = tmp2(15110).ParentalControlledSpendingLimit;
  let id;
  if (selectedTeenUser != null) {
    id = selectedTeenUser.id;
  }
  let id1;
  const controlledSetting = ParentalControlledSpendingLimit.useControlledSetting(id);
  if (selectedTeenUser != null) {
    id1 = selectedTeenUser.id;
  }
  const items = [id1, shouldLoadSettingsForSelectedTeenUser];
  const effect = rules.useEffect(() => {
    let id;
    if (selectedTeenUser != null) {
      id = selectedTeenUser.id;
    }
    if (tmp3) {
      const teenSettingsAndConsents = FamilyCenterActionCreatorsDefault.fetchTeenSettingsAndConsents(
        selectedTeenUser.id,
      );
    }
    tmp3 = null != id && shouldLoadSettingsForSelectedTeenUser;
  }, items);
  const obj3 = selectedTeenUser(1484);
  const tmp11 = shouldLoadSettingsForSelectedTeenUser;
  ({ subLabel, trailing } = shouldLoadSettingsForSelectedTeenUser(15195)(rules));
  const obj4 = { style: tmp.parentalControlsContainer, children: null };
  const obj5 = { variant: "text-sm/semibold", children: null };
  const intl = tmp2(1115).intl;
  obj5.children = intl.string(shouldLoadSettingsForSelectedTeenUser(2482).ahKIJO);
  const items1 = [closure_7(selectedTeenUser(4753).Text, obj5), ,];
  const obj6 = { variant: "text-sm/medium", color: "text-muted", children: null };
  const intl2 = tmp2(1115).intl;
  obj6.children = intl2.string(shouldLoadSettingsForSelectedTeenUser(2482).Sv236e);
  items1[1] = closure_7(selectedTeenUser(4753).Text, obj6);
  const obj7 = { style: tmp.controlsGroup, children: null };
  const obj8 = { label: null, onPress: null, arrow: true };
  const intl3 = tmp2(1115).intl;
  obj8.label = intl3.string(selectedTeenUser(1115).t["+o1pDZ"]);
  obj8.onPress = function onPress() {
    navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, {
      selectedSubPage: FamilyCenterSubPages.CONTENT_AND_SOCIAL,
    });
  };
  const items2 = [closure_7(selectedTeenUser(5824).TableRow, obj8), , ,];
  const obj9 = { label: null, onPress: null, arrow: true };
  const intl4 = tmp2(1115).intl;
  obj9.label = intl4.string(selectedTeenUser(1115).t.OAuOHD);
  obj9.onPress = function onPress() {
    navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, {
      selectedSubPage: FamilyCenterSubPages.DATA_AND_PRIVACY,
    });
  };
  items2[1] = closure_7(selectedTeenUser(5824).TableRow, obj9);
  let id2;
  if (selectedTeenUser != null) {
    id2 = selectedTeenUser.id;
  }
  let tmp14Result = null != id2;
  if (tmp14Result) {
    const obj10 = { cap: controlledSetting, teenId: selectedTeenUser.id };
    tmp14Result = closure_7(SpendingLimitRow, obj10);
  }
  items2[2] = tmp14Result;
  let id3;
  if (selectedTeenUser != null) {
    id3 = selectedTeenUser.id;
  }
  let tmp14Result2 = null != id3;
  if (tmp14Result2) {
    const obj11 = { label: null, subLabel: null, trailing: null, onPress: null, arrow: true };
    const intl5 = tmp2(1115).intl;
    obj11.label = intl5.string(tmp11(2482)["1Op+NP"]);
    obj11.subLabel = subLabel;
    obj11.trailing = trailing;
    obj11.onPress = function onPress() {
      const obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS, autoOpenCreate: null };
      let tmp2 = 0 === rules.length;
      if (tmp2) {
        let id;
        if (selectedTeenUser != null) {
          id = selectedTeenUser.id;
        }
        tmp2 = null != id;
      }
      obj.autoOpenCreate = tmp2;
      navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
    };
    tmp14Result2 = closure_7(tmp2(5824).TableRow, obj11);
  }
  items2[3] = tmp14Result2;
  obj7.children = closure_8(selectedTeenUser(5906).TableRowGroup, { hasIcons: false, children: items2 });
  items1[2] = closure_7(View, obj7);
  obj4.children = items1;
  return closure_8(selectedTeenUser(5185).Stack, obj4);
}
const View = fn(17).View;
const FamilyCenterSubPages = fn(7783).FamilyCenterSubPages;
const UserSettingsSections = fn(1074).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4757);
let obj2 = {
  teenControlsContainer: { gap: nativeDefault.space.PX_16 },
  controlledSettingsHeader: null,
  parentalControlsContainer: null,
  controlsGroup: null,
  subLabelWarning: null,
  subLabelCritical: null,
};
let obj3 = { gap: nativeDefault.space.PX_16 };
obj2.controlledSettingsHeader = { gap: nativeDefault.space.PX_4 };
let obj4 = { gap: nativeDefault.space.PX_4 };
obj2.parentalControlsContainer = { gap: nativeDefault.space.PX_4 };
let obj5 = { gap: nativeDefault.space.PX_4 };
obj2.controlsGroup = { marginTop: nativeDefault.space.PX_8 };
let obj6 = { marginTop: nativeDefault.space.PX_8 };
obj2.subLabelWarning = { color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
let obj7 = { color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
obj2.subLabelCritical = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterSettingsControls.tsx");

export default function FamilyCenterSettingsControls() {
  const tmp = useUserIsTeenAgeGroupDefault();
  if (0 === obj.useActiveLinkUserIds().length) {
    return null;
  } else {
    const obj2 = {
      children: React5(tmp ? FamilyCenterSettingsTeenControls : FamilyCenterSettingsParentalControls, {}),
    };
    React5(View, obj2);
  }
  obj = useUserLinks;
}
