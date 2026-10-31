// discord_app/modules/voice_panel/native/card/VoicePanelCardView.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import util from "../../../../intl/index.native.tsx";
import AccessibilityAnnouncer2 from "../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import Suspender from "../../../../../_runtime/05989_Suspender.js";
import ReanimatedNativeViewDefault from "../../../core/native/ReanimatedNativeView.tsx";
import cheapWorkletShallowEqual from "../../../reanimated/native/cheapWorkletShallowEqual.tsx";
import calculateVoicePanelHeaderSpecsDefault from "../header/calculateVoicePanelHeaderSpecs.tsx";
import VoicePanelSheetMorph from "../dock/VoicePanelSheetMorph.tsx";
import roundToNearestPixelDefault from "../utils/roundToNearestPixel.tsx";
import VoicePanelCardDefault from "VoicePanelCard.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import RTCConnectionStore from "../../../../stores/RTCConnectionStore.tsx";

require = fn;
function getCardKey(type) {
  return "" + type.type + "-" + type.id;
}
function renderCard(key, item, transitionState, cleanUp) {
  return jsx(VoicePanelCardDefault, { item, transitionState, cleanUp }, key);
}
function CardContentFreezer(children) {
  children = children.children;
  importDefault = undefined;
  let animatedStyle;
  closure_129_0 = undefined;
  closure_129_1 = undefined;
  closure_129_2 = undefined;
  SCALE_PHYSICS = children(animatedStyle[22]);
  const isDockEnabled = noop.useContext(require("VoicePanelStateContext")).isDockEnabled;
  closure_130_0 = isDockEnabled;
  const context = noop.useContext(require("VoicePanelStateContext"));
  const mode = context.mode;
  closure_130_1 = mode;
  const dockMinimizeProgress = context.dockMinimizeProgress;
  closure_130_2 = dockMinimizeProgress;
  const dockPressed = context.dockPressed;
  closure_130_3 = dockPressed;
  const wrapperOffset = context.wrapperOffset;
  closure_130_4 = wrapperOffset;
  [tmp7, tmp8] = noop.useState(false);
  closure_130_5 = tmp8;
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  const fn = function c() {
    let tmp = children;
    if (children) {
      tmp = freeze.get() === VoicePanelModes.PIP;
    }
    if (tmp) {
      value = animatedStyle.get();
      tmp = value >= 1 - VoicePanelSheetMorph.SHEET_MORPH_PHYSICS.restDisplacementThreshold;
    }
    if (tmp) {
      tmp = !_slicedToArray.get();
    }
    if (tmp) {
      tmp = !noop.get().gestureActive;
    }
    return tmp;
  };
  const obj3 = children(animatedStyle[12]);
  fn.__closure = {
    isDockEnabled,
    mode,
    VoicePanelModes,
    dockMinimizeProgress,
    SHEET_MORPH_PHYSICS: children(animatedStyle[21]).SHEET_MORPH_PHYSICS,
    dockPressed,
    wrapperOffset,
  };
  fn.__workletHash = 13859229262083;
  fn.__initData = __initData4;
  const fn2 = function s(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport.runOnJS(absoluteFill)(arg0);
    }
  };
  let obj4 = {
    isDockEnabled,
    mode,
    VoicePanelModes,
    dockMinimizeProgress,
    SHEET_MORPH_PHYSICS: children(animatedStyle[21]).SHEET_MORPH_PHYSICS,
    dockPressed,
    wrapperOffset,
  };
  fn2.__closure = { runOnJS: children(animatedStyle[12]).runOnJS, setIsDockFrozen: tmp8 };
  fn2.__workletHash = 3701106957302;
  fn2.__initData = __initData5;
  const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
  if (!isDockEnabled) {
    tmp7 = SCALE_PHYSICS.usePIPState().mode === VoicePanelPIPModes.IN_APP;
  }
  closure_129_0 = tmp7;
  const ref = noop.useRef(tmp7);
  closure_129_1 = ref;
  closure_129_2 = _slicedToArray(noop.useState({}), 2)[1];
  let items = [tmp7];
  const effect = noop.useEffect(() => {
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
      ref.current = false;
    }
  }, items);
  const tmp14 = tmp7 && require("useRefValue")(ref);
  importDefault = tmp14;
  closure_131_0 = tmp14;
  const context1 = noop.useContext(tmp3(tmp2[14]));
  const connected = context1.connected;
  closure_131_1 = connected;
  const controlsSpecs = context1.controlsSpecs;
  closure_131_2 = controlsSpecs;
  const safeArea = context1.safeArea;
  closure_131_3 = safeArea;
  const contentDimensions = context1.contentDimensions;
  closure_131_4 = contentDimensions;
  const windowDimensions = context1.windowDimensions;
  closure_131_5 = windowDimensions;
  const mode2 = context1.mode;
  closure_131_6 = mode2;
  const focused = context1.focused;
  closure_131_7 = focused;
  const wrapperOffset2 = context1.wrapperOffset;
  closure_131_8 = wrapperOffset2;
  const isDockEnabled2 = context1.isDockEnabled;
  closure_131_9 = isDockEnabled2;
  let obj5 = { runOnJS: children(animatedStyle[12]).runOnJS, setIsDockFrozen: tmp8 };
  const items1 = [RTCConnectionStore];
  const stateFromStores = children(animatedStyle[15]).useStateFromStores(items1, () =>
    RTCConnectionStore.isConnected(),
  );
  closure_131_10 = stateFromStores;
  const tmpResult = children(animatedStyle[15]);
  const token = children(animatedStyle[16]).useToken(tmp3(tmp2[17]).modules.mobile.VOICE_PANEL_GUTTER);
  closure_131_11 = token;
  const tmpResult3 = children(animatedStyle[16]);
  const fn3 = function o() {
    const bound = Math.max(_slicedToArray.get().bottom, EDGE_GUTTER);
    ({ height, paddingTop } = calculateVoicePanelHeaderSpecsDefault(_slicedToArray.get(), closure_1_11));
    let num = 1;
    let num2 = 0;
    let num3 = 1;
    let num4 = 0;
    if (freeze.get()) {
      let height2 = paddingTop + noop.get().height + bound;
      if (height2 - absoluteFill.get().height < 8) {
        height2 = absoluteFill.get().height;
      }
      if (closure_1_9) {
        num2 = 0;
        num3 = num;
        num4 = height2;
        if (animatedStyle.get().mode !== VoicePanelControlsModes.HIDDEN) {
          num2 = 0;
          num3 = num;
          num4 = height2;
          if (null == ChannelRTCStore.get()) {
            const diff = height2 - height - EDGE_GUTTER;
            const diff1 = diff - animatedStyle.get().height - bound;
            const diff2 = absoluteFill.get().height - paddingTop - bound;
            const diff3 = absoluteFill.get().height - height;
            const diff4 = diff3 - animatedStyle.get().height - bound;
            let result = num;
            if (noop.get().height > diff1) {
              result = diff1 / noop.get().height;
            }
            let diff5 = height;
            if (tmp17) {
              const result1 = (diff2 - noop.get().height) / 2;
              diff5 = height - (result1 - (diff4 - noop.get().height * result) / 2) * result;
            }
            if (noop.get().height > diff1) {
              let sum = diff5 + (height2 * result - height2) / 2;
            } else {
              sum = diff5 + (diff1 - (absoluteFill.get().height - paddingTop - bound)) / 2;
            }
            paddingTop = paddingTop * result;
            const diff6 = sum - paddingTop;
            tmp17 = noop.get().height < diff2 && noop.get().height > diff4;
          }
        }
      } else {
        num2 = 0;
        num3 = num;
        num4 = height2;
      }
    }
    let num9 = 0;
    if (!closure_1_9) {
      num9 = RTCConnectionStore.get().y;
    }
    if (closure_1_9) {
      let tmp29 = animatedStyle;
    } else {
      tmp29 = closure_2_9;
    }
    let str = "respect-motion-settings";
    if (closure_1_9) {
      str = "respect-motion-settings";
      if (!VoicePanelModes) {
        str = "animate-never";
      }
    }
    const size = {
      position: "relative",
      width: absoluteFill.get().width,
      height: roundToNearestPixelDefault(num4),
      transform: null,
      opacity: null,
    };
    const obj4 = { translateY: null };
    const tmp5Result = calculateVoicePanelHeaderSpecsDefault(_slicedToArray.get(), closure_1_11);
    obj4.translateY = spring.withSpring(num2 + num9, tmp29, str);
    const items = [obj4];
    const obj5 = { scale: null };
    obj5.scale = spring.withSpring(num3, animatedStyle, str);
    items[1] = obj5;
    size.transform = items;
    if (children) {
      num = 0;
    }
    size.opacity = num;
    return size;
  };
  const tmpResult4 = children(animatedStyle[12]);
  fn3.__closure = {
    controlsSpecs,
    VoicePanelControlsModes,
    safeArea,
    EDGE_GUTTER,
    calculateVoicePanelHeaderSpecs: require("calculateVoicePanelHeaderSpecs"),
    edgeGutter: token,
    connected,
    contentDimensions,
    windowDimensions,
    isDockEnabled: isDockEnabled2,
    mode: mode2,
    VoicePanelModes,
    focused,
    wrapperOffset: wrapperOffset2,
    SCALE_PHYSICS,
    LAYOUT_PHYSICS,
    isRTCConnected: stateFromStores,
    roundToNearestPixel: require("roundToNearestPixel"),
    withSpring: children(animatedStyle[20]).withSpring,
    freeze: tmp14,
  };
  fn3.__workletHash = 181782059665;
  fn3.__initData = __initData3;
  animatedStyle = tmpResult4.useAnimatedStyle(fn3);
  const items2 = [animatedStyle, tmp14, children];
  return noop.useMemo(() => {
    const obj = { style: animatedStyle, children: null };
    const obj2 = {
      freeze,
      children: (
        <timestampProducer collapsable={false} style={absoluteFill.absoluteFill}>
          {children}
        </timestampProducer>
      ),
    };
    obj.children = jsx(Suspender.Freeze, {
      freeze,
      children: (
        <timestampProducer collapsable={false} style={absoluteFill.absoluteFill}>
          {children}
        </timestampProducer>
      ),
    });
    return jsx(ReanimatedNativeViewDefault, { style: animatedStyle, children: null });
  }, items2);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const VoicePanelConstants = fn(11223);
({
  LAYOUT_PHYSICS: closure_9,
  VoicePanelModes: c10,
  UI_SHOW_HIDE_PHYSICS,
  VOICE_PANEL_CHUNK_DIVISOR,
} = VoicePanelConstants);
const VoicePanelControlsModes = fn(11221).VoicePanelControlsModes;
const VoicePanelPIPModes = fn(19108).VoicePanelPIPModes;
const EDGE_GUTTER = fn(11226).EDGE_GUTTER;
const isUserParticipant = fn(5681).isUserParticipant;
const jsx = fn(21).jsx;
let SCALE_PHYSICS = {};
const merged = Object.assign(UI_SHOW_HIDE_PHYSICS);
SCALE_PHYSICS.mass = 1;
SCALE_PHYSICS.restSpeedThreshold = 0.00001;
let closure_19 = { start: 0, end: VOICE_PANEL_CHUNK_DIVISOR };
const __initData = {
  code: "function VoicePanelCardViewTsx1(){const{viewableChunks}=this.__closure;return viewableChunks.get();}",
};
const __initData2 = {
  code: "function VoicePanelCardViewTsx2(newChunks,previous){const{cheapWorkletShallowEqual,runOnJS,updateValueIfChange}=this.__closure;if(cheapWorkletShallowEqual(newChunks,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(updateValueIfChange)(newChunks);}",
};
const __initData3 = {
  code: "function VoicePanelCardViewTsx3(){const{controlsSpecs,VoicePanelControlsModes,safeArea,EDGE_GUTTER,calculateVoicePanelHeaderSpecs,edgeGutter,connected,contentDimensions,windowDimensions,isDockEnabled,mode,VoicePanelModes,focused,wrapperOffset,SCALE_PHYSICS,LAYOUT_PHYSICS,isRTCConnected,roundToNearestPixel,withSpring,freeze}=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;let height=0;let scale=1;let top=0;const safeAreaBottom=Math.max(safeArea.get().bottom,EDGE_GUTTER);const{height:headerBarHeight,paddingTop:safeAreaTop}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(connected.get()){height+=safeAreaTop;height+=contentDimensions.get().height;height+=safeAreaBottom;if(height-windowDimensions.get().height<8){height=windowDimensions.get().height;}if((isDockEnabled||mode.get()!==VoicePanelModes.PIP)&&!hidden&&focused.get()==null){const targetHeight=height-headerBarHeight-EDGE_GUTTER-controlsSpecs.get().height-safeAreaBottom;const fullView=windowDimensions.get().height-safeAreaTop-safeAreaBottom;const controlsView=windowDimensions.get().height-headerBarHeight-controlsSpecs.get().height-safeAreaBottom;top=headerBarHeight;scale=function(){if(contentDimensions.get().height>targetHeight){return targetHeight/contentDimensions.get().height;}return 1;}();if(contentDimensions.get().height<fullView&&contentDimensions.get().height>controlsView){const offsetOriginal=(fullView-contentDimensions.get().height)/2;const scaledContent=contentDimensions.get().height*scale;const scaledOffset=(controlsView-scaledContent)/2;top-=(offsetOriginal-scaledOffset)*scale;}if(contentDimensions.get().height>targetHeight){top+=(height*scale-height)/2;}else{top+=(targetHeight-(windowDimensions.get().height-safeAreaTop-safeAreaBottom))/2;}top-=safeAreaTop*scale;}}const offsetY=isDockEnabled?0:wrapperOffset.get().y;const translatePhysics=isDockEnabled||!wrapperOffset.get().gestureActive&&mode.get()!==VoicePanelModes.PIP?SCALE_PHYSICS:LAYOUT_PHYSICS;const motion=isDockEnabled&&!isRTCConnected?'animate-never':'respect-motion-settings';return{position:'relative',width:windowDimensions.get().width,height:roundToNearestPixel(height),transform:[{translateY:withSpring(top+offsetY,translatePhysics,motion)},{scale:withSpring(scale,SCALE_PHYSICS,motion)}],opacity:freeze?0:1};}",
};
const __initData4 = {
  code: "function VoicePanelCardViewTsx4(){const{isDockEnabled,mode,VoicePanelModes,dockMinimizeProgress,SHEET_MORPH_PHYSICS,dockPressed,wrapperOffset}=this.__closure;return isDockEnabled&&mode.get()===VoicePanelModes.PIP&&dockMinimizeProgress.get()>=1-SHEET_MORPH_PHYSICS.restDisplacementThreshold&&!dockPressed.get()&&!wrapperOffset.get().gestureActive;}",
};
const __initData5 = {
  code: "function VoicePanelCardViewTsx5(current,previous){const{runOnJS,setIsDockFrozen}=this.__closure;if(current!==previous){runOnJS(setIsDockFrozen)(current);}}",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCardView.tsx");

export default noop.memo(function VoicePanelCardView(viewableChunks) {
  viewableChunks = viewableChunks.viewableChunks;
  let chunkedParticipants;
  let stateFromStoresArray;
  _slicedToArray = undefined;
  const channelId = noop.useContext(chunkedParticipants(stateFromStoresArray[14])).channelId;
  closure_129_0 = viewableChunks;
  closure_129_1 = undefined;
  [tmp2, closure_129_1] = noop.useState(closure_19);
  const callback = noop.useCallback((arg0) => {
    const start = arg0;
    chunkedParticipants((start) => {
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
  closure_129_2 = callback;
  let tmp = _slicedToArray(noop.useState(closure_19), 2);
  const fn = function c() {
    return channelId.get();
  };
  fn.__closure = { viewableChunks };
  fn.__workletHash = 1074173860641;
  fn.__initData = __initData;
  const fn2 = function s(safeAreaState, current) {
    if (!obj.cheapWorkletShallowEqual(safeAreaState, tmp)) {
      ReanimatedRexport.runOnJS(stateFromStoresArray)(safeAreaState);
      const tmp2Result = ReanimatedRexport;
    }
    obj = cheapWorkletShallowEqual;
    tmp = current;
  };
  let obj = channelId(stateFromStoresArray[12]);
  fn2.__closure = {
    cheapWorkletShallowEqual: channelId(stateFromStoresArray[13]).cheapWorkletShallowEqual,
    runOnJS: channelId(stateFromStoresArray[12]).runOnJS,
    updateValueIfChange: callback,
  };
  fn2.__workletHash = 13543715159803;
  fn2.__initData = __initData2;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  let obj2 = {
    cheapWorkletShallowEqual: channelId(stateFromStoresArray[13]).cheapWorkletShallowEqual,
    runOnJS: channelId(stateFromStoresArray[12]).runOnJS,
    updateValueIfChange: callback,
  };
  chunkedParticipants = channelId(stateFromStoresArray[26]).useChunkedParticipants(channelId, tmp2);
  const obj3 = channelId(stateFromStoresArray[26]);
  const items = [ChannelRTCStore];
  const items1 = [channelId];
  stateFromStoresArray = channelId(stateFromStoresArray[15]).useStateFromStoresArray(
    items,
    () => {
      const participants = ChannelRTCStore.getParticipants(channelId);
      return participants.filter((item) => closure_1_14(item));
    },
    items1,
  );
  _slicedToArray = noop.useRef(stateFromStoresArray);
  const items2 = [stateFromStoresArray, channelId];
  const effect = noop.useEffect(() => {
    if (!obj.isEqual(ref.current, stateFromStoresArray)) {
      const differenceWithResult = _modDef12.differenceWith(
        ref.current,
        stateFromStoresArray,
        (id, id2) => id.id === id2.id,
      );
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
  }, items2);
  const items3 = [chunkedParticipants];
  return noop.useMemo(() => {
    const obj = {
      children: jsx(native.TransitionGroup, {
        items: chunkedParticipants,
        renderItem: renderCard,
        getItemKey: getCardKey,
        lazyCleanUpDelay: 1000,
      }),
    };
    return (
      <CardContentFreezer>
        {jsx(native.TransitionGroup, {
          items: chunkedParticipants,
          renderItem: renderCard,
          getItemKey: getCardKey,
          lazyCleanUpDelay: 1000,
        })}
      </CardContentFreezer>
    );
  }, items3);
});
