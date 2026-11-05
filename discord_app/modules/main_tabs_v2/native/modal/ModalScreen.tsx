// === Module 19266: modal/ModalScreen ===

// Module 19266 (modal/ModalScreen)
import nativeDefault from "native" /* 575 */;
import useTrackImpressionDefault from "useTrackImpression" /* 6166 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7261 */;
import useAppFrameDefault from "useAppFrame" /* 18336 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = fn;
let closure_3 = ["impressionName", "impressionProperties"];
get_ActivityIndicator = fn(17);
({ View: closure_6, StyleSheet: metroImportDefault } = get_ActivityIndicator);
const NOOP = fn(1072).NOOP;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5143);
let closure_11 = createStyles.createStyles((paddingLeft, paddingRight) => {
  const obj = { containerWithPadding: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingLeft, paddingRight }, content: { flex: 1 } };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/modal/ModalScreen.tsx");

export default function Modal(route) {
  const params = route.route.params;
  const modal = params.modal;
  importDefault = undefined;
  let isIpadOSResult = useIsWindowLargeDefault();
  if (isIpadOSResult) {
    isIpadOSResult = modal(5100).isIpadOS();
    const obj = modal(5100);
  }
  if (isIpadOSResult) {
    isIpadOSResult = "modal" === params.presentation;
  }
  if (!isIpadOSResult) {
    isIpadOSResult = modal(19267).shouldExcludeSafeAreaForModalKey(modal.key);
    const obj2 = modal(19267);
  }
  ({ insets, styles } = useAppFrameDefault({ enabled: !isIpadOSResult }));
  const tmp7 = closure_11(insets.left, insets.right);
  let props = modal.props;
  if (props == null) {
    props = {};
  }
  ({ impressionName, impressionProperties } = props);
  const obj3 = { enabled: !isIpadOSResult };
  const tmp6 = useAppFrameDefault({ enabled: !isIpadOSResult });
  const callback = noop.useCallback(() => {
    closure_1(6882).pop();
  }, []);
  const obj4 = { type: null, name: null, properties: null };
  const tmp9 = _objectWithoutProperties(props, closure_3);
  obj4.type = modal(1260).ImpressionTypes.MODAL;
  obj4.name = impressionName;
  obj4.properties = impressionProperties;
  useTrackImpressionDefault(obj4);
  let callbacks = modal.callbacks;
  let onExited;
  if (callbacks != null) {
    onExited = callbacks.onExited;
  }
  importDefault = noop.useRef(onExited);
  const effect = noop.useEffect(() => {
    const callbacks = modal.callbacks;
    let onExited;
    if (callbacks != null) {
      onExited = callbacks.onExited;
    }
    closure_1.current = onExited;
  });
  const effect1 = noop.useEffect(() => () => {
    const current = ref.current;
    let currentResult;
    if (current != null) {
      currentResult = current();
    }
    return currentResult;
  }, []);
  const layoutEffect = noop.useLayoutEffect(() => modal(7799).trackAppUIViewed("ModalScreen"), []);
  items = [absoluteFillObject.absoluteFillObject, , ];
  let containerWithPadding;
  if (!isIpadOSResult) {
    containerWithPadding = tmp7.containerWithPadding;
  }
  const obj6 = { style: items, onAccessibilityEscape: null, children: null };
  items[1] = containerWithPadding;
  items[2] = styles.container;
  if (modal.closable) {
    let pop = tmp(6882).pop;
  } else {
    pop = NOOP;
  }
  obj6.onAccessibilityEscape = pop;
  const obj7 = { style: null, children: null };
  const items1 = [tmp7.content, styles.content];
  obj7.style = items1;
  const obj8 = { style: null, collapsable: null == styles.container, children: null };
  const items2 = [tmp7.content, styles.body];
  obj8.style = items2;
  const obj9 = {};
  const merged = Object.assign(tmp9);
  obj9.style = undefined;
  obj9.transitionState = null;
  obj9.onClose = callback;
  obj8.children = <modal.modal />;
  const items3 = [closure_9(closure_6, obj8), ];
  let tmp18Result = null;
  if (null != styles.container) {
    const obj10 = { style: styles.border, pointerEvents: "none" };
    tmp18Result = closure_9(closure_6, obj10);
  }
  items3[1] = tmp18Result;
  obj7.children = items3;
  const items4 = [closure_10(closure_6, obj7), ];
  const tmpResult = useTrackImpressionDefault;
  const tmp12Result = modal(1377);
  items4[1] = modal(1377).isIOS() && closure_9(modal(12586).PortalKeyboardRenderer, { portal: false });
  obj6.children = closure_10(modal(16693).SafeAreaProvider, { children: items4 });
  return closure_9(closure_6, obj6);
};