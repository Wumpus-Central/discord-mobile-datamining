// === Module 14712: QuestBarPreview ===

// Module 14712 (QuestBarPreview)
import nativeDefault from "native" /* 576 */;
import QuestDockExternalCoordinationContext from "QuestDockExternalCoordinationContext" /* 14628 */;
import QuestDockVisibilityContextDefault from "QuestDockVisibilityContext" /* 14713 */;
import QuestDock from "QuestDock" /* 14714 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const value = { isRendered: true, isVisibleToUser: true };
const createStyles = fn(4836);
let obj2 = { overlay: { position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 1000, elevation: 1000, pointerEvents: "box-none" }, questDockContainer: null };
const rect = { position: "absolute", bottom: 0, left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, zIndex: 1001, elevation: 1001 };
obj2.questDockContainer = rect;
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestBarPreview.tsx");

export const QuestBarPreview = function QuestBarPreview(quest) {
  quest = quest.quest;
  const tmp = closure_6();
  let tmp2 = null;
  if (null != quest) {
    tmp2 = null;
    if (quest.isVisible) {
      const obj = { style: tmp.overlay, children: null };
      const obj2 = { style: tmp.questDockContainer, children: null };
      const obj3 = { children: null };
      const obj4 = { value, children: null };
      const obj5 = { quest };
      obj4.children = jsx(QuestDock.QuestDockQuestContent, { quest });
      obj3.children = jsx(QuestDockVisibilityContextDefault.Provider, { value, children: null });
      obj2.children = jsx(QuestDockExternalCoordinationContext.QuestDockExternalCoordinationContextProvider, { children: null });
      obj.children = <View style={tmp.questDockContainer}>{null}</View>;
      tmp2 = <View style={tmp.overlay}>{null}</View>;
    }
  }
  return tmp2;
};