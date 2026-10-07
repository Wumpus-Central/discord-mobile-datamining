// discord_app/modules/guild_automod/native/AutomodRemovedContentSheet.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import MessageRecordUtils from "../../messages/MessageRecordUtils.tsx";
import BottomSheetTitleHeader from "../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import RowGeneratorDefault from "../../messages/native/renderer/RowGenerator.tsx";
import ChatItemDefault from "../../../components_native/chat/ChatItem.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const MessageFlags = fn(1085).MessageFlags;
const jsx = fn(21).jsx;
const rowGenerator = new RowGeneratorDefault();
const createStyles = fn(4896);
let obj2 = { content: null, blockedMessage: null };
const tmp2 = new RowGeneratorDefault();
obj2.content = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
obj2.blockedMessage = {
  backgroundColor: nativeDefault.colors.MESSAGE_AUTOMOD_BACKGROUND_DEFAULT,
  borderLeftWidth: 2,
  borderLeftColor: nativeDefault.unsafe_rawColors.RED_345,
};
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = {
  backgroundColor: nativeDefault.colors.MESSAGE_AUTOMOD_BACKGROUND_DEFAULT,
  borderLeftWidth: 2,
  borderLeftColor: nativeDefault.unsafe_rawColors.RED_345,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/AutomodRemovedContentSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (action) => {
      const cResult = c.c(18);
      const tmp4 = closure_8();
      ({ message, thread, notice } = action.action);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function u(message) {
          message = message.message;
          let ephemeralIndication;
          if (message != null) {
            ephemeralIndication = message.ephemeralIndication;
          }
          if (null != ephemeralIndication) {
            const intl = util.intl;
            message.message.ephemeralIndication.content = intl.string(util.t.Nb1EQx);
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
          const obj2 = {};
          const merged = Object.assign(message);
          let num2 = message.flags;
          if (num2 == null) {
            num2 = 0;
          }
          obj2.flags = num2 | MessageFlags.EPHEMERAL;
          messageRecord = MessageRecordUtils.createMessageRecord(obj2);
          const tmpResult = MessageRecordUtils;
        }
        cResult[1] = message;
        cResult[2] = messageRecord;
        let tmp6 = messageRecord;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] !== thread) {
        let intl = util.intl;
        if (null != thread) {
          let StrErG = util.t["8czF24"];
        } else {
          StrErG = util.t.StrErG;
        }
        const stringResult = intl.string(StrErG);
        cResult[3] = thread;
        cResult[4] = stringResult;
      } else {
        let name;
        if (thread != null) {
          name = thread.name;
        }
        if (cResult[5] === cResult[4]) {
          if (cResult[6] === name) {
            let tmp19 = cResult[7];
          }
          if (cResult[8] === tmp6) {
            if (cResult[9] === notice) {
              if (cResult[10] === tmp4.blockedMessage) {
                if (cResult[12] === tmp4.content) {
                  if (cResult[13] === tmp22) {
                    let tmp30 = cResult[14];
                  }
                  if (cResult[15] === tmp19) {
                    if (cResult[16] === tmp30) {
                      let tmp34 = cResult[17];
                    }
                    return tmp34;
                  }
                  const obj3 = { header: tmp19, children: tmp30 };
                  const tmp36 = jsx(ActionSheet.ActionSheet, { header: tmp19, children: tmp30 });
                  cResult[15] = tmp19;
                  cResult[16] = tmp30;
                  cResult[17] = tmp36;
                  tmp34 = tmp36;
                }
                const obj4 = { style: tmp4.content, children: cResult[11] };
                const tmp33 = <View style={tmp4.content}>{cResult[11]}</View>;
                cResult[12] = tmp4.content;
                cResult[13] = cResult[11];
                cResult[14] = tmp33;
                tmp30 = tmp33;
              }
            }
          }
          if (null != tmp6) {
            const obj5 = { style: tmp4.blockedMessage, children: null };
            const obj6 = { rowGenerator, message: tmp6, modifyRow: first, pointerEvents: "none" };
            obj5.children = jsx(ChatItemDefault, {
              rowGenerator,
              message: tmp6,
              modifyRow: first,
              pointerEvents: "none",
            });
            let tmp24 = <View style={tmp4.blockedMessage}>{null}</View>;
          } else {
            const obj7 = { variant: "text-md/normal", color: "text-default", children: notice };
            tmp24 = jsx(Text_Text.Text, { variant: "text-md/normal", color: "text-default", children: notice });
          }
          cResult[8] = tmp6;
          cResult[9] = notice;
          notice = tmp4.blockedMessage;
          cResult[10] = notice;
          cResult[11] = tmp24;
        }
        const obj8 = { title: cResult[4], subtitle: name };
        const tmp21 = jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: cResult[4], subtitle: name });
        cResult[5] = cResult[4];
        cResult[6] = name;
        cResult[7] = tmp21;
        tmp19 = tmp21;
      }
    }
  : (action) => {
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
          const intl = message(1126).intl;
          message.message.ephemeralIndication.content = intl.string(message(1126).t.Nb1EQx);
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
      let intl = message(1126).intl;
      if (null != thread) {
        let StrErG = tmp5(1126).t["8czF24"];
      } else {
        StrErG = tmp5(1126).t.StrErG;
      }
      let obj = { title: intl.string(StrErG), subtitle: null };
      let name;
      if (thread != null) {
        name = thread.name;
      }
      let obj2 = {
        header: jsx(message(6651).BottomSheetTitleHeader, { title: intl.string(StrErG), subtitle: null }),
        children: null,
      };
      obj.subtitle = name;
      const obj3 = { style: tmp.content, children: null };
      if (null != memo) {
        const obj4 = { style: tmp.blockedMessage, children: null };
        const obj5 = { rowGenerator, message: memo, modifyRow: callback, pointerEvents: "none" };
        obj4.children = jsx(ChatItemDefault, {
          rowGenerator,
          message: memo,
          modifyRow: callback,
          pointerEvents: "none",
        });
        let tmp4Result = <View style={tmp.blockedMessage}>{null}</View>;
      } else {
        const obj6 = { variant: "text-md/normal", color: "text-default", children: action.notice };
        tmp4Result = jsx(tmp5(4892).Text, {
          variant: "text-md/normal",
          color: "text-default",
          children: action.notice,
        });
      }
      obj3.children = tmp4Result;
      obj2.children = <View style={tmp.content}>{null}</View>;
      return jsx(message(6708).ActionSheet, {
        header: jsx(message(6651).BottomSheetTitleHeader, { title: intl.string(StrErG), subtitle: null }),
        children: null,
      });
    };
