// === Module 15977: AccountDisabledOrDeletionScheduled ===

// Module 15977 (AccountDisabledOrDeletionScheduled)
import nativeDefault from "native" /* 576 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6593 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
const View = fn(17).View;
const LoginStates = fn(1074).LoginStates;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles((arg0) => {
  const space = nativeDefault.space;
  if (arg0) {
    let PX_16 = space.PX_8;
    let tmp4 = importDefault;
  } else {
    PX_16 = space.PX_16;
    tmp4 = importDefault;
  }
  const container = { display: "flex", height: "100%", flex: 1, paddingBottom: PX_16, paddingHorizontal: null, backgroundColor: null, justifyContent: null };
  let num = 0;
  if (!arg0) {
    num = tmp4(576).space.PX_16;
  }
  container.paddingHorizontal = num;
  let str = "transparent";
  if (!arg0) {
    str = tmp4(576).colors.BACKGROUND_BASE_LOW;
  }
  container.backgroundColor = str;
  let str2 = "center";
  if (arg0) {
    str2 = "space-between";
  }
  container.justifyContent = str2;
  return { container, image: { marginBottom: 32, alignSelf: "center" }, title: { textAlign: "center", marginBottom: 8 }, description: { lineHeight: 18, marginBottom: 24, textAlign: "center" } };
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/AccountDisabledOrDeletionScheduled.tsx");

export default function AccountDisabledOrDeletionScheduled(handleLogin) {
  handleLogin = handleLogin.handleLogin;
  const onReset = handleLogin.onReset;
  let navigation;
  let obj = handleLogin(navigation[7]);
  navigation = obj.useNavigation();
  let obj1 = handleLogin(navigation[8]);
  const items = [AuthenticationStore];
  const stateFromStores = obj1.useStateFromStores(items, () => loginStatus.getLoginStatus());
  const ref = stateFromStores.useRef(null);
  const items1 = [stateFromStores, navigation];
  const effect = stateFromStores.useEffect(() => {
    if (ref.current !== stateFromStores) {
      if (null != ref.current) {
        if (tmp4) {
          navigation.pop();
        }
        tmp4 = stateFromStores !== LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION && stateFromStores !== LoginStates.ACCOUNT_DISABLED;
      } else {
        ref.current = stateFromStores;
      }
    }
  }, items1);
  const items2 = [onReset];
  const items3 = [handleLogin];
  const callback = stateFromStores.useCallback(() => {
    if (null == onReset) {
      AuthenticationActionCreatorsDefault.loginReset();
    } else {
      tmp();
    }
  }, items2);
  const callback1 = stateFromStores.useCallback(() => {
    const credentials = AuthenticationStore.getCredentials();
    const password = credentials.password;
    let str = "";
    if (undefined !== password) {
      str = password;
    }
    handleLogin(credentials.login, str, true);
  }, items3);
  const tmp9 = closure_9(onReset(navigation[10])());
  const intl = handleLogin(navigation[11]).intl;
  const string = intl.string;
  const t = handleLogin(navigation[11]).t;
  if (stateFromStores === LoginStates.ACCOUNT_DISABLED) {
    let stringResult = string(t["j3rC+U"]);
  } else {
    stringResult = string(t.ZFWofo);
  }
  const intl2 = tmp(tmp2[11]).intl;
  const string2 = intl2.string;
  const t2 = tmp(tmp2[11]).t;
  if (stateFromStores === LoginStates.ACCOUNT_DISABLED) {
    let string2Result = string2(t2["6eNTWe"]);
  } else {
    string2Result = string2(t2["pCBti+"]);
  }
  obj = { contentStyle: { flexGrow: 1 }, children: null };
  obj = { style: tmp9.container, children: null };
  obj1 = { children: null };
  const items4 = [closure_7(handleLogin(navigation[13]).WumpTrash, { style: tmp9.image }), closure_7(handleLogin(navigation[14]).Text, { style: tmp9.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: stringResult }), closure_7(handleLogin(navigation[14]).Text, { style: tmp9.description, variant: "text-sm/medium", color: "text-default", children: string2Result })];
  obj1.children = items4;
  const items5 = [closure_8(ref, obj1), ];
  const obj5 = { children: null };
  const obj6 = { children: null };
  const obj7 = { variant: "primary", text: null, onPress: null };
  const intl3 = tmp(tmp2[11]).intl;
  obj7.text = intl3.string(handleLogin(navigation[11]).t.JhDw5o);
  obj7.onPress = callback;
  const items6 = [closure_7(handleLogin(navigation[16]).Button, obj7), ];
  const obj8 = { variant: "secondary", text: null, onPress: null };
  const intl4 = tmp(tmp2[11]).intl;
  obj8.text = intl4.string(handleLogin(navigation[11]).t.v51oiN);
  obj8.onPress = callback1;
  items6[1] = closure_7(handleLogin(navigation[16]).Button, obj8);
  obj6.children = items6;
  obj5.children = closure_8(handleLogin(navigation[15]).ButtonGroup, obj6);
  items5[1] = closure_7(ref, obj5);
  obj.children = items5;
  obj.children = closure_8(ref, obj);
  return closure_7(onReset(navigation[12]), obj);
};