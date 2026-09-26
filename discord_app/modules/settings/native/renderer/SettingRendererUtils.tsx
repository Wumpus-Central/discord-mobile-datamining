// discord_app/modules/settings/native/renderer/SettingRendererUtils.tsx
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import Constants from "../../../../Constants.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import KeyboardManagerUtils from "../../../../utils/native/KeyboardManagerUtils.tsx";
import useKeyboardIsOpen from "../../../keyboard/native/useKeyboardIsOpen.tsx";
import UserSettingsModalActionCreatorsDefault from "../../../../actions/UserSettingsModalActionCreators.tsx";
import UserSettingsUtils from "../../../../utils/UserSettingsUtils.tsx";
import SettingsConstants from "../../../user_settings/core/native/SettingsConstants.tsx";
import SettingHookHarness from "SettingHookHarness.tsx";
import SettingsRendererConfig from "../../../user_settings/core/native/SettingsRendererConfig.tsx";
import SettingTreeManagerDefault from "SettingTreeManager.tsx";
import SettingRendererConstants from "SettingRendererConstants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

({
  ListItemType: c3,
  NodeType: closure_4,
  SUPPORTED_SEARCH_RESULT_NO_PARENT_RENDERER_TYPES: hasOwnProperty,
} = SettingRendererConstants);
const AnalyticsPages = Constants.AnalyticsPages;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let result = size.fileFinishedImporting("modules/settings/native/renderer/SettingRendererUtils.tsx");

export const onRouteSettingOnPress = function onRouteSettingOnPress(arg0) {
  ({ navigation: require, screen: importDefault, preNavigationAction } = arg0);
  function goToScreen() {
    if (obj.getKeyboardIsOpen()) {
      if (tmpResult.isIOS()) {
        let result = KeyboardManagerUtils.dismissGlobalKeyboard();
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          UserSettingsModalActionCreatorsDefault.setSection(closure_1_1.route);
          const obj3 = { destinationPane: closure_1_1.route, source: { page: constants.USER_SETTINGS } };
          const result = navigation(6416).trackUserSettingsPaneViewed(obj3);
          navigation.navigate(closure_1_1.route);
        }, 100);
        const tmpResult3 = KeyboardManagerUtils;
      }
      tmpResult = PlatformUtils;
    }
    obj = useKeyboardIsOpen;
    UserSettingsModalActionCreatorsDefault.setSection(closure_1_1.route);
    const obj2 = { destinationPane: closure_1_1.route, source: { page: AnalyticsPages.USER_SETTINGS } };
    const result1 = UserSettingsUtils.trackUserSettingsPaneViewed(obj2);
    navigation.navigate(closure_1_1.route);
    const obj4 = { page: AnalyticsPages.USER_SETTINGS };
    const tmpResult4 = UserSettingsUtils;
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
  const entries = Object.entries(items(14143).SETTING_RENDERER_CONFIG);
  items = [];
  const item = entries.forEach((item) => {
    [tmp, tmp2] = item;
    if (!tmp2.unsearchable) {
      const cachedSettingTitle = SettingHookHarness.getCachedSettingTitle(tmp);
      if (null != cachedSettingTitle) {
        items = [tmp];
        const items1 = [cachedSettingTitle];
        HermesBuiltin.arraySpread(SettingHookHarness.getCachedSettingSearchTerms(tmp), 1);
        items[1] = items1;
        items.push(items);
        const tmp3Result = SettingHookHarness;
      }
    }
  });
  return items;
};
export const getSettingScreens = function getSettingScreens() {
  let items = [];
  set = new Set();
  const entries = Object.entries(items(14143).SETTING_RENDERER_CONFIG);
  const item = entries.forEach((item) => {
    [tmp, tmp2] = item;
    if (tmp2.type === constants2.ROUTE) {
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
  const entries = Object.entries(items(14143).SETTING_RENDERER_CONFIG);
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
      const obj = { type: constants.SECTION_HEADER, label: settings.label };
      items.push(obj);
      const item = found.forEach((setting, index) => {
        items.push({
          type: constants.SECTION_ROW,
          setting,
          settingData: SettingsRendererConfig.SETTING_RENDERER_CONFIG[setting],
          start: 0 === index,
          end: index === found.length - 1,
        });
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
  const items = [];
  const item = arr.forEach((setting) => {
    const tmp2 = SettingsRendererConfig.SETTING_RENDERER_CONFIG[setting];
    if (null != tmp2.parent) {
      const highestLevelAncestor = SettingTreeManagerDefault.getHighestLevelAncestor(setting);
      const obj4 = {
        category: highestLevelAncestor,
        setting,
        data: SettingTreeManagerDefault.getNearestRouteAncestorDataOrSelf(setting),
      };
      items.push(obj4);
    } else if (set.has(tmp2.type)) {
      const obj = { category: setting, setting, data: tmp2 };
      items.push(obj);
    }
  });
  const sortByResult = items(items1[12]).sortBy(items, (category) => category.category);
  importDefault = sortByResult;
  items1 = [];
  set = new Set();
  const item1 = sortByResult.forEach((data, index) => {
    ({ category, setting } = data);
    const cachedSettingTitle = SettingHookHarness.getCachedSettingTitle(setting);
    _modDef38(null != cachedSettingTitle, "Setting " + setting + " is missing a title.");
    const tmp5 = null != cachedSettingTitle;
    const breadcrumbs = SettingTreeManagerDefault.getBreadcrumbs(setting);
    const hasItem = set.has(category);
    set.add(category);
    const obj3 = {
      type: constants.SETTING_SEARCH_RESULT,
      settingData: data.data,
      title: cachedSettingTitle,
      IconComponent: null,
      breadcrumbs: null,
      setting: null,
      index: null,
      total: null,
    };
    let tmp11;
    if (!hasItem) {
      const tmp12 = SettingsRendererConfig.SETTING_RENDERER_CONFIG[category];
      const type = tmp12.type;
      let IconComponent = null;
      if (constants2.RADIO !== type) {
        IconComponent = null;
        if (constants2.VOLUME_SLIDER !== type) {
          IconComponent = null;
          if (constants2.SLIDER !== type) {
            IconComponent = tmp12.IconComponent;
          }
        }
      }
      tmp11 = IconComponent;
    }
    obj3.IconComponent = tmp11;
    obj3.breadcrumbs = breadcrumbs;
    obj3.setting = setting;
    obj3.index = index;
    obj3.total = sortByResult.length;
    items1.push(obj3);
  });
  return items1;
};
export const getScoredSettingListSearchResultItems = function getScoredSettingListSearchResultItems(
  settings,
  isLoading,
  placeholderCount,
) {
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
    let sorted = Array.from(map1.entries()).sort((arg0, arg1) => arg1[1] - arg0[1]);
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
            let highestLevelAncestor = map(map1[11]).getHighestLevelAncestor(setting);
            const obj = map(map1[11]);
            nearestRouteAncestorDataOrSelf = map(map1[11]).getNearestRouteAncestorDataOrSelf(setting);
            const obj2 = map(map1[11]);
          } else {
            highestLevelAncestor = setting;
          }
          const obj3 = {
            type: total.SETTING_SEARCH_RESULT,
            settingData: nearestRouteAncestorDataOrSelf,
            title: null,
            IconComponent: null,
            breadcrumbs: null,
            setting: null,
            index: null,
            total: null,
          };
          const cachedSettingTitle = items(map1[8]).getCachedSettingTitle(setting);
          const tmpResult = items(map1[8]);
          map(map1[9])(null != cachedSettingTitle, "Setting " + setting + " is missing a title.");
          obj3.title = cachedSettingTitle;
          let tmp12;
          if (0 === index) {
            const tmp13 = items(map1[10]).SETTING_RENDERER_CONFIG[highestLevelAncestor];
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
          obj3.IconComponent = tmp12;
          const tmp10 = null != cachedSettingTitle;
          const tmp9 = map(map1[9]);
          obj3.breadcrumbs = map(map1[11]).getBreadcrumbs(setting);
          obj3.setting = setting;
          obj3.index = index;
          obj3.total = total;
          index = index + 1;
          item.push(obj3);
          const tmp8Result = map(map1[11]);
        });
      }
    });
    return items;
  }
};
export const getInitialScrollIndex = function getInitialScrollIndex(current, findLastIndex) {
  closure_0 = current;
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
