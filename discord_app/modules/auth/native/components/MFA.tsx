// discord_app/modules/auth/native/components/MFA.tsx
import noop from "noop";
import fetchFingerprint from "fetchFingerprint";
import { jsx } from "jsxProd";
import { apply } from "../../../../../_runtime/00012_apply.js";

const require = arg1;
function statesAreEqual(arg0, arg1) {
  return apply.isEqual(arg0, arg1);
}
let closure_7 = { flex: 1, position: "relative" };
const result = require("jsxProd").fileFinishedImporting("modules/auth/native/components/MFA.tsx");

export default function ConnectedMFA() {
  let inContainer;
  let isMultiAccount;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ inContainer, isMultiAccount } = obj);
  let navigation;
  navigation = isMultiAccount(1480).useNavigation();
  if (inContainer) {
    inContainer = navigation(8472)();
  }
  let tmpResult = tmp(589);
  const items = [fetchFingerprint];
  const items1 = [isMultiAccount];
  const stateFromStores = tmpResult.useStateFromStores(items, () => ({ ticket: store.getMFATicket(), methods: store.getMFAMethods() }), [], statesAreEqual);
  const items2 = [navigation];
  const callback = React.useCallback((arg0) => {
    let data;
    let mfaType;
    let ticket;
    ({ mfaType, data, ticket } = arg0);
    let obj = navigation(outer1_2[7]);
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
      obj[0] = tmp4(712).space.PX_16;
      obj[1] = tmp4(712).space.PX_12;
      tmp13 = obj;
    }
    obj[7] = tmp13;
    return jsx(tmp(14989).MFAModal, obj);
  } else {
    tmpResult = tmp(501);
    let space = tmp4(712).space;
    const isAndroidResult = tmpResult.isAndroid();
    space = { paddingLeft: null, paddingTop: null };
    space[0] = tmpResult.isAndroid() ? space.PX_8 : space.PX_16;
    space[1] = tmp4(712).space.PX_12;
    const tmp11 = tmpResult.isAndroid() ? space.PX_8 : space.PX_16;
  }
};