// === Module 12225: useGuildPowerupCardFooterConfig ===

// Module 12225 (useGuildPowerupCardFooterConfig)
import useGuildPowerupRollbackEnabledDefault from "useGuildPowerupRollbackEnabled" /* 12188 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 12192 */;
import GuildStore from "GuildStore" /* 2086 */;

const require = globalThis.__r;

const require = fn;
const GuildPowerupsConstants = fn(4969);
({ GUILD_POWERUP_CONFIGURABLE_SKUS_DESKTOP, GUILD_POWERUP_CONFIGURABLE_SKUS_MOBILE: closure_4, PowerupActiveStatusType: hasOwnProperty } = GuildPowerupsConstants);
const GuildFeatures = fn(1085).GuildFeatures;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupCardFooterConfig.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildPowerupCardFooterConfig(arg0, skuId) {
  _require = arg0;
  const cResult = require("c").c(11);
  const tmp5 = usePowerupActiveStatusDefault(arg0, skuId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      guild = GuildStore.getGuild(closure_0);
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
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp8, tmp9);
  let tmp12 = tmp5.type !== constants.INACTIVE;
  if (!tmp12) {
    tmp12 = skuId.skuId === tmp(4972).GUILD_POWERUP_GUILD_THEME_SKU_ID && stateFromStores;
    const tmp13 = skuId.skuId === tmp(4972).GUILD_POWERUP_GUILD_THEME_SKU_ID && stateFromStores;
  }
  let tmp14 = tmp12;
  if (!tmp12) {
    tmp14 = !useGuildPowerupRollbackEnabledDefault(arg0, skuId, "GuildPowerupCardFooterAdmin");
  }
  if (tmp14) {
    tmp14 = tmp5.type !== constants.TIER_OVERRIDE_ACTIVATED;
  }
  if (cResult[4] === tmp12) {
    if (cResult[5] === skuId.skuId) {
      let tmp15 = cResult[6];
    }
    if (cResult[7] === tmp12) {
      if (cResult[8] === tmp15) {
        if (cResult[9] === tmp14) {
          let tmp17 = cResult[10];
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
  let hasItem = tmp12;
  if (tmp12) {
    hasItem = set.has(skuId.skuId);
  }
  cResult[4] = tmp12;
  cResult[5] = skuId.skuId;
  cResult[6] = hasItem;
  tmp15 = hasItem;
  const tmpResult = require("initialize");
}) : (function useGuildPowerupCardFooterConfig(arg0, skuId) {
  _require = arg0;
  const tmp3 = usePowerupActiveStatusDefault(arg0, skuId);
  const items = [GuildStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    guild = GuildStore.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.GUILD_THEME);
    }
    return true === hasItem;
  }, items1);
  let tmp6 = tmp3.type !== constants.INACTIVE;
  if (!tmp6) {
    tmp6 = skuId.skuId === require("Powerups").GUILD_POWERUP_GUILD_THEME_SKU_ID && stateFromStores;
    const tmp7 = skuId.skuId === require("Powerups").GUILD_POWERUP_GUILD_THEME_SKU_ID && stateFromStores;
  }
  let tmp8 = tmp6;
  if (!tmp6) {
    tmp8 = !useGuildPowerupRollbackEnabledDefault(arg0, skuId, "GuildPowerupCardFooterAdmin");
  }
  if (tmp8) {
    tmp8 = tmp3.type !== constants.TIER_OVERRIDE_ACTIVATED;
  }
  const obj2 = { showToggleButton: tmp8, showConfigureButton: null, isPowerupActive: null };
  let hasItem = tmp6;
  if (tmp6) {
    hasItem = set.has(skuId.skuId);
  }
  obj2.showConfigureButton = hasItem;
  obj2.isPowerupActive = tmp6;
  return obj2;
});