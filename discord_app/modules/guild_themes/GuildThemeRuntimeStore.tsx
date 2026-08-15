// discord_app/modules/guild_themes/GuildThemeRuntimeStore.tsx
import calculateAppliedBoosts from "calculateAppliedBoosts";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import handleConnectionOpen from "handleConnectionOpen";
import { GuildFeatures } from "ME";
import { Store } from "initialize";
import { apply } from "../../../_runtime/00012_apply.js";
import { cloneGuildThemeSettings } from "guildThemeSerialization.tsx";

const require = arg1;
function snapshotSelectedGuildId(guildId) {
  if (null == guildId) {
    let flag3 = null != obj;
    if (flag3) {
      obj = null;
      flag3 = true;
    }
    let flag = flag3;
  } else {
    const guild = store.getGuild(guildId);
    let guildTheme;
    if (guild != null) {
      guildTheme = guild.guildTheme;
    }
    const cloneGuildThemeResult = cloneGuildThemeSettings.cloneGuildTheme(guildTheme);
    const guild1 = store.getGuild(guildId);
    let hasItem;
    if (guild1 != null) {
      const features = guild1.features;
      hasItem = features.has(GuildFeatures.GUILD_THEME);
    }
    guildId = undefined;
    if (obj != null) {
      guildId = obj.guildId;
    }
    flag = guildId !== guildId;
    if (!flag) {
      flag = !tmp11(12).isEqual(obj.guildTheme, cloneGuildThemeResult);
      const tmp11Result = tmp11(12);
    }
    if (!flag) {
      flag = obj.hasThemeFeature !== tmp8;
    }
    if (flag) {
      obj = { guildId: null, guildTheme: null, hasThemeFeature: null };
      obj[0] = guildId;
      obj[1] = cloneGuildThemeResult;
      obj[2] = tmp8;
      flag = true;
    }
    const obj3 = cloneGuildThemeSettings;
    const obj4 = store;
    tmp11 = require;
  }
  return flag;
}
function snapshotSelectedGuild() {
  return snapshotSelectedGuildId(store2.getGuildId());
}
function handleSavedGuildTheme(guildId) {
  guildId = guildId.guildId;
  let tmp = guildId === store2.getGuildId();
  if (tmp) {
    let obj = cloneGuildThemeSettings;
    const cloneGuildThemeResult = obj.cloneGuildTheme(guildId.guildTheme);
    const guild = store.getGuild(guildId);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.GUILD_THEME);
    }
    guildId = undefined;
    if (obj != null) {
      guildId = obj.guildId;
    }
    let flag = guildId !== guildId;
    if (!flag) {
      flag = !tmp2(12).isEqual(obj.guildTheme, cloneGuildThemeResult);
      const tmp2Result = tmp2(12);
    }
    if (!flag) {
      flag = obj.hasThemeFeature !== tmp12;
    }
    if (flag) {
      obj = { guildId: null, guildTheme: null, hasThemeFeature: null };
      obj[0] = guildId;
      obj[1] = cloneGuildThemeResult;
      obj[2] = tmp12;
      flag = true;
    }
    tmp = flag;
    tmp2 = require;
  }
  return tmp;
}
let c6 = null;
let c7 = null;
class GuildThemeRuntimeStore extends Store {
}
const prototype = GuildThemeRuntimeStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(calculateAppliedBoosts, createGuildRecordFromRust, handleConnectionOpen);
};
prototype["getGuildThemeSnapshot"] = function getGuildThemeSnapshot(guildId) {
  let tmp = null;
  if (guildId !== c7) {
    guildId = undefined;
    if (_null != null) {
      guildId = _null.guildId;
    }
    let guildTheme;
    if (guildId === guildId) {
      guildTheme = _null.guildTheme;
    }
    tmp = guildTheme;
  }
  return tmp;
};
GuildThemeRuntimeStore.displayName = "GuildThemeRuntimeStore";
const guildThemeRuntimeStore = new GuildThemeRuntimeStore(require("dispatcher"), {
  CACHE_LOADED: snapshotSelectedGuild,
  CACHE_LOADED_LAZY: snapshotSelectedGuild,
  CHANNEL_SELECT: function handleChannelSelect(guildId) {
    guildId = guildId.guildId;
    if (null == guildId) {
      let flag = null != _null;
      if (flag) {
        _null = null;
        flag = true;
      }
      let tmp2 = flag;
    } else {
      guildId = undefined;
      if (_null != null) {
        guildId = _null.guildId;
      }
      tmp2 = guildId !== guildId;
      if (tmp2) {
        tmp2 = snapshotSelectedGuildId(guildId);
      }
    }
    return tmp2;
  },
  CONNECTION_OPEN: snapshotSelectedGuild,
  GUILD_DELETE: function handleGuildDelete(guild) {
    const id = guild.guild.id;
    let guildId;
    if (_null != null) {
      guildId = _null.guildId;
    }
    let flag = false;
    if (guildId === id) {
      const guildId1 = store2.getGuildId();
      let tmp4 = guildId1 !== id;
      if (tmp4) {
        tmp4 = snapshotSelectedGuildId(guildId1);
      }
      flag = tmp4;
    }
    return flag;
  },
  GUILD_MEMBER_REMOVE: function handleGuildMemberRemove(guildId) {
    guildId = guildId.guildId;
    guildId = undefined;
    if (_null != null) {
      guildId = _null.guildId;
    }
    let flag = false;
    if (guildId === guildId) {
      const guildId1 = store2.getGuildId();
      let tmp4 = guildId1 !== guildId;
      if (tmp4) {
        tmp4 = snapshotSelectedGuildId(guildId1);
      }
      flag = tmp4;
    }
    return flag;
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    guild = guild.guild;
    let tmp = guild.id !== c7;
    if (!tmp) {
      guild = store.getGuild(guild.id);
      let hasItem;
      if (guild != null) {
        const features = guild.features;
        hasItem = features.has(GuildFeatures.GUILD_THEME);
      }
      tmp = true === hasItem;
    }
    let flag2 = false;
    if (!tmp) {
      c7 = null;
      flag2 = true;
    }
    const id = guild.id;
    let flag3 = false;
    if (null != obj) {
      flag3 = false;
      if (id === tmp8.guildId) {
        const guild1 = store.getGuild(id);
        let hasItem1;
        if (guild1 != null) {
          const features2 = guild1.features;
          hasItem1 = features2.has(GuildFeatures.GUILD_THEME);
        }
        flag3 = false;
        if (true === hasItem1 !== tmp8.hasThemeFeature) {
          let tmp19 = !tmp11;
          if (tmp11) {
            stateForGuild = stateForGuild.getStateForGuild(id);
            let tmp14;
            if (stateForGuild != null) {
              const unlockedPowerups = stateForGuild.unlockedPowerups;
              if (unlockedPowerups != null) {
                tmp14 = unlockedPowerups[require(undefined, 4265) /* VANITY_URL_POWERUP_SKU_ID */.GUILD_POWERUP_GUILD_THEME_SKU_ID];
              }
            }
            let tmp17 = null != tmp14;
            if (tmp17) {
              let guildTheme = tmp8.guildTheme;
              let enabled;
              if (guildTheme != null) {
                enabled = guildTheme.enabled;
              }
              tmp17 = true !== enabled;
            }
            tmp19 = tmp17;
          }
          if (tmp19) {
            obj = cloneGuildThemeSettings;
            const guild2 = obj4.getGuild(id);
            guildTheme = undefined;
            if (guild2 != null) {
              guildTheme = guild2.guildTheme;
            }
            let guildTheme2 = obj.cloneGuildTheme(guildTheme);
          } else {
            guildTheme2 = tmp8.guildTheme;
          }
          let guildId;
          if (obj != null) {
            guildId = obj.guildId;
          }
          let flag5 = guildId !== id;
          if (!flag5) {
            flag5 = !apply.isEqual(obj.guildTheme, guildTheme2);
            const obj2 = apply;
          }
          if (!flag5) {
            flag5 = obj.hasThemeFeature !== tmp11;
          }
          if (flag5) {
            obj = { guildId: null, guildTheme: null, hasThemeFeature: null };
            obj[0] = id;
            obj[1] = guildTheme2;
            obj[2] = tmp11;
            flag5 = true;
          }
          flag3 = flag5;
        }
        obj4 = store;
      }
    }
    if (flag3) {
      flag2 = true;
    }
    return flag2;
  },
  GUILD_POWERUP_ENTITLEMENTS_CREATE: function handleThemePowerupAdded(entitlements) {
    entitlements = entitlements.entitlements;
    let tmp = c7 === entitlements.guildId;
    if (tmp) {
      let flag = entitlements.some((sku_id) => sku_id.sku_id === callback(table[4]).GUILD_POWERUP_GUILD_THEME_SKU_ID);
      if (flag) {
        c7 = null;
        flag = true;
      }
      tmp = flag;
    }
    return tmp;
  },
  GUILD_POWERUP_ENTITLEMENTS_DELETE: function handleThemePowerupRemoved(arg0) {
    let entitlements;
    let guildId;
    ({ guildId, entitlements } = arg0);
    let someResult = entitlements.some((sku_id) => sku_id.sku_id === callback(table[4]).GUILD_POWERUP_GUILD_THEME_SKU_ID);
    if (someResult) {
      guildId = undefined;
      if (_null != null) {
        guildId = _null.guildId;
      }
      let flag = guildId === guildId;
      if (flag) {
        flag = guildId !== guildId;
      }
      if (flag) {
        flag = true;
      }
      someResult = flag;
    }
    return someResult;
  },
  GUILD_SETTINGS_GUILD_THEME_SAVE_SUCCESS: handleSavedGuildTheme,
  GUILD_THEME_PREVIEW_SAVE_SUCCESS: handleSavedGuildTheme,
  OVERLAY_INITIALIZE: snapshotSelectedGuild,
  LOGOUT: function handleConnectionReset() {
    let c7 = null;
    let flag = null != c6;
    if (flag) {
      c6 = null;
      flag = true;
    }
    if (!flag) {
      flag = tmp;
    }
    return flag;
  }
});
const result = require("handleConnectionOpen").fileFinishedImporting("modules/guild_themes/GuildThemeRuntimeStore.tsx");

export default guildThemeRuntimeStore;