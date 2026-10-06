// === Module 7284: ? ===

// Module 7284
const obj = exports;
const fn = function() {
  let tmp;
  let self = this;
  const humanize = {
    noConflict: function() {
      self.humanize = humanize;
      return this;
    },
    pad: (arg0, arg1, str, arg3) => {
      let length;
      let length2;
      let tmp2;
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
        tmp2 = text;
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
    },
    time: () => {
      const date = new Date();
      return date.getTime() / 1000;
    },
    date: function(str, arg1) {
      if (undefined === arg1) {
        let tmp4 = globalThis;
        const _Date3 = Date;
        const self5 = this;
        const self6 = this;
        let date = new Date();
      } else {
        let tmp = globalThis;
        const _Date = Date;
        const _Date2 = Date;
        if (arg1 instanceof Date) {
          const self3 = this;
          const self4 = this;
          date = new _Date2(arg1);
        } else {
          let num = 1000;
          self = this;
          const self2 = this;
          date = new _Date2(1000 * arg1);
        }
      }
      const tmp5 = /\\?([a-z])/gi;
      const re1 = tmp5;
      function formatChrCb(arg0, arg1) {
        let tmp = arg1;
        if (closure_5[arg0]) {
          tmp = closure_5[arg0]();
        }
        return tmp;
      }
      closure_3 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      closure_4 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let closure_5 = {
        d() {
          return obj.pad(closure_5.j(), 2, "0");
        },
        D() {
          const lResult = closure_5.l();
          return lResult.slice(0, 3);
        },
        j() {
          return date.getDate();
        },
        l() {
          return closure_3[closure_5.w(closure_5)];
        },
        N() {
          const tmp = closure_5.w() || 7;
          return tmp;
        },
        S() {
          let str;
          const jResult = closure_5.j();
          if (jResult <= 4) {
            str = { 1: "st", 2: "nd", 3: "rd" }[jResult % 10] || "th";
          } else {
            str = "th";
          }
          return str;
        },
        w() {
          return date.getDay();
        },
        z() {
          let tmp2;
          if (closure_5.L()) {
            tmp2 = closure_4[closure_5.n(closure_5)];
          } else {
            tmp2 = closure_3[closure_5.n(closure_5)];
          }
          return tmp2 + closure_5.j() - 1;
        },
        W() {
          const zResult = closure_5.z();
          const sum = zResult - closure_5.N() + 1.5;
          const pad = obj.pad;
          let num = 0;
          const sum1 = 1 + Math.floor(Math.abs(sum) / 7);
          if (3.5 < sum % 7) {
            num = 1;
          }
          return pad(sum1 + num, 2, "0");
        },
        F() {
          return closure_4[date.getMonth(date)];
        },
        m() {
          return obj.pad(closure_5.n(), 2, "0");
        },
        M() {
          const FResult = closure_5.F();
          return FResult.slice(0, 3);
        },
        n() {
          return date.getMonth() + 1;
        },
        t() {
          const YResult = closure_5.Y();
          date = new Date(YResult, closure_5.n(), 0);
          return date.getDate();
        },
        L() {
          let num = 0;
          date = new Date(closure_5.Y(), 1, 29);
          if (1 === date.getMonth()) {
            num = 1;
          }
          return num;
        },
        o() {
          let num2;
          const nResult = closure_5.n();
          const WResult = closure_5.W();
          const YResult = closure_5.Y();
          if (12 !== nResult) {
            num2 = 1 === nResult && WResult > 9;
            const tmp4 = 1 === nResult && WResult > 9;
          } else {
            num2 = -1;
          }
          return YResult + num2;
        },
        Y() {
          return date.getFullYear();
        },
        y() {
          const StringResult = String(closure_5.Y());
          return StringResult.slice(-2);
        },
        a() {
          let str = "am";
          if (date.getHours() > 11) {
            str = "pm";
          }
          return str;
        },
        A() {
          const str = closure_5.a();
          return str.toUpperCase();
        },
        B() {
          let rounded;
          const result = date.getTime() / 1000;
          const sum = result % 86400 + 3600;
          let sum1 = sum;
          if (sum < 0) {
            sum1 = sum + 86400;
          }
          const result1 = sum1 / 86.4 % 1000;
          if (result < 0) {
            const _Math2 = Math;
            rounded = Math.ceil(result1);
          } else {
            const _Math = Math;
            rounded = Math.floor(result1);
          }
          return rounded;
        },
        g() {
          const tmp = closure_5.G() % 12 || 12;
          return tmp;
        },
        G() {
          return date.getHours();
        },
        h() {
          return obj.pad(closure_5.g(), 2, "0");
        },
        H() {
          return obj.pad(closure_5.G(), 2, "0");
        },
        i() {
          return obj.pad(date.getMinutes(), 2, "0");
        },
        s() {
          return obj.pad(date.getSeconds(), 2, "0");
        },
        u() {
          return obj.pad(1000 * date.getMilliseconds(), 6, "0");
        },
        O() {
          const timezoneOffset = date.getTimezoneOffset();
          const absolute = Math.abs(timezoneOffset);
          let str = "+";
          if (timezoneOffset > 0) {
            str = "-";
          }
          return str + obj.pad(100 * Math.floor(absolute / 60) + absolute % 60, 4, "0");
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
          return "Y-m-d\\TH:i:sP".replace(re1, formatChrCb);
        },
        r() {
          return "D, d M Y H:i:s O".replace(re1, formatChrCb);
        },
        U() {
          const tmp = date.getTime() / 1000 || 0;
          return tmp;
        }
      };
      return str.replace(tmp5, formatChrCb);
    },
    numberFormat: (arg0, arg1, arg2, arg3) => {
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
      const _Math2 = Math;
      if (!num2) {
        num2 = 0;
      }
      const absResult = abs(num2);
      const str5 = `${parseInt(obj.toFixed(num), 10)}`;
      let num3 = 0;
      if (`${parseInt(obj.toFixed(num), 10)}`.length > 3) {
        num3 = `${parseInt(obj.toFixed(num), 10)}`.length % 3;
      }
      let sum = str3;
      if (num3) {
        sum = str5.substr(0, num3) + str2;
      }
      const str6 = str5.substr(num3);
      const sum1 = str4 + sum + str6.replace(/(\d{3})(?=\d)/g, `$1${str2}`);
      if (num) {
        const _Math3 = Math;
        const absolute = Math.abs(absResult - str5);
        const toFixedResult = absolute.toFixed(num);
        str3 = str + toFixedResult.slice(2);
      }
      return sum1 + str3;
    },
    naturalDay: (arg0, arg1) => {
      let str2;
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
      const date1 = new Date(fullYear, month, date.getDate());
      const result = date1.getTime() / 1000;
      if (timeResult >= result) {
        let str3;
        if (timeResult < result) {
          let str4;
          if (timeResult < result + 86400) {
            str4 = obj.date(str, timeResult);
          } else {
            str4 = "tomorrow";
          }
          str3 = str4;
        } else {
          str3 = "today";
        }
        str2 = str3;
      } else {
        str2 = "yesterday";
      }
      return str2;
    },
    relativeTime: (arg0) => {
      let text5;
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
          let text;
          if (diff >= 0) {
            const _Math8 = Math;
            text = `${Math.floor(tmp4)} seconds ago`;
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
          let text1;
          if (diff >= 0) {
            const _Math6 = Math;
            text1 = `${Math.floor(tmp4 / 60)} minutes ago`;
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
          let text2;
          if (diff >= 0) {
            const _Math4 = Math;
            text2 = `${Math.floor(tmp4 / 3600)} hours ago`;
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
          let text3;
          if (diff >= 0) {
            const _Math2 = Math;
            text3 = `${Math.floor(tmp4 / 86400)} days ago`;
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
          let text4;
          if (0 <= diff1) {
            text4 = `${tmp10} months ago`;
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
          text5 = str4;
        }
        return text5;
      }
      if (diff2 >= 0) {
        text5 = `${tmp11} years ago`;
      } else {
        text5 = `${"in " + -tmp11} years`;
      }
    },
    ordinal: (match) => {
      let str2;
      const parsed = parseInt(match, 10);
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
        str2 = { 1: "st", 2: "nd", 3: "rd" }[absolute % 10] || "th";
      } else {
        str2 = "th";
      }
      return sum + str2;
    },
    filesize: (arg0, arg1, arg2, arg3, arg4, arg5) => {
      let str = "0 bytes";
      if (arg0 > 0) {
        let num = 1024;
        if (undefined !== arg1) {
          num = arg1;
        }
        let num2 = arg2;
        const tmp2 = arg0 < num && undefined === num2;
        if (tmp2) {
          num2 = 0;
        }
        let str2 = arg5;
        if (undefined === arg5) {
          str2 = " ";
        }
        str = obj.intword(arg0, ["bytes", "KB", "MB", "GB", "TB", "PB"], num, num2, arg3, arg4, str2);
      }
      return str;
    },
    intword: (arg0, arg1, sum, arg3, arg4, arg5, arg6) => {
      const arr = arg1 || ["", "K", "M", "B", "T"];
      let num = sum;
      const diff = arr.length - 1;
      if (!sum) {
        num = 1000;
      }
      let num2 = 2;
      if (!isNaN(arg3)) {
        const _Math = Math;
        num2 = Math.abs(arg3);
      }
      let num3 = 0;
      let tmp5 = diff;
      const tmp2 = arg4 || ".";
      const tmp3 = arg5 || ",";
      const tmp4 = arg6 || "";
      if (0 < arr.length) {
        const _Math2 = Math;
        sum = num3 + 1;
        tmp5 = num3;
        while (arg0 >= Math.pow(num, sum)) {
          tmp5 = diff;
          num3 = sum;
          if (sum >= arr.length) {
            break;
          }
        }
      }
      const result = arg0 / Math.pow(num, tmp5);
      let str = "";
      if (arr[tmp5]) {
        str = tmp4 + arr[tmp5];
      }
      return obj.numberFormat(result, num2, tmp2, tmp3) + str;
    },
    linebreaks: (str) => {
      str = str.replace(/^([\n|\r]*)/, "");
      const str2 = str.replace(/([\n|\r]*)$/, "");
      const str3 = str2.replace(/(\r\n|\n|\r)/g, "\n");
      const str4 = str3.replace(/(\n{2,})/g, "</p><p>");
      return "<p>" + str4.replace(/\n/g, "<br />") + "</p>";
    },
    nl2br: (str) => str.replace(/(\r\n|\n|\r)/g, "<br />"),
    truncatechars: (arg0, arg1) => {
      let text = arg0;
      if (arg0.length > arg1) {
        text = `${arg0.substr(0, arg1)}…`;
      }
      return text;
    },
    truncatewords: (str, arg1) => {
      let text = str;
      const parts = str.split(" ");
      if (parts.length >= arg1) {
        const substr = parts.slice(0, arg1);
        text = `${obj.join(" ")}…`;
      }
      return text;
    }
  };
  if (undefined !== humanize) {
    let tmp5 = undefined !== module && module.exports;
    if (tmp5) {
      module.exports = humanize;
    }
    humanize.humanize = humanize;
  } else {
    let tmp2 = globalThis;
    let amd = typeof globalThis.define === "function";
    if (typeof globalThis.define === "function") {
      const define3 = globalThis.define;
      amd = globalThis.define.amd;
    }
    if (amd) {
      const define2 = globalThis.define;
      let str = "humanize";
      globalThis.define("humanize", () => obj);
    }
    tmp.humanize = humanize;
  }
  let closure_3 = [0, 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  let closure_4 = [0, 0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
};
fn.call(this);