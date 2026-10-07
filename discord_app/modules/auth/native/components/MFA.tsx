// discord_app/modules/auth/native/components/MFA.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import AuthenticationActionCreatorsDefault from "../../../../actions/AuthenticationActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";

const require = fn;
function statesAreEqual(arg0, arg1) {
  return _modDef12.isEqual(arg0, arg1);
}
const jsx = fn(21).jsx;
let closure_7 = { flex: 1, position: "relative" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/MFA.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = isMultiAccount(576).c(22);
      if (cResult[0] !== arg0) {
        let obj2 = arg0;
        if (undefined === arg0) {
          obj2 = {};
        }
        cResult[0] = arg0;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      ({ inContainer, isMultiAccount } = tmp4);
      const obj = isMultiAccount(576);
      const navigation = isMultiAccount(1490).useNavigation();
      if (inContainer) {
        inContainer = navigation(6439)();
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthenticationStore];
        const fn = function u() {
          return { ticket: AuthenticationStore.getMFATicket(), methods: AuthenticationStore.getMFAMethods() };
        };
        const items1 = [];
        cResult[2] = items;
        cResult[3] = fn;
        cResult[4] = items1;
        let tmp9 = items1;
        let tmp8 = fn;
        let tmp7 = items;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
        tmp9 = cResult[4];
      }
      const tmpResult = isMultiAccount(1490);
      const stateFromStores = isMultiAccount(504).useStateFromStores(tmp7, tmp8, tmp9, statesAreEqual);
      if (cResult[5] !== isMultiAccount) {
        const fn2 = function y(arg0) {
          ({ mfaType, data, ticket } = arg0);
          return AuthenticationActionCreatorsDefault.loginMFAv2({ code: data, ticket, mfaType, isMultiAccount });
        };
        cResult[5] = isMultiAccount;
        cResult[6] = fn2;
        let tmp12 = fn2;
      } else {
        tmp12 = cResult[6];
      }
      if (cResult[7] !== navigation) {
        class S {
          constructor() {
            goBackResult = closure_1.goBack();
            return;
          }
        }
        cResult[7] = navigation;
        cResult[8] = S;
      } else {
        class S {
          constructor() {
            goBackResult = closure_1.goBack();
            return;
          }
        }
      }
      if (inContainer) {
        class S {
          constructor() {
            goBackResult = closure_1.goBack();
            return;
          }
        }
      }
      if (inContainer) {
        class S {
          constructor() {
            goBackResult = closure_1.goBack();
            return;
          }
        }
      }
      if (cResult[9] !== inContainer) {
        class S {
          constructor() {
            goBackResult = closure_1.goBack();
            return;
          }
        }
        if (!inContainer) {
          class S {
            constructor() {
              goBackResult = closure_1.goBack();
              return;
            }
          }
          cResult[9] = inContainer;
          cResult[10] = undefined;
        } else {
          class S {
            constructor() {
              goBackResult = closure_1.goBack();
              return;
            }
          }
          tmp6(587).space;
          const isAndroidResult = obj5.isAndroid();
          const space = { paddingLeft: null, paddingTop: null };
          space.paddingLeft = obj5.isAndroid() ? space.PX_8 : space.PX_16;
          space.paddingTop = tmp6(587).space.PX_12;
          const tmp18 = obj5.isAndroid() ? space.PX_8 : space.PX_16;
        }
      } else {
        class S {
          constructor() {
            goBackResult = closure_1.goBack();
            return;
          }
        }
      }
      if (cResult[11] !== inContainer) {
        class S {
          constructor() {
            goBackResult = closure_1.goBack();
            return;
          }
        }
        if (inContainer) {
          class S {
            constructor() {
              goBackResult = closure_1.goBack();
              return;
            }
          }
          tmp22[0] = tmp6(587).space.PX_16;
          tmp22[1] = tmp6(587).space.PX_12;
        }
        cResult[11] = inContainer;
        cResult[12] = tmp22;
      } else {
        class S {
          constructor() {
            goBackResult = closure_1.goBack();
            return;
          }
        }
      }
      if (cResult[13] === tmp12) {
        class S {
          constructor() {
            goBackResult = closure_1.goBack();
            return;
          }
        }
      }
      const tmpResult2 = isMultiAccount(504);
      cResult[13] = tmp12;
      cResult[14] = S;
      cResult[15] = inContainer;
      cResult[16] = stateFromStores;
      cResult[17] = tmp22;
      cResult[18] = undefined;
      cResult[19] = undefined;
      cResult[20] = tmp16;
      cResult[21] = jsx(isMultiAccount(15515).MFAModal, {
        mfaChallenge: stateFromStores,
        finish: tmp12,
        handleOnClose: S,
        ignoreKeyboard: inContainer,
        containerStyle: undefined,
        headerStatusBarHeight: undefined,
        headerLeftContainerStyle: tmp16,
        headerRightContainerStyle: tmp22,
      });
      const tmp23 = jsx(isMultiAccount(15515).MFAModal, {
        mfaChallenge: stateFromStores,
        finish: tmp12,
        handleOnClose: S,
        ignoreKeyboard: inContainer,
        containerStyle: undefined,
        headerStatusBarHeight: undefined,
        headerLeftContainerStyle: tmp16,
        headerRightContainerStyle: tmp22,
      });
    }
  : () => {
      let obj = arg0;
      if (arg0 === undefined) {
        obj = {};
      }
      ({ inContainer, isMultiAccount } = obj);
      const navigation = isMultiAccount(1490).useNavigation();
      if (inContainer) {
        inContainer = navigation(6439)();
      }
      const obj2 = isMultiAccount(1490);
      const items = [AuthenticationStore];
      const items1 = [isMultiAccount];
      const stateFromStores = isMultiAccount(504).useStateFromStores(
        items,
        () => ({ ticket: AuthenticationStore.getMFATicket(), methods: AuthenticationStore.getMFAMethods() }),
        [],
        statesAreEqual,
      );
      const items2 = [navigation];
      const callback = noop.useCallback((arg0) => {
        ({ mfaType, data, ticket } = arg0);
        return AuthenticationActionCreatorsDefault.loginMFAv2({ code: data, ticket, mfaType, isMultiAccount });
      }, items1);
      const callback1 = noop.useCallback(() => {
        navigation.goBack();
      }, items2);
      const obj3 = {
        mfaChallenge: stateFromStores,
        finish: callback,
        handleOnClose: callback1,
        ignoreKeyboard: inContainer,
        containerStyle: null,
        headerStatusBarHeight: null,
        headerLeftContainerStyle: null,
        headerRightContainerStyle: null,
      };
      let tmp9;
      if (inContainer) {
        tmp9 = closure_7;
      }
      obj3.containerStyle = tmp9;
      let num;
      if (inContainer) {
        num = 0;
      }
      obj3.headerStatusBarHeight = num;
      if (!inContainer) {
        obj3.headerLeftContainerStyle = undefined;
        let tmp13;
        if (inContainer) {
          const obj4 = { paddingRight: tmp4(587).space.PX_16, paddingTop: tmp4(587).space.PX_12, marginLeft: 0 };
          tmp13 = obj4;
        }
        obj3.headerRightContainerStyle = tmp13;
        return jsx(isMultiAccount(15515).MFAModal, obj3);
      } else {
        const tmpResult2 = isMultiAccount(1370);
        tmp4(587).space;
        const isAndroidResult = isMultiAccount(1370).isAndroid();
        const space = { paddingLeft: null, paddingTop: null };
        space.paddingLeft = isMultiAccount(1370).isAndroid() ? space.PX_8 : space.PX_16;
        space.paddingTop = tmp4(587).space.PX_12;
        const tmp11 = isMultiAccount(1370).isAndroid() ? space.PX_8 : space.PX_16;
      }
      const tmpResult = isMultiAccount(504);
    };
