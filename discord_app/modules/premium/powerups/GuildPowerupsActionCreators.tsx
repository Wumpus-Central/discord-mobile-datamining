// === Module 12147: GuildPowerupsActionCreators ===

// Module 12147 (GuildPowerupsActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4768 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, body, sku;

let c3;
let closure_4;
({ GUILD_POWERUP_APPLICATION_ID: c3, GuildPowerupType: closure_4 } = GuildPowerupsConstants);
const Endpoints = Constants.Endpoints;
let result = size.fileFinishedImporting("modules/premium/powerups/GuildPowerupsActionCreators.tsx");

export const guildPowerupsAckNotification = function guildPowerupsAckNotification(guildId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "GUILD_POWERUPS_ACK_NOTIFICATION", guildId };
  obj.dispatch(obj2);
};
export const guildPowerupsResetNotifications = function guildPowerupsResetNotifications() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "GUILD_POWERUPS_RESET_NOTIFICATIONS" });
};
export const fetchPowerupCatalogForGuild = function fetchPowerupCatalogForGuild(guildId, arg1) {
  let obj3;
  let obj6;
  let sorted;
  _require = guildId;
  if (true === arg1) {
    const MOCK_LEVELS = require("GuildPowerupMocks").MOCK_LEVELS;
    const combined = MOCK_LEVELS.concat(require("GuildPowerupMocks").MOCK_PERKS);
    let obj = {};
    obj[constants.LEVEL] = require("GuildPowerupMocks").MOCK_LEVELS;
    obj[constants.PERK] = require("GuildPowerupMocks").MOCK_PERKS;
    let obj2 = {
      type: "GUILD_POWERUP_CATALOG_FETCH_SUCCESS",
      guildId,
      allPowerups: sorted.reduce((acc, skuId) => {
          acc[skuId.skuId] = skuId;
          return acc;
        }, {}),
      powerupCatalog: obj
    };
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    sorted = combined.sort((skuId, skuId2) => {
      let num = -1;
      if (skuId.skuId >= skuId2.skuId) {
        num = 1;
      }
      return num;
    });
    dispatch(obj2);
  } else {
    const request = { url: Endpoints.STORE_PUBLISHED_LISTINGS_SKUS, query: obj3, oldFormErrors: true, rejectWithError: obj6.rejectWithMigratedError() };
    obj3 = { application_id, guild_id: guildId };
    const httpGetWithCountryCodeQuery = require("StoreUtils").httpGetWithCountryCodeQuery;
    require("StoreUtils");
    obj6 = require("HTTPUtils");
    const result = httpGetWithCountryCodeQuery(request);
    return result.then((body) => {
      let allPowerups;
      let powerupCatalog;
      guildId = body;
      body = body.body;
      const mapped = body.map((item) => closure_2_1(closure_2_2[6])(body.body, item));
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
        if (powerupCatalog[skuId.type] != null) {
          const push = arr.push;
          if (push != null) {
            push(skuId);
          }
        }
        return powerupCatalog;
      }, { allPowerups: {}, powerupCatalog: {} });
      ({ allPowerups, powerupCatalog } = reduced);
      const obj = { type: "GUILD_POWERUP_CATALOG_FETCH_SUCCESS", guildId, allPowerups, powerupCatalog };
      const obj2 = DispatcherDefault;
      obj2.dispatch(obj);
      return body.body;
    });
  }
};
export const fetchGuildBoostEntitlements = function fetchGuildBoostEntitlements(guildId, arg1) {
  let obj2;
  _require = guildId;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  const tmp = require("StoreUtils");
  const request = { url: Endpoints.GUILD_POWERUPS(guildId), query: { include_ends_at: flag }, oldFormErrors: true, rejectWithError: obj2.rejectWithMigratedError() };
  const httpGetWithCountryCodeQuery = tmp.httpGetWithCountryCodeQuery;
  obj2 = require("HTTPUtils");
  const result = httpGetWithCountryCodeQuery(request);
  return result.then((body) => {
    const obj = {};
    const obj2 = {};
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
            obj2[sku.id] = sku;
          }
        }
      }
      obj[sku.sku_id] = sku;
    });
    const obj3 = DispatcherDefault;
    const obj4 = { type: "GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS", guildId, unlockedPowerups: obj, unlockedGameServers: obj2 };
    obj3.dispatch(obj4);
  });
};
export const enablePowerupForGuild = function enablePowerupForGuild(arg0, arg1) {
  const HTTP = HTTPUtils.HTTP;
  const obj = { url: Endpoints.GUILD_POWERUP_TOGGLE(arg0, arg1), rejectWithError: true };
  return HTTP.post(obj);
};
export const disablePowerupForGuild = function disablePowerupForGuild(arg0, arg1) {
  const HTTP = HTTPUtils.HTTP;
  const obj = { url: Endpoints.GUILD_POWERUP_TOGGLE(arg0, arg1), rejectWithError: true };
  return HTTP.del(obj);
};