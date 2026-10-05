// === Module 11734: InThisServerSection ===

// Module 11734 (InThisServerSection)
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import Text_Text from "Text/Text" /* 4886 */;
import Pressables from "Pressables" /* 5909 */;
import AppLauncherTypes from "AppLauncherTypes" /* 8932 */;
import AppLauncherHomeTypes from "AppLauncherHomeTypes" /* 11712 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c2, closure_0, dependencyMap, onViewAllSelected, tmp3;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
({ View: c3, ScrollView: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: { marginBottom: 16 }, headerContainer: { justifyContent: "center" }, viewAll: { position: "absolute", right: 0 }, scrollView: { marginTop: 8, overflow: "visible" }, scrollViewContentContainer: { gap: 8 }, appCardContainer: obj2, iconContainer: { marginEnd: 12, justifyContent: "space-around" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: nativeDefault.radii.lg, paddingLeft: 12, paddingRight: 12, paddingVertical: 12, flexDirection: "row", justifyContent: "center", alignItems: "center" };
let closure_7 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((onViewAllSelected) => {
  let Text2;
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  let items3;
  let obj13;
  let onAppSelected;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(23);
  ({ items, onAppSelected } = onViewAllSelected);
  onViewAllSelected = onViewAllSelected.onViewAllSelected;
  const tmp4 = closure_7();
  if (cResult[0] === items) {
    let tmp5;
    let tmp6;
    let tmp7;
    if (cResult[1] === onAppSelected) {
      tmp5 = cResult[2];
      tmp6 = cResult[3];
      tmp7 = cResult[4];
      _require = cResult[5];
    }
    const _Symbol = Symbol;
    if (tmp7 !== Symbol.for("react.early_return_sentinel")) {
      return tmp7;
    } else {
      let tmp16;
      let closure_4 = tmp6;
      const _Symbol2 = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "text-lg/bold", color: "mobile-text-heading-primary", children: intl.string(tmp(onViewAllSelected[10]).t.oJyzCu) };
        const Text = tmp(tmp2[9]).Text;
        intl = tmp(tmp2[10]).intl;
        const tmp18 = closure_5(Text, obj2);
        cResult[6] = tmp18;
        tmp16 = tmp18;
      } else {
        tmp16 = cResult[6];
      }
      if (cResult[7] === tmp6) {
        if (cResult[8] === onViewAllSelected) {
          if (cResult[9] === tmp4.viewAll) {
            let tmp20;
            if (cResult[10] === _require) {
              tmp20 = cResult[11];
            }
            if (cResult[12] === tmp4.headerContainer) {
              let tmp26;
              if (cResult[13] === tmp20) {
                tmp26 = cResult[14];
              }
              if (cResult[15] === tmp5) {
                if (cResult[16] === tmp4.scrollView) {
                  let tmp30;
                  if (cResult[17] === tmp4.scrollViewContentContainer) {
                    tmp30 = cResult[18];
                  }
                  if (cResult[19] === tmp4.container) {
                    if (cResult[20] === tmp26) {
                      let tmp34;
                      if (cResult[21] === tmp30) {
                        tmp34 = cResult[22];
                      }
                      return tmp34;
                    }
                  }
                  const obj3 = { style: tmp4.container, children: items1 };
                  items1 = [tmp26, tmp30];
                  const tmp37 = closure_6(items3, obj3);
                  cResult[19] = tmp4.container;
                  cResult[20] = tmp26;
                  cResult[21] = tmp30;
                  cResult[22] = tmp37;
                  tmp34 = tmp37;
                }
              }
              const obj4 = { style: null, contentContainerStyle: null, horizontal: true, showsHorizontalScrollIndicator: false, children: tmp5 };
              ({ scrollView: obj6.style, scrollViewContentContainer: obj6.contentContainerStyle } = tmp4);
              const tmp33 = closure_5(closure_4, obj4);
              cResult[15] = tmp5;
              cResult[16] = tmp4.scrollView;
              cResult[17] = tmp4.scrollViewContentContainer;
              cResult[18] = tmp33;
              tmp30 = tmp33;
            }
            const obj5 = { style: tmp4.headerContainer, children: items2 };
            items2 = [tmp16, tmp20];
            const tmp29 = closure_6(items3, obj5);
            cResult[12] = tmp4.headerContainer;
            cResult[13] = tmp20;
            cResult[14] = tmp29;
            tmp26 = tmp29;
          }
        }
      }
      let tmp23 = null != _require;
      if (tmp23) {
        const obj7 = {
          style: tmp4.viewAll,
          onPress() {
                  const tmp = null != closure_4 && onViewAllSelected();
                  return tmp;
                },
          accessibilityRole: "button",
          children: closure_5(Text2, obj13)
        };
        const PressableOpacity = tmp(tmp2[11]).PressableOpacity;
        obj13 = { variant: "text-sm/medium", color: "text-brand", children: intl2.string(tmp(onViewAllSelected[10]).t["/qG8v7"]) };
        Text2 = tmp(tmp2[9]).Text;
        intl2 = tmp(tmp2[10]).intl;
        tmp23 = closure_5(PressableOpacity, obj7);
      }
      cResult[7] = tmp6;
      cResult[8] = onViewAllSelected;
      cResult[9] = tmp4.viewAll;
      cResult[10] = _require;
      cResult[11] = tmp23;
      tmp20 = tmp23;
    }
  }
  items3 = [];
  let tmp9 = null;
  let tmp10;
  let tmp11;
  if (0 !== items.length) {
    const item = items.forEach((type) => {
      if (type.type === AppLauncherHomeTypes.AppLauncherHomeListItemType.RECOMMENDATION_APP) {
        items3.push(type);
      }
      if (type.type === AppLauncherHomeTypes.AppLauncherHomeListItemType.VIEW_ALL) {
        closure_0 = type;
      }
    });
    const substr = items3.slice(0, 8);
    const mapped = substr.map((appItem) => {
      const obj = { appItem, onAppSelected };
      return hasOwnProperty(closure_8, obj, appItem.application.id);
    });
    let mapped1;
    const found = mapped.filter(tmp(tmp2[8]).isNotNullish);
    if (_require != null) {
      const applications = _require.applications;
      mapped1 = applications.map((item) => item);
    }
    tmp10 = mapped1;
    tmp9 = tmp8;
    tmp11 = found;
  }
  cResult[0] = items;
  cResult[1] = onAppSelected;
  cResult[2] = tmp11;
  cResult[3] = tmp10;
  cResult[4] = tmp9;
  cResult[5] = _require;
  tmp7 = tmp9;
  tmp6 = tmp10;
  tmp5 = tmp11;
}) : ((arg0) => {
  let Text2;
  let intl;
  let intl2;
  let items;
  let items2;
  let items3;
  let obj5;
  let onAppSelected;
  let require;
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
        c2 = type;
      }
    });
    const substr = items1.slice(0, 8);
    const mapped = substr.map((appItem) => {
      const obj = { appItem, onAppSelected: require };
      return hasOwnProperty(closure_8, obj, appItem.application.id);
    });
    mapped1 = undefined;
    const found = mapped.filter(GlobalUtils.isNotNullish);
    if (dependencyMap != null) {
      const applications = dependencyMap.applications;
      mapped1 = applications.map((item) => item);
    }
    let obj = { style: tmp.container, children: items3 };
    const obj2 = { style: tmp.headerContainer, children: items2 };
    const obj3 = { variant: "text-lg/bold", color: "mobile-text-heading-primary", children: intl.string(intl3.t.oJyzCu) };
    const Text = Text_Text.Text;
    intl = intl3.intl;
    items2 = [closure_5(Text, obj3), ];
    let tmp5Result = null != dependencyMap;
    if (tmp5Result) {
      const obj4 = {
        style: tmp.viewAll,
        onPress() {
              const tmp = null != mapped1 && importDefault();
              return tmp;
            },
        accessibilityRole: "button",
        children: closure_5(Text2, obj5)
      };
      const PressableOpacity = Pressables.PressableOpacity;
      obj5 = { variant: "text-sm/medium", color: "text-brand", children: intl2.string(intl3.t["/qG8v7"]) };
      Text2 = Text_Text.Text;
      intl2 = intl3.intl;
      tmp5Result = closure_5(PressableOpacity, obj4);
    }
    items2[1] = tmp5Result;
    items3 = [closure_6(items1, obj2), ];
    const obj11 = { style: null, contentContainerStyle: null, horizontal: true, showsHorizontalScrollIndicator: false, children: found };
    ({ scrollView: obj6.style, scrollViewContentContainer: obj6.contentContainerStyle } = tmp);
    items3[1] = closure_5(mapped1, obj11);
    return closure_6(items1, obj);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((onAppSelected) => {
  let items;
  let tmp5;
  let obj = onAppSelected(576);
  const cResult = obj.c(17);
  onAppSelected = onAppSelected.onAppSelected;
  const appItem = onAppSelected.appItem;
  const tmp4 = closure_7();
  const application = appItem.application;
  if (cResult[0] !== application) {
    const tmpResult = tmp(11665);
    const appLauncherIconSource = tmpResult.getAppLauncherIconSource(application);
    cResult[0] = application;
    cResult[1] = appLauncherIconSource;
    tmp5 = appLauncherIconSource;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === application) {
    let tmp7;
    if (cResult[3] === onAppSelected) {
      tmp7 = cResult[4];
    }
    if (cResult[5] === tmp5) {
      let tmp8;
      let tmp12;
      if (cResult[6] === tmp4.iconContainer) {
        tmp8 = cResult[7];
      }
      if (cResult[8] !== application.name) {
        const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: application.name };
        const tmp14 = closure_5(onAppSelected(4886).Text, obj2);
        cResult[8] = application.name;
        cResult[9] = tmp14;
        tmp12 = tmp14;
      } else {
        tmp12 = cResult[9];
      }
      if (cResult[10] === application.id) {
        if (cResult[11] === application.name) {
          if (cResult[12] === tmp4.appCardContainer) {
            if (cResult[13] === tmp7) {
              if (cResult[14] === tmp8) {
                let tmp15;
                if (cResult[15] === tmp12) {
                  tmp15 = cResult[16];
                }
                return tmp15;
              }
            }
          }
        }
      }
      const obj3 = { accessible: true, accessibilityLabel: application.name, accessibilityRole: "button", onPress: tmp7, style: tmp4.appCardContainer, children: items };
      items = [tmp8, tmp12];
      const tmp17 = closure_6(onAppSelected(8567).PressableScale, obj3, application.id);
      cResult[10] = application.id;
      class C {
        constructor() {
          tmp2 = null != onAppSelected;
          tmp = onAppSelected;
          if (tmp2) {
            tmp3 = application;
            tmp2 = null != application;
          }
          if (tmp2) {
            obj = { application: null, sectionName: null };
            tmp4 = application;
            obj.application = application;
            tmp5 = closure_0;
            tmp6 = closure_2;
            obj.sectionName = closure_0(closure_2[13]).AppLauncherSectionName.APPS_IN_THIS_SERVER;
            tmpResult = tmp(obj);
          }
          return;
        }
      }
      cResult[12] = tmp4.appCardContainer;
      cResult[13] = tmp7;
      cResult[14] = tmp8;
      cResult[15] = tmp12;
      cResult[16] = tmp17;
      tmp15 = tmp17;
    }
    let tmp9 = null;
    if (null != tmp5) {
      const obj4 = { iconSource: tmp5, wrapperStyle: tmp4.iconContainer, iconSize: 36 };
      tmp9 = closure_5(application(11670), obj4);
    }
    cResult[5] = tmp5;
    cResult[6] = tmp4.iconContainer;
    cResult[7] = tmp9;
    tmp8 = tmp9;
  }
  class C {
    constructor() {
      tmp2 = null != onAppSelected;
      tmp = onAppSelected;
      if (tmp2) {
        tmp3 = application;
        tmp2 = null != application;
      }
      if (tmp2) {
        obj = { application: null, sectionName: null };
        tmp4 = application;
        obj.application = application;
        tmp5 = closure_0;
        tmp6 = closure_2;
        obj.sectionName = closure_0(closure_2[13]).AppLauncherSectionName.APPS_IN_THIS_SERVER;
        tmpResult = tmp(obj);
      }
      return;
    }
  }
  cResult[2] = application;
  cResult[3] = onAppSelected;
  cResult[4] = C;
  tmp7 = C;
}) : ((onAppSelected) => {
  let items;
  onAppSelected = onAppSelected.onAppSelected;
  const appItem = onAppSelected.appItem;
  const tmp = closure_7();
  const application = appItem.application;
  let tmp2 = onAppSelected;
  let obj = onAppSelected(11665);
  const appLauncherIconSource = obj.getAppLauncherIconSource(application);
  let tmp6 = null;
  const obj2 = {
    accessible: true,
    accessibilityLabel: application.name,
    accessibilityRole: "button",
    onPress() {
      const tmp2 = null != onAppSelected && null != application;
      if (tmp2) {
        const obj = { application, sectionName: AppLauncherTypes.AppLauncherSectionName.APPS_IN_THIS_SERVER };
        onAppSelected(obj);
      }
    },
    style: tmp.appCardContainer,
    children: items
  };
  const PressableScale = onAppSelected(8567).PressableScale;
  if (null != appLauncherIconSource) {
    const obj3 = { iconSource: appLauncherIconSource, wrapperStyle: tmp.iconContainer, iconSize: 36 };
    tmp6 = closure_5(application(11670), obj3);
  }
  items = [tmp6, ];
  const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: application.name };
  items[1] = closure_5(tmp2(4886).Text, obj4);
  return closure_6(PressableScale, obj2, application.id);
});
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/InThisServerSection.tsx");

export default tmp5;
export const IN_THIS_SERVER_ITEM_MAX = 8;