// discord_app/modules/messages/native/Messages.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import discord_common_shallowEqual from "../../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import ApplicationActionCreatorsDefault from "../../applications/ApplicationActionCreators.tsx";
import messages_MessagesUtils from "MessagesUtils.tsx";
import DimensionActionCreatorsDefault from "../../../actions/DimensionActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import EmbeddedActivitiesStore from "../../activities/EmbeddedActivitiesStore.tsx";
import ApplicationAssetsStore from "../../applications/ApplicationAssetsStore.tsx";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import BuildOverrideStore from "../../build_overrides/BuildOverrideStore.tsx";
import CacheStore from "../../cache/CacheStore.tsx";
import ChannelRTCStore from "../../calls/ChannelRTCStore.tsx";
import VoiceChannelStartTimeStore from "../../channel/VoiceChannelStartTimeStore.tsx";
import EmojiStore from "../../emojis/EmojiStore.tsx";
import ExperimentStore from "../../experiments/ExperimentStore.tsx";
import ExplicitMediaStore from "../../explicit_media_redaction/ExplicitMediaStore.tsx";
import GameOrganizationInviteStore from "../../game_organization_invites/GameOrganizationInviteStore.tsx";
import ApplicationDirectoryApplicationsStore from "../../global_discovery_apps/stores/ApplicationDirectoryApplicationsStore.tsx";
import BasicGuildStore from "../../guild/BasicGuildStore.tsx";
import GuildAutomodMessageStore from "../../guild_automod/GuildAutomodMessageStore.tsx";
import GuildScheduledEventStore from "../../guild_scheduled_events/GuildScheduledEventStore.tsx";
import GuildTemplateStore from "../../guild_templates/GuildTemplateStore.tsx";
import LocalInteractionComponentStateStore from "../../interaction_components/LocalInteractionComponentStateStore.tsx";
import InteractionStore from "../../interactions/InteractionStore.tsx";
import MediaPostEmbedStore from "../../media_channel/MediaPostEmbedStore.tsx";
import MediaPostSharePromptStore from "../../media_channel/MediaPostSharePromptStore.tsx";
import AuthorizedAppsStore from "../../oauth2/AuthorizedAppsStore.tsx";
import FamilyCenterPendingConnectionStore from "../../parent_tools/FamilyCenterPendingConnectionStore.tsx";
import ReferralTrialStore from "../../premium/ReferralTrialStore.tsx";
import PushFeedbackStore from "../../push_feedback/PushFeedbackStore.tsx";
import PendingReplyStore from "../../replies/PendingReplyStore.tsx";
import ReferencedMessageStore from "../../replies/ReferencedMessageStore.tsx";
import SummaryStore from "../../summaries/SummaryStore.tsx";
import JoinedThreadsStore from "../../threads/JoinedThreadsStore.tsx";
import ThreadMessageStore from "../../threads/ThreadMessageStore.tsx";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import ThemeStore from "../../user_settings/ThemeStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import EditMessageStore from "../../../stores/EditMessageStore.tsx";
import GiftCodeStore from "../../../stores/GiftCodeStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import GuildVerificationStore from "../../../stores/GuildVerificationStore.tsx";
import InviteStore from "../../../stores/InviteStore.tsx";
import MessageStore from "../../../stores/MessageStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import PresenceStore from "../../../stores/PresenceStore.tsx";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";
import ReadStateStore from "../../../stores/ReadStateStore.tsx";
import SessionsStore from "../../../stores/SessionsStore.tsx";
import UploadStore from "../../../stores/UploadStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import VoiceStateStore from "../../../stores/VoiceStateStore.tsx";
import SKUStore from "../../../stores/game_store/SKUStore.tsx";
import ActivityLauncherStore from "../../../stores/views/ActivityLauncherStore.tsx";
import SortedVoiceStateStore from "../../../stores/views/SortedVoiceStateStore.tsx";

require = fn;
class MessagesConnected {
  constructor(arg0) {
    merged = Object.assign(global, Object.assign({ ref: 0 }));
    channel = undefined;
    closure_1 = undefined;
    id = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    closure_9 = undefined;
    closure_10 = undefined;
    channel = merged.channel;
    tmp2 = channel;
    tmp3 = id;
    obj = channel(id[59]);
    items = [];
    items[0] = closure_47;
    items1 = [];
    items1[0] = channel.id;
    stateFromStores = obj.useStateFromStores(items, () => MessageStore.getMessages(channel.id), items1);
    closure_1 = stateFromStores;
    id = channel.id;
    guildId = channel.getGuildId();
    closure_3 = guildId;
    obj2 = channel(id[59]);
    items2 = [];
    items2[0] = closure_44;
    tmp5 = closure_44;
    stateFromStores1 = obj2.useStateFromStores(items2, () => GuildStore.getGuild(guildId));
    closure_4 = stateFromStores1;
    systemChannelFlags = undefined;
    if (stateFromStores1 != null) {
      systemChannelFlags = stateFromStores1.systemChannelFlags;
    }
    tmp2Result = tmp2(tmp3[59]);
    items3 = [];
    items3[0] = closure_39;
    stateFromStores2 = tmp2Result.useStateFromStores(items3, () => id.getId(), []);
    closure_5 = stateFromStores2;
    InlineAttachmentMedia = tmp2(tmp3[64]).InlineAttachmentMedia;
    setting = InlineAttachmentMedia.useSetting();
    InlineEmbedMedia = tmp2(tmp3[64]).InlineEmbedMedia;
    setting1 = InlineEmbedMedia.useSetting();
    RenderEmbeds = tmp2(tmp3[64]).RenderEmbeds;
    setting2 = RenderEmbeds.useSetting();
    RenderReactions = tmp2(tmp3[64]).RenderReactions;
    setting3 = RenderReactions.useSetting();
    DeveloperMode = tmp2(tmp3[64]).DeveloperMode;
    setting4 = DeveloperMode.useSetting();
    AnimateEmoji = tmp2(tmp3[64]).AnimateEmoji;
    setting5 = AnimateEmoji.useSetting();
    AnimateStickers = tmp2(tmp3[64]).AnimateStickers;
    setting6 = AnimateStickers.useSetting();
    GifAutoPlay = tmp2(tmp3[64]).GifAutoPlay;
    setting7 = GifAutoPlay.useSetting();
    TimestampHourCycle = tmp2(tmp3[64]).TimestampHourCycle;
    setting8 = TimestampHourCycle.useSetting();
    tmp2Result1 = tmp2(tmp3[59]);
    items4 = [];
    items4[0] = closure_38;
    stateFromStores3 = tmp2Result1.useStateFromStores(items4, () => theme.theme, []);
    tmp2Result2 = tmp2(tmp3[65]);
    closure_129_0 = stateFromStores;
    closure_129_1 = undefined;
    obj6 = closure_4;
    items5 = [];
    items5[0] = stateFromStores;
    isMessageSwipeActionsEnabled = tmp2Result2.useIsMessageSwipeActionsEnabled();
    memo = closure_4.useMemo(() => {
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
    tmp2Result3 = tmp2(tmp3[59]);
    items6 = [];
    items6[0] = closure_49;
    items7 = [];
    items7[0] = memo;
    tmp21 = closure_49;
    linkedLobby = channel.linkedLobby;
    application_id = undefined;
    stateFromStoresObject = tmp2Result3.useStateFromStoresObject(
      items6,
      () => _modDef12.mapValues(stateFromStores, (arg0, arg1) => primaryActivity.getPrimaryActivity(arg1)),
      items7,
    );
    if (linkedLobby != null) {
      application_id = linkedLobby.application_id;
    }
    closure_130_0 = stateFromStores;
    closure_130_1 = application_id;
    items8 = [,];
    items8[0] = stateFromStores;
    items8[1] = application_id;
    memo1 = obj6.useMemo(() => {
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
    items9 = [];
    items9[0] = memo1;
    effect = obj6.useEffect(() => {
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
    tmp26 = closure_1;
    tmp27 = closure_3;
    tmp28 = closure_3(closure_1(tmp3[66])(stateFromStores, channel), 2);
    [tmp29, r10132] = tmp28;
    tmp2Result4 = tmp2(tmp3[59]);
    items10 = [];
    items10[0] = closure_46;
    tmp30 = closure_46;
    stateFromStores4 = tmp2Result4.useStateFromStores(items10, () => InviteStore.getInvites(), []);
    tmp2Result5 = tmp2(tmp3[67]);
    fetchVoiceChannelInviteStartTimes = tmp2Result5.useFetchVoiceChannelInviteStartTimes(stateFromStores4);
    tmp2Result6 = tmp2(tmp3[59]);
    items11 = [];
    items11[0] = closure_17;
    stateFromStoresObject1 = tmp2Result6.useStateFromStoresObject(
      items11,
      () => ({
        appDirectoryEmbedApplications: ApplicationDirectoryApplicationsStore.getApplications(),
        invalidAppDirectoryEmbedApplicationIds: ApplicationDirectoryApplicationsStore.getInvalidApplicationIds(),
        appDirectoryEmbedApplicationFetchStates: ApplicationDirectoryApplicationsStore.getApplicationFetchStates(),
      }),
      [],
    );
    ({
      appDirectoryEmbedApplications,
      invalidAppDirectoryEmbedApplicationIds,
      appDirectoryEmbedApplicationFetchStates,
    } = stateFromStoresObject1);
    tmp2Result7 = tmp2(tmp3[59]);
    items12 = [];
    items12[0] = closure_8;
    stateFromStoresArray = tmp2Result7.useStateFromStoresArray(items12, () =>
      channelSummariesExperiment.getFetchingOrFailedFetchingIds(),
    );
    tmp2Result8 = tmp2(tmp3[59]);
    items13 = [];
    items13[0] = closure_7;
    stateFromStoresArray1 = tmp2Result8.useStateFromStoresArray(items13, () => closure_7.getFetchingIds());
    tmp2Result9 = tmp2(tmp3[59]);
    items14 = [];
    items14[0] = closure_56;
    stateFromStoresArray2 = tmp2Result9.useStateFromStoresArray(items14, () => fetchingSkuIds.getFetchingSkuIds());
    tmp2Result10 = tmp2(tmp3[59]);
    items15 = [];
    items15[0] = closure_6;
    items16 = [];
    items16[0] = id;
    stateFromStoresArray3 = tmp2Result10.useStateFromStoresArray(
      items15,
      () => {
        const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(id);
        const mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
        return mapped.filter(GlobalUtils.isNotNullish);
      },
      items16,
    );
    tmp2Result11 = tmp2(tmp3[59]);
    items17 = [,];
    items17[0] = closure_6;
    items17[1] = tmp21;
    stateFromStoresArray4 = tmp2Result11.useStateFromStoresArray(items17, () => {
      const items = [];
      const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(id);
      function _loop(iter) {
        const userIds = iter.userIds;
        iter = userIds.values();
        value = iter.next().value;
        let findActivityResult;
        if (null != value) {
          findActivityResult = PresenceStore.findActivity(
            value,
            (application_id) => application_id.application_id === iter.applicationId,
          );
        }
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
    tmp2Result12 = tmp2(tmp3[59]);
    items18 = [];
    items18[0] = closure_6;
    stateFromStoresArray5 = tmp2Result12.useStateFromStoresArray(items18, () => {
      const set = new Set();
      const embeddedActivitiesByChannel = stateFromStores7.getEmbeddedActivitiesByChannel();
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
    tmp2Result13 = tmp2(tmp3[59]);
    items19 = [];
    items19[0] = closure_6;
    stateFromStoresArray6 = tmp2Result13.useStateFromStoresArray(items19, () => {
      const launchStates = stateFromStores7.getLaunchStates();
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
    tmp2Result14 = tmp2(tmp3[59]);
    items20 = [];
    items20[0] = closure_24;
    stateFromStores5 = tmp2Result14.useStateFromStores(items20, () => mediaPostEmbeds.getMediaPostEmbeds());
    tmp2Result15 = tmp2(tmp3[59]);
    items21 = [];
    items21[0] = closure_21;
    stateFromStores6 = tmp2Result15.useStateFromStores(items21, () => guildTemplates.getGuildTemplates(), []);
    tmp2Result16 = tmp2(tmp3[59]);
    items22 = [];
    items22[0] = closure_16;
    stateFromStores7 = tmp2Result16.useStateFromStores(items22, () => invites.getInvites(), []);
    closure_6 = stateFromStores7;
    tmp2Result17 = tmp2(tmp3[59]);
    items23 = [];
    items23[0] = tmp5;
    items24 = [];
    items24[0] = stateFromStores7;
    stateFromStoresArray7 = tmp2Result17.useStateFromStoresArray(
      items23,
      () => {
        const items = [];
        const values = stateFromStores7.values();
        const iter = values[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp3 = nextResult;
          let tmp5 = nextResult.state === constants2.RESOLVED;
          if (tmp5) {
            tmp5 = null != GuildStore.getGuild(tmp3.guildId);
          }
          if (tmp5) {
            let arr = items.push(tmp3.guildId);
          }
          continue;
        }
        return items;
      },
      items24,
    );
    tmp2Result18 = tmp2(tmp3[59]);
    items25 = [];
    items25[0] = closure_9;
    stateFromStores8 = tmp2Result18.useStateFromStores(items25, () => items71.getBuildOverrides(), []);
    tmp2Result19 = tmp2(tmp3[68]);
    codedLinksExperimentEmbeds = tmp2Result19.useCodedLinksExperimentEmbeds();
    tmp2Result20 = tmp2(tmp3[69]);
    quests1 = tmp2Result20.useQuests({ fetchPolicy: "cache-or-network", callerSource: "messages_native" });
    ({ quests, isFetchingCurrentQuests } = quests1);
    found = stateFromStores.filter((type) => type.type === constants.PREMIUM_REFERRAL);
    mapped = found.map((referralTrialOfferId) => referralTrialOfferId.referralTrialOfferId);
    closure_7 = mapped.filter(tmp2(tmp3[63]).isNotNullish);
    tmp2Result21 = tmp2(tmp3[59]);
    items26 = [];
    items26[0] = closure_30;
    stateFromStoresArray8 = tmp2Result21.useStateFromStoresArray(items26, () => {
      const mapped = closure_7.map((item) => {
        relevantUserTrialOffer = relevantUserTrialOffer.getRelevantUserTrialOffer(item);
        id = undefined;
        if (relevantUserTrialOffer != null) {
          id = relevantUserTrialOffer.id;
        }
        return id;
      });
      return mapped.filter(GlobalUtils.isNotNullish);
    });
    tmp2Result22 = tmp2(tmp3[70]);
    trialOffer = tmp2Result22.useTrialOffer(closure_65);
    tmp2Result23 = tmp2(tmp3[59]);
    tmp50 = closure_54;
    items27 = [];
    items27[0] = closure_54;
    stateFromStores9 = tmp2Result23.useStateFromStores(items27, () =>
      stateFromStores(id[71]).isPremiumExactly(authStore2.getCurrentUser(), TIER_2.TIER_2),
    );
    tmp2Result24 = tmp2(tmp3[59]);
    items28 = [];
    items28[0] = closure_41;
    items29 = [];
    items29[0] = id;
    stateFromStores10 = tmp2Result24.useStateFromStores(
      items28,
      () => EditMessageStore.getEditingMessageId(id),
      items29,
    );
    tmp2Result25 = tmp2(tmp3[59]);
    items30 = [];
    items30[0] = closure_32;
    items31 = [];
    items31[0] = id;
    stateFromStores11 = tmp2Result25.useStateFromStores(
      items30,
      () => {
        const pendingReply = PendingReplyStore.getPendingReply(id);
        id = undefined;
        if (pendingReply != null) {
          id = pendingReply.message.id;
        }
        return id;
      },
      items31,
    );
    tmp2Result26 = tmp2(tmp3[59]);
    items32 = [];
    items32[0] = closure_51;
    items33 = [];
    items33[0] = id;
    stateFromStores12 = tmp2Result26.useStateFromStores(
      items32,
      () => ReadStateStore.getOldestUnreadMessageId(id),
      items33,
    );
    tmp2Result27 = tmp2(tmp3[59]);
    items34 = [];
    items34[0] = closure_45;
    items35 = [];
    items35[0] = guildId;
    stateFromStores13 = tmp2Result27.useStateFromStores(
      items34,
      () => {
        let canChatInGuildResult = null != guildId;
        if (canChatInGuildResult) {
          canChatInGuildResult = GuildVerificationStore.canChatInGuild(tmp);
        }
        return canChatInGuildResult;
      },
      items35,
    );
    tmp2Result28 = tmp2(tmp3[59]);
    items36 = [];
    items36[0] = closure_48;
    items37 = [];
    items37[0] = channel;
    tmp56 = closure_48;
    stateFromStores14 = tmp2Result28.useStateFromStores(
      items36,
      () => PermissionStore.can(constants2.SEND_MESSAGES, channel),
      items37,
    );
    tmp58 = closure_1(tmp3[72])(id);
    tmp2Result29 = tmp2(tmp3[59]);
    items38 = [];
    items38[0] = closure_55;
    items39 = [];
    items39[0] = stateFromStores2;
    tmp59 = closure_55;
    stateFromStores15 = tmp2Result29.useStateFromStores(
      items38,
      () => VoiceStateStore.getUserVoiceChannelId(closure_2_61, stateFromStores2),
      items39,
    );
    tmp2Result30 = tmp2(tmp3[59]);
    items40 = [];
    items40[0] = closure_50;
    stateFromStores16 = tmp2Result30.useStateFromStores(items40, () => channelId.getChannelId(), []);
    tmp2Result31 = tmp2(tmp3[59]);
    items41 = [];
    items41[0] = closure_33;
    items42 = [];
    items42[0] = channel;
    stateFromStores17 = tmp2Result31.useStateFromStores(
      items41,
      () => {
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
      },
      items42,
    );
    tmp2Result32 = tmp2(tmp3[59]);
    items43 = [];
    items43[0] = closure_42;
    stateFromStoresObject2 = tmp2Result32.useStateFromStoresObject(
      items43,
      () => ({
        resolvingGiftCodes: GiftCodeStore.getResolvingCodes(),
        resolvedGiftCodes: GiftCodeStore.getResolvedCodes(),
        acceptingGiftCodes: GiftCodeStore.getAcceptingCodes(),
      }),
      [],
    );
    ({ resolvingGiftCodes, resolvedGiftCodes, acceptingGiftCodes } = stateFromStoresObject2);
    tmp2Result33 = tmp2(tmp3[59]);
    items44 = [];
    items44[0] = closure_11;
    items45 = [];
    items45[0] = id;
    stateFromStores18 = tmp2Result33.useStateFromStores(
      items44,
      () => ChannelRTCStore.getParticipants(id).length,
      items45,
    );
    tmp2Result34 = tmp2(tmp3[59]);
    items46 = [];
    items46[0] = closure_53;
    items47 = [];
    items47[0] = id;
    stateFromStores19 = tmp2Result34.useStateFromStores(items46, () => UploadStore.getFiles(id), items47);
    tmp2Result35 = tmp2(tmp3[59]);
    items48 = [];
    items48[0] = closure_33;
    items49 = [];
    items49[0] = id;
    stateFromStores20 = tmp2Result35.useStateFromStores(
      items48,
      () => ReferencedMessageStore.getReplyIdsForChannel(id),
      items49,
    );
    tmp2Result36 = tmp2(tmp3[59]);
    items50 = [];
    items50[0] = closure_5;
    stateFromStoresObject3 = tmp2Result36.useStateFromStoresObject(
      items50,
      () => ({
        useReducedMotion: stateFromStores2.useReducedMotion,
        roleStyle: stateFromStores2.roleStyle,
        officialMessageStyle: stateFromStores2.officialMessageStyle,
        saturation: stateFromStores2.saturation,
        displayNameStylesEnabled: stateFromStores2.displayNameStylesEnabled,
      }),
      [],
    );
    ({ useReducedMotion, roleStyle, officialMessageStyle, saturation, displayNameStylesEnabled } =
      stateFromStoresObject3);
    tmp2Result37 = tmp2(tmp3[59]);
    items51 = [];
    items51[0] = closure_36;
    items52 = [];
    items52[0] = id;
    stateFromStores21 = tmp2Result37.useStateFromStores(
      items51,
      () => ThreadMessageStore.getChannelThreadsVersion(id),
      items52,
    );
    tmp2Result38 = tmp2(tmp3[59]);
    items53 = [];
    items53[0] = closure_23;
    stateFromStoresObject4 = tmp2Result38.useStateFromStoresObject(items53, () =>
      messageInteractionStates.getMessageInteractionStates(),
    );
    tmp2Result39 = tmp2(tmp3[59]);
    items54 = [];
    items54[0] = closure_22;
    tmp70 = closure_3(
      tmp2Result39.useStateFromStores(
        items54,
        () => {
          const items = [
            LocalInteractionComponentStateStore.getInteractionComponentStates(),
            LocalInteractionComponentStateStore.getInteractionComponentStateVersion(),
          ];
          return items;
        },
        [],
        tmp2(tmp3[73]).isVersionEqual,
      ),
      2,
    );
    [tmp71, tmp72] = tmp70;
    tmp2Result40 = tmp2(tmp3[59]);
    items55 = [];
    items55[0] = closure_14;
    stateFromStores22 = tmp2Result40.useStateFromStores(items55, () => hasLoadedExperiments.hasLoadedExperiments);
    tmp2Result41 = tmp2(tmp3[74]);
    isSpamMessageRequest = tmp2Result41.useIsSpamMessageRequest(channel.id);
    tmp2Result42 = tmp2(tmp3[75]);
    tmp76 = null != stateFromStores;
    isMessageRequest = tmp2Result42.useIsMessageRequest(channel.id);
    if (tmp76) {
      tmp77 = stateFromStores.ready || stateFromStores.cached;
      tmp76 = tmp77;
    }
    tmp78 = null != stateFromStores && stateFromStores.cached;
    tmp79 = null != stateFromStores && stateFromStores.ready && !stateFromStores.loadingMore;
    tmp2Result43 = tmp2(tmp3[59]);
    items56 = [];
    items56[0] = closure_20;
    stateFromStores23 = tmp2Result43.useStateFromStores(items56, () => rsvpVersion.getRsvpVersion());
    tmp2Result44 = tmp2(tmp3[59]);
    items57 = [];
    items57[0] = closure_19;
    stateFromStores24 = tmp2Result44.useStateFromStores(items57, () => messagesVersion.getMessagesVersion());
    tmp2Result45 = tmp2(tmp3[59]);
    items58 = [];
    items58[0] = closure_43;
    stateFromStores25 = tmp2Result45.useStateFromStores(items58, () =>
      communicationDisabledVersion.getCommunicationDisabledVersion(),
    );
    tmp2Result46 = tmp2(tmp3[59]);
    items59 = [];
    items59[0] = closure_43;
    items60 = [,];
    items60[0] = guildId;
    items60[1] = stateFromStores;
    stateFromStoresObject5 = tmp2Result46.useStateFromStoresObject(
      items59,
      () => {
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
      },
      items60,
    );
    tmp2Result47 = tmp2(tmp3[59]);
    items61 = [];
    items61[0] = tmp56;
    stateFromStores26 = tmp2Result47.useStateFromStores(items61, () =>
      PermissionStore.can(constants2.MODERATE_MEMBERS, stateFromStores1),
    );
    tmp2Result48 = tmp2(tmp3[77]);
    id1 = undefined;
    if (stateFromStores1 != null) {
      id1 = stateFromStores1.id;
    }
    tmp2Result49 = tmp2(tmp3[59]);
    items62 = [];
    items62[0] = closure_37;
    stateFromStores27 = tmp2Result49.useStateFromStores(items62, () => locale.locale);
    tmp2Result50 = tmp2(tmp3[78]);
    isPaymentsBlocked = tmp2Result50.useIsPaymentsBlocked();
    tmp2Result51 = tmp2(tmp3[59]);
    items63 = [];
    items63[0] = closure_35;
    stateFromStores28 = tmp2Result51.useStateFromStores(items63, () => {
      let hasJoinedResult = channel.isForumPost();
      if (hasJoinedResult) {
        hasJoinedResult = JoinedThreadsStore.hasJoined(id);
      }
      return hasJoinedResult;
    });
    tmp2Result52 = tmp2(tmp3[59]);
    items64 = [];
    items64[0] = closure_25;
    stateFromStores29 = tmp2Result52.useStateFromStores(items64, () =>
      MediaPostSharePromptStore.shouldDisplayPrompt(id),
    );
    tmp2Result53 = tmp2(tmp3[59]);
    items65 = [];
    items65[0] = closure_31;
    stateFromStores30 = tmp2Result53.useStateFromStores(items65, () => eligible.isEligible());
    tmp2Result54 = tmp2(tmp3[59]);
    items66 = [];
    items66[0] = closure_10;
    stateFromStores31 = tmp2Result54.useStateFromStores(items66, () => stateFromStoresArray9.getLazyCacheStatus());
    tmp2Result55 = tmp2(tmp3[79]);
    messageJumpAndroidKeyboardHeight = tmp2Result55.useMessageJumpAndroidKeyboardHeight();
    tmp93 = tmp26(tmp3[80])();
    tmp2Result56 = tmp2(tmp3[81]);
    channelSummariesExperiment = tmp2Result56.useChannelSummariesExperiment(channel);
    closure_8 = channelSummariesExperiment;
    tmp2Result57 = tmp2(tmp3[59]);
    items67 = [];
    items67[0] = closure_34;
    items68 = [,];
    items68[0] = channelSummariesExperiment;
    items68[1] = channel.id;
    stateFromStores32 = tmp2Result57.useStateFromStores(
      items67,
      () => {
        let selectedSummaryResult = null;
        if (channelSummariesExperiment) {
          selectedSummaryResult = SummaryStore.selectedSummary(channel.id);
        }
        return selectedSummaryResult;
      },
      items68,
    );
    items69 = [, , , ,];
    items69[0] = channel.id;
    ({ hasMoreAfter: arr73[1], hasMoreBefore: arr73[2], length: arr73[3], ready: arr73[4] } = stateFromStores);
    tmp96 = tmp26(tmp3[82])(channel.id);
    effect1 = obj6.useEffect(() => {
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
    }, items69);
    tmp2Result58 = tmp2(tmp3[84]);
    shouldTrackAnnouncementMessageViews = tmp2Result58.useShouldTrackAnnouncementMessageViews({
      guild: stateFromStores1,
      channel,
      messages: stateFromStores,
      isMessagesReady: tmp76,
    });
    tmp2Result59 = tmp2(tmp3[84]);
    shouldTrackRichPresenceInviteEmbedViews = tmp2Result59.useShouldTrackRichPresenceInviteEmbedViews({
      messages: stateFromStores,
      isMessagesReady: tmp76,
    });
    tmp2Result60 = tmp2(tmp3[84]);
    shouldTrackOfficialMessageViews = tmp2Result60.useShouldTrackOfficialMessageViews({
      guild: stateFromStores1,
      messages: stateFromStores,
      isMessagesReady: tmp76,
    });
    tmp2Result61 = tmp2(tmp3[84]);
    shouldTrackVoiceInviteEmbedViews = tmp2Result61.useShouldTrackVoiceInviteEmbedViews({
      messages: stateFromStores,
      isMessagesReady: tmp76,
    });
    tmp2Result62 = tmp2(tmp3[85]);
    shouldDisplaySpoilerObscurity = tmp2Result62.useShouldDisplaySpoilerObscurity(channel);
    tmp2Result63 = tmp2(tmp3[86]);
    items70 = [,];
    items70[0] = id;
    items70[1] = guildId;
    isAgeVerified = tmp2Result63.useIsAgeVerified();
    effect2 = obj6.useEffect(() => {
      stateFromStores(id[87]).handleChannelSelect();
      return () => {
        stateFromStores(id[87]).handleChannelSelect();
      };
    }, items70);
    tmp2Result64 = tmp2(tmp3[88]);
    shouldDisableInteractiveComponents = tmp2Result64.useShouldDisableInteractiveComponents(channel.id);
    items71 = [];
    closure_9 = items71;
    tmp106 = closure_28(channel.id);
    item = stateFromStores.forEach((messageReference) => {
      messageReference = messageReference.messageReference;
      let message_id;
      if (messageReference != null) {
        message_id = messageReference.message_id;
      }
      if (null != message_id) {
        items71.push(message_id);
      }
    });
    tmp108 = closure_29(items71);
    tmp2Result65 = tmp2(tmp3[59]);
    items72 = [];
    items72[0] = closure_15;
    items73 = [];
    items73[0] = id;
    stateFromStores33 = tmp2Result65.useStateFromStores(
      items72,
      () => ExplicitMediaStore.getChannelFpInfo(id),
      items73,
    );
    tmp2Result66 = tmp2(tmp3[59]);
    items74 = [];
    items74[0] = closure_27;
    stateFromStores34 = tmp2Result66.useStateFromStores(items74, () => pendingConnection.getPendingConnection());
    tmp111 = tmp26(tmp3[89])();
    tmp112 = tmp26(tmp3[90])(stateFromStores);
    ({ unloadedContentEntryMessageIds, unloadableContentEntryMessageIds } = tmp112);
    tmp2Result67 = tmp2(tmp3[59]);
    items75 = [];
    items75[0] = tmp50;
    stateFromStores35 = tmp2Result67.useStateFromStores(items75, () => {
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
    tmp2Result68 = tmp2(tmp3[59]);
    items76 = [];
    items76[0] = closure_18;
    stateFromStores36 = tmp2Result68.useStateFromStores(items76, () => version.getVersion());
    tmp2Result69 = tmp2(tmp3[91]);
    colorStore = tmp2Result69.useColorStore((palette) => Object.keys(palette.palette).length);
    tmp2Result70 = tmp2(tmp3[59]);
    items77 = [];
    items77[0] = closure_13;
    stateFromStores37 = tmp2Result70.useStateFromStores(items77, () => EmojiStore.getGuildEmoji(guildId));
    tmp2Result71 = tmp2(tmp3[59]);
    items78 = [];
    items78[0] = tmp59;
    items79 = [];
    items79[0] = guildId;
    stateFromStores38 = tmp2Result71.useStateFromStores(
      items78,
      () => {
        if (null == guildId) {
          return null;
        } else {
          const voiceStates = VoiceStateStore.getVoiceStates(tmp);
          return messages_MessagesUtils.getVoiceStateChannelSummaryFromVoiceStates(voiceStates);
        }
      },
      items79,
    );
    tmp2Result72 = tmp2(tmp3[59]);
    items80 = [, , ,];
    items80[0] = closure_58;
    items80[1] = closure_12;
    items80[2] = tmp30;
    items80[3] = closure_40;
    stateFromStoresObject6 = tmp2Result72.useStateFromStoresObject(items80, () => {
      const obj = {};
      invites = InviteStore.getInvites();
      const values = invites.values();
      const iter = values[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp3 = nextResult;
        channel = nextResult.channel;
        let id1;
        if (channel != null) {
          id1 = channel.id;
        }
        if (null != id1) {
          let obj4 = channel(id[92]);
          if (obj4.isVoiceChannelInvite(tmp3)) {
            id = tmp3.channel.id;
            let guild = tmp3.guild;
            let id2;
            if (guild != null) {
              id2 = guild.id;
            }
            voiceStatesForChannelAlt = voiceStatesForChannelAlt.getVoiceStatesForChannelAlt(id, id2);
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
    tmp2Result73 = tmp2(tmp3[59]);
    items81 = [];
    items81[0] = closure_52;
    stateFromStoresArray9 = tmp2Result73.useStateFromStoresArray(items81, () => {
      const items = [...closure_1_52.getRemoteActivities(), ...closure_1_52.getHiddenActivities()];
      return items.filter(channel(id[63]).isNotNullish);
    });
    closure_10 = stateFromStoresArray9;
    tmp2Result74 = tmp2(tmp3[59]);
    items82 = [];
    items82[0] = closure_57;
    stateFromStoresObject7 = tmp2Result74.useStateFromStoresObject(items82, () =>
      stateFromStoresArray9.reduce((acc, application_id) => {
        if (null == application_id.application_id) {
          return acc;
        } else {
          state = state.getState(application_id.application_id, constants.JOIN);
          if (null != state) {
            acc[application_id.application_id] = state;
          }
          return acc;
        }
      }, {}),
    );
    tmp2Result75 = tmp2(tmp3[59]);
    items83 = [];
    items83[0] = closure_26;
    stateFromStoresArray10 = tmp2Result75.useStateFromStoresArray(items83, () => {
      const items = [authStore.getNewestTokens(), authStore.getApplicationFetchStateVersion()];
      return items;
    }, []);
    tmp2Result76 = tmp2(tmp3[59]);
    items84 = [];
    items84[0] = tmp50;
    stateFromStores39 = tmp2Result76.useStateFromStores(items84, () => {
      const currentUser = authStore2.getCurrentUser();
      let displayNameStyles;
      if (currentUser != null) {
        displayNameStyles = currentUser.displayNameStyles;
      }
      return displayNameStyles;
    });
    tmp2Result77 = tmp2(tmp3[93]);
    fetchSocialLayerStorefrontProductDetailsEmbedApplications =
      tmp2Result77.useFetchSocialLayerStorefrontProductDetailsEmbedApplications(stateFromStores);
    tmp124 = jsxs;
    obj1 = { profile: null, children: null };
    tmp26Result = tmp26(tmp3[94]);
    obj1.profile = tmp2(tmp3[94]).Profiles.Messages;
    isThreadResult = channel.isThread();
    if (isThreadResult) {
      tmp127 = jsx;
      isThreadResult = jsx(tmp26(tmp3[95]), { absolute: true });
    }
    items85 = [,];
    items85[0] = isThreadResult;
    tmp128 = jsx;
    obj84 = {
      ref: global.ref,
      theme: stateFromStores3,
      saturation,
      isStaff: stateFromStores35,
      animateEmoji: setting5,
      animateStickers: setting6,
      containerWidth: tmp111,
      gifAutoPlay: setting7,
      timestampHourCycle: setting8,
      inlineAttachmentMedia: setting,
      inlineEmbedMedia: setting1,
      renderEmbeds: setting2,
      renderReactions: setting3,
      developerMode: setting4,
      roleStyle,
      officialMessageStyle,
      guildId,
      currentUserId: stateFromStores2,
      channelId: id,
      isMessagesReady: tmp76,
      isMessagesCached: tmp78,
      isMessagesAckable: tmp79,
      isMessageRequest,
      isSpamMessageRequest,
      messageAuthorActivities: stateFromStoresObject,
      invites: stateFromStores4,
      appDirectoryEmbedApplications,
      invalidAppDirectoryEmbedApplicationIds,
      invalidApplicationIds: stateFromStoresArray,
      applicationAssetFetchingIds: stateFromStoresArray1,
      messages: stateFromStores,
      messagesWithActivitiesLaunching: stateFromStoresArray6,
      activityInstanceIds: stateFromStoresArray3,
      activityParticipants: stateFromStoresArray5,
      activityInstancePresenceDetails: stateFromStoresArray4,
      appDirectoryEmbedApplicationFetchStates,
      mediaPostPreviewEmbeds: stateFromStores5,
      guildTemplates: stateFromStores6,
      gameOrganizationInvites: stateFromStores7,
      joinedGameOrganizationGuildIds: stateFromStoresArray7,
      buildOverrides: stateFromStores8,
      fetchingSkuIds: stateFromStoresArray2,
      experimentEmbeds: codedLinksExperimentEmbeds,
      quests,
      isFetchingCurrentQuests,
      editingMessageId: stateFromStores10,
      replyingMessageId: stateFromStores11,
      oldestUnreadMessageId: stateFromStores12,
      canChat: stateFromStores13,
      canSendMessages: stateFromStores14,
      isCallActive: tmp58,
      voiceStatePrivateChannelId: stateFromStores15,
      currentClientVoiceChannelId: stateFromStores16,
      voiceStateChannelIdSummaryForGuild: stateFromStores38,
      resolvingGiftCodes,
      resolvedGiftCodes,
      acceptingGiftCodes,
      participantsLength: stateFromStores18,
      uploads: stateFromStores19,
      repliedIds: stateFromStores20,
      useReducedMotion,
      displayNameStylesEnabled,
      channelThreadsVersion: stateFromStores21,
      rsvpVersion: stateFromStores23,
      failedMessagesVersion: stateFromStores24,
      communicationDisabledVersion: stateFromStores25,
      messageAuthorMembers: stateFromStoresObject5,
      forwardGuildsVersion: stateFromStores36,
      interactionStates: stateFromStoresObject4,
      interactionComponentStates: tmp71,
      interactionComponentStatesVersion: tmp72,
      hasLoadedExperiments: null,
      guildSystemChannelFlags: null,
      currentUserCommunicationDisabled: null,
      renderCommunicationDisabled: null,
      userSettingsLocale: null,
      paymentsBlocked: null,
      isFollowingForumPost: null,
      showMediaPostSharePrompt: null,
      showPushFeedback: null,
      cacheStoreLoaded: null,
      androidKeyboardHeight: null,
      selectedSummary: null,
      selectedConversation: null,
      keyboardType: null,
      shouldTrackAnnouncementMessageViews: null,
      shouldTrackRichPresenceInviteEmbedViews: null,
      shouldTrackOfficialMessageViews: null,
      shouldTrackVoiceInviteEmbedViews: null,
      shouldObscureSpoiler: null,
      shouldDisableInteractiveComponents: null,
      channelPolls: null,
      messageReferencePolls: null,
      explicitMediaFalsePositiveInfo: null,
      familyCenterPendingConnection: null,
      threadStartingReferenceMessage: null,
      unloadedContentEntryMessageIds: null,
      unloadableContentEntryMessageIds: null,
      resolvedReferralTrialOfferIds: null,
      referralTrialOfferId: null,
      isPremiumTier2User: null,
      activityInviteMessageIds: null,
      guildInviteColorsFetched: null,
      isAgeVerified: null,
      guildEmojis: null,
      enableSwipeActions: null,
      selfActivities: null,
      activityLaunchJoinStates: null,
      authorizedAppsTokens: null,
      currentUserDisplayNameStyles: null,
      voiceInviteDataByChannelId: null,
      officialMessageColor: null,
    };
    tmp26Result1 = tmp26(tmp3[96]);
    if (stateFromStores22) {
      stateFromStores22 = tmp76;
    }
    obj84.hasLoadedExperiments = stateFromStores22;
    obj84.guildSystemChannelFlags = systemChannelFlags;
    obj84.currentUserCommunicationDisabled = tmp27(tmp2Result48.useCurrentUserCommunicationDisabled(id1), 2)[1];
    obj84.renderCommunicationDisabled = stateFromStores26;
    obj84.userSettingsLocale = stateFromStores27;
    obj84.paymentsBlocked = isPaymentsBlocked;
    obj84.isFollowingForumPost = stateFromStores28;
    obj84.showMediaPostSharePrompt = stateFromStores29;
    obj84.showPushFeedback = stateFromStores30;
    obj84.cacheStoreLoaded = "initializing" !== stateFromStores31;
    obj84.androidKeyboardHeight = messageJumpAndroidKeyboardHeight;
    obj84.selectedSummary = stateFromStores32;
    obj84.selectedConversation = tmp96;
    obj84.keyboardType = tmp93;
    obj84.shouldTrackAnnouncementMessageViews = shouldTrackAnnouncementMessageViews;
    obj84.shouldTrackRichPresenceInviteEmbedViews = shouldTrackRichPresenceInviteEmbedViews;
    obj84.shouldTrackOfficialMessageViews = shouldTrackOfficialMessageViews;
    obj84.shouldTrackVoiceInviteEmbedViews = shouldTrackVoiceInviteEmbedViews;
    obj84.shouldObscureSpoiler = shouldDisplaySpoilerObscurity;
    obj84.shouldDisableInteractiveComponents = shouldDisableInteractiveComponents;
    obj84.channelPolls = tmp106;
    obj84.messageReferencePolls = tmp108;
    obj84.explicitMediaFalsePositiveInfo = stateFromStores33;
    obj84.familyCenterPendingConnection = stateFromStores34;
    obj84.threadStartingReferenceMessage = stateFromStores17;
    obj84.unloadedContentEntryMessageIds = unloadedContentEntryMessageIds;
    obj84.unloadableContentEntryMessageIds = unloadableContentEntryMessageIds;
    obj84.resolvedReferralTrialOfferIds = stateFromStoresArray8;
    id2 = undefined;
    if (trialOffer != null) {
      id2 = trialOffer.id;
    }
    obj84.referralTrialOfferId = id2;
    obj84.isPremiumTier2User = stateFromStores9;
    obj84.activityInviteMessageIds = tmp29;
    obj84.guildInviteColorsFetched = colorStore;
    obj84.isAgeVerified = isAgeVerified;
    obj84.guildEmojis = stateFromStores37;
    obj84.enableSwipeActions = isMessageSwipeActionsEnabled;
    obj84.selfActivities = stateFromStoresArray9;
    obj84.activityLaunchJoinStates = stateFromStoresObject7;
    obj84.authorizedAppsTokens = stateFromStoresArray10;
    obj84.currentUserDisplayNameStyles = stateFromStores39;
    obj84.voiceInviteDataByChannelId = stateFromStoresObject6;
    officialMessageColor = undefined;
    if (stateFromStores1 != null) {
      officialMessageColor = stateFromStores1.officialMessageColor;
    }
    obj84.officialMessageColor = officialMessageColor;
    merged1 = Object.assign(merged);
    items85[1] = tmp128(tmp26Result1, obj84);
    obj1.children = items85;
    return tmp124(tmp26Result, obj1);
  }
}
const PollsInteractionStore = fn(11331);
({ useChannelPollInteractions: closure_28, useMessagePollInteractions: closure_29 } = PollsInteractionStore);
const Constants = fn(1072);
({
  ActivityActionTypes: closure_59,
  ChannelTypesSets: closure_60,
  ME: closure_61,
  MessageTypes: closure_62,
  Permissions: closure_63,
} = Constants);
let closure_64 = fn(11327).GameOrganizationInviteStates;
const PremiumConstants = fn(1386);
({ PREMIUM_TIER_2_REFERRAL_TRIAL_ID: closure_65, PremiumTypes: closure_66 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_67, jsxs: closure_68 } = jsxProd);
MessagesConnected.displayName = "MessagesConnected";
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/Messages.tsx");

export default MessagesConnected;
