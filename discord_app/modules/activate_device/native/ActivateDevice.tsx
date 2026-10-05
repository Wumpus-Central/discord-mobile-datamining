// discord_app/modules/activate_device/native/ActivateDevice.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import react_nativeDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeImageManagerModule.tsx";
import ConsoleOAuthApplications from "../../../../discord_common/js/shared/shared-constants/ConsoleOAuthApplications.tsx";
import _modDef13691 from "../../../../discord_assets/assets/images/consoles/ps_link_success_illustration-2x.png.js";
import _modDef13692 from "../../../../discord_assets/assets/images/consoles/social_layer_link_success_illustration-2x.png.js";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let importDefault, obj1, onClose, openOAuth2ModalResult, tmp3, tmp5, tmp6, tmp7, tmp8;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let _slicedToArray = _slicedToArray_mod;
({
  View: hasOwnProperty,
  ImageBackground: metroRequire,
  ActivityIndicator: metroImportDefault,
  ScrollView: metroImportAll,
} = react_native);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = {
  background: { flex: 1 },
  imageStyle: obj2,
  safeArea: { flex: 1, justifyContent: "center", alignItems: "center" },
  content: obj3,
  scroller: { alignSelf: "stretch", flexGrow: 0 },
  scrollerContent: { flexDirection: "column", gap: 16 },
};
obj2 = { marginVertical: 0, resizeMode: "cover", backgroundColor: nativeDefault.colors.TEXT_BRAND };
createStyles = createStyles.createStyles;
obj3 = {
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
let closure_10 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onClose) => {
      let closure_1;
      let closure_3;
      let deviceCodeAuthorizeCallback;
      let first;
      let first1;
      let first2;
      let tmp11;
      let tmp12;
      let tmp17;
      let tmp20;
      let tmp22;
      const tmp = first1;
      let obj = first1(first2[7]);
      const cResult = obj.c(39);
      onClose = onClose.onClose;
      const tmp4 = closure_10();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { type: "user-code-input", usePrefilledCode: true };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      let obj3 = deviceCodeAuthorizeCallback;
      [first1, importDefault] = deviceCodeAuthorizeCallback.useState(first);
      [first2, _slicedToArray] = deviceCodeAuthorizeCallback.useState(null);
      const tmpResult = tmp(first2[8]);
      const activateDeviceStepTracking = tmpResult.useActivateDeviceStepTracking(first1);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function v() {
          closure_1({ type: "user-code-input" });
        };
        cResult[1] = fn;
        tmp11 = fn;
      } else {
        tmp11 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function w(userCodeData) {
          const obj = { type: "success", userCodeData };
          closure_1(obj);
        };
        cResult[2] = fn2;
        tmp12 = fn2;
      } else {
        tmp12 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor(userCodeData) {
            const obj = { type: "error", userCodeData };
            closure_1(obj);
          }
        }
        cResult[3] = L;
      } else {
        class L {
          constructor(userCodeData) {
            const obj = { type: "error", userCodeData };
            closure_1(obj);
          }
        }
      }
      const tmpResult2 = tmp(first2[9]);
      deviceCodeAuthorizeCallback = tmpResult2.useDeviceCodeAuthorizeCallback(tmp11, L, tmp12);
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
                return deviceCodeAuthorizeCallback(userCodeData, arg0);
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
                return deviceCodeAuthorizeCallback(userCodeData, arg0);
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
                if (
                  scopes.some((item) => {
                    const obj = first1(first2[13]);
                    return obj.isSocialLayerUmbrellaScope(item);
                  })
                ) {
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
        tmp17 = items;
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
                if (
                  scopes.some((item) => {
                    const obj = first1(first2[13]);
                    return obj.isSocialLayerUmbrellaScope(item);
                  })
                ) {
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
            if (null != first2) {
              const obj2 = { uri: tmp };
              const obj = react_nativeDefault;
              obj.preload(obj2);
            }
          }
        }
        const items1 = [first2];
        cResult[9] = first2;
        cResult[10] = R;
        cResult[11] = items1;
        tmp20 = items1;
      } else {
        class R {
          constructor() {
            if (null != first2) {
              const obj2 = { uri: tmp };
              const obj = react_nativeDefault;
              obj.preload(obj2);
            }
          }
        }
        tmp20 = cResult[11];
      }
      const effect1 = obj3.useEffect(R, tmp20);
      const type = first1.type;
      if ("user-code-input" === type) {
        class R {
          constructor() {
            if (null != first2) {
              const obj2 = { uri: tmp };
              const obj = react_nativeDefault;
              obj.preload(obj2);
            }
          }
        }
        if (first1.usePrefilledCode) {
          class R {
            constructor() {
              if (null != first2) {
                const obj2 = { uri: tmp };
                const obj = react_nativeDefault;
                obj.preload(obj2);
              }
            }
          }
        }
        if (cResult[12] === onClose) {
          class R {
            constructor() {
              if (null != first2) {
                const obj2 = { uri: tmp };
                const obj = react_nativeDefault;
                obj.preload(obj2);
              }
            }
          }
        }
        cResult[12] = onClose;
        cResult[13] = tmp31;
        cResult[14] = U;
        cResult[15] = jsx(tmp(first2[16]).UserCodeInput, { prefilledUserCode: tmp31, onUserCodeAccepted: U, onClose });
        const tmp34 = jsx(tmp(first2[16]).UserCodeInput, { prefilledUserCode: tmp31, onUserCodeAccepted: U, onClose });
      } else {
        class R {
          constructor() {
            if (null != first2) {
              const obj2 = { uri: tmp };
              const obj = react_nativeDefault;
              obj.preload(obj2);
            }
          }
        }
        if ("authorization" === type) {
          let tmp28;
          class R {
            constructor() {
              if (null != first2) {
                const obj2 = { uri: tmp };
                const obj = react_nativeDefault;
                obj.preload(obj2);
              }
            }
          }
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            class R {
              constructor() {
                if (null != first2) {
                  const obj2 = { uri: tmp };
                  const obj = react_nativeDefault;
                  obj.preload(obj2);
                }
              }
            }
            const tmp30 = <closure_7 animating />;
            cResult[16] = tmp30;
            tmp28 = tmp30;
          } else {
            class R {
              constructor() {
                if (null != first2) {
                  const obj2 = { uri: tmp };
                  const obj = react_nativeDefault;
                  obj.preload(obj2);
                }
              }
            }
          }
          tmp22 = tmp28;
        } else {
          class R {
            constructor() {
              if (null != first2) {
                const obj2 = { uri: tmp };
                const obj = react_nativeDefault;
                obj.preload(obj2);
              }
            }
          }
          if ("success" === type) {
            class R {
              constructor() {
                if (null != first2) {
                  const obj2 = { uri: tmp };
                  const obj = react_nativeDefault;
                  obj.preload(obj2);
                }
              }
            }
            cResult[17] = onClose;
            cResult[18] = first1.userCodeData;
            cResult[19] = first2;
            cResult[20] = jsx(tmp(first2[17]).ActivateDeviceSuccess, {
              onComplete: onClose,
              data: first1.userCodeData,
              successImage: first2,
            });
            const tmp27 = jsx(tmp(first2[17]).ActivateDeviceSuccess, {
              onComplete: onClose,
              data: first1.userCodeData,
              successImage: first2,
            });
          } else {
            class R {
              constructor() {
                if (null != first2) {
                  const obj2 = { uri: tmp };
                  const obj = react_nativeDefault;
                  obj.preload(obj2);
                }
              }
            }
            tmp22 = null;
            if ("error" === type) {
              let tmp23;
              class R {
                constructor() {
                  if (null != first2) {
                    const obj2 = { uri: tmp };
                    const obj = react_nativeDefault;
                    obj.preload(obj2);
                  }
                }
              }
              if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                class R {
                  constructor() {
                    if (null != first2) {
                      const obj2 = { uri: tmp };
                      const obj = react_nativeDefault;
                      obj.preload(obj2);
                    }
                  }
                }
                const tmp24 = jsx(tmp(first2[18]).ActivateDeviceError, { onRetry: tmp11 });
                cResult[21] = tmp24;
                tmp23 = tmp24;
              } else {
                class R {
                  constructor() {
                    if (null != first2) {
                      const obj2 = { uri: tmp };
                      const obj = react_nativeDefault;
                      obj.preload(obj2);
                    }
                  }
                }
              }
              tmp22 = tmp23;
            }
          }
        }
      }
      if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            if (null != first2) {
              const obj2 = { uri: tmp };
              const obj = react_nativeDefault;
              obj.preload(obj2);
            }
          }
        }
        const source = obj9.makeSource(
          require("../../../../discord_assets/assets/images/consoles/mobile_background.jpg.js"),
        );
        cResult[22] = source;
      } else {
        class R {
          constructor() {
            if (null != first2) {
              const obj2 = { uri: tmp };
              const obj = react_nativeDefault;
              obj.preload(obj2);
            }
          }
        }
      }
      if (cResult[23] !== tmp4.background) {
        class R {
          constructor() {
            if (null != first2) {
              const obj2 = { uri: tmp };
              const obj = react_nativeDefault;
              obj.preload(obj2);
            }
          }
        }
        tmp39[0] = tmp4.background;
        cResult[23] = tmp4.background;
        cResult[24] = tmp39;
      } else {
        class R {
          constructor() {
            if (null != first2) {
              const obj2 = { uri: tmp };
              const obj = react_nativeDefault;
              obj.preload(obj2);
            }
          }
        }
      }
      if (cResult[25] === tmp22) {
        class R {
          constructor() {
            if (null != first2) {
              const obj2 = { uri: tmp };
              const obj = react_nativeDefault;
              obj.preload(obj2);
            }
          }
        }
      }
      cResult[25] = tmp22;
      cResult[26] = tmp4.scroller;
      cResult[27] = tmp4.scrollerContent;
      cResult[28] = (
        <closure_8 bounces={false} style={tmp4.scroller} contentContainerStyle={tmp4.scrollerContent}>
          {tmp22}
        </closure_8>
      );
    }
  : (onClose) => {
      let closure_1;
      let closure_3;
      let first1;
      onClose = onClose.onClose;
      first1 = undefined;
      _slicedToArray = undefined;
      let deviceCodeAuthorizeCallback;
      const prefilledUserCode = onClose.prefilledUserCode;
      const tmp = closure_10();
      const tmp2 = _slicedToArray(
        deviceCodeAuthorizeCallback.useState({ type: "user-code-input", usePrefilledCode: true }),
        2,
      );
      const first = tmp2[0];
      importDefault = tmp4;
      [first1, _slicedToArray] = deviceCodeAuthorizeCallback.useState(null);
      let obj = first(first1[8]);
      const activateDeviceStepTracking = obj.useActivateDeviceStepTracking(first);
      let items = [tmp2[1]];
      const callback = deviceCodeAuthorizeCallback.useCallback(() => {
        closure_1({ type: "user-code-input" });
      }, items);
      const items1 = [tmp2[1]];
      const items2 = [tmp2[1]];
      const callback1 = deviceCodeAuthorizeCallback.useCallback((userCodeData) => {
        const obj = { type: "success", userCodeData };
        closure_1(obj);
      }, items1);
      const callback2 = deviceCodeAuthorizeCallback.useCallback((userCodeData) => {
        const obj = { type: "error", userCodeData };
        closure_1(obj);
      }, items2);
      let obj2 = first(first1[9]);
      deviceCodeAuthorizeCallback = obj2.useDeviceCodeAuthorizeCallback(callback, callback2, callback1);
      const items3 = [deviceCodeAuthorizeCallback];
      const items4 = [first];
      const callback3 = deviceCodeAuthorizeCallback.useCallback((userCodeData) => {
        let closure_0 = userCodeData;
        const obj = { type: "authorization", userCodeData };
        closure_1(obj);
        const obj2 = first(first1[10]);
        const obj3 = {
          clientId: userCodeData.clientId,
          scopes: userCodeData.scopes,
          responseType: "code",
          isTrustedName: true,
          isEmbeddedFlow: true,
          withBackPressHandler: false,
          callbackWithoutPost(arg0) {
            return deviceCodeAuthorizeCallback(userCodeData, arg0);
          },
        };
        obj2.openOAuth2Modal(obj3);
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
            if (
              scopes.some((item) => {
                const obj = first(first1[13]);
                return obj.isSocialLayerUmbrellaScope(item);
              })
            ) {
              closure_3(_modDef13692);
            }
          }
        }
      }, items4);
      const items5 = [first1];
      const effect1 = deviceCodeAuthorizeCallback.useEffect(() => {
        if (null != first1) {
          const obj2 = { uri: tmp };
          const obj = react_nativeDefault;
          obj.preload(obj2);
        }
      }, items5);
      const type = first.type;
      if ("user-code-input" === type) {
        let tmp22;
        const UserCodeInput = tmp7(tmp8[16]).UserCodeInput;
        if (first.usePrefilledCode) {
          tmp22 = prefilledUserCode;
        }
        let tmp21Result = <UserCodeInput prefilledUserCode={tmp22} onUserCodeAccepted={callback3} onClose={onClose} />;
      } else if ("authorization" === type) {
        tmp21Result = <closure_7 animating />;
      } else if ("success" === type) {
        tmp21Result = jsx(tmp7(tmp8[17]).ActivateDeviceSuccess, {
          onComplete: onClose,
          data: first.userCodeData,
          successImage: first1,
        });
      } else {
        tmp21Result = null;
        if ("error" === type) {
          tmp21Result = jsx(tmp7(tmp8[18]).ActivateDeviceError, { onRetry: callback });
        }
      }
      const items6 = [tmp.background];
      const rect = { bottom: true, top: true, style: tmp.safeArea, children: null };
      const tmp7Result = first(first1[19]);
      const SafeAreaPaddingView = tmp7(tmp8[21]).SafeAreaPaddingView;
      return (
        <closure_6
          source={tmp7Result.makeSource(
            require("../../../../discord_assets/assets/images/consoles/mobile_background.jpg.js"),
          )}
          imageStyle={tmp.imageStyle}
          style={items6}
        >
          {null}
        </closure_6>
      );
    };
const result = size.fileFinishedImporting("modules/activate_device/native/ActivateDevice.tsx");

export const ActivateDevice = tmp4;
