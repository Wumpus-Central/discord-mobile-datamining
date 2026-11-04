// discord_app/modules/voice_panel/native/dock/VoicePanelDockSheet.tsx
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import ColorUtils from "../../../../utils/ColorUtils.tsx";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import VoicePanelSheetMorph from "VoicePanelSheetMorph.tsx";
import VoicePanelDockDefault from "VoicePanelDock.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const _modDef1652 = _mod1652;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const VoicePanelConstants = fn(11411);
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const VoicePanelDockConstants = fn(11429);
({ DOCK_SETTLE_PROGRESS, DOCK_PRESS_EXTENSION } = VoicePanelDockConstants);
const jsxProd = fn(21);
({ jsx: closure_6, Fragment: metroImportDefault, jsxs: closure_8 } = jsxProd);
let items = [
  {
    code: "(function getDockSheetTransform_VoicePanelDockSheetTsx1({connected:connected,progress:progress,wrapperDimensions:wrapperDimensions,dockHeight:dockHeight,dockJoinMorphOrigin:dockJoinMorphOrigin,dockEntryProgress:dockEntryProgress,sheetExitProgress:sheetExitProgress,dockPressProgress:dockPressProgress}){let[getDockRect,shrinkDockAroundCenter,scaleDockAroundCenter,DOCK_PRESS_EXTENSION]=this.__closure;const{drawerWidth:drawerWidth,drawerHeight:drawerHeight,drawerX:drawerX,drawerY:drawerY}=wrapperDimensions;if(!connected&&progress<=0||drawerWidth<=0||drawerHeight<=0){return null;}const fullRect={x:drawerX,y:drawerY,width:drawerWidth,height:drawerHeight};const restRect=getDockRect(fullRect,dockHeight);const origin=dockJoinMorphOrigin!=null?{...dockJoinMorphOrigin,height:drawerHeight*(dockJoinMorphOrigin.width/drawerWidth)}:fullRect;const geometry=shrinkDockAroundCenter(progress,origin,restRect);const{translateX:translateX,translateY:translateY,scale:scale}=scaleDockAroundCenter(geometry,drawerWidth,drawerHeight);const onScreenHeight=dockHeight+(drawerHeight-dockHeight)*(1-progress);const offscreen=(1-dockEntryProgress+sheetExitProgress)*onScreenHeight;const pressExtension=dockPressProgress*DOCK_PRESS_EXTENSION;return{translateX:translateX,translateY:translateY+offscreen-pressExtension,scale:scale};})",
  },
  fn(11437).getDockRect,
  fn(11437).shrinkDockAroundCenter,
  fn(11437).scaleDockAroundCenter,
  DOCK_PRESS_EXTENSION,
];
let closure_129_0;
let closure_129_1;
let closure_129_2;
let closure_129_3;
[tmp5, tmp6, tmp7, tmp8, tmp9] = items;
function getDockSheetTransform(connected) {
  ({ progress, wrapperDimensions, dockHeight, dockJoinMorphOrigin } = connected);
  ({ drawerWidth, drawerHeight } = wrapperDimensions);
  if (connected.connected) {
    if (drawerWidth > 0) {
      if (drawerHeight > 0) {
        const size = { x: tmp4, y: tmp5, width: drawerWidth, height: drawerHeight };
        let tmp9 = size;
        if (null != dockJoinMorphOrigin) {
          const obj = {};
          const merged = Object.assign(dockJoinMorphOrigin);
          obj.height = drawerHeight * (dockJoinMorphOrigin.width / drawerWidth);
          tmp9 = obj;
        }
        const tmp12 = dependencyMap(
          importDefault(progress, tmp9, require(size, dockHeight)),
          drawerWidth,
          drawerHeight,
        );
        const obj2 = {
          translateX: tmp12.translateX,
          translateY:
            tmp12.translateY +
            (1 - tmp + tmp2) * (dockHeight + (drawerHeight - dockHeight) * (1 - progress)) -
            tmp3 * noop,
          scale: tmp12.scale,
        };
        return obj2;
      }
    }
  }
  return null;
}
let items1 = [tmp6, tmp7, tmp8, tmp9];
getDockSheetTransform.__closure = items1;
getDockSheetTransform.__workletHash = 685261852504;
getDockSheetTransform.__initData = tmp5;
let items2 = [
  {
    code: "(function getDockSheetShape_VoicePanelDockSheetTsx2({connected:connected,dockJoinMorphOrigin:dockJoinMorphOrigin,sheetMorphProgress:sheetMorphProgress,wrapperDimensions:wrapperDimensions}){let[DEFAULT_BORDER_RADIUS,interpolate,Extrapolation]=this.__closure;const{drawerWidth:drawerWidth,drawerHeight:drawerHeight}=wrapperDimensions;const startRadius=dockJoinMorphOrigin!=null&&dockJoinMorphOrigin.width>0?DEFAULT_BORDER_RADIUS*(drawerWidth/dockJoinMorphOrigin.width):0;const topRadius=connected?interpolate(sheetMorphProgress,[0,1],[DEFAULT_BORDER_RADIUS,startRadius],Extrapolation.CLAMP):DEFAULT_BORDER_RADIUS;const bottomRadius=connected?0:DEFAULT_BORDER_RADIUS;return{width:drawerWidth,height:drawerHeight,borderTopLeftRadius:topRadius,borderTopRightRadius:topRadius,borderBottomLeftRadius:bottomRadius,borderBottomRightRadius:bottomRadius};})",
  },
  VoicePanelConstants.DEFAULT_BORDER_RADIUS,
  fn(1652).interpolate,
  fn(1652).Extrapolation,
];
let closure_130_0;
let closure_130_1;
let closure_130_2;
[tmp10, tmp11, tmp12, tmp13] = items2;
function getDockSheetShape(arg0) {
  ({ connected, dockJoinMorphOrigin, sheetMorphProgress, wrapperDimensions } = arg0);
  const width = height.drawerWidth;
  let num = 0;
  if (null != dockJoinMorphOrigin) {
    num = 0;
    if (dockJoinMorphOrigin.width > 0) {
      num = require * (width / dockJoinMorphOrigin.width);
    }
  }
  if (connected) {
    items = [require, num];
    let borderTopLeftRadius = importDefault(sheetMorphProgress, [0, 1], items, dependencyMap.CLAMP);
    let tmp2 = require;
  } else {
    tmp2 = require;
    borderTopLeftRadius = require;
  }
  let borderBottomLeftRadius = 0;
  if (!connected) {
    borderBottomLeftRadius = tmp2;
  }
  return {
    width,
    height: height.drawerHeight,
    borderTopLeftRadius,
    borderTopRightRadius: borderTopLeftRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius: borderBottomLeftRadius,
  };
}
const items3 = [tmp11, tmp12, tmp13];
getDockSheetShape.__closure = items3;
getDockSheetShape.__workletHash = 16412823313747;
getDockSheetShape.__initData = tmp10;
const items4 = [
  {
    code: "(function getDockSheetSurfaceStyle_VoicePanelDockSheetTsx3(inputs,{pressedFill:pressedFill,restingFill:restingFill,fullscreenFill:fullscreenFill,prejoinFill:prejoinFill}){let[interpolateColor,JOIN_SETTLE_PROGRESS,DOCK_SETTLE_PROGRESS,getDockSheetShape,VoicePanelModes]=this.__closure;const{connected:connected,dockPressProgress:dockPressProgress,dockJoinMorphOrigin:dockJoinMorphOrigin,mode:mode,sheetMorphProgress:sheetMorphProgress}=inputs;const joining=dockJoinMorphOrigin!=null;const fill=connected?interpolateColor(sheetMorphProgress,[0,joining?JOIN_SETTLE_PROGRESS:DOCK_SETTLE_PROGRESS,1],[interpolateColor(dockPressProgress,[0,1],[restingFill,pressedFill]),pressedFill,joining?prejoinFill:fullscreenFill]):prejoinFill;return{...getDockSheetShape(inputs),backgroundColor:fill,pointerEvents:mode===VoicePanelModes.DISMISSED?'none':'auto'};})",
  },
  fn(1652).interpolateColor,
  0.03,
  DOCK_SETTLE_PROGRESS,
  getDockSheetShape,
  VoicePanelModes,
];
let closure_131_0;
let closure_131_1;
let closure_131_2;
let closure_131_3;
let closure_131_4;
[tmp14, tmp15, tmp16, tmp17, tmp18, tmp19] = items4;
function getDockSheetSurfaceStyle(dockJoinMorphOrigin, arg1) {
  ({ pressedFill, fullscreenFill, prejoinFill } = arg1);
  let tmp6Result = prejoinFill;
  if (dockJoinMorphOrigin.connected) {
    items = [0, tmp4 ? importDefault : dependencyMap, 1];
    const items1 = [tmp, pressedFill];
    const items2 = [require(tmp2, [0, 1], items1), pressedFill];
    if (tmp4) {
      fullscreenFill = prejoinFill;
    }
    items2[2] = fullscreenFill;
    tmp6Result = require(tmp3, items, items2);
  }
  const obj = {};
  const merged = Object.assign(noop(dockJoinMorphOrigin));
  obj.backgroundColor = tmp6Result;
  let str = "auto";
  if (dockJoinMorphOrigin.mode === StyleSheet.DISMISSED) {
    str = "none";
  }
  obj.pointerEvents = str;
  return obj;
}
const items5 = [tmp15, tmp16, tmp17, tmp18, tmp19];
getDockSheetSurfaceStyle.__closure = items5;
getDockSheetSurfaceStyle.__workletHash = 735853986892;
getDockSheetSurfaceStyle.__initData = tmp14;
const items6 = [
  {
    code: "(function getDockSheetShadowOpacity_VoicePanelDockSheetTsx4(dockPressProgress,sheetMorphProgress){let[interpolate,DOCK_SETTLE_PROGRESS,Extrapolation]=this.__closure;return Math.max(dockPressProgress,interpolate(sheetMorphProgress,[0,DOCK_SETTLE_PROGRESS],[0,1],Extrapolation.CLAMP));})",
  },
  fn(1652).interpolate,
  DOCK_SETTLE_PROGRESS,
  fn(1652).Extrapolation,
];
let closure_132_0;
let closure_132_1;
let closure_132_2;
[tmp20, tmp21, tmp22, tmp23] = items6;
function getDockSheetShadowOpacity(arg0, arg1) {
  items = [0, importDefault];
  return Math.max(arg0, require(arg1, items, [0, 1], dependencyMap.CLAMP));
}
const items7 = [tmp21, tmp22, tmp23];
getDockSheetShadowOpacity.__closure = items7;
getDockSheetShadowOpacity.__workletHash = 12557842886465;
getDockSheetShadowOpacity.__initData = tmp20;
let closure_9 = {
  code: "(function VoicePanelDockSheetTsx5(){let[dockMinimizeProgress,wrapperDimensions,dockJoinMorphOrigin,isDockConnected,mode,VoicePanelModes,SHEET_MORPH_JOINING_PANEL_FADE,isDockExpanding,SHEET_MORPH_EXPANDING_PANEL_FADE,SHEET_MORPH_DOCKING_PANEL_FADE,dockContentSwap,getSheetMorphFadeProgress,isDockRowTouchable]=this.__closure;const progress=1-dockMinimizeProgress.get();const{drawerHeight:drawerHeight}=wrapperDimensions.get();const isJoining=dockJoinMorphOrigin.get()!=null;if(!isDockConnected.get()||drawerHeight<=0){const isShowingContent=mode.get()!==VoicePanelModes.PIP||isJoining;return{opacity:isShowingContent?1:0,pointerEvents:'box-none'};}const fade=isJoining?SHEET_MORPH_JOINING_PANEL_FADE:isDockExpanding.get()?SHEET_MORPH_EXPANDING_PANEL_FADE:SHEET_MORPH_DOCKING_PANEL_FADE;return{opacity:Math.max(dockContentSwap.get(),getSheetMorphFadeProgress(progress,fade.start,fade.end)),pointerEvents:isDockRowTouchable(progress)?'none':'box-none'};})",
};
let closure_10 = noop.memo(function SheetFullscreenContent(children) {
  const context = noop.useContext(VoicePanelStateContextDefault);
  ({
    dockContentSwap,
    isDockConnected,
    isDockExpanding,
    dockJoinMorphOrigin,
    mode,
    dockMinimizeProgress,
    wrapperDimensions,
  } = context);
  items = [
    closure_9,
    dockMinimizeProgress,
    wrapperDimensions,
    dockJoinMorphOrigin,
    isDockConnected,
    mode,
    VoicePanelModes,
    VoicePanelSheetMorph.SHEET_MORPH_JOINING_PANEL_FADE,
    isDockExpanding,
    VoicePanelSheetMorph.SHEET_MORPH_EXPANDING_PANEL_FADE,
    VoicePanelSheetMorph.SHEET_MORPH_DOCKING_PANEL_FADE,
    dockContentSwap,
    VoicePanelSheetMorph.getSheetMorphFadeProgress,
    VoicePanelSheetMorph.isDockRowTouchable,
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
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items;
  class VoicePanelDockSheetTsx5 {
    constructor() {
      diff = 1 - closure_0.get();
      tmp2 = null != closure_2.get();
      if (closure_3.get()) {
        num = 0;
        if (closure_1.get().drawerHeight > 0) {
          if (tmp2) {
            tmp4 = closure_6;
          } else {
            tmp3 = closure_7;
            tmp4 = closure_7.get() ? closure_8 : closure_9;
          }
          obj = { opacity: null, pointerEvents: null };
          tmp5 = globalThis;
          _Math = Math;
          tmp6 = closure_10;
          tmp8 = closure_11;
          value = closure_10.get();
          obj.opacity = Math.max(value, closure_11(diff, tmp4.start, tmp4.end));
          tmp9 = closure_12;
          str = "box-none";
          if (closure_12(diff)) {
            str = "none";
          }
          obj.pointerEvents = str;
          return obj;
        }
      }
      if (closure_4.get() !== closure_5.PIP) {
        opacity = 1;
      } else {
        opacity = 0;
      }
      return { opacity, pointerEvents: "box-none" };
    }
  }
  const items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17];
  VoicePanelDockSheetTsx5.__closure = items1;
  VoicePanelDockSheetTsx5.__workletHash = 14755707317578;
  VoicePanelDockSheetTsx5.__initData = tmp4;
  const animatedStyle = _mod1652.useAnimatedStyle(VoicePanelDockSheetTsx5);
  const obj2 = { style: null, children: children.children };
  const items2 = [StyleSheet.absoluteFill, animatedStyle];
  obj2.style = items2;
  return timestampProducer(_modDef1652.View, obj2);
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockSheet.tsx");

export { getDockSheetTransform };
export function useDockSheetSurfaceFills() {
  token = token(token2[6]).useToken(token1(token2[7]).colors.BACKGROUND_BASE_LOW);
  let obj = token(token2[6]);
  token1 = token(token2[6]).useToken(token1(token2[7]).colors.MOBILE_VOICE_PANEL_BACKGROUND);
  const obj2 = token(token2[6]);
  token2 = token(token2[6]).useToken(token1(token2[7]).colors.BACKGROUND_BASE_LOWER);
  items = [token1, token2, token];
  return noop.useMemo(() => {
    const obj = {
      pressedFill: token,
      restingFill: ColorUtils.hexWithOpacity(token, 0),
      fullscreenFill: token1,
      prejoinFill: token2,
    };
    return obj;
  }, items);
}
export { getDockSheetShape };
export { getDockSheetSurfaceStyle };
export { getDockSheetShadowOpacity };
export function VoicePanelContentWithDock(children) {
  const obj = { children: null };
  items = [
    timestampProducer(closure_10, { children: children.children }),
    timestampProducer(VoicePanelDockDefault, {}),
  ];
  obj.children = items;
  return React5(metroImportDefault, obj);
}
