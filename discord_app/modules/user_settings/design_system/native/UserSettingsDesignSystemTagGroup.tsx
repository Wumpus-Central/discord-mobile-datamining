// === Module 15683: UserSettingsDesignSystemTagGroup ===

// Module 15683 (UserSettingsDesignSystemTagGroup)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4580 */;
import Text_Text from "Text/Text" /* 4886 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import Card from "Card" /* 5995 */;
import TagGroup from "TagGroup" /* 14252 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { padding: nativeDefault.space.PX_16 }, narrow: { width: "60%" } };
let closure_7 = createStyles.createStyles(obj2);
let items = [{ id: "art", label: "Art" }, { id: "music", label: "Music" }];
let items1 = [{ id: "forum", label: "Forum" }, { id: "news", label: "News" }, { id: "guides", label: "Guides" }];
let items2 = [{ id: "art", label: "Art" }, { id: "music", label: "Music" }];
let items3 = [{ id: "community", label: "International community" }, { id: "events", label: "Events" }];
const ReactCompilerGating = fn(558);
let obj3 = { padding: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemTagGroup.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(30);
  const tmp4 = closure_7();
  const token = useToken.useToken(nativeDefault.colors.ICON_BRAND);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { id: "community", label: "Community" };
    cResult[0] = obj3;
    let first = obj3;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== token) {
    const obj4 = { id: "moderators", label: "Moderators", icon: null };
    const obj5 = { type: "role", color: token };
    obj4.icon = obj5;
    cResult[1] = token;
    cResult[2] = obj4;
    let tmp8 = obj4;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { id: "design", label: "Design" };
    const obj7 = { id: "events", label: "Events" };
    const obj8 = { id: "support", label: "Support" };
    cResult[3] = obj6;
    cResult[4] = obj7;
    cResult[5] = obj8;
    let tmp11 = obj8;
    let tmp10 = obj7;
    let tmp9 = obj6;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
    tmp11 = cResult[5];
  }
  if (cResult[6] !== tmp8) {
    items = [first, tmp8, tmp9, tmp10, tmp11];
    cResult[6] = tmp8;
    cResult[7] = items;
    let tmp12 = items;
  } else {
    tmp12 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp15 = hasOwnProperty(Text_Text.Text, { variant: "text-md/normal", color: "text-subtle", children: "Tag groups display read-only values. They do not select or remove tags." });
    cResult[8] = tmp15;
    let tmp13 = tmp15;
  } else {
    tmp13 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp19 = hasOwnProperty(Text_Text.Heading, { variant: "text-lg/bold", children: "Default layout" });
    const tmp20 = hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: "Medium tags wrap onto new lines as space runs out." });
    cResult[9] = tmp19;
    cResult[10] = tmp20;
    let tmp17 = tmp20;
    let tmp16 = tmp19;
  } else {
    tmp16 = cResult[9];
    tmp17 = cResult[10];
  }
  if (cResult[11] !== tmp12) {
    const obj9 = { children: null };
    const obj10 = { spacing: nativeDefault.space.PX_12, children: null };
    items1 = [tmp16, tmp17, ];
    const obj11 = { label: "Default wrapping tags", items: tmp12 };
    items1[2] = hasOwnProperty(TagGroup.TagGroup, obj11);
    obj10.children = items1;
    obj9.children = timestampProducer(Stack_Stack.Stack, obj10);
    const tmp24 = hasOwnProperty(Card.Card, obj9);
    cResult[11] = tmp12;
    cResult[12] = tmp24;
    let tmp21 = tmp24;
  } else {
    tmp21 = cResult[12];
  }
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    const obj12 = { children: null };
    const obj13 = { spacing: nativeDefault.space.PX_12, children: null };
    items2 = [hasOwnProperty(Text_Text.Heading, { variant: "text-lg/bold", children: "Sizes" }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: "Compare the extra-small and small densities with the default medium group above." }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", children: "Extra small" }), , , ];
    const obj14 = { label: "Extra-small tags", size: "xs", items };
    items2[3] = hasOwnProperty(TagGroup.TagGroup, obj14);
    items2[4] = hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", children: "Small" });
    const obj15 = { label: "Small tags", size: "sm", items };
    items2[5] = hasOwnProperty(TagGroup.TagGroup, obj15);
    obj13.children = items2;
    obj12.children = timestampProducer(Stack_Stack.Stack, obj13);
    const tmp29 = hasOwnProperty(Card.Card, obj12);
    cResult[13] = tmp29;
    let tmp25 = tmp29;
  } else {
    tmp25 = cResult[13];
  }
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    const obj16 = { children: null };
    const obj17 = { spacing: nativeDefault.space.PX_12, children: null };
    items3 = [hasOwnProperty(Text_Text.Heading, { variant: "text-lg/bold", children: "Filter treatment" }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: "Filter tags have fully rounded corners but remain read-only." }), ];
    const obj18 = { label: "Filter-style tags", variant: "filter", items: items1 };
    items3[2] = hasOwnProperty(TagGroup.TagGroup, obj18);
    obj17.children = items3;
    obj16.children = timestampProducer(Stack_Stack.Stack, obj17);
    const tmp34 = hasOwnProperty(Card.Card, obj16);
    cResult[14] = tmp34;
    let tmp30 = tmp34;
  } else {
    tmp30 = cResult[14];
  }
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp42 = hasOwnProperty(Text_Text.Heading, { variant: "text-lg/bold", children: "Inline layout" });
    const tmp43 = hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: "Inline uses small tags by default and stays on one line. In narrow columns, labels truncate and the row can clip. Use default layout for longer collections." });
    const obj19 = { label: "Inline tags", layout: "inline", items: items2 };
    const tmp45 = hasOwnProperty(TagGroup.TagGroup, obj19);
    const tmp46 = hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", children: "Medium inline tags (explicit size)" });
    const obj20 = { label: "Medium inline tags", layout: "inline", size: "md", items: items2 };
    const tmp47 = hasOwnProperty(TagGroup.TagGroup, obj20);
    const tmp48 = hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", children: "Narrow column with a long label" });
    cResult[15] = tmp42;
    cResult[16] = tmp43;
    cResult[17] = tmp45;
    cResult[18] = tmp46;
    cResult[19] = tmp47;
    cResult[20] = tmp48;
    let tmp40 = tmp48;
    let tmp39 = tmp47;
    let tmp38 = tmp46;
    let tmp37 = tmp45;
    let tmp36 = tmp43;
    let tmp35 = tmp42;
  } else {
    tmp35 = cResult[15];
    tmp36 = cResult[16];
    tmp37 = cResult[17];
    tmp38 = cResult[18];
    tmp39 = cResult[19];
    tmp40 = cResult[20];
  }
  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
    const obj21 = { label: "Narrow inline tags", layout: "inline", items: items3 };
    const tmp52 = hasOwnProperty(TagGroup.TagGroup, obj21);
    cResult[21] = tmp52;
    let tmp49 = tmp52;
  } else {
    tmp49 = cResult[21];
  }
  if (cResult[22] !== tmp4.narrow) {
    const obj22 = { children: null };
    const obj23 = { spacing: nativeDefault.space.PX_12, children: null };
    const items4 = [tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, ];
    const obj24 = { style: tmp4.narrow, children: tmp49 };
    items4[6] = hasOwnProperty(React4, obj24);
    obj23.children = items4;
    obj22.children = timestampProducer(Stack_Stack.Stack, obj23);
    const tmp57 = hasOwnProperty(Card.Card, obj22);
    cResult[22] = tmp4.narrow;
    cResult[23] = tmp57;
    let tmp53 = tmp57;
  } else {
    tmp53 = cResult[23];
  }
  if (cResult[24] === tmp53) {
    if (cResult[25] === tmp21) {
      let tmp58 = cResult[26];
    }
    if (cResult[27] === tmp4.container) {
      if (cResult[28] === tmp58) {
        let tmp60 = cResult[29];
      }
      return tmp60;
    }
    const obj25 = { contentContainerStyle: tmp4.container, children: tmp58 };
    const tmp63 = hasOwnProperty(React3, obj25);
    cResult[27] = tmp4.container;
    cResult[28] = tmp58;
    cResult[29] = tmp63;
    tmp60 = tmp63;
  }
  const obj26 = { spacing: nativeDefault.space.PX_24, children: null };
  const items5 = [tmp13, tmp21, tmp25, tmp30, tmp53];
  obj26.children = items5;
  const tmp59 = timestampProducer(Stack_Stack.Stack, obj26);
  cResult[24] = tmp53;
  cResult[25] = tmp21;
  cResult[26] = tmp59;
  tmp58 = tmp59;
}) : (() => {
  const tmp = closure_7();
  const obj2 = { contentContainerStyle: tmp.container, children: null };
  const token = useToken.useToken(nativeDefault.colors.ICON_BRAND);
  const obj3 = { spacing: nativeDefault.space.PX_24, children: null };
  items = [hasOwnProperty(Text_Text.Text, { variant: "text-md/normal", color: "text-subtle", children: "Tag groups display read-only values. They do not select or remove tags." }), , , , ];
  const obj4 = { children: null };
  const obj5 = { spacing: nativeDefault.space.PX_12, children: null };
  items1 = [hasOwnProperty(Text_Text.Heading, { variant: "text-lg/bold", children: "Default layout" }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: "Medium tags wrap onto new lines as space runs out." }), ];
  const obj6 = { label: "Default wrapping tags", items: null };
  items2 = [{ id: "community", label: "Community" }, { id: "moderators", label: "Moderators", icon: { type: "role", color: token } }, { id: "design", label: "Design" }, { id: "events", label: "Events" }, { id: "support", label: "Support" }];
  obj6.items = items2;
  items1[2] = hasOwnProperty(TagGroup.TagGroup, obj6);
  obj5.children = items1;
  obj4.children = timestampProducer(Stack_Stack.Stack, obj5);
  items[1] = hasOwnProperty(Card.Card, obj4);
  const obj8 = { children: null };
  const obj9 = { spacing: nativeDefault.space.PX_12, children: null };
  items3 = [hasOwnProperty(Text_Text.Heading, { variant: "text-lg/bold", children: "Sizes" }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: "Compare the extra-small and small densities with the default medium group above." }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", children: "Extra small" }), hasOwnProperty(TagGroup.TagGroup, { label: "Extra-small tags", size: "xs", items }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", children: "Small" }), hasOwnProperty(TagGroup.TagGroup, { label: "Small tags", size: "sm", items })];
  obj9.children = items3;
  obj8.children = timestampProducer(Stack_Stack.Stack, obj9);
  items[2] = hasOwnProperty(Card.Card, obj8);
  const obj12 = { children: null };
  const obj13 = { spacing: nativeDefault.space.PX_12, children: null };
  const items4 = [hasOwnProperty(Text_Text.Heading, { variant: "text-lg/bold", children: "Filter treatment" }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: "Filter tags have fully rounded corners but remain read-only." }), hasOwnProperty(TagGroup.TagGroup, { label: "Filter-style tags", variant: "filter", items: items1 })];
  obj13.children = items4;
  obj12.children = timestampProducer(Stack_Stack.Stack, obj13);
  items[3] = hasOwnProperty(Card.Card, obj12);
  const obj15 = { children: null };
  const obj16 = { spacing: nativeDefault.space.PX_12, children: null };
  const items5 = [hasOwnProperty(Text_Text.Heading, { variant: "text-lg/bold", children: "Inline layout" }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: "Inline uses small tags by default and stays on one line. In narrow columns, labels truncate and the row can clip. Use default layout for longer collections." }), hasOwnProperty(TagGroup.TagGroup, { label: "Inline tags", layout: "inline", items: items2 }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", children: "Medium inline tags (explicit size)" }), hasOwnProperty(TagGroup.TagGroup, { label: "Medium inline tags", layout: "inline", size: "md", items: items2 }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", children: "Narrow column with a long label" }), ];
  const obj19 = { style: tmp.narrow, children: hasOwnProperty(TagGroup.TagGroup, { label: "Narrow inline tags", layout: "inline", items: items3 }) };
  items5[6] = hasOwnProperty(React4, obj19);
  obj16.children = items5;
  obj15.children = timestampProducer(Stack_Stack.Stack, obj16);
  items[4] = hasOwnProperty(Card.Card, obj15);
  obj3.children = items;
  obj2.children = timestampProducer(Stack_Stack.Stack, obj3);
  return hasOwnProperty(React3, obj2);
});