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
  const items = [UserProfileSettingsStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () =>
    pendingChanges.getPendingChanges(),
  );
  ({ pendingAccentColor, pendingAvatar } = stateFromStoresObject);
  const obj = require("initialize");
  let pendingAvatarSrc = require("RecentAvatarUtils").getPendingAvatarSrc({ userId: user.id, image: pendingAvatar });
  const tmp7 = pendingAccentColor(8416)(user.id);
  if (pendingAvatarSrc == null) {
    pendingAvatarSrc = user.getAvatarURL(undefined, 80);
  }
  const obj2 = require("RecentAvatarUtils");
  const obj3 = { userId: user.id, image: pendingAvatar };
  const tmp2Result = require("VideoBackground");
  const memoizedImageSourceResult = require("VideoBackground").memoizedImageSource(pendingAvatarSrc);
  const tmp2Result4 = require("utils/ColorUtils");
  const rgb2intResult = tmp2Result4.rgb2int(
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
  const obj4 = { label: null, trailing: null, onPress: null };
  const obj5 = { style: tmp.label, text: null };
  const intl = tmp2(1115).intl;
  obj5.text = intl.string(require("util").t.xzNfPz);
  obj4.label = closure_9(require("Form").FormLabel, obj5);
  const obj6 = { style: tmp.selectedColor, children: null };
  const items2 = [closure_9(pendingAccentColor(14813), { style: tmp.bannerColor, color: pendingAccentColor }), ,];
  const obj8 = {
    style: tmp.selectedColorHex,
    variant: "text-md/medium",
    color: "interactive-text-default",
    children: null,
  };
  const obj7 = { style: tmp.bannerColor, color: pendingAccentColor };
  const tmp2Result5 = require("VideoBackground");
  obj8.children = require("utils/ColorUtils").int2hex(pendingAccentColor);
  items2[1] = closure_9(require("Text/Text").Text, obj8);
  const tmp2Result6 = require("utils/ColorUtils");
  items2[2] = closure_9(require("native").Icon, {
    style: tmp.rowArrow,
    size: require("native").Icon.Sizes.CUSTOM,
    source: pendingAccentColor(14818),
  });
  obj6.children = items2;
  obj4.trailing = closure_10(View, obj6);
  obj4.onPress = function handleChangeColor() {
    showCustomColorPickerActionSheetDefault({ color: pendingAccentColor, onSelect });
  };
  return closure_9(require("TableRow").TableRow, obj4);
}
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticsObjects: closure_7, UPLOAD_BANNER_SIZE: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(4722);
let obj2 = {
  label: { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, alignItems: "center", flexDirection: "row" },
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
let obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, alignItems: "center", flexDirection: "row" };
obj2.sublabel = { color: nativeDefault.colors.TEXT_DEFAULT };
let obj4 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj2.nitroWheel = { marginLeft: nativeDefault.space.PX_8 };
let obj5 = { marginLeft: nativeDefault.space.PX_8 };
obj2.bannerColor = {
  borderColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
  borderWidth: 1,
  borderRadius: nativeDefault.radii.xs,
  height: 24,
  minWidth: 24,
};
obj2.selectedColor = { flexDirection: "row", alignItems: "center" };
obj2.selectedColorHex = { textTransform: "uppercase" };
obj2.rowArrow = { height: 13, width: 8, marginLeft: 10, marginTop: 2 };
let obj6 = {
  borderColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
  borderWidth: 1,
  borderRadius: nativeDefault.radii.xs,
  height: 24,
  minWidth: 24,
};
obj2.upsellButton = { marginTop: nativeDefault.space.PX_8 };
let obj7 = { marginTop: nativeDefault.space.PX_8 };
obj2.remove = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
obj2.titleWrapper = { flex: 0 };
obj2.titleContainer = { justifyContent: "flex-start" };
let closure_12 = createStyles.createStyles(obj2);
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
        const obj2 = { value, done: true };
        return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_128_0 = undefined;
            let base64;
            let originalMd5;
            tmp5(4689).hideActionSheet();
            const obj4 = tmp5(4689);
            dependencyMap = 1;
            c3 = 1;
            const obj6 = { value: tmp5(5307).openImagePicker(closure_1_8), done: false };
            return obj6;
          }
        } else if (dependencyMap === 1) {
          c3 = 3;
          throw value;
        } else if (dependencyMap === 2) {
          c3 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_128_0 = value;
          base64 = closure_128_0.base64;
          originalMd5 = closure_128_0.originalMd5;
          if (null != base64) {
            const obj8 = {
              assetOrigin: tmp2(7185).AssetOriginTypes.NEW_ASSET,
              imageUri: base64,
              description: "",
              originalAsset: "Array",
              originalMd5,
            };
            closure_129_0(tmp2(14809).createPendingImage(obj8));
            const obj = tmp2(14809);
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
    flag = tmp2(4380).canUsePremiumProfileCustomization(user);
    const tmp2Result = tmp2(4380);
  }
  let obj = { value: useAnalyticsLocationsDefault(isTryItOut.analyticsLocations).analyticsLocations, children: null };
  let obj2 = { title: null, trailing: null, titleWrapperStyle: null, titleContainerStyle: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t.Vgdusv);
  let tmp4Result = flag;
  if (flag) {
    tmp4Result = closure_9(NitroWheelIcon.NitroWheelIcon, {});
  }
  obj2.trailing = tmp4Result;
  ({ titleWrapper: obj3.titleWrapperStyle, titleContainer: obj3.titleContainerStyle } = tmp);
  const items = [closure_9(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2)];
  let tmp4Result4 = null;
  if (!flag) {
    let obj4 = { user };
    tmp4Result4 = closure_9(ChangeBannerColorRow, obj4);
  }
  const items1 = [tmp4Result4, ,];
  const obj5 = { style: tmp.label, children: null };
  const intl2 = util.intl;
  const string = intl2.string;
  const t = util.t;
  if (showRemoveBanner) {
    let stringResult = string(t.N0bC3P);
  } else {
    stringResult = string(t["70CYsY"]);
  }
  const items2 = [closure_9(Form.FormLabel, { text: stringResult })];
  let tmp4Result5 = !flag;
  if (!flag) {
    let obj6 = { style: tmp.nitroWheel, size: "sm" };
    tmp4Result5 = closure_9(NitroWheelIcon.NitroWheelIcon, obj6);
  }
  let obj7 = { label: closure_10(View, obj5), subLabel: null, onPress: null };
  items2[1] = tmp4Result5;
  obj5.children = items2;
  let obj8 = { style: tmp.sublabel, numberOfLines: 2, text: null };
  const intl3 = util.intl;
  const string2 = intl3.string;
  const t2 = util.t;
  if (flag) {
    let string2Result = string2(t2.IhzZlo);
  } else {
    string2Result = string2(t2.NSTmdO);
  }
  obj8.text = string2Result;
  const items3 = [closure_9(Form.FormSubLabel, obj8)];
  let tmp4Result6 = !flag;
  if (!flag) {
    const obj9 = { style: tmp.upsellButton, children: null };
    const obj10 = { analyticsObject: constants.EDIT_PROFILE_BANNER };
    obj9.children = closure_9(tmp2(14810), obj10);
    tmp4Result6 = closure_9(View, obj9);
  }
  items3[1] = tmp4Result6;
  obj7.subLabel = closure_10(closure_11, { children: items3 });
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
  obj7.onPress = handleBannerUploadSelect;
  items1[1] = closure_9(TableRow.TableRow, obj7);
  if (showRemoveBanner) {
    const obj11 = { style: null, text: null };
    const items4 = [,];
    ({ label: arr5[0], remove: arr5[1] } = tmp);
    obj11.style = items4;
    if (removeText == null) {
      const intl4 = util.intl;
      removeText = intl4.string(util.t.tT9n7D);
    }
    const obj12 = { label: null, onPress: null };
    obj11.text = removeText;
    obj12.label = closure_9(Form.FormLabel, obj11);
    obj12.onPress = function handleBannerDelete() {
      _require(null);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    };
    showRemoveBanner = closure_9(TableRow.TableRow, obj12);
  }
  const obj13 = { children: null };
  items1[2] = showRemoveBanner;
  items[1] = closure_10(TableRowGroup.TableRowGroup, { hasIcons: false, children: items1 });
  obj13.children = items;
  obj.children = closure_10(ActionSheet.ActionSheet, obj13);
  return closure_9(useAnalyticsLocations.AnalyticsLocationProvider, obj);
}
