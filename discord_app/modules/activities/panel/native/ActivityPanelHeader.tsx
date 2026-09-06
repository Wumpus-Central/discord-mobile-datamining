// === Module 17024: ActivityPanelHeader ===

// Module 17024 (ActivityPanelHeader)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 4271 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6655 */;
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 7168 */;
import BlurVisualEffectViewDefault from "BlurVisualEffectView" /* 17025 */;
import InviteActivityButtonDefault from "InviteActivityButton" /* 17026 */;
import MinimizeActivityButtonDefault from "MinimizeActivityButton" /* 17030 */;
import QuestActivityButtonDefault from "QuestActivityButton" /* 17031 */;
import LeaveActivityButtonDefault from "LeaveActivityButton" /* 17036 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;

require = fn;
function useBaseActivityPanelHeaderContent(landscape) {
  landscape = landscape.landscape;
  const setMode = landscape.setMode;
  ({ wrapperOffset, pipState } = landscape);
  const tmp = closure_14();
  dependencyMap = tmp;
  const tmp2 = setMode(1611)();
  closure_3 = tmp2;
  let items = [landscape];
  const items1 = [landscape, tmp2, , ];
  ({ panelHeader: arr2[2], panelLandscape: arr2[3] } = tmp);
  const memo = noop.useMemo(() => {
    let num = 0;
    if (!landscape) {
      num = nativeDefault.radii.lg;
    }
    const items = [StyleSheet.absoluteFill, { borderTopStartRadius: num, borderTopEndRadius: num }];
    return items;
  }, items);
  const fn = function c() {
    ReanimatedRexport.runOnJS(setMode)(ActivityPanelModes.PIP);
  };
  let obj = { runOnJS: null, setMode: null, ActivityPanelModes: null };
  const memo1 = noop.useMemo(() => {
    let num = 8;
    if (landscape) {
      num = 24;
    }
    const items = [closure_2.panelHeader, , ];
    let panelLandscape;
    if (landscape) {
      panelLandscape = closure_2.panelLandscape;
    }
    items[1] = panelLandscape;
    const obj = { paddingTop: num, paddingBottom: null, paddingLeft: null, paddingRight: null };
    let num2 = 8;
    if (landscape) {
      num2 = 24;
    }
    obj.paddingBottom = num2;
    let num3 = 16;
    let num4 = 16;
    if (!landscape) {
      num4 = 8 + closure_3.left;
    }
    obj.paddingLeft = num4;
    if (!landscape) {
      num3 = 8 + closure_3.right;
    }
    obj.paddingRight = num3;
    items[2] = obj;
    return items;
  }, items1);
  obj.runOnJS = landscape(4296).runOnJS;
  obj.setMode = setMode;
  obj.ActivityPanelModes = ActivityPanelModes;
  fn.__closure = obj;
  fn.__workletHash = 14504167937928;
  fn.__initData = __initData;
  const items2 = [setMode];
  obj = { gesture: null, headerWrapperStyles: null, headerStyles: null, styles: null };
  const callback = noop.useCallback(fn, items2);
  obj = { mode: landscape(17021).MorphablePanelModes.PANEL, panGestureEnabled: true, pipState, swipeRequiresPop: true, wrapperOffset, onPanMinimizeGestureEnd: callback, disableHorizontalSafeAreas: true };
  obj.gesture = setMode(17021)(obj);
  obj.headerWrapperStyles = memo;
  obj.headerStyles = memo1;
  obj.styles = tmp;
  return obj;
}
class BaseActivityPanelContent {
  constructor(arg0) {
    landscape = global.landscape;
    ({ children, hasConnectedActivity, gesture, headerWrapperStyles, headerStyles } = global);
    tmp3Result1 = null;
    if (hasConnectedActivity) {
      tmp3 = jsx;
      tmp4 = closure_0;
      tmp5 = closure_2;
      obj = { theme: null, children: null };
      tmp6 = ThemeTypes;
      obj.theme = ThemeTypes.DARK;
      obj = { gesture: null, children: null };
      obj.gesture = gesture;
      tmp8 = View;
      obj1 = { style: null, children: null };
      obj1.style = headerWrapperStyles;
      tmp9 = closure_1;
      tmp7 = jsxs;
      items = [, , ];
      items[0] = jsx(closure_1(closure_2[14]), {});
      tmp3Result = !landscape;
      if (!landscape) {
        obj2 = { style: null };
        obj2.style = tmp.pullIndicator;
        tmp3Result = tmp3(tmp8, obj2);
      }
      items[1] = tmp3Result;
      obj3 = { style: null, children: null };
      obj3.style = headerStyles;
      obj3.children = children;
      items[2] = tmp3(tmp8, obj3);
      obj1.children = items;
      obj.children = tmp7(tmp8, obj1);
      obj.children = tmp3(closure_0(closure_2[13]).GestureDetector, obj);
      tmp3Result1 = tmp3(closure_0(closure_2[12]).ThemeContextProvider, obj);
    }
    return tmp3Result1;
  }
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const ActivityPanelConstants = fn(9505);
({ ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT: closure_8, LANDSCAPE_IFRAME_HORIZONTAL_MARGIN: closure_9, ActivityPanelModes: c10 } = ActivityPanelConstants);
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let createStyles = fn(4560);
let obj = { panelHeader: null, panelLandscape: null, headerContainer: null, pullIndicator: null };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.justifyContent = "space-between";
obj.alignItems = "center";
obj.flexDirection = "row";
obj.gap = 8;
obj.panelHeader = obj;
obj.panelLandscape = { flexDirection: "column-reverse" };
obj.headerContainer = { position: "absolute", top: 0 };
let size = { backgroundColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.sm, width: 32, height: 4, alignSelf: "center", marginTop: 4, opacity: 0.3 };
obj.pullIndicator = size;
let closure_14 = createStyles.createStyles(obj);
const __initData = { code: "function ActivityPanelHeaderTsx1(){const{runOnJS,setMode,ActivityPanelModes}=this.__closure;runOnJS(setMode)(ActivityPanelModes.PIP);}" };
fn(4560);
createStyles = { buttonContainer: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexShrink: 1 }, buttonContainerLandscape: { flexDirection: "column-reverse" } };
createStyles = createStyles.createStyles(createStyles);
let closure_19 = noop.memo(function ActivityPanelHeaderContentInner(wrapperOffset) {
  ({ landscape, setMode } = wrapperOffset);
  let obj = { landscape, setMode, wrapperOffset: wrapperOffset.wrapperOffset, pipState: wrapperOffset.pipState };
  ({ gesture, headerWrapperStyles, headerStyles } = useBaseActivityPanelHeaderContent(obj));
  let obj1 = initialize;
  const items = [EmbeddedActivitiesStore];
  const stateFromStores = obj1.useStateFromStores(items, () => EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(EmbeddedActivitiesStore.getConnectedActivityLocation()), []);
  let applicationId;
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  const items1 = [applicationId];
  const first = _slicedToArray(useGetOrFetchApplicationsDefault(items1), 1)[0];
  const tmp7 = createStyles();
  let id;
  const tmp = useBaseActivityPanelHeaderContent(obj);
  if (first != null) {
    id = first.id;
  }
  let tmp8Result = closure_1_12(InviteActivityButtonDefault, { applicationId: id });
  obj = { hasConnectedActivity: null != stateFromStores, gesture, headerWrapperStyles, headerStyles, landscape, children: null };
  const items2 = [tmp7.buttonContainer, ];
  let prop;
  if (landscape) {
    prop = tmp7.buttonContainerLandscape;
  }
  obj = { style: items2, children: null };
  items2[1] = prop;
  let tmp17;
  let tmp5Result = MinimizeActivityButtonDefault;
  if (!landscape) {
    let name;
    if (first != null) {
      name = first.name;
    }
    tmp17 = name;
  }
  const items3 = [closure_1_12(tmp5Result, { activityName: tmp17, setMode }), , ];
  tmp8Result = null != applicationId;
  if (tmp8Result) {
    obj1 = { applicationId };
    tmp8Result = closure_1_12(QuestActivityButtonDefault, obj1);
  }
  items3[1] = tmp8Result;
  let tmp20 = null;
  if (landscape) {
    tmp20 = tmp8Result;
  }
  items3[2] = tmp20;
  obj.children = items3;
  const items4 = [map1(hasOwnProperty, obj), , ];
  let tmp21 = null;
  if (!landscape) {
    tmp21 = tmp8Result;
  }
  items4[1] = tmp21;
  tmp5Result = LeaveActivityButtonDefault;
  items4[2] = closure_1_12(tmp5Result, { selfEmbeddedActivity: stateFromStores, setMode });
  obj.children = items4;
  return map1(BaseActivityPanelContent, obj);
});
let obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexShrink: 1 };
size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelHeader.tsx");

export default noop.memo(() => {
  let wrapperDimensions;
  const tmp2 = closure_14();
  const headerContainer = tmp2;
  const context = noop.useContext(wrapperDimensions(17015));
  wrapperDimensions = context.wrapperDimensions;
  let items = [tmp2.headerContainer, wrapperDimensions.isWindowLandscape];
  ({ setMode, wrapperOffset, pipState } = context);
  let obj = {
    style: noop.useMemo(() => {
      if (wrapperDimensions.isWindowLandscape) {
        let str2 = React7;
        let tmp = 0;
        let num = null;
        let str = "auto";
      } else {
        str = React6;
        str2 = "auto";
        tmp = null;
        num = 0;
      }
      const items = [headerContainer.headerContainer, { width: str2, height: str, right: 0, left: num, bottom: tmp }];
      return items;
    }, items),
    children: null
  };
  obj = { landscape: wrapperDimensions.isWindowLandscape, setMode, wrapperOffset, pipState };
  obj.children = closure_12(closure_19, obj);
  return closure_12(closure_5, obj);
});
export { useBaseActivityPanelHeaderContent };
export { BaseActivityPanelContent };
export const useMinimizeAndQuestButtonContainerStyles = createStyles;
export const useBaseActivityPanelHeader = function useBaseActivityPanelHeader(context) {
  const tmp = closure_14();
  closure_0 = tmp;
  context = noop.useContext(context.context);
  const wrapperDimensions = context.wrapperDimensions;
  const obj = { headerStyles: null, wrapperDimensions, setMode, wrapperOffset, pipState };
  const items = [tmp.headerContainer, wrapperDimensions.isWindowLandscape];
  ({ setMode, wrapperOffset, pipState } = context);
  obj.headerStyles = noop.useMemo(() => {
    if (wrapperDimensions.isWindowLandscape) {
      let str2 = React7;
      let tmp = 0;
      let num = null;
      let str = "auto";
    } else {
      str = React6;
      str2 = "auto";
      tmp = null;
      num = 0;
    }
    const items = [headerContainer.headerContainer, { width: str2, height: str, right: 0, left: num, bottom: tmp }];
    return items;
  }, items);
  return obj;
};