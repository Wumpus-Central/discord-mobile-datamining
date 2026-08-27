// discord_app/modules/activities/panel/native/ActivityPanelHeader.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ManaContext from "../../../../../discord_common/js/packages/design/native.tsx";
import LegacyBaseButton from "../../../../../_runtime/05604_LegacyBaseButton.js";
import useGetOrFetchApplicationsDefault from "../../../applications/useGetOrFetchApplications.tsx";
import _modDef16518 from "BlurVisualEffectView.tsx";
import _modDef16519 from "InviteActivityButton.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../EmbeddedActivitiesStore.tsx";
import ActivityPanelModes from "../ActivityPanelConstants.tsx";
import { ThemeTypes } from "../../../../../discord_common/js/shared/Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function useBaseActivityPanelHeaderContent(landscape) {
  landscape = landscape.landscape;
  const setMode = landscape.setMode;
  dependencyMap = undefined;
  closure_3 = undefined;
  ({ wrapperOffset, pipState } = landscape);
  const tmp = callback3();
  dependencyMap = tmp;
  const tmp2 = setMode(1629)();
  closure_3 = tmp2;
  let items = [landscape];
  const items1 = [landscape, tmp2, , ];
  ({ panelHeader: arr2[2], panelLandscape: arr2[3] } = tmp);
  const memo = importAllResult.useMemo(() => {
    let num = 0;
    if (!landscape) {
      num = setMode(closure_2[8]).radii.lg;
    }
    const items = [closure_1_6.absoluteFill, { borderTopStartRadius: num, borderTopEndRadius: num }];
    return items;
  }, items);
  const fn = function c() {
    landscape(closure_2[10]).runOnJS(setMode)(closure_1_10.PIP);
  };
  let obj = { runOnJS: null, setMode: null, ActivityPanelModes: null };
  const memo1 = importAllResult.useMemo(() => {
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
    obj[1] = num2;
    let num3 = 16;
    let num4 = 16;
    if (!landscape) {
      num4 = 8 + closure_3.left;
    }
    obj[2] = num4;
    if (!landscape) {
      num3 = 8 + closure_3.right;
    }
    obj[3] = num3;
    items[2] = obj;
    return items;
  }, items1);
  obj[0] = landscape(4185).runOnJS;
  obj[1] = setMode;
  obj[2] = closure_10;
  fn.__closure = obj;
  fn.__workletHash = 14504167937928;
  fn.__initData = closure_15;
  const items2 = [setMode];
  obj = { gesture: null, headerWrapperStyles: null, headerStyles: null, styles: null };
  const callback = importAllResult.useCallback(fn, items2);
  obj = { mode: landscape(16514).MorphablePanelModes.PANEL, panGestureEnabled: true, pipState, swipeRequiresPop: true, wrapperOffset, onPanMinimizeGestureEnd: callback, disableHorizontalSafeAreas: true };
  obj[0] = setMode(16514)(obj);
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
      items[0] = jsx(require("BlurVisualEffectView.tsx"), {});
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
      obj[1] = tmp3(require("LegacyBaseButton").GestureDetector, obj);
      tmp3Result1 = tmp3(require("ManaContext").ThemeContextProvider, obj);
    }
    return tmp3Result1;
  }
}
let c4 = importAllResult;
({ View: c5, StyleSheet } = get_ActivityIndicator);
({ ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT: closure_8, LANDSCAPE_IFRAME_HORIZONTAL_MARGIN: c9, ActivityPanelModes: c10 } = ActivityPanelModes);
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
createCacheKey = { backgroundColor: ThemesDefault.colors.WHITE, borderRadius: ThemesDefault.radii.sm, width: 32, height: 4, alignSelf: "center", marginTop: 4, opacity: 0.3 };
obj[3] = createCacheKey;
let closure_14 = createCacheKey.createStyles(obj);
let closure_15 = { code: "function ActivityPanelHeaderTsx1(){const{runOnJS,setMode,ActivityPanelModes}=this.__closure;runOnJS(setMode)(ActivityPanelModes.PIP);}" };
let obj2 = { buttonContainer: { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8, flexShrink: 1 }, buttonContainerLandscape: { flexDirection: "column-reverse" } };
const styles = createCacheKey.createStyles(obj2);
let closure_19 = importAllResult.memo(function ActivityPanelHeaderContentInner(wrapperOffset) {
  ({ landscape, setMode } = wrapperOffset);
  let obj = { landscape, setMode, wrapperOffset: wrapperOffset.wrapperOffset, pipState: wrapperOffset.pipState };
  ({ gesture, headerWrapperStyles, headerStyles } = useBaseActivityPanelHeaderContent(obj));
  obj1 = initialize;
  const items = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items, () => store.getSelfEmbeddedActivityForLocation(store.getConnectedActivityLocation()), []);
  let applicationId;
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  const items1 = [applicationId];
  const first = callback(useGetOrFetchApplicationsDefault(items1), 1)[0];
  const tmp7 = styles();
  let id;
  const tmp = useBaseActivityPanelHeaderContent(obj);
  if (first != null) {
    id = first.id;
  }
  let tmp8Result = tmp8(_modDef16519, { applicationId: id });
  obj = { hasConnectedActivity: null != stateFromStores, gesture, headerWrapperStyles, headerStyles, landscape, children: null };
  const items2 = [tmp7.buttonContainer, ];
  let prop;
  if (landscape) {
    prop = tmp7.buttonContainerLandscape;
  }
  obj = { style: items2, children: null };
  items2[1] = prop;
  let tmp17;
  let tmp5Result = tmp5(16523);
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
    tmp8Result = tmp8(tmp5(16524), obj1);
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
  tmp5Result = tmp5(16529);
  items4[2] = closure_12(tmp5Result, { selfEmbeddedActivity: stateFromStores, setMode });
  obj[5] = items4;
  return closure_13(BaseActivityPanelContent, obj);
});
const obj3 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8, flexShrink: 1 };
const memoResult = importAllResult.memo(() => {
  closure_0 = undefined;
  let wrapperDimensions;
  const tmp2 = callback3();
  closure_0 = tmp2;
  const context = importAllResult.useContext(wrapperDimensions(16508));
  wrapperDimensions = context.wrapperDimensions;
  let items = [tmp2.headerContainer, wrapperDimensions.isWindowLandscape];
  ({ setMode, wrapperOffset, pipState } = context);
  obj = {
    style: importAllResult.useMemo(() => {
      if (wrapperDimensions.isWindowLandscape) {
        let str2 = closure_1_9;
        let tmp = 0;
        let num = null;
        let str = "auto";
      } else {
        str = closure_1_8;
        str2 = "auto";
        tmp = null;
        num = 0;
      }
      const items = [headerContainer.headerContainer, { width: str2, height: str, right: 0, left: num, bottom: tmp }];
      return items;
    }, items),
    children: callback2(closure_19, obj)
  };
  obj = { landscape: wrapperDimensions.isWindowLandscape, setMode, wrapperOffset, pipState };
  return callback2(closure_5, obj);
});
const result = require("set").fileFinishedImporting("modules/activities/panel/native/ActivityPanelHeader.tsx");

export default memoResult;
export { useBaseActivityPanelHeaderContent };
export { BaseActivityPanelContent };
export const useMinimizeAndQuestButtonContainerStyles = styles;
export const useBaseActivityPanelHeader = function useBaseActivityPanelHeader(context) {
  closure_0 = undefined;
  let wrapperDimensions;
  const tmp = callback3();
  closure_0 = tmp;
  context = importAllResult.useContext(context.context);
  wrapperDimensions = context.wrapperDimensions;
  const items = [tmp.headerContainer, wrapperDimensions.isWindowLandscape];
  ({ setMode, wrapperOffset, pipState } = context);
  return {
    headerStyles: importAllResult.useMemo(() => {
      if (wrapperDimensions.isWindowLandscape) {
        let str2 = closure_1_9;
        let tmp = 0;
        let num = null;
        let str = "auto";
      } else {
        str = closure_1_8;
        str2 = "auto";
        tmp = null;
        num = 0;
      }
      const items = [headerContainer.headerContainer, { width: str2, height: str, right: 0, left: num, bottom: tmp }];
      return items;
    }, items),
    wrapperDimensions,
    setMode,
    wrapperOffset,
    pipState
  };
};