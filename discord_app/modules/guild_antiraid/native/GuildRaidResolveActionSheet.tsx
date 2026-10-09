// discord_app/modules/guild_antiraid/native/GuildRaidResolveActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import KeyboardAwareViewDefault from "../../keyboard/native/KeyboardAwareView.tsx";
import ActionSheet2 from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import SafetyToastsActionCreatorsDefault from "../../safety_common/SafetyToastsActionCreators.native.tsx";
import AutomodFeedback from "../../guild_automod/AutomodFeedback.tsx";
import GuildAntiRaidActionCreators from "../GuildAntiRaidActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1085).AnalyticEvents;
const SafetyToastType = fn(7018).SafetyToastType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  container: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: { marginBottom: 8, textAlign: "center" },
  subtitle: { marginBottom: 16, textAlign: "center" },
  optionContainer: {
    borderColor: nativeDefault.colors.BORDER_SUBTLE,
    borderWidth: 1,
    borderRadius: nativeDefault.radii.xs,
    display: "flex",
    flexDirection: "column",
    marginBottom: 14,
    width: "100%",
  },
  option: { width: "100%" },
  textInputContainer: { paddingLeft: 54, paddingRight: 16, paddingBottom: 16 },
  textInput: null,
};
let obj3 = {
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderWidth: 1,
  borderRadius: nativeDefault.radii.xs,
  display: "flex",
  flexDirection: "column",
  marginBottom: 14,
  width: "100%",
};
obj2.textInput = {
  backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
  width: "100%",
  padding: 8,
  borderRadius: nativeDefault.radii.xs,
};
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = {
  backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
  width: "100%",
  padding: 8,
  borderRadius: nativeDefault.radii.xs,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_antiraid/native/GuildRaidResolveActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildRaidResolveActionSheet(guildId) {
      const cResult = guildId(title[9]).c(49);
      guildId = guildId.guildId;
      textInputContainer = guildId.messageId;
      title = closure_10();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      let num2 = 2;
      [first1, closure_5] = first1.useState(first);
      [first2, closure_7] = first1.useState();
      if (cResult[1] === first2) {
        if (cResult[2] === first1) {
          if (cResult[3] === guildId) {
            if (cResult[4] === textInputContainer) {
              if (cResult[5] === title.container) {
                if (cResult[6] === title.option) {
                  if (cResult[7] === title.optionContainer) {
                    if (cResult[8] === title.subtitle) {
                      if (cResult[9] === title.textInput) {
                        if (cResult[10] === title.textInputContainer) {
                          if (cResult[11] === title.title) {
                            _slicedToArray = tmp11;
                            const _Symbol3 = Symbol;
                            if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                              const intl7 = tmp(tmp2[10]).intl;
                              const stringResult = intl7.string(tmp(tmp2[10]).t.Gh3A0O);
                              cResult[32] = stringResult;
                              let tmp40 = stringResult;
                            } else {
                              tmp40 = cResult[32];
                            }
                            if (cResult[33] !== cResult[15]) {
                              let obj2 = { onPress: tmp12, text: tmp40, size: "md" };
                              const tmp44 = handleTextInputChange(tmp(tmp2[21]).Button, obj2);
                              cResult[33] = tmp12;
                              cResult[34] = tmp44;
                              let tmp42 = tmp44;
                            } else {
                              tmp42 = cResult[34];
                            }
                            const _Symbol4 = Symbol;
                            if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                              const intl8 = tmp(tmp2[10]).intl;
                              const stringResult1 = intl8.string(tmp(tmp2[10]).t["ETE/oC"]);
                              cResult[35] = stringResult1;
                              let tmp45 = stringResult1;
                            } else {
                              tmp45 = cResult[35];
                            }
                            if (cResult[36] !== cResult[14]) {
                              let obj3 = { onPress: tmp11, text: tmp45, variant: "secondary", size: "md" };
                              const tmp49 = handleTextInputChange(tmp(tmp2[21]).Button, obj3);
                              cResult[36] = tmp11;
                              cResult[37] = tmp49;
                              let tmp47 = tmp49;
                            } else {
                              tmp47 = cResult[37];
                            }
                            if (cResult[38] === cResult[12]) {
                              if (cResult[39] === tmp13) {
                                if (cResult[40] === tmp14) {
                                  if (cResult[41] === tmp15) {
                                    if (cResult[42] === tmp16) {
                                      if (cResult[43] === tmp42) {
                                        if (cResult[44] === tmp47) {
                                          let tmp50 = cResult[45];
                                        }
                                        if (cResult[46] === tmp10) {
                                          if (cResult[47] === tmp50) {
                                            let tmp53 = cResult[48];
                                          }
                                          return tmp53;
                                        }
                                        let obj4 = { children: tmp50 };
                                        const tmp55 = handleTextInputChange(tmp10, obj4);
                                        cResult[46] = tmp10;
                                        cResult[47] = tmp50;
                                        cResult[48] = tmp55;
                                        tmp53 = tmp55;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            let obj5 = { style: cResult[16], children: null };
                            const items1 = [cResult[17], cResult[18], cResult[19], tmp42, tmp47];
                            obj5.children = items1;
                            const tmp52 = closure_9(cResult[12], obj5);
                            cResult[38] = cResult[12];
                            cResult[39] = cResult[16];
                            cResult[40] = cResult[17];
                            cResult[41] = cResult[18];
                            cResult[42] = cResult[19];
                            cResult[43] = tmp42;
                            cResult[44] = tmp47;
                            cResult[45] = tmp52;
                            tmp50 = tmp52;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      let obj6 = { text: null, value: null };
      let intl = tmp(tmp2[10]).intl;
      obj6.text = intl.string(guildId(title[10]).t.yeaXw5);
      obj6.value = guildId(title[11]).RaidResolutionType.LEGITIMATE_ACTIVITY;
      const items2 = [obj6, , ,];
      const obj7 = { text: null, value: null };
      const intl2 = tmp(tmp2[10]).intl;
      obj7.text = intl2.string(guildId(title[10]).t["o++3B8"]);
      obj7.value = guildId(title[11]).RaidResolutionType.DM_SPAM;
      items2[1] = obj7;
      const obj8 = { text: null, value: null };
      const intl3 = tmp(tmp2[10]).intl;
      obj8.text = intl3.string(guildId(title[10]).t.UfHAwZ);
      obj8.value = guildId(title[11]).RaidResolutionType.JOIN_RAID;
      items2[2] = obj8;
      const obj9 = { text: null, value: null };
      const intl4 = tmp(tmp2[10]).intl;
      obj9.text = intl4.string(guildId(title[10]).t.K3UWeR);
      obj9.value = guildId(title[11]).RaidResolutionType.OTHER;
      items2[3] = obj9;
      handleTextInputChange = function handleTextInputChange(Button) {
        closure_7(Button);
      };
      if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
        function handleClose() {
          textInputContainer(title[12]).hideActionSheet("GuildRaidResolveActionSheet");
        }
        cResult[20] = handleClose;
        let tmp17 = handleClose;
      } else {
        tmp17 = cResult[20];
      }
      _slicedToArray = tmp17;
      if (cResult[21] === first2) {
        if (cResult[22] === first1) {
          if (cResult[23] === guildId) {
            if (cResult[24] === textInputContainer) {
              let tmp18 = cResult[25];
            }
            const ActionSheet = tmp(tmp2[16]).ActionSheet;
            const tmp20 = textInputContainer(tmp2[17]);
            const container = title.container;
            const _Symbol = Symbol;
            if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
              const intl5 = tmp(tmp2[10]).intl;
              const stringResult2 = intl5.string(tmp(tmp2[10]).t["1zmw/H"]);
              cResult[26] = stringResult2;
              let tmp21 = stringResult2;
            } else {
              tmp21 = cResult[26];
            }
            if (cResult[27] !== title.title) {
              const obj10 = {
                style: title.title,
                variant: "heading-xl/bold",
                color: "mobile-text-heading-primary",
                children: tmp21,
              };
              const tmp25 = handleTextInputChange(tmp(tmp2[18]).Text, obj10);
              cResult[27] = title.title;
              cResult[28] = tmp25;
              let tmp23 = tmp25;
            } else {
              tmp23 = cResult[28];
            }
            const _Symbol2 = Symbol;
            if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
              const intl6 = tmp(tmp2[10]).intl;
              const stringResult3 = intl6.string(tmp(tmp2[10]).t.nF79oO);
              cResult[29] = stringResult3;
              let tmp26 = stringResult3;
            } else {
              tmp26 = cResult[29];
            }
            if (cResult[30] !== title.subtitle) {
              const obj11 = {
                style: title.subtitle,
                variant: "text-sm/normal",
                color: "text-default",
                children: tmp26,
              };
              const tmp30 = handleTextInputChange(tmp(tmp2[18]).Text, obj11);
              cResult[30] = title.subtitle;
              cResult[31] = tmp30;
              let tmp28 = tmp30;
            } else {
              tmp28 = cResult[31];
            }
            const mapped = items2.map((value) => {
              value = value.value;
              guildId = value;
              const obj = { style: title.optionContainer, children: null };
              const obj2 = {
                style: title.option,
                onPress() {
                  closure_0 = value;
                  closure_5(
                    first1.includes(value)
                      ? (arr) => arr.filter((item) => item !== closure_1_0)
                      : (arg0) => {
                          const items = [];
                          items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
                          return items;
                        },
                  );
                },
                leading: handleTextInputChange(guildId(title[20]).Checkbox, { selected: first1.includes(value) }),
                label: value.text,
              };
              let items = [handleTextInputChange(guildId(title[19]).FormRow, obj2)];
              let hasItem = value === guildId(title[11]).RaidResolutionType.OTHER;
              if (hasItem) {
                hasItem = first1.includes(tmp5(title[11]).RaidResolutionType.OTHER);
              }
              if (hasItem) {
                const obj5 = { style: title.textInputContainer, children: null };
                const obj6 = {
                  style: title.textInput,
                  autoComplete: "off",
                  value: first2,
                  placeholder: null,
                  onChangeText: null,
                };
                const intl = tmp5(title[10]).intl;
                obj6.placeholder = intl.string(tmp5(title[10]).t["PAM+JR"]);
                obj6.onChangeText = handleTextInputChange;
                obj5.children = handleTextInputChange(tmp5(title[20]).TextInput, obj6);
                hasItem = handleTextInputChange(closure_5, obj5);
              }
              items[1] = hasItem;
              obj.children = items;
              return closure_1_9(closure_5, obj, value);
            });
            cResult[1] = first2;
            cResult[num2] = first1;
            cResult[3] = guildId;
            cResult[4] = textInputContainer;
            cResult[5] = title.container;
            cResult[6] = title.option;
            cResult[7] = title.optionContainer;
            cResult[8] = title.subtitle;
            ({ textInput: tmp3[9], textInputContainer } = title);
            cResult[10] = textInputContainer;
            title = title.title;
            cResult[11] = title;
            cResult[12] = tmp20;
            cResult[13] = ActionSheet;
            cResult[14] = tmp17;
            cResult[15] = tmp18;
            cResult[16] = container;
            cResult[17] = tmp23;
            cResult[18] = tmp28;
            num2 = 19;
            cResult[19] = mapped;
          }
        }
      }
      function handleSubmit() {
        const obj = {
          raid_alert_type: AutomodFeedback.RaidAlertType.JOIN_RAID,
          raid_alert_id: textInputContainer,
          false_alarm_type: first1.map((item) => item.toString()),
          false_alarm_other_reason: first2,
          guild_id: guildId,
        };
        AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.GUILD_RAID_FEEDBACK, obj);
        const obj3 = GuildAntiRaidActionCreators;
        obj3.handleResolveRaid(guildId, textInputContainer, AutomodFeedback.getMostImportantRaidResolutionType(first1));
        closure_3();
        SafetyToastsActionCreatorsDefault.showSuccessToast(SafetyToastType.SAFETY_FEEDBACK_SUCCESS);
      }
      cResult[21] = first2;
      cResult[22] = first1;
      cResult[23] = guildId;
      cResult[24] = textInputContainer;
      cResult[25] = handleSubmit;
      tmp18 = handleSubmit;
      let obj = guildId(title[9]);
    }
  : function GuildRaidResolveActionSheet(arg0) {
      ({ guildId: require, messageId: importDefault } = arg0);
      _slicedToArray = undefined;
      noop = undefined;
      c5 = undefined;
      c6 = undefined;
      function handleTextInputChange(arg0) {
        _undefined3(arg0);
      }
      const tmp = closure_10();
      dependencyMap = tmp;
      [c3, c4] = noop.useState([]);
      const tmp2 = _slicedToArray(noop.useState([]), 2);
      [c5, c6] = noop.useState();
      let obj = { text: null, value: null };
      let intl = util.intl;
      obj.text = intl.string(util.t.yeaXw5);
      obj.value = AutomodFeedback.RaidResolutionType.LEGITIMATE_ACTIVITY;
      let items = [obj, , ,];
      let obj2 = { text: null, value: null };
      const intl2 = util.intl;
      obj2.text = intl2.string(util.t["o++3B8"]);
      obj2.value = AutomodFeedback.RaidResolutionType.DM_SPAM;
      items[1] = obj2;
      let obj3 = { text: null, value: null };
      const intl3 = util.intl;
      obj3.text = intl3.string(util.t.UfHAwZ);
      obj3.value = AutomodFeedback.RaidResolutionType.JOIN_RAID;
      items[2] = obj3;
      let obj4 = { text: null, value: null };
      const intl4 = util.intl;
      obj4.text = intl4.string(util.t.K3UWeR);
      obj4.value = AutomodFeedback.RaidResolutionType.OTHER;
      items[3] = obj4;
      let obj5 = { children: null };
      let obj6 = { style: tmp.container, children: null };
      const tmp3 = _slicedToArray(noop.useState(), 2);
      const obj7 = {
        style: tmp.title,
        variant: "heading-xl/bold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      const intl5 = util.intl;
      obj7.children = intl5.string(util.t["1zmw/H"]);
      const items1 = [closure_8(Text_Text.Text, obj7), , , ,];
      const obj8 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: null };
      const intl6 = util.intl;
      obj8.children = intl6.string(util.t.nF79oO);
      items1[1] = closure_8(Text_Text.Text, obj8);
      items1[2] = items.map((value) => {
        value = value.value;
        closure_0 = value;
        const obj = { style: closure_2.optionContainer, children: null };
        const obj2 = {
          style: closure_2.option,
          onPress() {
            closure_0 = value;
            c4(
              c3.includes(value)
                ? (arr) => arr.filter((item) => item !== closure_1_0)
                : (arg0) => {
                    const items = [];
                    items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
                    return items;
                  },
            );
          },
          leading: closure_1_8(guild_id(closure_2[20]).Checkbox, { selected: _undefined.includes(value) }),
          label: value.text,
        };
        let items = [closure_1_8(guild_id(closure_2[19]).FormRow, obj2)];
        let hasItem = value === guild_id(closure_2[11]).RaidResolutionType.OTHER;
        if (hasItem) {
          hasItem = _undefined.includes(guild_id(closure_2[11]).RaidResolutionType.OTHER);
        }
        if (hasItem) {
          const obj5 = { style: closure_2.textInputContainer, children: null };
          const obj6 = {
            style: closure_2.textInput,
            autoComplete: "off",
            value: _undefined2,
            placeholder: null,
            onChangeText: null,
          };
          const intl = guild_id(closure_2[10]).intl;
          obj6.placeholder = intl.string(guild_id(closure_2[10]).t["PAM+JR"]);
          obj6.onChangeText = handleTextInputChange;
          obj5.children = closure_1_8(guild_id(closure_2[20]).TextInput, obj6);
          hasItem = closure_1_8(_undefined2, obj5);
        }
        items[1] = hasItem;
        obj.children = items;
        return closure_1_9(_undefined2, obj, value);
      });
      const obj9 = {
        onPress: function handleSubmit() {
          const obj = {
            raid_alert_type: AutomodFeedback.RaidAlertType.JOIN_RAID,
            raid_alert_id,
            false_alarm_type: _undefined.map((item) => item.toString()),
            false_alarm_other_reason: _undefined2,
            guild_id,
          };
          AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.GUILD_RAID_FEEDBACK, obj);
          const obj3 = GuildAntiRaidActionCreators;
          obj3.handleResolveRaid(
            guild_id,
            raid_alert_id,
            AutomodFeedback.getMostImportantRaidResolutionType(_undefined),
          );
          ActionSheetActionCreatorsDefault.hideActionSheet("GuildRaidResolveActionSheet");
          SafetyToastsActionCreatorsDefault.showSuccessToast(SafetyToastType.SAFETY_FEEDBACK_SUCCESS);
        },
        text: null,
        size: "md",
      };
      const intl7 = util.intl;
      obj9.text = intl7.string(util.t.Gh3A0O);
      items1[3] = closure_8(components_Button_Button.Button, obj9);
      const obj10 = {
        onPress: function handleClose() {
          raid_alert_id(closure_2[12]).hideActionSheet("GuildRaidResolveActionSheet");
        },
        text: null,
        variant: "secondary",
        size: "md",
      };
      const intl8 = util.intl;
      obj10.text = intl8.string(util.t["ETE/oC"]);
      items1[4] = closure_8(components_Button_Button.Button, obj10);
      obj6.children = items1;
      obj5.children = closure_9(KeyboardAwareViewDefault, obj6);
      return closure_8(ActionSheet2.ActionSheet, obj5);
    };
