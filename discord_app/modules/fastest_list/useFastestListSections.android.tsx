// === Module 7795: useFastestListSections ===

// Module 7795 (useFastestListSections)
import closure_2 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("modules/fastest_list/useFastestListSections.android.tsx");

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
  closure_8 = undefined;
  const tmp = fastestListId(itemSize[1])(() => {
    c0 = 0;
    return {
      getId() {
        return "" + c0;
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
      str = tmp4(fastestListId(itemSize[2]).LIST_FOOTER, 0, 0);
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
      str2 = tmp4(fastestListId(itemSize[2]).LIST_HEADER, 0, 0);
    }
    if (str2 == null) {
      str2 = "";
    }
    const items = [];
    const items1 = [];
    const items2 = [];
    if (null == keyExtractor) {
      let obj = { keys: null };
      obj[0] = [""];
      items.push(obj);
      items1.push("");
      items2.push("");
    }
    const items3 = [];
    if (typeof itemSize === "number") {
      obj = { sizes: null };
      const items4 = [tmp];
      obj[0] = items4;
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
        obj = { keysAreUniform: null, listId: null, listFooterKey: null, listFooterSize: null, listHeaderKey: null, listHeaderSize: null, sections: null, sectionsId: null, sectionHeaderKeys: null, sectionHeaderSizes: null, sectionHeaderSizeIsUniform: null, sectionFooterKeys: null, sectionFooterSizes: null, sectionFooterSizeIsUniform: null, itemKeys: null, itemSizeIsUniform: null, itemSizes: null };
        obj[0] = tmp12;
        obj[1] = fastestListId;
        obj[2] = str;
        obj[3] = tmp2Result;
        obj[4] = str2;
        obj[5] = tmp7;
        obj[6] = sections;
        obj[7] = closure_8.getId();
        obj[8] = items1;
        obj[9] = items5;
        obj[10] = typeof tmp10 === "number";
        obj[11] = items2;
        obj[12] = items6;
        obj[13] = typeof tmp11 === "number";
        obj[14] = items;
        obj[15] = typeof tmp === "number";
        obj[16] = items3;
        return obj;
      }
    }
    num3 = 0;
    if (0 < sections.length) {
      do {
        let tmp16 = num3;
        if (typeof tmp10 !== "number") {
          let tmp42 = num3;
          let arr5 = items5.push(num3(num3));
        }
        if (typeof tmp11 !== "number") {
          let tmp44 = num4;
          let arr6 = items6.push(num4(num3));
        }
        if (!tmp12) {
          let tmp18 = fastestListId;
          let tmp19 = itemSize;
          let tmp17 = keyExtractor;
          let str4 = keyExtractor(fastestListId(itemSize[2]).SECTION_HEADER, num3, 0);
          if (str4 == null) {
            str4 = "";
          }
          let arr7 = items1.push(str4);
          let tmp21 = fastestListId;
          let tmp22 = itemSize;
          let str5 = tmp17(fastestListId(itemSize[2]).SECTION_FOOTER, num3, 0);
          if (str5 == null) {
            str5 = "";
          }
          let arr8 = items2.push(str5);
        }
        if (typeof tmp !== "number") {
          let tmp24 = sections;
          let tmp25 = sections[num3];
          if (typeof tmp !== "number") {
            obj1 = { sizes: null };
            obj1[0] = [];
            let arr9 = items3.push(obj1);
          }
          if (!tmp12) {
            let obj2 = { keys: null };
            obj2[0] = [];
            let arr10 = items.push(obj2);
          }
          for (let num4 = 0; num4 < tmp25; num4 = num4 + 1) {
            let tmp27 = num4;
            if (typeof tmp !== "number") {
              let sizes = items3[num3].sizes;
              let tmp47 = itemSize;
              let arr11 = sizes.push(itemSize(num3, num4));
            }
            if (!tmp12) {
              let keys = items[num3].keys;
              let tmp28 = keyExtractor;
              let tmp29 = fastestListId;
              let tmp30 = itemSize;
              let str6 = keyExtractor(fastestListId(itemSize[2]).ITEM, num3, num4);
              if (str6 == null) {
                str6 = "";
              }
              let arr12 = keys.push(str6);
            }
          }
        }
        num3 = num3 + 1;
        let tmp32 = sections;
      } while (num3 < sections.length);
    }
  }, items);
  let items1 = [tmp, memo];
  const effect = keyExtractor.useEffect(() => {
    closure_8.incrementId();
  }, items1);
  return fastestListId(itemSize[3])(memo);
};