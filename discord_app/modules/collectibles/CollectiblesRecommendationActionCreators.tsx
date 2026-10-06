// === Module 14505: CollectiblesRecommendationActionCreators ===

// Module 14505 (CollectiblesRecommendationActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c4, c5, closure_2;

let obj = function _maybeFetchCollectiblesRecommendations() {
  obj = _asyncToGenerator(async function() {
    let items;
    let obj10;
    let obj6;
    let recommended_items;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let body;
        let aPIError;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            body = undefined;
            aPIError = undefined;
            const obj9 = DispatcherDefault;
            obj9.dispatch({ type: "COLLECTIBLES_RECOMMENDATIONS_FETCH_START" });
            c3 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: "/storefront/recommended-items", query: obj6, rejectWithError: true };
            obj6 = { application_ids: items, limit: 100 };
            items = [closure_2_4];
            c4 = 2;
            c5 = 1;
            const obj7 = { value: HTTP.get(request), done: false };
            return obj7;
          }
        } else {
          if (1 === c4) {
            c3 = 0;
            const self = this;
            const self2 = this;
            aPIError = new closure_129_0(closure_129_2[4]).APIError(closure_2);
            const obj4 = closure_129_0(closure_129_2[5]);
            const result = obj4.captureOrIgnoreApiError(aPIError);
            const obj5 = closure_129_1(closure_129_2[2]);
            obj5.dispatch({ type: "COLLECTIBLES_RECOMMENDATIONS_FETCH_FAILURE" });
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            body = value;
            obj = { type: "COLLECTIBLES_RECOMMENDATIONS_FETCH_SUCCESS", recommendation: obj10 };
            obj10 = { skuIds: recommended_items.map((sku_id) => sku_id.sku_id) };
            recommended_items = body.body.recommended_items;
            const dispatch = closure_129_1(closure_129_2[2]).dispatch;
            const tmp9 = closure_129_1(closure_129_2[2]);
            dispatch(obj);
            c3 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp28) {
        closure_2 = tmp28;
        if (0 === c3) {
          c5 = 3;
          throw tmp28;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
let closure_4 = Constants.COLLECTIBLES_APPLICATION_ID;
let result = size.fileFinishedImporting("modules/collectibles/CollectiblesRecommendationActionCreators.tsx");

export const maybeFetchCollectiblesRecommendations = function maybeFetchCollectiblesRecommendations() {
  return obj(...arguments);
};