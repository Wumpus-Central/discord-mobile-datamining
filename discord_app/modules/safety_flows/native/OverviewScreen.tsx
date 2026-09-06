// === Module 17871: OverviewScreen ===

// Module 17871 (OverviewScreen)
import SafetyFlowsUtils from "SafetyFlowsUtils" /* 17873 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ content: { margin: "auto", overflow: "visible", justifyContent: "center", textAlign: "center", alignItems: "center" }, title: { textAlign: "center", textTransform: "uppercase", lineHeight: 50 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_flows/native/OverviewScreen.tsx");

export default function OverviewScreen() {
  let tmp = closure_6();
  let obj = task(17872);
  task = obj.useSafetyFlowTask().task;
  let obj1 = task(1483);
  const navigation = obj1.useNavigation();
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
  obj = { spacing: navigation(576).space.PX_16, style: tmp.content, children: null };
  obj = { variant: "display-lg", style: tmp.title, children: null };
  const intl = task(1114).intl;
  obj.children = intl.string(navigation(2690).RRamMH);
  const items1 = [closure_4(task(4556).Text, obj), , ];
  obj1 = { variant: "text-md/medium", color: "text-strong", children: null };
  const intl2 = task(1114).intl;
  obj1.children = intl2.string(navigation(2690).I2Ctk1);
  items1[1] = closure_4(task(4556).Text, obj1);
  const obj2 = { spacing: navigation(576).space.PX_8, children: null };
  const flow_context = task.flow_context;
  let mapped;
  if (flow_context != null) {
    const tasks = flow_context.tasks;
    if (tasks != null) {
      mapped = tasks.map((task_type, index) => {
        const obj = { tip: task(17867).TASK_TYPE_TO_TITLE[task_type.task_type], index: index + 1 };
        return closure_1_4(navigation(8579), obj, task_type.task_type);
      });
    }
  }
  const obj3 = { children: null };
  const obj4 = { children: null };
  const items2 = [closure_4(task(5687).TableRowGroup, { hasIcons: true, children: mapped }), ];
  const obj5 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const intl3 = tmp2(1114).intl;
  obj5.children = intl3.string(navigation(2690)["0TnUrG"]);
  items2[1] = closure_4(task(4556).Text, obj5);
  obj2.children = items2;
  items1[2] = closure_5(task(4973).Stack, obj2);
  obj.children = items1;
  obj4.children = closure_5(task(4973).Stack, obj);
  const items3 = [closure_4(task(8422).ModalContent, obj4), ];
  const obj6 = { children: null };
  const items4 = [closure_4(navigation(17874), {}), ];
  const obj7 = { variant: "primary", text: null, onPress: null };
  const intl4 = tmp2(1114).intl;
  obj7.text = intl4.string(navigation(2690).Ks6opt);
  obj7.onPress = callback;
  items4[1] = closure_4(task(10996).ModalActionButton, obj7);
  obj6.children = items4;
  items3[1] = closure_5(task(11926).ModalFooter, obj6);
  obj3.children = items3;
  return closure_5(task(8421).ModalScreen, obj3);
};