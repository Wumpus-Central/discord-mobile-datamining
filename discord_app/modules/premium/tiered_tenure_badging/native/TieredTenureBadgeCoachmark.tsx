// === Module 10534: TieredTenureBadgeCoachmark ===

// Module 10534 (TieredTenureBadgeCoachmark)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import FastImageDefault from "FastImage" /* 6163 */;
import openUserSettings from "openUserSettings" /* 7087 */;
import useMobileTenureBadgeImages from "useMobileTenureBadgeImages" /* 10503 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const UserSettingsSections = fn(1085).UserSettingsSections;
const ContentDismissActionType = fn(2061).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let closure_9 = createStyles.createStyles({ image: { width: "100%", height: "100%" }, imageContainer: { width: 110, height: 72, marginTop: 16 } });
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function CoachmarkImg(badge) {
  const cResult = c.c(8);
  badge = badge.badge;
  let imageContainer = closure_9();
  let id;
  if (badge != null) {
    id = badge.id;
  }
  const mobileTenureBadgeImages = useMobileTenureBadgeImages.useMobileTenureBadgeImages(id);
  if (mobileTenureBadgeImages != null) {
    const medium = mobileTenureBadgeImages.medium;
  }
  if (null == badge) {
    return null;
  } else {
    if (cResult[0] !== medium) {
      const obj3 = { uri: medium };
      cResult[0] = medium;
      cResult[1] = obj3;
      let tmp5 = obj3;
    } else {
      tmp5 = cResult[1];
    }
    if (cResult[2] === imageContainer.image) {
      if (cResult[3] === tmp5) {
        let tmp6 = cResult[4];
      }
      if (cResult[5] === imageContainer.imageContainer) {
      }
      const obj4 = { style: imageContainer.imageContainer, children: tmp6 };
      const tmp13 = <View style={imageContainer.imageContainer}>{tmp6}</View>;
      imageContainer = imageContainer.imageContainer;
      cResult[5] = imageContainer;
      cResult[6] = tmp6;
      cResult[7] = tmp13;
    }
    const obj5 = { resizeMode: "contain", style: imageContainer.image, source: tmp5 };
    const tmp9 = jsx(FastImageDefault, { resizeMode: "contain", style: imageContainer.image, source: tmp5 });
    cResult[2] = imageContainer.image;
    cResult[3] = tmp5;
    cResult[4] = tmp9;
    tmp6 = tmp9;
  }
}) : (function CoachmarkImg(badge) {
  badge = badge.badge;
  const tmp = closure_9();
  let id;
  if (badge != null) {
    id = badge.id;
  }
  const mobileTenureBadgeImages = useMobileTenureBadgeImages.useMobileTenureBadgeImages(id);
  if (mobileTenureBadgeImages != null) {
    const medium = mobileTenureBadgeImages.medium;
  }
  let tmp5 = null;
  if (null != badge) {
    const obj2 = { style: tmp.imageContainer, children: null };
    const obj3 = { resizeMode: "contain", style: tmp.image, source: null };
    const obj4 = { uri: medium };
    obj3.source = obj4;
    obj2.children = jsx(FastImageDefault, { resizeMode: "contain", style: tmp.image, source: null });
    tmp5 = <View style={tmp.imageContainer}>{null}</View>;
  }
  return tmp5;
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/native/TieredTenureBadgeCoachmark.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function TieredTenureBadgeCoachmark(arg0) {
  const cResult = require("c").c(18);
  ({ badgeId, targetRef } = arg0);
  if (cResult[0] !== badgeId) {
    const tieredTenureBadge = tmp(7323).getTieredTenureBadge(badgeId);
    let tieredTenureBadgeData = null;
    if (null != tieredTenureBadge) {
      tieredTenureBadgeData = tmp(7323).getTieredTenureBadgeData(tieredTenureBadge);
      const tmpResult3 = tmp(7323);
    }
    cResult[0] = badgeId;
    cResult[1] = tieredTenureBadgeData;
    let tmp4 = tieredTenureBadgeData;
    const tmpResult = tmp(7323);
  } else {
    tmp4 = cResult[1];
  }
  _require = tmp4;
  if (cResult[2] !== tmp4) {
    if (null != tmp4) {
      const items = [tmp(2049).DismissibleContent.TIERED_TENURE_BADGE_COACHMARK];
      let items1 = items;
    } else {
      items1 = [];
    }
    cResult[2] = tmp4;
    cResult[3] = items1;
  } else {
    const tmp10 = _slicedToArray(tmp(7093).useSelectedDismissibleContent(cResult[3]), 2);
    importDefault = tmp11;
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t.Ajj8iG);
      const intl2 = tmp(1126).intl;
      const stringResult1 = intl2.string(tmp(1126).t["WUNqD/"]);
      cResult[4] = stringResult;
      cResult[5] = stringResult1;
      let tmp14 = stringResult1;
      let tmp13 = stringResult;
    } else {
      tmp13 = cResult[4];
      tmp14 = cResult[5];
    }
    if (cResult[6] !== tmp10[1]) {
      class M {
        constructor() {
          tmp = closure_1(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
      cResult[6] = tmp11;
      cResult[7] = M;
    } else {
      class M {
        constructor() {
          tmp = closure_1(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
    }
    if (cResult[8] !== tmp4) {
      class B {
        constructor() {
          obj = { badge: closure_0 };
          return jsx(CoachmarkImg, obj);
        }
      }
      cResult[8] = tmp4;
      cResult[9] = B;
    } else {
      class B {
        constructor() {
          obj = { badge: closure_0 };
          return jsx(CoachmarkImg, obj);
        }
      }
    }
    if (cResult[10] !== tmp10[1]) {
      class B {
        constructor() {
          obj = { badge: closure_0 };
          return jsx(CoachmarkImg, obj);
        }
      }
      cResult[10] = tmp11;
      cResult[11] = tmp20;
    } else {
      class B {
        constructor() {
          obj = { badge: closure_0 };
          return jsx(CoachmarkImg, obj);
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor() {
          obj = { badge: closure_0 };
          return jsx(CoachmarkImg, obj);
        }
      }
      const stringResult2 = obj5.string(tmp(1126).t.RzWDqY);
      cResult[12] = stringResult2;
      const tmp21 = stringResult2;
    } else {
      class B {
        constructor() {
          obj = { badge: closure_0 };
          return jsx(CoachmarkImg, obj);
        }
      }
    }
    const tmp23 = tmp10[0] === tmp(2049).DismissibleContent.TIERED_TENURE_BADGE_COACHMARK;
    if (cResult[13] === tmp23) {
      class B {
        constructor() {
          obj = { badge: closure_0 };
          return jsx(CoachmarkImg, obj);
        }
      }
    }
    const obj2 = { offsetY: 12, title: tmp13, description: tmp14, position: "bottom", visible: tmp23, onDismiss: M, renderImgComponent: B, onButtonPress: tmp20, buttonLabel: tmp21, buttonVariant: "experimental_premium-primary" };
    cResult[13] = tmp23;
    cResult[14] = M;
    cResult[15] = B;
    cResult[16] = tmp20;
    cResult[17] = obj2;
    const tmpResult4 = tmp(7093);
  }
  const obj = require("c");
}) : (function TieredTenureBadgeCoachmark(arg0) {
  let tieredTenureBadgeData;
  let first;
  dependencyMap = undefined;
  ({ targetRef, badgeId } = arg0);
  const tieredTenureBadge = tieredTenureBadgeData(7323).getTieredTenureBadge(badgeId);
  tieredTenureBadgeData = null;
  if (null != tieredTenureBadge) {
    tieredTenureBadgeData = tmp(7323).getTieredTenureBadgeData(tieredTenureBadge);
    const tmpResult = tmp(7323);
  }
  if (null != tieredTenureBadgeData) {
    const items = [tmp(2049).DismissibleContent.TIERED_TENURE_BADGE_COACHMARK];
    let items1 = items;
  } else {
    items1 = [];
  }
  let obj = tieredTenureBadgeData(7323);
  const tmp5 = _slicedToArray(tieredTenureBadgeData(7093).useSelectedDismissibleContent(items1), 2);
  first = tmp5[0];
  dependencyMap = tmp7;
  const items2 = [tmp5[1], first, tieredTenureBadgeData];
  const memo = noop.useMemo(() => {
    const obj = { offsetY: 12, title: null, description: null, position: "bottom", visible: null, onDismiss: null, renderImgComponent: null, onButtonPress: null, buttonLabel: null, buttonVariant: "experimental_premium-primary" };
    const intl = util.intl;
    obj.title = intl.string(util.t.Ajj8iG);
    const intl2 = util.intl;
    obj.description = intl2.string(util.t["WUNqD/"]);
    obj.visible = first === dismissible_content.DismissibleContent.TIERED_TENURE_BADGE_COACHMARK;
    obj.onDismiss = function onDismiss() {
      dependencyMap(constants2.USER_DISMISS);
    };
    obj.renderImgComponent = function renderImgComponent() {
      return <closure_2_10 badge={badge} />;
    };
    obj.onButtonPress = function onButtonPress() {
      dependencyMap(constants2.TAKE_ACTION);
      tieredTenureBadgeData(7087).openUserSettings({ screen: constants.PREMIUM });
    };
    const intl3 = util.intl;
    obj.buttonLabel = intl3.string(util.t.RzWDqY);
    return obj;
  }, items2);
  const tmpResult3 = tieredTenureBadgeData(7093);
  const coachmark = tieredTenureBadgeData(9413).useCoachmark(targetRef, memo);
  return null;
});