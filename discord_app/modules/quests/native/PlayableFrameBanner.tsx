// === Module 19268: PlayableFrameBanner ===

// Module 19268 (PlayableFrameBanner)
import nativeDefault from "native" /* 575 */;
import QuestTypes from "QuestTypes" /* 6440 */;
import AdCreativeType from "AdCreativeType" /* 6444 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8311 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 9875 */;
import noop from "module_19" /* 19 */;
import PlayableStore from "PlayableStore" /* 16525 */;

require = fn;
const jsx = fn(21).jsx;
const PX_32 = nativeDefault.space.PX_32;
const createStyles = fn(4792);
let closure_7 = createStyles.createStyles((arg0) => {
  const obj = { banner: { bottom: Math.max(arg0, PX_32), paddingBottom: nativeDefault.space.PX_0, paddingHorizontal: nativeDefault.space.PX_24 } };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/PlayableFrameBanner.tsx");

export default function PlayableFrameBanner(frameId) {
  frameId = frameId.frameId;
  let stateFromStores;
  let getQuestImpressionId;
  const tmp = stateFromStores;
  const tmp3 = closure_7(stateFromStores(getQuestImpressionId[5])().bottom);
  const tmp4 = frameId;
  items = [PlayableStore];
  const items1 = [frameId];
  stateFromStores = frameId(getQuestImpressionId[6]).useStateFromStores(items, () => PlayableStore.getPlayableForFrame(frameId), items1);
  let obj = frameId(getQuestImpressionId[6]);
  getQuestImpressionId = frameId(getQuestImpressionId[7]).useGetQuestImpressionId();
  const items2 = [stateFromStores, getQuestImpressionId];
  const callback = noop.useCallback(() => {
    if (null != stateFromStores) {
      const obj2 = { adContentId: stateFromStores.id, adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, cta: stateFromStores.cta };
      const obj3 = { content: QuestTypes.QuestContent.RUNNING_ACTIVITY, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
      const result = QuestPlatformUtils.openAdGameLinkDirectly(obj2, obj3);
    }
  }, items2);
  let tmp8 = null;
  if (null != stateFromStores) {
    let obj3 = { style: tmp3.banner, ctaInfo: null, onContainerPress: null, onButtonPress: null };
    const tmpResult = tmp(tmp2[12]);
    obj3.ctaInfo = tmp4(tmp2[13]).getAdvertiserCtaInfo(stateFromStores);
    obj3.onContainerPress = callback;
    obj3.onButtonPress = callback;
    tmp8 = <tmpResult style={tmp3.banner} ctaInfo={null} onContainerPress={null} onButtonPress={null} />;
    const tmp4Result = tmp4(tmp2[13]);
  }
  return tmp8;
};