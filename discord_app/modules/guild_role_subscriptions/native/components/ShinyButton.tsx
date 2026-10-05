// discord_app/modules/guild_role_subscriptions/native/components/ShinyButton.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import BaseTextButton2 from "../../../../design/components/Button/native/BaseTextButton.native.tsx";
import AssetRegistryDefault from "../../../../../_runtime/09904_AssetRegistry.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj2;
let obj3;
let closure_3 = ["style", "loading", "disabled", "onPress"];
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, sparkleIcon: obj3, disabled: { opacity: 0.5 } };
createStyles = createStyles.createStyles;
obj2 = {
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT,
};
obj3 = { marginRight: 4, tintColor: nativeDefault.colors.WHITE };
let closure_6 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let disabled;
      let loading;
      let onPress;
      let style;
      let tmp12;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(23);
      if (cResult[0] !== arg0) {
        ({ style, loading, disabled, onPress } = arg0);
        const tmp11 = _objectWithoutProperties(arg0, closure_3);
        cResult[0] = arg0;
        cResult[1] = disabled;
        cResult[2] = loading;
        cResult[3] = tmp11;
        cResult[4] = style;
        cResult[5] = onPress;
        tmp8 = onPress;
        tmp7 = style;
        tmp6 = tmp11;
        tmp5 = loading;
        tmp4 = disabled;
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
        tmp12 = fn;
      } else {
        tmp12 = cResult[7];
      }
      const tmp13 = closure_6();
      if (cResult[8] === tmp7) {
        let tmp14;
        if (cResult[9] === tmp13.container) {
          tmp14 = cResult[10];
        }
        if (cResult[11] === tmp4) {
          if (cResult[12] === tmp5) {
            if (cResult[13] === tmp13.disabled) {
              let tmp15;
              if (cResult[14] === tmp13.sparkleIcon) {
                tmp15 = cResult[15];
              }
              if (cResult[16] === tmp4) {
                if (cResult[17] === tmp5) {
                  if (cResult[18] === tmp12) {
                    if (cResult[19] === tmp6) {
                      if (cResult[20] === tmp14) {
                        let tmp19;
                        if (cResult[21] === tmp15) {
                          tmp19 = cResult[22];
                        }
                        return tmp19;
                      }
                    }
                  }
                }
              }
              const BaseTextButton = BaseTextButton2.BaseTextButton;
              const merged = Object.assign(tmp6);
              const tmp24 = (
                <BaseTextButton onPress={tmp12} pillStyle={tmp14} loading={tmp5} disabled={tmp4} icon={tmp15} />
              );
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
          const Icon = native.Icon;
          const items = [tmp13.sparkleIcon, tmp4 && tmp13.disabled];
          tmp17Result = <Icon size={native.Icon.Sizes.REFRESH_SMALL_16} source={AssetRegistryDefault} style={items} />;
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
      let disabled;
      let loading;
      let onPress;
      ({ loading, disabled, onPress } = style);
      style = style.style;
      if (onPress === undefined) {
        onPress = function c() {};
      }
      const merged = Object.assign(style, Object.assign({ style: 0, loading: 0, disabled: 0, onPress: 0 }));
      const tmp2 = closure_6();
      const items = [tmp2.container, style];
      let tmp3Result;
      const BaseTextButton = BaseTextButton2.BaseTextButton;
      if (!loading) {
        const Icon = native.Icon;
        const items1 = [tmp2.sparkleIcon];
        if (disabled) {
          disabled = tmp2.disabled;
        }
        items1[1] = disabled;
        tmp3Result = <Icon size={native.Icon.Sizes.REFRESH_SMALL_16} source={AssetRegistryDefault} style={items1} />;
      }
      const merged1 = Object.assign(merged);
      return (
        <BaseTextButton onPress={onPress} pillStyle={items} loading={loading} disabled={disabled} icon={tmp3Result} />
      );
    };
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/ShinyButton.tsx");

export default tmp4;
