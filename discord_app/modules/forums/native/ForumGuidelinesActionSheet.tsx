// === Module 10089: ForumGuidelinesActionSheet ===

// Module 10089 (ForumGuidelinesActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import LinkUtils from "LinkUtils" /* 5050 */;
import ForumConstants from "ForumConstants" /* 6786 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 10075 */;
import ForumGuidelinesManagerDefault from "ForumGuidelinesManager" /* 10091 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, channel, hideActionSheetResult, markAsSeenResult, tmpResult;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let rect;
let react = react_mod;
const View = react_native.View;
let closure_6 = ForumConstants.FORUM_GUIDELINES_ACTION_SHEET;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { scrollContainer: { paddingHorizontal: 16 }, header: { alignItems: "center", paddingTop: 20, paddingBottom: 24 }, headerTitle: { marginTop: 8 }, guidelinesContainer: obj2, footer: { paddingBottom: 16 }, buttonWrapper: { marginHorizontal: 16 }, buttonPill: obj3, floatingButtonContainer: rect, editButton: { display: "flex", flexDirection: "row", alignItems: "center", position: "absolute", top: 12, right: 0 }, editText: { marginRight: 4 }, editIcon: obj4 };
obj2 = { padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.sm };
rect = { marginTop: 16, position: "absolute", left: 16, right: 16, shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.25, shadowRadius: 4, borderRadius: nativeDefault.radii.sm };
obj4 = { color: nativeDefault.colors.TEXT_BRAND };
let closure_10 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let BaseTextButton;
  let closure_3;
  let first;
  let intl;
  let obj8;
  let ref;
  const tmp = channel;
  let obj = channel(first[8]);
  const cResult = obj.c(68);
  channel = channel.channel;
  const onPress = channel.onPress;
  const tmp4 = closure_10();
  let obj2 = channel(first[9]);
  const canManageChannel = obj2.useCanManageChannel(channel);
  const bottom = onPress(first[10])().bottom;
  [first, _slicedToArray] = react.useState();
  if (cResult[0] === bottom) {
    let tmp9;
    let tmp16;
    if (cResult[1] === first) {
      tmp9 = cResult[2];
    }
    let num3 = tmp9;
    if (tmp9 == null) {
      num3 = 0;
    }
    if (cResult[3] !== first) {
      class R {
        constructor(arg0, arg1) {
          if (arg1 !== closure_2) {
            tmp = closure_3;
            tmp2 = closure_3(arg1);
          }
          return;
        }
      }
      cResult[3] = first;
      cResult[4] = R;
    } else {
      class R {
        constructor(arg0, arg1) {
          if (arg1 !== closure_2) {
            tmp = closure_3;
            tmp2 = closure_3(arg1);
          }
          return;
        }
      }
    }
    if (cResult[5] !== channel.id) {
      class E {
        constructor() {
          obj = closure_1(closure_2[13]);
          markAsSeenResult = obj.markAsSeen(channel.id);
          return;
        }
      }
      const items = [channel.id];
      cResult[5] = channel.id;
      cResult[6] = E;
      cResult[7] = items;
      tmp16 = items;
    } else {
      class E {
        constructor() {
          obj = closure_1(closure_2[13]);
          markAsSeenResult = obj.markAsSeen(channel.id);
          return;
        }
      }
      tmp16 = cResult[7];
    }
    const effect = react.useEffect(E, tmp16);
    if (cResult[8] !== onPress) {
      class F {
        constructor() {
          if (onPress != null) {
            tmpResult = tmp();
          }
          obj = closure_1(closure_2[14]);
          hideActionSheetResult = obj.hideActionSheet(closure_6);
          return;
        }
      }
      cResult[8] = onPress;
      cResult[9] = F;
    } else {
      class F {
        constructor() {
          if (onPress != null) {
            tmpResult = tmp();
          }
          obj = closure_1(closure_2[14]);
          hideActionSheetResult = obj.hideActionSheet(closure_6);
          return;
        }
      }
    }
    if (cResult[10] === tmp8 < num3) {
      class F {
        constructor() {
          if (onPress != null) {
            tmpResult = tmp();
          }
          obj = closure_1(closure_2[14]);
          hideActionSheetResult = obj.hideActionSheet(closure_6);
          return;
        }
      }
    }
    let tmp20 = !tmp12;
    if (tmp20) {
      class F {
        constructor() {
          if (onPress != null) {
            tmpResult = tmp();
          }
          obj = closure_1(closure_2[14]);
          hideActionSheetResult = obj.hideActionSheet(closure_6);
          return;
        }
      }
      const obj5 = { bottom: true, style: tmp4.footer, children: closure_7(BaseTextButton, obj8) };
      const SafeAreaPaddingView = tmp(tmp2[15]).SafeAreaPaddingView;
      obj8 = { grow: true, text: intl.string(tmp(first[17]).t["NX+WJN"]), onPress: F, style: null, pillStyle: null };
      BaseTextButton = tmp(tmp2[16]).BaseTextButton;
      intl = tmp(tmp2[17]).intl;
      ({ buttonWrapper: obj6.style, buttonPill: obj6.pillStyle } = tmp4);
      tmp20 = closure_7(SafeAreaPaddingView, obj5);
    }
    cResult[10] = tmp8 < num3;
    cResult[11] = F;
    cResult[12] = tmp4.buttonPill;
    cResult[13] = tmp4.buttonWrapper;
    cResult[14] = tmp4.footer;
    cResult[15] = tmp20;
  }
  let sum;
  if (null != first) {
    class F {
      constructor() {
        if (onPress != null) {
          tmpResult = tmp();
        }
        obj = closure_1(closure_2[14]);
        hideActionSheetResult = obj.hideActionSheet(closure_6);
        return;
      }
    }
    if (obj4.isAndroid()) {
      class F {
        constructor() {
          if (onPress != null) {
            tmpResult = tmp();
          }
          obj = closure_1(closure_2[14]);
          hideActionSheetResult = obj.hideActionSheet(closure_6);
          return;
        }
      }
    }
    sum = 72 + num + first + bottom;
  }
  cResult[0] = bottom;
  cResult[1] = first;
  cResult[2] = sum;
  tmp9 = sum;
}) : ((channel) => {
  let BaseTextButton;
  let BottomSheetScrollView;
  let Text3;
  let closure_4;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items10;
  let items6;
  let items7;
  let items8;
  let obj14;
  let obj15;
  let obj5;
  let obj7;
  let tmp5Result;
  channel = channel.channel;
  const onPress = channel.onPress;
  let bottom;
  let first;
  react = undefined;
  let closure_5;
  let pathname;
  let ref;
  const onClose = channel.onClose;
  const tmp = closure_10();
  let obj = channel(bottom[9]);
  const canManageChannel = obj.useCanManageChannel(channel);
  bottom = onPress(bottom[10])().bottom;
  let obj2 = react;
  const tmp6 = first(react.useState(), 2);
  first = tmp6[0];
  react = tmp6[1];
  const items = [bottom, first];
  const tmp8 = onPress(bottom[11])();
  const memo = react.useMemo(() => {
    let sum;
    if (null != first) {
      let num = 0;
      const obj = PlatformUtils;
      if (obj.isAndroid()) {
        num = bottom;
      }
      sum = 72 + num + tmp + bottom;
    }
    return sum;
  }, items);
  let num = memo;
  const tmp5 = onPress;
  if (memo == null) {
    num = 0;
  }
  let tmp21Result = tmp8 < num;
  closure_5 = tmp21Result;
  let tmp11;
  if (!tmp21Result) {
    tmp11 = memo;
  }
  function handlePress() {
    if (onPress != null) {
      tmp();
    }
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(closure_6);
  }
  const items1 = [first];
  const items2 = [channel.id];
  const callback = obj2.useCallback((arg0, arg1) => {
    if (arg1 !== first) {
      closure_4(arg1);
    }
  }, items1);
  const effect = obj2.useEffect(() => {
    const obj = ForumGuidelinesManagerDefault;
    obj.markAsSeen(channel.id);
  }, items2);
  let tmp14 = !tmp21Result;
  if (tmp14) {
    const obj3 = { bottom: true, style: tmp.footer, children: ref(BaseTextButton, obj5) };
    const SafeAreaPaddingView = tmp2(tmp3[15]).SafeAreaPaddingView;
    obj5 = { grow: true, text: intl.string(channel(bottom[17]).t["NX+WJN"]), onPress: handlePress, style: null, pillStyle: null };
    BaseTextButton = tmp2(tmp3[16]).BaseTextButton;
    intl = tmp2(tmp3[17]).intl;
    ({ buttonWrapper: obj4.style, buttonPill: obj4.pillStyle } = tmp);
    tmp14 = ref(SafeAreaPaddingView, obj3);
  }
  const items3 = [bottom, tmp21Result];
  const memo1 = obj2.useMemo(() => {
    let num = 0;
    if (closure_5) {
      num = bottom + 40 + 32;
    }
    return num;
  }, items3);
  const tmp2Result = channel(bottom[18]);
  pathname = tmp2Result.useLocation().pathname;
  ref = obj2.useRef(true);
  const items4 = [pathname, channel.id];
  const effect1 = obj2.useEffect(() => {
    const obj = LinkUtils;
    const tryParseChannelPathResult = obj.tryParseChannelPath(pathname);
    if (!ref.current) {
      if (null != tryParseChannelPathResult) {
        if (tryParseChannelPathResult.channelId !== channel.id) {
          const obj2 = ActionSheetActionCreatorsDefault;
          obj2.hideActionSheet(closure_6);
        }
      }
    }
    ref.current = false;
  }, items4);
  const items5 = [channel.id];
  const callback1 = obj2.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(closure_6);
    const obj2 = ChannelSettingsActionCreatorsDefault;
    obj2.open(channel.id);
  }, items5);
  const obj6 = { scrollable: true, contentHeight: tmp11, footer: tmp14, onDismiss: onClose, children: closure_8(BottomSheetScrollView, obj7) };
  BottomSheet = tmp2(tmp3[26]).BottomSheet;
  let tmp19Result = canManageChannel;
  obj7 = { style: tmp.scrollContainer, scrollIndicatorInsets: { bottom }, contentContainerStyle: { paddingBottom: memo1 }, onContentSizeChange: callback, children: items8 };
  const obj8 = { style: tmp.header, children: items7 };
  BottomSheetScrollView = tmp2(tmp3[25]).BottomSheetScrollView;
  if (canManageChannel) {
    const obj9 = { accessibilityLabel: intl2.string(channel(bottom[17]).t.bt75uw), accessibilityRole: "button", style: tmp.editButton, onPress: callback1, children: items6 };
    const PressableOpacity = tmp2(tmp3[21]).PressableOpacity;
    intl2 = tmp2(tmp3[17]).intl;
    const obj10 = { style: tmp.editText, variant: "text-sm/medium", color: "text-brand", children: intl3.string(channel(bottom[17]).t.bt75uw) };
    const Text = tmp2(tmp3[22]).Text;
    intl3 = tmp2(tmp3[17]).intl;
    items6 = [ref(Text, obj10), ];
    const obj11 = { color: tmp.editIcon.color, size: "xs" };
    items6[1] = ref(channel(bottom[23]).PencilIcon, obj11);
    tmp19Result = closure_8(PressableOpacity, obj9);
  }
  items7 = [tmp19Result, ];
  const obj12 = { style: tmp.headerTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl4.string(channel(bottom[17]).t["4d4T4l"]) };
  const Text2 = tmp2(tmp3[22]).Text;
  intl4 = tmp2(tmp3[17]).intl;
  items7[1] = ref(Text2, obj12);
  items8 = [closure_8(closure_5, obj8), ];
  const obj13 = { style: tmp.guidelinesContainer, children: ref(Text3, obj14) };
  obj14 = { variant: "text-md/medium", color: "text-default", children: tmp5Result.parseForumPostGuidelines(channel.topic, true, obj15) };
  Text3 = tmp2(tmp3[22]).Text;
  obj15 = { channelId: channel.id, allowHeading: true, allowList: true, allowLinks: true };
  tmp5Result = tmp5(bottom[24]);
  items8[1] = ref(closure_5, obj13);
  const children = [ref(BottomSheet, obj6), ];
  if (tmp21Result) {
    const obj16 = { grow: true, style: items10, pillStyle: tmp.buttonPill, text: intl5.string(channel(bottom[17]).t["NX+WJN"]), onPress: handlePress };
    items10 = [tmp.floatingButtonContainer, ];
    const obj17 = { bottom: bottom + 16 };
    items10[1] = obj17;
    const BaseTextButton2 = tmp2(tmp3[16]).BaseTextButton;
    intl5 = tmp2(tmp3[17]).intl;
    tmp21Result = tmp21(BaseTextButton2, obj16);
  }
  children[1] = tmp21Result;
  return closure_8(closure_9, { children });
});
const result = size.fileFinishedImporting("modules/forums/native/ForumGuidelinesActionSheet.tsx");

export default tmp4;
export const openForumGuidelinesActionSheet = function openForumGuidelinesActionSheet(arg0) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  const obj = {};
  ActionSheetActionCreatorsDefault;
  const tmp2 = asyncRequire(10089, dependencyMap.paths);
  const merged = Object.assign(arg0);
  openLazy(tmp2, closure_6, obj);
};