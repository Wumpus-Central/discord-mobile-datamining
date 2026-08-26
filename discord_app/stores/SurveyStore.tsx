// === Module 4663: fetchSurveyIfNeeded ===

// Module 4663 (fetchSurveyIfNeeded)
import initializeDefault from "initialize" /* 589 */;
import Storage2 from "Storage" /* 595 */;
import setDefault from "set" /* 687 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import hooksDefault from "hooks" /* 4043 */;
import overrideSurvey from "overrideSurvey" /* 4664 */;
import closure_4 from "handleInviteData" /* 4364 */;
import closure_5 from "createGuildRecordFromRust" /* 1910 */;
import closure_6 from "getUncachedChannelPermissions" /* 4089 */;
import closure_7 from "handleConnectionOpen" /* 4266 */;
import closure_8 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import set from "set" /* 2 */;

require = arg1;
function fetchSurveyIfNeeded() {
  let tmp = c18;
  if (!c18) {
    let tmp4 = null == obj.lastFetched;
    if (!tmp4) {
      const _Date = Date;
      tmp4 = Date.now() - obj.lastFetched >= DAY;
    }
    let tmp8 = !tmp4;
    if (!tmp4) {
      tmp8 = null == obj.surveyOverride;
    }
    tmp = tmp8;
  }
  if (!tmp) {
    c18 = true;
    obj = overrideSurvey;
    obj.surveyFetch(obj.surveyOverride, true);
  }
}
function setSurvey(survey) {
  survey = survey.survey;
  c18 = false;
  obj.lastFetched = Date.now();
  if (survey.isActionTriggered) {
    const _Date = Date;
    obj.lastActionTriggered = Date.now();
  }
  if (null == obj.hiddenSurveys) {
    obj.hiddenSurveys = {};
  }
  let tmp3 = null != survey;
  let tmp4 = tmp3;
  if (tmp3) {
    tmp4 = null == obj.hiddenSurveys[survey.key];
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
          let tmp2 = set;
          if (set.has(item10017)) {
            continue;
          } else {
            let tmp3 = obj3;
            obj3.return();
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
            let tmp17 = memberCount;
            let tmp18 = nextResult;
            memberCount = memberCount.getMemberCount(tmp14.id);
            let tmp20 = memberCount;
            if (null == memberCount) {
              flag3 = false;
              continue;
            } else {
              if (null != guild_size[0]) {
                let tmp21 = memberCount;
                if (tmp20 < guild_size[0]) {
                  flag3 = false;
                  continue;
                }
              }
              if (null != guild_size[1]) {
                let tmp22 = memberCount;
                if (tmp20 > guild_size[1]) {
                  flag3 = false;
                  continue;
                }
              }
            }
          } else {
            let tmp15 = constants3;
            let tmp16 = constants3;
          }
          let tmp23 = constants3;
          let tmp24 = constants3;
          if (!guild_requirements.includes(constants3.IS_COMMUNITY)) {
            let tmp27 = tmp23;
            if (!guild_requirements.includes(tmp24.IS_HUB)) {
              let tmp30 = tmp23;
              if (!guild_requirements.includes(tmp24.GUILD_PERMISSIONS)) {
                let tmp40 = currentUser;
                currentUser = currentUser.getCurrentUser();
                let id;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                let tmp43 = nextResult;
                let tmp44 = id === tmp14.ownerId;
                let tmp45 = closure_6;
                let tmp46 = constants2;
                let canResult = closure_6.can(constants2.ADMINISTRATOR, tmp14);
                let tmp48 = constants3;
                let tmp49 = constants3;
                if (!guild_requirements.includes(constants3.IS_OWNER)) {
                  let tmp51 = tmp48;
                  if (!guild_requirements.includes(tmp49.IS_ADMIN)) {
                    if (obj == null) {
                      obj = {};
                    }
                    if (null == obj[c17.key]) {
                      let tmp53 = obj;
                      obj[c17.key] = c17;
                    }
                    let tmp54 = guildId;
                    guildId = guildId.getGuildId();
                    let tmp57 = null != guildId;
                    if (tmp57) {
                      let tmp58 = guildId;
                      let tmp59 = nextResult;
                      tmp57 = tmp56 === tmp14.id;
                    }
                    let tmp61 = tmp48;
                    let tmp60 = tmp57;
                    if (!guild_requirements.includes(tmp49.IS_VIEWING)) {
                      if (!hasItem) {
                        let tmp63 = iter;
                        iter.return();
                        return true;
                      }
                    } else {
                      let tmp62 = tmp57;
                    }
                  } else {
                    let tmp52 = canResult;
                  }
                } else {
                  let tmp50 = tmp44;
                }
              } else if (0 === guild_permissions.length) {
                continue;
              } else {
                let flag5 = false;
                let tmp65 = guild_permissions;
                let tmp31 = guild_permissions;
                for (const item10086 of guild_permissions) {
                  let tmp33 = callback;
                  let tmp34 = table;
                  let tmp32 = item10086;
                  obj = callback(table[8]);
                  let tmp35 = item10086;
                  let tmp36 = closure_6;
                  let tmp37 = nextResult;
                  if (closure_6.can(obj.deserialize(tmp32), tmp14)) {
                    flag5 = true;
                    let tmp38 = obj4;
                    obj4.return();
                    break;
                  }
                  continue;
                }
                let tmp39 = flag5;
                continue;
              }
              continue;
            } else {
              let tmp28 = nextResult;
              let features2 = tmp14.features;
              let tmp29 = constants;
            }
          } else {
            let tmp25 = nextResult;
            let features = tmp14.features;
            let tmp26 = constants;
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
  const value = Storage.get(closure_11);
  let tmp9 = null == value;
  if (!tmp9) {
    obj = hooksDefault();
    tmp9 = obj.diff(value, "day") < 7;
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
  survey = tmp11;
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
          let tmp2 = set;
          if (set.has(item10017)) {
            continue;
          } else {
            let tmp3 = obj3;
            obj3.return();
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
            let tmp17 = memberCount;
            let tmp18 = nextResult;
            memberCount = memberCount.getMemberCount(tmp14.id);
            let tmp20 = memberCount;
            if (null == memberCount) {
              flag3 = false;
              continue;
            } else {
              if (null != guild_size[0]) {
                let tmp21 = memberCount;
                if (tmp20 < guild_size[0]) {
                  flag3 = false;
                  continue;
                }
              }
              if (null != guild_size[1]) {
                let tmp22 = memberCount;
                if (tmp20 > guild_size[1]) {
                  flag3 = false;
                  continue;
                }
              }
            }
          } else {
            let tmp15 = constants3;
            let tmp16 = constants3;
          }
          let tmp23 = constants3;
          let tmp24 = constants3;
          if (!guild_requirements.includes(constants3.IS_COMMUNITY)) {
            let tmp27 = tmp23;
            if (!guild_requirements.includes(tmp24.IS_HUB)) {
              let tmp30 = tmp23;
              if (!guild_requirements.includes(tmp24.GUILD_PERMISSIONS)) {
                let tmp40 = currentUser;
                currentUser = currentUser.getCurrentUser();
                let id;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                let tmp43 = nextResult;
                let tmp44 = id === tmp14.ownerId;
                let tmp45 = closure_6;
                let tmp46 = constants2;
                let canResult = closure_6.can(constants2.ADMINISTRATOR, tmp14);
                let tmp48 = constants3;
                let tmp49 = constants3;
                if (!guild_requirements.includes(constants3.IS_OWNER)) {
                  let tmp51 = tmp48;
                  if (!guild_requirements.includes(tmp49.IS_ADMIN)) {
                    if (obj == null) {
                      obj = {};
                    }
                    if (null == obj[c17.key]) {
                      let tmp53 = obj;
                      obj[c17.key] = c17;
                    }
                    let tmp54 = guildId;
                    guildId = guildId.getGuildId();
                    let tmp57 = null != guildId;
                    if (tmp57) {
                      let tmp58 = guildId;
                      let tmp59 = nextResult;
                      tmp57 = tmp56 === tmp14.id;
                    }
                    let tmp61 = tmp48;
                    let tmp60 = tmp57;
                    if (!guild_requirements.includes(tmp49.IS_VIEWING)) {
                      if (!hasItem) {
                        let tmp63 = iter;
                        iter.return();
                        return true;
                      }
                    } else {
                      let tmp62 = tmp57;
                    }
                  } else {
                    let tmp52 = canResult;
                  }
                } else {
                  let tmp50 = tmp44;
                }
              } else if (0 === guild_permissions.length) {
                continue;
              } else {
                let flag5 = false;
                let tmp65 = guild_permissions;
                let tmp31 = guild_permissions;
                for (const item10086 of guild_permissions) {
                  let tmp33 = callback;
                  let tmp34 = table;
                  let tmp32 = item10086;
                  obj = callback(table[8]);
                  let tmp35 = item10086;
                  let tmp36 = closure_6;
                  let tmp37 = nextResult;
                  if (closure_6.can(obj.deserialize(tmp32), tmp14)) {
                    flag5 = true;
                    let tmp38 = obj4;
                    obj4.return();
                    break;
                  }
                  continue;
                }
                let tmp39 = flag5;
                continue;
              }
              continue;
            } else {
              let tmp28 = nextResult;
              let features2 = tmp14.features;
              let tmp29 = constants;
            }
          } else {
            let tmp25 = nextResult;
            let features = tmp14.features;
            let tmp26 = constants;
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
          let tmp2 = set;
          if (set.has(item10017)) {
            continue;
          } else {
            let tmp3 = obj3;
            obj3.return();
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
            let tmp17 = memberCount;
            let tmp18 = nextResult;
            memberCount = memberCount.getMemberCount(tmp14.id);
            let tmp20 = memberCount;
            if (null == memberCount) {
              flag3 = false;
              continue;
            } else {
              if (null != guild_size[0]) {
                let tmp21 = memberCount;
                if (tmp20 < guild_size[0]) {
                  flag3 = false;
                  continue;
                }
              }
              if (null != guild_size[1]) {
                let tmp22 = memberCount;
                if (tmp20 > guild_size[1]) {
                  flag3 = false;
                  continue;
                }
              }
            }
          } else {
            let tmp15 = constants3;
            let tmp16 = constants3;
          }
          let tmp23 = constants3;
          let tmp24 = constants3;
          if (!guild_requirements.includes(constants3.IS_COMMUNITY)) {
            let tmp27 = tmp23;
            if (!guild_requirements.includes(tmp24.IS_HUB)) {
              let tmp30 = tmp23;
              if (!guild_requirements.includes(tmp24.GUILD_PERMISSIONS)) {
                let tmp40 = currentUser;
                currentUser = currentUser.getCurrentUser();
                let id;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                let tmp43 = nextResult;
                let tmp44 = id === tmp14.ownerId;
                let tmp45 = closure_6;
                let tmp46 = constants2;
                let canResult = closure_6.can(constants2.ADMINISTRATOR, tmp14);
                let tmp48 = constants3;
                let tmp49 = constants3;
                if (!guild_requirements.includes(constants3.IS_OWNER)) {
                  let tmp51 = tmp48;
                  if (!guild_requirements.includes(tmp49.IS_ADMIN)) {
                    if (obj == null) {
                      obj = {};
                    }
                    if (null == obj[c17.key]) {
                      let tmp53 = obj;
                      obj[c17.key] = c17;
                    }
                    let tmp54 = guildId;
                    guildId = guildId.getGuildId();
                    let tmp57 = null != guildId;
                    if (tmp57) {
                      let tmp58 = guildId;
                      let tmp59 = nextResult;
                      tmp57 = tmp56 === tmp14.id;
                    }
                    let tmp61 = tmp48;
                    let tmp60 = tmp57;
                    if (!guild_requirements.includes(tmp49.IS_VIEWING)) {
                      if (!hasItem) {
                        let tmp63 = iter;
                        iter.return();
                        return true;
                      }
                    } else {
                      let tmp62 = tmp57;
                    }
                  } else {
                    let tmp52 = canResult;
                  }
                } else {
                  let tmp50 = tmp44;
                }
              } else if (0 === guild_permissions.length) {
                continue;
              } else {
                let flag5 = false;
                let tmp65 = guild_permissions;
                let tmp31 = guild_permissions;
                for (const item10086 of guild_permissions) {
                  let tmp33 = callback;
                  let tmp34 = table;
                  let tmp32 = item10086;
                  obj = callback(table[8]);
                  let tmp35 = item10086;
                  let tmp36 = closure_6;
                  let tmp37 = nextResult;
                  if (closure_6.can(obj.deserialize(tmp32), tmp14)) {
                    flag5 = true;
                    let tmp38 = obj4;
                    obj4.return();
                    break;
                  }
                  continue;
                }
                let tmp39 = flag5;
                continue;
              }
              continue;
            } else {
              let tmp28 = nextResult;
              let features2 = tmp14.features;
              let tmp29 = constants;
            }
          } else {
            let tmp25 = nextResult;
            let features = tmp14.features;
            let tmp26 = constants;
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
      obj = { type: "SURVEY_FETCHED", survey: null };
      obj[1] = first;
      setSurvey(obj);
    }
  }
  if (null != c17) {
    c17 = null;
  }
}
({ GuildFeatures: c9, Permissions: c10, FIRST_RUN_DATE_KEY: unpackModuleId } = ME);
let obj = { hiddenSurveys: {}, surveyOverride: null, lastFetched: null, lastSeen: null, lastActionTriggered: null };
let c14 = false;
let c15 = false;
let closure_16 = {};
let c17 = null;
let c18 = false;
const DAY = setDefault.Millis.DAY;
const result = 10 * setDefault.Millis.HOUR;
obj = { IS_OWNER: "is_owner", IS_ADMIN: "is_admin", IS_COMMUNITY: "is_community", GUILD_SIZE: "guild_size", IS_HUB: "is_hub", IS_VIEWING: "is_viewing", GUILD_PERMISSIONS: "guild_permissions", GUILD_SIZE_ALL: "guild_size_all" };
let set = new Set(Object.values(obj));
const PersistedStore = initializeDefault.PersistedStore;
class SurveyStore extends PersistedStore {
}
const prototype = SurveyStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  const self = this;
  let tmp = arg0;
  this.waitFor(closure_4, closure_5, closure_6, closure_7, closure_8);
  if (arg0 == null) {
    tmp = obj;
  }
  closure_13 = tmp;
  const items = [closure_7];
  self.syncWith(items, handleSelectedGuildChange);
};
prototype["getState"] = function getState() {
  return obj;
};
prototype["getCurrentSurvey"] = function getCurrentSurvey() {
  let tmp = null == obj.lastFetched;
  if (!tmp) {
    const _Date = Date;
    tmp = Date.now() - obj.lastFetched >= DAY;
  }
  let tmp5 = null;
  if (!tmp) {
    tmp5 = c17;
  }
  return tmp5;
};
prototype["getSurveyOverride"] = function getSurveyOverride() {
  return obj.surveyOverride;
};
prototype["getLastSeenTimestamp"] = function getLastSeenTimestamp() {
  return obj.lastSeen;
};
prototype["shouldAllowSurveyAction"] = function shouldAllowSurveyAction() {
  let num = obj.lastActionTriggered;
  const timestamp = Date.now();
  if (num == null) {
    num = 0;
  }
  return timestamp - num >= closure_20;
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
    obj.hiddenSurveys[key.key] = true;
    c17 = null;
    if (obj == null) {
      obj = {};
    }
    delete tmp[tmp2];
  },
  SURVEY_OVERRIDE: function handleSurveyOverride(id) {
    id = id.id;
    obj.surveyOverride = id;
    if (null != id) {
      const hiddenSurveys = obj.hiddenSurveys;
      delete tmp[tmp2];
    }
    obj = overrideSurvey;
    obj.surveyFetch(obj.surveyOverride, true);
  },
  PUSH_NOTIFICATION_CLICK: function handlePushNotificationClick() {
    c14 = true;
  },
  DISPLAYED_INVITE_SHOW: function handleInviteShow() {
    c15 = true;
  },
  LOGOUT: function handleLogout() {
    obj.hiddenSurveys = {};
  },
  SURVEY_SEEN: function handleSurveySeen() {
    obj.lastSeen = Date.now();
  }
};
const surveyStore = new SurveyStore(dispatcherDefault, obj);
const result1 = set.fileFinishedImporting("stores/SurveyStore.tsx");

export default surveyStore;
export const SURVEY_REFETCH_INTERVAL = DAY;
export const SURVEY_ACTION_INTERVAL = result;