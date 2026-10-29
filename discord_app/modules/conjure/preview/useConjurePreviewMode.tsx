// discord_app/modules/conjure/preview/useConjurePreviewMode.tsx
import EmbeddedSurfaceType from "../../../../discord_common/js/shared/shared-constants/EmbeddedSurfaceType.tsx";
import conjurePreviewSurface from "conjurePreviewSurface.tsx";
import conjurePreviewFrameSurfaces from "conjurePreviewFrameSurfaces.tsx";
import leaveFrame from "../../frames/leaveFrame.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

require = fn;
const isLaunched = fn(6834).isLaunched;
const ReactCompilerGating = fn(558);
let closure_7 = [];
function resolvePreviewAppChannel(arg0, arg1, arr) {
  let tmp = null;
  if (arg1 === EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL) {
    tmp = null;
    if (arr.length >= 2) {
      let first = arg0;
      if (null == arg0) {
        first = arr[0];
      }
      tmp = first;
    }
  }
  return tmp;
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/preview/useConjurePreviewMode.tsx");

export const useConjurePreviewMode = ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjurePreviewMode(applicationId) {
      const cResult = applicationId(mode[5]).c(33);
      applicationId = applicationId.applicationId;
      ({
        previewApplicationId,
        declaredActivity,
        previewSupportedSurfaces,
        mainCardOnly,
        supportsOverlay,
        previewAppChannels,
        initialSelection,
        onSelectionChange,
      } = applicationId);
      let tmp4 = undefined !== mainCardOnly;
      ({ installScope, ownerAuthorizationRevoked } = applicationId);
      if (tmp4) {
        tmp4 = mainCardOnly;
      }
      if (undefined === previewAppChannels) {
        previewAppChannels = closure_7;
      }
      mode = undefined;
      if (initialSelection != null) {
        mode = initialSelection.mode;
      }
      if (mode == null) {
        mode = null;
      }
      const tmp8 = first1(first2.useState(mode), 2);
      mode = tmp8[0];
      frameSurface = undefined;
      if (initialSelection != null) {
        frameSurface = initialSelection.frameSurface;
      }
      if (frameSurface == null) {
        frameSurface = null;
      }
      const tmp7Result = first1(first2.useState(frameSurface), 2);
      first1 = tmp7Result[0];
      appChannel = undefined;
      if (initialSelection != null) {
        appChannel = initialSelection.appChannel;
      }
      if (appChannel == null) {
        appChannel = null;
      }
      const tmp7Result3 = first1(first2.useState(appChannel), 2);
      first2 = tmp7Result3[0];
      const tmp7Result4 = first1(first2.useState(applicationId), 2);
      const first3 = tmp7Result4[0];
      if (first3 !== applicationId) {
        tmp7Result4[1](applicationId);
        if (null != first3) {
          tmp8[1](null);
          tmp7Result[1](null);
          tmp7Result3[1](null);
        }
      }
      AuthenticationStore = obj2.useRef(onSelectionChange);
      if (cResult[0] !== onSelectionChange) {
        const fn = function q() {
          closure_5.current = onSelectionChange;
        };
        cResult[0] = onSelectionChange;
        cResult[1] = fn;
        let tmp22 = fn;
      } else {
        tmp22 = cResult[1];
      }
      const layoutEffect = obj2.useLayoutEffect(tmp22);
      if (cResult[2] === mode) {
        if (cResult[3] === first2) {
          if (cResult[4] === first1) {
            let tmp24 = cResult[5];
            let tmp25 = cResult[6];
          }
          const effect = obj2.useEffect(tmp24, tmp25);
          let tmp27 = null;
          if (null != previewApplicationId) {
            tmp27 = null;
            if (previewApplicationId === applicationId) {
              tmp27 = previewApplicationId;
            }
          }
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const items = [AuthenticationStore];
            class V {
              constructor() {
                return closure_5.getId();
              }
            }
            cResult[7] = items;
            cResult[8] = V;
            let tmp30 = V;
            let tmp29 = items;
          } else {
            tmp29 = cResult[7];
            tmp30 = cResult[8];
          }
          const stateFromStores = tmp(tmp2[6]).useStateFromStores(tmp29, tmp30);
          const tmp35 = tmp27;
          const tmpResult = tmp(tmp2[6]);
          const applicationWidgetConfig = onSelectionChange(tmp2[7])(stateFromStores, tmp35).applicationWidgetConfig;
          let surfaces;
          if (applicationWidgetConfig != null) {
            surfaces = applicationWidgetConfig.surfaces;
          }
          const tmp34 = onSelectionChange(tmp2[7]);
          let tmp37;
          if (surfaces != null) {
            tmp37 = surfaces[tmp(undefined, tmp2[9]).ApplicationWidgetConfigSurface.WIDGET_TOP];
          }
          let obj3 = { widgetTop: null != tmp37, widgetBottom: null, miniProfile: null };
          let tmp38;
          if (surfaces != null) {
            tmp38 = surfaces[tmp(undefined, tmp2[9]).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
          }
          obj3.widgetBottom = null != tmp38;
          let tmp39;
          if (surfaces != null) {
            tmp39 = surfaces[tmp(undefined, tmp2[9]).ApplicationWidgetConfigSurface.MINI_PROFILE];
          }
          obj3.miniProfile = null != tmp39;
          const result = tmp(tmp2[8]).profileSurfaceAvailability(obj3);
          if (null == tmp27) {
            class V {
              constructor() {
                return closure_5.getId();
              }
            }
            const data = tmp(tmp2[10]).useApplication(previewApplicationId).data;
            let tmp44 = null != previewApplicationId;
            if (tmp44) {
              let id;
              if (data != null) {
                const bot = data.bot;
                if (bot != null) {
                  id = bot.id;
                }
              }
              tmp44 = null != id;
            }
            const tmpResult10 = tmp(tmp2[10]);
            const application = tmp(tmp2[10]).useApplication(applicationId);
            ({ data: data2, isLoading } = application);
            if (!declaredActivity) {
              declaredActivity = tmp(tmp2[11]).canLaunchContextlessFrame(data2);
              const tmpResult12 = tmp(tmp2[11]);
            }
            const tmpResult11 = tmp(tmp2[10]);
            const obj4 = { legacy: null, widgetResolvable: null, botDmResolvable: null };
            const obj5 = { hasFrame: declaredActivity, hasProfileWidget: tmp41, hasBotDm: tmp44 };
            obj4.legacy = obj5;
            obj4.widgetResolvable = null != tmp27;
            obj4.botDmResolvable = tmp44;
            const result1 = tmp(tmp2[8]).previewCapabilitiesFromSurfaces(previewSupportedSurfaces, obj4);
            const tmpResult13 = tmp(tmp2[8]);
            const obj6 = { installScope };
            const merged = Object.assign(result1);
            obj6.hasOverlay = tmp5;
            obj6.ownerAuthorizationRevoked = ownerAuthorizationRevoked;
            const result2 = tmp(tmp2[8]).previewModeAvailability(obj6);
            if (cResult[9] !== previewSupportedSurfaces) {
              const result3 = tmp(tmp2[12]).previewFrameSurfaceOptions(previewSupportedSurfaces);
              class V {
                constructor() {
                  return closure_5.getId();
                }
              }
              cResult[10] = result3;
              let tmp53 = result3;
              const tmpResult15 = tmp(tmp2[12]);
            } else {
              tmp53 = cResult[10];
            }
            if (cResult[11] === tmp53) {
              if (cResult[12] === previewAppChannels) {
                if (cResult[13] === first2) {
                  if (cResult[14] === first1) {
                    let previewFrameSurface = cResult[15];
                    let tmp56 = cResult[16];
                  }
                  closure_7 = tmp56;
                  if (cResult[17] !== tmp56) {
                    let tmp61;
                    if (null != tmp56) {
                      const obj7 = { customId: tmp56 };
                      tmp61 = obj7;
                    }
                    class V {
                      constructor() {
                        return closure_5.getId();
                      }
                    }
                    cResult[18] = tmp61;
                  }
                  class V {
                    constructor() {
                      return closure_5.getId();
                    }
                  }
                  function he() {
                    if (null != applicationId) {
                      const conjureBuilderPreviewFrames = conjurePreviewSurface.getConjureBuilderPreviewFrames(tmp);
                      for (const item10007 of conjureBuilderPreviewFrames) {
                        let obj = conjurePreviewFrameSurfaces;
                        let tmp9 = item10007.surface.type !== obj.previewFrameLaunchType(previewFrameSurface);
                        if (isLaunched(item10007)) {
                          let customId = item10007.data.launch.customId;
                        } else {
                          let launch = item10007.launch;
                          if (launch != null) {
                            customId = launch.customId;
                          }
                        }
                        let tmp13 = tmp9;
                        if (!tmp9) {
                          let tmp14 = customId;
                          if (customId == null) {
                            tmp14 = null;
                          }
                          tmp13 = tmp14 !== closure_7;
                        }
                        if (tmp13) {
                          let tmp5Result = leaveFrame;
                          let leaveFrameResult = tmp5Result.leaveFrame(item10007.id);
                        }
                        continue;
                      }
                    }
                  }
                  const items1 = [applicationId, tmp55, tmp56];
                  cResult[19] = tmp56;
                  cResult[20] = applicationId;
                  cResult[21] = tmp55;
                  cResult[22] = he;
                  cResult[23] = items1;
                }
              }
            }
            const tmpResult14 = tmp(tmp2[8]);
            previewFrameSurface = tmp(tmp2[12]).resolvePreviewFrameSurface(first1, tmp53);
            let tmp58 = null;
            if (previewFrameSurface === tmp(tmp2[15]).EmbeddedSurfaceType.APP_CHANNEL) {
              tmp58 = null;
              if (previewAppChannels.length >= 2) {
                if (null == first2) {
                  let first4 = previewAppChannels[0];
                } else {
                  first4 = first2;
                }
                tmp58 = first4;
              }
            }
            cResult[11] = tmp53;
            cResult[12] = previewAppChannels;
            cResult[13] = first2;
            cResult[14] = first1;
            cResult[15] = previewFrameSurface;
            cResult[16] = tmp58;
            tmp56 = tmp58;
            const tmpResult16 = tmp(tmp2[12]);
          }
          const tmpResult9 = tmp(tmp2[8]);
        }
      }
      class J {
        constructor() {
          current = closure_5.current;
          if (current != null) {
            obj = { mode: null, frameSurface: null, appChannel: null };
            tmp2 = closure_2;
            obj.mode = closure_2;
            tmp3 = closure_3;
            obj.frameSurface = closure_3;
            tmp4 = closure_4;
            obj.appChannel = closure_4;
            currentResult = current(obj);
          }
          return;
        }
      }
      const items2 = [mode, first1, first2];
      cResult[2] = mode;
      cResult[3] = first2;
      cResult[4] = first1;
      cResult[5] = J;
      cResult[6] = items2;
      tmp25 = items2;
      tmp24 = J;
      let obj = applicationId(mode[5]);
      tmp5 = undefined !== supportsOverlay && supportsOverlay;
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
      let previewAppChannels = applicationId.previewAppChannels;
      if (previewAppChannels === undefined) {
        previewAppChannels = previewFrameSurface;
      }
      ({ initialSelection, onSelectionChange } = applicationId);
      let first1;
      previewFrameSurface = undefined;
      let first2;
      let mode;
      if (initialSelection != null) {
        mode = initialSelection.mode;
      }
      if (mode == null) {
        mode = null;
      }
      const tmp3 = mode(first1.useState(mode), 2);
      mode = tmp3[0];
      frameSurface = undefined;
      if (initialSelection != null) {
        frameSurface = initialSelection.frameSurface;
      }
      if (frameSurface == null) {
        frameSurface = null;
      }
      const tmp2Result = mode(first1.useState(frameSurface), 2);
      first1 = tmp2Result[0];
      appChannel = undefined;
      if (initialSelection != null) {
        appChannel = initialSelection.appChannel;
      }
      if (appChannel == null) {
        appChannel = null;
      }
      const tmp2Result3 = mode(first1.useState(appChannel), 2);
      first2 = tmp2Result3[0];
      const tmp2Result4 = mode(first1.useState(applicationId), 2);
      const first3 = tmp2Result4[0];
      if (first3 !== applicationId) {
        tmp2Result4[1](applicationId);
        if (null != first3) {
          tmp5(null);
          tmp9(null);
          tmp13(null);
        }
      }
      first1.useRef(onSelectionChange);
      const layoutEffect = obj.useLayoutEffect(() => {
        closure_6.current = onSelectionChange;
      });
      const items = [mode, first1, first2];
      const effect = obj.useEffect(() => {
        const current = ref.current;
        if (current != null) {
          const obj = { mode, frameSurface: first1, appChannel: first2 };
          current(obj);
        }
      }, items);
      let tmp22 = null;
      if (null != previewApplicationId) {
        tmp22 = null;
        if (previewApplicationId === applicationId) {
          tmp22 = previewApplicationId;
        }
      }
      const items1 = [first2];
      const stateFromStores = applicationId(onSelectionChange[6]).useStateFromStores(items1, () => first2.getId());
      const obj2 = applicationId(onSelectionChange[6]);
      const tmp27 = tmp22;
      const applicationWidgetConfig = previewSupportedSurfaces(onSelectionChange[7])(
        stateFromStores,
        tmp27,
      ).applicationWidgetConfig;
      let surfaces;
      if (applicationWidgetConfig != null) {
        surfaces = applicationWidgetConfig.surfaces;
      }
      const tmp26 = previewSupportedSurfaces(onSelectionChange[7]);
      let tmp29;
      if (surfaces != null) {
        tmp29 = surfaces[tmp23(undefined, onSelectionChange[9]).ApplicationWidgetConfigSurface.WIDGET_TOP];
      }
      let obj3 = { widgetTop: null != tmp29, widgetBottom: null, miniProfile: null };
      let tmp30;
      if (surfaces != null) {
        tmp30 = surfaces[tmp23(undefined, onSelectionChange[9]).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
      }
      obj3.widgetBottom = null != tmp30;
      let tmp31;
      if (surfaces != null) {
        tmp31 = surfaces[tmp23(undefined, onSelectionChange[9]).ApplicationWidgetConfigSurface.MINI_PROFILE];
      }
      obj3.miniProfile = null != tmp31;
      const result = applicationId(onSelectionChange[8]).profileSurfaceAvailability(obj3);
      if (null == tmp22) {
        const data = tmp23(onSelectionChange[10]).useApplication(previewApplicationId).data;
        let tmp36 = null != previewApplicationId;
        if (tmp36) {
          let id;
          if (data != null) {
            const bot = data.bot;
            if (bot != null) {
              id = bot.id;
            }
          }
          tmp36 = null != id;
        }
        const tmp23Result8 = tmp23(onSelectionChange[10]);
        const application = tmp23(onSelectionChange[10]).useApplication(applicationId);
        ({ data: data2, isLoading } = application);
        if (!declaredActivity) {
          declaredActivity = tmp23(onSelectionChange[11]).canLaunchContextlessFrame(data2);
          const tmp23Result10 = tmp23(onSelectionChange[11]);
        }
        const tmp23Result9 = tmp23(onSelectionChange[10]);
        const obj4 = { legacy: null, widgetResolvable: null, botDmResolvable: null };
        const obj5 = { hasFrame: declaredActivity, hasProfileWidget: tmp33, hasBotDm: tmp36 };
        obj4.legacy = obj5;
        obj4.widgetResolvable = null != tmp22;
        obj4.botDmResolvable = tmp36;
        const result1 = tmp23(onSelectionChange[8]).previewCapabilitiesFromSurfaces(previewSupportedSurfaces, obj4);
        const tmp23Result11 = tmp23(onSelectionChange[8]);
        const obj6 = { installScope };
        const merged = Object.assign(result1);
        obj6.hasOverlay = flag2;
        obj6.ownerAuthorizationRevoked = ownerAuthorizationRevoked;
        const result2 = tmp23(onSelectionChange[8]).previewModeAvailability(obj6);
        const items2 = [previewSupportedSurfaces];
        const memo = obj.useMemo(
          () => conjurePreviewFrameSurfaces.previewFrameSurfaceOptions(previewSupportedSurfaces),
          items2,
        );
        const tmp23Result12 = tmp23(onSelectionChange[8]);
        previewFrameSurface = tmp23(onSelectionChange[12]).resolvePreviewFrameSurface(first1, memo);
        let tmp47 = null;
        if (previewFrameSurface === tmp23(onSelectionChange[15]).EmbeddedSurfaceType.APP_CHANNEL) {
          tmp47 = null;
          if (previewAppChannels.length >= 2) {
            if (null == first2) {
              first2 = previewAppChannels[0];
            }
            tmp47 = first2;
          }
        }
        first2 = tmp47;
        const items3 = [tmp47];
        const items4 = [applicationId, previewFrameSurface, tmp47];
        const memo1 = obj.useMemo(() => {
          let tmp2;
          if (null != first2) {
            const obj = { customId: tmp };
            tmp2 = obj;
          }
          return tmp2;
        }, items3);
        const effect1 = obj.useEffect(() => {
          if (null != applicationId) {
            const conjureBuilderPreviewFrames = conjurePreviewSurface.getConjureBuilderPreviewFrames(tmp);
            for (const item10007 of conjureBuilderPreviewFrames) {
              let obj = conjurePreviewFrameSurfaces;
              let tmp9 = item10007.surface.type !== obj.previewFrameLaunchType(previewFrameSurface);
              if (isLaunched(item10007)) {
                let customId = item10007.data.launch.customId;
              } else {
                let launch = item10007.launch;
                if (launch != null) {
                  customId = launch.customId;
                }
              }
              let tmp13 = tmp9;
              if (!tmp9) {
                let tmp14 = customId;
                if (customId == null) {
                  tmp14 = null;
                }
                tmp13 = tmp14 !== first2;
              }
              if (tmp13) {
                let tmp5Result = leaveFrame;
                let leaveFrameResult = tmp5Result.leaveFrame(item10007.id);
              }
              continue;
            }
          }
        }, items4);
        const obj7 = {
          availability: result2,
          isResolving: null != applicationId && isLoading && null == data2,
          activeMode: null,
          setMode: null,
          frameSurface: null,
          frameSurfaceOptions: null,
          setFrameSurface: null,
          appChannel: null,
          setAppChannel: null,
          frameLaunchParams: null,
          widgetApplicationId: null,
        };
        let previewMode = null;
        if (!(null != applicationId && isLoading && null == data2)) {
          previewMode = tmp23(onSelectionChange[8]).resolvePreviewMode(mode, result2);
          const tmp23Result14 = tmp23(onSelectionChange[8]);
        }
        obj7.activeMode = previewMode;
        obj7.setMode = tmp5;
        obj7.frameSurface = previewFrameSurface;
        obj7.frameSurfaceOptions = memo;
        obj7.setFrameSurface = tmp9;
        obj7.appChannel = tmp47;
        obj7.setAppChannel = tmp13;
        obj7.frameLaunchParams = memo1;
        obj7.widgetApplicationId = tmp22;
        return obj7;
      }
      const tmp23Result = applicationId(onSelectionChange[8]);
    };
export { resolvePreviewAppChannel };
