// discord_app/modules/conjure/plan/native/ConjurePlanAutomodExamples.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import AvatarUtils from "../../../../utils/AvatarUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ConjurePlanAutomodOutcomes from "../ConjurePlanAutomodOutcomes.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
function ExampleRow(showReason) {
  ({ example, username } = showReason);
  const tmp = closure_8();
  const obj = ConjurePlanAutomodOutcomes.CONJURE_PLAN_AUTOMOD_OUTCOMES[example.outcome];
  const blockedStyle = obj.blockedStyle;
  let result = null;
  if (showReason.showReason) {
    result = ConjurePlanAutomodOutcomes.planAutomodReasonText(example);
    const tmp2Result = ConjurePlanAutomodOutcomes;
  }
  const items = [tmp.row];
  let blockedRow = blockedStyle;
  if (blockedStyle) {
    blockedRow = tmp.blockedRow;
  }
  const obj2 = { style: items, accessible: true, accessibilityLabel: null, children: null };
  items[1] = blockedRow;
  const items1 = ["" + obj.label() + ": " + username + ", " + example.content, result];
  const found = items1.filter((item) => null != item);
  obj2.accessibilityLabel = found.join(", ");
  let tmp7 = null;
  if (blockedStyle) {
    const obj3 = { style: tmp.blockedBar };
    tmp7 = React3(View, obj3);
  }
  const items2 = [tmp7, ,];
  const obj4 = { source: null, size: null };
  const tmp2Result4 = AvatarUtils;
  obj4.source = tmp2Result4.makeSource(AvatarUtils.getDefaultAvatarURL(undefined, undefined));
  obj4.size = native.AvatarSizes.XSMALL;
  items2[1] = React3(native.Avatar, obj4);
  const obj5 = { style: tmp.rowBody, children: null };
  const items3 = [React3(Text_Text.Text, { variant: "text-sm/semibold", color: "text-strong", children: username }), ,];
  const obj6 = { variant: "text-sm/normal", color: "text-default", children: null };
  const tmp2Result5 = AvatarUtils;
  obj6.children = ConjurePlanAutomodOutcomes.renderPlanAutomodExampleContent(example.content);
  items3[1] = React3(Text_Text.Text, obj6);
  let tmp9Result = null;
  if (null != result) {
    const obj7 = { variant: "text-xs/normal", color: "text-muted", lineClamp: 2, children: result };
    tmp9Result = React3(Text_Text.Text, obj7);
  }
  items3[2] = tmp9Result;
  obj5.children = items3;
  items2[2] = React4(View, obj5);
  obj2.children = items2;
  return React4(View, obj2);
}
function ExampleSection(arg0) {
  ({ group, firstIndex: require } = arg0);
  let set;
  const tmp = closure_8();
  const obj = require("ConjurePlanAutomodOutcomes").CONJURE_PLAN_AUTOMOD_SECTIONS[group.section];
  const examples = group.examples;
  set = new Set(examples.map(require("ConjurePlanAutomodOutcomes").planAutomodReasonText));
  let result = null;
  if (1 === set.size) {
    result = require("ConjurePlanAutomodOutcomes").planAutomodReasonText(group.examples[0]);
    const tmp2Result = require("ConjurePlanAutomodOutcomes");
  }
  const obj2 = { style: tmp.section, children: null };
  const obj3 = { style: tmp.caption, accessibilityRole: "header", children: null };
  const items = [
    closure_3(require("Text/Text").Text, {
      variant: "text-xs/semibold",
      color: closure_6[obj.tone],
      children: obj.label(),
    }),
  ];
  let tmp6Result = null;
  if (null != result) {
    const obj5 = { children: null };
    const obj6 = {
      variant: "text-xs/semibold",
      color: "text-muted",
      style: tmp.dot,
      accessible: false,
      children: "\u00B7",
    };
    const items1 = [closure_3(require("Text/Text").Text, obj6)];
    const obj7 = { variant: "text-xs/semibold", color: "text-muted", children: result };
    items1[1] = closure_3(require("Text/Text").Text, obj7);
    obj5.children = items1;
    tmp6Result = closure_4(closure_5, obj5);
  }
  items[1] = tmp6Result;
  obj3.children = items;
  const items2 = [closure_4(View, obj3)];
  const obj8 = { style: tmp.rows, children: null };
  const examples1 = group.examples;
  obj8.children = examples1.map((example, index) =>
    React3(
      ExampleRow,
      { example, username: length[(_require + index) % length.length], showReason: set.size > 1 },
      index,
    ),
  );
  items2[1] = closure_3(View, obj8);
  obj2.children = items2;
  return closure_4(View, obj2);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4, Fragment: hasOwnProperty } = jsxProd);
let closure_6 = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
let closure_7 = ["glazedgamer", "sprinkles", "donutking"];
const createStyles = fn(5009);
let obj2 = {
  card: {
    gap: nativeDefault.space.PX_16,
    paddingVertical: nativeDefault.space.PX_12,
    borderRadius: nativeDefault.radii.sm,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_SUBTLE,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
    overflow: "hidden",
  },
  rule: null,
  section: null,
  caption: null,
  dot: null,
  rows: null,
  row: null,
  blockedRow: null,
  blockedBar: null,
  rowBody: null,
};
let obj3 = {
  gap: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  overflow: "hidden",
};
obj2.rule = {
  paddingHorizontal: nativeDefault.space.PX_12,
  paddingBottom: nativeDefault.space.PX_12,
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
};
let obj4 = {
  paddingHorizontal: nativeDefault.space.PX_12,
  paddingBottom: nativeDefault.space.PX_12,
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.section = { gap: nativeDefault.space.PX_4 };
let obj5 = { gap: nativeDefault.space.PX_4 };
obj2.caption = {
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "baseline",
  paddingHorizontal: nativeDefault.space.PX_12,
};
let obj6 = {
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "baseline",
  paddingHorizontal: nativeDefault.space.PX_12,
};
obj2.dot = { marginHorizontal: nativeDefault.space.PX_8 };
let obj7 = { marginHorizontal: nativeDefault.space.PX_8 };
obj2.rows = { gap: nativeDefault.space.PX_4 };
let obj8 = { gap: nativeDefault.space.PX_4 };
obj2.row = {
  flexDirection: "row",
  alignItems: "flex-start",
  gap: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_6,
  paddingHorizontal: nativeDefault.space.PX_12,
};
const obj9 = {
  flexDirection: "row",
  alignItems: "flex-start",
  gap: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_6,
  paddingHorizontal: nativeDefault.space.PX_12,
};
obj2.blockedRow = { backgroundColor: nativeDefault.colors.MESSAGE_AUTOMOD_BACKGROUND_DEFAULT };
const rect = {
  position: "absolute",
  top: 0,
  bottom: 0,
  start: 0,
  width: 2,
  backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL,
};
obj2.blockedBar = rect;
const obj10 = { backgroundColor: nativeDefault.colors.MESSAGE_AUTOMOD_BACKGROUND_DEFAULT };
obj2.rowBody = { flex: 1, minWidth: 0, gap: nativeDefault.space.PX_4 / 2 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanAutomodExamples.tsx");

export default function ConjurePlanAutomodExamples(automod) {
  automod = automod.automod;
  _require = undefined;
  const tmp = closure_8();
  const result = require("ConjurePlanAutomodOutcomes").groupPlanAutomodExamples(automod.examples);
  _require = result;
  const trimmed = automod.rule_name.trim();
  const obj2 = { style: tmp.card, children: null };
  let tmp7 = null;
  if ("" !== trimmed) {
    const obj3 = { style: tmp.rule, children: null };
    const obj4 = { variant: "text-sm/normal", color: "text-default", lineClamp: 1, children: trimmed };
    obj3.children = closure_3(require("Text/Text").Text, obj4);
    tmp7 = closure_3(View, obj3);
  }
  const items = [
    tmp7,
    result.map((group, index) => {
      const obj = { group, firstIndex: null };
      const substr = _undefined.slice(0, index);
      obj.firstIndex = substr.reduce((acc, examples) => acc + examples.examples.length, 0);
      return React3(ExampleSection, obj, group.section);
    }),
  ];
  obj2.children = items;
  return closure_4(View, obj2);
}
