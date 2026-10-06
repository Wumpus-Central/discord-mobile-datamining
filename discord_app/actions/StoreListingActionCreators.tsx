// === Module 14356: StoreListingActionCreators ===

// Module 14356 (StoreListingActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import StoreUtils from "StoreUtils" /* 5329 */;
import ApplicationStore from "ApplicationStore" /* 5124 */;
import SKUStore from "SKUStore" /* 5702 */;
import StoreListingStore from "StoreListingStore" /* 14357 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, application, body, importDefault;

const Endpoints = Constants.Endpoints;
let result = size.fileFinishedImporting("actions/StoreListingActionCreators.tsx");

export const fetchStoreListingsForApplications = function fetchStoreListingsForApplications(arr) {
  let forSKU;
  let obj;
  let obj3;
  let resolved;
  const found = arr.filter((item) => {
    application = application.getApplication(item);
    if (null == application) {
      return true;
    } else {
      const destinationSkuId = application.destinationSkuId;
      const tmp2 = null == destinationSkuId || null == forSKU.getForSKU(destinationSkuId);
      return tmp2;
    }
  });
  if (0 === found.length) {
    resolved = Promise.resolve();
  } else {
    const request = { url: Endpoints.STORE_PUBLISHED_LISTINGS_APPLICATIONS, query: obj, oldFormErrors: true, rejectWithError: obj3.rejectWithMigratedError() };
    obj = { application_ids: found };
    const httpGetWithCountryCodeQuery = StoreUtils.httpGetWithCountryCodeQuery;
    StoreUtils;
    obj3 = HTTPUtils;
    const result = httpGetWithCountryCodeQuery(request);
    resolved = result.then((body) => {
      const obj = DispatcherDefault;
      const obj2 = { type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: body.body };
      obj.dispatch(obj2);
    });
  }
  return resolved;
};
export const fetchAllStoreListingsForApplication = function fetchAllStoreListingsForApplication(id) {
  let obj;
  let obj3;
  const tmp = StoreUtils;
  const request = { url: Endpoints.STORE_PUBLISHED_LISTINGS_SKUS, query: obj, oldFormErrors: true, rejectWithError: obj3.rejectWithMigratedError() };
  obj = { application_id: id };
  const httpGetWithCountryCodeQuery = tmp.httpGetWithCountryCodeQuery;
  obj3 = HTTPUtils;
  const result = httpGetWithCountryCodeQuery(request);
  return result.then((body) => {
    let obj = {
      type: "STORE_LISTINGS_FETCH_SUCCESS",
      storeListings: body.map((item) => {
        const obj = { published: true };
        const merged = Object.assign(item);
        return obj;
      })
    };
    body = body.body;
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    dispatch(obj);
    return body.body;
  });
};
export const fetchStoreListingForSku = function fetchStoreListingForSku(skuId) {
  let STORE_LISTINGS_SKUResult;
  let tmp7Result;
  _require = skuId;
  const value = SKUStore.get(skuId);
  let result = null != value;
  if (result) {
    let obj = require("TestModeUtils");
    result = obj.isTestModeForApplication(value.applicationId);
  }
  importDefault = result;
  let obj2 = DispatcherDefault;
  const obj3 = { type: "STORE_LISTINGS_FETCH_START", skuId };
  obj2.dispatch(obj3);
  const httpGetWithCountryCodeQuery = require("StoreUtils").httpGetWithCountryCodeQuery;
  require("StoreUtils");
  const tmp7 = _require;
  if (result) {
    STORE_LISTINGS_SKUResult = Endpoints.STORE_LISTINGS_SKU(skuId);
  } else {
    STORE_LISTINGS_SKUResult = Endpoints.STORE_PUBLISHED_LISTINGS_SKU(skuId);
  }
  const obj5 = { url: STORE_LISTINGS_SKUResult, rejectWithError: tmp7Result.rejectWithMigratedError() };
  tmp7Result = tmp7(1282);
  const result1 = httpGetWithCountryCodeQuery(obj5);
  const nextPromise = result1.then((body) => {
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    if (importDefault) {
      const obj2 = { type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: body.body };
      dispatch(obj2);
    } else {
      const obj = { type: "STORE_LISTING_FETCH_SUCCESS", storeListing: body.body };
      dispatch(obj);
    }
  });
  return nextPromise.catch(() => {
    const obj = DispatcherDefault;
    const obj2 = { type: "SKU_FETCH_FAIL", skuId };
    obj.dispatch(obj2);
  });
};