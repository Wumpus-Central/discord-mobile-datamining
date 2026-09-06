// discord_app/modules/verification/native/components/ResendEmail.tsx
import util from "../../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import EmailVerificationModalActionCreatorsDefault from "../../../../actions/native/EmailVerificationModalActionCreators.tsx";
import AuthenticationActionCreatorsDefault from "../../../../actions/AuthenticationActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserRequiredActionStore from "../../../../stores/UserRequiredActionStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const VerificationModalScenes = fn(1074).VerificationModalScenes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4560);
let closure_11 = createStyles.createStyles({
  container: { flex: 1, padding: 16, justifyContent: "center", alignItems: "center" },
  title: { marginTop: 16, textAlign: "center" },
  body: { marginTop: 8, lineHeight: 18, textAlign: "center" },
  resend: { marginTop: 16, width: "100%" },
  change: { marginTop: 8, width: "100%" },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/verification/native/components/ResendEmail.tsx");

export default function ResendEmail() {
  let tmp = closure_11();
  let obj = navigation(1483);
  navigation = obj.useNavigation();
  let obj1 = navigation(504);
  const items = [UserStore];
  const stateFromStores = obj1.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    verified(38)(null != currentUser, "ResendEmail: user cannot be undefined");
    return currentUser;
  });
  const verified = stateFromStores.verified;
  let obj2 = navigation(504);
  const items1 = [UserRequiredActionStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => action.getAction());
  let obj3 = verified(6592);
  const result = obj3.isEmailReverification(stateFromStores1);
  let tmp16Result = !result;
  [tmp10, dependencyMap] = _slicedToArray(noop.useState(false), 2);
  _slicedToArray = noop.useRef(verified);
  const items2 = [verified];
  const effect = noop.useEffect(() => {
    let tmp = verified;
    if (verified) {
      tmp = false === ref.current;
    }
    if (tmp) {
      EmailVerificationModalActionCreatorsDefault.close();
    }
  }, items2);
  const effect1 = noop.useEffect(() => {
    closure_3.current = verified;
  });
  const items3 = [navigation];
  obj = { style: tmp.container, children: null };
  const callback = noop.useCallback(() => {
    navigation.push(VerificationModalScenes.ENTER_EMAIL);
  }, items3);
  const items4 = [closure_9(navigation(5692).EnvelopeOpenSpotIllustration, { scale: 0.75 }), , , ,];
  obj = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  let intl = navigation(1114).intl;
  obj.children = intl.string(navigation(1114).t.fUtddV);
  items4[1] = closure_9(navigation(4556).Text, obj);
  obj1 = { style: tmp.body, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = navigation(1114).intl;
  if (tmp10) {
    obj2 = { email: stateFromStores.email };
    let formatResult = intl2.format(tmp2(1114).t.JqLgQL, obj2);
  } else {
    formatResult = intl2.string(tmp2(1114).t.tSXg8O);
  }
  obj1.children = formatResult;
  items4[2] = closure_9(navigation(4556).Text, obj1);
  obj3 = { style: tmp.resend, children: null };
  const obj4 = { text: null, variant: "primary", onPress: null, grow: true };
  const intl3 = tmp2(1114).intl;
  obj4.text = intl3.string(navigation(1114).t.WnX4J2);
  obj4.onPress = function onPress() {
    dependencyMap(true);
    let obj = AuthenticationActionCreatorsDefault;
    obj.verifyResend();
    obj = { key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT", content: null };
    const intl = util.intl;
    obj.content = intl.string(util.t["84yeoz"]);
    ToastActionCreatorsDefault.open(obj);
  };
  obj3.children = closure_9(navigation(4975).Button, obj4);
  items4[3] = closure_9(View, obj3);
  if (!result) {
    const obj5 = { style: tmp.change, children: null };
    const obj6 = { text: null, variant: "secondary", onPress: null, grow: true };
    const intl4 = tmp2(1114).intl;
    obj6.text = intl4.string(tmp2(1114).t.Vm8akB);
    obj6.onPress = callback;
    obj5.children = closure_9(tmp2(4975).Button, obj6);
    tmp16Result = closure_9(View, obj5);
  }
  items4[4] = tmp16Result;
  obj.children = items4;
  return closure_10(View, obj);
}
