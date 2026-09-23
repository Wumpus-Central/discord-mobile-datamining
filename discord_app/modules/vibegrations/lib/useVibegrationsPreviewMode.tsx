// === Module 17028: useVibegrationsPreviewMode ===

// Module 17028 (useVibegrationsPreviewMode)
import initialize from "initialize" /* 504 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 7494 */;
import ApplicationWidgetConfigSurface from "ApplicationWidgetConfigSurface" /* 9363 */;
import canLaunchFrame from "canLaunchFrame" /* 9673 */;
import useUserApplicationWidgetDataDefault from "useUserApplicationWidgetData" /* 17029 */;
import vibegrationsPreviewModes from "vibegrationsPreviewModes" /* 17030 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsPreviewMode.tsx");

export const useVibegrationsPreviewMode = function useVibegrationsPreviewMode(arg0) {
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
    if (!declaredActivity) {
      declaredActivity = canLaunchFrame.canLaunchFrame(tmp25);
      const tmp8Result8 = canLaunchFrame;
    }
    const tmp8Result7 = ApplicationActionCreators;
    const obj3 = { installScope, hasFrame: declaredActivity, hasProfileWidget: tmp18, hasBotDm: tmp21, ownerAuthorizationRevoked };
    const result1 = vibegrationsPreviewModes.previewModeAvailability(obj3);
    const obj4 = { availability: result1, isResolving: null != applicationId && application.isLoading, activeMode: null, setMode: null, widgetApplicationId: null };
    let previewMode = null;
    if (!(null != applicationId && application.isLoading)) {
      previewMode = vibegrationsPreviewModes.resolvePreviewMode(tmp2, result1);
      const tmp8Result10 = vibegrationsPreviewModes;
    }
    obj4.activeMode = previewMode;
    obj4.setMode = tmp3;
    obj4.widgetApplicationId = tmp7;
    return obj4;
  }
  const tmp8Result = vibegrationsPreviewModes;
};