// === Module 17687: OverviewScreen ===

// Module 17687 (OverviewScreen)
import closure_3 from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ content: { margin: "auto", overflow: "visible", justifyContent: "center", textAlign: "center", alignItems: "center" }, title: { textAlign: "center", textTransform: "uppercase", lineHeight: 50 } });
const result = require("set").fileFinishedImporting("modules/safety_flows/native/OverviewScreen.tsx");

export default function OverviewScreen() {
  let tmp = callback2();
  let obj = task(17688);
  task = obj.useSafetyFlowTask().task;
  obj1 = task(1498);
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
  obj = { spacing: navigation(709).space.PX_16, style: tmp.content, children: null };
  obj = { variant: "display-lg", style: tmp.title, children: null };
  const intl = task(1233).intl;
  obj[2] = intl.string(navigation(2662).RRamMH);
  const items1 = [callback(task(4474).Text, obj), , ];
  obj1 = { variant: "text-md/medium", color: "text-strong", children: null };
  const intl2 = task(1233).intl;
  obj1[2] = intl2.string(navigation(2662).I2Ctk1);
  items1[1] = callback(task(4474).Text, obj1);
  const obj2 = { spacing: navigation(709).space.PX_8, children: null };
  const flow_context = task.flow_context;
  let mapped;
  if (flow_context != null) {
    const tasks = flow_context.tasks;
    if (tasks != null) {
      mapped = tasks.map((task_type) => {
        const obj = { tip: task(17683).TASK_TYPE_TO_TITLE[task_type.task_type], index: arg1 + 1 };
        return callback(navigation(8742), obj, task_type.task_type);
      });
    }
  }
  const obj3 = { children: null };
  const obj4 = { children: null };
  const items2 = [callback(task(6000).TableRowGroup, { hasIcons: true, children: mapped }), ];
  const obj5 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const intl3 = tmp2(1233).intl;
  obj5[2] = intl3.string(navigation(2662)["0TnUrG"]);
  items2[1] = callback(task(4474).Text, obj5);
  obj2[1] = items2;
  items1[2] = closure_5(task(4926).Stack, obj2);
  obj[2] = items1;
  obj4[0] = closure_5(task(4926).Stack, obj);
  const items3 = [callback(task(8708).ModalContent, obj4), ];
  const obj6 = { children: null };
  const items4 = [callback(navigation(17690), {}), ];
  const obj7 = { variant: "primary", text: null, onPress: null };
  const intl4 = tmp2(1233).intl;
  obj7[1] = intl4.string(navigation(2662).Ks6opt);
  obj7[2] = callback;
  items4[1] = callback(task(10954).ModalActionButton, obj7);
  obj6[0] = items4;
  items3[1] = closure_5(task(11722).ModalFooter, obj6);
  obj3[0] = items3;
  return closure_5(task(8707).ModalScreen, obj3);
};