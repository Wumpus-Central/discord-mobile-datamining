// === Module 16296: GuildsBarGuild ===

// Module 16296 (GuildsBarGuild)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl10 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import spring from "spring" /* 5604 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5714 */;
import GuildIcon from "GuildIcon" /* 5978 */;
import GuildsBarConstants from "GuildsBarConstants" /* 16262 */;
import GuildsBarDnDStore from "GuildsBarDnDStore" /* 16265 */;
import getGuildsBarGuildMenuItemsDefault from "getGuildsBarGuildMenuItems" /* 16266 */;
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "transitionGuildsBarToGuildOrOpenSelectedChannel" /* 16289 */;
import getGuildsBarGuildAccessibilityActionsDefault from "getGuildsBarGuildAccessibilityActions" /* 16319 */;
import react_mod from "react" /* 19 */;
import GuildRecord from "GuildRecord" /* 2070 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 5625 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7134 */;
import GuildStore from "GuildStore" /* 2074 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4705 */;
import SortedGuildStore from "SortedGuildStore" /* 5623 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let guildIds, set;

let closure_14;
let closure_15;
let closure_16;
let closure_4;
let hasOwnProperty;
let size;
let react = react_mod;
({ getGuildIconSource: closure_4, getGuildIconURL: hasOwnProperty } = GuildRecord);
const useItemDragState = GuildsBarDnDStore.useItemDragState;
const TRANSITION_PHYSICS = GuildsBarConstants.TRANSITION_PHYSICS;
const AnalyticEvents = Constants.AnalyticEvents;
({ Fragment: closure_14, jsxs: closure_15, jsx: closure_16 } = Fragment);
let obj = { guildIcon: size };
size = { width: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE, height: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE };
let closure_17 = createStyles.createStyles(obj);
let closure_18 = { code: "function GuildsBarGuildTsx1(values){const{dragDropInProgress,sharedId,guildId,isDragTarget,withSpring,TRANSITION_PHYSICS}=this.__closure;var _guildId;const shouldAnimate=dragDropInProgress.get()&&sharedId.get()===guildId&&!isDragTarget;sharedId.set((_guildId=guildId)!==null&&_guildId!==void 0?_guildId:null);return{animations:{originY:shouldAnimate?withSpring(values.targetOriginY,TRANSITION_PHYSICS,\"animate-always\"):values.targetOriginY,height:shouldAnimate?withSpring(values.targetHeight,TRANSITION_PHYSICS,\"animate-always\"):values.targetHeight},initialValues:{originY:values.currentOriginY,height:values.currentHeight}};}" };
const __initData = { code: "function GuildsBarGuildTsx2(values){const{dragDropInProgress,sharedId,guildId,isDragTarget,withSpring,TRANSITION_PHYSICS}=this.__closure;var _guildId;const shouldAnimate=dragDropInProgress.get()&&sharedId.get()===guildId&&!isDragTarget;sharedId.set((_guildId=guildId)!==null&&_guildId!==void 0?_guildId:null);return{animations:{originY:shouldAnimate?withSpring(values.targetOriginY,TRANSITION_PHYSICS,'animate-always'):values.targetOriginY,height:shouldAnimate?withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always'):values.targetHeight},initialValues:{originY:values.currentOriginY,height:values.currentHeight}};}" };
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let drawerOpen;
  let first;
  let guildsTree;
  let hideExpandedChildren;
  let isDragPreview;
  let mentionCount;
  let ref;
  let tmp10;
  let tmp14;
  let token;
  let unread;
  let tmp2 = drawerOpen;
  let obj = guildId(drawerOpen[14]);
  const cResult = obj.c(87);
  guildId = guildId.guildId;
  ({ isDragPreview, hideExpandedChildren } = guildId);
  closure_17();
  const tmpResult = guildId(tmp2[15]);
  token = tmpResult.useToken(token(tmp2[12]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { disableSelectedColor: true, disableBGColor: true };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmpResult4 = guildId(tmp2[16]);
  tmpResult4.useGuildsBarAnimatedWrapperStyles(first);
  const enableHome = react.useContext(tmp(tmp2[17]).HomeDrawerStateContext).enableHome;
  const tmpResult5 = guildId(tmp2[18]);
  drawerOpen = tmpResult5.useDrawerOpen(enableHome);
  react = react.useRef(tmp(tmp2[19]).HomeDrawerActiveHook.NONE);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor(current) {
        ref.current = current;
      }
    }
    cResult[1] = P;
  } else {
    class P {
      constructor(current) {
        ref.current = current;
      }
    }
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor(current) {
        ref.current = current;
      }
    }
    const items = [SelectedGuildStore, GuildAvailabilityStore, GuildReadStateStore];
    cResult[2] = items;
    tmp10 = items;
  } else {
    class P {
      constructor(current) {
        ref.current = current;
      }
    }
  }
  if (cResult[3] !== guildId) {
    class P {
      constructor(current) {
        ref.current = current;
      }
    }
    const items1 = [guildId];
    cResult[3] = guildId;
    cResult[4] = tmp15;
    cResult[5] = items1;
    tmp14 = items1;
  } else {
    class P {
      constructor(current) {
        ref.current = current;
      }
    }
    tmp14 = cResult[5];
  }
  const tmpResult6 = guildId(tmp2[20]);
  const stateFromStoresObject = tmpResult6.useStateFromStoresObject(tmp10, tmp15, tmp14);
  const selected = stateFromStoresObject.selected;
  const isUnavailable = stateFromStoresObject.isUnavailable;
  ({ mentionCount, unread } = stateFromStoresObject);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor(current) {
        ref.current = current;
      }
    }
    const items2 = [GuildStore];
    cResult[6] = items2;
  } else {
    class P {
      constructor(current) {
        ref.current = current;
      }
    }
  }
  if (cResult[7] === guildId) {
    class P {
      constructor(current) {
        ref.current = current;
      }
    }
  }
  const fn = function j() {
    let tmp7;
    const guild = GuildStore.getGuild(guildId);
    let tmp2;
    if (null != guild) {
      tmp2 = hasOwnProperty(guild, token, selected);
    }
    let name;
    if (guild != null) {
      name = guild.name;
    }
    const obj = { guildName: name, icon: tmp2, asset: tmp7 };
    tmp7 = undefined;
    if (null != tmp2) {
      if (null != guild) {
        tmp7 = React3(guild, GuildIcon.ImageSizes[GuildIcon.GuildIconSizes.LARGE], selected);
      }
    }
    return obj;
  };
  const items3 = [guildId, token, selected];
  cResult[7] = guildId;
  cResult[8] = token;
  cResult[9] = selected;
  cResult[10] = items3;
  cResult[11] = fn;
}) : ((guildId) => {
  let accessibilityActions;
  let asset;
  let badgeBottomRight;
  let badgeTopRight;
  let closure_3;
  let cutouts;
  let dragState;
  let icon;
  let itemSize;
  let items9;
  let obj10;
  let onAccessibilityAction;
  let overState;
  let tmp20Result;
  let tmp20Result2;
  let tmp22;
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
  react = undefined;
  let mentionCount;
  let unread;
  let guildName;
  let mediaState;
  let dragDropInProgress;
  const tmp = closure_17();
  let tmp2 = guildId;
  let obj = guildId(drawerOpen[15]);
  token = obj.useToken(token(drawerOpen[12]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  let obj2 = guildId(drawerOpen[16]);
  const guildsBarAnimatedWrapperStyles = obj2.useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true });
  const enableHome = react.useContext(guildId(drawerOpen[17]).HomeDrawerStateContext).enableHome;
  let obj3 = guildId(drawerOpen[18]);
  drawerOpen = obj3.useDrawerOpen(enableHome);
  react = react.useRef(guildId(drawerOpen[19]).HomeDrawerActiveHook.NONE);
  const callback = react.useCallback((current) => {
    closure_3.current = current;
  }, []);
  const obj4 = guildId(drawerOpen[20]);
  let items = [mediaState, mentionCount, unread];
  const items1 = [guildId];
  const stateFromStoresObject = obj4.useStateFromStoresObject(items, () => {
    const obj = { selected: SelectedGuildStore.getGuildId() === guildId, isUnavailable: GuildAvailabilityStore.isUnavailable(guildId), unread: GuildReadStateStore.hasUnread(guildId), mentionCount: GuildReadStateStore.getMentionCount(guildId), isMentionLowImportance: GuildReadStateStore.getIsMentionLowImportance(guildId) };
    return obj;
  }, items1);
  const selected = stateFromStoresObject.selected;
  const isUnavailable = stateFromStoresObject.isUnavailable;
  mentionCount = stateFromStoresObject.mentionCount;
  unread = stateFromStoresObject.unread;
  const isMentionLowImportance = stateFromStoresObject.isMentionLowImportance;
  const items2 = [guildName];
  const items3 = [guildId, token, selected];
  const obj5 = guildId(drawerOpen[20]);
  const stateFromStores = obj5.useStateFromStores(items2, () => {
    let tmp7;
    const guild = GuildStore.getGuild(guildId);
    let tmp2;
    if (null != guild) {
      tmp2 = hasOwnProperty(guild, token, selected);
    }
    let name;
    if (guild != null) {
      name = guild.name;
    }
    const obj = { guildName: name, icon: tmp2, asset: tmp7 };
    tmp7 = undefined;
    if (null != tmp2) {
      if (null != guild) {
        tmp7 = React3(guild, GuildIcon.ImageSizes[GuildIcon.GuildIconSizes.LARGE], selected);
      }
    }
    return obj;
  }, items3, token(drawerOpen[22]));
  guildName = stateFromStores.guildName;
  ({ asset, icon } = stateFromStores);
  const tmp11 = token(drawerOpen[23])(guildId, mentionCount, isMentionLowImportance);
  mediaState = tmp11.mediaState;
  const items4 = [guildId, isUnavailable, drawerOpen];
  ({ badgeTopRight, badgeBottomRight, cutouts } = tmp11);
  const items5 = [guildName, mentionCount, unread, mediaState];
  const memo = react.useMemo(() => {
    let guild_id;
    let ref;
    let obj = {
      onPress() {
        let intl;
        let intl2;
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
                const obj2 = token(drawerOpen[26]);
                obj2.track(sharedValue.HOME_DRAWER_GUILD_CLICKED, obj);
              }
            }
            token(drawerOpen[27])(guild_id);
          }
        }
        const obj3 = { title: intl.string(guildId(drawerOpen[25]).t.R0RpRX), body: intl2.string(guildId(drawerOpen[25]).t.m9gRVN) };
        const show = token(drawerOpen[24]).show;
        token(drawerOpen[24]);
        intl = guildId(drawerOpen[25]).intl;
        intl2 = guildId(drawerOpen[25]).intl;
        return show(obj3);
      }
    };
    return obj;
  }, items4);
  const memo1 = react.useMemo(() => {
    let formatToPlainStringResult;
    if (null != mentionCount) {
      if (mentionCount > 0) {
        const intl3 = intl10.intl;
        const obj2 = { guildName, mentions: mentionCount };
        formatToPlainStringResult = intl3.formatToPlainString(intl10.t["/uzRss"], obj2);
      }
      const items = [];
      if (mediaState.activeEvent) {
        const push = items.push;
        const intl4 = intl10.intl;
        push(intl4.string(intl10.t.dHvJ2p));
      }
      if (mediaState.liveStage) {
        const push2 = items.push;
        const intl5 = intl10.intl;
        push2(intl5.string(intl10.t.OO7ndG));
      }
      if (mediaState.screenshare) {
        const push3 = items.push;
        const intl6 = intl10.intl;
        push3(intl6.string(intl10.t.wsHMZ7));
      }
      if (mediaState.video) {
        const push4 = items.push;
        const intl7 = intl10.intl;
        push4(intl7.string(intl10.t.BrLCS0));
      }
      if (mediaState.audio) {
        const push5 = items.push;
        const intl8 = intl10.intl;
        push5(intl8.string(intl10.t.jPBhKy));
      }
      if (mediaState.activity) {
        const push6 = items.push;
        const intl9 = intl10.intl;
        push6(intl9.string(intl10.t.Y3Gii5));
      }
      let combined = formatToPlainStringResult;
      if (items.length > 0) {
        const _HermesInternal = HermesInternal;
        combined = "" + formatToPlainStringResult + ", " + items.join(" ");
      }
      return combined;
    }
    if (true === unread) {
      const intl2 = intl10.intl;
      const obj3 = { guildName };
      formatToPlainStringResult = intl2.formatToPlainString(intl10.t.lzqe42, obj3);
    } else {
      const intl = intl10.intl;
      const obj = { guildName, mentions: mentionCount };
      formatToPlainStringResult = intl.formatToPlainString(intl10.t["/uzRss"], obj);
    }
  }, items5);
  const tmp14 = token(drawerOpen[28])(guildId, icon, asset);
  const tmp15 = dragDropInProgress(guildId, flag);
  const isDragTarget = tmp15.isDragTarget;
  dragDropInProgress = tmp15.dragDropInProgress;
  ({ dragState, overState, itemSize } = tmp15);
  const items6 = [isDragTarget];
  const obj6 = guildId(drawerOpen[20]);
  const stateFromStores1 = obj6.useStateFromStores(items6, () => isDragTarget.getGuildsTree().version);
  const items7 = [guildId, stateFromStores1];
  const memo2 = react.useMemo(() => {
    const items = [...getGuildsBarGuildMenuItemsDefault(guildId, stateFromStores1).map((label) => ({ name: label.label, label: label.label, action: label.action })), ...getGuildsBarGuildAccessibilityActionsDefault(guildId, stateFromStores1).map((name) => ({ name: name.name, label: name.label, action: name.action }))];
    const arr = getGuildsBarGuildMenuItemsDefault(guildId, stateFromStores1);
    getGuildsBarGuildAccessibilityActionsDefault(guildId, stateFromStores1);
    const obj = {
      accessibilityActions: items.map((name) => ({ name: name.name, label: name.label })),
      onAccessibilityAction(arg0) {
        let closure_0 = arg0;
        const found = items.find((name) => name.name === nativeEvent.nativeEvent.actionName);
        if (found != null) {
          const action = found.action;
          if (action != null) {
            action();
          }
        }
      }
    };
    return obj;
  }, items7);
  ({ accessibilityActions, onAccessibilityAction } = memo2);
  const obj7 = guildId(drawerOpen[31]);
  const sharedValue = obj7.useSharedValue(guildId);
  class D {
    constructor(originY) {
      let targetHeight;
      let targetOriginY;
      const value = dragDropInProgress.get() && sharedValue.get() === guildId && !isDragTarget;
      let tmp6 = guildId;
      set = sharedValue.set;
      if (guildId == null) {
        tmp6 = null;
      }
      const result = set(tmp6);
      if (value) {
        const obj = spring;
        targetOriginY = obj.withSpring(originY.targetOriginY, TRANSITION_PHYSICS, "animate-always");
      } else {
        targetOriginY = originY.targetOriginY;
      }
      const obj2 = { originY: targetOriginY, height: targetHeight };
      if (value) {
        const obj3 = spring;
        targetHeight = obj3.withSpring(originY.targetHeight, TRANSITION_PHYSICS, "animate-always");
      } else {
        targetHeight = originY.targetHeight;
      }
      return { animations: obj2, initialValues: { originY: originY.currentOriginY, height: originY.currentHeight } };
    }
  }
  D.__closure = { dragDropInProgress, sharedId: sharedValue, guildId, isDragTarget, withSpring: guildId(drawerOpen[32]).withSpring, TRANSITION_PHYSICS: stateFromStores1 };
  D.__workletHash = 15285764080325;
  D.__initData = __initData;
  const items8 = [guildId, sharedValue, isDragTarget, dragDropInProgress];
  ({ dragDropInProgress, sharedId: sharedValue, guildId, isDragTarget, withSpring: guildId(drawerOpen[32]).withSpring, TRANSITION_PHYSICS: stateFromStores1 });
  const callback1 = react.useCallback(D, items8);
  const obj9 = { id: guildId, draggedItemSize: itemSize, accessibilityActions, onAccessibilityAction, cutouts: tmp22, selected, isDragTarget, dragState, sharedId: sharedValue, circle: false, overState, unread, label: memo1, config: memo, styles: guildsBarAnimatedWrapperStyles, isDragPreview: flag, layout: callback1, externalChildren: closure_15(closure_14, obj10), expandedChildren: tmp20Result, children: tmp20Result2 };
  tmp22 = undefined;
  const tmp21 = token(drawerOpen[16]);
  if (!isDragTarget) {
    tmp22 = cutouts;
  }
  if (!flag) {
    flag = isDragTarget;
  }
  obj10 = { children: items9 };
  items9 = [badgeTopRight, badgeBottomRight];
  tmp20Result = undefined;
  if (enableHome) {
    if (!flag2) {
      const obj11 = { guildId, onActiveHookChange: callback };
      tmp20Result = closure_16(tmp4(tmp3[19]), obj11);
    }
  }
  if (isUnavailable) {
    const obj12 = { source: token(drawerOpen[34]), style: tmp.guildIcon };
    const tmp4Result = token(drawerOpen[33]);
    tmp20Result2 = closure_16(tmp4Result, obj12);
  } else if (null != tmp14) {
    const obj13 = { source: tmp14, style: tmp.guildIcon };
    tmp20Result2 = closure_16(tmp4(tmp3[33]), obj13);
  } else {
    const obj14 = { value: guildName, selected, animate: selected, size: tmp2(drawerOpen[21]).GuildIconSizes.LARGE };
    const tmp4Result2 = token(drawerOpen[21]);
    tmp20Result2 = closure_16(tmp4Result2, obj14);
  }
  return closure_16(tmp21, obj9);
}));
size = size_mod;
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarGuild.tsx");

export default memoResult;