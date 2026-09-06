// === Module 12433: ChatInputGuardWrapper ===

// Module 12433 (ChatInputGuardWrapper)
import CommunicationDisabledUtils from "CommunicationDisabledUtils" /* 4188 */;
import AutomodPermissionUtils from "AutomodPermissionUtils" /* 4205 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4740 */;
import MemberVerificationUtils from "MemberVerificationUtils" /* 5058 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9042 */;
import navigateToThreadCreation from "navigateToThreadCreation" /* 11222 */;
import GuildRoleConnectionsModalActionCreators from "GuildRoleConnectionsModalActionCreators" /* 11569 */;
import noop from "module_19" /* 19 */;
import LurkingStore from "LurkingStore" /* 4200 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5413 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const isThread = fn(1961).isThread;
const TextAreaCta = fn(11962).TextAreaCta;
const Constants = fn(1074);
({ AnalyticEvents: closure_11, ChannelTypes: closure_12, VerificationCriteria: map1 } = Constants);
let closure_14 = fn(7043).PHONE_VERIFICATION_MODAL_KEY;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardWrapper.tsx");

export default function ChatInputGuardWrapper(channel) {
  channel = channel.channel;
  let stateFromStores;
  ({ screenIndex, canSendMessages, canCreateThreads, children, isReadonly, onJumpToPresent } = channel);
  const guildId = channel.getGuildId();
  const tmp3 = stateFromStores;
  let obj = channel(stateFromStores[12]);
  const items = [GuildStore];
  stateFromStores = obj.useStateFromStores(items, () => MemberVerificationUtils.guildHasVerificationGate(GuildStore.getGuild(guildId)));
  let obj1 = channel(stateFromStores[12]);
  const items1 = [GuildVerificationStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => GuildVerificationStore.getCheck(guildId));
  const notClaimed = stateFromStores1.notClaimed;
  const verificationRole = stateFromStores1.verificationRole;
  ({ notPhoneVerified, notEmailVerified, newMember, newAccount, memberDeadline, accountDeadline, missingVerificationRole } = stateFromStores1);
  let obj2 = channel(stateFromStores[12]);
  const items2 = [UserStore, GuildMemberStore];
  const items3 = [guildId, stateFromStores, notClaimed];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items2, () => {
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
  if (tmp9) {
    tmp9 = !canSendMessages;
  }
  obj = { channelId: channel.id };
  const tmp10 = guildId(tmp3[17])(obj);
  tmp2(tmp3[18]);
  let tmp8 = guildId(stateFromStores[16])(user, channel);
  const tmp2Result = tmp2(tmp3[19]);
  const tmp11 = tmp2Result.useIsMessageRequest(channel.id) && channel.isPrivate();
  const tmp12 = tmp2Result.useIsSpamMessageRequest(channel.id) && channel.isPrivate();
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
  const tmp2Result1 = channel(tmp3[12]);
  const items6 = [notClaimed];
  const items7 = [guildId];
  const stateFromStores3 = channel(tmp3[12]).useStateFromStores(items6, () => {
    let isLurkingResult = null != guildId;
    if (isLurkingResult) {
      isLurkingResult = LurkingStore.isLurking(tmp);
    }
    return isLurkingResult;
  }, items7);
  const tmp2Result2 = channel(tmp3[12]);
  ({ showLinkedLobbyApplicationLoadingIndicator, requiredLinkedLobbyApplication, shouldRelaunchLinkedLobbyApplication } = guildId(tmp3[20])(channel.linkedLobby));
  guildId(tmp3[21])(channel.id);
  if (tmp11) {
    obj = { channel };
    let tmp21Result = jsx(tmp7(tmp3[31]), { channel });
    let tmp23 = jsx;
  } else if (tmp12) {
    obj1 = { channel };
    tmp21Result = jsx(tmp7(tmp3[32]), { channel });
    tmp23 = jsx;
  } else if (channel.isSystemDM()) {
    obj2 = { type: "simple-action", icon: null, message: null, subtext: null };
    let tmp7Result = tmp7(tmp3[33]);
    obj2.icon = jsx(tmp2(tmp3[34]).CircleInformationIcon, {});
    const intl14 = tmp2(tmp3[35]).intl;
    obj2.message = intl14.string(tmp2(tmp3[35]).t.Bt2N7D);
    const intl15 = tmp2(tmp3[35]).intl;
    obj2.subtext = intl15.string(tmp2(tmp3[35]).t["n/Vzkw"]);
    tmp21Result = <tmp7Result type="simple-action" icon={null} message={null} subtext={null} />;
    tmp23 = jsx;
  } else if (tmp8) {
    tmp21Result = jsx(tmp7(tmp3[36]), {});
    tmp23 = jsx;
  } else {
    if (tmp9) {
      if (null != tmp10) {
        let obj3 = { pendingGameProfileReturn: tmp10 };
        tmp21Result = jsx(tmp7(tmp3[37]), { pendingGameProfileReturn: tmp10 });
        tmp23 = jsx;
      }
    }
    if (!stateFromStores3) {
      if (!tmp9) {
        if (stateFromStores2) {
          let obj4 = { type: "button-action", message: null, buttonPrimaryText: null, buttonPrimaryOnPress: null };
          tmp7Result = tmp7(tmp3[33]);
          const intl12 = tmp2(tmp3[35]).intl;
          obj4.message = intl12.string(tmp2(tmp3[35]).t["9T6N5/"]);
          const intl13 = tmp2(tmp3[35]).intl;
          obj4.buttonPrimaryText = intl13.string(tmp2(tmp3[35]).t.XyHpKH);
          obj4.buttonPrimaryOnPress = function handleUnblock() {
            let obj = channel;
            if (channel.isDM()) {
              obj = { cta_type: TextAreaCta.UNBLOCK };
              AppAnalyticsUtilsDefault.trackWithMetadata(constants.TEXT_AREA_CTA_CLICKED, obj);
              RelationshipActionCreatorsDefault.unblockUser(obj.getRecipientId());
            }
          };
          tmp21Result = <tmp7Result type="button-action" message={null} buttonPrimaryText={null} buttonPrimaryOnPress={null} />;
          tmp23 = jsx;
        } else if (showMemberVerificationModal) {
          const obj5 = { guildId };
          tmp21Result = jsx(tmp7(tmp3[39]), { guildId });
          tmp23 = jsx;
        } else {
          if (!showLinkedLobbyApplicationLoadingIndicator) {
            if (null == requiredLinkedLobbyApplication) {
              if (null != communicationDisabledGuildMember) {
                const obj6 = { guildMember: communicationDisabledGuildMember };
                tmp21Result = jsx(tmp7(tmp3[41]), { guildMember: communicationDisabledGuildMember });
                tmp23 = jsx;
              } else if (automodUserProfileQuarantined) {
                const obj7 = { guildId };
                tmp21Result = jsx(tmp7(tmp3[42]), { guildId });
                tmp23 = jsx;
              } else if (notClaimed) {
                const obj8 = { type: "simple-action", icon: jsx(tmp2(tmp3[43]).ChatXIcon, {}), message: null };
                const intl11 = tmp2(tmp3[35]).intl;
                obj8.message = intl11.string(tmp2(tmp3[35]).t["Eg3/c9"]);
                tmp21Result = jsx(tmp7(tmp3[33]), { type: "simple-action", icon: jsx(tmp2(tmp3[43]).ChatXIcon, {}), message: null });
                tmp23 = jsx;
                const tmp7Result1 = tmp7(tmp3[33]);
              } else if (notPhoneVerified) {
                const obj9 = { type: "button-action", message: null, buttonPrimaryText: null, buttonPrimaryOnPress: null };
                const intl9 = tmp2(tmp3[35]).intl;
                obj9.message = intl9.string(tmp2(tmp3[35]).t["2dThMM"]);
                const intl10 = tmp2(tmp3[35]).intl;
                obj9.buttonPrimaryText = intl10.string(tmp2(tmp3[35]).t["50gfOv"]);
                obj9.buttonPrimaryOnPress = function handleVerifyPhone() {
                  guildId(stateFromStores[22]);
                  let obj = { cta_type: constants.VERIFY_PHONE };
                  obj.trackWithMetadata(constants2.TEXT_AREA_CTA_CLICKED, obj);
                  obj = { reason: null };
                  const obj3 = guildId(stateFromStores[24]);
                  obj.reason = channel(stateFromStores[27]).ChangePhoneReason.GUILD_PHONE_REQUIRED;
                  obj3.pushLazy(channel(stateFromStores[26])(stateFromStores[25], stateFromStores.paths), obj, closure_1_14);
                };
                tmp21Result = jsx(tmp7(tmp3[33]), { type: "button-action", message: null, buttonPrimaryText: null, buttonPrimaryOnPress: null });
                tmp23 = jsx;
                const tmp7Result2 = tmp7(tmp3[33]);
              } else if (notEmailVerified) {
                const obj10 = { type: "button-action", message: null, buttonPrimaryText: null, buttonPrimaryOnPress: null };
                const intl7 = tmp2(tmp3[35]).intl;
                obj10.message = intl7.string(tmp2(tmp3[35]).t.FkGPS5);
                const intl8 = tmp2(tmp3[35]).intl;
                obj10.buttonPrimaryText = intl8.string(tmp2(tmp3[35]).t.lm1UKt);
                obj10.buttonPrimaryOnPress = function handleVerifyEmail() {
                  guildId(stateFromStores[22]);
                  const obj = { cta_type: constants.VERIFY_EMAIL };
                  obj.trackWithMetadata(constants2.TEXT_AREA_CTA_CLICKED, obj);
                  guildId(stateFromStores[28]).open();
                };
                tmp21Result = jsx(tmp7(tmp3[33]), { type: "button-action", message: null, buttonPrimaryText: null, buttonPrimaryOnPress: null });
                tmp23 = jsx;
                const tmp7Result3 = tmp7(tmp3[33]);
              } else if (newMember) {
                const obj11 = { type: "simple-action", icon: jsx(tmp2(tmp3[44]).CalendarIcon, {}), message: null, countdown: null };
                const intl6 = tmp2(tmp3[35]).intl;
                const obj12 = { min: constants3.MEMBER_AGE };
                obj11.message = intl6.formatToPlainString(tmp2(tmp3[35]).t.IH7RMF, obj12);
                obj11.countdown = memberDeadline;
                tmp21Result = jsx(tmp7(tmp3[33]), { type: "simple-action", icon: jsx(tmp2(tmp3[44]).CalendarIcon, {}), message: null, countdown: null });
                tmp23 = jsx;
                const tmp7Result4 = tmp7(tmp3[33]);
              } else if (newAccount) {
                const obj13 = { type: "simple-action", icon: jsx(tmp2(tmp3[44]).CalendarIcon, {}), message: null, countdown: null };
                const intl5 = tmp2(tmp3[35]).intl;
                const obj14 = { min: constants3.ACCOUNT_AGE };
                obj13.message = intl5.formatToPlainString(tmp2(tmp3[35]).t["2JA2GH"], obj14);
                obj13.countdown = accountDeadline;
                tmp21Result = jsx(tmp7(tmp3[33]), { type: "simple-action", icon: jsx(tmp2(tmp3[44]).CalendarIcon, {}), message: null, countdown: null });
                tmp23 = jsx;
                const tmp7Result5 = tmp7(tmp3[33]);
              } else {
                if (missingVerificationRole) {
                  if (null != verificationRole) {
                    const intl3 = tmp2(tmp3[35]).intl;
                    const obj15 = { roleName: null };
                    const _HermesInternal = HermesInternal;
                    obj15.roleName = "@" + verificationRole.name;
                    const formatResult = intl3.format(tmp2(tmp3[35]).t.HbivnU, obj15);
                    if (null === verificationRole.tags.guild_connections) {
                      const obj16 = { type: "button-action", message: formatResult, buttonPrimaryText: null, buttonPrimaryOnPress: null };
                      const intl4 = tmp2(tmp3[35]).intl;
                      obj16.buttonPrimaryText = intl4.string(tmp2(tmp3[35]).t["6Ge2LG"]);
                      obj16.buttonPrimaryOnPress = function handleGetVerificationRole() {
                        let tmp2 = null != verificationRole;
                        if (tmp2) {
                          tmp2 = null != guildId;
                        }
                        if (tmp2) {
                          const result = GuildRoleConnectionsModalActionCreators.openGuildRoleConnectionsConnectAccountModal(verificationRole, guildId);
                        }
                      };
                      let obj17 = obj16;
                    } else {
                      obj17 = { type: "simple-action", message: formatResult };
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
                          obj18.message = intl.string(tmp2(tmp3[35]).t.Yi2xuY);
                          const intl2 = tmp2(tmp3[35]).intl;
                          obj18.buttonPrimaryText = intl2.string(tmp2(tmp3[35]).t.rBIGBL);
                          obj18.buttonPrimaryOnPress = function handleCreateThread() {
                            const result = navigateToThreadCreation.navigateToThreadCreation(channel, "chat input guard");
                          };
                          tmp21Result = tmp21(tmp7(tmp3[33]), obj18);
                          tmp23 = tmp21;
                          const tmp7Result7 = tmp7(tmp3[33]);
                        } else {
                          const obj19 = { guildId, channel };
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
          const obj20 = { showLinkedLobbyApplicationLoadingIndicator, requiredLinkedLobbyApplication, shouldRelaunchLinkedLobbyApplication };
          tmp21Result = jsx(tmp7(tmp3[40]), { showLinkedLobbyApplicationLoadingIndicator, requiredLinkedLobbyApplication, shouldRelaunchLinkedLobbyApplication });
          tmp23 = jsx;
        }
      }
    }
    const obj21 = { channel, isReadonlyAnnouncementsChannel: tmp9 };
    tmp21Result = jsx(tmp7(tmp3[38]), { channel, isReadonlyAnnouncementsChannel: tmp9 });
    tmp23 = jsx;
  }
  return tmp23(channel(tmp3[33]).ChatInputGuardContainer, { screenIndex, channelId: channel.id, onJumpToPresent, children: tmp21Result });
};