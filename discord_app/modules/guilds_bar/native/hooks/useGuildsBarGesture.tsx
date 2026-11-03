// discord_app/modules/guilds_bar/native/hooks/useGuildsBarGesture.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import SentryUtilsDefault from "../../../../utils/SentryUtils.native.tsx";
import ReactBatchUpdates from "../../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import _mod1705 from "../../../../../_runtime/metro/01705__.js";
import shared from "../../../../design/shared.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import useIsScreenReaderEnabled from "../../../a11y/native/useIsScreenReaderEnabled.native.tsx";
import LegacyBaseButton from "../../../../../_runtime/05426_LegacyBaseButton.js";
import FastList from "../../../../lib/native/FastList.tsx";
import ContextMenuState from "../../../../design/components/ContextMenu/native/ContextMenuState.native.tsx";
import roundToNearestPixelDefault from "../../../voice_panel/native/utils/roundToNearestPixel.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import SortedGuildStore from "../../../../stores/SortedGuildStore.tsx";
import GuildsBarDnDStore from "../GuildsBarDnDStore.tsx";
import debounce from "../../../../../_runtime/00551_debounce.js";

const require = globalThis.__r;

require = fn;
function getDropIndex(dragNode, dragNode2, overState) {
  let tmp = dragNode2;
  if ("self" === overState) {
    tmp = dragNode;
  }
  const flattenedGuildFolderList = SortedGuildStore.getFlattenedGuildFolderList();
  let num = -1;
  for (const item10012 of flattenedGuildFolderList) {
    num = num + 1;
    if (item10012.id === tmp.id) {
      obj.return();
      break;
    }
    let str = "after";
    if ("after" !== arg2) {
      let str2 = "convert-after";
      if ("convert-after" !== arg2) {
        return num;
      }
    }
    return num + 1;
  }
}
function triggerHapticsAndAnnouncementsIfNecessary(type) {
  type = type.type;
  if ("drag-start" === type) {
    const node = type.node;
    const type4 = node.type;
    if (GuildsNodeType.GUILD === type4) {
      guild = GuildStore.getGuild(node.id);
      let name1;
      if (guild != null) {
        name1 = guild.name;
      }
      if (name1 == null) {
        const intl11 = util.intl;
        name1 = intl11.string(util.t.fKYRlM);
      }
      let tmp39 = name1;
    } else if (tmp38.FOLDER === type4) {
      let name4 = node.name;
      if (name4 == null) {
        const intl10 = util.intl;
        name4 = intl10.string(util.t.ebAnWE);
      }
      tmp39 = name4;
    }
    if (null != tmp39) {
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      const intl12 = util.intl;
      const obj2 = { itemName: tmp39 };
      AccessibilityAnnouncer.announce(intl12.formatToPlainString(util.t["vHD/Je"], obj2));
    }
    closure_15(HapticUtils.HapticFeedbackTypes.DRAG_AND_DROP_START);
    closure_15.flush();
  } else if ("drag-move" === type) {
    let type1;
    if (global != null) {
      type1 = global.type;
    }
    let type6;
    if (global != null) {
      type6 = global.type;
    }
    if ("drag-move" === type6) {
      let tmp7 = getDropIndex(global.dragNode, global.overNode, global.overState);
      let tmp8 = getDropIndex;
    } else {
      tmp7 = getDropIndex(type.dragNode, type.dragNode, "self");
      tmp8 = getDropIndex;
    }
    let type7;
    if (global != null) {
      type7 = global.type;
    }
    let str3 = "self";
    if ("drag-start" !== type7) {
      let str4;
      if (global != null) {
        str4 = global.overState;
      }
      if (str4 == null) {
        str4 = "self";
      }
      str3 = str4;
    }
    if (tmp7 !== tmp8Result) {
      let fKYRlM = dependencyMap;
      closure_15(HapticUtils.HapticFeedbackTypes.DRAG_AND_DROP_MOVE);
      ({ dragNode, overNode, overState: overState2 } = type);
      if ("convert-before" !== overState2) {
        if ("convert-after" !== overState2) {
          if ("drop-into" === overState2) {
            let formatToPlainStringResult;
            if (overNode.type === GuildsNodeType.FOLDER) {
              const intl6 = util.intl;
              const obj3 = { folderName: overNode.name };
              formatToPlainStringResult = intl6.formatToPlainString(util.t.uLDoxR, obj3);
            }
            let formatToPlainStringResult1 = formatToPlainStringResult;
          } else if ("before" === overState2) {
            const intl3 = util.intl;
            const type2 = overNode.type;
            if (GuildsNodeType.GUILD === type2) {
              const guild1 = GuildStore.getGuild(overNode.id);
              let name5;
              if (guild1 != null) {
                name5 = guild1.name;
              }
              if (name5 == null) {
                const intl5 = util.intl;
                name5 = intl5.string(util.t.fKYRlM);
              }
              let tmp26 = name5;
            } else if (tmp25.FOLDER === type2) {
              let name2 = overNode.name;
              if (name2 == null) {
                const intl4 = util.intl;
                name2 = intl4.string(util.t.ebAnWE);
              }
              tmp26 = name2;
            }
            const obj4 = { itemName: tmp26 };
            formatToPlainStringResult1 = intl3.formatToPlainString(util.t["A5aDw+"], obj4);
          } else if ("after" === overState2) {
            const intl14 = util.intl;
            const type5 = overNode.type;
            if (GuildsNodeType.GUILD === type5) {
              const guild2 = GuildStore.getGuild(overNode.id);
              let name6;
              if (guild2 != null) {
                name6 = guild2.name;
              }
              if (name6 == null) {
                const intl2 = util.intl;
                name6 = intl2.string(util.t.fKYRlM);
              }
              let tmp20 = name6;
            } else if (tmp66.FOLDER === type5) {
              let name = overNode.name;
              if (name == null) {
                const intl = util.intl;
                name = intl.string(util.t.ebAnWE);
              }
              tmp20 = name;
            }
            obj = { itemName: tmp20 };
            formatToPlainStringResult1 = intl14.formatToPlainString(util.t.w8FN92, obj);
          }
          if (null != formatToPlainStringResult1) {
            closure_16(formatToPlainStringResult1);
          }
        }
      }
      const intl7 = util.intl;
      const type3 = overNode.type;
      if (GuildsNodeType.GUILD === type3) {
        const guild3 = GuildStore.getGuild(overNode.id);
        let name7;
        if (guild3 != null) {
          name7 = guild3.name;
        }
        if (name7 == null) {
          const intl9 = util.intl;
          fKYRlM = util.t.fKYRlM;
          name7 = intl9.string(fKYRlM);
        }
        let tmp33 = name7;
      } else if (tmp32.FOLDER === type3) {
        let name3 = overNode.name;
        if (name3 == null) {
          const intl8 = util.intl;
          name3 = intl8.string(util.t.ebAnWE);
        }
        tmp33 = name3;
      }
      overNode = { itemName: tmp33 };
      intl7.formatToPlainString(util.t.qiQ0QI, overNode);
    } else {
      const overState = type.overState;
      let startsWithResult = null != overState;
      if (startsWithResult) {
        startsWithResult = overState.startsWith("convert");
      }
      let startsWithResult1 = null != str3;
      if (startsWithResult1) {
        startsWithResult1 = str3.startsWith("convert");
      }
    }
    tmp8Result = tmp8(type.dragNode, type.overNode, type.overState);
  } else if ("drag-drop" === type) {
    closure_15(HapticUtils.HapticFeedbackTypes.DRAG_AND_DROP_END);
    closure_15.flush();
    closure_16.flush();
    const AccessibilityAnnouncer2 = shared.AccessibilityAnnouncer;
    const intl13 = util.intl;
    AccessibilityAnnouncer2.announce(intl13.string(util.t.lMkmz7));
  }
  let tmp57;
  if ("drag-drop" !== type.type) {
    tmp57 = type;
  }
  global = tmp57;
}
function getItemAndNodeFromTouchEvent(absoluteY, arg1, c4, map) {
  state = GuildsBarDnDStore.getState();
  ({ dragRegion, scrollPosition } = state);
  let GUILDS = scrollPosition.get() + absoluteY;
  let bound = GUILDS;
  if (arg1) {
    const range = dragRegion.get();
    const _Math = Math;
    const _Math2 = Math;
    bound = Math.max(Math.min(GUILDS, range.max - 2), range.min + 2);
  }
  const current = noop.current;
  let sectionItemFromPosition;
  if (current != null) {
    sectionItemFromPosition = current.getSectionItemFromPosition(bound, map);
  }
  if (sectionItemFromPosition == null) {
    sectionItemFromPosition = { item: "disabled", positionPercentage: false };
  }
  const item = sectionItemFromPosition.item;
  if (null == item) {
    obj = { item, overPercentage: null, node: null, pointerPosition: null };
    const _Math3 = Math;
    obj.overPercentage = Math.floor(100 * tmp5) / 100;
    obj.node = undefined;
    obj.pointerPosition = bound;
    return obj;
  } else if (null != item) {
    GUILDS = constants.GUILDS;
    if (item.section >= GUILDS) {
      GUILDS = SortedGuildStore.getFastListGuildFolders()[item.section - tmp7.GUILDS];
      if (null != GUILDS) {
        const type = item.type;
        if (FastList.FastListItemTypes.SECTION !== type) {
          if (FastList.FastListItemTypes.ITEM === type) {
            if (GUILDS.type !== GuildsNodeType.ROOT) {
              let tmp12 = GUILDS;
              if (GUILDS.type !== GuildsNodeType.FOLDER) {
              } else {
                tmp12 = GUILDS.children[item.item];
              }
            }
          }
        }
      }
    }
  }
}
const Dimensions = fn(17).Dimensions;
const GuildsNodeType = fn(6892).GuildsNodeType;
const GuildsBarConstants = fn(18503);
({ FastListRenderSections: closure_10, useGuildWrapperSize: closure_11 } = GuildsBarConstants);
let c12 = 160;
let obj = { pan: null, itemMeasurements: null, activeIndex: null };
let module_1652 = fn(1652);
obj.pan = module_1652.makeMutable(-1);
module_1652 = fn(1652);
obj.itemMeasurements = module_1652.makeMutable([]);
module_1652 = fn(1652);
obj.activeIndex = module_1652.makeMutable(-1);
let closure_15 = debounce(fn(5383).triggerHapticFeedback, 16);
let closure_16 = debounce((intl) => {
  const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
  AccessibilityAnnouncer.announce(intl);
}, 500);
let apply = fn(12);
let closure_17 = apply.throttle((data) => {
  SentryUtilsDefault.addBreadcrumb({ category: "GuildsBarGesture", message: "handleGuildDrag started", data });
}, 2000);
apply = fn(12);
let closure_18 = apply.throttle((data) => {
  SentryUtilsDefault.addBreadcrumb({ category: "GuildsBarGesture", message: "handleGestureEnd started", data });
}, 3000);
let global;
let closure_23 = {
  code: "(function useGuildsBarGestureTsx1({timeSincePreviousFrame:timeSincePreviousFrame}){let[gestureState,pushScrollAccumulatedTime,MS_PER_FRAME_60FPS,pushScroll,scrollTo,scrollerRef,roundToNearestPixel,scrollPosition]=this.__closure;if(timeSincePreviousFrame==null||timeSincePreviousFrame<=0||gestureState.get().mode!=='drag'){return;}pushScrollAccumulatedTime.set(pushScrollAccumulatedTime.get()+timeSincePreviousFrame);if(pushScrollAccumulatedTime.get()<MS_PER_FRAME_60FPS){return;}const scrollSpeed=1000*pushScroll.get();const timeInSeconds=pushScrollAccumulatedTime.get()/1000;pushScrollAccumulatedTime.set(0);scrollTo(scrollerRef,0,Math.max(roundToNearestPixel(scrollPosition.get()+timeInSeconds*scrollSpeed),0),false);})",
};
let closure_24 = {
  code: "(function useGuildsBarGestureTsx2(event,manager){let[scrollPosition,gestureState,dragRegion,scheduleOnRN,handleTouchesDown]=this.__closure;var _touch$absoluteY;const touch=event.changedTouches[0];const pointerY=((_touch$absoluteY=touch===null||touch===void 0?void 0:touch.absoluteY)!==null&&_touch$absoluteY!==void 0?_touch$absoluteY:0)+scrollPosition.get();if(touch==null||gestureState.get().mode==='cancel'||pointerY<dragRegion.get().min||pointerY>dragRegion.get().max){manager.fail();}else if(event.changedTouches.length===1){scheduleOnRN(handleTouchesDown,touch.absoluteX,touch.absoluteY);}})",
};
let closure_25 = {
  code: "(function useGuildsBarGestureTsx3(event,manager){let[gestureState]=this.__closure;if(gestureState.get().mode==='cancel'){manager.fail();}})",
};
let closure_26 = {
  code: "(function useGuildsBarGestureTsx4({absoluteX:absoluteX,absoluteY:absoluteY}){let[gestureState,scheduleOnRN,handlePress]=this.__closure;if(gestureState.get().mode!=='cancel'){scheduleOnRN(handlePress,absoluteX,absoluteY);}})",
};
let closure_27 = {
  code: "(function useGuildsBarGestureTsx5(){let[gestureState,scheduleOnRN,handleGestureEnd]=this.__closure;if(gestureState.get().mode==='cancel'){scheduleOnRN(handleGestureEnd,'cancel');}})",
};
let closure_28 = {
  code: "(function useGuildsBarGestureTsx6(){let[gestureState,scheduleOnRN,handleGestureEnd]=this.__closure;if(gestureState.get().mode==null||gestureState.get().mode==='cancel'){scheduleOnRN(handleGestureEnd,'cancel');}})",
};
let closure_29 = {
  code: "(function useGuildsBarGestureTsx7(event,manager){let[gestureState,dragDropInProgress,DRAG_GESTURE_MINIMUM_DISTANCE,scheduleOnRN,handleContextMenuDrag,handleGuildDrag]=this.__closure;const touch=event.changedTouches[0];if(gestureState.get().mode!=='pressed'||touch==null){if(gestureState.get().mode==='cancel'||touch==null){manager.fail();dragDropInProgress.set(false);}return;}const diffX=touch.absoluteX-gestureState.get().initialX;const absDiffY=Math.abs(touch.absoluteY-gestureState.get().absoluteY);if(diffX>DRAG_GESTURE_MINIMUM_DISTANCE&&diffX>absDiffY){gestureState.set({...gestureState.get(),mode:'contextmenu',absoluteX:touch.absoluteX,absoluteY:touch.absoluteY});dragDropInProgress.set(false);manager.activate();scheduleOnRN(handleContextMenuDrag,touch.absoluteX,touch.absoluteY);}else if(absDiffY>DRAG_GESTURE_MINIMUM_DISTANCE){gestureState.set({...gestureState.get(),mode:'drag',initialX:touch.absoluteX,initialY:touch.absoluteY,absoluteX:touch.absoluteX,absoluteY:touch.absoluteY});manager.activate();dragDropInProgress.set(true);scheduleOnRN(handleGuildDrag,touch.absoluteY);}})",
};
let closure_30 = {
  code: "(function useGuildsBarGestureTsx8({absoluteX:absoluteX,absoluteY:absoluteY}){let[gestureState,listInsets,GESTURE_ACCELERATION_RANGE,windowSize,scheduleOnRN,handleGuildDrag,handleContextMenuDrag]=this.__closure;if(gestureState.get().mode==='drag'){if(absoluteX!==gestureState.get().absoluteX||absoluteY!==gestureState.get().absoluteY){let{initialY:initialY}=gestureState.get();const minPushRange=listInsets.get().start+GESTURE_ACCELERATION_RANGE;const maxPushRange=windowSize-listInsets.get().end-GESTURE_ACCELERATION_RANGE;if(initialY<minPushRange&&absoluteY>initialY){initialY=absoluteY;}else if(initialY>maxPushRange&&absoluteY<initialY){initialY=absoluteY;}gestureState.set({...gestureState.get(),absoluteX:absoluteX,absoluteY:absoluteY,initialY:initialY});scheduleOnRN(handleGuildDrag,absoluteY);}}else if(gestureState.get().mode==='contextmenu'){scheduleOnRN(handleContextMenuDrag,absoluteX,absoluteY);}})",
};
let closure_31 = {
  code: "(function useGuildsBarGestureTsx9(){let[gestureState,scheduleOnRN,handleGestureEnd]=this.__closure;if(gestureState.get().mode==='drag'){scheduleOnRN(handleGestureEnd,'drop');}else if(gestureState.get().mode==='contextmenu'){scheduleOnRN(handleGestureEnd,'contextmenu-open');}else{scheduleOnRN(handleGestureEnd,'cancel');}})",
};
let closure_32 = {
  code: "(function useGuildsBarGestureTsx10(){let[scheduleOnRN,handleGestureEnd]=this.__closure;scheduleOnRN(handleGestureEnd,'cancel');})",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarGesture.tsx");

export default function useGuildsBarGesture() {
  gesture = require("useHomeDrawerGesture").useHomeDrawerState().gesture;
  _require = gesture;
  let tmp3 = listInsets();
  obj = require("useHomeDrawerGesture");
  let tmp = _require;
  const token = require("useToken").useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
  let obj2 = require("useToken");
  const scrollerRef = require("../../../../../_runtime/metro/01652__.js").useAnimatedRef();
  const fastListRef = noop.useRef(null);
  noop = fastListRef;
  let obj3 = require("../../../../../_runtime/metro/01652__.js");
  const sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  let obj5 = require("../../../../../_runtime/metro/01652__.js");
  const sharedValue1 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  let tmp9 = frameCallback(
    (gestureState) => ({
      gestureState: gestureState.gestureState,
      scrollPosition: gestureState.scrollPosition,
      dragRegion: gestureState.dragRegion,
      windowSize: gestureState.windowSize,
      listInsets: gestureState.listInsets,
      dragDropInProgress: gestureState.dragDropInProgress,
    }),
    require("../../../../../_runtime/metro/05056__.js").shallow,
  );
  let gestureState = tmp9.gestureState;
  let scrollPosition = tmp9.scrollPosition;
  let dragRegion = tmp9.dragRegion;
  const windowSize = tmp9.windowSize;
  listInsets = tmp9.listInsets;
  const dragDropInProgress = tmp9.dragDropInProgress;
  const persistantKeys = frameCallback((arg0) => {
    ({ dropSpecs, dragSpecs } = arg0);
    const set = new Set();
    if (null != dragSpecs) {
      set.add(dragSpecs.item.recyclerKey);
    }
    if (null != dropSpecs) {
      set.add(dropSpecs.dragRecyclerKey);
    }
    let arr;
    if (set.size > 0) {
      const _Array = Array;
      arr = Array.from(set);
    }
    return arr;
  }, require("../../../../../_runtime/metro/05056__.js").shallow);
  const effect = noop.useEffect(() => {
    const current = _undefined5.current;
    scrollPosition = undefined;
    if (current != null) {
      scrollPosition = current.computeScrollPosition(constants.GUILDS);
    }
    const current2 = _undefined5.current;
    let sections;
    if (current2 != null) {
      sections = current2.props.sections;
    }
    if (sections == null) {
      sections = [];
    }
    const diff = sections.length - 1;
    let num = sections[diff];
    if (num == null) {
      num = 0;
    }
    const current3 = _undefined5.current;
    let scrollPosition1;
    if (current3 != null) {
      scrollPosition1 = current3.computeScrollPosition(diff, tmp5);
    }
    let num2;
    if (scrollPosition != null) {
      num2 = scrollPosition.scrollPosition;
    }
    if (num2 == null) {
      num2 = 0;
    }
    let num3 = Infinity;
    if (null != scrollPosition1) {
      num3 = scrollPosition1.scrollPosition + scrollPosition1.size;
    }
    dragRegion = GuildsBarDnDStore.getState().dragRegion;
    const range = dragRegion.get();
    if (!tmp7) {
      const range1 = { min: num2, max: num3 };
      const result = dragRegion.set(range1);
    }
    tmp7 = num2 === range.min && num3 === range.max;
  });
  let obj6 = require("../../../../../_runtime/metro/01652__.js");
  items = [
    closure_23,
    gestureState,
    sharedValue1,
    16.666666666666668,
    sharedValue,
    require("../../../../../_runtime/metro/01652__.js").scrollTo,
    scrollerRef,
    roundToNearestPixelDefault,
    scrollPosition,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items;
  function useGuildsBarGestureTsx1(timeSincePreviousFrame) {
    timeSincePreviousFrame = timeSincePreviousFrame.timeSincePreviousFrame;
    if (null != timeSincePreviousFrame) {
      if (timeSincePreviousFrame > 0) {
        if ("drag" === _undefined.get().mode) {
          const result = _undefined2.set(_undefined2.get() + timeSincePreviousFrame);
          if (_undefined2.get() >= c2) {
            const result1 = 1000 * _undefined4.get();
            const result2 = _undefined2.get() / 1000;
            const result3 = _undefined2.set(0);
            const _Math = Math;
            _undefined5(c5, 0, Math.max(_undefined7(_undefined8.get() + result2 * result1), 0), false);
          }
        }
      }
    }
  }
  let items1 = [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20];
  useGuildsBarGestureTsx1.__closure = items1;
  useGuildsBarGestureTsx1.__workletHash = 2533042180415;
  useGuildsBarGestureTsx1.__initData = tmp12;
  frameCallback = require("../../../../../_runtime/metro/01652__.js").useFrameCallback(useGuildsBarGestureTsx1, false);
  let items2 = [sharedValue, sharedValue1, frameCallback];
  state = obj4.useCallback((event) => {
    const state1 = GuildsBarDnDStore.getState();
    const dragSpecs = state1.dragSpecs;
    ({ overSpecs, gestureState, dragDropInProgress } = state1);
    const result = _undefined6.set(0);
    const result1 = _undefined7.set(0);
    if (frameCallback.isActive) {
      frameCallback.setActive(false);
    }
    if ("cancel" === event) {
      let obj2 = { event, dragSpecs, overSpecs, gestureState: gestureState.get() };
      callback4(obj2);
    } else {
      const obj5 = { category: "GuildsBarGesture", message: "handleGestureEnd started", data: null };
      const obj6 = { event, dragSpecs, overSpecs, gestureState: gestureState.get() };
      obj5.data = obj6;
      SentryUtilsDefault.addBreadcrumb(obj5);
    }
    if ("drop" === event) {
      if (null != overSpecs) {
        if (null != dragSpecs) {
          const item2 = dragSpecs.item;
          const item3 = overSpecs.item;
          const type2 = item2.type;
          if (FastList.FastListItemTypes.SECTION === type2) {
            const type = item3.type;
            if (FastList.FastListItemTypes.SECTION === type) {
              let str = "before";
              let str2 = "before";
              if (item3.section >= item2.section) {
                let str3 = "after";
                let str4 = "after";
                if (item3.section <= item2.section) {
                  if (item3.item >= item2.item) {
                    if (item3.item <= item2.item) {
                      let str5;
                      if (item3.item === item2.item) {
                        str5 = "self";
                      }
                      str3 = str5;
                    }
                    str = str3;
                  }
                  str4 = str;
                }
                str2 = str4;
              }
              const tmp9 = str2;
            }
          }
          let num = 0;
          if ("after" === tmp9) {
            num = dragSpecs.item.layoutSize;
          }
          if ("after" === overSpecs.state) {
            let layoutStart = overSpecs.item.layoutStart + dragSpecs.itemSize;
          } else {
            layoutStart = overSpecs.item.layoutStart;
          }
          const dropPosition = layoutStart - num;
          const node = dragSpecs.node;
          const node2 = overSpecs.node;
          c4 = tmp10;
          let tmp11 = "convert-before" === overSpecs.state;
          if (!tmp11) {
            tmp11 = "convert-after" === overSpecs.state;
          }
          if (!tmp11) {
            tmp11 = "drop-into" === overSpecs.state;
          }
          closure_5 = tmp11;
          state = overSpecs.state;
          if ("self" !== state) {
            if (null != state) {
              let id = node2.id;
              let id1 = id;
              if (node.type === GuildsNodeType.FOLDER) {
                if (node2.type === GuildsNodeType.GUILD) {
                  if (null != node2.parentId) {
                    id1 = node2.parentId;
                  }
                  ReactBatchUpdates.batchUpdates(() => {
                    if (node.id !== id1) {
                      obj = dropPosition(node[21]);
                      const id = node.id;
                      let tmp6 = closure_5;
                      if (!tmp6) {
                        tmp6 = c4;
                      }
                      obj.moveById(id, id1, tmp6, closure_5);
                      node2(function* () {
                        yield v3(tmp11[22]).saveGuildFolders(compatibleGuildFolders.getCompatibleGuildFolders());
                        if (1 === tmp6) {
                          c3 = 0;
                          v3 = 3;
                        } else if (arg0 === 1) {
                          v3 = 3;
                          throw value;
                        } else if (arg0 !== 2) {
                          c3 = 0;
                        }
                        return value;
                      })();
                    }
                    state = dragRegion.getState();
                    const obj2 = {
                      dragNode: node,
                      overNode: node2,
                      dropPosition,
                      dragRecyclerKey: null,
                      itemSize: null,
                      overState: null,
                    };
                    const item = dragSpecs.item;
                    let str;
                    if (item != null) {
                      str = item.recyclerKey;
                    }
                    if (str == null) {
                      str = "";
                    }
                    obj2.dragRecyclerKey = str;
                    obj2.itemSize = dragSpecs.itemSize;
                    obj2.overState = state;
                    state.dropStart(obj2);
                  });
                  const obj7 = { type: "drag-drop", dragNode: node, overNode: node2, overState: state };
                  triggerHapticsAndAnnouncementsIfNecessary(obj7);
                  const tmp34Result = ReactBatchUpdates;
                }
              }
              if (tmp16) {
                c4 = false;
                const first = node2.children[0];
                id1 = undefined;
                if (first != null) {
                  id1 = first.id;
                }
                if (id1 == null) {
                  id1 = id;
                }
              }
              tmp16 = node2.type === GuildsNodeType.FOLDER && node2.expanded && tmp10;
            }
          }
          state2 = GuildsBarDnDStore.getState();
          const obj8 = {
            dragNode: node,
            overNode: node,
            dropPosition: null,
            itemSize: null,
            dragRecyclerKey: null,
            overState: "self",
          };
          ({ itemTop: obj9.dropPosition, itemSize: obj9.itemSize, item } = dragSpecs);
          let str11;
          if (item != null) {
            str11 = item.recyclerKey;
          }
          if (str11 == null) {
            str11 = "";
          }
          obj8.dragRecyclerKey = str11;
          state2.dropStart(obj8);
          const obj10 = { type: "drag-drop", dragNode: node, overNode: node, overState: "self" };
          triggerHapticsAndAnnouncementsIfNecessary(obj10);
        }
      }
    }
    if ("contextmenu-open" === event) {
      const ContextMenuStore = ContextMenuState.ContextMenuStore;
      const menu = ContextMenuStore.getState().menu;
      if (null != menu) {
        const activeIndex = menu.state.activeIndex;
        const close = menu.requestClose(-1 === activeIndex.get());
      }
    }
    state1.setStateShallow({ dragSpecs: "Array", overSpecs: "flexDirection" });
    value = gestureState.get();
    if (null != value.mode) {
      const obj11 = {};
      const merged = Object.assign(value);
      obj11.mode = null;
      const result2 = gestureState.set(obj11);
      const result3 = dragDropInProgress.set(false);
    }
  }, items2);
  const callback1 = obj4.useCallback((arg0, absoluteY) => {
    state = GuildsBarDnDStore.getState();
    ({ gestureState, dragDropInProgress } = state);
    value = gestureState.get();
    if (tmp3) {
      obj = {};
      const merged = Object.assign(value);
      obj.mode = "cancel";
      const result = gestureState.set(obj);
      const result1 = dragDropInProgress.set(false);
    }
  }, []);
  let items3 = [state, token];
  const callback2 = obj4.useCallback((absoluteX, absoluteY) => {
    state = dragRegion.getState();
    ({ dragSpecs, scrollPosition, gestureState, dragDropInProgress, setStateShallow } = state);
    let tmp2 = _undefined2;
    let result2 = _undefined3;
    _undefined2(_undefined3[12]).addBreadcrumb({
      category: "GuildsBarGesture",
      message: "handlePress started",
      data: { absoluteX, absoluteY },
    });
    obj = _undefined2(_undefined3[12]);
    let obj2 = { category: "GuildsBarGesture", message: "handlePress started", data: { absoluteX, absoluteY } };
    ({ item, node } = getItemAndNodeFromTouchEvent(absoluteY, false, c4));
    if (null != item) {
      if (null != node) {
        const obj3 = { node, item, itemTop: null, itemSize: null };
        ({ layoutStart: obj4.itemTop, layoutSize: obj4.itemSize } = item);
        const height = _undefined6.get("window").height;
        let sum = height;
        if (obj5.isAndroid()) {
          const rect = _undefined(result2[25]).getSafeAreaInsets();
          sum = height + (rect.top + rect.bottom);
          const tmp10Result = _undefined(result2[25]);
        }
        let activeIndex = state.activeIndex;
        let result = activeIndex.set(-1);
        obj5 = _undefined(result2[24]);
        if (tmp10Result4.getIsScreenReaderEnabled()) {
          const obj6 = { type: "drag-start", node };
          triggerHapticsAndAnnouncementsIfNecessary(obj6);
        } else {
          const type = node.type;
          if (scrollPosition.GUILD === type) {
            let version = _undefined7.getGuild(node.id);
            const obj7 = { key: node.id, title: null, items: null };
            let name;
            if (version != null) {
              name = version.name;
            }
            obj7.title = name;
            if (null != version) {
              tmp2 = tmp2(result2[27]);
              version = _undefined8.getGuildsTree().version;
              let items1 = tmp2(version.id, version);
            } else {
              items1 = [];
            }
            obj7.items = items1;
          } else {
            let tmp15;
            if (tmp14.FOLDER === type) {
              const obj8 = { key: null, title: null, items: null };
              ({ id: obj14.key, name: obj14.title } = node);
              obj8.items = _undefined(result2[28]).getGuildFolderMenuItems(node.id);
              tmp15 = obj8;
              const tmp10Result5 = _undefined(result2[28]);
            }
            items = tmp15.items;
            if (items.length > 0) {
              const sum1 = item.layoutStart - scrollPosition.get() + 6;
              let str2 = "below";
              if (0.65 * sum < sum1) {
                str2 = "above";
              }
              let diff = sum1;
              if ("below" !== str2) {
                diff = sum - sum1 - _undefined3;
              }
              const size = {
                key: null,
                title: null,
                items: null,
                x: null,
                y: null,
                positionX: "left",
                positionY: null,
                width: null,
                height: null,
                state: null,
                dividerIndexes: null,
                keyboardShouldPersistTaps: "never",
                requestClose: null,
                onClose: null,
              };
              const _HermesInternal = HermesInternal;
              size.key = "" + tmp20;
              size.title = tmp21;
              size.items = items;
              size.x = 12 + _undefined3 + 12;
              size.y = diff;
              size.positionY = str2;
              size.width = _undefined3;
              size.height = _undefined3;
              size.state = state;
              size.dividerIndexes = [];
              size.requestClose = function requestClose(c19) {
                if (!c19) {
                  const activeIndex = obj.activeIndex;
                  obj = items[activeIndex.get(activeIndex)];
                  if (obj != null) {
                    obj.action();
                  }
                }
                const activeIndex2 = obj.activeIndex;
                const result = activeIndex2.set(-1);
                ContextMenuState.hideContextMenu();
                callback("contextmenu-close");
              };
              size.onClose = function onClose() {};
              _undefined(result2[23]).showContextMenu(size);
              const tmp10Result6 = _undefined(result2[23]);
            }
          }
        }
        const obj9 = { dragSpecs: obj3, overSpecs: "Array", windowSize: sum };
        setStateShallow(obj9);
        const obj10 = { mode: "pressed", initialY: absoluteY, initialX: absoluteX, absoluteY, absoluteX };
        const result1 = gestureState.set(obj10);
        setStateShallow = _undefined(result2[9]);
        result2 = setStateShallow.triggerHapticFeedback(_undefined(result2[9]).HapticFeedbackTypes.IMPACT_MEDIUM);
        tmp10Result4 = _undefined(result2[26]);
      }
    }
    const obj11 = {};
    const merged = Object.assign(gestureState.get());
    obj11.mode = null;
    const result3 = gestureState.set(obj11);
    const result4 = dragDropInProgress.set(false);
    const tmp5 = getItemAndNodeFromTouchEvent(absoluteY, false, c4);
  }, items3);
  const callback3 = obj4.useCallback((arg0, arg1) => {
    const result = _undefined(_undefined3[23]).updateContextMenuState(arg0, arg1, callback);
  }, []);
  let items4 = [sharedValue, sharedValue1, frameCallback, tmp3];
  const callback4 = obj4.useCallback((absoluteY) => {
    state = GuildsBarDnDStore.getState();
    const overSpecs = state.overSpecs;
    ({ dragSpecs: obj2, windowSize } = state);
    ({ setStateShallow: c3, listInsets, gestureState } = state);
    callback3({ overSpecs, dragSpecs: obj2, windowSize, gestureState: gestureState.get() });
    if (null != obj2) {
      value = gestureState.get();
      let tmp66 = require;
      let batchUpdates = dependencyMap;
      let isScreenReaderEnabled = useIsScreenReaderEnabled.getIsScreenReaderEnabled();
      if (!isScreenReaderEnabled) {
        isScreenReaderEnabled = null == obj2.node;
      }
      if (!isScreenReaderEnabled) {
        isScreenReaderEnabled = null != overSpecs;
      }
      if (!isScreenReaderEnabled) {
        obj2 = { type: "drag-start", node: null };
        obj2.node = obj2.node;
        triggerHapticsAndAnnouncementsIfNecessary(obj2);
      }
      const _Map = Map;
      const map = new Map();
      let tmp11 = null != overSpecs;
      if (tmp11) {
        tmp11 = "self" !== overSpecs.state;
      }
      if (tmp11) {
        let result = map.set(obj2.item.recyclerKey, 0);
        const result1 = map.set(overSpecs.item.recyclerKey, 2 * obj2.itemSize);
      }
      ({ item, overPercentage, node } = getItemAndNodeFromTouchEvent(absoluteY, true, c4, map));
      let id;
      if (overSpecs != null) {
        id = overSpecs.node.id;
      }
      let id1;
      if (node != null) {
        id1 = node.id;
      }
      if (id !== id1) {
        const ContextMenuStore = tmp66(10006).ContextMenuStore;
        if (null != ContextMenuStore.getState().menu) {
          tmp66(10006).hideContextMenu();
          const tmp66Result = tmp66(10006);
        }
        node2 = node;
        overPercentage2 = overPercentage;
        item2 = item;
        if (null != item) {
          let recyclerKey;
          if (overSpecs != null) {
            recyclerKey = overSpecs.item.recyclerKey;
          }
          node2 = node;
          overPercentage2 = overPercentage;
          item2 = item;
          if (recyclerKey !== item.recyclerKey) {
            map.clear();
            if (obj2.item.recyclerKey !== item.recyclerKey) {
              let str2 = obj2.item.recyclerKey;
              if (str2 == null) {
                str2 = "";
              }
              const result2 = map.set(str2, 0);
              const result3 = map.set(item.recyclerKey, 2 * c1);
            }
            ({
              item: item2,
              overPercentage: overPercentage2,
              node: node2,
            } = getItemAndNodeFromTouchEvent(absoluteY, true, c4, tmp12));
            const tmp18Result = getItemAndNodeFromTouchEvent(absoluteY, true, c4, tmp12);
          }
        }
        const node3 = obj2.node;
        const item3 = obj2.item;
        let str3;
        if (null != item3) {
          if (null != item2) {
            if (null != node3) {
              if (null != node2) {
                str3 = "self";
                if (node3.id !== node2.id) {
                  const type2 = item3.type;
                  if (tmp66(7361).FastListItemTypes.SECTION === type2) {
                    let type = item2.type;
                    if (tmp66(7361).FastListItemTypes.SECTION === type) {
                      const str5 = "self";
                      if (item2.recyclerKey !== item3.recyclerKey) {
                        let str6 = "after";
                        if (overPercentage2 < 0.5) {
                          str6 = "before";
                        }
                      }
                    }
                  }
                  if (node3.type === GuildsNodeType.FOLDER) {
                    if ("after" === tmp39) {
                      if (!tmp71) {
                        if (!tmp71) {
                          if (null != node2.parentId) {
                            let guildsTree = SortedGuildStore.getGuildsTree();
                            const node1 = guildsTree.getNode(node2.parentId);
                          }
                        }
                      }
                    }
                  }
                  str3 = tmp39;
                  if ("self" !== tmp39) {
                    str3 = tmp39;
                    if (null != tmp39) {
                      if (node3.type === GuildsNodeType.GUILD) {
                        if (node2.type === GuildsNodeType.GUILD) {
                          if (null == node2.parentId) {
                            str3 = tmp39;
                            if (overPercentage2 > 0.35) {
                              str3 = tmp39;
                              if (overPercentage2 < 0.65) {
                                if ("before" === tmp39) {
                                  str3 = "convert-before";
                                } else {
                                  str3 = tmp39;
                                  if ("after" === tmp39) {
                                    str3 = "convert-after";
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      str3 = tmp39;
                      if (node3.type === GuildsNodeType.GUILD) {
                        str3 = tmp39;
                        if (node2.type === GuildsNodeType.FOLDER) {
                          str3 = tmp39;
                          if (!node2.expanded) {
                            str3 = tmp39;
                            if (overPercentage2 > 0.35) {
                              str3 = tmp39;
                              if (overPercentage2 < 0.65) {
                                str3 = "drop-into";
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        if (null == str3) {
          node2 = obj2.node;
          item2 = obj2.item;
          str3 = "self";
        }
        if (tmp46) {
          let obj3 = { type: "drag-move", dragNode: obj2.node, overNode: node2, overState: str3 };
          triggerHapticsAndAnnouncementsIfNecessary(obj3);
        }
        let tmp50 = null == node2 || null == item2;
        if (!tmp50) {
          let node4;
          if (overSpecs != null) {
            node4 = overSpecs.node;
          }
          let tmp52 = node4 === node2;
          if (tmp52) {
            let item1;
            if (overSpecs != null) {
              item1 = overSpecs.item;
            }
            tmp52 = item1 === item2;
          }
          if (tmp52) {
            let state1;
            if (overSpecs != null) {
              state1 = overSpecs.state;
            }
            tmp52 = state1 === str3;
          }
          tmp50 = tmp52;
        }
        if (!tmp50) {
          const obj4 = { node: node2, item: item2, state: str3, percentage: overPercentage2 };
        }
        tmp46 = null != node2 && null != overSpecs;
      } else {
        let percentage;
        if (overSpecs != null) {
          percentage = overSpecs.percentage;
        }
      }
      const sum = listInsets.get().start + c12;
      const diff = windowSize - listInsets.get().end - c12;
      if (absoluteY < sum) {
        const _Math4 = Math;
        const _Math5 = Math;
        const _Math6 = Math;
        let num14 = -1 * Math.max(Math.min(Math.min(value.initialY, sum) - absoluteY, c12) / c12, 0);
      } else {
        num14 = 0;
        if (absoluteY > diff) {
          const _Math = Math;
          const _Math2 = Math;
          const _Math3 = Math;
          num14 = Math.max(Math.min(absoluteY - Math.max(value.initialY, diff), c12) / c12, 0);
        }
      }
      const result4 = _undefined6.set(num14);
      let isActive = 0 === num14;
      if (!isActive) {
        if (!isActive) {
          isActive = frameCallback.isActive;
        }
        if (!isActive) {
          frameCallback.setActive(true);
        }
        tmp66 = tmp66(1259);
        batchUpdates = tmp66.batchUpdates;
        batchUpdates(() => {
          if (null != obj2) {
            if (obj2.node.type === scrollPosition.FOLDER) {
              if (obj2.node.expanded) {
                const result = obj2(windowSize[21]).toggleGuildFolderExpand(obj2.node.id);
                guildsTree = guildsTree.getGuildsTree();
                const node = guildsTree.getNode(obj2.node.id);
                let tmp9 = node !== obj2.node;
                if (tmp9) {
                  let type;
                  if (node != null) {
                    type = node.type;
                  }
                  tmp9 = type === tmp16.FOLDER;
                }
                if (tmp9) {
                  obj2 = {};
                  const merged = Object.assign(obj2);
                  obj2.node = node;
                }
                obj = obj2(windowSize[21]);
              }
            }
          }
          _undefined4({ overSpecs: obj4, dragSpecs: obj2, windowSize });
          const obj3 = { overSpecs: obj4, dragSpecs: obj2, windowSize };
        });
      } else {
        num14 = frameCallback;
      }
      const result5 = _undefined7.set(0);
      num14.setActive(false);
      const tmp23 = getItemAndNodeFromTouchEvent(absoluteY, true, c4, map);
    }
    obj = { overSpecs, dragSpecs: obj2, windowSize, gestureState: gestureState.get() };
  }, items4);
  let obj7 = require("../../../../../_runtime/metro/01652__.js");
  let items5 = [callback4];
  const onFastListScrollWorklet = tmp(17219).useExternalScrollEventHandler({ id: "guilds" });
  let items6 = [
    dragDropInProgress,
    dragRegion,
    gestureState,
    callback3,
    state,
    callback4,
    callback2,
    callback1,
    listInsets,
    scrollPosition,
    scrollerRef,
    windowSize,
    gesture,
  ];
  const onFastListScroll = obj4.useCallback(() => {
    const gestureState = GuildsBarDnDStore.getState().gestureState;
    value = gestureState.get();
    if ("drag" === value.mode) {
      callback4(value.absoluteY);
    }
  }, items5);
  const gesture1 = obj4.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const Gesture2 = LegacyBaseButton.Gesture;
    items = [closure_24, scrollPosition, c7, dragRegion, _mod1705.scheduleOnRN, callback1];
    c3 = undefined;
    [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = items;
    function useGuildsBarGestureTsx2(changedTouches, fail) {
      const first = changedTouches.changedTouches[0];
      let num;
      if (first != null) {
        num = first.absoluteY;
      }
      if (num == null) {
        num = 0;
      }
      const sum = num + _undefined.get();
      if (null != first) {
        if ("cancel" !== _undefined2.get().mode) {
          if (sum >= _undefined3.get().min) {
            if (sum <= _undefined3.get().max) {
              if (1 === changedTouches.changedTouches.length) {
                _undefined4(c4, first.absoluteX, first.absoluteY);
              }
            }
          }
        }
      }
      fail.fail();
    }
    const items1 = [tmp5, tmp6, tmp7, tmp8, tmp9];
    useGuildsBarGestureTsx2.__closure = items1;
    useGuildsBarGestureTsx2.__workletHash = 16716177180999;
    useGuildsBarGestureTsx2.__initData = tmp4;
    const LongPressResult = Gesture2.LongPress();
    const items2 = [closure_25, c7];
    [tmp10, tmp11] = items2;
    function useGuildsBarGestureTsx3(arg0, fail) {
      if ("cancel" === _undefined.get().mode) {
        fail.fail();
      }
    }
    const items3 = [tmp11];
    useGuildsBarGestureTsx3.__closure = items3;
    useGuildsBarGestureTsx3.__workletHash = 1106386279759;
    useGuildsBarGestureTsx3.__initData = tmp10;
    const onTouchesDownResult = Gesture2.LongPress().onTouchesDown(useGuildsBarGestureTsx2);
    const items4 = [closure_26, c7, _mod1705.scheduleOnRN, callback2];
    [tmp12, tmp13, tmp14, tmp15] = items4;
    function useGuildsBarGestureTsx4(arg0) {
      ({ absoluteX, absoluteY } = arg0);
      if ("cancel" !== _undefined.get().mode) {
        _undefined2(c2, absoluteX, absoluteY);
      }
    }
    const items5 = [tmp13, tmp14, tmp15];
    useGuildsBarGestureTsx4.__closure = items5;
    useGuildsBarGestureTsx4.__workletHash = 406167137139;
    useGuildsBarGestureTsx4.__initData = tmp12;
    const onTouchesMoveResult = Gesture2.LongPress()
      .onTouchesDown(useGuildsBarGestureTsx2)
      .onTouchesMove(useGuildsBarGestureTsx3);
    const items6 = [closure_27, c7, _mod1705.scheduleOnRN, callback];
    [tmp17, tmp18, tmp19, tmp20] = items6;
    function useGuildsBarGestureTsx5() {
      if ("cancel" === _undefined.get().mode) {
        _undefined2(c2, "cancel");
      }
    }
    const items7 = [tmp18, tmp19, tmp20];
    useGuildsBarGestureTsx5.__closure = items7;
    useGuildsBarGestureTsx5.__workletHash = 2590862377263;
    useGuildsBarGestureTsx5.__initData = tmp17;
    const onStartResult = Gesture2.LongPress()
      .onTouchesDown(useGuildsBarGestureTsx2)
      .onTouchesMove(useGuildsBarGestureTsx3)
      .onStart(useGuildsBarGestureTsx4);
    const items8 = [closure_28, c7, _mod1705.scheduleOnRN, callback];
    c0 = undefined;
    [tmp21, tmp22, tmp23, tmp24] = items8;
    function useGuildsBarGestureTsx6() {
      let tmp = null != _undefined.get().mode;
      if (tmp) {
        tmp = "cancel" !== _undefined.get().mode;
      }
      if (!tmp) {
        _undefined2(c2, "cancel");
      }
    }
    const items9 = [tmp22, tmp23, tmp24];
    useGuildsBarGestureTsx6.__closure = items9;
    useGuildsBarGestureTsx6.__workletHash = 14544908011091;
    useGuildsBarGestureTsx6.__initData = tmp21;
    const onEndResult = Gesture2.LongPress()
      .onTouchesDown(useGuildsBarGestureTsx2)
      .onTouchesMove(useGuildsBarGestureTsx3)
      .onStart(useGuildsBarGestureTsx4)
      .onEnd(useGuildsBarGestureTsx5);
    const Gesture3 = LegacyBaseButton.Gesture;
    const onTouchesCancelledResult = Gesture2.LongPress()
      .onTouchesDown(useGuildsBarGestureTsx2)
      .onTouchesMove(useGuildsBarGestureTsx3)
      .onStart(useGuildsBarGestureTsx4)
      .onEnd(useGuildsBarGestureTsx5)
      .onTouchesCancelled(useGuildsBarGestureTsx6);
    const PanResult = Gesture3.Pan();
    let result = Gesture3.Pan().manualActivation(true).simultaneousWithExternalGesture(c3, c0);
    let result1 = result.shouldCancelWhenOutside(false);
    const items10 = [closure_29, c7, dragDropInProgress, 10, _mod1705.scheduleOnRN, callback3, callback4];
    [tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34] = items10;
    function useGuildsBarGestureTsx7(arg0, activate) {
      const first = arg0.changedTouches[0];
      if ("pressed" === _undefined.get().mode) {
        if (null != first) {
          const diff = first.absoluteX - _undefined.get().initialX;
          const _Math = Math;
          const absolute = Math.abs(first.absoluteY - _undefined.get().absoluteY);
          if (diff > c2) {
            if (diff > absolute) {
              const obj5 = {};
              const merged = Object.assign(_undefined.get());
              obj5.mode = "contextmenu";
              ({ absoluteX: obj2.absoluteX, absoluteY: obj2.absoluteY } = first);
              const result = _undefined.set(obj5);
              const result1 = _undefined2.set(false);
              activate.activate();
              _undefined4(c4, first.absoluteX, first.absoluteY);
            }
          }
          if (absolute > c2) {
            const obj6 = {};
            const merged1 = Object.assign(_undefined.get());
            obj6.mode = "drag";
            ({
              absoluteX: obj3.initialX,
              absoluteY: obj3.initialY,
              absoluteX: obj3.absoluteX,
              absoluteY: obj3.absoluteY,
            } = first);
            const result2 = _undefined.set(obj6);
            activate.activate();
            const result3 = _undefined2.set(true);
            _undefined4(c5, first.absoluteY);
          }
        }
      }
      let tmp3 = "cancel" !== _undefined.get().mode;
      if (tmp3) {
        tmp3 = null != first;
      }
      if (!tmp3) {
        activate.fail();
        const result4 = _undefined2.set(false);
      }
    }
    const items11 = [tmp29, tmp30, tmp31, tmp32, tmp33, tmp34];
    useGuildsBarGestureTsx7.__closure = items11;
    useGuildsBarGestureTsx7.__workletHash = 11364152475385;
    useGuildsBarGestureTsx7.__initData = tmp28;
    const manualActivationResult = Gesture3.Pan().manualActivation(true);
    const items12 = [closure_30, c7, listInsets, c12, windowSize, _mod1705.scheduleOnRN, callback4, callback3];
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    [tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42] = items12;
    function useGuildsBarGestureTsx8(arg0) {
      ({ absoluteX, absoluteY } = arg0);
      if ("drag" === _undefined.get().mode) {
        if (absoluteX !== _undefined.get().absoluteX) {
          let initialY = _undefined.get().initialY;
          const sum = _undefined2.get().start + c2;
          let tmp6 = initialY < sum;
          const diff = c3 - _undefined2.get().end - c2;
          if (tmp6) {
            tmp6 = absoluteY > initialY;
          }
          if (!tmp6) {
            tmp6 = initialY > diff && absoluteY < initialY;
            const tmp7 = initialY > diff && absoluteY < initialY;
          }
          if (tmp6) {
            initialY = absoluteY;
          }
          const obj2 = {};
          const merged = Object.assign(_undefined.get());
          obj2.absoluteX = absoluteX;
          obj2.absoluteY = absoluteY;
          obj2.initialY = initialY;
          const result = _undefined.set(obj2);
          _undefined5(c5, absoluteY);
        }
      } else if ("contextmenu" === _undefined.get().mode) {
        _undefined5(c6, absoluteX, absoluteY);
      }
    }
    const items13 = [tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42];
    useGuildsBarGestureTsx8.__closure = items13;
    useGuildsBarGestureTsx8.__workletHash = 17309616979285;
    useGuildsBarGestureTsx8.__initData = tmp35;
    const onTouchesMoveResult1 = result1.onTouchesMove(useGuildsBarGestureTsx7);
    const items14 = [closure_31, c7, _mod1705.scheduleOnRN, callback];
    c2 = undefined;
    [tmp43, tmp44, tmp45, tmp46] = items14;
    function useGuildsBarGestureTsx9() {
      if ("drag" === _undefined.get().mode) {
        _undefined2(c2, "drop");
      } else if ("contextmenu" === _undefined.get().mode) {
        _undefined2(c2, "contextmenu-open");
      } else {
        _undefined2(c2, "cancel");
      }
    }
    const items15 = [tmp44, tmp45, tmp46];
    useGuildsBarGestureTsx9.__closure = items15;
    useGuildsBarGestureTsx9.__workletHash = 16673204581970;
    useGuildsBarGestureTsx9.__initData = tmp43;
    const onUpdateResult = result1.onTouchesMove(useGuildsBarGestureTsx7).onUpdate(useGuildsBarGestureTsx8);
    const items16 = [closure_32, _mod1705.scheduleOnRN, callback];
    c0 = undefined;
    c1 = undefined;
    [tmp47, tmp48, tmp49] = items16;
    function useGuildsBarGestureTsx10() {
      _undefined(c1, "cancel");
    }
    const items17 = [tmp48, tmp49];
    useGuildsBarGestureTsx10.__closure = items17;
    useGuildsBarGestureTsx10.__workletHash = 6608047538864;
    useGuildsBarGestureTsx10.__initData = tmp47;
    return Gesture.Simultaneous(
      onTouchesCancelledResult,
      result1
        .onTouchesMove(useGuildsBarGestureTsx7)
        .onUpdate(useGuildsBarGestureTsx8)
        .onEnd(useGuildsBarGestureTsx9)
        .onTouchesCancelled(useGuildsBarGestureTsx10),
    );
  }, items6);
  const effect1 = obj4.useEffect(
    () =>
      GuildsBarDnDStore.subscribe((dragSpecs) => {
        if (null == dragSpecs.dragSpecs) {
          if (null == dragSpecs.dropSpecs) {
            const current = ref.current;
            if (current != null) {
              current.setDisableRecycling(false);
            }
          }
        }
        const current2 = ref.current;
        if (current2 != null) {
          current2.setDisableRecycling(true);
        }
      }),
    [],
  );
  return {
    scrollPosition,
    gesture: gesture1,
    scrollerRef,
    fastListRef,
    persistantKeys,
    onFastListScroll,
    onFastListScrollWorklet,
  };
}
