// === Module 17026: InviteActivityButton ===

// Module 17026 (InviteActivityButton)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import getCurrentUserPresenceActivityDefault from "getCurrentUserPresenceActivity" /* 11761 */;
import noop from "module_19" /* 19 */;
import LocalActivityStore from "LocalActivityStore" /* 11457 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5279 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/InviteActivityButton.tsx");

export default noop.memo(function InviteActivityButton(applicationId) {
  applicationId = applicationId.applicationId;
  let obj = applicationId(504);
  const items = [LocalActivityStore, SelfPresenceStore];
  const items1 = [applicationId];
  const stateFromStores = obj.useStateFromStores(items, () => getCurrentUserPresenceActivityDefault(LocalActivityStore, SelfPresenceStore, applicationId), items1);
  let tmp4 = null;
  if (null != stateFromStores) {
    obj = {
      onPress() {
          const obj = { activity: stateFromStores };
          obj.openLazy(asyncRequireImpl(17027, dependencyMap.paths), "ActivityInviteSheet-" + stateFromStores.session_id, obj);
        },
      icon: stateFromStores(10031),
      text: null,
      accessibilityLabel: null,
      variant: "secondary-overlay",
      size: "sm",
      shrink: true,
      maxFontSizeMultiplier: 1
    };
    const intl = tmp(1114).intl;
    obj.text = intl.string(tmp(1114).t["OzOM/q"]);
    const intl2 = tmp(1114).intl;
    obj.accessibilityLabel = intl2.string(tmp(1114).t["OzOM/q"]);
    tmp4 = jsx(tmp(4975).Button, {
      onPress() {
          const obj = { activity: stateFromStores };
          obj.openLazy(asyncRequireImpl(17027, dependencyMap.paths), "ActivityInviteSheet-" + stateFromStores.session_id, obj);
        },
      icon: stateFromStores(10031),
      text: null,
      accessibilityLabel: null,
      variant: "secondary-overlay",
      size: "sm",
      shrink: true,
      maxFontSizeMultiplier: 1
    });
  }
  return tmp4;
});