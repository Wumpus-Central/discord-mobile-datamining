// discord_app/modules/guild_themes/native/GuildThemeNuxPreviewGraphic.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import GuildThemePreviewArtDefault from "GuildThemePreviewArt.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null };
createStyles = {
  width: "100%",
  aspectRatio: 1.7777777777777777,
  alignItems: "center",
  justifyContent: "center",
  marginBottom: nativeDefault.space.PX_24,
};
createStyles.container = createStyles;
let closure_4 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_themes/native/GuildThemeNuxPreviewGraphic.tsx");

export default function GuildThemeNuxPreviewGraphic(arg0) {
  ({ themeSettings, isPersonal } = arg0);
  const obj = {
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    style: closure_4().container,
    children: null,
  };
  let tmp4 = null;
  if (!isPersonal) {
    tmp4 = themeSettings;
  }
  obj.children = jsx(GuildThemePreviewArtDefault, { themeSettings: tmp4 });
  return (
    <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants" style={closure_4().container}>
      {null}
    </View>
  );
}
