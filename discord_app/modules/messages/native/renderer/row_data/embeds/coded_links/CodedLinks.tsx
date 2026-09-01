// === Module 12872: createCodedLinkEmbeds ===

// Module 12872 (createCodedLinkEmbeds)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "initialize" /* 4122 */;
import closure_4 from "createGuildRecordFromRust" /* 1909 */;
import closure_5 from "mergeGuildAvatar" /* 1922 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/CodedLinks.tsx");

export const createCodedLinkEmbeds = function createCodedLinkEmbeds(message, message2, channel, arg3) {
  closure_0 = message;
  closure_1 = channel;
  closure_2 = arg3;
  if (null != message.author) {
    if (0 !== message2.codedLinks.length) {
      const currentUser2 = currentUser.getCurrentUser();
      const codedLinks = message2.codedLinks;
      return codedLinks.map((arg0) => {
        ({ type, code, url } = arg0);
        let obj = message(table[4]);
        if (obj.isApplicationCodedLink(type)) {
          if (null == table) {
            return null;
          } else {
            let tmpResult = tmp(tmp2[4]);
            if (tmpResult.isApplicationCodedLinkMobileSupported(type)) {
              tmpResult = tmp(tmp2[4]);
              const applicationCodedLinkData = tmpResult.getApplicationCodedLinkData(type, code, url);
              if (null == applicationCodedLinkData) {
                return null;
              } else {
                obj = { appId: null, channel: null, message: null, theme: null };
                obj[0] = applicationCodedLinkData.applicationId;
                obj[1] = tmp34;
                obj[2] = message;
                obj[3] = callback;
                const appLinkGateResult = tmp(tmp2[5]).getAppLinkGateResult(obj);
                if ("unavailable" === appLinkGateResult.state) {
                  return null;
                } else if ("blocked" === appLinkGateResult.state) {
                  return appLinkGateResult.model;
                } else {
                  const app = appLinkGateResult.app;
                  const type2 = applicationCodedLinkData.type;
                  if (tmp(tmp2[6]).CodedLinkType.ACTIVITY_BOOKMARK === type2) {
                    obj = { theme: null, embedUrl: null, message: null, app: null, params: null };
                    obj[0] = tmp38;
                    obj[1] = url;
                    obj[2] = tmp37;
                    obj[3] = app;
                    obj[4] = applicationCodedLinkData.params;
                    return tmp(tmp2[7]).createActivityMessageEmbed(obj);
                  } else {
                    if (tmp(tmp2[6]).CodedLinkType.APP_DIRECTORY_PROFILE !== type2) {
                      if (tmp(tmp2[6]).CodedLinkType.APP_OAUTH2_LINK !== type2) {
                        return null;
                      }
                    }
                    obj1 = { theme: null, embedUrl: null, message: null, app: null };
                    obj1[0] = tmp38;
                    obj1[1] = url;
                    obj1[2] = tmp37;
                    obj1[3] = app;
                    return tmp(tmp2[5]).createAppMessageEmbed(obj1);
                  }
                }
                const tmpResult1 = tmp(tmp2[5]);
              }
            } else {
              return null;
            }
          }
        } else if (tmp(tmp2[6]).CodedLinkType.INVITE === type) {
          return tmp(tmp2[8]).createInviteEmbed(message, code, callback);
        } else if (tmp(tmp2[6]).CodedLinkType.TEMPLATE === type) {
          return tmp(tmp2[9]).createGuildTemplateEmbed(code, callback);
        } else if (tmp(tmp2[6]).CodedLinkType.BUILD_OVERRIDE === type) {
          return tmp(tmp2[10]).createBuildOverrideEmbed(code, callback);
        } else if (tmp(tmp2[6]).CodedLinkType.MANUAL_BUILD_OVERRIDE === type) {
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
            let tmp26 = null != closure_1_4.getGuild("943265993613008967");
            if (tmp26) {
              tmp26 = !lurking.isLurking("943265993613008967");
            }
            isStaffResult = tmp26;
          }
          let buildOverrideEmbed = null;
          if (isStaffResult) {
            buildOverrideEmbed = tmp(tmp2[10]).createBuildOverrideEmbed(code, callback);
            const tmpResult7 = tmp(tmp2[10]);
          }
          return buildOverrideEmbed;
        } else if (tmp(tmp2[6]).CodedLinkType.EVENT === type) {
          return tmp(tmp2[11]).createGuildScheduledEventLinkEmbed(code, callback);
        } else if (tmp(tmp2[6]).CodedLinkType.CHANNEL_LINK === type) {
          return tmp(tmp2[12]).createVoiceChannelLinkEmbed(code, callback);
        } else if (tmp(tmp2[6]).CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
          const obj2 = { theme: null, inviteCode: null };
          obj2[0] = callback;
          obj2[1] = code;
          return tmp(tmp2[13]).createEmbeddedActivityInviteEmbed(obj2);
        } else if (tmp(tmp2[6]).CodedLinkType.EXPERIMENT === type) {
          let experimentEmbed = null;
          if (tmpResult11.canSeeExperimentEmbeds()) {
            experimentEmbed = tmp(tmp2[15]).createExperimentEmbed(url, callback);
            const tmpResult12 = tmp(tmp2[15]);
          }
          return experimentEmbed;
        } else {
          if (tmp(tmp2[6]).CodedLinkType.GUILD_PRODUCT !== type) {
            if (tmp(tmp2[6]).CodedLinkType.SERVER_SHOP !== type) {
              if (tmp(tmp2[6]).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                if (tmp(tmp2[6]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                  if (tmp(tmp2[6]).CodedLinkType.QUESTS_EMBED === type) {
                    const obj3 = { theme: null, questId: null, currentUser: null };
                    obj3[0] = callback;
                    obj3[1] = code;
                    obj3[2] = lurking;
                    return tmp(tmp2[17]).createQuestsEmbed(obj3);
                  } else {
                    if (tmp(tmp2[6]).CodedLinkType.COLLECTIBLES_SHOP !== type) {
                      if (tmp(tmp2[6]).CodedLinkType.GAME_PROFILE !== type) {
                        if (tmp(tmp2[6]).CodedLinkType.GAME_SERVER_SHARE !== type) {
                          if (tmp(tmp2[6]).CodedLinkType.USER_PROFILE !== type) {
                            return tmp(tmp2[18]).assertNever(type);
                          }
                        }
                      }
                    }
                    return null;
                  }
                }
              }
              if (type === tmp(tmp2[6]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
                [tmp13, tmp14] = callback(code.split("-"), 2);
                const tmp12 = callback(code.split("-"), 2);
                const obj4 = { skuId: null, guildOrApplication: null, theme: null };
                obj4[0] = tmp13;
                const obj5 = { type: "application", applicationId: null };
                obj5[1] = tmp14;
                obj4[1] = obj5;
                obj4[2] = callback;
                return tmp(tmp2[16]).createSocialLayerStorefrontProductDetailsEmbed(obj4);
              } else {
                [tmp8, tmp9] = callback(code.split("-"), 2);
                const tmp7 = callback(code.split("-"), 2);
                const obj6 = { skuId: null, guildOrApplication: null, theme: null };
                obj6[0] = tmp8;
                const obj7 = { type: "guild", guildId: null };
                obj7[1] = tmp9;
                obj6[1] = obj7;
                obj6[2] = callback;
                return tmp(tmp2[16]).createSocialLayerStorefrontProductDetailsEmbed(obj6);
              }
            }
          }
          return null;
        }
      });
    }
  }
  return [];
};