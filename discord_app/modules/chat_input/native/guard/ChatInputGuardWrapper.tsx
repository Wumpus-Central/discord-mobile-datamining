// === Module 12585: ChatInputGuardWrapper ===

// Module 12585 (ChatInputGuardWrapper)
import CommunicationDisabledUtils from "CommunicationDisabledUtils" /* 4266 */;
import AutomodPermissionUtils from "AutomodPermissionUtils" /* 4284 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4820 */;
import MemberVerificationUtils from "MemberVerificationUtils" /* 5145 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9196 */;
import navigateToThreadCreation from "navigateToThreadCreation" /* 11376 */;
import GuildRoleConnectionsModalActionCreators from "GuildRoleConnectionsModalActionCreators" /* 11719 */;
import noop from "module_19" /* 19 */;
import LurkingStore from "LurkingStore" /* 4279 */;
import GuildMemberStore from "GuildMemberStore" /* 2022 */;
import GuildStore from "GuildStore" /* 1980 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5501 */;
import RelationshipStore from "RelationshipStore" /* 4288 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const isThread = fn(1962).isThread;
const TextAreaCta = fn(12113).TextAreaCta;
const Constants = fn(1074);
({ AnalyticEvents: closure_11, ChannelTypes: closure_12, VerificationCriteria: map1 } = Constants);
let closure_14 = fn(7157).PHONE_VERIFICATION_MODAL_KEY;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardWrapper.tsx");

export default function ChatInputGuardWrapper(channel) {
  channel = channel.channel;
  let stateFromStores;
  ({ screenIndex, canSendMessages, canCreateThreads, children, isReadonly, onJumpToPresent } = channel);
  const guildId = channel.getGuildId();
  const tmp3 = stateFromStores;
  const items = [GuildStore];
  stateFromStores = channel(stateFromStores[12]).useStateFromStores(items, () => MemberVerificationUtils.guildHasVerificationGate(GuildStore.getGuild(guildId)));
  let obj = channel(stateFromStores[12]);
  const items1 = [GuildVerificationStore];
  const stateFromStores1 = channel(stateFromStores[12]).useStateFromStores(items1, () => GuildVerificationStore.getCheck(guildId));
  const notClaimed = stateFromStores1.notClaimed;
  const verificationRole = stateFromStores1.verificationRole;
  ({ notPhoneVerified, notEmailVerified, newMember, newAccount, memberDeadline, accountDeadline, missingVerificationRole } = stateFromStores1);
  let obj2 = channel(stateFromStores[12]);
  const items2 = [UserStore, GuildMemberStore];
  const items3 = [guildId, stateFromStores, notClaimed];
  const stateFromStoresObject = channel(stateFromStores[12]).useStateFromStoresObject(items2, () => {
    const currentUser = UserStore.getCurrentUser();
    let member = null;
    if (null != currentUser) {
      member = null;
      if (null != guildId) {
        member = GuildMemberStore.getMember(tmp3, currentUser.id);
      }
    }
    const obj = { user: currentUser, showMemberVerificationModal: null, communicationDisabledGuildMember: null, automodUserProfileQuarantined: null };
    let isPending;
    if (member != null) {
      isPending = member.isPending;
    }
    obj.showMemberVerificationModal = (true === isPending || notClaimed) && stateFromStores;
    let tmp8;
    if (obj2.isMemberCommunicationDisabled(member)) {
      tmp8 = member;
    }
    obj.communicationDisabledGuildMember = tmp8;
    obj2 = CommunicationDisabledUtils;
    obj.automodUserProfileQuarantined = AutomodPermissionUtils.hasAutomodQuarantinedProfile(member);
    return obj;
  }, items3);
  const communicationDisabledGuildMember = stateFromStoresObject.communicationDisabledGuildMember;
  ({ user, showMemberVerificationModal, automodUserProfileQuarantined } = stateFromStoresObject);
  let tmp9 = channel.type === constants2.GUILD_ANNOUNCEMENT;
  let obj3 = channel(stateFromStores[12]);
  if (tmp9) {
    tmp9 = !canSendMessages;
  }
  const tmp10 = guildId(tmp3[17])({ channelId: channel.id });
  let obj4 = { channelId: channel.id };
  let tmp8 = guildId(stateFromStores[16])(user, channel);
  const tmp2Result = channel(tmp3[18]);
  const tmp11 = channel(tmp3[18]).useIsMessageRequest(channel.id) && channel.isPrivate();
  const tmp2Result4 = channel(tmp3[19]);
  const tmp12 = channel(tmp3[19]).useIsSpamMessageRequest(channel.id) && channel.isPrivate();
  const isForumPostResult = channel.isForumPost();
  const items4 = [RelationshipStore];
  const items5 = [channel];
  const stateFromStores2 = channel(tmp3[12]).useStateFromStores(items4, () => {
    let isDMResult = channel.isDM();
    if (isDMResult) {
      isDMResult = RelationshipStore.isBlocked(channel.getRecipientId());
    }
    return isDMResult;
  }, items5);
  const tmp2Result5 = channel(tmp3[12]);
  const items6 = [notClaimed];
  const items7 = [guildId];
  const stateFromStores3 = channel(tmp3[12]).useStateFromStores(items6, () => {
    let isLurkingResult = null != guildId;
    if (isLurkingResult) {
      isLurkingResult = LurkingStore.isLurking(tmp);
    }
    return isLurkingResult;
  }, items7);
  const tmp2Result6 = channel(tmp3[12]);
  ({ showLinkedLobbyApplicationLoadingIndicator, requiredLinkedLobbyApplication, shouldRelaunchLinkedLobbyApplication } = guildId(tmp3[20])(channel.linkedLobby));
  guildId(tmp3[21])(channel.id);
  if (tmp11) {
    const obj5 = { channel };
    let tmp21Result = jsx(tmp7(tmp3[31]), { channel });
    let tmp23 = jsx;
  } else if (tmp12) {
    const obj6 = { channel };
    tmp21Result = jsx(tmp7(tmp3[32]), { channel });
    tmp23 = jsx;
  } else if (channel.isSystemDM()) {
    const obj7 = { type: "simple-action", icon: jsx(tmp2(tmp3[34]).CircleInformationIcon, {}), message: null, subtext: null };
    const intl14 = tmp2(tmp3[35]).intl;
    obj7.message = intl14.string(tmp2(tmp3[35]).t.Bt2N7D);
    const intl15 = tmp2(tmp3[35]).intl;
    obj7.subtext = intl15.string(tmp2(tmp3[35]).t["n/Vzkw"]);
    tmp21Result = jsx(tmp7(tmp3[33]), { type: "simple-action", icon: jsx(tmp2(tmp3[34]).CircleInformationIcon, {}), message: null, subtext: null });
    tmp23 = jsx;
    const tmp7Result = tmp7(tmp3[33]);
  } else if (tmp8) {
    tmp21Result = jsx(tmp7(tmp3[36]), {});
    tmp23 = jsx;
  } else {
    if (tmp9) {
      if (null != tmp10) {
        const obj8 = { pendingGameProfileReturn: tmp10 };
        tmp21Result = jsx(tmp7(tmp3[37]), { pendingGameProfileReturn: tmp10 });
        tmp23 = jsx;
      }
    }
    if (!stateFromStores3) {
      if (!tmp9) {
        if (stateFromStores2) {
          const obj9 = { type: "button-action", message: null, buttonPrimaryText: null, buttonPrimaryOnPress: null };
          const intl12 = tmp2(tmp3[35]).intl;
          obj9.message = intl12.string(tmp2(tmp3[35]).t["9T6N5/"]);
          const intl13 = tmp2(tmp3[35]).intl;
          obj9.buttonPrimaryText = intl13.string(tmp2(tmp3[35]).t.XyHpKH);
          obj9.buttonPrimaryOnPress = function handleUnblock() {
            if (channel.isDM()) {
              const obj3 = { cta_type: TextAreaCta.UNBLOCK };
              AppAnalyticsUtilsDefault.trackWithMetadata(constants.TEXT_AREA_CTA_CLICKED, obj3);
              RelationshipActionCreatorsDefault.unblockUser(channel.getRecipientId());
            }
          };
          tmp21Result = jsx(tmp7(tmp3[33]), { type: "button-action", message: null, buttonPrimaryText: null, buttonPrimaryOnPress: null });
          tmp23 = jsx;
          const tmp7Result9 = tmp7(tmp3[33]);
        } else if (showMemberVerificationModal) {
          const obj10 = { guildId };
          tmp21Result = jsx(tmp7(tmp3[39]), { guildId });
          tmp23 = jsx;
        } else {
          if (!showLinkedLobbyApplicationLoadingIndicator) {
            if (null == requiredLinkedLobbyApplication) {
              if (null != communicationDisabledGuildMember) {
                const obj11 = { guildMember: communicationDisabledGuildMember };
                tmp21Result = jsx(tmp7(tmp3[41]), { guildMember: communicationDisabledGuildMember });
                tmp23 = jsx;
              } else if (automodUserProfileQuarantined) {
                const obj12 = { guildId };
                tmp21Result = jsx(tmp7(tmp3[42]), { guildId });
                tmp23 = jsx;
              } else if (notClaimed) {
                const obj13 = { type: "simple-action", icon: jsx(tmp2(tmp3[43]).ChatXIcon, {}), message: null };
                const intl11 = tmp2(tmp3[35]).intl;
                obj13.message = intl11.string(tmp2(tmp3[35]).t["Eg3/c9"]);
                tmp21Result = jsx(tmp7(tmp3[33]), { type: "simple-action", icon: jsx(tmp2(tmp3[43]).ChatXIcon, {}), message: null });
                tmp23 = jsx;
                const tmp7Result10 = tmp7(tmp3[33]);
              } else if (notPhoneVerified) {
                const obj14 = { type: "button-action", message: null, buttonPrimaryText: null, buttonPrimaryOnPress: null };
                const intl9 = tmp2(tmp3[35]).intl;
                obj14.message = intl9.string(tmp2(tmp3[35]).t["2dThMM"]);
                const intl10 = tmp2(tmp3[35]).intl;
                obj14.buttonPrimaryText = intl10.string(tmp2(tmp3[35]).t["50gfOv"]);
                obj14.buttonPrimaryOnPress = function handleVerifyPhone() {
                  guildId(stateFromStores[22]).trackWithMetadata(constants2.TEXT_AREA_CTA_CLICKED, { cta_type: constants.VERIFY_PHONE });
                  const obj = guildId(stateFromStores[22]);
                  const obj2 = { cta_type: constants.VERIFY_PHONE };
                  const obj4 = { reason: null };
                  const obj3 = guildId(stateFromStores[24]);
                  obj4.reason = channel(stateFromStores[27]).ChangePhoneReason.GUILD_PHONE_REQUIRED;
                  obj3.pushLazy(channel(stateFromStores[26])(stateFromStores[25], stateFromStores.paths), obj4, closure_1_14);
                };
                tmp21Result = jsx(tmp7(tmp3[33]), { type: "button-action", message: null, buttonPrimaryText: null, buttonPrimaryOnPress: null });
                tmp23 = jsx;
                const tmp7Result11 = tmp7(tmp3[33]);
              } else if (notEmailVerified) {
                const obj15 = { type: "button-action", message: null, buttonPrimaryText: null, buttonPrimaryOnPress: null };
                const intl7 = tmp2(tmp3[35]).intl;
                obj15.message = intl7.string(tmp2(tmp3[35]).t.FkGPS5);
                const intl8 = tmp2(tmp3[35]).intl;
                obj15.buttonPrimaryText = intl8.string(tmp2(tmp3[35]).t.lm1UKt);
                obj15.buttonPrimaryOnPress = function handleVerifyEmail() {
                  guildId(stateFromStores[22]).trackWithMetadata(constants2.TEXT_AREA_CTA_CLICKED, { cta_type: constants.VERIFY_EMAIL });
                  const obj = guildId(stateFromStores[22]);
                  const obj2 = { cta_type: constants.VERIFY_EMAIL };
                  guildId(stateFromStores[28]).open();
                };
                tmp21Result = jsx(tmp7(tmp3[33]), { type: "button-action", message: null, buttonPrimaryText: null, buttonPrimaryOnPress: null });
                tmp23 = jsx;
                const tmp7Result12 = tmp7(tmp3[33]);
              } else if (newMember) {
                const obj16 = { type: "simple-action", icon: jsx(tmp2(tmp3[44]).CalendarIcon, {}), message: null, countdown: null };
                const intl6 = tmp2(tmp3[35]).intl;
                const obj17 = { min: constants3.MEMBER_AGE };
                obj16.message = intl6.formatToPlainString(tmp2(tmp3[35]).t.IH7RMF, obj17);
                obj16.countdown = memberDeadline;
                tmp21Result = jsx(tmp7(tmp3[33]), { type: "simple-action", icon: jsx(tmp2(tmp3[44]).CalendarIcon, {}), message: null, countdown: null });
                tmp23 = jsx;
                const tmp7Result13 = tmp7(tmp3[33]);
              } else if (newAccount) {
                const obj18 = { type: "simple-action", icon: jsx(tmp2(tmp3[44]).CalendarIcon, {}), message: null, countdown: null };
                const intl5 = tmp2(tmp3[35]).intl;
                const obj19 = { min: constants3.ACCOUNT_AGE };
                obj18.message = intl5.formatToPlainString(tmp2(tmp3[35]).t["2JA2GH"], obj19);
                obj18.countdown = accountDeadline;
                tmp21Result = jsx(tmp7(tmp3[33]), { type: "simple-action", icon: jsx(tmp2(tmp3[44]).CalendarIcon, {}), message: null, countdown: null });
                tmp23 = jsx;
                const tmp7Result14 = tmp7(tmp3[33]);
              } else {
                if (missingVerificationRole) {
                  if (null != verificationRole) {
                    const intl3 = tmp2(tmp3[35]).intl;
                    const obj20 = { roleName: null };
                    const _HermesInternal = HermesInternal;
                    obj20.roleName = "@" + verificationRole.name;
                    const formatResult = intl3.format(tmp2(tmp3[35]).t.HbivnU, obj20);
                    if (null === verificationRole.tags.guild_connections) {
                      const obj21 = { type: "button-action", message: formatResult, buttonPrimaryText: null, buttonPrimaryOnPress: null };
                      const intl4 = tmp2(tmp3[35]).intl;
                      obj21.buttonPrimaryText = intl4.string(tmp2(tmp3[35]).t["6Ge2LG"]);
                      obj21.buttonPrimaryOnPress = function handleGetVerificationRole() {
                        let tmp2 = null != verificationRole;
                        if (tmp2) {
                          tmp2 = null != guildId;
                        }
                        if (tmp2) {
                          const result = GuildRoleConnectionsModalActionCreators.openGuildRoleConnectionsConnectAccountModal(verificationRole, guildId);
                        }
                      };
                      let obj22 = obj21;
                    } else {
                      obj22 = { type: "simple-action", message: formatResult };
                    }
                    tmp21Result = jsx(tmp7(tmp3[33]), obj22);
                    tmp23 = jsx;
                    const tmp7Result15 = tmp7(tmp3[33]);
                  }
                }
                if (isReadonly) {
                  if (null != guildId) {
                    if (!isForumPostResult) {
                      if (!verificationRole(channel.type)) {
                        if (canCreateThreads) {
                          const obj23 = { type: "button-action", message: null, buttonPrimaryText: null, buttonPrimaryOnPress: null };
                          const intl = tmp2(tmp3[35]).intl;
                          obj23.message = intl.string(tmp2(tmp3[35]).t.Yi2xuY);
                          const intl2 = tmp2(tmp3[35]).intl;
                          obj23.buttonPrimaryText = intl2.string(tmp2(tmp3[35]).t.rBIGBL);
                          obj23.buttonPrimaryOnPress = function handleCreateThread() {
                            const result = navigateToThreadCreation.navigateToThreadCreation(channel, "chat input guard");
                          };
                          tmp21Result = jsx(tmp7(tmp3[33]), { type: "button-action", message: null, buttonPrimaryText: null, buttonPrimaryOnPress: null });
                          tmp23 = jsx;
                          const tmp7Result16 = tmp7(tmp3[33]);
                        } else {
                          const obj24 = { guildId, channel };
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
          const obj25 = { showLinkedLobbyApplicationLoadingIndicator, requiredLinkedLobbyApplication, shouldRelaunchLinkedLobbyApplication };
          tmp21Result = jsx(tmp7(tmp3[40]), { showLinkedLobbyApplicationLoadingIndicator, requiredLinkedLobbyApplication, shouldRelaunchLinkedLobbyApplication });
          tmp23 = jsx;
        }
      }
    }
    const obj26 = { channel, isReadonlyAnnouncementsChannel: tmp9 };
    tmp21Result = jsx(tmp7(tmp3[38]), { channel, isReadonlyAnnouncementsChannel: tmp9 });
    tmp23 = jsx;
  }
  return tmp23(channel(tmp3[33]).ChatInputGuardContainer, { screenIndex, channelId: channel.id, onJumpToPresent, children: tmp21Result });
};