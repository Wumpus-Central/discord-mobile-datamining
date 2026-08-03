import ME from "ME";
import _slicedToArray from "_slicedToArray";
import TouchableUploadAvatar from "TouchableUploadAvatar";
import get_ActivityIndicator from "Text";
import handleFormOpen from "handleFormOpen";
import { UPLOAD_MEDIUM_SIZE } from "ME";
import jsxProd from "handlePressNext";
import createCacheKey from "createCacheKey";

let c10;
let closure_6;
let error;
let unpackModuleId;
const require = arg1;
({ View: closure_6, ScrollView: error } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { container: null, contentContainer: null, growContainer: null, headerContainer: null, buttonContainer: null, title: null, subtitle: null, errorContainer: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexGrow: 2, alignItems: "center" };
createCacheKey[2] = { flexGrow: 2, minHeight: require("Themes").space.PX_24 };
createCacheKey[3] = { display: "flex", alignItems: "center" };
createCacheKey[4] = { width: "100%" };
let obj1 = { flexGrow: 2, minHeight: require("Themes").space.PX_24 };
createCacheKey[5] = { marginBottom: require("Themes").space.PX_8, textAlign: "center" };
createCacheKey[6] = { textAlign: "center" };
let obj2 = { marginBottom: require("Themes").space.PX_8, textAlign: "center" };
createCacheKey[7] = { alignSelf: "center", paddingTop: require("Themes").space.PX_24 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { alignSelf: "center", paddingTop: require("Themes").space.PX_24 };
let result = require("noop").fileFinishedImporting("modules/avatar/native/components/RedesignAddAvatarModal.tsx");

export default function RedesignAddAvatarModal(route) {
  let c1;
  let tmp3;
  const onComplete = route.route.params.onComplete;
  let importDefault;
  let first;
  let c3;
  let pendingImage;
  function _handleSelectAvatar() {
    const self = this;
    const tmp = _undefined(function*() {
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
              let c1 = tmp5;
              let base64 = tmp2;
              base64 = undefined;
              c1 = undefined;
              outer1_1(false);
              const obj1 = { size: null };
              obj1[0] = outer1_9;
              dependencyMap = 1;
              v0 = 1;
              let obj2 = { value: null, done: false };
              obj2[0] = outer1_0(4735).openImagePicker(obj1);
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
              let pendingImage;
              if (null != outer1_0) {
                obj = outer1_0(7955);
                const obj4 = { imageUri: null, description: null };
                obj4[0] = base64;
                obj2 = outer1_0(7955);
                obj4[1] = obj2.generateAvatarDescription();
                pendingImage = obj.createPendingImage(obj4);
              }
              outer1_1 = pendingImage;
              obj3 = outer1_0(7945);
              let obj5 = { avatar: null };
              obj5[0] = outer1_1;
              obj3.setPendingChanges(obj5);
              obj5 = outer1_0(7947);
              let str = "set";
              if (null == outer1_1) {
                str = "remove";
              }
              const result = obj5.announcePendingAvatarChange(str);
              v0(undefined);
              v0 = 3;
            }
            outer1_1(true);
          }
        } catch (tmp42) {
          v0 = tmp;
          throw tmp42;
        }
      }
    });
    const _handleSelectAvatar = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = createCacheKey();
  [tmp3, c1] = pendingImage(_handleSelectAvatar.useState(false), 2);
  const tmp4 = pendingImage(_handleSelectAvatar.useState(), 2);
  first = tmp4[0];
  c3 = tmp6;
  let obj = onComplete(first[10]);
  const items = [handleFormOpen];
  pendingImage = undefined;
  const stateFromStores = obj.useStateFromStores(items, () => pendingChanges.getPendingChanges().pendingAvatar);
  if (null != first) {
    let tmp9Result = tmp9(tmp8[11]);
    obj = { imageUri: null, description: null };
    obj[0] = tmp9(tmp8[12]).DEFAULT_AVATARS[first];
    tmp9Result = tmp9(tmp8[11]);
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
  let obj1 = { paddingBottom: null, paddingHorizontal: null };
  const tmp9Result1 = onComplete(first[13]);
  obj1[0] = importDefault(first[9])().bottom + importDefault(first[8]).space.PX_16;
  obj1[1] = importDefault(first[8]).space.PX_16;
  items1[1] = obj1;
  obj[2] = items1;
  let obj2 = { style: tmp.headerContainer, children: null };
  let obj3 = { children: null };
  let obj4 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = tmp9(tmp8[18]).intl;
  obj4[4] = intl.string(onComplete(first[18]).t.XQRWvR);
  const items2 = [callback(onComplete(first[17]).Text, obj4), ];
  let obj5 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = tmp9(tmp8[18]).intl;
  obj5[3] = intl2.string(onComplete(first[18]).t.fH9TLT);
  items2[1] = callback(onComplete(first[17]).Text, obj5);
  obj3[0] = items2;
  const items3 = [callback2(closure_6, obj3), , ];
  const memoizedImageSourceResult = onComplete(first[13]).memoizedImageSource(imageUri);
  const tmp15 = closure_7;
  items3[1] = callback(importDefault(first[19]), {
    avatarSource: onComplete(first[13]).memoizedImageSource(imageUri),
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
    const intl3 = tmp9(tmp8[18]).intl;
    obj8[2] = intl3.string(tmp9(tmp8[18]).t.XyLlVm);
    tmp17Result = tmp17(tmp9(tmp8[17]).Text, obj8);
  }
  obj7[1] = tmp17Result;
  items3[2] = callback(closure_6, obj7);
  obj2[1] = items3;
  const items4 = [callback2(closure_6, obj2), callback(importDefault(first[12]), { onAvatarSelect: tmp4[1], selectedAvatar: first }), callback(closure_6, { style: tmp.growContainer }), ];
  const obj10 = { style: tmp.buttonContainer, children: null };
  const obj11 = { variant: "primary", size: "lg", text: null, onPress: null, disabled: null };
  const intl4 = tmp9(tmp8[18]).intl;
  obj11[2] = intl4.string(onComplete(first[18]).t.PDTjLN);
  obj11[3] = function onPress() {
    let fn = onComplete;
    if (null == onComplete) {
      fn = () => {

      };
    }
    return onComplete(first[21]).handlePressNext(pendingImage, first, fn);
  };
  obj11[4] = null == pendingImage;
  obj10[1] = callback(onComplete(first[20]).Button, obj11);
  items4[3] = callback(closure_6, obj10);
  obj[3] = items4;
  return callback2(tmp15, obj);
};