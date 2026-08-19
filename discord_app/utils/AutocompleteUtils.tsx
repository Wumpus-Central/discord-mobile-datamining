// discord_app/utils/AutocompleteUtils.tsx
import timestampDefault from "../modules/debug/Logger.tsx";
import applyDefault from "../../_runtime/00012_apply.js";
import getSystemLocale from "../intl/index.native.tsx";
import isDiscordFrontendDevelopment from "GlobalUtils.tsx";
import updateUserGuildSettings from "../modules/user_settings/UserSettingsProtoActionCreators.tsx";
import isNullOrEmpty from "StringUtils.tsx";
import applyOverwritesAll from "PermissionUtils.tsx";
import nameFromUserDefault from "UserUtils.tsx";
import obj132Default from "RegexUtils.tsx";
import StickerFormat from "../modules/stickers/StickersTypes.tsx";
import computeChannelName from "../modules/channel/useChannelName.tsx";
import useCanSeeOnboardingHome from "../modules/guild_onboarding_home/OnboardingHomeUtils.tsx";
import fuzzysearchDefault from "../../_runtime/06775_fuzzysearch.js";
import sortByMatchScoreDefault from "../modules/autocompleter/sortByMatchScore.tsx";
import getGuildNameSuggestionDefault from "GuildUtils.tsx";
import isSoundValidDefault from "../modules/premium/sounds/soundmoji/utils/isSoundValid.tsx";
import useGuildOnboardingAvailable from "../modules/guild_onboarding/useGuildOnboardingAvailable.tsx";
import compareChannelsByScoreAndPositionDefault from "../modules/channel_text_area/compareChannelsByScoreAndPosition.tsx";
import _slicedToArray from "../../_runtime/metro/00032__slicedToArray.js";
import fromType from "../modules/autocompleter/record/InAppNavigationRecord.tsx";
import getEmojiToGroupId from "../modules/emojis/EmojiStore.tsx";
import handleSoundCreateOrUpdate from "../modules/soundboard/SoundboardStore.tsx";
import handleStickersStoreUpdate from "../modules/stickers/StickersPersistedStore.tsx";
import loadSavedGuildStickers from "../modules/stickers/StickersStore.tsx";
import rebuild from "../modules/threads/ActiveJoinedThreadsStore.tsx";
import storeThread from "../modules/threads/JoinedThreadsStore.tsx";
import createChannelRecord from "../records/ChannelRecord.tsx";
import { isEveryoneRole } from "../records/GuildRoleRecord.tsx";
import createdAt from "../records/UserRecord.tsx";
import ensureGuildLoaded from "../stores/ChannelStore.tsx";
import handleChannelSelect from "../stores/FrecencyStore.tsx";
import comparator from "../stores/GuildChannelStore.tsx";
import comparator2 from "../stores/GuildChannelStore.tsx";
import trackCommunicationDisabled from "../stores/GuildMemberStore.tsx";
import createGuildRoleRecordFromRust from "../stores/GuildRoleStore.tsx";
import createGuildRecordFromRust from "../stores/GuildStore.tsx";
import reinjectEphemerals from "../stores/MessageStore.tsx";
import getUncachedChannelPermissions from "../stores/PermissionStore.tsx";
import sortActivity from "../stores/PresenceStore.tsx";
import markAllUserIdListsStale from "../stores/RelationshipStore.tsx";
import handleConnectionOpen from "../stores/SelectedChannelStore.tsx";
import handleConnectionOpen2 from "../stores/SelectedGuildStore.tsx";
import mergeGuildAvatar from "../stores/UserStore.tsx";
import addSku from "../stores/game_store/SKUStore.tsx";
import ME from "../Constants.tsx";
import { StaticChannelId } from "../modules/channel/ChannelConstants.tsx";
import areArraysShallowlyEqual from "FunctionUtils.tsx";
import { _fetchDefaultSoundsFromApi2 } from "../modules/soundboard/SoundboardActionCreators.tsx";

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
    } else if ((function multiTokenMatch(queryLower, toLocaleLowerCaseResult1) {
      closure_0 = toLocaleLowerCaseResult1;
      const parts = queryLower.split(/(?:,| )+/);
      return parts.every((item, index) => {
        const regExp = new RegExp(closure_1_1(closure_1_3[31]).escape(item), "i");
        return regExp.test(closure_0);
      });
    })(queryLower, toLocaleLowerCaseResult1)) {
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
  const users = authStore2.getUsers();
  guildId = guildId.getGuildId();
  const toLocaleLowerCaseResult = query.toLocaleLowerCase();
  const normalizer = isNullOrEmpty;
  const normalizeResult = normalizer.normalize(toLocaleLowerCaseResult);
  items = [];
  const items1 = [];
  let num = 0;
  let num2 = 0;
  if (0 < members.length) {
    do {
      let tmp5 = members[num2];
      if (tmp5 instanceof closure_21) {
        let nick = store2.getNick(guildId, tmp5.id);
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
      obj1 = nameFromUserDefault;
      let globalName = obj1.getGlobalName(tmp9);
      if (globalName != null) {
        let str2 = globalName.toLocaleLowerCase();
      }
      let sum = num;
      if (null != tmp9) {
        if (null == filter) {
          let username = tmp9.username;
          let str3 = username.toLocaleLowerCase();
          let obj4 = isNullOrEmpty;
          let str4 = obj4.stripDiacritics(str3);
          let normalizer2 = isNullOrEmpty;
          let str5 = normalizer2.normalize(str4);
          if (null == str) {
            let items2 = [null, null];
          } else {
            let tmp16Result = isNullOrEmpty;
            let stripDiacriticsResult = tmp16Result.stripDiacritics(str);
            items2 = [stripDiacriticsResult, ];
            let normalizer3 = isNullOrEmpty;
            items2[1] = normalizer3.normalize(stripDiacriticsResult);
          }
          let tmp19 = callback(items2, 2);
          [str6, str7] = tmp19;
          if (null == str2) {
            let items3 = [null, null];
          } else {
            tmp16Result = isNullOrEmpty;
            let stripDiacriticsResult1 = tmp16Result.stripDiacritics(str2);
            items3 = [stripDiacriticsResult1, ];
            let normalizer4 = isNullOrEmpty;
            items3[1] = normalizer4.normalize(stripDiacriticsResult1);
          }
          let tmp18Result = callback(items3, 2);
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
                                let tmp28 = fuzzysearchDefault(toLocaleLowerCaseResult, str4) || fuzzysearchDefault(normalizeResult, str5);
                                if (!tmp28) {
                                  let tmp29 = null != str6 && fuzzysearchDefault(toLocaleLowerCaseResult, str6);
                                  tmp28 = tmp29;
                                }
                                if (!tmp28) {
                                  let tmp30 = null != str7 && fuzzysearchDefault(normalizeResult, str7);
                                  tmp28 = tmp30;
                                }
                                if (!tmp28) {
                                  let tmp31 = null != str8 && fuzzysearchDefault(toLocaleLowerCaseResult, str8);
                                  tmp28 = tmp31;
                                }
                                if (!tmp28) {
                                  let tmp32 = null != str9 && fuzzysearchDefault(normalizeResult, str9);
                                  tmp28 = tmp32;
                                }
                                tmp33 = tmp28;
                              }
                              sum = num;
                              if (tmp33) {
                                let obj = { type: null, record: null, score: null, comparator: null, sortable: null };
                                obj[0] = AutocompleterResultTypes.USER;
                                obj[1] = tmp9;
                                let num3;
                                if (boosters != null) {
                                  num3 = boosters[tmp9.id];
                                }
                                if (num3 == null) {
                                  num3 = 1;
                                }
                                obj[2] = 1000 * num3;
                                let tmp35 = str2;
                                if (str2 == null) {
                                  tmp35 = str;
                                }
                                if (tmp35 == null) {
                                  tmp35 = str3;
                                }
                                obj[3] = tmp35;
                                let tmp36 = str8;
                                if (str8 == null) {
                                  tmp36 = str6;
                                }
                                if (tmp36 == null) {
                                  tmp36 = str4;
                                }
                                obj[4] = tmp36;
                                let arr = items1.push(obj);
                                sum = num + 1;
                              }
                            }
                          }
                        }
                        obj = { type: null, record: null, score: null, comparator: null, sortable: null };
                        obj[0] = AutocompleterResultTypes.USER;
                        obj[1] = tmp9;
                        let num4;
                        if (boosters != null) {
                          num4 = boosters[tmp9.id];
                        }
                        if (num4 == null) {
                          num4 = 1;
                        }
                        obj[2] = 1000 * num4;
                        let tmp39 = str2;
                        if (str2 == null) {
                          tmp39 = str;
                        }
                        if (tmp39 == null) {
                          tmp39 = str3;
                        }
                        obj[3] = tmp39;
                        let tmp40 = str8;
                        if (str8 == null) {
                          tmp40 = str6;
                        }
                        if (tmp40 == null) {
                          tmp40 = str4;
                        }
                        obj[4] = tmp40;
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
          obj1[0] = AutocompleterResultTypes.USER;
          obj1[1] = tmp9;
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
          obj1[2] = 1000 * num5 * num6;
          if (str2 == null) {
            str2 = str;
          }
          if (str2 == null) {
            str2 = str3;
          }
          obj1[3] = str2;
          if (str8 == null) {
            str8 = str6;
          }
          if (str8 == null) {
            str8 = str4;
          }
          obj1[4] = str8;
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
function getPriorityForStickerMetadataType(arg0) {
  if (StickerFormat.StickerMetadataTypes.STICKER_NAME === arg0) {
    return 11;
  } else if (StickerFormat.StickerMetadataTypes.CORRELATED_EMOJI === arg0) {
    return 6;
  } else if (StickerFormat.StickerMetadataTypes.TAG === arg0) {
    return 1;
  } else {
    if (StickerFormat.StickerMetadataTypes.GUILD_NAME !== arg0) {
      if (StickerFormat.StickerMetadataTypes.PACK_NAME !== arg0) {
        return 1;
      }
    }
    return 8;
  }
}
function isPartialTypeMatch(arg0, arg1) {
  let tmp = arg0 === GUILD_SELECTABLE_CHANNELS_KEY;
  if (tmp) {
    tmp = callback2(arg1);
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
function getGuildName(guild_id) {
  if (null != guild_id.guild_id) {
    let tmp2 = arg1[guild_id.guild_id];
    if (null == tmp2) {
      const guild = store4.getGuild(guild_id.guild_id);
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
function getCategoryName(parent_id) {
  if (null != parent_id.parent_id) {
    let tmp2 = arg1[parent_id.parent_id];
    if (null == tmp2) {
      const channel = authStore.getChannel(parent_id.parent_id);
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
({ InAppNavigationRecord: c5, InAppNavigationType: closure_6 } = fromType);
({ ChannelRecordBase: map1, isGuildChannelType: closure_14, isGuildSelectableChannelType: closure_15, isGuildVocalChannelType: closure_16, isThread: closure_17, PrivateChannelRecord: closure_18, UnknownChannelRecord: closure_19 } = createChannelRecord);
const GUILD_SELECTABLE_CHANNELS_KEY = comparator.GUILD_SELECTABLE_CHANNELS_KEY;
const GUILD_VOCAL_CHANNELS_KEY = comparator.GUILD_VOCAL_CHANNELS_KEY;
({ Permissions: closure_38, GuildFeatures: closure_39, ChannelTypes } = ME);
({ SKUTypes: closure_41, MAX_AUTOCOMPLETE_RESULTS: closure_42 } = ME);
require("HeaderRecord").AutocompleterResultTypes;
let closure_45 = new timestampDefault("AutocompleteUtils");
let c46 = 10;
let tmp7 = /(\t|\s)/;
const re48 = tmp7;
let closure_49 = [];
const MENTION_EVERYONE = require("map").default.MENTION_EVERYONE;
const MENTION_HERE = require("map").default.MENTION_HERE;
const MENTION_GAME = require("map").default.MENTION_GAME;
const MENTION_TIMESTAMP = require("map").default.MENTION_TIMESTAMP;
const LAUNCHABLE_APPLICATIONS = require("map").default.LAUNCHABLE_APPLICATIONS;
class AutocompleteBoostersCache {
  constructor() {
    obj = Object.create(new.target.prototype);
    map = new Map();
    obj[3] = map;
    return obj;
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
  const value = cache2.get(arg0);
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
  const version = store.getVersion();
  const version1 = store6.getVersion();
  const privateChannelsVersion = authStore.getPrivateChannelsVersion();
  let flag = this.lastFrecencyVersion !== version || self.lastRelationshipVersion !== version1 || self.lastPrivateChannelsVersion !== privateChannelsVersion;
  if (flag) {
    self.lastFrecencyVersion = version;
    self.lastRelationshipVersion = version1;
    self.lastPrivateChannelsVersion = privateChannelsVersion;
    flag = true;
  }
  return flag;
};
prototype["build"] = function build(arg0) {
  let frequentlyWithoutFetchingLatest = store.getFrequentlyWithoutFetchingLatest();
  const reduced = frequentlyWithoutFetchingLatest.reduce((acc, item, index) => {
    let tmp = acc;
    scoreWithoutFetchingLatest = scoreWithoutFetchingLatest.getScoreWithoutFetchingLatest(item.id);
    if (scoreWithoutFetchingLatest > acc) {
      tmp = scoreWithoutFetchingLatest;
    }
    return tmp;
  }, 0);
  if (AutocompleterResultTypes.GUILD === arg0) {
    let found = frequentlyWithoutFetchingLatest.filter((item, index) => callback(table[30]).isGuildRecord(item));
  } else if (AutocompleterResultTypes.USER === arg0) {
    found = frequentlyWithoutFetchingLatest.filter((item, index) => {
      let tmp = item instanceof closure_13;
      if (tmp) {
        tmp = item.type === constants.DM;
      }
      return tmp;
    });
  } else {
    if (AutocompleterResultTypes.GROUP_DM === arg0) {
      found = frequentlyWithoutFetchingLatest.filter((item, index) => item instanceof closure_13 && item.isMultiUserDM());
    } else if (AutocompleterResultTypes.TEXT_CHANNEL !== arg0) {
      found = [];
      if (AutocompleterResultTypes.VOICE_CHANNEL === arg0) {
        found = frequentlyWithoutFetchingLatest.filter((item, index) => item instanceof closure_13 && item.isGuildVocal());
      }
    }
    found = frequentlyWithoutFetchingLatest.filter((item, index) => {
      let tmp = item instanceof closure_13;
      if (tmp) {
        tmp = callback2(item.type);
      }
      return tmp;
    });
  }
  frequentlyWithoutFetchingLatest = found[Symbol.iterator]();
};
let areArraysShallowlyEqual = Object.create(AutocompleteBoostersCache.prototype);
let tmp6 = new timestampDefault("AutocompleteUtils");
areArraysShallowlyEqual[3] = new Map();
let items = [GUILD_SELECTABLE_CHANNELS_KEY, GUILD_VOCAL_CHANNELS_KEY, ChannelTypes.GUILD_CATEGORY];
let closure_66 = areArraysShallowlyEqual.cachedFunction(() => {
  const channelsByRecipientId = new Map();
  const recipientsById = new Map();
  const recipients = [];
  const tmp3 = recipientsById(12);
  const tmp3Result = recipientsById(12)(authStore.getMutablePrivateChannels());
  const iter = recipientsById(12)(authStore.getMutablePrivateChannels()).values();
  const item = recipientsById(12)(authStore.getMutablePrivateChannels()).values().value().forEach((item, index) => {
    if (item.isDM()) {
      const recipientId = item.getRecipientId();
      const user = closure_1_36.getUser(recipientId);
      let hasItem = null == recipientId || null == user;
      if (!hasItem) {
        hasItem = channelsByRecipientId.has(recipientId);
      }
      if (!hasItem) {
        const result = channelsByRecipientId.set(recipientId, item);
        const obj = { userId: null, nick: null };
        obj[0] = recipientId;
        obj[1] = closure_1_33.getNickname(recipientId);
        recipients.push(obj);
        const result1 = recipientsById.set(recipientId, user);
      }
    }
  });
  return { channelsByRecipientId, recipientsById, recipients };
});
areArraysShallowlyEqual = {
  queryFriends(limit) {
    let num = limit.limit;
    if (num === undefined) {
      num = 10;
    }
    const obj = { query: limit.query, members: null, limit: null, filter: null };
    const friendIDs = store6.getFriendIDs();
    const mapped = friendIDs.map((item, index) => user.getUser(item));
    obj[1] = mapped.filter(isDiscordFrontendDevelopment.isNotNullish);
    obj[2] = num;
    obj[3] = limit.filter;
    return queryMemberList(obj);
  },
  queryDMUsers(limit) {
    let num = limit.limit;
    if (num === undefined) {
      num = 10;
    }
    const obj = { query: limit.query, members: null, limit: null, filter: null };
    const dMUserIds = authStore.getDMUserIds();
    const mapped = dMUserIds.map((item, index) => user.getUser(item));
    obj[1] = mapped.filter(isDiscordFrontendDevelopment.isNotNullish);
    obj[2] = num;
    obj[3] = limit.filter;
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
    let channel2;
    let obj = authStore;
    const channel = authStore.getChannel(request.channelId);
    if (null == channel) {
      return [];
    } else {
      let channel1 = null;
      if (channel.isThread()) {
        channel1 = obj.getChannel(channel.parent_id);
      }
      if (channel1 == null) {
        channel1 = channel;
      }
      channel2 = channel1;
      if (null == channel1) {
        return [];
      } else {
        if (channel1.isPrivate()) {
          const recipients = channel1.recipients;
          const mapped = recipients.map((item, index) => {
            const obj = { userId: item, nick: null };
            nickname = nickname.getNickname(item);
            if (nickname == null) {
              nickname = null;
            }
            obj[1] = nickname;
            return obj;
          });
          const currentUser = authStore2.getCurrentUser();
          let tmp6 = mapped;
          if (null != currentUser) {
            obj = { userId: null, nick: null };
            obj[0] = currentUser.id;
            mapped.push(obj);
            tmp6 = mapped;
          }
        } else {
          if (0 === query.length) {
            if (flag2) {
              const id = channel.id;
              channel2 = obj.getChannel(id);
              if (null != id) {
                if (null != channel2) {
                  const messages = store5.getMessages(id);
                  const reversed = applyDefault(messages.toArray()).reverse();
                  const tmp16Result = applyDefault(messages.toArray());
                  const mapped1 = reversed.uniqBy((author) => author.author.id).map((item, index) => user.getUser(item.author.id));
                  const found = mapped1.filter((item, index) => {
                    if (null == item) {
                      return false;
                    } else if (item.isNonUserBot()) {
                      return false;
                    } else {
                      const guildId = channel.getGuildId();
                      let tmp3 = null == guildId;
                      if (!tmp3) {
                        const member = closure_1_27.getMember(guildId, item.id);
                        let joinedAt;
                        if (member != null) {
                          joinedAt = member.joinedAt;
                        }
                        tmp3 = null != joinedAt && !member.isPending;
                      }
                      return tmp3;
                    }
                  });
                  const mapped2 = found.map((item, index) => {
                    const guildId = channel.getGuildId();
                    let member = null;
                    if (null != guildId) {
                      member = closure_1_27.getMember(guildId, item.id);
                    }
                    const obj = { type: AutocompleterResultTypes.USER, record: item, score: 0, comparator: null };
                    let nick;
                    if (member != null) {
                      nick = member.nick;
                    }
                    if (nick == null) {
                      nick = nameFromUserDefault.getName(item);
                    }
                    obj[3] = nick;
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
          const members = store2.getMembers(channel1.guild_id);
          const found1 = members.filter(isValidGuildMember);
          tmp6 = found1;
          if (flag) {
            const members1 = getGuildNameSuggestionDefault.requestMembers(channel1.guild_id, query, limit);
            tmp6 = found1;
          }
        }
        obj = { query: null, members: null, limit: null, filter: null, allowSnowflake: null };
        obj[0] = query;
        obj[1] = tmp6;
        obj[2] = limit;
        obj[3] = function filter(arg0) {
          let isPrivateResult = channel2.isPrivate();
          if (!isPrivateResult) {
            const obj = { permission: null, user: null, context: null };
            obj[0] = closure_1_38.VIEW_CHANNEL;
            obj[1] = arg0;
            obj[2] = channel2;
            isPrivateResult = obj.can(obj);
          }
          return isPrivateResult;
        };
        obj[4] = flag3;
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
    if (null == store4.getGuild(guildId)) {
      return [];
    } else {
      if (0 === query.length) {
        if (flag2) {
          channelId = channelId.getChannelId(guildId);
          const channel = authStore.getChannel(channelId);
          if (null != channelId) {
            if (null != channel) {
              const messages = store5.getMessages(channelId);
              const reversed = applyDefault(messages.toArray()).reverse();
              const tmp14Result = applyDefault(messages.toArray());
              const mapped = reversed.uniqBy((author) => author.author.id).map((item, index) => user.getUser(item.author.id));
              const found = mapped.filter((item, index) => {
                if (null == item) {
                  return false;
                } else if (item.isNonUserBot()) {
                  return false;
                } else {
                  const guildId = channel.getGuildId();
                  let tmp3 = null == guildId;
                  if (!tmp3) {
                    const member = closure_1_27.getMember(guildId, item.id);
                    let joinedAt;
                    if (member != null) {
                      joinedAt = member.joinedAt;
                    }
                    tmp3 = null != joinedAt && !member.isPending;
                  }
                  return tmp3;
                }
              });
              const mapped1 = found.map((item, index) => {
                const guildId = channel.getGuildId();
                let member = null;
                if (null != guildId) {
                  member = closure_1_27.getMember(guildId, item.id);
                }
                const obj = { type: AutocompleterResultTypes.USER, record: item, score: 0, comparator: null };
                let nick;
                if (member != null) {
                  nick = member.nick;
                }
                if (nick == null) {
                  nick = nameFromUserDefault.getName(item);
                }
                obj[3] = nick;
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
      const members = store2.getMembers(guildId);
      const found1 = members.filter(isValidGuildMember);
      if (flag) {
        flag = query.length > 0;
      }
      if (flag) {
        let obj = getGuildNameSuggestionDefault;
        const members1 = obj.requestMembers(guildId, query, limit);
      }
      obj = { query: null, members: null, limit: null, filter: null, allowSnowflake: null };
      obj[0] = query;
      obj[1] = found1;
      obj[2] = limit;
      obj[3] = filter;
      obj[4] = allowSnowflake;
      return queryMemberList(obj);
    }
  },
  queryUsers(limit) {
    let num = limit.limit;
    ({ query, filter, boosters } = limit);
    if (num === undefined) {
      num = 10;
    }
    return queryMemberList({ query, members: limit.users, limit: num, filter, allowSnowflake: limit.allowSnowflake, boosters });
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
      let obj = getGuildNameSuggestionDefault;
      const members = obj.requestMembers(null, query, limit);
    }
    obj = { query, limit, request: flag, filter, boosters, users: null };
    const tmp6Result = applyDefault(authStore2.getUsers());
    obj[5] = applyDefault(authStore2.getUsers()).values().value();
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
      const parts = query.split(" ");
      const found = parts.filter((item, index) => "" !== item || flag);
      const mapped = found.map((item, index) => {
        const toLocaleLowerCaseResult = item.toLocaleLowerCase();
        const obj = { queryLower: toLocaleLowerCaseResult, exactQuery: null, containQuery: null, isFullMatch: false };
        const regExp = new RegExp("^" + callback(4362).escape(toLocaleLowerCaseResult), "i");
        obj[1] = regExp;
        const obj2 = callback(4362);
        const regExp1 = new RegExp(callback(4362).escape(toLocaleLowerCaseResult), "i");
        obj[2] = regExp1;
        return obj;
      });
      if (query.includes(" ")) {
        let toLocaleLowerCaseResult = query.toLocaleLowerCase();
        let obj = { queryLower: null, exactQuery: null, containQuery: null, isFullMatch: true };
        obj[0] = toLocaleLowerCaseResult;
        const _RegExp = RegExp;
        let obj2 = callback(4362);
        const _HermesInternal = HermesInternal;
        let regExp = new RegExp("^" + callback(4362).escape(toLocaleLowerCaseResult).replace(" ", "( |-)"), "i");
        obj[1] = regExp;
        const _RegExp2 = RegExp;
        const str = callback(4362).escape(toLocaleLowerCaseResult);
        const obj3 = callback(4362);
        let regExp1 = new RegExp(callback(4362).escape(toLocaleLowerCaseResult).replace(" ", "( |-)"), "i");
        obj[2] = regExp1;
        mapped.unshift(obj);
        const str6 = callback(4362).escape(toLocaleLowerCaseResult);
      }
      return mapped;
    })(guildId.query, flag2);
    items = (function includesThreads(type) {
      let tmp = type === closure_24;
      if (!tmp) {
        let tmp3 = type !== closure_25;
        if (tmp3) {
          tmp3 = callback2(type);
        }
        tmp = tmp3;
      }
      return tmp;
    })(type);
    if (null == guildId) {
      const values = applyDefault(authStore.loadAllGuildAndPrivateChannelsFromDisk()).values();
      if (items) {
        let allActiveJoinedThreads = closure_11.computeAllActiveJoinedThreads();
      } else {
        allActiveJoinedThreads = [];
      }
      const tmp6Result = applyDefault(authStore.loadAllGuildAndPrivateChannelsFromDisk());
      let valueResult = values.concat(allActiveJoinedThreads).value();
      items = [];
      const maxScore = store.getMaxScore();
      valueResult[Symbol.iterator]();
      includeAllThreads = 6;
      const iter = values.concat(allActiveJoinedThreads);
    }
    let mapped = applyDefault(channels.getChannels(guildId)[type]).map((item, index) => item.channel);
    if (!items) {
      valueResult = tmp12([]).value();
      const iter2 = tmp12([]);
    }
    if (includeAllThreads) {
      let allThreadsForGuild = authStore.getAllThreadsForGuild(guildId);
    } else {
      allThreadsForGuild = closure_11.computeAllActiveJoinedThreads(guildId);
    }
    const tmp10Result = applyDefault(channels.getChannels(guildId)[type]);
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
    const regExp = new RegExp("^" + obj132Default.escape(str), "i");
    obj[0] = regExp;
    const regExp1 = new RegExp(obj132Default.escape(str), "i");
    obj[1] = regExp1;
    obj[2] = str;
    items = [];
    const guildsArray = store4.getGuildsArray();
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
              obj[0] = AutocompleterResultTypes.GUILD;
              obj[1] = tmp5;
              obj[2] = calculateScore(tmp12, boosters[tmp5.id]);
              obj[3] = tmp5.name;
              obj[4] = toLocaleLowerCaseResult;
              let arr = items.push(obj);
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
    const privateChannelsVersion = authStore.getPrivateChannelsVersion();
    const version = store6.getVersion();
    ({ channelsByRecipientId: c0, recipientsById: c1, recipients } = callback3(privateChannelsVersion, version, authStore2.getUserStoreVersion()));
    const tmp3 = callback3(privateChannelsVersion, version, authStore2.getUserStoreVersion());
    items = [];
    const item = queryMemberList({ query: limit.query, members: recipients, limit: recipients.length, boosters }).forEach((item, index) => {
      const value = _undefined.get(item.record.id);
      if (null != value) {
        const obj = { type: null, record: null, score: null, comparator: null, sortable: null };
        obj[0] = AutocompleterResultTypes.DM;
        obj[1] = value;
        obj[2] = item.score;
        obj[3] = _undefined2(dependencyMap[34]).getUserTag(_undefined2.get(item.record.id));
        obj[4] = item.sortable;
        items.push(obj);
        const obj2 = _undefined2(dependencyMap[34]);
      }
    });
    const sorted = items.sort(sortByMatchScoreDefault);
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
    const normalizer = isNullOrEmpty;
    const stripDiacriticsResult = isNullOrEmpty.stripDiacritics(normalizer.normalize(query.toLocaleLowerCase()));
    let obj = { exactQuery: null, containQuery: null, queryLower: null };
    const regExp = new RegExp("^" + obj132Default.escape(stripDiacriticsResult), "i");
    obj[0] = regExp;
    const regExp1 = new RegExp(obj132Default.escape(stripDiacriticsResult), "i");
    obj[1] = regExp1;
    obj[2] = stripDiacriticsResult;
    const tmp4Result = applyDefault(authStore.getMutablePrivateChannels());
    const iter = applyDefault(authStore.getMutablePrivateChannels()).values();
    items = [];
    const iter2 = applyDefault(authStore.getMutablePrivateChannels()).values().value()[Symbol.iterator]();
    const nextResult = iter2.next();
    while (iter2 !== undefined) {
      let tmp6 = nextResult;
      if (nextResult.isMultiUserDM()) {
        if (filter(tmp6)) {
          let obj8 = computeChannelName;
          let channelName = obj8.computeChannelName(tmp6, authStore2, store6);
          let toLocaleLowerCaseResult = channelName.toLocaleLowerCase();
          let obj10 = isNullOrEmpty;
          let normalizer2 = isNullOrEmpty;
          let stripDiacriticsResult1 = obj10.stripDiacritics(normalizer2.normalize(toLocaleLowerCaseResult));
          let tmp15 = stripDiacriticsResult1;
          let tmp17 = getMatchValue(stripDiacriticsResult1, obj, flag);
          let items1 = [];
          let recipients = tmp6.recipients;
          for (const item10107 of recipients) {
            let user = authStore2.getUser(item10107);
            let tmp23 = user;
            if (null != user) {
              let username = tmp23.username;
              let tmp56 = username;
              let obj14 = nameFromUserDefault;
              let globalName = obj14.getGlobalName(tmp23);
              let nickname = store6.getNickname(item10107);
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
            let obj11 = isNullOrEmpty;
            let normalizer3 = isNullOrEmpty;
            let _Math = Math;
            let bound = Math.min(5, getMatchValue(obj11.stripDiacritics(normalizer3.normalize(item10133.toLocaleLowerCase())), obj, flag));
            if (bound > tmp17) {
              tmp17 = bound;
            }
            continue;
          }
          if (tmp17 > 0) {
            obj = { type: null, record: null, score: null, comparator: null, sortable: null };
            obj[0] = AutocompleterResultTypes.GROUP_DM;
            obj[1] = tmp6;
            obj[2] = calculateScore(tmp17, boosters[tmp6.id]);
            let obj13 = computeChannelName;
            obj[3] = obj13.computeChannelName(tmp6, authStore2, store6);
            obj[4] = tmp15;
            let arr2 = items.push(obj);
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
    const regExp = new RegExp("^" + obj132Default.escape(toLocaleLowerCaseResult), "i");
    obj[0] = regExp;
    const regExp1 = new RegExp(obj132Default.escape(toLocaleLowerCaseResult), "i");
    obj[1] = regExp1;
    obj[2] = toLocaleLowerCaseResult;
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
          obj[0] = AutocompleterResultTypes.APPLICATION;
          obj[1] = tmp5;
          obj[2] = tmp11;
          obj[3] = tmp5.name;
          obj[4] = tmp8;
          let arr = items.push(obj);
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
    const regExp = new RegExp("^" + obj132Default.escape(toLocaleLowerCaseResult), "i");
    obj[0] = regExp;
    const regExp1 = new RegExp(obj132Default.escape(toLocaleLowerCaseResult), "i");
    obj[1] = regExp1;
    obj[2] = toLocaleLowerCaseResult;
    obj = {};
    const intl = getSystemLocale.intl;
    items = [intl.string(getSystemLocale.t.pWG4ze)];
    obj[constants.SHOP] = items;
    const intl2 = getSystemLocale.intl;
    const items1 = [intl2.string(getSystemLocale.t.ElYQFS), , ];
    const intl3 = getSystemLocale.intl;
    items1[1] = intl3.string(getSystemLocale.t.pWG4ze);
    const intl4 = getSystemLocale.intl;
    items1[2] = intl4.string(getSystemLocale.t.EBYkzk);
    obj[constants.SHOP_ORBS_TAB] = items1;
    const intl5 = getSystemLocale.intl;
    const items2 = [intl5.string(getSystemLocale.t.ElYQFS), , ];
    const intl6 = getSystemLocale.intl;
    items2[1] = intl6.string(getSystemLocale.t["v/R2aC"]);
    const intl7 = getSystemLocale.intl;
    items2[2] = intl7.string(getSystemLocale.t.qQR4tn);
    obj[constants.QUEST_ORBS] = items2;
    const intl8 = getSystemLocale.intl;
    const items3 = [intl8.string(getSystemLocale.t.Ipxkog)];
    obj[constants.NITRO_HOME] = items3;
    const intl9 = getSystemLocale.intl;
    const items4 = [intl9.string(getSystemLocale.t.JALI2K)];
    obj[constants.QUEST_HOME] = items4;
    const intl10 = getSystemLocale.intl;
    const items5 = [intl10.string(getSystemLocale.t.PHjkRE), ];
    const intl11 = getSystemLocale.intl;
    items5[1] = intl11.string(getSystemLocale.t.AKcFUj);
    obj[constants.APPS_HOME] = items5;
    const intl12 = getSystemLocale.intl;
    const items6 = [intl12.string(getSystemLocale.t["3D5yo/"])];
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
            obj[0] = AutocompleterResultTypes.IN_APP_NAVIGATION;
            obj[1] = closure_5.fromType(tmp20);
            obj[2] = calculateScore(tmp10);
            obj[3] = tmp7;
            obj[4] = tmp7;
            let arr = items7.push(obj);
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
    const regExp = new RegExp("^" + obj132Default.escape(toLocaleLowerCaseResult), "i");
    obj[0] = regExp;
    const regExp1 = new RegExp(obj132Default.escape(toLocaleLowerCaseResult), "i");
    obj[1] = regExp1;
    obj[2] = toLocaleLowerCaseResult;
    const tmp4Result = applyDefault(sKUs.getSKUs());
    const iter = applyDefault(sKUs.getSKUs()).values();
    items = [];
    const iter2 = applyDefault(sKUs.getSKUs()).values().value()[Symbol.iterator]();
    const nextResult = iter2.next();
    while (iter2 !== undefined) {
      let tmp7 = nextResult;
      if (nextResult.type === constants3.DURABLE_PRIMARY) {
        if (filter(tmp7)) {
          let name = tmp7.name;
          let toLocaleLowerCaseResult1 = name.toLocaleLowerCase();
          let tmp12 = toLocaleLowerCaseResult1;
          let tmp14 = getMatchValue(toLocaleLowerCaseResult1, obj, flag);
          if (tmp14 > 0) {
            obj = { type: null, record: null, score: null, comparator: null, sortable: null };
            obj[0] = AutocompleterResultTypes.SKU;
            obj[1] = tmp7;
            obj[2] = tmp15;
            obj[3] = tmp7.name;
            obj[4] = tmp12;
            let arr = items.push(obj);
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
  getRecentlyTalked(channelId, maxResults) {
    const channel = authStore.getChannel(channelId);
    if (null != channelId) {
      if (null != channel) {
        const messages = store5.getMessages(channelId);
        const reversed = applyDefault(messages.toArray()).reverse();
        const tmp6Result = applyDefault(messages.toArray());
        const mapped = reversed.uniqBy((author) => author.author.id).map((item, index) => user.getUser(item.author.id));
        const found = mapped.filter((item, index) => {
          if (null == item) {
            return false;
          } else if (item.isNonUserBot()) {
            return false;
          } else {
            const guildId = channel.getGuildId();
            let tmp3 = null == guildId;
            if (!tmp3) {
              const member = closure_1_27.getMember(guildId, item.id);
              let joinedAt;
              if (member != null) {
                joinedAt = member.joinedAt;
              }
              tmp3 = null != joinedAt && !member.isPending;
            }
            return tmp3;
          }
        });
        const mapped1 = found.map((item, index) => {
          const guildId = channel.getGuildId();
          let member = null;
          if (null != guildId) {
            member = closure_1_27.getMember(guildId, item.id);
          }
          const obj = { type: AutocompleterResultTypes.USER, record: item, score: 0, comparator: null };
          let nick;
          if (member != null) {
            nick = member.nick;
          }
          if (nick == null) {
            nick = nameFromUserDefault.getName(item);
          }
          obj[3] = nick;
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
        let obj = { channelId: null, query: null, limit: null, checkRecentlyTalkedOnEmptyQuery: null, allowSnowflake: null };
        obj[0] = channel.id;
        obj[1] = query;
        obj[2] = limit;
        obj[3] = flag8;
        obj[4] = allowSnowflake;
        let queryChannelUsersResult = self.queryChannelUsers(obj);
        const mapped = queryChannelUsersResult.map((item, index) => {
          const record = item.record;
          return { user: record, score: item.score, comparator: item.comparator, nick: closure_1_27.getNick(channel.guild_id, record.id), status: closure_1_32.getStatus(record.id) };
        });
      }
      obj = { guildId: null, query: null, limit: null, checkRecentlyTalkedOnEmptyQuery: null, request: null, allowSnowflake: null };
      obj[0] = channel.guild_id;
      obj[1] = query;
      obj[2] = limit;
      obj[3] = flag8;
      obj[4] = request;
      obj[5] = allowSnowflake;
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
          const guild = store4.getGuild(guildId);
          tmp5 = items1;
          if (null != guild) {
            const tmp42 = flag(flag7[37]);
            const tmp42Result = flag(flag7[37])(store3.getSortedRoles(guild.id));
            const iter = flag(flag7[37])(store3.getSortedRoles(guild.id)).filter((item, index) => {
              ({ mentionable, name, id } = item);
              if (!mentionable) {
                mentionable = flag;
              }
              if (!mentionable) {
                mentionable = flag7;
              }
              if (mentionable) {
                let tmp3Result = flag(flag7[32])(formatted, name.toLowerCase());
                if (!tmp3Result) {
                  let tmp6 = allowSnowflake;
                  if (allowSnowflake) {
                    tmp6 = formatted === id;
                  }
                  tmp3Result = tmp6;
                }
                mentionable = tmp3Result;
                const tmp3 = flag(flag7[32]);
              }
              if (mentionable) {
                mentionable = id !== flag(flag7[44]).castGuildIdAsEveryoneGuildRoleId(guildId);
                const obj = flag(flag7[44]);
              }
              return mentionable;
            });
            const valueResult = flag(flag7[37])(store3.getSortedRoles(guild.id)).filter((item, index) => {
              ({ mentionable, name, id } = item);
              if (!mentionable) {
                mentionable = flag;
              }
              if (!mentionable) {
                mentionable = flag7;
              }
              if (mentionable) {
                let tmp3Result = flag(flag7[32])(formatted, name.toLowerCase());
                if (!tmp3Result) {
                  let tmp6 = allowSnowflake;
                  if (allowSnowflake) {
                    tmp6 = formatted === id;
                  }
                  tmp3Result = tmp6;
                }
                mentionable = tmp3Result;
                const tmp3 = flag(flag7[32]);
              }
              if (mentionable) {
                mentionable = id !== flag(flag7[44]).castGuildIdAsEveryoneGuildRoleId(guildId);
                const obj = flag(flag7[44]);
              }
              return mentionable;
            }).value();
            obj = { keys: null };
            obj[0] = ["name"];
            const obj4 = channel(flag7[45]);
            substr = channel(flag7[45]).matchSorter(valueResult, query, obj).slice(0, limit - closure_7);
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
      const IncludeGameMentionsInAutocomplete = channel(flag7[46]).IncludeGameMentionsInAutocomplete;
      const setting = IncludeGameMentionsInAutocomplete.getSetting();
      const GameMentionsMobileExperiment = channel(flag7[47]).GameMentionsMobileExperiment;
      const config = GameMentionsMobileExperiment.getConfig({ location: "mention autocomplete" });
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
            tmp5 = flag(flag7[32])(formatted, test.test);
          }
          if (!tmp5) {
            tmp5 = formatted === test.test;
          }
          if (tmp5) {
            if (closure_7 < limit) {
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
        }
      }
      if (tmp33) {
        let tmp35;
        if (MENTION_GAME != null) {
          tmp35 = MENTION_GAME();
        }
        maybePushOtherGlobal(tmp35);
      }
      let tmp38;
      if (MENTION_TIMESTAMP != null) {
        tmp38 = MENTION_TIMESTAMP();
      }
      maybePushOtherGlobal(tmp38);
      obj1 = { users: null, globals: null, roles: null };
      obj1[0] = items;
      obj1[1] = items2;
      obj1[2] = tmp5;
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
      let obj = { guildId: null, query: null };
      obj[0] = guildId;
      obj[1] = query;
      let users = this.queryGuildUsers(obj).map((item, index) => {
        const obj = {};
        const merged = Object.assign(item);
        obj.status = status.getStatus(item.record.id);
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
        const guild = store4.getGuild(guildId);
        sum = length;
        if (null != guild) {
          const tmp9 = flag3(roles[37]);
          const found = flag3(roles[37])(store3.getSortedRoles(guild.id)).filter((item, index) => {
            let tmp = item.mentionable || canMentionEveryone || flag3;
            if (tmp) {
              tmp = flag3(roles[32])(formatted, item.name.toLowerCase());
              const tmp4 = flag3(roles[32]);
            }
            if (tmp) {
              tmp = !isEveryoneRole(item);
            }
            return tmp;
          });
          const tmp9Result = flag3(roles[37])(store3.getSortedRoles(guild.id));
          const item = found.take(closure_42 - length).forEach((item, index) => {
            roles.push(item);
          });
          sum = length + roles.length;
          const takeResult = found.take(closure_42 - length);
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
        tmp15Result = flag3(roles[32])(formatted, MENTION_EVERYONE().test);
        const tmp15 = flag3(roles[32]);
      }
      let sum1 = sum;
      if (tmp15Result) {
        globals.push(MENTION_EVERYONE());
        sum1 = sum + 1;
      }
      let tmp23Result = sum1 < closure_42;
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
    const regExp = new RegExp("^" + importDefault(regExp1[31]).escape(toLocaleLowerCaseResult), "i");
    let obj = importDefault(regExp1[31]);
    regExp1 = new RegExp(importDefault(regExp1[31]).escape(toLocaleLowerCaseResult), "i");
    const obj2 = importDefault(regExp1[31]);
    const mapped = importDefault(regExp1[37])(fuzzy.choices).map((item, index) => {
      const displayName = item.displayName;
      let obj = { exactQuery: regExp, containQuery: regExp1, queryLower: c1 };
      const tmp = getMatchValue(displayName.toLocaleLowerCase(), obj, flag);
      let tmp2 = null;
      if (tmp > 0) {
        obj = { choice: null, score: null, originalIndex: null };
        obj[0] = item;
        obj[1] = tmp;
        obj[2] = index;
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
    obj1 = obj132Default;
    const regExp = new RegExp("^" + obj1.escape(toLocaleLowerCaseResult), "i");
    obj[0] = regExp;
    let obj2 = obj132Default;
    const regExp1 = new RegExp(obj2.escape(toLocaleLowerCaseResult), "i");
    obj[1] = regExp1;
    obj[2] = toLocaleLowerCaseResult;
    let canSeeOnboardingHomeResult = useCanSeeOnboardingHome.canSeeOnboardingHome(guild.id);
    if (canSeeOnboardingHomeResult) {
      const features = guild.features;
      canSeeOnboardingHomeResult = !features.has(constants2.HUB);
    }
    const features2 = guild.features;
    const hasItem = features2.has(constants2.COMMUNITY);
    let result = useGuildOnboardingAvailable.isGuildOnboardingAvailable(guild);
    if (result) {
      const features3 = guild.features;
      result = features3.has(constants2.COMMUNITY);
    }
    obj = { id: StaticChannelId.SERVER_GUIDE, name: null };
    const intl = getSystemLocale.intl;
    obj[1] = intl.string(getSystemLocale.t.VbpLyU);
    items = [obj, , ];
    obj = { id: StaticChannelId.CHANNEL_BROWSER, name: null };
    const intl2 = getSystemLocale.intl;
    obj[1] = intl2.string(getSystemLocale.t.et6wav);
    items[1] = obj;
    obj1 = { id: StaticChannelId.CUSTOMIZE_COMMUNITY, name: null };
    const intl3 = getSystemLocale.intl;
    obj1[1] = intl3.string(getSystemLocale.t.h9mGOP);
    items[2] = obj1;
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
              obj2 = { id: null, name: null, type: null, guild_id: null };
              ({ id: obj9[0], name: obj9[1] } = tmp12);
              obj2[2] = ChannelTypes.UNKNOWN;
              obj2[3] = guild.id;
              let tmp27 = new closure_19(obj2);
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
    const obj = {
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
      allowEmptyQueries: null
    };
    obj[0] = this.queryChannels(obj).map((item, index) => item.record);
    return obj;
  },
  queryApplicationCommandChannelResults(limit) {
    const self = this;
    ({ channel, channelTypes } = limit);
    limit = limit.limit;
    if (limit === undefined) {
      limit = closure_42;
    }
    if (null == channel.guild_id) {
      items = [];
      if (tmp12) {
        items.push(channel);
      }
      let obj = { channels: null };
      obj[0] = items;
      return obj;
    } else {
      let items1 = [];
      for (const item10012 of items) {
        obj = { query: null, guildId: null, limit: null, fuzzy: true, filter: null, type: null, allowEmptyQueries: true, requireVocalConnectAccess: false, allowSnowflake: null };
        obj[0] = tmp;
        obj[1] = channel.guild_id;
        obj[2] = limit;
        obj[4] = function filter(type) {
          let hasItem = null == channelTypes;
          if (!hasItem) {
            hasItem = channelTypes.includes(type.type);
          }
          return hasItem;
        };
        obj[5] = item10012;
        obj[8] = tmp2;
        items1 = items1.concat(self.queryChannels(obj));
        continue;
      }
      const found = items1.filter((item, index) => "null" !== item.record.id);
      let sorted = found.sort(compareChannelsByScoreAndPositionDefault);
      let tmp8 = null != limit;
      if (tmp8) {
        tmp8 = sorted.length > limit;
      }
      if (tmp8) {
        sorted = sorted.slice(0, limit);
      }
      obj = { channels: null };
      obj[0] = sorted.map((item, index) => item.record);
      return obj;
    }
  },
  queryChoiceResults(query) {
    const obj = { query: query.query, choices: query.choices, limit: null };
    obj[0] = this.queryChoice(obj).map((item, index) => item.choice);
    return obj;
  },
  queryEmojiResults(matchComparator) {
    let maxCount = matchComparator.maxCount;
    ({ query, channel, intention } = matchComparator);
    if (maxCount === undefined) {
      maxCount = closure_42;
    }
    const FrecencyUserSettingsActionCreators = updateUserGuildSettings.FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
    return { emojis: closure_7.searchWithoutFetchingLatest({ channel, query, count: maxCount, intention, matchComparator: matchComparator.matchComparator }) };
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
    [importDefault, ] = tmp;
    closure_6 = undefined;
    dependencyMap = authStore2.getCurrentUser();
    new Set();
    items1 = [];
    closure_5 = items1;
    const FrecencyUserSettingsActionCreators = flag(1374).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
    function _loop() {
      if ("" === closure_6) {
        return 1;
      } else {
        const toLocaleLowerCaseResult = closure_6.toLocaleLowerCase();
        const stripDiacriticsResult = toLocaleLowerCaseResult(1903).stripDiacritics(toLocaleLowerCaseResult);
        const _RegExp = RegExp;
        let obj2 = toLocaleLowerCaseResult(1903);
        const _HermesInternal = HermesInternal;
        const regExp = new RegExp("^" + nextResult(4362).escape(stripDiacriticsResult), "i");
        const _RegExp2 = RegExp;
        const obj3 = nextResult(4362);
        const _HermesInternal2 = HermesInternal;
        const regExp1 = new RegExp("" + nextResult(4362).escape(stripDiacriticsResult), "i");
        const stickerMetadataArrays = closure_1_10.getStickerMetadataArrays();
        let item = stickerMetadataArrays.forEach((item, index) => {
          item = item.forEach((item, index) => {
            let num = 0;
            let tmp = null;
            const stickerById = closure_2_10.getStickerById(index);
            if (null != stickerById) {
              if (regExp1(stickerById, obj2.getStickerSendability(stickerById, closure_1_3, regExp))) {
                const iter = item[Symbol.iterator]();
                const iter2 = iter.next();
                while (iter !== undefined) {
                  let type = iter2.type;
                  let tmp7 = type;
                  let value = iter2.value;
                  let tmp9 = closure_2_61(type);
                  let num4 = 0;
                  if (closure_1_0) {
                    if (value === closure_0) {
                      num4 = closure_2_46 * tmp9;
                    } else if (regex.test(value)) {
                      num4 = 7 * tmp9;
                    } else {
                      let tmp18 = tmp7 !== toLocaleLowerCaseResult(closure_2_3[36]).StickerMetadataTypes.GUILD_NAME;
                      if (tmp18) {
                        tmp18 = tmp7 !== toLocaleLowerCaseResult(closure_2_3[36]).StickerMetadataTypes.PACK_NAME;
                      }
                      if (tmp18) {
                        tmp18 = tmp7 !== toLocaleLowerCaseResult(closure_2_3[36]).StickerMetadataTypes.STICKER_NAME;
                      }
                      if (!tmp18) {
                        tmp18 = !regex2.test(value);
                      }
                      if (!tmp18) {
                        num4 = 5 * tmp9;
                      }
                    }
                  } else if (value === closure_0) {
                    num4 = closure_2_46 * tmp9;
                    tmp = value;
                  }
                  if (num4 > num) {
                    num = num4;
                    tmp = value;
                  }
                  continue;
                }
                const stickerFrecencyWithoutFetchingLatest = closure_2_9.stickerFrecencyWithoutFetchingLatest;
                const score = stickerFrecencyWithoutFetchingLatest.getScore(index);
                if (null != score) {
                  num = num * (score / 100);
                }
                let tmp37 = num > 0;
                if (tmp37) {
                  tmp37 = null != tmp;
                }
                if (tmp37) {
                  tmp37 = !closure_1_4.has(stickerById.id);
                }
                if (tmp37) {
                  closure_1_4.add(stickerById.id);
                  const obj = { sticker: null, comparator: null, score: null };
                  obj[0] = stickerById;
                  obj[1] = tmp;
                  obj[2] = num;
                  closure_1_5.push(obj);
                }
              }
              obj2 = toLocaleLowerCaseResult(closure_2_3[52]);
            }
          });
        });
        const obj4 = nextResult(4362);
      }
    }
    let iter2 = items[Symbol.iterator]();
    while (iter2 !== undefined) {
      closure_6 = iter2.next();
      let _loopResult = _loop();
      continue;
    }
    let obj = applyDefault(items1);
    let valueResult = applyDefault(items1).sortBy((score) => -1 * score.score).value();
    closure_5 = valueResult;
    if (0 === valueResult.length) {
      closure_5 = closure_49;
      valueResult = closure_49;
    }
    return valueResult;
  },
  querySoundmoji(arg0, channel) {
    const _require = channel;
    const currentUser = authStore2.getCurrentUser();
    const isFetchingResult = fetching.isFetching();
    let tmp3 = !isFetchingResult;
    if (!isFetchingResult) {
      tmp3 = !fetching.hasFetchedAllSounds();
    }
    if (tmp3) {
      const result = require("../modules/soundboard/SoundboardActionCreators.tsx").maybeFetchSoundboardSounds();
      const obj2 = _fetchDefaultSoundsFromApi2;
    }
    const FrecencyUserSettingsActionCreators = require("../modules/user_settings/UserSettingsProtoActionCreators.tsx").FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
    const sounds = fetching.getSounds();
    const reduced = Array.from(sounds.values()).reduce((acc, item, index) => {
      closure_0 = acc;
      item = item.forEach((item, index) => {
        let guild_id;
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
        tmp = isSoundValidDefault;
      });
      return acc;
    }, []);
    const arr = Array.from(sounds.values());
    return require("../modules/soundboard/searchSounds.tsx").searchSounds(arg0, reduced, currentUser, channel);
  },
  matchSentinel(arg0, arg1, closure_12) {
    const isMatch = regex.test(arg1);
    let tmp2 = !isMatch;
    if (!isMatch) {
      tmp2 = arg0 === closure_12;
    }
    return tmp2;
  },
  hasSameRoleAsUsername(getGuildId, user) {
    if (user.hasUniqueUsername()) {
      let guild = store4.getGuild(getGuildId.getGuildId());
      if (null != guild) {
        let sortedRoles = store3.getSortedRoles(guild.id);
      } else {
        sortedRoles = [];
      }
      guild = sortedRoles[Symbol.iterator]();
    } else {
      return false;
    }
  },
  queryMemberList
};
const map = new Map();
let result = require("obj132").fileFinishedImporting("utils/AutocompleteUtils.tsx");

export default areArraysShallowlyEqual;
export const WHITESPACE_REGEX = tmp7;
export { calculateScore };
export const getGameProfileMatchTier = function getGameProfileMatchTier(name, closure_0, index) {
  const toLocaleLowerCaseResult = name.toLocaleLowerCase();
  if (toLocaleLowerCaseResult === closure_0) {
    let num2 = c46;
  } else {
    num2 = 7;
    if (!toLocaleLowerCaseResult.startsWith(closure_0)) {
      const _Math = Math;
      num2 = Math.max(1, 7 - index);
    }
  }
  return num2;
};
export const getBoosterMap = function getBoosterMap(USER) {
  return areArraysShallowlyEqual.get(USER);
};
export const COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS = items;