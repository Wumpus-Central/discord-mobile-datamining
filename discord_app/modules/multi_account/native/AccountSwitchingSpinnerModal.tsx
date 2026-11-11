// === Module 20158: AccountSwitchingSpinnerModal ===

// Module 20158 (AccountSwitchingSpinnerModal)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 7354 */;
import useAppFrameDefault from "useAppFrame" /* 18589 */;
import noop from "module_19" /* 19 */;

require = fn;
class AccountSwitchingSpinnerModal {
  constructor() {
    obj = { style: closure_5(closure_1(closure_2[5])().hasFrame).switchingSpinnerContainer, accessible: true, accessibilityLabel: null, children: null };
    intl = closure_0(closure_2[6]).intl;
    obj.accessibilityLabel = intl.string(closure_0(closure_2[6]).t.n8qMH0);
    obj.children = jsx(closure_0(closure_2[7]).ActivityIndicator, {});
    return jsx(View, obj);
  }
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5243);
const hasOwnProperty = createStyles.createStyles((arg0) => {
  let prop;
  if (arg0) {
    prop = nativeDefault.colors.BACKGROUND_BASE_LOWER;
  }
  return { switchingSpinnerContainer: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: prop } };
});
AccountSwitchingSpinnerModal.modalConfig = { animation: fn(1092).ModalAnimation.FADE, closable: false };
const size = fn(2);
const result = size.fileFinishedImporting("modules/multi_account/native/AccountSwitchingSpinnerModal.tsx");

export default AccountSwitchingSpinnerModal;