// === Module 60: _getKeyAndValueFromCSSTransform ===

// Module 60 (_getKeyAndValueFromCSSTransform)
function _getKeyAndValueFromCSSTransform(arg0, arg1) {

}

export default function processTransform(str) {
  let tmp = str;
  if (typeof str === "string") {
    const _RegExp2 = RegExp;
    const regExp = new RegExp(/(\w+)\(([^)]+)\)/g);
    const items = [];
    let match = regExp.exec(str);
    tmp = items;
    if (match) {
      while (typeof _getKeyAndValueFromCSSTransform === "function") {
        let _RegExp = RegExp;
        let tmp4 = new.target;
        let tmp5 = new.target;
        let regExp1 = new RegExp(/([+-]?\d+(\.\d+)?)([a-zA-Z]+|%)?/g);
        if ("matrix" === tmp3) {
          let entry = { key: tmp3, value: null };
          let match1 = str.match(/[+-]?\d+(\.\d+)?/g);
          let mapped;
          if (match1 != null) {
            let _Number4 = Number;
            mapped = match1.map(Number);
          }
          entry.value = mapped;
          let entry1 = entry;
        } else {
          if ("translate" !== tmp3) {
            if ("translate3d" !== tmp3) {
              if ("translateX" !== tmp3) {
                if ("translateY" !== tmp3) {
                  if ("perspective" !== tmp3) {
                    entry1 = { key: tmp3, value: null };
                    let _isNaN = isNaN;
                    let NumberResult = str;
                    if (!isNaN(str)) {
                      let _Number = Number;
                      NumberResult = Number(str);
                    }
                    entry1.value = NumberResult;
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
                let entry3 = { key: tmp3, value: "a" };
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
              arr = items1.push(NumberResult1);
            }
            match3 = regExp1.exec(str);
          }
          if (1 === items1.length) {
            let arr1 = items1.push(0);
          }
          let entry4 = { key: "translate", value: items1 };
          entry1 = entry4;
        }
        value = entry1.value;
        if (undefined !== value) {
          let obj = {};
          obj[tmp15] = value;
          let arr2 = items.push(obj);
        }
        match = regExp.exec(str);
        tmp = items;
      }
      throw new TypeError("Trying to call a non-function");
    }
  }
  return tmp;
};