// === Module 11703: useConjurePreviewMode ===

// Module 11703 (useConjurePreviewMode)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 6297 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 11032 */;
import conjurePreviewFrameSurfaces from "conjurePreviewFrameSurfaces" /* 11033 */;
import leaveFrame from "leaveFrame" /* 11041 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const isLaunched = fn(6296).isLaunched;
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

export const useConjurePreviewMode = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePreviewMode(applicationId) {
  const cResult = applicationId(576).c(26);
  applicationId = applicationId.applicationId;
  ({ previewApplicationId, declaredActivity, previewSupportedSurfaces, mainCardOnly, supportsOverlay, previewAppChannels } = applicationId);
  let tmp4 = undefined !== mainCardOnly;
  ({ installScope, ownerAuthorizationRevoked } = applicationId);
  if (tmp4) {
    tmp4 = mainCardOnly;
  }
  if (undefined === previewAppChannels) {
    previewAppChannels = closure_7;
  }
  let obj = applicationId(576);
  const tmp5 = undefined !== supportsOverlay && supportsOverlay;
  [r10027, tmp7] = noop.useState(null);
  const tmp6 = _slicedToArray(noop.useState(null), 2);
  [tmp9, tmp10] = noop.useState(null);
  const tmp8 = _slicedToArray(noop.useState(null), 2);
  [tmp12, tmp13] = noop.useState(null);
  let tmp14 = _slicedToArray(noop.useState(applicationId), 2);
  if (tmp14[0] !== applicationId) {
    tmp14[1](applicationId);
    tmp7(null);
    tmp10(null);
    tmp13(null);
  }
  let tmp19 = null;
  if (null != previewApplicationId) {
    tmp19 = null;
    if (previewApplicationId === applicationId) {
      tmp19 = previewApplicationId;
    }
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    class H {
      constructor() {
        return closure_1_5.getId();
      }
    }
    cResult[0] = items;
    cResult[1] = H;
    tmp20 = items;
  } else {
    [tmp20, tmp21] = cResult;
  }
  const tmp11 = _slicedToArray(noop.useState(null), 2);
  const stateFromStores = applicationId(504).useStateFromStores(tmp20, H);
  const tmp25 = tmp19;
  const tmpResult = applicationId(504);
  const applicationWidgetConfig = previewFrameSurface(11704)(stateFromStores, tmp25).applicationWidgetConfig;
  let surfaces;
  if (applicationWidgetConfig != null) {
    surfaces = applicationWidgetConfig.surfaces;
  }
  const tmp24 = previewFrameSurface(11704);
  let tmp27;
  if (surfaces != null) {
    tmp27 = surfaces[tmp(undefined, 11708).ApplicationWidgetConfigSurface.WIDGET_TOP];
  }
  const obj2 = { widgetTop: null != tmp27, widgetBottom: null, miniProfile: null };
  let tmp28;
  if (surfaces != null) {
    tmp28 = surfaces[tmp(undefined, 11708).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  }
  obj2.widgetBottom = null != tmp28;
  let tmp29;
  if (surfaces != null) {
    tmp29 = surfaces[tmp(undefined, 11708).ApplicationWidgetConfigSurface.MINI_PROFILE];
  }
  obj2.miniProfile = null != tmp29;
  const result = applicationId(11696).profileSurfaceAvailability(obj2);
  if (null == tmp19) {
    class H {
      constructor() {
        return closure_1_5.getId();
      }
    }
    const data = tmp(6357).useApplication(previewApplicationId).data;
    let tmp34 = null != previewApplicationId;
    if (tmp34) {
      let id;
      if (data != null) {
        const bot = data.bot;
        if (bot != null) {
          id = bot.id;
        }
      }
      tmp34 = null != id;
    }
    const tmpResult10 = tmp(6357);
    const application = tmp(6357).useApplication(applicationId);
    ({ data: data2, isLoading } = application);
    if (!declaredActivity) {
      declaredActivity = tmp(11220).canLaunchContextlessFrame(data2);
      const tmpResult12 = tmp(11220);
    }
    const tmpResult11 = tmp(6357);
    let obj3 = { legacy: null, widgetResolvable: null, botDmResolvable: null };
    const obj4 = { hasFrame: declaredActivity, hasProfileWidget: tmp31, hasBotDm: tmp34 };
    obj3.legacy = obj4;
    obj3.widgetResolvable = null != tmp19;
    obj3.botDmResolvable = tmp34;
    const result1 = tmp(11696).previewCapabilitiesFromSurfaces(previewSupportedSurfaces, obj3);
    const tmpResult13 = tmp(11696);
    const obj5 = { installScope };
    const merged = Object.assign(result1);
    obj5.hasOverlay = tmp5;
    obj5.ownerAuthorizationRevoked = ownerAuthorizationRevoked;
    const result2 = tmp(11696).previewModeAvailability(obj5);
    if (cResult[2] !== previewSupportedSurfaces) {
      const result3 = tmp(11033).previewFrameSurfaceOptions(previewSupportedSurfaces);
      cResult[2] = previewSupportedSurfaces;
      class H {
        constructor() {
          return closure_1_5.getId();
        }
      }
      cResult[3] = result3;
      let tmp43 = result3;
      const tmpResult15 = tmp(11033);
    } else {
      tmp43 = cResult[3];
    }
    if (cResult[4] === tmp43) {
      if (cResult[5] === previewAppChannels) {
        if (cResult[6] === tmp12) {
          if (cResult[7] === tmp9) {
            previewFrameSurface = cResult[8];
            let tmp46 = cResult[9];
          }
          dependencyMap = tmp46;
          if (cResult[10] !== tmp46) {
            let tmp51;
            if (null != tmp46) {
              const obj6 = { customId: tmp46 };
              tmp51 = obj6;
            }
            class H {
              constructor() {
                return closure_1_5.getId();
              }
            }
            cResult[11] = tmp51;
          }
          class H {
            constructor() {
              return closure_1_5.getId();
            }
          }
          function ce() {
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
                  tmp13 = tmp14 !== closure_2;
                }
                if (tmp13) {
                  let tmp5Result = leaveFrame;
                  let leaveFrameResult = tmp5Result.leaveFrame(item10007.id);
                }
                continue;
              }
            }
          }
          const items1 = [applicationId, tmp45, tmp46];
          cResult[12] = tmp46;
          cResult[13] = applicationId;
          cResult[14] = tmp45;
          cResult[15] = items1;
          cResult[16] = ce;
        }
      }
    }
    const tmpResult14 = tmp(11696);
    previewFrameSurface = tmp(11033).resolvePreviewFrameSurface(tmp9, tmp43);
    let tmp48 = null;
    if (previewFrameSurface === tmp(6297).EmbeddedSurfaceType.APP_CHANNEL) {
      tmp48 = null;
      if (previewAppChannels.length >= 2) {
        if (null == tmp12) {
          let first = previewAppChannels[0];
        } else {
          first = tmp12;
        }
        tmp48 = first;
      }
    }
    cResult[4] = tmp43;
    cResult[5] = previewAppChannels;
    cResult[6] = tmp12;
    cResult[7] = tmp9;
    cResult[8] = previewFrameSurface;
    cResult[9] = tmp48;
    tmp46 = tmp48;
    const tmpResult16 = tmp(11033);
  }
  const tmpResult9 = applicationId(11696);
}) : (function useConjurePreviewMode(applicationId) {
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
    previewAppChannels = closure_7;
  }
  let previewFrameSurface;
  let first;
  [tmp2, tmp3] = first(noop.useState(null), 2);
  const tmp = first(noop.useState(null), 2);
  [tmp5, tmp6] = first(noop.useState(null), 2);
  const tmp4 = first(noop.useState(null), 2);
  [tmp8, tmp9] = first(noop.useState(null), 2);
  const tmp10 = first(noop.useState(applicationId), 2);
  if (tmp10[0] !== applicationId) {
    tmp10[1](applicationId);
    tmp3(null);
    tmp6(null);
    tmp9(null);
  }
  let tmp15 = null;
  if (null != previewApplicationId) {
    tmp15 = null;
    if (previewApplicationId === applicationId) {
      tmp15 = previewApplicationId;
    }
  }
  const tmp7 = first(noop.useState(null), 2);
  const items = [AuthenticationStore];
  const stateFromStores = applicationId(previewFrameSurface[6]).useStateFromStores(items, () => id.getId());
  const obj2 = applicationId(previewFrameSurface[6]);
  const tmp20 = tmp15;
  const applicationWidgetConfig = previewSupportedSurfaces(previewFrameSurface[7])(stateFromStores, tmp20).applicationWidgetConfig;
  let surfaces;
  if (applicationWidgetConfig != null) {
    surfaces = applicationWidgetConfig.surfaces;
  }
  const tmp19 = previewSupportedSurfaces(previewFrameSurface[7]);
  let tmp22;
  if (surfaces != null) {
    tmp22 = surfaces[tmp16(undefined, tmp17[9]).ApplicationWidgetConfigSurface.WIDGET_TOP];
  }
  let obj3 = { widgetTop: null != tmp22, widgetBottom: null, miniProfile: null };
  let tmp23;
  if (surfaces != null) {
    tmp23 = surfaces[tmp16(undefined, tmp17[9]).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  }
  obj3.widgetBottom = null != tmp23;
  let tmp24;
  if (surfaces != null) {
    tmp24 = surfaces[tmp16(undefined, tmp17[9]).ApplicationWidgetConfigSurface.MINI_PROFILE];
  }
  obj3.miniProfile = null != tmp24;
  const result = applicationId(previewFrameSurface[8]).profileSurfaceAvailability(obj3);
  if (null == tmp15) {
    const data = tmp16(tmp17[10]).useApplication(previewApplicationId).data;
    let tmp29 = null != previewApplicationId;
    if (tmp29) {
      let id;
      if (data != null) {
        const bot = data.bot;
        if (bot != null) {
          id = bot.id;
        }
      }
      tmp29 = null != id;
    }
    const tmp16Result8 = tmp16(tmp17[10]);
    const application = tmp16(tmp17[10]).useApplication(applicationId);
    ({ data: data2, isLoading } = application);
    if (!declaredActivity) {
      declaredActivity = tmp16(tmp17[11]).canLaunchContextlessFrame(data2);
      const tmp16Result10 = tmp16(tmp17[11]);
    }
    const tmp16Result9 = tmp16(tmp17[10]);
    const obj4 = { legacy: null, widgetResolvable: null, botDmResolvable: null };
    const obj5 = { hasFrame: declaredActivity, hasProfileWidget: tmp26, hasBotDm: tmp29 };
    obj4.legacy = obj5;
    obj4.widgetResolvable = null != tmp15;
    obj4.botDmResolvable = tmp29;
    const result1 = tmp16(tmp17[8]).previewCapabilitiesFromSurfaces(previewSupportedSurfaces, obj4);
    const tmp16Result11 = tmp16(tmp17[8]);
    const obj6 = { installScope };
    const merged = Object.assign(result1);
    obj6.hasOverlay = flag2;
    obj6.ownerAuthorizationRevoked = ownerAuthorizationRevoked;
    const result2 = tmp16(tmp17[8]).previewModeAvailability(obj6);
    const items1 = [previewSupportedSurfaces];
    const memo = noop.useMemo(() => conjurePreviewFrameSurfaces.previewFrameSurfaceOptions(previewSupportedSurfaces), items1);
    const tmp16Result12 = tmp16(tmp17[8]);
    previewFrameSurface = tmp16(tmp17[12]).resolvePreviewFrameSurface(tmp5, memo);
    let tmp40 = null;
    if (previewFrameSurface === tmp16(tmp17[15]).EmbeddedSurfaceType.APP_CHANNEL) {
      tmp40 = null;
      if (previewAppChannels.length >= 2) {
        if (null == first) {
          first = previewAppChannels[0];
        }
        tmp40 = first;
      }
    }
    first = tmp40;
    const items2 = [tmp40];
    const items3 = [applicationId, previewFrameSurface, tmp40];
    const memo1 = noop.useMemo(() => {
      let tmp2;
      if (null != first) {
        const obj = { customId: tmp };
        tmp2 = obj;
      }
      return tmp2;
    }, items2);
    const effect = noop.useEffect(() => {
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
            tmp13 = tmp14 !== first;
          }
          if (tmp13) {
            let tmp5Result = leaveFrame;
            let leaveFrameResult = tmp5Result.leaveFrame(item10007.id);
          }
          continue;
        }
      }
    }, items3);
    const obj7 = { availability: result2, isResolving: null != applicationId && isLoading && null == data2, activeMode: null, setMode: null, frameSurface: null, frameSurfaceOptions: null, setFrameSurface: null, appChannel: null, setAppChannel: null, frameLaunchParams: null, widgetApplicationId: null };
    let previewMode = null;
    if (!(null != applicationId && isLoading && null == data2)) {
      previewMode = tmp16(tmp17[8]).resolvePreviewMode(tmp2, result2);
      const tmp16Result14 = tmp16(tmp17[8]);
    }
    obj7.activeMode = previewMode;
    obj7.setMode = tmp3;
    obj7.frameSurface = previewFrameSurface;
    obj7.frameSurfaceOptions = memo;
    obj7.setFrameSurface = tmp6;
    obj7.appChannel = tmp40;
    obj7.setAppChannel = tmp9;
    obj7.frameLaunchParams = memo1;
    obj7.widgetApplicationId = tmp15;
    return obj7;
  }
  const tmp16Result = applicationId(previewFrameSurface[8]);
});
export { resolvePreviewAppChannel };