// discord_app/utils/SystemMessageUtils.tsx
import SnowflakeUtilsDefault from "SnowflakeUtils.tsx";
import util from "../intl/index.native.tsx";
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
import _slicedToArray from "../../_runtime/metro/00032__.js";
import MessageRecord from "../records/MessageRecord.tsx";
import AuthenticationStore from "../stores/AuthenticationStore.tsx";
import ChannelStore from "../stores/ChannelStore.tsx";
import GuildStore from "../stores/GuildStore.tsx";
import RelationshipStore from "../stores/RelationshipStore.tsx";
import UserStore from "../stores/UserStore.tsx";

const require = globalThis.__r;

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
const Constants = fn(1085);
({ MessageEmbedTypes: c10, MessageTypes: closure_11, NOOP: closure_12 } = Constants);
let closure_13 = {
  "234395307759108106": "https://groovy.bot/commands",
  "365975655608745985": "https://www.pokecord.com/getting-started",
  "512412940897484800": "http://jameslantz.net/smilebot",
};
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
          const intl21 = util.intl;
          const obj3 = { username: name, usernameOnClick, otherUsername: null, otherUsernameOnClick: null };
          const obj74 = MarkupParser;
          obj3.otherUsername = NicknameUtilsDefault.getName(null, channel_id, null);
          obj3.otherUsernameOnClick = usernameOnClick;
          return obj74.astToString(intl21.formatToParts(util.t["7/Xl0S"], obj3));
        }
      } else if (constants.RECIPIENT_REMOVE === type) {
        if (null != null) {
          const author2 = mentions.author;
          if (null != author2) {
            if (author2.id !== null.id) {
              const intl20 = util.intl;
              const obj5 = { username: name, usernameOnClick, otherUsername: null, otherUsernameOnClick: null };
              const obj71 = MarkupParser;
              obj5.otherUsername = NicknameUtilsDefault.getName(null, channel_id, null);
              obj5.otherUsernameOnClick = usernameOnClick;
              let astToStringResult = obj71.astToString(intl20.formatToParts(util.t.QtZ0RD, obj5));
              const tmp6Result5 = NicknameUtilsDefault;
            }
            return astToStringResult;
          }
          const intl19 = util.intl;
          const obj6 = { username: name, usernameOnClick };
          astToStringResult = MarkupParser.astToString(intl19.formatToParts(util.t["Qn5+Lf"], obj6));
        }
      } else if (constants.CALL === type) {
        const call = mentions.call;
        let astToStringResult1;
        if (null != call) {
          const participants = call.participants;
          if (-1 === participants.indexOf(AuthenticationStore.getId())) {
            const intl18 = util.intl;
            const obj7 = { username: name, usernameOnClick };
            astToStringResult1 = MarkupParser.astToString(intl18.formatToParts(util.t.DbgSA0, obj7));
          }
        }
        return astToStringResult1;
      } else if (constants.CHANNEL_NAME_CHANGE === type) {
        const intl17 = util.intl;
        const obj62 = MarkupParser;
        const t = util.t;
        const obj9 = { username: name, usernameOnClick, channelName: mentions.content };
        return obj62.astToString(intl17.formatToParts(isForumPost.isForumPost() ? t["qa0e/n"] : t.XCPMEG, obj9));
      } else if (constants.CHANNEL_ICON_CHANGE === type) {
        const intl16 = util.intl;
        const obj10 = { username: name, usernameOnClick };
        return MarkupParser.astToString(intl16.formatToParts(util.t.wypJZ0, obj10));
      } else if (constants.CHANNEL_PINNED_MESSAGE === type) {
        const intl15 = util.intl;
        const obj12 = { username: name, usernameOnClick };
        return MarkupParser.astToString(intl15.formatToParts(util.t["/M60j0"], obj12));
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
            const tmp6Result6 = NicknameUtilsDefault;
          }
          if (null == name1) {
            const intl14 = util.intl;
            const obj13 = { appName: name, appNameOnClick: usernameOnClick };
            let astToStringResult2 = MarkupParser.astToString(intl14.formatToParts(util.t.EAkHd2, obj13));
          } else {
            const intl13 = util.intl;
            const obj14 = { username: name1, usernameOnClick, appName: name, appNameOnClick: usernameOnClick };
            astToStringResult2 = MarkupParser.astToString(intl13.formatToParts(util.t["x6G/Rr"], obj14));
          }
        } else {
          const intl12 = util.intl;
          const obj15 = { username: name, usernameOnClick };
          return MarkupParser.astToString(intl12.formatToParts(getSystemMessageUserJoinMobile(mentions.id), obj15));
        }
      } else if (constants.GUILD_BOOST === type) {
        const intl11 = util.intl;
        const obj16 = { username: name, usernameOnClick };
        return MarkupParser.astToString(intl11.formatToParts(util.t.ihxM9x, obj16));
      } else {
        if (constants.GUILD_BOOST_TIER_1 !== type) {
          if (constants.GUILD_BOOST_TIER_2 !== type) {
            if (constants.GUILD_BOOST_TIER_3 !== type) {
              if (constants.GUILD_INVITE_REMINDER === type) {
                const intl8 = util.intl;
                return intl8.string(util.t.gxyKvr);
              } else if (constants.THREAD_STARTER_MESSAGE === type) {
                const intl7 = util.intl;
                const obj17 = {
                  username: name,
                  threadName: useChannelName.computeChannelName(isForumPost, UserStore, RelationshipStore),
                };
                return intl7.formatToPlainString(util.t["B8H+Cl"], obj17);
              } else if (constants.ROLE_SUBSCRIPTION_PURCHASE === type) {
                let astToStringResult3 = null;
                if (!(mentions instanceof MessageRecord)) {
                  const obj39 = MarkupParser;
                  const obj18 = {
                    username: name,
                    guildId: isForumPost.guild_id,
                    roleSubscriptionData: mentions.role_subscription_data,
                  };
                  astToStringResult3 = obj39.astToString(
                    GuildRoleSubscriptionSystemMessageUtils.getRoleSubscriptionPurchaseSystemMessageContentMobile(
                      obj18,
                    ),
                  );
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
                    const obj36 = MarkupParser;
                    const obj19 = {
                      username: name,
                      productName: mentions.purchase_notification.guild_product_purchase.product_name,
                    };
                    astToStringResult4 = obj36.astToString(
                      GuildProductSystemMessageUtils.getGuildProductPurchaseSystemMessageContentMobile(obj19),
                    );
                  }
                }
                return astToStringResult4;
              } else if (constants.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION === type) {
                if (mentions instanceof MessageRecord) {
                  return null;
                } else {
                  const obj31 = useMessageAuthor;
                  const messageAuthor = obj31.getMessageAuthor(MessageRecordUtils.createMessageRecord(mentions));
                  const obj33 = MarkupParser;
                  const obj20 = { application: mentions.application, username: messageAuthor.nick };
                  return obj33.astToString(
                    ApplicationSubscriptionSystemMessageUtils.getApplicationSubscriptionSystemMessageASTContent(obj20),
                  );
                }
              } else if (constants.PRIVATE_CHANNEL_INTEGRATION_ADDED === type) {
                let astToStringResult5 = null;
                if (!(mentions instanceof MessageRecord)) {
                  const obj26 = MarkupParser;
                  const obj23 = { application: mentions.application, username: null };
                  const obj27 = PrivateChannelIntegrationSystemMessageUtils;
                  const obj29 = useMessageAuthor;
                  obj23.username = obj29.getMessageAuthor(MessageRecordUtils.createMessageRecord(mentions)).nick;
                  astToStringResult5 = obj26.astToString(
                    obj27.getPrivateChannelIntegrationAddedSystemMessageASTContent(obj23),
                  );
                }
                return astToStringResult5;
              } else if (constants.PRIVATE_CHANNEL_INTEGRATION_REMOVED === type) {
                let astToStringResult6 = null;
                if (!(mentions instanceof MessageRecord)) {
                  const obj21 = MarkupParser;
                  const obj28 = { application: mentions.application, username: null };
                  const obj22 = PrivateChannelIntegrationSystemMessageUtils;
                  const obj24 = useMessageAuthor;
                  obj28.username = obj24.getMessageAuthor(MessageRecordUtils.createMessageRecord(mentions)).nick;
                  astToStringResult6 = obj21.astToString(
                    obj22.getPrivateChannelIntegrationRemovedSystemMessageASTContent(obj28),
                  );
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
                  let astToStringResult7 = null;
                  if (null != channel) {
                    guild = GuildStore.getGuild(channel.getGuildId());
                    astToStringResult7 = null;
                    if (null != guild) {
                      if (
                        AutomodNotificationEmbedTypeKeys.AutomodNotificationEmbedTypeKeys.ACTIVITY_ALERTS_ENABLED ===
                        value
                      ) {
                        const intl6 = util.intl;
                        const obj35 = { guildName: guild.name };
                        astToStringResult7 = MarkupParser.astToString(intl6.formatToParts(util.t.wt3ZUM, obj35));
                        const tmp45Result = MarkupParser;
                      } else if (
                        AutomodNotificationEmbedTypeKeys.AutomodNotificationEmbedTypeKeys.INTERACTION_BLOCKED === value
                      ) {
                        const intl5 = util.intl;
                        const obj38 = { guildName: guild.name };
                        astToStringResult7 = MarkupParser.astToString(intl5.formatToParts(util.t.AkqI0g, obj38));
                        const tmp45Result3 = MarkupParser;
                      } else {
                        const intl4 = util.intl;
                        const obj41 = { guildName: guild.name };
                        astToStringResult7 = MarkupParser.astToString(intl4.formatToParts(util.t["a+lJKl"], obj41));
                        const tmp45Result4 = MarkupParser;
                      }
                    }
                  }
                  return astToStringResult7;
                } else {
                  return mentions.content;
                }
              } else if (constants.GUILD_INCIDENT_ALERT_MODE_ENABLED === type) {
                const content2 = mentions.content;
                const channel1 = ChannelStore.getChannel(channel_id);
                let tmp28 = null;
                if (null != channel1) {
                  const guild1 = GuildStore.getGuild(channel1.getGuildId());
                  let astToStringResult8 = null;
                  if (null != guild1) {
                    const intl3 = util.intl;
                    const obj42 = { username: name, guildName: guild1.name, time: null };
                    let str2 = "";
                    if ("" !== content2) {
                      const _Date = Date;
                      const date = new Date(content2);
                      str2 = date.toLocaleString(util.intl.currentLocale, { hour: "numeric", minute: "2-digit" });
                    }
                    obj42.time = str2;
                    astToStringResult8 = MarkupParser.astToString(intl3.formatToParts(util.t.iOuWPk, obj42));
                  }
                  tmp28 = astToStringResult8;
                }
                return tmp28;
              } else if (constants.GUILD_INCIDENT_ALERT_MODE_DISABLED === type) {
                const channel2 = ChannelStore.getChannel(channel_id);
                let tmp22 = null;
                if (null != channel2) {
                  const guild2 = GuildStore.getGuild(channel2.getGuildId());
                  let astToStringResult9 = null;
                  if (null != guild2) {
                    const intl2 = util.intl;
                    const obj44 = { username: name, guildName: guild2.name };
                    astToStringResult9 = MarkupParser.astToString(intl2.formatToParts(util.t.axmbpm, obj44));
                  }
                  tmp22 = astToStringResult9;
                }
                return tmp22;
              } else if (constants.GUILD_SPACE_MESSAGE === type) {
                if (mentions instanceof MessageRecord) {
                  const guildSpaceData = mentions.guildSpaceData;
                  let leaderboard1;
                  if (guildSpaceData != null) {
                    leaderboard1 = guildSpaceData.leaderboard;
                  }
                  let leaderboard = leaderboard1;
                } else {
                  const guild_space_data = mentions.guild_space_data;
                  if (guild_space_data != null) {
                    leaderboard = guild_space_data.leaderboard;
                  }
                }
                const result = GuildLeaderboardTypes.parseGuildSpaceLeaderboardMessageData(leaderboard);
                let userId;
                if (result != null) {
                  userId = result.userId;
                }
                let secondaryUserId;
                const user = UserStore.getUser(userId);
                if (result != null) {
                  secondaryUserId = result.secondaryUserId;
                }
                const guildSpaceLeaderboardMessage =
                  GuildLeaderboardSystemMessageCopy.resolveGuildSpaceLeaderboardMessage(
                    result,
                    user,
                    UserStore.getUser(secondaryUserId),
                  );
                if (null == guildSpaceLeaderboardMessage) {
                  return mentions.content;
                } else {
                  const guildId = isForumPost.getGuildId();
                  const obj46 = { username: null, previousUsername: null };
                  const tmp10Result2 = GuildLeaderboardSystemMessageCopy;
                  obj46.username = NicknameUtilsDefault.getName(
                    guildId,
                    channel_id,
                    guildSpaceLeaderboardMessage.subject,
                  );
                  let str = "";
                  if (null != guildSpaceLeaderboardMessage.previousLeader) {
                    str = NicknameUtilsDefault.getName(
                      guildId,
                      channel_id,
                      guildSpaceLeaderboardMessage.previousLeader,
                    );
                    const tmp6Result8 = NicknameUtilsDefault;
                  }
                  obj46.previousUsername = str;
                  const leaderboardSystemMessage = tmp10Result2.getLeaderboardSystemMessage(
                    guildSpaceLeaderboardMessage.data,
                    obj46,
                  );
                  if (null == leaderboardSystemMessage) {
                    let content = mentions.content;
                  } else {
                    const intl = util.intl;
                    const obj48 = {};
                    const merged = Object.assign(leaderboardSystemMessage.values);
                    obj48.usernameHook = function usernameHook(arg0) {
                      return arg0;
                    };
                    obj48.previousUsernameHook = function previousUsernameHook(arg0) {
                      return arg0;
                    };
                    content = intl.formatToPlainString(leaderboardSystemMessage.message, obj48);
                  }
                  return content;
                }
                const tmp10Result = GuildLeaderboardSystemMessageCopy;
              } else {
                return mentions.content;
              }
            }
          }
        }
        const channel3 = ChannelStore.getChannel(channel_id);
        if (null != channel3) {
          if (null != GuildStore.getGuild(channel3.getGuildId())) {
            const intl9 = util.intl;
            const obj50 = { username: name, usernameOnClick };
            let astToStringResult10 = MarkupParser.astToString(intl9.formatToParts(util.t.ihxM9x, obj50));
          }
          return astToStringResult10;
        }
        const intl10 = util.intl;
        const obj52 = { username: name, usernameOnClick };
        astToStringResult10 = MarkupParser.astToString(intl10.formatToParts(util.t.ihxM9x, obj52));
      }
    } else if (typeof first === "object") {
      first = UserStore.getUser(first.id);
      if (first == null) {
        first = null;
      }
    } else if (typeof first === "string") {
      let user1 = UserStore.getUser(first);
      if (user1 == null) {
        user1 = null;
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
      const obj = { learnOnClick: null };
      const obj2 = {
        onClick() {
          return window.open(closure_13[closure_0]);
        },
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
  },
};
