// discord_app/actions/RegionActionCreators.tsx
import set from "../../_runtime/00002_set.js";
import ME from "../Constants.tsx";
import sendRequest from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";

const Endpoints = ME.Endpoints;
const result = set.fileFinishedImporting("actions/RegionActionCreators.tsx");

export default {
  fetchRegions(id) {
    const _require = id;
    const HTTP = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
    const value = HTTP.get({ url: Endpoints.REGIONS(id), retries: 1, oldFormErrors: true, rejectWithError: true });
    value.then(
      (body) => {
        let obj = closure_1_1(closure_1_2[2]);
        obj = { type: "LOAD_REGIONS", regions: body.body, guildId: closure_0 };
        return obj.dispatch(obj);
      },
      () => {
        let obj = closure_1_1(closure_1_2[2]);
        obj = { type: "LOAD_REGIONS", regions: [], guildId: closure_0 };
        return obj.dispatch(obj);
      },
    );
  },
  changeCallRegion(id, region) {
    const HTTP = sendRequest.HTTP;
    obj = { url: Endpoints.CALL(id), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { region };
    HTTP.patch(obj);
  },
};
