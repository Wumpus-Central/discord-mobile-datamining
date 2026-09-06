// discord_app/modules/guild_themes/GuildThemeRuntimeStore.tsx
import _mod12 from "../../../_runtime/metro/00012__.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import guildThemeSerialization from "guildThemeSerialization.tsx";
import Powerups from "../../../discord_common/js/shared/shared-constants/Powerups.tsx";
import GuildPowerupsStore from "../premium/powerups/GuildPowerupsStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";

require = fn;
function snapshotSelectedGuildId(guildId) {
  if (null == guildId) {
    let flag3 = null != _null;
    if (flag3) {
      _null = null;
      flag3 = true;
    }
    let flag = flag3;
  } else {
    const guild = GuildStore.getGuild(guildId);
    let guildTheme;
    if (guild != null) {
      guildTheme = guild.guildTheme;
    }
    const cloneGuildThemeResult = guildThemeSerialization.cloneGuildTheme(guildTheme);
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
      flag = !_mod12.isEqual(_null.guildTheme, cloneGuildThemeResult);
      const tmp11Result = _mod12;
    }
    if (!flag) {
      flag = _null.hasThemeFeature !== tmp8;
    }
    if (flag) {
      const obj = { guildId, guildTheme: cloneGuildThemeResult, hasThemeFeature: tmp8 };
      _null = obj;
      flag = true;
    }
  }
  return flag;
}
function snapshotSelectedGuild() {
  return snapshotSelectedGuildId(SelectedGuildStore.getGuildId());
}
function handleSavedGuildTheme(guildId) {
  guildId = guildId.guildId;
  let tmp = guildId === SelectedGuildStore.getGuildId();
  if (tmp) {
    let obj = guildThemeSerialization;
    const cloneGuildThemeResult = obj.cloneGuildTheme(guildId.guildTheme);
    const guild = GuildStore.getGuild(guildId);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.GUILD_THEME);
    }
    guildId = undefined;
    if (_null != null) {
      guildId = _null.guildId;
    }
    let flag = guildId !== guildId;
    if (!flag) {
      flag = !_mod12.isEqual(_null.guildTheme, cloneGuildThemeResult);
      const tmp2Result = _mod12;
    }
    if (!flag) {
      flag = _null.hasThemeFeature !== tmp12;
    }
    if (flag) {
      obj = { guildId, guildTheme: cloneGuildThemeResult, hasThemeFeature: tmp12 };
      _null = obj;
      flag = true;
    }
    tmp = flag;
  }
  return tmp;
}
const GuildFeatures = fn(1074).GuildFeatures;
let c6 = null;
let c7 = null;
const Store = initializeDefault.Store;
class GuildThemeRuntimeStore extends Store {}
const prototype = GuildThemeRuntimeStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(GuildPowerupsStore, GuildStore, SelectedGuildStore);
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
const guildThemeRuntimeStore = new GuildThemeRuntimeStore(DispatcherDefault, {
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
      const guildId1 = SelectedGuildStore.getGuildId();
      let tmp4 = guildId1 !== id;
      if (tmp4) {
        tmp4 = snapshotSelectedGuildId(guildId1);
      }
      flag = tmp4;
    }
    return flag;
  },
  GUILD_MEMBER_REMOVE: function handleGuildMemberRemove(guildId) {
    guildId = undefined;
    if (_null != null) {
      guildId = _null.guildId;
    }
    let flag = false;
    if (guildId === guildId) {
      const guildId1 = SelectedGuildStore.getGuildId();
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
      guild = GuildStore.getGuild(guild.id);
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
    if (null != _null) {
      flag3 = false;
      if (id === tmp8.guildId) {
        const guild1 = GuildStore.getGuild(id);
        let hasItem1;
        if (guild1 != null) {
          const features2 = guild1.features;
          hasItem1 = features2.has(GuildFeatures.GUILD_THEME);
        }
        flag3 = false;
        if ((true === hasItem1) !== tmp8.hasThemeFeature) {
          let tmp19 = !tmp11;
          if (tmp11) {
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
            let obj = guildThemeSerialization;
            const guild2 = GuildStore.getGuild(id);
            guildTheme = undefined;
            if (guild2 != null) {
              guildTheme = guild2.guildTheme;
            }
            let guildTheme2 = obj.cloneGuildTheme(guildTheme);
          } else {
            guildTheme2 = tmp8.guildTheme;
          }
          let guildId;
          if (_null != null) {
            guildId = _null.guildId;
          }
          let flag5 = guildId !== id;
          if (!flag5) {
            flag5 = !_mod12.isEqual(_null.guildTheme, guildTheme2);
          }
          if (!flag5) {
            flag5 = _null.hasThemeFeature !== tmp11;
          }
          if (flag5) {
            obj = { guildId: id, guildTheme: guildTheme2, hasThemeFeature: tmp11 };
            _null = obj;
            flag5 = true;
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
    ({ guildId, entitlements } = arg0);
    let someResult = entitlements.some((sku_id) => sku_id.sku_id === Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID);
    if (someResult) {
      guildId = undefined;
      if (_null != null) {
        guildId = _null.guildId;
      }
      let flag = guildId === guildId;
      if (flag) {
        flag = c7 !== guildId;
      }
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
    if (flag) {
      c6 = null;
      flag = true;
    }
    if (!flag) {
      flag = tmp;
    }
    return flag;
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_themes/GuildThemeRuntimeStore.tsx");

export default guildThemeRuntimeStore;
