// === Module 16605: useChannelListFlatData ===

// Module 16605 (useChannelListFlatData)
import FastList from "FastList" /* 6759 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/useChannelListFlatData.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useChannelListFlatData(arg0) {
  const cResult = map(576).c(19);
  ({ getItemSize, getRecyclerKey, getSectionFooterSize, getSectionHeaderSize, headerSize, sections } = arg0);
  if (cResult[0] === getItemSize) {
    if (cResult[1] === getRecyclerKey) {
      if (cResult[2] === getSectionFooterSize) {
        if (cResult[3] === getSectionHeaderSize) {
          if (cResult[4] === headerSize) {
            if (cResult[5] === sections) {
              map = cResult[6];
              let tmp3 = cResult[7];
              let tmp4 = cResult[8];
              let tmp5 = cResult[9];
              let tmp6 = cResult[10];
            }
            if (cResult[11] !== tmp2) {
              function getIndex(arg0, arg1) {
                if (null == arg1) {
                  const _HermesInternal2 = HermesInternal;
                  let combined = "" + FastList.FastListItemTypes.SECTION + ":" + arg0 + ":" + -1;
                } else {
                  const _HermesInternal = HermesInternal;
                  combined = "" + FastList.FastListItemTypes.ITEM + ":" + arg0 + ":" + arg1;
                }
                return map.get(combined);
              }
              cResult[11] = tmp2;
              cResult[12] = getIndex;
              let tmp47 = getIndex;
            } else {
              tmp47 = cResult[12];
            }
            if (cResult[13] === tmp47) {
              if (cResult[14] === tmp3) {
                if (cResult[15] === tmp4) {
                  if (cResult[16] === tmp5) {
                    if (cResult[17] === tmp6) {
                      let tmp48 = cResult[18];
                    }
                    return tmp48;
                  }
                }
              }
            }
            const obj2 = { listData: tmp3, offsets: tmp5, sizes: tmp6, contentSize: tmp4, getIndex: tmp47 };
            cResult[13] = tmp47;
            cResult[14] = tmp3;
            cResult[15] = tmp4;
            cResult[16] = tmp5;
            cResult[17] = tmp6;
            cResult[18] = obj2;
            tmp48 = obj2;
          }
        }
      }
    }
  }
  const items = [];
  const items1 = [];
  const items2 = [];
  map = new Map();
  let tmp7 = headerSize;
  let num = 0;
  let tmp8 = headerSize;
  if (0 < sections.length) {
    do {
      let tmp9 = sections[num];
      let tmp11 = num;
      let sum1 = tmp7;
      if (0 !== tmp9) {
        let tmp39 = map;
        let SECTION = map(6759).FastListItemTypes.SECTION;
        let sectionHeaderSize = getSectionHeaderSize(num);
        let _HermesInternal5 = HermesInternal;
        let str13 = "";
        let str14 = ":";
        let str15 = ":";
        let result = map.set("" + SECTION + ":" + tmp11 + ":" + -1, items.length);
        let obj3 = { type: SECTION, section: num, item: -1, key: null };
        let recyclerKey = getRecyclerKey(SECTION, num, undefined);
        if (recyclerKey == null) {
          let _HermesInternal = HermesInternal;
          let str = "";
          let str2 = ":";
          let str3 = ":";
          recyclerKey = "" + SECTION + ":" + tmp11 + ":" + -1;
        }
        obj3.key = recyclerKey;
        let arr = items.push(obj3);
        let arr2 = items1.push(tmp7);
        let arr3 = items2.push(sectionHeaderSize);
        let sum = tmp7 + sectionHeaderSize;
        let num3 = 0;
        let tmp20 = sum;
        if (0 < tmp9) {
          do {
            let tmp21 = map;
            let ITEM = map(6759).FastListItemTypes.ITEM;
            let itemSize = getItemSize(num, num3);
            let _HermesInternal2 = HermesInternal;
            let str4 = "";
            let str5 = ":";
            let str6 = ":";
            let result1 = map.set("" + ITEM + ":" + tmp11 + ":" + num3, items.length);
            let obj4 = { type: ITEM, section: num, item: num3, key: null };
            let tmp30;
            let tmp29 = num3;
            if (num3 >= 0) {
              tmp30 = num3;
            }
            let recyclerKey1 = getRecyclerKey(ITEM, num, tmp30);
            if (recyclerKey1 == null) {
              let _HermesInternal3 = HermesInternal;
              let str7 = "";
              let str8 = ":";
              let str9 = ":";
              recyclerKey1 = "" + ITEM + ":" + tmp11 + ":" + tmp29;
            }
            obj4.key = recyclerKey1;
            let arr12 = items.push(obj4);
            let arr13 = items1.push(sum);
            let arr14 = items2.push(itemSize);
            sum = sum + itemSize;
            num3 = num3 + 1;
            tmp20 = sum;
            tmp39 = tmp21;
          } while (num3 < tmp9);
        }
        let sectionFooterSize = getSectionFooterSize(num);
        sum1 = tmp20;
        if (sectionFooterSize > 0) {
          let SECTION_FOOTER = tmp39(6759).FastListItemTypes.SECTION_FOOTER;
          let _HermesInternal6 = HermesInternal;
          let str16 = "";
          let str17 = ":";
          let str18 = ":";
          let result2 = map.set("" + SECTION_FOOTER + ":" + tmp11 + ":" + -1, items.length);
          let obj5 = { type: SECTION_FOOTER, section: num, item: -1, key: null };
          let recyclerKey2 = getRecyclerKey(SECTION_FOOTER, num, undefined);
          if (recyclerKey2 == null) {
            let _HermesInternal4 = HermesInternal;
            let str10 = "";
            let str11 = ":";
            let str12 = ":";
            recyclerKey2 = "" + SECTION_FOOTER + ":" + tmp11 + ":" + -1;
          }
          obj5.key = recyclerKey2;
          let arr15 = items.push(obj5);
          let arr16 = items1.push(tmp20);
          let arr17 = items2.push(sectionFooterSize);
          sum1 = tmp20 + sectionFooterSize;
        }
      }
      num = num + 1;
      tmp7 = sum1;
      tmp8 = sum1;
    } while (num < sections.length);
  }
  cResult[0] = getItemSize;
  cResult[1] = getRecyclerKey;
  cResult[2] = getSectionFooterSize;
  cResult[3] = getSectionHeaderSize;
  cResult[4] = headerSize;
  cResult[5] = sections;
  cResult[6] = map;
  cResult[7] = items;
  cResult[8] = tmp8;
  cResult[9] = items1;
  cResult[10] = items2;
  tmp4 = tmp8;
  tmp6 = items2;
  tmp5 = items1;
  tmp3 = items;
  const obj = map(576);
}) : (function useChannelListFlatData(getItemSize) {
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
            let SECTION_FOOTER = tmp36(6759).FastListItemTypes.SECTION_FOOTER;
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
          let combined = "" + getItemSize(getRecyclerKey[3]).FastListItemTypes.SECTION + ":" + arg0 + ":" + -1;
        } else {
          const _HermesInternal = HermesInternal;
          combined = "" + getItemSize(getRecyclerKey[3]).FastListItemTypes.ITEM + ":" + arg0 + ":" + arg1;
        }
        return map.get(combined);
      }
    };
  }, items);
});