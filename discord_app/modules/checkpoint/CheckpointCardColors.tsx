// discord_app/modules/checkpoint/CheckpointCardColors.tsx
import CheckpointCharacterBase from "../../../discord_common/js/shared/shared-constants/CheckpointCharacterBase.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  primaryBackgroundColor: "#7D53DE",
  secondaryBackgroundColor: "#BCB1D5",
  tertiaryBackgroundColor: "#CFC3EB",
  shadowColor: "#411D96",
  backgroundGradientStartColor: "#2F156B",
};
const obj2 = {
  primaryBackgroundColor: "#34E2F1",
  secondaryBackgroundColor: "#94CCD1",
  tertiaryBackgroundColor: "#A5E3E9",
  shadowColor: "#0C9BA7",
  backgroundGradientStartColor: "#12606D",
};
const obj3 = {
  primaryBackgroundColor: "#FF4CD2",
  secondaryBackgroundColor: "#D5A9D6",
  tertiaryBackgroundColor: "#E9BBE9",
  shadowColor: "#B20086",
  backgroundGradientStartColor: "#80005F",
};
const obj4 = {
  primaryBackgroundColor: "#35ED7E",
  secondaryBackgroundColor: "#B2C5B1",
  tertiaryBackgroundColor: "#B5DCB3",
  shadowColor: "#0FA44A",
  backgroundGradientStartColor: "#0A7535",
};
const obj5 = {
  primaryBackgroundColor: "#EF3054",
  secondaryBackgroundColor: "#E5A1AE",
  tertiaryBackgroundColor: "#F6AFBC",
  shadowColor: "#A60D2A",
  backgroundGradientStartColor: "#76091E",
};
const obj6 = {
  primaryBackgroundColor: "#FFE047",
  secondaryBackgroundColor: "#E6CBA8",
  tertiaryBackgroundColor: "#FFE0B8",
  shadowColor: "#B29400",
  backgroundGradientStartColor: "#806A00",
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
