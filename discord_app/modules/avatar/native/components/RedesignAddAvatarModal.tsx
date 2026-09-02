// === Module 17265: RedesignAddAvatarModal ===

// Module 17265 (RedesignAddAvatarModal)
import ThemesDefault from "Themes" /* 709 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "handleFormOpen" /* 8078 */;
import { UPLOAD_MEDIUM_SIZE } from "ME" /* 673 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
({ View: closure_6, ScrollView: error } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { container: null, contentContainer: null, growContainer: null, headerContainer: null, buttonContainer: null, title: null, subtitle: null, errorContainer: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexGrow: 2, alignItems: "center" };
createCacheKey[2] = { flexGrow: 2, minHeight: ThemesDefault.space.PX_24 };
createCacheKey[3] = { display: "flex", alignItems: "center" };
createCacheKey[4] = { width: "100%" };
let obj1 = { flexGrow: 2, minHeight: ThemesDefault.space.PX_24 };
createCacheKey[5] = { marginBottom: ThemesDefault.space.PX_8, textAlign: "center" };
createCacheKey[6] = { textAlign: "center" };
let obj2 = { marginBottom: ThemesDefault.space.PX_8, textAlign: "center" };
createCacheKey[7] = { alignSelf: "center", paddingTop: ThemesDefault.space.PX_24 };
let closure_12 = createCacheKey.createStyles(createCacheKey);
let obj3 = { alignSelf: "center", paddingTop: ThemesDefault.space.PX_24 };
let result = require("set").fileFinishedImporting("modules/avatar/native/components/RedesignAddAvatarModal.tsx");

export default function RedesignAddAvatarModal(route) {
  const onComplete = route.route.params.onComplete;
  importDefault = undefined;
  let first;
  closure_3 = undefined;
  let pendingImage;
  function _handleSelectAvatar() {
    const self = this;
    const tmp = callback(function*() {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v0 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c1 = tmp5;
              let base64 = tmp2;
              base64 = undefined;
              c1 = undefined;
              pendingImage(false);
              obj1 = { size: null };
              obj1[0] = closure_1_9;
              dependencyMap = 1;
              v0 = 1;
              let obj2 = { value: null, done: false };
              obj2[0] = closure_1_0(5090).openImagePicker(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            let obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            base64 = arg1.base64;
            if (null == base64) {
              pendingImage = undefined;
              if (null != closure_1_0) {
                obj = closure_1_0(14470);
                const obj4 = { imageUri: null, description: null };
                obj4[0] = base64;
                obj2 = closure_1_0(8087);
                obj4[1] = obj2.generateAvatarDescription();
                pendingImage = obj.createPendingImage(obj4);
              }
              obj3 = closure_1_0(8082);
              let obj5 = { avatar: null };
              obj5[0] = pendingImage;
              obj3.setPendingChanges(obj5);
              obj5 = closure_1_0(8084);
              let str = "set";
              if (null == pendingImage) {
                str = "remove";
              }
              const result = obj5.announcePendingAvatarChange(str);
              v0(undefined);
              v0 = 3;
            }
            pendingImage(true);
          }
        } catch (tmp42) {
          v0 = tmp;
          throw tmp42;
        }
      }
    });
    closure_5 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback3();
  [tmp3, c1] = pendingImage(_handleSelectAvatar.useState(false), 2);
  const tmp4 = pendingImage(_handleSelectAvatar.useState(), 2);
  first = tmp4[0];
  closure_3 = tmp6;
  let obj = onComplete(first[10]);
  const items = [closure_8];
  pendingImage = undefined;
  const stateFromStores = obj.useStateFromStores(items, () => pendingChanges.getPendingChanges().pendingAvatar);
  if (null != first) {
    let tmp9Result = tmp9(tmp8[11]);
    obj = { imageUri: null, description: null };
    obj[0] = tmp9(tmp8[12]).DEFAULT_AVATARS[first];
    tmp9Result = tmp9(tmp8[13]);
    obj[1] = tmp9Result.generateAvatarDescription();
    pendingImage = tmp9Result.createPendingImage(obj);
  }
  if (pendingImage == null) {
    pendingImage = stateFromStores;
  }
  const tmp2 = pendingImage(_handleSelectAvatar.useState(false), 2);
  let imageUri;
  if (pendingImage != null) {
    imageUri = pendingImage.imageUri;
  }
  obj = { style: tmp.container, alwaysBounceVertical: false, contentContainerStyle: null, children: null };
  const items1 = [tmp.contentContainer, ];
  obj1 = { paddingBottom: null, paddingHorizontal: null };
  const tmp9Result1 = onComplete(first[14]);
  obj1[0] = importDefault(first[9])().bottom + importDefault(first[8]).space.PX_16;
  obj1[1] = importDefault(first[8]).space.PX_16;
  items1[1] = obj1;
  obj[2] = items1;
  let obj2 = { style: tmp.headerContainer, children: null };
  let obj3 = { children: null };
  let obj4 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = tmp9(tmp8[19]).intl;
  obj4[4] = intl.string(onComplete(first[19]).t.XQRWvR);
  const items2 = [callback(onComplete(first[18]).Text, obj4), ];
  let obj5 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = tmp9(tmp8[19]).intl;
  obj5[3] = intl2.string(onComplete(first[19]).t.fH9TLT);
  items2[1] = callback(onComplete(first[18]).Text, obj5);
  obj3[0] = items2;
  const items3 = [callback2(closure_6, obj3), , ];
  const memoizedImageSourceResult = onComplete(first[14]).memoizedImageSource(imageUri);
  const tmp15 = closure_7;
  items3[1] = callback(importDefault(first[20]), {
    avatarSource: onComplete(first[14]).memoizedImageSource(imageUri),
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
  const obj7 = { style: tmp.errorContainer, children: null };
  if (tmp17Result) {
    const obj8 = { variant: "text-sm/medium", color: "text-feedback-critical", children: null };
    const intl3 = tmp9(tmp8[19]).intl;
    obj8[2] = intl3.string(tmp9(tmp8[19]).t.XyLlVm);
    tmp17Result = tmp17(tmp9(tmp8[18]).Text, obj8);
  }
  obj7[1] = tmp17Result;
  items3[2] = callback(closure_6, obj7);
  obj2[1] = items3;
  const items4 = [callback2(closure_6, obj2), callback(importDefault(first[12]), { onAvatarSelect: tmp4[1], selectedAvatar: first }), callback(closure_6, { style: tmp.growContainer }), ];
  const obj10 = { style: tmp.buttonContainer, children: null };
  const obj11 = { variant: "primary", size: "lg", text: null, onPress: null, disabled: null };
  const intl4 = tmp9(tmp8[19]).intl;
  obj11[2] = intl4.string(onComplete(first[19]).t.PDTjLN);
  obj11[3] = function onPress() {
    let fn = onComplete;
    if (null == onComplete) {
      fn = () => {

      };
    }
    return onComplete(first[22]).handlePressNext(pendingImage, first, fn);
  };
  obj11[4] = null == pendingImage;
  obj10[1] = callback(onComplete(first[21]).Button, obj11);
  items4[3] = callback(closure_6, obj10);
  obj[3] = items4;
  return callback2(tmp15, obj);
};