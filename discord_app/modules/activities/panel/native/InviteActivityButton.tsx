// discord_app/modules/activities/panel/native/InviteActivityButton.tsx
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
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
  let obj = applicationId(504);
  const items = [LocalActivityStore, SelfPresenceStore];
  const items1 = [applicationId];
  const stateFromStores = obj.useStateFromStores(
    items,
    () => getCurrentUserPresenceActivityDefault(LocalActivityStore, SelfPresenceStore, applicationId),
    items1,
  );
  let tmp4 = null;
  if (null != stateFromStores) {
    obj = {
      onPress() {
        const obj = { activity: stateFromStores };
        obj.openLazy(
          asyncRequireImpl(17027, dependencyMap.paths),
          "ActivityInviteSheet-" + stateFromStores.session_id,
          obj,
        );
      },
      icon: stateFromStores(10031),
      text: null,
      accessibilityLabel: null,
      variant: "secondary-overlay",
      size: "sm",
      shrink: true,
      maxFontSizeMultiplier: 1,
    };
    const intl = tmp(1114).intl;
    obj.text = intl.string(tmp(1114).t["OzOM/q"]);
    const intl2 = tmp(1114).intl;
    obj.accessibilityLabel = intl2.string(tmp(1114).t["OzOM/q"]);
    tmp4 = jsx(tmp(4975).Button, {
      onPress() {
        const obj = { activity: stateFromStores };
        obj.openLazy(
          asyncRequireImpl(17027, dependencyMap.paths),
          "ActivityInviteSheet-" + stateFromStores.session_id,
          obj,
        );
      },
      icon: stateFromStores(10031),
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
