// === Module 16032: ChangeBannerActionSheet ===

// Module 16032 (ChangeBannerActionSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6379 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 11946 */;
import showCustomColorPickerActionSheetDefault from "showCustomColorPickerActionSheet" /* 16038 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 6376 */;

const TableRowGroup = tmp4(6140);
const TableRow = tmp4(6144);
const useAnalyticsLocations = tmp4(6379);
const BottomSheetTitleHeader = tmp4(7507);
const ActionSheet = tmp4(7546);
const Form = tmp4(8088);
const NitroWheelIcon = tmp4(9637);
const ProfileEditSheetNitroUpdatesExperiment = tmp4(16033);
require = fn;
function ChangeBannerColorRow(arg0) {
  ({ user, showHexValue } = arg0);
  if (showHexValue === undefined) {
    showHexValue = true;
  }
  _require = undefined;
  pendingAccentColor = undefined;
  dependencyMap = undefined;
  let tmp = closure_12();
  items = [UserProfileSettingsStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => pendingChanges.getPendingChanges());
  ({ pendingAccentColor, pendingAvatar } = stateFromStoresObject);
  const obj = require("initialize");
  let pendingAvatarSrc = require("RecentAvatarUtils").getPendingAvatarSrc({ userId: user.id, image: pendingAvatar });
  const tmp7 = pendingAccentColor(6162)(user.id);
  if (pendingAvatarSrc == null) {
    pendingAvatarSrc = user.getAvatarURL(undefined, 80);
  }
  const obj2 = require("RecentAvatarUtils");
  const obj3 = { userId: user.id, image: pendingAvatar };
  const tmp2Result = require("VideoBackground");
  const memoizedImageSourceResult = require("VideoBackground").memoizedImageSource(pendingAvatarSrc);
  const tmp2Result5 = require("utils/ColorUtils");
  const rgb2intResult = tmp2Result5.rgb2int(require("VideoBackground").useDominantColorFromImage(pendingAvatarSrc, memoizedImageSourceResult));
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
  function handleChangeColor() {
    showCustomColorPickerActionSheetDefault({ color: pendingAccentColor, onSelect });
  }
  const items1 = [rgb2intResult];
  dependencyMap = noop.useCallback((arg0) => {
    let tmp = arg0;
    if (arg0 === c0) {
      tmp = null;
    }
    UserProfileSettingsActionCreators.setPendingChanges({ accentColor: tmp });
  }, items1);
  if (showHexValue) {
    const obj4 = { label: null, trailing: null, onPress: null };
    const obj5 = { style: tmp.label, text: null };
    const intl2 = tmp2(1112).intl;
    obj5.text = intl2.string(tmp2(1112).t.xzNfPz);
    obj4.label = closure_9(tmp2(8088).FormLabel, obj5);
    const obj6 = { style: tmp.selectedColor, children: null };
    const obj7 = { style: tmp.bannerColor, color: pendingAccentColor };
    const items2 = [closure_9(tmp6(16040), obj7), , ];
    const obj8 = { style: tmp.selectedColorHex, variant: "body-md/medium", color: "interactive-text-default", children: tmp2(1089).int2hex(pendingAccentColor) };
    items2[1] = closure_9(tmp2(5634).Text, obj8);
    const obj9 = { style: tmp.rowArrow, size: tmp2(1186).Icon.Sizes.CUSTOM, source: tmp6(16045) };
    items2[2] = closure_9(tmp2(1186).Icon, obj9);
    obj6.children = items2;
    obj4.trailing = closure_10(View, obj6);
    obj4.onPress = handleChangeColor;
    let obj10 = obj4;
    const tmp2Result7 = tmp2(1089);
  } else {
    obj10 = { label: null, trailing: null, arrow: true, accessibilityValue: null, onPress: null };
    const intl = tmp2(1112).intl;
    obj10.label = intl.string(tmp2(1112).t.xzNfPz);
    const obj11 = { style: tmp.bannerColor, color: pendingAccentColor };
    obj10.trailing = closure_9(tmp6(16040), obj11);
    const obj12 = { text: tmp2(1089).int2hex(pendingAccentColor) };
    obj10.accessibilityValue = obj12;
    obj10.onPress = handleChangeColor;
    const tmp2Result8 = tmp2(1089);
  }
  return closure_9(require("TableRow").TableRow, obj10);
}
const View = fn(17).View;
const Constants = fn(1071);
({ AnalyticsObjects: metroImportDefault, UPLOAD_BANNER_SIZE: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(5043);
let obj2 = { label: { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, alignItems: "center", flexDirection: "row" }, sublabel: null, nitroWheel: null, bannerColor: null, selectedColor: null, selectedColorHex: null, rowArrow: null, upsellButton: null, remove: null, titleWrapper: null, titleContainer: null };
let obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, alignItems: "center", flexDirection: "row" };
obj2.sublabel = { color: nativeDefault.colors.TEXT_DEFAULT };
let obj4 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj2.nitroWheel = { marginLeft: nativeDefault.space.PX_8 };
let obj5 = { marginLeft: nativeDefault.space.PX_8 };
obj2.bannerColor = { borderColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderWidth: 1, borderRadius: nativeDefault.radii.xs, height: 24, minWidth: 24 };
obj2.selectedColor = { flexDirection: "row", alignItems: "center" };
obj2.selectedColorHex = { textTransform: "uppercase" };
obj2.rowArrow = { height: 13, width: 8, marginLeft: 10, marginTop: 2 };
let obj6 = { borderColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderWidth: 1, borderRadius: nativeDefault.radii.xs, height: 24, minWidth: 24 };
obj2.upsellButton = { marginTop: nativeDefault.space.PX_8 };
let obj7 = { marginTop: nativeDefault.space.PX_8 };
obj2.remove = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
obj2.titleWrapper = { flex: 0 };
obj2.titleContainer = { justifyContent: "flex-start" };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/ChangeBannerActionSheet.tsx");

export default function ChangeBannerActionSheet(isTryItOut) {
  ({ user, onBannerChange: require, onGifBannerSelect, showRemoveBanner } = isTryItOut);
  ({ analyticsLocations, guildId } = isTryItOut);
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
        return { value: "HermesInternal", done: "+95" };
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
            tmp5(5257).hideActionSheet();
            const obj4 = tmp5(5257);
            dependencyMap = 1;
            c3 = 1;
            const obj6 = { value: tmp5(8136).openImagePicker(closure_1_8), done: false };
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
            const obj8 = { assetOrigin: tmp2(7346).AssetOriginTypes.NEW_ASSET, imageUri: base64, description: "", originalAsset: "Array", originalMd5 };
            closure_129_0(tmp2(16034).createPendingImage(obj8));
            const obj = tmp2(16034);
          }
          c3 = 3;
          return { value: "HermesInternal", done: "+95" };
        }
      } catch (tmp20) {
        c3 = tmp;
        throw tmp20;
      }
    }
  };
  const tmp = closure_12();
  const analyticsLocations2 = useAnalyticsLocationsDefault(analyticsLocations).analyticsLocations;
  if (!flag) {
    flag = tmp2(2174).canUsePremiumProfileCustomization(user);
    const tmp2Result = tmp2(2174);
  }
  if (null != guildId) {
    if (null != user.banner) {
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t.jHlJNS);
    }
    function handleBannerUploadSelect() {
      const self = this;
      const apply = closure_1.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    function handleBannerDelete() {
      _require(null);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
    const profileEditSheetNitroUpdatesConfig = ProfileEditSheetNitroUpdatesExperiment.useProfileEditSheetNitroUpdatesConfig("change_banner_action_sheet_native");
    if (profileEditSheetNitroUpdatesConfig.enabled) {
      let obj = { text: null };
      const intl7 = util.intl;
      obj.text = intl7.string(util.t.TiLCgw);
      const tmp9Result = closure_9(tmp2(16036), obj);
      let obj2 = { value: analyticsLocations2, children: null };
      let obj3 = { title: null };
      const intl8 = util.intl;
      obj3.title = intl8.string(util.t.tLLYUw);
      items = [closure_9(BottomSheetTitleHeader.BottomSheetTitleHeader, obj3), ];
      let tmp9Result10 = !flag;
      if (!flag) {
        const obj5 = { user, showHexValue: false };
        tmp9Result10 = closure_9(ChangeBannerColorRow, obj5);
      }
      const items1 = [tmp9Result10, , , , ];
      if (flag) {
        items1[1] = !flag;
        let tmp9Result11 = flag;
        if (flag) {
          let obj6 = { label: null, subLabel: null, onPress: null };
          const intl10 = util.intl;
          obj6.label = intl10.string(util.t["MsUY/S"]);
          obj6.subLabel = tmp9Result;
          obj6.onPress = handleBannerUploadSelect;
          tmp9Result11 = closure_9(TableRow.TableRow, obj6);
        }
        items1[2] = tmp9Result11;
        if (flag) {
          flag = null != onGifBannerSelect;
        }
        if (flag) {
          let obj7 = { label: null, subLabel: null, onPress: null };
          const intl11 = util.intl;
          obj7.label = intl11.string(util.t["xsC+/y"]);
          obj7.subLabel = tmp9Result;
          obj7.onPress = onGifBannerSelect;
          flag = closure_9(TableRow.TableRow, obj7);
        }
        items1[3] = flag;
        if (showRemoveBanner) {
          let obj8 = { label: stringResult, variant: "danger", onPress: handleBannerDelete };
          showRemoveBanner = closure_9(TableRow.TableRow, obj8);
        }
        const obj9 = { children: null };
        const obj10 = { hasIcons: false, children: null };
        items1[4] = showRemoveBanner;
        obj10.children = items1;
        items[1] = closure_10(TableRowGroup.TableRowGroup, obj10);
        obj9.children = items;
        obj2.children = closure_10(ActionSheet.ActionSheet, obj9);
        return closure_9(useAnalyticsLocations.AnalyticsLocationProvider, obj2);
      } else {
        let intl9 = util.intl;
        let string3 = intl9.string;
        let t1 = util.t;
        if (showRemoveBanner) {
          let string3Result = string3(t1.N0bC3P);
        } else {
          string3Result = string3(t1["70CYsY"]);
        }
        t1 = { label: string3Result, subLabel: null, analyticsObject: null, skipRoadblock: null };
        intl9 = util.intl;
        string3 = intl9.string;
        t1.subLabel = string3(util.t.OFNrmu);
        t1.analyticsObject = constants.EDIT_PROFILE_BANNER;
        t1.skipRoadblock = tmp8;
        closure_9(tmp2(16037), t1);
        const tmp2Result4 = tmp2(16037);
      }
      const tmp2Result3 = tmp2(16036);
    } else {
      const obj11 = { value: analyticsLocations2, children: null };
      const obj12 = { title: null, trailing: null, titleWrapperStyle: null, titleContainerStyle: null };
      const intl3 = util.intl;
      obj12.title = intl3.string(util.t.Vgdusv);
      let tmp9Result13 = flag;
      if (flag) {
        tmp9Result13 = closure_9(NitroWheelIcon.NitroWheelIcon, {});
      }
      obj12.trailing = tmp9Result13;
      ({ titleWrapper: obj4.titleWrapperStyle, titleContainer: obj4.titleContainerStyle } = tmp);
      const items2 = [closure_9(BottomSheetTitleHeader.BottomSheetTitleHeader, obj12), ];
      let tmp9Result14 = null;
      if (!flag) {
        const obj13 = { user };
        tmp9Result14 = closure_9(ChangeBannerColorRow, obj13);
      }
      const items3 = [tmp9Result14, , , ];
      const obj14 = { style: tmp.label, children: null };
      const intl4 = util.intl;
      const string = intl4.string;
      const t = util.t;
      if (showRemoveBanner) {
        let stringResult1 = string(t.N0bC3P);
      } else {
        stringResult1 = string(t["70CYsY"]);
      }
      const obj15 = { text: stringResult1 };
      const items4 = [closure_9(Form.FormLabel, obj15), ];
      let tmp9Result15 = !flag;
      if (!flag) {
        const obj16 = { style: tmp.nitroWheel, size: "sm" };
        tmp9Result15 = closure_9(NitroWheelIcon.NitroWheelIcon, obj16);
      }
      const obj17 = { label: null, subLabel: null, onPress: null };
      items4[1] = tmp9Result15;
      obj14.children = items4;
      obj17.label = closure_10(View, obj14);
      const obj18 = { style: tmp.sublabel, numberOfLines: 2, text: null };
      const intl5 = util.intl;
      const string2 = intl5.string;
      const t2 = util.t;
      if (flag) {
        let string2Result = string2(t2.IhzZlo);
      } else {
        string2Result = string2(t2.NSTmdO);
      }
      obj18.text = string2Result;
      const items5 = [closure_9(Form.FormSubLabel, obj18), ];
      let tmp9Result16 = !flag;
      if (!flag) {
        const obj19 = { style: tmp.upsellButton, children: null };
        const obj20 = { analyticsObject: constants.EDIT_PROFILE_BANNER };
        obj19.children = closure_9(tmp2(16035), obj20);
        tmp9Result16 = closure_9(View, obj19);
      }
      const obj21 = { children: null };
      items5[1] = tmp9Result16;
      obj21.children = items5;
      obj17.subLabel = closure_10(closure_11, obj21);
      let tmp22;
      if (flag) {
        tmp22 = handleBannerUploadSelect;
      }
      obj17.onPress = tmp22;
      items3[1] = closure_9(TableRow.TableRow, obj17);
      let tmp9Result17 = flag;
      if (flag) {
        tmp9Result17 = null != onGifBannerSelect;
      }
      if (tmp9Result17) {
        const obj22 = { label: null, onPress: null };
        const intl6 = util.intl;
        obj22.label = intl6.string(util.t["xsC+/y"]);
        obj22.onPress = onGifBannerSelect;
        tmp9Result17 = closure_9(TableRow.TableRow, obj22);
      }
      items3[2] = tmp9Result17;
      let tmp9Result18 = showRemoveBanner;
      if (showRemoveBanner) {
        const obj23 = { label: null, onPress: null };
        const obj24 = { style: null, text: null };
        const items6 = [, ];
        ({ label: arr5[0], remove: arr5[1] } = tmp);
        obj24.style = items6;
        obj24.text = stringResult;
        obj23.label = closure_9(Form.FormLabel, obj24);
        obj23.onPress = handleBannerDelete;
        tmp9Result18 = closure_9(TableRow.TableRow, obj23);
      }
      const obj25 = { children: null };
      const obj26 = { hasIcons: false, children: null };
      items3[3] = tmp9Result18;
      obj26.children = items3;
      items2[1] = closure_10(TableRowGroup.TableRowGroup, obj26);
      obj25.children = items2;
      obj11.children = closure_10(ActionSheet.ActionSheet, obj25);
      return closure_9(useAnalyticsLocations.AnalyticsLocationProvider, obj11);
    }
    const tmp4Result = ProfileEditSheetNitroUpdatesExperiment;
  }
  const intl = util.intl;
  stringResult = intl.string(util.t.tT9n7D);
};