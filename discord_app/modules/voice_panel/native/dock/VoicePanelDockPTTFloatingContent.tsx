// discord_app/modules/voice_panel/native/dock/VoicePanelDockPTTFloatingContent.tsx
import native from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import shared from "../../../../design/shared.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import VisualEffectViewDefault from "../../../visual_effect_view/native/VisualEffectView.tsx";
import MicrophoneIcon from "../../../../design/components/Icon/native/redesign/generated/MicrophoneIcon.tsx";
import useDockBoxShadowDefault from "useDockBoxShadow.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const nativeDefault = native;
const _modDef1652 = _mod1652;

require = fn;
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
const View = get_ActivityIndicator.View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
let closure_7 = 66 + nativeDefault.space.PX_16;
let closure_8 = fn(11942).DOCK_TILE_SIZE / 56;
const createStyles = fn(5243);
let obj2 = {
  host: { position: "absolute", top: 0, left: 0, width: 0, height: 0, overflow: "visible" },
  indicator: null,
  indicatorFill: null,
  tile: null,
};
let size = { position: "absolute", width: 76, height: 76, borderRadius: nativeDefault.radii.round, overflow: "hidden" };
obj2.indicator = size;
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.borderRadius = nativeDefault.radii.round;
obj3.borderWidth = 1;
obj3.borderColor = nativeDefault.colors.BORDER_STRONG;
obj3.backgroundColor = nativeDefault.colors.BACKGROUND_MOD_STRONG;
obj2.indicatorFill = obj3;
const size1 = {
  position: "absolute",
  width: 56,
  height: 56,
  borderRadius: nativeDefault.radii.lg,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT,
};
obj2.tile = size1;
let closure_9 = createStyles.createStyles(obj2);
let closure_10 = {
  code: "(function VoicePanelDockPTTFloatingContentTsx1(){let[anchor,progress,DOCK_PTT_INDICATOR_SIZE,interpolate,Extrapolation,dragX,dragY,INDICATOR_RESTING_SCALE]=this.__closure;const frame=anchor.get();if(frame==null){return{opacity:0};}const value=progress.get();return{left:frame.x+frame.width/2-DOCK_PTT_INDICATOR_SIZE/2,top:frame.y+frame.height/2-DOCK_PTT_INDICATOR_SIZE/2,opacity:interpolate(value,[0,0.4],[0,1],Extrapolation.CLAMP),transform:[{translateX:dragX.get()},{translateY:dragY.get()},{scale:interpolate(value,[0,1],[INDICATOR_RESTING_SCALE,1],Extrapolation.CLAMP)}]};})",
};
let closure_11 = {
  code: "(function VoicePanelDockPTTFloatingContentTsx2(){let[anchor,progress,DOCK_PTT_TILE_SIZE,interpolate,Extrapolation,dragX,DOCK_PTT_TILE_LIFT,dragY,TILE_RESTING_SCALE]=this.__closure;const frame=anchor.get();if(frame==null){return{opacity:0};}const value=progress.get();return{left:frame.x+frame.width/2-DOCK_PTT_TILE_SIZE/2,top:frame.y+frame.height/2-DOCK_PTT_TILE_SIZE/2,opacity:interpolate(value,[0,0.25],[0,1],Extrapolation.CLAMP),transform:[{translateX:dragX.get()},{translateY:interpolate(value,[0,1],[0,-DOCK_PTT_TILE_LIFT],Extrapolation.EXTEND)+dragY.get()},{scale:Math.max(interpolate(value,[0,1],[TILE_RESTING_SCALE,1]),TILE_RESTING_SCALE)}]};})",
};
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockPTTFloatingContent.tsx");

export default function VoicePanelDockPTTFloatingContent(arg0) {
  ({ progress, anchor, dragX, dragY } = arg0);
  const tmp = closure_9();
  const tmp4Result = useDockBoxShadowDefault(native.Shadow.SHADOW_HIGH);
  const tmp7 = useThemeDefault();
  items = [closure_10, anchor, progress, 76, _mod1652.interpolate, _mod1652.Extrapolation, dragX, dragY, 0.5];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items;
  class VoicePanelDockPTTFloatingContentTsx1 {
    constructor() {
      size = closure_0.get();
      if (null == size) {
        return { opacity: 0 };
      } else {
        tmp = closure_1;
        value = closure_1.get();
        rect = { left: null, top: null, opacity: null, transform: null };
        num = 2;
        tmp3 = closure_2;
        rect.left = size.x + size.width / 2 - closure_2 / 2;
        rect.top = size.y + size.height / 2 - closure_2 / 2;
        tmp4 = closure_3;
        tmp5 = closure_4;
        tmp6 = value;
        rect.opacity = closure_3(value, [0, 0.4], [0, 1], closure_4.CLAMP);
        obj1 = { translateX: null };
        tmp7 = closure_5;
        obj1.translateX = closure_5.get();
        items = [, ,];
        items[0] = obj1;
        obj5 = { translateY: null };
        tmp8 = closure_6;
        obj5.translateY = closure_6.get();
        items[1] = obj5;
        obj6 = { scale: null };
        tmp9 = closure_7;
        items1 = [,];
        items1[0] = closure_7;
        num2 = 1;
        items1[1] = 1;
        tmp10 = value;
        tmp11 = items1;
        obj6.scale = closure_3(value, [0, 1], items1, closure_4.CLAMP);
        items[2] = obj6;
        rect.transform = items;
        return rect;
      }
    }
  }
  let items1 = [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
  VoicePanelDockPTTFloatingContentTsx1.__closure = items1;
  VoicePanelDockPTTFloatingContentTsx1.__workletHash = 477439147398;
  VoicePanelDockPTTFloatingContentTsx1.__initData = tmp8;
  const animatedStyle = _mod1652.useAnimatedStyle(VoicePanelDockPTTFloatingContentTsx1);
  let items2 = [
    closure_11,
    anchor,
    progress,
    56,
    _mod1652.interpolate,
    _mod1652.Extrapolation,
    dragX,
    _undefined7,
    dragY,
    closure_8,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27] = items2;
  class VoicePanelDockPTTFloatingContentTsx2 {
    constructor() {
      size = closure_0.get();
      if (null == size) {
        return { opacity: 0 };
      } else {
        tmp = closure_1;
        value = closure_1.get();
        rect = { left: null, top: null, opacity: null, transform: null };
        num = 2;
        tmp3 = closure_2;
        rect.left = size.x + size.width / 2 - closure_2 / 2;
        rect.top = size.y + size.height / 2 - closure_2 / 2;
        tmp4 = closure_3;
        tmp5 = closure_4;
        tmp6 = value;
        rect.opacity = closure_3(value, [0, 0.25], [0, 1], closure_4.CLAMP);
        obj1 = { translateX: null };
        tmp7 = closure_5;
        obj1.translateX = closure_5.get();
        items = [, ,];
        items[0] = obj1;
        obj5 = { translateY: null };
        tmp8 = closure_6;
        items1 = [0];
        items1[1] = -closure_6;
        tmp9 = value;
        tmp10 = items1;
        tmp12 = closure_7;
        tmp11 = closure_3(value, [0, 1], items1, closure_4.EXTEND);
        obj5.translateY = tmp11 + closure_7.get();
        items[1] = obj5;
        obj6 = { scale: null };
        tmp13 = globalThis;
        _Math = Math;
        tmp14 = closure_8;
        items2 = [,];
        items2[0] = closure_8;
        num2 = 1;
        items2[1] = 1;
        obj6.scale = Math.max(closure_3(value, [0, 1], items2), closure_8);
        items[2] = obj6;
        rect.transform = items;
        return rect;
      }
    }
  }
  const items3 = [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27];
  VoicePanelDockPTTFloatingContentTsx2.__closure = items3;
  VoicePanelDockPTTFloatingContentTsx2.__workletHash = 6388817195515;
  VoicePanelDockPTTFloatingContentTsx2.__initData = tmp18;
  let obj2 = {
    style: tmp.host,
    pointerEvents: "none",
    importantForAccessibility: "no-hide-descendants",
    accessibilityElementsHidden: true,
    children: null,
  };
  const animatedStyle1 = _mod1652.useAnimatedStyle(VoicePanelDockPTTFloatingContentTsx2);
  let obj3 = { style: null, children: null };
  const items4 = [tmp.indicator, animatedStyle];
  obj3.style = items4;
  const tmp5Result = _mod1652;
  const tmp2Result = VisualEffectViewDefault;
  let str = "light";
  if (tmp5Result2.isThemeDark(tmp7)) {
    str = "dark";
  }
  const items5 = [
    hasOwnProperty(tmp2Result, {
      blurTheme: str,
      blurStyle: "ultra-thin",
      blurAmount: 0.16666666666666666,
      android_fallbackColor: "transparent",
      style: StyleSheet.absoluteFill,
    }),
    hasOwnProperty(View, { style: tmp.indicatorFill }),
  ];
  obj3.children = items5;
  const items6 = [timestampProducer(_modDef1652.View, obj3)];
  const obj6 = { style: null, children: null };
  const items7 = [tmp.tile, { boxShadow: tmp4Result }, animatedStyle1];
  obj6.style = items7;
  const obj4 = {
    blurTheme: str,
    blurStyle: "ultra-thin",
    blurAmount: 0.16666666666666666,
    android_fallbackColor: "transparent",
    style: StyleSheet.absoluteFill,
  };
  const obj5 = { style: tmp.indicatorFill };
  tmp5Result2 = shared;
  obj6.children = hasOwnProperty(MicrophoneIcon.MicrophoneIcon, {
    size: "md",
    color: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT,
  });
  items6[1] = hasOwnProperty(_modDef1652.View, obj6);
  obj2.children = items6;
  return timestampProducer(View, obj2);
}
