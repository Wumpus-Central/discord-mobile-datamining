// === Module 16086: components/MFA ===

// Module 16086 (components/MFA)
import _modDef12 from "module_12" /* 12 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6698 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
function statesAreEqual(arg0, arg1) {
  return _modDef12.isEqual(arg0, arg1);
}
const jsx = fn(21).jsx;
let closure_7 = { flex: 1, position: "relative" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/MFA.tsx");

export default function ConnectedMFA() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ inContainer, isMultiAccount } = obj);
  const navigation = isMultiAccount(1484).useNavigation();
  if (inContainer) {
    inContainer = navigation(7049)();
  }
  const obj2 = isMultiAccount(1484);
  const items = [AuthenticationStore];
  const items1 = [isMultiAccount];
  const stateFromStores = isMultiAccount(504).useStateFromStores(items, () => ({ ticket: AuthenticationStore.getMFATicket(), methods: AuthenticationStore.getMFAMethods() }), [], statesAreEqual);
  const items2 = [navigation];
  const callback = noop.useCallback((arg0) => {
    ({ mfaType, data, ticket } = arg0);
    return AuthenticationActionCreatorsDefault.loginMFAv2({ code: data, ticket, mfaType, isMultiAccount });
  }, items1);
  const callback1 = noop.useCallback(() => {
    navigation.goBack();
  }, items2);
  const obj3 = { mfaChallenge: stateFromStores, finish: callback, handleOnClose: callback1, ignoreKeyboard: inContainer, containerStyle: null, headerStatusBarHeight: null, headerLeftContainerStyle: null, headerRightContainerStyle: null };
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
      const obj4 = { paddingRight: tmp4(576).space.PX_16, paddingTop: tmp4(576).space.PX_12, marginLeft: 0 };
      tmp13 = obj4;
    }
    obj3.headerRightContainerStyle = tmp13;
    return jsx(isMultiAccount(15768).MFAModal, obj3);
  } else {
    const tmpResult2 = isMultiAccount(1365);
    tmp4(576).space;
    const isAndroidResult = isMultiAccount(1365).isAndroid();
    const space = { paddingLeft: null, paddingTop: null };
    space.paddingLeft = isMultiAccount(1365).isAndroid() ? space.PX_8 : space.PX_16;
    space.paddingTop = tmp4(576).space.PX_12;
    const tmp11 = isMultiAccount(1365).isAndroid() ? space.PX_8 : space.PX_16;
  }
  const tmpResult = isMultiAccount(504);
};