// === Module 11896: PinotMemberNoticeBar ===

// Module 11896 (PinotMemberNoticeBar)
import nativeDefault from "native" /* 575 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2188 */;
import Text_Text from "Text/Text" /* 5634 */;
import LinkingDefault from "Linking" /* 5722 */;
import PinotAnalytics from "PinotAnalytics" /* 11891 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1071).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const hitSlop = { top: 8, bottom: 8, left: 8, right: 8 };
const createStyles = fn(5043);
let obj2 = { underlay: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, bar: null, text: null, link: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.bar = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, borderBottomWidth: fn(11897).PINOT_MEMBER_NOTICE_BORDER_WIDTH, borderBottomColor: nativeDefault.colors.INLINENOTICE_BORDER_INFO, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_MOD_INFO };
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
  items = [channel.id];
  const effect = handleLearnMore.useEffect(() => {
    const result = PinotAnalytics.trackPinotNoticeViewed({ noticeType: "member_channel", channel });
  }, items);
  let obj = { style: tmp.underlay, children: null };
  let obj2 = { style: tmp.bar, children: null };
  let obj3 = { variant: "body-sm/normal", color: "text-default", style: tmp.text, children: null };
  const intl = channel(1112).intl;
  obj3.children = intl.format(onDismiss(3563).Jry6Gr, {
    learnMoreHook(children, arg1) {
      return timestampProducer(Text_Text.Text, { variant: "body-sm/normal", color: "text-default", style: link.link, accessibilityRole: "link", onPress: handleLearnMore, children }, arg1);
    }
  });
  const items1 = [closure_6(channel(5634).Text, obj3), ];
  const obj5 = { accessibilityRole: "button", accessibilityLabel: null, hitSlop: null, onPress: null, children: null };
  const intl2 = channel(1112).intl;
  obj5.accessibilityLabel = intl2.string(channel(1112).t.WAI6xu);
  obj5.hitSlop = hitSlop;
  obj5.onPress = function handleDismiss() {
    const result = PinotAnalytics.trackPinotNoticeAction({ noticeType: "member_channel", channel }, "dismiss");
    onDismiss();
  };
  obj5.children = closure_6(channel(7247).XSmallIcon, { size: "sm", color: "icon-muted" });
  items1[1] = closure_6(channel(6152).PressableOpacity, obj5);
  obj2.children = items1;
  obj.children = closure_7(View, obj2);
  return closure_6(View, obj);
}