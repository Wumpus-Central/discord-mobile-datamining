// discord_app/modules/fastest_list/FastestListChildren.android.tsx
import closure_2 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

let c3 = importAllResult;
let closure_6 = createCacheKey.createStyles({ portal: { position: "absolute", opacity: 0, height: 0, top: 0 } });
let obj = { items: [], keys: new Map(), keyIndex: 0 };
let map = new Map();
const memoResult = importAllResult.memo(importAllResult.forwardRef((listFooterAlwaysMounted, ref) => {
  ({ estimatedListSize: importDefault, horizontal } = listFooterAlwaysMounted);
  if (horizontal === undefined) {
    horizontal = false;
  }
  listFooterAlwaysMounted = listFooterAlwaysMounted.listFooterAlwaysMounted;
  const listHeaderAlwaysMounted = listFooterAlwaysMounted.listHeaderAlwaysMounted;
  let flag = listFooterAlwaysMounted.placeholdersForceEnabled;
  if (flag === undefined) {
    flag = false;
  }
  const marginEnd = listFooterAlwaysMounted.marginEnd;
  const marginStart = listFooterAlwaysMounted.marginStart;
  const sectionsVersioned = listFooterAlwaysMounted.sectionsVersioned;
  const renderItem = listFooterAlwaysMounted.renderItem;
  const renderListFooter = listFooterAlwaysMounted.renderListFooter;
  const renderListHeader = listFooterAlwaysMounted.renderListHeader;
  const renderSectionFooter = listFooterAlwaysMounted.renderSectionFooter;
  const renderSectionHeader = listFooterAlwaysMounted.renderSectionHeader;
  let flag2 = listFooterAlwaysMounted.wrapChildren;
  if (flag2 === undefined) {
    flag2 = false;
  }
  closure_14 = undefined;
  let first;
  closure_16 = undefined;
  closure_17 = undefined;
  let memo1;
  let tmp = marginStart();
  closure_14 = tmp;
  let items = [tmp.portal, marginStart, marginEnd];
  const memo = listHeaderAlwaysMounted.useMemo(() => {
    const items = [portal.portal, { left: marginStart, right: marginEnd }];
    return items;
  }, items);
  let tmp3 = listFooterAlwaysMounted(listHeaderAlwaysMounted.useState(() => closure_1_0(horizontal[5])({ estimatedListSize: closure_0, sectionsVersioned })), 2);
  first = tmp3[0];
  closure_16 = tmp3[1];
  const imperativeHandle = listHeaderAlwaysMounted.useImperativeHandle(ref, () => ({
    setVisibleItems(nativeEvent) {
      closure_0 = nativeEvent;
      callback((arg0) => {
        let tmp = nativeEvent;
        if (nativeEvent(closure_1_1[6])(arg0, nativeEvent)) {
          tmp = arg0;
        }
        return tmp;
      });
    }
  }), []);
  closure_17 = listHeaderAlwaysMounted.useRef(sectionsVersioned);
  let items1 = [horizontal, listFooterAlwaysMounted, listHeaderAlwaysMounted, flag, renderItem, renderListFooter, renderListHeader, renderSectionFooter, renderSectionHeader, sectionsVersioned, first, flag2];
  memo1 = listHeaderAlwaysMounted.useMemo(() => {
    ({ keysAreUniform, listId, itemKeys, itemSizes, listFooterKey, listFooterSize, listHeaderKey, listHeaderSize, sections } = sectionsVersioned);
    ({ sectionFooterKeys, sectionFooterSizes, sectionHeaderKeys, sectionHeaderSizes } = sectionsVersioned);
    if (sectionsVersioned.sectionsId !== first.sectionsId) {
      return ref.current;
    } else {
      function fastestListChildJSX(item, itemSize) {
        if (closure_13) {
          let tmp11;
          if (sectionStart) {
            tmp11 = itemSize;
          }
          obj = { width: null, height: null, overflow: "hidden" };
          obj[0] = tmp11;
          let tmp12;
          if (!sectionStart) {
            tmp12 = itemSize;
          }
          obj = { style: null, collapsable: false, children: null };
          obj[1] = tmp12;
          obj[0] = obj;
          obj[2] = item;
          return closure_1_5(itemEnd, obj);
        } else if (itemStart.isValidElement(item)) {
          return item;
        } else {
          const _Error = Error;
          error = new Error("Must return a single child element.");
          throw error;
        }
      }
      let keyIndex = ref.current.keyIndex;
      const _Map = Map;
      const map = new Map(ref.current.keys);
      const _Map2 = Map;
      map1 = new Map();
      const items = [];
      const items1 = [];
      const tmp95 = closure_1_0(horizontal[7])(listId, tmp4, sections);
      let sectionStart = tmp95.sectionStart;
      const sectionEnd = tmp95.sectionEnd;
      const itemStart = tmp95.itemStart;
      const itemEnd = tmp95.itemEnd;
      let sum = sectionStart;
      if (sectionStart <= sectionEnd) {
        do {
          let tmp5 = itemEnd;
          let tmp6 = sum;
          if (!itemEnd) {
            let num = 0;
            if (sum === sectionStart) {
              num = itemStart;
            }
            let diff = itemEnd;
            if (sum !== sectionEnd) {
              diff = sections[sum] - 1;
            }
            if (num <= diff) {
              do {
                let tmp8 = renderItem;
                let tmp9 = renderItem(sum, num);
                let tmp10 = num;
                if (tmp) {
                  first = itemSizes[0].sizes[0];
                } else {
                  first = itemSizes[sum].sizes[num];
                }
                if (keysAreUniform) {
                  let first1 = itemKeys[0].keys[0];
                } else {
                  first1 = itemKeys[sum].keys[num];
                }
                if ("" === first1) {
                  let _HermesInternal = HermesInternal;
                  first1 = "s" + sum + "-i" + num;
                }
                let _HermesInternal2 = HermesInternal;
                let combined = "" + listId + "-" + first1;
                let value = map.get(combined);
                if (null != value) {
                  let result = map1.set(combined, value);
                  let deleteResult = map.delete(combined);
                  let tmp18 = marginEnd;
                  let tmp19 = closure_1_0;
                  let tmp20 = horizontal;
                  obj = { portalId: null, children: null };
                  obj[0] = combined;
                  let tmp21 = closure_1_0(horizontal[8]);
                  obj[1] = fastestListChildJSX(tmp9, first);
                  let _HermesInternal3 = HermesInternal;
                  let arr = items.push(marginEnd(tmp21, obj, "" + value));
                } else {
                  obj = { keyId: null, item: null, itemSize: null };
                  obj[0] = combined;
                  obj[1] = tmp9;
                  obj[2] = first;
                  arr = items1.push(obj);
                }
                num = num + 1;
              } while (num <= diff);
            }
          }
          sum = sum + 1;
        } while (sum <= sectionEnd);
      }
      const iter = items1[Symbol.iterator]();
      while (iter !== undefined) {
        ({ keyId, item, itemSize } = nextResult);
        if (map.size > 0) {
          let iter2 = map.keys();
          value = iter2.next().value;
          value = map.get(value);
          let tmp41 = keyId;
          let result1 = map1.set(keyId, value);
          let deleteResult1 = map.delete(value);
          let tmp44 = marginEnd;
          let tmp45 = closure_1_0;
          let tmp46 = horizontal;
          obj = { portalId: null, children: null };
          obj[0] = keyId;
          let tmp48 = item;
          let tmp49 = itemSize;
          let tmp47 = closure_1_0(horizontal[8]);
          obj[1] = fastestListChildJSX(item, itemSize);
          let _HermesInternal5 = HermesInternal;
          let arr1 = items.push(marginEnd(tmp47, obj, "" + value));
        } else {
          let tmp28 = keyIndex;
          let tmp29 = +keyIndex;
          keyIndex = tmp29 + 1;
          let text = `key-${tmp29}`;
          let tmp31 = keyId;
          let result2 = map1.set(keyId, `key-${tmp29}`);
          let tmp33 = marginEnd;
          let tmp34 = closure_1_0;
          let tmp35 = horizontal;
          obj1 = { portalId: null, children: null };
          obj1[0] = keyId;
          let tmp37 = item;
          let tmp38 = itemSize;
          let tmp36 = closure_1_0(horizontal[8]);
          obj1[1] = fastestListChildJSX(item, itemSize);
          let _HermesInternal4 = HermesInternal;
          let arr2 = items.push(marginEnd(tmp36, obj1, "" + `key-${tmp29}`));
        }
        continue;
      }
      if (null != renderListHeader) {
        if (listHeaderSize > 0) {
          if (itemStart) {
            let str2 = "lh";
            if ("" !== listHeaderKey) {
              str2 = listHeaderKey;
            }
            const obj2 = { portalId: null, children: null };
            const _HermesInternal6 = HermesInternal;
            obj2[0] = "" + listId + "-" + str2;
            obj2[1] = fastestListChildJSX(tmp51(), listHeaderSize);
            items.push(marginEnd(closure_1_0(horizontal[8]), obj2, str2));
            const tmp56 = closure_1_0(horizontal[8]);
          }
        }
      }
      if (null != renderListFooter) {
        if (listFooterSize > 0) {
          if (sectionEnd) {
            let str3 = "lf";
            if ("" !== listFooterKey) {
              str3 = listFooterKey;
            }
            const _HermesInternal7 = HermesInternal;
            const combined1 = "" + listId + "-" + str3;
            const obj3 = { portalId: null, children: null };
            obj3[0] = combined1;
            obj3[1] = fastestListChildJSX(tmp58(), listFooterSize);
            items.push(marginEnd(closure_1_0(horizontal[8]), obj3, combined1));
            const tmp64 = closure_1_0(horizontal[8]);
          }
        }
      }
      if (sectionStart <= sectionEnd) {
        do {
          let tmp66 = itemEnd;
          let tmp67 = sectionStart;
          if (!itemEnd) {
            let tmp68 = tmp2 ? sectionFooterSizes[0] : sectionFooterSizes[sectionStart];
            if (tmp68 > 0) {
              if (null != renderSectionFooter) {
                let combined2 = keysAreUniform ? sectionFooterKeys[0] : sectionFooterKeys[sectionStart];
                if ("" === combined2) {
                  let _HermesInternal8 = HermesInternal;
                  combined2 = "sf" + sectionStart;
                }
                let _HermesInternal9 = HermesInternal;
                let combined3 = "" + listId + "-" + combined2;
                let tmp71 = marginEnd;
                let tmp72 = closure_1_0;
                let tmp73 = horizontal;
                let obj4 = { portalId: null, children: null };
                obj4[0] = combined3;
                let tmp74 = closure_1_0(horizontal[8]);
                obj4[1] = fastestListChildJSX(tmp97(sectionStart), tmp68);
                let arr5 = items.push(marginEnd(tmp74, obj4, combined3));
              }
            }
            let tmp76 = tmp3 ? sectionHeaderSizes[0] : sectionHeaderSizes[sectionStart];
            if (tmp76 > 0) {
              if (null != renderSectionHeader) {
                let combined4 = keysAreUniform ? sectionHeaderKeys[0] : sectionHeaderKeys[sectionStart];
                if ("" === combined4) {
                  let _HermesInternal10 = HermesInternal;
                  combined4 = "sh" + sectionStart;
                }
                let _HermesInternal11 = HermesInternal;
                let combined5 = "" + listId + "-" + combined4;
                let tmp79 = marginEnd;
                let tmp80 = closure_1_0;
                let tmp81 = horizontal;
                let obj5 = { portalId: null, children: null };
                obj5[0] = combined5;
                let tmp82 = closure_1_0(horizontal[8]);
                obj5[1] = fastestListChildJSX(tmp98(sectionStart), tmp76);
                let arr6 = items.push(marginEnd(tmp82, obj5, combined5));
              }
            }
          }
          sectionStart = sectionStart + 1;
        } while (sectionStart <= sectionEnd);
      }
      const obj6 = { items: null, keys: null, keyIndex: null };
      obj6[0] = items;
      obj6[1] = map1;
      obj6[2] = keyIndex;
      return obj6;
    }
  }, items1);
  const items2 = [memo1];
  const effect = listHeaderAlwaysMounted.useEffect(() => {
    closure_17.current = memo1;
  }, items2);
  return marginEnd(flag, { pointerEvents: "none", style: memo, children: memo1.items });
}));
let result = require("set").fileFinishedImporting("modules/fastest_list/FastestListChildren.android.tsx");

export default memoResult;