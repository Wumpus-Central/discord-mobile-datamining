// discord_app/modules/guild_settings/native/AssetChooser.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import _modDef17532 from "../../../../_runtime/metro/17532__.js";
import _modDef17533 from "../../../../_runtime/metro/17533__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({
  View: closure_4,
  Image: hasOwnProperty,
  ImageBackground: metroRequire,
  TouchableWithoutFeedback: closure_7,
} = get_ActivityIndicator);
const UPLOAD_MEDIUM_SIZE = fn(1074).UPLOAD_MEDIUM_SIZE;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = {
  assetWrapper: { width: "100%", alignItems: "center" },
  asset: null,
  uploadIconWrapper: null,
  uploadIcon: null,
  remove: null,
};
let size = {
  width: "100%",
  height: 192,
  borderRadius: nativeDefault.radii.xs,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
createStyles.asset = size;
const rect = {
  position: "absolute",
  bottom: 10,
  right: 10,
  shadowColor: nativeDefault.unsafe_rawColors.BLACK,
  shadowRadius: 10,
  shadowOffset: { height: 8, width: 0 },
  shadowOpacity: 0.2,
};
createStyles.uploadIconWrapper = rect;
createStyles.uploadIcon = { width: 16, height: 16 };
createStyles = { marginTop: 8, fontSize: 14, lineHeight: 18, color: nativeDefault.unsafe_rawColors.BLUE_345 };
createStyles.remove = createStyles;
let closure_12 = createStyles.createLegacyClassComponentStyles(createStyles);
const PureComponent = noop.PureComponent;
class AssetChooser extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    closure_129_0 = applyArgumentsResult;
    applyArgumentsResult.handleChooseAsset = closure_3(async (arg0, value) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
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
              obj = { value, done: true };
              return obj;
            } else {
              closure_129_0 = undefined;
              let base64;
              ({ size, onChooseAsset: closure_129_0 } = applyArgumentsResult.props);
              if (typeof size === "number") {
                const obj1 = { size };
                let tmp15 = obj1;
              } else {
                let obj2 = size;
                if (size == null) {
                  obj2 = { size };
                }
                tmp15 = obj2;
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
            obj = { value, done: true };
            return obj;
          } else {
            base64 = value.base64;
            if (null != base64) {
              if (closure_129_0 != null) {
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
    const obj = { uri: rawSource };
    let tmpResult = obj;
  } else {
    tmpResult = tmp(tmp2, 192);
  }
};
prototype["render"] = function render() {
  const tmp = closure_12(this.context);
  const disabled = this.props.disabled;
  const source = this.getSource();
  let obj = {
    accessibilityRole: "button",
    accessibilityLabel: null,
    style: null,
    onPress: null,
    disabled: null,
    children: null,
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t["MsUY/S"]);
  obj.style = tmp.assetWrapper;
  obj.onPress = this.handleChooseAsset;
  obj.disabled = disabled;
  let tmp9 = source;
  if (null == source) {
    tmp9 = _modDef17532;
  }
  obj = { source: tmp9, style: tmp.asset, children: null };
  let tmp5Result = null;
  if (!disabled) {
    obj = { style: tmp.uploadIconWrapper, children: null };
    const obj1 = { style: tmp.uploadIcon, source: _modDef17533 };
    obj.children = tmp5(hasOwnProperty, obj1);
    tmp5Result = tmp5(React4, obj);
  }
  obj.children = tmp5Result;
  obj.children = React7(timestampProducer, obj);
  const children = [React7(Pressables.PressableOpacity, obj)];
  tmp5Result = null;
  if (null != source) {
    tmp5Result = null;
    if (!disabled) {
      const obj2 = { accessibilityRole: "button", onPress: this.handleRemoveAsset, children: null };
      const obj3 = { style: tmp.remove, children: null };
      const intl2 = tmp6(1114).intl;
      obj3.children = intl2.string(tmp6(1114).t.N86XcP);
      obj2.children = tmp5(tmp6(1178).LegacyText, obj3);
      tmp5Result = tmp5(React5, obj2);
    }
  }
  children[1] = tmp5Result;
  return closure_1_11(closure_1_10, { children });
};
AssetChooser.contextType = fn(4271).ThemeContext;
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/AssetChooser.tsx");

export default AssetChooser;
