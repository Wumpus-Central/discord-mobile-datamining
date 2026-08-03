import addApplication from "addApplication";
import addSku from "addSku";
import addRegularStoreListing from "addRegularStoreListing";
import { Endpoints } from "ME";

const require = arg1;
let result = require("addRegularStoreListing").fileFinishedImporting("actions/StoreListingActionCreators.tsx");

export const fetchStoreListingsForApplications = function fetchStoreListingsForApplications(arr) {
  const found = arr.filter((arg0) => {
    application = application.getApplication(arg0);
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
    let obj = require(4431) /* _httpGetWithCountryCodeQuery */;
    obj = { url: null, query: null, oldFormErrors: true, rejectWithError: null };
    obj[0] = Endpoints.STORE_PUBLISHED_LISTINGS_APPLICATIONS;
    obj = { application_ids: null };
    obj[0] = found;
    obj[1] = obj;
    obj[3] = require(530) /* sendRequest */.rejectWithMigratedError();
    const result = obj.httpGetWithCountryCodeQuery(obj);
    resolved = result.then((body) => {
      let obj = callback(table[6]);
      obj = { type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: body.body };
      obj.dispatch(obj);
    });
    const obj4 = require(530) /* sendRequest */;
  }
  return resolved;
};
export const fetchAllStoreListingsForApplication = function fetchAllStoreListingsForApplication(closure_1) {
  let obj = require(4431) /* _httpGetWithCountryCodeQuery */;
  obj = { url: Endpoints.STORE_PUBLISHED_LISTINGS_SKUS, query: obj, oldFormErrors: true, rejectWithError: null };
  obj = { application_id: closure_1 };
  obj[3] = require(530) /* sendRequest */.rejectWithMigratedError();
  const result = obj.httpGetWithCountryCodeQuery(obj);
  return result.then((body) => {
    let obj = callback(table[6]);
    obj = {
      type: "STORE_LISTINGS_FETCH_SUCCESS",
      storeListings: body.map((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.published = true;
        return obj;
      })
    };
    body = body.body;
    obj.dispatch(obj);
    return body.body;
  });
};
export const fetchStoreListingForSku = function fetchStoreListingForSku(skuId) {
  const _require = skuId;
  const value = addSku.get(skuId);
  let result = null != value;
  if (result) {
    let obj = _require(6504);
    result = obj.isTestModeForApplication(value.applicationId);
  }
  const importDefault = result;
  obj = { type: "STORE_LISTINGS_FETCH_START", skuId };
  importDefault(709).dispatch(obj);
  const obj2 = importDefault(709);
  const tmp7 = _require;
  if (result) {
    let STORE_LISTINGS_SKUResult = obj5.STORE_LISTINGS_SKU(skuId);
  } else {
    STORE_LISTINGS_SKUResult = obj5.STORE_PUBLISHED_LISTINGS_SKU(skuId);
  }
  obj = { url: STORE_LISTINGS_SKUResult, rejectWithError: null };
  const obj4 = _require(4431);
  obj[1] = tmp7(530).rejectWithMigratedError();
  const result1 = obj4.httpGetWithCountryCodeQuery(obj);
  const tmp7Result = tmp7(530);
  return result1.then((body) => {
    const dispatch = result(outer1_2[6]).dispatch;
    if (closure_1) {
      let obj = { type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: null };
      obj[1] = body.body;
      dispatch(obj);
    } else {
      obj = { type: "STORE_LISTING_FETCH_SUCCESS", storeListing: null };
      obj[1] = body.body;
      dispatch(obj);
    }
  }).catch(() => {
    let obj = result(outer1_2[6]);
    obj = { type: "SKU_FETCH_FAIL", skuId: closure_0 };
    obj.dispatch(obj);
  });
};