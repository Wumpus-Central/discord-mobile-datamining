// discord_app/modules/app_launcher/native/screens/home/InThisServerSection.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import GlobalUtils from "../../../../../utils/GlobalUtils.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import AppLauncherTypes from "../../../AppLauncherTypes.tsx";
import AppLauncherHomeTypes from "AppLauncherHomeTypes.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function AppInThisServer(onAppSelected) {
  onAppSelected = onAppSelected.onAppSelected;
  const tmp = closure_7();
  const application = onAppSelected.appItem.application;
  const appLauncherIconSource = onAppSelected(12308).getAppLauncherIconSource(application);
  const obj2 = {
    accessible: true,
    accessibilityLabel: application.name,
    accessibilityRole: "button",
    onPress() {
      let tmp2 = null != onAppSelected;
      if (tmp2) {
        tmp2 = null != application;
      }
      if (tmp2) {
        const obj = { application, sectionName: AppLauncherTypes.AppLauncherSectionName.APPS_IN_THIS_SERVER };
        onAppSelected(obj);
      }
    },
    style: tmp.appCardContainer,
    children: null,
  };
  let tmp6 = null;
  if (null != appLauncherIconSource) {
    const obj3 = { iconSource: appLauncherIconSource, wrapperStyle: tmp.iconContainer, iconSize: 36 };
    tmp6 = closure_5(application(12313), obj3);
  }
  const items = [
    tmp6,
    closure_5(onAppSelected(4753).Text, {
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      lineClamp: 1,
      children: application.name,
    }),
  ];
  obj2.children = items;
  return closure_6(onAppSelected(9189).PressableScale, obj2, application.id);
}
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4757);
let obj2 = {
  container: { marginBottom: 16 },
  headerContainer: { justifyContent: "center" },
  viewAll: { position: "absolute", right: 0 },
  scrollView: { marginTop: 8, overflow: "visible" },
  scrollViewContentContainer: { gap: 8 },
  appCardContainer: {
    backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT,
    borderRadius: nativeDefault.radii.lg,
    paddingLeft: 12,
    paddingRight: 12,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: { marginEnd: 12, justifyContent: "space-around" },
};
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/InThisServerSection.tsx");

export default function InThisServerSection(arg0) {
  ({ items, onAppSelected: require, onViewAllSelected: importDefault } = arg0);
  dependencyMap = undefined;
  let mapped1;
  let tmp = closure_7();
  const items1 = [];
  if (0 === items.length) {
    return null;
  } else {
    const item = items.forEach((type) => {
      if (type.type === AppLauncherHomeTypes.AppLauncherHomeListItemType.RECOMMENDATION_APP) {
        items1.push(type);
      }
      if (type.type === AppLauncherHomeTypes.AppLauncherHomeListItemType.VIEW_ALL) {
        closure_2 = type;
      }
    });
    const substr = items1.slice(0, 8);
    const mapped = substr.map((appItem) =>
      hasOwnProperty(AppInThisServer, { appItem, onAppSelected }, appItem.application.id),
    );
    mapped1 = undefined;
    const found = mapped.filter(GlobalUtils.isNotNullish);
    if (dependencyMap != null) {
      const applications = dependencyMap.applications;
      mapped1 = applications.map((item) => item);
    }
    const obj = { style: tmp.container, children: null };
    const obj2 = { style: tmp.headerContainer, children: null };
    const obj3 = { variant: "text-lg/bold", color: "mobile-text-heading-primary", children: null };
    const intl = util.intl;
    obj3.children = intl.string(util.t.oJyzCu);
    const items2 = [closure_5(Text_Text.Text, obj3)];
    let tmp5Result = null != dependencyMap;
    if (tmp5Result) {
      const obj4 = {
        style: tmp.viewAll,
        onPress() {
          let tmp = null != mapped1;
          if (tmp) {
            tmp = importDefault();
          }
          return tmp;
        },
        accessibilityRole: "button",
        children: null,
      };
      const obj5 = { variant: "text-sm/medium", color: "text-brand", children: null };
      const intl2 = util.intl;
      obj5.children = intl2.string(util.t["/qG8v7"]);
      obj4.children = closure_5(Text_Text.Text, obj5);
      tmp5Result = closure_5(Pressables.PressableOpacity, obj4);
    }
    items2[1] = tmp5Result;
    obj2.children = items2;
    const items3 = [closure_6(items1, obj2)];
    const obj11 = {
      style: null,
      contentContainerStyle: null,
      horizontal: true,
      showsHorizontalScrollIndicator: false,
      children: null,
    };
    ({ scrollView: obj6.style, scrollViewContentContainer: obj6.contentContainerStyle } = tmp);
    obj11.children = found;
    items3[1] = closure_5(mapped1, obj11);
    obj.children = items3;
    return closure_6(items1, obj);
  }
}
export const IN_THIS_SERVER_ITEM_MAX = 8;
