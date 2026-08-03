// === Module 15162: importDefaultResult1 ===

// Module 15162 (importDefaultResult1)
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import importDefaultResult from "n";
import importDefaultResult1 from "n";
import importDefaultResult2 from "n";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
let obj1;
const require = arg1;
({ Image: obj1, View: c3 } = get_ActivityIndicator);
({ jsx: c4, jsxs: c5 } = jsxProd);
const sum = require("Themes").space.PX_12 + require("Themes").space.PX_8 + 96;
const sum1 = sum + 4 + require("Themes").space.PX_16;
const importDefaultResultResult = require("n")(require("Themes").unsafe_rawColors.BRAND_500);
const alphaResult = require("n")(require("Themes").unsafe_rawColors.BRAND_500).alpha(0.5);
const hexResult = require("n")(require("Themes").unsafe_rawColors.BRAND_500).alpha(0.5).hex();
const importDefaultResult1Result = require("n")(require("Themes").unsafe_rawColors.BRAND_500);
const alphaResult1 = require("n")(require("Themes").unsafe_rawColors.BRAND_500).alpha(0.25);
const hexResult1 = require("n")(require("Themes").unsafe_rawColors.BRAND_500).alpha(0.25).hex();
const importDefaultResult2Result = require("n")(require("Themes").unsafe_rawColors.BRAND_500);
const alphaResult2 = require("n")(require("Themes").unsafe_rawColors.BRAND_500).alpha(0.35);
let obj = { container: null, gameCard: null, gameImage: null, addCard: null, addIconWrapper: null };
obj = { flexDirection: "row", alignItems: "flex-start", justifyContent: "center", width: "100%", paddingTop: require("Themes").space.PX_12, paddingBottom: require("Themes").space.PX_16 + 4 };
obj[0] = obj;
const hexResult2 = require("n")(require("Themes").unsafe_rawColors.BRAND_500).alpha(0.35).hex();
let items = [{ rotate: "-6deg" }];
obj[1] = { width: 72, height: 96, borderRadius: require("Themes").radii.xs, overflow: "hidden", flexShrink: 0, transform: items, shadowColor: require("Themes").colors.BLACK, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 4 };
obj[2] = { width: "100%", height: "100%" };
obj1 = { width: 72, height: 96, borderRadius: require("Themes").radii.xs, overflow: "hidden", flexShrink: 0, transform: items, shadowColor: require("Themes").colors.BLACK, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 4 };
const items1 = [{ rotate: "6deg" }];
obj[3] = { width: 72, height: 96, borderRadius: require("Themes").radii.xs, flexShrink: 0, transform: items1, borderWidth: 2, borderStyle: "dashed", borderColor: hexResult, backgroundColor: hexResult1, alignItems: "center", justifyContent: "center", marginStart: -require("Themes").space.PX_8, marginTop: require("Themes").space.PX_8 };
const obj2 = { width: 72, height: 96, borderRadius: require("Themes").radii.xs, flexShrink: 0, transform: items1, borderWidth: 2, borderStyle: "dashed", borderColor: hexResult, backgroundColor: hexResult1, alignItems: "center", justifyContent: "center", marginStart: -require("Themes").space.PX_8, marginTop: require("Themes").space.PX_8 };
obj[4] = { width: 21.599999999999998, height: 21.599999999999998, borderRadius: require("Themes").radii.xs, backgroundColor: hexResult2, alignItems: "center", justifyContent: "center" };
let closure_6 = createCacheKey.createStyles(obj);
const obj3 = { width: 21.599999999999998, height: 21.599999999999998, borderRadius: require("Themes").radii.xs, backgroundColor: hexResult2, alignItems: "center", justifyContent: "center" };
const result = require("jsxProd").fileFinishedImporting("modules/game_claim/native/GameClaimCardStack.tsx");

export default function GameClaimCardStack(uri) {
  const tmp = callback3();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.gameCard, children: callback(closure_2, obj) };
  obj = { style: tmp.gameImage, source: { uri: uri.imageSrc }, resizeMode: "cover" };
  const items = [callback(closure_3, obj), ];
  const obj1 = { style: tmp.addCard, children: null };
  obj1[1] = callback(closure_3, { style: tmp.addIconWrapper, children: callback(require(8915) /* PlusSmallIcon */.PlusSmallIcon, { size: "sm", color: "text-brand" }) });
  items[1] = callback(closure_3, obj1);
  obj[1] = items;
  return callback2(closure_3, obj);
};
export const CARD_STACK_HEIGHT = sum1;