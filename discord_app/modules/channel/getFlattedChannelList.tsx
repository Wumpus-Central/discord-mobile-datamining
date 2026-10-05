// discord_app/modules/channel/getFlattedChannelList.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/channel/getFlattedChannelList.tsx");

export default function getFlattenedChannelList(arg0, arg1) {
  let closure_0 = arg1;
  let fn = arg2;
  if (arg2 === undefined) {
    fn = function l() {
      return true;
    };
  }
  const arr = _modDef12(arg0);
  const mapped = arr.map((channel) => {
    let items;
    if ("null" === channel.channel.id) {
      items = closure_0[channel.channel.id];
    } else {
      items = [channel, closure_0[channel.channel.id]];
    }
    return items;
  });
  const flattenDeepResult = mapped.flattenDeep();
  const iter = flattenDeepResult.filter(fn);
  return iter.value();
}
