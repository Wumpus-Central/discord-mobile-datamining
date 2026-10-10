// === Module 14079: ActivateDevice ===

// Module 14079 (ActivateDevice)
import nativeDefault from "native" /* 587 */;
import NativeImageManagerModuleDefault from "NativeImageManagerModule" /* 1899 */;
import ConsoleOAuthApplications from "ConsoleOAuthApplications" /* 12338 */;
import _modDef14083 from "module_14083" /* 14083 */;
import _modDef14084 from "module_14084" /* 14084 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire, ScrollView: closure_7, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5092);
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
const ReactCompilerGating = fn(558);
let obj4 = { maxWidth: 480, backgroundColor: nativeDefault.colors.PANEL_BG, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.lg, padding: 24, marginHorizontal: 24, marginVertical: 36, shadowColor: nativeDefault.colors.BLACK, shadowOpacity: 0.2, shadowOffset: { width: 0, height: 4 }, shadowRadius: 4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/activate_device/native/ActivateDevice.tsx");

export const ActivateDevice = ReactCompilerGating.isReactCompilerEnabled() ? ((onClose) => {
  const cResult = first1(first2[7]).c(39);
  onClose = onClose.onClose;
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { type: "user-code-input", usePrefilledCode: true };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  [first1, importDefault] = deviceCodeAuthorizeCallback.useState(first);
  [first2, _slicedToArray] = deviceCodeAuthorizeCallback.useState(null);
  let obj = first1(first2[7]);
  const activateDeviceStepTracking = first1(first2[8]).useActivateDeviceStepTracking(first1);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function b() {
      closure_1({ type: "user-code-input" });
    };
    cResult[1] = fn;
    let tmp11 = fn;
  } else {
    tmp11 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function w(userCodeData) {
      closure_1({ type: "success", userCodeData });
    };
    cResult[2] = fn2;
    let tmp12 = fn2;
  } else {
    tmp12 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor(arg0) {
        obj = { type: "error", userCodeData: onClose };
        tmp = closure_1(obj);
        return;
      }
    }
    cResult[3] = L;
  } else {
    class L {
      constructor(arg0) {
        obj = { type: "error", userCodeData: onClose };
        tmp = closure_1(obj);
        return;
      }
    }
  }
  const tmpResult = first1(first2[8]);
  deviceCodeAuthorizeCallback = first1(first2[9]).useDeviceCodeAuthorizeCallback(tmp11, L, tmp12);
  if (cResult[4] !== deviceCodeAuthorizeCallback) {
    class U {
      constructor(arg0) {
        closure_0 = onClose;
        obj = { type: "authorization", userCodeData: onClose };
        tmp = closure_1(obj);
        obj2 = closure_0(closure_2[10]);
        obj1 = {
          clientId: onClose.clientId,
          scopes: onClose.scopes,
          responseType: "code",
          isTrustedName: true,
          isEmbeddedFlow: true,
          withBackPressHandler: false,
          callbackWithoutPost(arg0) {
                  return deviceCodeAuthorizeCallback(closure_0, arg0);
                }
        };
        openOAuth2ModalResult = obj2.openOAuth2Modal(obj1);
        return;
      }
    }
    cResult[4] = deviceCodeAuthorizeCallback;
    cResult[5] = U;
  } else {
    class U {
      constructor(arg0) {
        closure_0 = onClose;
        obj = { type: "authorization", userCodeData: onClose };
        tmp = closure_1(obj);
        obj2 = closure_0(closure_2[10]);
        obj1 = {
          clientId: onClose.clientId,
          scopes: onClose.scopes,
          responseType: "code",
          isTrustedName: true,
          isEmbeddedFlow: true,
          withBackPressHandler: false,
          callbackWithoutPost(arg0) {
                  return deviceCodeAuthorizeCallback(closure_0, arg0);
                }
        };
        openOAuth2ModalResult = obj2.openOAuth2Modal(obj1);
        return;
      }
    }
  }
  if (cResult[6] !== first1) {
    class U {
      constructor(arg0) {
        closure_0 = onClose;
        obj = { type: "authorization", userCodeData: onClose };
        tmp = closure_1(obj);
        obj2 = closure_0(closure_2[10]);
        obj1 = {
          clientId: onClose.clientId,
          scopes: onClose.scopes,
          responseType: "code",
          isTrustedName: true,
          isEmbeddedFlow: true,
          withBackPressHandler: false,
          callbackWithoutPost(arg0) {
                  return deviceCodeAuthorizeCallback(closure_0, arg0);
                }
        };
        openOAuth2ModalResult = obj2.openOAuth2Modal(obj1);
        return;
      }
    }
    let items = [first1];
    cResult[6] = first1;
    cResult[7] = tmp18;
    cResult[8] = items;
    let tmp17 = items;
  } else {
    class U {
      constructor(arg0) {
        closure_0 = onClose;
        obj = { type: "authorization", userCodeData: onClose };
        tmp = closure_1(obj);
        obj2 = closure_0(closure_2[10]);
        obj1 = {
          clientId: onClose.clientId,
          scopes: onClose.scopes,
          responseType: "code",
          isTrustedName: true,
          isEmbeddedFlow: true,
          withBackPressHandler: false,
          callbackWithoutPost(arg0) {
                  return deviceCodeAuthorizeCallback(closure_0, arg0);
                }
        };
        openOAuth2ModalResult = obj2.openOAuth2Modal(obj1);
        return;
      }
    }
    tmp17 = cResult[8];
  }
  const effect = obj3.useEffect(tmp18, tmp17);
  if (cResult[9] !== first2) {
    class R {
      constructor() {
        if (null != closure_2) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[15]);
          obj1 = { uri: null };
          obj1.uri = tmp;
          preloadResult = obj.preload(obj1);
        }
        return;
      }
    }
    const items1 = [first2];
    cResult[9] = first2;
    cResult[10] = R;
    cResult[11] = items1;
    let tmp21 = items1;
  } else {
    class R {
      constructor() {
        if (null != closure_2) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[15]);
          obj1 = { uri: null };
          obj1.uri = tmp;
          preloadResult = obj.preload(obj1);
        }
        return;
      }
    }
    tmp21 = cResult[11];
  }
  const effect1 = obj3.useEffect(R, tmp21);
  const type = first1.type;
  if ("user-code-input" === type) {
    class R {
      constructor() {
        if (null != closure_2) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[15]);
          obj1 = { uri: null };
          obj1.uri = tmp;
          preloadResult = obj.preload(obj1);
        }
        return;
      }
    }
    if (first1.usePrefilledCode) {
      class R {
        constructor() {
          if (null != closure_2) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = closure_1(closure_2[15]);
            obj1 = { uri: null };
            obj1.uri = tmp;
            preloadResult = obj.preload(obj1);
          }
          return;
        }
      }
    }
    if (cResult[12] === onClose) {
      class R {
        constructor() {
          if (null != closure_2) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = closure_1(closure_2[15]);
            obj1 = { uri: null };
            obj1.uri = tmp;
            preloadResult = obj.preload(obj1);
          }
          return;
        }
      }
    }
    const obj4 = { prefilledUserCode: tmp32, onUserCodeAccepted: U, onClose };
    const tmp35 = closure_8(tmp(tmp2[16]).UserCodeInput, obj4);
    cResult[12] = onClose;
    cResult[13] = tmp32;
    cResult[14] = U;
    cResult[15] = tmp35;
  } else {
    class R {
      constructor() {
        if (null != closure_2) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[15]);
          obj1 = { uri: null };
          obj1.uri = tmp;
          preloadResult = obj.preload(obj1);
        }
        return;
      }
    }
    if ("authorization" === type) {
      class R {
        constructor() {
          if (null != closure_2) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = closure_1(closure_2[15]);
            obj1 = { uri: null };
            obj1.uri = tmp;
            preloadResult = obj.preload(obj1);
          }
          return;
        }
      }
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            if (null != closure_2) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              obj = closure_1(closure_2[15]);
              obj1 = { uri: null };
              obj1.uri = tmp;
              preloadResult = obj.preload(obj1);
            }
            return;
          }
        }
        const tmp31 = closure_8(closure_6, { animating: true });
        cResult[16] = tmp31;
        const tmp29 = tmp31;
      } else {
        class R {
          constructor() {
            if (null != closure_2) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              obj = closure_1(closure_2[15]);
              obj1 = { uri: null };
              obj1.uri = tmp;
              preloadResult = obj.preload(obj1);
            }
            return;
          }
        }
      }
      let tmp23 = tmp29;
    } else {
      class R {
        constructor() {
          if (null != closure_2) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = closure_1(closure_2[15]);
            obj1 = { uri: null };
            obj1.uri = tmp;
            preloadResult = obj.preload(obj1);
          }
          return;
        }
      }
      if ("success" === type) {
        class R {
          constructor() {
            if (null != closure_2) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              obj = closure_1(closure_2[15]);
              obj1 = { uri: null };
              obj1.uri = tmp;
              preloadResult = obj.preload(obj1);
            }
            return;
          }
        }
        const obj5 = { onComplete: onClose, data: first1.userCodeData, successImage: first2 };
        const tmp28 = closure_8(tmp(tmp2[17]).ActivateDeviceSuccess, obj5);
        cResult[17] = onClose;
        cResult[18] = first1.userCodeData;
        cResult[19] = first2;
        cResult[20] = tmp28;
      } else {
        class R {
          constructor() {
            if (null != closure_2) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              obj = closure_1(closure_2[15]);
              obj1 = { uri: null };
              obj1.uri = tmp;
              preloadResult = obj.preload(obj1);
            }
            return;
          }
        }
        tmp23 = null;
        if ("error" === type) {
          class R {
            constructor() {
              if (null != closure_2) {
                tmp2 = closure_1;
                tmp3 = closure_2;
                obj = closure_1(closure_2[15]);
                obj1 = { uri: null };
                obj1.uri = tmp;
                preloadResult = obj.preload(obj1);
              }
              return;
            }
          }
          if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
            class R {
              constructor() {
                if (null != closure_2) {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = closure_1(closure_2[15]);
                  obj1 = { uri: null };
                  obj1.uri = tmp;
                  preloadResult = obj.preload(obj1);
                }
                return;
              }
            }
            const obj6 = { onRetry: tmp11 };
            const tmp25 = closure_8(tmp(tmp2[18]).ActivateDeviceError, obj6);
            cResult[21] = tmp25;
            const tmp24 = tmp25;
          } else {
            class R {
              constructor() {
                if (null != closure_2) {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = closure_1(closure_2[15]);
                  obj1 = { uri: null };
                  obj1.uri = tmp;
                  preloadResult = obj.preload(obj1);
                }
                return;
              }
            }
          }
          tmp23 = tmp24;
        }
      }
    }
    const _Symbol = Symbol;
    const background = tmp4.background;
    if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          if (null != closure_2) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = closure_1(closure_2[15]);
            obj1 = { uri: null };
            obj1.uri = tmp;
            preloadResult = obj.preload(obj1);
          }
          return;
        }
      }
      const source = obj9.makeSource(require("module_14091"));
      cResult[22] = source;
      const tmp36 = source;
    } else {
      class R {
        constructor() {
          if (null != closure_2) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = closure_1(closure_2[15]);
            obj1 = { uri: null };
            obj1.uri = tmp;
            preloadResult = obj.preload(obj1);
          }
          return;
        }
      }
    }
    if (cResult[23] !== tmp4.imageStyle) {
      class R {
        constructor() {
          if (null != closure_2) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = closure_1(closure_2[15]);
            obj1 = { uri: null };
            obj1.uri = tmp;
            preloadResult = obj.preload(obj1);
          }
          return;
        }
      }
      const obj7 = { source: tmp36, style: tmp4.imageStyle };
      const tmp41 = closure_8(require("FastImage"), obj7);
      cResult[23] = tmp4.imageStyle;
      cResult[24] = tmp41;
    } else {
      class R {
        constructor() {
          if (null != closure_2) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = closure_1(closure_2[15]);
            obj1 = { uri: null };
            obj1.uri = tmp;
            preloadResult = obj.preload(obj1);
          }
          return;
        }
      }
    }
    if (cResult[25] === tmp23) {
      class R {
        constructor() {
          if (null != closure_2) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = closure_1(closure_2[15]);
            obj1 = { uri: null };
            obj1.uri = tmp;
            preloadResult = obj.preload(obj1);
          }
          return;
        }
      }
    }
    const obj8 = { bounces: false, style: null, contentContainerStyle: null, children: null };
    ({ scroller: obj11.style, scrollerContent: obj11.contentContainerStyle } = tmp4);
    obj8.children = tmp23;
    const tmp45 = closure_8(closure_7, obj8);
    cResult[25] = tmp23;
    cResult[26] = tmp4.scroller;
    cResult[27] = tmp4.scrollerContent;
    cResult[28] = tmp45;
  }
  const tmpResult2 = first1(first2[9]);
}) : ((onClose) => {
  onClose = onClose.onClose;
  first1 = undefined;
  _slicedToArray = undefined;
  let deviceCodeAuthorizeCallback;
  const tmp = closure_10();
  const tmp2 = _slicedToArray(deviceCodeAuthorizeCallback.useState({ type: "user-code-input", usePrefilledCode: true }), 2);
  const first = tmp2[0];
  importDefault = tmp4;
  [first1, _slicedToArray] = deviceCodeAuthorizeCallback.useState(null);
  const activateDeviceStepTracking = first(first1[8]).useActivateDeviceStepTracking(first);
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
  let obj = first(first1[8]);
  deviceCodeAuthorizeCallback = first(first1[9]).useDeviceCodeAuthorizeCallback(callback, callback2, callback1);
  const items3 = [deviceCodeAuthorizeCallback];
  const items4 = [first];
  const callback3 = deviceCodeAuthorizeCallback.useCallback((userCodeData) => {
    closure_0 = userCodeData;
    closure_1({ type: "authorization", userCodeData });
    first(first1[10]).openOAuth2Modal({
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
        closure_3(_modDef14083);
      } else {
        const scopes = userCodeData.scopes;
        if (scopes.some((item) => first(first1[13]).isSocialLayerUmbrellaScope(item))) {
          closure_3(_modDef14084);
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
    let tmp21Result = closure_8(tmp7(tmp8[16]).UserCodeInput, obj3);
  } else if ("authorization" === type) {
    tmp21Result = closure_8(closure_6, { animating: true });
  } else if ("success" === type) {
    const obj4 = { onComplete: onClose, data: first.userCodeData, successImage: first1 };
    tmp21Result = closure_8(tmp7(tmp8[17]).ActivateDeviceSuccess, obj4);
  } else {
    tmp21Result = null;
    if ("error" === type) {
      const obj5 = { onRetry: callback };
      tmp21Result = closure_8(tmp7(tmp8[18]).ActivateDeviceError, obj5);
    }
  }
  const obj6 = { style: tmp.background, children: null };
  const obj7 = { source: null, style: null };
  let obj2 = first(first1[9]);
  const tmp23 = require("FastImage");
  obj7.source = first(first1[19]).makeSource(require("module_14091"));
  obj7.style = tmp.imageStyle;
  const items6 = [closure_8(tmp23, obj7), ];
  const rect = { bottom: true, top: true, style: tmp.safeArea, children: null };
  const obj8 = { style: tmp.content, children: closure_8(closure_7, { bounces: false, style: tmp.scroller, contentContainerStyle: tmp.scrollerContent, children: tmp21Result }) };
  rect.children = closure_8(closure_5, obj8);
  items6[1] = closure_8(first(first1[22]).SafeAreaPaddingView, rect);
  obj6.children = items6;
  return closure_9(closure_5, obj6);
});