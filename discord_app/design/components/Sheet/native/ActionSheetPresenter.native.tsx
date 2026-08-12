// discord_app/design/components/Sheet/native/ActionSheetPresenter.native.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import { StyleSheet } from "get ActivityIndicator";
import setContent from "setContent";
import { NOOP } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
let c4 = importAllResult;
let closure_9 = importAllResult.forwardRef((sheetKey, ref) => {
  let content;
  let impressionName;
  let impressionProperties;
  let zIndex;
  sheetKey = sheetKey.sheetKey;
  let first;
  let dependencyMap;
  let callback;
  callback = undefined;
  let closure_5;
  let callback1;
  let callback2;
  ({ content, impressionName, impressionProperties, zIndex } = sheetKey);
  const tmp = callback(callback.useState("visible"), 2);
  first = tmp[0];
  dependencyMap = tmp[1];
  callback = callback.useRef(callback2);
  callback = callback.useCallback((current) => {
    _slicedToArray.current = current;
  }, []);
  closure_5 = callback.useRef(callback2);
  callback1 = callback.useCallback(() => {
    ref2.current();
  }, []);
  let obj = { type: null, name: null, properties: null };
  obj[0] = sheetKey(503).ImpressionTypes.HALFSHEET;
  obj[1] = impressionName;
  obj[2] = impressionProperties;
  first(9395)(obj);
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
      closure_5.current = outer1_7;
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
  first(4751)(callback3);
  obj = { value: memo, children: null };
  obj[1] = jsx(sheetKey(4736).Dialog, { dialogKey: sheetKey, onDismiss: callback2, zIndex, children: content });
  return jsx(first(5749).Provider, { value: memo, children: null });
});
let result = require("get ActivityIndicator").fileFinishedImporting("design/components/Sheet/native/ActionSheetPresenter.native.tsx");

export const ActionSheetPresenter = function ActionSheetPresenter(appEntryKey) {
  appEntryKey = appEntryKey.appEntryKey;
  const items = [appEntryKey];
  const effect = importAllResult.useEffect(() => () => {
    const result = outer1_1(outer1_2[8]).resetActionSheetsForAppEntryKey(closure_0);
  }, items);
  let obj = appEntryKey(589);
  const items1 = [setContent];
  const stateFromStoresArray = obj.useStateFromStoresArray(items1, () => stack.getStack(), []);
  const found = stateFromStoresArray.filter((appEntryKey) => appEntryKey.appEntryKey === appEntryKey);
  const mapped = found.map((content) => callback(closure_9, { sheetKey: content.key, content: content.content, impressionName: content.impressionName, impressionProperties: content.impressionProperties, zIndex: content.zIndex }, content.key));
  obj = { style: StyleSheet.absoluteFill, component: null, children: null };
  obj[1] = appEntryKey(4689).TransitionGroupOverlayView;
  obj[2] = mapped;
  return jsx(appEntryKey(10338).TransitionGroup, { style: StyleSheet.absoluteFill, component: null, children: null });
};