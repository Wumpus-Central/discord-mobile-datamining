// discord_app/modules/message_request/native/RestrictedBlockedMessageGroup.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let obj2 = { toggle: { marginLeft: fn(17055).RESTRICTED_CONTENT_INSET, marginVertical: nativeDefault.space.PX_8 } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { marginLeft: fn(17055).RESTRICTED_CONTENT_INSET, marginVertical: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/RestrictedBlockedMessageGroup.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = renderMessage(576).c(18);
      ({ messages, renderMessage } = arg0);
      const tmp4 = closure_7();
      const obj = renderMessage(576);
      [tmp6, dependencyMap] = noop.useState(false);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function h() {
          dependencyMap((arg0) => !arg0);
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp6) {
        const obj2 = { expanded: tmp6 };
        cResult[1] = tmp6;
        cResult[2] = obj2;
        let tmp8 = obj2;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== messages.length) {
        const intl = renderMessage(1126).intl;
        const obj3 = { count: messages.length };
        const formatResult = intl.format(renderMessage(1126).t["+FcYM/"], obj3);
        cResult[3] = messages.length;
        cResult[4] = formatResult;
        let tmp9 = formatResult;
      } else {
        tmp9 = cResult[4];
      }
      if (cResult[5] !== tmp9) {
        const obj4 = { variant: "text-sm/medium", color: "text-muted", children: tmp9 };
        const tmp13 = closure_5(renderMessage(4886).Text, obj4);
        cResult[5] = tmp9;
        cResult[6] = tmp13;
        let tmp11 = tmp13;
      } else {
        tmp11 = cResult[6];
      }
      if (cResult[7] === tmp4.toggle) {
        if (cResult[8] === tmp8) {
          if (cResult[9] === tmp11) {
            let tmp14 = cResult[10];
          }
          if (cResult[11] === messages) {
            if (cResult[12] === renderMessage) {
              if (cResult[13] === tmp6) {
                let tmp16 = cResult[14];
              }
              if (cResult[15] === tmp14) {
                if (cResult[16] === tmp16) {
                  let tmp18 = cResult[17];
                }
                return tmp18;
              }
              const obj5 = { children: null };
              const items = [tmp14, tmp16];
              obj5.children = items;
              const tmp21 = closure_6(View, obj5);
              cResult[15] = tmp14;
              cResult[16] = tmp16;
              cResult[17] = tmp21;
              tmp18 = tmp21;
            }
          }
          let mapped = tmp6;
          if (tmp6) {
            mapped = messages.map((id) => hasOwnProperty(View, { children: renderMessage(id) }, id.id));
          }
          cResult[11] = messages;
          cResult[12] = renderMessage;
          cResult[13] = tmp6;
          cResult[14] = mapped;
          tmp16 = mapped;
        }
      }
      const tmp15 = closure_5(renderMessage(5909).PressableOpacity, {
        style: tmp4.toggle,
        accessibilityRole: "button",
        accessibilityState: tmp8,
        onPress: first,
        children: tmp11,
      });
      cResult[7] = tmp4.toggle;
      cResult[8] = tmp8;
      cResult[9] = tmp11;
      cResult[10] = tmp15;
      tmp14 = tmp15;
      const tmp5 = _slicedToArray(noop.useState(false), 2);
    }
  : (arg0) => {
      ({ messages, renderMessage: require } = arg0);
      dependencyMap = undefined;
      const tmp = closure_7();
      [tmp3, c1] = noop.useState(false);
      const callback = noop.useCallback(() => {
        _undefined((arg0) => !arg0);
      }, []);
      const obj = {
        style: tmp.toggle,
        accessibilityRole: "button",
        accessibilityState: { expanded: mapped },
        onPress: callback,
        children: null,
      };
      const obj2 = { variant: "text-sm/medium", color: "text-muted", children: null };
      const intl = util.intl;
      obj2.children = intl.format(util.t["+FcYM/"], { count: messages.length });
      obj.children = closure_5(Text_Text.Text, obj2);
      const children = [closure_5(Pressables.PressableOpacity, obj)];
      if (mapped) {
        mapped = messages.map((id) => hasOwnProperty(View, { children: require(id) }, id.id));
      }
      children[1] = mapped;
      return closure_6(View, { children });
    };
