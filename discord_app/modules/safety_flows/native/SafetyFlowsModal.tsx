// === Module 20351: SafetyFlowsModal ===

// Module 20351 (SafetyFlowsModal)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_flows/native/SafetyFlowsModal.tsx");

export default function SafetyFlowsModal(initialRouteName) {
  task = undefined;
  setTask = undefined;
  [task, setTask] = noop.useState(initialRouteName.task);
  items = [task];
  const navigatorScreens = task(7306).useNavigatorScreens(() => {
    const obj = { [closure_1_0(closure_1_2[4]).SafetyFlowScreens.OVERVIEW]: obj2, [closure_1_0(closure_1_2[4]).SafetyFlowScreens.ENTER_EMAIL]: obj3 };
    const obj4 = {
      headerLeft: first(7139).getHeaderBackButton(),
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_5(setTask(20358), {});
      }
    };
    obj[first(20347).SafetyFlowScreens.VERIFY_EMAIL] = obj4;
    obj[first(20347).SafetyFlowScreens.UPDATE_APP] = {
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_5(setTask(20360), {});
      }
    };
    obj[first(20347).SafetyFlowScreens.AGE_VERIFICATION] = {
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_5(setTask(20361), {});
      }
    };
    obj[first(20347).SafetyFlowScreens.PARENTAL_CONSENT_CONNECTION] = {
      headerShown: false,
      customNavbar() {
        return closure_1_5(task(20362).ParentalConsentConnectionNavbar, {});
      },
      render() {
        return closure_1_5(setTask(20363), {});
      }
    };
    obj[first(20347).SafetyFlowScreens.APP_STORE_PARENTAL_REVOCATION] = {
      headerShown: false,
      render() {
        return closure_1_5(setTask(20371), {});
      }
    };
    obj[first(20347).SafetyFlowScreens.ERROR] = {
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_5(setTask(20372), {});
      }
    };
    return obj;
  }, []);
  const items1 = [task];
  const memo = noop.useMemo(() => {
    let flow_context;
    if (first != null) {
      flow_context = first.flow_context;
    }
    if (null == flow_context) {
      return [];
    } else {
      const tasks = first.flow_context.tasks;
      if (1 !== tasks.length) {
        const tasks1 = first.flow_context.tasks;
        const mapped = tasks1.map((task_type) => task(dependencyMap[15]).getScreensForTaskType(task_type.task_type));
        const found = mapped.filter((item) => null != item);
        let flatResult = found.flat();
      } else {
        flatResult = [];
      }
      return flatResult;
    }
  }, items);
  const memo1 = noop.useMemo(() => ({ task, setTask }), items1);
  let obj = task(7306);
  return jsx(task(20353).SafetyFlowTaskContext.Provider, { value: memo1, children: jsx(task(13432).StepModal, { initialRouteName: initialRouteName.initialScreen, screens: navigatorScreens, steps: memo }) });
};