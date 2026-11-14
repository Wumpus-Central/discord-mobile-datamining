// === Module 15551: CodedLinks ===

// Module 15551 (CodedLinks)
import GlobalUtils from "GlobalUtils" /* 1255 */;
import CodedLink from "CodedLink" /* 6055 */;
import ApplicationCodedLink from "ApplicationCodedLink" /* 8795 */;
import storefrontCodedLink from "storefrontCodedLink" /* 12434 */;
import conjureProjectLink from "conjureProjectLink" /* 12440 */;
import ExperimentEmbed from "ExperimentEmbed" /* 14104 */;
import createAppMessageEmbed from "createAppMessageEmbed" /* 14549 */;
import createActivityMessageEmbed from "createActivityMessageEmbed" /* 15552 */;
import InviteEmbed from "InviteEmbed" /* 15557 */;
import GuildScheduledEventEmbed from "GuildScheduledEventEmbed" /* 15563 */;
import EmbeddedActivityInviteEmbed from "EmbeddedActivityInviteEmbed" /* 15568 */;
import GuildTemplateEmbed from "GuildTemplateEmbed" /* 15571 */;
import BuildOverrideEmbed from "BuildOverrideEmbed" /* 15573 */;
import VoiceChannelLinkEmbed from "VoiceChannelLinkEmbed" /* 15575 */;
import createSocialLayerStorefrontMultiSkuEmbed from "createSocialLayerStorefrontMultiSkuEmbed" /* 15576 */;
import createSocialLayerStorefrontProductDetailsEmbed from "createSocialLayerStorefrontProductDetailsEmbed" /* 15579 */;
import QuestEmbed from "QuestEmbed" /* 15580 */;
import UserProfileEmbed from "UserProfileEmbed" /* 15582 */;
import createConjureProjectLinkEmbedDefault from "createConjureProjectLinkEmbed" /* 15584 */;
import GameOrganizationInviteEmbed from "GameOrganizationInviteEmbed" /* 15585 */;
import _slicedToArray from "module_32" /* 32 */;
import LurkingStore from "LurkingStore" /* 5239 */;
import GuildStore from "GuildStore" /* 5177 */;
import UserStore from "UserStore" /* 1388 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/CodedLinks.tsx");

export function createCodedLinkEmbeds(message, message2, channel, forcedTheme) {
  let guild_id = channel;
  const theme = forcedTheme;
  if (null != message.author) {
    if (0 !== message2.codedLinks.length) {
      let currentUser = UserStore.getCurrentUser();
      const codedLinks = message2.codedLinks;
      return codedLinks.map((item) => {
        ({ type, code, url } = item);
        if (obj.isApplicationCodedLink(type)) {
          if (null == guild_id) {
            return null;
          } else {
            if (tmpResult.isApplicationCodedLinkMobileSupported(type)) {
              const applicationCodedLinkData = ApplicationCodedLink.getApplicationCodedLinkData(type, code, url);
              if (null == applicationCodedLinkData) {
                return null;
              } else {
                const obj2 = { appId: applicationCodedLinkData.applicationId, channel: tmp46, message, theme };
                const appLinkGateResult = createAppMessageEmbed.getAppLinkGateResult(obj2);
                if ("unavailable" === appLinkGateResult.state) {
                  return null;
                } else if ("blocked" === appLinkGateResult.state) {
                  return appLinkGateResult.model;
                } else {
                  const app = appLinkGateResult.app;
                  const type2 = applicationCodedLinkData.type;
                  if (CodedLink.CodedLinkType.ACTIVITY_BOOKMARK === type2) {
                    const obj3 = { theme, embedUrl: url, message, app, params: applicationCodedLinkData.params };
                    return createActivityMessageEmbed.createActivityMessageEmbed(obj3);
                  } else {
                    if (CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE !== type2) {
                      if (CodedLink.CodedLinkType.APP_OAUTH2_LINK !== type2) {
                        return null;
                      }
                    }
                    const obj4 = { theme, embedUrl: url, message, app };
                    return createAppMessageEmbed.createAppMessageEmbed(obj4);
                  }
                }
                const tmpResult24 = createAppMessageEmbed;
              }
              const tmpResult23 = ApplicationCodedLink;
            } else {
              return null;
            }
            tmpResult = ApplicationCodedLink;
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
            let tmp38 = null != GuildStore.getGuild("943265993613008967");
            if (tmp38) {
              tmp38 = !LurkingStore.isLurking("943265993613008967");
            }
            isStaffResult = tmp38;
          }
          let buildOverrideEmbed = null;
          if (isStaffResult) {
            buildOverrideEmbed = BuildOverrideEmbed.createBuildOverrideEmbed(code, theme);
            const tmpResult30 = BuildOverrideEmbed;
          }
          return buildOverrideEmbed;
        } else if (CodedLink.CodedLinkType.EVENT === type) {
          return GuildScheduledEventEmbed.createGuildScheduledEventLinkEmbed(code, theme);
        } else if (CodedLink.CodedLinkType.CHANNEL_LINK === type) {
          return VoiceChannelLinkEmbed.createVoiceChannelLinkEmbed(code, theme);
        } else if (CodedLink.CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
          const obj5 = { theme, inviteCode: code };
          return EmbeddedActivityInviteEmbed.createEmbeddedActivityInviteEmbed(obj5);
        } else if (CodedLink.CodedLinkType.EXPERIMENT === type) {
          let experimentEmbed = null;
          if (tmpResult34.canSeeExperimentEmbeds()) {
            experimentEmbed = ExperimentEmbed.createExperimentEmbed(url, theme);
            const tmpResult35 = ExperimentEmbed;
          }
          return experimentEmbed;
        } else {
          if (CodedLink.CodedLinkType.GUILD_PRODUCT !== type) {
            if (CodedLink.CodedLinkType.SERVER_SHOP !== type) {
              if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                  if (CodedLink.CodedLinkType.QUESTS_EMBED === type) {
                    const obj6 = { theme, questId: code, currentUser };
                    return QuestEmbed.createQuestsEmbed(obj6);
                  } else {
                    if (CodedLink.CodedLinkType.COLLECTIBLES_SHOP !== type) {
                      if (CodedLink.CodedLinkType.GAME_PROFILE !== type) {
                        if (CodedLink.CodedLinkType.GAME_SERVER_SHARE !== type) {
                          if (CodedLink.CodedLinkType.USER_WISHLIST !== type) {
                            if (CodedLink.CodedLinkType.USER_PROFILE === type) {
                              guild_id = undefined;
                              if (guild_id != null) {
                                guild_id = guild_id.guild_id;
                              }
                              return UserProfileEmbed.createUserProfileEmbed(code, guild_id, theme);
                            } else if (CodedLink.CodedLinkType.CONJURE_PROJECT === type) {
                              const tmp8 = createConjureProjectLinkEmbedDefault;
                              const result = conjureProjectLink.conjureProjectLinkTicket(url);
                              let guild_id1;
                              if (guild_id != null) {
                                guild_id1 = tmp11.guild_id;
                              }
                              if (guild_id1 == null) {
                                guild_id1 = null;
                              }
                              const obj7 = { guildId: guild_id1, channelId: null };
                              let id;
                              if (guild_id != null) {
                                id = tmp11.id;
                              }
                              if (id == null) {
                                id = null;
                              }
                              obj7.channelId = id;
                              return tmp8(code, result, theme, obj7);
                            } else if (CodedLink.CodedLinkType.GAME_ORGANIZATION_INVITE === type) {
                              let gameOrganizationInviteEmbed = null;
                              if (tmpResult39.getLinkedGameOrgInvitesEnabled("mobile_coded_link_embed")) {
                                let id1;
                                if (currentUser != null) {
                                  id1 = currentUser.id;
                                }
                                gameOrganizationInviteEmbed = GameOrganizationInviteEmbed.createGameOrganizationInviteEmbed(code, theme, id1);
                                const tmpResult40 = GameOrganizationInviteEmbed;
                              }
                              return gameOrganizationInviteEmbed;
                            } else {
                              return GlobalUtils.assertNever(type);
                            }
                          }
                        }
                      }
                    }
                    return null;
                  }
                }
              }
              const result1 = storefrontCodedLink.parseStorefrontCodedLink(code);
              if (null == result1) {
                return null;
              } else if (result1.skuIds.length > 1) {
                const obj8 = { skuIds: result1.skuIds, guildOrApplication: null };
                if (type === CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
                  const obj9 = { type: "application", applicationId: result1.scopeId };
                  let obj10 = obj9;
                } else {
                  obj10 = { type: "guild", guildId: result1.scopeId };
                }
                obj8.guildOrApplication = obj10;
                return createSocialLayerStorefrontMultiSkuEmbed.createSocialLayerStorefrontMultiSkuEmbed(obj8);
              } else {
                const obj11 = { skuId: _slicedToArray(result1.skuIds, 1)[0], guildOrApplication: null, theme: null };
                if (type === CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
                  const obj12 = { type: "application", applicationId: result1.scopeId };
                  let obj13 = obj12;
                } else {
                  obj13 = { type: "guild", guildId: result1.scopeId };
                }
                obj11.guildOrApplication = obj13;
                obj11.theme = theme;
                return createSocialLayerStorefrontProductDetailsEmbed.createSocialLayerStorefrontProductDetailsEmbed(obj11);
              }
              const tmpResult42 = storefrontCodedLink;
            }
          }
          return null;
        }
        obj = ApplicationCodedLink;
      });
    }
  }
  return [];
}