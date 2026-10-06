// === Module 6567: useFastestListSections ===

// Module 6567 (useFastestListSections)
import FastestListItemTypeDefault from "FastestListItemType" /* 6568 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/fastest_list/useFastestListSections.android.tsx");

export default function useFastestListSections(fastestListId) {
  fastestListId = fastestListId.fastestListId;
  const itemSize = fastestListId.itemSize;
  const keyExtractor = fastestListId.keyExtractor;
  let num = fastestListId.listFooterSize;
  if (num === undefined) {
    num = 0;
  }
  let num2 = fastestListId.listHeaderSize;
  if (num2 === undefined) {
    num2 = 0;
  }
  const sections = fastestListId.sections;
  let num3 = fastestListId.sectionHeaderSize;
  if (num3 === undefined) {
    num3 = 0;
  }
  let num4 = fastestListId.sectionFooterSize;
  if (num4 === undefined) {
    num4 = 0;
  }
  const tmp = fastestListId(itemSize[1])(() => {
    let closure_0 = 0;
    return {
      getId() {
        return "" + closure_0;
      },
      incrementId() {
        closure_0 = closure_0 + 1;
        return closure_0;
      }
    };
  });
  let closure_8 = tmp;
  let items = [keyExtractor, itemSize, num, num2, num3, num4, fastestListId, tmp, sections];
  const memo = keyExtractor.useMemo(() => {
    let items4;
    let tmp2Result = num;
    if (typeof num !== "number") {
      tmp2Result = tmp2();
    }
    let str;
    if (keyExtractor != null) {
      str = keyExtractor(FastestListItemTypeDefault.LIST_FOOTER, 0, 0);
    }
    if (str == null) {
      str = "";
    }
    let tmp7 = num2;
    if (typeof num2 !== "number") {
      tmp7 = num2();
    }
    let str2;
    if (keyExtractor != null) {
      str2 = keyExtractor(FastestListItemTypeDefault.LIST_HEADER, 0, 0);
    }
    if (str2 == null) {
      str2 = "";
    }
    const items = [];
    const items1 = [];
    const items2 = [];
    if (null == keyExtractor) {
      const obj = { keys: [""] };
      items.push(obj);
      items1.push("");
      items2.push("");
    }
    const items3 = [];
    if (typeof itemSize === "number") {
      const obj2 = { sizes: items4 };
      items4 = [itemSize];
      items3.push(obj2);
    }
    const items5 = [];
    if (typeof num3 === "number") {
      items5.push(num3);
    }
    const items6 = [];
    if (typeof num4 === "number") {
      items6.push(num4);
    }
    if (typeof num4 === "number") {
      if (typeof num3 === "number") {
        const obj3 = { keysAreUniform: null == keyExtractor, listId: fastestListId, listFooterKey: str, listFooterSize: tmp2Result, listHeaderKey: str2, listHeaderSize: tmp7, sections, sectionsId: closure_8.getId(), sectionHeaderKeys: items1, sectionHeaderSizes: items5, sectionHeaderSizeIsUniform: tmp34, sectionFooterKeys: items2, sectionFooterSizes: items6, sectionFooterSizeIsUniform: tmp35, itemKeys: items, itemSizeIsUniform: tmp33, itemSizes: items3 };
        return obj3;
      }
    }
    for (let num3 = 0; num3 < sections.length; num3 = num3 + 1) {
      if (typeof tmp10 !== "number") {
        let arr7 = items5.push(num3(num3));
      }
      if (typeof tmp11 !== "number") {
        let arr8 = items6.push(num4(num3));
      }
      if (!tmp12) {
        let push = items1.push;
        let str4 = keyExtractor(FastestListItemTypeDefault.SECTION_HEADER, num3, 0);
        if (str4 == null) {
          str4 = "";
        }
        let arr9 = push(str4);
        let push2 = items2.push;
        let str5 = keyExtractor(FastestListItemTypeDefault.SECTION_FOOTER, num3, 0);
        if (str5 == null) {
          str5 = "";
        }
        let push2Result = push2(str5);
      }
      if (typeof itemSize !== "number") {
        let tmp25 = sections[num3];
        if (typeof itemSize !== "number") {
          let obj4 = { sizes: [] };
          let arr21 = items3.push(obj4);
        }
        if (!tmp12) {
          let obj5 = { keys: [] };
          let arr22 = items.push(obj5);
        }
        for (let num4 = 0; num4 < tmp25; num4 = num4 + 1) {
          if (typeof itemSize !== "number") {
            let sizes = items3[num3].sizes;
            let arr23 = sizes.push(itemSize(num3, num4));
          }
          if (!tmp12) {
            let keys = items[num3].keys;
            let push3 = keys.push;
            let str6 = keyExtractor(FastestListItemTypeDefault.ITEM, num3, num4);
            if (str6 == null) {
              str6 = "";
            }
            let push3Result = push3(str6);
          }
        }
      }
    }
  }, items);
  let items1 = [tmp, memo];
  const effect = keyExtractor.useEffect(() => {
    closure_8.incrementId();
  }, items1);
  return fastestListId(itemSize[3])(memo);
};