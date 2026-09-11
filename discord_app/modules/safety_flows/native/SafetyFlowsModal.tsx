// === Module 17952: SafetyFlowsModal ===

// Module 17952 (SafetyFlowsModal)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_flows/native/SafetyFlowsModal.tsx");

export default function SafetyFlowsModal(initialRouteName) {
  const tmp = _slicedToArray(noop.useState(initialRouteName.task), 2);
  const task = tmp[0];
  const setTask = tmp[1];
  let obj = task(7073);
  const items = [task];
  const navigatorScreens = obj.useNavigatorScreens(() => {
    obj = { [closure_1_0(closure_1_2[4]).SafetyFlowScreens.OVERVIEW]: obj, [closure_1_0(closure_1_2[4]).SafetyFlowScreens.ENTER_EMAIL]: obj };
    obj = {
      headerLeft() {
        return null;
      },
      headerShown: false,
      render() {
        return closure_1_5(setTask(17953), {});
      }
    };
    obj = {
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_5(setTask(17957), {});
      }
    };
    const obj1 = {
      headerLeft: first(5675).getHeaderBackButton(),
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_5(setTask(17959), {});
      }
    };
    obj[first(17949).SafetyFlowScreens.VERIFY_EMAIL] = obj1;
    obj[first(17949).SafetyFlowScreens.UPDATE_APP] = {
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_5(setTask(17961), {});
      }
    };
    obj[first(17949).SafetyFlowScreens.AGE_VERIFICATION] = {
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_5(setTask(17962), {});
      }
    };
    obj[first(17949).SafetyFlowScreens.PARENTAL_CONSENT_CONNECTION] = {
      headerShown: false,
      customNavbar() {
        return closure_1_5(task(17963).ParentalConsentConnectionNavbar, {});
      },
      render() {
        return closure_1_5(setTask(17964), {});
      }
    };
    obj[first(17949).SafetyFlowScreens.APP_STORE_PARENTAL_REVOCATION] = {
      headerShown: false,
      render() {
        return closure_1_5(setTask(17969), {});
      }
    };
    obj[first(17949).SafetyFlowScreens.ERROR] = {
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_5(setTask(17970), {});
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
  obj = { value: memo1, children: jsx(task(14227).StepModal, { initialRouteName: initialRouteName.initialScreen, screens: navigatorScreens, steps: memo }) };
  return jsx(task(17954).SafetyFlowTaskContext.Provider, { value: memo1, children: jsx(task(14227).StepModal, { initialRouteName: initialRouteName.initialScreen, screens: navigatorScreens, steps: memo }) });
};