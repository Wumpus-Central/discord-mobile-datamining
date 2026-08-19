// discord_app/modules/multi_account/native/AccountSwitchingSpinnerModal.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../intl/index.native.tsx";
import ActivityIndicator from "../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

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