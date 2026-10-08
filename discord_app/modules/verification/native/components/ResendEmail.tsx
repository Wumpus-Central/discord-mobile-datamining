// === Module 6273: ResendEmail ===

// Module 6273 (ResendEmail)
import util from "util" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4766 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 5936 */;
import EmailVerificationModalActionCreatorsDefault from "EmailVerificationModalActionCreators" /* 6200 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2057 */;
import UserStore from "UserStore" /* 1389 */;

require = fn;
const View = fn(17).View;
const VerificationModalScenes = fn(1085).VerificationModalScenes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5090);
let closure_11 = createStyles.createStyles({ container: { flex: 1, padding: 16, justifyContent: "center", alignItems: "center" }, title: { marginTop: 16, textAlign: "center" }, body: { marginTop: 8, lineHeight: 18, textAlign: "center" }, resend: { marginTop: 16, width: "100%" }, change: { marginTop: 8, width: "100%" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/verification/native/components/ResendEmail.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ResendEmail() {
  const cResult = navigation(576).c(37);
  const tmp4 = closure_11();
  let obj = navigation(576);
  navigation = navigation(1502).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    class E {
      constructor() {
        currentUser = closure_1_7.getCurrentUser();
        tmp2 = verified(closure_2[11])(null != currentUser, "ResendEmail: user cannot be undefined");
        return currentUser;
      }
    }
    cResult[0] = items;
    cResult[1] = E;
    tmp6 = items;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const obj2 = navigation(1502);
  const stateFromStores = navigation(504).useStateFromStores(tmp6, E);
  ({ email, verified } = stateFromStores);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserRequiredActionStore];
    class E {
      constructor() {
        currentUser = closure_1_7.getCurrentUser();
        tmp2 = verified(closure_2[11])(null != currentUser, "ResendEmail: user cannot be undefined");
        return currentUser;
      }
    }
    cResult[2] = items1;
    cResult[3] = tmp13;
    let tmp11 = tmp13;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  const tmpResult = navigation(504);
  const stateFromStores1 = navigation(504).useStateFromStores(tmp10, tmp11);
  if (cResult[4] !== stateFromStores1) {
    const result = verified(6274).isEmailReverification(stateFromStores1);
    class E {
      constructor() {
        currentUser = closure_1_7.getCurrentUser();
        tmp2 = verified(closure_2[11])(null != currentUser, "ResendEmail: user cannot be undefined");
        return currentUser;
      }
    }
    cResult[4] = stateFromStores1;
    cResult[5] = result;
    const obj5 = verified(6274);
  }
  const tmpResult2 = navigation(504);
  [tmp19, dependencyMap] = ref(noop.useState(false), 2);
  const tmp18 = ref(noop.useState(false), 2);
  if (cResult[6] !== verified) {
    class A {
      constructor() {
        tmp = verified;
        if (verified) {
          tmp2 = closure_3;
          flag = false;
          tmp = false === closure_3.current;
        }
        if (tmp) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          obj = closure_1(closure_2[14]);
          closeResult = obj.close();
        }
        return;
      }
    }
    const items2 = [verified];
    class E {
      constructor() {
        currentUser = closure_1_7.getCurrentUser();
        tmp2 = verified(closure_2[11])(null != currentUser, "ResendEmail: user cannot be undefined");
        return currentUser;
      }
    }
    cResult[6] = verified;
    cResult[7] = A;
    cResult[8] = items2;
    let tmp21 = items2;
  } else {
    class A {
      constructor() {
        tmp = verified;
        if (verified) {
          tmp2 = closure_3;
          flag = false;
          tmp = false === closure_3.current;
        }
        if (tmp) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          obj = closure_1(closure_2[14]);
          closeResult = obj.close();
        }
        return;
      }
    }
    tmp21 = cResult[8];
  }
  const effect = noop.useEffect(A, tmp21);
  if (cResult[9] !== verified) {
    class O {
      constructor() {
        closure_3.current = verified;
        return;
      }
    }
    cResult[9] = verified;
    class E {
      constructor() {
        currentUser = closure_1_7.getCurrentUser();
        tmp2 = verified(closure_2[11])(null != currentUser, "ResendEmail: user cannot be undefined");
        return currentUser;
      }
    }
    cResult[10] = O;
  } else {
    class O {
      constructor() {
        closure_3.current = verified;
        return;
      }
    }
  }
  const effect1 = noop.useEffect(O);
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        closure_3.current = verified;
        return;
      }
    }
    cResult[11] = tmp25;
    class E {
      constructor() {
        currentUser = closure_1_7.getCurrentUser();
        tmp2 = verified(closure_2[11])(null != currentUser, "ResendEmail: user cannot be undefined");
        return currentUser;
      }
    }
  } else {
    class O {
      constructor() {
        closure_3.current = verified;
        return;
      }
    }
  }
  if (cResult[12] !== navigation) {
    class O {
      constructor() {
        closure_3.current = verified;
        return;
      }
    }
    cResult[12] = navigation;
    class E {
      constructor() {
        currentUser = closure_1_7.getCurrentUser();
        tmp2 = verified(closure_2[11])(null != currentUser, "ResendEmail: user cannot be undefined");
        return currentUser;
      }
    }
    cResult[13] = tmp27;
  } else {
    class O {
      constructor() {
        closure_3.current = verified;
        return;
      }
    }
  }
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        closure_3.current = verified;
        return;
      }
    }
    class E {
      constructor() {
        currentUser = closure_1_7.getCurrentUser();
        tmp2 = verified(closure_2[11])(null != currentUser, "ResendEmail: user cannot be undefined");
        return currentUser;
      }
    }
    const tmp29 = closure_9(tmp(6275).EnvelopeOpenSpotIllustration, { scale: 0.75 });
  } else {
    class O {
      constructor() {
        closure_3.current = verified;
        return;
      }
    }
  }
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        closure_3.current = verified;
        return;
      }
    }
    const stringResult = obj7.string(tmp(1126).t.fUtddV);
    class E {
      constructor() {
        currentUser = closure_1_7.getCurrentUser();
        tmp2 = verified(closure_2[11])(null != currentUser, "ResendEmail: user cannot be undefined");
        return currentUser;
      }
    }
    cResult[15] = stringResult;
  } else {
    class O {
      constructor() {
        closure_3.current = verified;
        return;
      }
    }
  }
  if (cResult[16] !== tmp4.title) {
    class O {
      constructor() {
        closure_3.current = verified;
        return;
      }
    }
    let obj3 = { style: tmp4.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    class E {
      constructor() {
        currentUser = closure_1_7.getCurrentUser();
        tmp2 = verified(closure_2[11])(null != currentUser, "ResendEmail: user cannot be undefined");
        return currentUser;
      }
    }
    const tmp33 = closure_9(tmp(5086).Text, obj3);
    cResult[16] = tmp4.title;
    cResult[17] = tmp33;
  } else {
    class O {
      constructor() {
        closure_3.current = verified;
        return;
      }
    }
  }
  if (cResult[18] === email) {
    class O {
      constructor() {
        closure_3.current = verified;
        return;
      }
    }
  }
  if (tmp19) {
    class O {
      constructor() {
        closure_3.current = verified;
        return;
      }
    }
    { email: null }.email = email;
    class E {
      constructor() {
        currentUser = closure_1_7.getCurrentUser();
        tmp2 = verified(closure_2[11])(null != currentUser, "ResendEmail: user cannot be undefined");
        return currentUser;
      }
    }
    const obj4 = { email: null };
  } else {
    class O {
      constructor() {
        closure_3.current = verified;
        return;
      }
    }
    const tmp34Result = tmp34(tmp(1126).t.tSXg8O);
  }
  cResult[18] = email;
  cResult[19] = tmp19;
  cResult[20] = tmp34Result;
  ref = noop.useRef(verified);
}) : (function ResendEmail() {
  let tmp = closure_11();
  navigation = navigation(1502).useNavigation();
  let obj = navigation(1502);
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
  const result = verified(6274).isEmailReverification(stateFromStores1);
  let tmp16Result = !result;
  const obj4 = verified(6274);
  [tmp10, dependencyMap] = ref(noop.useState(false), 2);
  const tmp9 = ref(noop.useState(false), 2);
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
  const items4 = [closure_9(navigation(6275).EnvelopeOpenSpotIllustration, { scale: 0.75 }), , , , ];
  const obj6 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  let intl = navigation(1126).intl;
  obj6.children = intl.string(navigation(1126).t.fUtddV);
  items4[1] = closure_9(navigation(5086).Text, obj6);
  const obj7 = { style: tmp.body, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = navigation(1126).intl;
  if (tmp10) {
    const obj8 = { email: stateFromStores.email };
    let formatResult = intl2.format(tmp2(1126).t.JqLgQL, obj8);
  } else {
    formatResult = intl2.string(tmp2(1126).t.tSXg8O);
  }
  obj7.children = formatResult;
  items4[2] = closure_9(navigation(5086).Text, obj7);
  const obj9 = { style: tmp.resend, children: null };
  const obj10 = { text: null, variant: "primary", onPress: null, grow: true };
  const intl3 = tmp2(1126).intl;
  obj10.text = intl3.string(navigation(1126).t.WnX4J2);
  obj10.onPress = function handleResendEmail() {
    dependencyMap(true);
    AuthenticationActionCreatorsDefault.verifyResend();
    const obj3 = { key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT", content: null };
    const intl = util.intl;
    obj3.content = intl.string(util.t["84yeoz"]);
    ToastActionCreatorsDefault.open(obj3);
  };
  obj9.children = closure_9(navigation(5375).Button, obj10);
  items4[3] = closure_9(View, obj9);
  if (!result) {
    const obj11 = { style: tmp.change, children: null };
    const obj12 = { text: null, variant: "secondary", onPress: null, grow: true };
    const intl4 = tmp2(1126).intl;
    obj12.text = intl4.string(tmp2(1126).t.Vm8akB);
    obj12.onPress = callback;
    obj11.children = closure_9(tmp2(5375).Button, obj12);
    tmp16Result = closure_9(View, obj11);
  }
  items4[4] = tmp16Result;
  obj5.children = items4;
  return closure_10(View, obj5);
});