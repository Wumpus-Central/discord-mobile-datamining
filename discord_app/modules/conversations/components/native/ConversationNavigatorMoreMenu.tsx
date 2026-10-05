// === Module 7570: ConversationNavigatorMoreMenu ===

// Module 7570 (ConversationNavigatorMoreMenu)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import ToastUtils from "ToastUtils" /* 4567 */;
import ConversationsActionCreators from "ConversationsActionCreators" /* 7550 */;
import ConversationsAnalytics2 from "ConversationsAnalytics" /* 7552 */;
import ThumbsUpIcon from "ThumbsUpIcon" /* 7571 */;
import ThumbsDownIcon from "ThumbsDownIcon" /* 7573 */;
import IconButton2 from "IconButton" /* 7575 */;
import MoreHorizontalIcon from "MoreHorizontalIcon" /* 7577 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channelId;

let obj2;
let closure_2 = ["ref"];
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_12 };
let closure_7 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let conversationId;
  let first;
  let tmp = channelId;
  let obj = channelId(conversationId[7]);
  const cResult = obj.c(16);
  channelId = channelId.channelId;
  conversationId = channelId.conversationId;
  const tmp4 = closure_7();
  const container = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = tmp(tmp2[8]).intl;
    const stringResult = intl.string(tmp(conversationId[8]).t["7iRs51"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channelId) {
    let tmp7;
    let tmp8;
    if (cResult[2] === conversationId) {
      tmp7 = cResult[3];
    }
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(tmp2[8]).intl;
      const stringResult1 = intl2.string(tmp(conversationId[8]).t.uNGhdg);
      cResult[4] = stringResult1;
      tmp8 = stringResult1;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] === channelId) {
      let tmp10;
      if (cResult[6] === conversationId) {
        tmp10 = cResult[7];
      }
      if (cResult[8] === tmp7) {
        let tmp11;
        let tmp12;
        if (cResult[9] === tmp10) {
          tmp11 = cResult[10];
        }
        if (cResult[11] !== tmp4.container) {
          const fn = function f(ref) {
            let intl;
            ({ size: "sm", variant: "tertiary", accessibilityLabel: intl.string(intl3.t["6Ic4Ev"]), icon: jsx(MoreHorizontalIcon.MoreHorizontalIcon, { size: "sm" }) });
            const tmp = _objectWithoutProperties(ref, container);
            const IconButton = IconButton2.IconButton;
            const merged = Object.assign(tmp);
            intl = intl3.intl;
            return <View style={container.container} ref={ref.ref}>{null}</View>;
          };
          cResult[11] = tmp4.container;
          cResult[12] = fn;
          tmp12 = fn;
        } else {
          tmp12 = cResult[12];
        }
        if (cResult[13] === tmp11) {
          let tmp13;
          if (cResult[14] === tmp12) {
            tmp13 = cResult[15];
          }
          return tmp13;
        }
        const tmp15 = jsx(tmp(conversationId[16]).ContextMenu, { items: tmp11, children: tmp12 });
        cResult[13] = tmp11;
        cResult[14] = tmp12;
        cResult[15] = tmp15;
        tmp13 = tmp15;
      }
      const items = [tmp7, tmp10];
      cResult[8] = tmp7;
      cResult[9] = tmp10;
      cResult[10] = items;
      tmp11 = items;
    }
    let obj3 = {
      label: tmp8,
      IconComponent: tmp(conversationId[13]).ThumbsDownIcon,
      action() {
          const obj = ConversationsActionCreators;
          const result = obj.setConversationFeedbackRating(channelId, conversationId, "down");
          const ConversationsAnalytics = ConversationsAnalytics2.ConversationsAnalytics;
          const obj2 = { channelId, conversationId, isThumbsUp: false, isFocusMode: true };
          ConversationsAnalytics.trackThumbsClicked(obj2);
          const obj3 = ToastUtils;
          obj3.presentFeedbackSent();
        }
    };
    cResult[5] = channelId;
    cResult[6] = conversationId;
    cResult[7] = obj3;
    tmp10 = obj3;
  }
  const obj4 = {
    label: first,
    IconComponent: tmp(conversationId[9]).ThumbsUpIcon,
    action() {
      const obj = ConversationsActionCreators;
      const result = obj.setConversationFeedbackRating(channelId, conversationId, "up");
      const ConversationsAnalytics = ConversationsAnalytics2.ConversationsAnalytics;
      const obj2 = { channelId, conversationId, isThumbsUp: true, isFocusMode: true };
      ConversationsAnalytics.trackThumbsClicked(obj2);
      const obj3 = ToastUtils;
      obj3.presentFeedbackSent();
    }
  };
  cResult[1] = channelId;
  cResult[2] = conversationId;
  cResult[3] = obj4;
  tmp7 = obj4;
}) : ((channelId) => {
  channelId = channelId.channelId;
  const conversationId = channelId.conversationId;
  const container = closure_7();
  let items = [channelId, conversationId];
  const memo = react.useMemo(() => {
    let intl;
    let intl2;
    let obj = {
      label: intl.string(intl3.t["7iRs51"]),
      IconComponent: ThumbsUpIcon.ThumbsUpIcon,
      action() {
        const obj = channelId(conversationId[10]);
        const result = obj.setConversationFeedbackRating(channelId, conversationId, "up");
        const ConversationsAnalytics = channelId(conversationId[11]).ConversationsAnalytics;
        const obj2 = { channelId, conversationId, isThumbsUp: true, isFocusMode: true };
        ConversationsAnalytics.trackThumbsClicked(obj2);
        const obj3 = channelId(conversationId[12]);
        obj3.presentFeedbackSent();
      }
    };
    intl = intl3.intl;
    const items = [obj, ];
    let obj2 = {
      label: intl2.string(intl3.t.uNGhdg),
      IconComponent: ThumbsDownIcon.ThumbsDownIcon,
      action() {
        const obj = channelId(conversationId[10]);
        const result = obj.setConversationFeedbackRating(channelId, conversationId, "down");
        const ConversationsAnalytics = channelId(conversationId[11]).ConversationsAnalytics;
        const obj2 = { channelId, conversationId, isThumbsUp: false, isFocusMode: true };
        ConversationsAnalytics.trackThumbsClicked(obj2);
        const obj3 = channelId(conversationId[12]);
        obj3.presentFeedbackSent();
      }
    };
    intl2 = intl3.intl;
    items[1] = obj2;
    return items;
  }, items);
  return jsx(channelId(conversationId[16]).ContextMenu, {
    items: memo,
    children(ref) {
      let intl;
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      ({ size: "sm", variant: "tertiary", accessibilityLabel: intl.string(intl3.t["6Ic4Ev"]), icon: jsx(MoreHorizontalIcon.MoreHorizontalIcon, { size: "sm" }) });
      const IconButton = IconButton2.IconButton;
      const merged1 = Object.assign(merged);
      intl = intl3.intl;
      return <View style={container.container} ref={ref.ref}>{null}</View>;
    }
  });
});
let result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorMoreMenu.tsx");

export default tmp2;