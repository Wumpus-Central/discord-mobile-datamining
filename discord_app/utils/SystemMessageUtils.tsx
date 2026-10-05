// discord_app/utils/SystemMessageUtils.tsx
import SnowflakeUtilsDefault from "SnowflakeUtils.tsx";
import intl20 from "../intl/index.native.tsx";
import GuildLeaderboardTypes from "../modules/guild_space/gaming_leaderboard/GuildLeaderboardTypes.tsx";
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
import GuildLeaderboardSystemMessageCopy from "../modules/guild_space/gaming_leaderboard/GuildLeaderboardSystemMessageCopy.tsx";
import _slicedToArray from "../../_runtime/metro/00032__slicedToArray.js";
import MessageRecord from "../records/MessageRecord.tsx";
import AuthenticationStore from "../stores/AuthenticationStore.tsx";
import ChannelStore from "../stores/ChannelStore.tsx";
import GuildStore from "../stores/GuildStore.tsx";
import RelationshipStore from "../stores/RelationshipStore.tsx";
import UserStore from "../stores/UserStore.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let c10;
let closure_12;
let unpackModuleId;
function getSystemMessageUserJoinMobile(id) {
  const items = [
    intl20.t.Jm6e0x,
    intl20.t.MGRnRT,
    intl20.t.EXOEGh,
    intl20.t["5uCTFN"],
    intl20.t.rl45Qo,
    intl20.t.Bh9zpQ,
    intl20.t.RdEy1J,
    intl20.t.qcdp00,
    intl20.t.F7w2Ru,
    intl20.t.gSyOgK,
    intl20.t.uYgqv7,
    intl20.t["b/1SBX"],
    intl20.t.LhebZF,
  ];
  const obj = SnowflakeUtilsDefault;
  return items[obj.extractTimestamp(obj, id) % items.length];
}
({ MessageEmbedTypes: c10, MessageTypes: unpackModuleId, NOOP: closure_12 } = Constants);
let closure_13 = {
  "234395307759108106": "https://groovy.bot/commands",
  "365975655608745985": "https://www.pokecord.com/getting-started",
  "512412940897484800": "http://jameslantz.net/smilebot",
};
let obj = {
  stringify(mentions, isForumPost) {
    let getMessageAuthor;
    let getMessageAuthor2;
    let obj14;
    let obj16;
    let obj25;
    let str;
    let str2;
    let tmp7Result;
    let tmp7Result4;
    let tmp7Result5;
    mentions = mentions.mentions;
    if (mentions == null) {
      mentions = [];
    }
    const first = _slicedToArray(mentions, 1)[0];
    let tmp2 = null;
    if (null != first) {
      let tmp4;
      if (typeof first === "object") {
        let user = UserStore.getUser(first.id);
        if (user == null) {
          user = null;
        }
        tmp4 = user;
      } else {
        tmp4 = null;
        if (typeof first === "string") {
          let user1 = UserStore.getUser(first);
          if (user1 == null) {
            user1 = null;
          }
          tmp4 = user1;
        }
      }
      tmp2 = tmp4;
    }
    const channel_id = mentions.channel_id;
    const obj = NicknameUtilsDefault;
    const name = obj.getName(null, channel_id, mentions.author);
    const type = mentions.type;
    if (unpackModuleId.RECIPIENT_ADD === type) {
      if (null != tmp2) {
        const astToString21 = MarkupParser.astToString;
        MarkupParser;
        const intl19 = intl20.intl;
        const formatToParts4 = intl19.formatToParts;
        const obj2 = {
          username: name,
          usernameOnClick,
          otherUsername: tmp7Result.getName(null, channel_id, tmp2),
          otherUsernameOnClick: usernameOnClick,
        };
        const prop = intl20.t["7/Xl0S"];
        tmp7Result = NicknameUtilsDefault;
        return astToString21(formatToParts4(prop, obj2));
      }
    } else if (unpackModuleId.RECIPIENT_REMOVE === type) {
      if (null != tmp2) {
        const author = mentions.author;
        if (null != author) {
          let astToString20Result;
          if (author.id !== tmp2.id) {
            const astToString20 = MarkupParser.astToString;
            MarkupParser;
            const intl18 = intl20.intl;
            const formatToParts3 = intl18.formatToParts;
            const obj3 = {
              username: name,
              usernameOnClick,
              otherUsername: tmp7Result4.getName(null, channel_id, tmp2),
              otherUsernameOnClick: usernameOnClick,
            };
            const QtZ0RD = intl20.t.QtZ0RD;
            tmp7Result4 = NicknameUtilsDefault;
            astToString20Result = astToString20(formatToParts3(QtZ0RD, obj3));
          }
          return astToString20Result;
        }
        const astToString19 = MarkupParser.astToString;
        MarkupParser;
        const intl17 = intl20.intl;
        const obj4 = { username: name, usernameOnClick };
        astToString20Result = astToString19(intl17.formatToParts(intl20.t["Qn5+Lf"], obj4));
      }
    } else if (unpackModuleId.CALL === type) {
      const call = mentions.call;
      let astToString18Result;
      if (null != call) {
        const participants = call.participants;
        if (-1 === participants.indexOf(AuthenticationStore.getId())) {
          const astToString18 = MarkupParser.astToString;
          MarkupParser;
          const intl16 = intl20.intl;
          const obj5 = { username: name, usernameOnClick };
          astToString18Result = astToString18(intl16.formatToParts(intl20.t.DbgSA0, obj5));
        }
      }
      return astToString18Result;
    } else if (unpackModuleId.CHANNEL_NAME_CHANGE === type) {
      const astToString17 = MarkupParser.astToString;
      MarkupParser;
      const intl15 = intl20.intl;
      const formatToParts2 = intl15.formatToParts;
      const isForumPostResult = isForumPost.isForumPost();
      const t = intl20.t;
      const obj6 = { username: name, usernameOnClick, channelName: mentions.content };
      return astToString17(formatToParts2(isForumPostResult ? t["qa0e/n"] : t.XCPMEG, obj6));
    } else if (unpackModuleId.CHANNEL_ICON_CHANGE === type) {
      const astToString16 = MarkupParser.astToString;
      MarkupParser;
      const intl14 = intl20.intl;
      const obj7 = { username: name, usernameOnClick };
      return astToString16(intl14.formatToParts(intl20.t.wypJZ0, obj7));
    } else if (unpackModuleId.CHANNEL_PINNED_MESSAGE === type) {
      const astToString15 = MarkupParser.astToString;
      MarkupParser;
      const intl13 = intl20.intl;
      const obj8 = { username: name, usernameOnClick };
      return astToString15(intl13.formatToParts(intl20.t["/M60j0"], obj8));
    } else if (unpackModuleId.USER_JOIN === type) {
      const astToString14 = MarkupParser.astToString;
      MarkupParser;
      const intl12 = intl20.intl;
      const obj9 = { username: name, usernameOnClick };
      return astToString14(intl12.formatToParts(getSystemMessageUserJoinMobile(mentions.id), obj9));
    } else if (unpackModuleId.GUILD_BOOST === type) {
      const astToString13 = MarkupParser.astToString;
      MarkupParser;
      const intl11 = intl20.intl;
      const obj10 = { username: name, usernameOnClick };
      return astToString13(intl11.formatToParts(intl20.t.ihxM9x, obj10));
    } else {
      if (unpackModuleId.GUILD_BOOST_TIER_1 !== type) {
        if (unpackModuleId.GUILD_BOOST_TIER_2 !== type) {
          if (unpackModuleId.GUILD_BOOST_TIER_3 !== type) {
            if (unpackModuleId.GUILD_INVITE_REMINDER === type) {
              const intl8 = intl20.intl;
              return intl8.string(intl20.t.gxyKvr);
            } else if (unpackModuleId.THREAD_STARTER_MESSAGE === type) {
              const intl7 = intl20.intl;
              const formatToPlainString2 = intl7.formatToPlainString;
              const obj11 = {
                username: name,
                threadName: obj25.computeChannelName(isForumPost, UserStore, RelationshipStore),
              };
              const prop1 = intl20.t["B8H+Cl"];
              obj25 = useChannelName;
              return formatToPlainString2(prop1, obj11);
            } else if (unpackModuleId.ROLE_SUBSCRIPTION_PURCHASE === type) {
              let astToString10Result = null;
              if (!(mentions instanceof MessageRecord)) {
                const astToString10 = MarkupParser.astToString;
                MarkupParser;
                const obj12 = {
                  username: name,
                  guildId: isForumPost.guild_id,
                  roleSubscriptionData: mentions.role_subscription_data,
                };
                const obj22 = GuildRoleSubscriptionSystemMessageUtils;
                astToString10Result = astToString10(obj22.getRoleSubscriptionPurchaseSystemMessageContentMobile(obj12));
              }
              return astToString10Result;
            } else if (unpackModuleId.PURCHASE_NOTIFICATION === type) {
              let astToString9Result = null;
              if (!(mentions instanceof MessageRecord)) {
                const purchase_notification = mentions.purchase_notification;
                let product_name;
                if (purchase_notification != null) {
                  const guild_product_purchase = purchase_notification.guild_product_purchase;
                  if (guild_product_purchase != null) {
                    product_name = guild_product_purchase.product_name;
                  }
                }
                astToString9Result = null;
                if (null != product_name) {
                  const astToString9 = MarkupParser.astToString;
                  MarkupParser;
                  const obj13 = {
                    username: name,
                    productName: mentions.purchase_notification.guild_product_purchase.product_name,
                  };
                  const obj20 = GuildProductSystemMessageUtils;
                  astToString9Result = astToString9(obj20.getGuildProductPurchaseSystemMessageContentMobile(obj13));
                }
              }
              return astToString9Result;
            } else if (unpackModuleId.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION === type) {
              if (mentions instanceof MessageRecord) {
                return null;
              } else {
                const getMessageAuthor3 = useMessageAuthor.getMessageAuthor;
                useMessageAuthor;
                const obj17 = MessageRecordUtils;
                const messageAuthor3 = getMessageAuthor3(obj17.createMessageRecord(mentions));
                const astToString8 = MarkupParser.astToString;
                MarkupParser;
                const obj15 = { application: mentions.application, username: messageAuthor3.nick };
                const obj18 = ApplicationSubscriptionSystemMessageUtils;
                return astToString8(obj18.getApplicationSubscriptionSystemMessageASTContent(obj15));
              }
            } else if (unpackModuleId.PRIVATE_CHANNEL_INTEGRATION_ADDED === type) {
              let astToString7Result = null;
              if (!(mentions instanceof MessageRecord)) {
                const astToString7 = MarkupParser.astToString;
                MarkupParser;
                const obj19 = {
                  application: mentions.application,
                  username: getMessageAuthor2(obj16.createMessageRecord(mentions)).nick,
                };
                const getPrivateChannelIntegrationAddedSystemMessageASTContent =
                  PrivateChannelIntegrationSystemMessageUtils.getPrivateChannelIntegrationAddedSystemMessageASTContent;
                PrivateChannelIntegrationSystemMessageUtils;
                getMessageAuthor2 = useMessageAuthor.getMessageAuthor;
                useMessageAuthor;
                obj16 = MessageRecordUtils;
                astToString7Result = astToString7(getPrivateChannelIntegrationAddedSystemMessageASTContent(obj19));
              }
              return astToString7Result;
            } else if (unpackModuleId.PRIVATE_CHANNEL_INTEGRATION_REMOVED === type) {
              let astToString6Result = null;
              if (!(mentions instanceof MessageRecord)) {
                const astToString6 = MarkupParser.astToString;
                MarkupParser;
                const obj21 = {
                  application: mentions.application,
                  username: getMessageAuthor(obj14.createMessageRecord(mentions)).nick,
                };
                const getPrivateChannelIntegrationRemovedSystemMessageASTContent =
                  PrivateChannelIntegrationSystemMessageUtils.getPrivateChannelIntegrationRemovedSystemMessageASTContent;
                PrivateChannelIntegrationSystemMessageUtils;
                getMessageAuthor = useMessageAuthor.getMessageAuthor;
                useMessageAuthor;
                obj14 = MessageRecordUtils;
                astToString6Result = astToString6(getPrivateChannelIntegrationRemovedSystemMessageASTContent(obj21));
              }
              return astToString6Result;
            } else if (unpackModuleId.AUTO_MODERATION_ACTION === type) {
              const embeds = mentions.embeds;
              let someResult;
              if (embeds != null) {
                someResult = embeds.some((type) => type.type === constants.AUTO_MODERATION_NOTIFICATION);
              }
              if (someResult) {
                let value;
                const embeds1 = mentions.embeds;
                const found = embeds1.find((type) => type.type === constants.AUTO_MODERATION_NOTIFICATION);
                let found1;
                if (found != null) {
                  const fields = found.fields;
                  if (fields != null) {
                    found1 = fields.find((name) => {
                      const tmp =
                        "name" in name &&
                        name.name ===
                          require("AutomodNotificationEmbedKeys").AutomodNotificationEmbedKeys.NOTIFICATION_TYPE;
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
                let astToString5Result = null;
                if (null != channel) {
                  const guild = GuildStore.getGuild(channel.getGuildId());
                  astToString5Result = null;
                  if (null != guild) {
                    if (
                      AutomodNotificationEmbedTypeKeys.AutomodNotificationEmbedTypeKeys.ACTIVITY_ALERTS_ENABLED ===
                      value
                    ) {
                      const astToString5 = MarkupParser.astToString;
                      MarkupParser;
                      const intl6 = intl20.intl;
                      const obj23 = { guildName: guild.name };
                      astToString5Result = astToString5(intl6.formatToParts(intl20.t.wt3ZUM, obj23));
                    } else if (
                      AutomodNotificationEmbedTypeKeys.AutomodNotificationEmbedTypeKeys.INTERACTION_BLOCKED === value
                    ) {
                      const astToString4 = MarkupParser.astToString;
                      MarkupParser;
                      const intl5 = intl20.intl;
                      const obj24 = { guildName: guild.name };
                      astToString5Result = astToString4(intl5.formatToParts(intl20.t.AkqI0g, obj24));
                    } else {
                      const astToString3 = MarkupParser.astToString;
                      MarkupParser;
                      const intl4 = intl20.intl;
                      const obj26 = { guildName: guild.name };
                      astToString5Result = astToString3(intl4.formatToParts(intl20.t["a+lJKl"], obj26));
                    }
                  }
                }
                return astToString5Result;
              } else {
                return mentions.content;
              }
            } else if (unpackModuleId.GUILD_INCIDENT_ALERT_MODE_ENABLED === type) {
              const content2 = mentions.content;
              const channel1 = ChannelStore.getChannel(channel_id);
              let tmp33 = null;
              if (null != channel1) {
                const guild1 = GuildStore.getGuild(channel1.getGuildId());
                let astToString2Result = null;
                if (null != guild1) {
                  const astToString2 = MarkupParser.astToString;
                  MarkupParser;
                  const intl3 = intl20.intl;
                  const formatToParts = intl3.formatToParts;
                  const obj27 = { username: name, guildName: guild1.name, time: str2 };
                  str2 = "";
                  const iOuWPk = intl20.t.iOuWPk;
                  if ("" !== content2) {
                    const _Date = Date;
                    const self = this;
                    const self2 = this;
                    const date = new Date(content2);
                    str2 = date.toLocaleString(intl20.intl.currentLocale, { hour: "numeric", minute: "2-digit" });
                  }
                  astToString2Result = astToString2(formatToParts(iOuWPk, obj27));
                }
                tmp33 = astToString2Result;
              }
              return tmp33;
            } else if (unpackModuleId.GUILD_INCIDENT_ALERT_MODE_DISABLED === type) {
              const channel2 = ChannelStore.getChannel(channel_id);
              let tmp26 = null;
              if (null != channel2) {
                const guild2 = GuildStore.getGuild(channel2.getGuildId());
                let astToStringResult = null;
                if (null != guild2) {
                  const astToString = MarkupParser.astToString;
                  MarkupParser;
                  const intl2 = intl20.intl;
                  const obj28 = { username: name, guildName: guild2.name };
                  astToStringResult = astToString(intl2.formatToParts(intl20.t.axmbpm, obj28));
                }
                tmp26 = astToStringResult;
              }
              return tmp26;
            } else if (unpackModuleId.GUILD_SPACE_MESSAGE === type) {
              let leaderboard;
              const parseGuildSpaceLeaderboardMessageData = GuildLeaderboardTypes.parseGuildSpaceLeaderboardMessageData;
              GuildLeaderboardTypes;
              if (mentions instanceof MessageRecord) {
                const guildSpaceData = mentions.guildSpaceData;
                let leaderboard1;
                if (guildSpaceData != null) {
                  leaderboard1 = guildSpaceData.leaderboard;
                }
                leaderboard = leaderboard1;
              } else {
                const guild_space_data = mentions.guild_space_data;
                if (guild_space_data != null) {
                  leaderboard = guild_space_data.leaderboard;
                }
              }
              const result = parseGuildSpaceLeaderboardMessageData(leaderboard);
              let userId;
              const resolveGuildSpaceLeaderboardMessage =
                GuildLeaderboardSystemMessageCopy.resolveGuildSpaceLeaderboardMessage;
              const getUser = UserStore.getUser;
              GuildLeaderboardSystemMessageCopy;
              if (result != null) {
                userId = result.userId;
              }
              let secondaryUserId;
              const user2 = getUser(userId);
              const getUser2 = UserStore.getUser;
              if (result != null) {
                secondaryUserId = result.secondaryUserId;
              }
              const guildSpaceLeaderboardMessage = resolveGuildSpaceLeaderboardMessage(
                result,
                user2,
                getUser2(secondaryUserId),
              );
              if (null == guildSpaceLeaderboardMessage) {
                return mentions.content;
              } else {
                let content;
                const guildId = isForumPost.getGuildId();
                const obj29 = {
                  username: tmp7Result5.getName(guildId, channel_id, guildSpaceLeaderboardMessage.subject),
                  previousUsername: str,
                };
                const getLeaderboardSystemMessage = GuildLeaderboardSystemMessageCopy.getLeaderboardSystemMessage;
                const data = guildSpaceLeaderboardMessage.data;
                GuildLeaderboardSystemMessageCopy;
                str = "";
                tmp7Result5 = NicknameUtilsDefault;
                if (null != guildSpaceLeaderboardMessage.previousLeader) {
                  const tmp7Result6 = NicknameUtilsDefault;
                  str = tmp7Result6.getName(guildId, channel_id, guildSpaceLeaderboardMessage.previousLeader);
                }
                const leaderboardSystemMessage = getLeaderboardSystemMessage(data, obj29);
                if (null == leaderboardSystemMessage) {
                  content = mentions.content;
                } else {
                  const intl = intl20.intl;
                  const formatToPlainString = intl.formatToPlainString;
                  const message = leaderboardSystemMessage.message;
                  const obj30 = {
                    usernameHook(arg0) {
                      return arg0;
                    },
                    previousUsernameHook(arg0) {
                      return arg0;
                    },
                  };
                  const merged = Object.assign(leaderboardSystemMessage.values);
                  content = formatToPlainString(message, obj30);
                }
                return content;
              }
            } else {
              return mentions.content;
            }
          }
        }
      }
      const channel3 = ChannelStore.getChannel(channel_id);
      if (null != channel3) {
        let astToString11Result;
        if (null != GuildStore.getGuild(channel3.getGuildId())) {
          const astToString11 = MarkupParser.astToString;
          MarkupParser;
          const intl9 = intl20.intl;
          const obj31 = { username: name, usernameOnClick };
          astToString11Result = astToString11(intl9.formatToParts(intl20.t.ihxM9x, obj31));
        }
        return astToString11Result;
      }
      const astToString12 = MarkupParser.astToString;
      MarkupParser;
      const intl10 = intl20.intl;
      const obj32 = { username: name, usernameOnClick };
      astToString11Result = astToString12(intl10.formatToParts(intl20.t.ihxM9x, obj32));
    }
  },
  getSystemMessageUserJoin(id) {
    const items = [
      intl20.t["0cuj7l"],
      intl20.t["MuW+CN"],
      intl20.t.osqpHX,
      intl20.t["5ToSh2"],
      intl20.t.JEB8ps,
      intl20.t.pkOV5T,
      intl20.t["kRb1J+"],
      intl20.t["EmKLY+"],
      intl20.t.rPtBnb,
      intl20.t["5B/ekS"],
      intl20.t.ESNC3Y,
      intl20.t.Iw6d8w,
      intl20.t["WecSZ/"],
    ];
    const obj = SnowflakeUtilsDefault;
    return items[obj.extractTimestamp(obj, id) % items.length];
  },
  getSystemMessageUserJoinMobile,
  getSystemMessageBotJoin(arg0) {
    let closure_0;
    let obj2;
    _require = arg0;
    let formatResult = null;
    if (null != closure_13[arg0]) {
      const intl = require("intl").intl;
      const obj = { learnOnClick: obj2 };
      obj2 = {
        onClick() {
          return window.open(closure_13[closure_0]);
        },
      };
      formatResult = intl.format(require("intl").t.xw1Ij0, obj);
    }
    return formatResult;
  },
};
let result = size.fileFinishedImporting("utils/SystemMessageUtils.tsx");

export default obj;
