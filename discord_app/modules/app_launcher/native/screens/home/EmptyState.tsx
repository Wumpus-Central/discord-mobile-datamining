// discord_app/modules/app_launcher/native/screens/home/EmptyState.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import AppLauncherTypes from "../../../AppLauncherTypes.tsx";
import AppLauncherNativeUtils from "../../AppLauncherNativeUtils.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let obj2 = {
  container: {
    padding: nativeDefault.space.PX_16,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
    borderRadius: nativeDefault.radii.lg,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: { textAlign: "center" },
};
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/EmptyState.tsx");

export default function EmptyState() {
  const tmp = closure_4();
  const logAppLauncherEmptyStateView = AppLauncherNativeUtils.useLogAppLauncherEmptyStateView(
    AppLauncherTypes.AppLauncherEmptyStateType.HOME_EMPTY,
  );
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.textContainer, variant: "text-md/semibold", color: "text-default", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["V7+xhH"]);
  obj2.children = jsx(Text_Text.Text, {
    style: tmp.textContainer,
    variant: "text-md/semibold",
    color: "text-default",
    children: null,
  });
  return <View style={tmp.container}>{null}</View>;
}
