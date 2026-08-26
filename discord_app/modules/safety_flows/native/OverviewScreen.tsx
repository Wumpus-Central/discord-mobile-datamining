// === Module 17298: OverviewScreen ===

// Module 17298 (OverviewScreen)
import closure_3 from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ content: { margin: "auto", overflow: "visible", justifyContent: "center", textAlign: "center", alignItems: "center" }, title: { textAlign: "center", textTransform: "uppercase", lineHeight: 50 } });
const result = require("set").fileFinishedImporting("modules/safety_flows/native/OverviewScreen.tsx");

export default function OverviewScreen() {
  let tmp = callback2();
  let obj = task(17299);
  task = obj.useSafetyFlowTask().task;
  obj1 = task(1500);
  const navigation = obj1.useNavigation();
  const items = [task, navigation];
  const callback = React.useCallback(() => {
    const screensForTaskType = task(closure_1_2[5]).getScreensForTaskType(task.task_type);
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
  obj = { spacing: navigation(712).space.PX_16, style: tmp.content, children: null };
  obj = { variant: "display-lg", style: tmp.title, children: null };
  const intl = task(1236).intl;
  obj[2] = intl.string(navigation(2631).RRamMH);
  const items1 = [callback(task(4440).Text, obj), , ];
  obj1 = { variant: "text-md/medium", color: "text-strong", children: null };
  const intl2 = task(1236).intl;
  obj1[2] = intl2.string(navigation(2631).I2Ctk1);
  items1[1] = callback(task(4440).Text, obj1);
  const obj2 = { spacing: navigation(712).space.PX_8, children: null };
  const flow_context = task.flow_context;
  let mapped;
  if (flow_context != null) {
    const tasks = flow_context.tasks;
    if (tasks != null) {
      mapped = tasks.map((task_type) => {
        const obj = { tip: task(17294).TASK_TYPE_TO_TITLE[task_type.task_type], index: arg1 + 1 };
        return callback(navigation(8171), obj, task_type.task_type);
      });
    }
  }
  const obj3 = { children: null };
  const obj4 = { children: null };
  const items2 = [callback(task(5939).TableRowGroup, { hasIcons: true, children: mapped }), ];
  const obj5 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const intl3 = tmp2(1236).intl;
  obj5[2] = intl3.string(navigation(2631)["0TnUrG"]);
  items2[1] = callback(task(4440).Text, obj5);
  obj2[1] = items2;
  items1[2] = closure_5(task(4877).Stack, obj2);
  obj[2] = items1;
  obj4[0] = closure_5(task(4877).Stack, obj);
  const items3 = [callback(task(8020).ModalContent, obj4), ];
  const obj6 = { children: null };
  const items4 = [callback(navigation(17301), {}), ];
  const obj7 = { variant: "primary", text: null, onPress: null };
  const intl4 = tmp2(1236).intl;
  obj7[1] = intl4.string(navigation(2631).Ks6opt);
  obj7[2] = callback;
  items4[1] = callback(task(11335).ModalActionButton, obj7);
  obj6[0] = items4;
  items3[1] = closure_5(task(11567).ModalFooter, obj6);
  obj3[0] = items3;
  return closure_5(task(8019).ModalScreen, obj3);
};