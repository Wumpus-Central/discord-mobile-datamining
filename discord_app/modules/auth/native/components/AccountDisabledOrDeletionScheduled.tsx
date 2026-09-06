// discord_app/modules/auth/native/components/AccountDisabledOrDeletionScheduled.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../../stores/AuthenticationStore.tsx";
import { LoginStates } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles((arg0) => {
  const space = ThemesDefault.space;
  if (arg0) {
    let PX_16 = space.PX_8;
    let tmp4 = tmp;
  } else {
    PX_16 = space.PX_16;
    tmp4 = tmp;
  }
  const container = {
    display: "flex",
    height: "100%",
    flex: 1,
    paddingBottom: PX_16,
    paddingHorizontal: null,
    backgroundColor: null,
    justifyContent: null,
  };
  let num = 0;
  if (!arg0) {
    num = tmp4(576).space.PX_16;
  }
  container[4] = num;
  let str = "transparent";
  if (!arg0) {
    str = tmp4(576).colors.BACKGROUND_BASE_LOW;
  }
  container[5] = str;
  let str2 = "center";
  if (arg0) {
    str2 = "space-between";
  }
  container[6] = str2;
  return {
    container,
    image: { marginBottom: 32, alignSelf: "center" },
    title: { textAlign: "center", marginBottom: 8 },
    description: { lineHeight: 18, marginBottom: 24, textAlign: "center" },
  };
});
const result = require("set").fileFinishedImporting(
  "modules/auth/native/components/AccountDisabledOrDeletionScheduled.tsx",
);

export default function AccountDisabledOrDeletionScheduled(handleLogin) {
  handleLogin = handleLogin.handleLogin;
  const onReset = handleLogin.onReset;
  let navigation;
  let stateFromStores;
  closure_4 = undefined;
  let obj = handleLogin(navigation[7]);
  navigation = obj.useNavigation();
  obj1 = handleLogin(navigation[8]);
  const items = [closure_5];
  stateFromStores = obj1.useStateFromStores(items, () => loginStatus.getLoginStatus());
  closure_4 = stateFromStores.useRef(null);
  const items1 = [stateFromStores, navigation];
  const effect = stateFromStores.useEffect(() => {
    if (ref.current !== stateFromStores) {
      if (null != tmp.current) {
        if (tmp4) {
          navigation.pop();
        }
        tmp4 = tmp2 !== closure_1_6.ACCOUNT_SCHEDULED_FOR_DELETION && tmp2 !== closure_1_6.ACCOUNT_DISABLED;
      } else {
        tmp.current = tmp2;
      }
    }
  }, items1);
  const items2 = [onReset];
  const items3 = [handleLogin];
  const callback = stateFromStores.useCallback(() => {
    if (null == onReset) {
      onReset(navigation[9]).loginReset();
      const obj = onReset(navigation[9]);
    } else {
      tmp();
    }
  }, items2);
  const callback1 = stateFromStores.useCallback(() => {
    const credentials = closure_1_5.getCredentials();
    const password = credentials.password;
    let str = "";
    if (undefined !== password) {
      str = password;
    }
    handleLogin(credentials.login, str, true);
  }, items3);
  const tmp9 = callback3(onReset(navigation[10])());
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
  const items4 = [
    callback(handleLogin(navigation[13]).WumpTrash, { style: tmp9.image }),
    callback(handleLogin(navigation[14]).Text, {
      style: tmp9.title,
      accessibilityRole: "header",
      variant: "heading-xl/extrabold",
      color: "mobile-text-heading-primary",
      children: stringResult,
    }),
    callback(handleLogin(navigation[14]).Text, {
      style: tmp9.description,
      variant: "text-sm/medium",
      color: "text-default",
      children: string2Result,
    }),
  ];
  obj1[0] = items4;
  const items5 = [callback2(closure_4, obj1)];
  const obj5 = { children: null };
  const obj6 = { children: null };
  const obj7 = { variant: "primary", text: null, onPress: null };
  const intl3 = tmp(tmp2[11]).intl;
  obj7[1] = intl3.string(handleLogin(navigation[11]).t.JhDw5o);
  obj7[2] = callback;
  const items6 = [callback(handleLogin(navigation[16]).Button, obj7)];
  const obj8 = { variant: "secondary", text: null, onPress: null };
  const intl4 = tmp(tmp2[11]).intl;
  obj8[1] = intl4.string(handleLogin(navigation[11]).t.v51oiN);
  obj8[2] = callback1;
  items6[1] = callback(handleLogin(navigation[16]).Button, obj8);
  obj6[0] = items6;
  obj5[0] = callback2(handleLogin(navigation[15]).ButtonGroup, obj6);
  items5[1] = callback(closure_4, obj5);
  obj[1] = items5;
  obj[1] = callback2(closure_4, obj);
  return callback(onReset(navigation[12]), obj);
}
