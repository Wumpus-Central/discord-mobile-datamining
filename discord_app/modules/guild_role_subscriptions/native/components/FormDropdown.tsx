// discord_app/modules/guild_role_subscriptions/native/components/FormDropdown.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import TouchableHitBoxDefault from "../../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import _modDef10978 from "../../../../../_runtime/metro/10978__.js";
import _modDef14046 from "../../../../../_runtime/metro/14046__.js";
import FormStylesDefault from "FormStyles.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import TextStyles_mod from "../../../rebrand/native/TextStyles.tsx";

require = fn;
const Fonts = fn(1085).Fonts;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  container: { alignItems: "center", flexDirection: "row" },
  content: { marginStart: 8, flexGrow: 1 },
  placeholder: null,
  text: null,
};
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_MUTED, 16));
obj2.placeholder = {};
let TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_DEFAULT, 16));
obj2.text = {};
const styles = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function LockedIcon() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { size: native.Icon.Sizes.MEDIUM, source: _modDef14046 };
        const tmp7 = React3(native.Icon, obj2);
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : function LockedIcon() {
      return React3(native.Icon, { size: native.Icon.Sizes.MEDIUM, source: _modDef14046 });
    };
ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function DropdownIcon() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { style: null, size: null, source: null };
        const obj3 = { transform: null };
        const items = [{ rotate: "90deg" }];
        obj3.transform = items;
        obj2.style = obj3;
        obj2.size = native.Icon.Sizes.MEDIUM;
        obj2.source = _modDef10978;
        const tmp7 = React3(native.Icon, obj2);
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : function DropdownIcon() {
      const obj = { style: null, size: native.Icon.Sizes.MEDIUM, source: _modDef10978 };
      const obj2 = { transform: null };
      const items = [{ rotate: "90deg" }];
      obj2.transform = items;
      obj.style = obj2;
      return React3(native.Icon, obj);
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormDropdown.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FormDropdown(arg0) {
      const cResult = c.c(18);
      ({ disabled, label, leading } = arg0);
      ({ onPress, placeholder } = arg0);
      const tmp4 = styles();
      const tmp6 = FormStylesDefault();
      if (cResult[0] !== disabled) {
        const tmp8 = React3(disabled ? closure_6 : closure_7, {});
        cResult[0] = disabled;
        cResult[1] = tmp8;
      } else {
        if (cResult[2] === tmp6.dropdownInput) {
          if (cResult[3] === tmp4.container) {
            let tmp10 = cResult[4];
          }
          const tmp13 = null != label ? tmp4.text : tmp4.placeholder;
          if (cResult[5] === tmp4.content) {
            if (cResult[6] === tmp13) {
              let tmp14 = cResult[7];
            }
            if (label == null) {
              label = placeholder;
            }
            if (cResult[8] === tmp14) {
              if (cResult[9] === label) {
                let tmp15 = cResult[10];
              }
              if (cResult[11] === disabled) {
                if (cResult[12] === tmp7) {
                  if (cResult[13] === leading) {
                    if (cResult[14] === tmp10) {
                      if (cResult[15] === onPress) {
                        if (cResult[16] === tmp15) {
                          let tmp18 = cResult[17];
                        }
                        return tmp18;
                      }
                    }
                  }
                }
              }
              const obj2 = { style: tmp10, accessibilityRole: "spinbutton", disabled, onPress, children: null };
              const items = [leading, tmp15, tmp7];
              obj2.children = items;
              const tmp20 = React4(TouchableHitBoxDefault, obj2);
              cResult[11] = disabled;
              cResult[12] = tmp7;
              cResult[13] = leading;
              cResult[14] = tmp10;
              cResult[15] = onPress;
              cResult[16] = tmp15;
              cResult[17] = tmp20;
              tmp18 = tmp20;
            }
            const obj3 = { style: tmp14, children: label };
            const tmp17 = React3(native.LegacyText, obj3);
            cResult[8] = tmp14;
            cResult[9] = label;
            cResult[10] = tmp17;
            tmp15 = tmp17;
          }
          const items1 = [tmp4.content, tmp13];
          cResult[5] = tmp4.content;
          cResult[6] = tmp13;
          cResult[7] = items1;
          tmp14 = items1;
        }
        const items2 = [tmp4.container, tmp6.dropdownInput];
        cResult[2] = tmp6.dropdownInput;
        cResult[3] = tmp4.container;
        cResult[4] = items2;
        tmp10 = items2;
      }
    }
  : function FormDropdown(arg0) {
      ({ disabled, label } = arg0);
      ({ leading, onPress, placeholder } = arg0);
      const tmp = styles();
      const tmp4 = FormStylesDefault();
      const obj = { style: null, accessibilityRole: "spinbutton", disabled, onPress: null, children: null };
      const items = [tmp.container, tmp4.dropdownInput];
      obj.style = items;
      let tmp9;
      const tmp5Result = React3(disabled ? closure_6 : closure_7, {});
      if (!disabled) {
        tmp9 = onPress;
      }
      obj.onPress = tmp9;
      const items1 = [leading, ,];
      const items2 = [tmp.content];
      const obj2 = { style: items2, children: null };
      items2[1] = null != label ? tmp.text : tmp.placeholder;
      if (label == null) {
        label = placeholder;
      }
      obj2.children = label;
      items1[1] = React3(native.LegacyText, obj2);
      items1[2] = tmp5Result;
      obj.children = items1;
      return React4(TouchableHitBoxDefault, obj);
    };
export const useFormDropdownStyles = styles;
