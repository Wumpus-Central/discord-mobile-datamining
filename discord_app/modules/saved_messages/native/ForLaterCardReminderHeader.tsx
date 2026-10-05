// === Module 13131: ForLaterCardReminderHeader ===

// Module 13131 (ForLaterCardReminderHeader)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import ClockIcon from "ClockIcon" /* 4849 */;
import SavedMessageUtils from "SavedMessageUtils" /* 11341 */;
import ForLaterCardStatusHeader2 from "ForLaterCardStatusHeader" /* 11847 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let actions;
  let dueInText;
  let isOverdue;
  let savedMessage;
  let throttledNow;
  const obj = react;
  const cResult = obj.c(7);
  ({ savedMessage, throttledNow, actions } = arg0);
  let dueAt;
  if (savedMessage != null) {
    dueAt = savedMessage.saveData.dueAt;
  }
  if (cResult[0] === dueAt) {
    let tmp5;
    if (cResult[1] === throttledNow) {
      tmp5 = cResult[2];
    }
    const tmpResult = SavedMessageUtils;
    const dueInString = tmpResult.useDueInString(tmp5);
    ({ dueInText, isOverdue } = dueInString);
    let tmp7 = null;
    if (null != savedMessage.saveData.dueAt) {
      if (cResult[3] === actions) {
        if (cResult[4] === dueInText) {
          let tmp8;
          if (cResult[5] === isOverdue) {
            tmp8 = cResult[6];
          }
          tmp7 = tmp8;
        }
      }
      const ForLaterCardStatusHeader = ForLaterCardStatusHeader2.ForLaterCardStatusHeader;
      const tmp10 = <ForLaterCardStatusHeader IconComponent={ClockIcon.ClockIcon} label={dueInText} isCritical={isOverdue} actions={actions} />;
      cResult[3] = actions;
      cResult[4] = dueInText;
      cResult[5] = isOverdue;
      cResult[6] = tmp10;
      tmp8 = tmp10;
    }
    return tmp7;
  }
  const obj3 = { dueAt, now: throttledNow, type: SavedMessageUtils.DueInStringTypes.SHORT };
  cResult[0] = dueAt;
  cResult[1] = throttledNow;
  cResult[2] = obj3;
  tmp5 = obj3;
}) : ((savedMessage) => {
  let actions;
  let throttledNow;
  savedMessage = savedMessage.savedMessage;
  ({ throttledNow, actions } = savedMessage);
  let dueAt;
  const useDueInString = SavedMessageUtils.useDueInString;
  SavedMessageUtils;
  if (savedMessage != null) {
    dueAt = savedMessage.saveData.dueAt;
  }
  const obj = { dueAt, now: throttledNow, type: SavedMessageUtils.DueInStringTypes.SHORT };
  const dueInString = useDueInString(obj);
  let tmp8 = null;
  if (null != savedMessage.saveData.dueAt) {
    const ForLaterCardStatusHeader = ForLaterCardStatusHeader2.ForLaterCardStatusHeader;
    tmp8 = <ForLaterCardStatusHeader IconComponent={ClockIcon.ClockIcon} label={tmp6} isCritical={tmp7} actions={actions} />;
  }
  return tmp8;
});
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterCardReminderHeader.tsx");

export const ForLaterCardReminderHeader = tmp2;