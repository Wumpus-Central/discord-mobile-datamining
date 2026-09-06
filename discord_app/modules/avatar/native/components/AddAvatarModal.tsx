// === Module 17435: AddAvatarModal ===

// Module 17435 (AddAvatarModal)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import Navigator from "Navigator" /* 7000 */;
import VideoBackground from "VideoBackground" /* 8248 */;
import AddAvatarModalActionCreators from "AddAvatarModalActionCreators" /* 17433 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8160 */;
import TextStyles from "TextStyles" /* 5524 */;

require = fn;
function AddAvatarScreen() {
  _slicedToArray = async function _handleSelectAvatar(noop, value) {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (noop === 1) {
        throw value;
      } else if (noop === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (noop === 1) {
            c3 = 3;
            throw value;
          } else if (noop === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp5;
            let base64;
            closure_128_1 = undefined;
            _require(false);
            const obj1 = { size };
            dependencyMap = 1;
            c3 = 1;
            let obj2 = { value: tmp2(5138).openImagePicker(obj1), done: false };
            return obj2;
          }
        } else if (noop === 1) {
          c3 = 3;
          throw value;
        } else if (noop === 2) {
          c3 = 3;
          let obj3 = { value, done: true };
          return obj3;
        } else {
          base64 = value.base64;
          if (null == base64) {
            pendingImage = undefined;
            if (null != base64) {
              obj = tmp2(14593);
              const obj4 = { imageUri: base64, description: null };
              obj2 = tmp2(8169);
              obj4.description = obj2.generateAvatarDescription();
              pendingImage = obj.createPendingImage(obj4);
            }
            closure_128_1 = pendingImage;
            obj3 = tmp2(8164);
            let obj5 = { avatar: closure_128_1 };
            obj3.setPendingChanges(obj5);
            obj5 = tmp2(8166);
            let str = "set";
            if (null == closure_128_1) {
              str = "remove";
            }
            const result = obj5.announcePendingAvatarChange(str);
            closure_129_2(undefined);
            c3 = 3;
          }
          closure_129_0(true);
        }
      } catch (tmp42) {
        c3 = tmp;
        throw tmp42;
      }
    }
  };
  const tmp = closure_11();
  [tmp3, require] = _slicedToArray(noop.useState(false), 2);
  const tmp4 = _slicedToArray(noop.useState(), 2);
  const selectedAvatar = tmp4[0];
  dependencyMap = tmp6;
  const bottom = selectedAvatar(1611)().bottom;
  let obj = initialize;
  const items = [UserProfileSettingsStore];
  let pendingImage;
  const stateFromStores = obj.useStateFromStores(items, () => pendingChanges.getPendingChanges().pendingAvatar);
  if (null != selectedAvatar) {
    tmp9(14593);
    obj = { imageUri: tmp9(17436).DEFAULT_AVATARS[selectedAvatar], description: null };
    const tmp9Result = tmp9(8169);
    obj.description = tmp9Result.generateAvatarDescription();
    pendingImage = tmp9Result.createPendingImage(obj);
  }
  if (pendingImage == null) {
    pendingImage = stateFromStores;
  }
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  let imageUri;
  if (pendingImage != null) {
    imageUri = pendingImage.imageUri;
  }
  const items1 = [tmp.container, ];
  let num = 16;
  const tmp9Result1 = VideoBackground;
  if (bottom > 0) {
    num = bottom;
  }
  obj = { style: items1, children: null };
  items1[1] = { paddingBottom: num };
  let obj1 = { style: tmp.headerContainer, children: null };
  let obj2 = { children: null };
  let obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = tmp9(1114).intl;
  obj3.children = intl.string(util.t.XQRWvR);
  const items2 = [closure_9(Text_Text.Text, obj3), ];
  let obj4 = { style: tmp.subtitle, variant: "heading-deprecated-12/medium", color: "text-default", children: null };
  const intl2 = tmp9(1114).intl;
  obj4.children = intl2.string(util.t.fH9TLT);
  items2[1] = closure_9(Text_Text.Text, obj4);
  obj2.children = items2;
  const items3 = [closure_10(View, obj2), , ];
  const memoizedImageSourceResult = VideoBackground.memoizedImageSource(imageUri);
  items3[1] = closure_9(selectedAvatar(17445), {
    avatarSource: VideoBackground.memoizedImageSource(imageUri),
    showPendingAvatar: null != pendingImage,
    onSelectAvatar: function handleSelectAvatar() {
      const self = this;
      const apply = closure_4.apply;
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
    const intl3 = tmp9(1114).intl;
    stringResult = intl3.string(tmp9(1114).t.XyLlVm);
  }
  obj7.children = stringResult;
  obj6.children = closure_9(native.LegacyText, obj7);
  items3[2] = closure_9(View, obj6);
  obj1.children = items3;
  const items4 = [closure_10(View, obj1), closure_9(selectedAvatar(17436), { onAvatarSelect: tmp4[1], selectedAvatar }), ];
  const obj8 = { style: tmp.buttonContainer, children: null };
  const obj9 = { text: null, grow: true, onPress: null, disabled: null };
  const intl4 = tmp9(1114).intl;
  obj9.text = intl4.string(util.t.PDTjLN);
  obj9.onPress = function onPress() {
    return AddAvatarModalActionCreators.handlePressNext(pendingImage, first);
  };
  obj9.disabled = null == pendingImage;
  obj8.children = closure_9(components_Button_Button.Button, obj9);
  items4[2] = closure_9(View, obj8);
  obj.children = items4;
  return closure_10(View, obj);
}
class AddAvatarModal {
  constructor() {
    memo = closure_5.useMemo(() => {
      let obj = { ADD_AVATAR: null };
      obj = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.AVATAR_UPLOAD,
        headerRight() {
          const obj = { text: null, onPress: null };
          const intl = closure_1_0(1114).intl;
          obj.text = intl.string(closure_1_0(1114).t["5Wxrcd"]);
          obj.onPress = function onPress() {
            return closure_1_0(dependencyMap[25]).showSkipAvatarModal();
          };
          return closure_1_9(closure_1_0(7377).HeaderActionButton, obj);
        },
        headerLeft() {
          return null;
        },
        headerTitle: NavigatorHeader.getHeaderNoTitle(),
        ignoreKeyboard: true,
        fullscreen: true,
        render() {
          return closure_1_9(closure_1_12, {});
        }
      };
      obj.ADD_AVATAR = obj;
      return obj;
    }, []);
    return jsx(closure_0(closure_2[29]).Navigator, { screens: memo, initialRouteName: "ADD_AVATAR" });
  }
}
const View = fn(17).View;
const Constants = fn(1074);
({ UPLOAD_MEDIUM_SIZE: closure_8, Fonts, ModalAnimation } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { container: null, headerContainer: null, buttonContainer: null, title: null, subtitle: null, errorContainer: null, errorText: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, justifyContent: "center", paddingTop: fn(5682).NAV_BAR_HEIGHT + 32, alignItems: "center" };
createStyles.container = createStyles;
createStyles.headerContainer = { display: "flex", alignItems: "center" };
createStyles.buttonContainer = { marginHorizontal: 16, marginBottom: 16 };
createStyles.title = { marginBottom: 8, textAlign: "center" };
createStyles.subtitle = { textAlign: "center" };
createStyles.errorContainer = { alignSelf: "center", paddingTop: 24 };
const merged = Object.assign(TextStyles(Fonts.DISPLAY_MEDIUM, nativeDefault.unsafe_rawColors.RED_400, 12));
createStyles.errorText = {};
let closure_11 = createStyles.createStyles(createStyles);
AddAvatarModal.modalConfig = { animation: ModalAnimation.SLIDE_IN_OUT };
const size = fn(2);
let result = size.fileFinishedImporting("modules/avatar/native/components/AddAvatarModal.tsx");

export default AddAvatarModal;