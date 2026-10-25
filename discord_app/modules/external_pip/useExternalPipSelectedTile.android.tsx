// === Module 18660: useExternalPipSelectedTile ===

// Module 18660 (useExternalPipSelectedTile)
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6772 */;
import PIPSpeakerStore from "PIPSpeakerStore" /* 15052 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5714 */;

const require = globalThis.__r;

const require = fn;
const VoicePanelPIPModes = fn(18447).VoicePanelPIPModes;
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/external_pip/useExternalPipSelectedTile.android.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useExternalPipSelectedTile(arg0, arg1, arg2) {
  _require = arg0;
  importDefault = arg1;
  const cResult = require("c").c(7);
  str = "card";
  if (arg2 === VoicePanelPIPModes.IN_APP) {
    str = "pip";
  }
  if (cResult[0] === arg0) {
    if (cResult[1] === arg1) {
      if (cResult[2] === str) {
        let tmp2 = cResult[3];
        let tmp3 = cResult[4];
      }
      const effect = noop.useEffect(tmp2, tmp3);
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            return () => { ... };
          }
        }
        let items = [];
        cResult[5] = E;
        cResult[6] = items;
        let tmp7 = items;
      } else {
        class E {
          constructor() {
            return () => { ... };
          }
        }
        tmp7 = cResult[6];
      }
      const effect1 = noop.useEffect(E, tmp7);
    }
  }
  class S {
    constructor() {
      update = function update() { ... };
      items = [, ];
      items[0] = closure_1_6;
      items[1] = closure_1_5;
      arraySpreadResult = HermesBuiltin.arraySpread(closure_0(pip[7]).EXTERNAL_PIP_SELECTED_PARTICIPANT_STORES, 2);
      batchedStoreListener = new closure_0(pip[9]).BatchedStoreListener(items, update);
      closure_0 = batchedStoreListener;
      attachResult = batchedStoreListener.attach("useExternalPipSelectedTile");
      closure_1 = closure_1.subscribeFromItem(update);
      updateResult = update();
      return () => { ... };
    }
  }
  const items1 = [arg0, arg1, str];
  cResult[0] = arg0;
  cResult[1] = arg1;
  cResult[2] = str;
  cResult[3] = S;
  cResult[4] = items1;
  tmp3 = items1;
  tmp2 = S;
  let obj = require("c");
}) : (function useExternalPipSelectedTile(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  let str = "card";
  if (arg2 === VoicePanelPIPModes.IN_APP) {
    str = "pip";
  }
  let items = [arg0, arg1, str];
  const effect = noop.useEffect(() => {
    function update() {
      if (channelId.getChannelId() === batchedStoreListener) {
        const selectedParticipantId1 = selectedParticipantId.getSelectedParticipantId(batchedStoreListener);
        speakerId = speakerId.getSpeakerId(batchedStoreListener);
        const externalPipSelectedParticipant = batchedStoreListener(str[7]).getExternalPipSelectedParticipant(batchedStoreListener, selectedParticipantId1, speakerId);
        ({ selectedParticipantId, selectedParticipantStreamId } = externalPipSelectedParticipant);
        if (null != selectedParticipantId) {
          targetDimensions = targetDimensions.getTargetDimensions(selectedParticipantId1);
          ({ width, height } = targetDimensions);
          const obj4 = { id: selectedParticipantId, streamId: null, pipDimensions: null, surface: null };
          if (selectedParticipantStreamId == null) {
            selectedParticipantStreamId = null;
          }
          obj4.streamId = selectedParticipantStreamId;
          const size = { width, height };
          obj4.pipDimensions = size;
          obj4.surface = surface;
          targetDimensions(str[8]).setSelectedTile(obj4);
          const obj3 = targetDimensions(str[8]);
        } else {
          targetDimensions(str[8]).setSelectedTile(null);
          const obj2 = targetDimensions(str[8]);
        }
        const obj = batchedStoreListener(str[7]);
      }
    }
    const items = [channelId, speakerId];
    HermesBuiltin.arraySpread(batchedStoreListener(str[7]).EXTERNAL_PIP_SELECTED_PARTICIPANT_STORES, 2);
    batchedStoreListener = new batchedStoreListener(str[9]).BatchedStoreListener(items, update);
    batchedStoreListener.attach("useExternalPipSelectedTile");
    targetDimensions = targetDimensions.subscribeFromItem(update);
    update();
    return () => {
      batchedStoreListener.detach();
      targetDimensions();
    };
  }, items);
  const effect1 = noop.useEffect(() => () => closure_1_1(str[8]).setSelectedTile(null), []);
});