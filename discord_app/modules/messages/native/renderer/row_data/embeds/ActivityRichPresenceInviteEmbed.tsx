// === Module 12778: EmbedDisplayType ===

// Module 12778 (EmbedDisplayType)
import messagesProxyDefault from "messagesProxy" /* 2789 */;
import resultDefault from "result" /* 10917 */;
import getCurrentUserPresenceActivityDefault from "getCurrentUserPresenceActivity" /* 10924 */;
import getCoverImageFromActivityDefault from "getCoverImageFromActivity" /* 12785 */;
import getRequestToStreamCTAAndIsDisabledDefault from "getRequestToStreamCTAAndIsDisabled" /* 12791 */;
import addApplication from "addApplication" /* 4478 */;
import upsertAccount from "upsertAccount" /* 7241 */;
import { SpotifyApplication } from "getIconURL" /* 12779 */;
import createdAt from "createdAt" /* 1930 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import updateParty from "updateParty" /* 12780 */;
import updateActivities from "updateActivities" /* 7251 */;
import reinjectEphemerals from "reinjectEphemerals" /* 4994 */;
import sortActivity from "sortActivity" /* 4559 */;
import filterPlayingActivities from "filterPlayingActivities" /* 7250 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import handleActivityStateChanged from "handleActivityStateChanged" /* 10663 */;
import ME from "ME" /* 676 */;
import SPOTIFY_APP_PROTOCOL from "SPOTIFY_APP_PROTOCOL" /* 7242 */;

const require = fn;
({ ActivityActionStates: closure_15, ActivityActionTypes: closure_16, ActivityTypes: closure_17 } = ME);
({ isSpotifyParty: closure_18, SPOTIFY_PLATFORM_NAME: closure_19 } = SPOTIFY_APP_PROTOCOL);
let obj = { ACTIVE: "active", DEAD: "dead", DEAD_COMPACT: "dead_compact", BLOCKED: "blocked" };
const result = require("obj132").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/ActivityRichPresenceInviteEmbed.tsx");

export const EmbedDisplayType = obj;
export const createActivityRichPresenceInviteEmbed = function createActivityRichPresenceInviteEmbed(message, channel) {
  if (null != message.author) {
    if (null != message.activity) {
      if (null != channel) {
        currentUser = currentUser.getCurrentUser();
        let intl = _require;
        let string2Result = dependencyMap;
        obj = _require(11127);
        let application = message.application;
        let prop;
        if (application != null) {
          prop = application.content_classification;
        }
        let nsfwAllowed;
        if (currentUser != null) {
          nsfwAllowed = currentUser.nsfwAllowed;
        }
        const contentClassificationVisibility = obj.getContentClassificationVisibility(prop, channel, nsfwAllowed);
        if (intl(11127).ContentClassificationVisibility.DISPLAY === contentClassificationVisibility) {
          _require = channel;
          const application2 = message.application;
          let id;
          const applicationFromMessage = intl(12782).getApplicationFromMessage(message);
          if (application2 != null) {
            id = application2.id;
          }
          application = null;
          if (null != id) {
            application = closure_3.getApplication(id);
          }
          let tmp14 = null == application && null != id;
          if (tmp14) {
            tmp14 = false === closure_3.isFetchingApplication(id);
          }
          if (tmp14) {
            const application1 = intl(7140).fetchApplication(id, false);
            const intlResult1 = intl(7140);
          }
          if (application == null) {
            application = applicationFromMessage;
          }
          let obj4 = id;
          const id1 = id.getId();
          if (null != message.application) {
            id = message.author.id;
            let activity = message.activity;
            let type;
            if (activity != null) {
              type = activity.type;
            }
            if (type === constants2.JOIN_REQUEST) {
              let recipientId = id1;
              if (id === id1) {
                recipientId = id1;
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
                tmp23 = id1;
              }
            }
            id = closure_11;
            const applicationActivity = closure_11.getApplicationActivity(tmp23, message.application.id);
          } else {
            let obj5 = closure_11;
            const findActivityResult = closure_11.findActivity(message.author.id, (type) => type.type === constants.LISTENING);
            let tmp27;
            if (null != application) {
              const activity3 = message.activity;
              let type2;
              if (activity3 != null) {
                type2 = activity3.type;
              }
              if (type2 === constants2.STREAM_REQUEST) {
                let appIconSrc = null;
                if (null != application.icon) {
                  appIconSrc = intl(11131).getAppIconSrc(application.id, application.icon, application.bot);
                  const intlResult2 = intl(11131);
                }
                let string2 = intl(11131).getAppGradientColors(appIconSrc);
                const id2 = obj4.getId();
                if (null != message.application) {
                  let getApplicationActivity = message.author.id;
                  const activity7 = message.activity;
                  let type3;
                  if (activity7 != null) {
                    type3 = activity7.type;
                  }
                  if (type3 === constants2.JOIN_REQUEST) {
                    let recipientId1 = id2;
                    if (getApplicationActivity === id2) {
                      recipientId1 = id2;
                      if (channel.isPrivate()) {
                        recipientId1 = channel.getRecipientId();
                      }
                    }
                    let tmp125 = recipientId1;
                  } else {
                    const activity8 = message.activity;
                    let type4;
                    if (activity8 != null) {
                      type4 = activity8.type;
                    }
                    tmp125 = getApplicationActivity;
                    if (type4 === constants2.STREAM_REQUEST) {
                      tmp125 = id2;
                    }
                  }
                  getApplicationActivity = obj5.getApplicationActivity;
                  const applicationActivity1 = getApplicationActivity(tmp125, message.application.id);
                } else {
                  const findActivityResult1 = obj5.findActivity(message.author.id, (type) => type.type === constants.LISTENING);
                  const tmp129 = resultDefault(obj5.findActivity(message.author.id, (type) => type.type === constants.LISTENING), message, application.id);
                  const requestToStreamText = intl(12783).getRequestToStreamText(message, channel, obj4.getId());
                  const tmp131 = getRequestToStreamCTAAndIsDisabledDefault(message);
                  obj = { displayType: null, ctaButtonEnabled: null, ctaButtonText: null, ctaButtonIsLoading: false, footerLabel: null, gradientColors: null, headerText: null, iconSrc: null, isSpotifyParty: false, isPlatformSupported: true, maxPartySize: 0, partyMemberAvatarURIs: null, partySizeText: null, platformIconKeys: null, coverImageUrl: null, detailsText: null, subtitle: null, title: null };
                  obj[0] = tmp129 ? obj.ACTIVE : obj.DEAD;
                  obj[1] = !tmp131.isDisabled;
                  obj[2] = tmp131.text;
                  obj[5] = string2;
                  intl = intl(1236).intl;
                  string2 = intl.string;
                  string2Result = string2(messagesProxyDefault.nAyuPp);
                  obj[6] = string2Result;
                  obj[7] = appIconSrc;
                  appIconSrc = [];
                  obj[13] = appIconSrc;
                  obj[16] = requestToStreamText;
                  application = application.name;
                  obj[17] = application;
                  const intlResult4 = intl(12783);
                }
                const intlResult3 = intl(11131);
              } else {
                const tmp135 = resultDefault(findActivityResult, message, application.id);
                const activity9 = message.activity;
                let name_override;
                const isAskToJoin = intl(10922).getIsAskToJoin(message);
                if (activity9 != null) {
                  name_override = activity9.name_override;
                }
                if (name_override == null) {
                  name_override = application.name;
                }
                const activity4 = message.activity;
                let icon_override;
                if (activity4 != null) {
                  icon_override = activity4.icon_override;
                }
                let assetImage = null;
                if (null != icon_override) {
                  assetImage = intl(7247).getAssetImage(application.id, message.activity.icon_override);
                  const intlResult6 = intl(7247);
                }
                const intlResult5 = intl(10922);
                const tmp136 = !tmp135;
                const activity5 = message.activity;
                let type5;
                if (activity5 != null) {
                  type5 = activity5.type;
                }
                const headerText = intl(12783).getHeaderText(name_override, type5, tmp136);
                if (null != findActivityResult) {
                  if (null != findActivityResult.party) {
                    party = party.getParty(findActivityResult.party.id);
                    if (party == null) {
                      party = [];
                    }
                    let items = Array.from(party);
                  }
                  let length = intl(10918).getPartySize(findActivityResult).maxPartySize;
                  const intlResult8 = intl(10918);
                  const currentActivityGamePlatform = intl(12132).getCurrentActivityGamePlatform();
                  const tmp40 = getCurrentUserPresenceActivityDefault(closure_9, closure_12, application.id);
                  const intlResult9 = intl(12132);
                  const isInParty = intl(10921).getIsInParty(tmp40, findActivityResult);
                  const intlResult11 = intl(12784);
                  let supported_platforms;
                  const canSendInvite = intlResult11.getCanSendInvite(findActivityResult, message, application, id1);
                  if (findActivityResult != null) {
                    supported_platforms = findActivityResult.supported_platforms;
                  }
                  if (supported_platforms == null) {
                    supported_platforms = [];
                  }
                  const set = new Set(supported_platforms);
                  const hasItem = set.has(currentActivityGamePlatform);
                  const intlResult10 = intl(10921);
                  const intlResult12 = intl(8704);
                  const canLaunchFrameResult = intl(8704).canLaunchFrame(application);
                  const intlResult13 = intl(8447);
                  const isEmbeddedAppResult = intl(8447).isEmbeddedApp(application);
                  obj = { presenceActivity: null, currentUserPresenceActivity: null, currentUserId: null, message: null, application: null, isEmbeddedApplication: null, isFrameApplication: null, isGameLaunchable: null };
                  obj[0] = findActivityResult;
                  obj[1] = tmp40;
                  obj[2] = id1;
                  obj[3] = message;
                  obj[4] = application;
                  obj[5] = isEmbeddedAppResult;
                  obj[6] = canLaunchFrameResult;
                  obj[7] = hasItem;
                  const canJoin = intl(10916).getCanJoin(obj);
                  const remoteJoinPlatform = canJoin.remoteJoinPlatform;
                  let id3;
                  if (findActivityResult != null) {
                    party = findActivityResult.party;
                    if (party != null) {
                      id3 = party.id;
                    }
                  }
                  let tmp57Result = callback(id3);
                  if (!tmp57Result) {
                    tmp57Result = application.id === SpotifyApplication.id;
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
                    obj1 = { start: null, end: null };
                    obj1[0] = start;
                    obj1[1] = end;
                    const _Date = Date;
                    str2 = intl(8348).formatActiveTimestamp(obj1, Date.now());
                    const intlResult15 = intl(8348);
                  }
                  if (assetImage == null) {
                    let appIconSrc1 = null;
                    if (null != application.icon) {
                      appIconSrc1 = intl(11131).getAppIconSrc(application.id, application.icon, application.bot);
                      const intlResult16 = intl(11131);
                    }
                    assetImage = appIconSrc1;
                  }
                  if (tmp57Result) {
                    if (null != findActivityResult) {
                      if (null != findActivityResult.details) {
                        if (null != findActivityResult.state) {
                          const intl14 = intl(1236).intl;
                          ({ details: obj34[0], state: obj34[1] } = findActivityResult);
                          let name2 = intl14.formatToPlainString(intl(1236).t.JCvHtx, { track: null, artist: null }).replace("\n", " ");
                          const str4 = intl14.formatToPlainString(intl(1236).t.JCvHtx, { track: null, artist: null });
                        }
                        const intl15 = intl(1236).intl;
                        const stringResult = intl15.string(intl(1236).t.sTo7s3);
                        if (tmp135) {
                          const author = message.author;
                          const tmp95 = getCoverImageFromActivityDefault(findActivityResult, application.id);
                          const syncingWith = store.getSyncingWith();
                          activity = store.getActivity();
                          let party1;
                          const id4 = obj4.getId();
                          if (activity != null) {
                            party1 = activity.party;
                          }
                          let tmp102 = null != party1;
                          if (tmp102) {
                            let id5;
                            if (findActivityResult != null) {
                              const party2 = findActivityResult.party;
                              if (party2 != null) {
                                id5 = party2.id;
                              }
                            }
                            tmp102 = id5 === activity.party.id;
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
                          const string = intl(1236).intl.string;
                          if (hasConnectedAccountResult) {
                            let tmp110 = tmp105;
                            if (!tmp105) {
                              tmp110 = tmp102;
                            }
                            let stringResult1 = tmp107;
                            if (tmp110) {
                              const intl18 = intl(1236).intl;
                              stringResult1 = intl18.string(intl(1236).t.KC26NR);
                            }
                          } else {
                            const intl17 = intl(1236).intl;
                            const obj3 = { platform: null };
                            obj3[0] = closure_19;
                            stringResult1 = intl17.formatToPlainString(intl(1236).t.XWSHTb, obj3);
                          }
                          let flag5 = !(author.id === id4 || tmp105 || tmp102);
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
                          hasConnectedAccountResult = store.hasConnectedAccount();
                        } else {
                          const intl16 = intl(1236).intl;
                          stringResult2 = intl16.string(intl(1236).t["84qx9r"]);
                          name = application.name;
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
                    name2 = application.name;
                  } else if (tmp135) {
                    const mapped = items.map((item, index) => {
                      let user = closure_1_13.getUser(item);
                      if (user == null) {
                        user = new closure_1_6({ discriminator: "0005" });
                      }
                      let avatarURL;
                      if (user != null) {
                        avatarURL = user.getAvatarURL(guild_id.guild_id, 64);
                      }
                      return String(avatarURL);
                    });
                    obj4 = { maxPartySize: null, partySize: null, activityActionType: null };
                    obj4[0] = length;
                    obj4[1] = items.length;
                    const activity6 = message.activity;
                    let type6;
                    if (activity6 != null) {
                      type6 = activity6.type;
                    }
                    obj4[2] = type6;
                    let details;
                    const partyText = intl(12783).getPartyText(obj4);
                    if (findActivityResult != null) {
                      details = findActivityResult.details;
                    }
                    let tmp85 = null;
                    if (tmp84) {
                      tmp85 = details;
                    }
                    const intlResult17 = intl(12783);
                    tmp84 = null != details && "" !== details;
                    const supportsRemoteJoin = intl(10925).getSupportsRemoteJoin(findActivityResult);
                    intl(10926);
                    if (canJoin.canJoin) {
                      let remoteJoinFooterLabel;
                      if (null != remoteJoinPlatform) {
                        remoteJoinFooterLabel = intl(12781).getRemoteJoinFooterLabel(remoteJoinPlatform);
                        const intlResult20 = intl(12781);
                      }
                      obj5 = { label: null, disabled: false, footerLabel: null };
                      const intl13 = intl(1236).intl;
                      obj5[0] = intl13.string(intl(1236).t.VJlc0S);
                      obj5[2] = remoteJoinFooterLabel;
                      let obj11 = obj5;
                    } else if (canSendInvite) {
                      const obj6 = { label: null, disabled: null, footerLabel: "Array" };
                      const intl12 = intl(1236).intl;
                      obj6[0] = intl12.string(intl(1236).t["hC/Zey"]);
                      obj6[1] = message.author.id === id1;
                      obj11 = obj6;
                    } else if (isInParty) {
                      const obj7 = { label: null, disabled: true, footerLabel: "a" };
                      const intl11 = intl(1236).intl;
                      obj7[0] = intl11.string(intl(1236).t.KC26NR);
                      obj11 = obj7;
                    } else if (isAskToJoin) {
                      const obj8 = { label: "ct", disabled: null, footerLabel: "RCTView" };
                      const intl10 = intl(1236).intl;
                      const obj9 = { username: null, appName: null };
                      obj9[0] = message.author.globalName;
                      obj9[1] = name_override;
                      obj8[2] = intl10.formatToPlainString(intl(1236).t.gYVkSW, obj9);
                      obj11 = obj8;
                    } else {
                      if (supportsRemoteJoin) {
                        if (tmp88) {
                          const obj10 = { label: null, disabled: false, footerLabel: "r" };
                          const intl9 = intl(1236).intl;
                          obj10[0] = intl9.string(intl(1236).t.lw71Nf);
                          obj11 = obj10;
                        }
                      }
                      obj11 = { label: "ct", disabled: null, footerLabel: "RCTView" };
                      const intl8 = intl(1236).intl;
                      obj11[2] = intl8.string(intl(1236).t.OAB5TK);
                    }
                    let tmp91 = null != findActivityResult;
                    if (tmp91) {
                      tmp91 = null != findActivityResult.application_id;
                    }
                    if (tmp91) {
                      tmp91 = state.getState(findActivityResult.application_id, constants2.JOIN) === constants.LOADING;
                    }
                    flag4 = false;
                    flag3 = tmp91;
                    name = name_override;
                    tmp72 = assetImage;
                    stringResult2 = str2;
                    tmp73 = tmp85;
                    str3 = partyText;
                    tmp74 = mapped;
                    flag5 = !obj11.disabled;
                    stringResult3 = headerText;
                    footerLabel = obj11.footerLabel;
                    label = obj11.label;
                    const intlResult18 = intl(10925);
                  } else {
                    if (null != application.deepLinkUri) {
                      messages = messages.getMessages(channel.id);
                    }
                    if (null != application.deepLinkUri) {
                      if (null != messages) {
                        const intlResult21 = intl(12786);
                        if (intlResult21.isMostRecentDeadEndInvite(message.id, messages, application.id, findActivityResult)) {
                          const intlResult22 = intl(12783);
                          stringResult2 = intlResult22.getDeadGameInviteText(message, name_override, channel, id1, true);
                          const intl7 = intl(1236).intl;
                          label = intl7.string(intl(1236).t["s+J8Dl"]);
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
                    const intl5 = intl(1236).intl;
                    stringResult3 = intl5.string(intl(1236).t.pkq6Vq);
                    const intl6 = intl(1236).intl;
                    stringResult2 = intl6.string(intl(1236).t["Sq/E1I"]);
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
                    items = [];
                    const tmp114 = intl(12787).ACTIVITY_GAME_PLATFORM_TO_ICON_KEY[remoteJoinPlatform];
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
                    const obj12 = { platforms: null, currentPlatform: null, isGameLaunchable: null };
                    obj12[0] = supported_platforms1;
                    obj12[1] = currentActivityGamePlatform;
                    obj12[2] = hasItem;
                    joinFromSupportedPlatformsIconKeys = intl(12787).getJoinFromSupportedPlatformsIconKeys(obj12);
                    const intlResult23 = intl(12787);
                  }
                  const intlResult14 = intl(10916);
                  const tmp116 = tmp72;
                  const appGradientColors = intl(11131).getAppGradientColors(tmp116);
                  const intlResult24 = intl(11131);
                  const obj13 = { messageId: null, presenceActivity: null, application: null };
                  obj13[0] = message.id;
                  obj13[1] = findActivityResult;
                  obj13[2] = application;
                  const presenceActivityInviteCoverImageURL = intl(12788).getPresenceActivityInviteCoverImageURL(obj13);
                  if (flag4) {
                    let DEAD_COMPACT = tmp119.DEAD_COMPACT;
                  } else {
                    DEAD_COMPACT = tmp135 ? tmp119.ACTIVE : tmp119.DEAD;
                  }
                  const obj14 = { displayType: null, ctaButtonEnabled: null, ctaButtonText: null, ctaButtonIsLoading: null, footerLabel: null, gradientColors: null, headerText: null, iconSrc: null, isPlatformSupported: null, isSpotifyParty: null, maxPartySize: null, partyMemberAvatarURIs: null, partySizeText: null, platformIconKeys: null, coverImageUrl: null, detailsText: null, subtitle: null, title: null };
                  obj14[0] = DEAD_COMPACT;
                  obj14[1] = flag5;
                  obj14[2] = label;
                  obj14[3] = flag3;
                  obj14[4] = footerLabel;
                  obj14[5] = appGradientColors;
                  obj14[6] = stringResult3;
                  obj14[7] = tmp72;
                  obj14[8] = hasItem;
                  obj14[9] = tmp57Result;
                  if (length <= 0) {
                    length = items.length;
                  }
                  obj14[10] = length;
                  obj14[11] = tmp74;
                  obj14[12] = str3;
                  obj14[13] = joinFromSupportedPlatformsIconKeys;
                  obj14[14] = presenceActivityInviteCoverImageURL;
                  obj14[15] = tmp73;
                  obj14[16] = stringResult2;
                  obj14[17] = name;
                  tmp27 = obj14;
                  const intlResult25 = intl(12788);
                }
                items = [];
                const intlResult7 = intl(12783);
              }
            }
            return tmp27;
          }
          const intlResult = intl(12782);
        } else {
          if (intl(11127).ContentClassificationVisibility.BLOCK_UNDERAGE !== contentClassificationVisibility) {
            if (intl(11127).ContentClassificationVisibility.BLOCK_CHANNEL_RESTRICTION !== contentClassificationVisibility) {
              return null;
            }
          }
          const obj15 = { displayType: null, headerText: null, subtitle: null, ctaButtonEnabled: false, ctaButtonText: "ct", ctaButtonIsLoading: "Array", footerLabel: "PX_16", gradientColors: 0, iconSrc: null, isPlatformSupported: "Array", isSpotifyParty: "accessibilityRole", maxPartySize: "ks", partyMemberAvatarURIs: "ti", partySizeText: null, platformIconKeys: "user", coverImageUrl: null, detailsText: null, title: 148 };
          obj15[0] = obj.BLOCKED;
          const intl2 = intl(1236).intl;
          obj15[1] = intl2.string(intl(1236).t.pkq6Vq);
          if (contentClassificationVisibility === intl(11127).ContentClassificationVisibility.BLOCK_UNDERAGE) {
            const intl4 = intl(1236).intl;
            let stringResult4 = intl4.string(intl(1236).t.GhU4yl);
          } else {
            const intl3 = intl(1236).intl;
            stringResult4 = intl3.string(intl(1236).t.B99UMJ);
          }
          obj15[2] = stringResult4;
          obj15[7] = [];
          obj15[14] = [];
          return obj15;
        }
      }
    }
  }
};