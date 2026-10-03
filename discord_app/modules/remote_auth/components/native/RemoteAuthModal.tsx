// === Module 13674: RemoteAuthModal ===

// Module 13674 (RemoteAuthModal)
import _modDef12 from "module_12" /* 12 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import Text_Text from "Text/Text" /* 4886 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import ButtonGroup from "ButtonGroup" /* 5592 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5968 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 6473 */;
import _modDef13673 from "module_13673" /* 13673 */;
import _modDef13675 from "module_13675" /* 13675 */;
import _modDef13676 from "module_13676" /* 13676 */;
import _modDef13677 from "module_13677" /* 13677 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ImageBackground: hasOwnProperty, Image: metroRequire, View: closure_7 } = get_ActivityIndicator);
const Endpoints = fn(1085).Endpoints;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { background: { width: "100%", height: "100%" }, container: { flex: 1, alignItems: "stretch", alignContent: "center" }, imageStyle: { resizeMode: "cover" }, logo: { position: "absolute", top: 16, alignSelf: "center", width: 32, height: 32 }, mainImage: { marginTop: 16, marginBottom: 32 }, warningCaption: { fontSize: 16, lineHeight: 20, color: nativeDefault.unsafe_rawColors.RED_400, textAlign: "center", marginTop: 8, marginBottom: 32 }, caption: { lineHeight: 20, textAlign: "center", marginTop: 8, marginBottom: 32 }, mainCard: null, buttonGroup: null, loadingContainer: null };
let obj3 = { fontSize: 16, lineHeight: 20, color: nativeDefault.unsafe_rawColors.RED_400, textAlign: "center", marginTop: 8, marginBottom: 32 };
obj2.mainCard = { display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: "auto", marginBottom: "auto", marginLeft: 16, marginRight: 16, borderRadius: nativeDefault.radii.sm, padding: 16, shadowColor: nativeDefault.colors.BLACK, shadowOpacity: 0.16, shadowRadius: 2, shadowOffset: { height: 2, width: 0 } };
obj2.buttonGroup = { paddingVertical: 0 };
obj2.loadingContainer = { height: 300, justifyContent: "center" };
let closure_12 = createStyles.createStyles(obj2);
const constants = { LOADING: 0, [0]: "LOADING", NOT_FOUND: 1, [1]: "NOT_FOUND", LOADED: 2, [2]: "LOADED", SUCCEEDED: 3, [3]: "SUCCEEDED" };
fn(558);
let obj4 = { display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: "auto", marginBottom: "auto", marginLeft: 16, marginRight: 16, borderRadius: nativeDefault.radii.sm, padding: 16, shadowColor: nativeDefault.colors.BLACK, shadowOpacity: 0.16, shadowRadius: 2, shadowOffset: { height: 2, width: 0 } };
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((remoteAuthFingerprint) => {
  const cResult = remoteAuthFingerprint(576).c(10);
  remoteAuthFingerprint = remoteAuthFingerprint.remoteAuthFingerprint;
  let obj = remoteAuthFingerprint(576);
  [tmp4, importDefault] = first(noop.useState(constants.LOADING), 2);
  const tmp3 = first(noop.useState(constants.LOADING), 2);
  [r10024, dependencyMap] = first(noop.useState(null), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l(arg0) {
      importDefault(arg0);
      const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimation();
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
    let tmp8 = items;
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
  const effect = noop.useEffect(A, tmp8);
  if (constants.LOADING === tmp4) {
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
      const tmp12 = closure_9(closure_18, {});
      cResult[4] = tmp12;
      const tmp10 = tmp12;
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
  const tmp5 = first(noop.useState(null), 2);
}) : ((remoteAuthFingerprint) => {
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
      const result = remoteAuthFingerprint(6473).DeprecatedLayoutAnimation();
    }).catch(() => {
      closure_1_1(constants.NOT_FOUND);
      const result = remoteAuthFingerprint(6473).DeprecatedLayoutAnimation();
    });
  }, items);
  if (constants.LOADING === tmp3) {
    return closure_9(closure_18, {});
  } else if (constants.LOADED === tmp3) {
    if (null == tmp5) {
      let tmp13 = closure_9(closure_17, {});
    } else {
      let obj = {
        handshakeToken: tmp5,
        setAuthStep: function transitionStep(arg0) {
              importDefault(arg0);
              const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimation();
            }
      };
      tmp13 = closure_9(closure_15, obj);
    }
    return tmp13;
  } else if (constants.SUCCEEDED === tmp3) {
    return closure_9(closure_16, {});
  } else {
    const NOT_FOUND = constants.NOT_FOUND;
    return closure_9(closure_17, {});
  }
  const tmp4 = _slicedToArray(noop.useState(null), 2);
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((handshakeToken) => {
  const cResult = handshakeToken(576).c(29);
  handshakeToken = handshakeToken.handshakeToken;
  const setAuthStep = handshakeToken.setAuthStep;
  const tmp4 = closure_12();
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
    const fn2 = function h() {
      const HTTP = HTTPUtils.HTTP;
      const request = { url: Endpoints.REMOTE_AUTH_CANCEL, body: { handshake_token: handshakeToken }, oldFormErrors: true, rejectWithError: true };
      HTTP.post(request);
      ModalActionCreatorsDefault.pop();
    };
    cResult[2] = handshakeToken;
    cResult[3] = fn2;
    let tmp11 = fn2;
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
    if (cResult[7] !== tmp4.mainImage) {
      const obj4 = { source: setAuthStep(13676), style: tmp4.mainImage };
      const tmp19 = closure_9(closure_6, obj4);
      cResult[7] = tmp4.mainImage;
      cResult[8] = tmp19;
      let tmp15 = tmp19;
    } else {
      tmp15 = cResult[8];
    }
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { variant: "heading-md/extrabold", children: null };
      const intl = tmp(1126).intl;
      obj5.children = intl.string(tmp(1126).t.jD2pqF);
      const tmp22 = closure_9(tmp(4886).Heading, obj5);
      cResult[9] = tmp22;
      let tmp20 = tmp22;
    } else {
      tmp20 = cResult[9];
    }
    const _Symbol2 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1126).intl;
      const stringResult = intl2.string(tmp(1126).t["hcd/kh"]);
      cResult[10] = stringResult;
      let tmp23 = stringResult;
    } else {
      tmp23 = cResult[10];
    }
    if (cResult[11] !== tmp4.warningCaption) {
      const obj6 = { style: tmp4.warningCaption, children: tmp23 };
      const tmp27 = closure_9(tmp(1188).LegacyText, obj6);
      cResult[11] = tmp4.warningCaption;
      cResult[12] = tmp27;
      let tmp25 = tmp27;
    } else {
      tmp25 = cResult[12];
    }
    const _HermesInternal = HermesInternal;
    const combined = "" + tmp14;
    const _Symbol3 = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1126).intl;
      const stringResult1 = intl3.string(tmp(1126).t.N3qV8e);
      cResult[13] = stringResult1;
      let tmp29 = stringResult1;
    } else {
      tmp29 = cResult[13];
    }
    if (cResult[14] === tmp12) {
      if (cResult[15] === tmp14) {
        if (cResult[16] === combined) {
          let tmp31 = cResult[17];
        }
        const _Symbol4 = Symbol;
        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = tmp(1126).intl;
          const stringResult2 = intl4.string(tmp(1126).t["ETE/oC"]);
          cResult[18] = stringResult2;
          let tmp34 = stringResult2;
        } else {
          tmp34 = cResult[18];
        }
        if (cResult[19] !== tmp11) {
          const obj7 = { variant: "secondary", text: tmp34, onPress: tmp11 };
          const tmp38 = closure_9(tmp(5594).Button, obj7);
          cResult[19] = tmp11;
          cResult[20] = tmp38;
          let tmp36 = tmp38;
        } else {
          tmp36 = cResult[20];
        }
        if (cResult[21] === tmp4.buttonGroup) {
          if (cResult[22] === tmp31) {
            if (cResult[23] === tmp36) {
              let tmp39 = cResult[24];
            }
            if (cResult[25] === tmp39) {
              if (cResult[26] === tmp15) {
                if (cResult[27] === tmp25) {
                  let tmp42 = cResult[28];
                }
                return tmp42;
              }
            }
            const obj8 = { children: null };
            const items1 = [tmp15, tmp20, tmp25, tmp39];
            obj8.children = items1;
            const tmp45 = closure_10(closure_11, obj8);
            cResult[25] = tmp39;
            cResult[26] = tmp15;
            cResult[27] = tmp25;
            cResult[28] = tmp45;
            tmp42 = tmp45;
          }
        }
        const obj9 = { style: tmp4.buttonGroup, children: null };
        const items2 = [tmp31, tmp36];
        obj9.children = items2;
        const tmp41 = closure_10(tmp(5592).ButtonGroup, obj9);
        cResult[21] = tmp4.buttonGroup;
        cResult[22] = tmp31;
        cResult[23] = tmp36;
        cResult[24] = tmp41;
        tmp39 = tmp41;
      }
    }
    const obj10 = { text: tmp29, onPress: tmp12, disabled: tmp14 };
    const tmp33 = closure_9(tmp(5594).Button, obj10, combined);
    cResult[14] = tmp12;
    cResult[15] = tmp14;
    cResult[16] = combined;
    cResult[17] = tmp33;
    tmp31 = tmp33;
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
}) : ((arg0) => {
  ({ handshakeToken: require, setAuthStep: importDefault } = arg0);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  const tmp = closure_12();
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
  let tmp10 = !tmp3;
  if (!tmp3) {
    tmp10 = !tmp5;
  }
  const obj2 = { children: null };
  const throttleResult = _modDef12.throttle(() => {
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
  const items = [closure_9(closure_6, { source: _modDef13676, style: tmp.mainImage }), , , ];
  const obj4 = { variant: "heading-md/extrabold", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t.jD2pqF);
  items[1] = closure_9(Text_Text.Heading, obj4);
  const obj5 = { style: tmp.warningCaption, children: null };
  const intl2 = util.intl;
  obj5.children = intl2.string(util.t["hcd/kh"]);
  items[2] = closure_9(native.LegacyText, obj5);
  const obj6 = { style: tmp.buttonGroup, children: null };
  const obj7 = { text: null, onPress: null, disabled: null };
  const intl3 = util.intl;
  obj7.text = intl3.string(util.t.N3qV8e);
  obj7.onPress = throttleResult;
  obj7.disabled = tmp10;
  const items1 = [closure_9(components_Button_Button.Button, obj7, "" + tmp10), ];
  const obj8 = { variant: "secondary", text: null, onPress: null };
  const intl4 = util.intl;
  obj8.text = intl4.string(util.t["ETE/oC"]);
  obj8.onPress = function onPress() {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.REMOTE_AUTH_CANCEL, body: { handshake_token }, oldFormErrors: true, rejectWithError: true };
    HTTP.post(request);
    ModalActionCreatorsDefault.pop();
  };
  items1[1] = closure_9(components_Button_Button.Button, obj8);
  obj6.children = items1;
  items[3] = closure_10(ButtonGroup.ButtonGroup, obj6);
  obj2.children = items;
  return closure_10(closure_11, obj2);
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(13);
  const tmp4 = closure_12();
  if (cResult[0] !== tmp4.mainImage) {
    const obj2 = { source: _modDef13677, style: tmp4.mainImage };
    const tmp9 = options(timestampProducer, obj2);
    cResult[0] = tmp4.mainImage;
    cResult[1] = tmp9;
    let tmp5 = tmp9;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "heading-xl/extrabold", children: null };
    const intl = util.intl;
    obj3.children = intl.string(util.t.HbwTOZ);
    const tmp12 = options(Text_Text.Heading, obj3);
    cResult[2] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = util.intl;
    const stringResult = intl2.string(util.t.wKknJ0);
    cResult[3] = stringResult;
    let tmp13 = stringResult;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] !== tmp4.caption) {
    const obj4 = { style: tmp4.caption, variant: "text-md/medium", color: "text-muted", children: tmp13 };
    const tmp17 = options(Text_Text.Text, obj4);
    cResult[4] = tmp4.caption;
    cResult[5] = tmp17;
    let tmp15 = tmp17;
  } else {
    tmp15 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { text: null, onPress: null };
    const intl3 = util.intl;
    obj5.text = intl3.string(util.t.pYWLA0);
    obj5.onPress = ModalActionCreatorsDefault.pop;
    const tmp21 = options(components_Button_Button.Button, obj5);
    cResult[6] = tmp21;
    let tmp18 = tmp21;
  } else {
    tmp18 = cResult[6];
  }
  if (cResult[7] !== tmp4.buttonGroup) {
    const obj6 = { style: tmp4.buttonGroup, children: tmp18 };
    const tmp24 = options(ButtonGroup.ButtonGroup, obj6);
    cResult[7] = tmp4.buttonGroup;
    cResult[8] = tmp24;
    let tmp22 = tmp24;
  } else {
    tmp22 = cResult[8];
  }
  if (cResult[9] === tmp5) {
    if (cResult[10] === tmp15) {
      if (cResult[11] === tmp22) {
        let tmp25 = cResult[12];
      }
      return tmp25;
    }
  }
  const obj7 = { children: null };
  const items = [tmp5, tmp10, tmp15, tmp22];
  obj7.children = items;
  const tmp26 = v65535(closure_1_11, obj7);
  cResult[9] = tmp5;
  cResult[10] = tmp15;
  cResult[11] = tmp22;
  cResult[12] = tmp26;
  tmp25 = tmp26;
}) : (() => {
  const tmp = closure_12();
  const obj = { children: null };
  const items = [options(timestampProducer, { source: _modDef13677, style: tmp.mainImage }), , , ];
  const obj3 = { variant: "heading-xl/extrabold", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t.HbwTOZ);
  items[1] = options(Text_Text.Heading, obj3);
  const obj4 = { style: tmp.caption, variant: "text-md/medium", color: "text-muted", children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t.wKknJ0);
  items[2] = options(Text_Text.Text, obj4);
  const obj5 = { style: tmp.buttonGroup, children: null };
  const obj6 = { text: null, onPress: null };
  const intl3 = util.intl;
  obj6.text = intl3.string(util.t.pYWLA0);
  obj6.onPress = ModalActionCreatorsDefault.pop;
  obj5.children = options(components_Button_Button.Button, obj6);
  items[3] = options(ButtonGroup.ButtonGroup, obj5);
  obj.children = items;
  return v65535(closure_1_11, obj);
});
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(10);
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "heading-xl/extrabold", children: null };
    const intl = util.intl;
    obj2.children = intl.string(util.t.NShI3Q);
    const tmp7 = options(Text_Text.Heading, obj2);
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
    const tmp12 = options(Text_Text.Text, obj3);
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
    const tmp16 = options(components_Button_Button.Button, obj4);
    cResult[4] = tmp16;
    let tmp13 = tmp16;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] !== tmp4.buttonGroup) {
    const obj5 = { style: tmp4.buttonGroup, children: tmp13 };
    const tmp19 = options(ButtonGroup.ButtonGroup, obj5);
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
  const tmp21 = v65535(closure_1_11, obj6);
  cResult[7] = tmp10;
  cResult[8] = tmp17;
  cResult[9] = tmp21;
  tmp20 = tmp21;
}) : (() => {
  const tmp = closure_12();
  const obj = { children: null };
  const obj2 = { variant: "heading-xl/extrabold", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.NShI3Q);
  const items = [options(Text_Text.Heading, obj2), , ];
  const obj3 = { style: tmp.caption, variant: "text-md/medium", color: "text-muted", children: null };
  const intl2 = util.intl;
  obj3.children = intl2.string(util.t.Ygezov);
  items[1] = options(Text_Text.Text, obj3);
  const obj4 = { style: tmp.buttonGroup, children: null };
  const obj5 = { text: null, onPress: null };
  const intl3 = util.intl;
  obj5.text = intl3.string(util.t["ETE/oC"]);
  obj5.onPress = ModalActionCreatorsDefault.pop;
  obj4.children = options(components_Button_Button.Button, obj5);
  items[2] = options(ButtonGroup.ButtonGroup, obj4);
  obj.children = items;
  return v65535(closure_1_11, obj);
});
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = options(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.loadingContainer) {
    const obj2 = { style: tmp4.loadingContainer, children: first };
    const tmp11 = options(React5, obj2);
    cResult[1] = tmp4.loadingContainer;
    cResult[2] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : (() => options(React5, { style: closure_12().loadingContainer, children: options(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) }));
const size = fn(2);
let result = size.fileFinishedImporting("modules/remote_auth/components/native/RemoteAuthModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(18);
  const tmp3 = closure_12();
  const top = useSafeAreaInsetsDefault().top;
  if (cResult[0] !== top) {
    const obj2 = { marginTop: top };
    cResult[0] = top;
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp3.logo) {
    if (cResult[3] === tmp5) {
      let tmp6 = cResult[4];
    }
    if (cResult[5] !== arg0) {
      const obj3 = {};
      const merged = Object.assign(arg0);
      const tmp15 = options(closure_14, obj3);
      cResult[5] = arg0;
      cResult[6] = tmp15;
      let tmp9 = tmp15;
    } else {
      tmp9 = cResult[6];
    }
    if (cResult[7] === tmp3.mainCard) {
      if (cResult[8] === tmp9) {
        let tmp16 = cResult[9];
      }
      if (cResult[10] === tmp3.container) {
        if (cResult[11] === tmp16) {
          let tmp20 = cResult[12];
        }
        if (cResult[13] === tmp3.background) {
          if (cResult[14] === tmp3.imageStyle) {
            if (cResult[15] === tmp6) {
              if (cResult[16] === tmp20) {
                let tmp24 = cResult[17];
              }
              return tmp24;
            }
          }
        }
        const obj4 = { source: _modDef13675, imageStyle: null, style: null, children: null };
        ({ imageStyle: obj7.imageStyle, background: obj7.style } = tmp3);
        const items = [tmp6, tmp20];
        obj4.children = items;
        const tmp27 = v65535(hasOwnProperty, obj4);
        cResult[13] = tmp3.background;
        cResult[14] = tmp3.imageStyle;
        cResult[15] = tmp6;
        cResult[16] = tmp20;
        cResult[17] = tmp27;
        tmp24 = tmp27;
      }
      const obj5 = { style: tmp3.container, children: tmp16 };
      const tmp23 = options(React5, obj5);
      cResult[10] = tmp3.container;
      cResult[11] = tmp16;
      cResult[12] = tmp23;
      tmp20 = tmp23;
    }
    const obj6 = { style: tmp3.mainCard, children: tmp9 };
    const tmp19 = options(React5, obj6);
    cResult[7] = tmp3.mainCard;
    cResult[8] = tmp9;
    cResult[9] = tmp19;
    tmp16 = tmp19;
  }
  const obj13 = { style: null, source: _modDef13673 };
  const items1 = [tmp3.logo, tmp5];
  obj13.style = items1;
  const tmp7 = options(timestampProducer, obj13);
  cResult[2] = tmp3.logo;
  cResult[3] = tmp5;
  cResult[4] = tmp7;
  tmp6 = tmp7;
}) : ((arg0) => {
  const tmp = closure_12();
  const obj = { source: _modDef13675, imageStyle: null, style: null, children: null };
  ({ imageStyle: obj.imageStyle, background: obj.style } = tmp);
  const obj2 = { style: null, source: _modDef13673 };
  const items = [tmp.logo, { marginTop: useSafeAreaInsetsDefault().top }];
  obj2.style = items;
  const items1 = [options(timestampProducer, obj2), ];
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.mainCard, children: null };
  const merged = Object.assign(arg0);
  obj4.children = options(closure_14, {});
  obj3.children = options(React5, obj4);
  items1[1] = options(React5, obj3);
  obj.children = items1;
  return v65535(hasOwnProperty, obj);
});