// discord_app/modules/vibegrations/native/VibegrationsNativeStatusLine.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import MagicWandIcon from "../../../design/components/Icon/native/redesign/generated/MagicWandIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let items = [
  nativeDefault.colors.TEXT_BRAND,
  nativeDefault.colors.TEXT_FEEDBACK_POSITIVE,
  nativeDefault.colors.TEXT_FEEDBACK_WARNING,
  nativeDefault.colors.TEXT_FEEDBACK_INFO,
];
const createStyles = fn(4757);
let obj2 = {
  row: { flexDirection: "row", alignItems: "flex-start", paddingVertical: nativeDefault.space.PX_4 },
  glyphGutter: { width: 40, marginRight: 12, alignItems: "center" },
  label: { flex: 1 },
  trailing: null,
  chevron: null,
};
let obj3 = { flexDirection: "row", alignItems: "flex-start", paddingVertical: nativeDefault.space.PX_4 };
obj2.trailing = { flexShrink: 0, marginLeft: nativeDefault.space.PX_8 };
let obj4 = { flexShrink: 0, marginLeft: nativeDefault.space.PX_8 };
obj2.chevron = { flexShrink: 0, marginLeft: nativeDefault.space.PX_4 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeStatusLine.tsx");

export default function VibegrationsNativeStatusLine(live) {
  const line = live.line;
  let flag = live.settled;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = live.failed;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let str = live.presentation;
  if (str === undefined) {
    str = "headline";
  }
  ({ tint, inGutter } = live);
  if (inGutter === undefined) {
    inGutter = false;
  }
  const trailing = live.trailing;
  const glyph = live.glyph;
  ({ crestColor, epoch } = live);
  if (epoch === undefined) {
    epoch = 0;
  }
  let flag3 = live.expanded;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const onToggle = live.onToggle;
  let TEXT_BRAND;
  let str2;
  let ChevronSmallRightIcon;
  closure_8 = undefined;
  const tmp = closure_8();
  const row = tmp;
  if (flag2) {
    TEXT_BRAND = inGutter(trailing[3]).colors.TEXT_FEEDBACK_CRITICAL;
  } else {
    TEXT_BRAND = tint;
    if (tint == null) {
      TEXT_BRAND = inGutter(trailing[3]).colors.TEXT_BRAND;
    }
  }
  str2 = "text-feedback-critical";
  if (!flag2) {
    let str3 = "text-muted";
    if (!flag) {
      let str4 = "text-default";
      if (tmp7) {
        str4 = "text-subtle";
      }
      str3 = str4;
    }
    str2 = str3;
  }
  if ("detail" === str) {
    tint = inGutter(tmp9[3]).colors.TEXT_DEFAULT;
  } else if (tint == null) {
    tint = inGutter(tmp9[3]).colors.TEXT_BRAND;
  }
  if ("detail" === str) {
    crestColor = obj.useToken(tint);
  }
  if (flag3) {
    ChevronSmallRightIcon = tmp8(tmp9[6]).ChevronSmallDownIcon;
  } else {
    ChevronSmallRightIcon = tmp8(tmp9[7]).ChevronSmallRightIcon;
  }
  closure_8 = tmp14;
  items = [ChevronSmallRightIcon, null != onToggle, glyph, TEXT_BRAND, inGutter, line, tmp, str2, trailing];
  const callback = glyph.useCallback(() => {
    const obj = { style: row.row, children: null };
    let tmp6Result2 = null;
    if (inGutter) {
      const obj2 = { style: row.glyphGutter, children: null };
      let tmp6Result = glyph;
      if (glyph == null) {
        const obj3 = { size: "refresh_sm", color: TEXT_BRAND };
        tmp6Result = hasOwnProperty(MagicWandIcon.MagicWandIcon, obj3);
      }
      obj2.children = tmp6Result;
      tmp6Result2 = hasOwnProperty(View, obj2);
    }
    items = [tmp6Result2, , ,];
    const obj4 = { style: row.label, children: null };
    let str = "text-sm/normal";
    if (inGutter) {
      str = "text-md/normal";
    }
    obj4.children = hasOwnProperty(Text_Text.Text, { variant: str, color: str2, children: line });
    items[1] = hasOwnProperty(View, obj4);
    let tmp11Result = null;
    if (null != trailing) {
      const obj6 = { style: row.trailing, children: tmp13 };
      tmp11Result = hasOwnProperty(View, obj6);
    }
    items[2] = tmp11Result;
    let tmp11Result2 = null;
    if (closure_8) {
      const obj7 = { style: row.chevron, children: null };
      const obj8 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
      obj7.children = hasOwnProperty(ChevronSmallRightIcon, obj8);
      tmp11Result2 = hasOwnProperty(View, obj7);
    }
    items[3] = tmp11Result2;
    obj.children = items;
    return timestampProducer(View, obj);
  }, items);
  const tmp18 = TEXT_BRAND(inGutter(trailing[10]), { renderFace: callback, live: live.live, tint: crestColor, epoch });
  let tmp16Result = tmp18;
  if (null != onToggle) {
    let obj2 = {
      accessibilityRole: "button",
      accessibilityState: null,
      accessibilityLabel: null,
      hitSlop: 8,
      onPress: null,
      children: null,
    };
    let obj3 = { expanded: flag3 };
    obj2.accessibilityState = obj3;
    const intl = tmp8(tmp9[12]).intl;
    let obj4 = { activity: line };
    obj2.accessibilityLabel = intl.formatToPlainString(inGutter(tmp9[13]).s1wx5H, obj4);
    obj2.onPress = onToggle;
    obj2.children = tmp18;
    tmp16Result = TEXT_BRAND(tmp8(tmp9[11]).PressableOpacity, obj2);
  }
  return tmp16Result;
}
export const LANE_TINT_COUNT = items.length;
export const laneTintIndexFor = function laneTintIndexFor(key) {
  let length;
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  if (0 < key.length) {
    do {
      num3 = (31 * num3 + key.charCodeAt(num2)) % 2147483647;
      num2 = num2 + 1;
      num = num3;
      length = key.length;
    } while (num2 < length);
  }
  return num % items.length;
};
export const laneTintFor = function laneTintFor(str) {
  let length;
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  if (0 < str.length) {
    do {
      num3 = (31 * num3 + str.charCodeAt(num2)) % 2147483647;
      num2 = num2 + 1;
      num = num3;
      length = str.length;
    } while (num2 < length);
  }
  return items[num % items.length];
};
export const MESSAGE_AVATAR_SIZE = 40;
export const MESSAGE_EDGE_INSET = 12;
export const MESSAGE_AVATAR_GAP = 12;
export const MESSAGE_CONTENT_INSET = 64;
