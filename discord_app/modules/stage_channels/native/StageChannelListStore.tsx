// discord_app/modules/stage_channels/native/StageChannelListStore.tsx
import _mod4184 from "../../../../_runtime/metro/04184__.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

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
    },
  };
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/StageChannelListStore.tsx");

export const useActiveSpeakerPillScrollHandler = function useActiveSpeakerPillScrollHandler() {
  const tmp = _slicedToArray(
    closure_4((arg0) => {
      const items = [,];
      ({ listRef: arr[0], setListRef: arr[1] } = arg0);
      return items;
    }, _mod4184.shallow),
    2,
  );
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
    const items = [,];
    ({ showActiveSpeakerPill: arr[0], setShowActiveSpeakerPill: arr[1] } = arg0);
    return items;
  }, _mod4184.shallow);
};
