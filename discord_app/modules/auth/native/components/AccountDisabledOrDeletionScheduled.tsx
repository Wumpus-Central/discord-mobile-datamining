// === Module 15936: AccountDisabledOrDeletionScheduled ===

// Module 15936 (AccountDisabledOrDeletionScheduled)
import nativeDefault from "native" /* 587 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6089 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
let View = fn(17).View;
const LoginStates = fn(1085).LoginStates;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4896);
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
    num = tmp4(587).space.PX_16;
  }
  container.paddingHorizontal = num;
  let str = "transparent";
  if (!arg0) {
    str = tmp4(587).colors.BACKGROUND_BASE_LOW;
  }
  container.backgroundColor = str;
  let str2 = "center";
  if (arg0) {
    str2 = "space-between";
  }
  container.justifyContent = str2;
  return { container, image: { marginBottom: 32, alignSelf: "center" }, title: { textAlign: "center", marginBottom: 8 }, description: { lineHeight: 18, marginBottom: 24, textAlign: "center" } };
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/AccountDisabledOrDeletionScheduled.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((handleLogin) => {
  const cResult = handleLogin(navigation[8]).c(40);
  handleLogin = handleLogin.handleLogin;
  const onReset = handleLogin.onReset;
  let obj = handleLogin(navigation[8]);
  navigation = handleLogin(navigation[9]).useNavigation();
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
  const obj2 = handleLogin(navigation[9]);
  const stateFromStores = handleLogin(navigation[10]).useStateFromStores(tmp5, tmp6);
  View = stateFromStores.useRef(null);
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === navigation) {
      let tmp9 = cResult[4];
      let tmp10 = cResult[5];
    }
    const effect = obj4.useEffect(tmp9, tmp10);
    if (cResult[6] !== onReset) {
      class D {
        constructor() {
          if (null == onReset) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            obj = closure_1(closure_2[11]);
            loginResetResult = obj.loginReset();
          } else {
            tmpResult = tmp();
          }
          return;
        }
      }
      cResult[6] = onReset;
      cResult[7] = D;
    } else {
      class D {
        constructor() {
          if (null == onReset) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            obj = closure_1(closure_2[11]);
            loginResetResult = obj.loginReset();
          } else {
            tmpResult = tmp();
          }
          return;
        }
      }
    }
    if (cResult[8] !== handleLogin) {
      class E {
        constructor() {
          credentials = closure_5.getCredentials();
          password = credentials.password;
          str = "";
          tmp2 = handleLogin;
          if (undefined !== password) {
            str = password;
          }
          tmp2Result = tmp2(credentials.login, str, true);
          return;
        }
      }
      cResult[8] = handleLogin;
      cResult[9] = E;
    } else {
      class E {
        constructor() {
          credentials = closure_5.getCredentials();
          password = credentials.password;
          str = "";
          tmp2 = handleLogin;
          if (undefined !== password) {
            str = password;
          }
          tmp2Result = tmp2(credentials.login, str, true);
          return;
        }
      }
    }
    const tmp16 = closure_9(onReset(tmp2[12])());
    if (cResult[10] !== (stateFromStores === LoginStates.ACCOUNT_DISABLED)) {
      class E {
        constructor() {
          credentials = closure_5.getCredentials();
          password = credentials.password;
          str = "";
          tmp2 = handleLogin;
          if (undefined !== password) {
            str = password;
          }
          tmp2Result = tmp2(credentials.login, str, true);
          return;
        }
      }
      if (tmp18) {
        class E {
          constructor() {
            credentials = closure_5.getCredentials();
            password = credentials.password;
            str = "";
            tmp2 = handleLogin;
            if (undefined !== password) {
              str = password;
            }
            tmp2Result = tmp2(credentials.login, str, true);
            return;
          }
        }
        const stringResult = obj5.string(tmp(tmp2[13]).t);
      } else {
        class E {
          constructor() {
            credentials = closure_5.getCredentials();
            password = credentials.password;
            str = "";
            tmp2 = handleLogin;
            if (undefined !== password) {
              str = password;
            }
            tmp2Result = tmp2(credentials.login, str, true);
            return;
          }
        }
      }
      cResult[10] = tmp18;
      cResult[11] = stringResult;
    } else {
      class E {
        constructor() {
          credentials = closure_5.getCredentials();
          password = credentials.password;
          str = "";
          tmp2 = handleLogin;
          if (undefined !== password) {
            str = password;
          }
          tmp2Result = tmp2(credentials.login, str, true);
          return;
        }
      }
      if (cResult[12] !== tmp18) {
        class E {
          constructor() {
            credentials = closure_5.getCredentials();
            password = credentials.password;
            str = "";
            tmp2 = handleLogin;
            if (undefined !== password) {
              str = password;
            }
            tmp2Result = tmp2(credentials.login, str, true);
            return;
          }
        }
        if (tmp18) {
          class E {
            constructor() {
              credentials = closure_5.getCredentials();
              password = credentials.password;
              str = "";
              tmp2 = handleLogin;
              if (undefined !== password) {
                str = password;
              }
              tmp2Result = tmp2(credentials.login, str, true);
              return;
            }
          }
          const stringResult1 = obj6.string(tmp(tmp2[13]).t);
        } else {
          class E {
            constructor() {
              credentials = closure_5.getCredentials();
              password = credentials.password;
              str = "";
              tmp2 = handleLogin;
              if (undefined !== password) {
                str = password;
              }
              tmp2Result = tmp2(credentials.login, str, true);
              return;
            }
          }
        }
        cResult[12] = tmp18;
        cResult[13] = stringResult1;
      } else {
        class E {
          constructor() {
            credentials = closure_5.getCredentials();
            password = credentials.password;
            str = "";
            tmp2 = handleLogin;
            if (undefined !== password) {
              str = password;
            }
            tmp2Result = tmp2(credentials.login, str, true);
            return;
          }
        }
        const _Symbol = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class E {
            constructor() {
              credentials = closure_5.getCredentials();
              password = credentials.password;
              str = "";
              tmp2 = handleLogin;
              if (undefined !== password) {
                str = password;
              }
              tmp2Result = tmp2(credentials.login, str, true);
              return;
            }
          }
          cResult[14] = tmp26;
        } else {
          class E {
            constructor() {
              credentials = closure_5.getCredentials();
              password = credentials.password;
              str = "";
              tmp2 = handleLogin;
              if (undefined !== password) {
                str = password;
              }
              tmp2Result = tmp2(credentials.login, str, true);
              return;
            }
          }
        }
        const container = tmp16.container;
        if (cResult[15] !== tmp16.image) {
          class E {
            constructor() {
              credentials = closure_5.getCredentials();
              password = credentials.password;
              str = "";
              tmp2 = handleLogin;
              if (undefined !== password) {
                str = password;
              }
              tmp2Result = tmp2(credentials.login, str, true);
              return;
            }
          }
          const obj3 = { style: tmp16.image };
          const tmp28 = closure_7(tmp(tmp2[14]).WumpTrash, obj3);
          cResult[15] = tmp16.image;
          cResult[16] = tmp28;
        } else {
          class E {
            constructor() {
              credentials = closure_5.getCredentials();
              password = credentials.password;
              str = "";
              tmp2 = handleLogin;
              if (undefined !== password) {
                str = password;
              }
              tmp2Result = tmp2(credentials.login, str, true);
              return;
            }
          }
        }
        if (cResult[17] === tmp16.title) {
          class E {
            constructor() {
              credentials = closure_5.getCredentials();
              password = credentials.password;
              str = "";
              tmp2 = handleLogin;
              if (undefined !== password) {
                str = password;
              }
              tmp2Result = tmp2(credentials.login, str, true);
              return;
            }
          }
          if (cResult[20] === tmp22) {
            class E {
              constructor() {
                credentials = closure_5.getCredentials();
                password = credentials.password;
                str = "";
                tmp2 = handleLogin;
                if (undefined !== password) {
                  str = password;
                }
                tmp2Result = tmp2(credentials.login, str, true);
                return;
              }
            }
            if (cResult[23] === tmp27) {
              class E {
                constructor() {
                  credentials = closure_5.getCredentials();
                  password = credentials.password;
                  str = "";
                  tmp2 = handleLogin;
                  if (undefined !== password) {
                    str = password;
                  }
                  tmp2Result = tmp2(credentials.login, str, true);
                  return;
                }
              }
            }
            const obj7 = { children: null };
            const items1 = [tmp27, tmp29, tmp32];
            obj7.children = items1;
            const tmp38 = closure_8(View, obj7);
            cResult[23] = tmp27;
            cResult[24] = tmp29;
            cResult[25] = tmp32;
            cResult[26] = tmp38;
          }
          const obj8 = { style: tmp16.description, variant: "text-sm/medium", color: "text-default", children: tmp22 };
          const tmp34 = closure_7(tmp(tmp2[15]).Text, obj8);
          cResult[20] = tmp22;
          cResult[21] = tmp16.description;
          cResult[22] = tmp34;
        }
        const obj9 = { style: tmp16.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp19 };
        const tmp31 = closure_7(tmp(tmp2[15]).Text, obj9);
        cResult[17] = tmp16.title;
        cResult[18] = tmp19;
        cResult[19] = tmp31;
      }
    }
  }
  class C {
    constructor() {
      tmp = closure_4;
      tmp2 = closure_3;
      if (closure_4.current !== closure_3) {
        tmp3 = null;
        if (null != tmp.current) {
          tmp4 = tmp2 !== LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION && tmp2 !== LoginStates.ACCOUNT_DISABLED;
          if (tmp4) {
            tmp5 = closure_2;
            arr = closure_2.pop();
          }
        } else {
          tmp.current = tmp2;
        }
      }
      return;
    }
  }
  const items2 = [stateFromStores, navigation];
  cResult[2] = stateFromStores;
  cResult[3] = navigation;
  cResult[4] = C;
  cResult[5] = items2;
  tmp10 = items2;
  tmp9 = C;
  obj4 = stateFromStores;
  const tmpResult = handleLogin(navigation[10]);
}) : ((handleLogin) => {
  handleLogin = handleLogin.handleLogin;
  const onReset = handleLogin.onReset;
  let navigation;
  navigation = handleLogin(navigation[9]).useNavigation();
  let obj = handleLogin(navigation[9]);
  const items = [AuthenticationStore];
  const stateFromStores = handleLogin(navigation[10]).useStateFromStores(items, () => loginStatus.getLoginStatus());
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
  const tmp9 = closure_9(onReset(navigation[12])());
  const intl = handleLogin(navigation[13]).intl;
  const string = intl.string;
  const t = handleLogin(navigation[13]).t;
  if (stateFromStores === LoginStates.ACCOUNT_DISABLED) {
    let stringResult = string(t["j3rC+U"]);
  } else {
    stringResult = string(t.ZFWofo);
  }
  const intl2 = tmp(tmp2[13]).intl;
  const string2 = intl2.string;
  const t2 = tmp(tmp2[13]).t;
  if (stateFromStores === LoginStates.ACCOUNT_DISABLED) {
    let string2Result = string2(t2["6eNTWe"]);
  } else {
    string2Result = string2(t2["pCBti+"]);
  }
  const obj3 = { contentStyle: { flexGrow: 1 }, children: null };
  const obj4 = { style: tmp9.container, children: null };
  const obj5 = { children: null };
  const obj2 = handleLogin(navigation[10]);
  const items4 = [closure_7(handleLogin(navigation[14]).WumpTrash, { style: tmp9.image }), closure_7(handleLogin(navigation[15]).Text, { style: tmp9.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: stringResult }), closure_7(handleLogin(navigation[15]).Text, { style: tmp9.description, variant: "text-sm/medium", color: "text-default", children: string2Result })];
  obj5.children = items4;
  const items5 = [closure_8(ref, obj5), ];
  const obj9 = { children: null };
  const obj10 = { children: null };
  const obj11 = { variant: "primary", text: null, onPress: null };
  const intl3 = tmp(tmp2[13]).intl;
  obj11.text = intl3.string(handleLogin(navigation[13]).t.JhDw5o);
  obj11.onPress = callback;
  const items6 = [closure_7(handleLogin(navigation[16]).Button, obj11), ];
  const obj12 = { variant: "secondary", text: null, onPress: null };
  const intl4 = tmp(tmp2[13]).intl;
  obj12.text = intl4.string(handleLogin(navigation[13]).t.v51oiN);
  obj12.onPress = callback1;
  items6[1] = closure_7(handleLogin(navigation[16]).Button, obj12);
  obj10.children = items6;
  obj9.children = closure_8(handleLogin(navigation[17]).ButtonGroup, obj10);
  items5[1] = closure_7(ref, obj9);
  obj4.children = items5;
  obj3.children = closure_8(ref, obj4);
  return closure_7(onReset(navigation[18]), obj3);
});