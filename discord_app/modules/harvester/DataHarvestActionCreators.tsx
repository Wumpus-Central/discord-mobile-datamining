// === Module 14220: getDataHarvestStatus ===

// Module 14220 (getDataHarvestStatus)
import obj132 from "obj132" /* 2 */;
import sendRequest from "sendRequest" /* 530 */;
import ME from "ME" /* 676 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import saveProfileAndAccountRequest from "saveProfileAndAccountRequest" /* 8620 */;

const Endpoints = ME.Endpoints;
const result = obj132.fileFinishedImporting("modules/harvester/DataHarvestActionCreators.tsx");

export const getDataHarvestStatus = function getDataHarvestStatus() {
  let obj = dispatcherDefault;
  obj.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" });
  const HTTP = sendRequest.HTTP;
  obj = { url: Endpoints.USER_HARVEST, oldFormErrors: true, rejectWithError: false };
  const value = HTTP.get(obj);
  return value.then((result) => {
    callback(709);
    const obj = { type: "UPDATE_DATA_HARVEST_TYPE", harvestType: result.body };
    obj.dispatch(obj);
  }).catch((error) => {
    callback(709);
    const obj = { type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error };
    obj.dispatch(obj);
  });
};
export const requestDataHarvest = function requestDataHarvest(mapped) {
  const harvest = saveProfileAndAccountRequest.requestHarvest(mapped);
  return harvest.then((result) => {
    if (tmp) {
      callback(table[1]);
      const obj = { type: "UPDATE_DATA_HARVEST_TYPE", harvestType: null };
      obj[1] = result.body;
      obj.dispatch(obj);
    }
    return result;
  });
};