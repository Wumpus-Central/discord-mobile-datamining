// discord_app/modules/waterwheels/interest/native/InterestGuildsAPI.tsx
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";

const require = globalThis.__r;

const require = fn;
let c3 = "/users/@me/waterwheels/interest-guilds";
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGuildsAPI.tsx");

export const INTEREST_GUILDS_ENDPOINT = "/users/@me/waterwheels/interest-guilds";
export function createInterestGuildsResource() {
  _require = asyncGeneratorStep(async (game_ids) => {
    c2 = 0;
    c1 = 0;
    return (async (arg0) => {
      const HTTP = game_ids(1282).HTTP;
      const request = {
        url,
        query: { game_ids },
        retries: 0,
        timeout: 10000,
        rejectWithError: game_ids(1282).rejectWithMigratedError(),
      };
      await HTTP.get(request);
      return value.body;
    })();
  });
  const interestGuildsResource = new require("InterestGuildsResource").InterestGuildsResource(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  });
  return interestGuildsResource;
}
