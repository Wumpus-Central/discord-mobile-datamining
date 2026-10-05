// discord_app/modules/creator_monetization/guild_shop/useGuildShopPreviewVisible.tsx
import PermissionStore from "../../../stores/PermissionStore.tsx";
import Constants from "../../../Constants.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, features;

let c3;
let closure_4;
({ Permissions: c3, GuildFeatures: closure_4 } = Constants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (features) => {
      let first;
      let tmp11;
      let tmp19;
      let tmp7;
      _require = features;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(7);
      const obj2 = require("DismissibleContentUnsafeUtils");
      const result = obj2.useIsDismissibleContentDismissed_UNSAFE(
        require("dismissible_content").DismissibleContent.SERVER_SHOP_PHANTOM_PREVIEW,
      );
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== features) {
        const fn = function o() {
          const canResult = null != features && PermissionStore.can(constants.ADMINISTRATOR, tmp);
          return canResult;
        };
        cResult[1] = features;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      let features1;
      const tmpResult = tmp(573);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      const tmp9 = cResult[3];
      if (features != null) {
        features1 = features.features;
      }
      if (tmp9 !== features1) {
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
        tmp11 = flag;
      } else {
        tmp11 = cResult[4];
      }
      let id;
      const useGuildEligibleForGuildProducts = tmp(6761).useGuildEligibleForGuildProducts;
      tmp(6761);
      if (features != null) {
        id = features.id;
      }
      let features3;
      const guildEligibleForGuildProducts = useGuildEligibleForGuildProducts(id);
      const tmp17 = cResult[5];
      if (features != null) {
        features3 = features.features;
      }
      if (tmp17 !== features3) {
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
        tmp19 = someResult;
      } else {
        tmp19 = cResult[6];
      }
      return null != features && stateFromStores && !tmp11 && tmp19 && guildEligibleForGuildProducts && !result;
    }
  : (features) => {
      _require = features;
      const tmp = _require;
      const obj = require("DismissibleContentUnsafeUtils");
      const result = obj.useIsDismissibleContentDismissed_UNSAFE(
        require("dismissible_content").DismissibleContent.SERVER_SHOP_PHANTOM_PREVIEW,
      );
      const items = [PermissionStore];
      let flag;
      const obj2 = require("useStateFromStores");
      const stateFromStores = obj2.useStateFromStores(items, () => {
        const canResult = null != features && PermissionStore.can(constants.ADMINISTRATOR, tmp);
        return canResult;
      });
      if (features != null) {
        features = features.features;
        flag = features.has(constants2.PRODUCTS_AVAILABLE_FOR_PURCHASE);
      }
      if (flag == null) {
        flag = false;
      }
      let id;
      const useGuildEligibleForGuildProducts = tmp(6761).useGuildEligibleForGuildProducts;
      tmp(6761);
      if (features != null) {
        id = features.id;
      }
      const items1 = [, ,];
      ({
        CREATOR_MONETIZABLE: arr2[0],
        CREATOR_MONETIZABLE_PROVISIONAL: arr2[1],
        ROLE_SUBSCRIPTIONS_ENABLED: arr2[2],
      } = constants2);
      const guildEligibleForGuildProducts = useGuildEligibleForGuildProducts(id);
      let tmp10 = null != features;
      const someResult = items1.some((item) => {
        let hasItem;
        if (closure_0 != null) {
          features = tmp.features;
          hasItem = features.has(item);
        }
        return hasItem;
      });
      if (tmp10) {
        tmp10 = stateFromStores;
      }
      if (tmp10) {
        tmp10 = !flag;
      }
      if (tmp10) {
        tmp10 = someResult;
      }
      if (tmp10) {
        tmp10 = guildEligibleForGuildProducts;
      }
      if (tmp10) {
        tmp10 = !result;
      }
      return tmp10;
    };
let result = size.fileFinishedImporting("modules/creator_monetization/guild_shop/useGuildShopPreviewVisible.tsx");

export const useGuildShopPreviewVisible = tmp3;
