// discord_app/modules/activities/panel/native/InviteActivityButton.tsx
import asyncRequireImpl from "../../../../../_runtime/01981_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import getCurrentUserPresenceActivityDefault from "../../utils/getCurrentUserPresenceActivity.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import LocalActivityStore from "../../../../stores/LocalActivityStore.tsx";
import SelfPresenceStore from "../../../../stores/SelfPresenceStore.tsx";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/InviteActivityButton.tsx");

export default noop.memo(function InviteActivityButton(applicationId) {
  applicationId = applicationId.applicationId;
  const items = [LocalActivityStore, SelfPresenceStore];
  const items1 = [applicationId];
  const stateFromStores = applicationId(504).useStateFromStores(
    items,
    () => getCurrentUserPresenceActivityDefault(LocalActivityStore, SelfPresenceStore, applicationId),
    items1,
  );
  let tmp4 = null;
  if (null != stateFromStores) {
    const obj2 = {
      onPress() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.openLazy(
          asyncRequireImpl(16847, dependencyMap.paths),
          "ActivityInviteSheet-" + stateFromStores.session_id,
          { activity: stateFromStores },
        );
      },
      icon: stateFromStores(9491),
      text: null,
      accessibilityLabel: null,
      variant: "secondary-overlay",
      size: "sm",
      shrink: true,
      maxFontSizeMultiplier: 1,
    };
    const intl = tmp(1115).intl;
    obj2.text = intl.string(tmp(1115).t["OzOM/q"]);
    const intl2 = tmp(1115).intl;
    obj2.accessibilityLabel = intl2.string(tmp(1115).t["OzOM/q"]);
    tmp4 = jsx(tmp(5281).Button, {
      onPress() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.openLazy(
          asyncRequireImpl(16847, dependencyMap.paths),
          "ActivityInviteSheet-" + stateFromStores.session_id,
          { activity: stateFromStores },
        );
      },
      icon: stateFromStores(9491),
      text: null,
      accessibilityLabel: null,
      variant: "secondary-overlay",
      size: "sm",
      shrink: true,
      maxFontSizeMultiplier: 1,
    });
  }
  return tmp4;
});
