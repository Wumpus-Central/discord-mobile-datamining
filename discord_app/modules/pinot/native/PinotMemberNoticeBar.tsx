// discord_app/modules/pinot/native/PinotMemberNoticeBar.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3157 from "../Pinot.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1072).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const hitSlop = { top: 8, bottom: 8, left: 8, right: 8 };
const createStyles = fn(5009);
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/pinot/native/PinotMemberNoticeBar.tsx");

export function PinotMemberNoticeBar(onDismiss) {
  const tmp = closure_8();
  _require = tmp;
  let obj = { style: tmp.underlay, children: null };
  const obj2 = { style: tmp.bar, children: null };
  const obj3 = { variant: "text-sm/normal", color: "text-default", style: tmp.text, children: null };
  const intl = require("util").intl;
  obj3.children = intl.format(_modDef3157.Jry6Gr, {
    learnMoreHook(children, id) {
      return hasOwnProperty(
        Text_Text.Text,
        {
          variant: "text-sm/normal",
          color: "text-default",
          style: link.link,
          accessibilityRole: "link",
          onPress() {
            const obj = closure_1_1(5704);
            return obj.openURL(closure_1_1(2062).getArticleURL(constants.SERVER_WEB_PAGES));
          },
          children,
        },
        id,
      );
    },
  });
  const items = [closure_5(require("Text/Text").Text, obj3)];
  const obj5 = { accessibilityRole: "button", accessibilityLabel: null, hitSlop: null, onPress: null, children: null };
  const intl2 = require("util").intl;
  obj5.accessibilityLabel = intl2.string(require("util").t.WAI6xu);
  obj5.hitSlop = hitSlop;
  obj5.onPress = onDismiss.onDismiss;
  obj5.children = closure_5(require("XSmallIcon").XSmallIcon, { size: "sm", color: "icon-muted" });
  items[1] = closure_5(require("Pressables").PressableOpacity, obj5);
  obj2.children = items;
  obj.children = closure_6(View, obj2);
  return closure_5(View, obj);
}
