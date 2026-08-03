let Record;
class Record {
}
const prototype = Record.prototype;
prototype["toJS"] = function toJS() {
  const merged = Object.assign(this);
  return {};
};
prototype["set"] = function set(arg0, getTime) {
  const self = this;
  let obj = this[arg0];
  if (getTime instanceof Date) {
    const _Date = Date;
    if (obj instanceof Date) {
      const time = getTime.getTime();
      let tmp2 = self;
    }
    return tmp2;
  }
  let constructor = self;
  if (obj !== getTime) {
    obj = {};
    const merged = Object.assign(self);
    obj[arg0] = getTime;
    constructor = new self.constructor(obj);
  }
  tmp2 = constructor;
};
prototype["merge"] = function merge(arg0) {
  const self = this;
  let tmp2 = null;
  let tmp3 = null;
  const keys = Object.keys();
  if (keys !== undefined) {
    tmp3 = tmp2;
    while (keys[tmp] !== undefined) {
      let tmp18 = tmp6;
      if (!arg0.hasOwnProperty(tmp6)) {
        continue;
      } else {
        let obj = self[tmp6];
        let obj2 = arg0[tmp6];
        let _Date = Date;
        let tmp7 = obj2 instanceof Date;
        if (tmp7) {
          let _Date2 = Date;
          tmp7 = obj instanceof Date;
        }
        if (tmp7) {
          let time = obj2.getTime();
          tmp7 = time === obj.getTime();
        }
        tmp2 = tmp5;
        if (tmp7) {
          continue;
        } else {
          let tmp9 = tmp5;
          if (obj !== obj2) {
            let tmp10 = tmp5;
            if (null == tmp5) {
              obj = {};
              let tmp11 = obj;
              let tmp12 = self;
              let merged = Object.assign(self);
              tmp10 = obj;
            }
            tmp10[tmp6] = arg0[tmp6];
            tmp9 = tmp10;
          }
          tmp2 = tmp9;
          continue;
        }
        continue;
      }
      continue;
    }
  }
  let constructor = self;
  if (null != tmp3) {
    constructor = new self.constructor(tmp3);
  }
  return constructor;
};
prototype["update"] = function update(arg0, arg1, arg2) {
  let tmp = arg2;
  if (null == arg2) {
    tmp = arg1;
  }
  const self = this;
  let tmp4 = tmp3;
  if (this[arg0] instanceof Record) {
    if (undefined === tmp4) {
      tmp4 = arg1;
    }
    return self.set(arg0, tmp(tmp4));
  } else {
    const _Array = Array;
    if (tmp3 instanceof Array) {
      const items = [];
      HermesBuiltin.arraySpread(tmp3, 0);
      let tmp6 = items;
    } else {
      const _Object = Object;
      tmp6 = tmp3;
      if (tmp3 instanceof Object) {
        const obj = {};
        const merged = Object.assign(tmp3);
        tmp6 = obj;
      }
    }
  }
};
const result = require("set").fileFinishedImporting("lib/Record.tsx");
class TypedRecord {
}
const prototype2 = TypedRecord.prototype;
prototype2["toJS"] = function toJS() {
  const merged = Object.assign(this);
  return {};
};
prototype2["set"] = function set(arg0, arg1) {
  return this.merge({ [arg0]: arg1 });
};
prototype2["merge"] = function merge(arg0) {
  const self = this;
  let tmp2 = null;
  let tmp3 = null;
  const keys = Object.keys();
  if (keys !== undefined) {
    tmp3 = tmp2;
    while (keys[tmp] !== undefined) {
      let tmp12 = tmp6;
      if (!arg0.hasOwnProperty(tmp6)) {
        continue;
      } else {
        tmp2 = tmp5;
        if (self[tmp6] === arg0[tmp6]) {
          continue;
        } else {
          let toJSResult = tmp5;
          if (null == tmp5) {
            toJSResult = self.toJS();
          }
          toJSResult[tmp6] = arg0[tmp6];
          tmp2 = toJSResult;
          continue;
        }
        continue;
      }
      continue;
    }
  }
  let constructor = self;
  if (null != tmp3) {
    constructor = new self.constructor(tmp3);
  }
  return constructor;
};
prototype2["update"] = function update(arg0, arg1, arg2) {
  const self = this;
  let tmp2 = tmp;
  if (this[arg0] instanceof Record) {
    if (undefined === tmp2) {
      tmp2 = arg1;
    }
    return self.set(arg0, arg2(tmp2));
  } else {
    const _Array = Array;
    if (tmp instanceof Array) {
      const items = [];
      HermesBuiltin.arraySpread(tmp, 0);
      let tmp4 = items;
    } else {
      const _Object = Object;
      tmp4 = tmp;
      if (tmp instanceof Object) {
        const obj = {};
        const merged = Object.assign(tmp);
        tmp4 = obj;
      }
    }
  }
};

export default Record;
export { TypedRecord };