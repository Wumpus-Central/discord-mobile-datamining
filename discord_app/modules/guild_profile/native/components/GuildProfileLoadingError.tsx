// discord_app/modules/guild_profile/native/components/GuildProfileLoadingError.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../../_runtime/05293_LinearGradient.js";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import WarningIcon from "../../../../design/components/Icon/native/redesign/generated/WarningIcon.tsx";
import GuildProfileView from "GuildProfileView.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileLoadingError.tsx");

export default function GuildProfileLoadingError(onPress) {
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
  const obj8 = { style: styles.avatarBackground, children: null };
  obj8.children = React4(WarningIcon.WarningIcon, { size: "lg", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING });
  obj7.children = React4(View, obj8);
  obj6.children = React4(View, obj7);
  items[1] = React4(View, obj6);
  const obj10 = { style: styles.body, children: null };
  const obj11 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj11.children = intl.string(util.t.DmIUGK);
  const items1 = [React4(Text_Text.Text, obj11)];
  const obj12 = {
    style: styles.error,
    onPress: onPress.onRetry,
    accessibilityRole: "button",
    accessibilityLabel: null,
    children: null,
  };
  const intl2 = util.intl;
  obj12.accessibilityLabel = intl2.string(util.t.s1fAEw);
  const obj9 = { size: "lg", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
  const items2 = [React4(WarningIcon.WarningIcon, { size: "sm", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING })];
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
}
