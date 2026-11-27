// === Module 19478: VoicePanelDockSheetLayers ===

// Module 19478 (VoicePanelDockSheetLayers)
import native from "native" /* 575 */;
import _mod1654 from "module_1654" /* 1654 */;
import Portal from "Portal" /* 5235 */;
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 8620 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11789 */;
import useDockBoxShadowDefault from "useDockBoxShadow" /* 18229 */;
import voicePanelLayoutTransitionDefault from "voicePanelLayoutTransition" /* 19479 */;
import noop from "module_19" /* 19 */;

const _modDef1654 = _mod1654;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const VoicePanelDockSlotStore = fn(13419);
({ VoicePanelDockHiddenContext: hasOwnProperty, useShareVoicePanelDockState: closure_6 } = VoicePanelDockSlotStore);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5043);
let obj2 = { dockSheetLayers: null, dockSurfaceClip: null, dockSurfaceShadow: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.alignItems = "flex-start";
obj2.dockSheetLayers = obj3;
obj2.dockSurfaceClip = { overflow: "hidden" };
obj2.dockSurfaceShadow = { position: "absolute", top: 0, left: 0 };
let closure_10 = createStyles.createStyles(obj2);
let closure_11 = { code: "(function VoicePanelDockSheetLayersTsx1(){let[wrapperDimensions,dockSheetLeft]=this.__closure;const{drawerWidth:drawerWidth,drawerHeight:drawerHeight}=wrapperDimensions.get();return{width:drawerWidth,height:drawerHeight,transform:[{translateX:-dockSheetLeft.get()}]};})" };
let closure_12 = { code: "(function VoicePanelDockSheetLayersTsx2(){let[isDockInLayout]=this.__closure;return{opacity:isDockInLayout.get()?0:1,pointerEvents:isDockInLayout.get()?'none':'box-none'};})" };
let size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockSheetLayers.tsx");

export default function VoicePanelDockSheetLayers(wrapperTransformStyles) {
  wrapperTransformStyles = wrapperTransformStyles.wrapperTransformStyles;
  ({ wrapperSurfaceStyles, wrapperSurfaceLayerStyles, children } = wrapperTransformStyles);
  const context = noop.useContext(VoicePanelStateContextDefault);
  const isDockInLayout = context.isDockInLayout;
  ({ handleDockSheetLayout, dockPTTPortalHostName, dockPTTMeasureHostRef, dockSheetLeft, wrapperDimensions } = context);
  const tmp4 = closure_10();
  timestampProducer(context);
  items = [closure_11, wrapperDimensions, dockSheetLeft];
  c0 = undefined;
  c1 = undefined;
  [tmp7, tmp8, tmp9] = items;
  class VoicePanelDockSheetLayersTsx1 {
    constructor() {
      value = closure_0.get();
      size = { width: value.drawerWidth, height: value.drawerHeight, transform: null };
      obj1 = { translateX: -closure_1.get() };
      items = [];
      items[0] = obj1;
      size.transform = items;
      return size;
    }
  }
  const items1 = [tmp8, tmp9];
  VoicePanelDockSheetLayersTsx1.__closure = items1;
  VoicePanelDockSheetLayersTsx1.__workletHash = 3684693226456;
  VoicePanelDockSheetLayersTsx1.__initData = tmp7;
  const animatedStyle = _mod1654.useAnimatedStyle(VoicePanelDockSheetLayersTsx1);
  const tmpResult = useDockBoxShadowDefault;
  const tmp13 = useStateFromSharedValueDefault(isDockInLayout);
  const tmpResultResult = useDockBoxShadowDefault(native.Shadow.SHADOW_TOP_HIGH);
  const items2 = [closure_12, isDockInLayout];
  c0 = undefined;
  [tmp14, tmp15] = items2;
  class VoicePanelDockSheetLayersTsx2 {
    constructor() {
      obj = closure_0;
      num = 1;
      if (closure_0.get()) {
        num = 0;
      }
      obj1 = { opacity: num, pointerEvents: null };
      str = "box-none";
      if (obj.get()) {
        str = "none";
      }
      obj1.pointerEvents = str;
      return obj1;
    }
  }
  const items3 = [tmp15];
  VoicePanelDockSheetLayersTsx2.__closure = items3;
  VoicePanelDockSheetLayersTsx2.__workletHash = 4900754012109;
  VoicePanelDockSheetLayersTsx2.__initData = tmp14;
  const animatedStyle1 = _mod1654.useAnimatedStyle(VoicePanelDockSheetLayersTsx2);
  let obj2 = { style: null, accessibilityElementsHidden: tmp13, importantForAccessibility: null, children: null };
  const items4 = [tmp4.dockSheetLayers, animatedStyle1];
  obj2.style = items4;
  let str = "auto";
  if (tmp13) {
    str = "no-hide-descendants";
  }
  const obj3 = { children: null };
  obj2.importantForAccessibility = str;
  const obj4 = { style: wrapperTransformStyles, pointerEvents: "box-none", children: null };
  const obj5 = { style: null, pointerEvents: "none" };
  const items5 = [tmp4.dockSurfaceShadow, { boxShadow: tmpResultResult }, wrapperSurfaceLayerStyles];
  obj5.style = items5;
  const items6 = [metroImportDefault(_modDef1654.View, obj5), ];
  const obj6 = { style: null, layout: voicePanelLayoutTransitionDefault, children: null };
  const items7 = [tmp4.dockSurfaceClip, wrapperSurfaceStyles];
  obj6.style = items7;
  const tmp6Result = _mod1654;
  obj6.children = metroImportDefault(_modDef1654.View, { style: animatedStyle, onLayout: handleDockSheetLayout, children: metroImportDefault(redux.Provider, { value: tmp13, children }) });
  items6[1] = metroImportDefault(_modDef1654.View, obj6);
  obj4.children = items6;
  obj2.children = React5(_modDef1654.View, obj4);
  const items8 = [metroImportDefault(_modDef1654.View, obj2), ];
  const obj8 = { style: tmp4.dockSheetLayers, pointerEvents: "box-none", children: null };
  const obj7 = { style: animatedStyle, onLayout: handleDockSheetLayout, children: metroImportDefault(redux.Provider, { value: tmp13, children }) };
  obj8.children = metroImportDefault(_modDef1654.View, { ref: dockPTTMeasureHostRef, style: wrapperTransformStyles, pointerEvents: "box-none", collapsable: false, children: metroImportDefault(Portal.PortalHost, { name: dockPTTPortalHostName }) });
  items8[1] = metroImportDefault(React4, obj8);
  obj3.children = items8;
  return React5(React6, obj3);
};