// discord_app/modules/guilds_bar/native/GuildsBarGuild.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import GuildIcon from "../../guild/native/GuildIcon.tsx";
import getGuildsBarGuildMenuItemsDefault from "utils/getGuildsBarGuildMenuItems.tsx";
import getGuildsBarGuildAccessibilityActionsDefault from "utils/getGuildsBarGuildAccessibilityActions.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildAvailabilityStore from "../../../stores/GuildAvailabilityStore.tsx";
import GuildReadStateStore from "../../../stores/GuildReadStateStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";
import SortedGuildStore from "../../../stores/SortedGuildStore.tsx";

require = fn;
const GuildRecord = fn(1975);
({ getGuildIconSource: closure_4, getGuildIconURL: hasOwnProperty } = GuildRecord);
const useItemDragState = fn(16284).useItemDragState;
const TRANSITION_PHYSICS = fn(16285).TRANSITION_PHYSICS;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ Fragment: closure_14, jsxs: closure_15, jsx: closure_16 } = jsxProd);
const createStyles = fn(4560);
let obj = { guildIcon: null };
let size = {
  width: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE,
  height: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE,
};
obj.guildIcon = size;
let closure_17 = createStyles.createStyles(obj);
const __initData = {
  code: "function GuildsBarGuildTsx1(values){const{dragDropInProgress,sharedId,guildId,isDragTarget,withSpring,TRANSITION_PHYSICS}=this.__closure;var _guildId;const shouldAnimate=dragDropInProgress.get()&&sharedId.get()===guildId&&!isDragTarget;sharedId.set((_guildId=guildId)!==null&&_guildId!==void 0?_guildId:null);return{animations:{originY:shouldAnimate?withSpring(values.targetOriginY,TRANSITION_PHYSICS,'animate-always'):values.targetOriginY,height:shouldAnimate?withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always'):values.targetHeight},initialValues:{originY:values.currentOriginY,height:values.currentHeight}};}",
};
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
  let obj = guildId(drawerOpen[13]);
  token = obj.useToken(token(drawerOpen[12]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  let obj1 = guildId(drawerOpen[14]);
  const enableHome = noop.useContext(guildId(drawerOpen[15]).HomeDrawerStateContext).enableHome;
  let obj2 = guildId(drawerOpen[16]);
  drawerOpen = obj2.useDrawerOpen(enableHome);
  noop = noop.useRef(guildId(drawerOpen[17]).HomeDrawerActiveHook.NONE);
  const callback = noop.useCallback((current) => {
    closure_3.current = current;
  }, []);
  let obj3 = guildId(drawerOpen[18]);
  let items = [mediaState, mentionCount, unread];
  const items1 = [guildId];
  const stateFromStoresObject = obj3.useStateFromStoresObject(
    items,
    () => ({
      selected: SelectedGuildStore.getGuildId() === guildId,
      isUnavailable: GuildAvailabilityStore.isUnavailable(guildId),
      unread: GuildReadStateStore.hasUnread(guildId),
      mentionCount: GuildReadStateStore.getMentionCount(guildId),
      isMentionLowImportance: GuildReadStateStore.getIsMentionLowImportance(guildId),
    }),
    items1,
  );
  const selected = stateFromStoresObject.selected;
  const isUnavailable = stateFromStoresObject.isUnavailable;
  mentionCount = stateFromStoresObject.mentionCount;
  unread = stateFromStoresObject.unread;
  let obj4 = guildId(drawerOpen[18]);
  const items2 = [guildName];
  const items3 = [guildId, token, selected];
  const stateFromStores = obj4.useStateFromStores(
    items2,
    () => {
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
    },
    items3,
    token(drawerOpen[20]),
  );
  guildName = stateFromStores.guildName;
  ({ asset, icon } = stateFromStores);
  const tmp11 = token(drawerOpen[21])(guildId, mentionCount, stateFromStoresObject.isMentionLowImportance);
  mediaState = tmp11.mediaState;
  const items4 = [guildId, isUnavailable, drawerOpen];
  ({ badgeTopRight, badgeBottomRight, cutouts } = tmp11);
  const items5 = [guildName, mentionCount, unread, mediaState];
  const memo = noop.useMemo(
    () => ({
      onPress() {
        if (null != guildName.getGuild(closure_1_0)) {
          if (!isUnavailable) {
            if (closure_1_2) {
              const guildFolders = isDragTarget.getGuildFolders();
              const findIndexResult = guildFolders.findIndex((guildIds) => {
                guildIds = guildIds.guildIds;
                return guildIds.includes(closure_1_0);
              });
              if (findIndexResult > -1) {
                let obj = { guild_id: tmp, index: findIndexResult, active_hook: ref.current };
                token(drawerOpen[24]).track(sharedValue.HOME_DRAWER_GUILD_CLICKED, obj);
                const obj2 = token(drawerOpen[24]);
              }
            }
            token(drawerOpen[25])(tmp);
          }
        }
        obj = { title: null, body: null };
        const intl = guildId(drawerOpen[23]).intl;
        obj.title = intl.string(guildId(drawerOpen[23]).t.R0RpRX);
        const intl2 = guildId(drawerOpen[23]).intl;
        obj.body = intl2.string(guildId(drawerOpen[23]).t.m9gRVN);
        return token(drawerOpen[22]).show(obj);
      },
    }),
    items4,
  );
  const memo1 = noop.useMemo(() => {
    if (null != mentionCount) {
      if (tmp > 0) {
        const intl3 = util.intl;
        let obj = { guildName, mentions: tmp };
        let formatToPlainStringResult = intl3.formatToPlainString(util.t["/uzRss"], obj);
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
      obj = { guildName };
      formatToPlainStringResult = intl2.formatToPlainString(util.t.lzqe42, obj);
    } else {
      const intl = util.intl;
      obj = { guildName, mentions: tmp };
      formatToPlainStringResult = intl.formatToPlainString(util.t["/uzRss"], obj);
    }
  }, items5);
  const tmp14 = token(drawerOpen[26])(guildId, icon, asset);
  const tmp15 = dragDropInProgress(guildId, flag);
  const isDragTarget = tmp15.isDragTarget;
  dragDropInProgress = tmp15.dragDropInProgress;
  ({ dragState, overState, itemSize } = tmp15);
  let obj5 = guildId(drawerOpen[18]);
  const items6 = [isDragTarget];
  const stateFromStores1 = obj5.useStateFromStores(items6, () => isDragTarget.getGuildsTree().version);
  const items7 = [guildId, stateFromStores1];
  const memo2 = noop.useMemo(() => {
    const arr = getGuildsBarGuildMenuItemsDefault(guildId, stateFromStores1);
    const items = [
      ...arr.map((label) => ({ name: label.label, label: label.label, action: label.action })),
      ...getGuildsBarGuildAccessibilityActionsDefault(guildId, stateFromStores1).map((name) => ({
        name: name.name,
        label: name.label,
        action: name.action,
      })),
    ];
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
      },
    };
  }, items7);
  ({ accessibilityActions, onAccessibilityAction } = memo2);
  const guildsBarAnimatedWrapperStyles = obj1.useGuildsBarAnimatedWrapperStyles({
    disableSelectedColor: true,
    disableBGColor: true,
  });
  let tmp2 = guildId;
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
      obj = { originY: targetOriginY, height: null };
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
      obj1 = { animations: obj, initialValues: { originY: guildId.currentOriginY, height: guildId.currentHeight } };
      obj.height = targetHeight;
      return obj1;
    }
  }
  obj = {
    dragDropInProgress,
    sharedId: sharedValue,
    guildId,
    isDragTarget,
    withSpring: guildId(drawerOpen[30]).withSpring,
    TRANSITION_PHYSICS: stateFromStores1,
  };
  R.__closure = obj;
  R.__workletHash = 14096669603718;
  R.__initData = __initData;
  const items8 = [guildId, sharedValue, isDragTarget, dragDropInProgress];
  const callback1 = noop.useCallback(R, items8);
  obj = {
    id: guildId,
    draggedItemSize: itemSize,
    accessibilityActions,
    onAccessibilityAction,
    cutouts: null,
    selected: null,
    isDragTarget: null,
    dragState: null,
    sharedId: null,
    circle: false,
    overState: null,
    unread: null,
    label: null,
    config: null,
    styles: null,
    isDragPreview: null,
    layout: null,
    externalChildren: null,
    expandedChildren: null,
    children: null,
  };
  let tmp22;
  const obj7 = guildId(drawerOpen[29]);
  if (!isDragTarget) {
    tmp22 = cutouts;
  }
  obj.cutouts = tmp22;
  obj.selected = selected;
  obj.isDragTarget = isDragTarget;
  obj.dragState = dragState;
  obj.sharedId = sharedValue;
  obj.overState = overState;
  obj.unread = unread;
  obj.label = memo1;
  obj.config = memo;
  obj.styles = guildsBarAnimatedWrapperStyles;
  if (!flag) {
    flag = isDragTarget;
  }
  obj.isDragPreview = flag;
  obj.layout = callback1;
  obj1 = { children: null };
  const items9 = [badgeTopRight, badgeBottomRight];
  obj1.children = items9;
  obj.externalChildren = closure_15(closure_14, obj1);
  let tmp20Result;
  if (enableHome) {
    if (!flag2) {
      obj2 = { guildId, onActiveHookChange: callback };
      tmp20Result = tmp20(tmp4(tmp3[17]), obj2);
    }
  }
  obj.expandedChildren = tmp20Result;
  if (isUnavailable) {
    obj3 = { source: null, style: null };
    let tmp4Result = tmp4(tmp3[31]);
    obj3.source = tmp4(tmp3[32]);
    obj3.style = tmp.guildIcon;
    tmp20Result = tmp20(tmp4Result, obj3);
  } else if (null != tmp14) {
    obj4 = { source: tmp14, style: tmp.guildIcon };
    tmp20Result = tmp20(tmp4(tmp3[31]), obj4);
  } else {
    obj5 = { value: guildName, selected, animate: selected, size: null };
    tmp4Result = tmp4(tmp3[19]);
    obj5.size = tmp2(tmp3[19]).GuildIconSizes.LARGE;
    tmp20Result = tmp20(tmp4Result, obj5);
  }
  obj.children = tmp20Result;
  return closure_16(token(drawerOpen[14]), obj);
});
