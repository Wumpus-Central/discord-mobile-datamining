// discord_app/modules/creator_monetization/guild_shop/useGuildShopPreviewVisible.tsx
import PermissionStore from "../../../stores/PermissionStore.tsx";

const require = fn;
const Constants = fn(1074);
({ Permissions: c3, GuildFeatures: closure_4 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/creator_monetization/guild_shop/useGuildShopPreviewVisible.tsx");

export const useGuildShopPreviewVisible = function useGuildShopPreviewVisible(features) {
  _require = features;
  const result = require("DismissibleContentUnsafeUtils").useIsDismissibleContentDismissed_UNSAFE(
    require("dismissible_content").DismissibleContent.SERVER_SHOP_PHANTOM_PREVIEW,
  );
  const obj = require("DismissibleContentUnsafeUtils");
  const tmp = _require;
  const items = [PermissionStore];
  let flag;
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = PermissionStore.can(constants.ADMINISTRATOR, tmp);
    }
    return canResult;
  });
  if (features != null) {
    features = features.features;
    flag = features.has(constants2.PRODUCTS_AVAILABLE_FOR_PURCHASE);
  }
  if (flag == null) {
    flag = false;
  }
  const obj2 = require("useStateFromStores");
  let id;
  if (features != null) {
    id = features.id;
  }
  const items1 = [, ,];
  ({
    CREATOR_MONETIZABLE: arr2[0],
    CREATOR_MONETIZABLE_PROVISIONAL: arr2[1],
    ROLE_SUBSCRIPTIONS_ENABLED: arr2[2],
  } = constants2);
  const guildEligibleForGuildProducts = tmp(7258).useGuildEligibleForGuildProducts(id);
  let tmp9 = null != features;
  const tmpResult = tmp(7258);
  if (tmp9) {
    tmp9 = stateFromStores;
  }
  if (tmp9) {
    tmp9 = !flag;
  }
  if (tmp9) {
    tmp9 = someResult;
  }
  if (tmp9) {
    tmp9 = guildEligibleForGuildProducts;
  }
  if (tmp9) {
    tmp9 = !result;
  }
  return tmp9;
};
