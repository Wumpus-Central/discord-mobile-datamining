// === Module 16729: SafetyFlowsModal ===

// Module 16729 (SafetyFlowsModal)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/safety_flows/native/SafetyFlowsModal.tsx");

export default function SafetyFlowsModal(initialRouteName) {
  let first;
  let closure_1;
  const tmp = callback(React.useState(initialRouteName.task), 2);
  first = tmp[0];
  closure_1 = tmp[1];
  let obj = first(5574);
  let items = [first];
  const navigatorScreens = obj.useNavigatorScreens(() => {
    obj = { [closure_0(closure_2[4]).SafetyFlowScreens.OVERVIEW]: obj, [closure_0(closure_2[4]).SafetyFlowScreens.ENTER_EMAIL]: obj };
    obj = {
      headerLeft() {
        return null;
      },
      headerShown: false,
      render() {
        return callback3(callback2(16730), {});
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
        return callback3(callback2(16734), {});
      }
    };
    const obj1 = { headerLeft: null, headerTitle: null, render: null };
    obj1[0] = first(5147).getHeaderBackButton();
    obj1[1] = function headerTitle() {
      return null;
    };
    obj1[2] = function render() {
      return callback3(callback2(16736), {});
    };
    obj[first(16726).SafetyFlowScreens.VERIFY_EMAIL] = obj1;
    obj[first(16726).SafetyFlowScreens.UPDATE_APP] = {
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(16738), {});
      }
    };
    obj[first(16726).SafetyFlowScreens.AGE_VERIFICATION] = {
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(16739), {});
      }
    };
    obj[first(16726).SafetyFlowScreens.PARENTAL_CONSENT_CONNECTION] = {
      headerShown: false,
      customNavbar() {
        return callback3(callback(16740).ParentalConsentConnectionNavbar, {});
      },
      render() {
        return callback3(callback2(16741), {});
      }
    };
    obj[first(16726).SafetyFlowScreens.ERROR] = {
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(16746), {});
      }
    };
    return obj;
  }, []);
  const items1 = [first];
  const memo = React.useMemo(() => {
    let flow_context;
    if (first != null) {
      flow_context = tmp.flow_context;
    }
    if (null == flow_context) {
      return [];
    } else {
      const tasks = tmp.flow_context.tasks;
      if (1 === tasks.length) {
        if (tasks[0].task_type === first(outer1_2[4]).TaskType.PARENTAL_CONSENT_CONNECTION) {
          let items = [];
        }
        return items;
      }
      const tasks1 = tmp.flow_context.tasks;
      const mapped = tasks1.map((task_type) => callback(table[14]).getScreensForTaskType(task_type.task_type));
      const found = mapped.filter((arg0) => null != arg0);
      items = found.flat();
    }
  }, items);
  const memo1 = React.useMemo(() => ({ task: first, setTask: closure_1 }), items1);
  obj = { value: memo1, children: null };
  obj[1] = jsx(first(13236).StepModal, { initialRouteName: initialRouteName.initialScreen, screens: navigatorScreens, steps: memo });
  return jsx(first(16731).SafetyFlowTaskContext.Provider, { value: memo1, children: null });
};