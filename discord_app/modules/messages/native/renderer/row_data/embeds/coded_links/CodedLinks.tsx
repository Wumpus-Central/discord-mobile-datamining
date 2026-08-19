// === Module 12757: createCodedLinkEmbeds ===

// Module 12757 (createCodedLinkEmbeds)
import _slicedToArray from "_slicedToArray" /* 32 */;
import initialize from "initialize" /* 4022 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/CodedLinks.tsx");

export const createCodedLinkEmbeds = function createCodedLinkEmbeds(message, message2, channel, forcedTheme) {
  closure_0 = message;
  closure_1 = channel;
  closure_2 = forcedTheme;
  if (null != message.author) {
    if (0 !== message2.codedLinks.length) {
      const currentUser2 = currentUser.getCurrentUser();
      const codedLinks = message2.codedLinks;
      return codedLinks.map((item, index) => {
        ({ type, code, url } = item);
        let obj = message(table[4]);
        if (obj.isApplicationCodedLink(type)) {
          if (null == table) {
            return null;
          } else {
            let tmpResult = message(table[4]);
            if (tmpResult.isApplicationCodedLinkMobileSupported(type)) {
              tmpResult = message(table[4]);
              const applicationCodedLinkData = tmpResult.getApplicationCodedLinkData(type, code, url);
              if (null == applicationCodedLinkData) {
                return null;
              } else {
                obj = { appId: null, channel: null, message: null, theme: null };
                obj[0] = applicationCodedLinkData.applicationId;
                obj[1] = tmp35;
                obj[2] = message;
                obj[3] = callback;
                const appLinkGateResult = message(table[5]).getAppLinkGateResult(obj);
                if ("unavailable" === appLinkGateResult.state) {
                  return null;
                } else if ("blocked" === appLinkGateResult.state) {
                  return appLinkGateResult.model;
                } else {
                  const app = appLinkGateResult.app;
                  const type2 = applicationCodedLinkData.type;
                  if (message(table[6]).CodedLinkType.ACTIVITY_BOOKMARK === type2) {
                    obj = { theme: null, embedUrl: null, message: null, app: null, params: null };
                    obj[0] = callback;
                    obj[1] = url;
                    obj[2] = message;
                    obj[3] = app;
                    obj[4] = applicationCodedLinkData.params;
                    return message(table[7]).createActivityMessageEmbed(obj);
                  } else {
                    if (message(table[6]).CodedLinkType.APP_DIRECTORY_PROFILE !== type2) {
                      if (message(table[6]).CodedLinkType.APP_OAUTH2_LINK !== type2) {
                        return null;
                      }
                    }
                    obj1 = { theme: null, embedUrl: null, message: null, app: null };
                    obj1[0] = callback;
                    obj1[1] = url;
                    obj1[2] = message;
                    obj1[3] = app;
                    return message(table[5]).createAppMessageEmbed(obj1);
                  }
                }
                const tmpResult1 = message(table[5]);
              }
            } else {
              return null;
            }
          }
        } else if (message(table[6]).CodedLinkType.INVITE === type) {
          return message(table[8]).createInviteEmbed(message, code, callback);
        } else if (message(table[6]).CodedLinkType.TEMPLATE === type) {
          return message(table[9]).createGuildTemplateEmbed(code, callback);
        } else if (message(table[6]).CodedLinkType.BUILD_OVERRIDE === type) {
          return message(table[10]).createBuildOverrideEmbed(code, callback);
        } else if (message(table[6]).CodedLinkType.MANUAL_BUILD_OVERRIDE === type) {
          const currentUser = closure_1_5.getCurrentUser();
          let isStaffResult;
          if (currentUser != null) {
            isStaffResult = currentUser.isStaff();
          }
          if (!isStaffResult) {
            const currentUser1 = closure_1_5.getCurrentUser();
            let isStaffPersonalResult;
            if (currentUser1 != null) {
              isStaffPersonalResult = currentUser1.isStaffPersonal();
            }
            isStaffResult = isStaffPersonalResult;
          }
          if (!isStaffResult) {
            let tmp27 = null != closure_1_4.getGuild("943265993613008967");
            if (tmp27) {
              tmp27 = !lurking.isLurking("943265993613008967");
            }
            isStaffResult = tmp27;
          }
          let buildOverrideEmbed = null;
          if (isStaffResult) {
            buildOverrideEmbed = message(table[10]).createBuildOverrideEmbed(code, callback);
            const tmpResult7 = message(table[10]);
          }
          return buildOverrideEmbed;
        } else if (message(table[6]).CodedLinkType.EVENT === type) {
          return message(table[11]).createGuildScheduledEventLinkEmbed(code, callback);
        } else if (message(table[6]).CodedLinkType.CHANNEL_LINK === type) {
          return message(table[12]).createVoiceChannelLinkEmbed(code, callback);
        } else if (message(table[6]).CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
          const obj2 = { theme: null, inviteCode: null };
          obj2[0] = callback;
          obj2[1] = code;
          return message(table[13]).createEmbeddedActivityInviteEmbed(obj2);
        } else if (message(table[6]).CodedLinkType.EXPERIMENT === type) {
          let experimentEmbed = null;
          if (tmpResult11.canSeeExperimentEmbeds()) {
            experimentEmbed = message(table[15]).createExperimentEmbed(url, callback);
            const tmpResult12 = message(table[15]);
          }
          return experimentEmbed;
        } else {
          if (message(table[6]).CodedLinkType.GUILD_PRODUCT !== type) {
            if (message(table[6]).CodedLinkType.SERVER_SHOP !== type) {
              if (message(table[6]).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                if (message(table[6]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                  if (message(table[6]).CodedLinkType.QUESTS_EMBED === type) {
                    const obj3 = { theme: null, questId: null, currentUser: null };
                    obj3[0] = callback;
                    obj3[1] = code;
                    obj3[2] = lurking;
                    return message(table[18]).createQuestsEmbed(obj3);
                  } else {
                    if (message(table[6]).CodedLinkType.COLLECTIBLES_SHOP !== type) {
                      if (message(table[6]).CodedLinkType.GAME_PROFILE !== type) {
                        if (message(table[6]).CodedLinkType.GAME_SERVER_SHARE !== type) {
                          if (message(table[6]).CodedLinkType.USER_PROFILE !== type) {
                            return message(table[19]).assertNever(type);
                          }
                        }
                      }
                    }
                    return null;
                  }
                }
              }
              if (tmpResult15.getIsEligibleForSocialLayerStorefrontMobilePurchasing({ location: "create_coded_link_embeds" })) {
                if (type === message(table[6]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
                  [tmp14, tmp15] = callback(code.split("-"), 2);
                  const tmp13 = callback(code.split("-"), 2);
                  const obj4 = { skuId: null, guildOrApplication: null, theme: null };
                  obj4[0] = tmp14;
                  const obj5 = { type: "application", applicationId: null };
                  obj5[1] = tmp15;
                  obj4[1] = obj5;
                  obj4[2] = callback;
                  return message(table[17]).createSocialLayerStorefrontProductDetailsEmbed(obj4);
                } else {
                  [tmp9, tmp10] = callback(code.split("-"), 2);
                  const tmp8 = callback(code.split("-"), 2);
                  const obj6 = { skuId: null, guildOrApplication: null, theme: null };
                  obj6[0] = tmp9;
                  const obj7 = { type: "guild", guildId: null };
                  obj7[1] = tmp10;
                  obj6[1] = obj7;
                  obj6[2] = callback;
                  return message(table[17]).createSocialLayerStorefrontProductDetailsEmbed(obj6);
                }
              } else {
                return null;
              }
              tmpResult15 = message(table[16]);
            }
          }
          return null;
        }
      });
    }
  }
  return [];
};