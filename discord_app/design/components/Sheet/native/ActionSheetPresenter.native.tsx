// === Module 14134: ActionSheetPresenter ===

// Module 14134 (ActionSheetPresenter)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4251 */;

const require = fn;
const StyleSheet = fn(17).StyleSheet;
const NOOP = fn(1074).NOOP;
const jsx = fn(21).jsx;
let closure_9 = noop.forwardRef((sheetKey, ref) => {
  sheetKey = sheetKey.sheetKey;
  _slicedToArray = undefined;
  let registerDismissHandler;
  let callback2;
  ({ content, impressionName, impressionProperties, zIndex } = sheetKey);
  const tmp = _slicedToArray(registerDismissHandler.useState("visible"), 2);
  const transitionState = tmp[0];
  dependencyMap = tmp[1];
  _slicedToArray = registerDismissHandler.useRef(callback2);
  registerDismissHandler = registerDismissHandler.useCallback((current) => {
    closure_3.current = current;
  }, []);
  registerDismissHandler.useRef(callback2);
  const callback1 = registerDismissHandler.useCallback(() => {
    ref2.current();
  }, []);
  let obj = { type: sheetKey(1250).ImpressionTypes.HALFSHEET, name: impressionName, properties: impressionProperties };
  transitionState(8768)(obj);
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
  transitionState(4972)(callback3);
  obj = { value: memo, children: jsx(sheetKey(4958).Dialog, { dialogKey: sheetKey, onDismiss: callback2, zIndex, children: content }) };
  return jsx(transitionState(7152).Provider, { value: memo, children: jsx(sheetKey(4958).Dialog, { dialogKey: sheetKey, onDismiss: callback2, zIndex, children: content }) });
});
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheetPresenter.native.tsx");

export const ActionSheetPresenter = function ActionSheetPresenter(appEntryKey) {
  appEntryKey = appEntryKey.appEntryKey;
  const items = [appEntryKey];
  const effect = noop.useEffect(() => () => {
    const result = ActionSheetActionCreatorsDefault.resetActionSheetsForAppEntryKey(appEntryKey);
  }, items);
  let obj = appEntryKey(504);
  const items1 = [ActionSheetStore];
  const stateFromStoresArray = obj.useStateFromStoresArray(items1, () => stack.getStack(), []);
  const found = stateFromStoresArray.filter((appEntryKey) => appEntryKey.appEntryKey === appEntryKey);
  const mapped = found.map((content) => <closure_1_9 key={arg0.key} sheetKey={arg0.key} content={arg0.content} impressionName={arg0.impressionName} impressionProperties={arg0.impressionProperties} zIndex={arg0.zIndex} />);
  obj = { style: StyleSheet.absoluteFill, component: appEntryKey(4911).TransitionGroupOverlayView, children: mapped };
  return jsx(appEntryKey(12423).TransitionGroup, { style: StyleSheet.absoluteFill, component: appEntryKey(4911).TransitionGroupOverlayView, children: mapped });
};