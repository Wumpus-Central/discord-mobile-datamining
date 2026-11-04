// === Module 19508: VoicePanelCardView ===

// Module 19508 (VoicePanelCardView)
import _modDef12 from "module_12" /* 12 */;
import util from "util" /* 1113 */;
import _modDef1652 from "module_1652" /* 1652 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5150 */;
import native from "native" /* 5207 */;
import Suspender from "Suspender" /* 6124 */;
import VoicePanelCardDefault from "VoicePanelCard" /* 19509 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6978 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5898 */;

const require = globalThis.__r;

require = fn;
function getCardKey(type) {
  return "" + type.type + "-" + type.id;
}
function renderCard(key, item, transitionState, cleanUp) {
  return jsx(VoicePanelCardDefault, { item, transitionState, cleanUp }, key);
}
function CardContentFreezer(children) {
  children = children.children;
  _require = undefined;
  importDefault = undefined;
  let animatedStyle;
  const isDockEnabled = noop.useContext(require("VoicePanelStateContext")).isDockEnabled;
  const context = noop.useContext(require("VoicePanelStateContext"));
  ({ mode, dockMinimizeProgress, dockPressed, wrapperOffset } = context);
  obj = require("VoicePanelPIPStateContext");
  const tmp5 = _slicedToArray;
  [tmp7, tmp8] = noop.useState(false);
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  items = [closure_23, isDockEnabled, mode, c10, dockMinimizeProgress, require("VoicePanelSheetMorph").SHEET_MORPH_PHYSICS, dockPressed, wrapperOffset];
  _require = undefined;
  importDefault = undefined;
  animatedStyle = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items;
  class VoicePanelCardViewTsx4 {
    constructor() {
      tmp = closure_0;
      if (closure_0) {
        tmp2 = closure_1;
        tmp3 = closure_2;
        tmp = closure_1.get() === closure_2.PIP;
      }
      if (tmp) {
        tmp4 = closure_3;
        tmp5 = closure_4;
        num = 1;
        tmp = closure_3.get() >= 1 - closure_4.restDisplacementThreshold;
      }
      if (tmp) {
        tmp6 = closure_5;
        tmp = !closure_5.get();
      }
      if (tmp) {
        tmp7 = closure_6;
        tmp = !closure_6.get().gestureActive;
      }
      return tmp;
    }
  }
  const items1 = [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17];
  VoicePanelCardViewTsx4.__closure = items1;
  VoicePanelCardViewTsx4.__workletHash = 13976123982266;
  VoicePanelCardViewTsx4.__initData = tmp10;
  const items2 = [closure_24, require("module_1705").scheduleOnRN, tmp8];
  _require = undefined;
  importDefault = undefined;
  [tmp18, tmp19, tmp20] = items2;
  class VoicePanelCardViewTsx5 {
    constructor(arg0, arg1) {
      if (children !== arg1) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = closure_0(closure_1, children);
      }
      return;
    }
  }
  const items3 = [tmp19, tmp20];
  VoicePanelCardViewTsx5.__closure = items3;
  VoicePanelCardViewTsx5.__workletHash = 5067780860290;
  VoicePanelCardViewTsx5.__initData = tmp18;
  const animatedReaction = require("module_1652").useAnimatedReaction(VoicePanelCardViewTsx4, VoicePanelCardViewTsx5);
  if (!isDockEnabled) {
    tmp7 = obj.usePIPState().mode === VoicePanelPIPModes.IN_APP;
  }
  _require = tmp7;
  const ref = noop.useRef(tmp7);
  importDefault = ref;
  animatedStyle = tmp5(obj2.useState({}), 2)[1];
  const items4 = [tmp7];
  const effect = obj2.useEffect(() => {
    if (timeout) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        if (!ref.current) {
          tmp.current = true;
          animatedStyle({});
        }
      }, 700);
      return () => {
        clearTimeout(closure_0);
      };
    } else {
      c1.current = false;
    }
  }, items4);
  const tmp25 = tmp7 && require("useRefValue")(ref);
  importDefault = tmp25;
  const context1 = obj2.useContext(tmp3(tmp2[15]));
  ({ connected, controlsSpecs, safeArea, contentDimensions, windowDimensions, mode: mode2, focused, wrapperOffset: wrapperOffset2, isDockEnabled: isDockEnabled2 } = context1);
  const obj3 = require("module_1652");
  const tmp9 = c10;
  const items5 = [c8];
  const stateFromStores = require("initialize").useStateFromStores(items5, () => _undefined6.isConnected());
  const tmpResult = require("initialize");
  const token = require("useToken").useToken(tmp3(tmp2[18]).modules.mobile.VOICE_PANEL_GUTTER);
  const tmpResult3 = require("useToken");
  const items6 = [closure_22, controlsSpecs, c11, safeArea, c13, require("calculateVoicePanelHeaderSpecs"), token, connected, contentDimensions, windowDimensions, isDockEnabled2, mode2, tmp9, focused, wrapperOffset2, c16, c9, stateFromStores, require("roundToNearestPixel"), require("spring/spring").withSpring, tmp25];
  _require = undefined;
  importDefault = undefined;
  animatedStyle = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  VoicePanelPIPModes = undefined;
  c13 = undefined;
  c14 = undefined;
  c15 = undefined;
  c16 = undefined;
  c17 = undefined;
  c18 = undefined;
  c19 = undefined;
  [tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49] = items6;
  class VoicePanelCardViewTsx3 {
    constructor() {
      obj = closure_0;
      tmp = closure_3;
      bound = Math.max(closure_2.get().bottom, closure_3);
      tmp3 = closure_4(closure_2.get(), closure_5);
      ({ height, paddingTop } = tmp3);
      num = 1;
      num2 = 0;
      num3 = 1;
      num4 = 0;
      if (closure_6.get()) {
        obj2 = closure_7;
        tmp4 = paddingTop;
        height2 = tmp4 + closure_7.get().height + bound;
        obj3 = closure_8;
        num5 = 8;
        if (height2 - closure_8.get().height < 8) {
          height2 = obj3.get().height;
        }
        tmp5 = closure_9;
        if (closure_9) {
          num2 = 0;
          num3 = num;
          num4 = height2;
          if (closure_0.get().mode !== closure_1.HIDDEN) {
            tmp28 = closure_12;
            tmp29 = null;
            num2 = 0;
            num3 = num;
            num4 = height2;
            if (null == closure_12.get()) {
              diff = height2 - height - tmp;
              diff1 = diff - obj.get().height - bound;
              diff2 = obj3.get().height - paddingTop - bound;
              diff3 = obj3.get().height - height;
              diff4 = diff3 - obj.get().height - bound;
              result = num;
              if (obj2.get().height > diff1) {
                result = diff1 / obj2.get().height;
              }
              tmp14 = obj2.get().height < diff2 && obj2.get().height > diff4;
              diff5 = height;
              if (tmp14) {
                num6 = 2;
                result1 = (diff2 - obj2.get().height) / 2;
                diff5 = height - (result1 - (diff4 - obj2.get().height * result) / 2) * result;
              }
              if (obj2.get().height > diff1) {
                num8 = 2;
                sum = diff5 + (height2 * result - height2) / 2;
              } else {
                num7 = 2;
                sum = diff5 + (diff1 - (obj3.get().height - paddingTop - bound)) / 2;
              }
              paddingTop = paddingTop * result;
              diff6 = sum - paddingTop;
              tmp19 = result;
              tmp20 = height2;
            }
          }
        } else {
          tmp6 = closure_10;
          tmp7 = closure_11;
          num2 = 0;
          num3 = num;
          num4 = height2;
        }
      }
      tmp21 = closure_9;
      num9 = 0;
      if (!closure_9) {
        tmp22 = closure_13;
        num9 = closure_13.get().y;
      }
      if (tmp21) {
        tmp26 = closure_14;
      } else {
        tmp23 = closure_13;
        if (!closure_13.get().gestureActive) {
          tmp24 = closure_10;
          tmp25 = closure_11;
        }
        tmp26 = closure_15;
      }
      str = "respect-motion-settings";
      if (tmp21) {
        tmp27 = closure_16;
        str = "respect-motion-settings";
        if (!closure_16) {
          str = "animate-never";
        }
      }
      size = { position: "relative", width: closure_8.get().width, height: closure_17(num4), transform: null, opacity: null };
      obj1 = { translateY: closure_18(num2 + num9, tmp26, str) };
      items = [, ];
      items[0] = obj1;
      obj7 = { scale: closure_18(num3, closure_14, str) };
      items[1] = obj7;
      size.transform = items;
      if (closure_19) {
        num = 0;
      }
      size.opacity = num;
      return size;
    }
  }
  const items7 = [tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49];
  VoicePanelCardViewTsx3.__closure = items7;
  VoicePanelCardViewTsx3.__workletHash = 8022757380744;
  VoicePanelCardViewTsx3.__initData = tmp29;
  animatedStyle = require("module_1652").useAnimatedStyle(VoicePanelCardViewTsx3);
  const items8 = [animatedStyle, tmp25, children];
  return noop.useMemo(() => {
    obj = { style: animatedStyle, children: null };
    const obj2 = { freeze, children: <timestampProducer collapsable={false} style={hasOwnProperty.absoluteFill}>{children}</timestampProducer> };
    obj.children = jsx(Suspender.Freeze, { freeze, children: <timestampProducer collapsable={false} style={hasOwnProperty.absoluteFill}>{children}</timestampProducer> });
    return jsx(_modDef1652.View, { style: animatedStyle, children: null });
  }, items8);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const VoicePanelConstants = fn(11410);
({ LAYOUT_PHYSICS: closure_9, VoicePanelModes: closure_10, UI_SHOW_HIDE_PHYSICS, VOICE_PANEL_CHUNK_DIVISOR } = VoicePanelConstants);
const VoicePanelControlsModes = fn(11408).VoicePanelControlsModes;
let VoicePanelPIPModes = fn(19377).VoicePanelPIPModes;
const EDGE_GUTTER = fn(11413).EDGE_GUTTER;
const isUserParticipant = fn(5815).isUserParticipant;
const jsx = fn(21).jsx;
let obj = {};
const merged = Object.assign(UI_SHOW_HIDE_PHYSICS);
obj.mass = 1;
let closure_19 = { start: 0, end: VOICE_PANEL_CHUNK_DIVISOR };
let closure_20 = { code: "(function VoicePanelCardViewTsx1(){let[viewableChunks]=this.__closure;return viewableChunks.get();})" };
let closure_21 = { code: "(function VoicePanelCardViewTsx2(newChunks,previous){let[cheapWorkletShallowEqual,scheduleOnRN,updateValueIfChange]=this.__closure;if(cheapWorkletShallowEqual(newChunks,previous!==null&&previous!==void 0?previous:undefined))return;scheduleOnRN(updateValueIfChange,newChunks);})" };
let closure_22 = { code: "(function VoicePanelCardViewTsx3(){let[controlsSpecs,VoicePanelControlsModes,safeArea,EDGE_GUTTER,calculateVoicePanelHeaderSpecs,edgeGutter,connected,contentDimensions,windowDimensions,isDockEnabled,mode,VoicePanelModes,focused,wrapperOffset,SCALE_PHYSICS,LAYOUT_PHYSICS,isRTCConnected,roundToNearestPixel,withSpring,freeze]=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;let height=0;let scale=1;let top=0;const safeAreaBottom=Math.max(safeArea.get().bottom,EDGE_GUTTER);const{height:headerBarHeight,paddingTop:safeAreaTop}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(connected.get()){height+=safeAreaTop;height+=contentDimensions.get().height;height+=safeAreaBottom;if(height-windowDimensions.get().height<8){height=windowDimensions.get().height;}if((isDockEnabled||mode.get()!==VoicePanelModes.PIP)&&!hidden&&focused.get()==null){const targetHeight=height-headerBarHeight-EDGE_GUTTER-controlsSpecs.get().height-safeAreaBottom;const fullView=windowDimensions.get().height-safeAreaTop-safeAreaBottom;const controlsView=windowDimensions.get().height-headerBarHeight-controlsSpecs.get().height-safeAreaBottom;top=headerBarHeight;scale=function(){if(contentDimensions.get().height>targetHeight){return targetHeight/contentDimensions.get().height;}return 1;}();if(contentDimensions.get().height<fullView&&contentDimensions.get().height>controlsView){const offsetOriginal=(fullView-contentDimensions.get().height)/2;const scaledContent=contentDimensions.get().height*scale;const scaledOffset=(controlsView-scaledContent)/2;top-=(offsetOriginal-scaledOffset)*scale;}if(contentDimensions.get().height>targetHeight){top+=(height*scale-height)/2;}else{top+=(targetHeight-(windowDimensions.get().height-safeAreaTop-safeAreaBottom))/2;}top-=safeAreaTop*scale;}}const offsetY=isDockEnabled?0:wrapperOffset.get().y;const translatePhysics=isDockEnabled||!wrapperOffset.get().gestureActive&&mode.get()!==VoicePanelModes.PIP?SCALE_PHYSICS:LAYOUT_PHYSICS;const motion=isDockEnabled&&!isRTCConnected?'animate-never':'respect-motion-settings';return{position:'relative',width:windowDimensions.get().width,height:roundToNearestPixel(height),transform:[{translateY:withSpring(top+offsetY,translatePhysics,motion)},{scale:withSpring(scale,SCALE_PHYSICS,motion)}],opacity:freeze?0:1};})" };
let closure_23 = { code: "(function VoicePanelCardViewTsx4(){let[isDockEnabled,mode,VoicePanelModes,dockMinimizeProgress,SHEET_MORPH_PHYSICS,dockPressed,wrapperOffset]=this.__closure;return isDockEnabled&&mode.get()===VoicePanelModes.PIP&&dockMinimizeProgress.get()>=1-SHEET_MORPH_PHYSICS.restDisplacementThreshold&&!dockPressed.get()&&!wrapperOffset.get().gestureActive;})" };
let closure_24 = { code: "(function VoicePanelCardViewTsx5(current,previous){let[scheduleOnRN,setIsDockFrozen]=this.__closure;if(current!==previous){scheduleOnRN(setIsDockFrozen,current);}})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCardView.tsx");

export default noop.memo(function VoicePanelCardView(viewableChunks) {
  let chunkedParticipants;
  let stateFromStoresArray;
  _slicedToArray = undefined;
  const channelId = noop.useContext(chunkedParticipants(stateFromStoresArray[15])).channelId;
  [tmp3, c0] = noop.useState(closure_19);
  const callback = noop.useCallback((arg0) => {
    const start = arg0;
    _undefined((start) => {
      let tmp2 = start;
      if (start.start === start.start) {
        tmp2 = start;
        if (start.end === start.end) {
          tmp2 = start;
        }
      }
      return tmp2;
    });
  }, []);
  let tmp2 = _slicedToArray(noop.useState(closure_19), 2);
  items = [closure_20, viewableChunks.viewableChunks];
  _require = undefined;
  [tmp6, tmp7] = items;
  class VoicePanelCardViewTsx1 {
    constructor() {
      return closure_0.get();
    }
  }
  const items1 = [tmp7];
  VoicePanelCardViewTsx1.__closure = items1;
  VoicePanelCardViewTsx1.__workletHash = 4293143028920;
  VoicePanelCardViewTsx1.__initData = tmp6;
  const items2 = [closure_21, require("cheapWorkletShallowEqual").cheapWorkletShallowEqual, require("module_1705").scheduleOnRN, callback];
  _require = undefined;
  chunkedParticipants = undefined;
  stateFromStoresArray = undefined;
  [tmp8, tmp9, tmp10, tmp11] = items2;
  class VoicePanelCardViewTsx2 {
    constructor(arg0, arg1) {
      tmp = arg1;
      tmp2 = closure_0;
      if (!tmp2(viewableChunks, tmp)) {
        tmp3 = closure_1;
        tmp4 = closure_2;
        tmp5 = closure_1(closure_2, viewableChunks);
      }
      return;
    }
  }
  const items3 = [tmp9, tmp10, tmp11];
  VoicePanelCardViewTsx2.__closure = items3;
  VoicePanelCardViewTsx2.__workletHash = 9848593615087;
  VoicePanelCardViewTsx2.__initData = tmp8;
  const animatedReaction = require("module_1652").useAnimatedReaction(VoicePanelCardViewTsx1, VoicePanelCardViewTsx2);
  let obj2 = require("module_1652");
  chunkedParticipants = require("useVoicePanelParticipants").useChunkedParticipants(channelId, tmp3);
  const tmp5Result = require("useVoicePanelParticipants");
  const items4 = [ChannelRTCStore];
  const items5 = [channelId];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(items4, () => {
    const participants = ChannelRTCStore.getParticipants(c0);
    return participants.filter((item) => closure_1_14(item));
  }, items5);
  _slicedToArray = noop.useRef(stateFromStoresArray);
  const items6 = [stateFromStoresArray, channelId];
  const effect = noop.useEffect(() => {
    if (!obj.isEqual(ref.current, stateFromStoresArray)) {
      const differenceWithResult = _modDef12.differenceWith(ref.current, stateFromStoresArray, (id, id2) => id.id === id2.id);
      let user = null;
      if (differenceWithResult.length > 0) {
        user = differenceWithResult[0].user;
      }
      if (null != user) {
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        const intl = util.intl;
        const obj2 = { username: user.username };
        AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t["9NqwWZ"], obj2));
      }
      const tmpResult = _modDef12;
    }
    ref.current = stateFromStoresArray;
    obj = _modDef12;
  }, items6);
  const items7 = [chunkedParticipants];
  return noop.useMemo(() => {
    obj = { children: jsx(native.TransitionGroup, { items: chunkedParticipants, renderItem: renderCard, getItemKey: getCardKey, lazyCleanUpDelay: 1000 }) };
    return <CardContentFreezer>{jsx(native.TransitionGroup, { items: chunkedParticipants, renderItem: renderCard, getItemKey: getCardKey, lazyCleanUpDelay: 1000 })}</CardContentFreezer>;
  }, items7);
});