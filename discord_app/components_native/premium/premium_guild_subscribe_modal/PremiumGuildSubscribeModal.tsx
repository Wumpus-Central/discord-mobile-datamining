// discord_app/components_native/premium/premium_guild_subscribe_modal/PremiumGuildSubscribeModal.tsx
import _slicedToArray from "_slicedToArray";
import PendingCancellationWarning from "PendingCancellationWarning";
import handleThemeChange from "handleThemeChange";
import { PremiumGuildSubscribeModalScenes as closure_6 } from "PremiumGuildSubscribeModalScenes";
import { UserSettingsSections } from "ME";
import { jsx } from "useBackPressHandler";
import { NavigationStack } from "../../../design/components/Navigator/native/Navigator.native.tsx";
import { useInitialValue } from "../../../hooks/useInitialValue.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { useBackPressHandler } from "../../../modules/routing/native/useBackPressHandler.tsx";

const require = arg1;
let result = require("handleThemeChange").fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/PremiumGuildSubscribeModal.tsx");

export default function PremiumGuildSubscribeModal(arg0) {
  let _slicedToArray;
  let dependencyMap;
  let importDefault;
  let require;
  ({ guildId: require, guildBoostSlots: importDefault, intent: dependencyMap, onResult: _slicedToArray } = arg0);
  let first;
  let handleThemeChange;
  let tmp = useInitialValue(() => {
    const items = [];
    if (null != closure_0) {
      let arr1 = closure_1;
      if (null != closure_1) {
        if (arr1.length > 0) {
          let obj = { name: null, params: null };
          obj[0] = outer1_6.CONFIRMATION;
          obj = { guildId: null, guildBoostSlots: null, intent: null, onResult: null };
          obj[0] = tmp;
          obj[1] = arr1;
          obj[2] = closure_2;
          obj[3] = _slicedToArray;
          obj[1] = obj;
          items.push(obj);
        }
        const obj1 = { initialStack: null, screens: null };
        obj1[0] = items;
        const obj2 = {};
        let obj3 = { headerShown: false, render: null };
        obj3[1] = function render(arg0) {
          const merged = Object.assign(arg0);
          return callback3(callback2(5154), {});
        };
        obj2[outer1_6.GUILD_SELECT] = obj3;
        const obj4 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
        obj4[0] = outer1_0(outer1_2[7]).getHeaderCloseButton(outer1_0(outer1_2[8]).closeApplyBoostModal);
        obj4[1] = function headerRight() {
          let obj = callback(1363);
          if (obj.isThemeDark(theme.theme)) {
            let tmp4Result = tmp4(6011);
          } else {
            tmp4Result = tmp4(6012);
          }
          obj = { source: tmp4Result, IconComponent: tmp2(6013).SettingsIcon, accessibilityLabel: null, accessibilityHint: null, onPress: null };
          const intl = tmp2(1236).intl;
          obj[2] = intl.string(callback(1236).t["3D5yo/"]);
          const intl2 = tmp2(1236).intl;
          obj[3] = intl2.string(callback(1236).t["+CbP2v"]);
          obj[4] = function onPress() {
            let obj = callback(6015);
            obj = { destinationPane: constants.GUILD_BOOSTING };
            const result = obj.trackUserSettingsPaneViewed(obj);
            callback(5151).closeApplyBoostModal();
            const obj3 = callback(5151);
            obj = { screen: constants.GUILD_BOOSTING };
            callback(6018).openUserSettings(obj);
          };
          return closure_8(callback(6010).HeaderActionButton, obj);
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
            tmpResult = tmp(callback(1297).LegacyText, obj);
          }
          obj[1] = tmpResult;
          return closure_8(callback(5270).NavigatorHeader, obj);
        };
        obj4[3] = function render(arg0) {
          const merged = Object.assign(arg0);
          return callback3(callback2(6020), {});
        };
        obj2[outer1_6.OVERVIEW] = obj4;
        const obj5 = { headerLeft: null, headerTitle: null, render: null };
        const obj11 = outer1_0(outer1_2[7]);
        obj5[0] = outer1_0(outer1_2[7]).getHeaderCloseButton(outer1_0(outer1_2[8]).closeApplyBoostModal);
        let intl = outer1_0(outer1_2[14]).intl;
        obj5[1] = intl.string(outer1_0(outer1_2[14]).t.VJEVbu);
        obj5[2] = function render(arg0) {
          const merged = Object.assign(arg0);
          return callback3(callback2(12884), {});
        };
        obj2[outer1_6.CONFIRMATION] = obj5;
        obj1[1] = obj2;
        return obj1;
      }
    }
    if (null != closure_0) {
      const obj6 = { name: null, params: null };
      obj6[0] = outer1_6.OVERVIEW;
      const obj7 = { guildId: null, guildBoostSlots: null, intent: null, onResult: null };
      obj7[0] = tmp;
      obj7[1] = closure_1;
      obj7[2] = closure_2;
      obj7[3] = _slicedToArray;
      obj6[1] = obj7;
      items.push(obj6);
    } else {
      obj = { name: null, params: null };
      obj[0] = outer1_6.GUILD_SELECT;
      const obj8 = { guildBoostSlots: null, intent: null, onResult: null };
      obj8[0] = closure_1;
      obj8[1] = closure_2;
      obj8[2] = _slicedToArray;
      obj[1] = obj8;
      arr1 = items.push(obj);
    }
  });
  const initialStack = tmp.initialStack;
  const tmp2 = callback(first.useState(initialStack[0].name), 2);
  first = tmp2[0];
  handleThemeChange = tmp2[1];
  let items = [first];
  useBackPressHandler(first.useCallback(() => {
    let flag = first === outer1_6.GUILD_SELECT;
    if (flag) {
      outer1_0(outer1_2[8]).closeApplyBoostModal();
      flag = true;
      const obj = outer1_0(outer1_2[8]);
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