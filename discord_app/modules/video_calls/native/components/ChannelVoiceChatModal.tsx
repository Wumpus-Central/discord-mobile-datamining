// === Module 10923: ChannelVoiceChatModal ===

// Module 10923 (ChannelVoiceChatModal)
import computeChannelNameDefault from "computeChannelName" /* 4674 */;
import _modDef10882 from "module_10882" /* 10882 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/video_calls/native/components/ChannelVoiceChatModal.tsx");

export default function ChannelVoiceChatModal(channel) {
  channel = channel.channel;
  const tmp2 = computeChannelNameDefault(channel);
  const items = [channel.id];
  const effect = React.useEffect(() => {
    closure_1_1(closure_1_2[3]).updateChatOpen(channel.id, true);
    return () => {
      closure_1_1(closure_1_2[3]).updateChatOpen(id.id, false);
    };
  }, items);
  let str = tmp2;
  if (tmp2 == null) {
    str = "";
  }
  const tmp5 = _modDef10882;
  return <tmp5 screenKey="StageVoiceChat" title={str} titleIcon={jsx(channel(5050).StageIcon, { size: "sm" })} render={function render() {
    let guild_id = channel.guild_id;
    if (guild_id == null) {
      guild_id = null;
    }
    return closure_1_4(closure_1_1(closure_1_2[6]).Provider, { value: guild_id, children: closure_1_4(closure_1_1(closure_1_2[7]), { channel, inModal: true }) });
  }} />;
};