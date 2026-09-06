// === Module 13875: ActivateDevice ===

// Module 13875 (ActivateDevice)
import nativeDefault from "native" /* 576 */;
import FastImageDefault from "FastImage" /* 5587 */;
import ConsoleOAuthApplications from "ConsoleOAuthApplications" /* 9261 */;
import _modDef13879 from "module_13879" /* 13879 */;
import _modDef13880 from "module_13880" /* 13880 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ImageBackground: metroRequire, ActivityIndicator: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { background: { flex: 1 }, imageStyle: null, safeArea: null, content: null, scroller: null, scrollerContent: null };
createStyles = { marginVertical: 0, resizeMode: "cover", backgroundColor: nativeDefault.colors.TEXT_BRAND };
createStyles.imageStyle = createStyles;
createStyles.safeArea = { flex: 1, justifyContent: "center", alignItems: "center" };
createStyles.content = { maxWidth: 480, backgroundColor: nativeDefault.colors.PANEL_BG, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.lg, padding: 24, marginHorizontal: 24, marginVertical: 36, shadowColor: nativeDefault.colors.BLACK, shadowOpacity: 0.2, shadowOffset: { width: 0, height: 4 }, shadowRadius: 4 };
createStyles.scroller = { alignSelf: "stretch", flexGrow: 0 };
createStyles.scrollerContent = { flexDirection: "column", gap: 16 };
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activate_device/native/ActivateDevice.tsx");

export const ActivateDevice = (onClose) => {
  onClose = onClose.onClose;
  _slicedToArray = undefined;
  let deviceCodeAuthorizeCallback;
  const tmp = closure_10();
  const tmp2 = _slicedToArray(deviceCodeAuthorizeCallback.useState({ type: "user-code-input", usePrefilledCode: true }), 2);
  const first = tmp2[0];
  importDefault = tmp4;
  const tmp5 = _slicedToArray(deviceCodeAuthorizeCallback.useState(null), 2);
  const first1 = tmp5[0];
  _slicedToArray = tmp5[1];
  let obj = first(first1[6]);
  const activateDeviceStepTracking = obj.useActivateDeviceStepTracking(first);
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
  let obj1 = first(first1[7]);
  deviceCodeAuthorizeCallback = obj1.useDeviceCodeAuthorizeCallback(callback, callback2, callback1);
  const items3 = [deviceCodeAuthorizeCallback];
  const items4 = [first];
  const callback3 = deviceCodeAuthorizeCallback.useCallback((userCodeData) => {
    closure_0 = userCodeData;
    let obj = { type: "authorization", userCodeData };
    closure_1(obj);
    obj = {
      clientId: userCodeData.clientId,
      scopes: userCodeData.scopes,
      responseType: "code",
      isTrustedName: true,
      isEmbeddedFlow: true,
      withBackPressHandler: false,
      callbackWithoutPost(arg0) {
        return deviceCodeAuthorizeCallback(closure_0, arg0);
      }
    };
    first(first1[8]).openOAuth2Modal(obj);
  }, items3);
  const effect = deviceCodeAuthorizeCallback.useEffect(() => {
    if ("userCodeData" in first) {
      const userCodeData = first.userCodeData;
      const items = [ConsoleOAuthApplications.ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID, ConsoleOAuthApplications.ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID];
      if (items.includes(userCodeData.clientId)) {
        closure_3(_modDef13879);
      } else {
        const scopes = userCodeData.scopes;
        if (scopes.some((item) => first(first1[11]).isSocialLayerUmbrellaScope(item))) {
          closure_3(_modDef13880);
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
    obj = { prefilledUserCode, onUserCodeAccepted: callback3, onClose };
    let tmp21Result = jsx(tmp7(tmp8[14]).UserCodeInput, { prefilledUserCode, onUserCodeAccepted: callback3, onClose });
  } else if ("authorization" === type) {
    tmp21Result = <closure_7 animating />;
  } else if ("success" === type) {
    obj = { onComplete: onClose, data: first.userCodeData, successImage: first1 };
    tmp21Result = jsx(tmp7(tmp8[15]).ActivateDeviceSuccess, { onComplete: onClose, data: first.userCodeData, successImage: first1 });
  } else {
    tmp21Result = null;
    if ("error" === type) {
      obj1 = { onRetry: callback };
      tmp21Result = jsx(tmp7(tmp8[16]).ActivateDeviceError, { onRetry: callback });
    }
  }
  const obj2 = { source: first(first1[17]).makeSource(require("module_13887")), imageStyle: tmp.imageStyle, style: null, children: null };
  const items6 = [tmp.background];
  obj2.style = items6;
  const rect = { bottom: true, top: true, style: tmp.safeArea, children: null };
  const obj3 = { style: tmp.content, children: <closure_8 bounces={false} style={tmp.scroller} contentContainerStyle={tmp.scrollerContent}>{tmp21Result}</closure_8> };
  rect.children = <closure_5 style={tmp.content}><closure_8 bounces={false} style={tmp.scroller} contentContainerStyle={tmp.scrollerContent}>{tmp21Result}</closure_8></closure_5>;
  obj2.children = jsx(first(first1[19]).SafeAreaPaddingView, { bottom: true, top: true, style: tmp.safeArea, children: null });
  return <closure_6 source={first(first1[17]).makeSource(require("module_13887"))} imageStyle={tmp.imageStyle} style={null}>{null}</closure_6>;
};