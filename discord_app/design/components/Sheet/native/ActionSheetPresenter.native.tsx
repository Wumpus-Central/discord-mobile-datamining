// === Module 13591: ActionSheetPresenter ===

// Module 13591 (ActionSheetPresenter)
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { StyleSheet } from "get ActivityIndicator" /* 17 */;
import closure_6 from "setContent" /* 4090 */;
import { NOOP } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let c4 = importAllResult;
let closure_9 = importAllResult.forwardRef((sheetKey, ref) => {
  sheetKey = sheetKey.sheetKey;
  let first;
  dependencyMap = undefined;
  let callback;
  callback = undefined;
  closure_5 = undefined;
  let callback1;
  let callback2;
  ({ content, impressionName, impressionProperties, zIndex } = sheetKey);
  const tmp = callback(callback.useState("visible"), 2);
  first = tmp[0];
  dependencyMap = tmp[1];
  callback = callback.useRef(callback2);
  callback = callback.useCallback((current) => {
    closure_3.current = current;
  }, []);
  closure_5 = callback.useRef(callback2);
  callback1 = callback.useCallback(() => {
    ref2.current();
  }, []);
  let obj = { type: sheetKey(503).ImpressionTypes.HALFSHEET, name: impressionName, properties: impressionProperties };
  first(9497)(obj);
  const imperativeHandle = callback.useImperativeHandle(ref, () => ({
    componentDidEnter() {
      callback("visible");
    },
    componentWillLeave(current) {
      callback("exiting");
      closure_5.current = current;
    },
    componentDidLeave() {
      callback("exited");
      closure_5.current = closure_1_7;
    }
  }), []);
  const items = [sheetKey];
  callback2 = callback.useCallback(() => {
    first(table[8]).hideActionSheet(sheetKey);
  }, items);
  const items1 = [first, callback2, callback1, callback];
  const items2 = [callback2];
  const memo = callback.useMemo(() => ({ transitionState: first, close: callback2, onLeave: callback1, registerDismissHandler: callback }), items1);
  const callback3 = callback.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current();
    }
    callback2();
    return true;
  }, items2);
  first(4812)(callback3);
  obj = { value: memo, children: jsx(sheetKey(4798).Dialog, { dialogKey: sheetKey, onDismiss: callback2, zIndex, children: content }) };
  return jsx(first(5816).Provider, { value: memo, children: jsx(sheetKey(4798).Dialog, { dialogKey: sheetKey, onDismiss: callback2, zIndex, children: content }) });
});
let result = require("set").fileFinishedImporting("design/components/Sheet/native/ActionSheetPresenter.native.tsx");

export const ActionSheetPresenter = function ActionSheetPresenter(appEntryKey) {
  appEntryKey = appEntryKey.appEntryKey;
  const items = [appEntryKey];
  const effect = importAllResult.useEffect(() => () => {
    const result = closure_1_1(closure_1_2[8]).resetActionSheetsForAppEntryKey(closure_0);
  }, items);
  let obj = appEntryKey(589);
  const items1 = [closure_6];
  const stateFromStoresArray = obj.useStateFromStoresArray(items1, () => stack.getStack(), []);
  const found = stateFromStoresArray.filter((appEntryKey) => appEntryKey.appEntryKey === appEntryKey);
  const mapped = found.map((content) => callback(closure_9, { sheetKey: content.key, content: content.content, impressionName: content.impressionName, impressionProperties: content.impressionProperties, zIndex: content.zIndex }, content.key));
  obj = { style: StyleSheet.absoluteFill, component: appEntryKey(4751).TransitionGroupOverlayView, children: mapped };
  return jsx(appEntryKey(11987).TransitionGroup, { style: StyleSheet.absoluteFill, component: appEntryKey(4751).TransitionGroupOverlayView, children: mapped });
};