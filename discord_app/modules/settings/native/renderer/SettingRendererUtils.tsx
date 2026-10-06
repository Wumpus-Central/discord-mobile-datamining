// === Module 14519: SettingRendererUtils ===

// Module 14519 (SettingRendererUtils)
import _modDef38 from "module_38" /* 38 */;
import Constants from "Constants" /* 1085 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1881 */;
import useKeyboardIsOpen from "useKeyboardIsOpen" /* 6117 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6494 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6498 */;
import SettingsConstants from "SettingsConstants" /* 7645 */;
import SettingHookHarness from "SettingHookHarness" /* 14423 */;
import SettingsRendererConfig from "SettingsRendererConfig" /* 14425 */;
import SettingTreeManagerDefault from "SettingTreeManager" /* 14520 */;
import SettingRendererConstants from "SettingRendererConstants" /* 11143 */;
import size from "module_2" /* 2 */;

let closure_3, constants, data, importDefault, map, map1, set;

let c3;
let closure_4;
let hasOwnProperty;
({ ListItemType: c3, NodeType: closure_4, SUPPORTED_SEARCH_RESULT_NO_PARENT_RENDERER_TYPES: hasOwnProperty } = SettingRendererConstants);
const AnalyticsPages = Constants.AnalyticsPages;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let result = size.fileFinishedImporting("modules/settings/native/renderer/SettingRendererUtils.tsx");

export const onRouteSettingOnPress = function onRouteSettingOnPress(arg0) {
  let preNavigationAction;
  ({ navigation: require, screen: importDefault, preNavigationAction } = arg0);
  function goToScreen() {
    let obj4;
    let obj = useKeyboardIsOpen;
    if (obj.getKeyboardIsOpen()) {
      const tmpResult = PlatformUtils;
      if (tmpResult.isIOS()) {
        const tmpResult3 = KeyboardManagerUtils;
        let result = tmpResult3.dismissGlobalKeyboard();
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          let obj4;
          const obj = UserSettingsModalActionCreatorsDefault;
          obj.setSection(closure_1_1.route);
          const obj3 = { destinationPane: closure_1_1.route, source: obj4 };
          obj4 = { page: constants.USER_SETTINGS };
          const obj2 = UserSettingsUtils;
          const result = obj2.trackUserSettingsPaneViewed(obj3);
          require.navigate(closure_1_1.route);
        }, 100);
      }
    }
    let obj3 = UserSettingsModalActionCreatorsDefault;
    obj3.setSection(importDefault.route);
    let obj2 = { destinationPane: importDefault.route, source: obj4 };
    obj4 = { page: AnalyticsPages.USER_SETTINGS };
    const tmpResult4 = UserSettingsUtils;
    const result1 = tmpResult4.trackUserSettingsPaneViewed(obj2);
    require.navigate(importDefault.route);
  }
  let preNavigationActionResult;
  if (preNavigationAction != null) {
    preNavigationActionResult = preNavigationAction(goToScreen);
  }
  if (false !== preNavigationActionResult) {
    goToScreen();
  }
};
export const getSettingTitle = function getSettingTitle(id) {
  const obj = SettingHookHarness;
  const cachedSettingTitle = obj.getCachedSettingTitle(id);
  const tmp2 = _modDef38;
  const tmp3 = null != cachedSettingTitle;
  tmp2(tmp3, "Setting " + id + " is missing a title.");
  return cachedSettingTitle;
};
export const getSettingSearchableTitles = function getSettingSearchableTitles() {
  let items;
  const entries = Object.entries(items(14425).SETTING_RENDERER_CONFIG);
  items = [];
  const item = entries.forEach((item) => {
    let tmp2;
    let tmp3;
    [tmp2, tmp3] = item;
    if (!tmp3.unsearchable) {
      const obj = SettingHookHarness;
      const cachedSettingTitle = obj.getCachedSettingTitle(tmp2);
      if (null != cachedSettingTitle) {
        items = [tmp2, ];
        const items1 = [cachedSettingTitle];
        const push = items.push;
        const tmp4Result = SettingHookHarness;
        HermesBuiltin.arraySpread(items1, tmp4Result.getCachedSettingSearchTerms(tmp2), 1);
        items[1] = items1;
        push(items);
      }
    }
  });
  return items;
};
export const getSettingScreens = function getSettingScreens() {
  let items = [];
  set = new Set();
  const entries = Object.entries(items(14425).SETTING_RENDERER_CONFIG);
  const item = entries.forEach((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    if (tmp2.type === constants.ROUTE) {
      if (!set.has(tmp2.screen.route)) {
        items = [tmp, tmp2.screen];
        items.push(items);
        set.add(tmp2.screen.route);
      }
    }
  });
  return items;
};
export const getDesignSystemScreens = function getDesignSystemScreens() {
  let items = [];
  const entries = Object.entries(items(14425).SETTING_RENDERER_CONFIG);
  const item = entries.forEach((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    const tmp3 = tmp2.type === constants.ROUTE && tmp2.parent === MobileUserSettings.DESIGN_SYSTEMS;
    if (tmp3) {
      items = [tmp, tmp2.screen];
      items.push(items);
    }
  });
  return items;
};
export const toSettingListItems = function toSettingListItems(node, field) {
  let closure_0 = field;
  const items = [];
  const sections = node.sections;
  let item = sections.forEach((settings) => {
    settings = settings.settings;
    const found = settings.filter((item) => {
      const obj = items(dependencyMap[11]);
      return !obj.isBlocked(item, found);
    });
    if (0 !== found.length) {
      let obj = { type: constants.SECTION_HEADER, label: settings.label };
      items.push(obj);
      const item = found.forEach((setting, index) => {
        const obj = { type: constants.SECTION_ROW, setting, settingData: SettingsRendererConfig.SETTING_RENDERER_CONFIG[setting], start: 0 === index, end: index === found.length - 1 };
        items.push(obj);
      });
      if (null != settings.subLabel) {
        const obj2 = { type: constants.SECTION_FOOTER, label: settings.subLabel };
        items.push(obj2);
      }
    }
  });
  return items;
};
export const getSettingListSearchResultItems = function getSettingListSearchResultItems(arr) {
  let items1;
  const items = [];
  const item = arr.forEach((setting) => {
    let obj3;
    const tmp2 = SettingsRendererConfig.SETTING_RENDERER_CONFIG[setting];
    if (null != tmp2.parent) {
      const obj2 = SettingTreeManagerDefault;
      const highestLevelAncestor = obj2.getHighestLevelAncestor(setting);
      const obj4 = { category: highestLevelAncestor, setting, data: obj3.getNearestRouteAncestorDataOrSelf(setting) };
      obj3 = SettingTreeManagerDefault;
      items.push(obj4);
    } else if (hasOwnProperty.has(tmp2.type)) {
      const obj = { category: setting, setting, data: tmp2 };
      items.push(obj);
    }
  });
  let obj = items(items1[12]);
  const sortByResult = obj.sortBy(items, (category) => category.category);
  importDefault = sortByResult;
  items1 = [];
  set = new Set();
  const item1 = sortByResult.forEach((data, index) => {
    let category;
    let setting;
    let tmp11;
    ({ category, setting } = data);
    data = data.data;
    const obj = SettingHookHarness;
    const cachedSettingTitle = obj.getCachedSettingTitle(setting);
    const tmp4 = _modDef38;
    const tmp5 = null != cachedSettingTitle;
    tmp4(tmp5, "Setting " + setting + " is missing a title.");
    const obj2 = SettingTreeManagerDefault;
    const breadcrumbs = obj2.getBreadcrumbs(setting);
    const hasItem = set.has(category);
    set.add(category);
    const obj3 = { type: set.SETTING_SEARCH_RESULT, settingData: data, title: cachedSettingTitle, IconComponent: tmp11, breadcrumbs, setting, index, total: importDefault.length };
    tmp11 = undefined;
    const push = items1.push;
    if (!hasItem) {
      const tmp12 = SettingsRendererConfig.SETTING_RENDERER_CONFIG[category];
      const type = tmp12.type;
      let IconComponent = null;
      if (constants.RADIO !== type) {
        IconComponent = null;
        if (constants.VOLUME_SLIDER !== type) {
          IconComponent = null;
          if (constants.SLIDER !== type) {
            IconComponent = tmp12.IconComponent;
          }
        }
      }
      tmp11 = IconComponent;
    }
    push(obj3);
  });
  return items1;
};
export const getScoredSettingListSearchResultItems = function getScoredSettingListSearchResultItems(settings, isLoading, placeholderCount) {
  let items = [];
  const tmp = isLoading;
  if (tmp) {
    let num4;
    let tmp9 = placeholderCount;
    let num2 = 0;
    for (let num4 = 0; num4 < placeholderCount; num4 = num4 + 1) {
      let obj = { type: constants.SECTION_ROW_PLACEHOLDER, start: 0 === num4, end: num4 === placeholderCount - 1 };
      let tmp10 = constants;
      let arr = items.push(obj);
    }
    return items;
  } else {
    let tmp2 = settings;
    const _Map = Map;
    const self = this;
    const self2 = this;
    map = new Map();
    const _Map2 = Map;
    const self3 = this;
    const self4 = this;
    map1 = new Map();
    let num = 0;
    constants = 0;
    let item = settings.forEach((item) => {
      let score;
      let setting;
      ({ setting, score } = item);
      const tmp2 = SettingsRendererConfig.SETTING_RENDERER_CONFIG[setting];
      const hasItem = null != tmp2.parent || hasOwnProperty.has(tmp2.type);
      if (hasItem) {
        closure_3 = closure_3 + 1;
      }
      const obj = SettingTreeManagerDefault;
      const highestLevelAncestor = obj.getHighestLevelAncestor(setting);
      let sum = score;
      if (highestLevelAncestor === setting) {
        sum = score + 0.05;
      }
      let num2 = map1.get(highestLevelAncestor);
      if (num2 == null) {
        num2 = 0;
      }
      const result = map1.set(highestLevelAncestor, Math.max(num2, sum));
      items = map.get(highestLevelAncestor);
      if (items == null) {
        items = [];
      }
      items.push({ setting, score: sum });
      const result1 = map.set(highestLevelAncestor, items);
    });
    const _Array = Array;
    const arr2 = Array.from(map1.entries());
    let sorted = arr2.sort((arg0, arg1) => arg1[1] - arg0[1]);
    const mapped = sorted.map((item) => {
      let tmp;
      [tmp] = item;
      return tmp;
    });
    let c4 = 0;
    const item1 = mapped.forEach((item) => {
      let total;
      const value = map.get(item);
      if (null != value) {
        const sorted = value.sort((setting, setting2) => {
          let num = -1;
          if (setting.setting !== item) {
            let num2 = 1;
            if (setting2.setting !== tmp) {
              num2 = setting2.score - setting.score;
            }
            num = num2;
          }
          return num;
        });
        item = sorted.forEach((setting, index) => {
          let cachedSettingTitle;
          let highestLevelAncestor;
          let tmp12;
          let tmp8Result;
          setting = setting.setting;
          let nearestRouteAncestorDataOrSelf = items(map1[10]).SETTING_RENDERER_CONFIG[setting];
          if (null != nearestRouteAncestorDataOrSelf.parent) {
            const obj = map(map1[11]);
            highestLevelAncestor = obj.getHighestLevelAncestor(setting);
            const obj2 = map(map1[11]);
            nearestRouteAncestorDataOrSelf = obj2.getNearestRouteAncestorDataOrSelf(setting);
          } else {
            highestLevelAncestor = setting;
          }
          const obj3 = { type: total.SETTING_SEARCH_RESULT, settingData: nearestRouteAncestorDataOrSelf, title: cachedSettingTitle, IconComponent: tmp12, breadcrumbs: tmp8Result.getBreadcrumbs(setting), setting, index, total };
          const tmpResult = items(map1[8]);
          cachedSettingTitle = tmpResult.getCachedSettingTitle(setting);
          const tmp10 = null != cachedSettingTitle;
          const tmp9 = map(map1[9]);
          tmp9(tmp10, "Setting " + setting + " is missing a title.");
          tmp12 = undefined;
          if (0 === index) {
            const tmp13 = items(map1[10]).SETTING_RENDERER_CONFIG[highestLevelAncestor];
            const type = tmp13.type;
            let IconComponent = null;
            if (index.RADIO !== type) {
              IconComponent = null;
              if (index.VOLUME_SLIDER !== type) {
                IconComponent = null;
                if (index.SLIDER !== type) {
                  IconComponent = tmp13.IconComponent;
                }
              }
            }
            tmp12 = IconComponent;
          }
          index = index + 1;
          tmp8Result = map(map1[11]);
          item.push(obj3);
        });
      }
    });
    return items;
  }
};
export const getInitialScrollIndex = function getInitialScrollIndex(current, findLastIndex) {
  let closure_0 = current;
  const findLastIndexResult = findLastIndex.findLastIndex((type) => type.type === constants.SECTION_ROW && type.setting === current);
  if (1 !== findLastIndexResult) {
    const _Math = Math;
    return Math.max(0, findLastIndexResult);
  }
};