// discord_app/modules/channel/getFlattedChannelList.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import size from "../../../_runtime/metro/00002__.js";

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
}
