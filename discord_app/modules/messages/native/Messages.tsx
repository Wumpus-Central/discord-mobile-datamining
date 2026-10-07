// === Module 11094: Messages ===

// Module 11094 (Messages)
import _modDef12 from "module_12" /* 12 */;
import discord_common_shallowEqual from "discord_common/shallowEqual" /* 568 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6665 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 9867 */;
import DimensionActionCreatorsDefault from "DimensionActionCreators" /* 10730 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ApplicationAssetsStore from "ApplicationAssetsStore" /* 7833 */;
import ApplicationStore from "ApplicationStore" /* 5124 */;
import BuildOverrideStore from "BuildOverrideStore" /* 11095 */;
import CacheStore from "CacheStore" /* 6998 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4912 */;
import VoiceChannelStartTimeStore from "VoiceChannelStartTimeStore" /* 10036 */;
import EmojiStore from "EmojiStore" /* 5645 */;
import ExperimentStore from "ExperimentStore" /* 4782 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 6806 */;
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 11096 */;
import ApplicationDirectoryApplicationsStore from "ApplicationDirectoryApplicationsStore" /* 6666 */;
import BasicGuildStore from "BasicGuildStore" /* 7625 */;
import GuildAutomodMessageStore from "GuildAutomodMessageStore" /* 7608 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7050 */;
import GuildTemplateStore from "GuildTemplateStore" /* 6979 */;
import LocalInteractionComponentStateStore from "LocalInteractionComponentStateStore" /* 7807 */;
import InteractionStore from "InteractionStore" /* 7611 */;
import MediaPostEmbedStore from "MediaPostEmbedStore" /* 11098 */;
import MediaPostSharePromptStore from "MediaPostSharePromptStore" /* 7612 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 6609 */;
import FamilyCenterPendingConnectionStore from "FamilyCenterPendingConnectionStore" /* 5109 */;
import ReferralTrialStore from "ReferralTrialStore" /* 6974 */;
import PushFeedbackStore from "PushFeedbackStore" /* 11100 */;
import PendingReplyStore from "PendingReplyStore" /* 7177 */;
import ReferencedMessageStore from "ReferencedMessageStore" /* 7115 */;
import SummaryStore from "SummaryStore" /* 9778 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4517 */;
import ThreadMessageStore from "ThreadMessageStore" /* 6819 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import EditMessageStore from "EditMessageStore" /* 7178 */;
import GiftCodeStore from "GiftCodeStore" /* 11101 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5577 */;
import InviteStore from "InviteStore" /* 4877 */;
import MessageStore from "MessageStore" /* 5116 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import PresenceStore from "PresenceStore" /* 4936 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4919 */;
import ReadStateStore from "ReadStateStore" /* 4911 */;
import SessionsStore from "SessionsStore" /* 4914 */;
import UploadStore from "UploadStore" /* 7477 */;
import UserStore from "UserStore" /* 1377 */;
import VoiceStateStore from "VoiceStateStore" /* 4915 */;
import SKUStore from "SKUStore" /* 5702 */;
import ActivityLauncherStore from "ActivityLauncherStore" /* 11128 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4920 */;

require = fn;
const PollsInteractionStore = fn(11099);
({ useChannelPollInteractions: closure_28, useMessagePollInteractions: closure_29 } = PollsInteractionStore);
const Constants = fn(1085);
({ ActivityActionTypes: closure_59, ChannelTypesSets: closure_60, ME: closure_61, MessageTypes: closure_62, Permissions: closure_63 } = Constants);
const PremiumConstants = fn(1379);
({ PREMIUM_TIER_2_REFERRAL_TRIAL_ID: closure_64, PremiumTypes: closure_65 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_66, jsxs: closure_67 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_68 = ReactCompilerGating.isReactCompilerEnabled() ? ((arr) => {
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
}) : ((arg0) => {
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
let closure_69 = ReactCompilerGating.isReactCompilerEnabled() ? ((arr, arg1) => {
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
}) : ((arg0, arg1) => {
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
const forwardRefResult = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((channel, arg1) => {
  const cResult = channel(id[59]).c(331);
  channel = channel.channel;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [MessageStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel.id) {
    function ve() {
      return MessageStore.getMessages(channel.id);
    }
    const items1 = [channel.id];
    cResult[1] = channel.id;
    cResult[2] = ve;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = ve;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let obj = channel(id[59]);
  const stateFromStores = channel(id[61]).useStateFromStores(first, tmp6, tmp7);
  id = channel.id;
  if (cResult[4] !== channel) {
    const guildId = channel.getGuildId();
    cResult[4] = channel;
    cResult[5] = guildId;
    let tmp8 = guildId;
  } else {
    tmp8 = cResult[5];
  }
  _slicedToArray = tmp8;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GuildStore];
    cResult[6] = items2;
    let tmp10 = items2;
  } else {
    tmp10 = cResult[6];
  }
  if (cResult[7] !== tmp8) {
    class Te {
      constructor() {
        return closure_44.getGuild(closure_3);
      }
    }
    cResult[7] = tmp8;
    cResult[8] = Te;
  } else {
    class Te {
      constructor() {
        return closure_44.getGuild(closure_3);
      }
    }
  }
  const tmpResult = channel(id[61]);
  const stateFromStores1 = channel(id[61]).useStateFromStores(tmp10, Te);
  if (stateFromStores1 != null) {
    class Te {
      constructor() {
        return closure_44.getGuild(closure_3);
      }
    }
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class Te {
      constructor() {
        return closure_44.getGuild(closure_3);
      }
    }
    const items3 = [AuthenticationStore];
    function ke() {
      return id.getId();
    }
    const items4 = [];
    cResult[9] = items3;
    cResult[10] = ke;
    cResult[11] = items4;
    let tmp16 = items4;
    let tmp15 = ke;
    let tmp14 = items3;
  } else {
    class Te {
      constructor() {
        return closure_44.getGuild(closure_3);
      }
    }
    tmp15 = cResult[10];
    tmp16 = cResult[11];
  }
  const tmpResult31 = channel(id[61]);
  const stateFromStores2 = channel(id[61]).useStateFromStores(tmp14, tmp15, tmp16);
  const InlineAttachmentMedia = tmp(tmp2[65]).InlineAttachmentMedia;
  const setting = InlineAttachmentMedia.useSetting();
  const InlineEmbedMedia = tmp(tmp2[65]).InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.useSetting();
  const RenderEmbeds = tmp(tmp2[65]).RenderEmbeds;
  const setting2 = RenderEmbeds.useSetting();
  const RenderReactions = tmp(tmp2[65]).RenderReactions;
  const setting3 = RenderReactions.useSetting();
  const DeveloperMode = tmp(tmp2[65]).DeveloperMode;
  const setting4 = DeveloperMode.useSetting();
  const AnimateEmoji = tmp(tmp2[65]).AnimateEmoji;
  const setting5 = AnimateEmoji.useSetting();
  const AnimateStickers = tmp(tmp2[65]).AnimateStickers;
  const setting6 = AnimateStickers.useSetting();
  const GifAutoPlay = tmp(tmp2[65]).GifAutoPlay;
  const setting7 = GifAutoPlay.useSetting();
  const TimestampHourCycle = tmp(tmp2[65]).TimestampHourCycle;
  const setting8 = TimestampHourCycle.useSetting();
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class Te {
      constructor() {
        return closure_44.getGuild(closure_3);
      }
    }
    const items5 = [ThemeStore];
    function je() {
      return theme.theme;
    }
    const items6 = [];
    cResult[12] = je;
    cResult[13] = items6;
    cResult[14] = items5;
    let tmp29 = items5;
    let tmp28 = items6;
    const tmp27 = je;
  } else {
    class Te {
      constructor() {
        return closure_44.getGuild(closure_3);
      }
    }
    tmp28 = cResult[13];
    tmp29 = cResult[14];
  }
  const tmpResult32 = channel(id[61]);
  const stateFromStores3 = channel(id[61]).useStateFromStores(tmp29, tmp27, tmp28);
  const tmpResult33 = channel(id[61]);
  const isMessageSwipeActionsEnabled = channel(id[66]).useIsMessageSwipeActionsEnabled();
  closure_68(stateFromStores);
  if (channel.linkedLobby != null) {
    class Te {
      constructor() {
        return closure_44.getGuild(closure_3);
      }
    }
  }
  closure_69(stateFromStores, undefined);
  const first1 = _slicedToArray(stateFromStores(tmp2[67])(stateFromStores, channel), 1)[0];
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    class Te {
      constructor() {
        return closure_44.getGuild(closure_3);
      }
    }
    const items7 = [InviteStore];
    function tt() {
      return InviteStore.getInvites();
    }
    const items8 = [];
    cResult[15] = items7;
    cResult[16] = tt;
    cResult[17] = items8;
    let tmp39 = items8;
    let tmp38 = tt;
    const tmp37 = items7;
  } else {
    class Te {
      constructor() {
        return closure_44.getGuild(closure_3);
      }
    }
    tmp38 = cResult[16];
    tmp39 = cResult[17];
  }
  const tmp35 = stateFromStores;
  const tmpResult34 = channel(id[66]);
  const stateFromStores4 = channel(id[61]).useStateFromStores(tmp37, tmp38, tmp39);
  const tmpResult35 = channel(id[61]);
  const fetchVoiceChannelInviteStartTimes = channel(id[68]).useFetchVoiceChannelInviteStartTimes(stateFromStores4);
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    class Te {
      constructor() {
        return closure_44.getGuild(closure_3);
      }
    }
    const items9 = [ApplicationDirectoryApplicationsStore];
    function ot() {
      return { appDirectoryEmbedApplications: ApplicationDirectoryApplicationsStore.getApplications(), invalidAppDirectoryEmbedApplicationIds: ApplicationDirectoryApplicationsStore.getInvalidApplicationIds(), appDirectoryEmbedApplicationFetchStates: ApplicationDirectoryApplicationsStore.getApplicationFetchStates() };
    }
    const items10 = [];
    cResult[18] = items9;
    cResult[19] = ot;
    cResult[20] = items10;
    let tmp44 = items10;
    let tmp43 = ot;
    const tmp42 = items9;
  } else {
    class Te {
      constructor() {
        return closure_44.getGuild(closure_3);
      }
    }
    tmp43 = cResult[19];
    tmp44 = cResult[20];
  }
  const tmpResult36 = channel(id[68]);
  const stateFromStoresObject = channel(id[61]).useStateFromStoresObject(tmp42, tmp43, tmp44);
  ({ appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, appDirectoryEmbedApplicationFetchStates } = stateFromStoresObject);
  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
    class Te {
      constructor() {
        return closure_44.getGuild(closure_3);
      }
    }
    const items11 = [ApplicationStore];
    function dt() {
      return ApplicationStore.getFetchingOrFailedFetchingIds();
    }
    cResult[21] = items11;
    cResult[22] = dt;
    let tmp47 = dt;
    const tmp46 = items11;
  } else {
    class Te {
      constructor() {
        return closure_44.getGuild(closure_3);
      }
    }
    tmp47 = cResult[22];
  }
  const tmpResult37 = channel(id[61]);
  const stateFromStoresArray = channel(id[61]).useStateFromStoresArray(tmp46, tmp47);
  if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
    class Te {
      constructor() {
        return closure_44.getGuild(closure_3);
      }
    }
    const items12 = [ApplicationAssetsStore];
    function pt() {
      return fetchingIds.getFetchingIds();
    }
    cResult[23] = items12;
    cResult[24] = pt;
    let tmp50 = pt;
    const tmp49 = items12;
  } else {
    class Te {
      constructor() {
        return closure_44.getGuild(closure_3);
      }
    }
    tmp50 = cResult[24];
  }
  const tmpResult38 = channel(id[61]);
  const stateFromStoresArray1 = channel(id[61]).useStateFromStoresArray(tmp49, tmp50);
  if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
    class Te {
      constructor() {
        return closure_44.getGuild(closure_3);
      }
    }
    const items13 = [SKUStore];
    function vt() {
      return fetchingSkuIds.getFetchingSkuIds();
    }
    cResult[25] = items13;
    cResult[26] = vt;
    let tmp53 = vt;
    const tmp52 = items13;
  } else {
    class Te {
      constructor() {
        return closure_44.getGuild(closure_3);
      }
    }
    tmp53 = cResult[26];
  }
  const tmpResult39 = channel(id[61]);
  const stateFromStoresArray2 = channel(id[61]).useStateFromStoresArray(tmp52, tmp53);
  if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
    class Te {
      constructor() {
        return closure_44.getGuild(closure_3);
      }
    }
    const items14 = [EmbeddedActivitiesStore];
    cResult[27] = items14;
    const tmp55 = items14;
  } else {
    class Te {
      constructor() {
        return closure_44.getGuild(closure_3);
      }
    }
  }
  if (cResult[28] !== id) {
    class Te {
      constructor() {
        return closure_44.getGuild(closure_3);
      }
    }
    const items15 = [id];
    cResult[28] = id;
    cResult[29] = tmp58;
    cResult[30] = items15;
    let tmp57 = items15;
  } else {
    class Te {
      constructor() {
        return closure_44.getGuild(closure_3);
      }
    }
    tmp57 = cResult[30];
  }
  const tmpResult40 = channel(id[61]);
  const stateFromStoresArray3 = channel(id[61]).useStateFromStoresArray(tmp55, tmp58, tmp57);
  if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
    class Te {
      constructor() {
        return closure_44.getGuild(closure_3);
      }
    }
    const items16 = [EmbeddedActivitiesStore, PresenceStore];
    cResult[31] = items16;
    const tmp60 = items16;
  } else {
    class Te {
      constructor() {
        return closure_44.getGuild(closure_3);
      }
    }
  }
  if (cResult[32] !== id) {
    class Et {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          const findActivityResult = PresenceStore.findActivity(iter.next().value, () => { ... });
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
    cResult[32] = id;
    cResult[33] = Et;
  } else {
    class Et {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          const findActivityResult = PresenceStore.findActivity(iter.next().value, () => { ... });
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
  const tmpResult41 = channel(id[61]);
  const stateFromStoresArray4 = channel(id[61]).useStateFromStoresArray(tmp60, Et);
  if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
    class Et {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          const findActivityResult = PresenceStore.findActivity(iter.next().value, () => { ... });
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
    class Vt {
      constructor() {
        set = new Set();
        closure_0 = set;
        embeddedActivitiesByChannel = closure_6.getEmbeddedActivitiesByChannel();
        item = embeddedActivitiesByChannel.forEach((arr, index) => {
          closure_0 = index;
          let item = arr.forEach(() => { ... });
        });
        return Array.from(set);
      }
    }
    cResult[34] = items17;
    cResult[35] = Vt;
    let tmp65 = Vt;
    const tmp64 = items17;
  } else {
    class Et {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          const findActivityResult = PresenceStore.findActivity(iter.next().value, () => { ... });
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
    tmp65 = cResult[35];
  }
  const tmpResult42 = channel(id[61]);
  const stateFromStoresArray5 = channel(id[61]).useStateFromStoresArray(tmp64, tmp65);
  if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
    class Et {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          const findActivityResult = PresenceStore.findActivity(iter.next().value, () => { ... });
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
        launchStates = closure_6.getLaunchStates();
        items = [];
        tmp2 = launchStates[Symbol.iterator]();
        while (tmp2 !== undefined) {
          tmp4 = closure_3;
          tmp5 = closure_3(tmp3, 2);
          [r10016, tmp6] = tmp5;
          tmp7 = tmp6;
          isLaunching = tmp6.isLaunching;
          if (isLaunching) {
            tmp8 = tmp6;
            isLaunching = null != tmp7.componentId;
          }
          if (isLaunching) {
            tmp9 = tmp6;
            isLaunching = tmp7.componentId.length > 0;
          }
          if (isLaunching) {
            tmp10 = tmp6;
            arr1 = items.push(tmp7.componentId);
          }
          continue;
        }
        return items;
      }
    }
    cResult[36] = items18;
    cResult[37] = Dt;
    let tmp68 = Dt;
    const tmp67 = items18;
  } else {
    class Et {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          const findActivityResult = PresenceStore.findActivity(iter.next().value, () => { ... });
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
    tmp68 = cResult[37];
  }
  const tmpResult43 = channel(id[61]);
  const stateFromStoresArray6 = channel(id[61]).useStateFromStoresArray(tmp67, tmp68);
  if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
    class Et {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          const findActivityResult = PresenceStore.findActivity(iter.next().value, () => { ... });
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
        launchStates = closure_6.getLaunchStates();
        items = [];
        tmp2 = launchStates[Symbol.iterator]();
        while (tmp2 !== undefined) {
          tmp4 = closure_3;
          tmp5 = closure_3(tmp3, 2);
          [r10016, tmp6] = tmp5;
          tmp7 = tmp6;
          isLaunching = tmp6.isLaunching;
          if (isLaunching) {
            tmp8 = tmp6;
            isLaunching = null != tmp7.componentId;
          }
          if (isLaunching) {
            tmp9 = tmp6;
            isLaunching = tmp7.componentId.length > 0;
          }
          if (isLaunching) {
            tmp10 = tmp6;
            arr1 = items.push(tmp7.componentId);
          }
          continue;
        }
        return items;
      }
    }
    cResult[38] = items19;
    cResult[39] = tmp72;
    let tmp71 = tmp72;
    const tmp70 = items19;
  } else {
    class Et {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          const findActivityResult = PresenceStore.findActivity(iter.next().value, () => { ... });
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
    tmp71 = cResult[39];
  }
  const tmpResult44 = channel(id[61]);
  const stateFromStores5 = channel(id[61]).useStateFromStores(tmp70, tmp71);
  if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
    class Et {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          const findActivityResult = PresenceStore.findActivity(iter.next().value, () => { ... });
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
    class Dt {
      constructor() {
        launchStates = closure_6.getLaunchStates();
        items = [];
        tmp2 = launchStates[Symbol.iterator]();
        while (tmp2 !== undefined) {
          tmp4 = closure_3;
          tmp5 = closure_3(tmp3, 2);
          [r10016, tmp6] = tmp5;
          tmp7 = tmp6;
          isLaunching = tmp6.isLaunching;
          if (isLaunching) {
            tmp8 = tmp6;
            isLaunching = null != tmp7.componentId;
          }
          if (isLaunching) {
            tmp9 = tmp6;
            isLaunching = tmp7.componentId.length > 0;
          }
          if (isLaunching) {
            tmp10 = tmp6;
            arr1 = items.push(tmp7.componentId);
          }
          continue;
        }
        return items;
      }
    }
    const items21 = [];
    cResult[40] = items20;
    cResult[41] = tmp77;
    cResult[42] = items21;
    let tmp76 = items21;
    let tmp75 = tmp77;
    const tmp74 = items20;
  } else {
    class Et {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          const findActivityResult = PresenceStore.findActivity(iter.next().value, () => { ... });
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
    tmp75 = cResult[41];
    tmp76 = cResult[42];
  }
  const tmpResult45 = channel(id[61]);
  const stateFromStores6 = channel(id[61]).useStateFromStores(tmp74, tmp75, tmp76);
  if (cResult[43] === Symbol.for("react.memo_cache_sentinel")) {
    class Et {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          const findActivityResult = PresenceStore.findActivity(iter.next().value, () => { ... });
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
    class Dt {
      constructor() {
        launchStates = closure_6.getLaunchStates();
        items = [];
        tmp2 = launchStates[Symbol.iterator]();
        while (tmp2 !== undefined) {
          tmp4 = closure_3;
          tmp5 = closure_3(tmp3, 2);
          [r10016, tmp6] = tmp5;
          tmp7 = tmp6;
          isLaunching = tmp6.isLaunching;
          if (isLaunching) {
            tmp8 = tmp6;
            isLaunching = null != tmp7.componentId;
          }
          if (isLaunching) {
            tmp9 = tmp6;
            isLaunching = tmp7.componentId.length > 0;
          }
          if (isLaunching) {
            tmp10 = tmp6;
            arr1 = items.push(tmp7.componentId);
          }
          continue;
        }
        return items;
      }
    }
    const items23 = [];
    cResult[43] = items22;
    cResult[44] = tmp82;
    cResult[45] = items23;
    let tmp81 = items23;
    let tmp80 = tmp82;
    const tmp79 = items22;
  } else {
    class Et {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          const findActivityResult = PresenceStore.findActivity(iter.next().value, () => { ... });
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
    tmp80 = cResult[44];
    tmp81 = cResult[45];
  }
  const tmpResult46 = channel(id[61]);
  const stateFromStores7 = channel(id[61]).useStateFromStores(tmp79, tmp80, tmp81);
  if (cResult[46] === Symbol.for("react.memo_cache_sentinel")) {
    class Et {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          const findActivityResult = PresenceStore.findActivity(iter.next().value, () => { ... });
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
    class Dt {
      constructor() {
        launchStates = closure_6.getLaunchStates();
        items = [];
        tmp2 = launchStates[Symbol.iterator]();
        while (tmp2 !== undefined) {
          tmp4 = closure_3;
          tmp5 = closure_3(tmp3, 2);
          [r10016, tmp6] = tmp5;
          tmp7 = tmp6;
          isLaunching = tmp6.isLaunching;
          if (isLaunching) {
            tmp8 = tmp6;
            isLaunching = null != tmp7.componentId;
          }
          if (isLaunching) {
            tmp9 = tmp6;
            isLaunching = tmp7.componentId.length > 0;
          }
          if (isLaunching) {
            tmp10 = tmp6;
            arr1 = items.push(tmp7.componentId);
          }
          continue;
        }
        return items;
      }
    }
    const items25 = [];
    cResult[46] = items24;
    cResult[47] = tmp87;
    cResult[48] = items25;
    let tmp86 = items25;
    let tmp85 = tmp87;
    const tmp84 = items24;
  } else {
    class Et {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          const findActivityResult = PresenceStore.findActivity(iter.next().value, () => { ... });
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
    tmp85 = cResult[47];
    tmp86 = cResult[48];
  }
  const tmpResult47 = channel(id[61]);
  const stateFromStores8 = channel(id[61]).useStateFromStores(tmp84, tmp85, tmp86);
  const tmpResult48 = channel(id[61]);
  const codedLinksExperimentEmbeds = channel(id[69]).useCodedLinksExperimentEmbeds();
  if (cResult[49] === Symbol.for("react.memo_cache_sentinel")) {
    class Et {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          const findActivityResult = PresenceStore.findActivity(iter.next().value, () => { ... });
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
    cResult[49] = tmp91;
    class Dt {
      constructor() {
        launchStates = closure_6.getLaunchStates();
        items = [];
        tmp2 = launchStates[Symbol.iterator]();
        while (tmp2 !== undefined) {
          tmp4 = closure_3;
          tmp5 = closure_3(tmp3, 2);
          [r10016, tmp6] = tmp5;
          tmp7 = tmp6;
          isLaunching = tmp6.isLaunching;
          if (isLaunching) {
            tmp8 = tmp6;
            isLaunching = null != tmp7.componentId;
          }
          if (isLaunching) {
            tmp9 = tmp6;
            isLaunching = tmp7.componentId.length > 0;
          }
          if (isLaunching) {
            tmp10 = tmp6;
            arr1 = items.push(tmp7.componentId);
          }
          continue;
        }
        return items;
      }
    }
  } else {
    class Et {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          const findActivityResult = PresenceStore.findActivity(iter.next().value, () => { ... });
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
  const tmpResult49 = channel(id[69]);
  const quests1 = channel(id[70]).useQuests(tmp90);
  ({ quests, isFetchingCurrentQuests } = quests1);
  if (cResult[50] !== stateFromStores) {
    class Et {
      constructor() {
        items = [];
        closure_0 = items;
        embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
        _loop = function _loop(iter) {
          const userIds = iter.userIds;
          iter = userIds.values();
          const findActivityResult = PresenceStore.findActivity(iter.next().value, () => { ... });
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
    if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
      class Zt {
        constructor(arg0) {
          return channel.type === closure_1_62.PREMIUM_REFERRAL;
        }
      }
      cResult[52] = Zt;
      class Dt {
        constructor() {
          launchStates = closure_6.getLaunchStates();
          items = [];
          tmp2 = launchStates[Symbol.iterator]();
          while (tmp2 !== undefined) {
            tmp4 = closure_3;
            tmp5 = closure_3(tmp3, 2);
            [r10016, tmp6] = tmp5;
            tmp7 = tmp6;
            isLaunching = tmp6.isLaunching;
            if (isLaunching) {
              tmp8 = tmp6;
              isLaunching = null != tmp7.componentId;
            }
            if (isLaunching) {
              tmp9 = tmp6;
              isLaunching = tmp7.componentId.length > 0;
            }
            if (isLaunching) {
              tmp10 = tmp6;
              arr1 = items.push(tmp7.componentId);
            }
            continue;
          }
          return items;
        }
      }
    } else {
      class Zt {
        constructor(arg0) {
          return channel.type === closure_1_62.PREMIUM_REFERRAL;
        }
      }
    }
    class Dt {
      constructor() {
        launchStates = closure_6.getLaunchStates();
        items = [];
        tmp2 = launchStates[Symbol.iterator]();
        while (tmp2 !== undefined) {
          tmp4 = closure_3;
          tmp5 = closure_3(tmp3, 2);
          [r10016, tmp6] = tmp5;
          tmp7 = tmp6;
          isLaunching = tmp6.isLaunching;
          if (isLaunching) {
            tmp8 = tmp6;
            isLaunching = null != tmp7.componentId;
          }
          if (isLaunching) {
            tmp9 = tmp6;
            isLaunching = tmp7.componentId.length > 0;
          }
          if (isLaunching) {
            tmp10 = tmp6;
            arr1 = items.push(tmp7.componentId);
          }
          continue;
        }
        return items;
      }
    }
    if (cResult[53] === Symbol.for("react.memo_cache_sentinel")) {
      class Zt {
        constructor(arg0) {
          return channel.type === closure_1_62.PREMIUM_REFERRAL;
        }
      }
      cResult[53] = tmp95;
      class Dt {
        constructor() {
          launchStates = closure_6.getLaunchStates();
          items = [];
          tmp2 = launchStates[Symbol.iterator]();
          while (tmp2 !== undefined) {
            tmp4 = closure_3;
            tmp5 = closure_3(tmp3, 2);
            [r10016, tmp6] = tmp5;
            tmp7 = tmp6;
            isLaunching = tmp6.isLaunching;
            if (isLaunching) {
              tmp8 = tmp6;
              isLaunching = null != tmp7.componentId;
            }
            if (isLaunching) {
              tmp9 = tmp6;
              isLaunching = tmp7.componentId.length > 0;
            }
            if (isLaunching) {
              tmp10 = tmp6;
              arr1 = items.push(tmp7.componentId);
            }
            continue;
          }
          return items;
        }
      }
    } else {
      class Zt {
        constructor(arg0) {
          return channel.type === closure_1_62.PREMIUM_REFERRAL;
        }
      }
    }
    const found = stateFromStores.filter(filter);
    let mapped = found.map(tmp94);
    filter = mapped.filter;
    const found1 = filter(tmp(tmp2[64]).isNotNullish);
    cResult[50] = stateFromStores;
    cResult[51] = found1;
  } else {
    class Zt {
      constructor(arg0) {
        return channel.type === closure_1_62.PREMIUM_REFERRAL;
      }
    }
    EmbeddedActivitiesStore = tmp93;
    const _Symbol = Symbol;
    class Dt {
      constructor() {
        launchStates = closure_6.getLaunchStates();
        items = [];
        tmp2 = launchStates[Symbol.iterator]();
        while (tmp2 !== undefined) {
          tmp4 = closure_3;
          tmp5 = closure_3(tmp3, 2);
          [r10016, tmp6] = tmp5;
          tmp7 = tmp6;
          isLaunching = tmp6.isLaunching;
          if (isLaunching) {
            tmp8 = tmp6;
            isLaunching = null != tmp7.componentId;
          }
          if (isLaunching) {
            tmp9 = tmp6;
            isLaunching = tmp7.componentId.length > 0;
          }
          if (isLaunching) {
            tmp10 = tmp6;
            arr1 = items.push(tmp7.componentId);
          }
          continue;
        }
        return items;
      }
    }
    if (tmp98 === Symbol.for("react.memo_cache_sentinel")) {
      class Zt {
        constructor(arg0) {
          return channel.type === closure_1_62.PREMIUM_REFERRAL;
        }
      }
      const items26 = [ReferralTrialStore];
      class Dt {
        constructor() {
          launchStates = closure_6.getLaunchStates();
          items = [];
          tmp2 = launchStates[Symbol.iterator]();
          while (tmp2 !== undefined) {
            tmp4 = closure_3;
            tmp5 = closure_3(tmp3, 2);
            [r10016, tmp6] = tmp5;
            tmp7 = tmp6;
            isLaunching = tmp6.isLaunching;
            if (isLaunching) {
              tmp8 = tmp6;
              isLaunching = null != tmp7.componentId;
            }
            if (isLaunching) {
              tmp9 = tmp6;
              isLaunching = tmp7.componentId.length > 0;
            }
            if (isLaunching) {
              tmp10 = tmp6;
              arr1 = items.push(tmp7.componentId);
            }
            continue;
          }
          return items;
        }
      }
      cResult[54] = items26;
      const tmp99 = items26;
    } else {
      class Zt {
        constructor(arg0) {
          return channel.type === closure_1_62.PREMIUM_REFERRAL;
        }
      }
    }
    if (cResult[55] !== tmp93) {
      class Zt {
        constructor(arg0) {
          return channel.type === closure_1_62.PREMIUM_REFERRAL;
        }
      }
      cResult[55] = tmp93;
      class Dt {
        constructor() {
          launchStates = closure_6.getLaunchStates();
          items = [];
          tmp2 = launchStates[Symbol.iterator]();
          while (tmp2 !== undefined) {
            tmp4 = closure_3;
            tmp5 = closure_3(tmp3, 2);
            [r10016, tmp6] = tmp5;
            tmp7 = tmp6;
            isLaunching = tmp6.isLaunching;
            if (isLaunching) {
              tmp8 = tmp6;
              isLaunching = null != tmp7.componentId;
            }
            if (isLaunching) {
              tmp9 = tmp6;
              isLaunching = tmp7.componentId.length > 0;
            }
            if (isLaunching) {
              tmp10 = tmp6;
              arr1 = items.push(tmp7.componentId);
            }
            continue;
          }
          return items;
        }
      }
      cResult[56] = tmp101;
    } else {
      class Zt {
        constructor(arg0) {
          return channel.type === closure_1_62.PREMIUM_REFERRAL;
        }
      }
    }
    const stateFromStoresArray7 = tmp(tmp2[61]).useStateFromStoresArray(tmp99, tmp101);
    const tmpResult51 = tmp(tmp2[61]);
    const trialOffer = tmp(tmp2[71]).useTrialOffer(closure_64);
    const _Symbol2 = Symbol;
    if (cResult[57] === Symbol.for("react.memo_cache_sentinel")) {
      class Zt {
        constructor(arg0) {
          return channel.type === closure_1_62.PREMIUM_REFERRAL;
        }
      }
      const items27 = [UserStore];
      class Dt {
        constructor() {
          launchStates = closure_6.getLaunchStates();
          items = [];
          tmp2 = launchStates[Symbol.iterator]();
          while (tmp2 !== undefined) {
            tmp4 = closure_3;
            tmp5 = closure_3(tmp3, 2);
            [r10016, tmp6] = tmp5;
            tmp7 = tmp6;
            isLaunching = tmp6.isLaunching;
            if (isLaunching) {
              tmp8 = tmp6;
              isLaunching = null != tmp7.componentId;
            }
            if (isLaunching) {
              tmp9 = tmp6;
              isLaunching = tmp7.componentId.length > 0;
            }
            if (isLaunching) {
              tmp10 = tmp6;
              arr1 = items.push(tmp7.componentId);
            }
            continue;
          }
          return items;
        }
      }
      cResult[57] = items27;
      cResult[58] = tmp107;
      let tmp106 = tmp107;
      const tmp105 = items27;
    } else {
      class Zt {
        constructor(arg0) {
          return channel.type === closure_1_62.PREMIUM_REFERRAL;
        }
      }
      tmp106 = cResult[58];
    }
    const tmpResult52 = tmp(tmp2[71]);
    const stateFromStores9 = tmp(tmp2[61]).useStateFromStores(tmp105, tmp106);
    const _Symbol3 = Symbol;
    if (cResult[59] === Symbol.for("react.memo_cache_sentinel")) {
      class Zt {
        constructor(arg0) {
          return channel.type === closure_1_62.PREMIUM_REFERRAL;
        }
      }
      const items28 = [EditMessageStore];
      class Dt {
        constructor() {
          launchStates = closure_6.getLaunchStates();
          items = [];
          tmp2 = launchStates[Symbol.iterator]();
          while (tmp2 !== undefined) {
            tmp4 = closure_3;
            tmp5 = closure_3(tmp3, 2);
            [r10016, tmp6] = tmp5;
            tmp7 = tmp6;
            isLaunching = tmp6.isLaunching;
            if (isLaunching) {
              tmp8 = tmp6;
              isLaunching = null != tmp7.componentId;
            }
            if (isLaunching) {
              tmp9 = tmp6;
              isLaunching = tmp7.componentId.length > 0;
            }
            if (isLaunching) {
              tmp10 = tmp6;
              arr1 = items.push(tmp7.componentId);
            }
            continue;
          }
          return items;
        }
      }
      cResult[59] = items28;
      const tmp109 = items28;
    } else {
      class Zt {
        constructor(arg0) {
          return channel.type === closure_1_62.PREMIUM_REFERRAL;
        }
      }
    }
    if (cResult[60] !== id) {
      class Zt {
        constructor(arg0) {
          return channel.type === closure_1_62.PREMIUM_REFERRAL;
        }
      }
      const items29 = [id];
      class Dt {
        constructor() {
          launchStates = closure_6.getLaunchStates();
          items = [];
          tmp2 = launchStates[Symbol.iterator]();
          while (tmp2 !== undefined) {
            tmp4 = closure_3;
            tmp5 = closure_3(tmp3, 2);
            [r10016, tmp6] = tmp5;
            tmp7 = tmp6;
            isLaunching = tmp6.isLaunching;
            if (isLaunching) {
              tmp8 = tmp6;
              isLaunching = null != tmp7.componentId;
            }
            if (isLaunching) {
              tmp9 = tmp6;
              isLaunching = tmp7.componentId.length > 0;
            }
            if (isLaunching) {
              tmp10 = tmp6;
              arr1 = items.push(tmp7.componentId);
            }
            continue;
          }
          return items;
        }
      }
      cResult[60] = id;
      cResult[61] = tmp112;
      cResult[62] = items29;
      let tmp111 = items29;
    } else {
      class Zt {
        constructor(arg0) {
          return channel.type === closure_1_62.PREMIUM_REFERRAL;
        }
      }
      tmp111 = cResult[62];
    }
    const tmpResult53 = tmp(tmp2[61]);
    const stateFromStores10 = tmp(tmp2[61]).useStateFromStores(tmp109, tmp112, tmp111);
    const _Symbol4 = Symbol;
    if (cResult[63] === Symbol.for("react.memo_cache_sentinel")) {
      class Zt {
        constructor(arg0) {
          return channel.type === closure_1_62.PREMIUM_REFERRAL;
        }
      }
      const items30 = [PendingReplyStore];
      class Dt {
        constructor() {
          launchStates = closure_6.getLaunchStates();
          items = [];
          tmp2 = launchStates[Symbol.iterator]();
          while (tmp2 !== undefined) {
            tmp4 = closure_3;
            tmp5 = closure_3(tmp3, 2);
            [r10016, tmp6] = tmp5;
            tmp7 = tmp6;
            isLaunching = tmp6.isLaunching;
            if (isLaunching) {
              tmp8 = tmp6;
              isLaunching = null != tmp7.componentId;
            }
            if (isLaunching) {
              tmp9 = tmp6;
              isLaunching = tmp7.componentId.length > 0;
            }
            if (isLaunching) {
              tmp10 = tmp6;
              arr1 = items.push(tmp7.componentId);
            }
            continue;
          }
          return items;
        }
      }
      cResult[63] = items30;
      const tmp114 = items30;
    } else {
      class Zt {
        constructor(arg0) {
          return channel.type === closure_1_62.PREMIUM_REFERRAL;
        }
      }
    }
    if (cResult[64] !== id) {
      class Zt {
        constructor(arg0) {
          return channel.type === closure_1_62.PREMIUM_REFERRAL;
        }
      }
      const items31 = [id];
      class Dt {
        constructor() {
          launchStates = closure_6.getLaunchStates();
          items = [];
          tmp2 = launchStates[Symbol.iterator]();
          while (tmp2 !== undefined) {
            tmp4 = closure_3;
            tmp5 = closure_3(tmp3, 2);
            [r10016, tmp6] = tmp5;
            tmp7 = tmp6;
            isLaunching = tmp6.isLaunching;
            if (isLaunching) {
              tmp8 = tmp6;
              isLaunching = null != tmp7.componentId;
            }
            if (isLaunching) {
              tmp9 = tmp6;
              isLaunching = tmp7.componentId.length > 0;
            }
            if (isLaunching) {
              tmp10 = tmp6;
              arr1 = items.push(tmp7.componentId);
            }
            continue;
          }
          return items;
        }
      }
      cResult[64] = id;
      cResult[65] = tmp117;
      cResult[66] = items31;
      let tmp116 = items31;
    } else {
      class Zt {
        constructor(arg0) {
          return channel.type === closure_1_62.PREMIUM_REFERRAL;
        }
      }
      tmp116 = cResult[66];
    }
    const tmpResult54 = tmp(tmp2[61]);
    const stateFromStores11 = tmp(tmp2[61]).useStateFromStores(tmp114, tmp117, tmp116);
    const _Symbol5 = Symbol;
    if (cResult[67] === Symbol.for("react.memo_cache_sentinel")) {
      class Zt {
        constructor(arg0) {
          return channel.type === closure_1_62.PREMIUM_REFERRAL;
        }
      }
      const items32 = [ReadStateStore];
      class Dt {
        constructor() {
          launchStates = closure_6.getLaunchStates();
          items = [];
          tmp2 = launchStates[Symbol.iterator]();
          while (tmp2 !== undefined) {
            tmp4 = closure_3;
            tmp5 = closure_3(tmp3, 2);
            [r10016, tmp6] = tmp5;
            tmp7 = tmp6;
            isLaunching = tmp6.isLaunching;
            if (isLaunching) {
              tmp8 = tmp6;
              isLaunching = null != tmp7.componentId;
            }
            if (isLaunching) {
              tmp9 = tmp6;
              isLaunching = tmp7.componentId.length > 0;
            }
            if (isLaunching) {
              tmp10 = tmp6;
              arr1 = items.push(tmp7.componentId);
            }
            continue;
          }
          return items;
        }
      }
      cResult[67] = items32;
      const tmp119 = items32;
    } else {
      class Zt {
        constructor(arg0) {
          return channel.type === closure_1_62.PREMIUM_REFERRAL;
        }
      }
    }
    if (cResult[68] !== id) {
      class Zt {
        constructor(arg0) {
          return channel.type === closure_1_62.PREMIUM_REFERRAL;
        }
      }
      const items33 = [id];
      class Dt {
        constructor() {
          launchStates = closure_6.getLaunchStates();
          items = [];
          tmp2 = launchStates[Symbol.iterator]();
          while (tmp2 !== undefined) {
            tmp4 = closure_3;
            tmp5 = closure_3(tmp3, 2);
            [r10016, tmp6] = tmp5;
            tmp7 = tmp6;
            isLaunching = tmp6.isLaunching;
            if (isLaunching) {
              tmp8 = tmp6;
              isLaunching = null != tmp7.componentId;
            }
            if (isLaunching) {
              tmp9 = tmp6;
              isLaunching = tmp7.componentId.length > 0;
            }
            if (isLaunching) {
              tmp10 = tmp6;
              arr1 = items.push(tmp7.componentId);
            }
            continue;
          }
          return items;
        }
      }
      cResult[68] = id;
      cResult[69] = tmp122;
      cResult[70] = items33;
      let tmp121 = items33;
    } else {
      class Zt {
        constructor(arg0) {
          return channel.type === closure_1_62.PREMIUM_REFERRAL;
        }
      }
      tmp121 = cResult[70];
    }
    const tmpResult55 = tmp(tmp2[61]);
    const stateFromStores12 = tmp(tmp2[61]).useStateFromStores(tmp119, tmp122, tmp121);
    const _Symbol6 = Symbol;
    if (cResult[71] === Symbol.for("react.memo_cache_sentinel")) {
      class Zt {
        constructor(arg0) {
          return channel.type === closure_1_62.PREMIUM_REFERRAL;
        }
      }
      const items34 = [GuildVerificationStore];
      class Dt {
        constructor() {
          launchStates = closure_6.getLaunchStates();
          items = [];
          tmp2 = launchStates[Symbol.iterator]();
          while (tmp2 !== undefined) {
            tmp4 = closure_3;
            tmp5 = closure_3(tmp3, 2);
            [r10016, tmp6] = tmp5;
            tmp7 = tmp6;
            isLaunching = tmp6.isLaunching;
            if (isLaunching) {
              tmp8 = tmp6;
              isLaunching = null != tmp7.componentId;
            }
            if (isLaunching) {
              tmp9 = tmp6;
              isLaunching = tmp7.componentId.length > 0;
            }
            if (isLaunching) {
              tmp10 = tmp6;
              arr1 = items.push(tmp7.componentId);
            }
            continue;
          }
          return items;
        }
      }
      cResult[71] = items34;
      const tmp124 = items34;
    } else {
      class Zt {
        constructor(arg0) {
          return channel.type === closure_1_62.PREMIUM_REFERRAL;
        }
      }
    }
    if (cResult[72] !== tmp8) {
      class Cs {
        constructor() {
          canChatInGuildResult = null != closure_3;
          if (canChatInGuildResult) {
            tmp3 = closure_45;
            canChatInGuildResult = closure_45.canChatInGuild(tmp);
          }
          return canChatInGuildResult;
        }
      }
      const items35 = [tmp8];
      class Dt {
        constructor() {
          launchStates = closure_6.getLaunchStates();
          items = [];
          tmp2 = launchStates[Symbol.iterator]();
          while (tmp2 !== undefined) {
            tmp4 = closure_3;
            tmp5 = closure_3(tmp3, 2);
            [r10016, tmp6] = tmp5;
            tmp7 = tmp6;
            isLaunching = tmp6.isLaunching;
            if (isLaunching) {
              tmp8 = tmp6;
              isLaunching = null != tmp7.componentId;
            }
            if (isLaunching) {
              tmp9 = tmp6;
              isLaunching = tmp7.componentId.length > 0;
            }
            if (isLaunching) {
              tmp10 = tmp6;
              arr1 = items.push(tmp7.componentId);
            }
            continue;
          }
          return items;
        }
      }
      cResult[72] = tmp8;
      cResult[73] = Cs;
      cResult[74] = items35;
      let tmp126 = items35;
    } else {
      class Cs {
        constructor() {
          canChatInGuildResult = null != closure_3;
          if (canChatInGuildResult) {
            tmp3 = closure_45;
            canChatInGuildResult = closure_45.canChatInGuild(tmp);
          }
          return canChatInGuildResult;
        }
      }
      tmp126 = cResult[74];
    }
    const tmpResult56 = tmp(tmp2[61]);
    const stateFromStores13 = tmp(tmp2[61]).useStateFromStores(tmp124, Cs, tmp126);
    const _Symbol7 = Symbol;
    if (cResult[75] === Symbol.for("react.memo_cache_sentinel")) {
      class Cs {
        constructor() {
          canChatInGuildResult = null != closure_3;
          if (canChatInGuildResult) {
            tmp3 = closure_45;
            canChatInGuildResult = closure_45.canChatInGuild(tmp);
          }
          return canChatInGuildResult;
        }
      }
      const items36 = [PermissionStore];
      class Dt {
        constructor() {
          launchStates = closure_6.getLaunchStates();
          items = [];
          tmp2 = launchStates[Symbol.iterator]();
          while (tmp2 !== undefined) {
            tmp4 = closure_3;
            tmp5 = closure_3(tmp3, 2);
            [r10016, tmp6] = tmp5;
            tmp7 = tmp6;
            isLaunching = tmp6.isLaunching;
            if (isLaunching) {
              tmp8 = tmp6;
              isLaunching = null != tmp7.componentId;
            }
            if (isLaunching) {
              tmp9 = tmp6;
              isLaunching = tmp7.componentId.length > 0;
            }
            if (isLaunching) {
              tmp10 = tmp6;
              arr1 = items.push(tmp7.componentId);
            }
            continue;
          }
          return items;
        }
      }
      cResult[75] = items36;
      const tmp128 = items36;
    } else {
      class Cs {
        constructor() {
          canChatInGuildResult = null != closure_3;
          if (canChatInGuildResult) {
            tmp3 = closure_45;
            canChatInGuildResult = closure_45.canChatInGuild(tmp);
          }
          return canChatInGuildResult;
        }
      }
    }
    if (cResult[76] !== channel) {
      class Rs {
        constructor() {
          return closure_48.can(Permissions.SEND_MESSAGES, channel);
        }
      }
      const items37 = [channel];
      class Dt {
        constructor() {
          launchStates = closure_6.getLaunchStates();
          items = [];
          tmp2 = launchStates[Symbol.iterator]();
          while (tmp2 !== undefined) {
            tmp4 = closure_3;
            tmp5 = closure_3(tmp3, 2);
            [r10016, tmp6] = tmp5;
            tmp7 = tmp6;
            isLaunching = tmp6.isLaunching;
            if (isLaunching) {
              tmp8 = tmp6;
              isLaunching = null != tmp7.componentId;
            }
            if (isLaunching) {
              tmp9 = tmp6;
              isLaunching = tmp7.componentId.length > 0;
            }
            if (isLaunching) {
              tmp10 = tmp6;
              arr1 = items.push(tmp7.componentId);
            }
            continue;
          }
          return items;
        }
      }
      cResult[76] = channel;
      cResult[77] = Rs;
      cResult[78] = items37;
      let tmp130 = items37;
    } else {
      class Rs {
        constructor() {
          return closure_48.can(Permissions.SEND_MESSAGES, channel);
        }
      }
      tmp130 = cResult[78];
    }
    const tmpResult57 = tmp(tmp2[61]);
    const stateFromStores14 = tmp(tmp2[61]).useStateFromStores(tmp128, Rs, tmp130);
    tmp35(tmp2[73])(id);
    const _Symbol8 = Symbol;
    if (cResult[79] === Symbol.for("react.memo_cache_sentinel")) {
      class Rs {
        constructor() {
          return closure_48.can(Permissions.SEND_MESSAGES, channel);
        }
      }
      const items38 = [VoiceStateStore];
      class Dt {
        constructor() {
          launchStates = closure_6.getLaunchStates();
          items = [];
          tmp2 = launchStates[Symbol.iterator]();
          while (tmp2 !== undefined) {
            tmp4 = closure_3;
            tmp5 = closure_3(tmp3, 2);
            [r10016, tmp6] = tmp5;
            tmp7 = tmp6;
            isLaunching = tmp6.isLaunching;
            if (isLaunching) {
              tmp8 = tmp6;
              isLaunching = null != tmp7.componentId;
            }
            if (isLaunching) {
              tmp9 = tmp6;
              isLaunching = tmp7.componentId.length > 0;
            }
            if (isLaunching) {
              tmp10 = tmp6;
              arr1 = items.push(tmp7.componentId);
            }
            continue;
          }
          return items;
        }
      }
      cResult[79] = items38;
      const tmp133 = items38;
    } else {
      class Rs {
        constructor() {
          return closure_48.can(Permissions.SEND_MESSAGES, channel);
        }
      }
    }
    if (cResult[80] !== stateFromStores2) {
      class Ds {
        constructor() {
          return closure_55.getUserVoiceChannelId(ME, closure_5);
        }
      }
      const items39 = [stateFromStores2];
      class Dt {
        constructor() {
          launchStates = closure_6.getLaunchStates();
          items = [];
          tmp2 = launchStates[Symbol.iterator]();
          while (tmp2 !== undefined) {
            tmp4 = closure_3;
            tmp5 = closure_3(tmp3, 2);
            [r10016, tmp6] = tmp5;
            tmp7 = tmp6;
            isLaunching = tmp6.isLaunching;
            if (isLaunching) {
              tmp8 = tmp6;
              isLaunching = null != tmp7.componentId;
            }
            if (isLaunching) {
              tmp9 = tmp6;
              isLaunching = tmp7.componentId.length > 0;
            }
            if (isLaunching) {
              tmp10 = tmp6;
              arr1 = items.push(tmp7.componentId);
            }
            continue;
          }
          return items;
        }
      }
      cResult[80] = stateFromStores2;
      cResult[81] = Ds;
      cResult[82] = items39;
      let tmp135 = items39;
    } else {
      class Ds {
        constructor() {
          return closure_55.getUserVoiceChannelId(ME, closure_5);
        }
      }
      tmp135 = cResult[82];
    }
    const tmpResult58 = tmp(tmp2[61]);
    const stateFromStores15 = tmp(tmp2[61]).useStateFromStores(tmp133, Ds, tmp135);
    const _Symbol9 = Symbol;
    if (cResult[83] === Symbol.for("react.memo_cache_sentinel")) {
      class Ds {
        constructor() {
          return closure_55.getUserVoiceChannelId(ME, closure_5);
        }
      }
      const items40 = [RTCConnectionStore];
      class Gs {
        constructor() {
          return closure_1_50.getChannelId();
        }
      }
      const items41 = [];
      cResult[83] = items40;
      cResult[84] = Gs;
      cResult[85] = items41;
      let tmp139 = items41;
      let tmp138 = Gs;
      const tmp137 = items40;
    } else {
      class Ds {
        constructor() {
          return closure_55.getUserVoiceChannelId(ME, closure_5);
        }
      }
      tmp138 = cResult[84];
      tmp139 = cResult[85];
    }
    const tmpResult59 = tmp(tmp2[61]);
    const stateFromStores16 = tmp(tmp2[61]).useStateFromStores(tmp137, tmp138, tmp139);
    const _Symbol10 = Symbol;
    if (cResult[86] === Symbol.for("react.memo_cache_sentinel")) {
      class Ds {
        constructor() {
          return closure_55.getUserVoiceChannelId(ME, closure_5);
        }
      }
      const items42 = [ReferencedMessageStore];
      class Gs {
        constructor() {
          return closure_1_50.getChannelId();
        }
      }
      cResult[86] = items42;
    } else {
      class Ds {
        constructor() {
          return closure_55.getUserVoiceChannelId(ME, closure_5);
        }
      }
    }
    if (cResult[87] === channel.guild_id) {
      class Ds {
        constructor() {
          return closure_55.getUserVoiceChannelId(ME, closure_5);
        }
      }
    }
    class Bs {
      constructor() {
        THREADS = ChannelTypesSets.THREADS;
        tmp = channel;
        message = null;
        if (THREADS.has(channel.type)) {
          message = null;
          if (null != tmp.parent_id) {
            tmp3 = closure_33;
            obj = { channel_id: null, message_id: null, guild_id: null };
            ({ parent_id: obj.channel_id, id: obj.message_id, guild_id: obj.guild_id } = tmp);
            message = closure_33.getMessageByReference(obj).message;
          }
        }
        return message;
      }
    }
    cResult[87] = channel.guild_id;
    cResult[88] = channel.id;
    cResult[89] = channel.parent_id;
    cResult[90] = channel.type;
    cResult[91] = Bs;
    const tmpResult60 = tmp(tmp2[61]);
  }
  const tmpResult50 = channel(id[70]);
}) : ((channel, ref) => {
  channel = channel.channel;
  const tmp = channel;
  const tmp2 = id;
  let items = [MessageStore];
  const items1 = [channel.id];
  const stateFromStores = channel(id[61]).useStateFromStores(items, () => MessageStore.getMessages(channel.id), items1);
  id = channel.id;
  const guildId = channel.getGuildId();
  let obj = channel(id[61]);
  const items2 = [GuildStore];
  const stateFromStores1 = channel(id[61]).useStateFromStores(items2, () => GuildStore.getGuild(guildId));
  let systemChannelFlags;
  if (stateFromStores1 != null) {
    systemChannelFlags = stateFromStores1.systemChannelFlags;
  }
  const obj2 = channel(id[61]);
  const items3 = [AuthenticationStore];
  const stateFromStores2 = tmp(tmp2[61]).useStateFromStores(items3, () => id.getId(), []);
  const InlineAttachmentMedia = tmp(tmp2[65]).InlineAttachmentMedia;
  const setting = InlineAttachmentMedia.useSetting();
  const InlineEmbedMedia = tmp(tmp2[65]).InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.useSetting();
  const RenderEmbeds = tmp(tmp2[65]).RenderEmbeds;
  const setting2 = RenderEmbeds.useSetting();
  const RenderReactions = tmp(tmp2[65]).RenderReactions;
  const setting3 = RenderReactions.useSetting();
  const DeveloperMode = tmp(tmp2[65]).DeveloperMode;
  const setting4 = DeveloperMode.useSetting();
  const AnimateEmoji = tmp(tmp2[65]).AnimateEmoji;
  const setting5 = AnimateEmoji.useSetting();
  const AnimateStickers = tmp(tmp2[65]).AnimateStickers;
  const setting6 = AnimateStickers.useSetting();
  const GifAutoPlay = tmp(tmp2[65]).GifAutoPlay;
  const setting7 = GifAutoPlay.useSetting();
  const TimestampHourCycle = tmp(tmp2[65]).TimestampHourCycle;
  const setting8 = TimestampHourCycle.useSetting();
  const tmpResult = tmp(tmp2[61]);
  const items4 = [ThemeStore];
  const stateFromStores3 = tmp(tmp2[61]).useStateFromStores(items4, () => theme.theme, []);
  const tmpResult77 = tmp(tmp2[61]);
  const isMessageSwipeActionsEnabled = tmp(tmp2[66]).useIsMessageSwipeActionsEnabled();
  const linkedLobby = channel.linkedLobby;
  let application_id;
  const tmpResult78 = tmp(tmp2[66]);
  if (linkedLobby != null) {
    application_id = linkedLobby.application_id;
  }
  closure_69(stateFromStores, application_id);
  const tmp18 = closure_68(stateFromStores);
  const tmp23 = guildId;
  [tmp25, r10107] = guildId(stateFromStores(tmp2[67])(stateFromStores, channel), 2);
  const tmp24 = guildId(stateFromStores(tmp2[67])(stateFromStores, channel), 2);
  const items5 = [InviteStore];
  const stateFromStores4 = tmp(tmp2[61]).useStateFromStores(items5, () => InviteStore.getInvites(), []);
  const tmpResult79 = tmp(tmp2[61]);
  const fetchVoiceChannelInviteStartTimes = tmp(tmp2[68]).useFetchVoiceChannelInviteStartTimes(stateFromStores4);
  const tmpResult80 = tmp(tmp2[68]);
  const items6 = [ApplicationDirectoryApplicationsStore];
  const stateFromStoresObject = tmp(tmp2[61]).useStateFromStoresObject(items6, () => ({ appDirectoryEmbedApplications: ApplicationDirectoryApplicationsStore.getApplications(), invalidAppDirectoryEmbedApplicationIds: ApplicationDirectoryApplicationsStore.getInvalidApplicationIds(), appDirectoryEmbedApplicationFetchStates: ApplicationDirectoryApplicationsStore.getApplicationFetchStates() }), []);
  ({ appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, appDirectoryEmbedApplicationFetchStates } = stateFromStoresObject);
  const tmpResult81 = tmp(tmp2[61]);
  const items7 = [items64];
  const stateFromStoresArray = tmp(tmp2[61]).useStateFromStoresArray(items7, () => items64.getFetchingOrFailedFetchingIds());
  const tmpResult82 = tmp(tmp2[61]);
  const items8 = [channelSummariesExperiment];
  const stateFromStoresArray1 = tmp(tmp2[61]).useStateFromStoresArray(items8, () => channelSummariesExperiment.getFetchingIds());
  const tmpResult83 = tmp(tmp2[61]);
  const items9 = [SKUStore];
  const stateFromStoresArray2 = tmp(tmp2[61]).useStateFromStoresArray(items9, () => fetchingSkuIds.getFetchingSkuIds());
  const tmpResult84 = tmp(tmp2[61]);
  const items10 = [closure_6];
  const items11 = [id];
  const stateFromStoresArray3 = tmp(tmp2[61]).useStateFromStoresArray(items10, () => {
    const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(id);
    const mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items11);
  const tmpResult85 = tmp(tmp2[61]);
  const items12 = [closure_6, PresenceStore];
  const stateFromStoresArray4 = tmp(tmp2[61]).useStateFromStoresArray(items12, () => {
    const items = [];
    const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(id);
    function _loop2(iter) {
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
      let _loop2Result = _loop2(iter.next());
      continue;
    }
    return items;
  });
  const tmpResult86 = tmp(tmp2[61]);
  const items13 = [closure_6];
  const stateFromStoresArray5 = tmp(tmp2[61]).useStateFromStoresArray(items13, () => {
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
  const tmpResult87 = tmp(tmp2[61]);
  const items14 = [closure_6];
  const stateFromStoresArray6 = tmp(tmp2[61]).useStateFromStoresArray(items14, () => {
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
  const tmpResult88 = tmp(tmp2[61]);
  const items15 = [MediaPostEmbedStore];
  const stateFromStores5 = tmp(tmp2[61]).useStateFromStores(items15, () => mediaPostEmbeds.getMediaPostEmbeds());
  const tmpResult89 = tmp(tmp2[61]);
  const items16 = [GuildTemplateStore];
  const stateFromStores6 = tmp(tmp2[61]).useStateFromStores(items16, () => guildTemplates.getGuildTemplates(), []);
  const tmpResult90 = tmp(tmp2[61]);
  const items17 = [GameOrganizationInviteStore];
  const stateFromStores7 = tmp(tmp2[61]).useStateFromStores(items17, () => invites.getInvites(), []);
  const tmpResult91 = tmp(tmp2[61]);
  const items18 = [stateFromStoresArray8];
  const stateFromStores8 = tmp(tmp2[61]).useStateFromStores(items18, () => stateFromStoresArray8.getBuildOverrides(), []);
  const tmpResult92 = tmp(tmp2[61]);
  const codedLinksExperimentEmbeds = tmp(tmp2[69]).useCodedLinksExperimentEmbeds();
  const tmpResult93 = tmp(tmp2[69]);
  const quests1 = tmp(tmp2[70]).useQuests({ fetchPolicy: "cache-or-network", callerSource: "messages_native" });
  ({ quests, isFetchingCurrentQuests } = quests1);
  const found = stateFromStores.filter((type) => type.type === constants.PREMIUM_REFERRAL);
  let mapped = found.map((referralTrialOfferId) => referralTrialOfferId.referralTrialOfferId);
  closure_6 = mapped.filter(tmp(tmp2[64]).isNotNullish);
  const tmpResult94 = tmp(tmp2[70]);
  const items19 = [ReferralTrialStore];
  const stateFromStoresArray7 = tmp(tmp2[61]).useStateFromStoresArray(items19, () => {
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
  const tmpResult95 = tmp(tmp2[61]);
  const trialOffer = tmp(tmp2[71]).useTrialOffer(closure_64);
  const tmpResult96 = tmp(tmp2[71]);
  const items20 = [UserStore];
  const stateFromStores9 = tmp(tmp2[61]).useStateFromStores(items20, () => stateFromStores(id[72]).isPremiumExactly(authStore2.getCurrentUser(), TIER_2.TIER_2));
  const tmpResult97 = tmp(tmp2[61]);
  const items21 = [EditMessageStore];
  const items22 = [id];
  const stateFromStores10 = tmp(tmp2[61]).useStateFromStores(items21, () => EditMessageStore.getEditingMessageId(id), items22);
  const tmpResult98 = tmp(tmp2[61]);
  const items23 = [PendingReplyStore];
  const items24 = [id];
  const stateFromStores11 = tmp(tmp2[61]).useStateFromStores(items23, () => {
    const pendingReply = PendingReplyStore.getPendingReply(id);
    id = undefined;
    if (pendingReply != null) {
      id = pendingReply.message.id;
    }
    return id;
  }, items24);
  const tmpResult99 = tmp(tmp2[61]);
  const items25 = [ReadStateStore];
  const items26 = [id];
  const stateFromStores12 = tmp(tmp2[61]).useStateFromStores(items25, () => ReadStateStore.getOldestUnreadMessageId(id), items26);
  const tmpResult100 = tmp(tmp2[61]);
  const items27 = [GuildVerificationStore];
  const items28 = [guildId];
  const stateFromStores13 = tmp(tmp2[61]).useStateFromStores(items27, () => {
    let canChatInGuildResult = null != guildId;
    if (canChatInGuildResult) {
      canChatInGuildResult = GuildVerificationStore.canChatInGuild(tmp);
    }
    return canChatInGuildResult;
  }, items28);
  const tmpResult101 = tmp(tmp2[61]);
  const items29 = [PermissionStore];
  const items30 = [channel];
  const stateFromStores14 = tmp(tmp2[61]).useStateFromStores(items29, () => PermissionStore.can(constants3.SEND_MESSAGES, channel), items30);
  const tmpResult102 = tmp(tmp2[61]);
  const tmp53 = stateFromStores(tmp2[73])(id);
  const items31 = [VoiceStateStore];
  const items32 = [stateFromStores2];
  const stateFromStores15 = tmp(tmp2[61]).useStateFromStores(items31, () => VoiceStateStore.getUserVoiceChannelId(closure_2_61, stateFromStores2), items32);
  const tmpResult103 = tmp(tmp2[61]);
  const items33 = [RTCConnectionStore];
  const stateFromStores16 = tmp(tmp2[61]).useStateFromStores(items33, () => channelId.getChannelId(), []);
  const tmpResult104 = tmp(tmp2[61]);
  const items34 = [ReferencedMessageStore];
  const items35 = [channel];
  const stateFromStores17 = tmp(tmp2[61]).useStateFromStores(items34, () => {
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
  const tmpResult105 = tmp(tmp2[61]);
  const items36 = [GiftCodeStore];
  const stateFromStoresObject1 = tmp(tmp2[61]).useStateFromStoresObject(items36, () => ({ resolvingGiftCodes: GiftCodeStore.getResolvingCodes(), resolvedGiftCodes: GiftCodeStore.getResolvedCodes(), acceptingGiftCodes: GiftCodeStore.getAcceptingCodes() }), []);
  ({ resolvingGiftCodes, resolvedGiftCodes, acceptingGiftCodes } = stateFromStoresObject1);
  const tmpResult106 = tmp(tmp2[61]);
  const items37 = [ChannelRTCStore];
  const items38 = [id];
  const stateFromStores18 = tmp(tmp2[61]).useStateFromStores(items37, () => ChannelRTCStore.getParticipants(id).length, items38);
  const tmpResult107 = tmp(tmp2[61]);
  const items39 = [UploadStore];
  const items40 = [id];
  const stateFromStores19 = tmp(tmp2[61]).useStateFromStores(items39, () => UploadStore.getFiles(id), items40);
  const tmpResult108 = tmp(tmp2[61]);
  const items41 = [ReferencedMessageStore];
  const items42 = [id];
  const stateFromStores20 = tmp(tmp2[61]).useStateFromStores(items41, () => ReferencedMessageStore.getReplyIdsForChannel(id), items42);
  const tmpResult109 = tmp(tmp2[61]);
  const items43 = [stateFromStores2];
  const stateFromStoresObject2 = tmp(tmp2[61]).useStateFromStoresObject(items43, () => ({ useReducedMotion: stateFromStores2.useReducedMotion, roleStyle: stateFromStores2.roleStyle, officialMessageStyle: stateFromStores2.officialMessageStyle, saturation: stateFromStores2.saturation, displayNameStylesEnabled: stateFromStores2.displayNameStylesEnabled }), []);
  ({ useReducedMotion, roleStyle, officialMessageStyle, saturation, displayNameStylesEnabled } = stateFromStoresObject2);
  const tmpResult110 = tmp(tmp2[61]);
  const items44 = [ThreadMessageStore];
  const items45 = [id];
  const stateFromStores21 = tmp(tmp2[61]).useStateFromStores(items44, () => ThreadMessageStore.getChannelThreadsVersion(id), items45);
  const tmpResult111 = tmp(tmp2[61]);
  const items46 = [InteractionStore];
  const stateFromStoresObject3 = tmp(tmp2[61]).useStateFromStoresObject(items46, () => messageInteractionStates.getMessageInteractionStates());
  const tmpResult112 = tmp(tmp2[61]);
  const items47 = [LocalInteractionComponentStateStore];
  const tmpResult113 = tmp(tmp2[61]);
  [tmp66, tmp67] = guildId(tmp(tmp2[61]).useStateFromStores(items47, () => {
    const items = [LocalInteractionComponentStateStore.getInteractionComponentStates(), LocalInteractionComponentStateStore.getInteractionComponentStateVersion()];
    return items;
  }, [], tmp(tmp2[74]).isVersionEqual), 2);
  const tmp65 = guildId(tmp(tmp2[61]).useStateFromStores(items47, () => {
    const items = [LocalInteractionComponentStateStore.getInteractionComponentStates(), LocalInteractionComponentStateStore.getInteractionComponentStateVersion()];
    return items;
  }, [], tmp(tmp2[74]).isVersionEqual), 2);
  const items48 = [ExperimentStore];
  let stateFromStores22 = tmp(tmp2[61]).useStateFromStores(items48, () => hasLoadedExperiments.hasLoadedExperiments);
  const tmpResult114 = tmp(tmp2[61]);
  const isSpamMessageRequest = tmp(tmp2[75]).useIsSpamMessageRequest(channel.id);
  const tmpResult115 = tmp(tmp2[75]);
  let tmp71 = null != stateFromStores;
  const isMessageRequest = tmp(tmp2[76]).useIsMessageRequest(channel.id);
  if (tmp71) {
    tmp71 = stateFromStores.ready || stateFromStores.cached;
    const tmp72 = stateFromStores.ready || stateFromStores.cached;
  }
  const tmp73 = null != stateFromStores && stateFromStores.cached;
  const tmp74 = null != stateFromStores && stateFromStores.ready && !stateFromStores.loadingMore;
  const tmpResult116 = tmp(tmp2[76]);
  const items49 = [GuildScheduledEventStore];
  const stateFromStores23 = tmp(tmp2[61]).useStateFromStores(items49, () => rsvpVersion.getRsvpVersion());
  const tmpResult117 = tmp(tmp2[61]);
  const items50 = [GuildAutomodMessageStore];
  const stateFromStores24 = tmp(tmp2[61]).useStateFromStores(items50, () => messagesVersion.getMessagesVersion());
  const tmpResult118 = tmp(tmp2[61]);
  const items51 = [GuildMemberStore];
  const stateFromStores25 = tmp(tmp2[61]).useStateFromStores(items51, () => communicationDisabledVersion.getCommunicationDisabledVersion());
  const tmpResult119 = tmp(tmp2[61]);
  const items52 = [GuildMemberStore];
  const items53 = [guildId, stateFromStores];
  const stateFromStoresObject4 = tmp(tmp2[61]).useStateFromStoresObject(items52, () => {
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
  const tmpResult120 = tmp(tmp2[61]);
  const items54 = [PermissionStore];
  const stateFromStores26 = tmp(tmp2[61]).useStateFromStores(items54, () => PermissionStore.can(constants3.MODERATE_MEMBERS, stateFromStores1));
  const tmpResult121 = tmp(tmp2[61]);
  let id1;
  if (stateFromStores1 != null) {
    id1 = stateFromStores1.id;
  }
  const tmpResult122 = tmp(tmp2[78]);
  const items55 = [LocaleStore];
  const stateFromStores27 = tmp(tmp2[61]).useStateFromStores(items55, () => locale.locale);
  const tmpResult123 = tmp(tmp2[61]);
  const isPaymentsBlocked = tmp(tmp2[79]).useIsPaymentsBlocked();
  const tmpResult124 = tmp(tmp2[79]);
  const items56 = [JoinedThreadsStore];
  const stateFromStores28 = tmp(tmp2[61]).useStateFromStores(items56, () => {
    let hasJoinedResult = channel.isForumPost();
    if (hasJoinedResult) {
      hasJoinedResult = JoinedThreadsStore.hasJoined(id);
    }
    return hasJoinedResult;
  });
  const tmpResult125 = tmp(tmp2[61]);
  const items57 = [MediaPostSharePromptStore];
  const stateFromStores29 = tmp(tmp2[61]).useStateFromStores(items57, () => MediaPostSharePromptStore.shouldDisplayPrompt(id));
  const tmpResult126 = tmp(tmp2[61]);
  const items58 = [PushFeedbackStore];
  const stateFromStores30 = tmp(tmp2[61]).useStateFromStores(items58, () => eligible.isEligible());
  const tmpResult127 = tmp(tmp2[61]);
  const items59 = [CacheStore];
  const stateFromStores31 = tmp(tmp2[61]).useStateFromStores(items59, () => lazyCacheStatus.getLazyCacheStatus());
  const tmpResult128 = tmp(tmp2[61]);
  const messageJumpAndroidKeyboardHeight = tmp(tmp2[80]).useMessageJumpAndroidKeyboardHeight();
  const tmpResult129 = tmp(tmp2[80]);
  const tmp88 = stateFromStores(tmp2[81])();
  channelSummariesExperiment = tmp(tmp2[82]).useChannelSummariesExperiment(channel);
  const tmpResult130 = tmp(tmp2[82]);
  const items60 = [SummaryStore];
  const items61 = [channelSummariesExperiment, channel.id];
  const stateFromStores32 = tmp(tmp2[61]).useStateFromStores(items60, () => {
    let selectedSummaryResult = null;
    if (channelSummariesExperiment) {
      selectedSummaryResult = SummaryStore.selectedSummary(channel.id);
    }
    return selectedSummaryResult;
  }, items61);
  const tmpResult131 = tmp(tmp2[61]);
  const isConversationTopicHeaderEnabled = tmp(tmp2[83]).useIsConversationTopicHeaderEnabled(channel.guild_id, "messages_conversation_header");
  let tmp92;
  if (isConversationTopicHeaderEnabled) {
    tmp92 = tmp22(tmp2[84])(channel.id);
  }
  const items62 = [channel.id, , , , ];
  ({ hasMoreAfter: arr66[1], hasMoreBefore: arr66[2], length: arr66[3], ready: arr66[4] } = stateFromStores);
  const effect = stateFromStores1.useEffect(() => {
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
  const tmpResult132 = tmp(tmp2[83]);
  const shouldTrackAnnouncementMessageViews = tmp(tmp2[86]).useShouldTrackAnnouncementMessageViews({ guild: stateFromStores1, channel, messages: stateFromStores, isMessagesReady: tmp71 });
  const tmpResult133 = tmp(tmp2[86]);
  const shouldTrackRichPresenceInviteEmbedViews = tmp(tmp2[86]).useShouldTrackRichPresenceInviteEmbedViews({ messages: stateFromStores, isMessagesReady: tmp71 });
  const tmpResult134 = tmp(tmp2[86]);
  const shouldTrackOfficialMessageViews = tmp(tmp2[86]).useShouldTrackOfficialMessageViews({ guild: stateFromStores1, messages: stateFromStores, isMessagesReady: tmp71 });
  const tmpResult135 = tmp(tmp2[86]);
  const shouldTrackVoiceInviteEmbedViews = tmp(tmp2[86]).useShouldTrackVoiceInviteEmbedViews({ messages: stateFromStores, isMessagesReady: tmp71 });
  const tmpResult136 = tmp(tmp2[86]);
  const shouldDisplaySpoilerObscurity = tmp(tmp2[87]).useShouldDisplaySpoilerObscurity(channel);
  const tmpResult137 = tmp(tmp2[87]);
  const items63 = [id, guildId];
  const isAgeVerified = tmp(tmp2[88]).useIsAgeVerified();
  const effect1 = stateFromStores1.useEffect(() => {
    stateFromStores(id[89]).handleChannelSelect();
    return () => {
      stateFromStores(id[89]).handleChannelSelect();
    };
  }, items63);
  const tmpResult138 = tmp(tmp2[88]);
  const shouldDisableInteractiveComponents = tmp(tmp2[90]).useShouldDisableInteractiveComponents(channel.id);
  items64 = [];
  const tmpResult139 = tmp(tmp2[90]);
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
  const tmp102 = closure_28(channel.id);
  const tmp104 = closure_29(items64);
  const items65 = [ExplicitMediaStore];
  const items66 = [id];
  const stateFromStores33 = tmp(tmp2[61]).useStateFromStores(items65, () => ExplicitMediaStore.getChannelFpInfo(id), items66);
  const tmpResult140 = tmp(tmp2[61]);
  const items67 = [FamilyCenterPendingConnectionStore];
  const stateFromStores34 = tmp(tmp2[61]).useStateFromStores(items67, () => pendingConnection.getPendingConnection());
  const tmpResult141 = tmp(tmp2[61]);
  const tmp107 = stateFromStores(tmp2[91])();
  ({ unloadedContentEntryMessageIds, unloadableContentEntryMessageIds } = stateFromStores(tmp2[92])(stateFromStores));
  const tmp108 = stateFromStores(tmp2[92])(stateFromStores);
  const items68 = [UserStore];
  const stateFromStores35 = tmp(tmp2[61]).useStateFromStores(items68, () => {
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
  const tmpResult142 = tmp(tmp2[61]);
  const items69 = [BasicGuildStore];
  const stateFromStores36 = tmp(tmp2[61]).useStateFromStores(items69, () => version.getVersion());
  const tmpResult143 = tmp(tmp2[61]);
  const colorStore = tmp(tmp2[93]).useColorStore((palette) => Object.keys(palette.palette).length);
  const tmpResult144 = tmp(tmp2[93]);
  const items70 = [EmojiStore];
  const stateFromStores37 = tmp(tmp2[61]).useStateFromStores(items70, () => EmojiStore.getGuildEmoji(guildId));
  const tmpResult145 = tmp(tmp2[61]);
  const items71 = [VoiceStateStore];
  const items72 = [guildId];
  const stateFromStores38 = tmp(tmp2[61]).useStateFromStores(items71, () => {
    if (null == guildId) {
      return null;
    } else {
      const voiceStates = VoiceStateStore.getVoiceStates(tmp);
      return messages_MessagesUtils.getVoiceStateChannelSummaryFromVoiceStates(voiceStates);
    }
  }, items72);
  const tmpResult146 = tmp(tmp2[61]);
  const items73 = [SortedVoiceStateStore, VoiceChannelStartTimeStore, InviteStore, ChannelStore];
  const stateFromStoresObject5 = tmp(tmp2[61]).useStateFromStoresObject(items73, () => {
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
        let obj4 = channel(id[94]);
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
  const tmpResult147 = tmp(tmp2[61]);
  const items74 = [SessionsStore];
  stateFromStoresArray8 = tmp(tmp2[61]).useStateFromStoresArray(items74, () => {
    const items = [...closure_1_52.getRemoteActivities(), ...closure_1_52.getHiddenActivities()];
    return items.filter(channel(id[64]).isNotNullish);
  });
  const tmpResult148 = tmp(tmp2[61]);
  const items75 = [ActivityLauncherStore];
  const stateFromStoresObject6 = tmp(tmp2[61]).useStateFromStoresObject(items75, () => stateFromStoresArray8.reduce((acc, application_id) => {
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
  const tmpResult149 = tmp(tmp2[61]);
  const items76 = [AuthorizedAppsStore];
  const stateFromStoresArray9 = tmp(tmp2[61]).useStateFromStoresArray(items76, () => {
    const items = [authStore.getNewestTokens(), authStore.getApplicationFetchStateVersion()];
    return items;
  }, []);
  const tmpResult150 = tmp(tmp2[61]);
  const items77 = [UserStore];
  const stateFromStores39 = tmp(tmp2[61]).useStateFromStores(items77, () => {
    const currentUser = authStore2.getCurrentUser();
    let displayNameStyles;
    if (currentUser != null) {
      displayNameStyles = currentUser.displayNameStyles;
    }
    return displayNameStyles;
  });
  const tmpResult151 = tmp(tmp2[61]);
  const fetchSocialLayerStorefrontProductDetailsEmbedApplications = tmp(tmp2[95]).useFetchSocialLayerStorefrontProductDetailsEmbedApplications(stateFromStores);
  const obj3 = { profile: null, children: null };
  const tmpResult152 = tmp(tmp2[95]);
  obj3.profile = tmp(tmp2[98]).Profiles.Messages;
  let isThreadResult = channel.isThread();
  if (isThreadResult) {
    isThreadResult = closure_66(tmp22(tmp2[96]), { absolute: true });
  }
  const items78 = [isThreadResult, ];
  let obj4 = { ref, theme: stateFromStores3, saturation, isStaff: stateFromStores35, animateEmoji: setting5, animateStickers: setting6, containerWidth: tmp107, gifAutoPlay: setting7, timestampHourCycle: setting8, inlineAttachmentMedia: setting, inlineEmbedMedia: setting1, renderEmbeds: setting2, renderReactions: setting3, developerMode: setting4, roleStyle, officialMessageStyle, guildId, currentUserId: stateFromStores2, channelId: id, isMessagesReady: tmp71, isMessagesCached: tmp73, isMessagesAckable: tmp74, isMessageRequest, isSpamMessageRequest, messageAuthorActivities: tmp18, invites: stateFromStores4, appDirectoryEmbedApplications, invalidAppDirectoryEmbedApplicationIds, invalidApplicationIds: stateFromStoresArray, applicationAssetFetchingIds: stateFromStoresArray1, messages: stateFromStores, messagesWithActivitiesLaunching: stateFromStoresArray6, activityInstanceIds: stateFromStoresArray3, activityParticipants: stateFromStoresArray5, activityInstancePresenceDetails: stateFromStoresArray4, appDirectoryEmbedApplicationFetchStates, mediaPostPreviewEmbeds: stateFromStores5, guildTemplates: stateFromStores6, gameOrganizationInvites: stateFromStores7, buildOverrides: stateFromStores8, fetchingSkuIds: stateFromStoresArray2, experimentEmbeds: codedLinksExperimentEmbeds, quests, isFetchingCurrentQuests, editingMessageId: stateFromStores10, replyingMessageId: stateFromStores11, oldestUnreadMessageId: stateFromStores12, canChat: stateFromStores13, canSendMessages: stateFromStores14, isCallActive: tmp53, voiceStatePrivateChannelId: stateFromStores15, currentClientVoiceChannelId: stateFromStores16, voiceStateChannelIdSummaryForGuild: stateFromStores38, resolvingGiftCodes, resolvedGiftCodes, acceptingGiftCodes, participantsLength: stateFromStores18, uploads: stateFromStores19, repliedIds: stateFromStores20, useReducedMotion, displayNameStylesEnabled, channelThreadsVersion: stateFromStores21, rsvpVersion: stateFromStores23, failedMessagesVersion: stateFromStores24, communicationDisabledVersion: stateFromStores25, messageAuthorMembers: stateFromStoresObject4, forwardGuildsVersion: stateFromStores36, interactionStates: stateFromStoresObject3, interactionComponentStates: tmp66, interactionComponentStatesVersion: tmp67, hasLoadedExperiments: null, guildSystemChannelFlags: null, currentUserCommunicationDisabled: null, renderCommunicationDisabled: null, userSettingsLocale: null, paymentsBlocked: null, isFollowingForumPost: null, showMediaPostSharePrompt: null, showPushFeedback: null, cacheStoreLoaded: null, androidKeyboardHeight: null, selectedSummary: null, selectedConversation: null, keyboardType: null, shouldTrackAnnouncementMessageViews: null, shouldTrackRichPresenceInviteEmbedViews: null, shouldTrackOfficialMessageViews: null, shouldTrackVoiceInviteEmbedViews: null, shouldObscureSpoiler: null, shouldDisableInteractiveComponents: null, channelPolls: null, messageReferencePolls: null, explicitMediaFalsePositiveInfo: null, familyCenterPendingConnection: null, threadStartingReferenceMessage: null, unloadedContentEntryMessageIds: null, unloadableContentEntryMessageIds: null, resolvedReferralTrialOfferIds: null, referralTrialOfferId: null, isPremiumTier2User: null, activityInviteMessageIds: null, guildInviteColorsFetched: null, isAgeVerified: null, guildEmojis: null, enableSwipeActions: null, selfActivities: null, activityLaunchJoinStates: null, authorizedAppsTokens: null, currentUserDisplayNameStyles: null, voiceInviteDataByChannelId: null, officialMessageColor: null };
  const tmp22Result = stateFromStores(tmp2[98]);
  if (stateFromStores22) {
    stateFromStores22 = tmp71;
  }
  obj4.hasLoadedExperiments = stateFromStores22;
  obj4.guildSystemChannelFlags = systemChannelFlags;
  obj4.currentUserCommunicationDisabled = tmp23(tmpResult122.useCurrentUserCommunicationDisabled(id1), 2)[1];
  obj4.renderCommunicationDisabled = stateFromStores26;
  obj4.userSettingsLocale = stateFromStores27;
  obj4.paymentsBlocked = isPaymentsBlocked;
  obj4.isFollowingForumPost = stateFromStores28;
  obj4.showMediaPostSharePrompt = stateFromStores29;
  obj4.showPushFeedback = stateFromStores30;
  obj4.cacheStoreLoaded = "initializing" !== stateFromStores31;
  obj4.androidKeyboardHeight = messageJumpAndroidKeyboardHeight;
  obj4.selectedSummary = stateFromStores32;
  obj4.selectedConversation = tmp92;
  obj4.keyboardType = tmp88;
  obj4.shouldTrackAnnouncementMessageViews = shouldTrackAnnouncementMessageViews;
  obj4.shouldTrackRichPresenceInviteEmbedViews = shouldTrackRichPresenceInviteEmbedViews;
  obj4.shouldTrackOfficialMessageViews = shouldTrackOfficialMessageViews;
  obj4.shouldTrackVoiceInviteEmbedViews = shouldTrackVoiceInviteEmbedViews;
  obj4.shouldObscureSpoiler = shouldDisplaySpoilerObscurity;
  obj4.shouldDisableInteractiveComponents = shouldDisableInteractiveComponents;
  obj4.channelPolls = tmp102;
  obj4.messageReferencePolls = tmp104;
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
  obj4.activityInviteMessageIds = tmp25;
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
  const merged = Object.assign(channel);
  items78[1] = closure_66(stateFromStores(tmp2[97]), obj4);
  obj3.children = items78;
  return closure_67(tmp22Result, obj3);
}));
forwardRefResult.displayName = "MessagesConnected";
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/Messages.tsx");

export default forwardRefResult;