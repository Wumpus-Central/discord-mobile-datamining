// discord_app/modules/quests/native/PlayableFrameBanner.tsx
import QuestTypes from "../QuestTypes.tsx";
import AdCreativeType from "../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import AnalyticsTypes from "../lib/analytics/AnalyticsTypes.tsx";
import QuestPlatformUtils from "../utils/QuestPlatformUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import PlayableStore from "PlayableStore.tsx";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4823);
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
      const obj2 = {
        adContentId: stateFromStores.id,
        adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE,
        cta: stateFromStores.cta,
      };
      const obj3 = {
        content: QuestTypes.QuestContent.RUNNING_ACTIVITY,
        ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK,
        sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
      };
      const result = QuestPlatformUtils.openAdGameLinkDirectly(obj2, obj3);
    }
  }, items2);
  let tmp7 = null;
  if (null != stateFromStores) {
    let obj2 = { style: tmp3.banner, ctaInfo: null, onContainerPress: null, onButtonPress: null };
    const tmpResult = tmp(16425);
    obj2.ctaInfo = tmp4(16424).getAdvertiserCtaInfo(stateFromStores);
    obj2.onContainerPress = callback;
    obj2.onButtonPress = callback;
    tmp7 = <tmpResult style={tmp3.banner} ctaInfo={null} onContainerPress={null} onButtonPress={null} />;
    const tmp4Result = tmp4(16424);
  }
  return tmp7;
}
