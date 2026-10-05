// === Module 9412: GuildProfileLoadingError ===

// Module 9412 (GuildProfileLoadingError)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import useToken from "useToken" /* 4580 */;
import useThemeDefault from "useTheme" /* 4791 */;
import WarningIcon3 from "WarningIcon" /* 4803 */;
import Text_Text from "Text/Text" /* 4886 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import Pressables from "Pressables" /* 5909 */;
import GuildProfileView from "GuildProfileView" /* 9399 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let onRetry;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((onRetry) => {
  let intl;
  let intl3;
  let items;
  let items1;
  let items2;
  const obj = react2;
  const cResult = obj.c(30);
  onRetry = onRetry.onRetry;
  const obj2 = GuildProfileView;
  const styles = obj2.useStyles();
  const tmp6 = useThemeDefault();
  const obj3 = useToken;
  const token = obj3.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
  if (cResult[0] === token) {
    let tmp10;
    if (cResult[1] === tmp6) {
      tmp10 = cResult[2];
    }
    if (cResult[3] === styles.colorBanner) {
      let tmp12;
      let tmp17;
      let tmp20;
      if (cResult[4] === tmp10) {
        tmp12 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { size: "lg", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
        const WarningIcon = WarningIcon3.WarningIcon;
        const tmp19 = React3(WarningIcon, obj4);
        cResult[6] = tmp19;
        tmp17 = tmp19;
      } else {
        tmp17 = cResult[6];
      }
      if (cResult[7] !== styles.avatarBackground) {
        const obj5 = { style: styles.avatarBackground, children: tmp17 };
        const tmp23 = React3(View, obj5);
        cResult[7] = styles.avatarBackground;
        cResult[8] = tmp23;
        tmp20 = tmp23;
      } else {
        tmp20 = cResult[8];
      }
      if (cResult[9] === styles.avatarBackground) {
        let tmp24;
        if (cResult[10] === tmp20) {
          tmp24 = cResult[11];
        }
        if (cResult[12] === styles.header) {
          let tmp28;
          let tmp32;
          let tmp36;
          let tmp35;
          let tmp40;
          if (cResult[13] === tmp24) {
            tmp28 = cResult[14];
          }
          const _Symbol2 = Symbol;
          const body = styles.body;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            const obj6 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.string(intl4.t.DmIUGK) };
            const Text = Text_Text.Text;
            intl = intl4.intl;
            const tmp34 = React3(Text, obj6);
            cResult[15] = tmp34;
            tmp32 = tmp34;
          } else {
            tmp32 = cResult[15];
          }
          const _Symbol3 = Symbol;
          const error = styles.error;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = intl4.intl;
            const stringResult = intl2.string(intl4.t.s1fAEw);
            const obj7 = { size: "sm", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
            const WarningIcon2 = WarningIcon3.WarningIcon;
            const tmp39 = React3(WarningIcon2, obj7);
            cResult[16] = stringResult;
            cResult[17] = tmp39;
            tmp36 = tmp39;
            tmp35 = stringResult;
          } else {
            tmp35 = cResult[16];
            tmp36 = cResult[17];
          }
          const _Symbol4 = Symbol;
          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
            const obj8 = { variant: "text-sm/normal", color: "text-feedback-warning", children: intl3.string(intl4.t.tmGHjc) };
            const Text2 = Text_Text.Text;
            intl3 = intl4.intl;
            const tmp42 = React3(Text2, obj8);
            cResult[18] = tmp42;
            tmp40 = tmp42;
          } else {
            tmp40 = cResult[18];
          }
          if (cResult[19] === onRetry) {
            let tmp43;
            if (cResult[20] === styles.error) {
              tmp43 = cResult[21];
            }
            if (cResult[22] === styles.body) {
              let tmp46;
              if (cResult[23] === tmp43) {
                tmp46 = cResult[24];
              }
              if (cResult[25] === styles.container) {
                if (cResult[26] === tmp46) {
                  if (cResult[27] === tmp12) {
                    let tmp50;
                    if (cResult[28] === tmp28) {
                      tmp50 = cResult[29];
                    }
                    return tmp50;
                  }
                }
              }
              const obj9 = { style: tmp8, children: items };
              items = [tmp12, tmp28, tmp46];
              const tmp53 = hasOwnProperty(View, obj9);
              cResult[25] = styles.container;
              cResult[26] = tmp46;
              cResult[27] = tmp12;
              cResult[28] = tmp28;
              cResult[29] = tmp53;
              tmp50 = tmp53;
            }
            const obj10 = { style: body, children: items1 };
            items1 = [tmp32, tmp43];
            const tmp49 = hasOwnProperty(View, obj10);
            cResult[22] = styles.body;
            cResult[23] = tmp43;
            cResult[24] = tmp49;
            tmp46 = tmp49;
          }
          const obj11 = { style: error, onPress: onRetry, accessibilityRole: "button", accessibilityLabel: tmp35, children: items2 };
          items2 = [tmp36, tmp40];
          const tmp45 = hasOwnProperty(Pressables.PressableOpacity, obj11);
          cResult[19] = onRetry;
          cResult[20] = styles.error;
          cResult[21] = tmp45;
          tmp43 = tmp45;
        }
        const obj12 = { style: styles.header, children: tmp24 };
        const tmp31 = React3(View, obj12);
        cResult[12] = styles.header;
        cResult[13] = tmp24;
        cResult[14] = tmp31;
        tmp28 = tmp31;
      }
      const obj13 = { style: styles.avatarBackground, children: tmp20 };
      const tmp27 = React3(View, obj13);
      cResult[9] = styles.avatarBackground;
      cResult[10] = tmp20;
      cResult[11] = tmp27;
      tmp24 = tmp27;
    }
    const obj14 = { style: tmp9, start: GuildProfileView.DiagonalGradient.START, end: GuildProfileView.DiagonalGradient.END, colors: tmp10 };
    const tmp5Result = LinearGradientDefault;
    const tmp15 = React3(tmp5Result, obj14);
    cResult[3] = styles.colorBanner;
    cResult[4] = tmp10;
    cResult[5] = tmp15;
    tmp12 = tmp15;
  }
  const tmpResult = GuildProfileView;
  const backgroundForProfile = tmpResult.getBackgroundForProfile(tmp6, token);
  cResult[0] = token;
  cResult[1] = tmp6;
  cResult[2] = backgroundForProfile;
  tmp10 = backgroundForProfile;
}) : ((onRetry) => {
  let WarningIcon;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let items2;
  let obj5;
  let obj7;
  let obj8;
  let obj9;
  onRetry = onRetry.onRetry;
  const obj = GuildProfileView;
  const styles = obj.useStyles();
  const obj3 = { style: styles.container, children: items };
  const tmp2 = useThemeDefault();
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
  const obj4 = { style: styles.colorBanner, start: GuildProfileView.DiagonalGradient.START, end: GuildProfileView.DiagonalGradient.END, colors: obj5.getBackgroundForProfile(tmp2, token) };
  const tmp4 = LinearGradientDefault;
  obj5 = GuildProfileView;
  items = [React3(tmp4, obj4), , ];
  const obj6 = { style: styles.header, children: React3(View, obj7) };
  obj7 = { style: styles.avatarBackground, children: React3(View, obj8) };
  obj8 = { style: styles.avatarBackground, children: React3(WarningIcon, obj9) };
  obj9 = { size: "lg", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
  WarningIcon = WarningIcon3.WarningIcon;
  items[1] = React3(View, obj6);
  const obj10 = { style: styles.body, children: items1 };
  const obj11 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.string(intl4.t.DmIUGK) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items1 = [React3(Text, obj11), ];
  const obj12 = { style: styles.error, onPress: onRetry, accessibilityRole: "button", accessibilityLabel: intl2.string(intl4.t.s1fAEw), children: items2 };
  const PressableOpacity = Pressables.PressableOpacity;
  intl2 = intl4.intl;
  const obj13 = { size: "sm", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
  const WarningIcon2 = WarningIcon3.WarningIcon;
  items2 = [React3(WarningIcon2, obj13), ];
  const obj14 = { variant: "text-sm/normal", color: "text-feedback-warning", children: intl3.string(intl4.t.tmGHjc) };
  const Text2 = Text_Text.Text;
  intl3 = intl4.intl;
  items2[1] = React3(Text2, obj14);
  items1[1] = hasOwnProperty(PressableOpacity, obj12);
  items[2] = hasOwnProperty(View, obj10);
  return hasOwnProperty(View, obj3);
});
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileLoadingError.tsx");

export default tmp4;