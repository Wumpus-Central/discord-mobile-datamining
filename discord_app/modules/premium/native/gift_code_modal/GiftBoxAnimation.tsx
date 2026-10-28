// === Module 11214: GiftBoxAnimation ===

// Module 11214 (GiftBoxAnimation)
import c from "c" /* 576 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5264 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5005 */;

const require = globalThis.__r;

const initialize = withResult10(504);
const _mod6519 = withResult10(6519);
require = fn;
const PremiumGiftStyles = fn(1391).PremiumGiftStyles;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GiftBoxAnimation(giftStyle) {
  let withResult10 = require;
  const cResult = c.c(20);
  giftStyle = giftStyle.giftStyle;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function h() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
  } else {
    [tmp3, tmp4] = cResult;
  }
  initialize;
  if (null == giftStyle) {
    return null;
  } else if (cResult[2] !== giftStyle) {
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      class A {
        constructor() {
          return closure_1_0(closure_1_2[7]);
        }
      }
      cResult[4] = A;
    } else {
      class A {
        constructor() {
          return closure_1_0(closure_1_2[7]);
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      class A {
        constructor() {
          return closure_1_0(closure_1_2[7]);
        }
      }
      cResult[5] = tmp11;
    } else {
      class A {
        constructor() {
          return closure_1_0(closure_1_2[7]);
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class A {
        constructor() {
          return closure_1_0(closure_1_2[7]);
        }
      }
      cResult[6] = tmp13;
    } else {
      class A {
        constructor() {
          return closure_1_0(closure_1_2[7]);
        }
      }
    }
    const _Symbol4 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor() {
          return closure_1_0(closure_1_2[10]);
        }
      }
      cResult[7] = E;
    } else {
      class E {
        constructor() {
          return closure_1_0(closure_1_2[10]);
        }
      }
    }
    const _Symbol5 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor() {
          return closure_1_0(closure_1_2[10]);
        }
      }
      cResult[8] = tmp16;
    } else {
      class E {
        constructor() {
          return closure_1_0(closure_1_2[10]);
        }
      }
    }
    const _Symbol6 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class O {
        constructor() {
          return closure_1_0(closure_1_2[12]);
        }
      }
      cResult[9] = O;
    } else {
      class O {
        constructor() {
          return closure_1_0(closure_1_2[12]);
        }
      }
    }
    const _Symbol7 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class O {
        constructor() {
          return closure_1_0(closure_1_2[12]);
        }
      }
      cResult[10] = tmp19;
    } else {
      class O {
        constructor() {
          return closure_1_0(closure_1_2[12]);
        }
      }
    }
    const _Symbol8 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class O {
        constructor() {
          return closure_1_0(closure_1_2[12]);
        }
      }
      cResult[11] = tmp21;
    } else {
      class O {
        constructor() {
          return closure_1_0(closure_1_2[12]);
        }
      }
    }
    const _Symbol9 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor() {
          return closure_1_0(closure_1_2[15]);
        }
      }
      cResult[12] = C;
    } else {
      class C {
        constructor() {
          return closure_1_0(closure_1_2[15]);
        }
      }
    }
    const _Symbol10 = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      class N {
        constructor() {
          return closure_1_0(closure_1_2[16]);
        }
      }
      cResult[13] = N;
    } else {
      class N {
        constructor() {
          return closure_1_0(closure_1_2[16]);
        }
      }
    }
    const _Symbol11 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor() {
          return closure_1_0(closure_1_2[17]);
        }
      }
      cResult[14] = B;
    } else {
      class B {
        constructor() {
          return closure_1_0(closure_1_2[17]);
        }
      }
    }
    const _Symbol12 = Symbol;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          return closure_1_0(closure_1_2[10]);
        }
      }
      cResult[15] = F;
    } else {
      class F {
        constructor() {
          return closure_1_0(closure_1_2[10]);
        }
      }
    }
    const match = _mod6519.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, A);
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, A).with(PremiumGiftStyles.BOX, tmp11);
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, A).with(PremiumGiftStyles.BOX, tmp11).with(PremiumGiftStyles.CUP, tmp13);
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, A).with(PremiumGiftStyles.BOX, tmp11).with(PremiumGiftStyles.CUP, tmp13).with(PremiumGiftStyles.STANDARD_BOX, E);
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, A).with(PremiumGiftStyles.BOX, tmp11).with(PremiumGiftStyles.CUP, tmp13).with(PremiumGiftStyles.STANDARD_BOX, E).with(PremiumGiftStyles.COFFEE, tmp16);
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, A).with(PremiumGiftStyles.BOX, tmp11).with(PremiumGiftStyles.CUP, tmp13).with(PremiumGiftStyles.STANDARD_BOX, E).with(PremiumGiftStyles.COFFEE, tmp16).with(PremiumGiftStyles.CHEST, O);
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, A).with(PremiumGiftStyles.BOX, tmp11).with(PremiumGiftStyles.CUP, tmp13).with(PremiumGiftStyles.STANDARD_BOX, E).with(PremiumGiftStyles.COFFEE, tmp16).with(PremiumGiftStyles.CHEST, O).with(PremiumGiftStyles.CAKE, tmp19);
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, A).with(PremiumGiftStyles.BOX, tmp11).with(PremiumGiftStyles.CUP, tmp13).with(PremiumGiftStyles.STANDARD_BOX, E).with(PremiumGiftStyles.COFFEE, tmp16).with(PremiumGiftStyles.CHEST, O).with(PremiumGiftStyles.CAKE, tmp19).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, tmp21);
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, A).with(PremiumGiftStyles.BOX, tmp11).with(PremiumGiftStyles.CUP, tmp13).with(PremiumGiftStyles.STANDARD_BOX, E).with(PremiumGiftStyles.COFFEE, tmp16).with(PremiumGiftStyles.CHEST, O).with(PremiumGiftStyles.CAKE, tmp19).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, tmp21).with(PremiumGiftStyles.SEASONAL_CAKE, C);
    withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, A).with(PremiumGiftStyles.BOX, tmp11).with(PremiumGiftStyles.CUP, tmp13).with(PremiumGiftStyles.STANDARD_BOX, E).with(PremiumGiftStyles.COFFEE, tmp16).with(PremiumGiftStyles.CHEST, O).with(PremiumGiftStyles.CAKE, tmp19).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, tmp21).with(PremiumGiftStyles.SEASONAL_CAKE, C).with(PremiumGiftStyles.SEASONAL_CHEST, N).with(PremiumGiftStyles.SEASONAL_COFFEE, B);
    const otherwiseResult = withResult10.otherwise(F);
    cResult[2] = giftStyle;
    cResult[3] = otherwiseResult;
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, A).with(PremiumGiftStyles.BOX, tmp11).with(PremiumGiftStyles.CUP, tmp13).with(PremiumGiftStyles.STANDARD_BOX, E).with(PremiumGiftStyles.COFFEE, tmp16).with(PremiumGiftStyles.CHEST, O).with(PremiumGiftStyles.CAKE, tmp19).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, tmp21).with(PremiumGiftStyles.SEASONAL_CAKE, C).with(PremiumGiftStyles.SEASONAL_CHEST, N);
  } else {
    class F {
      constructor() {
        return closure_1_0(closure_1_2[10]);
      }
    }
    const _Symbol13 = Symbol;
    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          return closure_1_0(closure_1_2[10]);
        }
      }
      cResult[16] = tmp31;
    } else {
      class F {
        constructor() {
          return closure_1_0(closure_1_2[10]);
        }
      }
    }
    if (cResult[17] === tmp8) {
      class F {
        constructor() {
          return closure_1_0(closure_1_2[10]);
        }
      }
      return tmp32;
    }
    const obj = { source: tmp8, autoPlay: !tmp7, style: tmp31 };
    const tmp35 = jsx(LottieAnimationViewDefault, { source: tmp8, autoPlay: !tmp7, style: tmp31 });
    cResult[17] = tmp8;
    cResult[18] = !tmp7;
    cResult[19] = tmp35;
    tmp32 = tmp35;
  }
}) : (function GiftBoxAnimation(giftStyle) {
  giftStyle = giftStyle.giftStyle;
  initialize;
  [][0] = AccessibilityStore;
  if (null == giftStyle) {
    return null;
  } else {
    const match = _mod6519.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11215"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11215")).with(PremiumGiftStyles.BOX, () => require("module_11216"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11215")).with(PremiumGiftStyles.BOX, () => require("module_11216")).with(PremiumGiftStyles.CUP, () => require("module_11217"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11215")).with(PremiumGiftStyles.BOX, () => require("module_11216")).with(PremiumGiftStyles.CUP, () => require("module_11217")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10625"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11215")).with(PremiumGiftStyles.BOX, () => require("module_11216")).with(PremiumGiftStyles.CUP, () => require("module_11217")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10625")).with(PremiumGiftStyles.COFFEE, () => require("module_10634"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11215")).with(PremiumGiftStyles.BOX, () => require("module_11216")).with(PremiumGiftStyles.CUP, () => require("module_11217")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10625")).with(PremiumGiftStyles.COFFEE, () => require("module_10634")).with(PremiumGiftStyles.CHEST, () => require("module_10631"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11215")).with(PremiumGiftStyles.BOX, () => require("module_11216")).with(PremiumGiftStyles.CUP, () => require("module_11217")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10625")).with(PremiumGiftStyles.COFFEE, () => require("module_10634")).with(PremiumGiftStyles.CHEST, () => require("module_10631")).with(PremiumGiftStyles.CAKE, () => require("module_10628"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11215")).with(PremiumGiftStyles.BOX, () => require("module_11216")).with(PremiumGiftStyles.CUP, () => require("module_11217")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10625")).with(PremiumGiftStyles.COFFEE, () => require("module_10634")).with(PremiumGiftStyles.CHEST, () => require("module_10631")).with(PremiumGiftStyles.CAKE, () => require("module_10628")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10637"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11215")).with(PremiumGiftStyles.BOX, () => require("module_11216")).with(PremiumGiftStyles.CUP, () => require("module_11217")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10625")).with(PremiumGiftStyles.COFFEE, () => require("module_10634")).with(PremiumGiftStyles.CHEST, () => require("module_10631")).with(PremiumGiftStyles.CAKE, () => require("module_10628")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10637")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10640"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11215")).with(PremiumGiftStyles.BOX, () => require("module_11216")).with(PremiumGiftStyles.CUP, () => require("module_11217")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10625")).with(PremiumGiftStyles.COFFEE, () => require("module_10634")).with(PremiumGiftStyles.CHEST, () => require("module_10631")).with(PremiumGiftStyles.CAKE, () => require("module_10628")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10637")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10640")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10643"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11215")).with(PremiumGiftStyles.BOX, () => require("module_11216")).with(PremiumGiftStyles.CUP, () => require("module_11217")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10625")).with(PremiumGiftStyles.COFFEE, () => require("module_10634")).with(PremiumGiftStyles.CHEST, () => require("module_10631")).with(PremiumGiftStyles.CAKE, () => require("module_10628")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10637")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10640")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10643")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10646"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11215")).with(PremiumGiftStyles.BOX, () => require("module_11216")).with(PremiumGiftStyles.CUP, () => require("module_11217")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10625")).with(PremiumGiftStyles.COFFEE, () => require("module_10634")).with(PremiumGiftStyles.CHEST, () => require("module_10631")).with(PremiumGiftStyles.CAKE, () => require("module_10628")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10637")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10640")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10643")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10646")).otherwise(() => require("module_10625")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11215")).with(PremiumGiftStyles.BOX, () => require("module_11216")).with(PremiumGiftStyles.CUP, () => require("module_11217")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10625")).with(PremiumGiftStyles.COFFEE, () => require("module_10634")).with(PremiumGiftStyles.CHEST, () => require("module_10631")).with(PremiumGiftStyles.CAKE, () => require("module_10628")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10637")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10640")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10643")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10646")).otherwise(() => require("module_10625")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
});