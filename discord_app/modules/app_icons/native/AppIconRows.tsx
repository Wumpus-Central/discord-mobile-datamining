// === Module 16884: AppIconRows ===

// Module 16884 (AppIconRows)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1128 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1991 */;
import AppIconTypes from "AppIconTypes" /* 9866 */;
import AppIconUtils from "AppIconUtils" /* 14766 */;
import AppIconRowDefault from "AppIconRow" /* 16885 */;
import HexagonCampaignAppIconSectionDefault from "HexagonCampaignAppIconSection" /* 16886 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectDestructuringEmpty from "_objectDestructuringEmpty" /* 13135 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1392 */;

require = fn;
const View = fn(17).View;
const isHexagonCampaignAppIcon = fn(9865).isHexagonCampaignAppIcon;
const createElement = fn(19).createElement;
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4971);
let closure_13 = createStyles.createStyles({ container: { padding: 16 }, bottomUpsellPadding: { paddingBottom: 56 } });
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function BackwardsCompatibleAppIconRows(arg0) {
  const cResult = merged(576).c(11);
  _objectDestructuringEmpty(arg0);
  merged = Object.assign({}, arg0);
  const tmp6 = closure_13();
  let obj = merged(576);
  [importDefault, dependencyMap] = onLongPress(noop.useState(false), 2);
  ({ icons, title } = merged);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    onLongPress = function onLongPress(noop) {
      let tmp = null;
      if (noop === AppIconTypes.FreemiumAppIconIds.DEFAULT) {
        tmp = dependencyMap(true);
      }
      return tmp;
    };
    cResult[0] = onLongPress;
  } else {
    onLongPress = cResult[0];
  }
  const TableRowGroup = tmp(6987).TableRowGroup;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1128).intl;
    const stringResult = intl.string(tmp(1128).t.N4YDao);
    cResult[1] = stringResult;
    let tmp10 = stringResult;
  } else {
    tmp10 = cResult[1];
  }
  const mapped = icons.map((id) => {
    const obj = {};
    merged = Object.assign(merged);
    obj.key = id.id;
    obj.icon = id;
    obj.showEasterEgg = showEasterEgg;
    obj.onLongPress = onLongPress;
    return createElement(AppIconRowDefault, {});
  });
  if (cResult[2] === TableRowGroup) {
    if (cResult[3] === tmp10) {
      if (cResult[4] === mapped) {
        if (cResult[5] === title) {
          let tmp13 = cResult[6];
        }
        if (cResult[7] === View) {
          if (cResult[8] === tmp6.container) {
            if (cResult[9] === tmp13) {
              let tmp15 = cResult[10];
            }
            return tmp15;
          }
        }
        const obj2 = { style: tmp6.container, children: tmp13 };
        const tmp17 = closure_10(View, obj2);
        cResult[7] = View;
        cResult[8] = tmp6.container;
        cResult[9] = tmp13;
        cResult[10] = tmp17;
        tmp15 = tmp17;
      }
    }
  }
  const tmp14 = closure_10(TableRowGroup, { title, accessibilityRole: "radiogroup", accessibilityLabel: tmp10, hasIcons: true, children: mapped });
  cResult[2] = TableRowGroup;
  cResult[3] = tmp10;
  cResult[4] = mapped;
  cResult[5] = title;
  cResult[6] = tmp14;
  tmp13 = tmp14;
  const tmp7 = onLongPress(noop.useState(false), 2);
}) : (function BackwardsCompatibleAppIconRows(arg0) {
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    let merged = Object.assign(arg0, undefined);
    c1 = undefined;
    dependencyMap = undefined;
    function onLongPress(noop) {
      let tmp = null;
      if (noop === AppIconTypes.FreemiumAppIconIds.DEFAULT) {
        tmp = _undefined(true);
      }
      return tmp;
    }
    const tmp4 = closure_13();
    [c1, c2] = onLongPress(noop.useState(false), 2);
    const icons = merged.icons;
    let obj = { style: tmp4.container, children: null };
    const obj2 = { title: merged.title, accessibilityRole: "radiogroup", accessibilityLabel: null, hasIcons: true, children: null };
    const intl = merged(1128).intl;
    obj2.accessibilityLabel = intl.string(merged(1128).t.N4YDao);
    obj2.children = icons.map((id) => {
      const obj = {};
      merged = Object.assign(merged);
      obj.key = id.id;
      obj.icon = id;
      obj.showEasterEgg = showEasterEgg;
      obj.onLongPress = onLongPress;
      return createElement(AppIconRowDefault, {});
    });
    obj.children = closure_10(merged(6987).TableRowGroup, obj2);
    return closure_10(View, obj);
  }
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_icons/native/AppIconRows.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AppIconRows(arg0) {
  const cResult = c.c(36);
  ({ onSelect, pendingAppIconId } = arg0);
  closure_13();
  const appIcons = AppIconUtils.useAppIcons();
  ({ officialAppIcons, limitedTimeAppIcons, currentAppIcon } = appIcons);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function o() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp6, tmp7);
  if (cResult[2] !== stateFromStores) {
    const isPremiumResult = PremiumTypeUtils.isPremium(stateFromStores);
    cResult[2] = stateFromStores;
    cResult[3] = isPremiumResult;
    const tmpResult2 = PremiumTypeUtils;
  }
  if (cResult[4] !== limitedTimeAppIcons) {
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor(arg0) {
          return closure_1_8(arg0.id);
        }
      }
      cResult[6] = F;
    } else {
      class F {
        constructor(arg0) {
          return closure_1_8(arg0.id);
        }
      }
    }
    const someResult = limitedTimeAppIcons.some(F);
    cResult[4] = limitedTimeAppIcons;
    cResult[5] = someResult;
  } else {
    class F {
      constructor(arg0) {
        return closure_1_8(arg0.id);
      }
    }
    if (cResult[7] !== limitedTimeAppIcons) {
      class F {
        constructor(arg0) {
          return closure_1_8(arg0.id);
        }
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor(arg0) {
            tmp = closure_1_8(arg0.id);
            tmp2 = !tmp;
            if (!tmp) {
              tmp2 = !arg0.isHidden;
            }
            return tmp2;
          }
        }
        cResult[9] = C;
      } else {
        class C {
          constructor(arg0) {
            tmp = closure_1_8(arg0.id);
            tmp2 = !tmp;
            if (!tmp) {
              tmp2 = !arg0.isHidden;
            }
            return tmp2;
          }
        }
      }
      const found = limitedTimeAppIcons.filter(C);
      cResult[7] = limitedTimeAppIcons;
      cResult[8] = found;
    } else {
      class C {
        constructor(arg0) {
          tmp = closure_1_8(arg0.id);
          tmp2 = !tmp;
          if (!tmp) {
            tmp2 = !arg0.isHidden;
          }
          return tmp2;
        }
      }
      if (tmp12) {
        class C {
          constructor(arg0) {
            tmp = closure_1_8(arg0.id);
            tmp2 = !tmp;
            if (!tmp) {
              tmp2 = !arg0.isHidden;
            }
            return tmp2;
          }
        }
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class C {
            constructor(arg0) {
              tmp = closure_1_8(arg0.id);
              tmp2 = !tmp;
              if (!tmp) {
                tmp2 = !arg0.isHidden;
              }
              return tmp2;
            }
          }
          const stringResult = obj6.string(util.t.w9v0yp);
          cResult[10] = stringResult;
        } else {
          class C {
            constructor(arg0) {
              tmp = closure_1_8(arg0.id);
              tmp2 = !tmp;
              if (!tmp) {
                tmp2 = !arg0.isHidden;
              }
              return tmp2;
            }
          }
        }
      } else {
        class C {
          constructor(arg0) {
            tmp = closure_1_8(arg0.id);
            tmp2 = !tmp;
            if (!tmp) {
              tmp2 = !arg0.isHidden;
            }
            return tmp2;
          }
        }
        if (tmp19) {
          class C {
            constructor(arg0) {
              tmp = closure_1_8(arg0.id);
              tmp2 = !tmp;
              if (!tmp) {
                tmp2 = !arg0.isHidden;
              }
              return tmp2;
            }
          }
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            class C {
              constructor(arg0) {
                tmp = closure_1_8(arg0.id);
                tmp2 = !tmp;
                if (!tmp) {
                  tmp2 = !arg0.isHidden;
                }
                return tmp2;
              }
            }
            const stringResult1 = obj5.string(util.t.Ipxkog);
            cResult[11] = stringResult1;
          } else {
            class C {
              constructor(arg0) {
                tmp = closure_1_8(arg0.id);
                tmp2 = !tmp;
                if (!tmp) {
                  tmp2 = !arg0.isHidden;
                }
                return tmp2;
              }
            }
          }
        }
        if (cResult[12] === currentAppIcon) {
          class C {
            constructor(arg0) {
              tmp = closure_1_8(arg0.id);
              tmp2 = !tmp;
              if (!tmp) {
                tmp2 = !arg0.isHidden;
              }
              return tmp2;
            }
          }
        }
        let tmp27 = null;
        if (tmp12) {
          class C {
            constructor(arg0) {
              tmp = closure_1_8(arg0.id);
              tmp2 = !tmp;
              if (!tmp) {
                tmp2 = !arg0.isHidden;
              }
              return tmp2;
            }
          }
          const obj3 = { currentAppIcon, isPending: pendingAppIconId === AppIconTypes.LimitedTimeAppIconIds.HEXAGON, onSelect };
          tmp27 = v65535(HexagonCampaignAppIconSectionDefault, obj3);
        }
        cResult[12] = currentAppIcon;
        cResult[13] = tmp12;
        cResult[14] = onSelect;
        cResult[15] = pendingAppIconId;
        cResult[16] = tmp27;
      }
      tmp19 = arr2.length > 0;
    }
  }
  const tmpResult = initialize;
}) : (function AppIconRows(onSelect) {
  onSelect = onSelect.onSelect;
  let tmp = closure_13();
  const appIcons = AppIconUtils.useAppIcons();
  ({ limitedTimeAppIcons, currentAppIcon, officialAppIcons } = appIcons);
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const isPremiumResult = PremiumTypeUtils.isPremium(stateFromStores);
  const someResult = limitedTimeAppIcons.some((id) => isHexagonCampaignAppIcon(id.id));
  const found = limitedTimeAppIcons.filter((id) => {
    const tmp = isHexagonCampaignAppIcon(id.id);
    let tmp2 = !tmp;
    if (!tmp) {
      tmp2 = !id.isHidden;
    }
    return tmp2;
  });
  if (someResult) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.w9v0yp);
  } else if (tmp8) {
    const intl = util.intl;
    stringResult = intl.string(util.t.Ipxkog);
  }
  let tmp12 = null;
  if (someResult) {
    const obj4 = { currentAppIcon, isPending: onSelect.pendingAppIconId === AppIconTypes.LimitedTimeAppIconIds.HEXAGON, onSelect };
    tmp12 = v65535(HexagonCampaignAppIconSectionDefault, obj4);
  }
  const items1 = [tmp12, , ];
  let tmp16 = null;
  if (found.length > 0) {
    const obj5 = { hasNitro: isPremiumResult, icons: found, currentAppIcon, title: null, onSelect: null };
    const intl3 = util.intl;
    obj5.title = intl3.string(util.t.anqaFd);
    obj5.onSelect = onSelect;
    tmp16 = v65535(closure_14, obj5);
  }
  items1[1] = tmp16;
  let bottomUpsellPadding = !isPremiumResult;
  if (!isPremiumResult) {
    bottomUpsellPadding = tmp.bottomUpsellPadding;
  }
  const obj6 = { children: null };
  items1[2] = v65535(View, { style: bottomUpsellPadding, children: v65535(closure_14, { hasNitro: isPremiumResult, icons: officialAppIcons, currentAppIcon, title: stringResult, onSelect }) });
  obj6.children = items1;
  return __initData(closure_1_11, obj6);
});