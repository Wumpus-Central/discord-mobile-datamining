// discord_app/modules/parent_tools/native/FamilyCenterActivityItemPreview.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import utils from "../../collectibles/nameplates/utils.tsx";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import useMaybeFetchProfileFrameDefault from "../../collectibles/profile_frames/hooks/useMaybeFetchProfileFrame.tsx";
import NameplateUtils from "../../collectibles/nameplates/native/NameplateUtils.tsx";
import ProfileFrameSamplePreviewDefault from "../../collectibles/profile_frames/native/previews/ProfileFrameSamplePreview.tsx";
import NitroWheelIcon2 from "../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import BoostGemIcon from "../../../design/components/Icon/native/redesign/generated/BoostGemIcon.tsx";
import ShopIcon from "../../../design/components/Icon/native/redesign/generated/ShopIcon.tsx";
import FamilyCenterActivityPurchaseRowUtils from "../FamilyCenterActivityPurchaseRowUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
let closure_4 = fn(8347).PROFILE_FRAME_ASPECT_RATIO;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = {
  purchasePlaceholder: null,
  avatarDecorationPreview: null,
  nameplateContainer: null,
  nameplatePreview: null,
  profileFrameContainer: null,
};
let size = {
  width: fn(15158).PREVIEW_SIZE,
  height: fn(15158).PREVIEW_SIZE,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: 12,
};
obj2.purchasePlaceholder = size;
const size1 = { width: fn(15158).PREVIEW_SIZE, height: fn(15158).PREVIEW_SIZE, marginRight: 12 };
obj2.avatarDecorationPreview = size1;
const size2 = {
  width: fn(15158).PREVIEW_SIZE,
  height: fn(15158).PREVIEW_SIZE,
  marginRight: 12,
  borderRadius: nativeDefault.radii.xs,
  overflow: "hidden",
  position: "relative",
};
obj2.nameplateContainer = size2;
const size3 = {
  position: "absolute",
  right: 0,
  width: fn(15158).PREVIEW_SIZE * fn(15158).NAMEPLATE_ASPECT_RATIO,
  height: fn(15158).PREVIEW_SIZE,
};
obj2.nameplatePreview = size3;
const size4 = {
  width: fn(15158).PREVIEW_SIZE,
  height: fn(15158).PREVIEW_SIZE,
  marginRight: 12,
  alignItems: "center",
  justifyContent: "center",
};
obj2.profileFrameContainer = size4;
let closure_6 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AvatarDecorationPreviewImage(arg0) {
      let tmp2 = dependencyMap;
      const cResult = c.c(7);
      ({ product, styles } = arg0);
      if (cResult[0] !== product) {
        const avatarDecorationPreviewUrl = FamilyCenterActivityPurchaseRowUtils.getAvatarDecorationPreviewUrl(product);
        cResult[0] = product;
        cResult[1] = avatarDecorationPreviewUrl;
        let tmp4 = avatarDecorationPreviewUrl;
        const tmpResult = FamilyCenterActivityPurchaseRowUtils;
      } else {
        tmp4 = cResult[1];
      }
      if (null == tmp4) {
        return null;
      } else {
        if (cResult[2] !== tmp4) {
          const obj2 = { uri: tmp4 };
          cResult[2] = tmp4;
          cResult[3] = obj2;
          let tmp6 = obj2;
        } else {
          tmp6 = cResult[3];
        }
        if (cResult[4] === styles.avatarDecorationPreview) {
        }
        const obj3 = { source: tmp6, style: styles.avatarDecorationPreview, fadeDuration: 0 };
        tmp2 = jsx(FastImageDefault, { source: tmp6, style: styles.avatarDecorationPreview, fadeDuration: 0 });
        styles = styles.avatarDecorationPreview;
        cResult[4] = styles;
        cResult[5] = tmp6;
        cResult[6] = tmp2;
      }
    }
  : function AvatarDecorationPreviewImage(arg0) {
      ({ product, styles } = arg0);
      const avatarDecorationPreviewUrl = FamilyCenterActivityPurchaseRowUtils.getAvatarDecorationPreviewUrl(product);
      let tmp3 = null;
      if (null != avatarDecorationPreviewUrl) {
        const obj2 = { source: null, style: null, fadeDuration: 0 };
        const obj3 = { uri: avatarDecorationPreviewUrl };
        obj2.source = obj3;
        obj2.style = styles.avatarDecorationPreview;
        tmp3 = jsx(FastImageDefault, { source: null, style: null, fadeDuration: 0 });
      }
      return tmp3;
    };
ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function NameplatePreviewImage(arg0) {
      const cResult = c.c(10);
      ({ nameplateData, styles } = arg0);
      if (cResult[0] !== nameplateData) {
        const nameplateAssets = NameplateUtils.getNameplateAssets(nameplateData);
        cResult[0] = nameplateData;
        cResult[1] = nameplateAssets;
        let tmp4 = nameplateAssets;
        const tmpResult = NameplateUtils;
      } else {
        tmp4 = cResult[1];
      }
      const staticImageUrl = tmp4.staticImageUrl;
      if (null == staticImageUrl) {
        return null;
      } else {
        if (cResult[2] !== staticImageUrl) {
          const obj2 = { uri: staticImageUrl };
          cResult[2] = staticImageUrl;
          cResult[3] = obj2;
          let tmp6 = obj2;
        } else {
          tmp6 = cResult[3];
        }
        if (cResult[4] === styles.nameplatePreview) {
          if (cResult[5] === tmp6) {
            let tmp7 = cResult[6];
          }
          if (cResult[7] === styles.nameplateContainer) {
          }
          const obj3 = { style: styles.nameplateContainer, children: tmp7 };
          const tmp14 = <View style={styles.nameplateContainer}>{tmp7}</View>;
          styles = styles.nameplateContainer;
          cResult[7] = styles;
          cResult[8] = tmp7;
          cResult[9] = tmp14;
        }
        const obj4 = { source: tmp6, style: styles.nameplatePreview, resizeMode: "cover", fadeDuration: 0 };
        const tmp10 = jsx(FastImageDefault, {
          source: tmp6,
          style: styles.nameplatePreview,
          resizeMode: "cover",
          fadeDuration: 0,
        });
        cResult[4] = styles.nameplatePreview;
        cResult[5] = tmp6;
        cResult[6] = tmp10;
        tmp7 = tmp10;
      }
    }
  : function NameplatePreviewImage(styles) {
      styles = styles.styles;
      const staticImageUrl = NameplateUtils.getNameplateAssets(styles.nameplateData).staticImageUrl;
      let tmp2 = null;
      if (null != staticImageUrl) {
        const obj2 = { style: styles.nameplateContainer, children: null };
        const obj3 = { source: null, style: null, resizeMode: "cover", fadeDuration: 0 };
        const obj4 = { uri: staticImageUrl };
        obj3.source = obj4;
        obj3.style = styles.nameplatePreview;
        obj2.children = jsx(FastImageDefault, { source: null, style: null, resizeMode: "cover", fadeDuration: 0 });
        tmp2 = <View style={styles.nameplateContainer}>{null}</View>;
      }
      return tmp2;
    };
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ProfileEffectPreviewImage(arg0) {
      let tmp2 = dependencyMap;
      const cResult = c.c(7);
      ({ product, styles } = arg0);
      if (cResult[0] !== product) {
        const profileEffectPreviewUrl = FamilyCenterActivityPurchaseRowUtils.getProfileEffectPreviewUrl(product);
        cResult[0] = product;
        cResult[1] = profileEffectPreviewUrl;
        let tmp4 = profileEffectPreviewUrl;
        const tmpResult = FamilyCenterActivityPurchaseRowUtils;
      } else {
        tmp4 = cResult[1];
      }
      if (null == tmp4) {
        return null;
      } else {
        if (cResult[2] !== tmp4) {
          const obj2 = { uri: tmp4 };
          cResult[2] = tmp4;
          cResult[3] = obj2;
          let tmp6 = obj2;
        } else {
          tmp6 = cResult[3];
        }
        if (cResult[4] === styles.avatarDecorationPreview) {
        }
        const obj3 = { source: tmp6, style: styles.avatarDecorationPreview, fadeDuration: 0 };
        tmp2 = jsx(FastImageDefault, { source: tmp6, style: styles.avatarDecorationPreview, fadeDuration: 0 });
        styles = styles.avatarDecorationPreview;
        cResult[4] = styles;
        cResult[5] = tmp6;
        cResult[6] = tmp2;
      }
    }
  : function ProfileEffectPreviewImage(arg0) {
      ({ product, styles } = arg0);
      const profileEffectPreviewUrl = FamilyCenterActivityPurchaseRowUtils.getProfileEffectPreviewUrl(product);
      let tmp3 = null;
      if (null != profileEffectPreviewUrl) {
        const obj2 = { source: null, style: null, fadeDuration: 0 };
        const obj3 = { uri: profileEffectPreviewUrl };
        obj2.source = obj3;
        obj2.style = styles.avatarDecorationPreview;
        tmp3 = jsx(FastImageDefault, { source: null, style: null, fadeDuration: 0 });
      }
      return tmp3;
    };
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ProfileFramePreviewImage(styles) {
      const cResult = c.c(5);
      let profileFrameContainer = styles.styles;
      const tmp5 = useMaybeFetchProfileFrameDefault(styles.product.skuId);
      if (null == tmp5) {
        return null;
      } else {
        if (cResult[0] !== tmp5) {
          const obj2 = {
            profileFrame: tmp5,
            previewWidth: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE * closure_4,
            previewHeight: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE,
            profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
          };
          const tmp10 = jsx(ProfileFrameSamplePreviewDefault, {
            profileFrame: tmp5,
            previewWidth: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE * closure_4,
            previewHeight: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE,
            profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
          });
          cResult[0] = tmp5;
          cResult[1] = tmp10;
          let tmp6 = tmp10;
          const tmp4Result = ProfileFrameSamplePreviewDefault;
        } else {
          tmp6 = cResult[1];
        }
        if (cResult[2] === profileFrameContainer.profileFrameContainer) {
        }
        const obj3 = { style: profileFrameContainer.profileFrameContainer, children: tmp6 };
        const tmp14 = <View style={profileFrameContainer.profileFrameContainer}>{tmp6}</View>;
        profileFrameContainer = profileFrameContainer.profileFrameContainer;
        cResult[2] = profileFrameContainer;
        cResult[3] = tmp6;
        cResult[4] = tmp14;
      }
    }
  : function ProfileFramePreviewImage(arg0) {
      ({ product, styles } = arg0);
      const tmp3 = useMaybeFetchProfileFrameDefault(product.skuId);
      let tmp4 = null;
      if (null != tmp3) {
        const obj = { style: styles.profileFrameContainer, children: null };
        const obj2 = {
          profileFrame: tmp3,
          previewWidth: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE * closure_4,
          previewHeight: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE,
          profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
        };
        obj.children = jsx(ProfileFrameSamplePreviewDefault, {
          profileFrame: tmp3,
          previewWidth: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE * closure_4,
          previewHeight: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE,
          profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
        });
        tmp4 = <View style={styles.profileFrameContainer}>{null}</View>;
        const tmpResult = ProfileFrameSamplePreviewDefault;
      }
      return tmp4;
    };
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SubscriptionPreview(arg0) {
      const cResult = c.c(10);
      ({ subscriptionPlanId, styles } = arg0);
      if (null == subscriptionPlanId) {
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { size: "custom", style: { width: 20, height: 20 } };
          const tmp17 = jsx(ShopIcon.ShopIcon, { size: "custom", style: { width: 20, height: 20 } });
          cResult[0] = tmp17;
          let first = tmp17;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== styles.purchasePlaceholder) {
          const obj3 = { style: styles.purchasePlaceholder, children: first };
          const tmp21 = <View style={styles.purchasePlaceholder}>{first}</View>;
          cResult[1] = styles.purchasePlaceholder;
          cResult[2] = tmp21;
          let tmp18 = tmp21;
        } else {
          tmp18 = cResult[2];
        }
        return tmp18;
      } else {
        if (cResult[3] !== subscriptionPlanId) {
          const result = FamilyCenterActivityPurchaseRowUtils.isGuildBoostSubscription(subscriptionPlanId);
          cResult[3] = subscriptionPlanId;
          cResult[4] = result;
          let tmp4 = result;
          const tmpResult = FamilyCenterActivityPurchaseRowUtils;
        } else {
          tmp4 = cResult[4];
        }
        if (cResult[5] !== tmp4) {
          if (tmp4) {
            let NitroWheelIcon = BoostGemIcon.BoostGemIcon;
          } else {
            NitroWheelIcon = NitroWheelIcon2.NitroWheelIcon;
          }
          const obj4 = { size: "custom", style: { width: 20, height: 20 } };
          const tmp7Result = <NitroWheelIcon size="custom" style={{ width: 20, height: 20 }} />;
          cResult[5] = tmp4;
          cResult[6] = tmp7Result;
        } else {
          if (cResult[7] === styles.purchasePlaceholder) {
            if (cResult[8] === tmp6) {
              let tmp10 = cResult[9];
            }
            return tmp10;
          }
          const obj5 = { style: styles.purchasePlaceholder, children: cResult[6] };
          const tmp13 = <View style={styles.purchasePlaceholder}>{cResult[6]}</View>;
          cResult[7] = styles.purchasePlaceholder;
          cResult[8] = cResult[6];
          cResult[9] = tmp13;
          tmp10 = tmp13;
        }
      }
    }
  : function SubscriptionPreview(arg0) {
      ({ subscriptionPlanId, styles } = arg0);
      if (null == subscriptionPlanId) {
        const obj2 = { style: styles.purchasePlaceholder, children: null };
        const obj3 = { size: "custom", style: { width: 20, height: 20 } };
        obj2.children = jsx(ShopIcon.ShopIcon, { size: "custom", style: { width: 20, height: 20 } });
        return <View style={styles.purchasePlaceholder}>{null}</View>;
      } else {
        const obj5 = { style: styles.purchasePlaceholder, children: null };
        if (obj4.isGuildBoostSubscription(subscriptionPlanId)) {
          let NitroWheelIcon = BoostGemIcon.BoostGemIcon;
        } else {
          NitroWheelIcon = NitroWheelIcon2.NitroWheelIcon;
        }
        const obj = { size: "custom", style: { width: 20, height: 20 } };
        obj5.children = <NitroWheelIcon size="custom" style={{ width: 20, height: 20 }} />;
        return <View style={styles.purchasePlaceholder}>{null}</View>;
      }
    };
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function CollectiblePreview(arg0) {
      const cResult = c.c(20);
      ({ product, styles } = arg0);
      if (null == product) {
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { size: "custom", style: { width: 20, height: 20 } };
          const tmp32 = jsx(ShopIcon.ShopIcon, { size: "custom", style: { width: 20, height: 20 } });
          cResult[0] = tmp32;
          let first = tmp32;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== styles.purchasePlaceholder) {
          const obj3 = { style: styles.purchasePlaceholder, children: first };
          const tmp36 = <View style={styles.purchasePlaceholder}>{first}</View>;
          cResult[1] = styles.purchasePlaceholder;
          cResult[2] = tmp36;
          let tmp33 = tmp36;
        } else {
          tmp33 = cResult[2];
        }
        return tmp33;
      } else {
        const type = product.type;
        if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
          if (cResult[3] === product) {
            if (cResult[4] === styles) {
              let tmp25 = cResult[5];
            }
            return tmp25;
          }
          const obj4 = { product, styles };
          const tmp28 = <closure_7 product={product} styles={styles} />;
          cResult[3] = product;
          cResult[4] = styles;
          cResult[5] = tmp28;
          tmp25 = tmp28;
        } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
          if (cResult[6] !== product) {
            const nameplateDataFromProductRecord = utils.getNameplateDataFromProductRecord(product);
            cResult[6] = product;
            cResult[7] = nameplateDataFromProductRecord;
            let tmp19 = nameplateDataFromProductRecord;
            const tmpResult = utils;
          } else {
            tmp19 = cResult[7];
          }
          if (cResult[8] === tmp19) {
            if (cResult[9] === styles) {
              let tmp21 = cResult[10];
            }
            return tmp21;
          }
          let tmp22 = null;
          if (null != tmp19) {
            const obj5 = { nameplateData: tmp19, styles };
            tmp22 = <closure_8 nameplateData={tmp19} styles={styles} />;
          }
          cResult[8] = tmp19;
          cResult[9] = styles;
          cResult[10] = tmp22;
          tmp21 = tmp22;
        } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
          if (cResult[11] === product) {
            if (cResult[12] === styles) {
              let tmp15 = cResult[13];
            }
            return tmp15;
          }
          const obj6 = { product, styles };
          const tmp18 = <closure_9 product={product} styles={styles} />;
          cResult[11] = product;
          cResult[12] = styles;
          cResult[13] = tmp18;
          tmp15 = tmp18;
        } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
          if (cResult[14] === product) {
            if (cResult[15] === styles) {
              let tmp11 = cResult[16];
            }
            return tmp11;
          }
          const obj7 = { product, styles };
          const tmp14 = <closure_10 product={product} styles={styles} />;
          cResult[14] = product;
          cResult[15] = styles;
          cResult[16] = tmp14;
          tmp11 = tmp14;
        } else {
          const _Symbol2 = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            const obj8 = { size: "custom", style: { width: 20, height: 20 } };
            const tmp6 = jsx(ShopIcon.ShopIcon, { size: "custom", style: { width: 20, height: 20 } });
            cResult[17] = tmp6;
            let tmp4 = tmp6;
          } else {
            tmp4 = cResult[17];
          }
          if (cResult[18] !== styles.purchasePlaceholder) {
            const obj9 = { style: styles.purchasePlaceholder, children: tmp4 };
            const tmp10 = <View style={styles.purchasePlaceholder}>{tmp4}</View>;
            cResult[18] = styles.purchasePlaceholder;
            cResult[19] = tmp10;
            let tmp7 = tmp10;
          } else {
            tmp7 = cResult[19];
          }
          return tmp7;
        }
      }
    }
  : function CollectiblePreview(arg0) {
      ({ product, styles } = arg0);
      if (null == product) {
        const obj2 = { style: styles.purchasePlaceholder, children: null };
        const obj3 = { size: "custom", style: { width: 20, height: 20 } };
        obj2.children = jsx(ShopIcon.ShopIcon, { size: "custom", style: { width: 20, height: 20 } });
        return <View style={styles.purchasePlaceholder}>{null}</View>;
      } else {
        const type = product.type;
        if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
          const obj4 = { product, styles };
          return <closure_7 product={product} styles={styles} />;
        } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
          const nameplateDataFromProductRecord = utils.getNameplateDataFromProductRecord(product);
          let tmp8 = null;
          if (null != nameplateDataFromProductRecord) {
            const obj5 = { nameplateData: nameplateDataFromProductRecord, styles };
            tmp8 = <closure_8 nameplateData={nameplateDataFromProductRecord} styles={styles} />;
          }
          return tmp8;
        } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
          const obj6 = { product, styles };
          return <closure_9 product={product} styles={styles} />;
        } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
          const obj7 = { product, styles };
          return <closure_10 product={product} styles={styles} />;
        } else {
          const obj = { style: styles.purchasePlaceholder, children: null };
          const obj8 = { size: "custom", style: { width: 20, height: 20 } };
          obj.children = jsx(ShopIcon.ShopIcon, { size: "custom", style: { width: 20, height: 20 } });
          return <View style={styles.purchasePlaceholder}>{null}</View>;
        }
      }
    };
ReactCompilerGating = fn(558);
size = fn(2);
let result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityItemPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FamilyCenterActivityItemPreview(arg0) {
      const cResult = c.c(8);
      ({ displayName, product, isSubscription, subscriptionPlanId } = arg0);
      const tmp2 = closure_6();
      if (cResult[0] === isSubscription) {
        if (cResult[1] === product) {
          if (cResult[2] === tmp2) {
            if (cResult[3] === subscriptionPlanId) {
              if (cResult[5] === displayName) {
                if (cResult[6] === tmp3) {
                  let tmp8 = cResult[7];
                }
                return tmp8;
              }
              const obj2 = { accessible: true, accessibilityLabel: displayName, children: cResult[4] };
              const tmp11 = (
                <View accessible accessibilityLabel={displayName}>
                  {cResult[4]}
                </View>
              );
              cResult[5] = displayName;
              cResult[6] = cResult[4];
              cResult[7] = tmp11;
              tmp8 = tmp11;
            }
          }
        }
      }
      if (isSubscription) {
        const obj3 = { subscriptionPlanId, styles: tmp2 };
        let tmp4Result = <closure_11 subscriptionPlanId={subscriptionPlanId} styles={tmp2} />;
      } else {
        const obj4 = { product, styles: tmp2 };
        tmp4Result = <closure_12 product={product} styles={tmp2} />;
      }
      cResult[0] = isSubscription;
      cResult[1] = product;
      cResult[2] = tmp2;
      cResult[3] = subscriptionPlanId;
      cResult[4] = tmp4Result;
    }
  : function FamilyCenterActivityItemPreview(arg0) {
      ({ displayName, product, isSubscription, subscriptionPlanId } = arg0);
      const tmp = closure_6();
      const obj = { accessible: true, accessibilityLabel: displayName, children: null };
      if (isSubscription) {
        const obj2 = { subscriptionPlanId, styles: tmp };
        let tmp2Result = <closure_11 subscriptionPlanId={subscriptionPlanId} styles={tmp} />;
      } else {
        const obj3 = { product, styles: tmp };
        tmp2Result = <closure_12 product={product} styles={tmp} />;
      }
      obj.children = tmp2Result;
      return (
        <View accessible accessibilityLabel={displayName}>
          {null}
        </View>
      );
    };
