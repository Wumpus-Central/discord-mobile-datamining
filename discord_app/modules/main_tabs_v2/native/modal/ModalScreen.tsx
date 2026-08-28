// === Module 16381: Modal ===

// Module 16381 (Modal)
import ThemesDefault from "Themes" /* 712 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import trackImpressionDefault from "trackImpression" /* 8832 */;
import closure_4 from "_objectWithoutProperties" /* 109 */;
import closure_5 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { NOOP } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
let closure_3 = ["impressionName", "impressionProperties"];
({ View: closure_6, StyleSheet: error } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { containerWithPadding: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[0] = createCacheKey;
let closure_11 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/modal/ModalScreen.tsx");

export default function Modal(route) {
  const modal = route.route.params.modal;
  importDefault = undefined;
  let props = modal.props;
  if (props == null) {
    props = {};
  }
  ({ impressionName, impressionProperties } = props);
  const tmp = callback3();
  obj1 = React;
  const callback = React.useCallback(() => {
    let arr = callback(4689);
    arr = arr.pop();
  }, []);
  let obj = { type: null, name: null, properties: null };
  const tmp2 = callback(props, closure_3);
  obj[0] = modal(503).ImpressionTypes.MODAL;
  obj[1] = impressionName;
  obj[2] = impressionProperties;
  trackImpressionDefault(obj);
  let callbacks = modal.callbacks;
  let onExited;
  if (callbacks != null) {
    onExited = callbacks.onExited;
  }
  importDefault = React.useRef(onExited);
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
  const layoutEffect = obj1.useLayoutEffect(() => modal(7167).trackAppUIViewed("ModalScreen"), []);
  const tmp6 = trackImpressionDefault;
  ({ left, right } = useSafeAreaInsetsDefault());
  let tmp7Result = tmp7(16382);
  const items = [absoluteFillObject.absoluteFillObject, ];
  let tmp16;
  if (!tmp7Result.shouldExcludeSafeAreaForModalKey(modal.key)) {
    const items1 = [tmp.containerWithPadding, ];
    obj = { paddingLeft: null, paddingRight: null };
    obj[0] = left;
    obj[1] = right;
    items1[1] = obj;
    tmp16 = items1;
  }
  obj1 = { style: items, onAccessibilityEscape: null, children: null };
  items[1] = tmp16;
  if (modal.closable) {
    let pop = tmp4(4689).pop;
  } else {
    pop = NOOP;
  }
  obj1[1] = pop;
  const obj2 = {};
  const merged = Object.assign(tmp2);
  obj2.style = undefined;
  obj2.transitionState = null;
  obj2.onClose = callback;
  const items2 = [<modal.modal />, ];
  tmp7Result = tmp7(500);
  let isIOSResult = tmp7Result.isIOS();
  if (isIOSResult) {
    isIOSResult = callback2(tmp7(16268).PortalKeyboardRenderer, { portal: false });
  }
  items2[1] = isIOSResult;
  obj1[2] = items2;
  return closure_10(closure_6, obj1);
};