// discord_app/modules/application_widget/refreshApplicationWidget.tsx
import Constants from "../../Constants.tsx";
import utils_FunctionUtils from "../../../discord_common/js/shared/utils/FunctionUtils.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../_runtime/metro/00002__.js";

let c1, c4, closure_2;

const Endpoints = Constants.Endpoints;
const promiseDeduper = new utils_FunctionUtils.PromiseDeduper();
const result = size.fileFinishedImporting("modules/application_widget/refreshApplicationWidget.tsx");

export const refreshApplicationWidget = function refreshApplicationWidget(play) {
  let closure_0 = play;
  return promiseDeduper.one(
    play,
    _asyncToGenerator(async () => {
      let closure_0;
      let tmp3;
      function resultFromStatus(arg0) {
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
      }
      function statusOf(status) {
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
      }
      if (c4 === 2) {
        c4 = 3;
        const str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
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
              const HTTP = tmp(c1[3]).HTTP;
              const obj4 = {
                url: c3.APPLICATION_WIDGET_REFRESH(tmp),
                rejectWithError: true,
                failImmediatelyWhenRateLimited: true,
              };
              const post = HTTP.post;
              c1 = 2;
              c4 = 1;
              const obj5 = { value: post(obj4), done: false };
              return obj5;
            }
          } else if (1 === tmp4) {
            c3 = 0;
            c4 = 3;
            const obj6 = { value: resultFromStatus(statusOf(closure_2)), done: true };
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
        } catch (tmp12) {
          closure_2 = tmp12;
          if (0 === c3) {
            c4 = 3;
            throw tmp12;
          } else {
            c1 = 1;
          }
        }
      }
    }),
  );
};
