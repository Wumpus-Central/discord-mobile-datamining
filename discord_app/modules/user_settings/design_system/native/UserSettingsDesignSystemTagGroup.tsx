// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemTagGroup.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import Card_Card from "../../../../design/components/Card/native/Card.native.tsx";
import TagGroup from "../../../../design/components/TagGroup/native/TagGroup.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
({ ScrollView: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: obj2, narrow: { width: "60%" } };
obj2 = { padding: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
let items = [
  { id: "art", label: "Art" },
  { id: "music", label: "Music" },
];
let items1 = [
  { id: "forum", label: "Forum" },
  { id: "news", label: "News" },
  { id: "guides", label: "Guides" },
];
let items2 = [
  { id: "art", label: "Art" },
  { id: "music", label: "Music" },
];
let items3 = [
  { id: "community", label: "International community" },
  { id: "events", label: "Events" },
];
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let Stack;
      let Stack2;
      let Stack3;
      let Stack4;
      let first;
      let items4;
      let items5;
      let obj10;
      let obj13;
      let obj17;
      let obj23;
      let obj5;
      let tmp10;
      let tmp11;
      let tmp12;
      let tmp13;
      let tmp16;
      let tmp17;
      let tmp21;
      let tmp25;
      let tmp30;
      let tmp35;
      let tmp36;
      let tmp37;
      let tmp38;
      let tmp39;
      let tmp40;
      let tmp49;
      let tmp53;
      let tmp8;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(30);
      const tmp4 = closure_7();
      const obj2 = useToken;
      const token = obj2.useToken(nativeDefault.colors.ICON_BRAND);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { id: "community", label: "Community" };
        cResult[0] = obj3;
        first = obj3;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== token) {
        const obj4 = { id: "moderators", label: "Moderators", icon: obj5 };
        obj5 = { type: "role", color: token };
        cResult[1] = token;
        cResult[2] = obj4;
        tmp8 = obj4;
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
        tmp11 = obj8;
        tmp10 = obj7;
        tmp9 = obj6;
      } else {
        tmp9 = cResult[3];
        tmp10 = cResult[4];
        tmp11 = cResult[5];
      }
      if (cResult[6] !== tmp8) {
        items = [first, tmp8, tmp9, tmp10, tmp11];
        cResult[6] = tmp8;
        cResult[7] = items;
        tmp12 = items;
      } else {
        tmp12 = cResult[7];
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp15 = hasOwnProperty(Text_Text.Text, {
          variant: "text-md/normal",
          color: "text-subtle",
          children: "Tag groups display read-only values. They do not select or remove tags.",
        });
        cResult[8] = tmp15;
        tmp13 = tmp15;
      } else {
        tmp13 = cResult[8];
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp19 = hasOwnProperty(Text_Text.Heading, { variant: "text-lg/bold", children: "Default layout" });
        const tmp20 = hasOwnProperty(Text_Text.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: "Medium tags wrap onto new lines as space runs out.",
        });
        cResult[9] = tmp19;
        cResult[10] = tmp20;
        tmp17 = tmp20;
        tmp16 = tmp19;
      } else {
        tmp16 = cResult[9];
        tmp17 = cResult[10];
      }
      if (cResult[11] !== tmp12) {
        const obj9 = { children: metroRequire(Stack, obj10) };
        const Card = Card_Card.Card;
        obj10 = { spacing: nativeDefault.space.PX_12, children: items1 };
        Stack = Stack_Stack.Stack;
        items1 = [tmp16, tmp17];
        const obj11 = { label: "Default wrapping tags", items: tmp12 };
        items1[2] = hasOwnProperty(TagGroup.TagGroup, obj11);
        const tmp24 = hasOwnProperty(Card, obj9);
        cResult[11] = tmp12;
        cResult[12] = tmp24;
        tmp21 = tmp24;
      } else {
        tmp21 = cResult[12];
      }
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const obj12 = { children: metroRequire(Stack2, obj13) };
        const Card2 = Card_Card.Card;
        obj13 = { spacing: nativeDefault.space.PX_12, children: items2 };
        Stack2 = Stack_Stack.Stack;
        items2 = [
          hasOwnProperty(Text_Text.Heading, { variant: "text-lg/bold", children: "Sizes" }),
          hasOwnProperty(Text_Text.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: "Compare the extra-small and small densities with the default medium group above.",
          }),
          hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", children: "Extra small" }),
          ,
          ,
        ];
        const obj14 = { label: "Extra-small tags", size: "xs", items };
        items2[3] = hasOwnProperty(TagGroup.TagGroup, obj14);
        items2[4] = hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", children: "Small" });
        const obj15 = { label: "Small tags", size: "sm", items };
        items2[5] = hasOwnProperty(TagGroup.TagGroup, obj15);
        const tmp29 = hasOwnProperty(Card2, obj12);
        cResult[13] = tmp29;
        tmp25 = tmp29;
      } else {
        tmp25 = cResult[13];
      }
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const obj16 = { children: metroRequire(Stack3, obj17) };
        const Card3 = Card_Card.Card;
        obj17 = { spacing: nativeDefault.space.PX_12, children: items3 };
        Stack3 = Stack_Stack.Stack;
        items3 = [
          hasOwnProperty(Text_Text.Heading, { variant: "text-lg/bold", children: "Filter treatment" }),
          hasOwnProperty(Text_Text.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: "Filter tags have fully rounded corners but remain read-only.",
          }),
        ];
        const obj18 = { label: "Filter-style tags", variant: "filter", items: items1 };
        items3[2] = hasOwnProperty(TagGroup.TagGroup, obj18);
        const tmp34 = hasOwnProperty(Card3, obj16);
        cResult[14] = tmp34;
        tmp30 = tmp34;
      } else {
        tmp30 = cResult[14];
      }
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp42 = hasOwnProperty(Text_Text.Heading, { variant: "text-lg/bold", children: "Inline layout" });
        const tmp43 = hasOwnProperty(Text_Text.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children:
            "Inline uses small tags by default and stays on one line. In narrow columns, labels truncate and the row can clip. Use default layout for longer collections.",
        });
        const obj19 = { label: "Inline tags", layout: "inline", items: items2 };
        const tmp45 = hasOwnProperty(TagGroup.TagGroup, obj19);
        const tmp46 = hasOwnProperty(Text_Text.Text, {
          variant: "text-sm/medium",
          children: "Medium inline tags (explicit size)",
        });
        const obj20 = { label: "Medium inline tags", layout: "inline", size: "md", items: items2 };
        const tmp47 = hasOwnProperty(TagGroup.TagGroup, obj20);
        const tmp48 = hasOwnProperty(Text_Text.Text, {
          variant: "text-sm/medium",
          children: "Narrow column with a long label",
        });
        cResult[15] = tmp42;
        cResult[16] = tmp43;
        cResult[17] = tmp45;
        cResult[18] = tmp46;
        cResult[19] = tmp47;
        cResult[20] = tmp48;
        tmp40 = tmp48;
        tmp39 = tmp47;
        tmp38 = tmp46;
        tmp37 = tmp45;
        tmp36 = tmp43;
        tmp35 = tmp42;
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
        tmp49 = tmp52;
      } else {
        tmp49 = cResult[21];
      }
      if (cResult[22] !== tmp4.narrow) {
        const obj22 = { children: metroRequire(Stack4, obj23) };
        const Card4 = Card_Card.Card;
        obj23 = { spacing: nativeDefault.space.PX_12, children: items4 };
        Stack4 = Stack_Stack.Stack;
        items4 = [tmp35, tmp36, tmp37, tmp38, tmp39, tmp40];
        const obj24 = { style: tmp4.narrow, children: tmp49 };
        items4[6] = hasOwnProperty(React3, obj24);
        const tmp57 = hasOwnProperty(Card4, obj22);
        cResult[22] = tmp4.narrow;
        cResult[23] = tmp57;
        tmp53 = tmp57;
      } else {
        tmp53 = cResult[23];
      }
      if (cResult[24] === tmp53) {
        let tmp58;
        if (cResult[25] === tmp21) {
          tmp58 = cResult[26];
        }
        if (cResult[27] === tmp4.container) {
          let tmp60;
          if (cResult[28] === tmp58) {
            tmp60 = cResult[29];
          }
          return tmp60;
        }
        const obj25 = { contentContainerStyle: tmp4.container, children: tmp58 };
        const tmp63 = hasOwnProperty(_false, obj25);
        cResult[27] = tmp4.container;
        cResult[28] = tmp58;
        cResult[29] = tmp63;
        tmp60 = tmp63;
      }
      const obj26 = { spacing: nativeDefault.space.PX_24, children: items5 };
      const Stack5 = Stack_Stack.Stack;
      items5 = [tmp13, tmp21, tmp25, tmp30, tmp53];
      const tmp59 = metroRequire(Stack5, obj26);
      cResult[24] = tmp53;
      cResult[25] = tmp21;
      cResult[26] = tmp59;
      tmp58 = tmp59;
    }
  : () => {
      let Stack;
      let Stack2;
      let Stack3;
      let Stack4;
      let Stack5;
      let items4;
      let items5;
      let obj13;
      let obj16;
      let obj20;
      let obj3;
      let obj5;
      let obj9;
      const tmp = closure_7();
      const obj2 = { contentContainerStyle: tmp.container, children: metroRequire(Stack, obj3) };
      const obj = useToken;
      const token = obj.useToken(nativeDefault.colors.ICON_BRAND);
      obj3 = { spacing: nativeDefault.space.PX_24, children: items };
      Stack = Stack_Stack.Stack;
      items = [
        hasOwnProperty(Text_Text.Text, {
          variant: "text-md/normal",
          color: "text-subtle",
          children: "Tag groups display read-only values. They do not select or remove tags.",
        }),
        ,
        ,
        ,
      ];
      const obj4 = { children: metroRequire(Stack2, obj5) };
      const Card = Card_Card.Card;
      obj5 = { spacing: nativeDefault.space.PX_12, children: items1 };
      Stack2 = Stack_Stack.Stack;
      items1 = [
        hasOwnProperty(Text_Text.Heading, { variant: "text-lg/bold", children: "Default layout" }),
        hasOwnProperty(Text_Text.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: "Medium tags wrap onto new lines as space runs out.",
        }),
      ];
      const obj6 = { label: "Default wrapping tags", items: items2 };
      items2 = [{ id: "community", label: "Community" }, , , ,];
      const obj7 = { id: "moderators", label: "Moderators", icon: { type: "role", color: token } };
      items2[1] = obj7;
      items2[2] = { id: "design", label: "Design" };
      items2[3] = { id: "events", label: "Events" };
      items2[4] = { id: "support", label: "Support" };
      items1[2] = hasOwnProperty(TagGroup.TagGroup, obj6);
      items[1] = hasOwnProperty(Card, obj4);
      const obj8 = { children: metroRequire(Stack3, obj9) };
      const Card2 = Card_Card.Card;
      obj9 = { spacing: nativeDefault.space.PX_12, children: items3 };
      Stack3 = Stack_Stack.Stack;
      items3 = [
        hasOwnProperty(Text_Text.Heading, { variant: "text-lg/bold", children: "Sizes" }),
        hasOwnProperty(Text_Text.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: "Compare the extra-small and small densities with the default medium group above.",
        }),
        hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", children: "Extra small" }),
        ,
        ,
      ];
      const obj10 = { label: "Extra-small tags", size: "xs", items };
      items3[3] = hasOwnProperty(TagGroup.TagGroup, obj10);
      items3[4] = hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", children: "Small" });
      const obj11 = { label: "Small tags", size: "sm", items };
      items3[5] = hasOwnProperty(TagGroup.TagGroup, obj11);
      items[2] = hasOwnProperty(Card2, obj8);
      const obj12 = { children: metroRequire(Stack4, obj13) };
      const Card3 = Card_Card.Card;
      obj13 = { spacing: nativeDefault.space.PX_12, children: items4 };
      Stack4 = Stack_Stack.Stack;
      items4 = [
        hasOwnProperty(Text_Text.Heading, { variant: "text-lg/bold", children: "Filter treatment" }),
        hasOwnProperty(Text_Text.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: "Filter tags have fully rounded corners but remain read-only.",
        }),
      ];
      const obj14 = { label: "Filter-style tags", variant: "filter", items: items1 };
      items4[2] = hasOwnProperty(TagGroup.TagGroup, obj14);
      items[3] = hasOwnProperty(Card3, obj12);
      const obj15 = { children: metroRequire(Stack5, obj16) };
      const Card4 = Card_Card.Card;
      obj16 = { spacing: nativeDefault.space.PX_12, children: items5 };
      Stack5 = Stack_Stack.Stack;
      items5 = [
        hasOwnProperty(Text_Text.Heading, { variant: "text-lg/bold", children: "Inline layout" }),
        hasOwnProperty(Text_Text.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children:
            "Inline uses small tags by default and stays on one line. In narrow columns, labels truncate and the row can clip. Use default layout for longer collections.",
        }),
        ,
        ,
        ,
        ,
      ];
      const obj17 = { label: "Inline tags", layout: "inline", items: items2 };
      items5[2] = hasOwnProperty(TagGroup.TagGroup, obj17);
      items5[3] = hasOwnProperty(Text_Text.Text, {
        variant: "text-sm/medium",
        children: "Medium inline tags (explicit size)",
      });
      const obj18 = { label: "Medium inline tags", layout: "inline", size: "md", items: items2 };
      items5[4] = hasOwnProperty(TagGroup.TagGroup, obj18);
      items5[5] = hasOwnProperty(Text_Text.Text, {
        variant: "text-sm/medium",
        children: "Narrow column with a long label",
      });
      const obj19 = { style: tmp.narrow, children: hasOwnProperty(TagGroup.TagGroup, obj20) };
      obj20 = { label: "Narrow inline tags", layout: "inline", items: items3 };
      items5[6] = hasOwnProperty(React3, obj19);
      items[4] = hasOwnProperty(Card4, obj15);
      return hasOwnProperty(_false, obj2);
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemTagGroup.tsx",
);

export default tmp5;
