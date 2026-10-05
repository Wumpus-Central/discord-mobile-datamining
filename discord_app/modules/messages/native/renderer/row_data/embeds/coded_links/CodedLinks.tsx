// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/CodedLinks.tsx
import GlobalUtils from "../../../../../../../utils/GlobalUtils.tsx";
import CodedLink from "../../../../../../coded_links/CodedLink.tsx";
import ApplicationCodedLink from "../../../../../../coded_links/ApplicationCodedLink.tsx";
import useCodedLinksExperimentEmbeds from "../../../../../../experiments/client_override_hooks/useCodedLinksExperimentEmbeds.tsx";
import createSocialLayerStorefrontProductDetailsEmbed2 from "../../../../../../slayer_storefront/native/createSocialLayerStorefrontProductDetailsEmbed.tsx";
import storefrontCodedLink from "../../../../../../slayer_storefront/storefrontCodedLink.tsx";
import ExperimentEmbed from "ExperimentEmbed.tsx";
import createAppMessageEmbed from "../../../../../../applications/message_embed/native/createAppMessageEmbed.tsx";
import createActivityMessageEmbed from "../../../../../../applications/message_embed/native/createActivityMessageEmbed.tsx";
import InviteEmbed from "InviteEmbed.tsx";
import GuildScheduledEventEmbed from "GuildScheduledEventEmbed.tsx";
import EmbeddedActivityInviteEmbed from "EmbeddedActivityInviteEmbed.tsx";
import GuildTemplateEmbed from "GuildTemplateEmbed.tsx";
import BuildOverrideEmbed from "BuildOverrideEmbed.tsx";
import VoiceChannelLinkEmbed from "VoiceChannelLinkEmbed.tsx";
import QuestEmbed from "../../../../../../quests/native/QuestEmbed.native.tsx";
import LinkedGameOrgInvitesExperiment from "../../../../../../game_organization_invites/LinkedGameOrgInvitesExperiment.tsx";
import GameOrganizationInviteEmbed from "GameOrganizationInviteEmbed.tsx";
import _slicedToArray from "../../../../../../../../_runtime/metro/00032__slicedToArray.js";
import LurkingStore from "../../../../../../lurker_mode/LurkingStore.tsx";
import GuildStore from "../../../../../../../stores/GuildStore.tsx";
import UserStore from "../../../../../../../stores/UserStore.tsx";
import size from "../../../../../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/CodedLinks.tsx");

export const createCodedLinkEmbeds = function createCodedLinkEmbeds(message, message2, channel, forcedTheme) {
  let closure_1 = channel;
  const theme = forcedTheme;
  if (null != message.author) {
    if (0 !== message2.codedLinks.length) {
      let currentUser = UserStore.getCurrentUser();
      const codedLinks = message2.codedLinks;
      return codedLinks.map((item) => {
        let code;
        let obj9;
        let type;
        let url;
        ({ type, code, url } = item);
        const obj = ApplicationCodedLink;
        if (obj.isApplicationCodedLink(type)) {
          if (null == channel) {
            return null;
          } else {
            const tmpResult = ApplicationCodedLink;
            if (tmpResult.isApplicationCodedLinkMobileSupported(type)) {
              const tmpResult20 = ApplicationCodedLink;
              const applicationCodedLinkData = tmpResult20.getApplicationCodedLinkData(type, code, url);
              if (null == applicationCodedLinkData) {
                return null;
              } else {
                const applicationId = applicationCodedLinkData.applicationId;
                const obj2 = { appId: applicationId, channel: tmp29, message, theme };
                const tmpResult21 = createAppMessageEmbed;
                const appLinkGateResult = tmpResult21.getAppLinkGateResult(obj2);
                if ("unavailable" === appLinkGateResult.state) {
                  return null;
                } else if ("blocked" === appLinkGateResult.state) {
                  return appLinkGateResult.model;
                } else {
                  const app = appLinkGateResult.app;
                  const type2 = applicationCodedLinkData.type;
                  if (CodedLink.CodedLinkType.ACTIVITY_BOOKMARK === type2) {
                    const params = applicationCodedLinkData.params;
                    const obj3 = { theme, embedUrl: url, message, app, params };
                    const tmpResult22 = createActivityMessageEmbed;
                    return tmpResult22.createActivityMessageEmbed(obj3);
                  } else {
                    if (CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE !== type2) {
                      if (CodedLink.CodedLinkType.APP_OAUTH2_LINK !== type2) {
                        return null;
                      }
                    }
                    const obj4 = { theme, embedUrl: url, message, app };
                    const tmpResult23 = createAppMessageEmbed;
                    return tmpResult23.createAppMessageEmbed(obj4);
                  }
                }
              }
            } else {
              return null;
            }
          }
        } else if (CodedLink.CodedLinkType.INVITE === type) {
          const tmpResult24 = InviteEmbed;
          return tmpResult24.createInviteEmbed(message, code, theme);
        } else if (CodedLink.CodedLinkType.TEMPLATE === type) {
          const tmpResult25 = GuildTemplateEmbed;
          return tmpResult25.createGuildTemplateEmbed(code, theme);
        } else if (CodedLink.CodedLinkType.BUILD_OVERRIDE === type) {
          const tmpResult26 = BuildOverrideEmbed;
          return tmpResult26.createBuildOverrideEmbed(code, theme);
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
            isStaffResult =
              null != GuildStore.getGuild("943265993613008967") && !LurkingStore.isLurking("943265993613008967");
            const tmp21 =
              null != GuildStore.getGuild("943265993613008967") && !LurkingStore.isLurking("943265993613008967");
          }
          let buildOverrideEmbed = null;
          if (isStaffResult) {
            const tmpResult27 = BuildOverrideEmbed;
            buildOverrideEmbed = tmpResult27.createBuildOverrideEmbed(code, theme);
          }
          return buildOverrideEmbed;
        } else if (CodedLink.CodedLinkType.EVENT === type) {
          const tmpResult28 = GuildScheduledEventEmbed;
          return tmpResult28.createGuildScheduledEventLinkEmbed(code, theme);
        } else if (CodedLink.CodedLinkType.CHANNEL_LINK === type) {
          const tmpResult29 = VoiceChannelLinkEmbed;
          return tmpResult29.createVoiceChannelLinkEmbed(code, theme);
        } else if (CodedLink.CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
          const obj5 = { theme, inviteCode: code };
          const tmpResult30 = EmbeddedActivityInviteEmbed;
          return tmpResult30.createEmbeddedActivityInviteEmbed(obj5);
        } else if (CodedLink.CodedLinkType.EXPERIMENT === type) {
          let experimentEmbed = null;
          const tmpResult31 = useCodedLinksExperimentEmbeds;
          if (tmpResult31.canSeeExperimentEmbeds()) {
            const tmpResult32 = ExperimentEmbed;
            experimentEmbed = tmpResult32.createExperimentEmbed(url, theme);
          }
          return experimentEmbed;
        } else {
          if (CodedLink.CodedLinkType.GUILD_PRODUCT !== type) {
            if (CodedLink.CodedLinkType.SERVER_SHOP !== type) {
              if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                  if (CodedLink.CodedLinkType.QUESTS_EMBED === type) {
                    const obj6 = { theme, questId: code, currentUser };
                    const tmpResult33 = QuestEmbed;
                    return tmpResult33.createQuestsEmbed(obj6);
                  } else {
                    if (CodedLink.CodedLinkType.COLLECTIBLES_SHOP !== type) {
                      if (CodedLink.CodedLinkType.GAME_PROFILE !== type) {
                        if (CodedLink.CodedLinkType.GAME_SERVER_SHARE !== type) {
                          if (CodedLink.CodedLinkType.USER_PROFILE !== type) {
                            if (CodedLink.CodedLinkType.GAME_ORGANIZATION_INVITE === type) {
                              let gameOrganizationInviteEmbed = null;
                              const tmpResult34 = LinkedGameOrgInvitesExperiment;
                              if (tmpResult34.getLinkedGameOrgInvitesEnabled("mobile_coded_link_embed")) {
                                const tmpResult35 = GameOrganizationInviteEmbed;
                                gameOrganizationInviteEmbed = tmpResult35.createGameOrganizationInviteEmbed(
                                  code,
                                  theme,
                                );
                              }
                              return gameOrganizationInviteEmbed;
                            } else {
                              const tmpResult36 = GlobalUtils;
                              return tmpResult36.assertNever(type);
                            }
                          }
                        }
                      }
                    }
                    return null;
                  }
                }
              }
              const tmpResult37 = storefrontCodedLink;
              const result = tmpResult37.parseStorefrontCodedLink(code);
              if (null != result) {
                if (result.skuIds.length <= 1) {
                  const first = _slicedToArray(result.skuIds, 1)[0];
                  const obj7 = { skuId: first, guildOrApplication: obj9, theme };
                  const createSocialLayerStorefrontProductDetailsEmbed =
                    createSocialLayerStorefrontProductDetailsEmbed2.createSocialLayerStorefrontProductDetailsEmbed;
                  createSocialLayerStorefrontProductDetailsEmbed2;
                  if (type === CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
                    obj9 = { type: "application", applicationId: result.scopeId };
                    const obj8 = { type: "application", applicationId: result.scopeId };
                  } else {
                    obj9 = { type: "guild", guildId: result.scopeId };
                  }
                  return createSocialLayerStorefrontProductDetailsEmbed(obj7);
                }
              }
              return null;
            }
          }
          return null;
        }
      });
    }
  }
  return [];
};
