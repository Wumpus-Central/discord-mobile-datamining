// _runtime/00060__getKeyAndValueFromCSSTransform.js
function _getKeyAndValueFromCSSTransform(arg0, arg1) {

}
arg5.default = function processTransform(str) {
  let tmp = str;
  if (typeof str === "string") {
    const _RegExp2 = RegExp;
    const regExp = new RegExp(/(\w+)\(([^)]+)\)/g);
    const items = [];
    let match = regExp.exec(str);
    tmp = items;
    while (match) {
      let tmp2 = _getKeyAndValueFromCSSTransform;
      let tmp3 = match[1];
      str = match[2];
      if (typeof _getKeyAndValueFromCSSTransform !== "function") {
        let str10 = "Trying to call a non-function";
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      }
      let _RegExp = RegExp;
      let tmp4 = new.target;
      let tmp5 = new.target;
      let regExp1 = new RegExp(/([+-]?\d+(\.\d+)?)([a-zA-Z]+|%)?/g);
      if ("matrix" === tmp3) {
        let obj = { key: null, value: null };
        obj[0] = tmp3;
        let match1 = str.match(/[+-]?\d+(\.\d+)?/g);
        let mapped;
        if (match1 != null) {
          let _Number4 = Number;
          mapped = match1.map(Number);
        }
        obj[1] = mapped;
      } else {
        let tmp24 = regExp1;
        if ("translate" !== tmp3) {
          if ("translate3d" !== tmp3) {
            if ("translateX" !== tmp3) {
              if ("translateY" !== tmp3) {
                if ("perspective" !== tmp3) {
                  obj = { key: null, value: null };
                  obj[0] = tmp3;
                  let _isNaN = isNaN;
                  let NumberResult = str;
                  if (!isNaN(str)) {
                    let _Number = Number;
                    NumberResult = Number(str);
                  }
                  obj[1] = NumberResult;
                }
              }
            }
            let match2 = regExp1.exec(str);
            let length;
            if (match2 != null) {
              length = match2.length;
            }
            if (length) {
              let _Number2 = Number;
              let tmp8 = match2[3];
              let obj1 = { key: null, value: null };
              obj1[0] = tmp3;
              obj1[1] = Number(match2[1]);
              obj = obj1;
            } else {
              let obj2 = { key: null, value: "a" };
              obj2[0] = tmp3;
              obj = obj2;
            }
          }
        }
        let items1 = [];
        let match3 = regExp1.exec(str);
        while (match3) {
          let _Number3 = Number;
          let NumberResult1 = Number(match3[1]);
          if ("%" === match3[3]) {
            let _HermesInternal = HermesInternal;
            let arr = items1.push("" + NumberResult1 + "%");
          } else {
            arr = items1.push(NumberResult1);
          }
          match3 = regExp1.exec(str);
        }
        if (1 === items1.length) {
          let arr1 = items1.push(0);
        }
        let obj3 = { key: "translate", value: null };
        obj3[1] = items1;
        obj = obj3;
      }
      let value = obj.value;
      if (undefined !== value) {
        let obj4 = {};
        obj4[tmp15] = value;
        let arr2 = items.push(obj4);
      }
      match = regExp.exec(str);
      tmp = items;
    }
  }
  return tmp;
};