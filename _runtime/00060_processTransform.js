// _runtime/00060_processTransform.js
function _getKeyAndValueFromCSSTransform(arg0, arg1) {}

export default function processTransform(str) {
  let NumberResult;
  let mapped;
  let tmp = str;
  if (typeof str === "string") {
    const _RegExp2 = RegExp;
    const self3 = this;
    const self4 = this;
    const regExp = new RegExp(/(\w+)\(([^)]+)\)/g);
    const items = [];
    let match = regExp.exec(str);
    tmp = items;
    if (match) {
      while (typeof _getKeyAndValueFromCSSTransform === "function") {
        let entry1;
        let _RegExp = RegExp;
        let self = this;
        let self2 = this;
        let regExp1 = new RegExp(/([+-]?\d+(\.\d+)?)([a-zA-Z]+|%)?/g);
        if ("matrix" === tmp3) {
          let entry = { key: tmp3, value: mapped };
          let match1 = str.match(/[+-]?\d+(\.\d+)?/g);
          mapped = undefined;
          if (match1 != null) {
            let _Number4 = Number;
            mapped = match1.map(Number);
          }
          entry1 = entry;
        } else {
          if ("translate" !== tmp3) {
            if ("translate3d" !== tmp3) {
              if ("translateX" !== tmp3) {
                if ("translateY" !== tmp3) {
                  if ("perspective" !== tmp3) {
                    entry1 = { key: tmp3, value: NumberResult };
                    let _isNaN = isNaN;
                    NumberResult = str;
                    if (!isNaN(str)) {
                      let _Number = Number;
                      NumberResult = Number(str);
                    }
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
                let entry2 = { key: tmp3, value: Number(match2[1]) };
                entry1 = entry2;
              } else {
                let entry3 = { key: tmp3, value: "Array" };
                entry1 = entry3;
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
              let arr2 = items1.push(NumberResult1);
            }
            match3 = regExp1.exec(str);
          }
          if (1 === items1.length) {
            let arr3 = items1.push(0);
          }
          let entry4 = { key: "translate", value: items1 };
          entry1 = entry4;
        }
        let value = entry1.value;
        if (undefined !== value) {
          let obj = {};
          obj[tmp13] = value;
          let arr4 = items.push(obj);
        }
        match = regExp.exec(str);
        tmp = items;
      }
      throw new TypeError("Trying to call a non-function");
    }
  }
  return tmp;
}
