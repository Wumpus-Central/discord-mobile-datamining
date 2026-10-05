// === Module 14489: CollectiblesRecommendationActionCreators ===

// Module 14489 (CollectiblesRecommendationActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_5 = async function _maybeFetchCollectiblesRecommendations() {
  closure_1 = tmp3;
  DispatcherDefault.dispatch({ type: "COLLECTIBLES_RECOMMENDATIONS_FETCH_START" });
  const HTTP = HTTPUtils.HTTP;
  const request = { url: "/storefront/recommended-items", query: null, rejectWithError: true };
  const obj4 = { application_ids: null, limit: 100 };
  const items = [React4];
  obj4.application_ids = items;
  request.query = obj4;
  await HTTP.get(request);
  if (1 === tmp7) {
    c3 = 0;
    closure_128_2 = closure_2;
    const aPIError = new closure_129_0(closure_129_2[4]).APIError(closure_128_2);
    closure_128_1 = aPIError;
    const result = closure_129_0(closure_129_2[5]).captureOrIgnoreApiError(closure_128_1);
    closure_129_0(closure_129_2[5]);
    closure_129_1(closure_129_2[2]).dispatch({ type: "COLLECTIBLES_RECOMMENDATIONS_FETCH_FAILURE" });
    c5 = 3;
    closure_129_1(closure_129_2[2]);
  } else if (arg0 === 1) {
    c5 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_128_0 = value;
    const obj8 = { type: "COLLECTIBLES_RECOMMENDATIONS_FETCH_SUCCESS", recommendation: null };
    const obj9 = { skuIds: null };
    const recommended_items = closure_128_0.body.recommended_items;
    obj9.skuIds = recommended_items.map((sku_id) => sku_id.sku_id);
    obj8.recommendation = obj9;
    closure_129_1(closure_129_2[2]).dispatch(obj8);
    c3 = 0;
    closure_129_1(closure_129_2[2]);
  }
  return value;
};
let closure_4 = fn(1085).COLLECTIBLES_APPLICATION_ID;
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/CollectiblesRecommendationActionCreators.tsx");

export const maybeFetchCollectiblesRecommendations = function maybeFetchCollectiblesRecommendations() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};