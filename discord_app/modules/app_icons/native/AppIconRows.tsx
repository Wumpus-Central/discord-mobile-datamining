// discord_app/modules/app_icons/native/AppIconRows.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00019_react.js";
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react3 from "../../../../_runtime/00576_react.js";
import intl3 from "../../../intl/index.native.tsx";
import PremiumTypeUtils from "../../../utils/PremiumTypeUtils.tsx";
import AppIconTypes from "../AppIconTypes.tsx";
import AppIconUtils from "AppIconUtils.tsx";
import AppIconRowDefault from "AppIconRow/AppIconRow.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import _objectDestructuringEmpty from "../../../../_runtime/11884__objectDestructuringEmpty.js";
import UserStore from "../../../stores/UserStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const react = react2;
let dependencyMap, onSelect;

let c10;
let c9;
let unpackModuleId;
const View = react_native.View;
const createElement = react2.createElement;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles({ container: { padding: 16 }, bottomUpsellPadding: { paddingBottom: 56 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let icons;
      let obj2;
      let onLongPress;
      let showEasterEgg;
      let title;
      let tmp10;
      let tmp = obj2;
      const obj = obj2(576);
      const cResult = obj.c(11);
      _objectDestructuringEmpty(arg0);
      obj2 = assign({}, arg0);
      const tmp6 = closure_12();
      [importDefault, dependencyMap] = onLongPress(react.useState(false), 2);
      ({ icons, title } = obj2);
      onLongPress(react.useState(false), 2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function p(arg0) {
          let tmp = null;
          if (arg0 === AppIconTypes.FreemiumAppIconIds.DEFAULT) {
            tmp = dependencyMap(true);
          }
          return tmp;
        };
        cResult[0] = fn;
        onLongPress = fn;
      } else {
        onLongPress = cResult[0];
      }
      const container = tmp6.container;
      const TableRowGroup = tmp(6081).TableRowGroup;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.N4YDao);
        cResult[1] = stringResult;
        tmp10 = stringResult;
      } else {
        tmp10 = cResult[1];
      }
      const mapped = icons.map((id) => {
        AppIconRowDefault;
        const merged = Object.assign(obj2);
        return <tmp key={id.id} icon={id} showEasterEgg={importDefault} onLongPress={onLongPress} />;
      });
      if (cResult[2] === TableRowGroup) {
        if (cResult[3] === tmp10) {
          if (cResult[4] === mapped) {
            let tmp13;
            if (cResult[5] === title) {
              tmp13 = cResult[6];
            }
            if (cResult[7] === View) {
              if (cResult[8] === tmp6.container) {
                let tmp15;
                if (cResult[9] === tmp13) {
                  tmp15 = cResult[10];
                }
                return tmp15;
              }
            }
            const obj4 = { style: container, children: tmp13 };
            const tmp17 = closure_9(View, obj4);
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
    }
  : (arg0) => {
      let TableRowGroup;
      let _undefined;
      let c1;
      let c2;
      let intl;
      let obj2;
      let showEasterEgg;
      if (arg0 == null) {
        throw new TypeError("Cannot destructure 'undefined' or 'null'.");
      } else {
        let tmp = arg0;
        let merged = Object.assign(arg0, undefined);
        c1 = undefined;
        dependencyMap = undefined;
        function onLongPress(react) {
          let tmp = null;
          if (react === AppIconTypes.FreemiumAppIconIds.DEFAULT) {
            tmp = _undefined(true);
          }
          return tmp;
        }
        const tmp4 = closure_12();
        [c1, c2] = onLongPress(react.useState(false), 2);
        const icons = merged.icons;
        const obj = { style: tmp4.container, children: closure_9(TableRowGroup, obj2) };
        obj2 = {
          title: merged.title,
          accessibilityRole: "radiogroup",
          accessibilityLabel: intl.string(merged(1126).t.N4YDao),
          hasIcons: true,
          children: icons.map((id) => {
            AppIconRowDefault;
            merged = Object.assign(merged);
            return <tmp key={id.id} icon={id} showEasterEgg={showEasterEgg} onLongPress={onLongPress} />;
          }),
        };
        onLongPress(react.useState(false), 2);
        TableRowGroup = merged(6081).TableRowGroup;
        intl = merged(1126).intl;
        return closure_9(View, obj);
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onSelect) => {
      let currentAppIcon;
      let currentUser;
      let intl;
      let items1;
      let limitedTimeAppIcons;
      let officialAppIcons;
      let tmp10;
      let tmp12;
      let tmp6;
      let tmp7;
      const obj = react3;
      const cResult = obj.c(26);
      onSelect = onSelect.onSelect;
      const tmp4 = closure_12();
      const obj2 = AppIconUtils;
      const appIcons = obj2.useAppIcons();
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
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
      if (cResult[2] !== stateFromStores) {
        const tmpResult2 = PremiumTypeUtils;
        const isPremiumResult = tmpResult2.isPremium(stateFromStores);
        cResult[2] = stateFromStores;
        cResult[3] = isPremiumResult;
        tmp10 = isPremiumResult;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== limitedTimeAppIcons) {
        const tmp13 =
          limitedTimeAppIcons.length > 0 && limitedTimeAppIcons.filter((isHidden) => !isHidden.isHidden).length > 0;
        cResult[4] = limitedTimeAppIcons;
        cResult[5] = tmp13;
        tmp12 = tmp13;
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[6] === currentAppIcon) {
        if (cResult[7] === tmp12) {
          if (cResult[8] === tmp10) {
            if (cResult[9] === limitedTimeAppIcons) {
              let tmp14;
              let tmp19;
              if (cResult[10] === onSelect) {
                tmp14 = cResult[11];
              }
              if (cResult[12] !== tmp12) {
                let stringResult;
                if (tmp12) {
                  const intl2 = intl3.intl;
                  stringResult = intl2.string(intl3.t.Ipxkog);
                }
                cResult[12] = tmp12;
                cResult[13] = stringResult;
                tmp19 = stringResult;
              } else {
                tmp19 = cResult[13];
              }
              if (cResult[14] === currentAppIcon) {
                if (cResult[15] === tmp10) {
                  if (cResult[16] === officialAppIcons) {
                    if (cResult[17] === onSelect) {
                      let tmp21;
                      if (cResult[18] === tmp19) {
                        tmp21 = cResult[19];
                      }
                      if (cResult[20] === (!tmp10 && tmp4.bottomUpsellPadding)) {
                        let tmp25;
                        if (cResult[21] === tmp21) {
                          tmp25 = cResult[22];
                        }
                        if (cResult[23] === tmp14) {
                          let tmp29;
                          if (cResult[24] === tmp25) {
                            tmp29 = cResult[25];
                          }
                          return tmp29;
                        }
                        const obj3 = { children: items1 };
                        items1 = [tmp14, tmp25];
                        const tmp32 = unpackModuleId(authStore, obj3);
                        cResult[23] = tmp14;
                        cResult[24] = tmp25;
                        cResult[25] = tmp32;
                        tmp29 = tmp32;
                      }
                      const obj4 = { style: !tmp10 && tmp4.bottomUpsellPadding, children: tmp21 };
                      const tmp28 = React4(View, obj4);
                      cResult[20] = !tmp10 && tmp4.bottomUpsellPadding;
                      cResult[21] = tmp21;
                      cResult[22] = tmp28;
                      tmp25 = tmp28;
                    }
                  }
                }
              }
              const obj5 = { hasNitro: tmp10, icons: officialAppIcons, currentAppIcon, title: tmp19, onSelect };
              const tmp24 = React4(closure_13, obj5);
              cResult[14] = currentAppIcon;
              cResult[15] = tmp10;
              cResult[16] = officialAppIcons;
              cResult[17] = onSelect;
              cResult[18] = tmp19;
              cResult[19] = tmp24;
              tmp21 = tmp24;
            }
          }
        }
      }
      let tmp15 = null;
      if (tmp12) {
        const obj6 = {
          hasNitro: tmp10,
          icons: limitedTimeAppIcons,
          currentAppIcon,
          title: intl.string(intl3.t.anqaFd),
          onSelect,
        };
        intl = intl3.intl;
        tmp15 = React4(closure_13, obj6);
      }
      cResult[6] = currentAppIcon;
      cResult[7] = tmp12;
      cResult[8] = tmp10;
      cResult[9] = limitedTimeAppIcons;
      cResult[10] = onSelect;
      cResult[11] = tmp15;
      tmp14 = tmp15;
    }
  : (onSelect) => {
      let currentAppIcon;
      let currentUser;
      let intl;
      let limitedTimeAppIcons;
      let obj6;
      let officialAppIcons;
      let stringResult;
      onSelect = onSelect.onSelect;
      const tmp = closure_12();
      const obj = AppIconUtils;
      const appIcons = obj.useAppIcons();
      ({ limitedTimeAppIcons, currentAppIcon, officialAppIcons } = appIcons);
      const items = [UserStore];
      const obj2 = get_initialized;
      const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
      const obj3 = PremiumTypeUtils;
      const isPremiumResult = obj3.isPremium(stateFromStores);
      const tmp7 =
        limitedTimeAppIcons.length > 0 && limitedTimeAppIcons.filter((isHidden) => !isHidden.isHidden).length > 0;
      let tmp10 = null;
      if (tmp7) {
        const obj4 = {
          hasNitro: isPremiumResult,
          icons: limitedTimeAppIcons,
          currentAppIcon,
          title: intl.string(intl3.t.anqaFd),
          onSelect,
        };
        intl = intl3.intl;
        tmp10 = React4(closure_13, obj4);
      }
      const items1 = [tmp10];
      const bottomUpsellPadding = !isPremiumResult && tmp.bottomUpsellPadding;
      const obj5 = { style: bottomUpsellPadding, children: React4(closure_13, obj6) };
      obj6 = { hasNitro: isPremiumResult, icons: officialAppIcons, currentAppIcon, title: stringResult, onSelect };
      stringResult = undefined;
      if (tmp7) {
        const intl2 = intl3.intl;
        stringResult = intl2.string(intl3.t.Ipxkog);
      }
      const obj7 = { children: items1 };
      items1[1] = React4(View, obj5);
      return unpackModuleId(authStore, obj7);
    };
const result = size.fileFinishedImporting("modules/app_icons/native/AppIconRows.tsx");

export default tmp3;
