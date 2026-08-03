// === Module 13980: getDataHarvestStatus ===

// Module 13980 (getDataHarvestStatus)
import { Endpoints } from "ME";

const result = require("sendRequest").fileFinishedImporting("modules/harvester/DataHarvestActionCreators.tsx");

export const getDataHarvestStatus = function getDataHarvestStatus() {
  let obj = importDefault(709);
  obj.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" });
  const HTTP = require(530) /* sendRequest */.HTTP;
  obj = { url: Endpoints.USER_HARVEST, oldFormErrors: true, rejectWithError: false };
  const value = HTTP.get(obj);
  return value.then((body) => {
    let obj = callback(709);
    obj = { type: "UPDATE_DATA_HARVEST_TYPE", harvestType: body.body };
    obj.dispatch(obj);
  }).catch((error) => {
    let obj = callback(709);
    obj = { type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error };
    obj.dispatch(obj);
  });
};
export const requestDataHarvest = function requestDataHarvest(mapped) {
  const harvest = require(9408) /* saveProfileAndAccountRequest */.requestHarvest(mapped);
  return harvest.then((body) => {
    if (tmp) {
      let obj = callback(table[1]);
      obj = { type: "UPDATE_DATA_HARVEST_TYPE", harvestType: null };
      obj[1] = body.body;
      obj.dispatch(obj);
    }
    return body;
  });
};