// === Module 13194: refreshApplicationWidget ===

// Module 13194 (refreshApplicationWidget)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
const Endpoints = fn(1074).Endpoints;
const promiseDeduper = new fn(9311).PromiseDeduper();
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_widget/refreshApplicationWidget.tsx");

export const refreshApplicationWidget = function refreshApplicationWidget(play) {
  closure_0 = play;
  return promiseDeduper.one(play, asyncGeneratorStep(async () => {
    if (c4 === 2) {
      c4 = 3;
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
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            c3 = 1;
            const HTTP = tmp3(c1[3]).HTTP;
            const obj4 = { url: c3.APPLICATION_WIDGET_REFRESH(tmp3), rejectWithError: true, failImmediatelyWhenRateLimited: true };
            c1 = 2;
            c4 = 1;
            const obj5 = { value: HTTP.post(obj4), done: false };
            return obj5;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          c4 = 3;
          const obj6 = {
            value: (function resultFromStatus(arg0) {
                    if (403 === arg0) {
                      return "unauthorized";
                    } else if (404 === arg0) {
                      return "no_widget_config";
                    } else if (429 === arg0) {
                      return "rate_limited";
                    } else if (503 === arg0) {
                      return "undeliverable";
                    } else {
                      return "failed";
                    }
                  })((function statusOf(status) {
                    if (status instanceof closure_1_0(closure_1_1[3]).HTTPResponseError) {
                      return status.status;
                    } else {
                      status = undefined;
                      if (status != null) {
                        status = status.status;
                      }
                      let tmp3;
                      if (typeof status === "number") {
                        tmp3 = status;
                      }
                      return tmp3;
                    }
                  })(closure_2)),
            done: true
          };
          return obj6;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c3 = 0;
          c4 = 3;
          return { value: "dispatched", done: true };
        }
      } catch (tmp15) {
        closure_2 = tmp15;
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp15;
        } else {
          c1 = tmp;
        }
      }
    }
  }));
};