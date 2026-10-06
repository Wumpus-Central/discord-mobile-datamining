// discord_app/modules/collectibles/native/AvatarDecorationSampleV2.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import AssetRegistryDefault from "../../../../_runtime/08500_AssetRegistry.js";
import CutoutableAvatarDecorationDefault from "components/CutoutableAvatarDecoration.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ Image: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let c8 = 0.8333333333333334;
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = { avatar: size, solidAvatar: { opacity: 1 }, avatarDecoration: { position: "absolute" } };
  size = {
    position: "absolute",
    height: arg0 * c8,
    width: arg0 * c8,
    borderRadius: (arg0 * c8) / 2,
    opacity: 0.8,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  };
  return obj;
});
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (threeTierBundle) => {
      let animate;
      let avatarSource;
      let item;
      let items;
      const obj = react2;
      const cResult = obj.c(17);
      ({ item, size, avatarSource, animate } = threeTierBundle);
      threeTierBundle = threeTierBundle.threeTierBundle;
      const tmp3 = closure_9(size);
      const tmp5 = _modDef38;
      tmp5(item.type === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION, "Item must be Avatar Decoration");
      const solidAvatar = (null != avatarSource || true === threeTierBundle) && tmp3.solidAvatar;
      if (cResult[0] === tmp3.avatar) {
        let tmp7;
        if (cResult[1] === solidAvatar) {
          tmp7 = cResult[2];
        }
        if (null == avatarSource) {
          avatarSource = AssetRegistryDefault;
        }
        if (cResult[3] === tmp7) {
          let tmp8;
          if (cResult[4] === avatarSource) {
            tmp8 = cResult[5];
          }
          if (cResult[6] === animate) {
            if (cResult[7] === item) {
              let tmp12;
              if (cResult[8] === size) {
                tmp12 = cResult[9];
              }
              if (cResult[10] === item.label) {
                if (cResult[11] === tmp3.avatarDecoration) {
                  let tmp15;
                  if (cResult[12] === tmp12) {
                    tmp15 = cResult[13];
                  }
                  if (cResult[14] === tmp8) {
                    let tmp19;
                    if (cResult[15] === tmp15) {
                      tmp19 = cResult[16];
                    }
                    return tmp19;
                  }
                  const obj2 = { children: items };
                  items = [tmp8, tmp15];
                  const tmp22 = metroImportDefault(metroRequire, obj2);
                  cResult[14] = tmp8;
                  cResult[15] = tmp15;
                  cResult[16] = tmp22;
                  tmp19 = tmp22;
                }
              }
              const obj3 = { style: tmp3.avatarDecoration, accessibilityLabel: item.label, children: tmp12 };
              const tmp18 = hasOwnProperty(React3, obj3);
              cResult[10] = item.label;
              cResult[11] = tmp3.avatarDecoration;
              cResult[12] = tmp12;
              cResult[13] = tmp18;
              tmp15 = tmp18;
            }
          }
          const obj4 = { avatarDecoration: item, size, animate };
          const tmp14 = hasOwnProperty(CutoutableAvatarDecorationDefault, obj4);
          cResult[6] = animate;
          cResult[7] = item;
          cResult[8] = size;
          cResult[9] = tmp14;
          tmp12 = tmp14;
        }
        const obj5 = { style: tmp7, resizeMode: "contain", source: avatarSource, accessible: false };
        const tmp11 = hasOwnProperty(_false, obj5);
        cResult[3] = tmp7;
        cResult[4] = avatarSource;
        cResult[5] = tmp11;
        tmp8 = tmp11;
      }
      const items1 = [tmp3.avatar, solidAvatar];
      cResult[0] = tmp3.avatar;
      cResult[1] = solidAvatar;
      cResult[2] = items1;
      tmp7 = items1;
    }
  : (arg0) => {
      let animate;
      let avatarSource;
      let item;
      let items1;
      let threeTierBundle;
      ({ item, size, avatarSource } = arg0);
      ({ animate, threeTierBundle } = arg0);
      const tmp = closure_9(size);
      const tmp4 = _modDef38;
      tmp4(item.type === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION, "Item must be Avatar Decoration");
      const items = [tmp.avatar];
      const solidAvatar = (null != avatarSource || true === threeTierBundle) && tmp.solidAvatar;
      const obj = { style: items, resizeMode: "contain", source: avatarSource, accessible: false };
      items[1] = solidAvatar;
      if (null == avatarSource) {
        avatarSource = AssetRegistryDefault;
      }
      const obj2 = { children: items1 };
      items1 = [hasOwnProperty(_false, obj)];
      const obj3 = {
        style: tmp.avatarDecoration,
        accessibilityLabel: item.label,
        children: hasOwnProperty(CutoutableAvatarDecorationDefault, { avatarDecoration: item, size, animate }),
      };
      items1[1] = hasOwnProperty(React3, obj3);
      return metroImportDefault(metroRequire, obj2);
    };
let size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/AvatarDecorationSampleV2.tsx");

export default tmp5;
export const avatarPlaceholderSizeRatio = 0.8333333333333334;
