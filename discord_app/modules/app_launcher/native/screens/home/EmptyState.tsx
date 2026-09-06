// discord_app/modules/app_launcher/native/screens/home/EmptyState.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import AppLauncherTypes from "../../../AppLauncherTypes.tsx";
import AppLauncherNativeUtils from "../../AppLauncherNativeUtils.tsx";
import HomeEmptyStateDefault from "../../images/HomeEmptyState.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: null, textContainer: null };
createStyles = {
  padding: 16,
  gap: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.lg,
  alignItems: "center",
  justifyContent: "center",
};
createStyles.container = createStyles;
createStyles.textContainer = { textAlign: "center" };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/EmptyState.tsx");

export default function EmptyState() {
  const tmp = closure_6();
  let obj = AppLauncherNativeUtils;
  const logAppLauncherEmptyStateView = obj.useLogAppLauncherEmptyStateView(
    AppLauncherTypes.AppLauncherEmptyStateType.HOME_EMPTY,
  );
  obj = { style: tmp.container, children: null };
  const items = [React4(HomeEmptyStateDefault, {})];
  obj = { style: tmp.textContainer, variant: "text-md/semibold", color: "text-default", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t["V7+xhH"]);
  items[1] = React4(Text_Text.Text, obj);
  obj.children = items;
  return hasOwnProperty(View, obj);
}
