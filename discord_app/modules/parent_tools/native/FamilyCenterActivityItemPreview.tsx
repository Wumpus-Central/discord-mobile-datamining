// === Module 14711: FamilyCenterActivityItemPreview ===

// Module 14711 (FamilyCenterActivityItemPreview)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import utils from "utils" /* 1977 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1980 */;
import BoostGemIcon from "BoostGemIcon" /* 4826 */;
import useMaybeFetchProfileFrameDefault from "useMaybeFetchProfileFrame" /* 7872 */;
import ProfileFrameConstants from "ProfileFrameConstants" /* 7893 */;
import NitroWheelIcon2 from "NitroWheelIcon" /* 8313 */;
import NameplateUtils from "NameplateUtils" /* 8475 */;
import ProfileFrameSamplePreviewDefault from "ProfileFrameSamplePreview" /* 8478 */;
import ShopIcon from "ShopIcon" /* 11762 */;
import FamilyCenterActivityPurchaseRowUtils from "FamilyCenterActivityPurchaseRowUtils" /* 14710 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let size;
let size1;
let size2;
let size3;
let size4;
({ View: c3, Image: closure_4 } = react_native);
let closure_5 = ProfileFrameConstants.PROFILE_FRAME_ASPECT_RATIO;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { purchasePlaceholder: size, avatarDecorationPreview: size1, nameplateContainer: size2, nameplatePreview: size3, profileFrameContainer: size4 };
size = { width: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE, height: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 12 };
createStyles = createStyles.createStyles;
size1 = { width: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE, height: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE, marginRight: 12 };
size2 = { width: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE, height: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE, marginRight: 12, borderRadius: nativeDefault.radii.xs, overflow: "hidden", position: "relative" };
size3 = { position: "absolute", right: 0, width: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE * FamilyCenterActivityPurchaseRowUtils.NAMEPLATE_ASPECT_RATIO, height: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE };
size4 = { width: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE, height: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE, marginRight: 12, alignItems: "center", justifyContent: "center" };
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let product;
  let styles;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(7);
  ({ product, styles } = arg0);
  if (cResult[0] !== product) {
    const tmpResult = FamilyCenterActivityPurchaseRowUtils;
    const avatarDecorationPreviewUrl = tmpResult.getAvatarDecorationPreviewUrl(product);
    cResult[0] = product;
    cResult[1] = avatarDecorationPreviewUrl;
    tmp4 = avatarDecorationPreviewUrl;
  } else {
    tmp4 = cResult[1];
  }
  let tmp6 = null;
  if (null != tmp4) {
    let tmp7;
    if (cResult[2] !== tmp4) {
      const obj2 = { uri: tmp4 };
      cResult[2] = tmp4;
      cResult[3] = obj2;
      tmp7 = obj2;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] === styles.avatarDecorationPreview) {
      let tmp8;
      if (cResult[5] === tmp7) {
        tmp8 = cResult[6];
      }
      tmp6 = tmp8;
    }
    const tmp11 = <React3 source={tmp7} style={styles.avatarDecorationPreview} fadeDuration={0} />;
    cResult[4] = styles.avatarDecorationPreview;
    cResult[5] = tmp7;
    cResult[6] = tmp11;
    tmp8 = tmp11;
  }
  return tmp6;
}) : ((arg0) => {
  let product;
  let styles;
  ({ product, styles } = arg0);
  const obj = FamilyCenterActivityPurchaseRowUtils;
  const avatarDecorationPreviewUrl = obj.getAvatarDecorationPreviewUrl(product);
  let tmp2 = null;
  if (null != avatarDecorationPreviewUrl) {
    tmp2 = <React3 source={{ uri: avatarDecorationPreviewUrl }} style={styles.avatarDecorationPreview} fadeDuration={0} />;
    const obj3 = { uri: avatarDecorationPreviewUrl };
  }
  return tmp2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let nameplateData;
  let styles;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(10);
  ({ nameplateData, styles } = arg0);
  if (cResult[0] !== nameplateData) {
    const tmpResult = NameplateUtils;
    const nameplateAssets = tmpResult.getNameplateAssets(nameplateData);
    cResult[0] = nameplateData;
    cResult[1] = nameplateAssets;
    tmp4 = nameplateAssets;
  } else {
    tmp4 = cResult[1];
  }
  const staticImageUrl = tmp4.staticImageUrl;
  let tmp6 = null;
  if (null != staticImageUrl) {
    let tmp7;
    if (cResult[2] !== staticImageUrl) {
      const obj2 = { uri: staticImageUrl };
      cResult[2] = staticImageUrl;
      cResult[3] = obj2;
      tmp7 = obj2;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] === styles.nameplatePreview) {
      let tmp8;
      if (cResult[5] === tmp7) {
        tmp8 = cResult[6];
      }
      if (cResult[7] === styles.nameplateContainer) {
        let tmp12;
        if (cResult[8] === tmp8) {
          tmp12 = cResult[9];
        }
        tmp6 = tmp12;
      }
      const tmp15 = <_false style={styles.nameplateContainer}>{tmp8}</_false>;
      cResult[7] = styles.nameplateContainer;
      cResult[8] = tmp8;
      cResult[9] = tmp15;
      tmp12 = tmp15;
    }
    const tmp11 = <React3 source={tmp7} style={styles.nameplatePreview} resizeMode="cover" fadeDuration={0} />;
    cResult[4] = styles.nameplatePreview;
    cResult[5] = tmp7;
    cResult[6] = tmp11;
    tmp8 = tmp11;
  }
  return tmp6;
}) : ((styles) => {
  styles = styles.styles;
  const nameplateData = styles.nameplateData;
  const obj = NameplateUtils;
  const staticImageUrl = obj.getNameplateAssets(nameplateData).staticImageUrl;
  let tmp = null;
  if (null != staticImageUrl) {
    tmp = <_false style={styles.nameplateContainer}>{null}</_false>;
    const obj4 = { uri: staticImageUrl };
  }
  return tmp;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let product;
  let styles;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(7);
  ({ product, styles } = arg0);
  if (cResult[0] !== product) {
    const tmpResult = FamilyCenterActivityPurchaseRowUtils;
    const profileEffectPreviewUrl = tmpResult.getProfileEffectPreviewUrl(product);
    cResult[0] = product;
    cResult[1] = profileEffectPreviewUrl;
    tmp4 = profileEffectPreviewUrl;
  } else {
    tmp4 = cResult[1];
  }
  let tmp6 = null;
  if (null != tmp4) {
    let tmp7;
    if (cResult[2] !== tmp4) {
      const obj2 = { uri: tmp4 };
      cResult[2] = tmp4;
      cResult[3] = obj2;
      tmp7 = obj2;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] === styles.avatarDecorationPreview) {
      let tmp8;
      if (cResult[5] === tmp7) {
        tmp8 = cResult[6];
      }
      tmp6 = tmp8;
    }
    const tmp11 = <React3 source={tmp7} style={styles.avatarDecorationPreview} fadeDuration={0} />;
    cResult[4] = styles.avatarDecorationPreview;
    cResult[5] = tmp7;
    cResult[6] = tmp11;
    tmp8 = tmp11;
  }
  return tmp6;
}) : ((arg0) => {
  let product;
  let styles;
  ({ product, styles } = arg0);
  const obj = FamilyCenterActivityPurchaseRowUtils;
  const profileEffectPreviewUrl = obj.getProfileEffectPreviewUrl(product);
  let tmp2 = null;
  if (null != profileEffectPreviewUrl) {
    tmp2 = <React3 source={{ uri: profileEffectPreviewUrl }} style={styles.avatarDecorationPreview} fadeDuration={0} />;
    const obj3 = { uri: profileEffectPreviewUrl };
  }
  return tmp2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((styles) => {
  const obj = react2;
  const cResult = obj.c(5);
  styles = styles.styles;
  const tmp5 = useMaybeFetchProfileFrameDefault(styles.product.skuId);
  let tmp6 = null;
  if (null != tmp5) {
    let tmp7;
    if (cResult[0] !== tmp5) {
      ProfileFrameSamplePreviewDefault;
      const tmp11 = <tmp4Result profileFrame={tmp5} previewWidth={FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE * closure_5} previewHeight={FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE} profileBackgroundColor={nativeDefault.colors.BACKGROUND_BASE_LOW} />;
      cResult[0] = tmp5;
      cResult[1] = tmp11;
      tmp7 = tmp11;
    } else {
      tmp7 = cResult[1];
    }
    if (cResult[2] === styles.profileFrameContainer) {
      let tmp12;
      if (cResult[3] === tmp7) {
        tmp12 = cResult[4];
      }
      tmp6 = tmp12;
    }
    const tmp15 = <_false style={styles.profileFrameContainer}>{tmp7}</_false>;
    cResult[2] = styles.profileFrameContainer;
    cResult[3] = tmp7;
    cResult[4] = tmp15;
    tmp12 = tmp15;
  }
  return tmp6;
}) : ((arg0) => {
  let product;
  let styles;
  ({ product, styles } = arg0);
  const tmp3 = useMaybeFetchProfileFrameDefault(product.skuId);
  let tmp4 = null;
  if (null != tmp3) {
    ({ profileFrame: tmp3, previewWidth: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE * closure_5, previewHeight: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE, profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
    ProfileFrameSamplePreviewDefault;
    tmp4 = <_false style={styles.profileFrameContainer}>{null}</_false>;
  }
  return tmp4;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let styles;
  let subscriptionPlanId;
  const obj = react2;
  const cResult = obj.c(10);
  ({ subscriptionPlanId, styles } = arg0);
  if (null == subscriptionPlanId) {
    let first;
    let tmp17;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp16 = jsx(ShopIcon.ShopIcon, { size: "custom", style: { width: 20, height: 20 } });
      cResult[0] = tmp16;
      first = tmp16;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== styles.purchasePlaceholder) {
      const tmp20 = <_false style={styles.purchasePlaceholder}>{first}</_false>;
      cResult[1] = styles.purchasePlaceholder;
      cResult[2] = tmp20;
      tmp17 = tmp20;
    } else {
      tmp17 = cResult[2];
    }
    return tmp17;
  } else {
    let tmp4;
    let tmp6;
    if (cResult[3] !== subscriptionPlanId) {
      const tmpResult = FamilyCenterActivityPurchaseRowUtils;
      const result = tmpResult.isGuildBoostSubscription(subscriptionPlanId);
      cResult[3] = subscriptionPlanId;
      cResult[4] = result;
      tmp4 = result;
    } else {
      tmp4 = cResult[4];
    }
    if (cResult[5] !== tmp4) {
      if (tmp4) {
        let NitroWheelIcon = BoostGemIcon.BoostGemIcon;
      } else {
        NitroWheelIcon = NitroWheelIcon2.NitroWheelIcon;
      }
      const tmp7Result = <NitroWheelIcon size="custom" style={{ width: 20, height: 20 }} />;
      cResult[5] = tmp4;
      cResult[6] = tmp7Result;
      tmp6 = tmp7Result;
    } else {
      tmp6 = cResult[6];
    }
    if (cResult[7] === styles.purchasePlaceholder) {
      let tmp9;
      if (cResult[8] === tmp6) {
        tmp9 = cResult[9];
      }
      return tmp9;
    }
    const tmp12 = <_false style={styles.purchasePlaceholder}>{tmp6}</_false>;
    cResult[7] = styles.purchasePlaceholder;
    cResult[8] = tmp6;
    cResult[9] = tmp12;
    tmp9 = tmp12;
  }
}) : ((arg0) => {
  let styles;
  let subscriptionPlanId;
  ({ subscriptionPlanId, styles } = arg0);
  if (null == subscriptionPlanId) {
    return <_false style={styles.purchasePlaceholder}>{null}</_false>;
  } else {
    const obj4 = FamilyCenterActivityPurchaseRowUtils;
    if (obj4.isGuildBoostSubscription(subscriptionPlanId)) {
      let NitroWheelIcon = BoostGemIcon.BoostGemIcon;
    } else {
      NitroWheelIcon = NitroWheelIcon2.NitroWheelIcon;
    }
    return <_false style={styles.purchasePlaceholder}>{null}</_false>;
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let product;
  let styles;
  const obj = react2;
  const cResult = obj.c(20);
  ({ product, styles } = arg0);
  if (null == product) {
    let first;
    let tmp33;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp32 = jsx(ShopIcon.ShopIcon, { size: "custom", style: { width: 20, height: 20 } });
      cResult[0] = tmp32;
      first = tmp32;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== styles.purchasePlaceholder) {
      const tmp36 = <_false style={styles.purchasePlaceholder}>{first}</_false>;
      cResult[1] = styles.purchasePlaceholder;
      cResult[2] = tmp36;
      tmp33 = tmp36;
    } else {
      tmp33 = cResult[2];
    }
    return tmp33;
  } else {
    const type = product.type;
    if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
      if (cResult[3] === product) {
        let tmp25;
        if (cResult[4] === styles) {
          tmp25 = cResult[5];
        }
        return tmp25;
      }
      const tmp28 = <closure_8 product={product} styles={styles} />;
      cResult[3] = product;
      cResult[4] = styles;
      cResult[5] = tmp28;
      tmp25 = tmp28;
    } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
      let tmp19;
      if (cResult[6] !== product) {
        const tmpResult = utils;
        const nameplateDataFromProductRecord = tmpResult.getNameplateDataFromProductRecord(product);
        cResult[6] = product;
        cResult[7] = nameplateDataFromProductRecord;
        tmp19 = nameplateDataFromProductRecord;
      } else {
        tmp19 = cResult[7];
      }
      if (cResult[8] === tmp19) {
        let tmp21;
        if (cResult[9] === styles) {
          tmp21 = cResult[10];
        }
        return tmp21;
      }
      let tmp22 = null;
      if (null != tmp19) {
        tmp22 = <closure_9 nameplateData={tmp19} styles={styles} />;
      }
      cResult[8] = tmp19;
      cResult[9] = styles;
      cResult[10] = tmp22;
      tmp21 = tmp22;
    } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
      if (cResult[11] === product) {
        let tmp15;
        if (cResult[12] === styles) {
          tmp15 = cResult[13];
        }
        return tmp15;
      }
      const tmp18 = <closure_10 product={product} styles={styles} />;
      cResult[11] = product;
      cResult[12] = styles;
      cResult[13] = tmp18;
      tmp15 = tmp18;
    } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
      if (cResult[14] === product) {
        let tmp11;
        if (cResult[15] === styles) {
          tmp11 = cResult[16];
        }
        return tmp11;
      }
      const tmp14 = <closure_11 product={product} styles={styles} />;
      cResult[14] = product;
      cResult[15] = styles;
      cResult[16] = tmp14;
      tmp11 = tmp14;
    } else {
      let tmp4;
      let tmp7;
      const _Symbol2 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp6 = jsx(ShopIcon.ShopIcon, { size: "custom", style: { width: 20, height: 20 } });
        cResult[17] = tmp6;
        tmp4 = tmp6;
      } else {
        tmp4 = cResult[17];
      }
      if (cResult[18] !== styles.purchasePlaceholder) {
        const tmp10 = <_false style={styles.purchasePlaceholder}>{tmp4}</_false>;
        cResult[18] = styles.purchasePlaceholder;
        cResult[19] = tmp10;
        tmp7 = tmp10;
      } else {
        tmp7 = cResult[19];
      }
      return tmp7;
    }
  }
}) : ((arg0) => {
  let product;
  let styles;
  ({ product, styles } = arg0);
  if (null == product) {
    return <_false style={styles.purchasePlaceholder}>{null}</_false>;
  } else {
    const type = product.type;
    if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
      return <closure_8 product={product} styles={styles} />;
    } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
      const tmp17Result = utils;
      const nameplateDataFromProductRecord = tmp17Result.getNameplateDataFromProductRecord(product);
      let tmp8 = null;
      if (null != nameplateDataFromProductRecord) {
        tmp8 = <closure_9 nameplateData={nameplateDataFromProductRecord} styles={styles} />;
      }
      return tmp8;
    } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
      return <closure_10 product={product} styles={styles} />;
    } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
      return <closure_11 product={product} styles={styles} />;
    } else {
      return <_false style={styles.purchasePlaceholder}>{null}</_false>;
    }
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let displayName;
  let isSubscription;
  let product;
  let subscriptionPlanId;
  let tmp4Result;
  const obj = react2;
  const cResult = obj.c(8);
  ({ displayName, product, isSubscription, subscriptionPlanId } = arg0);
  const tmp2 = closure_7();
  if (cResult[0] === isSubscription) {
    if (cResult[1] === product) {
      if (cResult[2] === tmp2) {
        let tmp3;
        if (cResult[3] === subscriptionPlanId) {
          tmp3 = cResult[4];
        }
        if (cResult[5] === displayName) {
          let tmp8;
          if (cResult[6] === tmp3) {
            tmp8 = cResult[7];
          }
          return tmp8;
        }
        const tmp11 = <_false accessible accessibilityLabel={displayName}>{tmp3}</_false>;
        cResult[5] = displayName;
        cResult[6] = tmp3;
        cResult[7] = tmp11;
        tmp8 = tmp11;
      }
    }
  }
  if (isSubscription) {
    tmp4Result = <closure_12 subscriptionPlanId={subscriptionPlanId} styles={tmp2} />;
  } else {
    tmp4Result = <closure_13 product={product} styles={tmp2} />;
  }
  cResult[0] = isSubscription;
  cResult[1] = product;
  cResult[2] = tmp2;
  cResult[3] = subscriptionPlanId;
  cResult[4] = tmp4Result;
  tmp3 = tmp4Result;
}) : ((arg0) => {
  let displayName;
  let isSubscription;
  let product;
  let subscriptionPlanId;
  let tmp2Result;
  ({ displayName, product, isSubscription, subscriptionPlanId } = arg0);
  const tmp = closure_7();
  if (isSubscription) {
    tmp2Result = <closure_12 subscriptionPlanId={subscriptionPlanId} styles={tmp} />;
  } else {
    tmp2Result = <closure_13 product={product} styles={tmp} />;
  }
  return <_false accessible accessibilityLabel={displayName}>{tmp2Result}</_false>;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityItemPreview.tsx");

export default tmp5;