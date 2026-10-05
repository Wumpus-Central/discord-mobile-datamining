// === Module 15717: useTrackProductCardImpression ===

// Module 15717 (useTrackProductCardImpression)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7065 */;
import react from "react" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7053 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, clearTimeoutResult, importDefault, num, tmp, tmp3, tmp5;

const AnalyticEvents = Constants.AnalyticEvents;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((sku_id, page_type, arg2) => {
  let first;
  let stateFromStores;
  let str;
  let tmp10;
  let tmp7;
  _require = sku_id;
  importDefault = page_type;
  let tmp2 = str;
  let obj = require("react");
  const cResult = obj.c(23);
  str = "product";
  if (undefined !== arg2) {
    str = arg2;
  }
  const tmpResult = require("CollectiblesAnalyticsContext");
  const collectiblesAnalyticsContext = tmpResult.useCollectiblesAnalyticsContext();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [stateFromStores];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== sku_id) {
    const fn = function p() {
      return CollectiblesCategoryStore.getProduct(sku_id);
    };
    cResult[1] = sku_id;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult3 = require("get initialized");
  stateFromStores = tmpResult3.useStateFromStores(first, tmp7);
  const tmpResult4 = require("useCurrentUser");
  const currentUser = tmpResult4.useCurrentUser();
  if (cResult[3] !== currentUser) {
    const obj5 = require("PremiumUtils");
    const canUseShopDiscountsResult = obj5.canUseShopDiscounts(currentUser);
    cResult[3] = currentUser;
    cResult[4] = canUseShopDiscountsResult;
    tmp10 = canUseShopDiscountsResult;
  } else {
    tmp10 = cResult[4];
  }
  let closure_5 = tmp10;
  const ref = collectiblesAnalyticsContext.useRef(null);
  let categoryPosition;
  const obj6 = collectiblesAnalyticsContext;
  const tmp13 = cResult[5];
  if (collectiblesAnalyticsContext != null) {
    categoryPosition = collectiblesAnalyticsContext.categoryPosition;
  }
  if (tmp13 === categoryPosition) {
    let pageCategory;
    const tmp31 = cResult[6];
    if (collectiblesAnalyticsContext != null) {
      pageCategory = collectiblesAnalyticsContext.pageCategory;
    }
    if (tmp31 === pageCategory) {
      let pageSection;
      const tmp16 = cResult[7];
      if (collectiblesAnalyticsContext != null) {
        pageSection = collectiblesAnalyticsContext.pageSection;
      }
      if (tmp16 === pageSection) {
        let sessionId;
        const tmp18 = cResult[8];
        if (collectiblesAnalyticsContext != null) {
          sessionId = collectiblesAnalyticsContext.sessionId;
        }
        if (tmp18 === sessionId) {
          let tilePosition;
          const tmp20 = cResult[9];
          if (collectiblesAnalyticsContext != null) {
            tilePosition = collectiblesAnalyticsContext.tilePosition;
          }
          if (tmp20 === tilePosition) {
            if (cResult[10] === tmp10) {
              if (cResult[11] === page_type) {
                if (cResult[12] === stateFromStores) {
                  if (cResult[13] === sku_id) {
                    let tmp22;
                    if (cResult[14] === str) {
                      tmp22 = cResult[15];
                    }
                    let closure_7 = tmp22;
                    if (cResult[16] !== tmp22) {
                      class T {
                        constructor(arg0) {
                          tmp = closure_6;
                          current = closure_6.current;
                          tmp2 = sku_id;
                          if (tmp2) {
                            if (null === current) {
                              tmp5 = globalThis;
                              _setTimeout = setTimeout;
                              num = 1000;
                              tmp.current = setTimeout(() => {
                                closure_1_7();
                                ref.current = null;
                              }, 1000);
                            }
                          } else if (null !== current) {
                            tmp3 = globalThis;
                            _clearTimeout = clearTimeout;
                            clearTimeoutResult = clearTimeout(tmp.current);
                            tmp.current = null;
                          }
                          return;
                        }
                      }
                      cResult[16] = tmp22;
                      cResult[17] = T;
                    } else {
                      class T {
                        constructor(arg0) {
                          tmp = closure_6;
                          current = closure_6.current;
                          tmp2 = sku_id;
                          if (tmp2) {
                            if (null === current) {
                              tmp5 = globalThis;
                              _setTimeout = setTimeout;
                              num = 1000;
                              tmp.current = setTimeout(() => {
                                closure_1_7();
                                ref.current = null;
                              }, 1000);
                            }
                          } else if (null !== current) {
                            tmp3 = globalThis;
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
                          tmp2 = sku_id;
                          if (tmp2) {
                            if (null === current) {
                              tmp5 = globalThis;
                              _setTimeout = setTimeout;
                              num = 1000;
                              tmp.current = setTimeout(() => {
                                closure_1_7();
                                ref.current = null;
                              }, 1000);
                            }
                          } else if (null !== current) {
                            tmp3 = globalThis;
                            _clearTimeout = clearTimeout;
                            clearTimeoutResult = clearTimeout(tmp.current);
                            tmp.current = null;
                          }
                          return;
                        }
                      }
                      cResult[18] = tmp25;
                    } else {
                      class T {
                        constructor(arg0) {
                          tmp = closure_6;
                          current = closure_6.current;
                          tmp2 = sku_id;
                          if (tmp2) {
                            if (null === current) {
                              tmp5 = globalThis;
                              _setTimeout = setTimeout;
                              num = 1000;
                              tmp.current = setTimeout(() => {
                                closure_1_7();
                                ref.current = null;
                              }, 1000);
                            }
                          } else if (null !== current) {
                            tmp3 = globalThis;
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
                          tmp2 = sku_id;
                          if (tmp2) {
                            if (null === current) {
                              tmp5 = globalThis;
                              _setTimeout = setTimeout;
                              num = 1000;
                              tmp.current = setTimeout(() => {
                                closure_1_7();
                                ref.current = null;
                              }, 1000);
                            }
                          } else if (null !== current) {
                            tmp3 = globalThis;
                            _clearTimeout = clearTimeout;
                            clearTimeoutResult = clearTimeout(tmp.current);
                            tmp.current = null;
                          }
                          return;
                        }
                      }
                      tmp27[0] = sku_id;
                      cResult[19] = sku_id;
                      cResult[20] = tmp27;
                    } else {
                      class T {
                        constructor(arg0) {
                          tmp = closure_6;
                          current = closure_6.current;
                          tmp2 = sku_id;
                          if (tmp2) {
                            if (null === current) {
                              tmp5 = globalThis;
                              _setTimeout = setTimeout;
                              num = 1000;
                              tmp.current = setTimeout(() => {
                                closure_1_7();
                                ref.current = null;
                              }, 1000);
                            }
                          } else if (null !== current) {
                            tmp3 = globalThis;
                            _clearTimeout = clearTimeout;
                            clearTimeoutResult = clearTimeout(tmp.current);
                            tmp.current = null;
                          }
                          return;
                        }
                      }
                    }
                    const effect = obj6.useEffect(tmp25, tmp27);
                    if (cResult[21] !== T) {
                      class T {
                        constructor(arg0) {
                          tmp = closure_6;
                          current = closure_6.current;
                          tmp2 = sku_id;
                          if (tmp2) {
                            if (null === current) {
                              tmp5 = globalThis;
                              _setTimeout = setTimeout;
                              num = 1000;
                              tmp.current = setTimeout(() => {
                                closure_1_7();
                                ref.current = null;
                              }, 1000);
                            }
                          } else if (null !== current) {
                            tmp3 = globalThis;
                            _clearTimeout = clearTimeout;
                            clearTimeoutResult = clearTimeout(tmp.current);
                            tmp.current = null;
                          }
                          return;
                        }
                      }
                      tmp30[0] = T;
                      cResult[21] = T;
                      cResult[22] = tmp30;
                    } else {
                      class T {
                        constructor(arg0) {
                          tmp = closure_6;
                          current = closure_6.current;
                          tmp2 = sku_id;
                          if (tmp2) {
                            if (null === current) {
                              tmp5 = globalThis;
                              _setTimeout = setTimeout;
                              num = 1000;
                              tmp.current = setTimeout(() => {
                                closure_1_7();
                                ref.current = null;
                              }, 1000);
                            }
                          } else if (null !== current) {
                            tmp3 = globalThis;
                            _clearTimeout = clearTimeout;
                            clearTimeoutResult = clearTimeout(tmp.current);
                            tmp.current = null;
                          }
                          return;
                        }
                      }
                    }
                    return tmp30;
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
        tmp2 = sku_id;
        if (tmp2) {
          if (null === current) {
            tmp5 = globalThis;
            _setTimeout = setTimeout;
            num = 1000;
            tmp.current = setTimeout(() => {
              closure_1_7();
              ref.current = null;
            }, 1000);
          }
        } else if (null !== current) {
          tmp3 = globalThis;
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
        tmp2 = sku_id;
        if (tmp2) {
          if (null === current) {
            tmp5 = globalThis;
            _setTimeout = setTimeout;
            num = 1000;
            tmp.current = setTimeout(() => {
              closure_1_7();
              ref.current = null;
            }, 1000);
          }
        } else if (null !== current) {
          tmp3 = globalThis;
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
        tmp2 = sku_id;
        if (tmp2) {
          if (null === current) {
            tmp5 = globalThis;
            _setTimeout = setTimeout;
            num = 1000;
            tmp.current = setTimeout(() => {
              closure_1_7();
              ref.current = null;
            }, 1000);
          }
        } else if (null !== current) {
          tmp3 = globalThis;
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
        tmp2 = sku_id;
        if (tmp2) {
          if (null === current) {
            tmp5 = globalThis;
            _setTimeout = setTimeout;
            num = 1000;
            tmp.current = setTimeout(() => {
              closure_1_7();
              ref.current = null;
            }, 1000);
          }
        } else if (null !== current) {
          tmp3 = globalThis;
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
        tmp2 = sku_id;
        if (tmp2) {
          if (null === current) {
            tmp5 = globalThis;
            _setTimeout = setTimeout;
            num = 1000;
            tmp.current = setTimeout(() => {
              closure_1_7();
              ref.current = null;
            }, 1000);
          }
        } else if (null !== current) {
          tmp3 = globalThis;
          _clearTimeout = clearTimeout;
          clearTimeoutResult = clearTimeout(tmp.current);
          tmp.current = null;
        }
        return;
      }
    }
  }
  const fn2 = function b() {
    let amount;
    let categoryPosition;
    let pageCategory;
    let pageSection;
    let str1;
    let tilePosition;
    let priceForCollectiblesProduct = null;
    if (null != stateFromStores) {
      const obj = CollectiblesUtils;
      priceForCollectiblesProduct = obj.getPriceForCollectiblesProduct(stateFromStores, closure_5, true);
    }
    let strikeThroughPriceAmountForCollectiblesProduct;
    if (null != stateFromStores) {
      const obj2 = CollectiblesUtils;
      strikeThroughPriceAmountForCollectiblesProduct = obj2.getStrikeThroughPriceAmountForCollectiblesProduct(stateFromStores, closure_5, true);
    }
    let sessionId;
    const track = AnalyticsUtilsDefault.track;
    const COLLECTIBLES_TILE_IMPRESSION = AnalyticEvents.COLLECTIBLES_TILE_IMPRESSION;
    AnalyticsUtilsDefault;
    if (collectiblesAnalyticsContext != null) {
      sessionId = collectiblesAnalyticsContext.sessionId;
    }
    const obj3 = { collectibles_shop_session_id: sessionId, sku_id, display_price: amount, display_price_currency: str1, display_price_strikethrough: strikeThroughPriceAmountForCollectiblesProduct, position: tilePosition, page_type, page_category: pageCategory, page_section: pageSection, type: str, category_position: categoryPosition };
    amount = undefined;
    if (priceForCollectiblesProduct != null) {
      amount = priceForCollectiblesProduct.amount;
    }
    str1 = undefined;
    if (priceForCollectiblesProduct != null) {
      str1 = str.toString();
    }
    tilePosition = undefined;
    if (collectiblesAnalyticsContext != null) {
      tilePosition = collectiblesAnalyticsContext.tilePosition;
    }
    pageCategory = undefined;
    if (collectiblesAnalyticsContext != null) {
      pageCategory = collectiblesAnalyticsContext.pageCategory;
    }
    pageSection = undefined;
    if (collectiblesAnalyticsContext != null) {
      pageSection = collectiblesAnalyticsContext.pageSection;
    }
    categoryPosition = undefined;
    if (collectiblesAnalyticsContext != null) {
      categoryPosition = collectiblesAnalyticsContext.categoryPosition;
    }
    track(COLLECTIBLES_TILE_IMPRESSION, obj3);
  };
  cResult[9] = undefined;
  cResult[10] = tmp10;
  cResult[11] = page_type;
  cResult[12] = stateFromStores;
  cResult[13] = sku_id;
  cResult[14] = str;
  cResult[15] = fn2;
  tmp22 = fn2;
}) : ((sku_id, page_type) => {
  _require = sku_id;
  importDefault = page_type;
  let str = arg2;
  if (arg2 === undefined) {
    str = "product";
  }
  let stateFromStores;
  let callback;
  let obj = require("CollectiblesAnalyticsContext");
  const collectiblesAnalyticsContext = obj.useCollectiblesAnalyticsContext();
  let obj2 = require("get initialized");
  const items = [stateFromStores];
  stateFromStores = obj2.useStateFromStores(items, () => CollectiblesCategoryStore.getProduct(sku_id));
  let obj3 = require("useCurrentUser");
  const currentUser = obj3.useCurrentUser();
  const obj4 = require("PremiumUtils");
  const canUseShopDiscountsResult = obj4.canUseShopDiscounts(currentUser);
  let c5 = canUseShopDiscountsResult;
  const ref = collectiblesAnalyticsContext.useRef(null);
  let sessionId;
  const useCallback = collectiblesAnalyticsContext.useCallback;
  if (collectiblesAnalyticsContext != null) {
    sessionId = collectiblesAnalyticsContext.sessionId;
  }
  const items1 = [sessionId, , , , , , , , , ];
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
  callback = useCallback(() => {
    let amount;
    let categoryPosition;
    let pageCategory;
    let pageSection;
    let str1;
    let tilePosition;
    let priceForCollectiblesProduct = null;
    if (null != stateFromStores) {
      const obj = CollectiblesUtils;
      priceForCollectiblesProduct = obj.getPriceForCollectiblesProduct(stateFromStores, c5, true);
    }
    let strikeThroughPriceAmountForCollectiblesProduct;
    if (null != stateFromStores) {
      const obj2 = CollectiblesUtils;
      strikeThroughPriceAmountForCollectiblesProduct = obj2.getStrikeThroughPriceAmountForCollectiblesProduct(stateFromStores, c5, true);
    }
    let sessionId;
    const track = AnalyticsUtilsDefault.track;
    const COLLECTIBLES_TILE_IMPRESSION = AnalyticEvents.COLLECTIBLES_TILE_IMPRESSION;
    AnalyticsUtilsDefault;
    if (collectiblesAnalyticsContext != null) {
      sessionId = collectiblesAnalyticsContext.sessionId;
    }
    const obj3 = { collectibles_shop_session_id: sessionId, sku_id, display_price: amount, display_price_currency: str1, display_price_strikethrough: strikeThroughPriceAmountForCollectiblesProduct, position: tilePosition, page_type, page_category: pageCategory, page_section: pageSection, type: str, category_position: categoryPosition };
    amount = undefined;
    if (priceForCollectiblesProduct != null) {
      amount = priceForCollectiblesProduct.amount;
    }
    str1 = undefined;
    if (priceForCollectiblesProduct != null) {
      str1 = str.toString();
    }
    tilePosition = undefined;
    if (collectiblesAnalyticsContext != null) {
      tilePosition = collectiblesAnalyticsContext.tilePosition;
    }
    pageCategory = undefined;
    if (collectiblesAnalyticsContext != null) {
      pageCategory = collectiblesAnalyticsContext.pageCategory;
    }
    pageSection = undefined;
    if (collectiblesAnalyticsContext != null) {
      pageSection = collectiblesAnalyticsContext.pageSection;
    }
    categoryPosition = undefined;
    if (collectiblesAnalyticsContext != null) {
      categoryPosition = collectiblesAnalyticsContext.categoryPosition;
    }
    track(COLLECTIBLES_TILE_IMPRESSION, obj3);
  }, items1);
  const items2 = [callback];
  const items3 = [sku_id];
  const handleCardVisibilityChange = obj5.useCallback((arg0) => {
    const current = ref.current;
    const tmp2 = arg0;
    if (tmp2) {
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
  const effect = obj5.useEffect(() => () => {
    if (null !== ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
  }, items3);
  return { handleCardVisibilityChange };
});
const result = size.fileFinishedImporting("modules/collectibles/hooks/useTrackProductCardImpression.tsx");

export const useTrackProductCardImpression = tmp2;