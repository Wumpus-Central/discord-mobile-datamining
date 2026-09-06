// === Module 12488: GuildPowerupsActionCreators ===

// Module 12488 (GuildPowerupsActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import storeListingToGuildPowerupDefault from "storeListingToGuildPowerup" /* 12490 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4450 */;
import size from "module_2" /* 2 */;

({ GUILD_POWERUP_APPLICATION_ID: c3, GuildPowerupType: closure_4 } = GuildPowerupsConstants);
const Endpoints = Constants.Endpoints;
let result = size.fileFinishedImporting("modules/premium/powerups/GuildPowerupsActionCreators.tsx");

export const guildPowerupsAckNotification = function guildPowerupsAckNotification(guildId) {
  const obj = { type: "GUILD_POWERUPS_ACK_NOTIFICATION", guildId };
  obj.dispatch(obj);
};
export const guildPowerupsResetNotifications = function guildPowerupsResetNotifications() {
  DispatcherDefault.dispatch({ type: "GUILD_POWERUPS_RESET_NOTIFICATIONS" });
};
export const fetchPowerupCatalogForGuild = function fetchPowerupCatalogForGuild(guildId, arg1) {
  _require = guildId;
  if (true === arg1) {
    const MOCK_LEVELS = require("GuildPowerupMocks").MOCK_LEVELS;
    const combined = MOCK_LEVELS.concat(require("GuildPowerupMocks").MOCK_PERKS);
    let obj = {};
    obj[constants.LEVEL] = require("GuildPowerupMocks").MOCK_LEVELS;
    obj[constants.PERK] = require("GuildPowerupMocks").MOCK_PERKS;
    obj = { type: "GUILD_POWERUP_CATALOG_FETCH_SUCCESS", guildId, allPowerups: null, powerupCatalog: null };
    let sorted = combined.sort((skuId, skuId2) => {
      let num = -1;
      if (skuId.skuId >= skuId2.skuId) {
        num = 1;
      }
      return num;
    });
    obj.allPowerups = sorted.reduce((acc, skuId) => {
      acc[skuId.skuId] = skuId;
      return acc;
    }, {});
    obj.powerupCatalog = obj;
    DispatcherDefault.dispatch(obj);
  } else {
    const request = { url: Endpoints.STORE_PUBLISHED_LISTINGS_SKUS, query: null, oldFormErrors: true, rejectWithError: null };
    const obj1 = { application_id, guild_id: guildId };
    request.query = obj1;
    const obj5 = require("StoreUtils");
    request.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
    const result = obj5.httpGetWithCountryCodeQuery(request);
    return result.then((body) => {
      guildId = body;
      body = body.body;
      const mapped = body.map((item) => storeListingToGuildPowerupDefault(body.body, item));
      const found = mapped.filter(GlobalUtils.isNotNullish);
      const sorted = found.sort((skuId, skuId2) => {
        let num = -1;
        if (skuId.skuId >= skuId2.skuId) {
          num = 1;
        }
        return num;
      });
      const reduced = sorted.reduce((powerupCatalog, skuId) => {
        powerupCatalog = powerupCatalog.powerupCatalog;
        powerupCatalog.allPowerups[skuId.skuId] = skuId;
        if (null == powerupCatalog[skuId.type]) {
          powerupCatalog[skuId.type] = [];
        }
        let arr = powerupCatalog[skuId.type];
        if (arr != null) {
          const push = arr.push;
          if (push != null) {
            arr = push(skuId);
          }
        }
        return powerupCatalog;
      }, { allPowerups: {}, powerupCatalog: {} });
      ({ allPowerups, powerupCatalog } = reduced);
      DispatcherDefault.dispatch({ type: "GUILD_POWERUP_CATALOG_FETCH_SUCCESS", guildId, allPowerups, powerupCatalog });
      return body.body;
    });
  }
};
export const fetchGuildBoostEntitlements = function fetchGuildBoostEntitlements(guildId, arg1) {
  _require = guildId;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  const request = { url: Endpoints.GUILD_POWERUPS(guildId), query: { include_ends_at: flag }, oldFormErrors: true, rejectWithError: null };
  let obj = require("StoreUtils");
  request.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
  const result = obj.httpGetWithCountryCodeQuery(request);
  return result.then((body) => {
    let obj = {};
    obj = {};
    body = body.body;
    const item = body.forEach((sku) => {
      sku = sku.sku;
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
        if (sku != null) {
          const sku2 = sku.sku;
          if (sku2 != null) {
            powerup_metadata = sku2.powerup_metadata;
          }
        }
        if (null == powerup_metadata) {
          const sku3 = sku.sku;
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
            obj[sku.id] = sku;
          }
        }
      }
      obj[sku.sku_id] = sku;
    });
    obj = { type: "GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS", guildId, unlockedPowerups: obj, unlockedGameServers: obj };
    DispatcherDefault.dispatch(obj);
  });
};
export const enablePowerupForGuild = function enablePowerupForGuild(arg0, arg1) {
  const HTTP = HTTPUtils.HTTP;
  return HTTP.post({ url: Endpoints.GUILD_POWERUP_TOGGLE(arg0, arg1), rejectWithError: true });
};
export const disablePowerupForGuild = function disablePowerupForGuild(arg0, arg1) {
  const HTTP = HTTPUtils.HTTP;
  return HTTP.del({ url: Endpoints.GUILD_POWERUP_TOGGLE(arg0, arg1), rejectWithError: true });
};