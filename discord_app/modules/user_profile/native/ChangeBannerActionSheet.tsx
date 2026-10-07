// discord_app/modules/user_profile/native/ChangeBannerActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import TableRow from "../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import BottomSheetTitleHeader from "../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import useAnalyticsLocations from "../../app_analytics/useAnalyticsLocations.tsx";
import ActionSheet from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import utils_UploadUtilsDefault from "../../../utils/native/UploadUtils.tsx";
import UserProfileSettingsActionCreators from "../UserProfileSettingsActionCreators.tsx";
import NitroWheelIcon from "../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import Form from "../../../design/void/Form/native/index.tsx";
import showCustomColorPickerActionSheetDefault from "../../color_picker/native/showCustomColorPickerActionSheet.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserProfileSettingsStore from "../UserProfileSettingsStore.tsx";

const require = globalThis.__r;
const useAnalyticsLocationsDefault = useAnalyticsLocations;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ AnalyticsObjects: closure_7, UPLOAD_BANNER_SIZE: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(4896);
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
fn(558);
let obj8 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
const ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChangeBannerColorRow(user) {
      const cResult = require("c").c(31);
      user = user.user;
      const tmp4 = closure_12();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserProfileSettingsStore];
        const fn = function s() {
          return pendingChanges.getPendingChanges();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const obj = require("c");
      const stateFromStoresObject = require("initialize").useStateFromStoresObject(tmp5, tmp6);
      ({ pendingAccentColor, pendingAvatar } = stateFromStoresObject);
      const tmpResult = require("initialize");
      let pendingAvatarSrc = require("RecentAvatarUtils").getPendingAvatarSrc({
        userId: user.id,
        image: pendingAvatar,
      });
      const tmp11 = pendingAccentColor(7868)(user.id);
      if (pendingAvatarSrc == null) {
        pendingAvatarSrc = user.getAvatarURL(undefined, 80);
      }
      const obj2 = { userId: user.id, image: pendingAvatar };
      const tmpResult6 = require("RecentAvatarUtils");
      const tmpResult7 = require("VideoBackground");
      const memoizedImageSourceResult = require("VideoBackground").memoizedImageSource(pendingAvatarSrc);
      const dominantColorFromImage = require("VideoBackground").useDominantColorFromImage(
        pendingAvatarSrc,
        memoizedImageSourceResult,
      );
      if (cResult[2] !== dominantColorFromImage) {
        const rgb2intResult = tmp(1103).rgb2int(dominantColorFromImage);
        cResult[2] = dominantColorFromImage;
        cResult[3] = rgb2intResult;
        let tmp14 = rgb2intResult;
        const tmpResult9 = tmp(1103);
      } else {
        tmp14 = cResult[3];
      }
      _require = tmp14;
      if (undefined === pendingAccentColor) {
        let primaryColor;
        if (tmp11 != null) {
          primaryColor = tmp11.primaryColor;
        }
        pendingAccentColor = primaryColor;
      }
      if (pendingAccentColor == null) {
        pendingAccentColor = tmp14;
      }
      if (pendingAccentColor == null) {
        pendingAccentColor = 0;
      }
      if (cResult[4] !== tmp14) {
        const fn2 = function _(arg0) {
          let tmp = arg0;
          if (arg0 === closure_0) {
            tmp = null;
          }
          UserProfileSettingsActionCreators.setPendingChanges({ accentColor: tmp });
        };
        cResult[4] = tmp14;
        cResult[5] = fn2;
        let tmp17 = fn2;
      } else {
        tmp17 = cResult[5];
      }
      dependencyMap = tmp17;
      if (cResult[6] === pendingAccentColor) {
        if (cResult[7] === tmp17) {
          let tmp18 = cResult[8];
        }
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t.xzNfPz);
          cResult[9] = stringResult;
          let tmp19 = stringResult;
        } else {
          tmp19 = cResult[9];
        }
        if (cResult[10] !== tmp4.label) {
          const obj3 = { style: tmp4.label, text: tmp19 };
          const tmp23 = closure_9(tmp(8924).FormLabel, obj3);
          cResult[10] = tmp4.label;
          cResult[11] = tmp23;
          let tmp21 = tmp23;
        } else {
          tmp21 = cResult[11];
        }
        if (cResult[12] === pendingAccentColor) {
          if (cResult[13] === tmp4.bannerColor) {
            let tmp25 = cResult[14];
          }
          if (cResult[15] !== pendingAccentColor) {
            const int2hexResult = tmp(1103).int2hex(pendingAccentColor);
            cResult[15] = pendingAccentColor;
            cResult[16] = int2hexResult;
            let tmp28 = int2hexResult;
            const tmpResult10 = tmp(1103);
          } else {
            tmp28 = cResult[16];
          }
          if (cResult[17] === tmp4.selectedColorHex) {
            if (cResult[18] === tmp28) {
              let tmp30 = cResult[19];
            }
            if (cResult[20] !== tmp4.rowArrow) {
              const obj4 = { style: tmp4.rowArrow, size: tmp(1188).Icon.Sizes.CUSTOM, source: tmp10(14444) };
              const tmp35 = closure_9(tmp(1188).Icon, obj4);
              cResult[20] = tmp4.rowArrow;
              cResult[21] = tmp35;
              let tmp33 = tmp35;
            } else {
              tmp33 = cResult[21];
            }
            if (cResult[22] === tmp4.selectedColor) {
              if (cResult[23] === tmp25) {
                if (cResult[24] === tmp30) {
                  if (cResult[25] === tmp33) {
                    let tmp36 = cResult[26];
                  }
                  if (cResult[27] === tmp18) {
                    if (cResult[28] === tmp36) {
                      if (cResult[29] === tmp21) {
                        let tmp40 = cResult[30];
                      }
                      return tmp40;
                    }
                  }
                  const obj5 = { label: tmp21, trailing: tmp36, onPress: tmp18 };
                  const tmp42 = closure_9(tmp(6000).TableRow, obj5);
                  cResult[27] = tmp18;
                  cResult[28] = tmp36;
                  cResult[29] = tmp21;
                  cResult[30] = tmp42;
                  tmp40 = tmp42;
                }
              }
            }
            const obj6 = { style: tmp24, children: null };
            const items1 = [tmp25, tmp30, tmp33];
            obj6.children = items1;
            const tmp39 = closure_10(View, obj6);
            cResult[22] = tmp4.selectedColor;
            cResult[23] = tmp25;
            cResult[24] = tmp30;
            cResult[25] = tmp33;
            cResult[26] = tmp39;
            tmp36 = tmp39;
          }
          const obj7 = {
            style: tmp4.selectedColorHex,
            variant: "text-md/medium",
            color: "interactive-text-default",
            children: tmp28,
          };
          const tmp32 = closure_9(tmp(4892).Text, obj7);
          cResult[17] = tmp4.selectedColorHex;
          cResult[18] = tmp28;
          cResult[19] = tmp32;
          tmp30 = tmp32;
        }
        const obj8 = { style: tmp4.bannerColor, color: pendingAccentColor };
        const tmp27 = closure_9(tmp10(14439), obj8);
        cResult[12] = pendingAccentColor;
        cResult[13] = tmp4.bannerColor;
        cResult[14] = tmp27;
        tmp25 = tmp27;
      }
      function handleChangeColor() {
        showCustomColorPickerActionSheetDefault({ color: pendingAccentColor, onSelect });
      }
      cResult[6] = pendingAccentColor;
      cResult[7] = tmp17;
      cResult[8] = handleChangeColor;
      tmp18 = handleChangeColor;
      const tmpResult8 = require("VideoBackground");
    }
  : function ChangeBannerColorRow(user) {
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
      let pendingAvatarSrc = require("RecentAvatarUtils").getPendingAvatarSrc({
        userId: user.id,
        image: pendingAvatar,
      });
      const tmp7 = pendingAccentColor(7868)(user.id);
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
      const intl = tmp2(1126).intl;
      obj5.text = intl.string(require("util").t.xzNfPz);
      obj4.label = closure_9(require("Form").FormLabel, obj5);
      const obj6 = { style: tmp.selectedColor, children: null };
      const items2 = [closure_9(pendingAccentColor(14439), { style: tmp.bannerColor, color: pendingAccentColor }), ,];
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
        source: pendingAccentColor(14444),
      });
      obj6.children = items2;
      obj4.trailing = closure_10(View, obj6);
      obj4.onPress = function handleChangeColor() {
        showCustomColorPickerActionSheetDefault({ color: pendingAccentColor, onSelect });
      };
      return closure_9(require("TableRow").TableRow, obj4);
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/ChangeBannerActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (analyticsLocations) => {
      const cResult = require("c").c(59);
      ({ user, onBannerChange } = analyticsLocations);
      _require = onBannerChange;
      ({ removeText, showRemoveBanner, isTryItOut } = analyticsLocations);
      let tmp4 = undefined !== showRemoveBanner;
      if (tmp4) {
        tmp4 = showRemoveBanner;
      }
      const tmp6 = closure_12();
      analyticsLocations = useAnalyticsLocationsDefault(analyticsLocations.analyticsLocations).analyticsLocations;
      if (cResult[0] === (undefined !== isTryItOut && isTryItOut)) {
        if (cResult[1] === user) {
          let tmp7 = cResult[2];
        }
        if (cResult[3] !== onBannerChange) {
          _require = asyncGeneratorStep(async () => {
            if (c3 === 2) {
              c3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp4 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                c3 = 2;
                if (0 === c2) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    closure_1 = tmp5;
                    closure_128_0 = undefined;
                    let base64;
                    let originalMd5;
                    ActionSheetActionCreatorsDefault.hideActionSheet();
                    c2 = 1;
                    c3 = 1;
                    const obj6 = { value: utils_UploadUtilsDefault.openImagePicker(closure_2_8), done: false };
                    return obj6;
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj7 = { value, done: true };
                  return obj7;
                } else {
                  closure_128_0 = value;
                  base64 = closure_128_0.base64;
                  originalMd5 = closure_128_0.originalMd5;
                  if (null != base64) {
                    const obj8 = {
                      assetOrigin: tmp2(6493).AssetOriginTypes.NEW_ASSET,
                      imageUri: base64,
                      description: "",
                      originalAsset: "Array",
                      originalMd5,
                    };
                    tmp2(tmp2(14435).createPendingImage(obj8));
                    const obj = tmp2(14435);
                  }
                  c3 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp20) {
                c3 = tmp;
                throw tmp20;
              }
            }
          });
          function handleBannerUploadSelect() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          }
          cResult[3] = onBannerChange;
          cResult[4] = handleBannerUploadSelect;
        }
        if (cResult[5] !== onBannerChange) {
          class R {
            constructor() {
              tmp = closure_0(null);
              obj = closure_1(closure_2[12]);
              hideActionSheetResult = obj.hideActionSheet();
              return;
            }
          }
          cResult[5] = onBannerChange;
          cResult[6] = R;
        } else {
          class R {
            constructor() {
              tmp = closure_0(null);
              obj = closure_1(closure_2[12]);
              hideActionSheetResult = obj.hideActionSheet();
              return;
            }
          }
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          class R {
            constructor() {
              tmp = closure_0(null);
              obj = closure_1(closure_2[12]);
              hideActionSheetResult = obj.hideActionSheet();
              return;
            }
          }
          const stringResult = obj3.string(tmp(1126).t.Vgdusv);
          cResult[7] = stringResult;
          const tmp13 = stringResult;
        } else {
          class R {
            constructor() {
              tmp = closure_0(null);
              obj = closure_1(closure_2[12]);
              hideActionSheetResult = obj.hideActionSheet();
              return;
            }
          }
        }
        if (cResult[8] !== tmp7) {
          class R {
            constructor() {
              tmp = closure_0(null);
              obj = closure_1(closure_2[12]);
              hideActionSheetResult = obj.hideActionSheet();
              return;
            }
          }
          if (tmp7) {
            class R {
              constructor() {
                tmp = closure_0(null);
                obj = closure_1(closure_2[12]);
                hideActionSheetResult = obj.hideActionSheet();
                return;
              }
            }
            const tmp16 = closure_9(tmp(8346).NitroWheelIcon, {});
          }
          cResult[8] = tmp7;
          cResult[9] = tmp16;
        } else {
          class R {
            constructor() {
              tmp = closure_0(null);
              obj = closure_1(closure_2[12]);
              hideActionSheetResult = obj.hideActionSheet();
              return;
            }
          }
        }
        if (cResult[10] === tmp6.titleContainer) {
          class R {
            constructor() {
              tmp = closure_0(null);
              obj = closure_1(closure_2[12]);
              hideActionSheetResult = obj.hideActionSheet();
              return;
            }
          }
        }
        const obj5 = { title: tmp13, trailing: tmp15, titleWrapperStyle: null, titleContainerStyle: null };
        ({ titleWrapper: obj4.titleWrapperStyle, titleContainer: obj4.titleContainerStyle } = tmp6);
        const tmp19 = closure_9(tmp(6651).BottomSheetTitleHeader, obj5);
        cResult[10] = tmp6.titleContainer;
        cResult[11] = tmp6.titleWrapper;
        cResult[12] = tmp15;
        cResult[13] = tmp19;
      }
      let result = tmp5;
      if (!(undefined !== isTryItOut && isTryItOut)) {
        class R {
          constructor() {
            tmp = closure_0(null);
            obj = closure_1(closure_2[12]);
            hideActionSheetResult = obj.hideActionSheet();
            return;
          }
        }
        result = obj2.canUsePremiumProfileCustomization(user);
      }
      cResult[0] = undefined !== isTryItOut && isTryItOut;
      cResult[1] = user;
      cResult[2] = result;
      tmp7 = result;
      let obj = require("c");
    }
  : (isTryItOut) => {
      ({ user, onBannerChange: require, removeText, showRemoveBanner } = isTryItOut);
      if (showRemoveBanner === undefined) {
        showRemoveBanner = false;
      }
      let flag = isTryItOut.isTryItOut;
      if (flag === undefined) {
        flag = false;
      }
      importDefault = async function _handleBannerUploadSelect2(dependencyMap) {
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
            return { value: "IconComponent", done: null };
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
                tmp5(4860).hideActionSheet();
                const obj4 = tmp5(4860);
                dependencyMap = 1;
                c3 = 1;
                const obj6 = { value: tmp5(7287).openImagePicker(closure_1_8), done: false };
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
                  assetOrigin: tmp2(6493).AssetOriginTypes.NEW_ASSET,
                  imageUri: base64,
                  description: "",
                  originalAsset: "Array",
                  originalMd5,
                };
                closure_129_0(tmp2(14435).createPendingImage(obj8));
                const obj = tmp2(14435);
              }
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp20) {
            c3 = tmp;
            throw tmp20;
          }
        }
      };
      const tmp = closure_12();
      if (!flag) {
        flag = tmp2(4534).canUsePremiumProfileCustomization(user);
        const tmp2Result = tmp2(4534);
      }
      let obj = {
        value: useAnalyticsLocationsDefault(isTryItOut.analyticsLocations).analyticsLocations,
        children: null,
      };
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
        tmp4Result4 = closure_9(closure_13, obj4);
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
        obj9.children = closure_9(tmp2(14436), obj10);
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
    };
