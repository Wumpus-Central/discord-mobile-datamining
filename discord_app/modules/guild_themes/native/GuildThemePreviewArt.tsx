// === Module 16127: GuildThemePreviewArt ===

// Module 16127 (GuildThemePreviewArt)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import GuildThemePresets from "GuildThemePresets" /* 4739 */;
import useThemeDefault from "useTheme" /* 4797 */;
import LinearGradientDefault from "LinearGradient" /* 5612 */;
import GuildThemePreviewOverlayDefault from "GuildThemePreviewOverlay" /* 16128 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

let obj2;
const f123114 = (hex) => hex.hex;
const f123115 = (stop) => stop.stop / 100;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { previewArt: obj2, previewOverlay: { position: "absolute", top: 7.314, left: 7.461, width: 259.862, height: 154.514 } };
obj2 = { position: "relative", width: 256, aspectRatio: 1.5705521472392638, overflow: "hidden", borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_6 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(3);
  const tmp3 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = jsx(GuildThemePreviewOverlayDefault, {});
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp3.previewOverlay) {
    const tmp11 = <View pointerEvents="none" style={tmp3.previewOverlay}>{first}</View>;
    cResult[1] = tmp3.previewOverlay;
    cResult[2] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : (() => <View pointerEvents="none" style={closure_6().previewOverlay}>{jsx(GuildThemePreviewOverlayDefault, {})}</View>);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let colors;
  let colors1;
  let items1;
  let num2;
  let style;
  let themeSettings;
  const obj = react2;
  const cResult = obj.c(15);
  ({ themeSettings, style } = arg0);
  const tmp5 = closure_6();
  const tmp7 = useThemeDefault();
  if (cResult[0] === tmp7) {
    let tmp8;
    if (cResult[1] === themeSettings) {
      tmp8 = cResult[2];
    }
    if (cResult[3] === style) {
      let tmp15;
      let tmp21;
      if (cResult[4] === tmp5.previewArt) {
        tmp15 = cResult[5];
      }
      if (null == tmp8) {
        let tmp25;
        let tmp29;
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp28 = <closure_7 />;
          cResult[6] = tmp28;
          tmp25 = tmp28;
        } else {
          tmp25 = cResult[6];
        }
        if (cResult[7] !== tmp15) {
          const tmp32 = <View style={tmp15}>{tmp25}</View>;
          cResult[7] = tmp15;
          cResult[8] = tmp32;
          tmp29 = tmp32;
        } else {
          tmp29 = cResult[8];
        }
        tmp21 = tmp29;
      } else {
        let tmp17;
        const _Symbol2 = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp20 = <closure_7 />;
          cResult[9] = tmp20;
          tmp17 = tmp20;
        } else {
          tmp17 = cResult[9];
        }
        if (cResult[10] === tmp8.angle) {
          if (cResult[11] === tmp8.colors) {
            if (cResult[12] === tmp8.locations) {
              if (cResult[13] === tmp15) {
                tmp21 = cResult[14];
              }
            }
          }
        }
        ({ colors: obj7.colors, locations: obj7.locations, angle: obj7.angle } = tmp8);
        const tmp23 = jsx(LinearGradientDefault, { colors: null, locations: null, useAngle: true, angle: null, style: tmp15, children: tmp17 });
        cResult[10] = tmp8.angle;
        cResult[11] = tmp8.colors;
        cResult[12] = tmp8.locations;
        cResult[13] = tmp15;
        cResult[14] = tmp23;
        tmp21 = tmp23;
      }
      return tmp21;
    }
    const items = [tmp5.previewArt, style];
    cResult[3] = style;
    cResult[4] = tmp5.previewArt;
    cResult[5] = items;
    tmp15 = items;
  }
  let tmp9 = null;
  if (null != themeSettings) {
    const customUserThemeSettings = themeSettings.customUserThemeSettings;
    if (null != customUserThemeSettings) {
      const first = customUserThemeSettings.colors[0];
      if (null != first) {
        const obj4 = { colors: items1, angle: num2 };
        items1 = [];
        const tmp2Result = GuildThemePresets;
        HermesBuiltin.arraySpread(items1, tmp2Result.getSingleColorGuildThemeGradientColors(first, tmp7), 0);
        num2 = customUserThemeSettings.gradientAngle;
        if (num2 == null) {
          num2 = 0;
        }
        tmp9 = obj4;
      }
    }
    const tmp2Result3 = GuildThemePresets;
    const guildThemePreset = tmp2Result3.getGuildThemePreset(themeSettings.presetId);
    tmp9 = null;
    if (null != guildThemePreset) {
      const tmp2Result4 = GuildThemePresets;
      const guildThemePresetAppearance = tmp2Result4.getGuildThemePresetAppearance(guildThemePreset, tmp7);
      const obj5 = { colors: colors.map(f123114), locations: colors1.map(f123115), angle: guildThemePresetAppearance.angle };
      colors = guildThemePresetAppearance.colors;
      colors1 = guildThemePresetAppearance.colors;
      tmp9 = obj5;
    }
  }
  cResult[0] = tmp7;
  cResult[1] = themeSettings;
  cResult[2] = tmp9;
  tmp8 = tmp9;
}) : ((themeSettings) => {
  let closure_1;
  let tmp9;
  themeSettings = themeSettings.themeSettings;
  importDefault = undefined;
  const style = themeSettings.style;
  const tmp = closure_6();
  let tmp4 = useThemeDefault();
  importDefault = tmp4;
  let items = [themeSettings, tmp4];
  const memo = react.useMemo(() => {
    let colors;
    let colors1;
    let items;
    let num2;
    let tmp4 = null;
    if (null != themeSettings) {
      const customUserThemeSettings = themeSettings.customUserThemeSettings;
      if (null != customUserThemeSettings) {
        const first = customUserThemeSettings.colors[0];
        if (null != first) {
          const obj2 = { colors: items, angle: num2 };
          items = [];
          const obj5 = GuildThemePresets;
          HermesBuiltin.arraySpread(items, obj5.getSingleColorGuildThemeGradientColors(first, closure_1), 0);
          num2 = customUserThemeSettings.gradientAngle;
          if (num2 == null) {
            num2 = 0;
          }
          tmp4 = obj2;
        }
      }
      const obj = GuildThemePresets;
      const guildThemePreset = obj.getGuildThemePreset(themeSettings.presetId);
      tmp4 = null;
      if (null != guildThemePreset) {
        const tmp6Result = GuildThemePresets;
        const guildThemePresetAppearance = tmp6Result.getGuildThemePresetAppearance(guildThemePreset, closure_1);
        const obj3 = { colors: colors.map(f123114), locations: colors1.map(f123115), angle: guildThemePresetAppearance.angle };
        colors = guildThemePresetAppearance.colors;
        colors1 = guildThemePresetAppearance.colors;
        tmp4 = obj3;
      }
    }
    return tmp4;
  }, items);
  const items1 = [tmp.previewArt, style];
  if (null == memo) {
    tmp9 = <View style={items1}><closure_7 /></View>;
  } else {
    let obj = { colors: null, locations: null, useAngle: true, angle: null, style: items1, children: null };
    ({ colors: obj.colors, locations: obj.locations, angle: obj.angle } = memo);
    LinearGradientDefault;
    tmp9 = <tmp2Result colors={null} locations={null} useAngle angle={null} style={items1}>{null}</tmp2Result>;
  }
  return tmp9;
});
const result = size.fileFinishedImporting("modules/guild_themes/native/GuildThemePreviewArt.tsx");

export default tmp2;