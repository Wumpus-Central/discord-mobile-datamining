// === Module 15894: useGuildsBarGesture ===

// Module 15894 (useGuildsBarGesture)
import util from "util" /* 1115 */;
import SentryUtilsDefault from "SentryUtils" /* 1231 */;
import ReactBatchUpdates from "ReactBatchUpdates" /* 1248 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4563 */;
import shared from "shared" /* 4682 */;
import HapticUtils from "HapticUtils" /* 4797 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5259 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6068 */;
import FastList from "FastList" /* 6488 */;
import ContextMenuState from "ContextMenuState" /* 7354 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10445 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2066 */;
import SortedGuildStore from "SortedGuildStore" /* 5745 */;
import GuildsBarDnDStore from "GuildsBarDnDStore" /* 15895 */;
import debounce from "debounce" /* 551 */;

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
      const guild = GuildStore.getGuild(node.id);
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
    closure_16(HapticUtils.HapticFeedbackTypes.DRAG_AND_DROP_START);
    closure_16.flush();
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
      closure_16(HapticUtils.HapticFeedbackTypes.DRAG_AND_DROP_MOVE);
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
            const obj = { itemName: tmp20 };
            formatToPlainStringResult1 = intl14.formatToPlainString(util.t.w8FN92, obj);
          }
          if (null != formatToPlainStringResult1) {
            closure_17(formatToPlainStringResult1);
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
    closure_16(HapticUtils.HapticFeedbackTypes.DRAG_AND_DROP_END);
    closure_16.flush();
    closure_17.flush();
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
function getItemAndNodeFromTouchEvent(absoluteY, arg1, fastListRef, map) {
  const state = GuildsBarDnDStore.getState();
  ({ dragRegion, scrollPosition } = state);
  let GUILDS = scrollPosition.get() + absoluteY;
  let bound = GUILDS;
  if (arg1) {
    const range = dragRegion.get();
    const _Math = Math;
    const _Math2 = Math;
    bound = Math.max(Math.min(GUILDS, range.max - 2), range.min + 2);
  }
  const current = fastListRef.current;
  let sectionItemFromPosition;
  if (current != null) {
    sectionItemFromPosition = current.getSectionItemFromPosition(bound, map);
  }
  if (sectionItemFromPosition == null) {
    sectionItemFromPosition = { item: "disabled", positionPercentage: false };
  }
  const item = sectionItemFromPosition.item;
  if (null == item) {
    const obj = { item, overPercentage: null, node: null, pointerPosition: null };
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
const GuildsNodeType = fn(5745).GuildsNodeType;
const GuildsBarConstants = fn(15892);
({ FastListRenderSections: c10, useGuildWrapperSize: closure_11 } = GuildsBarConstants);
let c12 = 160;
let c13 = 16.666666666666668;
let __closure = { pan: null, itemMeasurements: null, activeIndex: null };
let ReanimatedRexport = fn(4563);
__closure.pan = ReanimatedRexport.makeMutable(-1);
ReanimatedRexport = fn(4563);
__closure.itemMeasurements = ReanimatedRexport.makeMutable([]);
ReanimatedRexport = fn(4563);
__closure.activeIndex = ReanimatedRexport.makeMutable(-1);
let closure_16 = debounce(fn(4797).triggerHapticFeedback, 16);
let closure_17 = debounce((intl) => {
  const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
  AccessibilityAnnouncer.announce(intl);
}, 500);
let apply = fn(12);
let closure_18 = apply.throttle((data) => {
  SentryUtilsDefault.addBreadcrumb({ category: "GuildsBarGesture", message: "handleGuildDrag started", data });
}, 2000);
apply = fn(12);
let closure_19 = apply.throttle((data) => {
  SentryUtilsDefault.addBreadcrumb({ category: "GuildsBarGesture", message: "handleGestureEnd started", data });
}, 3000);
let global;
const __initData = { code: "function useGuildsBarGestureTsx1({timeSincePreviousFrame:timeSincePreviousFrame}){const{gestureState,pushScrollAccumulatedTime,MS_PER_FRAME_60FPS,pushScroll,scrollTo,scrollerRef,roundToNearestPixel,scrollPosition}=this.__closure;if(timeSincePreviousFrame==null||timeSincePreviousFrame<=0||gestureState.get().mode!=='drag'){return;}pushScrollAccumulatedTime.set(pushScrollAccumulatedTime.get()+timeSincePreviousFrame);if(pushScrollAccumulatedTime.get()<MS_PER_FRAME_60FPS){return;}const scrollSpeed=1000*pushScroll.get();const timeInSeconds=pushScrollAccumulatedTime.get()/1000;pushScrollAccumulatedTime.set(0);scrollTo(scrollerRef,0,Math.max(roundToNearestPixel(scrollPosition.get()+timeInSeconds*scrollSpeed),0),false);}" };
let closure_25 = { code: "function useGuildsBarGestureTsx2(){const{gestureState,runOnJS,handleGestureEnd}=this.__closure;if(gestureState.get().mode==null||gestureState.get().mode==='cancel'){runOnJS(handleGestureEnd)('cancel');}}" };
let closure_26 = { code: "function useGuildsBarGestureTsx3(){const{gestureState,runOnJS,handleGestureEnd}=this.__closure;if(gestureState.get().mode==='cancel'){runOnJS(handleGestureEnd)('cancel');}}" };
let closure_27 = { code: "function useGuildsBarGestureTsx4({absoluteX:absoluteX,absoluteY:absoluteY}){const{gestureState,runOnJS,handlePress}=this.__closure;if(gestureState.get().mode!=='cancel'){runOnJS(handlePress)(absoluteX,absoluteY);}}" };
let closure_28 = { code: "function useGuildsBarGestureTsx5(event,manager){const{gestureState}=this.__closure;if(gestureState.get().mode==='cancel'){manager.fail();}}" };
let closure_29 = { code: "function useGuildsBarGestureTsx6(event,manager){const{scrollPosition,gestureState,dragRegion,runOnJS,handleTouchesDown}=this.__closure;var _touch$absoluteY;const touch=event.changedTouches[0];const pointerY=((_touch$absoluteY=touch===null||touch===void 0?void 0:touch.absoluteY)!==null&&_touch$absoluteY!==void 0?_touch$absoluteY:0)+scrollPosition.get();if(touch==null||gestureState.get().mode==='cancel'||pointerY<dragRegion.get().min||pointerY>dragRegion.get().max){manager.fail();}else if(event.changedTouches.length===1){runOnJS(handleTouchesDown)(touch.absoluteX,touch.absoluteY);}}" };
let closure_30 = { code: "function useGuildsBarGestureTsx7(){const{runOnJS,handleGestureEnd}=this.__closure;runOnJS(handleGestureEnd)('cancel');}" };
let closure_31 = { code: "function useGuildsBarGestureTsx8(){const{gestureState,runOnJS,handleGestureEnd}=this.__closure;if(gestureState.get().mode==='drag'){runOnJS(handleGestureEnd)('drop');}else if(gestureState.get().mode==='contextmenu'){runOnJS(handleGestureEnd)('contextmenu-open');}else{runOnJS(handleGestureEnd)('cancel');}}" };
let closure_32 = { code: "function useGuildsBarGestureTsx9({absoluteX:absoluteX,absoluteY:absoluteY}){const{gestureState,listInsets,GESTURE_ACCELERATION_RANGE,windowSize,runOnJS,handleGuildDrag,handleContextMenuDrag}=this.__closure;if(gestureState.get().mode==='drag'){if(absoluteX!==gestureState.get().absoluteX||absoluteY!==gestureState.get().absoluteY){let{initialY:initialY}=gestureState.get();const minPushRange=listInsets.get().start+GESTURE_ACCELERATION_RANGE;const maxPushRange=windowSize-listInsets.get().end-GESTURE_ACCELERATION_RANGE;if(initialY<minPushRange&&absoluteY>initialY){initialY=absoluteY;}else if(initialY>maxPushRange&&absoluteY<initialY){initialY=absoluteY;}gestureState.set({...gestureState.get(),absoluteX:absoluteX,absoluteY:absoluteY,initialY:initialY});runOnJS(handleGuildDrag)(absoluteY);}}else if(gestureState.get().mode==='contextmenu'){runOnJS(handleContextMenuDrag)(absoluteX,absoluteY);}}" };
let closure_33 = { code: "function useGuildsBarGestureTsx10(event,manager){const{gestureState,dragDropInProgress,DRAG_GESTURE_MINIMUM_DISTANCE,runOnJS,handleContextMenuDrag,handleGuildDrag}=this.__closure;const touch=event.changedTouches[0];if(gestureState.get().mode!=='pressed'||touch==null){if(gestureState.get().mode==='cancel'||touch==null){manager.fail();dragDropInProgress.set(false);}return;}const diffX=touch.absoluteX-gestureState.get().initialX;const absDiffY=Math.abs(touch.absoluteY-gestureState.get().absoluteY);if(diffX>DRAG_GESTURE_MINIMUM_DISTANCE&&diffX>absDiffY){gestureState.set({...gestureState.get(),mode:'contextmenu',absoluteX:touch.absoluteX,absoluteY:touch.absoluteY});dragDropInProgress.set(false);manager.activate();runOnJS(handleContextMenuDrag)(touch.absoluteX,touch.absoluteY);}else if(absDiffY>DRAG_GESTURE_MINIMUM_DISTANCE){gestureState.set({...gestureState.get(),mode:'drag',initialX:touch.absoluteX,initialY:touch.absoluteY,absoluteX:touch.absoluteX,absoluteY:touch.absoluteY});manager.activate();dragDropInProgress.set(true);runOnJS(handleGuildDrag)(touch.absoluteY);}}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarGesture.tsx");

export default function useGuildsBarGesture() {
  gesture = gesture(token[15]).useHomeDrawerState().gesture;
  let tmp = listInsets();
  importDefault = tmp;
  let obj = gesture(token[15]);
  token = gesture(token[16]).useToken(require("native").modules.mobile.GUILD_BAR_ITEM_SIZE);
  let obj2 = gesture(token[16]);
  const scrollerRef = gesture(token[7]).useAnimatedRef();
  fastListRef = fastListRef.useRef(null);
  let obj3 = gesture(token[7]);
  const sharedValue = gesture(token[7]).useSharedValue(0);
  let obj4 = gesture(token[7]);
  const sharedValue1 = gesture(token[7]).useSharedValue(0);
  let tmp7 = handleGestureEnd((gestureState) => ({ gestureState: gestureState.gestureState, scrollPosition: gestureState.scrollPosition, dragRegion: gestureState.dragRegion, windowSize: gestureState.windowSize, listInsets: gestureState.listInsets, dragDropInProgress: gestureState.dragDropInProgress }), gesture(token[18]).shallow);
  let gestureState = tmp7.gestureState;
  let scrollPosition = tmp7.scrollPosition;
  let dragRegion = tmp7.dragRegion;
  const windowSize = tmp7.windowSize;
  listInsets = tmp7.listInsets;
  const dragDropInProgress = tmp7.dragDropInProgress;
  const persistantKeys = handleGestureEnd((arg0) => {
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
  }, gesture(token[18]).shallow);
  const effect = fastListRef.useEffect(() => {
    const current = fastListRef.current;
    scrollPosition = undefined;
    if (current != null) {
      scrollPosition = current.computeScrollPosition(constants.GUILDS);
    }
    const current2 = fastListRef.current;
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
    const current3 = fastListRef.current;
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
  let obj5 = gesture(token[7]);
  class W {
    constructor(arg0) {
      timeSincePreviousFrame = arg0.timeSincePreviousFrame;
      if (null != timeSincePreviousFrame) {
        num = 0;
        if (timeSincePreviousFrame > 0) {
          tmp = gestureState;
          str = "drag";
          if ("drag" === gestureState.get().mode) {
            obj = closure_6;
            result = closure_6.set(closure_6.get() + timeSincePreviousFrame);
            tmp3 = c13;
            if (closure_6.get() >= c13) {
              tmp4 = closure_5;
              num2 = 1000;
              result1 = 1000 * closure_5.get();
              result2 = obj.get() / 1000;
              result3 = obj.set(0);
              tmp8 = closure_0;
              tmp9 = closure_2;
              obj2 = closure_0(closure_2[7]);
              tmp10 = closure_3;
              tmp11 = globalThis;
              _Math = Math;
              tmp12 = closure_1;
              tmp14 = scrollPosition;
              tmp13 = closure_1(closure_2[19]);
              flag = false;
              tmp15 = obj2;
              tmp16 = closure_3;
              num3 = 0;
              scrollToResult = obj2.scrollTo(closure_3, 0, Math.max(tmp13(scrollPosition.get() + result2 * result1), 0), false);
            }
          }
        }
      }
      return;
    }
  }
  let obj6 = gesture(token[7]);
  W.__closure = { gestureState, pushScrollAccumulatedTime: sharedValue1, MS_PER_FRAME_60FPS: frameCallback, pushScroll: sharedValue, scrollTo: gesture(token[7]).scrollTo, scrollerRef, roundToNearestPixel: require("roundToNearestPixel"), scrollPosition };
  W.__workletHash = 14384524602726;
  W.__initData = __initData;
  frameCallback = obj6.useFrameCallback(W, false);
  let items = [sharedValue, sharedValue1, frameCallback];
  handleGestureEnd = fastListRef.useCallback((event) => {
    const state1 = GuildsBarDnDStore.getState();
    const dragSpecs = state1.dragSpecs;
    ({ overSpecs, gestureState, dragDropInProgress } = state1);
    const result = sharedValue.set(0);
    const result1 = sharedValue1.set(0);
    if (frameCallback.isActive) {
      frameCallback.setActive(false);
    }
    if ("cancel" === event) {
      let obj2 = { event, dragSpecs, overSpecs, gestureState: gestureState.get() };
      closure_19(obj2);
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
          let state = overSpecs.state;
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
                      const obj = dropPosition(token[21]);
                      const id = node.id;
                      let tmp6 = closure_5;
                      if (!tmp6) {
                        tmp6 = c4;
                      }
                      obj.moveById(id, id1, tmp6, closure_5);
                      scrollerRef(function*() {
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
                    const obj2 = { dragNode: node, overNode: node2, dropPosition, dragRecyclerKey: null, itemSize: null, overState: null };
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
          const state2 = GuildsBarDnDStore.getState();
          const obj8 = { dragNode: node, overNode: node, dropPosition: null, itemSize: null, dragRecyclerKey: null, overState: "self" };
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
    state1.setStateShallow({ dragSpecs: "isArray", overSpecs: "paddingHorizontal" });
    value = gestureState.get();
    if (null != value.mode) {
      const obj11 = {};
      const merged = Object.assign(value);
      obj11.mode = null;
      const result2 = gestureState.set(obj11);
      const result3 = dragDropInProgress.set(false);
    }
  }, items);
  const callback1 = fastListRef.useCallback((arg0, absoluteY) => {
    const state = GuildsBarDnDStore.getState();
    ({ gestureState, dragDropInProgress } = state);
    value = gestureState.get();
    if (tmp3) {
      const obj = {};
      const merged = Object.assign(value);
      obj.mode = "cancel";
      const result = gestureState.set(obj);
      const result1 = dragDropInProgress.set(false);
    }
  }, []);
  let items1 = [handleGestureEnd, token];
  const callback2 = fastListRef.useCallback((absoluteX, absoluteY) => {
    const state = dragRegion.getState();
    ({ dragSpecs, scrollPosition, gestureState, dragDropInProgress, setStateShallow } = state);
    let tmp2 = closure_1;
    let result2 = token;
    closure_1(token[12]).addBreadcrumb({ category: "GuildsBarGesture", message: "handlePress started", data: { absoluteX, absoluteY } });
    let obj = closure_1(token[12]);
    let obj2 = { category: "GuildsBarGesture", message: "handlePress started", data: { absoluteX, absoluteY } };
    ({ item, node } = getItemAndNodeFromTouchEvent(absoluteY, false, fastListRef));
    if (null != item) {
      if (null != node) {
        const obj3 = { node, item, itemTop: null, itemSize: null };
        ({ layoutStart: obj4.itemTop, layoutSize: obj4.itemSize } = item);
        const height = sharedValue.get("window").height;
        let sum = height;
        if (obj5.isAndroid()) {
          const rect = gesture(result2[25]).getSafeAreaInsets();
          sum = height + (rect.top + rect.bottom);
          const tmp10Result = gesture(result2[25]);
        }
        let activeIndex = callback1.activeIndex;
        let result = activeIndex.set(-1);
        obj5 = gesture(result2[24]);
        if (tmp10Result4.getIsScreenReaderEnabled()) {
          const obj6 = { type: "drag-start", node };
          triggerHapticsAndAnnouncementsIfNecessary(obj6);
        } else {
          const type = node.type;
          if (scrollPosition.GUILD === type) {
            let version = sharedValue1.getGuild(node.id);
            const obj7 = { key: node.id, title: null, items: null };
            let name;
            if (version != null) {
              name = version.name;
            }
            obj7.title = name;
            if (null != version) {
              tmp2 = tmp2(result2[27]);
              version = gestureState.getGuildsTree().version;
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
              obj8.items = gesture(result2[28]).getGuildFolderMenuItems(node.id);
              tmp15 = obj8;
              const tmp10Result5 = gesture(result2[28]);
            }
            const items = tmp15.items;
            if (items.length > 0) {
              const sum1 = item.layoutStart - scrollPosition.get() + 6;
              let str2 = "below";
              if (0.65 * sum < sum1) {
                str2 = "above";
              }
              let diff = sum1;
              if ("below" !== str2) {
                diff = sum - sum1 - token;
              }
              const size = { key: null, title: null, items: null, x: null, y: null, positionX: "left", positionY: null, width: null, height: null, state: null, dividerIndexes: null, keyboardShouldPersistTaps: "never", requestClose: null, onClose: null };
              const _HermesInternal = HermesInternal;
              size.key = "" + tmp20;
              size.title = tmp21;
              size.items = items;
              size.x = 12 + token + 12;
              size.y = diff;
              size.positionY = str2;
              size.width = token;
              size.height = token;
              size.state = callback1;
              size.dividerIndexes = [];
              size.requestClose = function requestClose(ContextMenuBackdrop) {
                if (!ContextMenuBackdrop) {
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
              size.onClose = function onClose() {

              };
              gesture(result2[23]).showContextMenu(size);
              const tmp10Result6 = gesture(result2[23]);
            }
          }
        }
        const obj9 = { dragSpecs: obj3, overSpecs: "Array", windowSize: sum };
        setStateShallow(obj9);
        const obj10 = { mode: "pressed", initialY: absoluteY, initialX: absoluteX, absoluteY, absoluteX };
        const result1 = gestureState.set(obj10);
        setStateShallow = gesture(result2[9]);
        result2 = setStateShallow.triggerHapticFeedback(gesture(result2[9]).HapticFeedbackTypes.IMPACT_MEDIUM);
        tmp10Result4 = gesture(result2[26]);
      }
    }
    const obj11 = {};
    const merged = Object.assign(gestureState.get());
    obj11.mode = null;
    const result3 = gestureState.set(obj11);
    const result4 = dragDropInProgress.set(false);
    const tmp5 = getItemAndNodeFromTouchEvent(absoluteY, false, fastListRef);
  }, items1);
  const callback3 = fastListRef.useCallback((absoluteX, absoluteY) => {
    const result = gesture(token[23]).updateContextMenuState(absoluteX, absoluteY, callback1);
  }, []);
  const items2 = [sharedValue, sharedValue1, frameCallback, tmp];
  const callback4 = fastListRef.useCallback((absoluteY) => {
    const state = GuildsBarDnDStore.getState();
    const overSpecs = state.overSpecs;
    ({ dragSpecs: obj2, windowSize } = state);
    ({ setStateShallow: scrollerRef, listInsets, gestureState } = state);
    callback4({ overSpecs, dragSpecs: obj2, windowSize, gestureState: gestureState.get() });
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
      ({ item, overPercentage, node } = getItemAndNodeFromTouchEvent(absoluteY, true, fastListRef, map));
      let id;
      if (overSpecs != null) {
        id = overSpecs.node.id;
      }
      let id1;
      if (node != null) {
        id1 = node.id;
      }
      if (id !== id1) {
        const ContextMenuStore = tmp66(7354).ContextMenuStore;
        if (null != ContextMenuStore.getState().menu) {
          tmp66(7354).hideContextMenu();
          const tmp66Result = tmp66(7354);
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
              const result3 = map.set(item.recyclerKey, 2 * obj2);
            }
            ({ item: item2, overPercentage: overPercentage2, node: node2 } = getItemAndNodeFromTouchEvent(absoluteY, true, fastListRef, tmp12));
            const tmp18Result = getItemAndNodeFromTouchEvent(absoluteY, true, fastListRef, tmp12);
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
                  if (tmp66(6488).FastListItemTypes.SECTION === type2) {
                    let type = item2.type;
                    if (tmp66(6488).FastListItemTypes.SECTION === type) {
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
      const result4 = sharedValue.set(num14);
      let isActive = 0 === num14;
      if (!isActive) {
        if (!isActive) {
          isActive = frameCallback.isActive;
        }
        if (!isActive) {
          frameCallback.setActive(true);
        }
        tmp66 = tmp66(1248);
        batchUpdates = tmp66.batchUpdates;
        batchUpdates(() => {
          if (null != obj2) {
            if (obj2.node.type === scrollPosition.FOLDER) {
              if (obj2.node.expanded) {
                const result = obj2(token[21]).toggleGuildFolderExpand(obj2.node.id);
                const guildsTree = gestureState.getGuildsTree();
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
                const obj = obj2(token[21]);
              }
            }
          }
          scrollerRef({ overSpecs: obj4, dragSpecs: obj2, windowSize });
          const obj3 = { overSpecs: obj4, dragSpecs: obj2, windowSize };
        });
      } else {
        num14 = frameCallback;
      }
      const result5 = sharedValue1.set(0);
      num14.setActive(false);
      const tmp23 = getItemAndNodeFromTouchEvent(absoluteY, true, fastListRef, map);
    }
    let obj = { overSpecs, dragSpecs: obj2, windowSize, gestureState: gestureState.get() };
  }, items2);
  let obj7 = { gestureState, pushScrollAccumulatedTime: sharedValue1, MS_PER_FRAME_60FPS: frameCallback, pushScroll: sharedValue, scrollTo: gesture(token[7]).scrollTo, scrollerRef, roundToNearestPixel: require("roundToNearestPixel"), scrollPosition };
  const items3 = [callback4];
  const onFastListScrollWorklet = gesture(token[29]).useExternalScrollEventHandler({ id: "guilds" });
  const items4 = [dragDropInProgress, dragRegion, gestureState, callback3, handleGestureEnd, callback4, callback2, callback1, listInsets, scrollPosition, scrollerRef, windowSize, gesture];
  const onFastListScroll = fastListRef.useCallback(() => {
    gestureState = GuildsBarDnDStore.getState().gestureState;
    value = gestureState.get();
    if ("drag" === value.mode) {
      callback4(value.absoluteY);
    }
  }, items3);
  const gesture1 = fastListRef.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const Gesture2 = LegacyBaseButton.Gesture;
    const fn = function h(changedTouches, fail) {
      const first = changedTouches.changedTouches[0];
      let num;
      if (first != null) {
        num = first.absoluteY;
      }
      if (num == null) {
        num = 0;
      }
      const sum = num + scrollPosition.get();
      if (null != first) {
        if ("cancel" !== gestureState.get().mode) {
          if (sum >= dragRegion.get().min) {
            if (sum <= dragRegion.get().max) {
              if (1 === changedTouches.changedTouches.length) {
                gesture(token[7]).runOnJS(callback1)(first.absoluteX, first.absoluteY);
                const obj2 = gesture(token[7]);
              }
            }
          }
        }
      }
      fail.fail();
    };
    __closure = { scrollPosition, gestureState, dragRegion, runOnJS: ReanimatedRexport2.runOnJS, handleTouchesDown: callback1 };
    fn.__closure = __closure;
    fn.__workletHash = 5430653816983;
    fn.__initData = __initData5;
    const LongPressResult = Gesture2.LongPress();
    const fn2 = function f(arg0, fail) {
      if ("cancel" === gestureState.get().mode) {
        fail.fail();
      }
    };
    fn2.__closure = { gestureState };
    fn2.__workletHash = 8960390413776;
    fn2.__initData = __initData4;
    const onTouchesDownResult = Gesture2.LongPress().onTouchesDown(fn);
    const fn3 = function c(arg0) {
      ({ absoluteX, absoluteY } = arg0);
      if ("cancel" !== gestureState.get().mode) {
        gesture(token[7]).runOnJS(callback2)(absoluteX, absoluteY);
        const obj = gesture(token[7]);
      }
    };
    const onTouchesMoveResult = Gesture2.LongPress().onTouchesDown(fn).onTouchesMove(fn2);
    fn3.__closure = { gestureState, runOnJS: ReanimatedRexport2.runOnJS, handlePress: callback2 };
    fn3.__workletHash = 2121892092583;
    fn3.__initData = __initData3;
    let obj2 = { gestureState, runOnJS: ReanimatedRexport2.runOnJS, handlePress: callback2 };
    const fn4 = function u() {
      if ("cancel" === gestureState.get().mode) {
        gesture(token[7]).runOnJS(handleGestureEnd)("cancel");
        const obj = gesture(token[7]);
      }
    };
    const onStartResult = onTouchesMoveResult.onStart(fn3);
    fn4.__closure = { gestureState, runOnJS: ReanimatedRexport2.runOnJS, handleGestureEnd };
    fn4.__workletHash = 2371934536573;
    fn4.__initData = __initData2;
    let obj3 = { gestureState, runOnJS: ReanimatedRexport2.runOnJS, handleGestureEnd };
    const fn5 = function l() {
      let tmp = null != gestureState.get().mode;
      if (tmp) {
        tmp = "cancel" !== gestureState.get().mode;
      }
      if (!tmp) {
        gesture(token[7]).runOnJS(handleGestureEnd)("cancel");
        const obj2 = gesture(token[7]);
      }
    };
    const onEndResult = onStartResult.onEnd(fn4);
    fn5.__closure = { gestureState, runOnJS: ReanimatedRexport2.runOnJS, handleGestureEnd };
    fn5.__workletHash = 8240921685123;
    fn5.__initData = __initData;
    let obj4 = { gestureState, runOnJS: ReanimatedRexport2.runOnJS, handleGestureEnd };
    const Gesture3 = LegacyBaseButton.Gesture;
    const onTouchesCancelledResult = onEndResult.onTouchesCancelled(fn5);
    const PanResult = Gesture3.Pan();
    let result = Gesture3.Pan().manualActivation(true).simultaneousWithExternalGesture(scrollerRef, gesture);
    let result1 = result.shouldCancelWhenOutside(false);
    const fn6 = function o(arg0, activate) {
      const first = arg0.changedTouches[0];
      if ("pressed" === gestureState.get().mode) {
        if (null != first) {
          const diff = first.absoluteX - gestureState.get().initialX;
          const _Math = Math;
          const absolute = Math.abs(first.absoluteY - gestureState.get().absoluteY);
          if (diff > 10) {
            if (diff > absolute) {
              const obj7 = {};
              const merged = Object.assign(gestureState.get());
              obj7.mode = "contextmenu";
              ({ absoluteX: obj2.absoluteX, absoluteY: obj2.absoluteY } = first);
              const result = gestureState.set(obj7);
              const result1 = GESTURE_ACCELERATION_RANGE.set(false);
              activate.activate();
              gesture(token[7]).runOnJS(callback3)(first.absoluteX, first.absoluteY);
              const obj3 = gesture(token[7]);
            }
          }
          if (absolute > 10) {
            const obj8 = {};
            const merged1 = Object.assign(gestureState.get());
            obj8.mode = "drag";
            ({ absoluteX: obj4.initialX, absoluteY: obj4.initialY, absoluteX: obj4.absoluteX, absoluteY: obj4.absoluteY } = first);
            const result2 = gestureState.set(obj8);
            activate.activate();
            const result3 = GESTURE_ACCELERATION_RANGE.set(true);
            gesture(token[7]).runOnJS(callback4)(first.absoluteY);
            const obj5 = gesture(token[7]);
          }
        }
      }
      let tmp3 = "cancel" !== gestureState.get().mode;
      if (tmp3) {
        tmp3 = null != first;
      }
      if (!tmp3) {
        activate.fail();
        const result4 = GESTURE_ACCELERATION_RANGE.set(false);
      }
    };
    const manualActivationResult = Gesture3.Pan().manualActivation(true);
    fn6.__closure = { gestureState, dragDropInProgress, DRAG_GESTURE_MINIMUM_DISTANCE: 10, runOnJS: ReanimatedRexport2.runOnJS, handleContextMenuDrag: callback3, handleGuildDrag: callback4 };
    fn6.__workletHash = 15225957003871;
    fn6.__initData = __initData9;
    let obj5 = { gestureState, dragDropInProgress, DRAG_GESTURE_MINIMUM_DISTANCE: 10, runOnJS: ReanimatedRexport2.runOnJS, handleContextMenuDrag: callback3, handleGuildDrag: callback4 };
    const fn7 = function s(arg0) {
      ({ absoluteX, absoluteY } = arg0);
      if ("drag" === gestureState.get().mode) {
        if (absoluteX !== gestureState.get().absoluteX) {
          let initialY = gestureState.get().initialY;
          const sum = listInsets.get().start + dragDropInProgress;
          let tmp6 = initialY < sum;
          const diff = windowSize - listInsets.get().end - dragDropInProgress;
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
          const merged = Object.assign(gestureState.get());
          obj2.absoluteX = absoluteX;
          obj2.absoluteY = absoluteY;
          obj2.initialY = initialY;
          const result = gestureState.set(obj2);
          gesture(token[7]).runOnJS(callback4)(absoluteY);
          const obj3 = gesture(token[7]);
        }
      } else if ("contextmenu" === gestureState.get().mode) {
        gesture(token[7]).runOnJS(callback3)(absoluteX, absoluteY);
        const obj4 = gesture(token[7]);
      }
    };
    const onTouchesMoveResult1 = result1.onTouchesMove(fn6);
    fn7.__closure = { gestureState, listInsets, GESTURE_ACCELERATION_RANGE, windowSize, runOnJS: ReanimatedRexport2.runOnJS, handleGuildDrag: callback4, handleContextMenuDrag: callback3 };
    fn7.__workletHash = 14488930469604;
    fn7.__initData = __initData8;
    const obj6 = { gestureState, listInsets, GESTURE_ACCELERATION_RANGE, windowSize, runOnJS: ReanimatedRexport2.runOnJS, handleGuildDrag: callback4, handleContextMenuDrag: callback3 };
    const fn8 = function n() {
      if ("drag" === gestureState.get().mode) {
        gesture(token[7]).runOnJS(handleGestureEnd)("drop");
        const obj4 = gesture(token[7]);
      } else if ("contextmenu" === gestureState.get().mode) {
        gesture(token[7]).runOnJS(handleGestureEnd)("contextmenu-open");
        const obj3 = gesture(token[7]);
      } else {
        gesture(token[7]).runOnJS(handleGestureEnd)("cancel");
        const obj2 = gesture(token[7]);
      }
    };
    const onUpdateResult = onTouchesMoveResult1.onUpdate(fn7);
    fn8.__closure = { gestureState, runOnJS: ReanimatedRexport2.runOnJS, handleGestureEnd };
    fn8.__workletHash = 9863070264039;
    fn8.__initData = __initData7;
    let obj7 = { gestureState, runOnJS: ReanimatedRexport2.runOnJS, handleGestureEnd };
    const fn9 = function t() {
      gesture(token[7]).runOnJS(handleGestureEnd)("cancel");
    };
    const onEndResult1 = onUpdateResult.onEnd(fn8);
    fn9.__closure = { runOnJS: ReanimatedRexport2.runOnJS, handleGestureEnd };
    fn9.__workletHash = 9715999020978;
    fn9.__initData = __initData6;
    return Gesture.Simultaneous(onTouchesCancelledResult, onEndResult1.onTouchesCancelled(fn9));
  }, items4);
  const effect1 = fastListRef.useEffect(() => GuildsBarDnDStore.subscribe((dragSpecs) => {
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
  }), []);
  return { scrollPosition, gesture: gesture1, scrollerRef, fastListRef, persistantKeys, onFastListScroll, onFastListScrollWorklet };
};