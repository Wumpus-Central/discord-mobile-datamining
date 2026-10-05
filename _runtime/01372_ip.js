// === Module 1372: ip ===

// Module 1372 (ip)
let str = "\n(\n(?:" + "[a-fA-F\\d]{1,4}" + ":){7}(?:" + "[a-fA-F\\d]{1,4}" + "|:)|                                // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:" + "[a-fA-F\\d]{1,4}" + ":){6}(?:" + "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}" + "|:" + "[a-fA-F\\d]{1,4}" + "|:)|                         // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:" + "[a-fA-F\\d]{1,4}" + ":){5}(?::" + "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}" + "|(:" + "[a-fA-F\\d]{1,4}" + "){1,2}|:)|                 // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:" + "[a-fA-F\\d]{1,4}" + ":){4}(?:(:" + "[a-fA-F\\d]{1,4}" + "){0,1}:" + "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}" + "|(:" + "[a-fA-F\\d]{1,4}" + "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:" + "[a-fA-F\\d]{1,4}" + ":){3}(?:(:" + "[a-fA-F\\d]{1,4}" + "){0,2}:" + "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}" + "|(:" + "[a-fA-F\\d]{1,4}" + "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:" + "[a-fA-F\\d]{1,4}" + ":){2}(?:(:" + "[a-fA-F\\d]{1,4}" + "){0,3}:" + "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}" + "|(:" + "[a-fA-F\\d]{1,4}" + "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:" + "[a-fA-F\\d]{1,4}" + ":){1}(?:(:" + "[a-fA-F\\d]{1,4}" + "){0,4}:" + "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}" + "|(:" + "[a-fA-F\\d]{1,4}" + "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::((?::" + "[a-fA-F\\d]{1,4}" + "){0,5}:" + "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}" + "|(?::" + "[a-fA-F\\d]{1,4}" + "){1,7}|:))           // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(%[0-9a-zA-Z]{1,})?                                           // %eth0            %1\n";
const str2 = str.replace(/\s*\/\/.*$/gm, "");
const str3 = str2.replace(/\n/g, "");
let closure_0 = str3.trim();
function ip(exact) {
  const tmp = exact;
  if (tmp) {
    let regExp;
    if (exact.exact) {
      const _RegExp2 = RegExp;
      const _HermesInternal5 = HermesInternal;
      const self = this;
      const self2 = this;
      regExp = new RegExp("(?:^" + "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}" + "$)|(?:^" + closure_0 + "$)");
    }
    return regExp;
  }
  let str = "";
  const _RegExp = RegExp;
  if (exact) {
    str = "";
    if (exact.includeBoundaries) {
      const _HermesInternal = HermesInternal;
      str = "(?:(?<=\\s|^)(?=" + "[a-fA-F\\d:]" + ")|(?<=" + "[a-fA-F\\d:]" + ")(?=\\s|$))";
    }
  }
  let str8 = "";
  if (exact) {
    str8 = "";
    if (exact.includeBoundaries) {
      const _HermesInternal2 = HermesInternal;
      str8 = "(?:(?<=\\s|^)(?=" + "[a-fA-F\\d:]" + ")|(?<=" + "[a-fA-F\\d:]" + ")(?=\\s|$))";
    }
  }
  let str15 = "";
  if (exact) {
    str15 = "";
    if (exact.includeBoundaries) {
      const _HermesInternal3 = HermesInternal;
      str15 = "(?:(?<=\\s|^)(?=" + "[a-fA-F\\d:]" + ")|(?<=" + "[a-fA-F\\d:]" + ")(?=\\s|$))";
    }
  }
  let str22 = "";
  if (exact) {
    str22 = "";
    if (exact.includeBoundaries) {
      const _HermesInternal4 = HermesInternal;
      str22 = "(?:(?<=\\s|^)(?=" + "[a-fA-F\\d:]" + ")|(?<=" + "[a-fA-F\\d:]" + ")(?=\\s|$))";
    }
  }
  regExp = new _RegExp("(?:" + str + "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}" + str8 + ")|(?:" + str15 + closure_0 + str22 + ")", "g");
}
ip.v4 = function(exact) {
  const tmp = exact;
  if (tmp) {
    let regExp;
    if (exact.exact) {
      const _RegExp2 = RegExp;
      const _HermesInternal3 = HermesInternal;
      const self = this;
      const self2 = this;
      regExp = new RegExp("^" + "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}" + "$");
    }
    return regExp;
  }
  let str = "";
  const _RegExp = RegExp;
  if (exact) {
    str = "";
    if (exact.includeBoundaries) {
      const _HermesInternal = HermesInternal;
      str = "(?:(?<=\\s|^)(?=" + "[a-fA-F\\d:]" + ")|(?<=" + "[a-fA-F\\d:]" + ")(?=\\s|$))";
    }
  }
  let str8 = "";
  if (exact) {
    str8 = "";
    if (exact.includeBoundaries) {
      const _HermesInternal2 = HermesInternal;
      str8 = "(?:(?<=\\s|^)(?=" + "[a-fA-F\\d:]" + ")|(?<=" + "[a-fA-F\\d:]" + ")(?=\\s|$))";
    }
  }
  regExp = new _RegExp("" + str + "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}" + str8, "g");
};
ip.v6 = function(exact) {
  const tmp = exact;
  if (tmp) {
    let regExp;
    if (exact.exact) {
      const _RegExp2 = RegExp;
      const _HermesInternal3 = HermesInternal;
      const self = this;
      const self2 = this;
      regExp = new RegExp("^" + closure_0 + "$");
    }
    return regExp;
  }
  let str = "";
  const _RegExp = RegExp;
  if (exact) {
    str = "";
    if (exact.includeBoundaries) {
      const _HermesInternal = HermesInternal;
      str = "(?:(?<=\\s|^)(?=" + "[a-fA-F\\d:]" + ")|(?<=" + "[a-fA-F\\d:]" + ")(?=\\s|$))";
    }
  }
  let str8 = "";
  if (exact) {
    str8 = "";
    if (exact.includeBoundaries) {
      const _HermesInternal2 = HermesInternal;
      str8 = "(?:(?<=\\s|^)(?=" + "[a-fA-F\\d:]" + ")|(?<=" + "[a-fA-F\\d:]" + ")(?=\\s|$))";
    }
  }
  regExp = new _RegExp("" + str + closure_0 + str8, "g");
};

export default ip;