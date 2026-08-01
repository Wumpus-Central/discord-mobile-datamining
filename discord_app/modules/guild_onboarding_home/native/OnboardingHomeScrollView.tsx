// === Module 15443: OnboardingHomeScrollView ===

// Module 15443 (OnboardingHomeScrollView)
import noop from "noop";
import { ScrollView } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

createCacheKey = { guildFeedBackground: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("jsxProd").fileFinishedImporting("modules/guild_onboarding_home/native/OnboardingHomeScrollView.tsx");

export default function OnboardingHomeScrollView(children) {
  let guildId;
  let headerOffset;
  ({ guildId, headerOffset } = children);
  if (headerOffset === undefined) {
    headerOffset = 0;
  }
  const scrollValue = children.scrollValue;
  let React;
  let ref;
  let bottom;
  let createCacheKey;
  React = React.useRef(false);
  ref = React.useRef(null);
  bottom = headerOffset(scrollValue[5])().bottom;
  const items = [guildId];
  const effect = React.useEffect(() => {
    noop.current = false;
  }, items);
  createCacheKey = React.useRef(true);
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
  const tmp = createCacheKey();
  return bottom(ref, {
    ref,
    scrollIndicatorInsets: { right: 1 },
    onScroll(nativeEvent) {
      const result = scrollValue.set(nativeEvent.nativeEvent.contentOffset.y);
    },
    scrollEventThrottle: 16,
    style: createCacheKey().guildFeedBackground,
    contentContainerStyle: React.useMemo(() => ({ paddingBottom: 16 + bottom, marginTop: headerOffset }), items2),
    children: children.children
  });
};