// === Module 17591: ActivityPanelHeader ===

// Module 17591 (ActivityPanelHeader)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 4535 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4561 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6985 */;
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 7501 */;
import BlurVisualEffectViewDefault from "BlurVisualEffectView" /* 17592 */;
import InviteActivityButtonDefault from "InviteActivityButton" /* 17593 */;
import MinimizeActivityButtonDefault from "MinimizeActivityButton" /* 17597 */;
import QuestActivityButtonDefault from "QuestActivityButton" /* 17598 */;
import LeaveActivityButtonDefault from "LeaveActivityButton" /* 17603 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2043 */;

require = fn;
function useBaseActivityPanelHeaderContent(landscape) {
  landscape = landscape.landscape;
  const setMode = landscape.setMode;
  ({ wrapperOffset, pipState } = landscape);
  const tmp = closure_14();
  dependencyMap = tmp;
  const tmp2 = setMode(1612)();
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
  obj.runOnJS = landscape(4561).runOnJS;
  obj.setMode = setMode;
  obj.ActivityPanelModes = ActivityPanelModes;
  fn.__closure = obj;
  fn.__workletHash = 14504167937928;
  fn.__initData = __initData;
  const items2 = [setMode];
  const obj2 = { gesture: null, headerWrapperStyles: null, headerStyles: null, styles: null };
  const callback = noop.useCallback(fn, items2);
  const obj3 = { mode: landscape(17588).MorphablePanelModes.PANEL, panGestureEnabled: true, pipState, swipeRequiresPop: true, wrapperOffset, onPanMinimizeGestureEnd: callback, disableHorizontalSafeAreas: true };
  obj2.gesture = setMode(17588)(obj3);
  obj2.headerWrapperStyles = memo;
  obj2.headerStyles = memo1;
  obj2.styles = tmp;
  return obj2;
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
      obj1 = { gesture: null, children: null };
      obj1.gesture = gesture;
      tmp8 = View;
      obj6 = { style: null, children: null };
      obj6.style = headerWrapperStyles;
      tmp9 = closure_1;
      tmp7 = jsxs;
      items = [, , ];
      items[0] = jsx(closure_1(closure_2[14]), {});
      tmp3Result = !landscape;
      if (!landscape) {
        obj7 = { style: null };
        obj7.style = tmp.pullIndicator;
        tmp3Result = tmp3(tmp8, obj7);
      }
      items[1] = tmp3Result;
      obj8 = { style: null, children: null };
      obj8.style = headerStyles;
      obj8.children = children;
      items[2] = tmp3(tmp8, obj8);
      obj6.children = items;
      obj1.children = tmp7(tmp8, obj6);
      obj.children = tmp3(closure_0(closure_2[13]).GestureDetector, obj1);
      tmp3Result1 = tmp3(closure_0(closure_2[12]).ThemeContextProvider, obj);
    }
    return tmp3Result1;
  }
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const ActivityPanelConstants = fn(9396);
({ ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT: closure_8, LANDSCAPE_IFRAME_HORIZONTAL_MARGIN: closure_9, ActivityPanelModes: c10 } = ActivityPanelConstants);
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let createStyles = fn(4829);
let obj = { panelHeader: null, panelLandscape: null, headerContainer: null, pullIndicator: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.justifyContent = "space-between";
obj3.alignItems = "center";
obj3.flexDirection = "row";
obj3.gap = 8;
obj.panelHeader = obj3;
obj.panelLandscape = { flexDirection: "column-reverse" };
obj.headerContainer = { position: "absolute", top: 0 };
let size = { backgroundColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.sm, width: 32, height: 4, alignSelf: "center", marginTop: 4, opacity: 0.3 };
obj.pullIndicator = size;
let closure_14 = createStyles.createStyles(obj);
const __initData = { code: "function ActivityPanelHeaderTsx1(){const{runOnJS,setMode,ActivityPanelModes}=this.__closure;runOnJS(setMode)(ActivityPanelModes.PIP);}" };
createStyles = fn(4829);
let obj4 = { buttonContainer: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexShrink: 1 }, buttonContainerLandscape: { flexDirection: "column-reverse" } };
const styles = createStyles.createStyles(obj4);
let closure_19 = noop.memo(function ActivityPanelHeaderContentInner(wrapperOffset) {
  ({ landscape, setMode } = wrapperOffset);
  ({ gesture, headerWrapperStyles, headerStyles } = useBaseActivityPanelHeaderContent({ landscape, setMode, wrapperOffset: wrapperOffset.wrapperOffset, pipState: wrapperOffset.pipState }));
  const obj = { landscape, setMode, wrapperOffset: wrapperOffset.wrapperOffset, pipState: wrapperOffset.pipState };
  const tmp = useBaseActivityPanelHeaderContent({ landscape, setMode, wrapperOffset: wrapperOffset.wrapperOffset, pipState: wrapperOffset.pipState });
  const items = [EmbeddedActivitiesStore];
  const stateFromStores = initialize.useStateFromStores(items, () => EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(EmbeddedActivitiesStore.getConnectedActivityLocation()), []);
  let applicationId;
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  const items1 = [applicationId];
  const first = _slicedToArray(useGetOrFetchApplicationsDefault(items1), 1)[0];
  const tmp7 = styles();
  let id;
  if (first != null) {
    id = first.id;
  }
  const tmp8Result = closure_1_12(InviteActivityButtonDefault, { applicationId: id });
  const obj3 = { hasConnectedActivity: null != stateFromStores, gesture, headerWrapperStyles, headerStyles, landscape, children: null };
  const items2 = [tmp7.buttonContainer, ];
  let prop;
  if (landscape) {
    prop = tmp7.buttonContainerLandscape;
  }
  const obj4 = { style: items2, children: null };
  items2[1] = prop;
  let tmp17;
  if (!landscape) {
    let name;
    if (first != null) {
      name = first.name;
    }
    tmp17 = name;
  }
  const items3 = [closure_1_12(MinimizeActivityButtonDefault, { activityName: tmp17, setMode }), , ];
  let tmp8Result2 = null != applicationId;
  if (tmp8Result2) {
    const obj5 = { applicationId };
    tmp8Result2 = closure_1_12(QuestActivityButtonDefault, obj5);
  }
  items3[1] = tmp8Result2;
  let tmp20 = null;
  if (landscape) {
    tmp20 = tmp8Result;
  }
  items3[2] = tmp20;
  obj4.children = items3;
  const items4 = [map1(hasOwnProperty, obj4), , ];
  let tmp21 = null;
  if (!landscape) {
    tmp21 = tmp8Result;
  }
  items4[1] = tmp21;
  const tmp23 = stateFromStores;
  const tmp5Result = MinimizeActivityButtonDefault;
  items4[2] = closure_1_12(LeaveActivityButtonDefault, { selfEmbeddedActivity: tmp23, setMode });
  obj3.children = items4;
  return map1(BaseActivityPanelContent, obj3);
});
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexShrink: 1 };
size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelHeader.tsx");

export default noop.memo(() => {
  let wrapperDimensions;
  const tmp2 = closure_14();
  const headerContainer = tmp2;
  const context = noop.useContext(wrapperDimensions(17582));
  wrapperDimensions = context.wrapperDimensions;
  let items = [tmp2.headerContainer, wrapperDimensions.isWindowLandscape];
  ({ setMode, wrapperOffset, pipState } = context);
  const obj = {
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
    children: closure_12(closure_19, { landscape: wrapperDimensions.isWindowLandscape, setMode, wrapperOffset, pipState })
  };
  return closure_12(closure_5, obj);
});
export { useBaseActivityPanelHeaderContent };
export { BaseActivityPanelContent };
export const useMinimizeAndQuestButtonContainerStyles = styles;
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