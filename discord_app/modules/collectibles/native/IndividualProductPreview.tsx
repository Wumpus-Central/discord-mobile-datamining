// discord_app/modules/collectibles/native/IndividualProductPreview.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import FractionalPremiumSKUs from "../../../../discord_common/js/shared/shared-constants/FractionalPremiumSKUs.tsx";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import LinearGradientDefault from "../../../../_runtime/05605_LinearGradient.js";
import useCurrentUser from "../hooks/useCurrentUser.tsx";
import ProfileEffectUserPreviewDefault from "../profile_effects/native/previews/ProfileEffectUserPreview.tsx";
import ProfileFrameUserPreviewDefault from "../profile_frames/native/previews/ProfileFrameUserPreview.tsx";
import AvatarDecorationProductPreviewDefault from "AvatarDecorationProductPreview.tsx";
import NameplateProductPreviewDefault from "../nameplates/native/NameplateProductPreview.tsx";
import FractionalNitroPreview from "FractionalNitroPreview.tsx";
import OrbBadgePreview from "OrbBadgePreview.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import CollectiblesShopConstants from "../CollectiblesShopConstants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let StyleSheet;
let c3;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
({ Pressable: c3, View: closure_4, StyleSheet } = react_native);
({ EXTERNAL_PRODUCT_SKU_IDS: hasOwnProperty, ShopCtaEnum: metroRequire } = CollectiblesShopConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  collectiblePreview: obj2,
  profilePreviewContainer: { position: "relative", flex: 1, alignItems: "center", overflow: "hidden" },
  profilePreview: { width: "66%" },
  profilePreviewGradient: obj3,
};
obj2 = { marginTop: nativeDefault.space.PX_12, position: "relative", height: 280 };
createStyles = createStyles.createStyles;
obj3 = { bottom: -1, pointerEvents: "none", color: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_9 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (handlePreviewPress) => {
      let items;
      const obj = handlePreviewPress(576);
      const cResult = obj.c(19);
      handlePreviewPress = handlePreviewPress.handlePreviewPress;
      const onTrackPress = handlePreviewPress.onTrackPress;
      const children = handlePreviewPress.children;
      const tmp3 = closure_9();
      if (cResult[0] === handlePreviewPress) {
        let tmp4;
        let tmp7;
        let tmp6;
        if (cResult[1] === onTrackPress) {
          tmp4 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const point = { x: 0, y: 0.6 };
          const point1 = { x: 0, y: 1 };
          cResult[3] = point;
          cResult[4] = point1;
          tmp7 = point1;
          tmp6 = point;
        } else {
          tmp6 = cResult[3];
          tmp7 = cResult[4];
        }
        const _HermesInternal = HermesInternal;
        const combined = "" + tmp3.profilePreviewGradient.color + "00";
        if (cResult[5] === tmp3.profilePreviewGradient.color) {
          let tmp9;
          if (cResult[6] === combined) {
            tmp9 = cResult[7];
          }
          if (cResult[8] === tmp3.profilePreviewGradient) {
            let tmp10;
            if (cResult[9] === tmp9) {
              tmp10 = cResult[10];
            }
            if (cResult[11] === children) {
              if (cResult[12] === tmp3.profilePreviewContainer) {
                let tmp14;
                if (cResult[13] === tmp10) {
                  tmp14 = cResult[14];
                }
                if (cResult[15] === tmp3.collectiblePreview) {
                  if (cResult[16] === tmp4) {
                    let tmp18;
                    if (cResult[17] === tmp14) {
                      tmp18 = cResult[18];
                    }
                    return tmp18;
                  }
                }
                const obj2 = { onPress: tmp4, style: tmp3.collectiblePreview, children: tmp14 };
                const tmp21 = closure_7(closure_3, obj2);
                cResult[15] = tmp3.collectiblePreview;
                cResult[16] = tmp4;
                cResult[17] = tmp14;
                cResult[18] = tmp21;
                tmp18 = tmp21;
              }
            }
            const obj3 = { style: tmp3.profilePreviewContainer, children: items };
            items = [children, tmp10];
            const tmp17 = closure_8(closure_4, obj3);
            cResult[11] = children;
            cResult[12] = tmp3.profilePreviewContainer;
            cResult[13] = tmp10;
            cResult[14] = tmp17;
            tmp14 = tmp17;
          }
          const obj4 = { style: tmp3.profilePreviewGradient, start: tmp6, end: tmp7, colors: tmp9 };
          const tmp13 = closure_7(onTrackPress(5605), obj4);
          cResult[8] = tmp3.profilePreviewGradient;
          cResult[9] = tmp9;
          cResult[10] = tmp13;
          tmp10 = tmp13;
        }
        const items1 = [combined, tmp3.profilePreviewGradient.color];
        cResult[5] = tmp3.profilePreviewGradient.color;
        cResult[6] = combined;
        cResult[7] = items1;
        tmp9 = items1;
      }
      const fn = function l() {
        if (onTrackPress != null) {
          tmp(metroRequire.FULL_PROFILE_PREVIEW);
        }
        if (handlePreviewPress != null) {
          tmp4();
        }
      };
      cResult[0] = handlePreviewPress;
      cResult[1] = onTrackPress;
      cResult[2] = fn;
      tmp4 = fn;
    }
  : (children) => {
      let items;
      let items1;
      let obj2;
      ({ handlePreviewPress: require, onTrackPress: importDefault } = children);
      children = children.children;
      const tmp = closure_9();
      const obj = {
        onPress() {
          if (importDefault != null) {
            tmp(metroRequire.FULL_PROFILE_PREVIEW);
          }
          if (require != null) {
            tmp4();
          }
        },
        style: tmp.collectiblePreview,
        children: closure_8(closure_4, obj2),
      };
      obj2 = { style: tmp.profilePreviewContainer, children: items };
      items = [children];
      const obj3 = { style: tmp.profilePreviewGradient, start: { x: 0, y: 0.6 }, end: { x: 0, y: 1 }, colors: items1 };
      items1 = [,];
      const tmp2 = LinearGradientDefault;
      items1[0] = "" + tmp.profilePreviewGradient.color + "00";
      items1[1] = tmp.profilePreviewGradient.color;
      items[1] = closure_7(tmp2, obj3);
      return closure_7(closure_3, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let avatarDecorationOverride;
      let handlePreviewPress;
      let onTrackPress;
      let profileEffect;
      let profileFrameOverride;
      let width;
      const obj = react2;
      const cResult = obj.c(11);
      ({ profileEffect, width, avatarDecorationOverride, profileFrameOverride, handlePreviewPress, onTrackPress } =
        arg0);
      const tmp3 = closure_9();
      const obj2 = useCurrentUser;
      const currentUser = obj2.useCurrentUser();
      if (cResult[0] === avatarDecorationOverride) {
        if (cResult[1] === profileEffect) {
          if (cResult[2] === profileFrameOverride) {
            if (cResult[3] === tmp3.profilePreview) {
              if (cResult[4] === currentUser) {
                let tmp5;
                if (cResult[5] === width) {
                  tmp5 = cResult[6];
                }
                if (cResult[7] === handlePreviewPress) {
                  if (cResult[8] === onTrackPress) {
                    let tmp7;
                    if (cResult[9] === tmp5) {
                      tmp7 = cResult[10];
                    }
                    return tmp7;
                  }
                }
                const obj3 = { handlePreviewPress, onTrackPress, children: tmp5 };
                const tmp10 = metroImportDefault(closure_10, obj3);
                cResult[7] = handlePreviewPress;
                cResult[8] = onTrackPress;
                cResult[9] = tmp5;
                cResult[10] = tmp10;
                tmp7 = tmp10;
              }
            }
          }
        }
      }
      const obj4 = {
        user: currentUser,
        profileEffect,
        avatarDecorationOverride,
        profileFrameOverride,
        maxWidth: width,
        style: tmp3.profilePreview,
      };
      const tmp6 = metroImportDefault(ProfileEffectUserPreviewDefault, obj4);
      cResult[0] = avatarDecorationOverride;
      cResult[1] = profileEffect;
      cResult[2] = profileFrameOverride;
      cResult[3] = tmp3.profilePreview;
      cResult[4] = currentUser;
      cResult[5] = width;
      cResult[6] = tmp6;
      tmp5 = tmp6;
    }
  : (arg0) => {
      let avatarDecorationOverride;
      let handlePreviewPress;
      let obj3;
      let onTrackPress;
      let profileEffect;
      let profileFrameOverride;
      let width;
      ({ profileEffect, width, avatarDecorationOverride, profileFrameOverride, handlePreviewPress, onTrackPress } =
        arg0);
      const tmp = closure_9();
      const obj2 = {
        handlePreviewPress,
        onTrackPress,
        children: metroImportDefault(ProfileEffectUserPreviewDefault, obj3),
      };
      const obj = useCurrentUser;
      const currentUser = obj.useCurrentUser();
      obj3 = {
        user: currentUser,
        profileEffect,
        avatarDecorationOverride,
        profileFrameOverride,
        maxWidth: width,
        style: tmp.profilePreview,
      };
      return metroImportDefault(closure_10, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let avatarDecorationOverride;
      let handlePreviewPress;
      let onTrackPress;
      let profileEffectOverride;
      let profileFrame;
      let width;
      const obj = react2;
      const cResult = obj.c(11);
      ({ profileFrame, width, avatarDecorationOverride, profileEffectOverride, handlePreviewPress, onTrackPress } =
        arg0);
      const tmp3 = closure_9();
      const obj2 = useCurrentUser;
      const currentUser = obj2.useCurrentUser();
      if (cResult[0] === avatarDecorationOverride) {
        if (cResult[1] === profileEffectOverride) {
          if (cResult[2] === profileFrame) {
            if (cResult[3] === tmp3.profilePreview) {
              if (cResult[4] === currentUser) {
                let tmp5;
                if (cResult[5] === width) {
                  tmp5 = cResult[6];
                }
                if (cResult[7] === handlePreviewPress) {
                  if (cResult[8] === onTrackPress) {
                    let tmp7;
                    if (cResult[9] === tmp5) {
                      tmp7 = cResult[10];
                    }
                    return tmp7;
                  }
                }
                const obj3 = { handlePreviewPress, onTrackPress, children: tmp5 };
                const tmp10 = metroImportDefault(closure_10, obj3);
                cResult[7] = handlePreviewPress;
                cResult[8] = onTrackPress;
                cResult[9] = tmp5;
                cResult[10] = tmp10;
                tmp7 = tmp10;
              }
            }
          }
        }
      }
      const obj4 = {
        profileFrame,
        user: currentUser,
        avatarDecorationOverride,
        profileEffectOverride,
        maxWidth: width,
        style: tmp3.profilePreview,
      };
      const tmp6 = metroImportDefault(ProfileFrameUserPreviewDefault, obj4);
      cResult[0] = avatarDecorationOverride;
      cResult[1] = profileEffectOverride;
      cResult[2] = profileFrame;
      cResult[3] = tmp3.profilePreview;
      cResult[4] = currentUser;
      cResult[5] = width;
      cResult[6] = tmp6;
      tmp5 = tmp6;
    }
  : (arg0) => {
      let avatarDecorationOverride;
      let handlePreviewPress;
      let obj3;
      let onTrackPress;
      let profileEffectOverride;
      let profileFrame;
      let width;
      ({ profileFrame, width, avatarDecorationOverride, profileEffectOverride, handlePreviewPress, onTrackPress } =
        arg0);
      const tmp = closure_9();
      const obj2 = {
        handlePreviewPress,
        onTrackPress,
        children: metroImportDefault(ProfileFrameUserPreviewDefault, obj3),
      };
      const obj = useCurrentUser;
      const currentUser = obj.useCurrentUser();
      obj3 = {
        profileFrame,
        user: currentUser,
        avatarDecorationOverride,
        profileEffectOverride,
        maxWidth: width,
        style: tmp.profilePreview,
      };
      return metroImportDefault(closure_10, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onTrackPress) => {
      let handlePreviewPress;
      let product;
      const obj = handlePreviewPress(576);
      const cResult = obj.c(9);
      ({ product, handlePreviewPress } = onTrackPress);
      onTrackPress = onTrackPress.onTrackPress;
      const tmp3 = closure_9();
      if (cResult[0] === handlePreviewPress) {
        let tmp4;
        let tmp5;
        if (cResult[1] === onTrackPress) {
          tmp4 = cResult[2];
        }
        if (cResult[3] !== product) {
          const obj2 = { product };
          const tmp8 = closure_7(onTrackPress(12972), obj2);
          cResult[3] = product;
          cResult[4] = tmp8;
          tmp5 = tmp8;
        } else {
          tmp5 = cResult[4];
        }
        if (cResult[5] === tmp3.collectiblePreview) {
          if (cResult[6] === tmp4) {
            let tmp9;
            if (cResult[7] === tmp5) {
              tmp9 = cResult[8];
            }
            return tmp9;
          }
        }
        const obj3 = { onPress: tmp4, style: tmp3.collectiblePreview, children: tmp5 };
        const tmp12 = closure_7(closure_3, obj3);
        cResult[5] = tmp3.collectiblePreview;
        cResult[6] = tmp4;
        cResult[7] = tmp5;
        cResult[8] = tmp12;
        tmp9 = tmp12;
      }
      const fn = function l() {
        if (onTrackPress != null) {
          tmp(metroRequire.FULL_PROFILE_PREVIEW);
        }
        if (handlePreviewPress != null) {
          tmp4();
        }
      };
      cResult[0] = handlePreviewPress;
      cResult[1] = onTrackPress;
      cResult[2] = fn;
      tmp4 = fn;
    }
  : (product) => {
      ({ handlePreviewPress: require, onTrackPress: importDefault } = product);
      product = product.product;
      const obj = {
        onPress() {
          if (importDefault != null) {
            tmp(metroRequire.FULL_PROFILE_PREVIEW);
          }
          if (require != null) {
            tmp4();
          }
        },
        style: closure_9().collectiblePreview,
        children: closure_7(AvatarDecorationProductPreviewDefault, { product }),
      };
      return closure_7(closure_3, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let avatarDecorationOverride;
      let product;
      const obj = react2;
      const cResult = obj.c(6);
      ({ product, avatarDecorationOverride } = arg0);
      const tmp3 = closure_9();
      if (cResult[0] === avatarDecorationOverride) {
        let tmp4;
        if (cResult[1] === product) {
          tmp4 = cResult[2];
        }
        if (cResult[3] === tmp3.collectiblePreview) {
          let tmp6;
          if (cResult[4] === tmp4) {
            tmp6 = cResult[5];
          }
          return tmp6;
        }
        const obj2 = { style: tmp3.collectiblePreview, children: tmp4 };
        const tmp9 = metroImportDefault(React3, obj2);
        cResult[3] = tmp3.collectiblePreview;
        cResult[4] = tmp4;
        cResult[5] = tmp9;
        tmp6 = tmp9;
      }
      const tmp5 = metroImportDefault(NameplateProductPreviewDefault, { product, avatarDecorationOverride });
      cResult[0] = avatarDecorationOverride;
      cResult[1] = product;
      cResult[2] = tmp5;
      tmp4 = tmp5;
    }
  : (arg0) => {
      let avatarDecorationOverride;
      let product;
      ({ product, avatarDecorationOverride } = arg0);
      const obj = {
        style: closure_9().collectiblePreview,
        children: metroImportDefault(NameplateProductPreviewDefault, { product, avatarDecorationOverride }),
      };
      return metroImportDefault(React3, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let avatarDecorationOverride;
      let handlePreviewPress;
      let onTrackPress;
      let product;
      let profileEffectOverride;
      let profileFrameOverride;
      let width;
      const obj = react2;
      const cResult = obj.c(23);
      ({
        product,
        width,
        avatarDecorationOverride,
        profileFrameOverride,
        profileEffectOverride,
        handlePreviewPress,
        onTrackPress,
      } = arg0);
      const type = product.type;
      if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
        if (cResult[0] === avatarDecorationOverride) {
          let tmp29;
          if (cResult[1] === product) {
            tmp29 = cResult[2];
          }
          return tmp29;
        }
        const obj2 = { product, avatarDecorationOverride };
        const tmp32 = metroImportDefault(closure_14, obj2);
        cResult[0] = avatarDecorationOverride;
        cResult[1] = product;
        cResult[2] = tmp32;
        tmp29 = tmp32;
      } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
        const first = product.items[0];
        if (cResult[3] === avatarDecorationOverride) {
          if (cResult[4] === handlePreviewPress) {
            if (cResult[5] === onTrackPress) {
              if (cResult[6] === profileFrameOverride) {
                if (cResult[7] === first) {
                  let tmp25;
                  if (cResult[8] === width) {
                    tmp25 = cResult[9];
                  }
                  return tmp25;
                }
              }
            }
          }
        }
        const obj3 = {
          profileEffect: first,
          width,
          avatarDecorationOverride,
          profileFrameOverride,
          handlePreviewPress,
          onTrackPress,
        };
        const tmp28 = metroImportDefault(closure_11, obj3);
        cResult[3] = avatarDecorationOverride;
        cResult[4] = handlePreviewPress;
        cResult[5] = onTrackPress;
        cResult[6] = profileFrameOverride;
        cResult[7] = first;
        cResult[8] = width;
        cResult[9] = tmp28;
        tmp25 = tmp28;
      } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
        const first1 = product.items[0];
        if (cResult[10] === avatarDecorationOverride) {
          if (cResult[11] === handlePreviewPress) {
            if (cResult[12] === onTrackPress) {
              if (cResult[13] === profileEffectOverride) {
                if (cResult[14] === first1) {
                  let tmp20;
                  if (cResult[15] === width) {
                    tmp20 = cResult[16];
                  }
                  return tmp20;
                }
              }
            }
          }
        }
        const obj4 = {
          profileFrame: first1,
          width,
          avatarDecorationOverride,
          profileEffectOverride,
          handlePreviewPress,
          onTrackPress,
        };
        const tmp23 = metroImportDefault(closure_12, obj4);
        cResult[10] = avatarDecorationOverride;
        cResult[11] = handlePreviewPress;
        cResult[12] = onTrackPress;
        cResult[13] = profileEffectOverride;
        cResult[14] = first1;
        cResult[15] = width;
        cResult[16] = tmp23;
        tmp20 = tmp23;
      } else if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
        if (cResult[17] === handlePreviewPress) {
          if (cResult[18] === onTrackPress) {
            let tmp15;
            if (cResult[19] === product) {
              tmp15 = cResult[20];
            }
            return tmp15;
          }
        }
        const obj5 = { product, handlePreviewPress, onTrackPress };
        const tmp18 = metroImportDefault(closure_13, obj5);
        cResult[17] = handlePreviewPress;
        cResult[18] = onTrackPress;
        cResult[19] = product;
        cResult[20] = tmp18;
        tmp15 = tmp18;
      } else if (CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU === type) {
        let tmp6;
        const ALL = FractionalPremiumSKUs.FractionalPremiumSKUsSets.ALL;
        if (ALL.has(product.skuId)) {
          let tmp12;
          const _Symbol2 = Symbol;
          if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp14 = metroImportDefault(FractionalNitroPreview.FractionalNitroPreview, {});
            cResult[21] = tmp14;
            tmp12 = tmp14;
          } else {
            tmp12 = cResult[21];
          }
          tmp6 = tmp12;
        } else {
          tmp6 = null;
          if (product.skuId === hasOwnProperty.ORB_PROFILE_BADGE) {
            let tmp8;
            const _Symbol = Symbol;
            if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp10 = metroImportDefault(OrbBadgePreview.OrbBadgePreview, {});
              cResult[22] = tmp10;
              tmp8 = tmp10;
            } else {
              tmp8 = cResult[22];
            }
            tmp6 = tmp8;
          }
        }
        return tmp6;
      } else {
        return null;
      }
    }
  : (arg0) => {
      let avatarDecorationOverride;
      let handlePreviewPress;
      let onTrackPress;
      let product;
      let profileEffectOverride;
      let profileFrameOverride;
      let width;
      ({ product, width, avatarDecorationOverride, handlePreviewPress, onTrackPress } = arg0);
      const type = product.type;
      ({ profileFrameOverride, profileEffectOverride } = arg0);
      if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
        const obj2 = { product, avatarDecorationOverride };
        return metroImportDefault(closure_14, obj2);
      } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
        const obj3 = {
          profileEffect: product.items[0],
          width,
          avatarDecorationOverride,
          profileFrameOverride,
          handlePreviewPress,
          onTrackPress,
        };
        return metroImportDefault(closure_11, obj3);
      } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
        const obj4 = {
          profileFrame: product.items[0],
          width,
          avatarDecorationOverride,
          profileEffectOverride,
          handlePreviewPress,
          onTrackPress,
        };
        return metroImportDefault(closure_12, obj4);
      } else if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
        const obj = { product, handlePreviewPress, onTrackPress };
        return metroImportDefault(closure_13, obj);
      } else if (CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU === type) {
        let tmp5;
        const ALL = FractionalPremiumSKUs.FractionalPremiumSKUsSets.ALL;
        if (ALL.has(product.skuId)) {
          tmp5 = metroImportDefault(FractionalNitroPreview.FractionalNitroPreview, {});
        } else {
          tmp5 = null;
          if (product.skuId === hasOwnProperty.ORB_PROFILE_BADGE) {
            tmp5 = metroImportDefault(OrbBadgePreview.OrbBadgePreview, {});
          }
        }
        return tmp5;
      } else {
        return null;
      }
    };
const result = size.fileFinishedImporting("modules/collectibles/native/IndividualProductPreview.tsx");

export const IndividualProductPreview = tmp8;
