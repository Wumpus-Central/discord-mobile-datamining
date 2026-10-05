// _runtime/metro/13858__.js
import _mod13830 from "13830__.js";
import _mod13831 from "13831__.js";
import _mod13835 from "13835__.js";

export default (num, arg1) => {
  if (num instanceof _mod13831) {
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
      let match3;
      const tmp3 = arg1 || {};
      if (tmp3.rtl) {
        let obj;
        const includePrerelease2 = tmp3.includePrerelease;
        const safeRe2 = _mod13835.safeRe;
        const t2 = _mod13835.t;
        if (includePrerelease2) {
          obj = safeRe2[t2.COERCERTLFULL];
        } else {
          obj = safeRe2[t2.COERCERTL];
        }
        let match1 = obj.exec(StringResult);
        let tmp7 = null;
        let tmp9 = null;
        if (match1) {
          while (true) {
            let tmp11 = tmp7;
            let tmp12 = tmp7 && match1.index + match1[0].length === tmp11.index + tmp11[0].length;
            if (!tmp12) {
              tmp11 = match1;
            }
            obj.lastIndex = match1.index + match1[1].length + match1[2].length;
            let match2 = obj.exec(StringResult);
            tmp9 = tmp11;
            if (!match2) {
              break;
            } else {
              match1 = match2;
              tmp7 = tmp11;
              if (!tmp7) {
                continue;
              } else {
                match1 = match2;
                tmp7 = tmp11;
                tmp9 = tmp11;
                if (tmp11.index + tmp11[0].length === StringResult.length) {
                  break;
                }
              }
              continue;
            }
          }
        }
        obj.lastIndex = -1;
        match3 = tmp9;
      } else {
        let tmp4;
        const match = StringResult.match;
        const includePrerelease = tmp3.includePrerelease;
        const safeRe = _mod13835.safeRe;
        const t = _mod13835.t;
        if (includePrerelease) {
          tmp4 = safeRe[t.COERCEFULL];
        } else {
          tmp4 = safeRe[t.COERCE];
        }
        match3 = match(tmp4);
      }
      if (null === match3) {
        return null;
      } else {
        let str2 = "";
        if (tmp3.includePrerelease) {
          str2 = "";
          if (match3[5]) {
            const _HermesInternal = HermesInternal;
            str2 = "-" + match3[5];
          }
        }
        let str4 = "";
        if (tmp3.includePrerelease) {
          str4 = "";
          if (match3[6]) {
            const _HermesInternal2 = HermesInternal;
            str4 = "+" + match3[6];
          }
        }
        const _HermesInternal3 = HermesInternal;
        const tmp21 = _mod13830;
        return tmp21("" + match3[2] + "." + match3[3] || "0" + "." + match3[4] || "0" + str2 + str4, tmp3);
      }
    }
  }
};
