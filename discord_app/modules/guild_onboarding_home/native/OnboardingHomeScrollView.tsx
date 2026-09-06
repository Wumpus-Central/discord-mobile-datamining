// === Module 16551: OnboardingHomeScrollView ===

// Module 16551 (OnboardingHomeScrollView)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import noop from "module_19" /* 19 */;

const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { guildFeedBackground: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.guildFeedBackground = createStyles;
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding_home/native/OnboardingHomeScrollView.tsx");

export default function OnboardingHomeScrollView(children) {
  ({ guildId, headerOffset } = children);
  if (headerOffset === undefined) {
    headerOffset = 0;
  }
  const scrollValue = children.scrollValue;
  closure_2 = noop.useRef(false);
  noop.useRef(null);
  const bottom = useSafeAreaInsetsDefault().bottom;
  const items = [guildId];
  const effect = noop.useEffect(() => {
    closure_2.current = false;
  }, items);
  const ref = noop.useRef(true);
  const items1 = [guildId];
  const effect1 = noop.useEffect(() => {
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
  const tmp = ref();
  return <ScrollView ref={ref} scrollIndicatorInsets={{ right: 1 }} onScroll={function onScroll(nativeEvent) {
    const result = scrollValue.set(nativeEvent.nativeEvent.contentOffset.y);
  }} scrollEventThrottle={16} style={ref().guildFeedBackground} contentContainerStyle={noop.useMemo(() => ({ paddingBottom: 16 + bottom, marginTop: headerOffset }), items2)}>{arg0.children}</ScrollView>;
};