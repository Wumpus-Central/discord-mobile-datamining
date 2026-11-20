// === Module 10947: StageChannelListStore ===

// Module 10947 (StageChannelListStore)
import _mod4709 from "module_4709" /* 4709 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const identity = fn(1257);
let closure_4 = identity.createWithEqualityFn((arg0) => {
  closure_0 = arg0;
  return {
    showActiveSpeakerPill: false,
    setShowActiveSpeakerPill(showActiveSpeakerPill) {
      return showActiveSpeakerPill(1262).batchUpdates(() => showActiveSpeakerPill({ showActiveSpeakerPill }));
    },
    listRef: null,
    setListRef(listRef) {
      return listRef(1262).batchUpdates(() => listRef({ listRef }));
    }
  };
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/StageChannelListStore.tsx");

export function useActiveSpeakerPillScrollHandler() {
  const tmp = _slicedToArray(closure_4((arg0) => {
    items = [, ];
    ({ listRef: arr[0], setListRef: arr[1] } = arg0);
    return items;
  }, _mod4709.shallow), 2);
  const first = tmp[0];
  closure_1 = tmp3;
  items = [tmp[1]];
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
}
export function useActiveSpeakerPillState() {
  return closure_4((arg0) => {
    items = [, ];
    ({ showActiveSpeakerPill: arr[0], setShowActiveSpeakerPill: arr[1] } = arg0);
    return items;
  }, _mod4709.shallow);
}