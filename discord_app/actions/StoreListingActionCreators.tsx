// discord_app/actions/StoreListingActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import StoreUtils from "../utils/StoreUtils.tsx";
import ApplicationStore from "../modules/applications/ApplicationStore.tsx";
import SKUStore from "../stores/game_store/SKUStore.tsx";
import StoreListingStore from "../stores/game_store/StoreListingStore.tsx";

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
    const request = {
      url: Endpoints.STORE_PUBLISHED_LISTINGS_APPLICATIONS,
      query: null,
      oldFormErrors: true,
      rejectWithError: null,
    };
    let obj = { application_ids: found };
    request.query = obj;
    request.rejectWithError = HTTPUtils.rejectWithMigratedError();
    const result = obj.httpGetWithCountryCodeQuery(request);
    resolved = result.then((body) => {
      const obj = { type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: body.body };
      obj.dispatch(obj);
    });
  }
  return resolved;
};
export const fetchAllStoreListingsForApplication = function fetchAllStoreListingsForApplication(application_id) {
  const request = {
    url: Endpoints.STORE_PUBLISHED_LISTINGS_SKUS,
    query: null,
    oldFormErrors: true,
    rejectWithError: HTTPUtils.rejectWithMigratedError(),
  };
  let obj = { application_id };
  request.query = obj;
  const result = obj.httpGetWithCountryCodeQuery(request);
  return result.then((body) => {
    let obj = { type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: null };
    body = body.body;
    obj.storeListings = body.map((item) => {
      const obj = {};
      const merged = Object.assign(item);
      obj.published = true;
      return obj;
    });
    obj.dispatch(obj);
    return body.body;
  });
};
export const fetchStoreListingForSku = function fetchStoreListingForSku(skuId) {
  _require = skuId;
  value = SKUStore.get(skuId);
  let result = null != value;
  if (result) {
    let obj = require("TestModeUtils");
    result = obj.isTestModeForApplication(value.applicationId);
  }
  importDefault = result;
  obj = { type: "STORE_LISTINGS_FETCH_START", skuId };
  DispatcherDefault.dispatch(obj);
  const tmp7 = _require;
  if (result) {
    let STORE_LISTINGS_SKUResult = obj5.STORE_LISTINGS_SKU(skuId);
  } else {
    STORE_LISTINGS_SKUResult = obj5.STORE_PUBLISHED_LISTINGS_SKU(skuId);
  }
  obj = { url: STORE_LISTINGS_SKUResult, rejectWithError: null };
  const obj4 = require("StoreUtils");
  obj.rejectWithError = tmp7(1272).rejectWithMigratedError();
  const result1 = obj4.httpGetWithCountryCodeQuery(obj);
  const tmp7Result = tmp7(1272);
  return result1
    .then((body) => {
      const dispatch = DispatcherDefault.dispatch;
      if (result) {
        let obj = { type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: body.body };
        dispatch(obj);
      } else {
        obj = { type: "STORE_LISTING_FETCH_SUCCESS", storeListing: body.body };
        dispatch(obj);
      }
    })
    .catch(() => {
      const obj = { type: "SKU_FETCH_FAIL", skuId };
      obj.dispatch(obj);
    });
};
