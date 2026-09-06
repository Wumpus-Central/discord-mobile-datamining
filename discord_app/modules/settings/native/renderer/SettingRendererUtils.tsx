// === Module 14693: SettingRendererUtils ===

// Module 14693 (SettingRendererUtils)
import _modDef38 from "module_38" /* 38 */;
import Constants from "Constants" /* 1074 */;
import useKeyboardIsOpen from "useKeyboardIsOpen" /* 6625 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6990 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6995 */;
import SettingsConstants from "SettingsConstants" /* 7975 */;
import SettingHookHarness from "SettingHookHarness" /* 14582 */;
import SettingsRendererConfig from "SettingsRendererConfig" /* 14584 */;
import SettingTreeManagerDefault from "SettingTreeManager" /* 14694 */;
import SettingRendererConstants from "SettingRendererConstants" /* 11469 */;
import size from "module_2" /* 2 */;

({ ListItemType: c3, NodeType: closure_4, SUPPORTED_SEARCH_RESULT_NO_PARENT_RENDERER_TYPES: hasOwnProperty } = SettingRendererConstants);
const AnalyticsPages = Constants.AnalyticsPages;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let result = size.fileFinishedImporting("modules/settings/native/renderer/SettingRendererUtils.tsx");

export const onRouteSettingOnPress = function onRouteSettingOnPress(arg0) {
  ({ navigation: require, screen: importDefault, preNavigationAction } = arg0);
  function goToScreen() {
    let obj = useKeyboardIsOpen;
    if (obj.getKeyboardIsOpen()) {
      let tmpResult = tmp(1115);
      if (tmpResult.isIOS()) {
        tmpResult = tmp(1874);
        let result = tmpResult.dismissGlobalKeyboard();
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          let obj = UserSettingsModalActionCreatorsDefault;
          obj.setSection(closure_1_1.route);
          obj = { destinationPane: closure_1_1.route, source: null };
          obj = { page: constants.USER_SETTINGS };
          obj.source = obj;
          const result = navigation(6995).trackUserSettingsPaneViewed(obj);
          navigation.navigate(closure_1_1.route);
        }, 100);
      }
    }
    UserSettingsModalActionCreatorsDefault.setSection(closure_1_1.route);
    obj = { destinationPane: closure_1_1.route, source: null };
    obj = { page: AnalyticsPages.USER_SETTINGS };
    obj.source = obj;
    const result1 = UserSettingsUtils.trackUserSettingsPaneViewed(obj);
    navigation.navigate(closure_1_1.route);
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
  const cachedSettingTitle = SettingHookHarness.getCachedSettingTitle(id);
  _modDef38(null != cachedSettingTitle, "Setting " + id + " is missing a title.");
  return cachedSettingTitle;
};
export const getSettingSearchableTitles = function getSettingSearchableTitles() {
  const entries = Object.entries(items(14584).SETTING_RENDERER_CONFIG);
  items = [];
  const item = entries.forEach((item) => {
    [tmp, tmp2] = item;
    if (!tmp2.unsearchable) {
      const cachedSettingTitle = SettingHookHarness.getCachedSettingTitle(tmp);
      if (null != cachedSettingTitle) {
        items = [tmp, ];
        const items1 = [cachedSettingTitle];
        HermesBuiltin.arraySpread(tmp3(14582).getCachedSettingSearchTerms(tmp), 1);
        items[1] = items1;
        items.push(items);
        const tmp3Result = tmp3(14582);
      }
      tmp3 = require;
    }
  });
  return items;
};
export const getSettingScreens = function getSettingScreens() {
  let items = [];
  set = new Set();
  const entries = Object.entries(items(14584).SETTING_RENDERER_CONFIG);
  const item = entries.forEach((item) => {
    [tmp, tmp2] = item;
    if (tmp2.type === constants2.ROUTE) {
      if (!set.has(tmp2.screen.route)) {
        items = [tmp, tmp2.screen];
        items.push(items);
        obj.add(tmp2.screen.route);
      }
      obj = set;
    }
  });
  return items;
};
export const getDesignSystemScreens = function getDesignSystemScreens() {
  let items = [];
  const entries = Object.entries(items(14584).SETTING_RENDERER_CONFIG);
  const item = entries.forEach((item) => {
    [tmp, tmp2] = item;
    let tmp3 = tmp2.type === constants2.ROUTE;
    if (tmp3) {
      tmp3 = tmp2.parent === MobileUserSettings.DESIGN_SYSTEMS;
    }
    if (tmp3) {
      items = [tmp, tmp2.screen];
      items.push(items);
    }
  });
  return items;
};
export const toSettingListItems = function toSettingListItems(node, field) {
  closure_0 = field;
  const items = [];
  const sections = node.sections;
  let item = sections.forEach((settings) => {
    settings = settings.settings;
    const found = settings.filter((item) => !items(dependencyMap[11]).isBlocked(item, found));
    if (0 !== found.length) {
      let obj = { type: constants.SECTION_HEADER, label: settings.label };
      items.push(obj);
      const item = found.forEach((setting, index) => {
        items.push({ type: constants.SECTION_ROW, setting, settingData: SettingsRendererConfig.SETTING_RENDERER_CONFIG[setting], start: 0 === index, end: index === found.length - 1 });
      });
      if (null != settings.subLabel) {
        obj = { type: tmp.SECTION_FOOTER, label: settings.subLabel };
        arr3.push(obj);
      }
      arr3 = items;
      tmp = constants;
    }
  });
  return items;
};
export const getSettingListSearchResultItems = function getSettingListSearchResultItems(arr) {
  const items = [];
  const item = arr.forEach((setting) => {
    const tmp2 = SettingsRendererConfig.SETTING_RENDERER_CONFIG[setting];
    if (null != tmp2.parent) {
      const highestLevelAncestor = SettingTreeManagerDefault.getHighestLevelAncestor(setting);
      let obj = { category: highestLevelAncestor, setting, data: SettingTreeManagerDefault.getNearestRouteAncestorDataOrSelf(setting) };
      items.push(obj);
    } else if (set.has(tmp2.type)) {
      obj = { category: setting, setting, data: tmp2 };
      items.push(obj);
    }
  });
  const sortByResult = items(items1[12]).sortBy(items, (category) => category.category);
  importDefault = sortByResult;
  items1 = [];
  set = new Set();
  const item1 = sortByResult.forEach((data, index) => {
    ({ category, setting } = data);
    let obj = SettingHookHarness;
    const cachedSettingTitle = obj.getCachedSettingTitle(setting);
    _modDef38(null != cachedSettingTitle, "Setting " + setting + " is missing a title.");
    const tmp5 = null != cachedSettingTitle;
    const breadcrumbs = SettingTreeManagerDefault.getBreadcrumbs(setting);
    const hasItem = set.has(category);
    set.add(category);
    obj = { type: constants.SETTING_SEARCH_RESULT, settingData: data.data, title: cachedSettingTitle, IconComponent: null, breadcrumbs: null, setting: null, index: null, total: null };
    let tmp11;
    if (!hasItem) {
      const tmp12 = SettingsRendererConfig.SETTING_RENDERER_CONFIG[category];
      const type = tmp12.type;
      let IconComponent = null;
      if (constants2.RADIO !== type) {
        IconComponent = null;
        if (tmp13.VOLUME_SLIDER !== type) {
          IconComponent = null;
          if (tmp13.SLIDER !== type) {
            IconComponent = tmp12.IconComponent;
          }
        }
      }
      tmp11 = IconComponent;
    }
    obj.IconComponent = tmp11;
    obj.breadcrumbs = breadcrumbs;
    obj.setting = setting;
    obj.index = index;
    obj.total = sortByResult.length;
    items1.push(obj);
  });
  return items1;
};
export const getScoredSettingListSearchResultItems = function getScoredSettingListSearchResultItems(settings, isLoading, placeholderCount) {
  let items = [];
  if (isLoading) {
    for (let num4 = 0; num4 < placeholderCount; num4 = num4 + 1) {
      let obj = { type: null, start: null, end: null };
      obj.type = constants.SECTION_ROW_PLACEHOLDER;
      obj.start = 0 === num4;
      obj.end = num4 === placeholderCount - 1;
      let arr = items.push(obj);
    }
    return items;
  } else {
    const _Map = Map;
    const map = new Map();
    const _Map2 = Map;
    map1 = new Map();
    constants = 0;
    let item = settings.forEach((item) => {
      ({ setting, score } = item);
      const tmp2 = SettingsRendererConfig.SETTING_RENDERER_CONFIG[setting];
      let hasItem = null != tmp2.parent;
      if (!hasItem) {
        hasItem = set.has(tmp2.type);
      }
      if (hasItem) {
        closure_3 = closure_3 + 1;
      }
      const highestLevelAncestor = SettingTreeManagerDefault.getHighestLevelAncestor(setting);
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
    arr = Array.from(map1.entries());
    let sorted = arr.sort((arg0, arg1) => arg1[1] - arg0[1]);
    const mapped = sorted.map((item) => {
      [tmp] = item;
      return tmp;
    });
    c4 = 0;
    const item1 = mapped.forEach((item) => {
      value = map.get(item);
      if (null != value) {
        const sorted = value.sort((setting, setting2) => {
          let num = -1;
          if (setting.setting !== closure_0) {
            let num2 = 1;
            if (setting2.setting !== tmp) {
              num2 = setting2.score - setting.score;
            }
            num = num2;
          }
          return num;
        });
        item = sorted.forEach((setting, index) => {
          setting = setting.setting;
          let nearestRouteAncestorDataOrSelf = items(map1[10]).SETTING_RENDERER_CONFIG[setting];
          if (null != nearestRouteAncestorDataOrSelf.parent) {
            let obj = map(tmp2[11]);
            let highestLevelAncestor = obj.getHighestLevelAncestor(setting);
            nearestRouteAncestorDataOrSelf = map(tmp2[11]).getNearestRouteAncestorDataOrSelf(setting);
            const obj2 = map(tmp2[11]);
          } else {
            highestLevelAncestor = setting;
          }
          obj = { type: total.SETTING_SEARCH_RESULT, settingData: nearestRouteAncestorDataOrSelf, title: null, IconComponent: null, breadcrumbs: null, setting: null, index: null, total: null };
          const cachedSettingTitle = items(map1[8]).getCachedSettingTitle(setting);
          const tmp8 = map;
          const tmpResult = items(map1[8]);
          map(map1[9])(null != cachedSettingTitle, "Setting " + setting + " is missing a title.");
          obj.title = cachedSettingTitle;
          let tmp12;
          if (0 === index) {
            const tmp13 = tmp(tmp2[10]).SETTING_RENDERER_CONFIG[highestLevelAncestor];
            const type = tmp13.type;
            let IconComponent = null;
            if (index.RADIO !== type) {
              IconComponent = null;
              if (tmp14.VOLUME_SLIDER !== type) {
                IconComponent = null;
                if (tmp14.SLIDER !== type) {
                  IconComponent = tmp13.IconComponent;
                }
              }
            }
            tmp12 = IconComponent;
          }
          obj.IconComponent = tmp12;
          const tmp10 = null != cachedSettingTitle;
          const tmp9 = map(map1[9]);
          obj.breadcrumbs = tmp8(map1[11]).getBreadcrumbs(setting);
          obj.setting = setting;
          obj.index = index;
          obj.total = total;
          index = index + 1;
          item.push(obj);
        });
      }
    });
    return items;
  }
};
export const getInitialScrollIndex = function getInitialScrollIndex(arg0, findLastIndex) {
  closure_0 = arg0;
  const findLastIndexResult = findLastIndex.findLastIndex((type) => {
    let tmp = type.type === constants.SECTION_ROW;
    if (tmp) {
      tmp = type.setting === closure_0;
    }
    return tmp;
  });
  if (1 !== findLastIndexResult) {
    const _Math = Math;
    return Math.max(0, findLastIndexResult);
  }
};