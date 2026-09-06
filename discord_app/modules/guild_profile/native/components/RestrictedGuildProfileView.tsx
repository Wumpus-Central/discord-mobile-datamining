// discord_app/modules/guild_profile/native/components/RestrictedGuildProfileView.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../../_runtime/04987_LinearGradient.js";
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
  let obj = GuildProfileView;
  const styles = obj.useStyles();
  let obj1 = useToken;
  obj = { style: styles.container, children: null };
  const token = obj1.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
  obj = { style: styles.colorBanner, start: null, end: null, colors: null };
  const tmp2 = useThemeDefault();
  obj.start = GuildProfileView.DiagonalGradient.START;
  obj.end = GuildProfileView.DiagonalGradient.END;
  let obj4 = GuildProfileView;
  obj.colors = obj4.getBackgroundForProfile(tmp2, token);
  const items = [React4(LinearGradientDefault, obj), ,];
  obj1 = { style: styles.header, children: null };
  const obj2 = { style: styles.avatarBackground, children: null };
  const obj3 = { size: null, value: "?", selected: false, textStyle: null };
  obj3.size = GuildIcon.GuildIconSizes.XXLARGE;
  obj3.textStyle = styles.restrictedAcronym;
  obj2.children = React4(GuildIconDefault, obj3);
  obj1.children = React4(View, obj2);
  items[1] = React4(View, obj1);
  obj4 = { style: styles.body, children: null };
  const obj5 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj5.children = intl.string(util.t.wZmueu);
  const items1 = [React4(Text_Text.Text, obj5)];
  const obj6 = { variant: "text-md/medium", color: "text-subtle", children: null };
  const intl2 = util.intl;
  obj6.children = intl2.string(util.t["8mfCqY"]);
  items1[1] = React4(Text_Text.Text, obj6);
  obj4.children = items1;
  items[2] = hasOwnProperty(View, obj4);
  obj.children = items;
  return hasOwnProperty(View, obj);
}
