// === Module 10637: MessagesConnected ===

// Module 10637 (MessagesConnected)
import _slicedToArray from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import participantFromServer from "participantFromServer" /* 1390 */;
import handleFetchEmbeddedActivityShelfSuccess from "handleFetchEmbeddedActivityShelfSuccess" /* 7248 */;
import addApplication from "addApplication" /* 4478 */;
import getCurrentBuildOverride from "getCurrentBuildOverride" /* 10638 */;
import handleClearCaches from "handleClearCaches" /* 5067 */;
import getParticipants from "getParticipants" /* 4773 */;
import _toTimestampMs from "_toTimestampMs" /* 10509 */;
import getEmojiToGroupId from "getEmojiToGroupId" /* 6727 */;
import getHash from "getHash" /* 4288 */;
import getFpMessageInfo from "getFpMessageInfo" /* 5002 */;
import set from "set" /* 7141 */;
import getGuild from "getGuild" /* 8180 */;
import handleMessageSendFailedAutomod from "handleMessageSendFailedAutomod" /* 8163 */;
import scheduledEventSort from "scheduledEventSort" /* 4370 */;
import handleGuildTemplateResolveSuccess from "handleGuildTemplateResolveSuccess" /* 7429 */;
import getInteractionComponentStates from "getInteractionComponentStates" /* 8327 */;
import deleteNonce from "deleteNonce" /* 8165 */;
import getMediaPostEmbed from "getMediaPostEmbed" /* 10639 */;
import set2 from "set" /* 8166 */;
import recomputeFromAppTokens from "recomputeFromAppTokens" /* 5289 */;
import initialize from "initialize" /* 4993 */;
import useMessagePollInteractions from "useMessagePollInteractions" /* 8430 */;
import emitChanges from "emitChanges" /* 7423 */;
import initialize2 from "initialize" /* 10640 */;
import getState from "getState" /* 7434 */;
import processMessage from "processMessage" /* 5013 */;
import handleQuickSwitcherUpdate from "handleQuickSwitcherUpdate" /* 10551 */;
import storeThread from "storeThread" /* 4023 */;
import updateState from "updateState" /* 7271 */;
import _getSystemLocale from "_getSystemLocale" /* 1994 */;
import handleThemeChange from "handleThemeChange" /* 1302 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import initialize3 from "initialize" /* 7435 */;
import updateGiftCode from "updateGiftCode" /* 10641 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import recomputeGuild from "recomputeGuild" /* 4977 */;
import updateInvite from "updateInvite" /* 4359 */;
import reinjectEphemerals from "reinjectEphemerals" /* 4994 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import sortActivity from "sortActivity" /* 4559 */;
import createRTCConnection from "createRTCConnection" /* 4539 */;
import generateOldThreadCutoff from "generateOldThreadCutoff" /* 4772 */;
import handleUpdate from "handleUpdate" /* 4541 */;
import initialize4 from "initialize" /* 7582 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import updateVoiceState from "updateVoiceState" /* 4542 */;
import addSku from "addSku" /* 4521 */;
import handleActivityStateChanged from "handleActivityStateChanged" /* 10663 */;
import getVoiceStatesForGuild from "getVoiceStatesForGuild" /* 4545 */;
import ME from "ME" /* 676 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;
import jsxProd from "jsxProd" /* 21 */;

const require = fn;
let c4 = importAllResult;
({ useChannelPollInteractions: closure_27, useMessagePollInteractions: closure_28 } = useMessagePollInteractions);
({ ActivityActionTypes: closure_58, ChannelTypesSets: closure_59, ME: closure_60, MessageTypes: closure_61, Permissions: closure_62 } = ME);
({ PREMIUM_TIER_2_REFERRAL_TRIAL_ID: closure_63, PremiumTypes: closure_64 } = GuildFeatures);
({ jsx: closure_65, jsxs: closure_66 } = jsxProd);
const forwardRefResult = importAllResult.forwardRef((channel, ref) => {
  channel = channel.channel;
  let stateFromStores = channel;
  let tmp = stateFromStores;
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
  let tmpResult = tmp(tmp2[57]);
  const items3 = [closure_38];
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
  const items4 = [closure_37];
  const stateFromStores3 = tmpResult.useStateFromStores(items4, () => theme.theme, []);
  let obj2 = stateFromStores(memo1[57]);
  const tmp18 = application_id(tmp2[63])("Messages");
  const items5 = [stateFromStores];
  const isMessageSwipeActionsEnabled = tmp(tmp2[64]).useIsMessageSwipeActionsEnabled();
  const memo = stateFromStores1.useMemo(() => {
    const obj = {};
    const item = obj.forEach((item, index) => {
      if (tmp) {
        obj[item.author.id] = null;
      }
      tmp = null != item.author && null != item.activity;
    });
    return obj;
  }, items5);
  const tmpResult1 = tmp(tmp2[64]);
  const items6 = [closure_48];
  const items7 = [memo];
  const linkedLobby = channel.linkedLobby;
  application_id = undefined;
  const stateFromStoresObject = tmp(tmp2[57]).useStateFromStoresObject(items6, () => application_id(memo1[58]).mapValues(application_id, (arg0, arg1) => primaryActivity.getPrimaryActivity(arg1)), items7);
  if (linkedLobby != null) {
    application_id = linkedLobby.application_id;
  }
  const items8 = [stateFromStores, application_id];
  memo1 = obj6.useMemo(() => {
    const set = new Set();
    const item = set.forEach((item, index) => {
      if (tmp) {
        set.add(item.applicationId);
      }
      tmp = null != item.applicationId && null == item.application;
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
      const obj2 = application_id(memo1[60]);
      const found = application_id(memo1[58])(memo1).filter(stateFromStores(memo1[61]).isNotNullish);
      const arr = application_id(memo1[58])(memo1);
      const applications = obj2.fetchApplications(found.uniq().value(), false);
      ref.current = memo1;
      const iter = found.uniq();
    }
    obj = stateFromStores(memo1[59]);
  }, items9);
  const tmp26 = callback;
  const tmpResult2 = tmp(tmp2[57]);
  [tmp28, r10131] = callback(application_id(tmp2[65])(stateFromStores, channel), 2);
  const tmp27 = callback(application_id(tmp2[65])(stateFromStores, channel), 2);
  const items10 = [closure_45];
  const stateFromStores4 = tmp(tmp2[57]).useStateFromStores(items10, () => store5.getInvites(), []);
  const tmpResult3 = tmp(tmp2[57]);
  const fetchVoiceChannelInviteStartTimes = tmp(tmp2[66]).useFetchVoiceChannelInviteStartTimes(stateFromStores4);
  const tmpResult4 = tmp(tmp2[66]);
  const items11 = [closure_16];
  const stateFromStoresObject1 = tmp(tmp2[57]).useStateFromStoresObject(items11, () => ({ appDirectoryEmbedApplications: store2.getApplications(), invalidAppDirectoryEmbedApplicationIds: store2.getInvalidApplicationIds(), appDirectoryEmbedApplicationFetchStates: store2.getApplicationFetchStates() }), []);
  ({ appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, appDirectoryEmbedApplicationFetchStates } = stateFromStoresObject1);
  const tmpResult5 = tmp(tmp2[57]);
  const items12 = [items68];
  const stateFromStoresArray = tmp(tmp2[57]).useStateFromStoresArray(items12, () => items68.getFetchingOrFailedFetchingIds());
  const tmpResult6 = tmp(tmp2[57]);
  const items13 = [channelSummariesExperiment];
  const stateFromStoresArray1 = tmp(tmp2[57]).useStateFromStoresArray(items13, () => channelSummariesExperiment.getFetchingIds());
  const tmpResult7 = tmp(tmp2[57]);
  const items14 = [closure_55];
  const stateFromStoresArray2 = tmp(tmp2[57]).useStateFromStoresArray(items14, () => fetchingSkuIds.getFetchingSkuIds());
  const tmpResult8 = tmp(tmp2[57]);
  const items15 = [closure_6];
  const items16 = [id];
  const stateFromStoresArray3 = tmp(tmp2[57]).useStateFromStoresArray(items15, () => {
    const embeddedActivitiesForChannel = store.getEmbeddedActivitiesForChannel(memo1);
    const mapped = embeddedActivitiesForChannel.map((item, index) => item.launchId);
    return mapped.filter(stateFromStores(memo1[61]).isNotNullish);
  }, items16);
  const tmpResult9 = tmp(tmp2[57]);
  const items17 = [closure_6, closure_48];
  const stateFromStoresArray4 = tmp(tmp2[57]).useStateFromStoresArray(items17, () => {
    let items = [];
    const embeddedActivitiesForChannel = store.getEmbeddedActivitiesForChannel(memo1);
    function _loop(iter) {
      items = iter;
      const userIds = iter.userIds;
      iter = userIds.values();
      const findActivityResult = closure_1_48.findActivity(iter.next().value, (application_id) => application_id.application_id === iter.applicationId);
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
    const embeddedActivitiesByChannel = store.getEmbeddedActivitiesByChannel();
    let item = embeddedActivitiesByChannel.forEach((item, index) => {
      closure_0 = index;
      item = item.forEach((item, index) => {
        const userIds = item.userIds;
        item = userIds.forEach((item, index) => {
          index.add("" + closure_0 + ":" + item);
        });
      });
    });
    return Array.from(set);
  });
  const tmpResult11 = tmp(tmp2[57]);
  const items19 = [closure_6];
  const stateFromStoresArray6 = tmp(tmp2[57]).useStateFromStoresArray(items19, () => {
    const launchStates = store.getLaunchStates();
    const items = [];
    while (tmp2 !== undefined) {
      let tmp5 = ref(tmp3, 2);
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
  const items20 = [closure_23];
  const stateFromStores5 = tmp(tmp2[57]).useStateFromStores(items20, () => mediaPostEmbeds.getMediaPostEmbeds());
  const tmpResult13 = tmp(tmp2[57]);
  const items21 = [closure_20];
  const stateFromStores6 = tmp(tmp2[57]).useStateFromStores(items21, () => guildTemplates.getGuildTemplates(), []);
  const tmpResult14 = tmp(tmp2[57]);
  const items22 = [stateFromStoresArray8];
  const stateFromStores7 = tmp(tmp2[57]).useStateFromStores(items22, () => stateFromStoresArray8.getBuildOverrides(), []);
  const tmpResult15 = tmp(tmp2[57]);
  const codedLinksExperimentEmbeds = tmp(tmp2[67]).useCodedLinksExperimentEmbeds();
  const tmpResult16 = tmp(tmp2[67]);
  quests = tmp(tmp2[68]).useQuests({ fetchPolicy: "cache-or-network", callerSource: "messages_native" });
  ({ quests, isFetchingCurrentQuests } = quests);
  let found = stateFromStores.filter((item, index) => item.type === constants.PREMIUM_REFERRAL);
  let mapped = found.map((item, index) => item.referralTrialOfferId);
  closure_6 = mapped.filter(tmp(tmp2[61]).isNotNullish);
  const tmpResult17 = tmp(tmp2[68]);
  const items23 = [closure_29];
  const stateFromStoresArray7 = tmp(tmp2[57]).useStateFromStoresArray(items23, () => {
    const mapped = store.map((item, index) => {
      relevantUserTrialOffer = relevantUserTrialOffer.getRelevantUserTrialOffer(item);
      let id;
      if (relevantUserTrialOffer != null) {
        id = relevantUserTrialOffer.id;
      }
      return id;
    });
    return mapped.filter(stateFromStores(memo1[61]).isNotNullish);
  });
  const tmpResult18 = tmp(tmp2[57]);
  const trialOffer = tmp(tmp2[69]).useTrialOffer(closure_63);
  const tmpResult19 = tmp(tmp2[69]);
  const items24 = [closure_53];
  const stateFromStores8 = tmp(tmp2[57]).useStateFromStores(items24, () => application_id(memo1[70]).isPremiumExactly(authStore2.getCurrentUser(), TIER_2.TIER_2));
  const tmpResult20 = tmp(tmp2[57]);
  const items25 = [closure_40];
  const items26 = [id];
  const stateFromStores9 = tmp(tmp2[57]).useStateFromStores(items25, () => closure_1_40.getEditingMessageId(memo1), items26);
  const tmpResult21 = tmp(tmp2[57]);
  const items27 = [closure_31];
  const items28 = [id];
  const stateFromStores10 = tmp(tmp2[57]).useStateFromStores(items27, () => {
    const pendingReply = closure_1_31.getPendingReply(memo1);
    let id;
    if (pendingReply != null) {
      id = pendingReply.message.id;
    }
    return id;
  }, items28);
  const tmpResult22 = tmp(tmp2[57]);
  const items29 = [closure_50];
  const items30 = [id];
  const stateFromStores11 = tmp(tmp2[57]).useStateFromStores(items29, () => closure_1_50.getOldestUnreadMessageId(memo1), items30);
  const tmpResult23 = tmp(tmp2[57]);
  const items31 = [closure_44];
  const items32 = [guildId];
  const stateFromStores12 = tmp(tmp2[57]).useStateFromStores(items31, () => {
    let canChatInGuildResult = null != closure_3;
    if (canChatInGuildResult) {
      canChatInGuildResult = closure_1_44.canChatInGuild(tmp);
    }
    return canChatInGuildResult;
  }, items32);
  const tmpResult24 = tmp(tmp2[57]);
  const items33 = [closure_47];
  const items34 = [channel];
  const stateFromStores13 = tmp(tmp2[57]).useStateFromStores(items33, () => closure_1_47.can(closure_1_62.SEND_MESSAGES, stateFromStores), items34);
  const tmpResult25 = tmp(tmp2[57]);
  const tmp55 = application_id(tmp2[71])(id);
  const items35 = [closure_54];
  const items36 = [stateFromStores2];
  const stateFromStores14 = tmp(tmp2[57]).useStateFromStores(items35, () => closure_1_54.getUserVoiceChannelId(closure_1_60, stateFromStores2), items36);
  const tmpResult26 = tmp(tmp2[57]);
  const items37 = [closure_49];
  const stateFromStores15 = tmp(tmp2[57]).useStateFromStores(items37, () => channelId.getChannelId(), []);
  const tmpResult27 = tmp(tmp2[57]);
  const items38 = [closure_32];
  const items39 = [channel];
  const stateFromStores16 = tmp(tmp2[57]).useStateFromStores(items38, () => {
    const THREADS = closure_1_59.THREADS;
    let message = null;
    if (THREADS.has(stateFromStores.type)) {
      message = null;
      if (null != stateFromStores.parent_id) {
        const obj = { channel_id: null, message_id: null, guild_id: null };
        ({ parent_id: obj[0], id: obj[1], guild_id: obj[2] } = stateFromStores);
        message = closure_1_32.getMessageByReference(obj).message;
      }
    }
    return message;
  }, items39);
  const tmpResult28 = tmp(tmp2[57]);
  const items40 = [closure_41];
  const stateFromStoresObject2 = tmp(tmp2[57]).useStateFromStoresObject(items40, () => ({ resolvingGiftCodes: store4.getResolvingCodes(), resolvedGiftCodes: store4.getResolvedCodes(), acceptingGiftCodes: store4.getAcceptingCodes() }), []);
  ({ resolvingGiftCodes, resolvedGiftCodes, acceptingGiftCodes } = stateFromStoresObject2);
  const tmpResult29 = tmp(tmp2[57]);
  const items41 = [closure_11];
  const items42 = [id];
  const stateFromStores17 = tmp(tmp2[57]).useStateFromStores(items41, () => closure_1_11.getParticipants(memo1).length, items42);
  const tmpResult30 = tmp(tmp2[57]);
  const items43 = [closure_52];
  const items44 = [id];
  const stateFromStores18 = tmp(tmp2[57]).useStateFromStores(items43, () => closure_1_52.getFiles(memo1), items44);
  const tmpResult31 = tmp(tmp2[57]);
  const items45 = [closure_32];
  const items46 = [id];
  const stateFromStores19 = tmp(tmp2[57]).useStateFromStores(items45, () => closure_1_32.getReplyIdsForChannel(memo1), items46);
  const tmpResult32 = tmp(tmp2[57]);
  const items47 = [stateFromStores2];
  const stateFromStoresObject3 = tmp(tmp2[57]).useStateFromStoresObject(items47, () => ({ useReducedMotion: stateFromStores2.useReducedMotion, roleStyle: stateFromStores2.roleStyle, officialMessageStyle: stateFromStores2.officialMessageStyle, saturation: stateFromStores2.saturation, displayNameStylesEnabled: stateFromStores2.displayNameStylesEnabled }), []);
  ({ useReducedMotion, roleStyle, officialMessageStyle, saturation, displayNameStylesEnabled } = stateFromStoresObject3);
  const tmpResult33 = tmp(tmp2[57]);
  const items48 = [closure_35];
  const items49 = [id];
  const stateFromStores20 = tmp(tmp2[57]).useStateFromStores(items48, () => closure_1_35.getChannelThreadsVersion(memo1), items49);
  const tmpResult34 = tmp(tmp2[57]);
  const items50 = [closure_22];
  const stateFromStoresObject4 = tmp(tmp2[57]).useStateFromStoresObject(items50, () => messageInteractionStates.getMessageInteractionStates());
  const tmpResult35 = tmp(tmp2[57]);
  const items51 = [closure_21];
  const tmpResult36 = tmp(tmp2[57]);
  [tmp68, tmp69] = callback(tmp(tmp2[57]).useStateFromStores(items51, () => {
    const items = [store3.getInteractionComponentStates(), store3.getInteractionComponentStateVersion()];
    return items;
  }, [], tmp(tmp2[72]).isVersionEqual), 2);
  const tmp67 = callback(tmp(tmp2[57]).useStateFromStores(items51, () => {
    const items = [store3.getInteractionComponentStates(), store3.getInteractionComponentStateVersion()];
    return items;
  }, [], tmp(tmp2[72]).isVersionEqual), 2);
  const items52 = [closure_14];
  let stateFromStores21 = tmp(tmp2[57]).useStateFromStores(items52, () => hasLoadedExperiments.hasLoadedExperiments);
  const tmpResult37 = tmp(tmp2[57]);
  const isSpamMessageRequest = tmp(tmp2[73]).useIsSpamMessageRequest(channel.id);
  const tmpResult38 = tmp(tmp2[73]);
  let tmp73 = null != stateFromStores;
  const isMessageRequest = tmp(tmp2[74]).useIsMessageRequest(channel.id);
  if (tmp73) {
    tmp73 = stateFromStores.ready || stateFromStores.cached;
  }
  const tmp75 = null != stateFromStores && stateFromStores.cached;
  const tmp76 = null != stateFromStores && stateFromStores.ready && !stateFromStores.loadingMore;
  const tmpResult39 = tmp(tmp2[74]);
  const items53 = [closure_19];
  const stateFromStores22 = tmp(tmp2[57]).useStateFromStores(items53, () => rsvpVersion.getRsvpVersion());
  const tmpResult40 = tmp(tmp2[57]);
  const items54 = [closure_18];
  const stateFromStores23 = tmp(tmp2[57]).useStateFromStores(items54, () => messagesVersion.getMessagesVersion());
  const tmpResult41 = tmp(tmp2[57]);
  const items55 = [closure_42];
  const stateFromStores24 = tmp(tmp2[57]).useStateFromStores(items55, () => communicationDisabledVersion.getCommunicationDisabledVersion());
  const tmpResult42 = tmp(tmp2[57]);
  const items56 = [closure_42];
  const items57 = [guildId, stateFromStores];
  const stateFromStoresObject5 = tmp(tmp2[57]).useStateFromStoresObject(items56, () => {
    if (null != closure_3) {
      if (null != application_id) {
        const item = application_id.forEach((item, index) => {
          const author = item.author;
          let id;
          if (author != null) {
            id = author.id;
          }
          if (null != id) {
            const member = closure_2_42.getMember(closure_1_3, item.author.id);
            if (null != member) {
              obj[item.author.id] = member;
            }
          }
        });
        return {};
      }
    }
    return {};
  }, items57);
  const tmpResult43 = tmp(tmp2[57]);
  const items58 = [closure_47];
  const stateFromStores25 = tmp(tmp2[57]).useStateFromStores(items58, () => closure_1_47.can(closure_1_62.MODERATE_MEMBERS, stateFromStores1));
  const tmpResult44 = tmp(tmp2[57]);
  id = undefined;
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  const tmpResult45 = tmp(tmp2[75]);
  const items59 = [closure_36];
  const stateFromStores26 = tmp(tmp2[57]).useStateFromStores(items59, () => locale.locale);
  const tmpResult46 = tmp(tmp2[57]);
  const isPaymentsBlocked = tmp(tmp2[76]).useIsPaymentsBlocked();
  const tmpResult47 = tmp(tmp2[76]);
  const items60 = [closure_34];
  const stateFromStores27 = tmp(tmp2[57]).useStateFromStores(items60, () => {
    let hasJoinedResult = stateFromStores.isForumPost();
    if (hasJoinedResult) {
      hasJoinedResult = closure_1_34.hasJoined(memo1);
    }
    return hasJoinedResult;
  });
  const tmpResult48 = tmp(tmp2[57]);
  const items61 = [closure_24];
  const stateFromStores28 = tmp(tmp2[57]).useStateFromStores(items61, () => closure_1_24.shouldDisplayPrompt(memo1));
  const tmpResult49 = tmp(tmp2[57]);
  const items62 = [closure_30];
  const stateFromStores29 = tmp(tmp2[57]).useStateFromStores(items62, () => eligible.isEligible());
  const tmpResult50 = tmp(tmp2[57]);
  const items63 = [closure_10];
  const stateFromStores30 = tmp(tmp2[57]).useStateFromStores(items63, () => lazyCacheStatus.getLazyCacheStatus());
  const tmpResult51 = tmp(tmp2[57]);
  const messageJumpAndroidKeyboardHeight = tmp(tmp2[77]).useMessageJumpAndroidKeyboardHeight();
  const tmpResult52 = tmp(tmp2[77]);
  const tmp90 = application_id(tmp2[78])();
  channelSummariesExperiment = tmp(tmp2[79]).useChannelSummariesExperiment(channel);
  const tmpResult53 = tmp(tmp2[79]);
  const items64 = [closure_33];
  const items65 = [channelSummariesExperiment, channel.id];
  const items66 = [channel.id, , , , ];
  ({ hasMoreAfter: arr70[1], hasMoreBefore: arr70[2], length: arr70[3], ready: arr70[4] } = stateFromStores);
  const stateFromStores31 = tmp(tmp2[57]).useStateFromStores(items64, () => {
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
      hasMoreAfter = 0 !== application_id.length;
    }
    if (!hasMoreAfter) {
      hasMoreAfter = application_id.hasMoreBefore;
    }
    if (!hasMoreAfter) {
      hasMoreAfter = application_id.hasMoreAfter;
    }
    if (!hasMoreAfter) {
      const obj = application_id(memo1[80]);
      const _Date = Date;
      const result = obj.updateChannelDimensions(stateFromStores.id, Date.now(), 1, 1, 0);
    }
  }, items66);
  const tmpResult54 = tmp(tmp2[57]);
  const shouldTrackAnnouncementMessageViews = tmp(tmp2[81]).useShouldTrackAnnouncementMessageViews({ guild: stateFromStores1, channel, messages: stateFromStores, isMessagesReady: tmp73 });
  const tmpResult55 = tmp(tmp2[81]);
  const shouldTrackRichPresenceInviteEmbedViews = tmp(tmp2[81]).useShouldTrackRichPresenceInviteEmbedViews({ messages: stateFromStores, isMessagesReady: tmp73 });
  const tmpResult56 = tmp(tmp2[81]);
  const shouldTrackOfficialMessageViews = tmp(tmp2[81]).useShouldTrackOfficialMessageViews({ guild: stateFromStores1, messages: stateFromStores, isMessagesReady: tmp73 });
  const tmpResult57 = tmp(tmp2[81]);
  const shouldTrackVoiceInviteEmbedViews = tmp(tmp2[81]).useShouldTrackVoiceInviteEmbedViews({ messages: stateFromStores, isMessagesReady: tmp73 });
  const tmpResult58 = tmp(tmp2[81]);
  const shouldDisplaySpoilerObscurity = tmp(tmp2[82]).useShouldDisplaySpoilerObscurity(channel);
  const tmpResult59 = tmp(tmp2[82]);
  const items67 = [id, guildId];
  const isAgeVerified = tmp(tmp2[83]).useIsAgeVerified();
  const effect2 = obj6.useEffect(() => {
    application_id(memo1[84]).handleChannelSelect();
    return () => {
      callback(table[84]).handleChannelSelect();
    };
  }, items67);
  const tmpResult60 = tmp(tmp2[83]);
  const shouldDisableInteractiveComponents = tmp(tmp2[85]).useShouldDisableInteractiveComponents(channel.id);
  items68 = [];
  const tmpResult61 = tmp(tmp2[85]);
  let item = stateFromStores.forEach((item, index) => {
    const messageReference = item.messageReference;
    let message_id;
    if (messageReference != null) {
      message_id = messageReference.message_id;
    }
    if (null != message_id) {
      items68.push(message_id);
    }
  });
  const tmp102 = callback2(channel.id);
  const tmp104 = callback3(items68);
  const items69 = [closure_15];
  const items70 = [id];
  const stateFromStores32 = tmp(tmp2[57]).useStateFromStores(items69, () => closure_1_15.getChannelFpInfo(memo1), items70);
  const tmpResult62 = tmp(tmp2[57]);
  const items71 = [closure_26];
  const stateFromStores33 = tmp(tmp2[57]).useStateFromStores(items71, () => pendingConnection.getPendingConnection());
  const tmpResult63 = tmp(tmp2[57]);
  const tmp107 = application_id(tmp2[86])();
  ({ unloadedContentEntryMessageIds, unloadableContentEntryMessageIds } = application_id(tmp2[87])(stateFromStores));
  const tmp108 = application_id(tmp2[87])(stateFromStores);
  const items72 = [closure_53];
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
  const items73 = [closure_17];
  const stateFromStores35 = tmp(tmp2[57]).useStateFromStores(items73, () => version.getVersion());
  const tmpResult65 = tmp(tmp2[57]);
  const colorStore = tmp(tmp2[88]).useColorStore((palette) => Object.keys(palette.palette).length);
  const tmpResult66 = tmp(tmp2[88]);
  const items74 = [closure_13];
  const stateFromStores36 = tmp(tmp2[57]).useStateFromStores(items74, () => closure_1_13.getGuildEmoji(closure_3));
  const tmpResult67 = tmp(tmp2[57]);
  const items75 = [closure_54];
  const items76 = [guildId];
  const stateFromStores37 = tmp(tmp2[57]).useStateFromStores(items75, () => {
    if (null == closure_3) {
      return null;
    } else {
      const voiceStates = closure_1_54.getVoiceStates(tmp);
      return stateFromStores(memo1[89]).getVoiceStateChannelSummaryFromVoiceStates(voiceStates);
    }
  }, items76);
  const tmpResult68 = tmp(tmp2[57]);
  const items77 = [closure_57, closure_12, closure_45, closure_39];
  const stateFromStoresObject6 = tmp(tmp2[57]).useStateFromStoresObject(items77, () => {
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
        let obj4 = stateFromStores(memo1[90]);
        if (obj4.isVoiceChannelInvite(tmp3)) {
          id = tmp3.channel.id;
          let guild = tmp3.guild;
          let id1;
          if (guild != null) {
            id1 = guild.id;
          }
          voiceStatesForChannelAlt = voiceStatesForChannelAlt.getVoiceStatesForChannelAlt(id, id1);
          let mapped = voiceStatesForChannelAlt.map((item, index) => {
            let str = "";
            if (item.voiceState.selfStream) {
              str = "*";
            }
            return "" + str + item.user.id;
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
  const items78 = [closure_51];
  stateFromStoresArray8 = tmp(tmp2[57]).useStateFromStoresArray(items78, () => {
    const items = [...closure_51.getRemoteActivities(), ...closure_51.getHiddenActivities()];
    return items.filter(stateFromStores(memo1[61]).isNotNullish);
  });
  const tmpResult70 = tmp(tmp2[57]);
  const items79 = [closure_56];
  const stateFromStoresObject7 = tmp(tmp2[57]).useStateFromStoresObject(items79, () => stateFromStoresArray8.reduce((acc, item, index) => {
    if (null == item.application_id) {
      return acc;
    } else {
      state = state.getState(item.application_id, constants.JOIN);
      if (null != state) {
        acc[item.application_id] = state;
      }
      return acc;
    }
  }, {}));
  const tmpResult71 = tmp(tmp2[57]);
  const items80 = [closure_25];
  const stateFromStoresArray9 = tmp(tmp2[57]).useStateFromStoresArray(items80, () => {
    const items = [authStore.getNewestTokens(), authStore.getApplicationFetchStateVersion()];
    return items;
  }, []);
  const tmpResult72 = tmp(tmp2[57]);
  const items81 = [closure_53];
  const stateFromStores38 = tmp(tmp2[57]).useStateFromStores(items81, () => {
    const currentUser = authStore2.getCurrentUser();
    let displayNameStyles;
    if (currentUser != null) {
      displayNameStyles = currentUser.displayNameStyles;
    }
    return displayNameStyles;
  });
  const tmpResult73 = tmp(tmp2[57]);
  const fetchSocialLayerStorefrontProductDetailsEmbedData = tmp(tmp2[91]).useFetchSocialLayerStorefrontProductDetailsEmbedData(stateFromStores);
  obj = { profile: null, children: null };
  let tmp17Result = tmp17(tmp2[92]);
  obj[0] = tmp(tmp2[92]).Profiles.Messages;
  let isThreadResult = channel.isThread();
  if (isThreadResult) {
    isThreadResult = callback4(tmp17(tmp2[93]), { absolute: true });
  }
  const items82 = [isThreadResult, ];
  obj = { ref, theme: stateFromStores3, saturation, isVisualRefreshEnabled: tmp18, isStaff: stateFromStores34, animateEmoji: setting5, animateStickers: setting6, containerWidth: tmp107, gifAutoPlay: setting7, timestampHourCycle: setting8, inlineAttachmentMedia: setting, inlineEmbedMedia: setting1, renderEmbeds: setting2, renderReactions: setting3, developerMode: setting4, roleStyle, officialMessageStyle, guildId, currentUserId: stateFromStores2, channelId: id, isMessagesReady: tmp73, isMessagesCached: tmp75, isMessagesAckable: tmp76, isMessageRequest, isSpamMessageRequest, messageAuthorActivities: stateFromStoresObject, invites: stateFromStores4, appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, invalidApplicationIds: stateFromStoresArray, applicationAssetFetchingIds: stateFromStoresArray1, messages: stateFromStores, messagesWithActivitiesLaunching: stateFromStoresArray6, activityInstanceIds: stateFromStoresArray3, activityParticipants: stateFromStoresArray5, activityInstancePresenceDetails: stateFromStoresArray4, appDirectoryEmbedApplicationFetchStates, mediaPostPreviewEmbeds: stateFromStores5, guildTemplates: stateFromStores6, buildOverrides: stateFromStores7, fetchingSkuIds: stateFromStoresArray2, experimentEmbeds: codedLinksExperimentEmbeds, quests, isFetchingCurrentQuests, editingMessageId: stateFromStores9, replyingMessageId: stateFromStores10, oldestUnreadMessageId: stateFromStores11, canChat: stateFromStores12, canSendMessages: stateFromStores13, isCallActive: tmp55, voiceStatePrivateChannelId: stateFromStores14, currentClientVoiceChannelId: stateFromStores15, voiceStateChannelIdSummaryForGuild: stateFromStores37, resolvingGiftCodes, resolvedGiftCodes, acceptingGiftCodes, participantsLength: stateFromStores17, uploads: stateFromStores18, repliedIds: stateFromStores19, useReducedMotion, displayNameStylesEnabled, channelThreadsVersion: stateFromStores20, rsvpVersion: stateFromStores22, failedMessagesVersion: stateFromStores23, communicationDisabledVersion: stateFromStores24, messageAuthorMembers: stateFromStoresObject5, forwardGuildsVersion: stateFromStores35, interactionStates: stateFromStoresObject4, interactionComponentStates: tmp68, interactionComponentStatesVersion: tmp69, hasLoadedExperiments: null, guildSystemChannelFlags: null, currentUserCommunicationDisabled: null, renderCommunicationDisabled: null, userSettingsLocale: null, paymentsBlocked: null, isFollowingForumPost: null, showMediaPostSharePrompt: null, showPushFeedback: null, cacheStoreLoaded: null, androidKeyboardHeight: null, selectedSummary: null, keyboardType: null, shouldTrackAnnouncementMessageViews: null, shouldTrackRichPresenceInviteEmbedViews: null, shouldTrackOfficialMessageViews: null, shouldTrackVoiceInviteEmbedViews: null, shouldObscureSpoiler: null, shouldDisableInteractiveComponents: null, channelPolls: null, messageReferencePolls: null, explicitMediaFalsePositiveInfo: null, familyCenterPendingConnection: null, threadStartingReferenceMessage: null, unloadedContentEntryMessageIds: null, unloadableContentEntryMessageIds: null, resolvedReferralTrialOfferIds: null, referralTrialOfferId: null, isPremiumTier2User: null, activityInviteMessageIds: null, guildInviteColorsFetched: null, isAgeVerified: null, guildEmojis: null, enableSwipeActions: null, selfActivities: null, activityLaunchJoinStates: null, authorizedAppsTokens: null, currentUserDisplayNameStyles: null, voiceInviteDataByChannelId: null, officialMessageColor: null };
  tmp17Result = tmp17(tmp2[94]);
  if (stateFromStores21) {
    stateFromStores21 = tmp73;
  }
  obj[70] = stateFromStores21;
  obj[71] = systemChannelFlags;
  obj[72] = tmp26(tmpResult45.useCurrentUserCommunicationDisabled(id), 2)[1];
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
  obj[88] = shouldDisableInteractiveComponents;
  obj[89] = tmp102;
  obj[90] = tmp104;
  obj[91] = stateFromStores32;
  obj[92] = stateFromStores33;
  obj[93] = stateFromStores16;
  obj[94] = unloadedContentEntryMessageIds;
  obj[95] = unloadableContentEntryMessageIds;
  obj[96] = stateFromStoresArray7;
  let id1;
  if (trialOffer != null) {
    id1 = trialOffer.id;
  }
  obj[97] = id1;
  obj[98] = stateFromStores8;
  obj[99] = tmp28;
  obj[100] = colorStore;
  obj[101] = isAgeVerified;
  obj[102] = stateFromStores36;
  obj[103] = isMessageSwipeActionsEnabled;
  obj[104] = stateFromStoresArray8;
  obj[105] = stateFromStoresObject7;
  obj[106] = stateFromStoresArray9;
  obj[107] = stateFromStores38;
  obj[108] = stateFromStoresObject6;
  let officialMessageColor;
  if (stateFromStores1 != null) {
    officialMessageColor = stateFromStores1.officialMessageColor;
  }
  obj[109] = officialMessageColor;
  const merged = Object.assign(channel);
  items82[1] = callback4(tmp17Result, obj);
  obj[1] = items82;
  return callback(tmp17Result, obj);
});
forwardRefResult.displayName = "MessagesConnected";
let result = require("obj132").fileFinishedImporting("modules/messages/native/Messages.tsx");

export default forwardRefResult;