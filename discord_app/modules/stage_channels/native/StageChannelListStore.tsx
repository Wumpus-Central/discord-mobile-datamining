// === Module 10045: StageChannelListStore ===

// Module 10045 (StageChannelListStore)
import _mod4184 from "module_4184" /* 4184 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const identity = fn(1244);
let closure_4 = identity.createWithEqualityFn((arg0) => {
  closure_0 = arg0;
  return {
    showActiveSpeakerPill: false,
    setShowActiveSpeakerPill(showActiveSpeakerPill) {
      return showActiveSpeakerPill(1249).batchUpdates(() => showActiveSpeakerPill({ showActiveSpeakerPill }));
    },
    listRef: null,
    setListRef(listRef) {
      return listRef(1249).batchUpdates(() => listRef({ listRef }));
    }
  };
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/StageChannelListStore.tsx");

export const useActiveSpeakerPillScrollHandler = function useActiveSpeakerPillScrollHandler() {
  const tmp = _slicedToArray(closure_4((arg0) => {
    const items = [, ];
    ({ listRef: arr[0], setListRef: arr[1] } = arg0);
    return items;
  }, _mod4184.shallow), 2);
  const first = tmp[0];
  closure_1 = tmp3;
  let items = [tmp[1]];
  const items1 = [
    noop.useCallback((arg0) => {
      closure_1(arg0);
    }, items),

  ];
  const items2 = [first];
  items1[1] = noop.useCallback(() => {
    if (first != null) {
      first.scrollToLocation({ section: 0, item: 0, animated: true });
    }
  }, items2);
  return items1;
};
export const useActiveSpeakerPillState = function useActiveSpeakerPillState() {
  return closure_4((arg0) => {
    const items = [, ];
    ({ showActiveSpeakerPill: arr[0], setShowActiveSpeakerPill: arr[1] } = arg0);
    return items;
  }, _mod4184.shallow);
};