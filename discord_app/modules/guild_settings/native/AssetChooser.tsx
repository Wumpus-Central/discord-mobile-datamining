// discord_app/modules/guild_settings/native/AssetChooser.tsx
import closure_3 from "createCacheKey";
import get_ActivityIndicator from "get ActivityIndicator";
import { UPLOAD_MEDIUM_SIZE } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";
import { registerAsset } from "../../../../_runtime/16691_registerAsset.js";
import { registerAsset } from "../../../../_runtime/16692_registerAsset.js";
import { PressableBase } from "../../../design/void/Pressables/native/Pressables.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";

let c10;
let c4;
let c5;
let c9;
let closure_6;
let error;
let unpackModuleId;
let require = arg1;
({ View: c4, Image: c5, ImageBackground: closure_6, TouchableWithoutFeedback: error } = get_ActivityIndicator);
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { assetWrapper: { width: "100%", alignItems: "center" }, asset: null, uploadIconWrapper: null, uploadIcon: null, remove: null };
createCacheKey = { width: "100%", height: 192, borderRadius: require("Themes").radii.xs, overflow: "hidden", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { position: "absolute", bottom: 10, right: 10, shadowColor: require("Themes").unsafe_rawColors.BLACK, shadowRadius: 10, shadowOffset: { height: 8, width: 0 }, shadowOpacity: 0.2 };
createCacheKey[3] = { width: 16, height: 16 };
let obj1 = { position: "absolute", bottom: 10, right: 10, shadowColor: require("Themes").unsafe_rawColors.BLACK, shadowRadius: 10, shadowOffset: { height: 8, width: 0 }, shadowOpacity: 0.2 };
createCacheKey[4] = { marginTop: 8, fontSize: 14, lineHeight: 18, color: require("Themes").unsafe_rawColors.BLUE_345 };
createCacheKey = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const PureComponent = importAllResult.PureComponent;
class AssetChooser extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleChooseAsset = closure_3(function*() {
      let obj2;
      let size;
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
          if (0 === table) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let base64 = tmp2;
              obj2 = undefined;
              base64 = undefined;
              ({ size, onChooseAsset: obj2 } = outer1_0.props);
              if (typeof size === "number") {
                const obj1 = { size: null };
                obj1[0] = size;
                let tmp15 = obj1;
              } else {
                obj2 = size;
                if (size == null) {
                  obj2 = { size: null };
                  obj2[0] = outer1_8;
                }
                tmp15 = obj2;
              }
              outer1_1(table[8]).openImagePicker(tmp15);
              table = 1;
              c3 = 1;
              const obj6 = outer1_1(table[8]);
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            base64 = arg1.base64;
            if (null != base64) {
              if (obj2 != null) {
                tmp10(base64);
              }
            }
            c3 = 3;
            return { value: "HermesInternal", done: null };
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
  const tmp = createCacheKey(this.context);
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
    tmp9 = registerAsset;
  }
  obj = { source: tmp9, style: tmp.asset, children: null };
  let tmp5Result = null;
  if (!disabled) {
    obj = { style: null, children: null };
    obj[0] = tmp.uploadIconWrapper;
    const obj1 = { style: null, source: null };
    obj1[0] = tmp.uploadIcon;
    obj1[1] = registerAsset;
    obj[1] = tmp5(closure_5, obj1);
    tmp5Result = tmp5(closure_4, obj);
  }
  obj[2] = tmp5Result;
  obj[5] = closure_9(closure_6, obj);
  const children = [closure_9(PressableBase.PressableOpacity, obj), ];
  tmp5Result = null;
  if (null != source) {
    tmp5Result = null;
    if (!disabled) {
      const obj2 = { accessibilityRole: "button", onPress: null, children: null };
      obj2[1] = this.handleRemoveAsset;
      const obj3 = { style: null, children: null };
      obj3[0] = tmp.remove;
      const intl2 = tmp6(1236).intl;
      obj3[1] = intl2.string(tmp6(1236).t.N86XcP);
      obj2[2] = tmp5(tmp6(1297).LegacyText, obj3);
      tmp5Result = tmp5(closure_7, obj2);
    }
  }
  children[1] = tmp5Result;
  return closure_11(closure_10, { children });
};
AssetChooser.contextType = require("ManaContext").ThemeContext;
let obj2 = { marginTop: 8, fontSize: 14, lineHeight: 18, color: require("Themes").unsafe_rawColors.BLUE_345 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_settings/native/AssetChooser.tsx");

export default AssetChooser;