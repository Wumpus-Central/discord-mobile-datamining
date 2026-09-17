// === Module 14622: StoreListingActionCreators ===

// Module 14622 (StoreListingActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import StoreUtils from "StoreUtils" /* 4882 */;
import ApplicationStore from "ApplicationStore" /* 4868 */;
import SKUStore from "SKUStore" /* 5598 */;
import StoreListingStore from "StoreListingStore" /* 14623 */;

const require = globalThis.__r;

require = fn;
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
let result = size.fileFinishedImporting("actions/StoreListingActionCreators.tsx");

export const fetchStoreListingsForApplications = function fetchStoreListingsForApplications(arr) {
  const found = arr.filter((item) => {
    application = application.getApplication(item);
    if (null == application) {
      return true;
    } else {
      const destinationSkuId = application.destinationSkuId;
      let tmp2 = null == destinationSkuId;
      if (!tmp2) {
        tmp2 = null == forSKU.getForSKU(destinationSkuId);
      }
      return tmp2;
    }
  });
  if (0 === found.length) {
    let resolved = Promise.resolve();
  } else {
    const request = { url: Endpoints.STORE_PUBLISHED_LISTINGS_APPLICATIONS, query: null, oldFormErrors: true, rejectWithError: null };
    const obj2 = { application_ids: found };
    request.query = obj2;
    const obj = StoreUtils;
    request.rejectWithError = HTTPUtils.rejectWithMigratedError();
    const result = obj.httpGetWithCountryCodeQuery(request);
    resolved = result.then((body) => {
      DispatcherDefault.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: body.body });
    });
  }
  return resolved;
};
export const fetchAllStoreListingsForApplication = function fetchAllStoreListingsForApplication(application_id) {
  const request = { url: Endpoints.STORE_PUBLISHED_LISTINGS_SKUS, query: { application_id }, oldFormErrors: true, rejectWithError: null };
  let obj = StoreUtils;
  let obj2 = { application_id };
  request.rejectWithError = HTTPUtils.rejectWithMigratedError();
  const result = obj.httpGetWithCountryCodeQuery(request);
  return result.then((body) => {
    const obj2 = { type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: null };
    body = body.body;
    obj2.storeListings = body.map((item) => {
      const obj = {};
      const merged = Object.assign(item);
      obj.published = true;
      return obj;
    });
    DispatcherDefault.dispatch(obj2);
    return body.body;
  });
};
export const fetchStoreListingForSku = function fetchStoreListingForSku(skuId) {
  _require = skuId;
  value = SKUStore.get(skuId);
  let result = null != value;
  if (result) {
    result = require("TestModeUtils").isTestModeForApplication(value.applicationId);
    let obj = require("TestModeUtils");
  }
  importDefault = result;
  DispatcherDefault.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId });
  const obj3 = { type: "STORE_LISTINGS_FETCH_START", skuId };
  const tmp7 = _require;
  if (result) {
    let STORE_LISTINGS_SKUResult = Endpoints.STORE_LISTINGS_SKU(skuId);
  } else {
    STORE_LISTINGS_SKUResult = Endpoints.STORE_PUBLISHED_LISTINGS_SKU(skuId);
  }
  const obj6 = { url: STORE_LISTINGS_SKUResult, rejectWithError: null };
  const obj4 = require("StoreUtils");
  obj6.rejectWithError = tmp7(1271).rejectWithMigratedError();
  const result1 = obj4.httpGetWithCountryCodeQuery(obj6);
  const tmp7Result = tmp7(1271);
  return result1.then((body) => {
    const dispatch = DispatcherDefault.dispatch;
    if (result) {
      const obj2 = { type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: body.body };
      dispatch(obj2);
    } else {
      const obj = { type: "STORE_LISTING_FETCH_SUCCESS", storeListing: body.body };
      dispatch(obj);
    }
  }).catch(() => {
    DispatcherDefault.dispatch({ type: "SKU_FETCH_FAIL", skuId });
  });
};