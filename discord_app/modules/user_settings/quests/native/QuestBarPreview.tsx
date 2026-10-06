// === Module 14998: QuestBarPreview ===

// Module 14998 (QuestBarPreview)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import QuestDockExternalCoordinationContext from "QuestDockExternalCoordinationContext" /* 14916 */;
import reactDefault from "react" /* 14999 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let quest;

let rect;
const View = react_native.View;
const jsx = Fragment.jsx;
const value = { isRendered: true, isVisibleToUser: true };
let obj = { overlay: { position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 1000, elevation: 1000, pointerEvents: "box-none" }, questDockContainer: rect };
rect = { position: "absolute", bottom: 0, left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, zIndex: 1001, elevation: 1001 };
let closure_6 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((quest) => {
  const obj = react2;
  const cResult = obj.c(8);
  quest = quest.quest;
  const isVisible = quest.isVisible;
  const tmp4 = closure_6();
  let tmp5 = null;
  if (null != quest) {
    tmp5 = null;
    if (isVisible) {
      let tmp6;
      if (cResult[0] !== quest) {
        const QuestDockExternalCoordinationContextProvider = QuestDockExternalCoordinationContext.QuestDockExternalCoordinationContextProvider;
        const Provider = reactDefault.Provider;
        const tmp10 = <QuestDockExternalCoordinationContextProvider>{null}</QuestDockExternalCoordinationContextProvider>;
        cResult[0] = quest;
        cResult[1] = tmp10;
        tmp6 = tmp10;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === tmp4.questDockContainer) {
        let tmp11;
        if (cResult[3] === tmp6) {
          tmp11 = cResult[4];
        }
        if (cResult[5] === tmp4.overlay) {
          let tmp15;
          if (cResult[6] === tmp11) {
            tmp15 = cResult[7];
          }
          tmp5 = tmp15;
        }
        const tmp18 = <View style={tmp4.overlay}>{tmp11}</View>;
        cResult[5] = tmp4.overlay;
        cResult[6] = tmp11;
        cResult[7] = tmp18;
        tmp15 = tmp18;
      }
      const tmp14 = <View style={tmp4.questDockContainer}>{tmp6}</View>;
      cResult[2] = tmp4.questDockContainer;
      cResult[3] = tmp6;
      cResult[4] = tmp14;
      tmp11 = tmp14;
    }
  }
  return tmp5;
}) : ((quest) => {
  quest = quest.quest;
  const isVisible = quest.isVisible;
  const tmp = closure_6();
  let tmp2 = null;
  if (null != quest) {
    tmp2 = null;
    if (isVisible) {
      const QuestDockExternalCoordinationContextProvider = QuestDockExternalCoordinationContext.QuestDockExternalCoordinationContextProvider;
      const Provider = reactDefault.Provider;
      tmp2 = <View style={tmp.overlay}>{null}</View>;
    }
  }
  return tmp2;
});
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestBarPreview.tsx");

export const QuestBarPreview = tmp3;