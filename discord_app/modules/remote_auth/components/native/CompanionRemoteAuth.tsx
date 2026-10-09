// discord_app/modules/remote_auth/components/native/CompanionRemoteAuth.tsx
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import UserUtilsDefault from "../../../../utils/UserUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import GuildIDContextDefault from "../../../guild/GuildIDContext.tsx";
import ActivityIndicator_ActivityIndicator from "../../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import typing from "../../typing.tsx";
import NativeAuthenticationModuleDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/NativeAuthenticationModule.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function renderSteps(state, style, E, context) {
  const step = state.step;
  if (typing.RemoteAuthStep.INITIALIZING !== step) {
    if (typing.RemoteAuthStep.PENDING_REMOTE_INIT !== step) {
      if (typing.RemoteAuthStep.PENDING_TICKET === step) {
        const user = state.user;
        const obj = { children: null };
        const obj2 = { style: style.avatar, user, size: native.AvatarSizes.LARGE, guildId: context };
        const items = [React5(native.Avatar, obj2), , ,];
        const obj3 = { variant: "heading-lg/bold", children: null };
        const intl = util.intl;
        obj3.children = intl.string(util.t.apGCUT);
        items[1] = React5(Text_Text.Text, obj3);
        const obj4 = { style: style.statusText, variant: "text-md/medium", color: "text-muted", children: null };
        const intl2 = util.intl;
        const obj5 = { username: UserUtilsDefault.getUserTag(user) };
        obj4.children = intl2.format(util.t.Cbl5JK, obj5);
        items[2] = React5(Text_Text.Text, obj4);
        const obj7 = { style: style.buttonContainer, children: null };
        const obj8 = { size: "lg", variant: "tertiary", text: null, onPress: null };
        const intl3 = util.intl;
        obj8.text = intl3.string(util.t["ETE/oC"]);
        obj8.onPress = E;
        obj7.children = React5(components_Button_Button.Button, obj8);
        items[3] = React5(View, obj7);
        obj.children = items;
        return options(closure_1_8, obj);
      } else {
        return React5(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
      }
    }
  }
  const obj9 = { children: null };
  const items1 = [React5(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}), ,];
  const obj10 = { style: style.statusText, variant: "text-md/medium", color: "text-muted", children: null };
  const intl4 = util.intl;
  obj10.children = intl4.string(util.t["7LkwqE"]);
  items1[1] = React5(Text_Text.Text, obj10);
  const obj11 = { style: style.buttonContainer, children: null };
  const obj12 = { size: "lg", variant: "tertiary", text: null, onPress: null };
  const intl5 = util.intl;
  obj12.text = intl5.string(util.t["ETE/oC"]);
  obj12.onPress = E;
  obj11.children = React5(components_Button_Button.Button, obj12);
  items1[2] = React5(View, obj11);
  obj9.children = items1;
  return options(closure_1_8, obj9);
}
const View = fn(17).View;
const Constants = fn(1085);
({ AnalyticEvents: hasOwnProperty, LoginSuccessfulSources: metroRequire } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5091);
let closure_10 = createStyles.createStyles({
  statusContainer: { alignItems: "center", marginTop: 32 },
  avatar: { marginBottom: 16 },
  statusText: { textAlign: "center", marginTop: 16, marginBottom: 24, paddingHorizontal: 32 },
  buttonContainer: { width: "100%", paddingHorizontal: 16, marginTop: 16 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/remote_auth/components/native/CompanionRemoteAuth.tsx");

export const CompanionRemoteAuth = ReactCompilerGating.isReactCompilerEnabled()
  ? function CompanionRemoteAuth() {
      const cResult = navigation(576).c(15);
      const tmp4 = closure_10();
      let obj = navigation(576);
      navigation = navigation(1503).useNavigation();
      const context = noop.useContext(GuildIDContextDefault);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o(arg0) {
          let tmp = arg0;
          const obj2 = {
            source: constants2.QR_CODE,
            login_source: "companion_remote_auth",
            is_new_user: false,
            login_method: "quest_remote_auth",
            login_instance_id: null,
          };
          if (arg0 == null) {
            tmp = null;
          }
          obj2.login_instance_id = tmp;
          _null(dependencyMap[16]).track(constants.LOGIN_SUCCESSFUL, obj2);
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      let obj2 = navigation(1503);
      state = navigation(16326).useAuthWebsocket(first, true).state;
      if (cResult[1] !== navigation) {
        class E {
          constructor() {
            goBackResult = closure_0.goBack();
            return;
          }
        }
        cResult[1] = navigation;
        cResult[2] = E;
      } else {
        class E {
          constructor() {
            goBackResult = closure_0.goBack();
            return;
          }
        }
      }
      if (state.step === navigation(16325).RemoteAuthStep.PENDING_REMOTE_INIT) {
        class E {
          constructor() {
            goBackResult = closure_0.goBack();
            return;
          }
        }
      }
      importDefault = tmp9;
      if (cResult[3] !== null) {
        class E {
          constructor() {
            goBackResult = closure_0.goBack();
            return;
          }
        }
        const items = [tmp9];
        cResult[3] = tmp9;
        cResult[4] = tmp12;
        cResult[5] = items;
        let tmp11 = items;
      } else {
        class E {
          constructor() {
            goBackResult = closure_0.goBack();
            return;
          }
        }
        tmp11 = cResult[5];
      }
      const effect = noop.useEffect(tmp12, tmp11);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            goBackResult = closure_0.goBack();
            return;
          }
        }
        const stringResult = obj5.string(tmp(1126).t["7fNJgA"]);
        cResult[6] = stringResult;
      } else {
        class E {
          constructor() {
            goBackResult = closure_0.goBack();
            return;
          }
        }
      }
      if (cResult[7] === context) {
        class E {
          constructor() {
            goBackResult = closure_0.goBack();
            return;
          }
        }
      }
      const tmpResult = navigation(16326);
      cResult[7] = context;
      cResult[8] = E;
      cResult[9] = state;
      cResult[10] = tmp4;
      cResult[11] = renderSteps(state, tmp4, E, context);
      const tmp16 = renderSteps(state, tmp4, E, context);
    }
  : function CompanionRemoteAuth() {
      let tmp = closure_10();
      navigation = navigation(1503).useNavigation();
      const context = noop.useContext(fingerprint(5628));
      const callback = noop.useCallback((arg0) => {
        let tmp = arg0;
        const obj2 = {
          source: constants2.QR_CODE,
          login_source: "companion_remote_auth",
          is_new_user: false,
          login_method: "quest_remote_auth",
          login_instance_id: null,
        };
        if (arg0 == null) {
          tmp = null;
        }
        obj2.login_instance_id = tmp;
        fingerprint(dependencyMap[16]).track(constants.LOGIN_SUCCESSFUL, obj2);
      }, []);
      let obj = navigation(1503);
      const tmp5 = fingerprint;
      state = navigation(16326).useAuthWebsocket(callback, true).state;
      const items = [navigation];
      const callback1 = noop.useCallback(() => {
        navigation.goBack();
      }, items);
      fingerprint = null;
      if (state.step === navigation(16325).RemoteAuthStep.PENDING_REMOTE_INIT) {
        fingerprint = state.fingerprint;
      }
      const items1 = [fingerprint];
      const effect = noop.useEffect(() => {
        if (null != fingerprint) {
          const _HermesInternal = HermesInternal;
          NativeAuthenticationModuleDefault.sendAuthUrl("https://discord.com/ra/" + tmp).catch(() => {
            const error = new Error("Failed to initialize authentication");
            throw error;
          });
          const sendAuthUrlResult = NativeAuthenticationModuleDefault.sendAuthUrl("https://discord.com/ra/" + tmp);
        }
      }, items1);
      const obj4 = { headerText: null, children: null };
      const obj3 = navigation(16326);
      const intl = tmp2(1126).intl;
      obj4.headerText = intl.string(navigation(1126).t["7fNJgA"]);
      const tmp5Result = tmp5(6652);
      obj4.children = closure_7(View, {
        style: tmp.statusContainer,
        children: renderSteps(state, tmp, callback1, context),
      });
      return closure_7(tmp5Result, obj4);
    };
