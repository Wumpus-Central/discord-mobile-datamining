// === Module 1950: NAMEPLATE_PALETTES ===

// Module 1950 (NAMEPLATE_PALETTES)
import obj132 from "obj132" /* 2 */;
import PaletteKeys from "PaletteKeys" /* 1951 */;

let obj = { darkBackground: "#900007", lightBackground: "#E7040F", name: PaletteKeys.PaletteKeys.Crimson };
obj[PaletteKeys.PaletteKeys.Crimson] = obj;
obj = { darkBackground: "#893A99", lightBackground: "#B11FCF", name: PaletteKeys.PaletteKeys.Berry };
obj[PaletteKeys.PaletteKeys.Berry] = obj;
obj[PaletteKeys.PaletteKeys.Sky] = { darkBackground: "#0080B7", lightBackground: "#56CCFF", name: PaletteKeys.PaletteKeys.Sky };
obj[PaletteKeys.PaletteKeys.Teal] = { darkBackground: "#086460", lightBackground: "#7DEED7", name: PaletteKeys.PaletteKeys.Teal };
obj[PaletteKeys.PaletteKeys.Forest] = { darkBackground: "#2D5401", lightBackground: "#6AA624", name: PaletteKeys.PaletteKeys.Forest };
obj[PaletteKeys.PaletteKeys.BubbleGum] = { darkBackground: "#DC3E97", lightBackground: "#F957B3", name: PaletteKeys.PaletteKeys.BubbleGum };
obj[PaletteKeys.PaletteKeys.Violet] = { darkBackground: "#730BC8", lightBackground: "#972FED", name: PaletteKeys.PaletteKeys.Violet };
obj[PaletteKeys.PaletteKeys.Cobalt] = { darkBackground: "#0131C2", lightBackground: "#4278FF", name: PaletteKeys.PaletteKeys.Cobalt };
obj[PaletteKeys.PaletteKeys.Clover] = { darkBackground: "#047B20", lightBackground: "#63CD5A", name: PaletteKeys.PaletteKeys.Clover };
obj[PaletteKeys.PaletteKeys.Lemon] = { darkBackground: "#F6CD12", lightBackground: "#FED400", name: PaletteKeys.PaletteKeys.Lemon };
obj[PaletteKeys.PaletteKeys.White] = { darkBackground: "#FFFFFF", lightBackground: "#FFFFFF", name: PaletteKeys.PaletteKeys.White };
obj[PaletteKeys.PaletteKeys.Black] = { darkBackground: "#000000", lightBackground: "#000000", name: PaletteKeys.PaletteKeys.Black };
const values = Object.values(obj);
const result = obj132.fileFinishedImporting("modules/collectibles/nameplates/constants.tsx");

export const NAMEPLATE_PALETTES = obj;
export const INVALID_PALETTE_KEY = "invalid_palette";
export const CUSTOM_PALETTE_KEY = "custom_palette";
export const INVALID_NAMEPLATE_PALETTE = { name: "invalid_palette", darkBackground: "", lightBackground: "" };
export const PaletteMetadata = values;