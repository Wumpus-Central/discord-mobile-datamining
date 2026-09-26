// === Module 13409: RemoteAuthModal ===

// Module 13409 (RemoteAuthModal)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import Text_Text from "Text/Text" /* 4832 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import ButtonGroup from "ButtonGroup" /* 5745 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5889 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 5893 */;
import _modDef13408 from "module_13408" /* 13408 */;
import _modDef13410 from "module_13410" /* 13410 */;
import _modDef13411 from "module_13411" /* 13411 */;
import _modDef13412 from "module_13412" /* 13412 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function RemoteAuthBody(remoteAuthFingerprint) {
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
      const result = remoteAuthFingerprint(5893).DeprecatedLayoutAnimation();
    }).catch(() => {
      closure_1_1(constants.NOT_FOUND);
      const result = remoteAuthFingerprint(5893).DeprecatedLayoutAnimation();
    });
  }, items);
  if (constants.LOADING === tmp3) {
    return closure_9(RemoteAuthLoading, {});
  } else if (constants.LOADED === tmp3) {
    if (null == tmp5) {
      let tmp13 = closure_9(RemoteAuthNotFound, {});
    } else {
      let obj = {
        handshakeToken: tmp5,
        setAuthStep: function transitionStep(arg0) {
              importDefault(arg0);
              const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimation();
            }
      };
      tmp13 = closure_9(RemoteAuthLogin, obj);
    }
    return tmp13;
  } else if (constants.SUCCEEDED === tmp3) {
    return closure_9(RemoteAuthLoginSucceeded, {});
  } else {
    const NOT_FOUND = constants.NOT_FOUND;
    return closure_9(RemoteAuthNotFound, {});
  }
  const tmp4 = _slicedToArray(noop.useState(null), 2);
}
function RemoteAuthLogin(arg0) {
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
  const items = [closure_9(closure_6, { source: _modDef13411, style: tmp.mainImage }), , , ];
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
}
function RemoteAuthLoginSucceeded() {
  const tmp = closure_12();
  const obj = { children: null };
  const items = [React7(timestampProducer, { source: _modDef13412, style: tmp.mainImage }), , , ];
  const obj3 = { variant: "heading-xl/extrabold", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t.HbwTOZ);
  items[1] = React7(Text_Text.Heading, obj3);
  const obj4 = { style: tmp.caption, variant: "text-md/medium", color: "text-muted", children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t.wKknJ0);
  items[2] = React7(Text_Text.Text, obj4);
  const obj5 = { style: tmp.buttonGroup, children: null };
  const obj6 = { text: null, onPress: null };
  const intl3 = util.intl;
  obj6.text = intl3.string(util.t.pYWLA0);
  obj6.onPress = ModalActionCreatorsDefault.pop;
  obj5.children = React7(components_Button_Button.Button, obj6);
  items[3] = React7(ButtonGroup.ButtonGroup, obj5);
  obj.children = items;
  return closure_1_10(closure_1_11, obj);
}
function RemoteAuthNotFound() {
  const tmp = closure_12();
  const obj = { children: null };
  const obj2 = { variant: "heading-xl/extrabold", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.NShI3Q);
  const items = [React7(Text_Text.Heading, obj2), , ];
  const obj3 = { style: tmp.caption, variant: "text-md/medium", color: "text-muted", children: null };
  const intl2 = util.intl;
  obj3.children = intl2.string(util.t.Ygezov);
  items[1] = React7(Text_Text.Text, obj3);
  const obj4 = { style: tmp.buttonGroup, children: null };
  const obj5 = { text: null, onPress: null };
  const intl3 = util.intl;
  obj5.text = intl3.string(util.t["ETE/oC"]);
  obj5.onPress = ModalActionCreatorsDefault.pop;
  obj4.children = React7(components_Button_Button.Button, obj5);
  items[2] = React7(ButtonGroup.ButtonGroup, obj4);
  obj.children = items;
  return closure_1_10(closure_1_11, obj);
}
function RemoteAuthLoading() {
  return React7(React5, { style: closure_12().loadingContainer, children: React7(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) });
}
get_ActivityIndicator = fn(17);
({ ImageBackground: hasOwnProperty, Image: metroRequire, View: closure_7 } = get_ActivityIndicator);
const Endpoints = fn(1074).Endpoints;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(4836);
let obj2 = { background: { width: "100%", height: "100%" }, container: { flex: 1, alignItems: "stretch", alignContent: "center" }, imageStyle: { resizeMode: "cover" }, logo: { position: "absolute", top: 16, alignSelf: "center", width: 32, height: 32 }, mainImage: { marginTop: 16, marginBottom: 32 }, warningCaption: { fontSize: 16, lineHeight: 20, color: nativeDefault.unsafe_rawColors.RED_400, textAlign: "center", marginTop: 8, marginBottom: 32 }, caption: { lineHeight: 20, textAlign: "center", marginTop: 8, marginBottom: 32 }, mainCard: null, buttonGroup: null, loadingContainer: null };
let obj3 = { fontSize: 16, lineHeight: 20, color: nativeDefault.unsafe_rawColors.RED_400, textAlign: "center", marginTop: 8, marginBottom: 32 };
obj2.mainCard = { display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: "auto", marginBottom: "auto", marginLeft: 16, marginRight: 16, borderRadius: nativeDefault.radii.sm, padding: 16, shadowColor: nativeDefault.colors.BLACK, shadowOpacity: 0.16, shadowRadius: 2, shadowOffset: { height: 2, width: 0 } };
obj2.buttonGroup = { paddingVertical: 0 };
obj2.loadingContainer = { height: 300, justifyContent: "center" };
let closure_12 = createStyles.createStyles(obj2);
const constants = { LOADING: 0, [0]: "LOADING", NOT_FOUND: 1, [1]: "NOT_FOUND", LOADED: 2, [2]: "LOADED", SUCCEEDED: 3, [3]: "SUCCEEDED" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/remote_auth/components/native/RemoteAuthModal.tsx");

export default function RemoteAuth(arg0) {
  const tmp = closure_12();
  const obj = { source: _modDef13410, imageStyle: null, style: null, children: null };
  ({ imageStyle: obj.imageStyle, background: obj.style } = tmp);
  const obj2 = { style: null, source: _modDef13408 };
  const items = [tmp.logo, { marginTop: useSafeAreaInsetsDefault().top }];
  obj2.style = items;
  const items1 = [React7(timestampProducer, obj2), ];
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.mainCard, children: null };
  const merged = Object.assign(arg0);
  obj4.children = React7(RemoteAuthBody, {});
  obj3.children = React7(React5, obj4);
  items1[1] = React7(React5, obj3);
  obj.children = items1;
  return closure_1_10(hasOwnProperty, obj);
};