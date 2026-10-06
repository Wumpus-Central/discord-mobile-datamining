// === Module 15935: components/MFA ===

// Module 15935 (components/MFA)
import _modDef12 from "module_12" /* 12 */;
import Fragment from "Fragment" /* 21 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6089 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation;

function statesAreEqual(arg0, arg1) {
  const obj = _modDef12;
  return obj.isEqual(arg0, arg1);
}
const jsx = Fragment.jsx;
let closure_7 = { flex: 1, position: "relative" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let inContainer;
  let isMultiAccount;
  let tmp12;
  let tmp4;
  let tmp7;
  let tmp8;
  let tmp9;
  let obj = isMultiAccount(576);
  const cResult = obj.c(22);
  if (cResult[0] !== arg0) {
    let obj2 = arg0;
    if (undefined === arg0) {
      obj2 = {};
    }
    cResult[0] = arg0;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  ({ inContainer, isMultiAccount } = tmp4);
  const tmpResult = isMultiAccount(1490);
  navigation = tmpResult.useNavigation();
  if (inContainer) {
    inContainer = navigation(6439)();
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    const fn = function u() {
      const obj = { ticket: AuthenticationStore.getMFATicket(), methods: AuthenticationStore.getMFAMethods() };
      return obj;
    };
    const items1 = [];
    cResult[2] = items;
    cResult[3] = fn;
    cResult[4] = items1;
    tmp9 = items1;
    tmp8 = fn;
    tmp7 = items;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  const tmpResult2 = isMultiAccount(504);
  const stateFromStores = tmpResult2.useStateFromStores(tmp7, tmp8, tmp9, statesAreEqual);
  if (cResult[5] !== isMultiAccount) {
    const fn2 = function y(arg0) {
      let data;
      let mfaType;
      let ticket;
      ({ mfaType, data, ticket } = arg0);
      const obj = AuthenticationActionCreatorsDefault;
      const obj2 = { code: data, ticket, mfaType, isMultiAccount };
      return obj.loginMFAv2(obj2);
    };
    cResult[5] = isMultiAccount;
    cResult[6] = fn2;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[6];
  }
  if (cResult[7] !== navigation) {
    class S {
      constructor() {
        navigation.goBack();
      }
    }
    cResult[7] = navigation;
    cResult[8] = S;
  } else {
    class S {
      constructor() {
        navigation.goBack();
      }
    }
  }
  if (inContainer) {
    class S {
      constructor() {
        navigation.goBack();
      }
    }
  }
  if (inContainer) {
    class S {
      constructor() {
        navigation.goBack();
      }
    }
  }
  if (cResult[9] !== inContainer) {
    class S {
      constructor() {
        navigation.goBack();
      }
    }
    if (inContainer) {
      class S {
        constructor() {
          navigation.goBack();
        }
      }
      const isAndroidResult = obj5.isAndroid();
      const space = tmp6(587).space;
      ({ paddingLeft: isAndroidResult ? space.PX_8 : space.PX_16, paddingTop: navigation(587).space.PX_12 });
    }
    cResult[9] = inContainer;
    cResult[10] = tmp17;
  } else {
    class S {
      constructor() {
        navigation.goBack();
      }
    }
  }
  if (cResult[11] !== inContainer) {
    class S {
      constructor() {
        navigation.goBack();
      }
    }
    if (inContainer) {
      class S {
        constructor() {
          navigation.goBack();
        }
      }
      tmp21[0] = navigation(587).space.PX_16;
      tmp21[1] = navigation(587).space.PX_12;
    }
    cResult[11] = inContainer;
    cResult[12] = tmp21;
  } else {
    class S {
      constructor() {
        navigation.goBack();
      }
    }
  }
  if (cResult[13] === tmp12) {
    class S {
      constructor() {
        navigation.goBack();
      }
    }
  }
  cResult[13] = tmp12;
  cResult[14] = S;
  cResult[15] = inContainer;
  cResult[16] = stateFromStores;
  cResult[17] = tmp21;
  cResult[18] = undefined;
  cResult[19] = undefined;
  cResult[20] = tmp16;
  cResult[21] = jsx(isMultiAccount(15515).MFAModal, { mfaChallenge: stateFromStores, finish: tmp12, handleOnClose: S, ignoreKeyboard: inContainer, containerStyle: undefined, headerStatusBarHeight: undefined, headerLeftContainerStyle: tmp16, headerRightContainerStyle: tmp21 });
  jsx(isMultiAccount(15515).MFAModal, { mfaChallenge: stateFromStores, finish: tmp12, handleOnClose: S, ignoreKeyboard: inContainer, containerStyle: undefined, headerStatusBarHeight: undefined, headerLeftContainerStyle: tmp16, headerRightContainerStyle: tmp21 });
}) : (() => {
  let inContainer;
  let isMultiAccount;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ inContainer, isMultiAccount } = obj);
  let obj2 = isMultiAccount(1490);
  navigation = obj2.useNavigation();
  if (inContainer) {
    inContainer = navigation(6439)();
  }
  const items = [AuthenticationStore];
  const items1 = [isMultiAccount];
  const tmpResult = isMultiAccount(504);
  const stateFromStores = tmpResult.useStateFromStores(items, () => {
    const obj = { ticket: AuthenticationStore.getMFATicket(), methods: AuthenticationStore.getMFAMethods() };
    return obj;
  }, [], statesAreEqual);
  const items2 = [navigation];
  const callback = react.useCallback((arg0) => {
    let data;
    let mfaType;
    let ticket;
    ({ mfaType, data, ticket } = arg0);
    const obj = AuthenticationActionCreatorsDefault;
    const obj2 = { code: data, ticket, mfaType, isMultiAccount };
    return obj.loginMFAv2(obj2);
  }, items1);
  const callback1 = react.useCallback(() => {
    navigation.goBack();
  }, items2);
  let tmp9;
  const MFAModal = isMultiAccount(15515).MFAModal;
  if (inContainer) {
    tmp9 = closure_7;
  }
  let num;
  if (inContainer) {
    num = 0;
  }
  let tmp10;
  if (inContainer) {
    const tmpResult2 = isMultiAccount(1370);
    const isAndroidResult = tmpResult2.isAndroid();
    const space = tmp4(587).space;
    tmp10 = { paddingLeft: isAndroidResult ? space.PX_8 : space.PX_16, paddingTop: navigation(587).space.PX_12 };
    const obj4 = { paddingLeft: isAndroidResult ? space.PX_8 : space.PX_16, paddingTop: navigation(587).space.PX_12 };
  }
  let tmp12;
  if (inContainer) {
    tmp12 = { paddingRight: navigation(587).space.PX_16, paddingTop: navigation(587).space.PX_12, marginLeft: 0 };
    const obj5 = { paddingRight: navigation(587).space.PX_16, paddingTop: navigation(587).space.PX_12, marginLeft: 0 };
  }
  return <MFAModal mfaChallenge={stateFromStores} finish={callback} handleOnClose={callback1} ignoreKeyboard={inContainer} containerStyle={tmp9} headerStatusBarHeight={num} headerLeftContainerStyle={tmp10} headerRightContainerStyle={tmp12} />;
});
const result = size.fileFinishedImporting("modules/auth/native/components/MFA.tsx");

export default tmp2;