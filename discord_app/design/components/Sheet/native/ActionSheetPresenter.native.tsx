// === Module 14157: ActionSheetPresenter ===

// Module 14157 (ActionSheetPresenter)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import useBackPressHandlerDefault from "useBackPressHandler" /* 5371 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8952 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4761 */;

const require = fn;
const StyleSheet = fn(17).StyleSheet;
const NOOP = fn(1085).NOOP;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function TrackedWrapperInner(sheetKey) {
  const cResult = sheetKey(576).c(22);
  sheetKey = sheetKey.sheetKey;
  ({ content, impressionName, impressionProperties, zIndex } = sheetKey);
  const obj = sheetKey(576);
  [tmp5, importDefault] = ref(noop.useState("visible"), 2);
  dependencyMap = noop.useRef(NOOP);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(current) {
      closure_2.current = current;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp4 = ref(noop.useState("visible"), 2);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class K {
      constructor() {
        currentResult = closure_3.current();
        return;
      }
    }
    cResult[1] = K;
  } else {
    class K {
      constructor() {
        currentResult = closure_3.current();
        return;
      }
    }
  }
  if (cResult[2] === impressionName) {
    class K {
      constructor() {
        currentResult = closure_3.current();
        return;
      }
    }
    useTrackImpressionDefault(obj5);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          obj = {
            componentDidEnter() {
                      closure_1_1("visible");
                    },
            componentWillLeave(current) {
                      closure_1_1("exiting");
                      ref2.current = current;
                    },
            componentDidLeave() {
                      closure_1_1("exited");
                      ref2.current = current;
                    }
          };
          return obj;
        }
      }
      const items = [];
      cResult[5] = F;
      cResult[6] = items;
      let tmp12 = items;
    } else {
      class F {
        constructor() {
          obj = {
            componentDidEnter() {
                      closure_1_1("visible");
                    },
            componentWillLeave(current) {
                      closure_1_1("exiting");
                      ref2.current = current;
                    },
            componentDidLeave() {
                      closure_1_1("exited");
                      ref2.current = current;
                    }
          };
          return obj;
        }
      }
      tmp12 = cResult[6];
    }
    const imperativeHandle = obj2.useImperativeHandle(sheetKey.ref, F, tmp12);
    if (cResult[7] !== sheetKey) {
      class T {
        constructor() {
          obj = closure_1(closure_2[10]);
          hideActionSheetResult = obj.hideActionSheet(sheetKey);
          return;
        }
      }
      cResult[7] = sheetKey;
      cResult[8] = T;
    } else {
      class T {
        constructor() {
          obj = closure_1(closure_2[10]);
          hideActionSheetResult = obj.hideActionSheet(sheetKey);
          return;
        }
      }
    }
    noop = T;
    if (cResult[9] === T) {
      class T {
        constructor() {
          obj = closure_1(closure_2[10]);
          hideActionSheetResult = obj.hideActionSheet(sheetKey);
          return;
        }
      }
      if (cResult[12] !== T) {
        class N {
          constructor() {
            current = closure_2.current;
            if (current != null) {
              currentResult = current();
            }
            tmp2 = closure_4();
            return true;
          }
        }
        cResult[12] = T;
        cResult[13] = N;
      } else {
        class N {
          constructor() {
            current = closure_2.current;
            if (current != null) {
              currentResult = current();
            }
            tmp2 = closure_4();
            return true;
          }
        }
      }
      useBackPressHandlerDefault(N);
      if (cResult[14] === T) {
        class N {
          constructor() {
            current = closure_2.current;
            if (current != null) {
              currentResult = current();
            }
            tmp2 = closure_4();
            return true;
          }
        }
      }
      const obj3 = { dialogKey: sheetKey, onDismiss: T, zIndex, children: content };
      const tmp20 = jsx(tmp(5357).Dialog, { dialogKey: sheetKey, onDismiss: T, zIndex, children: content });
      cResult[14] = T;
      cResult[15] = content;
      cResult[16] = sheetKey;
      cResult[17] = zIndex;
      cResult[18] = tmp20;
    }
    const obj4 = { transitionState: tmp5, close: T, onLeave: K, registerDismissHandler: first };
    cResult[9] = T;
    cResult[10] = tmp5;
    cResult[11] = obj4;
  }
  obj5 = { type: sheetKey(1273).ImpressionTypes.HALFSHEET, name: impressionName, properties: impressionProperties };
  cResult[2] = impressionName;
  cResult[3] = impressionProperties;
  cResult[4] = obj5;
  ref = noop.useRef(NOOP);
}) : (function TrackedWrapperInner(sheetKey) {
  sheetKey = sheetKey.sheetKey;
  ref = undefined;
  let registerDismissHandler;
  let callback2;
  ({ content, impressionName, impressionProperties, zIndex, ref } = sheetKey);
  const tmp = ref(registerDismissHandler.useState("visible"), 2);
  const transitionState = tmp[0];
  dependencyMap = tmp[1];
  ref = registerDismissHandler.useRef(callback2);
  registerDismissHandler = registerDismissHandler.useCallback((current) => {
    closure_3.current = current;
  }, []);
  registerDismissHandler.useRef(callback2);
  const callback1 = registerDismissHandler.useCallback(() => {
    ref2.current();
  }, []);
  const obj = { type: sheetKey(1273).ImpressionTypes.HALFSHEET, name: impressionName, properties: impressionProperties };
  transitionState(8952)(obj);
  const imperativeHandle = registerDismissHandler.useImperativeHandle(ref, () => ({
    componentDidEnter() {
      closure_1_2("visible");
    },
    componentWillLeave(current) {
      closure_1_2("exiting");
      ref2.current = current;
    },
    componentDidLeave() {
      closure_1_2("exited");
      ref2.current = callback2;
    }
  }), []);
  const items = [sheetKey];
  callback2 = registerDismissHandler.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet(sheetKey);
  }, items);
  const items1 = [transitionState, callback2, callback1, registerDismissHandler];
  const items2 = [callback2];
  const memo = registerDismissHandler.useMemo(() => ({ transitionState, close: callback2, onLeave: callback1, registerDismissHandler }), items1);
  const callback3 = registerDismissHandler.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current();
    }
    callback2();
    return true;
  }, items2);
  transitionState(5371)(callback3);
  const tmp5 = transitionState(8952);
  return jsx(transitionState(6838).Provider, { value: memo, children: jsx(sheetKey(5357).Dialog, { dialogKey: sheetKey, onDismiss: callback2, zIndex, children: content }) });
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheetPresenter.native.tsx");

export const ActionSheetPresenter = ReactCompilerGating.isReactCompilerEnabled() ? (function ActionSheetPresenter(appEntryKey) {
  const cResult = appEntryKey(576).c(12);
  appEntryKey = appEntryKey.appEntryKey;
  if (cResult[0] !== appEntryKey) {
    const fn = function c() {
      return () => {
        const result = ActionSheetActionCreatorsDefault.resetActionSheetsForAppEntryKey(appEntryKey);
      };
    };
    const items = [appEntryKey];
    cResult[0] = appEntryKey;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp5 = items;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const effect = noop.useEffect(tmp4, tmp5);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ActionSheetStore];
    const fn2 = function v() {
      return stack.getStack();
    };
    const items2 = [];
    cResult[3] = items1;
    cResult[4] = fn2;
    cResult[5] = items2;
    let tmp9 = items2;
    let tmp8 = fn2;
    let tmp7 = items1;
  } else {
    tmp7 = cResult[3];
    tmp8 = cResult[4];
    tmp9 = cResult[5];
  }
  const obj = appEntryKey(576);
  const stateFromStoresArray = appEntryKey(504).useStateFromStoresArray(tmp7, tmp8, tmp9);
  if (cResult[6] === appEntryKey) {
    if (cResult[7] === stateFromStoresArray) {
      if (cResult[10] !== cResult[8]) {
        const obj2 = { style: StyleSheet.absoluteFill, component: tmp(5305).TransitionGroupOverlayView, children: tmp11 };
        const tmp17 = jsx(tmp(12091).TransitionGroup, { style: StyleSheet.absoluteFill, component: tmp(5305).TransitionGroupOverlayView, children: tmp11 });
        cResult[10] = tmp11;
        cResult[11] = tmp17;
        let tmp14 = tmp17;
      } else {
        tmp14 = cResult[11];
      }
      return tmp14;
    }
  }
  const found = stateFromStoresArray.filter((appEntryKey) => appEntryKey.appEntryKey === appEntryKey);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor(arg0) {
        key = appEntryKey.key;
        obj = { sheetKey: key, content: appEntryKey.content, impressionName: appEntryKey.impressionName, impressionProperties: appEntryKey.impressionProperties, zIndex: appEntryKey.zIndex };
        return closure_1_8(closure_1_9, obj, key);
      }
    }
    cResult[9] = A;
  } else {
    class A {
      constructor(arg0) {
        key = appEntryKey.key;
        obj = { sheetKey: key, content: appEntryKey.content, impressionName: appEntryKey.impressionName, impressionProperties: appEntryKey.impressionProperties, zIndex: appEntryKey.zIndex };
        return closure_1_8(closure_1_9, obj, key);
      }
    }
  }
  const mapped = found.map(A);
  cResult[6] = appEntryKey;
  cResult[7] = stateFromStoresArray;
  cResult[8] = mapped;
  const tmpResult = appEntryKey(504);
}) : (function ActionSheetPresenter(appEntryKey) {
  appEntryKey = appEntryKey.appEntryKey;
  const items = [appEntryKey];
  const effect = noop.useEffect(() => () => {
    const result = ActionSheetActionCreatorsDefault.resetActionSheetsForAppEntryKey(appEntryKey);
  }, items);
  const items1 = [ActionSheetStore];
  const stateFromStoresArray = appEntryKey(504).useStateFromStoresArray(items1, () => stack.getStack(), []);
  const found = stateFromStoresArray.filter((appEntryKey) => appEntryKey.appEntryKey === appEntryKey);
  const mapped = found.map((content) => <closure_1_9 key={content.key} sheetKey={content.key} content={content.content} impressionName={content.impressionName} impressionProperties={content.impressionProperties} zIndex={content.zIndex} />);
  const obj = appEntryKey(504);
  return jsx(appEntryKey(12091).TransitionGroup, { style: StyleSheet.absoluteFill, component: appEntryKey(5305).TransitionGroupOverlayView, children: mapped });
});