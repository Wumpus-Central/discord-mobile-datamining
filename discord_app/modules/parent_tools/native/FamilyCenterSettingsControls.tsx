// === Module 14906: FamilyCenterSettingsControls ===

// Module 14906 (FamilyCenterSettingsControls)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef2396 from "module_2396" /* 2396 */;
import Text_Text from "Text/Text" /* 4556 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4573 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7539 */;
import LayerActionCreators from "LayerActionCreators" /* 7587 */;
import useUserLinks from "useUserLinks" /* 8645 */;
import useUserIsTeenAgeGroupDefault from "useUserIsTeenAgeGroup" /* 14911 */;
import noop from "module_19" /* 19 */;

require = fn;
function SpendingLimitRow(teenId) {
  teenId = teenId.teenId;
  const tmp = closure_9();
  let obj = teenId(14909);
  const spendingLimitDisplayState = obj.useSpendingLimitDisplayState(teenId.cap);
  const kind = spendingLimitDisplayState.kind;
  if ("off" === kind) {
    obj = { trailing: null };
    const intl2 = tmp2(1114).intl;
    obj = { variant: "text-sm/normal", color: "text-muted", children: intl2.string(_modDef2396.YEnpaj) };
    obj.trailing = closure_7(tmp2(4556).Text, obj);
    let tmp8 = obj;
    const stringResult = intl2.string(_modDef2396.YEnpaj);
  } else if ("on" === kind) {
    const obj1 = { trailing: null };
    const obj2 = { variant: "text-sm/normal", color: "text-muted", children: spendingLimitDisplayState.monthlyText };
    obj1.trailing = closure_7(tmp2(4556).Text, obj2);
    tmp8 = obj1;
  } else if ("close-to-limit" === kind) {
    const obj3 = { trailing: null, subLabel: null };
    const obj4 = { variant: "text-sm/normal", color: "text-muted", children: spendingLimitDisplayState.monthlyText };
    obj3.trailing = closure_7(tmp2(4556).Text, obj4);
    const obj5 = { variant: "text-sm/normal", style: tmp.subLabelWarning, children: spendingLimitDisplayState.remainingText };
    obj3.subLabel = closure_7(tmp2(4556).Text, obj5);
    tmp8 = obj3;
  } else if ("spent" === kind) {
    const obj6 = { trailing: null, subLabel: null };
    const obj7 = { variant: "text-sm/normal", color: "text-muted", children: spendingLimitDisplayState.monthlyText };
    obj6.trailing = closure_7(tmp2(4556).Text, obj7);
    const intl = tmp2(1114).intl;
    const obj8 = { variant: "text-sm/normal", style: tmp.subLabelCritical, children: intl.string(_modDef2396.Q2msVQ) };
    obj6.subLabel = closure_7(tmp2(4556).Text, obj8);
    tmp8 = obj6;
    const stringResult1 = intl.string(_modDef2396.Q2msVQ);
  } else if ("blocked" === kind) {
    const obj9 = { trailing: null, subLabel: null };
    const intl4 = tmp2(1114).intl;
    const obj10 = { variant: "text-sm/normal", color: "text-muted", children: intl4.string(_modDef2396.kGFuGn) };
    obj9.trailing = closure_7(tmp2(4556).Text, obj10);
    const intl5 = tmp2(1114).intl;
    const stringResult2 = intl4.string(_modDef2396.kGFuGn);
    const obj11 = { variant: "text-sm/normal", style: tmp.subLabelCritical, children: intl5.string(_modDef2396.FUu2b0) };
    obj9.subLabel = closure_7(tmp2(4556).Text, obj11);
    tmp8 = obj9;
    const stringResult3 = intl5.string(_modDef2396.FUu2b0);
  }
  ({ trailing, subLabel } = tmp8);
  const obj12 = { label: null, trailing: null, subLabel: null, onPress: null, arrow: null, disabled: null };
  const intl3 = tmp2(1114).intl;
  obj12.label = intl3.string(_modDef2396.gMeekL);
  obj12.trailing = trailing;
  obj12.subLabel = subLabel;
  let fn;
  if (null != teenId) {
    fn = () => {
      const obj = { teenId };
      obj.pushLazy(asyncRequireImpl(14907, dependencyMap.paths), obj, undefined, { animation: "slide_from_right" });
    };
  }
  obj12.onPress = fn;
  obj12.arrow = null != teenId;
  obj12.disabled = null == teenId;
  return closure_7(teenId(5605).TableRow, obj12);
}
function FamilyCenterSettingsTeenControls() {
  function handleOpenSettings() {
    navigation.navigate(UserSettingsSections.CONTENT_AND_SOCIAL);
  }
  const tmp = closure_9();
  let obj = activeLinkUserIds(handleOpenSettings[15]);
  activeLinkUserIds = obj.useActiveLinkUserIds();
  let obj1 = activeLinkUserIds(handleOpenSettings[16]);
  const selectedTeenUser = obj1.useSelectedTeenUser();
  let obj2 = activeLinkUserIds(handleOpenSettings[17]);
  let isFamilyCenterV3Enabled = obj2.useIsFamilyCenterV3Enabled({ location: "FamilyCenterSettingsControls" });
  let obj3 = activeLinkUserIds(handleOpenSettings[18]);
  importDefault = obj3.useNavigation();
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
  const spendingLimitFromUserSettings = activeLinkUserIds(handleOpenSettings[13]).useSpendingLimitFromUserSettings();
  const tmp2Result = activeLinkUserIds(handleOpenSettings[13]);
  ({ subLabel, trailing } = require("useScheduleTimeControlsRowProps")(rules));
  obj = { style: tmp.teenControlsContainer, children: null };
  obj = { style: tmp.controlledSettingsHeader, children: null };
  obj1 = { variant: "text-sm/semibold", children: null };
  const intl = tmp2(tmp3[8]).intl;
  obj1.children = intl.string(require("module_2396").ahKIJO);
  const items = [closure_7(activeLinkUserIds(handleOpenSettings[7]).Text, obj1), ];
  obj2 = { variant: "text-sm/medium", color: "text-muted", children: null };
  const intl2 = tmp2(tmp3[8]).intl;
  obj3 = {
    openSettingsHook(children, arg1) {
      return React5(Text_Text.Text, { variant: "text-sm/medium", color: "text-link", onPress: handleOpenSettings, children }, arg1);
    }
  };
  obj2.children = intl2.format(require("module_2396").X9rW0j, obj3);
  items[1] = closure_7(activeLinkUserIds(handleOpenSettings[7]).Text, obj2);
  obj.children = items;
  const items1 = [closure_8(activeLinkUserIds(handleOpenSettings[20]).Stack, obj), , ];
  if (isFamilyCenterV3Enabled) {
    const obj4 = { style: tmp.controlsGroup, children: null };
    const obj5 = { cap: spendingLimitFromUserSettings };
    const items2 = [closure_7(SpendingLimitRow, obj5), ];
    const obj6 = { label: null, subLabel: null, trailing: null, onPress: null, arrow: null };
    const intl3 = tmp2(tmp3[8]).intl;
    obj6.label = intl3.string(tmp7(tmp3[9])["1Op+NP"]);
    obj6.subLabel = subLabel;
    obj6.trailing = trailing;
    let fn;
    if (rules.length > 0) {
      fn = () => {
        navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS });
      };
    }
    const obj7 = { hasIcons: false, children: null };
    obj6.onPress = fn;
    obj6.arrow = rules.length > 0;
    items2[1] = closure_7(tmp2(tmp3[14]).TableRow, obj6);
    obj7.children = items2;
    obj4.children = closure_8(tmp2(tmp3[21]).TableRowGroup, obj7);
    isFamilyCenterV3Enabled = closure_7(View, obj4);
  }
  items1[1] = isFamilyCenterV3Enabled;
  const obj8 = { text: null, onPress: null, shrink: true, grow: false, variant: "secondary", size: "sm" };
  const intl4 = tmp2(tmp3[8]).intl;
  obj8.text = intl4.formatToPlainString(require("module_2396").w0JA3P, { count: activeLinkUserIds.length });
  obj8.onPress = function onPress() {
    let obj = LayerActionCreators;
    obj.popLayer();
    obj = { recipientIds: activeLinkUserIds };
    ChannelActionCreatorsDefault.openPrivateChannel(obj);
  };
  items1[2] = closure_7(activeLinkUserIds(handleOpenSettings[22]).Button, obj8);
  obj.children = items1;
  return closure_8(activeLinkUserIds(handleOpenSettings[20]).Stack, obj);
}
function FamilyCenterSettingsParentalControls() {
  const tmp = closure_9();
  let obj = selectedTeenUser(14893);
  selectedTeenUser = obj.useSelectedTeenUser();
  let obj1 = selectedTeenUser(14893);
  const shouldLoadSettingsForSelectedTeenUser = obj1.useShouldLoadSettingsForSelectedTeenUser();
  let obj2 = selectedTeenUser(7594);
  const isFamilyCenterV3Enabled = obj2.useIsFamilyCenterV3Enabled({ location: "FamilyCenterSettingsControls" });
  let obj3 = selectedTeenUser(1483);
  dependencyMap = obj3.useNavigation();
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
  const ParentalControlledSpendingLimit = tmp2(14825).ParentalControlledSpendingLimit;
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
      const teenSettingsAndConsents = FamilyCenterActionCreatorsDefault.fetchTeenSettingsAndConsents(selectedTeenUser.id);
    }
    tmp3 = null != id && shouldLoadSettingsForSelectedTeenUser;
  }, items);
  ({ subLabel, trailing } = shouldLoadSettingsForSelectedTeenUser(14910)(rules));
  obj = { style: tmp.parentalControlsContainer, children: null };
  obj = { variant: "text-sm/semibold", children: null };
  const intl = tmp2(1114).intl;
  obj.children = intl.string(shouldLoadSettingsForSelectedTeenUser(2396).ahKIJO);
  const items1 = [closure_7(selectedTeenUser(4556).Text, obj), , ];
  obj1 = { variant: "text-sm/medium", color: "text-muted", children: null };
  const intl2 = tmp2(1114).intl;
  obj1.children = intl2.string(shouldLoadSettingsForSelectedTeenUser(2396).Sv236e);
  items1[1] = closure_7(selectedTeenUser(4556).Text, obj1);
  obj2 = { style: tmp.controlsGroup, children: null };
  obj3 = { label: null, onPress: null, arrow: true };
  const intl3 = tmp2(1114).intl;
  obj3.label = intl3.string(selectedTeenUser(1114).t["+o1pDZ"]);
  obj3.onPress = function onPress() {
    navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, { selectedSubPage: FamilyCenterSubPages.CONTENT_AND_SOCIAL });
  };
  const items2 = [closure_7(selectedTeenUser(5605).TableRow, obj3), , , ];
  const obj4 = { label: null, onPress: null, arrow: true };
  const intl4 = tmp2(1114).intl;
  obj4.label = intl4.string(selectedTeenUser(1114).t.OAuOHD);
  obj4.onPress = function onPress() {
    navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, { selectedSubPage: FamilyCenterSubPages.DATA_AND_PRIVACY });
  };
  items2[1] = closure_7(selectedTeenUser(5605).TableRow, obj4);
  let tmp15Result = isFamilyCenterV3Enabled;
  if (isFamilyCenterV3Enabled) {
    let id2;
    if (selectedTeenUser != null) {
      id2 = selectedTeenUser.id;
    }
    tmp15Result = null != id2;
  }
  if (tmp15Result) {
    const obj5 = { cap: controlledSetting, teenId: selectedTeenUser.id };
    tmp15Result = closure_7(SpendingLimitRow, obj5);
  }
  items2[2] = tmp15Result;
  tmp15Result = isFamilyCenterV3Enabled;
  if (isFamilyCenterV3Enabled) {
    let id3;
    if (selectedTeenUser != null) {
      id3 = selectedTeenUser.id;
    }
    tmp15Result = null != id3;
  }
  if (tmp15Result) {
    const obj6 = { label: null, subLabel: null, trailing: null, onPress: null, arrow: true };
    const intl5 = tmp2(1114).intl;
    obj6.label = intl5.string(shouldLoadSettingsForSelectedTeenUser(2396)["1Op+NP"]);
    obj6.subLabel = subLabel;
    obj6.trailing = trailing;
    obj6.onPress = function onPress() {
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
    tmp15Result = closure_7(tmp2(5605).TableRow, obj6);
  }
  items2[3] = tmp15Result;
  obj2.children = closure_8(selectedTeenUser(5687).TableRowGroup, { hasIcons: false, children: items2 });
  items1[2] = closure_7(View, obj2);
  obj.children = items1;
  return closure_8(selectedTeenUser(4973).Stack, obj);
}
const View = fn(17).View;
const FamilyCenterSubPages = fn(7538).FamilyCenterSubPages;
const UserSettingsSections = fn(1074).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { teenControlsContainer: null, controlledSettingsHeader: null, parentalControlsContainer: null, controlsGroup: null, subLabelWarning: null, subLabelCritical: null };
createStyles = { gap: nativeDefault.space.PX_16 };
createStyles.teenControlsContainer = createStyles;
createStyles.controlledSettingsHeader = { gap: nativeDefault.space.PX_4 };
let obj1 = { gap: nativeDefault.space.PX_4 };
createStyles.parentalControlsContainer = { gap: nativeDefault.space.PX_4 };
let obj2 = { gap: nativeDefault.space.PX_4 };
createStyles.controlsGroup = { marginTop: nativeDefault.space.PX_8 };
let obj3 = { marginTop: nativeDefault.space.PX_8 };
createStyles.subLabelWarning = { color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
let obj4 = { color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
createStyles.subLabelCritical = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterSettingsControls.tsx");

export default function FamilyCenterSettingsControls() {
  let obj = useUserLinks;
  if (0 === obj.useActiveLinkUserIds().length) {
    return null;
  } else {
    obj = { children: React5(tmp ? FamilyCenterSettingsTeenControls : FamilyCenterSettingsParentalControls, {}) };
    React5(View, obj);
  }
  tmp = useUserIsTeenAgeGroupDefault();
};