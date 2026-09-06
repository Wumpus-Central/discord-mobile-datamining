// discord_app/modules/image/native/ImagePicker.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import launchCamera from "../../../../_runtime/05152_launchCamera.js";
import openPickerDefault from "../../../../_runtime/05154_openPicker.js";
import ThemeStore from "../../user_settings/ThemeStore.tsx";

require = fn;
const ThemeTypes = fn(1085).ThemeTypes;
let size = fn(2);
const result = size.fileFinishedImporting("modules/image/native/ImagePicker.tsx");

export default {
  launchImageLibrary(mediaType, arg1) {
    if ("any" !== mediaType.mediaType) {
      let str = mediaType.mediaType;
    } else {
      let obj = PlatformUtils;
      str = "mixed";
    }
    let selections = mediaType.selections;
    if (selections == null) {
      selections = [];
    }
    let str2;
    if (obj2.isIOS()) {
      str2 = "pageSheet";
    }
    tmp4(5151);
    obj2 = PlatformUtils;
    const tmp3 = !mediaType.disableNewIOSPicker;
    const tmp4Result = tmp4(5152);
    obj = {};
    const merged = Object.assign(mediaType);
    obj.mediaType = str;
    obj.presentationStyle = str2;
    obj.selection = selections;
    obj.useNewIOSPicker = tmp3;
    obj.forceGetContent = !tmp4Result.isActionPickSupported();
    tmp4Result.launchImageLibrary(obj, arg1);
  },
  launchImageLibraryAsync(arg0) {
    let mediaType = arg0;
    return new Promise((arg0) => {
      mediaType = arg0;
      if ("any" !== mediaType.mediaType) {
        let str = tmp.mediaType;
      } else {
        let obj = PlatformUtils;
        str = "mixed";
      }
      let selections = tmp.selections;
      if (selections == null) {
        selections = [];
      }
      let str2;
      if (obj2.isIOS()) {
        str2 = "pageSheet";
      }
      const fn = (arg0) => {
        closure_0(arg0);
      };
      tmp5(5151);
      obj2 = PlatformUtils;
      const tmp4 = !mediaType.disableNewIOSPicker;
      const tmp5Result = tmp5(5152);
      obj = {};
      const merged = Object.assign(tmp);
      obj.mediaType = str;
      obj.presentationStyle = str2;
      obj.selection = selections;
      obj.useNewIOSPicker = tmp4;
      obj.forceGetContent = !tmp5Result.isActionPickSupported();
      tmp5Result.launchImageLibrary(obj, fn);
    });
  },
  launchCamera(arg0, arg1) {
    launchCamera.launchCamera(arg0, arg1);
  },
  launchCameraAsync(arg0) {
    closure_0 = arg0;
    return new Promise((arg0) => {
      closure_0 = arg0;
      launchCamera.launchCamera(closure_0, (arg0) => {
        closure_0(arg0);
      });
    });
  },
  launchCropper(size) {
    const theme = ThemeStore.theme;
    ({ uri, width, height, includeBase64, mimeType, freeStyleCropEnabled } = size);
    const internal = nativeDefault.internal;
    const semanticColor = internal.resolveSemanticColor(theme, nativeDefault.colors.BACKGROUND_BASE_LOW);
    const internal2 = nativeDefault.internal;
    const semanticColor1 = internal2.resolveSemanticColor(theme, nativeDefault.colors.BACKGROUND_SURFACE_HIGH);
    const internal3 = nativeDefault.internal;
    const semanticColor2 = internal3.resolveSemanticColor(theme, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY);
    const internal4 = nativeDefault.internal;
    const semanticColor3 = internal4.resolveSemanticColor(theme, nativeDefault.colors.TEXT_MUTED);
    const internal5 = nativeDefault.internal;
    const semanticColor4 = internal5.resolveSemanticColor(theme, nativeDefault.colors.TEXT_BRAND);
    const internal6 = nativeDefault.internal;
    const semanticColor5 = internal6.resolveSemanticColor(theme, nativeDefault.colors.TEXT_DEFAULT);
    size = {
      mediaType: "photo",
      path: uri,
      width,
      height,
      includeBase64,
      mimeType,
      freeStyleCropEnabled,
      cropperStatusBarLight: theme === ThemeTypes.LIGHT,
      cropperNavigationBarLight: theme === ThemeTypes.LIGHT,
      cropperActiveWidgetColor: semanticColor2,
      cropperInactiveWidgetColor: semanticColor3,
      cropperControlsColor: semanticColor1,
      cropperControlsBarColor: semanticColor,
      cropperChooseColor: semanticColor4,
      cropperChooseText: null,
      cropperCancelColor: null,
      cropperCancelText: null,
      cropperToolbarColor: null,
      cropperToolbarWidgetColor: null,
      cropperToolbarTitle: null,
      cropperRotateByAngleAccessibilityLabel: null,
      cropperResetRotationAccessibilityLabel: null,
      cropperClampButtonAccessibilityLabel: null,
    };
    const intl = util.intl;
    size.cropperChooseText = intl.string(util.t["1Qm822"]);
    size.cropperCancelColor = semanticColor5;
    const intl2 = util.intl;
    size.cropperCancelText = intl2.string(util.t["ETE/oC"]);
    size.cropperToolbarColor = semanticColor;
    size.cropperToolbarWidgetColor = semanticColor2;
    const intl3 = util.intl;
    size.cropperToolbarTitle = intl3.string(util.t.b0y3DL);
    const intl4 = util.intl;
    size.cropperRotateByAngleAccessibilityLabel = intl4.string(util.t.Izf9u1);
    const intl5 = util.intl;
    size.cropperResetRotationAccessibilityLabel = intl5.string(util.t.iz4w1M);
    const intl6 = util.intl;
    size.cropperClampButtonAccessibilityLabel = intl6.string(util.t.QHvDTL);
    return openPickerDefault.openCropper(size);
  },
};
