// discord_app/modules/activities/panel/native/ActivityPanelHeader.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "QuestActivityButtonInner";
import get_ActivityIndicator from "module_15970";
import participantFromServer from "participantFromServer";
import ActivityPanelModes from "ActivityPanelModes";
import { ThemeTypes } from "sum";
import jsxProd from "useActivityWebViewLock";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { useGetOrFetchApplications } from "../../../applications/useGetOrFetchApplications.tsx";
import { InviteActivityButton } from "InviteActivityButton.tsx";

let StyleSheet;
let c10;
let c5;
let c9;
let closure_12;
let map1;
let metroImportAll;
const require = arg1;
function useBaseActivityPanelHeaderContent(landscape) {
  let pipState;
  let wrapperOffset;
  landscape = landscape.landscape;
  const setMode = landscape.setMode;
  let dependencyMap;
  let c3;
  ({ wrapperOffset, pipState } = landscape);
  const tmp = callback3();
  dependencyMap = tmp;
  const tmp2 = setMode(1581)();
  c3 = tmp2;
  let items = [landscape];
  const items1 = [landscape, tmp2, , ];
  ({ panelHeader: arr2[2], panelLandscape: arr2[3] } = tmp);
  const memo = importAllResult.useMemo(() => {
    let num = 0;
    if (!landscape) {
      num = setMode(_undefined[8]).radii.lg;
    }
    const items = [outer1_6.absoluteFill, { borderTopStartRadius: num, borderTopEndRadius: num }];
    return items;
  }, items);
  const fn = function c() {
    landscape(_undefined[10]).runOnJS(setMode)(outer1_10.PIP);
  };
  let obj = { runOnJS: null, setMode: null, ActivityPanelModes: null };
  const memo1 = importAllResult.useMemo(() => {
    let num = 8;
    if (landscape) {
      num = 24;
    }
    const items = [_undefined.panelHeader, , ];
    let panelLandscape;
    if (landscape) {
      panelLandscape = _undefined.panelLandscape;
    }
    items[1] = panelLandscape;
    const obj = { paddingTop: num, paddingBottom: null, paddingLeft: null, paddingRight: null };
    let num2 = 8;
    if (landscape) {
      num2 = 24;
    }
    obj[1] = num2;
    let num3 = 16;
    let num4 = 16;
    if (!landscape) {
      num4 = 8 + _undefined2.left;
    }
    obj[2] = num4;
    if (!landscape) {
      num3 = 8 + _undefined2.right;
    }
    obj[3] = num3;
    items[2] = obj;
    return items;
  }, items1);
  obj[0] = landscape(4146).runOnJS;
  obj[1] = setMode;
  obj[2] = closure_10;
  fn.__closure = obj;
  fn.__workletHash = 14504167937928;
  fn.__initData = closure_15;
  const items2 = [setMode];
  obj = { gesture: null, headerWrapperStyles: null, headerStyles: null, styles: null };
  const callback = importAllResult.useCallback(fn, items2);
  obj = { mode: null, panGestureEnabled: true, pipState: null, swipeRequiresPop: true, wrapperOffset: null, onPanMinimizeGestureEnd: null, disableHorizontalSafeAreas: true };
  obj[0] = landscape(15965).MorphablePanelModes.PANEL;
  obj[2] = pipState;
  obj[4] = wrapperOffset;
  obj[5] = callback;
  obj[0] = setMode(15965)(obj);
  obj[1] = memo;
  obj[2] = memo1;
  obj[3] = tmp;
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
      obj[0] = ThemeTypes.DARK;
      obj = { gesture: null, children: null };
      obj[0] = gesture;
      tmp8 = View;
      obj1 = { style: null, children: null };
      obj1[0] = headerWrapperStyles;
      tmp9 = closure_1;
      tmp7 = jsxs;
      items = [, , ];
      items[0] = jsx(require("module_15969"), {});
      tmp3Result = !landscape;
      if (!landscape) {
        obj2 = { style: null };
        obj2[0] = tmp.pullIndicator;
        tmp3Result = tmp3(tmp8, obj2);
      }
      items[1] = tmp3Result;
      obj3 = { style: null, children: null };
      obj3[0] = headerStyles;
      obj3[1] = children;
      items[2] = tmp3(tmp8, obj3);
      obj1[1] = items;
      obj[1] = tmp7(tmp8, obj1);
      obj[1] = tmp3(require("Directions").GestureDetector, obj);
      tmp3Result1 = tmp3(require("ManaContext").ThemeContextProvider, obj);
    }
    return tmp3Result1;
  }
}
let c4 = importAllResult;
({ View: c5, StyleSheet } = get_ActivityIndicator);
({ ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT: metroImportAll, LANDSCAPE_IFRAME_HORIZONTAL_MARGIN: c9, ActivityPanelModes: c10 } = ActivityPanelModes);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let obj = { panelHeader: null, panelLandscape: null, headerContainer: null, pullIndicator: null };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.justifyContent = "space-between";
obj.alignItems = "center";
obj.flexDirection = "row";
obj.gap = 8;
obj[0] = obj;
obj[1] = { flexDirection: "column-reverse" };
obj[2] = { position: "absolute", top: 0 };
createCacheKey = { backgroundColor: require("Themes").colors.WHITE, borderRadius: require("Themes").radii.sm, width: 32, height: 4, alignSelf: "center", marginTop: 4, opacity: 0.3 };
obj[3] = createCacheKey;
let closure_14 = createCacheKey.createStyles(obj);
let closure_15 = { code: "function ActivityPanelHeaderTsx1(){const{runOnJS,setMode,ActivityPanelModes}=this.__closure;runOnJS(setMode)(ActivityPanelModes.PIP);}" };
let obj2 = { buttonContainer: null, buttonContainerLandscape: null };
obj2[0] = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8, flexShrink: 1 };
obj2[1] = { flexDirection: "column-reverse" };
const styles = createCacheKey.createStyles(obj2);
let closure_19 = importAllResult.memo(function ActivityPanelHeaderContentInner(wrapperOffset) {
  let gesture;
  let headerStyles;
  let headerWrapperStyles;
  let landscape;
  let setMode;
  ({ landscape, setMode } = wrapperOffset);
  let obj = { landscape, setMode, wrapperOffset: wrapperOffset.wrapperOffset, pipState: wrapperOffset.pipState };
  ({ gesture, headerWrapperStyles, headerStyles } = useBaseActivityPanelHeaderContent(obj));
  let obj1 = initialize;
  const items = [participantFromServer];
  const stateFromStores = obj1.useStateFromStores(items, () => store.getSelfEmbeddedActivityForLocation(store.getConnectedActivityLocation()), []);
  let applicationId;
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  const items1 = [applicationId];
  const first = callback(useGetOrFetchApplications(items1), 1)[0];
  const tmp7 = styles();
  let id;
  const tmp = useBaseActivityPanelHeaderContent(obj);
  if (first != null) {
    id = first.id;
  }
  let tmp8Result = tmp8(InviteActivityButton, { applicationId: id });
  obj = { hasConnectedActivity: null != stateFromStores, gesture, headerWrapperStyles, headerStyles, landscape, children: null };
  const items2 = [tmp7.buttonContainer, ];
  let prop;
  if (landscape) {
    prop = tmp7.buttonContainerLandscape;
  }
  obj = { style: items2, children: null };
  items2[1] = prop;
  let tmp17;
  let tmp5Result = tmp5(15974);
  if (!landscape) {
    let name;
    if (first != null) {
      name = first.name;
    }
    tmp17 = name;
  }
  const items3 = [closure_12(tmp5Result, { activityName: tmp17, setMode }), , ];
  tmp8Result = null != applicationId;
  if (tmp8Result) {
    obj1 = { applicationId: null };
    obj1[0] = applicationId;
    tmp8Result = tmp8(tmp5(15975), obj1);
  }
  items3[1] = tmp8Result;
  let tmp20 = null;
  if (landscape) {
    tmp20 = tmp8Result;
  }
  items3[2] = tmp20;
  obj[1] = items3;
  const items4 = [closure_13(closure_5, obj), , ];
  let tmp21 = null;
  if (!landscape) {
    tmp21 = tmp8Result;
  }
  items4[1] = tmp21;
  tmp5Result = tmp5(15980);
  items4[2] = closure_12(tmp5Result, { selfEmbeddedActivity: stateFromStores, setMode });
  obj[5] = items4;
  return closure_13(BaseActivityPanelContent, obj);
});
const obj3 = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8, flexShrink: 1 };
const memoResult = importAllResult.memo(() => {
  let pipState;
  let setMode;
  let wrapperOffset;
  let c0;
  let wrapperDimensions;
  const tmp2 = callback3();
  c0 = tmp2;
  const context = importAllResult.useContext(wrapperDimensions(15959));
  wrapperDimensions = context.wrapperDimensions;
  let items = [tmp2.headerContainer, wrapperDimensions.isWindowLandscape];
  ({ setMode, wrapperOffset, pipState } = context);
  obj = {
    style: importAllResult.useMemo(() => {
      if (wrapperDimensions.isWindowLandscape) {
        let str2 = outer1_9;
        let tmp = 0;
        let num = null;
        let str = "auto";
      } else {
        str = outer1_8;
        str2 = "auto";
        tmp = null;
        num = 0;
      }
      const items = [_undefined.headerContainer, { width: str2, height: str, right: 0, left: num, bottom: tmp }];
      return items;
    }, items),
    children: callback2(closure_19, obj)
  };
  obj = { landscape: wrapperDimensions.isWindowLandscape, setMode, wrapperOffset, pipState };
  return callback2(closure_5, obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/activities/panel/native/ActivityPanelHeader.tsx");

export default memoResult;
export { useBaseActivityPanelHeaderContent };
export { BaseActivityPanelContent };
export const useMinimizeAndQuestButtonContainerStyles = styles;
export const useBaseActivityPanelHeader = function useBaseActivityPanelHeader(context) {
  let pipState;
  let setMode;
  let wrapperOffset;
  let c0;
  let wrapperDimensions;
  const tmp = callback3();
  c0 = tmp;
  context = importAllResult.useContext(context.context);
  wrapperDimensions = context.wrapperDimensions;
  const items = [tmp.headerContainer, wrapperDimensions.isWindowLandscape];
  ({ setMode, wrapperOffset, pipState } = context);
  return {
    headerStyles: importAllResult.useMemo(() => {
      if (wrapperDimensions.isWindowLandscape) {
        let str2 = outer1_9;
        let tmp = 0;
        let num = null;
        let str = "auto";
      } else {
        str = outer1_8;
        str2 = "auto";
        tmp = null;
        num = 0;
      }
      const items = [_undefined.headerContainer, { width: str2, height: str, right: 0, left: num, bottom: tmp }];
      return items;
    }, items),
    wrapperDimensions,
    setMode,
    wrapperOffset,
    pipState
  };
};