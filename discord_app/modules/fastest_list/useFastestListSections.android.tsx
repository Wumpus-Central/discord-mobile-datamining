// === Module 7063: useFastestListSections ===

// Module 7063 (useFastestListSections)
import FastestListItemTypeDefault from "FastestListItemType" /* 7064 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
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
    closure_0 = 0;
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
  closure_8 = tmp;
  let items = [keyExtractor, itemSize, num, num2, num3, num4, fastestListId, tmp, sections];
  const memo = keyExtractor.useMemo(() => {
    let tmp2Result = num;
    if (typeof num !== "number") {
      tmp2Result = tmp2();
    }
    let str;
    if (keyExtractor != null) {
      str = tmp4(FastestListItemTypeDefault.LIST_FOOTER, 0, 0);
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
      str2 = tmp4(FastestListItemTypeDefault.LIST_HEADER, 0, 0);
    }
    if (str2 == null) {
      str2 = "";
    }
    const items = [];
    const items1 = [];
    const items2 = [];
    if (null == keyExtractor) {
      let obj = { keys: [""] };
      items.push(obj);
      items1.push("");
      items2.push("");
    }
    const items3 = [];
    if (typeof itemSize === "number") {
      obj = { sizes: null };
      const items4 = [tmp];
      obj.sizes = items4;
      items3.push(obj);
    }
    const items5 = [];
    if (typeof num3 === "number") {
      items5.push(tmp10);
    }
    const items6 = [];
    if (typeof num4 === "number") {
      items6.push(tmp11);
    }
    if (typeof num4 === "number") {
      if (typeof tmp10 === "number") {
        obj = { keysAreUniform: tmp12, listId: fastestListId, listFooterKey: str, listFooterSize: tmp2Result, listHeaderKey: str2, listHeaderSize: tmp7, sections, sectionsId: closure_8.getId(), sectionHeaderKeys: items1, sectionHeaderSizes: items5, sectionHeaderSizeIsUniform: typeof tmp10 === "number", sectionFooterKeys: items2, sectionFooterSizes: items6, sectionFooterSizeIsUniform: typeof tmp11 === "number", itemKeys: items, itemSizeIsUniform: typeof tmp === "number", itemSizes: items3 };
        return obj;
      }
    }
    num3 = 0;
    if (0 < sections.length) {
      do {
        if (typeof tmp10 !== "number") {
          let arr5 = items5.push(num3(num3));
        }
        if (typeof tmp11 !== "number") {
          let arr6 = items6.push(num4(num3));
        }
        if (!tmp12) {
          let tmp17 = keyExtractor;
          let str4 = keyExtractor(FastestListItemTypeDefault.SECTION_HEADER, num3, 0);
          if (str4 == null) {
            str4 = "";
          }
          let arr7 = items1.push(str4);
          let str5 = tmp17(FastestListItemTypeDefault.SECTION_FOOTER, num3, 0);
          if (str5 == null) {
            str5 = "";
          }
          let arr8 = items2.push(str5);
        }
        if (typeof tmp !== "number") {
          let tmp25 = sections[num3];
          if (typeof tmp !== "number") {
            let obj1 = { sizes: [] };
            let arr9 = items3.push(obj1);
          }
          if (!tmp12) {
            let obj2 = { keys: [] };
            let arr10 = items.push(obj2);
          }
          for (let num4 = 0; num4 < tmp25; num4 = num4 + 1) {
            if (typeof tmp !== "number") {
              let sizes = items3[num3].sizes;
              let arr11 = sizes.push(itemSize(num3, num4));
            }
            if (!tmp12) {
              let keys = items[num3].keys;
              let str6 = keyExtractor(FastestListItemTypeDefault.ITEM, num3, num4);
              if (str6 == null) {
                str6 = "";
              }
              let arr12 = keys.push(str6);
            }
          }
        }
        num3 = num3 + 1;
      } while (num3 < sections.length);
    }
  }, items);
  let items1 = [tmp, memo];
  const effect = keyExtractor.useEffect(() => {
    closure_8.incrementId();
  }, items1);
  return fastestListId(itemSize[3])(memo);
};