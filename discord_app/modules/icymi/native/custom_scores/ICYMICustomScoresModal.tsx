import { NavigationStack } from "../../../../design/components/Navigator/native/Navigator.native.tsx";
// discord_app/modules/icymi/native/custom_scores/ICYMICustomScoresModal.tsx
import "noop";
import jsxProd from "jsxProd";
import createNativeStackNavigator from "createNativeStackNavigator";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
createNativeStackNavigator = { header: null };
createNativeStackNavigator = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createNativeStackNavigator[0] = createNativeStackNavigator;
createNativeStackNavigator = createCacheKey.createStyles(createNativeStackNavigator);
const result = require("createNativeStackNavigator").fileFinishedImporting("modules/icymi/native/custom_scores/ICYMICustomScoresModal.tsx");

export default function ICYMICustomScoresModal() {
  const _require = createNativeStackNavigator();
  let obj = _NavigationStack;
  let closure_1 = obj.useAccessibilityNativeStackOptions();
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
      obj[1] = lib(8193).getRenderModalCloseImage(navigation.navigation);
      const merged = Object.assign(callback(9597)());
      return obj;
    },
    getComponent() {
      return lib(15445).default;
    }
  };
  const items = [
    callback(createNativeStackNavigator.Screen, obj),
    callback(createNativeStackNavigator.Screen, {
      name: "guild",
      options(navigation) {
        const obj = { headerLeft: null };
        obj[0] = lib(8193).getRenderModalBackImage(navigation.navigation);
        return obj;
      },
      getComponent() {
        return lib(15446).default;
      }
    })
  ];
  obj[2] = items;
  return callback2(createNativeStackNavigator.Navigator, obj);
};