// === Module 1222: reflectionMergePartial ===

// Module 1222 (reflectionMergePartial)

export const reflectionMergePartial = function reflectionMergePartial(arg0, reflectionCreateResult, arr) {
  let length;
  let length2;
  let sum;
  let sum1;
  const iter = arg0.fields[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2;
    let obj = nextResult;
    let localName = nextResult.localName;
    if (nextResult.oneof) {
      let tmp6 = arr[obj.oneof];
      let tmp7 = tmp6;
      let oneofKind;
      if (null != tmp6) {
        oneofKind = tmp7.oneofKind;
      }
      if (null == oneofKind) {
        continue;
      } else {
        let tmp55 = tmp7[localName];
        arr = tmp55;
        let tmp57 = reflectionCreateResult[obj.oneof];
        tmp2 = tmp57;
        tmp57.oneofKind = tmp7.oneofKind;
        if (null == tmp55) {
          delete tmp2[localName];
          continue;
        }
      }
    } else {
      tmp2 = reflectionCreateResult;
      let tmp4 = arr[localName];
      arr = tmp4;
      continue;
    }
    if (obj.repeat) {
      tmp2[localName].length = arr.length;
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
                tmp2[localName][num] = TResult.create(arr[num]);
                sum = num + 1;
                num = sum;
                length = arr.length;
              } while (sum < length);
            }
          } else if (undefined === tmp2[localName]) {
            tmp2[localName] = TResult.create(arr);
          } else {
            let mergePartialResult = TResult.mergePartial(tmp2[localName], arr);
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
                  tmp2[localName][item10050] = TResult1.create(arr[item10050]);
                  continue;
                }
              }
            }
          }
          let _Object = Object;
          let merged = Object.assign(tmp2[localName], arr);
        }
      }
      continue;
    }
    if (obj.repeat) {
      let num2 = 0;
      if (0 < arr.length) {
        do {
          tmp2[localName][num2] = arr[num2];
          sum1 = num2 + 1;
          num2 = sum1;
          length2 = arr.length;
        } while (sum1 < length2);
      }
    } else {
      tmp2[localName] = arr;
    }
  }
};