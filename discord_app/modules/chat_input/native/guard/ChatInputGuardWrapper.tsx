// discord_app/modules/chat_input/native/guard/ChatInputGuardWrapper.tsx
import "useIsSpamMessageRequest";
import initialize from "initialize";
import { isThread } from "createChannelRecord";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import recomputeGuild from "recomputeGuild";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import { TextAreaCta } from "TextAreaCta";
import ME from "ME";
import { PHONE_VERIFICATION_MODAL_KEY as closure_15 } from "PHONE_VERIFICATION_MODAL_KEY";
import { jsx } from "useRequiredLinkedLobbyApplicationAuthorization";

let closure_12;
let closure_14;
let map1;
let unpackModuleId;
const require = arg1;
({ AnalyticEvents: unpackModuleId, ChannelTypes: closure_12, JoinGuildSources: map1, VerificationCriteria: closure_14 } = ME);
let result = require("createChannelRecord").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardWrapper.tsx");

export default function ChatInputGuardWrapper(channel) {
  let accountDeadline;
  let automodUserProfileQuarantined;
  let canCreateThreads;
  let canSendMessages;
  let children;
  let isLurking;
  let isReadonly;
  let lurkingSourceType;
  let memberDeadline;
  let missingVerificationRole;
  let newAccount;
  let newMember;
  let notEmailVerified;
  let notPhoneVerified;
  let onJumpToPresent;
  let requiredLinkedLobbyApplication;
  let screenIndex;
  let showLinkedLobbyApplicationLoadingIndicator;
  let showMemberVerificationModal;
  let user;
  channel = channel.channel;
  let guildId;
  let stateFromStores;
  let notClaimed;
  let verificationRole;
  ({ screenIndex, canSendMessages, canCreateThreads, children, isReadonly, onJumpToPresent } = channel);
  guildId = channel.getGuildId();
  const tmp3 = stateFromStores;
  let obj = channel(stateFromStores[12]);
  const items = [createGuildRecordFromRust];
  stateFromStores = obj.useStateFromStores(items, () => channel(stateFromStores[13]).guildHasVerificationGate(outer1_6.getGuild(guildId)));
  let obj1 = channel(stateFromStores[12]);
  const items1 = [recomputeGuild];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_7.getCheck(guildId));
  notClaimed = stateFromStores1.notClaimed;
  verificationRole = stateFromStores1.verificationRole;
  ({ notPhoneVerified, notEmailVerified, newMember, newAccount, memberDeadline, accountDeadline, missingVerificationRole } = stateFromStores1);
  let obj2 = channel(stateFromStores[12]);
  const items2 = [mergeGuildAvatar, trackCommunicationDisabled];
  const items3 = [guildId, stateFromStores, notClaimed];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items2, () => {
    const currentUser = outer1_9.getCurrentUser();
    let member = null;
    if (null != currentUser) {
      member = null;
      if (null != guildId) {
        member = outer1_5.getMember(tmp3, currentUser.id);
      }
    }
    const obj = { user: currentUser, showMemberVerificationModal: null, communicationDisabledGuildMember: null, automodUserProfileQuarantined: null };
    let isPending;
    if (member != null) {
      isPending = member.isPending;
    }
    obj[1] = (true === isPending || notClaimed) && stateFromStores;
    let tmp8;
    if (obj2.isMemberCommunicationDisabled(member)) {
      tmp8 = member;
    }
    obj[2] = tmp8;
    obj2 = channel(stateFromStores[14]);
    const tmp6 = channel;
    const tmp7 = stateFromStores;
    obj[3] = channel(stateFromStores[15]).hasAutomodQuarantinedProfile(member);
    return obj;
  }, items3);
  const communicationDisabledGuildMember = stateFromStoresObject.communicationDisabledGuildMember;
  ({ user, showMemberVerificationModal, automodUserProfileQuarantined } = stateFromStoresObject);
  let tmp9 = channel.type === constants.GUILD_ANNOUNCEMENT;
  if (tmp9) {
    tmp9 = !canSendMessages;
  }
  obj = { channelId: channel.id };
  const tmp10 = guildId(tmp3[17])(obj);
  let tmp2Result = tmp2(tmp3[18]);
  let tmp8 = guildId(stateFromStores[16])(user, channel);
  tmp2Result = tmp2(tmp3[19]);
  const tmp11 = tmp2Result.useIsMessageRequest(channel.id) && channel.isPrivate();
  const tmp12 = tmp2Result.useIsSpamMessageRequest(channel.id) && channel.isPrivate();
  const isForumPostResult = channel.isForumPost();
  const items4 = [upsertRelationship];
  const items5 = [channel];
  const stateFromStores2 = channel(tmp3[12]).useStateFromStores(items4, () => {
    let isDMResult = channel.isDM();
    if (isDMResult) {
      isDMResult = outer1_8.isBlocked(channel.getRecipientId());
    }
    return isDMResult;
  }, items5);
  const tmp2Result1 = channel(tmp3[12]);
  const items6 = [notClaimed];
  const items7 = [guildId];
  const stateFromStoresObject1 = channel(tmp3[12]).useStateFromStoresObject(items6, () => {
    let isLurkingResult = null != guildId;
    if (isLurkingResult) {
      isLurkingResult = notClaimed.isLurking(tmp);
    }
    const obj = { isLurking: isLurkingResult, lurkingSourceType: null };
    let tmp4 = null != tmp;
    if (tmp4) {
      const lurkingSourceForGuild = notClaimed.getLurkingSourceForGuild(tmp);
      let type;
      if (lurkingSourceForGuild != null) {
        type = lurkingSourceForGuild.type;
      }
      tmp4 = type;
    }
    obj[1] = tmp4;
    return obj;
  }, items7);
  ({ isLurking, lurkingSourceType } = stateFromStoresObject1);
  const tmp2Result2 = channel(tmp3[12]);
  const tmp2Result3 = channel(tmp3[20]);
  ({ showLinkedLobbyApplicationLoadingIndicator, requiredLinkedLobbyApplication } = guildId(tmp3[21])(channel.linkedLobby));
  guildId(tmp3[22])(channel.id);
  if (isLurking) {
    if (lurkingSourceType !== constants2.DIRECTORY_ENTRY) {
      if (tmp2Result3.useMobileLurkerServerPreview("ChatInputGuardWrapper").enabled) {
        if (null != guildId) {
          obj = { guildId: null };
          obj[0] = guildId;
          let tmp23Result = jsx(tmp7(tmp3[32]), { guildId: null });
          let tmp25 = jsx;
        }
        obj1 = { screenIndex: null, channelId: null, onJumpToPresent: null, children: null };
        obj1[0] = screenIndex;
        obj1[1] = channel.id;
        obj1[2] = onJumpToPresent;
        obj1[3] = tmp23Result;
        return tmp25(tmp2(tmp3[35]).ChatInputGuardContainer, obj1);
      }
    }
  }
  if (tmp11) {
    obj2 = { channel: null };
    obj2[0] = channel;
    tmp23Result = jsx(tmp7(tmp3[33]), { channel: null });
    tmp25 = jsx;
  } else if (tmp12) {
    let obj3 = { channel: null };
    obj3[0] = channel;
    tmp23Result = jsx(tmp7(tmp3[34]), { channel: null });
    tmp25 = jsx;
  } else if (channel.isSystemDM()) {
    let obj4 = { type: "simple-action", icon: null, message: null, subtext: null };
    let tmp7Result = tmp7(tmp3[35]);
    obj4[1] = jsx(tmp2(tmp3[36]).CircleInformationIcon, {});
    const intl14 = tmp2(tmp3[37]).intl;
    obj4[2] = intl14.string(tmp2(tmp3[37]).t.Bt2N7D);
    const intl15 = tmp2(tmp3[37]).intl;
    obj4[3] = intl15.string(tmp2(tmp3[37]).t["n/Vzkw"]);
    tmp23Result = <tmp7Result type="simple-action" icon={null} message={null} subtext={null} />;
    tmp25 = jsx;
  } else if (tmp8) {
    tmp23Result = jsx(tmp7(tmp3[38]), {});
    tmp25 = jsx;
  } else {
    if (tmp9) {
      if (null != tmp10) {
        const obj5 = { pendingGameProfileReturn: null };
        obj5[0] = tmp10;
        tmp23Result = jsx(tmp7(tmp3[39]), { pendingGameProfileReturn: null });
        tmp25 = jsx;
      }
    }
    if (!isLurking) {
      if (!tmp9) {
        if (stateFromStores2) {
          const obj6 = { type: "button-action", message: null, buttonPrimaryText: null, buttonPrimaryOnPress: null };
          tmp7Result = tmp7(tmp3[35]);
          const intl12 = tmp2(tmp3[37]).intl;
          obj6[1] = intl12.string(tmp2(tmp3[37]).t["9T6N5/"]);
          const intl13 = tmp2(tmp3[37]).intl;
          obj6[2] = intl13.string(tmp2(tmp3[37]).t.XyHpKH);
          obj6[3] = function handleUnblock() {
            let obj = channel;
            if (channel.isDM()) {
              obj = { cta_type: null };
              obj[0] = outer1_10.UNBLOCK;
              guildId(stateFromStores[23]).trackWithMetadata(outer1_11.TEXT_AREA_CTA_CLICKED, obj);
              const obj2 = guildId(stateFromStores[23]);
              guildId(stateFromStores[24]).unblockUser(obj.getRecipientId());
              const obj4 = guildId(stateFromStores[24]);
            }
          };
          tmp23Result = <tmp7Result type="button-action" message={null} buttonPrimaryText={null} buttonPrimaryOnPress={null} />;
          tmp25 = jsx;
        } else if (showMemberVerificationModal) {
          const obj7 = { guildId: null };
          obj7[0] = guildId;
          tmp23Result = jsx(tmp7(tmp3[41]), { guildId: null });
          tmp25 = jsx;
        } else {
          if (!showLinkedLobbyApplicationLoadingIndicator) {
            if (null == requiredLinkedLobbyApplication) {
              if (null != communicationDisabledGuildMember) {
                const obj8 = { guildMember: null };
                obj8[0] = communicationDisabledGuildMember;
                tmp23Result = jsx(tmp7(tmp3[43]), { guildMember: null });
                tmp25 = jsx;
              } else if (automodUserProfileQuarantined) {
                const obj9 = { guildId: null };
                obj9[0] = guildId;
                tmp23Result = jsx(tmp7(tmp3[44]), { guildId: null });
                tmp25 = jsx;
              } else if (notClaimed) {
                const obj10 = { type: "simple-action", icon: null, message: null };
                obj10[1] = jsx(tmp2(tmp3[45]).ChatXIcon, {});
                const intl11 = tmp2(tmp3[37]).intl;
                obj10[2] = intl11.string(tmp2(tmp3[37]).t["Eg3/c9"]);
                tmp23Result = jsx(tmp7(tmp3[35]), { type: "simple-action", icon: null, message: null });
                tmp25 = jsx;
                const tmp7Result1 = tmp7(tmp3[35]);
              } else if (notPhoneVerified) {
                const obj11 = { type: "button-action", message: null, buttonPrimaryText: null, buttonPrimaryOnPress: null };
                const intl9 = tmp2(tmp3[37]).intl;
                obj11[1] = intl9.string(tmp2(tmp3[37]).t["2dThMM"]);
                const intl10 = tmp2(tmp3[37]).intl;
                obj11[2] = intl10.string(tmp2(tmp3[37]).t["50gfOv"]);
                obj11[3] = function handleVerifyPhone() {
                  let obj = guildId(stateFromStores[23]);
                  obj = { cta_type: constants.VERIFY_PHONE };
                  obj.trackWithMetadata(constants2.TEXT_AREA_CTA_CLICKED, obj);
                  obj = { reason: null };
                  const obj3 = guildId(stateFromStores[25]);
                  obj[0] = channel(stateFromStores[28]).ChangePhoneReason.GUILD_PHONE_REQUIRED;
                  obj3.pushLazy(channel(stateFromStores[27])(stateFromStores[26], stateFromStores.paths), obj, closure_15);
                };
                tmp23Result = jsx(tmp7(tmp3[35]), { type: "button-action", message: null, buttonPrimaryText: null, buttonPrimaryOnPress: null });
                tmp25 = jsx;
                const tmp7Result2 = tmp7(tmp3[35]);
              } else if (notEmailVerified) {
                const obj12 = { type: "button-action", message: null, buttonPrimaryText: null, buttonPrimaryOnPress: null };
                const intl7 = tmp2(tmp3[37]).intl;
                obj12[1] = intl7.string(tmp2(tmp3[37]).t.FkGPS5);
                const intl8 = tmp2(tmp3[37]).intl;
                obj12[2] = intl8.string(tmp2(tmp3[37]).t.lm1UKt);
                obj12[3] = function handleVerifyEmail() {
                  let obj = guildId(stateFromStores[23]);
                  obj = { cta_type: constants.VERIFY_EMAIL };
                  obj.trackWithMetadata(constants2.TEXT_AREA_CTA_CLICKED, obj);
                  guildId(stateFromStores[29]).open();
                };
                tmp23Result = jsx(tmp7(tmp3[35]), { type: "button-action", message: null, buttonPrimaryText: null, buttonPrimaryOnPress: null });
                tmp25 = jsx;
                const tmp7Result3 = tmp7(tmp3[35]);
              } else if (newMember) {
                const obj13 = { type: "simple-action", icon: null, message: null, countdown: null };
                obj13[1] = jsx(tmp2(tmp3[46]).CalendarIcon, {});
                const intl6 = tmp2(tmp3[37]).intl;
                const obj14 = { min: null };
                obj14[0] = constants3.MEMBER_AGE;
                obj13[2] = intl6.formatToPlainString(tmp2(tmp3[37]).t.IH7RMF, obj14);
                obj13[3] = memberDeadline;
                tmp23Result = jsx(tmp7(tmp3[35]), { type: "simple-action", icon: null, message: null, countdown: null });
                tmp25 = jsx;
                const tmp7Result4 = tmp7(tmp3[35]);
              } else if (newAccount) {
                const obj15 = { type: "simple-action", icon: null, message: null, countdown: null };
                obj15[1] = jsx(tmp2(tmp3[46]).CalendarIcon, {});
                const intl5 = tmp2(tmp3[37]).intl;
                const obj16 = { min: null };
                obj16[0] = constants3.ACCOUNT_AGE;
                obj15[2] = intl5.formatToPlainString(tmp2(tmp3[37]).t["2JA2GH"], obj16);
                obj15[3] = accountDeadline;
                tmp23Result = jsx(tmp7(tmp3[35]), { type: "simple-action", icon: null, message: null, countdown: null });
                tmp25 = jsx;
                const tmp7Result5 = tmp7(tmp3[35]);
              } else {
                if (missingVerificationRole) {
                  if (null != verificationRole) {
                    const intl3 = tmp2(tmp3[37]).intl;
                    const obj17 = { roleName: null };
                    const _HermesInternal = HermesInternal;
                    obj17[0] = "@" + verificationRole.name;
                    const formatResult = intl3.format(tmp2(tmp3[37]).t.HbivnU, obj17);
                    if (null === verificationRole.tags.guild_connections) {
                      const obj18 = { type: "button-action", message: null, buttonPrimaryText: null, buttonPrimaryOnPress: null };
                      obj18[1] = formatResult;
                      const intl4 = tmp2(tmp3[37]).intl;
                      obj18[2] = intl4.string(tmp2(tmp3[37]).t["6Ge2LG"]);
                      obj18[3] = function handleGetVerificationRole() {
                        let tmp2 = null != verificationRole;
                        if (tmp2) {
                          tmp2 = null != guildId;
                        }
                        if (tmp2) {
                          const result = channel(stateFromStores[30]).openGuildRoleConnectionsConnectAccountModal(verificationRole, guildId);
                          const obj = channel(stateFromStores[30]);
                        }
                      };
                      let obj19 = obj18;
                    } else {
                      obj19 = { type: "simple-action", message: null };
                      obj19[1] = formatResult;
                    }
                    tmp23Result = tmp29(tmp7(tmp3[35]), obj19);
                    tmp25 = tmp29;
                    const tmp7Result6 = tmp7(tmp3[35]);
                  }
                }
                if (isReadonly) {
                  if (null != guildId) {
                    if (!isForumPostResult) {
                      if (!verificationRole(channel.type)) {
                        if (canCreateThreads) {
                          const obj20 = { type: "button-action", message: null, buttonPrimaryText: null, buttonPrimaryOnPress: null };
                          const intl = tmp2(tmp3[37]).intl;
                          obj20[1] = intl.string(tmp2(tmp3[37]).t.Yi2xuY);
                          const intl2 = tmp2(tmp3[37]).intl;
                          obj20[2] = intl2.string(tmp2(tmp3[37]).t.rBIGBL);
                          obj20[3] = function handleCreateThread() {
                            const result = channel(stateFromStores[31]).navigateToThreadCreation(channel, "chat input guard");
                          };
                          tmp23Result = tmp23(tmp7(tmp3[35]), obj20);
                          tmp25 = tmp23;
                          const tmp7Result7 = tmp7(tmp3[35]);
                        } else {
                          const obj21 = { guildId: null, channel: null };
                          obj21[0] = guildId;
                          obj21[1] = channel;
                          tmp23Result = tmp23(tmp7(tmp3[47]), obj21);
                          tmp25 = tmp23;
                        }
                      }
                    }
                  }
                }
                return children;
              }
            }
          }
          const obj22 = { showLinkedLobbyApplicationLoadingIndicator: null, requiredLinkedLobbyApplication: null };
          obj22[0] = showLinkedLobbyApplicationLoadingIndicator;
          obj22[1] = requiredLinkedLobbyApplication;
          tmp23Result = jsx(tmp7(tmp3[42]), { showLinkedLobbyApplicationLoadingIndicator: null, requiredLinkedLobbyApplication: null });
          tmp25 = jsx;
        }
      }
    }
    const obj23 = { channel: null, isReadonlyAnnouncementsChannel: null };
    obj23[0] = channel;
    obj23[1] = tmp9;
    tmp23Result = jsx(tmp7(tmp3[40]), { channel: null, isReadonlyAnnouncementsChannel: null });
    tmp25 = jsx;
  }
};