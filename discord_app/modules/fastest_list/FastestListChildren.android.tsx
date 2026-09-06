// === Module 7067: FastestListChildren ===

// Module 7067 (FastestListChildren)
import getFastestListVisibleItemsDefault from "getFastestListVisibleItemsDefault" /* 7068 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ portal: { position: "absolute", opacity: 0, height: 0, top: 0 } });
let obj = { items: [], keys: new Map(), keyIndex: 0 };
let map = new Map();
let size = fn(2);
let result = size.fileFinishedImporting("modules/fastest_list/FastestListChildren.android.tsx");

export default noop.memo(noop.forwardRef((listFooterAlwaysMounted, arg1) => {
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
  let tmp = marginStart();
  const portal = tmp;
  let items = [tmp.portal, marginStart, marginEnd];
  const memo = listHeaderAlwaysMounted.useMemo(() => {
    const items = [portal.portal, ];
    const rect = { left: marginStart, right: marginEnd };
    items[1] = rect;
    return items;
  }, items);
  const tmp3 = listFooterAlwaysMounted(listHeaderAlwaysMounted.useState(() => getFastestListVisibleItemsDefault({ estimatedListSize, sectionsVersioned })), 2);
  const itemSize = tmp3[0];
  closure_16 = tmp3[1];
  const imperativeHandle = listHeaderAlwaysMounted.useImperativeHandle(arg1, () => ({
    setVisibleItems(nativeEvent) {
      closure_0 = nativeEvent;
      closure_1_16((arg0) => {
        let tmp = closure_0;
        if (estimatedListSize(horizontal[6])(arg0, closure_0)) {
          tmp = arg0;
        }
        return tmp;
      });
    }
  }), []);
  listHeaderAlwaysMounted.useRef(sectionsVersioned);
  let items1 = [horizontal, listFooterAlwaysMounted, listHeaderAlwaysMounted, flag, renderItem, renderListFooter, renderListHeader, renderSectionFooter, renderSectionHeader, sectionsVersioned, itemSize, flag2];
  const memo1 = listHeaderAlwaysMounted.useMemo(() => {
    ({ keysAreUniform, listId, itemKeys, itemSizes, listFooterKey, listFooterSize, listHeaderKey, listHeaderSize, sections } = sectionsVersioned);
    ({ sectionFooterKeys, sectionFooterSizes, sectionHeaderKeys, sectionHeaderSizes } = sectionsVersioned);
    if (sectionsVersioned.sectionsId !== itemSize.sectionsId) {
      return ref.current;
    } else {
      function fastestListChildJSX(children, itemSize) {
        if (flag2) {
          let tmp11;
          if (sectionStart) {
            tmp11 = itemSize;
          }
          const size = { width: tmp11, height: null, overflow: "hidden" };
          let tmp12;
          if (!sectionStart) {
            tmp12 = itemSize;
          }
          obj = { style: null, collapsable: false, children: null };
          size.height = tmp12;
          obj.style = size;
          obj.children = children;
          return marginEnd(flag, obj);
        } else if (listHeaderAlwaysMounted.isValidElement(children)) {
          return children;
        } else {
          const _Error = Error;
          const error = new Error("Must return a single child element.");
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
      const tmp95 = estimatedListSize(horizontal[7])(listId, tmp4, sections);
      let sectionStart = tmp95.sectionStart;
      const sectionEnd = tmp95.sectionEnd;
      const itemStart = tmp95.itemStart;
      const itemEnd = tmp95.itemEnd;
      let sum = sectionStart;
      if (sectionStart <= sectionEnd) {
        do {
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
                let tmp9 = renderItem(sum, num);
                if (tmp) {
                  itemSize = itemSizes[0].sizes[0];
                } else {
                  itemSize = itemSizes[sum].sizes[num];
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
                value = map.get(combined);
                if (null != value) {
                  let result = map1.set(combined, value);
                  let deleteResult = map.delete(combined);
                  obj = { portalId: combined, children: null };
                  let tmp21 = estimatedListSize(horizontal[8]);
                  obj.children = fastestListChildJSX(tmp9, itemSize);
                  let _HermesInternal3 = HermesInternal;
                  let arr = items.push(marginEnd(tmp21, obj, "" + value));
                } else {
                  obj = { keyId: combined, item: tmp9, itemSize };
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
          let result1 = map1.set(keyId, value);
          let deleteResult1 = map.delete(value);
          obj = { portalId: keyId, children: null };
          let tmp47 = estimatedListSize(horizontal[8]);
          obj.children = fastestListChildJSX(item, itemSize);
          let _HermesInternal5 = HermesInternal;
          let arr1 = items.push(marginEnd(tmp47, obj, "" + value));
        } else {
          let tmp29 = +keyIndex;
          keyIndex = tmp29 + 1;
          let text = `key-${tmp29}`;
          let result2 = map1.set(keyId, `key-${tmp29}`);
          let obj1 = { portalId: keyId, children: null };
          let tmp36 = estimatedListSize(horizontal[8]);
          obj1.children = fastestListChildJSX(item, itemSize);
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
            obj2.portalId = "" + listId + "-" + str2;
            obj2.children = fastestListChildJSX(tmp51(), listHeaderSize);
            items.push(marginEnd(estimatedListSize(horizontal[8]), obj2, str2));
            const tmp56 = estimatedListSize(horizontal[8]);
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
            const obj3 = { portalId: combined1, children: fastestListChildJSX(tmp58(), listFooterSize) };
            items.push(marginEnd(estimatedListSize(horizontal[8]), obj3, combined1));
            const tmp64 = estimatedListSize(horizontal[8]);
          }
        }
      }
      if (sectionStart <= sectionEnd) {
        do {
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
                let obj4 = { portalId: combined3, children: null };
                let tmp74 = estimatedListSize(horizontal[8]);
                obj4.children = fastestListChildJSX(tmp97(sectionStart), tmp68);
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
                let obj5 = { portalId: combined5, children: null };
                let tmp82 = estimatedListSize(horizontal[8]);
                obj5.children = fastestListChildJSX(tmp98(sectionStart), tmp76);
                let arr6 = items.push(marginEnd(tmp82, obj5, combined5));
              }
            }
          }
          sectionStart = sectionStart + 1;
        } while (sectionStart <= sectionEnd);
      }
      const obj6 = { items, keys: map1, keyIndex };
      return obj6;
    }
  }, items1);
  const items2 = [memo1];
  const effect = listHeaderAlwaysMounted.useEffect(() => {
    closure_17.current = memo1;
  }, items2);
  return marginEnd(flag, { pointerEvents: "none", style: memo, children: memo1.items });
}));