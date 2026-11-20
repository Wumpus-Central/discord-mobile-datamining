// === Module 13940: useMaybeFetchTieredTenureBadgeData ===

// Module 13940 (useMaybeFetchTieredTenureBadgeData)
import useMountEffectDefault from "useMountEffect" /* 5355 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 7953 */;
import UserStore from "UserStore" /* 1386 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useMaybeFetchTieredTenureBadgeData.tsx");

export function useMaybeFetchTieredTenureBadgeData() {
  items = [UserStore];
  _require = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = require("initialize");
  importDefault = require("useCanUseTenureBadge").useCanUseTenureBadge();
  useMountEffectDefault(() => {
    let id;
    if (user != null) {
      id = user.id;
    }
    if (tmp3) {
      maybeFetchUserProfileDefault(user.id);
    }
    tmp3 = null != id && closure_1;
  });
}