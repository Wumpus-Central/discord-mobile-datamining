// === Module 12996: OrbBadgePreview ===

// Module 12996 (OrbBadgePreview)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import useCurrentUser from "useCurrentUser" /* 7860 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 8539 */;
import UserProfilePreviewDefault from "UserProfilePreview" /* 10838 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp6;
  let tmp7;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(7);
  const tmp4 = closure_5();
  const obj2 = useCurrentUser;
  const currentUser = obj2.useCurrentUser();
  const container = tmp4.container;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    const tmpResult = collectibles_CollectiblesUtils;
    items[0] = tmpResult.createOrbProfileBadge();
    const intl = intl2.intl;
    const stringResult = intl.string(intl2.t.bxcI6Y);
    cResult[0] = items;
    cResult[1] = stringResult;
    tmp6 = items;
    tmp7 = stringResult;
  } else {
    [tmp6, tmp7] = cResult;
  }
  if (cResult[2] !== currentUser) {
    const tmp12 = jsx(UserProfilePreviewDefault, { compact: true, user: currentUser, additionalBadges: tmp6, accessibilityLabel: tmp7 });
    cResult[2] = currentUser;
    cResult[3] = tmp12;
    tmp9 = tmp12;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === tmp4.container) {
    let tmp13;
    if (cResult[5] === tmp9) {
      tmp13 = cResult[6];
    }
    return tmp13;
  }
  const tmp14 = <View style={container}>{tmp9}</View>;
  cResult[4] = tmp4.container;
  cResult[5] = tmp9;
  cResult[6] = tmp14;
  tmp13 = tmp14;
}) : (() => {
  let intl;
  let items;
  const tmp = closure_5();
  const obj = useCurrentUser;
  const currentUser = obj.useCurrentUser();
  ({ compact: true, user: currentUser, additionalBadges: items, accessibilityLabel: intl.string(intl2.t.bxcI6Y) });
  UserProfilePreviewDefault;
  items = [];
  const obj4 = collectibles_CollectiblesUtils;
  items[0] = obj4.createOrbProfileBadge();
  intl = intl2.intl;
  return <View style={tmp.container}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/collectibles/native/OrbBadgePreview.tsx");

export const OrbBadgePreview = tmp3;