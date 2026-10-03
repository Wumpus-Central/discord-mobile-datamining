// === Module 16578: useVibegrationsPreviewMode ===

// Module 16578 (useVibegrationsPreviewMode)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6658 */;
import ApplicationWidgetConfigSurface from "ApplicationWidgetConfigSurface" /* 8677 */;
import canLaunchContextlessFrame from "canLaunchContextlessFrame" /* 8994 */;
import useUserApplicationWidgetDataDefault from "useUserApplicationWidgetData" /* 16579 */;
import vibegrationsPreviewModes from "vibegrationsPreviewModes" /* 16580 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsPreviewMode.tsx");

export const useVibegrationsPreviewMode = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(7);
  ({ applicationId, previewApplicationId, declaredActivity, mainCardOnly } = arg0);
  let tmp4 = undefined !== mainCardOnly;
  ({ installScope, ownerAuthorizationRevoked } = arg0);
  if (tmp4) {
    tmp4 = mainCardOnly;
  }
  [tmp6, tmp7] = noop.useState(null);
  const tmp8 = _slicedToArray(noop.useState(applicationId), 2);
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
    class T {
      constructor() {
        return closure_1_5.getId();
      }
    }
    cResult[0] = items;
    cResult[1] = T;
    tmp12 = items;
  } else {
    [tmp12, tmp13] = cResult;
  }
  const tmp5 = _slicedToArray(noop.useState(null), 2);
  const stateFromStores = initialize.useStateFromStores(tmp12, T);
  const tmp17 = tmp11;
  const tmpResult = initialize;
  const applicationWidgetConfig = useUserApplicationWidgetDataDefault(stateFromStores, tmp17).applicationWidgetConfig;
  let surfaces;
  if (applicationWidgetConfig != null) {
    surfaces = applicationWidgetConfig.surfaces;
  }
  let tmp19;
  if (surfaces != null) {
    tmp19 = surfaces[ApplicationWidgetConfigSurface.ApplicationWidgetConfigSurface.WIDGET_TOP];
  }
  const obj2 = { widgetTop: null != tmp19, widgetBottom: null, miniProfile: null };
  let tmp20;
  if (surfaces != null) {
    tmp20 = surfaces[ApplicationWidgetConfigSurface.ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  }
  obj2.widgetBottom = null != tmp20;
  let tmp21;
  if (surfaces != null) {
    tmp21 = surfaces[ApplicationWidgetConfigSurface.ApplicationWidgetConfigSurface.MINI_PROFILE];
  }
  obj2.miniProfile = null != tmp21;
  const result = vibegrationsPreviewModes.profileSurfaceAvailability(obj2);
  if (null == tmp11) {
    class T {
      constructor() {
        return closure_1_5.getId();
      }
    }
    const data = ApplicationActionCreators.useApplication(previewApplicationId).data;
    let tmp26 = null != previewApplicationId;
    if (tmp26) {
      let id;
      if (data != null) {
        const bot = data.bot;
        if (bot != null) {
          id = bot.id;
        }
      }
      tmp26 = null != id;
    }
    const tmpResult8 = ApplicationActionCreators;
    const application = ApplicationActionCreators.useApplication(applicationId);
    ({ data: data2, isLoading } = application);
    if (!declaredActivity) {
      declaredActivity = canLaunchContextlessFrame.canLaunchContextlessFrame(data2);
      const tmpResult10 = canLaunchContextlessFrame;
    }
    const tmpResult9 = ApplicationActionCreators;
    const obj3 = { installScope, hasFrame: declaredActivity, hasProfileWidget: tmp23, hasBotDm: tmp26, ownerAuthorizationRevoked };
    const result1 = vibegrationsPreviewModes.previewModeAvailability(obj3);
    let previewMode = null;
    if (!(null != applicationId && isLoading && null == data2)) {
      previewMode = vibegrationsPreviewModes.resolvePreviewMode(tmp6, result1);
      const tmpResult12 = vibegrationsPreviewModes;
    }
    if (cResult[2] === result1) {
      if (cResult[3] === tmp30) {
        if (cResult[4] === previewMode) {
          if (cResult[5] === tmp11) {
            let tmp33 = cResult[6];
          }
          return tmp33;
        }
      }
    }
    const obj4 = { availability: result1, isResolving: null != applicationId && isLoading && null == data2, activeMode: previewMode, setMode: tmp7, widgetApplicationId: tmp11 };
    cResult[2] = result1;
    cResult[3] = null != applicationId && isLoading && null == data2;
    cResult[4] = previewMode;
    cResult[5] = tmp11;
    cResult[6] = obj4;
    tmp33 = obj4;
    const tmpResult11 = vibegrationsPreviewModes;
  }
  const tmpResult7 = vibegrationsPreviewModes;
}) : ((arg0) => {
  ({ applicationId, previewApplicationId, declaredActivity, mainCardOnly } = arg0);
  ({ installScope, ownerAuthorizationRevoked } = arg0);
  if (mainCardOnly === undefined) {
    mainCardOnly = false;
  }
  [tmp2, tmp3] = noop.useState(null);
  const tmp4 = _slicedToArray(noop.useState(applicationId), 2);
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
  const tmp = _slicedToArray(noop.useState(null), 2);
  const items = [AuthenticationStore];
  const stateFromStores = initialize.useStateFromStores(items, () => id.getId());
  const tmp12 = tmp7;
  const applicationWidgetConfig = useUserApplicationWidgetDataDefault(stateFromStores, tmp12).applicationWidgetConfig;
  let surfaces;
  if (applicationWidgetConfig != null) {
    surfaces = applicationWidgetConfig.surfaces;
  }
  let tmp14;
  if (surfaces != null) {
    tmp14 = surfaces[ApplicationWidgetConfigSurface.ApplicationWidgetConfigSurface.WIDGET_TOP];
  }
  const obj2 = { widgetTop: null != tmp14, widgetBottom: null, miniProfile: null };
  let tmp15;
  if (surfaces != null) {
    tmp15 = surfaces[ApplicationWidgetConfigSurface.ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  }
  obj2.widgetBottom = null != tmp15;
  let tmp16;
  if (surfaces != null) {
    tmp16 = surfaces[ApplicationWidgetConfigSurface.ApplicationWidgetConfigSurface.MINI_PROFILE];
  }
  obj2.miniProfile = null != tmp16;
  const result = vibegrationsPreviewModes.profileSurfaceAvailability(obj2);
  if (null == tmp7) {
    const data = ApplicationActionCreators.useApplication(previewApplicationId).data;
    let tmp21 = null != previewApplicationId;
    if (tmp21) {
      let id;
      if (data != null) {
        const bot = data.bot;
        if (bot != null) {
          id = bot.id;
        }
      }
      tmp21 = null != id;
    }
    const tmp8Result6 = ApplicationActionCreators;
    const application = ApplicationActionCreators.useApplication(applicationId);
    ({ data: data2, isLoading } = application);
    if (!declaredActivity) {
      declaredActivity = canLaunchContextlessFrame.canLaunchContextlessFrame(data2);
      const tmp8Result8 = canLaunchContextlessFrame;
    }
    const tmp8Result7 = ApplicationActionCreators;
    const obj3 = { installScope, hasFrame: declaredActivity, hasProfileWidget: tmp18, hasBotDm: tmp21, ownerAuthorizationRevoked };
    const result1 = vibegrationsPreviewModes.previewModeAvailability(obj3);
    const obj4 = { availability: result1, isResolving: null != applicationId && isLoading && null == data2, activeMode: null, setMode: null, widgetApplicationId: null };
    let previewMode = null;
    if (!(null != applicationId && isLoading && null == data2)) {
      previewMode = vibegrationsPreviewModes.resolvePreviewMode(tmp2, result1);
      const tmp8Result10 = vibegrationsPreviewModes;
    }
    obj4.activeMode = previewMode;
    obj4.setMode = tmp3;
    obj4.widgetApplicationId = tmp7;
    return obj4;
  }
  const tmp8Result = vibegrationsPreviewModes;
});