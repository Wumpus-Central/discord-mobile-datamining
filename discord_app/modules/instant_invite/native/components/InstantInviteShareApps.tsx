// === Module 9236: ? ===

// Module 9236
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import SHARE_APPS_KEY from "SHARE_APPS_KEY" /* 9237 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

const require = arg1;
let c4 = importAllResult;
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ SHARE_ITEMS: error, SHARE_ITEMS_DEFAULT: closure_8 } = SHARE_APPS_KEY);
let obj = { contentContainer: null };
obj = { padding: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_12, alignItems: "center" };
obj[0] = obj;
let closure_10 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function InstantInviteShareApps(onItemPressed) {
  onItemPressed = onItemPressed.onItemPressed;
  closure_1 = undefined;
  dependencyMap = undefined;
  let obj = onItemPressed(4821);
  closure_1 = obj.useFontScale();
  const tmp = callback2();
  [arr, c2] = callback(importAllResult.useState(closure_8), 2);
  const tmp2 = callback(importAllResult.useState(closure_8), 2);
  const gesture = onItemPressed(5533).useNativeGesture({ disallowInterruption: true });
  const effect = importAllResult.useEffect(() => {
    Promise.all(closure_1_7.map((isAvailable) => isAvailable.isAvailable)).then((arr) => {
      const items = [];
      const item = arr.forEach((arg0, arg1) => {
        if (arg0) {
          items.push(closure_1_7[arg1]);
        }
      });
      callback(items);
    });
  }, []);
  obj = {
    contentContainerStyle: items,
    showsHorizontalScrollIndicator: false,
    horizontal: true,
    children: arr.map((type) => {
      ({ fullIcon, getLabel, icon, IconComponent, onPress: onItemPressed } = type);
      obj = { style: obj, children: null };
      obj = { maxWidth: 76 * callback };
      if (null != fullIcon) {
        obj = { image: null, label: null, onPress: null, maxFontSizeMultiplier: 2 };
        obj[0] = fullIcon;
        obj[1] = getLabel();
        obj[2] = function onPress() {
          return closure_1_0(closure_0);
        };
        let tmpResult = tmp(onItemPressed(_undefined[9]).ImageButton, obj);
      } else {
        if (null == IconComponent) {
          if (icon == null) {
            icon = callback(tmp4[11]);
          }
          IconComponent = icon;
        }
        obj1 = { variant: "secondary", icon: null, label: null, onPress: null, maxFontSizeMultiplier: 2 };
        obj1[1] = IconComponent;
        obj1[2] = getLabel();
        obj1[3] = function onPress() {
          return closure_1_0(closure_0);
        };
        tmpResult = tmp(onItemPressed(_undefined[10]).IconButton, obj1);
        tmp4 = _undefined;
      }
      obj[1] = tmpResult;
      return closure_1_9(closure_1_5, obj, type.type);
    })
  };
  items = [tmp.contentContainer, onItemPressed.contentContainerStyle];
  const children = <closure_6 contentContainerStyle={items} showsHorizontalScrollIndicator={false} horizontal>{arr.map((type) => {
    ({ fullIcon, getLabel, icon, IconComponent, onPress: onItemPressed } = type);
    obj = { style: obj, children: null };
    obj = { maxWidth: 76 * callback };
    if (null != fullIcon) {
      obj = { image: null, label: null, onPress: null, maxFontSizeMultiplier: 2 };
      obj[0] = fullIcon;
      obj[1] = getLabel();
      obj[2] = function onPress() {
        return closure_1_0(closure_0);
      };
      let tmpResult = tmp(onItemPressed(_undefined[9]).ImageButton, obj);
    } else {
      if (null == IconComponent) {
        if (icon == null) {
          icon = callback(tmp4[11]);
        }
        IconComponent = icon;
      }
      obj1 = { variant: "secondary", icon: null, label: null, onPress: null, maxFontSizeMultiplier: 2 };
      obj1[1] = IconComponent;
      obj1[2] = getLabel();
      obj1[3] = function onPress() {
        return closure_1_0(closure_0);
      };
      tmpResult = tmp(onItemPressed(_undefined[10]).IconButton, obj1);
      tmp4 = _undefined;
    }
    obj[1] = tmpResult;
    return closure_1_9(closure_1_5, obj, type.type);
  })}</closure_6>;
  return jsx(onItemPressed(5533).GestureDetector, { gesture, children });
});
const result = require("set").fileFinishedImporting("modules/instant_invite/native/components/InstantInviteShareApps.tsx");

export default memoResult;