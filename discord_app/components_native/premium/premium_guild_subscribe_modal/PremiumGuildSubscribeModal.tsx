// === Module 5960: PremiumGuildSubscribeModal ===

// Module 5960 (PremiumGuildSubscribeModal)
import util from "util" /* 1126 */;
import useBackPressHandlerDefault from "useBackPressHandler" /* 5372 */;
import BoostingActionCreators from "BoostingActionCreators" /* 5959 */;
import useInitialValueDefault from "useInitialValue" /* 6169 */;
import NavigatorHeader from "NavigatorHeader" /* 6200 */;
import Navigator from "Navigator" /* 6687 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1205 */;

require = fn;
let closure_6 = fn(5961).PremiumGuildSubscribeModalScenes;
const UserSettingsSections = fn(1085).UserSettingsSections;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/PremiumGuildSubscribeModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumGuildSubscribeModal(guildId) {
  const cResult = guildId(intent[21]).c(12);
  guildId = guildId.guildId;
  const guildBoostSlots = guildId.guildBoostSlots;
  intent = guildId.intent;
  _slicedToArray = onResult;
  if (cResult[0] === guildBoostSlots) {
    if (cResult[1] === guildId) {
      if (cResult[2] === intent) {
        if (cResult[3] === onResult) {
          let tmp4 = cResult[4];
        }
        ({ initialStack, screens } = guildBoostSlots(tmp2[22])(tmp4));
        [first, ThemeStore] = first.useState(initialStack[0].name);
        if (cResult[5] !== first) {
          const fn2 = function b() {
            let flag = first === constants.GUILD_SELECT;
            if (flag) {
              BoostingActionCreators.closeApplyBoostModal();
              flag = true;
            }
            return flag;
          };
          cResult[5] = first;
          cResult[6] = fn2;
          let tmp11 = fn2;
        } else {
          tmp11 = cResult[6];
        }
        guildBoostSlots(tmp2[23])(tmp11);
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          let intl = tmp(tmp2[14]).intl;
          const stringResult = intl.string(tmp(tmp2[14]).t["13/7kX"]);
          class E {
            constructor(arg0) {
              tmp = undefined;
              if (guildId != null) {
                tmp = guildId.routes[guildId.index];
              }
              if (null != tmp) {
                tmp2 = closure_5;
                tmp3 = closure_5(tmp.name);
              }
              return;
            }
          }
          cResult[7] = stringResult;
          cResult[8] = E;
          let tmp15 = E;
          let tmp14 = stringResult;
        } else {
          tmp14 = cResult[7];
          tmp15 = cResult[8];
        }
        if (cResult[9] === initialStack) {
          if (cResult[10] === screens) {
            let tmp17 = cResult[11];
          }
          return tmp17;
        }
        let obj2 = { screens, initialRouteStack: initialStack, headerBackTitle: tmp14, onStateChange: tmp15 };
        const tmp19 = jsx(tmp(tmp2[24]).Navigator, { screens, initialRouteStack: initialStack, headerBackTitle: tmp14, onStateChange: tmp15 });
        cResult[9] = initialStack;
        cResult[10] = screens;
        cResult[11] = tmp19;
        tmp17 = tmp19;
        const tmp6 = guildBoostSlots(tmp2[22])(tmp4);
      }
    }
  }
  const fn = function o() {
    const items = [];
    if (null != guildId) {
      if (null != guildBoostSlots) {
        if (guildBoostSlots.length > 0) {
          const obj2 = { name: constants.CONFIRMATION, params: null };
          const obj3 = { guildId, guildBoostSlots, intent, onResult };
          obj2.params = obj3;
          items.push(obj2);
        }
        const obj4 = { initialStack: items, screens: null };
        const obj5 = {};
        const obj6 = {
          headerShown: false,
          render(arg0) {
                const merged = Object.assign(arg0);
                return closure_1_8(guildBoostSlots(5962), {});
              }
        };
        obj5[constants.GUILD_SELECT] = obj6;
        const obj7 = {
          headerLeft: NavigatorHeader.getHeaderCloseButton(BoostingActionCreators.closeApplyBoostModal),
          headerRight: function renderSettingsButton() {
                if (obj.isThemeDark(theme.theme)) {
                  let tmp4Result = guildBoostSlots(7089);
                } else {
                  tmp4Result = guildBoostSlots(7090);
                }
                let obj2 = { source: tmp4Result, IconComponent: guildId(7091).SettingsIcon, accessibilityLabel: null, accessibilityHint: null, onPress: null };
                const intl = guildId(1126).intl;
                obj2.accessibilityLabel = intl.string(guildId(1126).t["3D5yo/"]);
                const intl2 = guildId(1126).intl;
                obj2.accessibilityHint = intl2.string(guildId(1126).t["+CbP2v"]);
                obj2.onPress = function onPress() {
                  const result = closure_1_0(6683).trackUserSettingsPaneViewed({ destinationPane: constants.GUILD_BOOSTING });
                  const obj = closure_1_0(6683);
                  const obj2 = { destinationPane: constants.GUILD_BOOSTING };
                  closure_1_0(5959).closeApplyBoostModal();
                  const obj3 = closure_1_0(5959);
                  closure_1_0(7093).openUserSettings({ screen: constants.GUILD_BOOSTING });
                };
                return closure_1_8(guildId(7088).HeaderActionButton, obj2);
              },
          headerTitle(children) {
                children = children.children;
                const obj = { title: null, subtitle: null };
                const intl = guildId(1126).intl;
                obj.title = intl.string(guildId(1126).t.VJEVbu);
                let tmpResult = null;
                if (children.length > 0) {
                  const obj2 = { children };
                  tmpResult = closure_1_8(guildId(1200).LegacyText, obj2);
                }
                obj.subtitle = tmpResult;
                return closure_1_8(guildId(6200).NavigatorHeader, obj);
              },
          render(arg0) {
                const merged = Object.assign(arg0);
                return closure_1_8(guildBoostSlots(7095), {});
              }
        };
        obj5[constants.OVERVIEW] = obj7;
        const obj8 = { headerLeft: null, headerTitle: null, render: null };
        obj8.headerLeft = NavigatorHeader.getHeaderCloseButton(BoostingActionCreators.closeApplyBoostModal);
        const intl = util.intl;
        obj8.headerTitle = intl.string(util.t.VJEVbu);
        obj8.render = function render(arg0) {
          const merged = Object.assign(arg0);
          return closure_1_8(guildBoostSlots(13877), {});
        };
        obj5[constants.CONFIRMATION] = obj8;
        obj4.screens = obj5;
        return obj4;
      }
    }
    if (null != guildId) {
      const obj9 = { name: constants.OVERVIEW, params: null };
      const obj10 = { guildId, guildBoostSlots, intent, onResult };
      obj9.params = obj10;
      items.push(obj9);
    } else {
      const obj = { name: constants.GUILD_SELECT, params: null };
      const obj12 = { guildBoostSlots, intent, onResult };
      obj.params = obj12;
      items.push(obj);
    }
  };
  cResult[0] = guildBoostSlots;
  cResult[1] = guildId;
  cResult[2] = intent;
  cResult[3] = guildId.onResult;
  cResult[4] = fn;
  tmp4 = fn;
  let obj = guildId(intent[21]);
}) : (function PremiumGuildSubscribeModal(arg0) {
  ({ guildId: require, guildBoostSlots: importDefault, intent: dependencyMap, onResult: _slicedToArray } = arg0);
  first = undefined;
  closure_5 = undefined;
  let tmp = useInitialValueDefault(() => {
    const items = [];
    if (null != guildId) {
      if (null != guildBoostSlots) {
        if (guildBoostSlots.length > 0) {
          let obj2 = { name: constants.CONFIRMATION, params: null };
          let obj3 = { guildId, guildBoostSlots, intent, onResult };
          obj2.params = obj3;
          items.push(obj2);
        }
        const obj4 = { initialStack: items, screens: null };
        const obj5 = {};
        const obj6 = {
          headerShown: false,
          render(arg0) {
                const merged = Object.assign(arg0);
                return closure_1_8(guildBoostSlots(5962), {});
              }
        };
        obj5[constants.GUILD_SELECT] = obj6;
        const obj7 = {
          headerLeft: NavigatorHeader.getHeaderCloseButton(BoostingActionCreators.closeApplyBoostModal),
          headerRight: function renderSettingsButton() {
                if (obj.isThemeDark(theme.theme)) {
                  let tmp4Result = guildBoostSlots(7089);
                } else {
                  tmp4Result = guildBoostSlots(7090);
                }
                let obj2 = { source: tmp4Result, IconComponent: guildId(7091).SettingsIcon, accessibilityLabel: null, accessibilityHint: null, onPress: null };
                const intl = guildId(1126).intl;
                obj2.accessibilityLabel = intl.string(guildId(1126).t["3D5yo/"]);
                const intl2 = guildId(1126).intl;
                obj2.accessibilityHint = intl2.string(guildId(1126).t["+CbP2v"]);
                obj2.onPress = function onPress() {
                  const result = closure_1_0(6683).trackUserSettingsPaneViewed({ destinationPane: constants.GUILD_BOOSTING });
                  const obj = closure_1_0(6683);
                  const obj2 = { destinationPane: constants.GUILD_BOOSTING };
                  closure_1_0(5959).closeApplyBoostModal();
                  const obj3 = closure_1_0(5959);
                  closure_1_0(7093).openUserSettings({ screen: constants.GUILD_BOOSTING });
                };
                return closure_1_8(guildId(7088).HeaderActionButton, obj2);
              },
          headerTitle(children) {
                children = children.children;
                const obj = { title: null, subtitle: null };
                const intl = guildId(1126).intl;
                obj.title = intl.string(guildId(1126).t.VJEVbu);
                let tmpResult = null;
                if (children.length > 0) {
                  const obj2 = { children };
                  tmpResult = closure_1_8(guildId(1200).LegacyText, obj2);
                }
                obj.subtitle = tmpResult;
                return closure_1_8(guildId(6200).NavigatorHeader, obj);
              },
          render(arg0) {
                const merged = Object.assign(arg0);
                return closure_1_8(guildBoostSlots(7095), {});
              }
        };
        obj5[constants.OVERVIEW] = obj7;
        const obj8 = { headerLeft: null, headerTitle: null, render: null };
        obj8.headerLeft = NavigatorHeader.getHeaderCloseButton(BoostingActionCreators.closeApplyBoostModal);
        let intl = util.intl;
        obj8.headerTitle = intl.string(util.t.VJEVbu);
        obj8.render = function render(arg0) {
          const merged = Object.assign(arg0);
          return closure_1_8(guildBoostSlots(13877), {});
        };
        obj5[constants.CONFIRMATION] = obj8;
        obj4.screens = obj5;
        return obj4;
      }
    }
    if (null != guildId) {
      const obj9 = { name: constants.OVERVIEW, params: null };
      const obj10 = { guildId, guildBoostSlots, intent, onResult };
      obj9.params = obj10;
      items.push(obj9);
    } else {
      let obj = { name: constants.GUILD_SELECT, params: null };
      const obj12 = { guildBoostSlots, intent, onResult };
      obj.params = obj12;
      items.push(obj);
    }
  });
  const initialStack = tmp.initialStack;
  [first, closure_5] = first.useState(initialStack[0].name);
  let items = [first];
  useBackPressHandlerDefault(first.useCallback(() => {
    let flag = first === constants.GUILD_SELECT;
    if (flag) {
      BoostingActionCreators.closeApplyBoostModal();
      flag = true;
    }
    return flag;
  }, items));
  let obj = { screens: tmp.screens, initialRouteStack: initialStack, headerBackTitle: null, onStateChange: null };
  let intl = util.intl;
  obj.headerBackTitle = intl.string(util.t["13/7kX"]);
  obj.onStateChange = function onStateChange(arg0) {
    let tmp;
    if (arg0 != null) {
      tmp = arg0.routes[arg0.index];
    }
    if (null != tmp) {
      closure_5(tmp.name);
    }
  };
  return jsx(Navigator.Navigator, { screens: tmp.screens, initialRouteStack: initialStack, headerBackTitle: null, onStateChange: null });
});