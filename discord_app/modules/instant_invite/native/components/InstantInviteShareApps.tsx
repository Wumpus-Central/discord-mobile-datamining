// === Module 9311: InstantInviteShareApps ===

// Module 9311 (InstantInviteShareApps)
import nativeDefault from "native" /* 575 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: closure_6 } = get_ActivityIndicator);
const InstantInviteConstants = fn(9312);
({ SHARE_ITEMS: metroImportDefault, SHARE_ITEMS_DEFAULT: closure_8 } = InstantInviteConstants);
const jsx = fn(21).jsx;
const createStyles = fn(5143);
let obj = { contentContainer: { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, alignItems: "center" } };
let closure_10 = createStyles.createStyles(obj);
let obj3 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, alignItems: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteShareApps.tsx");

export default noop.memo(function InstantInviteShareApps(onItemPressed) {
  onItemPressed = onItemPressed.onItemPressed;
  dependencyMap = undefined;
  const tmp = closure_10();
  closure_1 = onItemPressed(5778).useFontScale();
  let obj = onItemPressed(5778);
  [arr, c2] = noop.useState(closure_8);
  const tmp2 = _slicedToArray(noop.useState(closure_8), 2);
  gesture = onItemPressed(5430).useNativeGesture({ disallowInterruption: true });
  const effect = noop.useEffect(() => {
    Promise.all(metroImportDefault.map((isAvailable) => isAvailable.isAvailable)).then((arr) => {
      items = [];
      const item = arr.forEach((item, index) => {
        if (item) {
          items.push(closure_2_7[index]);
        }
      });
      _undefined(items);
    });
  }, []);
  let obj3 = {
    contentContainerStyle: null,
    showsHorizontalScrollIndicator: false,
    horizontal: true,
    children: arr.map((type) => {
      ({ fullIcon, getLabel, icon, IconComponent, onPress: onItemPressed } = type);
      const obj = { style: { maxWidth: 76 * closure_1 }, children: null };
      if (null != fullIcon) {
        const obj3 = {
          image: fullIcon,
          label: getLabel(),
          onPress() {
              return onItemPressed(closure_1_0);
            },
          maxFontSizeMultiplier: 2
        };
        let tmpResult = jsx(onItemPressed(_undefined[9]).ImageButton, {
          image: fullIcon,
          label: getLabel(),
          onPress() {
              return onItemPressed(closure_1_0);
            },
          maxFontSizeMultiplier: 2
        });
      } else {
        if (null == IconComponent) {
          if (icon == null) {
            icon = closure_1(_undefined[11]);
          }
          IconComponent = icon;
        }
        const obj4 = {
          variant: "secondary",
          icon: IconComponent,
          label: getLabel(),
          onPress() {
              return onItemPressed(closure_1_0);
            },
          maxFontSizeMultiplier: 2
        };
        tmpResult = jsx(onItemPressed(_undefined[10]).IconButton, {
          variant: "secondary",
          icon: IconComponent,
          label: getLabel(),
          onPress() {
              return onItemPressed(closure_1_0);
            },
          maxFontSizeMultiplier: 2
        });
      }
      obj.children = tmpResult;
      return <closure_1_5 key={type.type} style={{ maxWidth: 76 * closure_1 }}>{null}</closure_1_5>;
    })
  };
  items = [tmp.contentContainer, onItemPressed.contentContainerStyle];
  obj3.contentContainerStyle = items;
  const children = <closure_6 contentContainerStyle={null} showsHorizontalScrollIndicator={false} horizontal>{arr.map((type) => {
    ({ fullIcon, getLabel, icon, IconComponent, onPress: onItemPressed } = type);
    const obj = { style: { maxWidth: 76 * closure_1 }, children: null };
    if (null != fullIcon) {
      const obj3 = {
        image: fullIcon,
        label: getLabel(),
        onPress() {
            return onItemPressed(closure_1_0);
          },
        maxFontSizeMultiplier: 2
      };
      let tmpResult = jsx(onItemPressed(_undefined[9]).ImageButton, {
        image: fullIcon,
        label: getLabel(),
        onPress() {
            return onItemPressed(closure_1_0);
          },
        maxFontSizeMultiplier: 2
      });
    } else {
      if (null == IconComponent) {
        if (icon == null) {
          icon = closure_1(_undefined[11]);
        }
        IconComponent = icon;
      }
      const obj4 = {
        variant: "secondary",
        icon: IconComponent,
        label: getLabel(),
        onPress() {
            return onItemPressed(closure_1_0);
          },
        maxFontSizeMultiplier: 2
      };
      tmpResult = jsx(onItemPressed(_undefined[10]).IconButton, {
        variant: "secondary",
        icon: IconComponent,
        label: getLabel(),
        onPress() {
            return onItemPressed(closure_1_0);
          },
        maxFontSizeMultiplier: 2
      });
    }
    obj.children = tmpResult;
    return <closure_1_5 key={type.type} style={{ maxWidth: 76 * closure_1 }}>{null}</closure_1_5>;
  })}</closure_6>;
  return jsx(onItemPressed(5430).GestureDetector, { gesture, children });
});