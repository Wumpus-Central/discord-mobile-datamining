// discord_app/modules/collectibles/nameplates/constants.tsx
import set from "set" /* 2 */;
import PaletteKeys from "PaletteKeys" /* 1951 */;

let obj = {};
obj = { darkBackground: "#900007", lightBackground: "#E7040F", name: PaletteKeys.PaletteKeys.Crimson };
obj[PaletteKeys.PaletteKeys.Crimson] = obj;
obj = { darkBackground: "#893A99", lightBackground: "#B11FCF", name: PaletteKeys.PaletteKeys.Berry };
obj[PaletteKeys.PaletteKeys.Berry] = obj;
obj[PaletteKeys.PaletteKeys.Sky] = { darkBackground: "#0080B7", lightBackground: "#56CCFF", name: PaletteKeys.PaletteKeys.Sky };
const obj1 = { darkBackground: "#0080B7", lightBackground: "#56CCFF", name: PaletteKeys.PaletteKeys.Sky };
obj[PaletteKeys.PaletteKeys.Teal] = { darkBackground: "#086460", lightBackground: "#7DEED7", name: PaletteKeys.PaletteKeys.Teal };
const obj2 = { darkBackground: "#086460", lightBackground: "#7DEED7", name: PaletteKeys.PaletteKeys.Teal };
obj[PaletteKeys.PaletteKeys.Forest] = { darkBackground: "#2D5401", lightBackground: "#6AA624", name: PaletteKeys.PaletteKeys.Forest };
const obj3 = { darkBackground: "#2D5401", lightBackground: "#6AA624", name: PaletteKeys.PaletteKeys.Forest };
obj[PaletteKeys.PaletteKeys.BubbleGum] = { darkBackground: "#DC3E97", lightBackground: "#F957B3", name: PaletteKeys.PaletteKeys.BubbleGum };
const obj4 = { darkBackground: "#DC3E97", lightBackground: "#F957B3", name: PaletteKeys.PaletteKeys.BubbleGum };
obj[PaletteKeys.PaletteKeys.Violet] = { darkBackground: "#730BC8", lightBackground: "#972FED", name: PaletteKeys.PaletteKeys.Violet };
const obj5 = { darkBackground: "#730BC8", lightBackground: "#972FED", name: PaletteKeys.PaletteKeys.Violet };
obj[PaletteKeys.PaletteKeys.Cobalt] = { darkBackground: "#0131C2", lightBackground: "#4278FF", name: PaletteKeys.PaletteKeys.Cobalt };
const obj6 = { darkBackground: "#0131C2", lightBackground: "#4278FF", name: PaletteKeys.PaletteKeys.Cobalt };
obj[PaletteKeys.PaletteKeys.Clover] = { darkBackground: "#047B20", lightBackground: "#63CD5A", name: PaletteKeys.PaletteKeys.Clover };
const obj7 = { darkBackground: "#047B20", lightBackground: "#63CD5A", name: PaletteKeys.PaletteKeys.Clover };
obj[PaletteKeys.PaletteKeys.Lemon] = { darkBackground: "#F6CD12", lightBackground: "#FED400", name: PaletteKeys.PaletteKeys.Lemon };
const obj8 = { darkBackground: "#F6CD12", lightBackground: "#FED400", name: PaletteKeys.PaletteKeys.Lemon };
obj[PaletteKeys.PaletteKeys.White] = { darkBackground: "#FFFFFF", lightBackground: "#FFFFFF", name: PaletteKeys.PaletteKeys.White };
const obj9 = { darkBackground: "#FFFFFF", lightBackground: "#FFFFFF", name: PaletteKeys.PaletteKeys.White };
obj[PaletteKeys.PaletteKeys.Black] = { darkBackground: "#000000", lightBackground: "#000000", name: PaletteKeys.PaletteKeys.Black };
const values = Object.values(obj);
const obj10 = { darkBackground: "#000000", lightBackground: "#000000", name: PaletteKeys.PaletteKeys.Black };
const result = set.fileFinishedImporting("modules/collectibles/nameplates/constants.tsx");

export const NAMEPLATE_PALETTES = obj;
export const INVALID_PALETTE_KEY = "invalid_palette";
export const CUSTOM_PALETTE_KEY = "custom_palette";
export const INVALID_NAMEPLATE_PALETTE = { name: "invalid_palette", darkBackground: "", lightBackground: "" };
export const PaletteMetadata = values;