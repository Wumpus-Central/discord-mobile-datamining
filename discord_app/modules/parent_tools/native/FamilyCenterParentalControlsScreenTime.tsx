// discord_app/modules/parent_tools/native/FamilyCenterParentalControlsScreenTime.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import _modDef2396 from "../FamilyCenter.messages.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function ScheduleRuleRow(rule) {
  rule = rule.rule;
  ({ teenId: importDefault, navigation: dependencyMap, readOnly } = rule);
  if (readOnly === undefined) {
    readOnly = false;
  }
  let obj = rule(10083);
  const scheduleRuleDateRange = obj.getScheduleRuleDateRange(rule);
  const obj2 = rule(10083);
  obj = {
    label: scheduleRuleDateRange,
    subLabel: rule(10083).formatDays(rule.days),
    trailing: null,
    arrow: null,
    onPress: null,
  };
  const intl = rule(1114).intl;
  const string = intl.string;
  const tmp4 = _modDef2396;
  if (rule.enabled) {
    let stringResult = string(tmp4["8vDHRq"]);
  } else {
    stringResult = string(tmp4["4z9fN+"]);
  }
  obj.trailing = closure_5(rule(4556).Text, {
    variant: "text-sm/medium",
    color: "text-subtle",
    children: stringResult,
  });
  obj.arrow = !readOnly;
  let fn;
  if (!readOnly) {
    fn = () => {
      let obj = { teenId, rule: null };
      obj = {};
      const merged = Object.assign(rule);
      obj.rule = obj;
      return navigation.navigate(UserSettingsSections.FAMILY_CENTER_SCHEDULE_DOWNTIME, obj);
    };
  }
  obj.onPress = fn;
  return closure_5(rule(5605).TableRow, obj);
}
const View = _mod17.View;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { header: null, container: null };
obj = { paddingTop: nativeDefault.space.PX_24 };
obj.header = obj;
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
    obj = { style: tmp.container, children: null };
    obj = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.header, children: null };
    const intl = tmp2(tmp3[8]).intl;
    obj.children = intl.string(require("../FamilyCenter.messages.js")["72CmJd"]);
    const items = [closure_5(tmp2(tmp3[7]).Text, obj)];
    obj1 = {
      hasIcons: false,
      children: sortRulesByStartTimeResult.map((rule) =>
        hasOwnProperty(ScheduleRuleRow, { rule, teenId: id, navigation, readOnly: flag }, rule.ruleId),
      ),
    };
    items[1] = closure_5(tmp2(tmp3[12]).TableRowGroup, obj1);
    obj.children = items;
    tmp6 = closure_6(View, obj);
  }
  return tmp6;
}
