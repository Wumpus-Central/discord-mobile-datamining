// discord_app/modules/guild_themes/native/GuildThemePreviewArt.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import LinearGradientDefault from "../../../../_runtime/04756_LinearGradient.js";
import GuildThemePreviewOverlayDefault from "GuildThemePreviewOverlay.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
function PreviewOverlay() {
  return <View pointerEvents="none" style={callback().previewOverlay}>{jsx(GuildThemePreviewOverlayDefault, {})}</View>;
}
const createCacheKey = { position: "relative", width: 256, aspectRatio: 1.5705521472392638, overflow: "hidden", borderRadius: ThemesDefault.radii.md, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", top: 7.314, left: 7.461, width: 259.862, height: 154.514 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_themes/native/GuildThemePreviewArt.tsx");

export default function GuildThemePreviewArt(themeSettings) {
  themeSettings = themeSettings.themeSettings;
  const tmp4 = useThemeDefault();
  importDefault = tmp4;
  let items = [themeSettings, tmp4];
  const memo = React.useMemo(() => {
    let tmp3 = null;
    if (null != themeSettings) {
      const customUserThemeSettings = themeSettings.customUserThemeSettings;
      if (null != customUserThemeSettings) {
        const first = customUserThemeSettings.colors[0];
        if (null != first) {
          let obj = { colors: null, angle: null };
          const items = [];
          HermesBuiltin.arraySpread(themeSettings(dependencyMap[5]).getSingleColorGuildThemeGradientColors(first, closure_1), 0);
          obj[0] = items;
          let num2 = customUserThemeSettings.gradientAngle;
          if (num2 == null) {
            num2 = 0;
          }
          obj[1] = num2;
          tmp3 = obj;
          const obj5 = themeSettings(dependencyMap[5]);
        }
      }
      obj = themeSettings(dependencyMap[5]);
      const guildThemePreset = obj.getGuildThemePreset(themeSettings.presetId);
      tmp3 = null;
      if (null != guildThemePreset) {
        const guildThemePresetAppearance = themeSettings(dependencyMap[5]).getGuildThemePresetAppearance(guildThemePreset, closure_1);
        obj = { colors: null, locations: null, angle: null };
        const colors = guildThemePresetAppearance.colors;
        obj[0] = colors.map((item, index) => item.hex);
        const colors1 = guildThemePresetAppearance.colors;
        obj[1] = colors1.map((item, index) => item.stop / 100);
        obj[2] = guildThemePresetAppearance.angle;
        tmp3 = obj;
        const obj2 = themeSettings(dependencyMap[5]);
      }
    }
    return tmp3;
  }, items);
  const items1 = [callback().previewArt, themeSettings.style];
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
    tmp9 = jsx(LinearGradientDefault, { colors: null, locations: null, useAngle: true, angle: null, style: null, children: null });
    const tmp2Result = LinearGradientDefault;
  }
  return tmp9;
};