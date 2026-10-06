// === Module 16155: GameClaimCardStack ===

// Module 16155 (GameClaimCardStack)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlusSmallIcon from "PlusSmallIcon" /* 8562 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import module_683_mod from "module_683" /* 683 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let imageSrc;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let items;
let items1;
let obj2;
let size;
let size1;
let size2;
({ Image: c2, View: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const sum = nativeDefault.space.PX_12 + nativeDefault.space.PX_8 + 96;
const sum1 = sum + 4 + nativeDefault.space.PX_16;
let module_683 = module_683_mod;
const importDefaultResultResult = module_683(nativeDefault.unsafe_rawColors.BRAND_500);
const alphaResult = importDefaultResultResult.alpha(0.5);
const hexResult = alphaResult.hex();
module_683 = module_683_mod;
const importDefaultResult1Result = module_683(nativeDefault.unsafe_rawColors.BRAND_500);
const alphaResult1 = importDefaultResult1Result.alpha(0.25);
const hexResult1 = alphaResult1.hex();
module_683 = module_683_mod;
const importDefaultResult2Result = module_683(nativeDefault.unsafe_rawColors.BRAND_500);
const alphaResult2 = importDefaultResult2Result.alpha(0.35);
const hexResult2 = alphaResult2.hex();
let createStyles = createStyles_mod;
let obj = { container: obj2, gameCard: size, gameImage: { width: "100%", height: "100%" }, addCard: size1, addIconWrapper: size2 };
obj2 = { flexDirection: "row", alignItems: "flex-start", justifyContent: "center", width: "100%", paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16 + 4 };
createStyles = createStyles.createStyles;
size = { width: 72, height: 96, borderRadius: nativeDefault.radii.xs, overflow: "hidden", flexShrink: 0, transform: items, shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 4 };
items = [{ rotate: "-6deg" }];
size1 = { width: 72, height: 96, borderRadius: nativeDefault.radii.xs, flexShrink: 0, transform: items1, borderWidth: 2, borderStyle: "dashed", borderColor: hexResult, backgroundColor: hexResult1, alignItems: "center", justifyContent: "center", marginStart: -nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8 };
items1 = [{ rotate: "6deg" }];
size2 = { width: 21.599999999999998, height: 21.599999999999998, borderRadius: nativeDefault.radii.xs, backgroundColor: hexResult2, alignItems: "center", justifyContent: "center" };
let closure_6 = createStyles(obj);
const tmp14 = ReactCompilerGating.isReactCompilerEnabled() ? ((imageSrc) => {
  let items;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(18);
  imageSrc = imageSrc.imageSrc;
  const tmp4 = closure_6();
  if (cResult[0] !== imageSrc) {
    const obj2 = { uri: imageSrc };
    cResult[0] = imageSrc;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.gameImage) {
    let tmp6;
    if (cResult[3] === tmp5) {
      tmp6 = cResult[4];
    }
    if (cResult[5] === tmp4.gameCard) {
      let tmp8;
      let tmp13;
      let tmp16;
      if (cResult[6] === tmp6) {
        tmp8 = cResult[7];
      }
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp15 = React3(PlusSmallIcon.PlusSmallIcon, { size: "sm", color: "text-brand" });
        cResult[8] = tmp15;
        tmp13 = tmp15;
      } else {
        tmp13 = cResult[8];
      }
      if (cResult[9] !== tmp4.addIconWrapper) {
        const obj3 = { style: tmp4.addIconWrapper, children: tmp13 };
        const tmp19 = React3(_false, obj3);
        cResult[9] = tmp4.addIconWrapper;
        cResult[10] = tmp19;
        tmp16 = tmp19;
      } else {
        tmp16 = cResult[10];
      }
      if (cResult[11] === tmp4.addCard) {
        let tmp20;
        if (cResult[12] === tmp16) {
          tmp20 = cResult[13];
        }
        if (cResult[14] === tmp4.container) {
          if (cResult[15] === tmp8) {
            let tmp24;
            if (cResult[16] === tmp20) {
              tmp24 = cResult[17];
            }
            return tmp24;
          }
        }
        const obj4 = { style: tmp4.container, children: items };
        items = [tmp8, tmp20];
        const tmp27 = hasOwnProperty(_false, obj4);
        cResult[14] = tmp4.container;
        cResult[15] = tmp8;
        cResult[16] = tmp20;
        cResult[17] = tmp27;
        tmp24 = tmp27;
      }
      const obj5 = { style: tmp4.addCard, children: tmp16 };
      const tmp23 = React3(_false, obj5);
      cResult[11] = tmp4.addCard;
      cResult[12] = tmp16;
      cResult[13] = tmp23;
      tmp20 = tmp23;
    }
    const obj6 = { style: tmp4.gameCard, children: tmp6 };
    const tmp11 = React3(_false, obj6);
    cResult[5] = tmp4.gameCard;
    cResult[6] = tmp6;
    cResult[7] = tmp11;
    tmp8 = tmp11;
  }
  const obj7 = { style: tmp4.gameImage, source: tmp5, resizeMode: "cover" };
  const tmp7 = React3(React2, obj7);
  cResult[2] = tmp4.gameImage;
  cResult[3] = tmp5;
  cResult[4] = tmp7;
  tmp6 = tmp7;
}) : ((imageSrc) => {
  let items;
  let obj3;
  let obj5;
  imageSrc = imageSrc.imageSrc;
  const tmp = closure_6();
  const obj = { style: tmp.container, children: items };
  const obj2 = { style: tmp.gameCard, children: React3(React2, obj3) };
  obj3 = { style: tmp.gameImage, source: { uri: imageSrc }, resizeMode: "cover" };
  items = [React3(_false, obj2), ];
  const obj4 = { style: tmp.addCard, children: React3(_false, obj5) };
  obj5 = { style: tmp.addIconWrapper, children: React3(PlusSmallIcon.PlusSmallIcon, { size: "sm", color: "text-brand" }) };
  items[1] = React3(_false, obj4);
  return hasOwnProperty(_false, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/game_claim/native/GameClaimCardStack.tsx");

export default tmp14;
export const CARD_STACK_HEIGHT = sum1;