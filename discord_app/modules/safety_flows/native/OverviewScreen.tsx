// === Module 18631: OverviewScreen ===

// Module 18631 (OverviewScreen)
import SafetyFlowsUtils from "SafetyFlowsUtils" /* 18633 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5092);
let closure_6 = createStyles.createStyles({ content: { margin: "auto", overflow: "visible", justifyContent: "center", textAlign: "center", alignItems: "center" }, title: { textAlign: "center", textTransform: "uppercase", lineHeight: 50 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_flows/native/OverviewScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function OverviewScreen() {
  const cResult = task(576).c(25);
  const tmp4 = closure_6();
  let obj = task(576);
  task = task(18632).useSafetyFlowTask().task;
  const obj2 = task(18632);
  const navigation = task(1503).useNavigation();
  if (cResult[0] === navigation) {
    if (cResult[1] === task.task_type) {
      let tmp6 = cResult[2];
    }
    const _Symbol = Symbol;
    ({ content, title } = tmp4);
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(navigation(2862).RRamMH);
      cResult[3] = stringResult;
      let tmp8 = stringResult;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] !== tmp4.title) {
      const obj4 = { variant: "display-lg", style: title, children: tmp8 };
      const tmp13 = closure_4(tmp(5088).Text, obj4);
      cResult[4] = tmp4.title;
      cResult[5] = tmp13;
      let tmp11 = tmp13;
    } else {
      tmp11 = cResult[5];
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { variant: "text-md/medium", color: "text-strong", children: null };
      const intl2 = tmp(1126).intl;
      obj5.children = intl2.string(navigation(2862).I2Ctk1);
      const tmp17 = closure_4(tmp(5088).Text, obj5);
      cResult[6] = tmp17;
      let tmp14 = tmp17;
    } else {
      tmp14 = cResult[6];
    }
    const flow_context = task.flow_context;
    let tasks;
    if (flow_context != null) {
      tasks = flow_context.tasks;
    }
    if (cResult[7] !== tasks) {
      const flow_context2 = task.flow_context;
      let mapped;
      if (flow_context2 != null) {
        const tasks1 = flow_context2.tasks;
        if (tasks1 != null) {
          mapped = tasks1.map((task_type, index) => {
            const obj = { tip: task(18627).TASK_TYPE_TO_TITLE[task_type.task_type], index: index + 1 };
            return closure_1_4(navigation(7703), obj, task_type.task_type);
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
      let tmp20 = mapped;
    } else {
      tmp20 = cResult[8];
    }
    if (cResult[9] !== tmp20) {
      const obj6 = { hasIcons: true, children: tmp20 };
      const tmp25 = closure_4(tmp(6264).TableRowGroup, obj6);
      cResult[9] = tmp20;
      cResult[10] = tmp25;
      let tmp23 = tmp25;
    } else {
      tmp23 = cResult[10];
    }
    const _Symbol3 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const obj7 = { variant: "text-xs/medium", color: "text-muted", children: null };
      const intl3 = tmp(1126).intl;
      obj7.children = intl3.string(navigation(2862)["0TnUrG"]);
      const tmp29 = closure_4(tmp(5088).Text, obj7);
      cResult[11] = tmp29;
      let tmp26 = tmp29;
    } else {
      tmp26 = cResult[11];
    }
    if (cResult[12] !== tmp23) {
      const obj8 = { spacing: navigation(587).space.PX_8, children: null };
      const items = [tmp23, tmp26];
      obj8.children = items;
      const tmp33 = closure_5(tmp(5377).Stack, obj8);
      cResult[12] = tmp23;
      cResult[13] = tmp33;
      let tmp30 = tmp33;
    } else {
      tmp30 = cResult[13];
    }
    if (cResult[14] === tmp4.content) {
      if (cResult[15] === tmp11) {
        if (cResult[16] === tmp30) {
          let tmp34 = cResult[17];
        }
        const _Symbol4 = Symbol;
        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp42 = closure_4(navigation(18634), {});
          cResult[18] = tmp42;
          let tmp39 = tmp42;
        } else {
          tmp39 = cResult[18];
        }
        const _Symbol5 = Symbol;
        if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = tmp(1126).intl;
          const stringResult1 = intl4.string(navigation(2862).Ks6opt);
          cResult[19] = stringResult1;
          let tmp43 = stringResult1;
        } else {
          tmp43 = cResult[19];
        }
        if (cResult[20] !== tmp6) {
          const obj9 = { children: null };
          const items1 = [tmp39, ];
          const obj10 = { variant: "primary", text: tmp43, onPress: tmp6 };
          items1[1] = closure_4(tmp(11592).ModalActionButton, obj10);
          obj9.children = items1;
          const tmp49 = closure_5(tmp(11539).ModalFooter, obj9);
          cResult[20] = tmp6;
          cResult[21] = tmp49;
          let tmp46 = tmp49;
        } else {
          tmp46 = cResult[21];
        }
        if (cResult[22] === tmp34) {
          if (cResult[23] === tmp46) {
            let tmp50 = cResult[24];
          }
          return tmp50;
        }
        const obj11 = { children: null };
        const items2 = [tmp34, tmp46];
        obj11.children = items2;
        const tmp52 = closure_5(tmp(7514).ModalScreen, obj11);
        cResult[22] = tmp34;
        cResult[23] = tmp46;
        cResult[24] = tmp52;
        tmp50 = tmp52;
      }
    }
    const obj12 = { children: null };
    const obj13 = { spacing: navigation(587).space.PX_16, style: content, children: null };
    const items3 = [tmp11, tmp14, tmp30];
    obj13.children = items3;
    obj12.children = closure_5(tmp(5377).Stack, obj13);
    const tmp38 = closure_4(tmp(7515).ModalContent, obj12);
    cResult[14] = tmp4.content;
    cResult[15] = tmp11;
    cResult[16] = tmp30;
    cResult[17] = tmp38;
    tmp34 = tmp38;
  }
  const fn = function t() {
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
  };
  cResult[0] = navigation;
  cResult[1] = task.task_type;
  cResult[2] = fn;
  tmp6 = fn;
  const obj3 = task(1503);
}) : (function OverviewScreen() {
  let tmp = closure_6();
  task = task(18632).useSafetyFlowTask().task;
  let obj = task(18632);
  const navigation = task(1503).useNavigation();
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
  const obj3 = { spacing: navigation(587).space.PX_16, style: tmp.content, children: null };
  const obj4 = { variant: "display-lg", style: tmp.title, children: null };
  const intl = task(1126).intl;
  obj4.children = intl.string(navigation(2862).RRamMH);
  const items1 = [closure_4(task(5088).Text, obj4), , ];
  const obj5 = { variant: "text-md/medium", color: "text-strong", children: null };
  const intl2 = task(1126).intl;
  obj5.children = intl2.string(navigation(2862).I2Ctk1);
  items1[1] = closure_4(task(5088).Text, obj5);
  const obj6 = { spacing: navigation(587).space.PX_8, children: null };
  const flow_context = task.flow_context;
  let mapped;
  if (flow_context != null) {
    const tasks = flow_context.tasks;
    if (tasks != null) {
      mapped = tasks.map((task_type, index) => {
        const obj = { tip: task(18627).TASK_TYPE_TO_TITLE[task_type.task_type], index: index + 1 };
        return closure_1_4(navigation(7703), obj, task_type.task_type);
      });
    }
  }
  const obj7 = { children: null };
  const obj8 = { children: null };
  const items2 = [closure_4(task(6264).TableRowGroup, { hasIcons: true, children: mapped }), ];
  const obj9 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const intl3 = tmp2(1126).intl;
  obj9.children = intl3.string(navigation(2862)["0TnUrG"]);
  items2[1] = closure_4(task(5088).Text, obj9);
  obj6.children = items2;
  items1[2] = closure_5(task(5377).Stack, obj6);
  obj3.children = items1;
  obj8.children = closure_5(task(5377).Stack, obj3);
  const items3 = [closure_4(task(7515).ModalContent, obj8), ];
  const obj10 = { children: null };
  const items4 = [closure_4(navigation(18634), {}), ];
  const obj11 = { variant: "primary", text: null, onPress: null };
  const intl4 = tmp2(1126).intl;
  obj11.text = intl4.string(navigation(2862).Ks6opt);
  obj11.onPress = callback;
  items4[1] = closure_4(task(11592).ModalActionButton, obj11);
  obj10.children = items4;
  items3[1] = closure_5(task(11539).ModalFooter, obj10);
  obj7.children = items3;
  return closure_5(task(7514).ModalScreen, obj7);
});