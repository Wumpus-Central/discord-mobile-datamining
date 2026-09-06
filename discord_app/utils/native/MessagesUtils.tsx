// === Module 11956: MessagesUtils ===

// Module 11956 (MessagesUtils)
import CodedLink from "CodedLink" /* 4548 */;
import MediaPostEmbedUtils from "MediaPostEmbedUtils" /* 4708 */;
import GuildTemplatesConstants from "GuildTemplatesConstants" /* 7326 */;
import ExperimentEmbedUtils from "ExperimentEmbedUtils" /* 7890 */;
import Constants from "Constants" /* 1074 */;
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
      let someResult = props.invites !== invites2.invites || props.appDirectoryEmbedApplications !== invites2.appDirectoryEmbedApplications || props.invalidAppDirectoryEmbedApplicationIds !== invites2.invalidAppDirectoryEmbedApplicationIds || props.invalidApplicationIds !== invites2.invalidApplicationIds || props.appDirectoryEmbedApplicationFetchStates !== invites2.appDirectoryEmbedApplicationFetchStates || props.guildTemplates !== invites2.guildTemplates || props.buildOverrides !== invites2.buildOverrides || props.activityParticipants !== invites2.activityParticipants || props.quests !== invites2.quests || props.isFetchingCurrentQuests !== invites2.isFetchingCurrentQuests || props.applicationAssetFetchingIds !== invites2.applicationAssetFetchingIds || props.experimentEmbeds !== invites2.experimentEmbeds;
      if (someResult) {
        codedLinks = codedLinks.codedLinks;
        someResult = codedLinks.some((item) => {
          ({ type, code } = item);
          if (CodedLink.CodedLinkType.BUILD_OVERRIDE !== type) {
            if (CodedLink.CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
              if (CodedLink.CodedLinkType.EXPERIMENT === type) {
                const experimentFromEmbedURL = ExperimentEmbedUtils.getExperimentFromEmbedURL(code);
                let tmp48 = null != experimentFromEmbedURL;
                if (tmp48) {
                  const legacyExperiments = props.experimentEmbeds.legacyExperiments;
                  let tmp50;
                  if (legacyExperiments != null) {
                    tmp50 = legacyExperiments[experimentFromEmbedURL];
                  }
                  const legacyExperiments2 = invites2.experimentEmbeds.legacyExperiments;
                  let tmp52;
                  if (legacyExperiments2 != null) {
                    tmp52 = legacyExperiments2[experimentFromEmbedURL];
                  }
                  let tmp53 = tmp50 !== tmp52;
                  if (!tmp53) {
                    const legacyOverridesInfo = props.experimentEmbeds.legacyOverridesInfo;
                    let tmp54;
                    if (legacyOverridesInfo != null) {
                      tmp54 = legacyOverridesInfo[experimentFromEmbedURL];
                    }
                    const legacyOverridesInfo2 = tmp51.experimentEmbeds.legacyOverridesInfo;
                    let tmp55;
                    if (legacyOverridesInfo2 != null) {
                      tmp55 = legacyOverridesInfo2[experimentFromEmbedURL];
                    }
                    tmp53 = tmp54 !== tmp55;
                  }
                  if (!tmp53) {
                    const apexExperiments = props.experimentEmbeds.apexExperiments;
                    let tmp56;
                    if (apexExperiments != null) {
                      tmp56 = apexExperiments[experimentFromEmbedURL];
                    }
                    const apexExperiments2 = tmp51.experimentEmbeds.apexExperiments;
                    let tmp57;
                    if (apexExperiments2 != null) {
                      tmp57 = apexExperiments2[experimentFromEmbedURL];
                    }
                    tmp53 = tmp56 !== tmp57;
                  }
                  if (!tmp53) {
                    const apexOverridesInfo = props.experimentEmbeds.apexOverridesInfo;
                    let tmp58;
                    if (apexOverridesInfo != null) {
                      tmp58 = apexOverridesInfo[experimentFromEmbedURL];
                    }
                    const apexOverridesInfo2 = tmp51.experimentEmbeds.apexOverridesInfo;
                    let tmp59;
                    if (apexOverridesInfo2 != null) {
                      tmp59 = apexOverridesInfo2[experimentFromEmbedURL];
                    }
                    tmp53 = tmp58 !== tmp59;
                  }
                  tmp48 = tmp53;
                }
                return tmp48;
              } else if (CodedLink.CodedLinkType.INVITE === type) {
                const invites3 = props.invites;
                invites3.get(code);
                const invites4 = invites2.invites;
                value = invites4.get(code);
                let state;
                if (value != null) {
                  state = value.state;
                }
                let state1;
                if (value != null) {
                  state1 = value.state;
                }
                let tmp43 = state !== state1;
                if (tmp43) {
                  let state2;
                  if (value != null) {
                    state2 = value.state;
                  }
                  tmp43 = state2 !== constants.RESOLVING;
                }
                if (!tmp43) {
                  tmp43 = props.applicationAssetFetchingIds !== invites2.applicationAssetFetchingIds;
                }
                return tmp43;
              } else if (CodedLink.CodedLinkType.TEMPLATE === type) {
                const guildTemplates = props.guildTemplates;
                const value1 = guildTemplates.get(code);
                const guildTemplates2 = invites2.guildTemplates;
                value2 = guildTemplates2.get(code);
                let state3;
                if (value1 != null) {
                  state3 = value1.state;
                }
                let state4;
                if (value2 != null) {
                  state4 = value2.state;
                }
                let tmp33 = state3 !== state4;
                if (tmp33) {
                  let state5;
                  if (value2 != null) {
                    state5 = value2.state;
                  }
                  tmp33 = state5 !== GuildTemplateStates.RESOLVING;
                }
                return tmp33;
              } else {
                if (CodedLink.CodedLinkType.EVENT !== type) {
                  if (CodedLink.CodedLinkType.CHANNEL_LINK !== type) {
                    if (CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE === type) {
                      const invalidAppDirectoryEmbedApplicationIds = props.invalidAppDirectoryEmbedApplicationIds;
                      const invalidAppDirectoryEmbedApplicationIds2 = invites2.invalidAppDirectoryEmbedApplicationIds;
                      const hasItem = invalidAppDirectoryEmbedApplicationIds.has(code);
                      let tmp25 = props.appDirectoryEmbedApplications[code] !== invites2.appDirectoryEmbedApplications[code];
                      if (!tmp25) {
                        tmp25 = hasItem !== invalidAppDirectoryEmbedApplicationIds2.has(code);
                      }
                      if (!tmp25) {
                        tmp25 = props.appDirectoryEmbedApplicationFetchStates[code] !== invites2.appDirectoryEmbedApplicationFetchStates[code];
                      }
                      return tmp25;
                    } else if (CodedLink.CodedLinkType.ACTIVITY_BOOKMARK === type) {
                      return props.activityParticipants !== invites2.activityParticipants || props.invalidApplicationIds !== invites2.invalidApplicationIds || props.applicationAssetFetchingIds !== invites2.applicationAssetFetchingIds;
                    } else if (CodedLink.CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
                      const invites = props.invites;
                      const value3 = invites.get(code);
                      invites2 = invites2.invites;
                      const value4 = invites2.get(code);
                      let tmp12 = props.activityParticipants !== invites2.activityParticipants || props.invalidApplicationIds !== tmp10.invalidApplicationIds || props.applicationAssetFetchingIds !== tmp10.applicationAssetFetchingIds;
                      if (!tmp12) {
                        let state6;
                        if (value3 != null) {
                          state6 = value3.state;
                        }
                        let state7;
                        if (value4 != null) {
                          state7 = value4.state;
                        }
                        let tmp16 = state6 !== state7;
                        if (tmp16) {
                          let state8;
                          if (value4 != null) {
                            state8 = value4.state;
                          }
                          tmp16 = state8 !== constants.RESOLVING;
                        }
                        tmp12 = tmp16;
                      }
                      return tmp12;
                    } else {
                      if (CodedLink.CodedLinkType.GUILD_PRODUCT !== type) {
                        if (CodedLink.CodedLinkType.SERVER_SHOP !== type) {
                          if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                            if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                              if (CodedLink.CodedLinkType.QUESTS_EMBED === type) {
                                return props.quests !== invites2.quests || props.isFetchingCurrentQuests !== tmp6.isFetchingCurrentQuests;
                              } else {
                                if (CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                                  if (CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                                    if (CodedLink.CodedLinkType.APP_OAUTH2_LINK === type) {
                                      return props.applicationAssetFetchingIds !== invites2.applicationAssetFetchingIds || props.invalidApplicationIds !== tmp4.invalidApplicationIds;
                                    } else {
                                      if (CodedLink.CodedLinkType.COLLECTIBLES_SHOP !== type) {
                                        if (CodedLink.CodedLinkType.GAME_PROFILE !== type) {
                                          if (CodedLink.CodedLinkType.GAME_SERVER_SHARE !== type) {
                                            if (CodedLink.CodedLinkType.USER_PROFILE !== type) {
                                              const _Error = Error;
                                              const _HermesInternal = HermesInternal;
                                              throw Error("Unknown coded link type: " + type);
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
            state9 = tmp60.state;
          }
          let state10;
          if (invites2.buildOverrides[code] != null) {
            state10 = tmp61.state;
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