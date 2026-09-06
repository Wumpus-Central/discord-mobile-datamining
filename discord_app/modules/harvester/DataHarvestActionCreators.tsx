// discord_app/modules/harvester/DataHarvestActionCreators.tsx
import set from "../../../_runtime/00002_set.js";
import dispatcherDefault from "../../Dispatcher.tsx";
import ME from "../../Constants.tsx";
import sendRequest from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import saveProfileAndAccountRequest from "../../actions/UserSettingsAccountActionCreators.tsx";

const Endpoints = ME.Endpoints;
const result = set.fileFinishedImporting("modules/harvester/DataHarvestActionCreators.tsx");

export const getDataHarvestStatus = function getDataHarvestStatus() {
  let obj = dispatcherDefault;
  obj.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" });
  const HTTP = sendRequest.HTTP;
  obj = { url: Endpoints.USER_HARVEST, oldFormErrors: true, rejectWithError: false };
  const value = HTTP.get(obj);
  return value
    .then((body) => {
      let obj = callback(573);
      obj = { type: "UPDATE_DATA_HARVEST_TYPE", harvestType: body.body };
      obj.dispatch(obj);
    })
    .catch((error) => {
      let obj = callback(573);
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
