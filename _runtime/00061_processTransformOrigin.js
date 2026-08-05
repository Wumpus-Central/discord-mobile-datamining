// _runtime/00061_processTransformOrigin.js
import "_slicedToArray";

const re2 = /(top|bottom|left|right|center|\d+(?:%|px)|0)/gi;

export default function processTransformOrigin(str) {
  let tmp = str;
  if (typeof str === "string") {
    regex.lastIndex = 0;
    const items = ["50%", "50%", 0];
    let match = regex.exec(str);
    let num4 = 0;
    tmp = items;
    if (match) {
      while (true) {
        str = match[0];
        let formatted = str.toLowerCase();
        let tmp3 = num4;
        let sum = num4 + 1;
        if ("left" !== formatted) {
          if ("right" !== formatted) {
            if ("top" !== formatted) {
              if ("bottom" !== formatted) {
                if ("center" === formatted) {
                  let tmp5 = importDefault;
                  let tmp6 = dependencyMap;
                  let tmp7 = require("metro/00038__.js")(2 !== num4, "Transform-origin value %s cannot be used for z-position", str);
                  items[num4] = "50%";
                  let num = sum;
                } else if (str.endsWith("%")) {
                  items[num4] = str;
                  num = sum;
                } else {
                  let _parseFloat = parseFloat;
                  items[num4] = parseFloat(str);
                  num = sum;
                }
              }
            }
            let tmp8 = importDefault;
            let tmp9 = dependencyMap;
            let tmp10 = require("metro/00038__.js")(2 !== num4, "Transform-origin %s can only be used for y-position", str);
            let num2 = "100%";
            if ("top" === formatted) {
              num2 = 0;
            }
            items[1] = num2;
            num = sum;
            if (0 === num4) {
              let tmp20 = regex;
              let match1 = regex.exec(str);
              tmp = items;
              if (null == match1) {
                break;
              } else {
                let str14 = match1[0];
                let formatted1 = str14.toLowerCase();
                if ("left" === formatted1) {
                  items[0] = 0;
                  num = 2;
                } else if ("right" === formatted1) {
                  items[0] = "100%";
                  num = 2;
                } else if ("center" === formatted1) {
                  items[0] = "50%";
                  num = 2;
                } else {
                  let tmp11 = tmp8(38)(false, "Could not parse transform-origin: %s", str);
                  num = 2;
                }
              }
            }
            break;
          }
          let tmp15 = regex;
          match = regex.exec(str);
          num4 = num;
          tmp = items;
          if (!match) {
            break;
          }
        }
        let tmp12 = importDefault;
        let tmp13 = dependencyMap;
        let tmp14 = require("metro/00038__.js")(0 === num4, "Transform-origin %s can only be used for x-position", str);
        let num3 = "100%";
        if ("left" === formatted) {
          num3 = 0;
        }
        items[0] = num3;
        num = sum;
      }
    }
  }
  return tmp;
};