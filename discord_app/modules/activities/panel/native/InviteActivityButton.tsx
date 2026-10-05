// === Module 17179: InviteActivityButton ===

// Module 17179 (InviteActivityButton)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import getCurrentUserPresenceActivityDefault from "getCurrentUserPresenceActivity" /* 11393 */;
import react from "react" /* 19 */;
import LocalActivityStore from "LocalActivityStore" /* 11116 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5438 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let applicationId;

const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((applicationId) => {
  let first;
  let tmp7;
  let tmp8;
  const tmp = applicationId;
  let obj = applicationId(576);
  const cResult = obj.c(10);
  applicationId = applicationId.applicationId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [LocalActivityStore, SelfPresenceStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== applicationId) {
    const fn = function c() {
      return getCurrentUserPresenceActivityDefault(LocalActivityStore, SelfPresenceStore, applicationId);
    };
    const items1 = [applicationId];
    cResult[1] = applicationId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  let tmp10 = null;
  if (null != stateFromStores) {
    let tmp11;
    let tmp13;
    let tmp12;
    let tmp16;
    if (cResult[4] !== stateFromStores) {
      const fn2 = function y() {
        const openLazy = ActionSheetActionCreatorsDefault.openLazy;
        ActionSheetActionCreatorsDefault;
        const obj = { activity: stateFromStores };
        const tmp2 = asyncRequire(17180, dependencyMap.paths);
        openLazy(tmp2, "ActivityInviteSheet-" + stateFromStores.session_id, obj);
      };
      cResult[4] = stateFromStores;
      cResult[5] = fn2;
      tmp11 = fn2;
    } else {
      tmp11 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t["OzOM/q"]);
      const intl2 = tmp(1126).intl;
      const stringResult1 = intl2.string(tmp(1126).t["OzOM/q"]);
      cResult[6] = stringResult;
      cResult[7] = stringResult1;
      tmp13 = stringResult1;
      tmp12 = stringResult;
    } else {
      tmp12 = cResult[6];
      tmp13 = cResult[7];
    }
    if (cResult[8] !== tmp11) {
      const Button = tmp(5594).Button;
      const tmp19 = <Button onPress={tmp11} icon={stateFromStores(9715)} text={tmp12} accessibilityLabel={tmp13} variant="secondary-overlay" size="sm" shrink maxFontSizeMultiplier={1} />;
      cResult[8] = tmp11;
      cResult[9] = tmp19;
      tmp16 = tmp19;
    } else {
      tmp16 = cResult[9];
    }
    tmp10 = tmp16;
  }
  return tmp10;
}) : ((applicationId) => {
  applicationId = applicationId.applicationId;
  const tmp = applicationId;
  let obj = applicationId(504);
  const items = [LocalActivityStore, SelfPresenceStore];
  const items1 = [applicationId];
  const stateFromStores = obj.useStateFromStores(items, () => getCurrentUserPresenceActivityDefault(LocalActivityStore, SelfPresenceStore, applicationId), items1);
  let tmp4 = null;
  if (null != stateFromStores) {
    const Button = tmp(5594).Button;
    const intl = tmp(1126).intl;
    const intl2 = tmp(1126).intl;
    tmp4 = <Button onPress={function onPress() {
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      ActionSheetActionCreatorsDefault;
      const obj = { activity: stateFromStores };
      const tmp2 = asyncRequire(17180, dependencyMap.paths);
      openLazy(tmp2, "ActivityInviteSheet-" + stateFromStores.session_id, obj);
    }} icon={stateFromStores(9715)} text={intl.string(tmp(1126).t["OzOM/q"])} accessibilityLabel={intl2.string(tmp(1126).t["OzOM/q"])} variant="secondary-overlay" size="sm" shrink maxFontSizeMultiplier={1} />;
  }
  return tmp4;
}));
const result = size.fileFinishedImporting("modules/activities/panel/native/InviteActivityButton.tsx");

export default memoResult;