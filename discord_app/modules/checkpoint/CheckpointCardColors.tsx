// discord_app/modules/checkpoint/CheckpointCardColors.tsx
import CheckpointCardColorPalette from "../../../discord_common/js/shared/shared-constants/CheckpointCardColorPalette.tsx";
import _modDef6297 from "../../../discord_assets/assets/checkpoint/2026/recap-card-background-purple.png.js";
import _modDef6298 from "../../../discord_assets/assets/checkpoint/2026/clyde_small_purple.png.js";
import _modDef6299 from "../../../discord_assets/assets/checkpoint/2026/clyde_small_purple_static.png.js";
import _modDef6300 from "../../../discord_assets/assets/checkpoint/2026/recap-card-background-cyan.png.js";
import _modDef6301 from "../../../discord_assets/assets/checkpoint/2026/clyde_small.png.js";
import _modDef6302 from "../../../discord_assets/assets/checkpoint/2026/clyde_small_static.png.js";
import _modDef6303 from "../../../discord_assets/assets/checkpoint/2026/recap-card-background-pink.png.js";
import _modDef6304 from "../../../discord_assets/assets/checkpoint/2026/clyde_small_pink.png.js";
import _modDef6305 from "../../../discord_assets/assets/checkpoint/2026/clyde_small_pink_static.png.js";
import _modDef6306 from "../../../discord_assets/assets/checkpoint/2026/recap-card-background-green.png.js";
import _modDef6307 from "../../../discord_assets/assets/checkpoint/2026/clyde_small_green.png.js";
import _modDef6308 from "../../../discord_assets/assets/checkpoint/2026/clyde_small_green_static.png.js";
import _modDef6309 from "../../../discord_assets/assets/checkpoint/2026/recap-card-background-red.png.js";
import _modDef6310 from "../../../discord_assets/assets/checkpoint/2026/clyde_small_red.png.js";
import _modDef6311 from "../../../discord_assets/assets/checkpoint/2026/clyde_small_red_static.png.js";
import _modDef6312 from "../../../discord_assets/assets/checkpoint/2026/recap-card-background-yellow.png.js";
import _modDef6313 from "../../../discord_assets/assets/checkpoint/2026/clyde_small_yellow.png.js";
import _modDef6314 from "../../../discord_assets/assets/checkpoint/2026/clyde_small_yellow_static.png.js";
import CheckpointTraitConfig from "../../../discord_common/js/shared/shared-constants/CheckpointTraitConfig.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj2 = {
  primaryBackgroundColor: "#34E2F1",
  secondaryBackgroundColor: "#94CCD1",
  tertiaryBackgroundColor: "#A5E3E9",
  shadowColor: "#0C9BA7",
  backgroundGradientStartColor: "#12606D",
  recapCardBackgroundImage: _modDef6300,
  clydeLogoImage: _modDef6301,
  clydeLogoStaticImage: _modDef6302,
};
const obj = {
  primaryBackgroundColor: "#7D53DE",
  secondaryBackgroundColor: "#BCB1D5",
  tertiaryBackgroundColor: "#CFC3EB",
  shadowColor: "#411D96",
  backgroundGradientStartColor: "#2F156B",
  recapCardBackgroundImage: _modDef6297,
  clydeLogoImage: _modDef6298,
  clydeLogoStaticImage: _modDef6299,
};
const obj3 = {
  primaryBackgroundColor: "#FF4CD2",
  secondaryBackgroundColor: "#D5A9D6",
  tertiaryBackgroundColor: "#E9BBE9",
  shadowColor: "#B20086",
  backgroundGradientStartColor: "#80005F",
  recapCardBackgroundImage: _modDef6303,
  clydeLogoImage: _modDef6304,
  clydeLogoStaticImage: _modDef6305,
};
const obj4 = {
  primaryBackgroundColor: "#35ED7E",
  secondaryBackgroundColor: "#B2C5B1",
  tertiaryBackgroundColor: "#B5DCB3",
  shadowColor: "#0FA44A",
  backgroundGradientStartColor: "#0A7535",
  recapCardBackgroundImage: _modDef6306,
  clydeLogoImage: _modDef6307,
  clydeLogoStaticImage: _modDef6308,
};
const obj5 = {
  primaryBackgroundColor: "#EF3054",
  secondaryBackgroundColor: "#E5A1AE",
  tertiaryBackgroundColor: "#F6AFBC",
  shadowColor: "#A60D2A",
  backgroundGradientStartColor: "#76091E",
  recapCardBackgroundImage: _modDef6309,
  clydeLogoImage: _modDef6310,
  clydeLogoStaticImage: _modDef6311,
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
    recapCardBackgroundImage: _modDef6312,
    clydeLogoImage: _modDef6313,
    clydeLogoStaticImage: _modDef6314,
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
