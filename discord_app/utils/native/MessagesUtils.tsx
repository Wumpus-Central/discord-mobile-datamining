// discord_app/utils/native/MessagesUtils.tsx
import set from "set" /* 2 */;
import GUILD_TEMPLATES_MEMBER_COUNT_PROMOTION_THRESHOLD from "GUILD_TEMPLATES_MEMBER_COUNT_PROMOTION_THRESHOLD" /* 7289 */;
import ME from "ME" /* 676 */;

({ InviteStates: obj1, MessageEmbedTypes: c3 } = ME);
const GuildTemplateStates = GUILD_TEMPLATES_MEMBER_COUNT_PROMOTION_THRESHOLD.GuildTemplateStates;
const result = set.fileFinishedImporting("utils/native/MessagesUtils.tsx");

export default {
  messageAuthorActivitiesChanged(activity, props, props2) {
    let tmp = props.messageAuthorActivities !== props2.messageAuthorActivities;
    if (tmp) {
      tmp = null != activity.activity;
    }
    if (tmp) {
      tmp = props.messageAuthorActivities[activity.author.id] !== props2.messageAuthorActivities[activity.author.id];
    }
    return tmp;
  },
  codedLinksChanged(codedLinks, addResult, props) {
    closure_0 = addResult;
    closure_1 = props;
    let tmp = 0 !== codedLinks.codedLinks.length;
    if (tmp) {
      let someResult = addResult.invites !== props.invites || addResult.appDirectoryEmbedApplications !== props.appDirectoryEmbedApplications || addResult.invalidAppDirectoryEmbedApplicationIds !== props.invalidAppDirectoryEmbedApplicationIds || addResult.invalidApplicationIds !== props.invalidApplicationIds || addResult.appDirectoryEmbedApplicationFetchStates !== props.appDirectoryEmbedApplicationFetchStates || addResult.guildTemplates !== props.guildTemplates || addResult.buildOverrides !== props.buildOverrides || addResult.activityParticipants !== props.activityParticipants || addResult.quests !== props.quests || addResult.isFetchingCurrentQuests !== props.isFetchingCurrentQuests || addResult.applicationAssetFetchingIds !== props.applicationAssetFetchingIds || addResult.experimentEmbeds !== props.experimentEmbeds;
      if (someResult) {
        codedLinks = codedLinks.codedLinks;
        someResult = codedLinks.some((arg0) => {
          ({ type, code } = arg0);
          if (addResult(props[2]).CodedLinkType.BUILD_OVERRIDE !== type) {
            if (tmp(tmp2[2]).CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
              if (tmp(tmp2[2]).CodedLinkType.EXPERIMENT === type) {
                const experimentFromEmbedURL = tmp(tmp2[3]).getExperimentFromEmbedURL(code);
                let tmp48 = null != experimentFromEmbedURL;
                if (tmp48) {
                  const legacyExperiments = addResult.experimentEmbeds.legacyExperiments;
                  let tmp50;
                  if (legacyExperiments != null) {
                    tmp50 = legacyExperiments[experimentFromEmbedURL];
                  }
                  const legacyExperiments2 = props.experimentEmbeds.legacyExperiments;
                  let tmp52;
                  if (legacyExperiments2 != null) {
                    tmp52 = legacyExperiments2[experimentFromEmbedURL];
                  }
                  let tmp53 = tmp50 !== tmp52;
                  if (!tmp53) {
                    const legacyOverridesInfo = tmp49.experimentEmbeds.legacyOverridesInfo;
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
                    const apexExperiments = tmp49.experimentEmbeds.apexExperiments;
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
                    const apexOverridesInfo = tmp49.experimentEmbeds.apexOverridesInfo;
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
              } else if (tmp(tmp2[2]).CodedLinkType.INVITE === type) {
                const invites3 = addResult.invites;
                let value = invites3.get(code);
                const invites4 = props.invites;
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
                  tmp43 = state2 !== closure_1_2.RESOLVING;
                }
                if (!tmp43) {
                  tmp43 = addResult.applicationAssetFetchingIds !== props.applicationAssetFetchingIds;
                }
                return tmp43;
              } else if (tmp(tmp2[2]).CodedLinkType.TEMPLATE === type) {
                const guildTemplates = addResult.guildTemplates;
                const value1 = guildTemplates.get(code);
                const guildTemplates2 = props.guildTemplates;
                const value2 = guildTemplates2.get(code);
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
                  tmp33 = state5 !== closure_1_4.RESOLVING;
                }
                return tmp33;
              } else {
                if (tmp(tmp2[2]).CodedLinkType.EVENT !== type) {
                  if (tmp(tmp2[2]).CodedLinkType.CHANNEL_LINK !== type) {
                    if (tmp(tmp2[2]).CodedLinkType.APP_DIRECTORY_PROFILE === type) {
                      const invalidAppDirectoryEmbedApplicationIds = addResult.invalidAppDirectoryEmbedApplicationIds;
                      const invalidAppDirectoryEmbedApplicationIds2 = props.invalidAppDirectoryEmbedApplicationIds;
                      const hasItem = invalidAppDirectoryEmbedApplicationIds.has(code);
                      let tmp25 = addResult.appDirectoryEmbedApplications[code] !== props.appDirectoryEmbedApplications[code];
                      if (!tmp25) {
                        tmp25 = hasItem !== invalidAppDirectoryEmbedApplicationIds2.has(code);
                      }
                      if (!tmp25) {
                        tmp25 = addResult.appDirectoryEmbedApplicationFetchStates[code] !== props.appDirectoryEmbedApplicationFetchStates[code];
                      }
                      return tmp25;
                    } else if (tmp(tmp2[2]).CodedLinkType.ACTIVITY_BOOKMARK === type) {
                      return addResult.activityParticipants !== props.activityParticipants || addResult.invalidApplicationIds !== props.invalidApplicationIds || addResult.applicationAssetFetchingIds !== props.applicationAssetFetchingIds;
                    } else if (tmp(tmp2[2]).CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
                      const invites = addResult.invites;
                      const value3 = invites.get(code);
                      const invites2 = props.invites;
                      const value4 = invites2.get(code);
                      let tmp12 = addResult.activityParticipants !== props.activityParticipants || tmp8.invalidApplicationIds !== tmp10.invalidApplicationIds || tmp8.applicationAssetFetchingIds !== tmp10.applicationAssetFetchingIds;
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
                          tmp16 = state8 !== closure_1_2.RESOLVING;
                        }
                        tmp12 = tmp16;
                      }
                      return tmp12;
                    } else {
                      if (tmp(tmp2[2]).CodedLinkType.GUILD_PRODUCT !== type) {
                        if (tmp(tmp2[2]).CodedLinkType.SERVER_SHOP !== type) {
                          if (tmp(tmp2[2]).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                            if (tmp(tmp2[2]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                              if (tmp(tmp2[2]).CodedLinkType.QUESTS_EMBED === type) {
                                return addResult.quests !== props.quests || addResult.isFetchingCurrentQuests !== tmp6.isFetchingCurrentQuests;
                              } else {
                                if (tmp(tmp2[2]).CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                                  if (tmp(tmp2[2]).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                                    if (tmp(tmp2[2]).CodedLinkType.APP_OAUTH2_LINK === type) {
                                      return addResult.applicationAssetFetchingIds !== props.applicationAssetFetchingIds || addResult.invalidApplicationIds !== tmp4.invalidApplicationIds;
                                    } else {
                                      if (tmp(tmp2[2]).CodedLinkType.COLLECTIBLES_SHOP !== type) {
                                        if (tmp(tmp2[2]).CodedLinkType.GAME_PROFILE !== type) {
                                          if (tmp(tmp2[2]).CodedLinkType.GAME_SERVER_SHARE !== type) {
                                            if (tmp(tmp2[2]).CodedLinkType.USER_PROFILE !== type) {
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
          if (addResult.buildOverrides[code] != null) {
            state9 = tmp60.state;
          }
          let state10;
          if (props.buildOverrides[code] != null) {
            state10 = tmp61.state;
          }
          return state9 !== state10;
        });
      }
      tmp = someResult;
    }
    return tmp;
  },
  giftCodesChanged(giftCodes, addResult, props) {
    closure_0 = addResult;
    closure_1 = props;
    let someResult = 0 !== giftCodes.giftCodes.length;
    if (someResult) {
      giftCodes = giftCodes.giftCodes;
      someResult = giftCodes.some((arg0) => {
        const resolvedGiftCodes = addResult.resolvedGiftCodes;
        const resolvedGiftCodes2 = props.resolvedGiftCodes;
        const hasItem = resolvedGiftCodes.includes(arg0);
        const resolvingGiftCodes = addResult.resolvingGiftCodes;
        const hasItem1 = resolvedGiftCodes2.includes(arg0);
        const resolvingGiftCodes2 = props.resolvingGiftCodes;
        const hasItem2 = resolvingGiftCodes.includes(arg0);
        const acceptingGiftCodes = addResult.acceptingGiftCodes;
        const hasItem3 = resolvingGiftCodes2.includes(arg0);
        const acceptingGiftCodes2 = props.acceptingGiftCodes;
        const hasItem4 = acceptingGiftCodes.includes(arg0);
        return true;
      });
    }
    return someResult;
  },
  mediaPostPreviewEmbedsChanged(embeds, addResult, props) {
    closure_0 = addResult;
    closure_1 = props;
    embeds = embeds.embeds;
    const found = embeds.filter((type) => type.type === constants.POST_PREVIEW);
    return 0 !== found.length && found.some((url) => {
      const mediaPostEmbedChannelId = addResult(props[4]).getMediaPostEmbedChannelId(url.url);
      let tmp2 = null != mediaPostEmbedChannelId;
      if (tmp2) {
        tmp2 = addResult.mediaPostPreviewEmbeds[mediaPostEmbedChannelId] !== props.mediaPostPreviewEmbeds[mediaPostEmbedChannelId];
      }
      return tmp2;
    });
  }
};