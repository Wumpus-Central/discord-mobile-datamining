// === Module 14532: QuestBarPreview ===

// Module 14532 (QuestBarPreview)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import QuestDockMode from "QuestDockMode" /* 14451 */;
import getDeliveredQuest from "getDeliveredQuest" /* 14469 */;
import contextDefault from "context" /* 14533 */;
import QuestDockWithGestureAnimation from "QuestDockWithGestureAnimation" /* 14534 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
noopAll;
let closure_5 = { isRendered: true, isVisibleToUser: true };
createCacheKey = { overlay: { position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 1000, elevation: 1000, pointerEvents: "box-none" }, questDockContainer: null };
createCacheKey = { position: "absolute", bottom: 0, left: ThemesDefault.space.PX_16, right: ThemesDefault.space.PX_16, zIndex: 1001, elevation: 1001 };
createCacheKey[1] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/user_settings/quests/native/QuestBarPreview.tsx");

export const QuestBarPreview = function QuestBarPreview(quest) {
  quest = quest.quest;
  const tmp = callback();
  let tmp2 = null;
  if (null != quest) {
    tmp2 = null;
    if (quest.isVisible) {
      let obj = { style: null, children: null };
      obj[0] = tmp.overlay;
      obj = { style: null, children: null };
      obj[0] = tmp.questDockContainer;
      obj = { children: null };
      obj1 = { value: null, children: null };
      obj1[0] = closure_5;
      const obj2 = { quest: null, children: null };
      obj2[0] = quest;
      obj2[1] = jsx(QuestDockWithGestureAnimation.QuestDockWithEntranceAnimation, {});
      obj1[1] = jsx(getDeliveredQuest.QuestDockQuestProvider, { quest: null, children: null });
      obj[0] = jsx(contextDefault.Provider, { value: null, children: null });
      obj[1] = jsx(QuestDockMode.QuestDockExternalCoordinationContextProvider, { children: null });
      obj[1] = <View>{null}</View>;
      tmp2 = <View>{null}</View>;
    }
  }
  return tmp2;
};