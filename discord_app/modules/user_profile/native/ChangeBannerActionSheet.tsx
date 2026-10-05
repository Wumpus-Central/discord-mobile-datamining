// discord_app/modules/user_profile/native/ChangeBannerActionSheet.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../intl/index.native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import TableRow3 from "../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup2 from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import BottomSheetTitleHeader2 from "../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import useAnalyticsLocations from "../../app_analytics/useAnalyticsLocations.tsx";
import ActionSheet2 from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import utils_UploadUtilsDefault from "../../../utils/native/UploadUtils.tsx";
import UserProfileSettingsActionCreators from "../UserProfileSettingsActionCreators.tsx";
import NitroWheelIcon from "../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import Form from "../../../design/void/Form/native/index.tsx";
import showCustomColorPickerActionSheetDefault from "../../color_picker/native/showCustomColorPickerActionSheet.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../_runtime/00019_react.js";
import UserProfileSettingsStore from "../UserProfileSettingsStore.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const useAnalyticsLocationsDefault = useAnalyticsLocations;
let _require, analyticsLocations, c2, c3, dependencyMap;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let unpackModuleId;
const View = react_native.View;
({ AnalyticsObjects: metroImportDefault, UPLOAD_BANNER_SIZE: metroImportAll } = Constants);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  label: obj2,
  sublabel: obj3,
  nitroWheel: obj4,
  bannerColor: obj5,
  selectedColor: { flexDirection: "row", alignItems: "center" },
  selectedColorHex: { textTransform: "uppercase" },
  rowArrow: { height: 13, width: 8, marginLeft: 10, marginTop: 2 },
  upsellButton: obj6,
  remove: obj7,
  titleWrapper: { flex: 0 },
  titleContainer: { justifyContent: "flex-start" },
};
obj2 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, alignItems: "center", flexDirection: "row" };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj4 = { marginLeft: nativeDefault.space.PX_8 };
obj5 = {
  borderColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
  borderWidth: 1,
  borderRadius: nativeDefault.radii.xs,
  height: 24,
  minWidth: 24,
};
obj6 = { marginTop: nativeDefault.space.PX_8 };
obj7 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (analyticsLocations) => {
      let isTryItOut;
      let obj2;
      let obj3;
      let onBannerChange;
      let removeText;
      let showRemoveBanner;
      let tmp16;
      let user;
      let obj = onBannerChange(576);
      const cResult = obj.c(59);
      ({ user, onBannerChange } = analyticsLocations);
      ({ removeText, showRemoveBanner, isTryItOut } = analyticsLocations);
      let tmp4 = undefined !== showRemoveBanner;
      analyticsLocations = analyticsLocations.analyticsLocations;
      if (tmp4) {
        tmp4 = showRemoveBanner;
      }
      const tmp6 = closure_12();
      const analyticsLocations2 = useAnalyticsLocationsDefault(analyticsLocations).analyticsLocations;
      if (cResult[0] === (undefined !== isTryItOut && isTryItOut)) {
        let tmp7;
        let tmp13;
        if (cResult[1] === user) {
          tmp7 = cResult[2];
        }
        if (cResult[3] !== onBannerChange) {
          let closure_0 = _asyncToGenerator(async () => {
            let obj4;
            if (c3 === 2) {
              c3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
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
                let tmp;
                let base64;
                let originalMd5;
                c3 = 2;
                if (0 === c2) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj5 = { value, done: true };
                    return obj5;
                  } else {
                    let closure_1 = tmp4;
                    tmp = undefined;
                    base64 = undefined;
                    originalMd5 = undefined;
                    const obj3 = ActionSheetActionCreatorsDefault;
                    obj3.hideActionSheet();
                    c2 = 1;
                    c3 = 1;
                    const obj6 = { value: obj4.openImagePicker(closure_2_8), done: false };
                    obj4 = utils_UploadUtilsDefault;
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
                  tmp = value;
                  base64 = tmp.base64;
                  originalMd5 = tmp.originalMd5;
                  if (null != base64) {
                    const obj = {
                      assetOrigin: tmp(dependencyMap[15]).AssetOriginTypes.NEW_ASSET,
                      imageUri: base64,
                      description: "",
                      originalAsset: "Array",
                      originalMd5,
                    };
                    const createPendingImage = tmp(dependencyMap[14]).createPendingImage;
                    const tmp10 = tmp(dependencyMap[14]);
                    tmp(createPendingImage(obj));
                  }
                  c3 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp20) {
                c3 = 3;
                throw tmp20;
              }
            }
          });
          function handleBannerUploadSelect() {
            return closure_0(...arguments);
          }
          cResult[3] = onBannerChange;
          cResult[4] = handleBannerUploadSelect;
        }
        if (cResult[5] !== onBannerChange) {
          class R {
            constructor() {
              onBannerChange(null);
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
            }
          }
          cResult[5] = onBannerChange;
          cResult[6] = R;
        } else {
          class R {
            constructor() {
              onBannerChange(null);
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
            }
          }
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          class R {
            constructor() {
              onBannerChange(null);
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
            }
          }
          const stringResult = obj3.string(onBannerChange(1126).t.Vgdusv);
          cResult[7] = stringResult;
          tmp13 = stringResult;
        } else {
          class R {
            constructor() {
              onBannerChange(null);
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
            }
          }
        }
        if (cResult[8] !== tmp7) {
          class R {
            constructor() {
              onBannerChange(null);
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
            }
          }
          if (tmp16) {
            class R {
              constructor() {
                onBannerChange(null);
                const obj = ActionSheetActionCreatorsDefault;
                obj.hideActionSheet();
              }
            }
            tmp16 = closure_9(onBannerChange(8313).NitroWheelIcon, {});
          }
          cResult[8] = tmp7;
          cResult[9] = tmp16;
        } else {
          class R {
            constructor() {
              onBannerChange(null);
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
            }
          }
        }
        if (cResult[10] === tmp6.titleContainer) {
          class R {
            constructor() {
              onBannerChange(null);
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
            }
          }
        }
        let obj5 = { title: tmp13, trailing: tmp15, titleWrapperStyle: null, titleContainerStyle: null };
        ({ titleWrapper: obj4.titleWrapperStyle, titleContainer: obj4.titleContainerStyle } = tmp6);
        cResult[10] = tmp6.titleContainer;
        cResult[11] = tmp6.titleWrapper;
        cResult[12] = tmp15;
        cResult[13] = closure_9(onBannerChange(6644).BottomSheetTitleHeader, obj5);
        const tmp19 = closure_9(onBannerChange(6644).BottomSheetTitleHeader, obj5);
      }
      let result = tmp5;
      if (!result) {
        class R {
          constructor() {
            onBannerChange(null);
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
          }
        }
        result = obj2.canUsePremiumProfileCustomization(user);
      }
      cResult[0] = undefined !== isTryItOut && isTryItOut;
      cResult[1] = user;
      cResult[2] = result;
      tmp7 = result;
    }
  : (analyticsLocations) => {
      let ActionSheet;
      let handleBannerUploadSelect;
      let intl;
      let items2;
      let items3;
      let items4;
      let obj10;
      let obj13;
      let removeText;
      let require;
      let showRemoveBanner;
      let string2Result;
      let stringResult;
      let user;
      ({ user, onBannerChange: require, removeText, showRemoveBanner } = analyticsLocations);
      analyticsLocations = analyticsLocations.analyticsLocations;
      if (showRemoveBanner === undefined) {
        showRemoveBanner = false;
      }
      let flag = analyticsLocations.isTryItOut;
      if (flag === undefined) {
        flag = false;
      }
      let obj = function _handleBannerUploadSelect2() {
        obj = _asyncToGenerator(async () => {
          let closure_0;
          let closure_1;
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
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
              let tmp;
              let base64;
              let originalMd5;
              c3 = 2;
              if (0 === c2) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  tmp = undefined;
                  base64 = undefined;
                  originalMd5 = undefined;
                  const obj3 = tmp4(c2[12]);
                  obj3.hideActionSheet();
                  const obj4 = tmp4(c2[13]);
                  c2 = 1;
                  c3 = 1;
                  const obj6 = { value: obj4.openImagePicker(closure_1_8), done: false };
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
                tmp = value;
                base64 = tmp.base64;
                originalMd5 = tmp.originalMd5;
                if (null != base64) {
                  obj = {
                    assetOrigin: tmp(c2[15]).AssetOriginTypes.NEW_ASSET,
                    imageUri: base64,
                    description: "",
                    originalAsset: "Array",
                    originalMd5,
                  };
                  const createPendingImage = tmp(c2[14]).createPendingImage;
                  const tmp10 = tmp(c2[14]);
                  closure_129_0(createPendingImage(obj));
                }
                c3 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp20) {
              c3 = 3;
              throw tmp20;
            }
          }
        });
        return obj(...arguments);
      };
      let tmp = closure_12();
      const analyticsLocations2 = obj(6657)(analyticsLocations).analyticsLocations;
      if (!flag) {
        const tmp2Result = obj(4528);
        flag = tmp2Result.canUsePremiumProfileCustomization(user);
      }
      obj = { value: analyticsLocations2, children: closure_10(ActionSheet, obj13) };
      const AnalyticsLocationProvider = useAnalyticsLocations.AnalyticsLocationProvider;
      ActionSheet = ActionSheet2.ActionSheet;
      let obj2 = {
        title: intl.string(intl5.t.Vgdusv),
        trailing: flag && closure_9(NitroWheelIcon.NitroWheelIcon, {}),
        titleWrapperStyle: null,
        titleContainerStyle: null,
      };
      const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
      intl = intl5.intl;
      ({ titleWrapper: obj3.titleWrapperStyle, titleContainer: obj3.titleContainerStyle } = tmp);
      const items = [,];
      flag && closure_9(NitroWheelIcon.NitroWheelIcon, {});
      items[0] = closure_9(BottomSheetTitleHeader, obj2);
      let tmp4Result = null;
      const TableRowGroup = TableRowGroup2.TableRowGroup;
      if (!flag) {
        let obj4 = { user };
        tmp4Result = closure_9(closure_13, obj4);
      }
      const items1 = [tmp4Result, ,];
      let obj5 = { style: tmp.label, children: items2 };
      const TableRow = TableRow3.TableRow;
      const FormLabel = Form.FormLabel;
      const intl2 = intl5.intl;
      const string = intl2.string;
      const t = intl5.t;
      if (showRemoveBanner) {
        stringResult = string(t.N0bC3P);
      } else {
        stringResult = string(t["70CYsY"]);
      }
      items2 = [closure_9(FormLabel, { text: stringResult })];
      let tmp4Result3 = !flag;
      if (tmp4Result3) {
        let obj6 = { style: tmp.nitroWheel, size: "sm" };
        tmp4Result3 = closure_9(NitroWheelIcon.NitroWheelIcon, obj6);
      }
      let obj7 = {
        label: closure_10(View, obj5),
        subLabel: closure_10(closure_11, { children: items3 }),
        onPress: handleBannerUploadSelect,
      };
      items2[1] = tmp4Result3;
      const obj8 = { style: tmp.sublabel, numberOfLines: 2, text: string2Result };
      const FormSubLabel = Form.FormSubLabel;
      const intl3 = intl5.intl;
      const string2 = intl3.string;
      const t2 = intl5.t;
      if (flag) {
        string2Result = string2(t2.IhzZlo);
      } else {
        string2Result = string2(t2.NSTmdO);
      }
      items3 = [closure_9(FormSubLabel, obj8)];
      let tmp4Result4 = !flag;
      if (tmp4Result4) {
        const obj9 = { style: tmp.upsellButton, children: closure_9(obj(14420), obj10) };
        obj10 = { analyticsObject: constants.EDIT_PROFILE_BANNER };
        tmp4Result4 = closure_9(View, obj9);
      }
      items3[1] = tmp4Result4;
      handleBannerUploadSelect = undefined;
      if (flag) {
        handleBannerUploadSelect = function handleBannerUploadSelect() {
          return obj(...arguments);
        };
      }
      items1[1] = closure_9(TableRow, obj7);
      if (showRemoveBanner) {
        const TableRow2 = TableRow3.TableRow;
        const obj11 = { style: items4, text: removeText };
        items4 = [,];
        ({ label: arr5[0], remove: arr5[1] } = tmp);
        const FormLabel2 = Form.FormLabel;
        if (removeText == null) {
          const intl4 = intl5.intl;
          removeText = intl4.string(intl5.t.tT9n7D);
        }
        const obj12 = {
          label: closure_9(FormLabel2, obj11),
          onPress: function handleBannerDelete() {
            _require(null);
            obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
          },
        };
        showRemoveBanner = closure_9(TableRow2, obj12);
      }
      obj13 = { children: items };
      items1[2] = showRemoveBanner;
      items[1] = closure_10(TableRowGroup, { hasIcons: false, children: items1 });
      return closure_9(AnalyticsLocationProvider, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChangeBannerColorRow(user) {
      let closure_0;
      let items1;
      let onSelect;
      let pendingAccentColor;
      let pendingAvatar;
      let pendingChanges;
      let tmp14;
      let tmp17;
      let tmp5;
      let tmp6;
      let tmp = _require;
      let obj = require("react");
      const cResult = obj.c(31);
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
      const tmpResult = tmp(504);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp5, tmp6);
      ({ pendingAccentColor, pendingAvatar } = stateFromStoresObject);
      const obj2 = { userId: user.id, image: pendingAvatar };
      const tmpResult6 = tmp(7840);
      let pendingAvatarSrc = tmpResult6.getPendingAvatarSrc(obj2);
      const tmp11 = pendingAccentColor(7857)(user.id);
      if (pendingAvatarSrc == null) {
        pendingAvatarSrc = user.getAvatarURL(undefined, 80);
      }
      const tmpResult7 = tmp(7920);
      const memoizedImageSourceResult = tmpResult7.memoizedImageSource(pendingAvatarSrc);
      const tmpResult8 = tmp(7920);
      const dominantColorFromImage = tmpResult8.useDominantColorFromImage(pendingAvatarSrc, memoizedImageSourceResult);
      if (cResult[2] !== dominantColorFromImage) {
        const tmpResult9 = tmp(1103);
        const rgb2intResult = tmpResult9.rgb2int(dominantColorFromImage);
        cResult[2] = dominantColorFromImage;
        cResult[3] = rgb2intResult;
        tmp14 = rgb2intResult;
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
          const obj = UserProfileSettingsActionCreators;
          obj.setPendingChanges({ accentColor: tmp });
        };
        cResult[4] = tmp14;
        cResult[5] = fn2;
        tmp17 = fn2;
      } else {
        tmp17 = cResult[5];
      }
      dependencyMap = tmp17;
      if (cResult[6] === pendingAccentColor) {
        let tmp18;
        let tmp19;
        let tmp21;
        if (cResult[7] === tmp17) {
          tmp18 = cResult[8];
        }
        const _Symbol = Symbol;
        const label = tmp4.label;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t.xzNfPz);
          cResult[9] = stringResult;
          tmp19 = stringResult;
        } else {
          tmp19 = cResult[9];
        }
        if (cResult[10] !== tmp4.label) {
          const obj3 = { style: label, text: tmp19 };
          const tmp23 = closure_9(tmp(8895).FormLabel, obj3);
          cResult[10] = tmp4.label;
          cResult[11] = tmp23;
          tmp21 = tmp23;
        } else {
          tmp21 = cResult[11];
        }
        if (cResult[12] === pendingAccentColor) {
          let tmp25;
          let tmp28;
          if (cResult[13] === tmp4.bannerColor) {
            tmp25 = cResult[14];
          }
          const selectedColorHex = tmp4.selectedColorHex;
          if (cResult[15] !== pendingAccentColor) {
            const tmpResult10 = tmp(1103);
            const int2hexResult = tmpResult10.int2hex(pendingAccentColor);
            cResult[15] = pendingAccentColor;
            cResult[16] = int2hexResult;
            tmp28 = int2hexResult;
          } else {
            tmp28 = cResult[16];
          }
          if (cResult[17] === tmp4.selectedColorHex) {
            let tmp30;
            let tmp33;
            if (cResult[18] === tmp28) {
              tmp30 = cResult[19];
            }
            if (cResult[20] !== tmp4.rowArrow) {
              const obj4 = {
                style: tmp4.rowArrow,
                size: tmp(1188).Icon.Sizes.CUSTOM,
                source: pendingAccentColor(14428),
              };
              const Icon = tmp(1188).Icon;
              const tmp35 = closure_9(Icon, obj4);
              cResult[20] = tmp4.rowArrow;
              cResult[21] = tmp35;
              tmp33 = tmp35;
            } else {
              tmp33 = cResult[21];
            }
            if (cResult[22] === tmp4.selectedColor) {
              if (cResult[23] === tmp25) {
                if (cResult[24] === tmp30) {
                  let tmp36;
                  if (cResult[25] === tmp33) {
                    tmp36 = cResult[26];
                  }
                  if (cResult[27] === tmp18) {
                    if (cResult[28] === tmp36) {
                      let tmp40;
                      if (cResult[29] === tmp21) {
                        tmp40 = cResult[30];
                      }
                      return tmp40;
                    }
                  }
                  const obj5 = { label: tmp21, trailing: tmp36, onPress: tmp18 };
                  const tmp42 = closure_9(tmp(5993).TableRow, obj5);
                  cResult[27] = tmp18;
                  cResult[28] = tmp36;
                  cResult[29] = tmp21;
                  cResult[30] = tmp42;
                  tmp40 = tmp42;
                }
              }
            }
            const obj6 = { style: tmp24, children: items1 };
            items1 = [tmp25, tmp30, tmp33];
            const tmp39 = closure_10(View, obj6);
            cResult[22] = tmp4.selectedColor;
            cResult[23] = tmp25;
            cResult[24] = tmp30;
            cResult[25] = tmp33;
            cResult[26] = tmp39;
            tmp36 = tmp39;
          }
          const obj7 = {
            style: selectedColorHex,
            variant: "text-md/medium",
            color: "interactive-text-default",
            children: tmp28,
          };
          const tmp32 = closure_9(tmp(4886).Text, obj7);
          cResult[17] = tmp4.selectedColorHex;
          cResult[18] = tmp28;
          cResult[19] = tmp32;
          tmp30 = tmp32;
        }
        const obj8 = { style: tmp4.bannerColor, color: pendingAccentColor };
        const tmp27 = closure_9(pendingAccentColor(14423), obj8);
        cResult[12] = pendingAccentColor;
        cResult[13] = tmp4.bannerColor;
        cResult[14] = tmp27;
        tmp25 = tmp27;
      }
      function handleChangeColor() {
        const obj = { color: pendingAccentColor, onSelect };
        showCustomColorPickerActionSheetDefault(obj);
      }
      cResult[6] = pendingAccentColor;
      cResult[7] = tmp17;
      cResult[8] = handleChangeColor;
      tmp18 = handleChangeColor;
    }
  : function ChangeBannerColorRow(user) {
      let FormLabel;
      let c0;
      let intl;
      let items2;
      let obj5;
      let obj6;
      let onSelect;
      let pendingAccentColor;
      let pendingAvatar;
      let pendingChanges;
      let tmp2Result6;
      user = user.user;
      _require = undefined;
      pendingAccentColor = undefined;
      dependencyMap = undefined;
      let tmp = closure_12();
      let obj = require("get initialized");
      const items = [UserProfileSettingsStore];
      const stateFromStoresObject = obj.useStateFromStoresObject(items, () => pendingChanges.getPendingChanges());
      ({ pendingAccentColor, pendingAvatar } = stateFromStoresObject);
      const obj2 = require("RecentAvatarUtils");
      const obj3 = { userId: user.id, image: pendingAvatar };
      let pendingAvatarSrc = obj2.getPendingAvatarSrc(obj3);
      const tmp7 = pendingAccentColor(7857)(user.id);
      if (pendingAvatarSrc == null) {
        pendingAvatarSrc = user.getAvatarURL(undefined, 80);
      }
      const tmp2Result = require("VideoBackground");
      const memoizedImageSourceResult = tmp2Result.memoizedImageSource(pendingAvatarSrc);
      const rgb2int = require("utils/ColorUtils").rgb2int;
      require("utils/ColorUtils");
      const tmp2Result5 = require("VideoBackground");
      const rgb2intResult = rgb2int(tmp2Result5.useDominantColorFromImage(pendingAvatarSrc, memoizedImageSourceResult));
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
      dependencyMap = react.useCallback((arg0) => {
        let tmp = arg0;
        if (arg0 === c0) {
          tmp = null;
        }
        const obj = UserProfileSettingsActionCreators;
        obj.setPendingChanges({ accentColor: tmp });
      }, items1);
      const obj4 = {
        label: closure_9(FormLabel, obj5),
        trailing: closure_10(View, obj6),
        onPress: function handleChangeColor() {
          const obj = { color: pendingAccentColor, onSelect };
          showCustomColorPickerActionSheetDefault(obj);
        },
      };
      const TableRow = tmp2(5993).TableRow;
      obj5 = { style: tmp.label, text: intl.string(require("intl").t.xzNfPz) };
      FormLabel = tmp2(8895).FormLabel;
      intl = tmp2(1126).intl;
      obj6 = { style: tmp.selectedColor, children: items2 };
      items2 = [, ,];
      const obj7 = { style: tmp.bannerColor, color: pendingAccentColor };
      items2[0] = closure_9(pendingAccentColor(14423), obj7);
      const obj8 = {
        style: tmp.selectedColorHex,
        variant: "text-md/medium",
        color: "interactive-text-default",
        children: tmp2Result6.int2hex(pendingAccentColor),
      };
      const Text = tmp2(4886).Text;
      tmp2Result6 = require("utils/ColorUtils");
      items2[1] = closure_9(Text, obj8);
      const obj9 = {
        style: tmp.rowArrow,
        size: require("native").Icon.Sizes.CUSTOM,
        source: pendingAccentColor(14428),
      };
      const Icon = tmp2(1188).Icon;
      items2[2] = closure_9(Icon, obj9);
      return closure_9(TableRow, obj4);
    };
let result = size.fileFinishedImporting("modules/user_profile/native/ChangeBannerActionSheet.tsx");

export default tmp5;
