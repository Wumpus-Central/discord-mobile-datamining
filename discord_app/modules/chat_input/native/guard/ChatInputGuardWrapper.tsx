// === Module 11997: ChatInputGuardWrapper ===

// Module 11997 (ChatInputGuardWrapper)
import noopAll from "noop" /* 19 */;
import closure_3 from "initialize" /* 4122 */;
import { isThread } from "createChannelRecord" /* 1391 */;
import closure_5 from "trackCommunicationDisabled" /* 1992 */;
import closure_6 from "createGuildRecordFromRust" /* 1909 */;
import closure_7 from "recomputeGuild" /* 5357 */;
import closure_8 from "markAllUserIdListsStale" /* 4130 */;
import closure_9 from "mergeGuildAvatar" /* 1922 */;
import { TextAreaCta } from "TextAreaCta" /* 11535 */;
import ME from "ME" /* 676 */;
import { PHONE_VERIFICATION_MODAL_KEY as closure_14 } from "PHONE_VERIFICATION_MODAL_KEY" /* 7769 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
({ AnalyticEvents: unpackModuleId, ChannelTypes: closure_12, VerificationCriteria: map1 } = ME);
let result = require("set").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardWrapper.tsx");

export default function ChatInputGuardWrapper(channel) {
  channel = channel.channel;
  let guildId;
  let stateFromStores;
  let notClaimed;
  let verificationRole;
  ({ screenIndex, canSendMessages, canCreateThreads, children, isReadonly, onJumpToPresent } = channel);
  guildId = channel.getGuildId();
  const tmp3 = stateFromStores;
  let obj = channel(stateFromStores[12]);
  const items = [closure_6];
  stateFromStores = obj.useStateFromStores(items, () => channel(stateFromStores[13]).guildHasVerificationGate(closure_1_6.getGuild(guildId)));
  obj1 = channel(stateFromStores[12]);
  const items1 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => closure_1_7.getCheck(guildId));
  notClaimed = stateFromStores1.notClaimed;
  verificationRole = stateFromStores1.verificationRole;
  ({ notPhoneVerified, notEmailVerified, newMember, newAccount, memberDeadline, accountDeadline, missingVerificationRole } = stateFromStores1);
  let obj2 = channel(stateFromStores[12]);
  const items2 = [closure_9, closure_5];
  const items3 = [guildId, stateFromStores, notClaimed];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items2, () => {
    const currentUser = closure_1_9.getCurrentUser();
    let member = null;
    if (null != currentUser) {
      member = null;
      if (null != guildId) {
        member = closure_1_5.getMember(tmp3, currentUser.id);
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
  const items4 = [closure_8];
  const items5 = [channel];
  const stateFromStores2 = channel(tmp3[12]).useStateFromStores(items4, () => {
    let isDMResult = channel.isDM();
    if (isDMResult) {
      isDMResult = closure_1_8.isBlocked(channel.getRecipientId());
    }
    return isDMResult;
  }, items5);
  const tmp2Result1 = channel(tmp3[12]);
  const items6 = [notClaimed];
  const items7 = [guildId];
  const stateFromStores3 = channel(tmp3[12]).useStateFromStores(items6, () => {
    let isLurkingResult = null != guildId;
    if (isLurkingResult) {
      isLurkingResult = notClaimed.isLurking(tmp);
    }
    return isLurkingResult;
  }, items7);
  const tmp2Result2 = channel(tmp3[12]);
  ({ showLinkedLobbyApplicationLoadingIndicator, requiredLinkedLobbyApplication, shouldRelaunchLinkedLobbyApplication } = guildId(tmp3[20])(channel.linkedLobby));
  guildId(tmp3[21])(channel.id);
  if (tmp11) {
    obj = { channel: null };
    obj[0] = channel;
    let tmp21Result = jsx(tmp7(tmp3[31]), { channel: null });
    let tmp23 = jsx;
  } else if (tmp12) {
    obj1 = { channel: null };
    obj1[0] = channel;
    tmp21Result = jsx(tmp7(tmp3[32]), { channel: null });
    tmp23 = jsx;
  } else if (channel.isSystemDM()) {
    obj2 = { type: "simple-action", icon: null, message: null, subtext: null };
    let tmp7Result = tmp7(tmp3[33]);
    obj2[1] = jsx(tmp2(tmp3[34]).CircleInformationIcon, {});
    const intl14 = tmp2(tmp3[35]).intl;
    obj2[2] = intl14.string(tmp2(tmp3[35]).t.Bt2N7D);
    const intl15 = tmp2(tmp3[35]).intl;
    obj2[3] = intl15.string(tmp2(tmp3[35]).t["n/Vzkw"]);
    tmp21Result = <tmp7Result type="simple-action" icon={null} message={null} subtext={null} />;
    tmp23 = jsx;
  } else if (tmp8) {
    tmp21Result = jsx(tmp7(tmp3[36]), {});
    tmp23 = jsx;
  } else {
    if (tmp9) {
      if (null != tmp10) {
        let obj3 = { pendingGameProfileReturn: null };
        obj3[0] = tmp10;
        tmp21Result = jsx(tmp7(tmp3[37]), { pendingGameProfileReturn: null });
        tmp23 = jsx;
      }
    }
    if (!stateFromStores3) {
      if (!tmp9) {
        if (stateFromStores2) {
          let obj4 = { type: "button-action", message: null, buttonPrimaryText: null, buttonPrimaryOnPress: null };
          tmp7Result = tmp7(tmp3[33]);
          const intl12 = tmp2(tmp3[35]).intl;
          obj4[1] = intl12.string(tmp2(tmp3[35]).t["9T6N5/"]);
          const intl13 = tmp2(tmp3[35]).intl;
          obj4[2] = intl13.string(tmp2(tmp3[35]).t.XyHpKH);
          obj4[3] = function handleUnblock() {
            let obj = channel;
            if (channel.isDM()) {
              obj = { cta_type: null };
              obj[0] = closure_1_10.UNBLOCK;
              guildId(stateFromStores[22]).trackWithMetadata(closure_1_11.TEXT_AREA_CTA_CLICKED, obj);
              const obj2 = guildId(stateFromStores[22]);
              guildId(stateFromStores[23]).unblockUser(obj.getRecipientId());
              const obj4 = guildId(stateFromStores[23]);
            }
          };
          tmp21Result = <tmp7Result type="button-action" message={null} buttonPrimaryText={null} buttonPrimaryOnPress={null} />;
          tmp23 = jsx;
        } else if (showMemberVerificationModal) {
          const obj5 = { guildId: null };
          obj5[0] = guildId;
          tmp21Result = jsx(tmp7(tmp3[39]), { guildId: null });
          tmp23 = jsx;
        } else {
          if (!showLinkedLobbyApplicationLoadingIndicator) {
            if (null == requiredLinkedLobbyApplication) {
              if (null != communicationDisabledGuildMember) {
                const obj6 = { guildMember: null };
                obj6[0] = communicationDisabledGuildMember;
                tmp21Result = jsx(tmp7(tmp3[41]), { guildMember: null });
                tmp23 = jsx;
              } else if (automodUserProfileQuarantined) {
                const obj7 = { guildId: null };
                obj7[0] = guildId;
                tmp21Result = jsx(tmp7(tmp3[42]), { guildId: null });
                tmp23 = jsx;
              } else if (notClaimed) {
                const obj8 = { type: "simple-action", icon: null, message: null };
                obj8[1] = jsx(tmp2(tmp3[43]).ChatXIcon, {});
                const intl11 = tmp2(tmp3[35]).intl;
                obj8[2] = intl11.string(tmp2(tmp3[35]).t["Eg3/c9"]);
                tmp21Result = jsx(tmp7(tmp3[33]), { type: "simple-action", icon: null, message: null });
                tmp23 = jsx;
                const tmp7Result1 = tmp7(tmp3[33]);
              } else if (notPhoneVerified) {
                const obj9 = { type: "button-action", message: null, buttonPrimaryText: null, buttonPrimaryOnPress: null };
                const intl9 = tmp2(tmp3[35]).intl;
                obj9[1] = intl9.string(tmp2(tmp3[35]).t["2dThMM"]);
                const intl10 = tmp2(tmp3[35]).intl;
                obj9[2] = intl10.string(tmp2(tmp3[35]).t["50gfOv"]);
                obj9[3] = function handleVerifyPhone() {
                  let obj = guildId(stateFromStores[22]);
                  obj = { cta_type: constants.VERIFY_PHONE };
                  obj.trackWithMetadata(constants2.TEXT_AREA_CTA_CLICKED, obj);
                  obj = { reason: null };
                  const obj3 = guildId(stateFromStores[24]);
                  obj[0] = channel(stateFromStores[27]).ChangePhoneReason.GUILD_PHONE_REQUIRED;
                  obj3.pushLazy(channel(stateFromStores[26])(stateFromStores[25], stateFromStores.paths), obj, closure_14);
                };
                tmp21Result = jsx(tmp7(tmp3[33]), { type: "button-action", message: null, buttonPrimaryText: null, buttonPrimaryOnPress: null });
                tmp23 = jsx;
                const tmp7Result2 = tmp7(tmp3[33]);
              } else if (notEmailVerified) {
                const obj10 = { type: "button-action", message: null, buttonPrimaryText: null, buttonPrimaryOnPress: null };
                const intl7 = tmp2(tmp3[35]).intl;
                obj10[1] = intl7.string(tmp2(tmp3[35]).t.FkGPS5);
                const intl8 = tmp2(tmp3[35]).intl;
                obj10[2] = intl8.string(tmp2(tmp3[35]).t.lm1UKt);
                obj10[3] = function handleVerifyEmail() {
                  let obj = guildId(stateFromStores[22]);
                  obj = { cta_type: constants.VERIFY_EMAIL };
                  obj.trackWithMetadata(constants2.TEXT_AREA_CTA_CLICKED, obj);
                  guildId(stateFromStores[28]).open();
                };
                tmp21Result = jsx(tmp7(tmp3[33]), { type: "button-action", message: null, buttonPrimaryText: null, buttonPrimaryOnPress: null });
                tmp23 = jsx;
                const tmp7Result3 = tmp7(tmp3[33]);
              } else if (newMember) {
                const obj11 = { type: "simple-action", icon: null, message: null, countdown: null };
                obj11[1] = jsx(tmp2(tmp3[44]).CalendarIcon, {});
                const intl6 = tmp2(tmp3[35]).intl;
                const obj12 = { min: null };
                obj12[0] = constants2.MEMBER_AGE;
                obj11[2] = intl6.formatToPlainString(tmp2(tmp3[35]).t.IH7RMF, obj12);
                obj11[3] = memberDeadline;
                tmp21Result = jsx(tmp7(tmp3[33]), { type: "simple-action", icon: null, message: null, countdown: null });
                tmp23 = jsx;
                const tmp7Result4 = tmp7(tmp3[33]);
              } else if (newAccount) {
                const obj13 = { type: "simple-action", icon: null, message: null, countdown: null };
                obj13[1] = jsx(tmp2(tmp3[44]).CalendarIcon, {});
                const intl5 = tmp2(tmp3[35]).intl;
                const obj14 = { min: null };
                obj14[0] = constants2.ACCOUNT_AGE;
                obj13[2] = intl5.formatToPlainString(tmp2(tmp3[35]).t["2JA2GH"], obj14);
                obj13[3] = accountDeadline;
                tmp21Result = jsx(tmp7(tmp3[33]), { type: "simple-action", icon: null, message: null, countdown: null });
                tmp23 = jsx;
                const tmp7Result5 = tmp7(tmp3[33]);
              } else {
                if (missingVerificationRole) {
                  if (null != verificationRole) {
                    const intl3 = tmp2(tmp3[35]).intl;
                    const obj15 = { roleName: null };
                    const _HermesInternal = HermesInternal;
                    obj15[0] = "@" + verificationRole.name;
                    const formatResult = intl3.format(tmp2(tmp3[35]).t.HbivnU, obj15);
                    if (null === verificationRole.tags.guild_connections) {
                      const obj16 = { type: "button-action", message: null, buttonPrimaryText: null, buttonPrimaryOnPress: null };
                      obj16[1] = formatResult;
                      const intl4 = tmp2(tmp3[35]).intl;
                      obj16[2] = intl4.string(tmp2(tmp3[35]).t["6Ge2LG"]);
                      obj16[3] = function handleGetVerificationRole() {
                        let tmp2 = null != verificationRole;
                        if (tmp2) {
                          tmp2 = null != guildId;
                        }
                        if (tmp2) {
                          const result = channel(stateFromStores[29]).openGuildRoleConnectionsConnectAccountModal(verificationRole, guildId);
                          const obj = channel(stateFromStores[29]);
                        }
                      };
                      let obj17 = obj16;
                    } else {
                      obj17 = { type: "simple-action", message: null };
                      obj17[1] = formatResult;
                    }
                    tmp21Result = tmp27(tmp7(tmp3[33]), obj17);
                    tmp23 = tmp27;
                    const tmp7Result6 = tmp7(tmp3[33]);
                  }
                }
                if (isReadonly) {
                  if (null != guildId) {
                    if (!isForumPostResult) {
                      if (!verificationRole(channel.type)) {
                        if (canCreateThreads) {
                          const obj18 = { type: "button-action", message: null, buttonPrimaryText: null, buttonPrimaryOnPress: null };
                          const intl = tmp2(tmp3[35]).intl;
                          obj18[1] = intl.string(tmp2(tmp3[35]).t.Yi2xuY);
                          const intl2 = tmp2(tmp3[35]).intl;
                          obj18[2] = intl2.string(tmp2(tmp3[35]).t.rBIGBL);
                          obj18[3] = function handleCreateThread() {
                            const result = channel(stateFromStores[30]).navigateToThreadCreation(channel, "chat input guard");
                          };
                          tmp21Result = tmp21(tmp7(tmp3[33]), obj18);
                          tmp23 = tmp21;
                          const tmp7Result7 = tmp7(tmp3[33]);
                        } else {
                          const obj19 = { guildId: null, channel: null };
                          obj19[0] = guildId;
                          obj19[1] = channel;
                          tmp21Result = tmp21(tmp7(tmp3[45]), obj19);
                          tmp23 = tmp21;
                        }
                      }
                    }
                  }
                }
                return children;
              }
            }
          }
          const obj20 = { showLinkedLobbyApplicationLoadingIndicator: null, requiredLinkedLobbyApplication: null, shouldRelaunchLinkedLobbyApplication: null };
          obj20[0] = showLinkedLobbyApplicationLoadingIndicator;
          obj20[1] = requiredLinkedLobbyApplication;
          obj20[2] = shouldRelaunchLinkedLobbyApplication;
          tmp21Result = jsx(tmp7(tmp3[40]), { showLinkedLobbyApplicationLoadingIndicator: null, requiredLinkedLobbyApplication: null, shouldRelaunchLinkedLobbyApplication: null });
          tmp23 = jsx;
        }
      }
    }
    const obj21 = { channel: null, isReadonlyAnnouncementsChannel: null };
    obj21[0] = channel;
    obj21[1] = tmp9;
    tmp21Result = jsx(tmp7(tmp3[38]), { channel: null, isReadonlyAnnouncementsChannel: null });
    tmp23 = jsx;
  }
  return tmp23(channel(tmp3[33]).ChatInputGuardContainer, { screenIndex, channelId: channel.id, onJumpToPresent, children: tmp21Result });
};