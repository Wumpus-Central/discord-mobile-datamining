// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/CodedLinks.tsx
import GlobalUtils from "../../../../../../../utils/GlobalUtils.tsx";
import CodedLink from "../../../../../../coded_links/CodedLink.tsx";
import ApplicationCodedLink from "../../../../../../coded_links/ApplicationCodedLink.tsx";
import createSocialLayerStorefrontProductDetailsEmbed from "../../../../../../slayer_storefront/native/createSocialLayerStorefrontProductDetailsEmbed.tsx";
import ExperimentEmbed from "ExperimentEmbed.tsx";
import createAppMessageEmbed from "../../../../../../applications/message_embed/native/createAppMessageEmbed.tsx";
import storefrontCodedLink from "../../../../../../slayer_storefront/storefrontCodedLink.tsx";
import createActivityMessageEmbed from "../../../../../../applications/message_embed/native/createActivityMessageEmbed.tsx";
import InviteEmbed from "InviteEmbed.tsx";
import GuildScheduledEventEmbed from "GuildScheduledEventEmbed.tsx";
import EmbeddedActivityInviteEmbed from "EmbeddedActivityInviteEmbed.tsx";
import GuildTemplateEmbed from "GuildTemplateEmbed.tsx";
import BuildOverrideEmbed from "BuildOverrideEmbed.tsx";
import VoiceChannelLinkEmbed from "VoiceChannelLinkEmbed.tsx";
import QuestEmbed from "../../../../../../quests/native/QuestEmbed.native.tsx";
import _slicedToArray from "../../../../../../../../_runtime/metro/00032__.js";
import LurkingStore from "../../../../../../lurker_mode/LurkingStore.tsx";
import GuildStore from "../../../../../../../stores/GuildStore.tsx";
import UserStore from "../../../../../../../stores/UserStore.tsx";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/CodedLinks.tsx");

export const createCodedLinkEmbeds = function createCodedLinkEmbeds(message, message2, channel, forcedTheme) {
  closure_1 = channel;
  const theme = forcedTheme;
  if (null != message.author) {
    if (0 !== message2.codedLinks.length) {
      let currentUser = UserStore.getCurrentUser();
      const codedLinks = message2.codedLinks;
      return codedLinks.map((item) => {
        ({ type, code, url } = item);
        if (obj.isApplicationCodedLink(type)) {
          if (null == closure_1) {
            return null;
          } else {
            if (tmpResult.isApplicationCodedLinkMobileSupported(type)) {
              const applicationCodedLinkData = ApplicationCodedLink.getApplicationCodedLinkData(type, code, url);
              if (null == applicationCodedLinkData) {
                return null;
              } else {
                const obj2 = { appId: applicationCodedLinkData.applicationId, channel: tmp27, message, theme };
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
                const tmpResult19 = createAppMessageEmbed;
              }
              const tmpResult18 = ApplicationCodedLink;
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
            let tmp19 = null != GuildStore.getGuild("943265993613008967");
            if (tmp19) {
              tmp19 = !LurkingStore.isLurking("943265993613008967");
            }
            isStaffResult = tmp19;
          }
          let buildOverrideEmbed = null;
          if (isStaffResult) {
            buildOverrideEmbed = BuildOverrideEmbed.createBuildOverrideEmbed(code, theme);
            const tmpResult25 = BuildOverrideEmbed;
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
          if (tmpResult29.canSeeExperimentEmbeds()) {
            experimentEmbed = ExperimentEmbed.createExperimentEmbed(url, theme);
            const tmpResult30 = ExperimentEmbed;
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
              const result = storefrontCodedLink.parseStorefrontCodedLink(code);
              if (null != result) {
                if (result.skuIds.length <= 1) {
                  const obj7 = { skuId: _slicedToArray(result.skuIds, 1)[0], guildOrApplication: null, theme: null };
                  if (type === CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
                    const obj8 = { type: "application", applicationId: result.scopeId };
                    let obj9 = obj8;
                  } else {
                    obj9 = { type: "guild", guildId: result.scopeId };
                  }
                  obj7.guildOrApplication = obj9;
                  obj7.theme = theme;
                  return createSocialLayerStorefrontProductDetailsEmbed.createSocialLayerStorefrontProductDetailsEmbed(
                    obj7,
                  );
                }
              }
              return null;
            }
          }
          return null;
        }
        obj = ApplicationCodedLink;
      });
    }
  }
  return [];
};
