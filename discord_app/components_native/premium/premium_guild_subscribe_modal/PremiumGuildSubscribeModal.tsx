// === Module 5435: PremiumGuildSubscribeModal ===

// Module 5435 (PremiumGuildSubscribeModal)
import util from "util" /* 1114 */;
import useBackPressHandlerDefault from "useBackPressHandler" /* 4972 */;
import actions_BoostingActionCreators from "actions/BoostingActionCreators" /* 5434 */;
import useInitialValueDefault from "useInitialValue" /* 5598 */;
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import Navigator from "Navigator" /* 7000 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1183 */;

require = fn;
let closure_6 = fn(5436).PremiumGuildSubscribeModalScenes;
const UserSettingsSections = fn(1074).UserSettingsSections;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/PremiumGuildSubscribeModal.tsx");

export default function PremiumGuildSubscribeModal(arg0) {
  ({ guildId: require, guildBoostSlots: importDefault, intent: dependencyMap, onResult: _slicedToArray } = arg0);
  let first;
  let tmp = useInitialValueDefault(() => {
    const items = [];
    if (null != guildId) {
      let arr1 = guildBoostSlots;
      if (null != guildBoostSlots) {
        if (arr1.length > 0) {
          let obj = { name: constants.CONFIRMATION, params: null };
          obj = { guildId, guildBoostSlots: arr1, intent, onResult };
          obj.params = obj;
          items.push(obj);
        }
        const obj1 = { initialStack: items, screens: null };
        const obj2 = {};
        let obj3 = {
          headerShown: false,
          render(arg0) {
                const merged = Object.assign(arg0);
                return closure_1_8(guildBoostSlots(5437), {});
              }
        };
        obj2[constants.GUILD_SELECT] = obj3;
        const obj4 = {
          headerLeft: NavigatorHeader.getHeaderCloseButton(actions_BoostingActionCreators.closeApplyBoostModal),
          headerRight() {
                let obj = guildId(4411);
                if (obj.isThemeDark(theme.theme)) {
                  let tmp4Result = guildBoostSlots(7378);
                } else {
                  tmp4Result = guildBoostSlots(7379);
                }
                obj = { source: tmp4Result, IconComponent: guildId(7380).SettingsIcon, accessibilityLabel: null, accessibilityHint: null, onPress: null };
                const intl = guildId(1114).intl;
                obj.accessibilityLabel = intl.string(guildId(1114).t["3D5yo/"]);
                const intl2 = guildId(1114).intl;
                obj.accessibilityHint = intl2.string(guildId(1114).t["+CbP2v"]);
                obj.onPress = function onPress() {
                  closure_1_0(6995);
                  let obj = { destinationPane: constants.GUILD_BOOSTING };
                  const result = obj.trackUserSettingsPaneViewed(obj);
                  closure_1_0(5434).closeApplyBoostModal();
                  const obj3 = closure_1_0(5434);
                  obj = { screen: constants.GUILD_BOOSTING };
                  closure_1_0(7382).openUserSettings(obj);
                };
                return closure_1_8(guildId(7377).HeaderActionButton, obj);
              },
          headerTitle(children) {
                children = children.children;
                let obj = { title: null, subtitle: null };
                const intl = guildId(1114).intl;
                obj.title = intl.string(guildId(1114).t.VJEVbu);
                let tmpResult = null;
                if (children.length > 0) {
                  obj = { children };
                  tmpResult = closure_1_8(guildId(1178).LegacyText, obj);
                }
                obj.subtitle = tmpResult;
                return closure_1_8(guildId(5624).NavigatorHeader, obj);
              },
          render(arg0) {
                const merged = Object.assign(arg0);
                return closure_1_8(guildBoostSlots(7384), {});
              }
        };
        obj2[constants.OVERVIEW] = obj4;
        const obj5 = { headerLeft: null, headerTitle: null, render: null };
        obj5.headerLeft = NavigatorHeader.getHeaderCloseButton(actions_BoostingActionCreators.closeApplyBoostModal);
        let intl = util.intl;
        obj5.headerTitle = intl.string(util.t.VJEVbu);
        obj5.render = function render(arg0) {
          const merged = Object.assign(arg0);
          return closure_1_8(guildBoostSlots(13606), {});
        };
        obj2[constants.CONFIRMATION] = obj5;
        obj1.screens = obj2;
        return obj1;
      }
    }
    if (null != guildId) {
      const obj6 = { name: constants.OVERVIEW, params: null };
      const obj7 = { guildId, guildBoostSlots, intent, onResult };
      obj6.params = obj7;
      items.push(obj6);
    } else {
      obj = { name: constants.GUILD_SELECT, params: null };
      const obj8 = { guildBoostSlots, intent, onResult };
      obj.params = obj8;
      arr1 = items.push(obj);
    }
  });
  const initialStack = tmp.initialStack;
  const tmp2 = _slicedToArray(first.useState(initialStack[0].name), 2);
  first = tmp2[0];
  closure_5 = tmp2[1];
  let items = [first];
  useBackPressHandlerDefault(first.useCallback(() => {
    let flag = first === constants.GUILD_SELECT;
    if (flag) {
      actions_BoostingActionCreators.closeApplyBoostModal();
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
};