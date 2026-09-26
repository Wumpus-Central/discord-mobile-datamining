// === Module 15405: UserSettingsDesignSystemTagGroup ===

// Module 15405 (UserSettingsDesignSystemTagGroup)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4531 */;
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import Card from "Card" /* 5919 */;
import TagGroup from "TagGroup" /* 13979 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4836);
let obj2 = { container: { padding: nativeDefault.space.PX_16 }, narrow: { width: "60%" } };
let closure_7 = createStyles.createStyles(obj2);
let items = [{ id: "art", label: "Art" }, { id: "music", label: "Music" }];
let items1 = [{ id: "forum", label: "Forum" }, { id: "news", label: "News" }, { id: "guides", label: "Guides" }];
let items2 = [{ id: "art", label: "Art" }, { id: "music", label: "Music" }];
let items3 = [{ id: "community", label: "International community" }, { id: "events", label: "Events" }];
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemTagGroup.tsx");

export default function UserSettingsDesignSystemTagGroup() {
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
};