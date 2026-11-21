// === Module 17452: useShouldShowChooseAccount ===

// Module 17452 (useShouldShowChooseAccount)
import initialize from "initialize" /* 504 */;
import MultiAccountStore from "MultiAccountStore" /* 13285 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/multi_account/useShouldShowChooseAccount.tsx");

export default function useShouldShowChooseAccount() {
  items = [MultiAccountStore];
  return initialize.useStateFromStores(items, () => canUseMultiAccountMobile.getCanUseMultiAccountMobile() && canUseMultiAccountMobile.getHasLoggedInAccounts());
};