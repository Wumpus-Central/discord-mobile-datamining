// discord_app/modules/conjure/preview/useConjurePreviewMode.tsx
import EmbeddedSurfaceType from "../../../../discord_common/js/shared/shared-constants/EmbeddedSurfaceType.tsx";
import conjurePreviewSurface from "conjurePreviewSurface.tsx";
import conjurePreviewFrameSurfaces from "conjurePreviewFrameSurfaces.tsx";
import leaveFrame from "../../frames/leaveFrame.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

require = fn;
const isLaunched = fn(6937).isLaunched;
let closure_7 = [];
let closure_8 = [];
let items = [fn(5687).EmbeddedSurfaceType.APP_CHANNEL];
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
    previewAppChannels = ref;
  }
  let previewViews = applicationId.previewViews;
  if (previewViews === undefined) {
    previewViews = closure_8;
  }
  ({ initialSelection, onSelectionChange } = applicationId);
  let first1;
  let first2;
  let first3;
  ref = undefined;
  closure_8 = undefined;
  let previewFrameSurface;
  let id1;
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
  const tmp2Result4 = mode(first1.useState(appChannel), 2);
  first2 = tmp2Result4[0];
  let view;
  if (initialSelection != null) {
    view = initialSelection.view;
  }
  if (view == null) {
    view = null;
  }
  const tmp2Result5 = mode(first1.useState(view), 2);
  first3 = tmp2Result5[0];
  const tmp2Result6 = mode(first1.useState(applicationId), 2);
  const first4 = tmp2Result6[0];
  if (first4 !== applicationId) {
    tmp2Result6[1](applicationId);
    if (null != first4) {
      tmp5(null);
      tmp9(null);
      tmp13(null);
      tmp17(null);
    }
  }
  ref = obj.useRef(onSelectionChange);
  const layoutEffect = obj.useLayoutEffect(() => {
    closure_7.current = onSelectionChange;
  });
  items = [mode, first1, first2, first3];
  const effect = obj.useEffect(() => {
    const current = ref.current;
    if (current != null) {
      const obj = { mode, frameSurface: first1, appChannel: first2, view: first3 };
      current(obj);
    }
  }, items);
  let tmp27 = null;
  if (null != previewApplicationId) {
    tmp27 = null;
    if (previewApplicationId === applicationId) {
      tmp27 = previewApplicationId;
    }
  }
  const items1 = [first2];
  const stateFromStores = applicationId(onSelectionChange[4]).useStateFromStores(items1, () => first2.getId());
  const obj2 = applicationId(onSelectionChange[4]);
  const tmp32 = tmp27;
  const applicationWidgetConfig = previewSupportedSurfaces(onSelectionChange[5])(
    stateFromStores,
    tmp32,
  ).applicationWidgetConfig;
  let surfaces;
  if (applicationWidgetConfig != null) {
    surfaces = applicationWidgetConfig.surfaces;
  }
  const tmp31 = previewSupportedSurfaces(onSelectionChange[5]);
  let tmp34;
  if (surfaces != null) {
    tmp34 = surfaces[tmp28(undefined, onSelectionChange[7]).ApplicationWidgetConfigSurface.WIDGET_TOP];
  }
  let obj3 = { widgetTop: null != tmp34, widgetBottom: null, miniProfile: null };
  let tmp35;
  if (surfaces != null) {
    tmp35 = surfaces[tmp28(undefined, onSelectionChange[7]).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  }
  obj3.widgetBottom = null != tmp35;
  let tmp36;
  if (surfaces != null) {
    tmp36 = surfaces[tmp28(undefined, onSelectionChange[7]).ApplicationWidgetConfigSurface.MINI_PROFILE];
  }
  obj3.miniProfile = null != tmp36;
  let result = applicationId(onSelectionChange[6]).profileSurfaceAvailability(obj3);
  if (null == tmp27) {
    const data = tmp28(onSelectionChange[8]).useApplication(previewApplicationId).data;
    let tmp41 = null != previewApplicationId;
    if (tmp41) {
      let id;
      if (data != null) {
        const bot = data.bot;
        if (bot != null) {
          id = bot.id;
        }
      }
      tmp41 = null != id;
    }
    const tmp28Result8 = tmp28(onSelectionChange[8]);
    const application = tmp28(onSelectionChange[8]).useApplication(applicationId);
    ({ data: data2, isLoading } = application);
    if (!declaredActivity) {
      declaredActivity = tmp28(onSelectionChange[9]).canLaunchContextlessFrame(data2);
      const tmp28Result10 = tmp28(onSelectionChange[9]);
    }
    const tmp28Result9 = tmp28(onSelectionChange[8]);
    const obj4 = { legacy: null, widgetResolvable: null, botDmResolvable: null };
    const obj5 = { hasFrame: declaredActivity, hasProfileWidget: tmp38, hasBotDm: tmp41 };
    obj4.legacy = obj5;
    obj4.widgetResolvable = null != tmp27;
    obj4.botDmResolvable = tmp41;
    const result1 = tmp28(onSelectionChange[6]).previewCapabilitiesFromSurfaces(previewSupportedSurfaces, obj4);
    const tmp28Result11 = tmp28(onSelectionChange[6]);
    const obj6 = { installScope };
    const merged = Object.assign(result1);
    obj6.hasOverlay = flag2;
    obj6.ownerAuthorizationRevoked = ownerAuthorizationRevoked;
    const result2 = tmp28(onSelectionChange[6]).previewModeAvailability(obj6);
    closure_8 = tmp50;
    const items2 = [previewViews.length > 0, previewSupportedSurfaces];
    const memo = obj.useMemo(() => {
      if (closure_8) {
        let result = items;
      } else {
        result = conjurePreviewFrameSurfaces.previewFrameSurfaceOptions(previewSupportedSurfaces);
      }
      return result;
    }, items2);
    const tmp28Result12 = tmp28(onSelectionChange[6]);
    previewFrameSurface = tmp28(onSelectionChange[10]).resolvePreviewFrameSurface(first1, memo);
    let tmp53 = null;
    if (previewViews.length > 0) {
      let found = previewViews.find((id) => id.id === first3);
      if (found == null) {
        found = previewViews[0];
      }
      tmp53 = found;
    }
    let tmp55 = null;
    if (previewViews.length <= 0) {
      let tmp56 = null;
      if (previewFrameSurface === tmp28(onSelectionChange[13]).EmbeddedSurfaceType.APP_CHANNEL) {
        tmp56 = null;
        if (previewAppChannels.length >= 2) {
          if (null == first2) {
            first2 = previewAppChannels[0];
          }
          tmp56 = first2;
        }
      }
      tmp55 = tmp56;
    }
    id1 = undefined;
    if (tmp53 != null) {
      id1 = tmp53.id;
    }
    if (id1 == null) {
      id1 = tmp55;
    }
    const items3 = [id1];
    const items4 = [applicationId, previewFrameSurface, id1];
    const memo1 = obj.useMemo(() => {
      let tmp2;
      if (null != id1) {
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
            tmp13 = tmp14 !== id1;
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
      view: null,
      setView: null,
      frameLaunchParams: null,
      widgetApplicationId: null,
    };
    let previewMode = null;
    if (!(null != applicationId && isLoading && null == data2)) {
      previewMode = tmp28(onSelectionChange[6]).resolvePreviewMode(mode, result2);
      const tmp28Result14 = tmp28(onSelectionChange[6]);
    }
    obj7.activeMode = previewMode;
    obj7.setMode = tmp5;
    obj7.frameSurface = previewFrameSurface;
    obj7.frameSurfaceOptions = memo;
    obj7.setFrameSurface = tmp9;
    obj7.appChannel = tmp55;
    obj7.setAppChannel = tmp13;
    obj7.view = tmp53;
    obj7.setView = tmp17;
    obj7.frameLaunchParams = memo1;
    obj7.widgetApplicationId = tmp27;
    return obj7;
  }
  const tmp28Result = applicationId(onSelectionChange[6]);
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
