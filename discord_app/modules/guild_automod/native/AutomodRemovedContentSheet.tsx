// === Module 17458: AutomodRemovedContentSheet ===

// Module 17458 (AutomodRemovedContentSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5112 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6644 */;
import ActionSheet2 from "ActionSheet" /* 6701 */;
import RowGeneratorDefault from "RowGenerator" /* 7591 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let action;

let obj2;
let obj3;
const View = react_native.View;
const MessageFlags = Constants.MessageFlags;
const jsx = Fragment.jsx;
const rowGenerator = new RowGeneratorDefault();
const tmp2 = new RowGeneratorDefault();
let createStyles = createStyles_mod;
let obj = { content: obj2, blockedMessage: obj3 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.MESSAGE_AUTOMOD_BACKGROUND_DEFAULT, borderLeftWidth: 2, borderLeftColor: nativeDefault.unsafe_rawColors.RED_345 };
let closure_8 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((action) => {
  let message;
  let notice;
  let num2;
  let thread;
  let tmp14;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(18);
  action = action.action;
  const tmp4 = closure_8();
  ({ message, thread, notice } = action);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u(message) {
      message = message.message;
      let ephemeralIndication1;
      if (message != null) {
        ephemeralIndication1 = message.ephemeralIndication;
      }
      if (null != ephemeralIndication1) {
        const ephemeralIndication = message.message.ephemeralIndication;
        const intl = intl2.intl;
        ephemeralIndication.content = intl.string(intl2.t.Nb1EQx);
      }
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== message) {
    let messageRecord;
    if (null != message) {
      const obj2 = { flags: num2 | MessageFlags.EPHEMERAL };
      const createMessageRecord = MessageRecordUtils.createMessageRecord;
      MessageRecordUtils;
      const merged = Object.assign(message);
      num2 = message.flags;
      if (num2 == null) {
        num2 = 0;
      }
      messageRecord = createMessageRecord(obj2);
    }
    cResult[1] = message;
    cResult[2] = messageRecord;
    tmp6 = messageRecord;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== thread) {
    let StrErG;
    let intl = intl2.intl;
    const string = intl.string;
    if (null != thread) {
      StrErG = intl2.t["8czF24"];
    } else {
      StrErG = intl2.t.StrErG;
    }
    const stringResult = string(StrErG);
    cResult[3] = thread;
    cResult[4] = stringResult;
    tmp14 = stringResult;
  } else {
    tmp14 = cResult[4];
  }
  let name;
  if (thread != null) {
    name = thread.name;
  }
  if (cResult[5] === tmp14) {
    let tmp18;
    let tmp22;
    if (cResult[6] === name) {
      tmp18 = cResult[7];
    }
    if (cResult[8] === tmp6) {
      if (cResult[9] === notice) {
        let tmp20;
        if (cResult[10] === tmp4.blockedMessage) {
          tmp20 = cResult[11];
        }
        if (cResult[12] === tmp4.content) {
          let tmp27;
          if (cResult[13] === tmp20) {
            tmp27 = cResult[14];
          }
          if (cResult[15] === tmp18) {
            let tmp31;
            if (cResult[16] === tmp27) {
              tmp31 = cResult[17];
            }
            return tmp31;
          }
          const tmp33 = jsx(ActionSheet2.ActionSheet, { header: tmp18, children: tmp27 });
          cResult[15] = tmp18;
          cResult[16] = tmp27;
          cResult[17] = tmp33;
          tmp31 = tmp33;
        }
        const tmp30 = <View style={tmp4.content}>{tmp20}</View>;
        cResult[12] = tmp4.content;
        cResult[13] = tmp20;
        cResult[14] = tmp30;
        tmp27 = tmp30;
      }
    }
    if (null != tmp6) {
      tmp22 = <View style={tmp4.blockedMessage}>{null}</View>;
    } else {
      tmp22 = jsx(Text_Text.Text, { variant: "text-md/normal", color: "text-default", children: notice });
    }
    cResult[8] = tmp6;
    cResult[9] = notice;
    cResult[10] = tmp4.blockedMessage;
    cResult[11] = tmp22;
    tmp20 = tmp22;
  }
  const tmp19 = jsx(BottomSheetTitleHeader2.BottomSheetTitleHeader, { title: tmp14, subtitle: name });
  cResult[5] = tmp14;
  cResult[6] = name;
  cResult[7] = tmp19;
  tmp18 = tmp19;
}) : ((action) => {
  let StrErG;
  action = action.action;
  const tmp = closure_8();
  let message = action.message;
  const thread = action.thread;
  const notice = action.notice;
  const items = [message];
  const callback = react.useCallback((message) => {
    message = message.message;
    let ephemeralIndication1;
    if (message != null) {
      ephemeralIndication1 = message.ephemeralIndication;
    }
    if (null != ephemeralIndication1) {
      const ephemeralIndication = message.message.ephemeralIndication;
      const intl = message(dependencyMap[9]).intl;
      ephemeralIndication.content = intl.string(message(dependencyMap[9]).t.Nb1EQx);
    }
  }, []);
  const memo = react.useMemo(() => {
    let num;
    let messageRecord;
    if (null != message) {
      const obj = { flags: num | MessageFlags.EPHEMERAL };
      const createMessageRecord = MessageRecordUtils.createMessageRecord;
      MessageRecordUtils;
      const merged = Object.assign(message);
      num = message.flags;
      if (num == null) {
        num = 0;
      }
      messageRecord = createMessageRecord(obj);
    }
    return messageRecord;
  }, items);
  const tmp5 = message;
  const ActionSheet = message(6701).ActionSheet;
  const BottomSheetTitleHeader = message(6644).BottomSheetTitleHeader;
  let intl = message(1126).intl;
  const string = intl.string;
  if (null != thread) {
    StrErG = tmp5(1126).t["8czF24"];
  } else {
    StrErG = tmp5(1126).t.StrErG;
  }
  let name;
  if (thread != null) {
    name = thread.name;
  }
  if (null != memo) {
    let tmp4Result = <View style={tmp.blockedMessage}>{null}</View>;
  } else {
    tmp4Result = jsx(tmp5(4886).Text, { variant: "text-md/normal", color: "text-default", children: notice });
  }
  return <ActionSheet header={<BottomSheetTitleHeader title={string(StrErG)} subtitle={name} />}>{null}</ActionSheet>;
});
const result = size.fileFinishedImporting("modules/guild_automod/native/AutomodRemovedContentSheet.tsx");

export default tmp4;