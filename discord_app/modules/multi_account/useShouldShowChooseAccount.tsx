// === Module 18233: useShouldShowChooseAccount ===

// Module 18233 (useShouldShowChooseAccount)
import initialize from "initialize" /* 504 */;
import MultiAccountStore from "MultiAccountStore" /* 14194 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/multi_account/useShouldShowChooseAccount.tsx");

export default function useShouldShowChooseAccount() {
  items = [MultiAccountStore];
  return initialize.useStateFromStores(items, () => canUseMultiAccountMobile.getCanUseMultiAccountMobile() && canUseMultiAccountMobile.getHasLoggedInAccounts());
};