// === Module 16584: useConjurePreviewMode ===

// Module 16584 (useConjurePreviewMode)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6658 */;
import ApplicationWidgetConfigSurface from "ApplicationWidgetConfigSurface" /* 8677 */;
import canLaunchContextlessFrame from "canLaunchContextlessFrame" /* 8994 */;
import useUserApplicationWidgetDataDefault from "useUserApplicationWidgetData" /* 16585 */;
import conjurePreviewModes from "conjurePreviewModes" /* 16586 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let applicationId;
  let data2;
  let declaredActivity;
  let installScope;
  let isLoading;
  let mainCardOnly;
  let ownerAuthorizationRevoked;
  let previewApplicationId;
  let tmp12;
  let tmp13;
  let tmp21;
  let tmp22;
  let tmp6;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(7);
  ({ applicationId, previewApplicationId, declaredActivity, mainCardOnly } = arg0);
  let tmp4 = undefined !== mainCardOnly;
  ({ installScope, ownerAuthorizationRevoked } = arg0);
  if (tmp4) {
    tmp4 = mainCardOnly;
  }
  [tmp6, tmp7] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  const tmp8 = _slicedToArray(react.useState(applicationId), 2);
  if (tmp8[0] !== applicationId) {
    tmp8[1](applicationId);
    tmp7(null);
  }
  let tmp11 = null;
  if (null != previewApplicationId) {
    tmp11 = null;
    if (previewApplicationId === applicationId) {
      tmp11 = previewApplicationId;
    }
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    const fn = function _() {
      return id.getId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp12 = items;
    tmp13 = fn;
  } else {
    [tmp12, tmp13] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp12, tmp13);
  const tmp16 = useUserApplicationWidgetDataDefault;
  const applicationWidgetConfig = tmp16(stateFromStores, tmp11).applicationWidgetConfig;
  let surfaces;
  if (applicationWidgetConfig != null) {
    surfaces = applicationWidgetConfig.surfaces;
  }
  let tmp20;
  const profileSurfaceAvailability = conjurePreviewModes.profileSurfaceAvailability;
  conjurePreviewModes;
  if (surfaces != null) {
    tmp20 = surfaces[ApplicationWidgetConfigSurface.ApplicationWidgetConfigSurface.WIDGET_TOP];
  }
  const obj2 = { widgetTop: null != tmp20, widgetBottom: null != tmp21, miniProfile: null != tmp22 };
  tmp21 = undefined;
  if (surfaces != null) {
    tmp21 = surfaces[ApplicationWidgetConfigSurface.ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  }
  tmp22 = undefined;
  if (surfaces != null) {
    tmp22 = surfaces[ApplicationWidgetConfigSurface.ApplicationWidgetConfigSurface.MINI_PROFILE];
  }
  const result = profileSurfaceAvailability(obj2);
  const tmp24 = null != tmp11 && (tmp4 ? result.hasMainCard : result.hasAny);
  const useApplication = ApplicationActionCreators.useApplication;
  ApplicationActionCreators;
  const data = useApplication(previewApplicationId).data;
  let tmp27 = null != previewApplicationId;
  if (tmp27) {
    let id;
    if (data != null) {
      const bot = data.bot;
      if (bot != null) {
        id = bot.id;
      }
    }
    tmp27 = null != id;
  }
  const useApplication2 = ApplicationActionCreators.useApplication;
  ApplicationActionCreators;
  const application2 = useApplication2(applicationId);
  ({ data: data2, isLoading } = application2);
  if (!declaredActivity) {
    const tmpResult10 = canLaunchContextlessFrame;
    declaredActivity = tmpResult10.canLaunchContextlessFrame(data2);
  }
  const tmpResult11 = conjurePreviewModes;
  const result1 = tmpResult11.previewModeAvailability({ installScope, hasFrame: declaredActivity, hasProfileWidget: tmp24, hasBotDm: tmp27, ownerAuthorizationRevoked });
  let previewMode = null;
  if (!(null != applicationId && isLoading && null == data2)) {
    const tmpResult12 = conjurePreviewModes;
    previewMode = tmpResult12.resolvePreviewMode(tmp6, result1);
  }
  if (cResult[2] === result1) {
    if (cResult[3] === (null != applicationId && isLoading && null == data2)) {
      if (cResult[4] === previewMode) {
        let tmp35;
        if (cResult[5] === tmp11) {
          tmp35 = cResult[6];
        }
        return tmp35;
      }
    }
  }
  const obj3 = { availability: result1, isResolving: null != applicationId && isLoading && null == data2, activeMode: previewMode, setMode: tmp7, widgetApplicationId: tmp11 };
  cResult[2] = result1;
  cResult[3] = null != applicationId && isLoading && null == data2;
  cResult[4] = previewMode;
  cResult[5] = tmp11;
  cResult[6] = obj3;
  tmp35 = obj3;
}) : ((arg0) => {
  let applicationId;
  let data2;
  let declaredActivity;
  let installScope;
  let isLoading;
  let mainCardOnly;
  let ownerAuthorizationRevoked;
  let previewApplicationId;
  let previewMode;
  let tmp16;
  let tmp17;
  let tmp2;
  let tmp3;
  ({ applicationId, previewApplicationId, declaredActivity, mainCardOnly } = arg0);
  ({ installScope, ownerAuthorizationRevoked } = arg0);
  if (mainCardOnly === undefined) {
    mainCardOnly = false;
  }
  [tmp2, tmp3] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  const tmp4 = _slicedToArray(react.useState(applicationId), 2);
  if (tmp4[0] !== applicationId) {
    tmp4[1](applicationId);
    tmp3(null);
  }
  let tmp7 = null;
  if (null != previewApplicationId) {
    tmp7 = null;
    if (previewApplicationId === applicationId) {
      tmp7 = previewApplicationId;
    }
  }
  const items = [AuthenticationStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  const tmp11 = useUserApplicationWidgetDataDefault;
  const applicationWidgetConfig = tmp11(stateFromStores, tmp7).applicationWidgetConfig;
  let surfaces;
  if (applicationWidgetConfig != null) {
    surfaces = applicationWidgetConfig.surfaces;
  }
  let tmp15;
  const profileSurfaceAvailability = conjurePreviewModes.profileSurfaceAvailability;
  conjurePreviewModes;
  if (surfaces != null) {
    tmp15 = surfaces[ApplicationWidgetConfigSurface.ApplicationWidgetConfigSurface.WIDGET_TOP];
  }
  const obj2 = { widgetTop: null != tmp15, widgetBottom: null != tmp16, miniProfile: null != tmp17 };
  tmp16 = undefined;
  if (surfaces != null) {
    tmp16 = surfaces[ApplicationWidgetConfigSurface.ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  }
  tmp17 = undefined;
  if (surfaces != null) {
    tmp17 = surfaces[ApplicationWidgetConfigSurface.ApplicationWidgetConfigSurface.MINI_PROFILE];
  }
  const result = profileSurfaceAvailability(obj2);
  const tmp19 = null != tmp7 && (mainCardOnly ? result.hasMainCard : result.hasAny);
  const useApplication = ApplicationActionCreators.useApplication;
  ApplicationActionCreators;
  const data = useApplication(previewApplicationId).data;
  let tmp22 = null != previewApplicationId;
  if (tmp22) {
    let id;
    if (data != null) {
      const bot = data.bot;
      if (bot != null) {
        id = bot.id;
      }
    }
    tmp22 = null != id;
  }
  const useApplication2 = ApplicationActionCreators.useApplication;
  ApplicationActionCreators;
  const application2 = useApplication2(applicationId);
  ({ data: data2, isLoading } = application2);
  if (!declaredActivity) {
    const tmp8Result8 = canLaunchContextlessFrame;
    declaredActivity = tmp8Result8.canLaunchContextlessFrame(data2);
  }
  const tmp8Result9 = conjurePreviewModes;
  const result1 = tmp8Result9.previewModeAvailability({ installScope, hasFrame: declaredActivity, hasProfileWidget: tmp19, hasBotDm: tmp22, ownerAuthorizationRevoked });
  const obj3 = { availability: result1, isResolving: null != applicationId && isLoading && null == data2, activeMode: previewMode, setMode: tmp3, widgetApplicationId: tmp7 };
  previewMode = null;
  if (!(null != applicationId && isLoading && null == data2)) {
    const tmp8Result10 = conjurePreviewModes;
    previewMode = tmp8Result10.resolvePreviewMode(tmp2, result1);
  }
  return obj3;
});
let result = size.fileFinishedImporting("modules/conjure/preview/useConjurePreviewMode.tsx");

export const useConjurePreviewMode = tmp2;