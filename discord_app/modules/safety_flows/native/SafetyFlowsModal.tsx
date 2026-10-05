// === Module 18062: SafetyFlowsModal ===

// Module 18062 (SafetyFlowsModal)
import c from "c" /* 576 */;
import NavigatorHeader from "NavigatorHeader" /* 6010 */;
import Navigator from "Navigator" /* 6496 */;
import StepModal from "StepModal" /* 14272 */;
import types from "types" /* 18059 */;
import SafetyFlowsUtils from "SafetyFlowsUtils" /* 18065 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const obj = { [closure_1_0(closure_1_2[5]).SafetyFlowScreens.OVERVIEW]: obj2, [closure_1_0(closure_1_2[5]).SafetyFlowScreens.ENTER_EMAIL]: obj3 };
      const obj4 = {
        headerLeft: NavigatorHeader.getHeaderBackButton(),
        headerTitle() {
          return null;
        },
        render() {
          return closure_1_5(closure_1_1(18069), {});
        }
      };
      obj[types.SafetyFlowScreens.VERIFY_EMAIL] = obj4;
      obj[types.SafetyFlowScreens.UPDATE_APP] = {
        headerLeft() {
          return null;
        },
        headerTitle() {
          return null;
        },
        render() {
          return closure_1_5(closure_1_1(18071), {});
        }
      };
      obj[types.SafetyFlowScreens.AGE_VERIFICATION] = {
        headerLeft() {
          return null;
        },
        headerTitle() {
          return null;
        },
        render() {
          return closure_1_5(closure_1_1(18072), {});
        }
      };
      obj[types.SafetyFlowScreens.PARENTAL_CONSENT_CONNECTION] = {
        headerShown: false,
        customNavbar() {
          return closure_1_5(closure_1_0(18073).ParentalConsentConnectionNavbar, {});
        },
        render() {
          return closure_1_5(closure_1_1(18074), {});
        }
      };
      obj[types.SafetyFlowScreens.APP_STORE_PARENTAL_REVOCATION] = {
        headerShown: false,
        render() {
          return closure_1_5(closure_1_1(18080), {});
        }
      };
      obj[types.SafetyFlowScreens.ERROR] = {
        headerLeft() {
          return null;
        },
        headerTitle() {
          return null;
        },
        render() {
          return closure_1_5(closure_1_1(18081), {});
        }
      };
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
  return Navigator.useNavigatorScreens(tmp4, tmp5);
}) : (() => Navigator.useNavigatorScreens(() => {
  const obj = { [closure_1_0(closure_1_2[5]).SafetyFlowScreens.OVERVIEW]: obj2, [closure_1_0(closure_1_2[5]).SafetyFlowScreens.ENTER_EMAIL]: obj3 };
  const obj4 = {
    headerLeft: NavigatorHeader.getHeaderBackButton(),
    headerTitle() {
      return null;
    },
    render() {
      return closure_1_5(closure_1_1(18069), {});
    }
  };
  obj[types.SafetyFlowScreens.VERIFY_EMAIL] = obj4;
  obj[types.SafetyFlowScreens.UPDATE_APP] = {
    headerLeft() {
      return null;
    },
    headerTitle() {
      return null;
    },
    render() {
      return closure_1_5(closure_1_1(18071), {});
    }
  };
  obj[types.SafetyFlowScreens.AGE_VERIFICATION] = {
    headerLeft() {
      return null;
    },
    headerTitle() {
      return null;
    },
    render() {
      return closure_1_5(closure_1_1(18072), {});
    }
  };
  obj[types.SafetyFlowScreens.PARENTAL_CONSENT_CONNECTION] = {
    headerShown: false,
    customNavbar() {
      return closure_1_5(closure_1_0(18073).ParentalConsentConnectionNavbar, {});
    },
    render() {
      return closure_1_5(closure_1_1(18074), {});
    }
  };
  obj[types.SafetyFlowScreens.APP_STORE_PARENTAL_REVOCATION] = {
    headerShown: false,
    render() {
      return closure_1_5(closure_1_1(18080), {});
    }
  };
  obj[types.SafetyFlowScreens.ERROR] = {
    headerLeft() {
      return null;
    },
    headerTitle() {
      return null;
    },
    render() {
      return closure_1_5(closure_1_1(18081), {});
    }
  };
  return obj;
}, []));
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_flows/native/SafetyFlowsModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((initialScreen) => {
  const cResult = c.c(15);
  initialScreen = initialScreen.initialScreen;
  let num = 2;
  const tmp4 = _slicedToArray(noop.useState(initialScreen.task), 2);
  const first = tmp4[0];
  const tmp6 = closure_6();
  let flow_context;
  if (first != null) {
    flow_context = first.flow_context;
  }
  if (null != flow_context) {
    const tasks = first.flow_context.tasks;
    if (1 === tasks.length) {
      const _Symbol2 = Symbol;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [];
        cResult[1] = items;
        let tmp11 = items;
      } else {
        tmp11 = cResult[1];
      }
      let tmp8 = tmp11;
    }
    const _Symbol3 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function w(task_type) {
        return SafetyFlowsUtils.getScreensForTaskType(task_type.task_type);
      };
      cResult[4] = fn;
      let tmp13 = fn;
    } else {
      tmp13 = cResult[4];
    }
    const _Symbol4 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor(arg0) {
          return null != initialScreen;
        }
      }
      cResult[5] = R;
    } else {
      class R {
        constructor(arg0) {
          return null != initialScreen;
        }
      }
    }
    const tasks1 = first.flow_context.tasks;
    const mapped = tasks1.map(tmp13);
    const found = mapped.filter(R);
    const flatResult = found.flat();
    cResult[num] = first.flow_context.tasks;
    num = 3;
    cResult[3] = flatResult;
  } else {
    class R {
      constructor(arg0) {
        return null != initialScreen;
      }
    }
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor(arg0) {
          return null != initialScreen;
        }
      }
      cResult[0] = tmp9;
      tmp8 = tmp9;
    } else {
      class R {
        constructor(arg0) {
          return null != initialScreen;
        }
      }
    }
  }
  if (cResult[6] !== first) {
    class R {
      constructor(arg0) {
        return null != initialScreen;
      }
    }
    tmp19[0] = first;
    tmp19[1] = tmp4[1];
    cResult[6] = first;
    cResult[7] = tmp19;
  } else {
    class R {
      constructor(arg0) {
        return null != initialScreen;
      }
    }
  }
  if (cResult[8] === initialScreen) {
    class R {
      constructor(arg0) {
        return null != initialScreen;
      }
    }
  }
  cResult[8] = initialScreen;
  cResult[9] = tmp6;
  cResult[10] = tmp8;
  cResult[11] = jsx(StepModal.StepModal, { initialRouteName: initialScreen, screens: tmp6, steps: tmp8 });
  const tmp20 = jsx(StepModal.StepModal, { initialRouteName: initialScreen, screens: tmp6, steps: tmp8 });
}) : ((initialRouteName) => {
  task = undefined;
  setTask = undefined;
  [task, setTask] = noop.useState(initialRouteName.task);
  const items = [task];
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
        const mapped = tasks1.map((task_type) => task(closure_1_2[17]).getScreensForTaskType(task_type.task_type));
        const found = mapped.filter((item) => null != item);
        let flatResult = found.flat();
      } else {
        flatResult = [];
      }
      return flatResult;
    }
  }, items);
  const memo1 = noop.useMemo(() => ({ task, setTask }), items1);
  const tmp3 = closure_6();
  return jsx(task(18064).SafetyFlowTaskContext.Provider, { value: memo1, children: jsx(task(14272).StepModal, { initialRouteName: initialRouteName.initialScreen, screens: closure_6(), steps: memo }) });
});