// === Module 11424: Messages ===

// Module 11424 (Messages)
import _modDef12 from "module_12" /* 12 */;
import discord_common_shallowEqual from "discord_common/shallowEqual" /* 558 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 7163 */;
import DimensionActionCreatorsDefault from "DimensionActionCreators" /* 10987 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 11252 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import ApplicationAssetsStore from "ApplicationAssetsStore" /* 8140 */;
import ApplicationStore from "ApplicationStore" /* 4788 */;
import BuildOverrideStore from "BuildOverrideStore" /* 11425 */;
import CacheStore from "CacheStore" /* 7476 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4576 */;
import VoiceChannelStartTimeStore from "VoiceChannelStartTimeStore" /* 11308 */;
import EmojiStore from "EmojiStore" /* 5459 */;
import ExperimentStore from "ExperimentStore" /* 4476 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 7293 */;
import ApplicationDirectoryApplicationsStore from "ApplicationDirectoryApplicationsStore" /* 7164 */;
import BasicGuildStore from "BasicGuildStore" /* 7955 */;
import GuildAutomodMessageStore from "GuildAutomodMessageStore" /* 7938 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7526 */;
import GuildTemplateStore from "GuildTemplateStore" /* 7457 */;
import LocalInteractionComponentStateStore from "LocalInteractionComponentStateStore" /* 8113 */;
import InteractionStore from "InteractionStore" /* 7941 */;
import MediaPostEmbedStore from "MediaPostEmbedStore" /* 11426 */;
import MediaPostSharePromptStore from "MediaPostSharePromptStore" /* 7942 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 7107 */;
import FamilyCenterPendingConnectionStore from "FamilyCenterPendingConnectionStore" /* 4774 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7452 */;
import PushFeedbackStore from "PushFeedbackStore" /* 11428 */;
import PendingReplyStore from "PendingReplyStore" /* 7680 */;
import ReferencedMessageStore from "ReferencedMessageStore" /* 7595 */;
import SummaryStore from "SummaryStore" /* 11345 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4201 */;
import ThreadMessageStore from "ThreadMessageStore" /* 7306 */;
import LocaleStore from "LocaleStore" /* 2025 */;
import ThemeStore from "ThemeStore" /* 1183 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import EditMessageStore from "EditMessageStore" /* 7681 */;
import GiftCodeStore from "GiftCodeStore" /* 11429 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5413 */;
import InviteStore from "InviteStore" /* 4544 */;
import MessageStore from "MessageStore" /* 4781 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import PresenceStore from "PresenceStore" /* 4600 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import ReadStateStore from "ReadStateStore" /* 4575 */;
import SessionsStore from "SessionsStore" /* 4578 */;
import UploadStore from "UploadStore" /* 7838 */;
import UserStore from "UserStore" /* 1371 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;
import SKUStore from "SKUStore" /* 5510 */;
import ActivityLauncherStore from "ActivityLauncherStore" /* 11456 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4584 */;

require = fn;
const PollsInteractionStore = fn(11427);
({ useChannelPollInteractions: closure_27, useMessagePollInteractions: closure_28 } = PollsInteractionStore);
const Constants = fn(1074);
({ ActivityActionTypes: closure_58, ChannelTypesSets: closure_59, ME: closure_60, MessageTypes: closure_61, Permissions: closure_62 } = Constants);
const PremiumConstants = fn(1373);
({ PREMIUM_TIER_2_REFERRAL_TRIAL_ID: closure_63, PremiumTypes: closure_64 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_65, jsxs: closure_66 } = jsxProd);
const forwardRefResult = noop.forwardRef((channel, ref) => {
  channel = channel.channel;
  let tmp = channel;
  const tmp2 = id;
  let obj = channel(id[57]);
  let items = [MessageStore];
  const items1 = [channel.id];
  const stateFromStores = obj.useStateFromStores(items, () => MessageStore.getMessages(channel.id), items1);
  id = channel.id;
  const guildId = channel.getGuildId();
  const items2 = [GuildStore];
  const stateFromStores1 = channel(id[57]).useStateFromStores(items2, () => GuildStore.getGuild(guildId));
  let systemChannelFlags;
  if (stateFromStores1 != null) {
    systemChannelFlags = stateFromStores1.systemChannelFlags;
  }
  let tmpResult = tmp(tmp2[57]);
  const items3 = [AuthenticationStore];
  const stateFromStores2 = tmpResult.useStateFromStores(items3, () => id.getId(), []);
  const InlineAttachmentMedia = tmp(tmp2[62]).InlineAttachmentMedia;
  const setting = InlineAttachmentMedia.useSetting();
  const InlineEmbedMedia = tmp(tmp2[62]).InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.useSetting();
  const RenderEmbeds = tmp(tmp2[62]).RenderEmbeds;
  const setting2 = RenderEmbeds.useSetting();
  const RenderReactions = tmp(tmp2[62]).RenderReactions;
  const setting3 = RenderReactions.useSetting();
  const DeveloperMode = tmp(tmp2[62]).DeveloperMode;
  const setting4 = DeveloperMode.useSetting();
  const AnimateEmoji = tmp(tmp2[62]).AnimateEmoji;
  const setting5 = AnimateEmoji.useSetting();
  const AnimateStickers = tmp(tmp2[62]).AnimateStickers;
  const setting6 = AnimateStickers.useSetting();
  const GifAutoPlay = tmp(tmp2[62]).GifAutoPlay;
  const setting7 = GifAutoPlay.useSetting();
  const TimestampHourCycle = tmp(tmp2[62]).TimestampHourCycle;
  const setting8 = TimestampHourCycle.useSetting();
  tmpResult = tmp(tmp2[57]);
  const items4 = [ThemeStore];
  const stateFromStores3 = tmpResult.useStateFromStores(items4, () => theme.theme, []);
  let obj2 = channel(id[57]);
  closure_129_0 = stateFromStores;
  const items5 = [stateFromStores];
  const isMessageSwipeActionsEnabled = tmp(tmp2[63]).useIsMessageSwipeActionsEnabled();
  const memo = stateFromStores1.useMemo(() => {
    const obj = {};
    const item = channel.forEach((author) => {
      if (tmp) {
        obj[author.author.id] = null;
      }
      tmp = null != author.author && null != author.activity;
    });
    return obj;
  }, items5);
  closure_129_1 = memo;
  const tmpResult1 = tmp(tmp2[63]);
  const items6 = [PresenceStore];
  const items7 = [memo];
  const linkedLobby = channel.linkedLobby;
  let application_id;
  const stateFromStoresObject = tmp(tmp2[57]).useStateFromStoresObject(items6, () => _modDef12.mapValues(stateFromStores, (arg0, arg1) => primaryActivity.getPrimaryActivity(arg1)), items7);
  if (linkedLobby != null) {
    application_id = linkedLobby.application_id;
  }
  closure_130_0 = stateFromStores;
  closure_130_1 = application_id;
  const items8 = [stateFromStores, application_id];
  const memo1 = obj6.useMemo(() => {
    const set = new Set();
    const item = channel.forEach((applicationId) => {
      if (tmp) {
        set.add(applicationId.applicationId);
      }
      tmp = null != applicationId.applicationId && null == applicationId.application;
    });
    if (null != stateFromStores) {
      set.add(tmp2);
    }
    return Array.from(set);
  }, items8);
  closure_130_2 = memo1;
  closure_130_3 = obj6.useRef([]);
  const items9 = [memo1];
  const effect = obj6.useEffect(() => {
    if (!obj.areArraysShallowEqual(id, guildId.current)) {
      const obj2 = ApplicationActionCreatorsDefault;
      const found = _modDef12(id).filter(GlobalUtils.isNotNullish);
      const arr = _modDef12(id);
      const applications = obj2.fetchApplications(found.uniq().value(), false);
      guildId.current = id;
      const iter = found.uniq();
    }
    obj = discord_common_shallowEqual;
  }, items9);
  const tmp25 = guildId;
  const tmpResult2 = tmp(tmp2[57]);
  [tmp27, r10127] = guildId(stateFromStores(tmp2[64])(stateFromStores, channel), 2);
  const tmp26 = guildId(stateFromStores(tmp2[64])(stateFromStores, channel), 2);
  const items10 = [InviteStore];
  const stateFromStores4 = tmp(tmp2[57]).useStateFromStores(items10, () => InviteStore.getInvites(), []);
  const tmpResult3 = tmp(tmp2[57]);
  const fetchVoiceChannelInviteStartTimes = tmp(tmp2[65]).useFetchVoiceChannelInviteStartTimes(stateFromStores4);
  const tmpResult4 = tmp(tmp2[65]);
  const items11 = [ApplicationDirectoryApplicationsStore];
  const stateFromStoresObject1 = tmp(tmp2[57]).useStateFromStoresObject(items11, () => ({ appDirectoryEmbedApplications: ApplicationDirectoryApplicationsStore.getApplications(), invalidAppDirectoryEmbedApplicationIds: ApplicationDirectoryApplicationsStore.getInvalidApplicationIds(), appDirectoryEmbedApplicationFetchStates: ApplicationDirectoryApplicationsStore.getApplicationFetchStates() }), []);
  ({ appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, appDirectoryEmbedApplicationFetchStates } = stateFromStoresObject1);
  const tmpResult5 = tmp(tmp2[57]);
  const items12 = [items68];
  const stateFromStoresArray = tmp(tmp2[57]).useStateFromStoresArray(items12, () => items68.getFetchingOrFailedFetchingIds());
  const tmpResult6 = tmp(tmp2[57]);
  const items13 = [channelSummariesExperiment];
  const stateFromStoresArray1 = tmp(tmp2[57]).useStateFromStoresArray(items13, () => channelSummariesExperiment.getFetchingIds());
  const tmpResult7 = tmp(tmp2[57]);
  const items14 = [SKUStore];
  const stateFromStoresArray2 = tmp(tmp2[57]).useStateFromStoresArray(items14, () => fetchingSkuIds.getFetchingSkuIds());
  const tmpResult8 = tmp(tmp2[57]);
  const items15 = [closure_6];
  const items16 = [id];
  const stateFromStoresArray3 = tmp(tmp2[57]).useStateFromStoresArray(items15, () => {
    const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(id);
    const mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items16);
  const tmpResult9 = tmp(tmp2[57]);
  const items17 = [closure_6, PresenceStore];
  const stateFromStoresArray4 = tmp(tmp2[57]).useStateFromStoresArray(items17, () => {
    const items = [];
    const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(id);
    function _loop(iter) {
      const userIds = iter.userIds;
      iter = userIds.values();
      const findActivityResult = PresenceStore.findActivity(iter.next().value, (application_id) => application_id.application_id === iter.applicationId);
      let details;
      if (findActivityResult != null) {
        details = findActivityResult.details;
      }
      if (null != details) {
        const _HermesInternal = HermesInternal;
        items.push("" + iter.launchId + ":" + findActivityResult.details);
      }
    }
    let iter = embeddedActivitiesForChannel[Symbol.iterator]();
    while (iter !== undefined) {
      let _loopResult = _loop(iter.next());
      continue;
    }
    return items;
  });
  const tmpResult10 = tmp(tmp2[57]);
  const items18 = [closure_6];
  const stateFromStoresArray5 = tmp(tmp2[57]).useStateFromStoresArray(items18, () => {
    const set = new Set();
    const embeddedActivitiesByChannel = closure_6.getEmbeddedActivitiesByChannel();
    let item = embeddedActivitiesByChannel.forEach((arr, index) => {
      closure_0 = index;
      let item = arr.forEach((userIds) => {
        userIds = userIds.userIds;
        const item = userIds.forEach((item) => {
          set.add("" + closure_1_0 + ":" + item);
        });
      });
    });
    return Array.from(set);
  });
  const tmpResult11 = tmp(tmp2[57]);
  const items19 = [closure_6];
  const stateFromStoresArray6 = tmp(tmp2[57]).useStateFromStoresArray(items19, () => {
    const launchStates = closure_6.getLaunchStates();
    const items = [];
    while (tmp2 !== undefined) {
      let tmp5 = guildId(tmp3, 2);
      [r10016, tmp6] = tmp5;
      let isLaunching = tmp6.isLaunching;
      if (isLaunching) {
        isLaunching = null != tmp6.componentId;
      }
      if (isLaunching) {
        isLaunching = tmp6.componentId.length > 0;
      }
      if (isLaunching) {
        let arr = items.push(tmp6.componentId);
      }
      continue;
    }
    return items;
  });
  const tmpResult12 = tmp(tmp2[57]);
  const items20 = [MediaPostEmbedStore];
  const stateFromStores5 = tmp(tmp2[57]).useStateFromStores(items20, () => mediaPostEmbeds.getMediaPostEmbeds());
  const tmpResult13 = tmp(tmp2[57]);
  const items21 = [GuildTemplateStore];
  const stateFromStores6 = tmp(tmp2[57]).useStateFromStores(items21, () => guildTemplates.getGuildTemplates(), []);
  const tmpResult14 = tmp(tmp2[57]);
  const items22 = [stateFromStoresArray8];
  const stateFromStores7 = tmp(tmp2[57]).useStateFromStores(items22, () => stateFromStoresArray8.getBuildOverrides(), []);
  const tmpResult15 = tmp(tmp2[57]);
  const codedLinksExperimentEmbeds = tmp(tmp2[66]).useCodedLinksExperimentEmbeds();
  const tmpResult16 = tmp(tmp2[66]);
  quests = tmp(tmp2[67]).useQuests({ fetchPolicy: "cache-or-network", callerSource: "messages_native" });
  ({ quests, isFetchingCurrentQuests } = quests);
  let found = stateFromStores.filter((type) => type.type === constants.PREMIUM_REFERRAL);
  let mapped = found.map((referralTrialOfferId) => referralTrialOfferId.referralTrialOfferId);
  closure_6 = mapped.filter(tmp(tmp2[61]).isNotNullish);
  const tmpResult17 = tmp(tmp2[67]);
  const items23 = [ReferralTrialStore];
  const stateFromStoresArray7 = tmp(tmp2[57]).useStateFromStoresArray(items23, () => {
    const mapped = closure_6.map((item) => {
      relevantUserTrialOffer = relevantUserTrialOffer.getRelevantUserTrialOffer(item);
      id = undefined;
      if (relevantUserTrialOffer != null) {
        id = relevantUserTrialOffer.id;
      }
      return id;
    });
    return mapped.filter(GlobalUtils.isNotNullish);
  });
  const tmpResult18 = tmp(tmp2[57]);
  const trialOffer = tmp(tmp2[68]).useTrialOffer(closure_63);
  const tmpResult19 = tmp(tmp2[68]);
  const items24 = [UserStore];
  const stateFromStores8 = tmp(tmp2[57]).useStateFromStores(items24, () => stateFromStores(id[69]).isPremiumExactly(authStore2.getCurrentUser(), TIER_2.TIER_2));
  const tmpResult20 = tmp(tmp2[57]);
  const items25 = [EditMessageStore];
  const items26 = [id];
  const stateFromStores9 = tmp(tmp2[57]).useStateFromStores(items25, () => EditMessageStore.getEditingMessageId(id), items26);
  const tmpResult21 = tmp(tmp2[57]);
  const items27 = [PendingReplyStore];
  const items28 = [id];
  const stateFromStores10 = tmp(tmp2[57]).useStateFromStores(items27, () => {
    const pendingReply = PendingReplyStore.getPendingReply(id);
    id = undefined;
    if (pendingReply != null) {
      id = pendingReply.message.id;
    }
    return id;
  }, items28);
  const tmpResult22 = tmp(tmp2[57]);
  const items29 = [ReadStateStore];
  const items30 = [id];
  const stateFromStores11 = tmp(tmp2[57]).useStateFromStores(items29, () => ReadStateStore.getOldestUnreadMessageId(id), items30);
  const tmpResult23 = tmp(tmp2[57]);
  const items31 = [GuildVerificationStore];
  const items32 = [guildId];
  const stateFromStores12 = tmp(tmp2[57]).useStateFromStores(items31, () => {
    let canChatInGuildResult = null != guildId;
    if (canChatInGuildResult) {
      canChatInGuildResult = GuildVerificationStore.canChatInGuild(tmp);
    }
    return canChatInGuildResult;
  }, items32);
  const tmpResult24 = tmp(tmp2[57]);
  const items33 = [PermissionStore];
  const items34 = [channel];
  const stateFromStores13 = tmp(tmp2[57]).useStateFromStores(items33, () => PermissionStore.can(constants2.SEND_MESSAGES, channel), items34);
  const tmpResult25 = tmp(tmp2[57]);
  const tmp54 = stateFromStores(tmp2[70])(id);
  const items35 = [VoiceStateStore];
  const items36 = [stateFromStores2];
  const stateFromStores14 = tmp(tmp2[57]).useStateFromStores(items35, () => VoiceStateStore.getUserVoiceChannelId(closure_2_60, stateFromStores2), items36);
  const tmpResult26 = tmp(tmp2[57]);
  const items37 = [RTCConnectionStore];
  const stateFromStores15 = tmp(tmp2[57]).useStateFromStores(items37, () => channelId.getChannelId(), []);
  const tmpResult27 = tmp(tmp2[57]);
  const items38 = [ReferencedMessageStore];
  const items39 = [channel];
  const stateFromStores16 = tmp(tmp2[57]).useStateFromStores(items38, () => {
    const THREADS = constants.THREADS;
    let message = null;
    if (THREADS.has(channel.type)) {
      message = null;
      if (null != channel.parent_id) {
        const obj = { channel_id: null, message_id: null, guild_id: null };
        ({ parent_id: obj.channel_id, id: obj.message_id, guild_id: obj.guild_id } = channel);
        message = ReferencedMessageStore.getMessageByReference(obj).message;
      }
    }
    return message;
  }, items39);
  const tmpResult28 = tmp(tmp2[57]);
  const items40 = [GiftCodeStore];
  const stateFromStoresObject2 = tmp(tmp2[57]).useStateFromStoresObject(items40, () => ({ resolvingGiftCodes: GiftCodeStore.getResolvingCodes(), resolvedGiftCodes: GiftCodeStore.getResolvedCodes(), acceptingGiftCodes: GiftCodeStore.getAcceptingCodes() }), []);
  ({ resolvingGiftCodes, resolvedGiftCodes, acceptingGiftCodes } = stateFromStoresObject2);
  const tmpResult29 = tmp(tmp2[57]);
  const items41 = [ChannelRTCStore];
  const items42 = [id];
  const stateFromStores17 = tmp(tmp2[57]).useStateFromStores(items41, () => ChannelRTCStore.getParticipants(id).length, items42);
  const tmpResult30 = tmp(tmp2[57]);
  const items43 = [UploadStore];
  const items44 = [id];
  const stateFromStores18 = tmp(tmp2[57]).useStateFromStores(items43, () => UploadStore.getFiles(id), items44);
  const tmpResult31 = tmp(tmp2[57]);
  const items45 = [ReferencedMessageStore];
  const items46 = [id];
  const stateFromStores19 = tmp(tmp2[57]).useStateFromStores(items45, () => ReferencedMessageStore.getReplyIdsForChannel(id), items46);
  const tmpResult32 = tmp(tmp2[57]);
  const items47 = [stateFromStores2];
  const stateFromStoresObject3 = tmp(tmp2[57]).useStateFromStoresObject(items47, () => ({ useReducedMotion: stateFromStores2.useReducedMotion, roleStyle: stateFromStores2.roleStyle, officialMessageStyle: stateFromStores2.officialMessageStyle, saturation: stateFromStores2.saturation, displayNameStylesEnabled: stateFromStores2.displayNameStylesEnabled }), []);
  ({ useReducedMotion, roleStyle, officialMessageStyle, saturation, displayNameStylesEnabled } = stateFromStoresObject3);
  const tmpResult33 = tmp(tmp2[57]);
  const items48 = [ThreadMessageStore];
  const items49 = [id];
  const stateFromStores20 = tmp(tmp2[57]).useStateFromStores(items48, () => ThreadMessageStore.getChannelThreadsVersion(id), items49);
  const tmpResult34 = tmp(tmp2[57]);
  const items50 = [InteractionStore];
  const stateFromStoresObject4 = tmp(tmp2[57]).useStateFromStoresObject(items50, () => messageInteractionStates.getMessageInteractionStates());
  const tmpResult35 = tmp(tmp2[57]);
  const items51 = [LocalInteractionComponentStateStore];
  const tmpResult36 = tmp(tmp2[57]);
  [tmp67, tmp68] = guildId(tmp(tmp2[57]).useStateFromStores(items51, () => {
    const items = [LocalInteractionComponentStateStore.getInteractionComponentStates(), LocalInteractionComponentStateStore.getInteractionComponentStateVersion()];
    return items;
  }, [], tmp(tmp2[71]).isVersionEqual), 2);
  const tmp66 = guildId(tmp(tmp2[57]).useStateFromStores(items51, () => {
    const items = [LocalInteractionComponentStateStore.getInteractionComponentStates(), LocalInteractionComponentStateStore.getInteractionComponentStateVersion()];
    return items;
  }, [], tmp(tmp2[71]).isVersionEqual), 2);
  const items52 = [ExperimentStore];
  let stateFromStores21 = tmp(tmp2[57]).useStateFromStores(items52, () => hasLoadedExperiments.hasLoadedExperiments);
  const tmpResult37 = tmp(tmp2[57]);
  const isSpamMessageRequest = tmp(tmp2[72]).useIsSpamMessageRequest(channel.id);
  const tmpResult38 = tmp(tmp2[72]);
  let tmp72 = null != stateFromStores;
  const isMessageRequest = tmp(tmp2[73]).useIsMessageRequest(channel.id);
  if (tmp72) {
    tmp72 = stateFromStores.ready || stateFromStores.cached;
    const tmp73 = stateFromStores.ready || stateFromStores.cached;
  }
  const tmp74 = null != stateFromStores && stateFromStores.cached;
  const tmp75 = null != stateFromStores && stateFromStores.ready && !stateFromStores.loadingMore;
  const tmpResult39 = tmp(tmp2[73]);
  const items53 = [GuildScheduledEventStore];
  const stateFromStores22 = tmp(tmp2[57]).useStateFromStores(items53, () => rsvpVersion.getRsvpVersion());
  const tmpResult40 = tmp(tmp2[57]);
  const items54 = [GuildAutomodMessageStore];
  const stateFromStores23 = tmp(tmp2[57]).useStateFromStores(items54, () => messagesVersion.getMessagesVersion());
  const tmpResult41 = tmp(tmp2[57]);
  const items55 = [GuildMemberStore];
  const stateFromStores24 = tmp(tmp2[57]).useStateFromStores(items55, () => communicationDisabledVersion.getCommunicationDisabledVersion());
  const tmpResult42 = tmp(tmp2[57]);
  const items56 = [GuildMemberStore];
  const items57 = [guildId, stateFromStores];
  const stateFromStoresObject5 = tmp(tmp2[57]).useStateFromStoresObject(items56, () => {
    if (null != guildId) {
      if (null != stateFromStores) {
        const item = stateFromStores.forEach((item) => {
          obj = messages_MessagesUtils;
          const messageAuthorMemberUserIds = obj.getMessageAuthorMemberUserIds(item);
          const iter = messageAuthorMemberUserIds[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp3 = nextResult;
            let member = GuildMemberStore.getMember(guildId, nextResult);
            if (null != member) {
              obj[tmp3] = tmp7;
            }
            continue;
          }
        });
        return {};
      }
    }
    return {};
  }, items57);
  const tmpResult43 = tmp(tmp2[57]);
  const items58 = [PermissionStore];
  const stateFromStores25 = tmp(tmp2[57]).useStateFromStores(items58, () => PermissionStore.can(constants2.MODERATE_MEMBERS, stateFromStores1));
  const tmpResult44 = tmp(tmp2[57]);
  id = undefined;
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  const tmpResult45 = tmp(tmp2[75]);
  const items59 = [LocaleStore];
  const stateFromStores26 = tmp(tmp2[57]).useStateFromStores(items59, () => locale.locale);
  const tmpResult46 = tmp(tmp2[57]);
  const isPaymentsBlocked = tmp(tmp2[76]).useIsPaymentsBlocked();
  const tmpResult47 = tmp(tmp2[76]);
  const items60 = [JoinedThreadsStore];
  const stateFromStores27 = tmp(tmp2[57]).useStateFromStores(items60, () => {
    let hasJoinedResult = channel.isForumPost();
    if (hasJoinedResult) {
      hasJoinedResult = JoinedThreadsStore.hasJoined(id);
    }
    return hasJoinedResult;
  });
  const tmpResult48 = tmp(tmp2[57]);
  const items61 = [MediaPostSharePromptStore];
  const stateFromStores28 = tmp(tmp2[57]).useStateFromStores(items61, () => MediaPostSharePromptStore.shouldDisplayPrompt(id));
  const tmpResult49 = tmp(tmp2[57]);
  const items62 = [PushFeedbackStore];
  const stateFromStores29 = tmp(tmp2[57]).useStateFromStores(items62, () => eligible.isEligible());
  const tmpResult50 = tmp(tmp2[57]);
  const items63 = [CacheStore];
  const stateFromStores30 = tmp(tmp2[57]).useStateFromStores(items63, () => lazyCacheStatus.getLazyCacheStatus());
  const tmpResult51 = tmp(tmp2[57]);
  const messageJumpAndroidKeyboardHeight = tmp(tmp2[77]).useMessageJumpAndroidKeyboardHeight();
  const tmpResult52 = tmp(tmp2[77]);
  const tmp89 = stateFromStores(tmp2[78])();
  channelSummariesExperiment = tmp(tmp2[79]).useChannelSummariesExperiment(channel);
  const tmpResult53 = tmp(tmp2[79]);
  const items64 = [SummaryStore];
  const items65 = [channelSummariesExperiment, channel.id];
  const items66 = [channel.id, , , , ];
  ({ hasMoreAfter: arr70[1], hasMoreBefore: arr70[2], length: arr70[3], ready: arr70[4] } = stateFromStores);
  const stateFromStores31 = tmp(tmp2[57]).useStateFromStores(items64, () => {
    let selectedSummaryResult = null;
    if (channelSummariesExperiment) {
      selectedSummaryResult = SummaryStore.selectedSummary(channel.id);
    }
    return selectedSummaryResult;
  }, items65);
  const effect1 = obj6.useEffect(() => {
    const ready = stateFromStores.ready;
    let hasMoreAfter = !ready;
    if (ready) {
      hasMoreAfter = 0 !== stateFromStores.length;
    }
    if (!hasMoreAfter) {
      hasMoreAfter = stateFromStores.hasMoreBefore;
    }
    if (!hasMoreAfter) {
      hasMoreAfter = stateFromStores.hasMoreAfter;
    }
    if (!hasMoreAfter) {
      const obj = DimensionActionCreatorsDefault;
      const _Date = Date;
      const result = obj.updateChannelDimensions(channel.id, Date.now(), 1, 1, 0);
    }
  }, items66);
  const tmpResult54 = tmp(tmp2[57]);
  const shouldTrackAnnouncementMessageViews = tmp(tmp2[81]).useShouldTrackAnnouncementMessageViews({ guild: stateFromStores1, channel, messages: stateFromStores, isMessagesReady: tmp72 });
  const tmpResult55 = tmp(tmp2[81]);
  const shouldTrackRichPresenceInviteEmbedViews = tmp(tmp2[81]).useShouldTrackRichPresenceInviteEmbedViews({ messages: stateFromStores, isMessagesReady: tmp72 });
  const tmpResult56 = tmp(tmp2[81]);
  const shouldTrackOfficialMessageViews = tmp(tmp2[81]).useShouldTrackOfficialMessageViews({ guild: stateFromStores1, messages: stateFromStores, isMessagesReady: tmp72 });
  const tmpResult57 = tmp(tmp2[81]);
  const shouldTrackVoiceInviteEmbedViews = tmp(tmp2[81]).useShouldTrackVoiceInviteEmbedViews({ messages: stateFromStores, isMessagesReady: tmp72 });
  const tmpResult58 = tmp(tmp2[81]);
  const shouldDisplaySpoilerObscurity = tmp(tmp2[82]).useShouldDisplaySpoilerObscurity(channel);
  const tmpResult59 = tmp(tmp2[82]);
  const items67 = [id, guildId];
  const isAgeVerified = tmp(tmp2[83]).useIsAgeVerified();
  const effect2 = obj6.useEffect(() => {
    stateFromStores(id[84]).handleChannelSelect();
    return () => {
      stateFromStores(id[84]).handleChannelSelect();
    };
  }, items67);
  const tmpResult60 = tmp(tmp2[83]);
  const shouldDisableInteractiveComponents = tmp(tmp2[85]).useShouldDisableInteractiveComponents(channel.id);
  items68 = [];
  const tmpResult61 = tmp(tmp2[85]);
  let item = stateFromStores.forEach((messageReference) => {
    messageReference = messageReference.messageReference;
    let message_id;
    if (messageReference != null) {
      message_id = messageReference.message_id;
    }
    if (null != message_id) {
      items68.push(message_id);
    }
  });
  const tmp101 = closure_27(channel.id);
  const tmp103 = closure_28(items68);
  const items69 = [ExplicitMediaStore];
  const items70 = [id];
  const stateFromStores32 = tmp(tmp2[57]).useStateFromStores(items69, () => ExplicitMediaStore.getChannelFpInfo(id), items70);
  const tmpResult62 = tmp(tmp2[57]);
  const items71 = [FamilyCenterPendingConnectionStore];
  const stateFromStores33 = tmp(tmp2[57]).useStateFromStores(items71, () => pendingConnection.getPendingConnection());
  const tmpResult63 = tmp(tmp2[57]);
  const tmp106 = stateFromStores(tmp2[86])();
  ({ unloadedContentEntryMessageIds, unloadableContentEntryMessageIds } = stateFromStores(tmp2[87])(stateFromStores));
  const tmp107 = stateFromStores(tmp2[87])(stateFromStores);
  const items72 = [UserStore];
  const stateFromStores34 = tmp(tmp2[57]).useStateFromStores(items72, () => {
    const currentUser = authStore2.getCurrentUser();
    let flag;
    if (currentUser != null) {
      flag = currentUser.isStaff();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  const tmpResult64 = tmp(tmp2[57]);
  const items73 = [BasicGuildStore];
  const stateFromStores35 = tmp(tmp2[57]).useStateFromStores(items73, () => version.getVersion());
  const tmpResult65 = tmp(tmp2[57]);
  const colorStore = tmp(tmp2[88]).useColorStore((palette) => Object.keys(palette.palette).length);
  const tmpResult66 = tmp(tmp2[88]);
  const items74 = [EmojiStore];
  const stateFromStores36 = tmp(tmp2[57]).useStateFromStores(items74, () => EmojiStore.getGuildEmoji(guildId));
  const tmpResult67 = tmp(tmp2[57]);
  const items75 = [VoiceStateStore];
  const items76 = [guildId];
  const stateFromStores37 = tmp(tmp2[57]).useStateFromStores(items75, () => {
    if (null == guildId) {
      return null;
    } else {
      const voiceStates = VoiceStateStore.getVoiceStates(tmp);
      return messages_MessagesUtils.getVoiceStateChannelSummaryFromVoiceStates(voiceStates);
    }
  }, items76);
  const tmpResult68 = tmp(tmp2[57]);
  const items77 = [SortedVoiceStateStore, VoiceChannelStartTimeStore, InviteStore, ChannelStore];
  const stateFromStoresObject6 = tmp(tmp2[57]).useStateFromStoresObject(items77, () => {
    const obj = {};
    const invites = InviteStore.getInvites();
    const values = invites.values();
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      channel = nextResult.channel;
      id = undefined;
      if (channel != null) {
        id = channel.id;
      }
      if (null != id) {
        let obj4 = channel(id[89]);
        if (obj4.isVoiceChannelInvite(tmp3)) {
          id = tmp3.channel.id;
          let guild = tmp3.guild;
          let id1;
          if (guild != null) {
            id1 = guild.id;
          }
          voiceStatesForChannelAlt = voiceStatesForChannelAlt.getVoiceStatesForChannelAlt(id, id1);
          let mapped = voiceStatesForChannelAlt.map((voiceState) => {
            let str = "";
            if (voiceState.voiceState.selfStream) {
              str = "*";
            }
            return "" + str + voiceState.user.id;
          });
          let joined = mapped.join(",");
          let str = startTime.getStartTime(channel.getChannel(id));
          if (str == null) {
            str = "";
          }
          let _HermesInternal = HermesInternal;
          obj[id] = "" + joined + ":" + str;
        }
      }
      continue;
    }
    return obj;
  });
  const tmpResult69 = tmp(tmp2[57]);
  const items78 = [SessionsStore];
  stateFromStoresArray8 = tmp(tmp2[57]).useStateFromStoresArray(items78, () => {
    const items = [...closure_1_51.getRemoteActivities(), ...closure_1_51.getHiddenActivities()];
    return items.filter(channel(id[61]).isNotNullish);
  });
  const tmpResult70 = tmp(tmp2[57]);
  const items79 = [ActivityLauncherStore];
  const stateFromStoresObject7 = tmp(tmp2[57]).useStateFromStoresObject(items79, () => stateFromStoresArray8.reduce((acc, application_id) => {
    if (null == application_id.application_id) {
      return acc;
    } else {
      state = state.getState(application_id.application_id, constants.JOIN);
      if (null != state) {
        acc[application_id.application_id] = state;
      }
      return acc;
    }
  }, {}));
  const tmpResult71 = tmp(tmp2[57]);
  const items80 = [AuthorizedAppsStore];
  const stateFromStoresArray9 = tmp(tmp2[57]).useStateFromStoresArray(items80, () => {
    const items = [authStore.getNewestTokens(), authStore.getApplicationFetchStateVersion()];
    return items;
  }, []);
  const tmpResult72 = tmp(tmp2[57]);
  const items81 = [UserStore];
  const stateFromStores38 = tmp(tmp2[57]).useStateFromStores(items81, () => {
    const currentUser = authStore2.getCurrentUser();
    let displayNameStyles;
    if (currentUser != null) {
      displayNameStyles = currentUser.displayNameStyles;
    }
    return displayNameStyles;
  });
  const tmpResult73 = tmp(tmp2[57]);
  const fetchSocialLayerStorefrontProductDetailsEmbedData = tmp(tmp2[90]).useFetchSocialLayerStorefrontProductDetailsEmbedData(stateFromStores);
  obj = { profile: null, children: null };
  let tmp24Result = tmp24(tmp2[91]);
  obj.profile = tmp(tmp2[91]).Profiles.Messages;
  let isThreadResult = channel.isThread();
  if (isThreadResult) {
    isThreadResult = closure_65(tmp24(tmp2[92]), { absolute: true });
  }
  const items82 = [isThreadResult, ];
  obj = { ref, theme: stateFromStores3, saturation, isStaff: stateFromStores34, animateEmoji: setting5, animateStickers: setting6, containerWidth: tmp106, gifAutoPlay: setting7, timestampHourCycle: setting8, inlineAttachmentMedia: setting, inlineEmbedMedia: setting1, renderEmbeds: setting2, renderReactions: setting3, developerMode: setting4, roleStyle, officialMessageStyle, guildId, currentUserId: stateFromStores2, channelId: id, isMessagesReady: tmp72, isMessagesCached: tmp74, isMessagesAckable: tmp75, isMessageRequest, isSpamMessageRequest, messageAuthorActivities: stateFromStoresObject, invites: stateFromStores4, appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, invalidApplicationIds: stateFromStoresArray, applicationAssetFetchingIds: stateFromStoresArray1, messages: stateFromStores, messagesWithActivitiesLaunching: stateFromStoresArray6, activityInstanceIds: stateFromStoresArray3, activityParticipants: stateFromStoresArray5, activityInstancePresenceDetails: stateFromStoresArray4, appDirectoryEmbedApplicationFetchStates, mediaPostPreviewEmbeds: stateFromStores5, guildTemplates: stateFromStores6, buildOverrides: stateFromStores7, fetchingSkuIds: stateFromStoresArray2, experimentEmbeds: codedLinksExperimentEmbeds, quests, isFetchingCurrentQuests, editingMessageId: stateFromStores9, replyingMessageId: stateFromStores10, oldestUnreadMessageId: stateFromStores11, canChat: stateFromStores12, canSendMessages: stateFromStores13, isCallActive: tmp54, voiceStatePrivateChannelId: stateFromStores14, currentClientVoiceChannelId: stateFromStores15, voiceStateChannelIdSummaryForGuild: stateFromStores37, resolvingGiftCodes, resolvedGiftCodes, acceptingGiftCodes, participantsLength: stateFromStores17, uploads: stateFromStores18, repliedIds: stateFromStores19, useReducedMotion, displayNameStylesEnabled, channelThreadsVersion: stateFromStores20, rsvpVersion: stateFromStores22, failedMessagesVersion: stateFromStores23, communicationDisabledVersion: stateFromStores24, messageAuthorMembers: stateFromStoresObject5, forwardGuildsVersion: stateFromStores35, interactionStates: stateFromStoresObject4, interactionComponentStates: tmp67, interactionComponentStatesVersion: tmp68, hasLoadedExperiments: null, guildSystemChannelFlags: null, currentUserCommunicationDisabled: null, renderCommunicationDisabled: null, userSettingsLocale: null, paymentsBlocked: null, isFollowingForumPost: null, showMediaPostSharePrompt: null, showPushFeedback: null, cacheStoreLoaded: null, androidKeyboardHeight: null, selectedSummary: null, keyboardType: null, shouldTrackAnnouncementMessageViews: null, shouldTrackRichPresenceInviteEmbedViews: null, shouldTrackOfficialMessageViews: null, shouldTrackVoiceInviteEmbedViews: null, shouldObscureSpoiler: null, shouldDisableInteractiveComponents: null, channelPolls: null, messageReferencePolls: null, explicitMediaFalsePositiveInfo: null, familyCenterPendingConnection: null, threadStartingReferenceMessage: null, unloadedContentEntryMessageIds: null, unloadableContentEntryMessageIds: null, resolvedReferralTrialOfferIds: null, referralTrialOfferId: null, isPremiumTier2User: null, activityInviteMessageIds: null, guildInviteColorsFetched: null, isAgeVerified: null, guildEmojis: null, enableSwipeActions: null, selfActivities: null, activityLaunchJoinStates: null, authorizedAppsTokens: null, currentUserDisplayNameStyles: null, voiceInviteDataByChannelId: null, officialMessageColor: null };
  tmp24Result = tmp24(tmp2[93]);
  if (stateFromStores21) {
    stateFromStores21 = tmp72;
  }
  obj.hasLoadedExperiments = stateFromStores21;
  obj.guildSystemChannelFlags = systemChannelFlags;
  obj.currentUserCommunicationDisabled = tmp25(tmpResult45.useCurrentUserCommunicationDisabled(id), 2)[1];
  obj.renderCommunicationDisabled = stateFromStores25;
  obj.userSettingsLocale = stateFromStores26;
  obj.paymentsBlocked = isPaymentsBlocked;
  obj.isFollowingForumPost = stateFromStores27;
  obj.showMediaPostSharePrompt = stateFromStores28;
  obj.showPushFeedback = stateFromStores29;
  obj.cacheStoreLoaded = "initializing" !== stateFromStores30;
  obj.androidKeyboardHeight = messageJumpAndroidKeyboardHeight;
  obj.selectedSummary = stateFromStores31;
  obj.keyboardType = tmp89;
  obj.shouldTrackAnnouncementMessageViews = shouldTrackAnnouncementMessageViews;
  obj.shouldTrackRichPresenceInviteEmbedViews = shouldTrackRichPresenceInviteEmbedViews;
  obj.shouldTrackOfficialMessageViews = shouldTrackOfficialMessageViews;
  obj.shouldTrackVoiceInviteEmbedViews = shouldTrackVoiceInviteEmbedViews;
  obj.shouldObscureSpoiler = shouldDisplaySpoilerObscurity;
  obj.shouldDisableInteractiveComponents = shouldDisableInteractiveComponents;
  obj.channelPolls = tmp101;
  obj.messageReferencePolls = tmp103;
  obj.explicitMediaFalsePositiveInfo = stateFromStores32;
  obj.familyCenterPendingConnection = stateFromStores33;
  obj.threadStartingReferenceMessage = stateFromStores16;
  obj.unloadedContentEntryMessageIds = unloadedContentEntryMessageIds;
  obj.unloadableContentEntryMessageIds = unloadableContentEntryMessageIds;
  obj.resolvedReferralTrialOfferIds = stateFromStoresArray7;
  let id1;
  if (trialOffer != null) {
    id1 = trialOffer.id;
  }
  obj.referralTrialOfferId = id1;
  obj.isPremiumTier2User = stateFromStores8;
  obj.activityInviteMessageIds = tmp27;
  obj.guildInviteColorsFetched = colorStore;
  obj.isAgeVerified = isAgeVerified;
  obj.guildEmojis = stateFromStores36;
  obj.enableSwipeActions = isMessageSwipeActionsEnabled;
  obj.selfActivities = stateFromStoresArray8;
  obj.activityLaunchJoinStates = stateFromStoresObject7;
  obj.authorizedAppsTokens = stateFromStoresArray9;
  obj.currentUserDisplayNameStyles = stateFromStores38;
  obj.voiceInviteDataByChannelId = stateFromStoresObject6;
  let officialMessageColor;
  if (stateFromStores1 != null) {
    officialMessageColor = stateFromStores1.officialMessageColor;
  }
  obj.officialMessageColor = officialMessageColor;
  const merged = Object.assign(channel);
  items82[1] = closure_65(tmp24Result, obj);
  obj.children = items82;
  return closure_66(tmp24Result, obj);
});
forwardRefResult.displayName = "MessagesConnected";
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/Messages.tsx");

export default forwardRefResult;