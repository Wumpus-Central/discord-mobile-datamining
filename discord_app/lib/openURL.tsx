// discord_app/lib/openURL.tsx
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
let closure_3 = async function _openURL(arg0, value) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp2;
          closure_130_0 = closure_0;
          closure_130_1 = closure_1;
          require("handleURL").default(closure_0);
          c3 = 1;
          c4 = 1;
          const obj1 = { value: require("asyncRequireImpl")(paths[2], paths.paths), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj2 = { value, done: true };
        return obj2;
      } else {
        obj = { skipExtensionCheck: closure_130_1, analyticsLocations: [] };
        value.default(closure_130_0, obj);
        c4 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp15) {
      c4 = tmp;
      throw tmp15;
    }
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("lib/openURL.tsx");

export default function openURL() {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
