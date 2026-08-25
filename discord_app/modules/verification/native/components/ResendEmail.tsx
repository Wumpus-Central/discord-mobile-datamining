// discord_app/modules/verification/native/components/ResendEmail.tsx
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../../stores/UserRequiredActionStore.tsx";
import closure_7 from "../../../../stores/UserStore.tsx";
import { VerificationModalScenes } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles({ container: { flex: 1, padding: 16, justifyContent: "center", alignItems: "center" }, title: { marginTop: 16, textAlign: "center" }, body: { marginTop: 8, lineHeight: 18, textAlign: "center" }, resend: { marginTop: 16, width: "100%" }, change: { marginTop: 8, width: "100%" } });
let result = require("set").fileFinishedImporting("modules/verification/native/components/ResendEmail.tsx");

export default function ResendEmail() {
  let tmp = callback3();
  let obj = navigation(1500);
  navigation = obj.useNavigation();
  obj1 = navigation(589);
  const items = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    verified(38)(null != currentUser, "ResendEmail: user cannot be undefined");
    return currentUser;
  });
  const verified = stateFromStores.verified;
  let obj2 = navigation(589);
  const items1 = [closure_6];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => action.getAction());
  let obj3 = verified(8616);
  const result = obj3.isEmailReverification(stateFromStores1);
  let tmp16Result = !result;
  [tmp10, dependencyMap] = callback(React.useState(false), 2);
  callback = React.useRef(verified);
  const items2 = [verified];
  const effect = React.useEffect(() => {
    let tmp = verified;
    if (verified) {
      tmp = false === ref.current;
    }
    if (tmp) {
      verified(closure_1_2[12]).close();
      const obj = verified(closure_1_2[12]);
    }
  }, items2);
  const effect1 = React.useEffect(() => {
    closure_3.current = verified;
  });
  const items3 = [navigation];
  obj = { style: tmp.container, children: null };
  callback = React.useCallback(() => {
    navigation.push(closure_1_8.ENTER_EMAIL);
  }, items3);
  const items4 = [callback2(navigation(6136).EnvelopeOpenSpotIllustration, { scale: 0.75 }), , , , ];
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  let intl = navigation(1236).intl;
  obj[4] = intl.string(navigation(1236).t.fUtddV);
  items4[1] = callback2(navigation(4376).Text, obj);
  obj1 = { style: tmp.body, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = navigation(1236).intl;
  if (tmp10) {
    obj2 = { email: null };
    obj2[0] = stateFromStores.email;
    let formatResult = intl2.format(tmp2(1236).t.JqLgQL, obj2);
  } else {
    formatResult = intl2.string(tmp2(1236).t.tSXg8O);
  }
  obj1[3] = formatResult;
  items4[2] = callback2(navigation(4376).Text, obj1);
  obj3 = { style: tmp.resend, children: null };
  const obj4 = { text: null, variant: "primary", onPress: null, grow: true };
  const intl3 = tmp2(1236).intl;
  obj4[0] = intl3.string(navigation(1236).t.WnX4J2);
  obj4[2] = function onPress() {
    dependencyMap(true);
    let obj = verified(closure_1_2[17]);
    obj.verifyResend();
    obj = { key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT", content: null };
    const intl = navigation(closure_1_2[15]).intl;
    obj[1] = intl.string(navigation(closure_1_2[15]).t["84yeoz"]);
    verified(closure_1_2[18]).open(obj);
  };
  obj3[1] = callback2(navigation(4815).Button, obj4);
  items4[3] = callback2(View, obj3);
  if (!result) {
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.change;
    const obj6 = { text: null, variant: "secondary", onPress: null, grow: true };
    const intl4 = tmp2(1236).intl;
    obj6[0] = intl4.string(tmp2(1236).t.Vm8akB);
    obj6[2] = callback;
    obj5[1] = tmp16(tmp2(4815).Button, obj6);
    tmp16Result = tmp16(tmp15, obj5);
  }
  items4[4] = tmp16Result;
  obj[1] = items4;
  return closure_10(View, obj);
};