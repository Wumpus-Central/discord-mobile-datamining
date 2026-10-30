// discord_app/modules/app_launcher/native/screens/home/NoPermsState.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import shared from "../../../../../design/shared.tsx";
import useThemeDefault from "../../../../../hooks/useTheme.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import AppLauncherTypes from "../../../AppLauncherTypes.tsx";
import AppLauncherNativeUtils from "../../AppLauncherNativeUtils.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5009);
let obj2 = {
  container: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    gap: 12,
    backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_CARD_DEFAULT,
    borderRadius: nativeDefault.radii.lg,
    alignItems: "center",
    justifyContent: "flex-start",
    display: "flex",
    flexDirection: "row",
  },
  textContainer: { flexShrink: 1 },
  image: { width: 64, height: 64 },
};
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/NoPermsState.tsx");

export default function EmptyState() {
  const tmp = closure_6();
  const tmp4Result = importDefault(shared.isThemeLight(useThemeDefault()) ? 12266 : 12267);
  const logAppLauncherEmptyStateView = AppLauncherNativeUtils.useLogAppLauncherEmptyStateView(
    AppLauncherTypes.AppLauncherEmptyStateType.HOME_NO_PERMISSIONS,
  );
  const obj2 = { style: tmp.container, children: null };
  const items = [React4(FastImageDefault, { style: tmp.image, resizeMode: "contain", source: tmp4Result })];
  const obj4 = { style: tmp.textContainer, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t.uDnXXj);
  items[1] = React4(Text_Text.Text, obj4);
  obj2.children = items;
  return hasOwnProperty(View, obj2);
}
