import _slicedToArray from "_slicedToArray";
import hasFlag from "hasFlag";
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";

let c10;
let closure_12;
let unpackModuleId;
const require = arg1;
function getSystemMessageUserJoinMobile(id) {
  const items = [require(1236) /* getSystemLocale */.t.Jm6e0x, require(1236) /* getSystemLocale */.t.MGRnRT, require(1236) /* getSystemLocale */.t.EXOEGh, require(1236) /* getSystemLocale */.t["5uCTFN"], require(1236) /* getSystemLocale */.t.rl45Qo, require(1236) /* getSystemLocale */.t.Bh9zpQ, require(1236) /* getSystemLocale */.t.RdEy1J, require(1236) /* getSystemLocale */.t.qcdp00, require(1236) /* getSystemLocale */.t.F7w2Ru, require(1236) /* getSystemLocale */.t.gSyOgK, require(1236) /* getSystemLocale */.t.uYgqv7, require(1236) /* getSystemLocale */.t["b/1SBX"], require(1236) /* getSystemLocale */.t.LhebZF];
  const obj = importDefault(11);
  return items[obj.extractTimestamp(obj, id) % items.length];
}
({ MessageEmbedTypes: c10, MessageTypes: unpackModuleId, NOOP: closure_12 } = ME);
let closure_13 = { "234395307759108106": "https://groovy.bot/commands", "365975655608745985": "https://www.pokecord.com/getting-started", "512412940897484800": "http://jameslantz.net/smilebot" };
const result = require("fetchFingerprint").fileFinishedImporting("utils/SystemMessageUtils.tsx");

export default {
  stringify(mentions, isForumPost) {
    mentions = mentions.mentions;
    if (mentions == null) {
      mentions = [];
    }
    let first = callback(mentions, 1)[0];
    if (null == first) {
      const channel_id = mentions.channel_id;
      let obj = importDefault(4474);
      const name = obj.getName(null, channel_id, mentions.author);
      const type = mentions.type;
      if (constants.RECIPIENT_ADD === type) {
        if (null != null) {
          const intl18 = require(1236) /* getSystemLocale */.intl;
          obj = { username: null, usernameOnClick: null, otherUsername: null, otherUsernameOnClick: null };
          obj[0] = name;
          obj[1] = closure_12;
          let tmp6Result = tmp6(4474);
          obj[2] = tmp6Result.getName(null, channel_id, null);
          obj[3] = closure_12;
          return require(7904) /* reactParserFor */.astToString(intl18.formatToParts(require(1236) /* getSystemLocale */.t["7/Xl0S"], obj));
        }
      } else if (tmp9.RECIPIENT_REMOVE === type) {
        if (null != null) {
          const author = mentions.author;
          if (null != author) {
            if (author.id !== null.id) {
              const intl17 = require(1236) /* getSystemLocale */.intl;
              obj = { username: null, usernameOnClick: null, otherUsername: null, otherUsernameOnClick: null };
              obj[0] = name;
              obj[1] = closure_12;
              tmp6Result = tmp6(4474);
              obj[2] = tmp6Result.getName(null, channel_id, null);
              obj[3] = closure_12;
              let astToStringResult = require(7904) /* reactParserFor */.astToString(intl17.formatToParts(require(1236) /* getSystemLocale */.t.QtZ0RD, obj));
              const obj58 = require(7904) /* reactParserFor */;
            }
            return astToStringResult;
          }
          const intl16 = require(1236) /* getSystemLocale */.intl;
          const obj1 = { username: null, usernameOnClick: null };
          obj1[0] = name;
          obj1[1] = closure_12;
          astToStringResult = require(7904) /* reactParserFor */.astToString(intl16.formatToParts(require(1236) /* getSystemLocale */.t["Qn5+Lf"], obj1));
          const obj56 = require(7904) /* reactParserFor */;
        }
      } else if (tmp9.CALL === type) {
        const call = mentions.call;
        let astToStringResult1;
        if (null != call) {
          const participants = call.participants;
          if (-1 === participants.indexOf(id.getId())) {
            const intl15 = require(1236) /* getSystemLocale */.intl;
            let obj2 = { username: null, usernameOnClick: null };
            obj2[0] = name;
            obj2[1] = closure_12;
            astToStringResult1 = require(7904) /* reactParserFor */.astToString(intl15.formatToParts(require(1236) /* getSystemLocale */.t.DbgSA0, obj2));
            const obj54 = require(7904) /* reactParserFor */;
          }
        }
        return astToStringResult1;
      } else if (tmp9.CHANNEL_NAME_CHANGE === type) {
        const intl14 = require(1236) /* getSystemLocale */.intl;
        const obj52 = require(7904) /* reactParserFor */;
        const t = require(1236) /* getSystemLocale */.t;
        const obj3 = { username: null, usernameOnClick: null, channelName: null };
        obj3[0] = name;
        obj3[1] = closure_12;
        obj3[2] = mentions.content;
        return obj52.astToString(intl14.formatToParts(isForumPost.isForumPost() ? t["qa0e/n"] : t.XCPMEG, obj3));
      } else if (tmp9.CHANNEL_ICON_CHANGE === type) {
        const intl13 = require(1236) /* getSystemLocale */.intl;
        const obj4 = { username: null, usernameOnClick: null };
        obj4[0] = name;
        obj4[1] = closure_12;
        return require(7904) /* reactParserFor */.astToString(intl13.formatToParts(require(1236) /* getSystemLocale */.t.wypJZ0, obj4));
      } else if (tmp9.CHANNEL_PINNED_MESSAGE === type) {
        const intl12 = require(1236) /* getSystemLocale */.intl;
        let obj5 = { username: null, usernameOnClick: null };
        obj5[0] = name;
        obj5[1] = closure_12;
        return require(7904) /* reactParserFor */.astToString(intl12.formatToParts(require(1236) /* getSystemLocale */.t["/M60j0"], obj5));
      } else if (tmp9.USER_JOIN === type) {
        const intl11 = require(1236) /* getSystemLocale */.intl;
        const obj6 = { username: null, usernameOnClick: null };
        obj6[0] = name;
        obj6[1] = closure_12;
        return require(7904) /* reactParserFor */.astToString(intl11.formatToParts(getSystemMessageUserJoinMobile(mentions.id), obj6));
      } else if (tmp9.GUILD_BOOST === type) {
        const intl10 = require(1236) /* getSystemLocale */.intl;
        const obj7 = { username: null, usernameOnClick: null };
        obj7[0] = name;
        obj7[1] = closure_12;
        return require(7904) /* reactParserFor */.astToString(intl10.formatToParts(require(1236) /* getSystemLocale */.t.ihxM9x, obj7));
      } else {
        if (tmp9.GUILD_BOOST_TIER_1 !== type) {
          if (tmp9.GUILD_BOOST_TIER_2 !== type) {
            if (tmp9.GUILD_BOOST_TIER_3 !== type) {
              if (tmp9.GUILD_INVITE_REMINDER === type) {
                const intl7 = require(1236) /* getSystemLocale */.intl;
                return intl7.string(require(1236) /* getSystemLocale */.t.gxyKvr);
              } else if (tmp9.THREAD_STARTER_MESSAGE === type) {
                const intl6 = require(1236) /* getSystemLocale */.intl;
                const obj8 = { username: null, threadName: null };
                obj8[0] = name;
                obj8[1] = require(4475) /* computeChannelName */.computeChannelName(isForumPost, authStore, upsertRelationship);
                return intl6.formatToPlainString(require(1236) /* getSystemLocale */.t["B8H+Cl"], obj8);
              } else if (tmp9.ROLE_SUBSCRIPTION_PURCHASE === type) {
                let astToStringResult2 = null;
                if (!(mentions instanceof hasFlag)) {
                  const obj34 = require(7904) /* reactParserFor */;
                  const obj9 = { username: null, guildId: null, roleSubscriptionData: null };
                  obj9[0] = name;
                  obj9[1] = isForumPost.guild_id;
                  obj9[2] = mentions.role_subscription_data;
                  astToStringResult2 = obj34.astToString(require(7909) /* identityHook */.getRoleSubscriptionPurchaseSystemMessageContentMobile(obj9));
                  const obj35 = require(7909) /* identityHook */;
                }
                return astToStringResult2;
              } else if (tmp9.PURCHASE_NOTIFICATION === type) {
                let astToStringResult3 = null;
                if (!(mentions instanceof hasFlag)) {
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
                    const obj31 = require(7904) /* reactParserFor */;
                    const obj10 = { username: null, productName: null };
                    obj10[0] = name;
                    obj10[1] = mentions.purchase_notification.guild_product_purchase.product_name;
                    astToStringResult3 = obj31.astToString(require(7911) /* getGuildProductPurchaseSystemMessageContentMobile */.getGuildProductPurchaseSystemMessageContentMobile(obj10));
                    const obj32 = require(7911) /* getGuildProductPurchaseSystemMessageContentMobile */;
                  }
                }
                return astToStringResult3;
              } else if (tmp9.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION === type) {
                if (mentions instanceof hasFlag) {
                  return null;
                } else {
                  const obj26 = require(4513) /* useNullableMessageAuthor */;
                  const messageAuthor = obj26.getMessageAuthor(require(4504) /* createMinimalMessageRecord */.createMessageRecord(mentions));
                  const obj27 = require(4504) /* createMinimalMessageRecord */;
                  const obj28 = require(7904) /* reactParserFor */;
                  const obj11 = { application: null, username: null };
                  obj11[0] = mentions.application;
                  obj11[1] = messageAuthor.nick;
                  return obj28.astToString(require(7912) /* getApplicationSubscriptionSystemMessageASTContent */.getApplicationSubscriptionSystemMessageASTContent(obj11));
                }
              } else if (tmp9.PRIVATE_CHANNEL_INTEGRATION_ADDED === type) {
                let astToStringResult4 = null;
                if (!(mentions instanceof hasFlag)) {
                  let obj20 = require(7904) /* reactParserFor */;
                  const obj12 = { application: null, username: null };
                  obj12[0] = mentions.application;
                  const obj22 = require(7913) /* getPrivateChannelIntegrationAddedSystemMessageContent */;
                  const obj24 = require(4513) /* useNullableMessageAuthor */;
                  obj12[1] = obj24.getMessageAuthor(require(4504) /* createMinimalMessageRecord */.createMessageRecord(mentions)).nick;
                  astToStringResult4 = obj20.astToString(obj22.getPrivateChannelIntegrationAddedSystemMessageASTContent(obj12));
                  const obj25 = require(4504) /* createMinimalMessageRecord */;
                }
                return astToStringResult4;
              } else if (tmp9.PRIVATE_CHANNEL_INTEGRATION_REMOVED === type) {
                let astToStringResult5 = null;
                if (!(mentions instanceof hasFlag)) {
                  let obj15 = require(7904) /* reactParserFor */;
                  let obj16 = require(7913) /* getPrivateChannelIntegrationAddedSystemMessageContent */;
                  const obj13 = { application: null, username: null };
                  obj13[0] = mentions.application;
                  let obj18 = require(4513) /* useNullableMessageAuthor */;
                  let obj19 = require(4504) /* createMinimalMessageRecord */;
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
                      if (require(7908) /* AutomodNotificationEmbedTypeKeys */.AutomodNotificationEmbedTypeKeys.ACTIVITY_ALERTS_ENABLED === value) {
                        let tmp34Result = tmp34(7904);
                        const intl5 = tmp34(1236).intl;
                        const obj14 = { guildName: null };
                        obj14[0] = guild.name;
                        astToStringResult6 = tmp34Result.astToString(intl5.formatToParts(tmp34(1236).t.wt3ZUM, obj14));
                      } else if (tmp34(7908).AutomodNotificationEmbedTypeKeys.INTERACTION_BLOCKED === value) {
                        tmp34Result = tmp34(7904);
                        const intl4 = tmp34(1236).intl;
                        obj15 = { guildName: null };
                        obj15[0] = guild.name;
                        astToStringResult6 = tmp34Result.astToString(intl4.formatToParts(tmp34(1236).t.AkqI0g, obj15));
                      } else {
                        const intl3 = tmp34(1236).intl;
                        obj16 = { guildName: null };
                        obj16[0] = guild.name;
                        astToStringResult6 = tmp34(7904).astToString(intl3.formatToParts(tmp34(1236).t["a+lJKl"], obj16));
                        const tmp34Result1 = tmp34(7904);
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
                    obj5 = require(7904) /* reactParserFor */;
                    const intl2 = require(1236) /* getSystemLocale */.intl;
                    const obj17 = { username: null, guildName: null, time: null };
                    obj17[0] = name;
                    obj17[1] = guild1.name;
                    let str = "";
                    if ("" !== content) {
                      const _Date = Date;
                      const date = new Date(content);
                      str = date.toLocaleString(tmp21(1236).intl.currentLocale, { hour: "numeric", minute: "2-digit" });
                    }
                    obj17[2] = str;
                    astToStringResult7 = obj5.astToString(intl2.formatToParts(require(1236) /* getSystemLocale */.t.iOuWPk, obj17));
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
                    obj2 = require(7904) /* reactParserFor */;
                    const intl = require(1236) /* getSystemLocale */.intl;
                    obj18 = { username: null, guildName: null };
                    obj18[0] = name;
                    obj18[1] = guild2.name;
                    astToStringResult8 = obj2.astToString(intl.formatToParts(require(1236) /* getSystemLocale */.t.axmbpm, obj18));
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
            const intl8 = require(1236) /* getSystemLocale */.intl;
            obj19 = { username: null, usernameOnClick: null };
            obj19[0] = name;
            obj19[1] = closure_12;
            let astToStringResult9 = require(7904) /* reactParserFor */.astToString(intl8.formatToParts(require(1236) /* getSystemLocale */.t.ihxM9x, obj19));
            const obj40 = require(7904) /* reactParserFor */;
          }
          return astToStringResult9;
        }
        const intl9 = require(1236) /* getSystemLocale */.intl;
        obj20 = { username: null, usernameOnClick: null };
        obj20[0] = name;
        obj20[1] = closure_12;
        astToStringResult9 = require(7904) /* reactParserFor */.astToString(intl9.formatToParts(require(1236) /* getSystemLocale */.t.ihxM9x, obj20));
        const obj42 = require(7904) /* reactParserFor */;
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
    const items = [require(1236) /* getSystemLocale */.t["0cuj7l"], require(1236) /* getSystemLocale */.t["MuW+CN"], require(1236) /* getSystemLocale */.t.osqpHX, require(1236) /* getSystemLocale */.t["5ToSh2"], require(1236) /* getSystemLocale */.t.JEB8ps, require(1236) /* getSystemLocale */.t.pkOV5T, require(1236) /* getSystemLocale */.t["kRb1J+"], require(1236) /* getSystemLocale */.t["EmKLY+"], require(1236) /* getSystemLocale */.t.rPtBnb, require(1236) /* getSystemLocale */.t["5B/ekS"], require(1236) /* getSystemLocale */.t.ESNC3Y, require(1236) /* getSystemLocale */.t.Iw6d8w, require(1236) /* getSystemLocale */.t["WecSZ/"]];
    const obj = importDefault(11);
    return items[obj.extractTimestamp(obj, id) % items.length];
  },
  getSystemMessageUserJoinMobile,
  getSystemMessageBotJoin(arg0) {
    const _require = arg0;
    let formatResult = null;
    if (null != table[arg0]) {
      const intl = _require(1236).intl;
      let obj = { learnOnClick: null };
      obj = { onClick: null };
      obj[0] = function onClick() {
        return window.open(outer1_13[closure_0]);
      };
      obj[0] = obj;
      formatResult = intl.format(_require(1236).t.xw1Ij0, obj);
    }
    return formatResult;
  }
};