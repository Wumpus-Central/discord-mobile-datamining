// discord_app/modules/premium/powerups/GuildPowerupsActionCreators.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import sendRequest from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ME from "../../../Constants.tsx";
import dispatcherDefault from "../../../Dispatcher.tsx";
import BoostedGuildTiers from "constants/GuildPowerupsConstants.tsx";
import { _httpGetWithCountryCodeQuery } from "../../../utils/StoreUtils.tsx";

({ GUILD_POWERUP_APPLICATION_ID: c3, GuildPowerupType: c4 } = BoostedGuildTiers);
const Endpoints = ME.Endpoints;
let result = obj132.fileFinishedImporting("modules/premium/powerups/GuildPowerupsActionCreators.tsx");

export const guildPowerupsAckNotification = function guildPowerupsAckNotification(closure_0) {
  const obj = { type: "GUILD_POWERUPS_ACK_NOTIFICATION", guildId: closure_0 };
  obj.dispatch(obj);
};
export const guildPowerupsResetNotifications = function guildPowerupsResetNotifications() {
  dispatcherDefault.dispatch({ type: "GUILD_POWERUPS_RESET_NOTIFICATIONS" });
};
export const fetchPowerupCatalogForGuild = function fetchPowerupCatalogForGuild(guildId) {
  const _require = guildId;
  if (true === arg1) {
    const MOCK_LEVELS = require("mocks/GuildPowerupMocks.tsx").MOCK_LEVELS;
    const combined = MOCK_LEVELS.concat(require("mocks/GuildPowerupMocks.tsx").MOCK_PERKS);
    let obj = {};
    obj[constants.LEVEL] = require("mocks/GuildPowerupMocks.tsx").MOCK_LEVELS;
    obj[constants.PERK] = require("mocks/GuildPowerupMocks.tsx").MOCK_PERKS;
    let obj2 = dispatcherDefault;
    obj = { type: "GUILD_POWERUP_CATALOG_FETCH_SUCCESS", guildId: null, allPowerups: null, powerupCatalog: null };
    obj[1] = guildId;
    let sorted = combined.sort((skuId, skuId2) => {
      let num = -1;
      if (skuId.skuId >= skuId2.skuId) {
        num = 1;
      }
      return num;
    });
    obj[2] = sorted.reduce((acc, item, index) => {
      acc[item.skuId] = item;
      return acc;
    }, {});
    obj[3] = obj;
    obj2.dispatch(obj);
  } else {
    obj1 = { url: null, query: null, oldFormErrors: true, rejectWithError: null };
    obj1[0] = Endpoints.STORE_PUBLISHED_LISTINGS_SKUS;
    obj2 = { application_id: null, guild_id: null };
    obj2[0] = closure_3;
    obj2[1] = guildId;
    obj1[1] = obj2;
    const obj5 = _httpGetWithCountryCodeQuery;
    obj1[3] = require("../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx").rejectWithMigratedError();
    const result = obj5.httpGetWithCountryCodeQuery(obj1);
    return result.then((result) => {
      guildId = result;
      const body = result.body;
      const mapped = body.map((item, index) => closure_1_1(closure_1_2[6])(body.body, item));
      const found = mapped.filter(guildId(dependencyMap[7]).isNotNullish);
      const sorted = found.sort((skuId, skuId2) => {
        let num = -1;
        if (skuId.skuId >= skuId2.skuId) {
          num = 1;
        }
        return num;
      });
      const reduced = sorted.reduce((acc, item, index) => {
        const powerupCatalog = acc.powerupCatalog;
        acc.allPowerups[item.skuId] = item;
        if (null == powerupCatalog[item.type]) {
          powerupCatalog[item.type] = [];
        }
        let arr = powerupCatalog[item.type];
        if (arr != null) {
          const push = arr.push;
          if (push != null) {
            arr = push(item);
          }
        }
        return acc;
      }, { allPowerups: {}, powerupCatalog: {} });
      ({ allPowerups, powerupCatalog } = reduced);
      dispatcherDefault.dispatch({ type: "GUILD_POWERUP_CATALOG_FETCH_SUCCESS", guildId, allPowerups, powerupCatalog });
      return result.body;
    });
  }
};
export const fetchGuildBoostEntitlements = function fetchGuildBoostEntitlements(closure_0, arg1) {
  const _require = closure_0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  _httpGetWithCountryCodeQuery;
  let obj = { url: Endpoints.GUILD_POWERUPS(closure_0), query: { include_ends_at: flag }, oldFormErrors: true, rejectWithError: require("../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx").rejectWithMigratedError() };
  const result = obj.httpGetWithCountryCodeQuery(obj);
  return result.then((result) => {
    let obj = {};
    const body = result.body;
    const item = body.forEach((item, index) => {
      const sku = item.sku;
      let powerup;
      if (sku != null) {
        const tenant_metadata = sku.tenant_metadata;
        if (tenant_metadata != null) {
          const guild_monetization = tenant_metadata.guild_monetization;
          if (guild_monetization != null) {
            powerup = guild_monetization.powerup;
          }
        }
      }
      if (null == powerup) {
        let powerup_metadata;
        if (item != null) {
          const sku2 = item.sku;
          if (sku2 != null) {
            powerup_metadata = sku2.powerup_metadata;
          }
        }
        if (null == powerup_metadata) {
          const sku3 = item.sku;
          let game_server;
          if (sku3 != null) {
            const tenant_metadata2 = sku3.tenant_metadata;
            if (tenant_metadata2 != null) {
              const guild_monetization2 = tenant_metadata2.guild_monetization;
              if (guild_monetization2 != null) {
                game_server = guild_monetization2.game_server;
              }
            }
          }
          if (null != game_server) {
            obj[item.id] = item;
          }
        }
      }
      obj[item.sku_id] = item;
    });
    obj = { type: "GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS", guildId: obj, unlockedPowerups: obj, unlockedGameServers: obj };
    dispatcherDefault.dispatch(obj);
  });
};
export const enablePowerupForGuild = function enablePowerupForGuild(arg0, arg1) {
  const HTTP = sendRequest.HTTP;
  return HTTP.post({ url: Endpoints.GUILD_POWERUP_TOGGLE(arg0, arg1), rejectWithError: true });
};
export const disablePowerupForGuild = function disablePowerupForGuild(arg0, arg1) {
  const HTTP = sendRequest.HTTP;
  return HTTP.del({ url: Endpoints.GUILD_POWERUP_TOGGLE(arg0, arg1), rejectWithError: true });
};