// === Module 11344: PinotMemberNoticeBar ===

// Module 11344 (PinotMemberNoticeBar)
import nativeDefault from "native" /* 575 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2061 */;
import Text_Text from "Text/Text" /* 5624 */;
import LinkingDefault from "Linking" /* 5709 */;
import PinotAnalytics from "PinotAnalytics" /* 11335 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1072).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const hitSlop = { top: 8, bottom: 8, left: 8, right: 8 };
const createStyles = fn(5014);
let obj2 = { underlay: { backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND }, bar: null, text: null, link: null };
let obj3 = { backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
obj2.bar = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, borderTopWidth: 1, borderBottomWidth: 1, borderTopColor: nativeDefault.colors.BORDER_FEEDBACK_INFO, borderBottomColor: nativeDefault.colors.BORDER_FEEDBACK_INFO, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO };
obj2.text = { flex: 1 };
obj2.link = { textDecorationLine: "underline" };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/pinot/native/PinotMemberNoticeBar.tsx");

export function PinotMemberNoticeBar(channel) {
  channel = channel.channel;
  const onDismiss = channel.onDismiss;
  function handleLearnMore() {
    const result = PinotAnalytics.trackPinotNoticeAction({ noticeType: "member_channel", channel }, "learn_more");
    const obj2 = { noticeType: "member_channel", channel };
    const obj3 = LinkingDefault;
    obj3.openURL(HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.DISCOVERABLE_CONTENT_ON_THE_WEB));
  }
  const tmp = closure_9();
  dependencyMap = tmp;
  const items = [channel.id];
  const effect = handleLearnMore.useEffect(() => {
    const result = PinotAnalytics.trackPinotNoticeViewed({ noticeType: "member_channel", channel });
  }, items);
  let obj = { style: tmp.underlay, children: null };
  let obj2 = { style: tmp.bar, children: null };
  let obj3 = { variant: "text-sm/normal", color: "text-default", style: tmp.text, children: null };
  const intl = channel(1113).intl;
  obj3.children = intl.format(onDismiss(3160).Jry6Gr, {
    learnMoreHook(children, arg1) {
      return timestampProducer(Text_Text.Text, { variant: "text-sm/normal", color: "text-default", style: link.link, accessibilityRole: "link", onPress: handleLearnMore, children }, arg1);
    }
  });
  const items1 = [closure_6(channel(5624).Text, obj3), ];
  const obj5 = { accessibilityRole: "button", accessibilityLabel: null, hitSlop: null, onPress: null, children: null };
  const intl2 = channel(1113).intl;
  obj5.accessibilityLabel = intl2.string(channel(1113).t.WAI6xu);
  obj5.hitSlop = hitSlop;
  obj5.onPress = function handleDismiss() {
    const result = PinotAnalytics.trackPinotNoticeAction({ noticeType: "member_channel", channel }, "dismiss");
    onDismiss();
  };
  obj5.children = closure_6(channel(7054).XSmallIcon, { size: "sm", color: "icon-muted" });
  items1[1] = closure_6(channel(6980).PressableOpacity, obj5);
  obj2.children = items1;
  obj.children = closure_7(View, obj2);
  return closure_6(View, obj);
}