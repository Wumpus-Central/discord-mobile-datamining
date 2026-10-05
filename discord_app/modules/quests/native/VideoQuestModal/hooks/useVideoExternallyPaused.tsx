// === Module 14960: useVideoExternallyPaused ===

// Module 14960 (useVideoExternallyPaused)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4736 */;
import useAlertStore from "useAlertStore" /* 5709 */;
import ContextMenuState from "ContextMenuState" /* 7580 */;
import VideoQuestUtils from "VideoQuestUtils" /* 10940 */;
import ActionSheetStore from "ActionSheetStore" /* 4561 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((questId, arg1) => {
  let key;
  let tmp6;
  let tmp8;
  let tmp9;
  const obj = react;
  const cResult = obj.c(11);
  const obj2 = ContextMenuState;
  const tmp4 = null != obj2.useActiveContextMenu();
  const obj3 = NavigationRouteUtils;
  const openModalKey = obj3.useOpenModalKey();
  if (cResult[0] !== questId) {
    const tmpResult = VideoQuestUtils;
    const videoQuestModalKey = tmpResult.getVideoQuestModalKey(questId);
    cResult[0] = questId;
    cResult[1] = videoQuestModalKey;
    tmp6 = videoQuestModalKey;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ActionSheetStore];
    const fn = function v() {
      return key.getKey();
    };
    cResult[2] = items;
    cResult[3] = fn;
    tmp9 = fn;
    tmp8 = items;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult4 = get_initialized;
  const tmp11 = null != tmpResult4.useStateFromStores(tmp8, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor(alerts) {
        return alerts.alerts;
      }
    }
    cResult[4] = M;
  } else {
    class M {
      constructor(alerts) {
        return alerts.alerts;
      }
    }
  }
  const tmpResult5 = useAlertStore;
  const tmp14 = tmpResult5.useAlertStore(M).length > 0;
  if (cResult[5] === tmp11) {
    class M {
      constructor(alerts) {
        return alerts.alerts;
      }
    }
  }
  const tmpResult6 = PlatformUtils;
  cResult[5] = tmp11;
  cResult[6] = tmp14;
  cResult[7] = tmp4;
  cResult[8] = openModalKey !== tmp6;
  cResult[9] = arg1;
  cResult[10] = tmpResult6.isIOS() && arg1 || tmp11 || tmp4 || openModalKey !== tmp6 || tmp14;
  tmpResult6.isIOS() && arg1 || tmp11 || tmp4 || openModalKey !== tmp6 || tmp14;
}) : ((questId, arg1) => {
  let key;
  const obj = ContextMenuState;
  const activeContextMenu = obj.useActiveContextMenu();
  const obj2 = NavigationRouteUtils;
  const openModalKey = obj2.useOpenModalKey();
  const obj3 = VideoQuestUtils;
  const videoQuestModalKey = obj3.getVideoQuestModalKey(questId);
  const items = [ActionSheetStore];
  const obj4 = get_initialized;
  const stateFromStores = obj4.useStateFromStores(items, () => key.getKey());
  const obj5 = useAlertStore;
  const tmp5 = obj5.useAlertStore((alerts) => alerts.alerts).length > 0;
  const obj6 = PlatformUtils;
  const tmp6 = obj6.isIOS() && arg1 || null != stateFromStores || null != activeContextMenu || openModalKey !== videoQuestModalKey || tmp5;
  return tmp6;
});
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoExternallyPaused.tsx");

export const useVideoExternallyPaused = tmp2;