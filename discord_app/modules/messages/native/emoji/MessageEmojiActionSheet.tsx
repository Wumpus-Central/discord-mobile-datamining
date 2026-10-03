// === Module 9933: MessageEmojiActionSheet ===

// Module 9933 (MessageEmojiActionSheet)
import c from "c" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import StandardEmojiContentDefault from "StandardEmojiContent" /* 9934 */;
import CustomEmojiContentDefault from "CustomEmojiContent" /* 9941 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
const PlatformUtils = fn(1369);
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = 16;
}
let closure_6 = createStyles.createStyles({ contentWrapper: { paddingHorizontal: 16, paddingBottom: num } });
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((emojiNode) => {
  const cResult = nonce(576).c(7);
  emojiNode = emojiNode.emojiNode;
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const v4Result = tmp(1266).v4();
    cResult[0] = v4Result;
    nonce = v4Result;
    const tmpResult = tmp(1266);
  } else {
    nonce = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        obj = closure_1(closure_2[9]);
        obj1 = { nonce: closure_0 };
        trackResult = obj.track(AnalyticEvents.CLOSE_POPOUT, obj1);
        return;
      }
    }
    cResult[1] = S;
  } else {
    class S {
      constructor() {
        obj = closure_1(closure_2[9]);
        obj1 = { nonce: closure_0 };
        trackResult = obj.track(AnalyticEvents.CLOSE_POPOUT, obj1);
        return;
      }
    }
  }
  if (cResult[2] !== emojiNode) {
    class S {
      constructor() {
        obj = closure_1(closure_2[9]);
        obj1 = { nonce: closure_0 };
        trackResult = obj.track(AnalyticEvents.CLOSE_POPOUT, obj1);
        return;
      }
    }
    const obj2 = { emojiNode, nonce };
    const tmp10 = jsx(StandardEmojiContentDefault, { emojiNode, nonce });
    cResult[2] = emojiNode;
    cResult[3] = tmp10;
  } else {
    class S {
      constructor() {
        obj = closure_1(closure_2[9]);
        obj1 = { nonce: closure_0 };
        trackResult = obj.track(AnalyticEvents.CLOSE_POPOUT, obj1);
        return;
      }
    }
  }
  if (cResult[4] === tmp4.contentWrapper) {
    class S {
      constructor() {
        obj = closure_1(closure_2[9]);
        obj1 = { nonce: closure_0 };
        trackResult = obj.track(AnalyticEvents.CLOSE_POPOUT, obj1);
        return;
      }
    }
    return tmp11;
  }
  const obj3 = { startExpanded: true, onDismiss: S, children: <View style={tmp4.contentWrapper}>{tmp8}</View> };
  tmp11 = jsx(nonce(6645).BottomSheet, { startExpanded: true, onDismiss: S, children: <View style={tmp4.contentWrapper}>{tmp8}</View> });
  cResult[4] = tmp4.contentWrapper;
  cResult[5] = tmp8;
  cResult[6] = tmp11;
  const obj = nonce(576);
  const obj4 = { style: tmp4.contentWrapper, children: tmp8 };
}) : ((emojiNode) => {
  let _require;
  const tmp = closure_6();
  const v4Result = require("v1").v4();
  _require = v4Result;
  const obj2 = {
    startExpanded: true,
    onDismiss() {
      AnalyticsUtilsDefault.track(AnalyticEvents.CLOSE_POPOUT, { nonce });
    },
    children: null
  };
  const obj = require("v1");
  obj2.children = <View style={tmp.contentWrapper}>{jsx(StandardEmojiContentDefault, { emojiNode: emojiNode.emojiNode, nonce: v4Result })}</View>;
  return jsx(require("Sheet/BottomSheet").BottomSheet, {
    startExpanded: true,
    onDismiss() {
      AnalyticsUtilsDefault.track(AnalyticEvents.CLOSE_POPOUT, { nonce });
    },
    children: null
  });
});
ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((emojiNode) => {
  const cResult = require("c").c(14);
  emojiNode = emojiNode.emojiNode;
  const tmp4 = closure_6();
  if (cResult[0] !== emojiNode.id) {
    const obj2 = { emojiId: emojiNode.id };
    cResult[0] = emojiNode.id;
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  const obj = require("c");
  const emojiAndSource = require("useEmojiAndSource").useEmojiAndSource(tmp5);
  ({ sourceType, expressionSourceGuild, expressionSourceApplication, hasJoinedEmojiSourceGuild, emoji } = emojiAndSource);
  if (emojiAndSource.isFetching) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const v4Result = tmp(1266).v4();
      cResult[2] = v4Result;
      let tmp8 = v4Result;
      const tmpResult2 = tmp(1266);
    } else {
      tmp8 = cResult[2];
    }
    _require = tmp8;
    const _Symbol2 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function y() {
        AnalyticsUtilsDefault.track(AnalyticEvents.CLOSE_POPOUT, { nonce });
      };
      cResult[3] = fn;
      let tmp10 = fn;
    } else {
      tmp10 = cResult[3];
    }
    if (cResult[4] === emoji) {
      if (cResult[5] === emojiNode) {
        if (cResult[6] === expressionSourceApplication) {
          if (cResult[7] === expressionSourceGuild) {
            if (cResult[8] === hasJoinedEmojiSourceGuild) {
              if (cResult[9] === sourceType) {
                let tmp11 = cResult[10];
              }
              if (cResult[11] === tmp4.contentWrapper) {
                if (cResult[12] === tmp11) {
                  let tmp15 = cResult[13];
                }
                return tmp15;
              }
              const obj3 = { startExpanded: true, onDismiss: tmp10, children: null };
              const obj4 = { style: tmp4.contentWrapper, children: tmp11 };
              obj3.children = <View style={tmp4.contentWrapper}>{tmp11}</View>;
              const tmp18 = jsx(tmp(6645).BottomSheet, { startExpanded: true, onDismiss: tmp10, children: null });
              cResult[11] = tmp4.contentWrapper;
              cResult[12] = tmp11;
              cResult[13] = tmp18;
              tmp15 = tmp18;
            }
          }
        }
      }
    }
    const obj5 = { emojiNode, sourceType, expressionSourceApplication, expressionSourceGuild, customEmojiFromJoinedGuild: emoji, hasJoinedEmojiSourceGuild, nonce: tmp8 };
    const tmp14 = jsx(CustomEmojiContentDefault, { emojiNode, sourceType, expressionSourceApplication, expressionSourceGuild, customEmojiFromJoinedGuild: emoji, hasJoinedEmojiSourceGuild, nonce: tmp8 });
    cResult[4] = emoji;
    cResult[5] = emojiNode;
    cResult[6] = expressionSourceApplication;
    cResult[7] = expressionSourceGuild;
    cResult[8] = hasJoinedEmojiSourceGuild;
    cResult[9] = sourceType;
    cResult[10] = tmp14;
    tmp11 = tmp14;
  }
  const tmpResult = require("useEmojiAndSource");
}) : ((emojiNode) => {
  emojiNode = emojiNode.emojiNode;
  let _require;
  const tmp = closure_6();
  const emojiAndSource = require("useEmojiAndSource").useEmojiAndSource({ emojiId: emojiNode.id });
  if (emojiAndSource.isFetching) {
    return null;
  } else {
    const v4Result = tmp2(1266).v4();
    _require = v4Result;
    const obj3 = {
      startExpanded: true,
      onDismiss() {
          AnalyticsUtilsDefault.track(AnalyticEvents.CLOSE_POPOUT, { nonce });
        },
      children: null
    };
    const obj4 = { style: tmp.contentWrapper, children: null };
    const obj5 = { emojiNode, sourceType: tmp5, expressionSourceApplication: tmp7, expressionSourceGuild: tmp6, customEmojiFromJoinedGuild: tmp9, hasJoinedEmojiSourceGuild: tmp8, nonce: v4Result };
    obj4.children = jsx(CustomEmojiContentDefault, { emojiNode, sourceType: tmp5, expressionSourceApplication: tmp7, expressionSourceGuild: tmp6, customEmojiFromJoinedGuild: tmp9, hasJoinedEmojiSourceGuild: tmp8, nonce: v4Result });
    obj3.children = <View style={tmp.contentWrapper}>{null}</View>;
    return jsx(tmp2(6645).BottomSheet, {
      startExpanded: true,
      onDismiss() {
          AnalyticsUtilsDefault.track(AnalyticEvents.CLOSE_POPOUT, { nonce });
        },
      children: null
    });
  }
  const obj = require("useEmojiAndSource");
  const obj2 = { emojiId: emojiNode.id };
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/emoji/MessageEmojiActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((emojiNode) => {
  const cResult = c.c(2);
  emojiNode = emojiNode.emojiNode;
  if (cResult[0] !== emojiNode) {
    if ("surrogate" in emojiNode) {
      const obj2 = { emojiNode };
      let tmp2Result = <closure_7 emojiNode={emojiNode} />;
    } else {
      const obj3 = { emojiNode };
      tmp2Result = <closure_8 emojiNode={emojiNode} />;
    }
    cResult[0] = emojiNode;
    cResult[1] = tmp2Result;
  } else {
    return cResult[1];
  }
}) : ((emojiNode) => {
  emojiNode = emojiNode.emojiNode;
  if ("surrogate" in emojiNode) {
    const obj2 = { emojiNode };
    let tmpResult = <closure_7 emojiNode={emojiNode} />;
  } else {
    const obj = { emojiNode };
    tmpResult = <closure_8 emojiNode={emojiNode} />;
  }
  return tmpResult;
});