import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
class AccountSwitchingSpinnerModal {
  constructor() {
    obj = { style: jsx().switchingSpinnerContainer, accessible: true, accessibilityLabel: null, children: null };
    intl = require("getSystemLocale").intl;
    obj[2] = intl.string(require("getSystemLocale").t.n8qMH0);
    obj[3] = jsx(require("ActivityIndicator").ActivityIndicator, {});
    return jsx(View, obj);
  }
}
let closure_4 = createCacheKey.createStyles({ switchingSpinnerContainer: { flex: 1, alignItems: "center", justifyContent: "center" } });
createCacheKey = { animation: require("keys").ModalAnimation.FADE, closable: false };
AccountSwitchingSpinnerModal.modalConfig = createCacheKey;
const result = require("jsxProd").fileFinishedImporting("modules/multi_account/native/AccountSwitchingSpinnerModal.tsx");

export default AccountSwitchingSpinnerModal;