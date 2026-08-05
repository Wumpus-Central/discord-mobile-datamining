// discord_app/modules/main_tabs_v2/native/modal/ModalScreen.tsx
import _objectWithoutProperties from "_objectWithoutProperties";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { NOOP } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let closure_6;
let error;
const require = arg1;
let closure_3 = ["impressionName", "impressionProperties"];
({ View: closure_6, StyleSheet: error } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { containerWithPadding: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/modal/ModalScreen.tsx");

export default function Modal(route) {
  let impressionName;
  let impressionProperties;
  let left;
  let right;
  const modal = route.route.params.modal;
  let importDefault;
  let props = modal.props;
  if (props == null) {
    props = {};
  }
  ({ impressionName, impressionProperties } = props);
  const tmp = createCacheKey();
  let obj1 = React;
  const callback = React.useCallback(() => {
    let arr = callback(4490);
    arr = arr.pop();
  }, []);
  let obj = { type: null, name: null, properties: null };
  const tmp2 = callback(props, closure_3);
  obj[0] = modal(503).ImpressionTypes.MODAL;
  obj[1] = impressionName;
  obj[2] = impressionProperties;
  require("../../../app_analytics/useTrackImpression.tsx")(obj);
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
  const layoutEffect = obj1.useLayoutEffect(() => modal(6843).trackAppUIViewed("ModalScreen"), []);
  const tmp6 = require("../../../app_analytics/useTrackImpression.tsx");
  ({ left, right } = require("../../../safe_area/useSafeAreaInsets.native.tsx")());
  let tmp7Result = tmp7(15816);
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
    let pop = tmp4(4490).pop;
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
    isIOSResult = callback2(tmp7(15705).PortalKeyboardRenderer, { portal: false });
  }
  items2[1] = isIOSResult;
  obj1[2] = items2;
  return closure_10(closure_6, obj1);
};