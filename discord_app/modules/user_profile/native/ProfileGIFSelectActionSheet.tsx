// discord_app/modules/user_profile/native/ProfileGIFSelectActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import BottomSheetTitleHeader from "../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Sheet_BottomSheet from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import NitroWheelIcon from "../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import GIFPickerDefault from "../../gif_picker/native/GIFPicker.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
function blobToDataURI(arg0) {
  closure_0 = arg0;
  return new Promise((data) => {
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
      data(str);
    };
    const asDataURL = fileReader.readAsDataURL(data);
  });
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  titleWrapper: { flex: 0 },
  titleContainer: { justifyContent: "flex-start" },
  gifPicker: {
    flex: 1,
    marginTop: nativeDefault.space.PX_4,
    marginLeft: nativeDefault.space.PX_8,
    marginRight: nativeDefault.space.PX_8,
  },
};
let closure_9 = createStyles.createStyles(obj2);
let obj4 = { AVATAR: 0, [0]: "AVATAR", BANNER: 1, [1]: "BANNER" };
let obj5 = { PROFILE_EDIT: 0, [0]: "PROFILE_EDIT", PROFILE_TRY_IT_OUT: 1, [1]: "PROFILE_TRY_IT_OUT" };
const ReactCompilerGating = fn(558);
let obj3 = {
  flex: 1,
  marginTop: nativeDefault.space.PX_4,
  marginLeft: nativeDefault.space.PX_8,
  marginRight: nativeDefault.space.PX_8,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/ProfileGIFSelectActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (profileAssetType) => {
      const cResult = require("c").c(17);
      profileAssetType = profileAssetType.profileAssetType;
      _require = profileAssetType;
      const selectionContext = profileAssetType.selectionContext;
      guildId = profileAssetType.guildId;
      const tmp4 = closure_9();
      const ref = noop.useRef(null);
      if (cResult[0] === guildId) {
        if (cResult[1] === profileAssetType) {
          if (cResult[2] === selectionContext) {
            let tmp6 = cResult[3];
          }
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(tmp2[17]).intl;
            const stringResult = intl.string(tmp(tmp2[17]).t["xsC+/y"]);
            const tmp12 = closure_7(tmp(tmp2[18]).NitroWheelIcon, {});
            cResult[4] = stringResult;
            cResult[5] = tmp12;
            let tmp9 = tmp12;
            let tmp8 = stringResult;
          } else {
            tmp8 = cResult[4];
            tmp9 = cResult[5];
          }
          if (cResult[6] === tmp4.titleContainer) {
            if (cResult[7] === tmp4.titleWrapper) {
              let tmp13 = cResult[8];
            }
            if (cResult[9] !== tmp6) {
              let obj3 = { bottomSheetRef: ref, onPressGIF: tmp6 };
              const tmp19 = closure_7(selectionContext(tmp2[20]), obj3);
              cResult[9] = tmp6;
              cResult[10] = tmp19;
              let tmp16 = tmp19;
            } else {
              tmp16 = cResult[10];
            }
            if (cResult[11] === tmp4.gifPicker) {
              if (cResult[12] === tmp16) {
                let tmp20 = cResult[13];
              }
              if (cResult[14] === tmp13) {
                if (cResult[15] === tmp20) {
                  let tmp24 = cResult[16];
                }
                return tmp24;
              }
              obj4 = { ref, scrollable: true, startExpanded: true, children: null };
              let items = [tmp13, tmp20];
              obj4.children = items;
              const tmp26 = closure_8(tmp(tmp2[21]).BottomSheet, obj4);
              cResult[14] = tmp13;
              cResult[15] = tmp20;
              cResult[16] = tmp26;
              tmp24 = tmp26;
            }
            obj5 = { style: tmp4.gifPicker, children: tmp16 };
            const tmp23 = closure_7(View, obj5);
            cResult[11] = tmp4.gifPicker;
            cResult[12] = tmp16;
            cResult[13] = tmp23;
            tmp20 = tmp23;
          }
          let obj9 = { title: tmp8, trailing: tmp9, titleWrapperStyle: null, titleContainerStyle: null };
          ({ titleWrapper: obj2.titleWrapperStyle, titleContainer: obj2.titleContainerStyle } = tmp4);
          const tmp15 = closure_7(tmp(tmp2[19]).BottomSheetTitleHeader, obj9);
          cResult[6] = tmp4.titleContainer;
          cResult[7] = tmp4.titleWrapper;
          cResult[8] = tmp15;
          tmp13 = tmp15;
        }
      }
      _require = asyncGeneratorStep(async (arg0) => {
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
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
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                obj5 = { value, done: true };
                return obj5;
              } else {
                closure_3 = tmp5;
                guildId = tmp2;
                closure_130_0 = undefined;
                closure_130_1 = undefined;
                closure_130_2 = undefined;
                closure_130_3 = undefined;
                closure_130_4 = undefined;
                closure_130_5 = undefined;
                closure_130_6 = undefined;
                closure_130_7 = undefined;
                const gifSrc = closure_0.gifSrc;
                let src = gifSrc;
                if (gifSrc == null) {
                  src = closure_0.src;
                }
                const _fetch = fetch;
                c4 = 1;
                c5 = 1;
                const obj8 = { value: fetch(src), done: false };
                return obj8;
              }
            } else if (1 === tmp5) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj12 = { value, done: true };
                return obj12;
              } else {
                closure_130_0 = value;
                c4 = 2;
                c5 = 1;
                const obj13 = { value: closure_130_0.blob(), done: false };
                return obj13;
              }
            } else if (2 === tmp5) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj14 = { value, done: true };
                return obj14;
              } else {
                closure_130_1 = value;
                const items = [blobToDataURI(closure_130_1)];
                const obj22 = selectionContext(guildId[9]);
                items[1] = selectionContext(guildId[9])
                  .fromBlob(closure_130_1)
                  .catch(() => null);
                c4 = 3;
                c5 = 1;
                const obj15 = { value: Promise.all(items), done: false };
                return obj15;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj16 = { value, done: true };
              return obj16;
            } else {
              closure_130_2 = value;
              [closure_130_4, closure_130_5] = closure_130_2;
              if (constants.AVATAR === closure_0) {
                const obj17 = { imageUri: closure_130_4, description: null, originalMd5: null };
                obj4 = closure_0(guildId[10]);
                obj17.description = closure_0(guildId[11]).generateAvatarDescription();
                obj17.originalMd5 = closure_130_5;
                closure_130_6 = obj4.createPendingImage(obj17);
                if (src === constants2.PROFILE_TRY_IT_OUT) {
                  closure_0(guildId[12]).setTryItOutAvatar(closure_130_6);
                  const obj10 = closure_0(guildId[12]);
                } else {
                  const obj18 = { guildId, avatar: closure_130_6 };
                  closure_0(guildId[13]).setPendingChanges(obj18);
                  const obj7 = closure_0(guildId[13]);
                  const result = closure_0(guildId[14]).announcePendingAvatarChange("set");
                  const obj9 = closure_0(guildId[14]);
                }
                const obj6 = closure_0(guildId[11]);
              } else {
                if (constants.BANNER === tmp64) {
                  const obj19 = {
                    assetOrigin: closure_0(guildId[15]).AssetOriginTypes.NEW_ASSET,
                    imageUri: closure_130_4,
                    description: "",
                    originalAsset: "Array",
                    originalMd5: closure_130_5,
                  };
                  closure_130_7 = closure_0(guildId[10]).createPendingImage(obj19);
                  if (src !== constants2.PROFILE_TRY_IT_OUT) {
                    const obj21 = { guildId, banner: closure_130_7 };
                    closure_0(guildId[13]).setPendingChanges(obj21);
                    const obj = closure_0(guildId[13]);
                  }
                  const obj20 = closure_0(guildId[10]);
                }
                closure_0(guildId[12]).setTryItOutBanner(closure_130_7);
                const obj3 = closure_0(guildId[12]);
              }
              selectionContext(guildId[16]).hideActionSheet();
              c5 = 3;
              const obj11 = selectionContext(guildId[16]);
            }
          } catch (tmp53) {
            c5 = tmp;
            throw tmp53;
          }
        }
      });
      function onPressGIF() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      cResult[0] = guildId;
      cResult[1] = profileAssetType;
      cResult[2] = selectionContext;
      cResult[3] = onPressGIF;
      tmp6 = onPressGIF;
      let obj = require("c");
    }
  : (arg0) => {
      ({ profileAssetType: require, selectionContext: importDefault, guildId: dependencyMap } = arg0);
      closure_3 = async function _onPressGIF2(arg0) {
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
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
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                obj5 = { value, done: true };
                return obj5;
              } else {
                closure_3 = tmp5;
                closure_130_0 = undefined;
                closure_130_1 = undefined;
                closure_130_2 = undefined;
                closure_130_3 = undefined;
                closure_130_4 = undefined;
                closure_130_5 = undefined;
                closure_130_6 = undefined;
                closure_130_7 = undefined;
                const gifSrc = closure_0.gifSrc;
                let src = gifSrc;
                if (gifSrc == null) {
                  src = closure_0.src;
                }
                const _fetch = fetch;
                c4 = 1;
                c5 = 1;
                const obj8 = { value: fetch(src), done: false };
                return obj8;
              }
            } else if (1 === tmp5) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj12 = { value, done: true };
                return obj12;
              } else {
                closure_130_0 = value;
                c4 = 2;
                c5 = 1;
                const obj13 = { value: closure_130_0.blob(), done: false };
                return obj13;
              }
            } else if (2 === tmp5) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj14 = { value, done: true };
                return obj14;
              } else {
                closure_130_1 = value;
                const items = [blobToDataURI(closure_130_1)];
                const obj22 = src(tmp2[9]);
                items[1] = src(tmp2[9])
                  .fromBlob(closure_130_1)
                  .catch(() => null);
                c4 = 3;
                c5 = 1;
                const obj15 = { value: Promise.all(items), done: false };
                return obj15;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj16 = { value, done: true };
              return obj16;
            } else {
              closure_130_2 = value;
              closure_130_3 = closure_3(closure_130_2, 2);
              closure_130_4 = closure_130_3[0];
              closure_130_5 = closure_130_3[1];
              if (constants.AVATAR === closure_131_0) {
                const obj17 = { imageUri: closure_130_4, description: null, originalMd5: null };
                obj4 = closure_0(tmp2[10]);
                obj17.description = closure_0(tmp2[11]).generateAvatarDescription();
                obj17.originalMd5 = closure_130_5;
                closure_130_6 = obj4.createPendingImage(obj17);
                if (closure_131_1 === constants2.PROFILE_TRY_IT_OUT) {
                  closure_0(tmp2[12]).setTryItOutAvatar(closure_130_6);
                  const obj10 = closure_0(tmp2[12]);
                } else {
                  const obj18 = { guildId: closure_131_2, avatar: closure_130_6 };
                  closure_0(tmp2[13]).setPendingChanges(obj18);
                  const obj7 = closure_0(tmp2[13]);
                  const result = closure_0(tmp2[14]).announcePendingAvatarChange("set");
                  const obj9 = closure_0(tmp2[14]);
                }
                const obj6 = closure_0(tmp2[11]);
              } else {
                if (constants.BANNER === tmp64) {
                  const obj19 = {
                    assetOrigin: closure_0(tmp2[15]).AssetOriginTypes.NEW_ASSET,
                    imageUri: closure_130_4,
                    description: "",
                    originalAsset: "Array",
                    originalMd5: closure_130_5,
                  };
                  closure_130_7 = closure_0(tmp2[10]).createPendingImage(obj19);
                  if (closure_131_1 !== constants2.PROFILE_TRY_IT_OUT) {
                    const obj21 = { guildId: closure_131_2, banner: closure_130_7 };
                    closure_0(tmp2[13]).setPendingChanges(obj21);
                    const obj = closure_0(tmp2[13]);
                  }
                  const obj20 = closure_0(tmp2[10]);
                }
                closure_0(tmp2[12]).setTryItOutBanner(closure_130_7);
                const obj3 = closure_0(tmp2[12]);
              }
              src(tmp2[16]).hideActionSheet();
              c5 = 3;
              const obj11 = src(tmp2[16]);
            }
          } catch (tmp53) {
            c5 = tmp;
            throw tmp53;
          }
        }
      };
      const tmp = closure_9();
      const ref = noop.useRef(null);
      let obj = { ref, scrollable: true, startExpanded: true, children: null };
      let obj3 = { title: null, trailing: null, titleWrapperStyle: null, titleContainerStyle: null };
      const intl = util.intl;
      obj3.title = intl.string(util.t["xsC+/y"]);
      obj3.trailing = closure_7(NitroWheelIcon.NitroWheelIcon, {});
      ({ titleWrapper: obj2.titleWrapperStyle, titleContainer: obj2.titleContainerStyle } = tmp);
      let items = [closure_7(BottomSheetTitleHeader.BottomSheetTitleHeader, obj3)];
      obj4 = {
        style: tmp.gifPicker,
        children: closure_7(GIFPickerDefault, {
          bottomSheetRef: ref,
          onPressGIF(arg0) {
            const self = this;
            const apply = closure_3.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          },
        }),
      };
      items[1] = closure_7(View, obj4);
      obj.children = items;
      return closure_8(Sheet_BottomSheet.BottomSheet, obj);
    };
export const ProfileAssetType = obj4;
export const GIFSelectionContext = obj5;
