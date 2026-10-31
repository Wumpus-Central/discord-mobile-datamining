// discord_app/modules/remote_auth/components/native/RemoteAuthModal.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import HTTPUtils from "../../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import DeprecatedLayoutAnimation from "../../../animations/native/DeprecatedLayoutAnimation.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import ButtonGroup from "../../../../design/components/ButtonGroup/native/ButtonGroup.native.tsx";
import ActivityIndicator_ActivityIndicator from "../../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import _modDef15681 from "../../../../../_runtime/metro/15681__.js";
import _modDef15683 from "../../../../../_runtime/metro/15683__.js";
import QrLoginSpotIllustration from "../../../../design/components/mana-assets/native/generated/QrLoginSpotIllustration.native.tsx";
import QrSuccessSpotIllustration from "../../../../design/components/mana-assets/native/generated/QrSuccessSpotIllustration.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function RemoteAuthBody(remoteAuthFingerprint) {
  remoteAuthFingerprint = remoteAuthFingerprint.remoteAuthFingerprint;
  [tmp3, importDefault] = noop.useState(constants.LOADING);
  const tmp2 = _slicedToArray(noop.useState(constants.LOADING), 2);
  [tmp5, dependencyMap] = noop.useState(null);
  const items = [remoteAuthFingerprint];
  const effect = noop.useEffect(() => {
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: Endpoints.REMOTE_AUTH_INITIALIZE,
      body: { fingerprint: remoteAuthFingerprint },
      oldFormErrors: true,
      rejectWithError: true,
    };
    const obj = { fingerprint: remoteAuthFingerprint };
    const postResult = HTTP.post(request);
    HTTP.post(request)
      .then((body) => {
        dependencyMap(body.body.handshake_token);
        closure_1_1(constants.LOADED);
        const result = remoteAuthFingerprint(5609).DeprecatedLayoutAnimation();
      })
      .catch(() => {
        closure_1_1(constants.NOT_FOUND);
        const result = remoteAuthFingerprint(5609).DeprecatedLayoutAnimation();
      });
  }, items);
  if (constants.LOADING === tmp3) {
    return closure_7(RemoteAuthLoading, {});
  } else if (constants.LOADED === tmp3) {
    if (null == tmp5) {
      let tmp13 = closure_7(RemoteAuthNotFound, {});
    } else {
      let obj = {
        handshakeToken: tmp5,
        setAuthStep: function transitionStep(arg0) {
          importDefault(arg0);
          const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimation();
        },
      };
      tmp13 = closure_7(RemoteAuthLogin, obj);
    }
    return tmp13;
  } else if (constants.SUCCEEDED === tmp3) {
    return closure_7(RemoteAuthLoginSucceeded, {});
  } else {
    const NOT_FOUND = constants.NOT_FOUND;
    return closure_7(RemoteAuthNotFound, {});
  }
  const tmp4 = _slicedToArray(noop.useState(null), 2);
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
  const throttleResult = _modDef12.throttle(
    () => {
      _undefined(true);
      const HTTP = HTTPUtils.HTTP;
      const request = {
        url: Endpoints.REMOTE_AUTH_FINISH,
        body: { handshake_token },
        oldFormErrors: true,
        rejectWithError: true,
      };
      const obj = { handshake_token };
      const postResult = HTTP.post(request);
      HTTP.post(request)
        .then(() => {
          closure_1_1(constants.SUCCEEDED);
        })
        .catch(() => {
          closure_1_1(constants.NOT_FOUND);
        });
    },
    1000,
    { leading: true, trailing: false },
  );
  const items = [
    closure_7(closure_5, {
      style: tmp.mainImage,
      children: closure_7(QrLoginSpotIllustration.QrLoginSpotIllustration, { scale: 0.75 }),
    }),
    ,
    ,
  ];
  const obj4 = { variant: "heading-md/extrabold", children: null };
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
  const items1 = [closure_7(components_Button_Button.Button, obj7, "" + tmp9)];
  const obj8 = { variant: "secondary", text: null, onPress: null };
  const intl4 = util.intl;
  obj8.text = intl4.string(util.t["ETE/oC"]);
  obj8.onPress = function handleCancelPress() {
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: Endpoints.REMOTE_AUTH_CANCEL,
      body: { handshake_token },
      oldFormErrors: true,
      rejectWithError: true,
    };
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
  const items = [
    React5(hasOwnProperty, {
      style: tmp.mainImage,
      children: React5(QrSuccessSpotIllustration.QrSuccessSpotIllustration, { scale: 0.75 }),
    }),
    ,
    ,
  ];
  const obj3 = { variant: "heading-xl/extrabold", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t.HbwTOZ);
  items[1] = React5(Text_Text.Heading, obj3);
  const obj4 = { style: tmp.caption, variant: "text-md/medium", color: "text-muted", children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t.wKknJ0);
  items[2] = React5(Text_Text.Text, obj4);
  const obj5 = { style: tmp.buttonGroup, children: null };
  const obj6 = { text: null, onPress: null };
  const intl3 = util.intl;
  obj6.text = intl3.string(util.t.pYWLA0);
  obj6.onPress = ModalActionCreatorsDefault.pop;
  obj5.children = React5(components_Button_Button.Button, obj6);
  items[3] = React5(ButtonGroup.ButtonGroup, obj5);
  obj.children = items;
  return React6(React7, obj);
}
function RemoteAuthNotFound() {
  const tmp = closure_10();
  const obj = { children: null };
  const obj2 = { variant: "heading-xl/extrabold", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.NShI3Q);
  const items = [React5(Text_Text.Heading, obj2), ,];
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
  return React6(React7, obj);
}
function RemoteAuthLoading() {
  return React5(hasOwnProperty, {
    style: closure_10().loadingContainer,
    children: React5(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}),
  });
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const Endpoints = fn(1072).Endpoints;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5014);
let obj2 = {
  background: { width: "100%", height: "100%" },
  container: { flex: 1, alignItems: "stretch", alignContent: "center" },
  imageStyle: null,
  logo: null,
  mainImage: null,
  warningCaption: null,
  caption: null,
  mainCard: null,
  buttonGroup: null,
  loadingContainer: null,
};
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.width = "100%";
obj3.height = "100%";
obj3.resizeMode = "cover";
obj2.imageStyle = obj3;
obj2.logo = { position: "absolute", top: 16, alignSelf: "center", width: 32, height: 32 };
obj2.mainImage = { marginTop: 16, marginBottom: 32 };
obj2.warningCaption = {
  fontSize: 16,
  lineHeight: 20,
  color: nativeDefault.unsafe_rawColors.RED_400,
  textAlign: "center",
  marginTop: 8,
  marginBottom: 32,
};
obj2.caption = { lineHeight: 20, textAlign: "center", marginTop: 8, marginBottom: 32 };
let obj4 = {
  fontSize: 16,
  lineHeight: 20,
  color: nativeDefault.unsafe_rawColors.RED_400,
  textAlign: "center",
  marginTop: 8,
  marginBottom: 32,
};
obj2.mainCard = {
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
obj2.buttonGroup = { paddingVertical: 0 };
obj2.loadingContainer = { height: 300, justifyContent: "center" };
let closure_10 = createStyles.createStyles(obj2);
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/remote_auth/components/native/RemoteAuthModal.tsx");

export default function RemoteAuth(arg0) {
  const tmp = closure_10();
  const obj = { style: tmp.background, children: null };
  const obj2 = { source: _modDef15683, style: tmp.imageStyle };
  const items = [React5(FastImageDefault, obj2), ,];
  const obj3 = { style: null, source: null };
  const items1 = [tmp.logo, { marginTop: useSafeAreaInsetsDefault().top }];
  obj3.style = items1;
  obj3.source = _modDef15681;
  items[1] = React5(FastImageDefault, obj3);
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { style: tmp.mainCard, children: null };
  const merged = Object.assign(arg0);
  obj5.children = React5(RemoteAuthBody, {});
  obj4.children = React5(hasOwnProperty, obj5);
  items[2] = React5(hasOwnProperty, obj4);
  obj.children = items;
  return React6(hasOwnProperty, obj);
}
