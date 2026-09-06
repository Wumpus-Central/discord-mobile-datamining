// === Module 9855: InstantInviteShareApps ===

// Module 9855 (InstantInviteShareApps)
import nativeDefault from "native" /* 576 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const InstantInviteConstants = fn(9856);
({ SHARE_ITEMS: closure_7, SHARE_ITEMS_DEFAULT: closure_8 } = InstantInviteConstants);
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { contentContainer: null };
obj = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, alignItems: "center" };
obj.contentContainer = obj;
let closure_10 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteShareApps.tsx");

export default noop.memo(function InstantInviteShareApps(onItemPressed) {
  onItemPressed = onItemPressed.onItemPressed;
  dependencyMap = undefined;
  let obj = onItemPressed(4982);
  closure_1 = obj.useFontScale();
  const tmp = closure_10();
  [arr, c2] = _slicedToArray(noop.useState(closure_8), 2);
  const tmp2 = _slicedToArray(noop.useState(closure_8), 2);
  const gesture = onItemPressed(6655).useNativeGesture({ disallowInterruption: true });
  const effect = noop.useEffect(() => {
    Promise.all(React5.map((isAvailable) => isAvailable.isAvailable)).then((arr) => {
      const items = [];
      const item = arr.forEach((item, index) => {
        if (item) {
          items.push(closure_2_7[index]);
        }
      });
      _undefined(items);
    });
  }, []);
  obj = {
    contentContainerStyle: null,
    showsHorizontalScrollIndicator: false,
    horizontal: true,
    children: arr.map((type) => {
      ({ fullIcon, getLabel, icon, IconComponent, onPress: onItemPressed } = type);
      let obj = { style: null, children: null };
      obj = { maxWidth: 76 * closure_1 };
      obj.style = obj;
      if (null != fullIcon) {
        obj = {
          image: fullIcon,
          label: getLabel(),
          onPress() {
              return onItemPressed(closure_1_0);
            },
          maxFontSizeMultiplier: 2
        };
        let tmpResult = tmp(onItemPressed(_undefined[9]).ImageButton, obj);
      } else {
        if (null == IconComponent) {
          if (icon == null) {
            icon = closure_1(tmp4[11]);
          }
          IconComponent = icon;
        }
        const obj1 = {
          variant: "secondary",
          icon: IconComponent,
          label: getLabel(),
          onPress() {
              return onItemPressed(closure_1_0);
            },
          maxFontSizeMultiplier: 2
        };
        tmpResult = tmp(onItemPressed(_undefined[10]).IconButton, obj1);
        tmp4 = _undefined;
      }
      obj.children = tmpResult;
      return <closure_1_5 key={arg0.type} maxWidth={76 * closure_1} />;
    })
  };
  let items = [tmp.contentContainer, onItemPressed.contentContainerStyle];
  obj.contentContainerStyle = items;
  const children = <closure_6 contentContainerStyle={null} showsHorizontalScrollIndicator={false} horizontal>{arr.map((type) => {
    ({ fullIcon, getLabel, icon, IconComponent, onPress: onItemPressed } = type);
    let obj = { style: null, children: null };
    obj = { maxWidth: 76 * closure_1 };
    obj.style = obj;
    if (null != fullIcon) {
      obj = {
        image: fullIcon,
        label: getLabel(),
        onPress() {
            return onItemPressed(closure_1_0);
          },
        maxFontSizeMultiplier: 2
      };
      let tmpResult = tmp(onItemPressed(_undefined[9]).ImageButton, obj);
    } else {
      if (null == IconComponent) {
        if (icon == null) {
          icon = closure_1(tmp4[11]);
        }
        IconComponent = icon;
      }
      const obj1 = {
        variant: "secondary",
        icon: IconComponent,
        label: getLabel(),
        onPress() {
            return onItemPressed(closure_1_0);
          },
        maxFontSizeMultiplier: 2
      };
      tmpResult = tmp(onItemPressed(_undefined[10]).IconButton, obj1);
      tmp4 = _undefined;
    }
    obj.children = tmpResult;
    return <closure_1_5 key={arg0.type} maxWidth={76 * closure_1} />;
  })}</closure_6>;
  return jsx(onItemPressed(6655).GestureDetector, { gesture, children });
});