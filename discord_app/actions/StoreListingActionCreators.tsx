// discord_app/actions/StoreListingActionCreators.tsx
import sendRequest from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import _httpGetWithCountryCodeQuery from "../utils/StoreUtils.tsx";
import closure_3 from "../modules/applications/ApplicationStore.tsx";
import closure_4 from "../stores/game_store/SKUStore.tsx";
import closure_5 from "../stores/game_store/StoreListingStore.tsx";
import { Endpoints } from "../Constants.tsx";
import { isTestModeForApplication } from "../modules/game_store/TestModeUtils.tsx";
import { _httpGetWithCountryCodeQuery } from "../utils/StoreUtils.tsx";

require = arg1;
let result = require("set").fileFinishedImporting("actions/StoreListingActionCreators.tsx");

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
    let obj = _httpGetWithCountryCodeQuery;
    obj = { url: null, query: null, oldFormErrors: true, rejectWithError: null };
    obj[0] = Endpoints.STORE_PUBLISHED_LISTINGS_APPLICATIONS;
    obj = { application_ids: null };
    obj[0] = found;
    obj[1] = obj;
    obj[3] = sendRequest.rejectWithMigratedError();
    const result = obj.httpGetWithCountryCodeQuery(obj);
    resolved = result.then((body) => {
      let obj = callback(table[6]);
      obj = { type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: body.body };
      obj.dispatch(obj);
    });
    const obj4 = sendRequest;
  }
  return resolved;
};
export const fetchAllStoreListingsForApplication = function fetchAllStoreListingsForApplication(closure_1) {
  let obj = _httpGetWithCountryCodeQuery;
  obj = { url: Endpoints.STORE_PUBLISHED_LISTINGS_SKUS, query: obj, oldFormErrors: true, rejectWithError: null };
  obj = { application_id: closure_1 };
  obj[3] = sendRequest.rejectWithMigratedError();
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
      }),
    };
    body = body.body;
    obj.dispatch(obj);
    return body.body;
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
  const obj2 = dispatcherDefault;
  const tmp7 = _require;
  if (result) {
    let STORE_LISTINGS_SKUResult = obj5.STORE_LISTINGS_SKU(skuId);
  } else {
    STORE_LISTINGS_SKUResult = obj5.STORE_PUBLISHED_LISTINGS_SKU(skuId);
  }
  obj = { url: STORE_LISTINGS_SKUResult, rejectWithError: null };
  const obj4 = _httpGetWithCountryCodeQuery;
  obj[1] = tmp7(527).rejectWithMigratedError();
  const result1 = obj4.httpGetWithCountryCodeQuery(obj);
  const tmp7Result = tmp7(527);
  return result1
    .then((body) => {
      const dispatch = result(closure_1_2[6]).dispatch;
      if (closure_1) {
        let obj = { type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: null };
        obj[1] = body.body;
        dispatch(obj);
      } else {
        obj = { type: "STORE_LISTING_FETCH_SUCCESS", storeListing: null };
        obj[1] = body.body;
        dispatch(obj);
      }
    })
    .catch(() => {
      let obj = result(closure_1_2[6]);
      obj = { type: "SKU_FETCH_FAIL", skuId: closure_0 };
      obj.dispatch(obj);
    });
};
