// discord_app/modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import PremiumConstants from "../../PremiumConstants.tsx";
import merged5 from "../../../../../_runtime/05081_merged5.js";
import LottieAnimationViewDefault from "../../../../components_native/common/LottieAnimationView.tsx";
import react from "../../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let giftStyle;

const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (giftStyle) => {
      let tmp32;
      let tmp4;
      let tmp5;
      let useReducedMotion;
      const obj = react2;
      const cResult = obj.c(20);
      giftStyle = giftStyle.giftStyle;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn = function h() {
          return useReducedMotion.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      get_initialized;
      if (null == giftStyle) {
        return null;
      } else {
        if (cResult[2] !== giftStyle) {
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            class A {
              constructor() {
                return require("../../../../../_runtime/metro/11119__.js");
              }
            }
            cResult[4] = A;
          } else {
            class A {
              constructor() {
                return require("../../../../../_runtime/metro/11119__.js");
              }
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            class A {
              constructor() {
                return require("../../../../../_runtime/metro/11119__.js");
              }
            }
            cResult[5] = tmp12;
          } else {
            class A {
              constructor() {
                return require("../../../../../_runtime/metro/11119__.js");
              }
            }
          }
          const _Symbol3 = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            class A {
              constructor() {
                return require("../../../../../_runtime/metro/11119__.js");
              }
            }
            cResult[6] = tmp14;
          } else {
            class A {
              constructor() {
                return require("../../../../../_runtime/metro/11119__.js");
              }
            }
          }
          const _Symbol4 = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            class E {
              constructor() {
                return require("../../../../../_runtime/metro/10579__.js");
              }
            }
            cResult[7] = E;
          } else {
            class E {
              constructor() {
                return require("../../../../../_runtime/metro/10579__.js");
              }
            }
          }
          const _Symbol5 = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            class E {
              constructor() {
                return require("../../../../../_runtime/metro/10579__.js");
              }
            }
            cResult[8] = tmp17;
          } else {
            class E {
              constructor() {
                return require("../../../../../_runtime/metro/10579__.js");
              }
            }
          }
          const _Symbol6 = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            class O {
              constructor() {
                return require("../../../../../_runtime/metro/10585__.js");
              }
            }
            cResult[9] = O;
          } else {
            class O {
              constructor() {
                return require("../../../../../_runtime/metro/10585__.js");
              }
            }
          }
          const _Symbol7 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            class O {
              constructor() {
                return require("../../../../../_runtime/metro/10585__.js");
              }
            }
            cResult[10] = tmp20;
          } else {
            class O {
              constructor() {
                return require("../../../../../_runtime/metro/10585__.js");
              }
            }
          }
          const _Symbol8 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            class O {
              constructor() {
                return require("../../../../../_runtime/metro/10585__.js");
              }
            }
            cResult[11] = tmp22;
          } else {
            class O {
              constructor() {
                return require("../../../../../_runtime/metro/10585__.js");
              }
            }
          }
          const _Symbol9 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            class C {
              constructor() {
                return require("../../../../../_runtime/metro/10594__.js");
              }
            }
            cResult[12] = C;
          } else {
            class C {
              constructor() {
                return require("../../../../../_runtime/metro/10594__.js");
              }
            }
          }
          const _Symbol10 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            class N {
              constructor() {
                return require("../../../../../_runtime/metro/10597__.js");
              }
            }
            cResult[13] = N;
          } else {
            class N {
              constructor() {
                return require("../../../../../_runtime/metro/10597__.js");
              }
            }
          }
          const _Symbol11 = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            class F {
              constructor() {
                return require("../../../../../_runtime/metro/10600__.js");
              }
            }
            cResult[14] = F;
          } else {
            class F {
              constructor() {
                return require("../../../../../_runtime/metro/10600__.js");
              }
            }
          }
          const _Symbol12 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            class L {
              constructor() {
                return require("../../../../../_runtime/metro/10579__.js");
              }
            }
            cResult[15] = L;
          } else {
            class L {
              constructor() {
                return require("../../../../../_runtime/metro/10579__.js");
              }
            }
          }
          const str = merged5;
          const match = str.match(giftStyle);
          const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, A);
          const withResult1 = withResult.with(PremiumGiftStyles.BOX, tmp12);
          const withResult2 = withResult1.with(PremiumGiftStyles.CUP, tmp14);
          const withResult3 = withResult2.with(PremiumGiftStyles.STANDARD_BOX, E);
          const withResult4 = withResult3.with(PremiumGiftStyles.COFFEE, tmp17);
          const withResult5 = withResult4.with(PremiumGiftStyles.CHEST, O);
          const withResult6 = withResult5.with(PremiumGiftStyles.CAKE, tmp20);
          const withResult7 = withResult6.with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, tmp22);
          const withResult8 = withResult7.with(PremiumGiftStyles.SEASONAL_CAKE, C);
          const withResult9 = withResult8.with(PremiumGiftStyles.SEASONAL_CHEST, N);
          const withResult10 = withResult9.with(PremiumGiftStyles.SEASONAL_COFFEE, F);
          cResult[2] = giftStyle;
          cResult[3] = withResult10.otherwise(L);
          const otherwiseResult = withResult10.otherwise(L);
        } else {
          class L {
            constructor() {
              return require("../../../../../_runtime/metro/10579__.js");
            }
          }
        }
        const _Symbol13 = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          class L {
            constructor() {
              return require("../../../../../_runtime/metro/10579__.js");
            }
          }
          cResult[16] = tmp31;
        } else {
          class L {
            constructor() {
              return require("../../../../../_runtime/metro/10579__.js");
            }
          }
        }
        if (cResult[17] === tmp9) {
          class L {
            constructor() {
              return require("../../../../../_runtime/metro/10579__.js");
            }
          }
          return tmp32;
        }
        const tmp35 = jsx(LottieAnimationViewDefault, { source: tmp9, autoPlay: !tmp8, style: tmp31 });
        cResult[17] = tmp9;
        cResult[18] = !tmp8;
        cResult[19] = tmp35;
        tmp32 = tmp35;
      }
    }
  : (giftStyle) => {
      let useReducedMotion;
      const f106616 = () => require("../../../../../_runtime/metro/10579__.js");
      giftStyle = giftStyle.giftStyle;
      get_initialized;
      [][0] = AccessibilityStore;
      if (null == giftStyle) {
        return null;
      } else {
        const str = merged5;
        const match = str.match(giftStyle);
        const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () =>
          require("../../../../../_runtime/metro/11119__.js"),
        );
        const withResult1 = withResult.with(PremiumGiftStyles.BOX, () =>
          require("../../../../../_runtime/metro/11120__.js"),
        );
        const withResult2 = withResult1.with(PremiumGiftStyles.CUP, () =>
          require("../../../../../_runtime/metro/11121__.js"),
        );
        const withResult3 = withResult2.with(PremiumGiftStyles.STANDARD_BOX, () =>
          require("../../../../../_runtime/metro/10579__.js"),
        );
        const withResult4 = withResult3.with(PremiumGiftStyles.COFFEE, () =>
          require("../../../../../_runtime/metro/10588__.js"),
        );
        const withResult5 = withResult4.with(PremiumGiftStyles.CHEST, () =>
          require("../../../../../_runtime/metro/10585__.js"),
        );
        const withResult6 = withResult5.with(PremiumGiftStyles.CAKE, () =>
          require("../../../../../_runtime/metro/10582__.js"),
        );
        const withResult7 = withResult6.with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () =>
          require("../../../../../_runtime/metro/10591__.js"),
        );
        const withResult8 = withResult7.with(PremiumGiftStyles.SEASONAL_CAKE, () =>
          require("../../../../../_runtime/metro/10594__.js"),
        );
        const withResult9 = withResult8.with(PremiumGiftStyles.SEASONAL_CHEST, () =>
          require("../../../../../_runtime/metro/10597__.js"),
        );
        const withResult10 = withResult9.with(PremiumGiftStyles.SEASONAL_COFFEE, () =>
          require("../../../../../_runtime/metro/10600__.js"),
        );
        withResult10.otherwise(f106616);
        return jsx(LottieAnimationViewDefault, {
          source: withResult10.otherwise(f106616),
          autoPlay: !tmp4,
          style: { width: 320, height: 212 },
        });
      }
    };
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx");

export default tmp3;
