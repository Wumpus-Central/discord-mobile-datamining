// discord_app/modules/messages/native/emoji/MessageEmojiActionSheet.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import Constants from "../../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import StandardEmojiContentDefault from "StandardEmojiContent.tsx";
import CustomEmojiContentDefault from "CustomEmojiContent.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let BottomSheet, emojiNode, nonce, obj1, trackResult;

const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = 16;
}
let obj = { contentWrapper: { paddingHorizontal: 16, paddingBottom: num } };
let closure_6 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (emojiNode) => {
      let tmp11;
      let obj = nonce(576);
      const cResult = obj.c(7);
      emojiNode = emojiNode.emojiNode;
      const tmp4 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult = nonce(1266);
        const v4Result = tmpResult.v4();
        cResult[0] = v4Result;
        nonce = v4Result;
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
        cResult[2] = emojiNode;
        cResult[3] = jsx(StandardEmojiContentDefault, { emojiNode, nonce });
        const tmp10 = jsx(StandardEmojiContentDefault, { emojiNode, nonce });
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
      BottomSheet = tmp(6645).BottomSheet;
      tmp11 = (
        <BottomSheet startExpanded onDismiss={S}>
          {null}
        </BottomSheet>
      );
      cResult[4] = tmp4.contentWrapper;
      cResult[5] = tmp8;
      cResult[6] = tmp11;
    }
  : (emojiNode) => {
      let _require;
      emojiNode = emojiNode.emojiNode;
      const tmp = closure_6();
      let obj = require("v1");
      _require = obj.v4();
      const v4Result = obj.v4();
      BottomSheet = require("Sheet/BottomSheet").BottomSheet;
      return (
        <BottomSheet
          startExpanded
          onDismiss={function onDismiss() {
            const obj = AnalyticsUtilsDefault;
            const obj2 = { nonce };
            obj.track(AnalyticEvents.CLOSE_POPOUT, obj2);
          }}
        >
          {null}
        </BottomSheet>
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (emojiNode) => {
      let _require;
      let emoji;
      let expressionSourceApplication;
      let expressionSourceGuild;
      let hasJoinedEmojiSourceGuild;
      let sourceType;
      let tmp5;
      let obj = require("react");
      const cResult = obj.c(14);
      emojiNode = emojiNode.emojiNode;
      const tmp4 = closure_6();
      if (cResult[0] !== emojiNode.id) {
        let obj2 = { emojiId: emojiNode.id };
        cResult[0] = emojiNode.id;
        cResult[1] = obj2;
        tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      const tmpResult = require("useEmojiAndSource");
      const emojiAndSource = tmpResult.useEmojiAndSource(tmp5);
      ({ sourceType, expressionSourceGuild, expressionSourceApplication, hasJoinedEmojiSourceGuild, emoji } =
        emojiAndSource);
      if (emojiAndSource.isFetching) {
        return null;
      } else {
        let tmp8;
        let tmp10;
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const tmpResult2 = require("v1");
          const v4Result = tmpResult2.v4();
          cResult[2] = v4Result;
          tmp8 = v4Result;
        } else {
          tmp8 = cResult[2];
        }
        _require = tmp8;
        const _Symbol2 = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function y() {
            const obj = AnalyticsUtilsDefault;
            const obj2 = { nonce };
            obj.track(AnalyticEvents.CLOSE_POPOUT, obj2);
          };
          cResult[3] = fn;
          tmp10 = fn;
        } else {
          tmp10 = cResult[3];
        }
        if (cResult[4] === emoji) {
          if (cResult[5] === emojiNode) {
            if (cResult[6] === expressionSourceApplication) {
              if (cResult[7] === expressionSourceGuild) {
                if (cResult[8] === hasJoinedEmojiSourceGuild) {
                  let tmp11;
                  if (cResult[9] === sourceType) {
                    tmp11 = cResult[10];
                  }
                  if (cResult[11] === tmp4.contentWrapper) {
                    let tmp15;
                    if (cResult[12] === tmp11) {
                      tmp15 = cResult[13];
                    }
                    return tmp15;
                  }
                  BottomSheet = tmp(6645).BottomSheet;
                  const tmp18 = (
                    <BottomSheet startExpanded onDismiss={tmp10}>
                      {null}
                    </BottomSheet>
                  );
                  cResult[11] = tmp4.contentWrapper;
                  cResult[12] = tmp11;
                  cResult[13] = tmp18;
                  tmp15 = tmp18;
                }
              }
            }
          }
        }
        const tmp14 = jsx(CustomEmojiContentDefault, {
          emojiNode,
          sourceType,
          expressionSourceApplication,
          expressionSourceGuild,
          customEmojiFromJoinedGuild: emoji,
          hasJoinedEmojiSourceGuild,
          nonce: tmp8,
        });
        cResult[4] = emoji;
        cResult[5] = emojiNode;
        cResult[6] = expressionSourceApplication;
        cResult[7] = expressionSourceGuild;
        cResult[8] = hasJoinedEmojiSourceGuild;
        cResult[9] = sourceType;
        cResult[10] = tmp14;
        tmp11 = tmp14;
      }
    }
  : (emojiNode) => {
      emojiNode = emojiNode.emojiNode;
      let _require;
      const tmp = closure_6();
      let obj = require("useEmojiAndSource");
      let obj2 = { emojiId: emojiNode.id };
      const emojiAndSource = obj.useEmojiAndSource(obj2);
      if (emojiAndSource.isFetching) {
        return null;
      } else {
        const tmp2Result = require("v1");
        const v4Result = tmp2Result.v4();
        _require = v4Result;
        BottomSheet = tmp2(6645).BottomSheet;
        return (
          <BottomSheet
            startExpanded
            onDismiss={function onDismiss() {
              const obj = AnalyticsUtilsDefault;
              const obj2 = { nonce };
              obj.track(AnalyticEvents.CLOSE_POPOUT, obj2);
            }}
          >
            {null}
          </BottomSheet>
        );
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (emojiNode) => {
      let tmp2;
      const obj = react2;
      const cResult = obj.c(2);
      emojiNode = emojiNode.emojiNode;
      if (cResult[0] !== emojiNode) {
        let tmp3Result;
        if ("surrogate" in emojiNode) {
          tmp3Result = <closure_7 emojiNode={emojiNode} />;
        } else {
          tmp3Result = <closure_8 emojiNode={emojiNode} />;
        }
        cResult[0] = emojiNode;
        cResult[1] = tmp3Result;
        tmp2 = tmp3Result;
      } else {
        tmp2 = cResult[1];
      }
      return tmp2;
    }
  : (emojiNode) => {
      let tmpResult;
      emojiNode = emojiNode.emojiNode;
      if ("surrogate" in emojiNode) {
        tmpResult = <closure_7 emojiNode={emojiNode} />;
      } else {
        tmpResult = <closure_8 emojiNode={emojiNode} />;
      }
      return tmpResult;
    };
const result = size.fileFinishedImporting("modules/messages/native/emoji/MessageEmojiActionSheet.tsx");

export default tmp4;
