// discord_app/lib/Record.tsx
import size from "../../_runtime/metro/00002__.js";

class Record {
  toJS() {
    const obj = {};
    const merged = Object.assign(this);
    return obj;
  }
  set(arg0, getTime) {
    const self = this;
    if (getTime instanceof Date) {
      let tmp2;
      const _Date = Date;
      if (this[arg0] instanceof Date) {
        const time = getTime.getTime();
        tmp2 = self;
      }
      return tmp2;
    }
    let constructor1 = self;
    if (this[arg0] !== getTime) {
      const obj2 = {};
      const constructor = self.constructor;
      const merged = Object.assign(self);
      obj2[arg0] = getTime;
      const self2 = this;
      const self3 = this;
      constructor1 = new constructor(obj2);
    }
    tmp2 = constructor1;
  }
  merge(arg0) {
    const self = this;
    let tmp2 = null;
    let tmp3 = null;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp3 = tmp2;
      while (keys[tmp] !== undefined) {
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
                let obj3 = {};
                let merged = Object.assign(self);
                tmp10 = obj3;
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
      const self2 = this;
      const self3 = this;
      constructor = new self.constructor(tmp3);
    }
    return constructor;
  }
  update(arg0, arg1, arg2) {
    let tmp2 = arg2;
    const tmp3 = arg1;
    if (null == arg2) {
      tmp2 = arg1;
    }
    const self = this;
    let tmp5 = tmp4;
    if (!(this[arg0] instanceof Record)) {
      let tmp7;
      const _Array = Array;
      if (this[arg0] instanceof Array) {
        const items = [];
        HermesBuiltin.arraySpread(items, this[arg0], 0);
        tmp7 = items;
      } else {
        const _Object = Object;
        tmp7 = tmp4;
        if (this[arg0] instanceof Object) {
          const obj = {};
          const merged = Object.assign(tmp4);
          tmp7 = obj;
        }
      }
      tmp5 = tmp7;
    }
    if (undefined === tmp5) {
      tmp5 = tmp3;
    }
    return self.set(arg0, tmp2(tmp5));
  }
}
const prototype = Record.prototype;
const result = size.fileFinishedImporting("lib/Record.tsx");
class TypedRecord {
  toJS() {
    const obj = {};
    const merged = Object.assign(this);
    return obj;
  }
  set(arg0, arg1) {
    const obj = { [arg0]: arg1 };
    return this.merge(obj);
  }
  merge(arg0) {
    const self = this;
    let tmp2 = null;
    let tmp3 = null;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp3 = tmp2;
      while (keys[tmp] !== undefined) {
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
      const self2 = this;
      const self3 = this;
      constructor = new self.constructor(tmp3);
    }
    return constructor;
  }
  update(arg0, arg1, fn) {
    const self = this;
    let tmp3 = tmp2;
    if (!(this[arg0] instanceof Record)) {
      let tmp5;
      const _Array = Array;
      if (this[arg0] instanceof Array) {
        const items = [];
        HermesBuiltin.arraySpread(items, this[arg0], 0);
        tmp5 = items;
      } else {
        const _Object = Object;
        tmp5 = tmp2;
        if (this[arg0] instanceof Object) {
          const obj = {};
          const merged = Object.assign(tmp2);
          tmp5 = obj;
        }
      }
      tmp3 = tmp5;
    }
    if (undefined === tmp3) {
      tmp3 = arg1;
    }
    return self.set(arg0, fn(tmp3));
  }
}

export default Record;
export { TypedRecord };
