// discord_app/modules/app_launcher/native/screens/home/InThisServerSection.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Text } from "../../../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../../../intl/index.native.tsx";
import { isDiscordFrontendDevelopment } from "../../../../../utils/GlobalUtils.tsx";

let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
function AppInThisServer(onAppSelected) {
  onAppSelected = onAppSelected.onAppSelected;
  let application;
  const tmp3 = application(1348)("AppLauncherInThisServer-native");
  const tmp4 = createCacheKey();
  application = onAppSelected.appItem.application;
  let obj = onAppSelected(11350);
  const appLauncherIconSource = obj.getAppLauncherIconSource(application);
  obj = {
    accessible: true,
    accessibilityLabel: application.name,
    accessibilityRole: "button",
    onPress() {
      let tmp2 = null != onAppSelected;
      if (tmp2) {
        tmp2 = null != application;
      }
      if (tmp2) {
        const obj = { application: null, sectionName: null };
        obj[0] = application;
        obj[1] = onAppSelected(outer1_2[13]).AppLauncherSectionName.APPS_IN_THIS_SERVER;
        onAppSelected(obj);
      }
    },
    style: null,
    children: null
  };
  const items = [tmp4.appCardContainer, ];
  let rowShadow = !tmp3;
  if (!tmp3) {
    rowShadow = tmp4.rowShadow;
  }
  items[1] = rowShadow;
  obj[4] = items;
  let tmp8 = null;
  if (null != appLauncherIconSource) {
    obj = { iconSource: null, wrapperStyle: null, iconSize: 36 };
    obj[0] = appLauncherIconSource;
    obj[1] = tmp4.iconContainer;
    tmp8 = callback(application(11355), obj);
  }
  const items1 = [tmp8, callback(onAppSelected(4281).Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: application.name })];
  obj[5] = items1;
  return closure_6(onAppSelected(8585).PressableScale, obj, application.id);
}
({ View: c3, ScrollView: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: { marginBottom: 16 }, headerContainer: { justifyContent: "center" }, viewAll: { position: "absolute", right: 0 }, scrollView: { marginTop: 8, overflow: "visible" }, scrollViewContentContainer: { gap: 8 }, appCardContainer: null, rowShadow: null, iconContainer: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: require("Themes").radii.lg, paddingLeft: 12, paddingRight: 12, paddingVertical: 12, flexDirection: "row", justifyContent: "center", alignItems: "center" };
createCacheKey[5] = createCacheKey;
const merged = Object.assign(require("Themes").shadows.SHADOW_LOW);
createCacheKey[6] = {};
createCacheKey[7] = { marginEnd: 12, justifyContent: "space-around" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/app_launcher/native/screens/home/InThisServerSection.tsx");

export default function InThisServerSection(arg0) {
  let importDefault;
  let items;
  let require;
  ({ items, onAppSelected: require, onViewAllSelected: importDefault } = arg0);
  let dependencyMap;
  items = undefined;
  let mapped1;
  let tmp = createCacheKey();
  items = [];
  if (0 === items.length) {
    return null;
  } else {
    const item = items.forEach((type) => {
      if (type.type === outer1_0(_undefined[5]).AppLauncherHomeListItemType.RECOMMENDATION_APP) {
        items.push(type);
      }
      if (type.type === outer1_0(_undefined[5]).AppLauncherHomeListItemType.VIEW_ALL) {
        let closure_2 = type;
      }
    });
    const substr = items.slice(0, 8);
    const mapped = substr.map((appItem) => outer1_5(outer1_8, { appItem, onAppSelected: closure_0 }, appItem.application.id));
    mapped1 = undefined;
    const found = mapped.filter(isDiscordFrontendDevelopment /* isDiscordFrontendDevelopment */.isNotNullish);
    if (dependencyMap != null) {
      const applications = dependencyMap.applications;
      mapped1 = applications.map((arg0) => arg0);
    }
    let obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { style: null, children: null };
    obj[0] = tmp.headerContainer;
    obj = { variant: "text-lg/bold", color: "mobile-text-heading-primary", children: null };
    const intl = tmp11(1236).intl;
    obj[2] = intl.string(getSystemLocale /* getSystemLocale */.t.oJyzCu);
    const items1 = [callback(Text /* Text */.Text, obj), ];
    let tmp5Result = null != dependencyMap;
    if (tmp5Result) {
      const obj1 = { style: null, onPress: null, accessibilityRole: "button", children: null };
      obj1[0] = tmp.viewAll;
      obj1[1] = function onPress() {
        let tmp = null != mapped1;
        if (tmp) {
          tmp = callback();
        }
        return tmp;
      };
      const obj2 = { variant: "text-sm/medium", color: "text-brand", children: null };
      const intl2 = tmp11(1236).intl;
      obj2[2] = intl2.string(tmp11(1236).t["/qG8v7"]);
      obj1[3] = tmp5(tmp11(4281).Text, obj2);
      tmp5Result = tmp5(tmp11(4812).PressableOpacity, obj1);
    }
    items1[1] = tmp5Result;
    obj[1] = items1;
    const items2 = [closure_6(items, obj), ];
    const obj3 = { style: null, contentContainerStyle: null, horizontal: true, showsHorizontalScrollIndicator: false, children: null };
    ({ scrollView: obj6[0], scrollViewContentContainer: obj6[1] } = tmp);
    obj3[4] = found;
    items2[1] = callback(mapped1, obj3);
    obj[1] = items2;
    return closure_6(items, obj);
  }
};
export const IN_THIS_SERVER_ITEM_MAX = 8;