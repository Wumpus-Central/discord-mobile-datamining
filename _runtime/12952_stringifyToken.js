// === Module 12952: stringifyToken ===

// Module 12952 (stringifyToken)
import SelectorType from "SelectorType" /* 12950 */;

require = arg1;
const dependencyMap = arg6;
function stringifyToken(type, arg1, arg2) {
  type = type.type;
  if (SelectorType.SelectorType.Child === type) {
    let str56 = " > ";
    if (0 === arg1) {
      str56 = "> ";
    }
    return str56;
  } else if (SelectorType.SelectorType.Parent === type) {
    let str55 = " < ";
    if (0 === arg1) {
      str55 = "< ";
    }
    return str55;
  } else if (SelectorType.SelectorType.Sibling === type) {
    let str54 = " ~ ";
    if (0 === arg1) {
      str54 = "~ ";
    }
    return str54;
  } else if (SelectorType.SelectorType.Adjacent === type) {
    let str53 = " + ";
    if (0 === arg1) {
      str53 = "+ ";
    }
    return str53;
  } else if (SelectorType.SelectorType.Descendant === type) {
    return " ";
  } else if (SelectorType.SelectorType.ColumnCombinator === type) {
    let str51 = " || ";
    if (0 === arg1) {
      str51 = "|| ";
    }
    return str51;
  } else if (SelectorType.SelectorType.Universal === type) {
    if ("*" === type.namespace) {
      if (arg1 + 1 < arg2.length) {
        let str49 = "";
      }
      return str49;
    }
    const concat11 = "".concat;
    str49 = "".concat(getNamespace(type.namespace), "*");
  } else if (SelectorType.SelectorType.Tag === type) {
    const concat9 = "".concat;
    const combined = "".concat(getNamespace(type.namespace));
    const name = type.name;
    let num37 = 0;
    let str45 = "";
    let num38 = 0;
    let str46 = "";
    let num39 = 0;
    if (0 < name.length) {
      do {
        let text = str45;
        let sum = num38;
        if (set2.has(name.charCodeAt(num37))) {
          let concat10 = "".concat;
          let combined1 = "".concat(name.slice(num38, num37), "\\");
          text = `${tmp86(arr9.charAt(num37))}`;
          sum = num37 + 1;
        }
        num37 = num37 + 1;
        str45 = text;
        num38 = sum;
        str46 = text;
        num39 = sum;
      } while (num37 < name.length);
    }
    let sum1 = name;
    if (str46.length > 0) {
      sum1 = str46 + name.slice(num39);
    }
    return combined.concat(sum1);
  } else if (SelectorType.SelectorType.PseudoElement === type) {
    const name1 = type.name;
    let num29 = 0;
    let str37 = "";
    let num30 = 0;
    let str38 = "";
    let num31 = 0;
    if (0 < name1.length) {
      do {
        let text1 = str37;
        let sum2 = num30;
        if (set2.has(name1.charCodeAt(num29))) {
          let concat7 = "".concat;
          let combined2 = "".concat(name1.slice(num30, num29), "\\");
          text1 = `${tmp68(arr8.charAt(num29))}`;
          sum2 = num29 + 1;
        }
        num29 = num29 + 1;
        str37 = text1;
        num30 = sum2;
        str38 = text1;
        num31 = sum2;
      } while (num29 < name1.length);
    }
    let sum3 = name1;
    if (str38.length > 0) {
      sum3 = str38 + name1.slice(num31);
    }
    const combined3 = "::".concat(sum3);
    let str39 = "";
    if (null !== type.data) {
      const data = type.data;
      let num32 = 0;
      let str40 = "";
      let num33 = 0;
      let str41 = "";
      let num34 = 0;
      if (0 < data.length) {
        do {
          let text2 = str40;
          let sum4 = num33;
          if (set1.has(data.charCodeAt(num32))) {
            let concat8 = "".concat;
            let combined4 = "".concat(data.slice(num33, num32), "\\");
            text2 = `${tmp77(arr11.charAt(num32))}`;
            sum4 = num32 + 1;
          }
          num32 = num32 + 1;
          str40 = text2;
          num33 = sum4;
          str41 = text2;
          num34 = sum4;
        } while (num32 < data.length);
      }
      let sum5 = data;
      if (str41.length > 0) {
        sum5 = str41 + data.slice(num34);
      }
      str39 = "(".concat(sum5, ")");
    }
    return combined3.concat(str39);
  } else if (SelectorType.SelectorType.Pseudo === type) {
    const name2 = type.name;
    let num21 = 0;
    let str28 = "";
    let num22 = 0;
    let str29 = "";
    let num23 = 0;
    if (0 < name2.length) {
      do {
        let text3 = str28;
        let sum6 = num22;
        if (set2.has(name2.charCodeAt(num21))) {
          let concat5 = "".concat;
          let combined5 = "".concat(name2.slice(num22, num21), "\\");
          text3 = `${tmp49(arr6.charAt(num21))}`;
          sum6 = num21 + 1;
        }
        num21 = num21 + 1;
        str28 = text3;
        num22 = sum6;
        str29 = text3;
        num23 = sum6;
      } while (num21 < name2.length);
    }
    let sum7 = name2;
    if (str29.length > 0) {
      sum7 = str29 + name2.slice(num23);
    }
    const combined6 = ":".concat(sum7);
    if (null === type.data) {
      return combined6.concat("");
    } else {
      if (typeof type.data === "string") {
        const data1 = type.data;
        let num24 = 0;
        let str31 = "";
        let num25 = 0;
        let str32 = "";
        let num26 = 0;
        if (0 < data1.length) {
          do {
            let text4 = str31;
            let sum8 = num25;
            if (set1.has(data1.charCodeAt(num24))) {
              let concat6 = "".concat;
              let combined7 = "".concat(data1.slice(num25, num24), "\\");
              text4 = `${tmp58(arr7.charAt(num24))}`;
              sum8 = num24 + 1;
            }
            num24 = num24 + 1;
            str31 = text4;
            num25 = sum8;
            str32 = text4;
            num26 = sum8;
          } while (num24 < data1.length);
        }
        let sum9 = data1;
        if (str32.length > 0) {
          sum9 = str32 + data1.slice(num26);
        }
        let joined = sum9;
      } else {
        const data2 = type.data;
        let mapped = data2.map((arr) => {
          const mapped = arr.map(stringifyToken);
          return mapped.join("");
        });
        joined = mapped.join(", ");
      }
      const combined8 = "(".concat(joined, ")");
    }
  } else if (SelectorType.SelectorType.Attribute === type) {
    if ("id" === type.name) {
      if (type.action === SelectorType.AttributeAction.Equals) {
        if ("quirks" === type.ignoreCase) {
          if (!type.namespace) {
            value = type.value;
            let num3 = 0;
            let str5 = "";
            let num4 = 0;
            let str6 = "";
            let num5 = 0;
            if (0 < value.length) {
              do {
                let text5 = str5;
                let sum10 = num4;
                if (set2.has(value.charCodeAt(num3))) {
                  let concat = "".concat;
                  let combined9 = "".concat(value.slice(num4, num3), "\\");
                  text5 = `${tmp9(arr.charAt(num3))}`;
                  sum10 = num3 + 1;
                }
                num3 = num3 + 1;
                str5 = text5;
                num4 = sum10;
                str6 = text5;
                num5 = sum10;
              } while (num3 < value.length);
            }
            let sum11 = value;
            if (str6.length > 0) {
              sum11 = str6 + value.slice(num5);
            }
            return "#".concat(sum11);
          }
        }
      }
    }
    if ("class" === type.name) {
      if (type.action === SelectorType.AttributeAction.Element) {
        if ("quirks" === type.ignoreCase) {
          if (!type.namespace) {
            const value3 = type.value;
            let num8 = 0;
            let str11 = "";
            let num9 = 0;
            let str12 = "";
            let num10 = 0;
            if (0 < value3.length) {
              do {
                let text6 = str11;
                let sum12 = num9;
                if (set2.has(value3.charCodeAt(num8))) {
                  let concat2 = "".concat;
                  let combined10 = "".concat(value3.slice(num9, num8), "\\");
                  text6 = `${tmp17(arr2.charAt(num8))}`;
                  sum12 = num8 + 1;
                }
                num8 = num8 + 1;
                str11 = text6;
                num9 = sum12;
                str12 = text6;
                num10 = sum12;
              } while (num8 < value3.length);
            }
            let sum13 = value3;
            if (str12.length > 0) {
              sum13 = str12 + value3.slice(num10);
            }
            return ".".concat(sum13);
          }
        }
      }
    }
    let str13 = "";
    const concat3 = "".concat;
    const combined11 = "".concat(getNamespace(type.namespace));
    const name3 = type.name;
    let num13 = 0;
    let str15 = "";
    let num14 = 0;
    let str16 = "";
    let num15 = 0;
    if (0 < name3.length) {
      do {
        let text7 = str15;
        let sum14 = num14;
        if (set2.has(name3.charCodeAt(num13))) {
          let combined12 = ``.concat(name3.slice(num14, num13), "\\");
          text7 = `${tmp26(arr3.charAt(num13))}`;
          sum14 = num13 + 1;
        }
        num13 = num13 + 1;
        str15 = text7;
        num14 = sum14;
        str16 = text7;
        num15 = sum14;
      } while (num13 < name3.length);
    }
    let sum15 = name3;
    if (str16.length > 0) {
      sum15 = str16 + name3.slice(num15);
    }
    const combined13 = combined11.concat(sum15);
    if (type.action === SelectorType.AttributeAction.Exists) {
      const concat4 = "[".concat;
      let combined14 = "[".concat(combined13, "]");
    } else {
      const concat12 = "[".concat;
      const combined15 = "[".concat(combined13);
      const action = type.action;
      let str17 = str13;
      if (SelectorType.AttributeAction.Equals !== action) {
        str17 = "~";
        if (SelectorType.AttributeAction.Element !== action) {
          str17 = "^";
          if (SelectorType.AttributeAction.Start !== action) {
            str17 = "$";
            if (SelectorType.AttributeAction.End !== action) {
              str17 = "*";
              if (SelectorType.AttributeAction.Any !== action) {
                str17 = "!";
                if (SelectorType.AttributeAction.Not !== action) {
                  str17 = "|";
                  if (SelectorType.AttributeAction.Hyphen !== action) {
                    if (SelectorType.AttributeAction.Exists === action) {
                      const _Error = Error;
                      const error = new Error("Shouldn't be here");
                      throw error;
                    }
                  }
                }
              }
            }
          }
        }
      }
      const combined16 = combined15.concat(str17, "=\"");
      const value4 = type.value;
      let num16 = 0;
      let tmp34 = str13;
      let num17 = 0;
      let arr5 = str13;
      let num18 = 0;
      if (0 < value4.length) {
        do {
          let sum16 = tmp34;
          let sum17 = num17;
          if (set.has(value4.charCodeAt(num16))) {
            let combined17 = str13.concat(value4.slice(num17, num16), "\\");
            sum16 = tmp34 + combined17.concat(value4.charAt(num16));
            sum17 = num16 + 1;
          }
          num16 = num16 + 1;
          tmp34 = sum16;
          num17 = sum17;
          arr5 = sum16;
          num18 = sum17;
        } while (num16 < value4.length);
      }
      let sum18 = value4;
      if (arr5.length > 0) {
        sum18 = arr5 + value4.slice(num18);
      }
      const combined18 = combined16.concat(sum18, "\"");
      if (null !== type.ignoreCase) {
        let str21 = " s";
        if (type.ignoreCase) {
          str21 = " i";
        }
        str13 = str21;
      }
      combined14 = combined18.concat(str13, "]");
    }
    return combined14;
  }
}
function getNamespace(namespace) {
  let str = "";
  if (null !== namespace) {
    let str4 = "*";
    if ("*" !== namespace) {
      let num = 0;
      let str2 = "";
      let num2 = 0;
      let str3 = "";
      let num3 = 0;
      if (0 < namespace.length) {
        do {
          let text = str2;
          let sum = num2;
          if (set2.has(namespace.charCodeAt(num))) {
            let concat = "".concat;
            let combined = "".concat(namespace.slice(num2, num), "\\");
            text = `${tmp7(namespace.charAt(num))}`;
            sum = num + 1;
          }
          num = num + 1;
          str2 = text;
          num2 = sum;
          str3 = text;
          num3 = sum;
        } while (num < namespace.length);
      }
      let sum1 = namespace;
      if (str3.length > 0) {
        sum1 = str3 + namespace.slice(num3);
      }
      str4 = sum1;
    }
    str = "".concat(str4, "|");
  }
  return str;
}
let fn = this;
if (this) {
  fn = this.__spreadArray;
}
if (!fn) {
  fn = (arr, fnResult, arg2) => {
    let tmp;
    if (arg2) {
      let num4 = 0;
      if (0 < fnResult.length) {
        while (true) {
          let tmp4 = !tmp3;
          let tmp6 = tmp3;
          if (!tmp3) {
            tmp4 = num4 in fnResult;
          }
          let tmp7 = tmp3;
          if (!tmp4) {
            if (!tmp3) {
              break;
            } else {
              tmp6[num4] = fnResult[num4];
              tmp7 = tmp6;
            }
          }
          num4 = num4 + 1;
          tmp3 = tmp7;
          tmp = tmp7;
        }
        const _Array = Array;
        const call = slice.call;
        typeof call === "unknown" ? slice(0, num4) : call(fnResult, 0, num4);
      }
    }
    if (tmp) {
      return arr.concat(tmp);
    } else {
      const _Array2 = Array;
      const call2 = slice2.call;
      typeof call2 === "unknown" ? slice2() : call2(fnResult);
    }
  };
}
function stringify(arr) {
  const mapped = arr.map((arr) => {
    const mapped = arr.map(stringifyToken);
    return mapped.join("");
  });
  return mapped.join(", ");
}
const items = ["\\", "\""];
const fnResult = fn(fn([], items, true), ["(", ")"], false);
const set = new Set(items.map((item) => item.charCodeAt(0)));
const set1 = new Set(fnResult.map((item) => item.charCodeAt(0)));
const set2 = new Set(fn(fn([], fnResult, true), ["~", "^", "$", "*", "+", "!", "|", ":", "[", "]", " ", "."], false).map((item) => item.charCodeAt(0)));

export { stringify };