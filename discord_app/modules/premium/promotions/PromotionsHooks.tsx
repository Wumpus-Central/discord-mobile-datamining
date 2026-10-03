// discord_app/modules/premium/promotions/PromotionsHooks.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import DispatcherDefault from "../../../Dispatcher.tsx";
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import PromotionUtils from "PromotionUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";
import PromotionsStore from "PromotionsStore.tsx";

const require = globalThis.__r;

require = fn;
const PremiumTypes = fn(1379).PremiumTypes;
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
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
        class P {
          constructor() {
            return closure_1_5.consumedInboundPromotionId;
          }
        }
        cResult[4] = items1;
        cResult[5] = P;
        let tmp10 = P;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[4];
        tmp10 = cResult[5];
      }
      const tmpResult = stateFromStores(504);
      stateFromStores = stateFromStores(504).useStateFromStores(tmp9, tmp10);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [PromotionsStore];
        class P {
          constructor() {
            return closure_1_5.consumedInboundPromotionId;
          }
        }
        cResult[6] = items2;
        cResult[7] = tmp16;
        let tmp14 = tmp16;
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
              let tmp18 = cResult[12];
            }
            return tmp18;
          }
        }
      }
      if (undefined !== includeClaimedPromotions && includeClaimedPromotions) {
        const _Set = Set;
        class P {
          constructor() {
            return closure_1_5.consumedInboundPromotionId;
          }
        }
      }
      c1 = null;
      const found = stateFromStoresArray.filter((id) => {
        let tmp = id.id !== stateFromStores;
        if (tmp) {
          let result1 = PromotionUtils.shouldShowOutboundPromotionOnPlatform(id);
          if (result1) {
            const result = PromotionUtils.isDedicatedSurfacePromotion(id);
            let flag = !result;
            if (!result) {
              flag = true;
              if (_null != null) {
                const hasItem = _null.has(id.id);
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
      tmp18 = found;
      const tmpResult4 = stateFromStores(504);
    }
  : () => {
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
      const stateFromStoresArray = flag(stateFromStores[6]).useStateFromStoresArray(
        items,
        () => PromotionsStore.outboundPromotions,
      );
      const obj2 = flag(stateFromStores[6]);
      const items1 = [PromotionsStore];
      stateFromStores = flag(stateFromStores[6]).useStateFromStores(
        items1,
        () => PromotionsStore.consumedInboundPromotionId,
      );
      const obj3 = flag(stateFromStores[6]);
      const items2 = [PromotionsStore];
      const stateFromStores1 = flag(stateFromStores[6]).useStateFromStores(
        items2,
        () => PromotionsStore.claimedOutboundPromotionCodes,
      );
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
    };
let closure_7 = tmp2;
fn(558);
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = stateFromStores(576).c(38);
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
        class P {
          constructor() {
            return closure_1_4.getCurrentUser();
          }
        }
        cResult[2] = items1;
        cResult[3] = P;
        let tmp10 = P;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const tmpResult = stateFromStores(504);
      const stateFromStores1 = stateFromStores(504).useStateFromStores(tmp9, tmp10);
      if (cResult[4] !== stateFromStores1) {
        PremiumUtilsDefault;
        class P {
          constructor() {
            return closure_1_4.getCurrentUser();
          }
        }
        cResult[4] = stateFromStores1;
        cResult[5] = tmp17;
        let tmp13 = tmp17;
      } else {
        tmp13 = cResult[5];
      }
      if (cResult[6] === stateFromStores1) {
        if (cResult[7] === tmp13) {
          let tmp18 = cResult[8];
        }
        importDefault = tmp18;
        const _Symbol = Symbol;
        class P {
          constructor() {
            return closure_1_4.getCurrentUser();
          }
        }
        if (tmp21 === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [PromotionsStore];
          class P {
            constructor() {
              return closure_1_4.getCurrentUser();
            }
          }
          cResult[9] = items2;
          cResult[10] = tmp25;
          let tmp23 = tmp25;
          let tmp22 = items2;
        } else {
          tmp22 = cResult[9];
          tmp23 = cResult[10];
        }
        const stateFromStores2 = tmp(504).useStateFromStores(tmp22, tmp23);
        const _Symbol2 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const items3 = [PromotionsStore];
          class P {
            constructor() {
              return closure_1_4.getCurrentUser();
            }
          }
          cResult[11] = items3;
          cResult[12] = tmp29;
          let tmp27 = tmp29;
          let tmp26 = items3;
        } else {
          tmp26 = cResult[11];
          tmp27 = cResult[12];
        }
        const tmpResult5 = tmp(504);
        const stateFromStores3 = tmp(504).useStateFromStores(tmp26, tmp27);
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
          class P {
            constructor() {
              return closure_1_4.getCurrentUser();
            }
          }
          cResult[13] = stateFromStores;
          cResult[14] = A;
          cResult[15] = items4;
          let tmp32 = items4;
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
          tmp32 = cResult[15];
        }
        const effect = noop.useEffect(A, tmp32);
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
          const effect1 = noop.useEffect(R, tmp35);
          const _Symbol3 = Symbol;
          class P {
            constructor() {
              return closure_1_4.getCurrentUser();
            }
          }
          if (tmp37 === Symbol.for("react.memo_cache_sentinel")) {
            class M {
              constructor() {
                obj = closure_1(closure_2[9]);
                waitResult = obj.wait(() => {
                  const claimedOutboundPromotionCodes = closure_1_1(
                    closure_1_2[10],
                  ).fetchClaimedOutboundPromotionCodes();
                });
                return;
              }
            }
            const items5 = [];
            class P {
              constructor() {
                return closure_1_4.getCurrentUser();
              }
            }
            cResult[21] = items5;
            let tmp39 = items5;
          } else {
            class M {
              constructor() {
                obj = closure_1(closure_2[9]);
                waitResult = obj.wait(() => {
                  const claimedOutboundPromotionCodes = closure_1_1(
                    closure_1_2[10],
                  ).fetchClaimedOutboundPromotionCodes();
                });
                return;
              }
            }
            tmp39 = cResult[21];
          }
          const effect2 = noop.useEffect(M, tmp39);
          if (cResult[22] !== stateFromStores2) {
            class M {
              constructor() {
                obj = closure_1(closure_2[9]);
                waitResult = obj.wait(() => {
                  const claimedOutboundPromotionCodes = closure_1_1(
                    closure_1_2[10],
                  ).fetchClaimedOutboundPromotionCodes();
                });
                return;
              }
            }
            const claimedOutboundPromotionCodeMap = obj8.getClaimedOutboundPromotionCodeMap(stateFromStores2);
            class P {
              constructor() {
                return closure_1_4.getCurrentUser();
              }
            }
            cResult[23] = claimedOutboundPromotionCodeMap;
          } else {
            class M {
              constructor() {
                obj = closure_1(closure_2[9]);
                waitResult = obj.wait(() => {
                  const claimedOutboundPromotionCodes = closure_1_1(
                    closure_1_2[10],
                  ).fetchClaimedOutboundPromotionCodes();
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
                  const claimedOutboundPromotionCodes = closure_1_1(
                    closure_1_2[10],
                  ).fetchClaimedOutboundPromotionCodes();
                });
                return;
              }
            }
            cResult[24] = tmp44;
            class P {
              constructor() {
                return closure_1_4.getCurrentUser();
              }
            }
          } else {
            class M {
              constructor() {
                obj = closure_1(closure_2[9]);
                waitResult = obj.wait(() => {
                  const claimedOutboundPromotionCodes = closure_1_1(
                    closure_1_2[10],
                  ).fetchClaimedOutboundPromotionCodes();
                });
                return;
              }
            }
          }
          const arr9 = closure_7(tmp43);
          if (cResult[25] !== arr9) {
            class M {
              constructor() {
                obj = closure_1(closure_2[9]);
                waitResult = obj.wait(() => {
                  const claimedOutboundPromotionCodes = closure_1_1(
                    closure_1_2[10],
                  ).fetchClaimedOutboundPromotionCodes();
                });
                return;
              }
            }
            if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
              class H {
                constructor(arg0) {
                  return arg0.id;
                }
              }
              cResult[27] = H;
              class P {
                constructor() {
                  return closure_1_4.getCurrentUser();
                }
              }
            } else {
              class H {
                constructor(arg0) {
                  return arg0.id;
                }
              }
            }
            class P {
              constructor() {
                return closure_1_4.getCurrentUser();
              }
            }
            const tmp482 = new tmp48(arr9.map(tmp47));
            cResult[25] = arr9;
            cResult[26] = tmp482;
          } else {
            class H {
              constructor(arg0) {
                return arg0.id;
              }
            }
            dependencyMap = tmp46;
            if (cResult[28] === tmp46) {
              class H {
                constructor(arg0) {
                  return arg0.id;
                }
              }
            }
            class P {
              constructor() {
                return closure_1_4.getCurrentUser();
              }
            }
            const found = stateFromStores2.filter(tmp53);
            cResult[28] = tmp46;
            cResult[29] = stateFromStores2;
            cResult[30] = found;
          }
        }
        class R {
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
        const items6 = [stateFromStores, tmp18];
        cResult[16] = stateFromStores;
        cResult[17] = tmp18;
        cResult[18] = R;
        cResult[19] = items6;
        tmp35 = items6;
        const tmpResult6 = tmp(504);
      }
      const tmpResult4 = stateFromStores(504);
      const isPremiumResult = PremiumUtilsDefault.isPremium(stateFromStores1);
      if (isPremiumResult) {
        class H {
          constructor(arg0) {
            return arg0.id;
          }
        }
      }
      cResult[6] = stateFromStores1;
      cResult[7] = tmp13;
      cResult[8] = !isPremiumResult;
      tmp18 = tmp20;
    }
  : () => {
      const items = [PromotionsStore];
      stateFromStores = stateFromStores(stateFromStores2[6]).useStateFromStores(
        items,
        () => PromotionsStore.lastFetchedActivePromotions,
      );
      let obj = stateFromStores(stateFromStores2[6]);
      const items1 = [UserStore];
      const stateFromStores1 = stateFromStores(stateFromStores2[6]).useStateFromStores(items1, () =>
        currentUser.getCurrentUser(),
      );
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
      stateFromStores2 = stateFromStores(stateFromStores2[6]).useStateFromStores(
        items2,
        () => PromotionsStore.claimedOutboundPromotionCodes,
      );
      const tmpResult = stateFromStores(stateFromStores2[6]);
      const items3 = [PromotionsStore];
      let promotionsLoaded = stateFromStores(stateFromStores2[6]).useStateFromStores(
        items3,
        () => PromotionsStore.claimedOutboundPromotionCodesLoaded,
      );
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
      const claimedOutboundPromotionCodeMap = activeOutboundPromotions.useMemo(
        () => PromotionUtils.getClaimedOutboundPromotionCodeMap(stateFromStores2),
        items6,
      );
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
      return {
        promotionsLoaded,
        activeOutboundPromotions,
        claimedEndedOutboundPromotions,
        claimedOutboundPromotionCodeMap,
      };
    };
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
            const fn2 = function v(promotion) {
              return stateFromStores(dependencyMap[7]).shouldShowOutboundPromotionOnPlatform(promotion);
            };
            cResult[9] = fn2;
            let tmp12 = fn2;
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
          class P {
            constructor(arg0) {
              date = new Date(arg0.startDate);
              date1 = new Date(closure_0);
              return date > date1;
            }
          }
          cResult[5] = stateFromStores;
          cResult[6] = P;
        } else {
          class P {
            constructor(arg0) {
              date = new Date(arg0.startDate);
              date1 = new Date(closure_0);
              return date > date1;
            }
          }
        }
        const found1 = arr2.filter(P);
        cResult[2] = arr2;
        cResult[3] = stateFromStores;
        cResult[4] = found1;
      }
      const tmpResult = stateFromStores(504);
    }
  : () => {
      const items = [PromotionsStore];
      stateFromStores = stateFromStores(504).useStateFromStores(
        items,
        () => PromotionsStore.lastSeenOutboundPromotionStartDate,
      );
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
    };
ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
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
    }
  : (arg0) => {
      _require = arg0;
      const items = [PromotionsStore];
      return require("initialize").useStateFromStores(items, () => PromotionsStore.hasPromotion(closure_0));
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/promotions/PromotionsHooks.tsx");

export const useEligibleActiveOutboundPromotions = tmp2;
export const useOutboundPromotions = tmp3;
export const useUnseenOutboundPromotions = tmp4;
export const useIsInPromotion = tmp5;
export const useHasActiveBogoPromotion = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
    }
  : () => {
      const effect = noop.useEffect(() => {
        const result = require("PromotionsActionCreators").maybeFetchActivePromotions();
      }, []);
      const items = [PromotionsStore];
      return initialize.useStateFromStores(items, () => PromotionsStore.hasActiveBogoRewardPromotion());
    };
