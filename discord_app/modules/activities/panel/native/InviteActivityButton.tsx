// === Module 19064: InviteActivityButton ===

// Module 19064 (InviteActivityButton)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import getCurrentUserPresenceActivityDefault from "getCurrentUserPresenceActivity" /* 12066 */;
import noop from "module_19" /* 19 */;
import LocalActivityStore from "LocalActivityStore" /* 6802 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6801 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/InviteActivityButton.tsx");

export default noop.memo(function InviteActivityButton(applicationId) {
  applicationId = applicationId.applicationId;
  items = [LocalActivityStore, SelfPresenceStore];
  const items1 = [applicationId];
  const stateFromStores = applicationId(504).useStateFromStores(items, () => getCurrentUserPresenceActivityDefault(LocalActivityStore, SelfPresenceStore, applicationId), items1);
  let tmp4 = null;
  if (null != stateFromStores) {
    const obj2 = {
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.openLazy(asyncRequireImpl(19065, dependencyMap.paths), "ActivityInviteSheet-" + stateFromStores.session_id, { activity: stateFromStores });
        },
      icon: stateFromStores(10935),
      text: null,
      accessibilityLabel: null,
      variant: "secondary-overlay",
      size: "sm",
      shrink: true,
      maxFontSizeMultiplier: 1
    };
    const intl = tmp(1112).intl;
    obj2.text = intl.string(tmp(1112).t["OzOM/q"]);
    const intl2 = tmp(1112).intl;
    obj2.accessibilityLabel = intl2.string(tmp(1112).t["OzOM/q"]);
    tmp4 = jsx(tmp(5392).Button, {
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.openLazy(asyncRequireImpl(19065, dependencyMap.paths), "ActivityInviteSheet-" + stateFromStores.session_id, { activity: stateFromStores });
        },
      icon: stateFromStores(10935),
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