// discord_app/modules/conversations/components/native/ConversationNavigatorMoreMenu.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import ConversationsActionCreators from "../../ConversationsActionCreators.tsx";
import ConversationsAnalytics2 from "../../ConversationsAnalytics.tsx";
import ThumbsUpIcon from "../../../../design/components/Icon/native/redesign/generated/ThumbsUpIcon.tsx";
import ThumbsDownIcon from "../../../../design/components/Icon/native/redesign/generated/ThumbsDownIcon.tsx";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import MoreHorizontalIcon from "../../../../design/components/Icon/native/redesign/generated/MoreHorizontalIcon.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["ref"];
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { container: { paddingHorizontal: nativeDefault.space.PX_12 } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { paddingHorizontal: nativeDefault.space.PX_12 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorMoreMenu.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      const cResult = channelId(conversationId[7]).c(16);
      channelId = channelId.channelId;
      conversationId = channelId.conversationId;
      const tmp4 = closure_7();
      const container = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = tmp(tmp2[8]).intl;
        const stringResult = intl.string(tmp(tmp2[8]).t["7iRs51"]);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === channelId) {
        if (cResult[2] === conversationId) {
          let tmp7 = cResult[3];
        }
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(tmp2[8]).intl;
          const stringResult1 = intl2.string(tmp(tmp2[8]).t.uNGhdg);
          cResult[4] = stringResult1;
          let tmp8 = stringResult1;
        } else {
          tmp8 = cResult[4];
        }
        if (cResult[5] === channelId) {
          if (cResult[6] === conversationId) {
            let tmp10 = cResult[7];
          }
          if (cResult[8] === tmp7) {
            if (cResult[9] === tmp10) {
              let tmp11 = cResult[10];
            }
            if (cResult[11] !== tmp4.container) {
              const fn = function f(ref) {
                const obj = { style: container.container, ref: ref.ref, children: null };
                const obj2 = {};
                const merged = Object.assign(_objectWithoutProperties(ref, container));
                obj2.size = "sm";
                obj2.variant = "tertiary";
                const intl = util.intl;
                obj2.accessibilityLabel = intl.string(util.t["6Ic4Ev"]);
                obj2.icon = jsx(MoreHorizontalIcon.MoreHorizontalIcon, { size: "sm" });
                obj.children = jsx(IconButton.IconButton, {});
                return (
                  <View style={container.container} ref={ref.ref}>
                    {null}
                  </View>
                );
              };
              cResult[11] = tmp4.container;
              cResult[12] = fn;
              let tmp12 = fn;
            } else {
              tmp12 = cResult[12];
            }
            if (cResult[13] === tmp11) {
              if (cResult[14] === tmp12) {
                let tmp13 = cResult[15];
              }
              return tmp13;
            }
            let obj2 = { items: tmp11, children: tmp12 };
            const tmp15 = jsx(tmp(tmp2[16]).ContextMenu, { items: tmp11, children: tmp12 });
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
        const obj3 = {
          label: tmp8,
          IconComponent: tmp(tmp2[13]).ThumbsDownIcon,
          action() {
            const result = ConversationsActionCreators.setConversationFeedbackRating(channelId, conversationId, "down");
            const ConversationsAnalytics = ConversationsAnalytics2.ConversationsAnalytics;
            ConversationsAnalytics.trackThumbsClicked({
              channelId,
              conversationId,
              isThumbsUp: false,
              isFocusMode: true,
            });
            const obj2 = { channelId, conversationId, isThumbsUp: false, isFocusMode: true };
            ToastUtils.presentFeedbackSent();
          },
        };
        cResult[5] = channelId;
        cResult[6] = conversationId;
        cResult[7] = obj3;
        tmp10 = obj3;
      }
      const obj4 = {
        label: first,
        IconComponent: channelId(conversationId[9]).ThumbsUpIcon,
        action() {
          const result = ConversationsActionCreators.setConversationFeedbackRating(channelId, conversationId, "up");
          const ConversationsAnalytics = ConversationsAnalytics2.ConversationsAnalytics;
          ConversationsAnalytics.trackThumbsClicked({ channelId, conversationId, isThumbsUp: true, isFocusMode: true });
          const obj2 = { channelId, conversationId, isThumbsUp: true, isFocusMode: true };
          ToastUtils.presentFeedbackSent();
        },
      };
      cResult[1] = channelId;
      cResult[2] = conversationId;
      cResult[3] = obj4;
      tmp7 = obj4;
      let obj = channelId(conversationId[7]);
    }
  : (channelId) => {
      channelId = channelId.channelId;
      const conversationId = channelId.conversationId;
      const container = closure_7();
      let items = [channelId, conversationId];
      const memo = noop.useMemo(() => {
        let obj = { label: null, IconComponent: null, action: null };
        const intl = util.intl;
        obj.label = intl.string(util.t["7iRs51"]);
        obj.IconComponent = ThumbsUpIcon.ThumbsUpIcon;
        obj.action = function action() {
          const result = channelId(conversationId[10]).setConversationFeedbackRating(channelId, conversationId, "up");
          const ConversationsAnalytics = channelId(conversationId[11]).ConversationsAnalytics;
          ConversationsAnalytics.trackThumbsClicked({ channelId, conversationId, isThumbsUp: true, isFocusMode: true });
          const obj = channelId(conversationId[10]);
          const obj2 = { channelId, conversationId, isThumbsUp: true, isFocusMode: true };
          channelId(conversationId[12]).presentFeedbackSent();
        };
        const items = [obj];
        let obj2 = { label: null, IconComponent: null, action: null };
        const intl2 = util.intl;
        obj2.label = intl2.string(util.t.uNGhdg);
        obj2.IconComponent = ThumbsDownIcon.ThumbsDownIcon;
        obj2.action = function action() {
          const result = channelId(conversationId[10]).setConversationFeedbackRating(channelId, conversationId, "down");
          const ConversationsAnalytics = channelId(conversationId[11]).ConversationsAnalytics;
          ConversationsAnalytics.trackThumbsClicked({
            channelId,
            conversationId,
            isThumbsUp: false,
            isFocusMode: true,
          });
          const obj = channelId(conversationId[10]);
          const obj2 = { channelId, conversationId, isThumbsUp: false, isFocusMode: true };
          channelId(conversationId[12]).presentFeedbackSent();
        };
        items[1] = obj2;
        return items;
      }, items);
      return jsx(channelId(conversationId[16]).ContextMenu, {
        items: memo,
        children(ref) {
          const obj = { style: container.container, ref: ref.ref, children: null };
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const obj2 = {};
          const merged1 = Object.assign(merged);
          obj2.size = "sm";
          obj2.variant = "tertiary";
          const intl = util.intl;
          obj2.accessibilityLabel = intl.string(util.t["6Ic4Ev"]);
          obj2.icon = jsx(MoreHorizontalIcon.MoreHorizontalIcon, { size: "sm" });
          obj.children = jsx(IconButton.IconButton, {});
          return (
            <View style={container.container} ref={ref.ref}>
              {null}
            </View>
          );
        },
      });
    };
