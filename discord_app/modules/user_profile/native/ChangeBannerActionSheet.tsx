// discord_app/modules/user_profile/native/ChangeBannerActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import TableRow from "../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import BottomSheetTitleHeader from "../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import useAnalyticsLocations from "../../app_analytics/useAnalyticsLocations.tsx";
import ActionSheet from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import UserProfileSettingsActionCreators from "../UserProfileSettingsActionCreators.tsx";
import Form from "../../../design/void/Form/native/index.tsx";
import NitroWheelIcon from "../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import showCustomColorPickerActionSheetDefault from "../../color_picker/native/showCustomColorPickerActionSheet.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserProfileSettingsStore from "../UserProfileSettingsStore.tsx";

const useAnalyticsLocationsDefault = useAnalyticsLocations;

require = fn;
function ChangeBannerColorRow(user) {
  user = user.user;
  _require = undefined;
  pendingAccentColor = undefined;
  dependencyMap = undefined;
  let tmp = closure_12();
  let obj = require("initialize");
  const items = [UserProfileSettingsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => pendingChanges.getPendingChanges());
  ({ pendingAccentColor, pendingAvatar } = stateFromStoresObject);
  let obj1 = require("RecentAvatarUtils");
  obj = { userId: user.id, image: pendingAvatar };
  let pendingAvatarSrc = obj1.getPendingAvatarSrc(obj);
  const tmp7 = pendingAccentColor(8186)(user.id);
  if (pendingAvatarSrc == null) {
    pendingAvatarSrc = user.getAvatarURL(undefined, 80);
  }
  tmp2(8248);
  const tmp2Result = tmp2(1091);
  const memoizedImageSourceResult = tmp2Result.memoizedImageSource(pendingAvatarSrc);
  const rgb2intResult = tmp2Result.rgb2int(
    require("VideoBackground").useDominantColorFromImage(pendingAvatarSrc, memoizedImageSourceResult),
  );
  _require = rgb2intResult;
  if (undefined === pendingAccentColor) {
    let primaryColor;
    if (tmp7 != null) {
      primaryColor = tmp7.primaryColor;
    }
    pendingAccentColor = primaryColor;
  }
  if (pendingAccentColor == null) {
    pendingAccentColor = rgb2intResult;
  }
  if (pendingAccentColor == null) {
    pendingAccentColor = 0;
  }
  const items1 = [rgb2intResult];
  dependencyMap = noop.useCallback((arg0) => {
    let tmp = arg0;
    if (arg0 === c0) {
      tmp = null;
    }
    UserProfileSettingsActionCreators.setPendingChanges({ accentColor: tmp });
  }, items1);
  obj = { label: null, trailing: null, onPress: null };
  obj1 = { style: tmp.label, text: null };
  const intl = tmp2(1114).intl;
  obj1.text = intl.string(require("util").t.xzNfPz);
  obj.label = closure_9(require("Form").FormLabel, obj1);
  const obj2 = { style: tmp.selectedColor, children: null };
  const items2 = [closure_9(pendingAccentColor(14597), { style: tmp.bannerColor, color: pendingAccentColor }), ,];
  const obj4 = {
    style: tmp.selectedColorHex,
    variant: "text-md/medium",
    color: "interactive-text-default",
    children: null,
  };
  const obj3 = { style: tmp.bannerColor, color: pendingAccentColor };
  const tmp2Result1 = require("VideoBackground");
  obj4.children = require("utils/ColorUtils").int2hex(pendingAccentColor);
  items2[1] = closure_9(require("Text/Text").Text, obj4);
  const tmp2Result2 = require("utils/ColorUtils");
  items2[2] = closure_9(require("native").Icon, {
    style: tmp.rowArrow,
    size: require("native").Icon.Sizes.CUSTOM,
    source: pendingAccentColor(14602),
  });
  obj2.children = items2;
  obj.trailing = closure_10(View, obj2);
  obj.onPress = function handleChangeColor() {
    showCustomColorPickerActionSheetDefault({ color: pendingAccentColor, onSelect });
  };
  return closure_9(require("TableRow").TableRow, obj);
}
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticsObjects: closure_7, UPLOAD_BANNER_SIZE: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
fn(4560);
let createStyles = {
  label: null,
  sublabel: null,
  nitroWheel: null,
  bannerColor: null,
  selectedColor: null,
  selectedColorHex: null,
  rowArrow: null,
  upsellButton: null,
  remove: null,
  titleWrapper: null,
  titleContainer: null,
};
createStyles = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, alignItems: "center", flexDirection: "row" };
createStyles.label = createStyles;
createStyles.sublabel = { color: nativeDefault.colors.TEXT_DEFAULT };
let obj1 = { color: nativeDefault.colors.TEXT_DEFAULT };
createStyles.nitroWheel = { marginLeft: nativeDefault.space.PX_8 };
let obj2 = { marginLeft: nativeDefault.space.PX_8 };
createStyles.bannerColor = {
  borderColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
  borderWidth: 1,
  borderRadius: nativeDefault.radii.xs,
  height: 24,
  minWidth: 24,
};
createStyles.selectedColor = { flexDirection: "row", alignItems: "center" };
createStyles.selectedColorHex = { textTransform: "uppercase" };
createStyles.rowArrow = { height: 13, width: 8, marginLeft: 10, marginTop: 2 };
let obj3 = {
  borderColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
  borderWidth: 1,
  borderRadius: nativeDefault.radii.xs,
  height: 24,
  minWidth: 24,
};
createStyles.upsellButton = { marginTop: nativeDefault.space.PX_8 };
let obj4 = { marginTop: nativeDefault.space.PX_8 };
createStyles.remove = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
createStyles.titleWrapper = { flex: 0 };
createStyles.titleContainer = { justifyContent: "flex-start" };
let closure_12 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/ChangeBannerActionSheet.tsx");

export default function ChangeBannerActionSheet(isTryItOut) {
  ({ user, onBannerChange: require, removeText, showRemoveBanner } = isTryItOut);
  if (showRemoveBanner === undefined) {
    showRemoveBanner = false;
  }
  let flag = isTryItOut.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  importDefault = async function _handleBannerUploadSelect(dependencyMap) {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (dependencyMap === 1) {
        throw value;
      } else if (dependencyMap === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (dependencyMap === 1) {
            c3 = 3;
            throw value;
          } else if (dependencyMap === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = undefined;
            let base64;
            let originalMd5;
            let obj3 = tmp5(4527);
            obj3.hideActionSheet();
            dependencyMap = 1;
            c3 = 1;
            const obj1 = { value: tmp5(5138).openImagePicker(closure_1_8), done: false };
            return obj1;
          }
        } else if (dependencyMap === 1) {
          c3 = 3;
          throw value;
        } else if (dependencyMap === 2) {
          c3 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          closure_128_0 = value;
          base64 = closure_128_0.base64;
          originalMd5 = closure_128_0.originalMd5;
          if (null != base64) {
            obj = tmp2(14593);
            obj3 = {
              assetOrigin: tmp2(6989).AssetOriginTypes.NEW_ASSET,
              imageUri: base64,
              description: "",
              originalAsset: "Array",
              originalMd5,
            };
            closure_129_0(obj.createPendingImage(obj3));
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp20) {
        c3 = tmp;
        throw tmp20;
      }
    }
  };
  const tmp = closure_12();
  if (!flag) {
    flag = tmp2(4218).canUsePremiumProfileCustomization(user);
    const tmp2Result = tmp2(4218);
  }
  let obj = { value: useAnalyticsLocationsDefault(isTryItOut.analyticsLocations).analyticsLocations, children: null };
  obj = { title: null, trailing: null, titleWrapperStyle: null, titleContainerStyle: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.Vgdusv);
  let tmp4Result = flag;
  if (flag) {
    tmp4Result = closure_9(NitroWheelIcon.NitroWheelIcon, {});
  }
  obj.trailing = tmp4Result;
  ({ titleWrapper: obj3.titleWrapperStyle, titleContainer: obj3.titleContainerStyle } = tmp);
  const items = [closure_9(BottomSheetTitleHeader.BottomSheetTitleHeader, obj)];
  tmp4Result = null;
  if (!flag) {
    let obj1 = { user };
    tmp4Result = closure_9(ChangeBannerColorRow, obj1);
  }
  const items1 = [tmp4Result, ,];
  let obj2 = { style: tmp.label, children: null };
  const intl2 = util.intl;
  const string = intl2.string;
  const t = util.t;
  if (showRemoveBanner) {
    let stringResult = string(t.N0bC3P);
  } else {
    stringResult = string(t["70CYsY"]);
  }
  const items2 = [closure_9(Form.FormLabel, { text: stringResult })];
  let tmp4Result1 = !flag;
  if (!flag) {
    let obj3 = { style: tmp.nitroWheel, size: "sm" };
    tmp4Result1 = closure_9(NitroWheelIcon.NitroWheelIcon, obj3);
  }
  const obj4 = { label: closure_10(View, obj2), subLabel: null, onPress: null };
  items2[1] = tmp4Result1;
  obj2.children = items2;
  const obj5 = { style: tmp.sublabel, numberOfLines: 2, text: null };
  const intl3 = util.intl;
  const string2 = intl3.string;
  const t2 = util.t;
  if (flag) {
    let string2Result = string2(t2.IhzZlo);
  } else {
    string2Result = string2(t2.NSTmdO);
  }
  obj5.text = string2Result;
  const items3 = [closure_9(Form.FormSubLabel, obj5)];
  let tmp4Result2 = !flag;
  if (!flag) {
    const obj6 = { style: tmp.upsellButton, children: null };
    const obj7 = { analyticsObject: constants.EDIT_PROFILE_BANNER };
    obj6.children = closure_9(tmp2(14594), obj7);
    tmp4Result2 = closure_9(View, obj6);
  }
  items3[1] = tmp4Result2;
  obj4.subLabel = closure_10(closure_11, { children: items3 });
  let handleBannerUploadSelect;
  if (flag) {
    handleBannerUploadSelect = function handleBannerUploadSelect() {
      const self = this;
      const apply = closure_1.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
  }
  obj4.onPress = handleBannerUploadSelect;
  items1[1] = closure_9(TableRow.TableRow, obj4);
  if (showRemoveBanner) {
    const obj8 = { style: null, text: null };
    const items4 = [,];
    ({ label: arr5[0], remove: arr5[1] } = tmp);
    obj8.style = items4;
    if (removeText == null) {
      const intl4 = util.intl;
      removeText = intl4.string(util.t.tT9n7D);
    }
    const obj9 = { label: null, onPress: null };
    obj8.text = removeText;
    obj9.label = closure_9(Form.FormLabel, obj8);
    obj9.onPress = function handleBannerDelete() {
      _require(null);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    };
    showRemoveBanner = closure_9(TableRow.TableRow, obj9);
  }
  const obj10 = { children: null };
  items1[2] = showRemoveBanner;
  items[1] = closure_10(TableRowGroup.TableRowGroup, { hasIcons: false, children: items1 });
  obj10.children = items;
  obj.children = closure_10(ActionSheet.ActionSheet, obj10);
  return closure_9(useAnalyticsLocations.AnalyticsLocationProvider, obj);
}
