// discord_app/modules/voice_panel/native/dock/VoicePanelDockSheet.tsx
import ColorUtils from "../../../../utils/ColorUtils.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import VoicePanelSheetMorph from "VoicePanelSheetMorph.tsx";
import VoicePanelDockDefault from "VoicePanelDock.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const StyleSheet = fn(17).StyleSheet;
const VoicePanelConstants = fn(11223);
const DEFAULT_BORDER_RADIUS = VoicePanelConstants.DEFAULT_BORDER_RADIUS;
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const VoicePanelDockConstants = fn(11241);
const DOCK_PRESS_EXTENSION = VoicePanelDockConstants.DOCK_PRESS_EXTENSION;
const DOCK_SETTLE_PROGRESS = VoicePanelDockConstants.DOCK_SETTLE_PROGRESS;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
function getDockSheetTransform(connected) {
  ({ progress, wrapperDimensions, dockHeight, dockJoinMorphOrigin } = connected);
  ({ drawerWidth, drawerHeight } = wrapperDimensions);
  if (connected.connected) {
    if (drawerWidth > 0) {
      if (drawerHeight > 0) {
        const size = { x: tmp4, y: tmp5, width: drawerWidth, height: drawerHeight };
        let tmp9 = size;
        const dockRect = VoicePanelSheetMorph.getDockRect(size, dockHeight);
        if (null != dockJoinMorphOrigin) {
          const obj = {};
          const merged = Object.assign(dockJoinMorphOrigin);
          obj.height = drawerHeight * (dockJoinMorphOrigin.width / drawerWidth);
          tmp9 = obj;
        }
        const result = VoicePanelSheetMorph.shrinkDockAroundCenter(progress, tmp9, dockRect);
        const tmp13Result = VoicePanelSheetMorph;
        const result1 = VoicePanelSheetMorph.scaleDockAroundCenter(result, drawerWidth, drawerHeight);
        const obj2 = {
          translateX: result1.translateX,
          translateY:
            result1.translateY +
            (1 - tmp + tmp2) * (dockHeight + (drawerHeight - dockHeight) * (1 - progress)) -
            tmp3 * DOCK_PRESS_EXTENSION,
          scale: result1.scale,
        };
        return obj2;
      }
    }
  }
  return null;
}
getDockSheetTransform.__closure = {
  getDockRect: fn(11249).getDockRect,
  shrinkDockAroundCenter: fn(11249).shrinkDockAroundCenter,
  scaleDockAroundCenter: fn(11249).scaleDockAroundCenter,
  DOCK_PRESS_EXTENSION,
};
getDockSheetTransform.__workletHash = 14978675113825;
getDockSheetTransform.__initData = {
  code: "function getDockSheetTransform_VoicePanelDockSheetTsx1({connected:connected,progress:progress,wrapperDimensions:wrapperDimensions,dockHeight:dockHeight,dockJoinMorphOrigin:dockJoinMorphOrigin,dockEntryProgress:dockEntryProgress,sheetExitProgress:sheetExitProgress,dockPressProgress:dockPressProgress}){const{getDockRect,shrinkDockAroundCenter,scaleDockAroundCenter,DOCK_PRESS_EXTENSION}=this.__closure;const{drawerWidth:drawerWidth,drawerHeight:drawerHeight,drawerX:drawerX,drawerY:drawerY}=wrapperDimensions;if(!connected&&progress<=0||drawerWidth<=0||drawerHeight<=0){return null;}const fullRect={x:drawerX,y:drawerY,width:drawerWidth,height:drawerHeight};const restRect=getDockRect(fullRect,dockHeight);const origin=dockJoinMorphOrigin!=null?{...dockJoinMorphOrigin,height:drawerHeight*(dockJoinMorphOrigin.width/drawerWidth)}:fullRect;const geometry=shrinkDockAroundCenter(progress,origin,restRect);const{translateX:translateX,translateY:translateY,scale:scale}=scaleDockAroundCenter(geometry,drawerWidth,drawerHeight);const onScreenHeight=dockHeight+(drawerHeight-dockHeight)*(1-progress);const offscreen=(1-dockEntryProgress+sheetExitProgress)*onScreenHeight;const pressExtension=dockPressProgress*DOCK_PRESS_EXTENSION;return{translateX:translateX,translateY:translateY+offscreen-pressExtension,scale:scale};}",
};
function getDockSheetShape(arg0) {
  ({ connected, dockJoinMorphOrigin, sheetMorphProgress, wrapperDimensions } = arg0);
  const width = height.drawerWidth;
  let num = 0;
  if (null != dockJoinMorphOrigin) {
    num = 0;
    if (dockJoinMorphOrigin.width > 0) {
      num = DEFAULT_BORDER_RADIUS * (width / dockJoinMorphOrigin.width);
    }
  }
  if (connected) {
    const obj = ReanimatedRexport;
    const items = [DEFAULT_BORDER_RADIUS, num];
    let borderTopLeftRadius = obj.interpolate(sheetMorphProgress, [0, 1], items, ReanimatedRexport.Extrapolation.CLAMP);
    let tmp2 = DEFAULT_BORDER_RADIUS;
  } else {
    tmp2 = DEFAULT_BORDER_RADIUS;
    borderTopLeftRadius = DEFAULT_BORDER_RADIUS;
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
let obj = {
  getDockRect: fn(11249).getDockRect,
  shrinkDockAroundCenter: fn(11249).shrinkDockAroundCenter,
  scaleDockAroundCenter: fn(11249).scaleDockAroundCenter,
  DOCK_PRESS_EXTENSION,
};
getDockSheetShape.__closure = {
  DEFAULT_BORDER_RADIUS,
  interpolate: fn(5095).interpolate,
  Extrapolation: fn(5095).Extrapolation,
};
getDockSheetShape.__workletHash = 17349446304938;
getDockSheetShape.__initData = {
  code: "function getDockSheetShape_VoicePanelDockSheetTsx2({connected:connected,dockJoinMorphOrigin:dockJoinMorphOrigin,sheetMorphProgress:sheetMorphProgress,wrapperDimensions:wrapperDimensions}){const{DEFAULT_BORDER_RADIUS,interpolate,Extrapolation}=this.__closure;const{drawerWidth:drawerWidth,drawerHeight:drawerHeight}=wrapperDimensions;const startRadius=dockJoinMorphOrigin!=null&&dockJoinMorphOrigin.width>0?DEFAULT_BORDER_RADIUS*(drawerWidth/dockJoinMorphOrigin.width):0;const topRadius=connected?interpolate(sheetMorphProgress,[0,1],[DEFAULT_BORDER_RADIUS,startRadius],Extrapolation.CLAMP):DEFAULT_BORDER_RADIUS;const bottomRadius=connected?0:DEFAULT_BORDER_RADIUS;return{width:drawerWidth,height:drawerHeight,borderTopLeftRadius:topRadius,borderTopRightRadius:topRadius,borderBottomLeftRadius:bottomRadius,borderBottomRightRadius:bottomRadius};}",
};
function getDockSheetSurfaceStyle(dockJoinMorphOrigin, dockSheetSurfaceFills) {
  ({ pressedFill, fullscreenFill, prejoinFill } = dockSheetSurfaceFills);
  let interpolateColorResult = prejoinFill;
  if (dockJoinMorphOrigin.connected) {
    let num = 0.03;
    if (!tmp4) {
      num = DOCK_SETTLE_PROGRESS;
    }
    const items = [0, num, 1];
    const obj = ReanimatedRexport;
    const items1 = [tmp, pressedFill];
    const items2 = [ReanimatedRexport.interpolateColor(tmp2, [0, 1], items1), pressedFill];
    if (tmp4) {
      fullscreenFill = prejoinFill;
    }
    items2[2] = fullscreenFill;
    interpolateColorResult = obj.interpolateColor(tmp3, items, items2);
    const tmp6Result = ReanimatedRexport;
  }
  if (typeof getDockSheetShape === "function") {
    ({ connected, dockJoinMorphOrigin, sheetMorphProgress, wrapperDimensions } = dockJoinMorphOrigin);
    const drawerWidth = wrapperDimensions.drawerWidth;
    let num4 = 0;
    if (null != dockJoinMorphOrigin) {
      num4 = 0;
      if (dockJoinMorphOrigin.width > 0) {
        num4 = DEFAULT_BORDER_RADIUS * (drawerWidth / dockJoinMorphOrigin.width);
      }
    }
    if (connected) {
      const obj3 = ReanimatedRexport;
      const items3 = [DEFAULT_BORDER_RADIUS, num4];
      let interpolateResult = obj3.interpolate(
        sheetMorphProgress,
        [0, 1],
        items3,
        ReanimatedRexport.Extrapolation.CLAMP,
      );
      let tmp9 = DEFAULT_BORDER_RADIUS;
    } else {
      tmp9 = DEFAULT_BORDER_RADIUS;
      interpolateResult = DEFAULT_BORDER_RADIUS;
    }
    let num5 = 0;
    if (!connected) {
      num5 = tmp9;
    }
    const obj2 = {};
    const size = {
      width: drawerWidth,
      height: wrapperDimensions.drawerHeight,
      borderTopLeftRadius: interpolateResult,
      borderTopRightRadius: interpolateResult,
      borderBottomLeftRadius: num5,
      borderBottomRightRadius: num5,
    };
    const merged = Object.assign(size);
    obj2.backgroundColor = interpolateColorResult;
    let str = "auto";
    if (dockJoinMorphOrigin.mode === VoicePanelModes.DISMISSED) {
      str = "none";
    }
    obj2.pointerEvents = str;
    return obj2;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
let obj2 = { DEFAULT_BORDER_RADIUS, interpolate: fn(5095).interpolate, Extrapolation: fn(5095).Extrapolation };
getDockSheetSurfaceStyle.__closure = {
  interpolateColor: fn(5095).interpolateColor,
  JOIN_SETTLE_PROGRESS: 0.03,
  DOCK_SETTLE_PROGRESS,
  getDockSheetShape,
  VoicePanelModes,
};
getDockSheetSurfaceStyle.__workletHash = 3422786939285;
getDockSheetSurfaceStyle.__initData = {
  code: "function getDockSheetSurfaceStyle_VoicePanelDockSheetTsx3(inputs,{pressedFill:pressedFill,restingFill:restingFill,fullscreenFill:fullscreenFill,prejoinFill:prejoinFill}){const{interpolateColor,JOIN_SETTLE_PROGRESS,DOCK_SETTLE_PROGRESS,getDockSheetShape,VoicePanelModes}=this.__closure;const{connected:connected,dockPressProgress:dockPressProgress,dockJoinMorphOrigin:dockJoinMorphOrigin,mode:mode,sheetMorphProgress:sheetMorphProgress}=inputs;const joining=dockJoinMorphOrigin!=null;const fill=connected?interpolateColor(sheetMorphProgress,[0,joining?JOIN_SETTLE_PROGRESS:DOCK_SETTLE_PROGRESS,1],[interpolateColor(dockPressProgress,[0,1],[restingFill,pressedFill]),pressedFill,joining?prejoinFill:fullscreenFill]):prejoinFill;return{...getDockSheetShape(inputs),backgroundColor:fill,pointerEvents:mode===VoicePanelModes.DISMISSED?'none':'auto'};}",
};
function getDockSheetShadowOpacity(value, arg1) {
  const items = [0, DOCK_SETTLE_PROGRESS];
  return Math.max(value, ReanimatedRexport.interpolate(arg1, items, [0, 1], ReanimatedRexport.Extrapolation.CLAMP));
}
let obj3 = {
  interpolateColor: fn(5095).interpolateColor,
  JOIN_SETTLE_PROGRESS: 0.03,
  DOCK_SETTLE_PROGRESS,
  getDockSheetShape,
  VoicePanelModes,
};
getDockSheetShadowOpacity.__closure = {
  interpolate: fn(5095).interpolate,
  DOCK_SETTLE_PROGRESS,
  Extrapolation: fn(5095).Extrapolation,
};
getDockSheetShadowOpacity.__workletHash = 8648908038104;
getDockSheetShadowOpacity.__initData = {
  code: "function getDockSheetShadowOpacity_VoicePanelDockSheetTsx4(dockPressProgress,sheetMorphProgress){const{interpolate,DOCK_SETTLE_PROGRESS,Extrapolation}=this.__closure;return Math.max(dockPressProgress,interpolate(sheetMorphProgress,[0,DOCK_SETTLE_PROGRESS],[0,1],Extrapolation.CLAMP));}",
};
const __initData = {
  code: "function VoicePanelDockSheetTsx5(){const{dockMinimizeProgress,wrapperDimensions,dockJoinMorphOrigin,isDockConnected,mode,VoicePanelModes,SHEET_MORPH_JOINING_PANEL_FADE,isDockExpanding,SHEET_MORPH_EXPANDING_PANEL_FADE,SHEET_MORPH_DOCKING_PANEL_FADE,dockContentSwap,getSheetMorphFadeProgress,isDockRowTouchable}=this.__closure;const progress=1-dockMinimizeProgress.get();const{drawerHeight:drawerHeight}=wrapperDimensions.get();const isJoining=dockJoinMorphOrigin.get()!=null;if(!isDockConnected.get()||drawerHeight<=0){const isShowingContent=mode.get()!==VoicePanelModes.PIP||isJoining;return{opacity:isShowingContent?1:0,pointerEvents:'box-none'};}const fade=isJoining?SHEET_MORPH_JOINING_PANEL_FADE:isDockExpanding.get()?SHEET_MORPH_EXPANDING_PANEL_FADE:SHEET_MORPH_DOCKING_PANEL_FADE;return{opacity:Math.max(dockContentSwap.get(),getSheetMorphFadeProgress(progress,fade.start,fade.end)),pointerEvents:isDockRowTouchable(progress)?'none':'box-none'};}",
};
let closure_14 = noop.memo(function SheetFullscreenContent(children) {
  let isDockConnected;
  let isDockExpanding;
  let dockJoinMorphOrigin;
  const context = dockJoinMorphOrigin.useContext(isDockConnected(isDockExpanding[10]));
  const dockContentSwap = context.dockContentSwap;
  isDockConnected = context.isDockConnected;
  isDockExpanding = context.isDockExpanding;
  dockJoinMorphOrigin = context.dockJoinMorphOrigin;
  const mode = context.mode;
  const dockMinimizeProgress = context.dockMinimizeProgress;
  const wrapperDimensions = context.wrapperDimensions;
  const fn = function s() {
    const diff = 1 - dockMinimizeProgress.get();
    if (isDockConnected.get()) {
      if (wrapperDimensions.get().drawerHeight > 0) {
        if (tmp2) {
          let SHEET_MORPH_JOINING_PANEL_FADE = VoicePanelSheetMorph.SHEET_MORPH_JOINING_PANEL_FADE;
        } else {
          value = isDockExpanding.get();
          const tmp7 = VoicePanelSheetMorph;
          SHEET_MORPH_JOINING_PANEL_FADE = value
            ? tmp7.SHEET_MORPH_EXPANDING_PANEL_FADE
            : tmp7.SHEET_MORPH_DOCKING_PANEL_FADE;
        }
        const obj = { opacity: null, pointerEvents: null };
        const _Math = Math;
        value2 = dockContentSwap.get();
        obj.opacity = Math.max(
          value2,
          VoicePanelSheetMorph.getSheetMorphFadeProgress(
            diff,
            SHEET_MORPH_JOINING_PANEL_FADE.start,
            SHEET_MORPH_JOINING_PANEL_FADE.end,
          ),
        );
        let str = "box-none";
        if (obj3.isDockRowTouchable(diff)) {
          str = "none";
        }
        obj.pointerEvents = str;
        return obj;
      }
    }
    if (mode.get() !== VoicePanelModes.PIP) {
      let opacity = 1;
    } else {
      opacity = 0;
    }
    return { opacity, pointerEvents: "box-none" };
  };
  let obj = dockContentSwap(isDockExpanding[9]);
  fn.__closure = {
    dockMinimizeProgress,
    wrapperDimensions,
    dockJoinMorphOrigin,
    isDockConnected,
    mode,
    VoicePanelModes: wrapperDimensions,
    SHEET_MORPH_JOINING_PANEL_FADE: dockContentSwap(isDockExpanding[5]).SHEET_MORPH_JOINING_PANEL_FADE,
    isDockExpanding,
    SHEET_MORPH_EXPANDING_PANEL_FADE: dockContentSwap(isDockExpanding[5]).SHEET_MORPH_EXPANDING_PANEL_FADE,
    SHEET_MORPH_DOCKING_PANEL_FADE: dockContentSwap(isDockExpanding[5]).SHEET_MORPH_DOCKING_PANEL_FADE,
    dockContentSwap,
    getSheetMorphFadeProgress: dockContentSwap(isDockExpanding[5]).getSheetMorphFadeProgress,
    isDockRowTouchable: dockContentSwap(isDockExpanding[5]).isDockRowTouchable,
  };
  fn.__workletHash = 16462503192915;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { style: null, children: children.children };
  const items = [mode.absoluteFill, animatedStyle];
  obj3.style = items;
  return closure_9(isDockConnected(isDockExpanding[11]), obj3);
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockSheet.tsx");

export { getDockSheetTransform };
export function useDockSheetSurfaceFills() {
  token = token(token2[6]).useToken(token1(token2[7]).colors.BACKGROUND_BASE_LOW);
  let obj = token(token2[6]);
  token1 = token(token2[6]).useToken(token1(token2[7]).colors.MOBILE_VOICE_PANEL_BACKGROUND);
  const obj2 = token(token2[6]);
  token2 = token(token2[6]).useToken(token1(token2[7]).colors.BACKGROUND_BASE_LOWER);
  const items = [token1, token2, token];
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
  const items = [React7(closure_14, { children: children.children }), React7(VoicePanelDockDefault, {})];
  obj.children = items;
  return closure_1_11(closure_1_10, obj);
}
