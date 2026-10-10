// === Module 14062: RemoteAuthModal ===

// Module 14062 (RemoteAuthModal)
import _modDef12 from "module_12" /* 12 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import HTTPUtils from "HTTPUtils" /* 1295 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import Text_Text from "Text/Text" /* 5088 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import ButtonGroup from "ButtonGroup" /* 5958 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 6153 */;
import FastImageDefault from "FastImage" /* 6156 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 6666 */;
import _modDef14061 from "module_14061" /* 14061 */;
import _modDef14063 from "module_14063" /* 14063 */;
import QrLoginSpotIllustration from "QrLoginSpotIllustration" /* 14064 */;
import QrSuccessSpotIllustration from "QrSuccessSpotIllustration" /* 14068 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const Endpoints = fn(1085).Endpoints;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { background: { width: "100%", height: "100%" }, container: { flex: 1, alignItems: "stretch", alignContent: "center" }, imageStyle: null, logo: null, mainImage: null, warningCaption: null, caption: null, mainCard: null, buttonGroup: null, loadingContainer: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.width = "100%";
obj3.height = "100%";
obj3.resizeMode = "cover";
obj2.imageStyle = obj3;
obj2.logo = { position: "absolute", top: 16, alignSelf: "center", width: 32, height: 32 };
obj2.mainImage = { marginTop: 16, marginBottom: 32 };
obj2.warningCaption = { fontSize: 16, lineHeight: 20, color: nativeDefault.unsafe_rawColors.RED_400, textAlign: "center", marginTop: 8, marginBottom: 32 };
obj2.caption = { lineHeight: 20, textAlign: "center", marginTop: 8, marginBottom: 32 };
let obj4 = { fontSize: 16, lineHeight: 20, color: nativeDefault.unsafe_rawColors.RED_400, textAlign: "center", marginTop: 8, marginBottom: 32 };
obj2.mainCard = { display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: "auto", marginBottom: "auto", marginLeft: 16, marginRight: 16, borderRadius: nativeDefault.radii.sm, padding: 16, shadowColor: nativeDefault.colors.BLACK, shadowOpacity: 0.16, shadowRadius: 2, shadowOffset: { height: 2, width: 0 } };
obj2.buttonGroup = { paddingVertical: 0 };
obj2.loadingContainer = { height: 300, justifyContent: "center" };
let closure_10 = createStyles.createStyles(obj2);
let c11 = 0.75;
const constants = { LOADING: 0, [0]: "LOADING", NOT_FOUND: 1, [1]: "NOT_FOUND", LOADED: 2, [2]: "LOADED", SUCCEEDED: 3, [3]: "SUCCEEDED" };
fn(558);
let obj5 = { display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: "auto", marginBottom: "auto", marginLeft: 16, marginRight: 16, borderRadius: nativeDefault.radii.sm, padding: 16, shadowColor: nativeDefault.colors.BLACK, shadowOpacity: 0.16, shadowRadius: 2, shadowOffset: { height: 2, width: 0 } };
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function RemoteAuthBody(remoteAuthFingerprint) {
  const cResult = remoteAuthFingerprint(576).c(10);
  remoteAuthFingerprint = remoteAuthFingerprint.remoteAuthFingerprint;
  let obj = remoteAuthFingerprint(576);
  [tmp4, importDefault] = setAuthStep(noop.useState(constants.LOADING), 2);
  const tmp3 = setAuthStep(noop.useState(constants.LOADING), 2);
  [tmp6, dependencyMap] = setAuthStep(noop.useState(null), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function transitionStep(arg0) {
      importDefault(arg0);
      const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimation();
    }
    cResult[0] = transitionStep;
    setAuthStep = transitionStep;
  } else {
    setAuthStep = cResult[0];
  }
  if (cResult[1] !== remoteAuthFingerprint) {
    const fn = function x() {
      const HTTP = HTTPUtils.HTTP;
      const request = { url: Endpoints.REMOTE_AUTH_INITIALIZE, body: { fingerprint: remoteAuthFingerprint }, oldFormErrors: true, rejectWithError: true };
      const obj = { fingerprint: remoteAuthFingerprint };
      const postResult = HTTP.post(request);
      HTTP.post(request).then((body) => {
        closure_1_2(body.body.handshake_token);
        setAuthStep(constants.LOADED);
      }).catch(() => {
        setAuthStep(constants.NOT_FOUND);
      });
    };
    const items = [remoteAuthFingerprint];
    cResult[1] = remoteAuthFingerprint;
    cResult[2] = fn;
    cResult[3] = items;
    let tmp9 = items;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const effect = noop.useEffect(tmp8, tmp9);
  if (constants.LOADING === tmp4) {
    const _Symbol4 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp31 = closure_7(closure_17, {});
      cResult[4] = tmp31;
      let tmp28 = tmp31;
    } else {
      tmp28 = cResult[4];
    }
    return tmp28;
  } else if (constants.LOADED === tmp4) {
    if (null == tmp6) {
      const _Symbol3 = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp26 = closure_7(closure_16, {});
        cResult[5] = tmp26;
      }
    } else {
      if (cResult[6] !== tmp6) {
        const obj3 = { handshakeToken: tmp6, setAuthStep };
        const tmp22 = closure_7(closure_14, obj3);
        cResult[6] = tmp6;
        cResult[7] = tmp22;
        let tmp19 = tmp22;
      } else {
        tmp19 = cResult[7];
      }
      return tmp19;
    }
  } else if (constants.SUCCEEDED === tmp4) {
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp18 = closure_7(closure_15, {});
      cResult[8] = tmp18;
      let tmp15 = tmp18;
    } else {
      tmp15 = cResult[8];
    }
    return tmp15;
  } else {
    const NOT_FOUND = constants.NOT_FOUND;
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp14 = closure_7(closure_16, {});
      cResult[9] = tmp14;
      let tmp11 = tmp14;
    } else {
      tmp11 = cResult[9];
    }
    return tmp11;
  }
  const tmp5 = setAuthStep(noop.useState(null), 2);
}) : (function RemoteAuthBody(remoteAuthFingerprint) {
  remoteAuthFingerprint = remoteAuthFingerprint.remoteAuthFingerprint;
  [tmp3, importDefault] = noop.useState(constants.LOADING);
  const tmp2 = _slicedToArray(noop.useState(constants.LOADING), 2);
  [tmp5, dependencyMap] = noop.useState(null);
  const items = [remoteAuthFingerprint];
  const effect = noop.useEffect(() => {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.REMOTE_AUTH_INITIALIZE, body: { fingerprint: remoteAuthFingerprint }, oldFormErrors: true, rejectWithError: true };
    const obj = { fingerprint: remoteAuthFingerprint };
    const postResult = HTTP.post(request);
    HTTP.post(request).then((body) => {
      dependencyMap(body.body.handshake_token);
      closure_1_1(constants.LOADED);
      const result = remoteAuthFingerprint(6666).DeprecatedLayoutAnimation();
    }).catch(() => {
      closure_1_1(constants.NOT_FOUND);
      const result = remoteAuthFingerprint(6666).DeprecatedLayoutAnimation();
    });
  }, items);
  if (constants.LOADING === tmp3) {
    return closure_7(closure_17, {});
  } else if (constants.LOADED === tmp3) {
    if (null == tmp5) {
      let tmp13 = closure_7(closure_16, {});
    } else {
      let obj = {
        handshakeToken: tmp5,
        setAuthStep: function transitionStep(arg0) {
              importDefault(arg0);
              const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimation();
            }
      };
      tmp13 = closure_7(closure_14, obj);
    }
    return tmp13;
  } else if (constants.SUCCEEDED === tmp3) {
    return closure_7(closure_15, {});
  } else {
    const NOT_FOUND = constants.NOT_FOUND;
    return closure_7(closure_16, {});
  }
  const tmp4 = _slicedToArray(noop.useState(null), 2);
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function RemoteAuthLogin(handshakeToken) {
  const cResult = handshakeToken(576).c(30);
  handshakeToken = handshakeToken.handshakeToken;
  const setAuthStep = handshakeToken.setAuthStep;
  const tmp4 = closure_10();
  let obj = handshakeToken(576);
  [tmp6, dependencyMap] = noop.useState(false);
  const tmp7 = _slicedToArray(noop.useState(false), 2);
  _slicedToArray = tmp7[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      const timeout = setTimeout(() => {
        closure_1_2(true);
      }, 1000);
      return () => clearTimeout(closure_0);
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp8 = fn;
    tmp9 = items;
  } else {
    [tmp8, tmp9] = cResult;
  }
  const effect = noop.useEffect(tmp8, tmp9);
  if (cResult[2] !== handshakeToken) {
    function handleCancelPress() {
      const HTTP = HTTPUtils.HTTP;
      const request = { url: Endpoints.REMOTE_AUTH_CANCEL, body: { handshake_token: handshakeToken }, oldFormErrors: true, rejectWithError: true };
      HTTP.post(request);
      ModalActionCreatorsDefault.pop();
    }
    cResult[2] = handshakeToken;
    cResult[3] = handleCancelPress;
    let tmp11 = handleCancelPress;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === handshakeToken) {
    if (cResult[5] === setAuthStep) {
      let tmp12 = cResult[6];
    }
    let tmp14 = !tmp6;
    if (!tmp6) {
      tmp14 = !tmp7[0];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { scale };
      const tmp18 = closure_7(tmp(14064).QrLoginSpotIllustration, obj4);
      cResult[7] = tmp18;
      let tmp15 = tmp18;
    } else {
      tmp15 = cResult[7];
    }
    if (cResult[8] !== tmp4.mainImage) {
      const obj5 = { style: tmp4.mainImage, children: tmp15 };
      const tmp22 = closure_7(closure_5, obj5);
      cResult[8] = tmp4.mainImage;
      cResult[9] = tmp22;
      let tmp19 = tmp22;
    } else {
      tmp19 = cResult[9];
    }
    const _Symbol2 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj6 = { variant: "heading-md/extrabold", children: null };
      const intl = tmp(1126).intl;
      obj6.children = intl.string(tmp(1126).t.jD2pqF);
      const tmp25 = closure_7(tmp(5088).Heading, obj6);
      cResult[10] = tmp25;
      let tmp23 = tmp25;
    } else {
      tmp23 = cResult[10];
    }
    const _Symbol3 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1126).intl;
      const stringResult = intl2.string(tmp(1126).t["hcd/kh"]);
      cResult[11] = stringResult;
      let tmp26 = stringResult;
    } else {
      tmp26 = cResult[11];
    }
    if (cResult[12] !== tmp4.warningCaption) {
      const obj7 = { style: tmp4.warningCaption, children: tmp26 };
      const tmp30 = closure_7(tmp(1200).LegacyText, obj7);
      cResult[12] = tmp4.warningCaption;
      cResult[13] = tmp30;
      let tmp28 = tmp30;
    } else {
      tmp28 = cResult[13];
    }
    const _HermesInternal = HermesInternal;
    const combined = "" + tmp14;
    const _Symbol4 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1126).intl;
      const stringResult1 = intl3.string(tmp(1126).t.N3qV8e);
      cResult[14] = stringResult1;
      let tmp32 = stringResult1;
    } else {
      tmp32 = cResult[14];
    }
    if (cResult[15] === tmp12) {
      if (cResult[16] === tmp14) {
        if (cResult[17] === combined) {
          let tmp34 = cResult[18];
        }
        const _Symbol5 = Symbol;
        if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = tmp(1126).intl;
          const stringResult2 = intl4.string(tmp(1126).t["ETE/oC"]);
          cResult[19] = stringResult2;
          let tmp37 = stringResult2;
        } else {
          tmp37 = cResult[19];
        }
        if (cResult[20] !== tmp11) {
          const obj8 = { variant: "secondary", text: tmp37, onPress: tmp11 };
          const tmp41 = closure_7(tmp(5379).Button, obj8);
          cResult[20] = tmp11;
          cResult[21] = tmp41;
          let tmp39 = tmp41;
        } else {
          tmp39 = cResult[21];
        }
        if (cResult[22] === tmp4.buttonGroup) {
          if (cResult[23] === tmp34) {
            if (cResult[24] === tmp39) {
              let tmp42 = cResult[25];
            }
            if (cResult[26] === tmp28) {
              if (cResult[27] === tmp42) {
                if (cResult[28] === tmp19) {
                  let tmp45 = cResult[29];
                }
                return tmp45;
              }
            }
            const obj9 = { children: null };
            const items1 = [tmp19, tmp23, tmp28, tmp42];
            obj9.children = items1;
            const tmp48 = closure_8(closure_9, obj9);
            cResult[26] = tmp28;
            cResult[27] = tmp42;
            cResult[28] = tmp19;
            cResult[29] = tmp48;
            tmp45 = tmp48;
          }
        }
        const obj10 = { style: tmp4.buttonGroup, children: null };
        const items2 = [tmp34, tmp39];
        obj10.children = items2;
        const tmp44 = closure_8(tmp(5958).ButtonGroup, obj10);
        cResult[22] = tmp4.buttonGroup;
        cResult[23] = tmp34;
        cResult[24] = tmp39;
        cResult[25] = tmp44;
        tmp42 = tmp44;
      }
    }
    const obj11 = { text: tmp32, onPress: tmp12, disabled: tmp14 };
    const tmp36 = closure_7(tmp(5379).Button, obj11, combined);
    cResult[15] = tmp12;
    cResult[16] = tmp14;
    cResult[17] = combined;
    cResult[18] = tmp36;
    tmp34 = tmp36;
  }
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  const throttleResult = setAuthStep(12).throttle(() => {
    closure_3(true);
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.REMOTE_AUTH_FINISH, body: { handshake_token: handshakeToken }, oldFormErrors: true, rejectWithError: true };
    const obj = { handshake_token: handshakeToken };
    const postResult = HTTP.post(request);
    HTTP.post(request).then(() => {
      setAuthStep(constants.SUCCEEDED);
    }).catch(() => {
      setAuthStep(constants.NOT_FOUND);
    });
  }, 1000, { leading: true, trailing: false });
  cResult[4] = handshakeToken;
  cResult[5] = setAuthStep;
  cResult[6] = throttleResult;
  tmp12 = throttleResult;
  const obj3 = setAuthStep(12);
}) : (function RemoteAuthLogin(arg0) {
  ({ handshakeToken: require, setAuthStep: importDefault } = arg0);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  const tmp = closure_10();
  [tmp3, c2] = noop.useState(false);
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  [tmp5, c3] = noop.useState(false);
  const effect = noop.useEffect(() => {
    const timeout = setTimeout(() => {
      closure_1_2(true);
    }, 1000);
    return () => clearTimeout(closure_0);
  }, []);
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  let tmp9 = !tmp3;
  if (!tmp3) {
    tmp9 = !tmp5;
  }
  const obj2 = { children: null };
  const obj3 = { style: tmp.mainImage, children: closure_7(QrLoginSpotIllustration.QrLoginSpotIllustration, { scale }) };
  const items = [closure_7(closure_5, obj3), , , ];
  const obj5 = { variant: "heading-md/extrabold", children: null };
  const intl = util.intl;
  obj5.children = intl.string(util.t.jD2pqF);
  items[1] = closure_7(Text_Text.Heading, obj5);
  const obj6 = { style: tmp.warningCaption, children: null };
  const intl2 = util.intl;
  obj6.children = intl2.string(util.t["hcd/kh"]);
  items[2] = closure_7(native.LegacyText, obj6);
  const obj7 = { style: tmp.buttonGroup, children: null };
  const obj8 = { text: null, onPress: null, disabled: null };
  const intl3 = util.intl;
  obj8.text = intl3.string(util.t.N3qV8e);
  obj8.onPress = _modDef12.throttle(() => {
    _undefined(true);
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.REMOTE_AUTH_FINISH, body: { handshake_token }, oldFormErrors: true, rejectWithError: true };
    const obj = { handshake_token };
    const postResult = HTTP.post(request);
    HTTP.post(request).then(() => {
      closure_1_1(constants.SUCCEEDED);
    }).catch(() => {
      closure_1_1(constants.NOT_FOUND);
    });
  }, 1000, { leading: true, trailing: false });
  obj8.disabled = tmp9;
  const items1 = [closure_7(components_Button_Button.Button, obj8, "" + tmp9), ];
  const obj9 = { variant: "secondary", text: null, onPress: null };
  const intl4 = util.intl;
  obj9.text = intl4.string(util.t["ETE/oC"]);
  obj9.onPress = function handleCancelPress() {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.REMOTE_AUTH_CANCEL, body: { handshake_token }, oldFormErrors: true, rejectWithError: true };
    HTTP.post(request);
    ModalActionCreatorsDefault.pop();
  };
  items1[1] = closure_7(components_Button_Button.Button, obj9);
  obj7.children = items1;
  items[3] = closure_8(ButtonGroup.ButtonGroup, obj7);
  obj2.children = items;
  return closure_8(closure_9, obj2);
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function RemoteAuthLoginSucceeded() {
  const cResult = c.c(14);
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { scale };
    const tmp8 = React5(QrSuccessSpotIllustration.QrSuccessSpotIllustration, obj2);
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.mainImage) {
    const obj3 = { style: tmp4.mainImage, children: first };
    const tmp12 = React5(hasOwnProperty, obj3);
    cResult[1] = tmp4.mainImage;
    cResult[2] = tmp12;
    let tmp9 = tmp12;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { variant: "heading-xl/extrabold", children: null };
    const intl = util.intl;
    obj4.children = intl.string(util.t.HbwTOZ);
    const tmp15 = React5(Text_Text.Heading, obj4);
    cResult[3] = tmp15;
    let tmp13 = tmp15;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = util.intl;
    const stringResult = intl2.string(util.t.wKknJ0);
    cResult[4] = stringResult;
    let tmp16 = stringResult;
  } else {
    tmp16 = cResult[4];
  }
  if (cResult[5] !== tmp4.caption) {
    const obj5 = { style: tmp4.caption, variant: "text-md/medium", color: "text-muted", children: tmp16 };
    const tmp20 = React5(Text_Text.Text, obj5);
    cResult[5] = tmp4.caption;
    cResult[6] = tmp20;
    let tmp18 = tmp20;
  } else {
    tmp18 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { text: null, onPress: null };
    const intl3 = util.intl;
    obj6.text = intl3.string(util.t.pYWLA0);
    obj6.onPress = ModalActionCreatorsDefault.pop;
    const tmp24 = React5(components_Button_Button.Button, obj6);
    cResult[7] = tmp24;
    let tmp21 = tmp24;
  } else {
    tmp21 = cResult[7];
  }
  if (cResult[8] !== tmp4.buttonGroup) {
    const obj7 = { style: tmp4.buttonGroup, children: tmp21 };
    const tmp27 = React5(ButtonGroup.ButtonGroup, obj7);
    cResult[8] = tmp4.buttonGroup;
    cResult[9] = tmp27;
    let tmp25 = tmp27;
  } else {
    tmp25 = cResult[9];
  }
  if (cResult[10] === tmp9) {
    if (cResult[11] === tmp18) {
      if (cResult[12] === tmp25) {
        let tmp28 = cResult[13];
      }
      return tmp28;
    }
  }
  const obj8 = { children: null };
  const items = [tmp9, tmp13, tmp18, tmp25];
  obj8.children = items;
  const tmp29 = closure_1_8(options, obj8);
  cResult[10] = tmp9;
  cResult[11] = tmp18;
  cResult[12] = tmp25;
  cResult[13] = tmp29;
  tmp28 = tmp29;
}) : (function RemoteAuthLoginSucceeded() {
  const tmp = closure_10();
  const obj = { children: null };
  const obj2 = { style: tmp.mainImage, children: React5(QrSuccessSpotIllustration.QrSuccessSpotIllustration, { scale }) };
  const items = [React5(hasOwnProperty, obj2), , , ];
  const obj4 = { variant: "heading-xl/extrabold", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t.HbwTOZ);
  items[1] = React5(Text_Text.Heading, obj4);
  const obj5 = { style: tmp.caption, variant: "text-md/medium", color: "text-muted", children: null };
  const intl2 = util.intl;
  obj5.children = intl2.string(util.t.wKknJ0);
  items[2] = React5(Text_Text.Text, obj5);
  const obj6 = { style: tmp.buttonGroup, children: null };
  const obj7 = { text: null, onPress: null };
  const intl3 = util.intl;
  obj7.text = intl3.string(util.t.pYWLA0);
  obj7.onPress = ModalActionCreatorsDefault.pop;
  obj6.children = React5(components_Button_Button.Button, obj7);
  items[3] = React5(ButtonGroup.ButtonGroup, obj6);
  obj.children = items;
  return closure_1_8(options, obj);
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function RemoteAuthNotFound() {
  const cResult = c.c(10);
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "heading-xl/extrabold", children: null };
    const intl = util.intl;
    obj2.children = intl.string(util.t.NShI3Q);
    const tmp7 = React5(Text_Text.Heading, obj2);
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = util.intl;
    const stringResult = intl2.string(util.t.Ygezov);
    cResult[1] = stringResult;
    let tmp8 = stringResult;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== tmp4.caption) {
    const obj3 = { style: tmp4.caption, variant: "text-md/medium", color: "text-muted", children: tmp8 };
    const tmp12 = React5(Text_Text.Text, obj3);
    cResult[2] = tmp4.caption;
    cResult[3] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { text: null, onPress: null };
    const intl3 = util.intl;
    obj4.text = intl3.string(util.t["ETE/oC"]);
    obj4.onPress = ModalActionCreatorsDefault.pop;
    const tmp16 = React5(components_Button_Button.Button, obj4);
    cResult[4] = tmp16;
    let tmp13 = tmp16;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] !== tmp4.buttonGroup) {
    const obj5 = { style: tmp4.buttonGroup, children: tmp13 };
    const tmp19 = React5(ButtonGroup.ButtonGroup, obj5);
    cResult[5] = tmp4.buttonGroup;
    cResult[6] = tmp19;
    let tmp17 = tmp19;
  } else {
    tmp17 = cResult[6];
  }
  if (cResult[7] === tmp10) {
    if (cResult[8] === tmp17) {
      let tmp20 = cResult[9];
    }
    return tmp20;
  }
  const obj6 = { children: null };
  const items = [first, tmp10, tmp17];
  obj6.children = items;
  const tmp21 = closure_1_8(options, obj6);
  cResult[7] = tmp10;
  cResult[8] = tmp17;
  cResult[9] = tmp21;
  tmp20 = tmp21;
}) : (function RemoteAuthNotFound() {
  const tmp = closure_10();
  const obj = { children: null };
  const obj2 = { variant: "heading-xl/extrabold", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.NShI3Q);
  const items = [React5(Text_Text.Heading, obj2), , ];
  const obj3 = { style: tmp.caption, variant: "text-md/medium", color: "text-muted", children: null };
  const intl2 = util.intl;
  obj3.children = intl2.string(util.t.Ygezov);
  items[1] = React5(Text_Text.Text, obj3);
  const obj4 = { style: tmp.buttonGroup, children: null };
  const obj5 = { text: null, onPress: null };
  const intl3 = util.intl;
  obj5.text = intl3.string(util.t["ETE/oC"]);
  obj5.onPress = ModalActionCreatorsDefault.pop;
  obj4.children = React5(components_Button_Button.Button, obj5);
  items[2] = React5(ButtonGroup.ButtonGroup, obj4);
  obj.children = items;
  return closure_1_8(options, obj);
});
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function RemoteAuthLoading() {
  const cResult = c.c(3);
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = React5(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.loadingContainer) {
    const obj2 = { style: tmp4.loadingContainer, children: first };
    const tmp11 = React5(hasOwnProperty, obj2);
    cResult[1] = tmp4.loadingContainer;
    cResult[2] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : (function RemoteAuthLoading() {
  return React5(hasOwnProperty, { style: closure_10().loadingContainer, children: React5(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) });
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/remote_auth/components/native/RemoteAuthModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function RemoteAuth(arg0) {
  const cResult = c.c(20);
  const tmp3 = closure_10();
  const top = useSafeAreaInsetsDefault().top;
  if (cResult[0] !== tmp3.imageStyle) {
    const obj2 = { source: _modDef14063, style: tmp3.imageStyle };
    const tmp8 = React5(FastImageDefault, obj2);
    cResult[0] = tmp3.imageStyle;
    cResult[1] = tmp8;
    let tmp5 = tmp8;
    const tmp4Result = FastImageDefault;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== top) {
    const obj3 = { marginTop: top };
    cResult[2] = top;
    cResult[3] = obj3;
    let tmp9 = obj3;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === tmp3.logo) {
    if (cResult[5] === tmp9) {
      let tmp10 = cResult[6];
    }
    if (cResult[7] !== arg0) {
      const obj4 = {};
      const merged = Object.assign(arg0);
      const tmp20 = React5(closure_13, obj4);
      cResult[7] = arg0;
      cResult[8] = tmp20;
      let tmp14 = tmp20;
    } else {
      tmp14 = cResult[8];
    }
    if (cResult[9] === tmp3.mainCard) {
      if (cResult[10] === tmp14) {
        let tmp21 = cResult[11];
      }
      if (cResult[12] === tmp3.container) {
        if (cResult[13] === tmp21) {
          let tmp25 = cResult[14];
        }
        if (cResult[15] === tmp3.background) {
          if (cResult[16] === tmp5) {
            if (cResult[17] === tmp10) {
              if (cResult[18] === tmp25) {
                let tmp29 = cResult[19];
              }
              return tmp29;
            }
          }
        }
        const obj5 = { style: tmp3.background, children: null };
        const items = [tmp5, tmp10, tmp25];
        obj5.children = items;
        const tmp32 = closure_1_8(hasOwnProperty, obj5);
        cResult[15] = tmp3.background;
        cResult[16] = tmp5;
        cResult[17] = tmp10;
        cResult[18] = tmp25;
        cResult[19] = tmp32;
        tmp29 = tmp32;
      }
      const obj6 = { style: tmp3.container, children: tmp21 };
      const tmp28 = React5(hasOwnProperty, obj6);
      cResult[12] = tmp3.container;
      cResult[13] = tmp21;
      cResult[14] = tmp28;
      tmp25 = tmp28;
    }
    const obj7 = { style: tmp3.mainCard, children: tmp14 };
    const tmp24 = React5(hasOwnProperty, obj7);
    cResult[9] = tmp3.mainCard;
    cResult[10] = tmp14;
    cResult[11] = tmp24;
    tmp21 = tmp24;
  }
  const obj8 = { style: null, source: null };
  const items1 = [tmp3.logo, tmp9];
  obj8.style = items1;
  obj8.source = _modDef14061;
  const tmp12 = React5(FastImageDefault, obj8);
  cResult[4] = tmp3.logo;
  cResult[5] = tmp9;
  cResult[6] = tmp12;
  tmp10 = tmp12;
  const tmp4Result2 = FastImageDefault;
}) : (function RemoteAuth(arg0) {
  const tmp = closure_10();
  const obj = { style: tmp.background, children: null };
  const obj2 = { source: _modDef14063, style: tmp.imageStyle };
  const items = [React5(FastImageDefault, obj2), , ];
  const obj3 = { style: null, source: null };
  const items1 = [tmp.logo, { marginTop: useSafeAreaInsetsDefault().top }];
  obj3.style = items1;
  obj3.source = _modDef14061;
  items[1] = React5(FastImageDefault, obj3);
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { style: tmp.mainCard, children: null };
  const merged = Object.assign(arg0);
  obj5.children = React5(closure_13, {});
  obj4.children = React5(hasOwnProperty, obj5);
  items[2] = React5(hasOwnProperty, obj4);
  obj.children = items;
  return closure_1_8(hasOwnProperty, obj);
});