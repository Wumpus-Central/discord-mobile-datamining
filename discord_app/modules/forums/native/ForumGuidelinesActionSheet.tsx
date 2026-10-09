// discord_app/modules/forums/native/ForumGuidelinesActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/02000_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import LinkUtils from "../../links/LinkUtils.tsx";
import ChannelSettingsActionCreatorsDefault from "../../../actions/ChannelSettingsActionCreators.tsx";
import ForumGuidelinesManagerDefault from "../ForumGuidelinesManager.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
let closure_6 = fn(6968).FORUM_GUIDELINES_ACTION_SHEET;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  scrollContainer: { paddingHorizontal: 16 },
  header: { alignItems: "center", paddingTop: 20, paddingBottom: 24 },
  headerTitle: { marginTop: 8 },
  guidelinesContainer: {
    padding: 16,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    borderRadius: nativeDefault.radii.sm,
  },
  footer: { paddingBottom: 16 },
  buttonWrapper: { marginHorizontal: 16 },
  buttonPill: null,
  floatingButtonContainer: null,
  editButton: null,
  editText: null,
  editIcon: null,
};
let obj3 = {
  padding: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
};
obj2.buttonPill = { borderRadius: nativeDefault.radii.sm };
const rect = {
  marginTop: 16,
  position: "absolute",
  left: 16,
  right: 16,
  shadowColor: nativeDefault.colors.BLACK,
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  borderRadius: nativeDefault.radii.sm,
};
obj2.floatingButtonContainer = rect;
obj2.editButton = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  position: "absolute",
  top: 12,
  right: 0,
};
obj2.editText = { marginRight: 4 };
const obj4 = { borderRadius: nativeDefault.radii.sm };
obj2.editIcon = { color: nativeDefault.colors.TEXT_BRAND };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { color: nativeDefault.colors.TEXT_BRAND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/ForumGuidelinesActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ForumGuidelinesActionSheet(channel) {
      const cResult = channel(first[8]).c(68);
      channel = channel.channel;
      const onPress = channel.onPress;
      const tmp4 = closure_10();
      let obj = channel(first[8]);
      const canManageChannel = channel(first[9]).useCanManageChannel(channel);
      const bottom = onPress(first[10])().bottom;
      [first, _slicedToArray] = noop.useState();
      if (cResult[0] === bottom) {
        if (cResult[1] === first) {
          let tmp9 = cResult[2];
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
          let tmp16 = items;
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
        const effect = noop.useEffect(E, tmp16);
        if (cResult[8] !== onPress) {
          class E {
            constructor() {
              obj = closure_1(closure_2[13]);
              markAsSeenResult = obj.markAsSeen(channel.id);
              return;
            }
          }
          cResult[8] = onPress;
          cResult[9] = tmp19;
        } else {
          class E {
            constructor() {
              obj = closure_1(closure_2[13]);
              markAsSeenResult = obj.markAsSeen(channel.id);
              return;
            }
          }
        }
        if (cResult[10] === tmp8 < num3) {
          class E {
            constructor() {
              obj = closure_1(closure_2[13]);
              markAsSeenResult = obj.markAsSeen(channel.id);
              return;
            }
          }
        }
        let tmp21 = !tmp12;
        if (tmp8 >= num3) {
          class E {
            constructor() {
              obj = closure_1(closure_2[13]);
              markAsSeenResult = obj.markAsSeen(channel.id);
              return;
            }
          }
          const obj5 = { bottom: true, style: tmp4.footer, children: null };
          const obj8 = { grow: true, text: null, onPress: null, style: null, pillStyle: null };
          const intl = tmp(tmp2[17]).intl;
          obj8.text = intl.string(tmp(tmp2[17]).t["NX+WJN"]);
          obj8.onPress = tmp19;
          ({ buttonWrapper: obj6.style, buttonPill: obj6.pillStyle } = tmp4);
          obj5.children = closure_7(tmp(tmp2[16]).BaseTextButton, obj8);
          tmp21 = closure_7(tmp(tmp2[15]).SafeAreaPaddingView, obj5);
        }
        cResult[10] = tmp8 < num3;
        cResult[11] = tmp19;
        cResult[12] = tmp4.buttonPill;
        cResult[13] = tmp4.buttonWrapper;
        cResult[14] = tmp4.footer;
        cResult[15] = tmp21;
      }
      let sum;
      if (null != first) {
        class E {
          constructor() {
            obj = closure_1(closure_2[13]);
            markAsSeenResult = obj.markAsSeen(channel.id);
            return;
          }
        }
        if (obj4.isAndroid()) {
          class E {
            constructor() {
              obj = closure_1(closure_2[13]);
              markAsSeenResult = obj.markAsSeen(channel.id);
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
      let obj2 = channel(first[9]);
    }
  : function ForumGuidelinesActionSheet(channel) {
      channel = channel.channel;
      const onPress = channel.onPress;
      let bottom;
      let first;
      noop = undefined;
      closure_5 = undefined;
      let pathname;
      let ref;
      const tmp = closure_10();
      const canManageChannel = channel(bottom[9]).useCanManageChannel(channel);
      bottom = onPress(bottom[10])().bottom;
      const tmp6 = first(noop.useState(), 2);
      first = tmp6[0];
      noop = tmp6[1];
      const items = [bottom, first];
      let obj = channel(bottom[9]);
      const tmp5 = onPress;
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
      let tmp21Result = onPress(bottom[11])() < num;
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
      const callback = obj2.useCallback((arg0, arg1) => {
        if (arg1 !== first) {
          closure_4(arg1);
        }
      }, items1);
      const effect = obj2.useEffect(() => {
        ForumGuidelinesManagerDefault.markAsSeen(channel.id);
      }, items2);
      let tmp14 = !tmp21Result;
      if (!tmp21Result) {
        const obj3 = { bottom: true, style: tmp.footer, children: null };
        const obj5 = { grow: true, text: null, onPress: null, style: null, pillStyle: null };
        const intl = tmp2(tmp3[17]).intl;
        obj5.text = intl.string(tmp2(tmp3[17]).t["NX+WJN"]);
        obj5.onPress = handlePress;
        ({ buttonWrapper: obj4.style, buttonPill: obj4.pillStyle } = tmp);
        obj3.children = ref(tmp2(tmp3[16]).BaseTextButton, obj5);
        tmp14 = ref(tmp2(tmp3[15]).SafeAreaPaddingView, obj3);
      }
      const items3 = [bottom, tmp21Result];
      const memo1 = obj2.useMemo(() => {
        let num = 0;
        if (closure_5) {
          num = bottom + 40 + 32;
        }
        return num;
      }, items3);
      const tmp8 = onPress(bottom[11])();
      pathname = channel(bottom[18]).useLocation().pathname;
      ref = obj2.useRef(true);
      const items4 = [pathname, channel.id];
      const effect1 = obj2.useEffect(() => {
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
      const callback1 = obj2.useCallback(() => {
        ActionSheetActionCreatorsDefault.hideActionSheet(closure_6);
        ChannelSettingsActionCreatorsDefault.open(channel.id);
      }, items5);
      const obj6 = {
        scrollable: true,
        contentHeight: tmp11,
        footer: tmp14,
        onDismiss: channel.onClose,
        children: null,
      };
      const obj7 = {
        style: tmp.scrollContainer,
        scrollIndicatorInsets: { bottom },
        contentContainerStyle: { paddingBottom: memo1 },
        onContentSizeChange: callback,
        children: null,
      };
      const obj8 = { style: tmp.header, children: null };
      let tmp19Result = canManageChannel;
      if (canManageChannel) {
        const obj9 = {
          accessibilityLabel: null,
          accessibilityRole: "button",
          style: null,
          onPress: null,
          children: null,
        };
        const intl2 = tmp2(tmp3[17]).intl;
        obj9.accessibilityLabel = intl2.string(tmp2(tmp3[17]).t.bt75uw);
        obj9.style = tmp.editButton;
        obj9.onPress = callback1;
        const obj10 = { style: tmp.editText, variant: "text-sm/medium", color: "text-brand", children: null };
        const intl3 = tmp2(tmp3[17]).intl;
        obj10.children = intl3.string(tmp2(tmp3[17]).t.bt75uw);
        const items6 = [tmp21(tmp2(tmp3[22]).Text, obj10)];
        const obj11 = { color: tmp.editIcon.color, size: "xs" };
        items6[1] = tmp21(tmp2(tmp3[23]).PencilIcon, obj11);
        obj9.children = items6;
        tmp19Result = closure_8(tmp2(tmp3[21]).PressableOpacity, obj9);
      }
      const items7 = [tmp19Result];
      const obj12 = {
        style: tmp.headerTitle,
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      const intl4 = tmp2(tmp3[17]).intl;
      obj12.children = intl4.string(channel(bottom[17]).t["4d4T4l"]);
      items7[1] = ref(channel(bottom[22]).Text, obj12);
      obj8.children = items7;
      const items8 = [closure_8(closure_5, obj8)];
      const obj13 = { style: tmp.guidelinesContainer, children: null };
      const obj14 = { variant: "text-md/medium", color: "text-default", children: null };
      const tmp2Result = channel(bottom[18]);
      obj14.children = tmp5(bottom[24]).parseForumPostGuidelines(channel.topic, true, {
        channelId: channel.id,
        allowHeading: true,
        allowList: true,
        allowLinks: true,
      });
      obj13.children = ref(channel(bottom[22]).Text, obj14);
      items8[1] = ref(closure_5, obj13);
      obj7.children = items8;
      obj6.children = closure_8(channel(bottom[25]).BottomSheetScrollView, obj7);
      const children = [ref(channel(bottom[26]).BottomSheet, obj6)];
      if (tmp21Result) {
        const obj16 = { grow: true, style: null, pillStyle: null, text: null, onPress: null };
        const items10 = [tmp.floatingButtonContainer];
        const obj17 = { bottom: bottom + 16 };
        items10[1] = obj17;
        obj16.style = items10;
        obj16.pillStyle = tmp.buttonPill;
        const intl5 = tmp2(tmp3[17]).intl;
        obj16.text = intl5.string(tmp2(tmp3[17]).t["NX+WJN"]);
        obj16.onPress = handlePress;
        tmp21Result = tmp21(tmp2(tmp3[16]).BaseTextButton, obj16);
      }
      children[1] = tmp21Result;
      return closure_8(closure_9, { children });
    };
export const openForumGuidelinesActionSheet = function openForumGuidelinesActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = {};
  const merged = Object.assign(arg0);
  obj.openLazy(asyncRequireImpl(9691, dependencyMap.paths), closure_6, obj2);
};
