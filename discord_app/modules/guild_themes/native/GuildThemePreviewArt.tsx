// discord_app/modules/guild_themes/native/GuildThemePreviewArt.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { LinearGradient } from "../../../../_runtime/04676_LinearGradient.js";
import { useTheme } from "../../../hooks/useTheme.tsx";
import { GuildThemePreviewOverlay } from "GuildThemePreviewOverlay.tsx";

const require = arg1;
function PreviewOverlay() {
  return <View pointerEvents="none" style={createCacheKey().previewOverlay}>{jsx(GuildThemePreviewOverlay, {})}</View>;
}
createCacheKey = { previewArt: null, previewOverlay: null };
createCacheKey = { position: "relative", width: 256, aspectRatio: 1.5705521472392638, overflow: "hidden", borderRadius: require("Themes").radii.md, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", top: 7.314, left: 7.461, width: 259.862, height: 154.514 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/guild_themes/native/GuildThemePreviewArt.tsx");

export default function GuildThemePreviewArt(themeSettings) {
  themeSettings = themeSettings.themeSettings;
  let importDefault;
  const tmp4 = useTheme();
  importDefault = tmp4;
  let items = [themeSettings, tmp4];
  const memo = React.useMemo(() => {
    let tmp3 = null;
    if (null != themeSettings) {
      const customUserThemeSettings = tmp.customUserThemeSettings;
      if (null != customUserThemeSettings) {
        const first = customUserThemeSettings.colors[0];
        if (null != first) {
          let obj = { colors: null, angle: null };
          const items = [];
          HermesBuiltin.arraySpread(themeSettings(outer1_2[5]).getSingleColorGuildThemeGradientColors(first, tmp2), 0);
          obj[0] = items;
          let num2 = customUserThemeSettings.gradientAngle;
          if (num2 == null) {
            num2 = 0;
          }
          obj[1] = num2;
          tmp3 = obj;
          const obj5 = themeSettings(outer1_2[5]);
        }
      }
      obj = themeSettings(outer1_2[5]);
      const guildThemePreset = obj.getGuildThemePreset(tmp.presetId);
      tmp3 = null;
      if (null != guildThemePreset) {
        const guildThemePresetAppearance = themeSettings(outer1_2[5]).getGuildThemePresetAppearance(guildThemePreset, tmp2);
        obj = { colors: null, locations: null, angle: null };
        const colors = guildThemePresetAppearance.colors;
        obj[0] = colors.map((hex) => hex.hex);
        const colors1 = guildThemePresetAppearance.colors;
        obj[1] = colors1.map((stop) => stop.stop / 100);
        obj[2] = guildThemePresetAppearance.angle;
        tmp3 = obj;
        const obj2 = themeSettings(outer1_2[5]);
      }
    }
    return tmp3;
  }, items);
  const items1 = [createCacheKey().previewArt, themeSettings.style];
  if (null == memo) {
    let obj = { style: null, children: null };
    obj[0] = items1;
    obj[1] = <PreviewOverlay />;
    let tmp9 = <View style={null}>{null}</View>;
  } else {
    obj = { colors: null, locations: null, useAngle: true, angle: null, style: null, children: null };
    ({ colors: obj[0], locations: obj[1], angle: obj[3] } = memo);
    obj[4] = items1;
    obj[5] = <PreviewOverlay />;
    tmp9 = jsx(LinearGradient, { colors: null, locations: null, useAngle: true, angle: null, style: null, children: null });
    const tmp2Result = LinearGradient;
  }
  return tmp9;
};