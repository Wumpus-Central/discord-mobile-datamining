// discord_app/modules/creator_monetization/guild_shop/useGuildShopPreviewVisible.tsx
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import ME from "ME";
import { defaultAreStatesEqual } from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import { DismissibleContent } from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import { UNSAFE_isDismissibleContentDismissed } from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";

let c3;
let c4;
const require = arg1;
({ Permissions: c3, GuildFeatures: c4 } = ME);
let result = require("UNSAFE_isDismissibleContentDismissed").fileFinishedImporting("modules/creator_monetization/guild_shop/useGuildShopPreviewVisible.tsx");

export const useGuildShopPreviewVisible = function useGuildShopPreviewVisible(features) {
  const _require = features;
  const result = _UNSAFE_isDismissibleContentDismissed.useIsDismissibleContentDismissed_UNSAFE(_DismissibleContent.DismissibleContent.SERVER_SHOP_PHANTOM_PREVIEW);
  const obj = _UNSAFE_isDismissibleContentDismissed;
  const tmp = _require;
  const items = [getUncachedChannelPermissions];
  let flag;
  const stateFromStores = _defaultAreStatesEqual.useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = outer1_2.can(outer1_3.ADMINISTRATOR, tmp);
    }
    return canResult;
  });
  if (features != null) {
    features = features.features;
    flag = features.has(constants.PRODUCTS_AVAILABLE_FOR_PURCHASE);
  }
  if (flag == null) {
    flag = false;
  }
  const obj2 = _defaultAreStatesEqual;
  let id;
  if (features != null) {
    id = features.id;
  }
  const items1 = [, , ];
  ({ CREATOR_MONETIZABLE: arr2[0], CREATOR_MONETIZABLE_PROVISIONAL: arr2[1], ROLE_SUBSCRIPTIONS_ENABLED: arr2[2] } = constants);
  const guildEligibleForGuildProducts = tmp(5772).useGuildEligibleForGuildProducts(id);
  let tmp9 = null != features;
  const tmpResult = tmp(5772);
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