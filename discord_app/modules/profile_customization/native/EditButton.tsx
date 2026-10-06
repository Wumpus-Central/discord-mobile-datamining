// discord_app/modules/profile_customization/native/EditButton.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import IconButton2 from "../../../design/components/Button/native/IconButton.native.tsx";
import AssetRegistryDefault from "../../../../_runtime/07636_AssetRegistry.js";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const View = react_native.View;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let accessibilityLabel;
      let disabled;
      let onPress;
      let style;
      let variant;
      const obj = react2;
      const cResult = obj.c(8);
      ({ onPress, accessibilityLabel, style, variant, disabled } = arg0);
      let str = "primary-overlay";
      if (undefined !== variant) {
        str = variant;
      }
      if (cResult[0] === accessibilityLabel) {
        if (cResult[1] === disabled) {
          if (cResult[2] === onPress) {
            let tmp4;
            if (cResult[3] === str) {
              tmp4 = cResult[4];
            }
            if (cResult[5] === style) {
              let tmp6;
              if (cResult[6] === tmp4) {
                tmp6 = cResult[7];
              }
              return tmp6;
            }
            const tmp9 = <View style={style}>{tmp4}</View>;
            cResult[5] = style;
            cResult[6] = tmp4;
            cResult[7] = tmp9;
            tmp6 = tmp9;
          }
        }
      }
      const IconButton = IconButton2.IconButton;
      const tmp5 = (
        <IconButton
          icon={AssetRegistryDefault}
          variant={str}
          size="sm"
          onPress={onPress}
          accessibilityLabel={accessibilityLabel}
          disabled={disabled}
        />
      );
      cResult[0] = accessibilityLabel;
      cResult[1] = disabled;
      cResult[2] = onPress;
      cResult[3] = str;
      cResult[4] = tmp5;
      tmp4 = tmp5;
    }
  : (variant) => {
      let accessibilityLabel;
      let onPress;
      let style;
      let str = variant.variant;
      ({ onPress, accessibilityLabel, style } = variant);
      if (str === undefined) {
        str = "primary-overlay";
      }
      const disabled = variant.disabled;
      ({ icon: AssetRegistryDefault, variant: str, size: "sm", onPress, accessibilityLabel, disabled });
      const IconButton = IconButton2.IconButton;
      return <View style={style}>{null}</View>;
    };
const result = size.fileFinishedImporting("modules/profile_customization/native/EditButton.tsx");

export default tmp3;
