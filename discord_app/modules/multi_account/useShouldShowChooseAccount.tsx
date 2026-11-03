// discord_app/modules/multi_account/useShouldShowChooseAccount.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import MultiAccountStore from "MultiAccountStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/multi_account/useShouldShowChooseAccount.tsx");

export default function useShouldShowChooseAccount() {
  items = [MultiAccountStore];
  return initialize.useStateFromStores(
    items,
    () => canUseMultiAccountMobile.getCanUseMultiAccountMobile() && canUseMultiAccountMobile.getHasLoggedInAccounts(),
  );
}
