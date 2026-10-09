// discord_app/modules/guilds_bar/native/GuildsBarGuild.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import AlertActionCreatorsDefault from "../../../actions/AlertActionCreators.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import GuildIcon from "../../guild/native/GuildIcon.tsx";
import getGuildsBarGuildMenuItemsDefault from "utils/getGuildsBarGuildMenuItems.tsx";
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "utils/transitionGuildsBarToGuildOrOpenSelectedChannel.tsx";
import getGuildsBarGuildAccessibilityActionsDefault from "utils/getGuildsBarGuildAccessibilityActions.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildAvailabilityStore from "../../../stores/GuildAvailabilityStore.tsx";
import GuildReadStateStore from "../../../stores/GuildReadStateStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";
import SortedGuildStore from "../../../stores/SortedGuildStore.tsx";

require = fn;
const GuildRecord = fn(2082);
({ getGuildIconSource: closure_4, getGuildIconURL: hasOwnProperty } = GuildRecord);
const useItemDragState = fn(16648).useItemDragState;
const TRANSITION_PHYSICS = fn(16645).TRANSITION_PHYSICS;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ Fragment: closure_14, jsxs: closure_15, jsx: closure_16 } = jsxProd);
const createStyles = fn(5091);
let obj = { guildIcon: null };
let size = {
  width: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE,
  height: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE,
};
obj.guildIcon = size;
let closure_17 = createStyles.createStyles(obj);
let closure_18 = {
  code: 'function GuildsBarGuildTsx1(values){const{dragDropInProgress,sharedId,guildId,isDragTarget,withSpring,TRANSITION_PHYSICS}=this.__closure;var _guildId;const shouldAnimate=dragDropInProgress.get()&&sharedId.get()===guildId&&!isDragTarget;sharedId.set((_guildId=guildId)!==null&&_guildId!==void 0?_guildId:null);return{animations:{originY:shouldAnimate?withSpring(values.targetOriginY,TRANSITION_PHYSICS,"animate-always"):values.targetOriginY,height:shouldAnimate?withSpring(values.targetHeight,TRANSITION_PHYSICS,"animate-always"):values.targetHeight},initialValues:{originY:values.currentOriginY,height:values.currentHeight}};}',
};
const __initData = {
  code: "function GuildsBarGuildTsx2(values){const{dragDropInProgress,sharedId,guildId,isDragTarget,withSpring,TRANSITION_PHYSICS}=this.__closure;var _guildId;const shouldAnimate=dragDropInProgress.get()&&sharedId.get()===guildId&&!isDragTarget;sharedId.set((_guildId=guildId)!==null&&_guildId!==void 0?_guildId:null);return{animations:{originY:shouldAnimate?withSpring(values.targetOriginY,TRANSITION_PHYSICS,'animate-always'):values.targetOriginY,height:shouldAnimate?withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always'):values.targetHeight},initialValues:{originY:values.currentOriginY,height:values.currentHeight}};}",
};
const ReactCompilerGating = fn(558);
size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarGuild.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function GuildsBarGuild(guildId) {
        const cResult = guildId(drawerOpen[14]).c(87);
        guildId = guildId.guildId;
        ({ isDragPreview, hideExpandedChildren } = guildId);
        closure_17();
        let obj = guildId(drawerOpen[14]);
        token = guildId(drawerOpen[15]).useToken(token(tmp2[12]).modules.mobile.GUILD_BAR_ITEM_SIZE);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { disableSelectedColor: true, disableBGColor: true };
          cResult[0] = obj2;
          let first = obj2;
        } else {
          first = cResult[0];
        }
        const tmpResult = guildId(drawerOpen[15]);
        guildId(drawerOpen[16]).useGuildsBarAnimatedWrapperStyles(first);
        const tmpResult4 = guildId(drawerOpen[16]);
        drawerOpen = guildId(drawerOpen[18]).useDrawerOpen(
          noop.useContext(tmp(tmp2[17]).HomeDrawerStateContext).enableHome,
        );
        noop = noop.useRef(tmp(tmp2[19]).HomeDrawerActiveHook.NONE);
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          class P {
            constructor(arg0) {
              closure_3.current = guildId;
              return;
            }
          }
          cResult[1] = P;
        } else {
          class P {
            constructor(arg0) {
              closure_3.current = guildId;
              return;
            }
          }
        }
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          class P {
            constructor(arg0) {
              closure_3.current = guildId;
              return;
            }
          }
          const items = [SelectedGuildStore, GuildAvailabilityStore, GuildReadStateStore];
          cResult[2] = items;
          const tmp10 = items;
        } else {
          class P {
            constructor(arg0) {
              closure_3.current = guildId;
              return;
            }
          }
        }
        if (cResult[3] !== guildId) {
          class B {
            constructor() {
              obj = {
                selected: closure_9.getGuildId() === guildId,
                isUnavailable: closure_6.isUnavailable(guildId),
                unread: closure_7.hasUnread(guildId),
                mentionCount: closure_7.getMentionCount(guildId),
                isMentionLowImportance: closure_7.getIsMentionLowImportance(guildId),
              };
              return obj;
            }
          }
          const items1 = [guildId];
          cResult[3] = guildId;
          cResult[4] = B;
          cResult[5] = items1;
          let tmp14 = items1;
        } else {
          class B {
            constructor() {
              obj = {
                selected: closure_9.getGuildId() === guildId,
                isUnavailable: closure_6.isUnavailable(guildId),
                unread: closure_7.hasUnread(guildId),
                mentionCount: closure_7.getMentionCount(guildId),
                isMentionLowImportance: closure_7.getIsMentionLowImportance(guildId),
              };
              return obj;
            }
          }
          tmp14 = cResult[5];
        }
        const tmpResult5 = guildId(drawerOpen[18]);
        const stateFromStoresObject = guildId(drawerOpen[20]).useStateFromStoresObject(tmp10, B, tmp14);
        const selected = stateFromStoresObject.selected;
        const isUnavailable = stateFromStoresObject.isUnavailable;
        ({ mentionCount, unread } = stateFromStoresObject);
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class B {
            constructor() {
              obj = {
                selected: closure_9.getGuildId() === guildId,
                isUnavailable: closure_6.isUnavailable(guildId),
                unread: closure_7.hasUnread(guildId),
                mentionCount: closure_7.getMentionCount(guildId),
                isMentionLowImportance: closure_7.getIsMentionLowImportance(guildId),
              };
              return obj;
            }
          }
          const items2 = [GuildStore];
          cResult[6] = items2;
        } else {
          class B {
            constructor() {
              obj = {
                selected: closure_9.getGuildId() === guildId,
                isUnavailable: closure_6.isUnavailable(guildId),
                unread: closure_7.hasUnread(guildId),
                mentionCount: closure_7.getMentionCount(guildId),
                isMentionLowImportance: closure_7.getIsMentionLowImportance(guildId),
              };
              return obj;
            }
          }
        }
        if (cResult[7] === guildId) {
          class B {
            constructor() {
              obj = {
                selected: closure_9.getGuildId() === guildId,
                isUnavailable: closure_6.isUnavailable(guildId),
                unread: closure_7.hasUnread(guildId),
                mentionCount: closure_7.getMentionCount(guildId),
                isMentionLowImportance: closure_7.getIsMentionLowImportance(guildId),
              };
              return obj;
            }
          }
        }
        const fn = function j() {
          guild = GuildStore.getGuild(guildId);
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
        };
        const items3 = [guildId, token, selected];
        cResult[7] = guildId;
        cResult[8] = token;
        cResult[9] = selected;
        cResult[10] = items3;
        cResult[11] = fn;
        const tmpResult6 = guildId(drawerOpen[20]);
      }
    : function GuildsBarGuild(guildId) {
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
        token = guildId(drawerOpen[15]).useToken(token(drawerOpen[12]).modules.mobile.GUILD_BAR_ITEM_SIZE);
        let obj = guildId(drawerOpen[15]);
        let tmp2 = guildId;
        let obj2 = guildId(drawerOpen[16]);
        const enableHome = noop.useContext(guildId(drawerOpen[17]).HomeDrawerStateContext).enableHome;
        const guildsBarAnimatedWrapperStyles = guildId(drawerOpen[16]).useGuildsBarAnimatedWrapperStyles({
          disableSelectedColor: true,
          disableBGColor: true,
        });
        drawerOpen = guildId(drawerOpen[18]).useDrawerOpen(enableHome);
        noop = noop.useRef(guildId(drawerOpen[19]).HomeDrawerActiveHook.NONE);
        const callback = noop.useCallback((current) => {
          closure_3.current = current;
        }, []);
        let obj3 = guildId(drawerOpen[18]);
        let items = [mediaState, mentionCount, unread];
        const items1 = [guildId];
        const stateFromStoresObject = guildId(drawerOpen[20]).useStateFromStoresObject(
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
        const obj4 = guildId(drawerOpen[20]);
        const items2 = [guildName];
        const items3 = [guildId, token, selected];
        const stateFromStores = guildId(drawerOpen[20]).useStateFromStores(
          items2,
          () => {
            guild = GuildStore.getGuild(guildId);
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
          token(drawerOpen[22]),
        );
        guildName = stateFromStores.guildName;
        ({ asset, icon } = stateFromStores);
        const tmp11 = token(drawerOpen[23])(guildId, mentionCount, stateFromStoresObject.isMentionLowImportance);
        mediaState = tmp11.mediaState;
        const items4 = [guildId, isUnavailable, drawerOpen];
        ({ badgeTopRight, badgeBottomRight, cutouts } = tmp11);
        const items5 = [guildName, mentionCount, unread, mediaState];
        const memo = noop.useMemo(
          () => ({
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
                      token(drawerOpen[26]).track(sharedValue.HOME_DRAWER_GUILD_CLICKED, obj);
                      const obj2 = token(drawerOpen[26]);
                    }
                  }
                  token(drawerOpen[27])(guild_id);
                }
              }
              const obj3 = { title: null, body: null };
              const intl = guildId(drawerOpen[25]).intl;
              obj3.title = intl.string(guildId(drawerOpen[25]).t.R0RpRX);
              const intl2 = guildId(drawerOpen[25]).intl;
              obj3.body = intl2.string(guildId(drawerOpen[25]).t.m9gRVN);
              return token(drawerOpen[24]).show(obj3);
            },
          }),
          items4,
        );
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
        const tmp14 = token(drawerOpen[28])(guildId, icon, asset);
        const tmp15 = dragDropInProgress(guildId, flag);
        const isDragTarget = tmp15.isDragTarget;
        dragDropInProgress = tmp15.dragDropInProgress;
        ({ dragState, overState, itemSize } = tmp15);
        const obj5 = guildId(drawerOpen[20]);
        const items6 = [isDragTarget];
        const stateFromStores1 = guildId(drawerOpen[20]).useStateFromStores(
          items6,
          () => isDragTarget.getGuildsTree().version,
        );
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
        const obj6 = guildId(drawerOpen[20]);
        const sharedValue = guildId(drawerOpen[31]).useSharedValue(guildId);
        class G {
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
              obj = closure_0(closure_2[32]);
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
              obj3 = closure_0(closure_2[32]);
              tmp13 = TRANSITION_PHYSICS;
              str2 = "animate-always";
              targetHeight = obj3.withSpring(guildId.targetHeight, TRANSITION_PHYSICS, "animate-always");
            } else {
              targetHeight = guildId.targetHeight;
            }
            obj5 = {
              animations: obj1,
              initialValues: { originY: guildId.currentOriginY, height: guildId.currentHeight },
            };
            obj1.height = targetHeight;
            return obj5;
          }
        }
        const obj7 = guildId(drawerOpen[31]);
        G.__closure = {
          dragDropInProgress,
          sharedId: sharedValue,
          guildId,
          isDragTarget,
          withSpring: guildId(drawerOpen[32]).withSpring,
          TRANSITION_PHYSICS: stateFromStores1,
        };
        G.__workletHash = 15285764080325;
        G.__initData = __initData;
        const items8 = [guildId, sharedValue, isDragTarget, dragDropInProgress];
        const callback1 = noop.useCallback(G, items8);
        const obj9 = {
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
        const obj8 = {
          dragDropInProgress,
          sharedId: sharedValue,
          guildId,
          isDragTarget,
          withSpring: guildId(drawerOpen[32]).withSpring,
          TRANSITION_PHYSICS: stateFromStores1,
        };
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
            tmp20Result = closure_16(tmp4(tmp3[19]), obj11);
          }
        }
        obj9.expandedChildren = tmp20Result;
        if (isUnavailable) {
          const obj12 = { source: tmp4(tmp3[34]), style: tmp.guildIcon };
          let tmp20Result2 = closure_16(tmp4(tmp3[33]), obj12);
          const tmp4Result = tmp4(tmp3[33]);
        } else if (null != tmp14) {
          const obj13 = { source: tmp14, style: tmp.guildIcon };
          tmp20Result2 = closure_16(tmp4(tmp3[33]), obj13);
        } else {
          const obj14 = { value: guildName, selected, animate: selected, size: tmp2(tmp3[21]).GuildIconSizes.LARGE };
          tmp20Result2 = closure_16(tmp4(tmp3[21]), obj14);
          const tmp4Result2 = tmp4(tmp3[21]);
        }
        obj9.children = tmp20Result2;
        return closure_16(token(drawerOpen[16]), obj9);
      },
);
