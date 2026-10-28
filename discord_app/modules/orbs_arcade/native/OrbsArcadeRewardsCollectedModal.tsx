// discord_app/modules/orbs_arcade/native/OrbsArcadeRewardsCollectedModal.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import utils_CollectiblesUtils from "../../collectibles/utils/CollectiblesUtils.tsx";
import useCurrentUser from "../../collectibles/hooks/useCurrentUser.tsx";
import AvatarDecorationSampleV2Default from "../../collectibles/native/AvatarDecorationSampleV2.tsx";
import FractionalNitroCoinIllustration from "../../collectibles/native/FractionalNitroCoinIllustration.tsx";
import useHandleUseNow from "../../collectibles/native/useHandleUseNow.tsx";
import useAvatarDecorationPreviewSizes from "../../collectibles/native/useAvatarDecorationPreviewSizes.tsx";
import OrbsArcadeTypes from "../OrbsArcadeTypes.tsx";
import OrbsArcadeRewardPreviewDefault from "OrbsArcadeRewardPreview.tsx";
import openOrbsArcadeRewardsCollectedModal from "openOrbsArcadeRewardsCollectedModal.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;

const initialize = nW6E3m(504);
const util = nW6E3m(1125);
const CollectiblesUtils = nW6E3m(7697);
const useShopProductItems = nW6E3m(8697);
const useFetchCollectiblesProduct = nW6E3m(11090);
require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const UserSettingsSections = fn(1084).UserSettingsSections;
const dependencyMap2 = fn(1391).FRACTIONAL_PREMIUM_SKU_INTERVAL_COUNTS;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const locations = [0, 0.72, 1];
let createStyles = fn(5004);
let obj2 = {
  root: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  backdrop: { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 },
  main: { flex: 1 },
  header: null,
  pager: null,
  pageContent: null,
  messages: null,
  message: null,
  footer: null,
  pageDots: null,
  pageDot: null,
  currentPageDot: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.header = { flexDirection: "row", paddingHorizontal: nativeDefault.space.PX_16 };
obj2.pager = { flex: 1 };
let obj4 = { flexDirection: "row", paddingHorizontal: nativeDefault.space.PX_16 };
obj2.pageContent = {
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
  gap: nativeDefault.space.PX_32,
  paddingHorizontal: nativeDefault.space.PX_16,
};
let obj5 = {
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
  gap: nativeDefault.space.PX_32,
  paddingHorizontal: nativeDefault.space.PX_16,
};
obj2.messages = { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.message = { textAlign: "center" };
let obj6 = { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.footer = { gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_24 };
let obj7 = { gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_24 };
obj2.pageDots = { flexDirection: "row", justifyContent: "center", gap: nativeDefault.space.PX_4 };
let size = { width: 8, height: 8, borderRadius: 4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj2.pageDot = size;
let obj8 = { flexDirection: "row", justifyContent: "center", gap: nativeDefault.space.PX_4 };
obj2.currentPageDot = { backgroundColor: nativeDefault.colors.ICON_STRONG };
let closure_13 = createStyles.createStyles(obj2);
createStyles = fn(5004);
let closure_14 = createStyles.createStyles((width) => ({
  preview: { width, height: width, alignItems: "center", justifyContent: "center" },
}));
createStyles = fn(5004);
let closure_15 = createStyles.createStyles((width) => {
  const obj = { page: { width } };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function OrbsArcadeRewardPageContent(arg0) {
      const cResult = c.c(17);
      ({ preview, title, description } = arg0);
      const tmp4 = closure_13();
      const tmp5 = closure_14(useAvatarDecorationPreviewSizes.useAvatarDecorationPreviewSizes().avatarDecorationSize);
      if (cResult[0] === preview) {
        if (cResult[1] === tmp5.preview) {
          let tmp6 = cResult[2];
        }
        if (cResult[3] === tmp4.message) {
          if (cResult[4] === title) {
            let tmp8 = cResult[5];
          }
          if (cResult[6] === description) {
            if (cResult[7] === tmp4.message) {
              let tmp11 = cResult[8];
            }
            if (cResult[9] === tmp4.messages) {
              if (cResult[10] === tmp8) {
                if (cResult[11] === tmp11) {
                  let tmp14 = cResult[12];
                }
                if (cResult[13] === tmp4.pageContent) {
                  if (cResult[14] === tmp6) {
                    if (cResult[15] === tmp14) {
                      let tmp18 = cResult[16];
                    }
                    return tmp18;
                  }
                }
                const obj3 = { contentContainerStyle: tmp4.pageContent, alwaysBounceVertical: false, children: null };
                const items = [tmp6, tmp14];
                obj3.children = items;
                const tmp21 = closure_1_11(hasOwnProperty, obj3);
                cResult[13] = tmp4.pageContent;
                cResult[14] = tmp6;
                cResult[15] = tmp14;
                cResult[16] = tmp21;
                tmp18 = tmp21;
              }
            }
            const obj4 = { style: tmp4.messages, children: null };
            const items1 = [tmp8, tmp11];
            obj4.children = items1;
            const tmp17 = closure_1_11(timestampProducer, obj4);
            cResult[9] = tmp4.messages;
            cResult[10] = tmp8;
            cResult[11] = tmp11;
            cResult[12] = tmp17;
            tmp14 = tmp17;
          }
          const obj5 = { variant: "text-md/medium", color: "text-default", style: tmp4.message, children: description };
          const tmp13 = v65535(Text_Text.Text, obj5);
          cResult[6] = description;
          cResult[7] = tmp4.message;
          cResult[8] = tmp13;
          tmp11 = tmp13;
        }
        const obj6 = { variant: "heading-xl/bold", color: "text-default", style: tmp4.message, children: title };
        const tmp10 = v65535(Text_Text.Text, obj6);
        cResult[3] = tmp4.message;
        cResult[4] = title;
        cResult[5] = tmp10;
        tmp8 = tmp10;
      }
      const tmp7 = v65535(timestampProducer, { style: tmp5.preview, children: preview });
      cResult[0] = preview;
      cResult[1] = tmp5.preview;
      cResult[2] = tmp7;
      tmp6 = tmp7;
      const obj7 = { style: tmp5.preview, children: preview };
    }
  : function OrbsArcadeRewardPageContent(arg0) {
      ({ preview, title, description } = arg0);
      const tmp = closure_13();
      const obj2 = { contentContainerStyle: tmp.pageContent, alwaysBounceVertical: false, children: null };
      const items = [
        v65535(timestampProducer, {
          style: closure_14(useAvatarDecorationPreviewSizes.useAvatarDecorationPreviewSizes().avatarDecorationSize)
            .preview,
          children: preview,
        }),
      ];
      const obj4 = { style: tmp.messages, children: null };
      const items1 = [
        v65535(Text_Text.Text, {
          variant: "heading-xl/bold",
          color: "text-default",
          style: tmp.message,
          children: title,
        }),
        v65535(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-default",
          style: tmp.message,
          children: description,
        }),
      ];
      obj4.children = items1;
      items[1] = closure_1_11(timestampProducer, obj4);
      obj2.children = items;
      return closure_1_11(hasOwnProperty, obj2);
    };
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? function CollectibleRewardPageContent(reward) {
      let nW6E3m = require;
      let obj = dependencyMap;
      const cResult = c.c(20);
      reward = reward.reward;
      const currentUser = useCurrentUser.useCurrentUser();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn = function o() {
          return useReducedMotion.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp2 = items;
        tmp3 = fn;
      } else {
        [tmp2, tmp3] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp2, tmp3);
      const nW6E3mResult = initialize;
      const avatarDecorationPreviewSizes = useAvatarDecorationPreviewSizes.useAvatarDecorationPreviewSizes();
      ({ avatarSize, avatarDecorationSize } = avatarDecorationPreviewSizes);
      const nW6E3mResult1 = useAvatarDecorationPreviewSizes;
      const product = useFetchCollectiblesProduct.useFetchCollectiblesProduct(reward.skuId).product;
      if (cResult[2] !== product) {
        let prop;
        if (null != product) {
          prop = useShopProductItems.getProductItems(product).firstAvatarDecoration;
          const nW6E3mResult3 = useShopProductItems;
        }
        cResult[2] = product;
        cResult[3] = prop;
        let tmp7 = prop;
      } else {
        tmp7 = cResult[3];
      }
      let name;
      if (product != null) {
        name = product.name;
      }
      if (name == null) {
        name = reward.name;
      }
      if (cResult[4] === tmp7) {
        if (cResult[5] === avatarDecorationSize) {
          if (cResult[6] === avatarSize) {
            if (cResult[7] === currentUser) {
              if (cResult[8] === reward) {
                if (cResult[9] === stateFromStores) {
                  if (cResult[11] !== name) {
                    const intl = util.intl;
                    const obj4 = { itemName: name };
                    const formatResult = intl.format(util.t.YNaxMp, obj4);
                    cResult[11] = name;
                    cResult[12] = formatResult;
                    let tmp18 = formatResult;
                  } else {
                    tmp18 = cResult[12];
                  }
                  if (cResult[13] === name) {
                    if (cResult[14] === product) {
                      if (cResult[16] === tmp11) {
                        if (cResult[17] === tmp18) {
                          if (cResult[18] === tmp20) {
                            let tmp23 = cResult[19];
                          }
                          return tmp23;
                        }
                      }
                      const obj5 = { preview: tmp11, title: tmp18, description: cResult[15] };
                      const tmp26 = v65535(closure_16, obj5);
                      cResult[16] = tmp11;
                      cResult[17] = tmp18;
                      cResult[18] = cResult[15];
                      cResult[19] = tmp26;
                      tmp23 = tmp26;
                    }
                  }
                  if (null == product) {
                    const intl2 = util.intl;
                    const obj6 = { itemName: name };
                    let formatResult1 = intl2.format(util.t["4kp0AB"], obj6);
                    cResult[13] = name;
                    cResult[14] = product;
                    cResult[15] = formatResult1;
                  } else {
                    CollectiblesUtils;
                  }
                  const intl3 = util.intl;
                  nW6E3m = util.t.nW6E3m;
                  obj = { itemName: name };
                  formatResult1 = intl3.format(nW6E3m, obj);
                }
              }
            }
          }
        }
      }
      if (null != tmp7) {
        const obj7 = {
          item: tmp7,
          size: avatarDecorationSize,
          avatarSource: currentUser.getAvatarSource(undefined, false, avatarSize),
          animate: !stateFromStores,
        };
        let tmp14 = v65535(AvatarDecorationSampleV2Default, obj7);
      } else {
        const obj8 = { reward, size: avatarDecorationSize };
        tmp14 = v65535(OrbsArcadeRewardPreviewDefault, obj8);
      }
      cResult[4] = tmp7;
      cResult[5] = avatarDecorationSize;
      cResult[6] = avatarSize;
      cResult[7] = currentUser;
      cResult[8] = reward;
      cResult[9] = stateFromStores;
      cResult[10] = tmp14;
      const nW6E3mResult2 = useFetchCollectiblesProduct;
    }
  : function CollectibleRewardPageContent(reward) {
      reward = reward.reward;
      const currentUser = useCurrentUser.useCurrentUser();
      const items = [AccessibilityStore];
      const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      const avatarDecorationPreviewSizes = useAvatarDecorationPreviewSizes.useAvatarDecorationPreviewSizes();
      ({ avatarDecorationSize, avatarSize } = avatarDecorationPreviewSizes);
      const product = useFetchCollectiblesProduct.useFetchCollectiblesProduct(reward.skuId).product;
      let prop;
      if (null != product) {
        prop = useShopProductItems.getProductItems(product).firstAvatarDecoration;
        const tmpResult = useShopProductItems;
      }
      let name;
      if (product != null) {
        name = product.name;
      }
      if (name == null) {
        name = reward.name;
      }
      if (null != prop) {
        const obj2 = {
          item: prop,
          size: avatarDecorationSize,
          avatarSource: currentUser.getAvatarSource(undefined, false, avatarSize),
          animate: !stateFromStores,
        };
        let tmp7Result = v65535(AvatarDecorationSampleV2Default, obj2);
      } else {
        const obj6 = { reward, size: avatarDecorationSize };
        tmp7Result = v65535(OrbsArcadeRewardPreviewDefault, obj6);
      }
      const obj7 = { preview: tmp7Result, title: null, description: null };
      const intl = util.intl;
      obj7.title = intl.format(util.t.YNaxMp, { itemName: name });
      if (null != product) {
        if (tmpResult2.isPremiumCollectiblesProduct(product)) {
          const intl3 = util.intl;
          const obj8 = { itemName: name };
          let formatResult = intl3.format(util.t.nW6E3m, obj8);
        }
        obj7.description = formatResult;
        return v65535(closure_16, obj7);
      }
      const intl2 = util.intl;
      formatResult = intl2.format(util.t["4kp0AB"], { itemName: name });
    };
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function CollectibleRewardUseNowButton(product) {
      let stringResult = dependencyMap;
      const cResult = c.c(7);
      product = product.product;
      if (cResult[0] !== product) {
        const obj2 = { product };
        cResult[0] = product;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const handleUseNow1 = useHandleUseNow.useHandleUseNow(tmp4);
      ({ handleUseNow, canUseNow, isApplying, handleEditProfile } = handleUseNow1);
      if (cResult[2] === canUseNow) {
        if (cResult[3] === handleEditProfile) {
          if (cResult[4] === handleUseNow) {
            if (cResult[5] === isApplying) {
              return cResult[6];
            }
          }
        }
      }
      if (canUseNow) {
        const obj3 = { size: "lg", text: null, loading: null, disabled: null, onPress: null };
        const intl2 = util.intl;
        stringResult = intl2.string(util.t.MAS7uK);
        obj3.text = stringResult;
        obj3.loading = isApplying;
        obj3.disabled = isApplying;
        obj3.onPress = handleUseNow;
        let obj4 = obj3;
      } else {
        obj4 = { size: "lg", text: null, onPress: null };
        const intl = util.intl;
        obj4.text = intl.string(util.t["2p2aYz"]);
        obj4.onPress = handleEditProfile;
      }
      const tmpResult = useHandleUseNow;
      cResult[2] = canUseNow;
      cResult[3] = handleEditProfile;
      cResult[4] = handleUseNow;
      cResult[5] = isApplying;
      cResult[6] = v65535(components_Button_Button.Button, obj4);
      const tmp6Result = v65535(components_Button_Button.Button, obj4);
    }
  : function CollectibleRewardUseNowButton(product) {
      const handleUseNow1 = useHandleUseNow.useHandleUseNow({ product: product.product });
      ({ isApplying, handleUseNow, canUseNow, handleEditProfile } = handleUseNow1);
      if (canUseNow) {
        const obj2 = { size: "lg", text: null, loading: null, disabled: null, onPress: null };
        const intl2 = util.intl;
        obj2.text = intl2.string(util.t.MAS7uK);
        obj2.loading = isApplying;
        obj2.disabled = isApplying;
        obj2.onPress = handleUseNow;
        let obj3 = obj2;
      } else {
        obj3 = { size: "lg", text: null, onPress: null };
        const intl = util.intl;
        obj3.text = intl.string(util.t["2p2aYz"]);
        obj3.onPress = handleEditProfile;
      }
      return v65535(components_Button_Button.Button, obj3);
    };
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? function CollectibleRewardPrimaryAction(reward) {
      const cResult = c.c(2);
      const product = useFetchCollectiblesProduct.useFetchCollectiblesProduct(reward.reward.skuId).product;
      if (cResult[0] !== product) {
        if (null != product) {
          const obj3 = { product };
          let tmp6 = v65535(closure_18, obj3);
        } else {
          const obj4 = { size: "lg", text: null, loading: true, disabled: true, onPress: null };
          const intl = util.intl;
          obj4.text = intl.string(util.t.MAS7uK);
          obj4.onPress = function onPress() {};
          tmp6 = v65535(components_Button_Button.Button, obj4);
        }
        cResult[0] = product;
        cResult[1] = tmp6;
      } else {
        return cResult[1];
      }
    }
  : function CollectibleRewardPrimaryAction(reward) {
      const product = useFetchCollectiblesProduct.useFetchCollectiblesProduct(reward.reward.skuId).product;
      if (null != product) {
        const obj2 = { product };
        let tmp4 = v65535(closure_18, obj2);
      } else {
        const obj3 = { size: "lg", text: null, loading: true, disabled: true, onPress: null };
        const intl = util.intl;
        obj3.text = intl.string(util.t.MAS7uK);
        obj3.onPress = function onPress() {};
        tmp4 = v65535(components_Button_Button.Button, obj3);
      }
      return tmp4;
    };
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? function NitroCreditRewardPageContent(arg0) {
      const cResult = c.c(11);
      ({ reward, consumed } = arg0);
      const avatarDecorationSize =
        useAvatarDecorationPreviewSizes.useAvatarDecorationPreviewSizes().avatarDecorationSize;
      const fetchFractionalPremiumInfo = utils_CollectiblesUtils.useFetchFractionalPremiumInfo();
      ({ isFractionalPremiumActive, expiresAt } = fetchFractionalPremiumInfo);
      if (cResult[0] === avatarDecorationSize) {
        if (cResult[1] === consumed) {
          if (cResult[2] === expiresAt) {
            let tmp7;
            if (tmp5 != null) {
              tmp7 = tmp5[1];
            }
            if (cResult[3] === tmp7) {
              if (cResult[4] === isFractionalPremiumActive) {
                if (cResult[5] === reward.skuId) {
                  let tmp8 = cResult[6];
                }
                return tmp8;
              }
            }
          }
        }
      }
      const intl = util.intl;
      let num;
      if (dependencyMap2[reward.skuId] != null) {
        num = tmp5[1];
      }
      if (num == null) {
        num = 3;
      }
      const formatToPlainStringResult = intl.formatToPlainString(util.t.Cz1G97, { days: num });
      if (cResult[7] === avatarDecorationSize) {
        if (cResult[8] === reward.skuId) {
          let tmp10 = cResult[9];
        }
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = util.intl;
          const stringResult = intl2.string(util.t.m2zEFB);
          cResult[10] = stringResult;
          let tmp13 = stringResult;
        } else {
          tmp13 = cResult[10];
        }
        const obj4 = { preview: tmp10, title: tmp13, description: null };
        const intl3 = util.intl;
        if (consumed) {
          const obj5 = { duration: formatToPlainStringResult, expirationDate: expiresAt };
          let formatResult = intl3.format(util.t["93PGOI"], obj5);
        } else if (isFractionalPremiumActive) {
          formatResult = intl3.string(util.t.fBmhE9);
        } else {
          const obj6 = { duration: formatToPlainStringResult };
          formatResult = intl3.format(util.t["8fyBPf"], obj6);
        }
        obj4.description = formatResult;
        const tmp15Result = v65535(closure_16, obj4);
        cResult[0] = avatarDecorationSize;
        cResult[1] = consumed;
        cResult[2] = expiresAt;
        let tmp19;
        if (tmp5 != null) {
          tmp19 = tmp5[1];
        }
        cResult[3] = tmp19;
        cResult[4] = isFractionalPremiumActive;
        cResult[5] = reward.skuId;
        cResult[6] = tmp15Result;
        tmp8 = tmp15Result;
      }
      const size = { skuId: reward.skuId, width: avatarDecorationSize, height: avatarDecorationSize };
      const tmp11 = v65535(FractionalNitroCoinIllustration.FractionalNitroCoinIllustration, size);
      cResult[7] = avatarDecorationSize;
      cResult[8] = reward.skuId;
      cResult[9] = tmp11;
      tmp10 = tmp11;
    }
  : function NitroCreditRewardPageContent(reward) {
      reward = reward.reward;
      const avatarDecorationSize =
        useAvatarDecorationPreviewSizes.useAvatarDecorationPreviewSizes().avatarDecorationSize;
      const fetchFractionalPremiumInfo = utils_CollectiblesUtils.useFetchFractionalPremiumInfo();
      ({ isFractionalPremiumActive, expiresAt } = fetchFractionalPremiumInfo);
      const intl = util.intl;
      let num;
      if (dependencyMap2[reward.skuId] != null) {
        num = tmp4[1];
      }
      if (num == null) {
        num = 3;
      }
      const formatToPlainStringResult = intl.formatToPlainString(util.t.Cz1G97, { days: num });
      const obj3 = { preview: null, title: null, description: null };
      const size = { skuId: reward.skuId, width: avatarDecorationSize, height: avatarDecorationSize };
      obj3.preview = v65535(FractionalNitroCoinIllustration.FractionalNitroCoinIllustration, size);
      const intl2 = util.intl;
      obj3.title = intl2.string(util.t.m2zEFB);
      const intl3 = util.intl;
      if (reward.consumed) {
        const obj4 = { duration: formatToPlainStringResult, expirationDate: expiresAt };
        let formatResult = intl3.format(util.t["93PGOI"], obj4);
      } else if (isFractionalPremiumActive) {
        formatResult = intl3.string(util.t.fBmhE9);
      } else {
        const obj5 = { duration: formatToPlainStringResult };
        formatResult = intl3.format(util.t["8fyBPf"], obj5);
      }
      obj3.description = formatResult;
      return v65535(closure_16, obj3);
    };
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? function NitroCreditRewardPrimaryAction(consumed) {
      const cResult = consumed(576).c(7);
      consumed = consumed.consumed;
      if (cResult[0] !== consumed) {
        const intl = tmp(1125).intl;
        const t = tmp(1125).t;
        const stringResult = intl.string(consumed ? t.ERKK6v : t["Jr6N+s"]);
        cResult[0] = consumed;
        cResult[1] = stringResult;
      } else {
        if (cResult[2] !== consumed) {
          const fn = function o() {
            const result = openOrbsArcadeRewardsCollectedModal.closeOrbsArcadeRewardsCollectedModal();
            openUserSettings.openUserSettings({
              screen: consumed ? UserSettingsSections.PREMIUM : UserSettingsSections.PREMIUM_MANAGE_PLAN,
            });
            const obj3 = { screen: consumed ? UserSettingsSections.PREMIUM : UserSettingsSections.PREMIUM_MANAGE_PLAN };
          };
          cResult[2] = consumed;
          cResult[3] = fn;
          let tmp7 = fn;
        } else {
          tmp7 = cResult[3];
        }
        if (cResult[4] === cResult[1]) {
          if (cResult[5] === tmp7) {
            let tmp8 = cResult[6];
          }
          return tmp8;
        }
        let obj2 = { size: "lg", text: cResult[1], onPress: tmp7 };
        const tmp10 = closure_10(tmp(5280).Button, obj2);
        cResult[4] = cResult[1];
        cResult[5] = tmp7;
        cResult[6] = tmp10;
        tmp8 = tmp10;
      }
      let obj = consumed(576);
    }
  : function NitroCreditRewardPrimaryAction(consumed) {
      consumed = consumed.consumed;
      const intl = consumed(1125).intl;
      const t = consumed(1125).t;
      return closure_10(consumed(5280).Button, {
        size: "lg",
        text: intl.string(consumed ? t.ERKK6v : t["Jr6N+s"]),
        onPress() {
          const result = openOrbsArcadeRewardsCollectedModal.closeOrbsArcadeRewardsCollectedModal();
          openUserSettings.openUserSettings({
            screen: consumed ? UserSettingsSections.PREMIUM : UserSettingsSections.PREMIUM_MANAGE_PLAN,
          });
          const obj3 = { screen: consumed ? UserSettingsSections.PREMIUM : UserSettingsSections.PREMIUM_MANAGE_PLAN };
        },
      });
    };
ReactCompilerGating = fn(558);
let obj9 = { backgroundColor: nativeDefault.colors.ICON_STRONG };
size = fn(2);
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardsCollectedModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function OrbsArcadeRewardsCollectedModal(arg0) {
      const cResult = entitlements(stateFromStores[10]).c(62);
      ({ rewards, entitlements } = arg0);
      let obj = entitlements(stateFromStores[10]);
      const tmp2 = stateFromStores;
      importDefault = closure_13();
      const tmp4 = closure_13();
      const token = entitlements(stateFromStores[27]).useToken(require("native").colors.BACKGROUND_BASE_LOW);
      let obj2 = entitlements(stateFromStores[27]);
      const token1 = entitlements(stateFromStores[27]).useToken(require("native").colors.BACKGROUND_BASE_LOWER);
      let obj3 = entitlements(stateFromStores[27]);
      const token2 = entitlements(stateFromStores[27]).useToken(require("native").colors.BACKGROUND_BASE_LOWEST);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn = function p() {
          return closure_7.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp8 = items;
        tmp9 = fn;
      } else {
        [tmp8, tmp9] = cResult;
      }
      const obj4 = entitlements(stateFromStores[27]);
      stateFromStores = entitlements(tmp2[14]).useStateFromStores(tmp8, tmp9);
      const ref = first.useRef(null);
      const tmp13 = ref(first.useState(0), 2);
      first = tmp13[0];
      closure_5 = tmp13[1];
      let tmpResult = entitlements(tmp2[14]);
      const page = closure_15(first);
      const tmp16 = ref(first.useState(0), 2);
      AccessibilityStore = tmp16[1];
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor(arg0) {
            tmp = closure_5(arg0.nativeEvent.layout.width);
            return;
          }
        }
        cResult[2] = I;
      } else {
        class I {
          constructor(arg0) {
            tmp = closure_5(arg0.nativeEvent.layout.width);
            return;
          }
        }
      }
      if (cResult[3] !== first) {
        class V {
          constructor(arg0) {
            if (closure_4 > 0) {
              tmp2 = arg0;
              tmp3 = closure_7;
              tmp4 = globalThis;
              _Math = Math;
              tmp5 = closure_7(Math.round(arg0.nativeEvent.contentOffset.x / tmp));
            }
            return;
          }
        }
        cResult[3] = first;
        cResult[4] = V;
      } else {
        class V {
          constructor(arg0) {
            if (closure_4 > 0) {
              tmp2 = arg0;
              tmp3 = closure_7;
              tmp4 = globalThis;
              _Math = Math;
              tmp5 = closure_7(Math.round(arg0.nativeEvent.contentOffset.x / tmp));
            }
            return;
          }
        }
      }
      const bound = Math.max(Math.min(tmp16[0], rewards.length - 1), 0);
      if (null == rewards[bound]) {
        class V {
          constructor(arg0) {
            if (closure_4 > 0) {
              tmp2 = arg0;
              tmp3 = closure_7;
              tmp4 = globalThis;
              _Math = Math;
              tmp5 = closure_7(Math.round(arg0.nativeEvent.contentOffset.x / tmp));
            }
            return;
          }
        }
      } else {
        class V {
          constructor(arg0) {
            if (closure_4 > 0) {
              tmp2 = arg0;
              tmp3 = closure_7;
              tmp4 = globalThis;
              _Math = Math;
              tmp5 = closure_7(Math.round(arg0.nativeEvent.contentOffset.x / tmp));
            }
            return;
          }
        }
        closure_9 = tmp21;
        if (cResult[5] === bound) {
          class V {
            constructor(arg0) {
              if (closure_4 > 0) {
                tmp2 = arg0;
                tmp3 = closure_7;
                tmp4 = globalThis;
                _Math = Math;
                tmp5 = closure_7(Math.round(arg0.nativeEvent.contentOffset.x / tmp));
              }
              return;
            }
          }
        }
        function handleNextPress() {
          if (closure_9) {
            const result = openOrbsArcadeRewardsCollectedModal.closeOrbsArcadeRewardsCollectedModal();
          } else {
            const current = ref.current;
            if (current != null) {
              const obj = { x: (bound + 1) * first, animated: !stateFromStores };
              current.scrollTo(obj);
            }
            closure_7(bound + 1);
          }
        }
        cResult[5] = bound;
        cResult[6] = tmp21;
        cResult[7] = first;
        cResult[8] = stateFromStores;
        cResult[9] = handleNextPress;
      }
      const tmp15 = closure_15(first);
    }
  : function OrbsArcadeRewardsCollectedModal(arg0) {
      ({ rewards, entitlements } = arg0);
      let skuId = entitlements;
      let first;
      c7 = undefined;
      closure_9 = undefined;
      const tmp = closure_13();
      importDefault = tmp;
      const token = skuId(5288).useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
      let obj = skuId(5288);
      const token1 = skuId(5288).useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER);
      let obj2 = skuId(5288);
      const token2 = skuId(5288).useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
      let obj3 = skuId(5288);
      const items = [c7];
      dependencyMap = skuId(504).useStateFromStores(items, () => _undefined.useReducedMotion);
      const ref = first.useRef(null);
      const tmp9 = ref(first.useState(0), 2);
      first = tmp9[0];
      closure_5 = tmp9[1];
      const page = closure_15(first);
      const obj4 = skuId(504);
      [tmp12, c7] = ref(first.useState(0), 2);
      const items1 = [first];
      const callback = first.useCallback((nativeEvent) => {
        closure_5(nativeEvent.nativeEvent.layout.width);
      }, []);
      const callback1 = first.useCallback((nativeEvent) => {
        if (first > 0) {
          const _Math = Math;
          _undefined(Math.round(nativeEvent.nativeEvent.contentOffset.x / tmp));
        }
      }, items1);
      const bound = Math.max(Math.min(tmp12, rewards.length - 1), 0);
      if (null == rewards[bound]) {
        return null;
      } else {
        closure_9 = tmp24;
        const obj5 = { style: tmp.root, children: null };
        const obj6 = {
          style: tmp.backdrop,
          start: tmp2(1104).VerticalGradient.START,
          end: tmp2(1104).VerticalGradient.END,
          locations,
          colors: null,
        };
        const items2 = [token, token1, token2];
        obj6.colors = items2;
        const items3 = [closure_10(tmp4(5294), obj6)];
        const rect = { style: tmp.main, top: true, bottom: true, left: true, right: true, children: null };
        const obj7 = { style: tmp.header, children: null };
        const obj8 = { variant: "tertiary", icon: tmp4(10693), accessibilityLabel: null, onPress: null };
        const intl3 = tmp2(1125).intl;
        obj8.accessibilityLabel = intl3.string(tmp2(1125).t.cpT0Cq);
        obj8.onPress = tmp2(16684).closeOrbsArcadeRewardsCollectedModal;
        obj7.children = closure_10(tmp2(7991).IconButton, obj8);
        const items4 = [closure_10(page, obj7), ,];
        const obj9 = { style: tmp.pager, onLayout: callback, children: null };
        let tmp28Result = null;
        if (first > 0) {
          const obj10 = {
            ref,
            horizontal: true,
            pagingEnabled: true,
            scrollEnabled: !tmp25,
            showsHorizontalScrollIndicator: false,
            onMomentumScrollEnd: callback1,
            children: rewards.map((type) => {
              const obj = { style: page.page, children: null };
              if (type.type === OrbsArcadeTypes.OrbsArcadeRewardType.COLLECTIBLE) {
                const obj2 = { reward: type };
                let tmpResult = v65535(closure_17, obj2);
              } else {
                const obj3 = { reward: type, consumed: null };
                skuId = type.skuId;
                const found = skuId.find((sku_id) => sku_id.sku_id === skuId);
                let flag;
                if (found != null) {
                  flag = found.consumed;
                }
                if (flag == null) {
                  flag = false;
                }
                obj3.consumed = flag;
                tmpResult = v65535(closure_20, obj3);
              }
              obj.children = tmpResult;
              return v65535(timestampProducer, obj, type.id);
            }),
          };
          tmp28Result = closure_10(closure_5, obj10);
        }
        obj9.children = tmp28Result;
        items4[1] = closure_10(page, obj9);
        const obj11 = { style: tmp.footer, children: null };
        let tmp28Result3 = null;
        if (1 !== rewards.length) {
          const obj12 = { style: tmp.pageDots, accessible: true, accessibilityLabel: null, children: null };
          const intl = tmp2(1125).intl;
          const obj13 = { current: bound + 1, total: rewards.length };
          obj12.accessibilityLabel = intl.formatToPlainString(tmp2(1125).t.qD8TVH, obj13);
          const _Array = Array;
          const obj14 = { length: rewards.length };
          obj12.children = Array.from(obj14, (arg0, arg1) => {
            const style = [closure_1.pageDot];
            let currentPageDot;
            if (arg1 === bound) {
              currentPageDot = closure_1.currentPageDot;
            }
            style[1] = currentPageDot;
            return v65535(timestampProducer, { style }, arg1);
          });
          tmp28Result3 = closure_10(tmp27, obj12);
        }
        const items5 = [tmp28Result3];
        if (tmp16.type === tmp2(16663).OrbsArcadeRewardType.COLLECTIBLE) {
          const obj15 = { reward: tmp16 };
          let tmp28Result4 = closure_10(closure_19, obj15, tmp16.id);
        } else {
          skuId = tmp16.skuId;
          let found = entitlements.find((sku_id) => sku_id.sku_id === skuId);
          let flag;
          if (found != null) {
            flag = found.consumed;
          }
          if (flag == null) {
            flag = false;
          }
          const obj16 = { consumed: flag };
          tmp28Result4 = closure_10(closure_21, obj16, tmp16.id);
        }
        const items6 = [tmp28Result4];
        const intl2 = tmp2(1125).intl;
        const t = tmp2(1125).t;
        if (1 === rewards.length) {
          let cpT0Cq = t.cpT0Cq;
        } else {
          cpT0Cq = tmp24 ? t.i4jeWR : t.PDTjLN;
        }
        const obj17 = { size: "lg", children: null };
        const obj18 = {
          size: "lg",
          variant: "secondary",
          text: intl2.string(cpT0Cq),
          onPress: function handleNextPress() {
            if (closure_9) {
              const result = openOrbsArcadeRewardsCollectedModal.closeOrbsArcadeRewardsCollectedModal();
            } else {
              const current = ref.current;
              if (current != null) {
                const obj = { x: (bound + 1) * first, animated: !closure_2 };
                current.scrollTo(obj);
              }
              _undefined(bound + 1);
            }
          },
        };
        items6[1] = closure_10(tmp2(5280).Button, obj18);
        obj17.children = items6;
        items5[1] = closure_11(tmp2(6731).ButtonGroup, obj17);
        obj11.children = items5;
        items4[2] = closure_11(page, obj11);
        rect.children = items4;
        items3[1] = closure_11(tmp2(7257).SafeAreaPaddingView, rect);
        obj5.children = items3;
        return closure_11(page, obj5);
      }
      const tmp11 = ref(first.useState(0), 2);
    };
