// === Module 13358: ActivityRichPresenceInviteEmbed ===

// Module 13358 (ActivityRichPresenceInviteEmbed)
import _modDef2882 from "module_2882" /* 2882 */;
import isInviteActiveDefault from "isInviteActive" /* 11884 */;
import getCurrentUserPresenceActivityDefault from "getCurrentUserPresenceActivity" /* 11891 */;
import getCoverImageFromActivityDefault from "getCoverImageFromActivity" /* 13365 */;
import getRequestToStreamCTAAndIsDisabledDefault from "getRequestToStreamCTAAndIsDisabled" /* 13371 */;
import ApplicationStore from "ApplicationStore" /* 4864 */;
import SpotifyStore from "SpotifyStore" /* 5361 */;
import UserRecord from "UserRecord" /* 1385 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GamePartyStore from "GamePartyStore" /* 13360 */;
import LocalActivityStore from "LocalActivityStore" /* 11591 */;
import MessageStore from "MessageStore" /* 4857 */;
import PresenceStore from "PresenceStore" /* 4676 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5360 */;
import UserStore from "UserStore" /* 1371 */;
import ActivityLauncherStore from "ActivityLauncherStore" /* 11590 */;

const require = globalThis.__r;

const require = fn;
const SpotifyApplication = fn(13359).SpotifyApplication;
const Constants = fn(1074);
({ ActivityActionStates: closure_16, ActivityActionTypes: closure_17, ActivityTypes: closure_18 } = Constants);
const SpotifyConstants = fn(8458);
({ isSpotifyParty: closure_19, SPOTIFY_PLATFORM_NAME: closure_20 } = SpotifyConstants);
const EmbedDisplayType = { ACTIVE: "active", DEAD: "dead", DEAD_COMPACT: "dead_compact", BLOCKED: "blocked" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/ActivityRichPresenceInviteEmbed.tsx");

export { EmbedDisplayType };
export const createActivityRichPresenceInviteEmbed = function createActivityRichPresenceInviteEmbed(message, channel) {
  if (null != message.author) {
    if (null != message.activity) {
      if (null != channel) {
        const currentUser = UserStore.getCurrentUser();
        let intl = _require;
        let string2Result = dependencyMap;
        const obj = require("ContentClassificationVisibility");
        const application = message.application;
        let prop;
        if (application != null) {
          prop = application.content_classification;
        }
        let nsfwAllowed;
        if (currentUser != null) {
          nsfwAllowed = currentUser.nsfwAllowed;
        }
        const contentClassificationVisibility = obj.getContentClassificationVisibility(prop, channel, nsfwAllowed);
        if (intl(12071).ContentClassificationVisibility.DISPLAY === contentClassificationVisibility) {
          _require = channel;
          const application2 = message.application;
          let id1;
          const applicationFromMessage = intl(13362).getApplicationFromMessage(message);
          if (application2 != null) {
            id1 = application2.id;
          }
          let application1 = null;
          if (null != id1) {
            application1 = ApplicationStore.getApplication(id1);
          }
          let tmp14 = null == application1 && null != id1;
          if (tmp14) {
            tmp14 = false === ApplicationStore.isFetchingApplication(id1);
          }
          if (tmp14) {
            const application3 = intl(7266).fetchApplication(id1, false);
            const intlResult1 = intl(7266);
          }
          if (application1 == null) {
            application1 = applicationFromMessage;
          }
          const id2 = AuthenticationStore.getId();
          if (null != message.application) {
            let id = message.author.id;
            const activity = message.activity;
            let type;
            if (activity != null) {
              type = activity.type;
            }
            if (type === constants2.JOIN_REQUEST) {
              let recipientId = id2;
              if (id === id2) {
                recipientId = id2;
                if (channel.isPrivate()) {
                  recipientId = channel.getRecipientId();
                }
              }
              let tmp23 = recipientId;
            } else {
              const activity2 = message.activity;
              let type1;
              if (activity2 != null) {
                type1 = activity2.type;
              }
              tmp23 = id;
              if (type1 === tmp21.STREAM_REQUEST) {
                tmp23 = id2;
              }
            }
            id = PresenceStore;
            const applicationActivity = PresenceStore.getApplicationActivity(tmp23, message.application.id);
          } else {
            const findActivityResult = PresenceStore.findActivity(message.author.id, (type) => type.type === constants.LISTENING);
            let tmp27;
            if (null != application1) {
              const activity3 = message.activity;
              let type2;
              if (activity3 != null) {
                type2 = activity3.type;
              }
              if (type2 === constants2.STREAM_REQUEST) {
                let appIconSrc = null;
                if (null != application1.icon) {
                  appIconSrc = intl(12074).getAppIconSrc(application1.id, application1.icon, application1.bot);
                  const intlResult2 = intl(12074);
                }
                let string2 = intl(12074).getAppGradientColors(appIconSrc);
                const id3 = AuthenticationStore.getId();
                if (null != message.application) {
                  let getApplicationActivity = message.author.id;
                  const activity7 = message.activity;
                  let type3;
                  if (activity7 != null) {
                    type3 = activity7.type;
                  }
                  if (type3 === constants2.JOIN_REQUEST) {
                    let recipientId1 = id3;
                    if (getApplicationActivity === id3) {
                      recipientId1 = id3;
                      if (channel.isPrivate()) {
                        recipientId1 = channel.getRecipientId();
                      }
                    }
                    let tmp128 = recipientId1;
                  } else {
                    const activity8 = message.activity;
                    let type4;
                    if (activity8 != null) {
                      type4 = activity8.type;
                    }
                    tmp128 = getApplicationActivity;
                    if (type4 === constants2.STREAM_REQUEST) {
                      tmp128 = id3;
                    }
                  }
                  getApplicationActivity = PresenceStore.getApplicationActivity;
                  const applicationActivity1 = getApplicationActivity(tmp128, message.application.id);
                } else {
                  const findActivityResult1 = PresenceStore.findActivity(message.author.id, (type) => type.type === constants.LISTENING);
                  const tmp132 = isInviteActiveDefault(PresenceStore.findActivity(message.author.id, (type) => type.type === constants.LISTENING), message, application1.id);
                  const requestToStreamText = intl(13363).getRequestToStreamText(message, channel, AuthenticationStore.getId());
                  const tmp134 = getRequestToStreamCTAAndIsDisabledDefault(message);
                  const obj2 = { displayType: null, ctaButtonEnabled: null, ctaButtonText: null, ctaButtonIsLoading: false, footerLabel: null, gradientColors: null, headerText: null, iconSrc: null, isSpotifyParty: false, isPlatformSupported: true, maxPartySize: 0, partyMemberAvatarURIs: null, partySizeText: null, platformIconKeys: null, coverImageUrl: null, detailsText: null, subtitle: null, title: null };
                  obj2.displayType = tmp132 ? obj2.ACTIVE : obj2.DEAD;
                  obj2.ctaButtonEnabled = !tmp134.isDisabled;
                  obj2.ctaButtonText = tmp134.text;
                  obj2.gradientColors = string2;
                  intl = intl(1114).intl;
                  string2 = intl.string;
                  string2Result = string2(_modDef2882.nAyuPp);
                  obj2.headerText = string2Result;
                  obj2.iconSrc = appIconSrc;
                  appIconSrc = [];
                  obj2.platformIconKeys = appIconSrc;
                  obj2.subtitle = requestToStreamText;
                  application1 = application1.name;
                  obj2.title = application1;
                  const intlResult4 = intl(13363);
                  const tmp135 = tmp132 ? obj2.ACTIVE : obj2.DEAD;
                }
                const intlResult3 = intl(12074);
              } else {
                const tmp138 = isInviteActiveDefault(findActivityResult, message, application1.id);
                const activity9 = message.activity;
                let name_override;
                const isAskToJoin = intl(11889).getIsAskToJoin(message);
                if (activity9 != null) {
                  name_override = activity9.name_override;
                }
                if (name_override == null) {
                  name_override = application1.name;
                }
                const activity4 = message.activity;
                let icon_override;
                if (activity4 != null) {
                  icon_override = activity4.icon_override;
                }
                let assetImage = null;
                if (null != icon_override) {
                  assetImage = intl(8256).getAssetImage(application1.id, message.activity.icon_override);
                  const intlResult6 = intl(8256);
                }
                const intlResult5 = intl(11889);
                const tmp139 = !tmp138;
                const activity5 = message.activity;
                let type5;
                if (activity5 != null) {
                  type5 = activity5.type;
                }
                const headerText = intl(13363).getHeaderText(name_override, type5, tmp139);
                if (null != findActivityResult) {
                  if (null != findActivityResult.party) {
                    let party1 = GamePartyStore.getParty(findActivityResult.party.id);
                    if (party1 == null) {
                      party1 = [];
                    }
                    let arr = Array.from(party1);
                  }
                  let length = intl(11885).getPartySize(findActivityResult).maxPartySize;
                  const intlResult8 = intl(11885);
                  const currentActivityGamePlatform = intl(13166).getCurrentActivityGamePlatform();
                  const tmp40 = getCurrentUserPresenceActivityDefault(LocalActivityStore, SelfPresenceStore, application1.id);
                  const intlResult9 = intl(13166);
                  const isInParty = intl(11888).getIsInParty(tmp40, findActivityResult);
                  const intlResult11 = intl(13364);
                  let supported_platforms;
                  const canSendInvite = intlResult11.getCanSendInvite(findActivityResult, message, application1, id2);
                  if (findActivityResult != null) {
                    supported_platforms = findActivityResult.supported_platforms;
                  }
                  if (supported_platforms == null) {
                    supported_platforms = [];
                  }
                  const set = new Set(supported_platforms);
                  const hasItem = set.has(currentActivityGamePlatform);
                  const intlResult10 = intl(11888);
                  const intlResult12 = intl(9636);
                  const canLaunchFrameResult = intl(9636).canLaunchFrame(application1);
                  const intlResult13 = intl(9418);
                  const isEmbeddedAppResult = intl(9418).isEmbeddedApp(application1);
                  const obj3 = { presenceActivity: findActivityResult, currentUserPresenceActivity: tmp40, currentUserId: id2, message, application: application1, isEmbeddedApplication: isEmbeddedAppResult, isFrameApplication: canLaunchFrameResult, isGameLaunchable: hasItem };
                  const canJoin = intl(11883).getCanJoin(obj3);
                  const remoteJoinPlatform = canJoin.remoteJoinPlatform;
                  let id4;
                  if (findActivityResult != null) {
                    const party = findActivityResult.party;
                    if (party != null) {
                      id4 = party.id;
                    }
                  }
                  let tmp57Result = closure_19(id4);
                  if (!tmp57Result) {
                    tmp57Result = application1.id === SpotifyApplication.id;
                  }
                  let start;
                  if (findActivityResult != null) {
                    const timestamps = findActivityResult.timestamps;
                    if (timestamps != null) {
                      start = timestamps.start;
                    }
                  }
                  if (start == null) {
                    let created_at;
                    if (findActivityResult != null) {
                      created_at = findActivityResult.created_at;
                    }
                    start = created_at;
                  }
                  if (findActivityResult != null) {
                    const timestamps2 = findActivityResult.timestamps;
                    if (timestamps2 != null) {
                      const end = timestamps2.end;
                    }
                  }
                  let str2 = "";
                  if (null != start) {
                    const obj4 = { start, end };
                    const _Date = Date;
                    str2 = intl(8252).formatActiveTimestamp(obj4, Date.now());
                    const intlResult15 = intl(8252);
                  }
                  if (assetImage == null) {
                    let appIconSrc1 = null;
                    if (null != application1.icon) {
                      appIconSrc1 = intl(12074).getAppIconSrc(application1.id, application1.icon, application1.bot);
                      const intlResult16 = intl(12074);
                    }
                    assetImage = appIconSrc1;
                  }
                  if (tmp57Result) {
                    if (null != findActivityResult) {
                      if (null != findActivityResult.details) {
                        if (null != findActivityResult.state) {
                          const intl14 = intl(1114).intl;
                          ({ details: obj34.track, state: obj34.artist } = findActivityResult);
                          let name2 = intl14.formatToPlainString(intl(1114).t.JCvHtx, { track: null, artist: null }).replace("\n", " ");
                          const obj7 = { track: null, artist: null };
                          const str4 = intl14.formatToPlainString(intl(1114).t.JCvHtx, { track: null, artist: null });
                        }
                        const intl15 = intl(1114).intl;
                        const stringResult = intl15.string(intl(1114).t.sTo7s3);
                        if (tmp138) {
                          const author = message.author;
                          const tmp95 = getCoverImageFromActivityDefault(findActivityResult, application1.id);
                          const syncingWith = SpotifyStore.getSyncingWith();
                          const activity1 = SpotifyStore.getActivity();
                          let party3;
                          const id5 = AuthenticationStore.getId();
                          if (activity1 != null) {
                            party3 = activity1.party;
                          }
                          let tmp102 = null != party3;
                          if (tmp102) {
                            let id6;
                            if (findActivityResult != null) {
                              const party2 = findActivityResult.party;
                              if (party2 != null) {
                                id6 = party2.id;
                              }
                            }
                            tmp102 = id6 === activity1.party.id;
                          }
                          let userId;
                          if (syncingWith != null) {
                            userId = syncingWith.userId;
                          }
                          let tmp105 = null != userId;
                          if (tmp105) {
                            let userId1;
                            if (syncingWith != null) {
                              userId1 = syncingWith.userId;
                            }
                            tmp105 = userId1 === author.id;
                          }
                          const string = intl(1114).intl.string;
                          if (hasConnectedAccountResult) {
                            let tmp110 = tmp105;
                            if (!tmp105) {
                              tmp110 = tmp102;
                            }
                            let stringResult1 = tmp107;
                            if (tmp110) {
                              const intl18 = intl(1114).intl;
                              stringResult1 = intl18.string(intl(1114).t.KC26NR);
                            }
                          } else {
                            const intl17 = intl(1114).intl;
                            const obj8 = { platform };
                            stringResult1 = intl17.formatToPlainString(intl(1114).t.XWSHTb, obj8);
                          }
                          let flag5 = !(author.id === id5 || tmp105 || tmp102);
                          let flag4 = false;
                          let name = name2;
                          let tmp72 = tmp95;
                          let stringResult2 = str2;
                          let tmp73 = null;
                          let str3 = "";
                          let tmp74 = null;
                          let flag3 = false;
                          let stringResult3 = headerText;
                          let footerLabel = stringResult;
                          let label = stringResult1;
                          hasConnectedAccountResult = SpotifyStore.hasConnectedAccount();
                          const tmp111 = author.id === id5 || tmp105 || tmp102;
                        } else {
                          const intl16 = intl(1114).intl;
                          stringResult2 = intl16.string(intl(1114).t["84qx9r"]);
                          name = application1.name;
                          flag4 = false;
                          tmp72 = assetImage;
                          tmp73 = null;
                          str3 = "";
                          tmp74 = null;
                          flag3 = false;
                          flag5 = false;
                          stringResult3 = headerText;
                          footerLabel = stringResult;
                        }
                      }
                    }
                    name2 = application1.name;
                  } else if (tmp138) {
                    const mapped = arr.map((item) => {
                      let user = UserStore.getUser(item);
                      if (user == null) {
                        user = new UserRecord({ discriminator: "0005" });
                      }
                      let avatarURL;
                      if (user != null) {
                        avatarURL = user.getAvatarURL(guild_id.guild_id, 64);
                      }
                      return String(avatarURL);
                    });
                    const obj9 = { maxPartySize: length, partySize: arr.length, activityActionType: null };
                    const activity6 = message.activity;
                    let type6;
                    if (activity6 != null) {
                      type6 = activity6.type;
                    }
                    obj9.activityActionType = type6;
                    let details;
                    const partyText = intl(13363).getPartyText(obj9);
                    if (findActivityResult != null) {
                      details = findActivityResult.details;
                    }
                    let tmp85 = null;
                    if (tmp84) {
                      tmp85 = details;
                    }
                    const intlResult17 = intl(13363);
                    tmp84 = null != details && "" !== details;
                    const supportsRemoteJoin = intl(11892).getSupportsRemoteJoin(findActivityResult);
                    intl(11893);
                    if (canJoin.canJoin) {
                      let remoteJoinFooterLabel;
                      if (null != remoteJoinPlatform) {
                        remoteJoinFooterLabel = intl(13361).getRemoteJoinFooterLabel(remoteJoinPlatform);
                        const intlResult20 = intl(13361);
                      }
                      const obj10 = { label: null, disabled: false, footerLabel: null };
                      const intl13 = intl(1114).intl;
                      obj10.label = intl13.string(intl(1114).t.VJlc0S);
                      obj10.footerLabel = remoteJoinFooterLabel;
                      let obj16 = obj10;
                    } else if (canSendInvite) {
                      const obj11 = { label: null, disabled: null, footerLabel: "Array" };
                      const intl12 = intl(1114).intl;
                      obj11.label = intl12.string(intl(1114).t["hC/Zey"]);
                      obj11.disabled = message.author.id === id2;
                      obj16 = obj11;
                    } else if (isInParty) {
                      const obj12 = { label: null, disabled: true, footerLabel: "Boolean" };
                      const intl11 = intl(1114).intl;
                      obj12.label = intl11.string(intl(1114).t.KC26NR);
                      obj16 = obj12;
                    } else if (isAskToJoin) {
                      const obj13 = { label: "PX_16", disabled: null, footerLabel: "as" };
                      const intl10 = intl(1114).intl;
                      const obj14 = { username: message.author.globalName, appName: name_override };
                      obj13.footerLabel = intl10.formatToPlainString(intl(1114).t.gYVkSW, obj14);
                      obj16 = obj13;
                    } else {
                      if (supportsRemoteJoin) {
                        if (tmp88) {
                          const obj15 = { label: null, disabled: false, footerLabel: "r" };
                          const intl9 = intl(1114).intl;
                          obj15.label = intl9.string(intl(1114).t.lw71Nf);
                          obj16 = obj15;
                        }
                      }
                      obj16 = { label: "PX_16", disabled: null, footerLabel: "as" };
                      const intl8 = intl(1114).intl;
                      obj16.footerLabel = intl8.string(intl(1114).t.OAB5TK);
                    }
                    let tmp91 = null != findActivityResult;
                    if (tmp91) {
                      tmp91 = null != findActivityResult.application_id;
                    }
                    if (tmp91) {
                      tmp91 = ActivityLauncherStore.getState(findActivityResult.application_id, constants2.JOIN) === constants.LOADING;
                    }
                    flag4 = false;
                    flag3 = tmp91;
                    name = name_override;
                    tmp72 = assetImage;
                    stringResult2 = str2;
                    tmp73 = tmp85;
                    str3 = partyText;
                    tmp74 = mapped;
                    flag5 = !obj16.disabled;
                    stringResult3 = headerText;
                    footerLabel = obj16.footerLabel;
                    label = obj16.label;
                    const intlResult18 = intl(11892);
                    const tmp90 = !obj16.disabled;
                  } else {
                    if (null != application1.deepLinkUri) {
                      const messages = MessageStore.getMessages(channel.id);
                    }
                    if (null != application1.deepLinkUri) {
                      if (null != messages) {
                        const intlResult21 = intl(13366);
                        if (intlResult21.isMostRecentDeadEndInvite(message.id, messages, application1.id, findActivityResult)) {
                          const intlResult22 = intl(13363);
                          stringResult2 = intlResult22.getDeadGameInviteText(message, name_override, channel, id2, true);
                          const intl7 = intl(1114).intl;
                          label = intl7.string(intl(1114).t["s+J8Dl"]);
                          flag4 = false;
                          name = name_override;
                          tmp72 = assetImage;
                          tmp73 = null;
                          str3 = "";
                          tmp74 = null;
                          flag3 = false;
                          flag5 = true;
                          stringResult3 = headerText;
                        }
                      }
                    }
                    const intl5 = intl(1114).intl;
                    stringResult3 = intl5.string(intl(1114).t.pkq6Vq);
                    const intl6 = intl(1114).intl;
                    stringResult2 = intl6.string(intl(1114).t["Sq/E1I"]);
                    flag3 = false;
                    name = name_override;
                    tmp72 = assetImage;
                    flag4 = true;
                    tmp73 = null;
                    str3 = "";
                    tmp74 = null;
                    flag5 = false;
                  }
                  if (null != remoteJoinPlatform) {
                    const items = [];
                    const tmp114 = intl(13367).ACTIVITY_GAME_PLATFORM_TO_ICON_KEY[remoteJoinPlatform];
                    let joinFromSupportedPlatformsIconKeys = items;
                    if (null != tmp114) {
                      items.push(tmp114);
                      joinFromSupportedPlatformsIconKeys = items;
                    }
                  } else {
                    let supported_platforms1;
                    if (findActivityResult != null) {
                      supported_platforms1 = findActivityResult.supported_platforms;
                    }
                    const obj17 = { platforms: supported_platforms1, currentPlatform: currentActivityGamePlatform, isGameLaunchable: hasItem };
                    joinFromSupportedPlatformsIconKeys = intl(13367).getJoinFromSupportedPlatformsIconKeys(obj17);
                    const intlResult23 = intl(13367);
                  }
                  const intlResult14 = intl(11883);
                  const tmp116 = tmp72;
                  channel = null;
                  const appGradientColors = intl(12074).getAppGradientColors(tmp116);
                  if (null != channel.parent_id) {
                    channel = ChannelStore.getChannel(channel.parent_id);
                  }
                  let isGameInvitesChannelResult;
                  if (channel != null) {
                    isGameInvitesChannelResult = channel.isGameInvitesChannel();
                  }
                  if (true !== isGameInvitesChannelResult) {
                    const obj18 = { messageId: message.id, presenceActivity: findActivityResult, application: application1 };
                    let presenceActivityInviteCoverImageURL = intl(13368).getPresenceActivityInviteCoverImageURL(obj18);
                    const intlResult25 = intl(13368);
                  } else {
                    presenceActivityInviteCoverImageURL = null;
                  }
                  if (flag4) {
                    let DEAD_COMPACT = tmp122.DEAD_COMPACT;
                  } else {
                    DEAD_COMPACT = tmp138 ? tmp122.ACTIVE : tmp122.DEAD;
                  }
                  const obj19 = { displayType: DEAD_COMPACT, ctaButtonEnabled: flag5, ctaButtonText: label, ctaButtonIsLoading: flag3, footerLabel, gradientColors: appGradientColors, headerText: stringResult3, iconSrc: tmp72, isPlatformSupported: hasItem, isSpotifyParty: tmp57Result, maxPartySize: null, partyMemberAvatarURIs: null, partySizeText: null, platformIconKeys: null, coverImageUrl: null, detailsText: null, subtitle: null, title: null };
                  if (length <= 0) {
                    length = arr.length;
                  }
                  obj19.maxPartySize = length;
                  obj19.partyMemberAvatarURIs = tmp74;
                  obj19.partySizeText = str3;
                  obj19.platformIconKeys = joinFromSupportedPlatformsIconKeys;
                  obj19.coverImageUrl = presenceActivityInviteCoverImageURL;
                  obj19.detailsText = tmp73;
                  obj19.subtitle = stringResult2;
                  obj19.title = name;
                  tmp27 = obj19;
                  const intlResult24 = intl(12074);
                }
                arr = [];
                const intlResult7 = intl(13363);
              }
            }
            return tmp27;
          }
          const intlResult = intl(13362);
        } else {
          if (intl(12071).ContentClassificationVisibility.BLOCK_UNDERAGE !== contentClassificationVisibility) {
            if (intl(12071).ContentClassificationVisibility.BLOCK_CHANNEL_RESTRICTION !== contentClassificationVisibility) {
              return null;
            }
          }
          const obj20 = { displayType: obj.BLOCKED, headerText: null, subtitle: null, ctaButtonEnabled: false, ctaButtonText: "PX_16", ctaButtonIsLoading: "Array", footerLabel: "flex", gradientColors: 0, iconSrc: null, isPlatformSupported: "Array", isSpotifyParty: "accessible", maxPartySize: "fileFinishedImporting", partyMemberAvatarURIs: "no", partySizeText: null, platformIconKeys: "user", coverImageUrl: null, detailsText: null, title: 147 };
          const intl2 = intl(1114).intl;
          obj20.headerText = intl2.string(intl(1114).t.pkq6Vq);
          if (contentClassificationVisibility === intl(12071).ContentClassificationVisibility.BLOCK_UNDERAGE) {
            const intl4 = intl(1114).intl;
            let stringResult4 = intl4.string(intl(1114).t.GhU4yl);
          } else {
            const intl3 = intl(1114).intl;
            stringResult4 = intl3.string(intl(1114).t.B99UMJ);
          }
          obj20.subtitle = stringResult4;
          obj20.gradientColors = [];
          obj20.platformIconKeys = [];
          return obj20;
        }
      }
    }
  }
};