// discord_app/modules/guild_profile/native/components/RestrictedGuildProfileView.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../../_runtime/05612_LinearGradient.js";
import GuildIcon from "../../../guild/native/GuildIcon.tsx";
import GuildProfileView from "GuildProfileView.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const GuildIconDefault = GuildIcon;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let intl;
      let intl2;
      let items;
      let items1;
      const obj = react2;
      const cResult = obj.c(23);
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
          let tmp16;
          if (cResult[4] === tmp10) {
            tmp12 = cResult[5];
          }
          if (cResult[6] !== styles.restrictedAcronym) {
            const obj4 = {
              size: GuildIcon.GuildIconSizes.XXLARGE,
              value: "?",
              selected: false,
              textStyle: styles.restrictedAcronym,
            };
            const tmp5Result = GuildIconDefault;
            const tmp19 = React3(tmp5Result, obj4);
            cResult[6] = styles.restrictedAcronym;
            cResult[7] = tmp19;
            tmp16 = tmp19;
          } else {
            tmp16 = cResult[7];
          }
          if (cResult[8] === styles.avatarBackground) {
            let tmp20;
            if (cResult[9] === tmp16) {
              tmp20 = cResult[10];
            }
            if (cResult[11] === styles.header) {
              let tmp24;
              let tmp29;
              let tmp32;
              let tmp35;
              if (cResult[12] === tmp20) {
                tmp24 = cResult[13];
              }
              const _Symbol = Symbol;
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                const obj5 = {
                  variant: "heading-lg/semibold",
                  color: "mobile-text-heading-primary",
                  children: intl.string(intl3.t.wZmueu),
                };
                const Text = Text_Text.Text;
                intl = intl3.intl;
                const tmp31 = React3(Text, obj5);
                cResult[14] = tmp31;
                tmp29 = tmp31;
              } else {
                tmp29 = cResult[14];
              }
              const _Symbol2 = Symbol;
              if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                const obj6 = {
                  variant: "text-md/medium",
                  color: "text-subtle",
                  children: intl2.string(intl3.t["8mfCqY"]),
                };
                const Text2 = Text_Text.Text;
                intl2 = intl3.intl;
                const tmp34 = React3(Text2, obj6);
                cResult[15] = tmp34;
                tmp32 = tmp34;
              } else {
                tmp32 = cResult[15];
              }
              if (cResult[16] !== styles.body) {
                const obj7 = { style: styles.body, children: items };
                items = [tmp29, tmp32];
                const tmp38 = hasOwnProperty(View, obj7);
                cResult[16] = styles.body;
                cResult[17] = tmp38;
                tmp35 = tmp38;
              } else {
                tmp35 = cResult[17];
              }
              if (cResult[18] === styles.container) {
                if (cResult[19] === tmp12) {
                  if (cResult[20] === tmp24) {
                    let tmp39;
                    if (cResult[21] === tmp35) {
                      tmp39 = cResult[22];
                    }
                    return tmp39;
                  }
                }
              }
              const obj8 = { style: tmp8, children: items1 };
              items1 = [tmp12, tmp24, tmp35];
              const tmp42 = hasOwnProperty(View, obj8);
              cResult[18] = styles.container;
              cResult[19] = tmp12;
              cResult[20] = tmp24;
              cResult[21] = tmp35;
              cResult[22] = tmp42;
              tmp39 = tmp42;
            }
            const obj9 = { style: styles.header, children: tmp20 };
            const tmp27 = React3(View, obj9);
            cResult[11] = styles.header;
            cResult[12] = tmp20;
            cResult[13] = tmp27;
            tmp24 = tmp27;
          }
          const obj10 = { style: styles.avatarBackground, children: tmp16 };
          const tmp23 = React3(View, obj10);
          cResult[8] = styles.avatarBackground;
          cResult[9] = tmp16;
          cResult[10] = tmp23;
          tmp20 = tmp23;
        }
        const obj11 = {
          style: tmp9,
          start: GuildProfileView.DiagonalGradient.START,
          end: GuildProfileView.DiagonalGradient.END,
          colors: tmp10,
        };
        const tmp5Result2 = LinearGradientDefault;
        const tmp15 = React3(tmp5Result2, obj11);
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
    }
  : () => {
      let intl;
      let intl2;
      let items;
      let items1;
      let obj5;
      let obj7;
      let obj8;
      let tmp5;
      const obj = GuildProfileView;
      const styles = obj.useStyles();
      const obj3 = { style: styles.container, children: items };
      const tmp2 = useThemeDefault();
      const obj2 = useToken;
      const token = obj2.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
      const obj4 = {
        style: styles.colorBanner,
        start: GuildProfileView.DiagonalGradient.START,
        end: GuildProfileView.DiagonalGradient.END,
        colors: obj5.getBackgroundForProfile(tmp2, token),
      };
      const tmp4 = LinearGradientDefault;
      obj5 = GuildProfileView;
      items = [React3(tmp4, obj4), ,];
      const obj6 = { style: styles.header, children: React3(View, obj7) };
      obj7 = { style: styles.avatarBackground, children: React3(tmp5, obj8) };
      obj8 = {
        size: GuildIcon.GuildIconSizes.XXLARGE,
        value: "?",
        selected: false,
        textStyle: styles.restrictedAcronym,
      };
      tmp5 = GuildIconDefault;
      items[1] = React3(View, obj6);
      const obj9 = { style: styles.body, children: items1 };
      const obj10 = {
        variant: "heading-lg/semibold",
        color: "mobile-text-heading-primary",
        children: intl.string(intl3.t.wZmueu),
      };
      const Text = Text_Text.Text;
      intl = intl3.intl;
      items1 = [React3(Text, obj10)];
      const obj11 = { variant: "text-md/medium", color: "text-subtle", children: intl2.string(intl3.t["8mfCqY"]) };
      const Text2 = Text_Text.Text;
      intl2 = intl3.intl;
      items1[1] = React3(Text2, obj11);
      items[2] = hasOwnProperty(View, obj9);
      return hasOwnProperty(View, obj3);
    };
const result = size.fileFinishedImporting("modules/guild_profile/native/components/RestrictedGuildProfileView.tsx");

export default tmp4;
