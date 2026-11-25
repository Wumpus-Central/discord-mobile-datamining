// === Module 17643: CompanionRemoteAuth ===

// Module 17643 (CompanionRemoteAuth)
import util from "util" /* 1112 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6016 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1071);
({ AnalyticEvents: hasOwnProperty, LoginSuccessfulSources: closure_6 } = Constants);
const jsxProd = fn(21);
({ jsx: metroImportDefault, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5012);
let closure_10 = createStyles.createStyles({ statusContainer: { alignItems: "center", marginTop: 32 }, avatar: { marginBottom: 16 }, statusText: { textAlign: "center", marginTop: 16, marginBottom: 24, paddingHorizontal: 32 }, buttonContainer: { width: "100%", paddingHorizontal: 16, marginTop: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/remote_auth/components/native/CompanionRemoteAuth.tsx");

export function CompanionRemoteAuth() {
  let tmp = closure_10();
  navigation = navigation(fingerprint[12]).useNavigation();
  const context = noop.useContext(callback1(fingerprint[13]));
  const callback = noop.useCallback((arg0) => {
    let tmp = arg0;
    const obj2 = { source: constants2.QR_CODE, login_source: "companion_remote_auth", is_new_user: false, login_method: "quest_remote_auth", login_instance_id: null };
    if (arg0 == null) {
      tmp = null;
    }
    obj2.login_instance_id = tmp;
    callback1(fingerprint[14]).track(constants.LOGIN_SUCCESSFUL, obj2);
  }, []);
  let obj = navigation(fingerprint[12]);
  state = navigation(fingerprint[15]).useAuthWebsocket(callback, true).state;
  items = [navigation];
  callback1 = noop.useCallback(() => {
    navigation.goBack();
  }, items);
  fingerprint = null;
  if (state.step === navigation(fingerprint[5]).RemoteAuthStep.PENDING_REMOTE_INIT) {
    fingerprint = state.fingerprint;
  }
  const items1 = [fingerprint, callback1];
  const effect = noop.useEffect(() => {
    if (null != fingerprint) {
      c0 = true;
      const _HermesInternal = HermesInternal;
      let obj = callback1(fingerprint[16]);
      callback1(fingerprint[16]).sendAuthUrl("https://discord.com/ra/" + tmp).catch(() => {
        if (c0) {
          callback1();
          const obj2 = { title: null, body: null };
          const intl = util.intl;
          obj2.title = intl.string(util.t.Cc4Mc9);
          const intl2 = util.intl;
          obj2.body = intl2.string(util.t.fEptJP);
          actions_AlertActionCreatorsDefault.show(obj2);
        }
      });
      return () => {
        c0 = false;
      };
    }
  }, items1);
  const obj4 = { headerText: null, children: null };
  const obj3 = navigation(fingerprint[15]);
  let intl = tmp2(tmp3[8]).intl;
  obj4.headerText = intl.string(navigation(fingerprint[8]).t["7fNJgA"]);
  const obj5 = { style: tmp.statusContainer, children: null };
  const step = state.step;
  if (navigation(fingerprint[5]).RemoteAuthStep.INITIALIZING !== step) {
    if (tmp2(tmp3[5]).RemoteAuthStep.PENDING_REMOTE_INIT !== step) {
      if (tmp2(tmp3[5]).RemoteAuthStep.PENDING_TICKET === step) {
        const user = state.user;
        const obj6 = { children: null };
        const obj7 = { style: tmp.avatar, user, size: tmp2(tmp3[10]).AvatarSizes.LARGE, guildId: context };
        const items2 = [closure_7(tmp2(tmp3[10]).Avatar, obj7), , , ];
        const obj8 = { variant: "heading-lg/semibold", children: null };
        let intl2 = tmp2(tmp3[8]).intl;
        obj8.children = intl2.string(tmp2(tmp3[8]).t.apGCUT);
        items2[1] = closure_7(tmp2(tmp3[7]).Text, obj8);
        const obj9 = { style: tmp.statusText, variant: "body-md/medium", color: "text-muted", children: null };
        const intl3 = tmp2(tmp3[8]).intl;
        const obj10 = { username: tmp5(tmp3[11]).getUserTag(user) };
        obj9.children = intl3.format(tmp2(tmp3[8]).t.Cbl5JK, obj10);
        items2[2] = closure_7(tmp2(tmp3[7]).Text, obj9);
        const obj11 = { style: tmp.buttonContainer, children: null };
        const obj12 = { size: "lg", variant: "tertiary", text: null, onPress: null };
        const intl4 = tmp2(tmp3[8]).intl;
        obj12.text = intl4.string(tmp2(tmp3[8]).t["ETE/oC"]);
        obj12.onPress = callback1;
        obj11.children = closure_7(tmp2(tmp3[9]).Button, obj12);
        items2[3] = closure_7(View, obj11);
        obj6.children = items2;
        let tmp11Result = closure_9(closure_8, obj6);
        const tmp5Result2 = tmp5(tmp3[11]);
      } else if (tmp2(tmp3[5]).RemoteAuthStep.PENDING_LOGIN === step) {
        tmp11Result = closure_7(tmp2(tmp3[6]).ActivityIndicator, {});
      }
    }
    obj5.children = tmp11Result;
    obj4.children = closure_7(View, obj5);
    return closure_7(tmp5Result, obj4);
  }
  const obj13 = { children: null };
  const items3 = [closure_7(navigation(fingerprint[6]).ActivityIndicator, {}), , ];
  const obj14 = { style: tmp.statusText, variant: "body-md/medium", color: "text-muted", children: null };
  const intl5 = tmp2(tmp3[8]).intl;
  obj14.children = intl5.string(navigation(fingerprint[8]).t["7LkwqE"]);
  items3[1] = closure_7(navigation(fingerprint[7]).Text, obj14);
  const obj15 = { style: tmp.buttonContainer, children: null };
  const obj16 = { size: "lg", variant: "tertiary", text: null, onPress: null };
  const intl6 = tmp2(tmp3[8]).intl;
  obj16.text = intl6.string(navigation(fingerprint[8]).t["ETE/oC"]);
  obj16.onPress = callback1;
  obj15.children = closure_7(navigation(fingerprint[9]).Button, obj16);
  items3[2] = closure_7(View, obj15);
  obj13.children = items3;
  tmp11Result = closure_9(closure_8, obj13);
  tmp5Result = callback1(fingerprint[18]);
}