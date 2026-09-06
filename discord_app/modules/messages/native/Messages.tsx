// discord_app/modules/messages/native/Messages.tsx
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../_runtime/00019_noop.js";
import closure_5 from "../../a11y/AccessibilityStore.tsx";
import closure_6 from "../../activities/EmbeddedActivitiesStore.tsx";
import closure_7 from "../../applications/ApplicationAssetsStore.tsx";
import closure_8 from "../../applications/ApplicationStore.tsx";
import closure_9 from "../../build_overrides/BuildOverrideStore.tsx";
import closure_10 from "../../cache/CacheStore.tsx";
import closure_11 from "../../calls/ChannelRTCStore.tsx";
import closure_12 from "../../channel/VoiceChannelStartTimeStore.tsx";
import closure_13 from "../../emojis/EmojiStore.tsx";
import closure_14 from "../../experiments/ExperimentStore.tsx";
import closure_15 from "../../explicit_media_redaction/ExplicitMediaStore.tsx";
import closure_16 from "../../global_discovery_apps/stores/ApplicationDirectoryApplicationsStore.tsx";
import closure_17 from "../../guild/BasicGuildStore.tsx";
import closure_18 from "../../guild_automod/GuildAutomodMessageStore.tsx";
import closure_19 from "../../guild_scheduled_events/GuildScheduledEventStore.tsx";
import closure_20 from "../../guild_templates/GuildTemplateStore.tsx";
import closure_21 from "../../interaction_components/LocalInteractionComponentStateStore.tsx";
import closure_22 from "../../interactions/InteractionStore.tsx";
import closure_23 from "../../media_channel/MediaPostEmbedStore.tsx";
import closure_24 from "../../media_channel/MediaPostSharePromptStore.tsx";
import closure_25 from "../../oauth2/AuthorizedAppsStore.tsx";
import closure_26 from "../../parent_tools/FamilyCenterPendingConnectionStore.tsx";
import useMessagePollInteractions from "../../polls/PollsInteractionStore.tsx";
import closure_29 from "../../premium/ReferralTrialStore.tsx";
import closure_30 from "../../push_feedback/PushFeedbackStore.tsx";
import closure_31 from "../../replies/PendingReplyStore.tsx";
import closure_32 from "../../replies/ReferencedMessageStore.tsx";
import closure_33 from "../../summaries/SummaryStore.tsx";
import closure_34 from "../../threads/JoinedThreadsStore.tsx";
import closure_35 from "../../threads/ThreadMessageStore.tsx";
import closure_36 from "../../user_settings/LocaleStore.tsx";
import closure_37 from "../../user_settings/ThemeStore.tsx";
import closure_38 from "../../../stores/AuthenticationStore.tsx";
import closure_39 from "../../../stores/ChannelStore.tsx";
import closure_40 from "../../../stores/EditMessageStore.tsx";
import closure_41 from "../../../stores/GiftCodeStore.tsx";
import closure_42 from "../../../stores/GuildMemberStore.tsx";
import closure_43 from "../../../stores/GuildStore.tsx";
import closure_44 from "../../../stores/GuildVerificationStore.tsx";
import closure_45 from "../../../stores/InviteStore.tsx";
import closure_46 from "../../../stores/MessageStore.tsx";
import closure_47 from "../../../stores/PermissionStore.tsx";
import closure_48 from "../../../stores/PresenceStore.tsx";
import closure_49 from "../../../stores/RTCConnectionStore.tsx";
import closure_50 from "../../../stores/ReadStateStore.tsx";
import closure_51 from "../../../stores/SessionsStore.tsx";
import closure_52 from "../../../stores/UploadStore.tsx";
import closure_53 from "../../../stores/UserStore.tsx";
import closure_54 from "../../../stores/VoiceStateStore.tsx";
import closure_55 from "../../../stores/game_store/SKUStore.tsx";
import closure_56 from "../../../stores/views/ActivityLauncherStore.tsx";
import closure_57 from "../../../stores/views/SortedVoiceStateStore.tsx";
import ME from "../../../Constants.tsx";
import GuildFeatures from "../../premium/PremiumConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
let c4 = importAllResult;
({ useChannelPollInteractions: closure_27, useMessagePollInteractions: closure_28 } = useMessagePollInteractions);
({
  ActivityActionTypes: closure_58,
  ChannelTypesSets: closure_59,
  ME: closure_60,
  MessageTypes: closure_61,
  Permissions: closure_62,
} = ME);
({ PREMIUM_TIER_2_REFERRAL_TRIAL_ID: closure_63, PremiumTypes: closure_64 } = GuildFeatures);
({ jsx: closure_65, jsxs: closure_66 } = jsxProd);
const forwardRefResult = importAllResult.forwardRef((channel, ref) => {
  channel = channel.channel;
  let stateFromStores = channel;
  let shouldDisableInteractiveComponents = stateFromStores;
  const tmp2 = memo1;
  let obj = stateFromStores(memo1[57]);
  let items = [closure_46];
  const items1 = [channel.id];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_46.getMessages(stateFromStores.id), items1);
  let application_id = stateFromStores;
  let id = channel.id;
  memo1 = id;
  const guildId = channel.getGuildId();
  let callback = guildId;
  const items2 = [closure_43];
  const stateFromStores1 = stateFromStores(memo1[57]).useStateFromStores(items2, () =>
    closure_1_43.getGuild(closure_3),
  );
  let systemChannelFlags;
  if (stateFromStores1 != null) {
    systemChannelFlags = stateFromStores1.systemChannelFlags;
  }
  let result = shouldDisableInteractiveComponents(tmp2[57]);
  const items3 = [closure_38];
  const stateFromStores2 = result.useStateFromStores(items3, () => id.getId(), []);
  const InlineAttachmentMedia = shouldDisableInteractiveComponents(tmp2[62]).InlineAttachmentMedia;
  const setting = InlineAttachmentMedia.useSetting();
  const InlineEmbedMedia = shouldDisableInteractiveComponents(tmp2[62]).InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.useSetting();
  const RenderEmbeds = shouldDisableInteractiveComponents(tmp2[62]).RenderEmbeds;
  const setting2 = RenderEmbeds.useSetting();
  const RenderReactions = shouldDisableInteractiveComponents(tmp2[62]).RenderReactions;
  const setting3 = RenderReactions.useSetting();
  const DeveloperMode = shouldDisableInteractiveComponents(tmp2[62]).DeveloperMode;
  const setting4 = DeveloperMode.useSetting();
  const AnimateEmoji = shouldDisableInteractiveComponents(tmp2[62]).AnimateEmoji;
  const setting5 = AnimateEmoji.useSetting();
  const AnimateStickers = shouldDisableInteractiveComponents(tmp2[62]).AnimateStickers;
  const setting6 = AnimateStickers.useSetting();
  const GifAutoPlay = shouldDisableInteractiveComponents(tmp2[62]).GifAutoPlay;
  const setting7 = GifAutoPlay.useSetting();
  const TimestampHourCycle = shouldDisableInteractiveComponents(tmp2[62]).TimestampHourCycle;
  const setting8 = TimestampHourCycle.useSetting();
  const result1 = shouldDisableInteractiveComponents(tmp2[57]);
  const items4 = [closure_37];
  const stateFromStores3 = result1.useStateFromStores(items4, () => theme.theme, []);
  const result2 = shouldDisableInteractiveComponents(tmp2[63]);
  application_id = undefined;
  const items5 = [stateFromStores];
  const isMessageSwipeActionsEnabled = result2.useIsMessageSwipeActionsEnabled();
  const memo = stateFromStores1.useMemo(() => {
    const obj = {};
    const item = obj.forEach((author) => {
      if (tmp) {
        obj[author.author.id] = null;
      }
    });
    return obj;
  }, items5);
  application_id = memo;
  const result3 = shouldDisableInteractiveComponents(tmp2[57]);
  const items6 = [closure_48];
  const items7 = [memo];
  const linkedLobby = channel.linkedLobby;
  application_id = undefined;
  const stateFromStoresObject = result3.useStateFromStoresObject(
    items6,
    () => application_id(memo1[58]).mapValues(application_id, (arg0, arg1) => primaryActivity.getPrimaryActivity(arg1)),
    items7,
  );
  if (linkedLobby != null) {
    application_id = linkedLobby.application_id;
  }
  const items8 = [stateFromStores, application_id];
  memo1 = obj6.useMemo(() => {
    const set = new Set();
    const item = set.forEach((applicationId) => {
      if (tmp) {
        set.add(applicationId.applicationId);
      }
    });
    if (null != application_id) {
      set.add(tmp2);
    }
    return Array.from(set);
  }, items8);
  callback = obj6.useRef([]);
  const items9 = [memo1];
  const effect = obj6.useEffect(() => {
    if (!obj.areArraysShallowEqual(memo1, ref.current)) {
      const obj2 = application_id(tmp2[60]);
      const found = application_id(tmp2[58])(tmp3).filter(stateFromStores(tmp2[61]).isNotNullish);
      const arr = application_id(tmp2[58])(tmp3);
      const applications = obj2.fetchApplications(found.uniq().value(), false);
      ref.current = tmp3;
      const iter = found.uniq();
    }
  }, items9);
  let obj2 = stateFromStores(memo1[57]);
  const tmp19 = closure_48;
  const tmp25 = callback;
  [tmp27, r10127] = callback(application_id(tmp2[64])(stateFromStores, channel), 2);
  const result4 = shouldDisableInteractiveComponents(tmp2[57]);
  const items10 = [closure_45];
  const stateFromStores4 = result4.useStateFromStores(items10, () => store5.getInvites(), []);
  const result5 = shouldDisableInteractiveComponents(tmp2[65]);
  const fetchVoiceChannelInviteStartTimes = result5.useFetchVoiceChannelInviteStartTimes(stateFromStores4);
  const result6 = shouldDisableInteractiveComponents(tmp2[57]);
  const items11 = [closure_16];
  const stateFromStoresObject1 = result6.useStateFromStoresObject(
    items11,
    () => ({
      appDirectoryEmbedApplications: store2.getApplications(),
      invalidAppDirectoryEmbedApplicationIds: store2.getInvalidApplicationIds(),
      appDirectoryEmbedApplicationFetchStates: store2.getApplicationFetchStates(),
    }),
    [],
  );
  ({ appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, appDirectoryEmbedApplicationFetchStates } =
    stateFromStoresObject1);
  const result7 = shouldDisableInteractiveComponents(tmp2[57]);
  const items12 = [items68];
  const stateFromStoresArray = result7.useStateFromStoresArray(items12, () => items68.getFetchingOrFailedFetchingIds());
  const result8 = shouldDisableInteractiveComponents(tmp2[57]);
  const items13 = [channelSummariesExperiment];
  const stateFromStoresArray1 = result8.useStateFromStoresArray(items13, () =>
    channelSummariesExperiment.getFetchingIds(),
  );
  const result9 = shouldDisableInteractiveComponents(tmp2[57]);
  const items14 = [closure_55];
  const stateFromStoresArray2 = result9.useStateFromStoresArray(items14, () => fetchingSkuIds.getFetchingSkuIds());
  const result10 = shouldDisableInteractiveComponents(tmp2[57]);
  const items15 = [closure_6];
  const items16 = [id];
  const stateFromStoresArray3 = result10.useStateFromStoresArray(
    items15,
    () => {
      const embeddedActivitiesForChannel = store.getEmbeddedActivitiesForChannel(memo1);
      const mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
      return mapped.filter(stateFromStores(memo1[61]).isNotNullish);
    },
    items16,
  );
  const result11 = shouldDisableInteractiveComponents(tmp2[57]);
  const items17 = [closure_6, tmp19];
  const stateFromStoresArray4 = result11.useStateFromStoresArray(items17, () => {
    let items = [];
    const embeddedActivitiesForChannel = store.getEmbeddedActivitiesForChannel(memo1);
    function _loop(iter) {
      items = iter;
      const userIds = iter.userIds;
      const findActivityResult = closure_1_48.findActivity(
        userIds.values().next().value,
        (application_id) => application_id.application_id === iter.applicationId,
      );
      let details;
      if (findActivityResult != null) {
        details = findActivityResult.details;
      }
      if (null != details) {
        const _HermesInternal = HermesInternal;
        items.push("" + iter.launchId + ":" + findActivityResult.details);
      }
    }
    const iter = embeddedActivitiesForChannel[Symbol.iterator]();
    while (iter !== undefined) {
      let _loopResult = _loop(iter.next());
      continue;
    }
    return items;
  });
  const result12 = shouldDisableInteractiveComponents(tmp2[57]);
  const items18 = [closure_6];
  const stateFromStoresArray5 = result12.useStateFromStoresArray(items18, () => {
    const set = new Set();
    const embeddedActivitiesByChannel = store.getEmbeddedActivitiesByChannel();
    let item = embeddedActivitiesByChannel.forEach((arr) => {
      closure_0 = arg1;
      let item = arr.forEach((userIds) => {
        userIds = userIds.userIds;
        const item = userIds.forEach((arg0) => {
          closure_1_0.add("" + closure_0 + ":" + arg0);
        });
      });
    });
    return Array.from(set);
  });
  const result13 = shouldDisableInteractiveComponents(tmp2[57]);
  const items19 = [closure_6];
  const stateFromStoresArray6 = result13.useStateFromStoresArray(items19, () => {
    const launchStates = store.getLaunchStates();
    const items = [];
    while (tmp2 !== undefined) {
      let tmp4 = ref;
      let tmp5 = ref(tmp3, 2);
      [r10016, tmp6] = tmp5;
      let tmp7 = tmp6;
      let isLaunching = tmp6.isLaunching;
      if (isLaunching) {
        let tmp8 = tmp6;
        isLaunching = null != tmp7.componentId;
      }
      if (isLaunching) {
        let tmp9 = tmp6;
        isLaunching = tmp7.componentId.length > 0;
      }
      if (isLaunching) {
        let tmp10 = tmp6;
        let arr = items.push(tmp7.componentId);
      }
      continue;
    }
    return items;
  });
  const result14 = shouldDisableInteractiveComponents(tmp2[57]);
  const items20 = [closure_23];
  const stateFromStores5 = result14.useStateFromStores(items20, () => mediaPostEmbeds.getMediaPostEmbeds());
  const result15 = shouldDisableInteractiveComponents(tmp2[57]);
  const items21 = [closure_20];
  const stateFromStores6 = result15.useStateFromStores(items21, () => guildTemplates.getGuildTemplates(), []);
  const result16 = shouldDisableInteractiveComponents(tmp2[57]);
  const items22 = [shouldDisableInteractiveComponents];
  const stateFromStores7 = result16.useStateFromStores(
    items22,
    () => shouldDisableInteractiveComponents.getBuildOverrides(),
    [],
  );
  const result17 = shouldDisableInteractiveComponents(tmp2[66]);
  const codedLinksExperimentEmbeds = result17.useCodedLinksExperimentEmbeds();
  const result18 = shouldDisableInteractiveComponents(tmp2[67]);
  quests = result18.useQuests({ fetchPolicy: "cache-or-network", callerSource: "messages_native" });
  ({ quests, isFetchingCurrentQuests } = quests);
  let found = stateFromStores.filter((type) => type.type === constants.PREMIUM_REFERRAL);
  let mapped = found.map((referralTrialOfferId) => referralTrialOfferId.referralTrialOfferId);
  closure_6 = mapped.filter(shouldDisableInteractiveComponents(tmp2[61]).isNotNullish);
  const result19 = shouldDisableInteractiveComponents(tmp2[57]);
  const items23 = [closure_29];
  const stateFromStoresArray7 = result19.useStateFromStoresArray(items23, () => {
    const mapped = store.map((referralTrialOfferId) => {
      relevantUserTrialOffer = relevantUserTrialOffer.getRelevantUserTrialOffer(referralTrialOfferId);
      let id;
      if (relevantUserTrialOffer != null) {
        id = relevantUserTrialOffer.id;
      }
      return id;
    });
    return mapped.filter(stateFromStores(memo1[61]).isNotNullish);
  });
  const result20 = shouldDisableInteractiveComponents(tmp2[68]);
  const trialOffer = result20.useTrialOffer(closure_63);
  const result21 = shouldDisableInteractiveComponents(tmp2[57]);
  const items24 = [closure_53];
  const stateFromStores8 = result21.useStateFromStores(items24, () =>
    application_id(memo1[69]).isPremiumExactly(authStore2.getCurrentUser(), TIER_2.TIER_2),
  );
  const result22 = shouldDisableInteractiveComponents(tmp2[57]);
  const items25 = [closure_40];
  const items26 = [id];
  const stateFromStores9 = result22.useStateFromStores(items25, () => closure_1_40.getEditingMessageId(memo1), items26);
  const result23 = shouldDisableInteractiveComponents(tmp2[57]);
  const items27 = [closure_31];
  const items28 = [id];
  const stateFromStores10 = result23.useStateFromStores(
    items27,
    () => {
      const pendingReply = closure_1_31.getPendingReply(memo1);
      let id;
      if (pendingReply != null) {
        id = pendingReply.message.id;
      }
      return id;
    },
    items28,
  );
  const result24 = shouldDisableInteractiveComponents(tmp2[57]);
  const items29 = [closure_50];
  const items30 = [id];
  const stateFromStores11 = result24.useStateFromStores(
    items29,
    () => closure_1_50.getOldestUnreadMessageId(memo1),
    items30,
  );
  const result25 = shouldDisableInteractiveComponents(tmp2[57]);
  const items31 = [closure_44];
  const items32 = [guildId];
  const stateFromStores12 = result25.useStateFromStores(
    items31,
    () => {
      let canChatInGuildResult = null != closure_3;
      if (canChatInGuildResult) {
        canChatInGuildResult = closure_1_44.canChatInGuild(tmp);
      }
      return canChatInGuildResult;
    },
    items32,
  );
  const result26 = shouldDisableInteractiveComponents(tmp2[57]);
  const items33 = [closure_47];
  const items34 = [channel];
  const stateFromStores13 = result26.useStateFromStores(
    items33,
    () => closure_1_47.can(closure_1_62.SEND_MESSAGES, stateFromStores),
    items34,
  );
  const tmp26 = callback(application_id(tmp2[64])(stateFromStores, channel), 2);
  const tmp28 = closure_45;
  const tmp52 = closure_47;
  const result27 = shouldDisableInteractiveComponents(tmp2[57]);
  const items35 = [closure_54];
  const items36 = [stateFromStores2];
  const stateFromStores14 = result27.useStateFromStores(
    items35,
    () => closure_1_54.getUserVoiceChannelId(closure_1_60, stateFromStores2),
    items36,
  );
  const result28 = shouldDisableInteractiveComponents(tmp2[57]);
  const items37 = [closure_49];
  const stateFromStores15 = result28.useStateFromStores(items37, () => channelId.getChannelId(), []);
  const result29 = shouldDisableInteractiveComponents(tmp2[57]);
  const items38 = [closure_32];
  const items39 = [channel];
  const stateFromStores16 = result29.useStateFromStores(
    items38,
    () => {
      const THREADS = closure_1_59.THREADS;
      let message = null;
      if (THREADS.has(stateFromStores.type)) {
        message = null;
        if (null != tmp.parent_id) {
          const obj = { channel_id: null, message_id: null, guild_id: null };
          ({ parent_id: obj[0], id: obj[1], guild_id: obj[2] } = tmp);
          message = closure_1_32.getMessageByReference(obj).message;
        }
      }
      return message;
    },
    items39,
  );
  const result30 = shouldDisableInteractiveComponents(tmp2[57]);
  const items40 = [closure_41];
  const stateFromStoresObject2 = result30.useStateFromStoresObject(
    items40,
    () => ({
      resolvingGiftCodes: store4.getResolvingCodes(),
      resolvedGiftCodes: store4.getResolvedCodes(),
      acceptingGiftCodes: store4.getAcceptingCodes(),
    }),
    [],
  );
  ({ resolvingGiftCodes, resolvedGiftCodes, acceptingGiftCodes } = stateFromStoresObject2);
  const result31 = shouldDisableInteractiveComponents(tmp2[57]);
  const items41 = [closure_11];
  const items42 = [id];
  const stateFromStores17 = result31.useStateFromStores(
    items41,
    () => closure_1_11.getParticipants(memo1).length,
    items42,
  );
  const result32 = shouldDisableInteractiveComponents(tmp2[57]);
  const items43 = [closure_52];
  const items44 = [id];
  const stateFromStores18 = result32.useStateFromStores(items43, () => closure_1_52.getFiles(memo1), items44);
  const result33 = shouldDisableInteractiveComponents(tmp2[57]);
  const items45 = [closure_32];
  const items46 = [id];
  const stateFromStores19 = result33.useStateFromStores(
    items45,
    () => closure_1_32.getReplyIdsForChannel(memo1),
    items46,
  );
  const result34 = shouldDisableInteractiveComponents(tmp2[57]);
  const items47 = [stateFromStores2];
  const stateFromStoresObject3 = result34.useStateFromStoresObject(
    items47,
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
  const result35 = shouldDisableInteractiveComponents(tmp2[57]);
  const items48 = [closure_35];
  const items49 = [id];
  const stateFromStores20 = result35.useStateFromStores(
    items48,
    () => closure_1_35.getChannelThreadsVersion(memo1),
    items49,
  );
  const result36 = shouldDisableInteractiveComponents(tmp2[57]);
  const items50 = [closure_22];
  const stateFromStoresObject4 = result36.useStateFromStoresObject(items50, () =>
    messageInteractionStates.getMessageInteractionStates(),
  );
  const result37 = shouldDisableInteractiveComponents(tmp2[57]);
  const items51 = [closure_21];
  const tmp54 = application_id(tmp2[70])(id);
  const tmp55 = closure_54;
  [tmp67, tmp68] = callback(
    result37.useStateFromStores(
      items51,
      () => {
        const items = [store3.getInteractionComponentStates(), store3.getInteractionComponentStateVersion()];
        return items;
      },
      [],
      shouldDisableInteractiveComponents(tmp2[71]).isVersionEqual,
    ),
    2,
  );
  const result38 = shouldDisableInteractiveComponents(tmp2[57]);
  const items52 = [closure_14];
  let stateFromStores21 = result38.useStateFromStores(items52, () => hasLoadedExperiments.hasLoadedExperiments);
  const result39 = shouldDisableInteractiveComponents(tmp2[72]);
  const isSpamMessageRequest = result39.useIsSpamMessageRequest(channel.id);
  const result40 = shouldDisableInteractiveComponents(tmp2[73]);
  let tmp72 = null != stateFromStores;
  const isMessageRequest = result40.useIsMessageRequest(channel.id);
  if (tmp72) {
    tmp72 = stateFromStores.ready || stateFromStores.cached;
    const tmp73 = stateFromStores.ready || stateFromStores.cached;
  }
  const result41 = shouldDisableInteractiveComponents(tmp2[57]);
  const items53 = [closure_19];
  const stateFromStores22 = result41.useStateFromStores(items53, () => rsvpVersion.getRsvpVersion());
  const result42 = shouldDisableInteractiveComponents(tmp2[57]);
  const items54 = [closure_18];
  const stateFromStores23 = result42.useStateFromStores(items54, () => messagesVersion.getMessagesVersion());
  const result43 = shouldDisableInteractiveComponents(tmp2[57]);
  const items55 = [closure_42];
  const stateFromStores24 = result43.useStateFromStores(items55, () =>
    communicationDisabledVersion.getCommunicationDisabledVersion(),
  );
  const result44 = shouldDisableInteractiveComponents(tmp2[57]);
  const items56 = [closure_42];
  const items57 = [guildId, stateFromStores];
  const stateFromStoresObject5 = result44.useStateFromStoresObject(
    items56,
    () => {
      if (null != closure_3) {
        if (null != application_id) {
          let obj = {};
          const item = arr.forEach((author) => {
            obj = stateFromStores(memo1[74]);
            const messageAuthorMemberUserIds = obj.getMessageAuthorMemberUserIds(author);
            const iter = messageAuthorMemberUserIds[Symbol.iterator]();
            const nextResult = iter.next();
            while (iter !== undefined) {
              let tmp4 = closure_2_42;
              let tmp5 = closure_1_3;
              let tmp3 = nextResult;
              let member = closure_2_42.getMember(closure_1_3, nextResult);
              if (null != member) {
                let tmp8 = obj;
                let tmp9 = nextResult;
                let tmp10 = member;
                obj[tmp3] = tmp7;
              }
              continue;
            }
          });
          return obj;
        }
        arr = application_id;
      }
      return {};
    },
    items57,
  );
  const result45 = shouldDisableInteractiveComponents(tmp2[57]);
  const items58 = [tmp52];
  const stateFromStores25 = result45.useStateFromStores(items58, () =>
    closure_1_47.can(closure_1_62.MODERATE_MEMBERS, stateFromStores1),
  );
  const result46 = shouldDisableInteractiveComponents(tmp2[75]);
  id = undefined;
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  const result47 = shouldDisableInteractiveComponents(tmp2[57]);
  const items59 = [closure_36];
  const stateFromStores26 = result47.useStateFromStores(items59, () => locale.locale);
  const result48 = shouldDisableInteractiveComponents(tmp2[76]);
  const isPaymentsBlocked = result48.useIsPaymentsBlocked();
  const result49 = shouldDisableInteractiveComponents(tmp2[57]);
  const items60 = [closure_34];
  const stateFromStores27 = result49.useStateFromStores(items60, () => {
    let hasJoinedResult = stateFromStores.isForumPost();
    if (hasJoinedResult) {
      hasJoinedResult = closure_1_34.hasJoined(memo1);
    }
    return hasJoinedResult;
  });
  const result50 = shouldDisableInteractiveComponents(tmp2[57]);
  const items61 = [closure_24];
  const stateFromStores28 = result50.useStateFromStores(items61, () => closure_1_24.shouldDisplayPrompt(memo1));
  const result51 = shouldDisableInteractiveComponents(tmp2[57]);
  const items62 = [closure_30];
  const stateFromStores29 = result51.useStateFromStores(items62, () => eligible.isEligible());
  const result52 = shouldDisableInteractiveComponents(tmp2[57]);
  const items63 = [closure_10];
  const stateFromStores30 = result52.useStateFromStores(items63, () => lazyCacheStatus.getLazyCacheStatus());
  const result53 = shouldDisableInteractiveComponents(tmp2[77]);
  const messageJumpAndroidKeyboardHeight = result53.useMessageJumpAndroidKeyboardHeight();
  const tmp66 = callback(
    result37.useStateFromStores(
      items51,
      () => {
        const items = [store3.getInteractionComponentStates(), store3.getInteractionComponentStateVersion()];
        return items;
      },
      [],
      shouldDisableInteractiveComponents(tmp2[71]).isVersionEqual,
    ),
    2,
  );
  const tmp74 = null != stateFromStores && stateFromStores.cached;
  const tmp75 = null != stateFromStores && stateFromStores.ready && !stateFromStores.loadingMore;
  const result54 = shouldDisableInteractiveComponents(tmp2[79]);
  channelSummariesExperiment = result54.useChannelSummariesExperiment(channel);
  const result55 = shouldDisableInteractiveComponents(tmp2[57]);
  const items64 = [closure_33];
  const items65 = [channelSummariesExperiment, channel.id];
  const items66 = [channel.id, , , ,];
  ({ hasMoreAfter: arr70[1], hasMoreBefore: arr70[2], length: arr70[3], ready: arr70[4] } = stateFromStores);
  const stateFromStores31 = result55.useStateFromStores(
    items64,
    () => {
      let selectedSummaryResult = null;
      if (channelSummariesExperiment) {
        selectedSummaryResult = closure_1_33.selectedSummary(stateFromStores.id);
      }
      return selectedSummaryResult;
    },
    items65,
  );
  const effect1 = obj6.useEffect(() => {
    const ready = application_id.ready;
    let hasMoreAfter = !ready;
    if (ready) {
      hasMoreAfter = 0 !== arr.length;
    }
    if (!hasMoreAfter) {
      hasMoreAfter = arr.hasMoreBefore;
    }
    if (!hasMoreAfter) {
      hasMoreAfter = arr.hasMoreAfter;
    }
    if (!hasMoreAfter) {
      const obj = application_id(memo1[80]);
      const _Date = Date;
      const result = obj.updateChannelDimensions(stateFromStores.id, Date.now(), 1, 1, 0);
    }
  }, items66);
  const result56 = shouldDisableInteractiveComponents(tmp2[81]);
  const shouldTrackAnnouncementMessageViews = result56.useShouldTrackAnnouncementMessageViews({
    guild: stateFromStores1,
    channel,
    messages: stateFromStores,
    isMessagesReady: tmp72,
  });
  const result57 = shouldDisableInteractiveComponents(tmp2[81]);
  const shouldTrackRichPresenceInviteEmbedViews = result57.useShouldTrackRichPresenceInviteEmbedViews({
    messages: stateFromStores,
    isMessagesReady: tmp72,
  });
  const result58 = shouldDisableInteractiveComponents(tmp2[81]);
  const shouldTrackOfficialMessageViews = result58.useShouldTrackOfficialMessageViews({
    guild: stateFromStores1,
    messages: stateFromStores,
    isMessagesReady: tmp72,
  });
  const result59 = shouldDisableInteractiveComponents(tmp2[81]);
  const shouldTrackVoiceInviteEmbedViews = result59.useShouldTrackVoiceInviteEmbedViews({
    messages: stateFromStores,
    isMessagesReady: tmp72,
  });
  const result60 = shouldDisableInteractiveComponents(tmp2[82]);
  const shouldDisplaySpoilerObscurity = result60.useShouldDisplaySpoilerObscurity(channel);
  const result61 = shouldDisableInteractiveComponents(tmp2[83]);
  const items67 = [id, guildId];
  const isAgeVerified = result61.useIsAgeVerified();
  const effect2 = obj6.useEffect(() => {
    application_id(memo1[84]).handleChannelSelect();
    return () => {
      callback(table[84]).handleChannelSelect();
    };
  }, items67);
  const result62 = shouldDisableInteractiveComponents(tmp2[85]);
  shouldDisableInteractiveComponents = result62.useShouldDisableInteractiveComponents(channel.id);
  items68 = [];
  shouldDisableInteractiveComponents = callback2(channel.id);
  shouldDisableInteractiveComponents = stateFromStores.forEach((messageReference) => {
    messageReference = messageReference.messageReference;
    let message_id;
    if (messageReference != null) {
      message_id = messageReference.message_id;
    }
    if (null != message_id) {
      items68.push(message_id);
    }
  });
  shouldDisableInteractiveComponents = callback3(items68);
  const result63 = shouldDisableInteractiveComponents(tmp2[57]);
  const items69 = [closure_15];
  const items70 = [id];
  shouldDisableInteractiveComponents = result63.useStateFromStores(
    items69,
    () => closure_1_15.getChannelFpInfo(memo1),
    items70,
  );
  const result64 = shouldDisableInteractiveComponents(tmp2[57]);
  const items71 = [closure_26];
  shouldDisableInteractiveComponents = result64.useStateFromStores(items71, () =>
    pendingConnection.getPendingConnection(),
  );
  shouldDisableInteractiveComponents = tmp24(tmp2[86])();
  shouldDisableInteractiveComponents = tmp24(tmp2[87])(stateFromStores);
  ({ unloadedContentEntryMessageIds, unloadableContentEntryMessageIds } = shouldDisableInteractiveComponents);
  const result65 = shouldDisableInteractiveComponents(tmp2[57]);
  const items72 = [closure_53];
  shouldDisableInteractiveComponents = result65.useStateFromStores(items72, () => {
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
  const result66 = shouldDisableInteractiveComponents(tmp2[57]);
  const items73 = [closure_17];
  shouldDisableInteractiveComponents = result66.useStateFromStores(items73, () => version.getVersion());
  const result67 = shouldDisableInteractiveComponents(tmp2[88]);
  shouldDisableInteractiveComponents = result67.useColorStore((palette) => Object.keys(palette.palette).length);
  const result68 = shouldDisableInteractiveComponents(tmp2[57]);
  const items74 = [closure_13];
  shouldDisableInteractiveComponents = result68.useStateFromStores(items74, () =>
    closure_1_13.getGuildEmoji(closure_3),
  );
  const result69 = shouldDisableInteractiveComponents(tmp2[57]);
  const items75 = [tmp55];
  const items76 = [guildId];
  shouldDisableInteractiveComponents = result69.useStateFromStores(
    items75,
    () => {
      if (null == closure_3) {
        return null;
      } else {
        const voiceStates = closure_1_54.getVoiceStates(tmp);
        return stateFromStores(memo1[74]).getVoiceStateChannelSummaryFromVoiceStates(voiceStates);
      }
    },
    items76,
  );
  const result70 = shouldDisableInteractiveComponents(tmp2[57]);
  const items77 = [closure_57, closure_12, tmp28, closure_39];
  shouldDisableInteractiveComponents = result70.useStateFromStoresObject(items77, () => {
    const obj = {};
    const invites = store5.getInvites();
    const values = invites.values();
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let channel = nextResult.channel;
      let id;
      if (channel != null) {
        id = channel.id;
      }
      if (null != id) {
        let tmp12 = stateFromStores;
        let tmp13 = memo1;
        let obj4 = stateFromStores(memo1[89]);
        let tmp14 = nextResult;
        if (obj4.isVoiceChannelInvite(tmp3)) {
          let tmp5 = nextResult;
          id = tmp3.channel.id;
          let guild = tmp3.guild;
          let id1;
          if (guild != null) {
            id1 = guild.id;
          }
          let tmp7 = voiceStatesForChannelAlt;
          let tmp8 = id;
          voiceStatesForChannelAlt = voiceStatesForChannelAlt.getVoiceStatesForChannelAlt(id, id1);
          let mapped = voiceStatesForChannelAlt.map((voiceState) => {
            let str = "";
            if (voiceState.voiceState.selfStream) {
              str = "*";
            }
            return "" + str + voiceState.user.id;
          });
          let tmp10 = startTime;
          let tmp11 = channel;
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
  const result71 = shouldDisableInteractiveComponents(tmp2[57]);
  const items78 = [closure_51];
  shouldDisableInteractiveComponents = result71.useStateFromStoresArray(items78, () => {
    const items = [...closure_51.getRemoteActivities(), ...closure_51.getHiddenActivities()];
    return items.filter(stateFromStores(memo1[61]).isNotNullish);
  });
  const result72 = shouldDisableInteractiveComponents(tmp2[57]);
  const items79 = [closure_56];
  shouldDisableInteractiveComponents = result72.useStateFromStoresObject(items79, () =>
    shouldDisableInteractiveComponents.reduce((arg0, application_id) => {
      if (null == application_id.application_id) {
        return arg0;
      } else {
        state = state.getState(application_id.application_id, constants.JOIN);
        if (null != state) {
          arg0[application_id.application_id] = state;
        }
        return arg0;
      }
    }, {}),
  );
  const result73 = shouldDisableInteractiveComponents(tmp2[57]);
  const items80 = [closure_25];
  shouldDisableInteractiveComponents = result73.useStateFromStoresArray(items80, () => {
    const items = [authStore.getNewestTokens(), authStore.getApplicationFetchStateVersion()];
    return items;
  }, []);
  const result74 = shouldDisableInteractiveComponents(tmp2[57]);
  const items81 = [closure_53];
  shouldDisableInteractiveComponents = result74.useStateFromStores(items81, () => {
    const currentUser = authStore2.getCurrentUser();
    let displayNameStyles;
    if (currentUser != null) {
      displayNameStyles = currentUser.displayNameStyles;
    }
    return displayNameStyles;
  });
  const result75 = shouldDisableInteractiveComponents(tmp2[90]);
  shouldDisableInteractiveComponents = result75.useFetchSocialLayerStorefrontProductDetailsEmbedData(stateFromStores);
  shouldDisableInteractiveComponents = closure_66;
  obj = { profile: null, children: null };
  shouldDisableInteractiveComponents = tmp24(tmp2[91]);
  obj[0] = shouldDisableInteractiveComponents(tmp2[91]).Profiles.Messages;
  shouldDisableInteractiveComponents = channel.isThread();
  if (shouldDisableInteractiveComponents) {
    shouldDisableInteractiveComponents = callback4;
    shouldDisableInteractiveComponents = callback4(tmp24(tmp2[92]), { absolute: true });
  }
  const items82 = [shouldDisableInteractiveComponents];
  shouldDisableInteractiveComponents = callback4;
  obj = {
    ref,
    theme: stateFromStores3,
    saturation,
    isStaff: shouldDisableInteractiveComponents,
    animateEmoji: setting5,
    animateStickers: setting6,
    containerWidth: shouldDisableInteractiveComponents,
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
    isMessagesReady: tmp72,
    isMessagesCached: tmp74,
    isMessagesAckable: tmp75,
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
    buildOverrides: stateFromStores7,
    fetchingSkuIds: stateFromStoresArray2,
    experimentEmbeds: codedLinksExperimentEmbeds,
    quests,
    isFetchingCurrentQuests,
    editingMessageId: stateFromStores9,
    replyingMessageId: stateFromStores10,
    oldestUnreadMessageId: stateFromStores11,
    canChat: stateFromStores12,
    canSendMessages: stateFromStores13,
    isCallActive: tmp54,
    voiceStatePrivateChannelId: stateFromStores14,
    currentClientVoiceChannelId: stateFromStores15,
    voiceStateChannelIdSummaryForGuild: shouldDisableInteractiveComponents,
    resolvingGiftCodes,
    resolvedGiftCodes,
    acceptingGiftCodes,
    participantsLength: stateFromStores17,
    uploads: stateFromStores18,
    repliedIds: stateFromStores19,
    useReducedMotion,
    displayNameStylesEnabled,
    channelThreadsVersion: stateFromStores20,
    rsvpVersion: stateFromStores22,
    failedMessagesVersion: stateFromStores23,
    communicationDisabledVersion: stateFromStores24,
    messageAuthorMembers: stateFromStoresObject5,
    forwardGuildsVersion: shouldDisableInteractiveComponents,
    interactionStates: stateFromStoresObject4,
    interactionComponentStates: tmp67,
    interactionComponentStatesVersion: tmp68,
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
  shouldDisableInteractiveComponents = tmp24(tmp2[93]);
  if (stateFromStores21) {
    stateFromStores21 = tmp72;
  }
  obj[69] = stateFromStores21;
  obj[70] = systemChannelFlags;
  obj[71] = tmp25(result46.useCurrentUserCommunicationDisabled(id), 2)[1];
  obj[72] = stateFromStores25;
  obj[73] = stateFromStores26;
  obj[74] = isPaymentsBlocked;
  obj[75] = stateFromStores27;
  obj[76] = stateFromStores28;
  obj[77] = stateFromStores29;
  obj[78] = "initializing" !== stateFromStores30;
  obj[79] = messageJumpAndroidKeyboardHeight;
  obj[80] = stateFromStores31;
  obj[81] = application_id(tmp2[78])();
  obj[82] = shouldTrackAnnouncementMessageViews;
  obj[83] = shouldTrackRichPresenceInviteEmbedViews;
  obj[84] = shouldTrackOfficialMessageViews;
  obj[85] = shouldTrackVoiceInviteEmbedViews;
  obj[86] = shouldDisplaySpoilerObscurity;
  obj[87] = shouldDisableInteractiveComponents;
  obj[88] = shouldDisableInteractiveComponents;
  obj[89] = shouldDisableInteractiveComponents;
  obj[90] = shouldDisableInteractiveComponents;
  obj[91] = shouldDisableInteractiveComponents;
  obj[92] = stateFromStores16;
  obj[93] = unloadedContentEntryMessageIds;
  obj[94] = unloadableContentEntryMessageIds;
  obj[95] = stateFromStoresArray7;
  shouldDisableInteractiveComponents = undefined;
  if (trialOffer != null) {
    shouldDisableInteractiveComponents = trialOffer.id;
  }
  obj[96] = shouldDisableInteractiveComponents;
  obj[97] = stateFromStores8;
  obj[98] = tmp27;
  obj[99] = shouldDisableInteractiveComponents;
  obj[100] = isAgeVerified;
  obj[101] = shouldDisableInteractiveComponents;
  obj[102] = isMessageSwipeActionsEnabled;
  obj[103] = shouldDisableInteractiveComponents;
  obj[104] = shouldDisableInteractiveComponents;
  obj[105] = shouldDisableInteractiveComponents;
  obj[106] = shouldDisableInteractiveComponents;
  obj[107] = shouldDisableInteractiveComponents;
  shouldDisableInteractiveComponents = undefined;
  if (stateFromStores1 != null) {
    shouldDisableInteractiveComponents = stateFromStores1.officialMessageColor;
  }
  obj[108] = shouldDisableInteractiveComponents;
  shouldDisableInteractiveComponents = Object.assign(channel);
  items82[1] = shouldDisableInteractiveComponents(shouldDisableInteractiveComponents, obj);
  obj[1] = items82;
  return shouldDisableInteractiveComponents(shouldDisableInteractiveComponents, obj);
});
forwardRefResult.displayName = "MessagesConnected";
let result = require("set").fileFinishedImporting("modules/messages/native/Messages.tsx");

export default forwardRefResult;
