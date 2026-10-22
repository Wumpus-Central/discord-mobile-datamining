// === Module 8140: ImagePicker ===

// Module 8140 (ImagePicker)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import ImagePickerUtils from "ImagePickerUtils" /* 8141 */;
import AndroidPhotoPickerExperiment from "AndroidPhotoPickerExperiment" /* 8142 */;
import launchCameraAll from "launchCamera" /* 8143 */;
import openPickerDefault from "openPicker" /* 8145 */;
import ThemeStore from "ThemeStore" /* 1207 */;

require = fn;
function getNativeLibraryOptions(mediaType) {
  if ("any" !== mediaType.mediaType) {
    let str = mediaType.mediaType;
  } else {
    PlatformUtils;
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
  obj2 = PlatformUtils;
  const tmp3 = !mediaType.disableNewIOSPicker;
  const tmp4Result = ImagePickerUtils;
  const tmp6 = !ImagePickerUtils.isActionPickSupported();
  let enabled = PlatformUtils.isAndroid();
  if (enabled) {
    enabled = AndroidPhotoPickerExperiment.getAndroidPhotoPickerExperimentConfig({ location: "ImagePicker" }).enabled;
    const tmp4Result4 = AndroidPhotoPickerExperiment;
  }
  const obj3 = {};
  const merged = Object.assign(mediaType);
  obj3.mediaType = str;
  obj3.presentationStyle = str2;
  obj3.selection = selections;
  obj3.useNewIOSPicker = tmp3;
  obj3.forceGetContent = tmp6;
  obj3.enableAndroidPhotoPicker = enabled;
  return obj3;
}
const ThemeTypes = fn(1098).ThemeTypes;
let size = fn(2);
const result = size.fileFinishedImporting("modules/image/native/ImagePicker.tsx");

export default {
  launchImageLibrary(mediaType, arg1) {
    launchCameraAll.launchImageLibrary(getNativeLibraryOptions(mediaType), arg1);
  },
  launchImageLibraryAsync(arg0) {
    closure_0 = arg0;
    return new Promise((mediaType) => {
      launchCameraAll.launchImageLibrary(getNativeLibraryOptions(mediaType), (arg0) => {
        mediaType(arg0);
      });
    });
  },
  canUseAndroidPhotoPicker(mediaType) {
    let isAndroidResult = PlatformUtils.isAndroid();
    if (isAndroidResult) {
      isAndroidResult = true === launchCameraAll.canUseAndroidPhotoPicker(getNativeLibraryOptions(mediaType));
    }
    return isAndroidResult;
  },
  launchCamera(arg0, arg1) {
    launchCameraAll.launchCamera(arg0, arg1);
  },
  launchCameraAsync(arg0) {
    closure_0 = arg0;
    return new Promise((arg0) => {
      closure_0 = arg0;
      launchCameraAll.launchCamera(closure_0, (arg0) => {
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
    size = { mediaType: "photo", path: uri, width, height, includeBase64, mimeType, freeStyleCropEnabled, cropperStatusBarLight: theme === ThemeTypes.LIGHT, cropperNavigationBarLight: theme === ThemeTypes.LIGHT, cropperActiveWidgetColor: semanticColor2, cropperInactiveWidgetColor: semanticColor3, cropperControlsColor: semanticColor1, cropperControlsBarColor: semanticColor, cropperChooseColor: semanticColor4, cropperChooseText: null, cropperCancelColor: null, cropperCancelText: null, cropperToolbarColor: null, cropperToolbarWidgetColor: null, cropperToolbarTitle: null, cropperRotateByAngleAccessibilityLabel: null, cropperResetRotationAccessibilityLabel: null, cropperClampButtonAccessibilityLabel: null };
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
  cleanSingle(path) {
    return openPickerDefault.cleanSingle(path);
  }
};