// discord_app/modules/instant_invite/native/components/InstantInviteShareApps.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import SHARE_APPS_KEY from "InstantInviteConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
let c4 = importAllResult;
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ SHARE_ITEMS: error, SHARE_ITEMS_DEFAULT: closure_8 } = SHARE_APPS_KEY);
let obj = { padding: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_12, alignItems: "center" };
obj[0] = obj;
let closure_10 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function InstantInviteShareApps(onItemPressed) {
  onItemPressed = onItemPressed.onItemPressed;
  dependencyMap = undefined;
  let obj = onItemPressed(4751);
  closure_1 = obj.useFontScale();
  const tmp = callback2();
  [arr, c2] = callback(importAllResult.useState(closure_8), 2);
  const tmp2 = callback(importAllResult.useState(closure_8), 2);
  const gesture = onItemPressed(6377).useNativeGesture({ disallowInterruption: true });
  const effect = importAllResult.useEffect(() => {
    Promise.all(closure_1_7.map((item, index) => item.isAvailable)).then((result) => {
      const items = [];
      const item = result.forEach((item, index) => {
        if (item) {
          items.push(closure_1_7[index]);
        }
      });
      callback(items);
    });
  }, []);
  obj = {
    contentContainerStyle: items,
    showsHorizontalScrollIndicator: false,
    horizontal: true,
    children: arr.map((item, index) => {
      ({ fullIcon, getLabel, icon, IconComponent, onPress: onItemPressed } = item);
      let obj = { maxWidth: 76 * callback };
      if (null != fullIcon) {
        obj = { image: null, label: null, onPress: null, maxFontSizeMultiplier: 2 };
        obj[0] = fullIcon;
        obj[1] = getLabel();
        obj[2] = function onPress() {
          return onItemPressed(closure_0);
        };
        let tmpResult = jsx(onItemPressed(_undefined[9]).ImageButton, { image: null, label: null, onPress: null, maxFontSizeMultiplier: 2 });
      } else {
        if (null == IconComponent) {
          if (icon == null) {
            icon = callback(_undefined[11]);
          }
          IconComponent = icon;
        }
        obj1 = { variant: "secondary", icon: null, label: null, onPress: null, maxFontSizeMultiplier: 2 };
        obj1[1] = IconComponent;
        obj1[2] = getLabel();
        obj1[3] = function onPress() {
          return onItemPressed(closure_0);
        };
        tmpResult = jsx(onItemPressed(_undefined[10]).IconButton, { variant: "secondary", icon: null, label: null, onPress: null, maxFontSizeMultiplier: 2 });
      }
      obj[1] = tmpResult;
      return <closure_1_5 key={item.type} maxWidth={76 * callback} />;
    })
  };
  items = [tmp.contentContainer, onItemPressed.contentContainerStyle];
  const children = <closure_6 contentContainerStyle={items} showsHorizontalScrollIndicator={false} horizontal>{arr.map((item, index) => {
    ({ fullIcon, getLabel, icon, IconComponent, onPress: onItemPressed } = item);
    let obj = { maxWidth: 76 * callback };
    if (null != fullIcon) {
      obj = { image: null, label: null, onPress: null, maxFontSizeMultiplier: 2 };
      obj[0] = fullIcon;
      obj[1] = getLabel();
      obj[2] = function onPress() {
        return onItemPressed(closure_0);
      };
      let tmpResult = jsx(onItemPressed(_undefined[9]).ImageButton, { image: null, label: null, onPress: null, maxFontSizeMultiplier: 2 });
    } else {
      if (null == IconComponent) {
        if (icon == null) {
          icon = callback(_undefined[11]);
        }
        IconComponent = icon;
      }
      obj1 = { variant: "secondary", icon: null, label: null, onPress: null, maxFontSizeMultiplier: 2 };
      obj1[1] = IconComponent;
      obj1[2] = getLabel();
      obj1[3] = function onPress() {
        return onItemPressed(closure_0);
      };
      tmpResult = jsx(onItemPressed(_undefined[10]).IconButton, { variant: "secondary", icon: null, label: null, onPress: null, maxFontSizeMultiplier: 2 });
    }
    obj[1] = tmpResult;
    return <closure_1_5 key={item.type} maxWidth={76 * callback} />;
  })}</closure_6>;
  return jsx(onItemPressed(6377).GestureDetector, { gesture, children });
});
const result = require("obj132").fileFinishedImporting("modules/instant_invite/native/components/InstantInviteShareApps.tsx");

export default memoResult;