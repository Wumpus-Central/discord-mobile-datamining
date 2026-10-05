// === Module 14659: ActivityPrivacyUpsellUtils ===

// Module 14659 (ActivityPrivacyUpsellUtils)
import intl5 from "intl" /* 1126 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import UserSettings from "UserSettings" /* 2028 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6491 */;
import FrecencyStore from "FrecencyStore" /* 5694 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4780 */;
import GuildStore from "GuildStore" /* 2074 */;
import SortedGuildStore from "SortedGuildStore" /* 5616 */;
import size from "module_2" /* 2 */;

let dependencyMap, set;

function computeAffectedGuilds(setting, ACTIVITY_STATUS_OFF) {
  let EXPANDING;
  let obj;
  let str;
  if (setting === ACTIVITY_STATUS_OFF) {
    return null;
  } else {
    let num2 = 2;
    let num = 2;
    if (EXPANDING(1197).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF !== setting) {
      num = 1;
      if (EXPANDING(1197).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS !== setting) {
        num = -1;
        if (EXPANDING(1197).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON === setting) {
          num = 0;
        }
      }
    }
    if (EXPANDING(1197).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF !== ACTIVITY_STATUS_OFF) {
      num2 = 1;
      if (EXPANDING(1197).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS !== ACTIVITY_STATUS_OFF) {
        num2 = -1;
        if (EXPANDING(1197).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON === ACTIVITY_STATUS_OFF) {
          num2 = 0;
        }
      }
    }
    let num3 = 0;
    if (num >= 0) {
      if (num2 >= 0) {
        if (num2 < num) {
          EXPANDING = obj.RESTRICTING;
        } else {
          const tmp = obj;
          EXPANDING = obj.EXPANDING;
        }
        const tmp8Result = EXPANDING(6491);
        dependencyMap = tmp8Result.getSanitizedActivityRestrictedGuilds();
        const flattenedGuildIds = SortedGuildStore.getFlattenedGuildIds();
        if (setting !== EXPANDING(1197).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF) {
          if (setting !== EXPANDING(1197).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS) {
            if (setting !== EXPANDING(1197).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON) {
              let str3 = "all";
              if (setting === EXPANDING(1197).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS) {
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
              let tmp4;
              const memberCount = GuildMemberCountStore.getMemberCount(item);
              if (null == memberCount) {
                tmp4 = EXPANDING === obj.RESTRICTING;
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
          const sorted = found.sort(function(arg0, arg1) {
            let num;
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
                  const self = this;
                  const self2 = this;
                  const _Date2 = Date;
                  const self3 = this;
                  const self4 = this;
                  const date = new Date(guild1.joinedAt);
                  const time = date.getTime();
                  const date1 = new Date(guild.joinedAt);
                  num3 = time - date1.getTime();
                }
                num2 = num3;
              }
              num = num2;
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
    const intl3 = intl5.intl;
    const str4 = intl3.string(intl5.t.Boxc8R);
    return str4.toLowerCase();
  } else if (preloaded_user_settings.ProfileVisibility.FRIENDS_AND_SMALL_GUILDS === NumberResult) {
    const intl2 = intl5.intl;
    const str3 = intl2.string(intl5.t.YOIKBt);
    return str3.toLowerCase();
  } else if (preloaded_user_settings.ProfileVisibility.FRIENDS_ONLY === NumberResult) {
    const intl = intl5.intl;
    const str2 = intl.string(intl5.t.u0nlJv);
    return str2.toLowerCase();
  } else {
    return "";
  }
}
const ChangeDirection = { RESTRICTING: "restricting", EXPANDING: "expanding" };
let items = [preloaded_user_settings.ProfileVisibility.FRIENDS_AND_ALL_GUILDS, preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF];
let items1 = [items, , ];
let items2 = [preloaded_user_settings.ProfileVisibility.FRIENDS_AND_SMALL_GUILDS, preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS];
items1[1] = items2;
const items3 = [preloaded_user_settings.ProfileVisibility.FRIENDS_ONLY, preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON];
items1[2] = items3;
const map = new Map(items1);
const result = size.fileFinishedImporting("modules/activity_privacy/ActivityPrivacyUpsellUtils.tsx");

export { ChangeDirection };
export const getPermissiveness = function getPermissiveness(arg0) {
  if (preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF === arg0) {
    return 2;
  } else if (preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS === arg0) {
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
    const intl3 = intl5.intl;
    const str4 = intl3.string(intl5.t.FzgQna);
    return str4.toLowerCase();
  } else if (preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS === NumberResult) {
    const intl2 = intl5.intl;
    const str3 = intl2.string(intl5.t["1hvuGH"]);
    return str3.toLowerCase();
  } else if (preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON === NumberResult) {
    const intl = intl5.intl;
    const str2 = intl.string(intl5.t.fQc5la);
    return str2.toLowerCase();
  } else {
    return "";
  }
};
export { getProfileVisibilitySettingName };
export const getProfileToActivityUpsellStrings = function getProfileToActivityUpsellStrings(arg0, settingName) {
  let format;
  let obj2;
  let string2;
  let string3;
  let t2;
  let t3;
  let t4;
  const intl = intl5.intl;
  const string = intl.string;
  const t = intl5.t;
  const obj = { title: string(arg0 ? t.eYDA7D : t["9jYwjo"]), subtitle: format(arg0 ? t2["c5/jDc"] : t2.ajzh8S, obj2), confirmText: string2(arg0 ? t3["6uPZV1"] : t3.a9PIyD), toastContent: string3(arg0 ? t4.AdpgML : t4["Q7E+QF"]) };
  const intl2 = intl5.intl;
  format = intl2.format;
  t2 = intl5.t;
  obj2 = { settingName };
  const intl3 = intl5.intl;
  string2 = intl3.string;
  t3 = intl5.t;
  const intl4 = intl5.intl;
  string3 = intl4.string;
  t4 = intl5.t;
  return obj;
};
export const getUpsellStrings = function getUpsellStrings(arg0, settingName) {
  let format;
  let obj2;
  let string2;
  let string3;
  let t2;
  let t3;
  let t4;
  const intl = intl5.intl;
  const string = intl.string;
  const t = intl5.t;
  const obj = { title: string(arg0 ? t.jRx1Aa : t.S0Y0bh), subtitle: format(arg0 ? t2.Fs96LO : t2.GcoYX8, obj2), confirmText: string2(arg0 ? t3["4DM5HJ"] : t3.WRrDtI), toastContent: string3(arg0 ? t4.AdpgML : t4["Q7E+QF"]) };
  const intl2 = intl5.intl;
  format = intl2.format;
  t2 = intl5.t;
  obj2 = { settingName };
  const intl3 = intl5.intl;
  string2 = intl3.string;
  t3 = intl5.t;
  const intl4 = intl5.intl;
  string3 = intl4.string;
  t4 = intl5.t;
  return obj;
};
export const computeProfileToActivityUpsell = function computeProfileToActivityUpsell(setting, NumberResult) {
  let ACTIVITY_STATUS_OFF = map.get(NumberResult);
  if (ACTIVITY_STATUS_OFF == null) {
    ACTIVITY_STATUS_OFF = preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF;
  }
  const DefaultGuildsActivityRestrictedV2 = UserSettings.DefaultGuildsActivityRestrictedV2;
  setting = DefaultGuildsActivityRestrictedV2.getSetting();
  if (setting === ACTIVITY_STATUS_OFF) {
    return null;
  } else {
    let ACTIVITY_STATUS_OFF2 = map.get(setting);
    if (ACTIVITY_STATUS_OFF2 == null) {
      ACTIVITY_STATUS_OFF2 = preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF;
    }
    let num = 2;
    let num2 = 2;
    if (preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF !== ACTIVITY_STATUS_OFF2) {
      num2 = 1;
      if (preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS !== ACTIVITY_STATUS_OFF2) {
        num2 = -1;
        if (preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON === ACTIVITY_STATUS_OFF2) {
          num2 = 0;
        }
      }
    }
    let num3 = num;
    if (preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF !== ACTIVITY_STATUS_OFF) {
      num3 = 1;
      if (preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS !== ACTIVITY_STATUS_OFF) {
        num3 = -1;
        if (preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON === ACTIVITY_STATUS_OFF) {
          num3 = 0;
        }
      }
    }
    let num4 = num;
    if (preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF !== setting) {
      num4 = 1;
      if (preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS !== setting) {
        num4 = -1;
        if (preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON === setting) {
          num4 = 0;
        }
      }
    }
    if (preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF !== ACTIVITY_STATUS_OFF) {
      num = 1;
      if (preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS !== ACTIVITY_STATUS_OFF) {
        num = -1;
        if (preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON === ACTIVITY_STATUS_OFF) {
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
        ({ affectedGuildIds: obj2.affectedGuildIds, direction: obj2.direction } = tmp7);
        const obj3 = { affectedGuildIds: null, direction: null, settingName: getProfileVisibilitySettingName(NumberResult), mappedActivityValue: ACTIVITY_STATUS_OFF };
        return obj3;
      }
    }
  }
};
export const sortGuildIdsByFrecency = function sortGuildIdsByFrecency(guildIds) {
  const items = [...guildIds];
  return items.sort((id, id2) => {
    const scoreWithoutFetchingLatest = FrecencyStore.getScoreWithoutFetchingLatest(id);
    return scoreWithoutFetchingLatest - FrecencyStore.getScoreWithoutFetchingLatest(id);
  });
};
export const applyBulkGuildRestrictionChange = function applyBulkGuildRestrictionChange(direction, affectedGuildIds) {
  const obj = UserSettingsUtils;
  const sanitizedActivityRestrictedGuilds = obj.getSanitizedActivityRestrictedGuilds();
  const self = this;
  set = new Set(affectedGuildIds);
  if (direction === obj.RESTRICTING) {
    const _Set = Set;
    const items = [];
    HermesBuiltin.arraySpread(items, tmp5, HermesBuiltin.arraySpread(items, sanitizedActivityRestrictedGuilds, 0));
    const self2 = this;
    const self3 = this;
    const set1 = new Set(items);
    const ActivityRestrictedGuilds2 = UserSettings.ActivityRestrictedGuilds;
    const items1 = [];
    const updateSetting = ActivityRestrictedGuilds2.updateSetting;
    HermesBuiltin.arraySpread(items1, set1, 0);
    updateSetting(items1);
  } else {
    const items2 = [];
    HermesBuiltin.arraySpread(items2, sanitizedActivityRestrictedGuilds, 0);
    const found = items2.filter((item) => !set.has(item));
    const ActivityRestrictedGuilds = UserSettings.ActivityRestrictedGuilds;
    ActivityRestrictedGuilds.updateSetting(found);
  }
};