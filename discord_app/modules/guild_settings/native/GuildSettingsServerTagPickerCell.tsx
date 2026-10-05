// discord_app/modules/guild_settings/native/GuildSettingsServerTagPickerCell.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import react_native2 from "../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import react from "../../../../_runtime/00019_react.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj2;
let obj3;
const Pressable = react_native.Pressable;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { cell: obj2, cellSelected: obj3 };
obj2 = {
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.md,
  borderWidth: 2,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderColor: nativeDefault.colors.BORDER_MUTED,
};
createStyles = createStyles.createStyles;
obj3 = { borderColor: nativeDefault.unsafe_rawColors.BRAND_500 };
let closure_4 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let accessibilityLabel;
      let accessibilityRole;
      let children;
      let obj5;
      let onPress;
      let selected;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(19);
      ({ size, selected, accessibilityLabel, accessibilityRole, onPress, children } = arg0);
      let str = "radio";
      if (undefined !== accessibilityRole) {
        str = accessibilityRole;
      }
      const tmp4 = closure_4();
      if (cResult[0] !== selected) {
        const obj2 = { selected };
        cResult[0] = selected;
        cResult[1] = obj2;
        tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      const tmpResult = react_native2;
      const radioA11yNative = tmpResult.useRadioA11yNative(tmp5);
      if (cResult[2] === str) {
        if (cResult[3] === radioA11yNative) {
          let tmp7;
          let tmp9;
          if (cResult[4] === selected) {
            tmp7 = cResult[5];
          }
          if (selected) {
            selected = tmp4.cellSelected;
          }
          if (cResult[6] !== size) {
            const size1 = { width: size, height: size };
            cResult[6] = size;
            cResult[7] = size1;
            tmp9 = size1;
          } else {
            tmp9 = cResult[7];
          }
          if (cResult[8] === tmp4.cell) {
            if (cResult[9] === selected) {
              let tmp10;
              if (cResult[10] === tmp9) {
                tmp10 = cResult[11];
              }
              if (cResult[12] === tmp7.accessibilityRole) {
                if (cResult[13] === tmp7.accessibilityState) {
                  if (cResult[14] === accessibilityLabel) {
                    if (cResult[15] === children) {
                      if (cResult[16] === onPress) {
                        let tmp11;
                        if (cResult[17] === tmp10) {
                          tmp11 = cResult[18];
                        }
                        return tmp11;
                      }
                    }
                  }
                }
              }
              ({ accessibilityRole: obj7.accessibilityRole, accessibilityState: obj7.accessibilityState } = tmp7);
              const tmp14 = (
                <Pressable
                  accessibilityRole={null}
                  accessibilityState={null}
                  accessibilityLabel={accessibilityLabel}
                  onPress={onPress}
                  style={tmp10}
                >
                  {children}
                </Pressable>
              );
              cResult[12] = tmp7.accessibilityRole;
              cResult[13] = tmp7.accessibilityState;
              cResult[14] = accessibilityLabel;
              cResult[15] = children;
              cResult[16] = onPress;
              cResult[17] = tmp10;
              cResult[18] = tmp14;
              tmp11 = tmp14;
            }
          }
          const items = [tmp4.cell, selected, tmp9];
          cResult[8] = tmp4.cell;
          cResult[9] = selected;
          cResult[10] = tmp9;
          cResult[11] = items;
          tmp10 = items;
        }
      }
      let tmp8 = radioA11yNative;
      if ("button" === str) {
        const obj4 = { accessibilityRole: "button", accessibilityState: obj5 };
        tmp8 = obj4;
        obj5 = { selected };
      }
      cResult[2] = str;
      cResult[3] = radioA11yNative;
      cResult[4] = selected;
      cResult[5] = tmp8;
      tmp7 = tmp8;
    }
  : (accessibilityLabel) => {
      let accessibilityRole;
      let children;
      let obj3;
      let onPress;
      let selected;
      ({ size, selected, accessibilityRole } = accessibilityLabel);
      accessibilityLabel = accessibilityLabel.accessibilityLabel;
      if (accessibilityRole === undefined) {
        accessibilityRole = "radio";
      }
      ({ onPress, children } = accessibilityLabel);
      const tmp = closure_4();
      const obj = react_native2;
      let radioA11yNative = obj.useRadioA11yNative({ selected });
      if ("button" === accessibilityRole) {
        const obj2 = { accessibilityRole: "button", accessibilityState: obj3 };
        radioA11yNative = obj2;
        obj3 = { selected };
      }
      const items = [tmp.cell, ,];
      if (selected) {
        selected = tmp.cellSelected;
      }
      items[1] = selected;
      items[2] = { width: size, height: size };
      return (
        <Pressable
          accessibilityRole={radioA11yNative.accessibilityRole}
          accessibilityState={radioA11yNative.accessibilityState}
          accessibilityLabel={accessibilityLabel}
          onPress={onPress}
          style={items}
        >
          {children}
        </Pressable>
      );
    };
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagPickerCell.tsx");

export default tmp4;
