// discord_app/modules/app_icons/native/AppIconRows.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import PremiumTypeUtils from "../../../utils/PremiumTypeUtils.tsx";
import AppIconTypes from "../AppIconTypes.tsx";
import AppIconUtils from "AppIconUtils.tsx";
import AppIconRowDefault from "AppIconRow/AppIconRow.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import _objectDestructuringEmpty from "../../../../_runtime/11956__objectDestructuringEmpty.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const createElement = fn(19).createElement;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5090);
let closure_12 = createStyles.createStyles({ container: { padding: 16 }, bottomUpsellPadding: { paddingBottom: 56 } });
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function BackwardsCompatibleAppIconRows(arg0) {
      const cResult = merged(576).c(11);
      _objectDestructuringEmpty(arg0);
      merged = Object.assign({}, arg0);
      const tmp6 = closure_12();
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
      const TableRowGroup = tmp(6267).TableRowGroup;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.N4YDao);
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
            const tmp17 = closure_9(View, obj2);
            cResult[7] = View;
            cResult[8] = tmp6.container;
            cResult[9] = tmp13;
            cResult[10] = tmp17;
            tmp15 = tmp17;
          }
        }
      }
      const tmp14 = closure_9(TableRowGroup, {
        title,
        accessibilityRole: "radiogroup",
        accessibilityLabel: tmp10,
        hasIcons: true,
        children: mapped,
      });
      cResult[2] = TableRowGroup;
      cResult[3] = tmp10;
      cResult[4] = mapped;
      cResult[5] = title;
      cResult[6] = tmp14;
      tmp13 = tmp14;
      const tmp7 = onLongPress(noop.useState(false), 2);
    }
  : function BackwardsCompatibleAppIconRows(arg0) {
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
        const tmp4 = closure_12();
        [c1, c2] = onLongPress(noop.useState(false), 2);
        const icons = merged.icons;
        let obj = { style: tmp4.container, children: null };
        const obj2 = {
          title: merged.title,
          accessibilityRole: "radiogroup",
          accessibilityLabel: null,
          hasIcons: true,
          children: null,
        };
        const intl = merged(1126).intl;
        obj2.accessibilityLabel = intl.string(merged(1126).t.N4YDao);
        obj2.children = icons.map((id) => {
          const obj = {};
          merged = Object.assign(merged);
          obj.key = id.id;
          obj.icon = id;
          obj.showEasterEgg = showEasterEgg;
          obj.onLongPress = onLongPress;
          return createElement(AppIconRowDefault, {});
        });
        obj.children = closure_9(merged(6267).TableRowGroup, obj2);
        return closure_9(View, obj);
      }
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_icons/native/AppIconRows.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function AppIconRows(onSelect) {
      const cResult = c.c(26);
      onSelect = onSelect.onSelect;
      const tmp4 = closure_12();
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
        let tmp10 = isPremiumResult;
        const tmpResult2 = PremiumTypeUtils;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== limitedTimeAppIcons) {
        const tmp13 =
          limitedTimeAppIcons.length > 0 && limitedTimeAppIcons.filter((isHidden) => !isHidden.isHidden).length > 0;
        cResult[4] = limitedTimeAppIcons;
        cResult[5] = tmp13;
        let tmp12 = tmp13;
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[6] === currentAppIcon) {
        if (cResult[7] === tmp12) {
          if (cResult[8] === tmp10) {
            if (cResult[9] === limitedTimeAppIcons) {
              if (cResult[10] === onSelect) {
                let tmp14 = cResult[11];
              }
              let bottomUpsellPadding = !tmp10;
              if (!tmp10) {
                bottomUpsellPadding = tmp4.bottomUpsellPadding;
              }
              if (cResult[12] !== tmp12) {
                let stringResult;
                if (tmp12) {
                  const intl2 = util.intl;
                  stringResult = intl2.string(util.t.Ipxkog);
                }
                cResult[12] = tmp12;
                cResult[13] = stringResult;
                let tmp18 = stringResult;
              } else {
                tmp18 = cResult[13];
              }
              if (cResult[14] === currentAppIcon) {
                if (cResult[15] === tmp10) {
                  if (cResult[16] === officialAppIcons) {
                    if (cResult[17] === onSelect) {
                      if (cResult[18] === tmp18) {
                        let tmp20 = cResult[19];
                      }
                      if (cResult[20] === bottomUpsellPadding) {
                        if (cResult[21] === tmp20) {
                          let tmp24 = cResult[22];
                        }
                        if (cResult[23] === tmp14) {
                          if (cResult[24] === tmp24) {
                            let tmp28 = cResult[25];
                          }
                          return tmp28;
                        }
                        const obj3 = { children: null };
                        const items1 = [tmp14, tmp24];
                        obj3.children = items1;
                        const tmp31 = closure_1_11(collapsed, obj3);
                        cResult[23] = tmp14;
                        cResult[24] = tmp24;
                        cResult[25] = tmp31;
                        tmp28 = tmp31;
                      }
                      const obj4 = { style: bottomUpsellPadding, children: tmp20 };
                      const tmp27 = options(View, obj4);
                      cResult[20] = bottomUpsellPadding;
                      cResult[21] = tmp20;
                      cResult[22] = tmp27;
                      tmp24 = tmp27;
                    }
                  }
                }
              }
              const obj5 = { hasNitro: tmp10, icons: officialAppIcons, currentAppIcon, title: tmp18, onSelect };
              const tmp23 = options(closure_13, obj5);
              cResult[14] = currentAppIcon;
              cResult[15] = tmp10;
              cResult[16] = officialAppIcons;
              cResult[17] = onSelect;
              cResult[18] = tmp18;
              cResult[19] = tmp23;
              tmp20 = tmp23;
            }
          }
        }
      }
      let tmp15 = null;
      if (tmp12) {
        const obj6 = { hasNitro: tmp10, icons: limitedTimeAppIcons, currentAppIcon, title: null, onSelect: null };
        const intl = util.intl;
        obj6.title = intl.string(util.t.anqaFd);
        obj6.onSelect = onSelect;
        tmp15 = options(closure_13, obj6);
      }
      cResult[6] = currentAppIcon;
      cResult[7] = tmp12;
      cResult[8] = tmp10;
      cResult[9] = limitedTimeAppIcons;
      cResult[10] = onSelect;
      cResult[11] = tmp15;
      tmp14 = tmp15;
      const tmpResult = initialize;
    }
  : function AppIconRows(onSelect) {
      onSelect = onSelect.onSelect;
      const tmp = closure_12();
      const appIcons = AppIconUtils.useAppIcons();
      ({ limitedTimeAppIcons, currentAppIcon, officialAppIcons } = appIcons);
      const items = [UserStore];
      const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
      const isPremiumResult = PremiumTypeUtils.isPremium(stateFromStores);
      const tmp7 =
        limitedTimeAppIcons.length > 0 && limitedTimeAppIcons.filter((isHidden) => !isHidden.isHidden).length > 0;
      let tmp10 = null;
      if (tmp7) {
        const obj4 = {
          hasNitro: isPremiumResult,
          icons: limitedTimeAppIcons,
          currentAppIcon,
          title: null,
          onSelect: null,
        };
        const intl = util.intl;
        obj4.title = intl.string(util.t.anqaFd);
        obj4.onSelect = onSelect;
        tmp10 = options(closure_13, obj4);
      }
      const items1 = [tmp10];
      let bottomUpsellPadding = !isPremiumResult;
      if (!isPremiumResult) {
        bottomUpsellPadding = tmp.bottomUpsellPadding;
      }
      const obj5 = { style: bottomUpsellPadding, children: null };
      const obj6 = { hasNitro: isPremiumResult, icons: officialAppIcons, currentAppIcon, title: null, onSelect: null };
      let stringResult;
      if (tmp7) {
        const intl2 = util.intl;
        stringResult = intl2.string(util.t.Ipxkog);
      }
      const obj7 = { children: null };
      obj6.title = stringResult;
      obj6.onSelect = onSelect;
      obj5.children = options(closure_13, obj6);
      items1[1] = options(View, obj5);
      obj7.children = items1;
      return closure_1_11(collapsed, obj7);
    };
