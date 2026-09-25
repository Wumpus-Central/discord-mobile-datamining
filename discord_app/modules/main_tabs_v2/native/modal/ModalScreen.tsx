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
const NOOP = fn(1074).NOOP;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4829);
const obj2 = { containerWithPadding: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST } };
let closure_11 = createStyles.createStyles(obj2);
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
  const callback = noop.useCallback(() => {
    closure_1(5032).pop();
  }, []);
  const obj = { type: null, name: null, properties: null };
  const tmp2 = _objectWithoutProperties(props, closure_3);
  obj.type = modal(1249).ImpressionTypes.MODAL;
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
  const layoutEffect = noop.useLayoutEffect(() => modal(6890).trackAppUIViewed("ModalScreen"), []);
  ({ left, right } = useSafeAreaInsetsDefault());
  const tmp13 = useSafeAreaInsetsDefault();
  const items = [absoluteFillObject.absoluteFillObject];
  let tmp16;
  if (!tmp7Result.shouldExcludeSafeAreaForModalKey(modal.key)) {
    const items1 = [tmp.containerWithPadding];
    const obj3 = { paddingLeft: left, paddingRight: right };
    items1[1] = obj3;
    tmp16 = items1;
  }
  const obj4 = { style: items, onAccessibilityEscape: null, children: null };
  items[1] = tmp16;
  if (modal.closable) {
    let pop = tmp4(5032).pop;
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
  tmp7Result = modal(16662);
  let isIOSResult = modal(1364).isIOS();
  if (isIOSResult) {
    isIOSResult = closure_9(tmp7(16264).PortalKeyboardRenderer, { portal: false });
  }
  items2[1] = isIOSResult;
  obj4.children = items2;
  return closure_10(closure_6, obj4);
}
