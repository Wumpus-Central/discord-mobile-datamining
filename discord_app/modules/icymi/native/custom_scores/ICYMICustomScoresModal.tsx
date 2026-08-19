// discord_app/modules/icymi/native/custom_scores/ICYMICustomScoresModal.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createNativeStackNavigator from "../../../../../_runtime/09931_createNativeStackNavigator.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import { NavigationStack } from "../../../../design/components/Navigator/native/Navigator.native.tsx";

const require = fn;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createNativeStackNavigator.createNativeStackNavigator();
createNativeStackNavigator = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createNativeStackNavigator[0] = createNativeStackNavigator;
let closure_6 = createCacheKey.createStyles(createNativeStackNavigator);
const result = require("obj132").fileFinishedImporting("modules/icymi/native/custom_scores/ICYMICustomScoresModal.tsx");

export default function ICYMICustomScoresModal() {
  const _require = callback3();
  let obj = NavigationStack;
  closure_1 = obj.useAccessibilityNativeStackOptions();
  obj = {
    name: "default",
    options(navigation) {
      const obj = { title: null, headerLeft: null };
      const intl = lib(1236).intl;
      obj[0] = intl.string(lib(1236).t.jVshKt);
      obj[1] = lib(8492).getRenderModalCloseImage(navigation.navigation);
      const merged = Object.assign(callback(9941)());
      return obj;
    },
    getComponent() {
      return lib(15712).default;
    }
  };
  const items = [
    callback(closure_5.Screen, obj),
    callback(closure_5.Screen, {
      name: "guild",
      options(navigation) {
        const obj = { headerLeft: lib(8492).getRenderModalBackImage(navigation.navigation) };
        return obj;
      },
      getComponent() {
        return lib(15713).default;
      }
    })
  ];
  obj[2] = items;
  return callback2(closure_5.Navigator, obj);
};