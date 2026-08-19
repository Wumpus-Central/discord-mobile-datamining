// === Module 11143: ? ===

// Module 11143
import obj132 from "obj132" /* 2 */;
import GUILD_TEMPLATES_MEMBER_COUNT_PROMOTION_THRESHOLD from "GUILD_TEMPLATES_MEMBER_COUNT_PROMOTION_THRESHOLD" /* 7289 */;
import ME from "ME" /* 676 */;

({ InviteStates: obj1, MessageEmbedTypes: c3 } = ME);
const GuildTemplateStates = GUILD_TEMPLATES_MEMBER_COUNT_PROMOTION_THRESHOLD.GuildTemplateStates;
const result = obj132.fileFinishedImporting("utils/native/MessagesUtils.tsx");

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
  codedLinksChanged(codedLinks, props, props2) {
    closure_0 = props;
    closure_1 = props2;
    let tmp = 0 !== codedLinks.codedLinks.length;
    if (tmp) {
      let someResult = props.invites !== props2.invites || props.appDirectoryEmbedApplications !== props2.appDirectoryEmbedApplications || props.invalidAppDirectoryEmbedApplicationIds !== props2.invalidAppDirectoryEmbedApplicationIds || props.invalidApplicationIds !== props2.invalidApplicationIds || props.appDirectoryEmbedApplicationFetchStates !== props2.appDirectoryEmbedApplicationFetchStates || props.guildTemplates !== props2.guildTemplates || props.buildOverrides !== props2.buildOverrides || props.activityParticipants !== props2.activityParticipants || props.quests !== props2.quests || props.isFetchingCurrentQuests !== props2.isFetchingCurrentQuests || props.applicationAssetFetchingIds !== props2.applicationAssetFetchingIds || props.experimentEmbeds !== props2.experimentEmbeds;
      if (someResult) {
        codedLinks = codedLinks.codedLinks;
        someResult = codedLinks.some((item, index) => {
          ({ type, code } = item);
          if (props(props2[2]).CodedLinkType.BUILD_OVERRIDE !== type) {
            if (props(props2[2]).CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
              if (props(props2[2]).CodedLinkType.EXPERIMENT === type) {
                const experimentFromEmbedURL = props(props2[3]).getExperimentFromEmbedURL(code);
                let tmp48 = null != experimentFromEmbedURL;
                if (tmp48) {
                  const legacyExperiments = props.experimentEmbeds.legacyExperiments;
                  let tmp50;
                  if (legacyExperiments != null) {
                    tmp50 = legacyExperiments[experimentFromEmbedURL];
                  }
                  const legacyExperiments2 = props2.experimentEmbeds.legacyExperiments;
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
                    const legacyOverridesInfo2 = props2.experimentEmbeds.legacyOverridesInfo;
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
                    const apexExperiments2 = props2.experimentEmbeds.apexExperiments;
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
                    const apexOverridesInfo2 = props2.experimentEmbeds.apexOverridesInfo;
                    let tmp59;
                    if (apexOverridesInfo2 != null) {
                      tmp59 = apexOverridesInfo2[experimentFromEmbedURL];
                    }
                    tmp53 = tmp58 !== tmp59;
                  }
                  tmp48 = tmp53;
                }
                return tmp48;
              } else if (props(props2[2]).CodedLinkType.INVITE === type) {
                const invites3 = props.invites;
                invites3.get(code);
                const invites4 = props2.invites;
                const value = invites4.get(code);
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
                  tmp43 = props.applicationAssetFetchingIds !== props2.applicationAssetFetchingIds;
                }
                return tmp43;
              } else if (props(props2[2]).CodedLinkType.TEMPLATE === type) {
                const guildTemplates = props.guildTemplates;
                const value1 = guildTemplates.get(code);
                const guildTemplates2 = props2.guildTemplates;
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
                  tmp33 = state5 !== GuildTemplateStates.RESOLVING;
                }
                return tmp33;
              } else {
                if (props(props2[2]).CodedLinkType.EVENT !== type) {
                  if (props(props2[2]).CodedLinkType.CHANNEL_LINK !== type) {
                    if (props(props2[2]).CodedLinkType.APP_DIRECTORY_PROFILE === type) {
                      const invalidAppDirectoryEmbedApplicationIds = props.invalidAppDirectoryEmbedApplicationIds;
                      const invalidAppDirectoryEmbedApplicationIds2 = props2.invalidAppDirectoryEmbedApplicationIds;
                      const hasItem = invalidAppDirectoryEmbedApplicationIds.has(code);
                      let tmp25 = props.appDirectoryEmbedApplications[code] !== props2.appDirectoryEmbedApplications[code];
                      if (!tmp25) {
                        tmp25 = hasItem !== invalidAppDirectoryEmbedApplicationIds2.has(code);
                      }
                      if (!tmp25) {
                        tmp25 = props.appDirectoryEmbedApplicationFetchStates[code] !== props2.appDirectoryEmbedApplicationFetchStates[code];
                      }
                      return tmp25;
                    } else if (props(props2[2]).CodedLinkType.ACTIVITY_BOOKMARK === type) {
                      return props.activityParticipants !== props2.activityParticipants || props.invalidApplicationIds !== props2.invalidApplicationIds || props.applicationAssetFetchingIds !== props2.applicationAssetFetchingIds;
                    } else if (props(props2[2]).CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
                      const invites = props.invites;
                      const value3 = invites.get(code);
                      const invites2 = props2.invites;
                      const value4 = invites2.get(code);
                      let tmp12 = props.activityParticipants !== props2.activityParticipants || props.invalidApplicationIds !== props2.invalidApplicationIds || props.applicationAssetFetchingIds !== props2.applicationAssetFetchingIds;
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
                      if (props(props2[2]).CodedLinkType.GUILD_PRODUCT !== type) {
                        if (props(props2[2]).CodedLinkType.SERVER_SHOP !== type) {
                          if (props(props2[2]).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                            if (props(props2[2]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                              if (props(props2[2]).CodedLinkType.QUESTS_EMBED === type) {
                                return props.quests !== props2.quests || props.isFetchingCurrentQuests !== tmp6.isFetchingCurrentQuests;
                              } else {
                                if (props(props2[2]).CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                                  if (props(props2[2]).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                                    if (props(props2[2]).CodedLinkType.APP_OAUTH2_LINK === type) {
                                      return props.applicationAssetFetchingIds !== props2.applicationAssetFetchingIds || props.invalidApplicationIds !== tmp4.invalidApplicationIds;
                                    } else {
                                      if (props(props2[2]).CodedLinkType.COLLECTIBLES_SHOP !== type) {
                                        if (props(props2[2]).CodedLinkType.GAME_PROFILE !== type) {
                                          if (props(props2[2]).CodedLinkType.GAME_SERVER_SHARE !== type) {
                                            if (props(props2[2]).CodedLinkType.USER_PROFILE !== type) {
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
          if (props2.buildOverrides[code] != null) {
            state10 = tmp61.state;
          }
          return state9 !== state10;
        });
      }
      tmp = someResult;
    }
    return tmp;
  },
  giftCodesChanged(giftCodes, props, props2) {
    closure_0 = props;
    closure_1 = props2;
    let someResult = 0 !== giftCodes.giftCodes.length;
    if (someResult) {
      giftCodes = giftCodes.giftCodes;
      someResult = giftCodes.some((item, index) => {
        const resolvedGiftCodes = props.resolvedGiftCodes;
        const resolvedGiftCodes2 = props2.resolvedGiftCodes;
        const hasItem = resolvedGiftCodes.includes(item);
        const resolvingGiftCodes = props.resolvingGiftCodes;
        const hasItem1 = resolvedGiftCodes2.includes(item);
        const resolvingGiftCodes2 = props2.resolvingGiftCodes;
        const hasItem2 = resolvingGiftCodes.includes(item);
        const acceptingGiftCodes = props.acceptingGiftCodes;
        const hasItem3 = resolvingGiftCodes2.includes(item);
        const acceptingGiftCodes2 = props2.acceptingGiftCodes;
        const hasItem4 = acceptingGiftCodes.includes(item);
        return true;
      });
    }
    return someResult;
  },
  mediaPostPreviewEmbedsChanged(embeds, props, props2) {
    closure_0 = props;
    closure_1 = props2;
    embeds = embeds.embeds;
    const found = embeds.filter((item, index) => item.type === constants.POST_PREVIEW);
    return 0 !== found.length && found.some((item, index) => {
      const mediaPostEmbedChannelId = props(props2[4]).getMediaPostEmbedChannelId(item.url);
      let tmp2 = null != mediaPostEmbedChannelId;
      if (tmp2) {
        tmp2 = props.mediaPostPreviewEmbeds[mediaPostEmbedChannelId] !== props2.mediaPostPreviewEmbeds[mediaPostEmbedChannelId];
      }
      return tmp2;
    });
  }
};