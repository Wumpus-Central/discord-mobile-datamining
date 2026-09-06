// === Module 11860: GuildRaidResolveActionSheet ===

// Module 11860 (GuildRaidResolveActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4740 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import KeyboardAwareViewDefault from "KeyboardAwareView" /* 5578 */;
import ActionSheet from "ActionSheet" /* 7198 */;
import AutomodFeedback from "AutomodFeedback" /* 7518 */;
import SafetyToastsActionCreatorsDefault from "SafetyToastsActionCreators" /* 8404 */;
import GuildAntiRaidActionCreators from "GuildAntiRaidActionCreators" /* 11831 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const SafetyToastType = fn(8399).SafetyToastType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { container: { paddingVertical: 24, paddingHorizontal: 16, display: "flex", flexDirection: "column", alignItems: "center" }, title: { marginBottom: 8, textAlign: "center" }, subtitle: { marginBottom: 16, textAlign: "center" }, optionContainer: null, option: null, textInputContainer: null, textInput: null };
createStyles = { borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: nativeDefault.radii.xs, display: "flex", flexDirection: "column", marginBottom: 14, width: "100%" };
createStyles.optionContainer = createStyles;
createStyles.option = { width: "100%" };
createStyles.textInputContainer = { paddingLeft: 54, paddingRight: 16, paddingBottom: 16 };
createStyles.textInput = { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, width: "100%", padding: 8, borderRadius: nativeDefault.radii.xs };
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_antiraid/native/GuildRaidResolveActionSheet.tsx");

export default function GuildRaidResolveActionSheet(arg0) {
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
  [c3, c4] = _slicedToArray(noop.useState([]), 2);
  const tmp2 = _slicedToArray(noop.useState([]), 2);
  [c5, c6] = _slicedToArray(noop.useState(), 2);
  let obj = { text: null, value: null };
  let intl = util.intl;
  obj.text = intl.string(util.t.yeaXw5);
  obj.value = AutomodFeedback.RaidResolutionType.LEGITIMATE_ACTIVITY;
  let items = [obj, , , ];
  obj = { text: null, value: null };
  const intl2 = util.intl;
  obj.text = intl2.string(util.t["o++3B8"]);
  obj.value = AutomodFeedback.RaidResolutionType.DM_SPAM;
  items[1] = obj;
  obj = { text: null, value: null };
  const intl3 = util.intl;
  obj.text = intl3.string(util.t.UfHAwZ);
  obj.value = AutomodFeedback.RaidResolutionType.JOIN_RAID;
  items[2] = obj;
  let obj1 = { text: null, value: null };
  const intl4 = util.intl;
  obj1.text = intl4.string(util.t.K3UWeR);
  obj1.value = AutomodFeedback.RaidResolutionType.OTHER;
  items[3] = obj1;
  let obj2 = { children: null };
  let obj3 = { style: tmp.container, children: null };
  const tmp3 = _slicedToArray(noop.useState(), 2);
  let obj4 = { style: tmp.title, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  const intl5 = util.intl;
  obj4.children = intl5.string(util.t["1zmw/H"]);
  const items1 = [closure_8(Text_Text.Text, obj4), , , , ];
  let obj5 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: null };
  const intl6 = util.intl;
  obj5.children = intl6.string(util.t.nF79oO);
  items1[1] = closure_8(Text_Text.Text, obj5);
  items1[2] = items.map((value) => {
    value = value.value;
    closure_0 = value;
    let obj = { style: closure_2.optionContainer, children: null };
    obj = {
      style: closure_2.option,
      onPress() {
        closure_0 = value;
        c4(c3.includes(value) ? ((arr) => arr.filter((item) => item !== closure_1_0)) : ((arg0) => {
          const items = [];
          items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
          return items;
        }));
      },
      leading: null,
      label: null
    };
    obj = { selected: _undefined.includes(value) };
    obj.leading = closure_1_8(guild_id(closure_2[15]).Checkbox, obj);
    obj.label = value.text;
    let items = [closure_1_8(guild_id(closure_2[14]).FormRow, obj), ];
    let hasItem = value === guild_id(closure_2[9]).RaidResolutionType.OTHER;
    if (hasItem) {
      hasItem = _undefined.includes(guild_id(closure_2[9]).RaidResolutionType.OTHER);
    }
    if (hasItem) {
      const obj1 = { style: closure_2.textInputContainer, children: null };
      const obj2 = { style: closure_2.textInput, autoComplete: "off", value: _undefined2, placeholder: null, onChangeText: null };
      const intl = guild_id(closure_2[8]).intl;
      obj2.placeholder = intl.string(guild_id(closure_2[8]).t["PAM+JR"]);
      obj2.onChangeText = handleTextInputChange;
      obj1.children = closure_1_8(guild_id(closure_2[15]).TextInput, obj2);
      hasItem = closure_1_8(_undefined2, obj1);
    }
    items[1] = hasItem;
    obj.children = items;
    return closure_1_9(_undefined2, obj, value);
  });
  const obj6 = {
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
  obj6.text = intl7.string(util.t.Gh3A0O);
  items1[3] = closure_8(components_Button_Button.Button, obj6);
  const obj7 = {
    onPress: function handleClose() {
      raid_alert_id(closure_2[10]).hideActionSheet("GuildRaidResolveActionSheet");
    },
    text: null,
    variant: "secondary",
    size: "md"
  };
  const intl8 = util.intl;
  obj7.text = intl8.string(util.t["ETE/oC"]);
  items1[4] = closure_8(components_Button_Button.Button, obj7);
  obj3.children = items1;
  obj2.children = closure_9(KeyboardAwareViewDefault, obj3);
  return closure_8(ActionSheet.ActionSheet, obj2);
};