// === Module 13206: CodedLinks ===

// Module 13206 (CodedLinks)
import GlobalUtils from "GlobalUtils" /* 1369 */;
import CodedLink from "CodedLink" /* 4548 */;
import ApplicationCodedLink from "ApplicationCodedLink" /* 7690 */;
import createSocialLayerStorefrontProductDetailsEmbed from "createSocialLayerStorefrontProductDetailsEmbed" /* 11531 */;
import ExperimentEmbed from "ExperimentEmbed" /* 11807 */;
import createAppMessageEmbed from "createAppMessageEmbed" /* 11940 */;
import createActivityMessageEmbed from "createActivityMessageEmbed" /* 13207 */;
import InviteEmbed from "InviteEmbed" /* 13208 */;
import GuildScheduledEventEmbed from "GuildScheduledEventEmbed" /* 13213 */;
import EmbeddedActivityInviteEmbed from "EmbeddedActivityInviteEmbed" /* 13215 */;
import GuildTemplateEmbed from "GuildTemplateEmbed" /* 13218 */;
import BuildOverrideEmbed from "BuildOverrideEmbed" /* 13220 */;
import VoiceChannelLinkEmbed from "VoiceChannelLinkEmbed" /* 13222 */;
import QuestEmbed from "QuestEmbed" /* 13223 */;
import _slicedToArray from "module_32" /* 32 */;
import LurkingStore from "LurkingStore" /* 4200 */;
import GuildStore from "GuildStore" /* 1979 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/CodedLinks.tsx");

export const createCodedLinkEmbeds = function createCodedLinkEmbeds(message, message2, channel, forcedTheme) {
  closure_1 = channel;
  const theme = forcedTheme;
  if (null != message.author) {
    if (0 !== message2.codedLinks.length) {
      let currentUser = UserStore.getCurrentUser();
      const codedLinks = message2.codedLinks;
      return codedLinks.map((item) => {
        ({ type, code, url } = item);
        let obj = ApplicationCodedLink;
        if (obj.isApplicationCodedLink(type)) {
          if (null == closure_1) {
            return null;
          } else {
            let tmpResult = ApplicationCodedLink;
            if (tmpResult.isApplicationCodedLinkMobileSupported(type)) {
              tmpResult = ApplicationCodedLink;
              const applicationCodedLinkData = tmpResult.getApplicationCodedLinkData(type, code, url);
              if (null == applicationCodedLinkData) {
                return null;
              } else {
                obj = { appId: applicationCodedLinkData.applicationId, channel: tmp34, message, theme };
                const appLinkGateResult = createAppMessageEmbed.getAppLinkGateResult(obj);
                if ("unavailable" === appLinkGateResult.state) {
                  return null;
                } else if ("blocked" === appLinkGateResult.state) {
                  return appLinkGateResult.model;
                } else {
                  const app = appLinkGateResult.app;
                  const type2 = applicationCodedLinkData.type;
                  if (CodedLink.CodedLinkType.ACTIVITY_BOOKMARK === type2) {
                    obj = { theme, embedUrl: url, message, app, params: applicationCodedLinkData.params };
                    return createActivityMessageEmbed.createActivityMessageEmbed(obj);
                  } else {
                    if (CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE !== type2) {
                      if (CodedLink.CodedLinkType.APP_OAUTH2_LINK !== type2) {
                        return null;
                      }
                    }
                    const obj1 = { theme, embedUrl: url, message, app };
                    return createAppMessageEmbed.createAppMessageEmbed(obj1);
                  }
                }
                const tmpResult1 = createAppMessageEmbed;
              }
            } else {
              return null;
            }
          }
        } else if (CodedLink.CodedLinkType.INVITE === type) {
          return InviteEmbed.createInviteEmbed(message, code, theme);
        } else if (CodedLink.CodedLinkType.TEMPLATE === type) {
          return GuildTemplateEmbed.createGuildTemplateEmbed(code, theme);
        } else if (CodedLink.CodedLinkType.BUILD_OVERRIDE === type) {
          return BuildOverrideEmbed.createBuildOverrideEmbed(code, theme);
        } else if (CodedLink.CodedLinkType.MANUAL_BUILD_OVERRIDE === type) {
          currentUser = UserStore.getCurrentUser();
          let isStaffResult;
          if (currentUser != null) {
            isStaffResult = currentUser.isStaff();
          }
          if (!isStaffResult) {
            const currentUser1 = UserStore.getCurrentUser();
            let isStaffPersonalResult;
            if (currentUser1 != null) {
              isStaffPersonalResult = currentUser1.isStaffPersonal();
            }
            isStaffResult = isStaffPersonalResult;
          }
          if (!isStaffResult) {
            let tmp26 = null != GuildStore.getGuild("943265993613008967");
            if (tmp26) {
              tmp26 = !LurkingStore.isLurking("943265993613008967");
            }
            isStaffResult = tmp26;
          }
          let buildOverrideEmbed = null;
          if (isStaffResult) {
            buildOverrideEmbed = BuildOverrideEmbed.createBuildOverrideEmbed(code, theme);
            const tmpResult7 = BuildOverrideEmbed;
          }
          return buildOverrideEmbed;
        } else if (CodedLink.CodedLinkType.EVENT === type) {
          return GuildScheduledEventEmbed.createGuildScheduledEventLinkEmbed(code, theme);
        } else if (CodedLink.CodedLinkType.CHANNEL_LINK === type) {
          return VoiceChannelLinkEmbed.createVoiceChannelLinkEmbed(code, theme);
        } else if (CodedLink.CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
          const obj2 = { theme, inviteCode: code };
          return EmbeddedActivityInviteEmbed.createEmbeddedActivityInviteEmbed(obj2);
        } else if (CodedLink.CodedLinkType.EXPERIMENT === type) {
          let experimentEmbed = null;
          if (tmpResult11.canSeeExperimentEmbeds()) {
            experimentEmbed = ExperimentEmbed.createExperimentEmbed(url, theme);
            const tmpResult12 = ExperimentEmbed;
          }
          return experimentEmbed;
        } else {
          if (CodedLink.CodedLinkType.GUILD_PRODUCT !== type) {
            if (CodedLink.CodedLinkType.SERVER_SHOP !== type) {
              if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                  if (CodedLink.CodedLinkType.QUESTS_EMBED === type) {
                    const obj3 = { theme, questId: code, currentUser };
                    return QuestEmbed.createQuestsEmbed(obj3);
                  } else {
                    if (CodedLink.CodedLinkType.COLLECTIBLES_SHOP !== type) {
                      if (CodedLink.CodedLinkType.GAME_PROFILE !== type) {
                        if (CodedLink.CodedLinkType.GAME_SERVER_SHARE !== type) {
                          if (CodedLink.CodedLinkType.USER_PROFILE !== type) {
                            return GlobalUtils.assertNever(type);
                          }
                        }
                      }
                    }
                    return null;
                  }
                }
              }
              if (type === CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
                [tmp13, tmp14] = _slicedToArray(code.split("-"), 2);
                const tmp12 = _slicedToArray(code.split("-"), 2);
                const obj4 = { skuId: tmp13, guildOrApplication: null, theme: null };
                const obj5 = { type: "application", applicationId: tmp14 };
                obj4.guildOrApplication = obj5;
                obj4.theme = theme;
                return createSocialLayerStorefrontProductDetailsEmbed.createSocialLayerStorefrontProductDetailsEmbed(obj4);
              } else {
                [tmp8, tmp9] = _slicedToArray(code.split("-"), 2);
                const tmp7 = _slicedToArray(code.split("-"), 2);
                const obj6 = { skuId: tmp8, guildOrApplication: null, theme: null };
                const obj7 = { type: "guild", guildId: tmp9 };
                obj6.guildOrApplication = obj7;
                obj6.theme = theme;
                return createSocialLayerStorefrontProductDetailsEmbed.createSocialLayerStorefrontProductDetailsEmbed(obj6);
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