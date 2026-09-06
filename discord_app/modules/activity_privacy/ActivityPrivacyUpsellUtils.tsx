// discord_app/modules/activity_privacy/ActivityPrivacyUpsellUtils.tsx
import util from "../../intl/index.native.tsx";
import preloaded_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import UserSettings from "../user_settings/UserSettings.tsx";
import UserSettingsUtils from "../../utils/UserSettingsUtils.tsx";
import FrecencyStore from "../../stores/FrecencyStore.tsx";
import GuildMemberCountStore from "../../stores/GuildMemberCountStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import SortedGuildStore from "../../stores/SortedGuildStore.tsx";

require = fn;
function computeAffectedGuilds(setting, ACTIVITY_STATUS_OFF) {
  if (setting === ACTIVITY_STATUS_OFF) {
    return null;
  } else {
    let num2 = 2;
    let num = 2;
    if (EXPANDING(1187).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF !== setting) {
      num = 1;
      if (tmp8(1187).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS !== setting) {
        num = -1;
        if (tmp8(1187).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON === setting) {
          num = 0;
        }
      }
    }
    if (EXPANDING(1187).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF !== ACTIVITY_STATUS_OFF) {
      num2 = 1;
      if (
        tmp8(1187).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS !== ACTIVITY_STATUS_OFF
      ) {
        num2 = -1;
        if (tmp8(1187).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON === ACTIVITY_STATUS_OFF) {
          num2 = 0;
        }
      }
    }
    if (num >= 0) {
      if (num2 >= 0) {
        if (num2 < num) {
          EXPANDING = obj.RESTRICTING;
        } else {
          EXPANDING = obj.EXPANDING;
        }
        dependencyMap = tmp8(6995).getSanitizedActivityRestrictedGuilds();
        const flattenedGuildIds = SortedGuildStore.getFlattenedGuildIds();
        if (setting !== tmp8(1187).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF) {
          if (setting !== tmp8(1187).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS) {
            if (setting !== tmp8(1187).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON) {
              let str3 = "all";
              if (setting === tmp8(1187).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS) {
                str3 = "all";
              }
            }
            str3 = "small_only";
          }
        }
        const found = flattenedGuildIds.filter((item) => {
          if (null == GuildStore.getGuild(item)) {
            return false;
          } else {
            const hasItem = set.has(item);
            if (EXPANDING === obj.RESTRICTING) {
              if (hasItem) {
                return false;
              }
            }
            if (EXPANDING === obj.EXPANDING) {
              if (!hasItem) {
                return false;
              }
            }
            if ("all" === "all") {
              return true;
            } else {
              const memberCount = GuildMemberCountStore.getMemberCount(item);
              if (null == memberCount) {
                let tmp4 = EXPANDING === obj.RESTRICTING;
              } else if ("large_only" === tmp) {
                tmp4 = memberCount > 200;
              } else {
                tmp4 = memberCount <= 200;
              }
              return tmp4;
            }
          }
        });
        let tmp4 = null;
        if (0 !== found.length) {
          const sorted = found.sort((arg0, arg1) => {
            const guild = GuildStore.getGuild(arg0);
            const guild1 = GuildStore.getGuild(arg1);
            let joinedAt;
            if (guild != null) {
              joinedAt = guild.joinedAt;
            }
            if (null != joinedAt) {
              let joinedAt1;
              if (guild != null) {
                joinedAt1 = guild.joinedAt;
              }
              let num2 = 1;
              if (null != joinedAt1) {
                let joinedAt2;
                if (guild1 != null) {
                  joinedAt2 = guild1.joinedAt;
                }
                let num3 = -1;
                if (null != joinedAt2) {
                  const _Date = Date;
                  const date = new Date(guild1.joinedAt);
                  const _Date2 = Date;
                  const time = date.getTime();
                  const date1 = new Date(guild.joinedAt);
                  num3 = time - date1.getTime();
                }
                num2 = num3;
              }
              let num = num2;
            } else {
              let joinedAt3;
              if (guild1 != null) {
                joinedAt3 = guild1.joinedAt;
              }
              num = 0;
            }
            return num;
          });
          obj = { affectedGuildIds: found, direction: EXPANDING };
          tmp4 = obj;
        }
        return tmp4;
      }
    }
    return null;
  }
}
function getProfileVisibilitySettingName(NumberResult) {
  if (preloaded_user_settings.ProfileVisibility.FRIENDS_AND_ALL_GUILDS === NumberResult) {
    const intl3 = util.intl;
    return intl3.string(util.t.Boxc8R).toLowerCase();
  } else if (preloaded_user_settings.ProfileVisibility.FRIENDS_AND_SMALL_GUILDS === NumberResult) {
    const intl2 = util.intl;
    return intl2.string(util.t.YOIKBt).toLowerCase();
  } else if (preloaded_user_settings.ProfileVisibility.FRIENDS_ONLY === NumberResult) {
    const intl = util.intl;
    return intl.string(util.t.u0nlJv).toLowerCase();
  } else {
    return "";
  }
}
const ChangeDirection = { RESTRICTING: "restricting", EXPANDING: "expanding" };
let items = [
  fn(1187).ProfileVisibility.FRIENDS_AND_ALL_GUILDS,
  fn(1187).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF,
];
let items1 = [items, ,];
let items2 = [
  fn(1187).ProfileVisibility.FRIENDS_AND_SMALL_GUILDS,
  fn(1187).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
];
items1[1] = items2;
const items3 = [
  fn(1187).ProfileVisibility.FRIENDS_ONLY,
  fn(1187).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON,
];
items1[2] = items3;
const map = new Map(items1);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activity_privacy/ActivityPrivacyUpsellUtils.tsx");

export { ChangeDirection };
export const getPermissiveness = function getPermissiveness(arg0) {
  if (preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF === arg0) {
    return 2;
  } else if (
    preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS === arg0
  ) {
    return 1;
  } else if (preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON === arg0) {
    return 0;
  } else {
    return -1;
  }
};
export const profileVisibilityToActivityRestriction = function profileVisibilityToActivityRestriction(arg0) {
  let ACTIVITY_STATUS_OFF = map.get(arg0);
  if (ACTIVITY_STATUS_OFF == null) {
    ACTIVITY_STATUS_OFF = preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF;
  }
  return ACTIVITY_STATUS_OFF;
};
export { computeAffectedGuilds };
export const getActivityRestrictionSettingName = function getActivityRestrictionSettingName(NumberResult) {
  if (preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF === NumberResult) {
    const intl3 = util.intl;
    return intl3.string(util.t.FzgQna).toLowerCase();
  } else if (
    preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS === NumberResult
  ) {
    const intl2 = util.intl;
    return intl2.string(util.t["1hvuGH"]).toLowerCase();
  } else if (preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON === NumberResult) {
    const intl = util.intl;
    return intl.string(util.t.fQc5la).toLowerCase();
  } else {
    return "";
  }
};
export { getProfileVisibilitySettingName };
export const getProfileToActivityUpsellStrings = function getProfileToActivityUpsellStrings(arg0, settingName) {
  const intl = util.intl;
  const t = util.t;
  let obj = {
    title: intl.string(arg0 ? t.eYDA7D : t["9jYwjo"]),
    subtitle: null,
    confirmText: null,
    toastContent: null,
  };
  const intl2 = util.intl;
  const t2 = util.t;
  obj = { settingName };
  obj.subtitle = intl2.format(arg0 ? t2["c5/jDc"] : t2.ajzh8S, obj);
  const intl3 = util.intl;
  const t3 = util.t;
  obj.confirmText = intl3.string(arg0 ? t3["6uPZV1"] : t3.a9PIyD);
  const intl4 = util.intl;
  const t4 = util.t;
  obj.toastContent = intl4.string(arg0 ? t4.AdpgML : t4["Q7E+QF"]);
  return obj;
};
export const getUpsellStrings = function getUpsellStrings(arg0, settingName) {
  const intl = util.intl;
  const t = util.t;
  let obj = { title: intl.string(arg0 ? t.jRx1Aa : t.S0Y0bh), subtitle: null, confirmText: null, toastContent: null };
  const intl2 = util.intl;
  const t2 = util.t;
  obj = { settingName };
  obj.subtitle = intl2.format(arg0 ? t2.Fs96LO : t2.GcoYX8, obj);
  const intl3 = util.intl;
  const t3 = util.t;
  obj.confirmText = intl3.string(arg0 ? t3["4DM5HJ"] : t3.WRrDtI);
  const intl4 = util.intl;
  const t4 = util.t;
  obj.toastContent = intl4.string(arg0 ? t4.AdpgML : t4["Q7E+QF"]);
  return obj;
};
export const computeProfileToActivityUpsell = function computeProfileToActivityUpsell(setting, NumberResult) {
  let obj = map;
  let ACTIVITY_STATUS_OFF = map.get(NumberResult);
  if (ACTIVITY_STATUS_OFF == null) {
    ACTIVITY_STATUS_OFF = preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF;
  }
  const DefaultGuildsActivityRestrictedV2 = UserSettings.DefaultGuildsActivityRestrictedV2;
  setting = DefaultGuildsActivityRestrictedV2.getSetting();
  if (setting === ACTIVITY_STATUS_OFF) {
    return null;
  } else {
    let ACTIVITY_STATUS_OFF2 = obj.get(setting);
    if (ACTIVITY_STATUS_OFF2 == null) {
      ACTIVITY_STATUS_OFF2 = preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF;
    }
    let num = 2;
    let num2 = 2;
    if (preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF !== ACTIVITY_STATUS_OFF2) {
      num2 = 1;
      if (
        preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS !==
        ACTIVITY_STATUS_OFF2
      ) {
        num2 = -1;
        if (
          preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON === ACTIVITY_STATUS_OFF2
        ) {
          num2 = 0;
        }
      }
    }
    let num3 = num;
    if (preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF !== ACTIVITY_STATUS_OFF) {
      num3 = 1;
      if (
        preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS !==
        ACTIVITY_STATUS_OFF
      ) {
        num3 = -1;
        if (
          preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON === ACTIVITY_STATUS_OFF
        ) {
          num3 = 0;
        }
      }
    }
    let num4 = num;
    if (preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF !== setting) {
      num4 = 1;
      if (
        preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS !== setting
      ) {
        num4 = -1;
        if (preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON === setting) {
          num4 = 0;
        }
      }
    }
    if (preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF !== ACTIVITY_STATUS_OFF) {
      num = 1;
      if (
        preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS !==
        ACTIVITY_STATUS_OFF
      ) {
        num = -1;
        if (
          preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON === ACTIVITY_STATUS_OFF
        ) {
          num = 0;
        }
      }
    }
    if (num2 > num3 !== num4 > num) {
      return null;
    } else {
      const tmp7 = computeAffectedGuilds(setting, ACTIVITY_STATUS_OFF);
      if (null == tmp7) {
        return null;
      } else {
        obj = { affectedGuildIds: null, direction: null, settingName: null, mappedActivityValue: null };
        ({ affectedGuildIds: obj2.affectedGuildIds, direction: obj2.direction } = tmp7);
        obj.settingName = getProfileVisibilitySettingName(NumberResult);
        obj.mappedActivityValue = ACTIVITY_STATUS_OFF;
        return obj;
      }
    }
  }
};
export const sortGuildIdsByFrecency = function sortGuildIdsByFrecency(guildIds) {
  const items = [...guildIds];
  return items.sort((id, id) => {
    const scoreWithoutFetchingLatest = FrecencyStore.getScoreWithoutFetchingLatest(id);
    return scoreWithoutFetchingLatest - FrecencyStore.getScoreWithoutFetchingLatest(id);
  });
};
export const applyBulkGuildRestrictionChange = function applyBulkGuildRestrictionChange(direction, affectedGuildIds) {
  const obj = UserSettingsUtils;
  const sanitizedActivityRestrictedGuilds = obj.getSanitizedActivityRestrictedGuilds();
  if (direction === obj.RESTRICTING) {
    const _Set = Set;
    const items = [];
    HermesBuiltin.arraySpread(tmp5, HermesBuiltin.arraySpread(sanitizedActivityRestrictedGuilds, 0));
    const set1 = new Set(items);
    const ActivityRestrictedGuilds2 = UserSettings.ActivityRestrictedGuilds;
    const items1 = [];
    HermesBuiltin.arraySpread(set1, 0);
    ActivityRestrictedGuilds2.updateSetting(items1);
  } else {
    const items2 = [];
    HermesBuiltin.arraySpread(sanitizedActivityRestrictedGuilds, 0);
    const found = items2.filter((item) => !set.has(item));
    const ActivityRestrictedGuilds = UserSettings.ActivityRestrictedGuilds;
    ActivityRestrictedGuilds.updateSetting(found);
  }
  const set = new Set(affectedGuildIds);
};
