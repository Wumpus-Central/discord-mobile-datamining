// discord_app/modules/avatar/native/components/RedesignAddAvatarModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AddAvatarModalActionCreators from "../AddAvatarModalActionCreators.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserProfileSettingsStore from "../../../user_profile/UserProfileSettingsStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const UPLOAD_MEDIUM_SIZE = fn(1074).UPLOAD_MEDIUM_SIZE;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = {
  container: null,
  contentContainer: null,
  growContainer: null,
  headerContainer: null,
  buttonContainer: null,
  title: null,
  subtitle: null,
  errorContainer: null,
};
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.container = createStyles;
createStyles.contentContainer = { flexGrow: 2, alignItems: "center" };
createStyles.growContainer = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
createStyles.headerContainer = { display: "flex", alignItems: "center" };
createStyles.buttonContainer = { width: "100%" };
let obj1 = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
createStyles.title = { marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
createStyles.subtitle = { textAlign: "center" };
let obj2 = { marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
createStyles.errorContainer = { alignSelf: "center", paddingTop: nativeDefault.space.PX_24 };
let closure_12 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/avatar/native/components/RedesignAddAvatarModal.tsx");

export default function RedesignAddAvatarModal(route) {
  const onComplete = route.route.params.onComplete;
  importDefault = undefined;
  let pendingImage;
  noop = async function _handleSelectAvatar(arg0, value) {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp5;
            let base64;
            closure_128_1 = undefined;
            importDefault(false);
            const obj1 = { size };
            dependencyMap = 1;
            c3 = 1;
            let obj2 = { value: tmp2(5138).openImagePicker(obj1), done: false };
            return obj2;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
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
            closure_129_3(undefined);
            c3 = 3;
          }
          closure_129_1(true);
        }
      } catch (tmp42) {
        c3 = tmp;
        throw tmp42;
      }
    }
  };
  const tmp = closure_12();
  [tmp3, c1] = pendingImage(noop.useState(false), 2);
  const tmp4 = pendingImage(noop.useState(), 2);
  const selectedAvatar = tmp4[0];
  closure_3 = tmp6;
  let obj = onComplete(selectedAvatar[10]);
  const items = [UserProfileSettingsStore];
  pendingImage = undefined;
  const stateFromStores = obj.useStateFromStores(items, () => pendingChanges.getPendingChanges().pendingAvatar);
  if (null != selectedAvatar) {
    tmp9(tmp8[11]);
    obj = { imageUri: tmp9(tmp8[12]).DEFAULT_AVATARS[selectedAvatar], description: null };
    const tmp9Result = tmp9(tmp8[13]);
    obj.description = tmp9Result.generateAvatarDescription();
    pendingImage = tmp9Result.createPendingImage(obj);
  }
  if (pendingImage == null) {
    pendingImage = stateFromStores;
  }
  const tmp2 = pendingImage(noop.useState(false), 2);
  let imageUri;
  if (pendingImage != null) {
    imageUri = pendingImage.imageUri;
  }
  obj = { style: tmp.container, alwaysBounceVertical: false, contentContainerStyle: null, children: null };
  const items1 = [tmp.contentContainer];
  let obj1 = { paddingBottom: null, paddingHorizontal: null };
  const tmp9Result1 = onComplete(selectedAvatar[14]);
  obj1.paddingBottom = require("useSafeAreaInsets")().bottom + require("native").space.PX_16;
  obj1.paddingHorizontal = require("native").space.PX_16;
  items1[1] = obj1;
  obj.contentContainerStyle = items1;
  let obj2 = { style: tmp.headerContainer, children: null };
  let obj3 = { children: null };
  let obj4 = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = tmp9(tmp8[19]).intl;
  obj4.children = intl.string(onComplete(selectedAvatar[19]).t.XQRWvR);
  const items2 = [closure_10(onComplete(selectedAvatar[18]).Text, obj4)];
  let obj5 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = tmp9(tmp8[19]).intl;
  obj5.children = intl2.string(onComplete(selectedAvatar[19]).t.fH9TLT);
  items2[1] = closure_10(onComplete(selectedAvatar[18]).Text, obj5);
  obj3.children = items2;
  const items3 = [closure_11(closure_6, obj3), ,];
  const memoizedImageSourceResult = onComplete(selectedAvatar[14]).memoizedImageSource(imageUri);
  const tmp15 = closure_7;
  items3[1] = closure_10(require("TouchableUploadAvatar"), {
    avatarSource: onComplete(selectedAvatar[14]).memoizedImageSource(imageUri),
    showPendingAvatar: null != pendingImage,
    onSelectAvatar: function handleSelectAvatar() {
      const self = this;
      const apply = closure_5.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
  });
  const obj7 = { style: tmp.errorContainer, children: null };
  if (tmp17Result) {
    const obj8 = { variant: "text-sm/medium", color: "text-feedback-critical", children: null };
    const intl3 = tmp9(tmp8[19]).intl;
    obj8.children = intl3.string(tmp9(tmp8[19]).t.XyLlVm);
    tmp17Result = tmp17(tmp9(tmp8[18]).Text, obj8);
  }
  obj7.children = tmp17Result;
  items3[2] = closure_10(closure_6, obj7);
  obj2.children = items3;
  const items4 = [
    closure_11(closure_6, obj2),
    closure_10(require("PresetAvatarSelect"), { onAvatarSelect: tmp4[1], selectedAvatar }),
    closure_10(closure_6, { style: tmp.growContainer }),
  ];
  const obj10 = { style: tmp.buttonContainer, children: null };
  const obj11 = { variant: "primary", size: "lg", text: null, onPress: null, disabled: null };
  const intl4 = tmp9(tmp8[19]).intl;
  obj11.text = intl4.string(onComplete(selectedAvatar[19]).t.PDTjLN);
  obj11.onPress = function onPress() {
    let fn = onComplete;
    if (null == onComplete) {
      fn = () => {};
    }
    return AddAvatarModalActionCreators.handlePressNext(pendingImage, first, fn);
  };
  obj11.disabled = null == pendingImage;
  obj10.children = closure_10(onComplete(selectedAvatar[21]).Button, obj11);
  items4[3] = closure_10(closure_6, obj10);
  obj.children = items4;
  return closure_11(tmp15, obj);
}
