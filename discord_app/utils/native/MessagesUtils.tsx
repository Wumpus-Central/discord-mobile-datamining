// === Module 14566: MessagesUtils ===

// Module 14566 (MessagesUtils)
import CodedLink from "CodedLink" /* 6055 */;
import MediaPostEmbedUtils from "MediaPostEmbedUtils" /* 6359 */;
import GuildTemplatesConstants from "GuildTemplatesConstants" /* 8130 */;
import ExperimentEmbedUtils from "ExperimentEmbedUtils" /* 8649 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 12369 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

({ InviteStates: c2, MessageEmbedTypes: c3 } = Constants);
let closure_4 = GameOrganizationInviteConstants.GameOrganizationInviteStates;
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
  codedLinksChanged(getContentMessage, props, merged) {
    const codedLinks = getContentMessage.getContentMessage().codedLinks;
    let tmp = 0 !== codedLinks.length;
    if (tmp) {
      tmp = (props.invites !== merged.invites || props.appDirectoryEmbedApplications !== merged.appDirectoryEmbedApplications || props.invalidAppDirectoryEmbedApplicationIds !== merged.invalidAppDirectoryEmbedApplicationIds || props.invalidApplicationIds !== merged.invalidApplicationIds || props.appDirectoryEmbedApplicationFetchStates !== merged.appDirectoryEmbedApplicationFetchStates || props.guildTemplates !== merged.guildTemplates || props.gameOrganizationInvites !== merged.gameOrganizationInvites || props.joinedGameOrganizationGuildIds !== merged.joinedGameOrganizationGuildIds || props.pendingGameOrganizationJoinFlowCodes !== merged.pendingGameOrganizationJoinFlowCodes || props.buildOverrides !== merged.buildOverrides || props.activityParticipants !== merged.activityParticipants || props.quests !== merged.quests || props.isFetchingCurrentQuests !== merged.isFetchingCurrentQuests || props.applicationAssetFetchingIds !== merged.applicationAssetFetchingIds || props.experimentEmbeds !== merged.experimentEmbeds || props.conjureProjectLinkEmbeds !== merged.conjureProjectLinkEmbeds) && codedLinks.some((item) => {
        ({ type, code } = item);
        if (CodedLink.CodedLinkType.BUILD_OVERRIDE !== type) {
          if (CodedLink.CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
            if (CodedLink.CodedLinkType.EXPERIMENT === type) {
              const experimentFromEmbedURL = ExperimentEmbedUtils.getExperimentFromEmbedURL(code);
              let tmp61 = null != experimentFromEmbedURL;
              if (tmp61) {
                const legacyExperiments = props.experimentEmbeds.legacyExperiments;
                let tmp63;
                if (legacyExperiments != null) {
                  tmp63 = legacyExperiments[experimentFromEmbedURL];
                }
                const legacyExperiments2 = merged.experimentEmbeds.legacyExperiments;
                let tmp65;
                if (legacyExperiments2 != null) {
                  tmp65 = legacyExperiments2[experimentFromEmbedURL];
                }
                let tmp66 = tmp63 !== tmp65;
                if (!tmp66) {
                  const legacyOverridesInfo = props.experimentEmbeds.legacyOverridesInfo;
                  let tmp67;
                  if (legacyOverridesInfo != null) {
                    tmp67 = legacyOverridesInfo[experimentFromEmbedURL];
                  }
                  const legacyOverridesInfo2 = merged.experimentEmbeds.legacyOverridesInfo;
                  let tmp68;
                  if (legacyOverridesInfo2 != null) {
                    tmp68 = legacyOverridesInfo2[experimentFromEmbedURL];
                  }
                  tmp66 = tmp67 !== tmp68;
                }
                if (!tmp66) {
                  const apexExperiments = props.experimentEmbeds.apexExperiments;
                  let tmp69;
                  if (apexExperiments != null) {
                    tmp69 = apexExperiments[experimentFromEmbedURL];
                  }
                  const apexExperiments2 = merged.experimentEmbeds.apexExperiments;
                  let tmp70;
                  if (apexExperiments2 != null) {
                    tmp70 = apexExperiments2[experimentFromEmbedURL];
                  }
                  tmp66 = tmp69 !== tmp70;
                }
                if (!tmp66) {
                  const apexOverridesInfo = props.experimentEmbeds.apexOverridesInfo;
                  let tmp71;
                  if (apexOverridesInfo != null) {
                    tmp71 = apexOverridesInfo[experimentFromEmbedURL];
                  }
                  const apexOverridesInfo2 = merged.experimentEmbeds.apexOverridesInfo;
                  let tmp72;
                  if (apexOverridesInfo2 != null) {
                    tmp72 = apexOverridesInfo2[experimentFromEmbedURL];
                  }
                  tmp66 = tmp71 !== tmp72;
                }
                tmp61 = tmp66;
              }
              return tmp61;
            } else if (CodedLink.CodedLinkType.INVITE === type) {
              const invites3 = props.invites;
              value = invites3.get(code);
              const invites4 = merged.invites;
              const value7 = invites4.get(code);
              state = undefined;
              if (value != null) {
                state = value.state;
              }
              let state1;
              if (value7 != null) {
                state1 = value7.state;
              }
              let tmp56 = state !== state1;
              if (tmp56) {
                state2 = undefined;
                if (value7 != null) {
                  state2 = value7.state;
                }
                tmp56 = state2 !== constants.RESOLVING;
              }
              if (!tmp56) {
                tmp56 = props.applicationAssetFetchingIds !== merged.applicationAssetFetchingIds;
              }
              return tmp56;
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
              let tmp46 = state3 !== state4;
              if (tmp46) {
                let state5;
                if (value9 != null) {
                  state5 = value9.state;
                }
                tmp46 = state5 !== GuildTemplateStates.RESOLVING;
              }
              return tmp46;
            } else {
              if (CodedLink.CodedLinkType.EVENT !== type) {
                if (CodedLink.CodedLinkType.CHANNEL_LINK !== type) {
                  if (CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE === type) {
                    const invalidAppDirectoryEmbedApplicationIds = props.invalidAppDirectoryEmbedApplicationIds;
                    const invalidAppDirectoryEmbedApplicationIds2 = merged.invalidAppDirectoryEmbedApplicationIds;
                    const hasItem = invalidAppDirectoryEmbedApplicationIds.has(code);
                    let tmp38 = props.appDirectoryEmbedApplications[code] !== merged.appDirectoryEmbedApplications[code];
                    if (!tmp38) {
                      tmp38 = hasItem !== invalidAppDirectoryEmbedApplicationIds2.has(code);
                    }
                    if (!tmp38) {
                      tmp38 = props.appDirectoryEmbedApplicationFetchStates[code] !== merged.appDirectoryEmbedApplicationFetchStates[code];
                    }
                    return tmp38;
                  } else if (CodedLink.CodedLinkType.ACTIVITY_BOOKMARK === type) {
                    return props.activityParticipants !== merged.activityParticipants || props.invalidApplicationIds !== merged.invalidApplicationIds || props.applicationAssetFetchingIds !== merged.applicationAssetFetchingIds;
                  } else if (CodedLink.CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
                    const invites = props.invites;
                    const value10 = invites.get(code);
                    const invites2 = merged.invites;
                    const value11 = invites2.get(code);
                    let tmp25 = props.activityParticipants !== merged.activityParticipants || props.invalidApplicationIds !== merged.invalidApplicationIds || props.applicationAssetFetchingIds !== merged.applicationAssetFetchingIds;
                    if (!tmp25) {
                      let state6;
                      if (value10 != null) {
                        state6 = value10.state;
                      }
                      let state7;
                      if (value11 != null) {
                        state7 = value11.state;
                      }
                      let tmp29 = state6 !== state7;
                      if (tmp29) {
                        let state8;
                        if (value11 != null) {
                          state8 = value11.state;
                        }
                        tmp29 = state8 !== constants.RESOLVING;
                      }
                      tmp25 = tmp29;
                    }
                    return tmp25;
                  } else {
                    if (CodedLink.CodedLinkType.GUILD_PRODUCT !== type) {
                      if (CodedLink.CodedLinkType.SERVER_SHOP !== type) {
                        if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                          if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                            if (CodedLink.CodedLinkType.QUESTS_EMBED === type) {
                              return props.quests !== merged.quests || props.isFetchingCurrentQuests !== tmp19.isFetchingCurrentQuests;
                            } else {
                              if (CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                                if (CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                                  if (CodedLink.CodedLinkType.APP_OAUTH2_LINK === type) {
                                    return props.applicationAssetFetchingIds !== merged.applicationAssetFetchingIds || props.invalidApplicationIds !== tmp17.invalidApplicationIds;
                                  } else {
                                    if (CodedLink.CodedLinkType.COLLECTIBLES_SHOP !== type) {
                                      if (CodedLink.CodedLinkType.GAME_PROFILE !== type) {
                                        if (CodedLink.CodedLinkType.GAME_SERVER_SHARE !== type) {
                                          if (CodedLink.CodedLinkType.USER_PROFILE !== type) {
                                            if (CodedLink.CodedLinkType.USER_WISHLIST !== type) {
                                              if (CodedLink.CodedLinkType.CONJURE_PROJECT === type) {
                                                return props.conjureProjectLinkEmbeds[code] !== merged.conjureProjectLinkEmbeds[code];
                                              } else if (CodedLink.CodedLinkType.GAME_ORGANIZATION_INVITE === type) {
                                                const gameOrganizationInvites = merged.gameOrganizationInvites;
                                                const value12 = gameOrganizationInvites.get(code);
                                                const gameOrganizationInvites2 = props.gameOrganizationInvites;
                                                let tmp7 = gameOrganizationInvites2.get(code) !== value12;
                                                if (!tmp7) {
                                                  const pendingGameOrganizationJoinFlowCodes = props.pendingGameOrganizationJoinFlowCodes;
                                                  const pendingGameOrganizationJoinFlowCodes2 = merged.pendingGameOrganizationJoinFlowCodes;
                                                  const hasItem1 = pendingGameOrganizationJoinFlowCodes.has(code);
                                                  let tmp9 = hasItem1 !== pendingGameOrganizationJoinFlowCodes2.has(code);
                                                  if (!tmp9) {
                                                    let state9;
                                                    if (value12 != null) {
                                                      state9 = value12.state;
                                                    }
                                                    let tmp13 = state9 === constants.RESOLVED;
                                                    if (tmp13) {
                                                      const joinedGameOrganizationGuildIds = props.joinedGameOrganizationGuildIds;
                                                      const joinedGameOrganizationGuildIds2 = merged.joinedGameOrganizationGuildIds;
                                                      const hasItem2 = joinedGameOrganizationGuildIds.includes(value12.guildId);
                                                      tmp13 = hasItem2 !== joinedGameOrganizationGuildIds2.includes(value12.guildId);
                                                    }
                                                    tmp9 = tmp13;
                                                  }
                                                  tmp7 = tmp9;
                                                }
                                                return tmp7;
                                              } else {
                                                const _Error = Error;
                                                const _HermesInternal = HermesInternal;
                                                throw Error("Unknown coded link type: " + type);
                                              }
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
        let state10;
        if (props.buildOverrides[code] != null) {
          state10 = tmp73.state;
        }
        let state11;
        if (merged.buildOverrides[code] != null) {
          state11 = tmp74.state;
        }
        return state10 !== state11;
      });
      const tmp2 = (props.invites !== merged.invites || props.appDirectoryEmbedApplications !== merged.appDirectoryEmbedApplications || props.invalidAppDirectoryEmbedApplicationIds !== merged.invalidAppDirectoryEmbedApplicationIds || props.invalidApplicationIds !== merged.invalidApplicationIds || props.appDirectoryEmbedApplicationFetchStates !== merged.appDirectoryEmbedApplicationFetchStates || props.guildTemplates !== merged.guildTemplates || props.gameOrganizationInvites !== merged.gameOrganizationInvites || props.joinedGameOrganizationGuildIds !== merged.joinedGameOrganizationGuildIds || props.pendingGameOrganizationJoinFlowCodes !== merged.pendingGameOrganizationJoinFlowCodes || props.buildOverrides !== merged.buildOverrides || props.activityParticipants !== merged.activityParticipants || props.quests !== merged.quests || props.isFetchingCurrentQuests !== merged.isFetchingCurrentQuests || props.applicationAssetFetchingIds !== merged.applicationAssetFetchingIds || props.experimentEmbeds !== merged.experimentEmbeds || props.conjureProjectLinkEmbeds !== merged.conjureProjectLinkEmbeds) && codedLinks.some((item) => {
        ({ type, code } = item);
        if (CodedLink.CodedLinkType.BUILD_OVERRIDE !== type) {
          if (CodedLink.CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
            if (CodedLink.CodedLinkType.EXPERIMENT === type) {
              const experimentFromEmbedURL = ExperimentEmbedUtils.getExperimentFromEmbedURL(code);
              let tmp61 = null != experimentFromEmbedURL;
              if (tmp61) {
                const legacyExperiments = props.experimentEmbeds.legacyExperiments;
                let tmp63;
                if (legacyExperiments != null) {
                  tmp63 = legacyExperiments[experimentFromEmbedURL];
                }
                const legacyExperiments2 = merged.experimentEmbeds.legacyExperiments;
                let tmp65;
                if (legacyExperiments2 != null) {
                  tmp65 = legacyExperiments2[experimentFromEmbedURL];
                }
                let tmp66 = tmp63 !== tmp65;
                if (!tmp66) {
                  const legacyOverridesInfo = props.experimentEmbeds.legacyOverridesInfo;
                  let tmp67;
                  if (legacyOverridesInfo != null) {
                    tmp67 = legacyOverridesInfo[experimentFromEmbedURL];
                  }
                  const legacyOverridesInfo2 = merged.experimentEmbeds.legacyOverridesInfo;
                  let tmp68;
                  if (legacyOverridesInfo2 != null) {
                    tmp68 = legacyOverridesInfo2[experimentFromEmbedURL];
                  }
                  tmp66 = tmp67 !== tmp68;
                }
                if (!tmp66) {
                  const apexExperiments = props.experimentEmbeds.apexExperiments;
                  let tmp69;
                  if (apexExperiments != null) {
                    tmp69 = apexExperiments[experimentFromEmbedURL];
                  }
                  const apexExperiments2 = merged.experimentEmbeds.apexExperiments;
                  let tmp70;
                  if (apexExperiments2 != null) {
                    tmp70 = apexExperiments2[experimentFromEmbedURL];
                  }
                  tmp66 = tmp69 !== tmp70;
                }
                if (!tmp66) {
                  const apexOverridesInfo = props.experimentEmbeds.apexOverridesInfo;
                  let tmp71;
                  if (apexOverridesInfo != null) {
                    tmp71 = apexOverridesInfo[experimentFromEmbedURL];
                  }
                  const apexOverridesInfo2 = merged.experimentEmbeds.apexOverridesInfo;
                  let tmp72;
                  if (apexOverridesInfo2 != null) {
                    tmp72 = apexOverridesInfo2[experimentFromEmbedURL];
                  }
                  tmp66 = tmp71 !== tmp72;
                }
                tmp61 = tmp66;
              }
              return tmp61;
            } else if (CodedLink.CodedLinkType.INVITE === type) {
              const invites3 = props.invites;
              value = invites3.get(code);
              const invites4 = merged.invites;
              const value7 = invites4.get(code);
              state = undefined;
              if (value != null) {
                state = value.state;
              }
              let state1;
              if (value7 != null) {
                state1 = value7.state;
              }
              let tmp56 = state !== state1;
              if (tmp56) {
                state2 = undefined;
                if (value7 != null) {
                  state2 = value7.state;
                }
                tmp56 = state2 !== constants.RESOLVING;
              }
              if (!tmp56) {
                tmp56 = props.applicationAssetFetchingIds !== merged.applicationAssetFetchingIds;
              }
              return tmp56;
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
              let tmp46 = state3 !== state4;
              if (tmp46) {
                let state5;
                if (value9 != null) {
                  state5 = value9.state;
                }
                tmp46 = state5 !== GuildTemplateStates.RESOLVING;
              }
              return tmp46;
            } else {
              if (CodedLink.CodedLinkType.EVENT !== type) {
                if (CodedLink.CodedLinkType.CHANNEL_LINK !== type) {
                  if (CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE === type) {
                    const invalidAppDirectoryEmbedApplicationIds = props.invalidAppDirectoryEmbedApplicationIds;
                    const invalidAppDirectoryEmbedApplicationIds2 = merged.invalidAppDirectoryEmbedApplicationIds;
                    const hasItem = invalidAppDirectoryEmbedApplicationIds.has(code);
                    let tmp38 = props.appDirectoryEmbedApplications[code] !== merged.appDirectoryEmbedApplications[code];
                    if (!tmp38) {
                      tmp38 = hasItem !== invalidAppDirectoryEmbedApplicationIds2.has(code);
                    }
                    if (!tmp38) {
                      tmp38 = props.appDirectoryEmbedApplicationFetchStates[code] !== merged.appDirectoryEmbedApplicationFetchStates[code];
                    }
                    return tmp38;
                  } else if (CodedLink.CodedLinkType.ACTIVITY_BOOKMARK === type) {
                    return props.activityParticipants !== merged.activityParticipants || props.invalidApplicationIds !== merged.invalidApplicationIds || props.applicationAssetFetchingIds !== merged.applicationAssetFetchingIds;
                  } else if (CodedLink.CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
                    const invites = props.invites;
                    const value10 = invites.get(code);
                    const invites2 = merged.invites;
                    const value11 = invites2.get(code);
                    let tmp25 = props.activityParticipants !== merged.activityParticipants || props.invalidApplicationIds !== merged.invalidApplicationIds || props.applicationAssetFetchingIds !== merged.applicationAssetFetchingIds;
                    if (!tmp25) {
                      let state6;
                      if (value10 != null) {
                        state6 = value10.state;
                      }
                      let state7;
                      if (value11 != null) {
                        state7 = value11.state;
                      }
                      let tmp29 = state6 !== state7;
                      if (tmp29) {
                        let state8;
                        if (value11 != null) {
                          state8 = value11.state;
                        }
                        tmp29 = state8 !== constants.RESOLVING;
                      }
                      tmp25 = tmp29;
                    }
                    return tmp25;
                  } else {
                    if (CodedLink.CodedLinkType.GUILD_PRODUCT !== type) {
                      if (CodedLink.CodedLinkType.SERVER_SHOP !== type) {
                        if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                          if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                            if (CodedLink.CodedLinkType.QUESTS_EMBED === type) {
                              return props.quests !== merged.quests || props.isFetchingCurrentQuests !== tmp19.isFetchingCurrentQuests;
                            } else {
                              if (CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                                if (CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                                  if (CodedLink.CodedLinkType.APP_OAUTH2_LINK === type) {
                                    return props.applicationAssetFetchingIds !== merged.applicationAssetFetchingIds || props.invalidApplicationIds !== tmp17.invalidApplicationIds;
                                  } else {
                                    if (CodedLink.CodedLinkType.COLLECTIBLES_SHOP !== type) {
                                      if (CodedLink.CodedLinkType.GAME_PROFILE !== type) {
                                        if (CodedLink.CodedLinkType.GAME_SERVER_SHARE !== type) {
                                          if (CodedLink.CodedLinkType.USER_PROFILE !== type) {
                                            if (CodedLink.CodedLinkType.USER_WISHLIST !== type) {
                                              if (CodedLink.CodedLinkType.CONJURE_PROJECT === type) {
                                                return props.conjureProjectLinkEmbeds[code] !== merged.conjureProjectLinkEmbeds[code];
                                              } else if (CodedLink.CodedLinkType.GAME_ORGANIZATION_INVITE === type) {
                                                const gameOrganizationInvites = merged.gameOrganizationInvites;
                                                const value12 = gameOrganizationInvites.get(code);
                                                const gameOrganizationInvites2 = props.gameOrganizationInvites;
                                                let tmp7 = gameOrganizationInvites2.get(code) !== value12;
                                                if (!tmp7) {
                                                  const pendingGameOrganizationJoinFlowCodes = props.pendingGameOrganizationJoinFlowCodes;
                                                  const pendingGameOrganizationJoinFlowCodes2 = merged.pendingGameOrganizationJoinFlowCodes;
                                                  const hasItem1 = pendingGameOrganizationJoinFlowCodes.has(code);
                                                  let tmp9 = hasItem1 !== pendingGameOrganizationJoinFlowCodes2.has(code);
                                                  if (!tmp9) {
                                                    let state9;
                                                    if (value12 != null) {
                                                      state9 = value12.state;
                                                    }
                                                    let tmp13 = state9 === constants.RESOLVED;
                                                    if (tmp13) {
                                                      const joinedGameOrganizationGuildIds = props.joinedGameOrganizationGuildIds;
                                                      const joinedGameOrganizationGuildIds2 = merged.joinedGameOrganizationGuildIds;
                                                      const hasItem2 = joinedGameOrganizationGuildIds.includes(value12.guildId);
                                                      tmp13 = hasItem2 !== joinedGameOrganizationGuildIds2.includes(value12.guildId);
                                                    }
                                                    tmp9 = tmp13;
                                                  }
                                                  tmp7 = tmp9;
                                                }
                                                return tmp7;
                                              } else {
                                                const _Error = Error;
                                                const _HermesInternal = HermesInternal;
                                                throw Error("Unknown coded link type: " + type);
                                              }
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
        let state10;
        if (props.buildOverrides[code] != null) {
          state10 = tmp73.state;
        }
        let state11;
        if (merged.buildOverrides[code] != null) {
          state11 = tmp74.state;
        }
        return state10 !== state11;
      });
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
    return 0 !== found.length && found.some((url) => {
      const mediaPostEmbedChannelId = MediaPostEmbedUtils.getMediaPostEmbedChannelId(url.url);
      let tmp2 = null != mediaPostEmbedChannelId;
      if (tmp2) {
        tmp2 = props.mediaPostPreviewEmbeds[mediaPostEmbedChannelId] !== merged.mediaPostPreviewEmbeds[mediaPostEmbedChannelId];
      }
      return tmp2;
    });
  }
};