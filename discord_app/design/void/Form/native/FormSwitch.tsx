// discord_app/design/void/Form/native/FormSwitch.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import shared from "../../../shared.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj2;
const Switch = react_native.Switch;
const jsx = Fragment.jsx;
let obj = { switch: { marginVertical: -5 }, track: obj2 };
obj2 = { color: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED };
let closure_5 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (tintColor) => {
      let accessibilityHint;
      let accessibilityLabel;
      let accessible;
      let borderColor;
      let disabled;
      let onValueChange;
      let renderIosBackground;
      let style;
      let value;
      const obj = react2;
      const cResult = obj.c(20);
      ({
        value,
        disabled,
        style,
        borderColor,
        onValueChange,
        accessible,
        accessibilityLabel,
        accessibilityHint,
        renderIosBackground,
      } = tintColor);
      const tmp7 = closure_5();
      let color = tintColor.tintColor;
      const tmp9 = useThemeDefault();
      if (color == null) {
        color = tmp7.track.color;
      }
      if (null == borderColor) {
        const tmpResult = shared;
        if (tmpResult.isThemeDark(tmp9)) {
          borderColor = nativeDefault.unsafe_rawColors.PRIMARY_400;
        }
      }
      if (cResult[0] === color) {
        let tmp10;
        if (cResult[1] === borderColor) {
          tmp10 = cResult[2];
        }
        if (cResult[3] === style) {
          let tmp12;
          if (cResult[4] === tmp7.switch) {
            tmp12 = cResult[5];
          }
          if (cResult[6] === (undefined !== disabled && disabled)) {
            let tmp13;
            if (cResult[7] === (undefined !== value && value)) {
              tmp13 = cResult[8];
            }
            if (cResult[9] === accessibilityHint) {
              if (cResult[10] === accessibilityLabel) {
                if (cResult[11] === accessible) {
                  if (cResult[12] === (undefined !== disabled && disabled)) {
                    if (cResult[13] === onValueChange) {
                      if (cResult[14] === tmp10) {
                        if (cResult[15] === tmp11) {
                          if (cResult[16] === tmp12) {
                            if (cResult[17] === tmp13) {
                              let tmp14;
                              if (cResult[18] === (undefined !== value && value)) {
                                tmp14 = cResult[19];
                              }
                              return tmp14;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            const tmp17 = (
              <Switch
                accessible={accessible}
                trackColor={tmp10}
                ios_backgroundColor={tmp11}
                value={undefined !== value && value}
                disabled={undefined !== disabled && disabled}
                style={tmp12}
                onValueChange={onValueChange}
                accessibilityState={tmp13}
                accessibilityLabel={accessibilityLabel}
                accessibilityHint={accessibilityHint}
              />
            );
            cResult[9] = accessibilityHint;
            cResult[10] = accessibilityLabel;
            cResult[11] = accessible;
            cResult[12] = undefined !== disabled && disabled;
            cResult[13] = onValueChange;
            cResult[14] = tmp10;
            cResult[15] = tmp11;
            cResult[16] = tmp12;
            cResult[17] = tmp13;
            cResult[18] = undefined !== value && value;
            cResult[19] = tmp17;
            tmp14 = tmp17;
          }
          const obj3 = { disabled: undefined !== disabled && disabled, selected: undefined !== value && value };
          cResult[6] = undefined !== disabled && disabled;
          cResult[7] = undefined !== value && value;
          cResult[8] = obj3;
          tmp13 = obj3;
        }
        const items = [tmp7.switch, style];
        cResult[3] = style;
        cResult[4] = tmp7.switch;
        cResult[5] = items;
        tmp12 = items;
      }
      const obj4 = { true: color, false: borderColor };
      cResult[0] = color;
      cResult[1] = borderColor;
      cResult[2] = obj4;
      tmp10 = obj4;
    }
  : (value) => {
      let accessibilityHint;
      let accessibilityLabel;
      let accessible;
      let borderColor;
      let onValueChange;
      let renderIosBackground;
      let style;
      value = value.value;
      const disabled = value.disabled;
      ({ borderColor, renderIosBackground } = value);
      let tmp3 = undefined !== renderIosBackground;
      ({ style, onValueChange, accessible, accessibilityLabel, accessibilityHint } = value);
      if (tmp3) {
        tmp3 = renderIosBackground;
      }
      const tmp4 = closure_5();
      let color = value.tintColor;
      const tmp7 = useThemeDefault();
      if (color == null) {
        color = tmp4.track.color;
      }
      if (null == borderColor) {
        const obj = shared;
        if (obj.isThemeDark(tmp7)) {
          borderColor = nativeDefault.unsafe_rawColors.PRIMARY_400;
        }
      }
      let tmp11;
      if (false === (undefined !== value && value)) {
        if (tmp3) {
          tmp11 = borderColor;
        }
      }
      const items = [tmp4.switch, style];
      return (
        <Switch
          accessible={accessible}
          trackColor={{ true: color, false: borderColor }}
          ios_backgroundColor={tmp11}
          value={undefined !== value && value}
          disabled={undefined !== disabled && disabled}
          style={items}
          onValueChange={onValueChange}
          accessibilityState={{ disabled: undefined !== disabled && disabled, selected: undefined !== value && value }}
          accessibilityLabel={accessibilityLabel}
          accessibilityHint={accessibilityHint}
        />
      );
    };
const result = size.fileFinishedImporting("design/void/Form/native/FormSwitch.tsx");

export default tmp3;
