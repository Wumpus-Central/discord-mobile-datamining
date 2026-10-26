// === Module 12105: AppLauncherActionSheet ===

// Module 12105 (AppLauncherActionSheet)
import c from "c" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5052 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5265 */;
import ActionSheetContextDefault from "ActionSheetContext" /* 5580 */;
import AppLauncherContext from "AppLauncherContext" /* 11169 */;
import AppLauncherTypes from "AppLauncherTypes" /* 11170 */;
import useDefaultAppLauncherWidth from "useDefaultAppLauncherWidth" /* 11171 */;
import AppLauncherNavigatorDefault from "AppLauncherNavigator" /* 11949 */;
import getAppDMApplication from "getAppDMApplication" /* 12106 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const AppLauncherRouteName = fn(1504).AppLauncherRouteName;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherActionSheet(chatInputRef) {
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
    class L {
      constructor() {
        current = closure_1.current;
        if (current != null) {
          closeActionSheetResult = current.closeActionSheet();
        }
        return;
      }
    }
    class E {
      constructor() {
        current = closure_1.current;
        if (current != null) {
          expandActionSheetResult = current.expandActionSheet();
        }
        return;
      }
    }
    cResult[4] = L;
    cResult[5] = E;
  } else {
    class L {
      constructor() {
        current = closure_1.current;
        if (current != null) {
          closeActionSheetResult = current.closeActionSheet();
        }
        return;
      }
    }
    class E {
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
    class L {
      constructor() {
        current = closure_1.current;
        if (current != null) {
          closeActionSheetResult = current.closeActionSheet();
        }
        return;
      }
    }
    class E {
      constructor() {
        current = closure_1.current;
        if (current != null) {
          expandActionSheetResult = current.expandActionSheet();
        }
        return;
      }
    }
    tmp14[1] = L;
    tmp14[2] = E;
    cResult[6] = tmp10;
    cResult[7] = tmp14;
  } else {
    class L {
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
    class L {
      constructor() {
        current = closure_1.current;
        if (current != null) {
          closeActionSheetResult = current.closeActionSheet();
        }
        return;
      }
    }
    class E {
      constructor() {
        current = closure_1.current;
        if (current != null) {
          expandActionSheetResult = current.expandActionSheet();
        }
        return;
      }
    }
    if (tmp17 != null) {
      class L {
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
    class L {
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
    class L {
      constructor() {
        current = closure_1.current;
        if (current != null) {
          closeActionSheetResult = current.closeActionSheet();
        }
        return;
      }
    }
    class E {
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
    class L {
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
    class L {
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
}) : (function AppLauncherActionSheet(arg0) {
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

export const useAppLauncherActionSheet = ReactCompilerGating.isReactCompilerEnabled() ? (function useAppLauncherActionSheet(arg0) {
  const cResult = c.c(6);
  [tmp4, tmp5] = noop.useState(false);
  require = tmp5;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = {
      transitionState: "visible",
      close() {

        },
      onLeave() {
          tmp5(false);
        },
      registerDismissHandler() {

        }
    };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === tmp4) {
    if (cResult[2] === arg0) {
      let tmp7 = cResult[3];
    }
    if (cResult[4] !== tmp7) {
      const obj3 = { appLauncherActionSheet: tmp7, setAppLauncherActionSheetEnabled: tmp5 };
      cResult[4] = tmp7;
      cResult[5] = obj3;
      let tmp15 = obj3;
    } else {
      tmp15 = cResult[5];
    }
    return tmp15;
  }
  let tmp8 = null;
  if (tmp4) {
    const obj4 = { value: first, children: null };
    const obj5 = {};
    const merged = Object.assign(arg0);
    obj4.children = <closure_7 />;
    tmp8 = jsx(ActionSheetContextDefault.Provider, { value: first, children: null });
  }
  cResult[1] = tmp4;
  cResult[2] = arg0;
  cResult[3] = tmp8;
  tmp7 = tmp8;
  const tmp3 = _slicedToArray(noop.useState(false), 2);
}) : (function useAppLauncherActionSheet(arg0) {
  closure_0 = arg0;
  let tmp = memo(noop.useState(false), 2);
  const first = tmp[0];
  closure_2 = tmp3;
  memo = noop.useMemo(() => ({
    transitionState: "visible",
    close() {

    },
    onLeave() {
      closure_1_2(false);
    },
    registerDismissHandler() {

    }
  }), []);
  let obj = { appLauncherActionSheet: null, setAppLauncherActionSheetEnabled: tmp[1] };
  const items = [memo, first, arg0];
  obj.appLauncherActionSheet = noop.useMemo(() => {
    let tmp = null;
    if (first) {
      const obj = { value: memo, children: null };
      const obj2 = {};
      const merged = Object.assign(closure_0);
      obj.children = <closure_7 />;
      tmp = jsx(ActionSheetContextDefault.Provider, { value: memo, children: null });
    }
    return tmp;
  }, items);
  return obj;
});