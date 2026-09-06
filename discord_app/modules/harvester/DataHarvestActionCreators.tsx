// === Module 14863: DataHarvestActionCreators ===

// Module 14863 (DataHarvestActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 6984 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/harvester/DataHarvestActionCreators.tsx");

export const getDataHarvestStatus = function getDataHarvestStatus() {
  let obj = DispatcherDefault;
  obj.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" });
  const HTTP = HTTPUtils.HTTP;
  obj = { url: Endpoints.USER_HARVEST, oldFormErrors: true, rejectWithError: false };
  value = HTTP.get(obj);
  return value.then((body) => {
    const obj = { type: "UPDATE_DATA_HARVEST_TYPE", harvestType: body.body };
    obj.dispatch(obj);
  }).catch((error) => {
    const obj = { type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error };
    obj.dispatch(obj);
  });
};
export const requestDataHarvest = function requestDataHarvest(mapped) {
  const harvest = UserSettingsAccountActionCreators.requestHarvest(mapped);
  return harvest.then((body) => {
    if (tmp) {
      const obj = { type: "UPDATE_DATA_HARVEST_TYPE", harvestType: body.body };
      obj.dispatch(obj);
    }
    return body;
  });
};