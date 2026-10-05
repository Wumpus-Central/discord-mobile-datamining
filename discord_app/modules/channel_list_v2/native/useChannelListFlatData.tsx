// discord_app/modules/channel_list_v2/native/useChannelListFlatData.tsx
import FastList from "../../../lib/native/FastList.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let map;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let getItemSize;
      let getRecyclerKey;
      let getSectionFooterSize;
      let getSectionHeaderSize;
      let headerSize;
      let recyclerKey;
      let recyclerKey1;
      let recyclerKey2;
      let sections;
      const obj = map(576);
      const cResult = obj.c(19);
      ({ getItemSize, getRecyclerKey, getSectionFooterSize, getSectionHeaderSize, headerSize, sections } = arg0);
      if (cResult[0] === getItemSize) {
        if (cResult[1] === getRecyclerKey) {
          if (cResult[2] === getSectionFooterSize) {
            if (cResult[3] === getSectionHeaderSize) {
              if (cResult[4] === headerSize) {
                let tmp3;
                let tmp4;
                let tmp5;
                let tmp6;
                let tmp47;
                if (cResult[5] === sections) {
                  map = cResult[6];
                  tmp3 = cResult[7];
                  tmp4 = cResult[8];
                  tmp5 = cResult[9];
                  tmp6 = cResult[10];
                }
                if (cResult[11] !== tmp2) {
                  const fn = function u(arg0, arg1) {
                    let combined;
                    const get = map.get;
                    if (null == arg1) {
                      const _HermesInternal2 = HermesInternal;
                      combined = "" + FastList.FastListItemTypes.SECTION + ":" + arg0 + ":" + -1;
                    } else {
                      const _HermesInternal = HermesInternal;
                      combined = "" + FastList.FastListItemTypes.ITEM + ":" + arg0 + ":" + arg1;
                    }
                    return get(combined);
                  };
                  cResult[11] = tmp2;
                  cResult[12] = fn;
                  tmp47 = fn;
                } else {
                  tmp47 = cResult[12];
                }
                if (cResult[13] === tmp47) {
                  if (cResult[14] === tmp3) {
                    if (cResult[15] === tmp4) {
                      if (cResult[16] === tmp5) {
                        let tmp48;
                        if (cResult[17] === tmp6) {
                          tmp48 = cResult[18];
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
            let SECTION = map(6569).FastListItemTypes.SECTION;
            let sectionHeaderSize = getSectionHeaderSize(num);
            let _HermesInternal5 = HermesInternal;
            let str13 = "";
            let str14 = ":";
            let str15 = ":";
            let result = map.set("" + SECTION + ":" + tmp11 + ":" + -1, items.length);
            let obj3 = { type: SECTION, section: num, item: -1, key: recyclerKey };
            let push2 = items.push;
            recyclerKey = getRecyclerKey(SECTION, num, undefined);
            if (recyclerKey == null) {
              let _HermesInternal = HermesInternal;
              let str = "";
              let str2 = ":";
              let str3 = ":";
              recyclerKey = "" + SECTION + ":" + tmp11 + ":" + -1;
            }
            let push2Result = push2(obj3);
            let arr = items1.push(tmp7);
            let arr2 = items2.push(sectionHeaderSize);
            let sum = tmp7 + sectionHeaderSize;
            let num3 = 0;
            let tmp20 = sum;
            if (0 < tmp9) {
              do {
                let tmp21 = map;
                let ITEM = map(6569).FastListItemTypes.ITEM;
                let itemSize = getItemSize(num, num3);
                let _HermesInternal2 = HermesInternal;
                let str4 = "";
                let str5 = ":";
                let str6 = ":";
                let result1 = map.set("" + ITEM + ":" + tmp11 + ":" + num3, items.length);
                let obj4 = { type: ITEM, section: num, item: num3, key: recyclerKey1 };
                let tmp30;
                let push = items.push;
                let tmp29 = num3;
                if (num3 >= 0) {
                  tmp30 = num3;
                }
                recyclerKey1 = getRecyclerKey(ITEM, num, tmp30);
                if (recyclerKey1 == null) {
                  let _HermesInternal3 = HermesInternal;
                  let str7 = "";
                  let str8 = ":";
                  let str9 = ":";
                  recyclerKey1 = "" + ITEM + ":" + tmp11 + ":" + tmp29;
                }
                let arr3 = push(obj4);
                let arr10 = items1.push(sum);
                let arr11 = items2.push(itemSize);
                sum = sum + itemSize;
                num3 = num3 + 1;
                tmp20 = sum;
                tmp39 = tmp21;
              } while (num3 < tmp9);
            }
            let sectionFooterSize = getSectionFooterSize(num);
            sum1 = tmp20;
            if (sectionFooterSize > 0) {
              let SECTION_FOOTER = tmp39(6569).FastListItemTypes.SECTION_FOOTER;
              let _HermesInternal6 = HermesInternal;
              let str16 = "";
              let str17 = ":";
              let str18 = ":";
              let result2 = map.set("" + SECTION_FOOTER + ":" + tmp11 + ":" + -1, items.length);
              let obj5 = { type: SECTION_FOOTER, section: num, item: -1, key: recyclerKey2 };
              let push3 = items.push;
              recyclerKey2 = getRecyclerKey(SECTION_FOOTER, num, undefined);
              if (recyclerKey2 == null) {
                let _HermesInternal4 = HermesInternal;
                let str10 = "";
                let str11 = ":";
                let str12 = ":";
                recyclerKey2 = "" + SECTION_FOOTER + ":" + tmp11 + ":" + -1;
              }
              let push3Result = push3(obj5);
              let arr12 = items1.push(tmp20);
              let arr13 = items2.push(sectionFooterSize);
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
    }
  : (getItemSize) => {
      getItemSize = getItemSize.getItemSize;
      const getRecyclerKey = getItemSize.getRecyclerKey;
      const getSectionFooterSize = getItemSize.getSectionFooterSize;
      const getSectionHeaderSize = getItemSize.getSectionHeaderSize;
      const headerSize = getItemSize.headerSize;
      const sections = getItemSize.sections;
      let items = [getItemSize, getRecyclerKey, getSectionFooterSize, getSectionHeaderSize, headerSize, sections];
      return getSectionFooterSize.useMemo(() => {
        let combined;
        let combined1;
        let combined2;
        const items = [];
        const items1 = [];
        const items2 = [];
        map = new Map();
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
              let obj = { type: SECTION, section: num, item: -1, key: combined };
              let tmp37 = getRecyclerKey;
              let push2 = items.push;
              combined = getRecyclerKey(SECTION, num, undefined);
              if (combined == null) {
                let _HermesInternal = HermesInternal;
                let str = "";
                let str2 = ":";
                let str3 = ":";
                combined = "" + SECTION + ":" + tmp6 + ":" + -1;
              }
              let push2Result = push2(obj);
              let arr = items1.push(tmp);
              let arr2 = items2.push(tmp48);
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
                  let obj2 = { type: ITEM, section: num, item: num3, key: combined1 };
                  let tmp27;
                  let push = items.push;
                  let tmp26 = num3;
                  if (num3 >= 0) {
                    tmp27 = num3;
                  }
                  combined1 = getRecyclerKey(ITEM, num, tmp27);
                  if (combined1 == null) {
                    let _HermesInternal3 = HermesInternal;
                    let str7 = "";
                    let str8 = ":";
                    let str9 = ":";
                    combined1 = "" + ITEM + ":" + tmp6 + ":" + tmp26;
                  }
                  let arr3 = push(obj2);
                  let arr10 = items1.push(sum);
                  let arr11 = items2.push(tmp19);
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
                let SECTION_FOOTER = tmp36(6569).FastListItemTypes.SECTION_FOOTER;
                let _HermesInternal6 = HermesInternal;
                let str16 = "";
                let str17 = ":";
                let str18 = ":";
                let result2 = map.set("" + SECTION_FOOTER + ":" + tmp6 + ":" + -1, items.length);
                let obj3 = { type: SECTION_FOOTER, section: num, item: -1, key: combined2 };
                let push3 = items.push;
                combined2 = tmp37(SECTION_FOOTER, num, undefined);
                if (combined2 == null) {
                  let _HermesInternal4 = HermesInternal;
                  let str10 = "";
                  let str11 = ":";
                  let str12 = ":";
                  combined2 = "" + SECTION_FOOTER + ":" + tmp6 + ":" + -1;
                }
                let push3Result = push3(obj3);
                let arr12 = items1.push(tmp15);
                let arr13 = items2.push(tmp39);
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
            let combined;
            const get = map.get;
            if (null == arg1) {
              const _HermesInternal2 = HermesInternal;
              combined = "" + getItemSize(getRecyclerKey[3]).FastListItemTypes.SECTION + ":" + arg0 + ":" + -1;
            } else {
              const _HermesInternal = HermesInternal;
              combined = "" + getItemSize(getRecyclerKey[3]).FastListItemTypes.ITEM + ":" + arg0 + ":" + arg1;
            }
            return get(combined);
          },
        };
      }, items);
    };
let result = size.fileFinishedImporting("modules/channel_list_v2/native/useChannelListFlatData.tsx");

export default tmp2;
