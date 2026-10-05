// discord_app/modules/user_profile/native/ProfileGIFSelectActionSheet.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../intl/index.native.tsx";
import BottomSheetTitleHeader2 from "../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Sheet_BottomSheet from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import NitroWheelIcon from "../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import GIFPickerDefault from "../../gif_picker/native/GIFPicker.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let BottomSheet, c4, c5, profileAssetType;

let metroImportAll;
let metroImportDefault;
let obj2;
function blobToDataURI(arg0) {
  let closure_0 = arg0;
  const promise = new Promise((data) => {
    closure_0 = data;
    const fileReader = new FileReader();
    fileReader.onload = (target) => {
      target = target.target;
      let result;
      if (target != null) {
        result = target.result;
      }
      let str = "";
      if (typeof result === "string") {
        str = result;
      }
      closure_0(str);
    };
    const asDataURL = fileReader.readAsDataURL(closure_0);
  });
  return promise;
}
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { titleWrapper: { flex: 0 }, titleContainer: { justifyContent: "flex-start" }, gifPicker: obj2 };
obj2 = {
  flex: 1,
  marginTop: nativeDefault.space.PX_4,
  marginLeft: nativeDefault.space.PX_8,
  marginRight: nativeDefault.space.PX_8,
};
let closure_9 = createStyles.createStyles(obj);
let obj3 = { AVATAR: 0, [0]: "AVATAR", BANNER: 1, [1]: "BANNER" };
let obj4 = { PROFILE_EDIT: 0, [0]: "PROFILE_EDIT", PROFILE_TRY_IT_OUT: 1, [1]: "PROFILE_TRY_IT_OUT" };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (profileAssetType) => {
      let guildId;
      let items;
      const tmp = profileAssetType;
      let obj = profileAssetType(guildId[8]);
      const cResult = obj.c(17);
      profileAssetType = profileAssetType.profileAssetType;
      const selectionContext = profileAssetType.selectionContext;
      guildId = profileAssetType.guildId;
      const tmp4 = closure_9();
      const ref = react.useRef(null);
      if (cResult[0] === guildId) {
        if (cResult[1] === profileAssetType) {
          let tmp6;
          let tmp9;
          let tmp8;
          if (cResult[2] === selectionContext) {
            tmp6 = cResult[3];
          }
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(tmp2[17]).intl;
            const stringResult = intl.string(tmp(guildId[17]).t["xsC+/y"]);
            const tmp12 = closure_7(tmp(tmp2[18]).NitroWheelIcon, {});
            cResult[4] = stringResult;
            cResult[5] = tmp12;
            tmp9 = tmp12;
            tmp8 = stringResult;
          } else {
            tmp8 = cResult[4];
            tmp9 = cResult[5];
          }
          if (cResult[6] === tmp4.titleContainer) {
            let tmp13;
            let tmp16;
            if (cResult[7] === tmp4.titleWrapper) {
              tmp13 = cResult[8];
            }
            if (cResult[9] !== tmp6) {
              obj3 = { bottomSheetRef: ref, onPressGIF: tmp6 };
              const tmp19 = closure_7(selectionContext(tmp2[20]), obj3);
              cResult[9] = tmp6;
              cResult[10] = tmp19;
              tmp16 = tmp19;
            } else {
              tmp16 = cResult[10];
            }
            if (cResult[11] === tmp4.gifPicker) {
              let tmp20;
              if (cResult[12] === tmp16) {
                tmp20 = cResult[13];
              }
              if (cResult[14] === tmp13) {
                let tmp24;
                if (cResult[15] === tmp20) {
                  tmp24 = cResult[16];
                }
                return tmp24;
              }
              obj4 = { ref, scrollable: true, startExpanded: true, children: items };
              items = [tmp13, tmp20];
              const tmp26 = closure_8(tmp(tmp2[21]).BottomSheet, obj4);
              cResult[14] = tmp13;
              cResult[15] = tmp20;
              cResult[16] = tmp26;
              tmp24 = tmp26;
            }
            let obj5 = { style: tmp4.gifPicker, children: tmp16 };
            const tmp23 = closure_7(View, obj5);
            cResult[11] = tmp4.gifPicker;
            cResult[12] = tmp16;
            cResult[13] = tmp23;
            tmp20 = tmp23;
          }
          let obj9 = { title: tmp8, trailing: tmp9, titleWrapperStyle: null, titleContainerStyle: null };
          ({ titleWrapper: obj2.titleWrapperStyle, titleContainer: obj2.titleContainerStyle } = tmp4);
          const tmp15 = closure_7(tmp(guildId[19]).BottomSheetTitleHeader, obj9);
          cResult[6] = tmp4.titleContainer;
          cResult[7] = tmp4.titleWrapper;
          cResult[8] = tmp15;
          tmp13 = tmp15;
        }
      }
      let closure_0 = _asyncToGenerator(async (arg0) => {
        let obj5;
        closure_0 = arg0;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            let closure_1;
            let closure_3;
            let imageUri;
            let originalMd5;
            let avatar;
            let banner;
            let src;
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                obj4 = { value, done: true };
                return obj4;
              } else {
                closure_0 = undefined;
                closure_1 = undefined;
                guildId = undefined;
                closure_3 = undefined;
                imageUri = undefined;
                originalMd5 = undefined;
                avatar = undefined;
                banner = undefined;
                const gifSrc = closure_0.gifSrc;
                src = gifSrc;
                if (gifSrc == null) {
                  src = closure_0.src;
                }
                const _fetch = fetch;
                c4 = 1;
                c5 = 1;
                const obj7 = { value: fetch(src), done: false };
                return obj7;
              }
            } else if (1 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj11 = { value, done: true };
                return obj11;
              } else {
                closure_0 = value;
                c4 = 2;
                c5 = 1;
                const obj12 = { value: closure_0.blob(), done: false };
                return obj12;
              }
            } else if (2 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj13 = { value, done: true };
                return obj13;
              } else {
                closure_1 = value;
                const items = [blobToDataURI(closure_1)];
                const obj20 = selectionContext(guildId[9]);
                const fromBlobResult = obj20.fromBlob(closure_1);
                items[1] = fromBlobResult.catch(() => null);
                c4 = 3;
                c5 = 1;
                const obj14 = { value: all(items), done: false };
                return obj14;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj15 = { value, done: true };
              return obj15;
            } else {
              guildId = value;
              closure_3 = _slicedToArray(guildId, 2);
              imageUri = closure_3[0];
              originalMd5 = closure_3[1];
              if (constants.AVATAR === closure_0) {
                const obj16 = { imageUri, description: obj5.generateAvatarDescription(), originalMd5 };
                const createPendingImage = closure_0(guildId[10]).createPendingImage;
                const tmp22 = closure_0(guildId[10]);
                obj5 = closure_0(guildId[11]);
                avatar = createPendingImage(obj16);
                if (src === constants2.PROFILE_TRY_IT_OUT) {
                  const obj9 = closure_0(guildId[12]);
                  obj9.setTryItOutAvatar(avatar);
                } else {
                  const obj17 = { guildId, avatar };
                  const obj6 = closure_0(guildId[13]);
                  obj6.setPendingChanges(obj17);
                  const obj8 = closure_0(guildId[14]);
                  const result = obj8.announcePendingAvatarChange("set");
                }
              } else if (constants.BANNER === tmp63) {
                const obj18 = {
                  assetOrigin: closure_0(guildId[15]).AssetOriginTypes.NEW_ASSET,
                  imageUri,
                  description: "",
                  originalAsset: "Array",
                  originalMd5,
                };
                const createPendingImage2 = closure_0(guildId[10]).createPendingImage;
                const tmp71 = closure_0(guildId[10]);
                banner = createPendingImage2(obj18);
                if (src === constants2.PROFILE_TRY_IT_OUT) {
                  obj3 = closure_0(guildId[12]);
                  obj3.setTryItOutBanner(banner);
                } else {
                  const obj19 = { guildId, banner };
                  const obj = closure_0(guildId[13]);
                  obj.setPendingChanges(obj19);
                }
              }
              const obj10 = selectionContext(guildId[16]);
              obj10.hideActionSheet();
              c5 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp53) {
            c5 = 3;
            throw tmp53;
          }
        }
      });
      function onPressGIF() {
        return closure_0(...arguments);
      }
      cResult[0] = guildId;
      cResult[1] = profileAssetType;
      cResult[2] = selectionContext;
      cResult[3] = onPressGIF;
      tmp6 = onPressGIF;
    }
  : (arg0) => {
      let intl;
      let items;
      let obj7;
      ({ profileAssetType: require, selectionContext: importDefault, guildId: dependencyMap } = arg0);
      let obj = function _onPressGIF2() {
        obj = _asyncToGenerator(async (arg0) => {
          let obj5;
          let closure_0 = arg0;
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              let closure_1;
              let closure_2;
              let closure_3;
              let imageUri;
              let originalMd5;
              let avatar;
              let banner;
              let src;
              c5 = 2;
              if (0 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  obj4 = { value, done: true };
                  return obj4;
                } else {
                  closure_0 = undefined;
                  closure_1 = undefined;
                  closure_2 = undefined;
                  closure_3 = undefined;
                  imageUri = undefined;
                  originalMd5 = undefined;
                  avatar = undefined;
                  banner = undefined;
                  const gifSrc = closure_0.gifSrc;
                  src = gifSrc;
                  if (gifSrc == null) {
                    src = closure_0.src;
                  }
                  const _fetch = fetch;
                  c4 = 1;
                  c5 = 1;
                  const obj7 = { value: fetch(src), done: false };
                  return obj7;
                }
              } else if (1 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj11 = { value, done: true };
                  return obj11;
                } else {
                  closure_0 = value;
                  c4 = 2;
                  c5 = 1;
                  const obj12 = { value: closure_0.blob(), done: false };
                  return obj12;
                }
              } else if (2 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj13 = { value, done: true };
                  return obj13;
                } else {
                  closure_1 = value;
                  const items = [closure_1_12(closure_1)];
                  const obj20 = src(closure_2[9]);
                  const fromBlobResult = obj20.fromBlob(closure_1);
                  items[1] = fromBlobResult.catch(() => null);
                  c4 = 3;
                  c5 = 1;
                  const obj14 = { value: all(items), done: false };
                  return obj14;
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj15 = { value, done: true };
                return obj15;
              } else {
                closure_2 = value;
                closure_3 = closure_3(closure_2, 2);
                imageUri = closure_3[0];
                originalMd5 = closure_3[1];
                if (constants.AVATAR === closure_131_0) {
                  const obj16 = { imageUri, description: obj5.generateAvatarDescription(), originalMd5 };
                  const createPendingImage = closure_0(closure_2[10]).createPendingImage;
                  const tmp22 = closure_0(closure_2[10]);
                  obj5 = closure_0(closure_2[11]);
                  avatar = createPendingImage(obj16);
                  if (closure_131_1 === constants2.PROFILE_TRY_IT_OUT) {
                    const obj9 = closure_0(closure_2[12]);
                    obj9.setTryItOutAvatar(avatar);
                  } else {
                    const obj17 = { guildId: closure_131_2, avatar };
                    const obj6 = closure_0(closure_2[13]);
                    obj6.setPendingChanges(obj17);
                    const obj8 = closure_0(closure_2[14]);
                    const result = obj8.announcePendingAvatarChange("set");
                  }
                } else if (constants.BANNER === tmp63) {
                  const obj18 = {
                    assetOrigin: closure_0(closure_2[15]).AssetOriginTypes.NEW_ASSET,
                    imageUri,
                    description: "",
                    originalAsset: "Array",
                    originalMd5,
                  };
                  const createPendingImage2 = closure_0(closure_2[10]).createPendingImage;
                  const tmp71 = closure_0(closure_2[10]);
                  banner = createPendingImage2(obj18);
                  if (closure_131_1 === constants2.PROFILE_TRY_IT_OUT) {
                    obj3 = closure_0(closure_2[12]);
                    obj3.setTryItOutBanner(banner);
                  } else {
                    const obj19 = { guildId: closure_131_2, banner };
                    obj = closure_0(closure_2[13]);
                    obj.setPendingChanges(obj19);
                  }
                }
                const obj10 = src(closure_2[16]);
                obj10.hideActionSheet();
                c5 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp53) {
              c5 = 3;
              throw tmp53;
            }
          }
        });
        return obj(...arguments);
      };
      const tmp = closure_9();
      const ref = react.useRef(null);
      obj = { ref, scrollable: true, startExpanded: true, children: items };
      BottomSheet = Sheet_BottomSheet.BottomSheet;
      obj3 = {
        title: intl.string(intl2.t["xsC+/y"]),
        trailing: closure_7(NitroWheelIcon.NitroWheelIcon, {}),
        titleWrapperStyle: null,
        titleContainerStyle: null,
      };
      const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
      intl = intl2.intl;
      ({ titleWrapper: obj2.titleWrapperStyle, titleContainer: obj2.titleContainerStyle } = tmp);
      items = [closure_7(BottomSheetTitleHeader, obj3)];
      obj4 = { style: tmp.gifPicker, children: closure_7(GIFPickerDefault, obj7) };
      obj7 = {
        bottomSheetRef: ref,
        onPressGIF(arg0) {
          return obj(...arguments);
        },
      };
      items[1] = closure_7(View, obj4);
      return closure_8(BottomSheet, obj);
    };
let result = size.fileFinishedImporting("modules/user_profile/native/ProfileGIFSelectActionSheet.tsx");

export default tmp3;
export const ProfileAssetType = obj3;
export const GIFSelectionContext = obj4;
