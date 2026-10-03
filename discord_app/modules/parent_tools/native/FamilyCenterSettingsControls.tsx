// discord_app/modules/parent_tools/native/FamilyCenterSettingsControls.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01987_asyncRequireImpl.js";
import _modDef2493 from "../FamilyCenter.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ChannelActionCreatorsDefault from "../../../actions/ChannelActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import FamilyCenterActionCreatorsDefault from "../FamilyCenterActionCreators.tsx";
import LayerActionCreators from "../../../actions/LayerActionCreators.tsx";
import useUserLinks from "../hooks/useUserLinks.tsx";
import useUserIsTeenAgeGroupDefault from "../hooks/useUserIsTeenAgeGroup.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function getSpendingLimitRowProps(spendingLimitDisplayState, subLabelWarning) {
  const kind = spendingLimitDisplayState.kind;
  if ("off" === kind) {
    const obj2 = { trailing: null };
    const intl4 = util.intl;
    const obj3 = { variant: "text-sm/normal", color: "text-muted", children: intl4.string(_modDef2493.YEnpaj) };
    obj2.trailing = React5(Text_Text.Text, obj3);
    return obj2;
  } else if ("on" === kind) {
    const obj4 = { trailing: null };
    const obj5 = { variant: "text-sm/normal", color: "text-muted", children: spendingLimitDisplayState.monthlyText };
    obj4.trailing = React5(Text_Text.Text, obj5);
    return obj4;
  } else if ("close-to-limit" === kind) {
    const obj6 = { trailing: null, subLabel: null };
    const obj7 = { variant: "text-sm/normal", color: "text-muted", children: spendingLimitDisplayState.monthlyText };
    obj6.trailing = React5(Text_Text.Text, obj7);
    const obj8 = {
      variant: "text-sm/normal",
      style: subLabelWarning.subLabelWarning,
      children: spendingLimitDisplayState.remainingText,
    };
    obj6.subLabel = React5(Text_Text.Text, obj8);
    return obj6;
  } else if ("spent" === kind) {
    const obj9 = { trailing: null, subLabel: null };
    const obj10 = { variant: "text-sm/normal", color: "text-muted", children: spendingLimitDisplayState.monthlyText };
    obj9.trailing = React5(Text_Text.Text, obj10);
    const intl3 = util.intl;
    const obj11 = {
      variant: "text-sm/normal",
      style: subLabelWarning.subLabelCritical,
      children: intl3.string(_modDef2493.Q2msVQ),
    };
    obj9.subLabel = React5(Text_Text.Text, obj11);
    return obj9;
  } else if ("blocked" === kind) {
    const obj = { trailing: null, subLabel: null };
    const intl = util.intl;
    const obj12 = { variant: "text-sm/normal", color: "text-muted", children: intl.string(_modDef2493.kGFuGn) };
    obj.trailing = React5(Text_Text.Text, obj12);
    const intl2 = util.intl;
    const stringResult2 = intl.string(_modDef2493.kGFuGn);
    const obj13 = {
      variant: "text-sm/normal",
      style: subLabelWarning.subLabelCritical,
      children: intl2.string(_modDef2493.FUu2b0),
    };
    obj.subLabel = React5(Text_Text.Text, obj13);
    return obj;
  }
}
const View = fn(17).View;
const FamilyCenterSubPages = fn(7049).FamilyCenterSubPages;
const UserSettingsSections = fn(1085).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
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
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (teenId) => {
      const cResult = teenId(576).c(13);
      teenId = teenId.teenId;
      const tmp4 = closure_9();
      const obj = teenId(576);
      const spendingLimitDisplayState = teenId(14713).useSpendingLimitDisplayState(teenId.cap);
      if (cResult[0] === spendingLimitDisplayState) {
        if (cResult[1] === tmp4) {
          let tmp6 = cResult[2];
        }
        ({ trailing, subLabel } = tmp6);
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(_modDef2493.gMeekL);
          cResult[3] = stringResult;
          let tmp11 = stringResult;
        } else {
          tmp11 = cResult[3];
        }
        if ((cResult[4] === null) == teenId) {
          if (cResult[5] === teenId) {
            let tmp14 = cResult[6];
          }
          if (cResult[7] === tmp9) {
            if (cResult[8] === subLabel) {
              if (cResult[9] === tmp14) {
                if (cResult[10] === tmp15) {
                  if (cResult[11] === trailing) {
                    let tmp16 = cResult[12];
                  }
                  return tmp16;
                }
              }
            }
          }
          const obj3 = { label: tmp11, trailing, subLabel, onPress: tmp14, arrow: !tmp9, disabled: tmp9 };
          const tmp18 = closure_7(tmp(5993).TableRow, obj3);
          cResult[7] = tmp9;
          cResult[8] = subLabel;
          cResult[9] = tmp14;
          cResult[10] = !tmp9;
          cResult[11] = trailing;
          cResult[12] = tmp18;
          tmp16 = tmp18;
        }
        let fn;
        if (null != teenId) {
          fn = () => {
            ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14711, dependencyMap.paths), { teenId }, undefined, {
              animation: "slide_from_right",
            });
          };
        }
        cResult[4] = null == teenId;
        cResult[5] = teenId;
        cResult[6] = fn;
        tmp14 = fn;
      }
      const tmp7 = getSpendingLimitRowProps(spendingLimitDisplayState, tmp4);
      cResult[0] = spendingLimitDisplayState;
      cResult[1] = tmp4;
      cResult[2] = tmp7;
      tmp6 = tmp7;
      const obj2 = teenId(14713);
    }
  : (teenId) => {
      teenId = teenId.teenId;
      const tmp = closure_9();
      const obj = teenId(14713);
      ({ trailing, subLabel } = getSpendingLimitRowProps(teenId(14713).useSpendingLimitDisplayState(teenId.cap), tmp));
      const obj2 = { label: null, trailing: null, subLabel: null, onPress: null, arrow: null, disabled: null };
      const intl = teenId(1126).intl;
      obj2.label = intl.string(_modDef2493.gMeekL);
      obj2.trailing = trailing;
      obj2.subLabel = subLabel;
      let fn;
      if (null != teenId) {
        fn = () => {
          ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14711, dependencyMap.paths), { teenId }, undefined, {
            animation: "slide_from_right",
          });
        };
      }
      obj2.onPress = fn;
      obj2.arrow = null != teenId;
      obj2.disabled = null == teenId;
      return closure_7(teenId(5993).TableRow, obj2);
    };
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = activeLinkUserIds(576).c(40);
      const tmp4 = closure_9();
      let obj = activeLinkUserIds(576);
      activeLinkUserIds = activeLinkUserIds(8295).useActiveLinkUserIds();
      const obj2 = activeLinkUserIds(8295);
      const selectedTeenUser = activeLinkUserIds(14697).useSelectedTeenUser();
      const obj3 = activeLinkUserIds(14697);
      const navigation = activeLinkUserIds(1490).useNavigation();
      let rules;
      if (selectedTeenUser != null) {
        const restrictedSchedule = selectedTeenUser.restrictedSchedule;
        if (restrictedSchedule != null) {
          rules = restrictedSchedule.rules;
        }
      }
      if (cResult[0] !== rules) {
        let rules1;
        if (selectedTeenUser != null) {
          const restrictedSchedule2 = selectedTeenUser.restrictedSchedule;
          if (restrictedSchedule2 != null) {
            rules1 = restrictedSchedule2.rules;
          }
        }
        if (rules1 == null) {
          rules1 = [];
        }
        let rules2;
        if (selectedTeenUser != null) {
          const restrictedSchedule3 = selectedTeenUser.restrictedSchedule;
          if (restrictedSchedule3 != null) {
            rules2 = restrictedSchedule3.rules;
          }
        }
        cResult[0] = rules2;
        cResult[1] = rules1;
        let arr = rules1;
      } else {
        arr = cResult[1];
      }
      const obj4 = activeLinkUserIds(1490);
      const spendingLimitFromUserSettings = activeLinkUserIds(14713).useSpendingLimitFromUserSettings();
      if (cResult[2] !== activeLinkUserIds) {
        class L {
          constructor() {
            obj = closure_0(closure_2[20]);
            popLayerResult = obj.popLayer();
            obj2 = closure_1(closure_2[21]);
            obj1 = { recipientIds: closure_0 };
            openPrivateChannelResult = obj2.openPrivateChannel(obj1);
            return;
          }
        }
        cResult[2] = activeLinkUserIds;
        cResult[3] = L;
      } else {
        class L {
          constructor() {
            obj = closure_0(closure_2[20]);
            popLayerResult = obj.popLayer();
            obj2 = closure_1(closure_2[21]);
            obj1 = { recipientIds: closure_0 };
            openPrivateChannelResult = obj2.openPrivateChannel(obj1);
            return;
          }
        }
      }
      if (cResult[4] !== navigation) {
        class N {
          constructor() {
            navigateResult = closure_1.navigate(UserSettingsSections.CONTENT_AND_SOCIAL);
            return;
          }
        }
        cResult[4] = navigation;
        cResult[5] = N;
      } else {
        class N {
          constructor() {
            navigateResult = closure_1.navigate(UserSettingsSections.CONTENT_AND_SOCIAL);
            return;
          }
        }
      }
      dependencyMap = N;
      if (cResult[6] !== navigation) {
        class P {
          constructor() {
            obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS };
            navigateResult = closure_1.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
            return;
          }
        }
        cResult[6] = navigation;
        cResult[7] = P;
      } else {
        class P {
          constructor() {
            obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS };
            navigateResult = closure_1.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
            return;
          }
        }
      }
      const tmpResult = activeLinkUserIds(14713);
      ({ subLabel, trailing } = navigation(14714)(arr));
      ({ teenControlsContainer, controlledSettingsHeader } = tmp4);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS };
            navigateResult = closure_1.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
            return;
          }
        }
        const obj5 = { variant: "text-sm/semibold", children: null };
        const intl = tmp(1126).intl;
        obj5.children = intl.string(tmp14(2493).ahKIJO);
        const tmp17 = closure_7(tmp(4886).Text, obj5);
        cResult[8] = tmp17;
        const tmp16 = tmp17;
      } else {
        class P {
          constructor() {
            obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS };
            navigateResult = closure_1.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
            return;
          }
        }
      }
      if (cResult[9] !== N) {
        class P {
          constructor() {
            obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS };
            navigateResult = closure_1.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
            return;
          }
        }
        const obj6 = {
          openSettingsHook(children, arg1) {
            return React5(Text_Text.Text, { variant: "text-sm/medium", color: "text-link", onPress, children }, arg1);
          },
        };
        const formatResult = obj7.format(tmp14(2493).X9rW0j, obj6);
        cResult[9] = N;
        cResult[10] = formatResult;
      } else {
        class P {
          constructor() {
            obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS };
            navigateResult = closure_1.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
            return;
          }
        }
      }
      if (cResult[11] !== tmp18) {
        class P {
          constructor() {
            obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS };
            navigateResult = closure_1.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
            return;
          }
        }
        const obj8 = { variant: "text-sm/medium", color: "text-muted", children: tmp18 };
        const tmp21 = closure_7(tmp(4886).Text, obj8);
        cResult[11] = tmp18;
        cResult[12] = tmp21;
      } else {
        class P {
          constructor() {
            obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS };
            navigateResult = closure_1.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
            return;
          }
        }
      }
      if (cResult[13] === tmp4.controlledSettingsHeader) {
        class P {
          constructor() {
            obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS };
            navigateResult = closure_1.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
            return;
          }
        }
        const controlsGroup = tmp4.controlsGroup;
        if (cResult[16] !== spendingLimitFromUserSettings) {
          class P {
            constructor() {
              obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS };
              navigateResult = closure_1.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
              return;
            }
          }
          const obj9 = { cap: spendingLimitFromUserSettings };
          const tmp25 = closure_7(closure_11, obj9);
          cResult[16] = spendingLimitFromUserSettings;
          cResult[17] = tmp25;
        } else {
          class P {
            constructor() {
              obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS };
              navigateResult = closure_1.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
              return;
            }
          }
        }
        const _Symbol = Symbol;
        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
          class P {
            constructor() {
              obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS };
              navigateResult = closure_1.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
              return;
            }
          }
          const stringResult = obj12.string(tmp14(2493)["1Op+NP"]);
          cResult[18] = stringResult;
          const tmp26 = stringResult;
        } else {
          class P {
            constructor() {
              obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS };
              navigateResult = closure_1.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
              return;
            }
          }
        }
        if (arr.length > 0) {
          class P {
            constructor() {
              obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS };
              navigateResult = closure_1.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
              return;
            }
          }
        }
        if (cResult[19] === subLabel) {
          class P {
            constructor() {
              obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS };
              navigateResult = closure_1.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
              return;
            }
          }
        }
        const obj10 = { label: tmp26, subLabel, trailing, onPress: undefined, arrow: arr.length > 0 };
        const tmp32 = closure_7(tmp(5993).TableRow, obj10);
        cResult[19] = subLabel;
        cResult[20] = undefined;
        cResult[21] = arr.length > 0;
        cResult[22] = trailing;
        cResult[23] = tmp32;
      }
      const obj11 = { style: controlledSettingsHeader, children: null };
      const items = [tmp16, tmp20];
      obj11.children = items;
      const tmp15 = navigation(14714)(arr);
      cResult[13] = tmp4.controlledSettingsHeader;
      cResult[14] = tmp20;
      cResult[15] = closure_8(activeLinkUserIds(5593).Stack, obj11);
      const tmp22 = closure_8(activeLinkUserIds(5593).Stack, obj11);
    }
  : () => {
      function handleOpenSettings() {
        navigation.navigate(UserSettingsSections.CONTENT_AND_SOCIAL);
      }
      const tmp = closure_9();
      activeLinkUserIds = activeLinkUserIds(handleOpenSettings[17]).useActiveLinkUserIds();
      let obj = activeLinkUserIds(handleOpenSettings[17]);
      const selectedTeenUser = activeLinkUserIds(handleOpenSettings[18]).useSelectedTeenUser();
      const obj2 = activeLinkUserIds(handleOpenSettings[18]);
      importDefault = activeLinkUserIds(handleOpenSettings[19]).useNavigation();
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
      const obj3 = activeLinkUserIds(handleOpenSettings[19]);
      const spendingLimitFromUserSettings = activeLinkUserIds(
        handleOpenSettings[15],
      ).useSpendingLimitFromUserSettings();
      const tmp2Result = activeLinkUserIds(handleOpenSettings[15]);
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
      const items1 = [closure_8(activeLinkUserIds(handleOpenSettings[23]).Stack, obj5), ,];
      const obj9 = { style: tmp.controlsGroup, children: null };
      const items2 = [closure_7(closure_11, { cap: spendingLimitFromUserSettings })];
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
      items2[1] = closure_7(activeLinkUserIds(handleOpenSettings[16]).TableRow, obj10);
      obj11.children = items2;
      obj9.children = closure_8(activeLinkUserIds(handleOpenSettings[24]).TableRowGroup, obj11);
      items1[1] = closure_7(View, obj9);
      const obj12 = { text: null, onPress: null, shrink: true, grow: false, variant: "secondary", size: "sm" };
      const intl4 = tmp2(tmp3[8]).intl;
      obj12.text = intl4.formatToPlainString(tmp6(handleOpenSettings[9]).w0JA3P, { count: activeLinkUserIds.length });
      obj12.onPress = function onPress() {
        LayerActionCreators.popLayer();
        ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: activeLinkUserIds });
      };
      items1[2] = closure_7(activeLinkUserIds(handleOpenSettings[25]).Button, obj12);
      obj4.children = items1;
      return closure_8(activeLinkUserIds(handleOpenSettings[23]).Stack, obj4);
    };
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = selectedTeenUser(navigation[14]).c(41);
      closure_9();
      let obj = selectedTeenUser(navigation[14]);
      const tmp = selectedTeenUser;
      let tmp2 = navigation;
      selectedTeenUser = selectedTeenUser(navigation[18]).useSelectedTeenUser();
      const obj2 = selectedTeenUser(navigation[18]);
      const shouldLoadSettingsForSelectedTeenUser = selectedTeenUser(
        navigation[18],
      ).useShouldLoadSettingsForSelectedTeenUser();
      const obj3 = selectedTeenUser(navigation[18]);
      navigation = selectedTeenUser(navigation[19]).useNavigation();
      let rules;
      if (selectedTeenUser != null) {
        const restrictedSchedule = selectedTeenUser.restrictedSchedule;
        if (restrictedSchedule != null) {
          rules = restrictedSchedule.rules;
        }
      }
      if (cResult[0] !== rules) {
        let rules1;
        if (selectedTeenUser != null) {
          const restrictedSchedule2 = selectedTeenUser.restrictedSchedule;
          if (restrictedSchedule2 != null) {
            rules1 = restrictedSchedule2.rules;
          }
        }
        if (rules1 == null) {
          rules1 = [];
        }
        let rules2;
        if (selectedTeenUser != null) {
          const restrictedSchedule3 = selectedTeenUser.restrictedSchedule;
          if (restrictedSchedule3 != null) {
            rules2 = restrictedSchedule3.rules;
          }
        }
        cResult[0] = rules2;
        cResult[1] = rules1;
        let arr = rules1;
      } else {
        arr = cResult[1];
      }
      const ParentalControlledSpendingLimit = tmp(tmp2[26]).ParentalControlledSpendingLimit;
      let id;
      if (selectedTeenUser != null) {
        id = selectedTeenUser.id;
      }
      const controlledSetting = ParentalControlledSpendingLimit.useControlledSetting(id);
      if (cResult[2] === selectedTeenUser) {
        if (cResult[3] === shouldLoadSettingsForSelectedTeenUser) {
          let tmp12 = cResult[4];
        }
        let id1;
        if (selectedTeenUser != null) {
          id1 = selectedTeenUser.id;
        }
        if (cResult[5] === shouldLoadSettingsForSelectedTeenUser) {
          if (cResult[6] === id1) {
            let tmp14 = cResult[7];
          }
          const effect = arr.useEffect(tmp12, tmp14);
          if (cResult[8] !== navigation) {
            class P {
              constructor(arg0) {
                obj = { selectedSubPage: arg0 };
                navigateResult = closure_2.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
                return;
              }
            }
            cResult[8] = navigation;
            cResult[9] = P;
            const tmp17 = P;
          } else {
            class P {
              constructor(arg0) {
                obj = { selectedSubPage: arg0 };
                navigateResult = closure_2.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
                return;
              }
            }
          }
          P = tmp17;
          if (cResult[10] === navigation) {
            class P {
              constructor(arg0) {
                obj = { selectedSubPage: arg0 };
                navigateResult = closure_2.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
                return;
              }
            }
          }
          cResult[10] = navigation;
          cResult[11] = arr.length;
          if (selectedTeenUser != null) {
            class P {
              constructor(arg0) {
                obj = { selectedSubPage: arg0 };
                navigateResult = closure_2.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
                return;
              }
            }
          }
          const fn2 = function f() {
            const obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS, autoOpenCreate: null };
            let tmp2 = 0 === arr.length;
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
          cResult[12] = undefined;
          cResult[13] = fn2;
        }
        const items = [id1, shouldLoadSettingsForSelectedTeenUser];
        cResult[5] = shouldLoadSettingsForSelectedTeenUser;
        cResult[6] = id1;
        cResult[7] = items;
        tmp14 = items;
      }
      const fn = function _() {
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
      };
      cResult[2] = selectedTeenUser;
      cResult[3] = shouldLoadSettingsForSelectedTeenUser;
      cResult[4] = fn;
      tmp12 = fn;
    }
  : () => {
      const tmp = closure_9();
      selectedTeenUser = selectedTeenUser(14697).useSelectedTeenUser();
      let obj = selectedTeenUser(14697);
      const shouldLoadSettingsForSelectedTeenUser = selectedTeenUser(14697).useShouldLoadSettingsForSelectedTeenUser();
      const obj2 = selectedTeenUser(14697);
      dependencyMap = selectedTeenUser(1490).useNavigation();
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
      const ParentalControlledSpendingLimit = tmp2(14622).ParentalControlledSpendingLimit;
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
      const obj3 = selectedTeenUser(1490);
      const tmp11 = shouldLoadSettingsForSelectedTeenUser;
      ({ subLabel, trailing } = shouldLoadSettingsForSelectedTeenUser(14714)(rules));
      const obj4 = { style: tmp.parentalControlsContainer, children: null };
      const obj5 = { variant: "text-sm/semibold", children: null };
      const intl = tmp2(1126).intl;
      obj5.children = intl.string(shouldLoadSettingsForSelectedTeenUser(2493).ahKIJO);
      const items1 = [closure_7(selectedTeenUser(4886).Text, obj5), ,];
      const obj6 = { variant: "text-sm/medium", color: "text-muted", children: null };
      const intl2 = tmp2(1126).intl;
      obj6.children = intl2.string(shouldLoadSettingsForSelectedTeenUser(2493).Sv236e);
      items1[1] = closure_7(selectedTeenUser(4886).Text, obj6);
      const obj7 = { style: tmp.controlsGroup, children: null };
      const obj8 = { label: null, onPress: null, arrow: true };
      const intl3 = tmp2(1126).intl;
      obj8.label = intl3.string(selectedTeenUser(1126).t["+o1pDZ"]);
      obj8.onPress = function onPress() {
        navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, {
          selectedSubPage: FamilyCenterSubPages.CONTENT_AND_SOCIAL,
        });
      };
      const items2 = [closure_7(selectedTeenUser(5993).TableRow, obj8), , ,];
      const obj9 = { label: null, onPress: null, arrow: true };
      const intl4 = tmp2(1126).intl;
      obj9.label = intl4.string(selectedTeenUser(1126).t.OAuOHD);
      obj9.onPress = function onPress() {
        navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, {
          selectedSubPage: FamilyCenterSubPages.DATA_AND_PRIVACY,
        });
      };
      items2[1] = closure_7(selectedTeenUser(5993).TableRow, obj9);
      let id2;
      if (selectedTeenUser != null) {
        id2 = selectedTeenUser.id;
      }
      let tmp14Result = null != id2;
      if (tmp14Result) {
        const obj10 = { cap: controlledSetting, teenId: selectedTeenUser.id };
        tmp14Result = closure_7(closure_11, obj10);
      }
      items2[2] = tmp14Result;
      let id3;
      if (selectedTeenUser != null) {
        id3 = selectedTeenUser.id;
      }
      let tmp14Result2 = null != id3;
      if (tmp14Result2) {
        const obj11 = { label: null, subLabel: null, trailing: null, onPress: null, arrow: true };
        const intl5 = tmp2(1126).intl;
        obj11.label = intl5.string(tmp11(2493)["1Op+NP"]);
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
        tmp14Result2 = closure_7(tmp2(5993).TableRow, obj11);
      }
      items2[3] = tmp14Result2;
      obj7.children = closure_8(selectedTeenUser(6074).TableRowGroup, { hasIcons: false, children: items2 });
      items1[2] = closure_7(View, obj7);
      obj4.children = items1;
      return closure_8(selectedTeenUser(5593).Stack, obj4);
    };
ReactCompilerGating = fn(558);
let obj8 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterSettingsControls.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      const tmp2 = useUserIsTeenAgeGroupDefault();
      let num = 0;
      if (0 === obj2.useActiveLinkUserIds().length) {
        return null;
      } else {
        const obj3 = { children: React5(tmp2 ? closure_12 : closure_13, {}) };
        const tmp3Result = React5(View, obj3);
        cResult[num] = tmp2;
        num = 1;
        cResult[1] = tmp3Result;
      }
      obj2 = useUserLinks;
    }
  : () => {
      const tmp = useUserIsTeenAgeGroupDefault();
      if (0 === obj.useActiveLinkUserIds().length) {
        return null;
      } else {
        const obj2 = { children: React5(tmp ? closure_12 : closure_13, {}) };
        React5(View, obj2);
      }
      obj = useUserLinks;
    };
