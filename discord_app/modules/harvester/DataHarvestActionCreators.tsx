// discord_app/modules/harvester/DataHarvestActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import UserSettingsAccountActionCreators from "../../actions/UserSettingsAccountActionCreators.tsx";
import size from "../../../_runtime/metro/00002__.js";

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/harvester/DataHarvestActionCreators.tsx");

export const getDataHarvestStatus = function getDataHarvestStatus() {
  DispatcherDefault.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" });
  const HTTP = HTTPUtils.HTTP;
  value = HTTP.get({ url: Endpoints.USER_HARVEST, oldFormErrors: true, rejectWithError: false });
  const obj2 = { url: Endpoints.USER_HARVEST, oldFormErrors: true, rejectWithError: false };
  return value
    .then((body) => {
      DispatcherDefault.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: body.body });
    })
    .catch((error) => {
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
