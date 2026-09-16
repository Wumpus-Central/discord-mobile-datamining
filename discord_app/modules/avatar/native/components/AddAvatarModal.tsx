// discord_app/modules/avatar/native/components/AddAvatarModal.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import discord_common_AnalyticsUtils from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import Navigator from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import RecentAvatarUtils from "../../../recent_avatars/RecentAvatarUtils.tsx";
import VideoBackground from "../../../calls/native/VideoBackground.tsx";
import ProfilePendingImageUtils from "../../../profile_customization/ProfilePendingImageUtils.tsx";
import AddAvatarModalActionCreators from "../AddAvatarModalActionCreators.tsx";
import PresetAvatarSelect from "PresetAvatarSelect.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserProfileSettingsStore from "../../../user_profile/UserProfileSettingsStore.tsx";
import TextStyles from "../../../rebrand/native/TextStyles.tsx";

require = fn;
function AddAvatarScreen() {
  _slicedToArray = async function _handleSelectAvatar(noop) {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (noop === 1) {
        throw value;
      } else if (noop === 2) {
        const obj2 = { value, done: true };
        return obj2;
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
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_1 = tmp5;
            let base64;
            closure_128_1 = undefined;
            _require(false);
            const obj7 = { size };
            dependencyMap = 1;
            c3 = 1;
            const obj9 = { value: tmp2(5223).openImagePicker(obj7), done: false };
            return obj9;
          }
        } else if (noop === 1) {
          c3 = 3;
          throw value;
        } else if (noop === 2) {
          c3 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          base64 = value.base64;
          if (null == base64) {
            pendingImage = undefined;
            if (null != base64) {
              const obj11 = { imageUri: base64, description: null };
              const obj = tmp2(14707);
              obj11.description = tmp2(8298).generateAvatarDescription();
              pendingImage = obj.createPendingImage(obj11);
              const obj3 = tmp2(8298);
            }
            closure_128_1 = pendingImage;
            const obj12 = { avatar: closure_128_1 };
            tmp2(8293).setPendingChanges(obj12);
            const obj4 = tmp2(8293);
            let str = "set";
            if (null == closure_128_1) {
              str = "remove";
            }
            const result = tmp2(8295).announcePendingAvatarChange(str);
            closure_129_2(undefined);
            c3 = 3;
            const obj6 = tmp2(8295);
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
  [tmp3, require] = noop.useState(false);
  const tmp4 = _slicedToArray(noop.useState(), 2);
  const selectedAvatar = tmp4[0];
  dependencyMap = tmp6;
  const bottom = selectedAvatar(1612)().bottom;
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  const items = [UserProfileSettingsStore];
  let pendingImage;
  const stateFromStores = initialize.useStateFromStores(items, () => pendingChanges.getPendingChanges().pendingAvatar);
  if (null != selectedAvatar) {
    let obj2 = { imageUri: PresetAvatarSelect.DEFAULT_AVATARS[selectedAvatar], description: null };
    const tmp9Result = ProfilePendingImageUtils;
    obj2.description = RecentAvatarUtils.generateAvatarDescription();
    pendingImage = tmp9Result.createPendingImage(obj2);
    const tmp9Result3 = RecentAvatarUtils;
  }
  if (pendingImage == null) {
    pendingImage = stateFromStores;
  }
  let imageUri;
  if (pendingImage != null) {
    imageUri = pendingImage.imageUri;
  }
  const items1 = [tmp.container];
  let num = 16;
  const tmp9Result4 = VideoBackground;
  if (bottom > 0) {
    num = bottom;
  }
  let obj3 = { style: items1, children: null };
  items1[1] = { paddingBottom: num };
  let obj4 = { style: tmp.headerContainer, children: null };
  let obj5 = { children: null };
  let obj6 = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = util.intl;
  obj6.children = intl.string(util.t.XQRWvR);
  const items2 = [closure_9(Text_Text.Text, obj6)];
  let obj7 = { style: tmp.subtitle, variant: "heading-deprecated-12/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  obj7.children = intl2.string(util.t.fH9TLT);
  items2[1] = closure_9(Text_Text.Text, obj7);
  obj5.children = items2;
  const items3 = [closure_10(View, obj5), ,];
  const memoizedImageSourceResult = VideoBackground.memoizedImageSource(imageUri);
  items3[1] = closure_9(selectedAvatar(17654), {
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
    },
  });
  let obj9 = { style: tmp.errorContainer, children: null };
  let obj10 = { style: tmp.errorText, children: null };
  if (stringResult) {
    const intl3 = util.intl;
    stringResult = intl3.string(util.t.XyLlVm);
  }
  obj10.children = stringResult;
  obj9.children = closure_9(native.LegacyText, obj10);
  items3[2] = closure_9(View, obj9);
  obj4.children = items3;
  const items4 = [
    closure_10(View, obj4),
    closure_9(selectedAvatar(17645), { onAvatarSelect: tmp4[1], selectedAvatar }),
  ];
  let obj11 = { style: tmp.buttonContainer, children: null };
  let obj12 = { text: null, grow: true, onPress: null, disabled: null };
  const intl4 = util.intl;
  obj12.text = intl4.string(util.t.PDTjLN);
  obj12.onPress = function onPress() {
    return AddAvatarModalActionCreators.handlePressNext(pendingImage, first);
  };
  obj12.disabled = null == pendingImage;
  obj11.children = closure_9(components_Button_Button.Button, obj12);
  items4[2] = closure_9(View, obj11);
  obj3.children = items4;
  return closure_10(View, obj3);
}
class AddAvatarModal {
  constructor() {
    memo = closure_5.useMemo(() => {
      let obj = { ADD_AVATAR: null };
      const obj2 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.AVATAR_UPLOAD,
        headerRight() {
          const obj = { text: null, onPress: null };
          const intl = closure_1_0(1115).intl;
          obj.text = intl.string(closure_1_0(1115).t["5Wxrcd"]);
          obj.onPress = function onPress() {
            return closure_1_0(dependencyMap[25]).showSkipAvatarModal();
          };
          return closure_1_9(closure_1_0(7487).HeaderActionButton, obj);
        },
        headerLeft() {
          return null;
        },
        headerTitle: NavigatorHeader.getHeaderNoTitle(),
        ignoreKeyboard: true,
        fullscreen: true,
        render() {
          return closure_1_9(closure_1_12, {});
        },
      };
      obj.ADD_AVATAR = obj2;
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
const createStyles = fn(4638);
let obj2 = {
  container: {
    flex: 1,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    justifyContent: "center",
    paddingTop: fn(5768).NAV_BAR_HEIGHT + 32,
    alignItems: "center",
  },
  headerContainer: { display: "flex", alignItems: "center" },
  buttonContainer: { marginHorizontal: 16, marginBottom: 16 },
  title: { marginBottom: 8, textAlign: "center" },
  subtitle: { textAlign: "center" },
  errorContainer: { alignSelf: "center", paddingTop: 24 },
  errorText: null,
};
const merged = Object.assign(TextStyles(Fonts.DISPLAY_MEDIUM, nativeDefault.unsafe_rawColors.RED_400, 12));
obj2.errorText = {};
let closure_11 = createStyles.createStyles(obj2);
AddAvatarModal.modalConfig = { animation: ModalAnimation.SLIDE_IN_OUT };
const size = fn(2);
let result = size.fileFinishedImporting("modules/avatar/native/components/AddAvatarModal.tsx");

export default AddAvatarModal;
