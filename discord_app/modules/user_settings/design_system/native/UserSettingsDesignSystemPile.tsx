// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemPile.tsx
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
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function SampleCard(arg0) {
  ({ title, noScroll, children } = arg0);
  const tmp3 = hasOwnProperty(Stack_Stack.Stack, { spacing: 16, children });
  const obj = { style: closure_7().card, children: null };
  items = [hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: title })];
  let tmp2Result = tmp3;
  if (!noScroll) {
    const obj2 = { horizontal: true, children: tmp3 };
    tmp2Result = hasOwnProperty(React4, obj2);
  }
  items[1] = tmp2Result;
  obj.children = items;
  return timestampProducer(Card.Card, obj);
}
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4636);
let closure_7 = createStyles.createStyles({
  container: { flexDirection: "column", gap: 12, padding: 16 },
  card: { gap: 12 },
});
let items = [
  fn(1176).AvatarSizes.XSMALL,
  fn(1176).AvatarSizes.REFRESH_MEDIUM_32,
  fn(1176).AvatarSizes.NORMAL,
  fn(1176).AvatarSizes.LARGE_48,
  fn(1176).AvatarSizes.XLARGE,
];
let items1 = [
  fn(5665).GuildIconSizes.XSMALL,
  fn(5665).GuildIconSizes.SMALL_32,
  fn(5665).GuildIconSizes.NORMAL,
  fn(5665).GuildIconSizes.LARGE,
  fn(5665).GuildIconSizes.XLARGE,
];
let closure_10 = ["Clyde", "Phibi", "Cap"];
let closure_11 = ["test", "cats", "Evil Marcus", "robot overlords", "not a bug", "O M G"];
let size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemPile.tsx",
);

export default function UserSettingsDesignSystemPile() {
  let obj = { children: null };
  let obj2 = { style: closure_7().container, children: null };
  items = [, , , , ,];
  items[0] = hasOwnProperty(SampleCard, {
    title: "Avatar Pile",
    children: items.map((children) => {
      const size = children;
      const obj = { children: null };
      items = [closure_5(size(4632).Text, { variant: "text-md/medium", color: "text-subtle", children })];
      const obj3 = { size: children, names, totalCount: size(1399).DEFAULT_AVATARS.length, children: null };
      const DEFAULT_AVATARS = size(1399).DEFAULT_AVATARS;
      obj3.children = DEFAULT_AVATARS.map((source, index) => closure_2_5(native.Avatar, { source, size }, index));
      items[1] = closure_5(size(13158).AvatarPile, obj3);
      obj.children = items;
      return closure_6(size(5054).Stack, obj, children);
    }),
  });
  let obj3 = {
    title: "Avatar Pile",
    children: items.map((children) => {
      const size = children;
      const obj = { children: null };
      items = [closure_5(size(4632).Text, { variant: "text-md/medium", color: "text-subtle", children })];
      const obj3 = { size: children, names, totalCount: size(1399).DEFAULT_AVATARS.length, children: null };
      const DEFAULT_AVATARS = size(1399).DEFAULT_AVATARS;
      obj3.children = DEFAULT_AVATARS.map((source, index) => closure_2_5(native.Avatar, { source, size }, index));
      items[1] = closure_5(size(13158).AvatarPile, obj3);
      obj.children = items;
      return closure_6(size(5054).Stack, obj, children);
    }),
  };
  items[1] = hasOwnProperty(SampleCard, {
    title: "Avatar Pile (with overflow)",
    children: items.map((children) => {
      const size = children;
      const obj = { children: null };
      items = [closure_5(size(4632).Text, { variant: "text-md/medium", color: "text-subtle", children })];
      const obj3 = { size: children, names, totalCount: 9500, children: null };
      const DEFAULT_AVATARS = size(1399).DEFAULT_AVATARS;
      obj3.children = DEFAULT_AVATARS.map((source, index) => closure_2_5(native.Avatar, { source, size }, index));
      items[1] = closure_5(size(13158).AvatarPile, obj3);
      obj.children = items;
      return closure_6(size(5054).Stack, obj, children);
    }),
  });
  let obj4 = {
    title: "Avatar Pile (with overflow)",
    children: items.map((children) => {
      const size = children;
      const obj = { children: null };
      items = [closure_5(size(4632).Text, { variant: "text-md/medium", color: "text-subtle", children })];
      const obj3 = { size: children, names, totalCount: 9500, children: null };
      const DEFAULT_AVATARS = size(1399).DEFAULT_AVATARS;
      obj3.children = DEFAULT_AVATARS.map((source, index) => closure_2_5(native.Avatar, { source, size }, index));
      items[1] = closure_5(size(13158).AvatarPile, obj3);
      obj.children = items;
      return closure_6(size(5054).Stack, obj, children);
    }),
  };
  items[2] = hasOwnProperty(SampleCard, {
    title: "Avatar Duo Pile",
    children: items.map((children) => {
      const size = children;
      const obj = { children: null };
      items = [closure_5(size(4632).Text, { variant: "text-md/medium", color: "text-subtle", children })];
      const obj3 = { size: children, names: names.slice(0, 2), children: null };
      const DEFAULT_AVATARS = size(1399).DEFAULT_AVATARS;
      const substr = DEFAULT_AVATARS.slice(0, 2);
      obj3.children = substr.map((source, index) => closure_2_5(native.Avatar, { source, size }, index));
      items[1] = closure_5(size(14266).AvatarDuoPile, obj3);
      obj.children = items;
      return closure_6(size(5054).Stack, obj, children);
    }),
  });
  const obj5 = {
    title: "Avatar Duo Pile",
    children: items.map((children) => {
      const size = children;
      const obj = { children: null };
      items = [closure_5(size(4632).Text, { variant: "text-md/medium", color: "text-subtle", children })];
      const obj3 = { size: children, names: names.slice(0, 2), children: null };
      const DEFAULT_AVATARS = size(1399).DEFAULT_AVATARS;
      const substr = DEFAULT_AVATARS.slice(0, 2);
      obj3.children = substr.map((source, index) => closure_2_5(native.Avatar, { source, size }, index));
      items[1] = closure_5(size(14266).AvatarDuoPile, obj3);
      obj.children = items;
      return closure_6(size(5054).Stack, obj, children);
    }),
  };
  items[3] = hasOwnProperty(SampleCard, {
    title: "Avatar Duo Pile (different sizes)",
    children: items.map((children) => {
      const obj = { children: null };
      items = [closure_1_5(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children })];
      const obj3 = { size: null, names: null, children: null };
      items1 = [children, native.AvatarSizes.NORMAL];
      obj3.size = items1;
      obj3.names = names.slice(0, 2);
      const items2 = [closure_1_5(native.Avatar, { source: utils_AvatarUtils.DEFAULT_AVATARS[0], size: children })];
      const obj2 = { variant: "text-md/medium", color: "text-subtle", children };
      const obj4 = { source: utils_AvatarUtils.DEFAULT_AVATARS[0], size: children };
      items2[1] = closure_1_5(native.Avatar, {
        source: utils_AvatarUtils.DEFAULT_AVATARS[1],
        size: native.AvatarSizes.NORMAL,
      });
      obj3.children = items2;
      items[1] = closure_1_6(AvatarDuoPile.AvatarDuoPile, obj3);
      obj.children = items;
      return closure_1_6(Stack_Stack.Stack, obj, children);
    }),
  });
  const obj6 = {
    title: "Avatar Duo Pile (different sizes)",
    children: items.map((children) => {
      const obj = { children: null };
      items = [closure_1_5(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children })];
      const obj3 = { size: null, names: null, children: null };
      items1 = [children, native.AvatarSizes.NORMAL];
      obj3.size = items1;
      obj3.names = names.slice(0, 2);
      const items2 = [closure_1_5(native.Avatar, { source: utils_AvatarUtils.DEFAULT_AVATARS[0], size: children })];
      const obj2 = { variant: "text-md/medium", color: "text-subtle", children };
      const obj4 = { source: utils_AvatarUtils.DEFAULT_AVATARS[0], size: children };
      items2[1] = closure_1_5(native.Avatar, {
        source: utils_AvatarUtils.DEFAULT_AVATARS[1],
        size: native.AvatarSizes.NORMAL,
      });
      obj3.children = items2;
      items[1] = closure_1_6(AvatarDuoPile.AvatarDuoPile, obj3);
      obj.children = items;
      return closure_1_6(Stack_Stack.Stack, obj, children);
    }),
  };
  items[4] = hasOwnProperty(SampleCard, {
    title: "Guild Icon Pile (with overflow)",
    children: items1.map((size) => {
      const obj = { children: null };
      items = [
        closure_5(size(4632).Text, { variant: "text-md/medium", color: "text-subtle", children: size.toLowerCase() }),
      ];
      const obj2 = { variant: "text-md/medium", color: "text-subtle", children: size.toLowerCase() };
      items[1] = closure_5(size(12748).GuildIconPile, {
        size,
        names: names2,
        totalCount: 128,
        children: names2.map((value, index) => closure_2_5(GuildIconDefault, { value, size }, index)),
      });
      obj.children = items;
      return closure_6(size(5054).Stack, obj, size);
    }),
  });
  const obj8 = { title: "Weird Piles", noScroll: true, children: null };
  items1 = [
    timestampProducer(Text_Text.Text, {
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
    items1 = [closure_1_6(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: items }), ,];
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
      closure_1_5(closure_1_0(1176).Avatar, { source, size: closure_1_0(1176).AvatarSizes.LARGE_48 }, index),
    );
    items1[1] = closure_1_5(Pile.Pile, obj2);
    const obj3 = { "aria-label": null, shape: null, size: 48, gap: 2, depthX: null, depthY: null, children: null };
    const tmp4Result = ListUtils;
    obj3["aria-label"] = ListUtils.getListSummaryLabel(names2, names2.length);
    obj3.shape = ClipView.CutoutShape.RoundedRect;
    obj3.depthX = tmp;
    obj3.depthY = tmp2;
    obj3.children = names2.map((value, index) => {
      const obj = { value, size: closure_1_0(5665).GuildIconSizes.LARGE };
      return closure_1_5(closure_1_1(5665), obj, index);
    });
    items1[2] = closure_1_5(Pile.Pile, obj3);
    obj.children = items1;
    return closure_1_6(Stack_Stack.Stack, obj, "" + tmp + "," + tmp2);
  });
  obj8.children = items1;
  items[5] = timestampProducer(SampleCard, obj8);
  obj2.children = items;
  obj.children = timestampProducer(React3, obj2);
  return hasOwnProperty(React4, obj);
}
