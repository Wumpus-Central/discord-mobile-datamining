// === Module 11582: MessagesUtils ===

// Module 11582 (MessagesUtils)
import CodedLink from "CodedLink" /* 4881 */;
import MediaPostEmbedUtils from "MediaPostEmbedUtils" /* 5044 */;
import GuildTemplatesConstants from "GuildTemplatesConstants" /* 6839 */;
import ExperimentEmbedUtils from "ExperimentEmbedUtils" /* 7545 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

({ InviteStates: c2, MessageEmbedTypes: c3 } = Constants);
const GuildTemplateStates = GuildTemplatesConstants.GuildTemplateStates;
const result = size.fileFinishedImporting("utils/native/MessagesUtils.tsx");

export default {
  messageAuthorActivitiesChanged(activity, props, messageAuthorActivities2) {
    let tmp = props.messageAuthorActivities !== messageAuthorActivities2.messageAuthorActivities;
    if (tmp) {
      tmp = null != activity.activity;
    }
    if (tmp) {
      tmp = props.messageAuthorActivities[activity.author.id] !== messageAuthorActivities2.messageAuthorActivities[activity.author.id];
    }
    return tmp;
  },
  codedLinksChanged(codedLinks, props, invites2) {
    let tmp = 0 !== codedLinks.codedLinks.length;
    if (tmp) {
      let someResult = props.invites !== invites2.invites || props.appDirectoryEmbedApplications !== invites2.appDirectoryEmbedApplications || props.invalidAppDirectoryEmbedApplicationIds !== invites2.invalidAppDirectoryEmbedApplicationIds || props.invalidApplicationIds !== invites2.invalidApplicationIds || props.appDirectoryEmbedApplicationFetchStates !== invites2.appDirectoryEmbedApplicationFetchStates || props.guildTemplates !== invites2.guildTemplates || props.gameOrganizationInvites !== invites2.gameOrganizationInvites || props.buildOverrides !== invites2.buildOverrides || props.activityParticipants !== invites2.activityParticipants || props.quests !== invites2.quests || props.isFetchingCurrentQuests !== invites2.isFetchingCurrentQuests || props.applicationAssetFetchingIds !== invites2.applicationAssetFetchingIds || props.experimentEmbeds !== invites2.experimentEmbeds;
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
                  const legacyExperiments2 = invites2.experimentEmbeds.legacyExperiments;
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
                    const legacyOverridesInfo2 = tmp54.experimentEmbeds.legacyOverridesInfo;
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
                    const apexExperiments2 = tmp54.experimentEmbeds.apexExperiments;
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
                    const apexOverridesInfo2 = tmp54.experimentEmbeds.apexOverridesInfo;
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
                const invites4 = invites2.invites;
                const value7 = invites4.get(code);
                state = undefined;
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
                  tmp46 = props.applicationAssetFetchingIds !== invites2.applicationAssetFetchingIds;
                }
                return tmp46;
              } else if (CodedLink.CodedLinkType.TEMPLATE === type) {
                const guildTemplates = props.guildTemplates;
                const value8 = guildTemplates.get(code);
                const guildTemplates2 = invites2.guildTemplates;
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
                      const invalidAppDirectoryEmbedApplicationIds2 = invites2.invalidAppDirectoryEmbedApplicationIds;
                      const hasItem = invalidAppDirectoryEmbedApplicationIds.has(code);
                      let tmp28 = props.appDirectoryEmbedApplications[code] !== invites2.appDirectoryEmbedApplications[code];
                      if (!tmp28) {
                        tmp28 = hasItem !== invalidAppDirectoryEmbedApplicationIds2.has(code);
                      }
                      if (!tmp28) {
                        tmp28 = props.appDirectoryEmbedApplicationFetchStates[code] !== invites2.appDirectoryEmbedApplicationFetchStates[code];
                      }
                      return tmp28;
                    } else if (CodedLink.CodedLinkType.ACTIVITY_BOOKMARK === type) {
                      return props.activityParticipants !== invites2.activityParticipants || props.invalidApplicationIds !== invites2.invalidApplicationIds || props.applicationAssetFetchingIds !== invites2.applicationAssetFetchingIds;
                    } else if (CodedLink.CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
                      const invites = props.invites;
                      const value10 = invites.get(code);
                      invites2 = invites2.invites;
                      const value11 = invites2.get(code);
                      let tmp15 = props.activityParticipants !== invites2.activityParticipants || props.invalidApplicationIds !== tmp13.invalidApplicationIds || props.applicationAssetFetchingIds !== tmp13.applicationAssetFetchingIds;
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
                                return props.quests !== invites2.quests || props.isFetchingCurrentQuests !== tmp9.isFetchingCurrentQuests;
                              } else {
                                if (CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                                  if (CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                                    if (CodedLink.CodedLinkType.APP_OAUTH2_LINK === type) {
                                      return props.applicationAssetFetchingIds !== invites2.applicationAssetFetchingIds || props.invalidApplicationIds !== tmp7.invalidApplicationIds;
                                    } else {
                                      if (CodedLink.CodedLinkType.COLLECTIBLES_SHOP !== type) {
                                        if (CodedLink.CodedLinkType.GAME_PROFILE !== type) {
                                          if (CodedLink.CodedLinkType.GAME_SERVER_SHARE !== type) {
                                            if (CodedLink.CodedLinkType.USER_PROFILE !== type) {
                                              if (CodedLink.CodedLinkType.GAME_ORGANIZATION_INVITE === type) {
                                                const gameOrganizationInvites = props.gameOrganizationInvites;
                                                const gameOrganizationInvites2 = invites2.gameOrganizationInvites;
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
          if (invites2.buildOverrides[code] != null) {
            state10 = tmp64.state;
          }
          return state9 !== state10;
        });
      }
      tmp = someResult;
    }
    return tmp;
  },
  giftCodesChanged(giftCodes, props, arg2) {
    closure_1 = arg2;
    let someResult = 0 !== giftCodes.giftCodes.length;
    if (someResult) {
      giftCodes = giftCodes.giftCodes;
      someResult = giftCodes.some((item) => {
        const resolvedGiftCodes = props.resolvedGiftCodes;
        const resolvedGiftCodes2 = closure_1.resolvedGiftCodes;
        const hasItem = resolvedGiftCodes.includes(item);
        const resolvingGiftCodes = props.resolvingGiftCodes;
        const hasItem1 = resolvedGiftCodes2.includes(item);
        const resolvingGiftCodes2 = closure_1.resolvingGiftCodes;
        const hasItem2 = resolvingGiftCodes.includes(item);
        const acceptingGiftCodes = props.acceptingGiftCodes;
        const hasItem3 = resolvingGiftCodes2.includes(item);
        const acceptingGiftCodes2 = closure_1.acceptingGiftCodes;
        const hasItem4 = acceptingGiftCodes.includes(item);
        return true;
      });
    }
    return someResult;
  },
  mediaPostPreviewEmbedsChanged(embeds, props, props2) {
    embeds = embeds.embeds;
    const found = embeds.filter((type) => type.type === constants.POST_PREVIEW);
    return 0 !== found.length && found.some((url) => {
      const mediaPostEmbedChannelId = MediaPostEmbedUtils.getMediaPostEmbedChannelId(url.url);
      let tmp2 = null != mediaPostEmbedChannelId;
      if (tmp2) {
        tmp2 = props.mediaPostPreviewEmbeds[mediaPostEmbedChannelId] !== props2.mediaPostPreviewEmbeds[mediaPostEmbedChannelId];
      }
      return tmp2;
    });
  }
};