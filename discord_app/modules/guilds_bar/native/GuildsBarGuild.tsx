// === Module 18724: GuildsBarGuild ===

// Module 18724 (GuildsBarGuild)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import GuildIcon from "GuildIcon" /* 7020 */;
import getGuildsBarGuildMenuItemsDefault from "getGuildsBarGuildMenuItems" /* 18696 */;
import GuildsBarAnimatedItemWrapperDefault from "GuildsBarAnimatedItemWrapper" /* 18704 */;
import isGuildsBarGuildDataEqualDefault from "isGuildsBarGuildDataEqual" /* 18736 */;
import useGuildsBarBadgesDefault from "useGuildsBarBadges" /* 18737 */;
import usePreloadedGuildAssetDefault from "usePreloadedGuildAsset" /* 18743 */;
import getGuildsBarGuildAccessibilityActionsDefault from "getGuildsBarGuildAccessibilityActions" /* 18744 */;
import noop from "module_19" /* 19 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 6829 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6941 */;
import GuildStore from "GuildStore" /* 5011 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5171 */;
import SortedGuildStore from "SortedGuildStore" /* 6827 */;

const require = globalThis.__r;

require = fn;
const GuildRecord = fn(5007);
({ getGuildIconSource: closure_4, getGuildIconURL: hasOwnProperty } = GuildRecord);
const useItemDragState = fn(18695).useItemDragState;
const TRANSITION_PHYSICS = fn(18692).TRANSITION_PHYSICS;
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsxProd = fn(21);
({ Fragment: closure_14, jsxs: closure_15, jsx: closure_16 } = jsxProd);
const createStyles = fn(5140);
let obj = { guildIcon: null };
let size = { width: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE, height: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE };
obj.guildIcon = size;
let closure_17 = createStyles.createStyles(obj);
let closure_18 = { code: "(function GuildsBarGuildTsx1(values){let[dragDropInProgress,sharedId,guildId,isDragTarget,withSpring,TRANSITION_PHYSICS]=this.__closure;var _guildId;const shouldAnimate=dragDropInProgress.get()&&sharedId.get()===guildId&&!isDragTarget;sharedId.set((_guildId=guildId)!==null&&_guildId!==void 0?_guildId:null);return{animations:{originY:shouldAnimate?withSpring(values.targetOriginY,TRANSITION_PHYSICS,'animate-always'):values.targetOriginY,height:shouldAnimate?withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always'):values.targetHeight},initialValues:{originY:values.currentOriginY,height:values.currentHeight}};})" };
size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarGuild.tsx");

export default noop.memo(function GuildsBarGuild(guildId) {
  guildId = guildId.guildId;
  _require = guildId;
  let flag = guildId.isDragPreview;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = guildId.hideExpandedChildren;
  if (flag2 === undefined) {
    flag2 = false;
  }
  noop = undefined;
  let mentionCount;
  let unread;
  let guildName;
  let mediaState;
  let stateFromStores1;
  const tmp = closure_17();
  const token = require("useToken").useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
  let obj = require("useToken");
  let tmp2 = _require;
  let obj2 = require("GuildsBarAnimatedItemWrapper");
  const enableHome = noop.useContext(require("useHomeDrawerGesture").HomeDrawerStateContext).enableHome;
  const guildsBarAnimatedWrapperStyles = require("GuildsBarAnimatedItemWrapper").useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true });
  const drawerOpen = require("useDrawerState").useDrawerOpen(enableHome);
  noop = noop.useRef(require("HomeDrawerGuildRow").HomeDrawerActiveHook.NONE);
  const callback = noop.useCallback((current) => {
    c3.current = current;
  }, []);
  let obj3 = require("useDrawerState");
  items = [mediaState, mentionCount, unread];
  const items1 = [guildId];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => ({ selected: SelectedGuildStore.getGuildId() === c0, isUnavailable: GuildAvailabilityStore.isUnavailable(c0), unread: GuildReadStateStore.hasUnread(c0), mentionCount: GuildReadStateStore.getMentionCount(c0), isMentionLowImportance: GuildReadStateStore.getIsMentionLowImportance(c0) }), items1);
  const selected = stateFromStoresObject.selected;
  const isUnavailable = stateFromStoresObject.isUnavailable;
  mentionCount = stateFromStoresObject.mentionCount;
  unread = stateFromStoresObject.unread;
  const obj4 = require("initialize");
  const items2 = [guildName];
  const items3 = [guildId, token, selected];
  const stateFromStores = require("initialize").useStateFromStores(items2, () => {
    guild = GuildStore.getGuild(c0);
    let tmp2;
    if (null != guild) {
      tmp2 = hasOwnProperty(guild, c1, c4);
    }
    let name;
    if (guild != null) {
      name = guild.name;
    }
    const obj = { guildName: name, icon: tmp2, asset: null };
    let tmp7;
    if (null != tmp2) {
      if (null != guild) {
        tmp7 = React4(guild, GuildIcon.ImageSizes[GuildIcon.GuildIconSizes.LARGE], c4);
      }
    }
    obj.asset = tmp7;
    return obj;
  }, items3, isGuildsBarGuildDataEqualDefault);
  guildName = stateFromStores.guildName;
  ({ asset, icon } = stateFromStores);
  const tmp12 = useGuildsBarBadgesDefault(guildId, mentionCount, stateFromStoresObject.isMentionLowImportance);
  mediaState = tmp12.mediaState;
  const items4 = [guildId, isUnavailable, drawerOpen];
  ({ badgeTopRight, badgeBottomRight, cutouts } = tmp12);
  const items5 = [guildName, mentionCount, unread, mediaState];
  const memo = noop.useMemo(() => ({
    onPress() {
      if (null != guildName.getGuild(_undefined)) {
        if (!closure_1_5) {
          if (dependencyMap) {
            const guildFolders = stateFromStores1.getGuildFolders();
            const findIndexResult = guildFolders.findIndex((guildIds) => {
              guildIds = guildIds.guildIds;
              return guildIds.includes(closure_1_0);
            });
            if (findIndexResult > -1) {
              const obj = { guild_id: _undefined, index: findIndexResult, active_hook: ref.current };
              c1(1252).track(constants.HOME_DRAWER_GUILD_CLICKED, obj);
              const obj2 = c1(1252);
            }
          }
          c1(18719)(_undefined);
        }
      }
      const obj3 = { title: null, body: null };
      const intl = c0(1113).intl;
      obj3.title = intl.string(c0(1113).t.R0RpRX);
      const intl2 = c0(1113).intl;
      obj3.body = intl2.string(c0(1113).t.m9gRVN);
      return c1(6090).show(obj3);
    }
  }), items4);
  const memo1 = noop.useMemo(() => {
    if (null != mentionCount) {
      if (mentionCount > 0) {
        const intl3 = util.intl;
        const obj2 = { guildName, mentions: mentionCount };
        let formatToPlainStringResult = intl3.formatToPlainString(util.t["/uzRss"], obj2);
      }
      items = [];
      if (mediaState.activeEvent) {
        const intl4 = util.intl;
        items.push(intl4.string(util.t.dHvJ2p));
      }
      if (mediaState.liveStage) {
        const intl5 = util.intl;
        items.push(intl5.string(util.t.OO7ndG));
      }
      if (mediaState.screenshare) {
        const intl6 = util.intl;
        items.push(intl6.string(util.t.wsHMZ7));
      }
      if (mediaState.video) {
        const intl7 = util.intl;
        items.push(intl7.string(util.t.BrLCS0));
      }
      if (mediaState.audio) {
        const intl8 = util.intl;
        items.push(intl8.string(util.t.jPBhKy));
      }
      if (mediaState.activity) {
        const intl9 = util.intl;
        items.push(intl9.string(util.t.Y3Gii5));
      }
      let combined = formatToPlainStringResult;
      if (items.length > 0) {
        const _HermesInternal = HermesInternal;
        combined = "" + formatToPlainStringResult + ", " + items.join(" ");
      }
      return combined;
    }
    if (true === unread) {
      const intl2 = util.intl;
      const obj3 = { guildName };
      formatToPlainStringResult = intl2.formatToPlainString(util.t.lzqe42, obj3);
    } else {
      const intl = util.intl;
      const obj = { guildName, mentions: mentionCount };
      formatToPlainStringResult = intl.formatToPlainString(util.t["/uzRss"], obj);
    }
  }, items5);
  const tmp15 = usePreloadedGuildAssetDefault(guildId, icon, asset);
  const obj5 = require("initialize");
  ({ isDragTarget, dragDropInProgress, dragState, overState, itemSize } = useItemDragState(guildId, flag));
  const tmp16 = useItemDragState(guildId, flag);
  const items6 = [stateFromStores1];
  stateFromStores1 = require("initialize").useStateFromStores(items6, () => stateFromStores1.getGuildsTree().version);
  const items7 = [guildId, stateFromStores1];
  const memo2 = noop.useMemo(() => {
    const arr = getGuildsBarGuildMenuItemsDefault(c0, stateFromStores1);
    items = [...arr.map((label) => ({ name: label.label, label: label.label, action: label.action })), ...getGuildsBarGuildAccessibilityActionsDefault(c0, stateFromStores1).map((name) => ({ name: name.name, label: name.label, action: name.action }))];
    const arr2 = getGuildsBarGuildAccessibilityActionsDefault(c0, stateFromStores1);
    return {
      accessibilityActions: items.map((name) => ({ name: name.name, label: name.label })),
      onAccessibilityAction(arg0) {
        const nativeEvent = arg0;
        const found = items.find((name) => name.name === nativeEvent.nativeEvent.actionName);
        if (found != null) {
          const action = found.action;
          if (action != null) {
            action();
          }
        }
      }
    };
  }, items7);
  ({ accessibilityActions, onAccessibilityAction } = memo2);
  const obj6 = require("initialize");
  const sharedValue = require("module_1652").useSharedValue(guildId);
  const items8 = [closure_18, dragDropInProgress, sharedValue, guildId, isDragTarget, require("spring/spring").withSpring, TRANSITION_PHYSICS];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26] = items8;
  class GuildsBarGuildTsx1 {
    constructor(arg0) {
      value = closure_0.get();
      if (value) {
        tmp2 = closure_1;
        tmp3 = closure_2;
        value = closure_1.get() === closure_2;
      }
      if (value) {
        tmp4 = closure_3;
        value = !closure_3;
      }
      tmp6 = closure_2;
      tmp5 = closure_1;
      if (closure_2 == null) {
        tmp6 = null;
      }
      result = closure_1.set(tmp6);
      if (value) {
        tmp8 = closure_4;
        tmp9 = closure_5;
        str = "animate-always";
        targetOriginY = closure_4(guildId.targetOriginY, closure_5, "animate-always");
      } else {
        targetOriginY = guildId.targetOriginY;
      }
      obj = { originY: targetOriginY, height: null };
      if (value) {
        tmp10 = closure_4;
        tmp11 = closure_5;
        str2 = "animate-always";
        targetHeight = closure_4(guildId.targetHeight, closure_5, "animate-always");
      } else {
        targetHeight = guildId.targetHeight;
      }
      obj1 = { animations: obj, initialValues: { originY: guildId.currentOriginY, height: guildId.currentHeight } };
      obj.height = targetHeight;
      return obj1;
    }
  }
  const items9 = [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26];
  GuildsBarGuildTsx1.__closure = items9;
  GuildsBarGuildTsx1.__workletHash = 17577267237631;
  GuildsBarGuildTsx1.__initData = tmp20;
  const items10 = [guildId, sharedValue, isDragTarget, dragDropInProgress];
  const callback1 = noop.useCallback(GuildsBarGuildTsx1, items10);
  const obj8 = { id: guildId, draggedItemSize: itemSize, accessibilityActions, onAccessibilityAction, cutouts: null, selected: null, isDragTarget: null, dragState: null, sharedId: null, circle: false, overState: null, unread: null, label: null, config: null, styles: null, isDragPreview: null, layout: null, externalChildren: null, expandedChildren: null, children: null };
  let tmp30;
  const obj7 = require("module_1652");
  if (!isDragTarget) {
    tmp30 = cutouts;
  }
  obj8.cutouts = tmp30;
  obj8.selected = selected;
  obj8.isDragTarget = isDragTarget;
  obj8.dragState = dragState;
  obj8.sharedId = sharedValue;
  obj8.overState = overState;
  obj8.unread = unread;
  obj8.label = memo1;
  obj8.config = memo;
  obj8.styles = guildsBarAnimatedWrapperStyles;
  if (!flag) {
    flag = isDragTarget;
  }
  obj8.isDragPreview = flag;
  obj8.layout = callback1;
  const obj9 = { children: null };
  const items11 = [badgeTopRight, badgeBottomRight];
  obj9.children = items11;
  obj8.externalChildren = closure_15(closure_14, obj9);
  let tmp28Result;
  if (enableHome) {
    if (!flag2) {
      const obj10 = { guildId, onActiveHookChange: callback };
      tmp28Result = closure_16(tmp4(18725), obj10);
    }
  }
  obj8.expandedChildren = tmp28Result;
  if (isUnavailable) {
    const obj11 = { source: tmp4(18747), style: tmp.guildIcon };
    let tmp28Result2 = closure_16(tmp4(5842), obj11);
    const tmp4Result3 = tmp4(5842);
  } else if (null != tmp15) {
    const obj12 = { source: tmp15, style: tmp.guildIcon };
    tmp28Result2 = closure_16(tmp4(5842), obj12);
  } else {
    const obj13 = { value: guildName, selected, animate: selected, size: tmp2(7020).GuildIconSizes.LARGE };
    tmp28Result2 = closure_16(tmp4(7020), obj13);
    const tmp4Result4 = tmp4(7020);
  }
  obj8.children = tmp28Result2;
  return closure_16(GuildsBarAnimatedItemWrapperDefault, obj8);
});