// === Module 16871: modal/ModalScreen ===

// Module 16871 (modal/ModalScreen)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8768 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = fn;
let closure_3 = ["impressionName", "impressionProperties"];
get_ActivityIndicator = fn(17);
({ View: metroRequire, StyleSheet: closure_7 } = get_ActivityIndicator);
const NOOP = fn(1074).NOOP;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { containerWithPadding: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles.containerWithPadding = createStyles;
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/modal/ModalScreen.tsx");

export default function Modal(route) {
  const modal = route.route.params.modal;
  importDefault = undefined;
  let props = modal.props;
  if (props == null) {
    props = {};
  }
  ({ impressionName, impressionProperties } = props);
  const tmp = closure_11();
  let obj1 = noop;
  const callback = noop.useCallback(() => {
    let arr = closure_1(4763);
    arr = arr.pop();
  }, []);
  let obj = { type: null, name: null, properties: null };
  const tmp2 = _objectWithoutProperties(props, closure_3);
  obj.type = modal(1250).ImpressionTypes.MODAL;
  obj.name = impressionName;
  obj.properties = impressionProperties;
  useTrackImpressionDefault(obj);
  let callbacks = modal.callbacks;
  let onExited;
  if (callbacks != null) {
    onExited = callbacks.onExited;
  }
  importDefault = noop.useRef(onExited);
  const effect = obj1.useEffect(() => {
    const callbacks = modal.callbacks;
    let onExited;
    if (callbacks != null) {
      onExited = callbacks.onExited;
    }
    closure_1.current = onExited;
  });
  const effect1 = obj1.useEffect(() => () => {
    const current = ref.current;
    let currentResult;
    if (current != null) {
      currentResult = current();
    }
    return currentResult;
  }, []);
  const layoutEffect = obj1.useLayoutEffect(() => modal(7475).trackAppUIViewed("ModalScreen"), []);
  ({ left, right } = useSafeAreaInsetsDefault());
  let tmp7Result = tmp7(16872);
  const items = [absoluteFillObject.absoluteFillObject, ];
  let tmp16;
  if (!tmp7Result.shouldExcludeSafeAreaForModalKey(modal.key)) {
    const items1 = [tmp.containerWithPadding, ];
    obj = { paddingLeft: left, paddingRight: right };
    items1[1] = obj;
    tmp16 = items1;
  }
  obj1 = { style: items, onAccessibilityEscape: null, children: null };
  items[1] = tmp16;
  if (modal.closable) {
    let pop = tmp4(4763).pop;
  } else {
    pop = NOOP;
  }
  obj1.onAccessibilityEscape = pop;
  const obj2 = {};
  const merged = Object.assign(tmp2);
  obj2.style = undefined;
  obj2.transitionState = null;
  obj2.onClose = callback;
  const items2 = [<modal.modal />, ];
  tmp7Result = tmp7(1115);
  let isIOSResult = tmp7Result.isIOS();
  if (isIOSResult) {
    isIOSResult = closure_9(tmp7(16756).PortalKeyboardRenderer, { portal: false });
  }
  items2[1] = isIOSResult;
  obj1.children = items2;
  return closure_10(closure_6, obj1);
};