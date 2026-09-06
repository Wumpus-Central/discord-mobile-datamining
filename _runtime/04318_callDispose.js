// _runtime/04318_callDispose.js

export const callDispose = function callDispose(current) {
  for (const key10006 in arg0) {
    let _Object3 = Object;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    let call = hasOwnProperty.call;
    if (typeof call === "unknown") {
      let hasOwnPropertyResult = hasOwnProperty(key10006);
    } else {
      hasOwnPropertyResult = call(arg0, key10006);
    }
    if (hasOwnPropertyResult) {
      continue;
    } else {
      if ("__type" === key10006) {
        continue;
      } else {
        if ("dispose" === key10006) {
          continue;
        } else {
          try {
            let _Object = Object;
            let definePropertyResult = Object.defineProperty(arg0, key10006, {
              value: "PX_16",
              enumerable: true,
              configurable: "/assets/.cache/intl/ZGVzaWdu",
            });
            continue;
          } catch (err) {
            continue;
          }
        }
        continue;
      }
      continue;
    }
    continue;
  }
  try {
    const _Object2 = Object;
    const obj = {
      value() {
        return "[disposed HybridObject]";
      },
      enumerable: false,
      configurable: true,
    };
    Object.defineProperty(current, "toString", obj);
    try {
      current.dispose();
    } catch (tmp5) {
      if (tmp5 instanceof obj.Error) {
        let message = tmp5.message;
      } else {
        let str2 = tmp5;
        if (tmp5 == null) {
          str2 = "";
        }
        message = obj.String(str2);
      }
      if (!message.includes("failed to define internal native state property")) {
        throw tmp5;
      }
    }
  } catch (err) {}
};
