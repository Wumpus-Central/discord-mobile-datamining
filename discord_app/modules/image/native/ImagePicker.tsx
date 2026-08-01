// === Module 4747: ? ===

// Module 4747
import handleThemeChange from "handleThemeChange";
import { ThemeTypes } from "sum";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/image/native/ImagePicker.tsx");

export default {
  launchImageLibrary(mediaType) {
    if ("any" !== mediaType.mediaType) {
      let str = mediaType.mediaType;
    } else {
      let obj = require(500) /* set */;
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
    let tmp4Result = tmp4(4748);
    obj2 = require(500) /* set */;
    const tmp3 = !mediaType.disableNewIOSPicker;
    tmp4Result = tmp4(4749);
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
    let closure_0 = arg0;
    return new Promise((arg0) => {
      const lib = arg0;
      if ("any" !== lib.mediaType) {
        let str = tmp.mediaType;
      } else {
        let obj = lib(outer1_2[2]);
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
        callback(arg0);
      };
      let tmp5Result = tmp5(tmp6[3]);
      obj2 = lib(outer1_2[2]);
      const tmp4 = !lib.disableNewIOSPicker;
      tmp5Result = tmp5(tmp6[4]);
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
    require(4749) /* launchCamera */.launchCamera(arg0, arg1);
  },
  launchCameraAsync(arg0) {
    let closure_0 = arg0;
    return new Promise((arg0) => {
      const callback = arg0;
      callback(outer1_2[4]).launchCamera(callback, (arg0) => {
        callback(arg0);
      });
    });
  },
  launchCropper(arg0) {
    let freeStyleCropEnabled;
    let height;
    let includeBase64;
    let mimeType;
    let uri;
    let width;
    theme = theme.theme;
    ({ uri, width, height, includeBase64, mimeType, freeStyleCropEnabled } = arg0);
    const internal = importDefault(712).internal;
    const semanticColor = internal.resolveSemanticColor(theme, importDefault(712).colors.BACKGROUND_BASE_LOW);
    const internal2 = importDefault(712).internal;
    const semanticColor1 = internal2.resolveSemanticColor(theme, importDefault(712).colors.BACKGROUND_SURFACE_HIGH);
    const internal3 = importDefault(712).internal;
    const semanticColor2 = internal3.resolveSemanticColor(theme, importDefault(712).colors.MOBILE_TEXT_HEADING_PRIMARY);
    const internal4 = importDefault(712).internal;
    const semanticColor3 = internal4.resolveSemanticColor(theme, importDefault(712).colors.TEXT_MUTED);
    const internal5 = importDefault(712).internal;
    const semanticColor4 = internal5.resolveSemanticColor(theme, importDefault(712).colors.TEXT_BRAND);
    const internal6 = importDefault(712).internal;
    const semanticColor5 = internal6.resolveSemanticColor(theme, importDefault(712).colors.TEXT_DEFAULT);
    let obj = importDefault(4751);
    obj = { mediaType: "photo", path: uri, width, height, includeBase64, mimeType, freeStyleCropEnabled, cropperStatusBarLight: theme === ThemeTypes.LIGHT, cropperNavigationBarLight: theme === ThemeTypes.LIGHT, cropperActiveWidgetColor: semanticColor2, cropperInactiveWidgetColor: semanticColor3, cropperControlsColor: semanticColor1, cropperControlsBarColor: semanticColor, cropperChooseColor: semanticColor4, cropperChooseText: null, cropperCancelColor: null, cropperCancelText: null, cropperToolbarColor: null, cropperToolbarWidgetColor: null, cropperToolbarTitle: null, cropperRotateByAngleAccessibilityLabel: null, cropperResetRotationAccessibilityLabel: null, cropperClampButtonAccessibilityLabel: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[14] = intl.string(require(1236) /* getSystemLocale */.t["1Qm822"]);
    obj[15] = semanticColor5;
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[16] = intl2.string(require(1236) /* getSystemLocale */.t["ETE/oC"]);
    obj[17] = semanticColor;
    obj[18] = semanticColor2;
    const intl3 = require(1236) /* getSystemLocale */.intl;
    obj[19] = intl3.string(require(1236) /* getSystemLocale */.t.b0y3DL);
    const intl4 = require(1236) /* getSystemLocale */.intl;
    obj[20] = intl4.string(require(1236) /* getSystemLocale */.t.Izf9u1);
    const intl5 = require(1236) /* getSystemLocale */.intl;
    obj[21] = intl5.string(require(1236) /* getSystemLocale */.t.iz4w1M);
    const intl6 = require(1236) /* getSystemLocale */.intl;
    obj[22] = intl6.string(require(1236) /* getSystemLocale */.t.QHvDTL);
    return obj.openCropper(obj);
  }
};