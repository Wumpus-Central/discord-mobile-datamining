// === Module 19834: InterestGuildsAPI ===

// Module 19834 (InterestGuildsAPI)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = globalThis.__r;

const require = fn;
const AnalyticEvents = fn(1071).AnalyticEvents;
let c5 = "/users/@me/waterwheels/interest-guilds";
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGuildsAPI.tsx");

export const INTEREST_GUILDS_ENDPOINT = "/users/@me/waterwheels/interest-guilds";
export function createInterestGuildsResource() {
  _require = asyncGeneratorStep(async (game_ids) => {
    c11 = 0;
    c12 = 0;
    c10 = 0;
    return (async (arg0) => {
      if (c12 === 2) {
        c12 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c12 = 2;
          if (0 === c11) {
            if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else if (arg0 === 2) {
              c12 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_8 = tmp4;
              closure_7 = tmp8;
              closure_135_0 = game_ids;
              closure_135_1 = undefined;
              closure_135_2 = undefined;
              let status;
              let body;
              closure_135_5 = undefined;
              const _performance4 = performance;
              closure_135_1 = performance.now();
              closure_135_2 = "error";
              status = null;
              body = null;
              c10 = 2;
              const HTTP = game_ids(degraded2[3]).HTTP;
              const request = { url: _null, query: null, retries: 0, timeout: 10000, rejectWithError: null };
              const obj6 = { game_ids };
              request.query = obj6;
              request.rejectWithError = game_ids(degraded2[3]).rejectWithMigratedError();
              c11 = 3;
              c12 = 1;
              const obj7 = { value: HTTP.get(request), done: false };
              return obj7;
            }
          } else if (1 === tmp8) {
            c10 = 0;
            const obj8 = { duration_ms: null, game_count: null, outcome: null, status_code: null, degraded: null, guild_count: null };
            const _Math3 = Math;
            const _Math4 = Math;
            const _performance2 = performance;
            obj8.duration_ms = Math.max(0, Math.round(performance.now() - closure_135_1));
            obj8.game_count = closure_135_0.length;
            obj8.outcome = closure_135_2;
            obj8.status_code = status;
            degraded = undefined;
            if (body != null) {
              degraded = body.degraded;
            }
            if (degraded == null) {
              degraded = null;
            }
            obj8.degraded = degraded;
            length = undefined;
            if (body != null) {
              const guilds = body.guilds;
              if (guilds != null) {
                length = guilds.length;
              }
            }
            guild_count2 = length;
            if (length == null) {
              guild_count2 = null;
            }
            obj8.guild_count = guild_count2;
            degraded(degraded2[4]).track(degraded3.INTEREST_GUILDS_FETCHED, obj8);
            throw closure_9;
          } else if (2 === tmp8) {
            c10 = 1;
            closure_135_6 = closure_9;
            let tmp34 = null != closure_135_6;
            if (tmp34) {
              tmp34 = typeof closure_135_6 === "object";
            }
            if (tmp34) {
              let tmp39 = "timeout" in closure_135_6;
              if (tmp39) {
                tmp39 = 10000 === closure_135_6.timeout;
              }
              if (tmp39) {
                closure_135_2 = "timeout";
              }
              let tmp45 = "status" in closure_135_6;
              if (tmp45) {
                tmp45 = typeof closure_135_6.status === "number";
              }
              if (tmp45) {
                tmp45 = closure_135_6.status > 0;
              }
              if (tmp45) {
                status = closure_135_6.status;
              }
            }
            throw closure_135_6;
          } else if (arg0 === 1) {
            c12 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 0;
            const obj9 = { duration_ms: null, game_count: null, outcome: null, status_code: null, degraded: null, guild_count: null };
            const _Math = Math;
            const _Math2 = Math;
            const _performance = performance;
            obj9.duration_ms = Math.max(0, Math.round(performance.now() - closure_135_1));
            obj9.game_count = closure_135_0.length;
            obj9.outcome = closure_135_2;
            obj9.status_code = status;
            let degraded1;
            if (body != null) {
              degraded1 = body.degraded;
            }
            degraded2 = degraded1;
            if (degraded1 == null) {
              degraded2 = null;
            }
            obj9.degraded = degraded2;
            let length1;
            if (body != null) {
              const guilds1 = body.guilds;
              if (guilds1 != null) {
                length1 = guilds1.length;
              }
            }
            guild_count = length1;
            if (length1 == null) {
              guild_count = null;
            }
            obj9.guild_count = guild_count;
            degraded(degraded2[4]).track(degraded3.INTEREST_GUILDS_FETCHED, obj9);
            c12 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            closure_135_5 = value;
            status = closure_135_5.status;
            body = closure_135_5.body;
            closure_135_2 = "success";
            c10 = 0;
            const obj12 = { duration_ms: null, game_count: null, outcome: null, status_code: null, degraded: null, guild_count: null };
            const _Math5 = Math;
            const _Math6 = Math;
            const _performance3 = performance;
            obj12.duration_ms = Math.max(0, Math.round(performance.now() - closure_135_1));
            obj12.game_count = closure_135_0.length;
            obj12.outcome = closure_135_2;
            obj12.status_code = status;
            degraded2 = undefined;
            if (body != null) {
              degraded2 = body.degraded;
            }
            degraded3 = degraded2;
            if (degraded2 == null) {
              degraded3 = null;
            }
            obj12.degraded = degraded3;
            let length2;
            if (body != null) {
              const guilds2 = body.guilds;
              if (guilds2 != null) {
                length2 = guilds2.length;
              }
            }
            _null = length2;
            if (length2 == null) {
              _null = null;
            }
            obj12.guild_count = _null;
            degraded(degraded2[4]).track(degraded3.INTEREST_GUILDS_FETCHED, obj12);
            c12 = 3;
            const obj = { value: body, done: true };
            return obj;
          }
        } catch (tmp71) {
          closure_9 = tmp71;
          if (tmp5 === c10) {
            c12 = tmp3;
            throw tmp71;
          } else if (tmp2 === tmp73) {
            c11 = tmp2;
          } else {
            c11 = tmp;
          }
        }
      }
    })();
  });
  const interestGuildsResource = new require("InterestGuildsResource").InterestGuildsResource(function() {
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