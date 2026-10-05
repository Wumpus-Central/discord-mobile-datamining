// === Module 14258: ContextMenuContainer ===

// Module 14258 (ContextMenuContainer)
import Fragment from "Fragment" /* 21 */;
import OverlayViewDefault from "OverlayView" /* 5714 */;
import ContextMenuPopout from "ContextMenuPopout" /* 14259 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0;

let StyleSheet;
let closure_4;
let obj2;
function getItemKey(key) {
  return key.key;
}
({ StyleSheet, View: closure_4 } = react_native);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { overlayView: obj2, wrapperView: StyleSheet.absoluteFillObject };
obj2 = { zIndex: 99999 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_6 = createStyles(obj);
let closure_7 = [];
function EMPTY_CALLBACK() {

}
function renderItem(key, menu, transitionState, cleanUp) {
  return jsx(ContextMenuPopout.ContextMenuPopout, { menu, transitionState, cleanUp }, key);
}
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp8;
  let tmp9;
  const obj = require("react");
  const cResult = obj.c(13);
  const tmp2 = closure_6();
  _require = tmp2;
  const obj2 = require("ContextMenuState");
  const activeContextMenu = obj2.useActiveContextMenu();
  if (cResult[0] !== activeContextMenu) {
    let tmp6;
    if (null != activeContextMenu) {
      const items = [activeContextMenu];
      tmp6 = items;
    } else {
      tmp6 = closure_7;
    }
    cResult[0] = activeContextMenu;
    cResult[1] = tmp6;
  }
  let requestClose;
  if (activeContextMenu != null) {
    requestClose = activeContextMenu.requestClose;
  }
  if (requestClose == null) {
    requestClose = EMPTY_CALLBACK;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function p() {
      const KeyboardEvents = closure_0(C[8]).KeyboardEvents;
      closure_0 = KeyboardEvents.addListener("keyboardDidHide", () => {
        const ContextMenuStore = closure_0(closure_1_2[7]).ContextMenuStore;
        const menu = ContextMenuStore.getState().menu;
        let ignoreKeyboardHide;
        if (menu != null) {
          ignoreKeyboardHide = menu.ignoreKeyboardHide;
        }
        if (true !== ignoreKeyboardHide) {
          const tmpResult = closure_0(closure_1_2[7]);
          tmpResult.hideContextMenu();
        }
      });
      return () => {
        closure_0.remove();
      };
    };
    const items1 = [];
    cResult[2] = fn;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const effect = react.useEffect(tmp8, tmp9);
  if (cResult[4] !== requestClose) {
    class C {
      constructor() {
        requestClose(true);
      }
    }
    cResult[4] = requestClose;
    cResult[5] = C;
  } else {
    class C {
      constructor() {
        requestClose(true);
      }
    }
  }
  C = tmp11;
  if (cResult[6] === tmp11) {
    class C {
      constructor() {
        requestClose(true);
      }
    }
  }
  const fn2 = function x(children, arg1) {
    let str = "auto";
    OverlayViewDefault;
    if (0 === arg1.length) {
      str = "none";
    }
    return <tmp3 style={closure_0.overlayView}>{null}</tmp3>;
  };
  cResult[6] = tmp11;
  cResult[7] = tmp2.overlayView;
  cResult[8] = tmp2.wrapperView;
  cResult[9] = fn2;
}) : (() => {
  let onDismiss;
  let tmp5;
  const tmp = closure_6();
  _require = tmp;
  const tmp3 = onDismiss;
  const obj = require("ContextMenuState");
  const activeContextMenu = obj.useActiveContextMenu();
  const tmp2 = _require;
  if (null != activeContextMenu) {
    const items = [activeContextMenu];
    tmp5 = items;
  } else {
    tmp5 = closure_7;
  }
  let requestClose;
  if (activeContextMenu != null) {
    requestClose = activeContextMenu.requestClose;
  }
  if (requestClose == null) {
    requestClose = EMPTY_CALLBACK;
  }
  const effect = react.useEffect(() => {
    const KeyboardEvents = closure_0(callback[8]).KeyboardEvents;
    closure_0 = KeyboardEvents.addListener("keyboardDidHide", () => {
      const ContextMenuStore = closure_0(onDismiss[7]).ContextMenuStore;
      const menu = ContextMenuStore.getState().menu;
      let ignoreKeyboardHide;
      if (menu != null) {
        ignoreKeyboardHide = menu.ignoreKeyboardHide;
      }
      if (true !== ignoreKeyboardHide) {
        const tmpResult = closure_0(onDismiss[7]);
        tmpResult.hideContextMenu();
      }
    });
    return () => {
      closure_0.remove();
    };
  }, []);
  const items1 = [requestClose];
  onDismiss = react.useCallback(() => {
    requestClose(true);
  }, items1);
  const items2 = [onDismiss, , ];
  ({ overlayView: arr3[1], wrapperView: arr3[2] } = tmp);
  const callback1 = react.useCallback((children, arg1) => {
    let str = "auto";
    OverlayViewDefault;
    if (0 === arg1.length) {
      str = "none";
    }
    return <tmp3 style={closure_0.overlayView}>{null}</tmp3>;
  }, items2);
  return jsx(tmp2(tmp3[11]).TransitionGroup, { wrapChildren: callback1, items: tmp5, renderItem, getItemKey });
});
const result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenuContainer.native.tsx");

export const ContextMenuContainer = tmp5;