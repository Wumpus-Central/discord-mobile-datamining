// === Module 6711: PremiumGuildSubscribeModal ===

// Module 6711 (PremiumGuildSubscribeModal)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useBackPressHandlerDefault from "useBackPressHandler" /* 4732 */;
import NavigationStack from "NavigationStack" /* 6312 */;
import HeaderBackImage from "HeaderBackImage" /* 6314 */;
import openApplyBoostModal from "openApplyBoostModal" /* 6710 */;
import useInitialValueDefault from "useInitialValue" /* 7127 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import handleThemeChange from "handleThemeChange" /* 1302 */;
import { PremiumGuildSubscribeModalScenes as closure_6 } from "PremiumGuildSubscribeModalScenes" /* 6712 */;
import { UserSettingsSections } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
let result = require("obj132").fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/PremiumGuildSubscribeModal.tsx");

export default function PremiumGuildSubscribeModal(arg0) {
  ({ guildId: require, guildBoostSlots: importDefault, intent: dependencyMap, onResult: closure_3 } = arg0);
  let first;
  let tmp = useInitialValueDefault(() => {
    const items = [];
    if (null != closure_0) {
      let arr1 = closure_1;
      if (null != closure_1) {
        if (arr1.length > 0) {
          let obj = { name: null, params: null };
          obj[0] = closure_1_6.CONFIRMATION;
          obj = { guildId: null, guildBoostSlots: null, intent: null, onResult: null };
          obj[0] = closure_0;
          obj[1] = arr1;
          obj[2] = closure_2;
          obj[3] = closure_3;
          obj[1] = obj;
          items.push(obj);
        }
        obj1 = { initialStack: null, screens: null };
        obj1[0] = items;
        const obj2 = {};
        let obj3 = { headerShown: false, render: null };
        obj3[1] = function render(arg0) {
          const merged = Object.assign(arg0);
          return callback3(callback2(6713), {});
        };
        obj2[closure_1_6.GUILD_SELECT] = obj3;
        const obj4 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
        obj4[0] = HeaderBackImage.getHeaderCloseButton(openApplyBoostModal.closeApplyBoostModal);
        obj4[1] = function headerRight() {
          let obj = callback(1363);
          if (obj.isThemeDark(theme.theme)) {
            let tmp4Result = callback(7353);
          } else {
            tmp4Result = callback(7354);
          }
          obj = { source: tmp4Result, IconComponent: callback(7355).SettingsIcon, accessibilityLabel: null, accessibilityHint: null, onPress: null };
          const intl = callback(1236).intl;
          obj[2] = intl.string(callback(1236).t["3D5yo/"]);
          const intl2 = callback(1236).intl;
          obj[3] = intl2.string(callback(1236).t["+CbP2v"]);
          obj[4] = function onPress() {
            callback(7357);
            let obj = { destinationPane: constants.GUILD_BOOSTING };
            const result = obj.trackUserSettingsPaneViewed(obj);
            callback(6710).closeApplyBoostModal();
            const obj3 = callback(6710);
            obj = { screen: constants.GUILD_BOOSTING };
            callback(7360).openUserSettings(obj);
          };
          return callback2(callback(5432).HeaderActionButton, obj);
        };
        obj4[2] = function headerTitle(children) {
          children = children.children;
          let obj = { title: null, subtitle: null };
          const intl = callback(1236).intl;
          obj[0] = intl.string(callback(1236).t.VJEVbu);
          let tmpResult = null;
          if (children.length > 0) {
            obj = { children: null };
            obj[0] = children;
            tmpResult = callback2(callback(1297).LegacyText, obj);
          }
          obj[1] = tmpResult;
          return callback2(callback(6314).NavigatorHeader, obj);
        };
        obj4[3] = function render(arg0) {
          const merged = Object.assign(arg0);
          return callback3(callback2(7362), {});
        };
        obj2[closure_1_6.OVERVIEW] = obj4;
        const obj5 = { headerLeft: null, headerTitle: null, render: null };
        obj5[0] = HeaderBackImage.getHeaderCloseButton(openApplyBoostModal.closeApplyBoostModal);
        let intl = getSystemLocale.intl;
        obj5[1] = intl.string(getSystemLocale.t.VJEVbu);
        obj5[2] = function render(arg0) {
          const merged = Object.assign(arg0);
          return callback3(callback2(13039), {});
        };
        obj2[closure_1_6.CONFIRMATION] = obj5;
        obj1[1] = obj2;
        return obj1;
      }
    }
    if (null != closure_0) {
      const obj6 = { name: null, params: null };
      obj6[0] = closure_1_6.OVERVIEW;
      const obj7 = { guildId: null, guildBoostSlots: null, intent: null, onResult: null };
      obj7[0] = closure_0;
      obj7[1] = closure_1;
      obj7[2] = closure_2;
      obj7[3] = closure_3;
      obj6[1] = obj7;
      items.push(obj6);
    } else {
      obj = { name: null, params: null };
      obj[0] = closure_1_6.GUILD_SELECT;
      const obj8 = { guildBoostSlots: null, intent: null, onResult: null };
      obj8[0] = closure_1;
      obj8[1] = closure_2;
      obj8[2] = closure_3;
      obj[1] = obj8;
      arr1 = items.push(obj);
    }
  });
  const initialStack = tmp.initialStack;
  const tmp2 = callback(first.useState(initialStack[0].name), 2);
  first = tmp2[0];
  closure_5 = tmp2[1];
  let items = [first];
  useBackPressHandlerDefault(first.useCallback(() => {
    let flag = first === closure_1_6.GUILD_SELECT;
    if (flag) {
      openApplyBoostModal.closeApplyBoostModal();
      flag = true;
    }
    return flag;
  }, items));
  let obj = { screens: tmp.screens, initialRouteStack: initialStack, headerBackTitle: null, onStateChange: null };
  let intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["13/7kX"]);
  obj[3] = function onStateChange(arg0) {
    let tmp;
    if (arg0 != null) {
      tmp = arg0.routes[arg0.index];
    }
    if (null != tmp) {
      callback(tmp.name);
    }
  };
  return jsx(NavigationStack.Navigator, { screens: tmp.screens, initialRouteStack: initialStack, headerBackTitle: null, onStateChange: null });
};