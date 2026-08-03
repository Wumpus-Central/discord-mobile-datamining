arg5.callDispose = function callDispose(closure_0) {
  for (const key10006 in arg0) {
    let tmp7 = key10006;
    let _Object3 = Object;
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
            let definePropertyResult = Object.defineProperty(arg0, key10006, { value: "ct", enumerable: true, configurable: "/assets/.cache/intl/bW9kdWxlcy9jaGVja291dC9tZXNzYWdlcw==" });
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
    const obj = { value: null, enumerable: false, configurable: true };
    obj[0] = function value() {
      return "[disposed HybridObject]";
    };
    Object.defineProperty(closure_0, "toString", obj);
    try {
      closure_0.dispose();
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
  } catch (err) {
  }
};