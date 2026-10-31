// discord_app/modules/main_tabs_v2/native/tabs/messages/MessagesEmptyState.tsx
import util from "../../../../../intl/index.native.tsx";
import discord_common_AnalyticsUtils from "../../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import useNavigation from "../../../../../design/components/Navigator/native/useNavigation.native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../../design/components/Button/native/Button.native.tsx";
import useTrackImpressionDefault from "../../../../app_analytics/useTrackImpression.tsx";
import useIsScreenLandscape from "../../../../screen/useIsScreenLandscape.native.tsx";
import useYouBarTotalHeight from "../../you_bar/hooks/useYouBarTotalHeight.tsx";
import ActivitiesTogetherSpotIllustration from "../../../../../design/components/mana-assets/native/generated/ActivitiesTogetherSpotIllustration.native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5014);
let closure_8 = createStyles.createStyles({
  container: { flex: 1, justifyContent: "center" },
  scrollViewContentContainer: { flexGrow: 2 },
  innerContainer: { alignItems: "center", justifyContent: "center" },
  imageContainer: { alignItems: "center", marginBottom: 24 },
  textWrapper: { paddingHorizontal: 48 },
  body: { marginBottom: 24, textAlign: "center" },
  title: { textAlign: "center", fontSize: 18, marginBottom: 8 },
  buttonWrapper: { paddingHorizontal: 16, paddingBottom: 16 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesEmptyState.tsx");

export default function MessagesEmptyState() {
  const tmp = closure_8();
  const navigation = useNavigation.useNavigation();
  const items = [navigation];
  const callback = noop.useCallback(() => {
    navigation.navigate("friends", {
      screen: "add-friends",
      params: { sourcePage: "Messages Empty State", presentation: "card" },
    });
  }, items);
  const obj2 = { type: null, name: null };
  obj2.type = discord_common_AnalyticsUtils.ImpressionTypes.VIEW;
  obj2.name = discord_common_AnalyticsUtils.ImpressionNames.MESSAGES_EMPTY_NUX;
  useTrackImpressionDefault(obj2);
  const isScreenLandscape = useIsScreenLandscape.useIsScreenLandscape();
  useYouBarTotalHeight;
  const items1 = [tmp.scrollViewContentContainer];
  let tmp13;
  if (isScreenLandscape) {
    const obj4 = { paddingBottom: tmp10 };
    tmp13 = obj4;
  }
  const obj5 = { alwaysBounceVertical: false, bounces: false, contentContainerStyle: items1, children: null };
  items1[1] = tmp13;
  const obj6 = { style: tmp.container, children: null };
  const obj7 = { style: tmp.innerContainer, children: null };
  const items2 = [
    timestampProducer(React4, {
      style: tmp.imageContainer,
      children: timestampProducer(ActivitiesTogetherSpotIllustration.ActivitiesTogetherSpotIllustration, {
        width: 230,
        accessible: false,
      }),
    }),
  ];
  const obj9 = { style: tmp.textWrapper, children: null };
  const obj10 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: tmp.title, children: null };
  const intl = util.intl;
  obj10.children = intl.string(util.t["8JZof8"]);
  const items3 = [timestampProducer(Text_Text.Heading, obj10)];
  const obj11 = { color: "text-default", variant: "text-md/medium", style: tmp.body, children: null };
  const intl2 = util.intl;
  obj11.children = intl2.string(util.t["qm+H7x"]);
  items3[1] = timestampProducer(Text_Text.Text, obj11);
  obj9.children = items3;
  items2[1] = React5(React4, obj9);
  obj7.children = items2;
  const items4 = [React5(React4, obj7)];
  const obj12 = { style: tmp.buttonWrapper, children: null };
  const obj13 = { text: null, onPress: null, size: "lg" };
  const intl3 = util.intl;
  obj13.text = intl3.string(util.t.zIJnA6);
  obj13.onPress = callback;
  obj12.children = timestampProducer(components_Button_Button.Button, obj13);
  items4[1] = timestampProducer(React4, obj12);
  obj6.children = items4;
  obj5.children = React5(React4, obj6);
  return timestampProducer(hasOwnProperty, obj5);
}
