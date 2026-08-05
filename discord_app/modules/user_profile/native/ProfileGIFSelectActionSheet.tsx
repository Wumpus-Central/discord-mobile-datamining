// discord_app/modules/user_profile/native/ProfileGIFSelectActionSheet.tsx
import _slicedToArray from "_slicedToArray";
import closure_4 from "createCacheKey";
import noop from "noop";
import { View } from "module_9848";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { NitroWheelIcon } from "../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import { Background } from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import { RedesignBottomSheetTitleHeaderBase } from "../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { GIFPicker } from "../../gif_picker/native/GIFPicker.tsx";

let error;
let metroImportAll;
const require = arg1;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { titleWrapper: { flex: 0 }, titleContainer: { justifyContent: "flex-start" }, gifPicker: null };
createCacheKey = { flex: 1, marginTop: require("Themes").space.PX_4, marginLeft: require("Themes").space.PX_8, marginRight: require("Themes").space.PX_8 };
createCacheKey[2] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { AVATAR: 0, [0]: "AVATAR", BANNER: 1, [1]: "BANNER" };
let obj2 = { PROFILE_EDIT: 0, [0]: "PROFILE_EDIT", PROFILE_TRY_IT_OUT: 1, [1]: "PROFILE_TRY_IT_OUT" };
let result = require("noop").fileFinishedImporting("modules/user_profile/native/ProfileGIFSelectActionSheet.tsx");

export default function ProfileGIFSelectActionSheet(arg0) {
  let dependencyMap;
  let importDefault;
  let require;
  ({ profileAssetType: require, selectionContext: importDefault, guildId: dependencyMap } = arg0);
  function _onPressGIF() {
    const self = this;
    const tmp = outer1_4((arg0) => {
      let closure_0 = arg0;
      let c4 = 0;
      let c5 = 0;
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
                let _slicedToArray = tmp5;
                let closure_2 = tmp2;
                let lib;
                let src;
                closure_2 = undefined;
                _slicedToArray = undefined;
                dependencyMap = undefined;
                c5 = undefined;
                let closure_6;
                let closure_7;
                const gifSrc = lib.gifSrc;
                src = gifSrc;
                if (gifSrc == null) {
                  src = lib.src;
                }
                const _fetch = fetch;
                dependencyMap = 1;
                c5 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = fetch(src);
                return obj1;
              }
            } else if (1 === tmp5) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                let obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                const outer1_1 = arg1;
                dependencyMap = 2;
                c5 = 1;
                let obj3 = { value: null, done: false };
                obj3[0] = outer1_1.blob();
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
                const obj20 = outer1_1(outer1_2[7]);
                items[1] = outer1_1(outer1_2[7]).fromBlob(closure_2).catch(() => null);
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
              _slicedToArray = arg1;
              dependencyMap = outer1_3(_slicedToArray, 2);
              c5 = 32;
              closure_6 = 5;
              if (outer1_10.AVATAR === lib) {
                obj3 = lib(outer1_2[8]);
                const obj7 = { imageUri: null, description: null, originalMd5: null };
                obj7[0] = c5;
                obj5 = lib(outer1_2[8]);
                obj7[1] = obj5.generateAvatarDescription();
                obj7[2] = closure_6;
                closure_7 = obj3.createPendingImage(obj7);
                if (outer1_1 === outer1_11.PROFILE_TRY_IT_OUT) {
                  let obj9 = lib(outer1_2[9]);
                  obj9.setTryItOutAvatar(outer1_7);
                } else {
                  obj6 = lib(outer1_2[10]);
                  let obj8 = { guildId: null, avatar: null };
                  obj8[0] = closure_2;
                  obj8[1] = closure_7;
                  obj6.setPendingChanges(obj8);
                  obj8 = lib(outer1_2[11]);
                  let result = obj8.announcePendingAvatarChange("set");
                }
              } else {
                if (outer1_10.BANNER === tmp65) {
                  if (outer1_1 !== outer1_11.PROFILE_TRY_IT_OUT) {
                    obj = lib(outer1_2[10]);
                    obj9 = { banner: null, bannerOriginalMd5: null };
                    obj9[0] = c5;
                    obj9[1] = closure_6;
                    obj.setPendingChanges(obj9);
                  }
                }
                obj2 = lib(outer1_2[9]);
                obj2.setTryItOutBanner(c5);
              }
              outer1_1(outer1_2[12]).hideActionSheet();
              c5 = 3;
              const obj11 = outer1_1(outer1_2[12]);
            }
          } catch (tmp53) {
            c5 = tmp;
            throw tmp53;
          }
        }
      })();
    });
    const _onPressGIF = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = createCacheKey();
  const ref = React.useRef(null);
  let obj = { ref, scrollable: true, startExpanded: true, children: null };
  obj = { title: null, trailing: null, titleWrapperStyle: null, titleContainerStyle: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["xsC+/y"]);
  obj[1] = callback(NitroWheelIcon.NitroWheelIcon, {});
  ({ titleWrapper: obj2[2], titleContainer: obj2[3] } = tmp);
  let items = [callback(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj), ];
  obj = { style: tmp.gifPicker, children: callback(GIFPicker, obj1) };
  items[1] = callback(View, obj);
  obj[3] = items;
  return callback2(Background.BottomSheet, obj);
};
export const ProfileAssetType = obj1;
export const GIFSelectionContext = obj2;