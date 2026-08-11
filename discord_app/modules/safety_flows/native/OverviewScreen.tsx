// discord_app/modules/safety_flows/native/OverviewScreen.tsx
import set from "set";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ content: { margin: "auto", overflow: "visible", justifyContent: "center", textAlign: "center", alignItems: "center" }, title: { textAlign: "center", textTransform: "uppercase", lineHeight: 50 } });
const result = require("createCacheKey").fileFinishedImporting("modules/safety_flows/native/OverviewScreen.tsx");

export default function OverviewScreen() {
  let tmp = callback2();
  let obj = task(16967);
  task = obj.useSafetyFlowTask().task;
  let obj1 = task(1499);
  const navigation = obj1.useNavigation();
  const items = [task, navigation];
  const callback = React.useCallback(() => {
    const screensForTaskType = task(outer1_2[5]).getScreensForTaskType(task.task_type);
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
  obj = { spacing: null, style: null, children: null };
  obj[0] = navigation(712).space.PX_16;
  obj[1] = tmp.content;
  obj = { variant: "display-lg", style: tmp.title, children: null };
  const intl = task(1236).intl;
  obj[2] = intl.string(navigation(2565).RRamMH);
  const items1 = [callback(task(4299).Text, obj), , ];
  obj1 = { variant: "text-md/medium", color: "text-strong", children: null };
  const intl2 = task(1236).intl;
  obj1[2] = intl2.string(navigation(2565).I2Ctk1);
  items1[1] = callback(task(4299).Text, obj1);
  const obj2 = { spacing: null, children: null };
  obj2[0] = navigation(712).space.PX_8;
  const flow_context = task.flow_context;
  let mapped;
  if (flow_context != null) {
    const tasks = flow_context.tasks;
    if (tasks != null) {
      mapped = tasks.map((task_type) => {
        const obj = { tip: null, index: null };
        obj[0] = task(16962).TASK_TYPE_TO_TITLE[task_type.task_type];
        obj[1] = arg1 + 1;
        return callback(navigation(7956), obj, task_type.task_type);
      });
    }
  }
  const obj3 = { children: null };
  const obj4 = { children: null };
  const items2 = [callback(task(5767).TableRowGroup, { hasIcons: true, children: mapped }), ];
  const obj5 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const intl3 = tmp2(1236).intl;
  obj5[2] = intl3.string(navigation(2565)["0TnUrG"]);
  items2[1] = callback(task(4299).Text, obj5);
  obj2[1] = items2;
  items1[2] = closure_5(task(4712).Stack, obj2);
  obj[2] = items1;
  obj4[0] = closure_5(task(4712).Stack, obj);
  const items3 = [callback(task(7810).ModalContent, obj4), ];
  const obj6 = { children: null };
  const items4 = [callback(navigation(16969), {}), ];
  const obj7 = { variant: "primary", text: null, onPress: null };
  const intl4 = tmp2(1236).intl;
  obj7[1] = intl4.string(navigation(2565).Ks6opt);
  obj7[2] = callback;
  items4[1] = callback(task(10271).ModalActionButton, obj7);
  obj6[0] = items4;
  items3[1] = closure_5(task(11339).ModalFooter, obj6);
  obj3[0] = items3;
  return closure_5(task(7809).ModalScreen, obj3);
};