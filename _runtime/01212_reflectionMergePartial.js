// _runtime/01212_reflectionMergePartial.js

export const reflectionMergePartial = function reflectionMergePartial(arg0, reflectionCreateResult, arr) {
  const iter = arg0.fields[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let obj = nextResult;
    let localName = nextResult.localName;
    if (nextResult.oneof) {
      let tmp8 = arr[obj.oneof];
      let tmp9 = tmp8;
      let oneofKind;
      if (null != tmp8) {
        oneofKind = tmp9.oneofKind;
      }
      if (null == oneofKind) {
        continue;
      } else {
        let tmp59 = tmp9[localName];
        arr = tmp59;
        let tmp61 = reflectionCreateResult[obj.oneof];
        let tmp4 = tmp61;
        tmp61.oneofKind = tmp9.oneofKind;
        if (null == tmp59) {
          delete tmp2[tmp];
          continue;
        }
      }
    } else {
      tmp4 = reflectionCreateResult;
      let tmp6 = arr[localName];
      arr = tmp6;
      continue;
    }
    if (obj.repeat) {
      tmp4[localName].length = arr.length;
    }
    let kind = obj.kind;
    if ("scalar" !== kind) {
      if ("enum" !== kind) {
        if ("message" === kind) {
          let TResult = obj.T();
          if (obj.repeat) {
            let num = 0;
            if (0 < arr.length) {
              do {
                tmp4[localName][num] = TResult.create(arr[num]);
                sum = num + 1;
                num = sum;
                length = arr.length;
              } while (sum < length);
            }
          } else if (undefined === tmp4[localName]) {
            tmp4[localName] = TResult.create(arr);
          } else {
            let mergePartialResult = TResult.mergePartial(tmp4[localName], arr);
          }
        } else if ("map" === kind) {
          let kind2 = obj.V.kind;
          if ("scalar" !== kind2) {
            if ("enum" !== kind2) {
              if ("message" === kind2) {
                let V = obj.V;
                let TResult1 = V.T();
                let _Object2 = Object;
                let keys = Object.keys(arr);
                for (const item10050 of keys) {
                  tmp4[localName][item10050] = TResult1.create(arr[item10050]);
                  continue;
                }
              }
            }
          }
          let _Object = Object;
          let merged = Object.assign(tmp4[localName], arr);
        }
      }
      continue;
    }
    if (obj.repeat) {
      let num2 = 0;
      if (0 < arr.length) {
        do {
          tmp4[localName][num2] = arr[num2];
          sum1 = num2 + 1;
          num2 = sum1;
          length2 = arr.length;
        } while (sum1 < length2);
      }
    } else {
      tmp4[localName] = arr;
    }
  }
};
