// === Module 9412: GuildProfileLoadingError ===

// Module 9412 (GuildProfileLoadingError)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useToken from "useToken" /* 4580 */;
import useThemeDefault from "useTheme" /* 4791 */;
import WarningIcon from "WarningIcon" /* 4803 */;
import Text_Text from "Text/Text" /* 4886 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import Pressables from "Pressables" /* 5909 */;
import GuildProfileView from "GuildProfileView" /* 9399 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileLoadingError.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onRetry) => {
  const cResult = c.c(30);
  onRetry = onRetry.onRetry;
  const styles = GuildProfileView.useStyles();
  const tmp6 = useThemeDefault();
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
  if (cResult[0] === token) {
    if (cResult[1] === tmp6) {
      let tmp10 = cResult[2];
    }
    if (cResult[3] === styles.colorBanner) {
      if (cResult[4] === tmp10) {
        let tmp12 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { size: "lg", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
        const tmp19 = React4(WarningIcon.WarningIcon, obj4);
        cResult[6] = tmp19;
        let tmp17 = tmp19;
      } else {
        tmp17 = cResult[6];
      }
      if (cResult[7] !== styles.avatarBackground) {
        const obj5 = { style: styles.avatarBackground, children: tmp17 };
        const tmp23 = React4(View, obj5);
        cResult[7] = styles.avatarBackground;
        cResult[8] = tmp23;
        let tmp20 = tmp23;
      } else {
        tmp20 = cResult[8];
      }
      if (cResult[9] === styles.avatarBackground) {
        if (cResult[10] === tmp20) {
          let tmp24 = cResult[11];
        }
        if (cResult[12] === styles.header) {
          if (cResult[13] === tmp24) {
            let tmp28 = cResult[14];
          }
          const _Symbol2 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            const obj6 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
            const intl = util.intl;
            obj6.children = intl.string(util.t.DmIUGK);
            const tmp34 = React4(Text_Text.Text, obj6);
            cResult[15] = tmp34;
            let tmp32 = tmp34;
          } else {
            tmp32 = cResult[15];
          }
          const _Symbol3 = Symbol;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = util.intl;
            const stringResult = intl2.string(util.t.s1fAEw);
            const obj7 = { size: "sm", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
            const tmp39 = React4(WarningIcon.WarningIcon, obj7);
            cResult[16] = stringResult;
            cResult[17] = tmp39;
            let tmp36 = tmp39;
            let tmp35 = stringResult;
          } else {
            tmp35 = cResult[16];
            tmp36 = cResult[17];
          }
          const _Symbol4 = Symbol;
          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
            const obj8 = { variant: "text-sm/normal", color: "text-feedback-warning", children: null };
            const intl3 = util.intl;
            obj8.children = intl3.string(util.t.tmGHjc);
            const tmp42 = React4(Text_Text.Text, obj8);
            cResult[18] = tmp42;
            let tmp40 = tmp42;
          } else {
            tmp40 = cResult[18];
          }
          if (cResult[19] === onRetry) {
            if (cResult[20] === styles.error) {
              let tmp43 = cResult[21];
            }
            if (cResult[22] === styles.body) {
              if (cResult[23] === tmp43) {
                let tmp46 = cResult[24];
              }
              if (cResult[25] === styles.container) {
                if (cResult[26] === tmp46) {
                  if (cResult[27] === tmp12) {
                    if (cResult[28] === tmp28) {
                      let tmp50 = cResult[29];
                    }
                    return tmp50;
                  }
                }
              }
              const obj9 = { style: tmp8, children: null };
              const items = [tmp12, tmp28, tmp46];
              obj9.children = items;
              const tmp53 = hasOwnProperty(View, obj9);
              cResult[25] = styles.container;
              cResult[26] = tmp46;
              cResult[27] = tmp12;
              cResult[28] = tmp28;
              cResult[29] = tmp53;
              tmp50 = tmp53;
            }
            const obj10 = { style: styles.body, children: null };
            const items1 = [tmp32, tmp43];
            obj10.children = items1;
            const tmp49 = hasOwnProperty(View, obj10);
            cResult[22] = styles.body;
            cResult[23] = tmp43;
            cResult[24] = tmp49;
            tmp46 = tmp49;
          }
          const obj11 = { style: styles.error, onPress: onRetry, accessibilityRole: "button", accessibilityLabel: tmp35, children: null };
          const items2 = [tmp36, tmp40];
          obj11.children = items2;
          const tmp45 = hasOwnProperty(Pressables.PressableOpacity, obj11);
          cResult[19] = onRetry;
          cResult[20] = styles.error;
          cResult[21] = tmp45;
          tmp43 = tmp45;
        }
        const obj12 = { style: styles.header, children: tmp24 };
        const tmp31 = React4(View, obj12);
        cResult[12] = styles.header;
        cResult[13] = tmp24;
        cResult[14] = tmp31;
        tmp28 = tmp31;
      }
      const obj13 = { style: styles.avatarBackground, children: tmp20 };
      const tmp27 = React4(View, obj13);
      cResult[9] = styles.avatarBackground;
      cResult[10] = tmp20;
      cResult[11] = tmp27;
      tmp24 = tmp27;
    }
    const obj14 = { style: tmp9, start: GuildProfileView.DiagonalGradient.START, end: GuildProfileView.DiagonalGradient.END, colors: tmp10 };
    const tmp15 = React4(LinearGradientDefault, obj14);
    cResult[3] = styles.colorBanner;
    cResult[4] = tmp10;
    cResult[5] = tmp15;
    tmp12 = tmp15;
    const tmp5Result = LinearGradientDefault;
  }
  const backgroundForProfile = GuildProfileView.getBackgroundForProfile(tmp6, token);
  cResult[0] = token;
  cResult[1] = tmp6;
  cResult[2] = backgroundForProfile;
  tmp10 = backgroundForProfile;
  const tmpResult = GuildProfileView;
}) : ((onPress) => {
  const styles = GuildProfileView.useStyles();
  const tmp2 = useThemeDefault();
  const obj3 = { style: styles.container, children: null };
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
  const obj4 = { style: styles.colorBanner, start: null, end: null, colors: null };
  obj4.start = GuildProfileView.DiagonalGradient.START;
  obj4.end = GuildProfileView.DiagonalGradient.END;
  const tmp4 = LinearGradientDefault;
  obj4.colors = GuildProfileView.getBackgroundForProfile(tmp2, token);
  const items = [React4(tmp4, obj4), , ];
  const obj6 = { style: styles.header, children: null };
  const obj7 = { style: styles.avatarBackground, children: null };
  const obj8 = { style: styles.avatarBackground, children: null };
  obj8.children = React4(WarningIcon.WarningIcon, { size: "lg", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING });
  obj7.children = React4(View, obj8);
  obj6.children = React4(View, obj7);
  items[1] = React4(View, obj6);
  const obj10 = { style: styles.body, children: null };
  const obj11 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj11.children = intl.string(util.t.DmIUGK);
  const items1 = [React4(Text_Text.Text, obj11), ];
  const obj12 = { style: styles.error, onPress: onPress.onRetry, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl2 = util.intl;
  obj12.accessibilityLabel = intl2.string(util.t.s1fAEw);
  const obj9 = { size: "lg", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
  const items2 = [React4(WarningIcon.WarningIcon, { size: "sm", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING }), ];
  const obj14 = { variant: "text-sm/normal", color: "text-feedback-warning", children: null };
  const intl3 = util.intl;
  obj14.children = intl3.string(util.t.tmGHjc);
  items2[1] = React4(Text_Text.Text, obj14);
  obj12.children = items2;
  items1[1] = hasOwnProperty(Pressables.PressableOpacity, obj12);
  obj10.children = items1;
  items[2] = hasOwnProperty(View, obj10);
  obj3.children = items;
  return hasOwnProperty(View, obj3);
});