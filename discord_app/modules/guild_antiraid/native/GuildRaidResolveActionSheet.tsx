// discord_app/modules/guild_antiraid/native/GuildRaidResolveActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import KeyboardAwareViewDefault from "../../keyboard/native/KeyboardAwareView.tsx";
import ActionSheet from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import AutomodFeedback from "../../guild_automod/AutomodFeedback.tsx";
import SafetyToastsActionCreatorsDefault from "../../safety_common/SafetyToastsActionCreators.native.tsx";
import GuildAntiRaidActionCreators from "../GuildAntiRaidActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const SafetyToastType = fn(8520).SafetyToastType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4639);
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
  const obj7 = { style: tmp.title, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
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
      leading: closure_1_8(guild_id(closure_2[15]).Checkbox, { selected: _undefined.includes(value) }),
      label: value.text,
    };
    let items = [closure_1_8(guild_id(closure_2[14]).FormRow, obj2)];
    let hasItem = value === guild_id(closure_2[9]).RaidResolutionType.OTHER;
    if (hasItem) {
      hasItem = _undefined.includes(guild_id(closure_2[9]).RaidResolutionType.OTHER);
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
      const intl = guild_id(closure_2[8]).intl;
      obj6.placeholder = intl.string(guild_id(closure_2[8]).t["PAM+JR"]);
      obj6.onChangeText = handleTextInputChange;
      obj5.children = closure_1_8(guild_id(closure_2[15]).TextInput, obj6);
      hasItem = closure_1_8(_undefined2, obj5);
    }
    items[1] = hasItem;
    obj.children = items;
    return closure_1_9(_undefined2, obj, value);
  });
  const obj9 = {
    onPress() {
      const obj = {
        raid_alert_type: AutomodFeedback.RaidAlertType.JOIN_RAID,
        raid_alert_id,
        false_alarm_type: _undefined.map((item) => item.toString()),
        false_alarm_other_reason: _undefined2,
        guild_id,
      };
      AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.GUILD_RAID_FEEDBACK, obj);
      const obj3 = GuildAntiRaidActionCreators;
      obj3.handleResolveRaid(guild_id, raid_alert_id, AutomodFeedback.getMostImportantRaidResolutionType(_undefined));
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
      raid_alert_id(closure_2[10]).hideActionSheet("GuildRaidResolveActionSheet");
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
  return closure_8(ActionSheet.ActionSheet, obj5);
}
