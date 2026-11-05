// === Module 19522: VoicePanelDockBadgedIcon ===

// Module 19522 (VoicePanelDockBadgedIcon)
import _mod1705 from "module_1705" /* 1705 */;
import native from "native" /* 5209 */;
import timing_timing from "timing/timing" /* 5380 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function StreamBadge(progress) {
  progress = progress.progress;
  state = progress.state;
  const cleanUp = progress.cleanUp;
  const tmp = closure_13();
  items = [cleanUp, progress, state];
  const effect = noop.useEffect(() => {
    if (state === native.TransitionStates.YEETED) {
      const tmpResult = timing_timing;
      items = [closure_14, _mod1705.scheduleOnRN, cleanUp];
      c0 = undefined;
      c1 = undefined;
      [tmp11, tmp12, tmp13] = items;
      class VoicePanelDockBadgedIconTsx1 {
        constructor(arg0) {
          if (arg0) {
            tmp = closure_0;
            tmp2 = closure_1;
            tmp3 = closure_0(closure_1);
          }
          return;
        }
      }
      const items1 = [tmp12, tmp13];
      VoicePanelDockBadgedIconTsx1.__closure = items1;
      VoicePanelDockBadgedIconTsx1.__workletHash = 2048844705662;
      VoicePanelDockBadgedIconTsx1.__initData = tmp11;
      const result = progress.set(tmpResult.withTiming(0, React4, "respect-motion-settings", VoicePanelDockBadgedIconTsx1));
    } else {
      const result1 = progress.set(timing_timing.withTiming(1, React4));
      const tmpResult2 = timing_timing;
    }
  }, items);
  const obj = { style: null, children: null };
  let items1 = [tmp.badge, progress.animatedBadgeStyle];
  obj.style = items1;
  let tmp3Result = null;
  if (null != closure_12) {
    const obj3 = { style: tmp.badgeIndicator, IconComponent: null, source: null, isCurrentUserConnected: true };
    ({ icon: obj2.IconComponent, source: obj2.source } = closure_12);
    tmp3Result = closure_5(progress(cleanUp[5]).GuildsBarActivityIndicatorBase, obj3);
  }
  obj.children = tmp3Result;
  return closure_5(state(cleanUp[10]).View, obj);
}
const VoicePanelDockConstants = fn(11437);
({ DOCK_FADE_TIMING: closure_4, DOCK_TILE_SIZE } = VoicePanelDockConstants);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: closure_6, jsxs: metroImportDefault } = jsxProd);
const sum = DOCK_TILE_SIZE - fn(1187).BADGE_SIZE + 4;
const sum1 = DOCK_TILE_SIZE - fn(1187).BADGE_SIZE + 3;
const sum2 = fn(1187).BADGE_SIZE + 4;
let closure_9 = sum2 / 2;
let closure_10 = sum + fn(1187).BADGE_SIZE / 2;
let closure_11 = sum1 + fn(1187).BADGE_SIZE / 2;
const GuildsBarActivityIndicator = fn(18689);
const mediaIcon = GuildsBarActivityIndicator.getMediaIcon({ audio: false, video: false, screenshare: true, isCurrentUserConnected: true });
const createStyles = fn(5143);
let obj3 = { clip: null, badge: null, badgeIndicator: null };
const merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
obj3.clip = {};
let size = { position: "absolute", left: sum - fn(1187).BADGE_PADDING, top: sum1 - fn(1187).BADGE_PADDING, width: fn(1187).BADGE_SIZE + 2 * fn(1187).BADGE_PADDING, height: fn(1187).BADGE_SIZE + 2 * fn(1187).BADGE_PADDING };
obj3.badge = size;
obj3.badgeIndicator = { top: 0, right: 0, backgroundColor: "transparent" };
let closure_13 = createStyles.createStyles(obj3);
let closure_14 = { code: "(function VoicePanelDockBadgedIconTsx1(finished){let[scheduleOnRN,cleanUp]=this.__closure;if(finished){scheduleOnRN(cleanUp);}})" };
let closure_16 = { code: "(function VoicePanelDockBadgedIconTsx2(){let[interpolate,progress,STREAM_BADGE_FADE_PORTION,Extrapolation,STREAM_BADGE_HIDDEN_SCALE]=this.__closure;return{opacity:interpolate(progress.get(),[1-STREAM_BADGE_FADE_PORTION,1],[0,1],Extrapolation.CLAMP),transform:[{scale:STREAM_BADGE_HIDDEN_SCALE+(1-STREAM_BADGE_HIDDEN_SCALE)*progress.get()}]};})" };
let closure_17 = { code: "(function VoicePanelDockBadgedIconTsx3(){let[progress,interpolate,STREAM_BADGE_FADE_PORTION,Extrapolation,STREAM_BADGE_HIDDEN_SCALE,CUTOUT_SIZE,CutoutShape,CUTOUT_CENTER_X,CUTOUT_CENTER_Y,CUTOUT_CORNER_RADIUS]=this.__closure;const arrival=progress.get();if(arrival===0){return{cutouts:[]};}const opacity=interpolate(arrival,[1-STREAM_BADGE_FADE_PORTION,1],[0,1],Extrapolation.CLAMP);const scale=(STREAM_BADGE_HIDDEN_SCALE+(1-STREAM_BADGE_HIDDEN_SCALE)*arrival)*opacity;const size=CUTOUT_SIZE*scale;return{cutouts:[{shape:CutoutShape.RoundedRect,x:CUTOUT_CENTER_X-size/2,y:CUTOUT_CENTER_Y-size/2,width:size,height:size,cornerRadius:CUTOUT_CORNER_RADIUS*scale}]};})" };
size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockBadgedIcon.tsx");

export default function VoicePanelDockBadgedIcon(children) {
  const streaming = children.streaming;
  _require = undefined;
  c1 = undefined;
  const tmp = closure_13();
  let num = 0;
  if (streaming) {
    num = 1;
  }
  const sharedValue = require("module_1652").useSharedValue(num);
  _require = sharedValue;
  let obj = require("module_1652");
  items = [closure_16, require("module_1652").interpolate, sharedValue, 0.7, require("module_1652").Extrapolation, 0.8];
  _require = undefined;
  c1 = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items;
  class VoicePanelDockBadgedIconTsx2 {
    constructor() {
      obj = { opacity: null, transform: null };
      items = [, ];
      items[0] = 1 - closure_2;
      items[1] = 1;
      obj.opacity = closure_0(closure_1.get(), items, [0, 1], closure_3.CLAMP);
      obj1 = { scale: null };
      diff = 1 - closure_4;
      obj1.scale = closure_4 + diff * closure_1.get();
      items1 = [];
      items1[0] = obj1;
      obj.transform = items1;
      return obj;
    }
  }
  let items1 = [tmp6, tmp7, tmp8, tmp9, tmp10];
  VoicePanelDockBadgedIconTsx2.__closure = items1;
  VoicePanelDockBadgedIconTsx2.__workletHash = 13214924592294;
  VoicePanelDockBadgedIconTsx2.__initData = tmp5;
  const animatedStyle = require("module_1652").useAnimatedStyle(VoicePanelDockBadgedIconTsx2);
  const tmp2Result = require("module_1652");
  const items2 = [closure_17, sharedValue, require("module_1652").interpolate, 0.7, require("module_1652").Extrapolation, 0.8, c8, require("ClipView").CutoutShape, closure_10, closure_11, c9];
  _require = undefined;
  c1 = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22] = items2;
  class VoicePanelDockBadgedIconTsx3 {
    constructor() {
      value = closure_0.get();
      if (0 === value) {
        obj = { cutouts: null };
        obj.cutouts = [];
        return obj;
      } else {
        tmp2 = closure_1;
        tmp3 = closure_2;
        num = 1;
        items = [, ];
        items[0] = 1 - closure_2;
        items[1] = 1;
        tmp4 = closure_3;
        tmp5 = value;
        tmp6 = items;
        tmp7 = closure_4;
        result = (closure_4 + (1 - closure_4) * value) * closure_1(value, items, [0, 1], closure_3.CLAMP);
        tmp9 = closure_5;
        result1 = closure_5 * result;
        obj1 = { cutouts: null };
        size = { shape: null, x: null, y: null, width: null, height: null, cornerRadius: null };
        tmp11 = closure_6;
        size.shape = closure_6.RoundedRect;
        tmp12 = closure_7;
        num2 = 2;
        result2 = result1 / 2;
        size.x = closure_7 - result2;
        tmp14 = closure_8;
        size.y = closure_8 - result2;
        size.width = result1;
        size.height = result1;
        tmp15 = closure_9;
        size.cornerRadius = closure_9 * result;
        items1 = [];
        items1[0] = size;
        obj1.cutouts = items1;
        return obj1;
      }
    }
  }
  const items3 = [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22];
  VoicePanelDockBadgedIconTsx3.__closure = items3;
  VoicePanelDockBadgedIconTsx3.__workletHash = 6139173483455;
  VoicePanelDockBadgedIconTsx3.__initData = tmp12;
  const items4 = [animatedStyle, sharedValue];
  const animatedProps = require("module_1652").useAnimatedProps(VoicePanelDockBadgedIconTsx3);
  const callback = noop.useCallback((id, arg1, state, cleanUp) => hasOwnProperty(StreamBadge, { progress, animatedBadgeStyle, state, cleanUp }, id), items4);
  const items5 = [c5(require("ClipView").ClipViewAnimated, { style: tmp.clip, animatedProps, children: children.children }), ];
  const obj3 = { children: null };
  items5[1] = c5(require("native").TransitionItem, { item: streaming, renderItem: callback });
  obj3.children = items5;
  return c7(c6, obj3);
};