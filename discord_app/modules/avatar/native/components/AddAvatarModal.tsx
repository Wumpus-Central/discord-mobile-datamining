// === Module 16977: AddAvatarScreen ===

// Module 16977 (AddAvatarScreen)
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import Text from "Text" /* 4444 */;
import Button2 from "Button" /* 4896 */;
import NavigationStack from "NavigationStack" /* 5976 */;
import useDominantRGBFromImage from "useDominantRGBFromImage" /* 8078 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_7 from "handleFormOpen" /* 8038 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;
import importDefaultResult from "createTextStyle" /* 5429 */;

require = arg1;
function AddAvatarScreen() {
  function _handleSelectAvatar(closure_5, arg1) {
    const self = this;
    const tmp = pendingImage(function*() {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c1 = tmp5;
              let base64 = tmp2;
              base64 = undefined;
              c1 = undefined;
              closure_1_0(false);
              obj1 = { size: null };
              obj1[0] = closure_1_8;
              dependencyMap = 1;
              c3 = 1;
              let obj2 = { value: null, done: false };
              obj2[0] = closure_1_0(5050).openImagePicker(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            let obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            base64 = arg1.base64;
            if (null == base64) {
              pendingImage = undefined;
              if (null != closure_1_0) {
                obj = closure_1_0(14214);
                const obj4 = { imageUri: null, description: null };
                obj4[0] = base64;
                obj2 = closure_1_0(8047);
                obj4[1] = obj2.generateAvatarDescription();
                pendingImage = obj.createPendingImage(obj4);
              }
              obj3 = closure_1_0(8042);
              let obj5 = { avatar: null };
              obj5[0] = pendingImage;
              obj3.setPendingChanges(obj5);
              obj5 = closure_1_0(8044);
              let str = "set";
              if (null == pendingImage) {
                str = "remove";
              }
              const result = obj5.announcePendingAvatarChange(str);
              dependencyMap(undefined);
              c3 = 3;
            }
            closure_1_0(true);
          }
        } catch (tmp42) {
          c3 = tmp;
          throw tmp42;
        }
      }
    });
    closure_4 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback2();
  [tmp3, require] = _handleSelectAvatar(React.useState(false), 2);
  const tmp4 = _handleSelectAvatar(React.useState(), 2);
  const first = tmp4[0];
  dependencyMap = tmp6;
  const bottom = first(1628)().bottom;
  let obj = initialize;
  const items = [closure_7];
  let pendingImage;
  const stateFromStores = obj.useStateFromStores(items, () => pendingChanges.getPendingChanges().pendingAvatar);
  if (null != first) {
    let tmp9Result = tmp9(14214);
    obj = { imageUri: null, description: null };
    obj[0] = tmp9(16978).DEFAULT_AVATARS[first];
    tmp9Result = tmp9(8047);
    obj[1] = tmp9Result.generateAvatarDescription();
    pendingImage = tmp9Result.createPendingImage(obj);
  }
  if (pendingImage == null) {
    pendingImage = stateFromStores;
  }
  const tmp2 = _handleSelectAvatar(React.useState(false), 2);
  let imageUri;
  if (pendingImage != null) {
    imageUri = pendingImage.imageUri;
  }
  const items1 = [tmp.container, ];
  let num = 16;
  const tmp9Result1 = useDominantRGBFromImage;
  if (bottom > 0) {
    num = bottom;
  }
  obj = { style: items1, children: null };
  items1[1] = { paddingBottom: num };
  obj1 = { style: tmp.headerContainer, children: null };
  let obj2 = { children: null };
  let obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = tmp9(1236).intl;
  obj3[4] = intl.string(getSystemLocale.t.XQRWvR);
  const items2 = [callback(Text.Text, obj3), ];
  let obj4 = { style: tmp.subtitle, variant: "heading-deprecated-12/medium", color: "text-default", children: null };
  const intl2 = tmp9(1236).intl;
  obj4[3] = intl2.string(getSystemLocale.t.fH9TLT);
  items2[1] = callback(Text.Text, obj4);
  obj2[0] = items2;
  const items3 = [closure_10(View, obj2), , ];
  const memoizedImageSourceResult = useDominantRGBFromImage.memoizedImageSource(imageUri);
  items3[1] = callback(first(16987), {
    avatarSource: useDominantRGBFromImage.memoizedImageSource(imageUri),
    showPendingAvatar: null != pendingImage,
    onSelectAvatar: function handleSelectAvatar() {
      const self = this;
      const apply = _handleSelectAvatar.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
  });
  const obj6 = { style: tmp.errorContainer, children: null };
  const obj7 = { style: tmp.errorText, children: null };
  if (stringResult) {
    const intl3 = tmp9(1236).intl;
    stringResult = intl3.string(tmp9(1236).t.XyLlVm);
  }
  obj7[1] = stringResult;
  obj6[1] = callback(Button.LegacyText, obj7);
  items3[2] = callback(View, obj6);
  obj1[1] = items3;
  const items4 = [closure_10(View, obj1), callback(first(16978), { onAvatarSelect: tmp4[1], selectedAvatar: first }), ];
  const obj8 = { style: tmp.buttonContainer, children: null };
  const obj9 = { text: null, grow: true, onPress: null, disabled: null };
  const intl4 = tmp9(1236).intl;
  obj9[0] = intl4.string(getSystemLocale.t.PDTjLN);
  obj9[2] = function onPress() {
    return closure_1_0(table[25]).handlePressNext(pendingImage, first);
  };
  obj9[3] = null == pendingImage;
  obj8[1] = callback(Button2.Button, obj9);
  items4[2] = callback(View, obj8);
  obj[1] = items4;
  return closure_10(View, obj);
}
class AddAvatarModal {
  constructor() {
    memo = closure_5.useMemo(() => {
      let obj = { ADD_AVATAR: null };
      obj = {
        impressionName: callback(503).ImpressionNames.AVATAR_UPLOAD,
        headerRight() {
          const obj = { text: null, onPress: null };
          const intl = callback(1236).intl;
          obj[0] = intl.string(callback(1236).t["5Wxrcd"]);
          obj[1] = function onPress() {
            return callback(table[25]).showSkipAvatarModal();
          };
          return callback2(callback(6205).HeaderActionButton, obj);
        },
        headerLeft() {
          return null;
        },
        headerTitle: callback(5463).getHeaderNoTitle(),
        ignoreKeyboard: true,
        fullscreen: true,
        render() {
          return callback2(closure_12, {});
        }
      };
      obj[0] = obj;
      return obj;
    }, []);
    return jsx(require("NavigationStack").Navigator, { screens: memo, initialRouteName: "ADD_AVATAR" });
  }
}
({ UPLOAD_MEDIUM_SIZE: closure_8, Fonts, ModalAnimation } = ME);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { container: null, headerContainer: null, buttonContainer: null, title: null, subtitle: null, errorContainer: null, errorText: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, justifyContent: "center", paddingTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT + 32, alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { display: "flex", alignItems: "center" };
createCacheKey[2] = { marginHorizontal: 16, marginBottom: 16 };
createCacheKey[3] = { marginBottom: 8, textAlign: "center" };
createCacheKey[4] = { textAlign: "center" };
createCacheKey[5] = { alignSelf: "center", paddingTop: 24 };
const merged = Object.assign(importDefaultResult(Fonts.DISPLAY_MEDIUM, ThemesDefault.unsafe_rawColors.RED_400, 12));
createCacheKey[6] = {};
let closure_11 = createCacheKey.createStyles(createCacheKey);
AddAvatarModal.modalConfig = { animation: ModalAnimation.SLIDE_IN_OUT };
let obj1 = {};
let result = require("set").fileFinishedImporting("modules/avatar/native/components/AddAvatarModal.tsx");

export default AddAvatarModal;