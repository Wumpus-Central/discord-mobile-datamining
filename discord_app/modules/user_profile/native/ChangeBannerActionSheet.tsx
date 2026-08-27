// === Module 14209: ChangeBannerColorRow ===

// Module 14209 (ChangeBannerColorRow)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import TableRowInner from "TableRowInner" /* 5551 */;
import RedesignBottomSheetTitleHeaderBase from "RedesignBottomSheetTitleHeaderBase" /* 5573 */;
import context from "context" /* 5905 */;
import ActionSheet from "ActionSheet" /* 5941 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 5944 */;
import Form from "Form" /* 8295 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "handleFormOpen" /* 8002 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
function ChangeBannerColorRow(user) {
  user = user.user;
  let _require;
  pendingAccentColor = undefined;
  dependencyMap = undefined;
  let tmp = callback3();
  let obj = _require(589);
  const items = [closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => pendingChanges.getPendingChanges());
  ({ pendingAccentColor, pendingAvatar } = stateFromStoresObject);
  obj1 = _require(8011);
  obj = { userId: user.id, image: pendingAvatar };
  let pendingAvatarSrc = obj1.getPendingAvatarSrc(obj);
  const tmp7 = pendingAccentColor(8046)(user.id);
  if (pendingAvatarSrc == null) {
    pendingAvatarSrc = user.getAvatarURL(undefined, 80);
  }
  let tmp2Result = tmp2(8042);
  tmp2Result = tmp2(688);
  const memoizedImageSourceResult = tmp2Result.memoizedImageSource(pendingAvatarSrc);
  const rgb2intResult = tmp2Result.rgb2int(_require(8042).useDominantColorFromImage(pendingAvatarSrc, memoizedImageSourceResult));
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
  dependencyMap = React.useCallback((arg0) => {
    let tmp = arg0;
    if (arg0 === _undefined) {
      tmp = null;
    }
    _undefined(8006).setPendingChanges({ accentColor: tmp });
  }, items1);
  obj = { label: null, trailing: null, onPress: null };
  obj1 = { style: tmp.label, text: null };
  const intl = tmp2(1236).intl;
  obj1[1] = intl.string(_require(1236).t.xzNfPz);
  obj[0] = callback(_require(8295).FormLabel, obj1);
  const obj2 = { style: tmp.selectedColor, children: null };
  const items2 = [callback(pendingAccentColor(14214), { style: tmp.bannerColor, color: pendingAccentColor }), , ];
  const obj4 = { style: tmp.selectedColorHex, variant: "text-md/medium", color: "interactive-text-default", children: null };
  const obj3 = { style: tmp.bannerColor, color: pendingAccentColor };
  const tmp2Result1 = _require(8042);
  obj4[3] = _require(688).int2hex(pendingAccentColor);
  items2[1] = callback(_require(4441).Text, obj4);
  const tmp2Result2 = _require(688);
  items2[2] = callback(_require(1297).Icon, { style: tmp.rowArrow, size: _require(1297).Icon.Sizes.CUSTOM, source: pendingAccentColor(14219) });
  obj2[1] = items2;
  obj[1] = callback2(View, obj2);
  obj[2] = function handleChangeColor() {
    pendingAccentColor(14212)({ color: pendingAccentColor, onSelect: dependencyMap });
  };
  return callback(_require(5551).TableRow, obj);
}
({ AnalyticsObjects: error, UPLOAD_BANNER_SIZE: closure_8 } = ME);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = jsxProd);
createCacheKey = { label: null, sublabel: null, nitroWheel: null, bannerColor: null, selectedColor: null, selectedColorHex: null, rowArrow: null, upsellButton: null, remove: null, titleWrapper: null, titleContainer: null };
createCacheKey = { color: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE, alignItems: "center", flexDirection: "row" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { color: ThemesDefault.colors.TEXT_DEFAULT };
let obj1 = { color: ThemesDefault.colors.TEXT_DEFAULT };
createCacheKey[2] = { marginLeft: ThemesDefault.space.PX_8 };
let obj2 = { marginLeft: ThemesDefault.space.PX_8 };
createCacheKey[3] = { borderColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderWidth: 1, borderRadius: ThemesDefault.radii.xs, height: 24, minWidth: 24 };
createCacheKey[4] = { flexDirection: "row", alignItems: "center" };
createCacheKey[5] = { textTransform: "uppercase" };
createCacheKey[6] = { height: 13, width: 8, marginLeft: 10, marginTop: 2 };
let obj3 = { borderColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderWidth: 1, borderRadius: ThemesDefault.radii.xs, height: 24, minWidth: 24 };
createCacheKey[7] = { marginTop: ThemesDefault.space.PX_8 };
let obj4 = { marginTop: ThemesDefault.space.PX_8 };
createCacheKey[8] = { color: ThemesDefault.colors.TEXT_FEEDBACK_CRITICAL };
createCacheKey[9] = { flex: 0 };
createCacheKey[10] = { justifyContent: "flex-start" };
let closure_12 = createCacheKey.createStyles(createCacheKey);
let obj5 = { color: ThemesDefault.colors.TEXT_FEEDBACK_CRITICAL };
const result = require("set").fileFinishedImporting("modules/user_profile/native/ChangeBannerActionSheet.tsx");

export default function ChangeBannerActionSheet(isTryItOut) {
  ({ user, onBannerChange: require, removeText, showRemoveBanner } = isTryItOut);
  if (showRemoveBanner === undefined) {
    showRemoveBanner = false;
  }
  let flag = isTryItOut.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  function _handleBannerUploadSelect(arg0) {
    const self = this;
    const tmp = closure_1_3(function*() {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === originalMd5) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let base64 = tmp5;
              let lib = tmp2;
              lib = undefined;
              base64 = undefined;
              originalMd5 = undefined;
              let obj3 = closure_1_1(4412);
              obj3.hideActionSheet();
              originalMd5 = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_1(5034).openImagePicker(closure_1_8);
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            lib = arg1;
            base64 = lib.base64;
            originalMd5 = lib.originalMd5;
            if (null != base64) {
              obj = closure_1_0(14210);
              obj3 = { assetOrigin: null, imageUri: null, description: "", originalAsset: "Array", originalMd5: 13 };
              obj3[0] = closure_1_0(7694).AssetOriginTypes.NEW_ASSET;
              obj3[1] = base64;
              obj3[4] = originalMd5;
              lib(obj.createPendingImage(obj3));
            }
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp20) {
          c3 = tmp;
          throw tmp20;
        }
      }
    });
    closure_1 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback3();
  if (!flag) {
    flag = tmp2(4107).canUsePremiumProfileCustomization(user);
    const tmp2Result = tmp2(4107);
  }
  let obj = { value: _handleBannerUploadSelect(5905)(isTryItOut.analyticsLocations).analyticsLocations, children: null };
  obj = { title: null, trailing: null, titleWrapperStyle: null, titleContainerStyle: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.Vgdusv);
  let tmp4Result = flag;
  if (flag) {
    tmp4Result = tmp4(tmp5(8028).NitroWheelIcon, {});
  }
  obj[1] = tmp4Result;
  ({ titleWrapper: obj3[2], titleContainer: obj3[3] } = tmp);
  const items = [closure_9(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj), ];
  tmp4Result = null;
  if (!flag) {
    obj1 = { user: null };
    obj1[0] = user;
    tmp4Result = tmp4(ChangeBannerColorRow, obj1);
  }
  const items1 = [tmp4Result, , ];
  let obj2 = { style: tmp.label, children: null };
  const intl2 = tmp5(1236).intl;
  const string = intl2.string;
  const t = tmp5(1236).t;
  if (showRemoveBanner) {
    let stringResult = string(t.N0bC3P);
  } else {
    stringResult = string(t["70CYsY"]);
  }
  const items2 = [closure_9(Form.FormLabel, { text: stringResult }), ];
  let tmp4Result1 = !flag;
  if (!flag) {
    let obj3 = { style: null, size: "sm" };
    obj3[0] = tmp.nitroWheel;
    tmp4Result1 = tmp4(tmp5(8028).NitroWheelIcon, obj3);
  }
  const obj4 = { label: closure_10(View, obj2), subLabel: null, onPress: null };
  items2[1] = tmp4Result1;
  obj2[1] = items2;
  const obj5 = { style: tmp.sublabel, numberOfLines: 2, text: null };
  const intl3 = tmp5(1236).intl;
  const string2 = intl3.string;
  const t2 = tmp5(1236).t;
  if (flag) {
    let string2Result = string2(t2.IhzZlo);
  } else {
    string2Result = string2(t2.NSTmdO);
  }
  obj5[2] = string2Result;
  const items3 = [closure_9(Form.FormSubLabel, obj5), ];
  let tmp4Result2 = !flag;
  if (!flag) {
    const obj6 = { style: null, children: null };
    obj6[0] = tmp.upsellButton;
    const obj7 = { analyticsObject: null };
    obj7[0] = constants.EDIT_PROFILE_BANNER;
    obj6[1] = tmp4(tmp2(14211), obj7);
    tmp4Result2 = tmp4(tmp10, obj6);
  }
  items3[1] = tmp4Result2;
  obj4[1] = closure_10(closure_11, { children: items3 });
  let handleBannerUploadSelect;
  if (flag) {
    handleBannerUploadSelect = function handleBannerUploadSelect() {
      const self = this;
      const apply = _handleBannerUploadSelect.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
  }
  obj4[2] = handleBannerUploadSelect;
  items1[1] = closure_9(TableRowInner.TableRow, obj4);
  if (showRemoveBanner) {
    const obj8 = { style: null, text: null };
    const items4 = [, ];
    ({ label: arr5[0], remove: arr5[1] } = tmp);
    obj8[0] = items4;
    if (removeText == null) {
      const intl4 = tmp5(1236).intl;
      removeText = intl4.string(tmp5(1236).t.tT9n7D);
    }
    const obj9 = { label: null, onPress: null };
    obj8[1] = removeText;
    obj9[0] = tmp4(tmp5(8295).FormLabel, obj8);
    obj9[1] = function handleBannerDelete() {
      callback(null);
      _handleBannerUploadSelect(closure_1_2[10]).hideActionSheet();
    };
    showRemoveBanner = tmp4(tmp5(5551).TableRow, obj9);
  }
  const obj10 = { children: null };
  items1[2] = showRemoveBanner;
  items[1] = closure_10(TableRowGroupTitle.TableRowGroup, { hasIcons: false, children: items1 });
  obj10[0] = items;
  obj[1] = closure_10(ActionSheet.ActionSheet, obj10);
  return closure_9(context.AnalyticsLocationProvider, obj);
};