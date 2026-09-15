// === Module 12356: ScheduledMessageEditContentModal ===

// Module 12356 (ScheduledMessageEditContentModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4635 */;
import Pressables from "Pressables" /* 5207 */;
import MessageParserDefault from "MessageParser" /* 7787 */;
import ScheduledMessageUtils from "ScheduledMessageUtils" /* 7950 */;
import HeaderShared from "HeaderShared" /* 7969 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1958 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4639);
let obj2 = { modal: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, headerLeftContainer: null, headerRightContainer: null, container: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.headerLeftContainer = { paddingLeft: nativeDefault.space.PX_16 };
let obj4 = { paddingLeft: nativeDefault.space.PX_16 };
obj2.headerRightContainer = { paddingRight: nativeDefault.space.PX_16 };
let obj5 = { paddingRight: nativeDefault.space.PX_16 };
obj2.container = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24 };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessageEditContentModal.tsx");

export default function ScheduledMessageEditContentModal(scheduledMessage) {
  scheduledMessage = scheduledMessage.scheduledMessage;
  let stateFromStores;
  _slicedToArray = undefined;
  noop = undefined;
  const tmp = closure_10();
  const channelId = scheduledMessage.createArgs.channelId;
  const tmp4 = channelId(stateFromStores[9])();
  const items = [ChannelStore];
  stateFromStores = scheduledMessage(stateFromStores[10]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
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
        const obj2 = { value, done: true };
        return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const obj5 = v1(7787);
            const obj4 = { content: obj5.parse(stateFromStores, first).content, flags: scheduledMessage.createArgs.flags };
            v1 = 1;
            dependencyMap = 1;
            const obj7 = { value: tmp4(12345).editScheduledMessage(scheduledMessage.scheduledMessageId, obj4), done: false };
            return obj7;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          if (value) {
            v1(4842).pop();
            const arr = v1(4842);
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
  let obj2 = { style: tmp.modal, children: null };
  let obj5 = {
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
  let obj = scheduledMessage(stateFromStores[10]);
  let num = 0;
  if (!obj4.isIOS()) {
    num = channelId(stateFromStores[8])().top;
  }
  obj5.headerStatusBarHeight = num + channelId(stateFromStores[7]).space.PX_8;
  obj4 = scheduledMessage(stateFromStores[18]);
  obj5.headerLeft = scheduledMessage(stateFromStores[19]).getHeaderCloseButton(channelId(stateFromStores[14]).pop);
  ({ headerLeftContainer: obj3.headerLeftContainerStyle, headerRightContainer: obj3.headerRightContainerStyle } = tmp);
  obj5.headerRight = function headerRight() {
    const obj = { accessibilityRole: "button", onPress, children: null };
    const obj2 = { variant: "text-md/semibold", color: "control-brand-foreground", children: null };
    const intl = util.intl;
    obj2.children = intl.string(util.t["R3BPH+"]);
    obj.children = React6(Text_Text.Text, obj2);
    return React6(Pressables.PressableOpacity, obj);
  };
  const items2 = [closure_8(scheduledMessage(stateFromStores[16]).Header, obj5), ];
  const tmp5Result = scheduledMessage(stateFromStores[19]);
  items2[1] = closure_8(View, { style: tmp.container, children: closure_8(scheduledMessage(stateFromStores[22]).TextArea, { accessibilityLabel: stringResult, value, onChange: tmp7[1], maxLength: tmp4, autoFocus: true }) });
  obj2.children = items2;
  return closure_9(View, obj2);
};