// discord_app/modules/parent_tools/native/FamilyCenterParentalControlsScreenTime.tsx
import { View } from "get ActivityIndicator";
import { UserSettingsSections } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { messagesProxy } from "../FamilyCenter.messages.js";

let c5;
let closure_6;
function ScheduleRuleRow(rule) {
  let dependencyMap;
  let importDefault;
  let readOnly;
  rule = rule.rule;
  ({ teenId: importDefault, navigation: dependencyMap, readOnly } = rule);
  if (readOnly === undefined) {
    readOnly = false;
  }
  let obj = rule(9672);
  const scheduleRuleDateRange = obj.getScheduleRuleDateRange(rule);
  const obj2 = rule(9672);
  obj = { label: scheduleRuleDateRange, subLabel: rule(9672).formatDays(rule.days), trailing: null, arrow: null, onPress: null };
  const intl = rule(1236).intl;
  const string = intl.string;
  const tmp4 = messagesProxy;
  if (rule.enabled) {
    let stringResult = string(tmp4["8vDHRq"]);
  } else {
    stringResult = string(tmp4["4z9fN+"]);
  }
  obj[2] = closure_5(rule(4281).Text, { variant: "text-sm/medium", color: "text-subtle", children: stringResult });
  obj[3] = !readOnly;
  let fn;
  if (!readOnly) {
    fn = () => {
      let obj = { teenId: closure_1, rule: null };
      obj = {};
      const merged = Object.assign(rule);
      obj[1] = obj;
      return navigation.navigate(outer1_4.FAMILY_CENTER_SCHEDULE_DOWNTIME, obj);
    };
  }
  obj[4] = fn;
  return closure_5(rule(5354).TableRow, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { header: null, container: null };
obj = { paddingTop: require("Themes").space.PX_24 };
obj[0] = obj;
obj[1] = { paddingHorizontal: require("Themes").space.PX_16, gap: require("Themes").space.PX_8 };
let closure_7 = createCacheKey.createStyles(obj);
let obj1 = { paddingHorizontal: require("Themes").space.PX_16, gap: require("Themes").space.PX_8 };
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterParentalControlsScreenTime.tsx");

export default function FamilyCenterParentalControlsScreenTime(readOnly) {
  let flag = readOnly.readOnly;
  if (flag === undefined) {
    flag = false;
  }
  let importDefault;
  let id;
  const tmp = callback3();
  let obj = flag(id[10]);
  const selectedTeenUser = obj.useSelectedTeenUser();
  let obj1 = flag(id[11]);
  importDefault = obj1.useNavigation();
  id = undefined;
  if (selectedTeenUser != null) {
    id = selectedTeenUser.id;
  }
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
  const tmp2Result = flag(id[5]);
  let tmp6 = null;
  if (null != id) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { variant: "text-sm/semibold", color: "text-subtle", style: null, children: null };
    obj[2] = tmp.header;
    const intl = tmp2(tmp3[8]).intl;
    obj[3] = intl.string(importDefault(tmp3[9])["72CmJd"]);
    const items = [callback(tmp2(tmp3[7]).Text, obj), ];
    obj1 = { hasIcons: false, children: null };
    obj1[1] = sortRulesByStartTimeResult.map((rule) => outer1_5(outer1_8, { rule, teenId: id, navigation: closure_1, readOnly: flag }, rule.ruleId));
    items[1] = callback(tmp2(tmp3[12]).TableRowGroup, obj1);
    obj[1] = items;
    tmp6 = callback2(View, obj);
  }
  return tmp6;
};