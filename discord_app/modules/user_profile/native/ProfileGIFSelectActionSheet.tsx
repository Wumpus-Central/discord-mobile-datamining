// discord_app/modules/user_profile/native/ProfileGIFSelectActionSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import RedesignBottomSheetTitleHeaderBase from "../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Background from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import NitroWheelIcon from "../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import _modDef10364 from "../../gif_picker/native/GIFPicker.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_5 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { titleWrapper: { flex: 0 }, titleContainer: { justifyContent: "flex-start" }, gifPicker: null };
createCacheKey = { flex: 1, marginTop: ThemesDefault.space.PX_4, marginLeft: ThemesDefault.space.PX_8, marginRight: ThemesDefault.space.PX_8 };
createCacheKey[2] = createCacheKey;
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj1 = { AVATAR: 0, [0]: "AVATAR", BANNER: 1, [1]: "BANNER" };
let obj2 = { PROFILE_EDIT: 0, [0]: "PROFILE_EDIT", PROFILE_TRY_IT_OUT: 1, [1]: "PROFILE_TRY_IT_OUT" };
let result = require("set").fileFinishedImporting("modules/user_profile/native/ProfileGIFSelectActionSheet.tsx");

export default function ProfileGIFSelectActionSheet(arg0) {
  ({ profileAssetType: require, selectionContext: importDefault, guildId: dependencyMap } = arg0);
  function _onPressGIF() {
    const self = this;
    const tmp = closure_1_4((arg0) => {
      closure_0 = arg0;
      c4 = 0;
      c5 = 0;
      return (function*(arg0) {
        if (c5 === 2) {
          c5 = 3;
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
            c5 = 2;
            if (0 === dependencyMap) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_3 = tmp5;
                closure_2 = tmp2;
                let lib;
                let src;
                closure_2 = undefined;
                closure_3 = undefined;
                dependencyMap = undefined;
                c5 = undefined;
                closure_6 = undefined;
                closure_7 = undefined;
                closure_8 = undefined;
                const gifSrc = lib.gifSrc;
                src = gifSrc;
                if (gifSrc == null) {
                  src = lib.src;
                }
                const _fetch = fetch;
                dependencyMap = 1;
                c5 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = fetch(src);
                return obj1;
              }
            } else if (1 === tmp5) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                const lib2 = arg1;
                dependencyMap = 2;
                c5 = 1;
                let obj3 = { value: null, done: false };
                obj3[0] = lib2.blob();
                return obj3;
              }
            } else if (2 === tmp5) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj4 = { value: null, done: true };
                obj4[0] = arg1;
                return obj4;
              } else {
                closure_2 = arg1;
                lib = closure_2;
                const promise = new Promise((closure_0) => {
                  const fileReader = new FileReader();
                  fileReader.onload = function onload() { ... };
                  const asDataURL = fileReader.readAsDataURL(closure_0);
                });
                const items = [promise, ];
                const obj22 = lib2(closure_1_2[7]);
                items[1] = lib2(closure_1_2[7]).fromBlob(closure_2).catch(() => null);
                dependencyMap = 3;
                c5 = 1;
                let obj5 = { value: null, done: false };
                obj5[0] = Promise.all(items);
                return obj5;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              let obj6 = { value: null, done: true };
              obj6[0] = arg1;
              return obj6;
            } else {
              closure_3 = arg1;
              dependencyMap = closure_1_3(closure_3, 2);
              c5 = 32;
              closure_6 = 5;
              if (closure_1_10.AVATAR === lib) {
                obj3 = lib(closure_1_2[8]);
                const obj7 = { imageUri: null, description: null, originalMd5: null };
                obj7[0] = c5;
                obj5 = lib(closure_1_2[9]);
                obj7[1] = obj5.generateAvatarDescription();
                obj7[2] = closure_6;
                closure_7 = obj3.createPendingImage(obj7);
                if (lib2 === closure_1_11.PROFILE_TRY_IT_OUT) {
                  let obj9 = lib(closure_1_2[10]);
                  obj9.setTryItOutAvatar(closure_1_7);
                } else {
                  obj6 = lib(closure_1_2[11]);
                  let obj8 = { guildId: null, avatar: null };
                  obj8[0] = closure_2;
                  obj8[1] = closure_7;
                  obj6.setPendingChanges(obj8);
                  obj8 = lib(closure_1_2[12]);
                  let result = obj8.announcePendingAvatarChange("set");
                }
              } else {
                if (closure_1_10.BANNER === tmp65) {
                  obj9 = { assetOrigin: null, imageUri: null, description: "", originalAsset: "Array", originalMd5: "text-sm/normal" };
                  obj9[0] = lib(closure_1_2[13]).AssetOriginTypes.NEW_ASSET;
                  obj9[1] = c5;
                  obj9[4] = closure_6;
                  closure_8 = lib(closure_1_2[8]).createPendingImage(obj9);
                  if (src !== closure_1_11.PROFILE_TRY_IT_OUT) {
                    obj = lib(closure_1_2[11]);
                    let obj10 = { guildId: null, banner: null };
                    obj10[0] = closure_2;
                    obj10[1] = closure_8;
                    obj.setPendingChanges(obj10);
                  }
                  const obj20 = lib(closure_1_2[8]);
                }
                obj2 = lib(closure_1_2[10]);
                obj2.setTryItOutBanner(closure_1_8);
              }
              obj10 = lib2(closure_1_2[14]);
              obj10.hideActionSheet();
              c5 = 3;
            }
          } catch (tmp53) {
            c5 = tmp;
            throw tmp53;
          }
        }
      })();
    });
    closure_3 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback3();
  const ref = React.useRef(null);
  let obj = { ref, scrollable: true, startExpanded: true, children: null };
  obj = { title: null, trailing: null, titleWrapperStyle: null, titleContainerStyle: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["xsC+/y"]);
  obj[1] = callback(NitroWheelIcon.NitroWheelIcon, {});
  ({ titleWrapper: obj2[2], titleContainer: obj2[3] } = tmp);
  let items = [callback(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj), ];
  obj = { style: tmp.gifPicker, children: callback(_modDef10364, obj1) };
  items[1] = callback(View, obj);
  obj[3] = items;
  return callback2(Background.BottomSheet, obj);
};
export const ProfileAssetType = obj1;
export const GIFSelectionContext = obj2;