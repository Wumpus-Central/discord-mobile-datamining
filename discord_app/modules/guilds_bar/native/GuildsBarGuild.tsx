// === Module 15279: ? ===

// Module 15279
import importAllResult from "useDrawerOpen";
import initialize from "initialize";
import GuildNSFWContentLevel from "GuildNSFWContentLevel";
import handleConnectionOpen from "handleConnectionOpen";
import updateGuildUnreadSentinel from "updateGuildUnreadSentinel";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import closure_10 from "handleConnectionOpen";
import insertUnsortedGuilds from "insertUnsortedGuilds";
import { useItemDragState } from "withEqualityFn";
import { TRANSITION_PHYSICS } from "GUILD_ITEM_SIZE";
import { AnalyticEvents } from "ME";
import jsxProd from "initialize";
import module_4116 from "module_4116";
import module_4116 from "module_4116";
import module_4116 from "module_4116";
import createCacheKey from "createCacheKey";

let c5;
let closure_15;
let closure_16;
let closure_17;
let closure_6;
const require = arg1;
let c3 = importAllResult;
({ getGuildIconSource: c5, getGuildIconURL: closure_6 } = GuildNSFWContentLevel);
({ Fragment: closure_15, jsxs: closure_16, jsx: closure_17 } = jsxProd);
let obj = { pan: null, itemMeasurements: null, activeIndex: null };
obj[0] = require("module_4294967295");
obj[1] = module_4116.makeMutable([]);
obj[2] = require("module_4294967295");
obj = { guildIcon: null };
obj[0] = { width: require("Themes").modules.mobile.GUILD_BAR_ITEM_SIZE, height: require("Themes").modules.mobile.GUILD_BAR_ITEM_SIZE };
let closure_19 = createCacheKey.createStyles(obj);
let closure_20 = { code: "function GuildsBarGuildTsx1(values){const{dragDropInProgress,sharedId,guildId,isDragTarget,withSpring,TRANSITION_PHYSICS}=this.__closure;var _guildId;const shouldAnimate=dragDropInProgress.get()&&sharedId.get()===guildId&&!isDragTarget;sharedId.set((_guildId=guildId)!==null&&_guildId!==void 0?_guildId:null);return{animations:{originY:shouldAnimate?withSpring(values.targetOriginY,TRANSITION_PHYSICS,'animate-always'):values.targetOriginY,height:shouldAnimate?withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always'):values.targetHeight},initialValues:{originY:values.currentOriginY,height:values.currentHeight}};}" };
let obj1 = { width: require("Themes").modules.mobile.GUILD_BAR_ITEM_SIZE, height: require("Themes").modules.mobile.GUILD_BAR_ITEM_SIZE };
const memoResult = importAllResult.memo(function GuildsBarGuild(guildId) {
  let accessibilityActions;
  let asset;
  let badgeBottomRight;
  let badgeTopRight;
  let cutouts;
  let dragState;
  let icon;
  let itemSize;
  let onAccessibilityAction;
  let overState;
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
  let importAllResult;
  let selected;
  let isUnavailable;
  let mentionCount;
  let unread;
  let isLurking;
  let guildName;
  let mediaState;
  let isDragTarget;
  let dragDropInProgress;
  let stateFromStores1;
  let sharedValue;
  const tmp3 = token(drawerOpen[15])("GuildsBarGuild");
  let tmp4 = callback2();
  let obj = guildId(drawerOpen[16]);
  token = obj.useToken(token(drawerOpen[14]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  let obj1 = guildId(drawerOpen[17]);
  const enableHome = importAllResult.useContext(guildId(drawerOpen[18]).HomeDrawerStateContext).enableHome;
  let obj2 = guildId(drawerOpen[19]);
  drawerOpen = obj2.useDrawerOpen(enableHome);
  importAllResult = importAllResult.useRef(guildId(drawerOpen[20]).HomeDrawerActiveHook.NONE);
  const callback = importAllResult.useCallback((current) => {
    closure_3.current = current;
  }, []);
  let obj3 = guildId(drawerOpen[21]);
  let items = [mediaState, unread, isLurking, selected];
  const items1 = [guildId];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => ({ selected: mediaState.getGuildId() === guildId, isUnavailable: unread.isUnavailable(guildId), unread: isLurking.hasUnread(guildId), mentionCount: isLurking.getMentionCount(guildId), isMentionLowImportance: isLurking.getIsMentionLowImportance(guildId), isLurking: selected.isLurking(guildId) }), items1);
  selected = stateFromStoresObject.selected;
  isUnavailable = stateFromStoresObject.isUnavailable;
  mentionCount = stateFromStoresObject.mentionCount;
  unread = stateFromStoresObject.unread;
  isLurking = stateFromStoresObject.isLurking;
  let obj4 = guildId(drawerOpen[21]);
  const items2 = [guildName];
  const items3 = [guildId, token, selected];
  const stateFromStores = obj4.useStateFromStores(items2, () => {
    const guild = guildName.getGuild(guildId);
    let tmp2;
    if (null != guild) {
      tmp2 = mentionCount(guild, token, selected);
    }
    let name;
    if (guild != null) {
      name = guild.name;
    }
    const obj = { guildName: name, icon: tmp2, asset: null };
    let tmp7;
    if (null != tmp2) {
      if (null != guild) {
        tmp7 = isUnavailable(guild, guildId(drawerOpen[22]).ImageSizes[guildId(undefined, drawerOpen[22]).GuildIconSizes.LARGE], selected);
      }
    }
    obj[2] = tmp7;
    return obj;
  }, items3, token(drawerOpen[23]));
  guildName = stateFromStores.guildName;
  ({ asset, icon } = stateFromStores);
  const tmp12 = token(drawerOpen[24])(guildId, mentionCount, stateFromStoresObject.isMentionLowImportance);
  mediaState = tmp12.mediaState;
  const items4 = [guildId, token, isLurking, isUnavailable, drawerOpen];
  ({ badgeTopRight, badgeBottomRight, cutouts } = tmp12);
  const items5 = [guildName, mentionCount, unread, mediaState];
  const memo = importAllResult.useMemo(() => {
    let obj = {
      onPress() {
        if (null != outer1_9.getGuild(closure_0)) {
          if (!closure_5) {
            if (closure_2) {
              const guildFolders = outer1_11.getGuildFolders();
              const findIndexResult = guildFolders.findIndex((guildIds) => {
                guildIds = guildIds.guildIds;
                return guildIds.includes(closure_0);
              });
              if (findIndexResult > -1) {
                let obj = { guild_id: null, index: null, active_hook: null };
                obj[0] = tmp;
                obj[1] = findIndexResult;
                obj[2] = ref.current;
                outer1_1(outer1_2[27]).track(outer1_14.HOME_DRAWER_GUILD_CLICKED, obj);
                const obj2 = outer1_1(outer1_2[27]);
              }
            }
            if (updateGuildUnreadSentinel) {
              const result = outer1_0(outer1_2[28]).trackGuildIconClicked(tmp);
              const obj4 = outer1_0(outer1_2[28]);
            }
            outer1_1(outer1_2[29])(tmp);
          }
        }
        obj = { title: null, body: null };
        const intl = outer1_0(outer1_2[26]).intl;
        obj[0] = intl.string(outer1_0(outer1_2[26]).t.R0RpRX);
        const intl2 = outer1_0(outer1_2[26]).intl;
        obj[1] = intl2.string(outer1_0(outer1_2[26]).t.m9gRVN);
        return outer1_1(outer1_2[25]).show(obj);
      },
      onLongPress: null
    };
    let fn;
    if (isLurking) {
      fn = (nativeEvent) => {
        const guild = outer1_9.getGuild(closure_0);
        if (null != guild) {
          let obj = outer1_0(outer1_2[30]);
          if (!obj.getIsScreenReaderEnabled()) {
            const tmp4Result = outer1_1(tmp7[31])(tmp, outer1_11.getGuildsTree().version);
            closure_0 = tmp4Result;
            if (0 !== tmp4Result.length) {
              let activeIndex = outer1_18.activeIndex;
              let result = activeIndex.set(-1);
              obj = { key: null, title: null, items: null, x: null, y: null, positionX: "left", positionY: "below", width: null, height: null, state: null, dividerIndexes: null, keyboardShouldPersistTaps: "never", requestClose: null, onClose: null };
              obj[0] = tmp;
              obj[1] = guild.name;
              obj[2] = tmp4Result;
              obj[3] = 12 + closure_1 + 12;
              obj[4] = nativeEvent.nativeEvent.pageY - closure_1 / 2;
              obj[7] = closure_1;
              obj[8] = closure_1;
              obj[9] = outer1_18;
              obj[10] = [];
              obj[12] = function requestClose(arg0) {
                if (!arg0) {
                  const activeIndex = outer1_18.activeIndex;
                  const obj = tmp4Result[activeIndex.get(activeIndex)];
                  if (obj != null) {
                    obj.action();
                  }
                }
                const activeIndex2 = outer1_18.activeIndex;
                const result = activeIndex2.set(-1);
                tmp4Result(outer1_2[32]).hideContextMenu();
              };
              obj[13] = function onClose() {

              };
              tmp6(tmp7[32]).showContextMenu(obj);
              const tmp6Result = tmp6(tmp7[32]);
            }
            const tmp4 = outer1_1(tmp7[31]);
          }
          tmp6 = outer1_0;
        }
      };
    }
    obj[1] = fn;
    return obj;
  }, items4);
  const memo1 = importAllResult.useMemo(() => {
    if (null != mentionCount) {
      if (tmp > 0) {
        const intl3 = guildId(drawerOpen[26]).intl;
        let obj = { guildName: null, mentions: null };
        obj[0] = guildName;
        obj[1] = tmp;
        let formatToPlainStringResult = intl3.formatToPlainString(guildId(drawerOpen[26]).t["/uzRss"], obj);
      }
      const items = [];
      if (mediaState.activeEvent) {
        const intl4 = guildId(drawerOpen[26]).intl;
        items.push(intl4.string(guildId(drawerOpen[26]).t.dHvJ2p));
      }
      if (mediaState.liveStage) {
        const intl5 = guildId(drawerOpen[26]).intl;
        items.push(intl5.string(guildId(drawerOpen[26]).t.OO7ndG));
      }
      if (mediaState.screenshare) {
        const intl6 = guildId(drawerOpen[26]).intl;
        items.push(intl6.string(guildId(drawerOpen[26]).t.wsHMZ7));
      }
      if (mediaState.video) {
        const intl7 = guildId(drawerOpen[26]).intl;
        items.push(intl7.string(guildId(drawerOpen[26]).t.BrLCS0));
      }
      if (mediaState.audio) {
        const intl8 = guildId(drawerOpen[26]).intl;
        items.push(intl8.string(guildId(drawerOpen[26]).t.jPBhKy));
      }
      if (mediaState.activity) {
        const intl9 = guildId(drawerOpen[26]).intl;
        items.push(intl9.string(guildId(drawerOpen[26]).t.Y3Gii5));
      }
      let combined = formatToPlainStringResult;
      if (items.length > 0) {
        const _HermesInternal = HermesInternal;
        combined = "" + formatToPlainStringResult + ", " + items.join(" ");
      }
      return combined;
    }
    if (true === unread) {
      const intl2 = guildId(drawerOpen[26]).intl;
      obj = { guildName: null };
      obj[0] = guildName;
      formatToPlainStringResult = intl2.formatToPlainString(guildId(drawerOpen[26]).t.lzqe42, obj);
    } else {
      const intl = guildId(drawerOpen[26]).intl;
      obj = { guildName: null, mentions: null };
      obj[0] = guildName;
      obj[1] = tmp;
      formatToPlainStringResult = intl.formatToPlainString(guildId(drawerOpen[26]).t["/uzRss"], obj);
    }
  }, items5);
  const tmp15 = token(drawerOpen[33])(guildId, icon, asset);
  const tmp16 = dragDropInProgress(guildId, flag);
  isDragTarget = tmp16.isDragTarget;
  dragDropInProgress = tmp16.dragDropInProgress;
  ({ dragState, overState, itemSize } = tmp16);
  const guildsBarAnimatedWrapperStyles = obj1.useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true });
  const tmp5 = guildId;
  const items6 = [isDragTarget];
  stateFromStores1 = guildId(drawerOpen[21]).useStateFromStores(items6, () => isDragTarget.getGuildsTree().version);
  const items7 = [guildId, stateFromStores1];
  const memo2 = importAllResult.useMemo(() => {
    const arr = token(drawerOpen[31])(items, stateFromStores1);
    items = [...arr.map((label) => ({ name: label.label, label: label.label, action: label.action })), ...token(drawerOpen[34])(items, stateFromStores1).map((name) => ({ name: name.name, label: name.label, action: name.action }))];
    const arr2 = token(drawerOpen[34])(items, stateFromStores1);
    return {
      accessibilityActions: items.map((name) => ({ name: name.name, label: name.label })),
      onAccessibilityAction(arg0) {
        const items = arg0;
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
  const obj6 = guildId(drawerOpen[21]);
  sharedValue = guildId(drawerOpen[12]).useSharedValue(guildId);
  class D {
    constructor(arg0) {
      value = dragDropInProgress.get();
      if (value) {
        tmp2 = useMemo;
        tmp3 = guildId;
        value = useMemo.get() === guildId;
      }
      if (value) {
        tmp4 = isDragTarget;
        value = !isDragTarget;
      }
      tmp6 = guildId;
      tmp5 = useMemo;
      if (guildId == null) {
        tmp6 = null;
      }
      result = useMemo.set(tmp6);
      if (value) {
        tmp8 = guildId;
        tmp9 = c2;
        obj = guildId(c2[35]);
        tmp10 = f96096;
        str = "animate-always";
        targetOriginY = obj.withSpring(guildId.targetOriginY, f96096, "animate-always");
      } else {
        targetOriginY = guildId.targetOriginY;
      }
      obj = { originY: targetOriginY, height: null };
      if (value) {
        tmp11 = guildId;
        tmp12 = c2;
        obj3 = guildId(c2[35]);
        tmp13 = f96096;
        str2 = "animate-always";
        targetHeight = obj3.withSpring(guildId.targetHeight, f96096, "animate-always");
      } else {
        targetHeight = guildId.targetHeight;
      }
      obj[1] = targetHeight;
      obj1 = { originY: guildId.currentOriginY, height: guildId.currentHeight };
      return { animations: obj, initialValues: obj1 };
    }
  }
  obj = { dragDropInProgress, sharedId: sharedValue, guildId, isDragTarget, withSpring: guildId(drawerOpen[35]).withSpring, TRANSITION_PHYSICS: stateFromStores1 };
  D.__closure = obj;
  D.__workletHash = 14096669603718;
  D.__initData = closure_20;
  const items8 = [guildId, sharedValue, isDragTarget, dragDropInProgress];
  const callback1 = importAllResult.useCallback(D, items8);
  obj = { id: guildId, draggedItemSize: itemSize, accessibilityActions, onAccessibilityAction, cutouts: null, selected: null, isDragTarget: null, dragState: null, sharedId: null, circle: null, overState: null, unread: null, label: null, config: null, styles: null, isDragPreview: null, layout: null, externalChildren: null, expandedChildren: null, children: null };
  let tmp23;
  const obj7 = guildId(drawerOpen[12]);
  if (!isDragTarget) {
    tmp23 = cutouts;
  }
  obj[4] = tmp23;
  obj[5] = selected;
  obj[6] = isDragTarget;
  obj[7] = dragState;
  obj[8] = sharedValue;
  let tmp24 = !tmp3;
  if (!tmp3) {
    let tmp25 = !selected;
    if (!selected) {
      tmp25 = !enableHome;
    }
    tmp24 = tmp25;
  }
  obj[9] = tmp24;
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
  obj[17] = callback(closure_15, { children: items9 });
  let tmp21Result;
  if (enableHome) {
    if (!flag2) {
      obj1 = { guildId: null, onActiveHookChange: null };
      obj1[0] = guildId;
      obj1[1] = callback;
      tmp21Result = tmp21(tmp(tmp2[20]), obj1);
    }
  }
  obj[18] = tmp21Result;
  if (isUnavailable) {
    obj2 = { source: null, style: null };
    let tmpResult = tmp(tmp2[36]);
    obj2[0] = tmp(tmp2[37]);
    obj2[1] = tmp4.guildIcon;
    tmp21Result = tmp21(tmpResult, obj2);
  } else if (null != tmp15) {
    obj3 = { source: null, style: null };
    obj3[0] = tmp15;
    obj3[1] = tmp4.guildIcon;
    tmp21Result = tmp21(tmp(tmp2[36]), obj3);
  } else {
    obj4 = { value: null, selected: null, animate: null, size: null };
    obj4[0] = guildName;
    obj4[1] = selected;
    obj4[2] = selected;
    tmpResult = tmp(tmp2[22]);
    obj4[3] = tmp5(tmp2[22]).GuildIconSizes.LARGE;
    tmp21Result = tmp21(tmpResult, obj4);
  }
  obj[19] = tmp21Result;
  return closure_17(token(drawerOpen[17]), obj);
});
let result = require("GuildNSFWContentLevel").fileFinishedImporting("modules/guilds_bar/native/GuildsBarGuild.tsx");

export default memoResult;