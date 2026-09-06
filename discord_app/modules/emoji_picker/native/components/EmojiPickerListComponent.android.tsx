// discord_app/modules/emoji_picker/native/components/EmojiPickerListComponent.android.tsx
import UnicodeEmojisDefault from "../../../emojis/UnicodeEmojis.tsx";
import ReanimatedRexport2 from "../../../reanimated/ReanimatedRexport.tsx";
import PortalToNativeViewDefault from "../../../portals/PortalToNativeView.native.tsx";
import EmojiPickerPremiumSearchUpsell from "EmojiPickerPremiumSearchUpsell.tsx";
import EmojiPickerNativeComponent2 from "../../../../../discord_common/js/packages/rtn-codegen/js/EmojiPickerNativeComponent.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import EmojiStore from "../../../emojis/EmojiStore.tsx";

const EmojiPickerNativeComponentDefault = EmojiPickerNativeComponent2;
const ReanimatedRexport = ReanimatedRexport2;

require = fn;
const EmojiCategoryTypes = fn(5463).EmojiCategoryTypes;
const IMAGE_SIZE = fn(10290).IMAGE_SIZE;
const PADDING_VERTICAL = fn(1219).PADDING_VERTICAL;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4560);
let closure_11 = createStyles.createStyles({ container: { flex: 1 } });
const EmojiPickerNativeComponent = ReanimatedRexport.createAnimatedComponent(EmojiPickerNativeComponentDefault);
const BottomSheetModal = fn(6627);
let closure_12 = BottomSheetModal.createBottomSheetScrollableComponent(
  fn(6627).SCROLLABLE_TYPE.SCROLLVIEW,
  EmojiPickerNativeComponent,
);
const MetaQuestUtils = fn(1608);
let closure_13 = MetaQuestUtils.isMetaQuest();
const __initData = {
  code: "function EmojiPickerListComponentAndroidTsx1(){const{bottomSheetIndex}=this.__closure;return bottomSheetIndex.get();}",
};
const __initData2 = {
  code: "function EmojiPickerListComponentAndroidTsx2(index){const{inPortalKeyboard,IS_META_QUEST,runOnJS,scrollingEnabled}=this.__closure;if(!inPortalKeyboard||index<0||IS_META_QUEST){return;}if(index===0){runOnJS(scrollingEnabled)(false);}else if(index===1){runOnJS(scrollingEnabled)(true);}}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponent.android.tsx");

export default noop.forwardRef((analyticsLocations, ref) => {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const bottomSheetIndex = analyticsLocations.bottomSheetIndex;
  const categoryIndexActive = analyticsLocations.categoryIndexActive;
  const data = analyticsLocations.data;
  const animateEmoji = analyticsLocations.animateEmoji;
  const guildId = analyticsLocations.guildId;
  const inPortalKeyboard = analyticsLocations.inPortalKeyboard;
  const onPressEmoji = analyticsLocations.onPressEmoji;
  const onLongPressEmoji = analyticsLocations.onLongPressEmoji;
  const onShowNitroUpsell = analyticsLocations.onShowNitroUpsell;
  const useTier0UpsellContent = analyticsLocations.useTier0UpsellContent;
  let callback1;
  ({ paddingTop, paddingBottom } = analyticsLocations);
  ref = data.useRef(null);
  const items = [ref, data];
  const effect = data.useEffect(() => {
    let hasGuildData = null != ref.current;
    if (hasGuildData) {
      hasGuildData = data.hasGuildData;
    }
    if (hasGuildData) {
      const Commands = EmojiPickerNativeComponent2.Commands;
      Commands.refreshEmojis(ref.current);
    }
  }, items);
  const scrollingEnabled = data.useCallback((arg0) => {
    if (null != ref.current) {
      const Commands = EmojiPickerNativeComponent2.Commands;
      Commands.scrollingEnabled(tmp.current, arg0);
    }
  }, []);
  let obj = analyticsLocations(categoryIndexActive[7]);
  class H {
    constructor() {
      return bottomSheetIndex.get();
    }
  }
  H.__closure = { bottomSheetIndex };
  H.__workletHash = 10656486632396;
  H.__initData = __initData;
  class D {
    constructor(arg0) {
      tmp = !inPortalKeyboard;
      if (inPortalKeyboard) {
        num = 0;
        tmp = analyticsLocations < 0;
      }
      if (!tmp) {
        tmp = closure_13;
      }
      if (!tmp) {
        num2 = 0;
        if (0 === analyticsLocations) {
          tmp6 = closure_0;
          tmp7 = closure_2;
          obj2 = closure_0(closure_2[7]);
          tmp8 = closure_12;
          flag2 = false;
          tmp9 = obj2.runOnJS(closure_12)(false);
        } else {
          num3 = 1;
          if (1 === analyticsLocations) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[7]);
            tmp4 = closure_12;
            flag = true;
            tmp5 = obj.runOnJS(closure_12)(true);
          }
        }
      }
      return;
    }
  }
  obj = {
    inPortalKeyboard,
    IS_META_QUEST: callback1,
    runOnJS: analyticsLocations(categoryIndexActive[7]).runOnJS,
    scrollingEnabled,
  };
  D.__closure = obj;
  D.__workletHash = 2460528828147;
  D.__initData = __initData2;
  const animatedReaction = obj.useAnimatedReaction(H, D);
  const items1 = [guildId];
  callback1 = data.useCallback((emojiId) => {
    emojiId = emojiId.emojiId;
    if (null != emojiId) {
      const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(guildId);
      let byId = disambiguatedEmojiContext.getById(emojiId);
    } else {
      byId = UnicodeEmojisDefault.getByName(tmp);
    }
    return byId;
  }, items1);
  const items2 = [onPressEmoji, callback1];
  const items3 = [onLongPressEmoji, callback1];
  const callback2 = data.useCallback((nativeEvent) => {
    const tmp = callback1(nativeEvent.nativeEvent);
    if (null != tmp) {
      onPressEmoji(tmp);
    }
  }, items2);
  const items4 = [categoryIndexActive];
  const callback3 = data.useCallback((nativeEvent) => {
    const tmp = callback1(nativeEvent.nativeEvent);
    if (null != tmp) {
      onLongPressEmoji(tmp);
    }
  }, items3);
  const items5 = [onShowNitroUpsell];
  const callback4 = data.useCallback((nativeEvent) => {
    const result = categoryIndexActive.set(nativeEvent.nativeEvent.index);
  }, items4);
  const callback5 = data.useCallback((nativeEvent) => {
    onShowNitroUpsell(nativeEvent.nativeEvent.showNitroUpsell);
  }, items5);
  const imperativeHandle = data.useImperativeHandle(ref, () => ({
    scrollToHeaderIndex(animated) {
      let flag = animated.animated;
      if (flag === undefined) {
        flag = true;
      }
      if (null != ref.current) {
        const Commands = analyticsLocations(categoryIndexActive[8]).Commands;
        Commands.scrollToHeaderIndex(tmp.current, animated.index, flag);
      }
    },
    forceUpdate() {},
    onStickyHeaderRendered() {},
  }));
  const items6 = [animateEmoji];
  obj = {
    config: data.useMemo(
      () => ({
        animateEmoji,
        scrollFastOptimizationEnabled: true,
        scrollFastVelocity: 8000,
        disableAnimationsOnScroll: true,
      }),
      items6,
    ),
    emojiData: data,
    emojiMargin: onPressEmoji,
    emojiSize: inPortalKeyboard,
    onPressEmoji: callback2,
    onLongPressEmoji: callback3,
    onStickyHeaderRender: callback4,
    onShowNitroUpsell: callback5,
    paddingTop,
    paddingBottom,
    useTier0UpsellContent,
    ref,
    style: ref().container,
  };
  const items7 = [guildId, analyticsLocations, useTier0UpsellContent, data.hasSearchUpsell];
  let tmp = ref();
  const obj1 = { children: null };
  const items8 = [
    onLongPressEmoji(scrollingEnabled, obj),
    data.useMemo(() => {
      let tmp = null;
      if (data.hasSearchUpsell) {
        let obj = { portalId: EmojiCategoryTypes.PREMIUM_UPSELL, children: null };
        obj = { guildId, analyticsLocations, useTier0UpsellContent };
        obj.children = React6(EmojiPickerPremiumSearchUpsell.PremiumSearchUpsell, obj);
        tmp = React6(PortalToNativeViewDefault, obj);
      }
      return tmp;
    }, items7),
  ];
  obj1.children = items8;
  return useTier0UpsellContent(onShowNitroUpsell, obj1);
});
