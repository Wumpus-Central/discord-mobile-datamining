// === Module 16752: getSource ===

// Module 16752 (getSource)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import PressableBase from "PressableBase" /* 5433 */;
import registerAssetDefault from "registerAsset" /* 16753 */;
import registerAssetDefault2 from "registerAsset" /* 16754 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { UPLOAD_MEDIUM_SIZE } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";
import importAllResult from "noop" /* 19 */;

require = fn;
({ View: c4, Image: c5, ImageBackground: closure_6, TouchableWithoutFeedback: error } = get_ActivityIndicator);
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = jsxProd);
const createCacheKey = { width: "100%", height: 192, borderRadius: ThemesDefault.radii.xs, overflow: "hidden", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { position: "absolute", bottom: 10, right: 10, shadowColor: ThemesDefault.unsafe_rawColors.BLACK, shadowRadius: 10, shadowOffset: { height: 8, width: 0 }, shadowOpacity: 0.2 };
createCacheKey[3] = { width: 16, height: 16 };
createCacheKey[4] = { marginTop: 8, fontSize: 14, lineHeight: 18, color: ThemesDefault.unsafe_rawColors.BLUE_345 };
let closure_12 = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const PureComponent = importAllResult.PureComponent;
class AssetChooser extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleChooseAsset = closure_3(function*() {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw base64;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = base64;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              c3 = 3;
              throw base64;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = base64;
              return obj;
            } else {
              base64 = tmp2;
              obj2 = undefined;
              base64 = undefined;
              ({ size, onChooseAsset: obj2 } = closure_1_0.props);
              if (typeof size === "number") {
                obj1 = { size: null };
                obj1[0] = size;
                let tmp15 = obj1;
              } else {
                obj2 = size;
                if (size == null) {
                  obj2 = { size: null };
                  obj2[0] = closure_1_8;
                }
                tmp15 = obj2;
              }
              closure_1_1(table[8]).openImagePicker(tmp15);
              table = 1;
              c3 = 1;
              const obj6 = closure_1_1(table[8]);
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw base64;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = base64;
            return obj;
          } else {
            base64 = base64.base64;
            if (null != base64) {
              if (obj2 != null) {
                tmp10(base64);
              }
            }
            c3 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp17) {
          c3 = tmp;
          throw tmp17;
        }
      }
    });
    applyArgumentsResult.handleRemoveAsset = function handleRemoveAsset() {
      const onChooseAsset = applyArgumentsResult.props.onChooseAsset;
      if (onChooseAsset != null) {
        onChooseAsset(null);
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = AssetChooser.prototype;
prototype["getSource"] = function getSource() {
  const rawSource = this.props.rawSource;
  if (null == rawSource) {
    return null;
  } else if (rawSource.startsWith("data:")) {
    const obj = { uri: null };
    obj[0] = rawSource;
    let tmpResult = obj;
  } else {
    tmpResult = tmp(tmp2, 192);
  }
};
prototype["render"] = function render() {
  const tmp = callback2(this.context);
  const disabled = this.props.disabled;
  const source = this.getSource();
  let obj = { accessibilityRole: "button", accessibilityLabel: null, style: null, onPress: null, disabled: null, children: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["MsUY/S"]);
  obj[2] = tmp.assetWrapper;
  obj[3] = this.handleChooseAsset;
  obj[4] = disabled;
  let tmp9 = source;
  if (null == source) {
    tmp9 = registerAssetDefault;
  }
  obj = { source: tmp9, style: tmp.asset, children: null };
  let tmp5Result = null;
  if (!disabled) {
    obj = { style: null, children: null };
    obj[0] = tmp.uploadIconWrapper;
    obj1 = { style: null, source: null };
    obj1[0] = tmp.uploadIcon;
    obj1[1] = registerAssetDefault2;
    obj[1] = callback(closure_5, obj1);
    tmp5Result = callback(closure_4, obj);
  }
  obj[2] = tmp5Result;
  obj[5] = callback(closure_6, obj);
  const children = [callback(PressableBase.PressableOpacity, obj), ];
  tmp5Result = null;
  if (null != source) {
    tmp5Result = null;
    if (!disabled) {
      const obj2 = { accessibilityRole: "button", onPress: null, children: null };
      obj2[1] = this.handleRemoveAsset;
      const obj3 = { style: null, children: null };
      obj3[0] = tmp.remove;
      const intl2 = getSystemLocale.intl;
      obj3[1] = intl2.string(getSystemLocale.t.N86XcP);
      obj2[2] = callback(Button.LegacyText, obj3);
      tmp5Result = callback(closure_7, obj2);
    }
  }
  children[1] = tmp5Result;
  return callback2(closure_10, { children });
};
AssetChooser.contextType = require("ManaContext").ThemeContext;
const result = require("obj132").fileFinishedImporting("modules/guild_settings/native/AssetChooser.tsx");

export default AssetChooser;