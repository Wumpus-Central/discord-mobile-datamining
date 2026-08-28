// === Module 7865: getApplicationCommand ===

// Module 7865 (getApplicationCommand)
import closure_0 from "_slicedToArray" /* 32 */;

const re1 = /<\/([^\s]+):(\d+)>(?:\s?(.*))?/;
const result = require("set").fileFinishedImporting("modules/messages/ApplicationCommands.tsx");

export const getApplicationCommand = function getApplicationCommand(content) {
  const match = regex.exec(content);
  if (null == match) {
    return null;
  } else {
    [r10025, tmp7, tmp8, tmp9] = callback(match, 4);
    let tmp2 = null;
    if (null != tmp7) {
      tmp2 = null;
      if (null != tmp8) {
        let str2 = "";
        if (null != tmp9) {
          const _HermesInternal = HermesInternal;
          str2 = " " + tmp9;
        }
        const obj = { content: null, name: null, id: null, hasOptions: null };
        const _HermesInternal2 = HermesInternal;
        obj[0] = "/" + tmp7 + str2;
        obj[1] = tmp7;
        obj[2] = tmp8;
        obj[3] = null != tmp9 && "" !== tmp9;
        tmp2 = obj;
      }
    }
    return tmp2;
  }
};