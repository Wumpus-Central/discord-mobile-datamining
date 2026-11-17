// === Module 15361: useMaybeFetchTieredTenureBadgeData ===

// Module 15361 (useMaybeFetchTieredTenureBadgeData)
import useMountEffectDefault from "useMountEffect" /* 5893 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8494 */;
import UserStore from "UserStore" /* 1388 */;

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