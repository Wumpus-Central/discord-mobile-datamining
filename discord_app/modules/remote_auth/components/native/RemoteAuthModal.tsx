// discord_app/modules/remote_auth/components/native/RemoteAuthModal.tsx
import _slicedToArray from "_slicedToArray";
import ModalActionCreators from "../../../../actions/ModalActionCreators.tsx";
import get_ActivityIndicator from "ButtonGroup";
import { Endpoints } from "ME";
import jsxProd from "registerAsset";
import createCacheKey from "createCacheKey";
import { apply } from "../../../../../_runtime/00012_apply.js";
import { registerAsset } from "../../../../../_runtime/13322_registerAsset.js";
import { registerAsset } from "../../../../../_runtime/13324_registerAsset.js";
import { registerAsset } from "../../../../../_runtime/13326_registerAsset.js";
import { registerAsset } from "../../../../../_runtime/13327_registerAsset.js";
import { ModalActionCreators } from "../../../../actions/ModalActionCreators.tsx";
import { ActivityIndicator } from "../../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import { Button } from "../../../../design/components/Button/native/Button.native.tsx";
import { ButtonGroup } from "../../../../design/components/ButtonGroup/native/ButtonGroup.native.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { Button } from "../../../../design/void/native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { useSafeAreaInsets } from "../../../safe_area/useSafeAreaInsets.native.tsx";

let c10;
let c5;
let c9;
let closure_6;
let error;
let unpackModuleId;
const require = arg1;
function RemoteAuthBody(remoteAuthFingerprint) {
  let dependencyMap;
  let importDefault;
  let tmp3;
  let tmp5;
  remoteAuthFingerprint = remoteAuthFingerprint.remoteAuthFingerprint;
  [tmp3, importDefault] = callback(React.useState(constants.LOADING), 2);
  const tmp2 = callback(React.useState(constants.LOADING), 2);
  [tmp5, dependencyMap] = callback(React.useState(null), 2);
  const items = [remoteAuthFingerprint];
  const effect = React.useEffect(() => {
    const HTTP = remoteAuthFingerprint(outer1_2[11]).HTTP;
    obj = { url: outer1_8.REMOTE_AUTH_INITIALIZE, body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { fingerprint: remoteAuthFingerprint };
    const postResult = HTTP.post(obj);
    HTTP.post(obj).then((body) => {
      callback2(body.body.handshake_token);
      callback(outer1_13.LOADED);
      const result = outer1_0(outer1_2[10]).DeprecatedLayoutAnimation();
    }).catch(() => {
      callback(outer1_13.NOT_FOUND);
      const result = outer1_0(outer1_2[10]).DeprecatedLayoutAnimation();
    });
  }, items);
  if (constants.LOADING === tmp3) {
    return callback2(RemoteAuthLoading, {});
  } else if (tmp.LOADED === tmp3) {
    if (null == tmp5) {
      let tmp13 = callback2(RemoteAuthNotFound, {});
    } else {
      let obj = { handshakeToken: null, setAuthStep: null };
      obj[0] = tmp5;
      obj[1] = function transitionStep(arg0) {
        callback(arg0);
        const result = remoteAuthFingerprint(outer1_2[10]).DeprecatedLayoutAnimation();
      };
      tmp13 = callback2(RemoteAuthLogin, obj);
    }
    return tmp13;
  } else if (tmp.SUCCEEDED === tmp3) {
    return callback2(RemoteAuthLoginSucceeded, {});
  } else {
    const NOT_FOUND = tmp.NOT_FOUND;
    return callback2(RemoteAuthNotFound, {});
  }
  const tmp4 = callback(React.useState(null), 2);
}
function RemoteAuthLogin(arg0) {
  let c2;
  let c3;
  let importDefault;
  let require;
  let tmp3;
  let tmp5;
  ({ handshakeToken: require, setAuthStep: importDefault } = arg0);
  let dependencyMap;
  let callback;
  const tmp = createCacheKey();
  [tmp3, c2] = callback(React.useState(false), 2);
  const tmp2 = callback(React.useState(false), 2);
  [tmp5, c3] = callback(React.useState(false), 2);
  const effect = React.useEffect(() => {
    const timeout = setTimeout(() => {
      callback(true);
    }, 1000);
    return () => clearTimeout(closure_0);
  }, []);
  let obj = apply;
  let tmp10 = !tmp3;
  const tmp4 = callback(React.useState(false), 2);
  const tmp7 = importDefault;
  if (!tmp3) {
    tmp10 = !tmp5;
  }
  obj = { children: null };
  obj = { source: tmp7(13325), style: tmp.mainImage };
  const items = [callback2(closure_6, obj), , , ];
  const obj1 = { variant: "heading-md/extrabold", children: null };
  const intl = getSystemLocale.intl;
  obj1[1] = intl.string(getSystemLocale.t.jD2pqF);
  items[1] = callback2(Text.Heading, obj1);
  const obj2 = { style: tmp.warningCaption, children: null };
  const intl2 = getSystemLocale.intl;
  obj2[1] = intl2.string(getSystemLocale.t["hcd/kh"]);
  items[2] = callback2(Button.LegacyText, obj2);
  const obj3 = { style: tmp.buttonGroup, children: null };
  const obj4 = { text: null, onPress: null, disabled: null };
  const intl3 = getSystemLocale.intl;
  obj4[0] = intl3.string(getSystemLocale.t.N3qV8e);
  obj4[1] = obj.throttle(() => {
    _undefined2(true);
    const HTTP = outer1_0(_undefined[11]).HTTP;
    obj = { url: outer1_8.REMOTE_AUTH_FINISH, body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { handshake_token: closure_0 };
    const postResult = HTTP.post(obj);
    HTTP.post(obj).then(() => {
      callback(outer1_13.SUCCEEDED);
    }).catch(() => {
      callback(outer1_13.NOT_FOUND);
    });
  }, 1000, { leading: true, trailing: false });
  obj4[2] = tmp10;
  const items1 = [callback2(Button.Button, obj4, "" + tmp10), ];
  const obj5 = { variant: "secondary", text: null, onPress: null };
  const intl4 = getSystemLocale.intl;
  obj5[1] = intl4.string(getSystemLocale.t["ETE/oC"]);
  obj5[2] = function onPress() {
    const HTTP = outer1_0(_undefined[11]).HTTP;
    obj = { url: outer1_8.REMOTE_AUTH_CANCEL, body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { handshake_token: closure_0 };
    HTTP.post(obj);
    let arr = outer1_1(_undefined[19]);
    arr = arr.pop();
  };
  items1[1] = callback2(Button.Button, obj5);
  obj3[1] = items1;
  items[3] = callback3(ButtonGroup.ButtonGroup, obj3);
  obj[0] = items;
  return callback3(closure_11, obj);
}
function RemoteAuthLoginSucceeded() {
  const tmp = createCacheKey();
  let obj = { children: null };
  obj = { source: registerAsset, style: tmp.mainImage };
  const items = [callback2(closure_6, obj), , , ];
  obj = { variant: "heading-xl/extrabold", children: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.HbwTOZ);
  items[1] = callback2(Text.Heading, obj);
  const obj1 = { style: tmp.caption, variant: "text-md/medium", color: "text-muted", children: null };
  const intl2 = getSystemLocale.intl;
  obj1[3] = intl2.string(getSystemLocale.t.wKknJ0);
  items[2] = callback2(Text.Text, obj1);
  const obj2 = { style: tmp.buttonGroup, children: null };
  const obj3 = { text: null, onPress: null };
  const intl3 = getSystemLocale.intl;
  obj3[0] = intl3.string(getSystemLocale.t.pYWLA0);
  obj3[1] = ModalActionCreators.pop;
  obj2[1] = callback2(Button.Button, obj3);
  items[3] = callback2(ButtonGroup.ButtonGroup, obj2);
  obj[0] = items;
  return callback3(closure_11, obj);
}
function RemoteAuthNotFound() {
  const tmp = createCacheKey();
  let obj = { children: null };
  obj = { source: registerAsset, style: tmp.mainImage };
  const items = [callback2(closure_6, obj), , , ];
  obj = { variant: "heading-xl/extrabold", children: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.NShI3Q);
  items[1] = callback2(Text.Heading, obj);
  const obj1 = { style: tmp.caption, variant: "text-md/medium", color: "text-muted", children: null };
  const intl2 = getSystemLocale.intl;
  obj1[3] = intl2.string(getSystemLocale.t.Ygezov);
  items[2] = callback2(Text.Text, obj1);
  const obj2 = { style: tmp.buttonGroup, children: null };
  const obj3 = { text: null, onPress: null };
  const intl3 = getSystemLocale.intl;
  obj3[0] = intl3.string(getSystemLocale.t["ETE/oC"]);
  obj3[1] = ModalActionCreators.pop;
  obj2[1] = callback2(Button.Button, obj3);
  items[3] = callback2(ButtonGroup.ButtonGroup, obj2);
  obj[0] = items;
  return callback3(closure_11, obj);
}
function RemoteAuthLoading() {
  return callback2(closure_7, { style: createCacheKey().loadingContainer, children: callback2(ActivityIndicator.ActivityIndicator, {}) });
}
({ ImageBackground: c5, Image: closure_6, View: error } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = jsxProd);
createCacheKey = { background: { width: "100%", height: "100%" }, container: { flex: 1, alignItems: "stretch", alignContent: "center" }, imageStyle: { resizeMode: "cover" }, logo: { position: "absolute", top: 16, alignSelf: "center", width: 32, height: 32 }, mainImage: { marginTop: 16, marginBottom: 32 }, warningCaption: null, caption: null, mainCard: null, buttonGroup: null, loadingContainer: null };
createCacheKey = { fontSize: 16, lineHeight: 20, color: require("Themes").unsafe_rawColors.RED_400, textAlign: "center", marginTop: 8, marginBottom: 32 };
createCacheKey[5] = createCacheKey;
createCacheKey[6] = { lineHeight: 20, textAlign: "center", marginTop: 8, marginBottom: 32 };
createCacheKey[7] = { display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, marginTop: "auto", marginBottom: "auto", marginLeft: 16, marginRight: 16, borderRadius: require("Themes").radii.sm, padding: 16, shadowColor: require("Themes").colors.BLACK, shadowOpacity: 0.16, shadowRadius: 2, shadowOffset: { height: 2, width: 0 } };
createCacheKey[8] = { paddingVertical: 0 };
createCacheKey[9] = { height: 300, justifyContent: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_13 = { LOADING: 0, [0]: "LOADING", NOT_FOUND: 1, [1]: "NOT_FOUND", LOADED: 2, [2]: "LOADED", SUCCEEDED: 3, [3]: "SUCCEEDED" };
let obj1 = { display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, marginTop: "auto", marginBottom: "auto", marginLeft: 16, marginRight: 16, borderRadius: require("Themes").radii.sm, padding: 16, shadowColor: require("Themes").colors.BLACK, shadowOpacity: 0.16, shadowRadius: 2, shadowOffset: { height: 2, width: 0 } };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/remote_auth/components/native/RemoteAuthModal.tsx");

export default function RemoteAuth(arg0) {
  const tmp = createCacheKey();
  let obj = { source: null, imageStyle: null, style: null, children: null };
  obj[0] = registerAsset;
  ({ imageStyle: obj[1], background: obj[2] } = tmp);
  obj = { style: items, source: registerAsset };
  items = [tmp.logo, { marginTop: useSafeAreaInsets().top }];
  const items1 = [callback2(closure_6, obj), ];
  obj = { style: tmp.container, children: null };
  const obj1 = { style: tmp.mainCard, children: null };
  const merged = Object.assign(arg0);
  obj1[1] = callback2(RemoteAuthBody, {});
  obj[1] = callback2(closure_7, obj1);
  items1[1] = callback2(closure_7, obj);
  obj[3] = items1;
  return callback3(closure_5, obj);
};