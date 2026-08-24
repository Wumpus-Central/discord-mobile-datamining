// === Module 1226: resolvePathname ===

// Module 1226 (resolvePathname)

export default function resolvePathname(str) {
  let tmp21;
  str = arg1;
  if (undefined === arg1) {
    str = "";
  }
  let parts = str;
  if (str) {
    parts = str.split("/");
  }
  if (!parts) {
    parts = [];
  }
  let parts1 = str;
  if (str) {
    parts1 = str.split("/");
  }
  if (!parts1) {
    parts1 = [];
  }
  let tmp = str;
  if (str) {
    tmp = "/" === str.charAt(0);
  }
  let tmp2 = str;
  if (str) {
    tmp2 = "/" === str.charAt(0);
  }
  if (!tmp) {
    tmp = tmp2;
  }
  if (!str) {
    let combined = parts1;
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
      let tmp5 = "." === tmp4;
      if (!tmp5) {
        tmp5 = ".." === tmp4;
      }
      if (!tmp5) {
        tmp5 = "" === tmp4;
      }
      flag = tmp5;
    }
    let length = combined.length;
    let num7 = 0;
    let num8 = 0;
    while (0 <= length) {
      let tmp6 = combined[length];
      let tmp7 = length;
      let tmp8 = num7;
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
        let arr = combined.pop();
        let sum4 = num7;
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
        let arr1 = combined.pop();
        sum4 = num7 + 1;
      } else {
        sum4 = num7;
        if (num7) {
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
          let arr2 = combined.pop();
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
          let arr3 = combined.unshift("..");
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
        first = "/" === combined[0].charAt(0);
        const str14 = combined[0];
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
};