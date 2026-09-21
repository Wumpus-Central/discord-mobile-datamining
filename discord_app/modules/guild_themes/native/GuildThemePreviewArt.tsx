// === Module 16503: GuildThemePreviewArt ===

// Module 16503 (GuildThemePreviewArt)
import nativeDefault from "native" /* 576 */;
import GuildThemePresets from "GuildThemePresets" /* 4610 */;
import useThemeDefault from "useTheme" /* 4690 */;
import LinearGradientDefault from "LinearGradient" /* 5198 */;
import GuildThemePreviewOverlayDefault from "GuildThemePreviewOverlay" /* 16504 */;
import noop from "module_19" /* 19 */;

require = fn;
function PreviewOverlay() {
  return <View pointerEvents="none" style={closure_6().previewOverlay}>{jsx(GuildThemePreviewOverlayDefault, {})}</View>;
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let obj2 = { previewArt: { position: "relative", width: 256, aspectRatio: 1.5705521472392638, overflow: "hidden", borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, previewOverlay: { position: "absolute", top: 7.314, left: 7.461, width: 259.862, height: 154.514 } };
let closure_6 = createStyles.createStyles(obj2);
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
          const obj3 = { colors: null, angle: null };
          const items = [];
          HermesBuiltin.arraySpread(GuildThemePresets.getSingleColorGuildThemeGradientColors(first, closure_1), 0);
          obj3.colors = items;
          let num2 = customUserThemeSettings.gradientAngle;
          if (num2 == null) {
            num2 = 0;
          }
          obj3.angle = num2;
          tmp3 = obj3;
        }
      }
      const guildThemePreset = GuildThemePresets.getGuildThemePreset(themeSettings.presetId);
      tmp3 = null;
      if (null != guildThemePreset) {
        const guildThemePresetAppearance = GuildThemePresets.getGuildThemePresetAppearance(guildThemePreset, closure_1);
        const obj4 = { colors: null, locations: null, angle: null };
        const colors = guildThemePresetAppearance.colors;
        obj4.colors = colors.map((hex) => hex.hex);
        const colors1 = guildThemePresetAppearance.colors;
        obj4.locations = colors1.map((stop) => stop.stop / 100);
        obj4.angle = guildThemePresetAppearance.angle;
        tmp3 = obj4;
      }
    }
    return tmp3;
  }, items);
  const items1 = [closure_6().previewArt, themeSettings.style];
  if (null == memo) {
    let obj2 = { style: items1, children: <PreviewOverlay /> };
    let tmp9 = <View style={items1}><PreviewOverlay /></View>;
  } else {
    let obj = { colors: null, locations: null, useAngle: true, angle: null, style: null, children: null };
    ({ colors: obj.colors, locations: obj.locations, angle: obj.angle } = memo);
    obj.style = items1;
    obj.children = <PreviewOverlay />;
    tmp9 = jsx(LinearGradientDefault, { colors: null, locations: null, useAngle: true, angle: null, style: null, children: null });
    const tmp2Result = LinearGradientDefault;
  }
  return tmp9;
};