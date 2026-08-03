// === Module 13096: ActivateDevice ===

// Module 13096 (ActivateDevice)
import _slicedToArray from "_slicedToArray";
import SafeAreaPaddingView from "SafeAreaPaddingView";
import get_ActivityIndicator from "getAvatarURL";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ View: c5, ImageBackground: closure_6, ActivityIndicator: error, ScrollView: metroImportAll } = get_ActivityIndicator);
createCacheKey = { background: { flex: 1 }, imageStyle: null, safeArea: null, content: null, scroller: null, scrollerContent: null };
createCacheKey = { marginVertical: 0, resizeMode: "cover", backgroundColor: require("Themes").colors.TEXT_BRAND };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { flex: 1, justifyContent: "center", alignItems: "center" };
createCacheKey[3] = { maxWidth: 480, backgroundColor: require("Themes").colors.PANEL_BG, alignItems: "center", justifyContent: "center", borderRadius: require("Themes").radii.lg, padding: 24, marginHorizontal: 24, marginVertical: 36, shadowColor: require("Themes").colors.BLACK, shadowOpacity: 0.2, shadowOffset: { width: 0, height: 4 }, shadowRadius: 4 };
createCacheKey[4] = { alignSelf: "stretch", flexGrow: 0 };
createCacheKey[5] = { flexDirection: "column", gap: 16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { maxWidth: 480, backgroundColor: require("Themes").colors.PANEL_BG, alignItems: "center", justifyContent: "center", borderRadius: require("Themes").radii.lg, padding: 24, marginHorizontal: 24, marginVertical: 36, shadowColor: require("Themes").colors.BLACK, shadowOpacity: 0.2, shadowOffset: { width: 0, height: 4 }, shadowRadius: 4 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/activate_device/native/ActivateDevice.tsx");

export const ActivateDevice = (onClose) => {
  onClose = onClose.onClose;
  let first;
  let importDefault;
  let first1;
  let callback;
  let deviceCodeAuthorizeCallback;
  const tmp = createCacheKey();
  const tmp2 = callback(deviceCodeAuthorizeCallback.useState({ type: "user-code-input", usePrefilledCode: true }), 2);
  first = tmp2[0];
  importDefault = tmp4;
  const tmp5 = callback(deviceCodeAuthorizeCallback.useState(null), 2);
  first1 = tmp5[0];
  callback = tmp5[1];
  let obj = first(first1[6]);
  const activateDeviceStepTracking = obj.useActivateDeviceStepTracking(first);
  let items = [tmp2[1]];
  callback = deviceCodeAuthorizeCallback.useCallback(() => {
    _undefined({ type: "user-code-input" });
  }, items);
  const items1 = [tmp2[1]];
  const items2 = [tmp2[1]];
  const callback1 = deviceCodeAuthorizeCallback.useCallback((userCodeData) => {
    _undefined({ type: "success", userCodeData });
  }, items1);
  const callback2 = deviceCodeAuthorizeCallback.useCallback((userCodeData) => {
    _undefined({ type: "error", userCodeData });
  }, items2);
  let obj1 = first(first1[7]);
  deviceCodeAuthorizeCallback = obj1.useDeviceCodeAuthorizeCallback(callback, callback2, callback1);
  const items3 = [deviceCodeAuthorizeCallback];
  const items4 = [first];
  const callback3 = deviceCodeAuthorizeCallback.useCallback((clientId) => {
    let closure_0 = clientId;
    let obj = { type: "authorization", userCodeData: clientId };
    _undefined(obj);
    obj = {
      clientId: clientId.clientId,
      scopes: clientId.scopes,
      responseType: "code",
      isTrustedName: true,
      isEmbeddedFlow: true,
      withBackPressHandler: false,
      callbackWithoutPost(arg0) {
        return outer1_4(closure_0, arg0);
      }
    };
    first(first1[8]).openOAuth2Modal(obj);
  }, items3);
  const effect = deviceCodeAuthorizeCallback.useEffect(() => {
    if ("userCodeData" in first) {
      const userCodeData = first.userCodeData;
      const items = [first(first1[9]).ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID, first(first1[9]).ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID];
      if (items.includes(userCodeData.clientId)) {
        callback(_undefined(tmp2[10]));
      } else {
        const scopes = userCodeData.scopes;
        if (scopes.some((arg0) => callback(table[11]).isSocialLayerUmbrellaScope(arg0))) {
          callback(_undefined(tmp2[12]));
        }
      }
    }
  }, items4);
  const items5 = [first1];
  const effect1 = deviceCodeAuthorizeCallback.useEffect(() => {
    if (null != first1) {
      _undefined(first1[13]).preload(tmp);
      const obj = _undefined(first1[13]);
    }
  }, items5);
  const type = first.type;
  if ("user-code-input" === type) {
    let prefilledUserCode;
    if (first.usePrefilledCode) {
      prefilledUserCode = onClose.prefilledUserCode;
    }
    obj = { prefilledUserCode: null, onUserCodeAccepted: null, onClose: null };
    obj[0] = prefilledUserCode;
    obj[1] = callback3;
    obj[2] = onClose;
    let tmp21Result = jsx(tmp7(tmp8[14]).UserCodeInput, { prefilledUserCode: null, onUserCodeAccepted: null, onClose: null });
    const tmp21 = jsx;
  } else if ("authorization" === type) {
    tmp21Result = <closure_7 animating />;
  } else if ("success" === type) {
    obj = { onComplete: null, data: null, successImage: null };
    obj[0] = onClose;
    obj[1] = first.userCodeData;
    obj[2] = first1;
    tmp21Result = jsx(tmp7(tmp8[15]).ActivateDeviceSuccess, { onComplete: null, data: null, successImage: null });
  } else {
    tmp21Result = null;
    if ("error" === type) {
      obj1 = { onRetry: null };
      obj1[0] = callback;
      tmp21Result = jsx(tmp7(tmp8[16]).ActivateDeviceError, { onRetry: null });
    }
  }
  const obj2 = { source: null, imageStyle: null, style: null, children: null };
  obj2[0] = first(first1[17]).makeSource(importDefault(first1[18]));
  obj2[1] = tmp.imageStyle;
  const items6 = [tmp.background];
  obj2[2] = items6;
  const obj3 = { bottom: true, top: true, style: tmp.safeArea, children: null };
  const obj4 = { style: tmp.content, children: null };
  obj4[1] = <closure_8 bounces={false} style={tmp.scroller} contentContainerStyle={tmp.scrollerContent}>{tmp21Result}</closure_8>;
  obj3[3] = <closure_5 style={tmp.content}>{null}</closure_5>;
  obj2[3] = jsx(first(first1[19]).SafeAreaPaddingView, { bottom: true, top: true, style: tmp.safeArea, children: null });
  return <closure_6 source={null} imageStyle={null} style={null}>{null}</closure_6>;
};