// discord_app/modules/settings/native/renderer/SettingRendererUtils.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import obj1322 from "../../../../utils/PlatformUtils.tsx";
import ME from "../../../../Constants.tsx";
import dismissGlobalKeyboard from "../../../../utils/native/KeyboardManagerUtils.tsx";
import useKeyboardIsOpen from "../../../keyboard/native/useKeyboardIsOpen.tsx";
import getSanitizedRestrictedGuilds from "../../../../utils/UserSettingsUtils.tsx";
import dispatcherDefault from "../../../../actions/UserSettingsModalActionCreators.tsx";
import map2 from "SettingHookHarness.tsx";
import GUILD_SELECT_ALL_SERVERS_OPTION_ID from "SettingRendererConstants.tsx";

({ ListItemType: c3, NodeType: c4, SUPPORTED_SEARCH_RESULT_NO_PARENT_RENDERER_TYPES: c5 } = GUILD_SELECT_ALL_SERVERS_OPTION_ID);
const AnalyticsPages = ME.AnalyticsPages;
let result = obj132.fileFinishedImporting("modules/settings/native/renderer/SettingRendererUtils.tsx");

export const onRouteSettingOnPress = function onRouteSettingOnPress(arg0) {
  ({ navigation: require, screen: importDefault, preNavigationAction } = arg0);
  function goToScreen() {
    let obj = useKeyboardIsOpen;
    if (obj.getKeyboardIsOpen()) {
      let tmpResult = obj1322;
      if (tmpResult.isIOS()) {
        tmpResult = dismissGlobalKeyboard;
        let result = tmpResult.dismissGlobalKeyboard();
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          let obj = closure_1_1(closure_1_2[2]);
          obj.setSection(closure_1.route);
          obj = { page: closure_1_6.USER_SETTINGS };
          const result = closure_1_0(closure_1_2[3]).trackUserSettingsPaneViewed(obj);
          navigation.navigate(closure_1.route);
        }, 100);
      }
    }
    dispatcherDefault.setSection(closure_1.route);
    obj = { page: AnalyticsPages.USER_SETTINGS };
    const result1 = getSanitizedRestrictedGuilds.trackUserSettingsPaneViewed(obj);
    navigation.navigate(closure_1.route);
    const tmpResult1 = getSanitizedRestrictedGuilds;
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
  const cachedSettingTitle = map2.getCachedSettingTitle(closure_0);
  _modDef38(null != cachedSettingTitle, "Setting " + closure_0 + " is missing a title.");
  return cachedSettingTitle;
};
export const getSettingSearchableTitles = function getSettingSearchableTitles() {
  const entries = Object.entries(items(13998).SETTING_RENDERER_CONFIG);
  items = [];
  const item = entries.forEach((item, index) => {
    [tmp, tmp2] = item;
    if (!tmp2.unsearchable) {
      const cachedSettingTitle = items(dependencyMap[7]).getCachedSettingTitle(tmp);
      if (null != cachedSettingTitle) {
        items = [tmp, ];
        const items1 = [cachedSettingTitle];
        HermesBuiltin.arraySpread(tmp3(dependencyMap[7]).getCachedSettingSearchTerms(tmp), 1);
        items[1] = items1;
        items.push(items);
        const tmp3Result = tmp3(dependencyMap[7]);
      }
      const obj = items(dependencyMap[7]);
      tmp3 = items;
    }
  });
  return items;
};
export const getSettingScreens = function getSettingScreens() {
  let items = [];
  const set = new Set();
  const entries = Object.entries(items(13998).SETTING_RENDERER_CONFIG);
  const item = entries.forEach((item, index) => {
    [tmp, tmp2] = item;
    if (tmp2.type === closure_1_4.ROUTE) {
      if (!set.has(tmp2.screen.route)) {
        items = [tmp, tmp2.screen];
        items.push(items);
        set.add(tmp2.screen.route);
      }
    }
  });
  return items;
};
export const toSettingListItems = function toSettingListItems(node, field) {
  closure_0 = field;
  const items = [];
  const sections = node.sections;
  let item = sections.forEach((item, index) => {
    const settings = item.settings;
    const found = settings.filter((item, index) => !items(closure_1_2[10]).isBlocked(item, found));
    if (0 !== found.length) {
      let obj = { type: null, label: null };
      obj[0] = closure_1_3.SECTION_HEADER;
      obj[1] = item.label;
      items.push(obj);
      item = found.forEach((item, index) => {
        items.push({ type: closure_2_3.SECTION_ROW, setting: item, settingData: callback(dependencyMap[9]).SETTING_RENDERER_CONFIG[item], start: 0 === index, end: index === found.length - 1 });
      });
      if (null != item.subLabel) {
        obj = { type: null, label: null };
        obj[0] = closure_1_3.SECTION_FOOTER;
        obj[1] = item.subLabel;
        items.push(obj);
      }
    }
  });
  return items;
};
export const getSettingListSearchResultItems = function getSettingListSearchResultItems(arr) {
  const items = [];
  const item = arr.forEach((item, index) => {
    const tmp2 = items(items1[9]).SETTING_RENDERER_CONFIG[item];
    if (null != tmp2.parent) {
      const highestLevelAncestor = sortByResult(items1[10]).getHighestLevelAncestor(item);
      const obj2 = sortByResult(items1[10]);
      let obj = { category: null, setting: null, data: null };
      obj[0] = highestLevelAncestor;
      obj[1] = item;
      obj[2] = sortByResult(items1[10]).getNearestRouteAncestorDataOrSelf(item);
      items.push(obj);
      const obj3 = sortByResult(items1[10]);
    } else if (closure_1_5.has(tmp2.type)) {
      obj = { category: null, setting: null, data: null };
      obj[0] = item;
      obj[1] = item;
      obj[2] = tmp2;
      items.push(obj);
    }
  });
  const sortByResult = items(items1[11]).sortBy(items, (category) => category.category);
  importDefault = sortByResult;
  items1 = [];
  const set = new Set();
  const item1 = sortByResult.forEach((item, index) => {
    ({ category, setting } = item);
    let obj = items(items1[7]);
    const cachedSettingTitle = obj.getCachedSettingTitle(setting);
    sortByResult(items1[8])(null != cachedSettingTitle, "Setting " + setting + " is missing a title.");
    const tmp4 = sortByResult(items1[8]);
    const breadcrumbs = sortByResult(items1[10]).getBreadcrumbs(setting);
    const hasItem = set.has(category);
    set.add(category);
    obj = { type: set.SETTING_SEARCH_RESULT, settingData: item.data, title: cachedSettingTitle, IconComponent: null, breadcrumbs: null, setting: null, index: null, total: null };
    let tmp11;
    if (!hasItem) {
      const tmp12 = items(items1[9]).SETTING_RENDERER_CONFIG[category];
      const type = tmp12.type;
      let IconComponent = null;
      if (closure_1_4.RADIO !== type) {
        IconComponent = null;
        if (closure_1_4.VOLUME_SLIDER !== type) {
          IconComponent = null;
          if (closure_1_4.SLIDER !== type) {
            IconComponent = tmp12.IconComponent;
          }
        }
      }
      tmp11 = IconComponent;
    }
    obj[3] = tmp11;
    obj[4] = breadcrumbs;
    obj[5] = setting;
    obj[6] = index;
    obj[7] = sortByResult.length;
    items1.push(obj);
    const obj2 = sortByResult(items1[10]);
  });
  return items1;
};
export const getScoredSettingListSearchResultItems = function getScoredSettingListSearchResultItems(settings, isLoading, placeholderCount) {
  let items = [];
  if (isLoading) {
    for (let num4 = 0; num4 < placeholderCount; num4 = num4 + 1) {
      let obj = { type: null, start: null, end: null };
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
    map1 = new Map();
    constants = 0;
    let item = settings.forEach((item, index) => {
      ({ setting, score } = item);
      const tmp2 = items(map1[9]).SETTING_RENDERER_CONFIG[setting];
      let hasItem = null != tmp2.parent;
      if (!hasItem) {
        hasItem = closure_1_5.has(tmp2.type);
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
      const obj = map(map1[10]);
    });
    const _Array = Array;
    arr = Array.from(map1.entries());
    let sorted = arr.sort((arg0, arg1) => arg1[1] - arg0[1]);
    const mapped = sorted.map((item, index) => {
      [tmp] = item;
      return tmp;
    });
    c4 = 0;
    const item1 = mapped.forEach((item, index) => {
      closure_0 = item;
      const value = map.get(item);
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
        item = sorted.forEach((item, index) => {
          const setting = item.setting;
          let nearestRouteAncestorDataOrSelf = item(map1[9]).SETTING_RENDERER_CONFIG[setting];
          if (null != nearestRouteAncestorDataOrSelf.parent) {
            let obj = map(map1[10]);
            let highestLevelAncestor = obj.getHighestLevelAncestor(setting);
            nearestRouteAncestorDataOrSelf = map(map1[10]).getNearestRouteAncestorDataOrSelf(setting);
            const obj2 = map(map1[10]);
          } else {
            highestLevelAncestor = setting;
          }
          obj = { type: closure_1_3.SETTING_SEARCH_RESULT, settingData: nearestRouteAncestorDataOrSelf, title: null, IconComponent: null, breadcrumbs: null, setting: null, index: null, total: null };
          const cachedSettingTitle = item(map1[7]).getCachedSettingTitle(setting);
          const tmpResult = item(map1[7]);
          map(map1[8])(null != cachedSettingTitle, "Setting " + setting + " is missing a title.");
          obj[2] = cachedSettingTitle;
          let tmp12;
          if (0 === index) {
            const tmp13 = item(map1[9]).SETTING_RENDERER_CONFIG[highestLevelAncestor];
            const type = tmp13.type;
            let IconComponent = null;
            if (closure_1_4.RADIO !== type) {
              IconComponent = null;
              if (closure_1_4.VOLUME_SLIDER !== type) {
                IconComponent = null;
                if (closure_1_4.SLIDER !== type) {
                  IconComponent = tmp13.IconComponent;
                }
              }
            }
            tmp12 = IconComponent;
          }
          obj[3] = tmp12;
          const tmp9 = map(map1[8]);
          obj[4] = map(map1[10]).getBreadcrumbs(setting);
          obj[5] = setting;
          obj[6] = closure_4;
          obj[7] = closure_3;
          closure_4 = closure_4 + 1;
          item.push(obj);
          const tmp8Result = map(map1[10]);
        });
      }
    });
    return items;
  }
};
export const getInitialScrollIndex = function getInitialScrollIndex(arg0, findLastIndex) {
  closure_0 = arg0;
  const findLastIndexResult = findLastIndex.findLastIndex((type) => {
    let tmp = type.type === closure_1_3.SECTION_ROW;
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