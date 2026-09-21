// === Module 17030: VibegrationsMarkdownBlocks ===

// Module 17030 (VibegrationsMarkdownBlocks)
import size from "module_2" /* 2 */;

const re0 = /^( *)([-*]|\d+\.) +(.*)$/;
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsMarkdownBlocks.tsx");

export const splitMarkdownBlocks = function splitMarkdownBlocks(source) {
  const parts = source.split("\n");
  const items = [];
  let items1 = [];
  let items2 = [];
  let tmp = null;
  let num = 0;
  let obj = items1;
  let tmp2 = null;
  if (0 < parts.length) {
    do {
      let str = parts[num];
      let match = re0.exec(str);
      if (null == match) {
        let tmp16 = tmp;
        let items4 = items2;
        if (null == tmp) {
          let arr = items1.push(str);
          let items6 = tmp16;
          let items3 = items4;
          let items5 = items1;
          let diff = num;
        } else if ("" === str.trim()) {
          let sum = num + 1;
          let tmp22 = sum;
          if (sum < parts.length) {
            let str3 = parts[sum];
            let tmp23 = sum;
            tmp22 = sum;
            if ("" === str3.trim()) {
              let sum1 = tmp23 + 1;
              tmp22 = sum1;
              while (sum1 < parts.length) {
                let str4 = parts[sum1];
                tmp23 = sum1;
                tmp22 = sum1;
                if ("" !== str4.trim()) {
                  break;
                }
              }
            }
          }
          if (tmp22 < parts.length) {
            if (re0.test(parts[tmp22])) {
              diff = tmp22 - 1;
              items5 = items1;
              items6 = tmp;
              items3 = items2;
            }
          }
          let tmp26 = null != tmp && tmp.length > 0;
          if (tmp26) {
            let obj2 = { kind: "list", items: tmp };
            let arr2 = items.push(obj2);
          }
          items3 = [];
          items5 = items1;
          items6 = null;
          diff = num;
        } else {
          let obj9 = /^\s/;
          if (obj9.test(str)) {
            let tmp20 = tmp[tmp.length - 1];
            let _HermesInternal2 = HermesInternal;
            tmp20.text = "" + tmp20.text + " " + str.trim();
            items5 = items1;
            items6 = tmp;
            items3 = items2;
            diff = num;
          } else {
            let tmp17 = null != tmp && tmp.length > 0;
            if (tmp17) {
              let obj3 = { kind: "list", items: tmp };
              let arr3 = items.push(obj3);
            }
            items4 = [];
            tmp16 = null;
          }
        }
      } else {
        items5 = items1;
        items6 = tmp;
        if (null == tmp) {
          let str2 = items1.join("\n");
          let trimmed = str2.trim();
          if ("" !== trimmed) {
            let obj5 = { kind: "text", text: trimmed };
            let arr4 = items.push(obj5);
          }
          items5 = [];
          items6 = [];
        }
        let _Math = Math;
        let rounded = Math.floor(match[1].length / 2);
        items2.length = rounded + 1;
        let num2 = items2[rounded];
        if (num2 == null) {
          num2 = 0;
        }
        items2[rounded] = num2 + 1;
        let obj6 = { text: match[3], depth: rounded, marker: null };
        let obj4 = /\d/;
        if (obj4.test(match[2])) {
          let _HermesInternal = HermesInternal;
          let combined = "" + items2[rounded] + ".";
        } else {
          let _Math2 = Math;
          combined = length[Math.min(Math, rounded, length.length - 1)];
        }
        obj6.marker = combined;
        let arr5 = items6.push(obj6);
        items3 = items2;
        diff = num;
      }
      num = diff + 1;
      items1 = items5;
      tmp = items6;
      items2 = items3;
      obj = items5;
      tmp2 = items6;
    } while (num < parts.length);
  }
  if (tmp28) {
    const obj7 = { kind: "list", items: tmp2 };
    items.push(obj7);
  }
  const trimmed1 = obj.join("\n").trim();
  if ("" !== trimmed1) {
    const obj8 = { kind: "text", text: trimmed1 };
    items.push(obj8);
  }
  return items;
};