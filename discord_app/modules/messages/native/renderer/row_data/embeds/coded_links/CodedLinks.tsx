// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/CodedLinks.tsx
import ApplicationCodedLink from "../../../../../../coded_links/ApplicationCodedLink.tsx";
import _slicedToArray from "../../../../../../../../_runtime/metro/00032__.js";
import LurkingStore from "../../../../../../lurker_mode/LurkingStore.tsx";
import GuildStore from "../../../../../../../stores/GuildStore.tsx";
import UserStore from "../../../../../../../stores/UserStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/coded_links/CodedLinks.tsx",
);

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
            let tmpResult = tmp(7690);
            if (tmpResult.isApplicationCodedLinkMobileSupported(type)) {
              tmpResult = tmp(7690);
              const applicationCodedLinkData = tmpResult.getApplicationCodedLinkData(type, code, url);
              if (null == applicationCodedLinkData) {
                return null;
              } else {
                obj = { appId: applicationCodedLinkData.applicationId, channel: tmp34, message, theme };
                const appLinkGateResult = tmp(11940).getAppLinkGateResult(obj);
                if ("unavailable" === appLinkGateResult.state) {
                  return null;
                } else if ("blocked" === appLinkGateResult.state) {
                  return appLinkGateResult.model;
                } else {
                  const app = appLinkGateResult.app;
                  const type2 = applicationCodedLinkData.type;
                  if (tmp(4548).CodedLinkType.ACTIVITY_BOOKMARK === type2) {
                    obj = { theme: tmp38, embedUrl: url, message: tmp37, app, params: applicationCodedLinkData.params };
                    return tmp(13207).createActivityMessageEmbed(obj);
                  } else {
                    if (tmp(4548).CodedLinkType.APP_DIRECTORY_PROFILE !== type2) {
                      if (tmp(4548).CodedLinkType.APP_OAUTH2_LINK !== type2) {
                        return null;
                      }
                    }
                    const obj1 = { theme: tmp38, embedUrl: url, message: tmp37, app };
                    return tmp(11940).createAppMessageEmbed(obj1);
                  }
                }
                const tmpResult1 = tmp(11940);
              }
            } else {
              return null;
            }
          }
        } else if (tmp(4548).CodedLinkType.INVITE === type) {
          return tmp(13208).createInviteEmbed(message, code, theme);
        } else if (tmp(4548).CodedLinkType.TEMPLATE === type) {
          return tmp(13218).createGuildTemplateEmbed(code, theme);
        } else if (tmp(4548).CodedLinkType.BUILD_OVERRIDE === type) {
          return tmp(13220).createBuildOverrideEmbed(code, theme);
        } else if (tmp(4548).CodedLinkType.MANUAL_BUILD_OVERRIDE === type) {
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
            buildOverrideEmbed = tmp(13220).createBuildOverrideEmbed(code, theme);
            const tmpResult7 = tmp(13220);
          }
          return buildOverrideEmbed;
        } else if (tmp(4548).CodedLinkType.EVENT === type) {
          return tmp(13213).createGuildScheduledEventLinkEmbed(code, theme);
        } else if (tmp(4548).CodedLinkType.CHANNEL_LINK === type) {
          return tmp(13222).createVoiceChannelLinkEmbed(code, theme);
        } else if (tmp(4548).CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
          const obj2 = { theme, inviteCode: code };
          return tmp(13215).createEmbeddedActivityInviteEmbed(obj2);
        } else if (tmp(4548).CodedLinkType.EXPERIMENT === type) {
          let experimentEmbed = null;
          if (tmpResult11.canSeeExperimentEmbeds()) {
            experimentEmbed = tmp(11807).createExperimentEmbed(url, theme);
            const tmpResult12 = tmp(11807);
          }
          return experimentEmbed;
        } else {
          if (tmp(4548).CodedLinkType.GUILD_PRODUCT !== type) {
            if (tmp(4548).CodedLinkType.SERVER_SHOP !== type) {
              if (tmp(4548).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                if (tmp(4548).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                  if (tmp(4548).CodedLinkType.QUESTS_EMBED === type) {
                    const obj3 = { theme, questId: code, currentUser };
                    return tmp(13223).createQuestsEmbed(obj3);
                  } else {
                    if (tmp(4548).CodedLinkType.COLLECTIBLES_SHOP !== type) {
                      if (tmp(4548).CodedLinkType.GAME_PROFILE !== type) {
                        if (tmp(4548).CodedLinkType.GAME_SERVER_SHARE !== type) {
                          if (tmp(4548).CodedLinkType.USER_PROFILE !== type) {
                            return tmp(1369).assertNever(type);
                          }
                        }
                      }
                    }
                    return null;
                  }
                }
              }
              if (type === tmp(4548).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
                [tmp13, tmp14] = _slicedToArray(code.split("-"), 2);
                const tmp12 = _slicedToArray(code.split("-"), 2);
                const obj4 = { skuId: tmp13, guildOrApplication: null, theme: null };
                const obj5 = { type: "application", applicationId: tmp14 };
                obj4.guildOrApplication = obj5;
                obj4.theme = theme;
                return tmp(11531).createSocialLayerStorefrontProductDetailsEmbed(obj4);
              } else {
                [tmp8, tmp9] = _slicedToArray(code.split("-"), 2);
                const tmp7 = _slicedToArray(code.split("-"), 2);
                const obj6 = { skuId: tmp8, guildOrApplication: null, theme: null };
                const obj7 = { type: "guild", guildId: tmp9 };
                obj6.guildOrApplication = obj7;
                obj6.theme = theme;
                return tmp(11531).createSocialLayerStorefrontProductDetailsEmbed(obj6);
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
