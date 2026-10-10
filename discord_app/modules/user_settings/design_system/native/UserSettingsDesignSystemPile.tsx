// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemPile.tsx
import c from "../../../../../_runtime/00576_c.js";
import native from "../../../../design/void/native.tsx";
import utils_AvatarUtils from "../../../../utils/native/AvatarUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import GuildIconDefault from "../../../guild/native/GuildIcon.tsx";
import Card from "../../../../design/components/Card/native/Card.native.tsx";
import ClipView from "../../../../design/components/Icon/native/ClipView.tsx";
import Pile from "../../../../design/components/Pile/native/Pile.native.tsx";
import ListUtils from "../../../../utils/ListUtils.tsx";
import AvatarDuoPile from "../../../../design/components/Pile/native/AvatarDuoPile.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5092);
let closure_8 = createStyles.createStyles({
  container: { flexDirection: "column", gap: 12, padding: 16 },
  card: { gap: 12 },
});
let items = [
  fn(1200).AvatarSizes.XSMALL,
  fn(1200).AvatarSizes.REFRESH_MEDIUM_32,
  fn(1200).AvatarSizes.NORMAL,
  fn(1200).AvatarSizes.LARGE_48,
  fn(1200).AvatarSizes.XLARGE,
];
let items1 = [
  fn(6158).GuildIconSizes.XSMALL,
  fn(6158).GuildIconSizes.SMALL_32,
  fn(6158).GuildIconSizes.NORMAL,
  fn(6158).GuildIconSizes.LARGE,
  fn(6158).GuildIconSizes.XLARGE,
];
let closure_11 = ["Clyde", "Phibi", "Cap"];
let closure_12 = ["test", "cats", "Evil Marcus", "robot overlords", "not a bug", "O M G"];
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SampleCard(arg0) {
      const cResult = c.c(11);
      ({ title, noScroll, children } = arg0);
      const tmp4 = closure_8();
      if (cResult[0] !== children) {
        const obj2 = { spacing: 16, children };
        const tmp7 = timestampProducer(Stack_Stack.Stack, obj2);
        cResult[0] = children;
        cResult[1] = tmp7;
        let tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== title) {
        const obj3 = { variant: "text-lg/bold", children: title };
        const tmp10 = timestampProducer(Text_Text.Text, obj3);
        cResult[2] = title;
        cResult[3] = tmp10;
        let tmp8 = tmp10;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] === tmp5) {
        if (cResult[5] === noScroll) {
          let tmp11 = cResult[6];
        }
        if (cResult[7] === tmp4.card) {
          if (cResult[8] === tmp8) {
            if (cResult[9] === tmp11) {
              let tmp15 = cResult[10];
            }
            return tmp15;
          }
        }
        const obj4 = { style: tmp4.card, children: null };
        items = [tmp8, tmp11];
        obj4.children = items;
        const tmp17 = React5(Card.Card, obj4);
        cResult[7] = tmp4.card;
        cResult[8] = tmp8;
        cResult[9] = tmp11;
        cResult[10] = tmp17;
        tmp15 = tmp17;
      }
      let tmp12 = tmp5;
      if (!noScroll) {
        const obj5 = { horizontal: true, children: tmp5 };
        tmp12 = timestampProducer(hasOwnProperty, obj5);
      }
      cResult[4] = tmp5;
      cResult[5] = noScroll;
      cResult[6] = tmp12;
      tmp11 = tmp12;
    }
  : function SampleCard(arg0) {
      ({ title, noScroll, children } = arg0);
      const tmp3 = timestampProducer(Stack_Stack.Stack, { spacing: 16, children });
      const obj = { style: closure_8().card, children: null };
      items = [timestampProducer(Text_Text.Text, { variant: "text-lg/bold", children: title })];
      let tmp2Result = tmp3;
      if (!noScroll) {
        const obj2 = { horizontal: true, children: tmp3 };
        tmp2Result = timestampProducer(hasOwnProperty, obj2);
      }
      items[1] = tmp2Result;
      obj.children = items;
      return React5(Card.Card, obj);
    };
ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemPile.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UserSettingsDesignSystemPile() {
      const cResult = c.c(8);
      const tmp4 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = {
          title: "Avatar Pile",
          children: items.map((children) => {
            const size = children;
            const obj = { children: null };
            items = [closure_6(size(5088).Text, { variant: "text-md/medium", color: "text-subtle", children })];
            const obj3 = { size: children, names, totalCount: size(1418).DEFAULT_AVATARS.length, children: null };
            const DEFAULT_AVATARS = size(1418).DEFAULT_AVATARS;
            obj3.children = DEFAULT_AVATARS.map((source, index) => closure_2_6(native.Avatar, { source, size }, index));
            items[1] = closure_6(size(13147).AvatarPile, obj3);
            obj.children = items;
            return closure_7(size(5377).Stack, obj, children);
          }),
        };
        const tmp9 = timestampProducer(closure_13, obj2);
        cResult[0] = tmp9;
        let first = tmp9;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        let obj3 = {
          title: "Avatar Pile (with overflow)",
          children: items.map((children) => {
            const size = children;
            const obj = { children: null };
            items = [closure_6(size(5088).Text, { variant: "text-md/medium", color: "text-subtle", children })];
            const obj3 = { size: children, names, totalCount: 9500, children: null };
            const DEFAULT_AVATARS = size(1418).DEFAULT_AVATARS;
            obj3.children = DEFAULT_AVATARS.map((source, index) => closure_2_6(native.Avatar, { source, size }, index));
            items[1] = closure_6(size(13147).AvatarPile, obj3);
            obj.children = items;
            return closure_7(size(5377).Stack, obj, children);
          }),
        };
        const tmp14 = timestampProducer(closure_13, obj3);
        cResult[1] = tmp14;
        let tmp10 = tmp14;
      } else {
        tmp10 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let obj4 = {
          title: "Avatar Duo Pile",
          children: items.map((children) => {
            const size = children;
            const obj = { children: null };
            items = [closure_6(size(5088).Text, { variant: "text-md/medium", color: "text-subtle", children })];
            const obj3 = { size: children, names: names.slice(0, 2), children: null };
            const DEFAULT_AVATARS = size(1418).DEFAULT_AVATARS;
            const substr = DEFAULT_AVATARS.slice(0, 2);
            obj3.children = substr.map((source, index) => closure_2_6(native.Avatar, { source, size }, index));
            items[1] = closure_6(size(14269).AvatarDuoPile, obj3);
            obj.children = items;
            return closure_7(size(5377).Stack, obj, children);
          }),
        };
        const tmp19 = timestampProducer(closure_13, obj4);
        cResult[2] = tmp19;
        let tmp15 = tmp19;
      } else {
        tmp15 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = {
          title: "Avatar Duo Pile (different sizes)",
          children: items.map((children) => {
            const obj = { children: null };
            items = [closure_1_6(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children })];
            const obj3 = { size: null, names: null, children: null };
            items1 = [children, native.AvatarSizes.NORMAL];
            obj3.size = items1;
            obj3.names = names.slice(0, 2);
            const items2 = [
              closure_1_6(native.Avatar, { source: utils_AvatarUtils.DEFAULT_AVATARS[0], size: children }),
            ];
            const obj2 = { variant: "text-md/medium", color: "text-subtle", children };
            const obj4 = { source: utils_AvatarUtils.DEFAULT_AVATARS[0], size: children };
            items2[1] = closure_1_6(native.Avatar, {
              source: utils_AvatarUtils.DEFAULT_AVATARS[1],
              size: native.AvatarSizes.NORMAL,
            });
            obj3.children = items2;
            items[1] = closure_1_7(AvatarDuoPile.AvatarDuoPile, obj3);
            obj.children = items;
            return closure_1_7(Stack_Stack.Stack, obj, children);
          }),
        };
        const tmp24 = timestampProducer(closure_13, obj5);
        cResult[3] = tmp24;
        let tmp20 = tmp24;
      } else {
        tmp20 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = {
          title: "Guild Icon Pile (with overflow)",
          children: items1.map((size) => {
            const obj = { children: null };
            items = [
              closure_6(size(5088).Text, {
                variant: "text-md/medium",
                color: "text-subtle",
                children: size.toLowerCase(),
              }),
            ];
            const obj2 = { variant: "text-md/medium", color: "text-subtle", children: size.toLowerCase() };
            items[1] = closure_6(size(12359).GuildIconPile, {
              size,
              names: names2,
              totalCount: 128,
              children: names2.map((value, index) => closure_2_6(GuildIconDefault, { value, size }, index)),
            });
            obj.children = items;
            return closure_7(size(5377).Stack, obj, size);
          }),
        };
        const tmp29 = timestampProducer(closure_13, obj6);
        cResult[4] = tmp29;
        let tmp25 = tmp29;
      } else {
        tmp25 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj7 = { title: "Weird Piles", noScroll: true, children: null };
        const obj8 = {
          variant: "text-md/medium",
          color: "text-subtle",
          children: [
            "These examples explore the edge cases of the underlying ",
            "<Pile>",
            " component and aren't recommended uses.",
          ],
        };
        items = [React5(Text_Text.Text, obj8)];
        items1 = [
          [1, 1],
          [0.5, 0.5],
          [null, 0.5],
          [0.5, null],
          [0, 0.5],
          [0.5, 0],
          [0, 0],
        ];
        items[1] = items1.map((item) => {
          [tmp2, tmp3] = item;
          let str = tmp2;
          if (tmp2 == null) {
            str = "null";
          }
          items = ["depthX=", str, ", depthY="];
          let str2 = tmp3;
          if (tmp3 == null) {
            str2 = "null";
          }
          let obj = { children: null };
          items[3] = str2;
          items1 = [
            closure_1_7(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: items }),
            ,
          ];
          const obj2 = {
            "aria-label": null,
            shape: null,
            size: 48,
            gap: 2,
            depthX: null,
            depthY: null,
            children: null,
          };
          const tmp = _slicedToArray(item, 2);
          obj2["aria-label"] = ListUtils.getListSummaryLabel(names, utils_AvatarUtils.DEFAULT_AVATARS.length);
          obj2.shape = ClipView.CutoutShape.Circle;
          obj2.depthX = tmp2;
          obj2.depthY = tmp3;
          const DEFAULT_AVATARS = utils_AvatarUtils.DEFAULT_AVATARS;
          obj2.children = DEFAULT_AVATARS.map((source, index) =>
            closure_1_6(closure_1_0(1200).Avatar, { source, size: closure_1_0(1200).AvatarSizes.LARGE_48 }, index),
          );
          items1[1] = closure_1_6(Pile.Pile, obj2);
          const obj3 = {
            "aria-label": null,
            shape: null,
            size: 48,
            gap: 2,
            depthX: null,
            depthY: null,
            children: null,
          };
          const tmp5Result = ListUtils;
          obj3["aria-label"] = ListUtils.getListSummaryLabel(names2, names2.length);
          obj3.shape = ClipView.CutoutShape.RoundedRect;
          obj3.depthX = tmp2;
          obj3.depthY = tmp3;
          obj3.children = names2.map((value, index) => {
            const obj = { value, size: closure_1_0(6158).GuildIconSizes.LARGE };
            return closure_1_6(closure_1_1(6158), obj, index);
          });
          items1[2] = closure_1_6(Pile.Pile, obj3);
          obj.children = items1;
          return closure_1_7(Stack_Stack.Stack, obj, "" + tmp2 + "," + tmp3);
        });
        obj7.children = items;
        const tmp33 = React5(closure_13, obj7);
        cResult[5] = tmp33;
        let tmp30 = tmp33;
      } else {
        tmp30 = cResult[5];
      }
      if (cResult[6] !== tmp4.container) {
        const obj9 = { children: null };
        const obj10 = { style: tmp4.container, children: null };
        let items2 = [first, tmp10, tmp15, tmp20, tmp25, tmp30];
        obj10.children = items2;
        obj9.children = React5(React4, obj10);
        const tmp39 = timestampProducer(hasOwnProperty, obj9);
        cResult[6] = tmp4.container;
        cResult[7] = tmp39;
        let tmp34 = tmp39;
      } else {
        tmp34 = cResult[7];
      }
      return tmp34;
    }
  : function UserSettingsDesignSystemPile() {
      let obj = { children: null };
      let obj2 = { style: closure_8().container, children: null };
      items = [, , , , ,];
      items[0] = timestampProducer(closure_13, {
        title: "Avatar Pile",
        children: items.map((children) => {
          const size = children;
          const obj = { children: null };
          items = [closure_6(size(5088).Text, { variant: "text-md/medium", color: "text-subtle", children })];
          const obj3 = { size: children, names, totalCount: size(1418).DEFAULT_AVATARS.length, children: null };
          const DEFAULT_AVATARS = size(1418).DEFAULT_AVATARS;
          obj3.children = DEFAULT_AVATARS.map((source, index) => closure_2_6(native.Avatar, { source, size }, index));
          items[1] = closure_6(size(13147).AvatarPile, obj3);
          obj.children = items;
          return closure_7(size(5377).Stack, obj, children);
        }),
      });
      let obj3 = {
        title: "Avatar Pile",
        children: items.map((children) => {
          const size = children;
          const obj = { children: null };
          items = [closure_6(size(5088).Text, { variant: "text-md/medium", color: "text-subtle", children })];
          const obj3 = { size: children, names, totalCount: size(1418).DEFAULT_AVATARS.length, children: null };
          const DEFAULT_AVATARS = size(1418).DEFAULT_AVATARS;
          obj3.children = DEFAULT_AVATARS.map((source, index) => closure_2_6(native.Avatar, { source, size }, index));
          items[1] = closure_6(size(13147).AvatarPile, obj3);
          obj.children = items;
          return closure_7(size(5377).Stack, obj, children);
        }),
      };
      items[1] = timestampProducer(closure_13, {
        title: "Avatar Pile (with overflow)",
        children: items.map((children) => {
          const size = children;
          const obj = { children: null };
          items = [closure_6(size(5088).Text, { variant: "text-md/medium", color: "text-subtle", children })];
          const obj3 = { size: children, names, totalCount: 9500, children: null };
          const DEFAULT_AVATARS = size(1418).DEFAULT_AVATARS;
          obj3.children = DEFAULT_AVATARS.map((source, index) => closure_2_6(native.Avatar, { source, size }, index));
          items[1] = closure_6(size(13147).AvatarPile, obj3);
          obj.children = items;
          return closure_7(size(5377).Stack, obj, children);
        }),
      });
      let obj4 = {
        title: "Avatar Pile (with overflow)",
        children: items.map((children) => {
          const size = children;
          const obj = { children: null };
          items = [closure_6(size(5088).Text, { variant: "text-md/medium", color: "text-subtle", children })];
          const obj3 = { size: children, names, totalCount: 9500, children: null };
          const DEFAULT_AVATARS = size(1418).DEFAULT_AVATARS;
          obj3.children = DEFAULT_AVATARS.map((source, index) => closure_2_6(native.Avatar, { source, size }, index));
          items[1] = closure_6(size(13147).AvatarPile, obj3);
          obj.children = items;
          return closure_7(size(5377).Stack, obj, children);
        }),
      };
      items[2] = timestampProducer(closure_13, {
        title: "Avatar Duo Pile",
        children: items.map((children) => {
          const size = children;
          const obj = { children: null };
          items = [closure_6(size(5088).Text, { variant: "text-md/medium", color: "text-subtle", children })];
          const obj3 = { size: children, names: names.slice(0, 2), children: null };
          const DEFAULT_AVATARS = size(1418).DEFAULT_AVATARS;
          const substr = DEFAULT_AVATARS.slice(0, 2);
          obj3.children = substr.map((source, index) => closure_2_6(native.Avatar, { source, size }, index));
          items[1] = closure_6(size(14269).AvatarDuoPile, obj3);
          obj.children = items;
          return closure_7(size(5377).Stack, obj, children);
        }),
      });
      const obj5 = {
        title: "Avatar Duo Pile",
        children: items.map((children) => {
          const size = children;
          const obj = { children: null };
          items = [closure_6(size(5088).Text, { variant: "text-md/medium", color: "text-subtle", children })];
          const obj3 = { size: children, names: names.slice(0, 2), children: null };
          const DEFAULT_AVATARS = size(1418).DEFAULT_AVATARS;
          const substr = DEFAULT_AVATARS.slice(0, 2);
          obj3.children = substr.map((source, index) => closure_2_6(native.Avatar, { source, size }, index));
          items[1] = closure_6(size(14269).AvatarDuoPile, obj3);
          obj.children = items;
          return closure_7(size(5377).Stack, obj, children);
        }),
      };
      items[3] = timestampProducer(closure_13, {
        title: "Avatar Duo Pile (different sizes)",
        children: items.map((children) => {
          const obj = { children: null };
          items = [closure_1_6(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children })];
          const obj3 = { size: null, names: null, children: null };
          items1 = [children, native.AvatarSizes.NORMAL];
          obj3.size = items1;
          obj3.names = names.slice(0, 2);
          const items2 = [closure_1_6(native.Avatar, { source: utils_AvatarUtils.DEFAULT_AVATARS[0], size: children })];
          const obj2 = { variant: "text-md/medium", color: "text-subtle", children };
          const obj4 = { source: utils_AvatarUtils.DEFAULT_AVATARS[0], size: children };
          items2[1] = closure_1_6(native.Avatar, {
            source: utils_AvatarUtils.DEFAULT_AVATARS[1],
            size: native.AvatarSizes.NORMAL,
          });
          obj3.children = items2;
          items[1] = closure_1_7(AvatarDuoPile.AvatarDuoPile, obj3);
          obj.children = items;
          return closure_1_7(Stack_Stack.Stack, obj, children);
        }),
      });
      const obj6 = {
        title: "Avatar Duo Pile (different sizes)",
        children: items.map((children) => {
          const obj = { children: null };
          items = [closure_1_6(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children })];
          const obj3 = { size: null, names: null, children: null };
          items1 = [children, native.AvatarSizes.NORMAL];
          obj3.size = items1;
          obj3.names = names.slice(0, 2);
          const items2 = [closure_1_6(native.Avatar, { source: utils_AvatarUtils.DEFAULT_AVATARS[0], size: children })];
          const obj2 = { variant: "text-md/medium", color: "text-subtle", children };
          const obj4 = { source: utils_AvatarUtils.DEFAULT_AVATARS[0], size: children };
          items2[1] = closure_1_6(native.Avatar, {
            source: utils_AvatarUtils.DEFAULT_AVATARS[1],
            size: native.AvatarSizes.NORMAL,
          });
          obj3.children = items2;
          items[1] = closure_1_7(AvatarDuoPile.AvatarDuoPile, obj3);
          obj.children = items;
          return closure_1_7(Stack_Stack.Stack, obj, children);
        }),
      };
      items[4] = timestampProducer(closure_13, {
        title: "Guild Icon Pile (with overflow)",
        children: items1.map((size) => {
          const obj = { children: null };
          items = [
            closure_6(size(5088).Text, {
              variant: "text-md/medium",
              color: "text-subtle",
              children: size.toLowerCase(),
            }),
          ];
          const obj2 = { variant: "text-md/medium", color: "text-subtle", children: size.toLowerCase() };
          items[1] = closure_6(size(12359).GuildIconPile, {
            size,
            names: names2,
            totalCount: 128,
            children: names2.map((value, index) => closure_2_6(GuildIconDefault, { value, size }, index)),
          });
          obj.children = items;
          return closure_7(size(5377).Stack, obj, size);
        }),
      });
      const obj8 = { title: "Weird Piles", noScroll: true, children: null };
      items1 = [
        React5(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children: [
            "These examples explore the edge cases of the underlying ",
            "<Pile>",
            " component and aren't recommended uses.",
          ],
        }),
      ];
      let items2 = [
        [1, 1],
        [0.5, 0.5],
        [null, 0.5],
        [0.5, null],
        [0, 0.5],
        [0.5, 0],
        [0, 0],
      ];
      items1[1] = items2.map((item) => {
        [tmp, tmp2] = item;
        let str = tmp;
        if (tmp == null) {
          str = "null";
        }
        items = ["depthX=", str, ", depthY="];
        let str2 = tmp2;
        if (tmp2 == null) {
          str2 = "null";
        }
        let obj = { children: null };
        items[3] = str2;
        items1 = [closure_1_7(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: items }), ,];
        const obj2 = {
          "aria-label": ListUtils.getListSummaryLabel(names, utils_AvatarUtils.DEFAULT_AVATARS.length),
          shape: ClipView.CutoutShape.Circle,
          size: 48,
          gap: 2,
          depthX: tmp,
          depthY: tmp2,
          children: null,
        };
        const DEFAULT_AVATARS = utils_AvatarUtils.DEFAULT_AVATARS;
        obj2.children = DEFAULT_AVATARS.map((source, index) =>
          closure_1_6(closure_1_0(1200).Avatar, { source, size: closure_1_0(1200).AvatarSizes.LARGE_48 }, index),
        );
        items1[1] = closure_1_6(Pile.Pile, obj2);
        const obj3 = { "aria-label": null, shape: null, size: 48, gap: 2, depthX: null, depthY: null, children: null };
        const tmp4Result = ListUtils;
        obj3["aria-label"] = ListUtils.getListSummaryLabel(names2, names2.length);
        obj3.shape = ClipView.CutoutShape.RoundedRect;
        obj3.depthX = tmp;
        obj3.depthY = tmp2;
        obj3.children = names2.map((value, index) => {
          const obj = { value, size: closure_1_0(6158).GuildIconSizes.LARGE };
          return closure_1_6(closure_1_1(6158), obj, index);
        });
        items1[2] = closure_1_6(Pile.Pile, obj3);
        obj.children = items1;
        return closure_1_7(Stack_Stack.Stack, obj, "" + tmp + "," + tmp2);
      });
      obj8.children = items1;
      items[5] = React5(closure_13, obj8);
      obj2.children = items;
      obj.children = React5(React4, obj2);
      return timestampProducer(hasOwnProperty, obj);
    };
