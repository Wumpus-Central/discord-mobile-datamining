// === Module 15269: FamilyCenterParentalControlsScreenTime ===

// Module 15269 (FamilyCenterParentalControlsScreenTime)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import _modDef2484 from "module_2484" /* 2484 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4827 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function ScheduleRuleRow(rule) {
  rule = rule.rule;
  ({ teenId: importDefault, navigation: dependencyMap, readOnly } = rule);
  if (readOnly === undefined) {
    readOnly = false;
  }
  const scheduleRuleDateRange = rule(10425).getScheduleRuleDateRange(rule);
  let obj = rule(10425);
  const obj2 = rule(10425);
  const obj3 = { label: scheduleRuleDateRange, subLabel: rule(10425).formatDays(rule.days), trailing: null, arrow: null, onPress: null };
  const intl = rule(1115).intl;
  const string = intl.string;
  const tmp4 = _modDef2484;
  if (rule.enabled) {
    let stringResult = string(tmp4["8vDHRq"]);
  } else {
    stringResult = string(tmp4["4z9fN+"]);
  }
  obj3.trailing = closure_5(rule(4823).Text, { variant: "text-sm/medium", color: "text-subtle", children: stringResult });
  obj3.arrow = !readOnly;
  let fn;
  if (!readOnly) {
    fn = () => {
      const obj = { teenId, rule: null };
      const merged = Object.assign(rule);
      obj.rule = {};
      return navigation.navigate(UserSettingsSections.FAMILY_CENTER_SCHEDULE_DOWNTIME, obj);
    };
  }
  obj3.onPress = fn;
  return closure_5(rule(5908).TableRow, obj3);
}
const View = _mod17.View;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { header: { paddingTop: nativeDefault.space.PX_24 }, container: null };
let obj2 = { paddingTop: nativeDefault.space.PX_24 };
obj.container = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterParentalControlsScreenTime.tsx");

export default function FamilyCenterParentalControlsScreenTime(readOnly) {
  let flag = readOnly.readOnly;
  if (flag === undefined) {
    flag = false;
  }
  let id;
  const tmp = closure_7();
  const selectedTeenUser = flag(id[10]).useSelectedTeenUser();
  const obj = flag(id[10]);
  importDefault = flag(id[11]).useNavigation();
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
  const obj2 = flag(id[11]);
  const tmp2Result = flag(id[5]);
  let tmp6 = null;
  if (null != id) {
    const obj3 = { style: tmp.container, children: null };
    const obj4 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.header, children: null };
    const intl = tmp2(tmp3[8]).intl;
    obj4.children = intl.string(require("module_2484")["72CmJd"]);
    const items = [closure_5(tmp2(tmp3[7]).Text, obj4), ];
    const obj5 = { hasIcons: false, children: sortRulesByStartTimeResult.map((rule) => hasOwnProperty(ScheduleRuleRow, { rule, teenId: id, navigation, readOnly: flag }, rule.ruleId)) };
    items[1] = closure_5(tmp2(tmp3[12]).TableRowGroup, obj5);
    obj3.children = items;
    tmp6 = closure_6(View, obj3);
  }
  return tmp6;
};