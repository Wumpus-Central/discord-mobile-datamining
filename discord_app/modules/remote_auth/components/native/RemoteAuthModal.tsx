// === Module 16182: RemoteAuthModal ===

// Module 16182 (RemoteAuthModal)
import applyDefault from "apply" /* 12 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import native from "native" /* 1187 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _mod1652 from "module_1652" /* 1652 */;
import Text_Text from "Text/Text" /* 5866 */;
import components_Button_Button from "components/Button/Button" /* 5873 */;
import FastImageDefault from "FastImage" /* 5957 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import ButtonGroup from "ButtonGroup" /* 6888 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 7354 */;
import AuthBackgroundArtDefault from "AuthBackgroundArt" /* 7646 */;
import useEaseInEaseOutLayoutAnimationsDefault from "useEaseInEaseOutLayoutAnimations" /* 14968 */;
import _modDef16181 from "module_16181" /* 16181 */;
import QrLoginSpotIllustration from "QrLoginSpotIllustration" /* 16183 */;
import QrSuccessSpotIllustration from "QrSuccessSpotIllustration" /* 16187 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const _modDef1652 = tmp8(1652);
require = fn;
function RemoteAuthBody(remoteAuthFingerprint) {
  remoteAuthFingerprint = remoteAuthFingerprint.remoteAuthFingerprint;
  const tmp = closure_10();
  [tmp4, tmp5] = noop.useState(constants.LOADING);
  importDefault = tmp5;
  const tmp3 = _slicedToArray(noop.useState(constants.LOADING), 2);
  [tmp7, dependencyMap] = noop.useState(null);
  const tmp6 = _slicedToArray(noop.useState(null), 2);
  items = [remoteAuthFingerprint];
  ({ entering, exiting } = useEaseInEaseOutLayoutAnimationsDefault());
  const effect = noop.useEffect(() => {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.REMOTE_AUTH_INITIALIZE, body: { fingerprint: remoteAuthFingerprint }, oldFormErrors: true, rejectWithError: true };
    const obj = { fingerprint: remoteAuthFingerprint };
    const postResult = HTTP.post(request);
    HTTP.post(request).then((body) => {
      closure_1_2(body.body.handshake_token);
      closure_1_1(constants.LOADED);
    }).catch(() => {
      closure_1_1(constants.NOT_FOUND);
    });
  }, items);
  if (constants.LOADING === tmp4) {
    let tmp14 = closure_7(RemoteAuthLoading, {});
    let tmp12 = closure_7;
  } else if (constants.LOADED === tmp4) {
    if (null == tmp7) {
      let tmp19 = closure_7(RemoteAuthNotFound, {});
      let tmp17 = closure_7;
    } else {
      tmp17 = closure_7;
      let obj = { handshakeToken: tmp7, setAuthStep: tmp5 };
      tmp19 = closure_7(RemoteAuthLogin, obj);
    }
    tmp12 = tmp17;
    tmp14 = tmp19;
  } else if (constants.SUCCEEDED === tmp4) {
    tmp14 = closure_7(RemoteAuthLoginSucceeded, {});
    tmp12 = closure_7;
  } else {
    const NOT_FOUND = constants.NOT_FOUND;
    tmp12 = closure_7;
    tmp14 = closure_7(RemoteAuthNotFound, {});
  }
  return tmp12(_modDef1652.View, { style: tmp.step, entering, exiting, children: tmp14 }, tmp4);
}
function RemoteAuthLogin(arg0) {
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
  const throttleResult = applyDefault.throttle(() => {
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
  items = [closure_7(View, { style: tmp.mainImage, children: closure_7(QrLoginSpotIllustration.QrLoginSpotIllustration, { scale: 0.75 }) }), , , ];
  const obj4 = { variant: "heading-sm/semibold", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t.jD2pqF);
  items[1] = closure_7(Text_Text.Heading, obj4);
  const obj5 = { style: tmp.warningCaption, children: null };
  const intl2 = util.intl;
  obj5.children = intl2.string(util.t["hcd/kh"]);
  items[2] = closure_7(native.LegacyText, obj5);
  const obj6 = { style: tmp.buttonGroup, children: null };
  const obj7 = { text: null, onPress: null, disabled: null };
  const intl3 = util.intl;
  obj7.text = intl3.string(util.t.N3qV8e);
  obj7.onPress = throttleResult;
  obj7.disabled = tmp9;
  const items1 = [closure_7(components_Button_Button.Button, obj7, "" + tmp9), ];
  const obj8 = { variant: "secondary", text: null, onPress: null };
  const intl4 = util.intl;
  obj8.text = intl4.string(util.t["ETE/oC"]);
  obj8.onPress = function handleCancelPress() {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.REMOTE_AUTH_CANCEL, body: { handshake_token }, oldFormErrors: true, rejectWithError: true };
    HTTP.post(request);
    ModalActionCreatorsDefault.pop();
  };
  items1[1] = closure_7(components_Button_Button.Button, obj8);
  obj6.children = items1;
  items[3] = closure_8(ButtonGroup.ButtonGroup, obj6);
  obj2.children = items;
  return closure_8(closure_9, obj2);
}
function RemoteAuthLoginSucceeded() {
  const tmp = closure_10();
  const obj = { children: null };
  items = [metroImportDefault(View, { style: tmp.mainImage, children: metroImportDefault(QrSuccessSpotIllustration.QrSuccessSpotIllustration, { scale: 0.75 }) }), , , ];
  const obj3 = { variant: "heading-xl/semibold", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t.HbwTOZ);
  items[1] = metroImportDefault(Text_Text.Heading, obj3);
  const obj4 = { style: tmp.caption, variant: "body-md/medium", color: "text-muted", children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t.wKknJ0);
  items[2] = metroImportDefault(Text_Text.Text, obj4);
  const obj5 = { style: tmp.buttonGroup, children: null };
  const obj6 = { text: null, onPress: null };
  const intl3 = util.intl;
  obj6.text = intl3.string(util.t.pYWLA0);
  obj6.onPress = ModalActionCreatorsDefault.pop;
  obj5.children = metroImportDefault(components_Button_Button.Button, obj6);
  items[3] = metroImportDefault(ButtonGroup.ButtonGroup, obj5);
  obj.children = items;
  return React5(React6, obj);
}
function RemoteAuthNotFound() {
  const tmp = closure_10();
  const obj = { children: null };
  const obj2 = { variant: "heading-xl/semibold", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.NShI3Q);
  items = [metroImportDefault(Text_Text.Heading, obj2), , ];
  const obj3 = { style: tmp.caption, variant: "body-md/medium", color: "text-muted", children: null };
  const intl2 = util.intl;
  obj3.children = intl2.string(util.t.Ygezov);
  items[1] = metroImportDefault(Text_Text.Text, obj3);
  const obj4 = { style: tmp.buttonGroup, children: null };
  const obj5 = { text: null, onPress: null };
  const intl3 = util.intl;
  obj5.text = intl3.string(util.t["ETE/oC"]);
  obj5.onPress = ModalActionCreatorsDefault.pop;
  obj4.children = metroImportDefault(components_Button_Button.Button, obj5);
  items[2] = metroImportDefault(ButtonGroup.ButtonGroup, obj4);
  obj.children = items;
  return React5(React6, obj);
}
function RemoteAuthLoading() {
  return metroImportDefault(View, { style: closure_10().loadingContainer, children: metroImportDefault(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) });
}
const View = fn(17).View;
const Endpoints = fn(1072).Endpoints;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5243);
let obj2 = { background: { width: "100%", height: "100%" }, container: { flex: 1, alignItems: "stretch", alignContent: "center" }, logo: { position: "absolute", top: 16, alignSelf: "center", width: 32, height: 32 }, mainImage: { marginTop: 16, marginBottom: 32 }, warningCaption: { fontSize: 16, lineHeight: 20, color: nativeDefault.unsafe_rawColors.RED_400, textAlign: "center", marginTop: 8, marginBottom: 32 }, caption: { lineHeight: 20, textAlign: "center", marginTop: 8, marginBottom: 32 }, mainCard: null, step: null, buttonGroup: null, loadingContainer: null };
let obj3 = { fontSize: 16, lineHeight: 20, color: nativeDefault.unsafe_rawColors.RED_400, textAlign: "center", marginTop: 8, marginBottom: 32 };
obj2.mainCard = { display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: "auto", marginBottom: "auto", marginLeft: 16, marginRight: 16, borderRadius: nativeDefault.radii.sm, padding: 16, shadowColor: nativeDefault.colors.BLACK, shadowOpacity: 0.16, shadowRadius: 2, shadowOffset: { height: 2, width: 0 } };
obj2.step = { alignSelf: "stretch", alignItems: "center" };
obj2.buttonGroup = { paddingVertical: 0 };
obj2.loadingContainer = { height: 300, justifyContent: "center" };
let closure_10 = createStyles.createStyles(obj2);
const constants = { LOADING: 0, [0]: "LOADING", NOT_FOUND: 1, [1]: "NOT_FOUND", LOADED: 2, [2]: "LOADED", SUCCEEDED: 3, [3]: "SUCCEEDED" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/remote_auth/components/native/RemoteAuthModal.tsx");

export default function RemoteAuth(arg0) {
  const tmp = closure_10();
  const obj = { style: tmp.background, children: null };
  items = [metroImportDefault(AuthBackgroundArtDefault, {}), , ];
  const obj2 = { style: null, source: null };
  const items1 = [tmp.logo, { marginTop: useSafeAreaInsetsDefault().top }];
  obj2.style = items1;
  obj2.source = _modDef16181;
  items[1] = metroImportDefault(FastImageDefault, obj2);
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { skipEntering: true, children: null };
  const obj5 = { style: tmp.mainCard, layout: useEaseInEaseOutLayoutAnimationsDefault().layout, children: null };
  const merged = Object.assign(arg0);
  obj5.children = metroImportDefault(RemoteAuthBody, {});
  obj4.children = metroImportDefault(_modDef1652.View, obj5);
  obj3.children = metroImportDefault(_mod1652.LayoutAnimationConfig, obj4);
  items[2] = metroImportDefault(View, obj3);
  obj.children = items;
  return React5(View, obj);
};