// _runtime/09095__nitroFetchOnWorklet.js
import _mod1708 from "metro/01708__.js";
import asyncGeneratorStep from "00005_asyncGeneratorStep.js";

require = arg1;
let closure_5 = async function _nitroFetchOnWorklet(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_5 = tmp3;
          closure_4 = tmp41;
          closure_132_0 = closure_0;
          closure_132_1 = closure_1;
          closure_132_2 = closure_2;
          let runOnRuntimeAsync;
          closure_132_4 = undefined;
          closure_132_5 = undefined;
          closure_132_6 = undefined;
          let preferBytes;
          if (asyncGeneratorStep != null) {
            preferBytes = asyncGeneratorStep.preferBytes;
          }
          closure_132_5 = true === preferBytes;
          c6 = 1;
          let runtimeName;
          if (asyncGeneratorStep != null) {
            runtimeName = asyncGeneratorStep.runtimeName;
          }
          closure_132_4 = (function ensureWorkletRuntime() {
            let str = runtimeName;
            if (runtimeName === undefined) {
              str = "nitro-fetch";
            }
            try {
              if (workletRuntime == null) {
                workletRuntime = closure_1_0(closure_1_1[1]).createWorkletRuntime(str);
              }
              return workletRuntime;
            } catch (err) {
              const _console = console;
              console.warn("react-native-worklets not available");
            }
          })(runtimeName);
          runOnRuntimeAsync = _mod1708.runOnRuntimeAsync;
          c6 = 0;
        }
      } else if (1 === tmp7) {
        c6 = 0;
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_132_6 = value;
          let response = {
            url: closure_132_6.url,
            status: closure_132_6.status,
            statusText: closure_132_6.statusText,
            ok: closure_132_6.ok,
            redirected: closure_132_6.redirected,
            headers: closure_132_6.headers,
            bodyBytes: null,
            bodyString: null,
          };
          let bodyBytes;
          if (closure_132_5) {
            bodyBytes = closure_132_6.bodyBytes;
          }
          response.bodyBytes = bodyBytes;
          let bodyString;
          if (!closure_132_5) {
            bodyString = closure_132_6.bodyString;
          }
          response.bodyString = bodyString;
          c8 = 3;
          const obj6 = { value: closure_132_2(response), done: true };
          return obj6;
        }
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c8 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        c8 = 3;
        const obj = { value, done: true };
        return obj;
      }
      if (runOnRuntimeAsync) {
        if (closure_132_4) {
          items = [
            closure_133_4,
            closure_133_0(closure_133_1[3]).NitroFetchHybrid,
            closure_133_0(closure_133_1[4]).buildNitroRequestPure,
            closure_132_0,
            closure_132_1,
            closure_132_5,
            closure_132_2,
          ];
          c7 = 3;
          c8 = 1;
          const obj8 = {
            value: runOnRuntimeAsync(
              closure_132_4,
              (function pnpm_workletJs1Factory(items) {
                [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7] = items;
                function pnpm_workletJs1() {
                  const client = closure_1_0.createClient();
                  const response = client.requestSync(closure_1_1(workletRuntime, closure_1_3));
                  const response1 = {
                    url: response.url,
                    status: response.status,
                    statusText: response.statusText,
                    ok: response.ok,
                    redirected: response.redirected,
                    headers: response.headers,
                    bodyBytes: null,
                    bodyString: null,
                  };
                  let bodyBytes;
                  if (closure_1_4) {
                    bodyBytes = response.bodyBytes;
                  }
                  response1.bodyBytes = bodyBytes;
                  let bodyString;
                  if (!closure_1_4) {
                    bodyString = response.bodyString;
                  }
                  response1.bodyString = bodyString;
                  return closure_1_5(response1);
                }
                items = [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7];
                pnpm_workletJs1.__closure = items;
                pnpm_workletJs1.__workletHash = 9135180058708;
                pnpm_workletJs1.__initData = tmp;
                return pnpm_workletJs1;
              })(items),
            ),
            done: false,
          };
          return obj8;
        }
      }
      let _console = console;
      console.warn("nitroFetchOnWorklet: no runtime, mapping on JS thread");
      c7 = 2;
      c8 = 1;
      const obj9 = { value: closure_133_0(closure_133_1[2]).nitroFetchRaw(closure_132_0, closure_132_1), done: false };
      return obj9;
    } catch (tmp40) {
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp40;
      } else {
        c7 = tmp;
      }
      tmp41 = c6;
    }
  }
};
let closure_4 = {
  code: "(function pnpm_workletJs1(){let[NitroFetchHybrid,buildNitroRequestPure,input,init,preferBytes,mapWorklet]=this.__closure;const nitroFetchClient=NitroFetchHybrid.createClient();const request=buildNitroRequestPure(input,init);const res=nitroFetchClient.requestSync(request);const payload={url:res.url,status:res.status,statusText:res.statusText,ok:res.ok,redirected:res.redirected,headers:res.headers,bodyBytes:preferBytes?res.bodyBytes:undefined,bodyString:preferBytes?undefined:res.bodyString};return mapWorklet(payload);})",
};

export function nitroFetchOnWorklet(arg0, arg1, arg2, arg3) {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
