// === Module 17087: SafetyFlowsModal ===

// Module 17087 (SafetyFlowsModal)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/safety_flows/native/SafetyFlowsModal.tsx");

export default function SafetyFlowsModal(initialRouteName) {
  const tmp = callback(React.useState(initialRouteName.task), 2);
  const first = tmp[0];
  closure_1 = tmp[1];
  let obj = first(6312);
  let items = [first];
  const navigatorScreens = obj.useNavigatorScreens(() => {
    { [closure_0(closure_2[4]).SafetyFlowScreens.OVERVIEW]: obj, [closure_0(closure_2[4]).SafetyFlowScreens.ENTER_EMAIL]: obj };
    obj = {
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(17092), {});
      }
    };
    obj1 = {
      headerLeft: first(6314).getHeaderBackButton(),
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(17094), {});
      }
    };
    obj[first(17084).SafetyFlowScreens.VERIFY_EMAIL] = obj1;
    obj[first(17084).SafetyFlowScreens.UPDATE_APP] = {
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(17096), {});
      }
    };
    obj[first(17084).SafetyFlowScreens.AGE_VERIFICATION] = {
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(17097), {});
      }
    };
    obj[first(17084).SafetyFlowScreens.PARENTAL_CONSENT_CONNECTION] = {
      headerShown: false,
      customNavbar() {
        return callback3(callback(17098).ParentalConsentConnectionNavbar, {});
      },
      render() {
        return callback3(callback2(17099), {});
      }
    };
    obj[first(17084).SafetyFlowScreens.ERROR] = {
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(17104), {});
      }
    };
    return obj;
  }, []);
  const items1 = [first];
  const memo = React.useMemo(() => {
    let flow_context;
    if (first != null) {
      flow_context = first.flow_context;
    }
    if (null == flow_context) {
      return [];
    } else {
      const tasks = first.flow_context.tasks;
      if (1 === tasks.length) {
        if (tasks[0].task_type === first(dependencyMap[4]).TaskType.PARENTAL_CONSENT_CONNECTION) {
          let items = [];
        }
        return items;
      }
      const tasks1 = first.flow_context.tasks;
      const mapped = tasks1.map((item, index) => callback(table[14]).getScreensForTaskType(item.task_type));
      const found = mapped.filter((item, index) => null != item);
      items = found.flat();
    }
  }, items);
  const memo1 = React.useMemo(() => ({ task: first, setTask: closure_1 }), items1);
  obj = { value: memo1, children: jsx(first(13538).StepModal, { initialRouteName: initialRouteName.initialScreen, screens: navigatorScreens, steps: memo }) };
  return jsx(first(17089).SafetyFlowTaskContext.Provider, { value: memo1, children: jsx(first(13538).StepModal, { initialRouteName: initialRouteName.initialScreen, screens: navigatorScreens, steps: memo }) });
};