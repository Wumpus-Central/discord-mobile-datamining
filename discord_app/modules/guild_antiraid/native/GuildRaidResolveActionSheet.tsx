// === Module 11472: GuildRaidResolveActionSheet ===

// Module 11472 (GuildRaidResolveActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl9 from "intl" /* 1126 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5070 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import KeyboardAwareViewDefault from "KeyboardAwareView" /* 6537 */;
import ActionSheet2 from "ActionSheet" /* 6701 */;
import AutomodFeedback from "AutomodFeedback" /* 7027 */;
import Constants2 from "Constants" /* 8075 */;
import SafetyToastsActionCreatorsDefault from "SafetyToastsActionCreators" /* 8080 */;
import GuildAntiRaidActionCreators from "GuildAntiRaidActionCreators" /* 11441 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, guildId, handleResolveRaidResult, showSuccessToastResult, trackWithMetadataResult, value;

let c9;
let metroImportAll;
let obj2;
let obj3;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
const SafetyToastType = Constants2.SafetyToastType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { paddingVertical: 24, paddingHorizontal: 16, display: "flex", flexDirection: "column", alignItems: "center" }, title: { marginBottom: 8, textAlign: "center" }, subtitle: { marginBottom: 16, textAlign: "center" }, optionContainer: obj2, option: { width: "100%" }, textInputContainer: { paddingLeft: 54, paddingRight: 16, paddingBottom: 16 }, textInput: obj3 };
obj2 = { borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: nativeDefault.radii.xs, display: "flex", flexDirection: "column", marginBottom: 14, width: "100%" };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, width: "100%", padding: 8, borderRadius: nativeDefault.radii.xs };
let closure_10 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let closure_2;
  let first;
  let first1;
  let handleTextInputChange;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let tmp18;
  let obj = guildId(576);
  const cResult = obj.c(49);
  guildId = guildId.guildId;
  const messageId = guildId.messageId;
  const tmp4 = closure_10();
  dependencyMap = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  const tmp6 = J(first1.useState(first), 2);
  first1 = tmp6[0];
  let closure_5 = tmp6[1];
  const tmp8 = J(first1.useState(), 2);
  const first2 = tmp8[0];
  let closure_7 = tmp8[1];
  if (cResult[1] === first2) {
    if (cResult[2] === first1) {
      if (cResult[3] === guildId) {
        if (cResult[4] === messageId) {
          if (cResult[5] === tmp4.container) {
            if (cResult[6] === tmp4.option) {
              if (cResult[7] === tmp4.optionContainer) {
                if (cResult[8] === tmp4.subtitle) {
                  if (cResult[9] === tmp4.textInput) {
                    if (cResult[10] === tmp4.textInputContainer) {
                      let tmp19;
                      let tmp21;
                      let tmp24;
                      let tmp26;
                      if (cResult[11] === tmp4.title) {
                        J = cResult[14];
                      }
                      const _Symbol = Symbol;
                      if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl5 = tmp(1126).intl;
                        const stringResult = intl5.string(guildId(1126).t.Gh3A0O);
                        cResult[32] = stringResult;
                        tmp19 = stringResult;
                      } else {
                        tmp19 = cResult[32];
                      }
                      if (cResult[33] !== tmp13) {
                        let obj2 = { onPress: tmp13, text: tmp19, size: "md" };
                        const tmp23 = handleTextInputChange(guildId(5594).Button, obj2);
                        cResult[33] = tmp13;
                        cResult[34] = tmp23;
                        tmp21 = tmp23;
                      } else {
                        tmp21 = cResult[34];
                      }
                      const _Symbol2 = Symbol;
                      if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl6 = tmp(1126).intl;
                        const stringResult1 = intl6.string(guildId(1126).t["ETE/oC"]);
                        cResult[35] = stringResult1;
                        tmp24 = stringResult1;
                      } else {
                        tmp24 = cResult[35];
                      }
                      if (cResult[36] !== tmp12) {
                        let obj3 = { onPress: tmp12, text: tmp24, variant: "secondary", size: "md" };
                        const tmp28 = handleTextInputChange(guildId(5594).Button, obj3);
                        cResult[36] = tmp12;
                        cResult[37] = tmp28;
                        tmp26 = tmp28;
                      } else {
                        tmp26 = cResult[37];
                      }
                      if (cResult[38] === tmp10) {
                        if (cResult[39] === tmp14) {
                          if (cResult[40] === tmp15) {
                            if (cResult[41] === tmp16) {
                              if (cResult[42] === tmp17) {
                                if (cResult[43] === tmp21) {
                                  let tmp29;
                                  if (cResult[44] === tmp26) {
                                    tmp29 = cResult[45];
                                  }
                                  if (cResult[46] === tmp11) {
                                    let tmp32;
                                    if (cResult[47] === tmp29) {
                                      tmp32 = cResult[48];
                                    }
                                    return tmp32;
                                  }
                                  let obj4 = { children: tmp29 };
                                  const tmp34 = handleTextInputChange(tmp11, obj4);
                                  cResult[46] = tmp11;
                                  cResult[47] = tmp29;
                                  cResult[48] = tmp34;
                                  tmp32 = tmp34;
                                }
                              }
                            }
                          }
                        }
                      }
                      let obj5 = { style: tmp14, children: items1 };
                      items1 = [tmp15, tmp16, tmp17, tmp21, tmp26];
                      const tmp31 = closure_9(tmp10, obj5);
                      cResult[38] = tmp10;
                      cResult[39] = tmp14;
                      cResult[40] = tmp15;
                      cResult[41] = tmp16;
                      cResult[42] = tmp17;
                      cResult[43] = tmp21;
                      cResult[44] = tmp26;
                      cResult[45] = tmp31;
                      tmp29 = tmp31;
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
  let obj6 = { text: intl.string(tmp(1126).t.yeaXw5), value: tmp(7027).RaidResolutionType.LEGITIMATE_ACTIVITY };
  intl = tmp(1126).intl;
  const items2 = [obj6, , , ];
  const obj7 = { text: intl2.string(guildId(1126).t["o++3B8"]), value: guildId(7027).RaidResolutionType.DM_SPAM };
  intl2 = tmp(1126).intl;
  items2[1] = obj7;
  const obj8 = { text: intl3.string(guildId(1126).t.UfHAwZ), value: guildId(7027).RaidResolutionType.JOIN_RAID };
  intl3 = tmp(1126).intl;
  items2[2] = obj8;
  const obj9 = { text: intl4.string(guildId(1126).t.K3UWeR), value: guildId(7027).RaidResolutionType.OTHER };
  intl4 = tmp(1126).intl;
  items2[3] = obj9;
  handleTextInputChange = function handleTextInputChange(Button) {
    closure_7(Button);
  };
  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
    class J {
      constructor() {
        const obj = messageId(closure_2[12]);
        obj.hideActionSheet("GuildRaidResolveActionSheet");
      }
    }
    cResult[20] = J;
    tmp18 = J;
  } else {
    class J {
      constructor() {
        const obj = messageId(closure_2[12]);
        obj.hideActionSheet("GuildRaidResolveActionSheet");
      }
    }
  }
  J = tmp18;
  if (cResult[21] === first2) {
    class J {
      constructor() {
        const obj = messageId(closure_2[12]);
        obj.hideActionSheet("GuildRaidResolveActionSheet");
      }
    }
  }
  class N {
    constructor() {
      obj = { raid_alert_type: closure_0(closure_2[11]).RaidAlertType.JOIN_RAID, raid_alert_id: messageId, false_alarm_type: closure_4.map((item) => item.toString()), false_alarm_other_reason: closure_6, guild_id: guildId };
      obj2 = closure_0(closure_2[13]);
      trackWithMetadataResult = obj2.trackWithMetadata(AnalyticEvents.GUILD_RAID_FEEDBACK, obj);
      tmp2 = closure_0(closure_2[14]);
      handleResolveRaid = tmp2.handleResolveRaid;
      obj3 = closure_0(closure_2[11]);
      handleResolveRaidResult = handleResolveRaid(guildId, messageId, obj3.getMostImportantRaidResolutionType(closure_4));
      tmp4 = closure_3();
      obj4 = closure_1(closure_2[15]);
      showSuccessToastResult = obj4.showSuccessToast(SafetyToastType.SAFETY_FEEDBACK_SUCCESS);
      return;
    }
  }
  cResult[21] = first2;
  cResult[22] = first1;
  cResult[23] = guildId;
  cResult[24] = messageId;
  cResult[25] = N;
}) : ((arg0) => {
  let _undefined;
  let _undefined2;
  let _undefined3;
  let c3;
  let c4;
  let c5;
  let c6;
  let closure_2;
  let guild_id;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items1;
  let obj6;
  let raid_alert_id;
  let require;
  let tmp4;
  ({ guildId: require, messageId: importDefault } = arg0);
  _slicedToArray = undefined;
  react = undefined;
  c5 = undefined;
  c6 = undefined;
  function handleTextInputChange(arg0) {
    _undefined3(arg0);
  }
  const tmp = closure_10();
  dependencyMap = tmp;
  const tmp2 = _slicedToArray(react.useState([]), 2);
  [c3, c4] = tmp2;
  [c5, c6] = react.useState();
  let obj = { text: intl.string(intl9.t.yeaXw5), value: AutomodFeedback.RaidResolutionType.LEGITIMATE_ACTIVITY };
  _slicedToArray(react.useState(), 2);
  intl = intl9.intl;
  let items = [obj, , , ];
  let obj2 = { text: intl2.string(intl9.t["o++3B8"]), value: AutomodFeedback.RaidResolutionType.DM_SPAM };
  intl2 = intl9.intl;
  items[1] = obj2;
  let obj3 = { text: intl3.string(intl9.t.UfHAwZ), value: AutomodFeedback.RaidResolutionType.JOIN_RAID };
  intl3 = intl9.intl;
  items[2] = obj3;
  let obj4 = { text: intl4.string(intl9.t.K3UWeR), value: AutomodFeedback.RaidResolutionType.OTHER };
  intl4 = intl9.intl;
  items[3] = obj4;
  let obj5 = { children: closure_9(tmp4, obj6) };
  const ActionSheet = ActionSheet2.ActionSheet;
  obj6 = { style: tmp.container, children: items1 };
  const obj7 = { style: tmp.title, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: intl5.string(intl9.t["1zmw/H"]) };
  tmp4 = KeyboardAwareViewDefault;
  const Text = Text_Text.Text;
  intl5 = intl9.intl;
  items1 = [closure_8(Text, obj7), , , , ];
  const obj8 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: intl6.string(intl9.t.nF79oO) };
  const Text2 = Text_Text.Text;
  intl6 = intl9.intl;
  items1[1] = closure_8(Text2, obj8);
  items1[2] = items.map((value) => {
    let Checkbox;
    let TextInput;
    let intl;
    let items;
    let obj3;
    let obj6;
    value = value.value;
    let closure_0 = value;
    const text = value.text;
    const obj = { style: closure_2.optionContainer, children: items };
    const obj2 = {
      style: closure_2.option,
      onPress() {
        let closure_0 = value;
        c4(c3.includes(value) ? ((arr) => arr.filter((item) => item !== closure_1_0)) : ((arg0) => {
          const items = [];
          items[HermesBuiltin.arraySpread(items, arg0, 0)] = closure_0;
          return items;
        }));
      },
      leading: closure_1_8(Checkbox, obj3),
      label: text
    };
    const FormRow = require("Form").FormRow;
    obj3 = { selected: _undefined.includes(value) };
    Checkbox = require("native").Checkbox;
    items = [closure_1_8(FormRow, obj2), ];
    let hasItem = value === require("AutomodFeedback").RaidResolutionType.OTHER && _undefined.includes(require("AutomodFeedback").RaidResolutionType.OTHER);
    if (hasItem) {
      const obj5 = { style: closure_2.textInputContainer, children: closure_1_8(TextInput, obj6) };
      obj6 = { style: closure_2.textInput, autoComplete: "off", value: _undefined2, placeholder: intl.string(require("intl").t["PAM+JR"]), onChangeText: handleTextInputChange };
      TextInput = require("native").TextInput;
      intl = require("intl").intl;
      hasItem = closure_1_8(_undefined2, obj5);
    }
    items[1] = hasItem;
    return closure_1_9(_undefined2, obj, value);
  });
  const obj9 = {
    onPress() {
      const obj = { raid_alert_type: AutomodFeedback.RaidAlertType.JOIN_RAID, raid_alert_id: importDefault, false_alarm_type: _undefined.map((item) => item.toString()), false_alarm_other_reason: _undefined2, guild_id: require };
      const obj2 = AppAnalyticsUtils;
      obj2.trackWithMetadata(AnalyticEvents.GUILD_RAID_FEEDBACK, obj);
      const handleResolveRaid = GuildAntiRaidActionCreators.handleResolveRaid;
      GuildAntiRaidActionCreators;
      const obj3 = AutomodFeedback;
      handleResolveRaid(require, importDefault, obj3.getMostImportantRaidResolutionType(_undefined));
      const obj4 = ActionSheetActionCreatorsDefault;
      obj4.hideActionSheet("GuildRaidResolveActionSheet");
      const obj5 = SafetyToastsActionCreatorsDefault;
      obj5.showSuccessToast(SafetyToastType.SAFETY_FEEDBACK_SUCCESS);
    },
    text: intl7.string(intl9.t.Gh3A0O),
    size: "md"
  };
  const Button = components_Button_Button.Button;
  intl7 = intl9.intl;
  items1[3] = closure_8(Button, obj9);
  const obj10 = {
    onPress: function handleClose() {
      const obj = require("ActionSheetActionCreators");
      obj.hideActionSheet("GuildRaidResolveActionSheet");
    },
    text: intl8.string(intl9.t["ETE/oC"]),
    variant: "secondary",
    size: "md"
  };
  const Button2 = components_Button_Button.Button;
  intl8 = intl9.intl;
  items1[4] = closure_8(Button2, obj10);
  return closure_8(ActionSheet, obj5);
});
const result = size.fileFinishedImporting("modules/guild_antiraid/native/GuildRaidResolveActionSheet.tsx");

export default tmp4;