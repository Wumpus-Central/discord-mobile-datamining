// === Module 8499: AvatarDecorationSampleV2 ===

// Module 8499 (AvatarDecorationSampleV2)
import _modDef38 from "module_38" /* 38 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1980 */;
import _modDef8500 from "module_8500" /* 8500 */;
import CutoutableAvatarDecorationDefault from "CutoutableAvatarDecoration" /* 8501 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
let c8 = 0.8333333333333334;
const createStyles = fn(4896);
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = { avatar: null, solidAvatar: null, avatarDecoration: null };
  const size = { position: "absolute", height: arg0 * c8, width: arg0 * c8, borderRadius: arg0 * c8 / 2, opacity: 0.8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
  obj.avatar = size;
  obj.solidAvatar = { opacity: 1 };
  obj.avatarDecoration = { position: "absolute" };
  return obj;
});
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/AvatarDecorationSampleV2.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((threeTierBundle) => {
  const cResult = c.c(17);
  ({ item, size, avatarSource, animate } = threeTierBundle);
  const tmp3 = closure_9(size);
  _modDef38(item.type === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION, "Item must be Avatar Decoration");
  let solidAvatar = null != avatarSource;
  if (!solidAvatar) {
    solidAvatar = true === threeTierBundle.threeTierBundle;
  }
  if (solidAvatar) {
    solidAvatar = tmp3.solidAvatar;
  }
  if (cResult[0] === tmp3.avatar) {
    if (cResult[1] === solidAvatar) {
      let tmp7 = cResult[2];
    }
    if (null == avatarSource) {
      avatarSource = _modDef8500;
    }
    if (cResult[3] === tmp7) {
      if (cResult[4] === avatarSource) {
        let tmp8 = cResult[5];
      }
      if (cResult[6] === animate) {
        if (cResult[7] === item) {
          if (cResult[8] === size) {
            let tmp12 = cResult[9];
          }
          if (cResult[10] === item.label) {
            if (cResult[11] === tmp3.avatarDecoration) {
              if (cResult[12] === tmp12) {
                let tmp15 = cResult[13];
              }
              if (cResult[14] === tmp8) {
                if (cResult[15] === tmp15) {
                  let tmp19 = cResult[16];
                }
                return tmp19;
              }
              const obj2 = { children: null };
              const items = [tmp8, tmp15];
              obj2.children = items;
              const tmp22 = React5(timestampProducer, obj2);
              cResult[14] = tmp8;
              cResult[15] = tmp15;
              cResult[16] = tmp22;
              tmp19 = tmp22;
            }
          }
          const obj3 = { style: tmp3.avatarDecoration, accessibilityLabel: item.label, children: tmp12 };
          const tmp18 = hasOwnProperty(React4, obj3);
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
    const tmp11 = hasOwnProperty(React3, obj5);
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
}) : ((arg0) => {
  ({ item, size, avatarSource } = arg0);
  ({ animate, threeTierBundle } = arg0);
  const tmp = closure_9(size);
  _modDef38(item.type === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION, "Item must be Avatar Decoration");
  const items = [tmp.avatar, ];
  let solidAvatar = null != avatarSource;
  if (!solidAvatar) {
    solidAvatar = true === threeTierBundle;
  }
  if (solidAvatar) {
    solidAvatar = tmp.solidAvatar;
  }
  const obj = { style: items, resizeMode: "contain", source: null, accessible: false };
  items[1] = solidAvatar;
  if (null == avatarSource) {
    avatarSource = _modDef8500;
  }
  const obj2 = { children: null };
  obj.source = avatarSource;
  const items1 = [hasOwnProperty(React3, obj), ];
  items1[1] = hasOwnProperty(React4, { style: tmp.avatarDecoration, accessibilityLabel: item.label, children: hasOwnProperty(CutoutableAvatarDecorationDefault, { avatarDecoration: item, size, animate }) });
  obj2.children = items1;
  return React5(timestampProducer, obj2);
});
export const avatarPlaceholderSizeRatio = 0.8333333333333334;