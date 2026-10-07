// discord_app/modules/collectibles/hooks/useTrackProductCardImpression.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import CollectiblesUtils from "../CollectiblesUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";

const require = globalThis.__r;

require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useTrackProductCardImpression.tsx");

export const useTrackProductCardImpression = ReactCompilerGating.isReactCompilerEnabled()
  ? (sku_id, page_type, arg2) => {
      _require = sku_id;
      importDefault = page_type;
      const cResult = require("c").c(23);
      str = "product";
      if (undefined !== arg2) {
        str = arg2;
      }
      let obj = require("c");
      const collectiblesAnalyticsContext = require("CollectiblesAnalyticsContext").useCollectiblesAnalyticsContext();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [stateFromStores];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== sku_id) {
        const fn = function p() {
          return CollectiblesCategoryStore.getProduct(closure_0);
        };
        cResult[1] = sku_id;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = require("CollectiblesAnalyticsContext");
      stateFromStores = require("initialize").useStateFromStores(first, tmp7);
      const tmpResult3 = require("initialize");
      const currentUser = require("useCurrentUser").useCurrentUser();
      if (cResult[3] !== currentUser) {
        const canUseShopDiscountsResult = require("PremiumUtils").canUseShopDiscounts(currentUser);
        cResult[3] = currentUser;
        cResult[4] = canUseShopDiscountsResult;
        let tmp10 = canUseShopDiscountsResult;
        const obj5 = require("PremiumUtils");
      } else {
        tmp10 = cResult[4];
      }
      closure_5 = tmp10;
      collectiblesAnalyticsContext.useRef(null);
      let categoryPosition;
      if (collectiblesAnalyticsContext != null) {
        categoryPosition = collectiblesAnalyticsContext.categoryPosition;
      }
      if (cResult[5] === categoryPosition) {
        let pageCategory;
        if (collectiblesAnalyticsContext != null) {
          pageCategory = collectiblesAnalyticsContext.pageCategory;
        }
        if (cResult[6] === pageCategory) {
          let pageSection;
          if (collectiblesAnalyticsContext != null) {
            pageSection = collectiblesAnalyticsContext.pageSection;
          }
          if (cResult[7] === pageSection) {
            let sessionId;
            if (collectiblesAnalyticsContext != null) {
              sessionId = collectiblesAnalyticsContext.sessionId;
            }
            if (cResult[8] === sessionId) {
              let tilePosition;
              if (collectiblesAnalyticsContext != null) {
                tilePosition = collectiblesAnalyticsContext.tilePosition;
              }
              if (cResult[9] === tilePosition) {
                if (cResult[10] === tmp10) {
                  if (cResult[11] === page_type) {
                    if (cResult[12] === stateFromStores) {
                      if (cResult[13] === sku_id) {
                        if (cResult[14] === str) {
                          let tmp18 = cResult[15];
                        }
                        closure_7 = tmp18;
                        if (cResult[16] !== tmp18) {
                          class T {
                            constructor(arg0) {
                              tmp = closure_6;
                              current = closure_6.current;
                              if (sku_id) {
                                if (null === current) {
                                  tmp4 = globalThis;
                                  _setTimeout = setTimeout;
                                  num = 1000;
                                  tmp.current = setTimeout(() => {
                                    closure_1_7();
                                    ref.current = null;
                                  }, 1000);
                                }
                              } else if (null !== current) {
                                tmp2 = globalThis;
                                _clearTimeout = clearTimeout;
                                clearTimeoutResult = clearTimeout(tmp.current);
                                tmp.current = null;
                              }
                              return;
                            }
                          }
                          cResult[16] = tmp18;
                          cResult[17] = T;
                        } else {
                          class T {
                            constructor(arg0) {
                              tmp = closure_6;
                              current = closure_6.current;
                              if (sku_id) {
                                if (null === current) {
                                  tmp4 = globalThis;
                                  _setTimeout = setTimeout;
                                  num = 1000;
                                  tmp.current = setTimeout(() => {
                                    closure_1_7();
                                    ref.current = null;
                                  }, 1000);
                                }
                              } else if (null !== current) {
                                tmp2 = globalThis;
                                _clearTimeout = clearTimeout;
                                clearTimeoutResult = clearTimeout(tmp.current);
                                tmp.current = null;
                              }
                              return;
                            }
                          }
                        }
                        const _Symbol = Symbol;
                        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                          class T {
                            constructor(arg0) {
                              tmp = closure_6;
                              current = closure_6.current;
                              if (sku_id) {
                                if (null === current) {
                                  tmp4 = globalThis;
                                  _setTimeout = setTimeout;
                                  num = 1000;
                                  tmp.current = setTimeout(() => {
                                    closure_1_7();
                                    ref.current = null;
                                  }, 1000);
                                }
                              } else if (null !== current) {
                                tmp2 = globalThis;
                                _clearTimeout = clearTimeout;
                                clearTimeoutResult = clearTimeout(tmp.current);
                                tmp.current = null;
                              }
                              return;
                            }
                          }
                          cResult[18] = tmp21;
                        } else {
                          class T {
                            constructor(arg0) {
                              tmp = closure_6;
                              current = closure_6.current;
                              if (sku_id) {
                                if (null === current) {
                                  tmp4 = globalThis;
                                  _setTimeout = setTimeout;
                                  num = 1000;
                                  tmp.current = setTimeout(() => {
                                    closure_1_7();
                                    ref.current = null;
                                  }, 1000);
                                }
                              } else if (null !== current) {
                                tmp2 = globalThis;
                                _clearTimeout = clearTimeout;
                                clearTimeoutResult = clearTimeout(tmp.current);
                                tmp.current = null;
                              }
                              return;
                            }
                          }
                        }
                        if (cResult[19] !== sku_id) {
                          class T {
                            constructor(arg0) {
                              tmp = closure_6;
                              current = closure_6.current;
                              if (sku_id) {
                                if (null === current) {
                                  tmp4 = globalThis;
                                  _setTimeout = setTimeout;
                                  num = 1000;
                                  tmp.current = setTimeout(() => {
                                    closure_1_7();
                                    ref.current = null;
                                  }, 1000);
                                }
                              } else if (null !== current) {
                                tmp2 = globalThis;
                                _clearTimeout = clearTimeout;
                                clearTimeoutResult = clearTimeout(tmp.current);
                                tmp.current = null;
                              }
                              return;
                            }
                          }
                          tmp23[0] = sku_id;
                          cResult[19] = sku_id;
                          cResult[20] = tmp23;
                        } else {
                          class T {
                            constructor(arg0) {
                              tmp = closure_6;
                              current = closure_6.current;
                              if (sku_id) {
                                if (null === current) {
                                  tmp4 = globalThis;
                                  _setTimeout = setTimeout;
                                  num = 1000;
                                  tmp.current = setTimeout(() => {
                                    closure_1_7();
                                    ref.current = null;
                                  }, 1000);
                                }
                              } else if (null !== current) {
                                tmp2 = globalThis;
                                _clearTimeout = clearTimeout;
                                clearTimeoutResult = clearTimeout(tmp.current);
                                tmp.current = null;
                              }
                              return;
                            }
                          }
                        }
                        const effect = obj6.useEffect(tmp21, tmp23);
                        if (cResult[21] !== T) {
                          class T {
                            constructor(arg0) {
                              tmp = closure_6;
                              current = closure_6.current;
                              if (sku_id) {
                                if (null === current) {
                                  tmp4 = globalThis;
                                  _setTimeout = setTimeout;
                                  num = 1000;
                                  tmp.current = setTimeout(() => {
                                    closure_1_7();
                                    ref.current = null;
                                  }, 1000);
                                }
                              } else if (null !== current) {
                                tmp2 = globalThis;
                                _clearTimeout = clearTimeout;
                                clearTimeoutResult = clearTimeout(tmp.current);
                                tmp.current = null;
                              }
                              return;
                            }
                          }
                          tmp26[0] = T;
                          cResult[21] = T;
                          cResult[22] = tmp26;
                        } else {
                          class T {
                            constructor(arg0) {
                              tmp = closure_6;
                              current = closure_6.current;
                              if (sku_id) {
                                if (null === current) {
                                  tmp4 = globalThis;
                                  _setTimeout = setTimeout;
                                  num = 1000;
                                  tmp.current = setTimeout(() => {
                                    closure_1_7();
                                    ref.current = null;
                                  }, 1000);
                                }
                              } else if (null !== current) {
                                tmp2 = globalThis;
                                _clearTimeout = clearTimeout;
                                clearTimeoutResult = clearTimeout(tmp.current);
                                tmp.current = null;
                              }
                              return;
                            }
                          }
                        }
                        return tmp26;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (collectiblesAnalyticsContext != null) {
        class T {
          constructor(arg0) {
            tmp = closure_6;
            current = closure_6.current;
            if (sku_id) {
              if (null === current) {
                tmp4 = globalThis;
                _setTimeout = setTimeout;
                num = 1000;
                tmp.current = setTimeout(() => {
                  closure_1_7();
                  ref.current = null;
                }, 1000);
              }
            } else if (null !== current) {
              tmp2 = globalThis;
              _clearTimeout = clearTimeout;
              clearTimeoutResult = clearTimeout(tmp.current);
              tmp.current = null;
            }
            return;
          }
        }
      }
      cResult[5] = undefined;
      if (collectiblesAnalyticsContext != null) {
        class T {
          constructor(arg0) {
            tmp = closure_6;
            current = closure_6.current;
            if (sku_id) {
              if (null === current) {
                tmp4 = globalThis;
                _setTimeout = setTimeout;
                num = 1000;
                tmp.current = setTimeout(() => {
                  closure_1_7();
                  ref.current = null;
                }, 1000);
              }
            } else if (null !== current) {
              tmp2 = globalThis;
              _clearTimeout = clearTimeout;
              clearTimeoutResult = clearTimeout(tmp.current);
              tmp.current = null;
            }
            return;
          }
        }
      }
      cResult[6] = undefined;
      if (collectiblesAnalyticsContext != null) {
        class T {
          constructor(arg0) {
            tmp = closure_6;
            current = closure_6.current;
            if (sku_id) {
              if (null === current) {
                tmp4 = globalThis;
                _setTimeout = setTimeout;
                num = 1000;
                tmp.current = setTimeout(() => {
                  closure_1_7();
                  ref.current = null;
                }, 1000);
              }
            } else if (null !== current) {
              tmp2 = globalThis;
              _clearTimeout = clearTimeout;
              clearTimeoutResult = clearTimeout(tmp.current);
              tmp.current = null;
            }
            return;
          }
        }
      }
      cResult[7] = undefined;
      if (collectiblesAnalyticsContext != null) {
        class T {
          constructor(arg0) {
            tmp = closure_6;
            current = closure_6.current;
            if (sku_id) {
              if (null === current) {
                tmp4 = globalThis;
                _setTimeout = setTimeout;
                num = 1000;
                tmp.current = setTimeout(() => {
                  closure_1_7();
                  ref.current = null;
                }, 1000);
              }
            } else if (null !== current) {
              tmp2 = globalThis;
              _clearTimeout = clearTimeout;
              clearTimeoutResult = clearTimeout(tmp.current);
              tmp.current = null;
            }
            return;
          }
        }
      }
      cResult[8] = undefined;
      if (collectiblesAnalyticsContext != null) {
        class T {
          constructor(arg0) {
            tmp = closure_6;
            current = closure_6.current;
            if (sku_id) {
              if (null === current) {
                tmp4 = globalThis;
                _setTimeout = setTimeout;
                num = 1000;
                tmp.current = setTimeout(() => {
                  closure_1_7();
                  ref.current = null;
                }, 1000);
              }
            } else if (null !== current) {
              tmp2 = globalThis;
              _clearTimeout = clearTimeout;
              clearTimeoutResult = clearTimeout(tmp.current);
              tmp.current = null;
            }
            return;
          }
        }
      }
      const fn2 = function b() {
        let priceForCollectiblesProduct = null;
        if (null != stateFromStores) {
          priceForCollectiblesProduct = CollectiblesUtils.getPriceForCollectiblesProduct(
            stateFromStores,
            closure_5,
            true,
          );
        }
        let strikeThroughPriceAmountForCollectiblesProduct;
        if (null != stateFromStores) {
          strikeThroughPriceAmountForCollectiblesProduct =
            CollectiblesUtils.getStrikeThroughPriceAmountForCollectiblesProduct(stateFromStores, closure_5, true);
        }
        let sessionId;
        if (collectiblesAnalyticsContext != null) {
          sessionId = collectiblesAnalyticsContext.sessionId;
        }
        const obj4 = {
          collectibles_shop_session_id: sessionId,
          sku_id,
          display_price: null,
          display_price_currency: null,
          display_price_strikethrough: null,
          position: null,
          page_type: null,
          page_category: null,
          page_section: null,
          type: null,
          category_position: null,
        };
        let amount;
        if (priceForCollectiblesProduct != null) {
          amount = priceForCollectiblesProduct.amount;
        }
        obj4.display_price = amount;
        let str1;
        if (priceForCollectiblesProduct != null) {
          str1 = str.toString();
        }
        obj4.display_price_currency = str1;
        obj4.display_price_strikethrough = strikeThroughPriceAmountForCollectiblesProduct;
        let tilePosition;
        if (collectiblesAnalyticsContext != null) {
          tilePosition = collectiblesAnalyticsContext.tilePosition;
        }
        obj4.position = tilePosition;
        obj4.page_type = page_type;
        let pageCategory;
        if (collectiblesAnalyticsContext != null) {
          pageCategory = collectiblesAnalyticsContext.pageCategory;
        }
        obj4.page_category = pageCategory;
        let pageSection;
        if (collectiblesAnalyticsContext != null) {
          pageSection = collectiblesAnalyticsContext.pageSection;
        }
        obj4.page_section = pageSection;
        obj4.type = str;
        let categoryPosition;
        if (collectiblesAnalyticsContext != null) {
          categoryPosition = collectiblesAnalyticsContext.categoryPosition;
        }
        obj4.category_position = categoryPosition;
        AnalyticsUtilsDefault.track(AnalyticEvents.COLLECTIBLES_TILE_IMPRESSION, obj4);
      };
      cResult[9] = undefined;
      cResult[10] = tmp10;
      cResult[11] = page_type;
      cResult[12] = stateFromStores;
      cResult[13] = sku_id;
      cResult[14] = str;
      cResult[15] = fn2;
      tmp18 = fn2;
      obj6 = collectiblesAnalyticsContext;
      const tmpResult4 = require("useCurrentUser");
    }
  : (sku_id, page_type) => {
      _require = sku_id;
      importDefault = page_type;
      let str = arg2;
      if (arg2 === undefined) {
        str = "product";
      }
      let stateFromStores;
      let callback;
      const collectiblesAnalyticsContext = require("CollectiblesAnalyticsContext").useCollectiblesAnalyticsContext();
      let obj = require("CollectiblesAnalyticsContext");
      const items = [stateFromStores];
      stateFromStores = require("initialize").useStateFromStores(items, () =>
        CollectiblesCategoryStore.getProduct(closure_0),
      );
      let obj2 = require("initialize");
      const currentUser = require("useCurrentUser").useCurrentUser();
      let obj3 = require("useCurrentUser");
      const canUseShopDiscountsResult = require("PremiumUtils").canUseShopDiscounts(currentUser);
      c5 = canUseShopDiscountsResult;
      collectiblesAnalyticsContext.useRef(null);
      let sessionId;
      if (collectiblesAnalyticsContext != null) {
        sessionId = collectiblesAnalyticsContext.sessionId;
      }
      const items1 = [sessionId, , , , , , , , ,];
      let categoryPosition;
      if (collectiblesAnalyticsContext != null) {
        categoryPosition = collectiblesAnalyticsContext.categoryPosition;
      }
      items1[1] = categoryPosition;
      let pageCategory;
      if (collectiblesAnalyticsContext != null) {
        pageCategory = collectiblesAnalyticsContext.pageCategory;
      }
      items1[2] = pageCategory;
      let pageSection;
      if (collectiblesAnalyticsContext != null) {
        pageSection = collectiblesAnalyticsContext.pageSection;
      }
      items1[3] = pageSection;
      let tilePosition;
      if (collectiblesAnalyticsContext != null) {
        tilePosition = collectiblesAnalyticsContext.tilePosition;
      }
      items1[4] = tilePosition;
      items1[5] = canUseShopDiscountsResult;
      items1[6] = page_type;
      items1[7] = stateFromStores;
      items1[8] = sku_id;
      items1[9] = str;
      callback = collectiblesAnalyticsContext.useCallback(() => {
        let priceForCollectiblesProduct = null;
        if (null != stateFromStores) {
          priceForCollectiblesProduct = CollectiblesUtils.getPriceForCollectiblesProduct(stateFromStores, c5, true);
        }
        let strikeThroughPriceAmountForCollectiblesProduct;
        if (null != stateFromStores) {
          strikeThroughPriceAmountForCollectiblesProduct =
            CollectiblesUtils.getStrikeThroughPriceAmountForCollectiblesProduct(stateFromStores, c5, true);
        }
        let sessionId;
        if (collectiblesAnalyticsContext != null) {
          sessionId = collectiblesAnalyticsContext.sessionId;
        }
        const obj4 = {
          collectibles_shop_session_id: sessionId,
          sku_id,
          display_price: null,
          display_price_currency: null,
          display_price_strikethrough: null,
          position: null,
          page_type: null,
          page_category: null,
          page_section: null,
          type: null,
          category_position: null,
        };
        let amount;
        if (priceForCollectiblesProduct != null) {
          amount = priceForCollectiblesProduct.amount;
        }
        obj4.display_price = amount;
        let str1;
        if (priceForCollectiblesProduct != null) {
          str1 = str.toString();
        }
        obj4.display_price_currency = str1;
        obj4.display_price_strikethrough = strikeThroughPriceAmountForCollectiblesProduct;
        let tilePosition;
        if (collectiblesAnalyticsContext != null) {
          tilePosition = collectiblesAnalyticsContext.tilePosition;
        }
        obj4.position = tilePosition;
        obj4.page_type = page_type;
        let pageCategory;
        if (collectiblesAnalyticsContext != null) {
          pageCategory = collectiblesAnalyticsContext.pageCategory;
        }
        obj4.page_category = pageCategory;
        let pageSection;
        if (collectiblesAnalyticsContext != null) {
          pageSection = collectiblesAnalyticsContext.pageSection;
        }
        obj4.page_section = pageSection;
        obj4.type = str;
        let categoryPosition;
        if (collectiblesAnalyticsContext != null) {
          categoryPosition = collectiblesAnalyticsContext.categoryPosition;
        }
        obj4.category_position = categoryPosition;
        AnalyticsUtilsDefault.track(AnalyticEvents.COLLECTIBLES_TILE_IMPRESSION, obj4);
      }, items1);
      const items2 = [callback];
      const items3 = [sku_id];
      const handleCardVisibilityChange = obj5.useCallback((arg0) => {
        const current = ref.current;
        if (arg0) {
          if (null === current) {
            const _setTimeout = setTimeout;
            ref.current = setTimeout(() => {
              callback();
              ref.current = null;
            }, 1000);
          }
        } else if (null !== current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref.current);
          ref.current = null;
        }
      }, items2);
      const effect = obj5.useEffect(
        () => () => {
          if (null !== ref.current) {
            const _clearTimeout = clearTimeout;
            clearTimeout(ref.current);
            ref.current = null;
          }
        },
        items3,
      );
      return { handleCardVisibilityChange };
    };
