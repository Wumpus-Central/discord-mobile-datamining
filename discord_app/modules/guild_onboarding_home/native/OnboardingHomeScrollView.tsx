// === Module 16389: OnboardingHomeScrollView ===

// Module 16389 (OnboardingHomeScrollView)
import ThemesDefault from "Themes" /* 709 */;
import closure_2 from "noop" /* 19 */;
import { ScrollView } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

createCacheKey = { guildFeedBackground: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[0] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/guild_onboarding_home/native/OnboardingHomeScrollView.tsx");

export default function OnboardingHomeScrollView(children) {
  ({ guildId, headerOffset } = children);
  if (headerOffset === undefined) {
    headerOffset = 0;
  }
  const scrollValue = children.scrollValue;
  let React;
  let ref;
  let bottom;
  let callback;
  React = React.useRef(false);
  ref = React.useRef(null);
  bottom = headerOffset(scrollValue[5])().bottom;
  const items = [guildId];
  const effect = React.useEffect(() => {
    closure_2.current = false;
  }, items);
  callback = React.useRef(true);
  const items1 = [guildId];
  const effect1 = React.useEffect(() => {
    let current = null == ref.current;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      const current2 = ref.current;
      current2.scrollTo({ animated: false, y: 0 });
    }
    ref.current = false;
  }, items1);
  const items2 = [bottom, headerOffset];
  const tmp = callback();
  return bottom(ref, {
    ref,
    scrollIndicatorInsets: { right: 1 },
    onScroll(nativeEvent) {
      const result = scrollValue.set(nativeEvent.nativeEvent.contentOffset.y);
    },
    scrollEventThrottle: 16,
    style: callback().guildFeedBackground,
    contentContainerStyle: React.useMemo(() => ({ paddingBottom: 16 + bottom, marginTop: headerOffset }), items2),
    children: children.children
  });
};