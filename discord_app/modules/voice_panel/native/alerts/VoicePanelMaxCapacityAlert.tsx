// === Module 17361: VoicePanelMaxCapacityAlert ===

// Module 17361 (VoicePanelMaxCapacityAlert)
import Fragment from "Fragment" /* 21 */;
import VoicePanelLockedIconDefault from "VoicePanelLockedIcon" /* 17359 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channelId;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let first;
  let tmp10;
  let tmp11;
  let tmp16;
  let tmp18;
  let tmp20;
  let tmp6;
  let tmp7;
  const obj = channelId(576);
  const cResult = obj.c(14);
  channelId = channelId.channelId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function s() {
      const channel = ChannelStore.getChannel(channelId);
      let num;
      if (channel != null) {
        num = channel.userLimit;
      }
      if (num == null) {
        num = 0;
      }
      return num;
    };
    const items1 = [channelId];
    cResult[1] = channelId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = channelId(573);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  const tmpResult2 = channelId(5720);
  const dismissModalCallback = tmpResult2.useDismissModalCallback();
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp14 = jsx(VoicePanelLockedIconDefault, {});
    const intl = tmp(1126).intl;
    const stringResult = intl.string(channelId(1126).t.hHbsQj);
    cResult[4] = tmp14;
    cResult[5] = stringResult;
    tmp11 = stringResult;
    tmp10 = tmp14;
  } else {
    tmp10 = cResult[4];
    tmp11 = cResult[5];
  }
  if (cResult[6] !== stateFromStores) {
    const intl2 = tmp(1126).intl;
    const obj2 = { count: stateFromStores };
    const formatToPlainStringResult = intl2.formatToPlainString(channelId(1126).t["387SQH"], obj2);
    cResult[6] = stateFromStores;
    cResult[7] = formatToPlainStringResult;
    tmp16 = formatToPlainStringResult;
  } else {
    tmp16 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1126).intl;
    const stringResult1 = intl3.string(channelId(1126).t["NX+WJN"]);
    cResult[8] = stringResult1;
    tmp18 = stringResult1;
  } else {
    tmp18 = cResult[8];
  }
  if (cResult[9] !== dismissModalCallback) {
    const tmp22 = jsx(channelId(5720).AlertActionButton, { variant: "secondary", text: tmp18, onPress: dismissModalCallback });
    cResult[9] = dismissModalCallback;
    cResult[10] = tmp22;
    tmp20 = tmp22;
  } else {
    tmp20 = cResult[10];
  }
  if (cResult[11] === tmp16) {
    let tmp23;
    if (cResult[12] === tmp20) {
      tmp23 = cResult[13];
    }
    return tmp23;
  }
  const tmp24 = jsx(channelId(5720).AlertModal, { header: tmp10, title: tmp11, content: tmp16, actions: tmp20 });
  cResult[11] = tmp16;
  cResult[12] = tmp20;
  cResult[13] = tmp24;
  tmp23 = tmp24;
}) : ((channelId) => {
  let intl3;
  channelId = channelId.channelId;
  const items = [ChannelStore];
  const items1 = [channelId];
  const obj = channelId(573);
  const stateFromStores = obj.useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(channelId);
    let num;
    if (channel != null) {
      num = channel.userLimit;
    }
    if (num == null) {
      num = 0;
    }
    return num;
  }, items1);
  const obj2 = channelId(5720);
  const dismissModalCallback = obj2.useDismissModalCallback();
  const AlertModal = channelId(5720).AlertModal;
  const intl = channelId(1126).intl;
  const intl2 = channelId(1126).intl;
  ({ variant: "secondary", text: intl3.string(channelId(1126).t["NX+WJN"]), onPress: dismissModalCallback });
  const AlertActionButton = channelId(5720).AlertActionButton;
  intl3 = channelId(1126).intl;
  return <AlertModal header={null} title={intl.string(channelId(1126).t.hHbsQj)} content={intl2.formatToPlainString(channelId(1126).t["387SQH"], { count: stateFromStores })} actions={null} />;
});
const result = size.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelMaxCapacityAlert.tsx");

export default tmp3;
export const VOICE_PANEL_MAX_CAPACITY_KEY = "voice-panel-max-capacity";