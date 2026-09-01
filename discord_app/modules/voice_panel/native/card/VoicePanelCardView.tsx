// === Module 16712: getCardKey ===

// Module 16712 (getCardKey)
import SelfStreamCardDefault from "SelfStreamCard" /* 16713 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "getParticipants" /* 4494 */;
import VoicePanelModes from "VoicePanelModes" /* 11840 */;
import { VoicePanelControlsModes } from "VoicePanelControlsModes" /* 11838 */;
import { VoicePanelPIPModes } from "VoicePanelPIPModes" /* 16669 */;
import { EDGE_GUTTER } from "CARD_SIZE" /* 11843 */;
import { isUserParticipant } from "ParticipantTypes" /* 4499 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
function getCardKey(type) {
  return "" + type.type + "-" + type.id;
}
function renderCard(arg0, item, transitionState, cleanUp) {
  return jsx(SelfStreamCardDefault, { item, transitionState, cleanUp }, arg0);
}
function CardContentFreezer(children) {
  children = children.children;
  let _require = children;
  let connected;
  let animatedStyle;
  _require = undefined;
  connected = undefined;
  animatedStyle = undefined;
  obj = _require(animatedStyle[19]);
  const mode = obj.usePIPState().mode;
  _require = mode;
  const ref = contentDimensions.useRef(mode === VoicePanelPIPModes.IN_APP);
  connected = ref;
  animatedStyle = safeArea(contentDimensions.useState({}), 2)[1];
  let items = [mode];
  const effect = contentDimensions.useEffect(() => {
    if (timeout === closure_1_11.IN_APP) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        if (!ref.current) {
          tmp.current = true;
          callback({});
        }
      }, 700);
      return () => {
        clearTimeout(closure_0);
      };
    } else {
      connected.current = false;
    }
  }, items);
  const tmp6 = mode === VoicePanelPIPModes.IN_APP && connected(animatedStyle[20])(ref);
  connected = tmp6;
  _require = tmp6;
  connected = undefined;
  animatedStyle = undefined;
  safeArea = undefined;
  contentDimensions = undefined;
  let windowDimensions;
  let mode2;
  let focused;
  let wrapperOffset;
  let token;
  const context = obj2.useContext(tmp5(tmp2[13]));
  connected = context.connected;
  const controlsSpecs = context.controlsSpecs;
  animatedStyle = controlsSpecs;
  safeArea = context.safeArea;
  contentDimensions = context.contentDimensions;
  windowDimensions = context.windowDimensions;
  mode2 = context.mode;
  focused = context.focused;
  wrapperOffset = context.wrapperOffset;
  let tmpResult = tmp(tmp2[14]);
  token = tmpResult.useToken(tmp5(tmp2[15]).modules.mobile.VOICE_PANEL_GUTTER);
  tmpResult = tmp(tmp2[11]);
  const fn = function o() {
    obj = animatedStyle;
    const bound = Math.max(safeArea.get().bottom, closure_1_12);
    const tmp = closure_1_12;
    const tmp3 = connected;
    const tmp5 = connected(animatedStyle[16]);
    ({ height, paddingTop } = connected(animatedStyle[16])(safeArea.get(), token));
    let num = 1;
    let num2 = 0;
    let num3 = 1;
    let num4 = 0;
    if (connected.get()) {
      obj1 = contentDimensions;
      let height2 = paddingTop + contentDimensions.get().height + bound;
      if (height2 - windowDimensions.get().height < 8) {
        height2 = obj3.get().height;
      }
      num2 = 0;
      num3 = num;
      num4 = height2;
      if (mode2.get() !== token.PIP) {
        num2 = 0;
        num3 = num;
        num4 = height2;
        if (animatedStyle.get().mode !== closure_1_10.HIDDEN) {
          num2 = 0;
          num3 = num;
          num4 = height2;
          if (null == focused.get()) {
            const diff = height2 - height - tmp;
            const diff1 = diff - obj.get().height - bound;
            const diff2 = obj3.get().height - paddingTop - bound;
            const diff3 = obj3.get().height - height;
            const diff4 = diff3 - obj.get().height - bound;
            let result = num;
            if (obj1.get().height > diff1) {
              result = diff1 / obj1.get().height;
            }
            let diff5 = height;
            if (tmp16) {
              const result1 = (diff2 - obj1.get().height) / 2;
              diff5 = height - (result1 - (diff4 - obj1.get().height * result) / 2) * result;
            }
            if (obj1.get().height > diff1) {
              let sum = diff5 + (height2 * result - height2) / 2;
            } else {
              sum = diff5 + (diff1 - (obj3.get().height - paddingTop - bound)) / 2;
            }
            paddingTop = paddingTop * result;
            const diff6 = sum - paddingTop;
            tmp16 = obj1.get().height < diff2 && obj1.get().height > diff4;
          }
        }
      }
      const tmp7 = paddingTop;
    }
    obj = { position: "relative", width: windowDimensions.get().width, height: tmp3(tmp4[17])(num4), transform: null, opacity: null };
    const tmp23 = callback;
    const tmp5Result = connected(animatedStyle[16])(safeArea.get(), token);
    const sum1 = num2 + wrapperOffset.get().y;
    if (!wrapperOffset.get().gestureActive) {
      if (mode2.get() !== token.PIP) {
        let tmp27 = closure_1_15;
      }
      obj = { translateY: null };
      obj[0] = obj5.withSpring(sum1, tmp27);
      const items = [obj, ];
      obj1 = { scale: null };
      obj1[0] = tmp23(tmp4[18]).withSpring(num3, closure_1_15);
      items[1] = obj1;
      obj[3] = items;
      if (callback) {
        num = 0;
      }
      obj[4] = num;
      return obj;
    }
    tmp27 = wrapperOffset;
  };
  obj = { controlsSpecs, VoicePanelControlsModes, safeArea, EDGE_GUTTER, calculateVoicePanelHeaderSpecs: tmp5(tmp2[16]), edgeGutter: token, connected, contentDimensions, windowDimensions, mode: mode2, VoicePanelModes: token, focused, roundToNearestPixel: tmp5(tmp2[17]), withSpring: tmp(tmp2[18]).withSpring, wrapperOffset, LAYOUT_PHYSICS: wrapperOffset, SCALE_PHYSICS: obj, freeze: tmp6 };
  fn.__closure = obj;
  fn.__workletHash = 15194344033500;
  fn.__initData = closure_21;
  animatedStyle = tmpResult.useAnimatedStyle(fn);
  const items1 = [animatedStyle, tmp6, children];
  return contentDimensions.useMemo(() => {
    obj = { style: animatedStyle, children: null };
    obj = { freeze: connected, children: closure_1_14(mode2, obj) };
    obj = { collapsable: false, style: windowDimensions.absoluteFill, children: callback };
    obj[1] = closure_1_14(callback(animatedStyle[22]).Freeze, obj);
    return closure_1_14(connected(animatedStyle[21]), obj);
  }, items1);
}
let c4 = importAllResult;
({ StyleSheet: c5, View: closure_6 } = get_ActivityIndicator);
({ LAYOUT_PHYSICS: closure_8, VoicePanelModes: c9, UI_SHOW_HIDE_PHYSICS, VOICE_PANEL_CHUNK_DIVISOR } = VoicePanelModes);
let obj = {};
const merged = Object.assign(UI_SHOW_HIDE_PHYSICS);
obj.mass = 1;
obj.restSpeedThreshold = 0.00001;
let closure_18 = { start: 0, end: VOICE_PANEL_CHUNK_DIVISOR };
let closure_19 = { code: "function VoicePanelCardViewTsx1(){const{viewableChunks}=this.__closure;return viewableChunks.get();}" };
let closure_20 = { code: "function VoicePanelCardViewTsx2(newChunks,previous){const{cheapWorkletShallowEqual,runOnJS,updateValueIfChange}=this.__closure;if(cheapWorkletShallowEqual(newChunks,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(updateValueIfChange)(newChunks);}" };
let closure_21 = { code: "function VoicePanelCardViewTsx3(){const{controlsSpecs,VoicePanelControlsModes,safeArea,EDGE_GUTTER,calculateVoicePanelHeaderSpecs,edgeGutter,connected,contentDimensions,windowDimensions,mode,VoicePanelModes,focused,roundToNearestPixel,withSpring,wrapperOffset,LAYOUT_PHYSICS,SCALE_PHYSICS,freeze}=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;let height=0;let scale=1;let top=0;const safeAreaBottom=Math.max(safeArea.get().bottom,EDGE_GUTTER);const{height:headerBarHeight,paddingTop:safeAreaTop}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(connected.get()){height+=safeAreaTop;height+=contentDimensions.get().height;height+=safeAreaBottom;if(height-windowDimensions.get().height<8){height=windowDimensions.get().height;}if(mode.get()!==VoicePanelModes.PIP&&!hidden&&focused.get()==null){const targetHeight=height-headerBarHeight-EDGE_GUTTER-controlsSpecs.get().height-safeAreaBottom;const fullView=windowDimensions.get().height-safeAreaTop-safeAreaBottom;const controlsView=windowDimensions.get().height-headerBarHeight-controlsSpecs.get().height-safeAreaBottom;top=headerBarHeight;scale=function(){if(contentDimensions.get().height>targetHeight){return targetHeight/contentDimensions.get().height;}return 1;}();if(contentDimensions.get().height<fullView&&contentDimensions.get().height>controlsView){const offsetOriginal=(fullView-contentDimensions.get().height)/2;const scaledContent=contentDimensions.get().height*scale;const scaledOffset=(controlsView-scaledContent)/2;top-=(offsetOriginal-scaledOffset)*scale;}if(contentDimensions.get().height>targetHeight){top+=(height*scale-height)/2;}else{top+=(targetHeight-(windowDimensions.get().height-safeAreaTop-safeAreaBottom))/2;}top-=safeAreaTop*scale;}}return{position:'relative',width:windowDimensions.get().width,height:roundToNearestPixel(height),transform:[{translateY:withSpring(top+wrapperOffset.get().y,wrapperOffset.get().gestureActive||mode.get()===VoicePanelModes.PIP?LAYOUT_PHYSICS:SCALE_PHYSICS)},{scale:withSpring(scale,SCALE_PHYSICS)}],opacity:freeze?0:1};}" };
const memoResult = importAllResult.memo(function VoicePanelCardView(viewableChunks) {
  viewableChunks = viewableChunks.viewableChunks;
  viewableChunks = undefined;
  chunkedParticipants = undefined;
  let stateFromStoresArray;
  let callback;
  const channelId = importAllResult.useContext(chunkedParticipants(stateFromStoresArray[13])).channelId;
  chunkedParticipants = undefined;
  stateFromStoresArray = undefined;
  [tmp2, chunkedParticipants] = callback(importAllResult.useState(closure_18), 2);
  callback = importAllResult.useCallback((arg0) => {
    closure_0 = arg0;
    chunkedParticipants((start) => {
      let tmp2 = start;
      if (start.start === start.start) {
        tmp2 = tmp;
        if (start.end === tmp.end) {
          tmp2 = start;
        }
      }
      return tmp2;
    });
  }, []);
  stateFromStoresArray = callback;
  obj = viewableChunks(stateFromStoresArray[11]);
  const fn = function c() {
    return viewableChunks.get();
  };
  fn.__closure = { viewableChunks };
  fn.__workletHash = 1074173860641;
  fn.__initData = closure_19;
  const fn2 = function s(safeAreaState, current) {
    if (!obj.cheapWorkletShallowEqual(safeAreaState, current)) {
      viewableChunks(stateFromStoresArray[11]).runOnJS(stateFromStoresArray)(safeAreaState);
      const tmp2Result = viewableChunks(stateFromStoresArray[11]);
    }
  };
  obj = { cheapWorkletShallowEqual: viewableChunks(stateFromStoresArray[12]).cheapWorkletShallowEqual, runOnJS: viewableChunks(stateFromStoresArray[11]).runOnJS, updateValueIfChange: callback };
  fn2.__closure = obj;
  fn2.__workletHash = 13543715159803;
  fn2.__initData = closure_20;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  const tmp = callback(importAllResult.useState(closure_18), 2);
  chunkedParticipants = viewableChunks(stateFromStoresArray[23]).useChunkedParticipants(channelId, tmp2);
  const obj3 = viewableChunks(stateFromStoresArray[23]);
  const items = [closure_7];
  const items1 = [channelId];
  stateFromStoresArray = viewableChunks(stateFromStoresArray[24]).useStateFromStoresArray(items, () => {
    const participants = closure_1_7.getParticipants(viewableChunks);
    return participants.filter((arg0) => callback(arg0));
  }, items1);
  callback = importAllResult.useRef(stateFromStoresArray);
  const items2 = [stateFromStoresArray, channelId];
  const effect = importAllResult.useEffect(() => {
    obj = chunkedParticipants(stateFromStoresArray[25]);
    if (!obj.isEqual(ref.current, stateFromStoresArray)) {
      const differenceWithResult = chunkedParticipants(tmp2[25]).differenceWith(tmp3.current, tmp4, (id, id2) => id.id === id2.id);
      let user = null;
      if (differenceWithResult.length > 0) {
        user = differenceWithResult[0].user;
      }
      if (null != user) {
        const AccessibilityAnnouncer = viewableChunks(tmp2[26]).AccessibilityAnnouncer;
        const intl = viewableChunks(tmp2[27]).intl;
        obj = { username: null };
        obj[0] = user.username;
        AccessibilityAnnouncer.announce(intl.formatToPlainString(viewableChunks(tmp2[27]).t["9NqwWZ"], obj));
      }
      const tmpResult = chunkedParticipants(tmp2[25]);
    }
    ref.current = stateFromStoresArray;
  }, items2);
  const items3 = [chunkedParticipants];
  return importAllResult.useMemo(() => {
    obj = { children: closure_1_14(viewableChunks(stateFromStoresArray[28]).TransitionGroup, obj) };
    obj = { items: chunkedParticipants, renderItem: closure_1_17, getItemKey: closure_1_16, lazyCleanUpDelay: 1000 };
    return closure_1_14(closure_1_22, obj);
  }, items3);
});
let result = require("set").fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCardView.tsx");

export default memoResult;