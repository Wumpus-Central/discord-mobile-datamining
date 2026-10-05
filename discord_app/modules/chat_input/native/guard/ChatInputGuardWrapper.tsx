// === Module 12076: ChatInputGuardWrapper ===

// Module 12076 (ChatInputGuardWrapper)
import Fragment from "Fragment" /* 21 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import CommunicationDisabledUtils from "CommunicationDisabledUtils" /* 4496 */;
import AutomodPermissionUtils from "AutomodPermissionUtils" /* 4515 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5070 */;
import MemberVerificationUtils from "MemberVerificationUtils" /* 5842 */;
import PhoneConstants from "PhoneConstants" /* 6540 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9434 */;
import navigateToThreadCreation from "navigateToThreadCreation" /* 11019 */;
import GuildRoleConnectionsModalActionCreators from "GuildRoleConnectionsModalActionCreators" /* 11186 */;
import ChatInputConstants from "ChatInputConstants" /* 11576 */;
import react from "react" /* 19 */;
import LurkingStore from "LurkingStore" /* 4510 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5570 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let closure_12;
let map1;
let unpackModuleId;
const isThread = ChannelRecord.isThread;
const TextAreaCta = ChatInputConstants.TextAreaCta;
({ AnalyticEvents: unpackModuleId, ChannelTypes: closure_12, VerificationCriteria: map1 } = Constants);
let closure_14 = PhoneConstants.PHONE_VERIFICATION_MODAL_KEY;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardWrapper.tsx");

export default function ChatInputGuardWrapper(channel) {
  let accountDeadline;
  let automodUserProfileQuarantined;
  let canCreateThreads;
  let canSendMessages;
  let children;
  let intl4;
  let isReadonly;
  let memberDeadline;
  let missingVerificationRole;
  let newAccount;
  let newMember;
  let notEmailVerified;
  let notPhoneVerified;
  let onJumpToPresent;
  let requiredLinkedLobbyApplication;
  let screenIndex;
  let shouldRelaunchLinkedLobbyApplication;
  let showLinkedLobbyApplicationLoadingIndicator;
  let showMemberVerificationModal;
  let tmp21Result;
  let tmp23;
  let user;
  channel = channel.channel;
  let stateFromStores;
  ({ screenIndex, canSendMessages, canCreateThreads, children, isReadonly, onJumpToPresent } = channel);
  const guildId = channel.getGuildId();
  let tmp2 = channel;
  let tmp3 = stateFromStores;
  let obj = channel(stateFromStores[12]);
  const items = [GuildStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    const obj = MemberVerificationUtils;
    return obj.guildHasVerificationGate(GuildStore.getGuild(guildId));
  });
  let obj2 = channel(stateFromStores[12]);
  const items1 = [GuildVerificationStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => GuildVerificationStore.getCheck(guildId));
  const notClaimed = stateFromStores1.notClaimed;
  const verificationRole = stateFromStores1.verificationRole;
  ({ notPhoneVerified, notEmailVerified, newMember, newAccount, memberDeadline, accountDeadline, missingVerificationRole } = stateFromStores1);
  let obj3 = channel(stateFromStores[12]);
  const items2 = [UserStore, GuildMemberStore];
  const items3 = [guildId, stateFromStores, notClaimed];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items2, () => {
    let isPending;
    let tmp6Result;
    let tmp8;
    const currentUser = UserStore.getCurrentUser();
    let member = null;
    if (null != currentUser) {
      member = null;
      if (null != guildId) {
        member = GuildMemberStore.getMember(tmp3, currentUser.id);
      }
    }
    const obj = { user: currentUser, showMemberVerificationModal: (true === isPending || notClaimed) && stateFromStores, communicationDisabledGuildMember: tmp8, automodUserProfileQuarantined: tmp6Result.hasAutomodQuarantinedProfile(member) };
    isPending = undefined;
    if (member != null) {
      isPending = member.isPending;
    }
    tmp8 = undefined;
    const obj2 = CommunicationDisabledUtils;
    if (obj2.isMemberCommunicationDisabled(member)) {
      tmp8 = member;
    }
    tmp6Result = AutomodPermissionUtils;
    return obj;
  }, items3);
  const communicationDisabledGuildMember = stateFromStoresObject.communicationDisabledGuildMember;
  ({ user, showMemberVerificationModal, automodUserProfileQuarantined } = stateFromStoresObject);
  let tmp9 = channel.type === constants2.GUILD_ANNOUNCEMENT;
  let tmp8 = guildId(stateFromStores[16])(user, channel);
  if (tmp9) {
    tmp9 = !canSendMessages;
  }
  let obj4 = { channelId: channel.id };
  const tmp10 = guildId(tmp3[17])(obj4);
  const tmp2Result = tmp2(tmp3[18]);
  const tmp11 = tmp2Result.useIsMessageRequest(channel.id) && channel.isPrivate();
  const tmp2Result4 = tmp2(tmp3[19]);
  const tmp12 = tmp2Result4.useIsSpamMessageRequest(channel.id) && channel.isPrivate();
  const items4 = [RelationshipStore];
  const items5 = [channel];
  const isForumPostResult = channel.isForumPost();
  const tmp2Result5 = tmp2(tmp3[12]);
  const stateFromStores2 = tmp2Result5.useStateFromStores(items4, () => {
    const isDMResult = channel.isDM() && RelationshipStore.isBlocked(channel.getRecipientId());
    return isDMResult;
  }, items5);
  const items6 = [notClaimed];
  const items7 = [guildId];
  const tmp2Result6 = tmp2(tmp3[12]);
  const stateFromStores3 = tmp2Result6.useStateFromStores(items6, () => {
    const isLurkingResult = null != guildId && LurkingStore.isLurking(tmp);
    return isLurkingResult;
  }, items7);
  ({ showLinkedLobbyApplicationLoadingIndicator, requiredLinkedLobbyApplication, shouldRelaunchLinkedLobbyApplication } = guildId(tmp3[20])(channel.linkedLobby));
  guildId(tmp3[20])(channel.linkedLobby);
  guildId(tmp3[21])(channel.id);
  if (tmp11) {
    tmp21Result = jsx(tmp7(tmp3[31]), { channel });
    tmp23 = jsx;
  } else if (tmp12) {
    tmp21Result = jsx(tmp7(tmp3[32]), { channel });
    tmp23 = jsx;
  } else if (channel.isSystemDM()) {
    guildId(tmp3[33]);
    const intl14 = tmp2(tmp3[35]).intl;
    const intl15 = tmp2(tmp3[35]).intl;
    tmp21Result = <tmp7Result type="simple-action" icon={null} message={intl14.string(tmp2(tmp3[35]).t.Bt2N7D)} subtext={intl15.string(tmp2(tmp3[35]).t["n/Vzkw"])} />;
    tmp23 = jsx;
  } else if (tmp8) {
    tmp21Result = jsx(tmp7(tmp3[36]), {});
    tmp23 = jsx;
  } else {
    if (tmp9) {
      if (null != tmp10) {
        tmp21Result = jsx(tmp7(tmp3[37]), { pendingGameProfileReturn: tmp10 });
        tmp23 = jsx;
      }
    }
    if (!stateFromStores3) {
      if (!tmp9) {
        if (stateFromStores2) {
          guildId(tmp3[33]);
          const intl12 = tmp2(tmp3[35]).intl;
          const intl13 = tmp2(tmp3[35]).intl;
          tmp21Result = <tmp7Result9 type="button-action" message={intl12.string(tmp2(tmp3[35]).t["9T6N5/"])} buttonPrimaryText={intl13.string(tmp2(tmp3[35]).t.XyHpKH)} buttonPrimaryOnPress={function handleUnblock() {
            if (channel.isDM()) {
              const obj3 = { cta_type: TextAreaCta.UNBLOCK };
              const obj2 = AppAnalyticsUtilsDefault;
              obj2.trackWithMetadata(unpackModuleId.TEXT_AREA_CTA_CLICKED, obj3);
              const obj4 = RelationshipActionCreatorsDefault;
              obj4.unblockUser(channel.getRecipientId());
            }
          }} />;
          tmp23 = jsx;
        } else if (showMemberVerificationModal) {
          tmp21Result = jsx(tmp7(tmp3[39]), { guildId });
          tmp23 = jsx;
        } else {
          if (!showLinkedLobbyApplicationLoadingIndicator) {
            if (null == requiredLinkedLobbyApplication) {
              if (null != communicationDisabledGuildMember) {
                tmp21Result = jsx(tmp7(tmp3[41]), { guildMember: communicationDisabledGuildMember });
                tmp23 = jsx;
              } else if (automodUserProfileQuarantined) {
                tmp21Result = jsx(tmp7(tmp3[42]), { guildId });
                tmp23 = jsx;
              } else if (notClaimed) {
                guildId(tmp3[33]);
                const intl11 = tmp2(tmp3[35]).intl;
                tmp21Result = <tmp7Result10 type="simple-action" icon={null} message={intl11.string(tmp2(tmp3[35]).t["Eg3/c9"])} />;
                tmp23 = jsx;
              } else if (notPhoneVerified) {
                guildId(tmp3[33]);
                const intl9 = tmp2(tmp3[35]).intl;
                const intl10 = tmp2(tmp3[35]).intl;
                tmp21Result = <tmp7Result11 type="button-action" message={intl9.string(tmp2(tmp3[35]).t["2dThMM"])} buttonPrimaryText={intl10.string(tmp2(tmp3[35]).t["50gfOv"])} buttonPrimaryOnPress={function handleVerifyPhone() {
                  const obj = guildId(stateFromStores[22]);
                  const obj2 = { cta_type: constants.VERIFY_PHONE };
                  obj.trackWithMetadata(constants2.TEXT_AREA_CTA_CLICKED, obj2);
                  const pushLazy = guildId(stateFromStores[24]).pushLazy;
                  const obj3 = { reason: channel(stateFromStores[27]).ChangePhoneReason.GUILD_PHONE_REQUIRED };
                  guildId(stateFromStores[24]);
                  const tmp3 = channel(stateFromStores[26])(stateFromStores[25], stateFromStores.paths);
                  pushLazy(tmp3, obj3, closure_1_14);
                }} />;
                tmp23 = jsx;
              } else if (notEmailVerified) {
                guildId(tmp3[33]);
                const intl7 = tmp2(tmp3[35]).intl;
                const intl8 = tmp2(tmp3[35]).intl;
                tmp21Result = <tmp7Result12 type="button-action" message={intl7.string(tmp2(tmp3[35]).t.FkGPS5)} buttonPrimaryText={intl8.string(tmp2(tmp3[35]).t.lm1UKt)} buttonPrimaryOnPress={function handleVerifyEmail() {
                  const obj = guildId(stateFromStores[22]);
                  const obj2 = { cta_type: constants.VERIFY_EMAIL };
                  obj.trackWithMetadata(constants2.TEXT_AREA_CTA_CLICKED, obj2);
                  const obj3 = guildId(stateFromStores[28]);
                  obj3.open();
                }} />;
                tmp23 = jsx;
              } else if (newMember) {
                guildId(tmp3[33]);
                const intl6 = tmp2(tmp3[35]).intl;
                const obj17 = { min: constants3.MEMBER_AGE };
                tmp21Result = <tmp7Result13 type="simple-action" icon={null} message={intl6.formatToPlainString(tmp2(tmp3[35]).t.IH7RMF, obj17)} countdown={memberDeadline} />;
                tmp23 = jsx;
              } else if (newAccount) {
                guildId(tmp3[33]);
                const intl5 = tmp2(tmp3[35]).intl;
                const obj19 = { min: constants3.ACCOUNT_AGE };
                tmp21Result = <tmp7Result14 type="simple-action" icon={null} message={intl5.formatToPlainString(tmp2(tmp3[35]).t["2JA2GH"], obj19)} countdown={accountDeadline} />;
                tmp23 = jsx;
              } else {
                if (missingVerificationRole) {
                  if (null != verificationRole) {
                    let obj22;
                    const guild_connections = verificationRole.tags.guild_connections;
                    const intl3 = tmp2(tmp3[35]).intl;
                    const format = intl3.format;
                    const _HermesInternal = HermesInternal;
                    const obj20 = { roleName: "@" + verificationRole.name };
                    const HbivnU = tmp2(tmp3[35]).t.HbivnU;
                    const formatResult = format(HbivnU, obj20);
                    guildId(tmp3[33]);
                    if (null === guild_connections) {
                      const obj21 = {
                        type: "button-action",
                        message: formatResult,
                        buttonPrimaryText: intl4.string(tmp2(tmp3[35]).t["6Ge2LG"]),
                        buttonPrimaryOnPress: function handleGetVerificationRole() {
                                              const tmp2 = null != verificationRole && null != guildId;
                                              if (tmp2) {
                                                const obj = GuildRoleConnectionsModalActionCreators;
                                                const result = obj.openGuildRoleConnectionsConnectAccountModal(verificationRole, guildId);
                                              }
                                            }
                      };
                      intl4 = tmp2(tmp3[35]).intl;
                      obj22 = obj21;
                    } else {
                      obj22 = { type: "simple-action", message: formatResult };
                    }
                    tmp21Result = <tmp7Result15 {...obj22} />;
                    tmp23 = jsx;
                  }
                }
                if (isReadonly) {
                  if (null != guildId) {
                    if (!isForumPostResult) {
                      if (!verificationRole(channel.type)) {
                        if (canCreateThreads) {
                          guildId(tmp3[33]);
                          const intl = tmp2(tmp3[35]).intl;
                          const intl2 = tmp2(tmp3[35]).intl;
                          tmp21Result = <tmp7Result16 type="button-action" message={intl.string(tmp2(tmp3[35]).t.Yi2xuY)} buttonPrimaryText={intl2.string(tmp2(tmp3[35]).t.rBIGBL)} buttonPrimaryOnPress={function handleCreateThread() {
                            const obj = navigateToThreadCreation;
                            const result = obj.navigateToThreadCreation(channel, "chat input guard");
                          }} />;
                          tmp23 = jsx;
                        } else {
                          tmp21Result = jsx(tmp7(tmp3[45]), { guildId, channel });
                          tmp23 = jsx;
                        }
                      }
                    }
                  }
                }
                return children;
              }
            }
          }
          tmp21Result = jsx(tmp7(tmp3[40]), { showLinkedLobbyApplicationLoadingIndicator, requiredLinkedLobbyApplication, shouldRelaunchLinkedLobbyApplication });
          tmp23 = jsx;
        }
      }
    }
    tmp21Result = jsx(tmp7(tmp3[38]), { channel, isReadonlyAnnouncementsChannel: tmp9 });
    tmp23 = jsx;
  }
  const obj27 = { screenIndex, channelId: channel.id, onJumpToPresent, children: tmp21Result };
  return tmp23(tmp2(tmp3[33]).ChatInputGuardContainer, obj27);
};