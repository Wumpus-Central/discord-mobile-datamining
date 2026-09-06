// discord_app/utils/SystemMessageUtils.tsx
import SnowflakeUtilsDefault from "SnowflakeUtils.tsx";
import util from "../intl/index.native.tsx";
import NicknameUtilsDefault from "NicknameUtils.tsx";
import useChannelName from "../modules/channel/useChannelName.tsx";
import MessageRecordUtils from "../modules/messages/MessageRecordUtils.tsx";
import useMessageAuthor from "../modules/messages/useMessageAuthor.tsx";
import MarkupParser from "../../discord_common/js/packages/markup/MarkupParser.tsx";
import AutomodNotificationEmbedTypeKeys from "../../discord_common/js/shared/shared-constants/AutomodNotificationEmbedTypeKeys.tsx";
import GuildRoleSubscriptionSystemMessageUtils from "../modules/guild_role_subscriptions/GuildRoleSubscriptionSystemMessageUtils.tsx";
import GuildProductSystemMessageUtils from "../modules/guild_products/GuildProductSystemMessageUtils.tsx";
import ApplicationSubscriptionSystemMessageUtils from "../modules/premium_apps/ApplicationSubscriptionSystemMessageUtils.tsx";
import PrivateChannelIntegrationSystemMessageUtils from "../modules/private_channel_integrations/PrivateChannelIntegrationSystemMessageUtils.tsx";
import _slicedToArray from "../../_runtime/metro/00032__.js";
import MessageRecord from "../records/MessageRecord.tsx";
import AuthenticationStore from "../stores/AuthenticationStore.tsx";
import ChannelStore from "../stores/ChannelStore.tsx";
import GuildStore from "../stores/GuildStore.tsx";
import RelationshipStore from "../stores/RelationshipStore.tsx";
import UserStore from "../stores/UserStore.tsx";

require = fn;
function getSystemMessageUserJoinMobile(id) {
  const items = [
    util.t.Jm6e0x,
    util.t.MGRnRT,
    util.t.EXOEGh,
    util.t["5uCTFN"],
    util.t.rl45Qo,
    util.t.Bh9zpQ,
    util.t.RdEy1J,
    util.t.qcdp00,
    util.t.F7w2Ru,
    util.t.gSyOgK,
    util.t.uYgqv7,
    util.t["b/1SBX"],
    util.t.LhebZF,
  ];
  const obj = SnowflakeUtilsDefault;
  return items[obj.extractTimestamp(obj, id) % items.length];
}
const Constants = fn(1074);
({ MessageEmbedTypes: c10, MessageTypes: closure_11, NOOP: closure_12 } = Constants);
let closure_13 = {
  "234395307759108106": "https://groovy.bot/commands",
  "365975655608745985": "https://www.pokecord.com/getting-started",
  "512412940897484800": "http://jameslantz.net/smilebot",
};
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
      let obj = NicknameUtilsDefault;
      const name = obj.getName(null, channel_id, mentions.author);
      const type = mentions.type;
      if (constants.RECIPIENT_ADD === type) {
        if (null != null) {
          const intl18 = util.intl;
          obj = { username: name, usernameOnClick, otherUsername: null, otherUsernameOnClick: null };
          let tmp6Result = tmp6(4712);
          obj.otherUsername = tmp6Result.getName(null, channel_id, null);
          obj.otherUsernameOnClick = usernameOnClick;
          return MarkupParser.astToString(intl18.formatToParts(util.t["7/Xl0S"], obj));
        }
      } else if (tmp9.RECIPIENT_REMOVE === type) {
        if (null != null) {
          const author = mentions.author;
          if (null != author) {
            if (author.id !== null.id) {
              const intl17 = util.intl;
              obj = { username: name, usernameOnClick, otherUsername: null, otherUsernameOnClick: null };
              tmp6Result = tmp6(4712);
              obj.otherUsername = tmp6Result.getName(null, channel_id, null);
              obj.otherUsernameOnClick = usernameOnClick;
              let astToStringResult = MarkupParser.astToString(intl17.formatToParts(util.t.QtZ0RD, obj));
            }
            return astToStringResult;
          }
          const intl16 = util.intl;
          const obj1 = { username: name, usernameOnClick };
          astToStringResult = MarkupParser.astToString(intl16.formatToParts(util.t["Qn5+Lf"], obj1));
        }
      } else if (tmp9.CALL === type) {
        const call = mentions.call;
        let astToStringResult1;
        if (null != call) {
          const participants = call.participants;
          if (-1 === participants.indexOf(AuthenticationStore.getId())) {
            const intl15 = util.intl;
            let obj2 = { username: name, usernameOnClick };
            astToStringResult1 = MarkupParser.astToString(intl15.formatToParts(util.t.DbgSA0, obj2));
          }
        }
        return astToStringResult1;
      } else if (tmp9.CHANNEL_NAME_CHANGE === type) {
        const intl14 = util.intl;
        const obj52 = MarkupParser;
        const t = util.t;
        const obj3 = { username: name, usernameOnClick, channelName: mentions.content };
        return obj52.astToString(intl14.formatToParts(isForumPost.isForumPost() ? t["qa0e/n"] : t.XCPMEG, obj3));
      } else if (tmp9.CHANNEL_ICON_CHANGE === type) {
        const intl13 = util.intl;
        const obj4 = { username: name, usernameOnClick };
        return MarkupParser.astToString(intl13.formatToParts(util.t.wypJZ0, obj4));
      } else if (tmp9.CHANNEL_PINNED_MESSAGE === type) {
        const intl12 = util.intl;
        let obj5 = { username: name, usernameOnClick };
        return MarkupParser.astToString(intl12.formatToParts(util.t["/M60j0"], obj5));
      } else if (tmp9.USER_JOIN === type) {
        const intl11 = util.intl;
        const obj6 = { username: name, usernameOnClick };
        return MarkupParser.astToString(intl11.formatToParts(getSystemMessageUserJoinMobile(mentions.id), obj6));
      } else if (tmp9.GUILD_BOOST === type) {
        const intl10 = util.intl;
        const obj7 = { username: name, usernameOnClick };
        return MarkupParser.astToString(intl10.formatToParts(util.t.ihxM9x, obj7));
      } else {
        if (tmp9.GUILD_BOOST_TIER_1 !== type) {
          if (tmp9.GUILD_BOOST_TIER_2 !== type) {
            if (tmp9.GUILD_BOOST_TIER_3 !== type) {
              if (tmp9.GUILD_INVITE_REMINDER === type) {
                const intl7 = util.intl;
                return intl7.string(util.t.gxyKvr);
              } else if (tmp9.THREAD_STARTER_MESSAGE === type) {
                const intl6 = util.intl;
                const obj8 = {
                  username: name,
                  threadName: useChannelName.computeChannelName(isForumPost, UserStore, RelationshipStore),
                };
                return intl6.formatToPlainString(util.t["B8H+Cl"], obj8);
              } else if (tmp9.ROLE_SUBSCRIPTION_PURCHASE === type) {
                let astToStringResult2 = null;
                if (!(mentions instanceof MessageRecord)) {
                  const obj34 = MarkupParser;
                  const obj9 = {
                    username: name,
                    guildId: isForumPost.guild_id,
                    roleSubscriptionData: mentions.role_subscription_data,
                  };
                  astToStringResult2 = obj34.astToString(
                    GuildRoleSubscriptionSystemMessageUtils.getRoleSubscriptionPurchaseSystemMessageContentMobile(obj9),
                  );
                }
                return astToStringResult2;
              } else if (tmp9.PURCHASE_NOTIFICATION === type) {
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
                    const obj10 = {
                      username: name,
                      productName: mentions.purchase_notification.guild_product_purchase.product_name,
                    };
                    astToStringResult3 = obj31.astToString(
                      GuildProductSystemMessageUtils.getGuildProductPurchaseSystemMessageContentMobile(obj10),
                    );
                  }
                }
                return astToStringResult3;
              } else if (tmp9.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION === type) {
                if (mentions instanceof MessageRecord) {
                  return null;
                } else {
                  const obj26 = useMessageAuthor;
                  const messageAuthor = obj26.getMessageAuthor(MessageRecordUtils.createMessageRecord(mentions));
                  const obj28 = MarkupParser;
                  const obj11 = { application: mentions.application, username: messageAuthor.nick };
                  return obj28.astToString(
                    ApplicationSubscriptionSystemMessageUtils.getApplicationSubscriptionSystemMessageASTContent(obj11),
                  );
                }
              } else if (tmp9.PRIVATE_CHANNEL_INTEGRATION_ADDED === type) {
                let astToStringResult4 = null;
                if (!(mentions instanceof MessageRecord)) {
                  let obj20 = MarkupParser;
                  const obj12 = { application: mentions.application, username: null };
                  const obj22 = PrivateChannelIntegrationSystemMessageUtils;
                  const obj24 = useMessageAuthor;
                  obj12.username = obj24.getMessageAuthor(MessageRecordUtils.createMessageRecord(mentions)).nick;
                  astToStringResult4 = obj20.astToString(
                    obj22.getPrivateChannelIntegrationAddedSystemMessageASTContent(obj12),
                  );
                }
                return astToStringResult4;
              } else if (tmp9.PRIVATE_CHANNEL_INTEGRATION_REMOVED === type) {
                let astToStringResult5 = null;
                if (!(mentions instanceof MessageRecord)) {
                  let obj15 = MarkupParser;
                  let obj16 = PrivateChannelIntegrationSystemMessageUtils;
                  const obj13 = { application: mentions.application, username: null };
                  let obj18 = useMessageAuthor;
                  let obj19 = MessageRecordUtils;
                  obj13.username = obj18.getMessageAuthor(obj19.createMessageRecord(mentions)).nick;
                  astToStringResult5 = obj15.astToString(
                    obj16.getPrivateChannelIntegrationRemovedSystemMessageASTContent(obj13),
                  );
                }
                return astToStringResult5;
              } else if (tmp9.AUTO_MODERATION_ACTION === type) {
                let embeds = mentions.embeds;
                let someResult;
                if (embeds != null) {
                  someResult = embeds.some((type) => type.type === constants.AUTO_MODERATION_NOTIFICATION);
                }
                if (someResult) {
                  embeds = mentions.embeds;
                  const found = embeds.find((type) => type.type === constants.AUTO_MODERATION_NOTIFICATION);
                  let found1;
                  if (found != null) {
                    const fields = found.fields;
                    if (fields != null) {
                      found1 = fields.find((name) => {
                        let tmp = "name" in name;
                        if (tmp) {
                          tmp =
                            name.name ===
                            require("AutomodNotificationEmbedKeys").AutomodNotificationEmbedKeys.NOTIFICATION_TYPE;
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
                      if (
                        AutomodNotificationEmbedTypeKeys.AutomodNotificationEmbedTypeKeys.ACTIVITY_ALERTS_ENABLED ===
                        value
                      ) {
                        let tmp34Result = tmp34(7987);
                        const intl5 = tmp34(1114).intl;
                        const obj14 = { guildName: guild.name };
                        astToStringResult6 = tmp34Result.astToString(intl5.formatToParts(tmp34(1114).t.wt3ZUM, obj14));
                      } else if (tmp34(7991).AutomodNotificationEmbedTypeKeys.INTERACTION_BLOCKED === value) {
                        tmp34Result = tmp34(7987);
                        const intl4 = tmp34(1114).intl;
                        obj15 = { guildName: guild.name };
                        astToStringResult6 = tmp34Result.astToString(intl4.formatToParts(tmp34(1114).t.AkqI0g, obj15));
                      } else {
                        const intl3 = tmp34(1114).intl;
                        obj16 = { guildName: guild.name };
                        astToStringResult6 = tmp34(7987).astToString(
                          intl3.formatToParts(tmp34(1114).t["a+lJKl"], obj16),
                        );
                        const tmp34Result1 = tmp34(7987);
                      }
                    }
                  }
                  return astToStringResult6;
                } else {
                  return mentions.content;
                }
              } else if (tmp9.GUILD_INCIDENT_ALERT_MODE_ENABLED === type) {
                const content = mentions.content;
                const channel1 = ChannelStore.getChannel(channel_id);
                let tmp17 = null;
                if (null != channel1) {
                  const guild1 = GuildStore.getGuild(channel1.getGuildId());
                  let astToStringResult7 = null;
                  if (null != guild1) {
                    obj5 = MarkupParser;
                    const intl2 = util.intl;
                    const obj17 = { username: name, guildName: guild1.name, time: null };
                    let str = "";
                    if ("" !== content) {
                      const _Date = Date;
                      const date = new Date(content);
                      str = date.toLocaleString(tmp21(1114).intl.currentLocale, { hour: "numeric", minute: "2-digit" });
                    }
                    obj17.time = str;
                    astToStringResult7 = obj5.astToString(intl2.formatToParts(util.t.iOuWPk, obj17));
                    tmp21 = require;
                  }
                  tmp17 = astToStringResult7;
                }
                return tmp17;
              } else if (tmp9.GUILD_INCIDENT_ALERT_MODE_DISABLED === type) {
                const channel2 = ChannelStore.getChannel(channel_id);
                let tmp11 = null;
                if (null != channel2) {
                  const guild2 = GuildStore.getGuild(channel2.getGuildId());
                  let astToStringResult8 = null;
                  if (null != guild2) {
                    obj2 = MarkupParser;
                    const intl = util.intl;
                    obj18 = { username: name, guildName: guild2.name };
                    astToStringResult8 = obj2.astToString(intl.formatToParts(util.t.axmbpm, obj18));
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
            obj19 = { username: name, usernameOnClick };
            let astToStringResult9 = MarkupParser.astToString(intl8.formatToParts(util.t.ihxM9x, obj19));
          }
          return astToStringResult9;
        }
        const intl9 = util.intl;
        obj20 = { username: name, usernameOnClick };
        astToStringResult9 = MarkupParser.astToString(intl9.formatToParts(util.t.ihxM9x, obj20));
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
    const items = [
      util.t["0cuj7l"],
      util.t["MuW+CN"],
      util.t.osqpHX,
      util.t["5ToSh2"],
      util.t.JEB8ps,
      util.t.pkOV5T,
      util.t["kRb1J+"],
      util.t["EmKLY+"],
      util.t.rPtBnb,
      util.t["5B/ekS"],
      util.t.ESNC3Y,
      util.t.Iw6d8w,
      util.t["WecSZ/"],
    ];
    const obj = SnowflakeUtilsDefault;
    return items[obj.extractTimestamp(obj, id) % items.length];
  },
  getSystemMessageUserJoinMobile,
  getSystemMessageBotJoin(arg0) {
    _require = arg0;
    let formatResult = null;
    if (null != closure_13[arg0]) {
      const intl = require("util").intl;
      let obj = { learnOnClick: null };
      obj = {
        onClick() {
          return window.open(closure_13[closure_0]);
        },
      };
      obj.learnOnClick = obj;
      formatResult = intl.format(require("util").t.xw1Ij0, obj);
    }
    return formatResult;
  },
};
