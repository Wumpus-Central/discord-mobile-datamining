// === Module 18431: OverviewScreen ===

// Module 18431 (OverviewScreen)
import SafetyFlowsUtils from "SafetyFlowsUtils" /* 18433 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4829);
let closure_6 = createStyles.createStyles({ content: { margin: "auto", overflow: "visible", justifyContent: "center", textAlign: "center", alignItems: "center" }, title: { textAlign: "center", textTransform: "uppercase", lineHeight: 50 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_flows/native/OverviewScreen.tsx");

export default function OverviewScreen() {
  let tmp = closure_6();
  task = task(18432).useSafetyFlowTask().task;
  let obj = task(18432);
  const navigation = task(1484).useNavigation();
  const items = [task, navigation];
  const callback = noop.useCallback(() => {
    const screensForTaskType = SafetyFlowsUtils.getScreensForTaskType(task.task_type);
    let tmp = null != screensForTaskType;
    if (tmp) {
      tmp = screensForTaskType.length > 0;
    }
    if (tmp) {
      tmp = null != screensForTaskType[0];
    }
    if (tmp) {
      navigation.push(screensForTaskType[0]);
    }
  }, items);
  const obj3 = { spacing: navigation(576).space.PX_16, style: tmp.content, children: null };
  const obj4 = { variant: "display-lg", style: tmp.title, children: null };
  const intl = task(1115).intl;
  obj4.children = intl.string(navigation(2780).RRamMH);
  const items1 = [closure_4(task(4825).Text, obj4), , ];
  const obj5 = { variant: "text-md/medium", color: "text-strong", children: null };
  const intl2 = task(1115).intl;
  obj5.children = intl2.string(navigation(2780).I2Ctk1);
  items1[1] = closure_4(task(4825).Text, obj5);
  const obj6 = { spacing: navigation(576).space.PX_8, children: null };
  const flow_context = task.flow_context;
  let mapped;
  if (flow_context != null) {
    const tasks = flow_context.tasks;
    if (tasks != null) {
      mapped = tasks.map((task_type, index) => {
        const obj = { tip: task(18427).TASK_TYPE_TO_TITLE[task_type.task_type], index: index + 1 };
        return closure_1_4(navigation(8934), obj, task_type.task_type);
      });
    }
  }
  const obj7 = { children: null };
  const obj8 = { children: null };
  const items2 = [closure_4(task(5992).TableRowGroup, { hasIcons: true, children: mapped }), ];
  const obj9 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const intl3 = tmp2(1115).intl;
  obj9.children = intl3.string(navigation(2780)["0TnUrG"]);
  items2[1] = closure_4(task(4825).Text, obj9);
  obj6.children = items2;
  items1[2] = closure_5(task(5271).Stack, obj6);
  obj3.children = items1;
  obj8.children = closure_5(task(5271).Stack, obj3);
  const items3 = [closure_4(task(8773).ModalContent, obj8), ];
  const obj10 = { children: null };
  const items4 = [closure_4(navigation(18434), {}), ];
  const obj11 = { variant: "primary", text: null, onPress: null };
  const intl4 = tmp2(1115).intl;
  obj11.text = intl4.string(navigation(2780).Ks6opt);
  obj11.onPress = callback;
  items4[1] = closure_4(task(11350).ModalActionButton, obj11);
  obj10.children = items4;
  items3[1] = closure_5(task(12269).ModalFooter, obj10);
  obj7.children = items3;
  return closure_5(task(8772).ModalScreen, obj7);
};