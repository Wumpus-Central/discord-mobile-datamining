// === Module 11851: ScheduledMessageEditContentModal ===

// Module 11851 (ScheduledMessageEditContentModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import Pressables from "Pressables" /* 5909 */;
import MessageParserDefault from "MessageParser" /* 7166 */;
import ScheduledMessageUtils from "ScheduledMessageUtils" /* 7475 */;
import HeaderShared from "HeaderShared" /* 7498 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let _require, c1, scheduledMessage;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { modal: obj2, headerLeftContainer: obj3, headerRightContainer: obj4, container: obj5 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = { paddingLeft: nativeDefault.space.PX_16 };
obj4 = { paddingRight: nativeDefault.space.PX_16 };
obj5 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24 };
let closure_10 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((scheduledMessage) => {
  let channelId;
  let first;
  let onPress;
  let stateFromStores;
  let title;
  const tmp = scheduledMessage;
  const tmp2 = stateFromStores;
  let obj = scheduledMessage(stateFromStores[9]);
  const cResult = obj.c(33);
  scheduledMessage = scheduledMessage.scheduledMessage;
  closure_10();
  const top = channelId(stateFromStores[10])().top;
  channelId(stateFromStores[11])();
  channelId = scheduledMessage.createArgs.channelId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    class C {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
    cResult[1] = channelId;
    cResult[2] = C;
  } else {
    class C {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
  }
  const tmpResult = tmp(tmp2[12]);
  stateFromStores = tmpResult.useStateFromStores(first, C);
  if (cResult[3] === channelId) {
    class C {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
    const first1 = _slicedToArray(react.useState(R), 2)[0];
    _slicedToArray(react.useState(R), 2);
    if (cResult[6] === stateFromStores) {
      class C {
        constructor() {
          return ChannelStore.getChannel(channelId);
        }
      }
    }
    _require = first1(function*() {
      let obj6;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const obj5 = channelId(stateFromStores[13]);
              const content = obj5.parse(c2, first1).content;
              const obj4 = { content, flags: tmp3.createArgs.flags };
              c1 = 1;
              c2 = 1;
              const obj7 = { value: obj6.editScheduledMessage(tmp3.scheduledMessageId, obj4), done: false };
              obj6 = tmp3(stateFromStores[15]);
              return obj7;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            if (value) {
              const arr = channelId(stateFromStores[16]);
              arr.pop();
            }
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp8) {
          c2 = 3;
          throw tmp8;
        }
      }
    });
    const fn = function() {
      return closure_0(...arguments);
    };
    cResult[6] = stateFromStores;
    cResult[7] = first1;
    cResult[8] = scheduledMessage.createArgs.flags;
    cResult[9] = scheduledMessage.scheduledMessageId;
    cResult[10] = fn;
  }
  class R {
    constructor() {
      const unparse = MessageParserDefault.unparse;
      MessageParserDefault;
      const obj = ScheduledMessageUtils;
      return unparse(obj.unparseContentAndFlagsForSilentMessage(scheduledMessage.createArgs), channelId);
    }
  }
  cResult[3] = channelId;
  cResult[4] = scheduledMessage.createArgs;
  cResult[5] = R;
}) : ((scheduledMessage) => {
  let items2;
  let num;
  let onPress;
  let title;
  let tmp5Result;
  let tmp9;
  let value;
  scheduledMessage = scheduledMessage.scheduledMessage;
  let channelId;
  let stateFromStores;
  value = undefined;
  react = undefined;
  const tmp = closure_10();
  const tmp2 = channelId;
  const tmp3 = stateFromStores;
  const top = channelId(stateFromStores[10])().top;
  channelId = scheduledMessage.createArgs.channelId;
  const tmp4 = channelId(stateFromStores[11])();
  let obj = scheduledMessage(stateFromStores[12]);
  const items = [ChannelStore];
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  [value, tmp9] = react.useState(() => {
    const unparse = MessageParserDefault.unparse;
    MessageParserDefault;
    const obj = ScheduledMessageUtils;
    return unparse(obj.unparseContentAndFlagsForSilentMessage(scheduledMessage.createArgs), channelId);
  });
  const items1 = [stateFromStores, value, scheduledMessage.createArgs.flags, scheduledMessage.scheduledMessageId];
  _slicedToArray = react.useCallback(value(function*() {
    let c2;
    let closure_0;
    let v1;
    if (stateFromStores === 2) {
      stateFromStores = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        stateFromStores = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            stateFromStores = 3;
            throw value;
          } else if (arg0 === 2) {
            stateFromStores = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const obj5 = v1(stateFromStores[13]);
            const content = obj5.parse(stateFromStores, first).content;
            const obj4 = { content, flags: scheduledMessage.createArgs.flags };
            v1 = 1;
            const obj6 = tmp3(stateFromStores[15]);
            stateFromStores = 1;
            const obj7 = { value: obj6.editScheduledMessage(scheduledMessage.scheduledMessageId, obj4), done: false };
            return obj7;
          }
        } else if (arg0 === 1) {
          stateFromStores = 3;
          throw value;
        } else if (arg0 === 2) {
          stateFromStores = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          if (value) {
            const arr = v1(stateFromStores[16]);
            arr.pop();
          }
          stateFromStores = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp8) {
        stateFromStores = 3;
        throw tmp8;
      }
    }
  }), items1);
  let intl = scheduledMessage(stateFromStores[17]).intl;
  const stringResult = intl.string(scheduledMessage(stateFromStores[17]).t.ZXE1s4);
  react = stringResult;
  let obj2 = { style: tmp.modal, children: items2 };
  let obj5 = {
    title: stringResult,
    headerTitle() {
      const obj = { title };
      return metroImportAll(HeaderShared.GenericHeaderTitle, obj);
    },
    headerTitleAlign: "center",
    headerStatusBarHeight: num + tmp2(tmp3[7]).space.PX_8,
    headerLeft: tmp5Result.getHeaderCloseButton(tmp2(tmp3[16]).pop),
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null,
    headerRight() {
      let Text;
      let intl;
      let obj2;
      const obj = { accessibilityRole: "button", onPress, children: metroImportAll(Text, obj2) };
      const PressableOpacity = Pressables.PressableOpacity;
      obj2 = { variant: "text-md/semibold", color: "control-brand-foreground", children: intl.string(intl2.t["R3BPH+"]) };
      Text = Text_Text.Text;
      intl = intl2.intl;
      return metroImportAll(PressableOpacity, obj);
    }
  };
  const Header = scheduledMessage(stateFromStores[23]).Header;
  let obj4 = scheduledMessage(stateFromStores[19]);
  num = 0;
  if (!obj4.isIOS()) {
    num = top;
  }
  ({ headerLeftContainer: obj3.headerLeftContainerStyle, headerRightContainer: obj3.headerRightContainerStyle } = tmp);
  tmp5Result = scheduledMessage(tmp3[20]);
  items2 = [closure_8(Header, obj5), ];
  let obj6 = { style: tmp.container, children: closure_8(tmp5(tmp3[24]).TextArea, { accessibilityLabel: stringResult, value, onChange: tmp9, maxLength: tmp4, autoFocus: true }) };
  items2[1] = closure_8(View, obj6);
  return closure_9(View, obj2);
});
const result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessageEditContentModal.tsx");

export default tmp4;