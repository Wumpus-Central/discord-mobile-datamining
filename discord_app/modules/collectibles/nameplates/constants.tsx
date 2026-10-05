// === Module 1981: nameplates/constants ===

// Module 1981 (nameplates/constants)
import types from "types" /* 1982 */;
import size from "module_2" /* 2 */;

const obj = {};
const obj2 = { darkBackground: "#900007", lightBackground: "#E7040F", name: types.PaletteKeys.Crimson };
const Crimson = types.PaletteKeys.Crimson;
obj[Crimson] = obj2;
const obj3 = { darkBackground: "#893A99", lightBackground: "#B11FCF", name: types.PaletteKeys.Berry };
const Berry = types.PaletteKeys.Berry;
obj[Berry] = obj3;
const obj4 = { darkBackground: "#0080B7", lightBackground: "#56CCFF", name: types.PaletteKeys.Sky };
const Sky = types.PaletteKeys.Sky;
obj[Sky] = obj4;
const obj5 = { darkBackground: "#086460", lightBackground: "#7DEED7", name: types.PaletteKeys.Teal };
const Teal = types.PaletteKeys.Teal;
obj[Teal] = obj5;
const obj6 = { darkBackground: "#2D5401", lightBackground: "#6AA624", name: types.PaletteKeys.Forest };
const Forest = types.PaletteKeys.Forest;
obj[Forest] = obj6;
const obj7 = { darkBackground: "#DC3E97", lightBackground: "#F957B3", name: types.PaletteKeys.BubbleGum };
const BubbleGum = types.PaletteKeys.BubbleGum;
obj[BubbleGum] = obj7;
const obj8 = { darkBackground: "#730BC8", lightBackground: "#972FED", name: types.PaletteKeys.Violet };
const Violet = types.PaletteKeys.Violet;
obj[Violet] = obj8;
const obj9 = { darkBackground: "#0131C2", lightBackground: "#4278FF", name: types.PaletteKeys.Cobalt };
const Cobalt = types.PaletteKeys.Cobalt;
obj[Cobalt] = obj9;
const obj10 = { darkBackground: "#047B20", lightBackground: "#63CD5A", name: types.PaletteKeys.Clover };
const Clover = types.PaletteKeys.Clover;
obj[Clover] = obj10;
const obj11 = { darkBackground: "#F6CD12", lightBackground: "#FED400", name: types.PaletteKeys.Lemon };
const Lemon = types.PaletteKeys.Lemon;
obj[Lemon] = obj11;
const obj12 = { darkBackground: "#FFFFFF", lightBackground: "#FFFFFF", name: types.PaletteKeys.White };
const White = types.PaletteKeys.White;
obj[White] = obj12;
const obj13 = { darkBackground: "#000000", lightBackground: "#000000", name: types.PaletteKeys.Black };
const Black = types.PaletteKeys.Black;
obj[Black] = obj13;
const values = Object.values(obj);
const result = size.fileFinishedImporting("modules/collectibles/nameplates/constants.tsx");

export const NAMEPLATE_PALETTES = obj;
export const INVALID_PALETTE_KEY = "invalid_palette";
export const CUSTOM_PALETTE_KEY = "custom_palette";
export const INVALID_NAMEPLATE_PALETTE = { name: "invalid_palette", darkBackground: "", lightBackground: "" };
export const PaletteMetadata = values;