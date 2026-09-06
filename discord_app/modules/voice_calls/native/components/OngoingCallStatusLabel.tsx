// discord_app/modules/voice_calls/native/components/OngoingCallStatusLabel.tsx
import noop from "../../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import CallStore from "../../../../stores/CallStore.tsx";
import VoiceStateStore from "../../../../stores/VoiceStateStore.tsx";

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/native/components/OngoingCallStatusLabel.tsx");

export default function OngoingCallStatusLabel(style) {
  ({ channel, voiceState, useAllAloneText } = style);
  if (useAllAloneText === undefined) {
    useAllAloneText = true;
  }
  if (useAllAloneText === undefined) {
    useAllAloneText = true;
  }
  const id = AuthenticationStore.getId();
  let obj = channel(id[5]);
  const items = [VoiceStateStore, CallStore];
  const items1 = [id, channel];
  const stateFromStores = obj.useStateFromStores(
    items,
    () => {
      if (null == channel) {
        return false;
      } else {
        const _Object = Object;
        const values = Object.values(VoiceStateStore.getVoiceStatesForChannel(channel.id));
        const call = CallStore.getCall(channel.id);
        let tmp2 = null != call;
        if (tmp2) {
          tmp2 = call.ringing.length > 0;
        }
        let tmp3 = !tmp2;
        if (!tmp2) {
          tmp3 = 1 === values.length;
        }
        if (tmp3) {
          tmp3 = values[0].userId === id;
        }
        return tmp3;
      }
    },
    items1,
  );
  const intl = channel(id[6]).intl;
  let stringResult = intl.string(channel(id[6]).t["1zFMqU"]);
  if (channel(id[7]).CallStates.DISCONNECTING !== voiceState) {
    if (channel(tmp3[7]).CallStates.CONNECTED !== voiceState) {
      if (channel(tmp3[7]).CallStates.RINGING === voiceState) {
        const intl2 = channel(tmp3[6]).intl;
        stringResult = intl2.string(channel(tmp3[6]).t.Xuzre8);
      } else if (channel(tmp3[7]).CallStates.DISCONNECTED === voiceState) {
        const intl5 = channel(tmp3[6]).intl;
        stringResult = intl5.string(channel(tmp3[6]).t["w//7ET"]);
      }
      obj = { style: style.style, children: stringResult };
      return jsx(channel(tmp3[8]).LegacyText, { style: style.style, children: stringResult });
    }
  }
  if (!stateFromStores) {
    const intl3 = channel(tmp3[6]).intl;
    let stringResult1 = intl3.string(channel(tmp3[6]).t["NGg/fm"]);
  }
  const intl4 = channel(tmp3[6]).intl;
  stringResult1 = intl4.string(channel(tmp3[6]).t.xNeSms);
}
