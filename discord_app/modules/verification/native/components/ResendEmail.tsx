// === Module 6701: ResendEmail ===

// Module 6701 (ResendEmail)
import util from "util" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4338 */;
import EmailVerificationModalActionCreatorsDefault from "EmailVerificationModalActionCreators" /* 5709 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6703 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 1952 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const View = fn(17).View;
const VerificationModalScenes = fn(1074).VerificationModalScenes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4640);
let closure_11 = createStyles.createStyles({ container: { flex: 1, padding: 16, justifyContent: "center", alignItems: "center" }, title: { marginTop: 16, textAlign: "center" }, body: { marginTop: 8, lineHeight: 18, textAlign: "center" }, resend: { marginTop: 16, width: "100%" }, change: { marginTop: 8, width: "100%" } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/verification/native/components/ResendEmail.tsx");

export default function ResendEmail() {
  let tmp = closure_11();
  navigation = navigation(1484).useNavigation();
  let obj = navigation(1484);
  const items = [UserStore];
  const stateFromStores = navigation(504).useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    verified(38)(null != currentUser, "ResendEmail: user cannot be undefined");
    return currentUser;
  });
  const verified = stateFromStores.verified;
  const obj2 = navigation(504);
  const items1 = [UserRequiredActionStore];
  const stateFromStores1 = navigation(504).useStateFromStores(items1, () => action.getAction());
  let obj3 = navigation(504);
  const result = verified(6702).isEmailReverification(stateFromStores1);
  let tmp16Result = !result;
  const obj4 = verified(6702);
  [tmp10, dependencyMap] = noop.useState(false);
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
  const obj5 = { style: tmp.container, children: null };
  const callback = noop.useCallback(() => {
    navigation.push(VerificationModalScenes.ENTER_EMAIL);
  }, items3);
  const items4 = [closure_9(navigation(5780).EnvelopeOpenSpotIllustration, { scale: 0.75 }), , , , ];
  const obj6 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  let intl = navigation(1115).intl;
  obj6.children = intl.string(navigation(1115).t.fUtddV);
  items4[1] = closure_9(navigation(4636).Text, obj6);
  const obj7 = { style: tmp.body, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = navigation(1115).intl;
  if (tmp10) {
    const obj8 = { email: stateFromStores.email };
    let formatResult = intl2.format(tmp2(1115).t.JqLgQL, obj8);
  } else {
    formatResult = intl2.string(tmp2(1115).t.tSXg8O);
  }
  obj7.children = formatResult;
  items4[2] = closure_9(navigation(4636).Text, obj7);
  const obj9 = { style: tmp.resend, children: null };
  const obj10 = { text: null, variant: "primary", onPress: null, grow: true };
  const intl3 = tmp2(1115).intl;
  obj10.text = intl3.string(navigation(1115).t.WnX4J2);
  obj10.onPress = function onPress() {
    dependencyMap(true);
    AuthenticationActionCreatorsDefault.verifyResend();
    const obj3 = { key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT", content: null };
    const intl = util.intl;
    obj3.content = intl.string(util.t["84yeoz"]);
    ToastActionCreatorsDefault.open(obj3);
  };
  obj9.children = closure_9(navigation(5062).Button, obj10);
  items4[3] = closure_9(View, obj9);
  if (!result) {
    const obj11 = { style: tmp.change, children: null };
    const obj12 = { text: null, variant: "secondary", onPress: null, grow: true };
    const intl4 = tmp2(1115).intl;
    obj12.text = intl4.string(tmp2(1115).t.Vm8akB);
    obj12.onPress = callback;
    obj11.children = closure_9(tmp2(5062).Button, obj12);
    tmp16Result = closure_9(View, obj11);
  }
  items4[4] = tmp16Result;
  obj5.children = items4;
  return closure_10(View, obj5);
};