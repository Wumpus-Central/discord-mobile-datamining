// === Module 10476: MessagesConnected ===

// Module 10476 (MessagesConnected)
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import closure_5 from "maybeApplyNoTextColorForLightCustomTheme" /* 4372 */;
import closure_6 from "participantFromServer" /* 1390 */;
import closure_7 from "handleFetchEmbeddedActivityShelfSuccess" /* 8397 */;
import closure_8 from "addApplication" /* 4421 */;
import closure_9 from "getCurrentBuildOverride" /* 10477 */;
import closure_10 from "handleClearCaches" /* 7082 */;
import closure_11 from "getParticipants" /* 4396 */;
import closure_12 from "_toTimestampMs" /* 10478 */;
import closure_13 from "getEmojiToGroupId" /* 5282 */;
import closure_14 from "getHash" /* 4293 */;
import closure_15 from "getFpMessageInfo" /* 6017 */;
import closure_16 from "set" /* 5836 */;
import closure_17 from "getGuild" /* 8216 */;
import closure_18 from "handleMessageSendFailedAutomod" /* 8198 */;
import closure_19 from "scheduledEventSort" /* 7132 */;
import closure_20 from "handleGuildTemplateResolveSuccess" /* 7065 */;
import closure_21 from "getInteractionComponentStates" /* 8372 */;
import closure_22 from "deleteNonce" /* 8200 */;
import closure_23 from "getMediaPostEmbed" /* 10479 */;
import closure_24 from "set" /* 8201 */;
import closure_25 from "recomputeFromAppTokens" /* 5356 */;
import closure_26 from "initialize" /* 4622 */;
import useMessagePollInteractions from "useMessagePollInteractions" /* 8476 */;
import closure_29 from "emitChanges" /* 7059 */;
import closure_30 from "initialize" /* 10480 */;
import closure_31 from "getState" /* 7285 */;
import closure_32 from "processMessage" /* 7201 */;
import closure_33 from "handleQuickSwitcherUpdate" /* 10387 */;
import closure_34 from "storeThread" /* 4027 */;
import closure_35 from "updateState" /* 6029 */;
import closure_36 from "_getSystemLocale" /* 1996 */;
import closure_37 from "handleThemeChange" /* 1302 */;
import closure_38 from "fetchFingerprint" /* 1218 */;
import closure_39 from "ensureGuildLoaded" /* 1391 */;
import closure_40 from "initialize" /* 7286 */;
import closure_41 from "updateGiftCode" /* 10481 */;
import closure_42 from "trackCommunicationDisabled" /* 1992 */;
import closure_43 from "createGuildRecordFromRust" /* 1910 */;
import closure_44 from "recomputeGuild" /* 5238 */;
import closure_45 from "updateInvite" /* 4364 */;
import closure_46 from "reinjectEphemerals" /* 4623 */;
import closure_47 from "getUncachedChannelPermissions" /* 4025 */;
import closure_48 from "sortActivity" /* 4469 */;
import closure_49 from "createRTCConnection" /* 4454 */;
import closure_50 from "generateOldThreadCutoff" /* 4395 */;
import closure_51 from "handleUpdate" /* 4398 */;
import closure_52 from "initialize" /* 7441 */;
import closure_53 from "mergeGuildAvatar" /* 1922 */;
import closure_54 from "updateVoiceState" /* 4399 */;
import closure_55 from "addSku" /* 4429 */;
import closure_56 from "handleActivityStateChanged" /* 10504 */;
import closure_57 from "getVoiceStatesForGuild" /* 4455 */;
import ME from "ME" /* 676 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
let c4 = importAllResult;
({ useChannelPollInteractions: closure_27, useMessagePollInteractions: closure_28 } = useMessagePollInteractions);
({ ActivityActionTypes: closure_58, ChannelTypesSets: closure_59, ME: closure_60, MessageTypes: closure_61, Permissions: closure_62 } = ME);
({ PREMIUM_TIER_2_REFERRAL_TRIAL_ID: closure_63, PremiumTypes: closure_64 } = GuildFeatures);
({ jsx: closure_65, jsxs: closure_66 } = jsxProd);
const forwardRefResult = importAllResult.forwardRef((channel, ref) => {
  channel = channel.channel;
  let stateFromStores = channel;
  let effect2 = stateFromStores;
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
  const stateFromStores1 = stateFromStores(memo1[57]).useStateFromStores(items2, () => closure_1_43.getGuild(closure_3));
  let systemChannelFlags;
  if (stateFromStores1 != null) {
    systemChannelFlags = stateFromStores1.systemChannelFlags;
  }
  let obj2 = stateFromStores(memo1[57]);
  const items3 = [closure_38];
  const stateFromStores2 = effect2(tmp2[57]).useStateFromStores(items3, () => id.getId(), []);
  const InlineAttachmentMedia = effect2(tmp2[62]).InlineAttachmentMedia;
  const setting = InlineAttachmentMedia.useSetting();
  const InlineEmbedMedia = effect2(tmp2[62]).InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.useSetting();
  const RenderEmbeds = effect2(tmp2[62]).RenderEmbeds;
  const setting2 = RenderEmbeds.useSetting();
  const RenderReactions = effect2(tmp2[62]).RenderReactions;
  const setting3 = RenderReactions.useSetting();
  const DeveloperMode = effect2(tmp2[62]).DeveloperMode;
  const setting4 = DeveloperMode.useSetting();
  const AnimateEmoji = effect2(tmp2[62]).AnimateEmoji;
  const setting5 = AnimateEmoji.useSetting();
  const AnimateStickers = effect2(tmp2[62]).AnimateStickers;
  const setting6 = AnimateStickers.useSetting();
  const GifAutoPlay = effect2(tmp2[62]).GifAutoPlay;
  const setting7 = GifAutoPlay.useSetting();
  const TimestampHourCycle = effect2(tmp2[62]).TimestampHourCycle;
  const setting8 = TimestampHourCycle.useSetting();
  const effect2Result = effect2(tmp2[57]);
  const items4 = [closure_37];
  const stateFromStores3 = effect2(tmp2[57]).useStateFromStores(items4, () => theme.theme, []);
  const effect2Result1 = effect2(tmp2[57]);
  const tmp18 = application_id(tmp2[63])("Messages");
  application_id = undefined;
  const items5 = [stateFromStores];
  const isMessageSwipeActionsEnabled = effect2(tmp2[64]).useIsMessageSwipeActionsEnabled();
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
  const effect2Result2 = effect2(tmp2[64]);
  const items6 = [closure_48];
  const items7 = [memo];
  const linkedLobby = channel.linkedLobby;
  application_id = undefined;
  const stateFromStoresObject = effect2(tmp2[57]).useStateFromStoresObject(items6, () => application_id(memo1[58]).mapValues(application_id, (arg0, arg1) => primaryActivity.getPrimaryActivity(arg1)), items7);
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
  const effect2Result3 = effect2(tmp2[57]);
  const tmp21 = closure_48;
  const tmp26 = callback;
  [tmp28, r10131] = callback(application_id(tmp2[65])(stateFromStores, channel), 2);
  const tmp27 = callback(application_id(tmp2[65])(stateFromStores, channel), 2);
  const items10 = [closure_45];
  const stateFromStores4 = effect2(tmp2[57]).useStateFromStores(items10, () => store5.getInvites(), []);
  const effect2Result4 = effect2(tmp2[57]);
  const tmp29 = closure_45;
  const fetchVoiceChannelInviteStartTimes = effect2(tmp2[66]).useFetchVoiceChannelInviteStartTimes(stateFromStores4);
  const effect2Result5 = effect2(tmp2[66]);
  const items11 = [closure_16];
  const stateFromStoresObject1 = effect2(tmp2[57]).useStateFromStoresObject(items11, () => ({ appDirectoryEmbedApplications: store2.getApplications(), invalidAppDirectoryEmbedApplicationIds: store2.getInvalidApplicationIds(), appDirectoryEmbedApplicationFetchStates: store2.getApplicationFetchStates() }), []);
  ({ appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, appDirectoryEmbedApplicationFetchStates } = stateFromStoresObject1);
  const effect2Result6 = effect2(tmp2[57]);
  const items12 = [items68];
  const stateFromStoresArray = effect2(tmp2[57]).useStateFromStoresArray(items12, () => items68.getFetchingOrFailedFetchingIds());
  const effect2Result7 = effect2(tmp2[57]);
  const items13 = [channelSummariesExperiment];
  const stateFromStoresArray1 = effect2(tmp2[57]).useStateFromStoresArray(items13, () => channelSummariesExperiment.getFetchingIds());
  const effect2Result8 = effect2(tmp2[57]);
  const items14 = [closure_55];
  const stateFromStoresArray2 = effect2(tmp2[57]).useStateFromStoresArray(items14, () => fetchingSkuIds.getFetchingSkuIds());
  const effect2Result9 = effect2(tmp2[57]);
  const items15 = [closure_6];
  const items16 = [id];
  const stateFromStoresArray3 = effect2(tmp2[57]).useStateFromStoresArray(items15, () => {
    const embeddedActivitiesForChannel = store.getEmbeddedActivitiesForChannel(memo1);
    const mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
    return mapped.filter(stateFromStores(memo1[61]).isNotNullish);
  }, items16);
  const effect2Result10 = effect2(tmp2[57]);
  const items17 = [closure_6, tmp21];
  const stateFromStoresArray4 = effect2(tmp2[57]).useStateFromStoresArray(items17, () => {
    let items = [];
    const embeddedActivitiesForChannel = store.getEmbeddedActivitiesForChannel(memo1);
    function _loop(iter) {
      items = iter;
      const userIds = iter.userIds;
      const findActivityResult = closure_1_48.findActivity(userIds.values().next().value, (application_id) => application_id.application_id === iter.applicationId);
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
  const effect2Result11 = effect2(tmp2[57]);
  const items18 = [closure_6];
  const stateFromStoresArray5 = effect2(tmp2[57]).useStateFromStoresArray(items18, () => {
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
  const effect2Result12 = effect2(tmp2[57]);
  const items19 = [closure_6];
  const stateFromStoresArray6 = effect2(tmp2[57]).useStateFromStoresArray(items19, () => {
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
  const effect2Result13 = effect2(tmp2[57]);
  const items20 = [closure_23];
  const stateFromStores5 = effect2(tmp2[57]).useStateFromStores(items20, () => mediaPostEmbeds.getMediaPostEmbeds());
  const effect2Result14 = effect2(tmp2[57]);
  const items21 = [closure_20];
  const stateFromStores6 = effect2(tmp2[57]).useStateFromStores(items21, () => guildTemplates.getGuildTemplates(), []);
  const effect2Result15 = effect2(tmp2[57]);
  const items22 = [effect2];
  const stateFromStores7 = effect2(tmp2[57]).useStateFromStores(items22, () => effect2.getBuildOverrides(), []);
  const effect2Result16 = effect2(tmp2[57]);
  const codedLinksExperimentEmbeds = effect2(tmp2[67]).useCodedLinksExperimentEmbeds();
  const effect2Result17 = effect2(tmp2[67]);
  quests = effect2(tmp2[68]).useQuests({ fetchPolicy: "cache-or-network", callerSource: "messages_native" });
  ({ quests, isFetchingCurrentQuests } = quests);
  let found = stateFromStores.filter((type) => type.type === constants.PREMIUM_REFERRAL);
  let mapped = found.map((referralTrialOfferId) => referralTrialOfferId.referralTrialOfferId);
  closure_6 = mapped.filter(effect2(tmp2[61]).isNotNullish);
  const effect2Result18 = effect2(tmp2[68]);
  const items23 = [closure_29];
  const stateFromStoresArray7 = effect2(tmp2[57]).useStateFromStoresArray(items23, () => {
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
  const effect2Result19 = effect2(tmp2[57]);
  const trialOffer = effect2(tmp2[69]).useTrialOffer(closure_63);
  const effect2Result20 = effect2(tmp2[69]);
  const items24 = [closure_53];
  const stateFromStores8 = effect2(tmp2[57]).useStateFromStores(items24, () => application_id(memo1[70]).isPremiumExactly(authStore2.getCurrentUser(), TIER_2.TIER_2));
  const effect2Result21 = effect2(tmp2[57]);
  const items25 = [closure_40];
  const items26 = [id];
  const stateFromStores9 = effect2(tmp2[57]).useStateFromStores(items25, () => closure_1_40.getEditingMessageId(memo1), items26);
  const effect2Result22 = effect2(tmp2[57]);
  const items27 = [closure_31];
  const items28 = [id];
  const stateFromStores10 = effect2(tmp2[57]).useStateFromStores(items27, () => {
    const pendingReply = closure_1_31.getPendingReply(memo1);
    let id;
    if (pendingReply != null) {
      id = pendingReply.message.id;
    }
    return id;
  }, items28);
  const effect2Result23 = effect2(tmp2[57]);
  const items29 = [closure_50];
  const items30 = [id];
  const stateFromStores11 = effect2(tmp2[57]).useStateFromStores(items29, () => closure_1_50.getOldestUnreadMessageId(memo1), items30);
  const effect2Result24 = effect2(tmp2[57]);
  const items31 = [closure_44];
  const items32 = [guildId];
  const stateFromStores12 = effect2(tmp2[57]).useStateFromStores(items31, () => {
    let canChatInGuildResult = null != closure_3;
    if (canChatInGuildResult) {
      canChatInGuildResult = closure_1_44.canChatInGuild(tmp);
    }
    return canChatInGuildResult;
  }, items32);
  const effect2Result25 = effect2(tmp2[57]);
  const items33 = [closure_47];
  const items34 = [channel];
  const stateFromStores13 = effect2(tmp2[57]).useStateFromStores(items33, () => closure_1_47.can(closure_1_62.SEND_MESSAGES, stateFromStores), items34);
  const effect2Result26 = effect2(tmp2[57]);
  const tmp53 = closure_47;
  const tmp55 = application_id(tmp2[71])(id);
  const items35 = [closure_54];
  const items36 = [stateFromStores2];
  const stateFromStores14 = effect2(tmp2[57]).useStateFromStores(items35, () => closure_1_54.getUserVoiceChannelId(closure_1_60, stateFromStores2), items36);
  const effect2Result27 = effect2(tmp2[57]);
  const tmp56 = closure_54;
  const items37 = [closure_49];
  const stateFromStores15 = effect2(tmp2[57]).useStateFromStores(items37, () => channelId.getChannelId(), []);
  const effect2Result28 = effect2(tmp2[57]);
  const items38 = [closure_32];
  const items39 = [channel];
  const stateFromStores16 = effect2(tmp2[57]).useStateFromStores(items38, () => {
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
  }, items39);
  const effect2Result29 = effect2(tmp2[57]);
  const items40 = [closure_41];
  const stateFromStoresObject2 = effect2(tmp2[57]).useStateFromStoresObject(items40, () => ({ resolvingGiftCodes: store4.getResolvingCodes(), resolvedGiftCodes: store4.getResolvedCodes(), acceptingGiftCodes: store4.getAcceptingCodes() }), []);
  ({ resolvingGiftCodes, resolvedGiftCodes, acceptingGiftCodes } = stateFromStoresObject2);
  const effect2Result30 = effect2(tmp2[57]);
  const items41 = [closure_11];
  const items42 = [id];
  const stateFromStores17 = effect2(tmp2[57]).useStateFromStores(items41, () => closure_1_11.getParticipants(memo1).length, items42);
  const effect2Result31 = effect2(tmp2[57]);
  const items43 = [closure_52];
  const items44 = [id];
  const stateFromStores18 = effect2(tmp2[57]).useStateFromStores(items43, () => closure_1_52.getFiles(memo1), items44);
  const effect2Result32 = effect2(tmp2[57]);
  const items45 = [closure_32];
  const items46 = [id];
  const stateFromStores19 = effect2(tmp2[57]).useStateFromStores(items45, () => closure_1_32.getReplyIdsForChannel(memo1), items46);
  const effect2Result33 = effect2(tmp2[57]);
  const items47 = [stateFromStores2];
  const stateFromStoresObject3 = effect2(tmp2[57]).useStateFromStoresObject(items47, () => ({ useReducedMotion: stateFromStores2.useReducedMotion, roleStyle: stateFromStores2.roleStyle, officialMessageStyle: stateFromStores2.officialMessageStyle, saturation: stateFromStores2.saturation, displayNameStylesEnabled: stateFromStores2.displayNameStylesEnabled }), []);
  ({ useReducedMotion, roleStyle, officialMessageStyle, saturation, displayNameStylesEnabled } = stateFromStoresObject3);
  const effect2Result34 = effect2(tmp2[57]);
  const items48 = [closure_35];
  const items49 = [id];
  const stateFromStores20 = effect2(tmp2[57]).useStateFromStores(items48, () => closure_1_35.getChannelThreadsVersion(memo1), items49);
  const effect2Result35 = effect2(tmp2[57]);
  const items50 = [closure_22];
  const stateFromStoresObject4 = effect2(tmp2[57]).useStateFromStoresObject(items50, () => messageInteractionStates.getMessageInteractionStates());
  const effect2Result36 = effect2(tmp2[57]);
  const items51 = [closure_21];
  const effect2Result37 = effect2(tmp2[57]);
  [tmp68, tmp69] = callback(effect2(tmp2[57]).useStateFromStores(items51, () => {
    const items = [store3.getInteractionComponentStates(), store3.getInteractionComponentStateVersion()];
    return items;
  }, [], effect2(tmp2[72]).isVersionEqual), 2);
  const tmp67 = callback(effect2(tmp2[57]).useStateFromStores(items51, () => {
    const items = [store3.getInteractionComponentStates(), store3.getInteractionComponentStateVersion()];
    return items;
  }, [], effect2(tmp2[72]).isVersionEqual), 2);
  const items52 = [closure_14];
  let stateFromStores21 = effect2(tmp2[57]).useStateFromStores(items52, () => hasLoadedExperiments.hasLoadedExperiments);
  const effect2Result38 = effect2(tmp2[57]);
  const isSpamMessageRequest = effect2(tmp2[73]).useIsSpamMessageRequest(channel.id);
  const effect2Result39 = effect2(tmp2[73]);
  let tmp73 = null != stateFromStores;
  const isMessageRequest = effect2(tmp2[74]).useIsMessageRequest(channel.id);
  if (tmp73) {
    tmp73 = stateFromStores.ready || stateFromStores.cached;
    const tmp74 = stateFromStores.ready || stateFromStores.cached;
  }
  const effect2Result40 = effect2(tmp2[74]);
  const tmp75 = null != stateFromStores && stateFromStores.cached;
  const tmp76 = null != stateFromStores && stateFromStores.ready && !stateFromStores.loadingMore;
  const items53 = [closure_19];
  const stateFromStores22 = effect2(tmp2[57]).useStateFromStores(items53, () => rsvpVersion.getRsvpVersion());
  const effect2Result41 = effect2(tmp2[57]);
  const items54 = [closure_18];
  const stateFromStores23 = effect2(tmp2[57]).useStateFromStores(items54, () => messagesVersion.getMessagesVersion());
  const effect2Result42 = effect2(tmp2[57]);
  const items55 = [closure_42];
  const stateFromStores24 = effect2(tmp2[57]).useStateFromStores(items55, () => communicationDisabledVersion.getCommunicationDisabledVersion());
  const effect2Result43 = effect2(tmp2[57]);
  const items56 = [closure_42];
  const items57 = [guildId, stateFromStores];
  const stateFromStoresObject5 = effect2(tmp2[57]).useStateFromStoresObject(items56, () => {
    if (null != closure_3) {
      if (null != application_id) {
        const obj = {};
        const item = arr.forEach((author) => {
          author = author.author;
          let id;
          if (author != null) {
            id = author.id;
          }
          if (null != id) {
            const member = closure_2_42.getMember(closure_1_3, author.author.id);
            if (null != member) {
              obj[author.author.id] = member;
            }
          }
        });
        return obj;
      }
      arr = application_id;
    }
    return {};
  }, items57);
  const effect2Result44 = effect2(tmp2[57]);
  const items58 = [tmp53];
  const stateFromStores25 = effect2(tmp2[57]).useStateFromStores(items58, () => closure_1_47.can(closure_1_62.MODERATE_MEMBERS, stateFromStores1));
  const effect2Result45 = effect2(tmp2[57]);
  id = undefined;
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  const effect2Result46 = effect2(tmp2[75]);
  const items59 = [closure_36];
  const stateFromStores26 = effect2(tmp2[57]).useStateFromStores(items59, () => locale.locale);
  const effect2Result47 = effect2(tmp2[57]);
  const isPaymentsBlocked = effect2(tmp2[76]).useIsPaymentsBlocked();
  const effect2Result48 = effect2(tmp2[76]);
  const items60 = [closure_34];
  const stateFromStores27 = effect2(tmp2[57]).useStateFromStores(items60, () => {
    let hasJoinedResult = stateFromStores.isForumPost();
    if (hasJoinedResult) {
      hasJoinedResult = closure_1_34.hasJoined(memo1);
    }
    return hasJoinedResult;
  });
  const effect2Result49 = effect2(tmp2[57]);
  const items61 = [closure_24];
  const stateFromStores28 = effect2(tmp2[57]).useStateFromStores(items61, () => closure_1_24.shouldDisplayPrompt(memo1));
  const effect2Result50 = effect2(tmp2[57]);
  const items62 = [closure_30];
  const stateFromStores29 = effect2(tmp2[57]).useStateFromStores(items62, () => eligible.isEligible());
  const effect2Result51 = effect2(tmp2[57]);
  const items63 = [closure_10];
  const stateFromStores30 = effect2(tmp2[57]).useStateFromStores(items63, () => lazyCacheStatus.getLazyCacheStatus());
  const effect2Result52 = effect2(tmp2[57]);
  const messageJumpAndroidKeyboardHeight = effect2(tmp2[77]).useMessageJumpAndroidKeyboardHeight();
  const effect2Result53 = effect2(tmp2[77]);
  const tmp90 = application_id(tmp2[78])();
  channelSummariesExperiment = effect2(tmp2[79]).useChannelSummariesExperiment(channel);
  const effect2Result54 = effect2(tmp2[79]);
  const items64 = [closure_33];
  const items65 = [channelSummariesExperiment, channel.id];
  const items66 = [channel.id, , , , ];
  ({ hasMoreAfter: arr70[1], hasMoreBefore: arr70[2], length: arr70[3], ready: arr70[4] } = stateFromStores);
  const stateFromStores31 = effect2(tmp2[57]).useStateFromStores(items64, () => {
    let selectedSummaryResult = null;
    if (channelSummariesExperiment) {
      selectedSummaryResult = closure_1_33.selectedSummary(stateFromStores.id);
    }
    return selectedSummaryResult;
  }, items65);
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
  const effect2Result55 = effect2(tmp2[57]);
  const shouldTrackAnnouncementMessageViews = effect2(tmp2[81]).useShouldTrackAnnouncementMessageViews({ guild: stateFromStores1, channel, messages: stateFromStores, isMessagesReady: tmp73 });
  const effect2Result56 = effect2(tmp2[81]);
  const shouldTrackRichPresenceInviteEmbedViews = effect2(tmp2[81]).useShouldTrackRichPresenceInviteEmbedViews({ messages: stateFromStores, isMessagesReady: tmp73 });
  const effect2Result57 = effect2(tmp2[81]);
  const shouldTrackOfficialMessageViews = effect2(tmp2[81]).useShouldTrackOfficialMessageViews({ guild: stateFromStores1, messages: stateFromStores, isMessagesReady: tmp73 });
  const effect2Result58 = effect2(tmp2[81]);
  const shouldTrackVoiceInviteEmbedViews = effect2(tmp2[81]).useShouldTrackVoiceInviteEmbedViews({ messages: stateFromStores, isMessagesReady: tmp73 });
  const effect2Result59 = effect2(tmp2[81]);
  const shouldDisplaySpoilerObscurity = effect2(tmp2[82]).useShouldDisplaySpoilerObscurity(channel);
  const effect2Result60 = effect2(tmp2[82]);
  const items67 = [id, guildId];
  const isAgeVerified = effect2(tmp2[83]).useIsAgeVerified();
  effect2 = obj6.useEffect(() => {
    application_id(memo1[84]).handleChannelSelect();
    return () => {
      callback(table[84]).handleChannelSelect();
    };
  }, items67);
  const effect2Result61 = effect2(tmp2[83]);
  effect2 = effect2(tmp2[85]).useShouldDisableInteractiveComponents(channel.id);
  items68 = [];
  effect2 = callback2(channel.id);
  effect2 = stateFromStores.forEach((messageReference) => {
    messageReference = messageReference.messageReference;
    let message_id;
    if (messageReference != null) {
      message_id = messageReference.message_id;
    }
    if (null != message_id) {
      items68.push(message_id);
    }
  });
  effect2 = callback3(items68);
  const effect2Result62 = effect2(tmp2[85]);
  const items69 = [closure_15];
  const items70 = [id];
  effect2 = effect2(tmp2[57]).useStateFromStores(items69, () => closure_1_15.getChannelFpInfo(memo1), items70);
  const effect2Result63 = effect2(tmp2[57]);
  const items71 = [closure_26];
  effect2 = effect2(tmp2[57]).useStateFromStores(items71, () => pendingConnection.getPendingConnection());
  effect2 = tmp17(tmp2[86])();
  effect2 = tmp17(tmp2[87])(stateFromStores);
  ({ unloadedContentEntryMessageIds, unloadableContentEntryMessageIds } = effect2);
  const effect2Result64 = effect2(tmp2[57]);
  const items72 = [closure_53];
  effect2 = effect2(tmp2[57]).useStateFromStores(items72, () => {
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
  const effect2Result65 = effect2(tmp2[57]);
  const items73 = [closure_17];
  effect2 = effect2(tmp2[57]).useStateFromStores(items73, () => version.getVersion());
  const effect2Result66 = effect2(tmp2[57]);
  effect2 = effect2(tmp2[88]).useColorStore((palette) => Object.keys(palette.palette).length);
  const effect2Result67 = effect2(tmp2[88]);
  const items74 = [closure_13];
  effect2 = effect2(tmp2[57]).useStateFromStores(items74, () => closure_1_13.getGuildEmoji(closure_3));
  const effect2Result68 = effect2(tmp2[57]);
  const items75 = [tmp56];
  const items76 = [guildId];
  effect2 = effect2(tmp2[57]).useStateFromStores(items75, () => {
    if (null == closure_3) {
      return null;
    } else {
      const voiceStates = closure_1_54.getVoiceStates(tmp);
      return stateFromStores(memo1[89]).getVoiceStateChannelSummaryFromVoiceStates(voiceStates);
    }
  }, items76);
  const effect2Result69 = effect2(tmp2[57]);
  const items77 = [closure_57, closure_12, tmp29, closure_39];
  effect2 = effect2(tmp2[57]).useStateFromStoresObject(items77, () => {
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
        let obj4 = stateFromStores(memo1[90]);
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
  const effect2Result70 = effect2(tmp2[57]);
  const items78 = [closure_51];
  effect2 = effect2(tmp2[57]).useStateFromStoresArray(items78, () => {
    const items = [...closure_51.getRemoteActivities(), ...closure_51.getHiddenActivities()];
    return items.filter(stateFromStores(memo1[61]).isNotNullish);
  });
  const effect2Result71 = effect2(tmp2[57]);
  const items79 = [closure_56];
  effect2 = effect2(tmp2[57]).useStateFromStoresObject(items79, () => effect2.reduce((arg0, application_id) => {
    if (null == application_id.application_id) {
      return arg0;
    } else {
      state = state.getState(application_id.application_id, constants.JOIN);
      if (null != state) {
        arg0[application_id.application_id] = state;
      }
      return arg0;
    }
  }, {}));
  const effect2Result72 = effect2(tmp2[57]);
  const items80 = [closure_25];
  effect2 = effect2(tmp2[57]).useStateFromStoresArray(items80, () => {
    const items = [authStore.getNewestTokens(), authStore.getApplicationFetchStateVersion()];
    return items;
  }, []);
  const effect2Result73 = effect2(tmp2[57]);
  const items81 = [closure_53];
  effect2 = effect2(tmp2[57]).useStateFromStores(items81, () => {
    const currentUser = authStore2.getCurrentUser();
    let displayNameStyles;
    if (currentUser != null) {
      displayNameStyles = currentUser.displayNameStyles;
    }
    return displayNameStyles;
  });
  const effect2Result74 = effect2(tmp2[57]);
  effect2 = effect2(tmp2[91]).useFetchSocialLayerStorefrontProductDetailsEmbedData(stateFromStores);
  effect2 = closure_66;
  obj = { profile: null, children: null };
  effect2 = tmp17(tmp2[92]);
  obj[0] = effect2(tmp2[92]).Profiles.Messages;
  effect2 = channel.isThread();
  if (effect2) {
    effect2 = callback4;
    effect2 = callback4(tmp17(tmp2[93]), { absolute: true });
  }
  const items82 = [effect2, ];
  effect2 = callback4;
  obj = { ref, theme: stateFromStores3, saturation, isVisualRefreshEnabled: tmp18, isStaff: effect2, animateEmoji: setting5, animateStickers: setting6, containerWidth: effect2, gifAutoPlay: setting7, timestampHourCycle: setting8, inlineAttachmentMedia: setting, inlineEmbedMedia: setting1, renderEmbeds: setting2, renderReactions: setting3, developerMode: setting4, roleStyle, officialMessageStyle, guildId, currentUserId: stateFromStores2, channelId: id, isMessagesReady: tmp73, isMessagesCached: tmp75, isMessagesAckable: tmp76, isMessageRequest, isSpamMessageRequest, messageAuthorActivities: stateFromStoresObject, invites: stateFromStores4, appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, invalidApplicationIds: stateFromStoresArray, applicationAssetFetchingIds: stateFromStoresArray1, messages: stateFromStores, messagesWithActivitiesLaunching: stateFromStoresArray6, activityInstanceIds: stateFromStoresArray3, activityParticipants: stateFromStoresArray5, activityInstancePresenceDetails: stateFromStoresArray4, appDirectoryEmbedApplicationFetchStates, mediaPostPreviewEmbeds: stateFromStores5, guildTemplates: stateFromStores6, buildOverrides: stateFromStores7, fetchingSkuIds: stateFromStoresArray2, experimentEmbeds: codedLinksExperimentEmbeds, quests, isFetchingCurrentQuests, editingMessageId: stateFromStores9, replyingMessageId: stateFromStores10, oldestUnreadMessageId: stateFromStores11, canChat: stateFromStores12, canSendMessages: stateFromStores13, isCallActive: tmp55, voiceStatePrivateChannelId: stateFromStores14, currentClientVoiceChannelId: stateFromStores15, voiceStateChannelIdSummaryForGuild: effect2, resolvingGiftCodes, resolvedGiftCodes, acceptingGiftCodes, participantsLength: stateFromStores17, uploads: stateFromStores18, repliedIds: stateFromStores19, useReducedMotion, displayNameStylesEnabled, channelThreadsVersion: stateFromStores20, rsvpVersion: stateFromStores22, failedMessagesVersion: stateFromStores23, communicationDisabledVersion: stateFromStores24, messageAuthorMembers: stateFromStoresObject5, forwardGuildsVersion: effect2, interactionStates: stateFromStoresObject4, interactionComponentStates: tmp68, interactionComponentStatesVersion: tmp69, hasLoadedExperiments: null, guildSystemChannelFlags: null, currentUserCommunicationDisabled: null, renderCommunicationDisabled: null, userSettingsLocale: null, paymentsBlocked: null, isFollowingForumPost: null, showMediaPostSharePrompt: null, showPushFeedback: null, cacheStoreLoaded: null, androidKeyboardHeight: null, selectedSummary: null, keyboardType: null, shouldTrackAnnouncementMessageViews: null, shouldTrackRichPresenceInviteEmbedViews: null, shouldTrackOfficialMessageViews: null, shouldTrackVoiceInviteEmbedViews: null, shouldObscureSpoiler: null, shouldDisableInteractiveComponents: null, channelPolls: null, messageReferencePolls: null, explicitMediaFalsePositiveInfo: null, familyCenterPendingConnection: null, threadStartingReferenceMessage: null, unloadedContentEntryMessageIds: null, unloadableContentEntryMessageIds: null, resolvedReferralTrialOfferIds: null, referralTrialOfferId: null, isPremiumTier2User: null, activityInviteMessageIds: null, guildInviteColorsFetched: null, isAgeVerified: null, guildEmojis: null, enableSwipeActions: null, selfActivities: null, activityLaunchJoinStates: null, authorizedAppsTokens: null, currentUserDisplayNameStyles: null, voiceInviteDataByChannelId: null, officialMessageColor: null };
  effect2 = tmp17(tmp2[94]);
  if (stateFromStores21) {
    stateFromStores21 = tmp73;
  }
  obj[70] = stateFromStores21;
  obj[71] = systemChannelFlags;
  obj[72] = tmp26(effect2Result46.useCurrentUserCommunicationDisabled(id), 2)[1];
  obj[73] = stateFromStores25;
  obj[74] = stateFromStores26;
  obj[75] = isPaymentsBlocked;
  obj[76] = stateFromStores27;
  obj[77] = stateFromStores28;
  obj[78] = stateFromStores29;
  obj[79] = "initializing" !== stateFromStores30;
  obj[80] = messageJumpAndroidKeyboardHeight;
  obj[81] = stateFromStores31;
  obj[82] = tmp90;
  obj[83] = shouldTrackAnnouncementMessageViews;
  obj[84] = shouldTrackRichPresenceInviteEmbedViews;
  obj[85] = shouldTrackOfficialMessageViews;
  obj[86] = shouldTrackVoiceInviteEmbedViews;
  obj[87] = shouldDisplaySpoilerObscurity;
  obj[88] = effect2;
  obj[89] = effect2;
  obj[90] = effect2;
  obj[91] = effect2;
  obj[92] = effect2;
  obj[93] = stateFromStores16;
  obj[94] = unloadedContentEntryMessageIds;
  obj[95] = unloadableContentEntryMessageIds;
  obj[96] = stateFromStoresArray7;
  effect2 = undefined;
  if (trialOffer != null) {
    effect2 = trialOffer.id;
  }
  obj[97] = effect2;
  obj[98] = stateFromStores8;
  obj[99] = tmp28;
  obj[100] = effect2;
  obj[101] = isAgeVerified;
  obj[102] = effect2;
  obj[103] = isMessageSwipeActionsEnabled;
  obj[104] = effect2;
  obj[105] = effect2;
  obj[106] = effect2;
  obj[107] = effect2;
  obj[108] = effect2;
  effect2 = undefined;
  if (stateFromStores1 != null) {
    effect2 = stateFromStores1.officialMessageColor;
  }
  obj[109] = effect2;
  effect2 = Object.assign(channel);
  items82[1] = effect2(effect2, obj);
  obj[1] = items82;
  return effect2(effect2, obj);
});
forwardRefResult.displayName = "MessagesConnected";
let result = require("set").fileFinishedImporting("modules/messages/native/Messages.tsx");

export default forwardRefResult;