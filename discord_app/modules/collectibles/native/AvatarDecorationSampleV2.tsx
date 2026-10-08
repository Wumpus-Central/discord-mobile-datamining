// === Module 8983: AvatarDecorationSampleV2 ===

// Module 8983 (AvatarDecorationSampleV2)
import _modDef38 from "module_38" /* 38 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1992 */;
import FastImageDefault from "FastImage" /* 6164 */;
import _modDef8984 from "module_8984" /* 8984 */;
import CutoutableAvatarDecorationDefault from "CutoutableAvatarDecoration" /* 8985 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let c7 = 0.8333333333333334;
const createStyles = fn(5090);
let closure_8 = createStyles.createStyles((arg0) => {
  const obj = { avatar: null, solidAvatar: null, avatarDecoration: null };
  const size = { position: "absolute", height: arg0 * c7, width: arg0 * c7, borderRadius: arg0 * c7 / 2, opacity: 0.8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
  obj.avatar = size;
  obj.solidAvatar = { opacity: 1 };
  obj.avatarDecoration = { position: "absolute" };
  return obj;
});
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/AvatarDecorationSampleV2.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AvatarDecorationSampleV2(threeTierBundle) {
  const cResult = c.c(17);
  ({ item, size, avatarSource, animate } = threeTierBundle);
  const tmp3 = closure_8(size);
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
      avatarSource = _modDef8984;
    }
    if (cResult[3] === tmp7) {
      if (cResult[4] === avatarSource) {
        let tmp8 = cResult[5];
      }
      if (cResult[6] === animate) {
        if (cResult[7] === item) {
          if (cResult[8] === size) {
            let tmp11 = cResult[9];
          }
          if (cResult[10] === item.label) {
            if (cResult[11] === tmp3.avatarDecoration) {
              if (cResult[12] === tmp11) {
                let tmp14 = cResult[13];
              }
              if (cResult[14] === tmp8) {
                if (cResult[15] === tmp14) {
                  let tmp18 = cResult[16];
                }
                return tmp18;
              }
              const obj2 = { children: null };
              const items = [tmp8, tmp14];
              obj2.children = items;
              const tmp21 = timestampProducer(hasOwnProperty, obj2);
              cResult[14] = tmp8;
              cResult[15] = tmp14;
              cResult[16] = tmp21;
              tmp18 = tmp21;
            }
          }
          const obj3 = { style: tmp3.avatarDecoration, accessibilityLabel: item.label, children: tmp11 };
          const tmp17 = React4(View, obj3);
          cResult[10] = item.label;
          cResult[11] = tmp3.avatarDecoration;
          cResult[12] = tmp11;
          cResult[13] = tmp17;
          tmp14 = tmp17;
        }
      }
      const obj4 = { avatarDecoration: item, size, animate };
      const tmp13 = React4(CutoutableAvatarDecorationDefault, obj4);
      cResult[6] = animate;
      cResult[7] = item;
      cResult[8] = size;
      cResult[9] = tmp13;
      tmp11 = tmp13;
    }
    const obj5 = { style: tmp7, resizeMode: "contain", source: avatarSource, accessible: false };
    const tmp10 = React4(FastImageDefault, obj5);
    cResult[3] = tmp7;
    cResult[4] = avatarSource;
    cResult[5] = tmp10;
    tmp8 = tmp10;
  }
  const items1 = [tmp3.avatar, solidAvatar];
  cResult[0] = tmp3.avatar;
  cResult[1] = solidAvatar;
  cResult[2] = items1;
  tmp7 = items1;
}) : (function AvatarDecorationSampleV2(arg0) {
  ({ item, size, avatarSource } = arg0);
  ({ animate, threeTierBundle } = arg0);
  const tmp = closure_8(size);
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
    avatarSource = _modDef8984;
  }
  const obj2 = { children: null };
  obj.source = avatarSource;
  const items1 = [React4(FastImageDefault, obj), ];
  items1[1] = React4(View, { style: tmp.avatarDecoration, accessibilityLabel: item.label, children: React4(CutoutableAvatarDecorationDefault, { avatarDecoration: item, size, animate }) });
  obj2.children = items1;
  return timestampProducer(hasOwnProperty, obj2);
});
export const avatarPlaceholderSizeRatio = 0.8333333333333334;