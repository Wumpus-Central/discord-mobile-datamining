// === Module 13139: BadgeDirectoryNuxCoachmark ===

// Module 13139 (BadgeDirectoryNuxCoachmark)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import BadgeArtImageDefault from "BadgeArtImage" /* 10536 */;
import openBadgeDirectoryScreen from "openBadgeDirectoryScreen" /* 10540 */;
import GameTimeTier9LargeBadge from "GameTimeTier9LargeBadge" /* 13140 */;
import StreamingTier10LargeBadge from "StreamingTier10LargeBadge" /* 13144 */;
import GameDiversityTier8LargeBadge from "GameDiversityTier8LargeBadge" /* 13148 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(2061).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const dependencyMap2 = { single: [60], pair: [48, 48], trio: [42, 60, 42] };
const createStyles = fn(5091);
let obj2 = { graphicRow: { flexDirection: "row", alignItems: "center", justifyContent: "center", height: 60, gap: nativeDefault.space.PX_8 }, noProgressGraphicRow: null };
let obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "center", height: 60, gap: nativeDefault.space.PX_8 };
obj2.noProgressGraphicRow = { gap: nativeDefault.space.PX_12 };
let closure_9 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function NoProgressGraphic() {
  const cResult = c.c(8);
  const tmp4 = closure_9();
  if (cResult[0] === tmp4.graphicRow) {
    if (cResult[1] === tmp4.noProgressGraphicRow) {
      let tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp11 = timestampProducer(GameTimeTier9LargeBadge.GameTimeTier9LargeBadge, { width: 40, height: 40 });
      const tmp12 = timestampProducer(StreamingTier10LargeBadge.StreamingTier10LargeBadge, { width: 50, height: 50 });
      const tmp13 = timestampProducer(GameDiversityTier8LargeBadge.GameDiversityTier8LargeBadge, { width: 40, height: 40 });
      cResult[3] = tmp11;
      cResult[4] = tmp12;
      cResult[5] = tmp13;
      let tmp9 = tmp13;
      let tmp8 = tmp12;
      let tmp7 = tmp11;
    } else {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
      tmp9 = cResult[5];
    }
    if (cResult[6] !== tmp5) {
      const obj2 = { style: tmp5, children: null };
      const items = [tmp7, tmp8, tmp9];
      obj2.children = items;
      const tmp17 = React5(View, obj2);
      cResult[6] = tmp5;
      cResult[7] = tmp17;
      let tmp14 = tmp17;
    } else {
      tmp14 = cResult[7];
    }
    return tmp14;
  }
  const items1 = [, ];
  ({ graphicRow: arr[0], noProgressGraphicRow: arr[1] } = tmp4);
  cResult[0] = tmp4.graphicRow;
  cResult[1] = tmp4.noProgressGraphicRow;
  cResult[2] = items1;
  tmp5 = items1;
}) : (function NoProgressGraphic() {
  const obj = { style: null, children: null };
  const items = [, ];
  ({ graphicRow: arr[0], noProgressGraphicRow: arr[1] } = closure_9());
  obj.style = items;
  const items1 = [timestampProducer(GameTimeTier9LargeBadge.GameTimeTier9LargeBadge, { width: 40, height: 40 }), timestampProducer(StreamingTier10LargeBadge.StreamingTier10LargeBadge, { width: 50, height: 50 }), timestampProducer(GameDiversityTier8LargeBadge.GameDiversityTier8LargeBadge, { width: 40, height: 40 })];
  obj.children = items1;
  return React5(View, obj);
});
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProgressGraphic(badgeIconUrls) {
  const cResult = require("c").c(17);
  badgeIconUrls = badgeIconUrls.badgeIconUrls;
  let graphicRow = closure_9();
  if (cResult[0] === badgeIconUrls) {
    if (cResult[1] === graphicRow.graphicRow) {
      const _Symbol = Symbol;
      if (cResult[5] !== Symbol.for("react.early_return_sentinel")) {
        return tmp7;
      } else {
        if (cResult[13] === tmp4) {
          if (cResult[14] === tmp5) {
          }
        }
        const obj2 = { style: tmp5, children: tmp6 };
        const tmp28 = closure_6(tmp4, obj2);
        cResult[13] = tmp4;
        cResult[14] = tmp5;
        cResult[15] = tmp6;
        cResult[16] = tmp28;
      }
    }
  }
  Symbol.for("react.early_return_sentinel");
  const obj = require("c");
  let map = require("BadgeDirectoryNuxGraphicUtils").getBadgeDirectoryNuxGraphicLayout(badgeIconUrls);
  if ("fallback" === map.type) {
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp13 = closure_6(tmp(13152).GameDiversityTier9LargeBadge, { width: 42, height: 42 });
      const tmp14 = closure_6(tmp(13156).GameDiversityTier10LargeBadge, { width: 60, height: 60 });
      const tmp15 = closure_6(tmp(13148).GameDiversityTier8LargeBadge, { width: 42, height: 42 });
      cResult[6] = tmp13;
      cResult[7] = tmp14;
      cResult[8] = tmp15;
      let tmp11 = tmp15;
      let tmp10 = tmp14;
      let tmp9 = tmp13;
    } else {
      tmp9 = cResult[6];
      tmp10 = cResult[7];
      tmp11 = cResult[8];
    }
    if (cResult[9] !== graphicRow.graphicRow) {
      const obj3 = { style: graphicRow.graphicRow, children: null };
      const items = [tmp9, tmp10, tmp11];
      obj3.children = items;
      const tmp19 = closure_7(View, obj3);
      cResult[9] = graphicRow.graphicRow;
      cResult[10] = tmp19;
      let tmp16 = tmp19;
    } else {
      tmp16 = cResult[10];
    }
    cResult[0] = badgeIconUrls;
    graphicRow = graphicRow.graphicRow;
    cResult[1] = graphicRow;
    cResult[2] = undefined;
    cResult[3] = undefined;
    cResult[4] = undefined;
    cResult[5] = tmp16;
  }
  _require = tmp20;
  const graphicRow2 = graphicRow.graphicRow;
  if (cResult[11] !== dependencyMap2[map.type]) {
    class R {
      constructor(arg0, arg1) {
        obj = { url: badgeIconUrls, height: closure_0[arg1] };
        return jsx(closure_1(closure_2[14]), obj, badgeIconUrls);
      }
    }
    cResult[11] = tmp20;
    cResult[12] = R;
  } else {
    class R {
      constructor(arg0, arg1) {
        obj = { url: badgeIconUrls, height: closure_0[arg1] };
        return jsx(closure_1(closure_2[14]), obj, badgeIconUrls);
      }
    }
  }
  const iconUrls = map.iconUrls;
  map = iconUrls.map;
  const mapped = map(R);
  const tmpResult = require("BadgeDirectoryNuxGraphicUtils");
}) : (function ProgressGraphic(badgeIconUrls) {
  let _require;
  const tmp = closure_9();
  const badgeDirectoryNuxGraphicLayout = require("BadgeDirectoryNuxGraphicUtils").getBadgeDirectoryNuxGraphicLayout(badgeIconUrls.badgeIconUrls);
  if ("fallback" === badgeDirectoryNuxGraphicLayout.type) {
    const obj2 = { style: tmp.graphicRow, children: null };
    const items = [closure_6(tmp2(13152).GameDiversityTier9LargeBadge, { width: 42, height: 42 }), closure_6(tmp2(13156).GameDiversityTier10LargeBadge, { width: 60, height: 60 }), closure_6(tmp2(13148).GameDiversityTier8LargeBadge, { width: 42, height: 42 })];
    obj2.children = items;
    return closure_7(View, obj2);
  } else {
    _require = dependencyMap2[badgeDirectoryNuxGraphicLayout.type];
    const obj3 = { style: tmp.graphicRow, children: null };
    const iconUrls = badgeDirectoryNuxGraphicLayout.iconUrls;
    obj3.children = iconUrls.map((url, index) => timestampProducer(BadgeArtImageDefault, { url, height: closure_0[index] }, url));
    return closure_6(View, obj3);
  }
  const obj = require("BadgeDirectoryNuxGraphicUtils");
});
ReactCompilerGating = fn(558);
const obj4 = { gap: nativeDefault.space.PX_12 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/badges/native/BadgeDirectoryNuxCoachmark.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function BadgeDirectoryNuxCoachmark(userId) {
  const cResult = userId(markAsDismissed[7]).c(21);
  userId = userId.userId;
  const variantProps = userId.variantProps;
  ({ visible, markAsDismissed } = userId);
  closure_3 = tmp5;
  if (cResult[0] !== ("progress" === variantProps.variant)) {
    const intl = tmp(tmp2[15]).intl;
    const string = intl.string;
    let uwDBSq = tmp(tmp2[15]).t;
    if (tmp5) {
      uwDBSq = uwDBSq.uwDBSq;
      let stringResult = string(uwDBSq);
    } else {
      stringResult = string(uwDBSq["5GD53o"]);
    }
    cResult[0] = tmp5;
    cResult[1] = stringResult;
  } else {
    if (cResult[2] === tmp5) {
      if (cResult[3] === variantProps.newBadgeCount) {
        if (cResult[5] === tmp5) {
          if (cResult[6] === variantProps.badgeIconUrls) {
            let tmp12 = cResult[7];
          }
          if (cResult[8] !== markAsDismissed) {
            const fn2 = function l() {
              return markAsDismissed(ContentDismissActionType.USER_DISMISS);
            };
            cResult[8] = markAsDismissed;
            cResult[9] = fn2;
            let tmp13 = fn2;
          } else {
            tmp13 = cResult[9];
          }
          const _Symbol = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(tmp2[15]).intl;
            const stringResult1 = intl3.string(tmp(tmp2[15]).t.pHo9tZ);
            cResult[10] = stringResult1;
            let tmp15 = stringResult1;
          } else {
            tmp15 = cResult[10];
          }
          if (cResult[11] === markAsDismissed) {
            if (cResult[12] === userId) {
              let tmp17 = cResult[13];
            }
            if (cResult[14] === tmp6) {
              if (cResult[15] === tmp9) {
                if (cResult[16] === tmp12) {
                  if (cResult[17] === tmp13) {
                    if (cResult[18] === tmp17) {
                      if (cResult[19] === visible) {
                        let tmp18 = cResult[20];
                      }
                      const coachmark = tmp(tmp2[17]).useCoachmark(tmp4, tmp18);
                      return null;
                    }
                  }
                }
              }
            }
            const obj2 = { title: tmp6, description: tmp9, visible, position: "bottom", renderImgComponent: tmp12, onDismiss: tmp13, buttonLabel: tmp15, buttonVariant: "primary", onButtonPress: tmp17 };
            cResult[14] = tmp6;
            cResult[15] = tmp9;
            cResult[16] = tmp12;
            cResult[17] = tmp13;
            cResult[18] = tmp17;
            cResult[19] = visible;
            cResult[20] = obj2;
            tmp18 = obj2;
          }
          const fn3 = function w() {
            markAsDismissed(ContentDismissActionType.TAKE_ACTION);
            const result = openBadgeDirectoryScreen.openBadgeDirectoryScreen({ targetUserId: userId });
          };
          cResult[11] = markAsDismissed;
          cResult[12] = userId;
          cResult[13] = fn3;
          tmp17 = fn3;
        }
        const fn = function h() {
          if (closure_3) {
            const obj = { badgeIconUrls: variantProps.badgeIconUrls };
            let tmpResult = timestampProducer(closure_11, obj);
          } else {
            tmpResult = timestampProducer(closure_10, {});
          }
          return tmpResult;
        };
        cResult[5] = tmp5;
        cResult[6] = variantProps.badgeIconUrls;
        cResult[7] = fn;
        tmp12 = fn;
      }
    }
    const intl2 = tmp(tmp2[15]).intl;
    if (tmp5) {
      const obj3 = { count: variantProps.newBadgeCount };
      let formatToPlainStringResult = intl2.formatToPlainString(tmp(tmp2[15]).t.Mk5nzZ, obj3);
    } else {
      formatToPlainStringResult = intl2.string(tmp(tmp2[15]).t["2Rb7tE"]);
    }
    cResult[2] = tmp5;
    cResult[3] = variantProps.newBadgeCount;
    cResult[4] = formatToPlainStringResult;
  }
}) : (function BadgeDirectoryNuxCoachmark(userId) {
  userId = userId.userId;
  const variantProps = userId.variantProps;
  const visible = userId.visible;
  const markAsDismissed = userId.markAsDismissed;
  const items = [variantProps, visible, markAsDismissed, userId];
  const memo = markAsDismissed.useMemo(() => {
    const targetUserId = tmp2;
    const intl = userId(visible[15]).intl;
    const string = intl.string;
    const t = userId(visible[15]).t;
    if ("progress" === variantProps.variant) {
      let stringResult = string(t.uwDBSq);
    } else {
      stringResult = string(t["5GD53o"]);
    }
    let obj = { title: stringResult, description: null, visible: null, position: "bottom", renderImgComponent: null, onDismiss: null, buttonLabel: null, buttonVariant: "primary", onButtonPress: null };
    const intl2 = userId(visible[15]).intl;
    if ("progress" === variantProps.variant) {
      const obj2 = { count: variantProps.newBadgeCount };
      let formatToPlainStringResult = intl2.formatToPlainString(userId(visible[15]).t.Mk5nzZ, obj2);
    } else {
      formatToPlainStringResult = intl2.string(userId(visible[15]).t["2Rb7tE"]);
    }
    obj.description = formatToPlainStringResult;
    obj.visible = visible;
    obj.renderImgComponent = function renderImgComponent() {
      if (closure_0) {
        const obj = { badgeIconUrls: variantProps.badgeIconUrls };
        let tmpResult = timestampProducer(closure_11, obj);
      } else {
        tmpResult = timestampProducer(closure_10, {});
      }
      return tmpResult;
    };
    obj.onDismiss = function onDismiss() {
      return markAsDismissed(constants.USER_DISMISS);
    };
    const intl3 = userId(visible[15]).intl;
    obj.buttonLabel = intl3.string(userId(visible[15]).t.pHo9tZ);
    obj.onButtonPress = function onButtonPress() {
      markAsDismissed(constants.TAKE_ACTION);
      const result = userId(visible[16]).openBadgeDirectoryScreen({ targetUserId });
    };
    return obj;
  }, items);
  const coachmark = userId(visible[17]).useCoachmark(userId.targetRef, memo);
  return null;
});