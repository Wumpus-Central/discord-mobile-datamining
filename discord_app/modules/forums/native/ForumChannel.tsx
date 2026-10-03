// discord_app/modules/forums/native/ForumChannel.tsx
import TTITrackerDefault from "../../tti_analytics/TTITracker.tsx";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01987_asyncRequireImpl.js";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import _modDef4815 from "../../../../_runtime/metro/04815__.js";
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
import ForumPostPlaceholderDefault from "ForumPostPlaceholder.tsx";
import CreateGameInvitePostModalActionCreators from "../../game_invite_channels/native/CreateGameInvitePostModalActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import LurkingStore from "../../lurker_mode/LurkingStore.tsx";
import ActiveThreadsStore from "../../threads/ActiveThreadsStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import DraftStore from "../../../stores/DraftStore.tsx";
import GuildVerificationStore from "../../../stores/GuildVerificationStore.tsx";
import TextStyles_mod from "../../rebrand/native/TextStyles.tsx";

const require = globalThis.__r;

require = fn;
function forumKeyExtractor(arg0, arg1) {
  let combined = arg0;
  if (arg0 === loading_section) {
    const _HermesInternal = HermesInternal;
    combined = "" + tmp2 + "-" + arg1;
  }
  return combined;
}
function SortAndViewOptions(channel) {
  channel = channel.channel;
  const id = channel.id;
  const items = [id];
  const callback = noop.useCallback(() => {
    const combined = "ForumDisplaySettingsActionSheet-" + id;
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12433, dependencyMap.paths), combined, {
      channelId: id,
      onClose() {
        ActionSheetActionCreatorsDefault.hideActionSheet(combined);
      },
    });
  }, items);
  const intl = id(1126).intl;
  const string = intl.string;
  const t = id(1126).t;
  if (isMediaChannelResult) {
    let stringResult = string(t.JxU0wr);
  } else {
    stringResult = string(t.xyYt8A);
  }
  isMediaChannelResult = channel.isMediaChannel();
  return closure_14(id(5594).Button, {
    variant: "secondary",
    text: stringResult,
    onPress: callback,
    size: "sm",
    icon: closure_14(id(11775).ArrowsUpDownIcon, { size: "xxs" }),
  });
}
function TagFilter(channel) {
  channel = channel.channel;
  const obj = { variant: "secondary", text: null, onPress: null, size: "sm", icon: null };
  const intl = channel(1126).intl;
  obj.text = intl.string(channel(1126).t["112vVE"]);
  obj.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.openLazy(
      asyncRequireImpl(12434, dependencyMap.paths),
      "ForumTagFilterActionSheet",
      { channel },
    );
  };
  obj.icon = closure_14(channel(8524).TagIcon, { size: "xxs" });
  return closure_14(channel(5594).Button, obj);
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
        const obj = require("ForumChannelSeenManager");
        if (item.isViewable) {
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
  const obj2 = { key: "FORUM_NO_POST_PERMISSION_HELP", content: null, icon: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t.iyzwnD);
  obj2.icon = _modDef4815;
  ToastActionCreatorsDefault.open(obj2);
}
const View = fn(17).View;
const useForumChannelStore = fn(11615).useForumChannelStore;
const Constants = fn(1085);
({ AnalyticsObjects: closure_11, AnalyticsPages: closure_12, AnalyticsSections: map1 } = Constants);
const Fonts = fn(1096).Fonts;
const jsxProd = fn(21);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
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
const createStyles = fn(4890);
let obj2 = {
  background: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER },
  headerRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  headerLeftContainer: { flexDirection: "row", alignItems: "center", gap: 8 },
  headerDivider: null,
  container: null,
  noHeight: null,
  list: null,
  section: null,
  divider: null,
  missingPermissionContainer: null,
  missingPermissionText: null,
};
let size = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, width: "100%", height: 1 };
obj2.headerDivider = size;
obj2.container = { flex: 1, alignSelf: "stretch", alignItems: "center", position: "relative" };
obj2.noHeight = { height: 0 };
obj2.list = { flex: 1, paddingTop: 8, paddingHorizontal: 12, alignSelf: "stretch", marginBottom: 0 };
obj2.section = { alignItems: "flex-start", justifyContent: "flex-end" };
let TextStyles = TextStyles_mod;
const merged = Object.assign(
  TextStyles(Fonts.PRIMARY_BOLD, nativeDefault.colors.TEXT_MUTED, 12, { marginBottom: 12, uppercase: true }),
);
obj2.divider = { marginTop: 12, paddingStart: 4 };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let obj4 = { marginTop: 12, paddingStart: 4 };
obj2.missingPermissionContainer = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  alignItems: "center",
  justifyContent: "center",
  height: 48,
  borderRadius: nativeDefault.radii.xs,
};
let TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_NORMAL, nativeDefault.colors.TEXT_MUTED, 12));
obj2.missingPermissionText = {};
let closure_24 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(9);
      const tmp4 = closure_24();
      const clientThemesOverride = ClientThemesOverrides.useClientThemesOverride();
      if (cResult[0] === tmp4.section) {
        if (cResult[1] === clientThemesOverride) {
          let tmp6 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult = intl.string(util.t["3+LO1w"]);
          cResult[3] = stringResult;
          let tmp8 = stringResult;
        } else {
          tmp8 = cResult[3];
        }
        if (cResult[4] !== tmp4.divider) {
          const obj3 = { style: tmp4.divider, variant: "text-xs/bold", color: "text-muted", children: tmp8 };
          const tmp12 = state(Text_Text.Text, obj3);
          cResult[4] = tmp4.divider;
          cResult[5] = tmp12;
          let tmp10 = tmp12;
        } else {
          tmp10 = cResult[5];
        }
        if (cResult[6] === tmp6) {
          if (cResult[7] === tmp10) {
            let tmp13 = cResult[8];
          }
          return tmp13;
        }
        const obj4 = { style: tmp6, children: tmp10 };
        const tmp16 = state(View, obj4);
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
      const tmp = closure_24();
      const obj2 = { style: null, children: null };
      const items = [tmp.section, ClientThemesOverrides.useClientThemesOverride()];
      obj2.style = items;
      const obj3 = { style: tmp.divider, variant: "text-xs/bold", color: "text-muted", children: null };
      const intl = util.intl;
      obj3.children = intl.string(util.t["3+LO1w"]);
      obj2.children = state(Text_Text.Text, obj3);
      return state(View, obj2);
    };
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(9);
      ({ numPosts, searchQuery } = arg0);
      const tmp4 = closure_24();
      if (cResult[0] === numPosts) {
        if (cResult[1] === searchQuery) {
          if (cResult[3] === tmp4.divider) {
            if (cResult[4] === tmp5) {
              let tmp7 = cResult[5];
            }
            if (cResult[6] === tmp4.section) {
              if (cResult[7] === tmp7) {
                let tmp10 = cResult[8];
              }
              return tmp10;
            }
            const obj2 = { style: tmp4.section, children: tmp7 };
            const tmp13 = state(View, obj2);
            cResult[6] = tmp4.section;
            cResult[7] = tmp7;
            cResult[8] = tmp13;
            tmp10 = tmp13;
          }
          const obj3 = { style: tmp4.divider, variant: "text-xs/bold", color: "text-muted", children: cResult[2] };
          const tmp9 = state(Text_Text.Text, obj3);
          cResult[3] = tmp4.divider;
          cResult[4] = cResult[2];
          cResult[5] = tmp9;
          tmp7 = tmp9;
        }
      }
      let num = 0;
      if (0 === numPosts) {
        const intl2 = util.intl;
        let stringResult = intl2.string(util.t.DbgHxi);
      } else {
        const intl = util.intl;
        const obj4 = { numPosts, query: searchQuery };
        stringResult = intl.formatToPlainString(util.t["tBz/8b"], obj4);
      }
      cResult[num] = numPosts;
      cResult[1] = searchQuery;
      num = 2;
      cResult[2] = stringResult;
    }
  : (numPosts) => {
      numPosts = numPosts.numPosts;
      const tmp = closure_24();
      const obj = { style: tmp.section, children: null };
      const obj2 = { style: tmp.divider, variant: "text-xs/bold", color: "text-muted", children: null };
      if (0 === numPosts) {
        const intl2 = util.intl;
        let stringResult = intl2.string(util.t.DbgHxi);
      } else {
        const intl = util.intl;
        const obj3 = { numPosts, query: numPosts.searchQuery };
        stringResult = intl.formatToPlainString(util.t["tBz/8b"], obj3);
      }
      obj2.children = stringResult;
      obj.children = state(Text_Text.Text, obj2);
      return state(View, obj);
    };
ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelName) => {
      const cResult = c.c(8);
      channelName = channelName.channelName;
      const tmp4 = closure_24();
      ({ missingPermissionContainer, missingPermissionText } = tmp4);
      if (cResult[0] !== channelName) {
        const intl = util.intl;
        const obj2 = { channelName };
        const formatResult = intl.format(util.t.TycmzM, obj2);
        cResult[0] = channelName;
        cResult[1] = formatResult;
        let tmp5 = formatResult;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.missingPermissionText) {
        if (cResult[3] === tmp5) {
          let tmp7 = cResult[4];
        }
        if (cResult[5] === tmp4.missingPermissionContainer) {
          if (cResult[6] === tmp7) {
            let tmp9 = cResult[7];
          }
          return tmp9;
        }
        const obj3 = { style: missingPermissionContainer, children: tmp7 };
        const tmp12 = state(View, obj3);
        cResult[5] = tmp4.missingPermissionContainer;
        cResult[6] = tmp7;
        cResult[7] = tmp12;
        tmp9 = tmp12;
      }
      const tmp8 = state(Text_Text.Text, {
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
      const tmp = closure_24();
      const obj = { style: tmp.missingPermissionContainer, children: null };
      const obj2 = { style: tmp.missingPermissionText, variant: "text-xs/normal", color: "text-muted", children: null };
      const intl = util.intl;
      obj2.children = intl.format(util.t.TycmzM, { channelName: channelName.channelName });
      obj.children = state(Text_Text.Text, obj2);
      return state(View, obj);
    };
ReactCompilerGating = fn(558);
let closure_28 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelName) => {
      const cResult = c.c(8);
      channelName = channelName.channelName;
      const tmp4 = closure_24();
      ({ section, missingPermissionText } = tmp4);
      if (cResult[0] !== channelName) {
        const intl = util.intl;
        const obj2 = { channelName };
        const formatResult = intl.format(util.t.OWZJdS, obj2);
        cResult[0] = channelName;
        cResult[1] = formatResult;
        let tmp5 = formatResult;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.missingPermissionText) {
        if (cResult[3] === tmp5) {
          let tmp7 = cResult[4];
        }
        if (cResult[5] === tmp4.section) {
          if (cResult[6] === tmp7) {
            let tmp9 = cResult[7];
          }
          return tmp9;
        }
        const obj3 = { style: section, children: tmp7 };
        const tmp12 = state(View, obj3);
        cResult[5] = tmp4.section;
        cResult[6] = tmp7;
        cResult[7] = tmp12;
        tmp9 = tmp12;
      }
      const tmp8 = state(Text_Text.Text, {
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
      const tmp = closure_24();
      const obj = { style: tmp.section, children: null };
      const obj2 = { style: tmp.missingPermissionText, variant: "text-xs/normal", color: "text-muted", children: null };
      const intl = util.intl;
      obj2.children = intl.format(util.t.OWZJdS, { channelName: channelName.channelName });
      obj.children = state(Text_Text.Text, obj2);
      return state(View, obj);
    };
ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel, sortOrder, tagFilter, tagSetting) => {
      _require = channel;
      const cResult = require("c").c(31);
      if (cResult[0] === channel) {
        if (cResult[1] === sortOrder) {
          if (cResult[2] === tagFilter) {
            if (cResult[3] === tagSetting) {
              let tmp4 = cResult[4];
            }
            const forumActiveThreadIds = tmp(tmp2[19]).useForumActiveThreadIds(tmp4);
            if (cResult[5] !== forumActiveThreadIds) {
              const substr = forumActiveThreadIds.slice(0, tmp(tmp2[20]).BATCH_SIZE);
              const joined = substr.join();
              cResult[5] = forumActiveThreadIds;
              cResult[6] = joined;
              let tmp5 = joined;
            } else {
              tmp5 = cResult[6];
            }
            closure_1 = tmp5;
            if (cResult[7] === channel) {
              if (cResult[8] === tmp5) {
                let tmp7 = cResult[9];
                let tmp8 = cResult[10];
              }
              const effect = activeThreadIds.useEffect(tmp7, tmp8);
              const _Symbol = Symbol;
              if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
                const items = [ActiveThreadsStore, LurkingStore];
                cResult[11] = items;
                let tmp12 = items;
              } else {
                tmp12 = cResult[11];
              }
              if (cResult[12] !== channel.guild_id) {
                class T {
                  constructor() {
                    hasLoadedResult = closure_6.hasLoaded(closure_0.guild_id);
                    tmp2 = !hasLoadedResult;
                    if (!hasLoadedResult) {
                      tmp2 = !closure_5.isLurking(closure_0.guild_id);
                    }
                    return tmp2;
                  }
                }
                cResult[12] = channel.guild_id;
                cResult[13] = T;
              } else {
                class T {
                  constructor() {
                    hasLoadedResult = closure_6.hasLoaded(closure_0.guild_id);
                    tmp2 = !hasLoadedResult;
                    if (!hasLoadedResult) {
                      tmp2 = !closure_5.isLurking(closure_0.guild_id);
                    }
                    return tmp2;
                  }
                }
              }
              stateFromStores = tmp(tmp2[21]).useStateFromStores(tmp12, T);
              if (cResult[14] !== channel.id) {
                class T {
                  constructor() {
                    hasLoadedResult = closure_6.hasLoaded(closure_0.guild_id);
                    tmp2 = !hasLoadedResult;
                    if (!hasLoadedResult) {
                      tmp2 = !closure_5.isLurking(closure_0.guild_id);
                    }
                    return tmp2;
                  }
                }
                tmp18[0] = channel.id;
                cResult[14] = channel.id;
                cResult[15] = tmp18;
              } else {
                class T {
                  constructor() {
                    hasLoadedResult = closure_6.hasLoaded(closure_0.guild_id);
                    tmp2 = !hasLoadedResult;
                    if (!hasLoadedResult) {
                      tmp2 = !closure_5.isLurking(closure_0.guild_id);
                    }
                    return tmp2;
                  }
                }
              }
              const tmpResult8 = tmp(tmp2[21]);
              const forumSearchState = tmp(tmp2[19]).useForumSearchState(tmp18);
              ({ searchResults, isSearchLoading } = forumSearchState);
              const tmpResult9 = tmp(tmp2[19]);
              const automaticForumSearch = tmp(tmp2[19]).useAutomaticForumSearch(channel, tagFilter, tagSetting);
              const tmpResult10 = tmp(tmp2[19]);
              const canViewArchivedPosts = tmp(tmp2[19]).useCanViewArchivedPosts(channel);
              const tmpResult12 = tmp(tmp2[22]);
              const archivedThreads = tmpResult12.useArchivedThreads(channel, sortOrder, tagFilter, tagSetting);
              ({ canLoadMore, loadMore, loading, threadIds } = archivedThreads);
              const tmpResult13 = tmp(tmp2[19]);
              const loadForumUnreadCounts = tmpResult13.useLoadForumUnreadCounts(
                channel,
                sortOrder,
                tagFilter,
                tagSetting,
              );
              const tmpResult11 = tmp(tmp2[19]);
              const gameInvitesActiveAndArchivedThreads = tmp(tmp2[23]).useGameInvitesActiveAndArchivedThreads(
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
                    hasLoadedResult = closure_6.hasLoaded(closure_0.guild_id);
                    tmp2 = !hasLoadedResult;
                    if (!hasLoadedResult) {
                      tmp2 = !closure_5.isLurking(closure_0.guild_id);
                    }
                    return tmp2;
                  }
                }
                if (!stateFromStores) {
                  class T {
                    constructor() {
                      hasLoadedResult = closure_6.hasLoaded(closure_0.guild_id);
                      tmp2 = !hasLoadedResult;
                      if (!hasLoadedResult) {
                        tmp2 = !closure_5.isLurking(closure_0.guild_id);
                      }
                      return tmp2;
                    }
                  }
                }
                if (!tmp37) {
                  class T {
                    constructor() {
                      hasLoadedResult = closure_6.hasLoaded(closure_0.guild_id);
                      tmp2 = !hasLoadedResult;
                      if (!hasLoadedResult) {
                        tmp2 = !closure_5.isLurking(closure_0.guild_id);
                      }
                      return tmp2;
                    }
                  }
                }
                tmp36 = !tmp37;
              }
              if (tmp36) {
                class T {
                  constructor() {
                    hasLoadedResult = closure_6.hasLoaded(closure_0.guild_id);
                    tmp2 = !hasLoadedResult;
                    if (!hasLoadedResult) {
                      tmp2 = !closure_5.isLurking(closure_0.guild_id);
                    }
                    return tmp2;
                  }
                }
                tmp36 = 0 === activeThreadIds.length;
              }
              if (tmp36) {
                class T {
                  constructor() {
                    hasLoadedResult = closure_6.hasLoaded(closure_0.guild_id);
                    tmp2 = !hasLoadedResult;
                    if (!hasLoadedResult) {
                      tmp2 = !closure_5.isLurking(closure_0.guild_id);
                    }
                    return tmp2;
                  }
                }
                tmp36 = 0 === archivedThreadIds.length;
              }
              if (cResult[16] === activeThreadIds.length) {
                class T {
                  constructor() {
                    hasLoadedResult = closure_6.hasLoaded(closure_0.guild_id);
                    tmp2 = !hasLoadedResult;
                    if (!hasLoadedResult) {
                      tmp2 = !closure_5.isLurking(closure_0.guild_id);
                    }
                    return tmp2;
                  }
                }
              }
              const fn2 = function w() {
                TTITrackerDefault.recordRender(activeThreadIds.length + archivedThreadIds.length, !stateFromStores);
              };
              const items1 = [activeThreadIds.length, archivedThreadIds.length, stateFromStores];
              cResult[16] = activeThreadIds.length;
              cResult[17] = stateFromStores;
              cResult[18] = archivedThreadIds.length;
              cResult[19] = fn2;
              cResult[20] = items1;
              const tmpResult14 = tmp(tmp2[23]);
            }
            const fn = function f() {
              if ("" !== closure_1) {
                ForumPostDataLoader.preloadForumThreads(closure_0);
              }
            };
            const items2 = [channel, tmp5];
            cResult[7] = channel;
            cResult[8] = tmp5;
            cResult[9] = fn;
            cResult[10] = items2;
            tmp8 = items2;
            tmp7 = fn;
            const tmpResult = tmp(tmp2[19]);
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
      let obj = require("c");
    }
  : (channel, sortOrder, tagFilter, tagSetting) => {
      _require = channel;
      const forumActiveThreadIds = require("ForumHooks").useForumActiveThreadIds({
        channel,
        sortOrder,
        tagFilter,
        tagSetting,
        shouldAutomaticallyAck: true,
      });
      const substr = forumActiveThreadIds.slice(0, require("ForumPostDataLoader").BATCH_SIZE);
      const joined = substr.join();
      const items = [channel, joined];
      const effect = activeThreadIds.useEffect(() => {
        if ("" !== joined) {
          ForumPostDataLoader.preloadForumThreads(closure_0);
        }
      }, items);
      let obj = require("ForumHooks");
      const obj2 = { channel, sortOrder, tagFilter, tagSetting, shouldAutomaticallyAck: true };
      const obj4 = activeThreadIds;
      const items1 = [ActiveThreadsStore, LurkingStore];
      activeThreadsLoading = require("initialize").useStateFromStores(items1, () => {
        const hasLoadedResult = ActiveThreadsStore.hasLoaded(channel.guild_id);
        let tmp2 = !hasLoadedResult;
        if (!hasLoadedResult) {
          tmp2 = !LurkingStore.isLurking(channel.guild_id);
        }
        return tmp2;
      });
      const obj5 = require("initialize");
      const forumSearchState = require("ForumHooks").useForumSearchState({ channelId: channel.id });
      ({ searchResults, isSearchLoading } = forumSearchState);
      const obj3 = { channelId: channel.id };
      const obj6 = require("ForumHooks");
      const automaticForumSearch = require("ForumHooks").useAutomaticForumSearch(channel, tagFilter, tagSetting);
      const obj8 = require("ForumHooks");
      const canViewArchivedPosts = require("ForumHooks").useCanViewArchivedPosts(channel);
      const obj9 = require("ForumHooks");
      const archivedThreads = require("ThreadBrowserHooks").useArchivedThreads(
        channel,
        sortOrder,
        tagFilter,
        tagSetting,
      );
      ({ loading, threadIds, canLoadMore, loadMore } = archivedThreads);
      const obj10 = require("ThreadBrowserHooks");
      const loadForumUnreadCounts = require("ForumHooks").useLoadForumUnreadCounts(
        channel,
        sortOrder,
        tagFilter,
        tagSetting,
      );
      const obj11 = require("ForumHooks");
      const gameInvitesActiveAndArchivedThreads =
        require("GameInvitesChannelUtils").useGameInvitesActiveAndArchivedThreads(
          channel,
          forumActiveThreadIds,
          threadIds,
        );
      activeThreadIds = gameInvitesActiveAndArchivedThreads.activeThreadIds;
      const archivedThreadIds = gameInvitesActiveAndArchivedThreads.archivedThreadIds;
      let isEmpty = null == searchResults && canViewArchivedPosts;
      if (isEmpty) {
        let tmp11 = activeThreadsLoading;
        if (!activeThreadsLoading) {
          tmp11 = archivedThreadsLoading;
        }
        if (!tmp11) {
          tmp11 = isSearchLoading;
        }
        isEmpty = !tmp11;
      }
      if (isEmpty) {
        isEmpty = 0 === activeThreadIds.length;
      }
      if (isEmpty) {
        isEmpty = 0 === archivedThreadIds.length;
      }
      const items2 = [activeThreadIds.length, archivedThreadIds.length, activeThreadsLoading];
      const effect1 = obj4.useEffect(() => {
        TTITrackerDefault.recordRender(activeThreadIds.length + archivedThreadIds.length, !activeThreadsLoading);
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
ReactCompilerGating = fn(558);
let closure_30 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = require("c").c(13);
      let obj = require("c");
      const application = require("GameInvitesChannelUtils").useGameInvitesChannelOfficialApplication(
        channel.channel.id,
      ).application;
      let id;
      if (application != null) {
        id = application.id;
      }
      if (cResult[0] !== id) {
        const obj3 = { applicationId: id, source: tmp(tmp2[25]).GameProfileSources.GameInvitesChannel };
        cResult[0] = id;
        cResult[1] = obj3;
        let tmp5 = obj3;
      } else {
        tmp5 = cResult[1];
      }
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
            if (cResult[4] === shouldOpenGameProfile) {
              let tmp9 = cResult[5];
            }
            if (cResult[6] !== application) {
              const obj4 = { game: application, size: tmp(tmp2[28]).GameIconSizes.SMALL };
              const tmp13 = closure_14(tmp6(tmp2[28]), obj4);
              cResult[6] = application;
              cResult[7] = tmp13;
              let tmp10 = tmp13;
              const tmp6Result = tmp6(tmp2[28]);
            } else {
              tmp10 = cResult[7];
            }
            if (cResult[8] === application.name) {
              if (cResult[9] === tmp8) {
                if (cResult[10] === tmp9) {
                  if (cResult[11] === tmp10) {
                    let tmp14 = cResult[12];
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
            const tmp16 = closure_14(tmp(tmp2[29]).PressableOpacity, obj5);
            cResult[8] = application.name;
            cResult[9] = tmp8;
            cResult[10] = tmp9;
            cResult[11] = tmp10;
            cResult[12] = tmp16;
            tmp14 = tmp16;
          }
        }
        const fn = function v() {
          let tmp = shouldOpenGameProfile;
          if (shouldOpenGameProfile) {
            tmp = null != gameId;
          }
          if (tmp) {
            const obj2 = {
              gameId,
              gameProfileModalChecks,
              source: GameProfileAnalyticUtils.GameProfileSources.GameInvitesChannel,
            };
            GameProfileActionCreatorsDefault.openGameProfileModal(obj2);
          }
        };
        cResult[2] = gameId;
        cResult[3] = tmp7;
        cResult[4] = shouldOpenGameProfile;
        cResult[5] = fn;
        tmp9 = fn;
      }
      let obj2 = require("GameInvitesChannelUtils");
      tmp6 = shouldOpenGameProfile;
    }
  : (channel) => {
      _require = undefined;
      let shouldOpenGameProfile;
      let gameId;
      const application = require("GameInvitesChannelUtils").useGameInvitesChannelOfficialApplication(
        channel.channel.id,
      ).application;
      let id;
      let obj = require("GameInvitesChannelUtils");
      const tmp3 = shouldOpenGameProfile;
      if (application != null) {
        id = application.id;
      }
      const tmp4 = shouldOpenGameProfile(gameId[26]);
      const tmp4Result = tmp4({
        applicationId: id,
        source: require("GameProfileAnalyticUtils").GameProfileSources.GameInvitesChannel,
      });
      _require = tmp4Result;
      shouldOpenGameProfile = tmp4Result.shouldOpenGameProfile;
      gameId = tmp4Result.gameId;
      let tmp8Result = null;
      if (null != application) {
        const obj3 = {
          accessibilityRole: "button",
          accessibilityLabel: application.name,
          disabled: null,
          onPress: null,
          children: null,
        };
        let tmp9 = !shouldOpenGameProfile;
        if (shouldOpenGameProfile) {
          tmp9 = null == gameId;
        }
        obj3.disabled = tmp9;
        obj3.onPress = function onPress() {
          let tmp = shouldOpenGameProfile;
          if (shouldOpenGameProfile) {
            tmp = null != gameId;
          }
          if (tmp) {
            const obj2 = {
              gameId,
              gameProfileModalChecks,
              source: GameProfileAnalyticUtils.GameProfileSources.GameInvitesChannel,
            };
            GameProfileActionCreatorsDefault.openGameProfileModal(obj2);
          }
        };
        const obj4 = { game: application, size: tmp(tmp2[28]).GameIconSizes.SMALL };
        obj3.children = closure_14(tmp3(tmp2[28]), obj4);
        tmp8Result = closure_14(tmp(tmp2[29]).PressableOpacity, obj3);
        const tmp3Result = tmp3(tmp2[28]);
      }
      return tmp8Result;
    };
const viewabilityConfig = { waitForInteraction: false, viewAreaCoveragePercentThreshold: 50, minimumViewTime: 100 };
ReactCompilerGating = fn(558);
let closure_36 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = channel(ref[15]).c(56);
      channel = channel.channel;
      const searchQuery = channel.searchQuery;
      const tmp4 = closure_24();
      ref = canLoadMore.useRef(null);
      let obj = channel(ref[15]);
      ({ sortOrder, tagFilter, tagSetting } = useForumChannelStore(channel.id));
      if (cResult[0] === channel.guild_id) {
        if (cResult[1] === channel.id) {
          let tmp7 = cResult[2];
        }
        const forumChannelSeenManager = searchQuery(tmp2[38]).useForumChannelSeenManager(tmp7);
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function o() {
            const current = ref.current;
            if (current != null) {
              current.scrollToOffset({ offset: 0, animated: false });
            }
          };
          cResult[3] = fn;
          let tmp11 = fn;
        } else {
          tmp11 = cResult[3];
        }
        if (cResult[4] !== channel.id) {
          const items = [channel.id];
          cResult[4] = channel.id;
          cResult[5] = items;
          let tmp12 = items;
        } else {
          tmp12 = cResult[5];
        }
        const effect = canLoadMore.useEffect(tmp11, tmp12);
        const tmp19 = closure_29(channel, sortOrder, tagFilter, tagSetting);
        ({ activeThreadIds, archivedThreadIds, canLoadMore } = tmp19);
        const loadMore = tmp19.loadMore;
        const archivedThreadsLoading = tmp19.archivedThreadsLoading;
        ({ activeThreadsLoading, isSearchLoading, searchResults } = tmp19);
        const tmp20 = searchQuery(tmp2[39])(channel);
        const channelName = tmp20;
        let obj4 = searchQuery(tmp2[38]);
        const canViewArchivedPosts = tmp(tmp2[19]).useCanViewArchivedPosts(channel);
        const tmpResult = tmp(tmp2[19]);
        const canSearchForumPosts = tmp(tmp2[19]).useCanSearchForumPosts(channel);
        const tmpResult3 = tmp(tmp2[19]);
        const clientThemesOverride = tmp(tmp2[16]).useClientThemesOverride();
        if (cResult[6] === archivedThreadsLoading) {
          if (cResult[7] === canLoadMore) {
            if (cResult[8] === canViewArchivedPosts) {
              if (cResult[9] === loadMore) {
                if (cResult[10] === searchResults) {
                  let tmp24 = cResult[11];
                }
                if (cResult[12] === archivedThreadsLoading) {
                  if (cResult[13] === canLoadMore) {
                    if (cResult[14] === canViewArchivedPosts) {
                      if (cResult[15] === loadMore) {
                        if (cResult[16] === searchResults) {
                          let tmp25 = cResult[17];
                        }
                        if (cResult[18] === activeThreadIds) {
                          if (cResult[19] === activeThreadsLoading) {
                            if (cResult[20] === archivedThreadIds) {
                              if (cResult[21] === archivedThreadsLoading) {
                                if (cResult[22] === canSearchForumPosts) {
                                  if (cResult[23] === canViewArchivedPosts) {
                                    if (cResult[24] === isSearchLoading) {
                                      if (cResult[25] === searchResults) {
                                        let tmp26 = cResult[26];
                                      }
                                      if (cResult[27] === tmp20) {
                                        if (cResult[28] === searchQuery) {
                                          let length;
                                          if (searchResults != null) {
                                            length = searchResults.length;
                                          }
                                          if (cResult[29] === length) {
                                            let tmp62 = cResult[30];
                                          }
                                          if (tmp19.isEmpty) {
                                            let str2 = tmp20;
                                            if (tmp20 == null) {
                                              str2 = "";
                                            }
                                            if (cResult[31] === str2) {
                                              if (cResult[32] === tagFilter) {
                                                let tmp91 = cResult[33];
                                              }
                                              return tmp91;
                                            }
                                            let obj3 = { topViewHeight: 92, channelName: str2, tagFilter };
                                            const tmp95 = closure_14(searchQuery(ref[42]), obj3);
                                            cResult[31] = str2;
                                            cResult[32] = tagFilter;
                                            cResult[33] = tmp95;
                                            tmp91 = tmp95;
                                          } else {
                                            if (cResult[34] === tmp4.list) {
                                              if (cResult[35] === clientThemesOverride) {
                                                let tmp64 = cResult[36];
                                              }
                                              let num39 = 0;
                                              if (0 !== activeThreadIds.length) {
                                                num39 = searchQuery(ref[12]).space.PX_8;
                                              }
                                              const sum = channel.insets.bottom + searchQuery(ref[12]).space.PX_16;
                                              if (cResult[37] === num39) {
                                                if (cResult[38] === sum) {
                                                  let tmp70 = cResult[39];
                                                }
                                                if (cResult[40] === channel.guild_id) {
                                                  if (cResult[41] === channel.id) {
                                                    let tmp71 = cResult[42];
                                                  }
                                                  if (cResult[43] === tmp26) {
                                                    if (cResult[44] === tmp24) {
                                                      if (cResult[45] === tmp25) {
                                                        if (cResult[46] === tmp62) {
                                                          if (cResult[47] === tmp70) {
                                                            if (cResult[48] === tmp71) {
                                                              let tmp72 = cResult[49];
                                                            }
                                                            if (cResult[50] === tmp72) {
                                                              if (cResult[51] === tmp64) {
                                                                let tmp80 = cResult[52];
                                                              }
                                                              const _Symbol2 = Symbol;
                                                              if (
                                                                cResult[53] === Symbol.for("react.memo_cache_sentinel")
                                                              ) {
                                                                const tmp86 = closure_14(tmp67(tmp68[45]), {
                                                                  absolute: true,
                                                                  mix: true,
                                                                });
                                                                cResult[53] = tmp86;
                                                                let tmp84 = tmp86;
                                                              } else {
                                                                tmp84 = cResult[53];
                                                              }
                                                              if (cResult[54] !== tmp80) {
                                                                const obj5 = { children: null };
                                                                const items1 = [tmp84, tmp80];
                                                                obj5.children = items1;
                                                                const tmp90 = closure_16(closure_15, obj5);
                                                                cResult[54] = tmp80;
                                                                cResult[55] = tmp90;
                                                                let tmp87 = tmp90;
                                                              } else {
                                                                tmp87 = cResult[55];
                                                              }
                                                              return tmp87;
                                                            }
                                                            const obj6 = { style: tmp64, children: tmp72 };
                                                            const tmp83 = closure_14(loadMore, obj6);
                                                            cResult[50] = tmp72;
                                                            cResult[51] = tmp64;
                                                            cResult[52] = tmp83;
                                                            tmp80 = tmp83;
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                  const obj7 = {
                                                    ref,
                                                    contentContainerStyle: tmp70,
                                                    getItemType: getForumItemType,
                                                    keyExtractor: forumKeyExtractor,
                                                    renderItem: tmp62,
                                                    data: tmp26,
                                                    onScroll: tmp25,
                                                    onScrollBeginDrag: tmp71,
                                                    onEndReached: tmp24,
                                                    onViewableItemsChanged: onForumViewableItemsChanged,
                                                    viewabilityConfig,
                                                  };
                                                  const tmp79 = closure_14(channel(tmp68[44]).FlashList, obj7);
                                                  cResult[43] = tmp26;
                                                  cResult[44] = tmp24;
                                                  cResult[45] = tmp25;
                                                  cResult[46] = tmp62;
                                                  cResult[47] = tmp70;
                                                  cResult[48] = tmp71;
                                                  cResult[49] = tmp79;
                                                  tmp72 = tmp79;
                                                }
                                                function he() {
                                                  return tracking_Tracking.trackForumScrolled({
                                                    guildId: channel.guild_id,
                                                    channelId: channel.id,
                                                  });
                                                }
                                                cResult[40] = channel.guild_id;
                                                cResult[41] = channel.id;
                                                cResult[42] = he;
                                                tmp71 = he;
                                              }
                                              const obj8 = { paddingTop: num39, paddingBottom: sum };
                                              cResult[37] = num39;
                                              cResult[38] = sum;
                                              cResult[39] = obj8;
                                              tmp70 = obj8;
                                              tmp67 = searchQuery;
                                            }
                                            const items2 = [tmp4.list, clientThemesOverride];
                                            cResult[34] = tmp4.list;
                                            cResult[35] = clientThemesOverride;
                                            cResult[36] = items2;
                                            tmp64 = items2;
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
                                        item = item.item;
                                        if (item === archived_section) {
                                          let tmp15Result = state(closure_25, {});
                                        } else if (item === search_section) {
                                          let num;
                                          if (searchResults != null) {
                                            num = searchResults.length;
                                          }
                                          if (num == null) {
                                            num = 0;
                                          }
                                          const obj2 = { numPosts: num, searchQuery: null };
                                          let str = searchQuery;
                                          if (searchQuery == null) {
                                            str = "";
                                          }
                                          obj2.searchQuery = str;
                                          tmp15Result = state(closure_26, obj2);
                                        } else if (item === loading_section) {
                                          tmp15Result = state(ForumPostPlaceholderDefault, {});
                                        } else if (item === missing_permission_archived_threads) {
                                          const obj3 = { channelName };
                                          tmp15Result = state(closure_27, obj3);
                                        } else if (item === missing_permission_search) {
                                          const obj4 = { channelName };
                                          tmp15Result = state(closure_28, obj4);
                                        } else {
                                          const obj = { threadId: item };
                                          tmp15Result = state(ForumPostDefault, obj);
                                        }
                                        return tmp15Result;
                                      }
                                      cResult[29] = length1;
                                      cResult[30] = ae;
                                      tmp62 = ae;
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
                            HermesBuiltin.arraySpread(searchResults, 0);
                            HermesBuiltin.apply(items4, items3);
                          } else {
                            push3(missing_permission_search);
                          }
                        } else if (!activeThreadsLoading) {
                          const push = items3.push;
                          const items5 = [];
                          HermesBuiltin.arraySpread(activeThreadIds, 0);
                          HermesBuiltin.apply(items5, items3);
                          if (canViewArchivedPosts) {
                            if (tmp38) {
                              items3.push(archived_section);
                              const push2 = items3.push;
                              const items6 = [];
                              HermesBuiltin.arraySpread(archivedThreadIds, 0);
                              HermesBuiltin.apply(items6, items3);
                            }
                            tmp38 = null != archivedThreadIds && archivedThreadIds.length > 0;
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
                    tmp =
                      nativeEvent.contentOffset.y + nativeEvent.layoutMeasurement.height >
                      nativeEvent.contentSize.height - 976;
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
            tmp = null == searchResults && closure_8;
            if (tmp) {
              tmp2 = archivedThreadsLoading;
              tmp = !archivedThreadsLoading;
            }
            if (tmp) {
              tmp = canLoadMore;
            }
            if (tmp) {
              tmp3 = loadMore;
              tmp4 = loadMore();
            }
            return;
          }
        }
        cResult[6] = archivedThreadsLoading;
        cResult[7] = canLoadMore;
        cResult[8] = canViewArchivedPosts;
        cResult[9] = loadMore;
        cResult[10] = searchResults;
        cResult[11] = B;
        tmp24 = B;
        const tmpResult4 = tmp(tmp2[16]);
      }
      const obj9 = { guildId: channel.guild_id, channelId: channel.id };
      cResult[0] = channel.guild_id;
      cResult[1] = channel.id;
      cResult[2] = obj9;
      tmp7 = obj9;
      const tmp6 = useForumChannelStore(channel.id);
    }
  : (channel) => {
      channel = channel.channel;
      const searchQuery = channel.searchQuery;
      let activeThreadIds;
      let searchResults;
      const ref = activeThreadIds.useRef(null);
      const tmp3 = searchResults(channel.id);
      ({ sortOrder, tagFilter } = tmp3);
      let tmp = closure_24();
      const forumChannelSeenManager = searchQuery(ref[38]).useForumChannelSeenManager({
        guildId: channel.guild_id,
        channelId: channel.id,
      });
      let items = [channel.id];
      const effect = activeThreadIds.useEffect(() => {
        const current = ref.current;
        if (current != null) {
          current.scrollToOffset({ offset: 0, animated: false });
        }
      }, items);
      const tmp8 = closure_29(channel, sortOrder, tagFilter, tmp3.tagSetting);
      activeThreadIds = tmp8.activeThreadIds;
      const archivedThreadIds = tmp8.archivedThreadIds;
      const canLoadMore = tmp8.canLoadMore;
      const loadMore = tmp8.loadMore;
      const archivedThreadsLoading = tmp8.archivedThreadsLoading;
      const activeThreadsLoading = tmp8.activeThreadsLoading;
      const isSearchLoading = tmp8.isSearchLoading;
      searchResults = tmp8.searchResults;
      const tmp9 = searchQuery(ref[39])(channel);
      const channelName = tmp9;
      let obj = searchQuery(ref[38]);
      let obj2 = { guildId: channel.guild_id, channelId: channel.id };
      const tmp10 = channel;
      const canViewArchivedPosts = channel(ref[19]).useCanViewArchivedPosts(channel);
      let obj3 = channel(ref[19]);
      const canSearchForumPosts = channel(ref[19]).useCanSearchForumPosts(channel);
      let obj4 = channel(ref[19]);
      let items1 = [archivedThreadsLoading, canLoadMore, canViewArchivedPosts, loadMore, searchResults];
      const clientThemesOverride = channel(ref[16]).useClientThemesOverride();
      let items2 = [976, archivedThreadsLoading, canLoadMore, canViewArchivedPosts, loadMore, searchResults];
      const callback = activeThreadIds.useCallback(() => {
        let tmp = null == searchResults && canViewArchivedPosts;
        if (tmp) {
          tmp = !archivedThreadsLoading;
        }
        if (tmp) {
          tmp = canLoadMore;
        }
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
          tmp =
            nativeEvent.contentOffset.y + nativeEvent.layoutMeasurement.height > nativeEvent.contentSize.height - 976;
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
            HermesBuiltin.arraySpread(searchResults, 0);
            HermesBuiltin.apply(items1, items);
          } else {
            push3(missing_permission_search);
          }
        } else if (!activeThreadsLoading) {
          const push = items.push;
          const items2 = [];
          HermesBuiltin.arraySpread(activeThreadIds, 0);
          HermesBuiltin.apply(items2, items);
          if (canViewArchivedPosts) {
            if (tmp14) {
              items.push(archived_section);
              const push2 = items.push;
              const items3 = [];
              HermesBuiltin.arraySpread(archivedThreadIds, 0);
              HermesBuiltin.apply(items3, items);
            }
            tmp14 = null != archivedThreadIds && archivedThreadIds.length > 0;
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
      if (searchResults != null) {
        length = searchResults.length;
      }
      const items4 = [length, searchQuery, tmp9];
      if (tmp8.isEmpty) {
        let str = tmp9;
        if (tmp9 == null) {
          str = "";
        }
        const obj6 = { topViewHeight: 92, channelName: str, tagFilter };
        return closure_14(tmp4(tmp5[42]), obj6);
      } else {
        const obj7 = { style: null, children: null };
        const items5 = [tmp.list, clientThemesOverride];
        obj7.style = items5;
        const obj8 = {
          ref,
          contentContainerStyle: null,
          getItemType: null,
          keyExtractor: null,
          renderItem: null,
          data: null,
          onScroll: null,
          onScrollBeginDrag: null,
          onEndReached: null,
          onViewableItemsChanged: null,
          viewabilityConfig: null,
        };
        let num = 0;
        if (0 !== activeThreadIds.length) {
          num = tmp4(tmp5[12]).space.PX_8;
        }
        const obj9 = { paddingTop: num, paddingBottom: channel.insets.bottom + tmp4(tmp5[12]).space.PX_16 };
        obj8.contentContainerStyle = obj9;
        obj8.getItemType = getForumItemType;
        obj8.keyExtractor = forumKeyExtractor;
        obj8.renderItem = tmp18;
        obj8.data = memo;
        obj8.onScroll = callback1;
        obj8.onScrollBeginDrag = function onScrollBeginDrag() {
          return tracking_Tracking.trackForumScrolled({ guildId: channel.guild_id, channelId: channel.id });
        };
        obj8.onEndReached = callback;
        obj8.onViewableItemsChanged = onForumViewableItemsChanged;
        obj8.viewabilityConfig = viewabilityConfig;
        obj7.children = closure_14(tmp10(tmp5[44]).FlashList, obj8);
        const obj10 = { children: null };
        const items6 = [closure_14(tmp4(tmp5[45]), { absolute: true, mix: true }), closure_14(archivedThreadIds, obj7)];
        obj10.children = items6;
        return closure_16(closure_15, obj10);
      }
      const obj5 = channel(ref[16]);
    };
ReactCompilerGating = fn(558);
let obj5 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  alignItems: "center",
  justifyContent: "center",
  height: 48,
  borderRadius: nativeDefault.radii.xs,
};
let obj6 = {};
size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/ForumChannel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = channel(analyticsLocations[15]).c(68);
      channel = channel.channel;
      closure_24();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildVerificationStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel.guild_id) {
        const fn = function o() {
          return GuildVerificationStore.canChatInGuild(channel.guild_id);
        };
        cResult[1] = channel.guild_id;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      let obj = channel(analyticsLocations[15]);
      const stateFromStores = channel(analyticsLocations[21]).useStateFromStores(first, tmp7);
      let tmpResult = channel(analyticsLocations[21]);
      const canStartThread = channel(analyticsLocations[48]).useCanStartThread(channel);
      let tmp10 = null != channel.topic;
      if (tmp10) {
        tmp10 = 0 !== channel.topic.length;
      }
      importDefault = tmp10;
      const tmp11 = importDefault;
      const tmpResult5 = channel(analyticsLocations[48]);
      analyticsLocations = require("useAnalyticsLocations")(
        require("AnalyticsLocation").FORUM_CHANNEL,
      ).analyticsLocations;
      if (cResult[3] !== channel.id) {
        let obj2 = { channelId: channel.id };
        cResult[3] = channel.id;
        cResult[4] = obj2;
        let tmp13 = obj2;
      } else {
        tmp13 = cResult[4];
      }
      const tmp12 = require("useAnalyticsLocations");
      const searchQuery = channel(analyticsLocations[19]).useForumSearchState(tmp13).searchQuery;
      const tmpResult6 = channel(analyticsLocations[19]);
      const showMemberVerificationGate = channel(analyticsLocations[51]).useShowMemberVerificationGate(
        channel.guild_id,
      );
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [DraftStore];
        cResult[5] = items1;
        let tmp15 = items1;
      } else {
        tmp15 = cResult[5];
      }
      if (cResult[6] !== channel.id) {
        class L {
          constructor() {
            return closure_8.getThreadSettings(channel.id);
          }
        }
        const items2 = [channel.id];
        cResult[6] = channel.id;
        cResult[7] = L;
        cResult[8] = items2;
        let tmp18 = items2;
      } else {
        class L {
          constructor() {
            return closure_8.getThreadSettings(channel.id);
          }
        }
        tmp18 = cResult[8];
      }
      const tmpResult7 = channel(analyticsLocations[51]);
      const stateFromStores1 = channel(analyticsLocations[21]).useStateFromStores(tmp15, L, tmp18);
      tmp11(analyticsLocations[52])(channel);
      if (cResult[9] !== channel.id) {
        class M {
          constructor() {
            return () => {
              if (null != id.id) {
                closure_1(analyticsLocations[53]).clearForumSearch(tmp.id);
                const obj = closure_1(analyticsLocations[53]);
              }
            };
          }
        }
        const items3 = [channel.id];
        cResult[9] = channel.id;
        cResult[10] = M;
        cResult[11] = items3;
        let tmp22 = items3;
      } else {
        class M {
          constructor() {
            return () => {
              if (null != id.id) {
                closure_1(analyticsLocations[53]).clearForumSearch(tmp.id);
                const obj = closure_1(analyticsLocations[53]);
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
                closure_1(analyticsLocations[53]).clearForumSearch(tmp.id);
                const obj = closure_1(analyticsLocations[53]);
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
                closure_1(analyticsLocations[53]).clearForumSearch(tmp.id);
                const obj = closure_1(analyticsLocations[53]);
              }
            };
          }
        }
      }
      class R {
        constructor(arg0) {
          tmp = channel;
          if (channel.isGameInvitesChannel()) {
            tmp18 = closure_0;
            tmp19 = closure_2;
            obj6 = closure_0(closure_2[54]);
            obj1 = { parentChannelId: null, analyticsLocations: null };
            obj1.parentChannelId = tmp.id;
            tmp20 = analyticsLocations;
            obj1.analyticsLocations = analyticsLocations;
            result = obj6.openCreateGameInvitePostModal(obj1);
          } else {
            tmp3 = closure_2;
            tmp2 = closure_1;
            obj = closure_1(closure_2[55]);
            changeThreadSettingsResult = obj.changeThreadSettings(tmp.id, { isPrivate: false });
            tmp5 = closure_5;
            tmp6 = null;
            name = undefined;
            if (closure_5 != null) {
              name = tmp5.name;
            }
            tmp8 = null != name;
            if (tmp8) {
              length = undefined;
              if (tmp5 != null) {
                str = tmp5.name;
                if (str != null) {
                  trimmed = str.trim();
                  if (trimmed != null) {
                    length = trimmed.length;
                  }
                }
              }
              num = 0;
              tmp8 = 0 !== length;
            }
            if (!tmp8) {
              tmp10 = closure_2;
              tmp2Result = tmp2(closure_2[55]);
              str2 = searchQuery;
              trimmed1 = undefined;
              if (null != searchQuery) {
                num2 = 0;
                if (str2.trim().length > 0) {
                  trimmed1 = str2.trim();
                }
              }
              obj8 = { name: null };
              obj8.name = trimmed1;
              changeThreadSettingsResult1 = tmp2Result.changeThreadSettings(tmp.id, obj8);
            }
            tmp13 = channel;
            tmp14 = closure_0;
            tmp15 = closure_2;
            obj4 = closure_0(closure_2[56]);
            obj9 = { guildId: null, parentChannelId: null, analyticsLocationObject: null, analyticsLocations: null };
            ({ guild_id: obj5.guildId, id: obj5.parentChannelId } = tmp);
            obj9.analyticsLocationObject = channel;
            tmp16 = analyticsLocations;
            obj9.analyticsLocations = analyticsLocations;
            result1 = obj4.openCreateForumPostModal(obj9);
          }
          return;
        }
      }
      cResult[15] = undefined;
      cResult[16] = R;
      const tmpResult8 = channel(analyticsLocations[21]);
    }
  : (channel) => {
      channel = channel.channel;
      importDefault = undefined;
      let analyticsLocations;
      let searchQuery;
      let showMemberVerificationGate;
      let stateFromStores1;
      let callback;
      const tmp = closure_24();
      const items = [GuildVerificationStore];
      const stateFromStores = channel(analyticsLocations[21]).useStateFromStores(items, () =>
        GuildVerificationStore.canChatInGuild(channel.guild_id),
      );
      let obj = channel(analyticsLocations[21]);
      const canStartThread = channel(analyticsLocations[48]).useCanStartThread(channel);
      let tmp6 = null != channel.topic;
      if (tmp6) {
        tmp6 = 0 !== channel.topic.length;
      }
      importDefault = tmp6;
      let obj2 = channel(analyticsLocations[48]);
      analyticsLocations = require("useAnalyticsLocations")(
        require("AnalyticsLocation").FORUM_CHANNEL,
      ).analyticsLocations;
      let tmp8 = require("useAnalyticsLocations");
      searchQuery = channel(analyticsLocations[19]).useForumSearchState({ channelId: channel.id }).searchQuery;
      let obj3 = { channelId: channel.id };
      let tmp2Result = channel(analyticsLocations[19]);
      showMemberVerificationGate = channel(analyticsLocations[51]).useShowMemberVerificationGate(channel.guild_id);
      const tmp2Result4 = channel(analyticsLocations[51]);
      const items1 = [DraftStore];
      const items2 = [channel.id];
      stateFromStores1 = channel(analyticsLocations[21]).useStateFromStores(
        items1,
        () => DraftStore.getThreadSettings(channel.id),
        items2,
      );
      const items3 = [channel.id];
      const tmp2Result5 = channel(analyticsLocations[21]);
      const effect = searchQuery.useEffect(
        () => () => {
          if (null != id.id) {
            closure_1(analyticsLocations[53]).clearForumSearch(tmp.id);
            const obj = closure_1(analyticsLocations[53]);
          }
        },
        items3,
      );
      const items4 = [channel, analyticsLocations, searchQuery, stateFromStores1];
      callback = searchQuery.useCallback((analyticsLocationObject) => {
        if (channel.isGameInvitesChannel()) {
          const obj2 = { parentChannelId: channel.id, analyticsLocations };
          const result = CreateGameInvitePostModalActionCreators.openCreateGameInvitePostModal(obj2);
        } else {
          DraftActionCreatorsDefault.changeThreadSettings(channel.id, { isPrivate: false });
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
            if (null != searchQuery) {
              if (searchQuery.trim().length > 0) {
                trimmed1 = searchQuery.trim();
              }
            }
            const obj3 = { name: trimmed1 };
            DraftActionCreatorsDefault.changeThreadSettings(channel.id, obj3);
            const tmp2Result = DraftActionCreatorsDefault;
          }
          const obj7 = {
            guildId: null,
            parentChannelId: null,
            analyticsLocationObject: null,
            analyticsLocations: null,
          };
          ({ guild_id: obj5.guildId, id: obj5.parentChannelId } = channel);
          obj7.analyticsLocationObject = analyticsLocationObject;
          obj7.analyticsLocations = analyticsLocations;
          const result1 = ForumComposerModalActionCreators.openCreateForumPostModal(obj7);
        }
      }, items4);
      const items5 = [channel, showMemberVerificationGate, tmp6, callback];
      let tmp15 = !stateFromStores;
      const callback1 = searchQuery.useCallback(() => {
        function startCreateForumPostFlow() {
          if (closure_1_1) {
            if (!obj.hasSeen(id.id)) {
              const obj3 = {
                channel: id,
                onPress() {
                  return closure_1_6({
                    page: constants2.GUILD_CHANNEL,
                    section: constants3.FORUM_CHANNEL_GUIDELINES,
                    object: constants.BUTTON_CTA,
                  });
                },
              };
              const result = channel(analyticsLocations[60]).openForumGuidelinesActionSheet(obj3);
              const obj2 = channel(analyticsLocations[60]);
            }
            obj = closure_1(analyticsLocations[57]);
          }
          const result1 = channel(analyticsLocations[58]).triggerHapticFeedback(
            closure_1(analyticsLocations[59]).IMPACT_LIGHT,
          );
          callback({
            page: constants2.GUILD_CHANNEL,
            section: constants3.FORUM_CHANNEL_FOOTER,
            object: constants.BUTTON_CTA,
          });
          const obj4 = channel(analyticsLocations[58]);
          const obj5 = {
            page: constants2.GUILD_CHANNEL,
            section: constants3.FORUM_CHANNEL_FOOTER,
            object: constants.BUTTON_CTA,
          };
        }
        let result = tracking_Tracking.trackForumCreateNewPostClick({
          guildId: channel.guild_id,
          channelId: channel.id,
        });
        if (showMemberVerificationGate) {
          let result1 = MemberVerificationModalActionCreators.openMemberVerificationModal(
            channel.guild_id,
            startCreateForumPostFlow,
          );
          const tmpResult = MemberVerificationModalActionCreators;
        } else {
          const result2 = startCreateForumPostFlow();
        }
        let obj2 = { guildId: channel.guild_id, channelId: channel.id };
      }, items5);
      if (stateFromStores) {
        let tmp16 = !canStartThread;
        if (!canStartThread) {
          tmp16 = !showMemberVerificationGate;
        }
        tmp15 = tmp16;
      }
      const insets = tmp7(tmp3[62])({ includeKeyboardHeight: true }).insets;
      const tmp11 = require("useShowChannelOptInNotice")(channel);
      let obj4 = { style: tmp.background, children: null };
      let tmp20 = null;
      const clientThemesOverride = channel(analyticsLocations[16]).useClientThemesOverride(tmp.noHeight);
      if (tmp11) {
        let obj5 = { channel, ctaProps: { variant: "secondary" }, topBorder: true };
        tmp20 = closure_14(tmp2(tmp3[63]).OptInChannelBanner, obj5);
      }
      const items6 = [tmp20, , , , ,];
      let obj6 = { style: tmp.headerRow, children: null };
      let obj7 = { style: tmp.headerLeftContainer, children: null };
      let isGameInvitesChannelResult = channel.isGameInvitesChannel();
      if (isGameInvitesChannelResult) {
        const obj8 = { channel };
        isGameInvitesChannelResult = closure_14(closure_30, obj8);
      }
      const items7 = [isGameInvitesChannelResult, closure_14(SortAndViewOptions, { channel })];
      obj7.children = items7;
      const items8 = [closure_16(showMemberVerificationGate, obj7)];
      let tmp25Result = channel.availableTags.length > 0;
      if (tmp25Result) {
        const obj9 = { channel };
        tmp25Result = closure_14(TagFilter, obj9);
      }
      items8[1] = tmp25Result;
      obj6.children = items8;
      items6[1] = closure_16(showMemberVerificationGate, obj6);
      const obj10 = { style: null };
      const items9 = [tmp.headerDivider, clientThemesOverride];
      obj10.style = items9;
      items6[2] = closure_14(showMemberVerificationGate, obj10);
      const tmp2Result6 = channel(analyticsLocations[16]);
      items6[3] = closure_14(showMemberVerificationGate, {
        style: tmp.container,
        children: closure_14(closure_36, { channel, insets, searchQuery }),
      });
      const obj12 = {
        accessibilityLabel: null,
        icon: null,
        disabled: null,
        positionBottom: null,
        onPress: null,
        onPressDisabled: null,
        accessibilityHint: null,
      };
      const intl = tmp2(tmp3[17]).intl;
      obj12.accessibilityLabel = intl.string(channel(analyticsLocations[17]).t.TyAuoT);
      obj12.icon = require("../../../../_runtime/metro/12442__.js");
      obj12.disabled = tmp15;
      obj12.positionBottom = insets.bottom + require("native").space.PX_16;
      obj12.onPress = callback1;
      obj12.onPressDisabled = onCreatePostWithoutPermission;
      let stringResult;
      if (tmp15) {
        const intl2 = tmp2(tmp3[17]).intl;
        stringResult = intl2.string(tmp2(tmp3[17]).t.iyzwnD);
      }
      obj12.accessibilityHint = stringResult;
      items6[4] = closure_14(channel(analyticsLocations[64]).FloatingActionButton, obj12);
      let tmp25Result2 = null;
      if (null != channel.guild_id) {
        const obj13 = { channel };
        tmp25Result2 = closure_14(tmp2(tmp3[66]).MemberActionChatInputBannerGuarded, obj13);
      }
      items6[5] = tmp25Result2;
      obj4.children = items6;
      return closure_16(showMemberVerificationGate, obj4);
    };
