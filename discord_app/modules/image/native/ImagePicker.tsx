// discord_app/modules/image/native/ImagePicker.tsx
import set from "../../../utils/PlatformUtils.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import launchCamera from "../../../../_runtime/04853_launchCamera.js";
import openPickerDefault from "../../../../_runtime/04855_openPicker.js";
import closure_3 from "../../user_settings/ThemeStore.tsx";
import { ThemeTypes } from "../../../../discord_common/js/shared/Constants.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/image/native/ImagePicker.tsx");

export default {
  launchImageLibrary(mediaType) {
    if ("any" !== mediaType.mediaType) {
      let str = mediaType.mediaType;
    } else {
      let obj = set;
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
    let tmp4Result = tmp4(4852);
    obj2 = set;
    const tmp3 = !mediaType.disableNewIOSPicker;
    tmp4Result = tmp4(4853);
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
    closure_0 = arg0;
    return new Promise((arg0) => {
      const lib = arg0;
      if ("any" !== lib.mediaType) {
        let str = tmp.mediaType;
      } else {
        let obj = lib(closure_1_2[2]);
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
      obj2 = lib(closure_1_2[2]);
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
    launchCamera.launchCamera(arg0, arg1);
  },
  launchCameraAsync(arg0) {
    closure_0 = arg0;
    return new Promise((arg0) => {
      const callback = arg0;
      callback(closure_1_2[4]).launchCamera(callback, (arg0) => {
        callback(arg0);
      });
    });
  },
  launchCropper(arg0) {
    theme = theme.theme;
    ({ uri, width, height, includeBase64, mimeType, freeStyleCropEnabled } = arg0);
    const internal = ThemesDefault.internal;
    const semanticColor = internal.resolveSemanticColor(theme, ThemesDefault.colors.BACKGROUND_BASE_LOW);
    const internal2 = ThemesDefault.internal;
    const semanticColor1 = internal2.resolveSemanticColor(theme, ThemesDefault.colors.BACKGROUND_SURFACE_HIGH);
    const internal3 = ThemesDefault.internal;
    const semanticColor2 = internal3.resolveSemanticColor(theme, ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY);
    const internal4 = ThemesDefault.internal;
    const semanticColor3 = internal4.resolveSemanticColor(theme, ThemesDefault.colors.TEXT_MUTED);
    const internal5 = ThemesDefault.internal;
    const semanticColor4 = internal5.resolveSemanticColor(theme, ThemesDefault.colors.TEXT_BRAND);
    const internal6 = ThemesDefault.internal;
    const semanticColor5 = internal6.resolveSemanticColor(theme, ThemesDefault.colors.TEXT_DEFAULT);
    let obj = openPickerDefault;
    obj = { mediaType: "photo", path: uri, width, height, includeBase64, mimeType, freeStyleCropEnabled, cropperStatusBarLight: theme === ThemeTypes.LIGHT, cropperNavigationBarLight: theme === ThemeTypes.LIGHT, cropperActiveWidgetColor: semanticColor2, cropperInactiveWidgetColor: semanticColor3, cropperControlsColor: semanticColor1, cropperControlsBarColor: semanticColor, cropperChooseColor: semanticColor4, cropperChooseText: null, cropperCancelColor: null, cropperCancelText: null, cropperToolbarColor: null, cropperToolbarWidgetColor: null, cropperToolbarTitle: null, cropperRotateByAngleAccessibilityLabel: null, cropperResetRotationAccessibilityLabel: null, cropperClampButtonAccessibilityLabel: null };
    const intl = getSystemLocale.intl;
    obj[14] = intl.string(getSystemLocale.t["1Qm822"]);
    obj[15] = semanticColor5;
    const intl2 = getSystemLocale.intl;
    obj[16] = intl2.string(getSystemLocale.t["ETE/oC"]);
    obj[17] = semanticColor;
    obj[18] = semanticColor2;
    const intl3 = getSystemLocale.intl;
    obj[19] = intl3.string(getSystemLocale.t.b0y3DL);
    const intl4 = getSystemLocale.intl;
    obj[20] = intl4.string(getSystemLocale.t.Izf9u1);
    const intl5 = getSystemLocale.intl;
    obj[21] = intl5.string(getSystemLocale.t.iz4w1M);
    const intl6 = getSystemLocale.intl;
    obj[22] = intl6.string(getSystemLocale.t.QHvDTL);
    return obj.openCropper(obj);
  }
};