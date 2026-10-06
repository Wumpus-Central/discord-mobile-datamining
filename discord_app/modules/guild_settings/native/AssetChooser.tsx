// discord_app/modules/guild_settings/native/AssetChooser.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import intl3 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import native2 from "../../../../discord_common/js/packages/design/native.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import AssetRegistryDefault from "../../../../_runtime/17717_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../_runtime/17718_AssetRegistry.js";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let c2, c3;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let rect;
let size;
let unpackModuleId;
({
  View: closure_4,
  Image: hasOwnProperty,
  ImageBackground: metroRequire,
  TouchableWithoutFeedback: metroImportDefault,
} = react_native);
const UPLOAD_MEDIUM_SIZE = Constants.UPLOAD_MEDIUM_SIZE;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let obj = {
  assetWrapper: { width: "100%", alignItems: "center" },
  asset: size,
  uploadIconWrapper: rect,
  uploadIcon: { width: 16, height: 16 },
  remove: obj2,
};
size = {
  width: "100%",
  height: 192,
  borderRadius: nativeDefault.radii.xs,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
rect = {
  position: "absolute",
  bottom: 10,
  right: 10,
  shadowColor: nativeDefault.unsafe_rawColors.BLACK,
  shadowRadius: 10,
  shadowOffset: { height: 8, width: 0 },
  shadowOpacity: 0.2,
};
obj2 = { marginTop: 8, fontSize: 14, lineHeight: 18, color: nativeDefault.unsafe_rawColors.BLUE_345 };
let closure_12 = createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class AssetChooser extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.handleChooseAsset = _asyncToGenerator(async () => {
      let c0;
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
          let base64;
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
              let tmp14;
              c0 = undefined;
              base64 = undefined;
              ({ size, onChooseAsset: c0 } = applyArgumentsResult.props);
              const openImagePicker = tmp(c2[8]).openImagePicker;
              const tmp22 = tmp(c2[8]);
              if (typeof size === "number") {
                const obj4 = { size };
                tmp14 = obj4;
              } else {
                let obj5 = size;
                if (size == null) {
                  obj5 = { size };
                }
                tmp14 = obj5;
              }
              c2 = 1;
              c3 = 1;
              const obj6 = { value: openImagePicker(tmp14), done: false };
              return obj6;
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
              if (c0 != null) {
                tmp9(base64);
              }
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp15) {
          c3 = 3;
          throw tmp15;
        }
      }
    });
    applyArgumentsResult.handleRemoveAsset = function handleRemoveAsset() {
      const onChooseAsset = require.props.onChooseAsset;
      if (onChooseAsset != null) {
        onChooseAsset(null);
      }
    };
    return applyArgumentsResult;
  }
  getSource() {
    const rawSource = this.props.rawSource;
    let tmp3 = null;
    if (null != rawSource) {
      let tmpResult;
      if (rawSource.startsWith("data:")) {
        tmpResult = { uri: rawSource };
        const obj = { uri: rawSource };
      } else {
        tmpResult = tmp(tmp2, 192);
      }
      tmp3 = tmpResult;
    }
    return tmp3;
  }
  render() {
    let LegacyText;
    let intl;
    let intl2;
    let obj2;
    let obj4;
    let obj6;
    let tmp5Result;
    const tmp = closure_12(this.context);
    const disabled = this.props.disabled;
    const source = this.getSource();
    const obj = {
      accessibilityRole: "button",
      accessibilityLabel: intl.string(intl3.t["MsUY/S"]),
      style: tmp.assetWrapper,
      onPress: this.handleChooseAsset,
      disabled,
      children: React4(metroRequire, obj2),
    };
    const PressableOpacity = Pressables.PressableOpacity;
    intl = intl3.intl;
    let tmp9 = source;
    if (null == source) {
      tmp9 = AssetRegistryDefault;
    }
    obj2 = { source: tmp9, style: tmp.asset, children: tmp5Result };
    tmp5Result = null;
    if (!disabled) {
      const obj3 = { style: tmp.uploadIconWrapper, children: React4(hasOwnProperty, obj4) };
      obj4 = { style: tmp.uploadIcon, source: AssetRegistryDefault2 };
      tmp5Result = React4(React3, obj3);
    }
    const children = [React4(PressableOpacity, obj)];
    let tmp5Result2 = null;
    if (null != source) {
      tmp5Result2 = null;
      if (!disabled) {
        const obj5 = {
          accessibilityRole: "button",
          onPress: this.handleRemoveAsset,
          children: React4(LegacyText, obj6),
        };
        obj6 = { style: tmp.remove, children: intl2.string(intl3.t.N86XcP) };
        LegacyText = native.LegacyText;
        intl2 = intl3.intl;
        tmp5Result2 = React4(metroImportDefault, obj5);
      }
    }
    children[1] = tmp5Result2;
    return unpackModuleId(authStore, { children });
  }
}
const prototype = AssetChooser.prototype;
AssetChooser.contextType = native2.ThemeContext;
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_settings/native/AssetChooser.tsx");

export default AssetChooser;
