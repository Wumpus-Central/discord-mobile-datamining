// === Module 17837: ConjureYouBarButton ===

// Module 17837 (ConjureYouBarButton)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import Link from "Link" /* 1506 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import _modDef3830 from "module_3830" /* 3830 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import useMountEffectDefault from "useMountEffect" /* 5263 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10720 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 10818 */;
import MagicWandIcon from "MagicWandIcon" /* 12252 */;
import useConjureTitleBarStatusDefault from "useConjureTitleBarStatus" /* 17842 */;
import ConjureWorkingWandDefault from "ConjureWorkingWand" /* 17843 */;
import YouBarButtonDefault from "YouBarButton" /* 17845 */;
import noop from "module_19" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6773 */;

require = fn;
function handlePress() {
  if ("success" === ConjureProjectStore.getOwnedProjectsFetchState()) {
    if (0 === ConjureProjectStore.getOwnedProjects().length) {
      openConjureHomeScreenDefault();
    }
  }
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17838, dependencyMap.paths), "ConjureProjectsSheet");
}
const YOU_BAR_BUTTON_ICON_SIZE = fn(16444).YOU_BAR_BUTTON_ICON_SIZE;
const jsx = fn(21).jsx;
const createStyles = fn(4971);
let obj = { icon: { width: YOU_BAR_BUTTON_ICON_SIZE, height: YOU_BAR_BUTTON_ICON_SIZE }, badge: { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND } };
let closure_6 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/title_bar/native/ConjureYouBarButton.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureYouBarButton(hasNameplate) {
  const cResult = c.c(23);
  hasNameplate = hasNameplate.hasNameplate;
  const tmp4 = closure_6();
  const tmp6 = useConjureTitleBarStatusDefault();
  const status = tmp6.status;
  let kind;
  if (status != null) {
    kind = status.kind;
  }
  let icon = Link.useIsFocused();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      if ("unattempted" === ownedProjectsFetchState.getOwnedProjectsFetchState()) {
        ConjureActionCreators.listProjects();
      }
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  useMountEffectDefault(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(_modDef3830.uk6jhJ);
    cResult[1] = stringResult;
    let tmp10 = stringResult;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] !== ("working" === kind)) {
    let stringResult1 = null;
    if (tmp12) {
      const intl2 = util.intl;
      stringResult1 = intl2.string(_modDef3830["Y8pS+n"]);
    }
    cResult[2] = tmp12;
    cResult[3] = stringResult1;
    let tmp13 = stringResult1;
  } else {
    tmp13 = cResult[3];
  }
  let kind1;
  if (status != null) {
    kind1 = status.kind;
  }
  if (cResult[4] !== kind1) {
    let kind2;
    if (status != null) {
      kind2 = status.kind;
    }
    let stringResult2 = null;
    if ("needs_input" === kind2) {
      const intl3 = util.intl;
      stringResult2 = intl3.string(_modDef3830.hfIuc7);
    }
    let kind3;
    if (status != null) {
      kind3 = status.kind;
    }
    cResult[4] = kind3;
    cResult[5] = stringResult2;
    let tmp16 = stringResult2;
  } else {
    tmp16 = cResult[5];
  }
  let kind4;
  if (status != null) {
    kind4 = status.kind;
  }
  if (cResult[6] !== kind4) {
    let kind5;
    if (status != null) {
      kind5 = status.kind;
    }
    let stringResult3 = null;
    if ("unread" === kind5) {
      const intl4 = util.intl;
      stringResult3 = intl4.string(_modDef3830["6XGnHJ"]);
    }
    let kind6;
    if (status != null) {
      kind6 = status.kind;
    }
    cResult[6] = kind6;
    cResult[7] = stringResult3;
    let tmp21 = stringResult3;
  } else {
    tmp21 = cResult[7];
  }
  if (cResult[8] === tmp13) {
    if (cResult[9] === tmp16) {
      if (cResult[10] === tmp21) {
        let obj3 = cResult[11];
      }
      const joined = obj3.join(", ");
      if (cResult[12] === icon) {
        if (cResult[13] === hasNameplate) {
          if (cResult[14] === tmp4.icon) {
            if (cResult[15] === tmp12) {
              let hasUnread = !tmp12;
              if (!tmp12) {
                hasUnread = tmp6.hasUnread;
              }
              if (cResult[17] === joined) {
                if (cResult[18] === hasNameplate) {
                  if (cResult[19] === tmp4.badge) {
                    if (cResult[20] === tmp27) {
                      if (cResult[21] === hasUnread) {
                        let tmp32 = cResult[22];
                      }
                      return tmp32;
                    }
                  }
                }
              }
              const obj2 = { hasNameplate, icon: cResult[16], hasBadge: hasUnread, badgeStyle: tmp4.badge, onPress: handlePress, accessibilityLabel: joined };
              const tmp35 = jsx(YouBarButtonDefault, { hasNameplate, icon: cResult[16], hasBadge: hasUnread, badgeStyle: tmp4.badge, onPress: handlePress, accessibilityLabel: joined });
              cResult[17] = joined;
              cResult[18] = hasNameplate;
              cResult[19] = tmp4.badge;
              cResult[20] = cResult[16];
              cResult[21] = hasUnread;
              cResult[22] = tmp35;
              tmp32 = tmp35;
            }
          }
        }
      }
      if (tmp12) {
        const obj4 = { size: YOU_BAR_BUTTON_ICON_SIZE, paused: !icon };
        let tmp28Result = jsx(ConjureWorkingWandDefault, { size: YOU_BAR_BUTTON_ICON_SIZE, paused: !icon });
      } else {
        const obj5 = { size: "custom", style: tmp4.icon, color: null };
        let str4;
        if (hasNameplate) {
          str4 = "white";
        }
        obj5.color = str4;
        tmp28Result = jsx(MagicWandIcon.MagicWandIcon, { size: "custom", style: tmp4.icon, color: null });
      }
      cResult[12] = icon;
      cResult[13] = hasNameplate;
      icon = tmp4.icon;
      cResult[14] = icon;
      cResult[15] = tmp12;
      cResult[16] = tmp28Result;
    }
  }
  const items = [tmp10, tmp13, tmp16, tmp21];
  const found = items.filter((item) => null != item);
  cResult[8] = tmp13;
  cResult[9] = tmp16;
  cResult[10] = tmp21;
  cResult[11] = found;
  obj3 = found;
  const tmpResult = Link;
}) : (function ConjureYouBarButton(hasNameplate) {
  hasNameplate = hasNameplate.hasNameplate;
  const tmp = closure_6();
  const tmp4 = useConjureTitleBarStatusDefault();
  const status = tmp4.status;
  let kind;
  if (status != null) {
    kind = status.kind;
  }
  const isFocused = Link.useIsFocused();
  useMountEffectDefault(() => {
    if ("unattempted" === ownedProjectsFetchState.getOwnedProjectsFetchState()) {
      ConjureActionCreators.listProjects();
    }
  });
  const intl = util.intl;
  const items = [intl.string(_modDef3830.uk6jhJ), , , ];
  let stringResult = null;
  if ("working" === kind) {
    const intl2 = util.intl;
    stringResult = intl2.string(_modDef3830["Y8pS+n"]);
  }
  items[1] = stringResult;
  let kind1;
  if (status != null) {
    kind1 = status.kind;
  }
  let stringResult1 = null;
  if ("needs_input" === kind1) {
    const intl3 = util.intl;
    stringResult1 = intl3.string(_modDef3830.hfIuc7);
  }
  items[2] = stringResult1;
  let kind2;
  if (status != null) {
    kind2 = status.kind;
  }
  let stringResult2 = null;
  if ("unread" === kind2) {
    const intl4 = util.intl;
    stringResult2 = intl4.string(_modDef3830["6XGnHJ"]);
  }
  items[3] = stringResult2;
  const found = items.filter((item) => null != item);
  const joined = found.join(", ");
  const obj2 = { hasNameplate, icon: null, hasBadge: null, badgeStyle: null, onPress: null, accessibilityLabel: null };
  if ("working" === kind) {
    const obj3 = { size: YOU_BAR_BUTTON_ICON_SIZE, paused: !isFocused };
    let tmp16Result = jsx(ConjureWorkingWandDefault, { size: YOU_BAR_BUTTON_ICON_SIZE, paused: !isFocused });
  } else {
    const obj4 = { size: "custom", style: tmp.icon, color: null };
    let str;
    if (hasNameplate) {
      str = "white";
    }
    obj4.color = str;
    tmp16Result = jsx(MagicWandIcon.MagicWandIcon, { size: "custom", style: tmp.icon, color: null });
  }
  obj2.icon = tmp16Result;
  let hasUnread = !tmp6;
  if ("working" !== kind) {
    hasUnread = tmp4.hasUnread;
  }
  obj2.hasBadge = hasUnread;
  obj2.badgeStyle = tmp.badge;
  obj2.onPress = handlePress;
  obj2.accessibilityLabel = joined;
  return jsx(YouBarButtonDefault, { hasNameplate, icon: null, hasBadge: null, badgeStyle: null, onPress: null, accessibilityLabel: null });
}));