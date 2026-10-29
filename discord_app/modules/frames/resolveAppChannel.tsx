// discord_app/modules/frames/resolveAppChannel.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

const require = fn;
let closure_7 = async function _resolveAppChannel() {
  closure_3 = tmp2;
  closure_131_0 = closure_0;
  let obj5 = closure_1;
  if (closure_1 === undefined) {
    obj5 = {};
  }
  ({ preferredChannelId: closure_131_1, fallback } = obj5);
  if (fallback === undefined) {
    fallback = true;
  }
  closure_131_2 = fallback;
  await "Reflect";
  let channel = null;
  if (null != closure_131_1) {
    channel = closure_132_3.getChannel(closure_131_1);
  }
  closure_131_3 = channel;
  if (null != closure_131_3) {
    if (closure_131_3.type === closure_132_5.GUILD_APP) {
      if (closure_131_3.application_id === closure_131_0) {
        if (closure_132_4.can(closure_132_6.VIEW_CHANNEL, closure_131_3)) {
          c6 = 3;
          return { value: { guildId: closure_131_3.guild_id, channelId: closure_131_3.id }, done: true };
        }
      }
    }
  }
  let tmp43 = null != closure_131_1;
  if (tmp43) {
    tmp43 = null == closure_131_3;
  }
  closure_131_4 = tmp43;
  if (!closure_131_4) {
    if (!closure_131_2) {
      c6 = 3;
      return { value: null, done: true };
    }
  }
  await closure_132_0(closure_132_1[4]).fetchApplicationChannels(closure_131_0);
  closure_131_5 = value;
  if (closure_131_4) {
    const found = closure_131_5.find((channel_id) => channel_id.channel_id === closure_1_1);
  }
  closure_131_6 = found;
  let first = closure_131_6;
  if (closure_131_6 == null) {
    first = undefined;
    if (closure_131_2) {
      first = closure_131_5[0];
    }
  }
  closure_131_7 = first;
  let tmp18 = null;
  if (null != closure_131_7) {
    tmp18 = { guildId: closure_131_7.guild_id, channelId: closure_131_7.channel_id };
  }
  return tmp18;
};
const Constants = fn(1084);
({ ChannelTypes: hasOwnProperty, Permissions: metroRequire } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/resolveAppChannel.tsx");

export default function resolveAppChannel() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
