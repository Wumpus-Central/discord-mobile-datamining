// discord_app/modules/guild_profile/native/components/RestrictedGuildProfileView.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../../_runtime/05072_LinearGradient.js";
import GuildIcon from "../../../guild/native/GuildIcon.tsx";
import GuildProfileView from "GuildProfileView.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const GuildIconDefault = GuildIcon;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/native/components/RestrictedGuildProfileView.tsx");

export default function RestrictedGuildProfileView() {
  const styles = GuildProfileView.useStyles();
  const tmp2 = useThemeDefault();
  const obj3 = { style: styles.container, children: null };
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
  const obj4 = { style: styles.colorBanner, start: null, end: null, colors: null };
  obj4.start = GuildProfileView.DiagonalGradient.START;
  obj4.end = GuildProfileView.DiagonalGradient.END;
  const tmp4 = LinearGradientDefault;
  obj4.colors = GuildProfileView.getBackgroundForProfile(tmp2, token);
  const items = [React4(tmp4, obj4), ,];
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
  const items1 = [React4(Text_Text.Text, obj10)];
  const obj11 = { variant: "text-md/medium", color: "text-subtle", children: null };
  const intl2 = util.intl;
  obj11.children = intl2.string(util.t["8mfCqY"]);
  items1[1] = React4(Text_Text.Text, obj11);
  obj9.children = items1;
  items[2] = hasOwnProperty(View, obj9);
  obj3.children = items;
  return hasOwnProperty(View, obj3);
}
