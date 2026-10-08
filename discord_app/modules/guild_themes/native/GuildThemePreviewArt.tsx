// === Module 16387: GuildThemePreviewArt ===

// Module 16387 (GuildThemePreviewArt)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useThemeDefault from "useTheme" /* 4991 */;
import LinearGradientDefault from "LinearGradient" /* 5387 */;
import GuildThemePreviewOverlayDefault from "GuildThemePreviewOverlay" /* 16388 */;
import noop from "module_19" /* 19 */;

const GuildThemePresets = obj(4933);
require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj2 = { previewArt: { position: "relative", width: 256, aspectRatio: 1.5705521472392638, overflow: "hidden", borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, previewOverlay: { position: "absolute", top: 7.314, left: 7.461, width: 259.862, height: 154.514 } };
let closure_6 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function PreviewOverlay() {
  const cResult = c.c(3);
  const tmp3 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = jsx(GuildThemePreviewOverlayDefault, {});
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp3.previewOverlay) {
    const obj2 = { pointerEvents: "none", style: tmp3.previewOverlay, children: first };
    const tmp11 = <View pointerEvents="none" style={tmp3.previewOverlay}>{first}</View>;
    cResult[1] = tmp3.previewOverlay;
    cResult[2] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : (function PreviewOverlay() {
  return <View pointerEvents="none" style={closure_6().previewOverlay}>{jsx(GuildThemePreviewOverlayDefault, {})}</View>;
});
ReactCompilerGating = fn(558);
let obj3 = { position: "relative", width: 256, aspectRatio: 1.5705521472392638, overflow: "hidden", borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_themes/native/GuildThemePreviewArt.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildThemePreviewArt(arg0) {
  let obj = require;
  const cResult = c.c(15);
  ({ themeSettings, style } = arg0);
  const tmp3 = closure_6();
  const tmp5 = useThemeDefault();
  if (cResult[0] === tmp5) {
    if (cResult[1] === themeSettings) {
      if (cResult[3] === style) {
        if (cResult[4] === tmp3.previewArt) {
          let tmp13 = cResult[5];
        }
        if (null == tmp6) {
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp26 = <closure_7 />;
            cResult[6] = tmp26;
            let tmp23 = tmp26;
          } else {
            tmp23 = cResult[6];
          }
          if (cResult[7] !== tmp13) {
            const obj3 = { style: tmp13, children: tmp23 };
            const tmp30 = <View style={tmp13}>{tmp23}</View>;
            cResult[7] = tmp13;
            cResult[8] = tmp30;
          }
        } else {
          const _Symbol2 = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp18 = <closure_7 />;
            cResult[9] = tmp18;
            let tmp15 = tmp18;
          } else {
            tmp15 = cResult[9];
          }
          if (cResult[10] === tmp6.angle) {
            if (cResult[11] === tmp6.colors) {
              if (cResult[12] === tmp6.locations) {
                if (cResult[13] === tmp13) {
                  let tmp19 = cResult[14];
                }
                return tmp19;
              }
            }
          }
          const obj4 = { colors: null, locations: null, useAngle: true, angle: null, style: null, children: null };
          ({ colors: obj7.colors, locations: obj7.locations, angle: obj7.angle } = tmp6);
          obj4.style = tmp13;
          obj4.children = tmp15;
          const tmp21 = jsx(LinearGradientDefault, { colors: null, locations: null, useAngle: true, angle: null, style: null, children: null });
          cResult[10] = tmp6.angle;
          cResult[11] = tmp6.colors;
          cResult[12] = tmp6.locations;
          cResult[13] = tmp13;
          cResult[14] = tmp21;
          tmp19 = tmp21;
        }
      }
      const items = [tmp3.previewArt, style];
      cResult[3] = style;
      cResult[4] = tmp3.previewArt;
      cResult[5] = items;
      tmp13 = items;
    }
  }
  let tmp7 = null;
  if (null != themeSettings) {
    let num = themeSettings.customUserThemeSettings;
    if (null == num) {
      const guildThemePreset = GuildThemePresets.getGuildThemePreset(themeSettings.presetId);
      tmp7 = null;
      if (null != guildThemePreset) {
        const guildThemePresetAppearance = GuildThemePresets.getGuildThemePresetAppearance(guildThemePreset, tmp5);
        const obj5 = { colors: null, locations: null, angle: null };
        const colors = guildThemePresetAppearance.colors;
        obj5.colors = colors.map((hex) => hex.hex);
        const colors1 = guildThemePresetAppearance.colors;
        obj5.locations = colors1.map((stop) => stop.stop / 100);
        obj5.angle = guildThemePresetAppearance.angle;
        tmp7 = obj5;
        const objResult2 = GuildThemePresets;
      }
      const objResult = GuildThemePresets;
    }
    const obj6 = { colors: null, angle: null };
    obj = GuildThemePresets;
    const items1 = [];
    HermesBuiltin.arraySpread(obj.getSingleColorGuildThemeGradientColors(tmp8, tmp5), 0);
    obj6.colors = items1;
    num = num.gradientAngle;
    if (num == null) {
      num = 0;
    }
    obj6.angle = num;
    tmp7 = obj6;
  }
  cResult[0] = tmp5;
  cResult[1] = themeSettings;
  cResult[2] = tmp7;
}) : (function GuildThemePreviewArt(themeSettings) {
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
          const obj2 = { colors: null, angle: null };
          const items = [];
          HermesBuiltin.arraySpread(GuildThemePresets.getSingleColorGuildThemeGradientColors(first, closure_1), 0);
          obj2.colors = items;
          let num2 = customUserThemeSettings.gradientAngle;
          if (num2 == null) {
            num2 = 0;
          }
          obj2.angle = num2;
          tmp3 = obj2;
        }
      }
      const guildThemePreset = GuildThemePresets.getGuildThemePreset(themeSettings.presetId);
      tmp3 = null;
      if (null != guildThemePreset) {
        const guildThemePresetAppearance = GuildThemePresets.getGuildThemePresetAppearance(guildThemePreset, closure_1);
        const obj3 = { colors: null, locations: null, angle: null };
        const colors = guildThemePresetAppearance.colors;
        obj3.colors = colors.map((hex) => hex.hex);
        const colors1 = guildThemePresetAppearance.colors;
        obj3.locations = colors1.map((stop) => stop.stop / 100);
        obj3.angle = guildThemePresetAppearance.angle;
        tmp3 = obj3;
        const tmp5Result = GuildThemePresets;
      }
    }
    return tmp3;
  }, items);
  const items1 = [closure_6().previewArt, themeSettings.style];
  if (null == memo) {
    let obj2 = { style: items1, children: <closure_7 /> };
    let tmp9 = <View style={items1}><closure_7 /></View>;
  } else {
    let obj = { colors: null, locations: null, useAngle: true, angle: null, style: null, children: null };
    ({ colors: obj.colors, locations: obj.locations, angle: obj.angle } = memo);
    obj.style = items1;
    obj.children = <closure_7 />;
    tmp9 = jsx(LinearGradientDefault, { colors: null, locations: null, useAngle: true, angle: null, style: null, children: null });
    const tmp2Result = LinearGradientDefault;
  }
  return tmp9;
});