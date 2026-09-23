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

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4827);
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/ProfileGIFSelectActionSheet.tsx");

export default function ProfileGIFSelectActionSheet(arg0) {
  ({ profileAssetType: require, selectionContext: importDefault, guildId: dependencyMap } = arg0);
  closure_3 = async function _onPressGIF(arg0) {
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
        return { value: "HermesInternal", done: null };
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
            closure_130_8 = undefined;
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
            closure_130_1 = value;
            c4 = 2;
            c5 = 1;
            const obj13 = { value: closure_130_1.blob(), done: false };
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
            closure_130_2 = value;
            closure_130_0 = closure_130_2;
            const promise = new Promise((arg0) => {
              closure_0 = arg0;
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
              const asDataURL = fileReader.readAsDataURL(closure_1_0);
            });
            const items = [promise];
            const obj22 = src(tmp2[7]);
            items[1] = src(tmp2[7])
              .fromBlob(closure_130_2)
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
          closure_130_3 = value;
          closure_130_4 = closure_3(closure_130_3, 2);
          closure_130_5 = closure_130_4[0];
          closure_130_6 = closure_130_4[1];
          if (constants.AVATAR === closure_131_0) {
            const obj17 = { imageUri: closure_130_5, description: null, originalMd5: null };
            obj4 = closure_0(tmp2[8]);
            obj17.description = closure_0(tmp2[9]).generateAvatarDescription();
            obj17.originalMd5 = closure_130_6;
            closure_130_7 = obj4.createPendingImage(obj17);
            if (closure_131_1 === constants2.PROFILE_TRY_IT_OUT) {
              closure_0(tmp2[10]).setTryItOutAvatar(closure_130_7);
              const obj10 = closure_0(tmp2[10]);
            } else {
              const obj18 = { guildId: closure_131_2, avatar: closure_130_7 };
              closure_0(tmp2[11]).setPendingChanges(obj18);
              const obj7 = closure_0(tmp2[11]);
              let result = closure_0(tmp2[12]).announcePendingAvatarChange("set");
              const obj9 = closure_0(tmp2[12]);
            }
            const obj6 = closure_0(tmp2[9]);
          } else {
            if (constants.BANNER === tmp64) {
              const obj19 = {
                assetOrigin: closure_0(tmp2[13]).AssetOriginTypes.NEW_ASSET,
                imageUri: closure_130_5,
                description: "",
                originalAsset: "Array",
                originalMd5: closure_130_6,
              };
              closure_130_8 = closure_0(tmp2[8]).createPendingImage(obj19);
              if (closure_131_1 !== constants2.PROFILE_TRY_IT_OUT) {
                const obj21 = { guildId: closure_131_2, banner: closure_130_8 };
                closure_0(tmp2[11]).setPendingChanges(obj21);
                const obj = closure_0(tmp2[11]);
              }
              const obj20 = closure_0(tmp2[8]);
            }
            closure_0(tmp2[10]).setTryItOutBanner(closure_130_8);
            const obj3 = closure_0(tmp2[10]);
          }
          src(tmp2[14]).hideActionSheet();
          c5 = 3;
          const obj11 = src(tmp2[14]);
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
}
export const ProfileAssetType = obj4;
export const GIFSelectionContext = obj5;
