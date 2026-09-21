// === Module 16655: GuildsBarGuild ===

// Module 16655 (GuildsBarGuild)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import spring from "spring" /* 5185 */;
import GuildIcon from "GuildIcon" /* 5801 */;
import getGuildsBarGuildMenuItemsDefault from "getGuildsBarGuildMenuItems" /* 16625 */;
import getGuildsBarGuildAccessibilityActionsDefault from "getGuildsBarGuildAccessibilityActions" /* 16678 */;
import noop from "module_19" /* 19 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 5106 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7872 */;
import GuildStore from "GuildStore" /* 2063 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4577 */;
import SortedGuildStore from "SortedGuildStore" /* 5655 */;

require = fn;
const GuildRecord = fn(2059);
({ getGuildIconSource: closure_4, getGuildIconURL: hasOwnProperty } = GuildRecord);
const useItemDragState = fn(16624).useItemDragState;
const TRANSITION_PHYSICS = fn(16621).TRANSITION_PHYSICS;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ Fragment: closure_14, jsxs: closure_15, jsx: closure_16 } = jsxProd);
const createStyles = fn(4756);
let obj = { guildIcon: null };
let size = { width: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE, height: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE };
obj.guildIcon = size;
let closure_17 = createStyles.createStyles(obj);
const __initData = { code: "function GuildsBarGuildTsx1(values){const{dragDropInProgress,sharedId,guildId,isDragTarget,withSpring,TRANSITION_PHYSICS}=this.__closure;var _guildId;const shouldAnimate=dragDropInProgress.get()&&sharedId.get()===guildId&&!isDragTarget;sharedId.set((_guildId=guildId)!==null&&_guildId!==void 0?_guildId:null);return{animations:{originY:shouldAnimate?withSpring(values.targetOriginY,TRANSITION_PHYSICS,'animate-always'):values.targetOriginY,height:shouldAnimate?withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always'):values.targetHeight},initialValues:{originY:values.currentOriginY,height:values.currentHeight}};}" };
size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarGuild.tsx");

export default noop.memo(function GuildsBarGuild(guildId) {
  guildId = guildId.guildId;
  let flag = guildId.isDragPreview;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = guildId.hideExpandedChildren;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let token;
  let drawerOpen;
  noop = undefined;
  let mentionCount;
  let unread;
  let guildName;
  let mediaState;
  let dragDropInProgress;
  const tmp = closure_17();
  token = guildId(drawerOpen[13]).useToken(token(drawerOpen[12]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  let obj = guildId(drawerOpen[13]);
  let tmp2 = guildId;
  let obj2 = guildId(drawerOpen[14]);
  const enableHome = noop.useContext(guildId(drawerOpen[15]).HomeDrawerStateContext).enableHome;
  const guildsBarAnimatedWrapperStyles = guildId(drawerOpen[14]).useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true });
  drawerOpen = guildId(drawerOpen[16]).useDrawerOpen(enableHome);
  noop = noop.useRef(guildId(drawerOpen[17]).HomeDrawerActiveHook.NONE);
  const callback = noop.useCallback((current) => {
    closure_3.current = current;
  }, []);
  let obj3 = guildId(drawerOpen[16]);
  let items = [mediaState, mentionCount, unread];
  const items1 = [guildId];
  const stateFromStoresObject = guildId(drawerOpen[18]).useStateFromStoresObject(items, () => ({ selected: SelectedGuildStore.getGuildId() === guildId, isUnavailable: GuildAvailabilityStore.isUnavailable(guildId), unread: GuildReadStateStore.hasUnread(guildId), mentionCount: GuildReadStateStore.getMentionCount(guildId), isMentionLowImportance: GuildReadStateStore.getIsMentionLowImportance(guildId) }), items1);
  const selected = stateFromStoresObject.selected;
  const isUnavailable = stateFromStoresObject.isUnavailable;
  mentionCount = stateFromStoresObject.mentionCount;
  unread = stateFromStoresObject.unread;
  const obj4 = guildId(drawerOpen[18]);
  const items2 = [guildName];
  const items3 = [guildId, token, selected];
  const stateFromStores = guildId(drawerOpen[18]).useStateFromStores(items2, () => {
    const guild = GuildStore.getGuild(guildId);
    let tmp2;
    if (null != guild) {
      tmp2 = hasOwnProperty(guild, token, selected);
    }
    let name;
    if (guild != null) {
      name = guild.name;
    }
    const obj = { guildName: name, icon: tmp2, asset: null };
    let tmp7;
    if (null != tmp2) {
      if (null != guild) {
        tmp7 = React4(guild, GuildIcon.ImageSizes[GuildIcon.GuildIconSizes.LARGE], selected);
      }
    }
    obj.asset = tmp7;
    return obj;
  }, items3, token(drawerOpen[20]));
  guildName = stateFromStores.guildName;
  ({ asset, icon } = stateFromStores);
  const tmp11 = token(drawerOpen[21])(guildId, mentionCount, stateFromStoresObject.isMentionLowImportance);
  mediaState = tmp11.mediaState;
  const items4 = [guildId, isUnavailable, drawerOpen];
  ({ badgeTopRight, badgeBottomRight, cutouts } = tmp11);
  const items5 = [guildName, mentionCount, unread, mediaState];
  const memo = noop.useMemo(() => ({
    onPress() {
      if (null != guildName.getGuild(guild_id)) {
        if (!isUnavailable) {
          if (closure_1_2) {
            const guildFolders = isDragTarget.getGuildFolders();
            const findIndexResult = guildFolders.findIndex((guildIds) => {
              guildIds = guildIds.guildIds;
              return guildIds.includes(guild_id);
            });
            if (findIndexResult > -1) {
              const obj = { guild_id, index: findIndexResult, active_hook: ref.current };
              token(drawerOpen[24]).track(sharedValue.HOME_DRAWER_GUILD_CLICKED, obj);
              const obj2 = token(drawerOpen[24]);
            }
          }
          token(drawerOpen[25])(guild_id);
        }
      }
      const obj3 = { title: null, body: null };
      const intl = guildId(drawerOpen[23]).intl;
      obj3.title = intl.string(guildId(drawerOpen[23]).t.R0RpRX);
      const intl2 = guildId(drawerOpen[23]).intl;
      obj3.body = intl2.string(guildId(drawerOpen[23]).t.m9gRVN);
      return token(drawerOpen[22]).show(obj3);
    }
  }), items4);
  const memo1 = noop.useMemo(() => {
    if (null != mentionCount) {
      if (mentionCount > 0) {
        const intl3 = util.intl;
        const obj2 = { guildName, mentions: mentionCount };
        let formatToPlainStringResult = intl3.formatToPlainString(util.t["/uzRss"], obj2);
      }
      const items = [];
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
  const tmp14 = token(drawerOpen[26])(guildId, icon, asset);
  const tmp15 = dragDropInProgress(guildId, flag);
  const isDragTarget = tmp15.isDragTarget;
  dragDropInProgress = tmp15.dragDropInProgress;
  ({ dragState, overState, itemSize } = tmp15);
  const obj5 = guildId(drawerOpen[18]);
  const items6 = [isDragTarget];
  const stateFromStores1 = guildId(drawerOpen[18]).useStateFromStores(items6, () => isDragTarget.getGuildsTree().version);
  const items7 = [guildId, stateFromStores1];
  const memo2 = noop.useMemo(() => {
    const arr = getGuildsBarGuildMenuItemsDefault(guildId, stateFromStores1);
    const items = [...arr.map((label) => ({ name: label.label, label: label.label, action: label.action })), ...getGuildsBarGuildAccessibilityActionsDefault(guildId, stateFromStores1).map((name) => ({ name: name.name, label: name.label, action: name.action }))];
    const arr2 = getGuildsBarGuildAccessibilityActionsDefault(guildId, stateFromStores1);
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
  const obj6 = guildId(drawerOpen[18]);
  const sharedValue = guildId(drawerOpen[29]).useSharedValue(guildId);
  class R {
    constructor(arg0) {
      value = dragDropInProgress.get();
      if (value) {
        tmp2 = closure_13;
        tmp3 = guildId;
        value = closure_13.get() === guildId;
      }
      if (value) {
        tmp4 = isDragTarget;
        value = !isDragTarget;
      }
      tmp6 = guildId;
      tmp5 = closure_13;
      if (guildId == null) {
        tmp6 = null;
      }
      result = closure_13.set(tmp6);
      if (value) {
        tmp8 = closure_0;
        tmp9 = closure_2;
        obj = closure_0(closure_2[30]);
        tmp10 = TRANSITION_PHYSICS;
        str = "animate-always";
        targetOriginY = obj.withSpring(guildId.targetOriginY, TRANSITION_PHYSICS, "animate-always");
      } else {
        targetOriginY = guildId.targetOriginY;
      }
      obj1 = { originY: targetOriginY, height: null };
      if (value) {
        tmp11 = closure_0;
        tmp12 = closure_2;
        obj3 = closure_0(closure_2[30]);
        tmp13 = TRANSITION_PHYSICS;
        str2 = "animate-always";
        targetHeight = obj3.withSpring(guildId.targetHeight, TRANSITION_PHYSICS, "animate-always");
      } else {
        targetHeight = guildId.targetHeight;
      }
      obj5 = { animations: obj1, initialValues: { originY: guildId.currentOriginY, height: guildId.currentHeight } };
      obj1.height = targetHeight;
      return obj5;
    }
  }
  const obj7 = guildId(drawerOpen[29]);
  R.__closure = { dragDropInProgress, sharedId: sharedValue, guildId, isDragTarget, withSpring: guildId(drawerOpen[30]).withSpring, TRANSITION_PHYSICS: stateFromStores1 };
  R.__workletHash = 14096669603718;
  R.__initData = __initData;
  const items8 = [guildId, sharedValue, isDragTarget, dragDropInProgress];
  const callback1 = noop.useCallback(R, items8);
  const obj9 = { id: guildId, draggedItemSize: itemSize, accessibilityActions, onAccessibilityAction, cutouts: null, selected: null, isDragTarget: null, dragState: null, sharedId: null, circle: false, overState: null, unread: null, label: null, config: null, styles: null, isDragPreview: null, layout: null, externalChildren: null, expandedChildren: null, children: null };
  let tmp22;
  const obj8 = { dragDropInProgress, sharedId: sharedValue, guildId, isDragTarget, withSpring: guildId(drawerOpen[30]).withSpring, TRANSITION_PHYSICS: stateFromStores1 };
  if (!isDragTarget) {
    tmp22 = cutouts;
  }
  obj9.cutouts = tmp22;
  obj9.selected = selected;
  obj9.isDragTarget = isDragTarget;
  obj9.dragState = dragState;
  obj9.sharedId = sharedValue;
  obj9.overState = overState;
  obj9.unread = unread;
  obj9.label = memo1;
  obj9.config = memo;
  obj9.styles = guildsBarAnimatedWrapperStyles;
  if (!flag) {
    flag = isDragTarget;
  }
  obj9.isDragPreview = flag;
  obj9.layout = callback1;
  const obj10 = { children: null };
  const items9 = [badgeTopRight, badgeBottomRight];
  obj10.children = items9;
  obj9.externalChildren = closure_15(closure_14, obj10);
  let tmp20Result;
  if (enableHome) {
    if (!flag2) {
      const obj11 = { guildId, onActiveHookChange: callback };
      tmp20Result = closure_16(tmp4(tmp3[17]), obj11);
    }
  }
  obj9.expandedChildren = tmp20Result;
  if (isUnavailable) {
    const obj12 = { source: tmp4(tmp3[32]), style: tmp.guildIcon };
    let tmp20Result2 = closure_16(tmp4(tmp3[31]), obj12);
    const tmp4Result = tmp4(tmp3[31]);
  } else if (null != tmp14) {
    const obj13 = { source: tmp14, style: tmp.guildIcon };
    tmp20Result2 = closure_16(tmp4(tmp3[31]), obj13);
  } else {
    const obj14 = { value: guildName, selected, animate: selected, size: tmp2(tmp3[19]).GuildIconSizes.LARGE };
    tmp20Result2 = closure_16(tmp4(tmp3[19]), obj14);
    const tmp4Result2 = tmp4(tmp3[19]);
  }
  obj9.children = tmp20Result2;
  return closure_16(token(drawerOpen[14]), obj9);
});