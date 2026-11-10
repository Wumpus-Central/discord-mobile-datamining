// _runtime/15898_DIRTY.js
import _mod15895 from "metro/15895__.js";
import asyncGeneratorStep from "00005_asyncGeneratorStep.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

const ParseStatus = require;
let closure_1 = exports;
let fn = this;
if (this) {
  fn = this.__importDefault;
}
if (!fn) {
  fn = (__esModule) => {
    if (!__esModule) {
      const obj = { default: __esModule };
      let tmp = obj;
    } else {
      tmp = __esModule;
    }
    return tmp;
  };
}
const _isNativeReflectConstruct = fn(_mod15895);
closure_1 = undefined;
class ParseStatus {
  constructor() {
    tmp = closure_3(this, ParseStatus);
    this.value = "valid";
    return;
  }
}
let entry = {
  key: "dirty",
  value: function dirty() {
    if ("valid" === this.value) {
      tmp.value = "dirty";
    }
  }
};
let items = [
  entry,
  {
    key: "abort",
    value: function abort() {
      if ("aborted" !== this.value) {
        this.value = "aborted";
      }
    }
  }
];
const entry1 = {
  key: "mergeArray",
  value: function mergeArray(status, found) {
    items = [];
    const iter = found[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let iter2 = nextResult;
      if ("aborted" === nextResult.status) {
        iter.return();
        return closure_1.INVALID;
      } else {
        if ("dirty" === iter2.status) {
          let dirtyResult = status.dirty();
        }
        let arr = items.push(iter2.value);
        continue;
      }
    }
    return { status: status.value, value: items };
  }
};
const items1 = [entry1, , ];
const entry2 = { key: "mergeObjectAsync", value: null };
closure_1 = asyncGeneratorStep(async (arg0, arg1) => {
  closure_0 = arg0;
  dependencyMap = arg1;
  c8 = 0;
  c9 = 0;
  c7 = 0;
  return (async (arg0, value) => {
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      while (true) {
        c9 = 2;
        let tmp5 = c8;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            let obj2 = { value, done: true };
            return obj2;
          } else {
            closure_5 = tmp;
            closure_4 = tmp2;
            closure_132_0 = closure_0;
            closure_132_2 = undefined;
            closure_132_3 = undefined;
            closure_132_4 = undefined;
            closure_132_1 = [];
            closure_3 = dependencyMap;
            closure_2 = dependencyMap[Symbol.iterator]();
          }
        } else if (1 === tmp5) {
          c7 = 0;
          closure_2.return();
          throw closure_1_6;
        } else if (2 === tmp5) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            closure_2.return();
            c9 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            closure_132_3 = value;
            c8 = 3;
            c9 = 1;
            let obj4 = { value: closure_132_2.value, done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 0;
          closure_2.return();
          c9 = 3;
          let obj5 = { value, done: true };
          return obj5;
        } else {
          closure_132_4 = value;
          let entry = { key: null, value: null };
          entry.key = closure_132_3;
          entry.value = closure_132_4;
          let arr = closure_132_1.push(entry);
          c7 = 0;
        }
        if (closure_2 === undefined) {
          c9 = 3;
          let obj6 = { value: closure_133_0.mergeObjectSync(closure_132_0, closure_132_1), done: true };
          return obj6;
        } else {
          c7 = 1;
          closure_132_2 = tmp20;
          c8 = 2;
          c9 = 1;
          let obj7 = { value: closure_132_2.key, done: false };
          return obj7;
        }
      }
    }
  })();
});
entry2.value = function mergeObjectAsync(status, items) {
  const self = this;
  const apply = closure_1.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items1[1] = entry2;
items1[2] = {
  key: "mergeObjectSync",
  value: function mergeObjectSync(status, items) {
    const obj = {};
    const iter = items[Symbol.iterator]();
    const iter2 = iter.next();
    while (iter !== undefined) {
      let key = iter2.key;
      let iter3 = key;
      let iter4 = iter2.value;
      if ("aborted" === key.status) {
        iter.return();
        return closure_1.INVALID;
      } else if ("aborted" === iter4.status) {
        iter.return();
        return closure_1.INVALID;
      } else {
        if ("dirty" === iter3.status) {
          let dirtyResult = status.dirty();
        }
        if ("dirty" === iter4.status) {
          let dirtyResult1 = status.dirty();
        }
        let tmp7 = "__proto__" === iter3.value;
        if (!tmp7) {
          let tmp9 = undefined === iter4.value;
          if (tmp9) {
            tmp9 = !tmp.alwaysSet;
          }
          tmp7 = tmp9;
        }
        if (!tmp7) {
          obj[iter3.value] = iter4.value;
        }
        continue;
      }
    }
    return { status: status.value, value: obj };
  }
};

export (path) => {
  ({ errorMaps, issueData } = path);
  items = [...path.path, ...tmp2];
  const obj = {};
  const merged = Object.assign(issueData);
  obj.path = items;
  if (undefined !== issueData.message) {
    const obj2 = {};
    const merged1 = Object.assign(issueData);
    obj2.path = items;
    obj2.message = issueData.message;
    return obj2;
  } else {
    let str = "";
    const found = errorMaps.filter((item) => item);
    const substr = found.slice();
    const reversed = substr.reverse();
    for (const item10022 of reversed) {
      let obj3 = { data: tmp, defaultError: null };
      obj3.defaultError = str;
      str = item10022(obj, obj3).message;
      continue;
    }
    const obj4 = {};
    const merged2 = Object.assign(issueData);
    obj4.path = items;
    obj4.message = str;
    return obj4;
  }
  tmp2 = issueData.path || [];
}
export const EMPTY_PATH = [];
export function addIssueToContext(ctx, issueData) {
  const errorMap = ParseStatus(15894).getErrorMap();
  const obj = { issueData, data: ctx.data, path: ctx.path, errorMaps: null };
  items = [ctx.common.contextualErrorMap, ctx.schemaErrorMap, errorMap, ];
  let _default;
  if (errorMap !== _isNativeReflectConstruct.default) {
    _default = _isNativeReflectConstruct.default;
  }
  items[3] = _default;
  obj.errorMaps = items.filter((item) => item);
  const issues = ctx.common.issues;
  issues.push(closure_1.makeIssue(obj));
}
export const ParseStatus = _createClass(ParseStatus, items, items1);
export const INVALID = Object.freeze({ status: "aborted" });
export (value) => ({ status: "dirty", value })
export (data) => ({ status: "valid", value: data })
export (status) => "aborted" === status.status
export (status) => "dirty" === status.status
export (status) => "valid" === status.status
export (_parseResult) => {
  let tmp = typeof Promise !== "undefined";
  if (typeof Promise !== "undefined") {
    tmp = _parseResult instanceof Promise;
  }
  return tmp;
}