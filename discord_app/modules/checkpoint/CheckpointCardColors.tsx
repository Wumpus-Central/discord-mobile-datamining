// discord_app/modules/checkpoint/CheckpointCardColors.tsx
import CheckpointCharacterBase from "../../../discord_common/js/shared/shared-constants/CheckpointCharacterBase.tsx";
import _modDef8623 from "../../../discord_assets/assets/checkpoint/2026/recap-card-background-purple.png.js";
import _modDef8624 from "../../../discord_assets/assets/checkpoint/2026/clyde_small_purple.png.js";
import _modDef8625 from "../../../discord_assets/assets/checkpoint/2026/clyde_small_purple_static.png.js";
import _modDef8626 from "../../../discord_assets/assets/checkpoint/2026/recap-card-background-cyan.png.js";
import _modDef8627 from "../../../discord_assets/assets/checkpoint/2026/clyde_small.png.js";
import _modDef8628 from "../../../discord_assets/assets/checkpoint/2026/clyde_small_static.png.js";
import _modDef8629 from "../../../discord_assets/assets/checkpoint/2026/recap-card-background-pink.png.js";
import _modDef8630 from "../../../discord_assets/assets/checkpoint/2026/clyde_small_pink.png.js";
import _modDef8631 from "../../../discord_assets/assets/checkpoint/2026/clyde_small_pink_static.png.js";
import _modDef8632 from "../../../discord_assets/assets/checkpoint/2026/recap-card-background-green.png.js";
import _modDef8633 from "../../../discord_assets/assets/checkpoint/2026/clyde_small_green.png.js";
import _modDef8634 from "../../../discord_assets/assets/checkpoint/2026/clyde_small_green_static.png.js";
import _modDef8635 from "../../../discord_assets/assets/checkpoint/2026/recap-card-background-red.png.js";
import _modDef8636 from "../../../discord_assets/assets/checkpoint/2026/clyde_small_red.png.js";
import _modDef8637 from "../../../discord_assets/assets/checkpoint/2026/clyde_small_red_static.png.js";
import _modDef8638 from "../../../discord_assets/assets/checkpoint/2026/recap-card-background-yellow.png.js";
import _modDef8639 from "../../../discord_assets/assets/checkpoint/2026/clyde_small_yellow.png.js";
import _modDef8640 from "../../../discord_assets/assets/checkpoint/2026/clyde_small_yellow_static.png.js";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  primaryBackgroundColor: "#7D53DE",
  secondaryBackgroundColor: "#BCB1D5",
  tertiaryBackgroundColor: "#CFC3EB",
  shadowColor: "#411D96",
  backgroundGradientStartColor: "#2F156B",
  recapCardBackgroundImage: _modDef8623,
  clydeLogoImage: _modDef8624,
  clydeLogoStaticImage: _modDef8625,
};
const obj2 = {
  primaryBackgroundColor: "#34E2F1",
  secondaryBackgroundColor: "#94CCD1",
  tertiaryBackgroundColor: "#A5E3E9",
  shadowColor: "#0C9BA7",
  backgroundGradientStartColor: "#12606D",
  recapCardBackgroundImage: _modDef8626,
  clydeLogoImage: _modDef8627,
  clydeLogoStaticImage: _modDef8628,
};
const obj3 = {
  primaryBackgroundColor: "#FF4CD2",
  secondaryBackgroundColor: "#D5A9D6",
  tertiaryBackgroundColor: "#E9BBE9",
  shadowColor: "#B20086",
  backgroundGradientStartColor: "#80005F",
  recapCardBackgroundImage: _modDef8629,
  clydeLogoImage: _modDef8630,
  clydeLogoStaticImage: _modDef8631,
};
const obj4 = {
  primaryBackgroundColor: "#35ED7E",
  secondaryBackgroundColor: "#B2C5B1",
  tertiaryBackgroundColor: "#B5DCB3",
  shadowColor: "#0FA44A",
  backgroundGradientStartColor: "#0A7535",
  recapCardBackgroundImage: _modDef8632,
  clydeLogoImage: _modDef8633,
  clydeLogoStaticImage: _modDef8634,
};
const obj5 = {
  primaryBackgroundColor: "#EF3054",
  secondaryBackgroundColor: "#E5A1AE",
  tertiaryBackgroundColor: "#F6AFBC",
  shadowColor: "#A60D2A",
  backgroundGradientStartColor: "#76091E",
  recapCardBackgroundImage: _modDef8635,
  clydeLogoImage: _modDef8636,
  clydeLogoStaticImage: _modDef8637,
};
const obj6 = {
  primaryBackgroundColor: "#FFE047",
  secondaryBackgroundColor: "#E6CBA8",
  tertiaryBackgroundColor: "#FFE0B8",
  shadowColor: "#B29400",
  backgroundGradientStartColor: "#806A00",
  recapCardBackgroundImage: _modDef8638,
  clydeLogoImage: _modDef8639,
  clydeLogoStaticImage: _modDef8640,
};
let closure_1 = {
  [CheckpointCharacterBase.CheckpointCharacterBase.GALACTIC]: obj,
  [CheckpointCharacterBase.CheckpointCharacterBase.IRIDESCENT]: obj,
  [CheckpointCharacterBase.CheckpointCharacterBase.CHROME]: obj,
  [CheckpointCharacterBase.CheckpointCharacterBase.ICY]: obj2,
  [CheckpointCharacterBase.CheckpointCharacterBase.LIQUID]: obj2,
  [CheckpointCharacterBase.CheckpointCharacterBase.GLACIER]: obj2,
  [CheckpointCharacterBase.CheckpointCharacterBase.MIDNIGHT]: obj3,
  [CheckpointCharacterBase.CheckpointCharacterBase.PURPLE]: obj3,
  [CheckpointCharacterBase.CheckpointCharacterBase.COBALT]: obj3,
  [CheckpointCharacterBase.CheckpointCharacterBase.FOREST]: obj4,
  [CheckpointCharacterBase.CheckpointCharacterBase.X_RAY]: obj4,
  [CheckpointCharacterBase.CheckpointCharacterBase.CRIMSON]: obj5,
  [CheckpointCharacterBase.CheckpointCharacterBase.RED]: obj5,
  [CheckpointCharacterBase.CheckpointCharacterBase.BUTTER]: obj6,
  [CheckpointCharacterBase.CheckpointCharacterBase.ORANGE]: obj6,
};
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointCardColors.tsx");

export const getCardColors = function getCardColors(character) {
  let tmp;
  if (null != character) {
    tmp = closure_1[character.base];
  }
  if (tmp == null) {
    tmp = obj2;
  }
  return tmp;
};
