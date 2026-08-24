// === Module 11297: sortGroup ===

// Module 11297 (sortGroup)
import set from "set" /* 2 */;

function sortGroup(arr) {
  closure_0 = arg1;
  return arr.sort((arg0, arg1) => {
    const iter = dependencyMap[Symbol.iterator]();
    while (iter !== undefined) {
      let tmp2 = iter.next()(arg0, arg1);
      let tmp3 = tmp2;
      if (0 !== tmp2) {
        let tmp4 = iter;
        iter.return();
        return tmp2;
      }
    }
    return 0;
  });
}
const result = set.fileFinishedImporting("modules/queries/ArraySearch.tsx");

export const queryData = function queryData(arr, limit) {
  let num = limit.limit;
  if (num == null) {
    num = Infinity;
  }
  let filterPredicates = limit.filterPredicates;
  if (filterPredicates == null) {
    filterPredicates = [];
  }
  const found = arr.filter((arg0) => {
    closure_0 = arg0;
    return closure_0.every((arg0) => arg0(closure_0));
  });
  if (null != limit.bucketPredicates) {
    if (limit.bucketPredicates.length > 0) {
      if (num >= found.length) {
        let bucketPredicates = limit.bucketPredicates;
        if (bucketPredicates == null) {
          bucketPredicates = [];
        }
        let tmp = (function applyBucketingSingleIteration(found, bucketPredicates) {
          const array = new Array(bucketPredicates.length);
          const mapped = array.fill(null).map(() => []);
          const iter = found[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp3 = nextResult;
            let num = 0;
            if (0 < bucketPredicates.length) {
              let tmp4 = num;
              let tmp5 = nextResult;
              let tmp6 = num;
              while (!bucketPredicates[num](tmp3)) {
                let sum = num + 1;
                num = sum;
              }
              let arr2 = mapped[num];
              let tmp8 = nextResult;
              let arr = arr2.push(tmp3);
            }
            continue;
          }
          return mapped;
        })(found, bucketPredicates);
      } else {
        let bucketPredicates1 = limit.bucketPredicates;
        if (bucketPredicates1 == null) {
          bucketPredicates1 = [];
        }
        tmp = (function applyBucketing(found, bucketPredicates1, limit) {
          const items = [];
          let tmp = found;
          const iter = bucketPredicates1[Symbol.iterator]();
          while (iter !== undefined) {
            let items1 = [];
            let items2 = [];
            let tmp4 = tmp;
            let tmp5 = tmp;
            for (const item10021 of tmp) {
              let tmp6 = item10021;
              let tmp7 = nextResult;
              if (tmp3(item10021)) {
                let tmp11 = items2;
                let tmp12 = item10021;
                let arr = items2.push(tmp6);
              } else {
                let tmp8 = items1;
                let tmp9 = item10021;
                arr = items1.push(tmp6);
              }
              continue;
            }
            let tmp14 = items2;
            let arr1 = items.push(items2);
            tmp = items1;
            if (items.reduce((arg0, arg1) => arg1.length + arg0, 0) >= limit) {
              let tmp16 = iter;
              iter.return();
              break;
            }
            return items;
          }
        })(found, bucketPredicates1, num);
      }
    }
  }
  let items = [found];
  let sortComparers = limit.sortComparers;
  if (sortComparers == null) {
    sortComparers = [];
  }
  return (function applySorting(items, sortComparers, limit) {
    items = [];
    const obj = items[Symbol.iterator]();
    while (obj !== undefined) {
      let tmp2 = filterPredicates;
      let push = items.push;
      let items1 = [];
      let tmp3 = items1;
      let num = 0;
      let arraySpreadResult = HermesBuiltin.arraySpread(filterPredicates(tmp, sortComparers), 0);
      let tmp5 = push;
      let tmp6 = items1;
      let tmp7 = items;
      let applyResult = HermesBuiltin.apply(items1, items);
      if (items.length >= limit) {
        let tmp9 = obj;
        obj.return();
        return items;
      }
    }
    return items;
  })(items, sortComparers, num).slice(0, num);
};