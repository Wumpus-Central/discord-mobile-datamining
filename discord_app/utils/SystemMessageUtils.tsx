// === Module 8435: SystemMessageUtils ===

// Module 8435 (SystemMessageUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import util from "util" /* 1114 */;
import useChannelName from "useChannelName" /* 5647 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6036 */;
import MessageRecordUtils from "MessageRecordUtils" /* 6058 */;
import useMessageAuthor from "useMessageAuthor" /* 6432 */;
import GuildSpaceSystemMessageUtils from "GuildSpaceSystemMessageUtils" /* 8399 */;
import MarkupParser from "MarkupParser" /* 8436 */;
import AutomodNotificationEmbedTypeKeys from "AutomodNotificationEmbedTypeKeys" /* 8440 */;
import GuildRoleSubscriptionSystemMessageUtils from "GuildRoleSubscriptionSystemMessageUtils" /* 8441 */;
import GuildProductSystemMessageUtils from "GuildProductSystemMessageUtils" /* 8443 */;
import ApplicationSubscriptionSystemMessageUtils from "ApplicationSubscriptionSystemMessageUtils" /* 8444 */;
import PrivateChannelIntegrationSystemMessageUtils from "PrivateChannelIntegrationSystemMessageUtils" /* 8445 */;
import _slicedToArray from "module_32" /* 32 */;
import MessageRecord from "MessageRecord" /* 4952 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildStore from "GuildStore" /* 4880 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserStore from "UserStore" /* 1384 */;

const require = globalThis.__r;

require = fn;
function getSystemMessageUserJoinMobile(id) {
  const items = [util.t.Jm6e0x, util.t.MGRnRT, util.t.EXOEGh, util.t["5uCTFN"], util.t.rl45Qo, util.t.Bh9zpQ, util.t.RdEy1J, util.t.qcdp00, util.t.F7w2Ru, util.t.gSyOgK, util.t.uYgqv7, util.t["b/1SBX"], util.t.LhebZF];
  const obj = SnowflakeUtilsDefault;
  return items[obj.extractTimestamp(obj, id) % items.length];
}
const Constants = fn(1072);
({ MessageEmbedTypes: c10, MessageTypes: closure_11, NOOP: closure_12 } = Constants);
let closure_13 = { "234395307759108106": "https://groovy.bot/commands", "365975655608745985": "https://www.pokecord.com/getting-started", "512412940897484800": "http://jameslantz.net/smilebot" };
const size = fn(2);
const result = size.fileFinishedImporting("utils/SystemMessageUtils.tsx");

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
          const intl20 = util.intl;
          const obj3 = { username: name, usernameOnClick, otherUsername: null, otherUsernameOnClick: null };
          const obj67 = MarkupParser;
          obj3.otherUsername = NicknameUtilsDefault.getName(null, channel_id, null);
          obj3.otherUsernameOnClick = usernameOnClick;
          return obj67.astToString(intl20.formatToParts(util.t["7/Xl0S"], obj3));
        }
      } else if (constants.RECIPIENT_REMOVE === type) {
        if (null != null) {
          const author2 = mentions.author;
          if (null != author2) {
            if (author2.id !== null.id) {
              const intl19 = util.intl;
              const obj5 = { username: name, usernameOnClick, otherUsername: null, otherUsernameOnClick: null };
              const obj64 = MarkupParser;
              obj5.otherUsername = NicknameUtilsDefault.getName(null, channel_id, null);
              obj5.otherUsernameOnClick = usernameOnClick;
              let astToStringResult = obj64.astToString(intl19.formatToParts(util.t.QtZ0RD, obj5));
              const tmp6Result3 = NicknameUtilsDefault;
            }
            return astToStringResult;
          }
          const intl18 = util.intl;
          const obj6 = { username: name, usernameOnClick };
          astToStringResult = MarkupParser.astToString(intl18.formatToParts(util.t["Qn5+Lf"], obj6));
        }
      } else if (constants.CALL === type) {
        const call = mentions.call;
        let astToStringResult1;
        if (null != call) {
          const participants = call.participants;
          if (-1 === participants.indexOf(AuthenticationStore.getId())) {
            const intl17 = util.intl;
            const obj8 = { username: name, usernameOnClick };
            astToStringResult1 = MarkupParser.astToString(intl17.formatToParts(util.t.DbgSA0, obj8));
          }
        }
        return astToStringResult1;
      } else if (constants.CHANNEL_NAME_CHANGE === type) {
        const intl16 = util.intl;
        const obj58 = MarkupParser;
        const t = util.t;
        const obj9 = { username: name, usernameOnClick, channelName: mentions.content };
        return obj58.astToString(intl16.formatToParts(isForumPost.isForumPost() ? t["qa0e/n"] : t.XCPMEG, obj9));
      } else if (constants.CHANNEL_ICON_CHANGE === type) {
        const intl15 = util.intl;
        const obj10 = { username: name, usernameOnClick };
        return MarkupParser.astToString(intl15.formatToParts(util.t.wypJZ0, obj10));
      } else if (constants.CHANNEL_PINNED_MESSAGE === type) {
        const intl14 = util.intl;
        const obj11 = { username: name, usernameOnClick };
        return MarkupParser.astToString(intl14.formatToParts(util.t["/M60j0"], obj11));
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
            const tmp6Result4 = NicknameUtilsDefault;
          }
          if (null == name1) {
            const intl13 = util.intl;
            const obj12 = { appName: name, appNameOnClick: usernameOnClick };
            let astToStringResult2 = MarkupParser.astToString(intl13.formatToParts(util.t.EAkHd2, obj12));
          } else {
            const intl12 = util.intl;
            const obj13 = { username: name1, usernameOnClick, appName: name, appNameOnClick: usernameOnClick };
            astToStringResult2 = MarkupParser.astToString(intl12.formatToParts(util.t["x6G/Rr"], obj13));
          }
        } else {
          const intl11 = util.intl;
          const obj14 = { username: name, usernameOnClick };
          return MarkupParser.astToString(intl11.formatToParts(getSystemMessageUserJoinMobile(mentions.id), obj14));
        }
      } else if (constants.GUILD_BOOST === type) {
        const intl10 = util.intl;
        const obj15 = { username: name, usernameOnClick };
        return MarkupParser.astToString(intl10.formatToParts(util.t.ihxM9x, obj15));
      } else {
        if (constants.GUILD_BOOST_TIER_1 !== type) {
          if (constants.GUILD_BOOST_TIER_2 !== type) {
            if (constants.GUILD_BOOST_TIER_3 !== type) {
              if (constants.GUILD_INVITE_REMINDER === type) {
                const intl7 = util.intl;
                return intl7.string(util.t.gxyKvr);
              } else if (constants.THREAD_STARTER_MESSAGE === type) {
                const intl6 = util.intl;
                const obj16 = { username: name, threadName: useChannelName.computeChannelName(isForumPost, UserStore, RelationshipStore) };
                return intl6.formatToPlainString(util.t["B8H+Cl"], obj16);
              } else if (constants.ROLE_SUBSCRIPTION_PURCHASE === type) {
                let astToStringResult3 = null;
                if (!(mentions instanceof MessageRecord)) {
                  const obj35 = MarkupParser;
                  const obj19 = { username: name, guildId: isForumPost.guild_id, roleSubscriptionData: mentions.role_subscription_data };
                  astToStringResult3 = obj35.astToString(GuildRoleSubscriptionSystemMessageUtils.getRoleSubscriptionPurchaseSystemMessageContentMobile(obj19));
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
                    const obj32 = MarkupParser;
                    const obj24 = { username: name, productName: mentions.purchase_notification.guild_product_purchase.product_name };
                    astToStringResult4 = obj32.astToString(GuildProductSystemMessageUtils.getGuildProductPurchaseSystemMessageContentMobile(obj24));
                  }
                }
                return astToStringResult4;
              } else if (constants.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION === type) {
                if (mentions instanceof MessageRecord) {
                  return null;
                } else {
                  const obj27 = useMessageAuthor;
                  const messageAuthor = obj27.getMessageAuthor(MessageRecordUtils.createMessageRecord(mentions));
                  const obj29 = MarkupParser;
                  const obj31 = { application: mentions.application, username: messageAuthor.nick };
                  return obj29.astToString(ApplicationSubscriptionSystemMessageUtils.getApplicationSubscriptionSystemMessageASTContent(obj31));
                }
              } else if (constants.PRIVATE_CHANNEL_INTEGRATION_ADDED === type) {
                let astToStringResult5 = null;
                if (!(mentions instanceof MessageRecord)) {
                  const obj22 = MarkupParser;
                  const obj34 = { application: mentions.application, username: null };
                  const obj23 = PrivateChannelIntegrationSystemMessageUtils;
                  const obj25 = useMessageAuthor;
                  obj34.username = obj25.getMessageAuthor(MessageRecordUtils.createMessageRecord(mentions)).nick;
                  astToStringResult5 = obj22.astToString(obj23.getPrivateChannelIntegrationAddedSystemMessageASTContent(obj34));
                }
                return astToStringResult5;
              } else if (constants.PRIVATE_CHANNEL_INTEGRATION_REMOVED === type) {
                let astToStringResult6 = null;
                if (!(mentions instanceof MessageRecord)) {
                  const obj17 = MarkupParser;
                  const obj37 = { application: mentions.application, username: null };
                  const obj18 = PrivateChannelIntegrationSystemMessageUtils;
                  const obj20 = useMessageAuthor;
                  obj37.username = obj20.getMessageAuthor(MessageRecordUtils.createMessageRecord(mentions)).nick;
                  astToStringResult6 = obj17.astToString(obj18.getPrivateChannelIntegrationRemovedSystemMessageASTContent(obj37));
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
                    const guild = GuildStore.getGuild(channel.getGuildId());
                    astToStringResult7 = null;
                    if (null != guild) {
                      if (AutomodNotificationEmbedTypeKeys.AutomodNotificationEmbedTypeKeys.ACTIVITY_ALERTS_ENABLED === value) {
                        const intl5 = util.intl;
                        const obj38 = { guildName: guild.name };
                        astToStringResult7 = MarkupParser.astToString(intl5.formatToParts(util.t.wt3ZUM, obj38));
                        const tmp35Result = MarkupParser;
                      } else if (AutomodNotificationEmbedTypeKeys.AutomodNotificationEmbedTypeKeys.INTERACTION_BLOCKED === value) {
                        const intl4 = util.intl;
                        const obj40 = { guildName: guild.name };
                        astToStringResult7 = MarkupParser.astToString(intl4.formatToParts(util.t.AkqI0g, obj40));
                        const tmp35Result3 = MarkupParser;
                      } else {
                        const intl3 = util.intl;
                        const obj42 = { guildName: guild.name };
                        astToStringResult7 = MarkupParser.astToString(intl3.formatToParts(util.t["a+lJKl"], obj42));
                        const tmp35Result4 = MarkupParser;
                      }
                    }
                  }
                  return astToStringResult7;
                } else {
                  return mentions.content;
                }
              } else if (constants.GUILD_INCIDENT_ALERT_MODE_ENABLED === type) {
                const content = mentions.content;
                const channel1 = ChannelStore.getChannel(channel_id);
                let tmp18 = null;
                if (null != channel1) {
                  const guild1 = GuildStore.getGuild(channel1.getGuildId());
                  let astToStringResult8 = null;
                  if (null != guild1) {
                    const intl2 = util.intl;
                    const obj44 = { username: name, guildName: guild1.name, time: null };
                    let str = "";
                    if ("" !== content) {
                      const _Date = Date;
                      const date = new Date(content);
                      str = date.toLocaleString(util.intl.currentLocale, { hour: "numeric", minute: "2-digit" });
                    }
                    obj44.time = str;
                    astToStringResult8 = MarkupParser.astToString(intl2.formatToParts(util.t.iOuWPk, obj44));
                  }
                  tmp18 = astToStringResult8;
                }
                return tmp18;
              } else if (constants.GUILD_INCIDENT_ALERT_MODE_DISABLED === type) {
                const channel2 = ChannelStore.getChannel(channel_id);
                let tmp12 = null;
                if (null != channel2) {
                  const guild2 = GuildStore.getGuild(channel2.getGuildId());
                  let astToStringResult9 = null;
                  if (null != guild2) {
                    const intl = util.intl;
                    const obj46 = { username: name, guildName: guild2.name };
                    astToStringResult9 = MarkupParser.astToString(intl.formatToParts(util.t.axmbpm, obj46));
                  }
                  tmp12 = astToStringResult9;
                }
                return tmp12;
              } else if (constants.GUILD_SPACE_MESSAGE === type) {
                return GuildSpaceSystemMessageUtils.stringifyGuildSpaceSystemMessage(mentions, isForumPost);
              } else {
                return mentions.content;
              }
            }
          }
        }
        const channel3 = ChannelStore.getChannel(channel_id);
        if (null != channel3) {
          if (null != GuildStore.getGuild(channel3.getGuildId())) {
            const intl8 = util.intl;
            const obj48 = { username: name, usernameOnClick };
            let astToStringResult10 = MarkupParser.astToString(intl8.formatToParts(util.t.ihxM9x, obj48));
          }
          return astToStringResult10;
        }
        const intl9 = util.intl;
        const obj49 = { username: name, usernameOnClick };
        astToStringResult10 = MarkupParser.astToString(intl9.formatToParts(util.t.ihxM9x, obj49));
      }
    } else if (typeof first === "object") {
      first = UserStore.getUser(first.id);
      if (first == null) {
        first = null;
      }
    } else if (typeof first === "string") {
      let user = UserStore.getUser(first);
      if (user == null) {
        user = null;
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