// discord_app/modules/parent_tools/native/FamilyCenterSettingsControls.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01999_asyncRequireImpl.js";
import _modDef2565 from "../FamilyCenter.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import ChannelActionCreatorsDefault from "../../../actions/ChannelActionCreators.tsx";
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
    const obj3 = { variant: "text-sm/normal", color: "text-muted", children: intl4.string(_modDef2565.YEnpaj) };
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
      children: intl3.string(_modDef2565.Q2msVQ),
    };
    obj9.subLabel = React5(Text_Text.Text, obj11);
    return obj9;
  } else if ("blocked" === kind) {
    const obj = { trailing: null, subLabel: null };
    const intl = util.intl;
    const obj12 = { variant: "text-sm/normal", color: "text-muted", children: intl.string(_modDef2565.kGFuGn) };
    obj.trailing = React5(Text_Text.Text, obj12);
    const intl2 = util.intl;
    const stringResult2 = intl.string(_modDef2565.kGFuGn);
    const obj13 = {
      variant: "text-sm/normal",
      style: subLabelWarning.subLabelCritical,
      children: intl2.string(_modDef2565.FUu2b0),
    };
    obj.subLabel = React5(Text_Text.Text, obj13);
    return obj;
  }
}
const View = fn(17).View;
const FamilyCenterSubPages = fn(7248).FamilyCenterSubPages;
const UserSettingsSections = fn(1085).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5090);
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
  ? function SpendingLimitRow(teenId) {
      const cResult = teenId(576).c(13);
      teenId = teenId.teenId;
      const tmp4 = closure_9();
      const obj = teenId(576);
      const spendingLimitDisplayState = teenId(14994).useSpendingLimitDisplayState(teenId.cap);
      if (cResult[0] === spendingLimitDisplayState) {
        if (cResult[1] === tmp4) {
          let tmp6 = cResult[2];
        }
        ({ trailing, subLabel } = tmp6);
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(_modDef2565.gMeekL);
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
          const tmp18 = closure_7(tmp(6184).TableRow, obj3);
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
            ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14992, dependencyMap.paths), { teenId }, undefined, {
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
      const obj2 = teenId(14994);
    }
  : function SpendingLimitRow(teenId) {
      teenId = teenId.teenId;
      const tmp = closure_9();
      const obj = teenId(14994);
      ({ trailing, subLabel } = getSpendingLimitRowProps(teenId(14994).useSpendingLimitDisplayState(teenId.cap), tmp));
      const obj2 = { label: null, trailing: null, subLabel: null, onPress: null, arrow: null, disabled: null };
      const intl = teenId(1126).intl;
      obj2.label = intl.string(_modDef2565.gMeekL);
      obj2.trailing = trailing;
      obj2.subLabel = subLabel;
      let fn;
      if (null != teenId) {
        fn = () => {
          ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14992, dependencyMap.paths), { teenId }, undefined, {
            animation: "slide_from_right",
          });
        };
      }
      obj2.onPress = fn;
      obj2.arrow = null != teenId;
      obj2.disabled = null == teenId;
      return closure_7(teenId(6184).TableRow, obj2);
    };
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function FamilyCenterSettingsTeenControls() {
      const cResult = activeLinkUserIds(576).c(40);
      const tmp4 = closure_9();
      let obj = activeLinkUserIds(576);
      activeLinkUserIds = activeLinkUserIds(7711).useActiveLinkUserIds();
      const obj2 = activeLinkUserIds(7711);
      const selectedTeenUser = activeLinkUserIds(14978).useSelectedTeenUser();
      const obj3 = activeLinkUserIds(14978);
      const navigation = activeLinkUserIds(1502).useNavigation();
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
        let arr2 = rules1;
      } else {
        arr2 = cResult[1];
      }
      const obj4 = activeLinkUserIds(1502);
      const spendingLimitFromUserSettings = activeLinkUserIds(14994).useSpendingLimitFromUserSettings();
      if (cResult[2] !== activeLinkUserIds) {
        function handleMessageParentClick() {
          LayerActionCreators.popLayer();
          ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: activeLinkUserIds });
        }
        cResult[2] = activeLinkUserIds;
        cResult[3] = handleMessageParentClick;
        let tmp10 = handleMessageParentClick;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== navigation) {
        function handleOpenSettings() {
          navigation.navigate(UserSettingsSections.CONTENT_AND_SOCIAL);
        }
        cResult[4] = navigation;
        cResult[5] = handleOpenSettings;
        let tmp11 = handleOpenSettings;
      } else {
        tmp11 = cResult[5];
      }
      dependencyMap = tmp11;
      if (cResult[6] !== navigation) {
        function handleTimeControlsPress() {
          navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, {
            selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS,
          });
        }
        cResult[6] = navigation;
        cResult[7] = handleTimeControlsPress;
        let tmp12 = handleTimeControlsPress;
      } else {
        tmp12 = cResult[7];
      }
      const tmpResult = activeLinkUserIds(14994);
      ({ subLabel, trailing } = navigation(14995)(arr2));
      ({ teenControlsContainer, controlledSettingsHeader } = tmp4);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { variant: "text-sm/semibold", children: null };
        const intl = tmp(1126).intl;
        obj5.children = intl.string(tmp13(2565).ahKIJO);
        const tmp17 = closure_7(tmp(5086).Text, obj5);
        cResult[8] = tmp17;
        let tmp15 = tmp17;
      } else {
        tmp15 = cResult[8];
      }
      if (cResult[9] !== tmp11) {
        const intl2 = tmp(1126).intl;
        const obj6 = {
          openSettingsHook(children, arg1) {
            return React5(Text_Text.Text, { variant: "text-sm/medium", color: "text-link", onPress, children }, arg1);
          },
        };
        const formatResult = intl2.format(tmp13(2565).X9rW0j, obj6);
        cResult[9] = tmp11;
        cResult[10] = formatResult;
        let tmp18 = formatResult;
      } else {
        tmp18 = cResult[10];
      }
      if (cResult[11] !== tmp18) {
        const obj7 = { variant: "text-sm/medium", color: "text-muted", children: tmp18 };
        const tmp22 = closure_7(tmp(5086).Text, obj7);
        cResult[11] = tmp18;
        cResult[12] = tmp22;
        let tmp20 = tmp22;
      } else {
        tmp20 = cResult[12];
      }
      if (cResult[13] === tmp4.controlledSettingsHeader) {
        if (cResult[14] === tmp20) {
          let tmp23 = cResult[15];
        }
        if (cResult[16] !== spendingLimitFromUserSettings) {
          const obj8 = { cap: spendingLimitFromUserSettings };
          const tmp28 = closure_7(closure_11, obj8);
          cResult[16] = spendingLimitFromUserSettings;
          cResult[17] = tmp28;
          let tmp25 = tmp28;
        } else {
          tmp25 = cResult[17];
        }
        const _Symbol = Symbol;
        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1126).intl;
          const stringResult = intl3.string(tmp13(2565)["1Op+NP"]);
          cResult[18] = stringResult;
          let tmp29 = stringResult;
        } else {
          tmp29 = cResult[18];
        }
        let tmp31;
        if (arr2.length > 0) {
          tmp31 = tmp12;
        }
        if (cResult[19] === subLabel) {
          if (cResult[20] === tmp31) {
            if (cResult[21] === tmp32) {
              if (cResult[22] === trailing) {
                let tmp33 = cResult[23];
              }
              if (cResult[24] === tmp25) {
                if (cResult[25] === tmp33) {
                  let tmp36 = cResult[26];
                }
                if (cResult[27] === tmp4.controlsGroup) {
                  if (cResult[28] === tmp36) {
                    let tmp39 = cResult[29];
                  }
                  if (cResult[30] !== activeLinkUserIds.length) {
                    const intl4 = tmp(1126).intl;
                    const obj9 = { count: activeLinkUserIds.length };
                    const formatToPlainStringResult = intl4.formatToPlainString(tmp13(2565).w0JA3P, obj9);
                    cResult[30] = activeLinkUserIds.length;
                    cResult[31] = formatToPlainStringResult;
                    let tmp43 = formatToPlainStringResult;
                  } else {
                    tmp43 = cResult[31];
                  }
                  if (cResult[32] === tmp10) {
                    if (cResult[33] === tmp43) {
                      let tmp45 = cResult[34];
                    }
                    if (cResult[35] === tmp4.teenControlsContainer) {
                      if (cResult[36] === tmp39) {
                        if (cResult[37] === tmp45) {
                          if (cResult[38] === tmp23) {
                            let tmp48 = cResult[39];
                          }
                          return tmp48;
                        }
                      }
                    }
                    const obj10 = { style: teenControlsContainer, children: null };
                    const items = [tmp23, tmp39, tmp45];
                    obj10.children = items;
                    const tmp50 = closure_8(tmp(5373).Stack, obj10);
                    cResult[35] = tmp4.teenControlsContainer;
                    cResult[36] = tmp39;
                    cResult[37] = tmp45;
                    cResult[38] = tmp23;
                    cResult[39] = tmp50;
                    tmp48 = tmp50;
                  }
                  const obj11 = {
                    text: tmp43,
                    onPress: tmp10,
                    shrink: true,
                    grow: false,
                    variant: "secondary",
                    size: "sm",
                  };
                  const tmp47 = closure_7(tmp(5375).Button, obj11);
                  cResult[32] = tmp10;
                  cResult[33] = tmp43;
                  cResult[34] = tmp47;
                  tmp45 = tmp47;
                }
                const obj12 = { style: tmp4.controlsGroup, children: tmp36 };
                const tmp42 = closure_7(View, obj12);
                cResult[27] = tmp4.controlsGroup;
                cResult[28] = tmp36;
                cResult[29] = tmp42;
                tmp39 = tmp42;
              }
              const obj13 = { hasIcons: false, children: null };
              const items1 = [tmp25, tmp33];
              obj13.children = items1;
              const tmp38 = closure_8(tmp(6267).TableRowGroup, obj13);
              cResult[24] = tmp25;
              cResult[25] = tmp33;
              cResult[26] = tmp38;
              tmp36 = tmp38;
            }
          }
        }
        const obj14 = { label: tmp29, subLabel, trailing, onPress: tmp31, arrow: arr2.length > 0 };
        const tmp35 = closure_7(tmp(6184).TableRow, obj14);
        cResult[19] = subLabel;
        cResult[20] = tmp31;
        cResult[21] = arr2.length > 0;
        cResult[22] = trailing;
        cResult[23] = tmp35;
        tmp33 = tmp35;
      }
      const obj15 = { style: controlledSettingsHeader, children: null };
      const items2 = [tmp15, tmp20];
      obj15.children = items2;
      const tmp24 = closure_8(activeLinkUserIds(5373).Stack, obj15);
      cResult[13] = tmp4.controlledSettingsHeader;
      cResult[14] = tmp20;
      cResult[15] = tmp24;
      tmp23 = tmp24;
      const tmp14 = navigation(14995)(arr2);
    }
  : function FamilyCenterSettingsTeenControls() {
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
      let handleTimeControlsPress;
      if (rules.length > 0) {
        handleTimeControlsPress = function handleTimeControlsPress() {
          navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, {
            selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS,
          });
        };
      }
      const obj11 = { hasIcons: false, children: null };
      obj10.onPress = handleTimeControlsPress;
      obj10.arrow = rules.length > 0;
      items2[1] = closure_7(activeLinkUserIds(handleOpenSettings[16]).TableRow, obj10);
      obj11.children = items2;
      obj9.children = closure_8(activeLinkUserIds(handleOpenSettings[24]).TableRowGroup, obj11);
      items1[1] = closure_7(View, obj9);
      const obj12 = { text: null, onPress: null, shrink: true, grow: false, variant: "secondary", size: "sm" };
      const intl4 = tmp2(tmp3[8]).intl;
      obj12.text = intl4.formatToPlainString(tmp6(handleOpenSettings[9]).w0JA3P, { count: activeLinkUserIds.length });
      obj12.onPress = function handleMessageParentClick() {
        LayerActionCreators.popLayer();
        ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: activeLinkUserIds });
      };
      items1[2] = closure_7(activeLinkUserIds(handleOpenSettings[25]).Button, obj12);
      obj4.children = items1;
      return closure_8(activeLinkUserIds(handleOpenSettings[23]).Stack, obj4);
    };
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function FamilyCenterSettingsParentalControls() {
      const cResult = selectedTeenUser(navigation[14]).c(41);
      const tmp4 = closure_9();
      let obj = selectedTeenUser(navigation[14]);
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
            function handleSettingsClick(selectedSubPage) {
              navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, { selectedSubPage });
            }
            cResult[8] = navigation;
            cResult[9] = handleSettingsClick;
            let tmp17 = handleSettingsClick;
          } else {
            tmp17 = cResult[9];
          }
          closure_4 = tmp17;
          if (cResult[10] === navigation) {
            if (cResult[11] === arr.length) {
              let id2;
              if (selectedTeenUser != null) {
                id2 = selectedTeenUser.id;
              }
              if (cResult[12] === id2) {
                let tmp19 = cResult[13];
              }
              ({ subLabel, trailing } = shouldLoadSettingsForSelectedTeenUser(tmp2[22])(arr));
              const _Symbol = Symbol;
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                const obj5 = { variant: "text-sm/semibold", children: null };
                const intl = tmp(tmp2[8]).intl;
                obj5.children = intl.string(tmp21(tmp2[9]).ahKIJO);
                const tmp26 = closure_7(tmp(tmp2[7]).Text, obj5);
                cResult[14] = tmp26;
                let tmp24 = tmp26;
              } else {
                tmp24 = cResult[14];
              }
              const _Symbol2 = Symbol;
              if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                const obj6 = { variant: "text-sm/medium", color: "text-muted", children: null };
                const intl2 = tmp(tmp2[8]).intl;
                obj6.children = intl2.string(tmp21(tmp2[9]).Sv236e);
                const tmp29 = closure_7(tmp(tmp2[7]).Text, obj6);
                cResult[15] = tmp29;
                let tmp27 = tmp29;
              } else {
                tmp27 = cResult[15];
              }
              const _Symbol3 = Symbol;
              if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                const intl3 = tmp(tmp2[8]).intl;
                const stringResult = intl3.string(tmp(tmp2[8]).t["+o1pDZ"]);
                cResult[16] = stringResult;
                let tmp30 = stringResult;
              } else {
                tmp30 = cResult[16];
              }
              if (cResult[17] !== tmp17) {
                const obj7 = {
                  label: tmp30,
                  onPress() {
                    return closure_4(FamilyCenterSubPages.CONTENT_AND_SOCIAL);
                  },
                  arrow: true,
                };
                const tmp34 = closure_7(tmp(tmp2[16]).TableRow, obj7);
                cResult[17] = tmp17;
                cResult[18] = tmp34;
                let tmp32 = tmp34;
              } else {
                tmp32 = cResult[18];
              }
              const _Symbol4 = Symbol;
              if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                const intl4 = tmp(tmp2[8]).intl;
                const stringResult1 = intl4.string(tmp(tmp2[8]).t.OAuOHD);
                cResult[19] = stringResult1;
                let tmp35 = stringResult1;
              } else {
                tmp35 = cResult[19];
              }
              if (cResult[20] !== tmp17) {
                const obj8 = {
                  label: tmp35,
                  onPress() {
                    return closure_4(FamilyCenterSubPages.DATA_AND_PRIVACY);
                  },
                  arrow: true,
                };
                const tmp39 = closure_7(tmp(tmp2[16]).TableRow, obj8);
                cResult[20] = tmp17;
                cResult[21] = tmp39;
                let tmp37 = tmp39;
              } else {
                tmp37 = cResult[21];
              }
              if (cResult[22] === controlledSetting) {
                if (cResult[23] === selectedTeenUser) {
                  let tmp40 = cResult[24];
                }
                if (cResult[25] === tmp19) {
                  if (cResult[26] === subLabel) {
                    if (cResult[27] === trailing) {
                      let id3;
                      if (selectedTeenUser != null) {
                        id3 = selectedTeenUser.id;
                      }
                      if (cResult[28] === id3) {
                        let tmp46 = cResult[29];
                      }
                      if (cResult[30] === tmp32) {
                        if (cResult[31] === tmp37) {
                          if (cResult[32] === tmp40) {
                            if (cResult[33] === tmp46) {
                              let tmp51 = cResult[34];
                            }
                            if (cResult[35] === tmp4.controlsGroup) {
                              if (cResult[36] === tmp51) {
                                let tmp54 = cResult[37];
                              }
                              if (cResult[38] === tmp4.parentalControlsContainer) {
                                if (cResult[39] === tmp54) {
                                  let tmp58 = cResult[40];
                                }
                                return tmp58;
                              }
                              const obj9 = { style: tmp4.parentalControlsContainer, children: null };
                              const items = [tmp24, tmp27, tmp54];
                              obj9.children = items;
                              const tmp60 = closure_8(tmp(tmp2[23]).Stack, obj9);
                              cResult[38] = tmp4.parentalControlsContainer;
                              cResult[39] = tmp54;
                              cResult[40] = tmp60;
                              tmp58 = tmp60;
                            }
                            const obj10 = { style: tmp4.controlsGroup, children: tmp51 };
                            const tmp57 = closure_7(closure_4, obj10);
                            cResult[35] = tmp4.controlsGroup;
                            cResult[36] = tmp51;
                            cResult[37] = tmp57;
                            tmp54 = tmp57;
                          }
                        }
                      }
                      const obj11 = { hasIcons: false, children: null };
                      const items1 = [tmp32, tmp37, tmp40, tmp46];
                      obj11.children = items1;
                      const tmp53 = closure_8(tmp(tmp2[24]).TableRowGroup, obj11);
                      cResult[30] = tmp32;
                      cResult[31] = tmp37;
                      cResult[32] = tmp40;
                      cResult[33] = tmp46;
                      cResult[34] = tmp53;
                      tmp51 = tmp53;
                    }
                  }
                }
                let id4;
                if (selectedTeenUser != null) {
                  id4 = selectedTeenUser.id;
                }
                let tmp48 = null != id4;
                if (tmp48) {
                  const obj12 = { label: null, subLabel: null, trailing: null, onPress: null, arrow: true };
                  const intl5 = tmp(tmp2[8]).intl;
                  obj12.label = intl5.string(tmp21(tmp2[9])["1Op+NP"]);
                  obj12.subLabel = subLabel;
                  obj12.trailing = trailing;
                  obj12.onPress = tmp19;
                  tmp48 = closure_7(tmp(tmp2[16]).TableRow, obj12);
                }
                cResult[25] = tmp19;
                cResult[26] = subLabel;
                cResult[27] = trailing;
                let id5;
                if (selectedTeenUser != null) {
                  id5 = selectedTeenUser.id;
                }
                cResult[28] = id5;
                cResult[29] = tmp48;
                tmp46 = tmp48;
              }
              let id6;
              if (selectedTeenUser != null) {
                id6 = selectedTeenUser.id;
              }
              let tmp42 = null != id6;
              if (tmp42) {
                const obj13 = { cap: controlledSetting, teenId: selectedTeenUser.id };
                tmp42 = closure_7(closure_11, obj13);
              }
              cResult[22] = controlledSetting;
              cResult[23] = selectedTeenUser;
              cResult[24] = tmp42;
              tmp40 = tmp42;
              const tmp22 = shouldLoadSettingsForSelectedTeenUser(tmp2[22])(arr);
            }
          }
          cResult[10] = navigation;
          cResult[11] = arr.length;
          let id7;
          if (selectedTeenUser != null) {
            id7 = selectedTeenUser.id;
          }
          function handleScreenTimeControlsPress() {
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
          }
          cResult[12] = id7;
          cResult[13] = handleScreenTimeControlsPress;
          tmp19 = handleScreenTimeControlsPress;
        }
        const items2 = [id1, shouldLoadSettingsForSelectedTeenUser];
        cResult[5] = shouldLoadSettingsForSelectedTeenUser;
        cResult[6] = id1;
        cResult[7] = items2;
        tmp14 = items2;
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
      const obj4 = selectedTeenUser(navigation[19]);
    }
  : function FamilyCenterSettingsParentalControls() {
      const tmp = closure_9();
      selectedTeenUser = selectedTeenUser(14978).useSelectedTeenUser();
      let obj = selectedTeenUser(14978);
      const shouldLoadSettingsForSelectedTeenUser = selectedTeenUser(14978).useShouldLoadSettingsForSelectedTeenUser();
      const obj2 = selectedTeenUser(14978);
      dependencyMap = selectedTeenUser(1502).useNavigation();
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
      const ParentalControlledSpendingLimit = tmp2(14903).ParentalControlledSpendingLimit;
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
      const obj3 = selectedTeenUser(1502);
      const tmp11 = shouldLoadSettingsForSelectedTeenUser;
      ({ subLabel, trailing } = shouldLoadSettingsForSelectedTeenUser(14995)(rules));
      const obj4 = { style: tmp.parentalControlsContainer, children: null };
      const obj5 = { variant: "text-sm/semibold", children: null };
      const intl = tmp2(1126).intl;
      obj5.children = intl.string(shouldLoadSettingsForSelectedTeenUser(2565).ahKIJO);
      const items1 = [closure_7(selectedTeenUser(5086).Text, obj5), ,];
      const obj6 = { variant: "text-sm/medium", color: "text-muted", children: null };
      const intl2 = tmp2(1126).intl;
      obj6.children = intl2.string(shouldLoadSettingsForSelectedTeenUser(2565).Sv236e);
      items1[1] = closure_7(selectedTeenUser(5086).Text, obj6);
      const obj7 = { style: tmp.controlsGroup, children: null };
      const obj8 = { label: null, onPress: null, arrow: true };
      const intl3 = tmp2(1126).intl;
      obj8.label = intl3.string(selectedTeenUser(1126).t["+o1pDZ"]);
      obj8.onPress = function onPress() {
        navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, {
          selectedSubPage: FamilyCenterSubPages.CONTENT_AND_SOCIAL,
        });
      };
      const items2 = [closure_7(selectedTeenUser(6184).TableRow, obj8), , ,];
      const obj9 = { label: null, onPress: null, arrow: true };
      const intl4 = tmp2(1126).intl;
      obj9.label = intl4.string(selectedTeenUser(1126).t.OAuOHD);
      obj9.onPress = function onPress() {
        navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, {
          selectedSubPage: FamilyCenterSubPages.DATA_AND_PRIVACY,
        });
      };
      items2[1] = closure_7(selectedTeenUser(6184).TableRow, obj9);
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
        obj11.label = intl5.string(tmp11(2565)["1Op+NP"]);
        obj11.subLabel = subLabel;
        obj11.trailing = trailing;
        obj11.onPress = function handleScreenTimeControlsPress() {
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
        tmp14Result2 = closure_7(tmp2(6184).TableRow, obj11);
      }
      items2[3] = tmp14Result2;
      obj7.children = closure_8(selectedTeenUser(6267).TableRowGroup, { hasIcons: false, children: items2 });
      items1[2] = closure_7(View, obj7);
      obj4.children = items1;
      return closure_8(selectedTeenUser(5373).Stack, obj4);
    };
ReactCompilerGating = fn(558);
let obj8 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterSettingsControls.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FamilyCenterSettingsControls() {
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
  : function FamilyCenterSettingsControls() {
      const tmp = useUserIsTeenAgeGroupDefault();
      if (0 === obj.useActiveLinkUserIds().length) {
        return null;
      } else {
        const obj2 = { children: React5(tmp ? closure_12 : closure_13, {}) };
        React5(View, obj2);
      }
      obj = useUserLinks;
    };
