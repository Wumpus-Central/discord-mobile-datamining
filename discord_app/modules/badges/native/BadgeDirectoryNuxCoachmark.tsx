// discord_app/modules/badges/native/BadgeDirectoryNuxCoachmark.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import DismissibleContentConstants from "../../dismissible_content/DismissibleContentConstants.tsx";
import BadgeArtImageDefault from "BadgeArtImage.tsx";
import openBadgeDirectoryScreen from "openBadgeDirectoryScreen.tsx";
import GameTimeTier9LargeBadge from "../../../design/components/mana-assets/native/generated/GameTimeTier9LargeBadge.native.tsx";
import StreamingTier10LargeBadge from "../../../design/components/mana-assets/native/generated/StreamingTier10LargeBadge.native.tsx";
import GameDiversityTier8LargeBadge from "../../../design/components/mana-assets/native/generated/GameDiversityTier8LargeBadge.native.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, badgeIconUrls, userId;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = { single: [60], pair: [48, 48], trio: [42, 60, 42] };
let createStyles = createStyles_mod;
let obj = { graphicRow: obj2, noProgressGraphicRow: obj3 };
obj2 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  height: 60,
  gap: nativeDefault.space.PX_8,
};
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_12 };
let closure_9 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let items;
      const obj = react2;
      const cResult = obj.c(8);
      const tmp4 = closure_9();
      if (cResult[0] === tmp4.graphicRow) {
        let tmp5;
        let tmp9;
        let tmp8;
        let tmp7;
        let tmp14;
        if (cResult[1] === tmp4.noProgressGraphicRow) {
          tmp5 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp11 = metroRequire(GameTimeTier9LargeBadge.GameTimeTier9LargeBadge, { width: 40, height: 40 });
          const tmp12 = metroRequire(StreamingTier10LargeBadge.StreamingTier10LargeBadge, { width: 50, height: 50 });
          const tmp13 = metroRequire(GameDiversityTier8LargeBadge.GameDiversityTier8LargeBadge, {
            width: 40,
            height: 40,
          });
          cResult[3] = tmp11;
          cResult[4] = tmp12;
          cResult[5] = tmp13;
          tmp9 = tmp13;
          tmp8 = tmp12;
          tmp7 = tmp11;
        } else {
          tmp7 = cResult[3];
          tmp8 = cResult[4];
          tmp9 = cResult[5];
        }
        if (cResult[6] !== tmp5) {
          const obj2 = { style: tmp5, children: items };
          items = [tmp7, tmp8, tmp9];
          const tmp17 = metroImportDefault(View, obj2);
          cResult[6] = tmp5;
          cResult[7] = tmp17;
          tmp14 = tmp17;
        } else {
          tmp14 = cResult[7];
        }
        return tmp14;
      }
      const items1 = [,];
      ({ graphicRow: arr[0], noProgressGraphicRow: arr[1] } = tmp4);
      cResult[0] = tmp4.graphicRow;
      cResult[1] = tmp4.noProgressGraphicRow;
      cResult[2] = items1;
      tmp5 = items1;
    }
  : () => {
      let items;
      let items1;
      const obj = { style: items, children: items1 };
      items = [,];
      ({ graphicRow: arr[0], noProgressGraphicRow: arr[1] } = closure_9());
      items1 = [, ,];
      closure_9();
      items1[0] = metroRequire(GameTimeTier9LargeBadge.GameTimeTier9LargeBadge, { width: 40, height: 40 });
      items1[1] = metroRequire(StreamingTier10LargeBadge.StreamingTier10LargeBadge, { width: 50, height: 50 });
      items1[2] = metroRequire(GameDiversityTier8LargeBadge.GameDiversityTier8LargeBadge, { width: 40, height: 40 });
      return metroImportDefault(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (badgeIconUrls) => {
      let closure_0;
      let items;
      let mapped;
      let tmp17;
      let obj = require("react");
      const cResult = obj.c(17);
      badgeIconUrls = badgeIconUrls.badgeIconUrls;
      const tmp4 = closure_9();
      if (cResult[0] === badgeIconUrls) {
        let tmp5;
        let tmp6;
        let tmp7;
        let tmp8;
        if (cResult[1] === tmp4.graphicRow) {
          tmp5 = cResult[2];
          tmp6 = cResult[3];
          tmp7 = cResult[4];
          tmp8 = cResult[5];
        }
        const _Symbol = Symbol;
        if (tmp8 === Symbol.for("react.early_return_sentinel")) {
          if (cResult[13] === tmp5) {
            if (cResult[14] === tmp6) {
              let tmp28;
              if (cResult[15] === tmp7) {
                tmp28 = cResult[16];
              }
              tmp8 = tmp28;
            }
          }
          const obj2 = { style: tmp6, children: tmp7 };
          const tmp30 = closure_6(tmp5, obj2);
          cResult[13] = tmp5;
          cResult[14] = tmp6;
          cResult[15] = tmp7;
          cResult[16] = tmp30;
          tmp28 = tmp30;
        }
        return tmp8;
      }
      const forResult = Symbol.for("react.early_return_sentinel");
      const tmpResult = require("BadgeDirectoryNuxGraphicUtils");
      const badgeDirectoryNuxGraphicLayout = tmpResult.getBadgeDirectoryNuxGraphicLayout(badgeIconUrls);
      if ("fallback" !== badgeDirectoryNuxGraphicLayout.type) {
        _require = tmp24;
        const graphicRow = tmp4.graphicRow;
        if (cResult[11] !== closure_8[badgeDirectoryNuxGraphicLayout.type]) {
          class B {
            constructor(arg0, arg1) {
              obj = { url: badgeIconUrls, height: closure_0[arg1] };
              return jsx(closure_1(closure_2[14]), obj, badgeIconUrls);
            }
          }
          cResult[11] = closure_8[badgeDirectoryNuxGraphicLayout.type];
          cResult[12] = B;
        } else {
          class B {
            constructor(arg0, arg1) {
              obj = { url: badgeIconUrls, height: closure_0[arg1] };
              return jsx(closure_1(closure_2[14]), obj, badgeIconUrls);
            }
          }
        }
        const iconUrls = badgeDirectoryNuxGraphicLayout.iconUrls;
        mapped = iconUrls.map(B);
        tmp17 = forResult;
      } else {
        let tmp13;
        let tmp12;
        let tmp11;
        class B {
          constructor(arg0, arg1) {
            obj = { url: badgeIconUrls, height: closure_0[arg1] };
            return jsx(closure_1(closure_2[14]), obj, badgeIconUrls);
          }
        }
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class B {
            constructor(arg0, arg1) {
              obj = { url: badgeIconUrls, height: closure_0[arg1] };
              return jsx(closure_1(closure_2[14]), obj, badgeIconUrls);
            }
          }
          const tmp14 = closure_6(require("GameDiversityTier9LargeBadge").GameDiversityTier9LargeBadge, {
            width: 42,
            height: 42,
          });
          const tmp15 = closure_6(require("GameDiversityTier10LargeBadge").GameDiversityTier10LargeBadge, {
            width: 60,
            height: 60,
          });
          const tmp16 = closure_6(require("GameDiversityTier8LargeBadge").GameDiversityTier8LargeBadge, {
            width: 42,
            height: 42,
          });
          cResult[6] = tmp14;
          cResult[7] = tmp15;
          cResult[8] = tmp16;
          tmp13 = tmp16;
          tmp12 = tmp15;
          tmp11 = tmp14;
        } else {
          class B {
            constructor(arg0, arg1) {
              obj = { url: badgeIconUrls, height: closure_0[arg1] };
              return jsx(closure_1(closure_2[14]), obj, badgeIconUrls);
            }
          }
          tmp12 = cResult[7];
          tmp13 = cResult[8];
        }
        if (cResult[9] !== tmp4.graphicRow) {
          class B {
            constructor(arg0, arg1) {
              obj = { url: badgeIconUrls, height: closure_0[arg1] };
              return jsx(closure_1(closure_2[14]), obj, badgeIconUrls);
            }
          }
          const obj3 = { style: tmp4.graphicRow, children: items };
          items = [tmp11, tmp12, tmp13];
          const tmp19 = closure_7(View, obj3);
          cResult[9] = tmp4.graphicRow;
          cResult[10] = tmp19;
          tmp17 = tmp19;
        } else {
          class B {
            constructor(arg0, arg1) {
              obj = { url: badgeIconUrls, height: closure_0[arg1] };
              return jsx(closure_1(closure_2[14]), obj, badgeIconUrls);
            }
          }
        }
      }
      cResult[0] = badgeIconUrls;
      cResult[1] = tmp4.graphicRow;
      cResult[2] = View;
      cResult[3] = tmp21;
      cResult[4] = mapped;
      cResult[5] = tmp17;
      tmp8 = tmp17;
      tmp7 = mapped;
      tmp6 = tmp21;
      tmp5 = View;
    }
  : (badgeIconUrls) => {
      let closure_0;
      let iconUrls;
      let items;
      _require = undefined;
      badgeIconUrls = badgeIconUrls.badgeIconUrls;
      const tmp = closure_9();
      let obj = require("BadgeDirectoryNuxGraphicUtils");
      const badgeDirectoryNuxGraphicLayout = obj.getBadgeDirectoryNuxGraphicLayout(badgeIconUrls);
      if ("fallback" === badgeDirectoryNuxGraphicLayout.type) {
        const obj2 = { style: tmp.graphicRow, children: items };
        items = [
          closure_6(require("GameDiversityTier9LargeBadge").GameDiversityTier9LargeBadge, { width: 42, height: 42 }),
          closure_6(require("GameDiversityTier10LargeBadge").GameDiversityTier10LargeBadge, { width: 60, height: 60 }),
          closure_6(require("GameDiversityTier8LargeBadge").GameDiversityTier8LargeBadge, { width: 42, height: 42 }),
        ];
        return closure_7(View, obj2);
      } else {
        _require = closure_8[badgeDirectoryNuxGraphicLayout.type];
        const obj3 = {
          style: tmp.graphicRow,
          children: iconUrls.map((url, index) => {
            const obj = { url, height: closure_0[index] };
            return metroRequire(BadgeArtImageDefault, obj, url);
          }),
        };
        iconUrls = badgeDirectoryNuxGraphicLayout.iconUrls;
        return closure_6(View, obj3);
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userId) => {
      let formatToPlainStringResult;
      let markAsDismissed;
      let tmp5;
      let visible;
      let obj = userId(markAsDismissed[7]);
      const cResult = obj.c(21);
      userId = userId.userId;
      const variantProps = userId.variantProps;
      ({ visible, markAsDismissed } = userId);
      let closure_3 = tmp4;
      const targetRef = userId.targetRef;
      if (cResult[0] !== ("progress" === variantProps.variant)) {
        let stringResult;
        const intl = tmp(tmp2[15]).intl;
        const string = intl.string;
        const t = tmp(tmp2[15]).t;
        if ("progress" === variantProps.variant) {
          stringResult = string(t.uwDBSq);
        } else {
          stringResult = string(t["5GD53o"]);
        }
        cResult[0] = "progress" === variantProps.variant;
        cResult[1] = stringResult;
        tmp5 = stringResult;
      } else {
        tmp5 = cResult[1];
      }
      if ((cResult[2] === "progress") === variantProps.variant) {
        let tmp7;
        if (cResult[3] === variantProps.newBadgeCount) {
          tmp7 = cResult[4];
        }
        if ((cResult[5] === "progress") === variantProps.variant) {
          let tmp9;
          let tmp10;
          let tmp12;
          if (cResult[6] === variantProps.badgeIconUrls) {
            tmp9 = cResult[7];
          }
          if (cResult[8] !== markAsDismissed) {
            const fn2 = function h() {
              return markAsDismissed(ContentDismissActionType.USER_DISMISS);
            };
            cResult[8] = markAsDismissed;
            cResult[9] = fn2;
            tmp10 = fn2;
          } else {
            tmp10 = cResult[9];
          }
          const _Symbol = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(tmp2[15]).intl;
            const stringResult1 = intl3.string(userId(markAsDismissed[15]).t.pHo9tZ);
            cResult[10] = stringResult1;
            tmp12 = stringResult1;
          } else {
            tmp12 = cResult[10];
          }
          if (cResult[11] === markAsDismissed) {
            let tmp14;
            if (cResult[12] === userId) {
              tmp14 = cResult[13];
            }
            if (cResult[14] === tmp5) {
              if (cResult[15] === tmp7) {
                if (cResult[16] === tmp9) {
                  if (cResult[17] === tmp10) {
                    if (cResult[18] === tmp14) {
                      let tmp15;
                      if (cResult[19] === visible) {
                        tmp15 = cResult[20];
                      }
                      let tmpResult = tmp(tmp2[17]);
                      const coachmark = tmpResult.useCoachmark(targetRef, tmp15);
                      return null;
                    }
                  }
                }
              }
            }
            let obj2 = {
              title: tmp5,
              description: tmp7,
              visible,
              position: "bottom",
              renderImgComponent: tmp9,
              onDismiss: tmp10,
              buttonLabel: tmp12,
              buttonVariant: "primary",
              onButtonPress: tmp14,
            };
            cResult[14] = tmp5;
            cResult[15] = tmp7;
            cResult[16] = tmp9;
            cResult[17] = tmp10;
            cResult[18] = tmp14;
            cResult[19] = visible;
            cResult[20] = obj2;
            tmp15 = obj2;
          }
          const fn3 = function y() {
            markAsDismissed(ContentDismissActionType.TAKE_ACTION);
            const obj = openBadgeDirectoryScreen;
            const obj2 = { targetUserId: userId };
            const result = obj.openBadgeDirectoryScreen(obj2);
          };
          cResult[11] = markAsDismissed;
          cResult[12] = userId;
          cResult[13] = fn3;
          tmp14 = fn3;
        }
        const fn = function l() {
          let tmpResult;
          if (closure_3) {
            const obj = { badgeIconUrls: variantProps.badgeIconUrls };
            tmpResult = metroRequire(closure_11, obj);
          } else {
            tmpResult = metroRequire(closure_10, {});
          }
          return tmpResult;
        };
        cResult[5] = "progress" === variantProps.variant;
        cResult[6] = variantProps.badgeIconUrls;
        cResult[7] = fn;
        tmp9 = fn;
      }
      const intl2 = tmp(tmp2[15]).intl;
      if ("progress" === variantProps.variant) {
        const obj3 = { count: variantProps.newBadgeCount };
        formatToPlainStringResult = intl2.formatToPlainString(tmp(tmp2[15]).t.Mk5nzZ, obj3);
      } else {
        formatToPlainStringResult = intl2.string(tmp(tmp2[15]).t["2Rb7tE"]);
      }
      cResult[2] = "progress" === variantProps.variant;
      cResult[3] = variantProps.newBadgeCount;
      cResult[4] = formatToPlainStringResult;
      tmp7 = formatToPlainStringResult;
    }
  : (userId) => {
      userId = userId.userId;
      const variantProps = userId.variantProps;
      const visible = userId.visible;
      const markAsDismissed = userId.markAsDismissed;
      const items = [variantProps, visible, markAsDismissed, userId];
      const targetRef = userId.targetRef;
      const memo = markAsDismissed.useMemo(() => {
        let formatToPlainStringResult;
        let intl3;
        let stringResult;
        const targetUserId = tmp2;
        const intl = userId(visible[15]).intl;
        const string = intl.string;
        const t = userId(visible[15]).t;
        if ("progress" === variantProps.variant) {
          stringResult = string(t.uwDBSq);
        } else {
          stringResult = string(t["5GD53o"]);
        }
        let obj = {
          title: stringResult,
          description: formatToPlainStringResult,
          visible,
          position: "bottom",
          renderImgComponent() {
            let tmpResult;
            if (targetUserId) {
              const obj = { badgeIconUrls: variantProps.badgeIconUrls };
              tmpResult = metroRequire(closure_11, obj);
            } else {
              tmpResult = metroRequire(closure_10, {});
            }
            return tmpResult;
          },
          onDismiss() {
            return markAsDismissed(constants.USER_DISMISS);
          },
          buttonLabel: intl3.string(userId(visible[15]).t.pHo9tZ),
          buttonVariant: "primary",
          onButtonPress() {
            markAsDismissed(constants.TAKE_ACTION);
            const obj = userId(visible[16]);
            const obj2 = { targetUserId };
            const result = obj.openBadgeDirectoryScreen(obj2);
          },
        };
        const intl2 = userId(visible[15]).intl;
        if ("progress" === variantProps.variant) {
          let obj2 = { count: variantProps.newBadgeCount };
          formatToPlainStringResult = intl2.formatToPlainString(userId(visible[15]).t.Mk5nzZ, obj2);
        } else {
          formatToPlainStringResult = intl2.string(userId(visible[15]).t["2Rb7tE"]);
        }
        intl3 = userId(visible[15]).intl;
        return obj;
      }, items);
      let obj = userId(visible[17]);
      const coachmark = obj.useCoachmark(targetRef, memo);
      return null;
    };
let result = size.fileFinishedImporting("modules/badges/native/BadgeDirectoryNuxCoachmark.tsx");

export default tmp4;
