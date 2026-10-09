// === Module 8842: RestrictedGuildProfileView ===

// Module 8842 (RestrictedGuildProfileView)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useToken from "useToken" /* 4779 */;
import useThemeDefault from "useTheme" /* 4992 */;
import Text_Text from "Text/Text" /* 5087 */;
import LinearGradientDefault from "LinearGradient" /* 5388 */;
import GuildIcon from "GuildIcon" /* 6165 */;
import GuildProfileView from "GuildProfileView" /* 8843 */;
import noop from "module_19" /* 19 */;

const GuildIconDefault = GuildIcon;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/native/components/RestrictedGuildProfileView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function RestrictedGuildProfileView() {
  const cResult = c.c(23);
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
      if (cResult[6] !== styles.restrictedAcronym) {
        const obj4 = { size: GuildIcon.GuildIconSizes.XXLARGE, value: "?", selected: false, textStyle: styles.restrictedAcronym };
        const tmp19 = React4(GuildIconDefault, obj4);
        cResult[6] = styles.restrictedAcronym;
        cResult[7] = tmp19;
        let tmp16 = tmp19;
        const tmp5Result = GuildIconDefault;
      } else {
        tmp16 = cResult[7];
      }
      if (cResult[8] === styles.avatarBackground) {
        if (cResult[9] === tmp16) {
          let tmp20 = cResult[10];
        }
        if (cResult[11] === styles.header) {
          if (cResult[12] === tmp20) {
            let tmp24 = cResult[13];
          }
          const _Symbol = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const obj5 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
            const intl = util.intl;
            obj5.children = intl.string(util.t.wZmueu);
            const tmp31 = React4(Text_Text.Text, obj5);
            cResult[14] = tmp31;
            let tmp29 = tmp31;
          } else {
            tmp29 = cResult[14];
          }
          const _Symbol2 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            const obj6 = { variant: "text-md/medium", color: "text-subtle", children: null };
            const intl2 = util.intl;
            obj6.children = intl2.string(util.t["8mfCqY"]);
            const tmp34 = React4(Text_Text.Text, obj6);
            cResult[15] = tmp34;
            let tmp32 = tmp34;
          } else {
            tmp32 = cResult[15];
          }
          if (cResult[16] !== styles.body) {
            const obj7 = { style: styles.body, children: null };
            const items = [tmp29, tmp32];
            obj7.children = items;
            const tmp38 = hasOwnProperty(View, obj7);
            cResult[16] = styles.body;
            cResult[17] = tmp38;
            let tmp35 = tmp38;
          } else {
            tmp35 = cResult[17];
          }
          if (cResult[18] === styles.container) {
            if (cResult[19] === tmp12) {
              if (cResult[20] === tmp24) {
                if (cResult[21] === tmp35) {
                  let tmp39 = cResult[22];
                }
                return tmp39;
              }
            }
          }
          const obj8 = { style: tmp8, children: null };
          const items1 = [tmp12, tmp24, tmp35];
          obj8.children = items1;
          const tmp42 = hasOwnProperty(View, obj8);
          cResult[18] = styles.container;
          cResult[19] = tmp12;
          cResult[20] = tmp24;
          cResult[21] = tmp35;
          cResult[22] = tmp42;
          tmp39 = tmp42;
        }
        const obj9 = { style: styles.header, children: tmp20 };
        const tmp27 = React4(View, obj9);
        cResult[11] = styles.header;
        cResult[12] = tmp20;
        cResult[13] = tmp27;
        tmp24 = tmp27;
      }
      const obj10 = { style: styles.avatarBackground, children: tmp16 };
      const tmp23 = React4(View, obj10);
      cResult[8] = styles.avatarBackground;
      cResult[9] = tmp16;
      cResult[10] = tmp23;
      tmp20 = tmp23;
    }
    const obj11 = { style: tmp9, start: GuildProfileView.DiagonalGradient.START, end: GuildProfileView.DiagonalGradient.END, colors: tmp10 };
    const tmp15 = React4(LinearGradientDefault, obj11);
    cResult[3] = styles.colorBanner;
    cResult[4] = tmp10;
    cResult[5] = tmp15;
    tmp12 = tmp15;
    const tmp5Result2 = LinearGradientDefault;
  }
  const backgroundForProfile = GuildProfileView.getBackgroundForProfile(tmp6, token);
  cResult[0] = token;
  cResult[1] = tmp6;
  cResult[2] = backgroundForProfile;
  tmp10 = backgroundForProfile;
  const tmpResult = GuildProfileView;
}) : (function RestrictedGuildProfileView() {
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
  const obj8 = { size: null, value: "?", selected: false, textStyle: null };
  obj8.size = GuildIcon.GuildIconSizes.XXLARGE;
  obj8.textStyle = styles.restrictedAcronym;
  obj7.children = React4(GuildIconDefault, obj8);
  obj6.children = React4(View, obj7);
  items[1] = React4(View, obj6);
  const obj9 = { style: styles.body, children: null };
  const obj10 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj10.children = intl.string(util.t.wZmueu);
  const items1 = [React4(Text_Text.Text, obj10), ];
  const obj11 = { variant: "text-md/medium", color: "text-subtle", children: null };
  const intl2 = util.intl;
  obj11.children = intl2.string(util.t["8mfCqY"]);
  items1[1] = React4(Text_Text.Text, obj11);
  obj9.children = items1;
  items[2] = hasOwnProperty(View, obj9);
  obj3.children = items;
  return hasOwnProperty(View, obj3);
});