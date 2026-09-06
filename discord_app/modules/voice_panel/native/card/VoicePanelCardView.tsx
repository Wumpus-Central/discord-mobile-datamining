// discord_app/modules/voice_panel/native/card/VoicePanelCardView.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import AccessibilityAnnouncer2 from "../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import Suspender from "../../../../../_runtime/04923_Suspender.js";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import ReanimatedNativeViewDefault from "../../../core/native/ReanimatedNativeView.tsx";
import cheapWorkletShallowEqual from "../../../reanimated/native/cheapWorkletShallowEqual.tsx";
import roundToNearestPixelDefault from "../utils/roundToNearestPixel.tsx";
import calculateVoicePanelHeaderSpecsDefault from "../header/calculateVoicePanelHeaderSpecs.tsx";
import VoicePanelCardDefault from "VoicePanelCard.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";

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
  let __closure = children(animatedStyle[19]);
  const mode = __closure.usePIPState().mode;
  closure_129_0 = mode;
  const ref = noop.useRef(mode === VoicePanelPIPModes.IN_APP);
  closure_129_1 = ref;
  closure_129_2 = _slicedToArray(noop.useState({}), 2)[1];
  let items = [mode];
  const effect = noop.useEffect(() => {
    if (timeout === constants.IN_APP) {
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
  const tmp6 = mode === VoicePanelPIPModes.IN_APP && require("useRefValue")(ref);
  importDefault = tmp6;
  closure_130_0 = tmp6;
  const context = noop.useContext(tmp5(tmp2[13]));
  const connected = context.connected;
  closure_130_1 = connected;
  const controlsSpecs = context.controlsSpecs;
  closure_130_2 = controlsSpecs;
  const safeArea = context.safeArea;
  closure_130_3 = safeArea;
  const contentDimensions = context.contentDimensions;
  closure_130_4 = contentDimensions;
  const windowDimensions = context.windowDimensions;
  closure_130_5 = windowDimensions;
  const mode2 = context.mode;
  closure_130_6 = mode2;
  const focused = context.focused;
  closure_130_7 = focused;
  const wrapperOffset = context.wrapperOffset;
  closure_130_8 = wrapperOffset;
  let tmpResult = tmp(tmp2[14]);
  const token = tmpResult.useToken(tmp5(tmp2[15]).modules.mobile.VOICE_PANEL_GUTTER);
  closure_130_9 = token;
  tmpResult = tmp(tmp2[11]);
  const fn = function o() {
    obj = animatedStyle;
    const bound = Math.max(_slicedToArray.get().bottom, EDGE_GUTTER);
    ({ height, paddingTop } = calculateVoicePanelHeaderSpecsDefault(_slicedToArray.get(), closure_1_9));
    let num = 1;
    let num2 = 0;
    let num3 = 1;
    let num4 = 0;
    if (freeze.get()) {
      let height2 = paddingTop + noop.get().height + bound;
      if (height2 - absoluteFill.get().height < 8) {
        height2 = absoluteFill.get().height;
      }
      num2 = 0;
      num3 = num;
      num4 = height2;
      if (closure_1_6.get() !== VoicePanelModes.PIP) {
        num2 = 0;
        num3 = num;
        num4 = height2;
        if (animatedStyle.get().mode !== VoicePanelControlsModes.HIDDEN) {
          num2 = 0;
          num3 = num;
          num4 = height2;
          if (null == ChannelRTCStore.get()) {
            const diff = height2 - height - EDGE_GUTTER;
            const diff1 = diff - obj.get().height - bound;
            const diff2 = absoluteFill.get().height - paddingTop - bound;
            const diff3 = absoluteFill.get().height - height;
            const diff4 = diff3 - obj.get().height - bound;
            let result = num;
            if (noop.get().height > diff1) {
              result = diff1 / noop.get().height;
            }
            let diff5 = height;
            if (tmp16) {
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
            tmp16 = noop.get().height < diff2 && noop.get().height > diff4;
          }
        }
      }
    }
    const size = {
      position: "relative",
      width: absoluteFill.get().width,
      height: roundToNearestPixelDefault(num4),
      transform: null,
      opacity: null,
    };
    const tmp5Result = calculateVoicePanelHeaderSpecsDefault(_slicedToArray.get(), closure_1_9);
    const sum1 = num2 + closure_1_8.get().y;
    if (!closure_1_8.get().gestureActive) {
      if (closure_1_6.get() !== VoicePanelModes.PIP) {
        let tmp27 = obj;
      }
      obj = { translateY: obj5.withSpring(sum1, tmp27) };
      const items = [obj];
      obj = { scale: null };
      obj.scale = spring.withSpring(num3, obj);
      items[1] = obj;
      size.transform = items;
      if (children) {
        num = 0;
      }
      size.opacity = num;
      return size;
    }
    tmp27 = closure_2_8;
    obj5 = spring;
  };
  __closure = {
    controlsSpecs,
    VoicePanelControlsModes,
    safeArea,
    EDGE_GUTTER,
    calculateVoicePanelHeaderSpecs: tmp5(tmp2[16]),
    edgeGutter: token,
    connected,
    contentDimensions,
    windowDimensions,
    mode: mode2,
    VoicePanelModes,
    focused,
    roundToNearestPixel: tmp5(tmp2[17]),
    withSpring: tmp(tmp2[18]).withSpring,
    wrapperOffset,
    LAYOUT_PHYSICS,
    SCALE_PHYSICS: __closure,
    freeze: tmp6,
  };
  fn.__closure = __closure;
  fn.__workletHash = 15194344033500;
  fn.__initData = __initData3;
  animatedStyle = tmpResult.useAnimatedStyle(fn);
  const items1 = [animatedStyle, tmp6, children];
  return noop.useMemo(() => {
    obj = { style: animatedStyle, children: null };
    obj = { freeze, children: jsx(Suspender.Freeze, { style: animatedStyle, children: null }) };
    obj = { collapsable: false, style: absoluteFill.absoluteFill, children };
    obj.children = (
      <timestampProducer collapsable={false} style={absoluteFill.absoluteFill}>
        {children}
      </timestampProducer>
    );
    return jsx(ReanimatedNativeViewDefault, { collapsable: false, style: absoluteFill.absoluteFill, children });
  }, items1);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const VoicePanelConstants = fn(12273);
({
  LAYOUT_PHYSICS: closure_8,
  VoicePanelModes: closure_9,
  UI_SHOW_HIDE_PHYSICS,
  VOICE_PANEL_CHUNK_DIVISOR,
} = VoicePanelConstants);
const VoicePanelControlsModes = fn(12271).VoicePanelControlsModes;
const VoicePanelPIPModes = fn(17088).VoicePanelPIPModes;
const EDGE_GUTTER = fn(12276).EDGE_GUTTER;
const isUserParticipant = fn(4581).isUserParticipant;
const jsx = fn(21).jsx;
let obj = {};
const merged = Object.assign(UI_SHOW_HIDE_PHYSICS);
obj.mass = 1;
obj.restSpeedThreshold = 0.00001;
let closure_18 = { start: 0, end: VOICE_PANEL_CHUNK_DIVISOR };
const __initData = {
  code: "function VoicePanelCardViewTsx1(){const{viewableChunks}=this.__closure;return viewableChunks.get();}",
};
const __initData2 = {
  code: "function VoicePanelCardViewTsx2(newChunks,previous){const{cheapWorkletShallowEqual,runOnJS,updateValueIfChange}=this.__closure;if(cheapWorkletShallowEqual(newChunks,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(updateValueIfChange)(newChunks);}",
};
const __initData3 = {
  code: "function VoicePanelCardViewTsx3(){const{controlsSpecs,VoicePanelControlsModes,safeArea,EDGE_GUTTER,calculateVoicePanelHeaderSpecs,edgeGutter,connected,contentDimensions,windowDimensions,mode,VoicePanelModes,focused,roundToNearestPixel,withSpring,wrapperOffset,LAYOUT_PHYSICS,SCALE_PHYSICS,freeze}=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;let height=0;let scale=1;let top=0;const safeAreaBottom=Math.max(safeArea.get().bottom,EDGE_GUTTER);const{height:headerBarHeight,paddingTop:safeAreaTop}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(connected.get()){height+=safeAreaTop;height+=contentDimensions.get().height;height+=safeAreaBottom;if(height-windowDimensions.get().height<8){height=windowDimensions.get().height;}if(mode.get()!==VoicePanelModes.PIP&&!hidden&&focused.get()==null){const targetHeight=height-headerBarHeight-EDGE_GUTTER-controlsSpecs.get().height-safeAreaBottom;const fullView=windowDimensions.get().height-safeAreaTop-safeAreaBottom;const controlsView=windowDimensions.get().height-headerBarHeight-controlsSpecs.get().height-safeAreaBottom;top=headerBarHeight;scale=function(){if(contentDimensions.get().height>targetHeight){return targetHeight/contentDimensions.get().height;}return 1;}();if(contentDimensions.get().height<fullView&&contentDimensions.get().height>controlsView){const offsetOriginal=(fullView-contentDimensions.get().height)/2;const scaledContent=contentDimensions.get().height*scale;const scaledOffset=(controlsView-scaledContent)/2;top-=(offsetOriginal-scaledOffset)*scale;}if(contentDimensions.get().height>targetHeight){top+=(height*scale-height)/2;}else{top+=(targetHeight-(windowDimensions.get().height-safeAreaTop-safeAreaBottom))/2;}top-=safeAreaTop*scale;}}return{position:'relative',width:windowDimensions.get().width,height:roundToNearestPixel(height),transform:[{translateY:withSpring(top+wrapperOffset.get().y,wrapperOffset.get().gestureActive||mode.get()===VoicePanelModes.PIP?LAYOUT_PHYSICS:SCALE_PHYSICS)},{scale:withSpring(scale,SCALE_PHYSICS)}],opacity:freeze?0:1};}",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCardView.tsx");

export default noop.memo(function VoicePanelCardView(viewableChunks) {
  viewableChunks = viewableChunks.viewableChunks;
  let chunkedParticipants;
  let stateFromStoresArray;
  _slicedToArray = undefined;
  const channelId = noop.useContext(chunkedParticipants(stateFromStoresArray[13])).channelId;
  closure_129_0 = viewableChunks;
  closure_129_1 = undefined;
  [tmp2, closure_129_1] = _slicedToArray(noop.useState(closure_18), 2);
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
  channelId(stateFromStoresArray[11]);
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
  const __closure = {
    cheapWorkletShallowEqual: channelId(stateFromStoresArray[12]).cheapWorkletShallowEqual,
    runOnJS: channelId(stateFromStoresArray[11]).runOnJS,
    updateValueIfChange: callback,
  };
  fn2.__closure = __closure;
  fn2.__workletHash = 13543715159803;
  fn2.__initData = __initData2;
  const animatedReaction = __closure.useAnimatedReaction(fn, fn2);
  let tmp = _slicedToArray(noop.useState(closure_18), 2);
  chunkedParticipants = channelId(stateFromStoresArray[23]).useChunkedParticipants(channelId, tmp2);
  const obj3 = channelId(stateFromStoresArray[23]);
  const items = [ChannelRTCStore];
  const items1 = [channelId];
  stateFromStoresArray = channelId(stateFromStoresArray[24]).useStateFromStoresArray(
    items,
    () => {
      const participants = ChannelRTCStore.getParticipants(channelId);
      return participants.filter((item) => closure_1_13(item));
    },
    items1,
  );
  _slicedToArray = noop.useRef(stateFromStoresArray);
  const items2 = [stateFromStoresArray, channelId];
  const effect = noop.useEffect(() => {
    obj = _modDef12;
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
        obj = { username: user.username };
        AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t["9NqwWZ"], obj));
      }
      const tmpResult = _modDef12;
    }
    ref.current = stateFromStoresArray;
  }, items2);
  const items3 = [chunkedParticipants];
  return noop.useMemo(() => {
    obj = { children: null };
    obj = { items: chunkedParticipants, renderItem: renderCard, getItemKey: getCardKey, lazyCleanUpDelay: 1000 };
    obj.children = jsx(native.TransitionGroup, {
      items: chunkedParticipants,
      renderItem: renderCard,
      getItemKey: getCardKey,
      lazyCleanUpDelay: 1000,
    });
    return (
      <CardContentFreezer
        items={chunkedParticipants}
        renderItem={renderCard}
        getItemKey={getCardKey}
        lazyCleanUpDelay={1000}
      />
    );
  }, items3);
});
