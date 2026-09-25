// === Module 7423: SystemMessageUtils ===

// Module 7423 (SystemMessageUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import util from "util" /* 1115 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4981 */;
import useChannelName from "useChannelName" /* 4982 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5051 */;
import useMessageAuthor from "useMessageAuthor" /* 5076 */;
import MarkupParser from "MarkupParser" /* 7424 */;
import AutomodNotificationEmbedTypeKeys from "AutomodNotificationEmbedTypeKeys" /* 7428 */;
import GuildRoleSubscriptionSystemMessageUtils from "GuildRoleSubscriptionSystemMessageUtils" /* 7429 */;
import GuildProductSystemMessageUtils from "GuildProductSystemMessageUtils" /* 7431 */;
import ApplicationSubscriptionSystemMessageUtils from "ApplicationSubscriptionSystemMessageUtils" /* 7432 */;
import PrivateChannelIntegrationSystemMessageUtils from "PrivateChannelIntegrationSystemMessageUtils" /* 7433 */;
import _slicedToArray from "module_32" /* 32 */;
import MessageRecord from "MessageRecord" /* 4477 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import GuildStore from "GuildStore" /* 2066 */;
import RelationshipStore from "RelationshipStore" /* 4476 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

require = fn;
function getSystemMessageUserJoinMobile(id) {
  const items = [util.t.Jm6e0x, util.t.MGRnRT, util.t.EXOEGh, util.t["5uCTFN"], util.t.rl45Qo, util.t.Bh9zpQ, util.t.RdEy1J, util.t.qcdp00, util.t.F7w2Ru, util.t.gSyOgK, util.t.uYgqv7, util.t["b/1SBX"], util.t.LhebZF];
  const obj = SnowflakeUtilsDefault;
  return items[obj.extractTimestamp(obj, id) % items.length];
}
const Constants = fn(1074);
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
          const intl18 = util.intl;
          const obj2 = { username: name, usernameOnClick, otherUsername: null, otherUsernameOnClick: null };
          const obj61 = MarkupParser;
          obj2.otherUsername = NicknameUtilsDefault.getName(null, channel_id, null);
          obj2.otherUsernameOnClick = usernameOnClick;
          return obj61.astToString(intl18.formatToParts(util.t["7/Xl0S"], obj2));
        }
      } else if (constants.RECIPIENT_REMOVE === type) {
        if (null != null) {
          const author = mentions.author;
          if (null != author) {
            if (author.id !== null.id) {
              const intl17 = util.intl;
              const obj4 = { username: name, usernameOnClick, otherUsername: null, otherUsernameOnClick: null };
              const obj58 = MarkupParser;
              obj4.otherUsername = NicknameUtilsDefault.getName(null, channel_id, null);
              obj4.otherUsernameOnClick = usernameOnClick;
              let astToStringResult = obj58.astToString(intl17.formatToParts(util.t.QtZ0RD, obj4));
              const tmp6Result2 = NicknameUtilsDefault;
            }
            return astToStringResult;
          }
          const intl16 = util.intl;
          const obj5 = { username: name, usernameOnClick };
          astToStringResult = MarkupParser.astToString(intl16.formatToParts(util.t["Qn5+Lf"], obj5));
        }
      } else if (constants.CALL === type) {
        const call = mentions.call;
        let astToStringResult1;
        if (null != call) {
          const participants = call.participants;
          if (-1 === participants.indexOf(AuthenticationStore.getId())) {
            const intl15 = util.intl;
            const obj7 = { username: name, usernameOnClick };
            astToStringResult1 = MarkupParser.astToString(intl15.formatToParts(util.t.DbgSA0, obj7));
          }
        }
        return astToStringResult1;
      } else if (constants.CHANNEL_NAME_CHANGE === type) {
        const intl14 = util.intl;
        const obj52 = MarkupParser;
        const t = util.t;
        const obj8 = { username: name, usernameOnClick, channelName: mentions.content };
        return obj52.astToString(intl14.formatToParts(isForumPost.isForumPost() ? t["qa0e/n"] : t.XCPMEG, obj8));
      } else if (constants.CHANNEL_ICON_CHANGE === type) {
        const intl13 = util.intl;
        const obj9 = { username: name, usernameOnClick };
        return MarkupParser.astToString(intl13.formatToParts(util.t.wypJZ0, obj9));
      } else if (constants.CHANNEL_PINNED_MESSAGE === type) {
        const intl12 = util.intl;
        const obj10 = { username: name, usernameOnClick };
        return MarkupParser.astToString(intl12.formatToParts(util.t["/M60j0"], obj10));
      } else if (constants.USER_JOIN === type) {
        const intl11 = util.intl;
        const obj11 = { username: name, usernameOnClick };
        return MarkupParser.astToString(intl11.formatToParts(getSystemMessageUserJoinMobile(mentions.id), obj11));
      } else if (constants.GUILD_BOOST === type) {
        const intl10 = util.intl;
        const obj12 = { username: name, usernameOnClick };
        return MarkupParser.astToString(intl10.formatToParts(util.t.ihxM9x, obj12));
      } else {
        if (constants.GUILD_BOOST_TIER_1 !== type) {
          if (constants.GUILD_BOOST_TIER_2 !== type) {
            if (constants.GUILD_BOOST_TIER_3 !== type) {
              if (constants.GUILD_INVITE_REMINDER === type) {
                const intl7 = util.intl;
                return intl7.string(util.t.gxyKvr);
              } else if (constants.THREAD_STARTER_MESSAGE === type) {
                const intl6 = util.intl;
                const obj13 = { username: name, threadName: useChannelName.computeChannelName(isForumPost, UserStore, RelationshipStore) };
                return intl6.formatToPlainString(util.t["B8H+Cl"], obj13);
              } else if (constants.ROLE_SUBSCRIPTION_PURCHASE === type) {
                let astToStringResult2 = null;
                if (!(mentions instanceof MessageRecord)) {
                  const obj34 = MarkupParser;
                  const obj14 = { username: name, guildId: isForumPost.guild_id, roleSubscriptionData: mentions.role_subscription_data };
                  astToStringResult2 = obj34.astToString(GuildRoleSubscriptionSystemMessageUtils.getRoleSubscriptionPurchaseSystemMessageContentMobile(obj14));
                }
                return astToStringResult2;
              } else if (constants.PURCHASE_NOTIFICATION === type) {
                let astToStringResult3 = null;
                if (!(mentions instanceof MessageRecord)) {
                  const purchase_notification = mentions.purchase_notification;
                  let product_name;
                  if (purchase_notification != null) {
                    const guild_product_purchase = purchase_notification.guild_product_purchase;
                    if (guild_product_purchase != null) {
                      product_name = guild_product_purchase.product_name;
                    }
                  }
                  astToStringResult3 = null;
                  if (null != product_name) {
                    const obj31 = MarkupParser;
                    const obj15 = { username: name, productName: mentions.purchase_notification.guild_product_purchase.product_name };
                    astToStringResult3 = obj31.astToString(GuildProductSystemMessageUtils.getGuildProductPurchaseSystemMessageContentMobile(obj15));
                  }
                }
                return astToStringResult3;
              } else if (constants.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION === type) {
                if (mentions instanceof MessageRecord) {
                  return null;
                } else {
                  const obj26 = useMessageAuthor;
                  const messageAuthor = obj26.getMessageAuthor(MessageRecordUtils.createMessageRecord(mentions));
                  const obj28 = MarkupParser;
                  const obj18 = { application: mentions.application, username: messageAuthor.nick };
                  return obj28.astToString(ApplicationSubscriptionSystemMessageUtils.getApplicationSubscriptionSystemMessageASTContent(obj18));
                }
              } else if (constants.PRIVATE_CHANNEL_INTEGRATION_ADDED === type) {
                let astToStringResult4 = null;
                if (!(mentions instanceof MessageRecord)) {
                  const obj21 = MarkupParser;
                  const obj23 = { application: mentions.application, username: null };
                  const obj22 = PrivateChannelIntegrationSystemMessageUtils;
                  const obj24 = useMessageAuthor;
                  obj23.username = obj24.getMessageAuthor(MessageRecordUtils.createMessageRecord(mentions)).nick;
                  astToStringResult4 = obj21.astToString(obj22.getPrivateChannelIntegrationAddedSystemMessageASTContent(obj23));
                }
                return astToStringResult4;
              } else if (constants.PRIVATE_CHANNEL_INTEGRATION_REMOVED === type) {
                let astToStringResult5 = null;
                if (!(mentions instanceof MessageRecord)) {
                  const obj16 = MarkupParser;
                  const obj30 = { application: mentions.application, username: null };
                  const obj17 = PrivateChannelIntegrationSystemMessageUtils;
                  const obj19 = useMessageAuthor;
                  obj30.username = obj19.getMessageAuthor(MessageRecordUtils.createMessageRecord(mentions)).nick;
                  astToStringResult5 = obj16.astToString(obj17.getPrivateChannelIntegrationRemovedSystemMessageASTContent(obj30));
                }
                return astToStringResult5;
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
                  let astToStringResult6 = null;
                  if (null != channel) {
                    const guild = GuildStore.getGuild(channel.getGuildId());
                    astToStringResult6 = null;
                    if (null != guild) {
                      if (AutomodNotificationEmbedTypeKeys.AutomodNotificationEmbedTypeKeys.ACTIVITY_ALERTS_ENABLED === value) {
                        const intl5 = util.intl;
                        const obj33 = { guildName: guild.name };
                        astToStringResult6 = MarkupParser.astToString(intl5.formatToParts(util.t.wt3ZUM, obj33));
                        const tmp34Result = MarkupParser;
                      } else if (AutomodNotificationEmbedTypeKeys.AutomodNotificationEmbedTypeKeys.INTERACTION_BLOCKED === value) {
                        const intl4 = util.intl;
                        const obj36 = { guildName: guild.name };
                        astToStringResult6 = MarkupParser.astToString(intl4.formatToParts(util.t.AkqI0g, obj36));
                        const tmp34Result3 = MarkupParser;
                      } else {
                        const intl3 = util.intl;
                        const obj37 = { guildName: guild.name };
                        astToStringResult6 = MarkupParser.astToString(intl3.formatToParts(util.t["a+lJKl"], obj37));
                        const tmp34Result4 = MarkupParser;
                      }
                    }
                  }
                  return astToStringResult6;
                } else {
                  return mentions.content;
                }
              } else if (constants.GUILD_INCIDENT_ALERT_MODE_ENABLED === type) {
                const content = mentions.content;
                const channel1 = ChannelStore.getChannel(channel_id);
                let tmp17 = null;
                if (null != channel1) {
                  const guild1 = GuildStore.getGuild(channel1.getGuildId());
                  let astToStringResult7 = null;
                  if (null != guild1) {
                    const intl2 = util.intl;
                    const obj39 = { username: name, guildName: guild1.name, time: null };
                    let str = "";
                    if ("" !== content) {
                      const _Date = Date;
                      const date = new Date(content);
                      str = date.toLocaleString(util.intl.currentLocale, { hour: "numeric", minute: "2-digit" });
                    }
                    obj39.time = str;
                    astToStringResult7 = MarkupParser.astToString(intl2.formatToParts(util.t.iOuWPk, obj39));
                  }
                  tmp17 = astToStringResult7;
                }
                return tmp17;
              } else if (constants.GUILD_INCIDENT_ALERT_MODE_DISABLED === type) {
                const channel2 = ChannelStore.getChannel(channel_id);
                let tmp11 = null;
                if (null != channel2) {
                  const guild2 = GuildStore.getGuild(channel2.getGuildId());
                  let astToStringResult8 = null;
                  if (null != guild2) {
                    const intl = util.intl;
                    const obj41 = { username: name, guildName: guild2.name };
                    astToStringResult8 = MarkupParser.astToString(intl.formatToParts(util.t.axmbpm, obj41));
                  }
                  tmp11 = astToStringResult8;
                }
                return tmp11;
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
            const obj43 = { username: name, usernameOnClick };
            let astToStringResult9 = MarkupParser.astToString(intl8.formatToParts(util.t.ihxM9x, obj43));
          }
          return astToStringResult9;
        }
        const intl9 = util.intl;
        const obj45 = { username: name, usernameOnClick };
        astToStringResult9 = MarkupParser.astToString(intl9.formatToParts(util.t.ihxM9x, obj45));
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
  }
};