// === Module 19431: PlayableFrameImpressionTracker ===

// Module 19431 (PlayableFrameImpressionTracker)
import noop from "module_19" /* 19 */;
import PlayableStore from "PlayableStore" /* 16675 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/PlayableFrameImpressionTracker.tsx");

export default function PlayableFrameImpressionTracker(frameId) {
  frameId = frameId.frameId;
  const children = frameId.children;
  items = [PlayableStore];
  const items1 = [frameId];
  const stateFromStores = frameId(children[3]).useStateFromStores(items, () => PlayableStore.getPlayableForFrame(frameId), items1);
  let tmp4 = null;
  if (null != stateFromStores) {
    const obj2 = {
      adContentId: stateFromStores.id,
      adCreativeType: tmp(tmp2[5]).AdCreativeType.PLAYABLE,
      questContent: tmp(tmp2[6]).QuestContent.PLAYABLE_SHEET_MOBILE,
      sourceQuestContent: tmp(tmp2[6]).QuestContent.QUEST_BAR_MOBILE,
      overrideVisibility: true,
      children() {
          return children;
        }
    };
    tmp4 = jsx(tmp(tmp2[4]).QuestContentImpressionTrackerNative, {
      adContentId: stateFromStores.id,
      adCreativeType: tmp(tmp2[5]).AdCreativeType.PLAYABLE,
      questContent: tmp(tmp2[6]).QuestContent.PLAYABLE_SHEET_MOBILE,
      sourceQuestContent: tmp(tmp2[6]).QuestContent.QUEST_BAR_MOBILE,
      overrideVisibility: true,
      children() {
          return children;
        }
    });
  }
  return tmp4;
};