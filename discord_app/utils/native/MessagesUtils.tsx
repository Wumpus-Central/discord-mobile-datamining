// discord_app/utils/native/MessagesUtils.tsx
import CodedLink from "../../modules/coded_links/CodedLink.tsx";
import MediaPostEmbedUtils from "../../modules/media_channel/MediaPostEmbedUtils.tsx";
import GuildTemplatesConstants from "../../modules/guild_templates/GuildTemplatesConstants.tsx";
import ExperimentEmbedUtils from "../../modules/experiments/ExperimentEmbedUtils.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

({ InviteStates: c2, MessageEmbedTypes: c3 } = Constants);
const GuildTemplateStates = GuildTemplatesConstants.GuildTemplateStates;
const result = size.fileFinishedImporting("utils/native/MessagesUtils.tsx");

export default {
  messageAuthorActivitiesChanged(activity, props, merged) {
    let tmp = props.messageAuthorActivities !== merged.messageAuthorActivities;
    if (tmp) {
      tmp = null != activity.activity;
    }
    if (tmp) {
      tmp = props.messageAuthorActivities[activity.author.id] !== merged.messageAuthorActivities[activity.author.id];
    }
    return tmp;
  },
  codedLinksChanged(codedLinks, props, merged) {
    let tmp = 0 !== codedLinks.codedLinks.length;
    if (tmp) {
      let someResult =
        props.invites !== merged.invites ||
        props.appDirectoryEmbedApplications !== merged.appDirectoryEmbedApplications ||
        props.invalidAppDirectoryEmbedApplicationIds !== merged.invalidAppDirectoryEmbedApplicationIds ||
        props.invalidApplicationIds !== merged.invalidApplicationIds ||
        props.appDirectoryEmbedApplicationFetchStates !== merged.appDirectoryEmbedApplicationFetchStates ||
        props.guildTemplates !== merged.guildTemplates ||
        props.gameOrganizationInvites !== merged.gameOrganizationInvites ||
        props.buildOverrides !== merged.buildOverrides ||
        props.activityParticipants !== merged.activityParticipants ||
        props.quests !== merged.quests ||
        props.isFetchingCurrentQuests !== merged.isFetchingCurrentQuests ||
        props.applicationAssetFetchingIds !== merged.applicationAssetFetchingIds ||
        props.experimentEmbeds !== merged.experimentEmbeds;
      if (someResult) {
        codedLinks = codedLinks.codedLinks;
        someResult = codedLinks.some((item) => {
          ({ type, code } = item);
          if (CodedLink.CodedLinkType.BUILD_OVERRIDE !== type) {
            if (CodedLink.CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
              if (CodedLink.CodedLinkType.EXPERIMENT === type) {
                const experimentFromEmbedURL = ExperimentEmbedUtils.getExperimentFromEmbedURL(code);
                let tmp51 = null != experimentFromEmbedURL;
                if (tmp51) {
                  const legacyExperiments = props.experimentEmbeds.legacyExperiments;
                  let tmp53;
                  if (legacyExperiments != null) {
                    tmp53 = legacyExperiments[experimentFromEmbedURL];
                  }
                  const legacyExperiments2 = merged.experimentEmbeds.legacyExperiments;
                  let tmp55;
                  if (legacyExperiments2 != null) {
                    tmp55 = legacyExperiments2[experimentFromEmbedURL];
                  }
                  let tmp56 = tmp53 !== tmp55;
                  if (!tmp56) {
                    const legacyOverridesInfo = props.experimentEmbeds.legacyOverridesInfo;
                    let tmp57;
                    if (legacyOverridesInfo != null) {
                      tmp57 = legacyOverridesInfo[experimentFromEmbedURL];
                    }
                    const legacyOverridesInfo2 = merged.experimentEmbeds.legacyOverridesInfo;
                    let tmp58;
                    if (legacyOverridesInfo2 != null) {
                      tmp58 = legacyOverridesInfo2[experimentFromEmbedURL];
                    }
                    tmp56 = tmp57 !== tmp58;
                  }
                  if (!tmp56) {
                    const apexExperiments = props.experimentEmbeds.apexExperiments;
                    let tmp59;
                    if (apexExperiments != null) {
                      tmp59 = apexExperiments[experimentFromEmbedURL];
                    }
                    const apexExperiments2 = merged.experimentEmbeds.apexExperiments;
                    let tmp60;
                    if (apexExperiments2 != null) {
                      tmp60 = apexExperiments2[experimentFromEmbedURL];
                    }
                    tmp56 = tmp59 !== tmp60;
                  }
                  if (!tmp56) {
                    const apexOverridesInfo = props.experimentEmbeds.apexOverridesInfo;
                    let tmp61;
                    if (apexOverridesInfo != null) {
                      tmp61 = apexOverridesInfo[experimentFromEmbedURL];
                    }
                    const apexOverridesInfo2 = merged.experimentEmbeds.apexOverridesInfo;
                    let tmp62;
                    if (apexOverridesInfo2 != null) {
                      tmp62 = apexOverridesInfo2[experimentFromEmbedURL];
                    }
                    tmp56 = tmp61 !== tmp62;
                  }
                  tmp51 = tmp56;
                }
                return tmp51;
              } else if (CodedLink.CodedLinkType.INVITE === type) {
                const invites3 = props.invites;
                value = invites3.get(code);
                const invites4 = merged.invites;
                const value7 = invites4.get(code);
                let state;
                if (value != null) {
                  state = value.state;
                }
                let state1;
                if (value7 != null) {
                  state1 = value7.state;
                }
                let tmp46 = state !== state1;
                if (tmp46) {
                  let state2;
                  if (value7 != null) {
                    state2 = value7.state;
                  }
                  tmp46 = state2 !== constants.RESOLVING;
                }
                if (!tmp46) {
                  tmp46 = props.applicationAssetFetchingIds !== merged.applicationAssetFetchingIds;
                }
                return tmp46;
              } else if (CodedLink.CodedLinkType.TEMPLATE === type) {
                const guildTemplates = props.guildTemplates;
                const value8 = guildTemplates.get(code);
                const guildTemplates2 = merged.guildTemplates;
                const value9 = guildTemplates2.get(code);
                let state3;
                if (value8 != null) {
                  state3 = value8.state;
                }
                let state4;
                if (value9 != null) {
                  state4 = value9.state;
                }
                let tmp36 = state3 !== state4;
                if (tmp36) {
                  let state5;
                  if (value9 != null) {
                    state5 = value9.state;
                  }
                  tmp36 = state5 !== GuildTemplateStates.RESOLVING;
                }
                return tmp36;
              } else {
                if (CodedLink.CodedLinkType.EVENT !== type) {
                  if (CodedLink.CodedLinkType.CHANNEL_LINK !== type) {
                    if (CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE === type) {
                      const invalidAppDirectoryEmbedApplicationIds = props.invalidAppDirectoryEmbedApplicationIds;
                      const invalidAppDirectoryEmbedApplicationIds2 = merged.invalidAppDirectoryEmbedApplicationIds;
                      const hasItem = invalidAppDirectoryEmbedApplicationIds.has(code);
                      let tmp28 =
                        props.appDirectoryEmbedApplications[code] !== merged.appDirectoryEmbedApplications[code];
                      if (!tmp28) {
                        tmp28 = hasItem !== invalidAppDirectoryEmbedApplicationIds2.has(code);
                      }
                      if (!tmp28) {
                        tmp28 =
                          props.appDirectoryEmbedApplicationFetchStates[code] !==
                          merged.appDirectoryEmbedApplicationFetchStates[code];
                      }
                      return tmp28;
                    } else if (CodedLink.CodedLinkType.ACTIVITY_BOOKMARK === type) {
                      return (
                        props.activityParticipants !== merged.activityParticipants ||
                        props.invalidApplicationIds !== merged.invalidApplicationIds ||
                        props.applicationAssetFetchingIds !== merged.applicationAssetFetchingIds
                      );
                    } else if (CodedLink.CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
                      const invites = props.invites;
                      const value10 = invites.get(code);
                      const invites2 = merged.invites;
                      const value11 = invites2.get(code);
                      let tmp15 =
                        props.activityParticipants !== merged.activityParticipants ||
                        props.invalidApplicationIds !== merged.invalidApplicationIds ||
                        props.applicationAssetFetchingIds !== merged.applicationAssetFetchingIds;
                      if (!tmp15) {
                        let state6;
                        if (value10 != null) {
                          state6 = value10.state;
                        }
                        let state7;
                        if (value11 != null) {
                          state7 = value11.state;
                        }
                        let tmp19 = state6 !== state7;
                        if (tmp19) {
                          let state8;
                          if (value11 != null) {
                            state8 = value11.state;
                          }
                          tmp19 = state8 !== constants.RESOLVING;
                        }
                        tmp15 = tmp19;
                      }
                      return tmp15;
                    } else {
                      if (CodedLink.CodedLinkType.GUILD_PRODUCT !== type) {
                        if (CodedLink.CodedLinkType.SERVER_SHOP !== type) {
                          if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                            if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                              if (CodedLink.CodedLinkType.QUESTS_EMBED === type) {
                                return (
                                  props.quests !== merged.quests ||
                                  props.isFetchingCurrentQuests !== tmp9.isFetchingCurrentQuests
                                );
                              } else {
                                if (CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                                  if (CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                                    if (CodedLink.CodedLinkType.APP_OAUTH2_LINK === type) {
                                      return (
                                        props.applicationAssetFetchingIds !== merged.applicationAssetFetchingIds ||
                                        props.invalidApplicationIds !== tmp7.invalidApplicationIds
                                      );
                                    } else {
                                      if (CodedLink.CodedLinkType.COLLECTIBLES_SHOP !== type) {
                                        if (CodedLink.CodedLinkType.GAME_PROFILE !== type) {
                                          if (CodedLink.CodedLinkType.GAME_SERVER_SHARE !== type) {
                                            if (CodedLink.CodedLinkType.USER_PROFILE !== type) {
                                              if (CodedLink.CodedLinkType.GAME_ORGANIZATION_INVITE === type) {
                                                const gameOrganizationInvites = props.gameOrganizationInvites;
                                                const gameOrganizationInvites2 = merged.gameOrganizationInvites;
                                                const value12 = gameOrganizationInvites.get(code);
                                                return value12 !== gameOrganizationInvites2.get(code);
                                              } else {
                                                const _Error = Error;
                                                const _HermesInternal = HermesInternal;
                                                throw Error("Unknown coded link type: " + type);
                                              }
                                            }
                                          }
                                        }
                                      }
                                      return false;
                                    }
                                  }
                                }
                                return false;
                              }
                            }
                          }
                        }
                      }
                      return false;
                    }
                  }
                }
                return false;
              }
            }
          }
          let state9;
          if (props.buildOverrides[code] != null) {
            state9 = tmp63.state;
          }
          let state10;
          if (merged.buildOverrides[code] != null) {
            state10 = tmp64.state;
          }
          return state9 !== state10;
        });
      }
      tmp = someResult;
    }
    return tmp;
  },
  giftCodesChanged(giftCodes, props, merged) {
    let someResult = 0 !== giftCodes.giftCodes.length;
    if (someResult) {
      giftCodes = giftCodes.giftCodes;
      someResult = giftCodes.some((item) => {
        const resolvedGiftCodes = props.resolvedGiftCodes;
        const resolvedGiftCodes2 = merged.resolvedGiftCodes;
        const hasItem = resolvedGiftCodes.includes(item);
        const resolvingGiftCodes = props.resolvingGiftCodes;
        const hasItem1 = resolvedGiftCodes2.includes(item);
        const resolvingGiftCodes2 = merged.resolvingGiftCodes;
        const hasItem2 = resolvingGiftCodes.includes(item);
        const acceptingGiftCodes = props.acceptingGiftCodes;
        const hasItem3 = resolvingGiftCodes2.includes(item);
        const acceptingGiftCodes2 = merged.acceptingGiftCodes;
        const hasItem4 = acceptingGiftCodes.includes(item);
        return true;
      });
    }
    return someResult;
  },
  mediaPostPreviewEmbedsChanged(embeds, props, merged) {
    embeds = embeds.embeds;
    const found = embeds.filter((type) => type.type === constants.POST_PREVIEW);
    return (
      0 !== found.length &&
      found.some((url) => {
        const mediaPostEmbedChannelId = MediaPostEmbedUtils.getMediaPostEmbedChannelId(url.url);
        let tmp2 = null != mediaPostEmbedChannelId;
        if (tmp2) {
          tmp2 =
            props.mediaPostPreviewEmbeds[mediaPostEmbedChannelId] !==
            merged.mediaPostPreviewEmbeds[mediaPostEmbedChannelId];
        }
        return tmp2;
      })
    );
  },
};
