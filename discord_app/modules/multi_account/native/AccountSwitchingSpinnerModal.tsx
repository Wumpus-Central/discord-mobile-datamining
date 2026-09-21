// === Module 17832: AccountSwitchingSpinnerModal ===

// Module 17832 (AccountSwitchingSpinnerModal)
import util from "util" /* 1115 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5794 */;
import noop from "module_19" /* 19 */;

require = fn;
class AccountSwitchingSpinnerModal {
  constructor() {
    obj = { style: closure_4().switchingSpinnerContainer, accessible: true, accessibilityLabel: null, children: null };
    intl = closure_0(closure_1[4]).intl;
    obj.accessibilityLabel = intl.string(closure_0(closure_1[4]).t.n8qMH0);
    obj.children = jsx(closure_0(closure_1[5]).ActivityIndicator, {});
    return jsx(View, obj);
  }
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
const React4 = createStyles.createStyles({ switchingSpinnerContainer: { flex: 1, alignItems: "center", justifyContent: "center" } });
AccountSwitchingSpinnerModal.modalConfig = { animation: fn(1094).ModalAnimation.FADE, closable: false };
const size = fn(2);
const result = size.fileFinishedImporting("modules/multi_account/native/AccountSwitchingSpinnerModal.tsx");

export default AccountSwitchingSpinnerModal;