// discord_app/modules/main_tabs_v2/native/utils/ModalStackNavigator.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import Navigator2 from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import HeaderShared from "../shared_components/HeaderShared.tsx";
import getNavigationModalPresentationDefault from "getNavigationModalPresentation.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import NativeStackView from "../../../../../_runtime/07568_NativeStackView.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let dependencyMap, titleIcon;

let closure_3 = ["children"];
const jsx = Fragment.jsx;
let Navigator = NativeStackView.createNativeStackNavigator();
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (titleIcon) => {
        let accessibilityNativeStackOptions;
        let screenKey;
        let title;
        let obj = title(accessibilityNativeStackOptions[5]);
        const cResult = obj.c(13);
        ({ screenKey, title } = titleIcon);
        titleIcon = titleIcon.titleIcon;
        const render = titleIcon.render;
        let obj2 = title(accessibilityNativeStackOptions[6]);
        accessibilityNativeStackOptions = obj2.useAccessibilityNativeStackOptions();
        if (cResult[0] === accessibilityNativeStackOptions) {
          let tmp3;
          let tmp4;
          if (cResult[1] === titleIcon) {
            tmp3 = cResult[2];
          }
          if (cResult[3] !== title) {
            const fn2 = function v() {
              let str;
              const obj = { title, orientation: str };
              str = undefined;
              const obj2 = PlatformUtils;
              if (obj2.isIOS()) {
                str = "portrait";
              }
              return obj;
            };
            cResult[3] = title;
            cResult[4] = fn2;
            tmp4 = fn2;
          } else {
            tmp4 = cResult[4];
          }
          if (cResult[5] === render) {
            if (cResult[6] === screenKey) {
              let tmp5;
              if (cResult[7] === tmp4) {
                tmp5 = cResult[8];
              }
              if (cResult[9] === screenKey) {
                if (cResult[10] === tmp3) {
                  let tmp9;
                  if (cResult[11] === tmp5) {
                    tmp9 = cResult[12];
                  }
                  return tmp9;
                }
              }
              const tmp12 = (
                <closure_6.Navigator initialRouteName={screenKey} screenOptions={tmp3}>
                  {tmp5}
                </closure_6.Navigator>
              );
              cResult[9] = screenKey;
              cResult[10] = tmp3;
              cResult[11] = tmp5;
              cResult[12] = tmp12;
              tmp9 = tmp12;
            }
          }
          const tmp8 = (
            <closure_6.Screen name={screenKey} options={tmp4}>
              {render}
            </closure_6.Screen>
          );
          cResult[5] = render;
          cResult[6] = screenKey;
          cResult[7] = tmp4;
          cResult[8] = tmp8;
          tmp5 = tmp8;
        }
        const fn = function s(navigation) {
          let icon;
          let obj2;
          const obj = {
            headerTitle(children) {
              children = children.children;
              const tmp = _objectWithoutProperties(children, closure_2_3);
              const GenericHeaderTitle = title(accessibilityNativeStackOptions[7]).GenericHeaderTitle;
              const merged = Object.assign(tmp);
              return <GenericHeaderTitle title={children} icon={icon} />;
            },
            headerLeft: obj2.getRenderModalCloseImage(navigation),
            headerTitleAlign: "center",
          };
          navigation = navigation.navigation;
          obj2 = HeaderShared;
          let merged = Object.assign(accessibilityNativeStackOptions);
          const merged1 = Object.assign(getNavigationModalPresentationDefault());
          return obj;
        };
        cResult[0] = accessibilityNativeStackOptions;
        cResult[1] = titleIcon;
        cResult[2] = fn;
        tmp3 = fn;
      }
    : (render) => {
        let closure_2;
        let screenKey;
        let title;
        ({ screenKey, title: require, titleIcon: importDefault } = render);
        render = render.render;
        let obj = Navigator2;
        dependencyMap = obj.useAccessibilityNativeStackOptions();
        Navigator = Navigator.Navigator;
        return (
          <Navigator
            initialRouteName={screenKey}
            screenOptions={function screenOptions(navigation) {
              let icon;
              let obj2;
              const obj = {
                headerTitle(children) {
                  children = children.children;
                  const merged = Object.assign(children, Object.assign({ children: 0 }));
                  const GenericHeaderTitle = require("HeaderShared").GenericHeaderTitle;
                  const merged1 = Object.assign(merged);
                  return <GenericHeaderTitle title={children} icon={icon} />;
                },
                headerLeft: obj2.getRenderModalCloseImage(navigation),
                headerTitleAlign: "center",
              };
              navigation = navigation.navigation;
              obj2 = HeaderShared;
              let merged = Object.assign(closure_2);
              let merged1 = Object.assign(getNavigationModalPresentationDefault());
              return obj;
            }}
          >
            {null}
          </Navigator>
        );
      },
);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/utils/ModalStackNavigator.tsx");

export default memoResult;
