// discord_app/modules/guilds_bar/native/hooks/useGuildsBarGesture.tsx
import _modDef1208 from "../../../../utils/SentryUtils.native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import AccessibilityAnnouncer3 from "../../../../design/shared.tsx";
import HapticFeedbackTypes from "../../../haptics/HapticUtils.native.tsx";
import renderDefaultEmpty from "../../../../lib/native/FastList.tsx";
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import { Dimensions } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../../stores/GuildStore.tsx";
import closure_7 from "../../../../stores/SortedGuildStore.tsx";
import { GuildsNodeType } from "../../../../stores/SortedGuildStore.tsx";
import importDefaultResult from "../GuildsBarDnDStore.tsx";
import GUILD_ITEM_SIZE from "../GuildsBarConstants.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import apply from "../../../../../_runtime/00012_apply.js";
import importDefaultResult1 from "../../../../../_runtime/00636_debounce.js";

require = arg1;
function getDropIndex(dragNode, dragNode2, overState) {
  let tmp = dragNode2;
  if ("self" === overState) {
    tmp = dragNode;
  }
  const flattenedGuildFolderList = store2.getFlattenedGuildFolderList();
  let num = -1;
  for (const item10012 of flattenedGuildFolderList) {
    let tmp3 = num;
    num = num + 1;
    if (item10012.id === tmp.id) {
      let tmp4 = obj;
      obj.return();
      break;
    }
    let str = "after";
    if ("after" !== arg2) {
      let str2 = "convert-after";
      if ("convert-after" !== arg2) {
        let tmp5 = num;
        return num;
      }
    }
    let tmp6 = num;
    let num2 = 1;
    return num + 1;
  }
}
function triggerHapticsAndAnnouncementsIfNecessary(type) {
  type = type.type;
  if ("drag-start" === type) {
    const node = type.node;
    const type4 = node.type;
    if (GuildsNodeType.GUILD === type4) {
      const guild = store.getGuild(node.id);
      let name;
      if (guild != null) {
        name = guild.name;
      }
      if (name == null) {
        const intl11 = getSystemLocale.intl;
        name = intl11.string(getSystemLocale.t.fKYRlM);
      }
      let tmp39 = name;
    } else if (tmp38.FOLDER === type4) {
      let name4 = node.name;
      if (name4 == null) {
        const intl10 = getSystemLocale.intl;
        name4 = intl10.string(getSystemLocale.t.ebAnWE);
      }
      tmp39 = name4;
    }
    if (null != tmp39) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer3.AccessibilityAnnouncer;
      const intl12 = getSystemLocale.intl;
      obj = { itemName: null };
      obj[0] = tmp39;
      AccessibilityAnnouncer.announce(intl12.formatToPlainString(getSystemLocale.t["vHD/Je"], obj));
    }
    lib(HapticFeedbackTypes.HapticFeedbackTypes.DRAG_AND_DROP_START);
    lib.flush();
  } else if ("drag-move" === type) {
    type = undefined;
    if (_undefined != null) {
      type = _undefined.type;
    }
    let type1;
    if (_undefined != null) {
      type1 = _undefined.type;
    }
    if ("drag-move" === type1) {
      let tmp7 = getDropIndex(_undefined.dragNode, _undefined.overNode, _undefined.overState);
      let tmp8 = getDropIndex;
    } else {
      tmp7 = getDropIndex(type.dragNode, type.dragNode, "self");
      tmp8 = getDropIndex;
    }
    let type2;
    if (_undefined != null) {
      type2 = _undefined.type;
    }
    let str3 = "self";
    if ("drag-start" !== type2) {
      let str4;
      if (_undefined != null) {
        str4 = _undefined.overState;
      }
      if (str4 == null) {
        str4 = "self";
      }
      str3 = str4;
    }
    if (tmp7 !== tmp8Result) {
      let fKYRlM = dependencyMap;
      lib(HapticFeedbackTypes.HapticFeedbackTypes.DRAG_AND_DROP_MOVE);
      ({ dragNode, overNode, overState: overState2 } = type);
      if ("convert-before" !== overState2) {
        if ("convert-after" !== overState2) {
          if ("drop-into" === overState2) {
            let formatToPlainStringResult;
            if (overNode.type === GuildsNodeType.FOLDER) {
              const intl6 = tmp18(1236).intl;
              obj = { folderName: null };
              obj[0] = overNode.name;
              formatToPlainStringResult = intl6.formatToPlainString(tmp18(1236).t.uLDoxR, obj);
            }
            let formatToPlainStringResult1 = formatToPlainStringResult;
          } else if ("before" === overState2) {
            const intl3 = tmp18(1236).intl;
            type2 = overNode.type;
            if (GuildsNodeType.GUILD === type2) {
              const guild1 = store.getGuild(overNode.id);
              let name1;
              if (guild1 != null) {
                name1 = guild1.name;
              }
              if (name1 == null) {
                const intl5 = tmp18(1236).intl;
                name1 = intl5.string(tmp18(1236).t.fKYRlM);
              }
              let tmp26 = name1;
            } else if (tmp25.FOLDER === type2) {
              let name2 = overNode.name;
              if (name2 == null) {
                const intl4 = tmp18(1236).intl;
                name2 = intl4.string(tmp18(1236).t.ebAnWE);
              }
              tmp26 = name2;
            }
            obj1 = { itemName: null };
            obj1[0] = tmp26;
            formatToPlainStringResult1 = intl3.formatToPlainString(tmp18(1236).t["A5aDw+"], obj1);
          } else if ("after" === overState2) {
            const intl14 = tmp18(1236).intl;
            const type5 = overNode.type;
            if (GuildsNodeType.GUILD === type5) {
              const guild2 = store.getGuild(overNode.id);
              name2 = undefined;
              if (guild2 != null) {
                name2 = guild2.name;
              }
              if (name2 == null) {
                const intl2 = tmp18(1236).intl;
                name2 = intl2.string(tmp18(1236).t.fKYRlM);
              }
              let tmp20 = name2;
            } else if (tmp66.FOLDER === type5) {
              name = overNode.name;
              if (name == null) {
                const intl = tmp18(1236).intl;
                name = intl.string(tmp18(1236).t.ebAnWE);
              }
              tmp20 = name;
            }
            obj = { itemName: null };
            obj[0] = tmp20;
            formatToPlainStringResult1 = intl14.formatToPlainString(tmp18(1236).t.w8FN92, obj);
          }
          if (null != formatToPlainStringResult1) {
            lib2(formatToPlainStringResult1);
          }
        }
      }
      const intl7 = tmp18(1236).intl;
      const type3 = overNode.type;
      if (GuildsNodeType.GUILD === type3) {
        const guild3 = store.getGuild(overNode.id);
        let name3;
        if (guild3 != null) {
          name3 = guild3.name;
        }
        if (name3 == null) {
          const intl9 = tmp18(1236).intl;
          fKYRlM = tmp18(1236).t.fKYRlM;
          name3 = intl9.string(fKYRlM);
        }
        let tmp33 = name3;
      } else if (tmp32.FOLDER === type3) {
        name3 = overNode.name;
        if (name3 == null) {
          const intl8 = tmp18(1236).intl;
          name3 = intl8.string(tmp18(1236).t.ebAnWE);
        }
        tmp33 = name3;
      }
      overNode = { itemName: null };
      overNode[0] = tmp33;
      intl7.formatToPlainString(getSystemLocale.t.qiQ0QI, overNode);
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
    lib(HapticFeedbackTypes.HapticFeedbackTypes.DRAG_AND_DROP_END);
    lib.flush();
    lib2.flush();
    const AccessibilityAnnouncer2 = AccessibilityAnnouncer3.AccessibilityAnnouncer;
    const intl13 = getSystemLocale.intl;
    AccessibilityAnnouncer2.announce(intl13.string(getSystemLocale.t.lMkmz7));
  }
  let tmp57;
  if ("drag-drop" !== type.type) {
    tmp57 = type;
  }
  _undefined = tmp57;
}
function getItemAndNodeFromTouchEvent(arg0, arg1, current) {
  const state = importDefaultResult.getState();
  ({ dragRegion, scrollPosition } = state);
  let GUILDS = scrollPosition.get() + arg0;
  let bound = GUILDS;
  if (arg1) {
    const value = dragRegion.get();
    const _Math = Math;
    const _Math2 = Math;
    bound = Math.max(Math.min(GUILDS, value.max - 2), value.min + 2);
  }
  current = current.current;
  let sectionItemFromPosition;
  if (current != null) {
    sectionItemFromPosition = current.getSectionItemFromPosition(bound, arg3);
  }
  if (sectionItemFromPosition == null) {
    sectionItemFromPosition = { item: "disabled", positionPercentage: false };
  }
  const item = sectionItemFromPosition.item;
  if (null == item) {
    obj = { item: null, overPercentage: null, node: null, pointerPosition: null };
    obj[0] = item;
    const _Math3 = Math;
    obj[1] = Math.floor(100 * tmp6) / 100;
    obj[2] = undefined;
    obj[3] = bound;
    return obj;
  } else {
    let tmp7;
    if (null != item) {
      GUILDS = constants.GUILDS;
      if (item.section >= GUILDS) {
        GUILDS = store2.getFastListGuildFolders()[item.section - tmp8.GUILDS];
        if (null != GUILDS) {
          const type = item.type;
          if (renderDefaultEmpty.FastListItemTypes.SECTION !== type) {
            if (tmp10(8226).FastListItemTypes.ITEM === type) {
              if (GUILDS.type !== GuildsNodeType.ROOT) {
                let tmp13 = GUILDS;
                if (GUILDS.type !== tmp12.FOLDER) {
                  if (tmp13.type === tmp12.GUILD) {
                    tmp7 = tmp13;
                  }
                } else {
                  tmp13 = tmp14;
                }
              }
            }
          }
          tmp10 = require;
        }
        if (null != GUILDS) {
          tmp7 = GUILDS;
        }
      }
    }
  }
}
let c9 = importDefaultResult;
({ FastListRenderSections: c10, useGuildWrapperSize: unpackModuleId } = GUILD_ITEM_SIZE);
let c12 = 160;
let c13 = 16.666666666666668;
let obj = { pan: null, itemMeasurements: null, activeIndex: null };
obj[0] = require("module_4294967295");
obj[1] = module_4184.makeMutable([]);
obj[2] = require("module_4294967295");
let closure_16 = importDefaultResult1(require("HapticFeedbackTypes").triggerHapticFeedback, 16);
let closure_17 = importDefaultResult1((intl) => {
  const AccessibilityAnnouncer = AccessibilityAnnouncer3.AccessibilityAnnouncer;
  AccessibilityAnnouncer.announce(intl);
}, 500);
let closure_18 = apply.throttle((data) => {
  obj = _modDef1208;
  obj = { category: "GuildsBarGesture", message: "handleGuildDrag started", data };
  obj.addBreadcrumb(obj);
}, 2000);
let closure_19 = apply.throttle((data) => {
  obj = _modDef1208;
  obj = { category: "GuildsBarGesture", message: "handleGestureEnd started", data };
  obj.addBreadcrumb(obj);
}, 3000);
let c21;
let closure_24 = { code: "function useGuildsBarGestureTsx1({timeSincePreviousFrame:timeSincePreviousFrame}){const{gestureState,pushScrollAccumulatedTime,MS_PER_FRAME_60FPS,pushScroll,scrollTo,scrollerRef,roundToNearestPixel,scrollPosition}=this.__closure;if(timeSincePreviousFrame==null||timeSincePreviousFrame<=0||gestureState.get().mode!=='drag'){return;}pushScrollAccumulatedTime.set(pushScrollAccumulatedTime.get()+timeSincePreviousFrame);if(pushScrollAccumulatedTime.get()<MS_PER_FRAME_60FPS){return;}const scrollSpeed=1000*pushScroll.get();const timeInSeconds=pushScrollAccumulatedTime.get()/1000;pushScrollAccumulatedTime.set(0);scrollTo(scrollerRef,0,Math.max(roundToNearestPixel(scrollPosition.get()+timeInSeconds*scrollSpeed),0),false);}" };
let closure_25 = { code: "function useGuildsBarGestureTsx2(){const{gestureState,runOnJS,handleGestureEnd}=this.__closure;if(gestureState.get().mode==null||gestureState.get().mode==='cancel'){runOnJS(handleGestureEnd)('cancel');}}" };
let closure_26 = { code: "function useGuildsBarGestureTsx3(){const{gestureState,runOnJS,handleGestureEnd}=this.__closure;if(gestureState.get().mode==='cancel'){runOnJS(handleGestureEnd)('cancel');}}" };
let closure_27 = { code: "function useGuildsBarGestureTsx4({absoluteX:absoluteX,absoluteY:absoluteY}){const{gestureState,runOnJS,handlePress}=this.__closure;if(gestureState.get().mode!=='cancel'){runOnJS(handlePress)(absoluteX,absoluteY);}}" };
let closure_28 = { code: "function useGuildsBarGestureTsx5(event,manager){const{gestureState}=this.__closure;if(gestureState.get().mode==='cancel'){manager.fail();}}" };
let closure_29 = { code: "function useGuildsBarGestureTsx6(event,manager){const{scrollPosition,gestureState,dragRegion,runOnJS,handleTouchesDown}=this.__closure;var _touch$absoluteY;const touch=event.changedTouches[0];const pointerY=((_touch$absoluteY=touch===null||touch===void 0?void 0:touch.absoluteY)!==null&&_touch$absoluteY!==void 0?_touch$absoluteY:0)+scrollPosition.get();if(touch==null||gestureState.get().mode==='cancel'||pointerY<dragRegion.get().min||pointerY>dragRegion.get().max){manager.fail();}else if(event.changedTouches.length===1){runOnJS(handleTouchesDown)(touch.absoluteX,touch.absoluteY);}}" };
let closure_30 = { code: "function useGuildsBarGestureTsx7(){const{runOnJS,handleGestureEnd}=this.__closure;runOnJS(handleGestureEnd)('cancel');}" };
let closure_31 = { code: "function useGuildsBarGestureTsx8(){const{gestureState,runOnJS,handleGestureEnd}=this.__closure;if(gestureState.get().mode==='drag'){runOnJS(handleGestureEnd)('drop');}else if(gestureState.get().mode==='contextmenu'){runOnJS(handleGestureEnd)('contextmenu-open');}else{runOnJS(handleGestureEnd)('cancel');}}" };
let closure_32 = { code: "function useGuildsBarGestureTsx9({absoluteX:absoluteX,absoluteY:absoluteY}){const{gestureState,listInsets,GESTURE_ACCELERATION_RANGE,windowSize,runOnJS,handleGuildDrag,handleContextMenuDrag}=this.__closure;if(gestureState.get().mode==='drag'){if(absoluteX!==gestureState.get().absoluteX||absoluteY!==gestureState.get().absoluteY){let{initialY:initialY}=gestureState.get();const minPushRange=listInsets.get().start+GESTURE_ACCELERATION_RANGE;const maxPushRange=windowSize-listInsets.get().end-GESTURE_ACCELERATION_RANGE;if(initialY<minPushRange&&absoluteY>initialY){initialY=absoluteY;}else if(initialY>maxPushRange&&absoluteY<initialY){initialY=absoluteY;}gestureState.set({...gestureState.get(),absoluteX:absoluteX,absoluteY:absoluteY,initialY:initialY});runOnJS(handleGuildDrag)(absoluteY);}}else if(gestureState.get().mode==='contextmenu'){runOnJS(handleContextMenuDrag)(absoluteX,absoluteY);}}" };
let closure_33 = { code: "function useGuildsBarGestureTsx10(event,manager){const{gestureState,dragDropInProgress,DRAG_GESTURE_MINIMUM_DISTANCE,runOnJS,handleContextMenuDrag,handleGuildDrag}=this.__closure;const touch=event.changedTouches[0];if(gestureState.get().mode!=='pressed'||touch==null){if(gestureState.get().mode==='cancel'||touch==null){manager.fail();dragDropInProgress.set(false);}return;}const diffX=touch.absoluteX-gestureState.get().initialX;const absDiffY=Math.abs(touch.absoluteY-gestureState.get().absoluteY);if(diffX>DRAG_GESTURE_MINIMUM_DISTANCE&&diffX>absDiffY){gestureState.set({...gestureState.get(),mode:'contextmenu',absoluteX:touch.absoluteX,absoluteY:touch.absoluteY});dragDropInProgress.set(false);manager.activate();runOnJS(handleContextMenuDrag)(touch.absoluteX,touch.absoluteY);}else if(absDiffY>DRAG_GESTURE_MINIMUM_DISTANCE){gestureState.set({...gestureState.get(),mode:'drag',initialX:touch.absoluteX,initialY:touch.absoluteY,absoluteX:touch.absoluteX,absoluteY:touch.absoluteY});manager.activate();dragDropInProgress.set(true);runOnJS(handleGuildDrag)(touch.absoluteY);}}" };
let result = require("set").fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarGesture.tsx");

export default function useGuildsBarGesture() {
  obj = gesture(token[15]);
  gesture = obj.useHomeDrawerState().gesture;
  let tmp = listInsets();
  importDefault = tmp;
  token = gesture(token[16]).useToken(importDefault(token[17]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  let obj2 = gesture(token[16]);
  const scrollerRef = gesture(token[7]).useAnimatedRef();
  fastListRef = fastListRef.useRef(null);
  let obj3 = gesture(token[7]);
  let sharedValue = gesture(token[7]).useSharedValue(0);
  let obj4 = gesture(token[7]);
  const sharedValue1 = gesture(token[7]).useSharedValue(0);
  let tmp7 = callback((gestureState) => ({ gestureState: gestureState.gestureState, scrollPosition: gestureState.scrollPosition, dragRegion: gestureState.dragRegion, windowSize: gestureState.windowSize, listInsets: gestureState.listInsets, dragDropInProgress: gestureState.dragDropInProgress }), gesture(token[18]).shallow);
  let gestureState = tmp7.gestureState;
  let scrollPosition = tmp7.scrollPosition;
  let dragRegion = tmp7.dragRegion;
  const windowSize = tmp7.windowSize;
  listInsets = tmp7.listInsets;
  const dragDropInProgress = tmp7.dragDropInProgress;
  const persistantKeys = callback((arg0) => {
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
      scrollPosition = current.computeScrollPosition(windowSize.GUILDS);
    }
    const current2 = tmp.current;
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
    const current3 = tmp.current;
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
    dragRegion = dragRegion.getState().dragRegion;
    const value = dragRegion.get();
    if (!tmp8) {
      obj = { min: null, max: null };
      obj[0] = num2;
      obj[1] = num3;
      const result = dragRegion.set(obj);
    }
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
            tmp3 = closure_13;
            if (closure_6.get() >= closure_13) {
              tmp4 = closure_5;
              num2 = 1000;
              result1 = 1000 * closure_5.get();
              result2 = obj.get() / 1000;
              result3 = obj.set(0);
              tmp8 = gesture;
              tmp9 = closure_2;
              obj2 = gesture(closure_2[7]);
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
  obj = { gestureState, pushScrollAccumulatedTime: sharedValue1, MS_PER_FRAME_60FPS: frameCallback, pushScroll: sharedValue, scrollTo: gesture(token[7]).scrollTo, scrollerRef, roundToNearestPixel: importDefault(token[19]), scrollPosition };
  W.__closure = obj;
  W.__workletHash = 14384524602726;
  W.__initData = closure_24;
  frameCallback = gesture(token[7]).useFrameCallback(W, false);
  let items = [sharedValue, sharedValue1, frameCallback];
  callback = fastListRef.useCallback((arg0) => {
    obj = dragRegion;
    let state = dragRegion.getState();
    const dragSpecs = state.dragSpecs;
    ({ overSpecs, gestureState, dragDropInProgress } = state);
    const result = sharedValue.set(0);
    const result1 = state.set(0);
    let obj2 = frameCallback;
    if (frameCallback.isActive) {
      obj2.setActive(false);
    }
    if ("cancel" === arg0) {
      obj = { event: null, dragSpecs: null, overSpecs: null, gestureState: null };
      obj[0] = arg0;
      obj[1] = dragSpecs;
      obj[2] = overSpecs;
      obj[3] = gestureState.get();
      closure_1_19(obj);
    } else {
      let obj3 = lib(token[12]);
      obj = { category: "GuildsBarGesture", message: "handleGestureEnd started", data: null };
      obj1 = { event: null, dragSpecs: null, overSpecs: null, gestureState: null };
      obj1[0] = arg0;
      obj1[1] = dragSpecs;
      obj1[2] = overSpecs;
      obj1[3] = gestureState.get();
      obj[2] = obj1;
      obj3.addBreadcrumb(obj);
    }
    if ("drop" === arg0) {
      if (null != overSpecs) {
        if (null != dragSpecs) {
          const item2 = dragSpecs.item;
          const item3 = overSpecs.item;
          const type2 = item2.type;
          if (gesture(token[14]).FastListItemTypes.SECTION === type2) {
            const type = item3.type;
            if (tmp34(tmp35[14]).FastListItemTypes.SECTION === type) {
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
          lib = layoutStart - num;
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
          sharedValue = tmp11;
          state = overSpecs.state;
          if ("self" !== state) {
            if (null != state) {
              let id = node2.id;
              if (node.type === scrollPosition.FOLDER) {
                if (node2.type === tmp15.GUILD) {
                  if (null != node2.parentId) {
                    id = node2.parentId;
                  }
                  tmp34(tmp35[20]).batchUpdates(() => {
                    if (node.id !== id) {
                      obj = callback(node[21]);
                      id = tmp.id;
                      let tmp6 = closure_5;
                      if (!tmp6) {
                        tmp6 = c4;
                      }
                      obj.moveById(id, tmp2, tmp6, closure_5);
                      node2(function*() {
                        c3 = 1;
                        obj1 = v0(closure_1_2[22]);
                        yield obj1.saveGuildFolders(closure_1_7.getCompatibleGuildFolders());
                        if (1 === tmp6) {
                          c3 = 0;
                          v0 = 3;
                        } else if (arg0 === 1) {
                          v0 = 3;
                          throw arg1;
                        } else if (arg0 !== 2) {
                          c3 = 0;
                        }
                        c3 = 0;
                        return arg1;
                      })();
                    }
                    state = closure_1_9.getState();
                    obj = { dragNode: tmp, overNode: node2, dropPosition: callback, dragRecyclerKey: null, itemSize: null, overState: null };
                    const item = dragSpecs.item;
                    let str;
                    if (item != null) {
                      str = item.recyclerKey;
                    }
                    if (str == null) {
                      str = "";
                    }
                    obj[3] = str;
                    obj[4] = dragSpecs.itemSize;
                    obj[5] = state;
                    state.dropStart(obj);
                  });
                  obj2 = { type: "drag-drop", dragNode: null, overNode: null, overState: null };
                  obj2[1] = node;
                  obj2[2] = node2;
                  obj2[3] = state;
                  closure_1_22(obj2);
                  const tmp34Result = tmp34(tmp35[20]);
                }
              }
              if (tmp16) {
                c4 = false;
                const first = node2.children[0];
                id = undefined;
                if (first != null) {
                  id = first.id;
                }
              }
              tmp16 = node2.type === scrollPosition.FOLDER && node2.expanded && tmp10;
            }
          }
          const state1 = obj.getState();
          obj3 = { dragNode: null, overNode: null, dropPosition: null, itemSize: null, dragRecyclerKey: null, overState: "self" };
          obj3[0] = node;
          obj3[1] = node;
          ({ itemTop: obj9[2], itemSize: obj9[3], item } = dragSpecs);
          let str11;
          if (item != null) {
            str11 = item.recyclerKey;
          }
          if (str11 == null) {
            str11 = "";
          }
          obj3[4] = str11;
          state1.dropStart(obj3);
          const obj4 = { type: "drag-drop", dragNode: null, overNode: null, overState: "self" };
          obj4[1] = node;
          obj4[2] = node;
          closure_1_22(obj4);
        }
      }
    }
    if ("contextmenu-open" === arg0) {
      const ContextMenuStore = gesture(token[23]).ContextMenuStore;
      const menu = ContextMenuStore.getState().menu;
      if (null != menu) {
        const activeIndex = menu.state.activeIndex;
        const close = menu.requestClose(-1 === activeIndex.get());
      }
    }
    state.setStateShallow({ dragSpecs: "isArray", overSpecs: "accessibilityRole" });
    const value = gestureState.get();
    if (null != value.mode) {
      const obj5 = {};
      const merged = Object.assign(value);
      obj5.mode = null;
      const result2 = gestureState.set(obj5);
      const result3 = dragDropInProgress.set(false);
    }
  }, items);
  const callback1 = fastListRef.useCallback((arg0, arg1) => {
    const state = dragRegion.getState();
    ({ gestureState, dragDropInProgress } = state);
    const value = gestureState.get();
    if (tmp3) {
      obj = {};
      const merged = Object.assign(value);
      obj.mode = "cancel";
      const result = gestureState.set(obj);
      const result1 = dragDropInProgress.set(false);
    }
  }, []);
  const items1 = [callback, token];
  const callback2 = fastListRef.useCallback((absoluteX, absoluteY) => {
    const state = dragRegion.getState();
    ({ dragSpecs, scrollPosition, gestureState, dragDropInProgress, setStateShallow } = state);
    let tmp2 = lib;
    let result2 = token;
    obj = lib(token[12]);
    obj = { absoluteX, absoluteY };
    obj.addBreadcrumb({ category: "GuildsBarGesture", message: "handlePress started", data: obj });
    ({ item, node } = closure_1_23(absoluteY, false, fastListRef));
    if (null != item) {
      if (null != node) {
        obj = { node: null, item: null, itemTop: null, itemSize: null };
        obj[0] = node;
        obj[1] = item;
        ({ layoutStart: obj4[2], layoutSize: obj4[3] } = item);
        const height = sharedValue.get("window").height;
        let obj4 = gesture(result2[24]);
        let sum = height;
        if (obj4.isAndroid()) {
          let tmp10Result = tmp10(result2[25]);
          const rect = tmp10Result.getSafeAreaInsets();
          sum = height + (rect.top + rect.bottom);
        }
        let activeIndex = callback1.activeIndex;
        let result = activeIndex.set(-1);
        tmp10Result = tmp10(result2[26]);
        if (tmp10Result.getIsScreenReaderEnabled()) {
          obj1 = { type: "drag-start", node: null };
          obj1[1] = node;
          closure_1_22(obj1);
        } else {
          const type = node.type;
          if (scrollPosition.GUILD === type) {
            let version = sharedValue1.getGuild(node.id);
            const obj2 = { key: null, title: null, items: null };
            obj2[0] = node.id;
            let name;
            if (version != null) {
              name = version.name;
            }
            obj2[1] = name;
            if (null != version) {
              tmp2 = tmp2(result2[27]);
              version = gestureState.getGuildsTree().version;
              let items = tmp2(version.id, version);
            } else {
              items = [];
            }
            obj2[2] = items;
          } else {
            let tmp15;
            if (tmp14.FOLDER === type) {
              const obj3 = { key: null, title: null, items: null };
              ({ id: obj14[0], name: obj14[1] } = node);
              obj3[2] = tmp10(result2[28]).getGuildFolderMenuItems(node.id);
              tmp15 = obj3;
              const tmp10Result1 = tmp10(result2[28]);
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
                diff = sum - sum1 - token;
              }
              obj4 = { key: null, title: null, items: null, x: null, y: null, positionX: "left", positionY: null, width: null, height: null, state: null, dividerIndexes: null, keyboardShouldPersistTaps: "never", requestClose: null, onClose: null };
              const _HermesInternal = HermesInternal;
              obj4[0] = "" + tmp20;
              obj4[1] = tmp21;
              obj4[2] = items;
              obj4[3] = 12 + token + 12;
              obj4[4] = diff;
              obj4[6] = str2;
              obj4[7] = token;
              obj4[8] = token;
              obj4[9] = tmp12;
              obj4[10] = [];
              obj4[12] = function requestClose(ContextMenuBackdrop, arg1) {
                if (!ContextMenuBackdrop) {
                  const activeIndex = callback1.activeIndex;
                  obj = items[activeIndex.get(activeIndex)];
                  if (obj != null) {
                    obj.action();
                  }
                }
                const activeIndex2 = callback1.activeIndex;
                const result = activeIndex2.set(-1);
                gesture(token[23]).hideContextMenu();
                closure_1_14("contextmenu-close");
              };
              obj4[13] = function onClose() {

              };
              tmp10(result2[23]).showContextMenu(obj4);
              const tmp10Result2 = tmp10(result2[23]);
            }
          }
        }
        const obj5 = { dragSpecs: null, overSpecs: "Array", windowSize: -1 };
        obj5[0] = obj;
        obj5[2] = sum;
        setStateShallow(obj5);
        const obj6 = { mode: "pressed", initialY: null, initialX: null, absoluteY: null, absoluteX: null };
        obj6[1] = absoluteY;
        obj6[2] = absoluteX;
        obj6[3] = absoluteY;
        obj6[4] = absoluteX;
        const result1 = gestureState.set(obj6);
        setStateShallow = tmp10(result2[9]);
        result2 = setStateShallow.triggerHapticFeedback(tmp10(result2[9]).HapticFeedbackTypes.IMPACT_MEDIUM);
        tmp12 = callback1;
      }
    }
    const obj7 = {};
    const merged = Object.assign(gestureState.get());
    obj7.mode = null;
    const result3 = gestureState.set(obj7);
    const result4 = dragDropInProgress.set(false);
  }, items1);
  const callback3 = fastListRef.useCallback((absoluteX, absoluteY) => {
    const result = gesture(token[23]).updateContextMenuState(absoluteX, absoluteY, callback1);
  }, []);
  const items2 = [sharedValue, sharedValue1, frameCallback, tmp];
  const callback4 = fastListRef.useCallback((arg0) => {
    const state = dragRegion.getState();
    const overSpecs = state.overSpecs;
    obj1 = overSpecs;
    ({ dragSpecs: closure_1, windowSize } = state);
    ({ setStateShallow: scrollerRef, listInsets, gestureState } = state);
    obj = { overSpecs, dragSpecs: lib, windowSize, gestureState: gestureState.get() };
    callback4(obj);
    if (null != lib) {
      const value = gestureState.get();
      let tmp66 = gesture;
      let batchUpdates = token;
      let isScreenReaderEnabled = gesture(token[26]).getIsScreenReaderEnabled();
      if (!isScreenReaderEnabled) {
        isScreenReaderEnabled = null == lib.node;
      }
      if (!isScreenReaderEnabled) {
        isScreenReaderEnabled = null != overSpecs;
      }
      if (!isScreenReaderEnabled) {
        obj = { type: "drag-start", node: null };
        obj[1] = lib.node;
        closure_1_22(obj);
      }
      const _Map = Map;
      const map = new Map();
      let tmp11 = null != overSpecs;
      if (tmp11) {
        tmp11 = "self" !== overSpecs.state;
      }
      if (tmp11) {
        let result = map.set(lib.item.recyclerKey, 0);
        const result1 = map.set(overSpecs.item.recyclerKey, 2 * lib.itemSize);
      }
      const obj8 = gesture(token[26]);
      const tmp18 = closure_1_23;
      ({ item, overPercentage, node } = closure_1_23(arg0, true, fastListRef, map));
      let id;
      if (overSpecs != null) {
        id = overSpecs.node.id;
      }
      let id1;
      if (node != null) {
        id1 = node.id;
      }
      if (id !== id1) {
        const ContextMenuStore = tmp66(batchUpdates[23]).ContextMenuStore;
        if (null != ContextMenuStore.getState().menu) {
          tmp66(batchUpdates[23]).hideContextMenu();
          const tmp66Result = tmp66(batchUpdates[23]);
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
            if (lib.item.recyclerKey !== item.recyclerKey) {
              let str2 = lib.item.recyclerKey;
              if (str2 == null) {
                str2 = "";
              }
              const result2 = map.set(str2, 0);
              const result3 = map.set(item.recyclerKey, 2 * lib);
            }
            ({ item: item2, overPercentage: overPercentage2, node: node2 } = tmp18(arg0, true, tmp19, tmp12));
            const tmp18Result = tmp18(arg0, true, tmp19, tmp12);
          }
        }
        const node3 = lib.node;
        const item3 = lib.item;
        let str3;
        if (null != item3) {
          if (null != item2) {
            if (null != node3) {
              if (null != node2) {
                str3 = "self";
                if (node3.id !== node2.id) {
                  const type2 = item3.type;
                  if (tmp66(batchUpdates[14]).FastListItemTypes.SECTION === type2) {
                    let type = item2.type;
                    if (tmp66(batchUpdates[14]).FastListItemTypes.SECTION === type) {
                      let str5 = "self";
                      if (item2.recyclerKey !== item3.recyclerKey) {
                        let str6 = "after";
                        if (overPercentage2 < 0.5) {
                          str6 = "before";
                        }
                        str5 = str6;
                      }
                    }
                  }
                  if (node3.type === scrollPosition.FOLDER) {
                    if ("after" === tmp39) {
                      if (!tmp71) {
                        if (!tmp71) {
                          if (null != node2.parentId) {
                            let guildsTree = gestureState.getGuildsTree();
                            node = guildsTree.getNode(node2.parentId);
                          }
                        }
                      }
                    }
                  }
                  str3 = tmp39;
                  if ("self" !== tmp39) {
                    str3 = tmp39;
                    if (null != tmp39) {
                      if (node3.type === tmp40.GUILD) {
                        if (node2.type === tmp40.GUILD) {
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
                      if (node3.type === tmp40.GUILD) {
                        str3 = tmp39;
                        if (node2.type === tmp40.FOLDER) {
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
          node2 = lib.node;
          item2 = lib.item;
          str3 = "self";
        }
        if (tmp46) {
          obj = { type: "drag-move", dragNode: null, overNode: null, overState: null };
          obj[1] = lib.node;
          obj[2] = node2;
          obj[3] = str3;
          closure_1_22(obj);
        }
        let tmp50 = null == node2 || null == item2;
        if (!tmp50) {
          let node1;
          if (overSpecs != null) {
            node1 = overSpecs.node;
          }
          let tmp52 = node1 === node2;
          if (tmp52) {
            item = undefined;
            if (overSpecs != null) {
              item = overSpecs.item;
            }
            tmp52 = item === item2;
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
          obj1 = { node: null, item: null, state: null, percentage: null };
          obj1[0] = node2;
          obj1[1] = item2;
          obj1[2] = str3;
          obj1[3] = overPercentage2;
        }
        tmp46 = null != node2 && null != overSpecs;
      } else {
        let percentage;
        if (overSpecs != null) {
          percentage = overSpecs.percentage;
        }
      }
      const sum = listInsets.get().start + dragDropInProgress;
      const diff = windowSize - listInsets.get().end - dragDropInProgress;
      if (arg0 < sum) {
        const _Math4 = Math;
        const _Math5 = Math;
        const _Math6 = Math;
        let num14 = -1 * Math.max(Math.min(Math.min(value.initialY, sum) - arg0, tmp55) / tmp55, 0);
      } else {
        num14 = 0;
        if (arg0 > diff) {
          const _Math = Math;
          const _Math2 = Math;
          const _Math3 = Math;
          num14 = Math.max(Math.min(arg0 - Math.max(value.initialY, diff), tmp55) / tmp55, 0);
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
        tmp66 = tmp66(batchUpdates[20]);
        batchUpdates = tmp66.batchUpdates;
        batchUpdates(() => {
          if (null != obj) {
            if (obj.node.type === closure_1_8.FOLDER) {
              if (obj.node.expanded) {
                obj = closure_1_1(windowSize[21]);
                const result = obj.toggleGuildFolderExpand(obj.node.id);
                const guildsTree = closure_1_7.getGuildsTree();
                const node = guildsTree.getNode(obj.node.id);
                let tmp9 = node !== obj.node;
                if (tmp9) {
                  let type;
                  if (node != null) {
                    type = node.type;
                  }
                  tmp9 = type === tmp16.FOLDER;
                }
                if (tmp9) {
                  obj = {};
                  const merged = Object.assign(obj);
                  obj.node = node;
                }
              }
            }
          }
          obj = { overSpecs: obj1, dragSpecs: obj, windowSize };
          callback(obj);
        });
      } else {
        num14 = frameCallback;
      }
      const result5 = sharedValue1.set(0);
      num14.setActive(false);
      const tmp23 = closure_1_23(arg0, true, fastListRef, map);
    }
  }, items2);
  let obj6 = gesture(token[7]);
  const items3 = [callback4];
  const onFastListScrollWorklet = gesture(token[29]).useExternalScrollEventHandler({ id: "guilds" });
  const items4 = [dragDropInProgress, dragRegion, gestureState, callback3, callback, callback4, callback2, callback1, listInsets, scrollPosition, scrollerRef, windowSize, gesture];
  const onFastListScroll = fastListRef.useCallback(() => {
    gestureState = dragRegion.getState().gestureState;
    const value = gestureState.get();
    if ("drag" === value.mode) {
      callback4(value.absoluteY);
    }
  }, items3);
  gesture = fastListRef.useMemo(() => {
    const Gesture = gesture(token[30]).Gesture;
    const Gesture2 = gesture(token[30]).Gesture;
    const fn = function h(changedTouches, fail) {
      const first = changedTouches.changedTouches[0];
      let num;
      if (first != null) {
        num = first.absoluteY;
      }
      if (num == null) {
        num = 0;
      }
      const sum = num + closure_8.get();
      if (null != first) {
        if ("cancel" !== store.get().mode) {
          if (sum >= closure_9.get().min) {
            if (sum <= obj.get().max) {
              if (1 === changedTouches.changedTouches.length) {
                closure_1_0(closure_1_2[7]).runOnJS(closure_15)(first.absoluteX, first.absoluteY);
                const obj2 = closure_1_0(closure_1_2[7]);
              }
            }
          }
          obj = closure_9;
        }
      }
      fail.fail();
    };
    obj = { scrollPosition, gestureState, dragRegion, runOnJS: gesture(token[7]).runOnJS, handleTouchesDown: callback1 };
    fn.__closure = obj;
    fn.__workletHash = 5430653816983;
    fn.__initData = closure_1_29;
    const LongPressResult = Gesture2.LongPress();
    const fn2 = function f(arg0, fail) {
      if ("cancel" === store.get().mode) {
        fail.fail();
      }
    };
    fn2.__closure = { gestureState };
    fn2.__workletHash = 8960390413776;
    fn2.__initData = closure_1_28;
    const onTouchesDownResult = Gesture2.LongPress().onTouchesDown(fn);
    const fn3 = function c(arg0) {
      ({ absoluteX, absoluteY } = arg0);
      if ("cancel" !== store.get().mode) {
        closure_1_0(closure_1_2[7]).runOnJS(closure_16)(absoluteX, absoluteY);
        obj = closure_1_0(closure_1_2[7]);
      }
    };
    obj = { gestureState, runOnJS: gesture(token[7]).runOnJS, handlePress: callback2 };
    fn3.__closure = obj;
    fn3.__workletHash = 2121892092583;
    fn3.__initData = closure_1_27;
    const onTouchesMoveResult = Gesture2.LongPress().onTouchesDown(fn).onTouchesMove(fn2);
    const fn4 = function u() {
      if ("cancel" === store.get().mode) {
        closure_1_0(closure_1_2[7]).runOnJS(closure_14)("cancel");
        obj = closure_1_0(closure_1_2[7]);
      }
    };
    const onStartResult = Gesture2.LongPress().onTouchesDown(fn).onTouchesMove(fn2).onStart(fn3);
    fn4.__closure = { gestureState, runOnJS: gesture(token[7]).runOnJS, handleGestureEnd: callback };
    fn4.__workletHash = 2371934536573;
    fn4.__initData = closure_1_26;
    obj1 = { gestureState, runOnJS: gesture(token[7]).runOnJS, handleGestureEnd: callback };
    const fn5 = function l() {
      let tmp = null != store.get().mode;
      if (tmp) {
        tmp = "cancel" !== store.get().mode;
      }
      if (!tmp) {
        closure_1_0(closure_1_2[7]).runOnJS(closure_14)("cancel");
        const obj2 = closure_1_0(closure_1_2[7]);
      }
    };
    const onEndResult = onStartResult.onEnd(fn4);
    fn5.__closure = { gestureState, runOnJS: gesture(token[7]).runOnJS, handleGestureEnd: callback };
    fn5.__workletHash = 8240921685123;
    fn5.__initData = closure_1_25;
    let obj2 = { gestureState, runOnJS: gesture(token[7]).runOnJS, handleGestureEnd: callback };
    const Gesture3 = gesture(token[30]).Gesture;
    const onTouchesCancelledResult = onEndResult.onTouchesCancelled(fn5);
    const PanResult = Gesture3.Pan();
    let result = Gesture3.Pan().manualActivation(true).simultaneousWithExternalGesture(scrollerRef, gesture);
    let result1 = result.shouldCancelWhenOutside(false);
    const fn6 = function o(arg0, activate) {
      const first = arg0.changedTouches[0];
      obj = store;
      if ("pressed" === store.get().mode) {
        if (null != first) {
          const diff = first.absoluteX - obj.get().initialX;
          const _Math = Math;
          const absolute = Math.abs(first.absoluteY - obj.get().absoluteY);
          if (diff > 10) {
            if (diff > absolute) {
              obj = {};
              const merged = Object.assign(obj.get());
              obj.mode = "contextmenu";
              ({ absoluteX: obj2.absoluteX, absoluteY: obj2.absoluteY } = first);
              const result = obj.set(obj);
              const result1 = store3.set(false);
              activate.activate();
              closure_1_0(closure_1_2[7]).runOnJS(closure_17)(first.absoluteX, first.absoluteY);
              const obj3 = closure_1_0(closure_1_2[7]);
            }
          }
          if (absolute > 10) {
            obj = {};
            const merged1 = Object.assign(obj.get());
            obj.mode = "drag";
            ({ absoluteX: obj4.initialX, absoluteY: obj4.initialY, absoluteX: obj4.absoluteX, absoluteY: obj4.absoluteY } = first);
            const result2 = obj.set(obj);
            activate.activate();
            const result3 = store3.set(true);
            closure_1_0(closure_1_2[7]).runOnJS(closure_18)(first.absoluteY);
            const obj5 = closure_1_0(closure_1_2[7]);
          }
        }
      }
      let tmp3 = "cancel" !== obj.get().mode;
      if (tmp3) {
        tmp3 = null != first;
      }
      if (!tmp3) {
        activate.fail();
        const result4 = store3.set(false);
      }
    };
    const manualActivationResult = Gesture3.Pan().manualActivation(true);
    fn6.__closure = { gestureState, dragDropInProgress, DRAG_GESTURE_MINIMUM_DISTANCE: 10, runOnJS: gesture(token[7]).runOnJS, handleContextMenuDrag: callback3, handleGuildDrag: callback4 };
    fn6.__workletHash = 15225957003871;
    fn6.__initData = closure_1_33;
    let obj3 = { gestureState, dragDropInProgress, DRAG_GESTURE_MINIMUM_DISTANCE: 10, runOnJS: gesture(token[7]).runOnJS, handleContextMenuDrag: callback3, handleGuildDrag: callback4 };
    const fn7 = function s(arg0) {
      ({ absoluteX, absoluteY } = arg0);
      obj = store;
      if ("drag" === store.get().mode) {
        if (absoluteX !== obj.get().absoluteX) {
          let initialY = obj.get().initialY;
          const sum = store2.get().start + closure_1_12;
          let tmp6 = initialY < sum;
          const diff = closure_10 - store2.get().end - closure_1_12;
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
          obj = {};
          const merged = Object.assign(obj.get());
          obj.absoluteX = absoluteX;
          obj.absoluteY = absoluteY;
          obj.initialY = initialY;
          const result = obj.set(obj);
          closure_1_0(closure_1_2[7]).runOnJS(closure_18)(absoluteY);
          const obj3 = closure_1_0(closure_1_2[7]);
        }
      } else if ("contextmenu" === obj.get().mode) {
        closure_1_0(closure_1_2[7]).runOnJS(closure_17)(absoluteX, absoluteY);
        const obj4 = closure_1_0(closure_1_2[7]);
      }
    };
    const onTouchesMoveResult1 = result1.onTouchesMove(fn6);
    fn7.__closure = { gestureState, listInsets, GESTURE_ACCELERATION_RANGE: dragDropInProgress, windowSize, runOnJS: gesture(token[7]).runOnJS, handleGuildDrag: callback4, handleContextMenuDrag: callback3 };
    fn7.__workletHash = 14488930469604;
    fn7.__initData = closure_1_32;
    let obj4 = { gestureState, listInsets, GESTURE_ACCELERATION_RANGE: dragDropInProgress, windowSize, runOnJS: gesture(token[7]).runOnJS, handleGuildDrag: callback4, handleContextMenuDrag: callback3 };
    const fn8 = function n() {
      if ("drag" === store.get().mode) {
        closure_1_0(closure_1_2[7]).runOnJS(closure_14)("drop");
        const obj4 = closure_1_0(closure_1_2[7]);
      } else if ("contextmenu" === store.get().mode) {
        closure_1_0(closure_1_2[7]).runOnJS(closure_14)("contextmenu-open");
        const obj3 = closure_1_0(closure_1_2[7]);
      } else {
        closure_1_0(closure_1_2[7]).runOnJS(closure_14)("cancel");
        const obj2 = closure_1_0(closure_1_2[7]);
      }
    };
    const onUpdateResult = onTouchesMoveResult1.onUpdate(fn7);
    fn8.__closure = { gestureState, runOnJS: gesture(token[7]).runOnJS, handleGestureEnd: callback };
    fn8.__workletHash = 9863070264039;
    fn8.__initData = closure_1_31;
    let obj5 = { gestureState, runOnJS: gesture(token[7]).runOnJS, handleGestureEnd: callback };
    const fn9 = function t() {
      closure_1_0(closure_1_2[7]).runOnJS(closure_14)("cancel");
    };
    const onEndResult1 = onUpdateResult.onEnd(fn8);
    fn9.__closure = { runOnJS: gesture(token[7]).runOnJS, handleGestureEnd: callback };
    fn9.__workletHash = 9715999020978;
    fn9.__initData = closure_1_30;
    return Gesture.Simultaneous(onTouchesCancelledResult, onEndResult1.onTouchesCancelled(fn9));
  }, items4);
  const effect1 = fastListRef.useEffect(() => dragRegion.subscribe((dragSpecs) => {
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
  return { scrollPosition, gesture, scrollerRef, fastListRef, persistantKeys, onFastListScroll, onFastListScrollWorklet };
};