import useScheduleTimeControlsRowProps from "useScheduleTimeControlsRowProps";
import { View } from "apexExperiment";
import { FamilyCenterSubPages } from "items";
import { UserSettingsSections } from "ME";
import jsxProd from "TableRowGroupTitle";
import createCacheKey from "createCacheKey";

let error;
let metroImportAll;
const require = arg1;
function SpendingLimitRow(teenId) {
  let subLabel;
  let trailing;
  teenId = teenId.teenId;
  const tmp = createCacheKey();
  let obj = teenId(13959);
  const spendingLimitDisplayState = obj.useSpendingLimitDisplayState(teenId.cap);
  const kind = spendingLimitDisplayState.kind;
  if ("off" === kind) {
    obj = { trailing: null };
    const intl2 = tmp2(1236).intl;
    obj = { variant: "text-sm/normal", color: "text-muted", children: null };
    obj[2] = intl2.string(importDefault(2225).YEnpaj);
    obj[0] = callback(tmp2(4189).Text, obj);
    let tmp8 = obj;
    const stringResult = intl2.string(importDefault(2225).YEnpaj);
  } else if ("on" === kind) {
    const obj1 = { trailing: null };
    const obj2 = { variant: "text-sm/normal", color: "text-muted", children: null };
    obj2[2] = spendingLimitDisplayState.monthlyText;
    obj1[0] = callback(tmp2(4189).Text, obj2);
    tmp8 = obj1;
  } else if ("close-to-limit" === kind) {
    const obj3 = { trailing: null, subLabel: null };
    const obj4 = { variant: "text-sm/normal", color: "text-muted", children: null };
    obj4[2] = spendingLimitDisplayState.monthlyText;
    obj3[0] = callback(tmp2(4189).Text, obj4);
    const obj5 = { variant: "text-sm/normal", style: null, children: null };
    obj5[1] = tmp.subLabelWarning;
    obj5[2] = spendingLimitDisplayState.remainingText;
    obj3[1] = callback(tmp2(4189).Text, obj5);
    tmp8 = obj3;
  } else if ("spent" === kind) {
    const obj6 = { trailing: null, subLabel: null };
    const obj7 = { variant: "text-sm/normal", color: "text-muted", children: null };
    obj7[2] = spendingLimitDisplayState.monthlyText;
    obj6[0] = callback(tmp2(4189).Text, obj7);
    const intl = tmp2(1236).intl;
    const obj8 = { variant: "text-sm/normal", style: null, children: null };
    obj8[1] = tmp.subLabelCritical;
    obj8[2] = intl.string(importDefault(2225).Q2msVQ);
    obj6[1] = callback(tmp2(4189).Text, obj8);
    tmp8 = obj6;
    const stringResult1 = intl.string(importDefault(2225).Q2msVQ);
  } else if ("blocked" === kind) {
    const obj9 = { trailing: null, subLabel: null };
    const intl4 = tmp2(1236).intl;
    const obj10 = { variant: "text-sm/normal", color: "text-muted", children: null };
    obj10[2] = intl4.string(importDefault(2225).kGFuGn);
    obj9[0] = callback(tmp2(4189).Text, obj10);
    const intl5 = tmp2(1236).intl;
    const stringResult2 = intl4.string(importDefault(2225).kGFuGn);
    const obj11 = { variant: "text-sm/normal", style: null, children: null };
    obj11[1] = tmp.subLabelCritical;
    obj11[2] = intl5.string(importDefault(2225).FUu2b0);
    obj9[1] = callback(tmp2(4189).Text, obj11);
    tmp8 = obj9;
    const stringResult3 = intl5.string(importDefault(2225).FUu2b0);
  }
  ({ trailing, subLabel } = tmp8);
  const obj12 = { label: null, trailing: null, subLabel: null, onPress: null, arrow: null, disabled: null };
  const intl3 = tmp2(1236).intl;
  obj12[0] = intl3.string(importDefault(2225).gMeekL);
  obj12[1] = trailing;
  obj12[2] = subLabel;
  let fn;
  if (null != teenId) {
    fn = () => {
      let obj = outer1_1(outer1_2[10]);
      obj = { teenId };
      obj.pushLazy(teenId(outer1_2[12])(outer1_2[11], outer1_2.paths), obj, undefined, { animation: "slide_from_right" });
    };
  }
  obj12[3] = fn;
  obj12[4] = null != teenId;
  obj12[5] = null == teenId;
  return callback(teenId(5224).TableRow, obj12);
}
function FamilyCenterSettingsTeenControls() {
  let subLabel;
  let trailing;
  function handleOpenSettings() {
    navigation.navigate(outer1_6.CONTENT_AND_SOCIAL);
  }
  const tmp = createCacheKey();
  let obj = activeLinkUserIds(handleOpenSettings[15]);
  activeLinkUserIds = obj.useActiveLinkUserIds();
  let obj1 = activeLinkUserIds(handleOpenSettings[16]);
  const selectedTeenUser = obj1.useSelectedTeenUser();
  let obj2 = activeLinkUserIds(handleOpenSettings[17]);
  let isFamilyCenterV3Enabled = obj2.useIsFamilyCenterV3Enabled({ location: "FamilyCenterSettingsControls" });
  let obj3 = activeLinkUserIds(handleOpenSettings[18]);
  const importDefault = obj3.useNavigation();
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
  ({ subLabel, trailing } = importDefault(handleOpenSettings[19])(rules));
  obj = { style: tmp.teenControlsContainer, children: null };
  obj = { style: tmp.controlledSettingsHeader, children: null };
  obj1 = { variant: "text-sm/semibold", children: null };
  const intl = tmp2(tmp3[8]).intl;
  obj1[1] = intl.string(importDefault(handleOpenSettings[9]).ahKIJO);
  const items = [callback(activeLinkUserIds(handleOpenSettings[7]).Text, obj1), ];
  obj2 = { variant: "text-sm/medium", color: "text-muted", children: null };
  const intl2 = tmp2(tmp3[8]).intl;
  obj3 = {
    openSettingsHook(children) {
      return outer1_7(activeLinkUserIds(handleOpenSettings[7]).Text, { variant: "text-sm/medium", color: "text-link", onPress: handleOpenSettings, children }, arg1);
    }
  };
  obj2[2] = intl2.format(importDefault(handleOpenSettings[9]).X9rW0j, obj3);
  items[1] = callback(activeLinkUserIds(handleOpenSettings[7]).Text, obj2);
  obj[1] = items;
  const items1 = [callback2(activeLinkUserIds(handleOpenSettings[20]).Stack, obj), , ];
  if (isFamilyCenterV3Enabled) {
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.controlsGroup;
    const obj5 = { cap: null };
    obj5[0] = spendingLimitFromUserSettings;
    const items2 = [tmp10(SpendingLimitRow, obj5), ];
    const obj6 = { label: null, subLabel: null, trailing: null, onPress: null, arrow: null };
    const intl3 = tmp2(tmp3[8]).intl;
    obj6[0] = intl3.string(tmp7(tmp3[9])["1Op+NP"]);
    obj6[1] = subLabel;
    obj6[2] = trailing;
    let fn;
    if (rules.length > 0) {
      fn = () => {
        navigation.navigate(outer1_6.FAMILY_CENTER_PARENTAL_CONTROLS, { selectedSubPage: outer1_5.SCREEN_TIME_CONTROLS });
      };
    }
    const obj7 = { hasIcons: false, children: null };
    obj6[3] = fn;
    obj6[4] = rules.length > 0;
    items2[1] = tmp10(tmp2(tmp3[14]).TableRow, obj6);
    obj7[1] = items2;
    obj4[1] = tmp9(tmp2(tmp3[21]).TableRowGroup, obj7);
    isFamilyCenterV3Enabled = tmp10(View, obj4);
    const tmp11 = View;
  }
  items1[1] = isFamilyCenterV3Enabled;
  const obj8 = { text: null, onPress: null, shrink: true, grow: false, variant: "secondary", size: "sm" };
  const intl4 = tmp2(tmp3[8]).intl;
  obj8[0] = intl4.formatToPlainString(importDefault(handleOpenSettings[9]).w0JA3P, { count: activeLinkUserIds.length });
  obj8[1] = function onPress() {
    let obj = activeLinkUserIds(handleOpenSettings[23]);
    obj.popLayer();
    obj = { recipientIds: activeLinkUserIds };
    navigation(handleOpenSettings[24]).openPrivateChannel(obj);
  };
  items1[2] = callback(activeLinkUserIds(handleOpenSettings[22]).Button, obj8);
  obj[1] = items1;
  return callback2(activeLinkUserIds(handleOpenSettings[20]).Stack, obj);
}
function FamilyCenterSettingsParentalControls() {
  let subLabel;
  let trailing;
  const tmp = createCacheKey();
  let obj = selectedTeenUser(13943);
  selectedTeenUser = obj.useSelectedTeenUser();
  let obj1 = selectedTeenUser(13943);
  const shouldLoadSettingsForSelectedTeenUser = obj1.useShouldLoadSettingsForSelectedTeenUser();
  let obj2 = selectedTeenUser(5859);
  const isFamilyCenterV3Enabled = obj2.useIsFamilyCenterV3Enabled({ location: "FamilyCenterSettingsControls" });
  let obj3 = selectedTeenUser(1480);
  const dependencyMap = obj3.useNavigation();
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
  const ParentalControlledSpendingLimit = tmp2(13875).ParentalControlledSpendingLimit;
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
      id = tmp.id;
    }
    if (tmp3) {
      const teenSettingsAndConsents = shouldLoadSettingsForSelectedTeenUser(navigation[26]).fetchTeenSettingsAndConsents(tmp.id);
      const obj = shouldLoadSettingsForSelectedTeenUser(navigation[26]);
    }
  }, items);
  ({ subLabel, trailing } = shouldLoadSettingsForSelectedTeenUser(13960)(rules));
  obj = { style: tmp.parentalControlsContainer, children: null };
  obj = { variant: "text-sm/semibold", children: null };
  const intl = tmp2(1236).intl;
  obj[1] = intl.string(shouldLoadSettingsForSelectedTeenUser(2225).ahKIJO);
  const items1 = [callback(selectedTeenUser(4189).Text, obj), , ];
  obj1 = { variant: "text-sm/medium", color: "text-muted", children: null };
  const intl2 = tmp2(1236).intl;
  obj1[2] = intl2.string(shouldLoadSettingsForSelectedTeenUser(2225).Sv236e);
  items1[1] = callback(selectedTeenUser(4189).Text, obj1);
  obj2 = { style: tmp.controlsGroup, children: null };
  obj3 = { label: null, onPress: null, arrow: true };
  const intl3 = tmp2(1236).intl;
  obj3[0] = intl3.string(selectedTeenUser(1236).t["+o1pDZ"]);
  obj3[1] = function onPress() {
    navigation.navigate(outer1_6.FAMILY_CENTER_PARENTAL_CONTROLS, { selectedSubPage: outer1_5.CONTENT_AND_SOCIAL });
  };
  const items2 = [callback(selectedTeenUser(5224).TableRow, obj3), , , ];
  const obj4 = { label: null, onPress: null, arrow: true };
  const intl4 = tmp2(1236).intl;
  obj4[0] = intl4.string(selectedTeenUser(1236).t.OAuOHD);
  obj4[1] = function onPress() {
    navigation.navigate(outer1_6.FAMILY_CENTER_PARENTAL_CONTROLS, { selectedSubPage: outer1_5.DATA_AND_PRIVACY });
  };
  items2[1] = callback(selectedTeenUser(5224).TableRow, obj4);
  let tmp15Result = isFamilyCenterV3Enabled;
  if (isFamilyCenterV3Enabled) {
    let id2;
    if (selectedTeenUser != null) {
      id2 = selectedTeenUser.id;
    }
    tmp15Result = null != id2;
  }
  if (tmp15Result) {
    const obj5 = { cap: null, teenId: null };
    obj5[0] = controlledSetting;
    obj5[1] = selectedTeenUser.id;
    tmp15Result = tmp15(SpendingLimitRow, obj5);
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
    const intl5 = tmp2(1236).intl;
    obj6[0] = intl5.string(shouldLoadSettingsForSelectedTeenUser(2225)["1Op+NP"]);
    obj6[1] = subLabel;
    obj6[2] = trailing;
    obj6[3] = function onPress() {
      const obj = { selectedSubPage: outer1_5.SCREEN_TIME_CONTROLS, autoOpenCreate: null };
      let tmp2 = 0 === rules.length;
      if (tmp2) {
        let id;
        if (selectedTeenUser != null) {
          id = selectedTeenUser.id;
        }
        tmp2 = null != id;
      }
      obj[1] = tmp2;
      navigation.navigate(outer1_6.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
    };
    tmp15Result = tmp15(tmp2(5224).TableRow, obj6);
  }
  items2[3] = tmp15Result;
  obj2[1] = closure_8(selectedTeenUser(5558).TableRowGroup, { hasIcons: false, children: items2 });
  items1[2] = callback(View, obj2);
  obj[1] = items1;
  return closure_8(selectedTeenUser(4602).Stack, obj);
}
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { teenControlsContainer: null, controlledSettingsHeader: null, parentalControlsContainer: null, controlsGroup: null, subLabelWarning: null, subLabelCritical: null };
createCacheKey = { gap: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { gap: require("Themes").space.PX_4 };
let obj1 = { gap: require("Themes").space.PX_4 };
createCacheKey[2] = { gap: require("Themes").space.PX_4 };
let obj2 = { gap: require("Themes").space.PX_4 };
createCacheKey[3] = { marginTop: require("Themes").space.PX_8 };
let obj3 = { marginTop: require("Themes").space.PX_8 };
createCacheKey[4] = { color: require("Themes").colors.ICON_FEEDBACK_WARNING };
let obj4 = { color: require("Themes").colors.ICON_FEEDBACK_WARNING };
createCacheKey[5] = { color: require("Themes").colors.TEXT_FEEDBACK_CRITICAL };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj5 = { color: require("Themes").colors.TEXT_FEEDBACK_CRITICAL };
const result = require("items").fileFinishedImporting("modules/parent_tools/native/FamilyCenterSettingsControls.tsx");

export default function FamilyCenterSettingsControls() {
  let obj = require(6258) /* useUserIdsForLinkStatus */;
  if (0 === obj.useActiveLinkUserIds().length) {
    return null;
  } else {
    obj = { children: null };
    obj[0] = closure_7(tmp ? FamilyCenterSettingsTeenControls : FamilyCenterSettingsParentalControls, {});
    closure_7(View, obj);
    const tmp3 = View;
  }
};