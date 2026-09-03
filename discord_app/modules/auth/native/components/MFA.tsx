// === Module 15814: statesAreEqual ===

// Module 15814 (statesAreEqual)
import applyDefault from "apply" /* 12 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "fetchFingerprint" /* 1215 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
function statesAreEqual(arg0, arg1) {
  return applyDefault.isEqual(arg0, arg1);
}
let closure_7 = { flex: 1, position: "relative" };
const result = require("set").fileFinishedImporting("modules/auth/native/components/MFA.tsx");

export default function ConnectedMFA() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ inContainer, isMultiAccount } = obj);
  let navigation;
  navigation = isMultiAccount(1498).useNavigation();
  if (inContainer) {
    inContainer = navigation(7729)();
  }
  let tmpResult = tmp(586);
  const items = [closure_4];
  const items1 = [isMultiAccount];
  const stateFromStores = tmpResult.useStateFromStores(items, () => ({ ticket: store.getMFATicket(), methods: store.getMFAMethods() }), [], statesAreEqual);
  const items2 = [navigation];
  const callback = React.useCallback((arg0) => {
    ({ mfaType, data, ticket } = arg0);
    let obj = navigation(closure_1_2[7]);
    obj = { code: data, ticket, mfaType, isMultiAccount };
    return obj.loginMFAv2(obj);
  }, items1);
  const callback1 = React.useCallback(() => {
    navigation.goBack();
  }, items2);
  obj = { mfaChallenge: stateFromStores, finish: callback, handleOnClose: callback1, ignoreKeyboard: inContainer, containerStyle: null, headerStatusBarHeight: null, headerLeftContainerStyle: null, headerRightContainerStyle: null };
  let tmp9;
  if (inContainer) {
    tmp9 = closure_7;
  }
  obj[4] = tmp9;
  let num;
  if (inContainer) {
    num = 0;
  }
  obj[5] = num;
  if (!inContainer) {
    obj[6] = undefined;
    let tmp13;
    if (inContainer) {
      obj = { paddingRight: null, paddingTop: null, marginLeft: 0 };
      obj[0] = tmp4(709).space.PX_16;
      obj[1] = tmp4(709).space.PX_12;
      tmp13 = obj;
    }
    obj[7] = tmp13;
    return jsx(tmp(15508).MFAModal, obj);
  } else {
    tmpResult = tmp(1235);
    let space = tmp4(709).space;
    const isAndroidResult = tmpResult.isAndroid();
    space = { paddingLeft: null, paddingTop: null };
    space[0] = tmpResult.isAndroid() ? space.PX_8 : space.PX_16;
    space[1] = tmp4(709).space.PX_12;
    const tmp11 = tmpResult.isAndroid() ? space.PX_8 : space.PX_16;
  }
};