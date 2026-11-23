// discord_app/modules/safety_flows/native/SafetyFlowsModal.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_flows/native/SafetyFlowsModal.tsx");

export default function SafetyFlowsModal(initialRouteName) {
  task = undefined;
  setTask = undefined;
  [task, setTask] = noop.useState(initialRouteName.task);
  items = [task];
  const navigatorScreens = task(7092).useNavigatorScreens(() => {
    const obj = {
      [closure_1_0(closure_1_2[4]).SafetyFlowScreens.OVERVIEW]: obj2,
      [closure_1_0(closure_1_2[4]).SafetyFlowScreens.ENTER_EMAIL]: obj3,
    };
    const obj4 = {
      headerLeft: first(7095).getHeaderBackButton(),
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_5(setTask(20148), {});
      },
    };
    obj[first(20138).SafetyFlowScreens.VERIFY_EMAIL] = obj4;
    obj[first(20138).SafetyFlowScreens.UPDATE_APP] = {
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_5(setTask(20150), {});
      },
    };
    obj[first(20138).SafetyFlowScreens.AGE_VERIFICATION] = {
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_5(setTask(20151), {});
      },
    };
    obj[first(20138).SafetyFlowScreens.PARENTAL_CONSENT_CONNECTION] = {
      headerShown: false,
      customNavbar() {
        return closure_1_5(task(20152).ParentalConsentConnectionNavbar, {});
      },
      render() {
        return closure_1_5(setTask(20153), {});
      },
    };
    obj[first(20138).SafetyFlowScreens.APP_STORE_PARENTAL_REVOCATION] = {
      headerShown: false,
      render() {
        return closure_1_5(setTask(20161), {});
      },
    };
    obj[first(20138).SafetyFlowScreens.ERROR] = {
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_5(setTask(20162), {});
      },
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
  let obj = task(7092);
  return jsx(task(20143).SafetyFlowTaskContext.Provider, {
    value: memo1,
    children: jsx(task(12276).StepModal, {
      initialRouteName: initialRouteName.initialScreen,
      screens: navigatorScreens,
      steps: memo,
    }),
  });
}
