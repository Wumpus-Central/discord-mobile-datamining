// === Module 7344: getFlattedChannelList ===

// Module 7344 (getFlattedChannelList)
import applyDefault from "apply" /* 12 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/getFlattedChannelList.tsx");

export default function getFlattenedChannelList(arg0, arg1) {
  dependencyMap = arg1;
  let fn = arg2;
  if (arg2 === undefined) {
    fn = function l() {
      return true;
    };
  }
  const mapped = applyDefault(arg0).map((channel) => {
    if ("null" === channel.channel.id) {
      items = dependencyMap[channel.channel.id];
    } else {
      items = [channel, dependencyMap[channel.channel.id]];
    }
    return items;
  });
  const arr = applyDefault(arg0);
  const flattenDeepResult = mapped.flattenDeep();
  return mapped.flattenDeep().filter(fn).value();
};