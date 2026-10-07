// discord_app/modules/app_launcher/native/screens/home/InThisServerSection.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import GlobalUtils from "../../../../../utils/GlobalUtils.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import AppLauncherTypes from "../../../AppLauncherTypes.tsx";
import AppLauncherHomeTypes from "AppLauncherHomeTypes.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4896);
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
fn(558);
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT,
  borderRadius: nativeDefault.radii.lg,
  paddingLeft: 12,
  paddingRight: 12,
  paddingVertical: 12,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};
const ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onAppSelected) => {
      const cResult = onAppSelected(576).c(17);
      onAppSelected = onAppSelected.onAppSelected;
      const tmp4 = closure_7();
      const application = onAppSelected.appItem.application;
      if (cResult[0] !== application) {
        const appLauncherIconSource = tmp(11679).getAppLauncherIconSource(application);
        cResult[0] = application;
        cResult[1] = appLauncherIconSource;
        let tmp5 = appLauncherIconSource;
        const tmpResult = tmp(11679);
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === application) {
        if (cResult[3] === onAppSelected) {
          let tmp7 = cResult[4];
        }
        if (cResult[5] === tmp5) {
          if (cResult[6] === tmp4.iconContainer) {
            let tmp8 = cResult[7];
          }
          if (cResult[8] !== application.name) {
            const obj2 = {
              variant: "text-md/semibold",
              color: "mobile-text-heading-primary",
              lineClamp: 1,
              children: application.name,
            };
            const tmp14 = closure_5(tmp(4892).Text, obj2);
            cResult[8] = application.name;
            cResult[9] = tmp14;
            let tmp12 = tmp14;
          } else {
            tmp12 = cResult[9];
          }
          if (cResult[10] === application.id) {
            if (cResult[11] === application.name) {
              if (cResult[12] === tmp4.appCardContainer) {
                if (cResult[13] === tmp7) {
                  if (cResult[14] === tmp8) {
                    if (cResult[15] === tmp12) {
                      let tmp15 = cResult[16];
                    }
                    return tmp15;
                  }
                }
              }
            }
          }
          const obj3 = {
            accessible: true,
            accessibilityLabel: application.name,
            accessibilityRole: "button",
            onPress: tmp7,
            style: tmp4.appCardContainer,
            children: null,
          };
          const items = [tmp8, tmp12];
          obj3.children = items;
          const tmp17 = closure_6(tmp(8602).PressableScale, obj3, application.id);
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
          tmp9 = closure_5(application(11684), obj4);
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
      let obj = onAppSelected(576);
    }
  : (onAppSelected) => {
      onAppSelected = onAppSelected.onAppSelected;
      const tmp = closure_7();
      const application = onAppSelected.appItem.application;
      const appLauncherIconSource = onAppSelected(11679).getAppLauncherIconSource(application);
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
        tmp6 = closure_5(application(11684), obj3);
      }
      const items = [
        tmp6,
        closure_5(onAppSelected(4892).Text, {
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          lineClamp: 1,
          children: application.name,
        }),
      ];
      obj2.children = items;
      return closure_6(onAppSelected(8602).PressableScale, obj2, application.id);
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/InThisServerSection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (onViewAllSelected) => {
      const cResult = require("c").c(23);
      ({ items, onAppSelected } = onViewAllSelected);
      onViewAllSelected = onViewAllSelected.onViewAllSelected;
      const tmp4 = closure_7();
      if (cResult[0] === items) {
        if (cResult[1] === onAppSelected) {
          let tmp5 = cResult[2];
          let tmp6 = cResult[3];
          let tmp7 = cResult[4];
          _require = cResult[5];
        }
        const _Symbol = Symbol;
        if (tmp7 !== Symbol.for("react.early_return_sentinel")) {
          return tmp7;
        } else {
          closure_4 = tmp6;
          const _Symbol2 = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const obj2 = { variant: "text-lg/bold", color: "mobile-text-heading-primary", children: null };
            const intl = tmp(tmp2[10]).intl;
            obj2.children = intl.string(tmp(tmp2[10]).t.oJyzCu);
            const tmp18 = closure_5(tmp(tmp2[9]).Text, obj2);
            cResult[6] = tmp18;
            let tmp16 = tmp18;
          } else {
            tmp16 = cResult[6];
          }
          if (cResult[7] === tmp6) {
            if (cResult[8] === onViewAllSelected) {
              if (cResult[9] === tmp4.viewAll) {
                if (cResult[10] === _require) {
                  let tmp20 = cResult[11];
                }
                if (cResult[12] === tmp4.headerContainer) {
                  if (cResult[13] === tmp20) {
                    let tmp26 = cResult[14];
                  }
                  if (cResult[15] === tmp5) {
                    if (cResult[16] === tmp4.scrollView) {
                      if (cResult[17] === tmp4.scrollViewContentContainer) {
                        let tmp30 = cResult[18];
                      }
                      if (cResult[19] === tmp4.container) {
                        if (cResult[20] === tmp26) {
                          if (cResult[21] === tmp30) {
                            let tmp34 = cResult[22];
                          }
                          return tmp34;
                        }
                      }
                      const obj3 = { style: tmp4.container, children: null };
                      const items1 = [tmp26, tmp30];
                      obj3.children = items1;
                      const tmp37 = closure_6(items3, obj3);
                      cResult[19] = tmp4.container;
                      cResult[20] = tmp26;
                      cResult[21] = tmp30;
                      cResult[22] = tmp37;
                      tmp34 = tmp37;
                    }
                  }
                  const obj4 = {
                    style: null,
                    contentContainerStyle: null,
                    horizontal: true,
                    showsHorizontalScrollIndicator: false,
                    children: null,
                  };
                  ({ scrollView: obj6.style, scrollViewContentContainer: obj6.contentContainerStyle } = tmp4);
                  obj4.children = tmp5;
                  const tmp33 = closure_5(closure_4, obj4);
                  cResult[15] = tmp5;
                  cResult[16] = tmp4.scrollView;
                  cResult[17] = tmp4.scrollViewContentContainer;
                  cResult[18] = tmp33;
                  tmp30 = tmp33;
                }
                const obj5 = { style: tmp4.headerContainer, children: null };
                const items2 = [tmp16, tmp20];
                obj5.children = items2;
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
                let tmp = null != closure_4;
                if (tmp) {
                  tmp = onViewAllSelected();
                }
                return tmp;
              },
              accessibilityRole: "button",
              children: null,
            };
            const obj13 = { variant: "text-sm/medium", color: "text-brand", children: null };
            const intl2 = tmp(tmp2[10]).intl;
            obj13.children = intl2.string(tmp(tmp2[10]).t["/qG8v7"]);
            obj7.children = closure_5(tmp(tmp2[9]).Text, obj13);
            tmp23 = closure_5(tmp(tmp2[11]).PressableOpacity, obj7);
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
        const mapped = substr.map((appItem) =>
          hasOwnProperty(closure_8, { appItem, onAppSelected }, appItem.application.id),
        );
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
      const obj = require("c");
    }
  : (arg0) => {
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
          hasOwnProperty(closure_8, { appItem, onAppSelected }, appItem.application.id),
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
    };
export const IN_THIS_SERVER_ITEM_MAX = 8;
