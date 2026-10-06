// === Module 6571: FastestListChildren ===

// Module 6571 (FastestListChildren)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import getFastestListVisibleItemsDefault from "getFastestListVisibleItemsDefault" /* 6572 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let listFooterAlwaysMounted, map1;

let map;
const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ portal: { position: "absolute", opacity: 0, height: 0, top: 0 } });
let obj = { items: [], keys: map, keyIndex: 0 };
map = new Map();
const memoResult = react.memo(react.forwardRef((listFooterAlwaysMounted, arg1) => {
  let estimatedListSize;
  let horizontal;
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
  const tmp3 = listFooterAlwaysMounted(listHeaderAlwaysMounted.useState(() => {
    obj = { estimatedListSize: importDefault, sectionsVersioned };
    return getFastestListVisibleItemsDefault(obj);
  }), 2);
  let itemSize = tmp3[0];
  let closure_16 = tmp3[1];
  const imperativeHandle = listHeaderAlwaysMounted.useImperativeHandle(arg1, () => ({
    setVisibleItems(nativeEvent) {
      let closure_0 = nativeEvent;
      let tmp = closure_1_16((arg0) => {
        let tmp = closure_0;
        if (closure_2_0(closure_2_1[6])(arg0, closure_0)) {
          tmp = arg0;
        }
        return tmp;
      });
    }
  }), []);
  const ref = listHeaderAlwaysMounted.useRef(sectionsVersioned);
  let items1 = [horizontal, listFooterAlwaysMounted, listHeaderAlwaysMounted, flag, renderItem, renderListFooter, renderListHeader, renderSectionFooter, renderSectionHeader, sectionsVersioned, itemSize, flag2];
  const memo1 = listHeaderAlwaysMounted.useMemo(function() {
    let item;
    let itemKeys;
    let itemSizes;
    let keyId;
    let keysAreUniform;
    let listFooterKey;
    let listFooterSize;
    let listHeaderKey;
    let listHeaderSize;
    let listId;
    let sectionFooterKeys;
    let sectionFooterSizes;
    let sectionHeaderKeys;
    let sectionHeaderSizes;
    let sections;
    let tmp;
    ({ keysAreUniform, listId, itemKeys, itemSizes, listFooterKey, listFooterSize, listHeaderKey, listHeaderSize, sections } = sectionsVersioned);
    ({ sectionFooterKeys, sectionFooterSizes, sectionHeaderKeys, sectionHeaderSizes } = sectionsVersioned);
    if (sectionsVersioned.sectionsId !== itemSize.sectionsId) {
      return ref.current;
    } else {
      function fastestListChildJSX(children, itemSize) {
        let tmp11;
        if (flag2) {
          let tmp10;
          if (sectionStart) {
            tmp10 = itemSize;
          }
          size = { width: tmp10, height: tmp11, overflow: "hidden" };
          tmp11 = undefined;
          if (!sectionStart) {
            tmp11 = itemSize;
          }
          obj = { style: size, collapsable: false, children };
          return marginEnd(flag, obj);
        } else if (listHeaderAlwaysMounted.isValidElement(children)) {
          return children;
        } else {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error("Must return a single child element.");
          throw error;
        }
      }
      let keyIndex = ref.current.keyIndex;
      const _Map = Map;
      let self = this;
      let self2 = this;
      map = new Map(ref.current.keys);
      const _Map2 = Map;
      const self3 = this;
      const self4 = this;
      map1 = new Map();
      const items = [];
      const items1 = [];
      const tmp91 = require("getFastestListVisibleItemsWithErrorChecking")(listId, tmp4, sections);
      let sectionStart = tmp91.sectionStart;
      const sectionEnd = tmp91.sectionEnd;
      const itemStart = tmp91.itemStart;
      const itemEnd = tmp91.itemEnd;
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
                let first1;
                let tmp9 = renderItem(sum, num);
                let tmp10 = num;
                if (tmp) {
                  itemSize = itemSizes[0].sizes[0];
                } else {
                  itemSize = itemSizes[sum].sizes[num];
                }
                if (keysAreUniform) {
                  first1 = itemKeys[0].keys[0];
                } else {
                  first1 = itemKeys[sum].keys[num];
                }
                if ("" === first1) {
                  let _HermesInternal = HermesInternal;
                  first1 = "s" + sum + "-i" + num;
                }
                let _HermesInternal2 = HermesInternal;
                let combined = "" + listId + "-" + first1;
                let value3 = map.get(combined);
                if (null != value3) {
                  let result = map1.set(combined, value3);
                  let deleteResult = map.delete(combined);
                  let push = items.push;
                  let obj2 = { portalId: combined, children: fastestListChildJSX(tmp9, itemSize) };
                  let tmp21 = require("PortalToNativeView");
                  let _HermesInternal3 = HermesInternal;
                  let arr = push(marginEnd(tmp21, obj2, "" + value3));
                } else {
                  obj = { keyId: combined, item: tmp9, itemSize };
                  let arr2 = items1.push(obj);
                }
                num = num + 1;
              } while (num <= diff);
            }
          }
          sum = sum + 1;
        } while (sum <= sectionEnd);
      }
      const iter = items1[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        ({ keyId, item, itemSize } = nextResult);
        if (map.size > 0) {
          let iter2 = map.keys();
          let value = iter2.next().value;
          let value4 = map.get(value);
          let result1 = map1.set(keyId, value4);
          let deleteResult1 = map.delete(value);
          let push3 = items.push;
          let obj3 = { portalId: keyId, children: fastestListChildJSX(item, itemSize) };
          let tmp47 = require("PortalToNativeView");
          let _HermesInternal5 = HermesInternal;
          let push3Result = push3(marginEnd(tmp47, obj3, "" + value4));
        } else {
          let tmp29 = +keyIndex;
          keyIndex = tmp29 + 1;
          let text = `key-${tmp29}`;
          let result2 = map1.set(keyId, `key-${tmp29}`);
          let push2 = items.push;
          let obj4 = { portalId: keyId, children: fastestListChildJSX(item, itemSize) };
          let tmp36 = require("PortalToNativeView");
          let _HermesInternal4 = HermesInternal;
          let push2Result = push2(marginEnd(tmp36, obj4, "" + `key-${tmp29}`));
        }
        continue;
      }
      if (null != renderListHeader) {
        if (listHeaderSize > 0) {
          const tmp52 = itemStart;
          if (tmp52) {
            let str2 = "lh";
            if ("" !== listHeaderKey) {
              str2 = listHeaderKey;
            }
            const push4 = items.push;
            const _HermesInternal6 = HermesInternal;
            const obj5 = { portalId: "" + listId + "-" + str2, children: fastestListChildJSX(tmp51(), listHeaderSize) };
            const tmp56 = require("PortalToNativeView");
            push4(marginEnd(tmp56, obj5, str2));
          }
        }
      }
      if (null != renderListFooter) {
        if (listFooterSize > 0) {
          const tmp59 = sectionEnd;
          if (tmp59) {
            let str3 = "lf";
            if ("" !== listFooterKey) {
              str3 = listFooterKey;
            }
            const _HermesInternal7 = HermesInternal;
            const combined1 = "" + listId + "-" + str3;
            const push5 = items.push;
            const obj6 = { portalId: combined1, children: fastestListChildJSX(tmp58(), listFooterSize) };
            const tmp64 = require("PortalToNativeView");
            push5(marginEnd(tmp64, obj6, combined1));
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
                let push6 = items.push;
                let obj7 = { portalId: combined3, children: fastestListChildJSX(tmp93(sectionStart), tmp68) };
                let tmp74 = require("PortalToNativeView");
                let push6Result = push6(marginEnd(tmp74, obj7, combined3));
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
                let push7 = items.push;
                let obj8 = { portalId: combined5, children: fastestListChildJSX(tmp94(sectionStart), tmp76) };
                let tmp82 = require("PortalToNativeView");
                let push7Result = push7(marginEnd(tmp82, obj8, combined5));
              }
            }
          }
          sectionStart = sectionStart + 1;
        } while (sectionStart <= sectionEnd);
      }
      return { items, keys: map1, keyIndex };
    }
  }, items1);
  const items2 = [memo1];
  const effect = listHeaderAlwaysMounted.useEffect(() => {
    ref.current = memo1;
  }, items2);
  obj = { pointerEvents: "none", style: memo, children: memo1.items };
  return marginEnd(flag, obj);
}));
let size = size_mod;
let result = size.fileFinishedImporting("modules/fastest_list/FastestListChildren.android.tsx");

export default memoResult;