import "noop";
import fetchFingerprint from "fetchFingerprint";
import callConnect from "callConnect";
import updateVoiceState from "updateVoiceState";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("callConnect").fileFinishedImporting("modules/voice_calls/native/components/OngoingCallStatusLabel.tsx");

export default function OngoingCallStatusLabel(style) {
  let channel;
  let useAllAloneText;
  let voiceState;
  ({ channel, voiceState, useAllAloneText } = style);
  if (useAllAloneText === undefined) {
    useAllAloneText = true;
  }
  if (useAllAloneText === undefined) {
    useAllAloneText = true;
  }
  let id;
  id = id.getId();
  let obj = channel(id[5]);
  const items = [updateVoiceState, callConnect];
  const items1 = [id, channel];
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (null == channel) {
      return false;
    } else {
      const _Object = Object;
      const values = Object.values(outer1_4.getVoiceStatesForChannel(tmp.id));
      const call = outer1_3.getCall(tmp.id);
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
  }, items1);
  const intl = channel(id[6]).intl;
  let stringResult = intl.string(channel(id[6]).t["1zFMqU"]);
  if (channel(id[7]).CallStates.DISCONNECTING !== voiceState) {
    if (tmp2(tmp3[7]).CallStates.CONNECTED !== voiceState) {
      if (tmp2(tmp3[7]).CallStates.RINGING === voiceState) {
        const intl2 = tmp2(tmp3[6]).intl;
        stringResult = intl2.string(tmp2(tmp3[6]).t.Xuzre8);
      } else if (tmp2(tmp3[7]).CallStates.DISCONNECTED === voiceState) {
        const intl5 = tmp2(tmp3[6]).intl;
        stringResult = intl5.string(tmp2(tmp3[6]).t["w//7ET"]);
      }
      obj = { style: null, children: null };
      obj[0] = style.style;
      obj[1] = stringResult;
      return jsx(tmp2(tmp3[8]).LegacyText, { style: null, children: null });
    }
  }
  if (!stateFromStores) {
    const intl3 = tmp2(tmp3[6]).intl;
    let stringResult1 = intl3.string(tmp2(tmp3[6]).t["NGg/fm"]);
  }
  const intl4 = tmp2(tmp3[6]).intl;
  stringResult1 = intl4.string(tmp2(tmp3[6]).t.xNeSms);
};