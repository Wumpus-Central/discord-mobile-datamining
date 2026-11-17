// === Module 20001: PlayableFrameBanner ===

// Module 20001 (PlayableFrameBanner)
import QuestTypes from "QuestTypes" /* 6965 */;
import AdCreativeType from "AdCreativeType" /* 6969 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8845 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 10615 */;
import noop from "module_19" /* 19 */;
import PlayableStore from "PlayableStore" /* 17732 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5310);
let closure_6 = createStyles.createStyles((bottom) => {
  const obj = { banner: { bottom } };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/PlayableFrameBanner.tsx");

export default function PlayableFrameBanner(frameId) {
  frameId = frameId.frameId;
  let stateFromStores;
  const tmp = stateFromStores;
  const tmp3 = closure_6(stateFromStores(1630)().bottom);
  const tmp4 = frameId;
  items = [PlayableStore];
  const items1 = [frameId];
  stateFromStores = frameId(504).useStateFromStores(items, () => PlayableStore.getPlayableForFrame(frameId), items1);
  const items2 = [stateFromStores];
  const callback = noop.useCallback(() => {
    if (null != stateFromStores) {
      const obj2 = { adContentId: stateFromStores.id, adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, cta: stateFromStores.cta };
      const obj3 = { content: QuestTypes.QuestContent.RUNNING_ACTIVITY, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
      const result = QuestPlatformUtils.openAdGameLinkDirectly(obj2, obj3);
    }
  }, items2);
  let tmp7 = null;
  if (null != stateFromStores) {
    let obj2 = { style: tmp3.banner, ctaInfo: null, onContainerPress: null, onButtonPress: null };
    const tmpResult = tmp(17623);
    obj2.ctaInfo = tmp4(17622).getAdvertiserCtaInfo(stateFromStores);
    obj2.onContainerPress = callback;
    obj2.onButtonPress = callback;
    tmp7 = <tmpResult style={tmp3.banner} ctaInfo={null} onContainerPress={null} onButtonPress={null} />;
    const tmp4Result = tmp4(17622);
  }
  return tmp7;
};