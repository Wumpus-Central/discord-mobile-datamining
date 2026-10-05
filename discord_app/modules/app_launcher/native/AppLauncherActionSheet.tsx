// === Module 16608: AppLauncherActionSheet ===

// Module 16608 (AppLauncherActionSheet)
import c from "c" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6645 */;
import ActionSheetContextDefault from "ActionSheetContext" /* 6647 */;
import AppLauncherTypes from "AppLauncherTypes" /* 8932 */;
import AppLauncherContext from "AppLauncherContext" /* 10994 */;
import useDefaultAppLauncherWidth from "useDefaultAppLauncherWidth" /* 10995 */;
import AppLauncherNavigatorDefault from "AppLauncherNavigator" /* 11693 */;
import getAppDMApplication from "getAppDMApplication" /* 11826 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const AppLauncherRouteName = fn(1489).AppLauncherRouteName;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((chatInputRef) => {
  const cResult = c.c(21);
  chatInputRef = chatInputRef.chatInputRef;
  const channel = chatInputRef.channel;
  noop.useRef(null);
  const sharedValue = ReanimatedRexport.useSharedValue(-1);
  const sharedValue1 = ReanimatedRexport.useSharedValue(0);
  const ref1 = noop.useRef(undefined);
  const TEXT = AppLauncherTypes.AppLauncherEntrypoint.TEXT;
  const ref2 = noop.useRef(AppLauncherContext.AppLauncherKeyboardCloseReason.DISMISSED);
  const defaultAppLauncherWidth = useDefaultAppLauncherWidth.useDefaultAppLauncherWidth(TEXT);
  if (cResult[0] !== channel) {
    const obj6 = { channel, type: "channel" };
    cResult[0] = channel;
    cResult[1] = obj6;
    let tmp9 = obj6;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== chatInputRef) {
    const fn = function y() {
      const current = chatInputRef.current;
      let applicationCommandManager;
      if (current != null) {
        applicationCommandManager = current.getApplicationCommandManager();
      }
      return applicationCommandManager;
    };
    cResult[2] = chatInputRef;
    cResult[3] = fn;
    let tmp10 = fn;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        current = closure_1.current;
        if (current != null) {
          closeActionSheetResult = current.closeActionSheet();
        }
        return;
      }
    }
    class L {
      constructor() {
        current = closure_1.current;
        if (current != null) {
          expandActionSheetResult = current.expandActionSheet();
        }
        return;
      }
    }
    cResult[4] = E;
    cResult[5] = L;
  } else {
    class E {
      constructor() {
        current = closure_1.current;
        if (current != null) {
          closeActionSheetResult = current.closeActionSheet();
        }
        return;
      }
    }
    class L {
      constructor() {
        current = closure_1.current;
        if (current != null) {
          expandActionSheetResult = current.expandActionSheet();
        }
        return;
      }
    }
  }
  if (cResult[6] !== tmp10) {
    class E {
      constructor() {
        current = closure_1.current;
        if (current != null) {
          closeActionSheetResult = current.closeActionSheet();
        }
        return;
      }
    }
    class L {
      constructor() {
        current = closure_1.current;
        if (current != null) {
          expandActionSheetResult = current.expandActionSheet();
        }
        return;
      }
    }
    tmp14[1] = E;
    tmp14[2] = L;
    cResult[6] = tmp10;
    cResult[7] = tmp14;
  } else {
    class E {
      constructor() {
        current = closure_1.current;
        if (current != null) {
          closeActionSheetResult = current.closeActionSheet();
        }
        return;
      }
    }
  }
  if (cResult[8] !== channel) {
    class E {
      constructor() {
        current = closure_1.current;
        if (current != null) {
          closeActionSheetResult = current.closeActionSheet();
        }
        return;
      }
    }
    class L {
      constructor() {
        current = closure_1.current;
        if (current != null) {
          expandActionSheetResult = current.expandActionSheet();
        }
        return;
      }
    }
    if (tmp17 != null) {
      class E {
        constructor() {
          current = closure_1.current;
          if (current != null) {
            closeActionSheetResult = current.closeActionSheet();
          }
          return;
        }
      }
    }
    cResult[8] = channel;
    cResult[9] = undefined;
  } else {
    class E {
      constructor() {
        current = closure_1.current;
        if (current != null) {
          closeActionSheetResult = current.closeActionSheet();
        }
        return;
      }
    }
  }
  if (cResult[10] !== tmp16) {
    class E {
      constructor() {
        current = closure_1.current;
        if (current != null) {
          closeActionSheetResult = current.closeActionSheet();
        }
        return;
      }
    }
    class L {
      constructor() {
        current = closure_1.current;
        if (current != null) {
          expandActionSheetResult = current.expandActionSheet();
        }
        return;
      }
    }
    tmp20[0] = AppLauncherRouteName.HOME;
    tmp20[1] = tmp16;
    cResult[10] = tmp16;
    cResult[11] = tmp20;
  } else {
    class E {
      constructor() {
        current = closure_1.current;
        if (current != null) {
          closeActionSheetResult = current.closeActionSheet();
        }
        return;
      }
    }
  }
  if (cResult[12] === sharedValue) {
    class E {
      constructor() {
        current = closure_1.current;
        if (current != null) {
          closeActionSheetResult = current.closeActionSheet();
        }
        return;
      }
    }
  }
  const ref3 = noop.useRef(tmp14);
  cResult[12] = sharedValue;
  cResult[13] = sharedValue1;
  cResult[14] = tmp9;
  cResult[15] = tmp20;
  cResult[16] = defaultAppLauncherWidth;
  cResult[17] = jsx(AppLauncherNavigatorDefault, { bottomSheetIndex: sharedValue, bottomSheetPosition: sharedValue1, bottomSheetExpandReasonRef: ref1, context: tmp9, chatInputRef: noop.useRef(tmp14), entrypoint: TEXT, keyboardCloseReasonRef: ref2, width: defaultAppLauncherWidth, overrideParams: tmp20 });
  const tmp21 = jsx(AppLauncherNavigatorDefault, { bottomSheetIndex: sharedValue, bottomSheetPosition: sharedValue1, bottomSheetExpandReasonRef: ref1, context: tmp9, chatInputRef: noop.useRef(tmp14), entrypoint: TEXT, keyboardCloseReasonRef: ref2, width: defaultAppLauncherWidth, overrideParams: tmp20 });
}) : ((arg0) => {
  ({ chatInputRef: require, channel } = arg0);
  const ref = noop.useRef(null);
  const sharedValue = ReanimatedRexport.useSharedValue(-1);
  const sharedValue1 = ReanimatedRexport.useSharedValue(0);
  const ref1 = noop.useRef(undefined);
  const TEXT = AppLauncherTypes.AppLauncherEntrypoint.TEXT;
  const ref2 = noop.useRef(AppLauncherContext.AppLauncherKeyboardCloseReason.DISMISSED);
  const items = [channel];
  const defaultAppLauncherWidth = useDefaultAppLauncherWidth.useDefaultAppLauncherWidth(TEXT);
  const memo = noop.useMemo(() => ({ channel, type: "channel" }), items);
  const obj4 = {
    getApplicationCommandManager() {
      const current = ref.current;
      let applicationCommandManager;
      if (current != null) {
        applicationCommandManager = current.getApplicationCommandManager();
      }
      return applicationCommandManager;
    },
    closeCustomKeyboard() {
      const current = ref.current;
      if (current != null) {
        current.closeActionSheet();
      }
    },
    openCustomKeyboard() {
      const current = ref.current;
      if (current != null) {
        current.expandActionSheet();
      }
    }
  };
  const obj5 = { ref, animatedIndex: sharedValue, scrollable: true, startExpanded: true, children: null };
  const obj6 = {
    bottomSheetIndex: sharedValue,
    bottomSheetPosition: sharedValue1,
    bottomSheetExpandReasonRef: ref1,
    context: memo,
    chatInputRef: noop.useRef({
      getApplicationCommandManager() {
        const current = ref.current;
        let applicationCommandManager;
        if (current != null) {
          applicationCommandManager = current.getApplicationCommandManager();
        }
        return applicationCommandManager;
      },
      closeCustomKeyboard() {
        const current = ref.current;
        if (current != null) {
          current.closeActionSheet();
        }
      },
      openCustomKeyboard() {
        const current = ref.current;
        if (current != null) {
          current.expandActionSheet();
        }
      }
    }),
    entrypoint: TEXT,
    keyboardCloseReasonRef: ref2,
    width: defaultAppLauncherWidth,
    overrideParams: null
  };
  const obj7 = { initialRouteName: AppLauncherRouteName.HOME, initialSearchQuery: null };
  const ref3 = noop.useRef({
    getApplicationCommandManager() {
      const current = ref.current;
      let applicationCommandManager;
      if (current != null) {
        applicationCommandManager = current.getApplicationCommandManager();
      }
      return applicationCommandManager;
    },
    closeCustomKeyboard() {
      const current = ref.current;
      if (current != null) {
        current.closeActionSheet();
      }
    },
    openCustomKeyboard() {
      const current = ref.current;
      if (current != null) {
        current.expandActionSheet();
      }
    }
  });
  const appDMApplication = getAppDMApplication.getAppDMApplication(channel);
  let name;
  if (appDMApplication != null) {
    name = appDMApplication.name;
  }
  obj7.initialSearchQuery = name;
  obj6.overrideParams = obj7;
  obj5.children = <tmp10 bottomSheetIndex={sharedValue} bottomSheetPosition={sharedValue1} bottomSheetExpandReasonRef={ref1} context={memo} chatInputRef={noop.useRef({
    getApplicationCommandManager() {
      const current = ref.current;
      let applicationCommandManager;
      if (current != null) {
        applicationCommandManager = current.getApplicationCommandManager();
      }
      return applicationCommandManager;
    },
    closeCustomKeyboard() {
      const current = ref.current;
      if (current != null) {
        current.closeActionSheet();
      }
    },
    openCustomKeyboard() {
      const current = ref.current;
      if (current != null) {
        current.expandActionSheet();
      }
    }
  })} entrypoint={TEXT} keyboardCloseReasonRef={ref2} width={defaultAppLauncherWidth} overrideParams={null} />;
  return jsx(Sheet_BottomSheet.BottomSheet, { ref, animatedIndex: sharedValue, scrollable: true, startExpanded: true, children: null });
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherActionSheet.tsx");

export const useAppLauncherActionSheet = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(5);
  [tmp4, tmp5] = noop.useState(false);
  require = tmp5;
  if (cResult[0] === tmp4) {
    if (cResult[1] === arg0) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] !== tmp6) {
      const obj2 = { appLauncherActionSheet: tmp6, setAppLauncherActionSheetEnabled: tmp5 };
      cResult[3] = tmp6;
      cResult[4] = obj2;
      let tmp14 = obj2;
    } else {
      tmp14 = cResult[4];
    }
    return tmp14;
  }
  let tmp7 = null;
  if (tmp4) {
    const obj3 = { value: null, children: null };
    const obj4 = {
      transitionState: "visible",
      close() {

        },
      onLeave() {
          tmp5(false);
        },
      registerDismissHandler() {

        }
    };
    obj3.value = obj4;
    const obj5 = {};
    const merged = Object.assign(arg0);
    obj3.children = <closure_7 />;
    tmp7 = jsx(ActionSheetContextDefault.Provider, { value: null, children: null });
  }
  cResult[0] = tmp4;
  cResult[1] = arg0;
  cResult[2] = tmp7;
  tmp6 = tmp7;
  const tmp3 = _slicedToArray(noop.useState(false), 2);
}) : ((arg0) => {
  closure_0 = arg0;
  let tmp = _slicedToArray(noop.useState(false), 2);
  const first = tmp[0];
  closure_2 = tmp3;
  let obj = { appLauncherActionSheet: null, setAppLauncherActionSheetEnabled: tmp[1] };
  const items = [first, arg0];
  obj.appLauncherActionSheet = noop.useMemo(() => {
    let tmp = null;
    if (first) {
      const obj = { value: null, children: null };
      const obj2 = {
        transitionState: "visible",
        close() {

          },
        onLeave() {
            closure_1_2(false);
          },
        registerDismissHandler() {

          }
      };
      obj.value = obj2;
      const obj3 = {};
      const merged = Object.assign(closure_0);
      obj.children = <closure_7 />;
      tmp = jsx(ActionSheetContextDefault.Provider, { value: null, children: null });
    }
    return tmp;
  }, items);
  return obj;
});