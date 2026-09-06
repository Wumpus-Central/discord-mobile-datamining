// === Module 15987: CompanionRemoteAuth ===

// Module 15987 (CompanionRemoteAuth)
import NativeAuthenticationModuleDefault from "NativeAuthenticationModule" /* 15993 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticEvents: hasOwnProperty, LoginSuccessfulSources: metroRequire } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles({ statusContainer: { alignItems: "center", marginTop: 32 }, avatar: { marginBottom: 16 }, statusText: { textAlign: "center", marginTop: 16, marginBottom: 24, paddingHorizontal: 32 }, buttonContainer: { width: "100%", paddingHorizontal: 16, marginTop: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/remote_auth/components/native/CompanionRemoteAuth.tsx");

export const CompanionRemoteAuth = function CompanionRemoteAuth() {
  let tmp = closure_10();
  let obj = navigation(1483);
  navigation = obj.useNavigation();
  let obj1 = noop;
  const context = noop.useContext(fingerprint(4797));
  const callback = noop.useCallback((arg0) => {
    let tmp = arg0;
    fingerprint(dependencyMap[14]);
    const obj = { source: constants2.QR_CODE, login_source: "companion_remote_auth", is_new_user: false, login_method: "quest_remote_auth", login_instance_id: null };
    if (arg0 == null) {
      tmp = null;
    }
    obj.login_instance_id = tmp;
    obj.track(constants.LOGIN_SUCCESSFUL, obj);
  }, []);
  let obj2 = navigation(15989);
  const state = obj2.useAuthWebsocket(callback, true).state;
  const items = [navigation];
  const callback1 = noop.useCallback(() => {
    navigation.goBack();
  }, items);
  fingerprint = null;
  if (state.step === navigation(15988).RemoteAuthStep.PENDING_REMOTE_INIT) {
    fingerprint = state.fingerprint;
  }
  const items1 = [fingerprint];
  const effect = obj1.useEffect(() => {
    if (null != fingerprint) {
      const _HermesInternal = HermesInternal;
      NativeAuthenticationModuleDefault.sendAuthUrl("https://discord.com/ra/" + tmp).catch(() => {
        const error = new Error("Failed to initialize authentication");
        throw error;
      });
      const sendAuthUrlResult = NativeAuthenticationModuleDefault.sendAuthUrl("https://discord.com/ra/" + tmp);
    }
  }, items1);
  obj = { headerText: null, children: null };
  let tmp5Result = tmp5(6972);
  const intl = tmp2(1114).intl;
  obj.headerText = intl.string(navigation(1114).t["7fNJgA"]);
  obj = { style: tmp.statusContainer, children: null };
  const step = state.step;
  if (navigation(15988).RemoteAuthStep.INITIALIZING !== step) {
    if (tmp2(15988).RemoteAuthStep.PENDING_REMOTE_INIT !== step) {
      if (tmp2(15988).RemoteAuthStep.PENDING_TICKET === step) {
        const user = state.user;
        obj1 = { children: null };
        obj2 = { style: tmp.avatar, user, size: tmp2(1178).AvatarSizes.LARGE, guildId: context };
        const items2 = [closure_7(tmp2(1178).Avatar, obj2), , , ];
        const obj3 = { variant: "heading-lg/bold", children: null };
        const intl2 = tmp2(1114).intl;
        obj3.children = intl2.string(tmp2(1114).t.apGCUT);
        items2[1] = closure_7(tmp2(4556).Text, obj3);
        const obj4 = { style: tmp.statusText, variant: "text-md/medium", color: "text-muted", children: null };
        const intl3 = tmp2(1114).intl;
        const obj5 = { username: null };
        tmp5Result = tmp5(4404);
        obj5.username = tmp5Result.getUserTag(user);
        obj4.children = intl3.format(tmp2(1114).t.Cbl5JK, obj5);
        items2[2] = closure_7(tmp2(4556).Text, obj4);
        const obj6 = { style: tmp.buttonContainer, children: null };
        const obj7 = { size: "lg", variant: "tertiary", text: null, onPress: null };
        const intl4 = tmp2(1114).intl;
        obj7.text = intl4.string(tmp2(1114).t["ETE/oC"]);
        obj7.onPress = callback1;
        obj6.children = closure_7(tmp2(4975).Button, obj7);
        items2[3] = closure_7(View, obj6);
        obj1.children = items2;
        let tmp11Result = closure_9(closure_8, obj1);
      } else if (tmp2(15988).RemoteAuthStep.PENDING_LOGIN === step) {
        tmp11Result = closure_7(tmp2(5577).ActivityIndicator, {});
      }
    }
    obj.children = tmp11Result;
    obj.children = closure_7(View, obj);
    return closure_7(tmp5Result, obj);
  }
  const obj8 = { children: null };
  const items3 = [closure_7(navigation(5577).ActivityIndicator, {}), , ];
  const obj9 = { style: tmp.statusText, variant: "text-md/medium", color: "text-muted", children: null };
  const intl5 = tmp2(1114).intl;
  obj9.children = intl5.string(navigation(1114).t["7LkwqE"]);
  items3[1] = closure_7(navigation(4556).Text, obj9);
  const obj10 = { style: tmp.buttonContainer, children: null };
  const obj11 = { size: "lg", variant: "tertiary", text: null, onPress: null };
  const intl6 = tmp2(1114).intl;
  obj11.text = intl6.string(navigation(1114).t["ETE/oC"]);
  obj11.onPress = callback1;
  obj10.children = closure_7(navigation(4975).Button, obj11);
  items3[2] = closure_7(View, obj10);
  obj8.children = items3;
  tmp11Result = closure_9(closure_8, obj8);
};