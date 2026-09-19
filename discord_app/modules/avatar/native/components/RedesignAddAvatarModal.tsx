// discord_app/modules/avatar/native/components/RedesignAddAvatarModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AddAvatarModalActionCreators from "../AddAvatarModalActionCreators.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserProfileSettingsStore from "../../../user_profile/UserProfileSettingsStore.tsx";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const UPLOAD_MEDIUM_SIZE = fn(1074).UPLOAD_MEDIUM_SIZE;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4756);
let obj2 = {
  container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  contentContainer: { flexGrow: 2, alignItems: "center" },
  growContainer: null,
  headerContainer: null,
  buttonContainer: null,
  title: null,
  subtitle: null,
  errorContainer: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.growContainer = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
obj2.headerContainer = { display: "flex", alignItems: "center" };
obj2.buttonContainer = { width: "100%" };
let obj4 = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
obj2.title = { marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
obj2.subtitle = { textAlign: "center" };
let obj5 = { marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
obj2.errorContainer = { alignSelf: "center", paddingTop: nativeDefault.space.PX_24 };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/avatar/native/components/RedesignAddAvatarModal.tsx");

export default function RedesignAddAvatarModal(route) {
  const onComplete = route.route.params.onComplete;
  importDefault = undefined;
  let pendingImage;
  noop = async function _handleSelectAvatar() {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
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
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_1 = tmp5;
            let base64;
            closure_128_1 = undefined;
            importDefault(false);
            const obj7 = { size };
            dependencyMap = 1;
            c3 = 1;
            const obj9 = { value: tmp2(5349).openImagePicker(obj7), done: false };
            return obj9;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          base64 = value.base64;
          if (null == base64) {
            pendingImage = undefined;
            if (null != base64) {
              const obj11 = { imageUri: base64, description: null };
              const obj = tmp2(14863);
              obj11.description = tmp2(8437).generateAvatarDescription();
              pendingImage = obj.createPendingImage(obj11);
              const obj3 = tmp2(8437);
            }
            closure_128_1 = pendingImage;
            const obj12 = { avatar: closure_128_1 };
            tmp2(8432).setPendingChanges(obj12);
            const obj4 = tmp2(8432);
            let str = "set";
            if (null == closure_128_1) {
              str = "remove";
            }
            const result = tmp2(8434).announcePendingAvatarChange(str);
            closure_129_3(undefined);
            c3 = 3;
            const obj6 = tmp2(8434);
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
  const tmp2 = pendingImage(noop.useState(false), 2);
  const items = [UserProfileSettingsStore];
  pendingImage = undefined;
  const stateFromStores = onComplete(selectedAvatar[10]).useStateFromStores(
    items,
    () => pendingChanges.getPendingChanges().pendingAvatar,
  );
  if (null != selectedAvatar) {
    let obj2 = { imageUri: tmp9(tmp8[12]).DEFAULT_AVATARS[selectedAvatar], description: null };
    const tmp9Result = tmp9(tmp8[11]);
    obj2.description = tmp9(tmp8[13]).generateAvatarDescription();
    pendingImage = tmp9Result.createPendingImage(obj2);
    const tmp9Result3 = tmp9(tmp8[13]);
  }
  if (pendingImage == null) {
    pendingImage = stateFromStores;
  }
  let obj = onComplete(selectedAvatar[10]);
  let imageUri;
  if (pendingImage != null) {
    imageUri = pendingImage.imageUri;
  }
  let obj3 = { style: tmp.container, alwaysBounceVertical: false, contentContainerStyle: null, children: null };
  const items1 = [tmp.contentContainer];
  let obj4 = { paddingBottom: null, paddingHorizontal: null };
  const tmp9Result4 = onComplete(selectedAvatar[14]);
  obj4.paddingBottom = require("useSafeAreaInsets")().bottom + require("native").space.PX_16;
  obj4.paddingHorizontal = require("native").space.PX_16;
  items1[1] = obj4;
  obj3.contentContainerStyle = items1;
  let obj5 = { style: tmp.headerContainer, children: null };
  let obj6 = { children: null };
  let obj7 = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = tmp9(tmp8[19]).intl;
  obj7.children = intl.string(onComplete(selectedAvatar[19]).t.XQRWvR);
  const items2 = [closure_10(onComplete(selectedAvatar[18]).Text, obj7)];
  const obj8 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = tmp9(tmp8[19]).intl;
  obj8.children = intl2.string(onComplete(selectedAvatar[19]).t.fH9TLT);
  items2[1] = closure_10(onComplete(selectedAvatar[18]).Text, obj8);
  obj6.children = items2;
  const items3 = [closure_11(closure_6, obj6), ,];
  const memoizedImageSourceResult = onComplete(selectedAvatar[14]).memoizedImageSource(imageUri);
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
  let obj10 = { style: tmp.errorContainer, children: null };
  if (tmp17Result) {
    let obj11 = { variant: "text-sm/medium", color: "text-feedback-critical", children: null };
    const intl3 = tmp9(tmp8[19]).intl;
    obj11.children = intl3.string(tmp9(tmp8[19]).t.XyLlVm);
    tmp17Result = closure_10(tmp9(tmp8[18]).Text, obj11);
  }
  obj10.children = tmp17Result;
  items3[2] = closure_10(closure_6, obj10);
  obj5.children = items3;
  const items4 = [
    closure_11(closure_6, obj5),
    closure_10(require("PresetAvatarSelect"), { onAvatarSelect: tmp4[1], selectedAvatar }),
    closure_10(closure_6, { style: tmp.growContainer }),
  ];
  const obj13 = { style: tmp.buttonContainer, children: null };
  const obj14 = { variant: "primary", size: "lg", text: null, onPress: null, disabled: null };
  const intl4 = tmp9(tmp8[19]).intl;
  obj14.text = intl4.string(onComplete(selectedAvatar[19]).t.PDTjLN);
  obj14.onPress = function onPress() {
    let fn = onComplete;
    if (null == onComplete) {
      fn = () => {};
    }
    return AddAvatarModalActionCreators.handlePressNext(pendingImage, first, fn);
  };
  obj14.disabled = null == pendingImage;
  obj13.children = closure_10(onComplete(selectedAvatar[21]).Button, obj14);
  items4[3] = closure_10(closure_6, obj13);
  obj3.children = items4;
  return closure_11(closure_7, obj3);
}
