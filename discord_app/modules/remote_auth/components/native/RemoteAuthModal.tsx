// discord_app/modules/remote_auth/components/native/RemoteAuthModal.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import intl5 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import HTTPUtils from "../../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import ButtonGroup2 from "../../../../design/components/ButtonGroup/native/ButtonGroup.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import ActivityIndicator_ActivityIndicator from "../../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import DeprecatedLayoutAnimation from "../../../animations/native/DeprecatedLayoutAnimation.tsx";
import AssetRegistryDefault from "../../../../../_runtime/13691_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../../_runtime/13693_AssetRegistry.js";
import QrLoginSpotIllustration from "../../../../design/components/mana-assets/native/generated/QrLoginSpotIllustration.native.tsx";
import QrSuccessSpotIllustration from "../../../../design/components/mana-assets/native/generated/QrSuccessSpotIllustration.native.tsx";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let catchPromise, dependencyMap, handshakeToken, obj1, remoteAuthFingerprint;

let c10;
let c9;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({ ImageBackground: hasOwnProperty, Image: metroRequire, View: metroImportDefault } = react_native);
const Endpoints = Constants.Endpoints;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  background: { width: "100%", height: "100%" },
  container: { flex: 1, alignItems: "stretch", alignContent: "center" },
  imageStyle: { resizeMode: "cover" },
  logo: { position: "absolute", top: 16, alignSelf: "center", width: 32, height: 32 },
  mainImage: { marginTop: 16, marginBottom: 32 },
  warningCaption: obj2,
  caption: { lineHeight: 20, textAlign: "center", marginTop: 8, marginBottom: 32 },
  mainCard: obj3,
  buttonGroup: { paddingVertical: 0 },
  loadingContainer: { height: 300, justifyContent: "center" },
};
obj2 = {
  fontSize: 16,
  lineHeight: 20,
  color: nativeDefault.unsafe_rawColors.RED_400,
  textAlign: "center",
  marginTop: 8,
  marginBottom: 32,
};
createStyles = createStyles.createStyles;
obj3 = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  marginTop: "auto",
  marginBottom: "auto",
  marginLeft: 16,
  marginRight: 16,
  borderRadius: nativeDefault.radii.sm,
  padding: 16,
  shadowColor: nativeDefault.colors.BLACK,
  shadowOpacity: 0.16,
  shadowRadius: 2,
  shadowOffset: { height: 2, width: 0 },
};
let closure_12 = createStyles(obj);
let c13 = 0.75;
const constants = {
  LOADING: 0,
  [0]: "LOADING",
  NOT_FOUND: 1,
  [1]: "NOT_FOUND",
  LOADED: 2,
  [2]: "LOADED",
  SUCCEEDED: 3,
  [3]: "SUCCEEDED",
};
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let items;
      let items1;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(18);
      const tmp3 = closure_12();
      const top = useSafeAreaInsetsDefault().top;
      if (cResult[0] !== top) {
        const obj2 = { marginTop: top };
        cResult[0] = top;
        cResult[1] = obj2;
        tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp3.logo) {
        let tmp6;
        let tmp9;
        if (cResult[3] === tmp5) {
          tmp6 = cResult[4];
        }
        if (cResult[5] !== arg0) {
          const obj3 = {};
          const merged = Object.assign(arg0);
          const tmp15 = React4(closure_15, obj3);
          cResult[5] = arg0;
          cResult[6] = tmp15;
          tmp9 = tmp15;
        } else {
          tmp9 = cResult[6];
        }
        if (cResult[7] === tmp3.mainCard) {
          let tmp16;
          if (cResult[8] === tmp9) {
            tmp16 = cResult[9];
          }
          if (cResult[10] === tmp3.container) {
            let tmp20;
            if (cResult[11] === tmp16) {
              tmp20 = cResult[12];
            }
            if (cResult[13] === tmp3.background) {
              if (cResult[14] === tmp3.imageStyle) {
                if (cResult[15] === tmp6) {
                  let tmp24;
                  if (cResult[16] === tmp20) {
                    tmp24 = cResult[17];
                  }
                  return tmp24;
                }
              }
            }
            ({ imageStyle: obj7.imageStyle, background: obj7.style } = tmp3);
            const obj4 = { source: AssetRegistryDefault2, imageStyle: null, style: null, children: items };
            items = [tmp6, tmp20];
            const tmp27 = authStore(hasOwnProperty, obj4);
            cResult[13] = tmp3.background;
            cResult[14] = tmp3.imageStyle;
            cResult[15] = tmp6;
            cResult[16] = tmp20;
            cResult[17] = tmp27;
            tmp24 = tmp27;
          }
          const obj5 = { style: tmp3.container, children: tmp16 };
          const tmp23 = React4(metroImportDefault, obj5);
          cResult[10] = tmp3.container;
          cResult[11] = tmp16;
          cResult[12] = tmp23;
          tmp20 = tmp23;
        }
        const obj6 = { style: tmp3.mainCard, children: tmp9 };
        const tmp19 = React4(metroImportDefault, obj6);
        cResult[7] = tmp3.mainCard;
        cResult[8] = tmp9;
        cResult[9] = tmp19;
        tmp16 = tmp19;
      }
      const obj13 = { style: items1, source: AssetRegistryDefault };
      items1 = [tmp3.logo, tmp5];
      const tmp7 = React4(metroRequire, obj13);
      cResult[2] = tmp3.logo;
      cResult[3] = tmp5;
      cResult[4] = tmp7;
      tmp6 = tmp7;
    }
  : (arg0) => {
      let items;
      let items1;
      let obj4;
      let obj5;
      const tmp = closure_12();
      const obj = { source: AssetRegistryDefault2, imageStyle: null, style: null, children: items1 };
      const top = useSafeAreaInsetsDefault().top;
      ({ imageStyle: obj.imageStyle, background: obj.style } = tmp);
      const obj2 = { style: items, source: AssetRegistryDefault };
      items = [tmp.logo, { marginTop: top }];
      items1 = [React4(metroRequire, obj2)];
      const obj3 = { style: tmp.container, children: React4(metroImportDefault, obj4) };
      obj4 = { style: tmp.mainCard, children: React4(closure_15, obj5) };
      obj5 = {};
      const merged = Object.assign(arg0);
      items1[1] = React4(metroImportDefault, obj3);
      return authStore(hasOwnProperty, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (remoteAuthFingerprint) => {
      let first;
      let tmp4;
      let tmp8;
      let obj = remoteAuthFingerprint(576);
      const cResult = obj.c(10);
      remoteAuthFingerprint = remoteAuthFingerprint.remoteAuthFingerprint;
      [tmp4, importDefault] = first(react.useState(constants.LOADING), 2);
      first(react.useState(constants.LOADING), 2);
      [r10024, dependencyMap] = first(react.useState(null), 2);
      first(react.useState(null), 2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l(arg0) {
          importDefault(arg0);
          const obj = DeprecatedLayoutAnimation;
          const result = obj.DeprecatedLayoutAnimation();
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== remoteAuthFingerprint) {
        class A {
          constructor() {
            HTTP = closure_0(closure_2[13]).HTTP;
            request = { url: Endpoints.REMOTE_AUTH_INITIALIZE, body: null, oldFormErrors: true, rejectWithError: true };
            obj1 = { fingerprint: remoteAuthFingerprint };
            request.body = obj1;
            postResult = HTTP.post(request);
            nextPromise = postResult.then((body) => {
              closure_1_2(body.body.handshake_token);
              first(constants.LOADED);
            });
            catchPromise = nextPromise.catch(() => {
              first(constants.NOT_FOUND);
            });
            return;
          }
        }
        const items = [remoteAuthFingerprint];
        cResult[1] = remoteAuthFingerprint;
        cResult[2] = A;
        cResult[3] = items;
        tmp8 = items;
      } else {
        class A {
          constructor() {
            HTTP = closure_0(closure_2[13]).HTTP;
            request = { url: Endpoints.REMOTE_AUTH_INITIALIZE, body: null, oldFormErrors: true, rejectWithError: true };
            obj1 = { fingerprint: remoteAuthFingerprint };
            request.body = obj1;
            postResult = HTTP.post(request);
            nextPromise = postResult.then((body) => {
              closure_1_2(body.body.handshake_token);
              first(constants.LOADED);
            });
            catchPromise = nextPromise.catch(() => {
              first(constants.NOT_FOUND);
            });
            return;
          }
        }
        tmp8 = cResult[3];
      }
      const effect = react.useEffect(A, tmp8);
      if (constants.LOADING === tmp4) {
        let tmp10;
        class A {
          constructor() {
            HTTP = closure_0(closure_2[13]).HTTP;
            request = { url: Endpoints.REMOTE_AUTH_INITIALIZE, body: null, oldFormErrors: true, rejectWithError: true };
            obj1 = { fingerprint: remoteAuthFingerprint };
            request.body = obj1;
            postResult = HTTP.post(request);
            nextPromise = postResult.then((body) => {
              closure_1_2(body.body.handshake_token);
              first(constants.LOADED);
            });
            catchPromise = nextPromise.catch(() => {
              first(constants.NOT_FOUND);
            });
            return;
          }
        }
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          class A {
            constructor() {
              HTTP = closure_0(closure_2[13]).HTTP;
              request = {
                url: Endpoints.REMOTE_AUTH_INITIALIZE,
                body: null,
                oldFormErrors: true,
                rejectWithError: true,
              };
              obj1 = { fingerprint: remoteAuthFingerprint };
              request.body = obj1;
              postResult = HTTP.post(request);
              nextPromise = postResult.then((body) => {
                closure_1_2(body.body.handshake_token);
                first(constants.LOADED);
              });
              catchPromise = nextPromise.catch(() => {
                first(constants.NOT_FOUND);
              });
              return;
            }
          }
          const tmp12 = closure_9(closure_19, {});
          cResult[4] = tmp12;
          tmp10 = tmp12;
        } else {
          class A {
            constructor() {
              HTTP = closure_0(closure_2[13]).HTTP;
              request = {
                url: Endpoints.REMOTE_AUTH_INITIALIZE,
                body: null,
                oldFormErrors: true,
                rejectWithError: true,
              };
              obj1 = { fingerprint: remoteAuthFingerprint };
              request.body = obj1;
              postResult = HTTP.post(request);
              nextPromise = postResult.then((body) => {
                closure_1_2(body.body.handshake_token);
                first(constants.LOADED);
              });
              catchPromise = nextPromise.catch(() => {
                first(constants.NOT_FOUND);
              });
              return;
            }
          }
        }
        return tmp10;
      } else {
        class A {
          constructor() {
            HTTP = closure_0(closure_2[13]).HTTP;
            request = { url: Endpoints.REMOTE_AUTH_INITIALIZE, body: null, oldFormErrors: true, rejectWithError: true };
            obj1 = { fingerprint: remoteAuthFingerprint };
            request.body = obj1;
            postResult = HTTP.post(request);
            nextPromise = postResult.then((body) => {
              closure_1_2(body.body.handshake_token);
              first(constants.LOADED);
            });
            catchPromise = nextPromise.catch(() => {
              first(constants.NOT_FOUND);
            });
            return;
          }
        }
      }
    }
  : (remoteAuthFingerprint) => {
      let tmp3;
      let tmp5;
      remoteAuthFingerprint = remoteAuthFingerprint.remoteAuthFingerprint;
      [tmp3, importDefault] = _slicedToArray(react.useState(constants.LOADING), 2);
      const tmp2 = _slicedToArray(react.useState(constants.LOADING), 2);
      [tmp5, dependencyMap] = react.useState(null);
      const items = [remoteAuthFingerprint];
      _slicedToArray(react.useState(null), 2);
      const effect = react.useEffect(() => {
        let obj;
        const HTTP = HTTPUtils.HTTP;
        const request = {
          url: Endpoints.REMOTE_AUTH_INITIALIZE,
          body: obj,
          oldFormErrors: true,
          rejectWithError: true,
        };
        obj = { fingerprint: remoteAuthFingerprint };
        const postResult = HTTP.post(request);
        const nextPromise = postResult.then((body) => {
          closure_1_2(body.body.handshake_token);
          closure_1_1(constants.LOADED);
          const obj = remoteAuthFingerprint(dependencyMap[12]);
          const result = obj.DeprecatedLayoutAnimation();
        });
        nextPromise.catch(() => {
          closure_1_1(constants.NOT_FOUND);
          const obj = remoteAuthFingerprint(dependencyMap[12]);
          const result = obj.DeprecatedLayoutAnimation();
        });
      }, items);
      if (constants.LOADING === tmp3) {
        return closure_9(closure_19, {});
      } else if (constants.LOADED === tmp3) {
        let tmp13;
        if (null == tmp5) {
          tmp13 = closure_9(closure_18, {});
        } else {
          let obj = {
            handshakeToken: tmp5,
            setAuthStep: function transitionStep(arg0) {
              importDefault(arg0);
              const obj = DeprecatedLayoutAnimation;
              const result = obj.DeprecatedLayoutAnimation();
            },
          };
          tmp13 = closure_9(closure_16, obj);
        }
        return tmp13;
      } else if (constants.SUCCEEDED === tmp3) {
        return closure_9(closure_17, {});
      } else {
        const NOT_FOUND = constants.NOT_FOUND;
        return closure_9(closure_18, {});
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (handshakeToken) => {
      let closure_3;
      let first;
      let intl;
      let items1;
      let items2;
      let tmp10;
      let tmp12;
      let tmp6;
      let tmp9;
      const tmp = handshakeToken;
      let obj = handshakeToken(576);
      const cResult = obj.c(30);
      handshakeToken = handshakeToken.handshakeToken;
      const setAuthStep = handshakeToken.setAuthStep;
      const tmp4 = closure_12();
      [tmp6, dependencyMap] = react.useState(false);
      _slicedToArray(react.useState(false), 2);
      [first, _slicedToArray] = react.useState(false);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l() {
          let closure_0;
          const timeout = setTimeout(() => {
            closure_1_2(true);
          }, 1000);
          return () => clearTimeout(closure_0);
        };
        const items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp10 = items;
        tmp9 = fn;
      } else {
        [tmp9, tmp10] = cResult;
      }
      const effect = react.useEffect(tmp9, tmp10);
      if (cResult[2] !== handshakeToken) {
        const fn2 = function h() {
          let obj;
          const HTTP = HTTPUtils.HTTP;
          const request = { url: Endpoints.REMOTE_AUTH_CANCEL, body: obj, oldFormErrors: true, rejectWithError: true };
          obj = { handshake_token: handshakeToken };
          HTTP.post(request);
          const arr = ModalActionCreatorsDefault;
          arr.pop();
        };
        cResult[2] = handshakeToken;
        cResult[3] = fn2;
        tmp12 = fn2;
      } else {
        tmp12 = cResult[3];
      }
      if (cResult[4] === handshakeToken) {
        let tmp13;
        let tmp16;
        let tmp20;
        let tmp24;
        let tmp27;
        let tmp29;
        let tmp33;
        if (cResult[5] === setAuthStep) {
          tmp13 = cResult[6];
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { scale };
          const tmp19 = closure_9(tmp(13694).QrLoginSpotIllustration, obj4);
          cResult[7] = tmp19;
          tmp16 = tmp19;
        } else {
          tmp16 = cResult[7];
        }
        if (cResult[8] !== tmp4.mainImage) {
          const obj5 = { style: tmp4.mainImage, children: tmp16 };
          const tmp23 = closure_9(closure_7, obj5);
          cResult[8] = tmp4.mainImage;
          cResult[9] = tmp23;
          tmp20 = tmp23;
        } else {
          tmp20 = cResult[9];
        }
        const _Symbol2 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const obj6 = { variant: "heading-md/extrabold", children: intl.string(tmp(1126).t.jD2pqF) };
          const Heading = tmp(4892).Heading;
          intl = tmp(1126).intl;
          const tmp26 = closure_9(Heading, obj6);
          cResult[10] = tmp26;
          tmp24 = tmp26;
        } else {
          tmp24 = cResult[10];
        }
        const _Symbol3 = Symbol;
        const warningCaption = tmp4.warningCaption;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult = intl2.string(tmp(1126).t["hcd/kh"]);
          cResult[11] = stringResult;
          tmp27 = stringResult;
        } else {
          tmp27 = cResult[11];
        }
        if (cResult[12] !== tmp4.warningCaption) {
          const obj7 = { style: warningCaption, children: tmp27 };
          const tmp31 = closure_9(tmp(1188).LegacyText, obj7);
          cResult[12] = tmp4.warningCaption;
          cResult[13] = tmp31;
          tmp29 = tmp31;
        } else {
          tmp29 = cResult[13];
        }
        const _HermesInternal = HermesInternal;
        const buttonGroup = tmp4.buttonGroup;
        const combined = "" + tmp15;
        const _Symbol4 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1126).intl;
          const stringResult1 = intl3.string(tmp(1126).t.N3qV8e);
          cResult[14] = stringResult1;
          tmp33 = stringResult1;
        } else {
          tmp33 = cResult[14];
        }
        if (cResult[15] === tmp13) {
          if (cResult[16] === (!tmp6 && !first)) {
            let tmp35;
            let tmp38;
            let tmp40;
            if (cResult[17] === combined) {
              tmp35 = cResult[18];
            }
            const _Symbol5 = Symbol;
            if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
              const intl4 = tmp(1126).intl;
              const stringResult2 = intl4.string(tmp(1126).t["ETE/oC"]);
              cResult[19] = stringResult2;
              tmp38 = stringResult2;
            } else {
              tmp38 = cResult[19];
            }
            if (cResult[20] !== tmp12) {
              const obj8 = { variant: "secondary", text: tmp38, onPress: tmp12 };
              const tmp42 = closure_9(tmp(5601).Button, obj8);
              cResult[20] = tmp12;
              cResult[21] = tmp42;
              tmp40 = tmp42;
            } else {
              tmp40 = cResult[21];
            }
            if (cResult[22] === tmp4.buttonGroup) {
              if (cResult[23] === tmp35) {
                let tmp43;
                if (cResult[24] === tmp40) {
                  tmp43 = cResult[25];
                }
                if (cResult[26] === tmp29) {
                  if (cResult[27] === tmp43) {
                    let tmp46;
                    if (cResult[28] === tmp20) {
                      tmp46 = cResult[29];
                    }
                    return tmp46;
                  }
                }
                const obj9 = { children: items1 };
                items1 = [tmp20, tmp24, tmp29, tmp43];
                const tmp49 = closure_10(closure_11, obj9);
                cResult[26] = tmp29;
                cResult[27] = tmp43;
                cResult[28] = tmp20;
                cResult[29] = tmp49;
                tmp46 = tmp49;
              }
            }
            const obj10 = { style: buttonGroup, children: items2 };
            items2 = [tmp35, tmp40];
            const tmp45 = closure_10(tmp(5599).ButtonGroup, obj10);
            cResult[22] = tmp4.buttonGroup;
            cResult[23] = tmp35;
            cResult[24] = tmp40;
            cResult[25] = tmp45;
            tmp43 = tmp45;
          }
        }
        const obj11 = { text: tmp33, onPress: tmp13, disabled: !tmp6 && !first };
        const tmp37 = closure_9(tmp(5601).Button, obj11, combined);
        cResult[15] = tmp13;
        cResult[16] = !tmp6 && !first;
        cResult[17] = combined;
        cResult[18] = tmp37;
        tmp35 = tmp37;
      }
      const obj3 = setAuthStep(12);
      const throttleResult = obj3.throttle(
        () => {
          let obj;
          closure_3(true);
          const HTTP = HTTPUtils.HTTP;
          const request = { url: Endpoints.REMOTE_AUTH_FINISH, body: obj, oldFormErrors: true, rejectWithError: true };
          obj = { handshake_token: handshakeToken };
          const postResult = HTTP.post(request);
          const nextPromise = postResult.then(() => {
            setAuthStep(constants.SUCCEEDED);
          });
          nextPromise.catch(() => {
            setAuthStep(constants.NOT_FOUND);
          });
        },
        1000,
        { leading: true, trailing: false },
      );
      cResult[4] = handshakeToken;
      cResult[5] = setAuthStep;
      cResult[6] = throttleResult;
      tmp13 = throttleResult;
    }
  : (arg0) => {
      let _undefined;
      let c2;
      let c3;
      let handshake_token;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items;
      let items1;
      let obj4;
      let require;
      let tmp3;
      let tmp5;
      ({ handshakeToken: require, setAuthStep: importDefault } = arg0);
      dependencyMap = undefined;
      _slicedToArray = undefined;
      const tmp = closure_12();
      [tmp3, c2] = react.useState(false);
      _slicedToArray(react.useState(false), 2);
      [tmp5, c3] = react.useState(false);
      _slicedToArray(react.useState(false), 2);
      const effect = react.useEffect(() => {
        let closure_0;
        const timeout = setTimeout(() => {
          closure_1_2(true);
        }, 1000);
        return () => clearTimeout(closure_0);
      }, []);
      let obj = _modDef12;
      let tmp9 = !tmp3;
      const throttleResult = obj.throttle(
        () => {
          let obj;
          _undefined(true);
          const HTTP = HTTPUtils.HTTP;
          const request = { url: Endpoints.REMOTE_AUTH_FINISH, body: obj, oldFormErrors: true, rejectWithError: true };
          obj = { handshake_token: require };
          const postResult = HTTP.post(request);
          const nextPromise = postResult.then(() => {
            closure_1_1(constants.SUCCEEDED);
          });
          nextPromise.catch(() => {
            closure_1_1(constants.NOT_FOUND);
          });
        },
        1000,
        { leading: true, trailing: false },
      );
      if (!tmp3) {
        tmp9 = !tmp5;
      }
      const obj2 = { children: items };
      const obj3 = { style: tmp.mainImage, children: closure_9(QrLoginSpotIllustration.QrLoginSpotIllustration, obj4) };
      obj4 = { scale };
      items = [closure_9(closure_7, obj3), , ,];
      const obj5 = { variant: "heading-md/extrabold", children: intl.string(intl5.t.jD2pqF) };
      const Heading = Text_Text.Heading;
      intl = intl5.intl;
      items[1] = closure_9(Heading, obj5);
      const obj6 = { style: tmp.warningCaption, children: intl2.string(intl5.t["hcd/kh"]) };
      const LegacyText = native.LegacyText;
      intl2 = intl5.intl;
      items[2] = closure_9(LegacyText, obj6);
      const obj7 = { style: tmp.buttonGroup, children: items1 };
      const ButtonGroup = ButtonGroup2.ButtonGroup;
      const obj8 = { text: intl3.string(intl5.t.N3qV8e), onPress: throttleResult, disabled: tmp9 };
      const Button = components_Button_Button.Button;
      intl3 = intl5.intl;
      items1 = [closure_9(Button, obj8, "" + tmp9)];
      const obj9 = {
        variant: "secondary",
        text: intl4.string(intl5.t["ETE/oC"]),
        onPress() {
          let obj;
          const HTTP = HTTPUtils.HTTP;
          const request = { url: Endpoints.REMOTE_AUTH_CANCEL, body: obj, oldFormErrors: true, rejectWithError: true };
          obj = { handshake_token: require };
          HTTP.post(request);
          const arr = ModalActionCreatorsDefault;
          arr.pop();
        },
      };
      const Button2 = components_Button_Button.Button;
      intl4 = intl5.intl;
      items1[1] = closure_9(Button2, obj9);
      items[3] = closure_10(ButtonGroup, obj7);
      return closure_10(closure_11, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let intl;
      let intl3;
      let items;
      let tmp13;
      let tmp16;
      let tmp18;
      let tmp21;
      let tmp25;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(14);
      const tmp4 = closure_12();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { scale };
        const tmp8 = React4(QrSuccessSpotIllustration.QrSuccessSpotIllustration, obj2);
        cResult[0] = tmp8;
        first = tmp8;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.mainImage) {
        const obj3 = { style: tmp4.mainImage, children: first };
        const tmp12 = React4(metroImportDefault, obj3);
        cResult[1] = tmp4.mainImage;
        cResult[2] = tmp12;
        tmp9 = tmp12;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { variant: "heading-xl/extrabold", children: intl.string(intl5.t.HbwTOZ) };
        const Heading = Text_Text.Heading;
        intl = intl5.intl;
        const tmp15 = React4(Heading, obj4);
        cResult[3] = tmp15;
        tmp13 = tmp15;
      } else {
        tmp13 = cResult[3];
      }
      const caption = tmp4.caption;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = intl5.intl;
        const stringResult = intl2.string(intl5.t.wKknJ0);
        cResult[4] = stringResult;
        tmp16 = stringResult;
      } else {
        tmp16 = cResult[4];
      }
      if (cResult[5] !== tmp4.caption) {
        const obj5 = { style: caption, variant: "text-md/medium", color: "text-muted", children: tmp16 };
        const tmp20 = React4(Text_Text.Text, obj5);
        cResult[5] = tmp4.caption;
        cResult[6] = tmp20;
        tmp18 = tmp20;
      } else {
        tmp18 = cResult[6];
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { text: intl3.string(intl5.t.pYWLA0), onPress: ModalActionCreatorsDefault.pop };
        const Button = components_Button_Button.Button;
        intl3 = intl5.intl;
        const tmp24 = React4(Button, obj6);
        cResult[7] = tmp24;
        tmp21 = tmp24;
      } else {
        tmp21 = cResult[7];
      }
      if (cResult[8] !== tmp4.buttonGroup) {
        const obj7 = { style: tmp4.buttonGroup, children: tmp21 };
        const tmp27 = React4(ButtonGroup2.ButtonGroup, obj7);
        cResult[8] = tmp4.buttonGroup;
        cResult[9] = tmp27;
        tmp25 = tmp27;
      } else {
        tmp25 = cResult[9];
      }
      if (cResult[10] === tmp9) {
        if (cResult[11] === tmp18) {
          let tmp28;
          if (cResult[12] === tmp25) {
            tmp28 = cResult[13];
          }
          return tmp28;
        }
      }
      const obj8 = { children: items };
      items = [tmp9, tmp13, tmp18, tmp25];
      const tmp29 = authStore(unpackModuleId, obj8);
      cResult[10] = tmp9;
      cResult[11] = tmp18;
      cResult[12] = tmp25;
      cResult[13] = tmp29;
      tmp28 = tmp29;
    }
  : () => {
      let Button;
      let intl;
      let intl2;
      let intl3;
      let items;
      let obj3;
      let obj7;
      const tmp = closure_12();
      const obj = { children: items };
      const obj2 = {
        style: tmp.mainImage,
        children: React4(QrSuccessSpotIllustration.QrSuccessSpotIllustration, obj3),
      };
      obj3 = { scale };
      items = [React4(metroImportDefault, obj2), , ,];
      const obj4 = { variant: "heading-xl/extrabold", children: intl.string(intl5.t.HbwTOZ) };
      const Heading = Text_Text.Heading;
      intl = intl5.intl;
      items[1] = React4(Heading, obj4);
      const obj5 = {
        style: tmp.caption,
        variant: "text-md/medium",
        color: "text-muted",
        children: intl2.string(intl5.t.wKknJ0),
      };
      const Text = Text_Text.Text;
      intl2 = intl5.intl;
      items[2] = React4(Text, obj5);
      const obj6 = { style: tmp.buttonGroup, children: React4(Button, obj7) };
      const ButtonGroup = ButtonGroup2.ButtonGroup;
      obj7 = { text: intl3.string(intl5.t.pYWLA0), onPress: ModalActionCreatorsDefault.pop };
      Button = components_Button_Button.Button;
      intl3 = intl5.intl;
      items[3] = React4(ButtonGroup, obj6);
      return authStore(unpackModuleId, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let intl;
      let intl3;
      let items;
      let tmp10;
      let tmp13;
      let tmp17;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(10);
      const tmp4 = closure_12();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "heading-xl/extrabold", children: intl.string(intl5.t.NShI3Q) };
        const Heading = Text_Text.Heading;
        intl = intl5.intl;
        const tmp7 = React4(Heading, obj2);
        cResult[0] = tmp7;
        first = tmp7;
      } else {
        first = cResult[0];
      }
      const caption = tmp4.caption;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = intl5.intl;
        const stringResult = intl2.string(intl5.t.Ygezov);
        cResult[1] = stringResult;
        tmp8 = stringResult;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] !== tmp4.caption) {
        const obj3 = { style: caption, variant: "text-md/medium", color: "text-muted", children: tmp8 };
        const tmp12 = React4(Text_Text.Text, obj3);
        cResult[2] = tmp4.caption;
        cResult[3] = tmp12;
        tmp10 = tmp12;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { text: intl3.string(intl5.t["ETE/oC"]), onPress: ModalActionCreatorsDefault.pop };
        const Button = components_Button_Button.Button;
        intl3 = intl5.intl;
        const tmp16 = React4(Button, obj4);
        cResult[4] = tmp16;
        tmp13 = tmp16;
      } else {
        tmp13 = cResult[4];
      }
      if (cResult[5] !== tmp4.buttonGroup) {
        const obj5 = { style: tmp4.buttonGroup, children: tmp13 };
        const tmp19 = React4(ButtonGroup2.ButtonGroup, obj5);
        cResult[5] = tmp4.buttonGroup;
        cResult[6] = tmp19;
        tmp17 = tmp19;
      } else {
        tmp17 = cResult[6];
      }
      if (cResult[7] === tmp10) {
        let tmp20;
        if (cResult[8] === tmp17) {
          tmp20 = cResult[9];
        }
        return tmp20;
      }
      const obj6 = { children: items };
      items = [first, tmp10, tmp17];
      const tmp21 = authStore(unpackModuleId, obj6);
      cResult[7] = tmp10;
      cResult[8] = tmp17;
      cResult[9] = tmp21;
      tmp20 = tmp21;
    }
  : () => {
      let Button;
      let intl;
      let intl2;
      let intl3;
      let items;
      let obj5;
      const tmp = closure_12();
      const obj = { children: items };
      const obj2 = { variant: "heading-xl/extrabold", children: intl.string(intl5.t.NShI3Q) };
      const Heading = Text_Text.Heading;
      intl = intl5.intl;
      items = [React4(Heading, obj2), ,];
      const obj3 = {
        style: tmp.caption,
        variant: "text-md/medium",
        color: "text-muted",
        children: intl2.string(intl5.t.Ygezov),
      };
      const Text = Text_Text.Text;
      intl2 = intl5.intl;
      items[1] = React4(Text, obj3);
      const obj4 = { style: tmp.buttonGroup, children: React4(Button, obj5) };
      const ButtonGroup = ButtonGroup2.ButtonGroup;
      obj5 = { text: intl3.string(intl5.t["ETE/oC"]), onPress: ModalActionCreatorsDefault.pop };
      Button = components_Button_Button.Button;
      intl3 = intl5.intl;
      items[2] = React4(ButtonGroup, obj4);
      return authStore(unpackModuleId, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(3);
      const tmp4 = closure_12();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = React4(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
        cResult[0] = tmp7;
        first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.loadingContainer) {
        const obj2 = { style: tmp4.loadingContainer, children: first };
        const tmp11 = React4(metroImportDefault, obj2);
        cResult[1] = tmp4.loadingContainer;
        cResult[2] = tmp11;
        tmp8 = tmp11;
      } else {
        tmp8 = cResult[2];
      }
      return tmp8;
    }
  : () => {
      const obj = {
        style: closure_12().loadingContainer,
        children: React4(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}),
      };
      return React4(metroImportDefault, obj);
    };
let result = size.fileFinishedImporting("modules/remote_auth/components/native/RemoteAuthModal.tsx");

export default tmp5;
