// === Module 16155: GameClaimCardStack ===

// Module 16155 (GameClaimCardStack)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlusSmallIcon from "PlusSmallIcon" /* 8562 */;
import noop from "module_19" /* 19 */;
import n_mod from "module_683" /* 683 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c2, View: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const sum = nativeDefault.space.PX_12 + nativeDefault.space.PX_8 + 96;
const sum1 = sum + 4 + nativeDefault.space.PX_16;
let n = n_mod;
const importDefaultResultResult = n(nativeDefault.unsafe_rawColors.BRAND_500);
const alphaResult = n(nativeDefault.unsafe_rawColors.BRAND_500).alpha(0.5);
let n = n_mod;
const hexResult = n(nativeDefault.unsafe_rawColors.BRAND_500).alpha(0.5).hex();
const importDefaultResult1Result = n(nativeDefault.unsafe_rawColors.BRAND_500);
const alphaResult1 = n(nativeDefault.unsafe_rawColors.BRAND_500).alpha(0.25);
let n = n_mod;
const hexResult1 = n(nativeDefault.unsafe_rawColors.BRAND_500).alpha(0.25).hex();
const importDefaultResult2Result = n(nativeDefault.unsafe_rawColors.BRAND_500);
const alphaResult2 = n(nativeDefault.unsafe_rawColors.BRAND_500).alpha(0.35);
const createStyles = fn(4896);
let obj = { container: null, gameCard: null, gameImage: null, addCard: null, addIconWrapper: null };
const hexResult2 = n(nativeDefault.unsafe_rawColors.BRAND_500).alpha(0.35).hex();
obj.container = { flexDirection: "row", alignItems: "flex-start", justifyContent: "center", width: "100%", paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16 + 4 };
let size = { width: 72, height: 96, borderRadius: nativeDefault.radii.xs, overflow: "hidden", flexShrink: 0, transform: null, shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 4 };
let items = [{ rotate: "-6deg" }];
size.transform = items;
obj.gameCard = size;
obj.gameImage = { width: "100%", height: "100%" };
const size1 = { width: 72, height: 96, borderRadius: nativeDefault.radii.xs, flexShrink: 0, transform: null, borderWidth: 2, borderStyle: "dashed", borderColor: hexResult, backgroundColor: hexResult1, alignItems: "center", justifyContent: "center", marginStart: -nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8 };
const items1 = [{ rotate: "6deg" }];
size1.transform = items1;
obj.addCard = size1;
const size2 = { width: 21.599999999999998, height: 21.599999999999998, borderRadius: nativeDefault.radii.xs, backgroundColor: hexResult2, alignItems: "center", justifyContent: "center" };
obj.addIconWrapper = size2;
let closure_6 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj2 = { flexDirection: "row", alignItems: "flex-start", justifyContent: "center", width: "100%", paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16 + 4 };
size = fn(2);
const result = size.fileFinishedImporting("modules/game_claim/native/GameClaimCardStack.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((imageSrc) => {
  const cResult = c.c(18);
  imageSrc = imageSrc.imageSrc;
  const tmp4 = closure_6();
  if (cResult[0] !== imageSrc) {
    const obj2 = { uri: imageSrc };
    cResult[0] = imageSrc;
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.gameImage) {
    if (cResult[3] === tmp5) {
      let tmp6 = cResult[4];
    }
    if (cResult[5] === tmp4.gameCard) {
      if (cResult[6] === tmp6) {
        let tmp8 = cResult[7];
      }
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp15 = React4(PlusSmallIcon.PlusSmallIcon, { size: "sm", color: "text-brand" });
        cResult[8] = tmp15;
        let tmp13 = tmp15;
      } else {
        tmp13 = cResult[8];
      }
      if (cResult[9] !== tmp4.addIconWrapper) {
        const obj3 = { style: tmp4.addIconWrapper, children: tmp13 };
        const tmp19 = React4(React3, obj3);
        cResult[9] = tmp4.addIconWrapper;
        cResult[10] = tmp19;
        let tmp16 = tmp19;
      } else {
        tmp16 = cResult[10];
      }
      if (cResult[11] === tmp4.addCard) {
        if (cResult[12] === tmp16) {
          let tmp20 = cResult[13];
        }
        if (cResult[14] === tmp4.container) {
          if (cResult[15] === tmp8) {
            if (cResult[16] === tmp20) {
              let tmp24 = cResult[17];
            }
            return tmp24;
          }
        }
        const obj4 = { style: tmp4.container, children: null };
        const items = [tmp8, tmp20];
        obj4.children = items;
        const tmp27 = hasOwnProperty(React3, obj4);
        cResult[14] = tmp4.container;
        cResult[15] = tmp8;
        cResult[16] = tmp20;
        cResult[17] = tmp27;
        tmp24 = tmp27;
      }
      const obj5 = { style: tmp4.addCard, children: tmp16 };
      const tmp23 = React4(React3, obj5);
      cResult[11] = tmp4.addCard;
      cResult[12] = tmp16;
      cResult[13] = tmp23;
      tmp20 = tmp23;
    }
    const obj6 = { style: tmp4.gameCard, children: tmp6 };
    const tmp11 = React4(React3, obj6);
    cResult[5] = tmp4.gameCard;
    cResult[6] = tmp6;
    cResult[7] = tmp11;
    tmp8 = tmp11;
  }
  const tmp7 = React4(React2, { style: tmp4.gameImage, source: tmp5, resizeMode: "cover" });
  cResult[2] = tmp4.gameImage;
  cResult[3] = tmp5;
  cResult[4] = tmp7;
  tmp6 = tmp7;
  const obj7 = { style: tmp4.gameImage, source: tmp5, resizeMode: "cover" };
}) : ((uri) => {
  const tmp = closure_6();
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.gameCard, children: React4(React2, { style: tmp.gameImage, source: { uri: uri.imageSrc }, resizeMode: "cover" }) };
  const items = [React4(React3, obj2), ];
  const obj4 = { style: tmp.addCard, children: React4(React3, { style: tmp.addIconWrapper, children: React4(PlusSmallIcon.PlusSmallIcon, { size: "sm", color: "text-brand" }) }) };
  items[1] = React4(React3, obj4);
  obj.children = items;
  return hasOwnProperty(React3, obj);
});
export const CARD_STACK_HEIGHT = sum1;