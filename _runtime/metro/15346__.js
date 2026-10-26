// _runtime/metro/15346__.js
import _mod15318 from "15318__.js";
import _mod15319 from "15319__.js";
import _mod15323 from "15323__.js";

export default (num, arg1) => {
  if (num instanceof _mod15319) {
    return num;
  } else {
    let StringResult = num;
    if (typeof num === "number") {
      const _String = String;
      StringResult = String(num);
    }
    if (typeof StringResult !== "string") {
      return null;
    } else {
      let obj = arg1;
      if (!arg1) {
        obj = {};
      }
      if (obj.rtl) {
        const safeRe2 = _mod15323.safeRe;
        const t2 = _mod15323.t;
        if (obj.includePrerelease) {
          let obj2 = safeRe2[t2.COERCERTLFULL];
        } else {
          obj2 = safeRe2[t2.COERCERTL];
        }
        let match = obj2.exec(StringResult);
        let tmp6 = null;
        let tmp8 = null;
        if (match) {
          while (true) {
            let tmp10 = tmp6;
            let tmp11 = tmp6;
            if (tmp6) {
              tmp11 = match.index + match[0].length === tmp10.index + tmp10[0].length;
            }
            if (!tmp11) {
              tmp10 = match;
            }
            obj2.lastIndex = match.index + match[1].length + match[2].length;
            let match1 = obj2.exec(StringResult);
            tmp8 = tmp10;
            if (!match1) {
              break;
            } else {
              match = match1;
              tmp6 = tmp10;
              if (!tmp10) {
                continue;
              } else {
                match = match1;
                tmp6 = tmp10;
                tmp8 = tmp10;
                if (tmp10.index + tmp10[0].length === StringResult.length) {
                  break;
                }
              }
              continue;
            }
          }
        }
        obj2.lastIndex = -1;
        let match2 = tmp8;
      } else {
        const safeRe = _mod15323.safeRe;
        const t = _mod15323.t;
        if (obj.includePrerelease) {
          let tmp3 = safeRe[t.COERCEFULL];
        } else {
          tmp3 = safeRe[t.COERCE];
        }
        match2 = StringResult.match(tmp3);
      }
      if (null === match2) {
        return null;
      } else {
        let str2 = "";
        if (obj.includePrerelease) {
          str2 = "";
          if (match2[5]) {
            const _HermesInternal = HermesInternal;
            str2 = "-" + match2[5];
          }
        }
        let str4 = "";
        if (obj.includePrerelease) {
          str4 = "";
          if (match2[6]) {
            const _HermesInternal2 = HermesInternal;
            str4 = "+" + match2[6];
          }
        }
        const _HermesInternal3 = HermesInternal;
        return _mod15318("" + match2[2] + "." + match2[3] || "0" + "." + match2[4] || "0" + str2 + str4, obj);
      }
    }
  }
};
