// discord_app/actions/StoreListingActionCreators.tsx
import sendRequest from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import _httpGetWithCountryCodeQuery from "../utils/StoreUtils.tsx";
import addApplication from "../modules/applications/ApplicationStore.tsx";
import addSku from "../stores/game_store/SKUStore.tsx";
import addRegularStoreListing from "../stores/game_store/StoreListingStore.tsx";
import { Endpoints } from "../Constants.tsx";
import { isTestModeForApplication } from "../modules/game_store/TestModeUtils.tsx";
import { _httpGetWithCountryCodeQuery } from "../utils/StoreUtils.tsx";

require = fn;
let result = require("obj132").fileFinishedImporting("actions/StoreListingActionCreators.tsx");

export const fetchStoreListingsForApplications = function fetchStoreListingsForApplications(arr) {
  const found = arr.filter((item, index) => {
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
    let obj = { url: null, query: null, oldFormErrors: true, rejectWithError: null };
    obj[0] = Endpoints.STORE_PUBLISHED_LISTINGS_APPLICATIONS;
    obj = { application_ids: null };
    obj[0] = found;
    obj[1] = obj;
    obj[3] = sendRequest.rejectWithMigratedError();
    const result = obj.httpGetWithCountryCodeQuery(obj);
    resolved = result.then((result) => {
      callback(table[6]);
      const obj = { type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: result.body };
      obj.dispatch(obj);
    });
  }
  return resolved;
};
export const fetchAllStoreListingsForApplication = function fetchAllStoreListingsForApplication(closure_1) {
  let obj = _httpGetWithCountryCodeQuery;
  obj = { application_id: closure_1 };
  obj[3] = sendRequest.rejectWithMigratedError();
  const result = obj.httpGetWithCountryCodeQuery(obj);
  return result.then((result) => {
    callback(table[6]);
    let obj = {
      type: "STORE_LISTINGS_FETCH_SUCCESS",
      storeListings: body.map((item, index) => {
        const obj = {};
        const merged = Object.assign(item);
        obj.published = true;
        return obj;
      })
    };
    body = result.body;
    obj.dispatch(obj);
    return result.body;
  });
};
export const fetchStoreListingForSku = function fetchStoreListingForSku(skuId) {
  const _require = skuId;
  const value = closure_4.get(skuId);
  let result = null != value;
  if (result) {
    let obj = isTestModeForApplication;
    result = obj.isTestModeForApplication(value.applicationId);
  }
  importDefault = result;
  obj = { type: "STORE_LISTINGS_FETCH_START", skuId };
  dispatcherDefault.dispatch(obj);
  const tmp7 = _require;
  if (result) {
    let STORE_LISTINGS_SKUResult = Endpoints.STORE_LISTINGS_SKU(skuId);
  } else {
    STORE_LISTINGS_SKUResult = Endpoints.STORE_PUBLISHED_LISTINGS_SKU(skuId);
  }
  obj = { url: STORE_LISTINGS_SKUResult, rejectWithError: null };
  const obj4 = _httpGetWithCountryCodeQuery;
  obj[1] = tmp7(530).rejectWithMigratedError();
  const result1 = obj4.httpGetWithCountryCodeQuery(obj);
  const tmp7Result = tmp7(530);
  return result1.then((result) => {
    const dispatch = result(dependencyMap[6]).dispatch;
    if (closure_1) {
      let obj = { type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: null };
      obj[1] = result.body;
      dispatch(obj);
    } else {
      obj = { type: "STORE_LISTING_FETCH_SUCCESS", storeListing: null };
      obj[1] = result.body;
      dispatch(obj);
    }
  }).catch((error) => {
    result(dependencyMap[6]);
    const obj = { type: "SKU_FETCH_FAIL", skuId: closure_0 };
    obj.dispatch(obj);
  });
};