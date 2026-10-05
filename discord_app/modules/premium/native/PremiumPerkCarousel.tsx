// === Module 13260: PremiumPerkCarousel ===

// Module 13260 (PremiumPerkCarousel)
import react_native from "react-native" /* 17 */;
import PremiumPerkCard from "PremiumPerkCard" /* 13204 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const PremiumPerkCardDefault = PremiumPerkCard;
let importDefault;

let metroImportDefault;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ title: { marginLeft: 24 }, indicators: { marginBottom: -36 }, carousel: { marginTop: 16 }, carouselCard: { marginLeft: 8 }, lastCarouselCard: { marginRight: 8 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_1;
  let closure_3;
  let currentIndex;
  let items;
  let length;
  let onItemChange;
  let perks;
  let style;
  let title;
  let tmp2 = currentIndex;
  let obj = onItemChange(currentIndex[6]);
  const cResult = obj.c(34);
  ({ title, perks, style, onItemChange } = arg0);
  const tmp4 = closure_8();
  importDefault = tmp4;
  const obj2 = onItemChange(currentIndex[7]);
  const perkCardHeight = obj2.usePerkCardHeight(onItemChange(currentIndex[7]).PerkCardVariant.NARROW);
  [currentIndex, _slicedToArray] = length.useState(0);
  if (cResult[0] === currentIndex) {
    let tmp8;
    if (cResult[1] === onItemChange) {
      tmp8 = cResult[2];
    }
    const width = onItemChange(tmp2[7]).PERK_CARD_SIZES[onItemChange(undefined, tmp2[7]).PerkCardVariant.NARROW].width;
    length = perks.length;
    if (cResult[3] === tmp4.title) {
      let tmp9;
      let tmp13;
      if (cResult[4] === title) {
        tmp9 = cResult[5];
      }
      const sum = perkCardHeight + 8;
      if (cResult[6] !== sum) {
        const obj3 = { height: sum };
        cResult[6] = sum;
        cResult[7] = obj3;
        tmp13 = obj3;
      } else {
        tmp13 = cResult[7];
      }
      if (cResult[8] === tmp4.carousel) {
        let tmp14;
        let tmp17;
        if (cResult[9] === tmp13) {
          tmp14 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { overScrollMode: "always", snapToInterval: width + 8 + 0.2, snapToStart: true, snapToAlignment: "start", decelerationRate: "normal" };
          cResult[11] = obj4;
        }
        if (cResult[12] === length) {
          if (cResult[13] === perks) {
            if (cResult[14] === tmp4.carouselCard) {
              if (cResult[15] === tmp4.lastCarouselCard) {
                tmp17 = cResult[16];
              }
              if (cResult[21] === tmp8) {
                if (cResult[22] === tmp14) {
                  let tmp20;
                  if (cResult[23] === tmp17) {
                    tmp20 = cResult[24];
                  }
                  if (cResult[25] === currentIndex) {
                    if (cResult[26] === perks.length) {
                      let tmp24;
                      if (cResult[27] === tmp4.indicators) {
                        tmp24 = cResult[28];
                      }
                      if (cResult[29] === style) {
                        if (cResult[30] === tmp9) {
                          if (cResult[31] === tmp20) {
                            let tmp27;
                            if (cResult[32] === tmp24) {
                              tmp27 = cResult[33];
                            }
                            return tmp27;
                          }
                        }
                      }
                      const obj5 = { style, children: items };
                      items = [tmp9, , ];
                      class W {
                        constructor(arg0, arg1) {
                          items = [, ];
                          items[0] = closure_1.carouselCard;
                          lastCarouselCard = null;
                          if (length - 1 === arg1) {
                            lastCarouselCard = closure_1.lastCarouselCard;
                          }
                          items[1] = lastCarouselCard;
                          obj = {};
                          tmp2 = closure_1(closure_2[7]);
                          merged = Object.assign(arg0);
                          obj.variant = closure_0(closure_2[7]).PerkCardVariant.NARROW;
                          obj.style = items;
                          return jsx(tmp2, obj, arg1);
                        }
                      }
                      items[2] = tmp24;
                      const tmp30 = closure_7(View, obj5);
                      cResult[29] = style;
                      cResult[30] = tmp9;
                      cResult[31] = tmp20;
                      cResult[32] = tmp24;
                      cResult[33] = tmp30;
                      tmp27 = tmp30;
                    }
                  }
                  const obj6 = { containerStyle: tmp4.indicators, numberOfItems: perks.length, currentIndex };
                  const tmp26 = closure_6(onItemChange(tmp2[10]).CarouselPagination, obj6);
                  class W {
                    constructor(arg0, arg1) {
                      items = [, ];
                      items[0] = closure_1.carouselCard;
                      lastCarouselCard = null;
                      if (length - 1 === arg1) {
                        lastCarouselCard = closure_1.lastCarouselCard;
                      }
                      items[1] = lastCarouselCard;
                      obj = {};
                      tmp2 = closure_1(closure_2[7]);
                      merged = Object.assign(arg0);
                      obj.variant = closure_0(closure_2[7]).PerkCardVariant.NARROW;
                      obj.style = items;
                      return jsx(tmp2, obj, arg1);
                    }
                  }
                  cResult[25] = currentIndex;
                  cResult[26] = perks.length;
                  cResult[27] = tmp4.indicators;
                  cResult[28] = tmp26;
                  tmp24 = tmp26;
                }
              }
              const obj7 = { style: tmp14, width, onPageChange: tmp8, pageIndictor: false, scrollViewProps: null, children: tmp17 };
              class W {
                constructor(arg0, arg1) {
                  items = [, ];
                  items[0] = closure_1.carouselCard;
                  lastCarouselCard = null;
                  if (length - 1 === arg1) {
                    lastCarouselCard = closure_1.lastCarouselCard;
                  }
                  items[1] = lastCarouselCard;
                  obj = {};
                  tmp2 = closure_1(closure_2[7]);
                  merged = Object.assign(arg0);
                  obj.variant = closure_0(closure_2[7]).PerkCardVariant.NARROW;
                  obj.style = items;
                  return jsx(tmp2, obj, arg1);
                }
              }
              const tmp23 = closure_6(require("Carousel"), obj7);
              cResult[21] = tmp8;
              cResult[22] = tmp14;
              cResult[23] = tmp17;
              cResult[24] = tmp23;
              tmp20 = tmp23;
            }
          }
        }
        if (cResult[17] === length) {
          if (cResult[18] === tmp4.carouselCard) {
            let tmp18;
            if (cResult[19] === tmp4.lastCarouselCard) {
              tmp18 = cResult[20];
            }
            const mapped = perks.map(tmp18);
            cResult[12] = length;
            cResult[13] = perks;
            cResult[14] = tmp4.carouselCard;
            class W {
              constructor(arg0, arg1) {
                items = [, ];
                items[0] = closure_1.carouselCard;
                lastCarouselCard = null;
                if (length - 1 === arg1) {
                  lastCarouselCard = closure_1.lastCarouselCard;
                }
                items[1] = lastCarouselCard;
                obj = {};
                tmp2 = closure_1(closure_2[7]);
                merged = Object.assign(arg0);
                obj.variant = closure_0(closure_2[7]).PerkCardVariant.NARROW;
                obj.style = items;
                return jsx(tmp2, obj, arg1);
              }
            }
            cResult[15] = tmp4.lastCarouselCard;
            cResult[16] = mapped;
            tmp17 = mapped;
          }
        }
        class W {
          constructor(arg0, arg1) {
            items = [, ];
            items[0] = closure_1.carouselCard;
            lastCarouselCard = null;
            if (length - 1 === arg1) {
              lastCarouselCard = closure_1.lastCarouselCard;
            }
            items[1] = lastCarouselCard;
            obj = {};
            tmp2 = closure_1(closure_2[7]);
            merged = Object.assign(arg0);
            obj.variant = closure_0(closure_2[7]).PerkCardVariant.NARROW;
            obj.style = items;
            return jsx(tmp2, obj, arg1);
          }
        }
        cResult[17] = length;
        cResult[18] = tmp4.carouselCard;
        cResult[19] = tmp4.lastCarouselCard;
        cResult[20] = W;
        tmp18 = W;
      }
      const items1 = [tmp4.carousel, tmp13];
      cResult[9] = tmp13;
      cResult[10] = items1;
      tmp14 = items1;
    }
    const obj8 = { style: null, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
    const tmp11 = closure_6(onItemChange(tmp2[8]).Text, obj8);
    cResult[3] = tmp4.title;
    cResult[4] = title;
    cResult[5] = tmp11;
    tmp9 = tmp11;
  }
  class C {
    constructor(arg0) {
      if (arg0 !== closure_2) {
        tmp = closure_3;
        tmp2 = closure_3(arg0);
        tmp3 = null;
        if (onItemChange != null) {
          tmp4 = onItemChange(arg0);
        }
      }
      return;
    }
  }
  cResult[0] = currentIndex;
  cResult[1] = onItemChange;
  cResult[2] = C;
  tmp8 = C;
}) : ((arg0) => {
  let closure_1;
  let closure_3;
  let currentIndex;
  let items1;
  let items2;
  let obj6;
  let onItemChange;
  let perks;
  let style;
  let title;
  ({ perks, onItemChange } = arg0);
  currentIndex = undefined;
  _slicedToArray = undefined;
  let length;
  ({ title, style } = arg0);
  const tmp = closure_8();
  importDefault = tmp;
  let obj = onItemChange(currentIndex[7]);
  const perkCardHeight = obj.usePerkCardHeight(onItemChange(currentIndex[7]).PerkCardVariant.NARROW);
  [currentIndex, _slicedToArray] = length.useState(0);
  let items = [currentIndex, onItemChange];
  const callback = length.useCallback((arg0) => {
    if (arg0 !== first) {
      closure_3(arg0);
      if (onItemChange != null) {
        onItemChange(arg0);
      }
    }
  }, items);
  const width = onItemChange(currentIndex[7]).PERK_CARD_SIZES[onItemChange(undefined, currentIndex[7]).PerkCardVariant.NARROW].width;
  length = perks.length;
  const obj2 = { style, children: items1 };
  items1 = [, , ];
  const obj3 = { style: tmp.title, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
  items1[0] = closure_6(onItemChange(currentIndex[8]).Text, obj3);
  const obj4 = {
    style: items2,
    width,
    onPageChange: callback,
    pageIndictor: false,
    scrollViewProps: obj6,
    children: perks.map((item, index) => {
      const items = [closure_1.carouselCard, ];
      let lastCarouselCard = null;
      if (length - 1 === index) {
        lastCarouselCard = closure_1.lastCarouselCard;
      }
      items[1] = lastCarouselCard;
      const obj = { variant: PremiumPerkCard.PerkCardVariant.NARROW, style: items };
      const tmp2 = PremiumPerkCardDefault;
      const merged = Object.assign(item);
      return metroRequire(tmp2, obj, index);
    })
  };
  items2 = [tmp.carousel, ];
  const obj5 = { height: perkCardHeight + 8 };
  items2[1] = obj5;
  obj6 = { overScrollMode: "always", snapToInterval: width + 8 + 0.2, snapToStart: true, snapToAlignment: "start", decelerationRate: "normal" };
  const tmp6 = require("Carousel");
  items1[1] = closure_6(tmp6, obj4);
  const obj7 = { containerStyle: tmp.indicators, numberOfItems: perks.length, currentIndex };
  items1[2] = closure_6(onItemChange(currentIndex[10]).CarouselPagination, obj7);
  return closure_7(View, obj2);
});
const result = size.fileFinishedImporting("modules/premium/native/PremiumPerkCarousel.tsx");

export default tmp3;