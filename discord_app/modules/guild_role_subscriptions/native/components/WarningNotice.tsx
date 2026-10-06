// discord_app/modules/guild_role_subscriptions/native/components/WarningNotice.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AssetRegistryDefault from "../../../../../_runtime/04813_AssetRegistry.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  horizontalContainer: { flexDirection: "row", alignItems: "center" },
  message: { flex: 1, marginStart: 10, textAlignVertical: "center" },
  actionButtonWrapper: { marginTop: 24, alignSelf: "center", width: "100%" },
  containerYellow: obj3,
  textYellow: obj4,
  alertIcon: { alignSelf: "flex-start", width: 20, height: 20 },
};
obj2 = { borderRadius: nativeDefault.radii.xs, borderWidth: 1, padding: 12 };
createStyles = createStyles.createStyles;
obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING,
  borderColor: nativeDefault.colors.STATUS_WARNING,
};
obj4 = { color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
let closure_6 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let ctaLabel;
      let disabled;
      let items;
      let items1;
      let notice;
      let obj5;
      let onClick;
      let style;
      let submitting;
      const obj = react2;
      const cResult = obj.c(26);
      ({ style, notice, ctaLabel, onClick, submitting, disabled } = arg0);
      const tmp4 = closure_6();
      if (cResult[0] === style) {
        if (cResult[1] === tmp4.container) {
          let tmp5;
          let tmp6;
          if (cResult[2] === tmp4.containerYellow) {
            tmp5 = cResult[3];
          }
          if (cResult[4] !== tmp4.alertIcon) {
            const obj2 = { style: tmp4.alertIcon, source: AssetRegistryDefault };
            const tmp9 = FastImageDefault;
            const tmp10 = React3(tmp9, obj2);
            cResult[4] = tmp4.alertIcon;
            cResult[5] = tmp10;
            tmp6 = tmp10;
          } else {
            tmp6 = cResult[5];
          }
          if (cResult[6] === tmp4.message) {
            let tmp11;
            if (cResult[7] === tmp4.textYellow) {
              tmp11 = cResult[8];
            }
            if (cResult[9] === notice) {
              let tmp12;
              if (cResult[10] === tmp11) {
                tmp12 = cResult[11];
              }
              if (cResult[12] === tmp4.horizontalContainer) {
                if (cResult[13] === tmp6) {
                  let tmp15;
                  if (cResult[14] === tmp12) {
                    tmp15 = cResult[15];
                  }
                  if (cResult[16] === ctaLabel) {
                    if (cResult[17] === disabled) {
                      if (cResult[18] === onClick) {
                        if (cResult[19] === tmp4.actionButtonWrapper) {
                          let tmp19;
                          if (cResult[20] === submitting) {
                            tmp19 = cResult[21];
                          }
                          if (cResult[22] === tmp5) {
                            if (cResult[23] === tmp15) {
                              let tmp24;
                              if (cResult[24] === tmp19) {
                                tmp24 = cResult[25];
                              }
                              return tmp24;
                            }
                          }
                          const obj3 = { style: tmp5, children: items };
                          items = [tmp15, tmp19];
                          const tmp27 = hasOwnProperty(View, obj3);
                          cResult[22] = tmp5;
                          cResult[23] = tmp15;
                          cResult[24] = tmp19;
                          cResult[25] = tmp27;
                          tmp24 = tmp27;
                        }
                      }
                    }
                  }
                  let tmp21 = null != onClick && null != ctaLabel;
                  if (tmp21) {
                    const obj4 = {
                      style: tmp4.actionButtonWrapper,
                      children: React3(components_Button_Button.Button, obj5),
                    };
                    obj5 = { onPress: onClick, disabled, loading: submitting, text: ctaLabel, grow: true };
                    tmp21 = React3(View, obj4);
                  }
                  cResult[16] = ctaLabel;
                  cResult[17] = disabled;
                  cResult[18] = onClick;
                  cResult[19] = tmp4.actionButtonWrapper;
                  cResult[20] = submitting;
                  cResult[21] = tmp21;
                  tmp19 = tmp21;
                }
              }
              const obj6 = { style: tmp4.horizontalContainer, children: items1 };
              items1 = [tmp6, tmp12];
              const tmp18 = hasOwnProperty(View, obj6);
              cResult[12] = tmp4.horizontalContainer;
              cResult[13] = tmp6;
              cResult[14] = tmp12;
              cResult[15] = tmp18;
              tmp15 = tmp18;
            }
            const obj7 = {
              style: tmp11,
              variant: "text-sm/medium",
              color: "interactive-text-active",
              children: notice,
            };
            const tmp14 = React3(Text_Text.Text, obj7);
            cResult[9] = notice;
            cResult[10] = tmp11;
            cResult[11] = tmp14;
            tmp12 = tmp14;
          }
          const items2 = [,];
          ({ message: arr2[0], textYellow: arr2[1] } = tmp4);
          cResult[6] = tmp4.message;
          cResult[7] = tmp4.textYellow;
          cResult[8] = items2;
          tmp11 = items2;
        }
      }
      const items3 = [style, ,];
      ({ container: arr[1], containerYellow: arr[2] } = tmp4);
      cResult[0] = style;
      cResult[1] = tmp4.container;
      cResult[2] = tmp4.containerYellow;
      cResult[3] = items3;
      tmp5 = items3;
    }
  : (arg0) => {
      let ctaLabel;
      let disabled;
      let items;
      let items1;
      let items2;
      let items3;
      let notice;
      let obj6;
      let onClick;
      let style;
      let submitting;
      ({ ctaLabel, onClick } = arg0);
      ({ style, notice, submitting, disabled } = arg0);
      const tmp = closure_6();
      const obj = { style: items, children: items3 };
      items = [style, ,];
      ({ container: arr[1], containerYellow: arr[2] } = tmp);
      const obj2 = { style: tmp.horizontalContainer, children: items1 };
      const obj3 = { style: tmp.alertIcon, source: AssetRegistryDefault };
      const tmp6 = FastImageDefault;
      items1 = [React3(tmp6, obj3)];
      const obj4 = { style: items2, variant: "text-sm/medium", color: "interactive-text-active", children: notice };
      items2 = [,];
      ({ message: arr3[0], textYellow: arr3[1] } = tmp);
      items1[1] = React3(Text_Text.Text, obj4);
      items3 = [hasOwnProperty(View, obj2)];
      let tmp4Result = null != onClick && null != ctaLabel;
      if (tmp4Result) {
        const obj5 = { style: tmp.actionButtonWrapper, children: React3(components_Button_Button.Button, obj6) };
        obj6 = { onPress: onClick, disabled, loading: submitting, text: ctaLabel, grow: true };
        tmp4Result = React3(View, obj5);
      }
      items3[1] = tmp4Result;
      return hasOwnProperty(View, obj);
    };
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/WarningNotice.tsx");

export default tmp5;
