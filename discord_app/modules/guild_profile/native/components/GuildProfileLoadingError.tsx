// === Module 9203: GuildProfileLoadingError ===

// Module 9203 (GuildProfileLoadingError)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import useToken from "useToken" /* 4262 */;
import useThemeDefault from "useTheme" /* 4495 */;
import Text_Text from "Text/Text" /* 4556 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import Pressables from "Pressables" /* 5123 */;
import WarningIcon from "WarningIcon" /* 8588 */;
import GuildProfileView from "GuildProfileView" /* 9190 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileLoadingError.tsx");

export default function GuildProfileLoadingError(onPress) {
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
  const items = [React4(LinearGradientDefault, obj), , ];
  obj1 = { style: styles.header, children: null };
  const obj2 = { style: styles.avatarBackground, children: null };
  const obj3 = { style: styles.avatarBackground, children: null };
  obj4 = { size: "lg", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
  obj3.children = React4(WarningIcon.WarningIcon, obj4);
  obj2.children = React4(View, obj3);
  obj1.children = React4(View, obj2);
  items[1] = React4(View, obj1);
  const obj5 = { style: styles.body, children: null };
  const obj6 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj6.children = intl.string(util.t.DmIUGK);
  const items1 = [React4(Text_Text.Text, obj6), ];
  const obj7 = { style: styles.error, onPress: onPress.onRetry, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl2 = util.intl;
  obj7.accessibilityLabel = intl2.string(util.t.s1fAEw);
  const items2 = [React4(WarningIcon.WarningIcon, { size: "sm", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING }), ];
  const obj9 = { variant: "text-sm/normal", color: "text-feedback-warning", children: null };
  const intl3 = util.intl;
  obj9.children = intl3.string(util.t.tmGHjc);
  items2[1] = React4(Text_Text.Text, obj9);
  obj7.children = items2;
  items1[1] = hasOwnProperty(Pressables.PressableOpacity, obj7);
  obj5.children = items1;
  items[2] = hasOwnProperty(View, obj5);
  obj.children = items;
  return hasOwnProperty(View, obj);
};