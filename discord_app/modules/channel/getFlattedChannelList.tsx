// === Module 5279: getFlattenedChannelList ===

// Module 5279 (getFlattenedChannelList)
import obj132 from "obj132" /* 2 */;
import applyDefault from "apply" /* 12 */;

const result = obj132.fileFinishedImporting("modules/channel/getFlattedChannelList.tsx");

export default function getFlattenedChannelList(arg0, arg1) {
  importDefault = arg1;
  let fn = arg2;
  if (arg2 === undefined) {
    fn = function l(item, index) {
      return true;
    };
  }
  const mapped = applyDefault(arg0).map((item, index) => {
    if ("null" === item.channel.id) {
      let items = dependencyMap[item.channel.id];
    } else {
      items = [item, dependencyMap[item.channel.id]];
    }
    return items;
  });
  const arr = applyDefault(arg0);
  const flattenDeepResult = mapped.flattenDeep();
  return mapped.flattenDeep().filter(fn).value();
};