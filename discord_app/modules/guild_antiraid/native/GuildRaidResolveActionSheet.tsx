// === Module 11485: GuildRaidResolveActionSheet ===

// Module 11485 (GuildRaidResolveActionSheet)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5076 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import KeyboardAwareViewDefault from "KeyboardAwareView" /* 6544 */;
import ActionSheet from "ActionSheet" /* 6708 */;
import AutomodFeedback from "AutomodFeedback" /* 7040 */;
import SafetyToastsActionCreatorsDefault from "SafetyToastsActionCreators" /* 8113 */;
import GuildAntiRaidActionCreators from "GuildAntiRaidActionCreators" /* 11454 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1085).AnalyticEvents;
const SafetyToastType = fn(8108).SafetyToastType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { container: { paddingVertical: 24, paddingHorizontal: 16, display: "flex", flexDirection: "column", alignItems: "center" }, title: { marginBottom: 8, textAlign: "center" }, subtitle: { marginBottom: 16, textAlign: "center" }, optionContainer: { borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: nativeDefault.radii.xs, display: "flex", flexDirection: "column", marginBottom: 14, width: "100%" }, option: { width: "100%" }, textInputContainer: { paddingLeft: 54, paddingRight: 16, paddingBottom: 16 }, textInput: null };
let obj3 = { borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: nativeDefault.radii.xs, display: "flex", flexDirection: "column", marginBottom: 14, width: "100%" };
obj2.textInput = { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, width: "100%", padding: 8, borderRadius: nativeDefault.radii.xs };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, width: "100%", padding: 8, borderRadius: nativeDefault.radii.xs };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_antiraid/native/GuildRaidResolveActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(576).c(49);
  guildId = guildId.guildId;
  const messageId = guildId.messageId;
  const tmp4 = closure_10();
  dependencyMap = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  [first1, closure_5] = first1.useState(first);
  [first2, closure_7] = first1.useState();
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
                      if (cResult[11] === tmp4.title) {
                        _slicedToArray = tmp12;
                        const _Symbol = Symbol;
                        if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl5 = tmp(1126).intl;
                          const stringResult = intl5.string(tmp(1126).t.Gh3A0O);
                          cResult[32] = stringResult;
                          let tmp19 = stringResult;
                        } else {
                          tmp19 = cResult[32];
                        }
                        if (cResult[33] !== cResult[15]) {
                          let obj2 = { onPress: tmp13, text: tmp19, size: "md" };
                          const tmp23 = handleTextInputChange(tmp(5601).Button, obj2);
                          cResult[33] = tmp13;
                          cResult[34] = tmp23;
                          let tmp21 = tmp23;
                        } else {
                          tmp21 = cResult[34];
                        }
                        const _Symbol2 = Symbol;
                        if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl6 = tmp(1126).intl;
                          const stringResult1 = intl6.string(tmp(1126).t["ETE/oC"]);
                          cResult[35] = stringResult1;
                          let tmp24 = stringResult1;
                        } else {
                          tmp24 = cResult[35];
                        }
                        if (cResult[36] !== cResult[14]) {
                          let obj3 = { onPress: tmp12, text: tmp24, variant: "secondary", size: "md" };
                          const tmp28 = handleTextInputChange(tmp(5601).Button, obj3);
                          cResult[36] = tmp12;
                          cResult[37] = tmp28;
                          let tmp26 = tmp28;
                        } else {
                          tmp26 = cResult[37];
                        }
                        if (cResult[38] === cResult[12]) {
                          if (cResult[39] === tmp14) {
                            if (cResult[40] === tmp15) {
                              if (cResult[41] === tmp16) {
                                if (cResult[42] === tmp17) {
                                  if (cResult[43] === tmp21) {
                                    if (cResult[44] === tmp26) {
                                      let tmp29 = cResult[45];
                                    }
                                    if (cResult[46] === tmp11) {
                                      if (cResult[47] === tmp29) {
                                        let tmp32 = cResult[48];
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
                        let obj5 = { style: cResult[16], children: null };
                        const items1 = [cResult[17], cResult[18], cResult[19], tmp21, tmp26];
                        obj5.children = items1;
                        const tmp31 = closure_9(cResult[12], obj5);
                        cResult[38] = cResult[12];
                        cResult[39] = cResult[16];
                        cResult[40] = cResult[17];
                        cResult[41] = cResult[18];
                        cResult[42] = cResult[19];
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
  }
  let obj6 = { text: null, value: null };
  let intl = tmp(1126).intl;
  obj6.text = intl.string(guildId(1126).t.yeaXw5);
  obj6.value = guildId(7040).RaidResolutionType.LEGITIMATE_ACTIVITY;
  const items2 = [obj6, , , ];
  const obj7 = { text: null, value: null };
  const intl2 = tmp(1126).intl;
  obj7.text = intl2.string(guildId(1126).t["o++3B8"]);
  obj7.value = guildId(7040).RaidResolutionType.DM_SPAM;
  items2[1] = obj7;
  const obj8 = { text: null, value: null };
  const intl3 = tmp(1126).intl;
  obj8.text = intl3.string(guildId(1126).t.UfHAwZ);
  obj8.value = guildId(7040).RaidResolutionType.JOIN_RAID;
  items2[2] = obj8;
  const obj9 = { text: null, value: null };
  const intl4 = tmp(1126).intl;
  obj9.text = intl4.string(guildId(1126).t.K3UWeR);
  obj9.value = guildId(7040).RaidResolutionType.OTHER;
  items2[3] = obj9;
  handleTextInputChange = function handleTextInputChange(Button) {
    closure_7(Button);
  };
  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
    class J {
      constructor() {
        obj = messageId(closure_2[12]);
        hideActionSheetResult = obj.hideActionSheet("GuildRaidResolveActionSheet");
        return;
      }
    }
    cResult[20] = J;
  } else {
    class J {
      constructor() {
        obj = messageId(closure_2[12]);
        hideActionSheetResult = obj.hideActionSheet("GuildRaidResolveActionSheet");
        return;
      }
    }
  }
  _slicedToArray = J;
  if (cResult[21] === first2) {
    class J {
      constructor() {
        obj = messageId(closure_2[12]);
        hideActionSheetResult = obj.hideActionSheet("GuildRaidResolveActionSheet");
        return;
      }
    }
  }
  class N {
    constructor() {
      obj = { raid_alert_type: closure_0(closure_2[11]).RaidAlertType.JOIN_RAID, raid_alert_id: messageId, false_alarm_type: closure_4.map((item) => item.toString()), false_alarm_other_reason: closure_6, guild_id: guildId };
      obj2 = closure_0(closure_2[13]);
      trackWithMetadataResult = obj2.trackWithMetadata(AnalyticEvents.GUILD_RAID_FEEDBACK, obj);
      obj3 = closure_0(closure_2[14]);
      obj4 = closure_0(closure_2[11]);
      handleResolveRaidResult = obj3.handleResolveRaid(guildId, messageId, obj4.getMostImportantRaidResolutionType(closure_4));
      tmp3 = closure_3();
      obj5 = closure_1(closure_2[15]);
      showSuccessToastResult = obj5.showSuccessToast(SafetyToastType.SAFETY_FEEDBACK_SUCCESS);
      return;
    }
  }
  cResult[21] = first2;
  cResult[22] = first1;
  cResult[23] = guildId;
  cResult[24] = messageId;
  cResult[25] = N;
  let obj = guildId(576);
}) : ((arg0) => {
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
  let items = [obj, , , ];
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
  const obj7 = { style: tmp.title, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  const intl5 = util.intl;
  obj7.children = intl5.string(util.t["1zmw/H"]);
  const items1 = [closure_8(Text_Text.Text, obj7), , , , ];
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
        c4(c3.includes(value) ? ((arr) => arr.filter((item) => item !== closure_1_0)) : ((arg0) => {
          const items = [];
          items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
          return items;
        }));
      },
      leading: closure_1_8(guild_id(closure_2[20]).Checkbox, { selected: _undefined.includes(value) }),
      label: value.text
    };
    let items = [closure_1_8(guild_id(closure_2[19]).FormRow, obj2), ];
    let hasItem = value === guild_id(closure_2[11]).RaidResolutionType.OTHER;
    if (hasItem) {
      hasItem = _undefined.includes(guild_id(closure_2[11]).RaidResolutionType.OTHER);
    }
    if (hasItem) {
      const obj5 = { style: closure_2.textInputContainer, children: null };
      const obj6 = { style: closure_2.textInput, autoComplete: "off", value: _undefined2, placeholder: null, onChangeText: null };
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
    onPress() {
      const obj = { raid_alert_type: AutomodFeedback.RaidAlertType.JOIN_RAID, raid_alert_id, false_alarm_type: _undefined.map((item) => item.toString()), false_alarm_other_reason: _undefined2, guild_id };
      AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.GUILD_RAID_FEEDBACK, obj);
      const obj3 = GuildAntiRaidActionCreators;
      obj3.handleResolveRaid(guild_id, raid_alert_id, AutomodFeedback.getMostImportantRaidResolutionType(_undefined));
      ActionSheetActionCreatorsDefault.hideActionSheet("GuildRaidResolveActionSheet");
      SafetyToastsActionCreatorsDefault.showSuccessToast(SafetyToastType.SAFETY_FEEDBACK_SUCCESS);
    },
    text: null,
    size: "md"
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
    size: "md"
  };
  const intl8 = util.intl;
  obj10.text = intl8.string(util.t["ETE/oC"]);
  items1[4] = closure_8(components_Button_Button.Button, obj10);
  obj6.children = items1;
  obj5.children = closure_9(KeyboardAwareViewDefault, obj6);
  return closure_8(ActionSheet.ActionSheet, obj5);
});