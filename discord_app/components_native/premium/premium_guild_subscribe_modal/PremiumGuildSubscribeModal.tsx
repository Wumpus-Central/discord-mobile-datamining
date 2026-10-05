// === Module 5613: PremiumGuildSubscribeModal ===

// Module 5613 (PremiumGuildSubscribeModal)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import BoostingActionCreators from "BoostingActionCreators" /* 5612 */;
import PremiumGuildSubscribeConstants from "PremiumGuildSubscribeConstants" /* 5614 */;
import useBackPressHandlerDefault from "useBackPressHandler" /* 5780 */;
import useInitialValueDefault from "useInitialValue" /* 5984 */;
import NavigatorHeader2 from "NavigatorHeader" /* 6010 */;
import Navigator2 from "Navigator" /* 6496 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let guildId;

let _slicedToArray = _slicedToArray_mod;
const constants = PremiumGuildSubscribeConstants.PremiumGuildSubscribeModalScenes;
const UserSettingsSections = Constants.UserSettingsSections;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let closure_5;
  let first;
  let initialStack;
  let intent;
  let obj2;
  let screens;
  let tmp17;
  let tmp = guildId;
  let obj = guildId(intent[21]);
  const cResult = obj.c(12);
  guildId = guildId.guildId;
  const guildBoostSlots = guildId.guildBoostSlots;
  intent = guildId.intent;
  _slicedToArray = onResult;
  if (cResult[0] === guildBoostSlots) {
    if (cResult[1] === guildId) {
      if (cResult[2] === intent) {
        let tmp4;
        let tmp15;
        let tmp14;
        if (cResult[3] === guildId.onResult) {
          tmp4 = cResult[4];
        }
        ({ initialStack, screens } = guildBoostSlots(intent[22])(tmp4));
        guildBoostSlots(intent[22])(tmp4);
        [first, ThemeStore] = first.useState(initialStack[0].name);
        const tmp5 = guildBoostSlots;
        if (cResult[5] !== first) {
          class B {
            constructor() {
              let flag = first === constants.GUILD_SELECT;
              if (flag) {
                const obj = BoostingActionCreators;
                obj.closeApplyBoostModal();
                flag = true;
              }
              return flag;
            }
          }
          cResult[5] = first;
          cResult[6] = B;
        } else {
          class B {
            constructor() {
              let flag = first === constants.GUILD_SELECT;
              if (flag) {
                const obj = BoostingActionCreators;
                obj.closeApplyBoostModal();
                flag = true;
              }
              return flag;
            }
          }
        }
        tmp5(intent[23])(B);
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          class B {
            constructor() {
              let flag = first === constants.GUILD_SELECT;
              if (flag) {
                const obj = BoostingActionCreators;
                obj.closeApplyBoostModal();
                flag = true;
              }
              return flag;
            }
          }
          const stringResult = obj2.string(tmp(intent[14]).t["13/7kX"]);
          class R {
            constructor(arg0) {
              let tmp;
              if (arg0 != null) {
                tmp = arg0.routes[arg0.index];
              }
              if (null != tmp) {
                closure_5(tmp.name);
              }
            }
          }
          cResult[7] = stringResult;
          cResult[8] = R;
          tmp15 = R;
          tmp14 = stringResult;
        } else {
          class B {
            constructor() {
              let flag = first === constants.GUILD_SELECT;
              if (flag) {
                const obj = BoostingActionCreators;
                obj.closeApplyBoostModal();
                flag = true;
              }
              return flag;
            }
          }
          tmp15 = cResult[8];
        }
        if (cResult[9] === initialStack) {
          class B {
            constructor() {
              let flag = first === constants.GUILD_SELECT;
              if (flag) {
                const obj = BoostingActionCreators;
                obj.closeApplyBoostModal();
                flag = true;
              }
              return flag;
            }
          }
          return tmp17;
        }
        const tmp19 = jsx(tmp(intent[24]).Navigator, { screens, initialRouteStack: initialStack, headerBackTitle: tmp14, onStateChange: tmp15 });
        cResult[9] = initialStack;
        cResult[10] = screens;
        cResult[11] = tmp19;
        tmp17 = tmp19;
      }
    }
  }
  const fn = function o() {
    let intl;
    let obj10;
    let obj11;
    let obj12;
    let obj13;
    let obj3;
    let obj5;
    const items = [];
    if (null != guildId) {
      if (null != guildBoostSlots) {
        if (guildBoostSlots.length > 0) {
          const obj2 = { name: constants.CONFIRMATION, params: obj3 };
          obj3 = { guildId, guildBoostSlots, intent, onResult: _slicedToArray };
          items.push(obj2);
        }
        const obj4 = { initialStack: items, screens: obj5 };
        obj5 = {};
        const obj6 = {
          headerShown: false,
          render(arg0) {
                const obj = {};
                const tmp = guildBoostSlots(intent[6]);
                const merged = Object.assign(arg0);
                return closure_1_8(tmp, obj);
              }
        };
        obj5[constants.GUILD_SELECT] = obj6;
        const OVERVIEW = constants.OVERVIEW;
        const obj7 = {
          headerLeft: obj11.getHeaderCloseButton(BoostingActionCreators.closeApplyBoostModal),
          headerRight() {
                let intl;
                let intl2;
                let tmp4Result;
                const HeaderActionButton = closure_1_0(intent[9]).HeaderActionButton;
                let obj = closure_1_0(intent[10]);
                if (obj.isThemeDark(theme.theme)) {
                  tmp4Result = guildBoostSlots(intent[11]);
                } else {
                  tmp4Result = guildBoostSlots(intent[12]);
                }
                let obj2 = {
                  source: tmp4Result,
                  IconComponent: closure_1_0(intent[13]).SettingsIcon,
                  accessibilityLabel: intl.string(closure_1_0(intent[14]).t["3D5yo/"]),
                  accessibilityHint: intl2.string(closure_1_0(intent[14]).t["+CbP2v"]),
                  onPress() {
                    const obj = closure_1_0(closure_1_2[15]);
                    const obj2 = { destinationPane: constants.GUILD_BOOSTING };
                    const result = obj.trackUserSettingsPaneViewed(obj2);
                    const obj3 = closure_1_0(closure_1_2[8]);
                    obj3.closeApplyBoostModal();
                    const obj4 = closure_1_0(closure_1_2[16]);
                    const obj5 = { screen: constants.GUILD_BOOSTING };
                    obj4.openUserSettings(obj5);
                  }
                };
                intl = closure_1_0(intent[14]).intl;
                intl2 = closure_1_0(intent[14]).intl;
                return closure_1_8(HeaderActionButton, obj2);
              },
          headerTitle(children) {
                let intl;
                let tmpResult;
                children = children.children;
                const obj = { title: intl.string(closure_1_0(intent[14]).t.VJEVbu), subtitle: tmpResult };
                const NavigatorHeader = closure_1_0(intent[7]).NavigatorHeader;
                intl = closure_1_0(intent[14]).intl;
                tmpResult = null;
                if (children.length > 0) {
                  const obj2 = { children };
                  tmpResult = closure_1_8(closure_1_0(intent[17]).LegacyText, obj2);
                }
                return closure_1_8(NavigatorHeader, obj);
              },
          render(arg0) {
                const obj = {};
                const tmp = guildBoostSlots(intent[18]);
                const merged = Object.assign(arg0);
                return closure_1_8(tmp, obj);
              }
        };
        obj5[OVERVIEW] = obj7;
        obj11 = NavigatorHeader2;
        const CONFIRMATION = constants.CONFIRMATION;
        const obj8 = {
          headerLeft: obj13.getHeaderCloseButton(BoostingActionCreators.closeApplyBoostModal),
          headerTitle: intl.string(intl3.t.VJEVbu),
          render(arg0) {
                const obj = {};
                const tmp = guildBoostSlots(intent[19]);
                const merged = Object.assign(arg0);
                return closure_1_8(tmp, obj);
              }
        };
        obj13 = NavigatorHeader2;
        intl = intl3.intl;
        obj5[CONFIRMATION] = obj8;
        return obj4;
      }
    }
    if (null != guildId) {
      const obj9 = { name: constants.OVERVIEW, params: obj10 };
      obj10 = { guildId, guildBoostSlots, intent, onResult: _slicedToArray };
      items.push(obj9);
    } else {
      const obj = { name: constants.GUILD_SELECT, params: obj12 };
      obj12 = { guildBoostSlots, intent, onResult: _slicedToArray };
      items.push(obj);
    }
  };
  cResult[0] = guildBoostSlots;
  cResult[1] = guildId;
  cResult[2] = intent;
  cResult[3] = guildId.onResult;
  cResult[4] = fn;
  tmp4 = fn;
}) : ((arg0) => {
  let closure_5;
  let first;
  let guildBoostSlots;
  let intent;
  let onResult;
  let require;
  ({ guildId: require, guildBoostSlots: importDefault, intent: dependencyMap, onResult: _slicedToArray } = arg0);
  first = undefined;
  closure_5 = undefined;
  let tmp = useInitialValueDefault(() => {
    let intl;
    let obj10;
    let obj11;
    let obj12;
    let obj13;
    let obj3;
    let obj5;
    let theme;
    const items = [];
    if (null != _require) {
      if (null != importDefault) {
        if (importDefault.length > 0) {
          let obj2 = { name: constants.CONFIRMATION, params: obj3 };
          obj3 = { guildId: _require, guildBoostSlots: importDefault, intent: dependencyMap, onResult: _slicedToArray };
          items.push(obj2);
        }
        let obj4 = { initialStack: items, screens: obj5 };
        obj5 = {};
        const obj6 = {
          headerShown: false,
          render(arg0) {
                const obj = {};
                const tmp = guildBoostSlots(intent[6]);
                const merged = Object.assign(arg0);
                return closure_1_8(tmp, obj);
              }
        };
        obj5[constants.GUILD_SELECT] = obj6;
        const OVERVIEW = constants.OVERVIEW;
        const obj7 = {
          headerLeft: obj11.getHeaderCloseButton(BoostingActionCreators.closeApplyBoostModal),
          headerRight() {
                let intl;
                let intl2;
                let tmp4Result;
                const HeaderActionButton = closure_1_0(intent[9]).HeaderActionButton;
                let obj = closure_1_0(intent[10]);
                if (obj.isThemeDark(theme.theme)) {
                  tmp4Result = guildBoostSlots(intent[11]);
                } else {
                  tmp4Result = guildBoostSlots(intent[12]);
                }
                let obj2 = {
                  source: tmp4Result,
                  IconComponent: closure_1_0(intent[13]).SettingsIcon,
                  accessibilityLabel: intl.string(closure_1_0(intent[14]).t["3D5yo/"]),
                  accessibilityHint: intl2.string(closure_1_0(intent[14]).t["+CbP2v"]),
                  onPress() {
                    const obj = closure_1_0(closure_1_2[15]);
                    const obj2 = { destinationPane: constants.GUILD_BOOSTING };
                    const result = obj.trackUserSettingsPaneViewed(obj2);
                    const obj3 = closure_1_0(closure_1_2[8]);
                    obj3.closeApplyBoostModal();
                    const obj4 = closure_1_0(closure_1_2[16]);
                    const obj5 = { screen: constants.GUILD_BOOSTING };
                    obj4.openUserSettings(obj5);
                  }
                };
                intl = closure_1_0(intent[14]).intl;
                intl2 = closure_1_0(intent[14]).intl;
                return closure_1_8(HeaderActionButton, obj2);
              },
          headerTitle(children) {
                let intl;
                let tmpResult;
                children = children.children;
                const obj = { title: intl.string(closure_1_0(intent[14]).t.VJEVbu), subtitle: tmpResult };
                const NavigatorHeader = closure_1_0(intent[7]).NavigatorHeader;
                intl = closure_1_0(intent[14]).intl;
                tmpResult = null;
                if (children.length > 0) {
                  const obj2 = { children };
                  tmpResult = closure_1_8(closure_1_0(intent[17]).LegacyText, obj2);
                }
                return closure_1_8(NavigatorHeader, obj);
              },
          render(arg0) {
                const obj = {};
                const tmp = guildBoostSlots(intent[18]);
                const merged = Object.assign(arg0);
                return closure_1_8(tmp, obj);
              }
        };
        obj5[OVERVIEW] = obj7;
        obj11 = NavigatorHeader2;
        const CONFIRMATION = constants.CONFIRMATION;
        const obj8 = {
          headerLeft: obj13.getHeaderCloseButton(BoostingActionCreators.closeApplyBoostModal),
          headerTitle: intl.string(intl3.t.VJEVbu),
          render(arg0) {
                const obj = {};
                const tmp = guildBoostSlots(intent[19]);
                const merged = Object.assign(arg0);
                return closure_1_8(tmp, obj);
              }
        };
        obj13 = NavigatorHeader2;
        intl = intl3.intl;
        obj5[CONFIRMATION] = obj8;
        return obj4;
      }
    }
    if (null != _require) {
      const obj9 = { name: constants.OVERVIEW, params: obj10 };
      obj10 = { guildId: _require, guildBoostSlots: importDefault, intent: dependencyMap, onResult: _slicedToArray };
      items.push(obj9);
    } else {
      let obj = { name: constants.GUILD_SELECT, params: obj12 };
      obj12 = { guildBoostSlots: importDefault, intent: dependencyMap, onResult: _slicedToArray };
      items.push(obj);
    }
  });
  const initialStack = tmp.initialStack;
  const screens = tmp.screens;
  [first, closure_5] = first.useState(initialStack[0].name);
  let items = [first];
  const tmp4 = useBackPressHandlerDefault;
  let tmp4Result = tmp4(first.useCallback(() => {
    let flag = first === constants.GUILD_SELECT;
    if (flag) {
      const obj = BoostingActionCreators;
      obj.closeApplyBoostModal();
      flag = true;
    }
    return flag;
  }, items));
  const Navigator = Navigator2.Navigator;
  let intl = intl3.intl;
  return <Navigator screens={screens} initialRouteStack={initialStack} headerBackTitle={intl.string(intl3.t["13/7kX"])} onStateChange={function onStateChange(arg0) {
    let tmp;
    if (arg0 != null) {
      tmp = arg0.routes[arg0.index];
    }
    if (null != tmp) {
      closure_5(tmp.name);
    }
  }} />;
});
let result = size.fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/PremiumGuildSubscribeModal.tsx");

export default tmp2;