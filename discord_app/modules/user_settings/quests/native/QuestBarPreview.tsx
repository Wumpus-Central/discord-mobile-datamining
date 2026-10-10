// discord_app/modules/user_settings/quests/native/QuestBarPreview.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import QuestDockExternalCoordinationContext from "../../../quests/native/QuestDock/QuestDockExternalCoordinationContext.tsx";
import QuestDockVisibilityContextDefault from "../../../quests/native/QuestDock/QuestDockVisibilityContext.tsx";
import QuestDock from "../../../quests/native/QuestDock/QuestDock.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const value = { isRendered: true, isVisibleToUser: true };
const createStyles = fn(5092);
let obj2 = {
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
obj2.questDockContainer = rect;
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestBarPreview.tsx");

export const QuestBarPreview = ReactCompilerGating.isReactCompilerEnabled()
  ? function QuestBarPreview(quest) {
      const cResult = c.c(8);
      quest = quest.quest;
      let overlay = closure_6();
      let tmp4 = null;
      if (null != quest) {
        tmp4 = null;
        if (quest.isVisible) {
          if (cResult[0] !== quest) {
            const obj2 = { children: null };
            const obj3 = { value, children: null };
            const obj4 = { quest };
            obj3.children = jsx(QuestDock.QuestDockQuestContent, { quest });
            obj2.children = jsx(QuestDockVisibilityContextDefault.Provider, { value, children: null });
            const tmp9 = jsx(QuestDockExternalCoordinationContext.QuestDockExternalCoordinationContextProvider, {
              children: null,
            });
            cResult[0] = quest;
            cResult[1] = tmp9;
            let tmp5 = tmp9;
          } else {
            tmp5 = cResult[1];
          }
          if (cResult[2] === overlay.questDockContainer) {
            if (cResult[3] === tmp5) {
              let tmp10 = cResult[4];
            }
            if (cResult[5] === overlay.overlay) {
            }
            const obj5 = { style: overlay.overlay, children: tmp10 };
            const tmp17 = <View style={overlay.overlay}>{tmp10}</View>;
            overlay = overlay.overlay;
            cResult[5] = overlay;
            cResult[6] = tmp10;
            cResult[7] = tmp17;
          }
          const obj6 = { style: overlay.questDockContainer, children: tmp5 };
          const tmp13 = <View style={overlay.questDockContainer}>{tmp5}</View>;
          cResult[2] = overlay.questDockContainer;
          cResult[3] = tmp5;
          cResult[4] = tmp13;
          tmp10 = tmp13;
        }
      }
      return tmp4;
    }
  : function QuestBarPreview(quest) {
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
          obj2.children = jsx(QuestDockExternalCoordinationContext.QuestDockExternalCoordinationContextProvider, {
            children: null,
          });
          obj.children = <View style={tmp.questDockContainer}>{null}</View>;
          tmp2 = <View style={tmp.overlay}>{null}</View>;
        }
      }
      return tmp2;
    };
