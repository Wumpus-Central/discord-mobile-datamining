// === Module 16191: GameClaimCardStack ===

// Module 16191 (GameClaimCardStack)
import nativeDefault from "native" /* 576 */;
import PlusSmallIcon from "PlusSmallIcon" /* 8867 */;
import noop from "module_19" /* 19 */;
import n from "module_672" /* 672 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c2, View: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const sum = nativeDefault.space.PX_12 + nativeDefault.space.PX_8 + 96;
const sum1 = sum + 4 + nativeDefault.space.PX_16;
const importDefaultResultResult = n(nativeDefault.unsafe_rawColors.BRAND_500);
const alphaResult = n(nativeDefault.unsafe_rawColors.BRAND_500).alpha(0.5);
const hexResult = n(nativeDefault.unsafe_rawColors.BRAND_500).alpha(0.5).hex();
const importDefaultResult1Result = n(nativeDefault.unsafe_rawColors.BRAND_500);
const alphaResult1 = n(nativeDefault.unsafe_rawColors.BRAND_500).alpha(0.25);
const hexResult1 = n(nativeDefault.unsafe_rawColors.BRAND_500).alpha(0.25).hex();
const importDefaultResult2Result = n(nativeDefault.unsafe_rawColors.BRAND_500);
const alphaResult2 = n(nativeDefault.unsafe_rawColors.BRAND_500).alpha(0.35);
const createStyles = fn(4560);
let obj = { container: null, gameCard: null, gameImage: null, addCard: null, addIconWrapper: null };
obj = { flexDirection: "row", alignItems: "flex-start", justifyContent: "center", width: "100%", paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16 + 4 };
obj.container = obj;
let size = { width: 72, height: 96, borderRadius: nativeDefault.radii.xs, overflow: "hidden", flexShrink: 0, transform: null, shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 4 };
let items = [{ rotate: "-6deg" }];
size.transform = items;
obj.gameCard = size;
obj.gameImage = { width: "100%", height: "100%" };
const size1 = { width: 72, height: 96, borderRadius: nativeDefault.radii.xs, flexShrink: 0, transform: null, borderWidth: 2, borderStyle: "dashed", borderColor: hexResult, backgroundColor: hexResult1, alignItems: "center", justifyContent: "center", marginStart: -nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8 };
const items1 = [{ rotate: "6deg" }];
size1.transform = items1;
obj.addCard = size1;
const size2 = { width: 21.599999999999998, height: 21.599999999999998, borderRadius: nativeDefault.radii.xs, backgroundColor: n(nativeDefault.unsafe_rawColors.BRAND_500).alpha(0.35).hex(), alignItems: "center", justifyContent: "center" };
obj.addIconWrapper = size2;
let closure_6 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/game_claim/native/GameClaimCardStack.tsx");

export default function GameClaimCardStack(uri) {
  const tmp = closure_6();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.gameCard, children: null };
  obj = { style: tmp.gameImage, source: { uri: uri.imageSrc }, resizeMode: "cover" };
  obj.children = React4(React2, obj);
  const items = [React4(React3, obj), ];
  const obj1 = { style: tmp.addCard, children: React4(React3, { style: tmp.addIconWrapper, children: React4(PlusSmallIcon.PlusSmallIcon, { size: "sm", color: "text-brand" }) }) };
  items[1] = React4(React3, obj1);
  obj.children = items;
  return hasOwnProperty(React3, obj);
};
export const CARD_STACK_HEIGHT = sum1;