// === Module 15112: SettingsAppearanceActivityCardsItem ===

// Module 15112 (SettingsAppearanceActivityCardsItem)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import SettingsAppearanceActivityCardItemDefault from "SettingsAppearanceActivityCardItem" /* 15113 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let animatedStyles;
  let cards;
  let first;
  let tmp6;
  let tmp7;
  const obj = animatedStyles(576);
  const cResult = obj.c(7);
  ({ cards, animatedStyles } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== animatedStyles) {
    const fn = function s(item) {
      item = item.item;
      SettingsAppearanceActivityCardItemDefault;
      const merged = Object.assign(item);
      return <tmp animatedStyles={animatedStyles} />;
    };
    cResult[1] = animatedStyles;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function c(title) {
      return title.title;
    };
    cResult[3] = fn2;
    tmp7 = fn2;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === cards) {
    let tmp8;
    if (cResult[5] === tmp6) {
      tmp8 = cResult[6];
    }
    return tmp8;
  }
  const tmp9 = jsx(animatedStyles(8371).FlashList, { contentContainerStyle: first, data: cards, renderItem: tmp6, keyExtractor: tmp7, showsHorizontalScrollIndicator: false, horizontal: true });
  cResult[4] = cards;
  cResult[5] = tmp6;
  cResult[6] = tmp9;
  tmp8 = tmp9;
}) : ((animatedStyles) => {
  animatedStyles = animatedStyles.animatedStyles;
  const cards = animatedStyles.cards;
  const obj2 = { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
  const FlashList = animatedStyles(8371).FlashList;
  return <FlashList contentContainerStyle={obj2} data={cards} renderItem={function renderItem(item) {
    item = item.item;
    SettingsAppearanceActivityCardItemDefault;
    const merged = Object.assign(item);
    return <tmp animatedStyles={animatedStyles} />;
  }} keyExtractor={function keyExtractor(title) {
    return title.title;
  }} showsHorizontalScrollIndicator={false} horizontal />;
});
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceActivityCardsItem.tsx");

export default tmp3;