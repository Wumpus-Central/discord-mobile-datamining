// discord_app/modules/safety_flows/native/SafetyFlowsModal.tsx
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_flows/native/SafetyFlowsModal.tsx");

export default function SafetyFlowsModal(initialRouteName) {
  let first;
  closure_1 = undefined;
  const tmp = callback(React.useState(initialRouteName.task), 2);
  first = tmp[0];
  closure_1 = tmp[1];
  let obj = first(5960);
  const items = [first];
  const navigatorScreens = obj.useNavigatorScreens(() => {
    obj = { [closure_0(closure_2[4]).SafetyFlowScreens.OVERVIEW]: obj, [closure_0(closure_2[4]).SafetyFlowScreens.ENTER_EMAIL]: obj };
    obj = {
      headerLeft() {
        return null;
      },
      headerShown: false,
      render() {
        return callback3(callback2(17364), {});
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
        return callback3(callback2(17368), {});
      }
    };
    obj1 = {
      headerLeft: first(5447).getHeaderBackButton(),
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(17370), {});
      }
    };
    obj[first(17360).SafetyFlowScreens.VERIFY_EMAIL] = obj1;
    obj[first(17360).SafetyFlowScreens.UPDATE_APP] = {
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(17372), {});
      }
    };
    obj[first(17360).SafetyFlowScreens.AGE_VERIFICATION] = {
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(17373), {});
      }
    };
    obj[first(17360).SafetyFlowScreens.PARENTAL_CONSENT_CONNECTION] = {
      headerShown: false,
      customNavbar() {
        return callback3(callback(17374).ParentalConsentConnectionNavbar, {});
      },
      render() {
        return callback3(callback2(17375), {});
      }
    };
    obj[first(17360).SafetyFlowScreens.APP_STORE_PARENTAL_REVOCATION] = {
      headerShown: false,
      render() {
        return callback3(callback2(17380), {});
      }
    };
    obj[first(17360).SafetyFlowScreens.ERROR] = {
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(17381), {});
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
      if (1 !== tasks.length) {
        const tasks1 = tmp.flow_context.tasks;
        const mapped = tasks1.map((task_type) => callback(table[15]).getScreensForTaskType(task_type.task_type));
        const found = mapped.filter((arg0) => null != arg0);
        let flatResult = found.flat();
      } else {
        flatResult = [];
        const tmp3 = first;
        const tmp4 = closure_1_2;
      }
      return flatResult;
    }
  }, items);
  const memo1 = React.useMemo(() => ({ task: first, setTask: closure_1 }), items1);
  obj = { value: memo1, children: jsx(first(13731).StepModal, { initialRouteName: initialRouteName.initialScreen, screens: navigatorScreens, steps: memo }) };
  return jsx(first(17365).SafetyFlowTaskContext.Provider, { value: memo1, children: jsx(first(13731).StepModal, { initialRouteName: initialRouteName.initialScreen, screens: navigatorScreens, steps: memo }) });
};