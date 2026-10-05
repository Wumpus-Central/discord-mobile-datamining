// discord_app/design/components/Menu/native/MenuItem.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import IconDefault from "../../../void/Icon/native/Icon.tsx";
import FormRowDefault from "../../../void/Form/native/FormRow.tsx";
import FormLabelDefault from "../../../void/Form/native/FormLabel.tsx";
import Menu from "Menu.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({
  formIcon: { width: 20, height: 20 },
  formLabel: { fontSize: 14, fontWeight: "500" },
});
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        let IconComponent;
        let action;
        let disabled;
        let iconSource;
        let label;
        let showIconFirst;
        let style;
        const obj = react2;
        const cResult = obj.c(18);
        ({ label, IconComponent, iconSource, showIconFirst, style, disabled, action } = arg0);
        const tmp6 = closure_5();
        const menuClose = react.useContext(Menu.MenuContext).menuClose;
        if (cResult[0] === action) {
          let tmp7;
          let tmp10;
          if (cResult[1] === menuClose) {
            tmp7 = cResult[2];
          }
          if (cResult[3] === IconComponent) {
            if (cResult[4] === iconSource) {
              let tmp8;
              if (cResult[5] === tmp6) {
                tmp8 = cResult[6];
              }
              let tmp15 = null;
              if (null != iconSource) {
                tmp15 = null;
                if (undefined !== showIconFirst && showIconFirst) {
                  tmp15 = tmp8;
                }
              }
              let tmp16 = null;
              if (null != iconSource) {
                tmp16 = null;
                if (!(undefined !== showIconFirst && showIconFirst)) {
                  tmp16 = tmp8;
                }
              }
              if (cResult[7] === label) {
                let tmp17;
                if (cResult[8] === tmp6) {
                  tmp17 = cResult[9];
                }
                if (cResult[10] === (undefined !== disabled && disabled)) {
                  if (cResult[11] === tmp7) {
                    if (cResult[12] === ref) {
                      if (cResult[13] === style) {
                        if (cResult[14] === tmp15) {
                          if (cResult[15] === tmp16) {
                            let tmp20;
                            if (cResult[16] === tmp17) {
                              tmp20 = cResult[17];
                            }
                            return tmp20;
                          }
                        }
                      }
                    }
                  }
                }
                const tmp23 = jsx(FormRowDefault, {
                  ref,
                  style,
                  accessibilityRole: "menuitem",
                  disabled: undefined !== disabled && disabled,
                  leading: tmp15,
                  trailing: tmp16,
                  label: tmp17,
                  onPress: tmp7,
                });
                cResult[10] = undefined !== disabled && disabled;
                cResult[11] = tmp7;
                cResult[12] = ref;
                cResult[13] = style;
                cResult[14] = tmp15;
                cResult[15] = tmp16;
                cResult[16] = tmp17;
                cResult[17] = tmp23;
                tmp20 = tmp23;
              }
              let tmp18 = label;
              if (typeof label === "string") {
                tmp18 = jsx(FormLabelDefault, { text: label, style: tmp6.formLabel });
              }
              cResult[7] = label;
              cResult[8] = tmp6;
              cResult[9] = tmp18;
              tmp17 = tmp18;
            }
          }
          if (null != IconComponent) {
            tmp10 = <IconComponent size="sm" />;
          } else {
            tmp10 = null;
            if (null != iconSource) {
              tmp10 = jsx(IconDefault, { source: iconSource, style: tmp6.formIcon });
            }
          }
          cResult[3] = IconComponent;
          cResult[4] = iconSource;
          cResult[5] = tmp6;
          cResult[6] = tmp10;
          tmp8 = tmp10;
        }
        const fn = function u() {
          action();
          menuClose();
        };
        cResult[0] = action;
        cResult[1] = menuClose;
        cResult[2] = fn;
        tmp7 = fn;
      }
    : (action, ref) => {
        let IconComponent;
        let disabled;
        let iconSource;
        let label;
        let showIconFirst;
        let style;
        let tmp3;
        ({ label, IconComponent, iconSource, showIconFirst } = action);
        if (showIconFirst === undefined) {
          showIconFirst = false;
        }
        ({ disabled, style } = action);
        if (disabled === undefined) {
          disabled = false;
        }
        action = action.action;
        const tmp = closure_5();
        const menuClose = react.useContext(Menu.MenuContext).menuClose;
        if (null != IconComponent) {
          tmp3 = <IconComponent size="sm" />;
        } else {
          tmp3 = null;
          if (null != iconSource) {
            tmp3 = jsx(IconDefault, { source: iconSource, style: tmp.formIcon });
          }
        }
        let tmp10 = null;
        FormRowDefault;
        if (null != iconSource) {
          tmp10 = null;
          if (showIconFirst) {
            tmp10 = tmp3;
          }
        }
        let tmp11 = null;
        if (null != iconSource) {
          tmp11 = null;
          if (!showIconFirst) {
            tmp11 = tmp3;
          }
        }
        let tmp7Result = label;
        if (typeof label === "string") {
          tmp7Result = jsx(FormLabelDefault, { text: label, style: tmp.formLabel });
        }
        return (
          <tmp9
            ref={ref}
            style={style}
            accessibilityRole="menuitem"
            disabled={disabled}
            leading={tmp10}
            trailing={tmp11}
            label={tmp7Result}
            onPress={function onPress() {
              action();
              menuClose();
            }}
          />
        );
      },
);
const result = size.fileFinishedImporting("design/components/Menu/native/MenuItem.tsx");

export const MenuItem = forwardRefResult;
