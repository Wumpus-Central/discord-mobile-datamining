// discord_app/modules/collectibles/native/OrbBadgePreview.tsx
import util from "../../../intl/index.native.tsx";
import useCurrentUser from "../hooks/useCurrentUser.tsx";
import collectibles_CollectiblesUtils from "CollectiblesUtils.tsx";
import UserProfilePreviewDefault from "../../user_profile/native/UserProfilePreview.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/OrbBadgePreview.tsx");

export const OrbBadgePreview = function OrbBadgePreview() {
  let obj = { style: closure_5().container, children: null };
  const currentUser = obj.useCurrentUser();
  obj = { compact: true, user: currentUser, additionalBadges: null, accessibilityLabel: null };
  const tmp = closure_5();
  const items = [collectibles_CollectiblesUtils.createOrbProfileBadge()];
  obj.additionalBadges = items;
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.bxcI6Y);
  obj.children = <tmp3 compact user={currentUser} additionalBadges={null} accessibilityLabel={null} />;
  return <View compact user={currentUser} additionalBadges={null} accessibilityLabel={null} />;
};
