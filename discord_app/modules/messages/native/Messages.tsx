// === Module 10449: Messages ===

// Module 10449 (Messages)
import _modDef12 from "module_12" /* 12 */;
import discord_common_shallowEqual from "discord_common/shallowEqual" /* 568 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6849 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 9355 */;
import DimensionActionCreatorsDefault from "DimensionActionCreators" /* 10643 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2063 */;
import ApplicationAssetsStore from "ApplicationAssetsStore" /* 8259 */;
import ApplicationStore from "ApplicationStore" /* 5437 */;
import BuildOverrideStore from "BuildOverrideStore" /* 10450 */;
import CacheStore from "CacheStore" /* 7191 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6043 */;
import VoiceChannelStartTimeStore from "VoiceChannelStartTimeStore" /* 9579 */;
import EmojiStore from "EmojiStore" /* 5994 */;
import ExperimentStore from "ExperimentStore" /* 4977 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 6984 */;
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 10451 */;
import ApplicationDirectoryApplicationsStore from "ApplicationDirectoryApplicationsStore" /* 6850 */;
import BasicGuildStore from "BasicGuildStore" /* 7955 */;
import GuildAutomodMessageStore from "GuildAutomodMessageStore" /* 7734 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6061 */;
import GuildTemplateStore from "GuildTemplateStore" /* 7173 */;
import LocalInteractionComponentStateStore from "LocalInteractionComponentStateStore" /* 8234 */;
import InteractionStore from "InteractionStore" /* 7865 */;
import MediaPostEmbedStore from "MediaPostEmbedStore" /* 10453 */;
import MediaPostSharePromptStore from "MediaPostSharePromptStore" /* 7866 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 6793 */;
import FamilyCenterPendingConnectionStore from "FamilyCenterPendingConnectionStore" /* 5907 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7168 */;
import PushFeedbackStore from "PushFeedbackStore" /* 10455 */;
import PendingReplyStore from "PendingReplyStore" /* 7361 */;
import ReferencedMessageStore from "ReferencedMessageStore" /* 7306 */;
import SummaryStore from "SummaryStore" /* 9585 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4711 */;
import ThreadMessageStore from "ThreadMessageStore" /* 6999 */;
import LocaleStore from "LocaleStore" /* 2128 */;
import ThemeStore from "ThemeStore" /* 1205 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import EditMessageStore from "EditMessageStore" /* 7362 */;
import GiftCodeStore from "GiftCodeStore" /* 10456 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;
import GuildStore from "GuildStore" /* 2086 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5888 */;
import InviteStore from "InviteStore" /* 5072 */;
import MessageStore from "MessageStore" /* 5429 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import PresenceStore from "PresenceStore" /* 5107 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5109 */;
import ReadStateStore from "ReadStateStore" /* 6042 */;
import SessionsStore from "SessionsStore" /* 5111 */;
import UploadStore from "UploadStore" /* 7868 */;
import UserStore from "UserStore" /* 1390 */;
import VoiceStateStore from "VoiceStateStore" /* 5112 */;
import SKUStore from "SKUStore" /* 6094 */;
import ActivityLauncherStore from "ActivityLauncherStore" /* 10612 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5115 */;

require = fn;
let closure_3 = ["ref"];
const PollsInteractionStore = fn(10454);
({ useChannelPollInteractions: closure_30, useMessagePollInteractions: items } = PollsInteractionStore);
const Constants = fn(1085);
({ ActivityActionTypes: closure_61, ChannelTypesSets: closure_62, ME: closure_63, MessageTypes: closure_64, Permissions: closure_65 } = Constants);
const PremiumConstants = fn(1392);
({ PREMIUM_TIER_2_REFERRAL_TRIAL_ID: closure_66, PremiumTypes: closure_67 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_68, jsxs: closure_69 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_70 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMessageAuthorActivities(arr) {
  const cResult = require("c").c(6);
  if (cResult[0] !== arr) {
    let obj2 = {};
    _require = obj2;
    const item = arr.forEach((author) => {
      if (tmp) {
        closure_0[author.author.id] = null;
      }
      tmp = null != author.author && null != author.activity;
    });
    cResult[0] = arr;
    cResult[1] = obj2;
  } else {
    _require = cResult[1];
  }
  obj2 = tmp4;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PresenceStore];
    cResult[2] = items;
    let tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    const fn = function l() {
      return _modDef12.mapValues(obj2, (arg0, arg1) => primaryActivity.getPrimaryActivity(arg1));
    };
    const items1 = [tmp4];
    cResult[3] = tmp4;
    cResult[4] = fn;
    cResult[5] = items1;
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[4];
    tmp9 = cResult[5];
  }
  const obj = require("c");
  return require("initialize").useStateFromStoresObject(tmp6, tmp8, tmp9);
}) : (function useMessageAuthorActivities(arg0) {
  _require = arg0;
  const items = [arg0];
  const memo = noop.useMemo(() => {
    const obj = {};
    const item = closure_0.forEach((author) => {
      if (tmp) {
        obj[author.author.id] = null;
      }
      tmp = null != author.author && null != author.activity;
    });
    return obj;
  }, items);
  const items1 = [PresenceStore];
  const items2 = [memo];
  return require("initialize").useStateFromStoresObject(items1, () => _modDef12.mapValues(memo, (arg0, arg1) => primaryActivity.getPrimaryActivity(arg1)), items2);
});
ReactCompilerGating = fn(558);
let closure_71 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFetchMessageApplications(arr, arg1) {
  const cResult = set(576).c(9);
  if (cResult[0] === arg1) {
    if (cResult[1] === arr) {
      set = cResult[2];
    }
    if (cResult[3] !== tmp2) {
      const _Array = Array;
      arr = Array.from(tmp2);
      cResult[3] = tmp2;
      cResult[4] = arr;
      let tmp5 = arr;
    } else {
      tmp5 = cResult[4];
    }
    const current = tmp5;
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [];
      cResult[5] = items;
      let tmp9 = items;
    } else {
      tmp9 = cResult[5];
    }
    dependencyMap = noop.useRef(tmp9);
    if (cResult[6] !== tmp5) {
      const fn = function h() {
        if (!obj.areArraysShallowEqual(current, ref.current)) {
          const obj2 = ApplicationActionCreatorsDefault;
          const found = _modDef12(current).filter(GlobalUtils.isNotNullish);
          const arr = _modDef12(current);
          const applications = obj2.fetchApplications(found.uniq().value(), false);
          ref.current = current;
          const iter = found.uniq();
        }
        obj = discord_common_shallowEqual;
      };
      const items1 = [tmp5];
      cResult[6] = tmp5;
      cResult[7] = fn;
      cResult[8] = items1;
      let tmp11 = items1;
      let tmp10 = fn;
    } else {
      tmp10 = cResult[7];
      tmp11 = cResult[8];
    }
    const effect = noop.useEffect(tmp10, tmp11);
  }
  set = new Set();
  const item = arr.forEach((applicationId) => {
    if (tmp) {
      set.add(applicationId.applicationId);
    }
    tmp = null != applicationId.applicationId && null == applicationId.application;
  });
  if (null != arg1) {
    set.add(arg1);
  }
  cResult[0] = arg1;
  cResult[1] = arr;
  cResult[2] = set;
  let obj = set(576);
}) : (function useFetchMessageApplications(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const items = [arg0, arg1];
  const memo = noop.useMemo(() => {
    const set = new Set();
    const item = closure_0.forEach((applicationId) => {
      if (tmp) {
        set.add(applicationId.applicationId);
      }
      tmp = null != applicationId.applicationId && null == applicationId.application;
    });
    if (null != closure_1) {
      set.add(tmp2);
    }
    return Array.from(set);
  }, items);
  noop.useRef([]);
  const items1 = [memo];
  const effect = noop.useEffect(() => {
    if (!obj.areArraysShallowEqual(memo, ref.current)) {
      const obj2 = ApplicationActionCreatorsDefault;
      const found = _modDef12(memo).filter(GlobalUtils.isNotNullish);
      const arr = _modDef12(memo);
      const applications = obj2.fetchApplications(found.uniq().value(), false);
      ref.current = memo;
      const iter = found.uniq();
    }
    obj = discord_common_shallowEqual;
  }, items1);
});
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function MessagesConnected(ref) {
  const cResult = channel(id[60]).c(334);
  if (cResult[0] !== ref) {
    let tmp8 = stateFromStores2(ref.ref, closure_3);
    cResult[0] = ref.ref;
    cResult[1] = tmp8;
    cResult[2] = ref.ref;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
  }
  channel = tmp4.channel;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [MessageStore];
    cResult[3] = items;
    let tmp9 = items;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== channel.id) {
    class Ee {
      constructor() {
        return closure_49.getMessages(channel.id);
      }
    }
    const items1 = [channel.id];
    cResult[4] = channel.id;
    cResult[5] = Ee;
    cResult[6] = items1;
    let tmp12 = items1;
  } else {
    class Ee {
      constructor() {
        return closure_49.getMessages(channel.id);
      }
    }
    tmp12 = cResult[6];
  }
  let obj = channel(id[60]);
  const stateFromStores = channel(id[62]).useStateFromStores(tmp9, Ee, tmp12);
  id = channel.id;
  if (cResult[7] !== channel) {
    class Ee {
      constructor() {
        return closure_49.getMessages(channel.id);
      }
    }
    cResult[7] = channel;
    cResult[8] = tmp14;
  } else {
    class Ee {
      constructor() {
        return closure_49.getMessages(channel.id);
      }
    }
  }
  closure_3 = tmp14;
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class Ee {
      constructor() {
        return closure_49.getMessages(channel.id);
      }
    }
    const items2 = [GuildStore];
    cResult[9] = items2;
    const tmp15 = items2;
  } else {
    class Ee {
      constructor() {
        return closure_49.getMessages(channel.id);
      }
    }
  }
  if (cResult[10] !== tmp14) {
    class Ee {
      constructor() {
        return closure_49.getMessages(channel.id);
      }
    }
    cResult[10] = tmp14;
    cResult[11] = tmp17;
  } else {
    class Ee {
      constructor() {
        return closure_49.getMessages(channel.id);
      }
    }
  }
  const tmpResult = channel(id[62]);
  const stateFromStores1 = channel(id[62]).useStateFromStores(tmp15, tmp17);
  if (stateFromStores1 != null) {
    class Ee {
      constructor() {
        return closure_49.getMessages(channel.id);
      }
    }
  }
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class Ee {
      constructor() {
        return closure_49.getMessages(channel.id);
      }
    }
    const items3 = [AuthenticationStore];
    class Ge {
      constructor() {
        return closure_1_41.getId();
      }
    }
    const items4 = [];
    cResult[12] = items3;
    cResult[13] = Ge;
    cResult[14] = items4;
    let tmp21 = items4;
    let tmp20 = Ge;
    const tmp19 = items3;
  } else {
    class Ee {
      constructor() {
        return closure_49.getMessages(channel.id);
      }
    }
    tmp20 = cResult[13];
    tmp21 = cResult[14];
  }
  const tmpResult31 = channel(id[62]);
  stateFromStores2 = channel(id[62]).useStateFromStores(tmp19, tmp20, tmp21);
  const InlineAttachmentMedia = tmp(tmp2[66]).InlineAttachmentMedia;
  const setting = InlineAttachmentMedia.useSetting();
  const InlineEmbedMedia = tmp(tmp2[66]).InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.useSetting();
  const RenderEmbeds = tmp(tmp2[66]).RenderEmbeds;
  const setting2 = RenderEmbeds.useSetting();
  const RenderReactions = tmp(tmp2[66]).RenderReactions;
  const setting3 = RenderReactions.useSetting();
  const DeveloperMode = tmp(tmp2[66]).DeveloperMode;
  const setting4 = DeveloperMode.useSetting();
  const AnimateEmoji = tmp(tmp2[66]).AnimateEmoji;
  const setting5 = AnimateEmoji.useSetting();
  const AnimateStickers = tmp(tmp2[66]).AnimateStickers;
  const setting6 = AnimateStickers.useSetting();
  const GifAutoPlay = tmp(tmp2[66]).GifAutoPlay;
  const setting7 = GifAutoPlay.useSetting();
  const TimestampHourCycle = tmp(tmp2[66]).TimestampHourCycle;
  const setting8 = TimestampHourCycle.useSetting();
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    class Ee {
      constructor() {
        return closure_49.getMessages(channel.id);
      }
    }
    const items5 = [ThemeStore];
    class Ge {
      constructor() {
        return closure_1_41.getId();
      }
    }
    const items6 = [];
    cResult[15] = items5;
    cResult[16] = tmp35;
    cResult[17] = items6;
    let tmp34 = items6;
    let tmp33 = tmp35;
    const tmp32 = items5;
  } else {
    class Ee {
      constructor() {
        return closure_49.getMessages(channel.id);
      }
    }
    tmp33 = cResult[16];
    tmp34 = cResult[17];
  }
  const tmpResult32 = channel(id[62]);
  const stateFromStores3 = channel(id[62]).useStateFromStores(tmp32, tmp33, tmp34);
  const tmpResult33 = channel(id[62]);
  const isMessageSwipeActionsEnabled = channel(id[67]).useIsMessageSwipeActionsEnabled();
  closure_70(stateFromStores);
  if (channel.linkedLobby != null) {
    class Ee {
      constructor() {
        return closure_49.getMessages(channel.id);
      }
    }
  }
  closure_71(stateFromStores, undefined);
  const first = stateFromStores1(stateFromStores(tmp2[68])(stateFromStores, channel), 1)[0];
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    class Ee {
      constructor() {
        return closure_49.getMessages(channel.id);
      }
    }
    const items7 = [InviteStore];
    class Ge {
      constructor() {
        return closure_1_41.getId();
      }
    }
    const items8 = [];
    cResult[18] = items7;
    cResult[19] = tmp46;
    cResult[20] = items8;
    let tmp45 = items8;
    let tmp44 = tmp46;
    const tmp43 = items7;
  } else {
    class Ee {
      constructor() {
        return closure_49.getMessages(channel.id);
      }
    }
    tmp44 = cResult[19];
    tmp45 = cResult[20];
  }
  const tmp41 = stateFromStores;
  const tmpResult34 = channel(id[67]);
  const stateFromStores4 = channel(id[62]).useStateFromStores(tmp43, tmp44, tmp45);
  const tmpResult35 = channel(id[62]);
  const fetchVoiceChannelInviteStartTimes = channel(id[69]).useFetchVoiceChannelInviteStartTimes(stateFromStores4);
  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
    class Ee {
      constructor() {
        return closure_49.getMessages(channel.id);
      }
    }
    const items9 = [ApplicationDirectoryApplicationsStore];
    class Ge {
      constructor() {
        return closure_1_41.getId();
      }
    }
    const items10 = [];
    cResult[21] = items9;
    cResult[22] = tmp52;
    cResult[23] = items10;
    let tmp51 = items10;
    let tmp50 = tmp52;
    const tmp49 = items9;
  } else {
    class Ee {
      constructor() {
        return closure_49.getMessages(channel.id);
      }
    }
    tmp50 = cResult[22];
    tmp51 = cResult[23];
  }
  const tmpResult36 = channel(id[69]);
  const stateFromStoresObject = channel(id[62]).useStateFromStoresObject(tmp49, tmp50, tmp51);
  ({ appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, appDirectoryEmbedApplicationFetchStates } = stateFromStoresObject);
  if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
    class Ee {
      constructor() {
        return closure_49.getMessages(channel.id);
      }
    }
    const items11 = [ApplicationStore];
    class St {
      constructor() {
        return closure_1_10.getFetchingOrFailedFetchingIds();
      }
    }
    cResult[24] = items11;
    cResult[25] = St;
    let tmp55 = St;
    const tmp54 = items11;
  } else {
    class Ee {
      constructor() {
        return closure_49.getMessages(channel.id);
      }
    }
    tmp55 = cResult[25];
  }
  const tmpResult37 = channel(id[62]);
  const stateFromStoresArray = channel(id[62]).useStateFromStoresArray(tmp54, tmp55);
  if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
    class Ee {
      constructor() {
        return closure_49.getMessages(channel.id);
      }
    }
    const items12 = [ApplicationAssetsStore];
    class St {
      constructor() {
        return closure_1_10.getFetchingOrFailedFetchingIds();
      }
    }
    cResult[26] = items12;
    cResult[27] = tmp59;
    let tmp58 = tmp59;
    const tmp57 = items12;
  } else {
    class Ee {
      constructor() {
        return closure_49.getMessages(channel.id);
      }
    }
    tmp58 = cResult[27];
  }
  const tmpResult38 = channel(id[62]);
  const stateFromStoresArray1 = channel(id[62]).useStateFromStoresArray(tmp57, tmp58);
  if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
    class Ee {
      constructor() {
        return closure_49.getMessages(channel.id);
      }
    }
    const items13 = [SKUStore];
    class St {
      constructor() {
        return closure_1_10.getFetchingOrFailedFetchingIds();
      }
    }
    cResult[28] = items13;
    cResult[29] = tmp63;
    let tmp62 = tmp63;
    const tmp61 = items13;
  } else {
    class Ee {
      constructor() {
        return closure_49.getMessages(channel.id);
      }
    }
    tmp62 = cResult[29];
  }
  const tmpResult39 = channel(id[62]);
  const stateFromStoresArray2 = channel(id[62]).useStateFromStoresArray(tmp61, tmp62);
  if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
    class Ee {
      constructor() {
        return closure_49.getMessages(channel.id);
      }
    }
    const items14 = [EmbeddedActivitiesStore];
    class St {
      constructor() {
        return closure_1_10.getFetchingOrFailedFetchingIds();
      }
    }
    cResult[30] = items14;
    const tmp65 = items14;
  } else {
    class Ee {
      constructor() {
        return closure_49.getMessages(channel.id);
      }
    }
  }
  if (cResult[31] !== id) {
    class Ct {
      constructor() {
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
        return mapped.filter(closure_0(closure_2[65]).isNotNullish);
      }
    }
    const items15 = [id];
    class St {
      constructor() {
        return closure_1_10.getFetchingOrFailedFetchingIds();
      }
    }
    cResult[31] = id;
    cResult[32] = Ct;
    cResult[33] = items15;
    let tmp67 = items15;
  } else {
    class Ct {
      constructor() {
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
        return mapped.filter(closure_0(closure_2[65]).isNotNullish);
      }
    }
    tmp67 = cResult[33];
  }
  const tmpResult40 = channel(id[62]);
  const stateFromStoresArray3 = channel(id[62]).useStateFromStoresArray(tmp65, Ct, tmp67);
  if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
    class Ct {
      constructor() {
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
        return mapped.filter(closure_0(closure_2[65]).isNotNullish);
      }
    }
    const items16 = [EmbeddedActivitiesStore, ];
    class St {
      constructor() {
        return closure_1_10.getFetchingOrFailedFetchingIds();
      }
    }
    items16[1] = PresenceStore;
    cResult[34] = items16;
    const tmp69 = items16;
  } else {
    class Ct {
      constructor() {
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
        return mapped.filter(closure_0(closure_2[65]).isNotNullish);
      }
    }
  }
  if (cResult[35] !== id) {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          value = iter.next().value;
          let findActivityResult;
          if (null != value) {
            findActivityResult = PresenceStore.findActivity(value, () => { ... });
          }
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    cResult[35] = id;
    class St {
      constructor() {
        return closure_1_10.getFetchingOrFailedFetchingIds();
      }
    }
    cResult[36] = Vt;
  } else {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          value = iter.next().value;
          let findActivityResult;
          if (null != value) {
            findActivityResult = PresenceStore.findActivity(value, () => { ... });
          }
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
  }
  const tmpResult41 = channel(id[62]);
  const stateFromStoresArray4 = channel(id[62]).useStateFromStoresArray(tmp69, Vt);
  if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          value = iter.next().value;
          let findActivityResult;
          if (null != value) {
            findActivityResult = PresenceStore.findActivity(value, () => { ... });
          }
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    const items17 = [EmbeddedActivitiesStore];
    class Dt {
      constructor() {
        set = new Set();
        closure_0 = set;
        embeddedActivitiesByChannel = closure_8.getEmbeddedActivitiesByChannel();
        item = embeddedActivitiesByChannel.forEach((arr, index) => {
          closure_0 = index;
          let item = arr.forEach(() => { ... });
        });
        return Array.from(set);
      }
    }
    cResult[37] = items17;
    cResult[38] = Dt;
    let tmp73 = Dt;
    const tmp72 = items17;
  } else {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          value = iter.next().value;
          let findActivityResult;
          if (null != value) {
            findActivityResult = PresenceStore.findActivity(value, () => { ... });
          }
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    tmp73 = cResult[38];
  }
  const tmpResult42 = channel(id[62]);
  const stateFromStoresArray5 = channel(id[62]).useStateFromStoresArray(tmp72, tmp73);
  if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          value = iter.next().value;
          let findActivityResult;
          if (null != value) {
            findActivityResult = PresenceStore.findActivity(value, () => { ... });
          }
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    const items18 = [EmbeddedActivitiesStore];
    class Dt {
      constructor() {
        set = new Set();
        closure_0 = set;
        embeddedActivitiesByChannel = closure_8.getEmbeddedActivitiesByChannel();
        item = embeddedActivitiesByChannel.forEach((arr, index) => {
          closure_0 = index;
          let item = arr.forEach(() => { ... });
        });
        return Array.from(set);
      }
    }
    cResult[39] = items18;
    cResult[40] = tmp77;
    let tmp76 = tmp77;
    const tmp75 = items18;
  } else {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          value = iter.next().value;
          let findActivityResult;
          if (null != value) {
            findActivityResult = PresenceStore.findActivity(value, () => { ... });
          }
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    tmp76 = cResult[40];
  }
  const tmpResult43 = channel(id[62]);
  const stateFromStoresArray6 = channel(id[62]).useStateFromStoresArray(tmp75, tmp76);
  if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          value = iter.next().value;
          let findActivityResult;
          if (null != value) {
            findActivityResult = PresenceStore.findActivity(value, () => { ... });
          }
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    const items19 = [MediaPostEmbedStore];
    class Dt {
      constructor() {
        set = new Set();
        closure_0 = set;
        embeddedActivitiesByChannel = closure_8.getEmbeddedActivitiesByChannel();
        item = embeddedActivitiesByChannel.forEach((arr, index) => {
          closure_0 = index;
          let item = arr.forEach(() => { ... });
        });
        return Array.from(set);
      }
    }
    cResult[41] = items19;
    cResult[42] = tmp81;
    let tmp80 = tmp81;
    const tmp79 = items19;
  } else {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          value = iter.next().value;
          let findActivityResult;
          if (null != value) {
            findActivityResult = PresenceStore.findActivity(value, () => { ... });
          }
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    tmp80 = cResult[42];
  }
  const tmpResult44 = channel(id[62]);
  const stateFromStores5 = channel(id[62]).useStateFromStores(tmp79, tmp80);
  if (cResult[43] === Symbol.for("react.memo_cache_sentinel")) {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          value = iter.next().value;
          let findActivityResult;
          if (null != value) {
            findActivityResult = PresenceStore.findActivity(value, () => { ... });
          }
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    const items20 = [GuildTemplateStore];
    class Bt {
      constructor() {
        return closure_1_23.getGuildTemplates();
      }
    }
    const items21 = [];
    cResult[43] = items20;
    cResult[44] = Bt;
    cResult[45] = items21;
    let tmp85 = items21;
    let tmp84 = Bt;
    const tmp83 = items20;
  } else {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          value = iter.next().value;
          let findActivityResult;
          if (null != value) {
            findActivityResult = PresenceStore.findActivity(value, () => { ... });
          }
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    tmp84 = cResult[44];
    tmp85 = cResult[45];
  }
  const tmpResult45 = channel(id[62]);
  const stateFromStores6 = channel(id[62]).useStateFromStores(tmp83, tmp84, tmp85);
  if (cResult[46] === Symbol.for("react.memo_cache_sentinel")) {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          value = iter.next().value;
          let findActivityResult;
          if (null != value) {
            findActivityResult = PresenceStore.findActivity(value, () => { ... });
          }
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    const items22 = [GameOrganizationInviteStore];
    class Ht {
      constructor() {
        return closure_1_18.getInvites();
      }
    }
    const items23 = [];
    cResult[46] = items22;
    cResult[47] = Ht;
    cResult[48] = items23;
    let tmp89 = items23;
    let tmp88 = Ht;
    const tmp87 = items22;
  } else {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          value = iter.next().value;
          let findActivityResult;
          if (null != value) {
            findActivityResult = PresenceStore.findActivity(value, () => { ... });
          }
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    tmp88 = cResult[47];
    tmp89 = cResult[48];
  }
  const tmpResult46 = channel(id[62]);
  const stateFromStores7 = channel(id[62]).useStateFromStores(tmp87, tmp88, tmp89);
  if (cResult[49] === Symbol.for("react.memo_cache_sentinel")) {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          value = iter.next().value;
          let findActivityResult;
          if (null != value) {
            findActivityResult = PresenceStore.findActivity(value, () => { ... });
          }
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    const items24 = [BuildOverrideStore];
    class Kt {
      constructor() {
        return closure_1_11.getBuildOverrides();
      }
    }
    const items25 = [];
    cResult[49] = items24;
    cResult[50] = Kt;
    cResult[51] = items25;
    let tmp93 = items25;
    let tmp92 = Kt;
    const tmp91 = items24;
  } else {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          value = iter.next().value;
          let findActivityResult;
          if (null != value) {
            findActivityResult = PresenceStore.findActivity(value, () => { ... });
          }
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    tmp92 = cResult[50];
    tmp93 = cResult[51];
  }
  const tmpResult47 = channel(id[62]);
  const stateFromStores8 = channel(id[62]).useStateFromStores(tmp91, tmp92, tmp93);
  const tmpResult48 = channel(id[62]);
  const codedLinksExperimentEmbeds = channel(id[70]).useCodedLinksExperimentEmbeds();
  if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          value = iter.next().value;
          let findActivityResult;
          if (null != value) {
            findActivityResult = PresenceStore.findActivity(value, () => { ... });
          }
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    cResult[52] = tmp97;
    class Kt {
      constructor() {
        return closure_1_11.getBuildOverrides();
      }
    }
  } else {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          value = iter.next().value;
          let findActivityResult;
          if (null != value) {
            findActivityResult = PresenceStore.findActivity(value, () => { ... });
          }
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
  }
  const tmpResult49 = channel(id[70]);
  const quests1 = channel(id[71]).useQuests(tmp96);
  ({ quests, isFetchingCurrentQuests } = quests1);
  if (cResult[53] !== stateFromStores) {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          value = iter.next().value;
          let findActivityResult;
          if (null != value) {
            findActivityResult = PresenceStore.findActivity(value, () => { ... });
          }
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    if (cResult[55] === Symbol.for("react.memo_cache_sentinel")) {
      class Vt {
        constructor() {
          items = [];
          closure_0 = items;
          embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
          _loop = function _loop(iter) {
            const userIds = iter.userIds;
            iter = userIds.values();
            value = iter.next().value;
            let findActivityResult;
            if (null != value) {
              findActivityResult = PresenceStore.findActivity(value, () => { ... });
            }
            let details;
            if (findActivityResult != null) {
              details = findActivityResult.details;
            }
            if (null != details) {
              const _HermesInternal = HermesInternal;
              items.push("" + iter.launchId + ":" + findActivityResult.details);
            }
          };
          iter = embeddedActivitiesForChannel[Symbol.iterator]();
          while (iter !== undefined) {
            _loopResult = _loop(iter.next());
            continue;
          }
          return items;
        }
      }
      cResult[55] = tmp100;
      class Kt {
        constructor() {
          return closure_1_11.getBuildOverrides();
        }
      }
    } else {
      class Vt {
        constructor() {
          items = [];
          closure_0 = items;
          embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
          _loop = function _loop(iter) {
            const userIds = iter.userIds;
            iter = userIds.values();
            value = iter.next().value;
            let findActivityResult;
            if (null != value) {
              findActivityResult = PresenceStore.findActivity(value, () => { ... });
            }
            let details;
            if (findActivityResult != null) {
              details = findActivityResult.details;
            }
            if (null != details) {
              const _HermesInternal = HermesInternal;
              items.push("" + iter.launchId + ":" + findActivityResult.details);
            }
          };
          iter = embeddedActivitiesForChannel[Symbol.iterator]();
          while (iter !== undefined) {
            _loopResult = _loop(iter.next());
            continue;
          }
          return items;
        }
      }
    }
    class Kt {
      constructor() {
        return closure_1_11.getBuildOverrides();
      }
    }
    if (cResult[56] === Symbol.for("react.memo_cache_sentinel")) {
      class Vt {
        constructor() {
          items = [];
          closure_0 = items;
          embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
          _loop = function _loop(iter) {
            const userIds = iter.userIds;
            iter = userIds.values();
            value = iter.next().value;
            let findActivityResult;
            if (null != value) {
              findActivityResult = PresenceStore.findActivity(value, () => { ... });
            }
            let details;
            if (findActivityResult != null) {
              details = findActivityResult.details;
            }
            if (null != details) {
              const _HermesInternal = HermesInternal;
              items.push("" + iter.launchId + ":" + findActivityResult.details);
            }
          };
          iter = embeddedActivitiesForChannel[Symbol.iterator]();
          while (iter !== undefined) {
            _loopResult = _loop(iter.next());
            continue;
          }
          return items;
        }
      }
      cResult[56] = tmp102;
      class Kt {
        constructor() {
          return closure_1_11.getBuildOverrides();
        }
      }
    } else {
      class Vt {
        constructor() {
          items = [];
          closure_0 = items;
          embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
          _loop = function _loop(iter) {
            const userIds = iter.userIds;
            iter = userIds.values();
            value = iter.next().value;
            let findActivityResult;
            if (null != value) {
              findActivityResult = PresenceStore.findActivity(value, () => { ... });
            }
            let details;
            if (findActivityResult != null) {
              details = findActivityResult.details;
            }
            if (null != details) {
              const _HermesInternal = HermesInternal;
              items.push("" + iter.launchId + ":" + findActivityResult.details);
            }
          };
          iter = embeddedActivitiesForChannel[Symbol.iterator]();
          while (iter !== undefined) {
            _loopResult = _loop(iter.next());
            continue;
          }
          return items;
        }
      }
    }
    const found = stateFromStores.filter(filter);
    let mapped = found.map(tmp101);
    filter = mapped.filter;
    const found1 = filter(tmp(tmp2[65]).isNotNullish);
    cResult[53] = stateFromStores;
    cResult[54] = found1;
  } else {
    class Vt {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          value = iter.next().value;
          let findActivityResult;
          if (null != value) {
            findActivityResult = PresenceStore.findActivity(value, () => { ... });
          }
          let details;
          if (findActivityResult != null) {
            details = findActivityResult.details;
          }
          if (null != details) {
            const _HermesInternal = HermesInternal;
            items.push("" + iter.launchId + ":" + findActivityResult.details);
          }
        };
        iter = embeddedActivitiesForChannel[Symbol.iterator]();
        while (iter !== undefined) {
          _loopResult = _loop(iter.next());
          continue;
        }
        return items;
      }
    }
    noop = tmp99;
    const _Symbol = Symbol;
    class Kt {
      constructor() {
        return closure_1_11.getBuildOverrides();
      }
    }
    if (tmp105 === Symbol.for("react.memo_cache_sentinel")) {
      class Vt {
        constructor() {
          items = [];
          closure_0 = items;
          embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
          _loop = function _loop(iter) {
            const userIds = iter.userIds;
            iter = userIds.values();
            value = iter.next().value;
            let findActivityResult;
            if (null != value) {
              findActivityResult = PresenceStore.findActivity(value, () => { ... });
            }
            let details;
            if (findActivityResult != null) {
              details = findActivityResult.details;
            }
            if (null != details) {
              const _HermesInternal = HermesInternal;
              items.push("" + iter.launchId + ":" + findActivityResult.details);
            }
          };
          iter = embeddedActivitiesForChannel[Symbol.iterator]();
          while (iter !== undefined) {
            _loopResult = _loop(iter.next());
            continue;
          }
          return items;
        }
      }
      const items26 = [ReferralTrialStore];
      class Kt {
        constructor() {
          return closure_1_11.getBuildOverrides();
        }
      }
      cResult[57] = items26;
      const tmp106 = items26;
    } else {
      class Vt {
        constructor() {
          items = [];
          closure_0 = items;
          embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
          _loop = function _loop(iter) {
            const userIds = iter.userIds;
            iter = userIds.values();
            value = iter.next().value;
            let findActivityResult;
            if (null != value) {
              findActivityResult = PresenceStore.findActivity(value, () => { ... });
            }
            let details;
            if (findActivityResult != null) {
              details = findActivityResult.details;
            }
            if (null != details) {
              const _HermesInternal = HermesInternal;
              items.push("" + iter.launchId + ":" + findActivityResult.details);
            }
          };
          iter = embeddedActivitiesForChannel[Symbol.iterator]();
          while (iter !== undefined) {
            _loopResult = _loop(iter.next());
            continue;
          }
          return items;
        }
      }
    }
    if (cResult[58] !== tmp99) {
      class Vt {
        constructor() {
          items = [];
          closure_0 = items;
          embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
          _loop = function _loop(iter) {
            const userIds = iter.userIds;
            iter = userIds.values();
            value = iter.next().value;
            let findActivityResult;
            if (null != value) {
              findActivityResult = PresenceStore.findActivity(value, () => { ... });
            }
            let details;
            if (findActivityResult != null) {
              details = findActivityResult.details;
            }
            if (null != details) {
              const _HermesInternal = HermesInternal;
              items.push("" + iter.launchId + ":" + findActivityResult.details);
            }
          };
          iter = embeddedActivitiesForChannel[Symbol.iterator]();
          while (iter !== undefined) {
            _loopResult = _loop(iter.next());
            continue;
          }
          return items;
        }
      }
      cResult[58] = tmp99;
      class Kt {
        constructor() {
          return closure_1_11.getBuildOverrides();
        }
      }
      cResult[59] = tmp108;
    } else {
      class Vt {
        constructor() {
          items = [];
          closure_0 = items;
          embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
          _loop = function _loop(iter) {
            const userIds = iter.userIds;
            iter = userIds.values();
            value = iter.next().value;
            let findActivityResult;
            if (null != value) {
              findActivityResult = PresenceStore.findActivity(value, () => { ... });
            }
            let details;
            if (findActivityResult != null) {
              details = findActivityResult.details;
            }
            if (null != details) {
              const _HermesInternal = HermesInternal;
              items.push("" + iter.launchId + ":" + findActivityResult.details);
            }
          };
          iter = embeddedActivitiesForChannel[Symbol.iterator]();
          while (iter !== undefined) {
            _loopResult = _loop(iter.next());
            continue;
          }
          return items;
        }
      }
    }
    const stateFromStoresArray7 = tmp(tmp2[62]).useStateFromStoresArray(tmp106, tmp108);
    const tmpResult51 = tmp(tmp2[62]);
    const trialOffer = tmp(tmp2[72]).useTrialOffer(closure_66);
    const _Symbol2 = Symbol;
    if (cResult[60] === Symbol.for("react.memo_cache_sentinel")) {
      class Vt {
        constructor() {
          items = [];
          closure_0 = items;
          embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
          _loop = function _loop(iter) {
            const userIds = iter.userIds;
            iter = userIds.values();
            value = iter.next().value;
            let findActivityResult;
            if (null != value) {
              findActivityResult = PresenceStore.findActivity(value, () => { ... });
            }
            let details;
            if (findActivityResult != null) {
              details = findActivityResult.details;
            }
            if (null != details) {
              const _HermesInternal = HermesInternal;
              items.push("" + iter.launchId + ":" + findActivityResult.details);
            }
          };
          iter = embeddedActivitiesForChannel[Symbol.iterator]();
          while (iter !== undefined) {
            _loopResult = _loop(iter.next());
            continue;
          }
          return items;
        }
      }
      const items27 = [UserStore];
      class Kt {
        constructor() {
          return closure_1_11.getBuildOverrides();
        }
      }
      cResult[60] = items27;
      cResult[61] = tmp114;
      let tmp113 = tmp114;
      const tmp112 = items27;
    } else {
      class Vt {
        constructor() {
          items = [];
          closure_0 = items;
          embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
          _loop = function _loop(iter) {
            const userIds = iter.userIds;
            iter = userIds.values();
            value = iter.next().value;
            let findActivityResult;
            if (null != value) {
              findActivityResult = PresenceStore.findActivity(value, () => { ... });
            }
            let details;
            if (findActivityResult != null) {
              details = findActivityResult.details;
            }
            if (null != details) {
              const _HermesInternal = HermesInternal;
              items.push("" + iter.launchId + ":" + findActivityResult.details);
            }
          };
          iter = embeddedActivitiesForChannel[Symbol.iterator]();
          while (iter !== undefined) {
            _loopResult = _loop(iter.next());
            continue;
          }
          return items;
        }
      }
      tmp113 = cResult[61];
    }
    const tmpResult52 = tmp(tmp2[72]);
    const stateFromStores9 = tmp(tmp2[62]).useStateFromStores(tmp112, tmp113);
    const _Symbol3 = Symbol;
    if (cResult[62] === Symbol.for("react.memo_cache_sentinel")) {
      class Vt {
        constructor() {
          items = [];
          closure_0 = items;
          embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
          _loop = function _loop(iter) {
            const userIds = iter.userIds;
            iter = userIds.values();
            value = iter.next().value;
            let findActivityResult;
            if (null != value) {
              findActivityResult = PresenceStore.findActivity(value, () => { ... });
            }
            let details;
            if (findActivityResult != null) {
              details = findActivityResult.details;
            }
            if (null != details) {
              const _HermesInternal = HermesInternal;
              items.push("" + iter.launchId + ":" + findActivityResult.details);
            }
          };
          iter = embeddedActivitiesForChannel[Symbol.iterator]();
          while (iter !== undefined) {
            _loopResult = _loop(iter.next());
            continue;
          }
          return items;
        }
      }
      const items28 = [EditMessageStore];
      class Kt {
        constructor() {
          return closure_1_11.getBuildOverrides();
        }
      }
      cResult[62] = items28;
      const tmp116 = items28;
    } else {
      class Vt {
        constructor() {
          items = [];
          closure_0 = items;
          embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
          _loop = function _loop(iter) {
            const userIds = iter.userIds;
            iter = userIds.values();
            value = iter.next().value;
            let findActivityResult;
            if (null != value) {
              findActivityResult = PresenceStore.findActivity(value, () => { ... });
            }
            let details;
            if (findActivityResult != null) {
              details = findActivityResult.details;
            }
            if (null != details) {
              const _HermesInternal = HermesInternal;
              items.push("" + iter.launchId + ":" + findActivityResult.details);
            }
          };
          iter = embeddedActivitiesForChannel[Symbol.iterator]();
          while (iter !== undefined) {
            _loopResult = _loop(iter.next());
            continue;
          }
          return items;
        }
      }
    }
    if (cResult[63] !== id) {
      class Vt {
        constructor() {
          items = [];
          closure_0 = items;
          embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
          _loop = function _loop(iter) {
            const userIds = iter.userIds;
            iter = userIds.values();
            value = iter.next().value;
            let findActivityResult;
            if (null != value) {
              findActivityResult = PresenceStore.findActivity(value, () => { ... });
            }
            let details;
            if (findActivityResult != null) {
              details = findActivityResult.details;
            }
            if (null != details) {
              const _HermesInternal = HermesInternal;
              items.push("" + iter.launchId + ":" + findActivityResult.details);
            }
          };
          iter = embeddedActivitiesForChannel[Symbol.iterator]();
          while (iter !== undefined) {
            _loopResult = _loop(iter.next());
            continue;
          }
          return items;
        }
      }
      const items29 = [id];
      class Kt {
        constructor() {
          return closure_1_11.getBuildOverrides();
        }
      }
      cResult[63] = id;
      cResult[64] = tmp119;
      cResult[65] = items29;
      let tmp118 = items29;
    } else {
      class Vt {
        constructor() {
          items = [];
          closure_0 = items;
          embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
          _loop = function _loop(iter) {
            const userIds = iter.userIds;
            iter = userIds.values();
            value = iter.next().value;
            let findActivityResult;
            if (null != value) {
              findActivityResult = PresenceStore.findActivity(value, () => { ... });
            }
            let details;
            if (findActivityResult != null) {
              details = findActivityResult.details;
            }
            if (null != details) {
              const _HermesInternal = HermesInternal;
              items.push("" + iter.launchId + ":" + findActivityResult.details);
            }
          };
          iter = embeddedActivitiesForChannel[Symbol.iterator]();
          while (iter !== undefined) {
            _loopResult = _loop(iter.next());
            continue;
          }
          return items;
        }
      }
      tmp118 = cResult[65];
    }
    const tmpResult53 = tmp(tmp2[62]);
    const stateFromStores10 = tmp(tmp2[62]).useStateFromStores(tmp116, tmp119, tmp118);
    const _Symbol4 = Symbol;
    if (cResult[66] === Symbol.for("react.memo_cache_sentinel")) {
      class Vt {
        constructor() {
          items = [];
          closure_0 = items;
          embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
          _loop = function _loop(iter) {
            const userIds = iter.userIds;
            iter = userIds.values();
            value = iter.next().value;
            let findActivityResult;
            if (null != value) {
              findActivityResult = PresenceStore.findActivity(value, () => { ... });
            }
            let details;
            if (findActivityResult != null) {
              details = findActivityResult.details;
            }
            if (null != details) {
              const _HermesInternal = HermesInternal;
              items.push("" + iter.launchId + ":" + findActivityResult.details);
            }
          };
          iter = embeddedActivitiesForChannel[Symbol.iterator]();
          while (iter !== undefined) {
            _loopResult = _loop(iter.next());
            continue;
          }
          return items;
        }
      }
      const items30 = [PendingReplyStore];
      class Kt {
        constructor() {
          return closure_1_11.getBuildOverrides();
        }
      }
      cResult[66] = items30;
      const tmp121 = items30;
    } else {
      class Vt {
        constructor() {
          items = [];
          closure_0 = items;
          embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
          _loop = function _loop(iter) {
            const userIds = iter.userIds;
            iter = userIds.values();
            value = iter.next().value;
            let findActivityResult;
            if (null != value) {
              findActivityResult = PresenceStore.findActivity(value, () => { ... });
            }
            let details;
            if (findActivityResult != null) {
              details = findActivityResult.details;
            }
            if (null != details) {
              const _HermesInternal = HermesInternal;
              items.push("" + iter.launchId + ":" + findActivityResult.details);
            }
          };
          iter = embeddedActivitiesForChannel[Symbol.iterator]();
          while (iter !== undefined) {
            _loopResult = _loop(iter.next());
            continue;
          }
          return items;
        }
      }
    }
    if (cResult[67] !== id) {
      class Vt {
        constructor() {
          items = [];
          closure_0 = items;
          embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
          _loop = function _loop(iter) {
            const userIds = iter.userIds;
            iter = userIds.values();
            value = iter.next().value;
            let findActivityResult;
            if (null != value) {
              findActivityResult = PresenceStore.findActivity(value, () => { ... });
            }
            let details;
            if (findActivityResult != null) {
              details = findActivityResult.details;
            }
            if (null != details) {
              const _HermesInternal = HermesInternal;
              items.push("" + iter.launchId + ":" + findActivityResult.details);
            }
          };
          iter = embeddedActivitiesForChannel[Symbol.iterator]();
          while (iter !== undefined) {
            _loopResult = _loop(iter.next());
            continue;
          }
          return items;
        }
      }
      const items31 = [id];
      class Kt {
        constructor() {
          return closure_1_11.getBuildOverrides();
        }
      }
      cResult[67] = id;
      cResult[68] = tmp124;
      cResult[69] = items31;
      let tmp123 = items31;
    } else {
      class Vt {
        constructor() {
          items = [];
          closure_0 = items;
          embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
          _loop = function _loop(iter) {
            const userIds = iter.userIds;
            iter = userIds.values();
            value = iter.next().value;
            let findActivityResult;
            if (null != value) {
              findActivityResult = PresenceStore.findActivity(value, () => { ... });
            }
            let details;
            if (findActivityResult != null) {
              details = findActivityResult.details;
            }
            if (null != details) {
              const _HermesInternal = HermesInternal;
              items.push("" + iter.launchId + ":" + findActivityResult.details);
            }
          };
          iter = embeddedActivitiesForChannel[Symbol.iterator]();
          while (iter !== undefined) {
            _loopResult = _loop(iter.next());
            continue;
          }
          return items;
        }
      }
      tmp123 = cResult[69];
    }
    const tmpResult54 = tmp(tmp2[62]);
    const stateFromStores11 = tmp(tmp2[62]).useStateFromStores(tmp121, tmp124, tmp123);
    const _Symbol5 = Symbol;
    if (cResult[70] === Symbol.for("react.memo_cache_sentinel")) {
      class Vt {
        constructor() {
          items = [];
          closure_0 = items;
          embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
          _loop = function _loop(iter) {
            const userIds = iter.userIds;
            iter = userIds.values();
            value = iter.next().value;
            let findActivityResult;
            if (null != value) {
              findActivityResult = PresenceStore.findActivity(value, () => { ... });
            }
            let details;
            if (findActivityResult != null) {
              details = findActivityResult.details;
            }
            if (null != details) {
              const _HermesInternal = HermesInternal;
              items.push("" + iter.launchId + ":" + findActivityResult.details);
            }
          };
          iter = embeddedActivitiesForChannel[Symbol.iterator]();
          while (iter !== undefined) {
            _loopResult = _loop(iter.next());
            continue;
          }
          return items;
        }
      }
      const items32 = [ReadStateStore];
      class Kt {
        constructor() {
          return closure_1_11.getBuildOverrides();
        }
      }
      cResult[70] = items32;
      const tmp126 = items32;
    } else {
      class Vt {
        constructor() {
          items = [];
          closure_0 = items;
          embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
          _loop = function _loop(iter) {
            const userIds = iter.userIds;
            iter = userIds.values();
            value = iter.next().value;
            let findActivityResult;
            if (null != value) {
              findActivityResult = PresenceStore.findActivity(value, () => { ... });
            }
            let details;
            if (findActivityResult != null) {
              details = findActivityResult.details;
            }
            if (null != details) {
              const _HermesInternal = HermesInternal;
              items.push("" + iter.launchId + ":" + findActivityResult.details);
            }
          };
          iter = embeddedActivitiesForChannel[Symbol.iterator]();
          while (iter !== undefined) {
            _loopResult = _loop(iter.next());
            continue;
          }
          return items;
        }
      }
    }
    if (cResult[71] !== id) {
      class Is {
        constructor() {
          return closure_53.getOldestUnreadMessageId(id);
        }
      }
      const items33 = [id];
      class Kt {
        constructor() {
          return closure_1_11.getBuildOverrides();
        }
      }
      cResult[71] = id;
      cResult[72] = Is;
      cResult[73] = items33;
      let tmp128 = items33;
    } else {
      class Is {
        constructor() {
          return closure_53.getOldestUnreadMessageId(id);
        }
      }
      tmp128 = cResult[73];
    }
    const tmpResult55 = tmp(tmp2[62]);
    const stateFromStores12 = tmp(tmp2[62]).useStateFromStores(tmp126, Is, tmp128);
    const _Symbol6 = Symbol;
    if (cResult[74] === Symbol.for("react.memo_cache_sentinel")) {
      class Is {
        constructor() {
          return closure_53.getOldestUnreadMessageId(id);
        }
      }
      const items34 = [GuildVerificationStore];
      class Kt {
        constructor() {
          return closure_1_11.getBuildOverrides();
        }
      }
      cResult[74] = items34;
      const tmp130 = items34;
    } else {
      class Is {
        constructor() {
          return closure_53.getOldestUnreadMessageId(id);
        }
      }
    }
    if (cResult[75] !== tmp14) {
      class Es {
        constructor() {
          canChatInGuildResult = null != closure_3;
          if (canChatInGuildResult) {
            tmp3 = closure_47;
            canChatInGuildResult = closure_47.canChatInGuild(tmp);
          }
          return canChatInGuildResult;
        }
      }
      const items35 = [tmp14];
      class Kt {
        constructor() {
          return closure_1_11.getBuildOverrides();
        }
      }
      cResult[75] = tmp14;
      cResult[76] = Es;
      cResult[77] = items35;
      let tmp132 = items35;
    } else {
      class Es {
        constructor() {
          canChatInGuildResult = null != closure_3;
          if (canChatInGuildResult) {
            tmp3 = closure_47;
            canChatInGuildResult = closure_47.canChatInGuild(tmp);
          }
          return canChatInGuildResult;
        }
      }
      tmp132 = cResult[77];
    }
    const tmpResult56 = tmp(tmp2[62]);
    const stateFromStores13 = tmp(tmp2[62]).useStateFromStores(tmp130, Es, tmp132);
    const _Symbol7 = Symbol;
    if (cResult[78] === Symbol.for("react.memo_cache_sentinel")) {
      class Es {
        constructor() {
          canChatInGuildResult = null != closure_3;
          if (canChatInGuildResult) {
            tmp3 = closure_47;
            canChatInGuildResult = closure_47.canChatInGuild(tmp);
          }
          return canChatInGuildResult;
        }
      }
      const items36 = [PermissionStore];
      class Kt {
        constructor() {
          return closure_1_11.getBuildOverrides();
        }
      }
      cResult[78] = items36;
      const tmp134 = items36;
    } else {
      class Es {
        constructor() {
          canChatInGuildResult = null != closure_3;
          if (canChatInGuildResult) {
            tmp3 = closure_47;
            canChatInGuildResult = closure_47.canChatInGuild(tmp);
          }
          return canChatInGuildResult;
        }
      }
    }
    if (cResult[79] !== channel) {
      class Ts {
        constructor() {
          return closure_50.can(Permissions.SEND_MESSAGES, channel);
        }
      }
      const items37 = [channel];
      class Kt {
        constructor() {
          return closure_1_11.getBuildOverrides();
        }
      }
      cResult[79] = channel;
      cResult[80] = Ts;
      cResult[81] = items37;
      let tmp136 = items37;
    } else {
      class Ts {
        constructor() {
          return closure_50.can(Permissions.SEND_MESSAGES, channel);
        }
      }
      tmp136 = cResult[81];
    }
    const tmpResult57 = tmp(tmp2[62]);
    const stateFromStores14 = tmp(tmp2[62]).useStateFromStores(tmp134, Ts, tmp136);
    tmp41(tmp2[74])(id);
    const _Symbol8 = Symbol;
    if (cResult[82] === Symbol.for("react.memo_cache_sentinel")) {
      class Ts {
        constructor() {
          return closure_50.can(Permissions.SEND_MESSAGES, channel);
        }
      }
      const items38 = [VoiceStateStore];
      class Kt {
        constructor() {
          return closure_1_11.getBuildOverrides();
        }
      }
      cResult[82] = items38;
      const tmp139 = items38;
    } else {
      class Ts {
        constructor() {
          return closure_50.can(Permissions.SEND_MESSAGES, channel);
        }
      }
    }
    if (cResult[83] !== stateFromStores2) {
      class Ts {
        constructor() {
          return closure_50.can(Permissions.SEND_MESSAGES, channel);
        }
      }
      const items39 = [stateFromStores2];
      class Kt {
        constructor() {
          return closure_1_11.getBuildOverrides();
        }
      }
      cResult[83] = stateFromStores2;
      cResult[84] = tmp142;
      cResult[85] = items39;
      let tmp141 = items39;
    } else {
      class Ts {
        constructor() {
          return closure_50.can(Permissions.SEND_MESSAGES, channel);
        }
      }
      tmp141 = cResult[85];
    }
    const tmpResult58 = tmp(tmp2[62]);
    const stateFromStores15 = tmp(tmp2[62]).useStateFromStores(tmp139, tmp142, tmp141);
    const _Symbol9 = Symbol;
    if (cResult[86] === Symbol.for("react.memo_cache_sentinel")) {
      class Ts {
        constructor() {
          return closure_50.can(Permissions.SEND_MESSAGES, channel);
        }
      }
      const items40 = [RTCConnectionStore];
      class Us {
        constructor() {
          return closure_1_52.getChannelId();
        }
      }
      const items41 = [];
      cResult[86] = items40;
      cResult[87] = Us;
      cResult[88] = items41;
      let tmp146 = items41;
      let tmp145 = Us;
      const tmp144 = items40;
    } else {
      class Ts {
        constructor() {
          return closure_50.can(Permissions.SEND_MESSAGES, channel);
        }
      }
      tmp145 = cResult[87];
      tmp146 = cResult[88];
    }
    const tmpResult59 = tmp(tmp2[62]);
    const stateFromStores16 = tmp(tmp2[62]).useStateFromStores(tmp144, tmp145, tmp146);
    const _Symbol10 = Symbol;
    if (cResult[89] === Symbol.for("react.memo_cache_sentinel")) {
      class Ts {
        constructor() {
          return closure_50.can(Permissions.SEND_MESSAGES, channel);
        }
      }
      const items42 = [ReferencedMessageStore];
      class Us {
        constructor() {
          return closure_1_52.getChannelId();
        }
      }
      cResult[89] = items42;
    } else {
      class Ts {
        constructor() {
          return closure_50.can(Permissions.SEND_MESSAGES, channel);
        }
      }
    }
    if (cResult[90] === channel.guild_id) {
      class Ts {
        constructor() {
          return closure_50.can(Permissions.SEND_MESSAGES, channel);
        }
      }
    }
    function $s() {
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
    }
    cResult[90] = channel.guild_id;
    cResult[91] = channel.id;
    cResult[92] = channel.parent_id;
    cResult[93] = channel.type;
    cResult[94] = $s;
    const tmpResult60 = tmp(tmp2[62]);
  }
  const tmpResult50 = channel(id[71]);
}) : (function MessagesConnected(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  let id;
  let stateFromStores2;
  noop = undefined;
  let channelSummariesExperiment;
  let items64;
  let stateFromStoresArray8;
  let channel = merged.channel;
  const tmp2 = channel;
  let tmp3 = id;
  let items = [MessageStore];
  const items1 = [channel.id];
  const stateFromStores = channel(id[62]).useStateFromStores(items, () => MessageStore.getMessages(channel.id), items1);
  id = channel.id;
  const guildId = channel.getGuildId();
  let obj = channel(id[62]);
  const items2 = [GuildStore];
  const stateFromStores1 = channel(id[62]).useStateFromStores(items2, () => GuildStore.getGuild(guildId));
  let systemChannelFlags;
  if (stateFromStores1 != null) {
    systemChannelFlags = stateFromStores1.systemChannelFlags;
  }
  const obj2 = channel(id[62]);
  const items3 = [AuthenticationStore];
  stateFromStores2 = tmp2(tmp3[62]).useStateFromStores(items3, () => id.getId(), []);
  const InlineAttachmentMedia = tmp2(tmp3[66]).InlineAttachmentMedia;
  const setting = InlineAttachmentMedia.useSetting();
  const InlineEmbedMedia = tmp2(tmp3[66]).InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.useSetting();
  const RenderEmbeds = tmp2(tmp3[66]).RenderEmbeds;
  const setting2 = RenderEmbeds.useSetting();
  const RenderReactions = tmp2(tmp3[66]).RenderReactions;
  const setting3 = RenderReactions.useSetting();
  const DeveloperMode = tmp2(tmp3[66]).DeveloperMode;
  const setting4 = DeveloperMode.useSetting();
  const AnimateEmoji = tmp2(tmp3[66]).AnimateEmoji;
  const setting5 = AnimateEmoji.useSetting();
  const AnimateStickers = tmp2(tmp3[66]).AnimateStickers;
  const setting6 = AnimateStickers.useSetting();
  const GifAutoPlay = tmp2(tmp3[66]).GifAutoPlay;
  const setting7 = GifAutoPlay.useSetting();
  const TimestampHourCycle = tmp2(tmp3[66]).TimestampHourCycle;
  const setting8 = TimestampHourCycle.useSetting();
  const tmp2Result = tmp2(tmp3[62]);
  const items4 = [ThemeStore];
  const stateFromStores3 = tmp2(tmp3[62]).useStateFromStores(items4, () => theme.theme, []);
  const tmp2Result77 = tmp2(tmp3[62]);
  const isMessageSwipeActionsEnabled = tmp2(tmp3[67]).useIsMessageSwipeActionsEnabled();
  const linkedLobby = channel.linkedLobby;
  let application_id;
  const tmp2Result78 = tmp2(tmp3[67]);
  if (linkedLobby != null) {
    application_id = linkedLobby.application_id;
  }
  closure_71(stateFromStores, application_id);
  const tmp19 = closure_70(stateFromStores);
  const tmp24 = stateFromStores1;
  [tmp26, r10112] = stateFromStores1(stateFromStores(tmp3[68])(stateFromStores, channel), 2);
  const tmp25 = stateFromStores1(stateFromStores(tmp3[68])(stateFromStores, channel), 2);
  const items5 = [InviteStore];
  const stateFromStores4 = tmp2(tmp3[62]).useStateFromStores(items5, () => InviteStore.getInvites(), []);
  const tmp2Result79 = tmp2(tmp3[62]);
  const fetchVoiceChannelInviteStartTimes = tmp2(tmp3[69]).useFetchVoiceChannelInviteStartTimes(stateFromStores4);
  const tmp2Result80 = tmp2(tmp3[69]);
  const items6 = [ApplicationDirectoryApplicationsStore];
  const stateFromStoresObject = tmp2(tmp3[62]).useStateFromStoresObject(items6, () => ({ appDirectoryEmbedApplications: ApplicationDirectoryApplicationsStore.getApplications(), invalidAppDirectoryEmbedApplicationIds: ApplicationDirectoryApplicationsStore.getInvalidApplicationIds(), appDirectoryEmbedApplicationFetchStates: ApplicationDirectoryApplicationsStore.getApplicationFetchStates() }), []);
  ({ appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, appDirectoryEmbedApplicationFetchStates } = stateFromStoresObject);
  const tmp2Result81 = tmp2(tmp3[62]);
  const items7 = [ApplicationStore];
  const stateFromStoresArray = tmp2(tmp3[62]).useStateFromStoresArray(items7, () => fetchingOrFailedFetchingIds.getFetchingOrFailedFetchingIds());
  const tmp2Result82 = tmp2(tmp3[62]);
  const items8 = [stateFromStoresArray8];
  const stateFromStoresArray1 = tmp2(tmp3[62]).useStateFromStoresArray(items8, () => stateFromStoresArray8.getFetchingIds());
  const tmp2Result83 = tmp2(tmp3[62]);
  const items9 = [SKUStore];
  const stateFromStoresArray2 = tmp2(tmp3[62]).useStateFromStoresArray(items9, () => fetchingSkuIds.getFetchingSkuIds());
  const tmp2Result84 = tmp2(tmp3[62]);
  const items10 = [items64];
  const items11 = [id];
  const stateFromStoresArray3 = tmp2(tmp3[62]).useStateFromStoresArray(items10, () => {
    const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(id);
    const mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items11);
  const tmp2Result85 = tmp2(tmp3[62]);
  const items12 = [items64, PresenceStore];
  const stateFromStoresArray4 = tmp2(tmp3[62]).useStateFromStoresArray(items12, () => {
    const items = [];
    const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(id);
    function _loop2(iter) {
      const userIds = iter.userIds;
      iter = userIds.values();
      value = iter.next().value;
      let findActivityResult;
      if (null != value) {
        findActivityResult = PresenceStore.findActivity(value, (application_id) => application_id.application_id === iter.applicationId);
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
      let _loop2Result = _loop2(iter.next());
      continue;
    }
    return items;
  });
  const tmp2Result86 = tmp2(tmp3[62]);
  const items13 = [items64];
  const stateFromStoresArray5 = tmp2(tmp3[62]).useStateFromStoresArray(items13, () => {
    const set = new Set();
    const embeddedActivitiesByChannel = items64.getEmbeddedActivitiesByChannel();
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
  const tmp2Result87 = tmp2(tmp3[62]);
  const items14 = [items64];
  const stateFromStoresArray6 = tmp2(tmp3[62]).useStateFromStoresArray(items14, () => {
    const launchStates = items64.getLaunchStates();
    const items = [];
    while (tmp2 !== undefined) {
      let tmp5 = stateFromStores1(tmp3, 2);
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
  const tmp2Result88 = tmp2(tmp3[62]);
  const items15 = [MediaPostEmbedStore];
  const stateFromStores5 = tmp2(tmp3[62]).useStateFromStores(items15, () => mediaPostEmbeds.getMediaPostEmbeds());
  const tmp2Result89 = tmp2(tmp3[62]);
  const items16 = [GuildTemplateStore];
  const stateFromStores6 = tmp2(tmp3[62]).useStateFromStores(items16, () => guildTemplates.getGuildTemplates(), []);
  const tmp2Result90 = tmp2(tmp3[62]);
  const items17 = [GameOrganizationInviteStore];
  const stateFromStores7 = tmp2(tmp3[62]).useStateFromStores(items17, () => invites.getInvites(), []);
  const tmp2Result91 = tmp2(tmp3[62]);
  const items18 = [BuildOverrideStore];
  const stateFromStores8 = tmp2(tmp3[62]).useStateFromStores(items18, () => buildOverrides.getBuildOverrides(), []);
  const tmp2Result92 = tmp2(tmp3[62]);
  const codedLinksExperimentEmbeds = tmp2(tmp3[70]).useCodedLinksExperimentEmbeds();
  const tmp2Result93 = tmp2(tmp3[70]);
  const quests1 = tmp2(tmp3[71]).useQuests({ fetchPolicy: "cache-or-network", callerSource: "messages_native" });
  ({ quests, isFetchingCurrentQuests } = quests1);
  const found = stateFromStores.filter((type) => type.type === constants.PREMIUM_REFERRAL);
  let mapped = found.map((referralTrialOfferId) => referralTrialOfferId.referralTrialOfferId);
  noop = mapped.filter(tmp2(tmp3[65]).isNotNullish);
  const tmp2Result94 = tmp2(tmp3[71]);
  const items19 = [ReferralTrialStore];
  const stateFromStoresArray7 = tmp2(tmp3[62]).useStateFromStoresArray(items19, () => {
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
  const tmp2Result95 = tmp2(tmp3[62]);
  const trialOffer = tmp2(tmp3[72]).useTrialOffer(closure_66);
  const tmp2Result96 = tmp2(tmp3[72]);
  const items20 = [UserStore];
  const stateFromStores9 = tmp2(tmp3[62]).useStateFromStores(items20, () => stateFromStores(id[73]).isPremiumExactly(authStore2.getCurrentUser(), TIER_2.TIER_2));
  const tmp2Result97 = tmp2(tmp3[62]);
  const items21 = [EditMessageStore];
  const items22 = [id];
  const stateFromStores10 = tmp2(tmp3[62]).useStateFromStores(items21, () => EditMessageStore.getEditingMessageId(id), items22);
  const tmp2Result98 = tmp2(tmp3[62]);
  const items23 = [PendingReplyStore];
  const items24 = [id];
  const stateFromStores11 = tmp2(tmp3[62]).useStateFromStores(items23, () => {
    const pendingReply = PendingReplyStore.getPendingReply(id);
    id = undefined;
    if (pendingReply != null) {
      id = pendingReply.message.id;
    }
    return id;
  }, items24);
  const tmp2Result99 = tmp2(tmp3[62]);
  const items25 = [ReadStateStore];
  const items26 = [id];
  const stateFromStores12 = tmp2(tmp3[62]).useStateFromStores(items25, () => ReadStateStore.getOldestUnreadMessageId(id), items26);
  const tmp2Result100 = tmp2(tmp3[62]);
  const items27 = [GuildVerificationStore];
  const items28 = [guildId];
  const stateFromStores13 = tmp2(tmp3[62]).useStateFromStores(items27, () => {
    let canChatInGuildResult = null != guildId;
    if (canChatInGuildResult) {
      canChatInGuildResult = GuildVerificationStore.canChatInGuild(tmp);
    }
    return canChatInGuildResult;
  }, items28);
  const tmp2Result101 = tmp2(tmp3[62]);
  const items29 = [PermissionStore];
  const items30 = [channel];
  const stateFromStores14 = tmp2(tmp3[62]).useStateFromStores(items29, () => PermissionStore.can(constants2.SEND_MESSAGES, channel), items30);
  const tmp2Result102 = tmp2(tmp3[62]);
  const tmp54 = stateFromStores(tmp3[74])(id);
  const items31 = [VoiceStateStore];
  const items32 = [stateFromStores2];
  const stateFromStores15 = tmp2(tmp3[62]).useStateFromStores(items31, () => VoiceStateStore.getUserVoiceChannelId(closure_2_63, stateFromStores2), items32);
  const tmp2Result103 = tmp2(tmp3[62]);
  const items33 = [RTCConnectionStore];
  const stateFromStores16 = tmp2(tmp3[62]).useStateFromStores(items33, () => channelId.getChannelId(), []);
  const tmp2Result104 = tmp2(tmp3[62]);
  const items34 = [ReferencedMessageStore];
  const items35 = [channel];
  const stateFromStores17 = tmp2(tmp3[62]).useStateFromStores(items34, () => {
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
  }, items35);
  const tmp2Result105 = tmp2(tmp3[62]);
  const items36 = [GiftCodeStore];
  const stateFromStoresObject1 = tmp2(tmp3[62]).useStateFromStoresObject(items36, () => ({ resolvingGiftCodes: GiftCodeStore.getResolvingCodes(), resolvedGiftCodes: GiftCodeStore.getResolvedCodes(), acceptingGiftCodes: GiftCodeStore.getAcceptingCodes() }), []);
  ({ resolvingGiftCodes, resolvedGiftCodes, acceptingGiftCodes } = stateFromStoresObject1);
  const tmp2Result106 = tmp2(tmp3[62]);
  const items37 = [ChannelRTCStore];
  const items38 = [id];
  const stateFromStores18 = tmp2(tmp3[62]).useStateFromStores(items37, () => ChannelRTCStore.getParticipants(id).length, items38);
  const tmp2Result107 = tmp2(tmp3[62]);
  const items39 = [UploadStore];
  const items40 = [id];
  const stateFromStores19 = tmp2(tmp3[62]).useStateFromStores(items39, () => UploadStore.getFiles(id), items40);
  const tmp2Result108 = tmp2(tmp3[62]);
  const items41 = [ReferencedMessageStore];
  const items42 = [id];
  const stateFromStores20 = tmp2(tmp3[62]).useStateFromStores(items41, () => ReferencedMessageStore.getReplyIdsForChannel(id), items42);
  const tmp2Result109 = tmp2(tmp3[62]);
  const items43 = [channelSummariesExperiment];
  const stateFromStoresObject2 = tmp2(tmp3[62]).useStateFromStoresObject(items43, () => ({ useReducedMotion: channelSummariesExperiment.useReducedMotion, roleStyle: channelSummariesExperiment.roleStyle, officialMessageStyle: channelSummariesExperiment.officialMessageStyle, saturation: channelSummariesExperiment.saturation, displayNameStylesEnabled: channelSummariesExperiment.displayNameStylesEnabled }), []);
  ({ useReducedMotion, roleStyle, officialMessageStyle, saturation, displayNameStylesEnabled } = stateFromStoresObject2);
  const tmp2Result110 = tmp2(tmp3[62]);
  const items44 = [ThreadMessageStore];
  const items45 = [id];
  const stateFromStores21 = tmp2(tmp3[62]).useStateFromStores(items44, () => ThreadMessageStore.getChannelThreadsVersion(id), items45);
  const tmp2Result111 = tmp2(tmp3[62]);
  const items46 = [InteractionStore];
  const stateFromStoresObject3 = tmp2(tmp3[62]).useStateFromStoresObject(items46, () => messageInteractionStates.getMessageInteractionStates());
  const tmp2Result112 = tmp2(tmp3[62]);
  const items47 = [LocalInteractionComponentStateStore];
  const tmp2Result113 = tmp2(tmp3[62]);
  [tmp67, tmp68] = stateFromStores1(tmp2(tmp3[62]).useStateFromStores(items47, () => {
    const items = [LocalInteractionComponentStateStore.getInteractionComponentStates(), LocalInteractionComponentStateStore.getInteractionComponentStateVersion()];
    return items;
  }, [], tmp2(tmp3[75]).isVersionEqual), 2);
  const tmp66 = stateFromStores1(tmp2(tmp3[62]).useStateFromStores(items47, () => {
    const items = [LocalInteractionComponentStateStore.getInteractionComponentStates(), LocalInteractionComponentStateStore.getInteractionComponentStateVersion()];
    return items;
  }, [], tmp2(tmp3[75]).isVersionEqual), 2);
  const items48 = [ExperimentStore];
  let stateFromStores22 = tmp2(tmp3[62]).useStateFromStores(items48, () => hasLoadedExperiments.hasLoadedExperiments);
  const tmp2Result114 = tmp2(tmp3[62]);
  const isSpamMessageRequest = tmp2(tmp3[76]).useIsSpamMessageRequest(channel.id);
  const tmp2Result115 = tmp2(tmp3[76]);
  let tmp72 = null != stateFromStores;
  const isMessageRequest = tmp2(tmp3[77]).useIsMessageRequest(channel.id);
  if (tmp72) {
    tmp72 = stateFromStores.ready || stateFromStores.cached;
    const tmp73 = stateFromStores.ready || stateFromStores.cached;
  }
  const tmp2Result116 = tmp2(tmp3[77]);
  const tmp74 = null != stateFromStores && stateFromStores.cached;
  const tmp75 = null != stateFromStores && stateFromStores.ready && !stateFromStores.loadingMore;
  const items49 = [GuildScheduledEventStore];
  const stateFromStores23 = tmp2(tmp3[62]).useStateFromStores(items49, () => rsvpVersion.getRsvpVersion());
  const tmp2Result117 = tmp2(tmp3[62]);
  const items50 = [GuildAutomodMessageStore];
  const stateFromStores24 = tmp2(tmp3[62]).useStateFromStores(items50, () => messagesVersion.getMessagesVersion());
  const tmp2Result118 = tmp2(tmp3[62]);
  const items51 = [GuildMemberStore];
  const stateFromStores25 = tmp2(tmp3[62]).useStateFromStores(items51, () => communicationDisabledVersion.getCommunicationDisabledVersion());
  const tmp2Result119 = tmp2(tmp3[62]);
  const items52 = [GuildMemberStore];
  const items53 = [guildId, stateFromStores];
  const stateFromStoresObject4 = tmp2(tmp3[62]).useStateFromStoresObject(items52, () => {
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
  }, items53);
  const tmp2Result120 = tmp2(tmp3[62]);
  const items54 = [PermissionStore];
  const stateFromStores26 = tmp2(tmp3[62]).useStateFromStores(items54, () => PermissionStore.can(constants2.MODERATE_MEMBERS, stateFromStores1));
  const tmp2Result121 = tmp2(tmp3[62]);
  let id1;
  if (stateFromStores1 != null) {
    id1 = stateFromStores1.id;
  }
  const tmp2Result122 = tmp2(tmp3[79]);
  const items55 = [LocaleStore];
  const stateFromStores27 = tmp2(tmp3[62]).useStateFromStores(items55, () => locale.locale);
  const tmp2Result123 = tmp2(tmp3[62]);
  const isPaymentsBlocked = tmp2(tmp3[80]).useIsPaymentsBlocked();
  const tmp2Result124 = tmp2(tmp3[80]);
  const items56 = [JoinedThreadsStore];
  const stateFromStores28 = tmp2(tmp3[62]).useStateFromStores(items56, () => {
    let hasJoinedResult = channel.isForumPost();
    if (hasJoinedResult) {
      hasJoinedResult = JoinedThreadsStore.hasJoined(id);
    }
    return hasJoinedResult;
  });
  const tmp2Result125 = tmp2(tmp3[62]);
  const items57 = [MediaPostSharePromptStore];
  const stateFromStores29 = tmp2(tmp3[62]).useStateFromStores(items57, () => MediaPostSharePromptStore.shouldDisplayPrompt(id));
  const tmp2Result126 = tmp2(tmp3[62]);
  const items58 = [PushFeedbackStore];
  const stateFromStores30 = tmp2(tmp3[62]).useStateFromStores(items58, () => eligible.isEligible());
  const tmp2Result127 = tmp2(tmp3[62]);
  const items59 = [CacheStore];
  const stateFromStores31 = tmp2(tmp3[62]).useStateFromStores(items59, () => lazyCacheStatus.getLazyCacheStatus());
  const tmp2Result128 = tmp2(tmp3[62]);
  const messageJumpAndroidKeyboardHeight = tmp2(tmp3[81]).useMessageJumpAndroidKeyboardHeight();
  const tmp2Result129 = tmp2(tmp3[81]);
  const tmp89 = stateFromStores(tmp3[82])();
  channelSummariesExperiment = tmp2(tmp3[83]).useChannelSummariesExperiment(channel);
  const tmp2Result130 = tmp2(tmp3[83]);
  const items60 = [SummaryStore];
  const items61 = [channelSummariesExperiment, channel.id];
  const stateFromStores32 = tmp2(tmp3[62]).useStateFromStores(items60, () => {
    let selectedSummaryResult = null;
    if (channelSummariesExperiment) {
      selectedSummaryResult = SummaryStore.selectedSummary(channel.id);
    }
    return selectedSummaryResult;
  }, items61);
  const tmp2Result131 = tmp2(tmp3[62]);
  const isConversationTopicHeaderEnabled = tmp2(tmp3[84]).useIsConversationTopicHeaderEnabled(channel.guild_id, "messages_conversation_header");
  let tmp93;
  if (isConversationTopicHeaderEnabled) {
    tmp93 = tmp23(tmp3[85])(channel.id);
  }
  const items62 = [channel.id, , , , ];
  ({ hasMoreAfter: arr66[1], hasMoreBefore: arr66[2], length: arr66[3], ready: arr66[4] } = stateFromStores);
  const effect = noop.useEffect(() => {
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
  }, items62);
  const tmp2Result132 = tmp2(tmp3[84]);
  const shouldTrackAnnouncementMessageViews = tmp2(tmp3[87]).useShouldTrackAnnouncementMessageViews({ guild: stateFromStores1, channel, messages: stateFromStores, isMessagesReady: tmp72 });
  const tmp2Result133 = tmp2(tmp3[87]);
  const shouldTrackRichPresenceInviteEmbedViews = tmp2(tmp3[87]).useShouldTrackRichPresenceInviteEmbedViews({ messages: stateFromStores, isMessagesReady: tmp72 });
  const tmp2Result134 = tmp2(tmp3[87]);
  const shouldTrackOfficialMessageViews = tmp2(tmp3[87]).useShouldTrackOfficialMessageViews({ guild: stateFromStores1, messages: stateFromStores, isMessagesReady: tmp72 });
  const tmp2Result135 = tmp2(tmp3[87]);
  const shouldTrackVoiceInviteEmbedViews = tmp2(tmp3[87]).useShouldTrackVoiceInviteEmbedViews({ messages: stateFromStores, isMessagesReady: tmp72 });
  const tmp2Result136 = tmp2(tmp3[87]);
  const shouldDisplaySpoilerObscurity = tmp2(tmp3[88]).useShouldDisplaySpoilerObscurity(channel);
  const tmp2Result137 = tmp2(tmp3[88]);
  const items63 = [id, guildId];
  const isAgeVerified = tmp2(tmp3[89]).useIsAgeVerified();
  const effect1 = noop.useEffect(() => {
    stateFromStores(id[90]).handleChannelSelect();
    return () => {
      stateFromStores(id[90]).handleChannelSelect();
    };
  }, items63);
  const tmp2Result138 = tmp2(tmp3[89]);
  const shouldDisableInteractiveComponents = tmp2(tmp3[91]).useShouldDisableInteractiveComponents(channel.id);
  items64 = [];
  const tmp2Result139 = tmp2(tmp3[91]);
  let item = stateFromStores.forEach((messageReference) => {
    messageReference = messageReference.messageReference;
    let message_id;
    if (messageReference != null) {
      message_id = messageReference.message_id;
    }
    if (null != message_id) {
      items64.push(message_id);
    }
  });
  const tmp103 = closure_30(channel.id);
  const tmp105 = closure_31(items64);
  const items65 = [ExplicitMediaStore];
  const items66 = [id];
  const stateFromStores33 = tmp2(tmp3[62]).useStateFromStores(items65, () => ExplicitMediaStore.getChannelFpInfo(id), items66);
  const tmp2Result140 = tmp2(tmp3[62]);
  const items67 = [FamilyCenterPendingConnectionStore];
  const stateFromStores34 = tmp2(tmp3[62]).useStateFromStores(items67, () => pendingConnection.getPendingConnection());
  const tmp2Result141 = tmp2(tmp3[62]);
  const tmp108 = stateFromStores(tmp3[92])();
  ({ unloadedContentEntryMessageIds, unloadableContentEntryMessageIds } = stateFromStores(tmp3[93])(stateFromStores));
  const tmp109 = stateFromStores(tmp3[93])(stateFromStores);
  const items68 = [UserStore];
  const stateFromStores35 = tmp2(tmp3[62]).useStateFromStores(items68, () => {
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
  const tmp2Result142 = tmp2(tmp3[62]);
  const items69 = [BasicGuildStore];
  const stateFromStores36 = tmp2(tmp3[62]).useStateFromStores(items69, () => version.getVersion());
  const tmp2Result143 = tmp2(tmp3[62]);
  const colorStore = tmp2(tmp3[94]).useColorStore((palette) => Object.keys(palette.palette).length);
  const tmp2Result144 = tmp2(tmp3[94]);
  const items70 = [EmojiStore];
  const stateFromStores37 = tmp2(tmp3[62]).useStateFromStores(items70, () => EmojiStore.getGuildEmoji(guildId));
  const tmp2Result145 = tmp2(tmp3[62]);
  const items71 = [VoiceStateStore];
  const items72 = [guildId];
  const stateFromStores38 = tmp2(tmp3[62]).useStateFromStores(items71, () => {
    if (null == guildId) {
      return null;
    } else {
      const voiceStates = VoiceStateStore.getVoiceStates(tmp);
      return messages_MessagesUtils.getVoiceStateChannelSummaryFromVoiceStates(voiceStates);
    }
  }, items72);
  const tmp2Result146 = tmp2(tmp3[62]);
  const items73 = [SortedVoiceStateStore, VoiceChannelStartTimeStore, InviteStore, ChannelStore];
  const stateFromStoresObject5 = tmp2(tmp3[62]).useStateFromStoresObject(items73, () => {
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
        let obj4 = channel(id[95]);
        if (obj4.isVoiceChannelInvite(tmp3)) {
          id = tmp3.channel.id;
          guild = tmp3.guild;
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
  const tmp2Result147 = tmp2(tmp3[62]);
  const items74 = [SessionsStore];
  stateFromStoresArray8 = tmp2(tmp3[62]).useStateFromStoresArray(items74, () => {
    const items = [...closure_1_54.getRemoteActivities(), ...closure_1_54.getHiddenActivities()];
    return items.filter(channel(id[65]).isNotNullish);
  });
  const tmp2Result148 = tmp2(tmp3[62]);
  const items75 = [ActivityLauncherStore];
  const stateFromStoresObject6 = tmp2(tmp3[62]).useStateFromStoresObject(items75, () => stateFromStoresArray8.reduce((acc, application_id) => {
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
  const tmp2Result149 = tmp2(tmp3[62]);
  const items76 = [AuthorizedAppsStore];
  const stateFromStoresArray9 = tmp2(tmp3[62]).useStateFromStoresArray(items76, () => {
    const items = [authStore.getNewestTokens(), authStore.getApplicationFetchStateVersion()];
    return items;
  }, []);
  const tmp2Result150 = tmp2(tmp3[62]);
  const items77 = [UserStore];
  const stateFromStores39 = tmp2(tmp3[62]).useStateFromStores(items77, () => {
    const currentUser = authStore2.getCurrentUser();
    let displayNameStyles;
    if (currentUser != null) {
      displayNameStyles = currentUser.displayNameStyles;
    }
    return displayNameStyles;
  });
  const tmp2Result151 = tmp2(tmp3[62]);
  const fetchSocialLayerStorefrontProductDetailsEmbedApplications = tmp2(tmp3[96]).useFetchSocialLayerStorefrontProductDetailsEmbedApplications(stateFromStores);
  const obj3 = { profile: null, children: null };
  const tmp2Result152 = tmp2(tmp3[96]);
  obj3.profile = tmp2(tmp3[99]).Profiles.Messages;
  let isThreadResult = channel.isThread();
  if (isThreadResult) {
    isThreadResult = closure_68(tmp23(tmp3[97]), { absolute: true });
  }
  const items78 = [isThreadResult, ];
  let obj4 = { ref: ref.ref, theme: stateFromStores3, saturation, isStaff: stateFromStores35, animateEmoji: setting5, animateStickers: setting6, containerWidth: tmp108, gifAutoPlay: setting7, timestampHourCycle: setting8, inlineAttachmentMedia: setting, inlineEmbedMedia: setting1, renderEmbeds: setting2, renderReactions: setting3, developerMode: setting4, roleStyle, officialMessageStyle, guildId, currentUserId: stateFromStores2, channelId: id, isMessagesReady: tmp72, isMessagesCached: tmp74, isMessagesAckable: tmp75, isMessageRequest, isSpamMessageRequest, messageAuthorActivities: tmp19, invites: stateFromStores4, appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, invalidApplicationIds: stateFromStoresArray, applicationAssetFetchingIds: stateFromStoresArray1, messages: stateFromStores, messagesWithActivitiesLaunching: stateFromStoresArray6, activityInstanceIds: stateFromStoresArray3, activityParticipants: stateFromStoresArray5, activityInstancePresenceDetails: stateFromStoresArray4, appDirectoryEmbedApplicationFetchStates, mediaPostPreviewEmbeds: stateFromStores5, guildTemplates: stateFromStores6, gameOrganizationInvites: stateFromStores7, buildOverrides: stateFromStores8, fetchingSkuIds: stateFromStoresArray2, experimentEmbeds: codedLinksExperimentEmbeds, quests, isFetchingCurrentQuests, editingMessageId: stateFromStores10, replyingMessageId: stateFromStores11, oldestUnreadMessageId: stateFromStores12, canChat: stateFromStores13, canSendMessages: stateFromStores14, isCallActive: tmp54, voiceStatePrivateChannelId: stateFromStores15, currentClientVoiceChannelId: stateFromStores16, voiceStateChannelIdSummaryForGuild: stateFromStores38, resolvingGiftCodes, resolvedGiftCodes, acceptingGiftCodes, participantsLength: stateFromStores18, uploads: stateFromStores19, repliedIds: stateFromStores20, useReducedMotion, displayNameStylesEnabled, channelThreadsVersion: stateFromStores21, rsvpVersion: stateFromStores23, failedMessagesVersion: stateFromStores24, communicationDisabledVersion: stateFromStores25, messageAuthorMembers: stateFromStoresObject4, forwardGuildsVersion: stateFromStores36, interactionStates: stateFromStoresObject3, interactionComponentStates: tmp67, interactionComponentStatesVersion: tmp68, hasLoadedExperiments: null, guildSystemChannelFlags: null, currentUserCommunicationDisabled: null, renderCommunicationDisabled: null, userSettingsLocale: null, paymentsBlocked: null, isFollowingForumPost: null, showMediaPostSharePrompt: null, showPushFeedback: null, cacheStoreLoaded: null, androidKeyboardHeight: null, selectedSummary: null, selectedConversation: null, keyboardType: null, shouldTrackAnnouncementMessageViews: null, shouldTrackRichPresenceInviteEmbedViews: null, shouldTrackOfficialMessageViews: null, shouldTrackVoiceInviteEmbedViews: null, shouldObscureSpoiler: null, shouldDisableInteractiveComponents: null, channelPolls: null, messageReferencePolls: null, explicitMediaFalsePositiveInfo: null, familyCenterPendingConnection: null, threadStartingReferenceMessage: null, unloadedContentEntryMessageIds: null, unloadableContentEntryMessageIds: null, resolvedReferralTrialOfferIds: null, referralTrialOfferId: null, isPremiumTier2User: null, activityInviteMessageIds: null, guildInviteColorsFetched: null, isAgeVerified: null, guildEmojis: null, enableSwipeActions: null, selfActivities: null, activityLaunchJoinStates: null, authorizedAppsTokens: null, currentUserDisplayNameStyles: null, voiceInviteDataByChannelId: null, officialMessageColor: null };
  const tmp23Result = stateFromStores(tmp3[99]);
  if (stateFromStores22) {
    stateFromStores22 = tmp72;
  }
  obj4.hasLoadedExperiments = stateFromStores22;
  obj4.guildSystemChannelFlags = systemChannelFlags;
  obj4.currentUserCommunicationDisabled = tmp24(tmp2Result122.useCurrentUserCommunicationDisabled(id1), 2)[1];
  obj4.renderCommunicationDisabled = stateFromStores26;
  obj4.userSettingsLocale = stateFromStores27;
  obj4.paymentsBlocked = isPaymentsBlocked;
  obj4.isFollowingForumPost = stateFromStores28;
  obj4.showMediaPostSharePrompt = stateFromStores29;
  obj4.showPushFeedback = stateFromStores30;
  obj4.cacheStoreLoaded = "initializing" !== stateFromStores31;
  obj4.androidKeyboardHeight = messageJumpAndroidKeyboardHeight;
  obj4.selectedSummary = stateFromStores32;
  obj4.selectedConversation = tmp93;
  obj4.keyboardType = tmp89;
  obj4.shouldTrackAnnouncementMessageViews = shouldTrackAnnouncementMessageViews;
  obj4.shouldTrackRichPresenceInviteEmbedViews = shouldTrackRichPresenceInviteEmbedViews;
  obj4.shouldTrackOfficialMessageViews = shouldTrackOfficialMessageViews;
  obj4.shouldTrackVoiceInviteEmbedViews = shouldTrackVoiceInviteEmbedViews;
  obj4.shouldObscureSpoiler = shouldDisplaySpoilerObscurity;
  obj4.shouldDisableInteractiveComponents = shouldDisableInteractiveComponents;
  obj4.channelPolls = tmp103;
  obj4.messageReferencePolls = tmp105;
  obj4.explicitMediaFalsePositiveInfo = stateFromStores33;
  obj4.familyCenterPendingConnection = stateFromStores34;
  obj4.threadStartingReferenceMessage = stateFromStores17;
  obj4.unloadedContentEntryMessageIds = unloadedContentEntryMessageIds;
  obj4.unloadableContentEntryMessageIds = unloadableContentEntryMessageIds;
  obj4.resolvedReferralTrialOfferIds = stateFromStoresArray7;
  let id2;
  if (trialOffer != null) {
    id2 = trialOffer.id;
  }
  obj4.referralTrialOfferId = id2;
  obj4.isPremiumTier2User = stateFromStores9;
  obj4.activityInviteMessageIds = tmp26;
  obj4.guildInviteColorsFetched = colorStore;
  obj4.isAgeVerified = isAgeVerified;
  obj4.guildEmojis = stateFromStores37;
  obj4.enableSwipeActions = isMessageSwipeActionsEnabled;
  obj4.selfActivities = stateFromStoresArray8;
  obj4.activityLaunchJoinStates = stateFromStoresObject6;
  obj4.authorizedAppsTokens = stateFromStoresArray9;
  obj4.currentUserDisplayNameStyles = stateFromStores39;
  obj4.voiceInviteDataByChannelId = stateFromStoresObject5;
  let officialMessageColor;
  if (stateFromStores1 != null) {
    officialMessageColor = stateFromStores1.officialMessageColor;
  }
  obj4.officialMessageColor = officialMessageColor;
  const merged1 = Object.assign(merged);
  items78[1] = closure_68(stateFromStores(tmp3[98]), obj4);
  obj3.children = items78;
  return closure_69(tmp23Result, obj3);
});
tmp6.displayName = "MessagesConnected";
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/Messages.tsx");

export default tmp6;