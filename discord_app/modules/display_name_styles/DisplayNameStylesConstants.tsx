// discord_app/modules/display_name_styles/DisplayNameStylesConstants.tsx
import set from "../../../_runtime/00002_set.js";
import DisplayNameEffect from "../../../discord_common/js/shared/shared-constants/DisplayNameEffect.tsx";
import DisplayNameFont from "../../../discord_common/js/shared/shared-constants/DisplayNameFont.tsx";

let items = [DisplayNameEffect.DisplayNameEffect.SOLID, DisplayNameEffect.DisplayNameEffect.GRADIENT, DisplayNameEffect.DisplayNameEffect.NEON, DisplayNameEffect.DisplayNameEffect.TOON, DisplayNameEffect.DisplayNameEffect.POP];
const items1 = [DisplayNameFont.DisplayNameFont.PLAYPEN_SANS, DisplayNameFont.DisplayNameFont.ORBITRON, DisplayNameFont.DisplayNameFont.NEW_ROCKER, DisplayNameFont.DisplayNameFont.KALAM];
const items2 = [DisplayNameEffect.DisplayNameEffect.GUMMY, DisplayNameEffect.DisplayNameEffect.PRISM];
const items3 = [1628845, 2417517, 1874155, 12790527, 16521573, 13018645, 695675, 1027403, 747943, 11080677, 14287177, 16332578];
const items4 = [[2797222, 16762000], [2535780, 9497343], [14966527, 2522592], [9452762, 2939534], [15709354, 14970082], [14631474, 12423167], [16095292, 15031015], [14963742, 6674404]];
const mapped = items4.map((colors) => ({ colors, name: "" }));
const items5 = [[15313365, 11132400, 12167150, 12184267], [16740290, 16076712, 16751574, 14248631], [16758138, 16749423, 16743544, 15756170], [12905829, 10018400, 7130467, 4570214], [8173823, 9363664, 10327285, 6737904], [14121983, 11889663, 14965989, 9137407]];
const items6 = [[16683586, 3534206, 16769095, 16731346, 5793266], [16727357, 16747050, 16766023, 16732067, 8086015], [7997702, 13114898, 16013848, 16749824, 16766023], [8316888, 8178687, 8359167, 11890175, 15960792], [3528287, 1497266, 2147829, 2850047, 7032319], [11004065, 14282892, 16769162, 16762024, 15972057]];
const result = set.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesConstants.tsx");

export const EFFECT_ORDER = items;
export const FLYWHEEL_FONTS = items1;
export const FLYWHEEL_EFFECTS = items2;
export const DISPLAY_NAME_STYLES_COLOR_PRESETS = items3;
export const DISPLAY_NAME_STYLES_GRADIENT_PRESETS = mapped;
export const DISPLAY_NAME_STYLES_GUMMY_PRESETS = items5;
export const DISPLAY_NAME_STYLES_GUMMY_HUE_SATURATION = 0.78;
export const DISPLAY_NAME_STYLES_GUMMY_HUE_LIGHTNESS = 0.72;
export const MIN_PRISM_GRADIENT_WIDTH = 38;
export const DISPLAY_NAME_STYLES_PRISM_PRESETS = items6;
export const getColorPresetsForEffect = function getColorPresetsForEffect(arg0) {
  if (DisplayNameEffect.DisplayNameEffect.GUMMY === arg0) {
    return items5;
  } else if (tmp(1940).DisplayNameEffect.PRISM === arg0) {
    return items6;
  } else {
    if (tmp(1940).DisplayNameEffect.GRADIENT !== arg0) {
      if (tmp(1940).DisplayNameEffect.GLOW !== arg0) {
        return items3.map((arg0) => {
          const items = [arg0];
          return items;
        });
      }
    }
    return mapped.map((colors) => colors.colors);
  }
};