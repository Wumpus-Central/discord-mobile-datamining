// discord_app/modules/messages/native/Messages.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import shallowEqual from "../../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import ApplicationActionCreatorsDefault from "../../applications/ApplicationActionCreators.tsx";
import messages_MessagesUtils from "MessagesUtils.tsx";
import DimensionActionCreatorsDefault from "../../../actions/DimensionActionCreators.tsx";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
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
import PollsInteractionStore from "../../polls/PollsInteractionStore.tsx";
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
import Constants from "../../../Constants.tsx";
import PremiumConstants from "../../premium/PremiumConstants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _loopResult,
  _require,
  channel,
  closure_6,
  dependencyMap,
  findActivity,
  invites,
  messageReference,
  relevantUserTrialOffer,
  set,
  state,
  voiceStatesForChannelAlt;

let closure_28;
let closure_29;
let closure_59;
let closure_60;
let closure_61;
let closure_62;
let closure_63;
let closure_64;
let closure_65;
let closure_66;
let closure_67;
let _slicedToArray = _slicedToArray_mod;
({ useChannelPollInteractions: closure_28, useMessagePollInteractions: closure_29 } = PollsInteractionStore);
({
  ActivityActionTypes: closure_59,
  ChannelTypesSets: closure_60,
  ME: closure_61,
  MessageTypes: closure_62,
  Permissions: closure_63,
} = Constants);
({ PREMIUM_TIER_2_REFERRAL_TRIAL_ID: closure_64, PremiumTypes: closure_65 } = PremiumConstants);
({ jsx: closure_66, jsxs: closure_67 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_68 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arr) => {
      let closure_0;
      let tmp6;
      let tmp8;
      let tmp9;
      let tmp = _require;
      let obj = require("react");
      const cResult = obj.c(6);
      if (cResult[0] !== arr) {
        let obj2 = {};
        _require = obj2;
        const item = arr.forEach((author) => {
          const tmp = null != author.author && null != author.activity;
          if (tmp) {
            closure_0[author.author.id] = null;
          }
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
        tmp6 = items;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] !== tmp4) {
        const fn = function l() {
          let primaryActivity;
          const obj = _modDef12;
          return obj.mapValues(obj2, (arg0, arg1) => primaryActivity.getPrimaryActivity(arg1));
        };
        const items1 = [tmp4];
        cResult[3] = tmp4;
        cResult[4] = fn;
        cResult[5] = items1;
        tmp9 = items1;
        tmp8 = fn;
      } else {
        tmp8 = cResult[4];
        tmp9 = cResult[5];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStoresObject(tmp6, tmp8, tmp9);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [arg0];
      const memo = react.useMemo(() => {
        const obj = {};
        const item = closure_0.forEach((author) => {
          const tmp = null != author.author && null != author.activity;
          if (tmp) {
            obj[author.author.id] = null;
          }
        });
        return obj;
      }, items);
      let obj = require("get initialized");
      const items1 = [PresenceStore];
      const items2 = [memo];
      return obj.useStateFromStoresObject(
        items1,
        () => {
          let primaryActivity;
          const obj = _modDef12;
          return obj.mapValues(memo, (arg0, arg1) => primaryActivity.getPrimaryActivity(arg1));
        },
        items2,
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_69 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arr, arg1) => {
      let ref;
      let obj = set(576);
      const cResult = obj.c(9);
      if (cResult[0] === arg1) {
        let tmp5;
        let tmp9;
        let tmp11;
        let tmp10;
        if (cResult[1] === arr) {
          set = cResult[2];
        }
        if (cResult[3] !== tmp2) {
          const tmp6 = globalThis;
          const _Array = Array;
          arr = Array.from(tmp2);
          cResult[3] = tmp2;
          cResult[4] = arr;
          tmp5 = arr;
        } else {
          tmp5 = cResult[4];
        }
        const current = tmp5;
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [];
          cResult[5] = items;
          tmp9 = items;
        } else {
          tmp9 = cResult[5];
        }
        dependencyMap = react.useRef(tmp9);
        if (cResult[6] !== tmp5) {
          const fn = function h() {
            const obj = shallowEqual;
            if (!obj.areArraysShallowEqual(current, ref.current)) {
              const fetchApplications = ApplicationActionCreatorsDefault.fetchApplications;
              ApplicationActionCreatorsDefault;
              const arr = _modDef12(current);
              const found = arr.filter(GlobalUtils.isNotNullish);
              const iter = found.uniq();
              const applications = fetchApplications(iter.value(), false);
              ref.current = current;
            }
          };
          const items1 = [tmp5];
          cResult[6] = tmp5;
          cResult[7] = fn;
          cResult[8] = items1;
          tmp11 = items1;
          tmp10 = fn;
        } else {
          tmp10 = cResult[7];
          tmp11 = cResult[8];
        }
        const effect = react.useEffect(tmp10, tmp11);
      }
      set = new Set();
      const item = arr.forEach((applicationId) => {
        const tmp = null != applicationId.applicationId && null == applicationId.application;
        if (tmp) {
          set.add(applicationId.applicationId);
        }
      });
      if (null != arg1) {
        set.add(arg1);
      }
      cResult[0] = arg1;
      cResult[1] = arr;
      cResult[2] = set;
    }
  : (arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      const items = [arg0, arg1];
      const memo = react.useMemo(() => {
        set = new Set();
        const item = closure_0.forEach((applicationId) => {
          const tmp = null != applicationId.applicationId && null == applicationId.application;
          if (tmp) {
            set.add(applicationId.applicationId);
          }
        });
        if (null != closure_1) {
          set.add(tmp2);
        }
        return Array.from(set);
      }, items);
      const ref = react.useRef([]);
      const items1 = [memo];
      const effect = react.useEffect(() => {
        const obj = shallowEqual;
        if (!obj.areArraysShallowEqual(memo, ref.current)) {
          const fetchApplications = ApplicationActionCreatorsDefault.fetchApplications;
          ApplicationActionCreatorsDefault;
          const arr = _modDef12(memo);
          const found = arr.filter(GlobalUtils.isNotNullish);
          const iter = found.uniq();
          const applications = fetchApplications(iter.value(), false);
          ref.current = memo;
        }
      }, items1);
    };
const forwardRef = react.forwardRef;
ReactCompilerGating = ReactCompilerGating_mod;
const forwardRefResult = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel, arg1) => {
        let TIER_2;
        let appDirectoryEmbedApplicationFetchStates;
        let appDirectoryEmbedApplications;
        let channelId;
        let closure_3;
        let communicationDisabledVersion;
        let eligible;
        let fetchingIds;
        let fetchingSkuIds;
        let first;
        let found1;
        let guildTemplates;
        let hasLoadedExperiments;
        let id;
        let invalidAppDirectoryEmbedApplicationIds;
        let isFetchingCurrentQuests;
        let lazyCacheStatus;
        let locale;
        let mediaPostEmbeds;
        let messageInteractionStates;
        let messagesVersion;
        let pendingConnection;
        let quests;
        let rsvpVersion;
        let startTime;
        let theme;
        let tmp10;
        let tmp103;
        let tmp104;
        let tmp107;
        let tmp109;
        let tmp112;
        let tmp114;
        let tmp117;
        let tmp119;
        let tmp122;
        let tmp124;
        let tmp126;
        let tmp128;
        let tmp131;
        let tmp133;
        let tmp135;
        let tmp136;
        let tmp137;
        let tmp14;
        let tmp15;
        let tmp16;
        let tmp27;
        let tmp28;
        let tmp29;
        let tmp37;
        let tmp38;
        let tmp39;
        let tmp42;
        let tmp43;
        let tmp44;
        let tmp46;
        let tmp47;
        let tmp49;
        let tmp50;
        let tmp52;
        let tmp53;
        let tmp55;
        let tmp57;
        let tmp6;
        let tmp60;
        let tmp64;
        let tmp65;
        let tmp67;
        let tmp68;
        let tmp7;
        let tmp70;
        let tmp71;
        let tmp74;
        let tmp75;
        let tmp76;
        let tmp79;
        let tmp8;
        let tmp80;
        let tmp81;
        let tmp84;
        let tmp85;
        let tmp86;
        let tmp98;
        let version;
        const tmp = channel;
        let tmp2 = id;
        let obj = channel(id[59]);
        const cResult = obj.c(331);
        channel = channel.channel;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          let items = [MessageStore];
          cResult[0] = items;
          first = items;
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
          tmp7 = items1;
          tmp6 = ve;
        } else {
          tmp6 = cResult[2];
          tmp7 = cResult[3];
        }
        const tmpResult = tmp(tmp2[61]);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
        id = channel.id;
        if (cResult[4] !== channel) {
          const guildId = channel.getGuildId();
          cResult[4] = channel;
          cResult[5] = guildId;
          tmp8 = guildId;
        } else {
          tmp8 = cResult[5];
        }
        _slicedToArray = tmp8;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [GuildStore];
          cResult[6] = items2;
          tmp10 = items2;
        } else {
          tmp10 = cResult[6];
        }
        if (cResult[7] !== tmp8) {
          class Te {
            constructor() {
              return GuildStore.getGuild(closure_3);
            }
          }
          cResult[7] = tmp8;
          cResult[8] = Te;
        } else {
          class Te {
            constructor() {
              return GuildStore.getGuild(closure_3);
            }
          }
        }
        const tmpResult31 = tmp(tmp2[61]);
        const stateFromStores1 = tmpResult31.useStateFromStores(tmp10, Te);
        if (stateFromStores1 != null) {
          class Te {
            constructor() {
              return GuildStore.getGuild(closure_3);
            }
          }
        }
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          class Te {
            constructor() {
              return GuildStore.getGuild(closure_3);
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
          tmp16 = items4;
          tmp15 = ke;
          tmp14 = items3;
        } else {
          class Te {
            constructor() {
              return GuildStore.getGuild(closure_3);
            }
          }
          tmp15 = cResult[10];
          tmp16 = cResult[11];
        }
        const tmpResult32 = tmp(tmp2[61]);
        const stateFromStores2 = tmpResult32.useStateFromStores(tmp14, tmp15, tmp16);
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
              return GuildStore.getGuild(closure_3);
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
          tmp29 = items5;
          tmp28 = items6;
          tmp27 = je;
        } else {
          class Te {
            constructor() {
              return GuildStore.getGuild(closure_3);
            }
          }
          tmp28 = cResult[13];
          tmp29 = cResult[14];
        }
        const tmpResult33 = tmp(tmp2[61]);
        const stateFromStores3 = tmpResult33.useStateFromStores(tmp29, tmp27, tmp28);
        const tmpResult34 = tmp(tmp2[66]);
        const isMessageSwipeActionsEnabled = tmpResult34.useIsMessageSwipeActionsEnabled();
        closure_68(stateFromStores);
        if (channel.linkedLobby != null) {
          class Te {
            constructor() {
              return GuildStore.getGuild(closure_3);
            }
          }
        }
        closure_69(stateFromStores, undefined);
        const first1 = _slicedToArray(stateFromStores(tmp2[67])(stateFromStores, channel), 1)[0];
        const tmp35 = stateFromStores;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          class Te {
            constructor() {
              return GuildStore.getGuild(closure_3);
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
          tmp39 = items8;
          tmp38 = tt;
          tmp37 = items7;
        } else {
          class Te {
            constructor() {
              return GuildStore.getGuild(closure_3);
            }
          }
          tmp38 = cResult[16];
          tmp39 = cResult[17];
        }
        const tmpResult35 = tmp(tmp2[61]);
        const stateFromStores4 = tmpResult35.useStateFromStores(tmp37, tmp38, tmp39);
        const tmpResult36 = tmp(tmp2[68]);
        const fetchVoiceChannelInviteStartTimes = tmpResult36.useFetchVoiceChannelInviteStartTimes(stateFromStores4);
        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
          class Te {
            constructor() {
              return GuildStore.getGuild(closure_3);
            }
          }
          const items9 = [ApplicationDirectoryApplicationsStore];
          function ot() {
            const obj = {
              appDirectoryEmbedApplications: ApplicationDirectoryApplicationsStore.getApplications(),
              invalidAppDirectoryEmbedApplicationIds: ApplicationDirectoryApplicationsStore.getInvalidApplicationIds(),
              appDirectoryEmbedApplicationFetchStates:
                ApplicationDirectoryApplicationsStore.getApplicationFetchStates(),
            };
            return obj;
          }
          const items10 = [];
          cResult[18] = items9;
          cResult[19] = ot;
          cResult[20] = items10;
          tmp44 = items10;
          tmp43 = ot;
          tmp42 = items9;
        } else {
          class Te {
            constructor() {
              return GuildStore.getGuild(closure_3);
            }
          }
          tmp43 = cResult[19];
          tmp44 = cResult[20];
        }
        const tmpResult37 = tmp(tmp2[61]);
        const stateFromStoresObject = tmpResult37.useStateFromStoresObject(tmp42, tmp43, tmp44);
        ({
          appDirectoryEmbedApplications,
          invalidAppDirectoryEmbedApplicationIds,
          appDirectoryEmbedApplicationFetchStates,
        } = stateFromStoresObject);
        if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
          class Te {
            constructor() {
              return GuildStore.getGuild(closure_3);
            }
          }
          const items11 = [ApplicationStore];
          function dt() {
            return ApplicationStore.getFetchingOrFailedFetchingIds();
          }
          cResult[21] = items11;
          cResult[22] = dt;
          tmp47 = dt;
          tmp46 = items11;
        } else {
          class Te {
            constructor() {
              return GuildStore.getGuild(closure_3);
            }
          }
          tmp47 = cResult[22];
        }
        const tmpResult38 = tmp(tmp2[61]);
        const stateFromStoresArray = tmpResult38.useStateFromStoresArray(tmp46, tmp47);
        if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
          class Te {
            constructor() {
              return GuildStore.getGuild(closure_3);
            }
          }
          const items12 = [ApplicationAssetsStore];
          function pt() {
            return fetchingIds.getFetchingIds();
          }
          cResult[23] = items12;
          cResult[24] = pt;
          tmp50 = pt;
          tmp49 = items12;
        } else {
          class Te {
            constructor() {
              return GuildStore.getGuild(closure_3);
            }
          }
          tmp50 = cResult[24];
        }
        const tmpResult39 = tmp(tmp2[61]);
        const stateFromStoresArray1 = tmpResult39.useStateFromStoresArray(tmp49, tmp50);
        if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
          class Te {
            constructor() {
              return GuildStore.getGuild(closure_3);
            }
          }
          const items13 = [SKUStore];
          function vt() {
            return fetchingSkuIds.getFetchingSkuIds();
          }
          cResult[25] = items13;
          cResult[26] = vt;
          tmp53 = vt;
          tmp52 = items13;
        } else {
          class Te {
            constructor() {
              return GuildStore.getGuild(closure_3);
            }
          }
          tmp53 = cResult[26];
        }
        const tmpResult40 = tmp(tmp2[61]);
        const stateFromStoresArray2 = tmpResult40.useStateFromStoresArray(tmp52, tmp53);
        if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
          class Te {
            constructor() {
              return GuildStore.getGuild(closure_3);
            }
          }
          const items14 = [found1];
          cResult[27] = items14;
          tmp55 = items14;
        } else {
          class Te {
            constructor() {
              return GuildStore.getGuild(closure_3);
            }
          }
        }
        if (cResult[28] !== id) {
          class Te {
            constructor() {
              return GuildStore.getGuild(closure_3);
            }
          }
          const items15 = [id];
          cResult[28] = id;
          cResult[29] = tmp58;
          cResult[30] = items15;
          tmp57 = items15;
        } else {
          class Te {
            constructor() {
              return GuildStore.getGuild(closure_3);
            }
          }
          tmp57 = cResult[30];
        }
        const tmpResult41 = tmp(tmp2[61]);
        const stateFromStoresArray3 = tmpResult41.useStateFromStoresArray(tmp55, tmp58, tmp57);
        if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
          class Te {
            constructor() {
              return GuildStore.getGuild(closure_3);
            }
          }
          const items16 = [found1, PresenceStore];
          cResult[31] = items16;
          tmp60 = items16;
        } else {
          class Te {
            constructor() {
              return GuildStore.getGuild(closure_3);
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
                let closure_0 = iter;
                const userIds = iter.userIds;
                findActivity = findActivity.findActivity;
                iter = userIds.values();
                const findActivityResult = findActivity(iter.next().value, () => {
                  /* body not rendered: F152568 */
                });
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
                let closure_0 = iter;
                const userIds = iter.userIds;
                findActivity = findActivity.findActivity;
                iter = userIds.values();
                const findActivityResult = findActivity(iter.next().value, () => {
                  /* body not rendered: F152568 */
                });
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
        const tmpResult42 = tmp(tmp2[61]);
        const stateFromStoresArray4 = tmpResult42.useStateFromStoresArray(tmp60, Et);
        if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
          class Et {
            constructor() {
              items = [];
              closure_0 = items;
              embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
              _loop = function _loop(iter) {
                let closure_0 = iter;
                const userIds = iter.userIds;
                findActivity = findActivity.findActivity;
                iter = userIds.values();
                const findActivityResult = findActivity(iter.next().value, () => {
                  /* body not rendered: F152568 */
                });
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
          const items17 = [found1];
          class Vt {
            constructor() {
              set = new Set();
              closure_0 = set;
              embeddedActivitiesByChannel = closure_6.getEmbeddedActivitiesByChannel();
              item = embeddedActivitiesByChannel.forEach((arr, index) => {
                let closure_0 = index;
                let item = arr.forEach(() => {
                  /* body not rendered: F152569 */
                });
              });
              return Array.from(set);
            }
          }
          cResult[34] = items17;
          cResult[35] = Vt;
          tmp65 = Vt;
          tmp64 = items17;
        } else {
          class Et {
            constructor() {
              items = [];
              closure_0 = items;
              embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
              _loop = function _loop(iter) {
                let closure_0 = iter;
                const userIds = iter.userIds;
                findActivity = findActivity.findActivity;
                iter = userIds.values();
                const findActivityResult = findActivity(iter.next().value, () => {
                  /* body not rendered: F152568 */
                });
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
        const tmpResult43 = tmp(tmp2[61]);
        const stateFromStoresArray5 = tmpResult43.useStateFromStoresArray(tmp64, tmp65);
        if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
          class Et {
            constructor() {
              items = [];
              closure_0 = items;
              embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
              _loop = function _loop(iter) {
                let closure_0 = iter;
                const userIds = iter.userIds;
                findActivity = findActivity.findActivity;
                iter = userIds.values();
                const findActivityResult = findActivity(iter.next().value, () => {
                  /* body not rendered: F152568 */
                });
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
          const items18 = [found1];
          class Dt {
            constructor() {
              let tmp6;
              const launchStates = found1.getLaunchStates();
              const items = [];
              const tmp2 = launchStates[Symbol.iterator]();
              while (tmp2 !== undefined) {
                let tmp5 = closure_3(tmp3, 2);
                [r10016, tmp6] = tmp5;
                let isLaunching = tmp6.isLaunching && null != tmp6.componentId && tmp6.componentId.length > 0;
                if (isLaunching) {
                  let arr = items.push(tmp6.componentId);
                }
                continue;
              }
              return items;
            }
          }
          cResult[36] = items18;
          cResult[37] = Dt;
          tmp68 = Dt;
          tmp67 = items18;
        } else {
          class Et {
            constructor() {
              items = [];
              closure_0 = items;
              embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
              _loop = function _loop(iter) {
                let closure_0 = iter;
                const userIds = iter.userIds;
                findActivity = findActivity.findActivity;
                iter = userIds.values();
                const findActivityResult = findActivity(iter.next().value, () => {
                  /* body not rendered: F152568 */
                });
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
        const tmpResult44 = tmp(tmp2[61]);
        const stateFromStoresArray6 = tmpResult44.useStateFromStoresArray(tmp67, tmp68);
        if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
          class Et {
            constructor() {
              items = [];
              closure_0 = items;
              embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
              _loop = function _loop(iter) {
                let closure_0 = iter;
                const userIds = iter.userIds;
                findActivity = findActivity.findActivity;
                iter = userIds.values();
                const findActivityResult = findActivity(iter.next().value, () => {
                  /* body not rendered: F152568 */
                });
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
              let tmp6;
              const launchStates = found1.getLaunchStates();
              const items = [];
              const tmp2 = launchStates[Symbol.iterator]();
              while (tmp2 !== undefined) {
                let tmp5 = closure_3(tmp3, 2);
                [r10016, tmp6] = tmp5;
                let isLaunching = tmp6.isLaunching && null != tmp6.componentId && tmp6.componentId.length > 0;
                if (isLaunching) {
                  let arr = items.push(tmp6.componentId);
                }
                continue;
              }
              return items;
            }
          }
          cResult[38] = items19;
          cResult[39] = tmp72;
          tmp71 = tmp72;
          tmp70 = items19;
        } else {
          class Et {
            constructor() {
              items = [];
              closure_0 = items;
              embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
              _loop = function _loop(iter) {
                let closure_0 = iter;
                const userIds = iter.userIds;
                findActivity = findActivity.findActivity;
                iter = userIds.values();
                const findActivityResult = findActivity(iter.next().value, () => {
                  /* body not rendered: F152568 */
                });
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
        const tmpResult45 = tmp(tmp2[61]);
        const stateFromStores5 = tmpResult45.useStateFromStores(tmp70, tmp71);
        if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
          class Et {
            constructor() {
              items = [];
              closure_0 = items;
              embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
              _loop = function _loop(iter) {
                let closure_0 = iter;
                const userIds = iter.userIds;
                findActivity = findActivity.findActivity;
                iter = userIds.values();
                const findActivityResult = findActivity(iter.next().value, () => {
                  /* body not rendered: F152568 */
                });
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
              let tmp6;
              const launchStates = found1.getLaunchStates();
              const items = [];
              const tmp2 = launchStates[Symbol.iterator]();
              while (tmp2 !== undefined) {
                let tmp5 = closure_3(tmp3, 2);
                [r10016, tmp6] = tmp5;
                let isLaunching = tmp6.isLaunching && null != tmp6.componentId && tmp6.componentId.length > 0;
                if (isLaunching) {
                  let arr = items.push(tmp6.componentId);
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
          tmp76 = items21;
          tmp75 = tmp77;
          tmp74 = items20;
        } else {
          class Et {
            constructor() {
              items = [];
              closure_0 = items;
              embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
              _loop = function _loop(iter) {
                let closure_0 = iter;
                const userIds = iter.userIds;
                findActivity = findActivity.findActivity;
                iter = userIds.values();
                const findActivityResult = findActivity(iter.next().value, () => {
                  /* body not rendered: F152568 */
                });
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
        const tmpResult46 = tmp(tmp2[61]);
        const stateFromStores6 = tmpResult46.useStateFromStores(tmp74, tmp75, tmp76);
        if (cResult[43] === Symbol.for("react.memo_cache_sentinel")) {
          class Et {
            constructor() {
              items = [];
              closure_0 = items;
              embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
              _loop = function _loop(iter) {
                let closure_0 = iter;
                const userIds = iter.userIds;
                findActivity = findActivity.findActivity;
                iter = userIds.values();
                const findActivityResult = findActivity(iter.next().value, () => {
                  /* body not rendered: F152568 */
                });
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
              let tmp6;
              const launchStates = found1.getLaunchStates();
              const items = [];
              const tmp2 = launchStates[Symbol.iterator]();
              while (tmp2 !== undefined) {
                let tmp5 = closure_3(tmp3, 2);
                [r10016, tmp6] = tmp5;
                let isLaunching = tmp6.isLaunching && null != tmp6.componentId && tmp6.componentId.length > 0;
                if (isLaunching) {
                  let arr = items.push(tmp6.componentId);
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
          tmp81 = items23;
          tmp80 = tmp82;
          tmp79 = items22;
        } else {
          class Et {
            constructor() {
              items = [];
              closure_0 = items;
              embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
              _loop = function _loop(iter) {
                let closure_0 = iter;
                const userIds = iter.userIds;
                findActivity = findActivity.findActivity;
                iter = userIds.values();
                const findActivityResult = findActivity(iter.next().value, () => {
                  /* body not rendered: F152568 */
                });
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
        const tmpResult47 = tmp(tmp2[61]);
        const stateFromStores7 = tmpResult47.useStateFromStores(tmp79, tmp80, tmp81);
        if (cResult[46] === Symbol.for("react.memo_cache_sentinel")) {
          class Et {
            constructor() {
              items = [];
              closure_0 = items;
              embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
              _loop = function _loop(iter) {
                let closure_0 = iter;
                const userIds = iter.userIds;
                findActivity = findActivity.findActivity;
                iter = userIds.values();
                const findActivityResult = findActivity(iter.next().value, () => {
                  /* body not rendered: F152568 */
                });
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
              let tmp6;
              const launchStates = found1.getLaunchStates();
              const items = [];
              const tmp2 = launchStates[Symbol.iterator]();
              while (tmp2 !== undefined) {
                let tmp5 = closure_3(tmp3, 2);
                [r10016, tmp6] = tmp5;
                let isLaunching = tmp6.isLaunching && null != tmp6.componentId && tmp6.componentId.length > 0;
                if (isLaunching) {
                  let arr = items.push(tmp6.componentId);
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
          tmp86 = items25;
          tmp85 = tmp87;
          tmp84 = items24;
        } else {
          class Et {
            constructor() {
              items = [];
              closure_0 = items;
              embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
              _loop = function _loop(iter) {
                let closure_0 = iter;
                const userIds = iter.userIds;
                findActivity = findActivity.findActivity;
                iter = userIds.values();
                const findActivityResult = findActivity(iter.next().value, () => {
                  /* body not rendered: F152568 */
                });
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
        const tmpResult48 = tmp(tmp2[61]);
        const stateFromStores8 = tmpResult48.useStateFromStores(tmp84, tmp85, tmp86);
        const tmpResult49 = tmp(tmp2[69]);
        const codedLinksExperimentEmbeds = tmpResult49.useCodedLinksExperimentEmbeds();
        if (cResult[49] === Symbol.for("react.memo_cache_sentinel")) {
          class Et {
            constructor() {
              items = [];
              closure_0 = items;
              embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
              _loop = function _loop(iter) {
                let closure_0 = iter;
                const userIds = iter.userIds;
                findActivity = findActivity.findActivity;
                iter = userIds.values();
                const findActivityResult = findActivity(iter.next().value, () => {
                  /* body not rendered: F152568 */
                });
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
              let tmp6;
              const launchStates = found1.getLaunchStates();
              const items = [];
              const tmp2 = launchStates[Symbol.iterator]();
              while (tmp2 !== undefined) {
                let tmp5 = closure_3(tmp3, 2);
                [r10016, tmp6] = tmp5;
                let isLaunching = tmp6.isLaunching && null != tmp6.componentId && tmp6.componentId.length > 0;
                if (isLaunching) {
                  let arr = items.push(tmp6.componentId);
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
                let closure_0 = iter;
                const userIds = iter.userIds;
                findActivity = findActivity.findActivity;
                iter = userIds.values();
                const findActivityResult = findActivity(iter.next().value, () => {
                  /* body not rendered: F152568 */
                });
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
        const tmpResult50 = tmp(tmp2[70]);
        const quests1 = tmpResult50.useQuests(tmp90);
        ({ quests, isFetchingCurrentQuests } = quests1);
        if (cResult[50] !== stateFromStores) {
          class Et {
            constructor() {
              items = [];
              closure_0 = items;
              embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(id);
              _loop = function _loop(iter) {
                let closure_0 = iter;
                const userIds = iter.userIds;
                findActivity = findActivity.findActivity;
                iter = userIds.values();
                const findActivityResult = findActivity(iter.next().value, () => {
                  /* body not rendered: F152568 */
                });
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
              constructor(type) {
                return type.type === constants.PREMIUM_REFERRAL;
              }
            }
            cResult[52] = Zt;
            class Dt {
              constructor() {
                let tmp6;
                const launchStates = found1.getLaunchStates();
                const items = [];
                const tmp2 = launchStates[Symbol.iterator]();
                while (tmp2 !== undefined) {
                  let tmp5 = closure_3(tmp3, 2);
                  [r10016, tmp6] = tmp5;
                  let isLaunching = tmp6.isLaunching && null != tmp6.componentId && tmp6.componentId.length > 0;
                  if (isLaunching) {
                    let arr = items.push(tmp6.componentId);
                  }
                  continue;
                }
                return items;
              }
            }
          } else {
            class Zt {
              constructor(type) {
                return type.type === constants.PREMIUM_REFERRAL;
              }
            }
          }
          class Dt {
            constructor() {
              let tmp6;
              const launchStates = found1.getLaunchStates();
              const items = [];
              const tmp2 = launchStates[Symbol.iterator]();
              while (tmp2 !== undefined) {
                let tmp5 = closure_3(tmp3, 2);
                [r10016, tmp6] = tmp5;
                let isLaunching = tmp6.isLaunching && null != tmp6.componentId && tmp6.componentId.length > 0;
                if (isLaunching) {
                  let arr = items.push(tmp6.componentId);
                }
                continue;
              }
              return items;
            }
          }
          if (cResult[53] === Symbol.for("react.memo_cache_sentinel")) {
            class Zt {
              constructor(type) {
                return type.type === constants.PREMIUM_REFERRAL;
              }
            }
            cResult[53] = tmp96;
            class Dt {
              constructor() {
                let tmp6;
                const launchStates = found1.getLaunchStates();
                const items = [];
                const tmp2 = launchStates[Symbol.iterator]();
                while (tmp2 !== undefined) {
                  let tmp5 = closure_3(tmp3, 2);
                  [r10016, tmp6] = tmp5;
                  let isLaunching = tmp6.isLaunching && null != tmp6.componentId && tmp6.componentId.length > 0;
                  if (isLaunching) {
                    let arr = items.push(tmp6.componentId);
                  }
                  continue;
                }
                return items;
              }
            }
          } else {
            class Zt {
              constructor(type) {
                return type.type === constants.PREMIUM_REFERRAL;
              }
            }
          }
          const found = stateFromStores.filter(tmp94);
          let mapped = found.map(tmp95);
          found1 = mapped.filter(tmp(tmp2[64]).isNotNullish);
          cResult[50] = stateFromStores;
          cResult[51] = found1;
        } else {
          class Zt {
            constructor(type) {
              return type.type === constants.PREMIUM_REFERRAL;
            }
          }
        }
        found1 = tmp93;
        if (cResult[54] === Symbol.for("react.memo_cache_sentinel")) {
          class Zt {
            constructor(type) {
              return type.type === constants.PREMIUM_REFERRAL;
            }
          }
          const items26 = [ReferralTrialStore];
          class Dt {
            constructor() {
              let tmp6;
              const launchStates = found1.getLaunchStates();
              const items = [];
              const tmp2 = launchStates[Symbol.iterator]();
              while (tmp2 !== undefined) {
                let tmp5 = closure_3(tmp3, 2);
                [r10016, tmp6] = tmp5;
                let isLaunching = tmp6.isLaunching && null != tmp6.componentId && tmp6.componentId.length > 0;
                if (isLaunching) {
                  let arr = items.push(tmp6.componentId);
                }
                continue;
              }
              return items;
            }
          }
          cResult[54] = items26;
          tmp98 = items26;
        } else {
          class Zt {
            constructor(type) {
              return type.type === constants.PREMIUM_REFERRAL;
            }
          }
        }
        if (cResult[55] !== tmp93) {
          class Zt {
            constructor(type) {
              return type.type === constants.PREMIUM_REFERRAL;
            }
          }
          cResult[55] = tmp93;
          class Dt {
            constructor() {
              let tmp6;
              const launchStates = found1.getLaunchStates();
              const items = [];
              const tmp2 = launchStates[Symbol.iterator]();
              while (tmp2 !== undefined) {
                let tmp5 = closure_3(tmp3, 2);
                [r10016, tmp6] = tmp5;
                let isLaunching = tmp6.isLaunching && null != tmp6.componentId && tmp6.componentId.length > 0;
                if (isLaunching) {
                  let arr = items.push(tmp6.componentId);
                }
                continue;
              }
              return items;
            }
          }
          cResult[56] = tmp100;
        } else {
          class Zt {
            constructor(type) {
              return type.type === constants.PREMIUM_REFERRAL;
            }
          }
        }
        const tmpResult51 = tmp(tmp2[61]);
        const stateFromStoresArray7 = tmpResult51.useStateFromStoresArray(tmp98, tmp100);
        const tmpResult52 = tmp(tmp2[71]);
        const trialOffer = tmpResult52.useTrialOffer(closure_64);
        if (cResult[57] === Symbol.for("react.memo_cache_sentinel")) {
          class Zt {
            constructor(type) {
              return type.type === constants.PREMIUM_REFERRAL;
            }
          }
          const items27 = [UserStore];
          class Dt {
            constructor() {
              let tmp6;
              const launchStates = found1.getLaunchStates();
              const items = [];
              const tmp2 = launchStates[Symbol.iterator]();
              while (tmp2 !== undefined) {
                let tmp5 = closure_3(tmp3, 2);
                [r10016, tmp6] = tmp5;
                let isLaunching = tmp6.isLaunching && null != tmp6.componentId && tmp6.componentId.length > 0;
                if (isLaunching) {
                  let arr = items.push(tmp6.componentId);
                }
                continue;
              }
              return items;
            }
          }
          cResult[57] = items27;
          cResult[58] = tmp105;
          tmp104 = tmp105;
          tmp103 = items27;
        } else {
          class Zt {
            constructor(type) {
              return type.type === constants.PREMIUM_REFERRAL;
            }
          }
          tmp104 = cResult[58];
        }
        const tmpResult53 = tmp(tmp2[61]);
        const stateFromStores9 = tmpResult53.useStateFromStores(tmp103, tmp104);
        if (cResult[59] === Symbol.for("react.memo_cache_sentinel")) {
          class Zt {
            constructor(type) {
              return type.type === constants.PREMIUM_REFERRAL;
            }
          }
          const items28 = [EditMessageStore];
          class Dt {
            constructor() {
              let tmp6;
              const launchStates = found1.getLaunchStates();
              const items = [];
              const tmp2 = launchStates[Symbol.iterator]();
              while (tmp2 !== undefined) {
                let tmp5 = closure_3(tmp3, 2);
                [r10016, tmp6] = tmp5;
                let isLaunching = tmp6.isLaunching && null != tmp6.componentId && tmp6.componentId.length > 0;
                if (isLaunching) {
                  let arr = items.push(tmp6.componentId);
                }
                continue;
              }
              return items;
            }
          }
          cResult[59] = items28;
          tmp107 = items28;
        } else {
          class Zt {
            constructor(type) {
              return type.type === constants.PREMIUM_REFERRAL;
            }
          }
        }
        if (cResult[60] !== id) {
          class Zt {
            constructor(type) {
              return type.type === constants.PREMIUM_REFERRAL;
            }
          }
          const items29 = [id];
          class Dt {
            constructor() {
              let tmp6;
              const launchStates = found1.getLaunchStates();
              const items = [];
              const tmp2 = launchStates[Symbol.iterator]();
              while (tmp2 !== undefined) {
                let tmp5 = closure_3(tmp3, 2);
                [r10016, tmp6] = tmp5;
                let isLaunching = tmp6.isLaunching && null != tmp6.componentId && tmp6.componentId.length > 0;
                if (isLaunching) {
                  let arr = items.push(tmp6.componentId);
                }
                continue;
              }
              return items;
            }
          }
          cResult[60] = id;
          cResult[61] = tmp110;
          cResult[62] = items29;
          tmp109 = items29;
        } else {
          class Zt {
            constructor(type) {
              return type.type === constants.PREMIUM_REFERRAL;
            }
          }
          tmp109 = cResult[62];
        }
        const tmpResult54 = tmp(tmp2[61]);
        const stateFromStores10 = tmpResult54.useStateFromStores(tmp107, tmp110, tmp109);
        if (cResult[63] === Symbol.for("react.memo_cache_sentinel")) {
          class Zt {
            constructor(type) {
              return type.type === constants.PREMIUM_REFERRAL;
            }
          }
          const items30 = [PendingReplyStore];
          class Dt {
            constructor() {
              let tmp6;
              const launchStates = found1.getLaunchStates();
              const items = [];
              const tmp2 = launchStates[Symbol.iterator]();
              while (tmp2 !== undefined) {
                let tmp5 = closure_3(tmp3, 2);
                [r10016, tmp6] = tmp5;
                let isLaunching = tmp6.isLaunching && null != tmp6.componentId && tmp6.componentId.length > 0;
                if (isLaunching) {
                  let arr = items.push(tmp6.componentId);
                }
                continue;
              }
              return items;
            }
          }
          cResult[63] = items30;
          tmp112 = items30;
        } else {
          class Zt {
            constructor(type) {
              return type.type === constants.PREMIUM_REFERRAL;
            }
          }
        }
        if (cResult[64] !== id) {
          class Zt {
            constructor(type) {
              return type.type === constants.PREMIUM_REFERRAL;
            }
          }
          const items31 = [id];
          class Dt {
            constructor() {
              let tmp6;
              const launchStates = found1.getLaunchStates();
              const items = [];
              const tmp2 = launchStates[Symbol.iterator]();
              while (tmp2 !== undefined) {
                let tmp5 = closure_3(tmp3, 2);
                [r10016, tmp6] = tmp5;
                let isLaunching = tmp6.isLaunching && null != tmp6.componentId && tmp6.componentId.length > 0;
                if (isLaunching) {
                  let arr = items.push(tmp6.componentId);
                }
                continue;
              }
              return items;
            }
          }
          cResult[64] = id;
          cResult[65] = tmp115;
          cResult[66] = items31;
          tmp114 = items31;
        } else {
          class Zt {
            constructor(type) {
              return type.type === constants.PREMIUM_REFERRAL;
            }
          }
          tmp114 = cResult[66];
        }
        const tmpResult55 = tmp(tmp2[61]);
        const stateFromStores11 = tmpResult55.useStateFromStores(tmp112, tmp115, tmp114);
        if (cResult[67] === Symbol.for("react.memo_cache_sentinel")) {
          class Zt {
            constructor(type) {
              return type.type === constants.PREMIUM_REFERRAL;
            }
          }
          const items32 = [ReadStateStore];
          class Dt {
            constructor() {
              let tmp6;
              const launchStates = found1.getLaunchStates();
              const items = [];
              const tmp2 = launchStates[Symbol.iterator]();
              while (tmp2 !== undefined) {
                let tmp5 = closure_3(tmp3, 2);
                [r10016, tmp6] = tmp5;
                let isLaunching = tmp6.isLaunching && null != tmp6.componentId && tmp6.componentId.length > 0;
                if (isLaunching) {
                  let arr = items.push(tmp6.componentId);
                }
                continue;
              }
              return items;
            }
          }
          cResult[67] = items32;
          tmp117 = items32;
        } else {
          class Zt {
            constructor(type) {
              return type.type === constants.PREMIUM_REFERRAL;
            }
          }
        }
        if (cResult[68] !== id) {
          class Zt {
            constructor(type) {
              return type.type === constants.PREMIUM_REFERRAL;
            }
          }
          const items33 = [id];
          class Dt {
            constructor() {
              let tmp6;
              const launchStates = found1.getLaunchStates();
              const items = [];
              const tmp2 = launchStates[Symbol.iterator]();
              while (tmp2 !== undefined) {
                let tmp5 = closure_3(tmp3, 2);
                [r10016, tmp6] = tmp5;
                let isLaunching = tmp6.isLaunching && null != tmp6.componentId && tmp6.componentId.length > 0;
                if (isLaunching) {
                  let arr = items.push(tmp6.componentId);
                }
                continue;
              }
              return items;
            }
          }
          cResult[68] = id;
          cResult[69] = tmp120;
          cResult[70] = items33;
          tmp119 = items33;
        } else {
          class Zt {
            constructor(type) {
              return type.type === constants.PREMIUM_REFERRAL;
            }
          }
          tmp119 = cResult[70];
        }
        const tmpResult56 = tmp(tmp2[61]);
        const stateFromStores12 = tmpResult56.useStateFromStores(tmp117, tmp120, tmp119);
        if (cResult[71] === Symbol.for("react.memo_cache_sentinel")) {
          class Zt {
            constructor(type) {
              return type.type === constants.PREMIUM_REFERRAL;
            }
          }
          const items34 = [GuildVerificationStore];
          class Dt {
            constructor() {
              let tmp6;
              const launchStates = found1.getLaunchStates();
              const items = [];
              const tmp2 = launchStates[Symbol.iterator]();
              while (tmp2 !== undefined) {
                let tmp5 = closure_3(tmp3, 2);
                [r10016, tmp6] = tmp5;
                let isLaunching = tmp6.isLaunching && null != tmp6.componentId && tmp6.componentId.length > 0;
                if (isLaunching) {
                  let arr = items.push(tmp6.componentId);
                }
                continue;
              }
              return items;
            }
          }
          cResult[71] = items34;
          tmp122 = items34;
        } else {
          class Zt {
            constructor(type) {
              return type.type === constants.PREMIUM_REFERRAL;
            }
          }
        }
        if (cResult[72] !== tmp8) {
          class Cs {
            constructor() {
              const canChatInGuildResult = null != closure_3 && GuildVerificationStore.canChatInGuild(tmp);
              return canChatInGuildResult;
            }
          }
          const items35 = [tmp8];
          class Dt {
            constructor() {
              let tmp6;
              const launchStates = found1.getLaunchStates();
              const items = [];
              const tmp2 = launchStates[Symbol.iterator]();
              while (tmp2 !== undefined) {
                let tmp5 = closure_3(tmp3, 2);
                [r10016, tmp6] = tmp5;
                let isLaunching = tmp6.isLaunching && null != tmp6.componentId && tmp6.componentId.length > 0;
                if (isLaunching) {
                  let arr = items.push(tmp6.componentId);
                }
                continue;
              }
              return items;
            }
          }
          cResult[72] = tmp8;
          cResult[73] = Cs;
          cResult[74] = items35;
          tmp124 = items35;
        } else {
          class Cs {
            constructor() {
              const canChatInGuildResult = null != closure_3 && GuildVerificationStore.canChatInGuild(tmp);
              return canChatInGuildResult;
            }
          }
          tmp124 = cResult[74];
        }
        const tmpResult57 = tmp(tmp2[61]);
        const stateFromStores13 = tmpResult57.useStateFromStores(tmp122, Cs, tmp124);
        if (cResult[75] === Symbol.for("react.memo_cache_sentinel")) {
          class Cs {
            constructor() {
              const canChatInGuildResult = null != closure_3 && GuildVerificationStore.canChatInGuild(tmp);
              return canChatInGuildResult;
            }
          }
          const items36 = [PermissionStore];
          class Dt {
            constructor() {
              let tmp6;
              const launchStates = found1.getLaunchStates();
              const items = [];
              const tmp2 = launchStates[Symbol.iterator]();
              while (tmp2 !== undefined) {
                let tmp5 = closure_3(tmp3, 2);
                [r10016, tmp6] = tmp5;
                let isLaunching = tmp6.isLaunching && null != tmp6.componentId && tmp6.componentId.length > 0;
                if (isLaunching) {
                  let arr = items.push(tmp6.componentId);
                }
                continue;
              }
              return items;
            }
          }
          cResult[75] = items36;
          tmp126 = items36;
        } else {
          class Cs {
            constructor() {
              const canChatInGuildResult = null != closure_3 && GuildVerificationStore.canChatInGuild(tmp);
              return canChatInGuildResult;
            }
          }
        }
        if (cResult[76] !== channel) {
          class Rs {
            constructor() {
              return PermissionStore.can(constants2.SEND_MESSAGES, channel);
            }
          }
          const items37 = [channel];
          class Dt {
            constructor() {
              let tmp6;
              const launchStates = found1.getLaunchStates();
              const items = [];
              const tmp2 = launchStates[Symbol.iterator]();
              while (tmp2 !== undefined) {
                let tmp5 = closure_3(tmp3, 2);
                [r10016, tmp6] = tmp5;
                let isLaunching = tmp6.isLaunching && null != tmp6.componentId && tmp6.componentId.length > 0;
                if (isLaunching) {
                  let arr = items.push(tmp6.componentId);
                }
                continue;
              }
              return items;
            }
          }
          cResult[76] = channel;
          cResult[77] = Rs;
          cResult[78] = items37;
          tmp128 = items37;
        } else {
          class Rs {
            constructor() {
              return PermissionStore.can(constants2.SEND_MESSAGES, channel);
            }
          }
          tmp128 = cResult[78];
        }
        const tmpResult58 = tmp(tmp2[61]);
        const stateFromStores14 = tmpResult58.useStateFromStores(tmp126, Rs, tmp128);
        tmp35(tmp2[73])(id);
        if (cResult[79] === Symbol.for("react.memo_cache_sentinel")) {
          class Rs {
            constructor() {
              return PermissionStore.can(constants2.SEND_MESSAGES, channel);
            }
          }
          const items38 = [VoiceStateStore];
          class Dt {
            constructor() {
              let tmp6;
              const launchStates = found1.getLaunchStates();
              const items = [];
              const tmp2 = launchStates[Symbol.iterator]();
              while (tmp2 !== undefined) {
                let tmp5 = closure_3(tmp3, 2);
                [r10016, tmp6] = tmp5;
                let isLaunching = tmp6.isLaunching && null != tmp6.componentId && tmp6.componentId.length > 0;
                if (isLaunching) {
                  let arr = items.push(tmp6.componentId);
                }
                continue;
              }
              return items;
            }
          }
          cResult[79] = items38;
          tmp131 = items38;
        } else {
          class Rs {
            constructor() {
              return PermissionStore.can(constants2.SEND_MESSAGES, channel);
            }
          }
        }
        if (cResult[80] !== stateFromStores2) {
          class Ds {
            constructor() {
              return VoiceStateStore.getUserVoiceChannelId(set3, stateFromStores2);
            }
          }
          const items39 = [stateFromStores2];
          class Dt {
            constructor() {
              let tmp6;
              const launchStates = found1.getLaunchStates();
              const items = [];
              const tmp2 = launchStates[Symbol.iterator]();
              while (tmp2 !== undefined) {
                let tmp5 = closure_3(tmp3, 2);
                [r10016, tmp6] = tmp5;
                let isLaunching = tmp6.isLaunching && null != tmp6.componentId && tmp6.componentId.length > 0;
                if (isLaunching) {
                  let arr = items.push(tmp6.componentId);
                }
                continue;
              }
              return items;
            }
          }
          cResult[80] = stateFromStores2;
          cResult[81] = Ds;
          cResult[82] = items39;
          tmp133 = items39;
        } else {
          class Ds {
            constructor() {
              return VoiceStateStore.getUserVoiceChannelId(set3, stateFromStores2);
            }
          }
          tmp133 = cResult[82];
        }
        const tmpResult59 = tmp(tmp2[61]);
        const stateFromStores15 = tmpResult59.useStateFromStores(tmp131, Ds, tmp133);
        if (cResult[83] === Symbol.for("react.memo_cache_sentinel")) {
          class Ds {
            constructor() {
              return VoiceStateStore.getUserVoiceChannelId(set3, stateFromStores2);
            }
          }
          const items40 = [RTCConnectionStore];
          class Gs {
            constructor() {
              return channelId.getChannelId();
            }
          }
          const items41 = [];
          cResult[83] = items40;
          cResult[84] = Gs;
          cResult[85] = items41;
          tmp137 = items41;
          tmp136 = Gs;
          tmp135 = items40;
        } else {
          class Ds {
            constructor() {
              return VoiceStateStore.getUserVoiceChannelId(set3, stateFromStores2);
            }
          }
          tmp136 = cResult[84];
          tmp137 = cResult[85];
        }
        const tmpResult60 = tmp(tmp2[61]);
        const stateFromStores16 = tmpResult60.useStateFromStores(tmp135, tmp136, tmp137);
        if (cResult[86] === Symbol.for("react.memo_cache_sentinel")) {
          class Ds {
            constructor() {
              return VoiceStateStore.getUserVoiceChannelId(set3, stateFromStores2);
            }
          }
          const items42 = [ReferencedMessageStore];
          class Gs {
            constructor() {
              return channelId.getChannelId();
            }
          }
          cResult[86] = items42;
        } else {
          class Ds {
            constructor() {
              return VoiceStateStore.getUserVoiceChannelId(set3, stateFromStores2);
            }
          }
        }
        if (cResult[87] === channel.guild_id) {
          class Ds {
            constructor() {
              return VoiceStateStore.getUserVoiceChannelId(set3, stateFromStores2);
            }
          }
        }
        class Bs {
          constructor() {
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
        }
        cResult[87] = channel.guild_id;
        cResult[88] = channel.id;
        cResult[89] = channel.parent_id;
        cResult[90] = channel.type;
        cResult[91] = Bs;
      }
    : (channel, ref) => {
        let TIER_2;
        let acceptingGiftCodes;
        let appDirectoryEmbedApplicationFetchStates;
        let appDirectoryEmbedApplications;
        let channelId;
        let channelSummariesExperiment;
        let communicationDisabledVersion;
        let displayNameStylesEnabled;
        let eligible;
        let fetchingSkuIds;
        let guildTemplates;
        let hasLoadedExperiments;
        let id;
        let id2;
        let invalidAppDirectoryEmbedApplicationIds;
        let isFetchingCurrentQuests;
        let items64;
        let items78;
        let lazyCacheStatus;
        let locale;
        let mediaPostEmbeds;
        let messageInteractionStates;
        let messagesVersion;
        let officialMessageColor;
        let officialMessageStyle;
        let pendingConnection;
        let quests;
        let resolvedGiftCodes;
        let resolvingGiftCodes;
        let roleStyle;
        let rsvpVersion;
        let saturation;
        let startTime;
        let stateFromStoresArray8;
        let theme;
        let tmp25;
        let tmp66;
        let tmp67;
        let unloadableContentEntryMessageIds;
        let unloadedContentEntryMessageIds;
        let useReducedMotion;
        let version;
        const f106474 = () => {
          const items = [
            LocalInteractionComponentStateStore.getInteractionComponentStates(),
            LocalInteractionComponentStateStore.getInteractionComponentStateVersion(),
          ];
          return items;
        };
        channel = channel.channel;
        const tmp = channel;
        let tmp2 = id;
        let obj = channel(id[61]);
        let items = [MessageStore];
        const items1 = [channel.id];
        const stateFromStores = obj.useStateFromStores(items, () => MessageStore.getMessages(channel.id), items1);
        id = channel.id;
        const guildId = channel.getGuildId();
        const items2 = [GuildStore];
        const obj2 = channel(id[61]);
        const stateFromStores1 = obj2.useStateFromStores(items2, () => GuildStore.getGuild(guildId));
        let systemChannelFlags;
        if (stateFromStores1 != null) {
          systemChannelFlags = stateFromStores1.systemChannelFlags;
        }
        const items3 = [AuthenticationStore];
        const tmpResult = tmp(tmp2[61]);
        const stateFromStores2 = tmpResult.useStateFromStores(items3, () => id.getId(), []);
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
        const items4 = [ThemeStore];
        const tmpResult77 = tmp(tmp2[61]);
        const stateFromStores3 = tmpResult77.useStateFromStores(items4, () => theme.theme, []);
        const tmpResult78 = tmp(tmp2[66]);
        const isMessageSwipeActionsEnabled = tmpResult78.useIsMessageSwipeActionsEnabled();
        const linkedLobby = channel.linkedLobby;
        let application_id;
        const tmp18 = closure_68(stateFromStores);
        if (linkedLobby != null) {
          application_id = linkedLobby.application_id;
        }
        closure_69(stateFromStores, application_id);
        [tmp25, r10107] = guildId(stateFromStores(tmp2[67])(stateFromStores, channel), 2);
        guildId(stateFromStores(tmp2[67])(stateFromStores, channel), 2);
        const items5 = [InviteStore];
        const tmpResult79 = tmp(tmp2[61]);
        const stateFromStores4 = tmpResult79.useStateFromStores(items5, () => InviteStore.getInvites(), []);
        const tmpResult80 = tmp(tmp2[68]);
        const fetchVoiceChannelInviteStartTimes = tmpResult80.useFetchVoiceChannelInviteStartTimes(stateFromStores4);
        const items6 = [ApplicationDirectoryApplicationsStore];
        const tmpResult81 = tmp(tmp2[61]);
        const stateFromStoresObject = tmpResult81.useStateFromStoresObject(items6, () => {
          const obj = {
            appDirectoryEmbedApplications: ApplicationDirectoryApplicationsStore.getApplications(),
            invalidAppDirectoryEmbedApplicationIds: ApplicationDirectoryApplicationsStore.getInvalidApplicationIds(),
            appDirectoryEmbedApplicationFetchStates: ApplicationDirectoryApplicationsStore.getApplicationFetchStates(),
          };
          return obj;
        }, []);
        ({
          appDirectoryEmbedApplications,
          invalidAppDirectoryEmbedApplicationIds,
          appDirectoryEmbedApplicationFetchStates,
        } = stateFromStoresObject);
        const items7 = [items64];
        const tmpResult82 = tmp(tmp2[61]);
        const stateFromStoresArray = tmpResult82.useStateFromStoresArray(items7, () =>
          items64.getFetchingOrFailedFetchingIds(),
        );
        const items8 = [channelSummariesExperiment];
        const tmpResult83 = tmp(tmp2[61]);
        const stateFromStoresArray1 = tmpResult83.useStateFromStoresArray(items8, () =>
          channelSummariesExperiment.getFetchingIds(),
        );
        const items9 = [SKUStore];
        const tmpResult84 = tmp(tmp2[61]);
        const stateFromStoresArray2 = tmpResult84.useStateFromStoresArray(items9, () =>
          fetchingSkuIds.getFetchingSkuIds(),
        );
        const items10 = [closure_6];
        const items11 = [id];
        const tmpResult85 = tmp(tmp2[61]);
        const stateFromStoresArray3 = tmpResult85.useStateFromStoresArray(
          items10,
          () => {
            const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(id);
            const mapped = embeddedActivitiesForChannel.map((launchId) => launchId.launchId);
            return mapped.filter(GlobalUtils.isNotNullish);
          },
          items11,
        );
        const items12 = [closure_6, PresenceStore];
        const tmpResult86 = tmp(tmp2[61]);
        const stateFromStoresArray4 = tmpResult86.useStateFromStoresArray(items12, () => {
          const items = [];
          const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(id);
          function _loop2(iter) {
            let closure_0 = iter;
            const userIds = iter.userIds;
            findActivity = findActivity.findActivity;
            iter = userIds.values();
            const findActivityResult = findActivity(
              iter.next().value,
              (application_id) => application_id.application_id === applicationId.applicationId,
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
          let iter = embeddedActivitiesForChannel[Symbol.iterator]();
          while (iter !== undefined) {
            let _loop2Result = _loop2(iter.next());
            continue;
          }
          return items;
        });
        const items13 = [closure_6];
        const tmpResult87 = tmp(tmp2[61]);
        const stateFromStoresArray5 = tmpResult87.useStateFromStoresArray(items13, () => {
          set = new Set();
          const embeddedActivitiesByChannel = closure_6.getEmbeddedActivitiesByChannel();
          let item = embeddedActivitiesByChannel.forEach((arr, index) => {
            let closure_0 = index;
            let item = arr.forEach((userIds) => {
              userIds = userIds.userIds;
              const item = userIds.forEach((item) => {
                set.add("" + closure_1_0 + ":" + item);
              });
            });
          });
          return Array.from(set);
        });
        const items14 = [closure_6];
        const tmpResult88 = tmp(tmp2[61]);
        const stateFromStoresArray6 = tmpResult88.useStateFromStoresArray(items14, () => {
          let tmp6;
          const launchStates = closure_6.getLaunchStates();
          const items = [];
          const tmp2 = launchStates[Symbol.iterator]();
          while (tmp2 !== undefined) {
            let tmp5 = guildId(tmp3, 2);
            [r10016, tmp6] = tmp5;
            let isLaunching = tmp6.isLaunching && null != tmp6.componentId && tmp6.componentId.length > 0;
            if (isLaunching) {
              let arr = items.push(tmp6.componentId);
            }
            continue;
          }
          return items;
        });
        const items15 = [MediaPostEmbedStore];
        const tmpResult89 = tmp(tmp2[61]);
        const stateFromStores5 = tmpResult89.useStateFromStores(items15, () => mediaPostEmbeds.getMediaPostEmbeds());
        const items16 = [GuildTemplateStore];
        const tmpResult90 = tmp(tmp2[61]);
        const stateFromStores6 = tmpResult90.useStateFromStores(items16, () => guildTemplates.getGuildTemplates(), []);
        const items17 = [GameOrganizationInviteStore];
        const tmpResult91 = tmp(tmp2[61]);
        const stateFromStores7 = tmpResult91.useStateFromStores(items17, () => invites.getInvites(), []);
        const items18 = [stateFromStoresArray8];
        const tmpResult92 = tmp(tmp2[61]);
        const stateFromStores8 = tmpResult92.useStateFromStores(
          items18,
          () => stateFromStoresArray8.getBuildOverrides(),
          [],
        );
        const tmpResult93 = tmp(tmp2[69]);
        const codedLinksExperimentEmbeds = tmpResult93.useCodedLinksExperimentEmbeds();
        const tmpResult94 = tmp(tmp2[70]);
        const quests1 = tmpResult94.useQuests({ fetchPolicy: "cache-or-network", callerSource: "messages_native" });
        ({ quests, isFetchingCurrentQuests } = quests1);
        const found = stateFromStores.filter((type) => type.type === constants.PREMIUM_REFERRAL);
        let mapped = found.map((referralTrialOfferId) => referralTrialOfferId.referralTrialOfferId);
        closure_6 = mapped.filter(tmp(tmp2[64]).isNotNullish);
        const items19 = [ReferralTrialStore];
        const tmpResult95 = tmp(tmp2[61]);
        const stateFromStoresArray7 = tmpResult95.useStateFromStoresArray(items19, () => {
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
        const tmpResult96 = tmp(tmp2[71]);
        const trialOffer = tmpResult96.useTrialOffer(closure_64);
        const items20 = [UserStore];
        const tmpResult97 = tmp(tmp2[61]);
        const stateFromStores9 = tmpResult97.useStateFromStores(items20, () => {
          const obj = stateFromStores(id[72]);
          return obj.isPremiumExactly(authStore2.getCurrentUser(), TIER_2.TIER_2);
        });
        const items21 = [EditMessageStore];
        const items22 = [id];
        const tmpResult98 = tmp(tmp2[61]);
        const stateFromStores10 = tmpResult98.useStateFromStores(
          items21,
          () => EditMessageStore.getEditingMessageId(id),
          items22,
        );
        const items23 = [PendingReplyStore];
        const items24 = [id];
        const tmpResult99 = tmp(tmp2[61]);
        const stateFromStores11 = tmpResult99.useStateFromStores(
          items23,
          () => {
            const pendingReply = PendingReplyStore.getPendingReply(id);
            id = undefined;
            if (pendingReply != null) {
              id = pendingReply.message.id;
            }
            return id;
          },
          items24,
        );
        const items25 = [ReadStateStore];
        const items26 = [id];
        const tmpResult100 = tmp(tmp2[61]);
        const stateFromStores12 = tmpResult100.useStateFromStores(
          items25,
          () => ReadStateStore.getOldestUnreadMessageId(id),
          items26,
        );
        const items27 = [GuildVerificationStore];
        const items28 = [guildId];
        const tmpResult101 = tmp(tmp2[61]);
        const stateFromStores13 = tmpResult101.useStateFromStores(
          items27,
          () => {
            const canChatInGuildResult = null != guildId && GuildVerificationStore.canChatInGuild(tmp);
            return canChatInGuildResult;
          },
          items28,
        );
        const items29 = [PermissionStore];
        const items30 = [channel];
        const tmpResult102 = tmp(tmp2[61]);
        const stateFromStores14 = tmpResult102.useStateFromStores(
          items29,
          () => PermissionStore.can(constants2.SEND_MESSAGES, channel),
          items30,
        );
        const items31 = [VoiceStateStore];
        const items32 = [stateFromStores2];
        const tmp53 = stateFromStores(tmp2[73])(id);
        const tmpResult103 = tmp(tmp2[61]);
        const stateFromStores15 = tmpResult103.useStateFromStores(
          items31,
          () => VoiceStateStore.getUserVoiceChannelId(set3, stateFromStores2),
          items32,
        );
        const items33 = [RTCConnectionStore];
        const tmpResult104 = tmp(tmp2[61]);
        const stateFromStores16 = tmpResult104.useStateFromStores(items33, () => channelId.getChannelId(), []);
        const items34 = [ReferencedMessageStore];
        const items35 = [channel];
        const tmpResult105 = tmp(tmp2[61]);
        const stateFromStores17 = tmpResult105.useStateFromStores(
          items34,
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
          items35,
        );
        const items36 = [GiftCodeStore];
        const tmpResult106 = tmp(tmp2[61]);
        const stateFromStoresObject1 = tmpResult106.useStateFromStoresObject(items36, () => {
          const obj = {
            resolvingGiftCodes: GiftCodeStore.getResolvingCodes(),
            resolvedGiftCodes: GiftCodeStore.getResolvedCodes(),
            acceptingGiftCodes: GiftCodeStore.getAcceptingCodes(),
          };
          return obj;
        }, []);
        ({ resolvingGiftCodes, resolvedGiftCodes, acceptingGiftCodes } = stateFromStoresObject1);
        const items37 = [ChannelRTCStore];
        const items38 = [id];
        const tmpResult107 = tmp(tmp2[61]);
        const stateFromStores18 = tmpResult107.useStateFromStores(
          items37,
          () => ChannelRTCStore.getParticipants(id).length,
          items38,
        );
        const items39 = [UploadStore];
        const items40 = [id];
        const tmpResult108 = tmp(tmp2[61]);
        const stateFromStores19 = tmpResult108.useStateFromStores(items39, () => UploadStore.getFiles(id), items40);
        const items41 = [ReferencedMessageStore];
        const items42 = [id];
        const tmpResult109 = tmp(tmp2[61]);
        const stateFromStores20 = tmpResult109.useStateFromStores(
          items41,
          () => ReferencedMessageStore.getReplyIdsForChannel(id),
          items42,
        );
        const items43 = [stateFromStores2];
        const tmpResult110 = tmp(tmp2[61]);
        const stateFromStoresObject2 = tmpResult110.useStateFromStoresObject(
          items43,
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
          stateFromStoresObject2);
        const items44 = [ThreadMessageStore];
        const items45 = [id];
        const tmpResult111 = tmp(tmp2[61]);
        const stateFromStores21 = tmpResult111.useStateFromStores(
          items44,
          () => ThreadMessageStore.getChannelThreadsVersion(id),
          items45,
        );
        const items46 = [InteractionStore];
        const tmpResult112 = tmp(tmp2[61]);
        const stateFromStoresObject3 = tmpResult112.useStateFromStoresObject(items46, () =>
          messageInteractionStates.getMessageInteractionStates(),
        );
        const items47 = [LocalInteractionComponentStateStore];
        const tmpResult113 = tmp(tmp2[61]);
        [tmp66, tmp67] = guildId(
          tmpResult113.useStateFromStores(items47, f106474, [], tmp(tmp2[74]).isVersionEqual),
          2,
        );
        guildId(tmpResult113.useStateFromStores(items47, f106474, [], tmp(tmp2[74]).isVersionEqual), 2);
        const items48 = [ExperimentStore];
        const tmpResult114 = tmp(tmp2[61]);
        let stateFromStores22 = tmpResult114.useStateFromStores(
          items48,
          () => hasLoadedExperiments.hasLoadedExperiments,
        );
        const tmpResult115 = tmp(tmp2[75]);
        const isSpamMessageRequest = tmpResult115.useIsSpamMessageRequest(channel.id);
        let tmp71 = null != stateFromStores;
        const tmpResult116 = tmp(tmp2[76]);
        const isMessageRequest = tmpResult116.useIsMessageRequest(channel.id);
        const tmp23 = guildId;
        if (tmp71) {
          tmp71 = stateFromStores.ready || stateFromStores.cached;
        }
        const items49 = [GuildScheduledEventStore];
        const tmp73 = null != stateFromStores && stateFromStores.cached;
        const tmp74 = null != stateFromStores && stateFromStores.ready && !stateFromStores.loadingMore;
        const tmpResult117 = tmp(tmp2[61]);
        const stateFromStores23 = tmpResult117.useStateFromStores(items49, () => rsvpVersion.getRsvpVersion());
        const items50 = [GuildAutomodMessageStore];
        const tmpResult118 = tmp(tmp2[61]);
        const stateFromStores24 = tmpResult118.useStateFromStores(items50, () => messagesVersion.getMessagesVersion());
        const items51 = [GuildMemberStore];
        const tmpResult119 = tmp(tmp2[61]);
        const stateFromStores25 = tmpResult119.useStateFromStores(items51, () =>
          communicationDisabledVersion.getCommunicationDisabledVersion(),
        );
        const items52 = [GuildMemberStore];
        const items53 = [guildId, stateFromStores];
        const tmpResult120 = tmp(tmp2[61]);
        const stateFromStoresObject4 = tmpResult120.useStateFromStoresObject(
          items52,
          () => {
            if (null != guildId) {
              if (null != stateFromStores) {
                let obj = {};
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
                return obj;
              }
            }
            return {};
          },
          items53,
        );
        const items54 = [PermissionStore];
        const tmpResult121 = tmp(tmp2[61]);
        const stateFromStores26 = tmpResult121.useStateFromStores(items54, () =>
          PermissionStore.can(constants2.MODERATE_MEMBERS, stateFromStores1),
        );
        let id1;
        const useCurrentUserCommunicationDisabled = tmp(tmp2[78]).useCurrentUserCommunicationDisabled;
        tmp(tmp2[78]);
        if (stateFromStores1 != null) {
          id1 = stateFromStores1.id;
        }
        const items55 = [LocaleStore];
        const tmp82 = tmp23(useCurrentUserCommunicationDisabled(id1), 2)[1];
        const tmpResult123 = tmp(tmp2[61]);
        const stateFromStores27 = tmpResult123.useStateFromStores(items55, () => locale.locale);
        const tmpResult124 = tmp(tmp2[79]);
        const isPaymentsBlocked = tmpResult124.useIsPaymentsBlocked();
        const items56 = [JoinedThreadsStore];
        const tmpResult125 = tmp(tmp2[61]);
        const stateFromStores28 = tmpResult125.useStateFromStores(items56, () => {
          const hasJoinedResult = channel.isForumPost() && JoinedThreadsStore.hasJoined(id);
          return hasJoinedResult;
        });
        const items57 = [MediaPostSharePromptStore];
        const tmpResult126 = tmp(tmp2[61]);
        const stateFromStores29 = tmpResult126.useStateFromStores(items57, () =>
          MediaPostSharePromptStore.shouldDisplayPrompt(id),
        );
        const items58 = [PushFeedbackStore];
        const tmpResult127 = tmp(tmp2[61]);
        const stateFromStores30 = tmpResult127.useStateFromStores(items58, () => eligible.isEligible());
        const items59 = [CacheStore];
        const tmpResult128 = tmp(tmp2[61]);
        const stateFromStores31 = tmpResult128.useStateFromStores(items59, () => lazyCacheStatus.getLazyCacheStatus());
        const tmpResult129 = tmp(tmp2[80]);
        const messageJumpAndroidKeyboardHeight = tmpResult129.useMessageJumpAndroidKeyboardHeight();
        const tmp90 = stateFromStores(tmp2[81])();
        const tmpResult130 = tmp(tmp2[82]);
        channelSummariesExperiment = tmpResult130.useChannelSummariesExperiment(channel);
        const items60 = [SummaryStore];
        const items61 = [channelSummariesExperiment, channel.id];
        const tmpResult131 = tmp(tmp2[61]);
        const stateFromStores32 = tmpResult131.useStateFromStores(
          items60,
          () => {
            let selectedSummaryResult = null;
            if (channelSummariesExperiment) {
              selectedSummaryResult = SummaryStore.selectedSummary(channel.id);
            }
            return selectedSummaryResult;
          },
          items61,
        );
        const tmpResult132 = tmp(tmp2[83]);
        const isConversationTopicHeaderEnabled = tmpResult132.useIsConversationTopicHeaderEnabled(
          channel.guild_id,
          "messages_conversation_header",
        );
        let tmp94;
        if (isConversationTopicHeaderEnabled) {
          tmp94 = tmp22(tmp2[84])(channel.id);
        }
        const items62 = [channel.id, , , ,];
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
            const _Date = Date;
            const obj = DimensionActionCreatorsDefault;
            const result = obj.updateChannelDimensions(channel.id, Date.now(), 1, 1, 0);
          }
        }, items62);
        const tmpResult133 = tmp(tmp2[86]);
        const shouldTrackAnnouncementMessageViews = tmpResult133.useShouldTrackAnnouncementMessageViews({
          guild: stateFromStores1,
          channel,
          messages: stateFromStores,
          isMessagesReady: tmp71,
        });
        const tmpResult134 = tmp(tmp2[86]);
        const shouldTrackRichPresenceInviteEmbedViews = tmpResult134.useShouldTrackRichPresenceInviteEmbedViews({
          messages: stateFromStores,
          isMessagesReady: tmp71,
        });
        const tmpResult135 = tmp(tmp2[86]);
        const shouldTrackOfficialMessageViews = tmpResult135.useShouldTrackOfficialMessageViews({
          guild: stateFromStores1,
          messages: stateFromStores,
          isMessagesReady: tmp71,
        });
        const tmpResult136 = tmp(tmp2[86]);
        const shouldTrackVoiceInviteEmbedViews = tmpResult136.useShouldTrackVoiceInviteEmbedViews({
          messages: stateFromStores,
          isMessagesReady: tmp71,
        });
        const tmpResult137 = tmp(tmp2[87]);
        const shouldDisplaySpoilerObscurity = tmpResult137.useShouldDisplaySpoilerObscurity(channel);
        const items63 = [id, guildId];
        const tmpResult138 = tmp(tmp2[88]);
        const isAgeVerified = tmpResult138.useIsAgeVerified();
        const effect1 = stateFromStores1.useEffect(() => {
          let obj = stateFromStores(id[89]);
          obj.handleChannelSelect();
          return () => {
            const obj = stateFromStores(id[89]);
            obj.handleChannelSelect();
          };
        }, items63);
        const tmpResult139 = tmp(tmp2[90]);
        const shouldDisableInteractiveComponents = tmpResult139.useShouldDisableInteractiveComponents(channel.id);
        items64 = [];
        const tmp104 = closure_28(channel.id);
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
        const items65 = [ExplicitMediaStore];
        const items66 = [id];
        const tmp106 = closure_29(items64);
        const tmpResult140 = tmp(tmp2[61]);
        const stateFromStores33 = tmpResult140.useStateFromStores(
          items65,
          () => ExplicitMediaStore.getChannelFpInfo(id),
          items66,
        );
        const items67 = [FamilyCenterPendingConnectionStore];
        const tmpResult141 = tmp(tmp2[61]);
        const stateFromStores34 = tmpResult141.useStateFromStores(items67, () =>
          pendingConnection.getPendingConnection(),
        );
        const tmp109 = stateFromStores(tmp2[91])();
        ({ unloadedContentEntryMessageIds, unloadableContentEntryMessageIds } = stateFromStores(tmp2[92])(
          stateFromStores,
        ));
        stateFromStores(tmp2[92])(stateFromStores);
        const items68 = [UserStore];
        const tmpResult142 = tmp(tmp2[61]);
        const stateFromStores35 = tmpResult142.useStateFromStores(items68, () => {
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
        const items69 = [BasicGuildStore];
        const tmpResult143 = tmp(tmp2[61]);
        const stateFromStores36 = tmpResult143.useStateFromStores(items69, () => version.getVersion());
        const tmpResult144 = tmp(tmp2[93]);
        const colorStore = tmpResult144.useColorStore((palette) => Object.keys(palette.palette).length);
        const items70 = [EmojiStore];
        const tmpResult145 = tmp(tmp2[61]);
        const stateFromStores37 = tmpResult145.useStateFromStores(items70, () => EmojiStore.getGuildEmoji(guildId));
        const items71 = [VoiceStateStore];
        const items72 = [guildId];
        const tmpResult146 = tmp(tmp2[61]);
        const stateFromStores38 = tmpResult146.useStateFromStores(
          items71,
          () => {
            if (null == guildId) {
              return null;
            } else {
              const voiceStates = VoiceStateStore.getVoiceStates(tmp);
              const obj = messages_MessagesUtils;
              return obj.getVoiceStateChannelSummaryFromVoiceStates(voiceStates);
            }
          },
          items72,
        );
        const items73 = [SortedVoiceStateStore, VoiceChannelStartTimeStore, InviteStore, ChannelStore];
        const tmpResult147 = tmp(tmp2[61]);
        const stateFromStoresObject5 = tmpResult147.useStateFromStoresObject(items73, () => {
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
        const items74 = [SessionsStore];
        const tmpResult148 = tmp(tmp2[61]);
        stateFromStoresArray8 = tmpResult148.useStateFromStoresArray(items74, () => {
          const items = [...closure_1_52.getRemoteActivities(), ...closure_1_52.getHiddenActivities()];
          return items.filter(channel(id[64]).isNotNullish);
        });
        const items75 = [ActivityLauncherStore];
        const tmpResult149 = tmp(tmp2[61]);
        const stateFromStoresObject6 = tmpResult149.useStateFromStoresObject(items75, () =>
          stateFromStoresArray8.reduce((acc, application_id) => {
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
        const items76 = [AuthorizedAppsStore];
        const tmpResult150 = tmp(tmp2[61]);
        const stateFromStoresArray9 = tmpResult150.useStateFromStoresArray(items76, () => {
          const items = [authStore.getNewestTokens(), authStore.getApplicationFetchStateVersion()];
          return items;
        }, []);
        const items77 = [UserStore];
        const tmpResult151 = tmp(tmp2[61]);
        const stateFromStores39 = tmpResult151.useStateFromStores(items77, () => {
          const currentUser = authStore2.getCurrentUser();
          let displayNameStyles;
          if (currentUser != null) {
            displayNameStyles = currentUser.displayNameStyles;
          }
          return displayNameStyles;
        });
        const tmpResult152 = tmp(tmp2[95]);
        const fetchSocialLayerStorefrontProductDetailsEmbedApplications =
          tmpResult152.useFetchSocialLayerStorefrontProductDetailsEmbedApplications(stateFromStores);
        const obj3 = { profile: tmp(tmp2[98]).Profiles.Messages, children: items78 };
        const tmp22Result = stateFromStores(tmp2[98]);
        items78 = [channel.isThread() && closure_66(tmp22(tmp2[96]), { absolute: true })];
        let obj4 = {
          ref,
          theme: stateFromStores3,
          saturation,
          isStaff: stateFromStores35,
          animateEmoji: setting5,
          animateStickers: setting6,
          containerWidth: tmp109,
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
          isMessagesReady: tmp71,
          isMessagesCached: tmp73,
          isMessagesAckable: tmp74,
          isMessageRequest,
          isSpamMessageRequest,
          messageAuthorActivities: tmp18,
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
          isCallActive: tmp53,
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
          messageAuthorMembers: stateFromStoresObject4,
          forwardGuildsVersion: stateFromStores36,
          interactionStates: stateFromStoresObject3,
          interactionComponentStates: tmp66,
          interactionComponentStatesVersion: tmp67,
          hasLoadedExperiments: stateFromStores22,
          guildSystemChannelFlags: systemChannelFlags,
          currentUserCommunicationDisabled: tmp82,
          renderCommunicationDisabled: stateFromStores26,
          userSettingsLocale: stateFromStores27,
          paymentsBlocked: isPaymentsBlocked,
          isFollowingForumPost: stateFromStores28,
          showMediaPostSharePrompt: stateFromStores29,
          showPushFeedback: stateFromStores30,
          cacheStoreLoaded: "initializing" !== stateFromStores31,
          androidKeyboardHeight: messageJumpAndroidKeyboardHeight,
          selectedSummary: stateFromStores32,
          selectedConversation: tmp94,
          keyboardType: tmp90,
          shouldTrackAnnouncementMessageViews,
          shouldTrackRichPresenceInviteEmbedViews,
          shouldTrackOfficialMessageViews,
          shouldTrackVoiceInviteEmbedViews,
          shouldObscureSpoiler: shouldDisplaySpoilerObscurity,
          shouldDisableInteractiveComponents,
          channelPolls: tmp104,
          messageReferencePolls: tmp106,
          explicitMediaFalsePositiveInfo: stateFromStores33,
          familyCenterPendingConnection: stateFromStores34,
          threadStartingReferenceMessage: stateFromStores17,
          unloadedContentEntryMessageIds,
          unloadableContentEntryMessageIds,
          resolvedReferralTrialOfferIds: stateFromStoresArray7,
          referralTrialOfferId: id2,
          isPremiumTier2User: stateFromStores9,
          activityInviteMessageIds: tmp25,
          guildInviteColorsFetched: colorStore,
          isAgeVerified,
          guildEmojis: stateFromStores37,
          enableSwipeActions: isMessageSwipeActionsEnabled,
          selfActivities: stateFromStoresArray8,
          activityLaunchJoinStates: stateFromStoresObject6,
          authorizedAppsTokens: stateFromStoresArray9,
          currentUserDisplayNameStyles: stateFromStores39,
          voiceInviteDataByChannelId: stateFromStoresObject5,
          officialMessageColor,
        };
        const isThreadResult = channel.isThread() && closure_66(tmp22(tmp2[96]), { absolute: true });
        const tmp22Result2 = stateFromStores(tmp2[97]);
        if (stateFromStores22) {
          stateFromStores22 = tmp71;
        }
        id2 = undefined;
        if (trialOffer != null) {
          id2 = trialOffer.id;
        }
        officialMessageColor = undefined;
        if (stateFromStores1 != null) {
          officialMessageColor = stateFromStores1.officialMessageColor;
        }
        const merged = Object.assign(channel);
        items78[1] = closure_66(tmp22Result2, obj4);
        return closure_67(tmp22Result, obj3);
      },
);
forwardRefResult.displayName = "MessagesConnected";
let result = size.fileFinishedImporting("modules/messages/native/Messages.tsx");

export default forwardRefResult;
