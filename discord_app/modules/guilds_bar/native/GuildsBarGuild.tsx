// === Module 16153: ? ===

// Module 16153
import ThemesDefault from "Themes" /* 709 */;
import importAllResult from "noop" /* 19 */;
import GuildNSFWContentLevel from "GuildNSFWContentLevel" /* 1429 */;
import closure_6 from "handleConnectionOpen" /* 4856 */;
import closure_7 from "updateGuildUnreadSentinel" /* 7391 */;
import closure_8 from "createGuildRecordFromRust" /* 1908 */;
import closure_9 from "handleConnectionOpen" /* 4299 */;
import closure_10 from "insertUnsortedGuilds" /* 5390 */;
import { useItemDragState } from "withEqualityFn" /* 16122 */;
import { TRANSITION_PHYSICS } from "GUILD_ITEM_SIZE" /* 16123 */;
import { AnalyticEvents } from "ME" /* 673 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
let c3 = importAllResult;
({ getGuildIconSource: c4, getGuildIconURL: c5 } = GuildNSFWContentLevel);
({ Fragment: closure_14, jsxs: closure_15, jsx: closure_16 } = jsxProd);
let obj = { guildIcon: null };
obj = { width: ThemesDefault.modules.mobile.GUILD_BAR_ITEM_SIZE, height: ThemesDefault.modules.mobile.GUILD_BAR_ITEM_SIZE };
obj[0] = obj;
let closure_17 = createCacheKey.createStyles(obj);
let closure_18 = { code: "function GuildsBarGuildTsx1(values){const{dragDropInProgress,sharedId,guildId,isDragTarget,withSpring,TRANSITION_PHYSICS}=this.__closure;var _guildId;const shouldAnimate=dragDropInProgress.get()&&sharedId.get()===guildId&&!isDragTarget;sharedId.set((_guildId=guildId)!==null&&_guildId!==void 0?_guildId:null);return{animations:{originY:shouldAnimate?withSpring(values.targetOriginY,TRANSITION_PHYSICS,'animate-always'):values.targetOriginY,height:shouldAnimate?withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always'):values.targetHeight},initialValues:{originY:values.currentOriginY,height:values.currentHeight}};}" };
const memoResult = importAllResult.memo(function GuildsBarGuild(guildId) {
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
  importAllResult = undefined;
  let selected;
  let isUnavailable;
  let mentionCount;
  let unread;
  let guildName;
  let mediaState;
  let isDragTarget;
  let dragDropInProgress;
  let stateFromStores1;
  let sharedValue;
  const tmp = callback2();
  let obj = guildId(drawerOpen[13]);
  token = obj.useToken(token(drawerOpen[12]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  obj1 = guildId(drawerOpen[14]);
  const enableHome = importAllResult.useContext(guildId(drawerOpen[15]).HomeDrawerStateContext).enableHome;
  let obj2 = guildId(drawerOpen[16]);
  drawerOpen = obj2.useDrawerOpen(enableHome);
  importAllResult = importAllResult.useRef(guildId(drawerOpen[17]).HomeDrawerActiveHook.NONE);
  const callback = importAllResult.useCallback((current) => {
    closure_3.current = current;
  }, []);
  let obj3 = guildId(drawerOpen[18]);
  let items = [mediaState, mentionCount, unread];
  const items1 = [guildId];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => ({ selected: mediaState.getGuildId() === guildId, isUnavailable: mentionCount.isUnavailable(guildId), unread: unread.hasUnread(guildId), mentionCount: unread.getMentionCount(guildId), isMentionLowImportance: unread.getIsMentionLowImportance(guildId) }), items1);
  selected = stateFromStoresObject.selected;
  isUnavailable = stateFromStoresObject.isUnavailable;
  mentionCount = stateFromStoresObject.mentionCount;
  unread = stateFromStoresObject.unread;
  let obj4 = guildId(drawerOpen[18]);
  const items2 = [guildName];
  const items3 = [guildId, token, selected];
  const stateFromStores = obj4.useStateFromStores(items2, () => {
    const guild = guildName.getGuild(guildId);
    let tmp2;
    if (null != guild) {
      tmp2 = isUnavailable(guild, token, selected);
    }
    let name;
    if (guild != null) {
      name = guild.name;
    }
    const obj = { guildName: name, icon: tmp2, asset: null };
    let tmp7;
    if (null != tmp2) {
      if (null != guild) {
        tmp7 = selected(guild, guildId(drawerOpen[19]).ImageSizes[guildId(undefined, drawerOpen[19]).GuildIconSizes.LARGE], selected);
      }
    }
    obj[2] = tmp7;
    return obj;
  }, items3, token(drawerOpen[20]));
  guildName = stateFromStores.guildName;
  ({ asset, icon } = stateFromStores);
  const tmp11 = token(drawerOpen[21])(guildId, mentionCount, stateFromStoresObject.isMentionLowImportance);
  mediaState = tmp11.mediaState;
  const items4 = [guildId, isUnavailable, drawerOpen];
  ({ badgeTopRight, badgeBottomRight, cutouts } = tmp11);
  const items5 = [guildName, mentionCount, unread, mediaState];
  const memo = importAllResult.useMemo(() => ({
    onPress() {
      if (null != closure_1_8.getGuild(closure_0)) {
        if (!closure_5) {
          if (closure_2) {
            const guildFolders = closure_1_10.getGuildFolders();
            const findIndexResult = guildFolders.findIndex((guildIds) => {
              guildIds = guildIds.guildIds;
              return guildIds.includes(closure_0);
            });
            if (findIndexResult > -1) {
              let obj = { guild_id: null, index: null, active_hook: null };
              obj[0] = tmp;
              obj[1] = findIndexResult;
              obj[2] = ref.current;
              closure_1_1(closure_1_2[24]).track(closure_1_13.HOME_DRAWER_GUILD_CLICKED, obj);
              const obj2 = closure_1_1(closure_1_2[24]);
            }
          }
          closure_1_1(closure_1_2[25])(tmp);
        }
      }
      obj = { title: null, body: null };
      const intl = closure_1_0(closure_1_2[23]).intl;
      obj[0] = intl.string(closure_1_0(closure_1_2[23]).t.R0RpRX);
      const intl2 = closure_1_0(closure_1_2[23]).intl;
      obj[1] = intl2.string(closure_1_0(closure_1_2[23]).t.m9gRVN);
      return closure_1_1(closure_1_2[22]).show(obj);
    }
  }), items4);
  const memo1 = importAllResult.useMemo(() => {
    if (null != mentionCount) {
      if (tmp > 0) {
        const intl3 = guildId(drawerOpen[23]).intl;
        let obj = { guildName: null, mentions: null };
        obj[0] = guildName;
        obj[1] = tmp;
        let formatToPlainStringResult = intl3.formatToPlainString(guildId(drawerOpen[23]).t["/uzRss"], obj);
      }
      const items = [];
      if (mediaState.activeEvent) {
        const intl4 = guildId(drawerOpen[23]).intl;
        items.push(intl4.string(guildId(drawerOpen[23]).t.dHvJ2p));
      }
      if (mediaState.liveStage) {
        const intl5 = guildId(drawerOpen[23]).intl;
        items.push(intl5.string(guildId(drawerOpen[23]).t.OO7ndG));
      }
      if (mediaState.screenshare) {
        const intl6 = guildId(drawerOpen[23]).intl;
        items.push(intl6.string(guildId(drawerOpen[23]).t.wsHMZ7));
      }
      if (mediaState.video) {
        const intl7 = guildId(drawerOpen[23]).intl;
        items.push(intl7.string(guildId(drawerOpen[23]).t.BrLCS0));
      }
      if (mediaState.audio) {
        const intl8 = guildId(drawerOpen[23]).intl;
        items.push(intl8.string(guildId(drawerOpen[23]).t.jPBhKy));
      }
      if (mediaState.activity) {
        const intl9 = guildId(drawerOpen[23]).intl;
        items.push(intl9.string(guildId(drawerOpen[23]).t.Y3Gii5));
      }
      let combined = formatToPlainStringResult;
      if (items.length > 0) {
        const _HermesInternal = HermesInternal;
        combined = "" + formatToPlainStringResult + ", " + items.join(" ");
      }
      return combined;
    }
    if (true === unread) {
      const intl2 = guildId(drawerOpen[23]).intl;
      obj = { guildName: null };
      obj[0] = guildName;
      formatToPlainStringResult = intl2.formatToPlainString(guildId(drawerOpen[23]).t.lzqe42, obj);
    } else {
      const intl = guildId(drawerOpen[23]).intl;
      obj = { guildName: null, mentions: null };
      obj[0] = guildName;
      obj[1] = tmp;
      formatToPlainStringResult = intl.formatToPlainString(guildId(drawerOpen[23]).t["/uzRss"], obj);
    }
  }, items5);
  const tmp14 = token(drawerOpen[26])(guildId, icon, asset);
  const tmp15 = dragDropInProgress(guildId, flag);
  isDragTarget = tmp15.isDragTarget;
  dragDropInProgress = tmp15.dragDropInProgress;
  ({ dragState, overState, itemSize } = tmp15);
  const guildsBarAnimatedWrapperStyles = obj1.useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true });
  let tmp2 = guildId;
  const items6 = [isDragTarget];
  stateFromStores1 = guildId(drawerOpen[18]).useStateFromStores(items6, () => isDragTarget.getGuildsTree().version);
  const items7 = [guildId, stateFromStores1];
  const memo2 = importAllResult.useMemo(() => {
    const arr = token(drawerOpen[27])(items, stateFromStores1);
    items = [...arr.map((label) => ({ name: label.label, label: label.label, action: label.action })), ...token(drawerOpen[28])(items, stateFromStores1).map((name) => ({ name: name.name, label: name.label, action: name.action }))];
    const arr2 = token(drawerOpen[28])(items, stateFromStores1);
    return {
      accessibilityActions: items.map((name) => ({ name: name.name, label: name.label })),
      onAccessibilityAction(arg0) {
        items = arg0;
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
  sharedValue = guildId(drawerOpen[29]).useSharedValue(guildId);
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
        tmp8 = guildId;
        tmp9 = closure_2;
        obj = guildId(closure_2[30]);
        tmp10 = closure_12;
        str = "animate-always";
        targetOriginY = obj.withSpring(guildId.targetOriginY, closure_12, "animate-always");
      } else {
        targetOriginY = guildId.targetOriginY;
      }
      obj = { originY: targetOriginY, height: null };
      if (value) {
        tmp11 = guildId;
        tmp12 = closure_2;
        obj3 = guildId(closure_2[30]);
        tmp13 = closure_12;
        str2 = "animate-always";
        targetHeight = obj3.withSpring(guildId.targetHeight, closure_12, "animate-always");
      } else {
        targetHeight = guildId.targetHeight;
      }
      obj[1] = targetHeight;
      obj1 = { originY: guildId.currentOriginY, height: guildId.currentHeight };
      return { animations: obj, initialValues: obj1 };
    }
  }
  obj = { dragDropInProgress, sharedId: sharedValue, guildId, isDragTarget, withSpring: guildId(drawerOpen[30]).withSpring, TRANSITION_PHYSICS: stateFromStores1 };
  R.__closure = obj;
  R.__workletHash = 14096669603718;
  R.__initData = closure_18;
  const items8 = [guildId, sharedValue, isDragTarget, dragDropInProgress];
  const callback1 = importAllResult.useCallback(R, items8);
  obj = { id: guildId, draggedItemSize: itemSize, accessibilityActions, onAccessibilityAction, cutouts: null, selected: null, isDragTarget: null, dragState: null, sharedId: null, circle: false, overState: null, unread: null, label: null, config: null, styles: null, isDragPreview: null, layout: null, externalChildren: null, expandedChildren: null, children: null };
  let tmp22;
  const obj7 = guildId(drawerOpen[29]);
  if (!isDragTarget) {
    tmp22 = cutouts;
  }
  obj[4] = tmp22;
  obj[5] = selected;
  obj[6] = isDragTarget;
  obj[7] = dragState;
  obj[8] = sharedValue;
  obj[10] = overState;
  obj[11] = unread;
  obj[12] = memo1;
  obj[13] = memo;
  obj[14] = guildsBarAnimatedWrapperStyles;
  if (!flag) {
    flag = isDragTarget;
  }
  obj[15] = flag;
  obj[16] = callback1;
  const items9 = [badgeTopRight, badgeBottomRight];
  obj[17] = callback(closure_14, { children: items9 });
  let tmp20Result;
  if (enableHome) {
    if (!flag2) {
      obj1 = { guildId: null, onActiveHookChange: null };
      obj1[0] = guildId;
      obj1[1] = callback;
      tmp20Result = tmp20(tmp4(tmp3[17]), obj1);
    }
  }
  obj[18] = tmp20Result;
  if (isUnavailable) {
    obj2 = { source: null, style: null };
    let tmp4Result = tmp4(tmp3[31]);
    obj2[0] = tmp4(tmp3[32]);
    obj2[1] = tmp.guildIcon;
    tmp20Result = tmp20(tmp4Result, obj2);
  } else if (null != tmp14) {
    obj3 = { source: null, style: null };
    obj3[0] = tmp14;
    obj3[1] = tmp.guildIcon;
    tmp20Result = tmp20(tmp4(tmp3[31]), obj3);
  } else {
    obj4 = { value: null, selected: null, animate: null, size: null };
    obj4[0] = guildName;
    obj4[1] = selected;
    obj4[2] = selected;
    tmp4Result = tmp4(tmp3[19]);
    obj4[3] = tmp2(tmp3[19]).GuildIconSizes.LARGE;
    tmp20Result = tmp20(tmp4Result, obj4);
  }
  obj[19] = tmp20Result;
  return closure_16(token(drawerOpen[14]), obj);
});
let result = require("set").fileFinishedImporting("modules/guilds_bar/native/GuildsBarGuild.tsx");

export default memoResult;