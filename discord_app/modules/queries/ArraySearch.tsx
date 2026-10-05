// === Module 11684: ArraySearch ===

// Module 11684 (ArraySearch)
import size from "module_2" /* 2 */;

function sortGroup(arr, sortComparers) {
  return arr.sort((arg0, arg1) => {
    const iter = sortComparers[Symbol.iterator]();
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
  function applySorting(items, sortComparers, limit) {
    items = [];
    const obj = items[Symbol.iterator]();
    while (obj !== undefined) {
      let push = items.push;
      let items1 = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(items1, sortGroup(tmp2, sortComparers), 0);
      let applyResult = HermesBuiltin.apply(push, items1, items);
      if (items.length >= limit) {
        obj.return();
        return items;
      }
    }
    return items;
  }
  function applyBucketingSingleIteration(found, bucketPredicates) {
    const array = new Array(bucketPredicates.length);
    const fillResult = array.fill(null);
    const mapped = fillResult.map(() => []);
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
  }
  function applyBucketing(found, bucketPredicates1, limit) {
    const items = [];
    let tmp = found;
    const iter = bucketPredicates1[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let items1 = [];
      let items2 = [];
      for (const item10021 of tmp) {
        if (tmp3(item10021)) {
          let arr = items2.push(item10021);
        } else {
          let arr2 = items1.push(item10021);
        }
        continue;
      }
      let arr3 = items.push(items2);
      tmp = items1;
      if (items.reduce((acc, item) => item.length + acc, 0) >= limit) {
        iter.return();
        break;
      }
      return items;
    }
  }
  let num = limit.limit;
  if (num == null) {
    num = Infinity;
  }
  let filterPredicates = limit.filterPredicates;
  if (filterPredicates == null) {
    filterPredicates = [];
  }
  const found = apps.filter((item) => {
    let closure_0 = item;
    return filterPredicates.every((fn) => fn(closure_0));
  });
  if (null != limit.bucketPredicates) {
    let items;
    if (limit.bucketPredicates.length > 0) {
      let tmp;
      if (num >= found.length) {
        let bucketPredicates = limit.bucketPredicates;
        if (bucketPredicates == null) {
          bucketPredicates = [];
        }
        tmp = applyBucketingSingleIteration(found, bucketPredicates);
      } else {
        let bucketPredicates1 = limit.bucketPredicates;
        if (bucketPredicates1 == null) {
          bucketPredicates1 = [];
        }
        tmp = applyBucketing(found, bucketPredicates1, num);
      }
      items = tmp;
    }
    let sortComparers = limit.sortComparers;
    if (sortComparers == null) {
      sortComparers = [];
    }
    const arr7 = applySorting(items, sortComparers, num);
    return arr7.slice(0, num);
  }
  items = [found];
};