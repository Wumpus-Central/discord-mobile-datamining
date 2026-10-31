// === Module 12079: useConjurePreviewMode ===

// Module 12079 (useConjurePreviewMode)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5675 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 10883 */;
import conjurePreviewFrameSurfaces from "conjurePreviewFrameSurfaces" /* 10884 */;
import leaveFrame from "leaveFrame" /* 10927 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const isLaunched = fn(6847).isLaunched;
let closure_7 = [];
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/preview/useConjurePreviewMode.tsx");

export function useConjurePreviewMode(applicationId) {
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
  let frameSurface;
  if (initialSelection != null) {
    frameSurface = initialSelection.frameSurface;
  }
  if (frameSurface == null) {
    frameSurface = null;
  }
  const tmp2Result = mode(first1.useState(frameSurface), 2);
  first1 = tmp2Result[0];
  let appChannel;
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
  const stateFromStores = applicationId(onSelectionChange[4]).useStateFromStores(items1, () => first2.getId());
  const obj2 = applicationId(onSelectionChange[4]);
  const tmp27 = tmp22;
  const applicationWidgetConfig = previewSupportedSurfaces(onSelectionChange[5])(stateFromStores, tmp27).applicationWidgetConfig;
  let surfaces;
  if (applicationWidgetConfig != null) {
    surfaces = applicationWidgetConfig.surfaces;
  }
  const tmp26 = previewSupportedSurfaces(onSelectionChange[5]);
  let tmp29;
  if (surfaces != null) {
    tmp29 = surfaces[tmp23(undefined, onSelectionChange[7]).ApplicationWidgetConfigSurface.WIDGET_TOP];
  }
  let obj3 = { widgetTop: null != tmp29, widgetBottom: null, miniProfile: null };
  let tmp30;
  if (surfaces != null) {
    tmp30 = surfaces[tmp23(undefined, onSelectionChange[7]).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  }
  obj3.widgetBottom = null != tmp30;
  let tmp31;
  if (surfaces != null) {
    tmp31 = surfaces[tmp23(undefined, onSelectionChange[7]).ApplicationWidgetConfigSurface.MINI_PROFILE];
  }
  obj3.miniProfile = null != tmp31;
  const result = applicationId(onSelectionChange[6]).profileSurfaceAvailability(obj3);
  if (null == tmp22) {
    const data = tmp23(onSelectionChange[8]).useApplication(previewApplicationId).data;
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
    const tmp23Result8 = tmp23(onSelectionChange[8]);
    const application = tmp23(onSelectionChange[8]).useApplication(applicationId);
    ({ data: data2, isLoading } = application);
    if (!declaredActivity) {
      declaredActivity = tmp23(onSelectionChange[9]).canLaunchContextlessFrame(data2);
      const tmp23Result10 = tmp23(onSelectionChange[9]);
    }
    const tmp23Result9 = tmp23(onSelectionChange[8]);
    const obj4 = { legacy: null, widgetResolvable: null, botDmResolvable: null };
    const obj5 = { hasFrame: declaredActivity, hasProfileWidget: tmp33, hasBotDm: tmp36 };
    obj4.legacy = obj5;
    obj4.widgetResolvable = null != tmp22;
    obj4.botDmResolvable = tmp36;
    const result1 = tmp23(onSelectionChange[6]).previewCapabilitiesFromSurfaces(previewSupportedSurfaces, obj4);
    const tmp23Result11 = tmp23(onSelectionChange[6]);
    const obj6 = { installScope };
    const merged = Object.assign(result1);
    obj6.hasOverlay = flag2;
    obj6.ownerAuthorizationRevoked = ownerAuthorizationRevoked;
    const result2 = tmp23(onSelectionChange[6]).previewModeAvailability(obj6);
    const items2 = [previewSupportedSurfaces];
    const memo = obj.useMemo(() => conjurePreviewFrameSurfaces.previewFrameSurfaceOptions(previewSupportedSurfaces), items2);
    const tmp23Result12 = tmp23(onSelectionChange[6]);
    previewFrameSurface = tmp23(onSelectionChange[10]).resolvePreviewFrameSurface(first1, memo);
    let tmp47 = null;
    if (previewFrameSurface === tmp23(onSelectionChange[13]).EmbeddedSurfaceType.APP_CHANNEL) {
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
    const obj7 = { availability: result2, isResolving: null != applicationId && isLoading && null == data2, activeMode: null, setMode: null, frameSurface: null, frameSurfaceOptions: null, setFrameSurface: null, appChannel: null, setAppChannel: null, frameLaunchParams: null, widgetApplicationId: null };
    let previewMode = null;
    if (!(null != applicationId && isLoading && null == data2)) {
      previewMode = tmp23(onSelectionChange[6]).resolvePreviewMode(mode, result2);
      const tmp23Result14 = tmp23(onSelectionChange[6]);
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
  const tmp23Result = applicationId(onSelectionChange[6]);
}
export function resolvePreviewAppChannel(arg0, arg1, arr) {
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