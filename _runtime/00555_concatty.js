// _runtime/00555_concatty.js
function concatty(arg0, arg1) {

}

export default function bind(self, c165, cache, serializer, bindResult, closure_2) {
  let length;
  let sum;
  self = this;
  toString = self;
  self = this;
  if (typeof this === "function") {
    if ("[object Function]" === toString.apply(self)) {
      let items = [];
      let num2 = 0;
      let num = 1;
      if (1 < arguments.length) {
        do {
          items[num2] = arguments[num];
          num = num + 1;
          num2 = num2 + 1;
          length = arguments.length;
        } while (num < length);
      }
      let items1 = [];
      for (let num3 = 0; num3 < tmp2; num3 = num3 + 1) {
        items1[num3] = "$" + num3;
      }
      let num4 = 0;
      let str4 = "";
      if (0 < items1.length) {
        do {
          let text = `${arr[num4]}`;
          sum = num4 + 1;
          let text1 = text;
          if (sum < items1.length) {
            text1 = `${arr[num4]},`;
          }
          str4 = text1;
          num4 = sum;
        } while (sum < items1.length);
      }
      const _HermesInternal = HermesInternal;
      const tmp7 = Function("binder", "return function (" + str4 + "){ return binder.apply(this,arguments); }")(function() {
        let length;
        let length2;
        let length3;
        let length4;
        self = this;
        const apply = self.apply;
        if (this instanceof closure_2) {
          if (typeof closure_2 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          items = [];
          let num7 = 0;
          if (0 < items.length) {
            do {
              items[num7] = arr3[num7];
              num7 = num7 + 1;
              length3 = arr3.length;
            } while (num7 < length3);
          }
          let num8 = 0;
          if (0 < arguments.length) {
            do {
              items[num8 + arr3.length] = arguments[num8];
              num8 = num8 + 1;
              length4 = arguments.length;
            } while (num8 < length4);
          }
          const applyResult = apply(self, items);
          const _Object = Object;
          if (Object(applyResult) === applyResult) {
            self = applyResult;
          }
          return self;
        } else {
          if (typeof closure_2 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const items1 = [];
          let num3 = 0;
          if (0 < items.length) {
            do {
              items1[num3] = arr[num3];
              num3 = num3 + 1;
              length = arr.length;
            } while (num3 < length);
          }
          let num4 = 0;
          if (0 < arguments.length) {
            do {
              items1[num4 + arr.length] = arguments[num4];
              num4 = num4 + 1;
              length2 = arguments.length;
            } while (num4 < length2);
          }
          return apply(closure_0, items1);
        }
      });
      closure_2 = tmp7;
      if (self.prototype) {
        class Empty {
          constructor() {
            return;
          }
        }
        Empty.prototype = self.prototype;
        tmp7.prototype = Object.create(Empty.prototype);
        Empty.prototype = null;
      }
      return tmp7;
    }
  }
  const typeError = new TypeError("Function.prototype.bind called on incompatible " + self);
  throw typeError;
};