// discord_app/modules/icymi/native/custom_scores/ICYMICustomScoresModal.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createNativeStackNavigator from "../../../../../_runtime/07769_createNativeStackNavigator.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import { NavigationStack } from "../../../../design/components/Navigator/native/Navigator.native.tsx";

const require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createNativeStackNavigator.createNativeStackNavigator();
createNativeStackNavigator = { header: null };
createNativeStackNavigator = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createNativeStackNavigator[0] = createNativeStackNavigator;
let closure_6 = createCacheKey.createStyles(createNativeStackNavigator);
const result = require("set").fileFinishedImporting("modules/icymi/native/custom_scores/ICYMICustomScoresModal.tsx");

export default function ICYMICustomScoresModal() {
  const _require = callback3();
  let obj = NavigationStack;
  closure_1 = obj.useAccessibilityNativeStackOptions();
  obj = {
    screenOptions() {
      let merged = Object.assign(closure_1);
      return {
        headerStyle: lib.header,
        headerTitle(children) {
          const merged = Object.assign(children, Object.create(null));
          const merged1 = Object.assign(merged);
          return callback2(callback(table[6]).GenericHeaderTitle, { title: children.children });
        },
        headerTitleAlign: "center"
      };
    },
    initialRouteName: "default",
    children: null
  };
  obj = {
    name: "default",
    options(navigation) {
      const obj = { title: null, headerLeft: null };
      const intl = lib(1236).intl;
      obj[0] = intl.string(lib(1236).t.jVshKt);
      obj[1] = lib(7554).getRenderModalCloseImage(navigation.navigation);
      const merged = Object.assign(callback(10600)());
      return obj;
    },
    getComponent() {
      return lib(15975).default;
    }
  };
  const items = [
    callback(closure_5.Screen, obj),
    callback(closure_5.Screen, {
      name: "guild",
      options(navigation) {
        const obj = { headerLeft: lib(7554).getRenderModalBackImage(navigation.navigation) };
        return obj;
      },
      getComponent() {
        return lib(15976).default;
      }
    })
  ];
  obj[2] = items;
  return callback2(closure_5.Navigator, obj);
};