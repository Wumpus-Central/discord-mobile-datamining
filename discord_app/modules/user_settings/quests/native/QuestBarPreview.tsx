// discord_app/modules/user_settings/quests/native/QuestBarPreview.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import QuestDockMode from "../../../quests/native/QuestDock/QuestDockExternalCoordinationContext.tsx";
import contextDefault from "../../../quests/native/QuestDock/QuestDockVisibilityContext.tsx";
import QuestDockWithGestureAnimation from "../../../quests/native/QuestDock/QuestDock.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
let closure_5 = { isRendered: true, isVisibleToUser: true };
createCacheKey = {
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    elevation: 1000,
    pointerEvents: "box-none",
  },
  questDockContainer: null,
};
createCacheKey = {
  position: "absolute",
  bottom: 0,
  left: ThemesDefault.space.PX_16,
  right: ThemesDefault.space.PX_16,
  zIndex: 1001,
  elevation: 1001,
};
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
      const obj2 = { quest: null };
      obj2[0] = quest;
      obj1[1] = jsx(QuestDockWithGestureAnimation.QuestDockQuestContent, { quest: null });
      obj[0] = jsx(contextDefault.Provider, { value: null, children: null });
      obj[1] = jsx(QuestDockMode.QuestDockExternalCoordinationContextProvider, { children: null });
      obj[1] = <View>{null}</View>;
      tmp2 = <View>{null}</View>;
    }
  }
  return tmp2;
};
