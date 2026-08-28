// === Module 15509: CompanionRemoteAuth ===

// Module 15509 (CompanionRemoteAuth)
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
({ AnalyticEvents: c5, LoginSuccessfulSources: closure_6 } = ME);
({ jsx: error, Fragment: closure_8, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({ statusContainer: { alignItems: "center", marginTop: 32 }, avatar: { marginBottom: 16 }, statusText: { textAlign: "center", marginTop: 16, marginBottom: 24, paddingHorizontal: 32 }, buttonContainer: { width: "100%", paddingHorizontal: 16, marginTop: 16 } });
const result = require("set").fileFinishedImporting("modules/remote_auth/components/native/CompanionRemoteAuth.tsx");

export const CompanionRemoteAuth = function CompanionRemoteAuth() {
  let tmp = callback2();
  let obj = navigation(1500);
  navigation = obj.useNavigation();
  obj1 = React;
  const context = React.useContext(fingerprint(4716));
  const callback = React.useCallback((arg0) => {
    let tmp = arg0;
    let obj = fingerprint(table[14]);
    obj = { source: constants2.QR_CODE, login_source: "companion_remote_auth", is_new_user: false, login_method: "quest_remote_auth", login_instance_id: null };
    if (arg0 == null) {
      tmp = null;
    }
    obj[4] = tmp;
    obj.track(constants.LOGIN_SUCCESSFUL, obj);
  }, []);
  let obj2 = navigation(15511);
  const state = obj2.useAuthWebsocket(callback, true).state;
  const items = [navigation];
  const callback1 = React.useCallback(() => {
    navigation.goBack();
  }, items);
  fingerprint = null;
  if (state.step === navigation(15510).RemoteAuthStep.PENDING_REMOTE_INIT) {
    fingerprint = state.fingerprint;
  }
  const items1 = [fingerprint];
  const effect = obj1.useEffect(() => {
    if (null != fingerprint) {
      const _HermesInternal = HermesInternal;
      const obj = fingerprint(closure_1_2[16]);
      fingerprint(closure_1_2[16]).sendAuthUrl("https://discord.com/ra/" + tmp).catch(() => {
        error = new Error("Failed to initialize authentication");
        throw error;
      });
      const sendAuthUrlResult = fingerprint(closure_1_2[16]).sendAuthUrl("https://discord.com/ra/" + tmp);
    }
  }, items1);
  obj = { headerText: null, children: null };
  let tmp5Result = tmp5(7692);
  const intl = tmp2(1236).intl;
  obj[0] = intl.string(navigation(1236).t["7fNJgA"]);
  obj = { style: tmp.statusContainer, children: null };
  const step = state.step;
  if (navigation(15510).RemoteAuthStep.INITIALIZING !== step) {
    if (tmp2(15510).RemoteAuthStep.PENDING_REMOTE_INIT !== step) {
      if (tmp2(15510).RemoteAuthStep.PENDING_TICKET === step) {
        const user = state.user;
        obj1 = { children: null };
        obj2 = { style: null, user: null, size: null, guildId: null };
        obj2[0] = tmp.avatar;
        obj2[1] = user;
        obj2[2] = tmp2(1297).AvatarSizes.LARGE;
        obj2[3] = context;
        const items2 = [tmp11(tmp2(1297).Avatar, obj2), , , ];
        const obj3 = { variant: "heading-lg/bold", children: null };
        const intl2 = tmp2(1236).intl;
        obj3[1] = intl2.string(tmp2(1236).t.apGCUT);
        items2[1] = tmp11(tmp2(4442).Text, obj3);
        const obj4 = { style: null, variant: "text-md/medium", color: "text-muted", children: null };
        obj4[0] = tmp.statusText;
        const intl3 = tmp2(1236).intl;
        const obj5 = { username: null };
        tmp5Result = tmp5(4290);
        obj5[0] = tmp5Result.getUserTag(user);
        obj4[3] = intl3.format(tmp2(1236).t.Cbl5JK, obj5);
        items2[2] = tmp11(tmp2(4442).Text, obj4);
        const obj6 = { style: null, children: null };
        obj6[0] = tmp.buttonContainer;
        const obj7 = { size: "lg", variant: "tertiary", text: null, onPress: null };
        const intl4 = tmp2(1236).intl;
        obj7[2] = intl4.string(tmp2(1236).t["ETE/oC"]);
        obj7[3] = callback1;
        obj6[1] = tmp11(tmp2(4893).Button, obj7);
        items2[3] = tmp11(tmp13, obj6);
        obj1[0] = items2;
        let tmp11Result = callback(closure_8, obj1);
      } else if (tmp2(15510).RemoteAuthStep.PENDING_LOGIN === step) {
        tmp11Result = tmp11(tmp2(6013).ActivityIndicator, {});
      }
    }
    obj[1] = tmp11Result;
    obj[1] = tmp11(tmp13, obj);
    return tmp11(tmp5Result, obj);
  }
  const obj8 = { children: null };
  const items3 = [closure_7(navigation(6013).ActivityIndicator, {}), , ];
  const obj9 = { style: tmp.statusText, variant: "text-md/medium", color: "text-muted", children: null };
  const intl5 = tmp2(1236).intl;
  obj9[3] = intl5.string(navigation(1236).t["7LkwqE"]);
  items3[1] = closure_7(navigation(4442).Text, obj9);
  const obj10 = { style: tmp.buttonContainer, children: null };
  const obj11 = { size: "lg", variant: "tertiary", text: null, onPress: null };
  const intl6 = tmp2(1236).intl;
  obj11[2] = intl6.string(navigation(1236).t["ETE/oC"]);
  obj11[3] = callback1;
  obj10[1] = closure_7(navigation(4893).Button, obj11);
  items3[2] = closure_7(View, obj10);
  obj8[0] = items3;
  tmp11Result = callback(closure_8, obj8);
};