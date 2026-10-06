// discord_app/modules/safety_flows/native/SafetyFlowsModal.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import Navigator from "../../../design/components/Navigator/native/Navigator.native.tsx";
import StepModal from "../../../design/components/Modal/native/StepModal.native.tsx";
import types from "../types.tsx";
import SafetyFlowsUtils from "SafetyFlowsUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let initialScreen;

const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      let tmp5;
      let obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t() {
          let obj2;
          let obj3;
          let obj5;
          const obj = {
            [closure_1_0(closure_1_2[5]).SafetyFlowScreens.OVERVIEW]: obj2,
            [closure_1_0(closure_1_2[5]).SafetyFlowScreens.ENTER_EMAIL]: obj3,
          };
          obj2 = {
            headerLeft() {
              return null;
            },
            headerShown: false,
            render() {
              return closure_1_5(closure_1_1(closure_1_2[6]), {});
            },
          };
          obj3 = {
            headerLeft() {
              return null;
            },
            headerTitle() {
              return null;
            },
            render() {
              return closure_1_5(closure_1_1(closure_1_2[7]), {});
            },
          };
          const obj4 = {
            headerLeft: obj5.getHeaderBackButton(),
            headerTitle() {
              return null;
            },
            render() {
              return closure_1_5(closure_1_1(closure_1_2[9]), {});
            },
          };
          const VERIFY_EMAIL = types.SafetyFlowScreens.VERIFY_EMAIL;
          obj[VERIFY_EMAIL] = obj4;
          obj[types.SafetyFlowScreens.UPDATE_APP] = {
            headerLeft() {
              return null;
            },
            headerTitle() {
              return null;
            },
            render() {
              return closure_1_5(closure_1_1(closure_1_2[10]), {});
            },
          };
          obj[types.SafetyFlowScreens.AGE_VERIFICATION] = {
            headerLeft() {
              return null;
            },
            headerTitle() {
              return null;
            },
            render() {
              return closure_1_5(closure_1_1(closure_1_2[11]), {});
            },
          };
          obj[types.SafetyFlowScreens.PARENTAL_CONSENT_CONNECTION] = {
            headerShown: false,
            customNavbar() {
              return closure_1_5(closure_1_0(closure_1_2[12]).ParentalConsentConnectionNavbar, {});
            },
            render() {
              return closure_1_5(closure_1_1(closure_1_2[13]), {});
            },
          };
          obj[types.SafetyFlowScreens.APP_STORE_PARENTAL_REVOCATION] = {
            headerShown: false,
            render() {
              return closure_1_5(closure_1_1(closure_1_2[14]), {});
            },
          };
          obj[types.SafetyFlowScreens.ERROR] = {
            headerLeft() {
              return null;
            },
            headerTitle() {
              return null;
            },
            render() {
              return closure_1_5(closure_1_1(closure_1_2[15]), {});
            },
          };
          obj5 = NavigatorHeader;
          return obj;
        };
        const items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp4 = fn;
        tmp5 = items;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = Navigator;
      return tmpResult.useNavigatorScreens(tmp4, tmp5);
    }
  : () => {
      let obj = Navigator;
      return obj.useNavigatorScreens(() => {
        let obj2;
        let obj3;
        let obj5;
        const obj = {
          [closure_1_0(closure_1_2[5]).SafetyFlowScreens.OVERVIEW]: obj2,
          [closure_1_0(closure_1_2[5]).SafetyFlowScreens.ENTER_EMAIL]: obj3,
        };
        obj2 = {
          headerLeft() {
            return null;
          },
          headerShown: false,
          render() {
            return closure_1_5(closure_1_1(closure_1_2[6]), {});
          },
        };
        obj3 = {
          headerLeft() {
            return null;
          },
          headerTitle() {
            return null;
          },
          render() {
            return closure_1_5(closure_1_1(closure_1_2[7]), {});
          },
        };
        const obj4 = {
          headerLeft: obj5.getHeaderBackButton(),
          headerTitle() {
            return null;
          },
          render() {
            return closure_1_5(closure_1_1(closure_1_2[9]), {});
          },
        };
        const VERIFY_EMAIL = types.SafetyFlowScreens.VERIFY_EMAIL;
        obj[VERIFY_EMAIL] = obj4;
        obj[types.SafetyFlowScreens.UPDATE_APP] = {
          headerLeft() {
            return null;
          },
          headerTitle() {
            return null;
          },
          render() {
            return closure_1_5(closure_1_1(closure_1_2[10]), {});
          },
        };
        obj[types.SafetyFlowScreens.AGE_VERIFICATION] = {
          headerLeft() {
            return null;
          },
          headerTitle() {
            return null;
          },
          render() {
            return closure_1_5(closure_1_1(closure_1_2[11]), {});
          },
        };
        obj[types.SafetyFlowScreens.PARENTAL_CONSENT_CONNECTION] = {
          headerShown: false,
          customNavbar() {
            return closure_1_5(closure_1_0(closure_1_2[12]).ParentalConsentConnectionNavbar, {});
          },
          render() {
            return closure_1_5(closure_1_1(closure_1_2[13]), {});
          },
        };
        obj[types.SafetyFlowScreens.APP_STORE_PARENTAL_REVOCATION] = {
          headerShown: false,
          render() {
            return closure_1_5(closure_1_1(closure_1_2[14]), {});
          },
        };
        obj[types.SafetyFlowScreens.ERROR] = {
          headerLeft() {
            return null;
          },
          headerTitle() {
            return null;
          },
          render() {
            return closure_1_5(closure_1_1(closure_1_2[15]), {});
          },
        };
        obj5 = NavigatorHeader;
        return obj;
      }, []);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (initialScreen) => {
      let first;
      let tmp6;
      let tmp9;
      let obj = react2;
      const cResult = obj.c(15);
      initialScreen = initialScreen.initialScreen;
      [first, tmp6] = react.useState(initialScreen.task);
      const tmp7 = closure_6();
      let flow_context;
      if (first != null) {
        flow_context = first.flow_context;
      }
      if (null != flow_context) {
        let tmp13;
        const tasks = first.flow_context.tasks;
        if (1 === tasks.length) {
          let tmp12;
          const _Symbol2 = Symbol;
          if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
            const items = [];
            cResult[1] = items;
            tmp12 = items;
          } else {
            tmp12 = cResult[1];
          }
          tmp9 = tmp12;
        }
        if (cResult[2] !== first.flow_context.tasks) {
          let tmp15;
          const _Symbol3 = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function w(task_type) {
              const obj = SafetyFlowsUtils;
              return obj.getScreensForTaskType(task_type.task_type);
            };
            cResult[4] = fn;
            tmp15 = fn;
          } else {
            tmp15 = cResult[4];
          }
          const _Symbol4 = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            class R {
              constructor(arg0) {
                return null != arg0;
              }
            }
            cResult[5] = R;
          } else {
            class R {
              constructor(arg0) {
                return null != arg0;
              }
            }
          }
          const tasks1 = first.flow_context.tasks;
          const mapped = tasks1.map(tmp15);
          const found = mapped.filter(R);
          const flatResult = found.flat();
          cResult[2] = first.flow_context.tasks;
          cResult[3] = flatResult;
          tmp13 = flatResult;
        } else {
          class R {
            constructor(arg0) {
              return null != arg0;
            }
          }
        }
        tmp9 = tmp13;
      } else {
        class R {
          constructor(arg0) {
            return null != arg0;
          }
        }
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          class R {
            constructor(arg0) {
              return null != arg0;
            }
          }
          cResult[0] = tmp10;
          tmp9 = tmp10;
        } else {
          class R {
            constructor(arg0) {
              return null != arg0;
            }
          }
        }
      }
      if (cResult[6] !== first) {
        class R {
          constructor(arg0) {
            return null != arg0;
          }
        }
        tmp19[0] = first;
        tmp19[1] = tmp6;
        cResult[6] = first;
        cResult[7] = tmp19;
      } else {
        class R {
          constructor(arg0) {
            return null != arg0;
          }
        }
      }
      if (cResult[8] === initialScreen) {
        class R {
          constructor(arg0) {
            return null != arg0;
          }
        }
      }
      cResult[8] = initialScreen;
      cResult[9] = tmp7;
      cResult[10] = tmp9;
      cResult[11] = jsx(StepModal.StepModal, { initialRouteName: initialScreen, screens: tmp7, steps: tmp9 });
      jsx(StepModal.StepModal, { initialRouteName: initialScreen, screens: tmp7, steps: tmp9 });
    }
  : (initialScreen) => {
      let setTask;
      let task;
      task = undefined;
      setTask = undefined;
      initialScreen = initialScreen.initialScreen;
      [task, setTask] = react.useState(initialScreen.task);
      const items = [task];
      const items1 = [task];
      closure_6();
      const memo = react.useMemo(() => {
        let flow_context;
        if (first != null) {
          flow_context = first.flow_context;
        }
        if (null == flow_context) {
          return [];
        } else {
          let flatResult;
          const tasks = first.flow_context.tasks;
          if (1 !== tasks.length) {
            const tasks1 = first.flow_context.tasks;
            const mapped = tasks1.map((task_type) => {
              const obj = task(closure_1_2[17]);
              return obj.getScreensForTaskType(task_type.task_type);
            });
            const found = mapped.filter((item) => null != item);
            flatResult = found.flat();
          } else {
            flatResult = [];
          }
          return flatResult;
        }
      }, items);
      const memo1 = react.useMemo(() => ({ task, setTask }), items1);
      const Provider = task(18109).SafetyFlowTaskContext.Provider;
      return <Provider value={memo1}>{null}</Provider>;
    };
const result = size.fileFinishedImporting("modules/safety_flows/native/SafetyFlowsModal.tsx");

export default tmp2;
