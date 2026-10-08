// === Module 13681: PromotionsHooks ===

// Module 13681 (PromotionsHooks)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4726 */;
import PromotionUtils from "PromotionUtils" /* 13547 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1389 */;
import PromotionsStore from "PromotionsStore" /* 10006 */;

const require = globalThis.__r;

require = fn;
const PremiumTypes = fn(1391).PremiumTypes;
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useEligibleActiveOutboundPromotions(arg0) {
  const cResult = stateFromStores(576).c(13);
  if (cResult[0] !== arg0) {
    let obj2 = arg0;
    if (undefined === arg0) {
      obj2 = {};
    }
    cResult[0] = arg0;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const includeClaimedPromotions = tmp4.includeClaimedPromotions;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PromotionsStore];
    const fn = function c() {
      return PromotionsStore.outboundPromotions;
    };
    cResult[2] = items;
    cResult[3] = fn;
    let tmp7 = fn;
    let tmp6 = items;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let obj = stateFromStores(576);
  const stateFromStoresArray = stateFromStores(504).useStateFromStoresArray(tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PromotionsStore];
    const fn2 = function f() {
      return PromotionsStore.consumedInboundPromotionId;
    };
    cResult[4] = items1;
    cResult[5] = fn2;
    let tmp10 = fn2;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[4];
    tmp10 = cResult[5];
  }
  const tmpResult = stateFromStores(504);
  stateFromStores = stateFromStores(504).useStateFromStores(tmp9, tmp10);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PromotionsStore];
    const fn3 = function h() {
      return PromotionsStore.claimedOutboundPromotionCodes;
    };
    cResult[6] = items2;
    cResult[7] = fn3;
    let tmp14 = fn3;
    let tmp13 = items2;
  } else {
    tmp13 = cResult[6];
    tmp14 = cResult[7];
  }
  const tmpResult3 = stateFromStores(504);
  const stateFromStores1 = stateFromStores(504).useStateFromStores(tmp13, tmp14);
  if (cResult[8] === stateFromStores1) {
    if (cResult[9] === stateFromStores) {
      if (cResult[10] === tmp5) {
        if (cResult[11] === stateFromStoresArray) {
          let tmp16 = cResult[12];
        }
        return tmp16;
      }
    }
  }
  if (undefined !== includeClaimedPromotions && includeClaimedPromotions) {
    const _Set = Set;
    new Set(stateFromStores1.map((promotion) => promotion.promotion.id));
  }
  const found = stateFromStoresArray.filter((id) => {
    let tmp = id.id !== stateFromStores;
    if (tmp) {
      let result1 = PromotionUtils.shouldShowOutboundPromotionOnPlatform(id);
      if (result1) {
        const result = PromotionUtils.isDedicatedSurfacePromotion(id);
        let flag = !result;
        if (!result) {
          flag = true;
          if (set != null) {
            const hasItem = set.has(id.id);
            flag = true;
          }
        }
        result1 = flag;
        const tmp2Result = PromotionUtils;
      }
      tmp = result1;
    }
    return tmp;
  });
  cResult[8] = stateFromStores1;
  cResult[9] = stateFromStores;
  cResult[10] = undefined !== includeClaimedPromotions && includeClaimedPromotions;
  cResult[11] = stateFromStoresArray;
  cResult[12] = found;
  tmp16 = found;
  const tmpResult4 = stateFromStores(504);
}) : (function useEligibleActiveOutboundPromotions() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.includeClaimedPromotions;
  if (flag === undefined) {
    flag = false;
  }
  let stateFromStores;
  const items = [PromotionsStore];
  const stateFromStoresArray = flag(stateFromStores[6]).useStateFromStoresArray(items, () => PromotionsStore.outboundPromotions);
  const obj2 = flag(stateFromStores[6]);
  const items1 = [PromotionsStore];
  stateFromStores = flag(stateFromStores[6]).useStateFromStores(items1, () => PromotionsStore.consumedInboundPromotionId);
  const obj3 = flag(stateFromStores[6]);
  const items2 = [PromotionsStore];
  const stateFromStores1 = flag(stateFromStores[6]).useStateFromStores(items2, () => PromotionsStore.claimedOutboundPromotionCodes);
  const items3 = [stateFromStoresArray, stateFromStores, stateFromStores1, flag];
  return stateFromStores1.useMemo(() => {
    let set = null;
    if (set) {
      const _Set = Set;
      set = new Set(stateFromStores1.map((promotion) => promotion.promotion.id));
    }
    return stateFromStoresArray.filter((id) => {
      let tmp = id.id !== stateFromStores;
      if (tmp) {
        let result1 = PromotionUtils.shouldShowOutboundPromotionOnPlatform(id);
        if (result1) {
          const result = PromotionUtils.isDedicatedSurfacePromotion(id);
          flag = !result;
          if (!result) {
            flag = true;
            if (set != null) {
              const hasItem = set.has(id.id);
              flag = true;
            }
          }
          result1 = flag;
          const tmp2Result = PromotionUtils;
        }
        tmp = result1;
      }
      return tmp;
    });
  }, items3);
});
let closure_7 = tmp2;
fn(558);
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useOutboundPromotions() {
  const cResult = stateFromStores(576).c(38);
  let tmp4 = globalThis;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PromotionsStore];
    const fn = function l() {
      return PromotionsStore.lastFetchedActivePromotions;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = stateFromStores(576);
  stateFromStores = stateFromStores(504).useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    const fn2 = function f() {
      return currentUser.getCurrentUser();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp10 = fn2;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = stateFromStores(504);
  const stateFromStores1 = stateFromStores(504).useStateFromStores(tmp9, tmp10);
  if (cResult[4] !== stateFromStores1) {
    const isPremiumExactlyResult = PremiumUtilsDefault.isPremiumExactly(stateFromStores1, PremiumTypes.TIER_2);
    cResult[4] = stateFromStores1;
    cResult[5] = isPremiumExactlyResult;
    let tmp13 = isPremiumExactlyResult;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] === stateFromStores1) {
    if (cResult[7] === tmp13) {
      let tmp17 = cResult[8];
    }
    importDefault = tmp17;
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [PromotionsStore];
      const fn3 = function y() {
        return PromotionsStore.claimedOutboundPromotionCodes;
      };
      cResult[9] = items2;
      cResult[10] = fn3;
      let tmp21 = fn3;
      let tmp20 = items2;
    } else {
      tmp20 = cResult[9];
      tmp21 = cResult[10];
    }
    const stateFromStores2 = tmp(504).useStateFromStores(tmp20, tmp21);
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const items3 = [PromotionsStore];
      const fn4 = function w() {
        return PromotionsStore.claimedOutboundPromotionCodesLoaded;
      };
      cResult[11] = items3;
      cResult[12] = fn4;
      let tmp24 = fn4;
      let tmp23 = items3;
    } else {
      tmp23 = cResult[11];
      tmp24 = cResult[12];
    }
    const tmpResult5 = tmp(504);
    const stateFromStores3 = tmp(504).useStateFromStores(tmp23, tmp24);
    if (cResult[13] !== stateFromStores) {
      class A {
        constructor() {
          if (null != closure_0) {
            tmp = closure_1;
            tmp2 = closure_2;
            obj = closure_1(closure_2[9]);
            waitResult = obj.wait(() => closure_1_1(closure_1_2[10]).markOutboundPromotionsSeen());
          }
          return;
        }
      }
      const items4 = [stateFromStores];
      cResult[13] = stateFromStores;
      cResult[14] = A;
      cResult[15] = items4;
      let tmp28 = items4;
    } else {
      class A {
        constructor() {
          if (null != closure_0) {
            tmp = closure_1;
            tmp2 = closure_2;
            obj = closure_1(closure_2[9]);
            waitResult = obj.wait(() => closure_1_1(closure_1_2[10]).markOutboundPromotionsSeen());
          }
          return;
        }
      }
      tmp28 = cResult[15];
    }
    const effect = noop.useEffect(A, tmp28);
    if (cResult[16] === stateFromStores) {
      class A {
        constructor() {
          if (null != closure_0) {
            tmp = closure_1;
            tmp2 = closure_2;
            obj = closure_1(closure_2[9]);
            waitResult = obj.wait(() => closure_1_1(closure_1_2[10]).markOutboundPromotionsSeen());
          }
          return;
        }
      }
      const effect1 = noop.useEffect(D, tmp31);
      const _Symbol3 = Symbol;
      if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor() {
            obj = closure_1(closure_2[9]);
            waitResult = obj.wait(() => {
              const claimedOutboundPromotionCodes = closure_1_1(closure_1_2[10]).fetchClaimedOutboundPromotionCodes();
            });
            return;
          }
        }
        const items5 = [];
        cResult[20] = M;
        cResult[21] = items5;
        let tmp34 = items5;
      } else {
        class M {
          constructor() {
            obj = closure_1(closure_2[9]);
            waitResult = obj.wait(() => {
              const claimedOutboundPromotionCodes = closure_1_1(closure_1_2[10]).fetchClaimedOutboundPromotionCodes();
            });
            return;
          }
        }
        tmp34 = cResult[21];
      }
      const effect2 = noop.useEffect(M, tmp34);
      if (cResult[22] !== stateFromStores2) {
        class M {
          constructor() {
            obj = closure_1(closure_2[9]);
            waitResult = obj.wait(() => {
              const claimedOutboundPromotionCodes = closure_1_1(closure_1_2[10]).fetchClaimedOutboundPromotionCodes();
            });
            return;
          }
        }
        const claimedOutboundPromotionCodeMap = obj9.getClaimedOutboundPromotionCodeMap(stateFromStores2);
        cResult[22] = stateFromStores2;
        cResult[23] = claimedOutboundPromotionCodeMap;
      } else {
        class M {
          constructor() {
            obj = closure_1(closure_2[9]);
            waitResult = obj.wait(() => {
              const claimedOutboundPromotionCodes = closure_1_1(closure_1_2[10]).fetchClaimedOutboundPromotionCodes();
            });
            return;
          }
        }
      }
      const _Symbol4 = Symbol;
      if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor() {
            obj = closure_1(closure_2[9]);
            waitResult = obj.wait(() => {
              const claimedOutboundPromotionCodes = closure_1_1(closure_1_2[10]).fetchClaimedOutboundPromotionCodes();
            });
            return;
          }
        }
        cResult[24] = tmp39;
      } else {
        class M {
          constructor() {
            obj = closure_1(closure_2[9]);
            waitResult = obj.wait(() => {
              const claimedOutboundPromotionCodes = closure_1_1(closure_1_2[10]).fetchClaimedOutboundPromotionCodes();
            });
            return;
          }
        }
      }
      const arr9 = closure_7(tmp39);
      if (cResult[25] !== arr9) {
        class M {
          constructor() {
            obj = closure_1(closure_2[9]);
            waitResult = obj.wait(() => {
              const claimedOutboundPromotionCodes = closure_1_1(closure_1_2[10]).fetchClaimedOutboundPromotionCodes();
            });
            return;
          }
        }
        if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
          class M {
            constructor() {
              obj = closure_1(closure_2[9]);
              waitResult = obj.wait(() => {
                const claimedOutboundPromotionCodes = closure_1_1(closure_1_2[10]).fetchClaimedOutboundPromotionCodes();
              });
              return;
            }
          }
          cResult[27] = tmp43;
        } else {
          class M {
            constructor() {
              obj = closure_1(closure_2[9]);
              waitResult = obj.wait(() => {
                const claimedOutboundPromotionCodes = closure_1_1(closure_1_2[10]).fetchClaimedOutboundPromotionCodes();
              });
              return;
            }
          }
        }
        const set = new tmp4.Set(arr9.map(tmp43));
        tmp4 = set;
        cResult[25] = arr9;
        cResult[26] = set;
      } else {
        class M {
          constructor() {
            obj = closure_1(closure_2[9]);
            waitResult = obj.wait(() => {
              const claimedOutboundPromotionCodes = closure_1_1(closure_1_2[10]).fetchClaimedOutboundPromotionCodes();
            });
            return;
          }
        }
        dependencyMap = tmp41;
        if (cResult[28] === tmp41) {
          class M {
            constructor() {
              obj = closure_1(closure_2[9]);
              waitResult = obj.wait(() => {
                const claimedOutboundPromotionCodes = closure_1_1(closure_1_2[10]).fetchClaimedOutboundPromotionCodes();
              });
              return;
            }
          }
        }
        if (cResult[31] !== tmp41) {
          class M {
            constructor() {
              obj = closure_1(closure_2[9]);
              waitResult = obj.wait(() => {
                const claimedOutboundPromotionCodes = closure_1_1(closure_1_2[10]).fetchClaimedOutboundPromotionCodes();
              });
              return;
            }
          }
          cResult[31] = tmp41;
          cResult[32] = tmp49;
        } else {
          class M {
            constructor() {
              obj = closure_1(closure_2[9]);
              waitResult = obj.wait(() => {
                const claimedOutboundPromotionCodes = closure_1_1(closure_1_2[10]).fetchClaimedOutboundPromotionCodes();
              });
              return;
            }
          }
        }
        const found = stateFromStores2.filter(tmp49);
        cResult[28] = tmp41;
        cResult[29] = stateFromStores2;
        cResult[30] = found;
      }
    }
    class D {
      constructor() {
        obj = closure_1(closure_2[9]);
        waitResult = obj.wait(() => {
          let tmp = closure_1_1;
          if (closure_1_1) {
            tmp = null == stateFromStores;
          }
          if (tmp) {
            const activePromotions = closure_1(dependencyMap[10]).fetchActivePromotions();
            const obj = closure_1(dependencyMap[10]);
          }
        });
        return;
      }
    }
    const items6 = [stateFromStores, tmp17];
    cResult[16] = stateFromStores;
    cResult[17] = tmp17;
    cResult[18] = D;
    cResult[19] = items6;
    tmp31 = items6;
    const tmpResult6 = tmp(504);
  }
  const tmpResult4 = stateFromStores(504);
  const isPremiumResult = PremiumUtilsDefault.isPremium(stateFromStores1);
  if (isPremiumResult) {
    class M {
      constructor() {
        obj = closure_1(closure_2[9]);
        waitResult = obj.wait(() => {
          const claimedOutboundPromotionCodes = closure_1_1(closure_1_2[10]).fetchClaimedOutboundPromotionCodes();
        });
        return;
      }
    }
  }
  cResult[6] = stateFromStores1;
  cResult[7] = tmp13;
  cResult[8] = !isPremiumResult;
  tmp17 = tmp19;
}) : (function useOutboundPromotions() {
  const items = [PromotionsStore];
  stateFromStores = stateFromStores(stateFromStores2[6]).useStateFromStores(items, () => PromotionsStore.lastFetchedActivePromotions);
  let obj = stateFromStores(stateFromStores2[6]);
  const items1 = [UserStore];
  const stateFromStores1 = stateFromStores(stateFromStores2[6]).useStateFromStores(items1, () => currentUser.getCurrentUser());
  let obj2 = stateFromStores(stateFromStores2[6]);
  let obj3 = require("PremiumUtils");
  const isPremiumExactlyResult = require("PremiumUtils").isPremiumExactly(stateFromStores1, PremiumTypes.TIER_2);
  const isPremiumResult = require("PremiumUtils").isPremium(stateFromStores1);
  let tmp8 = !isPremiumResult;
  if (isPremiumResult) {
    tmp8 = isPremiumExactlyResult;
  }
  importDefault = tmp8;
  let obj4 = require("PremiumUtils");
  const items2 = [PromotionsStore];
  stateFromStores2 = stateFromStores(stateFromStores2[6]).useStateFromStores(items2, () => PromotionsStore.claimedOutboundPromotionCodes);
  const tmpResult = stateFromStores(stateFromStores2[6]);
  const items3 = [PromotionsStore];
  let promotionsLoaded = stateFromStores(stateFromStores2[6]).useStateFromStores(items3, () => PromotionsStore.claimedOutboundPromotionCodesLoaded);
  const items4 = [stateFromStores];
  const effect = activeOutboundPromotions.useEffect(() => {
    if (null != stateFromStores) {
      DispatcherDefault.wait(() => closure_1_1(stateFromStores2[10]).markOutboundPromotionsSeen());
    }
  }, items4);
  const items5 = [stateFromStores, tmp8];
  const effect1 = activeOutboundPromotions.useEffect(() => {
    DispatcherDefault.wait(() => {
      let tmp = closure_1_1;
      if (closure_1_1) {
        tmp = null == stateFromStores;
      }
      if (tmp) {
        const activePromotions = isPremiumExactlyResult(stateFromStores2[10]).fetchActivePromotions();
        const obj = isPremiumExactlyResult(stateFromStores2[10]);
      }
    });
  }, items5);
  const effect2 = activeOutboundPromotions.useEffect(() => {
    isPremiumExactlyResult(stateFromStores2[9]).wait(() => {
      const claimedOutboundPromotionCodes = closure_1_1(stateFromStores2[10]).fetchClaimedOutboundPromotionCodes();
    });
  }, []);
  const items6 = [stateFromStores2];
  const claimedOutboundPromotionCodeMap = activeOutboundPromotions.useMemo(() => PromotionUtils.getClaimedOutboundPromotionCodeMap(stateFromStores2), items6);
  activeOutboundPromotions = closure_7({ includeClaimedPromotions: true });
  const items7 = [activeOutboundPromotions, stateFromStores2];
  const claimedEndedOutboundPromotions = activeOutboundPromotions.useMemo(() => {
    const set = new Set(activeOutboundPromotions.map((id) => id.id));
    return stateFromStores2.filter((promotion) => {
      promotion = promotion.promotion;
      const hasItem = set.has(promotion.id);
      let result = !hasItem;
      if (!hasItem) {
        const obj2 = { promotionType: promotion.promotionType };
        result = false === stateFromStores(stateFromStores2[7]).isRecurringPromotion(obj2);
        const obj = stateFromStores(stateFromStores2[7]);
      }
      if (result) {
        result = !stateFromStores(stateFromStores2[7]).isDedicatedSurfacePromotion(promotion);
        const obj3 = stateFromStores(stateFromStores2[7]);
      }
      if (result) {
        result = stateFromStores(stateFromStores2[7]).shouldShowOutboundPromotionOnPlatform(promotion);
        const obj4 = stateFromStores(stateFromStores2[7]);
      }
      return result;
    });
  }, items7);
  if (promotionsLoaded) {
    let tmp17 = !tmp8;
    if (tmp8) {
      tmp17 = null != stateFromStores;
    }
    promotionsLoaded = tmp17;
  }
  return { promotionsLoaded, activeOutboundPromotions, claimedEndedOutboundPromotions, claimedOutboundPromotionCodeMap };
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useUnseenOutboundPromotions() {
  const cResult = stateFromStores(576).c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PromotionsStore];
    const fn = function t() {
      return PromotionsStore.lastSeenOutboundPromotionStartDate;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = stateFromStores(576);
  stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
  const arr2 = closure_7();
  if (null == stateFromStores) {
    if (cResult[7] !== arr2) {
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function v(promotion) {
          return stateFromStores(dependencyMap[7]).shouldShowOutboundPromotionOnPlatform(promotion);
        };
        cResult[9] = fn3;
        let tmp12 = fn3;
      } else {
        tmp12 = cResult[9];
      }
      const found = arr2.filter(tmp12);
      cResult[7] = arr2;
      cResult[8] = found;
    } else {
      return cResult[8];
    }
  } else {
    if (cResult[5] !== stateFromStores) {
      const fn2 = function f(startDate) {
        const date = new Date(startDate.startDate);
        return date > new Date(stateFromStores);
      };
      cResult[5] = stateFromStores;
      cResult[6] = fn2;
      let tmp8 = fn2;
    } else {
      tmp8 = cResult[6];
    }
    const found1 = arr2.filter(tmp8);
    cResult[2] = arr2;
    cResult[3] = stateFromStores;
    cResult[4] = found1;
  }
  const tmpResult = stateFromStores(504);
}) : (function useUnseenOutboundPromotions() {
  const items = [PromotionsStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => PromotionsStore.lastSeenOutboundPromotionStartDate);
  const tmp2 = closure_7();
  closure_1 = tmp2;
  const items1 = [tmp2, stateFromStores];
  const memo = noop.useMemo(() => {
    if (null == stateFromStores) {
      let found = closure_1;
    } else {
      found = closure_1.filter((startDate) => {
        const date = new Date(startDate.startDate);
        return date > new Date(stateFromStores);
      });
    }
    return found;
  }, items1);
  return memo.filter((item) => stateFromStores(dependencyMap[7]).shouldShowOutboundPromotionOnPlatform(item));
});
ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsInPromotion(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PromotionsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      return PromotionsStore.hasPromotion(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6);
}) : (function useIsInPromotion(arg0) {
  _require = arg0;
  const items = [PromotionsStore];
  return require("initialize").useStateFromStores(items, () => PromotionsStore.hasPromotion(closure_0));
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/promotions/PromotionsHooks.tsx");

export const useEligibleActiveOutboundPromotions = tmp2;
export const useOutboundPromotions = tmp3;
export const useUnseenOutboundPromotions = tmp4;
export const useIsInPromotion = tmp5;
export const useHasActiveBogoPromotion = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasActiveBogoPromotion() {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const result = require("PromotionsActionCreators").maybeFetchActivePromotions();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp4 = fn;
    tmp5 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const effect = noop.useEffect(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PromotionsStore];
    const fn2 = function c() {
      return PromotionsStore.hasActiveBogoRewardPromotion();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp8 = fn2;
    let tmp7 = items1;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  return initialize.useStateFromStores(tmp7, tmp8);
}) : (function useHasActiveBogoPromotion() {
  const effect = noop.useEffect(() => {
    const result = require("PromotionsActionCreators").maybeFetchActivePromotions();
  }, []);
  const items = [PromotionsStore];
  return initialize.useStateFromStores(items, () => PromotionsStore.hasActiveBogoRewardPromotion());
});