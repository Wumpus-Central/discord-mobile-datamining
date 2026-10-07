// === Module 8453: useTrackShopCardImpression ===

// Module 8453 (useTrackShopCardImpression)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7077 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7078 */;
import useTrackImpression from "useTrackImpression" /* 8455 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/hooks/useTrackShopCardImpression.tsx");

export const useTrackShopCardImpression = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, skuId) => {
  _require = arg0;
  importDefault = skuId;
  const cResult = require("c").c(17);
  let obj = require("c");
  const tmp = _require;
  collectiblesAnalyticsContext = require("CollectiblesAnalyticsContext").useCollectiblesAnalyticsContext();
  const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  const size = require("useWindowDimensions")();
  const width = size.width;
  const height = size.height;
  let obj2 = require("CollectiblesAnalyticsContext");
  const tmp5 = importDefault;
  const currentUser = require("useCurrentUser").useCurrentUser();
  if (cResult[0] !== currentUser) {
    const shopDiscountSource = tmp(tmp2[7]).getShopDiscountSource(currentUser);
    cResult[0] = currentUser;
    cResult[1] = shopDiscountSource;
    let tmp7 = shopDiscountSource;
    let tmpResult = tmp(tmp2[7]);
  } else {
    tmp7 = cResult[1];
  }
  closure_6 = tmp7;
  ref = analyticsLocations.useRef(null);
  closure_8 = analyticsLocations.useRef(false);
  closure_9 = analyticsLocations.useRef(false);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function k() {
      closure_8.current = false;
      closure_9.current = false;
    };
    cResult[2] = fn;
    let tmp10 = fn;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] !== skuId.skuId) {
    const items = [skuId.skuId];
    cResult[3] = skuId.skuId;
    cResult[4] = items;
    let tmp11 = items;
  } else {
    tmp11 = cResult[4];
  }
  const effect = analyticsLocations.useEffect(tmp10, tmp11);
  let cardId;
  if (collectiblesAnalyticsContext != null) {
    cardId = collectiblesAnalyticsContext.cardId;
  }
  if (cResult[5] === cardId) {
    let sessionId;
    if (collectiblesAnalyticsContext != null) {
      sessionId = collectiblesAnalyticsContext.sessionId;
    }
    if (cResult[6] === sessionId) {
      let tilePosition;
      if (collectiblesAnalyticsContext != null) {
        tilePosition = collectiblesAnalyticsContext.tilePosition;
      }
      if (cResult[7] === tilePosition) {
        if (cResult[8] === analyticsLocations) {
          if (cResult[9] === tmp7) {
            if (cResult[10] === arg0) {
              if (cResult[11] === skuId.skuId) {
                let tmp16 = cResult[12];
              }
              closure_10 = tmp16;
              if (cResult[13] === tmp16) {
                if (cResult[14] === height) {
                  if (cResult[15] === width) {
                    let tmp20 = cResult[16];
                  }
                  tmp5(tmp2[11])(tmp20, 1000);
                  class P {
                    constructor() {
                      current = closure_7.current;
                      if (current != null) {
                        measureResult = current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
                          const bound = Math.min(arg4 + arg2, width);
                          const bound1 = Math.max(0, bound - Math.max(arg4, 0));
                          const bound2 = Math.min(arg5 + arg3, height);
                          const result = arg2 * arg3;
                          let num = 0;
                          if (result > 0) {
                            num = bound1 * Math.max(0, bound2 - Math.max(arg5, 0)) / result;
                          }
                          if (num >= 0.5) {
                            if (ref.current) {
                              if (!ref2.current) {
                                closure_1_10();
                                tmp7.current = true;
                              }
                              ref.current = tmp5;
                            }
                          }
                          if (num < 0.5) {
                            ref2.current = false;
                          }
                        });
                      }
                      return;
                    }
                  }
                }
              }
              class P {
                constructor() {
                  current = closure_7.current;
                  if (current != null) {
                    measureResult = current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
                      const bound = Math.min(arg4 + arg2, width);
                      const bound1 = Math.max(0, bound - Math.max(arg4, 0));
                      const bound2 = Math.min(arg5 + arg3, height);
                      const result = arg2 * arg3;
                      let num = 0;
                      if (result > 0) {
                        num = bound1 * Math.max(0, bound2 - Math.max(arg5, 0)) / result;
                      }
                      if (num >= 0.5) {
                        if (ref.current) {
                          if (!ref2.current) {
                            closure_1_10();
                            tmp7.current = true;
                          }
                          ref.current = tmp5;
                        }
                      }
                      if (num < 0.5) {
                        ref2.current = false;
                      }
                    });
                  }
                  return;
                }
              }
              cResult[13] = tmp16;
              cResult[14] = height;
              cResult[15] = width;
              cResult[16] = P;
              tmp20 = P;
            }
          }
        }
      }
    }
  }
  let cardId1;
  if (collectiblesAnalyticsContext != null) {
    cardId1 = collectiblesAnalyticsContext.cardId;
  }
  cResult[5] = cardId1;
  let sessionId1;
  if (collectiblesAnalyticsContext != null) {
    sessionId1 = collectiblesAnalyticsContext.sessionId;
  }
  cResult[6] = sessionId1;
  let tilePosition1;
  if (collectiblesAnalyticsContext != null) {
    tilePosition1 = collectiblesAnalyticsContext.tilePosition;
  }
  class S {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[8]);
      obj1 = { name: closure_0(closure_2[9]).ImpressionNames.SHOP_CARD, type: closure_0(closure_2[9]).ImpressionTypes.VIEW, properties: null };
      obj6 = { sku_id: closure_1.skuId, card_id: null, shop_session_id: null, position_in_section: null, product_sku_ids: null, location_stack: null, discount_source: null };
      tmp3 = closure_2;
      cardId = undefined;
      if (closure_2 != null) {
        cardId = tmp3.cardId;
      }
      obj6.card_id = cardId;
      sessionId = undefined;
      if (tmp3 != null) {
        sessionId = tmp3.sessionId;
      }
      obj6.shop_session_id = sessionId;
      tilePosition = undefined;
      if (tmp3 != null) {
        tilePosition = tmp3.tilePosition;
      }
      obj6.position_in_section = tilePosition;
      tmpResult = tmp(tmp2[10]);
      obj6.product_sku_ids = tmpResult.getProductSkuIds(closure_0);
      obj6.location_stack = analyticsLocations;
      tmpResult1 = tmp(tmp2[7]);
      obj6.discount_source = tmpResult1.getAnalyticsShopDiscountSource(closure_6);
      obj1.properties = obj6;
      trackImpressionResult = obj.trackImpression(obj1, false, true);
      return;
    }
  }
  cResult[7] = tilePosition1;
  cResult[8] = analyticsLocations;
  cResult[9] = tmp7;
  cResult[10] = arg0;
  cResult[11] = skuId.skuId;
  cResult[12] = S;
  tmp16 = S;
}) : ((arg0, skuId) => {
  _require = arg0;
  importDefault = skuId;
  collectiblesAnalyticsContext = require("CollectiblesAnalyticsContext").useCollectiblesAnalyticsContext();
  const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  let obj = require("CollectiblesAnalyticsContext");
  const tmp = collectiblesAnalyticsContext;
  const tmp3 = importDefault;
  ({ width: closure_4, height: closure_5 } = require("useWindowDimensions")());
  const tmp4 = require("useWindowDimensions")();
  const currentUser = require("useCurrentUser").useCurrentUser();
  let obj2 = require("useCurrentUser");
  const shopDiscountSource = require("CollectiblesUtils").getShopDiscountSource(currentUser);
  ref = analyticsLocations.useRef(null);
  closure_8 = analyticsLocations.useRef(false);
  closure_9 = analyticsLocations.useRef(false);
  const items = [skuId.skuId];
  const effect = analyticsLocations.useEffect(() => {
    closure_8.current = false;
    closure_9.current = false;
  }, items);
  const items1 = [arg0, skuId, , , , , ];
  let cardId;
  if (collectiblesAnalyticsContext != null) {
    cardId = collectiblesAnalyticsContext.cardId;
  }
  items1[2] = cardId;
  let sessionId;
  if (collectiblesAnalyticsContext != null) {
    sessionId = collectiblesAnalyticsContext.sessionId;
  }
  items1[3] = sessionId;
  let tilePosition;
  if (collectiblesAnalyticsContext != null) {
    tilePosition = collectiblesAnalyticsContext.tilePosition;
  }
  items1[4] = tilePosition;
  items1[5] = analyticsLocations;
  items1[6] = shopDiscountSource;
  closure_10 = analyticsLocations.useCallback(() => {
    const obj2 = { name: discord_common_AnalyticsUtils.ImpressionNames.SHOP_CARD, type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, properties: null };
    const obj3 = { sku_id: skuId.skuId, card_id: null, shop_session_id: null, position_in_section: null, product_sku_ids: null, location_stack: null, discount_source: null };
    let cardId;
    if (collectiblesAnalyticsContext != null) {
      cardId = collectiblesAnalyticsContext.cardId;
    }
    obj3.card_id = cardId;
    let sessionId;
    if (collectiblesAnalyticsContext != null) {
      sessionId = collectiblesAnalyticsContext.sessionId;
    }
    obj3.shop_session_id = sessionId;
    let tilePosition;
    if (collectiblesAnalyticsContext != null) {
      tilePosition = collectiblesAnalyticsContext.tilePosition;
    }
    obj3.position_in_section = tilePosition;
    const obj = useTrackImpression;
    obj3.product_sku_ids = CollectiblesProductUtils.getProductSkuIds(closure_0);
    obj3.location_stack = analyticsLocations;
    const tmpResult = CollectiblesProductUtils;
    obj3.discount_source = CollectiblesUtils.getAnalyticsShopDiscountSource(shopDiscountSource);
    obj2.properties = obj3;
    obj.trackImpression(obj2, false, true);
    const tmpResult2 = CollectiblesUtils;
  }, items1);
  tmp3(tmp[11])(() => {
    const current = ref.current;
    if (current != null) {
      current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
        const bound = Math.min(arg4 + arg2, closure_1_4);
        const bound1 = Math.max(0, bound - Math.max(arg4, 0));
        const bound2 = Math.min(arg5 + arg3, closure_1_5);
        const result = arg2 * arg3;
        let num = 0;
        if (result > 0) {
          num = bound1 * Math.max(0, bound2 - Math.max(arg5, 0)) / result;
        }
        if (num >= 0.5) {
          if (ref.current) {
            if (!ref2.current) {
              closure_1_10();
              tmp7.current = true;
            }
            ref.current = tmp5;
          }
        }
        if (num < 0.5) {
          ref2.current = false;
        }
      });
    }
  }, 1000);
  return ref;
});