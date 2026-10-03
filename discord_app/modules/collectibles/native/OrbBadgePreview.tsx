// === Module 12975: OrbBadgePreview ===

// Module 12975 (OrbBadgePreview)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import useCurrentUser from "useCurrentUser" /* 7849 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 8506 */;
import UserProfilePreviewDefault from "UserProfilePreview" /* 10825 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_5 = createStyles.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/OrbBadgePreview.tsx");

export const OrbBadgePreview = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(7);
  const tmp4 = closure_5();
  const currentUser = useCurrentUser.useCurrentUser();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [collectibles_CollectiblesUtils.createOrbProfileBadge()];
    const intl = util.intl;
    const stringResult = intl.string(util.t.bxcI6Y);
    cResult[0] = items;
    cResult[1] = stringResult;
    tmp6 = items;
    tmp7 = stringResult;
    const tmpResult = collectibles_CollectiblesUtils;
  } else {
    [tmp6, tmp7] = cResult;
  }
  if (cResult[2] !== currentUser) {
    const obj3 = { compact: true, user: currentUser, additionalBadges: tmp6, accessibilityLabel: tmp7 };
    const tmp12 = jsx(UserProfilePreviewDefault, { compact: true, user: currentUser, additionalBadges: tmp6, accessibilityLabel: tmp7 });
    cResult[2] = currentUser;
    cResult[3] = tmp12;
    let tmp9 = tmp12;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === tmp4.container) {
    if (cResult[5] === tmp9) {
      let tmp13 = cResult[6];
    }
    return tmp13;
  }
  const tmp14 = <View style={tmp4.container}>{tmp9}</View>;
  cResult[4] = tmp4.container;
  cResult[5] = tmp9;
  cResult[6] = tmp14;
  tmp13 = tmp14;
}) : (() => {
  const tmp = closure_5();
  const obj2 = { style: tmp.container, children: null };
  const currentUser = useCurrentUser.useCurrentUser();
  const obj3 = { compact: true, user: currentUser, additionalBadges: null, accessibilityLabel: null };
  const items = [collectibles_CollectiblesUtils.createOrbProfileBadge()];
  obj3.additionalBadges = items;
  const intl = util.intl;
  obj3.accessibilityLabel = intl.string(util.t.bxcI6Y);
  obj2.children = <tmp3 compact user={currentUser} additionalBadges={null} accessibilityLabel={null} />;
  return <View style={tmp.container}>{null}</View>;
});