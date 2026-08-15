// discord_app/modules/settings/native/renderer/SettingRendererUtils.tsx
import GUILD_SELECT_ALL_SERVERS_OPTION_ID from "GUILD_SELECT_ALL_SERVERS_OPTION_ID";
import { AnalyticsPages } from "ME";
import { 00038__ } from "../../../../../_runtime/metro/00038__.js";
import { map } from "SettingHookHarness.tsx";

let c3;
let c4;
let c5;
({ ListItemType: c3, NodeType: c4, SUPPORTED_SEARCH_RESULT_NO_PARENT_RENDERER_TYPES: c5 } = GUILD_SELECT_ALL_SERVERS_OPTION_ID);
let result = require("dispatcher").fileFinishedImporting("modules/settings/native/renderer/SettingRendererUtils.tsx");

export const onRouteSettingOnPress = function onRouteSettingOnPress(arg0) {
  let importDefault;
  let preNavigationAction;
  let require;
  ({ navigation: require, screen: importDefault, preNavigationAction } = arg0);
  function goToScreen() {
    let obj = outer1_0(outer1_2[4]);
    if (obj.getKeyboardIsOpen()) {
      let tmpResult = tmp(tmp2[5]);
      if (tmpResult.isIOS()) {
        tmpResult = tmp(tmp2[6]);
        let result = tmpResult.dismissGlobalKeyboard();
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          let obj = outer1_1(outer1_2[2]);
          obj.setSection(closure_1.route);
          obj = { destinationPane: closure_1.route, source: obj };
          obj = { page: outer1_6.USER_SETTINGS };
          const result = outer1_0(outer1_2[3]).trackUserSettingsPaneViewed(obj);
          navigation.navigate(closure_1.route);
        }, 100);
      }
    }
    outer1_1(outer1_2[2]).setSection(closure_1.route);
    const obj3 = outer1_1(outer1_2[2]);
    obj = { destinationPane: closure_1.route, source: obj };
    obj = { page: outer1_6.USER_SETTINGS };
    const result1 = outer1_0(outer1_2[3]).trackUserSettingsPaneViewed(obj);
    navigation.navigate(closure_1.route);
  }
  let preNavigationActionResult;
  if (preNavigationAction != null) {
    preNavigationActionResult = preNavigationAction(goToScreen);
  }
  if (false !== preNavigationActionResult) {
    goToScreen();
  }
};
export const getSettingTitle = function getSettingTitle(closure_0) {
  const cachedSettingTitle = map.getCachedSettingTitle(closure_0);
  const obj = map;
  00038__(null != cachedSettingTitle, "Setting " + closure_0 + " is missing a title.");
  return cachedSettingTitle;
};
export const getSettingSearchableTitles = function getSettingSearchableTitles() {
  const entries = Object.entries(items(13998).SETTING_RENDERER_CONFIG);
  items = [];
  const item = entries.forEach((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    if (!tmp2.unsearchable) {
      const cachedSettingTitle = items(outer1_2[7]).getCachedSettingTitle(tmp);
      if (null != cachedSettingTitle) {
        items = [tmp, ];
        const items1 = [cachedSettingTitle];
        HermesBuiltin.arraySpread(tmp3(tmp4[7]).getCachedSettingSearchTerms(tmp), 1);
        items[1] = items1;
        items.push(items);
        const tmp3Result = tmp3(tmp4[7]);
      }
      const obj = items(outer1_2[7]);
      tmp3 = items;
      tmp4 = outer1_2;
    }
  });
  return items;
};
export const getSettingScreens = function getSettingScreens() {
  let items = [];
  const set = new Set();
  const entries = Object.entries(items(13998).SETTING_RENDERER_CONFIG);
  const item = entries.forEach((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    if (tmp2.type === outer1_4.ROUTE) {
      if (!set.has(tmp2.screen.route)) {
        const items = [tmp, tmp2.screen];
        items.push(items);
        obj.add(tmp2.screen.route);
      }
      obj = set;
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
    const found = settings.filter((arg0) => !outer1_1(outer1_2[10]).isBlocked(arg0, found));
    if (0 !== found.length) {
      let obj = { type: null, label: null };
      obj[0] = outer1_3.SECTION_HEADER;
      obj[1] = settings.label;
      items.push(obj);
      const item = found.forEach((setting) => {
        outer1_1.push({ type: outer2_3.SECTION_ROW, setting, settingData: callback(outer2_2[9]).SETTING_RENDERER_CONFIG[setting], start: 0 === arg1, end: arg1 === found.length - 1 });
      });
      if (null != settings.subLabel) {
        obj = { type: null, label: null };
        obj[0] = tmp.SECTION_FOOTER;
        obj[1] = settings.subLabel;
        arr3.push(obj);
      }
      arr3 = items;
      tmp = outer1_3;
    }
  });
  return items;
};
export const getSettingListSearchResultItems = function getSettingListSearchResultItems(arr) {
  const items = [];
  const item = arr.forEach((setting) => {
    const tmp2 = items(items1[9]).SETTING_RENDERER_CONFIG[setting];
    if (null != tmp2.parent) {
      const highestLevelAncestor = sortByResult(tmp[10]).getHighestLevelAncestor(setting);
      const obj2 = sortByResult(tmp[10]);
      let obj = { category: null, setting: null, data: null };
      obj[0] = highestLevelAncestor;
      obj[1] = setting;
      obj[2] = sortByResult(tmp[10]).getNearestRouteAncestorDataOrSelf(setting);
      items.push(obj);
      const obj3 = sortByResult(tmp[10]);
    } else if (outer1_5.has(tmp2.type)) {
      obj = { category: null, setting: null, data: null };
      obj[0] = setting;
      obj[1] = setting;
      obj[2] = tmp2;
      items.push(obj);
    }
  });
  const sortByResult = items(items1[11]).sortBy(items, (category) => category.category);
  const importDefault = sortByResult;
  items1 = [];
  const set = new Set();
  const item1 = sortByResult.forEach((data) => {
    let category;
    let setting;
    ({ category, setting } = data);
    let obj = items(items1[7]);
    const cachedSettingTitle = obj.getCachedSettingTitle(setting);
    sortByResult(items1[8])(null != cachedSettingTitle, "Setting " + setting + " is missing a title.");
    const tmp = items;
    const tmp2 = items1;
    const tmp4 = sortByResult(items1[8]);
    const tmp5 = null != cachedSettingTitle;
    const breadcrumbs = sortByResult(items1[10]).getBreadcrumbs(setting);
    const hasItem = set.has(category);
    set.add(category);
    obj = { type: set.SETTING_SEARCH_RESULT, settingData: data.data, title: cachedSettingTitle, IconComponent: null, breadcrumbs: null, setting: null, index: null, total: null };
    let tmp11;
    if (!hasItem) {
      const tmp12 = tmp(tmp2[9]).SETTING_RENDERER_CONFIG[category];
      const type = tmp12.type;
      let IconComponent = null;
      if (outer1_4.RADIO !== type) {
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
    obj[3] = tmp11;
    obj[4] = breadcrumbs;
    obj[5] = setting;
    obj[6] = arg1;
    obj[7] = sortByResult.length;
    items1.push(obj);
  });
  return items1;
};
export const getScoredSettingListSearchResultItems = function getScoredSettingListSearchResultItems(settings, isLoading, placeholderCount) {
  let items = [];
  if (isLoading) {
    for (let num4 = 0; num4 < placeholderCount; num4 = num4 + 1) {
      let obj = { type: null, start: null, end: null };
      let tmp13 = constants;
      obj[0] = constants.SECTION_ROW_PLACEHOLDER;
      obj[1] = 0 === num4;
      obj[2] = num4 === placeholderCount - 1;
      let arr = items.push(obj);
    }
    return items;
  } else {
    const _Map = Map;
    const map = new Map();
    const _Map2 = Map;
    const map1 = new Map();
    constants = 0;
    let item = settings.forEach((arg0) => {
      let score;
      let setting;
      ({ setting, score } = arg0);
      const tmp2 = items(map1[9]).SETTING_RENDERER_CONFIG[setting];
      let hasItem = null != tmp2.parent;
      if (!hasItem) {
        hasItem = outer1_5.has(tmp2.type);
      }
      if (hasItem) {
        closure_3 = closure_3 + 1;
      }
      const highestLevelAncestor = map(map1[10]).getHighestLevelAncestor(setting);
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
    const mapped = sorted.map((arg0) => {
      let tmp;
      [tmp] = arg0;
      return tmp;
    });
    let c4 = 0;
    const item1 = mapped.forEach((arg0) => {
      let closure_0 = arg0;
      const value = map.get(arg0);
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
        const item = sorted.forEach((setting) => {
          setting = setting.setting;
          let nearestRouteAncestorDataOrSelf = arr(outer1_2[9]).SETTING_RENDERER_CONFIG[setting];
          if (null != nearestRouteAncestorDataOrSelf.parent) {
            let obj = outer1_1(tmp2[10]);
            let highestLevelAncestor = obj.getHighestLevelAncestor(setting);
            nearestRouteAncestorDataOrSelf = outer1_1(tmp2[10]).getNearestRouteAncestorDataOrSelf(setting);
            const obj2 = outer1_1(tmp2[10]);
          } else {
            highestLevelAncestor = setting;
          }
          obj = { type: outer1_3.SETTING_SEARCH_RESULT, settingData: nearestRouteAncestorDataOrSelf, title: null, IconComponent: null, breadcrumbs: null, setting: null, index: null, total: null };
          const cachedSettingTitle = arr(outer1_2[7]).getCachedSettingTitle(setting);
          const tmp8 = outer1_1;
          const tmpResult = arr(outer1_2[7]);
          outer1_1(outer1_2[8])(null != cachedSettingTitle, "Setting " + setting + " is missing a title.");
          obj[2] = cachedSettingTitle;
          let tmp12;
          if (0 === arg1) {
            const tmp13 = tmp(tmp2[9]).SETTING_RENDERER_CONFIG[highestLevelAncestor];
            const type = tmp13.type;
            let IconComponent = null;
            if (outer1_4.RADIO !== type) {
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
          obj[3] = tmp12;
          const tmp10 = null != cachedSettingTitle;
          const tmp9 = outer1_1(outer1_2[8]);
          obj[4] = tmp8(outer1_2[10]).getBreadcrumbs(setting);
          obj[5] = setting;
          obj[6] = closure_4;
          obj[7] = closure_3;
          closure_4 = closure_4 + 1;
          arr = arr.push(obj);
        });
      }
    });
    return items;
  }
};
export const getInitialScrollIndex = function getInitialScrollIndex(arg0, findLastIndex) {
  let closure_0 = arg0;
  const findLastIndexResult = findLastIndex.findLastIndex((type) => {
    let tmp = type.type === outer1_3.SECTION_ROW;
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