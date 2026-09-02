// === Module 7904: getSystemMessageUserJoinMobile ===

// Module 7904 (getSystemMessageUserJoinMobile)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import getNicknameDefault from "getNickname" /* 4673 */;
import computeChannelName from "computeChannelName" /* 4674 */;
import createMinimalMessageRecord from "createMinimalMessageRecord" /* 4737 */;
import useNullableMessageAuthor from "useNullableMessageAuthor" /* 4746 */;
import reactParserFor from "reactParserFor" /* 7905 */;
import AutomodNotificationEmbedTypeKeys from "AutomodNotificationEmbedTypeKeys" /* 7909 */;
import identityHook from "identityHook" /* 7910 */;
import getGuildProductPurchaseSystemMessageContentMobile from "getGuildProductPurchaseSystemMessageContentMobile" /* 7912 */;
import getApplicationSubscriptionSystemMessageASTContent from "getApplicationSubscriptionSystemMessageASTContent" /* 7913 */;
import getPrivateChannelIntegrationAddedSystemMessageContent from "getPrivateChannelIntegrationAddedSystemMessageContent" /* 7914 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "hasFlag" /* 4131 */;
import closure_5 from "fetchFingerprint" /* 1215 */;
import closure_6 from "ensureGuildLoaded" /* 1386 */;
import closure_7 from "createGuildRecordFromRust" /* 1908 */;
import closure_8 from "markAllUserIdListsStale" /* 4130 */;
import closure_9 from "mergeGuildAvatar" /* 1921 */;
import ME from "ME" /* 673 */;

require = arg1;
function getSystemMessageUserJoinMobile(id) {
  const items = [getSystemLocale.t.Jm6e0x, getSystemLocale.t.MGRnRT, getSystemLocale.t.EXOEGh, getSystemLocale.t["5uCTFN"], getSystemLocale.t.rl45Qo, getSystemLocale.t.Bh9zpQ, getSystemLocale.t.RdEy1J, getSystemLocale.t.qcdp00, getSystemLocale.t.F7w2Ru, getSystemLocale.t.gSyOgK, getSystemLocale.t.uYgqv7, getSystemLocale.t["b/1SBX"], getSystemLocale.t.LhebZF];
  const obj = DISCORD_EPOCHDefault;
  return items[obj.extractTimestamp(obj, id) % items.length];
}
({ MessageEmbedTypes: c10, MessageTypes: unpackModuleId, NOOP: closure_12 } = ME);
let closure_13 = { "234395307759108106": "https://groovy.bot/commands", "365975655608745985": "https://www.pokecord.com/getting-started", "512412940897484800": "http://jameslantz.net/smilebot" };
const result = require("set").fileFinishedImporting("utils/SystemMessageUtils.tsx");

export default {
  stringify(mentions, isForumPost) {
    mentions = mentions.mentions;
    if (mentions == null) {
      mentions = [];
    }
    let first = callback(mentions, 1)[0];
    if (null == first) {
      const channel_id = mentions.channel_id;
      let obj = getNicknameDefault;
      const name = obj.getName(null, channel_id, mentions.author);
      const type = mentions.type;
      if (constants.RECIPIENT_ADD === type) {
        if (null != null) {
          const intl18 = getSystemLocale.intl;
          obj = { username: null, usernameOnClick: null, otherUsername: null, otherUsernameOnClick: null };
          obj[0] = name;
          obj[1] = closure_12;
          let tmp6Result = tmp6(4673);
          obj[2] = tmp6Result.getName(null, channel_id, null);
          obj[3] = closure_12;
          return reactParserFor.astToString(intl18.formatToParts(getSystemLocale.t["7/Xl0S"], obj));
        }
      } else if (tmp9.RECIPIENT_REMOVE === type) {
        if (null != null) {
          const author = mentions.author;
          if (null != author) {
            if (author.id !== null.id) {
              const intl17 = getSystemLocale.intl;
              obj = { username: null, usernameOnClick: null, otherUsername: null, otherUsernameOnClick: null };
              obj[0] = name;
              obj[1] = closure_12;
              tmp6Result = tmp6(4673);
              obj[2] = tmp6Result.getName(null, channel_id, null);
              obj[3] = closure_12;
              let astToStringResult = reactParserFor.astToString(intl17.formatToParts(getSystemLocale.t.QtZ0RD, obj));
              const obj58 = reactParserFor;
            }
            return astToStringResult;
          }
          const intl16 = getSystemLocale.intl;
          obj1 = { username: null, usernameOnClick: null };
          obj1[0] = name;
          obj1[1] = closure_12;
          astToStringResult = reactParserFor.astToString(intl16.formatToParts(getSystemLocale.t["Qn5+Lf"], obj1));
          const obj56 = reactParserFor;
        }
      } else if (tmp9.CALL === type) {
        const call = mentions.call;
        let astToStringResult1;
        if (null != call) {
          const participants = call.participants;
          if (-1 === participants.indexOf(id.getId())) {
            const intl15 = getSystemLocale.intl;
            let obj2 = { username: null, usernameOnClick: null };
            obj2[0] = name;
            obj2[1] = closure_12;
            astToStringResult1 = reactParserFor.astToString(intl15.formatToParts(getSystemLocale.t.DbgSA0, obj2));
            const obj54 = reactParserFor;
          }
        }
        return astToStringResult1;
      } else if (tmp9.CHANNEL_NAME_CHANGE === type) {
        const intl14 = getSystemLocale.intl;
        const obj52 = reactParserFor;
        const t = getSystemLocale.t;
        const obj3 = { username: null, usernameOnClick: null, channelName: null };
        obj3[0] = name;
        obj3[1] = closure_12;
        obj3[2] = mentions.content;
        return obj52.astToString(intl14.formatToParts(isForumPost.isForumPost() ? t["qa0e/n"] : t.XCPMEG, obj3));
      } else if (tmp9.CHANNEL_ICON_CHANGE === type) {
        const intl13 = getSystemLocale.intl;
        const obj4 = { username: null, usernameOnClick: null };
        obj4[0] = name;
        obj4[1] = closure_12;
        return reactParserFor.astToString(intl13.formatToParts(getSystemLocale.t.wypJZ0, obj4));
      } else if (tmp9.CHANNEL_PINNED_MESSAGE === type) {
        const intl12 = getSystemLocale.intl;
        let obj5 = { username: null, usernameOnClick: null };
        obj5[0] = name;
        obj5[1] = closure_12;
        return reactParserFor.astToString(intl12.formatToParts(getSystemLocale.t["/M60j0"], obj5));
      } else if (tmp9.USER_JOIN === type) {
        const intl11 = getSystemLocale.intl;
        const obj6 = { username: null, usernameOnClick: null };
        obj6[0] = name;
        obj6[1] = closure_12;
        return reactParserFor.astToString(intl11.formatToParts(getSystemMessageUserJoinMobile(mentions.id), obj6));
      } else if (tmp9.GUILD_BOOST === type) {
        const intl10 = getSystemLocale.intl;
        const obj7 = { username: null, usernameOnClick: null };
        obj7[0] = name;
        obj7[1] = closure_12;
        return reactParserFor.astToString(intl10.formatToParts(getSystemLocale.t.ihxM9x, obj7));
      } else {
        if (tmp9.GUILD_BOOST_TIER_1 !== type) {
          if (tmp9.GUILD_BOOST_TIER_2 !== type) {
            if (tmp9.GUILD_BOOST_TIER_3 !== type) {
              if (tmp9.GUILD_INVITE_REMINDER === type) {
                const intl7 = getSystemLocale.intl;
                return intl7.string(getSystemLocale.t.gxyKvr);
              } else if (tmp9.THREAD_STARTER_MESSAGE === type) {
                const intl6 = getSystemLocale.intl;
                const obj8 = { username: null, threadName: null };
                obj8[0] = name;
                obj8[1] = computeChannelName.computeChannelName(isForumPost, authStore, closure_8);
                return intl6.formatToPlainString(getSystemLocale.t["B8H+Cl"], obj8);
              } else if (tmp9.ROLE_SUBSCRIPTION_PURCHASE === type) {
                let astToStringResult2 = null;
                if (!(mentions instanceof closure_4)) {
                  const obj34 = reactParserFor;
                  const obj9 = { username: null, guildId: null, roleSubscriptionData: null };
                  obj9[0] = name;
                  obj9[1] = isForumPost.guild_id;
                  obj9[2] = mentions.role_subscription_data;
                  astToStringResult2 = obj34.astToString(identityHook.getRoleSubscriptionPurchaseSystemMessageContentMobile(obj9));
                  const obj35 = identityHook;
                }
                return astToStringResult2;
              } else if (tmp9.PURCHASE_NOTIFICATION === type) {
                let astToStringResult3 = null;
                if (!(mentions instanceof closure_4)) {
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
                    const obj31 = reactParserFor;
                    const obj10 = { username: null, productName: null };
                    obj10[0] = name;
                    obj10[1] = mentions.purchase_notification.guild_product_purchase.product_name;
                    astToStringResult3 = obj31.astToString(getGuildProductPurchaseSystemMessageContentMobile.getGuildProductPurchaseSystemMessageContentMobile(obj10));
                    const obj32 = getGuildProductPurchaseSystemMessageContentMobile;
                  }
                }
                return astToStringResult3;
              } else if (tmp9.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION === type) {
                if (mentions instanceof closure_4) {
                  return null;
                } else {
                  const obj26 = useNullableMessageAuthor;
                  const messageAuthor = obj26.getMessageAuthor(createMinimalMessageRecord.createMessageRecord(mentions));
                  const obj27 = createMinimalMessageRecord;
                  const obj28 = reactParserFor;
                  const obj11 = { application: null, username: null };
                  obj11[0] = mentions.application;
                  obj11[1] = messageAuthor.nick;
                  return obj28.astToString(getApplicationSubscriptionSystemMessageASTContent.getApplicationSubscriptionSystemMessageASTContent(obj11));
                }
              } else if (tmp9.PRIVATE_CHANNEL_INTEGRATION_ADDED === type) {
                let astToStringResult4 = null;
                if (!(mentions instanceof closure_4)) {
                  let obj20 = reactParserFor;
                  const obj12 = { application: null, username: null };
                  obj12[0] = mentions.application;
                  const obj22 = getPrivateChannelIntegrationAddedSystemMessageContent;
                  const obj24 = useNullableMessageAuthor;
                  obj12[1] = obj24.getMessageAuthor(createMinimalMessageRecord.createMessageRecord(mentions)).nick;
                  astToStringResult4 = obj20.astToString(obj22.getPrivateChannelIntegrationAddedSystemMessageASTContent(obj12));
                  const obj25 = createMinimalMessageRecord;
                }
                return astToStringResult4;
              } else if (tmp9.PRIVATE_CHANNEL_INTEGRATION_REMOVED === type) {
                let astToStringResult5 = null;
                if (!(mentions instanceof closure_4)) {
                  let obj15 = reactParserFor;
                  let obj16 = getPrivateChannelIntegrationAddedSystemMessageContent;
                  const obj13 = { application: null, username: null };
                  obj13[0] = mentions.application;
                  let obj18 = useNullableMessageAuthor;
                  let obj19 = createMinimalMessageRecord;
                  obj13[1] = obj18.getMessageAuthor(obj19.createMessageRecord(mentions)).nick;
                  astToStringResult5 = obj15.astToString(obj16.getPrivateChannelIntegrationRemovedSystemMessageASTContent(obj13));
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
                          tmp = name.name === callback(table[20]).AutomodNotificationEmbedKeys.NOTIFICATION_TYPE;
                        }
                        return tmp;
                      });
                    }
                  }
                  if (null != found1) {
                    if ("value" in found1) {
                      const value = found1.value;
                    }
                  }
                  const channel = store.getChannel(channel_id);
                  let astToStringResult6 = null;
                  if (null != channel) {
                    const guild = store2.getGuild(channel.getGuildId());
                    astToStringResult6 = null;
                    if (null != guild) {
                      if (AutomodNotificationEmbedTypeKeys.AutomodNotificationEmbedTypeKeys.ACTIVITY_ALERTS_ENABLED === value) {
                        let tmp34Result = tmp34(7905);
                        const intl5 = tmp34(1233).intl;
                        const obj14 = { guildName: null };
                        obj14[0] = guild.name;
                        astToStringResult6 = tmp34Result.astToString(intl5.formatToParts(tmp34(1233).t.wt3ZUM, obj14));
                      } else if (tmp34(7909).AutomodNotificationEmbedTypeKeys.INTERACTION_BLOCKED === value) {
                        tmp34Result = tmp34(7905);
                        const intl4 = tmp34(1233).intl;
                        obj15 = { guildName: null };
                        obj15[0] = guild.name;
                        astToStringResult6 = tmp34Result.astToString(intl4.formatToParts(tmp34(1233).t.AkqI0g, obj15));
                      } else {
                        const intl3 = tmp34(1233).intl;
                        obj16 = { guildName: null };
                        obj16[0] = guild.name;
                        astToStringResult6 = tmp34(7905).astToString(intl3.formatToParts(tmp34(1233).t["a+lJKl"], obj16));
                        const tmp34Result1 = tmp34(7905);
                      }
                    }
                  }
                  return astToStringResult6;
                } else {
                  return mentions.content;
                }
              } else if (tmp9.GUILD_INCIDENT_ALERT_MODE_ENABLED === type) {
                const content = mentions.content;
                const channel1 = store.getChannel(channel_id);
                let tmp17 = null;
                if (null != channel1) {
                  const guild1 = store2.getGuild(channel1.getGuildId());
                  let astToStringResult7 = null;
                  if (null != guild1) {
                    obj5 = reactParserFor;
                    const intl2 = getSystemLocale.intl;
                    const obj17 = { username: null, guildName: null, time: null };
                    obj17[0] = name;
                    obj17[1] = guild1.name;
                    let str = "";
                    if ("" !== content) {
                      const _Date = Date;
                      const date = new Date(content);
                      str = date.toLocaleString(tmp21(1233).intl.currentLocale, { hour: "numeric", minute: "2-digit" });
                    }
                    obj17[2] = str;
                    astToStringResult7 = obj5.astToString(intl2.formatToParts(getSystemLocale.t.iOuWPk, obj17));
                    tmp21 = require;
                  }
                  tmp17 = astToStringResult7;
                }
                return tmp17;
              } else if (tmp9.GUILD_INCIDENT_ALERT_MODE_DISABLED === type) {
                const channel2 = store.getChannel(channel_id);
                let tmp11 = null;
                if (null != channel2) {
                  const guild2 = store2.getGuild(channel2.getGuildId());
                  let astToStringResult8 = null;
                  if (null != guild2) {
                    obj2 = reactParserFor;
                    const intl = getSystemLocale.intl;
                    obj18 = { username: null, guildName: null };
                    obj18[0] = name;
                    obj18[1] = guild2.name;
                    astToStringResult8 = obj2.astToString(intl.formatToParts(getSystemLocale.t.axmbpm, obj18));
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
        const channel3 = store.getChannel(channel_id);
        if (null != channel3) {
          if (null != store2.getGuild(channel3.getGuildId())) {
            const intl8 = getSystemLocale.intl;
            obj19 = { username: null, usernameOnClick: null };
            obj19[0] = name;
            obj19[1] = closure_12;
            let astToStringResult9 = reactParserFor.astToString(intl8.formatToParts(getSystemLocale.t.ihxM9x, obj19));
            const obj40 = reactParserFor;
          }
          return astToStringResult9;
        }
        const intl9 = getSystemLocale.intl;
        obj20 = { username: null, usernameOnClick: null };
        obj20[0] = name;
        obj20[1] = closure_12;
        astToStringResult9 = reactParserFor.astToString(intl9.formatToParts(getSystemLocale.t.ihxM9x, obj20));
        const obj42 = reactParserFor;
      }
    } else if (typeof first === "object") {
      first = authStore.getUser(first.id);
      if (first == null) {
        first = null;
      }
      let tmp3 = first;
    } else {
      tmp3 = null;
      if (typeof first === "string") {
        let user = authStore.getUser(first);
        if (user == null) {
          user = null;
        }
        tmp3 = user;
      }
    }
  },
  getSystemMessageUserJoin(id) {
    const items = [getSystemLocale.t["0cuj7l"], getSystemLocale.t["MuW+CN"], getSystemLocale.t.osqpHX, getSystemLocale.t["5ToSh2"], getSystemLocale.t.JEB8ps, getSystemLocale.t.pkOV5T, getSystemLocale.t["kRb1J+"], getSystemLocale.t["EmKLY+"], getSystemLocale.t.rPtBnb, getSystemLocale.t["5B/ekS"], getSystemLocale.t.ESNC3Y, getSystemLocale.t.Iw6d8w, getSystemLocale.t["WecSZ/"]];
    const obj = DISCORD_EPOCHDefault;
    return items[obj.extractTimestamp(obj, id) % items.length];
  },
  getSystemMessageUserJoinMobile,
  getSystemMessageBotJoin(arg0) {
    const _require = arg0;
    let formatResult = null;
    if (null != table[arg0]) {
      const intl = _require(1233).intl;
      let obj = { learnOnClick: null };
      obj = { onClick: null };
      obj[0] = function onClick() {
        return window.open(closure_1_13[closure_0]);
      };
      obj[0] = obj;
      formatResult = intl.format(_require(1233).t.xw1Ij0, obj);
    }
    return formatResult;
  }
};