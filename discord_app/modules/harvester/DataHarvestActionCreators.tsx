// === Module 14318: getDataHarvestStatus ===

// Module 14318 (getDataHarvestStatus)
import set from "set" /* 2 */;
import sendRequest from "sendRequest" /* 530 */;
import ME from "ME" /* 676 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import saveProfileAndAccountRequest from "saveProfileAndAccountRequest" /* 8665 */;

const Endpoints = ME.Endpoints;
const result = set.fileFinishedImporting("modules/harvester/DataHarvestActionCreators.tsx");

export const getDataHarvestStatus = function getDataHarvestStatus() {
  let obj = dispatcherDefault;
  obj.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" });
  const HTTP = sendRequest.HTTP;
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
  const harvest = saveProfileAndAccountRequest.requestHarvest(mapped);
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