// === Module 10008: ChannelVoiceChatModal ===

// Module 10008 (ChannelVoiceChatModal)
import contextDefault from "context" /* 4255 */;
import computeChannelNameDefault from "computeChannelName" /* 4984 */;
import _modDef8666 from "module_8666" /* 8666 */;
import _modDef9930 from "module_9930" /* 9930 */;
import _modDef10009 from "module_10009" /* 10009 */;
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/video_calls/native/components/ChannelVoiceChatModal.tsx");

export default function ChannelVoiceChatModal(channel) {
  channel = channel.channel;
  const tmp2 = computeChannelNameDefault(channel);
  const items = [channel.id];
  const effect = React.useEffect(() => {
    _modDef8666.updateChatOpen(channel.id, true);
    return () => {
      closure_1_1(closure_1_2[3]).updateChatOpen(id.id, false);
    };
  }, items);
  let str = tmp2;
  if (tmp2 == null) {
    str = "";
  }
  return <tmp5 screenKey="StageVoiceChat" title={str} titleIcon={jsx(channel(6892).StageIcon, { size: "sm" })} render={function render() {
    let guild_id = channel.guild_id;
    if (guild_id == null) {
      guild_id = null;
    }
    return jsx(contextDefault.Provider, { value: guild_id, children: jsx(_modDef10009, { channel, inModal: true }) });
  }} />;
};