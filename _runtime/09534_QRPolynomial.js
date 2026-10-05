// _runtime/09534_QRPolynomial.js
import _mod9535 from "metro/09535__.js";

class QRPolynomial {
  constructor(arg0, arg1) {
    let diff;
    if (null == arg0.length) {
      const _Error = Error;
      const self4 = this;
      const self5 = this;
      const error = new Error(arg0.length + "/" + arg1);
      throw error;
    } else {
      let num3 = 0;
      if (0 < arg0.length) {
        let num2 = 0;
        num3 = 0;
        if (0 == arg0[0]) {
          const sum = num2 + 1;
          num3 = sum;
          while (sum < arg0.length) {
            num2 = sum;
            num3 = sum;
            if (0 != arg0[sum]) {
              break;
            }
          }
        }
      }
      const _Array = Array;
      const self2 = this;
      const self3 = this;
      const self = this;
      const array = new Array(arg0.length - num3 + arg1);
      this.num = array;
      let num5 = 0;
      if (0 < arg0.length - num3) {
        do {
          self.num[num5] = arg0[num5 + num3];
          num5 = num5 + 1;
          diff = arg0.length - num3;
        } while (num5 < diff);
      }
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
    let length1;
    const self = this;
    const length = this.getLength();
    const arr = new Array(length + getLength.getLength() - 1);
    let num = 0;
    if (0 < this.getLength()) {
      do {
        let num2 = 0;
        if (0 < getLength.getLength()) {
          do {
            let sum = num + num2;
            let tmp4 = arr[sum];
            let tmp7 = _mod9535;
            let gexp = tmp7.gexp;
            let obj = _mod9535;
            let glogResult = obj.glog(self.get(num));
            let obj2 = _mod9535;
            arr[sum] = tmp4 ^ gexp(glogResult + obj2.glog(getLength.get(num2)));
            num2 = num2 + 1;
            length1 = getLength.getLength();
          } while (num2 < length1);
        }
        num = num + 1;
      } while (num < self.getLength());
    }
    if (null == arr.length) {
      const _Error = Error;
      const self4 = this;
      const self5 = this;
      const error = new Error(arr.length + "/");
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
      const obj3 = Object.create(tmp10);
      const _Array = Array;
      const self2 = this;
      const self3 = this;
      const array = new Array(arr.length - num4);
      obj3.num = array;
      let num5 = 0;
      if (0 < arr.length - num4) {
        do {
          obj3.num[num5] = arr[num5 + num4];
          num5 = num5 + 1;
          diff = arr.length - num4;
        } while (num5 < diff);
      }
      return obj3;
    }
  },
  mod(getLength) {
    let diff1;
    let length1;
    let length2;
    const self = this;
    const length = this.getLength();
    if (length - getLength.getLength() < 0) {
      return self;
    } else {
      const obj3 = _mod9535;
      const _Array2 = Array;
      const glogResult = obj3.glog(self.get(0));
      const obj4 = _mod9535;
      const diff = glogResult - obj4.glog(getLength.get(0));
      const self6 = this;
      const self7 = this;
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
          let tmp3 = arr[num2];
          let tmp6 = _mod9535;
          let gexp = tmp6.gexp;
          let obj = _mod9535;
          arr[num2] = tmp3 ^ gexp(obj.glog(getLength.get(num2)) + diff);
          num2 = num2 + 1;
          length2 = getLength.getLength();
        } while (num2 < length2);
      }
      if (null == arr.length) {
        const _Error = Error;
        const self4 = this;
        const self5 = this;
        const error = new Error(arr.length + "/");
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
        const obj2 = Object.create(tmp9);
        const _Array = Array;
        const self2 = this;
        const self3 = this;
        const array = new Array(arr.length - num4);
        obj2.num = array;
        let num5 = 0;
        if (0 < arr.length - num4) {
          do {
            obj2.num[num5] = arr[num5 + num4];
            num5 = num5 + 1;
            diff1 = arr.length - num4;
          } while (num5 < diff1);
        }
        return obj2.mod(getLength);
      }
    }
  },
};

export default QRPolynomial;
