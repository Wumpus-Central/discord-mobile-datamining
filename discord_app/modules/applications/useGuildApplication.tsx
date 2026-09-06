// discord_app/modules/applications/useGuildApplication.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import ApplicationStore from "ApplicationStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/useGuildApplication.tsx");

export default function useGuildApplication(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const items = [closure_6];
  application = require("initialize").useStateFromStores(items, () =>
    ApplicationStore.getGuildApplication(closure_0, closure_1),
  );
  let obj = require("initialize");
  [tmp3, asyncGeneratorStep] = _slicedToArray(first.useState(null == application), 2);
  const error = _slicedToArray(first.useState(), 2);
  _slicedToArray = error[1];
  const tmp5 = _slicedToArray(first.useState(false), 2);
  first = tmp5[0];
  closure_6 = tmp5[1];
  const items1 = [application, arg1, arg0];
  const callback = first.useCallback(
    asyncGeneratorStep(async (arg0, value) => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const type = tmp4;
              closure_0 = tmp8;
              if (null == application) {
                if (null != closure_0) {
                  closure_6(true);
                  asyncGeneratorStep(true);
                  c3 = 2;
                  let obj1 = type(tmp41[5]);
                  obj1 = { type, includeTeam: true };
                  c4 = 3;
                  c5 = 1;
                  const obj2 = { value: obj1.getApplicationsForGuild(tmp33, obj1), done: false };
                  return obj2;
                }
              }
              c5 = 3;
            }
          } else if (1 !== tmp8) {
            if (2 === tmp8) {
              c3 = 1;
              closure_128_0 = tmp41;
              const aPIError = new closure_0(tmp41[6]).APIError(closure_128_0);
              closure_129_4(aPIError);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_3(false);
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c3 = 1;
            }
            c3 = 0;
            closure_129_3(false);
          }
          c3 = 0;
          closure_129_3(false);
          throw tmp41;
        } catch (tmp41) {
          if (tmp5 === c3) {
            c5 = tmp3;
            throw tmp41;
          } else if (tmp2 === tmp43) {
            c4 = tmp2;
          } else {
            c4 = tmp;
          }
        }
      }
    }),
    items1,
  );
  const items2 = [first, callback];
  const effect = first.useEffect(() => {
    if (!first) {
      callback();
    }
  }, items2);
  return { application, error: error[0], loading };
}
