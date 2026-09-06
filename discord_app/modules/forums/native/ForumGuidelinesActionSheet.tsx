// === Module 10267: ForumGuidelinesActionSheet ===

// Module 10267 (ForumGuidelinesActionSheet)
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import LinkUtils from "LinkUtils" /* 4714 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 8625 */;
import ForumGuidelinesManagerDefault from "ForumGuidelinesManager" /* 10269 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
let closure_6 = fn(7273).FORUM_GUIDELINES_ACTION_SHEET;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
fn(4560);
let createStyles = { scrollContainer: { paddingHorizontal: 16 }, header: { alignItems: "center", paddingTop: 20, paddingBottom: 24 }, headerTitle: { marginTop: 8 }, guidelinesContainer: null, footer: null, buttonWrapper: null, buttonPill: null, floatingButtonContainer: null, editButton: null, editText: null, editIcon: null };
createStyles = { padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm };
createStyles.guidelinesContainer = createStyles;
createStyles.footer = { paddingBottom: 16 };
createStyles.buttonWrapper = { marginHorizontal: 16 };
createStyles.buttonPill = { borderRadius: nativeDefault.radii.sm };
const rect = { marginTop: 16, position: "absolute", left: 16, right: 16, shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.25, shadowRadius: 4, borderRadius: nativeDefault.radii.sm };
createStyles.floatingButtonContainer = rect;
createStyles.editButton = { display: "flex", flexDirection: "row", alignItems: "center", position: "absolute", top: 12, right: 0 };
createStyles.editText = { marginRight: 4 };
let obj1 = { borderRadius: nativeDefault.radii.sm };
createStyles.editIcon = { color: nativeDefault.colors.TEXT_BRAND };
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/ForumGuidelinesActionSheet.tsx");

export default function ForumGuidelinesActionSheet(channel) {
  channel = channel.channel;
  const onPress = channel.onPress;
  let bottom;
  let first;
  noop = undefined;
  closure_5 = undefined;
  let pathname;
  let ref;
  const tmp = closure_10();
  let obj = channel(bottom[7]);
  const canManageChannel = obj.useCanManageChannel(channel);
  bottom = onPress(bottom[8])().bottom;
  let obj1 = noop;
  const tmp6 = first(noop.useState(), 2);
  first = tmp6[0];
  noop = tmp6[1];
  const items = [bottom, first];
  const memo = noop.useMemo(() => {
    let sum;
    if (null != first) {
      let num = 0;
      if (obj.isAndroid()) {
        num = bottom;
      }
      sum = 72 + num + tmp + bottom;
      obj = PlatformUtils;
    }
    return sum;
  }, items);
  let num = memo;
  if (memo == null) {
    num = 0;
  }
  let tmp21Result = onPress(bottom[9])() < num;
  closure_5 = tmp21Result;
  let tmp11;
  if (!tmp21Result) {
    tmp11 = memo;
  }
  function handlePress() {
    if (onPress != null) {
      tmp();
    }
    ActionSheetActionCreatorsDefault.hideActionSheet(closure_6);
  }
  const items1 = [first];
  const items2 = [channel.id];
  const callback = obj1.useCallback((arg0, arg1) => {
    if (arg1 !== first) {
      closure_4(arg1);
    }
  }, items1);
  const effect = obj1.useEffect(() => {
    ForumGuidelinesManagerDefault.markAsSeen(channel.id);
  }, items2);
  let tmp14 = !tmp21Result;
  if (!tmp21Result) {
    obj = { bottom: true, style: tmp.footer, children: null };
    obj = { grow: true, text: null, onPress: null, style: null, pillStyle: null };
    const intl = tmp2(tmp3[15]).intl;
    obj.text = intl.string(tmp2(tmp3[15]).t["NX+WJN"]);
    obj.onPress = handlePress;
    ({ buttonWrapper: obj4.style, buttonPill: obj4.pillStyle } = tmp);
    obj.children = ref(tmp2(tmp3[14]).BaseTextButton, obj);
    tmp14 = ref(tmp2(tmp3[13]).SafeAreaPaddingView, obj);
  }
  const items3 = [bottom, tmp21Result];
  const memo1 = obj1.useMemo(() => {
    let num = 0;
    if (closure_5) {
      num = bottom + 40 + 32;
    }
    return num;
  }, items3);
  const tmp8 = onPress(bottom[9])();
  pathname = channel(bottom[16]).useLocation().pathname;
  ref = obj1.useRef(true);
  const items4 = [pathname, channel.id];
  const effect1 = obj1.useEffect(() => {
    const tryParseChannelPathResult = LinkUtils.tryParseChannelPath(pathname);
    if (!ref.current) {
      if (null != tryParseChannelPathResult) {
        if (tryParseChannelPathResult.channelId !== channel.id) {
          ActionSheetActionCreatorsDefault.hideActionSheet(closure_6);
        }
      }
    }
    ref.current = false;
  }, items4);
  const items5 = [channel.id];
  const callback1 = obj1.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet(closure_6);
    ChannelSettingsActionCreatorsDefault.open(channel.id);
  }, items5);
  obj1 = { scrollable: true, contentHeight: tmp11, footer: tmp14, onDismiss: channel.onClose, children: null };
  let obj2 = { style: tmp.scrollContainer, scrollIndicatorInsets: { bottom }, contentContainerStyle: { paddingBottom: memo1 }, onContentSizeChange: callback, children: null };
  const obj3 = { style: tmp.header, children: null };
  let tmp19Result = canManageChannel;
  if (canManageChannel) {
    const obj4 = { accessibilityLabel: null, accessibilityRole: "button", style: null, onPress: null, children: null };
    const intl2 = tmp2(tmp3[15]).intl;
    obj4.accessibilityLabel = intl2.string(tmp2(tmp3[15]).t.bt75uw);
    obj4.style = tmp.editButton;
    obj4.onPress = callback1;
    const obj5 = { style: tmp.editText, variant: "text-sm/medium", color: "text-brand", children: null };
    const intl3 = tmp2(tmp3[15]).intl;
    obj5.children = intl3.string(tmp2(tmp3[15]).t.bt75uw);
    const items6 = [tmp21(tmp2(tmp3[22]).Text, obj5), ];
    const obj6 = { color: tmp.editIcon.color, size: "xs" };
    items6[1] = tmp21(tmp2(tmp3[23]).PencilIcon, obj6);
    obj4.children = items6;
    tmp19Result = closure_8(tmp2(tmp3[21]).PressableOpacity, obj4);
  }
  const items7 = [tmp19Result, , ];
  const obj7 = { IconComponent: null };
  let tmp5Result = tmp5(tmp3[24]);
  obj7.IconComponent = channel(bottom[25]).BookCheckIcon;
  items7[1] = ref(tmp5Result, obj7);
  const obj8 = { style: tmp.headerTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl4 = tmp2(tmp3[15]).intl;
  obj8.children = intl4.string(channel(bottom[15]).t["4d4T4l"]);
  items7[2] = ref(channel(bottom[22]).Text, obj8);
  obj3.children = items7;
  const items8 = [closure_8(closure_5, obj3), ];
  const obj9 = { style: tmp.guidelinesContainer, children: null };
  const obj10 = { variant: "text-md/medium", color: "text-default", children: null };
  tmp5Result = tmp5(tmp3[26]);
  obj10.children = tmp5Result.parseForumPostGuidelines(channel.topic, true, { channelId: channel.id, allowHeading: true, allowList: true, allowLinks: true });
  obj9.children = ref(channel(bottom[22]).Text, obj10);
  items8[1] = ref(closure_5, obj9);
  obj2.children = items8;
  obj1.children = closure_8(channel(bottom[20]).BottomSheetScrollView, obj2);
  const children = [ref(channel(bottom[19]).BottomSheet, obj1), ];
  if (tmp21Result) {
    const obj12 = { grow: true, style: null, pillStyle: null, text: null, onPress: null };
    const items10 = [tmp.floatingButtonContainer, ];
    const obj13 = { bottom: bottom + 16 };
    items10[1] = obj13;
    obj12.style = items10;
    obj12.pillStyle = tmp.buttonPill;
    const intl5 = tmp2(tmp3[15]).intl;
    obj12.text = intl5.string(tmp2(tmp3[15]).t["NX+WJN"]);
    obj12.onPress = handlePress;
    tmp21Result = tmp21(tmp2(tmp3[14]).BaseTextButton, obj12);
  }
  children[1] = tmp21Result;
  return closure_8(closure_9, { children });
};
export const openForumGuidelinesActionSheet = function openForumGuidelinesActionSheet(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.openLazy(asyncRequireImpl(10267, dependencyMap.paths), closure_6, obj);
};