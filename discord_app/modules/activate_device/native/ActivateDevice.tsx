// === Module 14137: ActivateDevice ===

// Module 14137 (ActivateDevice)
import nativeDefault from "native" /* 576 */;
import FastImageDefault from "FastImage" /* 5799 */;
import ConsoleOAuthApplications from "ConsoleOAuthApplications" /* 9359 */;
import _modDef14141 from "module_14141" /* 14141 */;
import _modDef14142 from "module_14142" /* 14142 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ImageBackground: metroRequire, ActivityIndicator: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let obj2 = { background: { flex: 1 }, imageStyle: { marginVertical: 0, resizeMode: "cover", backgroundColor: nativeDefault.colors.TEXT_BRAND }, safeArea: { flex: 1, justifyContent: "center", alignItems: "center" }, content: null, scroller: null, scrollerContent: null };
let obj3 = { marginVertical: 0, resizeMode: "cover", backgroundColor: nativeDefault.colors.TEXT_BRAND };
obj2.content = { maxWidth: 480, backgroundColor: nativeDefault.colors.PANEL_BG, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.lg, padding: 24, marginHorizontal: 24, marginVertical: 36, shadowColor: nativeDefault.colors.BLACK, shadowOpacity: 0.2, shadowOffset: { width: 0, height: 4 }, shadowRadius: 4 };
obj2.scroller = { alignSelf: "stretch", flexGrow: 0 };
obj2.scrollerContent = { flexDirection: "column", gap: 16 };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activate_device/native/ActivateDevice.tsx");

export const ActivateDevice = (onClose) => {
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
        closure_3(_modDef14141);
      } else {
        const scopes = userCodeData.scopes;
        if (scopes.some((item) => first(first1[11]).isSocialLayerUmbrellaScope(item))) {
          closure_3(_modDef14142);
        }
      }
    }
  }, items4);
  const items5 = [first1];
  const effect1 = deviceCodeAuthorizeCallback.useEffect(() => {
    if (null != first1) {
      FastImageDefault.preload(tmp);
    }
  }, items5);
  const type = first.type;
  if ("user-code-input" === type) {
    let prefilledUserCode;
    if (first.usePrefilledCode) {
      prefilledUserCode = onClose.prefilledUserCode;
    }
    const obj3 = { prefilledUserCode, onUserCodeAccepted: callback3, onClose };
    let tmp21Result = jsx(tmp7(tmp8[14]).UserCodeInput, { prefilledUserCode, onUserCodeAccepted: callback3, onClose });
  } else if ("authorization" === type) {
    tmp21Result = <closure_7 animating />;
  } else if ("success" === type) {
    const obj4 = { onComplete: onClose, data: first.userCodeData, successImage: first1 };
    tmp21Result = jsx(tmp7(tmp8[15]).ActivateDeviceSuccess, { onComplete: onClose, data: first.userCodeData, successImage: first1 });
  } else {
    tmp21Result = null;
    if ("error" === type) {
      const obj5 = { onRetry: callback };
      tmp21Result = jsx(tmp7(tmp8[16]).ActivateDeviceError, { onRetry: callback });
    }
  }
  const obj6 = { source: null, imageStyle: null, style: null, children: null };
  const obj2 = first(first1[7]);
  obj6.source = first(first1[17]).makeSource(require("module_14149"));
  obj6.imageStyle = tmp.imageStyle;
  const items6 = [tmp.background];
  obj6.style = items6;
  const rect = { bottom: true, top: true, style: tmp.safeArea, children: null };
  const obj7 = { style: tmp.content, children: <closure_8 bounces={false} style={tmp.scroller} contentContainerStyle={tmp.scrollerContent}>{tmp21Result}</closure_8> };
  rect.children = <closure_5 style={tmp.content}><closure_8 bounces={false} style={tmp.scroller} contentContainerStyle={tmp.scrollerContent}>{tmp21Result}</closure_8></closure_5>;
  obj6.children = jsx(first(first1[19]).SafeAreaPaddingView, { bottom: true, top: true, style: tmp.safeArea, children: null });
  return <closure_6 source={null} imageStyle={null} style={null}>{null}</closure_6>;
};