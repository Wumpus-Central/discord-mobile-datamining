import _slicedToArray from "_slicedToArray";
import module_7707 from "module_7707";
import { View } from "collectGuildAnalyticsMetadata";
import { AnalyticEvents } from "ME";
import { SafetyToastType } from "SafetyToastType";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c9;
let metroImportAll;
const require = arg1;
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { container: { paddingVertical: 24, paddingHorizontal: 16, display: "flex", flexDirection: "column", alignItems: "center" }, title: { marginBottom: 8, textAlign: "center" }, subtitle: { marginBottom: 16, textAlign: "center" }, optionContainer: null, option: null, textInputContainer: null, textInput: null };
createCacheKey = { borderColor: require("Themes").colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: require("Themes").radii.xs, display: "flex", flexDirection: "column", marginBottom: 14, width: "100%" };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { width: "100%" };
createCacheKey[5] = { paddingLeft: 54, paddingRight: 16, paddingBottom: 16 };
createCacheKey[6] = { backgroundColor: require("Themes").colors.INPUT_BACKGROUND_DEFAULT, width: "100%", padding: 8, borderRadius: require("Themes").radii.xs };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { backgroundColor: require("Themes").colors.INPUT_BACKGROUND_DEFAULT, width: "100%", padding: 8, borderRadius: require("Themes").radii.xs };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_antiraid/native/GuildRaidResolveActionSheet.tsx");

export default function GuildRaidResolveActionSheet(arg0) {
  let c3;
  let c4;
  let c5;
  let c6;
  let importDefault;
  let require;
  ({ guildId: require, messageId: importDefault } = arg0);
  let dependencyMap;
  let callback;
  let React;
  c5 = undefined;
  c6 = undefined;
  function handleTextInputChange(arg0) {
    _undefined3(arg0);
  }
  const tmp = createCacheKey();
  dependencyMap = tmp;
  [c3, c4] = callback(React.useState([]), 2);
  const tmp2 = callback(React.useState([]), 2);
  [c5, c6] = callback(React.useState(), 2);
  let obj = { text: null, value: null };
  let intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.yeaXw5);
  obj[1] = require(6886) /* Feedback */.RaidResolutionType.LEGITIMATE_ACTIVITY;
  let items = [obj, , , ];
  obj = { text: null, value: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl2.string(require(1236) /* getSystemLocale */.t["o++3B8"]);
  obj[1] = require(6886) /* Feedback */.RaidResolutionType.DM_SPAM;
  items[1] = obj;
  obj = { text: null, value: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl3.string(require(1236) /* getSystemLocale */.t.UfHAwZ);
  obj[1] = require(6886) /* Feedback */.RaidResolutionType.JOIN_RAID;
  items[2] = obj;
  let obj1 = { text: null, value: null };
  const intl4 = require(1236) /* getSystemLocale */.intl;
  obj1[0] = intl4.string(require(1236) /* getSystemLocale */.t.K3UWeR);
  obj1[1] = require(6886) /* Feedback */.RaidResolutionType.OTHER;
  items[3] = obj1;
  let obj2 = { children: null };
  let obj3 = { style: tmp.container, children: null };
  const tmp3 = callback(React.useState(), 2);
  let obj4 = { style: tmp.title, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  const intl5 = require(1236) /* getSystemLocale */.intl;
  obj4[3] = intl5.string(require(1236) /* getSystemLocale */.t["1zmw/H"]);
  const items1 = [callback2(require(4281) /* Text */.Text, obj4), , , , ];
  let obj5 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: null };
  const intl6 = require(1236) /* getSystemLocale */.intl;
  obj5[3] = intl6.string(require(1236) /* getSystemLocale */.t.nF79oO);
  items1[1] = callback2(require(4281) /* Text */.Text, obj5);
  items1[2] = items.map((value) => {
    value = value.value;
    let closure_0 = value;
    let obj = { style: _undefined.optionContainer, children: null };
    obj = {
      style: _undefined.option,
      onPress() {
        outer1_4(outer1_3.includes(closure_0) ? ((arr) => arr.filter((arg0) => arg0 !== closure_0)) : ((arg0) => {
          const items = [];
          items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
          return items;
        }));
      },
      leading: null,
      label: null
    };
    obj = { selected: null };
    obj[0] = _undefined2.includes(value);
    obj[2] = outer1_8(outer1_0(_undefined[15]).Checkbox, obj);
    obj[3] = value.text;
    let items = [outer1_8(outer1_0(_undefined[14]).FormRow, obj), ];
    let hasItem = value === outer1_0(_undefined[9]).RaidResolutionType.OTHER;
    if (hasItem) {
      hasItem = _undefined2.includes(tmp5(tmp6[9]).RaidResolutionType.OTHER);
    }
    if (hasItem) {
      const obj1 = { style: null, children: null };
      obj1[0] = tmp3.textInputContainer;
      const obj2 = { style: null, autoComplete: "off", value: null, placeholder: null, onChangeText: null };
      obj2[0] = tmp3.textInput;
      obj2[2] = c5;
      const intl = tmp5(tmp6[8]).intl;
      obj2[3] = intl.string(tmp5(tmp6[8]).t["PAM+JR"]);
      obj2[4] = handleTextInputChange;
      obj1[1] = tmp4(tmp5(tmp6[15]).TextInput, obj2);
      hasItem = tmp4(tmp2, obj1);
    }
    items[1] = hasItem;
    obj[1] = items;
    return outer1_9(c5, obj, value);
  });
  const obj6 = {
    onPress() {
      const obj = { raid_alert_type: outer1_0(_undefined[9]).RaidAlertType.JOIN_RAID, raid_alert_id: closure_1, false_alarm_type: _undefined2.map((arg0) => arg0.toString()), false_alarm_other_reason: c5, guild_id: closure_0 };
      outer1_0(_undefined[17]).trackWithMetadata(_undefined3.GUILD_RAID_FEEDBACK, obj);
      const obj2 = outer1_0(_undefined[17]);
      const obj3 = outer1_0(_undefined[18]);
      obj3.handleResolveRaid(closure_0, closure_1, outer1_0(_undefined[9]).getMostImportantRaidResolutionType(_undefined2));
      const obj4 = outer1_0(_undefined[9]);
      outer1_1(_undefined[10]).hideActionSheet("GuildRaidResolveActionSheet");
      const obj5 = outer1_1(_undefined[10]);
      outer1_1(_undefined[19]).showSuccessToast(handleTextInputChange.SAFETY_FEEDBACK_SUCCESS);
    },
    text: null,
    size: "md"
  };
  const intl7 = require(1236) /* getSystemLocale */.intl;
  obj6[1] = intl7.string(require(1236) /* getSystemLocale */.t.Gh3A0O);
  items1[3] = callback2(require(4695) /* Button */.Button, obj6);
  const obj7 = {
    onPress: function handleClose() {
      callback(_undefined[10]).hideActionSheet("GuildRaidResolveActionSheet");
    },
    text: null,
    variant: "secondary",
    size: "md"
  };
  const intl8 = require(1236) /* getSystemLocale */.intl;
  obj7[1] = intl8.string(require(1236) /* getSystemLocale */.t["ETE/oC"]);
  items1[4] = callback2(require(4695) /* Button */.Button, obj7);
  obj3[1] = items1;
  obj2[0] = callback3(importDefault(5733), obj3);
  return callback2(require(5646) /* ActionSheet */.ActionSheet, obj2);
};