// === Module 12070: ArraySearch ===

// Module 12070 (ArraySearch)
import size from "module_2" /* 2 */;

function sortGroup(arr, arg1) {
  dependencyMap = arg1;
  return arr.sort((arg0, arg1) => {
    const iter = dependencyMap[Symbol.iterator]();
    while (iter !== undefined) {
      let tmp2 = iter.next()(arg0, arg1);
      if (0 !== tmp2) {
        iter.return();
        return tmp2;
      }
    }
    return 0;
  });
}
const result = size.fileFinishedImporting("modules/queries/ArraySearch.tsx");

export const queryData = function queryData(apps, limit) {
  let num = limit.limit;
  if (num == null) {
    num = Infinity;
  }
  let filterPredicates = limit.filterPredicates;
  if (filterPredicates == null) {
    filterPredicates = [];
  }
  const found = apps.filter((item) => {
    closure_0 = item;
    return filterPredicates.every((fn) => fn(closure_0));
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
              while (!bucketPredicates[num](tmp3)) {
                let sum = num + 1;
                num = sum;
              }
              let arr2 = mapped[num];
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
            for (const item10021 of tmp) {
              let tmp6 = item10021;
              if (tmp3(item10021)) {
                let arr = items2.push(tmp6);
              } else {
                arr = items1.push(tmp6);
              }
              continue;
            }
            let arr1 = items.push(items2);
            tmp = items1;
            if (items.reduce((acc, item) => item.length + acc, 0) >= limit) {
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
      let push = items.push;
      let items1 = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(filterPredicates(tmp, sortComparers), 0);
      let applyResult = HermesBuiltin.apply(items1, items);
      if (items.length >= limit) {
        obj.return();
        return items;
      }
    }
    return items;
  })(items, sortComparers, num).slice(0, num);
};