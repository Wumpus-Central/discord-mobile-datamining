// discord_app/modules/parent_tools/native/FamilyCenterSettingsControls.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import intl6 from "../../../intl/index.native.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import _modDef2521 from "../FamilyCenter.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ChannelActionCreatorsDefault from "../../../actions/ChannelActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import FamilyCenterConstants from "../FamilyCenterConstants.tsx";
import FamilyCenterActionCreatorsDefault from "../FamilyCenterActionCreators.tsx";
import LayerActionCreators from "../../../actions/LayerActionCreators.tsx";
import useUserLinks from "../hooks/useUserLinks.tsx";
import useUserIsTeenAgeGroupDefault from "../hooks/useUserIsTeenAgeGroup.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let dependencyMap, importDefault, navigation, teenId;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
function getSpendingLimitRowProps(spendingLimitDisplayState, subLabelWarning) {
  let obj10;
  let obj11;
  let obj12;
  let obj13;
  let obj3;
  const kind = spendingLimitDisplayState.kind;
  if ("off" === kind) {
    const obj2 = { trailing: metroImportDefault(Text_Text.Text, obj3) };
    const intl4 = intl6.intl;
    obj3 = { variant: "text-sm/normal", color: "text-muted", children: intl4.string(_modDef2521.YEnpaj) };
    intl4.string(_modDef2521.YEnpaj);
    return obj2;
  } else if ("on" === kind) {
    const obj4 = { trailing: metroImportDefault(Text_Text.Text, obj5) };
    return obj4;
  } else if ("close-to-limit" === kind) {
    const obj6 = {
      trailing: metroImportDefault(Text_Text.Text, obj7),
      subLabel: metroImportDefault(Text_Text.Text, obj8),
    };
    return obj6;
  } else if ("spent" === kind) {
    const obj9 = {
      trailing: metroImportDefault(Text_Text.Text, obj10),
      subLabel: metroImportDefault(Text_Text.Text, obj11),
    };
    obj10 = { variant: "text-sm/normal", color: "text-muted", children: spendingLimitDisplayState.monthlyText };
    const intl3 = intl6.intl;
    obj11 = {
      variant: "text-sm/normal",
      style: subLabelWarning.subLabelCritical,
      children: intl3.string(_modDef2521.Q2msVQ),
    };
    intl3.string(_modDef2521.Q2msVQ);
    return obj9;
  } else if ("blocked" === kind) {
    const obj = {
      trailing: metroImportDefault(Text_Text.Text, obj12),
      subLabel: metroImportDefault(Text_Text.Text, obj13),
    };
    const intl = intl6.intl;
    obj12 = { variant: "text-sm/normal", color: "text-muted", children: intl.string(_modDef2521.kGFuGn) };
    intl.string(_modDef2521.kGFuGn);
    const intl2 = intl6.intl;
    obj13 = {
      variant: "text-sm/normal",
      style: subLabelWarning.subLabelCritical,
      children: intl2.string(_modDef2521.FUu2b0),
    };
    intl2.string(_modDef2521.FUu2b0);
    return obj;
  }
}
const View = react_native.View;
const FamilyCenterSubPages = FamilyCenterConstants.FamilyCenterSubPages;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  teenControlsContainer: obj2,
  controlledSettingsHeader: obj3,
  parentalControlsContainer: obj4,
  controlsGroup: obj5,
  subLabelWarning: obj6,
  subLabelCritical: obj7,
};
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_4 };
obj4 = { gap: nativeDefault.space.PX_4 };
obj5 = { marginTop: nativeDefault.space.PX_8 };
obj6 = { color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
obj7 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let closure_9 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (teenId) => {
      let subLabel;
      let trailing;
      let obj = teenId(576);
      const cResult = obj.c(13);
      teenId = teenId.teenId;
      const cap = teenId.cap;
      const tmp4 = closure_9();
      let obj2 = teenId(14733);
      const spendingLimitDisplayState = obj2.useSpendingLimitDisplayState(cap);
      if (cResult[0] === spendingLimitDisplayState) {
        let tmp6;
        let tmp11;
        if (cResult[1] === tmp4) {
          tmp6 = cResult[2];
        }
        ({ trailing, subLabel } = tmp6);
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(_modDef2521.gMeekL);
          cResult[3] = stringResult;
          tmp11 = stringResult;
        } else {
          tmp11 = cResult[3];
        }
        if ((cResult[4] === null) == teenId) {
          let tmp14;
          if (cResult[5] === teenId) {
            tmp14 = cResult[6];
          }
          if ((cResult[7] === null) == teenId) {
            if (cResult[8] === subLabel) {
              if (cResult[9] === tmp14) {
                if ((cResult[10] === null) != teenId) {
                  let tmp16;
                  if (cResult[11] === trailing) {
                    tmp16 = cResult[12];
                  }
                  return tmp16;
                }
              }
            }
          }
          const obj3 = {
            label: tmp11,
            trailing,
            subLabel,
            onPress: tmp14,
            arrow: null != teenId,
            disabled: null == teenId,
          };
          const tmp18 = closure_7(teenId(6000).TableRow, obj3);
          cResult[7] = null == teenId;
          cResult[8] = subLabel;
          cResult[9] = tmp14;
          cResult[10] = null != teenId;
          cResult[11] = trailing;
          cResult[12] = tmp18;
          tmp16 = tmp18;
        }
        let fn;
        if (null != teenId) {
          fn = () => {
            const obj = ModalActionCreatorsDefault;
            const obj2 = { teenId };
            obj.pushLazy(asyncRequire(14731, dependencyMap.paths), obj2, undefined, { animation: "slide_from_right" });
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
    }
  : (teenId) => {
      let fn;
      let intl;
      let subLabel;
      let trailing;
      teenId = teenId.teenId;
      const cap = teenId.cap;
      const tmp = closure_9();
      let obj = teenId(14733);
      ({ trailing, subLabel } = getSpendingLimitRowProps(obj.useSpendingLimitDisplayState(cap), tmp));
      let obj2 = {
        label: intl.string(_modDef2521.gMeekL),
        trailing,
        subLabel,
        onPress: fn,
        arrow: null != teenId,
        disabled: null == teenId,
      };
      getSpendingLimitRowProps(obj.useSpendingLimitDisplayState(cap), tmp);
      const TableRow = teenId(6000).TableRow;
      intl = teenId(1126).intl;
      fn = undefined;
      if (null != teenId) {
        fn = () => {
          const obj = ModalActionCreatorsDefault;
          const obj2 = { teenId };
          obj.pushLazy(asyncRequire(14731, dependencyMap.paths), obj2, undefined, { animation: "slide_from_right" });
        };
      }
      return closure_7(TableRow, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let activeLinkUserIds;
      let arr;
      let controlledSettingsHeader;
      let intl;
      let items;
      let subLabel;
      let teenControlsContainer;
      let tmp17;
      let trailing;
      let obj = activeLinkUserIds(N[14]);
      const cResult = obj.c(40);
      const tmp4 = closure_9();
      let obj2 = activeLinkUserIds(N[17]);
      activeLinkUserIds = obj2.useActiveLinkUserIds();
      let obj3 = activeLinkUserIds(N[18]);
      const selectedTeenUser = obj3.useSelectedTeenUser();
      const obj4 = activeLinkUserIds(N[19]);
      navigation = obj4.useNavigation();
      let rules;
      const first = cResult[0];
      if (selectedTeenUser != null) {
        const restrictedSchedule = selectedTeenUser.restrictedSchedule;
        if (restrictedSchedule != null) {
          rules = restrictedSchedule.rules;
        }
      }
      if (first !== rules) {
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
        arr = rules1;
      } else {
        arr = cResult[1];
      }
      const tmpResult = activeLinkUserIds(N[15]);
      const spendingLimitFromUserSettings = tmpResult.useSpendingLimitFromUserSettings();
      if (cResult[2] !== activeLinkUserIds) {
        class L {
          constructor() {
            const obj = LayerActionCreators;
            obj.popLayer();
            const obj2 = ChannelActionCreatorsDefault;
            const obj3 = { recipientIds: activeLinkUserIds };
            obj2.openPrivateChannel(obj3);
          }
        }
        cResult[2] = activeLinkUserIds;
        cResult[3] = L;
      } else {
        class L {
          constructor() {
            const obj = LayerActionCreators;
            obj.popLayer();
            const obj2 = ChannelActionCreatorsDefault;
            const obj3 = { recipientIds: activeLinkUserIds };
            obj2.openPrivateChannel(obj3);
          }
        }
      }
      if (cResult[4] !== navigation) {
        class N {
          constructor() {
            navigation.navigate(UserSettingsSections.CONTENT_AND_SOCIAL);
          }
        }
        cResult[4] = navigation;
        cResult[5] = N;
      } else {
        class N {
          constructor() {
            navigation.navigate(UserSettingsSections.CONTENT_AND_SOCIAL);
          }
        }
      }
      N = tmp13;
      if (cResult[6] !== navigation) {
        class P {
          constructor() {
            const obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS };
            navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
          }
        }
        cResult[6] = navigation;
        cResult[7] = P;
      } else {
        class P {
          constructor() {
            const obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS };
            navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
          }
        }
      }
      ({ subLabel, trailing } = navigation(N[22])(arr));
      ({ teenControlsContainer, controlledSettingsHeader } = tmp4);
      navigation(N[22])(arr);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            const obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS };
            navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
          }
        }
        const obj5 = { variant: "text-sm/semibold", children: intl.string(navigation(N[9]).ahKIJO) };
        const Text = tmp(tmp2[7]).Text;
        intl = tmp(tmp2[8]).intl;
        const tmp18 = closure_7(Text, obj5);
        cResult[8] = tmp18;
        tmp17 = tmp18;
      } else {
        class P {
          constructor() {
            const obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS };
            navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
          }
        }
      }
      if (cResult[9] !== tmp13) {
        class P {
          constructor() {
            const obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS };
            navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
          }
        }
        const obj6 = {
          openSettingsHook(children, id) {
            const obj = { variant: "text-sm/medium", color: "text-link", onPress: N, children };
            return metroImportDefault(Text_Text.Text, obj, id);
          },
        };
        cResult[9] = tmp13;
        cResult[10] = obj7.format(navigation(N[9]).X9rW0j, obj6);
        const formatResult = obj7.format(navigation(N[9]).X9rW0j, obj6);
      } else {
        class P {
          constructor() {
            const obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS };
            navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
          }
        }
      }
      if (cResult[11] !== tmp19) {
        class P {
          constructor() {
            const obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS };
            navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
          }
        }
        const obj8 = { variant: "text-sm/medium", color: "text-muted", children: tmp19 };
        cResult[11] = tmp19;
        cResult[12] = closure_7(activeLinkUserIds(N[7]).Text, obj8);
        const tmp22 = closure_7(activeLinkUserIds(N[7]).Text, obj8);
      } else {
        class P {
          constructor() {
            const obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS };
            navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
          }
        }
      }
      if (cResult[13] === tmp4.controlledSettingsHeader) {
        let tmp27;
        class P {
          constructor() {
            const obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS };
            navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
          }
        }
        const controlsGroup = tmp4.controlsGroup;
        if (cResult[16] !== spendingLimitFromUserSettings) {
          class P {
            constructor() {
              const obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS };
              navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
            }
          }
          const obj9 = { cap: spendingLimitFromUserSettings };
          cResult[16] = spendingLimitFromUserSettings;
          cResult[17] = closure_7(closure_11, obj9);
          const tmp26 = closure_7(closure_11, obj9);
        } else {
          class P {
            constructor() {
              const obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS };
              navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
            }
          }
        }
        const _Symbol = Symbol;
        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
          class P {
            constructor() {
              const obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS };
              navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
            }
          }
          const stringResult = obj12.string(navigation(N[9])["1Op+NP"]);
          cResult[18] = stringResult;
          tmp27 = stringResult;
        } else {
          class P {
            constructor() {
              const obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS };
              navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
            }
          }
        }
        if (arr.length > 0) {
          class P {
            constructor() {
              const obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS };
              navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
            }
          }
        }
        if (cResult[19] === subLabel) {
          class P {
            constructor() {
              const obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS };
              navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
            }
          }
        }
        const obj10 = { label: tmp27, subLabel, trailing, onPress: undefined, arrow: arr.length > 0 };
        cResult[19] = subLabel;
        cResult[20] = undefined;
        cResult[21] = arr.length > 0;
        cResult[22] = trailing;
        cResult[23] = closure_7(activeLinkUserIds(N[16]).TableRow, obj10);
        const tmp33 = closure_7(activeLinkUserIds(N[16]).TableRow, obj10);
      }
      const obj11 = { style: controlledSettingsHeader, children: items };
      items = [tmp17, tmp21];
      cResult[13] = tmp4.controlledSettingsHeader;
      cResult[14] = tmp21;
      cResult[15] = closure_8(activeLinkUserIds(N[23]).Stack, obj11);
      closure_8(activeLinkUserIds(N[23]).Stack, obj11);
    }
  : () => {
      let TableRowGroup;
      let activeLinkUserIds;
      let fn;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items;
      let items1;
      let obj11;
      let obj13;
      let obj8;
      let subLabel;
      let trailing;
      function handleOpenSettings() {
        navigation.navigate(UserSettingsSections.CONTENT_AND_SOCIAL);
      }
      const tmp = closure_9();
      let obj = activeLinkUserIds(handleOpenSettings[17]);
      activeLinkUserIds = obj.useActiveLinkUserIds();
      let obj2 = activeLinkUserIds(handleOpenSettings[18]);
      const selectedTeenUser = obj2.useSelectedTeenUser();
      let obj3 = activeLinkUserIds(handleOpenSettings[19]);
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
      const tmp2Result = activeLinkUserIds(handleOpenSettings[15]);
      const spendingLimitFromUserSettings = tmp2Result.useSpendingLimitFromUserSettings();
      ({ subLabel, trailing } = require("useScheduleTimeControlsRowProps")(rules));
      const obj4 = { style: tmp.teenControlsContainer, children: items1 };
      require("useScheduleTimeControlsRowProps")(rules);
      const Stack = tmp2(tmp3[23]).Stack;
      const obj5 = { style: tmp.controlledSettingsHeader, children: items };
      const Stack2 = tmp2(tmp3[23]).Stack;
      const obj6 = {
        variant: "text-sm/semibold",
        children: intl.string(require("../FamilyCenter.messages.js").ahKIJO),
      };
      const Text = tmp2(tmp3[7]).Text;
      intl = tmp2(tmp3[8]).intl;
      items = [closure_7(Text, obj6)];
      const obj7 = {
        variant: "text-sm/medium",
        color: "text-muted",
        children: intl2.format(require("../FamilyCenter.messages.js").X9rW0j, obj8),
      };
      const Text2 = tmp2(tmp3[7]).Text;
      intl2 = tmp2(tmp3[8]).intl;
      obj8 = {
        openSettingsHook(children, id) {
          const obj = { variant: "text-sm/medium", color: "text-link", onPress: handleOpenSettings, children };
          return metroImportDefault(Text_Text.Text, obj, id);
        },
      };
      items[1] = closure_7(Text2, obj7);
      items1 = [closure_8(Stack2, obj5), ,];
      const obj9 = { style: tmp.controlsGroup, children: closure_8(TableRowGroup, obj11) };
      TableRowGroup = tmp2(tmp3[24]).TableRowGroup;
      const items2 = [closure_7(closure_11, { cap: spendingLimitFromUserSettings })];
      const obj10 = {
        label: intl3.string(require("../FamilyCenter.messages.js")["1Op+NP"]),
        subLabel,
        trailing,
        onPress: fn,
        arrow: rules.length > 0,
      };
      const TableRow = tmp2(tmp3[16]).TableRow;
      intl3 = tmp2(tmp3[8]).intl;
      fn = undefined;
      const tmp6 = importDefault;
      if (rules.length > 0) {
        fn = () => {
          const obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS };
          navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
        };
      }
      obj11 = { hasIcons: false, children: items2 };
      items2[1] = closure_7(TableRow, obj10);
      items1[1] = closure_7(View, obj9);
      const obj12 = {
        text: intl4.formatToPlainString(tmp6(handleOpenSettings[9]).w0JA3P, obj13),
        onPress() {
          const obj = LayerActionCreators;
          obj.popLayer();
          const obj2 = ChannelActionCreatorsDefault;
          const obj3 = { recipientIds: activeLinkUserIds };
          obj2.openPrivateChannel(obj3);
        },
        shrink: true,
        grow: false,
        variant: "secondary",
        size: "sm",
      };
      const Button = tmp2(tmp3[25]).Button;
      intl4 = tmp2(tmp3[8]).intl;
      obj13 = { count: activeLinkUserIds.length };
      items1[2] = closure_7(Button, obj12);
      return closure_8(Stack, obj4);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let arr;
      let selectedTeenUser;
      let tmp2 = navigation;
      let obj = selectedTeenUser(navigation[14]);
      const cResult = obj.c(41);
      closure_9();
      const obj2 = selectedTeenUser(navigation[18]);
      const tmp = selectedTeenUser;
      selectedTeenUser = obj2.useSelectedTeenUser();
      const obj3 = selectedTeenUser(navigation[18]);
      const shouldLoadSettingsForSelectedTeenUser = obj3.useShouldLoadSettingsForSelectedTeenUser();
      const obj4 = selectedTeenUser(navigation[19]);
      navigation = obj4.useNavigation();
      let rules;
      const first = cResult[0];
      if (selectedTeenUser != null) {
        const restrictedSchedule = selectedTeenUser.restrictedSchedule;
        if (restrictedSchedule != null) {
          rules = restrictedSchedule.rules;
        }
      }
      if (first !== rules) {
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
        arr = rules1;
      } else {
        arr = cResult[1];
      }
      const ParentalControlledSpendingLimit = tmp(tmp2[26]).ParentalControlledSpendingLimit;
      let id;
      const useControlledSetting = ParentalControlledSpendingLimit.useControlledSetting;
      if (selectedTeenUser != null) {
        id = selectedTeenUser.id;
      }
      const controlledSetting = useControlledSetting(id);
      if (cResult[2] === selectedTeenUser) {
        let tmp13;
        if (cResult[3] === shouldLoadSettingsForSelectedTeenUser) {
          tmp13 = cResult[4];
        }
        let id1;
        if (selectedTeenUser != null) {
          id1 = selectedTeenUser.id;
        }
        if (cResult[5] === shouldLoadSettingsForSelectedTeenUser) {
          let tmp15;
          let tmp18;
          if (cResult[6] === id1) {
            tmp15 = cResult[7];
          }
          const effect = arr.useEffect(tmp13, tmp15);
          if (cResult[8] !== navigation) {
            class P {
              constructor(selectedSubPage) {
                const obj = { selectedSubPage };
                navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
              }
            }
            cResult[8] = navigation;
            cResult[9] = P;
            tmp18 = P;
          } else {
            class P {
              constructor(selectedSubPage) {
                const obj = { selectedSubPage };
                navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
              }
            }
          }
          P = tmp18;
          if (cResult[10] === navigation) {
            class P {
              constructor(selectedSubPage) {
                const obj = { selectedSubPage };
                navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
              }
            }
          }
          cResult[10] = navigation;
          cResult[11] = arr.length;
          if (selectedTeenUser != null) {
            class P {
              constructor(selectedSubPage) {
                const obj = { selectedSubPage };
                navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
              }
            }
          }
          const fn2 = function f() {
            let tmp2;
            const obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS, autoOpenCreate: tmp2 };
            tmp2 = 0 === arr.length;
            const navigate = navigation.navigate;
            const FAMILY_CENTER_PARENTAL_CONTROLS = UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS;
            if (tmp2) {
              let id;
              if (selectedTeenUser != null) {
                id = selectedTeenUser.id;
              }
              tmp2 = null != id;
            }
            navigate(FAMILY_CENTER_PARENTAL_CONTROLS, obj);
          };
          cResult[12] = undefined;
          cResult[13] = fn2;
        }
        const items = [id1, shouldLoadSettingsForSelectedTeenUser];
        cResult[5] = shouldLoadSettingsForSelectedTeenUser;
        cResult[6] = id1;
        cResult[7] = items;
        tmp15 = items;
      }
      const fn = function _() {
        let id;
        if (selectedTeenUser != null) {
          id = selectedTeenUser.id;
        }
        const tmp3 = null != id && shouldLoadSettingsForSelectedTeenUser;
        if (tmp3) {
          const obj = FamilyCenterActionCreatorsDefault;
          const teenSettingsAndConsents = obj.fetchTeenSettingsAndConsents(selectedTeenUser.id);
        }
      };
      cResult[2] = selectedTeenUser;
      cResult[3] = shouldLoadSettingsForSelectedTeenUser;
      cResult[4] = fn;
      tmp13 = fn;
    }
  : () => {
      let TableRowGroup;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let items1;
      let items2;
      let selectedTeenUser;
      let subLabel;
      let trailing;
      const tmp = closure_9();
      let tmp2 = selectedTeenUser;
      let tmp3 = dependencyMap;
      let obj = selectedTeenUser(14717);
      selectedTeenUser = obj.useSelectedTeenUser();
      const obj2 = selectedTeenUser(14717);
      const shouldLoadSettingsForSelectedTeenUser = obj2.useShouldLoadSettingsForSelectedTeenUser();
      const obj3 = selectedTeenUser(1490);
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
      const ParentalControlledSpendingLimit = tmp2(14642).ParentalControlledSpendingLimit;
      let id;
      const useControlledSetting = ParentalControlledSpendingLimit.useControlledSetting;
      if (selectedTeenUser != null) {
        id = selectedTeenUser.id;
      }
      let id1;
      const controlledSetting = useControlledSetting(id);
      const useEffect = rules.useEffect;
      if (selectedTeenUser != null) {
        id1 = selectedTeenUser.id;
      }
      const items = [id1, shouldLoadSettingsForSelectedTeenUser];
      const effect = useEffect(() => {
        let id;
        if (selectedTeenUser != null) {
          id = selectedTeenUser.id;
        }
        const tmp3 = null != id && shouldLoadSettingsForSelectedTeenUser;
        if (tmp3) {
          const obj = FamilyCenterActionCreatorsDefault;
          const teenSettingsAndConsents = obj.fetchTeenSettingsAndConsents(selectedTeenUser.id);
        }
      }, items);
      ({ subLabel, trailing } = shouldLoadSettingsForSelectedTeenUser(14734)(rules));
      const obj4 = { style: tmp.parentalControlsContainer, children: items1 };
      shouldLoadSettingsForSelectedTeenUser(14734)(rules);
      const Stack = tmp2(5600).Stack;
      const obj5 = {
        variant: "text-sm/semibold",
        children: intl.string(shouldLoadSettingsForSelectedTeenUser(2521).ahKIJO),
      };
      const Text = tmp2(4892).Text;
      intl = tmp2(1126).intl;
      items1 = [closure_7(Text, obj5), ,];
      const obj6 = {
        variant: "text-sm/medium",
        color: "text-muted",
        children: intl2.string(shouldLoadSettingsForSelectedTeenUser(2521).Sv236e),
      };
      const Text2 = tmp2(4892).Text;
      intl2 = tmp2(1126).intl;
      items1[1] = closure_7(Text2, obj6);
      const obj7 = {
        style: tmp.controlsGroup,
        children: closure_8(TableRowGroup, { hasIcons: false, children: items2 }),
      };
      TableRowGroup = tmp2(6081).TableRowGroup;
      const obj8 = {
        label: intl3.string(tmp2(1126).t["+o1pDZ"]),
        onPress() {
          const obj = { selectedSubPage: FamilyCenterSubPages.CONTENT_AND_SOCIAL };
          navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
        },
        arrow: true,
      };
      const TableRow = tmp2(6000).TableRow;
      intl3 = tmp2(1126).intl;
      items2 = [closure_7(TableRow, obj8), , ,];
      const obj9 = {
        label: intl4.string(tmp2(1126).t.OAuOHD),
        onPress() {
          const obj = { selectedSubPage: FamilyCenterSubPages.DATA_AND_PRIVACY };
          navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
        },
        arrow: true,
      };
      const TableRow2 = tmp2(6000).TableRow;
      intl4 = tmp2(1126).intl;
      items2[1] = closure_7(TableRow2, obj9);
      let id2;
      const tmp11 = shouldLoadSettingsForSelectedTeenUser;
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
        const obj11 = {
          label: intl5.string(tmp11(2521)["1Op+NP"]),
          subLabel,
          trailing,
          onPress() {
            let tmp2;
            const obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS, autoOpenCreate: tmp2 };
            tmp2 = 0 === rules.length;
            const navigate = navigation.navigate;
            const FAMILY_CENTER_PARENTAL_CONTROLS = UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS;
            if (tmp2) {
              let id;
              if (selectedTeenUser != null) {
                id = selectedTeenUser.id;
              }
              tmp2 = null != id;
            }
            navigate(FAMILY_CENTER_PARENTAL_CONTROLS, obj);
          },
          arrow: true,
        };
        const TableRow3 = tmp2(6000).TableRow;
        intl5 = tmp2(1126).intl;
        tmp14Result2 = closure_7(TableRow3, obj11);
      }
      items2[3] = tmp14Result2;
      items1[2] = closure_7(View, obj7);
      return closure_8(Stack, obj4);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = react2;
      const cResult = obj.c(2);
      const tmp2 = useUserIsTeenAgeGroupDefault();
      let tmp3 = null;
      const obj2 = useUserLinks;
      if (0 !== obj2.useActiveLinkUserIds().length) {
        let tmp4;
        if (cResult[0] !== tmp2) {
          const obj3 = { children: metroImportDefault(tmp2 ? closure_12 : closure_13, {}) };
          const tmp5Result = metroImportDefault(View, obj3);
          cResult[0] = tmp2;
          cResult[1] = tmp5Result;
          tmp4 = tmp5Result;
        } else {
          tmp4 = cResult[1];
        }
        tmp3 = tmp4;
      }
      return tmp3;
    }
  : () => {
      let tmp3Result = null;
      const tmp = useUserIsTeenAgeGroupDefault();
      const obj = useUserLinks;
      if (0 !== obj.useActiveLinkUserIds().length) {
        const obj2 = { children: metroImportDefault(tmp ? closure_12 : closure_13, {}) };
        tmp3Result = metroImportDefault(View, obj2);
      }
      return tmp3Result;
    };
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterSettingsControls.tsx");

export default tmp4;
