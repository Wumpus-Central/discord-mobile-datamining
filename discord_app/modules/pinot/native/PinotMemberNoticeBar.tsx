// discord_app/modules/pinot/native/PinotMemberNoticeBar.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3156 from "../Pinot.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1084).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const hitSlop = { top: 8, bottom: 8, left: 8, right: 8 };
const createStyles = fn(5005);
let obj2 = {
  underlay: { backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND },
  bar: null,
  text: null,
  link: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
obj2.bar = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  paddingVertical: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_16,
  borderTopWidth: 1,
  borderBottomWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_FEEDBACK_INFO,
  borderBottomColor: nativeDefault.colors.BORDER_FEEDBACK_INFO,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO,
};
obj2.text = { flex: 1 };
obj2.link = { textDecorationLine: "underline" };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  paddingVertical: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_16,
  borderTopWidth: 1,
  borderBottomWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_FEEDBACK_INFO,
  borderBottomColor: nativeDefault.colors.BORDER_FEEDBACK_INFO,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/pinot/native/PinotMemberNoticeBar.tsx");

export const PinotMemberNoticeBar = ReactCompilerGating.isReactCompilerEnabled()
  ? function PinotMemberNoticeBar(onDismiss) {
      const cResult = require("c").c(16);
      onDismiss = onDismiss.onDismiss;
      const tmp4 = closure_8();
      _require = tmp4;
      ({ underlay, bar, text } = tmp4);
      if (cResult[0] !== tmp4.link) {
        const intl = tmp(1125).intl;
        const obj2 = {
          learnMoreHook(children, id) {
            return hasOwnProperty(
              Text_Text.Text,
              {
                variant: "text-sm/normal",
                color: "text-default",
                style: link.link,
                accessibilityRole: "link",
                onPress() {
                  const obj = closure_1_1(5698);
                  return obj.openURL(closure_1_1(2065).getArticleURL(constants.SERVER_WEB_PAGES));
                },
                children,
              },
              id,
            );
          },
        };
        const formatResult = intl.format(_modDef3156.Jry6Gr, obj2);
        cResult[0] = tmp4.link;
        cResult[1] = formatResult;
        let tmp5 = formatResult;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.text) {
        if (cResult[3] === tmp5) {
          let tmp8 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1125).intl;
          const stringResult = intl2.string(tmp(1125).t.WAI6xu);
          cResult[5] = stringResult;
          let tmp11 = stringResult;
        } else {
          tmp11 = cResult[5];
        }
        const _Symbol2 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp15 = closure_5(tmp(6991).XSmallIcon, { size: "sm", color: "icon-muted" });
          cResult[6] = tmp15;
          let tmp13 = tmp15;
        } else {
          tmp13 = cResult[6];
        }
        if (cResult[7] !== onDismiss) {
          const obj3 = {
            accessibilityRole: "button",
            accessibilityLabel: tmp11,
            hitSlop,
            onPress: onDismiss,
            children: tmp13,
          };
          const tmp19 = closure_5(tmp(6968).PressableOpacity, obj3);
          cResult[7] = onDismiss;
          cResult[8] = tmp19;
          let tmp16 = tmp19;
        } else {
          tmp16 = cResult[8];
        }
        if (cResult[9] === tmp4.bar) {
          if (cResult[10] === tmp8) {
            if (cResult[11] === tmp16) {
              let tmp20 = cResult[12];
            }
            if (cResult[13] === tmp4.underlay) {
              if (cResult[14] === tmp20) {
                let tmp24 = cResult[15];
              }
              return tmp24;
            }
            const obj4 = { style: underlay, children: tmp20 };
            const tmp27 = closure_5(View, obj4);
            cResult[13] = tmp4.underlay;
            cResult[14] = tmp20;
            cResult[15] = tmp27;
            tmp24 = tmp27;
          }
        }
        const obj5 = { style: bar, children: null };
        const items = [tmp8, tmp16];
        obj5.children = items;
        const tmp23 = closure_6(View, obj5);
        cResult[9] = tmp4.bar;
        cResult[10] = tmp8;
        cResult[11] = tmp16;
        cResult[12] = tmp23;
        tmp20 = tmp23;
      }
      const tmp9 = closure_5(require("Text/Text").Text, {
        variant: "text-sm/normal",
        color: "text-default",
        style: text,
        children: tmp5,
      });
      cResult[2] = tmp4.text;
      cResult[3] = tmp5;
      cResult[4] = tmp9;
      tmp8 = tmp9;
      let obj = require("c");
    }
  : function PinotMemberNoticeBar(onDismiss) {
      const tmp = closure_8();
      _require = tmp;
      let obj = { style: tmp.underlay, children: null };
      const obj2 = { style: tmp.bar, children: null };
      const obj3 = { variant: "text-sm/normal", color: "text-default", style: tmp.text, children: null };
      const intl = require("util").intl;
      obj3.children = intl.format(_modDef3156.Jry6Gr, {
        learnMoreHook(children, id) {
          return hasOwnProperty(
            Text_Text.Text,
            {
              variant: "text-sm/normal",
              color: "text-default",
              style: link.link,
              accessibilityRole: "link",
              onPress() {
                const obj = closure_1_1(5698);
                return obj.openURL(closure_1_1(2065).getArticleURL(constants.SERVER_WEB_PAGES));
              },
              children,
            },
            id,
          );
        },
      });
      const items = [closure_5(require("Text/Text").Text, obj3)];
      const obj5 = {
        accessibilityRole: "button",
        accessibilityLabel: null,
        hitSlop: null,
        onPress: null,
        children: null,
      };
      const intl2 = require("util").intl;
      obj5.accessibilityLabel = intl2.string(require("util").t.WAI6xu);
      obj5.hitSlop = hitSlop;
      obj5.onPress = onDismiss.onDismiss;
      obj5.children = closure_5(require("XSmallIcon").XSmallIcon, { size: "sm", color: "icon-muted" });
      items[1] = closure_5(require("Pressables").PressableOpacity, obj5);
      obj2.children = items;
      obj.children = closure_6(View, obj2);
      return closure_5(View, obj);
    };
