// === Module 9940: EmojiPickerListComponent ===

// Module 9940 (EmojiPickerListComponent)
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1229 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4529 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4618 */;
import EmojiPickerConstants from "EmojiPickerConstants" /* 5649 */;
import PortalToNativeViewDefault from "PortalToNativeView" /* 6574 */;
import EmojiPickerListConstants from "EmojiPickerListConstants" /* 9882 */;
import EmojiPickerPremiumSearchUpsell from "EmojiPickerPremiumSearchUpsell" /* 9929 */;
import EmojiPickerNativeComponent2 from "EmojiPickerNativeComponent" /* 9941 */;
import react from "react" /* 19 */;
import EmojiStore from "EmojiStore" /* 5645 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import BottomSheetModal from "BottomSheetModal" /* 6119 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1615 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const EmojiPickerNativeComponentDefault = EmojiPickerNativeComponent2;
const ReanimatedRexport = ReanimatedRexport2;

let c10;
let c9;
let metroImportAll;
const EmojiCategoryTypes = EmojiPickerConstants.EmojiCategoryTypes;
const IMAGE_SIZE = EmojiPickerListConstants.IMAGE_SIZE;
const PADDING_VERTICAL = ExpressionPickerConstants.PADDING_VERTICAL;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({ container: { flex: 1 } });
const EmojiPickerNativeComponent = ReanimatedRexport.createAnimatedComponent(EmojiPickerNativeComponentDefault);
let closure_12 = BottomSheetModal.createBottomSheetScrollableComponent(BottomSheetModal.SCROLLABLE_TYPE.SCROLLVIEW, EmojiPickerNativeComponent);
const IS_META_QUEST = MetaQuestUtils.isMetaQuest();
const __initData = { code: "function EmojiPickerListComponentAndroidTsx1(){const{bottomSheetIndex}=this.__closure;return bottomSheetIndex.get();}" };
const __initData2 = { code: "function EmojiPickerListComponentAndroidTsx2(index){const{inPortalKeyboard,IS_META_QUEST,runOnJS,scrollingEnabled}=this.__closure;if(!inPortalKeyboard||index<0||IS_META_QUEST){return;}if(index===0){runOnJS(scrollingEnabled)(false);}else{if(index===1){runOnJS(scrollingEnabled)(true);}}}" };
const __initData3 = { code: "function EmojiPickerListComponentAndroidTsx3(){const{bottomSheetIndex}=this.__closure;return bottomSheetIndex.get();}" };
const __initData4 = { code: "function EmojiPickerListComponentAndroidTsx4(index){const{inPortalKeyboard,IS_META_QUEST,runOnJS,scrollingEnabled}=this.__closure;if(!inPortalKeyboard||index<0||IS_META_QUEST){return;}if(index===0){runOnJS(scrollingEnabled)(false);}else if(index===1){runOnJS(scrollingEnabled)(true);}}" };
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((categoryIndexActive, arg1) => {
  let analyticsLocations;
  let animateEmoji;
  let bottomSheetIndex;
  let data;
  let guildId;
  let onPressEmoji;
  let paddingBottom;
  let paddingTop;
  let tmp6;
  let tmp7;
  const tmp2 = data;
  let obj = bottomSheetIndex(data[12]);
  const cResult = obj.c(38);
  ({ analyticsLocations, bottomSheetIndex } = categoryIndexActive);
  categoryIndexActive = categoryIndexActive.categoryIndexActive;
  data = categoryIndexActive.data;
  ({ animateEmoji, guildId } = categoryIndexActive);
  const inPortalKeyboard = categoryIndexActive.inPortalKeyboard;
  ({ paddingTop, paddingBottom, onPressEmoji } = categoryIndexActive);
  const onLongPressEmoji = categoryIndexActive.onLongPressEmoji;
  const onShowNitroUpsell = categoryIndexActive.onShowNitroUpsell;
  const useTier0UpsellContent = categoryIndexActive.useTier0UpsellContent;
  const tmp4 = closure_11();
  const ref = guildId.useRef(null);
  if (cResult[0] !== data.hasGuildData) {
    const fn = function f() {
      const hasGuildData = null != ref.current && data.hasGuildData;
      if (hasGuildData) {
        const Commands = EmojiPickerNativeComponent2.Commands;
        Commands.refreshEmojis(ref.current);
      }
    };
    cResult[0] = data.hasGuildData;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== data) {
    const items = [ref, data];
    cResult[2] = data;
    cResult[3] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[3];
  }
  const effect = guildId.useEffect(tmp6, tmp7);
  function scrollingEnabled(arg0) {
    if (null != ref.current) {
      const Commands = EmojiPickerNativeComponent2.Commands;
      Commands.scrollingEnabled(tmp.current, arg0);
    }
  }
  const tmpResult = bottomSheetIndex(tmp2[7]);
  class B {
    constructor() {
      return bottomSheetIndex.get();
    }
  }
  B.__closure = { bottomSheetIndex };
  B.__workletHash = 10656486632396;
  B.__initData = __initData;
  class N {
    constructor(arg0) {
      let tmp = !inPortalKeyboard;
      if (inPortalKeyboard) {
        tmp = arg0 < 0;
      }
      if (!tmp) {
        tmp = IS_META_QUEST;
      }
      if (!tmp) {
        if (0 === arg0) {
          const obj2 = ReanimatedRexport2;
          obj2.runOnJS(scrollingEnabled)(false);
        } else if (1 === arg0) {
          const obj = ReanimatedRexport2;
          obj.runOnJS(scrollingEnabled)(true);
        }
      }
    }
  }
  N.__closure = { inPortalKeyboard, IS_META_QUEST, runOnJS: bottomSheetIndex(tmp2[7]).runOnJS, scrollingEnabled };
  N.__workletHash = 11529436039893;
  N.__initData = __initData2;
  ({ inPortalKeyboard, IS_META_QUEST, runOnJS: bottomSheetIndex(tmp2[7]).runOnJS, scrollingEnabled });
  const animatedReaction = tmpResult.useAnimatedReaction(B, N);
  if (cResult[4] !== guildId) {
    class K {
      constructor(emojiId) {
        let byId;
        emojiId = emojiId.emojiId;
        if (null != emojiId) {
          const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(guildId);
          byId = disambiguatedEmojiContext.getById(emojiId);
        } else {
          const obj = UnicodeEmojisDefault;
          byId = obj.getByName(tmp);
        }
        return byId;
      }
    }
    cResult[4] = guildId;
    cResult[5] = K;
  } else {
    class K {
      constructor(emojiId) {
        let byId;
        emojiId = emojiId.emojiId;
        if (null != emojiId) {
          const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(guildId);
          byId = disambiguatedEmojiContext.getById(emojiId);
        } else {
          const obj = UnicodeEmojisDefault;
          byId = obj.getByName(tmp);
        }
        return byId;
      }
    }
  }
  K = tmp10;
  if (cResult[6] === tmp10) {
    class K {
      constructor(emojiId) {
        let byId;
        emojiId = emojiId.emojiId;
        if (null != emojiId) {
          const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(guildId);
          byId = disambiguatedEmojiContext.getById(emojiId);
        } else {
          const obj = UnicodeEmojisDefault;
          byId = obj.getByName(tmp);
        }
        return byId;
      }
    }
    if (cResult[9] === tmp10) {
      class K {
        constructor(emojiId) {
          let byId;
          emojiId = emojiId.emojiId;
          if (null != emojiId) {
            const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(guildId);
            byId = disambiguatedEmojiContext.getById(emojiId);
          } else {
            const obj = UnicodeEmojisDefault;
            byId = obj.getByName(tmp);
          }
          return byId;
        }
      }
      if (cResult[12] !== categoryIndexActive) {
        class V {
          constructor(nativeEvent) {
            const result = categoryIndexActive.set(nativeEvent.nativeEvent.index);
          }
        }
        class G {
          constructor(nativeEvent) {
            const tmp = K(nativeEvent.nativeEvent);
            if (null != tmp) {
              onLongPressEmoji(tmp);
            }
          }
        }
        cResult[13] = V;
      } else {
        class V {
          constructor(nativeEvent) {
            const result = categoryIndexActive.set(nativeEvent.nativeEvent.index);
          }
        }
      }
      class G {
        constructor(nativeEvent) {
          const tmp = K(nativeEvent.nativeEvent);
          if (null != tmp) {
            onLongPressEmoji(tmp);
          }
        }
      }
      const _Symbol = Symbol;
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor(nativeEvent) {
            const result = categoryIndexActive.set(nativeEvent.nativeEvent.index);
          }
        }
        class G {
          constructor(nativeEvent) {
            const tmp = K(nativeEvent.nativeEvent);
            if (null != tmp) {
              onLongPressEmoji(tmp);
            }
          }
        }
      } else {
        class V {
          constructor(nativeEvent) {
            const result = categoryIndexActive.set(nativeEvent.nativeEvent.index);
          }
        }
      }
      const imperativeHandle = guildId.useImperativeHandle(arg1, tmp17);
      if (cResult[17] !== animateEmoji) {
        class V {
          constructor(nativeEvent) {
            const result = categoryIndexActive.set(nativeEvent.nativeEvent.index);
          }
        }
        tmp21[0] = animateEmoji;
        class G {
          constructor(nativeEvent) {
            const tmp = K(nativeEvent.nativeEvent);
            if (null != tmp) {
              onLongPressEmoji(tmp);
            }
          }
        }
        cResult[17] = animateEmoji;
        cResult[18] = tmp21;
      } else {
        class V {
          constructor(nativeEvent) {
            const result = categoryIndexActive.set(nativeEvent.nativeEvent.index);
          }
        }
      }
      if (cResult[19] === tmp21) {
        class V {
          constructor(nativeEvent) {
            const result = categoryIndexActive.set(nativeEvent.nativeEvent.index);
          }
        }
      }
      const obj4 = { config: tmp21, emojiData: data, emojiMargin: onShowNitroUpsell, emojiSize: onLongPressEmoji, onPressEmoji: Q, onLongPressEmoji: G, onStickyHeaderRender: V, onShowNitroUpsell: tmp14, paddingTop, paddingBottom, useTier0UpsellContent, ref, style: tmp4.container };
      cResult[19] = tmp21;
      cResult[20] = data;
      cResult[21] = G;
      cResult[22] = Q;
      const tmp27 = ref(closure_12, obj4);
      class B {
        constructor() {
          return bottomSheetIndex.get();
        }
      }
      cResult[24] = V;
      cResult[25] = paddingBottom;
      cResult[26] = paddingTop;
      class N {
        constructor(arg0) {
          let tmp = !inPortalKeyboard;
          if (inPortalKeyboard) {
            tmp = arg0 < 0;
          }
          if (!tmp) {
            tmp = IS_META_QUEST;
          }
          if (!tmp) {
            if (0 === arg0) {
              const obj2 = ReanimatedRexport2;
              obj2.runOnJS(scrollingEnabled)(false);
            } else if (1 === arg0) {
              const obj = ReanimatedRexport2;
              obj.runOnJS(scrollingEnabled)(true);
            }
          }
        }
      }
      cResult[28] = useTier0UpsellContent;
      cResult[29] = tmp27;
    }
    class G {
      constructor(nativeEvent) {
        const tmp = K(nativeEvent.nativeEvent);
        if (null != tmp) {
          onLongPressEmoji(tmp);
        }
      }
    }
    cResult[9] = tmp10;
    cResult[10] = onLongPressEmoji;
    cResult[11] = G;
  }
  class Q {
    constructor(nativeEvent) {
      const tmp = K(nativeEvent.nativeEvent);
      if (null != tmp) {
        onPressEmoji(tmp);
      }
    }
  }
  cResult[6] = tmp10;
  cResult[7] = onPressEmoji;
  cResult[8] = Q;
}) : ((analyticsLocations, arg1) => {
  let items8;
  let paddingBottom;
  let paddingTop;
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
  let ref;
  let callback1;
  ({ paddingTop, paddingBottom } = analyticsLocations);
  let tmp = ref();
  ref = data.useRef(null);
  const items = [ref, data];
  const effect = data.useEffect(() => {
    const hasGuildData = null != ref.current && data.hasGuildData;
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
  H.__workletHash = 5721747051790;
  H.__initData = __initData3;
  class D {
    constructor(arg0) {
      let tmp = !inPortalKeyboard;
      if (inPortalKeyboard) {
        tmp = arg0 < 0;
      }
      if (!tmp) {
        tmp = IS_META_QUEST;
      }
      if (!tmp) {
        if (0 === arg0) {
          const obj2 = ReanimatedRexport2;
          obj2.runOnJS(callback)(false);
        } else if (1 === arg0) {
          const obj = ReanimatedRexport2;
          obj.runOnJS(callback)(true);
        }
      }
    }
  }
  let obj2 = { inPortalKeyboard, IS_META_QUEST: callback1, runOnJS: analyticsLocations(categoryIndexActive[7]).runOnJS, scrollingEnabled };
  D.__closure = obj2;
  D.__workletHash = 3717292116277;
  D.__initData = __initData4;
  const animatedReaction = obj.useAnimatedReaction(H, D);
  const items1 = [guildId];
  callback1 = data.useCallback((emojiId) => {
    let byId;
    emojiId = emojiId.emojiId;
    if (null != emojiId) {
      const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(guildId);
      byId = disambiguatedEmojiContext.getById(emojiId);
    } else {
      const obj = UnicodeEmojisDefault;
      byId = obj.getByName(tmp);
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
  const imperativeHandle = data.useImperativeHandle(arg1, () => ({
    scrollToHeaderIndex(animated) {
      let flag = animated.animated;
      const index = animated.index;
      if (flag === undefined) {
        flag = true;
      }
      if (null != ref.current) {
        const Commands = analyticsLocations(categoryIndexActive[8]).Commands;
        Commands.scrollToHeaderIndex(tmp.current, index, flag);
      }
    },
    forceUpdate() {

    },
    onStickyHeaderRendered() {

    }
  }));
  const items6 = [animateEmoji];
  const items7 = [guildId, analyticsLocations, useTier0UpsellContent, data.hasSearchUpsell];
  const obj3 = { config: data.useMemo(() => ({ animateEmoji, scrollFastOptimizationEnabled: true, scrollFastVelocity: 8000, disableAnimationsOnScroll: true }), items6), emojiData: data, emojiMargin: onPressEmoji, emojiSize: inPortalKeyboard, onPressEmoji: callback2, onLongPressEmoji: callback3, onStickyHeaderRender: callback4, onShowNitroUpsell: callback5, paddingTop, paddingBottom, useTier0UpsellContent, ref, style: tmp.container };
  const obj4 = { children: items8 };
  items8 = [onLongPressEmoji(scrollingEnabled, obj3), ];
  onLongPressEmoji(scrollingEnabled, obj3);
  items8[1] = data.useMemo(() => {
    let obj2;
    let tmp = null;
    if (data.hasSearchUpsell) {
      const obj = { portalId: EmojiCategoryTypes.PREMIUM_UPSELL, children: metroImportAll(EmojiPickerPremiumSearchUpsell.PremiumSearchUpsell, obj2) };
      obj2 = { guildId, analyticsLocations, useTier0UpsellContent };
      const tmp5 = PortalToNativeViewDefault;
      tmp = metroImportAll(tmp5, obj);
    }
    return tmp;
  }, items7);
  return useTier0UpsellContent(onShowNitroUpsell, obj4);
}));
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponent.android.tsx");

export default forwardRefResult;