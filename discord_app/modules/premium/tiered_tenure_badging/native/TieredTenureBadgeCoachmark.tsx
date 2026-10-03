// === Module 10880: TieredTenureBadgeCoachmark ===

// Module 10880 (TieredTenureBadgeCoachmark)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import FastImageDefault from "FastImage" /* 5974 */;
import openUserSettings from "openUserSettings" /* 6885 */;
import useMobileTenureBadgeImages from "useMobileTenureBadgeImages" /* 10849 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const UserSettingsSections = fn(1085).UserSettingsSections;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_9 = createStyles.createStyles({ image: { width: "100%", height: "100%" }, imageContainer: { width: 110, height: 72, marginTop: 16 } });
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((badge) => {
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
}) : ((badge) => {
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

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(18);
  ({ badgeId, targetRef } = arg0);
  if (cResult[0] !== badgeId) {
    const tieredTenureBadge = tmp(7119).getTieredTenureBadge(badgeId);
    let tieredTenureBadgeData = null;
    if (null != tieredTenureBadge) {
      tieredTenureBadgeData = tmp(7119).getTieredTenureBadgeData(tieredTenureBadge);
      const tmpResult3 = tmp(7119);
    }
    cResult[0] = badgeId;
    cResult[1] = tieredTenureBadgeData;
    let tmp4 = tieredTenureBadgeData;
    const tmpResult = tmp(7119);
  } else {
    tmp4 = cResult[1];
  }
  _require = tmp4;
  if (cResult[2] !== tmp4) {
    if (null != tmp4) {
      const items = [tmp(2036).DismissibleContent.TIERED_TENURE_BADGE_COACHMARK];
      let items1 = items;
    } else {
      items1 = [];
    }
    cResult[2] = tmp4;
    cResult[3] = items1;
  } else {
    const tmp10 = _slicedToArray(tmp(6891).useSelectedDismissibleContent(cResult[3]), 2);
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
      const fn = function h() {
        closure_1(ContentDismissActionType.USER_DISMISS);
      };
      cResult[6] = tmp11;
      cResult[7] = fn;
      let tmp17 = fn;
    } else {
      tmp17 = cResult[7];
    }
    if (cResult[8] !== tmp4) {
      const fn2 = function v() {
        return <closure_10 badge={badge} />;
      };
      cResult[8] = tmp4;
      cResult[9] = fn2;
      let tmp18 = fn2;
    } else {
      tmp18 = cResult[9];
    }
    if (cResult[10] !== tmp10[1]) {
      class B {
        constructor() {
          tmp = closure_1(ContentDismissActionType.TAKE_ACTION);
          obj = closure_0(closure_2[15]);
          obj1 = { screen: UserSettingsSections.PREMIUM };
          openUserSettingsResult = obj.openUserSettings(obj1);
          return;
        }
      }
      cResult[10] = tmp11;
      cResult[11] = B;
    } else {
      class B {
        constructor() {
          tmp = closure_1(ContentDismissActionType.TAKE_ACTION);
          obj = closure_0(closure_2[15]);
          obj1 = { screen: UserSettingsSections.PREMIUM };
          openUserSettingsResult = obj.openUserSettings(obj1);
          return;
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor() {
          tmp = closure_1(ContentDismissActionType.TAKE_ACTION);
          obj = closure_0(closure_2[15]);
          obj1 = { screen: UserSettingsSections.PREMIUM };
          openUserSettingsResult = obj.openUserSettings(obj1);
          return;
        }
      }
      const stringResult2 = obj5.string(tmp(1126).t.RzWDqY);
      cResult[12] = stringResult2;
      const tmp20 = stringResult2;
    } else {
      class B {
        constructor() {
          tmp = closure_1(ContentDismissActionType.TAKE_ACTION);
          obj = closure_0(closure_2[15]);
          obj1 = { screen: UserSettingsSections.PREMIUM };
          openUserSettingsResult = obj.openUserSettings(obj1);
          return;
        }
      }
    }
    const tmp22 = tmp10[0] === tmp(2036).DismissibleContent.TIERED_TENURE_BADGE_COACHMARK;
    if (cResult[13] === tmp22) {
      class B {
        constructor() {
          tmp = closure_1(ContentDismissActionType.TAKE_ACTION);
          obj = closure_0(closure_2[15]);
          obj1 = { screen: UserSettingsSections.PREMIUM };
          openUserSettingsResult = obj.openUserSettings(obj1);
          return;
        }
      }
    }
    const obj2 = { offsetY: 12, title: tmp13, description: tmp14, position: "bottom", visible: tmp22, onDismiss: tmp17, renderImgComponent: tmp18, onButtonPress: B, buttonLabel: tmp20, buttonVariant: "experimental_premium-primary" };
    cResult[13] = tmp22;
    cResult[14] = tmp17;
    cResult[15] = tmp18;
    cResult[16] = B;
    cResult[17] = obj2;
    const tmpResult4 = tmp(6891);
  }
  const obj = require("c");
}) : ((arg0) => {
  let tieredTenureBadgeData;
  let first;
  dependencyMap = undefined;
  ({ targetRef, badgeId } = arg0);
  const tieredTenureBadge = tieredTenureBadgeData(7119).getTieredTenureBadge(badgeId);
  tieredTenureBadgeData = null;
  if (null != tieredTenureBadge) {
    tieredTenureBadgeData = tmp(7119).getTieredTenureBadgeData(tieredTenureBadge);
    const tmpResult = tmp(7119);
  }
  if (null != tieredTenureBadgeData) {
    const items = [tmp(2036).DismissibleContent.TIERED_TENURE_BADGE_COACHMARK];
    let items1 = items;
  } else {
    items1 = [];
  }
  let obj = tieredTenureBadgeData(7119);
  const tmp5 = _slicedToArray(tieredTenureBadgeData(6891).useSelectedDismissibleContent(items1), 2);
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
      tieredTenureBadgeData(6885).openUserSettings({ screen: constants.PREMIUM });
    };
    const intl3 = util.intl;
    obj.buttonLabel = intl3.string(util.t.RzWDqY);
    return obj;
  }, items2);
  const tmpResult3 = tieredTenureBadgeData(6891);
  const coachmark = tieredTenureBadgeData(9882).useCoachmark(targetRef, memo);
  return null;
});