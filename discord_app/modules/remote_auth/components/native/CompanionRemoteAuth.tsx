// === Module 15909: CompanionRemoteAuth ===

// Module 15909 (CompanionRemoteAuth)
import react_native from "react-native" /* 17 */;
import intl6 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import UserUtilsDefault from "UserUtils" /* 4722 */;
import Text_Text from "Text/Text" /* 4886 */;
import reactDefault from "react" /* 5308 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5968 */;
import typing from "typing" /* 15910 */;
import react_nativeDefault from "react-native" /* 15915 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let catchPromise, importDefault, navigation, str, tmp3;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function renderSteps(state, style, I, context) {
  let Button;
  let Button2;
  let Cbl5JK;
  let format;
  let intl;
  let intl3;
  let intl4;
  let intl5;
  let items;
  let items1;
  let obj12;
  let obj5;
  let obj6;
  let obj8;
  const step = state.step;
  if (typing.RemoteAuthStep.INITIALIZING !== step) {
    if (typing.RemoteAuthStep.PENDING_REMOTE_INIT !== step) {
      if (typing.RemoteAuthStep.PENDING_TICKET === step) {
        const user = state.user;
        const obj = { children: items };
        const obj2 = { style: style.avatar, user, size: native.AvatarSizes.LARGE, guildId: context };
        const Avatar = native.Avatar;
        items = [metroImportDefault(Avatar, obj2), , , ];
        const obj3 = { variant: "heading-lg/bold", children: intl.string(intl6.t.apGCUT) };
        const Text = Text_Text.Text;
        intl = intl6.intl;
        items[1] = metroImportDefault(Text, obj3);
        const obj4 = { style: style.statusText, variant: "text-md/medium", color: "text-muted", children: format(Cbl5JK, obj5) };
        const Text2 = Text_Text.Text;
        const intl2 = intl6.intl;
        format = intl2.format;
        obj5 = { username: obj6.getUserTag(user) };
        Cbl5JK = intl6.t.Cbl5JK;
        obj6 = UserUtilsDefault;
        items[2] = metroImportDefault(Text2, obj4);
        const obj7 = { style: style.buttonContainer, children: metroImportDefault(Button, obj8) };
        obj8 = { size: "lg", variant: "tertiary", text: intl3.string(intl6.t["ETE/oC"]), onPress: I };
        Button = components_Button_Button.Button;
        intl3 = intl6.intl;
        items[3] = metroImportDefault(View, obj7);
        return React4(metroImportAll, obj);
      } else {
        return metroImportDefault(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
      }
    }
  }
  const obj9 = { children: items1 };
  items1 = [metroImportDefault(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}), , ];
  const obj10 = { style: style.statusText, variant: "text-md/medium", color: "text-muted", children: intl4.string(intl6.t["7LkwqE"]) };
  const Text3 = Text_Text.Text;
  intl4 = intl6.intl;
  items1[1] = metroImportDefault(Text3, obj10);
  const obj11 = { style: style.buttonContainer, children: metroImportDefault(Button2, obj12) };
  obj12 = { size: "lg", variant: "tertiary", text: intl5.string(intl6.t["ETE/oC"]), onPress: I };
  Button2 = components_Button_Button.Button;
  intl5 = intl6.intl;
  items1[2] = metroImportDefault(View, obj11);
  return React4(metroImportAll, obj9);
}
const View = react_native.View;
({ AnalyticEvents: hasOwnProperty, LoginSuccessfulSources: metroRequire } = Constants);
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ statusContainer: { alignItems: "center", marginTop: 32 }, avatar: { marginBottom: 16 }, statusText: { textAlign: "center", marginTop: 16, marginBottom: 24, paddingHorizontal: 32 }, buttonContainer: { width: "100%", paddingHorizontal: 16, marginTop: 16 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let _null;
  let constants2;
  let first;
  let tmp11;
  let tmp = navigation;
  let obj = navigation(576);
  const cResult = obj.c(15);
  const tmp4 = closure_10();
  const obj2 = navigation(1490);
  navigation = obj2.useNavigation();
  const context = react.useContext(reactDefault);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(arg0) {
      let tmp = arg0;
      const obj = { source: constants2.QR_CODE, login_source: "companion_remote_auth", is_new_user: false, login_method: "quest_remote_auth", login_instance_id: tmp };
      const track = _null(dependencyMap[16]).track;
      const LOGIN_SUCCESSFUL = constants.LOGIN_SUCCESSFUL;
      _null(dependencyMap[16]);
      if (arg0 == null) {
        tmp = null;
      }
      track(LOGIN_SUCCESSFUL, obj);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmpResult = tmp(15911);
  const state = tmpResult.useAuthWebsocket(first, true).state;
  if (cResult[1] !== navigation) {
    class I {
      constructor() {
        navigation.goBack();
      }
    }
    cResult[1] = navigation;
    cResult[2] = I;
  } else {
    class I {
      constructor() {
        navigation.goBack();
      }
    }
  }
  if (state.step === tmp(15910).RemoteAuthStep.PENDING_REMOTE_INIT) {
    class I {
      constructor() {
        navigation.goBack();
      }
    }
  }
  importDefault = tmp9;
  if (cResult[3] !== null) {
    class T {
      constructor() {
        if (null != fingerprint) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[18]);
          tmp4 = globalThis;
          _HermesInternal = HermesInternal;
          str = "https://discord.com/ra/";
          sendAuthUrlResult = obj.sendAuthUrl("https://discord.com/ra/" + tmp);
          catchPromise = sendAuthUrlResult.catch(() => {
            const error = new Error("Failed to initialize authentication");
            throw error;
          });
        }
        return;
      }
    }
    const items = [null];
    cResult[3] = null;
    cResult[4] = T;
    cResult[5] = items;
    tmp11 = items;
  } else {
    class T {
      constructor() {
        if (null != fingerprint) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[18]);
          tmp4 = globalThis;
          _HermesInternal = HermesInternal;
          str = "https://discord.com/ra/";
          sendAuthUrlResult = obj.sendAuthUrl("https://discord.com/ra/" + tmp);
          catchPromise = sendAuthUrlResult.catch(() => {
            const error = new Error("Failed to initialize authentication");
            throw error;
          });
        }
        return;
      }
    }
    tmp11 = cResult[5];
  }
  const effect = react.useEffect(T, tmp11);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        if (null != fingerprint) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[18]);
          tmp4 = globalThis;
          _HermesInternal = HermesInternal;
          str = "https://discord.com/ra/";
          sendAuthUrlResult = obj.sendAuthUrl("https://discord.com/ra/" + tmp);
          catchPromise = sendAuthUrlResult.catch(() => {
            const error = new Error("Failed to initialize authentication");
            throw error;
          });
        }
        return;
      }
    }
    cResult[6] = obj5.string(tmp(1126).t["7fNJgA"]);
    const stringResult = obj5.string(tmp(1126).t["7fNJgA"]);
  } else {
    class T {
      constructor() {
        if (null != fingerprint) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[18]);
          tmp4 = globalThis;
          _HermesInternal = HermesInternal;
          str = "https://discord.com/ra/";
          sendAuthUrlResult = obj.sendAuthUrl("https://discord.com/ra/" + tmp);
          catchPromise = sendAuthUrlResult.catch(() => {
            const error = new Error("Failed to initialize authentication");
            throw error;
          });
        }
        return;
      }
    }
  }
  if (cResult[7] === context) {
    class T {
      constructor() {
        if (null != fingerprint) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[18]);
          tmp4 = globalThis;
          _HermesInternal = HermesInternal;
          str = "https://discord.com/ra/";
          sendAuthUrlResult = obj.sendAuthUrl("https://discord.com/ra/" + tmp);
          catchPromise = sendAuthUrlResult.catch(() => {
            const error = new Error("Failed to initialize authentication");
            throw error;
          });
        }
        return;
      }
    }
  }
  cResult[7] = context;
  cResult[8] = I;
  cResult[9] = state;
  cResult[10] = tmp4;
  cResult[11] = renderSteps(state, tmp4, I, context);
  renderSteps(state, tmp4, I, context);
}) : (() => {
  let constants2;
  let fingerprint;
  let intl;
  let obj5;
  let tmp = closure_10();
  const tmp2 = navigation;
  let obj = navigation(1490);
  navigation = obj.useNavigation();
  const context = react.useContext(fingerprint(5308));
  const callback = react.useCallback((arg0) => {
    let tmp = arg0;
    const obj = { source: constants2.QR_CODE, login_source: "companion_remote_auth", is_new_user: false, login_method: "quest_remote_auth", login_instance_id: tmp };
    const track = fingerprint(dependencyMap[16]).track;
    const LOGIN_SUCCESSFUL = constants.LOGIN_SUCCESSFUL;
    fingerprint(dependencyMap[16]);
    if (arg0 == null) {
      tmp = null;
    }
    track(LOGIN_SUCCESSFUL, obj);
  }, []);
  const obj3 = navigation(15911);
  const state = obj3.useAuthWebsocket(callback, true).state;
  const items = [navigation];
  const callback1 = react.useCallback(() => {
    navigation.goBack();
  }, items);
  const tmp5 = fingerprint;
  fingerprint = null;
  if (state.step === navigation(15910).RemoteAuthStep.PENDING_REMOTE_INIT) {
    fingerprint = state.fingerprint;
  }
  const items1 = [fingerprint];
  const effect = react.useEffect(() => {
    if (null != fingerprint) {
      const _HermesInternal = HermesInternal;
      const obj = react_nativeDefault;
      const sendAuthUrlResult = obj.sendAuthUrl("https://discord.com/ra/" + tmp);
      sendAuthUrlResult.catch(() => {
        const error = new Error("Failed to initialize authentication");
        throw error;
      });
    }
  }, items1);
  const obj4 = { headerText: intl.string(tmp2(1126).t["7fNJgA"]), children: closure_7(View, obj5) };
  const tmp5Result = tmp5(6460);
  intl = tmp2(1126).intl;
  obj5 = { style: tmp.statusContainer, children: renderSteps(state, tmp, callback1, context) };
  return closure_7(tmp5Result, obj4);
});
const result = size.fileFinishedImporting("modules/remote_auth/components/native/CompanionRemoteAuth.tsx");

export const CompanionRemoteAuth = tmp4;