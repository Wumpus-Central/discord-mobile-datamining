// discord_app/modules/messages/ApplicationCommands.tsx
import _slicedToArray from "../../../_runtime/metro/00032__.js";

const re1 = /<\/([^\s]+):(\d+)>(?:\s?(.*))?/;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/ApplicationCommands.tsx");

export const getApplicationCommand = function getApplicationCommand(content) {
  const match = re1.exec(content);
  if (null == match) {
    return null;
  } else {
    [r10025, tmp7, tmp8, tmp9] = _slicedToArray(match, 4);
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
        obj.content = "/" + tmp7 + str2;
        obj.name = tmp7;
        obj.id = tmp8;
        obj.hasOptions = null != tmp9 && "" !== tmp9;
        tmp2 = obj;
      }
    }
    return tmp2;
  }
};
