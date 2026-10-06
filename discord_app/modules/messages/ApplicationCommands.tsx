// === Module 7691: _slicedToArray ===

// Module 7691 (_slicedToArray)
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const re1 = /<\/([^\s]+):(\d+)>(?:\s?(.*))?/;
const result = size.fileFinishedImporting("modules/messages/ApplicationCommands.tsx");

export const getApplicationCommand = function getApplicationCommand(content) {
  let tmp7;
  let tmp8;
  let tmp9;
  const match = re1.exec(content);
  if (null == match) {
    return null;
  } else {
    [r10025, tmp7, tmp8, tmp9] = match;
    let tmp2 = null;
    _slicedToArray(match, 4);
    if (null != tmp7) {
      tmp2 = null;
      if (null != tmp8) {
        let str2 = "";
        if (null != tmp9) {
          const _HermesInternal = HermesInternal;
          str2 = " " + tmp9;
        }
        const _HermesInternal2 = HermesInternal;
        tmp2 = { content: "/" + tmp7 + str2, name: tmp7, id: tmp8, hasOptions: null != tmp9 && "" !== tmp9 };
        const obj = { content: "/" + tmp7 + str2, name: tmp7, id: tmp8, hasOptions: null != tmp9 && "" !== tmp9 };
      }
    }
    return tmp2;
  }
};