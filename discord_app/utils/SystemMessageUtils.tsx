// === Module 8342: SystemMessageUtils ===

// Module 8342 (SystemMessageUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import util from "util" /* 1125 */;
import GuildLeaderboardTypes from "GuildLeaderboardTypes" /* 4892 */;
import useChannelName from "useChannelName" /* 5605 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5990 */;
import MessageRecordUtils from "MessageRecordUtils" /* 6013 */;
import useMessageAuthor from "useMessageAuthor" /* 6367 */;
import MarkupParser from "MarkupParser" /* 8343 */;
import AutomodNotificationEmbedTypeKeys from "AutomodNotificationEmbedTypeKeys" /* 8347 */;
import GuildRoleSubscriptionSystemMessageUtils from "GuildRoleSubscriptionSystemMessageUtils" /* 8348 */;
import GuildProductSystemMessageUtils from "GuildProductSystemMessageUtils" /* 8350 */;
import ApplicationSubscriptionSystemMessageUtils from "ApplicationSubscriptionSystemMessageUtils" /* 8351 */;
import PrivateChannelIntegrationSystemMessageUtils from "PrivateChannelIntegrationSystemMessageUtils" /* 8352 */;
import PopularMusicSystemMessageTypes from "PopularMusicSystemMessageTypes" /* 8353 */;
import PopularMusicSystemMessageCopy from "PopularMusicSystemMessageCopy" /* 8354 */;
import GuildLeaderboardSystemMessageCopy from "GuildLeaderboardSystemMessageCopy" /* 8355 */;
import _slicedToArray from "module_32" /* 32 */;
import MessageRecord from "MessageRecord" /* 4915 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4824 */;
import GuildStore from "GuildStore" /* 4846 */;
import RelationshipStore from "RelationshipStore" /* 4914 */;
import UserStore from "UserStore" /* 1389 */;

const require = globalThis.__r;

require = fn;
function getSystemMessageUserJoinMobile(id) {
  const items = [util.t.Jm6e0x, util.t.MGRnRT, util.t.EXOEGh, util.t["5uCTFN"], util.t.rl45Qo, util.t.Bh9zpQ, util.t.RdEy1J, util.t.qcdp00, util.t.F7w2Ru, util.t.gSyOgK, util.t.uYgqv7, util.t["b/1SBX"], util.t.LhebZF];
  const obj = SnowflakeUtilsDefault;
  return items[obj.extractTimestamp(obj, id) % items.length];
}
const Constants = fn(1084);
({ MessageEmbedTypes: c10, MessageTypes: closure_11, NOOP: closure_12 } = Constants);
let closure_13 = { "234395307759108106": "https://groovy.bot/commands", "365975655608745985": "https://www.pokecord.com/getting-started", "512412940897484800": "http://jameslantz.net/smilebot" };
const size = fn(2);
let result = size.fileFinishedImporting("utils/SystemMessageUtils.tsx");

export default {
  stringify(mentions, isForumPost) {
    mentions = mentions.mentions;
    if (mentions == null) {
      mentions = [];
    }
    let first = _slicedToArray(mentions, 1)[0];
    if (null == first) {
      const channel_id = mentions.channel_id;
      const name = NicknameUtilsDefault.getName(null, channel_id, mentions.author);
      const type = mentions.type;
      if (constants.RECIPIENT_ADD === type) {
        if (null != null) {
          const intl22 = util.intl;
          const obj3 = { username: name, usernameOnClick, otherUsername: null, otherUsernameOnClick: null };
          const obj78 = MarkupParser;
          obj3.otherUsername = NicknameUtilsDefault.getName(null, channel_id, null);
          obj3.otherUsernameOnClick = usernameOnClick;
          return obj78.astToString(intl22.formatToParts(util.t["7/Xl0S"], obj3));
        }
      } else if (constants.RECIPIENT_REMOVE === type) {
        if (null != null) {
          const author2 = mentions.author;
          if (null != author2) {
            if (author2.id !== null.id) {
              const intl21 = util.intl;
              const obj5 = { username: name, usernameOnClick, otherUsername: null, otherUsernameOnClick: null };
              const obj75 = MarkupParser;
              obj5.otherUsername = NicknameUtilsDefault.getName(null, channel_id, null);
              obj5.otherUsernameOnClick = usernameOnClick;
              let astToStringResult = obj75.astToString(intl21.formatToParts(util.t.QtZ0RD, obj5));
              const tmp6Result6 = NicknameUtilsDefault;
            }
            return astToStringResult;
          }
          const intl20 = util.intl;
          const obj6 = { username: name, usernameOnClick };
          astToStringResult = MarkupParser.astToString(intl20.formatToParts(util.t["Qn5+Lf"], obj6));
        }
      } else if (constants.CALL === type) {
        const call = mentions.call;
        let astToStringResult1;
        if (null != call) {
          const participants = call.participants;
          if (-1 === participants.indexOf(AuthenticationStore.getId())) {
            const intl19 = util.intl;
            const obj7 = { username: name, usernameOnClick };
            astToStringResult1 = MarkupParser.astToString(intl19.formatToParts(util.t.DbgSA0, obj7));
          }
        }
        return astToStringResult1;
      } else if (constants.CHANNEL_NAME_CHANGE === type) {
        const intl18 = util.intl;
        const obj65 = MarkupParser;
        const t = util.t;
        const obj8 = { username: name, usernameOnClick, channelName: mentions.content };
        return obj65.astToString(intl18.formatToParts(isForumPost.isForumPost() ? t["qa0e/n"] : t.XCPMEG, obj8));
      } else if (constants.CHANNEL_ICON_CHANGE === type) {
        const intl17 = util.intl;
        const obj9 = { username: name, usernameOnClick };
        return MarkupParser.astToString(intl17.formatToParts(util.t.wypJZ0, obj9));
      } else if (constants.CHANNEL_PINNED_MESSAGE === type) {
        const intl16 = util.intl;
        const obj10 = { username: name, usernameOnClick };
        return MarkupParser.astToString(intl16.formatToParts(util.t["/M60j0"], obj10));
      } else if (constants.USER_JOIN === type) {
        const author = mentions.author;
        let bot;
        if (author != null) {
          bot = author.bot;
        }
        if (true === bot) {
          let name1 = null;
          if (null != mentions.actor) {
            name1 = NicknameUtilsDefault.getName(null, channel_id, mentions.actor);
            const tmp6Result7 = NicknameUtilsDefault;
          }
          if (null == name1) {
            const intl15 = util.intl;
            const obj12 = { appName: name, appNameOnClick: usernameOnClick };
            let astToStringResult2 = MarkupParser.astToString(intl15.formatToParts(util.t.EAkHd2, obj12));
          } else {
            const intl14 = util.intl;
            const obj13 = { username: name1, usernameOnClick, appName: name, appNameOnClick: usernameOnClick };
            astToStringResult2 = MarkupParser.astToString(intl14.formatToParts(util.t["x6G/Rr"], obj13));
          }
        } else {
          const intl13 = util.intl;
          const obj15 = { username: name, usernameOnClick };
          return MarkupParser.astToString(intl13.formatToParts(getSystemMessageUserJoinMobile(mentions.id), obj15));
        }
      } else if (constants.GUILD_BOOST === type) {
        const intl12 = util.intl;
        const obj16 = { username: name, usernameOnClick };
        return MarkupParser.astToString(intl12.formatToParts(util.t.ihxM9x, obj16));
      } else {
        if (constants.GUILD_BOOST_TIER_1 !== type) {
          if (constants.GUILD_BOOST_TIER_2 !== type) {
            if (constants.GUILD_BOOST_TIER_3 !== type) {
              if (constants.GUILD_INVITE_REMINDER === type) {
                const intl9 = util.intl;
                return intl9.string(util.t.gxyKvr);
              } else if (constants.THREAD_STARTER_MESSAGE === type) {
                const intl8 = util.intl;
                const obj17 = { username: name, threadName: useChannelName.computeChannelName(isForumPost, UserStore, RelationshipStore) };
                return intl8.formatToPlainString(util.t["B8H+Cl"], obj17);
              } else if (constants.ROLE_SUBSCRIPTION_PURCHASE === type) {
                let astToStringResult3 = null;
                if (!(mentions instanceof MessageRecord)) {
                  const obj42 = MarkupParser;
                  const obj18 = { username: name, guildId: isForumPost.guild_id, roleSubscriptionData: mentions.role_subscription_data };
                  astToStringResult3 = obj42.astToString(GuildRoleSubscriptionSystemMessageUtils.getRoleSubscriptionPurchaseSystemMessageContentMobile(obj18));
                }
                return astToStringResult3;
              } else if (constants.PURCHASE_NOTIFICATION === type) {
                let astToStringResult4 = null;
                if (!(mentions instanceof MessageRecord)) {
                  const purchase_notification = mentions.purchase_notification;
                  let product_name;
                  if (purchase_notification != null) {
                    const guild_product_purchase = purchase_notification.guild_product_purchase;
                    if (guild_product_purchase != null) {
                      product_name = guild_product_purchase.product_name;
                    }
                  }
                  astToStringResult4 = null;
                  if (null != product_name) {
                    const obj39 = MarkupParser;
                    const obj19 = { username: name, productName: mentions.purchase_notification.guild_product_purchase.product_name };
                    astToStringResult4 = obj39.astToString(GuildProductSystemMessageUtils.getGuildProductPurchaseSystemMessageContentMobile(obj19));
                  }
                }
                return astToStringResult4;
              } else if (constants.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION === type) {
                if (mentions instanceof MessageRecord) {
                  return null;
                } else {
                  const obj34 = useMessageAuthor;
                  const messageAuthor = obj34.getMessageAuthor(MessageRecordUtils.createMessageRecord(mentions));
                  const obj36 = MarkupParser;
                  const obj20 = { application: mentions.application, username: messageAuthor.nick };
                  return obj36.astToString(ApplicationSubscriptionSystemMessageUtils.getApplicationSubscriptionSystemMessageASTContent(obj20));
                }
              } else if (constants.PRIVATE_CHANNEL_INTEGRATION_ADDED === type) {
                let astToStringResult5 = null;
                if (!(mentions instanceof MessageRecord)) {
                  const obj29 = MarkupParser;
                  const obj21 = { application: mentions.application, username: null };
                  const obj30 = PrivateChannelIntegrationSystemMessageUtils;
                  const obj32 = useMessageAuthor;
                  obj21.username = obj32.getMessageAuthor(MessageRecordUtils.createMessageRecord(mentions)).nick;
                  astToStringResult5 = obj29.astToString(obj30.getPrivateChannelIntegrationAddedSystemMessageASTContent(obj21));
                }
                return astToStringResult5;
              } else if (constants.PRIVATE_CHANNEL_INTEGRATION_REMOVED === type) {
                let astToStringResult6 = null;
                if (!(mentions instanceof MessageRecord)) {
                  const obj24 = MarkupParser;
                  const obj22 = { application: mentions.application, username: null };
                  const obj25 = PrivateChannelIntegrationSystemMessageUtils;
                  const obj27 = useMessageAuthor;
                  obj22.username = obj27.getMessageAuthor(MessageRecordUtils.createMessageRecord(mentions)).nick;
                  astToStringResult6 = obj24.astToString(obj25.getPrivateChannelIntegrationRemovedSystemMessageASTContent(obj22));
                }
                return astToStringResult6;
              } else if (constants.AUTO_MODERATION_ACTION === type) {
                const embeds = mentions.embeds;
                let someResult;
                if (embeds != null) {
                  someResult = embeds.some((type) => type.type === constants.AUTO_MODERATION_NOTIFICATION);
                }
                if (someResult) {
                  const embeds1 = mentions.embeds;
                  const found = embeds1.find((type) => type.type === constants.AUTO_MODERATION_NOTIFICATION);
                  let found1;
                  if (found != null) {
                    const fields = found.fields;
                    if (fields != null) {
                      found1 = fields.find((name) => {
                        let tmp = "name" in name;
                        if (tmp) {
                          tmp = name.name === require("AutomodNotificationEmbedKeys").AutomodNotificationEmbedKeys.NOTIFICATION_TYPE;
                        }
                        return tmp;
                      });
                    }
                  }
                  if (null != found1) {
                    if ("value" in found1) {
                      value = found1.value;
                    }
                  }
                  const channel = ChannelStore.getChannel(channel_id);
                  let astToStringResult7 = null;
                  if (null != channel) {
                    guild = GuildStore.getGuild(channel.getGuildId());
                    astToStringResult7 = null;
                    if (null != guild) {
                      if (AutomodNotificationEmbedTypeKeys.AutomodNotificationEmbedTypeKeys.ACTIVITY_ALERTS_ENABLED === value) {
                        const intl7 = util.intl;
                        const obj23 = { guildName: guild.name };
                        astToStringResult7 = MarkupParser.astToString(intl7.formatToParts(util.t.wt3ZUM, obj23));
                        const tmp53Result = MarkupParser;
                      } else if (AutomodNotificationEmbedTypeKeys.AutomodNotificationEmbedTypeKeys.INTERACTION_BLOCKED === value) {
                        const intl6 = util.intl;
                        const obj26 = { guildName: guild.name };
                        astToStringResult7 = MarkupParser.astToString(intl6.formatToParts(util.t.AkqI0g, obj26));
                        const tmp53Result3 = MarkupParser;
                      } else {
                        const intl5 = util.intl;
                        const obj31 = { guildName: guild.name };
                        astToStringResult7 = MarkupParser.astToString(intl5.formatToParts(util.t["a+lJKl"], obj31));
                        const tmp53Result4 = MarkupParser;
                      }
                    }
                  }
                  return astToStringResult7;
                } else {
                  return mentions.content;
                }
              } else if (constants.GUILD_INCIDENT_ALERT_MODE_ENABLED === type) {
                const content3 = mentions.content;
                const channel1 = ChannelStore.getChannel(channel_id);
                let tmp36 = null;
                if (null != channel1) {
                  const guild1 = GuildStore.getGuild(channel1.getGuildId());
                  let astToStringResult8 = null;
                  if (null != guild1) {
                    const intl4 = util.intl;
                    const obj38 = { username: name, guildName: guild1.name, time: null };
                    let str2 = "";
                    if ("" !== content3) {
                      const _Date = Date;
                      const date = new Date(content3);
                      str2 = date.toLocaleString(util.intl.currentLocale, { hour: "numeric", minute: "2-digit" });
                    }
                    obj38.time = str2;
                    astToStringResult8 = MarkupParser.astToString(intl4.formatToParts(util.t.iOuWPk, obj38));
                  }
                  tmp36 = astToStringResult8;
                }
                return tmp36;
              } else if (constants.GUILD_INCIDENT_ALERT_MODE_DISABLED === type) {
                const channel2 = ChannelStore.getChannel(channel_id);
                let tmp30 = null;
                if (null != channel2) {
                  const guild2 = GuildStore.getGuild(channel2.getGuildId());
                  let astToStringResult9 = null;
                  if (null != guild2) {
                    const intl3 = util.intl;
                    const obj41 = { username: name, guildName: guild2.name };
                    astToStringResult9 = MarkupParser.astToString(intl3.formatToParts(util.t.axmbpm, obj41));
                  }
                  tmp30 = astToStringResult9;
                }
                return tmp30;
              } else if (constants.GUILD_SPACE_MESSAGE === type) {
                if (mentions instanceof MessageRecord) {
                  const guildSpaceData = mentions.guildSpaceData;
                  let music1;
                  if (guildSpaceData != null) {
                    music1 = guildSpaceData.music;
                  }
                  let music = music1;
                } else {
                  const guild_space_data = mentions.guild_space_data;
                  if (guild_space_data != null) {
                    music = guild_space_data.music;
                  }
                }
                const result = PopularMusicSystemMessageTypes.parseGuildSpaceMusicMessageData(music);
                if (null != result) {
                  const user = UserStore.getUser(result.userId);
                  let name2 = null;
                  if (null != user) {
                    name2 = NicknameUtilsDefault.getName(isForumPost.getGuildId(), channel_id, user);
                    const tmp6Result8 = NicknameUtilsDefault;
                  }
                  const musicSystemMessage = PopularMusicSystemMessageCopy.getMusicSystemMessage(result, name2);
                  if (null == musicSystemMessage) {
                    let content2 = mentions.content;
                  } else {
                    const intl2 = util.intl;
                    const obj44 = {};
                    const merged = Object.assign(musicSystemMessage.values);
                    obj44.usernameHook = function usernameHook(arg0) {
                      return arg0;
                    };
                    content2 = intl2.formatToPlainString(musicSystemMessage.message, obj44);
                  }
                  return content2;
                } else {
                  if (mentions instanceof MessageRecord) {
                    const guildSpaceData2 = mentions.guildSpaceData;
                    let leaderboard1;
                    if (guildSpaceData2 != null) {
                      leaderboard1 = guildSpaceData2.leaderboard;
                    }
                    let leaderboard = leaderboard1;
                  } else {
                    const guild_space_data2 = mentions.guild_space_data;
                    if (guild_space_data2 != null) {
                      leaderboard = guild_space_data2.leaderboard;
                    }
                  }
                  const result1 = GuildLeaderboardTypes.parseGuildSpaceLeaderboardMessageData(leaderboard);
                  const tmp10Result4 = GuildLeaderboardTypes;
                  let userId;
                  if (result1 != null) {
                    userId = result1.userId;
                  }
                  let secondaryUserId;
                  const user1 = UserStore.getUser(userId);
                  if (result1 != null) {
                    secondaryUserId = result1.secondaryUserId;
                  }
                  const guildSpaceLeaderboardMessage = GuildLeaderboardSystemMessageCopy.resolveGuildSpaceLeaderboardMessage(result1, user1, UserStore.getUser(secondaryUserId));
                  if (null == guildSpaceLeaderboardMessage) {
                    return mentions.content;
                  } else {
                    const guildId = isForumPost.getGuildId();
                    const obj45 = { username: null, previousUsername: null };
                    const tmp10Result6 = GuildLeaderboardSystemMessageCopy;
                    obj45.username = NicknameUtilsDefault.getName(guildId, channel_id, guildSpaceLeaderboardMessage.subject);
                    let str = "";
                    if (guildSpaceLeaderboardMessage.data.event === GuildLeaderboardTypes.GuildSpaceLeaderboardEvent.LEADER_CHANGED) {
                      str = NicknameUtilsDefault.getName(guildId, channel_id, guildSpaceLeaderboardMessage.previousLeader);
                      const tmp6Result10 = NicknameUtilsDefault;
                    }
                    obj45.previousUsername = str;
                    const leaderboardSystemMessage = tmp10Result6.getLeaderboardSystemMessage(guildSpaceLeaderboardMessage.data, obj45);
                    if (null == leaderboardSystemMessage) {
                      let content = mentions.content;
                    } else {
                      const intl = util.intl;
                      const obj47 = {};
                      const merged1 = Object.assign(leaderboardSystemMessage.values);
                      obj47.usernameHook = function usernameHook(arg0) {
                        return arg0;
                      };
                      obj47.previousUsernameHook = function previousUsernameHook(arg0) {
                        return arg0;
                      };
                      content = intl.formatToPlainString(leaderboardSystemMessage.message, obj47);
                    }
                    return content;
                  }
                  const tmp10Result5 = GuildLeaderboardSystemMessageCopy;
                }
              } else {
                return mentions.content;
              }
            }
          }
        }
        const channel3 = ChannelStore.getChannel(channel_id);
        if (null != channel3) {
          if (null != GuildStore.getGuild(channel3.getGuildId())) {
            const intl10 = util.intl;
            const obj49 = { username: name, usernameOnClick };
            let astToStringResult10 = MarkupParser.astToString(intl10.formatToParts(util.t.ihxM9x, obj49));
          }
          return astToStringResult10;
        }
        const intl11 = util.intl;
        const obj51 = { username: name, usernameOnClick };
        astToStringResult10 = MarkupParser.astToString(intl11.formatToParts(util.t.ihxM9x, obj51));
      }
    } else if (typeof first === "object") {
      first = UserStore.getUser(first.id);
      if (first == null) {
        first = null;
      }
    } else if (typeof first === "string") {
      let user2 = UserStore.getUser(first);
      if (user2 == null) {
        user2 = null;
      }
    }
  },
  getSystemMessageUserJoin(id) {
    const items = [util.t["0cuj7l"], util.t["MuW+CN"], util.t.osqpHX, util.t["5ToSh2"], util.t.JEB8ps, util.t.pkOV5T, util.t["kRb1J+"], util.t["EmKLY+"], util.t.rPtBnb, util.t["5B/ekS"], util.t.ESNC3Y, util.t.Iw6d8w, util.t["WecSZ/"]];
    const obj = SnowflakeUtilsDefault;
    return items[obj.extractTimestamp(obj, id) % items.length];
  },
  getSystemMessageUserJoinMobile,
  getSystemMessageBotJoin(arg0) {
    _require = arg0;
    let formatResult = null;
    if (null != closure_13[arg0]) {
      const intl = require("util").intl;
      const obj = { learnOnClick: null };
      const obj2 = {
        onClick() {
            return window.open(closure_13[closure_0]);
          }
      };
      obj.learnOnClick = obj2;
      formatResult = intl.format(require("util").t.xw1Ij0, obj);
    }
    return formatResult;
  },
  getSystemMessageAppAdded(authorNick, actorNick) {
    if (null == actorNick) {
      const intl2 = util.intl;
      const obj2 = { appName: authorNick, appNameOnClick };
      let astToStringResult = MarkupParser.astToString(intl2.formatToParts(util.t.EAkHd2, obj2));
    } else {
      const intl = util.intl;
      const obj4 = { username: actorNick, usernameOnClick: appNameOnClick, appName: authorNick, appNameOnClick };
      astToStringResult = MarkupParser.astToString(intl.formatToParts(util.t["x6G/Rr"], obj4));
    }
    return astToStringResult;
  }
};