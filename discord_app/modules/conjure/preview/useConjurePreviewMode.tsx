// discord_app/modules/conjure/preview/useConjurePreviewMode.tsx
import leaveFrame from "../../frames/leaveFrame.tsx";
import conjurePreviewSurface from "conjurePreviewSurface.tsx";
import conjurePreviewFrameSurfaces from "conjurePreviewFrameSurfaces.tsx";
import useUserApplicationWidgetDataDefault from "../../application_widget/hooks/useUserApplicationWidgetData.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/preview/useConjurePreviewMode.tsx");

export const useConjurePreviewMode = ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjurePreviewMode(applicationId) {
      const cResult = applicationId(576).c(18);
      applicationId = applicationId.applicationId;
      ({ previewApplicationId, declaredActivity, previewSupportedSurfaces, mainCardOnly, supportsOverlay } =
        applicationId);
      let tmp4 = undefined !== mainCardOnly;
      ({ installScope, ownerAuthorizationRevoked } = applicationId);
      if (tmp4) {
        tmp4 = mainCardOnly;
      }
      let obj = applicationId(576);
      const tmp5 = undefined !== supportsOverlay && supportsOverlay;
      [r10026, tmp7] = noop.useState(null);
      const tmp6 = _slicedToArray(noop.useState(null), 2);
      [tmp9, tmp10] = noop.useState(null);
      const tmp11 = _slicedToArray(noop.useState(applicationId), 2);
      if (tmp11[0] !== applicationId) {
        tmp11[1](applicationId);
        tmp7(null);
        tmp10(null);
      }
      let tmp15 = null;
      if (null != previewApplicationId) {
        tmp15 = null;
        if (previewApplicationId === applicationId) {
          tmp15 = previewApplicationId;
        }
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthenticationStore];
        class B {
          constructor() {
            return closure_1_5.getId();
          }
        }
        cResult[0] = items;
        cResult[1] = B;
        tmp16 = items;
      } else {
        [tmp16, tmp17] = cResult;
      }
      const tmp8 = _slicedToArray(noop.useState(null), 2);
      const stateFromStores = applicationId(504).useStateFromStores(tmp16, B);
      const tmp21 = tmp15;
      const tmpResult = applicationId(504);
      const applicationWidgetConfig = useUserApplicationWidgetDataDefault(
        stateFromStores,
        tmp21,
      ).applicationWidgetConfig;
      let surfaces;
      if (applicationWidgetConfig != null) {
        surfaces = applicationWidgetConfig.surfaces;
      }
      let tmp23;
      if (surfaces != null) {
        tmp23 = surfaces[tmp(undefined, 13278).ApplicationWidgetConfigSurface.WIDGET_TOP];
      }
      let obj3 = { widgetTop: null != tmp23, widgetBottom: null, miniProfile: null };
      let tmp24;
      if (surfaces != null) {
        tmp24 = surfaces[tmp(undefined, 13278).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
      }
      obj3.widgetBottom = null != tmp24;
      let tmp25;
      if (surfaces != null) {
        tmp25 = surfaces[tmp(undefined, 13278).ApplicationWidgetConfigSurface.MINI_PROFILE];
      }
      obj3.miniProfile = null != tmp25;
      const result = applicationId(17012).profileSurfaceAvailability(obj3);
      if (null == tmp15) {
        class B {
          constructor() {
            return closure_1_5.getId();
          }
        }
        const data = tmp(6849).useApplication(previewApplicationId).data;
        let tmp30 = null != previewApplicationId;
        if (tmp30) {
          let id;
          if (data != null) {
            const bot = data.bot;
            if (bot != null) {
              id = bot.id;
            }
          }
          tmp30 = null != id;
        }
        const tmpResult10 = tmp(6849);
        const application = tmp(6849).useApplication(applicationId);
        ({ data: data2, isLoading } = application);
        if (!declaredActivity) {
          declaredActivity = tmp(10768).canLaunchContextlessFrame(data2);
          const tmpResult12 = tmp(10768);
        }
        const tmpResult11 = tmp(6849);
        const obj4 = { legacy: null, widgetResolvable: null, botDmResolvable: null };
        const obj5 = { hasFrame: declaredActivity, hasProfileWidget: tmp27, hasBotDm: tmp30 };
        obj4.legacy = obj5;
        obj4.widgetResolvable = null != tmp15;
        obj4.botDmResolvable = tmp30;
        const result1 = tmp(17012).previewCapabilitiesFromSurfaces(previewSupportedSurfaces, obj4);
        const tmpResult13 = tmp(17012);
        const obj6 = { installScope };
        const merged = Object.assign(result1);
        obj6.hasOverlay = tmp5;
        obj6.ownerAuthorizationRevoked = ownerAuthorizationRevoked;
        const result2 = tmp(17012).previewModeAvailability(obj6);
        if (cResult[2] !== previewSupportedSurfaces) {
          const result3 = tmp(11374).previewFrameSurfaceOptions(previewSupportedSurfaces);
          cResult[2] = previewSupportedSurfaces;
          class B {
            constructor() {
              return closure_1_5.getId();
            }
          }
          cResult[3] = result3;
          let tmp39 = result3;
          const tmpResult15 = tmp(11374);
        } else {
          tmp39 = cResult[3];
        }
        if (cResult[4] === tmp39) {
          if (cResult[5] === tmp9) {
            let tmp41 = cResult[6];
          }
          importDefault = tmp41;
          if (cResult[7] === applicationId) {
            if (cResult[8] === tmp41) {
              let tmp43 = cResult[9];
              let tmp44 = cResult[10];
            }
            const effect = noop.useEffect(tmp43, tmp44);
            class B {
              constructor() {
                return closure_1_5.getId();
              }
            }
            if (cResult[11] === result2) {
              if (cResult[12] === tmp41) {
                if (cResult[13] === tmp39) {
                  if (cResult[14] === tmp34) {
                    if (cResult[15] === tmp47) {
                      if (cResult[16] === tmp15) {
                        let tmp48 = cResult[17];
                      }
                      return tmp48;
                    }
                  }
                }
              }
            }
            const obj7 = {
              availability: result2,
              isResolving: tmp34,
              activeMode: null,
              setMode: tmp7,
              frameSurface: tmp41,
              frameSurfaceOptions: tmp39,
              setFrameSurface: tmp10,
              widgetApplicationId: tmp15,
            };
            cResult[11] = result2;
            cResult[12] = tmp41;
            cResult[13] = tmp39;
            cResult[14] = tmp34;
            cResult[15] = null;
            cResult[16] = tmp15;
            cResult[17] = obj7;
            tmp48 = obj7;
          }
          class B {
            constructor() {
              return closure_1_5.getId();
            }
          }
          const items1 = [applicationId, tmp41];
          cResult[7] = applicationId;
          cResult[8] = tmp41;
          cResult[9] = tmp45;
          cResult[10] = items1;
          tmp44 = items1;
          tmp43 = tmp45;
        }
        const tmpResult14 = tmp(17012);
        const previewFrameSurface = tmp(11374).resolvePreviewFrameSurface(tmp9, tmp39);
        cResult[4] = tmp39;
        cResult[5] = tmp9;
        cResult[6] = previewFrameSurface;
        tmp41 = previewFrameSurface;
        const tmpResult16 = tmp(11374);
      }
      const tmpResult9 = applicationId(17012);
    }
  : function useConjurePreviewMode(applicationId) {
      applicationId = applicationId.applicationId;
      ({ previewApplicationId, declaredActivity, previewSupportedSurfaces } = applicationId);
      let flag = applicationId.mainCardOnly;
      ({ installScope, ownerAuthorizationRevoked } = applicationId);
      if (flag === undefined) {
        flag = false;
      }
      let flag2 = applicationId.supportsOverlay;
      if (flag2 === undefined) {
        flag2 = false;
      }
      let previewFrameSurface;
      [tmp2, tmp3] = noop.useState(null);
      const tmp = _slicedToArray(noop.useState(null), 2);
      [tmp5, tmp6] = noop.useState(null);
      const tmp7 = _slicedToArray(noop.useState(applicationId), 2);
      if (tmp7[0] !== applicationId) {
        tmp7[1](applicationId);
        tmp3(null);
        tmp6(null);
      }
      let tmp11 = null;
      if (null != previewApplicationId) {
        tmp11 = null;
        if (previewApplicationId === applicationId) {
          tmp11 = previewApplicationId;
        }
      }
      const tmp4 = _slicedToArray(noop.useState(null), 2);
      const items = [AuthenticationStore];
      const stateFromStores = applicationId(previewFrameSurface[5]).useStateFromStores(items, () => id.getId());
      const obj2 = applicationId(previewFrameSurface[5]);
      const tmp16 = tmp11;
      const applicationWidgetConfig = previewSupportedSurfaces(previewFrameSurface[6])(
        stateFromStores,
        tmp16,
      ).applicationWidgetConfig;
      let surfaces;
      if (applicationWidgetConfig != null) {
        surfaces = applicationWidgetConfig.surfaces;
      }
      const tmp15 = previewSupportedSurfaces(previewFrameSurface[6]);
      let tmp18;
      if (surfaces != null) {
        tmp18 = surfaces[tmp12(undefined, tmp13[8]).ApplicationWidgetConfigSurface.WIDGET_TOP];
      }
      let obj3 = { widgetTop: null != tmp18, widgetBottom: null, miniProfile: null };
      let tmp19;
      if (surfaces != null) {
        tmp19 = surfaces[tmp12(undefined, tmp13[8]).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
      }
      obj3.widgetBottom = null != tmp19;
      let tmp20;
      if (surfaces != null) {
        tmp20 = surfaces[tmp12(undefined, tmp13[8]).ApplicationWidgetConfigSurface.MINI_PROFILE];
      }
      obj3.miniProfile = null != tmp20;
      const result = applicationId(previewFrameSurface[7]).profileSurfaceAvailability(obj3);
      if (null == tmp11) {
        const data = tmp12(tmp13[9]).useApplication(previewApplicationId).data;
        let tmp25 = null != previewApplicationId;
        if (tmp25) {
          let id;
          if (data != null) {
            const bot = data.bot;
            if (bot != null) {
              id = bot.id;
            }
          }
          tmp25 = null != id;
        }
        const tmp12Result8 = tmp12(tmp13[9]);
        const application = tmp12(tmp13[9]).useApplication(applicationId);
        ({ data: data2, isLoading } = application);
        if (!declaredActivity) {
          declaredActivity = tmp12(tmp13[10]).canLaunchContextlessFrame(data2);
          const tmp12Result10 = tmp12(tmp13[10]);
        }
        const tmp12Result9 = tmp12(tmp13[9]);
        const obj4 = { legacy: null, widgetResolvable: null, botDmResolvable: null };
        const obj5 = { hasFrame: declaredActivity, hasProfileWidget: tmp22, hasBotDm: tmp25 };
        obj4.legacy = obj5;
        obj4.widgetResolvable = null != tmp11;
        obj4.botDmResolvable = tmp25;
        const result1 = tmp12(tmp13[7]).previewCapabilitiesFromSurfaces(previewSupportedSurfaces, obj4);
        const tmp12Result11 = tmp12(tmp13[7]);
        const obj6 = { installScope };
        const merged = Object.assign(result1);
        obj6.hasOverlay = flag2;
        obj6.ownerAuthorizationRevoked = ownerAuthorizationRevoked;
        const result2 = tmp12(tmp13[7]).previewModeAvailability(obj6);
        const items1 = [previewSupportedSurfaces];
        const memo = noop.useMemo(
          () => conjurePreviewFrameSurfaces.previewFrameSurfaceOptions(previewSupportedSurfaces),
          items1,
        );
        const tmp12Result12 = tmp12(tmp13[7]);
        previewFrameSurface = tmp12(tmp13[11]).resolvePreviewFrameSurface(tmp5, memo);
        const items2 = [applicationId, previewFrameSurface];
        const effect = noop.useEffect(() => {
          if (null != applicationId) {
            const conjureBuilderPreviewFrames = conjurePreviewSurface.getConjureBuilderPreviewFrames(tmp);
            for (const item10005 of conjureBuilderPreviewFrames) {
              let obj = conjurePreviewFrameSurfaces;
              if (item10005.surface.type !== obj.previewFrameLaunchType(previewFrameSurface)) {
                let tmp5Result = leaveFrame;
                let leaveFrameResult = tmp5Result.leaveFrame(item10005.id);
              }
              continue;
            }
          }
        }, items2);
        const obj7 = {
          availability: result2,
          isResolving: null != applicationId && isLoading && null == data2,
          activeMode: null,
          setMode: null,
          frameSurface: null,
          frameSurfaceOptions: null,
          setFrameSurface: null,
          widgetApplicationId: null,
        };
        let previewMode = null;
        if (!(null != applicationId && isLoading && null == data2)) {
          previewMode = tmp12(tmp13[7]).resolvePreviewMode(tmp2, result2);
          const tmp12Result14 = tmp12(tmp13[7]);
        }
        obj7.activeMode = previewMode;
        obj7.setMode = tmp3;
        obj7.frameSurface = previewFrameSurface;
        obj7.frameSurfaceOptions = memo;
        obj7.setFrameSurface = tmp6;
        obj7.widgetApplicationId = tmp11;
        return obj7;
      }
      const tmp12Result = applicationId(previewFrameSurface[7]);
    };
