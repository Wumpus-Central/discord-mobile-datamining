// discord_app/modules/messages/native/renderer/row_data/embeds/ActivityRichPresenceInviteEmbed.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../intl/index.native.tsx";
import _modDef3024 from "../../../../../request_to_stream/RequestToStream.messages.js";
import ColorUtils from "../../../../../../utils/ColorUtils.tsx";
import isInviteActiveDefault from "../../../../../activities/utils/isInviteActive.tsx";
import RequestToStreamNonGamesExperimentDefault from "../../../../../request_to_stream/RequestToStreamNonGamesExperiment.tsx";
import getCurrentUserPresenceActivityDefault from "../../../../../activities/utils/getCurrentUserPresenceActivity.tsx";
import nativeAppMessageEmbedUtil from "../../../../../applications/message_embed/native/utils/nativeAppMessageEmbedUtil.tsx";
import InviteEmbedTextUtils from "../../../../../activities/utils/InviteEmbedTextUtils.tsx";
import getCoverImageFromActivityDefault from "../../../../../activities/utils/getCoverImageFromActivity.tsx";
import getRequestToStreamCTAAndIsDisabledDefault from "../../../../../request_to_stream/native/getRequestToStreamCTAAndIsDisabled.tsx";
import ApplicationStore from "../../../../../applications/ApplicationStore.tsx";
import SpotifyStore from "../../../../../spotify/SpotifyStore.tsx";
import UserRecord from "../../../../../../records/UserRecord.tsx";
import AuthenticationStore from "../../../../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../../../../stores/ChannelStore.tsx";
import GamePartyStore from "../../../../../../stores/GamePartyStore.tsx";
import LocalActivityStore from "../../../../../../stores/LocalActivityStore.tsx";
import MessageStore from "../../../../../../stores/MessageStore.tsx";
import PresenceStore from "../../../../../../stores/PresenceStore.tsx";
import SelfPresenceStore from "../../../../../../stores/SelfPresenceStore.tsx";
import UserStore from "../../../../../../stores/UserStore.tsx";
import ActivityLauncherStore from "../../../../../../stores/views/ActivityLauncherStore.tsx";

const require = globalThis.__r;

require = fn;
function createActivityStreamRequestInviteEmbed(application, guildId, forcedTheme, application1) {
  const obj = RequestToStreamNonGamesExperimentDefault;
  let enabled = obj.getConfig({
    guildId: guildId.guild_id,
    location: "createActivityStreamRequestInviteEmbed",
  }).enabled;
  if (enabled) {
    enabled = null == application1;
  }
  let icon;
  if (application1 != null) {
    icon = application1.icon;
  }
  let appIconSrc = null;
  if (null != icon) {
    appIconSrc = nativeAppMessageEmbedUtil.getAppIconSrc(application1.id, application1.icon, application1.bot);
  }
  const internal = nativeDefault.internal;
  const hexToRgbaResult = ColorUtils.hexToRgba(
    internal.resolveSemanticColor(forcedTheme, nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT),
  );
  if (enabled) {
    const items = [hexToRgbaResult, hexToRgbaResult];
    let appGradientColors = items;
  } else {
    appGradientColors = nativeAppMessageEmbedUtil.getAppGradientColors(tmp7);
    const tmp8Result = nativeAppMessageEmbedUtil;
  }
  let id = AuthenticationStore.getId();
  if (null != application.application) {
    let getApplicationActivity = application.author.id;
    const activity = application.activity;
    let type;
    if (activity != null) {
      type = activity.type;
    }
    if (type === constants2.JOIN_REQUEST) {
      let recipientId = id;
      if (getApplicationActivity === id) {
        recipientId = id;
        if (guildId.isPrivate()) {
          recipientId = guildId.getRecipientId();
        }
      }
      let tmp17 = recipientId;
    } else {
      const activity2 = application.activity;
      let type1;
      if (activity2 != null) {
        type1 = activity2.type;
      }
      tmp17 = getApplicationActivity;
      if (type1 === tmp15.STREAM_REQUEST) {
        tmp17 = id;
      }
    }
    id = PresenceStore;
    getApplicationActivity = PresenceStore.getApplicationActivity;
    const applicationActivity = getApplicationActivity(tmp17, application.application.id);
  } else {
    let id1;
    const findActivityResult = PresenceStore.findActivity(
      application.author.id,
      (type) => type.type === constants.LISTENING,
    );
    if (application1 != null) {
      id1 = application1.id;
    }
    const tmpResult = isInviteActiveDefault;
    const tmpResultResult = isInviteActiveDefault(findActivityResult, application, id1);
    const requestToStreamText = InviteEmbedTextUtils.getRequestToStreamText(
      application,
      guildId,
      AuthenticationStore.getId(),
    );
    const tmp8Result3 = InviteEmbedTextUtils;
    const requestToStreamTextParts = InviteEmbedTextUtils.getRequestToStreamTextParts(
      application,
      guildId,
      AuthenticationStore.getId(),
    );
    const tmp25 = getRequestToStreamCTAAndIsDisabledDefault(application, enabled);
    const obj5 = {
      displayType: tmpResultResult ? obj.ACTIVE : obj.DEAD,
      ctaButtonEnabled: !tmp25.isDisabled,
      ctaButtonText: tmp25.text,
      ctaButtonIsLoading: false,
      ctaButtonVariant: null,
      footerLabel: null,
      gradientColors: null,
      headerText: null,
      iconSrc: null,
      isSpotifyParty: false,
      isPlatformSupported: true,
      maxPartySize: 0,
      partyMemberAvatarURIs: null,
      partySizeText: null,
      platformIconKeys: null,
      coverImageUrl: null,
      detailsText: null,
      subtitle: null,
      structuredSubtitle: null,
      title: null,
      hasActivity: null,
    };
    let str = "default";
    if (enabled) {
      str = "connected";
    }
    obj5.ctaButtonVariant = str;
    obj5.gradientColors = appGradientColors;
    let stringResult;
    if (!enabled) {
      const intl = util.intl;
      stringResult = intl.string(_modDef3024.nAyuPp);
    }
    obj5.headerText = stringResult;
    obj5.iconSrc = appIconSrc;
    obj5.platformIconKeys = [];
    obj5.subtitle = requestToStreamText;
    obj5.structuredSubtitle = requestToStreamTextParts;
    let name;
    if (application1 != null) {
      name = application1.name;
    }
    obj5.title = name;
    obj5.hasActivity = !enabled;
    return obj5;
  }
  const obj2 = { guildId: guildId.guild_id, location: "createActivityStreamRequestInviteEmbed" };
  tmp7 = appIconSrc;
}
const SpotifyApplication = fn(14555).SpotifyApplication;
const Constants = fn(1087);
({ ActivityActionStates: closure_16, ActivityActionTypes: closure_17, ActivityTypes: closure_18 } = Constants);
const SpotifyConstants = fn(8828);
({ isSpotifyParty: closure_19, SPOTIFY_PLATFORM_NAME: closure_20 } = SpotifyConstants);
const EmbedDisplayType = { ACTIVE: "active", DEAD: "dead", DEAD_COMPACT: "dead_compact", BLOCKED: "blocked" };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/ActivityRichPresenceInviteEmbed.tsx",
);

export { EmbedDisplayType };
export const createActivityRichPresenceInviteEmbed = function createActivityRichPresenceInviteEmbed(
  message,
  channel,
  forcedTheme,
) {
  if (null != message.author) {
    if (null != message.activity) {
      if (null != channel) {
        const currentUser = UserStore.getCurrentUser();
        const tmp4 = _require;
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
        if (tmp4(13040).ContentClassificationVisibility.DISPLAY === contentClassificationVisibility) {
          _require = channel;
          const application2 = message.application;
          let id;
          const applicationFromMessage = tmp4(14558).getApplicationFromMessage(message);
          if (application2 != null) {
            id = application2.id;
          }
          let application1 = null;
          if (null != id) {
            application1 = ApplicationStore.getApplication(id);
          }
          let tmp15 = null == application1 && null != id;
          if (tmp15) {
            tmp15 = false === ApplicationStore.isFetchingApplication(id);
          }
          if (tmp15) {
            const application3 = tmp4(6809).fetchApplication(id, false);
            const tmp4Result22 = tmp4(6809);
          }
          if (application1 == null) {
            application1 = applicationFromMessage;
          }
          const id1 = AuthenticationStore.getId();
          if (null != message.application) {
            let getApplicationActivity = message.author.id;
            const activity = message.activity;
            let type;
            if (activity != null) {
              type = activity.type;
            }
            if (type === constants2.JOIN_REQUEST) {
              let recipientId = id1;
              if (getApplicationActivity === id1) {
                recipientId = id1;
                if (channel.isPrivate()) {
                  recipientId = channel.getRecipientId();
                }
              }
              let tmp24 = recipientId;
            } else {
              const activity2 = message.activity;
              let type1;
              if (activity2 != null) {
                type1 = activity2.type;
              }
              tmp24 = getApplicationActivity;
              if (type1 === tmp22.STREAM_REQUEST) {
                tmp24 = id1;
              }
            }
            getApplicationActivity = PresenceStore.getApplicationActivity;
            const applicationActivity = getApplicationActivity(tmp24, message.application.id);
          } else {
            const findActivityResult = PresenceStore.findActivity(
              message.author.id,
              (type) => type.type === constants.LISTENING,
            );
            const obj2 = { guildId: channel.guild_id, location: "createRichPresenceDisplayActivityInviteEmbed" };
            const activity3 = message.activity;
            let type2;
            if (activity3 != null) {
              type2 = activity3.type;
            }
            if (null == application1) {
              let tmp133;
              if (obj6.getConfig(obj2).enabled) {
                if (tmp32) {
                  tmp133 = createActivityStreamRequestInviteEmbed(message, channel, forcedTheme);
                }
              }
              let obj19 = tmp133;
            } else if (tmp32) {
              obj19 = createActivityStreamRequestInviteEmbed(message, channel, forcedTheme, application1);
            } else {
              const tmp33 = isInviteActiveDefault(findActivityResult, message, application1.id);
              const activity4 = message.activity;
              let name_override;
              const isAskToJoin = tmp4(11351).getIsAskToJoin(message);
              if (activity4 != null) {
                name_override = activity4.name_override;
              }
              if (name_override == null) {
                name_override = application1.name;
              }
              const activity5 = message.activity;
              let icon_override;
              if (activity5 != null) {
                icon_override = activity5.icon_override;
              }
              let assetImage = null;
              if (null != icon_override) {
                assetImage = tmp4(8620).getAssetImage(application1.id, message.activity.icon_override);
                const tmp4Result24 = tmp4(8620);
              }
              const tmp34 = !tmp33;
              const tmp4Result23 = tmp4(11351);
              const activity6 = message.activity;
              let type3;
              if (activity6 != null) {
                type3 = activity6.type;
              }
              const headerText = tmp4(14559).getHeaderText(name_override, type3, tmp34);
              if (null != findActivityResult) {
                if (null != findActivityResult.party) {
                  let party1 = GamePartyStore.getParty(findActivityResult.party.id);
                  if (party1 == null) {
                    party1 = [];
                  }
                  let arr = Array.from(party1);
                }
                let length = tmp4(11347).getPartySize(findActivityResult).maxPartySize;
                const tmp4Result26 = tmp4(11347);
                const currentActivityGamePlatform = tmp4(14321).getCurrentActivityGamePlatform();
                const tmp46 = getCurrentUserPresenceActivityDefault(
                  LocalActivityStore,
                  SelfPresenceStore,
                  application1.id,
                );
                const tmp4Result27 = tmp4(14321);
                const isInParty = tmp4(11350).getIsInParty(tmp46, findActivityResult);
                const tmp4Result29 = tmp4(14560);
                let supported_platforms;
                const canSendInvite = tmp4Result29.getCanSendInvite(findActivityResult, message, application1, id1);
                if (findActivityResult != null) {
                  supported_platforms = findActivityResult.supported_platforms;
                }
                if (supported_platforms == null) {
                  supported_platforms = [];
                }
                const set = new Set(supported_platforms);
                const hasItem = set.has(currentActivityGamePlatform);
                const tmp4Result28 = tmp4(11350);
                const tmp4Result30 = tmp4(11354);
                const isFrameAppResult = tmp4(11354).isFrameApp(application1);
                const obj3 = {
                  presenceActivity: findActivityResult,
                  currentUserPresenceActivity: tmp46,
                  currentUserId: id1,
                  message,
                  application: application1,
                  isEmbeddedApplication: application1.isEmbedded,
                  isFrameApplication: isFrameAppResult,
                  isGameLaunchable: hasItem,
                };
                const canJoin = tmp4(11344).getCanJoin(obj3);
                const remoteJoinPlatform = canJoin.remoteJoinPlatform;
                let id2;
                if (findActivityResult != null) {
                  const party = findActivityResult.party;
                  if (party != null) {
                    id2 = party.id;
                  }
                }
                let tmp62Result = closure_19(id2);
                if (!tmp62Result) {
                  tmp62Result = application1.id === SpotifyApplication.id;
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
                  str2 = tmp4(8617).formatActiveTimestamp(obj4, Date.now());
                  const tmp4Result32 = tmp4(8617);
                }
                if (assetImage == null) {
                  let appIconSrc = null;
                  if (null != application1.icon) {
                    appIconSrc = tmp4(13043).getAppIconSrc(application1.id, application1.icon, application1.bot);
                    const tmp4Result33 = tmp4(13043);
                  }
                  assetImage = appIconSrc;
                }
                if (tmp62Result) {
                  if (null != findActivityResult) {
                    if (null != findActivityResult.details) {
                      if (null != findActivityResult.state) {
                        const intl13 = tmp4(1128).intl;
                        ({ details: obj35.track, state: obj35.artist } = findActivityResult);
                        let name2 = intl13
                          .formatToPlainString(tmp4(1128).t.JCvHtx, { track: null, artist: null })
                          .replace("\n", " ");
                        const obj7 = { track: null, artist: null };
                        const str4 = intl13.formatToPlainString(tmp4(1128).t.JCvHtx, { track: null, artist: null });
                      }
                      const intl14 = tmp4(1128).intl;
                      const stringResult = intl14.string(tmp4(1128).t.sTo7s3);
                      if (tmp33) {
                        const author = message.author;
                        const tmp100 = getCoverImageFromActivityDefault(findActivityResult, application1.id);
                        const syncingWith = SpotifyStore.getSyncingWith();
                        const activity1 = SpotifyStore.getActivity();
                        let party3;
                        const id3 = AuthenticationStore.getId();
                        if (activity1 != null) {
                          party3 = activity1.party;
                        }
                        let tmp107 = null != party3;
                        if (tmp107) {
                          let id4;
                          if (findActivityResult != null) {
                            const party2 = findActivityResult.party;
                            if (party2 != null) {
                              id4 = party2.id;
                            }
                          }
                          tmp107 = id4 === activity1.party.id;
                        }
                        let userId;
                        if (syncingWith != null) {
                          userId = syncingWith.userId;
                        }
                        let tmp110 = null != userId;
                        if (tmp110) {
                          let userId1;
                          if (syncingWith != null) {
                            userId1 = syncingWith.userId;
                          }
                          tmp110 = userId1 === author.id;
                        }
                        const string = tmp4(1128).intl.string;
                        if (hasConnectedAccountResult) {
                          let tmp115 = tmp110;
                          if (!tmp110) {
                            tmp115 = tmp107;
                          }
                          let stringResult1 = tmp112;
                          if (tmp115) {
                            const intl17 = tmp4(1128).intl;
                            stringResult1 = intl17.string(tmp4(1128).t.KC26NR);
                          }
                        } else {
                          const intl16 = tmp4(1128).intl;
                          const obj8 = { platform };
                          stringResult1 = intl16.formatToPlainString(tmp4(1128).t.XWSHTb, obj8);
                        }
                        let flag5 = !(author.id === id3 || tmp110 || tmp107);
                        let flag4 = false;
                        let name = name2;
                        let tmp77 = tmp100;
                        let stringResult2 = str2;
                        let tmp78 = null;
                        let str3 = "";
                        let tmp79 = null;
                        let flag3 = false;
                        let stringResult3 = headerText;
                        let footerLabel = stringResult;
                        let label = stringResult1;
                        hasConnectedAccountResult = SpotifyStore.hasConnectedAccount();
                        const tmp116 = author.id === id3 || tmp110 || tmp107;
                      } else {
                        const intl15 = tmp4(1128).intl;
                        stringResult2 = intl15.string(tmp4(1128).t["84qx9r"]);
                        name = application1.name;
                        flag4 = false;
                        tmp77 = assetImage;
                        tmp78 = null;
                        str3 = "";
                        tmp79 = null;
                        flag3 = false;
                        flag5 = false;
                        stringResult3 = headerText;
                        footerLabel = stringResult;
                      }
                    }
                  }
                  name2 = application1.name;
                } else if (tmp33) {
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
                  const activity7 = message.activity;
                  let type4;
                  if (activity7 != null) {
                    type4 = activity7.type;
                  }
                  obj9.activityActionType = type4;
                  let details;
                  const partyText = tmp4(14559).getPartyText(obj9);
                  if (findActivityResult != null) {
                    details = findActivityResult.details;
                  }
                  let tmp90 = null;
                  if (tmp89) {
                    tmp90 = details;
                  }
                  const tmp4Result34 = tmp4(14559);
                  tmp89 = null != details && "" !== details;
                  const supportsRemoteJoin = tmp4(11355).getSupportsRemoteJoin(findActivityResult);
                  tmp4(11356);
                  if (canJoin.canJoin) {
                    let remoteJoinFooterLabel;
                    if (null != remoteJoinPlatform) {
                      remoteJoinFooterLabel = tmp4(14557).getRemoteJoinFooterLabel(remoteJoinPlatform);
                      const tmp4Result37 = tmp4(14557);
                    }
                    const obj10 = { label: null, disabled: false, footerLabel: null };
                    const intl12 = tmp4(1128).intl;
                    obj10.label = intl12.string(tmp4(1128).t.VJlc0S);
                    obj10.footerLabel = remoteJoinFooterLabel;
                    let obj16 = obj10;
                  } else if (canSendInvite) {
                    const obj11 = { label: null, disabled: null, footerLabel: "r" };
                    const intl11 = tmp4(1128).intl;
                    obj11.label = intl11.string(tmp4(1128).t["hC/Zey"]);
                    obj11.disabled = message.author.id === id1;
                    obj16 = obj11;
                  } else if (isInParty) {
                    const obj12 = { label: null, disabled: true, footerLabel: "Array" };
                    const intl10 = tmp4(1128).intl;
                    obj12.label = intl10.string(tmp4(1128).t.KC26NR);
                    obj16 = obj12;
                  } else if (isAskToJoin) {
                    const obj13 = { label: "Reflect", disabled: null, footerLabel: "heading-lg/bold" };
                    const intl9 = tmp4(1128).intl;
                    const obj14 = { username: message.author.globalName, appName: name_override };
                    obj13.footerLabel = intl9.formatToPlainString(tmp4(1128).t.gYVkSW, obj14);
                    obj16 = obj13;
                  } else {
                    if (supportsRemoteJoin) {
                      if (tmp93) {
                        const obj15 = { label: null, disabled: false, footerLabel: "r" };
                        const intl8 = tmp4(1128).intl;
                        obj15.label = intl8.string(tmp4(1128).t.lw71Nf);
                        obj16 = obj15;
                      }
                    }
                    obj16 = { label: "Reflect", disabled: null, footerLabel: "heading-lg/bold" };
                    const intl7 = tmp4(1128).intl;
                    obj16.footerLabel = intl7.string(tmp4(1128).t.OAB5TK);
                  }
                  let tmp96 = null != findActivityResult;
                  if (tmp96) {
                    tmp96 = null != findActivityResult.application_id;
                  }
                  if (tmp96) {
                    tmp96 =
                      ActivityLauncherStore.getState(findActivityResult.application_id, tmp31.JOIN) ===
                      constants.LOADING;
                  }
                  flag4 = false;
                  flag3 = tmp96;
                  name = name_override;
                  tmp77 = assetImage;
                  stringResult2 = str2;
                  tmp78 = tmp90;
                  str3 = partyText;
                  tmp79 = mapped;
                  flag5 = !obj16.disabled;
                  stringResult3 = headerText;
                  footerLabel = obj16.footerLabel;
                  label = obj16.label;
                  const tmp4Result35 = tmp4(11355);
                  const tmp95 = !obj16.disabled;
                } else {
                  if (null != application1.deepLinkUri) {
                    const messages = MessageStore.getMessages(channel.id);
                  }
                  if (null != application1.deepLinkUri) {
                    if (null != messages) {
                      const tmp4Result38 = tmp4(14562);
                      if (
                        tmp4Result38.isMostRecentDeadEndInvite(
                          message.id,
                          messages,
                          application1.id,
                          findActivityResult,
                        )
                      ) {
                        const tmp4Result39 = tmp4(14559);
                        stringResult2 = tmp4Result39.getDeadGameInviteText(message, name_override, channel, id1, true);
                        const intl6 = tmp4(1128).intl;
                        label = intl6.string(tmp4(1128).t["s+J8Dl"]);
                        flag4 = false;
                        name = name_override;
                        tmp77 = assetImage;
                        tmp78 = null;
                        str3 = "";
                        tmp79 = null;
                        flag3 = false;
                        flag5 = true;
                        stringResult3 = headerText;
                      }
                    }
                  }
                  const intl4 = tmp4(1128).intl;
                  stringResult3 = intl4.string(tmp4(1128).t.pkq6Vq);
                  const intl5 = tmp4(1128).intl;
                  stringResult2 = intl5.string(tmp4(1128).t["Sq/E1I"]);
                  flag3 = false;
                  name = name_override;
                  tmp77 = assetImage;
                  flag4 = true;
                  tmp78 = null;
                  str3 = "";
                  tmp79 = null;
                  flag5 = false;
                }
                if (null != remoteJoinPlatform) {
                  const items = [];
                  const tmp119 = tmp4(14563).ACTIVITY_GAME_PLATFORM_TO_ICON_KEY[remoteJoinPlatform];
                  let joinFromSupportedPlatformsIconKeys = items;
                  if (null != tmp119) {
                    items.push(tmp119);
                    joinFromSupportedPlatformsIconKeys = items;
                  }
                } else {
                  let supported_platforms1;
                  if (findActivityResult != null) {
                    supported_platforms1 = findActivityResult.supported_platforms;
                  }
                  const obj17 = {
                    platforms: supported_platforms1,
                    currentPlatform: currentActivityGamePlatform,
                    isGameLaunchable: hasItem,
                  };
                  joinFromSupportedPlatformsIconKeys = tmp4(14563).getJoinFromSupportedPlatformsIconKeys(obj17);
                  const tmp4Result40 = tmp4(14563);
                }
                const tmp121 = tmp77;
                const tmp4Result31 = tmp4(11344);
                channel = null;
                const appGradientColors = tmp4(13043).getAppGradientColors(tmp121);
                if (null != channel.parent_id) {
                  channel = ChannelStore.getChannel(channel.parent_id);
                }
                let isGameInvitesChannelResult;
                if (channel != null) {
                  isGameInvitesChannelResult = channel.isGameInvitesChannel();
                }
                if (true !== isGameInvitesChannelResult) {
                  const obj18 = {
                    messageId: message.id,
                    presenceActivity: findActivityResult,
                    application: application1,
                  };
                  let presenceActivityInviteCoverImageURL = tmp4(14564).getPresenceActivityInviteCoverImageURL(obj18);
                  const tmp4Result42 = tmp4(14564);
                } else {
                  presenceActivityInviteCoverImageURL = null;
                }
                if (flag4) {
                  let DEAD_COMPACT = tmp127.DEAD_COMPACT;
                } else {
                  DEAD_COMPACT = tmp33 ? tmp127.ACTIVE : tmp127.DEAD;
                }
                obj19 = {
                  displayType: DEAD_COMPACT,
                  ctaButtonEnabled: flag5,
                  ctaButtonText: label,
                  ctaButtonIsLoading: flag3,
                  footerLabel,
                  gradientColors: appGradientColors,
                  headerText: stringResult3,
                  iconSrc: tmp77,
                  isPlatformSupported: hasItem,
                  isSpotifyParty: tmp62Result,
                  maxPartySize: null,
                  partyMemberAvatarURIs: null,
                  partySizeText: null,
                  platformIconKeys: null,
                  coverImageUrl: null,
                  detailsText: null,
                  subtitle: null,
                  title: null,
                };
                if (length <= 0) {
                  length = arr.length;
                }
                obj19.maxPartySize = length;
                obj19.partyMemberAvatarURIs = tmp79;
                obj19.partySizeText = str3;
                obj19.platformIconKeys = joinFromSupportedPlatformsIconKeys;
                obj19.coverImageUrl = presenceActivityInviteCoverImageURL;
                obj19.detailsText = tmp78;
                obj19.subtitle = stringResult2;
                obj19.title = name;
                const tmp4Result41 = tmp4(13043);
              }
              arr = [];
              const tmp4Result25 = tmp4(14559);
            }
            return obj19;
          }
          const tmp4Result = tmp4(14558);
        } else {
          if (tmp4(13040).ContentClassificationVisibility.BLOCK_UNDERAGE !== contentClassificationVisibility) {
            if (
              tmp4(13040).ContentClassificationVisibility.BLOCK_CHANNEL_RESTRICTION !== contentClassificationVisibility
            ) {
              return null;
            }
          }
          const obj20 = {
            displayType: obj.BLOCKED,
            headerText: null,
            subtitle: null,
            ctaButtonEnabled: false,
            ctaButtonText: "Reflect",
            ctaButtonIsLoading: "Array",
            footerLabel: "Set",
            gradientColors: 0,
            iconSrc: null,
            isPlatformSupported: "Array",
            isSpotifyParty: "ix",
            maxPartySize: "flex",
            partyMemberAvatarURIs: "toCharArray$esjava$1",
            partySizeText: 40,
            platformIconKeys: "100%",
            coverImageUrl: 8,
            detailsText: 12,
            title: 12,
          };
          const intl = tmp4(1128).intl;
          obj20.headerText = intl.string(tmp4(1128).t.pkq6Vq);
          if (contentClassificationVisibility === tmp4(13040).ContentClassificationVisibility.BLOCK_UNDERAGE) {
            const intl3 = tmp4(1128).intl;
            let stringResult4 = intl3.string(tmp4(1128).t.GhU4yl);
          } else {
            const intl2 = tmp4(1128).intl;
            stringResult4 = intl2.string(tmp4(1128).t.B99UMJ);
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
