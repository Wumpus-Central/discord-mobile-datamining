// discord_app/modules/user_settings/quests/native/QuestBarPreview.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import QuestDockExternalCoordinationContext from "../../../quests/native/QuestDock/QuestDockExternalCoordinationContext.tsx";
import QuestDockVisibilityContextDefault from "../../../quests/native/QuestDock/QuestDockVisibilityContext.tsx";
import QuestDock from "../../../quests/native/QuestDock/QuestDock.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const value = { isRendered: true, isVisibleToUser: true };
fn(4560);
const createStyles = {
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
const rect = {
  position: "absolute",
  bottom: 0,
  left: nativeDefault.space.PX_16,
  right: nativeDefault.space.PX_16,
  zIndex: 1001,
  elevation: 1001,
};
createStyles.questDockContainer = rect;
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestBarPreview.tsx");

export const QuestBarPreview = function QuestBarPreview(quest) {
  quest = quest.quest;
  const tmp = closure_6();
  let tmp2 = null;
  if (null != quest) {
    tmp2 = null;
    if (quest.isVisible) {
      let obj = { style: tmp.overlay, children: null };
      obj = { style: tmp.questDockContainer, children: null };
      obj = { children: null };
      const obj1 = { value, children: null };
      const obj2 = { quest };
      obj1.children = jsx(QuestDock.QuestDockQuestContent, { quest });
      obj.children = jsx(QuestDockVisibilityContextDefault.Provider, { value, children: null });
      obj.children = jsx(QuestDockExternalCoordinationContext.QuestDockExternalCoordinationContextProvider, {
        children: null,
      });
      obj.children = <View>{null}</View>;
      tmp2 = <View>{null}</View>;
    }
  }
  return tmp2;
};
