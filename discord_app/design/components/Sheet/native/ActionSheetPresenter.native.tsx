// === Module 14218: ActionSheetPresenter ===

// Module 14218 (ActionSheetPresenter)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import useBackPressHandlerDefault from "useBackPressHandler" /* 5780 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8422 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4561 */;

const require = fn;
const StyleSheet = fn(17).StyleSheet;
const NOOP = fn(1085).NOOP;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_9 = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((sheetKey, arg1) => {
  const cResult = sheetKey(576).c(22);
  sheetKey = sheetKey.sheetKey;
  ({ content, impressionName, impressionProperties, zIndex } = sheetKey);
  const obj = sheetKey(576);
  [tmp5, importDefault] = noop.useState("visible");
  dependencyMap = noop.useRef(NOOP);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function p(current) {
      closure_2.current = current;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  _slicedToArray = obj2.useRef(NOOP);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function _() {
      ref2.current();
    };
    cResult[1] = fn2;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === impressionName) {
    if (cResult[3] === impressionProperties) {
      let tmp9 = cResult[4];
    }
    useTrackImpressionDefault(tmp9);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const fn3 = function k() {
        return {
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
      };
      const items = [];
      cResult[5] = fn3;
      cResult[6] = items;
      let tmp13 = items;
      let tmp12 = fn3;
    } else {
      tmp12 = cResult[5];
      tmp13 = cResult[6];
    }
    const imperativeHandle = obj2.useImperativeHandle(arg1, tmp12, tmp13);
    if (cResult[7] !== sheetKey) {
      const fn4 = function z() {
        ActionSheetActionCreatorsDefault.hideActionSheet(sheetKey);
      };
      cResult[7] = sheetKey;
      cResult[8] = fn4;
      let tmp16 = fn4;
    } else {
      tmp16 = cResult[8];
    }
    noop = tmp16;
    if (cResult[9] === tmp16) {
      if (cResult[12] !== tmp16) {
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
        cResult[12] = tmp16;
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
      if (cResult[14] === tmp16) {
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
      const obj3 = { dialogKey: sheetKey, onDismiss: tmp16, zIndex, children: content };
      const tmp22 = jsx(tmp(5766).Dialog, { dialogKey: sheetKey, onDismiss: tmp16, zIndex, children: content });
      cResult[14] = tmp16;
      cResult[15] = content;
      cResult[16] = sheetKey;
      cResult[17] = zIndex;
      cResult[18] = tmp22;
    }
    const obj4 = { transitionState: tmp5, close: tmp16, onLeave: tmp8, registerDismissHandler: first };
    cResult[9] = tmp16;
    cResult[10] = tmp5;
    cResult[11] = obj4;
  }
  const obj5 = { type: sheetKey(1260).ImpressionTypes.HALFSHEET, name: impressionName, properties: impressionProperties };
  cResult[2] = impressionName;
  cResult[3] = impressionProperties;
  cResult[4] = obj5;
  tmp9 = obj5;
  const tmp4 = _slicedToArray(noop.useState("visible"), 2);
}) : ((sheetKey, arg1) => {
  sheetKey = sheetKey.sheetKey;
  transitionState = undefined;
  dependencyMap = undefined;
  let registerDismissHandler;
  let callback2;
  ({ content, impressionName, impressionProperties, zIndex } = sheetKey);
  [transitionState, dependencyMap] = registerDismissHandler.useState("visible");
  _slicedToArray = registerDismissHandler.useRef(callback2);
  registerDismissHandler = registerDismissHandler.useCallback((current) => {
    closure_3.current = current;
  }, []);
  registerDismissHandler.useRef(callback2);
  const callback1 = registerDismissHandler.useCallback(() => {
    ref2.current();
  }, []);
  const obj = { type: sheetKey(1260).ImpressionTypes.HALFSHEET, name: impressionName, properties: impressionProperties };
  transitionState(8422)(obj);
  const imperativeHandle = registerDismissHandler.useImperativeHandle(arg1, () => ({
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
  transitionState(5780)(callback3);
  const tmp5 = transitionState(8422);
  return jsx(transitionState(6647).Provider, { value: memo, children: jsx(sheetKey(5766).Dialog, { dialogKey: sheetKey, onDismiss: callback2, zIndex, children: content }) });
}));
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheetPresenter.native.tsx");

export const ActionSheetPresenter = ReactCompilerGating.isReactCompilerEnabled() ? ((appEntryKey) => {
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
        const obj2 = { style: StyleSheet.absoluteFill, component: tmp(5714).TransitionGroupOverlayView, children: tmp11 };
        const tmp17 = jsx(tmp(12065).TransitionGroup, { style: StyleSheet.absoluteFill, component: tmp(5714).TransitionGroupOverlayView, children: tmp11 });
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
}) : ((appEntryKey) => {
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
  return jsx(appEntryKey(12065).TransitionGroup, { style: StyleSheet.absoluteFill, component: appEntryKey(5714).TransitionGroupOverlayView, children: mapped });
});