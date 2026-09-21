// === Module 17735: AutomodRemovedContentSheet ===

// Module 17735 (AutomodRemovedContentSheet)
import nativeDefault from "native" /* 576 */;
import MessageRecordUtils from "MessageRecordUtils" /* 4978 */;
import RowGeneratorDefault from "RowGenerator" /* 8190 */;
import ChatItemDefault from "ChatItem" /* 8930 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const MessageFlags = fn(1074).MessageFlags;
const jsx = fn(21).jsx;
const rowGenerator = new RowGeneratorDefault();
const createStyles = fn(4756);
let obj2 = { content: null, blockedMessage: null };
const tmp2 = new RowGeneratorDefault();
obj2.content = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
obj2.blockedMessage = { backgroundColor: nativeDefault.colors.MESSAGE_AUTOMOD_BACKGROUND_DEFAULT, borderLeftWidth: 2, borderLeftColor: nativeDefault.unsafe_rawColors.RED_345 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/AutomodRemovedContentSheet.tsx");

export default function AutomodRemovedContentSheet(action) {
  action = action.action;
  const tmp = closure_8();
  let message = action.message;
  const thread = action.thread;
  const items = [message];
  const callback = noop.useCallback((message) => {
    message = message.message;
    let ephemeralIndication;
    if (message != null) {
      ephemeralIndication = message.ephemeralIndication;
    }
    if (null != ephemeralIndication) {
      const intl = message(1115).intl;
      message.message.ephemeralIndication.content = intl.string(message(1115).t.Nb1EQx);
    }
  }, []);
  const memo = noop.useMemo(() => {
    let messageRecord;
    if (null != message) {
      const obj2 = {};
      const merged = Object.assign(message);
      let num = message.flags;
      if (num == null) {
        num = 0;
      }
      obj2.flags = num | MessageFlags.EPHEMERAL;
      messageRecord = MessageRecordUtils.createMessageRecord(obj2);
    }
    return messageRecord;
  }, items);
  let intl = message(1115).intl;
  if (null != thread) {
    let StrErG = tmp5(1115).t["8czF24"];
  } else {
    StrErG = tmp5(1115).t.StrErG;
  }
  let obj = { title: intl.string(StrErG), subtitle: null };
  let name;
  if (thread != null) {
    name = thread.name;
  }
  let obj2 = { header: jsx(message(7394).BottomSheetTitleHeader, { title: intl.string(StrErG), subtitle: null }), children: null };
  obj.subtitle = name;
  const obj3 = { style: tmp.content, children: null };
  if (null != memo) {
    const obj4 = { style: tmp.blockedMessage, children: null };
    const obj5 = { rowGenerator, message: memo, modifyRow: callback, pointerEvents: "none" };
    obj4.children = jsx(ChatItemDefault, { rowGenerator, message: memo, modifyRow: callback, pointerEvents: "none" });
    let tmp4Result = <View style={tmp.blockedMessage}>{null}</View>;
  } else {
    const obj6 = { variant: "text-md/normal", color: "text-default", children: action.notice };
    tmp4Result = jsx(tmp5(4752).Text, { variant: "text-md/normal", color: "text-default", children: action.notice });
  }
  obj3.children = tmp4Result;
  obj2.children = <View style={tmp.content}>{null}</View>;
  return jsx(message(7442).ActionSheet, { header: jsx(message(7394).BottomSheetTitleHeader, { title: intl.string(StrErG), subtitle: null }), children: null });
};