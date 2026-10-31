// discord_app/modules/main_tabs_v2/native/modal/ModalScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import useTrackImpressionDefault from "../../../app_analytics/useTrackImpression.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
let closure_3 = ["impressionName", "impressionProperties"];
get_ActivityIndicator = fn(17);
({ View: metroRequire, StyleSheet: closure_7 } = get_ActivityIndicator);
const NOOP = fn(1072).NOOP;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5014);
const obj2 = { containerWithPadding: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST } };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/modal/ModalScreen.tsx");

export default function Modal(route) {
  const params = route.route.params;
  const modal = params.modal;
  importDefault = undefined;
  let props = modal.props;
  if (props == null) {
    props = {};
  }
  ({ impressionName, impressionProperties } = props);
  const tmp = closure_11();
  const callback = noop.useCallback(() => {
    closure_1(6744).pop();
  }, []);
  const obj = { type: null, name: null, properties: null };
  const tmp2 = _objectWithoutProperties(props, closure_3);
  obj.type = modal(1260).ImpressionTypes.MODAL;
  obj.name = impressionName;
  obj.properties = impressionProperties;
  useTrackImpressionDefault(obj);
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
  const effect1 = noop.useEffect(
    () => () => {
      const current = ref.current;
      let currentResult;
      if (current != null) {
        currentResult = current();
      }
      return currentResult;
    },
    [],
  );
  const layoutEffect = noop.useLayoutEffect(() => modal(7654).trackAppUIViewed("ModalScreen"), []);
  ({ left, right } = useSafeAreaInsetsDefault());
  let isIpadOSResult = tmp4(7112)();
  if (isIpadOSResult) {
    isIpadOSResult = tmp7(4971).isIpadOS();
    const tmp7Result = tmp7(4971);
  }
  if (isIpadOSResult) {
    isIpadOSResult = "modal" === params.presentation;
  }
  if (!isIpadOSResult) {
    isIpadOSResult = tmp7(18954).shouldExcludeSafeAreaForModalKey(modal.key);
    const tmp7Result3 = tmp7(18954);
  }
  const items = [absoluteFillObject.absoluteFillObject];
  let tmp17;
  if (!isIpadOSResult) {
    const items1 = [tmp.containerWithPadding];
    const obj3 = { paddingLeft: left, paddingRight: right };
    items1[1] = obj3;
    tmp17 = items1;
  }
  const obj4 = { style: items, onAccessibilityEscape: null, children: null };
  items[1] = tmp17;
  if (modal.closable) {
    let pop = tmp4(6744).pop;
  } else {
    pop = NOOP;
  }
  obj4.onAccessibilityEscape = pop;
  const obj5 = {};
  const merged = Object.assign(tmp2);
  obj5.style = undefined;
  obj5.transitionState = null;
  obj5.onClose = callback;
  const items2 = [<modal.modal />];
  const tmp13 = useSafeAreaInsetsDefault();
  const tmp7Result4 = modal(1375);
  items2[1] = modal(1375).isIOS() && closure_9(modal(12221).PortalKeyboardRenderer, { portal: false });
  obj4.children = closure_10(modal(16421).SafeAreaProvider, { children: items2 });
  return closure_9(closure_6, obj4);
}
