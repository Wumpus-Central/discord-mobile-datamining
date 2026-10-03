// discord_app/modules/creator_monetization/guild_shop/useGuildShopPreviewVisible.tsx
import PermissionStore from "../../../stores/PermissionStore.tsx";

const require = globalThis.__r;

const require = fn;
const Constants = fn(1085);
({ Permissions: c3, GuildFeatures: closure_4 } = Constants);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/creator_monetization/guild_shop/useGuildShopPreviewVisible.tsx");

export const useGuildShopPreviewVisible = ReactCompilerGating.isReactCompilerEnabled()
  ? (features) => {
      _require = features;
      const cResult = require("c").c(7);
      const obj = require("c");
      const result = require("DismissibleContentUnsafeUtils").useIsDismissibleContentDismissed_UNSAFE(
        require("dismissible_content").DismissibleContent.SERVER_SHOP_PHANTOM_PREVIEW,
      );
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== features) {
        const fn = function o() {
          let canResult = null != closure_0;
          if (canResult) {
            canResult = PermissionStore.can(constants.ADMINISTRATOR, tmp);
          }
          return canResult;
        };
        cResult[1] = features;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const obj2 = require("DismissibleContentUnsafeUtils");
      let features1;
      const stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp7);
      if (features != null) {
        features1 = features.features;
      }
      if (cResult[3] !== features1) {
        let flag;
        if (features != null) {
          features = features.features;
          flag = features.has(constants2.PRODUCTS_AVAILABLE_FOR_PURCHASE);
        }
        if (flag == null) {
          flag = false;
        }
        let features2;
        if (features != null) {
          features2 = features.features;
        }
        cResult[3] = features2;
        cResult[4] = flag;
        let tmp10 = flag;
      } else {
        tmp10 = cResult[4];
      }
      const tmpResult = require("useStateFromStores");
      let id;
      if (features != null) {
        id = features.id;
      }
      let features3;
      const guildEligibleForGuildProducts = require("GuildProductsEligibility").useGuildEligibleForGuildProducts(id);
      if (features != null) {
        features3 = features.features;
      }
      if (cResult[5] !== features3) {
        const items1 = [, ,];
        ({
          CREATOR_MONETIZABLE: arr2[0],
          CREATOR_MONETIZABLE_PROVISIONAL: arr2[1],
          ROLE_SUBSCRIPTIONS_ENABLED: arr2[2],
        } = constants2);
        const someResult = items1.some((item) => {
          let hasItem;
          if (closure_0 != null) {
            features = tmp.features;
            hasItem = features.has(item);
          }
          return hasItem;
        });
        let features4;
        if (features != null) {
          features4 = features.features;
        }
        cResult[5] = features4;
        cResult[6] = someResult;
        let tmp16 = someResult;
      } else {
        tmp16 = cResult[6];
      }
      return null != features && stateFromStores && !tmp10 && tmp16 && guildEligibleForGuildProducts && !result;
    }
  : (features) => {
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
      const guildEligibleForGuildProducts = tmp(6761).useGuildEligibleForGuildProducts(id);
      let tmp9 = null != features;
      const tmpResult = tmp(6761);
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
