// === Module 13258: PremiumPerkCarousel ===

// Module 13258 (PremiumPerkCarousel)
import PremiumPerkCard from "PremiumPerkCard" /* 13202 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;
const PremiumPerkCardDefault = PremiumPerkCard;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let closure_8 = createStyles.createStyles({ title: { marginLeft: 24 }, indicators: { marginBottom: -36 }, carousel: { marginTop: 16 }, carouselCard: { marginLeft: 8 }, lastCarouselCard: { marginRight: 8 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/PremiumPerkCarousel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = onItemChange(currentIndex[6]).c(34);
  ({ title, perks, style, onItemChange } = arg0);
  const tmp4 = closure_8();
  importDefault = tmp4;
  let obj = onItemChange(currentIndex[6]);
  const perkCardHeight = onItemChange(currentIndex[7]).usePerkCardHeight(onItemChange(currentIndex[7]).PerkCardVariant.NARROW);
  [currentIndex, _slicedToArray] = length.useState(0);
  if (cResult[0] === currentIndex) {
    if (cResult[1] === onItemChange) {
      let tmp8 = cResult[2];
    }
    const width = onItemChange(tmp2[7]).PERK_CARD_SIZES[onItemChange(undefined, tmp2[7]).PerkCardVariant.NARROW].width;
    if (cResult[3] === tmp4.title) {
      if (cResult[4] === title) {
        let tmp9 = cResult[5];
      }
      const sum = perkCardHeight + 8;
      if (cResult[6] !== sum) {
        const obj3 = { height: sum };
        cResult[6] = sum;
        cResult[7] = obj3;
        let tmp13 = obj3;
      } else {
        tmp13 = cResult[7];
      }
      if (cResult[8] === tmp4.carousel) {
        if (cResult[9] === tmp13) {
          let tmp14 = cResult[10];
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
                if (cResult[21] === tmp8) {
                  if (cResult[22] === tmp14) {
                    if (cResult[23] === tmp17) {
                      let tmp21 = cResult[24];
                    }
                    if (cResult[25] === currentIndex) {
                      if (cResult[26] === perks.length) {
                        if (cResult[27] === tmp4.indicators) {
                          let tmp25 = cResult[28];
                        }
                        if (cResult[29] === style) {
                          if (cResult[30] === tmp9) {
                            if (cResult[31] === tmp21) {
                              if (cResult[32] === tmp25) {
                                let tmp28 = cResult[33];
                              }
                              return tmp28;
                            }
                          }
                        }
                        const obj5 = { style, children: null };
                        let items = [tmp9, , ];
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
                        items[2] = tmp25;
                        obj5.children = items;
                        const tmp31 = closure_7(View, obj5);
                        cResult[29] = style;
                        cResult[30] = tmp9;
                        cResult[31] = tmp21;
                        cResult[32] = tmp25;
                        cResult[33] = tmp31;
                        tmp28 = tmp31;
                      }
                    }
                    const obj6 = { containerStyle: tmp4.indicators, numberOfItems: perks.length, currentIndex };
                    const tmp27 = closure_6(onItemChange(tmp2[10]).CarouselPagination, obj6);
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
                    cResult[28] = tmp27;
                    tmp25 = tmp27;
                  }
                }
                const obj7 = { style: tmp14, width, onPageChange: tmp8, pageIndictor: false, scrollViewProps: null, children: null };
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
                obj7.children = cResult[16];
                const tmp24 = closure_6(require("Carousel"), obj7);
                cResult[21] = tmp8;
                cResult[22] = tmp14;
                cResult[23] = cResult[16];
                cResult[24] = tmp24;
                tmp21 = tmp24;
              }
            }
          }
        }
        if (cResult[17] === length) {
          if (cResult[18] === tmp4.carouselCard) {
            if (cResult[19] === tmp4.lastCarouselCard) {
              let tmp18 = cResult[20];
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
            cResult[15] = length;
            cResult[16] = mapped;
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
  const obj2 = onItemChange(currentIndex[7]);
}) : ((arg0) => {
  ({ perks, onItemChange } = arg0);
  currentIndex = undefined;
  _slicedToArray = undefined;
  let length;
  ({ title, style } = arg0);
  const tmp = closure_8();
  importDefault = tmp;
  const perkCardHeight = onItemChange(currentIndex[7]).usePerkCardHeight(onItemChange(currentIndex[7]).PerkCardVariant.NARROW);
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
  const obj2 = { style, children: null };
  const items1 = [closure_6(onItemChange(currentIndex[8]).Text, { style: tmp.title, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title }), , ];
  const obj4 = { style: null, width, onPageChange: callback, pageIndictor: false, scrollViewProps: { overScrollMode: "always", snapToInterval: width + 8 + 0.2, snapToStart: true, snapToAlignment: "start", decelerationRate: "normal" }, children: null };
  const items2 = [tmp.carousel, { height: perkCardHeight + 8 }];
  obj4.style = items2;
  let obj = onItemChange(currentIndex[7]);
  const obj3 = { style: tmp.title, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
  const obj5 = { height: perkCardHeight + 8 };
  const obj6 = { overScrollMode: "always", snapToInterval: width + 8 + 0.2, snapToStart: true, snapToAlignment: "start", decelerationRate: "normal" };
  obj4.children = perks.map((item, index) => {
    const items = [closure_1.carouselCard, ];
    let lastCarouselCard = null;
    if (length - 1 === index) {
      lastCarouselCard = closure_1.lastCarouselCard;
    }
    items[1] = lastCarouselCard;
    const obj = {};
    const merged = Object.assign(item);
    obj.variant = PremiumPerkCard.PerkCardVariant.NARROW;
    obj.style = items;
    return timestampProducer(PremiumPerkCardDefault, obj, index);
  });
  items1[1] = closure_6(require("Carousel"), obj4);
  items1[2] = closure_6(onItemChange(currentIndex[10]).CarouselPagination, { containerStyle: tmp.indicators, numberOfItems: perks.length, currentIndex });
  obj2.children = items1;
  return closure_7(View, obj2);
});