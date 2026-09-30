// === Module 16090: useChannelListFlatData ===

// Module 16090 (useChannelListFlatData)
import FastList from "FastList" /* 6689 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/useChannelListFlatData.tsx");

export default function useChannelListFlatData(getItemSize) {
  getItemSize = getItemSize.getItemSize;
  const getRecyclerKey = getItemSize.getRecyclerKey;
  const getSectionFooterSize = getItemSize.getSectionFooterSize;
  const getSectionHeaderSize = getItemSize.getSectionHeaderSize;
  const headerSize = getItemSize.headerSize;
  const sections = getItemSize.sections;
  let items = [getItemSize, getRecyclerKey, getSectionFooterSize, getSectionHeaderSize, headerSize, sections];
  return getSectionFooterSize.useMemo(() => {
    const items = [];
    const items1 = [];
    const items2 = [];
    const map = new Map();
    let tmp = headerSize;
    let num = 0;
    let tmp2 = headerSize;
    if (0 < sections.length) {
      do {
        let tmp4 = sections[num];
        let tmp6 = num;
        let sum1 = tmp;
        if (0 !== tmp4) {
          let tmp36 = require;
          let SECTION = FastList.FastListItemTypes.SECTION;
          let tmp48 = getSectionHeaderSize(num);
          let _HermesInternal5 = HermesInternal;
          let str13 = "";
          let str14 = ":";
          let str15 = ":";
          let result = map.set("" + SECTION + ":" + tmp6 + ":" + -1, items.length);
          let obj = { type: SECTION, section: num, item: -1, key: null };
          let tmp37 = getRecyclerKey;
          let combined = getRecyclerKey(SECTION, num, undefined);
          if (combined == null) {
            let _HermesInternal = HermesInternal;
            let str = "";
            let str2 = ":";
            let str3 = ":";
            combined = "" + SECTION + ":" + tmp6 + ":" + -1;
          }
          obj.key = combined;
          let arr = items.push(obj);
          let arr2 = items1.push(tmp);
          let arr3 = items2.push(tmp48);
          let sum = tmp + tmp48;
          let num3 = 0;
          let tmp15 = sum;
          if (0 < tmp4) {
            do {
              let ITEM = FastList.FastListItemTypes.ITEM;
              let tmp19 = getItemSize(num, num3);
              let _HermesInternal2 = HermesInternal;
              let str4 = "";
              let str5 = ":";
              let str6 = ":";
              let result1 = map.set("" + ITEM + ":" + tmp6 + ":" + num3, items.length);
              let obj2 = { type: ITEM, section: num, item: num3, key: null };
              let tmp27;
              let tmp26 = num3;
              if (num3 >= 0) {
                tmp27 = num3;
              }
              let combined1 = getRecyclerKey(ITEM, num, tmp27);
              if (combined1 == null) {
                let _HermesInternal3 = HermesInternal;
                let str7 = "";
                let str8 = ":";
                let str9 = ":";
                combined1 = "" + ITEM + ":" + tmp6 + ":" + tmp26;
              }
              obj2.key = combined1;
              let arr12 = items.push(obj2);
              let arr13 = items1.push(sum);
              let arr14 = items2.push(tmp19);
              sum = sum + tmp19;
              num3 = num3 + 1;
              tmp36 = require;
              tmp37 = getRecyclerKey;
              tmp15 = sum;
            } while (num3 < tmp4);
          }
          let tmp39 = getSectionFooterSize(num);
          sum1 = tmp15;
          if (tmp39 > 0) {
            let SECTION_FOOTER = tmp36(6689).FastListItemTypes.SECTION_FOOTER;
            let _HermesInternal6 = HermesInternal;
            let str16 = "";
            let str17 = ":";
            let str18 = ":";
            let result2 = map.set("" + SECTION_FOOTER + ":" + tmp6 + ":" + -1, items.length);
            let obj3 = { type: SECTION_FOOTER, section: num, item: -1, key: null };
            let combined2 = tmp37(SECTION_FOOTER, num, undefined);
            if (combined2 == null) {
              let _HermesInternal4 = HermesInternal;
              let str10 = "";
              let str11 = ":";
              let str12 = ":";
              combined2 = "" + SECTION_FOOTER + ":" + tmp6 + ":" + -1;
            }
            obj3.key = combined2;
            let arr15 = items.push(obj3);
            let arr16 = items1.push(tmp15);
            let arr17 = items2.push(tmp39);
            sum1 = tmp15 + tmp39;
          }
        }
        num = num + 1;
        tmp = sum1;
        tmp2 = sum1;
      } while (num < sections.length);
    }
    return {
      listData: items,
      offsets: items1,
      sizes: items2,
      contentSize: tmp2,
      getIndex(arg0, arg1) {
        if (null == arg1) {
          const _HermesInternal2 = HermesInternal;
          let combined = "" + getItemSize(getRecyclerKey[1]).FastListItemTypes.SECTION + ":" + arg0 + ":" + -1;
        } else {
          const _HermesInternal = HermesInternal;
          combined = "" + getItemSize(getRecyclerKey[1]).FastListItemTypes.ITEM + ":" + arg0 + ":" + arg1;
        }
        return map.get(combined);
      }
    };
  }, items);
};