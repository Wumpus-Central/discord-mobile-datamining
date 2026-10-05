// _runtime/01116_resolvePathname.js

export default function resolvePathname(pathname, pathname2) {
  let combined;
  let tmp21;
  let str = pathname2;
  if (undefined === pathname2) {
    str = "";
  }
  const parts = (pathname && pathname.split("/")) || [];
  const parts1 = (str && str.split("/")) || [];
  let tmp = pathname && "/" === pathname.charAt(0);
  const tmp2 = str && "/" === str.charAt(0);
  if (!tmp) {
    tmp = tmp2;
  }
  if (!pathname) {
    combined = parts1;
    if (parts.length) {
      parts1.pop();
      combined = parts1.concat(parts);
    }
  } else {
    combined = parts;
  }
  if (combined.length) {
    let flag = false;
    if (combined.length) {
      flag = "." === tmp4 || ".." === tmp4 || "" === tmp4;
      const tmp5 = "." === tmp4 || ".." === tmp4 || "" === tmp4;
    }
    let length = combined.length;
    let num7 = 0;
    let num8 = 0;
    while (0 <= length) {
      let sum4;
      let tmp6 = combined[length];
      if ("." === tmp6) {
        let sum = length + 1;
        let length4 = combined.length;
        let sum1 = length;
        if (sum < length4) {
          do {
            combined[sum1] = combined[sum];
            sum1 = sum1 + 1;
            sum = sum + 1;
          } while (sum < length4);
        }
        let arr2 = combined.pop();
        sum4 = num7;
      } else if (".." === tmp6) {
        let sum2 = length + 1;
        let length3 = combined.length;
        let sum3 = length;
        if (sum2 < length3) {
          do {
            combined[sum3] = combined[sum2];
            sum3 = sum3 + 1;
            sum2 = sum2 + 1;
          } while (sum2 < length3);
        }
        let arr3 = combined.pop();
        sum4 = num7 + 1;
      } else {
        sum4 = num7;
        if (sum4) {
          let sum5 = length + 1;
          let length2 = combined.length;
          let sum6 = length;
          if (sum5 < length2) {
            do {
              combined[sum6] = combined[sum5];
              sum6 = sum6 + 1;
              sum5 = sum5 + 1;
            } while (sum5 < length2);
          }
          let arr9 = combined.pop();
          sum4 = num7 - 1;
        }
      }
      length = length - 1;
      num7 = sum4;
      num8 = sum4;
    }
    if (!tmp) {
      let diff = num8 - 1;
      if (num8) {
        do {
          let arr10 = combined.unshift("..");
          tmp21 = diff;
          diff = diff - 1;
        } while (tmp21);
      }
    }
    let tmp22 = !tmp;
    if (tmp) {
      tmp22 = "" === combined[0];
    }
    if (!tmp22) {
      let first = combined[0];
      if (first) {
        const str14 = combined[0];
        first = "/" === str14.charAt(0);
      }
      tmp22 = first;
    }
    if (!tmp22) {
      combined.unshift("");
    }
    const str18 = combined.join("/");
    if (flag) {
      flag = "/" !== str18.substr(-1);
    }
    let text = str18;
    if (flag) {
      text = `${str18}/`;
    }
    return text;
  } else {
    return "/";
  }
}
