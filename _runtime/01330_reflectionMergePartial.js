// _runtime/01330_reflectionMergePartial.js
arg5.reflectionMergePartial = function reflectionMergePartial(arg0, reflectionCreateResult, arr) {
  const iter = arg0.fields[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let obj = nextResult;
    let localName = nextResult.localName;
    if (nextResult.oneof) {
      let tmp7 = nextResult;
      let tmp8 = arr[obj.oneof];
      let tmp9 = tmp8;
      let oneofKind;
      if (null != tmp8) {
        let tmp11 = tmp8;
        oneofKind = tmp9.oneofKind;
      }
      if (null == oneofKind) {
        continue;
      } else {
        let tmp57 = tmp8;
        let tmp58 = localName;
        let tmp59 = tmp9[localName];
        arr = tmp59;
        let tmp60 = nextResult;
        let tmp61 = reflectionCreateResult[obj.oneof];
        let tmp4 = tmp61;
        tmp61.oneofKind = tmp9.oneofKind;
        if (null == tmp59) {
          let tmp55 = tmp4;
          let tmp56 = localName;
          delete tmp2[tmp];
          continue;
        }
      }
    } else {
      tmp4 = reflectionCreateResult;
      let tmp5 = localName;
      let tmp6 = arr[localName];
      arr = tmp6;
      continue;
    }
    let tmp12 = nextResult;
    if (obj.repeat) {
      let tmp13 = tmp4;
      let tmp14 = localName;
      let tmp15 = arr;
      tmp4[localName].length = arr.length;
    }
    let tmp16 = nextResult;
    let kind = obj.kind;
    if ("scalar" !== kind) {
      if ("enum" !== kind) {
        if ("message" === kind) {
          let tmp26 = nextResult;
          let TResult = obj.T();
          if (obj.repeat) {
            let num = 0;
            let tmp38 = arr;
            if (0 < arr.length) {
              do {
                let tmp39 = tmp4;
                let tmp40 = localName;
                let tmp41 = num;
                let tmp42 = TResult;
                let tmp43 = arr;
                tmp4[localName][num] = TResult.create(arr[num]);
                sum = num + 1;
                num = sum;
                length = arr.length;
              } while (sum < length);
            }
          } else {
            let tmp27 = tmp4;
            let tmp28 = localName;
            if (undefined === tmp4[localName]) {
              let tmp34 = tmp4;
              let tmp35 = localName;
              let tmp36 = TResult;
              let tmp37 = arr;
              tmp4[localName] = TResult.create(arr);
            } else {
              let tmp29 = TResult;
              let tmp30 = tmp4;
              let tmp31 = localName;
              let tmp32 = arr;
              let mergePartialResult = TResult.mergePartial(tmp4[localName], arr);
            }
          }
        } else if ("map" === kind) {
          let tmp62 = nextResult;
          let kind2 = obj.V.kind;
          if ("scalar" !== kind2) {
            if ("enum" !== kind2) {
              if ("message" === kind2) {
                let tmp63 = nextResult;
                let V = obj.V;
                let TResult1 = V.T();
                let _Object2 = Object;
                let tmp64 = arr;
                let keys = Object.keys(arr);
                let tmp66 = keys;
                let tmp17 = keys;
                for (const item10050 of keys) {
                  let tmp18 = tmp4;
                  let tmp19 = localName;
                  let tmp20 = TResult1;
                  let tmp21 = arr;
                  tmp4[localName][item10050] = TResult1.create(arr[item10050]);
                  continue;
                }
              }
            }
          }
          let _Object = Object;
          let tmp22 = tmp4;
          let tmp23 = localName;
          let tmp24 = arr;
          let merged = Object.assign(tmp4[localName], arr);
        }
      }
      continue;
    }
    let tmp45 = nextResult;
    if (obj.repeat) {
      let num2 = 0;
      let tmp49 = arr;
      if (0 < arr.length) {
        do {
          let tmp50 = tmp4;
          let tmp51 = localName;
          let tmp52 = num2;
          let tmp53 = arr;
          tmp4[localName][num2] = arr[num2];
          sum1 = num2 + 1;
          num2 = sum1;
          length2 = arr.length;
        } while (sum1 < length2);
      }
    } else {
      let tmp46 = tmp4;
      let tmp47 = localName;
      let tmp48 = arr;
      tmp4[localName] = arr;
    }
  }
};
