// _runtime/09964_QRPolynomial.js
import _mod9965 from "metro/09965__.js";

class QRPolynomial {
  constructor(arg0, arg1) {
    if (null == global.length) {
      tmp8 = globalThis;
      _Error = Error;
      str = "/";
      tmp9 = new.target;
      tmp10 = new.target;
      error = new Error(global.length + "/" + require);
      tmp12 = error;
      throw error;
    } else {
      num6 = 0;
      num3 = 0;
      if (0 < global.length) {
        num = 1;
        num2 = 0;
        num3 = 0;
        if (0 == global[0]) {
          sum = num2 + 1;
          num3 = sum;
          while (sum < global.length) {
            num2 = sum;
            num3 = sum;
            if (0 != global[sum]) {
              break;
            }
          }
        }
      }
      tmp2 = globalThis;
      _Array = Array;
      tmp3 = new.target;
      tmp4 = new.target;
      self = this;
      array = new Array(global.length - num3 + require);
      tmp6 = array;
      this.num = array;
      num4 = 1;
      num5 = 0;
      if (0 < global.length - num3) {
        do {
          self.num[num5] = global[num5 + num3];
          num5 = num5 + 1;
          diff = global.length - num3;
        } while (num5 < diff);
      }
      return;
    }
  }
}
QRPolynomial.prototype = {
  get(arg0) {
    return this.num[arg0];
  },
  getLength() {
    return this.num.length;
  },
  multiply(getLength) {
    let diff;
    const self = this;
    const arr = new Array(this.getLength() + getLength.getLength() - 1);
    let num = 0;
    if (0 < this.getLength()) {
      do {
        let tmp2 = num;
        let num2 = 0;
        if (0 < getLength.getLength()) {
          do {
            let sum = num + num2;
            let tmp4 = require;
            let tmp5 = dependencyMap;
            let obj = _mod9965;
            let obj2 = _mod9965;
            let glogResult = obj2.glog(self.get(num));
            let obj3 = _mod9965;
            arr[sum] = arr[sum] ^ obj.gexp(glogResult + obj3.glog(getLength.get(num2)));
            num2 = num2 + 1;
            length1 = getLength.getLength();
          } while (num2 < length1);
        }
        num = num + 1;
      } while (num < self.getLength());
    }
    if (null == arr.length) {
      const _Error = Error;
      error = new Error(arr.length + "/");
      throw error;
    } else {
      let num4 = 0;
      if (0 < arr.length) {
        let num3 = 0;
        num4 = 0;
        if (0 == arr[0]) {
          const sum1 = num3 + 1;
          num4 = sum1;
          while (sum1 < arr.length) {
            num3 = sum1;
            num4 = sum1;
            if (0 != arr[sum1]) {
              break;
            }
          }
        }
      }
      obj = Object.create(tmp8);
      const _Array = Array;
      const array = new Array(arr.length - num4);
      obj.num = array;
      let num5 = 0;
      if (0 < arr.length - num4) {
        do {
          obj.num[num5] = arr[num5 + num4];
          num5 = num5 + 1;
          diff = arr.length - num4;
        } while (num5 < diff);
      }
      return obj;
    }
    const length = this.getLength();
  },
  mod(getLength) {
    let diff1;
    let length1;
    let length2;
    const self = this;
    if (length - getLength.getLength() < 0) {
      return self;
    } else {
      const obj4 = _mod9965;
      const glogResult = _mod9965.glog(self.get(0));
      const _Array2 = Array;
      const diff = glogResult - _mod9965.glog(getLength.get(0));
      const arr = new Array(self.getLength());
      let num = 0;
      if (0 < self.getLength()) {
        do {
          arr[num] = self.get(num);
          num = num + 1;
          length1 = self.getLength();
        } while (num < length1);
      }
      let num2 = 0;
      if (0 < getLength.getLength()) {
        do {
          let tmp3 = require;
          let tmp4 = dependencyMap;
          let obj = _mod9965;
          let obj2 = _mod9965;
          arr[num2] = arr[num2] ^ obj.gexp(obj2.glog(getLength.get(num2)) + diff);
          num2 = num2 + 1;
          length2 = getLength.getLength();
        } while (num2 < length2);
      }
      if (null == arr.length) {
        const _Error = Error;
        error = new Error(arr.length + "/");
        throw error;
      } else {
        let num4 = 0;
        if (0 < arr.length) {
          let num3 = 0;
          num4 = 0;
          if (0 == arr[0]) {
            const sum = num3 + 1;
            num4 = sum;
            while (sum < arr.length) {
              num3 = sum;
              num4 = sum;
              if (0 != arr[sum]) {
                break;
              }
            }
          }
        }
        obj = Object.create(tmp7);
        const _Array = Array;
        const array = new Array(arr.length - num4);
        obj.num = array;
        let num5 = 0;
        if (0 < arr.length - num4) {
          do {
            obj.num[num5] = arr[num5 + num4];
            num5 = num5 + 1;
            diff1 = arr.length - num4;
          } while (num5 < diff1);
        }
        return obj.mod(getLength);
      }
      const obj5 = _mod9965;
    }
    length = this.getLength();
  },
};

export default QRPolynomial;
