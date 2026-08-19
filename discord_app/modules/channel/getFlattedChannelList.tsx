// discord_app/modules/channel/getFlattedChannelList.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import applyDefault from "../../../_runtime/00012_apply.js";

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