// discord_app/modules/channel/getFlattedChannelList.tsx
const result = require("set").fileFinishedImporting("modules/channel/getFlattedChannelList.tsx");

export default function getFlattenedChannelList(arg0, arg1) {
  const importDefault = arg1;
  let fn = arg2;
  if (arg2 === undefined) {
    fn = function l() {
      return true;
    };
  }
  const mapped = require("../../../_runtime/00012_apply.js")(arg0).map((channel) => {
    if ("null" === channel.channel.id) {
      let items = dependencyMap[channel.channel.id];
    } else {
      items = [channel, dependencyMap[channel.channel.id]];
    }
    return items;
  });
  const arr = require("../../../_runtime/00012_apply.js")(arg0);
  const flattenDeepResult = mapped.flattenDeep();
  return mapped.flattenDeep().filter(fn).value();
};