// === Module 13901: computeAffectedGuilds ===

// Module 13901 (computeAffectedGuilds)
import handleChannelSelect from "handleChannelSelect";
import handleInviteData from "handleInviteData";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import insertUnsortedGuilds from "insertUnsortedGuilds";

const require = arg1;
function computeAffectedGuilds(setting, ACTIVITY_STATUS_OFF) {
  if (setting === ACTIVITY_STATUS_OFF) {
    return null;
  } else {
    let num2 = 2;
    let num = 2;
    if (EXPANDING(1306).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF !== setting) {
      num = 1;
      if (tmp8(1306).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS !== setting) {
        num = -1;
        if (tmp8(1306).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON === setting) {
          num = 0;
        }
      }
    }
    if (EXPANDING(1306).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF !== ACTIVITY_STATUS_OFF) {
      num2 = 1;
      if (tmp8(1306).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS !== ACTIVITY_STATUS_OFF) {
        num2 = -1;
        if (tmp8(1306).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON === ACTIVITY_STATUS_OFF) {
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
        const dependencyMap = tmp8(6509).getSanitizedActivityRestrictedGuilds();
        flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
        if (setting !== tmp8(1306).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF) {
          if (setting !== tmp8(1306).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS) {
            if (setting !== tmp8(1306).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON) {
              let str3 = "all";
              if (setting === tmp8(1306).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS) {
                str3 = "all";
              }
              let str = str3;
            }
            str3 = "small_only";
          } else {
            str = "large_only";
          }
        } else {
          str = "large_only";
        }
        const found = flattenedGuildIds.filter((arg0) => {
          if (null == outer1_4.getGuild(arg0)) {
            return false;
          } else {
            const hasItem = set.has(arg0);
            if (EXPANDING === outer1_6.RESTRICTING) {
              if (hasItem) {
                return false;
              }
            }
            if (EXPANDING === outer1_6.EXPANDING) {
              if (!hasItem) {
                return false;
              }
            }
            if ("all" === "all") {
              return true;
            } else {
              const memberCount = outer1_3.getMemberCount(arg0);
              if (null == memberCount) {
                let tmp4 = tmp7 === tmp8.RESTRICTING;
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
            const guild = store.getGuild(arg0);
            const guild1 = store.getGuild(arg1);
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
          obj = { affectedGuildIds: null, direction: null };
          obj[0] = found;
          obj[1] = EXPANDING;
          tmp4 = obj;
        }
        return tmp4;
      }
    }
    return null;
  }
}
function getProfileVisibilitySettingName(NumberResult) {
  if (require(1306) /* create */.ProfileVisibility.FRIENDS_AND_ALL_GUILDS === NumberResult) {
    const intl3 = tmp(1236).intl;
    return intl3.string(tmp(1236).t.Boxc8R).toLowerCase();
  } else if (tmp(1306).ProfileVisibility.FRIENDS_AND_SMALL_GUILDS === NumberResult) {
    const intl2 = tmp(1236).intl;
    return intl2.string(tmp(1236).t.YOIKBt).toLowerCase();
  } else if (tmp(1306).ProfileVisibility.FRIENDS_ONLY === NumberResult) {
    const intl = tmp(1236).intl;
    return intl.string(tmp(1236).t.u0nlJv).toLowerCase();
  } else {
    return "";
  }
}
let obj = { RESTRICTING: "restricting", EXPANDING: "expanding" };
let items = [require("create").ProfileVisibility.FRIENDS_AND_ALL_GUILDS, require("create").GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF];
let items1 = [items, , ];
let items2 = [require("create").ProfileVisibility.FRIENDS_AND_SMALL_GUILDS, require("create").GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS];
items1[1] = items2;
const items3 = [require("create").ProfileVisibility.FRIENDS_ONLY, require("create").GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON];
items1[2] = items3;
const map = new Map(items1);
const result = require("createGuildRecordFromRust").fileFinishedImporting("modules/activity_privacy/ActivityPrivacyUpsellUtils.tsx");

export const ChangeDirection = obj;
export const getPermissiveness = function getPermissiveness(arg0) {
  if (require(1306) /* create */.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF === arg0) {
    return 2;
  } else if (tmp(1306).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS === arg0) {
    return 1;
  } else if (tmp(1306).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON === arg0) {
    return 0;
  } else {
    return -1;
  }
};
export const profileVisibilityToActivityRestriction = function profileVisibilityToActivityRestriction(arg0) {
  let ACTIVITY_STATUS_OFF = map.get(arg0);
  if (ACTIVITY_STATUS_OFF == null) {
    ACTIVITY_STATUS_OFF = require(1306) /* create */.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF;
  }
  return ACTIVITY_STATUS_OFF;
};
export { computeAffectedGuilds };
export const getActivityRestrictionSettingName = function getActivityRestrictionSettingName(NumberResult) {
  if (require(1306) /* create */.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF === NumberResult) {
    const intl3 = tmp(1236).intl;
    return intl3.string(tmp(1236).t.FzgQna).toLowerCase();
  } else if (tmp(1306).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS === NumberResult) {
    const intl2 = tmp(1236).intl;
    return intl2.string(tmp(1236).t["1hvuGH"]).toLowerCase();
  } else if (tmp(1306).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON === NumberResult) {
    const intl = tmp(1236).intl;
    return intl.string(tmp(1236).t.fQc5la).toLowerCase();
  } else {
    return "";
  }
};
export { getProfileVisibilitySettingName };
export const getProfileToActivityUpsellStrings = function getProfileToActivityUpsellStrings(arg0, settingName) {
  const intl = require(1236) /* getSystemLocale */.intl;
  const t = require(1236) /* getSystemLocale */.t;
  let obj = { title: intl.string(arg0 ? t.eYDA7D : t["9jYwjo"]), subtitle: null, confirmText: null, toastContent: null };
  const intl2 = tmp(1236).intl;
  const t2 = tmp(1236).t;
  obj = { settingName };
  obj[1] = intl2.format(arg0 ? t2["c5/jDc"] : t2.ajzh8S, obj);
  const intl3 = tmp(1236).intl;
  const t3 = tmp(1236).t;
  obj[2] = intl3.string(arg0 ? t3["6uPZV1"] : t3.a9PIyD);
  const intl4 = tmp(1236).intl;
  const t4 = tmp(1236).t;
  obj[3] = intl4.string(arg0 ? t4.AdpgML : t4["Q7E+QF"]);
  return obj;
};
export const getUpsellStrings = function getUpsellStrings(arg0, settingName) {
  const intl = require(1236) /* getSystemLocale */.intl;
  const t = require(1236) /* getSystemLocale */.t;
  let obj = { title: intl.string(arg0 ? t.jRx1Aa : t.S0Y0bh), subtitle: null, confirmText: null, toastContent: null };
  const intl2 = tmp(1236).intl;
  const t2 = tmp(1236).t;
  obj = { settingName };
  obj[1] = intl2.format(arg0 ? t2.Fs96LO : t2.GcoYX8, obj);
  const intl3 = tmp(1236).intl;
  const t3 = tmp(1236).t;
  obj[2] = intl3.string(arg0 ? t3["4DM5HJ"] : t3.WRrDtI);
  const intl4 = tmp(1236).intl;
  const t4 = tmp(1236).t;
  obj[3] = intl4.string(arg0 ? t4.AdpgML : t4["Q7E+QF"]);
  return obj;
};
export const computeProfileToActivityUpsell = function computeProfileToActivityUpsell(setting, NumberResult) {
  let obj = map;
  let ACTIVITY_STATUS_OFF = map.get(NumberResult);
  if (ACTIVITY_STATUS_OFF == null) {
    ACTIVITY_STATUS_OFF = require(1306) /* create */.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF;
  }
  const DefaultGuildsActivityRestrictedV2 = require(3866) /* explicitContentFromProto */.DefaultGuildsActivityRestrictedV2;
  setting = DefaultGuildsActivityRestrictedV2.getSetting();
  if (setting === ACTIVITY_STATUS_OFF) {
    return null;
  } else {
    let ACTIVITY_STATUS_OFF2 = obj.get(setting);
    if (ACTIVITY_STATUS_OFF2 == null) {
      ACTIVITY_STATUS_OFF2 = tmp3(1306).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF;
    }
    let num = 2;
    let num2 = 2;
    if (tmp3(1306).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF !== ACTIVITY_STATUS_OFF2) {
      num2 = 1;
      if (tmp3(1306).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS !== ACTIVITY_STATUS_OFF2) {
        num2 = -1;
        if (tmp3(1306).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON === ACTIVITY_STATUS_OFF2) {
          num2 = 0;
        }
      }
    }
    let num3 = num;
    if (tmp3(1306).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF !== ACTIVITY_STATUS_OFF) {
      num3 = 1;
      if (tmp3(1306).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS !== ACTIVITY_STATUS_OFF) {
        num3 = -1;
        if (tmp3(1306).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON === ACTIVITY_STATUS_OFF) {
          num3 = 0;
        }
      }
    }
    let num4 = num;
    if (tmp3(1306).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF !== setting) {
      num4 = 1;
      if (tmp3(1306).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS !== setting) {
        num4 = -1;
        if (tmp3(1306).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON === setting) {
          num4 = 0;
        }
      }
    }
    if (tmp3(1306).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF !== ACTIVITY_STATUS_OFF) {
      num = 1;
      if (tmp3(1306).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS !== ACTIVITY_STATUS_OFF) {
        num = -1;
        if (tmp3(1306).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON === ACTIVITY_STATUS_OFF) {
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
        ({ affectedGuildIds: obj2[0], direction: obj2[1] } = tmp7);
        obj[2] = getProfileVisibilitySettingName(NumberResult);
        obj[3] = ACTIVITY_STATUS_OFF;
        return obj;
      }
    }
  }
};
export const sortGuildIdsByFrecency = function sortGuildIdsByFrecency(guildIds) {
  const items = [...guildIds];
  return items.sort((id, id) => {
    const scoreWithoutFetchingLatest = store.getScoreWithoutFetchingLatest(id);
    return scoreWithoutFetchingLatest - store.getScoreWithoutFetchingLatest(id);
  });
};
export const applyBulkGuildRestrictionChange = function applyBulkGuildRestrictionChange(direction, affectedGuildIds) {
  const obj = set(6509);
  const sanitizedActivityRestrictedGuilds = obj.getSanitizedActivityRestrictedGuilds();
  set = new Set(affectedGuildIds);
  if (direction === obj.RESTRICTING) {
    const _Set = Set;
    const items = [];
    HermesBuiltin.arraySpread(tmp5, HermesBuiltin.arraySpread(sanitizedActivityRestrictedGuilds, 0));
    const set1 = new Set(items);
    const ActivityRestrictedGuilds2 = tmp(3866).ActivityRestrictedGuilds;
    const items1 = [];
    HermesBuiltin.arraySpread(set1, 0);
    ActivityRestrictedGuilds2.updateSetting(items1);
  } else {
    const items2 = [];
    HermesBuiltin.arraySpread(sanitizedActivityRestrictedGuilds, 0);
    const found = items2.filter((arg0) => !set.has(arg0));
    const ActivityRestrictedGuilds = tmp(3866).ActivityRestrictedGuilds;
    ActivityRestrictedGuilds.updateSetting(found);
  }
};