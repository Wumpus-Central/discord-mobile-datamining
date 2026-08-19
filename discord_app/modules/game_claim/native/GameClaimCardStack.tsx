// discord_app/modules/game_claim/native/GameClaimCardStack.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import PlusSmallIcon from "../../../design/components/Icon/native/redesign/generated/PlusSmallIcon.tsx";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import importDefaultResult from "../../../../_runtime/00689_n.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = fn;
noopAll;
({ Image: obj1, View: c3 } = get_ActivityIndicator);
({ jsx: c4, jsxs: c5 } = jsxProd);
const sum = ThemesDefault.space.PX_12 + ThemesDefault.space.PX_8 + 96;
const sum1 = sum + 4 + ThemesDefault.space.PX_16;
const importDefaultResultResult = importDefaultResult(ThemesDefault.unsafe_rawColors.BRAND_500);
const alphaResult = importDefaultResult(ThemesDefault.unsafe_rawColors.BRAND_500).alpha(0.5);
const hexResult = importDefaultResult(ThemesDefault.unsafe_rawColors.BRAND_500).alpha(0.5).hex();
const importDefaultResult1 = importDefaultResult;
const importDefaultResult1Result = importDefaultResult(ThemesDefault.unsafe_rawColors.BRAND_500);
const alphaResult1 = importDefaultResult(ThemesDefault.unsafe_rawColors.BRAND_500).alpha(0.25);
const hexResult1 = importDefaultResult(ThemesDefault.unsafe_rawColors.BRAND_500).alpha(0.25).hex();
const importDefaultResult2 = importDefaultResult;
const importDefaultResult2Result = importDefaultResult(ThemesDefault.unsafe_rawColors.BRAND_500);
const alphaResult2 = importDefaultResult(ThemesDefault.unsafe_rawColors.BRAND_500).alpha(0.35);
let obj = { flexDirection: "row", alignItems: "flex-start", justifyContent: "center", width: "100%", paddingTop: ThemesDefault.space.PX_12, paddingBottom: ThemesDefault.space.PX_16 + 4 };
obj[0] = obj;
const hexResult2 = importDefaultResult(ThemesDefault.unsafe_rawColors.BRAND_500).alpha(0.35).hex();
let items = [{ rotate: "-6deg" }];
obj[1] = { width: 72, height: 96, borderRadius: ThemesDefault.radii.xs, overflow: "hidden", flexShrink: 0, transform: items, shadowColor: ThemesDefault.colors.BLACK, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 4 };
obj[2] = { width: "100%", height: "100%" };
const items1 = [{ rotate: "6deg" }];
obj[3] = { width: 72, height: 96, borderRadius: ThemesDefault.radii.xs, flexShrink: 0, transform: items1, borderWidth: 2, borderStyle: "dashed", borderColor: hexResult, backgroundColor: hexResult1, alignItems: "center", justifyContent: "center", marginStart: -ThemesDefault.space.PX_8, marginTop: ThemesDefault.space.PX_8 };
obj[4] = { width: 21.599999999999998, height: 21.599999999999998, borderRadius: ThemesDefault.radii.xs, backgroundColor: hexResult2, alignItems: "center", justifyContent: "center" };
let closure_6 = createCacheKey.createStyles(obj);
const result = require("obj132").fileFinishedImporting("modules/game_claim/native/GameClaimCardStack.tsx");

export default function GameClaimCardStack(uri) {
  const tmp = callback3();
  let obj = { style: tmp.container, children: null };
  { style: tmp.gameCard, children: callback(closure_2, obj) };
  obj = { style: tmp.gameImage, source: { uri: uri.imageSrc }, resizeMode: "cover" };
  const items = [callback(closure_3, obj), ];
  obj1 = { style: tmp.addCard, children: callback(closure_3, { style: tmp.addIconWrapper, children: callback(PlusSmallIcon.PlusSmallIcon, { size: "sm", color: "text-brand" }) }) };
  items[1] = callback(closure_3, obj1);
  obj[1] = items;
  return callback2(closure_3, obj);
};
export const CARD_STACK_HEIGHT = sum1;