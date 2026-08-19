// === Module 14289: ScheduleRuleRow ===

// Module 14289 (ScheduleRuleRow)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 676 */;
import ThemesDefault from "Themes" /* 712 */;
import messagesProxyDefault from "messagesProxy" /* 2335 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

function ScheduleRuleRow(rule) {
  rule = rule.rule;
  ({ teenId: importDefault, navigation: dependencyMap, readOnly } = rule);
  if (readOnly === undefined) {
    readOnly = false;
  }
  let obj = rule(10017);
  const scheduleRuleDateRange = obj.getScheduleRuleDateRange(rule);
  const obj2 = rule(10017);
  obj = { label: scheduleRuleDateRange, subLabel: rule(10017).formatDays(rule.days), trailing: null, arrow: null, onPress: null };
  const intl = rule(1236).intl;
  const string = intl.string;
  const tmp4 = messagesProxyDefault;
  if (rule.enabled) {
    let stringResult = string(tmp4["8vDHRq"]);
  } else {
    stringResult = string(tmp4["4z9fN+"]);
  }
  obj[2] = callback(rule(4734).Text, { variant: "text-sm/medium", color: "text-subtle", children: stringResult });
  obj[3] = !readOnly;
  let fn;
  if (!readOnly) {
    fn = () => {
      const obj = {};
      const merged = Object.assign(rule);
      obj[1] = obj;
      return navigation.navigate(UserSettingsSections.FAMILY_CENTER_SCHEDULE_DOWNTIME, obj);
    };
  }
  obj[4] = fn;
  return callback(rule(6291).TableRow, obj);
}
const View = get_ActivityIndicator.View;
const UserSettingsSections = ME.UserSettingsSections;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { paddingTop: ThemesDefault.space.PX_24 };
obj[0] = obj;
obj[1] = { paddingHorizontal: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_8 };
let closure_7 = createCacheKey.createStyles(obj);
const result = obj132.fileFinishedImporting("modules/parent_tools/native/FamilyCenterParentalControlsScreenTime.tsx");

export default function FamilyCenterParentalControlsScreenTime(readOnly) {
  let flag = readOnly.readOnly;
  if (flag === undefined) {
    flag = false;
  }
  let id;
  const tmp = callback3();
  let obj = flag(id[10]);
  const selectedTeenUser = obj.useSelectedTeenUser();
  obj1 = flag(id[11]);
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
    obj1[1] = sortRulesByStartTimeResult.map((item, index) => closure_1_5(ScheduleRuleRow, { rule: item, teenId: id, navigation: closure_1, readOnly: flag }, item.ruleId));
    items[1] = callback(tmp2(tmp3[12]).TableRowGroup, obj1);
    obj[1] = items;
    tmp6 = callback2(View, obj);
  }
  return tmp6;
};