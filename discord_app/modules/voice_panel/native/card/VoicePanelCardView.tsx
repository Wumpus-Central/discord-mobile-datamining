// discord_app/modules/voice_panel/native/card/VoicePanelCardView.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "CONFIG_NEVER_ANIMATE";
import get_ActivityIndicator from "t";
import getParticipants from "getParticipants";
import VoicePanelModes from "VoicePanelModes";
import { VoicePanelControlsModes } from "VoicePanelControlsModes";
import { VoicePanelPIPModes } from "VoicePanelPIPModes";
import { EDGE_GUTTER } from "CARD_SIZE";
import { isUserParticipant } from "ParticipantTypes";
import { jsx } from "useRefValue";

let UI_SHOW_HIDE_PHYSICS;
let VOICE_PANEL_CHUNK_DIVISOR;
let c5;
let c9;
let closure_6;
let metroImportAll;
const require = arg1;
function getCardKey(type) {
  return "" + type.type + "-" + type.id;
}
function renderCard(arg0, item, transitionState, cleanUp) {
  return jsx(importDefault(16076), { item, transitionState, cleanUp }, arg0);
}
function CardContentFreezer(children) {
  children = children.children;
  let mode = children;
  let importDefault;
  let animatedStyle;
  mode = undefined;
  importDefault = undefined;
  animatedStyle = undefined;
  let obj = mode(animatedStyle[20]);
  mode = obj.usePIPState().mode;
  const ref = safeArea.useRef(mode === VoicePanelPIPModes.IN_APP);
  importDefault = ref;
  animatedStyle = controlsSpecs(safeArea.useState({}), 2)[1];
  let items = [mode];
  const effect = safeArea.useEffect(() => {
    if (timeout === outer1_11.IN_APP) {
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
      c1.current = false;
    }
  }, items);
  const tmp6 = mode === VoicePanelPIPModes.IN_APP && importDefault(animatedStyle[21])(ref);
  importDefault = tmp6;
  mode = tmp6;
  importDefault = undefined;
  animatedStyle = undefined;
  controlsSpecs = undefined;
  safeArea = undefined;
  let contentDimensions;
  let windowDimensions;
  let mode2;
  let focused;
  let wrapperOffset;
  let token;
  let tmp7 = importDefault(animatedStyle[13])("VoicePanelCardView");
  importDefault = tmp7;
  const context = obj2.useContext(tmp5(tmp2[14]));
  const connected = context.connected;
  animatedStyle = connected;
  controlsSpecs = context.controlsSpecs;
  safeArea = context.safeArea;
  contentDimensions = context.contentDimensions;
  windowDimensions = context.windowDimensions;
  mode2 = context.mode;
  focused = context.focused;
  wrapperOffset = context.wrapperOffset;
  let tmpResult = tmp(tmp2[15]);
  token = tmpResult.useToken(tmp5(tmp2[16]).modules.mobile.VOICE_PANEL_GUTTER);
  tmpResult = tmp(tmp2[11]);
  const fn = function o() {
    let height;
    let paddingTop;
    let obj = controlsSpecs;
    const bound = Math.max(safeArea.get().bottom, outer1_12);
    const tmp = outer1_12;
    const tmp3 = _undefined;
    const tmp5 = _undefined(animatedStyle[17]);
    ({ height, paddingTop } = _undefined(animatedStyle[17])(safeArea.get(), token));
    let num = 1;
    let num2 = 0;
    let num3 = 1;
    let num4 = 0;
    if (animatedStyle.get()) {
      let obj1 = contentDimensions;
      let height2 = paddingTop + contentDimensions.get().height + bound;
      if (height2 - windowDimensions.get().height < 8) {
        height2 = obj3.get().height;
      }
      num2 = 0;
      num3 = num;
      num4 = height2;
      if (mode2.get() !== wrapperOffset.PIP) {
        num2 = 0;
        num3 = num;
        num4 = height2;
        if (controlsSpecs.get().mode !== token.HIDDEN) {
          num2 = 0;
          num3 = num;
          num4 = height2;
          if (null == focused.get()) {
            const diff = height2 - height - tmp;
            const diff1 = diff - obj.get().height - bound;
            const diff2 = obj3.get().height - paddingTop - bound;
            const diff3 = obj3.get().height - height;
            const diff4 = diff3 - obj.get().height - bound;
            if (obj1.get().height > diff1) {
              let result = diff1 / obj1.get().height;
            } else {
              const width = obj3.get().width;
              if (_undefined) {
                result = width / obj3.get().width;
              } else {
                const diff5 = width - 48;
                result = diff5 / obj3.get().width;
              }
            }
            let diff6 = height;
            if (tmp18) {
              const result1 = (diff2 - obj1.get().height) / 2;
              diff6 = height - (result1 - (diff4 - obj1.get().height * result) / 2) * result;
            }
            if (obj1.get().height > diff1) {
              let sum = diff6 + (height2 * result - height2) / 2;
            } else {
              sum = diff6 + (diff1 - (obj3.get().height - paddingTop - bound)) / 2;
            }
            paddingTop = paddingTop * result;
            const diff7 = sum - paddingTop;
            tmp18 = obj1.get().height < diff2 && obj1.get().height > diff4;
          }
        }
      }
      const tmp7 = paddingTop;
    }
    obj = { position: "relative", width: windowDimensions.get().width, height: tmp3(tmp4[18])(num4), transform: null, opacity: null };
    const tmp25 = mode;
    const tmp5Result = _undefined(animatedStyle[17])(safeArea.get(), token);
    const sum1 = num2 + wrapperOffset.get().y;
    if (!wrapperOffset.get().gestureActive) {
      if (mode2.get() !== wrapperOffset.PIP) {
        let tmp29 = outer1_15;
      }
      obj = { translateY: null };
      obj[0] = obj5.withSpring(sum1, tmp29);
      const items = [obj, ];
      obj1 = { scale: null };
      obj1[0] = tmp25(tmp4[19]).withSpring(num3, outer1_15);
      items[1] = obj1;
      obj[3] = items;
      if (mode) {
        num = 0;
      }
      obj[4] = num;
      return obj;
    }
    tmp29 = focused;
  };
  obj = { controlsSpecs, VoicePanelControlsModes: token, safeArea, EDGE_GUTTER, calculateVoicePanelHeaderSpecs: tmp5(tmp2[17]), edgeGutter: token, connected, contentDimensions, windowDimensions, mode: mode2, VoicePanelModes: wrapperOffset, focused, isRefreshEnabled: tmp7, roundToNearestPixel: tmp5(tmp2[18]), withSpring: tmp(tmp2[19]).withSpring, wrapperOffset, LAYOUT_PHYSICS: focused, SCALE_PHYSICS: obj, freeze: tmp6 };
  fn.__closure = obj;
  fn.__workletHash = 495797244676;
  fn.__initData = closure_21;
  animatedStyle = tmpResult.useAnimatedStyle(fn);
  const items1 = [animatedStyle, tmp6, children];
  return safeArea.useMemo(() => {
    let obj = { style: animatedStyle, children: null };
    obj = { freeze: _undefined, children: null };
    obj = { collapsable: false, style: contentDimensions.absoluteFill, children: mode };
    obj[1] = outer1_14(windowDimensions, obj);
    obj[1] = outer1_14(mode(animatedStyle[23]).Freeze, obj);
    return outer1_14(_undefined(animatedStyle[22]), obj);
  }, items1);
}
let c4 = importAllResult;
({ StyleSheet: c5, View: closure_6 } = get_ActivityIndicator);
({ LAYOUT_PHYSICS: metroImportAll, VoicePanelModes: c9, UI_SHOW_HIDE_PHYSICS, VOICE_PANEL_CHUNK_DIVISOR } = VoicePanelModes);
let obj = {};
const merged = Object.assign(UI_SHOW_HIDE_PHYSICS);
obj.mass = 1;
obj.restSpeedThreshold = 0.00001;
let closure_18 = { start: 0, end: VOICE_PANEL_CHUNK_DIVISOR };
let closure_19 = { code: "function VoicePanelCardViewTsx1(){const{viewableChunks}=this.__closure;return viewableChunks.get();}" };
let closure_20 = { code: "function VoicePanelCardViewTsx2(newChunks,previous){const{cheapWorkletShallowEqual,runOnJS,updateValueIfChange}=this.__closure;if(cheapWorkletShallowEqual(newChunks,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(updateValueIfChange)(newChunks);}" };
let closure_21 = { code: "function VoicePanelCardViewTsx3(){const{controlsSpecs,VoicePanelControlsModes,safeArea,EDGE_GUTTER,calculateVoicePanelHeaderSpecs,edgeGutter,connected,contentDimensions,windowDimensions,mode,VoicePanelModes,focused,isRefreshEnabled,roundToNearestPixel,withSpring,wrapperOffset,LAYOUT_PHYSICS,SCALE_PHYSICS,freeze}=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;let height=0;let scale=1;let top=0;const safeAreaBottom=Math.max(safeArea.get().bottom,EDGE_GUTTER);const{height:headerBarHeight,paddingTop:safeAreaTop}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(connected.get()){height+=safeAreaTop;height+=contentDimensions.get().height;height+=safeAreaBottom;if(height-windowDimensions.get().height<8){height=windowDimensions.get().height;}if(mode.get()!==VoicePanelModes.PIP&&!hidden&&focused.get()==null){const targetHeight=height-headerBarHeight-EDGE_GUTTER-controlsSpecs.get().height-safeAreaBottom;const fullView=windowDimensions.get().height-safeAreaTop-safeAreaBottom;const controlsView=windowDimensions.get().height-headerBarHeight-controlsSpecs.get().height-safeAreaBottom;top=headerBarHeight;scale=function(){if(contentDimensions.get().height>targetHeight){return targetHeight/contentDimensions.get().height;}return isRefreshEnabled?windowDimensions.get().width/windowDimensions.get().width:(windowDimensions.get().width-48)/windowDimensions.get().width;}();if(contentDimensions.get().height<fullView&&contentDimensions.get().height>controlsView){const offsetOriginal=(fullView-contentDimensions.get().height)/2;const scaledContent=contentDimensions.get().height*scale;const scaledOffset=(controlsView-scaledContent)/2;top-=(offsetOriginal-scaledOffset)*scale;}if(contentDimensions.get().height>targetHeight){top+=(height*scale-height)/2;}else{top+=(targetHeight-(windowDimensions.get().height-safeAreaTop-safeAreaBottom))/2;}top-=safeAreaTop*scale;}}return{position:'relative',width:windowDimensions.get().width,height:roundToNearestPixel(height),transform:[{translateY:withSpring(top+wrapperOffset.get().y,wrapperOffset.get().gestureActive||mode.get()===VoicePanelModes.PIP?LAYOUT_PHYSICS:SCALE_PHYSICS)},{scale:withSpring(scale,SCALE_PHYSICS)}],opacity:freeze?0:1};}" };
const memoResult = importAllResult.memo(function VoicePanelCardView(viewableChunks) {
  let chunkedParticipants;
  let tmp2;
  viewableChunks = viewableChunks.viewableChunks;
  viewableChunks = undefined;
  chunkedParticipants = undefined;
  let stateFromStoresArray;
  let callback;
  const channelId = importAllResult.useContext(chunkedParticipants(stateFromStoresArray[14])).channelId;
  chunkedParticipants = undefined;
  stateFromStoresArray = undefined;
  [tmp2, chunkedParticipants] = callback(importAllResult.useState(closure_18), 2);
  callback = importAllResult.useCallback((arg0) => {
    let closure_0 = arg0;
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
  let obj = viewableChunks(stateFromStoresArray[11]);
  const fn = function h() {
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
  chunkedParticipants = viewableChunks(stateFromStoresArray[24]).useChunkedParticipants(channelId, tmp2);
  const obj3 = viewableChunks(stateFromStoresArray[24]);
  const items = [getParticipants];
  const items1 = [channelId];
  stateFromStoresArray = viewableChunks(stateFromStoresArray[25]).useStateFromStoresArray(items, () => {
    const participants = outer1_7.getParticipants(viewableChunks);
    return participants.filter((arg0) => callback(arg0));
  }, items1);
  callback = importAllResult.useRef(stateFromStoresArray);
  const items2 = [stateFromStoresArray, channelId];
  const effect = importAllResult.useEffect(() => {
    let obj = chunkedParticipants(stateFromStoresArray[26]);
    if (!obj.isEqual(ref.current, stateFromStoresArray)) {
      const differenceWithResult = chunkedParticipants(tmp2[26]).differenceWith(tmp3.current, tmp4, (id, id2) => id.id === id2.id);
      let user = null;
      if (differenceWithResult.length > 0) {
        user = differenceWithResult[0].user;
      }
      if (null != user) {
        const AccessibilityAnnouncer = viewableChunks(tmp2[27]).AccessibilityAnnouncer;
        const intl = viewableChunks(tmp2[28]).intl;
        obj = { username: null };
        obj[0] = user.username;
        AccessibilityAnnouncer.announce(intl.formatToPlainString(viewableChunks(tmp2[28]).t["9NqwWZ"], obj));
      }
      const tmpResult = chunkedParticipants(tmp2[26]);
    }
    ref.current = stateFromStoresArray;
  }, items2);
  const items3 = [chunkedParticipants];
  return importAllResult.useMemo(() => {
    obj = { children: outer1_14(viewableChunks(stateFromStoresArray[29]).TransitionGroup, obj) };
    obj = { items: chunkedParticipants, renderItem: outer1_17, getItemKey: outer1_16, lazyCleanUpDelay: 1000 };
    return outer1_14(outer1_22, obj);
  }, items3);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCardView.tsx");

export default memoResult;