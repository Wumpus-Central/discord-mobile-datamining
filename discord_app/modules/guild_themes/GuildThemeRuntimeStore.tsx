// === Module 4772: GuildThemeRuntimeStore ===

// Module 4772 (GuildThemeRuntimeStore)
import _mod12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import guildThemeSerialization from "guildThemeSerialization" /* 2073 */;
import Powerups from "Powerups" /* 4777 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4773 */;
import GuildStore from "GuildStore" /* 2074 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4705 */;
import size from "module_2" /* 2 */;

let _null, c6;

function snapshotSelectedGuildId(guildId) {
  let flag;
  if (null == guildId) {
    let flag3 = null != _null;
    if (flag3) {
      _null = null;
      flag3 = true;
    }
    flag = flag3;
  } else {
    const cloneGuildTheme = guildThemeSerialization.cloneGuildTheme;
    guildThemeSerialization;
    const guild = GuildStore.getGuild(guildId);
    let guildTheme;
    if (guild != null) {
      guildTheme = guild.guildTheme;
    }
    const cloneGuildThemeResult = cloneGuildTheme(guildTheme);
    const guild1 = GuildStore.getGuild(guildId);
    let hasItem;
    if (guild1 != null) {
      const features = guild1.features;
      hasItem = features.has(GuildFeatures.GUILD_THEME);
    }
    guildId = undefined;
    if (_null != null) {
      guildId = _null.guildId;
    }
    flag = guildId !== guildId;
    if (!flag) {
      const tmp11Result = _mod12;
      flag = !tmp11Result.isEqual(_null.guildTheme, cloneGuildThemeResult);
    }
    if (!flag) {
      flag = _null.hasThemeFeature !== tmp8;
    }
    if (flag) {
      _null = { guildId, guildTheme: cloneGuildThemeResult, hasThemeFeature: true === hasItem };
      flag = true;
      const obj = { guildId, guildTheme: cloneGuildThemeResult, hasThemeFeature: true === hasItem };
    }
  }
  return flag;
}
function snapshotSelectedGuild() {
  return snapshotSelectedGuildId(SelectedGuildStore.getGuildId());
}
function handleSavedGuildTheme(guildId) {
  guildId = guildId.guildId;
  const guildTheme = guildId.guildTheme;
  let tmp = guildId === SelectedGuildStore.getGuildId();
  if (tmp) {
    const obj = guildThemeSerialization;
    const cloneGuildThemeResult = obj.cloneGuildTheme(guildTheme);
    const guild = GuildStore.getGuild(guildId);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.GUILD_THEME);
    }
    let guildId1;
    if (_null != null) {
      guildId1 = _null.guildId;
    }
    let flag = guildId1 !== guildId;
    if (!flag) {
      const tmp2Result = _mod12;
      flag = !tmp2Result.isEqual(_null.guildTheme, cloneGuildThemeResult);
    }
    if (!flag) {
      flag = _null.hasThemeFeature !== tmp12;
    }
    if (flag) {
      _null = { guildId, guildTheme: cloneGuildThemeResult, hasThemeFeature: true === hasItem };
      flag = true;
      const obj2 = { guildId, guildTheme: cloneGuildThemeResult, hasThemeFeature: true === hasItem };
    }
    tmp = flag;
  }
  return tmp;
}
const GuildFeatures = Constants.GuildFeatures;
const metroRequire = null;
let c7 = null;
const Store = get_initializedDefault.Store;
class GuildThemeRuntimeStore extends Store {
  initialize() {
    this.waitFor(GuildPowerupsStore, GuildStore, SelectedGuildStore);
  }
  getGuildThemeSnapshot(guildId) {
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
  }
}
const prototype = GuildThemeRuntimeStore.prototype;
GuildThemeRuntimeStore.displayName = "GuildThemeRuntimeStore";
let obj = {
  CACHE_LOADED: snapshotSelectedGuild,
  CACHE_LOADED_LAZY: snapshotSelectedGuild,
  CHANNEL_SELECT: function handleChannelSelect(guildId) {
    let tmp2;
    guildId = guildId.guildId;
    if (null == guildId) {
      let flag = null != _null;
      if (flag) {
        _null = null;
        flag = true;
      }
      tmp2 = flag;
    } else {
      let guildId1;
      if (_null != null) {
        guildId1 = _null.guildId;
      }
      tmp2 = guildId !== guildId1 && snapshotSelectedGuildId(guildId);
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
      const guildId1 = SelectedGuildStore.getGuildId();
      flag = guildId1 !== id && snapshotSelectedGuildId(guildId1);
      const tmp4 = guildId1 !== id && snapshotSelectedGuildId(guildId1);
    }
    return flag;
  },
  GUILD_MEMBER_REMOVE: function handleGuildMemberRemove(guildId) {
    guildId = guildId.guildId;
    let guildId1;
    if (_null != null) {
      guildId1 = _null.guildId;
    }
    let flag = false;
    if (guildId1 === guildId) {
      const guildId2 = SelectedGuildStore.getGuildId();
      flag = guildId2 !== guildId && snapshotSelectedGuildId(guildId2);
      const tmp4 = guildId2 !== guildId && snapshotSelectedGuildId(guildId2);
    }
    return flag;
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    guild = guild.guild;
    let tmp = guild.id !== c7;
    if (!tmp) {
      const guild1 = GuildStore.getGuild(guild.id);
      let hasItem;
      if (guild1 != null) {
        const features = guild1.features;
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
    if (null != _null) {
      flag3 = false;
      if (id === _null.guildId) {
        const guild2 = GuildStore.getGuild(id);
        let hasItem1;
        if (guild2 != null) {
          const features2 = guild2.features;
          hasItem1 = features2.has(GuildFeatures.GUILD_THEME);
        }
        flag3 = false;
        if (true === hasItem1 !== _null.hasThemeFeature) {
          let guildTheme2;
          let tmp19 = !tmp11;
          if (true === hasItem1) {
            const stateForGuild = GuildPowerupsStore.getStateForGuild(id);
            let tmp14;
            if (stateForGuild != null) {
              const unlockedPowerups = stateForGuild.unlockedPowerups;
              if (unlockedPowerups != null) {
                tmp14 = unlockedPowerups[Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID];
              }
            }
            let tmp17 = null != tmp14;
            if (tmp17) {
              const guildTheme = tmp8.guildTheme;
              let enabled;
              if (guildTheme != null) {
                enabled = guildTheme.enabled;
              }
              tmp17 = true !== enabled;
            }
            tmp19 = tmp17;
          }
          if (tmp19) {
            const cloneGuildTheme = guildThemeSerialization.cloneGuildTheme;
            guildThemeSerialization;
            const guild3 = GuildStore.getGuild(id);
            let guildTheme1;
            if (guild3 != null) {
              guildTheme1 = guild3.guildTheme;
            }
            guildTheme2 = cloneGuildTheme(guildTheme1);
          } else {
            guildTheme2 = tmp8.guildTheme;
          }
          let guildId;
          if (_null != null) {
            guildId = _null.guildId;
          }
          let flag5 = guildId !== id;
          if (!flag5) {
            const obj = _mod12;
            flag5 = !obj.isEqual(_null.guildTheme, guildTheme2);
          }
          if (!flag5) {
            flag5 = _null.hasThemeFeature !== tmp11;
          }
          if (flag5) {
            _null = { guildId: id, guildTheme: guildTheme2, hasThemeFeature: true === hasItem1 };
            flag5 = true;
            const obj2 = { guildId: id, guildTheme: guildTheme2, hasThemeFeature: true === hasItem1 };
          }
          flag3 = flag5;
        }
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
      let flag = entitlements.some((sku_id) => sku_id.sku_id === Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID);
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
    let someResult = entitlements.some((sku_id) => sku_id.sku_id === Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID);
    if (someResult) {
      let guildId1;
      if (_null != null) {
        guildId1 = _null.guildId;
      }
      let flag = guildId === guildId1 && c7 !== guildId;
      if (flag) {
        c7 = guildId;
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
    c7 = null;
    let flag = null != c6;
    const tmp = null != c7;
    if (flag) {
      c6 = null;
      flag = true;
    }
    if (!flag) {
      flag = tmp;
    }
    return flag;
  }
};
const guildThemeRuntimeStore = new GuildThemeRuntimeStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/guild_themes/GuildThemeRuntimeStore.tsx");

export default guildThemeRuntimeStore;