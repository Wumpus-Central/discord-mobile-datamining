// discord_app/modules/auth/native/components/AccountDisabledOrDeletionScheduled.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import AuthenticationActionCreatorsDefault from "../../../../actions/AuthenticationActionCreators.tsx";
import react from "../../../../../_runtime/00019_react.js";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let handleLogin, navigation;

let metroImportAll;
let metroImportDefault;
let View = react_native.View;
const LoginStates = Constants.LoginStates;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles((arg0) => {
  let PX_16;
  let num;
  let str;
  let str2;
  let tmp4;
  const space = nativeDefault.space;
  if (arg0) {
    PX_16 = space.PX_8;
    tmp4 = importDefault;
  } else {
    PX_16 = space.PX_16;
    tmp4 = importDefault;
  }
  const container = {
    display: "flex",
    height: "100%",
    flex: 1,
    paddingBottom: PX_16,
    paddingHorizontal: num,
    backgroundColor: str,
    justifyContent: str2,
  };
  num = 0;
  if (!arg0) {
    num = tmp4(587).space.PX_16;
  }
  str = "transparent";
  if (!arg0) {
    str = tmp4(587).colors.BACKGROUND_BASE_LOW;
  }
  str2 = "center";
  if (arg0) {
    str2 = "space-between";
  }
  return {
    container,
    image: { marginBottom: 32, alignSelf: "center" },
    title: { textAlign: "center", marginBottom: 8 },
    description: { lineHeight: 18, marginBottom: 24, textAlign: "center" },
  };
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (handleLogin) => {
      let items1;
      let loginStatus;
      let ref;
      let tmp5;
      let tmp6;
      const tmp = handleLogin;
      let obj = handleLogin(navigation[8]);
      const cResult = obj.c(40);
      handleLogin = handleLogin.handleLogin;
      const onReset = handleLogin.onReset;
      const obj2 = handleLogin(navigation[9]);
      navigation = obj2.useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthenticationStore];
        const fn = function v() {
          return loginStatus.getLoginStatus();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = tmp(tmp2[10]);
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      View = stateFromStores.useRef(null);
      const obj4 = stateFromStores;
      if (cResult[2] === stateFromStores) {
        let tmp9;
        let tmp10;
        if (cResult[3] === navigation) {
          tmp9 = cResult[4];
          tmp10 = cResult[5];
        }
        const effect = obj4.useEffect(tmp9, tmp10);
        if (cResult[6] !== onReset) {
          class D {
            constructor() {
              if (null == onReset) {
                const obj = AuthenticationActionCreatorsDefault;
                obj.loginReset();
              } else {
                tmp();
              }
            }
          }
          cResult[6] = onReset;
          cResult[7] = D;
        } else {
          class D {
            constructor() {
              if (null == onReset) {
                const obj = AuthenticationActionCreatorsDefault;
                obj.loginReset();
              } else {
                tmp();
              }
            }
          }
        }
        if (cResult[8] !== handleLogin) {
          class E {
            constructor() {
              const credentials = AuthenticationStore.getCredentials();
              const password = credentials.password;
              let str = "";
              const login = credentials.login;
              if (undefined !== password) {
                str = password;
              }
              handleLogin(login, str, true);
            }
          }
          cResult[8] = handleLogin;
          cResult[9] = E;
        } else {
          class E {
            constructor() {
              const credentials = AuthenticationStore.getCredentials();
              const password = credentials.password;
              let str = "";
              const login = credentials.login;
              if (undefined !== password) {
                str = password;
              }
              handleLogin(login, str, true);
            }
          }
        }
        const tmp16 = closure_9(onReset(navigation[12])());
        if (cResult[10] !== (stateFromStores === LoginStates.ACCOUNT_DISABLED)) {
          class E {
            constructor() {
              const credentials = AuthenticationStore.getCredentials();
              const password = credentials.password;
              let str = "";
              const login = credentials.login;
              if (undefined !== password) {
                str = password;
              }
              handleLogin(login, str, true);
            }
          }
          const string = tmp20.string;
          const t = tmp(tmp2[13]).t;
          if (stateFromStores === LoginStates.ACCOUNT_DISABLED) {
            class E {
              constructor() {
                const credentials = AuthenticationStore.getCredentials();
                const password = credentials.password;
                let str = "";
                const login = credentials.login;
                if (undefined !== password) {
                  str = password;
                }
                handleLogin(login, str, true);
              }
            }
          } else {
            class E {
              constructor() {
                const credentials = AuthenticationStore.getCredentials();
                const password = credentials.password;
                let str = "";
                const login = credentials.login;
                if (undefined !== password) {
                  str = password;
                }
                handleLogin(login, str, true);
              }
            }
          }
          cResult[10] = stateFromStores === LoginStates.ACCOUNT_DISABLED;
          cResult[11] = tmp21;
        } else {
          class E {
            constructor() {
              const credentials = AuthenticationStore.getCredentials();
              const password = credentials.password;
              let str = "";
              const login = credentials.login;
              if (undefined !== password) {
                str = password;
              }
              handleLogin(login, str, true);
            }
          }
        }
        if (cResult[12] !== (stateFromStores === LoginStates.ACCOUNT_DISABLED)) {
          class E {
            constructor() {
              const credentials = AuthenticationStore.getCredentials();
              const password = credentials.password;
              let str = "";
              const login = credentials.login;
              if (undefined !== password) {
                str = password;
              }
              handleLogin(login, str, true);
            }
          }
          const string2 = tmp23.string;
          const t2 = tmp(tmp2[13]).t;
          if (stateFromStores === LoginStates.ACCOUNT_DISABLED) {
            class E {
              constructor() {
                const credentials = AuthenticationStore.getCredentials();
                const password = credentials.password;
                let str = "";
                const login = credentials.login;
                if (undefined !== password) {
                  str = password;
                }
                handleLogin(login, str, true);
              }
            }
          } else {
            class E {
              constructor() {
                const credentials = AuthenticationStore.getCredentials();
                const password = credentials.password;
                let str = "";
                const login = credentials.login;
                if (undefined !== password) {
                  str = password;
                }
                handleLogin(login, str, true);
              }
            }
          }
          cResult[12] = stateFromStores === LoginStates.ACCOUNT_DISABLED;
          cResult[13] = tmp24;
        } else {
          class E {
            constructor() {
              const credentials = AuthenticationStore.getCredentials();
              const password = credentials.password;
              let str = "";
              const login = credentials.login;
              if (undefined !== password) {
                str = password;
              }
              handleLogin(login, str, true);
            }
          }
        }
        const _Symbol = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class E {
            constructor() {
              const credentials = AuthenticationStore.getCredentials();
              const password = credentials.password;
              let str = "";
              const login = credentials.login;
              if (undefined !== password) {
                str = password;
              }
              handleLogin(login, str, true);
            }
          }
          cResult[14] = tmp26;
        } else {
          class E {
            constructor() {
              const credentials = AuthenticationStore.getCredentials();
              const password = credentials.password;
              let str = "";
              const login = credentials.login;
              if (undefined !== password) {
                str = password;
              }
              handleLogin(login, str, true);
            }
          }
        }
        const container = tmp16.container;
        if (cResult[15] !== tmp16.image) {
          class E {
            constructor() {
              const credentials = AuthenticationStore.getCredentials();
              const password = credentials.password;
              let str = "";
              const login = credentials.login;
              if (undefined !== password) {
                str = password;
              }
              handleLogin(login, str, true);
            }
          }
          const obj3 = { style: tmp16.image };
          cResult[15] = tmp16.image;
          cResult[16] = closure_7(tmp(navigation[14]).WumpTrash, obj3);
          const tmp28 = closure_7(tmp(navigation[14]).WumpTrash, obj3);
        } else {
          class E {
            constructor() {
              const credentials = AuthenticationStore.getCredentials();
              const password = credentials.password;
              let str = "";
              const login = credentials.login;
              if (undefined !== password) {
                str = password;
              }
              handleLogin(login, str, true);
            }
          }
        }
        if (cResult[17] === tmp16.title) {
          class E {
            constructor() {
              const credentials = AuthenticationStore.getCredentials();
              const password = credentials.password;
              let str = "";
              const login = credentials.login;
              if (undefined !== password) {
                str = password;
              }
              handleLogin(login, str, true);
            }
          }
          if (cResult[20] === tmp24) {
            class E {
              constructor() {
                const credentials = AuthenticationStore.getCredentials();
                const password = credentials.password;
                let str = "";
                const login = credentials.login;
                if (undefined !== password) {
                  str = password;
                }
                handleLogin(login, str, true);
              }
            }
            if (cResult[23] === tmp27) {
              class E {
                constructor() {
                  const credentials = AuthenticationStore.getCredentials();
                  const password = credentials.password;
                  let str = "";
                  const login = credentials.login;
                  if (undefined !== password) {
                    str = password;
                  }
                  handleLogin(login, str, true);
                }
              }
            }
            const obj5 = { children: items1 };
            items1 = [tmp27, tmp29, tmp32];
            cResult[23] = tmp27;
            cResult[24] = tmp29;
            cResult[25] = tmp32;
            cResult[26] = closure_8(View, obj5);
            const tmp38 = closure_8(View, obj5);
          }
          const obj6 = { style: tmp16.description, variant: "text-sm/medium", color: "text-default", children: tmp24 };
          cResult[20] = tmp24;
          cResult[21] = tmp16.description;
          cResult[22] = closure_7(tmp(navigation[15]).Text, obj6);
          const tmp34 = closure_7(tmp(navigation[15]).Text, obj6);
        }
        const obj7 = {
          style: tmp16.title,
          accessibilityRole: "header",
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          children: tmp21,
        };
        cResult[17] = tmp16.title;
        cResult[18] = tmp21;
        const tmp31 = closure_7(tmp(navigation[15]).Text, obj7);
        class C {
          constructor() {
            if (ref.current !== stateFromStores) {
              if (null != ref.current) {
                const tmp4 =
                  stateFromStores !== LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION &&
                  stateFromStores !== LoginStates.ACCOUNT_DISABLED;
                if (tmp4) {
                  navigation.pop();
                }
              } else {
                ref.current = stateFromStores;
              }
            }
          }
        }
        cResult[19] = tmp31;
      }
      class C {
        constructor() {
          if (ref.current !== stateFromStores) {
            if (null != ref.current) {
              const tmp4 =
                stateFromStores !== LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION &&
                stateFromStores !== LoginStates.ACCOUNT_DISABLED;
              if (tmp4) {
                navigation.pop();
              }
            } else {
              ref.current = stateFromStores;
            }
          }
        }
      }
      const items2 = [stateFromStores, navigation];
      cResult[2] = stateFromStores;
      cResult[3] = navigation;
      cResult[4] = C;
      cResult[5] = items2;
      tmp10 = items2;
      tmp9 = C;
    }
  : (handleLogin) => {
      let ButtonGroup;
      let intl3;
      let intl4;
      let items4;
      let items5;
      let items6;
      let loginStatus;
      let obj10;
      let obj4;
      let string2Result;
      let stringResult;
      handleLogin = handleLogin.handleLogin;
      const onReset = handleLogin.onReset;
      navigation = undefined;
      const tmp = handleLogin;
      let obj = handleLogin(navigation[9]);
      navigation = obj.useNavigation();
      const items = [AuthenticationStore];
      const obj2 = handleLogin(navigation[10]);
      const stateFromStores = obj2.useStateFromStores(items, () => loginStatus.getLoginStatus());
      const ref = stateFromStores.useRef(null);
      const items1 = [stateFromStores, navigation];
      const effect = stateFromStores.useEffect(() => {
        if (ref.current !== stateFromStores) {
          if (null != ref.current) {
            const tmp4 =
              stateFromStores !== LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION &&
              stateFromStores !== LoginStates.ACCOUNT_DISABLED;
            if (tmp4) {
              navigation.pop();
            }
          } else {
            ref.current = stateFromStores;
          }
        }
      }, items1);
      const items2 = [onReset];
      const items3 = [handleLogin];
      const callback = stateFromStores.useCallback(() => {
        if (null == onReset) {
          const obj = AuthenticationActionCreatorsDefault;
          obj.loginReset();
        } else {
          tmp();
        }
      }, items2);
      const callback1 = stateFromStores.useCallback(() => {
        const credentials = AuthenticationStore.getCredentials();
        const password = credentials.password;
        let str = "";
        const login = credentials.login;
        if (undefined !== password) {
          str = password;
        }
        handleLogin(login, str, true);
      }, items3);
      const tmp9 = closure_9(onReset(navigation[12])());
      const intl = handleLogin(navigation[13]).intl;
      const string = intl.string;
      const t = handleLogin(navigation[13]).t;
      const tmp8 = onReset;
      if (stateFromStores === LoginStates.ACCOUNT_DISABLED) {
        stringResult = string(t["j3rC+U"]);
      } else {
        stringResult = string(t.ZFWofo);
      }
      const intl2 = tmp(tmp2[13]).intl;
      const string2 = intl2.string;
      const t2 = tmp(tmp2[13]).t;
      if (stateFromStores === LoginStates.ACCOUNT_DISABLED) {
        string2Result = string2(t2["6eNTWe"]);
      } else {
        string2Result = string2(t2["pCBti+"]);
      }
      const obj3 = { contentStyle: { flexGrow: 1 }, children: closure_8(ref, obj4) };
      const obj5 = { children: items4 };
      items4 = [, ,];
      obj4 = { style: tmp9.container, children: items5 };
      const obj6 = { style: tmp9.image };
      const tmp8Result = tmp8(navigation[18]);
      items4[0] = closure_7(tmp(navigation[14]).WumpTrash, obj6);
      const obj7 = {
        style: tmp9.title,
        accessibilityRole: "header",
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: stringResult,
      };
      items4[1] = closure_7(tmp(navigation[15]).Text, obj7);
      const obj8 = {
        style: tmp9.description,
        variant: "text-sm/medium",
        color: "text-default",
        children: string2Result,
      };
      items4[2] = closure_7(tmp(navigation[15]).Text, obj8);
      items5 = [closure_8(ref, obj5)];
      const obj9 = { children: closure_8(ButtonGroup, obj10) };
      obj10 = { children: items6 };
      ButtonGroup = tmp(tmp2[17]).ButtonGroup;
      const obj11 = { variant: "primary", text: intl3.string(tmp(navigation[13]).t.JhDw5o), onPress: callback };
      const Button = tmp(tmp2[16]).Button;
      intl3 = tmp(tmp2[13]).intl;
      items6 = [closure_7(Button, obj11)];
      const obj12 = { variant: "secondary", text: intl4.string(tmp(navigation[13]).t.v51oiN), onPress: callback1 };
      const Button2 = tmp(tmp2[16]).Button;
      intl4 = tmp(tmp2[13]).intl;
      items6[1] = closure_7(Button2, obj12);
      items5[1] = closure_7(ref, obj9);
      return closure_7(tmp8Result, obj3);
    };
const result = size.fileFinishedImporting("modules/auth/native/components/AccountDisabledOrDeletionScheduled.tsx");

export default tmp3;
