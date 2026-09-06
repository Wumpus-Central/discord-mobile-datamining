// === Module 12222: ScheduledMessageEditContentModal ===

// Module 12222 (ScheduledMessageEditContentModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import Pressables from "Pressables" /* 5123 */;
import MessageParserDefault from "MessageParser" /* 7682 */;
import ScheduledMessageUtils from "ScheduledMessageUtils" /* 7845 */;
import HeaderShared from "HeaderShared" /* 7863 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { modal: null, headerLeftContainer: null, headerRightContainer: null, container: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles.modal = createStyles;
createStyles.headerLeftContainer = { paddingLeft: nativeDefault.space.PX_16 };
let obj1 = { paddingLeft: nativeDefault.space.PX_16 };
createStyles.headerRightContainer = { paddingRight: nativeDefault.space.PX_16 };
let obj2 = { paddingRight: nativeDefault.space.PX_16 };
createStyles.container = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24 };
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessageEditContentModal.tsx");

export default function ScheduledMessageEditContentModal(scheduledMessage) {
  scheduledMessage = scheduledMessage.scheduledMessage;
  let stateFromStores;
  _slicedToArray = undefined;
  noop = undefined;
  const tmp = closure_10();
  const channelId = scheduledMessage.createArgs.channelId;
  let obj = scheduledMessage(stateFromStores[10]);
  const items = [ChannelStore];
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const tmp7 = _slicedToArray(noop.useState(() => {
    const obj = MessageParserDefault;
    return obj.unparse(ScheduledMessageUtils.unparseContentAndFlagsForSilentMessage(scheduledMessage.createArgs), channelId);
  }), 2);
  value = tmp7[0];
  const items1 = [stateFromStores, value, scheduledMessage.createArgs.flags, scheduledMessage.scheduledMessageId];
  _slicedToArray = noop.useCallback(value(function*() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const obj5 = v1(7682);
            const obj1 = { content: obj5.parse(stateFromStores, first).content, flags: scheduledMessage.createArgs.flags };
            v1 = 1;
            dependencyMap = 1;
            const obj2 = { value: tmp4(12211).editScheduledMessage(scheduledMessage.scheduledMessageId, obj1), done: false };
            return obj2;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          obj = { value, done: true };
          return obj;
        } else {
          if (value) {
            let arr = v1(4763);
            arr = arr.pop();
          }
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp9) {
        dependencyMap = tmp;
        throw tmp9;
      }
    }
  }), items1);
  let intl = scheduledMessage(stateFromStores[15]).intl;
  const stringResult = intl.string(scheduledMessage(stateFromStores[15]).t.ZXE1s4);
  noop = stringResult;
  obj = { style: tmp.modal, children: null };
  obj = {
    title: stringResult,
    headerTitle() {
      return React6(HeaderShared.GenericHeaderTitle, { title });
    },
    headerTitleAlign: "center",
    headerStatusBarHeight: null,
    headerLeft: null,
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null,
    headerRight: null
  };
  const tmp4 = channelId(stateFromStores[9])();
  let num = 0;
  if (!obj4.isIOS()) {
    num = channelId(stateFromStores[8])().top;
  }
  obj.headerStatusBarHeight = num + channelId(stateFromStores[7]).space.PX_8;
  obj4 = scheduledMessage(stateFromStores[18]);
  obj.headerLeft = scheduledMessage(stateFromStores[19]).getHeaderCloseButton(channelId(stateFromStores[14]).pop);
  ({ headerLeftContainer: obj3.headerLeftContainerStyle, headerRightContainer: obj3.headerRightContainerStyle } = tmp);
  obj.headerRight = function headerRight() {
    let obj = { accessibilityRole: "button", onPress, children: null };
    obj = { variant: "text-md/semibold", color: "control-brand-foreground", children: null };
    const intl = util.intl;
    obj.children = intl.string(util.t["R3BPH+"]);
    obj.children = React6(Text_Text.Text, obj);
    return React6(Pressables.PressableOpacity, obj);
  };
  const items2 = [closure_8(scheduledMessage(stateFromStores[16]).Header, obj), ];
  const tmp5Result = scheduledMessage(stateFromStores[19]);
  items2[1] = closure_8(View, { style: tmp.container, children: closure_8(scheduledMessage(stateFromStores[22]).TextArea, { accessibilityLabel: stringResult, value, onChange: tmp7[1], maxLength: tmp4, autoFocus: true }) });
  obj.children = items2;
  return closure_9(View, obj);
};