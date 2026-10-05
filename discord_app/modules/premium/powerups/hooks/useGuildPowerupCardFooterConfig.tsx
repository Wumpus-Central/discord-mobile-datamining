// === Module 12192: useGuildPowerupCardFooterConfig ===

// Module 12192 (useGuildPowerupCardFooterConfig)
import Constants from "Constants" /* 1085 */;
import useGuildPowerupRollbackEnabledDefault from "useGuildPowerupRollbackEnabled" /* 12155 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 12159 */;
import GuildStore from "GuildStore" /* 2074 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4768 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let GUILD_POWERUP_CONFIGURABLE_SKUS_DESKTOP;
let closure_4;
let hasOwnProperty;
({ GUILD_POWERUP_CONFIGURABLE_SKUS_DESKTOP, GUILD_POWERUP_CONFIGURABLE_SKUS_MOBILE: closure_4, PowerupActiveStatusType: hasOwnProperty } = GuildPowerupsConstants);
const GuildFeatures = Constants.GuildFeatures;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, skuId) => {
  let closure_0;
  let first;
  let tmp8;
  let tmp9;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(11);
  const tmp5 = usePowerupActiveStatusDefault(arg0, skuId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      const guild = GuildStore.getGuild(closure_0);
      let hasItem;
      if (guild != null) {
        const features = guild.features;
        hasItem = features.has(GuildFeatures.GUILD_THEME);
      }
      return true === hasItem;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9);
  skuId = skuId.skuId;
  let tmp12 = tmp5.type !== constants.INACTIVE;
  if (!tmp12) {
    tmp12 = skuId === require("Powerups").GUILD_POWERUP_GUILD_THEME_SKU_ID && stateFromStores;
    skuId === require("Powerups").GUILD_POWERUP_GUILD_THEME_SKU_ID && stateFromStores;
  }
  const tmp14 = (tmp12 || !useGuildPowerupRollbackEnabledDefault(arg0, skuId, "GuildPowerupCardFooterAdmin")) && tmp5.type !== constants.TIER_OVERRIDE_ACTIVATED;
  if (cResult[4] === tmp12) {
    let tmp15;
    if (cResult[5] === skuId.skuId) {
      tmp15 = cResult[6];
    }
    if (cResult[7] === tmp12) {
      if (cResult[8] === tmp15) {
        let tmp17;
        if (cResult[9] === tmp14) {
          tmp17 = cResult[10];
        }
        return tmp17;
      }
    }
    const obj2 = { showToggleButton: tmp14, showConfigureButton: tmp15, isPowerupActive: tmp12 };
    cResult[7] = tmp12;
    cResult[8] = tmp15;
    cResult[9] = tmp14;
    cResult[10] = obj2;
    tmp17 = obj2;
  }
  const tmp16 = tmp12 && set.has(skuId.skuId);
  cResult[4] = tmp12;
  cResult[5] = skuId.skuId;
  cResult[6] = tmp16;
  tmp15 = tmp16;
}) : ((arg0, skuId) => {
  let closure_0;
  let hasItem;
  _require = arg0;
  const tmp3 = usePowerupActiveStatusDefault(arg0, skuId);
  const items = [GuildStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.GUILD_THEME);
    }
    return true === hasItem;
  }, items1);
  skuId = skuId.skuId;
  let tmp6 = tmp3.type !== constants.INACTIVE;
  if (!tmp6) {
    tmp6 = skuId === require("Powerups").GUILD_POWERUP_GUILD_THEME_SKU_ID && stateFromStores;
    skuId === require("Powerups").GUILD_POWERUP_GUILD_THEME_SKU_ID && stateFromStores;
  }
  const obj2 = { showToggleButton: (tmp6 || !useGuildPowerupRollbackEnabledDefault(arg0, skuId, "GuildPowerupCardFooterAdmin")) && tmp3.type !== constants.TIER_OVERRIDE_ACTIVATED, showConfigureButton: hasItem, isPowerupActive: tmp6 };
  hasItem = tmp6 && set.has(skuId.skuId);
  return obj2;
});
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupCardFooterConfig.tsx");

export default tmp3;