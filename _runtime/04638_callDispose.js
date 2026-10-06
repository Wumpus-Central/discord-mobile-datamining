// _runtime/04638_callDispose.js
let hasOwnProperty;

export const callDispose = function callDispose(c0) {
  for (const key10006 in c0) {
    let _Object3 = Object;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    if (hasOwnProperty.call(c0, key10006)) {
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
            let definePropertyResult = Object.defineProperty(c0, key10006, {
              value: "Reflect",
              enumerable: true,
              configurable: "/assets/.cache/intl/bW9kdWxlcy9hZHM=",
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
    Object.defineProperty(c0, "toString", obj);
  } catch (err) {}
  try {
    c0.dispose();
  } catch (tmp4) {
    let message;
    const _Error = Error;
    if (tmp4 instanceof Error) {
      message = tmp4.message;
    } else {
      let str2 = tmp4;
      const _String = String;
      if (tmp4 == null) {
        str2 = "";
      }
      message = _String(str2);
    }
    if (!message.includes("failed to define internal native state property")) {
      throw tmp4;
    }
  }
};
