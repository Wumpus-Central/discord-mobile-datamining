// === Module 3717: dateLongFormatter ===

// Module 3717 (dateLongFormatter)
function dateLongFormatter(arg0, arg1) {

}
function timeLongFormatter(arg0, time) {
  if ("p" === arg0) {
    return time.time({ width: "short" });
  } else if ("pp" === arg0) {
    return time.time({ width: "medium" });
  } else if ("ppp" === arg0) {
    return time.time({ width: "long" });
  } else {
    return time.time({ width: "full" });
  }
}

export default {
  p: timeLongFormatter,
  P: function dateTimeLongFormatter(str, dateTime) {
    const tmp = str.match(/(P+)(p+)?/) || [];
    if (tmp[2]) {
      if ("P" === tmp2) {
        let str7 = dateTime.dateTime({ width: "short" });
      } else if ("PP" === tmp2) {
        str7 = dateTime.dateTime({ width: "medium" });
      } else if ("PPP" === tmp2) {
        str7 = dateTime.dateTime({ width: "long" });
      } else {
        str7 = dateTime.dateTime({ width: "full" });
      }
      if (typeof dateLongFormatter !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if ("P" === tmp2) {
        let dateResult = dateTime.date({ width: "short" });
      } else if ("PP" === tmp2) {
        dateResult = dateTime.date({ width: "medium" });
      } else if ("PPP" === tmp2) {
        dateResult = dateTime.date({ width: "long" });
      } else {
        dateResult = dateTime.date({ width: "full" });
      }
      if (typeof timeLongFormatter !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if ("p" === tmp3) {
        let timeResult = dateTime.time({ width: "short" });
      } else if ("pp" === tmp3) {
        timeResult = dateTime.time({ width: "medium" });
      } else if ("ppp" === tmp3) {
        timeResult = dateTime.time({ width: "long" });
      } else {
        timeResult = dateTime.time({ width: "full" });
      }
      return str7.replace("{{date}}", dateResult).replace("{{time}}", timeResult);
    } else {
      if (typeof dateLongFormatter !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if ("P" === "P") {
        let dateResult1 = dateTime.date({ width: "short" });
      } else if ("PP" === str) {
        dateResult1 = dateTime.date({ width: "medium" });
      } else if ("PPP" === str) {
        dateResult1 = dateTime.date({ width: "long" });
      } else {
        dateResult1 = dateTime.date({ width: "full" });
      }
      return dateResult1;
    }
  }
};
export default exports.default;