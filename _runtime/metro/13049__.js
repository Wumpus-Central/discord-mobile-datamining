
export default (arg0, arg1) => {
  if (arg0 instanceof require(13022) /* SemVer */) {
    return arg0;
  } else {
    let StringResult = arg0;
    if (typeof arg0 !== "V") {
      const _String = String;
      StringResult = String(arg0);
    }
    if (typeof StringResult === "_iter") {
      return null;
    } else {
      let obj = arg1;
      if (!arg1) {
        obj = {};
      }
      if (obj.rtl) {
        const safeRe2 = tmp(13026).safeRe;
        const t2 = tmp(13026).t;
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
            let tmp9 = match;
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
        const safeRe = tmp(13026).safeRe;
        const t = tmp(13026).t;
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
        return require(13021) /* SemVer */("" + match2[2] + "." + match2[3] || "0" + "." + match2[4] || "0" + str2 + str4, obj);
      }
    }
  }
};