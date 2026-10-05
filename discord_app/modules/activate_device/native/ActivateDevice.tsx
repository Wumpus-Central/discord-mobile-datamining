// discord_app/modules/activate_device/native/ActivateDevice.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import NativeImageManagerModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeImageManagerModule.tsx";
import ConsoleOAuthApplications from "../../../../discord_common/js/shared/shared-constants/ConsoleOAuthApplications.tsx";
import _modDef13691 from "../../../../discord_assets/assets/images/consoles/ps_link_success_illustration-2x.png.js";
import _modDef13692 from "../../../../discord_assets/assets/images/consoles/social_layer_link_success_illustration-2x.png.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({
  View: hasOwnProperty,
  ImageBackground: metroRequire,
  ActivityIndicator: closure_7,
  ScrollView: closure_8,
} = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = {
  background: { flex: 1 },
  imageStyle: { marginVertical: 0, resizeMode: "cover", backgroundColor: nativeDefault.colors.TEXT_BRAND },
  safeArea: { flex: 1, justifyContent: "center", alignItems: "center" },
  content: null,
  scroller: null,
  scrollerContent: null,
};
let obj3 = { marginVertical: 0, resizeMode: "cover", backgroundColor: nativeDefault.colors.TEXT_BRAND };
obj2.content = {
  maxWidth: 480,
  backgroundColor: nativeDefault.colors.PANEL_BG,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.lg,
  padding: 24,
  marginHorizontal: 24,
  marginVertical: 36,
  shadowColor: nativeDefault.colors.BLACK,
  shadowOpacity: 0.2,
  shadowOffset: { width: 0, height: 4 },
  shadowRadius: 4,
};
obj2.scroller = { alignSelf: "stretch", flexGrow: 0 };
obj2.scrollerContent = { flexDirection: "column", gap: 16 };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = {
  maxWidth: 480,
  backgroundColor: nativeDefault.colors.PANEL_BG,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.lg,
  padding: 24,
  marginHorizontal: 24,
  marginVertical: 36,
  shadowColor: nativeDefault.colors.BLACK,
  shadowOpacity: 0.2,
  shadowOffset: { width: 0, height: 4 },
  shadowRadius: 4,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/activate_device/native/ActivateDevice.tsx");

export const ActivateDevice = ReactCompilerGating.isReactCompilerEnabled()
  ? (onClose) => {
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
        const fn = function v() {
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
              },
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
              },
            };
            openOAuth2ModalResult = obj2.openOAuth2Modal(obj1);
            return;
          }
        }
      }
      if (cResult[6] !== first1) {
        class B {
          constructor() {
            if ("userCodeData" in closure_0) {
              userCodeData = closure_0.userCodeData;
              tmp = closure_0;
              tmp2 = closure_2;
              items = [,];
              items[0] = closure_0(closure_2[11]).ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID;
              items[1] = closure_0(closure_2[11]).ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID;
              if (items.includes(userCodeData.clientId)) {
                tmp6 = closure_3;
                tmp7 = closure_1;
                tmp8 = closure_3(closure_1(tmp2[12]));
              } else {
                scopes = userCodeData.scopes;
                if (scopes.some((item) => first1(first2[13]).isSocialLayerUmbrellaScope(item))) {
                  tmp3 = closure_3;
                  tmp4 = closure_1;
                  tmp5 = closure_3(closure_1(tmp2[14]));
                }
              }
            }
            return;
          }
        }
        let items = [first1];
        cResult[6] = first1;
        cResult[7] = B;
        cResult[8] = items;
        let tmp17 = items;
      } else {
        class B {
          constructor() {
            if ("userCodeData" in closure_0) {
              userCodeData = closure_0.userCodeData;
              tmp = closure_0;
              tmp2 = closure_2;
              items = [,];
              items[0] = closure_0(closure_2[11]).ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID;
              items[1] = closure_0(closure_2[11]).ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID;
              if (items.includes(userCodeData.clientId)) {
                tmp6 = closure_3;
                tmp7 = closure_1;
                tmp8 = closure_3(closure_1(tmp2[12]));
              } else {
                scopes = userCodeData.scopes;
                if (scopes.some((item) => first1(first2[13]).isSocialLayerUmbrellaScope(item))) {
                  tmp3 = closure_3;
                  tmp4 = closure_1;
                  tmp5 = closure_3(closure_1(tmp2[14]));
                }
              }
            }
            return;
          }
        }
        tmp17 = cResult[8];
      }
      const effect = obj3.useEffect(B, tmp17);
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
        let tmp20 = items1;
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
        tmp20 = cResult[11];
      }
      const effect1 = obj3.useEffect(R, tmp20);
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
        const obj4 = { prefilledUserCode: tmp31, onUserCodeAccepted: U, onClose };
        const tmp34 = jsx(tmp(tmp2[16]).UserCodeInput, { prefilledUserCode: tmp31, onUserCodeAccepted: U, onClose });
        cResult[12] = onClose;
        cResult[13] = tmp31;
        cResult[14] = U;
        cResult[15] = tmp34;
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
            const tmp30 = <closure_7 animating />;
            cResult[16] = tmp30;
            const tmp28 = tmp30;
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
          let tmp22 = tmp28;
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
            const tmp27 = jsx(tmp(tmp2[17]).ActivateDeviceSuccess, {
              onComplete: onClose,
              data: first1.userCodeData,
              successImage: first2,
            });
            cResult[17] = onClose;
            cResult[18] = first1.userCodeData;
            cResult[19] = first2;
            cResult[20] = tmp27;
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
            tmp22 = null;
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
                const tmp24 = jsx(tmp(tmp2[18]).ActivateDeviceError, { onRetry: tmp11 });
                cResult[21] = tmp24;
                const tmp23 = tmp24;
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
              tmp22 = tmp23;
            }
          }
        }
        const _Symbol = Symbol;
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
          const source = obj9.makeSource(
            require("../../../../discord_assets/assets/images/consoles/mobile_background.jpg.js"),
          );
          cResult[22] = source;
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
        if (cResult[23] !== tmp4.background) {
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
          tmp39[0] = tmp4.background;
          cResult[23] = tmp4.background;
          cResult[24] = tmp39;
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
        if (cResult[25] === tmp22) {
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
        const obj7 = { bounces: false, style: null, contentContainerStyle: null, children: null };
        ({ scroller: obj10.style, scrollerContent: obj10.contentContainerStyle } = tmp4);
        obj7.children = tmp22;
        const tmp43 = (
          <closure_8 bounces={false} style={null} contentContainerStyle={null}>
            {null}
          </closure_8>
        );
        cResult[25] = tmp22;
        cResult[26] = tmp4.scroller;
        cResult[27] = tmp4.scrollerContent;
        cResult[28] = tmp43;
      }
      const tmpResult2 = first1(first2[9]);
    }
  : (onClose) => {
      onClose = onClose.onClose;
      first1 = undefined;
      _slicedToArray = undefined;
      let deviceCodeAuthorizeCallback;
      const tmp = closure_10();
      const tmp2 = _slicedToArray(
        deviceCodeAuthorizeCallback.useState({ type: "user-code-input", usePrefilledCode: true }),
        2,
      );
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
          },
        });
      }, items3);
      const effect = deviceCodeAuthorizeCallback.useEffect(() => {
        if ("userCodeData" in first) {
          const userCodeData = first.userCodeData;
          const items = [
            ConsoleOAuthApplications.ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID,
            ConsoleOAuthApplications.ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID,
          ];
          if (items.includes(userCodeData.clientId)) {
            closure_3(_modDef13691);
          } else {
            const scopes = userCodeData.scopes;
            if (scopes.some((item) => first(first1[13]).isSocialLayerUmbrellaScope(item))) {
              closure_3(_modDef13692);
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
        let tmp21Result = jsx(tmp7(tmp8[16]).UserCodeInput, {
          prefilledUserCode,
          onUserCodeAccepted: callback3,
          onClose,
        });
      } else if ("authorization" === type) {
        tmp21Result = <closure_7 animating />;
      } else if ("success" === type) {
        const obj4 = { onComplete: onClose, data: first.userCodeData, successImage: first1 };
        tmp21Result = jsx(tmp7(tmp8[17]).ActivateDeviceSuccess, {
          onComplete: onClose,
          data: first.userCodeData,
          successImage: first1,
        });
      } else {
        tmp21Result = null;
        if ("error" === type) {
          const obj5 = { onRetry: callback };
          tmp21Result = jsx(tmp7(tmp8[18]).ActivateDeviceError, { onRetry: callback });
        }
      }
      const obj6 = { source: null, imageStyle: null, style: null, children: null };
      let obj2 = first(first1[9]);
      obj6.source = first(first1[19]).makeSource(
        require("../../../../discord_assets/assets/images/consoles/mobile_background.jpg.js"),
      );
      obj6.imageStyle = tmp.imageStyle;
      const items6 = [tmp.background];
      obj6.style = items6;
      const rect = { bottom: true, top: true, style: tmp.safeArea, children: null };
      const obj7 = {
        style: tmp.content,
        children: (
          <closure_8 bounces={false} style={tmp.scroller} contentContainerStyle={tmp.scrollerContent}>
            {tmp21Result}
          </closure_8>
        ),
      };
      rect.children = (
        <closure_5 style={tmp.content}>
          <closure_8 bounces={false} style={tmp.scroller} contentContainerStyle={tmp.scrollerContent}>
            {tmp21Result}
          </closure_8>
        </closure_5>
      );
      obj6.children = jsx(first(first1[21]).SafeAreaPaddingView, {
        bottom: true,
        top: true,
        style: tmp.safeArea,
        children: null,
      });
      return (
        <closure_6 source={null} imageStyle={null} style={null}>
          {null}
        </closure_6>
      );
    };
