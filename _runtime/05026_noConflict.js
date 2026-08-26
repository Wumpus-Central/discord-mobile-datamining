// _runtime/05026_noConflict.js
let self = this;
const dependencyMap = arg4;
const exports = arg5;
const fn = function() {
  const self = this;
  let obj = this.humanize;
  obj = {};
  if (undefined !== obj) {
    if (tmp5) {
      tmp4.exports = obj;
    }
    obj.humanize = obj;
    tmp5 = undefined !== self && self.exports;
  } else {
    let amd = typeof globalThis.define === "function";
    if (typeof globalThis.define === "function") {
      amd = globalThis.define.amd;
    }
    if (amd) {
      globalThis.define("humanize", () => obj);
    }
    tmp.humanize = obj;
  }
  obj.noConflict = function() {
    self.humanize = obj;
    return this;
  };
  obj.pad = (arg0, arg1, str) => {
    let length;
    let length2;
    const text = `${arg0}`;
    str = " ";
    if (str) {
      if (str.length > 1) {
        str = str.charAt(0);
      }
    }
    let str2 = "right";
    if (undefined === arg3) {
      str2 = "left";
    }
    if ("right" === str2) {
      let tmp3 = text;
      let tmp2 = text;
      if (text.length < arg1) {
        do {
          let sum = tmp3 + str;
          tmp3 = sum;
          tmp2 = sum;
          length2 = sum.length;
        } while (length2 < arg1);
      }
    } else {
      let tmp = text;
      tmp2 = text;
      if (text.length < arg1) {
        do {
          let sum1 = str + tmp;
          tmp = sum1;
          tmp2 = sum1;
          length = sum1.length;
        } while (length < arg1);
      }
    }
    return tmp2;
  };
  obj.time = () => new Date().getTime() / 1000;
  closure_3 = [0, 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  closure_4 = [0, 0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
  obj.date = (str) => {
    if (undefined === arg1) {
      const _Date3 = Date;
      let date = new Date();
    } else {
      const _Date = Date;
      const _Date2 = Date;
      if (arg1 instanceof Date) {
        date = new _Date2(arg1);
      } else {
        date = new _Date2(1000 * arg1);
      }
    }
    const tmp11 = /\\?([a-z])/gi;
    const re1 = tmp11;
    function formatChrCb(arg0, arg1) {
      let tmp = arg1;
      if (closure_5[arg0]) {
        tmp = closure_5[arg0]();
      }
      return tmp;
    }
    closure_3 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    closure_4 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    closure_5 = {
      d() {
        return formatChrCb.pad(closure_5.j(), 2, "0");
      },
      D() {
        return closure_5.l().slice(0, 3);
      },
      j() {
        return date.getDate();
      },
      l() {
        return dependencyMap[closure_5.w(closure_5)];
      },
      N() {
        return closure_5.w() || 7;
      },
      S() {
        const jResult = closure_5.j();
        if (jResult <= 4) {
          let str = { 1: "st", 2: "nd", 3: "rd" }[jResult % 10] || "th";
          const tmp2 = { 1: "st", 2: "nd", 3: "rd" }[jResult % 10] || "th";
        } else {
          str = "th";
        }
        return str;
      },
      w() {
        return date.getDay();
      },
      z() {
        if (closure_5.L()) {
          let tmp2 = dependencyMap2[obj.n(obj)];
        } else {
          tmp2 = dependencyMap[obj.n(obj)];
        }
        return tmp2 + closure_5.j() - 1;
      },
      W() {
        const sum = closure_5.z() - closure_5.N() + 1.5;
        let num = 0;
        const sum1 = 1 + Math.floor(Math.abs(sum) / 7);
        if (3.5 < sum % 7) {
          num = 1;
        }
        return formatChrCb.pad(sum1 + num, 2, "0");
      },
      F() {
        return dependencyMap2[date.getMonth(date)];
      },
      m() {
        return formatChrCb.pad(closure_5.n(), 2, "0");
      },
      M() {
        return closure_5.F().slice(0, 3);
      },
      n() {
        return date.getMonth() + 1;
      },
      t() {
        const YResult = closure_5.Y();
        return new Date(closure_5.Y(), closure_5.n(), 0).getDate();
      },
      L() {
        let num = 0;
        if (1 === date.getMonth()) {
          num = 1;
        }
        return num;
      },
      o() {
        const nResult = closure_5.n();
        const WResult = closure_5.W();
        if (12 !== nResult) {
          let tmp4 = 1 === nResult;
          if (tmp4) {
            tmp4 = WResult > 9;
          }
          let num2 = tmp4;
        } else {
          num2 = -1;
        }
        return closure_5.Y() + num2;
      },
      Y() {
        return date.getFullYear();
      },
      y() {
        return String(closure_5.Y()).slice(-2);
      },
      a() {
        let str = "am";
        if (date.getHours() > 11) {
          str = "pm";
        }
        return str;
      },
      A() {
        return closure_5.a().toUpperCase();
      },
      B() {
        const result = date.getTime() / 1000;
        const sum = result % 86400 + 3600;
        let sum1 = sum;
        if (sum < 0) {
          sum1 = sum + 86400;
        }
        const result1 = sum1 / 86.4 % 1000;
        if (result < 0) {
          const _Math2 = Math;
          let rounded = Math.ceil(result1);
        } else {
          const _Math = Math;
          rounded = Math.floor(result1);
        }
        return rounded;
      },
      g() {
        return closure_5.G() % 12 || 12;
      },
      G() {
        return date.getHours();
      },
      h() {
        return formatChrCb.pad(closure_5.g(), 2, "0");
      },
      H() {
        return formatChrCb.pad(closure_5.G(), 2, "0");
      },
      i() {
        return formatChrCb.pad(date.getMinutes(), 2, "0");
      },
      s() {
        return formatChrCb.pad(date.getSeconds(), 2, "0");
      },
      u() {
        return formatChrCb.pad(1000 * date.getMilliseconds(), 6, "0");
      },
      O() {
        const timezoneOffset = date.getTimezoneOffset();
        const absolute = Math.abs(timezoneOffset);
        let str = "+";
        if (timezoneOffset > 0) {
          str = "-";
        }
        return str + formatChrCb.pad(100 * Math.floor(absolute / 60) + absolute % 60, 4, "0");
      },
      P() {
        const str = closure_5.O();
        const text = `${str.substr(0, 3)}:`;
        return `${str.substr(0, 3)}:` + str.substr(3, 2);
      },
      Z() {
        return 60 * -date.getTimezoneOffset();
      },
      c() {
        return "Y-m-d\\TH:i:sP".replace(closure_1, formatChrCb);
      },
      r() {
        return "D, d M Y H:i:s O".replace(closure_1, formatChrCb);
      },
      U() {
        return date.getTime() / 1000 || 0;
      }
    };
    return str.replace(tmp11, formatChrCb);
  };
  obj.numberFormat = (arg0, arg1, arg2, arg3) => {
    let num = 2;
    if (!isNaN(arg1)) {
      const _Math = Math;
      num = Math.abs(arg1);
    }
    let str = ".";
    if (undefined !== arg2) {
      str = arg2;
    }
    let str2 = ",";
    if (undefined !== arg3) {
      str2 = arg3;
    }
    let str3 = "";
    let str4 = "";
    if (arg0 < 0) {
      str4 = "-";
    }
    let num2 = +arg0;
    if (!num2) {
      num2 = 0;
    }
    const absolute = Math.abs(num2);
    const str5 = `${parseInt(obj.toFixed(num), 10)}`;
    let num3 = 0;
    if (`${parseInt(obj.toFixed(num), 10)}`.length > 3) {
      num3 = `${parseInt(obj.toFixed(num), 10)}`.length % 3;
    }
    let sum = str3;
    if (num3) {
      sum = str5.substr(0, num3) + str2;
    }
    const sum1 = str4 + sum + str5.substr(num3).replace(/(\d{3})(?=\d)/g, `$1${str2}`);
    if (num) {
      const _Math2 = Math;
      const absolute1 = Math.abs(absolute - str5);
      str3 = str + absolute1.toFixed(num).slice(2);
      const toFixedResult = absolute1.toFixed(num);
    }
    return sum1 + str3;
  };
  obj.naturalDay = (arg0, arg1) => {
    let timeResult = arg0;
    if (undefined === arg0) {
      timeResult = obj.time();
    }
    let str = "Y-m-d";
    if (undefined !== arg1) {
      str = arg1;
    }
    const date = new Date();
    const fullYear = date.getFullYear();
    const month = date.getMonth();
    const result = new Date(fullYear, month, date.getDate()).getTime() / 1000;
    if (timeResult >= result) {
      if (timeResult < result) {
        if (timeResult < result + 86400) {
          let str4 = obj.date(str, timeResult);
        } else {
          str4 = "tomorrow";
        }
        let str3 = str4;
      } else {
        str3 = "today";
      }
      let str2 = str3;
    } else {
      str2 = "yesterday";
    }
    return str2;
  };
  obj.relativeTime = (arg0) => {
    let timeResult = arg0;
    if (undefined === arg0) {
      timeResult = obj.time();
    }
    const timeResult1 = obj.time();
    const diff = timeResult1 - timeResult;
    if (diff < 2) {
      if (diff > -2) {
        let str24 = "";
        if (diff >= 0) {
          str24 = "just ";
        }
        return str24 + "now";
      }
    }
    if (diff < 60) {
      if (diff > -60) {
        if (diff >= 0) {
          const _Math8 = Math;
          let text = `${Math.floor(tmp4)} seconds ago`;
        } else {
          const _Math7 = Math;
          text = `${"in " + Math.floor(-tmp4)} seconds`;
        }
        return text;
      }
    }
    if (diff < 120) {
      if (diff > -120) {
        let str20 = "in about a minute";
        if (diff >= 0) {
          str20 = "about a minute ago";
        }
        return str20;
      }
    }
    if (diff < 3600) {
      if (diff > -3600) {
        if (diff >= 0) {
          const _Math6 = Math;
          let text1 = `${Math.floor(tmp4 / 60)} minutes ago`;
        } else {
          const _Math5 = Math;
          text1 = `${"in " + Math.floor(-tmp4 / 60)} minutes`;
        }
        return text1;
      }
    }
    if (diff < 7200) {
      if (diff > -7200) {
        let str16 = "in about an hour";
        if (diff >= 0) {
          str16 = "about an hour ago";
        }
        return str16;
      }
    }
    if (diff < 86400) {
      if (diff > -86400) {
        if (diff >= 0) {
          const _Math4 = Math;
          let text2 = `${Math.floor(tmp4 / 3600)} hours ago`;
        } else {
          const _Math3 = Math;
          text2 = `${"in " + Math.floor(-tmp4 / 3600)} hours`;
        }
        return text2;
      }
    }
    if (diff < 172800) {
      if (diff > -172800) {
        let str12 = "in 1 day";
        if (diff >= 0) {
          str12 = "1 day ago";
        }
        return str12;
      }
    }
    if (diff < 2505600) {
      if (diff > -2505600) {
        if (diff >= 0) {
          const _Math2 = Math;
          let text3 = `${Math.floor(tmp4 / 86400)} days ago`;
        } else {
          const _Math = Math;
          text3 = `${"in " + Math.floor(-tmp4 / 86400)} days`;
        }
        return text3;
      }
    }
    if (diff < 5184000) {
      if (diff > -5184000) {
        let str8 = "in about a month";
        if (diff >= 0) {
          str8 = "about a month ago";
        }
        return str8;
      }
    }
    const parsed = parseInt(obj.date("Y", timeResult1), 10);
    const parsed1 = parseInt(obj.date("Y", timeResult), 10);
    const result = 12 * parsed;
    const sum = result + parseInt(obj.date("n", timeResult1), 10);
    const result1 = 12 * parsed1;
    const diff1 = sum - (result1 + parseInt(obj.date("n", timeResult), 10));
    if (diff1 < 12) {
      if (-12 < diff1) {
        if (0 <= diff1) {
          let text4 = `${tmp10} months ago`;
        } else {
          text4 = `${"in " + -tmp10} months`;
        }
        return text4;
      }
    }
    const diff2 = parsed - parsed1;
    if (diff2 < 2) {
      if (diff2 > -2) {
        let str4 = "in a year";
        if (diff2 >= 0) {
          str4 = "a year ago";
        }
        let text5 = str4;
      }
      return text5;
    }
    if (diff2 >= 0) {
      text5 = `${tmp11} years ago`;
    } else {
      text5 = `${"in " + -tmp11} years`;
    }
  };
  obj.ordinal = (joined) => {
    const parsed = parseInt(joined, 10);
    let num = 0;
    if (!isNaN(parsed)) {
      num = parsed;
    }
    let str = "";
    if (num < 0) {
      str = "-";
    }
    const absolute = Math.abs(num);
    const result = absolute % 100;
    const sum = str + absolute;
    if (4 >= result) {
      let str2 = { 1: "st", 2: "nd", 3: "rd" }[absolute % 10] || "th";
      const tmp5 = { 1: "st", 2: "nd", 3: "rd" }[absolute % 10] || "th";
    } else {
      str2 = "th";
    }
    return sum + str2;
  };
  obj.filesize = (arg0, arg1, arg2, arg3, arg4, arg5) => {
    let str = "0 bytes";
    if (arg0 > 0) {
      let num = 1024;
      if (undefined !== arg1) {
        num = arg1;
      }
      let num2 = arg2;
      if (tmp2) {
        num2 = 0;
      }
      let str2 = arg5;
      if (undefined === arg5) {
        str2 = " ";
      }
      str = obj.intword(arg0, ["bytes", "KB", "MB", "GB", "TB", "PB"], num, num2, arg3, arg4, str2);
      tmp2 = arg0 < num && undefined === num2;
    }
    return str;
  };
  obj.intword = (arg0, arg1, sum) => {
    let items = arg1;
    if (!arg1) {
      items = ["", "K", "M", "B", "T"];
    }
    let num = sum;
    const diff = items.length - 1;
    if (!sum) {
      num = 1000;
    }
    let num2 = 2;
    if (!isNaN(arg3)) {
      const _Math = Math;
      num2 = Math.abs(arg3);
    }
    let str = arg4;
    if (!arg4) {
      str = ".";
    }
    let str2 = arg5;
    if (!arg5) {
      str2 = ",";
    }
    let str3 = arg6;
    if (!arg6) {
      str3 = "";
    }
    let num3 = 0;
    let tmp2 = diff;
    if (0 < items.length) {
      const _Math2 = Math;
      sum = num3 + 1;
      tmp2 = num3;
      while (arg0 >= Math.pow(num, sum)) {
        tmp2 = diff;
        num3 = sum;
        if (sum >= items.length) {
          break;
        }
      }
    }
    const result = arg0 / Math.pow(num, tmp2);
    let str4 = "";
    if (items[tmp2]) {
      str4 = str3 + items[tmp2];
    }
    return obj.numberFormat(result, num2, str, str2) + str4;
  };
  obj.linebreaks = (str) => {
    str = str.replace(/^([\n|\r]*)/, "");
    const str2 = str.replace(/^([\n|\r]*)/, "").replace(/([\n|\r]*)$/, "");
    const str3 = str.replace(/^([\n|\r]*)/, "").replace(/([\n|\r]*)$/, "").replace(/(\r\n|\n|\r)/g, "\n");
    return "<p>" + str.replace(/^([\n|\r]*)/, "").replace(/([\n|\r]*)$/, "").replace(/(\r\n|\n|\r)/g, "\n").replace(/(\n{2,})/g, "</p><p>").replace(/\n/g, "<br />") + "</p>";
  };
  obj.nl2br = (str) => str.replace(/(\r\n|\n|\r)/g, "<br />");
  obj.truncatechars = (arg0, arg1) => {
    let text = arg0;
    if (arg0.length > arg1) {
      text = `${arg0.substr(0, arg1)}…`;
    }
    return text;
  };
  obj.truncatewords = (str) => {
    let text = str;
    const parts = str.split(" ");
    if (parts.length >= arg1) {
      const substr = parts.slice(0, arg1);
      text = `${obj.join(" ")}…`;
    }
    return text;
  };
};
const call = fn.call;
if (typeof call === "unknown") {
  fn();
} else {
  call(self);
}