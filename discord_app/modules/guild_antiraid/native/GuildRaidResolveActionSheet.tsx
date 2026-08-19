// === Module 11040: GuildRaidResolveActionSheet ===

// Module 11040 (GuildRaidResolveActionSheet)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import Button from "Button" /* 4745 */;
import Feedback from "Feedback" /* 5242 */;
import _modDef6551 from "module_6551" /* 6551 */;
import ActionSheet from "ActionSheet" /* 7175 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { SafetyToastType } from "SafetyToastType" /* 5430 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
({ jsx: closure_8, jsxs: c9 } = jsxProd);
const createCacheKey = { borderColor: ThemesDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: ThemesDefault.radii.xs, display: "flex", flexDirection: "column", marginBottom: 14, width: "100%" };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { width: "100%" };
createCacheKey[5] = { paddingLeft: 54, paddingRight: 16, paddingBottom: 16 };
createCacheKey[6] = { backgroundColor: ThemesDefault.colors.INPUT_BACKGROUND_DEFAULT, width: "100%", padding: 8, borderRadius: ThemesDefault.radii.xs };
let closure_10 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_antiraid/native/GuildRaidResolveActionSheet.tsx");

export default function GuildRaidResolveActionSheet(arg0) {
  ({ guildId: require, messageId: importDefault } = arg0);
  let callback;
  let React;
  c5 = undefined;
  c6 = undefined;
  function handleTextInputChange(arg0) {
    _undefined2(arg0);
  }
  const tmp = callback4();
  dependencyMap = tmp;
  [c3, c4] = callback(React.useState([]), 2);
  const tmp2 = callback(React.useState([]), 2);
  [c5, c6] = callback(React.useState(), 2);
  let obj = { text: null, value: null };
  let intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.yeaXw5);
  obj[1] = Feedback.RaidResolutionType.LEGITIMATE_ACTIVITY;
  let items = [obj, , , ];
  obj = { text: null, value: null };
  const intl2 = getSystemLocale.intl;
  obj[0] = intl2.string(getSystemLocale.t["o++3B8"]);
  obj[1] = Feedback.RaidResolutionType.DM_SPAM;
  items[1] = obj;
  obj = { text: null, value: null };
  const intl3 = getSystemLocale.intl;
  obj[0] = intl3.string(getSystemLocale.t.UfHAwZ);
  obj[1] = Feedback.RaidResolutionType.JOIN_RAID;
  items[2] = obj;
  obj1 = { text: null, value: null };
  const intl4 = getSystemLocale.intl;
  obj1[0] = intl4.string(getSystemLocale.t.K3UWeR);
  obj1[1] = Feedback.RaidResolutionType.OTHER;
  items[3] = obj1;
  let obj2 = { children: null };
  let obj3 = { style: tmp.container, children: null };
  const tmp3 = callback(React.useState(), 2);
  let obj4 = { style: tmp.title, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  const intl5 = getSystemLocale.intl;
  obj4[3] = intl5.string(getSystemLocale.t["1zmw/H"]);
  const items1 = [callback2(Text.Text, obj4), , , , ];
  let obj5 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: null };
  const intl6 = getSystemLocale.intl;
  obj5[3] = intl6.string(getSystemLocale.t.nF79oO);
  items1[1] = callback2(Text.Text, obj5);
  items1[2] = items.map((item, index) => {
    const value = item.value;
    closure_0 = value;
    const obj = { selected: _undefined.includes(value) };
    obj[2] = closure_1_8(require(closure_2[15]).Checkbox, obj);
    obj[3] = item.text;
    let items = [closure_1_8(require(closure_2[14]).FormRow, obj), ];
    let hasItem = value === require(closure_2[9]).RaidResolutionType.OTHER;
    if (hasItem) {
      hasItem = _undefined.includes(require(closure_2[9]).RaidResolutionType.OTHER);
    }
    if (hasItem) {
      obj1 = { style: null, children: null };
      obj1[0] = closure_2.textInputContainer;
      const obj2 = { style: null, autoComplete: "off", value: null, placeholder: null, onChangeText: null };
      obj2[0] = closure_2.textInput;
      obj2[2] = c5;
      const intl = require(closure_2[8]).intl;
      obj2[3] = intl.string(require(closure_2[8]).t["PAM+JR"]);
      obj2[4] = handleTextInputChange;
      obj1[1] = closure_1_8(require(closure_2[15]).TextInput, obj2);
      hasItem = closure_1_8(c5, obj1);
    }
    items[1] = hasItem;
    obj[1] = items;
    return closure_1_9(c5, obj, value);
  });
  const obj6 = {
    onPress() {
      const obj = { raid_alert_type: require(closure_2[9]).RaidAlertType.JOIN_RAID, raid_alert_id: closure_1, false_alarm_type: _undefined.map((item, index) => item.toString()), false_alarm_other_reason: c5, guild_id: closure_0 };
      require(closure_2[17]).trackWithMetadata(_undefined2.GUILD_RAID_FEEDBACK, obj);
      const obj2 = require(closure_2[17]);
      const obj3 = require(closure_2[18]);
      obj3.handleResolveRaid(closure_0, closure_1, require(closure_2[9]).getMostImportantRaidResolutionType(_undefined));
      const obj4 = require(closure_2[9]);
      importDefault(closure_2[10]).hideActionSheet("GuildRaidResolveActionSheet");
      const obj5 = importDefault(closure_2[10]);
      importDefault(closure_2[19]).showSuccessToast(handleTextInputChange.SAFETY_FEEDBACK_SUCCESS);
    },
    text: null,
    size: "md"
  };
  const intl7 = getSystemLocale.intl;
  obj6[1] = intl7.string(getSystemLocale.t.Gh3A0O);
  items1[3] = callback2(Button.Button, obj6);
  const obj7 = {
    onPress: function handleClose() {
      callback(closure_2[10]).hideActionSheet("GuildRaidResolveActionSheet");
    },
    text: null,
    variant: "secondary",
    size: "md"
  };
  const intl8 = getSystemLocale.intl;
  obj7[1] = intl8.string(getSystemLocale.t["ETE/oC"]);
  items1[4] = callback2(Button.Button, obj7);
  obj3[1] = items1;
  obj2[0] = callback3(_modDef6551, obj3);
  return callback2(ActionSheet.ActionSheet, obj2);
};