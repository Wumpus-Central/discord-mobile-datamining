// === Module 7112: getFlattedChannelList ===

// Module 7112 (getFlattedChannelList)
import _modDef12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/getFlattedChannelList.tsx");

export default function getFlattenedChannelList(_categories, channels, arg2) {
  dependencyMap = channels;
  let fn = arg2;
  if (arg2 === undefined) {
    fn = function l() {
      return true;
    };
  }
  const mapped = _modDef12(_categories).map((channel) => {
    if ("null" === channel.channel.id) {
      let items = dependencyMap[channel.channel.id];
    } else {
      items = [channel, dependencyMap[channel.channel.id]];
    }
    return items;
  });
  const arr = _modDef12(_categories);
  const flattenDeepResult = mapped.flattenDeep();
  return mapped.flattenDeep().filter(fn).value();
};