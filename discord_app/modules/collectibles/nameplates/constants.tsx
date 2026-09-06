// discord_app/modules/collectibles/nameplates/constants.tsx
import types from "types.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = {};
obj = { darkBackground: "#900007", lightBackground: "#E7040F", name: types.PaletteKeys.Crimson };
obj[types.PaletteKeys.Crimson] = obj;
obj = { darkBackground: "#893A99", lightBackground: "#B11FCF", name: types.PaletteKeys.Berry };
obj[types.PaletteKeys.Berry] = obj;
obj[types.PaletteKeys.Sky] = { darkBackground: "#0080B7", lightBackground: "#56CCFF", name: types.PaletteKeys.Sky };
const obj1 = { darkBackground: "#0080B7", lightBackground: "#56CCFF", name: types.PaletteKeys.Sky };
obj[types.PaletteKeys.Teal] = { darkBackground: "#086460", lightBackground: "#7DEED7", name: types.PaletteKeys.Teal };
const obj2 = { darkBackground: "#086460", lightBackground: "#7DEED7", name: types.PaletteKeys.Teal };
obj[types.PaletteKeys.Forest] = {
  darkBackground: "#2D5401",
  lightBackground: "#6AA624",
  name: types.PaletteKeys.Forest,
};
const obj3 = { darkBackground: "#2D5401", lightBackground: "#6AA624", name: types.PaletteKeys.Forest };
obj[types.PaletteKeys.BubbleGum] = {
  darkBackground: "#DC3E97",
  lightBackground: "#F957B3",
  name: types.PaletteKeys.BubbleGum,
};
const obj4 = { darkBackground: "#DC3E97", lightBackground: "#F957B3", name: types.PaletteKeys.BubbleGum };
obj[types.PaletteKeys.Violet] = {
  darkBackground: "#730BC8",
  lightBackground: "#972FED",
  name: types.PaletteKeys.Violet,
};
const obj5 = { darkBackground: "#730BC8", lightBackground: "#972FED", name: types.PaletteKeys.Violet };
obj[types.PaletteKeys.Cobalt] = {
  darkBackground: "#0131C2",
  lightBackground: "#4278FF",
  name: types.PaletteKeys.Cobalt,
};
const obj6 = { darkBackground: "#0131C2", lightBackground: "#4278FF", name: types.PaletteKeys.Cobalt };
obj[types.PaletteKeys.Clover] = {
  darkBackground: "#047B20",
  lightBackground: "#63CD5A",
  name: types.PaletteKeys.Clover,
};
const obj7 = { darkBackground: "#047B20", lightBackground: "#63CD5A", name: types.PaletteKeys.Clover };
obj[types.PaletteKeys.Lemon] = { darkBackground: "#F6CD12", lightBackground: "#FED400", name: types.PaletteKeys.Lemon };
const obj8 = { darkBackground: "#F6CD12", lightBackground: "#FED400", name: types.PaletteKeys.Lemon };
obj[types.PaletteKeys.White] = { darkBackground: "#FFFFFF", lightBackground: "#FFFFFF", name: types.PaletteKeys.White };
const obj9 = { darkBackground: "#FFFFFF", lightBackground: "#FFFFFF", name: types.PaletteKeys.White };
obj[types.PaletteKeys.Black] = { darkBackground: "#000000", lightBackground: "#000000", name: types.PaletteKeys.Black };
const values = Object.values(obj);
const result = size.fileFinishedImporting("modules/collectibles/nameplates/constants.tsx");

export const NAMEPLATE_PALETTES = obj;
export const INVALID_PALETTE_KEY = "invalid_palette";
export const CUSTOM_PALETTE_KEY = "custom_palette";
export const INVALID_NAMEPLATE_PALETTE = { name: "invalid_palette", darkBackground: "", lightBackground: "" };
export const PaletteMetadata = values;
