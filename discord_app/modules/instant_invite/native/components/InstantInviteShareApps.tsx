// === Module 9529: InstantInviteShareApps ===

// Module 9529 (InstantInviteShareApps)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import InstantInviteConstants from "components/InstantInviteConstants" /* 9530 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, onItemPressed;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ SHARE_ITEMS: metroImportDefault, SHARE_ITEMS_DEFAULT: metroImportAll } = InstantInviteConstants);
const jsx = Fragment.jsx;
let obj = { contentContainer: obj2 };
obj2 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, alignItems: "center" };
let closure_10 = createStyles.createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((onItemPressed) => {
  let arr;
  let first;
  let tmp10;
  let tmp9;
  let tmp = onItemPressed;
  const obj = onItemPressed(576);
  const cResult = obj.c(19);
  onItemPressed = onItemPressed.onItemPressed;
  const contentContainerStyle = onItemPressed.contentContainerStyle;
  const tmp4 = closure_10();
  let obj2 = onItemPressed(5609);
  const fontScale = obj2.useFontScale();
  [arr, dependencyMap] = react.useState(closure_8);
  _slicedToArray(react.useState(closure_8), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { disallowInterruption: true };
    cResult[0] = obj4;
    first = obj4;
  } else {
    first = cResult[0];
  }
  let tmpResult = tmp(6147);
  const nativeGesture = tmpResult.useNativeGesture(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function x() {
      const allPromises = Promise.all(metroImportDefault.map((isAvailable) => isAvailable.isAvailable));
      allPromises.then((arr) => {
        const items = [];
        const item = arr.forEach((item, index) => {
          const tmp = item;
          if (tmp) {
            items.push(closure_2_7[index]);
          }
        });
        closure_1_2(items);
      });
    };
    let items = [];
    cResult[1] = fn;
    cResult[2] = items;
    tmp10 = items;
    tmp9 = fn;
  } else {
    tmp9 = cResult[1];
    tmp10 = cResult[2];
  }
  const effect = react.useEffect(tmp9, tmp10);
  if (cResult[3] === contentContainerStyle) {
    let tmp12;
    let tmp13;
    if (cResult[4] === tmp4.contentContainer) {
      tmp12 = cResult[5];
    }
    if (cResult[6] === fontScale) {
      if (cResult[7] === onItemPressed) {
        if (cResult[8] === arr) {
          tmp13 = cResult[9];
        }
        if (cResult[13] === tmp12) {
          let tmp16;
          if (cResult[14] === tmp13) {
            tmp16 = cResult[15];
          }
          if (cResult[16] === nativeGesture) {
            let tmp20;
            if (cResult[17] === tmp16) {
              tmp20 = cResult[18];
            }
            return tmp20;
          }
          const tmp22 = jsx(tmp(6147).GestureDetector, { gesture: nativeGesture, children: tmp16 });
          cResult[16] = nativeGesture;
          cResult[17] = tmp16;
          cResult[18] = tmp22;
          tmp20 = tmp22;
        }
        const tmp19 = <closure_6 contentContainerStyle={tmp12} showsHorizontalScrollIndicator={false} horizontal>{tmp13}</closure_6>;
        cResult[13] = tmp12;
        cResult[14] = tmp13;
        cResult[15] = tmp19;
        tmp16 = tmp19;
      }
    }
    if (cResult[10] === fontScale) {
      let tmp14;
      if (cResult[11] === onItemPressed) {
        tmp14 = cResult[12];
      }
      const mapped = arr.map(tmp14);
      cResult[6] = fontScale;
      cResult[7] = onItemPressed;
      cResult[8] = arr;
      cResult[9] = mapped;
      tmp13 = mapped;
    }
    const fn2 = function w(type) {
      let IconComponent;
      let fullIcon;
      let getLabel;
      let icon;
      let tmpResult;
      ({ fullIcon, getLabel, icon, IconComponent, onPress: onItemPressed } = type);
      type = type.type;
      const obj2 = { maxWidth: 76 * fontScale };
      if (null != fullIcon) {
        const ImageButton = onItemPressed(dependencyMap[11]).ImageButton;
        tmpResult = <ImageButton image={fullIcon} label={getLabel()} onPress={function onPress() {
          return onItemPressed(onItemPressed);
        }} maxFontSizeMultiplier={2} />;
      } else {
        const IconButton = onItemPressed(dependencyMap[12]).IconButton;
        if (null == IconComponent) {
          if (icon == null) {
            icon = fontScale(dependencyMap[13]);
          }
          IconComponent = icon;
        }
        tmpResult = <IconButton variant="secondary" icon={IconComponent} label={getLabel()} onPress={function onPress() {
          return onItemPressed(onItemPressed);
        }} maxFontSizeMultiplier={2} />;
      }
      return <closure_1_5 key={type} style={obj2}>{tmpResult}</closure_1_5>;
    };
    cResult[10] = fontScale;
    cResult[11] = onItemPressed;
    cResult[12] = fn2;
    tmp14 = fn2;
  }
  const items1 = [tmp4.contentContainer, contentContainerStyle];
  cResult[3] = contentContainerStyle;
  cResult[4] = tmp4.contentContainer;
  cResult[5] = items1;
  tmp12 = items1;
}) : ((onItemPressed) => {
  let _undefined;
  let arr;
  let c2;
  onItemPressed = onItemPressed.onItemPressed;
  dependencyMap = undefined;
  const contentContainerStyle = onItemPressed.contentContainerStyle;
  let tmp = closure_10();
  const obj = onItemPressed(5609);
  let closure_1 = obj.useFontScale();
  const tmp2 = _slicedToArray(react.useState(closure_8), 2);
  [arr, c2] = tmp2;
  let obj2 = onItemPressed(6147);
  const gesture = obj2.useNativeGesture({ disallowInterruption: true });
  const effect = react.useEffect(() => {
    const allPromises = Promise.all(metroImportDefault.map((isAvailable) => isAvailable.isAvailable));
    allPromises.then((arr) => {
      const items = [];
      const item = arr.forEach((item, index) => {
        const tmp = item;
        if (tmp) {
          items.push(closure_2_7[index]);
        }
      });
      _undefined(items);
    });
  }, []);
  let items = [tmp.contentContainer, contentContainerStyle];
  const children = <closure_6 contentContainerStyle={items} showsHorizontalScrollIndicator={false} horizontal>{arr.map((type) => {
    let IconComponent;
    let fullIcon;
    let getLabel;
    let icon;
    let tmpResult;
    ({ fullIcon, getLabel, icon, IconComponent, onPress: onItemPressed } = type);
    type = type.type;
    const obj2 = { maxWidth: 76 * closure_1 };
    if (null != fullIcon) {
      const ImageButton = onItemPressed(c2[11]).ImageButton;
      tmpResult = <ImageButton image={fullIcon} label={getLabel()} onPress={function onPress() {
        return onItemPressed(onItemPressed);
      }} maxFontSizeMultiplier={2} />;
    } else {
      const IconButton = onItemPressed(c2[12]).IconButton;
      if (null == IconComponent) {
        if (icon == null) {
          icon = closure_1(c2[13]);
        }
        IconComponent = icon;
      }
      tmpResult = <IconButton variant="secondary" icon={IconComponent} label={getLabel()} onPress={function onPress() {
        return onItemPressed(onItemPressed);
      }} maxFontSizeMultiplier={2} />;
    }
    return <closure_1_5 key={type} style={obj2}>{tmpResult}</closure_1_5>;
  })}</closure_6>;
  return jsx(onItemPressed(6147).GestureDetector, { gesture, children });
}));
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteShareApps.tsx");

export default memoResult;