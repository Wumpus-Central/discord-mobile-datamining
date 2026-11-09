// === Module 18327: useShouldShowChooseAccount ===

// Module 18327 (useShouldShowChooseAccount)
import initialize from "initialize" /* 504 */;
import MultiAccountStore from "MultiAccountStore" /* 14211 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/multi_account/useShouldShowChooseAccount.tsx");

export default function useShouldShowChooseAccount() {
  items = [MultiAccountStore];
  return initialize.useStateFromStores(items, () => canUseMultiAccountMobile.getCanUseMultiAccountMobile() && canUseMultiAccountMobile.getHasLoggedInAccounts());
};