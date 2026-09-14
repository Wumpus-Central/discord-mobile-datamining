// discord_app/actions/PruneGuildModalActionCreators.tsx
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("actions/PruneGuildModalActionCreators.tsx");

export default {
  updateEstimate(arg0) {
    closure_0 = arg0;
    asyncGeneratorStep = arg2;
    return (async () => {
      const HTTP = v3(1270).HTTP;
      const request = {
        url: Endpoints.GUILD_PRUNE(closure_0),
        query: { days: num, include_roles },
        oldFormErrors: true,
        rejectWithError: v3(1270).rejectWithMigratedError(),
      };
      await HTTP.get(request);
      return value.body.pruned;
    })();
  },
  updateEstimateV2(id, arg1) {
    closure_0 = id;
    asyncGeneratorStep = arg2;
    return (async () => {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const HTTP = v3(1270).HTTP;
              const request = {
                url: Endpoints.GUILD_PRUNE_V2(closure_0),
                query: null,
                oldFormErrors: true,
                rejectWithError: null,
              };
              const obj4 = { days: num, include_roles };
              request.query = obj4;
              request.rejectWithError = v3(1270).rejectWithMigratedError();
              dependencyMap = 1;
              v3 = 1;
              const obj5 = { value: HTTP.get(request), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            v3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp5) {
          v3 = tmp;
          throw tmp5;
        }
      }
    })();
  },
  prune(arg0, days, include_roles) {
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: Endpoints.GUILD_PRUNE(arg0),
      body: { days, compute_prune_count: false, include_roles },
      oldFormErrors: true,
      rejectWithError: HTTPUtils.rejectWithMigratedError(),
    };
    return HTTP.post(request);
  },
};
