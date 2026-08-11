// discord_app/modules/messages/native/renderer/row_data/embeds/ActivityRichPresenceInviteEmbed.tsx
import addApplication from "addApplication";
import upsertAccount from "upsertAccount";
import { SpotifyApplication } from "getIconURL";
import createdAt from "createdAt";
import fetchFingerprint from "fetchFingerprint";
import updateParty from "updateParty";
import updateActivities from "updateActivities";
import reinjectEphemerals from "reinjectEphemerals";
import sortActivity from "sortActivity";
import filterPlayingActivities from "filterPlayingActivities";
import mergeGuildAvatar from "mergeGuildAvatar";
import handleActivityStateChanged from "handleActivityStateChanged";
import ME from "ME";
import WEB_OPEN from "WEB_OPEN";
import { result } from "../../../../../activities/utils/isInviteActive.tsx";
import { ContentClassificationVisibility } from "../../../../../content_classification/ContentClassificationVisibility.tsx";
import { getRequestToStreamCTAAndIsDisabled } from "../../../../../request_to_stream/native/getRequestToStreamCTAAndIsDisabled.tsx";

let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
const require = arg1;
({ ActivityActionStates: closure_15, ActivityActionTypes: closure_16, ActivityTypes: closure_17 } = ME);
({ isSpotifyParty: closure_18, SPOTIFY_PLATFORM_NAME: closure_19 } = WEB_OPEN);
let obj = { ACTIVE: "active", DEAD: "dead", DEAD_COMPACT: "dead_compact", BLOCKED: "blocked" };
const result = require("getIconURL").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/ActivityRichPresenceInviteEmbed.tsx");

export const EmbedDisplayType = obj;
export const createActivityRichPresenceInviteEmbed = function createActivityRichPresenceInviteEmbed(message, channel) {
  if (null != message.author) {
    if (null != message.activity) {
      let id2 = channel;
      if (null != channel) {
        currentUser = currentUser.getCurrentUser();
        let intl = _require;
        let string2Result = dependencyMap;
        let obj = _ContentClassificationVisibility;
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
        if (intl(11353).ContentClassificationVisibility.DISPLAY === contentClassificationVisibility) {
          _require = channel;
          const application2 = message.application;
          let id;
          const applicationFromMessage = intl(12626).getApplicationFromMessage(message);
          if (application2 != null) {
            id = application2.id;
          }
          application = null;
          if (null != id) {
            application = addApplication.getApplication(id);
          }
          let tmp14 = null == application && null != id;
          if (tmp14) {
            tmp14 = false === addApplication.isFetchingApplication(id);
          }
          if (tmp14) {
            const application1 = intl(5729).fetchApplication(id, false);
            const intlResult1 = intl(5729);
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
            id = sortActivity;
            const applicationActivity = sortActivity.getApplicationActivity(tmp23, message.application.id);
          } else {
            let obj5 = sortActivity;
            const findActivityResult = sortActivity.findActivity(message.author.id, (type) => type.type === constants.LISTENING);
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
                  appIconSrc = intl(11356).getAppIconSrc(application.id, application.icon, application.bot);
                  const intlResult2 = intl(11356);
                }
                id2 = appIconSrc;
                let string2 = intl(11356).getAppGradientColors(id2);
                id2 = obj4.getId();
                if (null != message.application) {
                  let getApplicationActivity = message.author.id;
                  const activity7 = message.activity;
                  id2 = undefined;
                  if (activity7 != null) {
                    id2 = activity7.type;
                  }
                  if (id2 === tmp29.JOIN_REQUEST) {
                    if (getApplicationActivity === id2) {
                      if (channel.isPrivate()) {
                        id2 = channel.getRecipientId();
                      }
                    }
                  } else {
                    const activity8 = message.activity;
                    id2 = undefined;
                    if (activity8 != null) {
                      id2 = activity8.type;
                    }
                    id2 = getApplicationActivity;
                  }
                  getApplicationActivity = obj5.getApplicationActivity;
                  id2 = getApplicationActivity(id2, message.application.id);
                } else {
                  id2 = obj5.findActivity(message.author.id, (type) => type.type === constants.LISTENING);
                  id2 = importDefault;
                  id2 = result(id2, message, application.id);
                  id2 = intl(12627).getRequestToStreamText(message, channel, obj4.getId());
                  id2 = getRequestToStreamCTAAndIsDisabled(message);
                  id2 = id2 ? obj.ACTIVE : obj.DEAD;
                  obj = { displayType: null, ctaButtonEnabled: null, ctaButtonText: null, ctaButtonIsLoading: false, footerLabel: null, gradientColors: null, headerText: null, iconSrc: null, isSpotifyParty: false, isPlatformSupported: true, maxPartySize: 0, partyMemberAvatarURIs: null, partySizeText: null, platformIconKeys: null, coverImageUrl: null, detailsText: null, subtitle: null, title: null };
                  obj[0] = id2;
                  obj[1] = !id2.isDisabled;
                  obj[2] = id2.text;
                  obj[5] = string2;
                  intl = intl(1236).intl;
                  string2 = intl.string;
                  string2Result = string2(id2(2757).nAyuPp);
                  obj[6] = string2Result;
                  obj[7] = appIconSrc;
                  appIconSrc = [];
                  obj[13] = appIconSrc;
                  obj[16] = id2;
                  application = application.name;
                  obj[17] = application;
                  id2 = obj;
                  const intlResult4 = intl(12627);
                }
                const intlResult3 = intl(11356);
              } else {
                id2 = importDefault;
                id2 = result(findActivityResult, message, application.id);
                id2 = !id2;
                const activity9 = message.activity;
                let name_override;
                id2 = intl(11163).getIsAskToJoin(message);
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
                  assetImage = intl(8245).getAssetImage(application.id, message.activity.icon_override);
                  const intlResult6 = intl(8245);
                }
                const intlResult5 = intl(11163);
                const activity5 = message.activity;
                let type3;
                if (activity5 != null) {
                  type3 = activity5.type;
                }
                const headerText = intl(12627).getHeaderText(name_override, type3, id2);
                if (null != findActivityResult) {
                  if (null != findActivityResult.party) {
                    party = party.getParty(findActivityResult.party.id);
                    if (party == null) {
                      party = [];
                    }
                    let items = Array.from(party);
                  }
                  let length = intl(11159).getPartySize(findActivityResult).maxPartySize;
                  const intlResult8 = intl(11159);
                  const currentActivityGamePlatform = intl(12315).getCurrentActivityGamePlatform();
                  const tmp40 = id2(11165)(updateActivities, filterPlayingActivities, application.id);
                  const intlResult9 = intl(12315);
                  const isInParty = intl(11162).getIsInParty(tmp40, findActivityResult);
                  const intlResult11 = intl(12628);
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
                  const intlResult10 = intl(11162);
                  const intlResult12 = intl(10600);
                  const canLaunchFrameResult = intl(10600).canLaunchFrame(application);
                  const intlResult13 = intl(8343);
                  const isEmbeddedAppResult = intl(8343).isEmbeddedApp(application);
                  obj = { presenceActivity: null, currentUserPresenceActivity: null, currentUserId: null, message: null, application: null, isEmbeddedApplication: null, isFrameApplication: null, isGameLaunchable: null };
                  obj[0] = findActivityResult;
                  obj[1] = tmp40;
                  obj[2] = id1;
                  obj[3] = message;
                  obj[4] = application;
                  obj[5] = isEmbeddedAppResult;
                  obj[6] = canLaunchFrameResult;
                  obj[7] = hasItem;
                  const canJoin = intl(11157).getCanJoin(obj);
                  const remoteJoinPlatform = canJoin.remoteJoinPlatform;
                  let id3;
                  if (findActivityResult != null) {
                    party = findActivityResult.party;
                    if (party != null) {
                      id3 = party.id;
                    }
                  }
                  let tmp57Result = closure_18(id3);
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
                    const obj1 = { start: null, end: null };
                    obj1[0] = start;
                    obj1[1] = end;
                    const _Date = Date;
                    str2 = intl(8242).formatActiveTimestamp(obj1, Date.now());
                    const intlResult15 = intl(8242);
                  }
                  if (assetImage == null) {
                    let appIconSrc1 = null;
                    if (null != application.icon) {
                      appIconSrc1 = intl(11356).getAppIconSrc(application.id, application.icon, application.bot);
                      const intlResult16 = intl(11356);
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
                          const obj2 = { track: null, artist: null };
                          const str4 = intl14.formatToPlainString(intl(1236).t.JCvHtx, { track: null, artist: null });
                        }
                        const intl15 = intl(1236).intl;
                        const stringResult = intl15.string(intl(1236).t.sTo7s3);
                        if (id2) {
                          const tmp95 = id2(12629)(findActivityResult, application.id);
                          const author = message.author;
                          const syncingWith = store.getSyncingWith();
                          activity = store.getActivity();
                          id2 = undefined;
                          id2 = obj4.getId();
                          if (activity != null) {
                            id2 = activity.party;
                          }
                          id2 = null != id2;
                          if (id2) {
                            id2 = undefined;
                            if (findActivityResult != null) {
                              const party2 = findActivityResult.party;
                              if (party2 != null) {
                                id2 = party2.id;
                              }
                            }
                            id2 = id2 === activity.party.id;
                          }
                          id2 = undefined;
                          if (syncingWith != null) {
                            id2 = syncingWith.userId;
                          }
                          id2 = null != id2;
                          if (id2) {
                            id2 = undefined;
                            if (syncingWith != null) {
                              id2 = syncingWith.userId;
                            }
                            id2 = id2 === author.id;
                          }
                          const string = intl(1236).intl.string;
                          if (hasConnectedAccountResult) {
                            if (id2) {
                              const intl18 = intl(1236).intl;
                              id2 = intl18.string(intl(1236).t.KC26NR);
                            }
                          } else {
                            const intl17 = intl(1236).intl;
                            const obj3 = { platform: null };
                            id2 = closure_19;
                            obj3[0] = closure_19;
                            id2 = intl17.formatToPlainString(intl(1236).t.XWSHTb, obj3);
                          }
                          id2 = author.id === id2 || id2 || id2;
                          let flag5 = !id2;
                          let flag4 = false;
                          let name = name2;
                          let tmp72 = tmp95;
                          let stringResult1 = str2;
                          let tmp73 = null;
                          let str3 = "";
                          let tmp74 = null;
                          let flag3 = false;
                          let stringResult2 = headerText;
                          let footerLabel = stringResult;
                          let label = id2;
                          hasConnectedAccountResult = store.hasConnectedAccount();
                        } else {
                          const intl16 = intl(1236).intl;
                          stringResult1 = intl16.string(intl(1236).t["84qx9r"]);
                          name = application.name;
                          flag4 = false;
                          tmp72 = assetImage;
                          tmp73 = null;
                          str3 = "";
                          tmp74 = null;
                          flag3 = false;
                          flag5 = false;
                          stringResult2 = headerText;
                          footerLabel = stringResult;
                        }
                      }
                    }
                    name2 = application.name;
                  } else if (id2) {
                    const mapped = items.map((arg0) => {
                      let user = outer1_13.getUser(arg0);
                      if (user == null) {
                        user = new outer1_6({ discriminator: "0005" });
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
                    let type4;
                    if (activity6 != null) {
                      type4 = activity6.type;
                    }
                    obj4[2] = type4;
                    let details;
                    const partyText = intl(12627).getPartyText(obj4);
                    if (findActivityResult != null) {
                      details = findActivityResult.details;
                    }
                    let tmp85 = null;
                    if (tmp84) {
                      tmp85 = details;
                    }
                    const intlResult17 = intl(12627);
                    tmp84 = null != details && "" !== details;
                    const supportsRemoteJoin = intl(11166).getSupportsRemoteJoin(findActivityResult);
                    intl(11167);
                    if (canJoin.canJoin) {
                      let remoteJoinFooterLabel;
                      if (null != remoteJoinPlatform) {
                        remoteJoinFooterLabel = intl(12625).getRemoteJoinFooterLabel(remoteJoinPlatform);
                        const intlResult20 = intl(12625);
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
                      const obj7 = { label: null, disabled: true, footerLabel: "Boolean" };
                      const intl11 = intl(1236).intl;
                      obj7[0] = intl11.string(intl(1236).t.KC26NR);
                      obj11 = obj7;
                    } else if (id2) {
                      const obj8 = { label: "ct", disabled: null, footerLabel: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000442137468087184 };
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
                      obj11 = { label: "ct", disabled: null, footerLabel: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000442137468087184 };
                      const intl8 = intl(1236).intl;
                      obj11[2] = intl8.string(intl(1236).t.OAB5TK);
                    }
                    let tmp91 = null != findActivityResult;
                    if (tmp91) {
                      tmp91 = null != findActivityResult.application_id;
                    }
                    if (tmp91) {
                      tmp91 = state.getState(findActivityResult.application_id, tmp29.JOIN) === constants.LOADING;
                    }
                    flag4 = false;
                    flag3 = tmp91;
                    name = name_override;
                    tmp72 = assetImage;
                    stringResult1 = str2;
                    tmp73 = tmp85;
                    str3 = partyText;
                    tmp74 = mapped;
                    flag5 = !obj11.disabled;
                    stringResult2 = headerText;
                    footerLabel = obj11.footerLabel;
                    label = obj11.label;
                    const intlResult18 = intl(11166);
                    const tmp90 = !obj11.disabled;
                  } else {
                    if (null != application.deepLinkUri) {
                      messages = messages.getMessages(channel.id);
                    }
                    if (null != application.deepLinkUri) {
                      if (null != messages) {
                        const intlResult21 = intl(12630);
                        if (intlResult21.isMostRecentDeadEndInvite(message.id, messages, application.id, findActivityResult)) {
                          const intlResult22 = intl(12627);
                          stringResult1 = intlResult22.getDeadGameInviteText(message, name_override, channel, id1, true);
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
                          stringResult2 = headerText;
                        }
                      }
                    }
                    const intl5 = intl(1236).intl;
                    stringResult2 = intl5.string(intl(1236).t.pkq6Vq);
                    const intl6 = intl(1236).intl;
                    stringResult1 = intl6.string(intl(1236).t["Sq/E1I"]);
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
                    id2 = intl(12631).ACTIVITY_GAME_PLATFORM_TO_ICON_KEY[remoteJoinPlatform];
                    id2 = items;
                    if (null != id2) {
                      id2 = items.push(id2);
                      id2 = items;
                    }
                  } else {
                    id2 = undefined;
                    if (findActivityResult != null) {
                      id2 = findActivityResult.supported_platforms;
                    }
                    const obj12 = { platforms: null, currentPlatform: null, isGameLaunchable: null };
                    obj12[0] = id2;
                    obj12[1] = currentActivityGamePlatform;
                    obj12[2] = hasItem;
                    id2 = intl(12631).getJoinFromSupportedPlatformsIconKeys(obj12);
                    const intlResult23 = intl(12631);
                  }
                  id2 = tmp72;
                  const intlResult14 = intl(11157);
                  const tmp57 = closure_18;
                  id2 = intl(11356).getAppGradientColors(id2);
                  const intlResult24 = intl(11356);
                  const obj13 = { messageId: null, presenceActivity: null, application: null };
                  obj13[0] = message.id;
                  obj13[1] = findActivityResult;
                  obj13[2] = application;
                  id2 = obj;
                  id2 = intl(12632).getPresenceActivityInviteCoverImageURL(obj13);
                  if (flag4) {
                    let DEAD_COMPACT = id2.DEAD_COMPACT;
                  } else {
                    DEAD_COMPACT = id2 ? id2.ACTIVE : id2.DEAD;
                  }
                  const obj14 = { displayType: null, ctaButtonEnabled: null, ctaButtonText: null, ctaButtonIsLoading: null, footerLabel: null, gradientColors: null, headerText: null, iconSrc: null, isPlatformSupported: null, isSpotifyParty: null, maxPartySize: null, partyMemberAvatarURIs: null, partySizeText: null, platformIconKeys: null, coverImageUrl: null, detailsText: null, subtitle: null, title: null };
                  obj14[0] = DEAD_COMPACT;
                  obj14[1] = flag5;
                  obj14[2] = label;
                  obj14[3] = flag3;
                  obj14[4] = footerLabel;
                  obj14[5] = id2;
                  obj14[6] = stringResult2;
                  obj14[7] = tmp72;
                  obj14[8] = hasItem;
                  obj14[9] = tmp57Result;
                  if (length <= 0) {
                    length = items.length;
                  }
                  obj14[10] = length;
                  obj14[11] = tmp74;
                  obj14[12] = str3;
                  obj14[13] = id2;
                  obj14[14] = id2;
                  obj14[15] = tmp73;
                  obj14[16] = stringResult1;
                  obj14[17] = name;
                  tmp27 = obj14;
                  const intlResult25 = intl(12632);
                }
                items = [];
                const intlResult7 = intl(12627);
              }
            }
            return tmp27;
          }
          const intlResult = intl(12626);
        } else {
          if (intl(11353).ContentClassificationVisibility.BLOCK_UNDERAGE !== contentClassificationVisibility) {
            if (intl(11353).ContentClassificationVisibility.BLOCK_CHANNEL_RESTRICTION !== contentClassificationVisibility) {
              return null;
            }
          }
          const obj15 = { displayType: null, headerText: null, subtitle: null, ctaButtonEnabled: false, ctaButtonText: "ct", ctaButtonIsLoading: "Array", footerLabel: "PX_16", gradientColors: 0, iconSrc: null, isPlatformSupported: "Array", isSpotifyParty: "call", maxPartySize: "no", partyMemberAvatarURIs: "children", partySizeText: "i", platformIconKeys: "top", coverImageUrl: "l", detailsText: "__initData", title: "String" };
          obj15[0] = obj.BLOCKED;
          const intl2 = intl(1236).intl;
          obj15[1] = intl2.string(intl(1236).t.pkq6Vq);
          if (contentClassificationVisibility === intl(11353).ContentClassificationVisibility.BLOCK_UNDERAGE) {
            const intl4 = intl(1236).intl;
            let stringResult3 = intl4.string(intl(1236).t.GhU4yl);
          } else {
            const intl3 = intl(1236).intl;
            stringResult3 = intl3.string(intl(1236).t.B99UMJ);
          }
          obj15[2] = stringResult3;
          obj15[7] = [];
          obj15[14] = [];
          return obj15;
        }
      }
    }
  }
};