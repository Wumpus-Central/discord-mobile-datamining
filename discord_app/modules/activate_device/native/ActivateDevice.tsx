// === Module 15699: ActivateDevice ===

// Module 15699 (ActivateDevice)
import nativeDefault from "native" /* 575 */;
import NativeImageManagerModuleDefault from "NativeImageManagerModule" /* 1893 */;
import ConsoleOAuthApplications from "ConsoleOAuthApplications" /* 14159 */;
import _modDef15703 from "module_15703" /* 15703 */;
import _modDef15704 from "module_15704" /* 15704 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire, ScrollView: closure_7, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { background: { flex: 1 }, imageStyle: null, safeArea: null, content: null, scroller: null, scrollerContent: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.width = undefined;
obj3.height = undefined;
obj3.marginVertical = 0;
obj3.resizeMode = "cover";
obj3.backgroundColor = nativeDefault.colors.TEXT_BRAND;
obj2.imageStyle = obj3;
obj2.safeArea = { flex: 1, justifyContent: "center", alignItems: "center" };
obj2.content = { maxWidth: 480, backgroundColor: nativeDefault.colors.PANEL_BG, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.lg, padding: 24, marginHorizontal: 24, marginVertical: 36, shadowColor: nativeDefault.colors.BLACK, shadowOpacity: 0.2, shadowOffset: { width: 0, height: 4 }, shadowRadius: 4 };
obj2.scroller = { alignSelf: "stretch", flexGrow: 0 };
obj2.scrollerContent = { flexDirection: "column", gap: 16 };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activate_device/native/ActivateDevice.tsx");

export (onClose) => {
  onClose = onClose.onClose;
  first1 = undefined;
  _slicedToArray = undefined;
  let deviceCodeAuthorizeCallback;
  const tmp = closure_10();
  const tmp2 = _slicedToArray(deviceCodeAuthorizeCallback.useState({ type: "user-code-input", usePrefilledCode: true }), 2);
  const first = tmp2[0];
  importDefault = tmp4;
  [first1, _slicedToArray] = deviceCodeAuthorizeCallback.useState(null);
  const activateDeviceStepTracking = first(first1[6]).useActivateDeviceStepTracking(first);
  let items = [tmp2[1]];
  const callback = deviceCodeAuthorizeCallback.useCallback(() => {
    closure_1({ type: "user-code-input" });
  }, items);
  const items1 = [tmp2[1]];
  const items2 = [tmp2[1]];
  const callback1 = deviceCodeAuthorizeCallback.useCallback((userCodeData) => {
    closure_1({ type: "success", userCodeData });
  }, items1);
  const callback2 = deviceCodeAuthorizeCallback.useCallback((userCodeData) => {
    closure_1({ type: "error", userCodeData });
  }, items2);
  let obj = first(first1[6]);
  deviceCodeAuthorizeCallback = first(first1[7]).useDeviceCodeAuthorizeCallback(callback, callback2, callback1);
  const items3 = [deviceCodeAuthorizeCallback];
  const items4 = [first];
  const callback3 = deviceCodeAuthorizeCallback.useCallback((userCodeData) => {
    closure_0 = userCodeData;
    closure_1({ type: "authorization", userCodeData });
    first(first1[8]).openOAuth2Modal({
      clientId: userCodeData.clientId,
      scopes: userCodeData.scopes,
      responseType: "code",
      isTrustedName: true,
      isEmbeddedFlow: true,
      withBackPressHandler: false,
      callbackWithoutPost(arg0) {
        return deviceCodeAuthorizeCallback(closure_0, arg0);
      }
    });
  }, items3);
  const effect = deviceCodeAuthorizeCallback.useEffect(() => {
    if ("userCodeData" in first) {
      const userCodeData = first.userCodeData;
      const items = [ConsoleOAuthApplications.ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID, ConsoleOAuthApplications.ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID];
      if (items.includes(userCodeData.clientId)) {
        closure_3(_modDef15703);
      } else {
        const scopes = userCodeData.scopes;
        if (scopes.some((item) => first(first1[11]).isSocialLayerUmbrellaScope(item))) {
          closure_3(_modDef15704);
        }
      }
    }
  }, items4);
  const items5 = [first1];
  const effect1 = deviceCodeAuthorizeCallback.useEffect(() => {
    if (null != first1) {
      const obj2 = { uri: tmp };
      NativeImageManagerModuleDefault.preload(obj2);
    }
  }, items5);
  const type = first.type;
  if ("user-code-input" === type) {
    let prefilledUserCode;
    if (first.usePrefilledCode) {
      prefilledUserCode = onClose.prefilledUserCode;
    }
    const obj3 = { prefilledUserCode, onUserCodeAccepted: callback3, onClose };
    let tmp21Result = closure_8(tmp7(tmp8[14]).UserCodeInput, obj3);
  } else if ("authorization" === type) {
    tmp21Result = closure_8(closure_6, { animating: true });
  } else if ("success" === type) {
    const obj4 = { onComplete: onClose, data: first.userCodeData, successImage: first1 };
    tmp21Result = closure_8(tmp7(tmp8[15]).ActivateDeviceSuccess, obj4);
  } else {
    tmp21Result = null;
    if ("error" === type) {
      const obj5 = { onRetry: callback };
      tmp21Result = closure_8(tmp7(tmp8[16]).ActivateDeviceError, obj5);
    }
  }
  const obj6 = { style: tmp.background, children: null };
  const obj7 = { source: null, style: null };
  let obj2 = first(first1[7]);
  const tmp23 = require("FastImage");
  obj7.source = first(first1[18]).makeSource(require("module_15711"));
  obj7.style = tmp.imageStyle;
  const items6 = [closure_8(tmp23, obj7), ];
  const rect = { bottom: true, top: true, style: tmp.safeArea, children: null };
  const obj8 = { style: tmp.content, children: closure_8(closure_7, { bounces: false, style: tmp.scroller, contentContainerStyle: tmp.scrollerContent, children: tmp21Result }) };
  rect.children = closure_8(closure_5, obj8);
  items6[1] = closure_8(first(first1[20]).SafeAreaPaddingView, rect);
  obj6.children = items6;
  return closure_9(closure_5, obj6);
}