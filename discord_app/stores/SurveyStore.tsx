// === Module 4751: SurveyStore ===

// Module 4751 (SurveyStore)
import initializeDefault from "initialize" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import DurationsDefault from "Durations" /* 1090 */;
import _modDef4153 from "module_4153" /* 4153 */;
import SurveyActionCreators from "SurveyActionCreators" /* 4752 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4480 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function fetchSurveyIfNeeded() {
  let tmp = c18;
  if (!c18) {
    let tmp4 = null == closure_13.lastFetched;
    if (!tmp4) {
      const _Date = Date;
      tmp4 = Date.now() - closure_13.lastFetched >= DAY;
    }
    let tmp8 = !tmp4;
    if (!tmp4) {
      tmp8 = null == closure_13.surveyOverride;
    }
    tmp = tmp8;
  }
  if (!tmp) {
    c18 = true;
    SurveyActionCreators.surveyFetch(closure_13.surveyOverride, true);
  }
}
function setSurvey(survey) {
  survey = survey.survey;
  c18 = false;
  closure_13.lastFetched = Date.now();
  if (survey.isActionTriggered) {
    const _Date = Date;
    closure_13.lastActionTriggered = Date.now();
  }
  if (null == closure_13.hiddenSurveys) {
    closure_13.hiddenSurveys = {};
  }
  let tmp3 = null != survey;
  let tmp4 = tmp3;
  if (tmp3) {
    tmp4 = null == closure_13.hiddenSurveys[survey.key];
  }
  if (tmp3) {
    tmp3 = (function meetsGuildRequirements(c17) {
      let guild_requirements = c17.guild_requirements;
      if (undefined === guild_requirements) {
        guild_requirements = [];
      }
      let guild_size = c17.guild_size;
      if (undefined === guild_size) {
        guild_size = [null, null];
      }
      let guild_permissions = c17.guild_permissions;
      if (undefined === guild_permissions) {
        guild_permissions = [];
      }
      if (0 === guild_requirements.length) {
        return true;
      } else {
        for (const item10017 of guild_requirements) {
          if (set.has(item10017)) {
            continue;
          } else {
            obj2.return();
            let flag = false;
            return false;
          }
        }
        const hasItem = guild_requirements.includes(constants3.GUILD_SIZE_ALL);
        let flag3 = true;
        guildsArray = guildsArray.getGuildsArray();
        const iter = guildsArray[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp14 = nextResult;
          if (hasItem) {
            memberCount = memberCount.getMemberCount(tmp14.id);
            let tmp20 = memberCount;
            if (null == memberCount) {
              flag3 = false;
              continue;
            } else {
              if (null != guild_size[0]) {
                if (tmp20 < guild_size[0]) {
                  flag3 = false;
                  continue;
                }
              }
              if (null != guild_size[1]) {
                if (tmp20 > guild_size[1]) {
                  flag3 = false;
                  continue;
                }
              }
            }
          }
          if (!guild_requirements.includes(constants3.IS_COMMUNITY)) {
            if (!guild_requirements.includes(constants3.IS_HUB)) {
              if (!guild_requirements.includes(constants3.GUILD_PERMISSIONS)) {
                currentUser = currentUser.getCurrentUser();
                let id;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                let tmp44 = id === tmp14.ownerId;
                let canResult = PermissionStore.can(constants2.ADMINISTRATOR, tmp14);
                if (!guild_requirements.includes(constants3.IS_OWNER)) {
                  if (!guild_requirements.includes(constants3.IS_ADMIN)) {
                    if (obj == null) {
                      obj = {};
                    }
                    if (null == obj[c17.key]) {
                      obj[c17.key] = c17;
                    }
                    guildId = guildId.getGuildId();
                    let tmp57 = null != guildId;
                    if (tmp57) {
                      tmp57 = tmp56 === tmp14.id;
                    }
                    if (!guild_requirements.includes(constants3.IS_VIEWING)) {
                      if (!hasItem) {
                        iter.return();
                        return true;
                      }
                    }
                  }
                }
              } else if (0 === guild_permissions.length) {
                continue;
              } else {
                let flag5 = false;
                for (const item10086 of guild_permissions) {
                  let deserializer = BigFlagUtilsAll;
                  if (PermissionStore.can(deserializer.deserialize(item10086), tmp14)) {
                    flag5 = true;
                    obj3.return();
                    break;
                  }
                  continue;
                }
                continue;
              }
              continue;
            } else {
              let features2 = tmp14.features;
            }
          } else {
            let features = tmp14.features;
          }
          continue;
        }
        if (hasItem) {
          if (flag3) {
            return true;
          }
        }
        return false;
      }
    })(survey);
  }
  let tmp6 = c14;
  if (!c14) {
    tmp6 = c15;
  }
  const Storage = Storage2.Storage;
  value = Storage.get(closure_1_11);
  let tmp9 = null == value;
  if (!tmp9) {
    tmp9 = _modDef4153().diff(value, "day") < 7;
    obj = _modDef4153();
  }
  let tmp11 = null;
  if (tmp4) {
    tmp11 = null;
    if (tmp3) {
      tmp11 = null;
      if (!tmp6) {
        tmp11 = null;
        if (!tmp9) {
          tmp11 = survey;
        }
      }
    }
  }
  c17 = tmp11;
}
function handleSelectedGuildChange() {
  if (null != c17) {
    let flag = (function meetsGuildRequirements(c17) {
      let guild_requirements = c17.guild_requirements;
      if (undefined === guild_requirements) {
        guild_requirements = [];
      }
      let guild_size = c17.guild_size;
      if (undefined === guild_size) {
        guild_size = [null, null];
      }
      let guild_permissions = c17.guild_permissions;
      if (undefined === guild_permissions) {
        guild_permissions = [];
      }
      if (0 === guild_requirements.length) {
        return true;
      } else {
        for (const item10017 of guild_requirements) {
          if (set.has(item10017)) {
            continue;
          } else {
            obj2.return();
            let flag = false;
            return false;
          }
        }
        const hasItem = guild_requirements.includes(constants3.GUILD_SIZE_ALL);
        let flag3 = true;
        guildsArray = guildsArray.getGuildsArray();
        const iter = guildsArray[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp14 = nextResult;
          if (hasItem) {
            memberCount = memberCount.getMemberCount(tmp14.id);
            let tmp20 = memberCount;
            if (null == memberCount) {
              flag3 = false;
              continue;
            } else {
              if (null != guild_size[0]) {
                if (tmp20 < guild_size[0]) {
                  flag3 = false;
                  continue;
                }
              }
              if (null != guild_size[1]) {
                if (tmp20 > guild_size[1]) {
                  flag3 = false;
                  continue;
                }
              }
            }
          }
          if (!guild_requirements.includes(constants3.IS_COMMUNITY)) {
            if (!guild_requirements.includes(constants3.IS_HUB)) {
              if (!guild_requirements.includes(constants3.GUILD_PERMISSIONS)) {
                currentUser = currentUser.getCurrentUser();
                let id;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                let tmp44 = id === tmp14.ownerId;
                let canResult = PermissionStore.can(constants2.ADMINISTRATOR, tmp14);
                if (!guild_requirements.includes(constants3.IS_OWNER)) {
                  if (!guild_requirements.includes(constants3.IS_ADMIN)) {
                    if (obj == null) {
                      obj = {};
                    }
                    if (null == obj[c17.key]) {
                      obj[c17.key] = c17;
                    }
                    guildId = guildId.getGuildId();
                    let tmp57 = null != guildId;
                    if (tmp57) {
                      tmp57 = tmp56 === tmp14.id;
                    }
                    if (!guild_requirements.includes(constants3.IS_VIEWING)) {
                      if (!hasItem) {
                        iter.return();
                        return true;
                      }
                    }
                  }
                }
              } else if (0 === guild_permissions.length) {
                continue;
              } else {
                let flag5 = false;
                for (const item10086 of guild_permissions) {
                  let deserializer = BigFlagUtilsAll;
                  if (PermissionStore.can(deserializer.deserialize(item10086), tmp14)) {
                    flag5 = true;
                    obj3.return();
                    break;
                  }
                  continue;
                }
                continue;
              }
              continue;
            } else {
              let features2 = tmp14.features;
            }
          } else {
            let features = tmp14.features;
          }
          continue;
        }
        if (hasItem) {
          if (flag3) {
            return true;
          }
        }
        return false;
      }
    })(c17);
    if (!flag) {
      c17 = null;
      flag = false;
    }
    if (flag) {
      return false;
    }
  }
  if (obj == null) {
    obj = {};
  }
  const first = Object.values(obj)[0];
  if (null != first) {
    if ((function meetsGuildRequirements(c17) {
      let guild_requirements = c17.guild_requirements;
      if (undefined === guild_requirements) {
        guild_requirements = [];
      }
      let guild_size = c17.guild_size;
      if (undefined === guild_size) {
        guild_size = [null, null];
      }
      let guild_permissions = c17.guild_permissions;
      if (undefined === guild_permissions) {
        guild_permissions = [];
      }
      if (0 === guild_requirements.length) {
        return true;
      } else {
        for (const item10017 of guild_requirements) {
          if (set.has(item10017)) {
            continue;
          } else {
            obj2.return();
            let flag = false;
            return false;
          }
        }
        const hasItem = guild_requirements.includes(constants3.GUILD_SIZE_ALL);
        let flag3 = true;
        guildsArray = guildsArray.getGuildsArray();
        const iter = guildsArray[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp14 = nextResult;
          if (hasItem) {
            memberCount = memberCount.getMemberCount(tmp14.id);
            let tmp20 = memberCount;
            if (null == memberCount) {
              flag3 = false;
              continue;
            } else {
              if (null != guild_size[0]) {
                if (tmp20 < guild_size[0]) {
                  flag3 = false;
                  continue;
                }
              }
              if (null != guild_size[1]) {
                if (tmp20 > guild_size[1]) {
                  flag3 = false;
                  continue;
                }
              }
            }
          }
          if (!guild_requirements.includes(constants3.IS_COMMUNITY)) {
            if (!guild_requirements.includes(constants3.IS_HUB)) {
              if (!guild_requirements.includes(constants3.GUILD_PERMISSIONS)) {
                currentUser = currentUser.getCurrentUser();
                let id;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                let tmp44 = id === tmp14.ownerId;
                let canResult = PermissionStore.can(constants2.ADMINISTRATOR, tmp14);
                if (!guild_requirements.includes(constants3.IS_OWNER)) {
                  if (!guild_requirements.includes(constants3.IS_ADMIN)) {
                    if (obj == null) {
                      obj = {};
                    }
                    if (null == obj[c17.key]) {
                      obj[c17.key] = c17;
                    }
                    guildId = guildId.getGuildId();
                    let tmp57 = null != guildId;
                    if (tmp57) {
                      tmp57 = tmp56 === tmp14.id;
                    }
                    if (!guild_requirements.includes(constants3.IS_VIEWING)) {
                      if (!hasItem) {
                        iter.return();
                        return true;
                      }
                    }
                  }
                }
              } else if (0 === guild_permissions.length) {
                continue;
              } else {
                let flag5 = false;
                for (const item10086 of guild_permissions) {
                  let deserializer = BigFlagUtilsAll;
                  if (PermissionStore.can(deserializer.deserialize(item10086), tmp14)) {
                    flag5 = true;
                    obj3.return();
                    break;
                  }
                  continue;
                }
                continue;
              }
              continue;
            } else {
              let features2 = tmp14.features;
            }
          } else {
            let features = tmp14.features;
          }
          continue;
        }
        if (hasItem) {
          if (flag3) {
            return true;
          }
        }
        return false;
      }
    })(first)) {
      obj = { type: "SURVEY_FETCHED", survey: first };
      setSurvey(obj);
    }
  }
  if (null != c17) {
    c17 = null;
  }
}
const Constants = fn(1074);
({ GuildFeatures: closure_9, Permissions: c10, FIRST_RUN_DATE_KEY: closure_11 } = Constants);
let obj = { hiddenSurveys: {}, surveyOverride: null, lastFetched: null, lastSeen: null, lastActionTriggered: null };
let closure_13 = obj;
let c14 = false;
let c15 = false;
obj = {};
let c17 = null;
let c18 = false;
let c19 = null;
const DAY = DurationsDefault.Millis.DAY;
const result = 10 * DurationsDefault.Millis.HOUR;
obj = { IS_OWNER: "is_owner", IS_ADMIN: "is_admin", IS_COMMUNITY: "is_community", GUILD_SIZE: "guild_size", IS_HUB: "is_hub", IS_VIEWING: "is_viewing", GUILD_PERMISSIONS: "guild_permissions", GUILD_SIZE_ALL: "guild_size_all" };
const set = new Set(Object.values(obj));
const PersistedStore = initializeDefault.PersistedStore;
class SurveyStore extends PersistedStore {
}
const prototype = SurveyStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  const self = this;
  let tmp = arg0;
  this.waitFor(GuildMemberCountStore, GuildStore, PermissionStore, SelectedGuildStore, UserStore);
  if (arg0 == null) {
    tmp = obj;
  }
  closure_13 = tmp;
  const items = [SelectedGuildStore];
  self.syncWith(items, handleSelectedGuildChange);
};
prototype["getState"] = function getState() {
  return closure_13;
};
prototype["getCurrentSurvey"] = function getCurrentSurvey() {
  let tmp = null == closure_13.lastFetched;
  if (!tmp) {
    const _Date = Date;
    tmp = Date.now() - closure_13.lastFetched >= DAY;
  }
  let tmp5 = null;
  if (!tmp) {
    tmp5 = c17;
  }
  return tmp5;
};
prototype["getSurveyOverride"] = function getSurveyOverride() {
  return closure_13.surveyOverride;
};
prototype["getActionTriggeredSurveyOverride"] = function getActionTriggeredSurveyOverride() {
  return c19;
};
prototype["getLastSeenTimestamp"] = function getLastSeenTimestamp() {
  return closure_13.lastSeen;
};
prototype["shouldAllowSurveyAction"] = function shouldAllowSurveyAction() {
  let num = closure_13.lastActionTriggered;
  const timestamp = Date.now();
  if (num == null) {
    num = 0;
  }
  return timestamp - num >= result;
};
SurveyStore.displayName = "SurveyStore";
SurveyStore.persistKey = "SurveyStore";
let items = [
  (arg0) => {
    const merged = Object.assign(arg0);
    delete tmp[tmp2];
    delete tmp[tmp2];
    delete tmp[tmp2];
    delete tmp[tmp2];
    delete tmp[tmp2];
    return {};
  },
  (lastSeen) => {
    obj = {};
    const merged = Object.assign(lastSeen);
    lastSeen = lastSeen.lastSeen;
    if (lastSeen == null) {
      lastSeen = null;
    }
    obj.lastSeen = lastSeen;
    return obj;
  },
  (hiddenSurveys) => {
    obj = {};
    const merged = Object.assign(hiddenSurveys);
    hiddenSurveys = hiddenSurveys.hiddenSurveys;
    if (hiddenSurveys == null) {
      hiddenSurveys = {};
    }
    obj.hiddenSurveys = hiddenSurveys;
    return obj;
  }
];
SurveyStore.migrations = items;
obj = {
  CONNECTION_OPEN: fetchSurveyIfNeeded,
  CONNECTION_RESUMED: fetchSurveyIfNeeded,
  SURVEY_FETCHED: setSurvey,
  SURVEY_HIDE: function handleSurveyHide(key) {
    closure_13.hiddenSurveys[key.key] = true;
    c17 = null;
    if (obj == null) {
      obj = {};
    }
    delete tmp[tmp2];
  },
  SURVEY_OVERRIDE: function handleSurveyOverride(id) {
    id = id.id;
    if (id.isActionTriggered) {
      c19 = id;
      if (null != id) {
        const hiddenSurveys2 = closure_13.hiddenSurveys;
        delete tmp[tmp2];
      }
    } else {
      c19 = null;
      closure_13.surveyOverride = id;
      if (null != id) {
        const hiddenSurveys = closure_13.hiddenSurveys;
        delete tmp3[tmp2];
      }
      SurveyActionCreators.surveyFetch(closure_13.surveyOverride, true);
    }
  },
  PUSH_NOTIFICATION_CLICK: function handlePushNotificationClick() {
    c14 = true;
  },
  DISPLAYED_INVITE_SHOW: function handleInviteShow() {
    c15 = true;
  },
  LOGOUT: function handleLogout() {
    closure_13.hiddenSurveys = {};
  },
  SURVEY_SEEN: function handleSurveySeen() {
    closure_13.lastSeen = Date.now();
  }
};
const surveyStore = new SurveyStore(DispatcherDefault, obj);
const size = fn(2);
const result1 = size.fileFinishedImporting("stores/SurveyStore.tsx");

export default surveyStore;
export const SURVEY_REFETCH_INTERVAL = DAY;
export const SURVEY_ACTION_INTERVAL = result;