import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import SHARE_APPS_KEY from "SHARE_APPS_KEY";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
let c4 = importAllResult;
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ SHARE_ITEMS: error, SHARE_ITEMS_DEFAULT: metroImportAll } = SHARE_APPS_KEY);
let obj = { contentContainer: null };
obj = { padding: require("Themes").space.PX_16, gap: require("Themes").space.PX_12, alignItems: "center" };
obj[0] = obj;
let closure_10 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function InstantInviteShareApps(onItemPressed) {
  let arr;
  let c2;
  onItemPressed = onItemPressed.onItemPressed;
  let closure_1;
  let dependencyMap;
  let obj = onItemPressed(4610);
  closure_1 = obj.useFontScale();
  const tmp = callback2();
  [arr, c2] = callback(importAllResult.useState(closure_8), 2);
  const gesture = importAllResult.useMemo(() => {
    const Gesture = onItemPressed(_undefined[8]).Gesture;
    return Gesture.Native().disallowInterruption(true);
  }, []);
  const effect = importAllResult.useEffect(() => {
    Promise.all(outer1_7.map((isAvailable) => isAvailable.isAvailable)).then((arr) => {
      const items = [];
      const item = arr.forEach((arg0, arg1) => {
        if (arg0) {
          items.push(outer1_7[arg1]);
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
      let IconComponent;
      let fullIcon;
      let getLabel;
      let icon;
      let onItemPressed;
      ({ fullIcon, getLabel, icon, IconComponent, onPress: onItemPressed } = type);
      obj = { style: obj, children: null };
      obj = { maxWidth: 76 * callback };
      if (null != fullIcon) {
        obj = { image: null, label: null, onPress: null, maxFontSizeMultiplier: 2 };
        obj[0] = fullIcon;
        obj[1] = getLabel();
        obj[2] = function onPress() {
          return outer1_0(closure_0);
        };
        let tmpResult = tmp(onItemPressed(_undefined[9]).ImageButton, obj);
      } else {
        if (null == IconComponent) {
          if (icon == null) {
            icon = callback(tmp4[11]);
          }
          IconComponent = icon;
        }
        const obj1 = { variant: "secondary", icon: null, label: null, onPress: null, maxFontSizeMultiplier: 2 };
        obj1[1] = IconComponent;
        obj1[2] = getLabel();
        obj1[3] = function onPress() {
          return outer1_0(closure_0);
        };
        tmpResult = tmp(onItemPressed(_undefined[10]).IconButton, obj1);
        tmp4 = _undefined;
      }
      obj[1] = tmpResult;
      return outer1_9(outer1_5, obj, type.type);
    })
  };
  items = [tmp.contentContainer, onItemPressed.contentContainerStyle];
  const children = <closure_6 contentContainerStyle={items} showsHorizontalScrollIndicator={false} horizontal>{arr.map((type) => {
    let IconComponent;
    let fullIcon;
    let getLabel;
    let icon;
    let onItemPressed;
    ({ fullIcon, getLabel, icon, IconComponent, onPress: onItemPressed } = type);
    obj = { style: obj, children: null };
    obj = { maxWidth: 76 * callback };
    if (null != fullIcon) {
      obj = { image: null, label: null, onPress: null, maxFontSizeMultiplier: 2 };
      obj[0] = fullIcon;
      obj[1] = getLabel();
      obj[2] = function onPress() {
        return outer1_0(closure_0);
      };
      let tmpResult = tmp(onItemPressed(_undefined[9]).ImageButton, obj);
    } else {
      if (null == IconComponent) {
        if (icon == null) {
          icon = callback(tmp4[11]);
        }
        IconComponent = icon;
      }
      const obj1 = { variant: "secondary", icon: null, label: null, onPress: null, maxFontSizeMultiplier: 2 };
      obj1[1] = IconComponent;
      obj1[2] = getLabel();
      obj1[3] = function onPress() {
        return outer1_0(closure_0);
      };
      tmpResult = tmp(onItemPressed(_undefined[10]).IconButton, obj1);
      tmp4 = _undefined;
    }
    obj[1] = tmpResult;
    return outer1_9(outer1_5, obj, type.type);
  })}</closure_6>;
  return jsx(onItemPressed(5277).GestureDetector, { gesture, children });
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/instant_invite/native/components/InstantInviteShareApps.tsx");

export default memoResult;