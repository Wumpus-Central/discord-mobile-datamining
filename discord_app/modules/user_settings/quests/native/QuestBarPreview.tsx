import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_5 = { isRendered: true, isVisibleToUser: true };
createCacheKey = { overlay: { position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 1000, elevation: 1000, pointerEvents: "box-none" }, questDockContainer: null };
createCacheKey = { position: "absolute", bottom: 0, left: require("Themes").space.PX_16, right: require("Themes").space.PX_16, zIndex: 1001, elevation: 1001 };
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/quests/native/QuestBarPreview.tsx");

export const QuestBarPreview = function QuestBarPreview(quest) {
  quest = quest.quest;
  const tmp = createCacheKey();
  let tmp2 = null;
  if (null != quest) {
    tmp2 = null;
    if (quest.isVisible) {
      let obj = { style: null, children: null };
      obj[0] = tmp.overlay;
      obj = { style: null, children: null };
      obj[0] = tmp.questDockContainer;
      obj = { children: null };
      const obj1 = { value: null, children: null };
      obj1[0] = closure_5;
      const obj2 = { quest: null, children: null };
      obj2[0] = quest;
      obj2[1] = jsx(require(14325) /* QuestDockWithGestureAnimation */.QuestDockWithEntranceAnimation, {});
      obj1[1] = jsx(require(14324) /* getDeliveredQuest */.QuestDockQuestProvider, { quest: null, children: null });
      obj[0] = jsx(importDefault(14323).Provider, { value: null, children: null });
      obj[1] = jsx(require(14245) /* QuestDockMode */.QuestDockExternalCoordinationContextProvider, { children: null });
      obj[1] = <View>{null}</View>;
      tmp2 = <View>{null}</View>;
    }
  }
  return tmp2;
};