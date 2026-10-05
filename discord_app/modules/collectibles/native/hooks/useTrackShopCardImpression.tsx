// === Module 8420: useTrackShopCardImpression ===

// Module 8420 (useTrackShopCardImpression)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7064 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7065 */;
import useTrackImpression from "useTrackImpression" /* 8422 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, measureResult, ref;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, skuId) => {
  let closure_0;
  let collectiblesAnalyticsContext;
  let tmp10;
  let tmp11;
  let tmp7;
  _require = arg0;
  importDefault = skuId;
  let obj = require("react");
  const cResult = obj.c(17);
  let obj2 = require("CollectiblesAnalyticsContext");
  collectiblesAnalyticsContext = obj2.useCollectiblesAnalyticsContext();
  const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  size = require("useWindowDimensions")();
  const width = size.width;
  const height = size.height;
  const obj3 = require("useCurrentUser");
  const currentUser = obj3.useCurrentUser();
  const tmp = _require;
  const tmp5 = importDefault;
  if (cResult[0] !== currentUser) {
    let tmpResult = tmp(tmp2[7]);
    const shopDiscountSource = tmpResult.getShopDiscountSource(currentUser);
    let num = 0;
    cResult[0] = currentUser;
    cResult[1] = shopDiscountSource;
    tmp7 = shopDiscountSource;
  } else {
    tmp7 = cResult[1];
  }
  let closure_6 = tmp7;
  ref = analyticsLocations.useRef(null);
  let closure_8 = analyticsLocations.useRef(false);
  let closure_9 = analyticsLocations.useRef(false);
  const obj5 = analyticsLocations;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function k() {
      closure_8.current = false;
      closure_9.current = false;
    };
    cResult[2] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] !== skuId.skuId) {
    const items = [skuId.skuId];
    cResult[3] = skuId.skuId;
    cResult[4] = items;
    tmp11 = items;
  } else {
    tmp11 = cResult[4];
  }
  const effect = obj5.useEffect(tmp10, tmp11);
  let cardId;
  const tmp13 = cResult[5];
  if (collectiblesAnalyticsContext != null) {
    cardId = collectiblesAnalyticsContext.cardId;
  }
  if (tmp13 === cardId) {
    let sessionId;
    const tmp15 = cResult[6];
    if (collectiblesAnalyticsContext != null) {
      sessionId = collectiblesAnalyticsContext.sessionId;
    }
    if (tmp15 === sessionId) {
      let tilePosition;
      const tmp17 = cResult[7];
      if (collectiblesAnalyticsContext != null) {
        tilePosition = collectiblesAnalyticsContext.tilePosition;
      }
      if (tmp17 === tilePosition) {
        if (cResult[8] === analyticsLocations) {
          if (cResult[9] === tmp7) {
            if (cResult[10] === arg0) {
              let tmp19;
              if (cResult[11] === skuId.skuId) {
                tmp19 = cResult[12];
              }
              let closure_10 = tmp19;
              if (cResult[13] === tmp19) {
                if (cResult[14] === height) {
                  let tmp23;
                  if (cResult[15] === width) {
                    tmp23 = cResult[16];
                  }
                  tmp5(collectiblesAnalyticsContext[11])(tmp23, 1000);
                  class P {
                    constructor() {
                      current = closure_7.current;
                      if (current != null) {
                        measureResult = current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
                          const bound = Math.min(arg4 + arg2, width);
                          const max2 = Math.max;
                          const maxResult = max(0, bound - Math.max(arg4, 0));
                          const bound1 = Math.min(arg5 + arg3, height);
                          const result = arg2 * arg3;
                          let num = 0;
                          if (result > 0) {
                            num = maxResult * max2(0, bound1 - Math.max(arg5, 0)) / result;
                          }
                          if (num >= 0.5) {
                            if (ref.current) {
                              if (!ref2.current) {
                                closure_1_10();
                                tmp7.current = true;
                              }
                              ref.current = num >= 0.5;
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
                      const max2 = Math.max;
                      const maxResult = max(0, bound - Math.max(arg4, 0));
                      const bound1 = Math.min(arg5 + arg3, height);
                      const result = arg2 * arg3;
                      let num = 0;
                      if (result > 0) {
                        num = maxResult * max2(0, bound1 - Math.max(arg5, 0)) / result;
                      }
                      if (num >= 0.5) {
                        if (ref.current) {
                          if (!ref2.current) {
                            closure_1_10();
                            tmp7.current = true;
                          }
                          ref.current = num >= 0.5;
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
              cResult[13] = tmp19;
              cResult[14] = height;
              cResult[15] = width;
              cResult[16] = P;
              tmp23 = P;
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
      let cardId;
      let obj2;
      let sessionId;
      let tilePosition;
      let tmpResult;
      let tmpResult2;
      const tmp3 = useTrackImpression;
      const trackImpression = tmp3.trackImpression;
      const obj = { name: discord_common_AnalyticsUtils.ImpressionNames.SHOP_CARD, type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, properties: obj2 };
      obj2 = { sku_id: skuId.skuId, card_id: cardId, shop_session_id: sessionId, position_in_section: tilePosition, product_sku_ids: tmpResult.getProductSkuIds(closure_0), location_stack: analyticsLocations, discount_source: tmpResult2.getAnalyticsShopDiscountSource(closure_6) };
      cardId = undefined;
      if (collectiblesAnalyticsContext != null) {
        cardId = collectiblesAnalyticsContext.cardId;
      }
      sessionId = undefined;
      if (collectiblesAnalyticsContext != null) {
        sessionId = collectiblesAnalyticsContext.sessionId;
      }
      tilePosition = undefined;
      if (collectiblesAnalyticsContext != null) {
        tilePosition = collectiblesAnalyticsContext.tilePosition;
      }
      tmpResult = CollectiblesProductUtils;
      tmpResult2 = CollectiblesUtils;
      trackImpression(obj, false, true);
    }
  }
  cResult[7] = tilePosition1;
  cResult[8] = analyticsLocations;
  cResult[9] = tmp7;
  cResult[10] = arg0;
  cResult[11] = skuId.skuId;
  cResult[12] = S;
  tmp19 = S;
}) : ((arg0, skuId) => {
  let closure_0;
  let closure_4;
  let closure_5;
  let collectiblesAnalyticsContext;
  _require = arg0;
  importDefault = skuId;
  let obj = require("CollectiblesAnalyticsContext");
  const tmp = collectiblesAnalyticsContext;
  collectiblesAnalyticsContext = obj.useCollectiblesAnalyticsContext();
  let tmp3 = importDefault;
  const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  ({ width: closure_4, height: closure_5 } = require("useWindowDimensions")());
  require("useWindowDimensions")();
  let obj2 = require("useCurrentUser");
  const currentUser = obj2.useCurrentUser();
  const obj3 = require("CollectiblesUtils");
  const shopDiscountSource = obj3.getShopDiscountSource(currentUser);
  const tmp7 = analyticsLocations;
  ref = analyticsLocations.useRef(null);
  let closure_8 = analyticsLocations.useRef(false);
  let closure_9 = analyticsLocations.useRef(false);
  const items = [skuId.skuId];
  const effect = analyticsLocations.useEffect(() => {
    closure_8.current = false;
    closure_9.current = false;
  }, items);
  const items1 = [arg0, skuId, , , , , ];
  let cardId;
  const useCallback = analyticsLocations.useCallback;
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
  let closure_10 = useCallback(() => {
    let cardId;
    let obj2;
    let sessionId;
    let tilePosition;
    let tmpResult;
    let tmpResult2;
    const tmp3 = useTrackImpression;
    const trackImpression = tmp3.trackImpression;
    const obj = { name: discord_common_AnalyticsUtils.ImpressionNames.SHOP_CARD, type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, properties: obj2 };
    obj2 = { sku_id: skuId.skuId, card_id: cardId, shop_session_id: sessionId, position_in_section: tilePosition, product_sku_ids: tmpResult.getProductSkuIds(closure_0), location_stack: analyticsLocations, discount_source: tmpResult2.getAnalyticsShopDiscountSource(shopDiscountSource) };
    cardId = undefined;
    if (collectiblesAnalyticsContext != null) {
      cardId = collectiblesAnalyticsContext.cardId;
    }
    sessionId = undefined;
    if (collectiblesAnalyticsContext != null) {
      sessionId = collectiblesAnalyticsContext.sessionId;
    }
    tilePosition = undefined;
    if (collectiblesAnalyticsContext != null) {
      tilePosition = collectiblesAnalyticsContext.tilePosition;
    }
    tmpResult = CollectiblesProductUtils;
    tmpResult2 = CollectiblesUtils;
    trackImpression(obj, false, true);
  }, items1);
  tmp3(tmp[11])(() => {
    let ref2;
    const current = ref.current;
    if (current != null) {
      current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
        const bound = Math.min(arg4 + arg2, closure_1_4);
        const max2 = Math.max;
        const maxResult = max(0, bound - Math.max(arg4, 0));
        const bound1 = Math.min(arg5 + arg3, closure_1_5);
        const result = arg2 * arg3;
        let num = 0;
        if (result > 0) {
          num = maxResult * max2(0, bound1 - Math.max(arg5, 0)) / result;
        }
        if (num >= 0.5) {
          if (ref.current) {
            if (!ref2.current) {
              closure_1_10();
              tmp7.current = true;
            }
            ref.current = num >= 0.5;
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
let size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/native/hooks/useTrackShopCardImpression.tsx");

export const useTrackShopCardImpression = tmp2;