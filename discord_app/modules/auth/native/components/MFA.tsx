// === Module 15976: components/MFA ===

// Module 15976 (components/MFA)
import _modDef12 from "module_12" /* 12 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6593 */;
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
  const navigation = isMultiAccount(1483).useNavigation();
  if (inContainer) {
    inContainer = navigation(6944)();
  }
  let tmpResult = tmp(504);
  const items = [AuthenticationStore];
  const items1 = [isMultiAccount];
  const stateFromStores = tmpResult.useStateFromStores(items, () => ({ ticket: AuthenticationStore.getMFATicket(), methods: AuthenticationStore.getMFAMethods() }), [], statesAreEqual);
  const items2 = [navigation];
  const callback = noop.useCallback((arg0) => {
    ({ mfaType, data, ticket } = arg0);
    const obj = { code: data, ticket, mfaType, isMultiAccount };
    return obj.loginMFAv2(obj);
  }, items1);
  const callback1 = noop.useCallback(() => {
    navigation.goBack();
  }, items2);
  obj = { mfaChallenge: stateFromStores, finish: callback, handleOnClose: callback1, ignoreKeyboard: inContainer, containerStyle: null, headerStatusBarHeight: null, headerLeftContainerStyle: null, headerRightContainerStyle: null };
  let tmp9;
  if (inContainer) {
    tmp9 = closure_7;
  }
  obj.containerStyle = tmp9;
  let num;
  if (inContainer) {
    num = 0;
  }
  obj.headerStatusBarHeight = num;
  if (!inContainer) {
    obj.headerLeftContainerStyle = undefined;
    let tmp13;
    if (inContainer) {
      obj = { paddingRight: tmp4(576).space.PX_16, paddingTop: tmp4(576).space.PX_12, marginLeft: 0 };
      tmp13 = obj;
    }
    obj.headerRightContainerStyle = tmp13;
    return jsx(tmp(15666).MFAModal, obj);
  } else {
    tmpResult = tmp(1116);
    tmp4(576).space;
    const isAndroidResult = tmpResult.isAndroid();
    const space = { paddingLeft: null, paddingTop: null };
    space.paddingLeft = tmpResult.isAndroid() ? space.PX_8 : space.PX_16;
    space.paddingTop = tmp4(576).space.PX_12;
    const tmp11 = tmpResult.isAndroid() ? space.PX_8 : space.PX_16;
  }
};