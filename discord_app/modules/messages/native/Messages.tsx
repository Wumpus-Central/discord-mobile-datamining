// === Module 11065: Messages ===

// Module 11065 (Messages)
import _modDef12 from "module_12" /* 12 */;
import discord_common_shallowEqual from "discord_common/shallowEqual" /* 568 */;
import GlobalUtils from "GlobalUtils" /* 1385 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6845 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 9815 */;
import DimensionActionCreatorsDefault from "DimensionActionCreators" /* 11262 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5005 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4855 */;
import ApplicationAssetsStore from "ApplicationAssetsStore" /* 8658 */;
import ApplicationStore from "ApplicationStore" /* 2042 */;
import BuildOverrideStore from "BuildOverrideStore" /* 11066 */;
import CacheStore from "CacheStore" /* 7620 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6807 */;
import VoiceChannelStartTimeStore from "VoiceChannelStartTimeStore" /* 10037 */;
import EmojiStore from "EmojiStore" /* 6760 */;
import ExperimentStore from "ExperimentStore" /* 5226 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 7427 */;
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 11067 */;
import ApplicationDirectoryApplicationsStore from "ApplicationDirectoryApplicationsStore" /* 6846 */;
import BasicGuildStore from "BasicGuildStore" /* 8346 */;
import GuildAutomodMessageStore from "GuildAutomodMessageStore" /* 8171 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6819 */;
import GuildTemplateStore from "GuildTemplateStore" /* 7602 */;
import LocalInteractionComponentStateStore from "LocalInteractionComponentStateStore" /* 8633 */;
import InteractionStore from "InteractionStore" /* 8302 */;
import MediaPostEmbedStore from "MediaPostEmbedStore" /* 11070 */;
import MediaPostSharePromptStore from "MediaPostSharePromptStore" /* 8303 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 7239 */;
import FamilyCenterPendingConnectionStore from "FamilyCenterPendingConnectionStore" /* 11071 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7597 */;
import PushFeedbackStore from "PushFeedbackStore" /* 11073 */;
import PendingReplyStore from "PendingReplyStore" /* 7788 */;
import ReferencedMessageStore from "ReferencedMessageStore" /* 7731 */;
import SummaryStore from "SummaryStore" /* 10043 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4938 */;
import ThreadMessageStore from "ThreadMessageStore" /* 7440 */;
import LocaleStore from "LocaleStore" /* 2065 */;
import ThemeStore from "ThemeStore" /* 1204 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4856 */;
import EditMessageStore from "EditMessageStore" /* 7789 */;
import GiftCodeStore from "GiftCodeStore" /* 11074 */;
import GuildMemberStore from "GuildMemberStore" /* 4916 */;
import GuildStore from "GuildStore" /* 4878 */;
import GuildVerificationStore from "GuildVerificationStore" /* 6671 */;
import InviteStore from "InviteStore" /* 5736 */;
import MessageStore from "MessageStore" /* 6045 */;
import PermissionStore from "PermissionStore" /* 4936 */;
import PresenceStore from "PresenceStore" /* 5748 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5750 */;
import ReadStateStore from "ReadStateStore" /* 6806 */;
import SessionsStore from "SessionsStore" /* 5752 */;
import UploadStore from "UploadStore" /* 8305 */;
import UserStore from "UserStore" /* 1389 */;
import VoiceStateStore from "VoiceStateStore" /* 5666 */;
import SKUStore from "SKUStore" /* 6860 */;
import ActivityLauncherStore from "ActivityLauncherStore" /* 11232 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5753 */;

require = fn;
let closure_3 = ["ref"];
const PollsInteractionStore = fn(11072);
({ useChannelPollInteractions: closure_30, useMessagePollInteractions: closure_31 } = PollsInteractionStore);
const Constants = fn(1084);
({ ActivityActionTypes: closure_61, ChannelTypesSets: closure_62, ME: closure_63, MessageTypes: closure_64, Permissions: closure_65 } = Constants);
const constants3 = fn(11068).GameOrganizationInviteStates;
const PremiumConstants = fn(1391);
({ PREMIUM_TIER_2_REFERRAL_TRIAL_ID: closure_67, PremiumTypes: closure_68 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_69, jsxs: closure_70 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_71 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMessageAuthorActivities(arr) {
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
let closure_72 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFetchMessageApplications(arr, arg1) {
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
  const cResult = channel(id[61]).c(339);
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
    class Re {
      constructor() {
        return closure_49.getMessages(channel.id);
      }
    }
    const items1 = [channel.id];
    cResult[4] = channel.id;
    cResult[5] = Re;
    cResult[6] = items1;
    let tmp12 = items1;
  } else {
    class Re {
      constructor() {
        return closure_49.getMessages(channel.id);
      }
    }
    tmp12 = cResult[6];
  }
  let obj = channel(id[61]);
  const stateFromStores = channel(id[63]).useStateFromStores(tmp9, Re, tmp12);
  id = channel.id;
  if (cResult[7] !== channel) {
    class Re {
      constructor() {
        return closure_49.getMessages(channel.id);
      }
    }
    cResult[7] = channel;
    cResult[8] = tmp14;
  } else {
    class Re {
      constructor() {
        return closure_49.getMessages(channel.id);
      }
    }
  }
  closure_3 = tmp14;
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class Re {
      constructor() {
        return closure_49.getMessages(channel.id);
      }
    }
    const items2 = [GuildStore];
    cResult[9] = items2;
    const tmp15 = items2;
  } else {
    class Re {
      constructor() {
        return closure_49.getMessages(channel.id);
      }
    }
  }
  if (cResult[10] !== tmp14) {
    class Ge {
      constructor() {
        return closure_46.getGuild(closure_3);
      }
    }
    cResult[10] = tmp14;
    cResult[11] = Ge;
  } else {
    class Ge {
      constructor() {
        return closure_46.getGuild(closure_3);
      }
    }
  }
  const tmpResult = channel(id[63]);
  const stateFromStores1 = channel(id[63]).useStateFromStores(tmp15, Ge);
  if (stateFromStores1 != null) {
    class Ge {
      constructor() {
        return closure_46.getGuild(closure_3);
      }
    }
  }
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class Ge {
      constructor() {
        return closure_46.getGuild(closure_3);
      }
    }
    const items3 = [AuthenticationStore];
    function je() {
      return id.getId();
    }
    const items4 = [];
    cResult[12] = items3;
    cResult[13] = je;
    cResult[14] = items4;
    let tmp20 = items4;
    let tmp19 = je;
    const tmp18 = items3;
  } else {
    class Ge {
      constructor() {
        return closure_46.getGuild(closure_3);
      }
    }
    tmp19 = cResult[13];
    tmp20 = cResult[14];
  }
  const tmpResult32 = channel(id[63]);
  stateFromStores2 = channel(id[63]).useStateFromStores(tmp18, tmp19, tmp20);
  const InlineAttachmentMedia = tmp(tmp2[67]).InlineAttachmentMedia;
  const setting = InlineAttachmentMedia.useSetting();
  const InlineEmbedMedia = tmp(tmp2[67]).InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.useSetting();
  const RenderEmbeds = tmp(tmp2[67]).RenderEmbeds;
  const setting2 = RenderEmbeds.useSetting();
  const RenderReactions = tmp(tmp2[67]).RenderReactions;
  const setting3 = RenderReactions.useSetting();
  const DeveloperMode = tmp(tmp2[67]).DeveloperMode;
  const setting4 = DeveloperMode.useSetting();
  const AnimateEmoji = tmp(tmp2[67]).AnimateEmoji;
  const setting5 = AnimateEmoji.useSetting();
  const AnimateStickers = tmp(tmp2[67]).AnimateStickers;
  const setting6 = AnimateStickers.useSetting();
  const GifAutoPlay = tmp(tmp2[67]).GifAutoPlay;
  const setting7 = GifAutoPlay.useSetting();
  const TimestampHourCycle = tmp(tmp2[67]).TimestampHourCycle;
  const setting8 = TimestampHourCycle.useSetting();
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    class Ge {
      constructor() {
        return closure_46.getGuild(closure_3);
      }
    }
    const items5 = [ThemeStore];
    function qe() {
      return theme.theme;
    }
    const items6 = [];
    cResult[15] = items5;
    cResult[16] = qe;
    cResult[17] = items6;
    let tmp33 = items6;
    let tmp32 = qe;
    const tmp31 = items5;
  } else {
    class Ge {
      constructor() {
        return closure_46.getGuild(closure_3);
      }
    }
    tmp32 = cResult[16];
    tmp33 = cResult[17];
  }
  const tmpResult33 = channel(id[63]);
  const stateFromStores3 = channel(id[63]).useStateFromStores(tmp31, tmp32, tmp33);
  const tmpResult34 = channel(id[63]);
  const isMessageSwipeActionsEnabled = channel(id[68]).useIsMessageSwipeActionsEnabled();
  closure_71(stateFromStores);
  if (channel.linkedLobby != null) {
    class Ge {
      constructor() {
        return closure_46.getGuild(closure_3);
      }
    }
  }
  closure_72(stateFromStores, undefined);
  const first = stateFromStores1(stateFromStores(tmp2[69])(stateFromStores, channel), 1)[0];
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    class Ge {
      constructor() {
        return closure_46.getGuild(closure_3);
      }
    }
    const items7 = [InviteStore];
    function it() {
      return InviteStore.getInvites();
    }
    const items8 = [];
    cResult[18] = items7;
    cResult[19] = it;
    cResult[20] = items8;
    let tmp43 = items8;
    let tmp42 = it;
    const tmp41 = items7;
  } else {
    class Ge {
      constructor() {
        return closure_46.getGuild(closure_3);
      }
    }
    tmp42 = cResult[19];
    tmp43 = cResult[20];
  }
  const tmp39 = stateFromStores;
  const tmpResult35 = channel(id[68]);
  const stateFromStores4 = channel(id[63]).useStateFromStores(tmp41, tmp42, tmp43);
  const tmpResult36 = channel(id[63]);
  const fetchVoiceChannelInviteStartTimes = channel(id[70]).useFetchVoiceChannelInviteStartTimes(stateFromStores4);
  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
    class Ge {
      constructor() {
        return closure_46.getGuild(closure_3);
      }
    }
    const items9 = [ApplicationDirectoryApplicationsStore];
    function dt() {
      return { appDirectoryEmbedApplications: ApplicationDirectoryApplicationsStore.getApplications(), invalidAppDirectoryEmbedApplicationIds: ApplicationDirectoryApplicationsStore.getInvalidApplicationIds(), appDirectoryEmbedApplicationFetchStates: ApplicationDirectoryApplicationsStore.getApplicationFetchStates() };
    }
    const items10 = [];
    cResult[21] = items9;
    cResult[22] = dt;
    cResult[23] = items10;
    let tmp48 = items10;
    let tmp47 = dt;
    const tmp46 = items9;
  } else {
    class Ge {
      constructor() {
        return closure_46.getGuild(closure_3);
      }
    }
    tmp47 = cResult[22];
    tmp48 = cResult[23];
  }
  const tmpResult37 = channel(id[70]);
  const stateFromStoresObject = channel(id[63]).useStateFromStoresObject(tmp46, tmp47, tmp48);
  ({ appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, appDirectoryEmbedApplicationFetchStates } = stateFromStoresObject);
  if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
    class Ge {
      constructor() {
        return closure_46.getGuild(closure_3);
      }
    }
    const items11 = [ApplicationStore];
    function gt() {
      return ApplicationStore.getFetchingOrFailedFetchingIds();
    }
    cResult[24] = items11;
    cResult[25] = gt;
    let tmp51 = gt;
    const tmp50 = items11;
  } else {
    class Ge {
      constructor() {
        return closure_46.getGuild(closure_3);
      }
    }
    tmp51 = cResult[25];
  }
  const tmpResult38 = channel(id[63]);
  const stateFromStoresArray = channel(id[63]).useStateFromStoresArray(tmp50, tmp51);
  if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
    class Ge {
      constructor() {
        return closure_46.getGuild(closure_3);
      }
    }
    const items12 = [ApplicationAssetsStore];
    function bt() {
      return ApplicationAssetsStore.getFetchingIds();
    }
    cResult[26] = items12;
    cResult[27] = bt;
    let tmp54 = bt;
    const tmp53 = items12;
  } else {
    class Ge {
      constructor() {
        return closure_46.getGuild(closure_3);
      }
    }
    tmp54 = cResult[27];
  }
  const tmpResult39 = channel(id[63]);
  const stateFromStoresArray1 = channel(id[63]).useStateFromStoresArray(tmp53, tmp54);
  if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
    class Ge {
      constructor() {
        return closure_46.getGuild(closure_3);
      }
    }
    const items13 = [SKUStore];
    class It {
      constructor() {
        return closure_1_58.getFetchingSkuIds();
      }
    }
    cResult[28] = items13;
    cResult[29] = It;
    let tmp57 = It;
    const tmp56 = items13;
  } else {
    class Ge {
      constructor() {
        return closure_46.getGuild(closure_3);
      }
    }
    tmp57 = cResult[29];
  }
  const tmpResult40 = channel(id[63]);
  const stateFromStoresArray2 = channel(id[63]).useStateFromStoresArray(tmp56, tmp57);
  if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
    class Ge {
      constructor() {
        return closure_46.getGuild(closure_3);
      }
    }
    const items14 = [EmbeddedActivitiesStore];
    class It {
      constructor() {
        return closure_1_58.getFetchingSkuIds();
      }
    }
    cResult[30] = items14;
    const tmp59 = items14;
  } else {
    class Ge {
      constructor() {
        return closure_46.getGuild(closure_3);
      }
    }
  }
  if (cResult[31] !== id) {
    class Ct {
      constructor() {
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
        return mapped.filter(closure_0(closure_2[66]).isNotNullish);
      }
    }
    const items15 = [id];
    class It {
      constructor() {
        return closure_1_58.getFetchingSkuIds();
      }
    }
    cResult[31] = id;
    cResult[32] = Ct;
    cResult[33] = items15;
    let tmp61 = items15;
  } else {
    class Ct {
      constructor() {
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
        return mapped.filter(closure_0(closure_2[66]).isNotNullish);
      }
    }
    tmp61 = cResult[33];
  }
  const tmpResult41 = channel(id[63]);
  const stateFromStoresArray3 = channel(id[63]).useStateFromStoresArray(tmp59, Ct, tmp61);
  if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
    class Ct {
      constructor() {
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
        return mapped.filter(closure_0(closure_2[66]).isNotNullish);
      }
    }
    const items16 = [EmbeddedActivitiesStore, ];
    class It {
      constructor() {
        return closure_1_58.getFetchingSkuIds();
      }
    }
    items16[1] = PresenceStore;
    cResult[34] = items16;
    const tmp63 = items16;
  } else {
    class Ct {
      constructor() {
        embeddedActivitiesForChannel = closure_8.getEmbeddedActivitiesForChannel(id);
        mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
        return mapped.filter(closure_0(closure_2[66]).isNotNullish);
      }
    }
  }
  if (cResult[35] !== id) {
    class Pt {
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
    class It {
      constructor() {
        return closure_1_58.getFetchingSkuIds();
      }
    }
    cResult[36] = Pt;
  } else {
    class Pt {
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
  const tmpResult42 = channel(id[63]);
  const stateFromStoresArray4 = channel(id[63]).useStateFromStoresArray(tmp63, Pt);
  if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
    class Pt {
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
    class Ot {
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
    cResult[38] = Ot;
    let tmp67 = Ot;
    const tmp66 = items17;
  } else {
    class Pt {
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
    tmp67 = cResult[38];
  }
  const tmpResult43 = channel(id[63]);
  const stateFromStoresArray5 = channel(id[63]).useStateFromStoresArray(tmp66, tmp67);
  if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
    class Pt {
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
    class Ot {
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
    cResult[40] = tmp71;
    let tmp70 = tmp71;
    const tmp69 = items18;
  } else {
    class Pt {
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
    tmp70 = cResult[40];
  }
  const tmpResult44 = channel(id[63]);
  const stateFromStoresArray6 = channel(id[63]).useStateFromStoresArray(tmp69, tmp70);
  if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
    class Pt {
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
    class Lt {
      constructor() {
        return closure_1_26.getMediaPostEmbeds();
      }
    }
    cResult[41] = items19;
    cResult[42] = Lt;
    let tmp74 = Lt;
    const tmp73 = items19;
  } else {
    class Pt {
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
    tmp74 = cResult[42];
  }
  const tmpResult45 = channel(id[63]);
  const stateFromStores5 = channel(id[63]).useStateFromStores(tmp73, tmp74);
  if (cResult[43] === Symbol.for("react.memo_cache_sentinel")) {
    class Pt {
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
    class Lt {
      constructor() {
        return closure_1_26.getMediaPostEmbeds();
      }
    }
    const items21 = [];
    cResult[43] = items20;
    cResult[44] = tmp79;
    cResult[45] = items21;
    let tmp78 = items21;
    let tmp77 = tmp79;
    const tmp76 = items20;
  } else {
    class Pt {
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
    tmp77 = cResult[44];
    tmp78 = cResult[45];
  }
  const tmpResult46 = channel(id[63]);
  const stateFromStores6 = channel(id[63]).useStateFromStores(tmp76, tmp77, tmp78);
  if (cResult[46] === Symbol.for("react.memo_cache_sentinel")) {
    class Pt {
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
    class Lt {
      constructor() {
        return closure_1_26.getMediaPostEmbeds();
      }
    }
    const items23 = [];
    cResult[46] = items22;
    cResult[47] = tmp84;
    cResult[48] = items23;
    let tmp83 = items23;
    let tmp82 = tmp84;
    const tmp81 = items22;
  } else {
    class Pt {
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
    tmp82 = cResult[47];
    tmp83 = cResult[48];
  }
  const tmpResult47 = channel(id[63]);
  const stateFromStores7 = channel(id[63]).useStateFromStores(tmp81, tmp82, tmp83);
  if (cResult[49] === Symbol.for("react.memo_cache_sentinel")) {
    class Pt {
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
    const items24 = [GuildStore];
    class Lt {
      constructor() {
        return closure_1_26.getMediaPostEmbeds();
      }
    }
    cResult[49] = items24;
    const tmp86 = items24;
  } else {
    class Pt {
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
  if (cResult[50] !== stateFromStores7) {
    class Wt {
      constructor() {
        items = [];
        values = closure_6.values();
        iter = values[Symbol.iterator]();
        nextResult = iter.next();
        while (iter !== undefined) {
          tmp3 = nextResult;
          tmp4 = closure_66;
          tmp5 = nextResult.state === closure_66.RESOLVED;
          if (tmp5) {
            tmp6 = closure_46;
            tmp7 = nextResult;
            tmp5 = null != closure_46.getGuild(tmp3.guildId);
          }
          if (tmp5) {
            tmp8 = nextResult;
            arr1 = items.push(tmp3.guildId);
          }
          continue;
        }
        return items;
      }
    }
    const items25 = [stateFromStores7];
    class Lt {
      constructor() {
        return closure_1_26.getMediaPostEmbeds();
      }
    }
    cResult[50] = stateFromStores7;
    cResult[51] = Wt;
    cResult[52] = items25;
    let tmp88 = items25;
  } else {
    class Wt {
      constructor() {
        items = [];
        values = closure_6.values();
        iter = values[Symbol.iterator]();
        nextResult = iter.next();
        while (iter !== undefined) {
          tmp3 = nextResult;
          tmp4 = closure_66;
          tmp5 = nextResult.state === closure_66.RESOLVED;
          if (tmp5) {
            tmp6 = closure_46;
            tmp7 = nextResult;
            tmp5 = null != closure_46.getGuild(tmp3.guildId);
          }
          if (tmp5) {
            tmp8 = nextResult;
            arr1 = items.push(tmp3.guildId);
          }
          continue;
        }
        return items;
      }
    }
    tmp88 = cResult[52];
  }
  const tmpResult48 = channel(id[63]);
  const stateFromStoresArray7 = channel(id[63]).useStateFromStoresArray(tmp86, Wt, tmp88);
  if (cResult[53] === Symbol.for("react.memo_cache_sentinel")) {
    class Wt {
      constructor() {
        items = [];
        values = closure_6.values();
        iter = values[Symbol.iterator]();
        nextResult = iter.next();
        while (iter !== undefined) {
          tmp3 = nextResult;
          tmp4 = closure_66;
          tmp5 = nextResult.state === closure_66.RESOLVED;
          if (tmp5) {
            tmp6 = closure_46;
            tmp7 = nextResult;
            tmp5 = null != closure_46.getGuild(tmp3.guildId);
          }
          if (tmp5) {
            tmp8 = nextResult;
            arr1 = items.push(tmp3.guildId);
          }
          continue;
        }
        return items;
      }
    }
    const items26 = [BuildOverrideStore];
    class Lt {
      constructor() {
        return closure_1_26.getMediaPostEmbeds();
      }
    }
    const items27 = [];
    cResult[53] = items26;
    cResult[54] = tmp93;
    cResult[55] = items27;
    let tmp92 = items27;
    let tmp91 = tmp93;
    const tmp90 = items26;
  } else {
    class Wt {
      constructor() {
        items = [];
        values = closure_6.values();
        iter = values[Symbol.iterator]();
        nextResult = iter.next();
        while (iter !== undefined) {
          tmp3 = nextResult;
          tmp4 = closure_66;
          tmp5 = nextResult.state === closure_66.RESOLVED;
          if (tmp5) {
            tmp6 = closure_46;
            tmp7 = nextResult;
            tmp5 = null != closure_46.getGuild(tmp3.guildId);
          }
          if (tmp5) {
            tmp8 = nextResult;
            arr1 = items.push(tmp3.guildId);
          }
          continue;
        }
        return items;
      }
    }
    tmp91 = cResult[54];
    tmp92 = cResult[55];
  }
  const tmpResult49 = channel(id[63]);
  const stateFromStores8 = channel(id[63]).useStateFromStores(tmp90, tmp91, tmp92);
  const tmpResult50 = channel(id[63]);
  const codedLinksExperimentEmbeds = channel(id[71]).useCodedLinksExperimentEmbeds();
  if (cResult[56] === Symbol.for("react.memo_cache_sentinel")) {
    class Wt {
      constructor() {
        items = [];
        values = closure_6.values();
        iter = values[Symbol.iterator]();
        nextResult = iter.next();
        while (iter !== undefined) {
          tmp3 = nextResult;
          tmp4 = closure_66;
          tmp5 = nextResult.state === closure_66.RESOLVED;
          if (tmp5) {
            tmp6 = closure_46;
            tmp7 = nextResult;
            tmp5 = null != closure_46.getGuild(tmp3.guildId);
          }
          if (tmp5) {
            tmp8 = nextResult;
            arr1 = items.push(tmp3.guildId);
          }
          continue;
        }
        return items;
      }
    }
    cResult[56] = tmp97;
    class Lt {
      constructor() {
        return closure_1_26.getMediaPostEmbeds();
      }
    }
  } else {
    class Wt {
      constructor() {
        items = [];
        values = closure_6.values();
        iter = values[Symbol.iterator]();
        nextResult = iter.next();
        while (iter !== undefined) {
          tmp3 = nextResult;
          tmp4 = closure_66;
          tmp5 = nextResult.state === closure_66.RESOLVED;
          if (tmp5) {
            tmp6 = closure_46;
            tmp7 = nextResult;
            tmp5 = null != closure_46.getGuild(tmp3.guildId);
          }
          if (tmp5) {
            tmp8 = nextResult;
            arr1 = items.push(tmp3.guildId);
          }
          continue;
        }
        return items;
      }
    }
  }
  const tmpResult51 = channel(id[71]);
  const quests1 = channel(id[72]).useQuests(tmp96);
  ({ quests, isFetchingCurrentQuests } = quests1);
  if (cResult[57] !== stateFromStores) {
    class Wt {
      constructor() {
        items = [];
        values = closure_6.values();
        iter = values[Symbol.iterator]();
        nextResult = iter.next();
        while (iter !== undefined) {
          tmp3 = nextResult;
          tmp4 = closure_66;
          tmp5 = nextResult.state === closure_66.RESOLVED;
          if (tmp5) {
            tmp6 = closure_46;
            tmp7 = nextResult;
            tmp5 = null != closure_46.getGuild(tmp3.guildId);
          }
          if (tmp5) {
            tmp8 = nextResult;
            arr1 = items.push(tmp3.guildId);
          }
          continue;
        }
        return items;
      }
    }
    if (cResult[59] === Symbol.for("react.memo_cache_sentinel")) {
      class Wt {
        constructor() {
          items = [];
          values = closure_6.values();
          iter = values[Symbol.iterator]();
          nextResult = iter.next();
          while (iter !== undefined) {
            tmp3 = nextResult;
            tmp4 = closure_66;
            tmp5 = nextResult.state === closure_66.RESOLVED;
            if (tmp5) {
              tmp6 = closure_46;
              tmp7 = nextResult;
              tmp5 = null != closure_46.getGuild(tmp3.guildId);
            }
            if (tmp5) {
              tmp8 = nextResult;
              arr1 = items.push(tmp3.guildId);
            }
            continue;
          }
          return items;
        }
      }
      cResult[59] = tmp100;
      class Lt {
        constructor() {
          return closure_1_26.getMediaPostEmbeds();
        }
      }
    } else {
      class Wt {
        constructor() {
          items = [];
          values = closure_6.values();
          iter = values[Symbol.iterator]();
          nextResult = iter.next();
          while (iter !== undefined) {
            tmp3 = nextResult;
            tmp4 = closure_66;
            tmp5 = nextResult.state === closure_66.RESOLVED;
            if (tmp5) {
              tmp6 = closure_46;
              tmp7 = nextResult;
              tmp5 = null != closure_46.getGuild(tmp3.guildId);
            }
            if (tmp5) {
              tmp8 = nextResult;
              arr1 = items.push(tmp3.guildId);
            }
            continue;
          }
          return items;
        }
      }
    }
    class Lt {
      constructor() {
        return closure_1_26.getMediaPostEmbeds();
      }
    }
    if (cResult[60] === Symbol.for("react.memo_cache_sentinel")) {
      class Wt {
        constructor() {
          items = [];
          values = closure_6.values();
          iter = values[Symbol.iterator]();
          nextResult = iter.next();
          while (iter !== undefined) {
            tmp3 = nextResult;
            tmp4 = closure_66;
            tmp5 = nextResult.state === closure_66.RESOLVED;
            if (tmp5) {
              tmp6 = closure_46;
              tmp7 = nextResult;
              tmp5 = null != closure_46.getGuild(tmp3.guildId);
            }
            if (tmp5) {
              tmp8 = nextResult;
              arr1 = items.push(tmp3.guildId);
            }
            continue;
          }
          return items;
        }
      }
      cResult[60] = tmp102;
      class Lt {
        constructor() {
          return closure_1_26.getMediaPostEmbeds();
        }
      }
    } else {
      class Wt {
        constructor() {
          items = [];
          values = closure_6.values();
          iter = values[Symbol.iterator]();
          nextResult = iter.next();
          while (iter !== undefined) {
            tmp3 = nextResult;
            tmp4 = closure_66;
            tmp5 = nextResult.state === closure_66.RESOLVED;
            if (tmp5) {
              tmp6 = closure_46;
              tmp7 = nextResult;
              tmp5 = null != closure_46.getGuild(tmp3.guildId);
            }
            if (tmp5) {
              tmp8 = nextResult;
              arr1 = items.push(tmp3.guildId);
            }
            continue;
          }
          return items;
        }
      }
    }
    const found = stateFromStores.filter(filter);
    let mapped = found.map(tmp101);
    filter = mapped.filter;
    const found1 = filter(tmp(tmp2[66]).isNotNullish);
    cResult[57] = stateFromStores;
    cResult[58] = found1;
  } else {
    class Wt {
      constructor() {
        items = [];
        values = closure_6.values();
        iter = values[Symbol.iterator]();
        nextResult = iter.next();
        while (iter !== undefined) {
          tmp3 = nextResult;
          tmp4 = closure_66;
          tmp5 = nextResult.state === closure_66.RESOLVED;
          if (tmp5) {
            tmp6 = closure_46;
            tmp7 = nextResult;
            tmp5 = null != closure_46.getGuild(tmp3.guildId);
          }
          if (tmp5) {
            tmp8 = nextResult;
            arr1 = items.push(tmp3.guildId);
          }
          continue;
        }
        return items;
      }
    }
    AccessibilityStore = tmp99;
    const _Symbol = Symbol;
    class Lt {
      constructor() {
        return closure_1_26.getMediaPostEmbeds();
      }
    }
    if (tmp105 === Symbol.for("react.memo_cache_sentinel")) {
      class Wt {
        constructor() {
          items = [];
          values = closure_6.values();
          iter = values[Symbol.iterator]();
          nextResult = iter.next();
          while (iter !== undefined) {
            tmp3 = nextResult;
            tmp4 = closure_66;
            tmp5 = nextResult.state === closure_66.RESOLVED;
            if (tmp5) {
              tmp6 = closure_46;
              tmp7 = nextResult;
              tmp5 = null != closure_46.getGuild(tmp3.guildId);
            }
            if (tmp5) {
              tmp8 = nextResult;
              arr1 = items.push(tmp3.guildId);
            }
            continue;
          }
          return items;
        }
      }
      const items28 = [ReferralTrialStore];
      class Lt {
        constructor() {
          return closure_1_26.getMediaPostEmbeds();
        }
      }
      cResult[61] = items28;
      const tmp106 = items28;
    } else {
      class Wt {
        constructor() {
          items = [];
          values = closure_6.values();
          iter = values[Symbol.iterator]();
          nextResult = iter.next();
          while (iter !== undefined) {
            tmp3 = nextResult;
            tmp4 = closure_66;
            tmp5 = nextResult.state === closure_66.RESOLVED;
            if (tmp5) {
              tmp6 = closure_46;
              tmp7 = nextResult;
              tmp5 = null != closure_46.getGuild(tmp3.guildId);
            }
            if (tmp5) {
              tmp8 = nextResult;
              arr1 = items.push(tmp3.guildId);
            }
            continue;
          }
          return items;
        }
      }
    }
    if (cResult[62] !== tmp99) {
      class Ss {
        constructor() {
          mapped = closure_7.map((item) => {
            relevantUserTrialOffer = relevantUserTrialOffer.getRelevantUserTrialOffer(item);
            id = undefined;
            if (relevantUserTrialOffer != null) {
              id = relevantUserTrialOffer.id;
            }
            return id;
          });
          return mapped.filter(closure_0(closure_2[66]).isNotNullish);
        }
      }
      cResult[62] = tmp99;
      class Lt {
        constructor() {
          return closure_1_26.getMediaPostEmbeds();
        }
      }
      cResult[63] = Ss;
    } else {
      class Ss {
        constructor() {
          mapped = closure_7.map((item) => {
            relevantUserTrialOffer = relevantUserTrialOffer.getRelevantUserTrialOffer(item);
            id = undefined;
            if (relevantUserTrialOffer != null) {
              id = relevantUserTrialOffer.id;
            }
            return id;
          });
          return mapped.filter(closure_0(closure_2[66]).isNotNullish);
        }
      }
    }
    const stateFromStoresArray8 = tmp(tmp2[63]).useStateFromStoresArray(tmp106, Ss);
    const tmpResult53 = tmp(tmp2[63]);
    const trialOffer = tmp(tmp2[73]).useTrialOffer(closure_67);
    const _Symbol2 = Symbol;
    if (cResult[64] === Symbol.for("react.memo_cache_sentinel")) {
      class Ss {
        constructor() {
          mapped = closure_7.map((item) => {
            relevantUserTrialOffer = relevantUserTrialOffer.getRelevantUserTrialOffer(item);
            id = undefined;
            if (relevantUserTrialOffer != null) {
              id = relevantUserTrialOffer.id;
            }
            return id;
          });
          return mapped.filter(closure_0(closure_2[66]).isNotNullish);
        }
      }
      const items29 = [UserStore];
      class Lt {
        constructor() {
          return closure_1_26.getMediaPostEmbeds();
        }
      }
      cResult[64] = items29;
      cResult[65] = tmp113;
      let tmp112 = tmp113;
      const tmp111 = items29;
    } else {
      class Ss {
        constructor() {
          mapped = closure_7.map((item) => {
            relevantUserTrialOffer = relevantUserTrialOffer.getRelevantUserTrialOffer(item);
            id = undefined;
            if (relevantUserTrialOffer != null) {
              id = relevantUserTrialOffer.id;
            }
            return id;
          });
          return mapped.filter(closure_0(closure_2[66]).isNotNullish);
        }
      }
      tmp112 = cResult[65];
    }
    const tmpResult54 = tmp(tmp2[73]);
    const stateFromStores9 = tmp(tmp2[63]).useStateFromStores(tmp111, tmp112);
    const _Symbol3 = Symbol;
    if (cResult[66] === Symbol.for("react.memo_cache_sentinel")) {
      class Ss {
        constructor() {
          mapped = closure_7.map((item) => {
            relevantUserTrialOffer = relevantUserTrialOffer.getRelevantUserTrialOffer(item);
            id = undefined;
            if (relevantUserTrialOffer != null) {
              id = relevantUserTrialOffer.id;
            }
            return id;
          });
          return mapped.filter(closure_0(closure_2[66]).isNotNullish);
        }
      }
      const items30 = [EditMessageStore];
      class Lt {
        constructor() {
          return closure_1_26.getMediaPostEmbeds();
        }
      }
      cResult[66] = items30;
      const tmp115 = items30;
    } else {
      class Ss {
        constructor() {
          mapped = closure_7.map((item) => {
            relevantUserTrialOffer = relevantUserTrialOffer.getRelevantUserTrialOffer(item);
            id = undefined;
            if (relevantUserTrialOffer != null) {
              id = relevantUserTrialOffer.id;
            }
            return id;
          });
          return mapped.filter(closure_0(closure_2[66]).isNotNullish);
        }
      }
    }
    if (cResult[67] !== id) {
      class Ss {
        constructor() {
          mapped = closure_7.map((item) => {
            relevantUserTrialOffer = relevantUserTrialOffer.getRelevantUserTrialOffer(item);
            id = undefined;
            if (relevantUserTrialOffer != null) {
              id = relevantUserTrialOffer.id;
            }
            return id;
          });
          return mapped.filter(closure_0(closure_2[66]).isNotNullish);
        }
      }
      const items31 = [id];
      class Lt {
        constructor() {
          return closure_1_26.getMediaPostEmbeds();
        }
      }
      cResult[67] = id;
      cResult[68] = tmp118;
      cResult[69] = items31;
      let tmp117 = items31;
    } else {
      class Ss {
        constructor() {
          mapped = closure_7.map((item) => {
            relevantUserTrialOffer = relevantUserTrialOffer.getRelevantUserTrialOffer(item);
            id = undefined;
            if (relevantUserTrialOffer != null) {
              id = relevantUserTrialOffer.id;
            }
            return id;
          });
          return mapped.filter(closure_0(closure_2[66]).isNotNullish);
        }
      }
      tmp117 = cResult[69];
    }
    const tmpResult55 = tmp(tmp2[63]);
    const stateFromStores10 = tmp(tmp2[63]).useStateFromStores(tmp115, tmp118, tmp117);
    const _Symbol4 = Symbol;
    if (cResult[70] === Symbol.for("react.memo_cache_sentinel")) {
      class Ss {
        constructor() {
          mapped = closure_7.map((item) => {
            relevantUserTrialOffer = relevantUserTrialOffer.getRelevantUserTrialOffer(item);
            id = undefined;
            if (relevantUserTrialOffer != null) {
              id = relevantUserTrialOffer.id;
            }
            return id;
          });
          return mapped.filter(closure_0(closure_2[66]).isNotNullish);
        }
      }
      const items32 = [PendingReplyStore];
      class Lt {
        constructor() {
          return closure_1_26.getMediaPostEmbeds();
        }
      }
      cResult[70] = items32;
      const tmp120 = items32;
    } else {
      class Ss {
        constructor() {
          mapped = closure_7.map((item) => {
            relevantUserTrialOffer = relevantUserTrialOffer.getRelevantUserTrialOffer(item);
            id = undefined;
            if (relevantUserTrialOffer != null) {
              id = relevantUserTrialOffer.id;
            }
            return id;
          });
          return mapped.filter(closure_0(closure_2[66]).isNotNullish);
        }
      }
    }
    if (cResult[71] !== id) {
      class Ms {
        constructor() {
          pendingReply = closure_34.getPendingReply(id);
          id = undefined;
          if (pendingReply != null) {
            id = pendingReply.message.id;
          }
          return id;
        }
      }
      const items33 = [id];
      class Lt {
        constructor() {
          return closure_1_26.getMediaPostEmbeds();
        }
      }
      cResult[71] = id;
      cResult[72] = Ms;
      cResult[73] = items33;
      let tmp122 = items33;
    } else {
      class Ms {
        constructor() {
          pendingReply = closure_34.getPendingReply(id);
          id = undefined;
          if (pendingReply != null) {
            id = pendingReply.message.id;
          }
          return id;
        }
      }
      tmp122 = cResult[73];
    }
    const tmpResult56 = tmp(tmp2[63]);
    const stateFromStores11 = tmp(tmp2[63]).useStateFromStores(tmp120, Ms, tmp122);
    const _Symbol5 = Symbol;
    if (cResult[74] === Symbol.for("react.memo_cache_sentinel")) {
      class Ms {
        constructor() {
          pendingReply = closure_34.getPendingReply(id);
          id = undefined;
          if (pendingReply != null) {
            id = pendingReply.message.id;
          }
          return id;
        }
      }
      const items34 = [ReadStateStore];
      class Lt {
        constructor() {
          return closure_1_26.getMediaPostEmbeds();
        }
      }
      cResult[74] = items34;
      const tmp124 = items34;
    } else {
      class Ms {
        constructor() {
          pendingReply = closure_34.getPendingReply(id);
          id = undefined;
          if (pendingReply != null) {
            id = pendingReply.message.id;
          }
          return id;
        }
      }
    }
    if (cResult[75] !== id) {
      class Rs {
        constructor() {
          return closure_53.getOldestUnreadMessageId(id);
        }
      }
      const items35 = [id];
      class Lt {
        constructor() {
          return closure_1_26.getMediaPostEmbeds();
        }
      }
      cResult[75] = id;
      cResult[76] = Rs;
      cResult[77] = items35;
      let tmp126 = items35;
    } else {
      class Rs {
        constructor() {
          return closure_53.getOldestUnreadMessageId(id);
        }
      }
      tmp126 = cResult[77];
    }
    const tmpResult57 = tmp(tmp2[63]);
    const stateFromStores12 = tmp(tmp2[63]).useStateFromStores(tmp124, Rs, tmp126);
    const _Symbol6 = Symbol;
    if (cResult[78] === Symbol.for("react.memo_cache_sentinel")) {
      class Rs {
        constructor() {
          return closure_53.getOldestUnreadMessageId(id);
        }
      }
      const items36 = [GuildVerificationStore];
      class Lt {
        constructor() {
          return closure_1_26.getMediaPostEmbeds();
        }
      }
      cResult[78] = items36;
      const tmp128 = items36;
    } else {
      class Rs {
        constructor() {
          return closure_53.getOldestUnreadMessageId(id);
        }
      }
    }
    if (cResult[79] !== tmp14) {
      class Ds {
        constructor() {
          canChatInGuildResult = null != closure_3;
          if (canChatInGuildResult) {
            tmp3 = closure_47;
            canChatInGuildResult = closure_47.canChatInGuild(tmp);
          }
          return canChatInGuildResult;
        }
      }
      const items37 = [tmp14];
      class Lt {
        constructor() {
          return closure_1_26.getMediaPostEmbeds();
        }
      }
      cResult[79] = tmp14;
      cResult[80] = Ds;
      cResult[81] = items37;
      let tmp130 = items37;
    } else {
      class Ds {
        constructor() {
          canChatInGuildResult = null != closure_3;
          if (canChatInGuildResult) {
            tmp3 = closure_47;
            canChatInGuildResult = closure_47.canChatInGuild(tmp);
          }
          return canChatInGuildResult;
        }
      }
      tmp130 = cResult[81];
    }
    const tmpResult58 = tmp(tmp2[63]);
    const stateFromStores13 = tmp(tmp2[63]).useStateFromStores(tmp128, Ds, tmp130);
    const _Symbol7 = Symbol;
    if (cResult[82] === Symbol.for("react.memo_cache_sentinel")) {
      class Ds {
        constructor() {
          canChatInGuildResult = null != closure_3;
          if (canChatInGuildResult) {
            tmp3 = closure_47;
            canChatInGuildResult = closure_47.canChatInGuild(tmp);
          }
          return canChatInGuildResult;
        }
      }
      const items38 = [PermissionStore];
      class Lt {
        constructor() {
          return closure_1_26.getMediaPostEmbeds();
        }
      }
      cResult[82] = items38;
      const tmp132 = items38;
    } else {
      class Ds {
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
    if (cResult[83] !== channel) {
      class Ds {
        constructor() {
          canChatInGuildResult = null != closure_3;
          if (canChatInGuildResult) {
            tmp3 = closure_47;
            canChatInGuildResult = closure_47.canChatInGuild(tmp);
          }
          return canChatInGuildResult;
        }
      }
      const items39 = [channel];
      class Lt {
        constructor() {
          return closure_1_26.getMediaPostEmbeds();
        }
      }
      cResult[83] = channel;
      cResult[84] = tmp135;
      cResult[85] = items39;
      let tmp134 = items39;
    } else {
      class Ds {
        constructor() {
          canChatInGuildResult = null != closure_3;
          if (canChatInGuildResult) {
            tmp3 = closure_47;
            canChatInGuildResult = closure_47.canChatInGuild(tmp);
          }
          return canChatInGuildResult;
        }
      }
      tmp134 = cResult[85];
    }
    const tmpResult59 = tmp(tmp2[63]);
    const stateFromStores14 = tmp(tmp2[63]).useStateFromStores(tmp132, tmp135, tmp134);
    tmp39(tmp2[75])(id);
    const _Symbol8 = Symbol;
    if (cResult[86] === Symbol.for("react.memo_cache_sentinel")) {
      class Ds {
        constructor() {
          canChatInGuildResult = null != closure_3;
          if (canChatInGuildResult) {
            tmp3 = closure_47;
            canChatInGuildResult = closure_47.canChatInGuild(tmp);
          }
          return canChatInGuildResult;
        }
      }
      const items40 = [VoiceStateStore];
      class Lt {
        constructor() {
          return closure_1_26.getMediaPostEmbeds();
        }
      }
      cResult[86] = items40;
      const tmp138 = items40;
    } else {
      class Ds {
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
    if (cResult[87] !== stateFromStores2) {
      class Us {
        constructor() {
          return closure_57.getUserVoiceChannelId(ME, closure_5);
        }
      }
      const items41 = [stateFromStores2];
      class Lt {
        constructor() {
          return closure_1_26.getMediaPostEmbeds();
        }
      }
      cResult[87] = stateFromStores2;
      cResult[88] = Us;
      cResult[89] = items41;
      let tmp140 = items41;
    } else {
      class Us {
        constructor() {
          return closure_57.getUserVoiceChannelId(ME, closure_5);
        }
      }
      tmp140 = cResult[89];
    }
    const tmpResult60 = tmp(tmp2[63]);
    const stateFromStores15 = tmp(tmp2[63]).useStateFromStores(tmp138, Us, tmp140);
    const _Symbol9 = Symbol;
    if (cResult[90] === Symbol.for("react.memo_cache_sentinel")) {
      class Us {
        constructor() {
          return closure_57.getUserVoiceChannelId(ME, closure_5);
        }
      }
      const items42 = [RTCConnectionStore];
      class Hs {
        constructor() {
          return closure_1_52.getChannelId();
        }
      }
      const items43 = [];
      cResult[90] = items42;
      cResult[91] = Hs;
      cResult[92] = items43;
      let tmp144 = items43;
      let tmp143 = Hs;
      const tmp142 = items42;
    } else {
      class Us {
        constructor() {
          return closure_57.getUserVoiceChannelId(ME, closure_5);
        }
      }
      tmp143 = cResult[91];
      tmp144 = cResult[92];
    }
    const tmpResult61 = tmp(tmp2[63]);
    const stateFromStores16 = tmp(tmp2[63]).useStateFromStores(tmp142, tmp143, tmp144);
    const _Symbol10 = Symbol;
    if (cResult[93] === Symbol.for("react.memo_cache_sentinel")) {
      class Us {
        constructor() {
          return closure_57.getUserVoiceChannelId(ME, closure_5);
        }
      }
      const items44 = [ReferencedMessageStore];
      class Hs {
        constructor() {
          return closure_1_52.getChannelId();
        }
      }
      cResult[93] = items44;
    } else {
      class Us {
        constructor() {
          return closure_57.getUserVoiceChannelId(ME, closure_5);
        }
      }
    }
    if (cResult[94] === channel.guild_id) {
      class Us {
        constructor() {
          return closure_57.getUserVoiceChannelId(ME, closure_5);
        }
      }
    }
    class Ks {
      constructor() {
        THREADS = ChannelTypesSets.THREADS;
        tmp = channel;
        message = null;
        if (THREADS.has(channel.type)) {
          message = null;
          if (null != tmp.parent_id) {
            tmp3 = closure_35;
            obj = { channel_id: null, message_id: null, guild_id: null };
            ({ parent_id: obj.channel_id, id: obj.message_id, guild_id: obj.guild_id } = tmp);
            message = closure_35.getMessageByReference(obj).message;
          }
        }
        return message;
      }
    }
    cResult[94] = channel.guild_id;
    cResult[95] = channel.id;
    cResult[96] = channel.parent_id;
    cResult[97] = channel.type;
    cResult[98] = Ks;
    const tmpResult62 = tmp(tmp2[63]);
  }
  const tmpResult52 = channel(id[72]);
}) : (function MessagesConnected(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  let id;
  let stateFromStores2;
  let stateFromStores7;
  closure_7 = undefined;
  let channelSummariesExperiment;
  let items66;
  let stateFromStoresArray9;
  let channel = merged.channel;
  const tmp2 = channel;
  let tmp3 = id;
  let items = [MessageStore];
  const items1 = [channel.id];
  const stateFromStores = channel(id[63]).useStateFromStores(items, () => MessageStore.getMessages(channel.id), items1);
  id = channel.id;
  const guildId = channel.getGuildId();
  let obj = channel(id[63]);
  const items2 = [GuildStore];
  const stateFromStores1 = channel(id[63]).useStateFromStores(items2, () => GuildStore.getGuild(guildId));
  let systemChannelFlags;
  if (stateFromStores1 != null) {
    systemChannelFlags = stateFromStores1.systemChannelFlags;
  }
  const obj2 = channel(id[63]);
  const items3 = [AuthenticationStore];
  stateFromStores2 = tmp2(tmp3[63]).useStateFromStores(items3, () => id.getId(), []);
  const InlineAttachmentMedia = tmp2(tmp3[67]).InlineAttachmentMedia;
  const setting = InlineAttachmentMedia.useSetting();
  const InlineEmbedMedia = tmp2(tmp3[67]).InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.useSetting();
  const RenderEmbeds = tmp2(tmp3[67]).RenderEmbeds;
  const setting2 = RenderEmbeds.useSetting();
  const RenderReactions = tmp2(tmp3[67]).RenderReactions;
  const setting3 = RenderReactions.useSetting();
  const DeveloperMode = tmp2(tmp3[67]).DeveloperMode;
  const setting4 = DeveloperMode.useSetting();
  const AnimateEmoji = tmp2(tmp3[67]).AnimateEmoji;
  const setting5 = AnimateEmoji.useSetting();
  const AnimateStickers = tmp2(tmp3[67]).AnimateStickers;
  const setting6 = AnimateStickers.useSetting();
  const GifAutoPlay = tmp2(tmp3[67]).GifAutoPlay;
  const setting7 = GifAutoPlay.useSetting();
  const TimestampHourCycle = tmp2(tmp3[67]).TimestampHourCycle;
  const setting8 = TimestampHourCycle.useSetting();
  const tmp2Result = tmp2(tmp3[63]);
  const items4 = [ThemeStore];
  const stateFromStores3 = tmp2(tmp3[63]).useStateFromStores(items4, () => theme.theme, []);
  const tmp2Result77 = tmp2(tmp3[63]);
  const isMessageSwipeActionsEnabled = tmp2(tmp3[68]).useIsMessageSwipeActionsEnabled();
  const linkedLobby = channel.linkedLobby;
  let application_id;
  const tmp2Result78 = tmp2(tmp3[68]);
  if (linkedLobby != null) {
    application_id = linkedLobby.application_id;
  }
  closure_72(stateFromStores, application_id);
  const tmp20 = closure_71(stateFromStores);
  const tmp25 = stateFromStores1;
  [tmp27, r10112] = stateFromStores1(stateFromStores(tmp3[69])(stateFromStores, channel), 2);
  const tmp26 = stateFromStores1(stateFromStores(tmp3[69])(stateFromStores, channel), 2);
  const items5 = [InviteStore];
  const stateFromStores4 = tmp2(tmp3[63]).useStateFromStores(items5, () => InviteStore.getInvites(), []);
  const tmp2Result79 = tmp2(tmp3[63]);
  const fetchVoiceChannelInviteStartTimes = tmp2(tmp3[70]).useFetchVoiceChannelInviteStartTimes(stateFromStores4);
  const tmp2Result80 = tmp2(tmp3[70]);
  const items6 = [ApplicationDirectoryApplicationsStore];
  const stateFromStoresObject = tmp2(tmp3[63]).useStateFromStoresObject(items6, () => ({ appDirectoryEmbedApplications: ApplicationDirectoryApplicationsStore.getApplications(), invalidAppDirectoryEmbedApplicationIds: ApplicationDirectoryApplicationsStore.getInvalidApplicationIds(), appDirectoryEmbedApplicationFetchStates: ApplicationDirectoryApplicationsStore.getApplicationFetchStates() }), []);
  ({ appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, appDirectoryEmbedApplicationFetchStates } = stateFromStoresObject);
  const tmp2Result81 = tmp2(tmp3[63]);
  const items7 = [stateFromStoresArray9];
  const stateFromStoresArray = tmp2(tmp3[63]).useStateFromStoresArray(items7, () => stateFromStoresArray9.getFetchingOrFailedFetchingIds());
  const tmp2Result82 = tmp2(tmp3[63]);
  const items8 = [items66];
  const stateFromStoresArray1 = tmp2(tmp3[63]).useStateFromStoresArray(items8, () => items66.getFetchingIds());
  const tmp2Result83 = tmp2(tmp3[63]);
  const items9 = [SKUStore];
  const stateFromStoresArray2 = tmp2(tmp3[63]).useStateFromStoresArray(items9, () => fetchingSkuIds.getFetchingSkuIds());
  const tmp2Result84 = tmp2(tmp3[63]);
  const items10 = [channelSummariesExperiment];
  const items11 = [id];
  const stateFromStoresArray3 = tmp2(tmp3[63]).useStateFromStoresArray(items10, () => {
    const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(id);
    const mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items11);
  const tmp2Result85 = tmp2(tmp3[63]);
  const items12 = [channelSummariesExperiment, PresenceStore];
  const stateFromStoresArray4 = tmp2(tmp3[63]).useStateFromStoresArray(items12, () => {
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
  const tmp2Result86 = tmp2(tmp3[63]);
  const items13 = [channelSummariesExperiment];
  const stateFromStoresArray5 = tmp2(tmp3[63]).useStateFromStoresArray(items13, () => {
    const set = new Set();
    const embeddedActivitiesByChannel = channelSummariesExperiment.getEmbeddedActivitiesByChannel();
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
  const tmp2Result87 = tmp2(tmp3[63]);
  const items14 = [channelSummariesExperiment];
  const stateFromStoresArray6 = tmp2(tmp3[63]).useStateFromStoresArray(items14, () => {
    const launchStates = channelSummariesExperiment.getLaunchStates();
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
  const tmp2Result88 = tmp2(tmp3[63]);
  const items15 = [MediaPostEmbedStore];
  const stateFromStores5 = tmp2(tmp3[63]).useStateFromStores(items15, () => mediaPostEmbeds.getMediaPostEmbeds());
  const tmp2Result89 = tmp2(tmp3[63]);
  const items16 = [GuildTemplateStore];
  const stateFromStores6 = tmp2(tmp3[63]).useStateFromStores(items16, () => guildTemplates.getGuildTemplates(), []);
  const tmp2Result90 = tmp2(tmp3[63]);
  const items17 = [GameOrganizationInviteStore];
  stateFromStores7 = tmp2(tmp3[63]).useStateFromStores(items17, () => invites.getInvites(), []);
  const tmp2Result91 = tmp2(tmp3[63]);
  const items18 = [GuildStore];
  const items19 = [stateFromStores7];
  const stateFromStoresArray7 = tmp2(tmp3[63]).useStateFromStoresArray(items18, () => {
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
  }, items19);
  const tmp2Result92 = tmp2(tmp3[63]);
  const items20 = [BuildOverrideStore];
  const stateFromStores8 = tmp2(tmp3[63]).useStateFromStores(items20, () => buildOverrides.getBuildOverrides(), []);
  const tmp2Result93 = tmp2(tmp3[63]);
  const codedLinksExperimentEmbeds = tmp2(tmp3[71]).useCodedLinksExperimentEmbeds();
  const tmp2Result94 = tmp2(tmp3[71]);
  const quests1 = tmp2(tmp3[72]).useQuests({ fetchPolicy: "cache-or-network", callerSource: "messages_native" });
  ({ quests, isFetchingCurrentQuests } = quests1);
  const found = stateFromStores.filter((type) => type.type === constants.PREMIUM_REFERRAL);
  let mapped = found.map((referralTrialOfferId) => referralTrialOfferId.referralTrialOfferId);
  closure_7 = mapped.filter(tmp2(tmp3[66]).isNotNullish);
  const tmp2Result95 = tmp2(tmp3[72]);
  const items21 = [ReferralTrialStore];
  const stateFromStoresArray8 = tmp2(tmp3[63]).useStateFromStoresArray(items21, () => {
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
  const tmp2Result96 = tmp2(tmp3[63]);
  const trialOffer = tmp2(tmp3[73]).useTrialOffer(closure_67);
  const tmp2Result97 = tmp2(tmp3[73]);
  const items22 = [UserStore];
  const stateFromStores9 = tmp2(tmp3[63]).useStateFromStores(items22, () => stateFromStores(id[74]).isPremiumExactly(authStore2.getCurrentUser(), TIER_2.TIER_2));
  const tmp2Result98 = tmp2(tmp3[63]);
  const items23 = [EditMessageStore];
  const items24 = [id];
  const stateFromStores10 = tmp2(tmp3[63]).useStateFromStores(items23, () => EditMessageStore.getEditingMessageId(id), items24);
  const tmp2Result99 = tmp2(tmp3[63]);
  const items25 = [PendingReplyStore];
  const items26 = [id];
  const stateFromStores11 = tmp2(tmp3[63]).useStateFromStores(items25, () => {
    const pendingReply = PendingReplyStore.getPendingReply(id);
    id = undefined;
    if (pendingReply != null) {
      id = pendingReply.message.id;
    }
    return id;
  }, items26);
  const tmp2Result100 = tmp2(tmp3[63]);
  const items27 = [ReadStateStore];
  const items28 = [id];
  const stateFromStores12 = tmp2(tmp3[63]).useStateFromStores(items27, () => ReadStateStore.getOldestUnreadMessageId(id), items28);
  const tmp2Result101 = tmp2(tmp3[63]);
  const items29 = [GuildVerificationStore];
  const items30 = [guildId];
  const stateFromStores13 = tmp2(tmp3[63]).useStateFromStores(items29, () => {
    let canChatInGuildResult = null != guildId;
    if (canChatInGuildResult) {
      canChatInGuildResult = GuildVerificationStore.canChatInGuild(tmp);
    }
    return canChatInGuildResult;
  }, items30);
  const tmp2Result102 = tmp2(tmp3[63]);
  const items31 = [PermissionStore];
  const items32 = [channel];
  const stateFromStores14 = tmp2(tmp3[63]).useStateFromStores(items31, () => PermissionStore.can(constants2.SEND_MESSAGES, channel), items32);
  const tmp2Result103 = tmp2(tmp3[63]);
  const tmp56 = stateFromStores(tmp3[75])(id);
  const items33 = [VoiceStateStore];
  const items34 = [stateFromStores2];
  const stateFromStores15 = tmp2(tmp3[63]).useStateFromStores(items33, () => VoiceStateStore.getUserVoiceChannelId(closure_2_63, stateFromStores2), items34);
  const tmp2Result104 = tmp2(tmp3[63]);
  const items35 = [RTCConnectionStore];
  const stateFromStores16 = tmp2(tmp3[63]).useStateFromStores(items35, () => channelId.getChannelId(), []);
  const tmp2Result105 = tmp2(tmp3[63]);
  const items36 = [ReferencedMessageStore];
  const items37 = [channel];
  const stateFromStores17 = tmp2(tmp3[63]).useStateFromStores(items36, () => {
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
  }, items37);
  const tmp2Result106 = tmp2(tmp3[63]);
  const items38 = [GiftCodeStore];
  const stateFromStoresObject1 = tmp2(tmp3[63]).useStateFromStoresObject(items38, () => ({ resolvingGiftCodes: GiftCodeStore.getResolvingCodes(), resolvedGiftCodes: GiftCodeStore.getResolvedCodes(), acceptingGiftCodes: GiftCodeStore.getAcceptingCodes() }), []);
  ({ resolvingGiftCodes, resolvedGiftCodes, acceptingGiftCodes } = stateFromStoresObject1);
  const tmp2Result107 = tmp2(tmp3[63]);
  const items39 = [ChannelRTCStore];
  const items40 = [id];
  const stateFromStores18 = tmp2(tmp3[63]).useStateFromStores(items39, () => ChannelRTCStore.getParticipants(id).length, items40);
  const tmp2Result108 = tmp2(tmp3[63]);
  const items41 = [UploadStore];
  const items42 = [id];
  const stateFromStores19 = tmp2(tmp3[63]).useStateFromStores(items41, () => UploadStore.getFiles(id), items42);
  const tmp2Result109 = tmp2(tmp3[63]);
  const items43 = [ReferencedMessageStore];
  const items44 = [id];
  const stateFromStores20 = tmp2(tmp3[63]).useStateFromStores(items43, () => ReferencedMessageStore.getReplyIdsForChannel(id), items44);
  const tmp2Result110 = tmp2(tmp3[63]);
  const items45 = [closure_7];
  const stateFromStoresObject2 = tmp2(tmp3[63]).useStateFromStoresObject(items45, () => ({ useReducedMotion: closure_7.useReducedMotion, roleStyle: closure_7.roleStyle, officialMessageStyle: closure_7.officialMessageStyle, saturation: closure_7.saturation, displayNameStylesEnabled: closure_7.displayNameStylesEnabled }), []);
  ({ useReducedMotion, roleStyle, officialMessageStyle, saturation, displayNameStylesEnabled } = stateFromStoresObject2);
  const tmp2Result111 = tmp2(tmp3[63]);
  const items46 = [ThreadMessageStore];
  const items47 = [id];
  const stateFromStores21 = tmp2(tmp3[63]).useStateFromStores(items46, () => ThreadMessageStore.getChannelThreadsVersion(id), items47);
  const tmp2Result112 = tmp2(tmp3[63]);
  const items48 = [InteractionStore];
  const stateFromStoresObject3 = tmp2(tmp3[63]).useStateFromStoresObject(items48, () => messageInteractionStates.getMessageInteractionStates());
  const tmp2Result113 = tmp2(tmp3[63]);
  const items49 = [LocalInteractionComponentStateStore];
  const tmp2Result114 = tmp2(tmp3[63]);
  [tmp69, tmp70] = stateFromStores1(tmp2(tmp3[63]).useStateFromStores(items49, () => {
    const items = [LocalInteractionComponentStateStore.getInteractionComponentStates(), LocalInteractionComponentStateStore.getInteractionComponentStateVersion()];
    return items;
  }, [], tmp2(tmp3[76]).isVersionEqual), 2);
  const tmp68 = stateFromStores1(tmp2(tmp3[63]).useStateFromStores(items49, () => {
    const items = [LocalInteractionComponentStateStore.getInteractionComponentStates(), LocalInteractionComponentStateStore.getInteractionComponentStateVersion()];
    return items;
  }, [], tmp2(tmp3[76]).isVersionEqual), 2);
  const items50 = [ExperimentStore];
  let stateFromStores22 = tmp2(tmp3[63]).useStateFromStores(items50, () => hasLoadedExperiments.hasLoadedExperiments);
  const tmp2Result115 = tmp2(tmp3[63]);
  const isSpamMessageRequest = tmp2(tmp3[77]).useIsSpamMessageRequest(channel.id);
  const tmp2Result116 = tmp2(tmp3[77]);
  let tmp74 = null != stateFromStores;
  const isMessageRequest = tmp2(tmp3[78]).useIsMessageRequest(channel.id);
  if (tmp74) {
    tmp74 = stateFromStores.ready || stateFromStores.cached;
    const tmp75 = stateFromStores.ready || stateFromStores.cached;
  }
  const tmp2Result117 = tmp2(tmp3[78]);
  const tmp76 = null != stateFromStores && stateFromStores.cached;
  const tmp77 = null != stateFromStores && stateFromStores.ready && !stateFromStores.loadingMore;
  const items51 = [GuildScheduledEventStore];
  const stateFromStores23 = tmp2(tmp3[63]).useStateFromStores(items51, () => rsvpVersion.getRsvpVersion());
  const tmp2Result118 = tmp2(tmp3[63]);
  const items52 = [GuildAutomodMessageStore];
  const stateFromStores24 = tmp2(tmp3[63]).useStateFromStores(items52, () => messagesVersion.getMessagesVersion());
  const tmp2Result119 = tmp2(tmp3[63]);
  const items53 = [GuildMemberStore];
  const stateFromStores25 = tmp2(tmp3[63]).useStateFromStores(items53, () => communicationDisabledVersion.getCommunicationDisabledVersion());
  const tmp2Result120 = tmp2(tmp3[63]);
  const items54 = [GuildMemberStore];
  const items55 = [guildId, stateFromStores];
  const stateFromStoresObject4 = tmp2(tmp3[63]).useStateFromStoresObject(items54, () => {
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
  }, items55);
  const tmp2Result121 = tmp2(tmp3[63]);
  const items56 = [PermissionStore];
  const stateFromStores26 = tmp2(tmp3[63]).useStateFromStores(items56, () => PermissionStore.can(constants2.MODERATE_MEMBERS, stateFromStores1));
  const tmp2Result122 = tmp2(tmp3[63]);
  let id1;
  if (stateFromStores1 != null) {
    id1 = stateFromStores1.id;
  }
  const tmp2Result123 = tmp2(tmp3[80]);
  const items57 = [LocaleStore];
  const stateFromStores27 = tmp2(tmp3[63]).useStateFromStores(items57, () => locale.locale);
  const tmp2Result124 = tmp2(tmp3[63]);
  const isPaymentsBlocked = tmp2(tmp3[81]).useIsPaymentsBlocked();
  const tmp2Result125 = tmp2(tmp3[81]);
  const items58 = [JoinedThreadsStore];
  const stateFromStores28 = tmp2(tmp3[63]).useStateFromStores(items58, () => {
    let hasJoinedResult = channel.isForumPost();
    if (hasJoinedResult) {
      hasJoinedResult = JoinedThreadsStore.hasJoined(id);
    }
    return hasJoinedResult;
  });
  const tmp2Result126 = tmp2(tmp3[63]);
  const items59 = [MediaPostSharePromptStore];
  const stateFromStores29 = tmp2(tmp3[63]).useStateFromStores(items59, () => MediaPostSharePromptStore.shouldDisplayPrompt(id));
  const tmp2Result127 = tmp2(tmp3[63]);
  const items60 = [PushFeedbackStore];
  const stateFromStores30 = tmp2(tmp3[63]).useStateFromStores(items60, () => eligible.isEligible());
  const tmp2Result128 = tmp2(tmp3[63]);
  const items61 = [CacheStore];
  const stateFromStores31 = tmp2(tmp3[63]).useStateFromStores(items61, () => lazyCacheStatus.getLazyCacheStatus());
  const tmp2Result129 = tmp2(tmp3[63]);
  const messageJumpAndroidKeyboardHeight = tmp2(tmp3[82]).useMessageJumpAndroidKeyboardHeight();
  const tmp2Result130 = tmp2(tmp3[82]);
  const tmp91 = stateFromStores(tmp3[83])();
  channelSummariesExperiment = tmp2(tmp3[84]).useChannelSummariesExperiment(channel);
  const tmp2Result131 = tmp2(tmp3[84]);
  const items62 = [SummaryStore];
  const items63 = [channelSummariesExperiment, channel.id];
  const stateFromStores32 = tmp2(tmp3[63]).useStateFromStores(items62, () => {
    let selectedSummaryResult = null;
    if (channelSummariesExperiment) {
      selectedSummaryResult = SummaryStore.selectedSummary(channel.id);
    }
    return selectedSummaryResult;
  }, items63);
  const items64 = [channel.id, , , , ];
  ({ hasMoreAfter: arr68[1], hasMoreBefore: arr68[2], length: arr68[3], ready: arr68[4] } = stateFromStores);
  const tmp2Result132 = tmp2(tmp3[63]);
  const effect = stateFromStores7.useEffect(() => {
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
  }, items64);
  const tmp94 = stateFromStores(tmp3[85])(channel.id);
  const shouldTrackAnnouncementMessageViews = tmp2(tmp3[87]).useShouldTrackAnnouncementMessageViews({ guild: stateFromStores1, channel, messages: stateFromStores, isMessagesReady: tmp74 });
  const tmp2Result133 = tmp2(tmp3[87]);
  const shouldTrackRichPresenceInviteEmbedViews = tmp2(tmp3[87]).useShouldTrackRichPresenceInviteEmbedViews({ messages: stateFromStores, isMessagesReady: tmp74 });
  const tmp2Result134 = tmp2(tmp3[87]);
  const shouldTrackOfficialMessageViews = tmp2(tmp3[87]).useShouldTrackOfficialMessageViews({ guild: stateFromStores1, messages: stateFromStores, isMessagesReady: tmp74 });
  const tmp2Result135 = tmp2(tmp3[87]);
  const shouldTrackVoiceInviteEmbedViews = tmp2(tmp3[87]).useShouldTrackVoiceInviteEmbedViews({ messages: stateFromStores, isMessagesReady: tmp74 });
  const tmp2Result136 = tmp2(tmp3[87]);
  const shouldDisplaySpoilerObscurity = tmp2(tmp3[88]).useShouldDisplaySpoilerObscurity(channel);
  const tmp2Result137 = tmp2(tmp3[88]);
  const items65 = [id, guildId];
  const isAgeVerified = tmp2(tmp3[89]).useIsAgeVerified();
  const effect1 = stateFromStores7.useEffect(() => {
    stateFromStores(id[90]).handleChannelSelect();
    return () => {
      stateFromStores(id[90]).handleChannelSelect();
    };
  }, items65);
  const tmp2Result138 = tmp2(tmp3[89]);
  const shouldDisableInteractiveComponents = tmp2(tmp3[91]).useShouldDisableInteractiveComponents(channel.id);
  items66 = [];
  const tmp2Result139 = tmp2(tmp3[91]);
  let item = stateFromStores.forEach((messageReference) => {
    messageReference = messageReference.messageReference;
    let message_id;
    if (messageReference != null) {
      message_id = messageReference.message_id;
    }
    if (null != message_id) {
      items66.push(message_id);
    }
  });
  const tmp104 = closure_30(channel.id);
  const tmp106 = closure_31(items66);
  const items67 = [ExplicitMediaStore];
  const items68 = [id];
  const stateFromStores33 = tmp2(tmp3[63]).useStateFromStores(items67, () => ExplicitMediaStore.getChannelFpInfo(id), items68);
  const tmp2Result140 = tmp2(tmp3[63]);
  const items69 = [FamilyCenterPendingConnectionStore];
  const stateFromStores34 = tmp2(tmp3[63]).useStateFromStores(items69, () => pendingConnection.getPendingConnection());
  const tmp2Result141 = tmp2(tmp3[63]);
  const tmp109 = stateFromStores(tmp3[92])();
  ({ unloadedContentEntryMessageIds, unloadableContentEntryMessageIds } = stateFromStores(tmp3[93])(stateFromStores));
  const tmp110 = stateFromStores(tmp3[93])(stateFromStores);
  const items70 = [UserStore];
  const stateFromStores35 = tmp2(tmp3[63]).useStateFromStores(items70, () => {
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
  const tmp2Result142 = tmp2(tmp3[63]);
  const items71 = [BasicGuildStore];
  const stateFromStores36 = tmp2(tmp3[63]).useStateFromStores(items71, () => version.getVersion());
  const tmp2Result143 = tmp2(tmp3[63]);
  const colorStore = tmp2(tmp3[94]).useColorStore((palette) => Object.keys(palette.palette).length);
  const tmp2Result144 = tmp2(tmp3[94]);
  const items72 = [EmojiStore];
  const stateFromStores37 = tmp2(tmp3[63]).useStateFromStores(items72, () => EmojiStore.getGuildEmoji(guildId));
  const tmp2Result145 = tmp2(tmp3[63]);
  const items73 = [VoiceStateStore];
  const items74 = [guildId];
  const stateFromStores38 = tmp2(tmp3[63]).useStateFromStores(items73, () => {
    if (null == guildId) {
      return null;
    } else {
      const voiceStates = VoiceStateStore.getVoiceStates(tmp);
      return messages_MessagesUtils.getVoiceStateChannelSummaryFromVoiceStates(voiceStates);
    }
  }, items74);
  const tmp2Result146 = tmp2(tmp3[63]);
  const items75 = [SortedVoiceStateStore, VoiceChannelStartTimeStore, InviteStore, ChannelStore];
  const stateFromStoresObject5 = tmp2(tmp3[63]).useStateFromStoresObject(items75, () => {
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
  const tmp2Result147 = tmp2(tmp3[63]);
  const items76 = [SessionsStore];
  stateFromStoresArray9 = tmp2(tmp3[63]).useStateFromStoresArray(items76, () => {
    const items = [...closure_1_54.getRemoteActivities(), ...closure_1_54.getHiddenActivities()];
    return items.filter(channel(id[66]).isNotNullish);
  });
  const tmp2Result148 = tmp2(tmp3[63]);
  const items77 = [ActivityLauncherStore];
  const stateFromStoresObject6 = tmp2(tmp3[63]).useStateFromStoresObject(items77, () => stateFromStoresArray9.reduce((acc, application_id) => {
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
  const tmp2Result149 = tmp2(tmp3[63]);
  const items78 = [AuthorizedAppsStore];
  const stateFromStoresArray10 = tmp2(tmp3[63]).useStateFromStoresArray(items78, () => {
    const items = [authStore.getNewestTokens(), authStore.getApplicationFetchStateVersion()];
    return items;
  }, []);
  const tmp2Result150 = tmp2(tmp3[63]);
  const items79 = [UserStore];
  const stateFromStores39 = tmp2(tmp3[63]).useStateFromStores(items79, () => {
    const currentUser = authStore2.getCurrentUser();
    let displayNameStyles;
    if (currentUser != null) {
      displayNameStyles = currentUser.displayNameStyles;
    }
    return displayNameStyles;
  });
  const tmp2Result151 = tmp2(tmp3[63]);
  const fetchSocialLayerStorefrontProductDetailsEmbedApplications = tmp2(tmp3[96]).useFetchSocialLayerStorefrontProductDetailsEmbedApplications(stateFromStores);
  const obj3 = { profile: null, children: null };
  const tmp2Result152 = tmp2(tmp3[96]);
  obj3.profile = tmp2(tmp3[99]).Profiles.Messages;
  let isThreadResult = channel.isThread();
  if (isThreadResult) {
    isThreadResult = closure_69(tmp24(tmp3[97]), { absolute: true });
  }
  const items80 = [isThreadResult, ];
  let obj4 = { ref: ref.ref, theme: stateFromStores3, saturation, isStaff: stateFromStores35, animateEmoji: setting5, animateStickers: setting6, containerWidth: tmp109, gifAutoPlay: setting7, timestampHourCycle: setting8, inlineAttachmentMedia: setting, inlineEmbedMedia: setting1, renderEmbeds: setting2, renderReactions: setting3, developerMode: setting4, roleStyle, officialMessageStyle, guildId, currentUserId: stateFromStores2, channelId: id, isMessagesReady: tmp74, isMessagesCached: tmp76, isMessagesAckable: tmp77, isMessageRequest, isSpamMessageRequest, messageAuthorActivities: tmp20, invites: stateFromStores4, appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, invalidApplicationIds: stateFromStoresArray, applicationAssetFetchingIds: stateFromStoresArray1, messages: stateFromStores, messagesWithActivitiesLaunching: stateFromStoresArray6, activityInstanceIds: stateFromStoresArray3, activityParticipants: stateFromStoresArray5, activityInstancePresenceDetails: stateFromStoresArray4, appDirectoryEmbedApplicationFetchStates, mediaPostPreviewEmbeds: stateFromStores5, guildTemplates: stateFromStores6, gameOrganizationInvites: stateFromStores7, joinedGameOrganizationGuildIds: stateFromStoresArray7, buildOverrides: stateFromStores8, fetchingSkuIds: stateFromStoresArray2, experimentEmbeds: codedLinksExperimentEmbeds, quests, isFetchingCurrentQuests, editingMessageId: stateFromStores10, replyingMessageId: stateFromStores11, oldestUnreadMessageId: stateFromStores12, canChat: stateFromStores13, canSendMessages: stateFromStores14, isCallActive: tmp56, voiceStatePrivateChannelId: stateFromStores15, currentClientVoiceChannelId: stateFromStores16, voiceStateChannelIdSummaryForGuild: stateFromStores38, resolvingGiftCodes, resolvedGiftCodes, acceptingGiftCodes, participantsLength: stateFromStores18, uploads: stateFromStores19, repliedIds: stateFromStores20, useReducedMotion, displayNameStylesEnabled, channelThreadsVersion: stateFromStores21, rsvpVersion: stateFromStores23, failedMessagesVersion: stateFromStores24, communicationDisabledVersion: stateFromStores25, messageAuthorMembers: stateFromStoresObject4, forwardGuildsVersion: stateFromStores36, interactionStates: stateFromStoresObject3, interactionComponentStates: tmp69, interactionComponentStatesVersion: tmp70, hasLoadedExperiments: null, guildSystemChannelFlags: null, currentUserCommunicationDisabled: null, renderCommunicationDisabled: null, userSettingsLocale: null, paymentsBlocked: null, isFollowingForumPost: null, showMediaPostSharePrompt: null, showPushFeedback: null, cacheStoreLoaded: null, androidKeyboardHeight: null, selectedSummary: null, selectedConversation: null, keyboardType: null, shouldTrackAnnouncementMessageViews: null, shouldTrackRichPresenceInviteEmbedViews: null, shouldTrackOfficialMessageViews: null, shouldTrackVoiceInviteEmbedViews: null, shouldObscureSpoiler: null, shouldDisableInteractiveComponents: null, channelPolls: null, messageReferencePolls: null, explicitMediaFalsePositiveInfo: null, familyCenterPendingConnection: null, threadStartingReferenceMessage: null, unloadedContentEntryMessageIds: null, unloadableContentEntryMessageIds: null, resolvedReferralTrialOfferIds: null, referralTrialOfferId: null, isPremiumTier2User: null, activityInviteMessageIds: null, guildInviteColorsFetched: null, isAgeVerified: null, guildEmojis: null, enableSwipeActions: null, selfActivities: null, activityLaunchJoinStates: null, authorizedAppsTokens: null, currentUserDisplayNameStyles: null, voiceInviteDataByChannelId: null, officialMessageColor: null };
  const tmp24Result = stateFromStores(tmp3[99]);
  if (stateFromStores22) {
    stateFromStores22 = tmp74;
  }
  obj4.hasLoadedExperiments = stateFromStores22;
  obj4.guildSystemChannelFlags = systemChannelFlags;
  obj4.currentUserCommunicationDisabled = tmp25(tmp2Result123.useCurrentUserCommunicationDisabled(id1), 2)[1];
  obj4.renderCommunicationDisabled = stateFromStores26;
  obj4.userSettingsLocale = stateFromStores27;
  obj4.paymentsBlocked = isPaymentsBlocked;
  obj4.isFollowingForumPost = stateFromStores28;
  obj4.showMediaPostSharePrompt = stateFromStores29;
  obj4.showPushFeedback = stateFromStores30;
  obj4.cacheStoreLoaded = "initializing" !== stateFromStores31;
  obj4.androidKeyboardHeight = messageJumpAndroidKeyboardHeight;
  obj4.selectedSummary = stateFromStores32;
  obj4.selectedConversation = tmp94;
  obj4.keyboardType = tmp91;
  obj4.shouldTrackAnnouncementMessageViews = shouldTrackAnnouncementMessageViews;
  obj4.shouldTrackRichPresenceInviteEmbedViews = shouldTrackRichPresenceInviteEmbedViews;
  obj4.shouldTrackOfficialMessageViews = shouldTrackOfficialMessageViews;
  obj4.shouldTrackVoiceInviteEmbedViews = shouldTrackVoiceInviteEmbedViews;
  obj4.shouldObscureSpoiler = shouldDisplaySpoilerObscurity;
  obj4.shouldDisableInteractiveComponents = shouldDisableInteractiveComponents;
  obj4.channelPolls = tmp104;
  obj4.messageReferencePolls = tmp106;
  obj4.explicitMediaFalsePositiveInfo = stateFromStores33;
  obj4.familyCenterPendingConnection = stateFromStores34;
  obj4.threadStartingReferenceMessage = stateFromStores17;
  obj4.unloadedContentEntryMessageIds = unloadedContentEntryMessageIds;
  obj4.unloadableContentEntryMessageIds = unloadableContentEntryMessageIds;
  obj4.resolvedReferralTrialOfferIds = stateFromStoresArray8;
  let id2;
  if (trialOffer != null) {
    id2 = trialOffer.id;
  }
  obj4.referralTrialOfferId = id2;
  obj4.isPremiumTier2User = stateFromStores9;
  obj4.activityInviteMessageIds = tmp27;
  obj4.guildInviteColorsFetched = colorStore;
  obj4.isAgeVerified = isAgeVerified;
  obj4.guildEmojis = stateFromStores37;
  obj4.enableSwipeActions = isMessageSwipeActionsEnabled;
  obj4.selfActivities = stateFromStoresArray9;
  obj4.activityLaunchJoinStates = stateFromStoresObject6;
  obj4.authorizedAppsTokens = stateFromStoresArray10;
  obj4.currentUserDisplayNameStyles = stateFromStores39;
  obj4.voiceInviteDataByChannelId = stateFromStoresObject5;
  let officialMessageColor;
  if (stateFromStores1 != null) {
    officialMessageColor = stateFromStores1.officialMessageColor;
  }
  obj4.officialMessageColor = officialMessageColor;
  const merged1 = Object.assign(merged);
  items80[1] = closure_69(stateFromStores(tmp3[98]), obj4);
  obj3.children = items80;
  return closure_70(tmp24Result, obj3);
});
tmp6.displayName = "MessagesConnected";
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/Messages.tsx");

export default tmp6;