// discord_app/modules/forums/native/ForumChannel.tsx
import TTITrackerDefault from "../../tti_analytics/TTITracker.tsx";
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants2 from "../../../../discord_common/js/shared/Constants.tsx";
import intl3 from "../../../intl/index.native.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import AssetRegistryDefault from "../../../../_runtime/04821_AssetRegistry.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import MemberVerificationModalActionCreators from "../../guild_member_verification/MemberVerificationModalActionCreators.tsx";
import ForumPostDataLoader from "../ForumPostDataLoader.tsx";
import tracking_Tracking from "../tracking/Tracking.tsx";
import DraftActionCreatorsDefault from "../../../actions/DraftActionCreators.tsx";
import ClientThemesOverrides from "../../client_themes/native/ClientThemesOverrides.tsx";
import GameProfileAnalyticUtils from "../../game_profile/GameProfileAnalyticUtils.tsx";
import GameProfileActionCreatorsDefault from "../../game_profile/GameProfileActionCreators.native.tsx";
import ForumComposerModalActionCreators from "composer/ForumComposerModalActionCreators.tsx";
import ForumPostDefault from "ForumPost.tsx";
import ForumChannelStore from "../ForumChannelStore.tsx";
import ForumPostPlaceholderDefault from "ForumPostPlaceholder.tsx";
import CreateGameInvitePostModalActionCreators from "../../game_invite_channels/native/CreateGameInvitePostModalActionCreators.tsx";
import react from "../../../../_runtime/00019_react.js";
import LurkingStore from "../../lurker_mode/LurkingStore.tsx";
import ActiveThreadsStore from "../../threads/ActiveThreadsStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import DraftStore from "../../../stores/DraftStore.tsx";
import GuildVerificationStore from "../../../stores/GuildVerificationStore.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import TextStyles_mod from "../../rebrand/native/TextStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, importDefault;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let unpackModuleId;
function forumKeyExtractor(arg0, arg1) {
  let combined = arg0;
  if (arg0 === loading_section) {
    const _HermesInternal = HermesInternal;
    combined = "" + tmp2 + "-" + arg1;
  }
  return combined;
}
function SortAndViewOptions(channel) {
  let stringResult;
  channel = channel.channel;
  const id = channel.id;
  const items = [id];
  const callback = react.useCallback(() => {
    const combined = "ForumDisplaySettingsActionSheet-" + id;
    let obj = ActionSheetActionCreatorsDefault;
    const obj2 = {
      channelId: id,
      onClose() {
        const obj = closure_2_1(closure_2_2[30]);
        obj.hideActionSheet(combined);
      },
    };
    obj.openLazy(asyncRequire(12448, dependencyMap.paths), combined, obj2);
  }, items);
  const isMediaChannelResult = channel.isMediaChannel();
  const Button = id(5601).Button;
  const intl = id(1126).intl;
  const string = intl.string;
  const t = id(1126).t;
  const tmp4 = id;
  if (isMediaChannelResult) {
    stringResult = string(t.JxU0wr);
  } else {
    stringResult = string(t.xyYt8A);
  }
  let obj = {
    variant: "secondary",
    text: stringResult,
    onPress: callback,
    size: "sm",
    icon: closure_14(tmp4(11789).ArrowsUpDownIcon, { size: "xxs" }),
  };
  return closure_14(Button, obj);
}
function TagFilter(channel) {
  let intl;
  channel = channel.channel;
  let obj = {
    variant: "secondary",
    text: intl.string(channel(1126).t["112vVE"]),
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { channel };
      obj.openLazy(asyncRequire(12449, dependencyMap.paths), "ForumTagFilterActionSheet", obj2);
    },
    size: "sm",
    icon: closure_14(channel(8557).TagIcon, { size: "xxs" }),
  };
  const Button = channel(5601).Button;
  intl = channel(1126).intl;
  return closure_14(Button, obj);
}
function getForumItemType(arg0) {
  let str = "thread";
  if (set.has(arg0)) {
    str = arg0;
  }
  return str;
}
function onForumViewableItemsChanged(changed) {
  changed = changed.changed;
  let item = changed.forEach((item) => {
    item = item.item;
    if (!set.has(item)) {
      channel = channel.getChannel(item);
      let parent_id;
      if (channel != null) {
        parent_id = channel.parent_id;
      }
      if (null != parent_id) {
        const isViewable = item.isViewable;
        const obj = require("ForumChannelSeenManager");
        if (isViewable) {
          const _Date2 = Date;
          const result = obj.markForumPostItemAsSeen(parent_id, item, Date.now());
        } else {
          const _Date = Date;
          const result1 = obj.markForumPostItemAsUnseen(parent_id, item, Date.now());
        }
      }
    }
  });
}
function onCreatePostWithoutPermission() {
  let intl;
  const obj = {
    key: "FORUM_NO_POST_PERMISSION_HELP",
    content: intl.string(intl3.t.iyzwnD),
    icon: AssetRegistryDefault,
  };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl3.intl;
  open(obj);
}
const View = react_native.View;
const useForumChannelStore = ForumChannelStore.useForumChannelStore;
({ AnalyticsObjects: unpackModuleId, AnalyticsPages: closure_12, AnalyticsSections: map1 } = Constants);
const Fonts = Constants2.Fonts;
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = Fragment);
const archived_section = "archived_section";
const search_section = "search_section";
const missing_permission_search = "missing_permission_search";
const missing_permission_archived_threads = "missing_permission_archived_threads";
const loading_section = "loading_section";
let items = [
  "archived_section",
  "search_section",
  "missing_permission_search",
  "missing_permission_archived_threads",
  "loading_section",
];
const set = new Set(items);
let createStyles = createStyles_mod;
let obj = {
  background: obj2,
  headerRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  headerLeftContainer: { flexDirection: "row", alignItems: "center", gap: 8 },
  headerDivider: size,
  container: { flex: 1, alignSelf: "stretch", alignItems: "center", position: "relative" },
  noHeight: { height: 0 },
  list: { flex: 1, paddingTop: 8, paddingHorizontal: 12, alignSelf: "stretch", marginBottom: 0 },
  section: { alignItems: "flex-start", justifyContent: "flex-end" },
  divider: obj3,
  missingPermissionContainer: obj4,
  missingPermissionText: obj5,
};
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
size = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, width: "100%", height: 1 };
obj3 = { marginTop: 12, paddingStart: 4 };
const PRIMARY_BOLD = Fonts.PRIMARY_BOLD;
let TextStyles = TextStyles_mod;
const merged = Object.assign(
  TextStyles(PRIMARY_BOLD, nativeDefault.colors.TEXT_MUTED, 12, { marginBottom: 12, uppercase: true }),
);
obj4 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  alignItems: "center",
  justifyContent: "center",
  height: 48,
  borderRadius: nativeDefault.radii.xs,
};
obj5 = {};
TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_NORMAL, nativeDefault.colors.TEXT_MUTED, 12));
let closure_24 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = react2;
      const cResult = obj.c(9);
      const tmp4 = closure_24();
      const obj2 = ClientThemesOverrides;
      const clientThemesOverride = obj2.useClientThemesOverride();
      if (cResult[0] === tmp4.section) {
        let tmp6;
        let tmp8;
        let tmp10;
        if (cResult[1] === clientThemesOverride) {
          tmp6 = cResult[2];
        }
        const _Symbol = Symbol;
        const divider = tmp4.divider;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl3.intl;
          const stringResult = intl.string(intl3.t["3+LO1w"]);
          cResult[3] = stringResult;
          tmp8 = stringResult;
        } else {
          tmp8 = cResult[3];
        }
        if (cResult[4] !== tmp4.divider) {
          const obj3 = { style: divider, variant: "text-xs/bold", color: "text-muted", children: tmp8 };
          const tmp12 = authStore2(Text_Text.Text, obj3);
          cResult[4] = tmp4.divider;
          cResult[5] = tmp12;
          tmp10 = tmp12;
        } else {
          tmp10 = cResult[5];
        }
        if (cResult[6] === tmp6) {
          let tmp13;
          if (cResult[7] === tmp10) {
            tmp13 = cResult[8];
          }
          return tmp13;
        }
        const obj4 = { style: tmp6, children: tmp10 };
        const tmp16 = authStore2(View, obj4);
        cResult[6] = tmp6;
        cResult[7] = tmp10;
        cResult[8] = tmp16;
        tmp13 = tmp16;
      }
      const items = [tmp4.section, clientThemesOverride];
      cResult[0] = tmp4.section;
      cResult[1] = clientThemesOverride;
      cResult[2] = items;
      tmp6 = items;
    }
  : () => {
      let Text;
      let intl;
      let items;
      let obj3;
      const tmp = closure_24();
      const obj2 = { style: items, children: authStore2(Text, obj3) };
      items = [tmp.section];
      const obj = ClientThemesOverrides;
      items[1] = obj.useClientThemesOverride();
      obj3 = {
        style: tmp.divider,
        variant: "text-xs/bold",
        color: "text-muted",
        children: intl.string(intl3.t["3+LO1w"]),
      };
      Text = Text_Text.Text;
      intl = intl3.intl;
      return authStore2(View, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let numPosts;
      let searchQuery;
      let stringResult;
      const obj = react2;
      const cResult = obj.c(9);
      ({ numPosts, searchQuery } = arg0);
      const tmp4 = closure_24();
      if (cResult[0] === numPosts) {
        let tmp5;
        if (cResult[1] === searchQuery) {
          tmp5 = cResult[2];
        }
        if (cResult[3] === tmp4.divider) {
          let tmp7;
          if (cResult[4] === tmp5) {
            tmp7 = cResult[5];
          }
          if (cResult[6] === tmp4.section) {
            let tmp10;
            if (cResult[7] === tmp7) {
              tmp10 = cResult[8];
            }
            return tmp10;
          }
          const obj2 = { style: tmp4.section, children: tmp7 };
          const tmp13 = authStore2(View, obj2);
          cResult[6] = tmp4.section;
          cResult[7] = tmp7;
          cResult[8] = tmp13;
          tmp10 = tmp13;
        }
        const obj3 = { style: tmp4.divider, variant: "text-xs/bold", color: "text-muted", children: tmp5 };
        const tmp9 = authStore2(Text_Text.Text, obj3);
        cResult[3] = tmp4.divider;
        cResult[4] = tmp5;
        cResult[5] = tmp9;
        tmp7 = tmp9;
      }
      if (0 === numPosts) {
        const intl2 = intl3.intl;
        stringResult = intl2.string(intl3.t.DbgHxi);
      } else {
        const intl = intl3.intl;
        const obj4 = { numPosts, query: searchQuery };
        stringResult = intl.formatToPlainString(intl3.t["tBz/8b"], obj4);
      }
      cResult[0] = numPosts;
      cResult[1] = searchQuery;
      cResult[2] = stringResult;
      tmp5 = stringResult;
    }
  : (numPosts) => {
      let Text;
      let obj2;
      let stringResult;
      numPosts = numPosts.numPosts;
      const searchQuery = numPosts.searchQuery;
      const tmp = closure_24();
      const obj = { style: tmp.section, children: authStore2(Text, obj2) };
      obj2 = { style: tmp.divider, variant: "text-xs/bold", color: "text-muted", children: stringResult };
      Text = Text_Text.Text;
      if (0 === numPosts) {
        const intl2 = intl3.intl;
        stringResult = intl2.string(intl3.t.DbgHxi);
      } else {
        const intl = intl3.intl;
        const obj3 = { numPosts, query: searchQuery };
        stringResult = intl.formatToPlainString(intl3.t["tBz/8b"], obj3);
      }
      return authStore2(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelName) => {
      let missingPermissionContainer;
      let missingPermissionText;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(8);
      channelName = channelName.channelName;
      const tmp4 = closure_24();
      ({ missingPermissionContainer, missingPermissionText } = tmp4);
      if (cResult[0] !== channelName) {
        const intl = intl3.intl;
        const obj2 = { channelName };
        const formatResult = intl.format(intl3.t.TycmzM, obj2);
        cResult[0] = channelName;
        cResult[1] = formatResult;
        tmp5 = formatResult;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.missingPermissionText) {
        let tmp7;
        if (cResult[3] === tmp5) {
          tmp7 = cResult[4];
        }
        if (cResult[5] === tmp4.missingPermissionContainer) {
          let tmp9;
          if (cResult[6] === tmp7) {
            tmp9 = cResult[7];
          }
          return tmp9;
        }
        const obj3 = { style: missingPermissionContainer, children: tmp7 };
        const tmp12 = authStore2(View, obj3);
        cResult[5] = tmp4.missingPermissionContainer;
        cResult[6] = tmp7;
        cResult[7] = tmp12;
        tmp9 = tmp12;
      }
      const tmp8 = authStore2(Text_Text.Text, {
        style: missingPermissionText,
        variant: "text-xs/normal",
        color: "text-muted",
        children: tmp5,
      });
      cResult[2] = tmp4.missingPermissionText;
      cResult[3] = tmp5;
      cResult[4] = tmp8;
      tmp7 = tmp8;
    }
  : (channelName) => {
      let Text;
      let intl;
      let obj2;
      channelName = channelName.channelName;
      const tmp = closure_24();
      const obj = { style: tmp.missingPermissionContainer, children: authStore2(Text, obj2) };
      obj2 = {
        style: tmp.missingPermissionText,
        variant: "text-xs/normal",
        color: "text-muted",
        children: intl.format(intl3.t.TycmzM, { channelName }),
      };
      Text = Text_Text.Text;
      intl = intl3.intl;
      return authStore2(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_28 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelName) => {
      let missingPermissionText;
      let section;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(8);
      channelName = channelName.channelName;
      const tmp4 = closure_24();
      ({ section, missingPermissionText } = tmp4);
      if (cResult[0] !== channelName) {
        const intl = intl3.intl;
        const obj2 = { channelName };
        const formatResult = intl.format(intl3.t.OWZJdS, obj2);
        cResult[0] = channelName;
        cResult[1] = formatResult;
        tmp5 = formatResult;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.missingPermissionText) {
        let tmp7;
        if (cResult[3] === tmp5) {
          tmp7 = cResult[4];
        }
        if (cResult[5] === tmp4.section) {
          let tmp9;
          if (cResult[6] === tmp7) {
            tmp9 = cResult[7];
          }
          return tmp9;
        }
        const obj3 = { style: section, children: tmp7 };
        const tmp12 = authStore2(View, obj3);
        cResult[5] = tmp4.section;
        cResult[6] = tmp7;
        cResult[7] = tmp12;
        tmp9 = tmp12;
      }
      const tmp8 = authStore2(Text_Text.Text, {
        style: missingPermissionText,
        variant: "text-xs/normal",
        color: "text-muted",
        children: tmp5,
      });
      cResult[2] = tmp4.missingPermissionText;
      cResult[3] = tmp5;
      cResult[4] = tmp8;
      tmp7 = tmp8;
    }
  : (channelName) => {
      let Text;
      let intl;
      let obj2;
      channelName = channelName.channelName;
      const tmp = closure_24();
      const obj = { style: tmp.section, children: authStore2(Text, obj2) };
      obj2 = {
        style: tmp.missingPermissionText,
        variant: "text-xs/normal",
        color: "text-muted",
        children: intl.format(intl3.t.OWZJdS, { channelName }),
      };
      Text = Text_Text.Text;
      intl = intl3.intl;
      return authStore2(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel, sortOrder, tagFilter, tagSetting) => {
      let activeThreadIds;
      let canLoadMore;
      let isSearchLoading;
      let loadMore;
      let loading;
      let searchResults;
      let stateFromStores;
      let threadIds;
      _require = channel;
      let tmp2 = stateFromStores;
      let obj = require("react");
      const cResult = obj.c(31);
      if (cResult[0] === channel) {
        if (cResult[1] === sortOrder) {
          if (cResult[2] === tagFilter) {
            let tmp4;
            let tmp5;
            if (cResult[3] === tagSetting) {
              tmp4 = cResult[4];
            }
            const tmpResult = require("ForumHooks");
            const forumActiveThreadIds = tmpResult.useForumActiveThreadIds(tmp4);
            if (cResult[5] !== forumActiveThreadIds) {
              const substr = forumActiveThreadIds.slice(0, tmp(tmp2[20]).BATCH_SIZE);
              const joined = substr.join();
              cResult[5] = forumActiveThreadIds;
              cResult[6] = joined;
              tmp5 = joined;
            } else {
              tmp5 = cResult[6];
            }
            let closure_1 = tmp5;
            if (cResult[7] === channel) {
              let tmp7;
              let tmp8;
              let tmp12;
              if (cResult[8] === tmp5) {
                tmp7 = cResult[9];
                tmp8 = cResult[10];
              }
              const effect = activeThreadIds.useEffect(tmp7, tmp8);
              const _Symbol = Symbol;
              if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
                const items = [ActiveThreadsStore, LurkingStore];
                cResult[11] = items;
                tmp12 = items;
              } else {
                tmp12 = cResult[11];
              }
              if (cResult[12] !== channel.guild_id) {
                class T {
                  constructor() {
                    const hasLoadedResult = ActiveThreadsStore.hasLoaded(channel.guild_id);
                    const tmp2 = !hasLoadedResult && !LurkingStore.isLurking(channel.guild_id);
                    return tmp2;
                  }
                }
                cResult[12] = channel.guild_id;
                cResult[13] = T;
              } else {
                class T {
                  constructor() {
                    const hasLoadedResult = ActiveThreadsStore.hasLoaded(channel.guild_id);
                    const tmp2 = !hasLoadedResult && !LurkingStore.isLurking(channel.guild_id);
                    return tmp2;
                  }
                }
              }
              const tmpResult8 = require("get initialized");
              stateFromStores = tmpResult8.useStateFromStores(tmp12, T);
              if (cResult[14] !== channel.id) {
                class T {
                  constructor() {
                    const hasLoadedResult = ActiveThreadsStore.hasLoaded(channel.guild_id);
                    const tmp2 = !hasLoadedResult && !LurkingStore.isLurking(channel.guild_id);
                    return tmp2;
                  }
                }
                tmp18[0] = channel.id;
                cResult[14] = channel.id;
                cResult[15] = tmp18;
              } else {
                class T {
                  constructor() {
                    const hasLoadedResult = ActiveThreadsStore.hasLoaded(channel.guild_id);
                    const tmp2 = !hasLoadedResult && !LurkingStore.isLurking(channel.guild_id);
                    return tmp2;
                  }
                }
              }
              const tmpResult9 = require("ForumHooks");
              const forumSearchState = tmpResult9.useForumSearchState(tmp18);
              ({ searchResults, isSearchLoading } = forumSearchState);
              const tmpResult10 = require("ForumHooks");
              const automaticForumSearch = tmpResult10.useAutomaticForumSearch(channel, tagFilter, tagSetting);
              const tmpResult11 = require("ForumHooks");
              const canViewArchivedPosts = tmpResult11.useCanViewArchivedPosts(channel);
              const tmpResult12 = require("ThreadBrowserHooks");
              const archivedThreads = tmpResult12.useArchivedThreads(channel, sortOrder, tagFilter, tagSetting);
              ({ canLoadMore, loadMore, loading, threadIds } = archivedThreads);
              const tmpResult13 = require("ForumHooks");
              const loadForumUnreadCounts = tmpResult13.useLoadForumUnreadCounts(
                channel,
                sortOrder,
                tagFilter,
                tagSetting,
              );
              const tmpResult14 = require("GameInvitesChannelUtils");
              const gameInvitesActiveAndArchivedThreads = tmpResult14.useGameInvitesActiveAndArchivedThreads(
                channel,
                forumActiveThreadIds,
                threadIds,
              );
              activeThreadIds = gameInvitesActiveAndArchivedThreads.activeThreadIds;
              const archivedThreadIds = gameInvitesActiveAndArchivedThreads.archivedThreadIds;
              let tmp36 = null == searchResults && canViewArchivedPosts;
              if (tmp36) {
                class T {
                  constructor() {
                    const hasLoadedResult = ActiveThreadsStore.hasLoaded(channel.guild_id);
                    const tmp2 = !hasLoadedResult && !LurkingStore.isLurking(channel.guild_id);
                    return tmp2;
                  }
                }
                tmp36 = !tmp37;
              }
              if (tmp36) {
                class T {
                  constructor() {
                    const hasLoadedResult = ActiveThreadsStore.hasLoaded(channel.guild_id);
                    const tmp2 = !hasLoadedResult && !LurkingStore.isLurking(channel.guild_id);
                    return tmp2;
                  }
                }
                tmp36 = 0 === activeThreadIds.length;
              }
              if (tmp36) {
                class T {
                  constructor() {
                    const hasLoadedResult = ActiveThreadsStore.hasLoaded(channel.guild_id);
                    const tmp2 = !hasLoadedResult && !LurkingStore.isLurking(channel.guild_id);
                    return tmp2;
                  }
                }
                tmp36 = 0 === archivedThreadIds.length;
              }
              if (cResult[16] === activeThreadIds.length) {
                class T {
                  constructor() {
                    const hasLoadedResult = ActiveThreadsStore.hasLoaded(channel.guild_id);
                    const tmp2 = !hasLoadedResult && !LurkingStore.isLurking(channel.guild_id);
                    return tmp2;
                  }
                }
              }
              const fn2 = function w() {
                const obj = TTITrackerDefault;
                obj.recordRender(activeThreadIds.length + archivedThreadIds.length, !stateFromStores);
              };
              const items1 = [activeThreadIds.length, archivedThreadIds.length, stateFromStores];
              cResult[16] = activeThreadIds.length;
              cResult[17] = stateFromStores;
              cResult[18] = archivedThreadIds.length;
              cResult[19] = fn2;
              cResult[20] = items1;
            }
            const fn = function f() {
              if ("" !== closure_1) {
                const obj = ForumPostDataLoader;
                obj.preloadForumThreads(channel);
              }
            };
            const items2 = [channel, tmp5];
            cResult[7] = channel;
            cResult[8] = tmp5;
            cResult[9] = fn;
            cResult[10] = items2;
            tmp8 = items2;
            tmp7 = fn;
          }
        }
      }
      const obj2 = { channel, sortOrder, tagFilter, tagSetting, shouldAutomaticallyAck: true };
      cResult[0] = channel;
      cResult[1] = sortOrder;
      cResult[2] = tagFilter;
      cResult[3] = tagSetting;
      cResult[4] = obj2;
      tmp4 = obj2;
    }
  : (channel, sortOrder, tagFilter, tagSetting) => {
      let activeThreadIds;
      let activeThreadsLoading;
      let canLoadMore;
      let isSearchLoading;
      let loadMore;
      let loading;
      let searchResults;
      let threadIds;
      _require = channel;
      let obj = require("ForumHooks");
      const obj2 = { channel, sortOrder, tagFilter, tagSetting, shouldAutomaticallyAck: true };
      const forumActiveThreadIds = obj.useForumActiveThreadIds(obj2);
      const substr = forumActiveThreadIds.slice(0, require("ForumPostDataLoader").BATCH_SIZE);
      const joined = substr.join();
      const items = [channel, joined];
      const effect = activeThreadIds.useEffect(() => {
        if ("" !== joined) {
          const obj = ForumPostDataLoader;
          obj.preloadForumThreads(channel);
        }
      }, items);
      const items1 = [ActiveThreadsStore, LurkingStore];
      const obj5 = require("get initialized");
      activeThreadsLoading = obj5.useStateFromStores(items1, () => {
        const hasLoadedResult = ActiveThreadsStore.hasLoaded(channel.guild_id);
        const tmp2 = !hasLoadedResult && !LurkingStore.isLurking(channel.guild_id);
        return tmp2;
      });
      const obj3 = { channelId: channel.id };
      const obj6 = require("ForumHooks");
      const forumSearchState = obj6.useForumSearchState(obj3);
      ({ searchResults, isSearchLoading } = forumSearchState);
      const obj8 = require("ForumHooks");
      const automaticForumSearch = obj8.useAutomaticForumSearch(channel, tagFilter, tagSetting);
      const obj9 = require("ForumHooks");
      const canViewArchivedPosts = obj9.useCanViewArchivedPosts(channel);
      const obj10 = require("ThreadBrowserHooks");
      const archivedThreads = obj10.useArchivedThreads(channel, sortOrder, tagFilter, tagSetting);
      ({ loading, threadIds, canLoadMore, loadMore } = archivedThreads);
      const obj11 = require("ForumHooks");
      const loadForumUnreadCounts = obj11.useLoadForumUnreadCounts(channel, sortOrder, tagFilter, tagSetting);
      const obj12 = require("GameInvitesChannelUtils");
      const gameInvitesActiveAndArchivedThreads = obj12.useGameInvitesActiveAndArchivedThreads(
        channel,
        forumActiveThreadIds,
        threadIds,
      );
      const obj4 = activeThreadIds;
      activeThreadIds = gameInvitesActiveAndArchivedThreads.activeThreadIds;
      const archivedThreadIds = gameInvitesActiveAndArchivedThreads.archivedThreadIds;
      let isEmpty = null == searchResults && canViewArchivedPosts;
      if (isEmpty) {
        isEmpty = !(activeThreadsLoading || archivedThreadsLoading || isSearchLoading);
      }
      if (isEmpty) {
        isEmpty = 0 === activeThreadIds.length;
      }
      if (isEmpty) {
        isEmpty = 0 === archivedThreadIds.length;
      }
      const items2 = [activeThreadIds.length, archivedThreadIds.length, activeThreadsLoading];
      const effect1 = obj4.useEffect(() => {
        const obj = TTITrackerDefault;
        obj.recordRender(activeThreadIds.length + archivedThreadIds.length, !activeThreadsLoading);
      }, items2);
      return {
        activeThreadIds,
        archivedThreadIds,
        canLoadMore,
        loadMore,
        activeThreadsLoading,
        archivedThreadsLoading,
        isSearchLoading,
        isEmpty,
        searchResults,
      };
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_30 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let gameId;
      let gameProfileModalChecks;
      let shouldOpenGameProfile;
      let tmp5;
      let tmp = _require;
      let obj = require("react");
      const cResult = obj.c(13);
      channel = channel.channel;
      const obj2 = require("GameInvitesChannelUtils");
      const application = obj2.useGameInvitesChannelOfficialApplication(channel.id).application;
      let id;
      if (application != null) {
        id = application.id;
      }
      if (cResult[0] !== id) {
        const obj3 = { applicationId: id, source: tmp(gameId[25]).GameProfileSources.GameInvitesChannel };
        cResult[0] = id;
        cResult[1] = obj3;
        tmp5 = obj3;
      } else {
        tmp5 = cResult[1];
      }
      const tmp6 = shouldOpenGameProfile;
      const tmp7 = shouldOpenGameProfile(gameId[26])(tmp5);
      _require = tmp7;
      shouldOpenGameProfile = tmp7.shouldOpenGameProfile;
      gameId = tmp7.gameId;
      if (null == application) {
        return null;
      } else {
        let tmp8 = !shouldOpenGameProfile;
        if (shouldOpenGameProfile) {
          tmp8 = null == gameId;
        }
        if (cResult[2] === gameId) {
          if (cResult[3] === tmp7) {
            let tmp9;
            let tmp10;
            if (cResult[4] === shouldOpenGameProfile) {
              tmp9 = cResult[5];
            }
            if (cResult[6] !== application) {
              const obj4 = { game: application, size: tmp(gameId[28]).GameIconSizes.SMALL };
              const tmp6Result = tmp6(gameId[28]);
              const tmp13 = closure_14(tmp6Result, obj4);
              cResult[6] = application;
              cResult[7] = tmp13;
              tmp10 = tmp13;
            } else {
              tmp10 = cResult[7];
            }
            if (cResult[8] === application.name) {
              if (cResult[9] === tmp8) {
                if (cResult[10] === tmp9) {
                  let tmp14;
                  if (cResult[11] === tmp10) {
                    tmp14 = cResult[12];
                  }
                  return tmp14;
                }
              }
            }
            const obj5 = {
              accessibilityRole: "button",
              accessibilityLabel: application.name,
              disabled: tmp8,
              onPress: tmp9,
              children: tmp10,
            };
            const tmp16 = closure_14(tmp(gameId[29]).PressableOpacity, obj5);
            cResult[8] = application.name;
            cResult[9] = tmp8;
            cResult[10] = tmp9;
            cResult[11] = tmp10;
            cResult[12] = tmp16;
            tmp14 = tmp16;
          }
        }
        const fn = function v() {
          const tmp = shouldOpenGameProfile && null != gameId;
          if (tmp) {
            const obj = {
              gameId,
              gameProfileModalChecks,
              source: GameProfileAnalyticUtils.GameProfileSources.GameInvitesChannel,
            };
            const openGameProfileModal = GameProfileActionCreatorsDefault.openGameProfileModal;
            GameProfileActionCreatorsDefault;
            openGameProfileModal(obj);
          }
        };
        cResult[2] = gameId;
        cResult[3] = tmp7;
        cResult[4] = shouldOpenGameProfile;
        cResult[5] = fn;
        tmp9 = fn;
      }
    }
  : (channel) => {
      let gameProfileModalChecks;
      let obj4;
      let tmp3Result;
      let tmp9;
      _require = undefined;
      let shouldOpenGameProfile;
      let gameId;
      let tmp = _require;
      channel = channel.channel;
      let obj = require("GameInvitesChannelUtils");
      const application = obj.useGameInvitesChannelOfficialApplication(channel.id).application;
      let id;
      const tmp3 = shouldOpenGameProfile;
      const tmp4 = shouldOpenGameProfile(gameId[26]);
      if (application != null) {
        id = application.id;
      }
      const obj2 = { applicationId: id, source: tmp(gameId[25]).GameProfileSources.GameInvitesChannel };
      const tmp4Result = tmp4(obj2);
      _require = tmp4Result;
      shouldOpenGameProfile = tmp4Result.shouldOpenGameProfile;
      gameId = tmp4Result.gameId;
      let tmp8Result = null;
      if (null != application) {
        const obj3 = {
          accessibilityRole: "button",
          accessibilityLabel: application.name,
          disabled: tmp9,
          onPress() {
            const tmp = shouldOpenGameProfile && null != gameId;
            if (tmp) {
              const obj = {
                gameId,
                gameProfileModalChecks,
                source: GameProfileAnalyticUtils.GameProfileSources.GameInvitesChannel,
              };
              const openGameProfileModal = GameProfileActionCreatorsDefault.openGameProfileModal;
              GameProfileActionCreatorsDefault;
              openGameProfileModal(obj);
            }
          },
          children: closure_14(tmp3Result, obj4),
        };
        tmp9 = !shouldOpenGameProfile;
        const PressableOpacity = tmp(tmp2[29]).PressableOpacity;
        if (shouldOpenGameProfile) {
          tmp9 = null == gameId;
        }
        obj4 = { game: application, size: tmp(gameId[28]).GameIconSizes.SMALL };
        tmp3Result = tmp3(gameId[28]);
        tmp8Result = closure_14(PressableOpacity, obj3);
      }
      return tmp8Result;
    };
const viewabilityConfig = { waitForInteraction: false, viewAreaCoveragePercentThreshold: 50, minimumViewTime: 100 };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_36 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let activeThreadIds;
      let activeThreadsLoading;
      let archivedThreadIds;
      let canLoadMore;
      let isSearchLoading;
      let items1;
      let ref;
      let searchResults;
      let sortOrder;
      let tagFilter;
      let tagSetting;
      let tmp = channel;
      let obj = channel(ref[15]);
      const cResult = obj.c(56);
      channel = channel.channel;
      const searchQuery = channel.searchQuery;
      const insets = channel.insets;
      const tmp4 = closure_24();
      ref = canLoadMore.useRef(null);
      ({ sortOrder, tagFilter, tagSetting } = useForumChannelStore(channel.id));
      useForumChannelStore(channel.id);
      if (cResult[0] === channel.guild_id) {
        let tmp7;
        let tmp11;
        let tmp12;
        if (cResult[1] === channel.id) {
          tmp7 = cResult[2];
        }
        let obj4 = searchQuery(tmp2[38]);
        const forumChannelSeenManager = obj4.useForumChannelSeenManager(tmp7);
        const _Symbol = Symbol;
        let str = "react.memo_cache_sentinel";
        const tmp8 = searchQuery;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function o() {
            const current = ref.current;
            if (current != null) {
              current.scrollToOffset({ offset: 0, animated: false });
            }
          };
          let num = 3;
          cResult[3] = fn;
          tmp11 = fn;
        } else {
          tmp11 = cResult[3];
        }
        if (cResult[4] !== channel.id) {
          const items = [channel.id];
          cResult[4] = channel.id;
          cResult[5] = items;
          tmp12 = items;
        } else {
          tmp12 = cResult[5];
        }
        const effect = canLoadMore.useEffect(tmp11, tmp12);
        const tmp19 = closure_29(channel, sortOrder, tagFilter, tagSetting);
        ({ activeThreadIds, archivedThreadIds, canLoadMore } = tmp19);
        const loadMore = tmp19.loadMore;
        const archivedThreadsLoading = tmp19.archivedThreadsLoading;
        ({ activeThreadsLoading, isSearchLoading, searchResults } = tmp19);
        const isEmpty = tmp19.isEmpty;
        const tmp20 = tmp8(ref[39])(channel);
        const channelName = tmp20;
        const tmpResult = tmp(ref[19]);
        const canViewArchivedPosts = tmpResult.useCanViewArchivedPosts(channel);
        const tmpResult3 = tmp(ref[19]);
        const canSearchForumPosts = tmpResult3.useCanSearchForumPosts(channel);
        const tmpResult4 = tmp(ref[16]);
        const clientThemesOverride = tmpResult4.useClientThemesOverride();
        if (cResult[6] === archivedThreadsLoading) {
          if (cResult[7] === canLoadMore) {
            if (cResult[8] === canViewArchivedPosts) {
              if (cResult[9] === loadMore) {
                let tmp24;
                if (cResult[10] === searchResults) {
                  tmp24 = cResult[11];
                }
                if (cResult[12] === archivedThreadsLoading) {
                  if (cResult[13] === canLoadMore) {
                    if (cResult[14] === canViewArchivedPosts) {
                      if (cResult[15] === loadMore) {
                        let tmp25;
                        let tmp26;
                        if (cResult[16] === searchResults) {
                          tmp25 = cResult[17];
                        }
                        if (cResult[18] === activeThreadIds) {
                          if (cResult[19] === activeThreadsLoading) {
                            if (cResult[20] === archivedThreadIds) {
                              if (cResult[21] === archivedThreadsLoading) {
                                if (cResult[22] === canSearchForumPosts) {
                                  if (cResult[23] === canViewArchivedPosts) {
                                    if (cResult[24] === isSearchLoading) {
                                      if (cResult[25] === searchResults) {
                                        tmp26 = cResult[26];
                                      }
                                      if (cResult[27] === tmp20) {
                                        if (cResult[28] === searchQuery) {
                                          let tmp63;
                                          let length;
                                          const tmp61 = cResult[29];
                                          if (searchResults != null) {
                                            length = searchResults.length;
                                          }
                                          if (tmp61 === length) {
                                            tmp63 = cResult[30];
                                          }
                                          if (isEmpty) {
                                            let str2 = tmp20;
                                            if (tmp20 == null) {
                                              str2 = "";
                                            }
                                            if (cResult[31] === str2) {
                                              let tmp92;
                                              if (cResult[32] === tagFilter) {
                                                tmp92 = cResult[33];
                                              }
                                              return tmp92;
                                            }
                                            let obj3 = { topViewHeight: 92, channelName: str2, tagFilter };
                                            const tmp96 = closure_14(searchQuery(ref[42]), obj3);
                                            cResult[31] = str2;
                                            cResult[32] = tagFilter;
                                            cResult[33] = tmp96;
                                            tmp92 = tmp96;
                                          } else {
                                            if (cResult[34] === tmp4.list) {
                                              let tmp65;
                                              if (cResult[35] === clientThemesOverride) {
                                                tmp65 = cResult[36];
                                              }
                                              let num39 = 0;
                                              if (0 !== activeThreadIds.length) {
                                                num39 = searchQuery(ref[12]).space.PX_8;
                                              }
                                              const sum = insets.bottom + searchQuery(ref[12]).space.PX_16;
                                              const tmp68 = searchQuery;
                                              if (cResult[37] === num39) {
                                                let tmp71;
                                                if (cResult[38] === sum) {
                                                  tmp71 = cResult[39];
                                                }
                                                if (cResult[40] === channel.guild_id) {
                                                  let tmp72;
                                                  if (cResult[41] === channel.id) {
                                                    tmp72 = cResult[42];
                                                  }
                                                  if (cResult[43] === tmp26) {
                                                    if (cResult[44] === tmp24) {
                                                      if (cResult[45] === tmp25) {
                                                        if (cResult[46] === tmp63) {
                                                          if (cResult[47] === tmp71) {
                                                            let tmp73;
                                                            if (cResult[48] === tmp72) {
                                                              tmp73 = cResult[49];
                                                            }
                                                            if (cResult[50] === tmp73) {
                                                              let tmp81;
                                                              let tmp85;
                                                              let tmp88;
                                                              if (cResult[51] === tmp65) {
                                                                tmp81 = cResult[52];
                                                              }
                                                              const _Symbol2 = Symbol;
                                                              if (
                                                                cResult[53] === Symbol.for("react.memo_cache_sentinel")
                                                              ) {
                                                                const tmp87 = closure_14(tmp68(ref[45]), {
                                                                  absolute: true,
                                                                  mix: true,
                                                                });
                                                                cResult[53] = tmp87;
                                                                tmp85 = tmp87;
                                                              } else {
                                                                tmp85 = cResult[53];
                                                              }
                                                              if (cResult[54] !== tmp81) {
                                                                const obj5 = { children: items1 };
                                                                items1 = [tmp85, tmp81];
                                                                const tmp91 = closure_16(closure_15, obj5);
                                                                cResult[54] = tmp81;
                                                                cResult[55] = tmp91;
                                                                tmp88 = tmp91;
                                                              } else {
                                                                tmp88 = cResult[55];
                                                              }
                                                              return tmp88;
                                                            }
                                                            const obj6 = { style: tmp65, children: tmp73 };
                                                            const tmp84 = closure_14(loadMore, obj6);
                                                            cResult[50] = tmp73;
                                                            cResult[51] = tmp65;
                                                            cResult[52] = tmp84;
                                                            tmp81 = tmp84;
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                  const obj7 = {
                                                    ref,
                                                    contentContainerStyle: tmp71,
                                                    getItemType: getForumItemType,
                                                    keyExtractor: forumKeyExtractor,
                                                    renderItem: tmp63,
                                                    data: tmp26,
                                                    onScroll: tmp25,
                                                    onScrollBeginDrag: tmp72,
                                                    onEndReached: tmp24,
                                                    onViewableItemsChanged: onForumViewableItemsChanged,
                                                    viewabilityConfig,
                                                  };
                                                  const tmp80 = closure_14(channel(ref[44]).FlashList, obj7);
                                                  cResult[43] = tmp26;
                                                  cResult[44] = tmp24;
                                                  cResult[45] = tmp25;
                                                  cResult[46] = tmp63;
                                                  cResult[47] = tmp71;
                                                  cResult[48] = tmp72;
                                                  cResult[49] = tmp80;
                                                  tmp73 = tmp80;
                                                }
                                                function he() {
                                                  const obj = tracking_Tracking;
                                                  const obj2 = { guildId: channel.guild_id, channelId: channel.id };
                                                  return obj.trackForumScrolled(obj2);
                                                }
                                                cResult[40] = channel.guild_id;
                                                cResult[41] = channel.id;
                                                cResult[42] = he;
                                                tmp72 = he;
                                              }
                                              const obj8 = { paddingTop: num39, paddingBottom: sum };
                                              cResult[37] = num39;
                                              cResult[38] = sum;
                                              cResult[39] = obj8;
                                              tmp71 = obj8;
                                            }
                                            const items2 = [tmp4.list, clientThemesOverride];
                                            cResult[34] = tmp4.list;
                                            cResult[35] = clientThemesOverride;
                                            cResult[36] = items2;
                                            tmp65 = items2;
                                          }
                                        }
                                      }
                                      cResult[27] = tmp20;
                                      cResult[28] = searchQuery;
                                      let length1;
                                      if (searchResults != null) {
                                        length1 = searchResults.length;
                                      }
                                      function ae(item) {
                                        let str;
                                        let tmp15Result;
                                        item = item.item;
                                        if (item === archived_section) {
                                          tmp15Result = authStore2(closure_25, {});
                                        } else if (item === search_section) {
                                          let num;
                                          if (searchResults != null) {
                                            num = searchResults.length;
                                          }
                                          if (num == null) {
                                            num = 0;
                                          }
                                          const obj2 = { numPosts: num, searchQuery: str };
                                          str = searchQuery;
                                          if (searchQuery == null) {
                                            str = "";
                                          }
                                          tmp15Result = authStore2(closure_26, obj2);
                                        } else if (item === loading_section) {
                                          tmp15Result = authStore2(ForumPostPlaceholderDefault, {});
                                        } else if (item === missing_permission_archived_threads) {
                                          const obj3 = { channelName };
                                          tmp15Result = authStore2(closure_27, obj3);
                                        } else if (item === missing_permission_search) {
                                          const obj4 = { channelName };
                                          tmp15Result = authStore2(closure_28, obj4);
                                        } else {
                                          const obj = { threadId: item };
                                          tmp15Result = authStore2(ForumPostDefault, obj);
                                        }
                                        return tmp15Result;
                                      }
                                      cResult[29] = length1;
                                      cResult[30] = ae;
                                      tmp63 = ae;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        const items3 = [];
                        if (null != searchResults) {
                          items3.push(search_section);
                          const push3 = items3.push;
                          if (canSearchForumPosts) {
                            const items4 = [];
                            HermesBuiltin.arraySpread(items4, searchResults, 0);
                            HermesBuiltin.apply(push3, items4, items3);
                          } else {
                            push3(missing_permission_search);
                          }
                        } else if (!activeThreadsLoading) {
                          const push = items3.push;
                          const items5 = [];
                          HermesBuiltin.arraySpread(items5, activeThreadIds, 0);
                          HermesBuiltin.apply(push, items5, items3);
                          if (canViewArchivedPosts) {
                            const tmp38 = null != archivedThreadIds && archivedThreadIds.length > 0;
                            if (tmp38) {
                              items3.push(archived_section);
                              const push2 = items3.push;
                              const items6 = [];
                              HermesBuiltin.arraySpread(items6, archivedThreadIds, 0);
                              HermesBuiltin.apply(push2, items6, items3);
                            }
                          } else {
                            items3.push(archived_section);
                            items3.push(missing_permission_archived_threads);
                          }
                        }
                        let num20 = 0;
                        if (!activeThreadsLoading) {
                          num20 = 0;
                          if (!archivedThreadsLoading) {
                            num20 = 0;
                          }
                          cResult[18] = activeThreadIds;
                          cResult[19] = activeThreadsLoading;
                          cResult[20] = archivedThreadIds;
                          cResult[21] = archivedThreadsLoading;
                          cResult[22] = canSearchForumPosts;
                          cResult[23] = canViewArchivedPosts;
                          cResult[24] = isSearchLoading;
                          cResult[25] = searchResults;
                          cResult[26] = items3;
                          tmp26 = items3;
                        }
                        do {
                          let arr5 = items3.push(loading_section);
                          num20 = num20 + 1;
                        } while (num20 < 20);
                      }
                    }
                  }
                }
                const fn2 = function q(nativeEvent) {
                  nativeEvent = nativeEvent.nativeEvent;
                  let tmp = null == searchResults;
                  const y = nativeEvent.contentOffset.y;
                  const height = nativeEvent.contentSize.height;
                  const height2 = nativeEvent.layoutMeasurement.height;
                  if (tmp) {
                    tmp = canViewArchivedPosts;
                  }
                  if (tmp) {
                    tmp = !archivedThreadsLoading;
                  }
                  if (tmp) {
                    tmp = canLoadMore;
                  }
                  if (tmp) {
                    tmp = y + height2 > height - 976;
                  }
                  if (tmp) {
                    loadMore();
                  }
                };
                cResult[12] = archivedThreadsLoading;
                cResult[13] = canLoadMore;
                cResult[14] = canViewArchivedPosts;
                cResult[15] = loadMore;
                cResult[16] = searchResults;
                cResult[17] = fn2;
                tmp25 = fn2;
              }
            }
          }
        }
        class B {
          constructor() {
            const tmp = null == searchResults && canViewArchivedPosts && !archivedThreadsLoading && canLoadMore;
            if (tmp) {
              loadMore();
            }
          }
        }
        cResult[6] = archivedThreadsLoading;
        cResult[7] = canLoadMore;
        cResult[8] = canViewArchivedPosts;
        cResult[9] = loadMore;
        cResult[10] = searchResults;
        cResult[11] = B;
        tmp24 = B;
      }
      const obj9 = { guildId: channel.guild_id, channelId: channel.id };
      cResult[0] = channel.guild_id;
      cResult[1] = channel.id;
      cResult[2] = obj9;
      tmp7 = obj9;
    }
  : (channel) => {
      let FlashList;
      let items5;
      let items6;
      let obj8;
      let obj9;
      let sortOrder;
      let tagFilter;
      channel = channel.channel;
      const searchQuery = channel.searchQuery;
      let activeThreadIds;
      let searchResults;
      const insets = channel.insets;
      let tmp = closure_24();
      const ref = activeThreadIds.useRef(null);
      const tmp3 = searchResults(channel.id);
      ({ sortOrder, tagFilter } = tmp3);
      const tagSetting = tmp3.tagSetting;
      let obj = searchQuery(ref[38]);
      let obj2 = { guildId: channel.guild_id, channelId: channel.id };
      const forumChannelSeenManager = obj.useForumChannelSeenManager(obj2);
      let items = [channel.id];
      const effect = activeThreadIds.useEffect(() => {
        const current = ref.current;
        if (current != null) {
          current.scrollToOffset({ offset: 0, animated: false });
        }
      }, items);
      const tmp8 = closure_29(channel, sortOrder, tagFilter, tagSetting);
      activeThreadIds = tmp8.activeThreadIds;
      const archivedThreadIds = tmp8.archivedThreadIds;
      const canLoadMore = tmp8.canLoadMore;
      const loadMore = tmp8.loadMore;
      const archivedThreadsLoading = tmp8.archivedThreadsLoading;
      const activeThreadsLoading = tmp8.activeThreadsLoading;
      const isSearchLoading = tmp8.isSearchLoading;
      searchResults = tmp8.searchResults;
      const isEmpty = tmp8.isEmpty;
      const tmp9 = searchQuery(ref[39])(channel);
      const channelName = tmp9;
      let obj3 = channel(ref[19]);
      const canViewArchivedPosts = obj3.useCanViewArchivedPosts(channel);
      let obj4 = channel(ref[19]);
      const canSearchForumPosts = obj4.useCanSearchForumPosts(channel);
      let items1 = [archivedThreadsLoading, canLoadMore, canViewArchivedPosts, loadMore, searchResults];
      const obj5 = channel(ref[16]);
      const clientThemesOverride = obj5.useClientThemesOverride();
      let items2 = [976, archivedThreadsLoading, canLoadMore, canViewArchivedPosts, loadMore, searchResults];
      const callback = activeThreadIds.useCallback(() => {
        const tmp = null == searchResults && canViewArchivedPosts && !archivedThreadsLoading && canLoadMore;
        if (tmp) {
          loadMore();
        }
      }, items1);
      let items3 = [
        searchResults,
        canViewArchivedPosts,
        canSearchForumPosts,
        activeThreadIds,
        activeThreadsLoading,
        archivedThreadIds,
        archivedThreadsLoading,
        isSearchLoading,
      ];
      const callback1 = activeThreadIds.useCallback((nativeEvent) => {
        nativeEvent = nativeEvent.nativeEvent;
        let tmp = null == searchResults;
        const y = nativeEvent.contentOffset.y;
        const height = nativeEvent.contentSize.height;
        const height2 = nativeEvent.layoutMeasurement.height;
        if (tmp) {
          tmp = canViewArchivedPosts;
        }
        if (tmp) {
          tmp = !archivedThreadsLoading;
        }
        if (tmp) {
          tmp = canLoadMore;
        }
        if (tmp) {
          tmp = y + height2 > height - 976;
        }
        if (tmp) {
          loadMore();
        }
      }, items2);
      let length;
      const memo = activeThreadIds.useMemo(() => {
        const items = [];
        if (null != searchResults) {
          items.push(search_section);
          const push3 = items.push;
          if (canSearchForumPosts) {
            const items1 = [];
            HermesBuiltin.arraySpread(items1, searchResults, 0);
            HermesBuiltin.apply(push3, items1, items);
          } else {
            push3(missing_permission_search);
          }
        } else if (!activeThreadsLoading) {
          const push = items.push;
          const items2 = [];
          HermesBuiltin.arraySpread(items2, activeThreadIds, 0);
          HermesBuiltin.apply(push, items2, items);
          if (canViewArchivedPosts) {
            const tmp15 = null != archivedThreadIds && archivedThreadIds.length > 0;
            if (tmp15) {
              items.push(archived_section);
              const push2 = items.push;
              const items3 = [];
              HermesBuiltin.arraySpread(items3, archivedThreadIds, 0);
              HermesBuiltin.apply(push2, items3, items);
            }
          } else {
            items.push(archived_section);
            items.push(missing_permission_archived_threads);
          }
        }
        let num5 = 0;
        if (!activeThreadsLoading) {
          num5 = 0;
          if (!archivedThreadsLoading) {
            num5 = 0;
          }
          return items;
        }
        do {
          let arr10 = items.push(loading_section);
          num5 = num5 + 1;
        } while (num5 < 20);
      }, items3);
      const tmp10 = channel;
      if (searchResults != null) {
        length = searchResults.length;
      }
      const items4 = [length, searchQuery, tmp9];
      if (isEmpty) {
        let str = tmp9;
        const tmp4Result = searchQuery(ref[42]);
        if (tmp9 == null) {
          str = "";
        }
        const obj6 = { topViewHeight: 92, channelName: str, tagFilter };
        return closure_14(tmp4Result, obj6);
      } else {
        const obj7 = { style: items5, children: closure_14(FlashList, obj8) };
        items5 = [tmp.list, clientThemesOverride];
        let num = 0;
        obj8 = {
          ref,
          contentContainerStyle: obj9,
          getItemType: getForumItemType,
          keyExtractor: forumKeyExtractor,
          renderItem: tmp18,
          data: memo,
          onScroll: callback1,
          onScrollBeginDrag() {
            const obj = tracking_Tracking;
            const obj2 = { guildId: channel.guild_id, channelId: channel.id };
            return obj.trackForumScrolled(obj2);
          },
          onEndReached: callback,
          onViewableItemsChanged: onForumViewableItemsChanged,
          viewabilityConfig,
        };
        FlashList = tmp10(tmp5[44]).FlashList;
        const tmp20 = archivedThreadIds;
        if (0 !== activeThreadIds.length) {
          num = tmp4(tmp5[12]).space.PX_8;
        }
        const obj10 = { children: items6 };
        items6 = [,];
        obj9 = { paddingTop: num, paddingBottom: insets.bottom + searchQuery(ref[12]).space.PX_16 };
        const tmp19Result = closure_14(tmp20, obj7);
        items6[0] = closure_14(searchQuery(ref[45]), { absolute: true, mix: true });
        items6[1] = tmp19Result;
        return closure_16(closure_15, obj10);
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let analyticsLocations;
      let closure_1;
      let constants2;
      let constants3;
      let first;
      let tmp13;
      let tmp15;
      let tmp18;
      let tmp22;
      let tmp7;
      const tmp = channel;
      let obj = channel(analyticsLocations[15]);
      const cResult = obj.c(68);
      channel = channel.channel;
      closure_24();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildVerificationStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel.guild_id) {
        const fn = function o() {
          return GuildVerificationStore.canChatInGuild(channel.guild_id);
        };
        cResult[1] = channel.guild_id;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      let tmpResult = tmp(tmp2[21]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      const tmpResult5 = tmp(analyticsLocations[48]);
      const canStartThread = tmpResult5.useCanStartThread(channel);
      importDefault = null != channel.topic && 0 !== channel.topic.length;
      const tmp10 = null != channel.topic && 0 !== channel.topic.length;
      const tmp12 = require("useAnalyticsLocations");
      analyticsLocations = tmp12(require("AnalyticsLocation").FORUM_CHANNEL).analyticsLocations;
      const tmp11 = importDefault;
      if (cResult[3] !== channel.id) {
        let obj2 = { channelId: channel.id };
        cResult[3] = channel.id;
        cResult[4] = obj2;
        tmp13 = obj2;
      } else {
        tmp13 = cResult[4];
      }
      const tmpResult6 = tmp(analyticsLocations[19]);
      const searchQuery = tmpResult6.useForumSearchState(tmp13).searchQuery;
      const tmpResult7 = tmp(analyticsLocations[51]);
      const showMemberVerificationGate = tmpResult7.useShowMemberVerificationGate(channel.guild_id);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [DraftStore];
        cResult[5] = items1;
        tmp15 = items1;
      } else {
        tmp15 = cResult[5];
      }
      if (cResult[6] !== channel.id) {
        class L {
          constructor() {
            return DraftStore.getThreadSettings(channel.id);
          }
        }
        const items2 = [channel.id];
        cResult[6] = channel.id;
        cResult[7] = L;
        cResult[8] = items2;
        tmp18 = items2;
      } else {
        class L {
          constructor() {
            return DraftStore.getThreadSettings(channel.id);
          }
        }
        tmp18 = cResult[8];
      }
      const tmpResult8 = tmp(analyticsLocations[21]);
      const stateFromStores1 = tmpResult8.useStateFromStores(tmp15, L, tmp18);
      tmp11(analyticsLocations[52])(channel);
      if (cResult[9] !== channel.id) {
        class M {
          constructor() {
            return () => {
              if (null != id.id) {
                const obj = closure_1(analyticsLocations[53]);
                obj.clearForumSearch(tmp.id);
              }
            };
          }
        }
        const items3 = [channel.id];
        cResult[9] = channel.id;
        cResult[10] = M;
        cResult[11] = items3;
        tmp22 = items3;
      } else {
        class M {
          constructor() {
            return () => {
              if (null != id.id) {
                const obj = closure_1(analyticsLocations[53]);
                obj.clearForumSearch(tmp.id);
              }
            };
          }
        }
        tmp22 = cResult[11];
      }
      const effect = searchQuery.useEffect(M, tmp22);
      if (cResult[12] === analyticsLocations) {
        class M {
          constructor() {
            return () => {
              if (null != id.id) {
                const obj = closure_1(analyticsLocations[53]);
                obj.clearForumSearch(tmp.id);
              }
            };
          }
        }
      }
      cResult[12] = analyticsLocations;
      cResult[13] = channel;
      cResult[14] = searchQuery;
      if (stateFromStores1 != null) {
        class M {
          constructor() {
            return () => {
              if (null != id.id) {
                const obj = closure_1(analyticsLocations[53]);
                obj.clearForumSearch(tmp.id);
              }
            };
          }
        }
      }
      class R {
        constructor(analyticsLocationObject) {
          if (channel.isGameInvitesChannel()) {
            const obj2 = { parentChannelId: channel.id, analyticsLocations };
            const obj5 = CreateGameInvitePostModalActionCreators;
            const result = obj5.openCreateGameInvitePostModal(obj2);
          } else {
            const obj = DraftActionCreatorsDefault;
            obj.changeThreadSettings(channel.id, { isPrivate: false });
            let name;
            if (stateFromStores1 != null) {
              name = stateFromStores1.name;
            }
            let tmp8 = null != name;
            if (tmp8) {
              let length;
              if (stateFromStores1 != null) {
                if (stateFromStores1.name != null) {
                  const trimmed = str.trim();
                  if (trimmed != null) {
                    length = trimmed.length;
                  }
                }
              }
              tmp8 = 0 !== length;
            }
            if (!tmp8) {
              let trimmed1;
              const changeThreadSettings = DraftActionCreatorsDefault.changeThreadSettings;
              const id = channel.id;
              DraftActionCreatorsDefault;
              if (null != searchQuery) {
                if (searchQuery.trim().length > 0) {
                  trimmed1 = searchQuery.trim();
                }
              }
              const obj6 = { name: trimmed1 };
              changeThreadSettings(id, obj6);
            }
            const obj9 = { guildId: null, parentChannelId: null, analyticsLocationObject, analyticsLocations };
            ({ guild_id: obj4.guildId, id: obj4.parentChannelId } = channel);
            const obj3 = ForumComposerModalActionCreators;
            const result1 = obj3.openCreateForumPostModal(obj9);
          }
        }
      }
      cResult[15] = undefined;
      cResult[16] = R;
    }
  : (channel) => {
      let closure_1;
      let constants2;
      let constants3;
      let intl;
      let items6;
      let items7;
      let items8;
      let items9;
      let stringResult;
      channel = channel.channel;
      importDefault = undefined;
      let analyticsLocations;
      let searchQuery;
      let showMemberVerificationGate;
      let stateFromStores1;
      let callback;
      const tmp = closure_24();
      let obj = channel(analyticsLocations[21]);
      const items = [GuildVerificationStore];
      const stateFromStores = obj.useStateFromStores(items, () =>
        GuildVerificationStore.canChatInGuild(channel.guild_id),
      );
      let obj2 = channel(analyticsLocations[48]);
      const canStartThread = obj2.useCanStartThread(channel);
      let tmp6 = null != channel.topic;
      if (tmp6) {
        tmp6 = 0 !== channel.topic.length;
      }
      importDefault = tmp6;
      let tmp8 = require("useAnalyticsLocations");
      analyticsLocations = tmp8(require("AnalyticsLocation").FORUM_CHANNEL).analyticsLocations;
      const tmp2Result = tmp2(tmp3[19]);
      let obj3 = { channelId: channel.id };
      searchQuery = tmp2Result.useForumSearchState(obj3).searchQuery;
      const tmp2Result4 = channel(analyticsLocations[51]);
      showMemberVerificationGate = tmp2Result4.useShowMemberVerificationGate(channel.guild_id);
      const items1 = [DraftStore];
      const items2 = [channel.id];
      const tmp2Result5 = channel(analyticsLocations[21]);
      stateFromStores1 = tmp2Result5.useStateFromStores(items1, () => DraftStore.getThreadSettings(channel.id), items2);
      const items3 = [channel.id];
      const tmp11 = require("useShowChannelOptInNotice")(channel);
      const effect = searchQuery.useEffect(() => {
        let id;
        return () => {
          if (null != id.id) {
            const obj = closure_1(analyticsLocations[53]);
            obj.clearForumSearch(tmp.id);
          }
        };
      }, items3);
      const items4 = [channel, analyticsLocations, searchQuery, stateFromStores1];
      callback = searchQuery.useCallback((analyticsLocationObject) => {
        if (channel.isGameInvitesChannel()) {
          const obj2 = { parentChannelId: channel.id, analyticsLocations };
          const obj5 = CreateGameInvitePostModalActionCreators;
          const result = obj5.openCreateGameInvitePostModal(obj2);
        } else {
          const obj = DraftActionCreatorsDefault;
          obj.changeThreadSettings(channel.id, { isPrivate: false });
          let name;
          if (stateFromStores1 != null) {
            name = stateFromStores1.name;
          }
          let tmp8 = null != name;
          if (tmp8) {
            let length;
            if (stateFromStores1 != null) {
              if (stateFromStores1.name != null) {
                const trimmed = str.trim();
                if (trimmed != null) {
                  length = trimmed.length;
                }
              }
            }
            tmp8 = 0 !== length;
          }
          if (!tmp8) {
            let trimmed1;
            const changeThreadSettings = DraftActionCreatorsDefault.changeThreadSettings;
            const id = channel.id;
            DraftActionCreatorsDefault;
            if (null != searchQuery) {
              if (searchQuery.trim().length > 0) {
                trimmed1 = searchQuery.trim();
              }
            }
            const obj6 = { name: trimmed1 };
            changeThreadSettings(id, obj6);
          }
          const obj9 = { guildId: null, parentChannelId: null, analyticsLocationObject, analyticsLocations };
          ({ guild_id: obj4.guildId, id: obj4.parentChannelId } = channel);
          const obj3 = ForumComposerModalActionCreators;
          const result1 = obj3.openCreateForumPostModal(obj9);
        }
      }, items4);
      const items5 = [channel, showMemberVerificationGate, tmp6, callback];
      let tmp15 = !stateFromStores;
      const callback1 = searchQuery.useCallback(() => {
        let id;
        function startCreateForumPostFlow() {
          if (closure_1_1) {
            let obj = closure_1(analyticsLocations[57]);
            if (!obj.hasSeen(id.id)) {
              const obj3 = {
                channel: id,
                onPress() {
                  const obj = {
                    page: constants2.GUILD_CHANNEL,
                    section: constants3.FORUM_CHANNEL_GUIDELINES,
                    object: constants.BUTTON_CTA,
                  };
                  return closure_1_6(obj);
                },
              };
              const obj2 = channel(analyticsLocations[60]);
              const result = obj2.openForumGuidelinesActionSheet(obj3);
            }
          }
          const obj4 = channel(analyticsLocations[58]);
          const result1 = obj4.triggerHapticFeedback(closure_1(analyticsLocations[59]).IMPACT_LIGHT);
          const obj5 = {
            page: constants2.GUILD_CHANNEL,
            section: constants3.FORUM_CHANNEL_FOOTER,
            object: constants.BUTTON_CTA,
          };
          callback(obj5);
        }
        let obj = tracking_Tracking;
        let obj2 = { guildId: channel.guild_id, channelId: channel.id };
        let result = obj.trackForumCreateNewPostClick(obj2);
        if (showMemberVerificationGate) {
          const tmpResult = MemberVerificationModalActionCreators;
          let result1 = tmpResult.openMemberVerificationModal(channel.guild_id, startCreateForumPostFlow);
        } else {
          const result2 = startCreateForumPostFlow();
        }
      }, items5);
      if (stateFromStores) {
        tmp15 = !canStartThread && !showMemberVerificationGate;
      }
      const insets = tmp7(tmp3[62])({ includeKeyboardHeight: true }).insets;
      let obj4 = { style: tmp.background, children: items6 };
      let tmp20 = null;
      const tmp2Result6 = channel(analyticsLocations[16]);
      const clientThemesOverride = tmp2Result6.useClientThemesOverride(tmp.noHeight);
      if (tmp11) {
        let obj5 = { channel, ctaProps: { variant: "secondary" }, topBorder: true };
        tmp20 = closure_14(tmp2(tmp3[63]).OptInChannelBanner, obj5);
      }
      items6 = [tmp20, , , , ,];
      let obj6 = { style: tmp.headerRow, children: items8 };
      const obj7 = { style: tmp.headerLeftContainer, children: items7 };
      let isGameInvitesChannelResult = channel.isGameInvitesChannel();
      if (isGameInvitesChannelResult) {
        const obj8 = { channel };
        isGameInvitesChannelResult = closure_14(closure_30, obj8);
      }
      items7 = [isGameInvitesChannelResult, closure_14(SortAndViewOptions, { channel })];
      items8 = [closure_16(showMemberVerificationGate, obj7)];
      let tmp25Result = channel.availableTags.length > 0;
      if (tmp25Result) {
        let obj9 = { channel };
        tmp25Result = closure_14(TagFilter, obj9);
      }
      items8[1] = tmp25Result;
      items6[1] = closure_16(showMemberVerificationGate, obj6);
      const obj10 = { style: items9 };
      items9 = [tmp.headerDivider, clientThemesOverride];
      items6[2] = closure_14(showMemberVerificationGate, obj10);
      const obj11 = { style: tmp.container, children: closure_14(closure_36, { channel, insets, searchQuery }) };
      items6[3] = closure_14(showMemberVerificationGate, obj11);
      const obj12 = {
        accessibilityLabel: intl.string(channel(analyticsLocations[17]).t.TyAuoT),
        icon: require("AssetRegistry"),
        disabled: tmp15,
        positionBottom: insets.bottom + require("native").space.PX_16,
        onPress: callback1,
        onPressDisabled: onCreatePostWithoutPermission,
        accessibilityHint: stringResult,
      };
      const FloatingActionButton = tmp2(tmp3[64]).FloatingActionButton;
      intl = tmp2(tmp3[17]).intl;
      stringResult = undefined;
      if (tmp15) {
        const intl2 = tmp2(tmp3[17]).intl;
        stringResult = intl2.string(tmp2(tmp3[17]).t.iyzwnD);
      }
      items6[4] = closure_14(FloatingActionButton, obj12);
      let tmp25Result2 = null;
      if (null != channel.guild_id) {
        const obj13 = { channel };
        tmp25Result2 = closure_14(tmp2(tmp3[66]).MemberActionChatInputBannerGuarded, obj13);
      }
      items6[5] = tmp25Result2;
      return closure_16(showMemberVerificationGate, obj4);
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/forums/native/ForumChannel.tsx");

export default tmp10;
