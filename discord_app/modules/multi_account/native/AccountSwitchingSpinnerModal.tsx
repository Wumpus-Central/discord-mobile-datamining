// === Module 16639: AccountSwitchingSpinnerModal ===

// Module 16639 (AccountSwitchingSpinnerModal)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ActivityIndicator from "ActivityIndicator" /* 5446 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
class AccountSwitchingSpinnerModal {
  constructor() {
    obj = { style: closure_4().switchingSpinnerContainer, accessible: true, accessibilityLabel: null, children: null };
    intl = require("getSystemLocale").intl;
    obj[2] = intl.string(require("getSystemLocale").t.n8qMH0);
    obj[3] = jsx(require("ActivityIndicator").ActivityIndicator, {});
    return jsx(View, obj);
  }
}
noopAll;
let closure_4 = createCacheKey.createStyles({ switchingSpinnerContainer: { flex: 1, alignItems: "center", justifyContent: "center" } });
createCacheKey = { animation: require("keys").ModalAnimation.FADE, closable: false };
AccountSwitchingSpinnerModal.modalConfig = createCacheKey;
const result = require("obj132").fileFinishedImporting("modules/multi_account/native/AccountSwitchingSpinnerModal.tsx");

export default AccountSwitchingSpinnerModal;