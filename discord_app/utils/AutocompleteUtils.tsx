// discord_app/utils/AutocompleteUtils.tsx
import LoggerDefault from "../modules/debug/Logger.tsx";
import SnowflakeUtilsDefault from "SnowflakeUtils.tsx";
import _modDef12 from "../../_runtime/metro/00012__.js";
import util from "../intl/index.native.tsx";
import GlobalUtils from "GlobalUtils.tsx";
import StringUtils from "StringUtils.tsx";
import UserSettingsProtoActionCreators from "../modules/user_settings/UserSettingsProtoActionCreators.tsx";
import PermissionUtilsAll from "PermissionUtils.tsx";
import UserUtilsDefault from "UserUtils.tsx";
import RegexUtilsDefault from "RegexUtils.tsx";
import useChannelName from "../modules/channel/useChannelName.tsx";
import StickersTypes from "../modules/stickers/StickersTypes.tsx";
import fuzzysearchDefault from "../../_runtime/05517_fuzzysearch.js";
import autocompleter_sortByMatchScoreDefault from "../modules/autocompleter/sortByMatchScore.tsx";
import GuildUtilsDefault from "GuildUtils.tsx";
import OnboardingHomeUtils from "../modules/guild_onboarding_home/OnboardingHomeUtils.tsx";
import useGuildOnboardingAvailable from "../modules/guild_onboarding/useGuildOnboardingAvailable.tsx";
import compareChannelsByScoreAndPositionDefault from "../modules/channel_text_area/compareChannelsByScoreAndPosition.tsx";
import _slicedToArray from "../../_runtime/metro/00032__.js";
import EmojiStore from "../modules/emojis/EmojiStore.tsx";
import SoundboardStore from "../modules/soundboard/SoundboardStore.tsx";
import StickersPersistedStore from "../modules/stickers/StickersPersistedStore.tsx";
import StickersStore from "../modules/stickers/StickersStore.tsx";
import ActiveJoinedThreadsStore from "../modules/threads/ActiveJoinedThreadsStore.tsx";
import JoinedThreadsStore from "../modules/threads/JoinedThreadsStore.tsx";
import UserRecord from "../records/UserRecord.tsx";
import ChannelStore from "../stores/ChannelStore.tsx";
import FrecencyStore from "../stores/FrecencyStore.tsx";
import GuildChannelStore from "../stores/GuildChannelStore.tsx";
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

require = fn;
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
function getMatchValue(toLocaleLowerCaseResult1, nextResult, flag) {
  ({ exactQuery, containQuery, queryLower } = nextResult);
  if (flag === undefined) {
    flag = true;
  }
  try {
    if (exactQuery.test(toLocaleLowerCaseResult1)) {
      let num5 = 7;
      if (toLocaleLowerCaseResult1.toLocaleLowerCase() === queryLower) {
        num5 = c46;
      }
      return num5;
    } else if (containQuery.test(toLocaleLowerCaseResult1)) {
      return 5;
    } else if (
      (function multiTokenMatch(queryLower, toLocaleLowerCaseResult1) {
        closure_0 = toLocaleLowerCaseResult1;
        const parts = queryLower.split(/(?:,| )+/);
        return parts.every((item) => {
          const regExp = new RegExp(RegexUtilsDefault.escape(item), "i");
          return regExp.test(closure_0);
        });
      })(queryLower, toLocaleLowerCaseResult1)
    ) {
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
function queryMemberList(arg0) {
  ({ query, members, limit, filter, boosters } = arg0);
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
      let tmp5 = members[num2];
      if (tmp5 instanceof UserRecord) {
        let nick = GuildMemberStore.getNick(guildId, tmp5.id);
        let toLocaleLowerCaseResult1;
        if (nick != null) {
          toLocaleLowerCaseResult1 = nick.toLocaleLowerCase();
        }
        let str = toLocaleLowerCaseResult1;
        let tmp9 = tmp5;
      } else {
        nick = tmp5.nick;
        if (nick != null) {
          str = nick.toLocaleLowerCase();
        }
        tmp9 = users[tmp5.userId];
      }
      let tmp12 = importDefault;
      let obj1 = UserUtilsDefault;
      let globalName = obj1.getGlobalName(tmp9);
      if (globalName != null) {
        let str2 = globalName.toLocaleLowerCase();
      }
      let sum = num;
      if (null != tmp9) {
        if (null == filter) {
          let username = tmp9.username;
          let str3 = username.toLocaleLowerCase();
          let tmp16 = require;
          let obj4 = StringUtils;
          let str4 = obj4.stripDiacritics(str3);
          let normalizer2 = StringUtils;
          let str5 = normalizer2.normalize(str4);
          if (null == str) {
            let items2 = [null, null];
          } else {
            let tmp16Result = tmp16(1925);
            let stripDiacriticsResult = tmp16Result.stripDiacritics(str);
            items2 = [stripDiacriticsResult];
            let normalizer3 = tmp16(1925);
            items2[1] = normalizer3.normalize(stripDiacriticsResult);
          }
          let tmp18 = _slicedToArray;
          let tmp19 = _slicedToArray(items2, 2);
          [str6, str7] = tmp19;
          if (null == str2) {
            let items3 = [null, null];
          } else {
            tmp16Result = tmp16(1925);
            let stripDiacriticsResult1 = tmp16Result.stripDiacritics(str2);
            items3 = [stripDiacriticsResult1];
            let normalizer4 = tmp16(1925);
            items3[1] = normalizer4.normalize(stripDiacriticsResult1);
          }
          let tmp18Result = tmp18(items3, 2);
          [str8, str9] = tmp18Result;
          if (!tmp) {
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
                              let tmp33 = num < 50;
                              if (num < 50) {
                                let tmp28 =
                                  tmp12(5517)(toLocaleLowerCaseResult, str4) || tmp12(5517)(normalizeResult, str5);
                                if (!tmp28) {
                                  let tmp29 = null != str6 && tmp12(5517)(toLocaleLowerCaseResult, str6);
                                  tmp28 = tmp29;
                                }
                                if (!tmp28) {
                                  let tmp30 = null != str7 && tmp12(5517)(normalizeResult, str7);
                                  tmp28 = tmp30;
                                }
                                if (!tmp28) {
                                  let tmp31 = null != str8 && tmp12(5517)(toLocaleLowerCaseResult, str8);
                                  tmp28 = tmp31;
                                }
                                if (!tmp28) {
                                  let tmp32 = null != str9 && tmp12(5517)(normalizeResult, str9);
                                  tmp28 = tmp32;
                                }
                                tmp33 = tmp28;
                              }
                              sum = num;
                              if (tmp33) {
                                let obj = { type: null, record: null, score: null, comparator: null, sortable: null };
                                obj.type = AutocompleterResultTypes.USER;
                                obj.record = tmp9;
                                let num3;
                                if (boosters != null) {
                                  num3 = boosters[tmp9.id];
                                }
                                if (num3 == null) {
                                  num3 = 1;
                                }
                                obj.score = 1000 * num3;
                                let tmp35 = str2;
                                if (str2 == null) {
                                  tmp35 = str;
                                }
                                if (tmp35 == null) {
                                  tmp35 = str3;
                                }
                                obj.comparator = tmp35;
                                let tmp36 = str8;
                                if (str8 == null) {
                                  tmp36 = str6;
                                }
                                if (tmp36 == null) {
                                  tmp36 = str4;
                                }
                                obj.sortable = tmp36;
                                let arr = items1.push(obj);
                                sum = num + 1;
                              }
                            }
                          }
                        }
                        obj = { type: null, record: null, score: null, comparator: null, sortable: null };
                        obj.type = AutocompleterResultTypes.USER;
                        obj.record = tmp9;
                        let num4;
                        if (boosters != null) {
                          num4 = boosters[tmp9.id];
                        }
                        if (num4 == null) {
                          num4 = 1;
                        }
                        obj.score = 1000 * num4;
                        let tmp39 = str2;
                        if (str2 == null) {
                          tmp39 = str;
                        }
                        if (tmp39 == null) {
                          tmp39 = str3;
                        }
                        obj.comparator = tmp39;
                        let tmp40 = str8;
                        if (str8 == null) {
                          tmp40 = str6;
                        }
                        if (tmp40 == null) {
                          tmp40 = str4;
                        }
                        obj.sortable = tmp40;
                        arr = items.push(obj);
                        sum = num;
                      }
                    }
                  }
                }
              }
            }
          }
          obj1 = { type: null, record: null, score: null, comparator: null, sortable: null };
          obj1.type = AutocompleterResultTypes.USER;
          obj1.record = tmp9;
          let num5 = c46;
          let num6;
          if (boosters != null) {
            num6 = boosters[tmp9.id];
          }
          if (num5 === undefined) {
            num5 = 0;
          }
          if (num6 == null) {
            num6 = 1;
          }
          obj1.score = 1000 * num5 * num6;
          if (str2 == null) {
            str2 = str;
          }
          if (str2 == null) {
            str2 = str3;
          }
          obj1.comparator = str2;
          if (str8 == null) {
            str8 = str6;
          }
          if (str8 == null) {
            str8 = str4;
          }
          obj1.sortable = str8;
          let arr1 = items.push(obj1);
          sum = num;
        } else {
          sum = num;
        }
      }
      num2 = num2 + 1;
      num = sum;
    } while (num2 < length);
  }
  const sorted = items.sort(autocompleter_sortByMatchScoreDefault);
  let combined = items;
  if (items.length < limit) {
    const sorted1 = items1.sort(autocompleter_sortByMatchScoreDefault);
    const _Math = Math;
    combined = items.concat(items1.slice(0, Math.max(0, limit - items.length)));
  }
  if (combined.length > limit) {
    combined.length = limit;
  }
  return combined;
}
function getPriorityForStickerMetadataType(arg0) {
  if (StickersTypes.StickerMetadataTypes.STICKER_NAME === arg0) {
    return 11;
  } else if (tmp(5268).StickerMetadataTypes.CORRELATED_EMOJI === arg0) {
    return 6;
  } else if (tmp(5268).StickerMetadataTypes.TAG === arg0) {
    return 1;
  } else {
    if (tmp(5268).StickerMetadataTypes.GUILD_NAME !== arg0) {
      if (tmp(5268).StickerMetadataTypes.PACK_NAME !== arg0) {
        return 1;
      }
    }
    return 8;
  }
}
function isPartialTypeMatch(arg0, arg1) {
  let tmp = arg0 === GUILD_SELECTABLE_CHANNELS_KEY;
  if (tmp) {
    tmp = value2(arg1);
  }
  return tmp;
}
function getBestScore(toLocaleLowerCaseResult1, arr, flag) {
  let num = 0;
  let tmp = null;
  const iter = arr[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = getMatchValue(toLocaleLowerCaseResult1, nextResult, flag);
    if (tmp5 > num) {
      num = tmp5;
      tmp = nextResult;
    }
    continue;
  }
  if (null != tmp) {
    if (tmp.isFullMatch) {
      arr.length = 0;
    } else {
      arr.splice(arr.indexOf(tmp), 1);
    }
  }
  return num;
}
function getGuildName(guild_id, arg1) {
  if (null != guild_id.guild_id) {
    let tmp2 = arg1[guild_id.guild_id];
    if (null == tmp2) {
      const guild = GuildStore.getGuild(guild_id.guild_id);
      let toLocaleLowerCaseResult;
      if (guild != null) {
        const name = guild.name;
        toLocaleLowerCaseResult = name.toLocaleLowerCase();
      }
      arg1[guild_id.guild_id] = toLocaleLowerCaseResult;
      tmp2 = toLocaleLowerCaseResult;
    }
    return tmp2;
  }
}
function getCategoryName(parent_id, arg1) {
  if (null != parent_id.parent_id) {
    let tmp2 = arg1[parent_id.parent_id];
    if (null == tmp2) {
      const channel = ChannelStore.getChannel(parent_id.parent_id);
      let toLocaleLowerCaseResult;
      if (channel != null) {
        const name = channel.name;
        toLocaleLowerCaseResult = name.toLocaleLowerCase();
      }
      arg1[parent_id.parent_id] = toLocaleLowerCaseResult;
      tmp2 = toLocaleLowerCaseResult;
    }
    return tmp2;
  }
}
const InAppNavigationRecord = fn(5443);
({ InAppNavigationRecord: hasOwnProperty, InAppNavigationType: metroRequire } = InAppNavigationRecord);
const ChannelRecord = fn(1961);
({
  ChannelRecordBase: map1,
  isGuildChannelType: closure_14,
  isGuildSelectableChannelType: closure_15,
  isGuildVocalChannelType: closure_16,
  isThread: closure_17,
  PrivateChannelRecord: closure_18,
  UnknownChannelRecord: closure_19,
} = ChannelRecord);
const isEveryoneRole = fn(2016).isEveryoneRole;
let GuildChannelStore = fn(2012);
const GUILD_SELECTABLE_CHANNELS_KEY = GuildChannelStore.GUILD_SELECTABLE_CHANNELS_KEY;
const GUILD_VOCAL_CHANNELS_KEY = GuildChannelStore.GUILD_VOCAL_CHANNELS_KEY;
const Constants = fn(1074);
({ Permissions: closure_38, GuildFeatures: closure_39, ChannelTypes } = Constants);
({ SKUTypes: closure_41, MAX_AUTOCOMPLETE_RESULTS: closure_42 } = Constants);
fn(5515).AutocompleterResultTypes;
const StaticChannelId = fn(1964).StaticChannelId;
const logger = new LoggerDefault("AutocompleteUtils");
let c46 = 10;
let tmp7 = /(\t|\s)/;
const re48 = tmp7;
let closure_49 = [];
const MENTION_EVERYONE = fn(5516).default.MENTION_EVERYONE;
const MENTION_HERE = fn(5516).default.MENTION_HERE;
const MENTION_GAME = fn(5516).default.MENTION_GAME;
const MENTION_TIMESTAMP = fn(5516).default.MENTION_TIMESTAMP;
const LAUNCHABLE_APPLICATIONS = fn(5516).default.LAUNCHABLE_APPLICATIONS;
class AutocompleteBoostersCache {
  constructor() {
    merged = Object.assign({
      lastFrecencyVersion: null,
      lastRelationshipVersion: null,
      lastPrivateChannelsVersion: null,
      cache: null,
    });
    map = new Map();
    merged[3] = map;
    return merged;
  }
}
const prototype = AutocompleteBoostersCache.prototype;
prototype["get"] = function get(arg0) {
  const self = this;
  if (this.isStale()) {
    const cache = self.cache;
    cache.clear();
  }
  const cache2 = self.cache;
  value = cache2.get(arg0);
  if (null != value) {
    return value;
  } else {
    const buildResult = self.build(arg0);
    const cache3 = self.cache;
    const result = cache3.set(arg0, buildResult);
    return buildResult;
  }
};
prototype["isStale"] = function isStale() {
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
};
prototype["build"] = function build(arg0) {
  let frequentlyWithoutFetchingLatest = FrecencyStore.getFrequentlyWithoutFetchingLatest();
  const reduced = frequentlyWithoutFetchingLatest.reduce((acc, id) => {
    let tmp = acc;
    scoreWithoutFetchingLatest = scoreWithoutFetchingLatest.getScoreWithoutFetchingLatest(id.id);
    if (scoreWithoutFetchingLatest > acc) {
      tmp = scoreWithoutFetchingLatest;
    }
    return tmp;
  }, 0);
  if (AutocompleterResultTypes.GUILD === arg0) {
    let found = frequentlyWithoutFetchingLatest.filter((item) => require("GuildRecordUtils").isGuildRecord(item));
  } else if (tmp3.USER === arg0) {
    found = frequentlyWithoutFetchingLatest.filter((type) => {
      let tmp = type instanceof closure_1_13;
      if (tmp) {
        tmp = type.type === constants.DM;
      }
      return tmp;
    });
  } else {
    if (tmp3.GROUP_DM === arg0) {
      found = frequentlyWithoutFetchingLatest.filter(
        (isMultiUserDM) => isMultiUserDM instanceof closure_1_13 && isMultiUserDM.isMultiUserDM(),
      );
    } else if (tmp3.TEXT_CHANNEL !== arg0) {
      found = [];
      if (tmp3.VOICE_CHANNEL === arg0) {
        found = frequentlyWithoutFetchingLatest.filter(
          (isGuildVocal) => isGuildVocal instanceof closure_1_13 && isGuildVocal.isGuildVocal(),
        );
      }
    }
    found = frequentlyWithoutFetchingLatest.filter((type) => {
      let tmp = type instanceof closure_1_13;
      if (tmp) {
        tmp = closure_1_15(type.type);
      }
      return tmp;
    });
  }
  frequentlyWithoutFetchingLatest = found[Symbol.iterator]();
};
let merged = Object.assign({
  lastFrecencyVersion: null,
  lastRelationshipVersion: null,
  lastPrivateChannelsVersion: null,
  cache: null,
});
let tmp6 = new LoggerDefault("AutocompleteUtils");
merged[3] = new Map();
let items = [GUILD_SELECTABLE_CHANNELS_KEY, GUILD_VOCAL_CHANNELS_KEY, ChannelTypes.GUILD_CATEGORY];
let FunctionUtils = fn(1933);
let closure_66 = FunctionUtils.cachedFunction(() => {
  const channelsByRecipientId = new Map();
  const recipientsById = new Map();
  const recipients = [];
  const tmp3 = recipientsById(12);
  const tmp3Result = recipientsById(12)(ChannelStore.getMutablePrivateChannels());
  const iter = recipientsById(12)(ChannelStore.getMutablePrivateChannels()).values();
  const item = recipientsById(12)(ChannelStore.getMutablePrivateChannels())
    .values()
    .value()
    .forEach((isDM) => {
      if (isDM.isDM()) {
        const recipientId = isDM.getRecipientId();
        const user = UserStore.getUser(recipientId);
        let hasItem = null == recipientId || null == user;
        if (!hasItem) {
          hasItem = channelsByRecipientId.has(recipientId);
        }
        if (!hasItem) {
          const result = channelsByRecipientId.set(recipientId, isDM);
          const obj = { userId: recipientId, nick: RelationshipStore.getNickname(recipientId) };
          recipients.push(obj);
          const result1 = recipientsById.set(recipientId, user);
        }
      }
    });
  return { channelsByRecipientId, recipientsById, recipients };
});
FunctionUtils = {
  queryFriends(limit) {
    let num = limit.limit;
    if (num === undefined) {
      num = 10;
    }
    const obj = { query: limit.query, members: null, limit: null, filter: null };
    const friendIDs = RelationshipStore.getFriendIDs();
    const mapped = friendIDs.map((item) => user.getUser(item));
    obj.members = mapped.filter(GlobalUtils.isNotNullish);
    obj.limit = num;
    obj.filter = limit.filter;
    return queryMemberList(obj);
  },
  queryDMUsers(limit) {
    let num = limit.limit;
    if (num === undefined) {
      num = 10;
    }
    const obj = { query: limit.query, members: null, limit: null, filter: null };
    const dMUserIds = ChannelStore.getDMUserIds();
    const mapped = dMUserIds.map((item) => user.getUser(item));
    obj.members = mapped.filter(GlobalUtils.isNotNullish);
    obj.limit = num;
    obj.filter = limit.filter;
    return queryMemberList(obj);
  },
  queryChannelUsers(request) {
    ({ query, limit } = request);
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
    let flag3 = request.allowSnowflake;
    if (flag3 === undefined) {
      flag3 = false;
    }
    let channel1;
    let obj = ChannelStore;
    const channel = ChannelStore.getChannel(request.channelId);
    if (null == channel) {
      return [];
    } else {
      channel1 = null;
      if (channel.isThread()) {
        channel1 = obj.getChannel(channel.parent_id);
      }
      if (channel1 == null) {
        channel1 = channel;
      }
      if (null == channel1) {
        return [];
      } else {
        if (channel1.isPrivate()) {
          const recipients = channel1.recipients;
          const mapped = recipients.map((userId) => {
            const obj = { userId, nick: null };
            nickname = nickname.getNickname(userId);
            if (nickname == null) {
              nickname = null;
            }
            obj.nick = nickname;
            return obj;
          });
          const currentUser = UserStore.getCurrentUser();
          let tmp6 = mapped;
          if (null != currentUser) {
            obj = { userId: currentUser.id, nick: null };
            mapped.push(obj);
            tmp6 = mapped;
          }
        } else {
          if (0 === query.length) {
            if (flag2) {
              const id = channel.id;
              const channel2 = obj.getChannel(id);
              closure_129_0 = channel2;
              if (null != id) {
                if (null != channel2) {
                  const messages = MessageStore.getMessages(id);
                  const reversed = _modDef12(messages.toArray()).reverse();
                  const tmp16Result = _modDef12(messages.toArray());
                  const mapped1 = reversed
                    .uniqBy((author) => author.author.id)
                    .map((author) => user.getUser(author.author.id));
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
                        const tmp7 = null != joinedAt && !member.isPending;
                      }
                      return tmp3;
                    }
                  });
                  const mapped2 = found.map((id) => {
                    const guildId = channel.getGuildId();
                    let member = null;
                    if (null != guildId) {
                      member = GuildMemberStore.getMember(guildId, id.id);
                    }
                    const obj = { type: AutocompleterResultTypes.USER, record: id, score: 0, comparator: null };
                    let nick;
                    if (member != null) {
                      nick = member.nick;
                    }
                    if (nick == null) {
                      nick = UserUtilsDefault.getName(id);
                    }
                    obj.comparator = nick;
                    return obj;
                  });
                  const uniqByResult = reversed.uniqBy((author) => author.author.id);
                  items = mapped2.take(limit).value();
                  const iter = mapped2.take(limit);
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
            const members1 = GuildUtilsDefault.requestMembers(channel1.guild_id, query, limit);
            tmp6 = found1;
          }
        }
        obj = {
          query,
          members: tmp6,
          limit,
          filter(user) {
            let isPrivateResult = channel1.isPrivate();
            if (!isPrivateResult) {
              const obj = { permission: constants2.VIEW_CHANNEL, user, context: channel1 };
              isPrivateResult = obj.can(obj);
            }
            return isPrivateResult;
          },
          allowSnowflake: flag3,
        };
        return queryMemberList(obj);
      }
    }
  },
  queryGuildUsers(request) {
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
              const messages = MessageStore.getMessages(channelId);
              const reversed = _modDef12(messages.toArray()).reverse();
              const tmp14Result = _modDef12(messages.toArray());
              const mapped = reversed
                .uniqBy((author) => author.author.id)
                .map((author) => user.getUser(author.author.id));
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
                    const tmp7 = null != joinedAt && !member.isPending;
                  }
                  return tmp3;
                }
              });
              const mapped1 = found.map((id) => {
                const guildId = channel.getGuildId();
                let member = null;
                if (null != guildId) {
                  member = GuildMemberStore.getMember(guildId, id.id);
                }
                const obj = { type: AutocompleterResultTypes.USER, record: id, score: 0, comparator: null };
                let nick;
                if (member != null) {
                  nick = member.nick;
                }
                if (nick == null) {
                  nick = UserUtilsDefault.getName(id);
                }
                obj.comparator = nick;
                return obj;
              });
              const uniqByResult = reversed.uniqBy((author) => author.author.id);
              items = mapped1.take(limit).value();
              const iter = mapped1.take(limit);
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
      obj = { query, members: found1, limit, filter, allowSnowflake };
      return queryMemberList(obj);
    }
  },
  queryUsers(limit) {
    let num = limit.limit;
    ({ query, filter, boosters } = limit);
    if (num === undefined) {
      num = 10;
    }
    return queryMemberList({
      query,
      members: limit.users,
      limit: num,
      filter,
      allowSnowflake: limit.allowSnowflake,
      boosters,
    });
  },
  queryAllUsers(request) {
    ({ query, limit } = request);
    ({ filter, boosters } = request);
    if (limit === undefined) {
      limit = 10;
    }
    let flag = request.request;
    if (flag === undefined) {
      flag = true;
    }
    let tmp = flag;
    if (flag) {
      tmp = query.length > 0;
    }
    if (tmp) {
      let obj = GuildUtilsDefault;
      const members = obj.requestMembers(null, query, limit);
    }
    obj = { query, limit, request: flag, filter, boosters, users: null };
    const tmp6Result = _modDef12(UserStore.getUsers());
    obj.users = _modDef12(UserStore.getUsers()).values().value();
    return this.queryUsers(obj);
  },
  queryChannels(guildId) {
    guildId = guildId.guildId;
    let type = guildId.type;
    if (type === undefined) {
      type = GUILD_SELECTABLE_CHANNELS_KEY;
    }
    let flag2 = guildId.allowEmptyQueries;
    if (flag2 === undefined) {
      flag2 = false;
    }
    ({ allowSnowflake, includeAllThreads } = guildId);
    (function getSeparatedQueries(query, flag2) {
      let flag = flag2;
      if (flag2 === undefined) {
        flag = false;
      }
      const parts = query.split(" ");
      const found = parts.filter((item) => "" !== item || flag);
      const mapped = found.map((toLocaleLowerCase) => {
        const toLocaleLowerCaseResult = toLocaleLowerCase.toLocaleLowerCase();
        const obj = { queryLower: toLocaleLowerCaseResult, exactQuery: null, containQuery: null, isFullMatch: false };
        const regExp = new RegExp("^" + closure_1_1(4547).escape(toLocaleLowerCaseResult), "i");
        obj.exactQuery = regExp;
        const obj2 = closure_1_1(4547);
        const regExp1 = new RegExp(closure_1_1(4547).escape(toLocaleLowerCaseResult), "i");
        obj.containQuery = regExp1;
        return obj;
      });
      if (query.includes(" ")) {
        let toLocaleLowerCaseResult = query.toLocaleLowerCase();
        let obj = { queryLower: toLocaleLowerCaseResult, exactQuery: null, containQuery: null, isFullMatch: true };
        const _RegExp = RegExp;
        let obj2 = closure_1(4547);
        const _HermesInternal = HermesInternal;
        let regExp = new RegExp("^" + closure_1(4547).escape(toLocaleLowerCaseResult).replace(" ", "( |-)"), "i");
        obj.exactQuery = regExp;
        const _RegExp2 = RegExp;
        const str = closure_1(4547).escape(toLocaleLowerCaseResult);
        const obj3 = closure_1(4547);
        let regExp1 = new RegExp(closure_1(4547).escape(toLocaleLowerCaseResult).replace(" ", "( |-)"), "i");
        obj.containQuery = regExp1;
        mapped.unshift(obj);
        const str6 = closure_1(4547).escape(toLocaleLowerCaseResult);
      }
      return mapped;
    })(guildId.query, flag2);
    items = (function includesThreads(type) {
      let tmp = type === GUILD_SELECTABLE_CHANNELS_KEY;
      if (!tmp) {
        let tmp3 = type !== GUILD_VOCAL_CHANNELS_KEY;
        if (tmp3) {
          tmp3 = closure_1_17(type);
        }
        tmp = tmp3;
      }
      return tmp;
    })(type);
    if (null == guildId) {
      const values = _modDef12(ChannelStore.loadAllGuildAndPrivateChannelsFromDisk()).values();
      if (items) {
        let allActiveJoinedThreads = ActiveJoinedThreadsStore.computeAllActiveJoinedThreads();
      } else {
        allActiveJoinedThreads = [];
      }
      const tmp6Result = _modDef12(ChannelStore.loadAllGuildAndPrivateChannelsFromDisk());
      let valueResult = values.concat(allActiveJoinedThreads).value();
      items = [];
      const maxScore = FrecencyStore.getMaxScore();
      valueResult[Symbol.iterator]();
      includeAllThreads = 6;
      const iter = values.concat(allActiveJoinedThreads);
    }
    let mapped = _modDef12(GuildChannelStore.getChannels(guildId)[type]).map((channel) => channel.channel);
    if (!items) {
      valueResult = tmp12([]).value();
      const iter2 = tmp12([]);
    }
    if (includeAllThreads) {
      let allThreadsForGuild = ChannelStore.getAllThreadsForGuild(guildId);
    } else {
      allThreadsForGuild = ActiveJoinedThreadsStore.computeAllActiveJoinedThreads(guildId);
    }
  },
  queryGuilds(fuzzy) {
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
    let obj = { exactQuery: null, containQuery: null, queryLower: null };
    const regExp = new RegExp("^" + RegexUtilsDefault.escape(str), "i");
    obj.exactQuery = regExp;
    const regExp1 = new RegExp(RegexUtilsDefault.escape(str), "i");
    obj.containQuery = regExp1;
    obj.queryLower = str;
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
              obj = { type: null, record: null, score: null, comparator: null, sortable: null };
              obj.type = AutocompleterResultTypes.GUILD;
              obj.record = tmp5;
              obj.score = calculateScore(tmp12, boosters[tmp5.id]);
              obj.comparator = tmp5.name;
              obj.sortable = toLocaleLowerCaseResult;
              let arr = items.push(obj);
            }
          }
        }
        tmp11 = getMatchValue(toLocaleLowerCaseResult, obj, flag);
      }
      continue;
    }
    const sorted = items.sort(autocompleter_sortByMatchScoreDefault);
    if (items.length > limit) {
      items.length = limit;
    }
    return items;
  },
  queryDMChannels(limit) {
    let num = limit.limit;
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
    let obj = { query: limit.query, members: recipients, limit: recipients.length, boosters };
    const tmp3 = closure_66(privateChannelsVersion, version, UserStore.getUserStoreVersion());
    items = [];
    const item = queryMemberList({
      query: limit.query,
      members: recipients,
      limit: recipients.length,
      boosters,
    }).forEach((record) => {
      value = _undefined.get(record.record.id);
      if (null != value) {
        const obj = {
          type: AutocompleterResultTypes.DM,
          record: value,
          score: record.score,
          comparator: UserUtilsDefault.getUserTag(_undefined2.get(record.record.id)),
          sortable: record.sortable,
        };
        items.push(obj);
      }
    });
    const sorted = items.sort(autocompleter_sortByMatchScoreDefault);
    if (items.length > num) {
      items.length = num;
    }
    return items;
  },
  queryGroupDMs(fuzzy) {
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
    const normalizer = StringUtils;
    const stripDiacriticsResult = StringUtils.stripDiacritics(normalizer.normalize(query.toLocaleLowerCase()));
    let obj = { exactQuery: null, containQuery: null, queryLower: null };
    const regExp = new RegExp("^" + RegexUtilsDefault.escape(stripDiacriticsResult), "i");
    obj.exactQuery = regExp;
    const regExp1 = new RegExp(RegexUtilsDefault.escape(stripDiacriticsResult), "i");
    obj.containQuery = regExp1;
    obj.queryLower = stripDiacriticsResult;
    const tmp4Result = _modDef12(ChannelStore.getMutablePrivateChannels());
    const iter = _modDef12(ChannelStore.getMutablePrivateChannels()).values();
    items = [];
    const iter2 = _modDef12(ChannelStore.getMutablePrivateChannels()).values().value()[Symbol.iterator]();
    const nextResult = iter2.next();
    while (iter2 !== undefined) {
      let tmp6 = nextResult;
      if (nextResult.isMultiUserDM()) {
        if (filter(tmp6)) {
          let obj8 = useChannelName;
          let channelName = obj8.computeChannelName(tmp6, UserStore, RelationshipStore);
          let toLocaleLowerCaseResult = channelName.toLocaleLowerCase();
          let obj10 = StringUtils;
          let normalizer2 = StringUtils;
          let stripDiacriticsResult1 = obj10.stripDiacritics(normalizer2.normalize(toLocaleLowerCaseResult));
          let tmp15 = stripDiacriticsResult1;
          let tmp17 = getMatchValue(stripDiacriticsResult1, obj, flag);
          let items1 = [];
          let recipients = tmp6.recipients;
          for (const item10107 of recipients) {
            let tmp20 = item10107;
            let user = UserStore.getUser(item10107);
            let tmp23 = user;
            if (null != user) {
              let username = tmp23.username;
              let tmp56 = username;
              let obj14 = UserUtilsDefault;
              let globalName = obj14.getGlobalName(tmp23);
              let nickname = RelationshipStore.getNickname(tmp20);
              if (null != username) {
                let arr = items1.push(tmp56);
              }
              if (null != globalName) {
                arr = items1.push(globalName);
              }
              if (null != nickname) {
                let arr1 = items1.push(nickname);
              }
            }
            continue;
          }
          for (const item10133 of items1) {
            let obj11 = StringUtils;
            let normalizer3 = StringUtils;
            let _Math = Math;
            let bound = Math.min(
              5,
              getMatchValue(obj11.stripDiacritics(normalizer3.normalize(item10133.toLocaleLowerCase())), obj, flag),
            );
            if (bound > tmp17) {
              tmp17 = bound;
            }
            continue;
          }
          if (tmp17 > 0) {
            obj = { type: null, record: null, score: null, comparator: null, sortable: null };
            obj.type = AutocompleterResultTypes.GROUP_DM;
            obj.record = tmp6;
            obj.score = calculateScore(tmp17, boosters[tmp6.id]);
            let obj13 = useChannelName;
            obj.comparator = obj13.computeChannelName(tmp6, UserStore, RelationshipStore);
            obj.sortable = tmp15;
            let arr2 = items.push(obj);
          }
        }
      }
      continue;
    }
    const sorted = items.sort(autocompleter_sortByMatchScoreDefault);
    if (items.length > limit) {
      items.length = limit;
    }
    return items;
  },
  queryApplications(fuzzy) {
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
    let obj = { exactQuery: null, containQuery: null, queryLower: null };
    const regExp = new RegExp("^" + RegexUtilsDefault.escape(toLocaleLowerCaseResult), "i");
    obj.exactQuery = regExp;
    const regExp1 = new RegExp(RegexUtilsDefault.escape(toLocaleLowerCaseResult), "i");
    obj.containQuery = regExp1;
    obj.queryLower = toLocaleLowerCaseResult;
    items = [];
    const iter = LAUNCHABLE_APPLICATIONS()[Symbol.iterator]();
    while (iter !== undefined) {
      let application = iter.next().application;
      let tmp5 = application;
      if (filter(application)) {
        let name = tmp5.name;
        let toLocaleLowerCaseResult1 = name.toLocaleLowerCase();
        let tmp8 = toLocaleLowerCaseResult1;
        let tmp10 = getMatchValue(toLocaleLowerCaseResult1, obj, flag);
        if (tmp10 > 0) {
          obj = { type: null, record: null, score: null, comparator: null, sortable: null };
          obj.type = AutocompleterResultTypes.APPLICATION;
          obj.record = tmp5;
          obj.score = tmp11;
          obj.comparator = tmp5.name;
          obj.sortable = tmp8;
          let arr = items.push(obj);
        }
      }
      continue;
    }
    const sorted = items.sort(autocompleter_sortByMatchScoreDefault);
    if (items.length > limit) {
      items.length = limit;
    }
    return items;
  },
  queryInAppNavigations(fuzzy) {
    ({ query, limit } = fuzzy);
    if (limit === undefined) {
      limit = 10;
    }
    let flag = fuzzy.fuzzy;
    if (flag === undefined) {
      flag = true;
    }
    const toLocaleLowerCaseResult = query.toLocaleLowerCase();
    let obj = { exactQuery: null, containQuery: null, queryLower: null };
    const regExp = new RegExp("^" + RegexUtilsDefault.escape(toLocaleLowerCaseResult), "i");
    obj.exactQuery = regExp;
    const regExp1 = new RegExp(RegexUtilsDefault.escape(toLocaleLowerCaseResult), "i");
    obj.containQuery = regExp1;
    obj.queryLower = toLocaleLowerCaseResult;
    obj = {};
    const intl = util.intl;
    items = [intl.string(util.t.pWG4ze)];
    obj[constants.SHOP] = items;
    const intl2 = util.intl;
    const items1 = [intl2.string(util.t.ElYQFS), ,];
    const intl3 = util.intl;
    items1[1] = intl3.string(util.t.pWG4ze);
    const intl4 = util.intl;
    items1[2] = intl4.string(util.t.EBYkzk);
    obj[constants.SHOP_ORBS_TAB] = items1;
    const intl5 = util.intl;
    const items2 = [intl5.string(util.t.ElYQFS), ,];
    const intl6 = util.intl;
    items2[1] = intl6.string(util.t["v/R2aC"]);
    const intl7 = util.intl;
    items2[2] = intl7.string(util.t.qQR4tn);
    obj[constants.QUEST_ORBS] = items2;
    const intl8 = util.intl;
    const items3 = [intl8.string(util.t.Ipxkog)];
    obj[constants.NITRO_HOME] = items3;
    const intl9 = util.intl;
    const items4 = [intl9.string(util.t.JALI2K)];
    obj[constants.QUEST_HOME] = items4;
    const intl10 = util.intl;
    const items5 = [intl10.string(util.t.PHjkRE)];
    const intl11 = util.intl;
    items5[1] = intl11.string(util.t.AKcFUj);
    obj[constants.APPS_HOME] = items5;
    const intl12 = util.intl;
    const items6 = [intl12.string(util.t["3D5yo/"])];
    obj[constants.SETTINGS] = items6;
    const items7 = [];
    for (const key10167 in obj) {
      let tmp20 = constants[key10167];
      let tmp21 = obj[tmp20];
      if (null == tmp21) {
        continue;
      } else {
        for (const item10171 of tmp21) {
          let toLocaleLowerCaseResult1 = item10171.toLocaleLowerCase();
          let tmp7 = toLocaleLowerCaseResult1;
          let tmp9 = getMatchValue(toLocaleLowerCaseResult1, obj, flag);
          if (tmp9 > 0) {
            obj = { type: null, record: null, score: null, comparator: null, sortable: null };
            obj.type = AutocompleterResultTypes.IN_APP_NAVIGATION;
            obj.record = hasOwnProperty.fromType(tmp20);
            obj.score = calculateScore(tmp10);
            obj.comparator = tmp7;
            obj.sortable = tmp7;
            let arr = items7.push(obj);
          }
          continue;
        }
      }
      continue;
    }
    const sorted = items7.sort(autocompleter_sortByMatchScoreDefault);
    if (items7.length > limit) {
      items7.length = limit;
    }
    return items7;
  },
  querySKUs(fuzzy) {
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
    let obj = { exactQuery: null, containQuery: null, queryLower: null };
    const regExp = new RegExp("^" + RegexUtilsDefault.escape(toLocaleLowerCaseResult), "i");
    obj.exactQuery = regExp;
    const regExp1 = new RegExp(RegexUtilsDefault.escape(toLocaleLowerCaseResult), "i");
    obj.containQuery = regExp1;
    obj.queryLower = toLocaleLowerCaseResult;
    const tmp4Result = _modDef12(SKUStore.getSKUs());
    const iter = _modDef12(SKUStore.getSKUs()).values();
    items = [];
    const iter2 = _modDef12(SKUStore.getSKUs()).values().value()[Symbol.iterator]();
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
            obj = { type: null, record: null, score: null, comparator: null, sortable: null };
            obj.type = AutocompleterResultTypes.SKU;
            obj.record = tmp7;
            obj.score = tmp15;
            obj.comparator = tmp7.name;
            obj.sortable = tmp12;
            let arr = items.push(obj);
          }
        }
      }
      continue;
    }
    const sorted = items.sort(autocompleter_sortByMatchScoreDefault);
    if (items.length > limit) {
      items.length = limit;
    }
    return items;
  },
  getRecentlyTalked(channelId, maxResults) {
    const channel = ChannelStore.getChannel(channelId);
    if (null != channelId) {
      if (null != channel) {
        const messages = MessageStore.getMessages(channelId);
        const reversed = _modDef12(messages.toArray()).reverse();
        const tmp6Result = _modDef12(messages.toArray());
        const mapped = reversed.uniqBy((author) => author.author.id).map((author) => user.getUser(author.author.id));
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
              const tmp7 = null != joinedAt && !member.isPending;
            }
            return tmp3;
          }
        });
        const mapped1 = found.map((id) => {
          const guildId = channel.getGuildId();
          let member = null;
          if (null != guildId) {
            member = GuildMemberStore.getMember(guildId, id.id);
          }
          const obj = { type: AutocompleterResultTypes.USER, record: id, score: 0, comparator: null };
          let nick;
          if (member != null) {
            nick = member.nick;
          }
          if (nick == null) {
            nick = UserUtilsDefault.getName(id);
          }
          obj.comparator = nick;
          return obj;
        });
        const uniqByResult = reversed.uniqBy((author) => author.author.id);
        mapped1.take(maxResults).value();
        const iter = mapped1.take(maxResults);
      }
      return [];
    }
  },
  queryMentionResults(canMentionEveryone) {
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
    items = undefined;
    closure_7 = undefined;
    let formatted;
    let substr;
    let guildId;
    let items2;
    if (flag3) {
      const self = this;
      if (!flag6) {
        let obj = { channelId: channel.id, query, limit, checkRecentlyTalkedOnEmptyQuery: flag8, allowSnowflake };
        let queryChannelUsersResult = self.queryChannelUsers(obj);
        const mapped = queryChannelUsersResult.map((record) => {
          record = record.record;
          return {
            user: record,
            score: record.score,
            comparator: record.comparator,
            nick: GuildMemberStore.getNick(channel.guild_id, record.id),
            status: PresenceStore.getStatus(record.id),
          };
        });
      }
      obj = {
        guildId: channel.guild_id,
        query,
        limit,
        checkRecentlyTalkedOnEmptyQuery: flag8,
        request,
        allowSnowflake,
      };
      queryChannelUsersResult = self.queryGuildUsers(obj);
    } else {
      items = [];
      closure_7 = items.length;
      formatted = query.toLowerCase();
      const items1 = [];
      substr = items1;
      let tmp5 = items1;
      if (closure_7 < limit) {
        tmp5 = items1;
        if (flag4) {
          guildId = channel.getGuildId();
          const guild = GuildStore.getGuild(guildId);
          tmp5 = items1;
          if (null != guild) {
            const tmp39 = flag(flag7[37]);
            const tmp39Result = flag(flag7[37])(GuildRoleStore.getSortedRoles(guild.id));
            const iter = flag(flag7[37])(GuildRoleStore.getSortedRoles(guild.id)).filter((item) => {
              ({ mentionable, name, id } = item);
              if (!mentionable) {
                mentionable = flag;
              }
              if (!mentionable) {
                mentionable = flag7;
              }
              if (mentionable) {
                let tmp3Result = fuzzysearchDefault(formatted, name.toLowerCase());
                if (!tmp3Result) {
                  let tmp6 = allowSnowflake;
                  if (allowSnowflake) {
                    tmp6 = tmp4 === id;
                  }
                  tmp3Result = tmp6;
                }
                mentionable = tmp3Result;
                tmp4 = formatted;
              }
              if (mentionable) {
                mentionable = id !== SnowflakeUtilsDefault.castGuildIdAsEveryoneGuildRoleId(guildId);
              }
              return mentionable;
            });
            const valueResult = flag(flag7[37])(GuildRoleStore.getSortedRoles(guild.id))
              .filter((item) => {
                ({ mentionable, name, id } = item);
                if (!mentionable) {
                  mentionable = flag;
                }
                if (!mentionable) {
                  mentionable = flag7;
                }
                if (mentionable) {
                  let tmp3Result = fuzzysearchDefault(formatted, name.toLowerCase());
                  if (!tmp3Result) {
                    let tmp6 = allowSnowflake;
                    if (allowSnowflake) {
                      tmp6 = tmp4 === id;
                    }
                    tmp3Result = tmp6;
                  }
                  mentionable = tmp3Result;
                  tmp4 = formatted;
                }
                if (mentionable) {
                  mentionable = id !== SnowflakeUtilsDefault.castGuildIdAsEveryoneGuildRoleId(guildId);
                }
                return mentionable;
              })
              .value();
            obj = { keys: ["name"] };
            const obj4 = channel(flag7[45]);
            substr = channel(flag7[45])
              .matchSorter(valueResult, query, obj)
              .slice(0, limit - closure_7);
            closure_7 = closure_7 + substr.length;
            tmp5 = substr;
            const matchSorterResult = channel(flag7[45]).matchSorter(valueResult, query, obj);
          }
        }
      }
      items2 = [];
      const isPrivateResult = channel.isPrivate();
      let tmp11 = !isPrivateResult;
      if (!isPrivateResult) {
        tmp11 = flag;
      }
      if (tmp11) {
        tmp11 = flag4;
      }
      if (tmp11) {
        let tmp16Result = closure_7 < limit;
        if (tmp16Result) {
          tmp16Result = flag(flag7[32])(formatted, MENTION_EVERYONE().test);
          const tmp16 = flag(flag7[32]);
        }
        if (tmp16Result) {
          items2.push(MENTION_EVERYONE());
          closure_7 = closure_7 + 1;
        }
        if (flag2) {
          flag2 = closure_7 < limit;
        }
        if (flag2) {
          flag2 = flag(flag7[32])(formatted, MENTION_HERE().test);
          const tmp24 = flag(flag7[32]);
        }
        if (flag2) {
          items2.push(MENTION_HERE());
          closure_7 = closure_7 + 1;
        }
      }
      function maybePushOtherGlobal(test) {
        let tmp = flag5;
        if (flag5) {
          tmp = null != test;
        }
        if (tmp) {
          let tmp5 = closure_7 < limit;
          if (!tmp5) {
            tmp5 = 0 === formatted.length;
          }
          if (tmp5) {
            tmp5 = fuzzysearchDefault(formatted, test.test);
          }
          if (!tmp5) {
            tmp5 = formatted === test.test;
          }
          if (tmp5) {
            if (closure_7 < tmp4) {
              let arr = items2.push(test);
              closure_7 = closure_7 + 1;
            } else {
              arr = substr;
              if (substr.length <= 0) {
                let arr1 = items;
                if (items.length > 0) {
                  arr = arr1.pop();
                }
              }
            }
            arr1 = arr.pop();
          }
          tmp4 = limit;
        }
      }
      const IncludeGameMentionsInAutocomplete = channel(flag7[46]).IncludeGameMentionsInAutocomplete;
      if (IncludeGameMentionsInAutocomplete.getSetting()) {
        let tmp32;
        if (MENTION_GAME != null) {
          tmp32 = MENTION_GAME();
        }
        maybePushOtherGlobal(tmp32);
      }
      const TimestampAutocompleteMobileExperiment = channel(flag7[47]).TimestampAutocompleteMobileExperiment;
      if (TimestampAutocompleteMobileExperiment.getConfig({ location: "mention autocomplete" }).enabled) {
        let tmp35;
        if (MENTION_TIMESTAMP != null) {
          tmp35 = MENTION_TIMESTAMP();
        }
        maybePushOtherGlobal(tmp35);
      }
      const obj1 = { users: items, globals: items2, roles: tmp5 };
      return obj1;
    }
  },
  queryGuildMentionResults(canMentionUsers) {
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
      let users = this.queryGuildUsers(obj).map((record) => {
        const obj = {};
        merged = Object.assign(record);
        obj.status = status.getStatus(record.record.id);
        return obj;
      });
      const queryGuildUsersResult = this.queryGuildUsers(obj);
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
          const found = flag3(roles[37])(GuildRoleStore.getSortedRoles(guild.id)).filter((mentionable) => {
            let tmp = mentionable.mentionable || canMentionEveryone || flag3;
            if (tmp) {
              tmp = fuzzysearchDefault(formatted, mentionable.name.toLowerCase());
            }
            if (tmp) {
              tmp = !isEveryoneRole(mentionable);
            }
            return tmp;
          });
          const tmp9Result = flag3(roles[37])(GuildRoleStore.getSortedRoles(guild.id));
          const item = found.take(tmp2 - length).forEach((item) => {
            roles.push(item);
          });
          sum = length + roles.length;
          const takeResult = found.take(tmp2 - length);
        }
      }
    }
    if (canMentionEveryone) {
      canMentionEveryone = flag2;
    }
    const globals = [];
    if (canMentionEveryone) {
      let tmp15Result = sum < tmp2;
      if (tmp15Result) {
        tmp15Result = flag3(roles[32])(formatted, MENTION_EVERYONE().test);
        const tmp15 = flag3(roles[32]);
      }
      let sum1 = sum;
      if (tmp15Result) {
        globals.push(MENTION_EVERYONE());
        sum1 = sum + 1;
      }
      let tmp23Result = sum1 < tmp2;
      if (tmp23Result) {
        tmp23Result = flag3(roles[32])(formatted, MENTION_HERE().test);
        const tmp23 = flag3(roles[32]);
      }
      if (tmp23Result) {
        globals.push(MENTION_HERE());
      }
    }
    return { users, globals, roles };
  },
  queryChoice(fuzzy) {
    ({ query, limit } = fuzzy);
    if (limit === undefined) {
      limit = 10;
    }
    let flag = fuzzy.fuzzy;
    if (flag === undefined) {
      flag = true;
    }
    let regExp1;
    const toLocaleLowerCaseResult = query.toLocaleLowerCase();
    importDefault = toLocaleLowerCaseResult;
    const regExp = new RegExp("^" + require("RegexUtils").escape(toLocaleLowerCaseResult), "i");
    let obj = require("RegexUtils");
    regExp1 = new RegExp(require("RegexUtils").escape(toLocaleLowerCaseResult), "i");
    const obj2 = require("RegexUtils");
    const mapped = require("../../_runtime/metro/00012__.js")(fuzzy.choices).map((displayName, originalIndex) => {
      displayName = displayName.displayName;
      let obj = { exactQuery: regExp, containQuery: regExp1, queryLower };
      const tmp = getMatchValue(displayName.toLocaleLowerCase(), obj, flag);
      let tmp2 = null;
      if (tmp > 0) {
        obj = { choice: displayName, score: tmp, originalIndex };
        tmp2 = obj;
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
    ({ query, guild } = arg0);
    const toLocaleLowerCaseResult = query.toLocaleLowerCase();
    let obj = { exactQuery: null, containQuery: null, queryLower: null };
    let obj1 = RegexUtilsDefault;
    const regExp = new RegExp("^" + obj1.escape(toLocaleLowerCaseResult), "i");
    obj.exactQuery = regExp;
    let obj2 = RegexUtilsDefault;
    const regExp1 = new RegExp(obj2.escape(toLocaleLowerCaseResult), "i");
    obj.containQuery = regExp1;
    obj.queryLower = toLocaleLowerCaseResult;
    let canSeeOnboardingHomeResult = OnboardingHomeUtils.canSeeOnboardingHome(guild.id);
    if (canSeeOnboardingHomeResult) {
      const features = guild.features;
      canSeeOnboardingHomeResult = !features.has(constants3.HUB);
    }
    const features2 = guild.features;
    const hasItem = features2.has(constants3.COMMUNITY);
    const tmp8 = constants3;
    let result = useGuildOnboardingAvailable.isGuildOnboardingAvailable(guild);
    if (result) {
      const features3 = guild.features;
      result = features3.has(tmp8.COMMUNITY);
    }
    obj = { id: StaticChannelId.SERVER_GUIDE, name: null };
    const intl = tmp5(1114).intl;
    obj.name = intl.string(util.t.VbpLyU);
    items = [obj, ,];
    obj = { id: StaticChannelId.CHANNEL_BROWSER, name: null };
    const intl2 = tmp5(1114).intl;
    obj.name = intl2.string(util.t.et6wav);
    items[1] = obj;
    obj1 = { id: StaticChannelId.CUSTOMIZE_COMMUNITY, name: null };
    const intl3 = tmp5(1114).intl;
    obj1.name = intl3.string(util.t.h9mGOP);
    items[2] = obj1;
    const items1 = [];
    const iter = items[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp12 = nextResult;
      let tmp14 = StaticChannelId;
      if (nextResult.id !== StaticChannelId.SERVER_GUIDE) {
        if (tmp12.id !== tmp14.CHANNEL_BROWSER) {
          if (tmp12.id !== tmp14.CUSTOMIZE_COMMUNITY) {
            let name = tmp12.name;
            if (getMatchValue(name.toLocaleLowerCase(), obj, false) > 0) {
              obj2 = { id: null, name: null, type: null, guild_id: null };
              ({ id: obj9.id, name: obj9.name } = tmp12);
              obj2.type = ChannelTypes.UNKNOWN;
              obj2.guild_id = guild.id;
              let tmp24 = new.target;
              let tmp25 = new.target;
              let tmp27 = new closure_1_19(obj2);
              let arr = items1.push(tmp27);
            }
          }
        }
      }
      continue;
    }
    return items1;
  },
  queryChannelResults(channelTypes) {
    ({ channel, type } = channelTypes);
    if (type === undefined) {
      type = GUILD_SELECTABLE_CHANNELS_KEY;
    }
    channelTypes = channelTypes.channelTypes;
    let obj = { channels: null };
    obj = {
      query: channelTypes.query,
      guildId: channel.getGuildId(),
      limit: "r",
      fuzzy: "HermesInternal",
      filter(type) {
        let hasItem = null == channelTypes;
        if (!hasItem) {
          hasItem = channelTypes.includes(type.type);
        }
        return hasItem;
      },
      type,
      allowEmptyQueries: null,
    };
    obj.channels = this.queryChannels(obj).map((record) => record.record);
    return obj;
  },
  queryApplicationCommandChannelResults(limit) {
    const self = this;
    ({ channel, channelTypes } = limit);
    limit = limit.limit;
    if (limit === undefined) {
      limit = closure_1_42;
    }
    if (null == channel.guild_id) {
      items = [];
      if (tmp12) {
        items.push(channel);
      }
      let obj = { channels: items };
      return obj;
    } else {
      let items1 = [];
      for (const item10012 of items) {
        obj = {
          query: tmp,
          guildId: channel.guild_id,
          limit,
          fuzzy: true,
          filter(type) {
            let hasItem = null == channelTypes;
            if (!hasItem) {
              hasItem = channelTypes.includes(type.type);
            }
            return hasItem;
          },
          type: item10012,
          allowEmptyQueries: true,
          requireVocalConnectAccess: false,
          allowSnowflake: tmp2,
        };
        items1 = items1.concat(self.queryChannels(obj));
        continue;
      }
      const found = items1.filter((record) => "null" !== record.record.id);
      let sorted = found.sort(compareChannelsByScoreAndPositionDefault);
      let tmp8 = null != limit;
      if (tmp8) {
        tmp8 = sorted.length > limit;
      }
      if (tmp8) {
        sorted = sorted.slice(0, limit);
      }
      obj = { channels: sorted.map((record) => record.record) };
      return obj;
    }
  },
  queryChoiceResults(query) {
    let obj = { choices: null };
    obj = { query: query.query, choices: query.choices, limit: null };
    obj.choices = this.queryChoice(obj).map((choice) => choice.choice);
    return obj;
  },
  queryEmojiResults(matchComparator) {
    let maxCount = matchComparator.maxCount;
    ({ query, channel, intention } = matchComparator);
    if (maxCount === undefined) {
      maxCount = closure_1_42;
    }
    const FrecencyUserSettingsActionCreators = UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
    return {
      emojis: EmojiStore.searchWithoutFetchingLatest({
        channel,
        query,
        count: maxCount,
        intention,
        matchComparator: matchComparator.matchComparator,
      }),
    };
  },
  queryStickers(items, arg1, items1) {
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
    closure_6 = undefined;
    dependencyMap = UserStore.getCurrentUser();
    const set = new Set();
    items1 = [];
    closure_5 = items1;
    const FrecencyUserSettingsActionCreators = flag(1940).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
    function _loop() {
      if ("" === closure_6) {
        return 1;
      } else {
        const toLocaleLowerCaseResult = obj.toLocaleLowerCase();
        const stripDiacriticsResult = toLocaleLowerCaseResult(1925).stripDiacritics(toLocaleLowerCaseResult);
        const _RegExp = RegExp;
        let obj2 = toLocaleLowerCaseResult(1925);
        const _HermesInternal = HermesInternal;
        const regExp = new RegExp("^" + nextResult(4547).escape(stripDiacriticsResult), "i");
        const _RegExp2 = RegExp;
        const obj3 = nextResult(4547);
        const _HermesInternal2 = HermesInternal;
        const regExp1 = new RegExp("" + nextResult(4547).escape(stripDiacriticsResult), "i");
        const stickerMetadataArrays = StickersStore.getStickerMetadataArrays();
        let item = stickerMetadataArrays.forEach((arr) => {
          const item = arr.forEach((item, index) => {
            let num = 0;
            let tmp = null;
            const stickerById = StickersStore.getStickerById(index);
            if (null != stickerById) {
              if (regExp1(stickerById, obj2.getStickerSendability(stickerById, closure_2_3, regExp))) {
                const iter = item[Symbol.iterator]();
                const iter2 = iter.next();
                while (iter !== undefined) {
                  let type = iter2.type;
                  let tmp7 = type;
                  value = iter2.value;
                  let tmp9 = getPriorityForStickerMetadataType(type);
                  let num4 = 0;
                  let tmp12 = closure_1_0;
                  if (toLocaleLowerCaseResult) {
                    if (value === tmp12) {
                      num4 = closure_3_46 * tmp9;
                    } else if (regex.test(value)) {
                      num4 = 7 * tmp9;
                    } else {
                      let tmp15 = flag;
                      let tmp18 = tmp7 !== flag(5268).StickerMetadataTypes.GUILD_NAME;
                      if (tmp18) {
                        tmp18 = tmp7 !== tmp15(5268).StickerMetadataTypes.PACK_NAME;
                      }
                      if (tmp18) {
                        tmp18 = tmp7 !== tmp15(5268).StickerMetadataTypes.STICKER_NAME;
                      }
                      if (!tmp18) {
                        tmp18 = !regex2.test(value);
                      }
                      if (!tmp18) {
                        num4 = 5 * tmp9;
                      }
                    }
                  } else if (value === tmp12) {
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
                let tmp37 = num > 0;
                if (tmp37) {
                  tmp37 = null != tmp;
                }
                if (tmp37) {
                  tmp37 = !set.has(stickerById.id);
                }
                if (tmp37) {
                  set.add(stickerById.id);
                  const obj = { sticker: stickerById, comparator: tmp, score: num };
                  closure_2_5.push(obj);
                }
              }
              obj2 = flag(7337);
            }
          });
        });
      }
      obj = closure_6;
    }
    let iter2 = items[Symbol.iterator]();
    while (iter2 !== undefined) {
      closure_6 = iter2.next();
      let _loopResult = _loop();
      continue;
    }
    let obj = _modDef12(items1);
    let valueResult = _modDef12(items1)
      .sortBy((score) => -1 * score.score)
      .value();
    closure_5 = valueResult;
    if (0 === valueResult.length) {
      closure_5 = closure_49;
      valueResult = closure_49;
    }
    return valueResult;
  },
  querySoundmoji(arg0, channel) {
    _require = channel;
    const currentUser = UserStore.getCurrentUser();
    const isFetchingResult = SoundboardStore.isFetching();
    let tmp3 = !isFetchingResult;
    if (!isFetchingResult) {
      tmp3 = !obj.hasFetchedAllSounds();
    }
    if (tmp3) {
      const result = require("SoundboardActionCreators").maybeFetchSoundboardSounds();
      const obj2 = require("SoundboardActionCreators");
    }
    const FrecencyUserSettingsActionCreators =
      require("UserSettingsProtoActionCreators").FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
    const sounds = obj.getSounds();
    const reduced = Array.from(sounds.values()).reduce((acc, arr) => {
      const item = arr.forEach((item) => {
        let guild_id;
        if (acc != null) {
          guild_id = tmp2.guild_id;
        }
        let id;
        if (acc != null) {
          id = tmp2.id;
        }
        if (tmp(item, guild_id, id)) {
          acc.push(item);
        }
      });
      return acc;
    }, []);
    const arr = Array.from(sounds.values());
    return require("searchSounds").searchSounds(arg0, reduced, currentUser, channel);
  },
  matchSentinel(arg0, arg1, arg2) {
    const isMatch = re48.test(arg1);
    let tmp2 = !isMatch;
    if (!isMatch) {
      tmp2 = arg0 === arg2;
    }
    return tmp2;
  },
  hasSameRoleAsUsername(getGuildId, user) {
    if (user.hasUniqueUsername()) {
      let guild = GuildStore.getGuild(getGuildId.getGuildId());
      if (null != guild) {
        let sortedRoles = GuildRoleStore.getSortedRoles(guild.id);
      } else {
        sortedRoles = [];
      }
      guild = sortedRoles[Symbol.iterator]();
    } else {
      return false;
    }
  },
  queryMemberList,
};
const size = fn(2);
let result = size.fileFinishedImporting("utils/AutocompleteUtils.tsx");

export default FunctionUtils;
export const WHITESPACE_REGEX = tmp7;
export { calculateScore };
export const getGameProfileMatchTier = function getGameProfileMatchTier(name, arg1, index) {
  const toLocaleLowerCaseResult = name.toLocaleLowerCase();
  if (toLocaleLowerCaseResult === arg1) {
    let num2 = c46;
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
