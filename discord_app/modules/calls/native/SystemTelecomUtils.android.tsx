// === Module 16531: SystemTelecomUtils ===

// Module 16531 (SystemTelecomUtils)
import NativeSystemTelecomModuleDefault from "NativeSystemTelecomModule" /* 16529 */;
import ChannelStore from "ChannelStore" /* 5019 */;

const ChannelTypes = fn(1072).ChannelTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/native/SystemTelecomUtils.android.tsx");

export function isSystemTelecomEnabled() {
  return NativeSystemTelecomModuleDefault.getConstants().isAvailable;
}
export function isSystemTelecomEnabledForChannel(guild_id, channelId) {
  if (obj.getConstants().isAvailable) {
    const channel = ChannelStore.getChannel(channelId);
    let type;
    if (channel != null) {
      type = channel.type;
    }
    let tmp7 = type === ChannelTypes.DM;
    if (!tmp7) {
      let type1;
      if (channel != null) {
        type1 = channel.type;
      }
      tmp7 = type1 === tmp6.GROUP_DM;
    }
    return tmp7;
  } else {
    return false;
  }
  obj = NativeSystemTelecomModuleDefault;
}