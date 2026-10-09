// === Module 17641: InviteActivityButton ===

// Module 17641 (InviteActivityButton)
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import getCurrentUserPresenceActivityDefault from "getCurrentUserPresenceActivity" /* 10762 */;
import noop from "module_19" /* 19 */;
import LocalActivityStore from "LocalActivityStore" /* 10613 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5756 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/InviteActivityButton.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function InviteActivityButton(applicationId) {
  let Button = applicationId;
  let tmp = dependencyMap;
  const cResult = applicationId(576).c(10);
  applicationId = applicationId.applicationId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [LocalActivityStore, SelfPresenceStore];
    cResult[0] = items;
    let first = items;
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
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let obj = applicationId(576);
  const stateFromStores = Button(504).useStateFromStores(first, tmp6, tmp7);
  if (null == stateFromStores) {
    return null;
  } else {
    if (cResult[4] !== stateFromStores) {
      const fn2 = function y() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.openLazy(asyncRequireImpl(17642, dependencyMap.paths), "ActivityInviteSheet-" + stateFromStores.session_id, { activity: stateFromStores });
      };
      cResult[4] = stateFromStores;
      cResult[5] = fn2;
      let tmp9 = fn2;
    } else {
      tmp9 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = Button(1126).intl;
      const stringResult = intl.string(Button(1126).t["OzOM/q"]);
      const intl2 = Button(1126).intl;
      const stringResult1 = intl2.string(Button(1126).t["OzOM/q"]);
      cResult[6] = stringResult;
      cResult[7] = stringResult1;
      let tmp11 = stringResult1;
      let tmp10 = stringResult;
    } else {
      tmp10 = cResult[6];
      tmp11 = cResult[7];
    }
    if (cResult[8] !== tmp9) {
      Button = Button(5376).Button;
      const obj2 = { onPress: tmp9, icon: null, text: null, accessibilityLabel: null, variant: "secondary-overlay", size: "sm", shrink: true, maxFontSizeMultiplier: 1 };
      tmp = stateFromStores(10298);
      obj2.icon = tmp;
      obj2.text = tmp10;
      obj2.accessibilityLabel = tmp11;
      const tmp17 = <Button onPress={tmp9} icon={null} text={null} accessibilityLabel={null} variant="secondary-overlay" size="sm" shrink maxFontSizeMultiplier={1} />;
      cResult[8] = tmp9;
      cResult[9] = tmp17;
    }
  }
  const ButtonResult = Button(504);
}) : (function InviteActivityButton(applicationId) {
  applicationId = applicationId.applicationId;
  const items = [LocalActivityStore, SelfPresenceStore];
  const items1 = [applicationId];
  const stateFromStores = applicationId(504).useStateFromStores(items, () => getCurrentUserPresenceActivityDefault(LocalActivityStore, SelfPresenceStore, applicationId), items1);
  let tmp4 = null;
  if (null != stateFromStores) {
    const obj2 = {
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.openLazy(asyncRequireImpl(17642, dependencyMap.paths), "ActivityInviteSheet-" + stateFromStores.session_id, { activity: stateFromStores });
        },
      icon: stateFromStores(10298),
      text: null,
      accessibilityLabel: null,
      variant: "secondary-overlay",
      size: "sm",
      shrink: true,
      maxFontSizeMultiplier: 1
    };
    const intl = tmp(1126).intl;
    obj2.text = intl.string(tmp(1126).t["OzOM/q"]);
    const intl2 = tmp(1126).intl;
    obj2.accessibilityLabel = intl2.string(tmp(1126).t["OzOM/q"]);
    tmp4 = jsx(tmp(5376).Button, {
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.openLazy(asyncRequireImpl(17642, dependencyMap.paths), "ActivityInviteSheet-" + stateFromStores.session_id, { activity: stateFromStores });
        },
      icon: stateFromStores(10298),
      text: null,
      accessibilityLabel: null,
      variant: "secondary-overlay",
      size: "sm",
      shrink: true,
      maxFontSizeMultiplier: 1
    });
  }
  return tmp4;
}));