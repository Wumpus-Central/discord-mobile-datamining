// discord_app/modules/conjure/preview/useConjurePreviewMode.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import ApplicationActionCreators from "../../applications/ApplicationActionCreators.tsx";
import ApplicationWidgetConfigSurface from "../../../../discord_common/js/shared/shared-constants/ApplicationWidgetConfigSurface.tsx";
import canLaunchContextlessFrame from "../../frames/utils/canLaunchContextlessFrame.tsx";
import useUserApplicationWidgetDataDefault from "../../application_widget/hooks/useUserApplicationWidgetData.tsx";
import conjurePreviewModes from "conjurePreviewModes.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/preview/useConjurePreviewMode.tsx");

export const useConjurePreviewMode = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
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
      const tmp5 = _slicedToArray(noop.useState(null), 2);
      const stateFromStores = initialize.useStateFromStores(tmp12, tmp13);
      const tmp17 = tmp11;
      const tmpResult = initialize;
      const applicationWidgetConfig = useUserApplicationWidgetDataDefault(
        stateFromStores,
        tmp17,
      ).applicationWidgetConfig;
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
      const result = conjurePreviewModes.profileSurfaceAvailability(obj2);
      if (null == tmp11) {
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
        const obj3 = {
          installScope,
          hasFrame: declaredActivity,
          hasProfileWidget: tmp23,
          hasBotDm: tmp26,
          ownerAuthorizationRevoked,
        };
        const result1 = conjurePreviewModes.previewModeAvailability(obj3);
        let previewMode = null;
        if (!(null != applicationId && isLoading && null == data2)) {
          previewMode = conjurePreviewModes.resolvePreviewMode(tmp6, result1);
          const tmpResult12 = conjurePreviewModes;
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
        const obj4 = {
          availability: result1,
          isResolving: null != applicationId && isLoading && null == data2,
          activeMode: previewMode,
          setMode: tmp7,
          widgetApplicationId: tmp11,
        };
        cResult[2] = result1;
        cResult[3] = null != applicationId && isLoading && null == data2;
        cResult[4] = previewMode;
        cResult[5] = tmp11;
        cResult[6] = obj4;
        tmp33 = obj4;
        const tmpResult11 = conjurePreviewModes;
      }
      const tmpResult7 = conjurePreviewModes;
    }
  : (arg0) => {
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
      const applicationWidgetConfig = useUserApplicationWidgetDataDefault(
        stateFromStores,
        tmp12,
      ).applicationWidgetConfig;
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
      const result = conjurePreviewModes.profileSurfaceAvailability(obj2);
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
        const obj3 = {
          installScope,
          hasFrame: declaredActivity,
          hasProfileWidget: tmp18,
          hasBotDm: tmp21,
          ownerAuthorizationRevoked,
        };
        const result1 = conjurePreviewModes.previewModeAvailability(obj3);
        const obj4 = {
          availability: result1,
          isResolving: null != applicationId && isLoading && null == data2,
          activeMode: null,
          setMode: null,
          widgetApplicationId: null,
        };
        let previewMode = null;
        if (!(null != applicationId && isLoading && null == data2)) {
          previewMode = conjurePreviewModes.resolvePreviewMode(tmp2, result1);
          const tmp8Result10 = conjurePreviewModes;
        }
        obj4.activeMode = previewMode;
        obj4.setMode = tmp3;
        obj4.widgetApplicationId = tmp7;
        return obj4;
      }
      const tmp8Result = conjurePreviewModes;
    };
