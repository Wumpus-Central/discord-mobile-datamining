// discord_app/utils/AutocompleteUtils.tsx
import LoggerDefault from "../modules/debug/Logger.tsx";
import SnowflakeUtilsDefault from "SnowflakeUtils.tsx";
import _modDef12 from "../../_runtime/metro/00012__.js";
import intl13 from "../intl/index.native.tsx";
import GlobalUtils from "GlobalUtils.tsx";
import StringUtils from "StringUtils.tsx";
import UserSettingsProtoActionCreators from "../modules/user_settings/UserSettingsProtoActionCreators.tsx";
import ChannelConstants from "../modules/channel/ChannelConstants.tsx";
import GuildRoleRecord from "../records/GuildRoleRecord.tsx";
import PermissionUtilsAll from "PermissionUtils.tsx";
import UserUtilsDefault from "UserUtils.tsx";
import RegexUtilsDefault from "RegexUtils.tsx";
import useChannelName from "../modules/channel/useChannelName.tsx";
import StickersTypes from "../modules/stickers/StickersTypes.tsx";
import autocompleter_AutocompleterConstants from "../modules/autocompleter/AutocompleterConstants.tsx";
import utils_AutocompleteUtils from "native/AutocompleteUtils.tsx";
import fuzzysearchDefault from "../../_runtime/05702_fuzzysearch.js";
import sortByMatchScoreDefault from "../modules/autocompleter/sortByMatchScore.tsx";
import GuildUtilsDefault from "GuildUtils.tsx";
import isSoundValidDefault from "../modules/premium/sounds/soundmoji/utils/isSoundValid.tsx";
import OnboardingHomeUtils from "../modules/guild_onboarding_home/OnboardingHomeUtils.tsx";
import useGuildOnboardingAvailable from "../modules/guild_onboarding/useGuildOnboardingAvailable.tsx";
import compareChannelsByScoreAndPositionDefault from "../modules/channel_text_area/compareChannelsByScoreAndPosition.tsx";
import _slicedToArray from "../../_runtime/metro/00032__slicedToArray.js";
import InAppNavigationRecord from "../modules/autocompleter/record/InAppNavigationRecord.tsx";
import EmojiStore from "../modules/emojis/EmojiStore.tsx";
import SoundboardStore from "../modules/soundboard/SoundboardStore.tsx";
import StickersPersistedStore from "../modules/stickers/StickersPersistedStore.tsx";
import StickersStore from "../modules/stickers/StickersStore.tsx";
import ActiveJoinedThreadsStore from "../modules/threads/ActiveJoinedThreadsStore.tsx";
import JoinedThreadsStore from "../modules/threads/JoinedThreadsStore.tsx";
import ChannelRecord from "../records/ChannelRecord.tsx";
import UserRecord from "../records/UserRecord.tsx";
import ChannelStore from "../stores/ChannelStore.tsx";
import FrecencyStore from "../stores/FrecencyStore.tsx";
import GuildChannelStore_mod from "../stores/GuildChannelStore.tsx";
import GuildMemberStore from "../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../stores/GuildRoleStore.tsx";
import GuildStore from "../stores/GuildStore.tsx";
import MessageStore from "../stores/MessageStore.tsx";
import PermissionStore from "../stores/PermissionStore.tsx";
import PresenceStore from "../stores/PresenceStore.tsx";
import RelationshipStore from "../stores/RelationshipStore.tsx";
import SelectedChannelStore from "../stores/SelectedChannelStore.tsx";
import SelectedGuildStore from "../stores/SelectedGuildStore.tsx";
import UserStore from "../stores/UserStore.tsx";
import SKUStore from "../stores/game_store/SKUStore.tsx";
import Constants from "../Constants.tsx";
import FunctionUtils from "FunctionUtils.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, displayName, importDefault, record, set;

let ChannelTypes;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_38;
let closure_39;
let closure_41;
let closure_42;
let hasOwnProperty;
let map1;
let metroRequire;
const f90623 = (author) => author.author.id;
const f90624 = (author) => user.getUser(author.author.id);
function NOOP() {
  return true;
}
function calculateScore() {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  let num2 = arg1;
  const result = 1000 * num;
  if (arg1 == null) {
    num2 = 1;
  }
  return result * num2;
}
function getMatchValue(toLocaleLowerCaseResult1, nextResult) {
  let containQuery;
  let exactQuery;
  let queryLower;
  function multiTokenMatch(queryLower, toLocaleLowerCaseResult1) {
    let closure_0 = toLocaleLowerCaseResult1;
    const parts = queryLower.split(/(?:,| )+/);
    return parts.every((item) => {
      const obj = RegexUtilsDefault;
      const regExp = new RegExp(obj.escape(item), "i");
      return regExp.test(toLocaleLowerCaseResult1);
    });
  }
  ({ exactQuery, containQuery, queryLower } = nextResult);
  try {
    if (exactQuery.test(toLocaleLowerCaseResult1)) {
      let num5 = 7;
      if (toLocaleLowerCaseResult1.toLocaleLowerCase() === queryLower) {
        num5 = c46;
      }
      return num5;
    } else if (containQuery.test(toLocaleLowerCaseResult1)) {
      return 5;
    } else if (multiTokenMatch(queryLower, toLocaleLowerCaseResult1)) {
      return 3;
    } else {
      if (flag) {
        if (fuzzysearchDefault(queryLower, toLocaleLowerCaseResult1)) {
          return 1;
        }
      }
      return 0;
    }
  } catch (tmp4) {
    logger.error(tmp4);
  }
}
function isValidGuildMember(joinedAt) {
  joinedAt = undefined;
  if (joinedAt != null) {
    joinedAt = joinedAt.joinedAt;
  }
  return null != joinedAt && !joinedAt.isPending;
}
function queryMemberList(allowSnowflake) {
  let boosters;
  let filter;
  let limit;
  let members;
  let num3;
  let num4;
  let num5;
  let num6;
  let query;
  let str6;
  let str7;
  let str8;
  let str9;
  let tmp34;
  let tmp35;
  let tmp38;
  let tmp39;
  ({ query, members, limit, filter, boosters } = allowSnowflake);
  allowSnowflake = allowSnowflake.allowSnowflake;
  const users = UserStore.getUsers();
  const guildId = SelectedGuildStore.getGuildId();
  const toLocaleLowerCaseResult = query.toLocaleLowerCase();
  const normalizer = StringUtils;
  const normalizeResult = normalizer.normalize(toLocaleLowerCaseResult);
  items = [];
  const items1 = [];
  let num = 0;
  let num2 = 0;
  if (0 < members.length) {
    do {
      let str;
      let tmp8;
      let str2;
      let tmp4 = members[num2];
      if (tmp4 instanceof UserRecord) {
        let nick1 = GuildMemberStore.getNick(guildId, tmp4.id);
        let toLocaleLowerCaseResult1;
        if (nick1 != null) {
          toLocaleLowerCaseResult1 = nick1.toLocaleLowerCase();
        }
        str = toLocaleLowerCaseResult1;
        tmp8 = tmp4;
      } else {
        let nick = tmp4.nick;
        if (nick != null) {
          str = nick.toLocaleLowerCase();
        }
        tmp8 = users[tmp4.userId];
      }
      let obj2 = UserUtilsDefault;
      let globalName = obj2.getGlobalName(tmp8);
      if (globalName != null) {
        str2 = globalName.toLocaleLowerCase();
      }
      let sum = num;
      if (null != tmp8) {
        if (null == filter) {
          let items2;
          let items3;
          let username = tmp8.username;
          let str3 = username.toLocaleLowerCase();
          let obj4 = StringUtils;
          let str4 = obj4.stripDiacritics(str3);
          let normalizer2 = StringUtils;
          let str5 = normalizer2.normalize(str4);
          if (null == str) {
            items2 = [null, null];
          } else {
            let tmp15Result = StringUtils;
            let stripDiacriticsResult = tmp15Result.stripDiacritics(str);
            items2 = [stripDiacriticsResult];
            let normalizer3 = StringUtils;
            items2[1] = normalizer3.normalize(stripDiacriticsResult);
          }
          let tmp18 = _slicedToArray(items2, 2);
          [str6, str7] = tmp18;
          if (null == str2) {
            items3 = [null, null];
          } else {
            let tmp15Result2 = StringUtils;
            let stripDiacriticsResult1 = tmp15Result2.stripDiacritics(str2);
            items3 = [stripDiacriticsResult1];
            let normalizer4 = StringUtils;
            items3[1] = normalizer4.normalize(stripDiacriticsResult1);
          }
          let tmp17Result = _slicedToArray(items3, 2);
          [str8, str9] = tmp17Result;
          if (!allowSnowflake) {
            if (str3.substring(0, toLocaleLowerCaseResult.length) !== toLocaleLowerCaseResult) {
              if (str4.substring(0, toLocaleLowerCaseResult.length) !== toLocaleLowerCaseResult) {
                let substr;
                if (str != null) {
                  substr = str.substring(0, toLocaleLowerCaseResult.length);
                }
                if (substr !== toLocaleLowerCaseResult) {
                  let substr1;
                  if (str6 != null) {
                    substr1 = str6.substring(0, toLocaleLowerCaseResult.length);
                  }
                  if (substr1 !== toLocaleLowerCaseResult) {
                    let substr2;
                    if (str2 != null) {
                      substr2 = str2.substring(0, toLocaleLowerCaseResult.length);
                    }
                    if (substr2 !== toLocaleLowerCaseResult) {
                      let substr3;
                      if (str8 != null) {
                        substr3 = str8.substring(0, toLocaleLowerCaseResult.length);
                      }
                      if (substr3 !== toLocaleLowerCaseResult) {
                        if (str5.substring(0, normalizeResult.length) !== normalizeResult) {
                          let substr4;
                          if (str7 != null) {
                            substr4 = str7.substring(0, normalizeResult.length);
                          }
                          if (substr4 !== normalizeResult) {
                            let substr5;
                            if (str9 != null) {
                              substr5 = str9.substring(0, normalizeResult.length);
                            }
                            if (substr5 !== normalizeResult) {
                              let tmp32 = num < 50;
                              if (num < 50) {
                                let tmp27 =
                                  fuzzysearchDefault(toLocaleLowerCaseResult, str4) ||
                                  fuzzysearchDefault(normalizeResult, str5);
                                if (!tmp27) {
                                  let tmp28 = null != str6 && fuzzysearchDefault(toLocaleLowerCaseResult, str6);
                                  tmp27 = tmp28;
                                }
                                if (!tmp27) {
                                  let tmp29 = null != str7 && fuzzysearchDefault(normalizeResult, str7);
                                  tmp27 = tmp29;
                                }
                                if (!tmp27) {
                                  let tmp30 = null != str8 && fuzzysearchDefault(toLocaleLowerCaseResult, str8);
                                  tmp27 = tmp30;
                                }
                                if (!tmp27) {
                                  let tmp31 = null != str9 && fuzzysearchDefault(normalizeResult, str9);
                                  tmp27 = tmp31;
                                }
                                tmp32 = tmp27;
                              }
                              sum = num;
                              if (tmp32) {
                                let obj = {
                                  type: AutocompleterResultTypes.USER,
                                  record: tmp8,
                                  score: 1000 * num3,
                                  comparator: tmp34,
                                  sortable: tmp35,
                                };
                                num3 = undefined;
                                let push = items1.push;
                                if (boosters != null) {
                                  num3 = boosters[tmp8.id];
                                }
                                if (num3 == null) {
                                  num3 = 1;
                                }
                                tmp34 = str2;
                                if (str2 == null) {
                                  tmp34 = str;
                                }
                                if (tmp34 == null) {
                                  tmp34 = str3;
                                }
                                tmp35 = str8;
                                if (str8 == null) {
                                  tmp35 = str6;
                                }
                                if (tmp35 == null) {
                                  tmp35 = str4;
                                }
                                let arr = push(obj);
                                sum = num + 1;
                              }
                            }
                          }
                        }
                        let obj3 = {
                          type: AutocompleterResultTypes.USER,
                          record: tmp8,
                          score: 1000 * num4,
                          comparator: tmp38,
                          sortable: tmp39,
                        };
                        num4 = undefined;
                        let push2 = items.push;
                        if (boosters != null) {
                          num4 = boosters[tmp8.id];
                        }
                        if (num4 == null) {
                          num4 = 1;
                        }
                        tmp38 = str2;
                        if (str2 == null) {
                          tmp38 = str;
                        }
                        if (tmp38 == null) {
                          tmp38 = str3;
                        }
                        tmp39 = str8;
                        if (str8 == null) {
                          tmp39 = str6;
                        }
                        if (tmp39 == null) {
                          tmp39 = str4;
                        }
                        let push2Result = push2(obj3);
                        sum = num;
                      }
                    }
                  }
                }
              }
            }
          }
          let obj5 = {
            type: AutocompleterResultTypes.USER,
            record: tmp8,
            score: 1000 * num5 * num6,
            comparator: str2,
            sortable: str8,
          };
          num5 = c46;
          num6 = undefined;
          let push3 = items.push;
          if (boosters != null) {
            num6 = boosters[tmp8.id];
          }
          if (num5 === undefined) {
            num5 = 0;
          }
          if (num6 == null) {
            num6 = 1;
          }
          if (str2 == null) {
            str2 = str;
          }
          if (str2 == null) {
            str2 = str3;
          }
          if (str8 == null) {
            str8 = str6;
          }
          if (str8 == null) {
            str8 = str4;
          }
          let push3Result = push3(obj5);
          sum = num;
        } else {
          sum = num;
        }
      }
      num2 = num2 + 1;
      num = sum;
    } while (num2 < members.length);
  }
  const sorted = items.sort(sortByMatchScoreDefault);
  let combined = items;
  if (items.length < limit) {
    const sorted1 = items1.sort(sortByMatchScoreDefault);
    const _Math = Math;
    combined = items.concat(items1.slice(0, Math.max(0, limit - items.length)));
  }
  if (combined.length > limit) {
    combined.length = limit;
  }
  return combined;
}
function getPriorityForStickerMetadataType(type) {
  if (StickersTypes.StickerMetadataTypes.STICKER_NAME === type) {
    return 11;
  } else if (StickersTypes.StickerMetadataTypes.CORRELATED_EMOJI === type) {
    return 6;
  } else if (StickersTypes.StickerMetadataTypes.TAG === type) {
    return 1;
  } else {
    if (StickersTypes.StickerMetadataTypes.GUILD_NAME !== type) {
      if (StickersTypes.StickerMetadataTypes.PACK_NAME !== type) {
        return 1;
      }
    }
    return 8;
  }
}
function isPartialTypeMatch(type, type2) {
  const tmp = type === GUILD_SELECTABLE_CHANNELS_KEY && authStore3(type2);
  return tmp;
}
function getBestScore(toLocaleLowerCaseResult, arr6, flag) {
  let num = 0;
  let tmp = null;
  const iter = arr6[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = getMatchValue(toLocaleLowerCaseResult, nextResult, flag);
    if (tmp5 > num) {
      num = tmp5;
      tmp = nextResult;
    }
    continue;
  }
  if (null != tmp) {
    if (tmp.isFullMatch) {
      arr6.length = 0;
    } else {
      arr6.splice(arr6.indexOf(tmp), 1);
    }
  }
  return num;
}
function getGuildName(guild_id, arg1) {
  if (null != guild_id.guild_id) {
    let tmp2 = arg1[guild_id.guild_id];
    if (null == tmp2) {
      guild_id = guild_id.guild_id;
      const guild = GuildStore.getGuild(guild_id.guild_id);
      let toLocaleLowerCaseResult;
      if (guild != null) {
        const name = guild.name;
        toLocaleLowerCaseResult = name.toLocaleLowerCase();
      }
      arg1[guild_id] = toLocaleLowerCaseResult;
      tmp2 = toLocaleLowerCaseResult;
    }
    return tmp2;
  }
}
function getCategoryName(parent_id, arg1) {
  if (null != parent_id.parent_id) {
    let tmp2 = arg1[parent_id.parent_id];
    if (null == tmp2) {
      parent_id = parent_id.parent_id;
      const channel = ChannelStore.getChannel(parent_id.parent_id);
      let toLocaleLowerCaseResult;
      if (channel != null) {
        const name = channel.name;
        toLocaleLowerCaseResult = name.toLocaleLowerCase();
      }
      arg1[parent_id] = toLocaleLowerCaseResult;
      tmp2 = toLocaleLowerCaseResult;
    }
    return tmp2;
  }
}
({ InAppNavigationRecord: hasOwnProperty, InAppNavigationType: metroRequire } = InAppNavigationRecord);
({
  ChannelRecordBase: map1,
  isGuildChannelType: closure_14,
  isGuildSelectableChannelType: closure_15,
  isGuildVocalChannelType: closure_16,
  isThread: closure_17,
  PrivateChannelRecord: closure_18,
  UnknownChannelRecord: closure_19,
} = ChannelRecord);
const isEveryoneRole = GuildRoleRecord.isEveryoneRole;
let GuildChannelStore = GuildChannelStore_mod;
const GUILD_SELECTABLE_CHANNELS_KEY = GuildChannelStore.GUILD_SELECTABLE_CHANNELS_KEY;
const GUILD_VOCAL_CHANNELS_KEY = GuildChannelStore.GUILD_VOCAL_CHANNELS_KEY;
GuildChannelStore = GuildChannelStore_mod;
({ Permissions: closure_38, GuildFeatures: closure_39, ChannelTypes } = Constants);
({ SKUTypes: closure_41, MAX_AUTOCOMPLETE_RESULTS: closure_42 } = Constants);
const AutocompleterResultTypes = autocompleter_AutocompleterConstants.AutocompleterResultTypes;
const StaticChannelId = ChannelConstants.StaticChannelId;
let tmp6 = new LoggerDefault("AutocompleteUtils");
const logger = tmp6;
let c46 = 10;
let tmp7 = /(\t|\s)/;
const re48 = tmp7;
let closure_49 = [];
const MENTION_EVERYONE = utils_AutocompleteUtils.default.MENTION_EVERYONE;
const MENTION_HERE = utils_AutocompleteUtils.default.MENTION_HERE;
const MENTION_GAME = utils_AutocompleteUtils.default.MENTION_GAME;
const MENTION_TIMESTAMP = utils_AutocompleteUtils.default.MENTION_TIMESTAMP;
const LAUNCHABLE_APPLICATIONS = utils_AutocompleteUtils.default.LAUNCHABLE_APPLICATIONS;
class AutocompleteBoostersCache {
  constructor() {
    merged = Object.assign({
      lastFrecencyVersion: null,
      lastRelationshipVersion: null,
      lastPrivateChannelsVersion: null,
      cache: null,
    });
    merged[3] = new Map();
    new Map();
    return merged;
  }
  get(arg0) {
    const self = this;
    if (this.isStale()) {
      const cache = self.cache;
      cache.clear();
    }
    const cache2 = self.cache;
    const value = cache2.get(arg0);
    if (null != value) {
      return value;
    } else {
      const buildResult = self.build(arg0);
      const cache3 = self.cache;
      const result = cache3.set(arg0, buildResult);
      return buildResult;
    }
  }
  isStale() {
    const self = this;
    const version = FrecencyStore.getVersion();
    const version1 = RelationshipStore.getVersion();
    const privateChannelsVersion = ChannelStore.getPrivateChannelsVersion();
    let flag =
      this.lastFrecencyVersion !== version ||
      self.lastRelationshipVersion !== version1 ||
      self.lastPrivateChannelsVersion !== privateChannelsVersion;
    if (flag) {
      self.lastFrecencyVersion = version;
      self.lastRelationshipVersion = version1;
      self.lastPrivateChannelsVersion = privateChannelsVersion;
      flag = true;
    }
    return flag;
  }
  build(arg0) {
    let found;
    const frequentlyWithoutFetchingLatest = FrecencyStore.getFrequentlyWithoutFetchingLatest();
    const reduced = frequentlyWithoutFetchingLatest.reduce((acc, id) => {
      let tmp = acc;
      scoreWithoutFetchingLatest = scoreWithoutFetchingLatest.getScoreWithoutFetchingLatest(id.id);
      if (scoreWithoutFetchingLatest > acc) {
        tmp = scoreWithoutFetchingLatest;
      }
      return tmp;
    }, 0);
    if (AutocompleterResultTypes.GUILD === arg0) {
      found = frequentlyWithoutFetchingLatest.filter((item) => {
        const obj = require("GuildRecordUtils");
        return obj.isGuildRecord(item);
      });
    } else if (AutocompleterResultTypes.USER === arg0) {
      found = frequentlyWithoutFetchingLatest.filter(
        (type) => type instanceof closure_1_13 && type.type === constants.DM,
      );
    } else if (AutocompleterResultTypes.GROUP_DM === arg0) {
      found = frequentlyWithoutFetchingLatest.filter((isMultiUserDM) => {
        const tmp = isMultiUserDM instanceof closure_1_13 && isMultiUserDM.isMultiUserDM();
        return tmp;
      });
    } else if (AutocompleterResultTypes.TEXT_CHANNEL === arg0) {
      found = frequentlyWithoutFetchingLatest.filter((type) => {
        const tmp = type instanceof closure_1_13 && closure_1_15(type.type);
        return tmp;
      });
    } else {
      found = [];
      if (AutocompleterResultTypes.VOICE_CHANNEL === arg0) {
        found = frequentlyWithoutFetchingLatest.filter((isGuildVocal) => {
          const tmp = isGuildVocal instanceof closure_1_13 && isGuildVocal.isGuildVocal();
          return tmp;
        });
      }
    }
    let obj = {};
    const iter = found[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let obj2 = nextResult;
      let id = nextResult.id;
      let tmp8 = id;
      let scoreWithoutFetchingLatest = FrecencyStore.getScoreWithoutFetchingLatest(id);
      if (arg0 === AutocompleterResultTypes.USER) {
        if (obj2 instanceof authStore4) {
          let type = obj2.type;
          if (ChannelTypes.DM === type) {
            let recipientId = obj2.getRecipientId();
            obj[recipientId] = 1 + scoreWithoutFetchingLatest / reduced;
          } else if (tmp18.GROUP_DM === type) {
            let length = obj2.recipients.length;
            let recipients = obj2.recipients;
            for (const item10068 of recipients) {
              obj[item10068] = 1 + (scoreWithoutFetchingLatest / reduced) * (1 / length);
              continue;
            }
          }
          continue;
        }
      }
      obj[tmp8] = 1 + scoreWithoutFetchingLatest / reduced;
    }
    const friendIDs = RelationshipStore.getFriendIDs();
    const iter2 = friendIDs[Symbol.iterator]();
    const nextResult1 = iter2.next();
    while (iter2 !== undefined) {
      let num = obj[nextResult1];
      if (num == null) {
        num = 1;
      }
      obj[nextResult1] = num + 0.2;
      continue;
    }
    const dMUserIds = ChannelStore.getDMUserIds();
    const iter3 = dMUserIds[Symbol.iterator]();
    const nextResult2 = iter3.next();
    while (iter3 !== undefined) {
      let num2 = obj[nextResult2];
      if (num2 == null) {
        num2 = 1;
      }
      obj[nextResult2] = num2 + 0.1;
      continue;
    }
    return obj;
  }
}
const prototype = AutocompleteBoostersCache.prototype;
let merged = Object.assign({
  lastFrecencyVersion: null,
  lastRelationshipVersion: null,
  lastPrivateChannelsVersion: null,
  cache: null,
});
const map = new Map();
merged[3] = map;
let items = [GUILD_SELECTABLE_CHANNELS_KEY, GUILD_VOCAL_CHANNELS_KEY, ChannelTypes.GUILD_CATEGORY];
let closure_66 = FunctionUtils.cachedFunction(() => {
  const channelsByRecipientId = new Map();
  const recipientsById = new Map();
  const recipients = [];
  const tmp3 = recipientsById(12);
  const tmp3Result = tmp3(ChannelStore.getMutablePrivateChannels());
  const iter = tmp3Result.values();
  const valueResult = iter.value();
  const item = valueResult.forEach((isDM) => {
    if (isDM.isDM()) {
      const recipientId = isDM.getRecipientId();
      const user = UserStore.getUser(recipientId);
      const hasItem = null == recipientId || null == user || channelsByRecipientId.has(recipientId);
      if (!hasItem) {
        const result = channelsByRecipientId.set(recipientId, isDM);
        const push = recipients.push;
        const obj = { userId: recipientId, nick: RelationshipStore.getNickname(recipientId) };
        push(obj);
        const result1 = recipientsById.set(recipientId, user);
      }
    }
  });
  return { channelsByRecipientId, recipientsById, recipients };
});
let obj = {
  queryFriends(limit) {
    let filter;
    let mapped;
    let user;
    let num = limit.limit;
    const query = limit.query;
    if (num === undefined) {
      num = 10;
    }
    const obj = { query, members: mapped.filter(GlobalUtils.isNotNullish), limit: num, filter };
    filter = limit.filter;
    const friendIDs = RelationshipStore.getFriendIDs();
    mapped = friendIDs.map((item) => user.getUser(item));
    return queryMemberList(obj);
  },
  queryDMUsers(limit) {
    let filter;
    let mapped;
    let user;
    let num = limit.limit;
    const query = limit.query;
    if (num === undefined) {
      num = 10;
    }
    const obj = { query, members: mapped.filter(GlobalUtils.isNotNullish), limit: num, filter };
    filter = limit.filter;
    const dMUserIds = ChannelStore.getDMUserIds();
    mapped = dMUserIds.map((item) => user.getUser(item));
    return queryMemberList(obj);
  },
  queryChannelUsers(channelId) {
    let limit;
    let query;
    ({ query, limit } = channelId);
    channelId = channelId.channelId;
    if (limit === undefined) {
      limit = 10;
    }
    let flag = channelId.request;
    if (flag === undefined) {
      flag = true;
    }
    let flag2 = channelId.checkRecentlyTalkedOnEmptyQuery;
    if (flag2 === undefined) {
      flag2 = true;
    }
    let flag3 = channelId.allowSnowflake;
    if (flag3 === undefined) {
      flag3 = false;
    }
    let channel1;
    const channel = ChannelStore.getChannel(channelId);
    if (null == channel) {
      return [];
    } else {
      channel1 = null;
      if (channel.isThread()) {
        channel1 = ChannelStore.getChannel(channel.parent_id);
      }
      if (channel1 == null) {
        channel1 = channel;
      }
      if (null == channel1) {
        return [];
      } else {
        let tmp6;
        if (channel1.isPrivate()) {
          const recipients = channel1.recipients;
          const mapped = recipients.map((userId) => {
            const obj = { userId, nick: nickname };
            nickname = nickname.getNickname(userId);
            if (nickname == null) {
              nickname = null;
            }
            return obj;
          });
          const currentUser = UserStore.getCurrentUser();
          tmp6 = mapped;
          if (null != currentUser) {
            let obj2 = { userId: currentUser.id, nick: null };
            mapped.push(obj2);
            tmp6 = mapped;
          }
        } else {
          if (0 === query.length) {
            if (flag2) {
              const id = channel.id;
              const channel2 = ChannelStore.getChannel(id);
              if (null != id) {
                if (null != channel2) {
                  const tmp16 = _modDef12;
                  const messages = MessageStore.getMessages(id);
                  const tmp16Result = tmp16(messages.toArray());
                  const reversed = tmp16Result.reverse();
                  const uniqByResult = reversed.uniqBy(f90623);
                  const mapped1 = uniqByResult.map(f90624);
                  const found = mapped1.filter((isNonUserBot) => {
                    if (null == isNonUserBot) {
                      return false;
                    } else if (isNonUserBot.isNonUserBot()) {
                      return false;
                    } else {
                      const guildId = channel.getGuildId();
                      let tmp3 = null == guildId;
                      if (!tmp3) {
                        const member = GuildMemberStore.getMember(guildId, isNonUserBot.id);
                        let joinedAt;
                        if (member != null) {
                          joinedAt = member.joinedAt;
                        }
                        tmp3 = null != joinedAt && !member.isPending;
                      }
                      return tmp3;
                    }
                  });
                  const mapped2 = found.map((id) => {
                    let nick;
                    const guildId = channel.getGuildId();
                    let member = null;
                    if (null != guildId) {
                      member = GuildMemberStore.getMember(guildId, id.id);
                    }
                    const obj = { type: AutocompleterResultTypes.USER, record: id, score: 0, comparator: nick };
                    nick = undefined;
                    if (member != null) {
                      nick = member.nick;
                    }
                    if (nick == null) {
                      const obj2 = UserUtilsDefault;
                      nick = obj2.getName(id);
                    }
                    return obj;
                  });
                  const iter = mapped2.take(limit);
                  items = iter.value();
                }
                if (items.length > 0) {
                  return items;
                }
              }
              items = [];
            }
          }
          const members = GuildMemberStore.getMembers(channel1.guild_id);
          const found1 = members.filter(isValidGuildMember);
          tmp6 = found1;
          if (flag) {
            const obj3 = GuildUtilsDefault;
            const members1 = obj3.requestMembers(channel1.guild_id, query, limit);
            tmp6 = found1;
          }
        }
        const obj4 = {
          query,
          members: tmp6,
          limit,
          filter(user) {
            let isPrivateResult = channel1.isPrivate();
            if (!isPrivateResult) {
              const obj2 = { permission: constants.VIEW_CHANNEL, user, context: channel1 };
              const obj = PermissionUtilsAll;
              isPrivateResult = obj.can(obj2);
            }
            return isPrivateResult;
          },
          allowSnowflake: flag3,
        };
        return queryMemberList(obj4);
      }
    }
  },
  queryGuildUsers(request) {
    let allowSnowflake;
    let filter;
    let guildId;
    let limit;
    let query;
    let user;
    ({ guildId, query, limit } = request);
    if (limit === undefined) {
      limit = 10;
    }
    let flag = request.request;
    if (flag === undefined) {
      flag = true;
    }
    let flag2 = request.checkRecentlyTalkedOnEmptyQuery;
    if (flag2 === undefined) {
      flag2 = true;
    }
    ({ filter, allowSnowflake } = request);
    if (null == GuildStore.getGuild(guildId)) {
      return [];
    } else {
      if (0 === query.length) {
        if (flag2) {
          const channelId = SelectedChannelStore.getChannelId(guildId);
          const channel = ChannelStore.getChannel(channelId);
          if (null != channelId) {
            if (null != channel) {
              const tmp14 = _modDef12;
              const messages = MessageStore.getMessages(channelId);
              const tmp14Result = tmp14(messages.toArray());
              const reversed = tmp14Result.reverse();
              const uniqByResult = reversed.uniqBy(f90623);
              const mapped = uniqByResult.map(f90624);
              const found = mapped.filter((isNonUserBot) => {
                if (null == isNonUserBot) {
                  return false;
                } else if (isNonUserBot.isNonUserBot()) {
                  return false;
                } else {
                  const guildId = channel.getGuildId();
                  let tmp3 = null == guildId;
                  if (!tmp3) {
                    const member = GuildMemberStore.getMember(guildId, isNonUserBot.id);
                    let joinedAt;
                    if (member != null) {
                      joinedAt = member.joinedAt;
                    }
                    tmp3 = null != joinedAt && !member.isPending;
                  }
                  return tmp3;
                }
              });
              const mapped1 = found.map((id) => {
                let nick;
                const guildId = channel.getGuildId();
                let member = null;
                if (null != guildId) {
                  member = GuildMemberStore.getMember(guildId, id.id);
                }
                const obj = { type: AutocompleterResultTypes.USER, record: id, score: 0, comparator: nick };
                nick = undefined;
                if (member != null) {
                  nick = member.nick;
                }
                if (nick == null) {
                  const obj2 = UserUtilsDefault;
                  nick = obj2.getName(id);
                }
                return obj;
              });
              const iter = mapped1.take(limit);
              items = iter.value();
            }
            if (items.length > 0) {
              return items;
            }
          }
          items = [];
        }
      }
      const members = GuildMemberStore.getMembers(guildId);
      const found1 = members.filter(isValidGuildMember);
      if (flag) {
        flag = query.length > 0;
      }
      if (flag) {
        let obj = GuildUtilsDefault;
        const members1 = obj.requestMembers(guildId, query, limit);
      }
      let obj2 = { query, members: found1, limit, filter, allowSnowflake };
      return queryMemberList(obj2);
    }
  },
  queryUsers(limit) {
    let boosters;
    let filter;
    let query;
    let num = limit.limit;
    ({ query, filter, boosters } = limit);
    if (num === undefined) {
      num = 10;
    }
    const obj = { query, members: limit.users, limit: num, filter, allowSnowflake: limit.allowSnowflake, boosters };
    return queryMemberList(obj);
  },
  queryAllUsers(request) {
    let boosters;
    let filter;
    let iter;
    let limit;
    let query;
    ({ query, limit } = request);
    ({ filter, boosters } = request);
    if (limit === undefined) {
      limit = 10;
    }
    let flag = request.request;
    if (flag === undefined) {
      flag = true;
    }
    const tmp = flag && query.length > 0;
    if (tmp) {
      const obj = GuildUtilsDefault;
      const members = obj.requestMembers(null, query, limit);
    }
    const queryUsers = this.queryUsers;
    const obj2 = { query, limit, request: flag, filter, boosters, users: iter.value() };
    const tmp6 = _modDef12;
    const tmp6Result = tmp6(UserStore.getUsers());
    iter = tmp6Result.values();
    return queryUsers(obj2);
  },
  queryChannels(fuzzy) {
    let guildId;
    let limit;
    let obj8;
    let query;
    let valueResult;
    function getSeparatedQueries(query) {
      let regExp;
      let regExp1;
      let flag = flag2;
      if (flag2 === undefined) {
        flag = false;
      }
      const parts = query.split(" ");
      const found = parts.filter((item) => "" !== item || flag);
      const mapped = found.map((toLocaleLowerCase) => {
        let regExp;
        let regExp1;
        const toLocaleLowerCaseResult = toLocaleLowerCase.toLocaleLowerCase();
        const obj = {
          queryLower: toLocaleLowerCaseResult,
          exactQuery: regExp,
          containQuery: regExp1,
          isFullMatch: false,
        };
        const obj2 = closure_1_1(closure_1_3[31]);
        regExp = new RegExp("^" + obj2.escape(toLocaleLowerCaseResult), "i");
        const obj3 = closure_1_1(closure_1_3[31]);
        regExp1 = new RegExp(obj3.escape(toLocaleLowerCaseResult), "i");
        return obj;
      });
      if (query.includes(" ")) {
        let toLocaleLowerCaseResult = query.toLocaleLowerCase();
        let obj = { queryLower: toLocaleLowerCaseResult, exactQuery: regExp, containQuery: regExp1, isFullMatch: true };
        const _RegExp = RegExp;
        const unshift = mapped.unshift;
        let obj2 = closure_1(closure_3[31]);
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const str = obj2.escape(toLocaleLowerCaseResult);
        regExp = new RegExp("^" + str.replace(" ", "( |-)"), "i");
        const _RegExp2 = RegExp;
        let obj3 = closure_1(closure_3[31]);
        const self3 = this;
        const self4 = this;
        const str6 = obj3.escape(toLocaleLowerCaseResult);
        regExp1 = new RegExp(str6.replace(" ", "( |-)"), "i");
        unshift(obj);
      }
      return mapped;
    }
    function includesThreads(type) {
      let tmp = type === GUILD_SELECTABLE_CHANNELS_KEY;
      if (!tmp) {
        tmp = type !== GUILD_VOCAL_CHANNELS_KEY && closure_1_17(type);
        const tmp3 = type !== GUILD_VOCAL_CHANNELS_KEY && closure_1_17(type);
      }
      return tmp;
    }
    ({ query, guildId, limit } = fuzzy);
    if (limit === undefined) {
      limit = closure_42;
    }
    let flag = fuzzy.fuzzy;
    if (flag === undefined) {
      flag = true;
    }
    let filter = fuzzy.filter;
    if (filter === undefined) {
      filter = NOOP;
    }
    let type = fuzzy.type;
    if (type === undefined) {
      type = GUILD_SELECTABLE_CHANNELS_KEY;
    }
    let flag2 = fuzzy.allowEmptyQueries;
    if (flag2 === undefined) {
      flag2 = false;
    }
    let flag3 = fuzzy.requireVocalConnectAccess;
    if (flag3 === undefined) {
      flag3 = true;
    }
    let boosters = fuzzy.boosters;
    if (boosters === undefined) {
      boosters = {};
    }
    const allowSnowflake = fuzzy.allowSnowflake;
    const includeAllThreads = fuzzy.includeAllThreads;
    const tmp2 = getSeparatedQueries(query, flag2);
    let tmp3 = includesThreads(type);
    if (null != guildId) {
      const tmp13 = _modDef12;
      const tmp13Result = tmp13(GuildChannelStore.getChannels(guildId)[type]);
      let mapped = tmp13Result.map((channel) => channel.channel);
      const concat2 = mapped.concat;
      if (tmp3) {
        let allThreadsForGuild;
        if (includeAllThreads) {
          allThreadsForGuild = ChannelStore.getAllThreadsForGuild(guildId);
        } else {
          allThreadsForGuild = ActiveJoinedThreadsStore.computeAllActiveJoinedThreads(guildId);
        }
        items = allThreadsForGuild;
      } else {
        items = [];
      }
      const iter2 = concat2(items);
      valueResult = iter2.value();
    } else {
      let allActiveJoinedThreads;
      const tmp6 = _modDef12;
      const tmp6Result = tmp6(ChannelStore.loadAllGuildAndPrivateChannelsFromDisk());
      const values = tmp6Result.values();
      const concat = values.concat;
      if (tmp3) {
        allActiveJoinedThreads = ActiveJoinedThreadsStore.computeAllActiveJoinedThreads();
      } else {
        allActiveJoinedThreads = [];
      }
      const iter = concat(allActiveJoinedThreads);
      valueResult = iter.value();
    }
    let obj = {};
    const items1 = [];
    const maxScore = FrecencyStore.getMaxScore();
    const iter3 = valueResult[Symbol.iterator]();
    const nextResult = iter3.next();
    while (iter3 !== undefined) {
      let obj4 = nextResult;
      let tmp21 = type;
      let type2 = nextResult.type;
      let tmp22 = type2;
      let tmp23 = null != guildId;
      if (type === type2) {
        if (!authStore2(obj4.type)) {
          if (filter(obj4)) {
            let tmp61;
            let items2 = [];
            let arraySpreadResult = HermesBuiltin.arraySpread(items2, tmp2, 0);
            let arr6 = items2;
            let obj5 = useChannelName;
            let channelName = obj5.computeChannelName(obj4, UserStore, RelationshipStore);
            let toLocaleLowerCaseResult = channelName.toLocaleLowerCase();
            let tmp55 = allowSnowflake;
            if (tmp55) {
              tmp55 = query === obj4.id;
            }
            let tmp57 = tmp55;
            if (tmp57) {
              tmp61 = c46;
            } else {
              tmp61 = getBestScore(toLocaleLowerCaseResult, arr6, flag);
            }
            let sum = tmp61;
            if (0 !== tmp61) {
              if (arr6.length > 0) {
                let items3 = [getGuildName(obj4, obj), getCategoryName(obj4, obj)];
                for (const item10147 of items3) {
                  if (null != item10147) {
                    if ("" !== item10147) {
                      let tmp69 = getBestScore(item10147, arr6, false);
                      if (0 !== tmp69) {
                        sum = sum + 0.5 * tmp70;
                      }
                    }
                  }
                  continue;
                }
                let _Math = Math;
                sum = Math.min(6, sum);
              }
              if (0 !== sum) {
                if (arr6.length <= 1) {
                  if (1 === arr6.length) {
                  }
                  if (isPartialTypeMatch(type, obj4.type)) {
                    let _Math2 = Math;
                    sum = Math.max(sum - 1, 0.5);
                  }
                  if (obj4.isThread()) {
                    if (!obj4.isActiveThread()) {
                      sum = sum - 3;
                    }
                    if (!JoinedThreadsStore.hasJoined(obj4.id)) {
                      sum = sum - 5;
                    }
                  }
                  let _Math3 = Math;
                  let scoreWithoutFetchingLatest = FrecencyStore.getScoreWithoutFetchingLatest(obj4.id);
                  if (scoreWithoutFetchingLatest == null) {
                    scoreWithoutFetchingLatest = 0 / maxScore;
                  }
                  let num2 = 7;
                  let _Math4 = Math;
                  let min2 = Math.min;
                  let sum1 = sum + 3 * min(scoreWithoutFetchingLatest, 1);
                  if (sum >= 7) {
                    num2 = c46;
                  }
                  let min2Result = min2(sum1, num2);
                  let push = items1.push;
                  let obj2 = {
                    type: authStore3(obj4.type)
                      ? AutocompleterResultTypes.VOICE_CHANNEL
                      : AutocompleterResultTypes.TEXT_CHANNEL,
                    record: obj4,
                    score: calculateScore(min2Result, boosters[obj4.id]),
                    comparator: obj8.computeChannelName(obj4, UserStore, RelationshipStore),
                    sortable: toLocaleLowerCaseResult,
                  };
                  obj8 = useChannelName;
                  let arr = push(obj2);
                }
              }
            }
          }
        } else {
          let can = PermissionStore.can;
          if (flag3) {
            let VIEW_CHANNEL = obj4.accessPermissions;
          } else {
            VIEW_CHANNEL = constants2.VIEW_CHANNEL;
          }
        }
      } else {
        let tmp24 = tmp23;
        if (tmp24) {
          let tmp31;
          if (tmp21 === GUILD_SELECTABLE_CHANNELS_KEY) {
            let tmp36 = closure_15(tmp22);
            if (!tmp36) {
              tmp36 = authStore3(tmp22);
            }
            tmp31 = tmp36;
          } else {
            tmp31 = tmp21 === GUILD_VOCAL_CHANNELS_KEY;
            if (tmp31) {
              tmp31 = authStore3(tmp22);
            }
          }
        }
      }
      continue;
    }
    const sorted = items1.sort(sortByMatchScoreDefault);
    const tmp105 = null != limit && items1.length > limit;
    if (tmp105) {
      items1.length = limit;
    }
    return items1;
  },
  queryGuilds(fuzzy) {
    let allowSnowflake;
    let filter;
    let limit;
    let query;
    let regExp;
    let regExp1;
    ({ query, limit } = fuzzy);
    if (limit === undefined) {
      limit = 10;
    }
    let flag = fuzzy.fuzzy;
    if (flag === undefined) {
      flag = true;
    }
    ({ filter, allowSnowflake } = fuzzy);
    if (filter === undefined) {
      filter = NOOP;
    }
    let boosters = fuzzy.boosters;
    if (boosters === undefined) {
      boosters = {};
    }
    let str = "";
    if ("" !== query) {
      str = query.toLocaleLowerCase();
    }
    const obj = { exactQuery: regExp, containQuery: regExp1, queryLower: str };
    const obj3 = RegexUtilsDefault;
    regExp = new RegExp("^" + obj3.escape(str), "i");
    const obj4 = RegexUtilsDefault;
    regExp1 = new RegExp(obj4.escape(str), "i");
    items = [];
    const guildsArray = GuildStore.getGuildsArray();
    const iter = guildsArray[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp5 = nextResult;
      if (filter(nextResult)) {
        let name = tmp5.name;
        let toLocaleLowerCaseResult = name.toLocaleLowerCase();
        if (allowSnowflake) {
          if (query === tmp5.id) {
            let tmp11 = c46;
            if (tmp11 > 0) {
              let obj2 = {
                type: AutocompleterResultTypes.GUILD,
                record: tmp5,
                score: calculateScore(tmp12, boosters[tmp5.id]),
                comparator: tmp5.name,
                sortable: toLocaleLowerCaseResult,
              };
              let push = items.push;
              let arr = push(obj2);
            }
          }
        }
        tmp11 = getMatchValue(toLocaleLowerCaseResult, obj, flag);
      }
      continue;
    }
    const sorted = items.sort(sortByMatchScoreDefault);
    if (items.length > limit) {
      items.length = limit;
    }
    return items;
  },
  queryDMChannels(limit) {
    let _undefined;
    let _undefined2;
    let c0;
    let c1;
    let recipients;
    let num = limit.limit;
    const query = limit.query;
    if (num === undefined) {
      num = 10;
    }
    let boosters = limit.boosters;
    if (boosters === undefined) {
      boosters = {};
    }
    c0 = undefined;
    importDefault = undefined;
    const privateChannelsVersion = ChannelStore.getPrivateChannelsVersion();
    const version = RelationshipStore.getVersion();
    ({
      channelsByRecipientId: c0,
      recipientsById: c1,
      recipients,
    } = closure_66(privateChannelsVersion, version, UserStore.getUserStoreVersion()));
    let obj = { query, members: recipients, limit: recipients.length, boosters };
    closure_66(privateChannelsVersion, version, UserStore.getUserStoreVersion());
    items = [];
    const arr = queryMemberList(obj);
    const item = arr.forEach((record) => {
      let obj2;
      const value = _undefined.get(record.record.id);
      if (null != value) {
        const push = items.push;
        const obj = {
          type: AutocompleterResultTypes.DM,
          record: value,
          score: record.score,
          comparator: obj2.getUserTag(_undefined2.get(record.record.id)),
          sortable: record.sortable,
        };
        obj2 = UserUtilsDefault;
        push(obj);
      }
    });
    const sorted = items.sort(sortByMatchScoreDefault);
    if (items.length > num) {
      items.length = num;
    }
    return items;
  },
  queryGroupDMs(fuzzy) {
    let limit;
    let obj10;
    let query;
    let regExp;
    let regExp1;
    ({ query, limit } = fuzzy);
    if (limit === undefined) {
      limit = 10;
    }
    let flag = fuzzy.fuzzy;
    if (flag === undefined) {
      flag = true;
    }
    let filter = fuzzy.filter;
    if (filter === undefined) {
      filter = NOOP;
    }
    let boosters = fuzzy.boosters;
    if (boosters === undefined) {
      boosters = {};
    }
    const stripDiacritics = StringUtils.stripDiacritics;
    StringUtils;
    const normalizer = StringUtils;
    const stripDiacriticsResult = stripDiacritics(normalizer.normalize(query.toLocaleLowerCase()));
    const obj = { exactQuery: regExp, containQuery: regExp1, queryLower: stripDiacriticsResult };
    const obj3 = RegexUtilsDefault;
    regExp = new RegExp("^" + obj3.escape(stripDiacriticsResult), "i");
    const obj4 = RegexUtilsDefault;
    regExp1 = new RegExp(obj4.escape(stripDiacriticsResult), "i");
    const tmp5 = _modDef12;
    const tmp5Result = tmp5(ChannelStore.getMutablePrivateChannels());
    items = [];
    const iter = tmp5Result.values();
    const valueResult = iter.value();
    const iter2 = valueResult[Symbol.iterator]();
    const nextResult = iter2.next();
    while (iter2 !== undefined) {
      let tmp7 = nextResult;
      if (nextResult.isMultiUserDM()) {
        if (filter(tmp7)) {
          let obj7 = useChannelName;
          let channelName = obj7.computeChannelName(tmp7, UserStore, RelationshipStore);
          let toLocaleLowerCaseResult = channelName.toLocaleLowerCase();
          let tmp15 = StringUtils;
          let stripDiacritics2 = tmp15.stripDiacritics;
          let normalizer2 = StringUtils;
          let stripDiacritics2Result = stripDiacritics2(normalizer2.normalize(toLocaleLowerCaseResult));
          let tmp17 = stripDiacritics2Result;
          let tmp19 = getMatchValue(stripDiacritics2Result, obj, flag);
          let items1 = [];
          let recipients = tmp7.recipients;
          for (const item10107 of recipients) {
            let user = UserStore.getUser(item10107);
            let tmp25 = user;
            if (null != user) {
              let username = tmp25.username;
              let tmp59 = username;
              let obj11 = UserUtilsDefault;
              let globalName = obj11.getGlobalName(tmp25);
              let nickname = RelationshipStore.getNickname(item10107);
              if (null != username) {
                let arr = items1.push(tmp59);
              }
              if (null != globalName) {
                let arr2 = items1.push(globalName);
              }
              if (null != nickname) {
                let arr6 = items1.push(nickname);
              }
            }
            continue;
          }
          for (const item10133 of items1) {
            let tmp41 = StringUtils;
            let stripDiacritics3 = tmp41.stripDiacritics;
            let normalizer3 = StringUtils;
            let _Math = Math;
            let bound = Math.min(
              5,
              getMatchValue(stripDiacritics3(normalizer3.normalize(item10133.toLocaleLowerCase())), obj, flag),
            );
            if (bound > tmp19) {
              tmp19 = bound;
            }
            continue;
          }
          if (tmp19 > 0) {
            let obj2 = {
              type: AutocompleterResultTypes.GROUP_DM,
              record: tmp7,
              score: calculateScore(tmp19, boosters[tmp7.id]),
              comparator: obj10.computeChannelName(tmp7, UserStore, RelationshipStore),
              sortable: tmp17,
            };
            let push = items.push;
            obj10 = useChannelName;
            let arr7 = push(obj2);
          }
        }
      }
      continue;
    }
    const sorted = items.sort(sortByMatchScoreDefault);
    if (items.length > limit) {
      items.length = limit;
    }
    return items;
  },
  queryApplications(fuzzy) {
    let limit;
    let query;
    let regExp;
    let regExp1;
    ({ query, limit } = fuzzy);
    if (limit === undefined) {
      limit = 10;
    }
    let flag = fuzzy.fuzzy;
    if (flag === undefined) {
      flag = true;
    }
    let filter = fuzzy.filter;
    if (filter === undefined) {
      filter = NOOP;
    }
    const toLocaleLowerCaseResult = query.toLocaleLowerCase();
    const obj = { exactQuery: regExp, containQuery: regExp1, queryLower: toLocaleLowerCaseResult };
    const obj2 = RegexUtilsDefault;
    regExp = new RegExp("^" + obj2.escape(toLocaleLowerCaseResult), "i");
    const obj3 = RegexUtilsDefault;
    regExp1 = new RegExp(obj3.escape(toLocaleLowerCaseResult), "i");
    items = [];
    const tmp4 = LAUNCHABLE_APPLICATIONS();
    const iter = tmp4[Symbol.iterator]();
    while (iter !== undefined) {
      let application = iter.next().application;
      let tmp5 = application;
      if (filter(application)) {
        let name = tmp5.name;
        let toLocaleLowerCaseResult1 = name.toLocaleLowerCase();
        let tmp8 = toLocaleLowerCaseResult1;
        let tmp10 = getMatchValue(toLocaleLowerCaseResult1, obj, flag);
        if (tmp10 > 0) {
          let obj4 = {
            type: AutocompleterResultTypes.APPLICATION,
            record: tmp5,
            score: tmp11,
            comparator: tmp5.name,
            sortable: tmp8,
          };
          let arr = items.push(obj4);
        }
      }
      continue;
    }
    const sorted = items.sort(sortByMatchScoreDefault);
    if (items.length > limit) {
      items.length = limit;
    }
    return items;
  },
  queryInAppNavigations(fuzzy) {
    let limit;
    let query;
    let regExp;
    let regExp1;
    ({ query, limit } = fuzzy);
    if (limit === undefined) {
      limit = 10;
    }
    let flag = fuzzy.fuzzy;
    if (flag === undefined) {
      flag = true;
    }
    const toLocaleLowerCaseResult = query.toLocaleLowerCase();
    const obj = { exactQuery: regExp, containQuery: regExp1, queryLower: toLocaleLowerCaseResult };
    const obj2 = RegexUtilsDefault;
    regExp = new RegExp("^" + obj2.escape(toLocaleLowerCaseResult), "i");
    const obj3 = RegexUtilsDefault;
    regExp1 = new RegExp(obj3.escape(toLocaleLowerCaseResult), "i");
    const obj4 = {};
    const SHOP = metroRequire.SHOP;
    const intl = intl13.intl;
    items = [intl.string(intl13.t.pWG4ze)];
    obj4[SHOP] = items;
    const SHOP_ORBS_TAB = metroRequire.SHOP_ORBS_TAB;
    const intl2 = intl13.intl;
    const items1 = [intl2.string(intl13.t.ElYQFS), ,];
    const intl3 = intl13.intl;
    items1[1] = intl3.string(intl13.t.pWG4ze);
    const intl4 = intl13.intl;
    items1[2] = intl4.string(intl13.t.EBYkzk);
    obj4[SHOP_ORBS_TAB] = items1;
    const QUEST_ORBS = metroRequire.QUEST_ORBS;
    const intl5 = intl13.intl;
    const items2 = [intl5.string(intl13.t.ElYQFS), ,];
    const intl6 = intl13.intl;
    items2[1] = intl6.string(intl13.t["v/R2aC"]);
    const intl7 = intl13.intl;
    items2[2] = intl7.string(intl13.t.qQR4tn);
    obj4[QUEST_ORBS] = items2;
    const NITRO_HOME = metroRequire.NITRO_HOME;
    const intl8 = intl13.intl;
    const items3 = [intl8.string(intl13.t.Ipxkog)];
    obj4[NITRO_HOME] = items3;
    const QUEST_HOME = metroRequire.QUEST_HOME;
    const intl9 = intl13.intl;
    const items4 = [intl9.string(intl13.t.JALI2K)];
    obj4[QUEST_HOME] = items4;
    const APPS_HOME = metroRequire.APPS_HOME;
    const intl10 = intl13.intl;
    const items5 = [intl10.string(intl13.t.PHjkRE)];
    const intl11 = intl13.intl;
    items5[1] = intl11.string(intl13.t.AKcFUj);
    obj4[APPS_HOME] = items5;
    const SETTINGS = metroRequire.SETTINGS;
    const intl12 = intl13.intl;
    const items6 = [intl12.string(intl13.t["3D5yo/"])];
    obj4[SETTINGS] = items6;
    const items7 = [];
    for (const key10167 in obj4) {
      let tmp20 = metroRequire[key10167];
      let tmp21 = obj4[tmp20];
      if (null == tmp21) {
        continue;
      } else {
        for (const item10171 of tmp21) {
          let toLocaleLowerCaseResult1 = item10171.toLocaleLowerCase();
          let tmp7 = toLocaleLowerCaseResult1;
          let tmp9 = getMatchValue(toLocaleLowerCaseResult1, obj, flag);
          if (tmp9 > 0) {
            let obj5 = {
              type: AutocompleterResultTypes.IN_APP_NAVIGATION,
              record: hasOwnProperty.fromType(tmp20),
              score: calculateScore(tmp10),
              comparator: tmp7,
              sortable: tmp7,
            };
            let push = items7.push;
            let arr = push(obj5);
          }
          continue;
        }
      }
      continue;
    }
    const sorted = items7.sort(sortByMatchScoreDefault);
    if (items7.length > limit) {
      items7.length = limit;
    }
    return items7;
  },
  querySKUs(fuzzy) {
    let limit;
    let query;
    let regExp;
    let regExp1;
    ({ query, limit } = fuzzy);
    if (limit === undefined) {
      limit = 10;
    }
    let flag = fuzzy.fuzzy;
    if (flag === undefined) {
      flag = true;
    }
    let filter = fuzzy.filter;
    if (filter === undefined) {
      filter = NOOP;
    }
    const toLocaleLowerCaseResult = query.toLocaleLowerCase();
    const obj = { exactQuery: regExp, containQuery: regExp1, queryLower: toLocaleLowerCaseResult };
    const obj2 = RegexUtilsDefault;
    regExp = new RegExp("^" + obj2.escape(toLocaleLowerCaseResult), "i");
    const obj3 = RegexUtilsDefault;
    regExp1 = new RegExp(obj3.escape(toLocaleLowerCaseResult), "i");
    const tmp4 = _modDef12;
    const tmp4Result = tmp4(SKUStore.getSKUs());
    items = [];
    const iter = tmp4Result.values();
    const valueResult = iter.value();
    const iter2 = valueResult[Symbol.iterator]();
    const nextResult = iter2.next();
    while (iter2 !== undefined) {
      let tmp7 = nextResult;
      if (nextResult.type === constants4.DURABLE_PRIMARY) {
        if (filter(tmp7)) {
          let name = tmp7.name;
          let toLocaleLowerCaseResult1 = name.toLocaleLowerCase();
          let tmp12 = toLocaleLowerCaseResult1;
          let tmp14 = getMatchValue(toLocaleLowerCaseResult1, obj, flag);
          if (tmp14 > 0) {
            let obj4 = {
              type: AutocompleterResultTypes.SKU,
              record: tmp7,
              score: tmp15,
              comparator: tmp7.name,
              sortable: tmp12,
            };
            let arr = items.push(obj4);
          }
        }
      }
      continue;
    }
    const sorted = items.sort(sortByMatchScoreDefault);
    if (items.length > limit) {
      items.length = limit;
    }
    return items;
  },
  getRecentlyTalked(channelId1, maxResults) {
    const channel = ChannelStore.getChannel(channelId1);
    if (null != channelId1) {
      if (null != channel) {
        const tmp6 = _modDef12;
        const messages = MessageStore.getMessages(channelId1);
        const tmp6Result = tmp6(messages.toArray());
        const reversed = tmp6Result.reverse();
        const uniqByResult = reversed.uniqBy(f90623);
        const mapped = uniqByResult.map(f90624);
        const found = mapped.filter((isNonUserBot) => {
          if (null == isNonUserBot) {
            return false;
          } else if (isNonUserBot.isNonUserBot()) {
            return false;
          } else {
            const guildId = channel.getGuildId();
            let tmp3 = null == guildId;
            if (!tmp3) {
              const member = GuildMemberStore.getMember(guildId, isNonUserBot.id);
              let joinedAt;
              if (member != null) {
                joinedAt = member.joinedAt;
              }
              tmp3 = null != joinedAt && !member.isPending;
            }
            return tmp3;
          }
        });
        const mapped1 = found.map((id) => {
          let nick;
          const guildId = channel.getGuildId();
          let member = null;
          if (null != guildId) {
            member = GuildMemberStore.getMember(guildId, id.id);
          }
          const obj = { type: AutocompleterResultTypes.USER, record: id, score: 0, comparator: nick };
          nick = undefined;
          if (member != null) {
            nick = member.nick;
          }
          if (nick == null) {
            const obj2 = UserUtilsDefault;
            nick = obj2.getName(id);
          }
          return obj;
        });
        const iter = mapped1.take(maxResults);
        iter.value();
      }
      return [];
    }
  },
  queryMentionResults(canMentionEveryone) {
    let allowSnowflake;
    let channel;
    let query;
    let request;
    ({ query, channel } = canMentionEveryone);
    let flag = canMentionEveryone.canMentionEveryone;
    if (flag === undefined) {
      flag = false;
    }
    let flag2 = canMentionEveryone.canMentionHere;
    if (flag2 === undefined) {
      flag2 = true;
    }
    let flag3 = canMentionEveryone.canMentionUsers;
    if (flag3 === undefined) {
      flag3 = true;
    }
    let flag4 = canMentionEveryone.canMentionRoles;
    if (flag4 === undefined) {
      flag4 = true;
    }
    let flag5 = canMentionEveryone.canMentionOtherGlobals;
    if (flag5 === undefined) {
      flag5 = true;
    }
    let flag6 = canMentionEveryone.includeAllGuildUsers;
    if (flag6 === undefined) {
      flag6 = false;
    }
    let flag7 = canMentionEveryone.includeNonMentionableRoles;
    if (flag7 === undefined) {
      flag7 = false;
    }
    let flag8 = canMentionEveryone.checkRecentlyTalkedOnEmptyQuery;
    if (flag8 === undefined) {
      flag8 = true;
    }
    let limit = canMentionEveryone.limit;
    if (limit === undefined) {
      limit = closure_42;
    }
    ({ allowSnowflake, request } = canMentionEveryone);
    if (allowSnowflake === undefined) {
      allowSnowflake = false;
    }
    let users;
    let closure_7;
    let formatted;
    let substr;
    let guildId;
    let globals;
    if (flag3) {
      const self = this;
      if (flag6) {
        let queryGuildUsersResult;
        let tmp = null;
        if (null != channel.guild_id) {
          const obj2 = {
            guildId: channel.guild_id,
            query,
            limit,
            checkRecentlyTalkedOnEmptyQuery: flag8,
            request,
            allowSnowflake,
          };
          queryGuildUsersResult = self.queryGuildUsers(obj2);
        }
        users = queryGuildUsersResult.map((record) => {
          record = record.record;
          const obj = {
            user: record,
            score: record.score,
            comparator: record.comparator,
            nick: GuildMemberStore.getNick(channel.guild_id, record.id),
            status: PresenceStore.getStatus(record.id),
          };
          return obj;
        });
      }
      let obj = { channelId: channel.id, query, limit, checkRecentlyTalkedOnEmptyQuery: flag8, allowSnowflake };
      queryGuildUsersResult = self.queryChannelUsers(obj);
    } else {
      users = [];
    }
    closure_7 = users.length;
    formatted = query.toLowerCase();
    items = [];
    substr = items;
    let roles = items;
    if (closure_7 < limit) {
      roles = items;
      if (flag4) {
        guildId = channel.getGuildId();
        const guild = GuildStore.getGuild(guildId);
        roles = items;
        if (null != guild) {
          const tmp37 = flag(flag7[37]);
          const tmp37Result = tmp37(GuildRoleStore.getSortedRoles(guild.id));
          const iter = tmp37Result.filter((item) => {
            let id;
            let mentionable;
            let name;
            ({ mentionable, name, id } = item);
            if (!mentionable) {
              mentionable = flag;
            }
            if (!mentionable) {
              mentionable = flag7;
            }
            if (mentionable) {
              const tmp3 = fuzzysearchDefault;
              let tmp3Result = tmp3(formatted, name.toLowerCase());
              if (!tmp3Result) {
                tmp3Result = allowSnowflake && formatted === id;
              }
              mentionable = tmp3Result;
            }
            if (mentionable) {
              const obj = SnowflakeUtilsDefault;
              mentionable = id !== obj.castGuildIdAsEveryoneGuildRoleId(guildId);
            }
            return mentionable;
          });
          const obj4 = { keys: ["name"] };
          const valueResult = iter.value();
          const obj3 = channel(flag7[45]);
          const matchSorterResult = obj3.matchSorter(valueResult, query, obj4);
          substr = matchSorterResult.slice(0, limit - closure_7);
          closure_7 = closure_7 + substr.length;
          roles = substr;
        }
      }
    }
    globals = [];
    const tmp9 = !channel.isPrivate() && flag && flag4;
    if (tmp9) {
      let tmp14Result = closure_7 < limit;
      if (tmp14Result) {
        const tmp14 = flag(flag7[32]);
        tmp14Result = tmp14(formatted, MENTION_EVERYONE().test);
      }
      if (tmp14Result) {
        globals.push(MENTION_EVERYONE());
        closure_7 = closure_7 + 1;
      }
      if (flag2) {
        flag2 = closure_7 < limit;
      }
      if (flag2) {
        const tmp22 = flag(flag7[32]);
        flag2 = tmp22(formatted, MENTION_HERE().test);
      }
      if (flag2) {
        globals.push(MENTION_HERE());
        closure_7 = closure_7 + 1;
      }
    }
    function maybePushOtherGlobal(test) {
      const tmp = flag5 && null != test;
      if (tmp) {
        const tmp5 =
          ((closure_7 < limit || 0 === formatted.length) && fuzzysearchDefault(formatted, test.test)) ||
          formatted === test.test;
        if (tmp5) {
          if (closure_7 >= limit) {
            if (substr.length > 0) {
              substr.pop();
            } else if (users.length > 0) {
              users.pop();
            }
          }
          globals.push(test);
          closure_7 = closure_7 + 1;
        }
      }
    }
    const IncludeGameMentionsInAutocomplete = channel(flag7[46]).IncludeGameMentionsInAutocomplete;
    const tmp28 = flag7;
    if (IncludeGameMentionsInAutocomplete.getSetting()) {
      let tmp30;
      if (MENTION_GAME != null) {
        tmp30 = MENTION_GAME();
      }
      maybePushOtherGlobal(tmp30);
    }
    const TimestampAutocompleteMobileExperiment = channel(tmp28[47]).TimestampAutocompleteMobileExperiment;
    if (TimestampAutocompleteMobileExperiment.getConfig({ location: "mention autocomplete" }).enabled) {
      let tmp33;
      if (MENTION_TIMESTAMP != null) {
        tmp33 = MENTION_TIMESTAMP();
      }
      maybePushOtherGlobal(tmp33);
    }
    return { users, globals, roles };
  },
  queryGuildMentionResults(canMentionUsers) {
    let canMentionEveryone;
    let guildId;
    let query;
    let status;
    let users;
    ({ query, guildId, canMentionEveryone } = canMentionUsers);
    if (canMentionEveryone === undefined) {
      canMentionEveryone = false;
    }
    let flag = canMentionUsers.canMentionUsers;
    if (flag === undefined) {
      flag = true;
    }
    let flag2 = canMentionUsers.canMentionRoles;
    if (flag2 === undefined) {
      flag2 = true;
    }
    let flag3 = canMentionUsers.canMentionNonMentionableRoles;
    if (flag3 === undefined) {
      flag3 = false;
    }
    let formatted;
    let roles;
    if (flag) {
      const self = this;
      let obj = { guildId, query };
      const queryGuildUsersResult = this.queryGuildUsers(obj);
      users = queryGuildUsersResult.map((record) => {
        const obj = { status: status.getStatus(record.record.id) };
        merged = Object.assign(record);
        return obj;
      });
    } else {
      users = [];
    }
    formatted = query.toLowerCase();
    roles = [];
    let sum = length;
    if (users.length < closure_42) {
      sum = length;
      if (flag2) {
        const guild = GuildStore.getGuild(guildId);
        sum = length;
        if (null != guild) {
          const tmp9 = flag3(roles[37]);
          const tmp9Result = tmp9(GuildRoleStore.getSortedRoles(guild.id));
          const found = tmp9Result.filter((mentionable) => {
            let tmp = mentionable.mentionable || canMentionEveryone || flag3;
            if (tmp) {
              const str = mentionable.name;
              const tmp4 = fuzzysearchDefault;
              tmp = tmp4(formatted, str.toLowerCase());
            }
            if (tmp) {
              tmp = !isEveryoneRole(mentionable);
            }
            return tmp;
          });
          const takeResult = found.take(closure_42 - users.length);
          const item = takeResult.forEach((item) => {
            roles.push(item);
          });
          sum = length + roles.length;
        }
      }
    }
    if (canMentionEveryone) {
      canMentionEveryone = flag2;
    }
    const globals = [];
    if (canMentionEveryone) {
      let tmp15Result = sum < closure_42;
      if (tmp15Result) {
        const tmp15 = flag3(roles[32]);
        tmp15Result = tmp15(formatted, MENTION_EVERYONE().test);
      }
      let sum1 = sum;
      if (tmp15Result) {
        globals.push(MENTION_EVERYONE());
        sum1 = sum + 1;
      }
      let tmp23Result = sum1 < closure_42;
      if (tmp23Result) {
        const tmp23 = flag3(roles[32]);
        tmp23Result = tmp23(formatted, MENTION_HERE().test);
      }
      if (tmp23Result) {
        globals.push(MENTION_HERE());
      }
    }
    return { users, globals, roles };
  },
  queryChoice(choices) {
    let limit;
    let query;
    let queryLower;
    ({ query, limit } = choices);
    choices = choices.choices;
    if (limit === undefined) {
      limit = 10;
    }
    let flag = choices.fuzzy;
    if (flag === undefined) {
      flag = true;
    }
    let regExp1;
    const toLocaleLowerCaseResult = query.toLocaleLowerCase();
    importDefault = toLocaleLowerCaseResult;
    let obj = require("RegexUtils");
    const regExp = new RegExp("^" + obj.escape(toLocaleLowerCaseResult), "i");
    let obj2 = require("RegexUtils");
    regExp1 = new RegExp(obj2.escape(toLocaleLowerCaseResult), "i");
    const arr = require("../../_runtime/metro/00012__.js")(choices);
    const mapped = arr.map((displayName, originalIndex) => {
      displayName = displayName.displayName;
      const obj = { exactQuery: regExp, containQuery: regExp1, queryLower };
      const tmp = getMatchValue(displayName.toLocaleLowerCase(), obj, flag);
      let tmp2 = null;
      if (tmp > 0) {
        tmp2 = { choice: displayName, score: tmp, originalIndex };
        const obj2 = { choice: displayName, score: tmp, originalIndex };
      }
      return tmp2;
    });
    const found = mapped.filter(flag(regExp1[39]).isNotNullish);
    const sortByResult = found.sortBy((score) => -1 * score.score);
    let iter = sortByResult;
    if (null !== limit) {
      iter = sortByResult.take(limit);
    }
    return iter.value();
  },
  queryStaticRouteChannels(arg0) {
    let guild;
    let intl;
    let intl2;
    let intl3;
    let query;
    let regExp;
    let regExp1;
    ({ query, guild } = arg0);
    const toLocaleLowerCaseResult = query.toLocaleLowerCase();
    const obj = { exactQuery: regExp, containQuery: regExp1, queryLower: toLocaleLowerCaseResult };
    const obj2 = RegexUtilsDefault;
    regExp = new RegExp("^" + obj2.escape(toLocaleLowerCaseResult), "i");
    const obj3 = RegexUtilsDefault;
    regExp1 = new RegExp(obj3.escape(toLocaleLowerCaseResult), "i");
    const obj4 = OnboardingHomeUtils;
    let canSeeOnboardingHomeResult = obj4.canSeeOnboardingHome(guild.id);
    if (canSeeOnboardingHomeResult) {
      const features = guild.features;
      canSeeOnboardingHomeResult = !features.has(constants3.HUB);
    }
    const features2 = guild.features;
    const hasItem = features2.has(constants3.COMMUNITY);
    const tmp5Result = useGuildOnboardingAvailable;
    let result = tmp5Result.isGuildOnboardingAvailable(guild);
    if (result) {
      const features3 = guild.features;
      result = features3.has(constants3.COMMUNITY);
    }
    const obj5 = { id: StaticChannelId.SERVER_GUIDE, name: intl.string(intl13.t.VbpLyU) };
    intl = intl13.intl;
    items = [obj5, ,];
    const obj6 = { id: StaticChannelId.CHANNEL_BROWSER, name: intl2.string(intl13.t.et6wav) };
    intl2 = intl13.intl;
    items[1] = obj6;
    const obj7 = { id: StaticChannelId.CUSTOMIZE_COMMUNITY, name: intl3.string(intl13.t.h9mGOP) };
    intl3 = intl13.intl;
    items[2] = obj7;
    const items1 = [];
    const iter = items[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp12 = nextResult;
      if (nextResult.id !== StaticChannelId.SERVER_GUIDE) {
        if (tmp12.id !== StaticChannelId.CHANNEL_BROWSER) {
          if (tmp12.id !== StaticChannelId.CUSTOMIZE_COMMUNITY) {
            let name = tmp12.name;
            if (getMatchValue(name.toLocaleLowerCase(), obj, false) > 0) {
              let obj8 = { id: null, name: null, type: ChannelTypes.UNKNOWN, guild_id: guild.id };
              ({ id: obj9.id, name: obj9.name } = tmp12);
              let self = this;
              let self2 = this;
              let push = items1.push;
              let tmp25 = new closure_19(obj8);
              let arr = push(tmp25);
            }
          }
        }
      }
      continue;
    }
    return items1;
  },
  queryChannelResults(query) {
    let channel;
    let queryChannelsResult;
    let type;
    ({ channel, type } = query);
    query = query.query;
    if (type === undefined) {
      type = GUILD_SELECTABLE_CHANNELS_KEY;
    }
    const channelTypes = query.channelTypes;
    const obj = { channels: queryChannelsResult.map((record) => record.record) };
    const obj2 = {
      query,
      guildId: channel.getGuildId(),
      limit: "r",
      fuzzy: "IconComponent",
      filter(type) {
        const hasItem = null == channelTypes || channelTypes.includes(type.type);
        return hasItem;
      },
      type,
      allowEmptyQueries: false,
    };
    queryChannelsResult = this.queryChannels(obj2);
    return obj;
  },
  queryApplicationCommandChannelResults(limit) {
    let channel;
    let channelTypes;
    const self = this;
    ({ channel, channelTypes } = limit);
    limit = limit.limit;
    const query = limit.query;
    if (limit === undefined) {
      limit = closure_42;
    }
    if (null == channel.guild_id) {
      items = [];
      const tmp11 = null == channelTypes || channelTypes.includes(channel.type);
      if (tmp11) {
        items.push(channel);
      }
      return { channels: items };
    } else {
      let items1 = [];
      for (const item10012 of items) {
        let obj = {
          query,
          guildId: channel.guild_id,
          limit,
          fuzzy: true,
          filter(type) {
            const hasItem = null == channelTypes || channelTypes.includes(type.type);
            return hasItem;
          },
          type: item10012,
          allowEmptyQueries: true,
          requireVocalConnectAccess: false,
          allowSnowflake: tmp,
        };
        items1 = items1.concat(self.queryChannels(obj));
        continue;
      }
      const found = items1.filter((record) => "null" !== record.record.id);
      let sorted = found.sort(compareChannelsByScoreAndPositionDefault);
      const tmp7 = null != limit && sorted.length > limit;
      if (tmp7) {
        sorted = sorted.slice(0, limit);
      }
      const obj3 = { channels: sorted.map((record) => record.record) };
      return obj3;
    }
  },
  queryChoiceResults(query) {
    let queryChoiceResult;
    const obj = { choices: queryChoiceResult.map((choice) => choice.choice) };
    const obj2 = { query: query.query, choices: query.choices, limit: null };
    queryChoiceResult = this.queryChoice(obj2);
    return obj;
  },
  queryEmojiResults(maxCount) {
    let channel;
    let intention;
    let query;
    maxCount = maxCount.maxCount;
    ({ query, channel, intention } = maxCount);
    if (maxCount === undefined) {
      maxCount = closure_42;
    }
    const matchComparator = maxCount.matchComparator;
    const FrecencyUserSettingsActionCreators = UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
    const obj = {
      emojis: EmojiStore.searchWithoutFetchingLatest({ channel, query, count: maxCount, intention, matchComparator }),
    };
    return obj;
  },
  queryStickers(items, arg1) {
    let closure_3;
    let items1;
    let nextResult;
    let nextResult1;
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    let tmp = items1;
    if (items1 === undefined) {
      items = [null, NOOP];
      tmp = items;
    }
    [importDefault] = tmp;
    let closure_6;
    dependencyMap = UserStore.getCurrentUser();
    set = new Set();
    items1 = [];
    let closure_5 = items1;
    const FrecencyUserSettingsActionCreators = flag(2033).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
    function _loop() {
      if ("" === closure_6) {
        let num = 1;
        return 1;
      } else {
        const toLocaleLowerCaseResult = closure_6.toLocaleLowerCase();
        flag = toLocaleLowerCaseResult;
        let obj2 = flag(closure_3[33]);
        const stripDiacriticsResult = obj2.stripDiacritics(toLocaleLowerCaseResult);
        const _RegExp = RegExp;
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const obj3 = require("RegexUtils");
        const regExp = new RegExp("^" + obj3.escape(stripDiacriticsResult), "i");
        const _RegExp2 = RegExp;
        const _HermesInternal2 = HermesInternal;
        const self3 = this;
        const self4 = this;
        const obj4 = require("RegexUtils");
        const regExp1 = new RegExp("" + obj4.escape(stripDiacriticsResult), "i");
        const stickerMetadataArrays = StickersStore.getStickerMetadataArrays();
        let item = stickerMetadataArrays.forEach((arr) => {
          let regex;
          let regex2;
          const item = arr.forEach((item, index) => {
            let num = 0;
            let tmp = null;
            const stickerById = StickersStore.getStickerById(index);
            if (null != stickerById) {
              const obj2 = flag(closure_3[52]);
              if (regExp1(stickerById, obj2.getStickerSendability(stickerById, closure_2_3, regExp))) {
                const iter = item[Symbol.iterator]();
                const iter2 = iter.next();
                while (iter !== undefined) {
                  let type = iter2.type;
                  let tmp7 = type;
                  let value = iter2.value;
                  let tmp9 = getPriorityForStickerMetadataType(type);
                  let num4 = 0;
                  if (flag) {
                    if (value === closure_1_0) {
                      num4 = closure_3_46 * tmp9;
                    } else if (regex.test(value)) {
                      num4 = 7 * tmp9;
                    } else {
                      let tmp18 = tmp7 !== flag(closure_3[36]).StickerMetadataTypes.GUILD_NAME;
                      if (tmp18) {
                        tmp18 = tmp7 !== flag(closure_3[36]).StickerMetadataTypes.PACK_NAME;
                      }
                      if (tmp18) {
                        tmp18 = tmp7 !== flag(closure_3[36]).StickerMetadataTypes.STICKER_NAME;
                      }
                      if (!tmp18) {
                        tmp18 = !regex2.test(value);
                      }
                      if (!tmp18) {
                        num4 = 5 * tmp9;
                      }
                    }
                  } else if (value === closure_1_0) {
                    num4 = closure_3_46 * tmp9;
                    tmp = value;
                  }
                  if (num4 > num) {
                    num = num4;
                    tmp = value;
                  }
                  continue;
                }
                const stickerFrecencyWithoutFetchingLatest =
                  StickersPersistedStore.stickerFrecencyWithoutFetchingLatest;
                const score = stickerFrecencyWithoutFetchingLatest.getScore(index);
                if (null != score) {
                  num = num * (score / 100);
                }
                const tmp37 = num > 0 && null != tmp && !set.has(stickerById.id);
                if (tmp37) {
                  set.add(stickerById.id);
                  const obj = { sticker: stickerById, comparator: tmp, score: num };
                  closure_2_5.push(obj);
                }
              }
            }
          });
        });
      }
    }
    let iter2 = items[Symbol.iterator]();
    while (iter2 !== undefined) {
      closure_6 = iter2.next();
      let _loopResult = _loop();
      continue;
    }
    let obj = _modDef12(items1);
    const iter3 = obj.sortBy((score) => -1 * score.score);
    let valueResult = iter3.value();
    closure_5 = valueResult;
    if (0 === valueResult.length) {
      closure_5 = closure_49;
      valueResult = closure_49;
    }
    return valueResult;
  },
  querySoundmoji(View, channel) {
    _require = channel;
    const currentUser = UserStore.getCurrentUser();
    const isFetchingResult = SoundboardStore.isFetching();
    const tmp3 = !isFetchingResult && !SoundboardStore.hasFetchedAllSounds();
    if (tmp3) {
      const obj2 = require("SoundboardActionCreators");
      const result = obj2.maybeFetchSoundboardSounds();
    }
    const FrecencyUserSettingsActionCreators =
      require("UserSettingsProtoActionCreators").FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
    const sounds = SoundboardStore.getSounds();
    const fromResult = from(sounds.values());
    const reduced = fromResult.reduce((acc, arr) => {
      const item = arr.forEach((item) => {
        let guild_id;
        const tmp = isSoundValidDefault;
        if (acc != null) {
          guild_id = acc.guild_id;
        }
        let id;
        if (acc != null) {
          id = acc.id;
        }
        if (tmp(item, guild_id, id)) {
          acc.push(item);
        }
      });
      return acc;
    }, []);
    const obj4 = require("searchSounds");
    return obj4.searchSounds(View, reduced, currentUser, channel);
  },
  matchSentinel(arg0, arg1, authStore2) {
    const isMatch = re48.test(arg1);
    return !isMatch && arg0 === authStore2;
  },
  hasSameRoleAsUsername(getGuildId, user) {
    if (user.hasUniqueUsername()) {
      const guild = GuildStore.getGuild(getGuildId.getGuildId());
      if (null != guild) {
        let sortedRoles = GuildRoleStore.getSortedRoles(guild.id);
      } else {
        sortedRoles = [];
      }
      for (const item10019 of sortedRoles) {
        let str = item10019.name;
        let username = user.username;
        if (username.startsWith(str.toLowerCase())) {
          obj.return();
          let flag2 = true;
          return true;
        }
      }
      return false;
    } else {
      return false;
    }
  },
  queryMemberList,
};
let result = size.fileFinishedImporting("utils/AutocompleteUtils.tsx");

export default obj;
export const WHITESPACE_REGEX = tmp7;
export { calculateScore };
export const getGameProfileMatchTier = function getGameProfileMatchTier(name, arg1, index) {
  let num2;
  const toLocaleLowerCaseResult = name.toLocaleLowerCase();
  if (toLocaleLowerCaseResult === arg1) {
    num2 = c46;
  } else {
    num2 = 7;
    if (!toLocaleLowerCaseResult.startsWith(arg1)) {
      const _Math = Math;
      num2 = Math.max(1, 7 - index);
    }
  }
  return num2;
};
export const getBoosterMap = function getBoosterMap(USER) {
  return merged.get(USER);
};
export const COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS = items;
