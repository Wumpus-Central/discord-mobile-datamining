// === Module 14406: ActionSheetPresenter ===

// Module 14406 (ActionSheetPresenter)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4447 */;

const require = fn;
const StyleSheet = fn(17).StyleSheet;
const NOOP = fn(1074).NOOP;
const jsx = fn(21).jsx;
let closure_9 = noop.forwardRef((sheetKey, arg1) => {
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
  const obj = { type: sheetKey(1249).ImpressionTypes.HALFSHEET, name: impressionName, properties: impressionProperties };
  transitionState(9047)(obj);
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
  transitionState(5181)(callback3);
  const tmp5 = transitionState(9047);
  return jsx(transitionState(7392).Provider, { value: memo, children: jsx(sheetKey(5167).Dialog, { dialogKey: sheetKey, onDismiss: callback2, zIndex, children: content }) });
});
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheetPresenter.native.tsx");

export const ActionSheetPresenter = function ActionSheetPresenter(appEntryKey) {
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
  return jsx(appEntryKey(12675).TransitionGroup, { style: StyleSheet.absoluteFill, component: appEntryKey(5115).TransitionGroupOverlayView, children: mapped });
};