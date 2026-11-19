// discord_app/modules/quests/native/PlayableFrameImpressionTracker.tsx
import noop from "../../../../_runtime/metro/00019__.js";
import PlayableStore from "PlayableStore.tsx";

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/PlayableFrameImpressionTracker.tsx");

export default function PlayableFrameImpressionTracker(frameId) {
  frameId = frameId.frameId;
  const children = frameId.children;
  items = [PlayableStore];
  const items1 = [frameId];
  const stateFromStores = frameId(children[3]).useStateFromStores(
    items,
    () => PlayableStore.getPlayableForFrame(frameId),
    items1,
  );
  let tmp4 = null;
  if (null != stateFromStores) {
    const obj2 = {
      adContentId: stateFromStores.id,
      adCreativeType: tmp(tmp2[5]).AdCreativeType.PLAYABLE,
      questContent: tmp(tmp2[6]).QuestContent.RUNNING_ACTIVITY,
      sourceQuestContent: tmp(tmp2[6]).QuestContent.QUEST_BAR_MOBILE,
      overrideVisibility: true,
      children() {
        return children;
      },
    };
    tmp4 = jsx(tmp(tmp2[4]).QuestContentImpressionTrackerNative, {
      adContentId: stateFromStores.id,
      adCreativeType: tmp(tmp2[5]).AdCreativeType.PLAYABLE,
      questContent: tmp(tmp2[6]).QuestContent.RUNNING_ACTIVITY,
      sourceQuestContent: tmp(tmp2[6]).QuestContent.QUEST_BAR_MOBILE,
      overrideVisibility: true,
      children() {
        return children;
      },
    });
  }
  return tmp4;
}
