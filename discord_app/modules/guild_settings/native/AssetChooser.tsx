// === Module 18163: AssetChooser ===

// Module 18163 (AssetChooser)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import FastImageDefault from "FastImage" /* 6163 */;
import Pressables from "Pressables" /* 6191 */;
import _modDef18164 from "module_18164" /* 18164 */;
import _modDef18165 from "module_18165" /* 18165 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, TouchableWithoutFeedback: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const UPLOAD_MEDIUM_SIZE = fn(1085).UPLOAD_MEDIUM_SIZE;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { assetWrapper: { width: "100%", alignItems: "center" }, asset: null, assetImage: null, uploadIconWrapper: null, uploadIcon: null, remove: null };
let size = { width: "100%", height: 192, borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.asset = size;
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.width = "100%";
obj3.height = 192;
obj2.assetImage = obj3;
const rect = { position: "absolute", bottom: 10, right: 10, shadowColor: nativeDefault.unsafe_rawColors.BLACK, shadowRadius: 10, shadowOffset: { height: 8, width: 0 }, shadowOpacity: 0.2 };
obj2.uploadIconWrapper = rect;
obj2.uploadIcon = { width: 16, height: 16 };
obj2.remove = { marginTop: 8, fontSize: 14, lineHeight: 18, color: nativeDefault.unsafe_rawColors.BLUE_345 };
let closure_10 = createStyles.createLegacyClassComponentStyles(obj2);
const PureComponent = noop.PureComponent;
class AssetChooser extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    closure_129_0 = applyArgumentsResult;
    applyArgumentsResult.handleChooseAsset = closure_3(async () => {
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
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_129_0 = undefined;
              let base64;
              ({ size, onChooseAsset: closure_129_0 } = applyArgumentsResult.props);
              if (typeof size === "number") {
                const obj4 = { size };
                let tmp15 = obj4;
              } else {
                let obj5 = size;
                if (size == null) {
                  obj5 = { size };
                }
                tmp15 = obj5;
              }
              tmp2(dependencyMap[8]).openImagePicker(tmp15);
              dependencyMap = 1;
              c3 = 1;
              const obj6 = tmp2(dependencyMap[8]);
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            base64 = value.base64;
            if (null != base64) {
              if (closure_129_0 != null) {
                tmp10(base64);
              }
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
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
    const obj = { uri: rawSource };
    let tmpResult = obj;
  } else {
    tmpResult = tmp(tmp2, 192);
  }
};
prototype["render"] = function render() {
  const tmp = closure_10(this.context);
  const disabled = this.props.disabled;
  const source = this.getSource();
  const obj = { accessibilityRole: "button", accessibilityLabel: null, style: null, onPress: null, disabled: null, children: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t["MsUY/S"]);
  obj.style = tmp.assetWrapper;
  obj.onPress = this.handleChooseAsset;
  obj.disabled = disabled;
  const obj2 = { style: tmp.asset, children: null };
  let tmp9Result = source;
  if (null == source) {
    tmp9Result = _modDef18164;
  }
  const items = [React5(FastImageDefault, { source: tmp9Result, style: tmp.assetImage }), ];
  let tmp5Result = null;
  if (!disabled) {
    const obj4 = { style: tmp.uploadIconWrapper, children: null };
    const obj5 = { style: tmp.uploadIcon, source: _modDef18165 };
    obj4.children = React5(FastImageDefault, obj5);
    tmp5Result = React5(React4, obj4);
    const tmp9Result2 = FastImageDefault;
  }
  items[1] = tmp5Result;
  obj2.children = items;
  obj.children = closure_1_8(React4, obj2);
  const children = [React5(Pressables.PressableOpacity, obj), ];
  let tmp5Result2 = null;
  if (null != source) {
    tmp5Result2 = null;
    if (!disabled) {
      const obj6 = { accessibilityRole: "button", onPress: this.handleRemoveAsset, children: null };
      const obj7 = { style: tmp.remove, children: null };
      const intl2 = util.intl;
      obj7.children = intl2.string(util.t.N86XcP);
      obj6.children = React5(native.LegacyText, obj7);
      tmp5Result2 = React5(hasOwnProperty, obj6);
    }
  }
  children[1] = tmp5Result2;
  return closure_1_8(options, { children });
};
AssetChooser.contextType = fn(4788).ThemeContext;
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/AssetChooser.tsx");

export default AssetChooser;