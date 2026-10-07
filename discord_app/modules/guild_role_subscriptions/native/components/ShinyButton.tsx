// discord_app/modules/guild_role_subscriptions/native/components/ShinyButton.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import BaseTextButton from "../../../../design/components/Button/native/BaseTextButton.native.tsx";
import _modDef9917 from "../../../../../_runtime/metro/09917__.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = ["style", "loading", "disabled", "onPress"];
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj2 = {
  container: {
    borderRadius: nativeDefault.radii.sm,
    backgroundColor: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT,
  },
  sparkleIcon: null,
  disabled: null,
};
let obj3 = {
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT,
};
obj2.sparkleIcon = { marginRight: 4, tintColor: nativeDefault.colors.WHITE };
obj2.disabled = { opacity: 0.5 };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj4 = { marginRight: 4, tintColor: nativeDefault.colors.WHITE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/ShinyButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(23);
      if (cResult[0] !== arg0) {
        ({ style, loading, disabled, onPress } = arg0);
        const tmp11 = _objectWithoutProperties(arg0, closure_3);
        cResult[0] = arg0;
        cResult[1] = disabled;
        cResult[2] = loading;
        cResult[3] = tmp11;
        cResult[4] = style;
        cResult[5] = onPress;
        let tmp8 = onPress;
        let tmp7 = style;
        let tmp6 = tmp11;
        let tmp5 = loading;
        let tmp4 = disabled;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
        tmp7 = cResult[4];
        tmp8 = cResult[5];
      }
      if (cResult[6] !== tmp8) {
        let fn = tmp8;
        if (undefined === tmp8) {
          fn = () => {};
        }
        cResult[6] = tmp8;
        cResult[7] = fn;
        let tmp12 = fn;
      } else {
        tmp12 = cResult[7];
      }
      const tmp13 = closure_6();
      if (cResult[8] === tmp7) {
        if (cResult[9] === tmp13.container) {
          let tmp14 = cResult[10];
        }
        if (cResult[11] === tmp4) {
          if (cResult[12] === tmp5) {
            if (cResult[13] === tmp13.disabled) {
              if (cResult[14] === tmp13.sparkleIcon) {
                let tmp15 = cResult[15];
              }
              if (cResult[16] === tmp4) {
                if (cResult[17] === tmp5) {
                  if (cResult[18] === tmp12) {
                    if (cResult[19] === tmp6) {
                      if (cResult[20] === tmp14) {
                        if (cResult[21] === tmp15) {
                          let tmp19 = cResult[22];
                        }
                        return tmp19;
                      }
                    }
                  }
                }
              }
              const obj2 = { onPress: tmp12, pillStyle: tmp14, loading: tmp5, disabled: tmp4, icon: tmp15 };
              const merged = Object.assign(tmp6);
              const tmp24 = jsx(BaseTextButton.BaseTextButton, {
                onPress: tmp12,
                pillStyle: tmp14,
                loading: tmp5,
                disabled: tmp4,
                icon: tmp15,
              });
              cResult[16] = tmp4;
              cResult[17] = tmp5;
              cResult[18] = tmp12;
              cResult[19] = tmp6;
              cResult[20] = tmp14;
              cResult[21] = tmp15;
              cResult[22] = tmp24;
              tmp19 = tmp24;
            }
          }
        }
        let tmp17Result;
        if (!tmp5) {
          const obj3 = { size: native.Icon.Sizes.REFRESH_SMALL_16, source: _modDef9917, style: null };
          const items = [tmp13.sparkleIcon];
          let disabled2 = tmp4;
          if (tmp4) {
            disabled2 = tmp13.disabled;
          }
          items[1] = disabled2;
          obj3.style = items;
          tmp17Result = jsx(native.Icon, {
            size: native.Icon.Sizes.REFRESH_SMALL_16,
            source: _modDef9917,
            style: null,
          });
        }
        cResult[11] = tmp4;
        cResult[12] = tmp5;
        cResult[13] = tmp13.disabled;
        cResult[14] = tmp13.sparkleIcon;
        cResult[15] = tmp17Result;
        tmp15 = tmp17Result;
      }
      const items1 = [tmp13.container, tmp7];
      cResult[8] = tmp7;
      cResult[9] = tmp13.container;
      cResult[10] = items1;
      tmp14 = items1;
    }
  : (style) => {
      ({ loading, disabled, onPress } = style);
      if (onPress === undefined) {
        onPress = function c() {};
      }
      const merged = Object.assign(style, Object.assign({ style: 0, loading: 0, disabled: 0, onPress: 0 }));
      const tmp2 = closure_6();
      const obj = { onPress, pillStyle: null, loading, disabled, icon: null };
      const items = [tmp2.container, style.style];
      obj.pillStyle = items;
      let tmp3Result;
      if (!loading) {
        const obj2 = { size: native.Icon.Sizes.REFRESH_SMALL_16, source: _modDef9917, style: null };
        const items1 = [tmp2.sparkleIcon];
        if (disabled) {
          disabled = tmp2.disabled;
        }
        items1[1] = disabled;
        obj2.style = items1;
        tmp3Result = jsx(native.Icon, { size: native.Icon.Sizes.REFRESH_SMALL_16, source: _modDef9917, style: null });
      }
      obj.icon = tmp3Result;
      const merged1 = Object.assign(merged);
      return jsx(BaseTextButton.BaseTextButton, { onPress, pillStyle: null, loading, disabled, icon: null });
    };
