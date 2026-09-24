// === Module 15209: DataHarvestActionCreators ===

// Module 15209 (DataHarvestActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 7317 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/harvester/DataHarvestActionCreators.tsx");

export const getDataHarvestStatus = function getDataHarvestStatus() {
  DispatcherDefault.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" });
  const HTTP = HTTPUtils.HTTP;
  value = HTTP.get({ url: Endpoints.USER_HARVEST, oldFormErrors: true, rejectWithError: false });
  const obj2 = { url: Endpoints.USER_HARVEST, oldFormErrors: true, rejectWithError: false };
  return value.then((body) => {
    DispatcherDefault.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: body.body });
  }).catch((error) => {
    DispatcherDefault.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error });
  });
};
export const requestDataHarvest = function requestDataHarvest(mapped) {
  const harvest = UserSettingsAccountActionCreators.requestHarvest(mapped);
  return harvest.then((body) => {
    if (tmp) {
      const obj2 = { type: "UPDATE_DATA_HARVEST_TYPE", harvestType: body.body };
      DispatcherDefault.dispatch(obj2);
    }
    return body;
  });
};