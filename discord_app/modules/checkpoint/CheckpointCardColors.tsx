// discord_app/modules/checkpoint/CheckpointCardColors.tsx
import CheckpointCardColorPalette from "../../../discord_common/js/shared/shared-constants/CheckpointCardColorPalette.tsx";
import _modDef5902 from "../../../discord_assets/assets/checkpoint/2026/recap-card-background-purple.png.js";
import _modDef5903 from "../../../discord_assets/assets/checkpoint/2026/clyde_small_purple.png.js";
import _modDef5904 from "../../../discord_assets/assets/checkpoint/2026/clyde_small_purple_static.png.js";
import _modDef5905 from "../../../discord_assets/assets/checkpoint/2026/recap-card-background-cyan.png.js";
import _modDef5906 from "../../../discord_assets/assets/checkpoint/2026/clyde_small.png.js";
import _modDef5907 from "../../../discord_assets/assets/checkpoint/2026/clyde_small_static.png.js";
import _modDef5908 from "../../../discord_assets/assets/checkpoint/2026/recap-card-background-pink.png.js";
import _modDef5909 from "../../../discord_assets/assets/checkpoint/2026/clyde_small_pink.png.js";
import _modDef5910 from "../../../discord_assets/assets/checkpoint/2026/clyde_small_pink_static.png.js";
import _modDef5911 from "../../../discord_assets/assets/checkpoint/2026/recap-card-background-green.png.js";
import _modDef5912 from "../../../discord_assets/assets/checkpoint/2026/clyde_small_green.png.js";
import _modDef5913 from "../../../discord_assets/assets/checkpoint/2026/clyde_small_green_static.png.js";
import _modDef5914 from "../../../discord_assets/assets/checkpoint/2026/recap-card-background-red.png.js";
import _modDef5915 from "../../../discord_assets/assets/checkpoint/2026/clyde_small_red.png.js";
import _modDef5916 from "../../../discord_assets/assets/checkpoint/2026/clyde_small_red_static.png.js";
import _modDef5917 from "../../../discord_assets/assets/checkpoint/2026/recap-card-background-yellow.png.js";
import _modDef5918 from "../../../discord_assets/assets/checkpoint/2026/clyde_small_yellow.png.js";
import _modDef5919 from "../../../discord_assets/assets/checkpoint/2026/clyde_small_yellow_static.png.js";
import CheckpointTraitConfig from "../../../discord_common/js/shared/shared-constants/CheckpointTraitConfig.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj2 = {
  primaryBackgroundColor: "#34E2F1",
  secondaryBackgroundColor: "#94CCD1",
  tertiaryBackgroundColor: "#A5E3E9",
  shadowColor: "#0C9BA7",
  backgroundGradientStartColor: "#12606D",
  recapCardBackgroundImage: _modDef5905,
  clydeLogoImage: _modDef5906,
  clydeLogoStaticImage: _modDef5907,
};
const obj = {
  primaryBackgroundColor: "#7D53DE",
  secondaryBackgroundColor: "#BCB1D5",
  tertiaryBackgroundColor: "#CFC3EB",
  shadowColor: "#411D96",
  backgroundGradientStartColor: "#2F156B",
  recapCardBackgroundImage: _modDef5902,
  clydeLogoImage: _modDef5903,
  clydeLogoStaticImage: _modDef5904,
};
const obj3 = {
  primaryBackgroundColor: "#FF4CD2",
  secondaryBackgroundColor: "#D5A9D6",
  tertiaryBackgroundColor: "#E9BBE9",
  shadowColor: "#B20086",
  backgroundGradientStartColor: "#80005F",
  recapCardBackgroundImage: _modDef5908,
  clydeLogoImage: _modDef5909,
  clydeLogoStaticImage: _modDef5910,
};
const obj4 = {
  primaryBackgroundColor: "#35ED7E",
  secondaryBackgroundColor: "#B2C5B1",
  tertiaryBackgroundColor: "#B5DCB3",
  shadowColor: "#0FA44A",
  backgroundGradientStartColor: "#0A7535",
  recapCardBackgroundImage: _modDef5911,
  clydeLogoImage: _modDef5912,
  clydeLogoStaticImage: _modDef5913,
};
const obj5 = {
  primaryBackgroundColor: "#EF3054",
  secondaryBackgroundColor: "#E5A1AE",
  tertiaryBackgroundColor: "#F6AFBC",
  shadowColor: "#A60D2A",
  backgroundGradientStartColor: "#76091E",
  recapCardBackgroundImage: _modDef5914,
  clydeLogoImage: _modDef5915,
  clydeLogoStaticImage: _modDef5916,
};
let closure_3 = {
  [CheckpointCardColorPalette.CheckpointCardColorPalette.NONE]: obj2,
  [CheckpointCardColorPalette.CheckpointCardColorPalette.CYAN]: obj2,
  [CheckpointCardColorPalette.CheckpointCardColorPalette.PURPLE]: obj,
  [CheckpointCardColorPalette.CheckpointCardColorPalette.PINK]: obj3,
  [CheckpointCardColorPalette.CheckpointCardColorPalette.GREEN]: obj4,
  [CheckpointCardColorPalette.CheckpointCardColorPalette.RED]: obj5,
  [CheckpointCardColorPalette.CheckpointCardColorPalette.YELLOW]: {
    primaryBackgroundColor: "#FFE047",
    secondaryBackgroundColor: "#E6CBA8",
    tertiaryBackgroundColor: "#FFE0B8",
    shadowColor: "#B29400",
    backgroundGradientStartColor: "#806A00",
    recapCardBackgroundImage: _modDef5917,
    clydeLogoImage: _modDef5918,
    clydeLogoStaticImage: _modDef5919,
  },
};
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointCardColors.tsx");

export function getCharacterCardColorPalette(stateFromStores) {
  if (null == stateFromStores) {
    let NONE = CheckpointCardColorPalette.CheckpointCardColorPalette.NONE;
  } else {
    NONE = CheckpointTraitConfig.CHECKPOINT_BASE_TO_CARD_COLOR_PALETTE[stateFromStores.base];
    if (NONE == null) {
      NONE = CheckpointCardColorPalette.CheckpointCardColorPalette.NONE;
    }
  }
  return NONE;
}
export function getCardColors(characterCardColorPalette) {
  let tmp = closure_3[characterCardColorPalette];
  if (tmp == null) {
    tmp = obj2;
  }
  return tmp;
}
