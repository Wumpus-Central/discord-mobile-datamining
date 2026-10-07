// discord_app/modules/avatar/native/components/TouchableUploadAvatar.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import _modDef12457 from "../../../../../_runtime/metro/12457__.js";
import _modDef13691 from "../../../../../_runtime/metro/13691__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  avatarContainer: { display: "flex", paddingTop: 24 },
  defaultLogoStyle: { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, width: 96 },
  uploadedAvatarStyle: { width: 200, height: 200, borderRadius: 100, position: "relative" },
  avatarWrapper: null,
  uploadAvatarWrapper: null,
  uploadAvatarIcon: null,
};
let size = {
  borderColor: nativeDefault.colors.BORDER_MUTED,
  borderStyle: "dashed",
  borderWidth: 2,
  borderRadius: nativeDefault.radii.round,
  width: 200,
  height: 200,
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  overflow: "visible",
};
obj2.avatarWrapper = size;
const size1 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  borderRadius: nativeDefault.radii.round,
  tintColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  position: "absolute",
  right: 10,
  top: 10,
  width: 40,
  height: 40,
  flex: 1,
  justifyContent: "center",
};
obj2.uploadAvatarWrapper = size1;
let obj3 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, width: 96 };
obj2.uploadAvatarIcon = { tintColor: nativeDefault.colors.WHITE, alignSelf: "center" };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { tintColor: nativeDefault.colors.WHITE, alignSelf: "center" };
size = fn(2);
const result = size.fileFinishedImporting("modules/avatar/native/components/TouchableUploadAvatar.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(19);
      ({ avatarSource, showPendingAvatar, onSelectAvatar } = arg0);
      const tmp5 = closure_6();
      if (!(undefined !== showPendingAvatar && showPendingAvatar)) {
        let tmp7 = _modDef13691;
      } else {
        tmp7 = avatarSource;
      }
      if (undefined !== showPendingAvatar && showPendingAvatar) {
        if (null != avatarSource) {
          let defaultLogoStyle = tmp5.uploadedAvatarStyle;
        }
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult = intl.string(util.t["70lEQe"]);
          cResult[0] = stringResult;
          let first = stringResult;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === tmp7) {
          if (cResult[2] === defaultLogoStyle) {
            let tmp13 = cResult[3];
          }
          if (cResult[4] !== tmp5.uploadAvatarIcon) {
            const obj2 = { size: native.Icon.Sizes.MEDIUM, source: _modDef12457, style: tmp5.uploadAvatarIcon };
            const tmp20 = React4(native.Icon, obj2);
            cResult[4] = tmp5.uploadAvatarIcon;
            cResult[5] = tmp20;
            let tmp17 = tmp20;
          } else {
            tmp17 = cResult[5];
          }
          if (cResult[6] === tmp5.uploadAvatarWrapper) {
            if (cResult[7] === tmp17) {
              let tmp21 = cResult[8];
            }
            if (cResult[9] === tmp5.avatarWrapper) {
              if (cResult[10] === tmp13) {
                if (cResult[11] === tmp21) {
                  let tmp25 = cResult[12];
                }
                if (cResult[13] === onSelectAvatar) {
                  if (cResult[14] === tmp25) {
                    let tmp29 = cResult[15];
                  }
                  if (cResult[16] === tmp5.avatarContainer) {
                    if (cResult[17] === tmp29) {
                      let tmp32 = cResult[18];
                    }
                    return tmp32;
                  }
                  const obj3 = { style: tmp5.avatarContainer, children: tmp29 };
                  const tmp35 = React4(View, obj3);
                  cResult[16] = tmp5.avatarContainer;
                  cResult[17] = tmp29;
                  cResult[18] = tmp35;
                  tmp32 = tmp35;
                }
                const obj4 = {
                  onPress: onSelectAvatar,
                  accessibilityRole: "button",
                  accessibilityLabel: first,
                  children: tmp25,
                };
                const tmp31 = React4(Pressables.PressableOpacity, obj4);
                cResult[13] = onSelectAvatar;
                cResult[14] = tmp25;
                cResult[15] = tmp31;
                tmp29 = tmp31;
              }
            }
            const obj5 = { style: tmp5.avatarWrapper, children: null };
            const items = [tmp13, tmp21];
            obj5.children = items;
            const tmp28 = hasOwnProperty(View, obj5);
            cResult[9] = tmp5.avatarWrapper;
            cResult[10] = tmp13;
            cResult[11] = tmp21;
            cResult[12] = tmp28;
            tmp25 = tmp28;
          }
          const obj6 = { style: tmp5.uploadAvatarWrapper, children: tmp17 };
          const tmp24 = React4(View, obj6);
          cResult[6] = tmp5.uploadAvatarWrapper;
          cResult[7] = tmp17;
          cResult[8] = tmp24;
          tmp21 = tmp24;
        }
        const obj7 = { resizeMode: "contain", style: defaultLogoStyle, source: tmp7 };
        const tmp16 = React4(FastImageDefault, obj7);
        cResult[1] = tmp7;
        cResult[2] = defaultLogoStyle;
        cResult[3] = tmp16;
        tmp13 = tmp16;
      }
      defaultLogoStyle = tmp5.defaultLogoStyle;
    }
  : (onSelectAvatar) => {
      ({ avatarSource, showPendingAvatar } = onSelectAvatar);
      if (showPendingAvatar === undefined) {
        showPendingAvatar = false;
      }
      const tmp = closure_6();
      if (!showPendingAvatar) {
        let tmp3 = _modDef13691;
      } else {
        tmp3 = avatarSource;
      }
      if (showPendingAvatar) {
        if (null != avatarSource) {
          let defaultLogoStyle = tmp.uploadedAvatarStyle;
        }
        const obj = { style: tmp.avatarContainer, children: null };
        const obj2 = {
          onPress: onSelectAvatar.onSelectAvatar,
          accessibilityRole: "button",
          accessibilityLabel: null,
          children: null,
        };
        const intl = util.intl;
        obj2.accessibilityLabel = intl.string(util.t["70lEQe"]);
        const obj3 = { style: tmp.avatarWrapper, children: null };
        const obj4 = { resizeMode: "contain", style: defaultLogoStyle, source: tmp3 };
        const items = [React4(FastImageDefault, obj4)];
        const obj5 = { style: tmp.uploadAvatarWrapper, children: null };
        const obj6 = { size: native.Icon.Sizes.MEDIUM, source: _modDef12457, style: tmp.uploadAvatarIcon };
        obj5.children = React4(native.Icon, obj6);
        items[1] = React4(View, obj5);
        obj3.children = items;
        obj2.children = hasOwnProperty(View, obj3);
        obj.children = React4(Pressables.PressableOpacity, obj2);
        return React4(View, obj);
      }
      defaultLogoStyle = tmp.defaultLogoStyle;
    };
