// === Module 16977: OrbsArcadeRewardsCollectedModal ===

// Module 16977 (OrbsArcadeRewardsCollectedModal)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 5619 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import openUserSettings from "openUserSettings" /* 7557 */;
import utils_CollectiblesUtils from "utils/CollectiblesUtils" /* 7754 */;
import useShopProductItems from "useShopProductItems" /* 8734 */;
import useCurrentUser from "useCurrentUser" /* 8741 */;
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2" /* 9484 */;
import FractionalNitroCoinIllustration from "FractionalNitroCoinIllustration" /* 9519 */;
import useFetchCollectiblesProduct from "useFetchCollectiblesProduct" /* 11349 */;
import useHandleUseNow from "useHandleUseNow" /* 11478 */;
import useAvatarDecorationPreviewSizes from "useAvatarDecorationPreviewSizes" /* 14447 */;
import OrbsArcadeTypes from "OrbsArcadeTypes" /* 16955 */;
import OrbsArcadeRewardPreviewDefault from "OrbsArcadeRewardPreview" /* 16964 */;
import openOrbsArcadeRewardsCollectedModal from "openOrbsArcadeRewardsCollectedModal" /* 16976 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;

require = fn;
function OrbsArcadeRewardPageContent(arg0) {
  ({ preview, title, description } = arg0);
  const tmp = closure_13();
  const obj2 = { contentContainerStyle: tmp.pageContent, alwaysBounceVertical: false, children: null };
  const items = [closure_1_10(timestampProducer, { style: closure_14(useAvatarDecorationPreviewSizes.useAvatarDecorationPreviewSizes().avatarDecorationSize).preview, children: preview }), ];
  const obj4 = { style: tmp.messages, children: null };
  const items1 = [closure_1_10(Text_Text.Text, { variant: "heading-xl/bold", color: "text-default", style: tmp.message, children: title }), closure_1_10(Text_Text.Text, { variant: "text-md/medium", color: "text-default", style: tmp.message, children: description })];
  obj4.children = items1;
  items[1] = closure_1_11(timestampProducer, obj4);
  obj2.children = items;
  return closure_1_11(hasOwnProperty, obj2);
}
function CollectibleRewardPageContent(reward) {
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
    const obj2 = { item: prop, size: avatarDecorationSize, avatarSource: currentUser.getAvatarSource(undefined, false, avatarSize), animate: !stateFromStores };
    let tmp7Result = closure_1_10(AvatarDecorationSampleV2Default, obj2);
  } else {
    const obj6 = { reward, size: avatarDecorationSize };
    tmp7Result = closure_1_10(OrbsArcadeRewardPreviewDefault, obj6);
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
    return closure_1_10(OrbsArcadeRewardPageContent, obj7);
  }
  const intl2 = util.intl;
  formatResult = intl2.format(util.t["4kp0AB"], { itemName: name });
}
function CollectibleRewardUseNowButton(product) {
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
  return closure_1_10(components_Button_Button.Button, obj3);
}
function CollectibleRewardPrimaryAction(reward) {
  const product = useFetchCollectiblesProduct.useFetchCollectiblesProduct(reward.reward.skuId).product;
  if (null != product) {
    const obj2 = { product };
    let tmp4 = closure_1_10(CollectibleRewardUseNowButton, obj2);
  } else {
    const obj3 = { size: "lg", text: null, loading: true, disabled: true, onPress: null };
    const intl = util.intl;
    obj3.text = intl.string(util.t.MAS7uK);
    obj3.onPress = function onPress() {

    };
    tmp4 = closure_1_10(components_Button_Button.Button, obj3);
  }
  return tmp4;
}
function NitroCreditRewardPageContent(reward) {
  reward = reward.reward;
  const avatarDecorationSize = useAvatarDecorationPreviewSizes.useAvatarDecorationPreviewSizes().avatarDecorationSize;
  const fetchFractionalPremiumInfo = utils_CollectiblesUtils.useFetchFractionalPremiumInfo();
  ({ isFractionalPremiumActive, expiresAt } = fetchFractionalPremiumInfo);
  const intl = util.intl;
  let num;
  if (closure_9[reward.skuId] != null) {
    num = tmp4[1];
  }
  if (num == null) {
    num = 3;
  }
  const formatToPlainStringResult = intl.formatToPlainString(util.t.Cz1G97, { days: num });
  const obj3 = { preview: null, title: null, description: null };
  const size = { skuId: reward.skuId, width: avatarDecorationSize, height: avatarDecorationSize };
  obj3.preview = closure_1_10(FractionalNitroCoinIllustration.FractionalNitroCoinIllustration, size);
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
  return closure_1_10(OrbsArcadeRewardPageContent, obj3);
}
function NitroCreditRewardPrimaryAction(consumed) {
  consumed = consumed.consumed;
  const intl = consumed(1114).intl;
  const t = consumed(1114).t;
  return closure_10(consumed(5629).Button, {
    size: "lg",
    text: intl.string(consumed ? t.ERKK6v : t["Jr6N+s"]),
    onPress() {
      const result = openOrbsArcadeRewardsCollectedModal.closeOrbsArcadeRewardsCollectedModal();
      openUserSettings.openUserSettings({ screen: consumed ? UserSettingsSections.PREMIUM : UserSettingsSections.PREMIUM_MANAGE_PLAN });
      const obj3 = { screen: consumed ? UserSettingsSections.PREMIUM : UserSettingsSections.PREMIUM_MANAGE_PLAN };
    }
  });
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const UserSettingsSections = fn(1072).UserSettingsSections;
let closure_9 = fn(1386).FRACTIONAL_PREMIUM_SKU_INTERVAL_COUNTS;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const locations = [0, 0.72, 1];
let createStyles = fn(5009);
let obj2 = { root: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, backdrop: { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }, main: { flex: 1 }, header: null, pager: null, pageContent: null, messages: null, message: null, footer: null, pageDots: null, pageDot: null, currentPageDot: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.header = { flexDirection: "row", paddingHorizontal: nativeDefault.space.PX_16 };
obj2.pager = { flex: 1 };
let obj4 = { flexDirection: "row", paddingHorizontal: nativeDefault.space.PX_16 };
obj2.pageContent = { flexGrow: 1, justifyContent: "center", alignItems: "center", gap: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16 };
let obj5 = { flexGrow: 1, justifyContent: "center", alignItems: "center", gap: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16 };
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
createStyles = fn(5009);
let closure_14 = createStyles.createStyles((width) => ({ preview: { width, height: width, alignItems: "center", justifyContent: "center" } }));
createStyles = fn(5009);
let closure_15 = createStyles.createStyles((width) => {
  const obj = { page: { width } };
  return obj;
});
size = fn(2);
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardsCollectedModal.tsx");

export default function OrbsArcadeRewardsCollectedModal(arg0) {
  ({ rewards, entitlements } = arg0);
  let skuId = entitlements;
  let first;
  c7 = undefined;
  closure_9 = undefined;
  const tmp = closure_13();
  importDefault = tmp;
  const token = skuId(5591).useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  let obj = skuId(5591);
  const token1 = skuId(5591).useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER);
  let obj2 = skuId(5591);
  const token2 = skuId(5591).useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
  let obj3 = skuId(5591);
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
    const obj6 = { style: tmp.backdrop, start: tmp2(1093).VerticalGradient.START, end: tmp2(1093).VerticalGradient.END, locations, colors: null };
    const items2 = [token, token1, token2];
    obj6.colors = items2;
    const items3 = [closure_10(tmp4(5582), obj6), ];
    const rect = { style: tmp.main, top: true, bottom: true, left: true, right: true, children: null };
    const obj7 = { style: tmp.header, children: null };
    const obj8 = { variant: "tertiary", icon: tmp4(10749), accessibilityLabel: null, onPress: null };
    const intl3 = tmp2(1114).intl;
    obj8.accessibilityLabel = intl3.string(tmp2(1114).t.cpT0Cq);
    obj8.onPress = tmp2(16976).closeOrbsArcadeRewardsCollectedModal;
    obj7.children = closure_10(tmp2(8020).IconButton, obj8);
    const items4 = [closure_10(page, obj7), , ];
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
                let tmpResult = closure_2_10(CollectibleRewardPageContent, obj2);
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
                tmpResult = closure_2_10(NitroCreditRewardPageContent, obj3);
              }
              obj.children = tmpResult;
              return closure_2_10(timestampProducer, obj, type.id);
            })
      };
      tmp28Result = closure_10(closure_5, obj10);
    }
    obj9.children = tmp28Result;
    items4[1] = closure_10(page, obj9);
    const obj11 = { style: tmp.footer, children: null };
    let tmp28Result3 = null;
    if (1 !== rewards.length) {
      const obj12 = { style: tmp.pageDots, accessible: true, accessibilityLabel: null, children: null };
      const intl = tmp2(1114).intl;
      const obj13 = { current: bound + 1, total: rewards.length };
      obj12.accessibilityLabel = intl.formatToPlainString(tmp2(1114).t.qD8TVH, obj13);
      const _Array = Array;
      const obj14 = { length: rewards.length };
      obj12.children = Array.from(obj14, (arg0, arg1) => {
        const style = [closure_1.pageDot, ];
        let currentPageDot;
        if (arg1 === bound) {
          currentPageDot = closure_1.currentPageDot;
        }
        style[1] = currentPageDot;
        return closure_2_10(timestampProducer, { style }, arg1);
      });
      tmp28Result3 = closure_10(tmp27, obj12);
    }
    const items5 = [tmp28Result3, ];
    if (tmp16.type === tmp2(16955).OrbsArcadeRewardType.COLLECTIBLE) {
      const obj15 = { reward: tmp16 };
      let tmp28Result4 = closure_10(CollectibleRewardPrimaryAction, obj15, tmp16.id);
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
      tmp28Result4 = closure_10(NitroCreditRewardPrimaryAction, obj16, tmp16.id);
    }
    const items6 = [tmp28Result4, ];
    const intl2 = tmp2(1114).intl;
    const t = tmp2(1114).t;
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
        }
    };
    items6[1] = closure_10(tmp2(5629).Button, obj18);
    obj17.children = items6;
    items5[1] = closure_11(tmp2(6761).ButtonGroup, obj17);
    obj11.children = items5;
    items4[2] = closure_11(page, obj11);
    rect.children = items4;
    items3[1] = closure_11(tmp2(7286).SafeAreaPaddingView, rect);
    obj5.children = items3;
    return closure_11(page, obj5);
  }
  const tmp11 = ref(first.useState(0), 2);
};