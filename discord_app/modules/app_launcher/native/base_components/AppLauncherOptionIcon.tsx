// discord_app/modules/app_launcher/native/base_components/AppLauncherOptionIcon.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { iconWrapper: null };
createStyles = {
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: nativeDefault.radii.round,
};
createStyles.iconWrapper = createStyles;
createStyles = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherOptionIcon.tsx");

export default function AppLauncherOptionIcon(wrapperSize) {
  let num = wrapperSize.wrapperSize;
  if (num === undefined) {
    num = 32;
  }
  const obj = { style: null, children: null };
  const items = [createStyles().iconWrapper, wrapperSize.wrapperStyle, { height: num, width: num }];
  obj.style = items;
  obj.children = wrapperSize.icon;
  return <View style={null}>{null}</View>;
}
export const useAppLauncherOptionIconStyles = createStyles;
