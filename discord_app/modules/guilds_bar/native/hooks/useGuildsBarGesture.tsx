// discord_app/modules/guilds_bar/native/hooks/useGuildsBarGesture.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import intl15 from "../../../../intl/index.native.tsx";
import SentryUtilsDefault from "../../../../utils/SentryUtils.native.tsx";
import react_native2 from "../../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import shared from "../../../../design/shared.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import SortedGuildStore2 from "../../../../stores/SortedGuildStore.tsx";
import useIsScreenReaderEnabled from "../../../a11y/native/useIsScreenReaderEnabled.native.tsx";
import LegacyBaseButton from "../../../../../_runtime/06147_LegacyBaseButton.js";
import FastList from "../../../../lib/native/FastList.tsx";
import ContextMenuState from "../../../../design/components/ContextMenu/native/ContextMenuState.native.tsx";
import roundToNearestPixelDefault from "../../../voice_panel/native/utils/roundToNearestPixel.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../../_runtime/00019_react.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import GuildsBarDnDStore from "../GuildsBarDnDStore.tsx";
import GuildsBarConstants from "../GuildsBarConstants.tsx";
import "ReanimatedRexport";
import ReanimatedRexport_mod from "../../../reanimated/ReanimatedRexport.tsx";
import debounce from "../../../../../_runtime/00551_debounce.js";
import module_12_mod from "../../../../../_runtime/metro/00012__.js";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const SortedGuildStore = SortedGuildStore2;
let _undefined, c1, closure_1, closure_2, importDefault, set, set2;

let ReanimatedRexport;
let c10;
let unpackModuleId;
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
    if ("after" !== overState) {
      let str2 = "convert-after";
      if ("convert-after" !== overState) {
        return num;
      }
    }
    return num + 1;
  }
}
function triggerHapticsAndAnnouncementsIfNecessary(type) {
  let dragNode;
  let overNode;
  let overState2;
  type = type.type;
  if ("drag-start" === type) {
    let tmp40;
    const node = type.node;
    const type4 = node.type;
    if (GuildsNodeType.GUILD === type4) {
      const guild = GuildStore.getGuild(node.id);
      let name1;
      if (guild != null) {
        name1 = guild.name;
      }
      if (name1 == null) {
        const intl11 = intl15.intl;
        name1 = intl11.string(intl15.t.fKYRlM);
      }
      tmp40 = name1;
    } else if (tmp39.FOLDER === type4) {
      let name4 = node.name;
      if (name4 == null) {
        const intl10 = intl15.intl;
        name4 = intl10.string(intl15.t.ebAnWE);
      }
      tmp40 = name4;
    }
    if (null != tmp40) {
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl12 = intl15.intl;
      const obj2 = { itemName: tmp40 };
      announce(intl12.formatToPlainString(intl15.t["vHD/Je"], obj2));
    }
    closure_16(HapticUtils.HapticFeedbackTypes.DRAG_AND_DROP_START);
    closure_16.flush();
  } else if ("drag-move" === type) {
    let tmp7;
    let tmp8;
    let type1;
    if (_undefined != null) {
      type1 = _undefined.type;
    }
    let type6;
    if (_undefined != null) {
      type6 = _undefined.type;
    }
    if ("drag-move" === type6) {
      tmp7 = getDropIndex(_undefined.dragNode, _undefined.overNode, _undefined.overState);
      tmp8 = getDropIndex;
    } else {
      tmp7 = getDropIndex(type.dragNode, type.dragNode, "self");
      tmp8 = getDropIndex;
    }
    let type7;
    const tmp8Result = tmp8(type.dragNode, type.overNode, type.overState);
    if (_undefined != null) {
      type7 = _undefined.type;
    }
    let str3 = "self";
    if ("drag-start" !== type7) {
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
      let tmp35;
      closure_16(HapticUtils.HapticFeedbackTypes.DRAG_AND_DROP_MOVE);
      ({ dragNode, overNode, overState: overState2 } = type);
      if ("convert-before" !== overState2) {
        let formatToPlainStringResult1;
        if ("convert-after" !== overState2) {
          if ("drop-into" === overState2) {
            let formatToPlainStringResult;
            if (overNode.type === GuildsNodeType.FOLDER) {
              const intl6 = intl15.intl;
              const obj3 = { folderName: overNode.name };
              formatToPlainStringResult = intl6.formatToPlainString(intl15.t.uLDoxR, obj3);
            }
            formatToPlainStringResult1 = formatToPlainStringResult;
          } else if ("before" === overState2) {
            let tmp28;
            const intl3 = intl15.intl;
            const formatToPlainString = intl3.formatToPlainString;
            const type2 = overNode.type;
            const prop = intl15.t["A5aDw+"];
            if (GuildsNodeType.GUILD === type2) {
              const guild1 = GuildStore.getGuild(overNode.id);
              let name5;
              if (guild1 != null) {
                name5 = guild1.name;
              }
              if (name5 == null) {
                const intl5 = intl15.intl;
                name5 = intl5.string(intl15.t.fKYRlM);
              }
              tmp28 = name5;
            } else if (tmp27.FOLDER === type2) {
              let name2 = overNode.name;
              if (name2 == null) {
                const intl4 = intl15.intl;
                name2 = intl4.string(intl15.t.ebAnWE);
              }
              tmp28 = name2;
            }
            const obj4 = { itemName: tmp28 };
            formatToPlainStringResult1 = formatToPlainString(prop, obj4);
          } else if ("after" === overState2) {
            let tmp21;
            const intl14 = intl15.intl;
            const formatToPlainString3 = intl14.formatToPlainString;
            const type5 = overNode.type;
            const w8FN92 = intl15.t.w8FN92;
            if (GuildsNodeType.GUILD === type5) {
              const guild2 = GuildStore.getGuild(overNode.id);
              let name6;
              if (guild2 != null) {
                name6 = guild2.name;
              }
              if (name6 == null) {
                const intl2 = intl15.intl;
                name6 = intl2.string(intl15.t.fKYRlM);
              }
              tmp21 = name6;
            } else if (tmp67.FOLDER === type5) {
              let name = overNode.name;
              if (name == null) {
                const intl = intl15.intl;
                name = intl.string(intl15.t.ebAnWE);
              }
              tmp21 = name;
            }
            const obj = { itemName: tmp21 };
            formatToPlainStringResult1 = formatToPlainString3(w8FN92, obj);
          }
        }
        if (null != formatToPlainStringResult1) {
          closure_17(formatToPlainStringResult1);
        }
      }
      const intl7 = intl15.intl;
      const formatToPlainString2 = intl7.formatToPlainString;
      const type3 = overNode.type;
      const qiQ0QI = intl15.t.qiQ0QI;
      if (GuildsNodeType.GUILD === type3) {
        const guild3 = GuildStore.getGuild(overNode.id);
        let name7;
        if (guild3 != null) {
          name7 = guild3.name;
        }
        if (name7 == null) {
          const intl9 = intl15.intl;
          name7 = intl9.string(intl15.t.fKYRlM);
        }
        tmp35 = name7;
      } else if (tmp34.FOLDER === type3) {
        let name3 = overNode.name;
        if (name3 == null) {
          const intl8 = intl15.intl;
          name3 = intl8.string(intl15.t.ebAnWE);
        }
        tmp35 = name3;
      }
      const obj5 = { itemName: tmp35 };
      formatToPlainStringResult1 = formatToPlainString2(qiQ0QI, obj5);
    } else {
      const overState = type.overState;
      null != overState && overState.startsWith("convert");
      null != str3 && str3.startsWith("convert");
    }
  } else if ("drag-drop" === type) {
    closure_16(HapticUtils.HapticFeedbackTypes.DRAG_AND_DROP_END);
    closure_16.flush();
    closure_17.flush();
    const AccessibilityAnnouncer2 = shared.AccessibilityAnnouncer;
    const announce2 = AccessibilityAnnouncer2.announce;
    const intl13 = intl15.intl;
    announce2(intl13.string(intl15.t.lMkmz7));
  }
  let tmp58;
  if ("drag-drop" !== type.type) {
    tmp58 = type;
  }
  _undefined = tmp58;
}
function getItemAndNodeFromTouchEvent(absoluteY, arg1, fastListRef, map) {
  let dragRegion;
  let scrollPosition;
  const state = GuildsBarDnDStore.getState();
  ({ dragRegion, scrollPosition } = state);
  const sum = scrollPosition.get() + absoluteY;
  let bound = sum;
  if (arg1) {
    const range = dragRegion.get();
    const _Math = Math;
    const _Math2 = Math;
    bound = Math.max(Math.min(sum, range.max - 2), range.min + 2);
  }
  const current = fastListRef.current;
  let sectionItemFromPosition;
  if (current != null) {
    sectionItemFromPosition = current.getSectionItemFromPosition(bound, map);
  }
  if (sectionItemFromPosition == null) {
    sectionItemFromPosition = { item: "duration", positionPercentage: false };
  }
  const item = sectionItemFromPosition.item;
  let tmp6;
  const positionPercentage = sectionItemFromPosition.positionPercentage;
  if (null != item) {
    let tmp7;
    if (null != item) {
      if (item.section >= constants.GUILDS) {
        const element = SortedGuildStore.getFastListGuildFolders()[item.section - tmp8.GUILDS];
        if (null != element) {
          const type = item.type;
          if (FastList.FastListItemTypes.SECTION === type) {
            if (null != element) {
              tmp7 = element;
            }
          } else if (FastList.FastListItemTypes.ITEM === type) {
            if (element.type !== GuildsNodeType.ROOT) {
              let tmp13 = element;
              if (element.type !== GuildsNodeType.FOLDER) {
                if (tmp13.type === GuildsNodeType.GUILD) {
                  tmp7 = tmp13;
                }
              } else {
                tmp13 = element.children[item.item];
              }
            }
          }
        }
      }
    }
    tmp6 = tmp7;
  }
  const obj = { item, overPercentage: Math.floor(100 * positionPercentage) / 100, node: tmp6, pointerPosition: bound };
  return obj;
}
const Dimensions = react_native.Dimensions;
const GuildsNodeType = SortedGuildStore2.GuildsNodeType;
({ FastListRenderSections: c10, useGuildWrapperSize: unpackModuleId } = GuildsBarConstants);
let c12 = 160;
let c13 = 16.666666666666668;
let __closure = {
  pan: ReanimatedRexport.makeMutable(-1),
  itemMeasurements: ReanimatedRexport.makeMutable([]),
  activeIndex: ReanimatedRexport.makeMutable(-1),
};
ReanimatedRexport = ReanimatedRexport_mod;
let closure_16 = debounce(HapticUtils.triggerHapticFeedback, 16);
let closure_17 = debounce((intl) => {
  const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
  AccessibilityAnnouncer.announce(intl);
}, 500);
let module_12 = module_12_mod;
let closure_18 = module_12.throttle((data) => {
  const obj = SentryUtilsDefault;
  const obj2 = { category: "GuildsBarGesture", message: "handleGuildDrag started", data };
  obj.addBreadcrumb(obj2);
}, 2000);
module_12 = module_12_mod;
let closure_19 = module_12.throttle((data) => {
  const obj = SentryUtilsDefault;
  const obj2 = { category: "GuildsBarGesture", message: "handleGestureEnd started", data };
  obj.addBreadcrumb(obj2);
}, 3000);
let c21;
const __initData = {
  code: "function useGuildsBarGestureTsx1({timeSincePreviousFrame:timeSincePreviousFrame}){const{gestureState_0,pushScrollAccumulatedTime,MS_PER_FRAME_60FPS,pushScroll,scrollTo,scrollerRef,roundToNearestPixel,scrollPosition_0}=this.__closure;if(timeSincePreviousFrame==null||timeSincePreviousFrame<=0||gestureState_0.get().mode!=='drag'){return;}pushScrollAccumulatedTime.set(pushScrollAccumulatedTime.get()+timeSincePreviousFrame);if(pushScrollAccumulatedTime.get()<MS_PER_FRAME_60FPS){return;}const scrollSpeed=1000*pushScroll.get();const timeInSeconds=pushScrollAccumulatedTime.get()/1000;pushScrollAccumulatedTime.set(0);scrollTo(scrollerRef,0,Math.max(roundToNearestPixel(scrollPosition_0.get()+timeInSeconds*scrollSpeed),0),false);}",
};
let closure_25 = {
  code: "function useGuildsBarGestureTsx2(){const{gestureState_0,runOnJS,handleGestureEnd}=this.__closure;if(gestureState_0.get().mode==null||gestureState_0.get().mode==='cancel'){runOnJS(handleGestureEnd)('cancel');}}",
};
let closure_26 = {
  code: "function useGuildsBarGestureTsx3(){const{gestureState_0,runOnJS,handleGestureEnd}=this.__closure;if(gestureState_0.get().mode==='cancel'){runOnJS(handleGestureEnd)('cancel');}}",
};
let closure_27 = {
  code: "function useGuildsBarGestureTsx4({absoluteX:absoluteX_2,absoluteY:absoluteY_3}){const{gestureState_0,runOnJS,handlePress}=this.__closure;if(gestureState_0.get().mode!=='cancel'){runOnJS(handlePress)(absoluteX_2,absoluteY_3);}}",
};
let closure_28 = {
  code: "function useGuildsBarGestureTsx5(event_1,manager_0){const{gestureState_0}=this.__closure;if(gestureState_0.get().mode==='cancel'){manager_0.fail();}}",
};
let closure_29 = {
  code: "function useGuildsBarGestureTsx6(event_0,manager){const{scrollPosition_0,gestureState_0,dragRegion_0,runOnJS,handleTouchesDown}=this.__closure;var _touch$absoluteY;const touch=event_0.changedTouches[0];const pointerY=((_touch$absoluteY=touch===null||touch===void 0?void 0:touch.absoluteY)!==null&&_touch$absoluteY!==void 0?_touch$absoluteY:0)+scrollPosition_0.get();if(touch==null||gestureState_0.get().mode==='cancel'||pointerY<dragRegion_0.get().min||pointerY>dragRegion_0.get().max){manager.fail();}else if(event_0.changedTouches.length===1){runOnJS(handleTouchesDown)(touch.absoluteX,touch.absoluteY);}}",
};
let closure_30 = {
  code: "function useGuildsBarGestureTsx7(){const{runOnJS,handleGestureEnd}=this.__closure;runOnJS(handleGestureEnd)('cancel');}",
};
let closure_31 = {
  code: "function useGuildsBarGestureTsx8(){const{gestureState_0,runOnJS,handleGestureEnd}=this.__closure;if(gestureState_0.get().mode==='drag'){runOnJS(handleGestureEnd)('drop');}else if(gestureState_0.get().mode==='contextmenu'){runOnJS(handleGestureEnd)('contextmenu-open');}else{runOnJS(handleGestureEnd)('cancel');}}",
};
let closure_32 = {
  code: "function useGuildsBarGestureTsx9({absoluteX:absoluteX_3,absoluteY:absoluteY_4}){const{gestureState_0,listInsets_0,GESTURE_ACCELERATION_RANGE,windowSize_0,runOnJS,handleGuildDrag,handleContextMenuDrag}=this.__closure;if(gestureState_0.get().mode==='drag'){if(absoluteX_3!==gestureState_0.get().absoluteX||absoluteY_4!==gestureState_0.get().absoluteY){let{initialY:initialY}=gestureState_0.get();const minPushRange_0=listInsets_0.get().start+GESTURE_ACCELERATION_RANGE;const maxPushRange_0=windowSize_0-listInsets_0.get().end-GESTURE_ACCELERATION_RANGE;if(initialY<minPushRange_0&&absoluteY_4>initialY){initialY=absoluteY_4;}else if(initialY>maxPushRange_0&&absoluteY_4<initialY){initialY=absoluteY_4;}gestureState_0.set({...gestureState_0.get(),absoluteX:absoluteX_3,absoluteY:absoluteY_4,initialY:initialY});runOnJS(handleGuildDrag)(absoluteY_4);}}else if(gestureState_0.get().mode==='contextmenu'){runOnJS(handleContextMenuDrag)(absoluteX_3,absoluteY_4);}}",
};
let closure_33 = {
  code: "function useGuildsBarGestureTsx10(event_2,manager_1){const{gestureState_0,dragDropInProgress_0,DRAG_GESTURE_MINIMUM_DISTANCE,runOnJS,handleContextMenuDrag,handleGuildDrag}=this.__closure;const touch_0=event_2.changedTouches[0];if(gestureState_0.get().mode!=='pressed'||touch_0==null){if(gestureState_0.get().mode==='cancel'||touch_0==null){manager_1.fail();dragDropInProgress_0.set(false);}return;}const diffX=touch_0.absoluteX-gestureState_0.get().initialX;const absDiffY=Math.abs(touch_0.absoluteY-gestureState_0.get().absoluteY);if(diffX>DRAG_GESTURE_MINIMUM_DISTANCE&&diffX>absDiffY){gestureState_0.set({...gestureState_0.get(),mode:'contextmenu',absoluteX:touch_0.absoluteX,absoluteY:touch_0.absoluteY});dragDropInProgress_0.set(false);manager_1.activate();runOnJS(handleContextMenuDrag)(touch_0.absoluteX,touch_0.absoluteY);}else if(absDiffY>DRAG_GESTURE_MINIMUM_DISTANCE){gestureState_0.set({...gestureState_0.get(),mode:'drag',initialX:touch_0.absoluteX,initialY:touch_0.absoluteY,absoluteX:touch_0.absoluteX,absoluteY:touch_0.absoluteY});manager_1.activate();dragDropInProgress_0.set(true);runOnJS(handleGuildDrag)(touch_0.absoluteY);}}",
};
let size = size_mod;
let result = size.fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarGesture.tsx");

export default function useGuildsBarGesture() {
  let GESTURE_ACCELERATION_RANGE;
  let __initData6;
  let __initData7;
  let __initData8;
  let __initData9;
  let fastListRef;
  let frameCallback;
  let gesture;
  let handleGestureEnd;
  let listInsets;
  let token;
  let obj = gesture(token[15]);
  gesture = obj.useHomeDrawerState().gesture;
  let tmp = listInsets();
  importDefault = tmp;
  let obj2 = gesture(token[16]);
  token = obj2.useToken(require("native").modules.mobile.GUILD_BAR_ITEM_SIZE);
  let obj3 = gesture(token[7]);
  const scrollerRef = obj3.useAnimatedRef();
  fastListRef = fastListRef.useRef(null);
  let obj4 = gesture(token[7]);
  const sharedValue = obj4.useSharedValue(0);
  let obj5 = gesture(token[7]);
  const sharedValue1 = obj5.useSharedValue(0);
  let tmp7 = handleGestureEnd(
    (gestureState) => ({
      gestureState: gestureState.gestureState,
      scrollPosition: gestureState.scrollPosition,
      dragRegion: gestureState.dragRegion,
      windowSize: gestureState.windowSize,
      listInsets: gestureState.listInsets,
      dragDropInProgress: gestureState.dragDropInProgress,
    }),
    gesture(token[18]).shallow,
  );
  let gestureState = tmp7.gestureState;
  let scrollPosition = tmp7.scrollPosition;
  let dragRegion = tmp7.dragRegion;
  const windowSize = tmp7.windowSize;
  listInsets = tmp7.listInsets;
  const dragDropInProgress = tmp7.dragDropInProgress;
  const persistantKeys = handleGestureEnd((arg0) => {
    let dragSpecs;
    let dropSpecs;
    ({ dropSpecs, dragSpecs } = arg0);
    set = new Set();
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
    const tmp7 = num2 === range.min && num3 === range.max;
    if (!tmp7) {
      const range1 = { min: num2, max: num3 };
      const result = dragRegion.set(range1);
    }
  });
  let obj6 = gesture(token[7]);
  class W {
    constructor(timeSincePreviousFrame) {
      timeSincePreviousFrame = timeSincePreviousFrame.timeSincePreviousFrame;
      if (null != timeSincePreviousFrame) {
        if (timeSincePreviousFrame > 0) {
          if ("drag" === gestureState.get().mode) {
            const result = sharedValue1.set(sharedValue1.get() + timeSincePreviousFrame);
            if (sharedValue1.get() >= c13) {
              const result1 = 1000 * sharedValue.get();
              const result2 = sharedValue1.get() / 1000;
              const result3 = sharedValue1.set(0);
              const _Math = Math;
              const scrollTo = ReanimatedRexport.scrollTo;
              const tmp14 = roundToNearestPixelDefault;
              scrollTo(scrollerRef, 0, max(tmp14(scrollPosition.get() + result2 * result1), 0), false);
            }
          }
        }
      }
    }
  }
  let obj7 = {
    gestureState_0: gestureState,
    pushScrollAccumulatedTime: sharedValue1,
    MS_PER_FRAME_60FPS: frameCallback,
    pushScroll: sharedValue,
    scrollTo: gesture(token[7]).scrollTo,
    scrollerRef,
    roundToNearestPixel: require("roundToNearestPixel"),
    scrollPosition_0: scrollPosition,
  };
  W.__closure = obj7;
  W.__workletHash = 5755951747782;
  W.__initData = __initData;
  frameCallback = obj6.useFrameCallback(W, false);
  let items = [sharedValue, sharedValue1, frameCallback];
  handleGestureEnd = fastListRef.useCallback((event) => {
    let dragDropInProgress;
    let item;
    let obj5;
    let overSpecs;
    let str11;
    const state1 = GuildsBarDnDStore.getState();
    const dragSpecs = state1.dragSpecs;
    ({ overSpecs, gestureState, dragDropInProgress } = state1);
    const setStateShallow = state1.setStateShallow;
    const result = sharedValue.set(0);
    const result1 = sharedValue1.set(0);
    if (frameCallback.isActive) {
      frameCallback.setActive(false);
    }
    if ("cancel" === event) {
      let obj3 = { event, dragSpecs, overSpecs, gestureState: gestureState.get() };
      closure_19(obj3);
    } else {
      let tmp7 = SentryUtilsDefault;
      let obj4 = { category: "GuildsBarGesture", message: "handleGestureEnd started", data: obj5 };
      obj5 = { event, dragSpecs, overSpecs, gestureState: gestureState.get() };
      const addBreadcrumb = tmp7.addBreadcrumb;
      addBreadcrumb(obj4);
    }
    if ("drop" === event) {
      if (null != overSpecs) {
        if (null != dragSpecs) {
          let tmp11;
          let layoutStart;
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
              tmp11 = str2;
            }
          }
          let num = 0;
          if ("after" === tmp11) {
            num = dragSpecs.item.layoutSize;
          }
          if ("after" === overSpecs.state) {
            layoutStart = overSpecs.item.layoutStart + dragSpecs.itemSize;
          } else {
            layoutStart = overSpecs.item.layoutStart;
          }
          closure_1 = layoutStart - num;
          const node = dragSpecs.node;
          const node2 = overSpecs.node;
          let c4 = tmp12;
          let closure_5 =
            "convert-before" === overSpecs.state ||
            "convert-after" === overSpecs.state ||
            "drop-into" === overSpecs.state;
          let state = overSpecs.state;
          const tmp13 =
            "convert-before" === overSpecs.state ||
            "convert-after" === overSpecs.state ||
            "drop-into" === overSpecs.state;
          if ("self" !== state) {
            if (null != state) {
              let id = node2.id;
              let id1 = id;
              if (node.type === GuildsNodeType.FOLDER) {
                if (node2.type === GuildsNodeType.GUILD) {
                  if (null != node2.parentId) {
                    id1 = node2.parentId;
                  }
                  const tmp37Result = react_native2;
                  tmp37Result.batchUpdates(() => {
                    let str;
                    if (node.id !== id1) {
                      const tmp5 = closure_2_1(token[21]);
                      const id = node.id;
                      let tmp7 = closure_5;
                      const moveById = tmp5.moveById;
                      if (!tmp7) {
                        tmp7 = c4;
                      }
                      const tmp8 = tmp5;
                      moveById(id, id1, tmp7, closure_5);
                      scrollerRef(function* () {
                        let v3;
                        if (v3 === 2) {
                          v3 = 3;
                          throw new TypeError("Generator functions may not be called on executing generators");
                        } else if (tmp2 === 3) {
                          if (arg0 === 1) {
                            throw value;
                          } else if (arg0 === 2) {
                            const obj3 = { value, done: true };
                            return obj3;
                          } else {
                            return { value: "IconComponent", done: null };
                          }
                        } else {
                          let c3;
                          try {
                            v3 = 2;
                            if (0 === c1) {
                              if (arg0 === 1) {
                                v3 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                v3 = 3;
                                const obj4 = { value, done: true };
                                return obj4;
                              } else {
                                c3 = 1;
                                c1 = 2;
                                const obj2 = v3(closure_2[22]);
                                v3 = 1;
                                const obj5 = {
                                  value: obj2.saveGuildFolders(compatibleGuildFolders.getCompatibleGuildFolders()),
                                  done: false,
                                };
                                return obj5;
                              }
                            } else {
                              if (1 === tmp3) {
                                c3 = 0;
                              } else if (arg0 === 1) {
                                v3 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                c3 = 0;
                                v3 = 3;
                                const obj = { value, done: true };
                                return obj;
                              } else {
                                c3 = 0;
                              }
                              v3 = 3;
                              return { value: "IconComponent", done: null };
                            }
                          } catch (tmp8) {
                            closure_2 = tmp8;
                            if (0 === c3) {
                              v3 = 3;
                              throw tmp8;
                            } else {
                              c1 = 1;
                            }
                          }
                        }
                      })();
                    }
                    state = state.getState();
                    let obj = {
                      dragNode: node,
                      overNode: node2,
                      dropPosition,
                      dragRecyclerKey: str,
                      itemSize: dragSpecs.itemSize,
                      overState: state,
                    };
                    const item = dragSpecs.item;
                    str = undefined;
                    const dropStart = state.dropStart;
                    if (item != null) {
                      str = item.recyclerKey;
                    }
                    if (str == null) {
                      str = "";
                    }
                    dropStart(obj);
                  });
                  const obj7 = { type: "drag-drop", dragNode: node, overNode: node2, overState: state };
                  triggerHapticsAndAnnouncementsIfNecessary(obj7);
                }
              }
              const tmp19 = node2.type === GuildsNodeType.FOLDER && node2.expanded && "after" === overSpecs.state;
              if (tmp19) {
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
            }
          }
          const state2 = GuildsBarDnDStore.getState();
          const obj8 = {
            dragNode: node,
            overNode: node,
            dropPosition: null,
            itemSize: null,
            dragRecyclerKey: str11,
            overState: "self",
          };
          ({ itemTop: obj6.dropPosition, itemSize: obj6.itemSize, item } = dragSpecs);
          str11 = undefined;
          let dropStart = state2.dropStart;
          if (item != null) {
            str11 = item.recyclerKey;
          }
          if (str11 == null) {
            str11 = "";
          }
          dropStart(obj8);
          const obj9 = { type: "drag-drop", dragNode: node, overNode: node, overState: "self" };
          triggerHapticsAndAnnouncementsIfNecessary(obj9);
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
    setStateShallow({ dragSpecs: "start", overSpecs: "unicodeVersion" });
    const value = gestureState.get();
    if (null != value.mode) {
      const obj10 = { mode: null };
      set = gestureState.set;
      const merged = Object.assign(value);
      const result2 = set(obj10);
      const result3 = dragDropInProgress.set(false);
    }
  }, items);
  const callback1 = fastListRef.useCallback((arg0, absoluteY) => {
    let dragDropInProgress;
    const state = GuildsBarDnDStore.getState();
    ({ gestureState, dragDropInProgress } = state);
    const item = getItemAndNodeFromTouchEvent(absoluteY, false, fastListRef).item;
    const value = gestureState.get();
    const tmp3 = null == item && null == value.mode;
    if (tmp3) {
      const obj = { mode: "cancel" };
      set = gestureState.set;
      const merged = Object.assign(value);
      const result = set(obj);
      const result1 = dragDropInProgress.set(false);
    }
  }, []);
  const items1 = [handleGestureEnd, token];
  const callback2 = fastListRef.useCallback((absoluteX, absoluteY) => {
    let dragDropInProgress;
    let dragSpecs;
    let item;
    let name;
    let node;
    let tmp10Result6;
    let tmp2ResultResult;
    const state = dragRegion.getState();
    ({ dragSpecs, scrollPosition, gestureState, dragDropInProgress } = state);
    const setStateShallow = state.setStateShallow;
    let obj = closure_1(token[12]);
    let obj2 = { category: "GuildsBarGesture", message: "handlePress started", data: { absoluteX, absoluteY } };
    obj.addBreadcrumb(obj2);
    ({ item, node } = getItemAndNodeFromTouchEvent(absoluteY, false, fastListRef));
    getItemAndNodeFromTouchEvent(absoluteY, false, fastListRef);
    if (null != item) {
      if (null != node) {
        const obj3 = { node, item, itemTop: null, itemSize: null };
        ({ layoutStart: obj4.itemTop, layoutSize: obj4.itemSize } = item);
        const height = sharedValue.get("window").height;
        let sum = height;
        const obj5 = gesture(token[24]);
        if (obj5.isAndroid()) {
          const tmp10Result = gesture(token[25]);
          const rect = tmp10Result.getSafeAreaInsets();
          sum = height + (rect.top + rect.bottom);
        }
        let activeIndex = callback1.activeIndex;
        let result = activeIndex.set(-1);
        const tmp10Result5 = gesture(token[26]);
        if (tmp10Result5.getIsScreenReaderEnabled()) {
          const obj6 = { type: "drag-start", node };
          triggerHapticsAndAnnouncementsIfNecessary(obj6);
        } else {
          let tmp15;
          const type = node.type;
          if (scrollPosition.GUILD === type) {
            const guild = sharedValue1.getGuild(node.id);
            const obj7 = { key: node.id, title: name, items: tmp2ResultResult };
            name = undefined;
            if (guild != null) {
              name = guild.name;
            }
            if (null != guild) {
              const tmp2Result = closure_1(token[27]);
              tmp2ResultResult = tmp2Result(guild.id, gestureState.getGuildsTree().version);
            } else {
              tmp2ResultResult = [];
            }
            tmp15 = obj7;
          } else if (tmp14.FOLDER === type) {
            ({ id: obj14.key, name: obj14.title } = node);
            const obj8 = { key: null, title: null, items: tmp10Result6.getGuildFolderMenuItems(node.id) };
            tmp15 = obj8;
            tmp10Result6 = gesture(token[28]);
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
            size = {
              key: "" + tmp21,
              title: tmp22,
              items,
              x: 12 + token + 12,
              y: diff,
              positionX: "left",
              positionY: str2,
              width: token,
              height: token,
              state: callback1,
              dividerIndexes: [],
              keyboardShouldPersistTaps: "never",
              requestClose(ContextMenuItem) {
                let obj;
                const tmp = ContextMenuItem;
                if (!tmp) {
                  const activeIndex = obj.activeIndex;
                  obj = items[activeIndex.get(activeIndex)];
                  if (obj != null) {
                    obj.action();
                  }
                }
                const activeIndex2 = obj.activeIndex;
                const result = activeIndex2.set(-1);
                const obj2 = ContextMenuState;
                obj2.hideContextMenu();
                callback("contextmenu-close");
              },
              onClose() {},
            };
            const _HermesInternal = HermesInternal;
            const showContextMenu = gesture(token[23]).showContextMenu;
            gesture(token[23]);
            showContextMenu(size);
          }
        }
        const obj9 = { dragSpecs: obj3, overSpecs: "Array", windowSize: sum };
        setStateShallow(obj9);
        const obj10 = { mode: "pressed", initialY: absoluteY, initialX: absoluteX, absoluteY, absoluteX };
        const result1 = gestureState.set(obj10);
        const tmp10Result8 = gesture(token[9]);
        const result2 = tmp10Result8.triggerHapticFeedback(gesture(token[9]).HapticFeedbackTypes.IMPACT_MEDIUM);
      }
    }
    const obj11 = { mode: null };
    set = gestureState.set;
    const merged = Object.assign(gestureState.get());
    const result3 = set(obj11);
    const result4 = dragDropInProgress.set(false);
  }, items1);
  const callback3 = fastListRef.useCallback((absoluteX, absoluteY) => {
    const obj = gesture(token[23]);
    const result = obj.updateContextMenuState(absoluteX, absoluteY, callback1);
  }, []);
  const items2 = [sharedValue, sharedValue1, frameCallback, tmp];
  const callback4 = fastListRef.useCallback(function (absoluteY) {
    let closure_129_3;
    let item;
    let item2;
    let node;
    let node2;
    let obj2;
    let overPercentage;
    let overPercentage2;
    const state = GuildsBarDnDStore.getState();
    let overSpecs = state.overSpecs;
    ({ dragSpecs: obj2, windowSize } = state);
    ({ setStateShallow: closure_129_3, listInsets, gestureState } = state);
    let obj = { overSpecs, dragSpecs: obj2, windowSize, gestureState: gestureState.get() };
    callback4(obj);
    if (null != obj2) {
      let num14;
      const value = gestureState.get();
      const obj10 = useIsScreenReaderEnabled;
      let isScreenReaderEnabled = obj10.getIsScreenReaderEnabled();
      if (!isScreenReaderEnabled) {
        isScreenReaderEnabled = null == obj2.node;
      }
      if (!isScreenReaderEnabled) {
        isScreenReaderEnabled = null != overSpecs;
      }
      if (!isScreenReaderEnabled) {
        obj2 = { type: "drag-start", node: obj2.node };
        triggerHapticsAndAnnouncementsIfNecessary(obj2);
      }
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
      let tmp9 = null != overSpecs && "self" !== overSpecs.state;
      if (tmp9) {
        let result = map.set(obj2.item.recyclerKey, 0);
        const result1 = map.set(overSpecs.item.recyclerKey, 2 * obj2.itemSize);
      }
      ({ item, overPercentage, node } = getItemAndNodeFromTouchEvent(absoluteY, true, fastListRef, map));
      let id;
      getItemAndNodeFromTouchEvent(absoluteY, true, fastListRef, map);
      if (overSpecs != null) {
        id = overSpecs.node.id;
      }
      let id1;
      if (node != null) {
        id1 = node.id;
      }
      if (id !== id1) {
        const ContextMenuStore = ContextMenuState.ContextMenuStore;
        if (null != ContextMenuStore.getState().menu) {
          const tmp66Result = ContextMenuState;
          tmp66Result.hideContextMenu();
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
              set = map.set;
              if (str2 == null) {
                str2 = "";
              }
              const result2 = set(str2, 0);
              const result3 = map.set(item.recyclerKey, 2 * closure_1);
            }
            ({
              item: item2,
              overPercentage: overPercentage2,
              node: node2,
            } = getItemAndNodeFromTouchEvent(absoluteY, true, fastListRef, map));
            getItemAndNodeFromTouchEvent(absoluteY, true, fastListRef, map);
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
                  if (FastList.FastListItemTypes.SECTION === type2) {
                    let type = item2.type;
                    if (FastList.FastListItemTypes.SECTION === type) {
                      if (item2.recyclerKey !== item3.recyclerKey) {
                        let str6 = "after";
                        if (overPercentage2 < 0.5) {
                          str6 = "before";
                        }
                      }
                    }
                  }
                  if (node3.type === GuildsNodeType.FOLDER) {
                    if ("after" === tmp37) {
                      if (node2.type !== GuildsNodeType.FOLDER) {
                        if (node2.type !== GuildsNodeType.FOLDER) {
                          if (null != node2.parentId) {
                            let guildsTree = SortedGuildStore.getGuildsTree();
                            const node1 = guildsTree.getNode(node2.parentId);
                          }
                        }
                      }
                    }
                  }
                  str3 = tmp37;
                  if ("self" !== tmp37) {
                    str3 = tmp37;
                    if (null != tmp37) {
                      if (node3.type === GuildsNodeType.GUILD) {
                        if (node2.type === GuildsNodeType.GUILD) {
                          if (null == node2.parentId) {
                            str3 = tmp37;
                            if (overPercentage2 > 0.35) {
                              str3 = tmp37;
                              if (overPercentage2 < 0.65) {
                                if ("before" === tmp37) {
                                  str3 = "convert-before";
                                } else {
                                  str3 = tmp37;
                                  if ("after" === tmp37) {
                                    str3 = "convert-after";
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      str3 = tmp37;
                      if (node3.type === GuildsNodeType.GUILD) {
                        str3 = tmp37;
                        if (node2.type === GuildsNodeType.FOLDER) {
                          str3 = tmp37;
                          if (!node2.expanded) {
                            str3 = tmp37;
                            if (overPercentage2 > 0.35) {
                              str3 = tmp37;
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
        const tmp44 = null != node2 && null != overSpecs;
        if (tmp44) {
          let obj3 = { type: "drag-move", dragNode: obj2.node, overNode: node2, overState: str3 };
          triggerHapticsAndAnnouncementsIfNecessary(obj3);
        }
        let tmp48 = null == node2 || null == item2;
        if (!tmp48) {
          let node4;
          if (overSpecs != null) {
            node4 = overSpecs.node;
          }
          let tmp50 = node4 === node2;
          if (tmp50) {
            let item1;
            if (overSpecs != null) {
              item1 = overSpecs.item;
            }
            tmp50 = item1 === item2;
          }
          if (tmp50) {
            let state1;
            if (overSpecs != null) {
              state1 = overSpecs.state;
            }
            tmp50 = state1 === str3;
          }
          tmp48 = tmp50;
        }
        if (!tmp48) {
          overSpecs = { node: node2, item: item2, state: str3, percentage: overPercentage2 };
          const obj4 = { node: node2, item: item2, state: str3, percentage: overPercentage2 };
        }
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
        num14 = -1 * Math.max(Math.min(Math.min(value.initialY, sum) - absoluteY, c12) / c12, 0);
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
      if (isActive) {
        if (frameCallback.isActive) {
          const result5 = sharedValue1.set(0);
          frameCallback.setActive(false);
        }
        const tmp66Result2 = react_native2;
        tmp66Result2.batchUpdates(() => {
          if (null != obj2) {
            if (obj2.node.type === constants.FOLDER) {
              if (obj2.node.expanded) {
                const obj = closure_2_1(token[21]);
                const result = obj.toggleGuildFolderExpand(obj2.node.id);
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
                  obj2 = { node };
                  const merged = Object.assign(obj2);
                }
              }
            }
          }
          const obj3 = { overSpecs, dragSpecs: obj2, windowSize };
          closure_1_3(obj3);
        });
      }
      if (!isActive) {
        isActive = frameCallback.isActive;
      }
      if (!isActive) {
        frameCallback.setActive(true);
      }
    }
  }, items2);
  let obj8 = gesture(token[30]);
  const items3 = [callback4];
  const onFastListScrollWorklet = obj8.useExternalScrollEventHandler({ id: "guilds" });
  const items4 = [
    dragDropInProgress,
    dragRegion,
    gestureState,
    callback3,
    handleGestureEnd,
    callback4,
    callback2,
    callback1,
    listInsets,
    scrollPosition,
    scrollerRef,
    windowSize,
    gesture,
  ];
  const onFastListScroll = fastListRef.useCallback(() => {
    gestureState = GuildsBarDnDStore.getState().gestureState;
    const value = gestureState.get();
    if ("drag" === value.mode) {
      callback4(value.absoluteY);
    }
  }, items3);
  const gesture1 = fastListRef.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const Simultaneous = Gesture.Simultaneous;
    const Gesture2 = LegacyBaseButton.Gesture;
    const fn = function f(changedTouches, fail) {
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
                const obj2 = gesture(token[7]);
                obj2.runOnJS(callback1)(first.absoluteX, first.absoluteY);
              }
            }
          }
        }
      }
      fail.fail();
    };
    const LongPressResult = Gesture2.LongPress();
    __closure = {
      scrollPosition_0: scrollPosition,
      gestureState_0: gestureState,
      dragRegion_0: dragRegion,
      runOnJS: ReanimatedRexport.runOnJS,
      handleTouchesDown: callback1,
    };
    fn.__closure = __closure;
    fn.__workletHash = 13790833708279;
    fn.__initData = __initData5;
    const fn2 = function _(arg0, fail) {
      if ("cancel" === gestureState.get().mode) {
        fail.fail();
      }
    };
    fn2.__closure = { gestureState_0: gestureState };
    fn2.__workletHash = 11521668907646;
    fn2.__initData = __initData4;
    const fn3 = function c(arg0) {
      let absoluteX;
      let absoluteY;
      ({ absoluteX, absoluteY } = arg0);
      if ("cancel" !== gestureState.get().mode) {
        const obj = gesture(token[7]);
        obj.runOnJS(callback2)(absoluteX, absoluteY);
      }
    };
    const onTouchesDownResult = LongPressResult.onTouchesDown(fn);
    const onTouchesMoveResult = onTouchesDownResult.onTouchesMove(fn2);
    let obj2 = { gestureState_0: gestureState, runOnJS: ReanimatedRexport.runOnJS, handlePress: callback2 };
    fn3.__closure = obj2;
    fn3.__workletHash = 735375093831;
    fn3.__initData = __initData3;
    const fn4 = function u() {
      if ("cancel" === gestureState.get().mode) {
        const obj = gesture(token[7]);
        obj.runOnJS(handleGestureEnd)("cancel");
      }
    };
    const onStartResult = onTouchesMoveResult.onStart(fn3);
    let obj3 = { gestureState_0: gestureState, runOnJS: ReanimatedRexport.runOnJS, handleGestureEnd };
    fn4.__closure = obj3;
    fn4.__workletHash = 8600212007325;
    fn4.__initData = __initData2;
    const fn5 = function l() {
      const tmp = null != gestureState.get().mode && "cancel" !== gestureState.get().mode;
      if (!tmp) {
        const obj2 = gesture(token[7]);
        obj2.runOnJS(handleGestureEnd)("cancel");
      }
    };
    const onEndResult = onStartResult.onEnd(fn4);
    let obj4 = { gestureState_0: gestureState, runOnJS: ReanimatedRexport.runOnJS, handleGestureEnd };
    fn5.__closure = obj4;
    fn5.__workletHash = 1689354696876;
    fn5.__initData = __initData;
    const onTouchesCancelledResult = onEndResult.onTouchesCancelled(fn5);
    const Gesture3 = LegacyBaseButton.Gesture;
    const PanResult = Gesture3.Pan();
    const manualActivationResult = PanResult.manualActivation(true);
    let result = manualActivationResult.simultaneousWithExternalGesture(scrollerRef, gesture);
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
              const obj7 = { mode: "contextmenu" };
              set = gestureState.set;
              const merged = Object.assign(gestureState.get());
              ({ absoluteX: obj2.absoluteX, absoluteY: obj2.absoluteY } = first);
              const result = set(obj7);
              const result1 = GESTURE_ACCELERATION_RANGE.set(false);
              activate.activate();
              const obj3 = gesture(token[7]);
              obj3.runOnJS(callback3)(first.absoluteX, first.absoluteY);
            }
          }
          if (absolute > 10) {
            const obj8 = { mode: "drag" };
            set2 = gestureState.set;
            const merged1 = Object.assign(gestureState.get());
            ({
              absoluteX: obj4.initialX,
              absoluteY: obj4.initialY,
              absoluteX: obj4.absoluteX,
              absoluteY: obj4.absoluteY,
            } = first);
            set2(obj8);
            activate.activate();
            const result2 = GESTURE_ACCELERATION_RANGE.set(true);
            const obj5 = gesture(token[7]);
            obj5.runOnJS(callback4)(first.absoluteY);
          }
        }
      }
      const tmp3 = "cancel" !== gestureState.get().mode && null != first;
      if (!tmp3) {
        activate.fail();
        const result3 = GESTURE_ACCELERATION_RANGE.set(false);
      }
    };
    let obj5 = {
      gestureState_0: gestureState,
      dragDropInProgress_0: dragDropInProgress,
      DRAG_GESTURE_MINIMUM_DISTANCE: 10,
      runOnJS: ReanimatedRexport.runOnJS,
      handleContextMenuDrag: callback3,
      handleGuildDrag: callback4,
    };
    fn6.__closure = obj5;
    fn6.__workletHash = 14446965742992;
    fn6.__initData = __initData9;
    const fn7 = function s(arg0) {
      let absoluteX;
      let absoluteY;
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
          }
          if (tmp6) {
            initialY = absoluteY;
          }
          const obj2 = { absoluteX, absoluteY, initialY };
          set = gestureState.set;
          const merged = Object.assign(gestureState.get());
          const result = set(obj2);
          const obj3 = gesture(token[7]);
          obj3.runOnJS(callback4)(absoluteY);
        }
      } else if ("contextmenu" === gestureState.get().mode) {
        const obj4 = gesture(token[7]);
        obj4.runOnJS(callback3)(absoluteX, absoluteY);
      }
    };
    const onTouchesMoveResult1 = result1.onTouchesMove(fn6);
    fn7.__closure = {
      gestureState_0: gestureState,
      listInsets_0: listInsets,
      GESTURE_ACCELERATION_RANGE,
      windowSize_0: windowSize,
      runOnJS: ReanimatedRexport.runOnJS,
      handleGuildDrag: callback4,
      handleContextMenuDrag: callback3,
    };
    fn7.__workletHash = 17459732592512;
    fn7.__initData = __initData8;
    ({
      gestureState_0: gestureState,
      listInsets_0: listInsets,
      GESTURE_ACCELERATION_RANGE,
      windowSize_0: windowSize,
      runOnJS: ReanimatedRexport.runOnJS,
      handleGuildDrag: callback4,
      handleContextMenuDrag: callback3,
    });
    const fn8 = function n() {
      if ("drag" === gestureState.get().mode) {
        const obj4 = gesture(token[7]);
        obj4.runOnJS(handleGestureEnd)("drop");
      } else if ("contextmenu" === gestureState.get().mode) {
        const obj3 = gesture(token[7]);
        obj3.runOnJS(handleGestureEnd)("contextmenu-open");
      } else {
        const obj2 = gesture(token[7]);
        obj2.runOnJS(handleGestureEnd)("cancel");
      }
    };
    const onUpdateResult = onTouchesMoveResult1.onUpdate(fn7);
    let obj7 = { gestureState_0: gestureState, runOnJS: ReanimatedRexport.runOnJS, handleGestureEnd };
    fn8.__closure = obj7;
    fn8.__workletHash = 14800878980552;
    fn8.__initData = __initData7;
    const fn9 = function t() {
      const obj = gesture(token[7]);
      obj.runOnJS(handleGestureEnd)("cancel");
    };
    const onEndResult1 = onUpdateResult.onEnd(fn8);
    let obj8 = { runOnJS: ReanimatedRexport.runOnJS, handleGestureEnd };
    fn9.__closure = obj8;
    fn9.__workletHash = 9715999020978;
    fn9.__initData = __initData6;
    return Simultaneous(onTouchesCancelledResult, onEndResult1.onTouchesCancelled(fn9));
  }, items4);
  const effect1 = fastListRef.useEffect(() => {
    let ref;
    return GuildsBarDnDStore.subscribe((dragSpecs) => {
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
    });
  }, []);
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
