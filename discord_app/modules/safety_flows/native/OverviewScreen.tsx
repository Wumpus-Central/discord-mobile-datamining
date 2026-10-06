// === Module 18108: OverviewScreen ===

// Module 18108 (OverviewScreen)
import SafetyFlowsUtils from "SafetyFlowsUtils" /* 18110 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation;

let closure_4;
let hasOwnProperty;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ content: { margin: "auto", overflow: "visible", justifyContent: "center", textAlign: "center", alignItems: "center" }, title: { textAlign: "center", textTransform: "uppercase", lineHeight: 50 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let Stack2;
  let content;
  let intl2;
  let intl3;
  let items;
  let items1;
  let items2;
  let items3;
  let obj13;
  let task;
  let title;
  let tmp = task;
  let obj = task(576);
  const cResult = obj.c(25);
  const tmp4 = closure_6();
  const obj2 = task(18109);
  task = obj2.useSafetyFlowTask().task;
  const obj3 = task(1490);
  navigation = obj3.useNavigation();
  if (cResult[0] === navigation) {
    let tmp6;
    let tmp8;
    let tmp11;
    let tmp14;
    let tmp21;
    let tmp24;
    let tmp27;
    let tmp31;
    if (cResult[1] === task.task_type) {
      tmp6 = cResult[2];
    }
    const _Symbol = Symbol;
    ({ content, title } = tmp4);
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(navigation(2815).RRamMH);
      cResult[3] = stringResult;
      tmp8 = stringResult;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] !== tmp4.title) {
      const obj4 = { variant: "display-lg", style: title, children: tmp8 };
      const tmp13 = closure_4(tmp(4892).Text, obj4);
      cResult[4] = tmp4.title;
      cResult[5] = tmp13;
      tmp11 = tmp13;
    } else {
      tmp11 = cResult[5];
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { variant: "text-md/medium", color: "text-strong", children: intl2.string(navigation(2815).I2Ctk1) };
      const Text = tmp(4892).Text;
      intl2 = tmp(1126).intl;
      const tmp17 = closure_4(Text, obj5);
      cResult[6] = tmp17;
      tmp14 = tmp17;
    } else {
      tmp14 = cResult[6];
    }
    const flow_context = task.flow_context;
    let tasks;
    const tmp18 = cResult[7];
    if (flow_context != null) {
      tasks = flow_context.tasks;
    }
    if (tmp18 !== tasks) {
      const flow_context2 = task.flow_context;
      let mapped;
      if (flow_context2 != null) {
        const tasks1 = flow_context2.tasks;
        if (tasks1 != null) {
          mapped = tasks1.map((task_type, index) => {
            const obj = { tip: task(dependencyMap[12]).TASK_TYPE_TO_TITLE[task_type.task_type], index: index + 1 };
            const tmp = navigation(dependencyMap[11]);
            return closure_1_4(tmp, obj, task_type.task_type);
          });
        }
      }
      const flow_context3 = task.flow_context;
      let tasks2;
      if (flow_context3 != null) {
        tasks2 = flow_context3.tasks;
      }
      cResult[7] = tasks2;
      cResult[8] = mapped;
      tmp21 = mapped;
    } else {
      tmp21 = cResult[8];
    }
    if (cResult[9] !== tmp21) {
      const obj6 = { hasIcons: true, children: tmp21 };
      const tmp26 = closure_4(tmp(6081).TableRowGroup, obj6);
      cResult[9] = tmp21;
      cResult[10] = tmp26;
      tmp24 = tmp26;
    } else {
      tmp24 = cResult[10];
    }
    const _Symbol3 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const obj7 = { variant: "text-xs/medium", color: "text-muted", children: intl3.string(navigation(2815)["0TnUrG"]) };
      const Text2 = tmp(4892).Text;
      intl3 = tmp(1126).intl;
      const tmp30 = closure_4(Text2, obj7);
      cResult[11] = tmp30;
      tmp27 = tmp30;
    } else {
      tmp27 = cResult[11];
    }
    if (cResult[12] !== tmp24) {
      const obj8 = { spacing: navigation(587).space.PX_8, children: items };
      const Stack = tmp(5600).Stack;
      items = [tmp24, tmp27];
      const tmp34 = closure_5(Stack, obj8);
      cResult[12] = tmp24;
      cResult[13] = tmp34;
      tmp31 = tmp34;
    } else {
      tmp31 = cResult[13];
    }
    if (cResult[14] === tmp4.content) {
      if (cResult[15] === tmp11) {
        let tmp35;
        let tmp40;
        let tmp44;
        let tmp47;
        if (cResult[16] === tmp31) {
          tmp35 = cResult[17];
        }
        const _Symbol4 = Symbol;
        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp43 = closure_4(navigation(18111), {});
          cResult[18] = tmp43;
          tmp40 = tmp43;
        } else {
          tmp40 = cResult[18];
        }
        const _Symbol5 = Symbol;
        if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = tmp(1126).intl;
          const stringResult1 = intl4.string(navigation(2815).Ks6opt);
          cResult[19] = stringResult1;
          tmp44 = stringResult1;
        } else {
          tmp44 = cResult[19];
        }
        if (cResult[20] !== tmp6) {
          const obj9 = { children: items1 };
          items1 = [tmp40, ];
          const ModalFooter = tmp(11549).ModalFooter;
          const obj10 = { variant: "primary", text: tmp44, onPress: tmp6 };
          items1[1] = closure_4(tmp(10742).ModalActionButton, obj10);
          const tmp50 = closure_5(ModalFooter, obj9);
          cResult[20] = tmp6;
          cResult[21] = tmp50;
          tmp47 = tmp50;
        } else {
          tmp47 = cResult[21];
        }
        if (cResult[22] === tmp35) {
          let tmp51;
          if (cResult[23] === tmp47) {
            tmp51 = cResult[24];
          }
          return tmp51;
        }
        const obj11 = { children: items2 };
        items2 = [tmp35, tmp47];
        const tmp53 = closure_5(tmp(8128).ModalScreen, obj11);
        cResult[22] = tmp35;
        cResult[23] = tmp47;
        cResult[24] = tmp53;
        tmp51 = tmp53;
      }
    }
    const obj12 = { children: closure_5(Stack2, obj13) };
    const ModalContent = tmp(8129).ModalContent;
    obj13 = { spacing: navigation(587).space.PX_16, style: content, children: items3 };
    Stack2 = tmp(5600).Stack;
    items3 = [tmp11, tmp14, tmp31];
    const tmp39 = closure_4(ModalContent, obj12);
    cResult[14] = tmp4.content;
    cResult[15] = tmp11;
    cResult[16] = tmp31;
    cResult[17] = tmp39;
    tmp35 = tmp39;
  }
  const fn = function t() {
    const obj = SafetyFlowsUtils;
    const screensForTaskType = obj.getScreensForTaskType(task.task_type);
    const tmp = null != screensForTaskType && screensForTaskType.length > 0 && null != screensForTaskType[0];
    if (tmp) {
      navigation.push(screensForTaskType[0]);
    }
  };
  cResult[0] = navigation;
  cResult[1] = task.task_type;
  cResult[2] = fn;
  tmp6 = fn;
}) : (() => {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let items3;
  let items4;
  let task;
  let tmp = closure_6();
  let obj = task(18109);
  task = obj.useSafetyFlowTask().task;
  const obj2 = task(1490);
  navigation = obj2.useNavigation();
  const items = [task, navigation];
  const callback = react.useCallback(() => {
    const obj = SafetyFlowsUtils;
    const screensForTaskType = obj.getScreensForTaskType(task.task_type);
    const tmp = null != screensForTaskType && screensForTaskType.length > 0 && null != screensForTaskType[0];
    if (tmp) {
      navigation.push(screensForTaskType[0]);
    }
  }, items);
  const ModalScreen = task(8128).ModalScreen;
  const ModalContent = task(8129).ModalContent;
  const obj3 = { spacing: navigation(587).space.PX_16, style: tmp.content, children: items1 };
  const Stack = task(5600).Stack;
  const obj4 = { variant: "display-lg", style: tmp.title, children: intl.string(navigation(2815).RRamMH) };
  const Text = task(4892).Text;
  intl = task(1126).intl;
  items1 = [closure_4(Text, obj4), , ];
  const obj5 = { variant: "text-md/medium", color: "text-strong", children: intl2.string(navigation(2815).I2Ctk1) };
  const Text2 = task(4892).Text;
  intl2 = task(1126).intl;
  items1[1] = closure_4(Text2, obj5);
  const obj6 = { spacing: navigation(587).space.PX_8, children: items2 };
  const Stack2 = task(5600).Stack;
  const flow_context = task.flow_context;
  let mapped;
  const TableRowGroup = task(6081).TableRowGroup;
  if (flow_context != null) {
    const tasks = flow_context.tasks;
    if (tasks != null) {
      mapped = tasks.map((task_type, index) => {
        const obj = { tip: task(dependencyMap[12]).TASK_TYPE_TO_TITLE[task_type.task_type], index: index + 1 };
        const tmp = navigation(dependencyMap[11]);
        return closure_1_4(tmp, obj, task_type.task_type);
      });
    }
  }
  const obj7 = { children: items3 };
  const obj8 = { children: closure_5(Stack, obj3) };
  items2 = [closure_4(TableRowGroup, { hasIcons: true, children: mapped }), ];
  const obj9 = { variant: "text-xs/medium", color: "text-muted", children: intl3.string(navigation(2815)["0TnUrG"]) };
  const Text3 = tmp2(4892).Text;
  intl3 = tmp2(1126).intl;
  items2[1] = closure_4(Text3, obj9);
  items1[2] = closure_5(Stack2, obj6);
  items3 = [closure_4(ModalContent, obj8), ];
  const obj10 = { children: items4 };
  const ModalFooter = tmp2(11549).ModalFooter;
  items4 = [closure_4(navigation(18111), {}), ];
  const obj11 = { variant: "primary", text: intl4.string(navigation(2815).Ks6opt), onPress: callback };
  const ModalActionButton = tmp2(10742).ModalActionButton;
  intl4 = tmp2(1126).intl;
  items4[1] = closure_4(ModalActionButton, obj11);
  items3[1] = closure_5(ModalFooter, obj10);
  return closure_5(ModalScreen, obj7);
});
const result = size.fileFinishedImporting("modules/safety_flows/native/OverviewScreen.tsx");

export default tmp3;