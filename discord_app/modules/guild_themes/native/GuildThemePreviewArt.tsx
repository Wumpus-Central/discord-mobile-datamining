// === Module 16164: GuildThemePreviewArt ===

// Module 16164 (GuildThemePreviewArt)
import nativeDefault from "native" /* 576 */;
import GuildThemePresets from "GuildThemePresets" /* 4414 */;
import useThemeDefault from "useTheme" /* 4495 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import GuildThemePreviewOverlayDefault from "GuildThemePreviewOverlay" /* 16165 */;
import noop from "module_19" /* 19 */;

require = fn;
function PreviewOverlay() {
  return <View pointerEvents="none" style={closure_6().previewOverlay}>{jsx(GuildThemePreviewOverlayDefault, {})}</View>;
}
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { previewArt: null, previewOverlay: null };
createStyles = { position: "relative", width: 256, aspectRatio: 1.5705521472392638, overflow: "hidden", borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.previewArt = createStyles;
createStyles.previewOverlay = { position: "absolute", top: 7.314, left: 7.461, width: 259.862, height: 154.514 };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_themes/native/GuildThemePreviewArt.tsx");

export default function GuildThemePreviewArt(themeSettings) {
  themeSettings = themeSettings.themeSettings;
  const tmp4 = useThemeDefault();
  importDefault = tmp4;
  let items = [themeSettings, tmp4];
  const memo = noop.useMemo(() => {
    let tmp3 = null;
    if (null != themeSettings) {
      const customUserThemeSettings = themeSettings.customUserThemeSettings;
      if (null != customUserThemeSettings) {
        const first = customUserThemeSettings.colors[0];
        if (null != first) {
          let obj = { colors: null, angle: null };
          const items = [];
          HermesBuiltin.arraySpread(GuildThemePresets.getSingleColorGuildThemeGradientColors(first, closure_1), 0);
          obj.colors = items;
          let num2 = customUserThemeSettings.gradientAngle;
          if (num2 == null) {
            num2 = 0;
          }
          obj.angle = num2;
          tmp3 = obj;
        }
      }
      obj = GuildThemePresets;
      const guildThemePreset = obj.getGuildThemePreset(themeSettings.presetId);
      tmp3 = null;
      if (null != guildThemePreset) {
        const guildThemePresetAppearance = GuildThemePresets.getGuildThemePresetAppearance(guildThemePreset, closure_1);
        obj = { colors: null, locations: null, angle: null };
        const colors = guildThemePresetAppearance.colors;
        obj.colors = colors.map((hex) => hex.hex);
        const colors1 = guildThemePresetAppearance.colors;
        obj.locations = colors1.map((stop) => stop.stop / 100);
        obj.angle = guildThemePresetAppearance.angle;
        tmp3 = obj;
      }
    }
    return tmp3;
  }, items);
  const items1 = [closure_6().previewArt, themeSettings.style];
  if (null == memo) {
    let obj = { style: items1, children: <PreviewOverlay /> };
    let tmp9 = <View style={items1}><PreviewOverlay /></View>;
  } else {
    obj = { colors: null, locations: null, useAngle: true, angle: null, style: null, children: null };
    ({ colors: obj.colors, locations: obj.locations, angle: obj.angle } = memo);
    obj.style = items1;
    obj.children = <PreviewOverlay />;
    tmp9 = jsx(LinearGradientDefault, { colors: null, locations: null, useAngle: true, angle: null, style: null, children: null });
    const tmp2Result = LinearGradientDefault;
  }
  return tmp9;
};