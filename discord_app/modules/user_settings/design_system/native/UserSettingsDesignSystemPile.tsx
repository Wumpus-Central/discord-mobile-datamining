// === Module 15795: UserSettingsDesignSystemPile ===

// Module 15795 (UserSettingsDesignSystemPile)
import native from "native" /* 1178 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1399 */;
import Text_Text from "Text/Text" /* 4556 */;
import Stack_Stack from "Stack/Stack" /* 4973 */;
import GuildIconDefault from "GuildIcon" /* 5584 */;
import Card from "Card" /* 5607 */;
import ClipView from "ClipView" /* 8813 */;
import Pile from "Pile" /* 11000 */;
import ListUtils from "ListUtils" /* 12619 */;
import AvatarDuoPile from "AvatarDuoPile" /* 14177 */;
import noop from "module_19" /* 19 */;

require = fn;
function SampleCard(arg0) {
  ({ title, noScroll, children } = arg0);
  const tmp3 = hasOwnProperty(Stack_Stack.Stack, { spacing: 16, children });
  let obj = { style: closure_7().card, children: null };
  items = [hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: title }), ];
  let tmp2Result = tmp3;
  if (!noScroll) {
    obj = { horizontal: true, children: tmp3 };
    tmp2Result = hasOwnProperty(React4, obj);
  }
  items[1] = tmp2Result;
  obj.children = items;
  return timestampProducer(Card.Card, obj);
}
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "column", gap: 12, padding: 16 }, card: { gap: 12 } });
let items = [fn(1178).AvatarSizes.XSMALL, fn(1178).AvatarSizes.REFRESH_MEDIUM_32, fn(1178).AvatarSizes.NORMAL, fn(1178).AvatarSizes.LARGE_48, fn(1178).AvatarSizes.XLARGE];
let items1 = [fn(5584).GuildIconSizes.XSMALL, fn(5584).GuildIconSizes.SMALL_32, fn(5584).GuildIconSizes.NORMAL, fn(5584).GuildIconSizes.LARGE, fn(5584).GuildIconSizes.XLARGE];
let closure_10 = ["Clyde", "Phibi", "Cap"];
let closure_11 = ["test", "cats", "Evil Marcus", "robot overlords", "not a bug", "O M G"];
let size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemPile.tsx");

export default function UserSettingsDesignSystemPile() {
  let obj = { children: null };
  obj = { style: closure_7().container, children: null };
  obj = {
    title: "Avatar Pile",
    children: items.map((children) => {
      const size = children;
      let obj = { children: null };
      obj = { variant: "text-md/medium", color: "text-subtle", children };
      items = [closure_5(size(4556).Text, obj), ];
      obj = { size: children, names, totalCount: size(1399).DEFAULT_AVATARS.length, children: null };
      const DEFAULT_AVATARS = size(1399).DEFAULT_AVATARS;
      obj.children = DEFAULT_AVATARS.map((source, index) => closure_2_5(native.Avatar, { source, size }, index));
      items[1] = closure_5(size(13027).AvatarPile, obj);
      obj.children = items;
      return closure_6(size(4973).Stack, obj, children);
    })
  };
  items = [hasOwnProperty(SampleCard, obj), , , , , ];
  items[1] = hasOwnProperty(SampleCard, {
    title: "Avatar Pile (with overflow)",
    children: items.map((children) => {
      const size = children;
      let obj = { children: null };
      obj = { variant: "text-md/medium", color: "text-subtle", children };
      items = [closure_5(size(4556).Text, obj), ];
      obj = { size: children, names, totalCount: 9500, children: null };
      const DEFAULT_AVATARS = size(1399).DEFAULT_AVATARS;
      obj.children = DEFAULT_AVATARS.map((source, index) => closure_2_5(native.Avatar, { source, size }, index));
      items[1] = closure_5(size(13027).AvatarPile, obj);
      obj.children = items;
      return closure_6(size(4973).Stack, obj, children);
    })
  });
  let obj1 = {
    title: "Avatar Pile (with overflow)",
    children: items.map((children) => {
      const size = children;
      let obj = { children: null };
      obj = { variant: "text-md/medium", color: "text-subtle", children };
      items = [closure_5(size(4556).Text, obj), ];
      obj = { size: children, names, totalCount: 9500, children: null };
      const DEFAULT_AVATARS = size(1399).DEFAULT_AVATARS;
      obj.children = DEFAULT_AVATARS.map((source, index) => closure_2_5(native.Avatar, { source, size }, index));
      items[1] = closure_5(size(13027).AvatarPile, obj);
      obj.children = items;
      return closure_6(size(4973).Stack, obj, children);
    })
  };
  items[2] = hasOwnProperty(SampleCard, {
    title: "Avatar Duo Pile",
    children: items.map((children) => {
      const size = children;
      let obj = { children: null };
      obj = { variant: "text-md/medium", color: "text-subtle", children };
      items = [closure_5(size(4556).Text, obj), ];
      obj = { size: children, names: names.slice(0, 2), children: null };
      const DEFAULT_AVATARS = size(1399).DEFAULT_AVATARS;
      const substr = DEFAULT_AVATARS.slice(0, 2);
      obj.children = substr.map((source, index) => closure_2_5(native.Avatar, { source, size }, index));
      items[1] = closure_5(size(14177).AvatarDuoPile, obj);
      obj.children = items;
      return closure_6(size(4973).Stack, obj, children);
    })
  });
  const obj2 = {
    title: "Avatar Duo Pile",
    children: items.map((children) => {
      const size = children;
      let obj = { children: null };
      obj = { variant: "text-md/medium", color: "text-subtle", children };
      items = [closure_5(size(4556).Text, obj), ];
      obj = { size: children, names: names.slice(0, 2), children: null };
      const DEFAULT_AVATARS = size(1399).DEFAULT_AVATARS;
      const substr = DEFAULT_AVATARS.slice(0, 2);
      obj.children = substr.map((source, index) => closure_2_5(native.Avatar, { source, size }, index));
      items[1] = closure_5(size(14177).AvatarDuoPile, obj);
      obj.children = items;
      return closure_6(size(4973).Stack, obj, children);
    })
  };
  items[3] = hasOwnProperty(SampleCard, {
    title: "Avatar Duo Pile (different sizes)",
    children: items.map((children) => {
      let obj = { children: null };
      obj = { variant: "text-md/medium", color: "text-subtle", children };
      items = [closure_1_5(Text_Text.Text, obj), ];
      obj = { size: null, names: null, children: null };
      items1 = [children, native.AvatarSizes.NORMAL];
      obj.size = items1;
      obj.names = names.slice(0, 2);
      const items2 = [closure_1_5(native.Avatar, { source: utils_AvatarUtils.DEFAULT_AVATARS[0], size: children }), ];
      const obj1 = { source: utils_AvatarUtils.DEFAULT_AVATARS[0], size: children };
      items2[1] = closure_1_5(native.Avatar, { source: utils_AvatarUtils.DEFAULT_AVATARS[1], size: native.AvatarSizes.NORMAL });
      obj.children = items2;
      items[1] = closure_1_6(AvatarDuoPile.AvatarDuoPile, obj);
      obj.children = items;
      return closure_1_6(Stack_Stack.Stack, obj, children);
    })
  });
  const obj3 = {
    title: "Avatar Duo Pile (different sizes)",
    children: items.map((children) => {
      let obj = { children: null };
      obj = { variant: "text-md/medium", color: "text-subtle", children };
      items = [closure_1_5(Text_Text.Text, obj), ];
      obj = { size: null, names: null, children: null };
      items1 = [children, native.AvatarSizes.NORMAL];
      obj.size = items1;
      obj.names = names.slice(0, 2);
      const items2 = [closure_1_5(native.Avatar, { source: utils_AvatarUtils.DEFAULT_AVATARS[0], size: children }), ];
      const obj1 = { source: utils_AvatarUtils.DEFAULT_AVATARS[0], size: children };
      items2[1] = closure_1_5(native.Avatar, { source: utils_AvatarUtils.DEFAULT_AVATARS[1], size: native.AvatarSizes.NORMAL });
      obj.children = items2;
      items[1] = closure_1_6(AvatarDuoPile.AvatarDuoPile, obj);
      obj.children = items;
      return closure_1_6(Stack_Stack.Stack, obj, children);
    })
  };
  items[4] = hasOwnProperty(SampleCard, {
    title: "Guild Icon Pile (with overflow)",
    children: items1.map((size) => {
      let obj = { children: null };
      obj = { variant: "text-md/medium", color: "text-subtle", children: size.toLowerCase() };
      items = [closure_5(size(4556).Text, obj), ];
      obj = { size, names: names2, totalCount: 128, children: names2.map((value, index) => closure_2_5(GuildIconDefault, { value, size }, index)) };
      items[1] = closure_5(size(12618).GuildIconPile, obj);
      obj.children = items;
      return closure_6(size(4973).Stack, obj, size);
    })
  });
  const obj5 = { title: "Weird Piles", noScroll: true, children: null };
  items1 = [timestampProducer(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: ["These examples explore the edge cases of the underlying ", "<Pile>", " component and aren't recommended uses."] }), ];
  let items2 = [[1, 1], [0.5, 0.5], [null, 0.5], [0.5, null], [0, 0.5], [0.5, 0], [0, 0]];
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
    items1 = [closure_1_6(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: items }), , ];
    obj = { "aria-label": null, shape: null, size: 48, gap: 2, depthX: null, depthY: null, children: null };
    let tmp4Result = ListUtils;
    obj["aria-label"] = tmp4Result.getListSummaryLabel(names, utils_AvatarUtils.DEFAULT_AVATARS.length);
    obj.shape = ClipView.CutoutShape.Circle;
    obj.depthX = tmp;
    obj.depthY = tmp2;
    const DEFAULT_AVATARS = utils_AvatarUtils.DEFAULT_AVATARS;
    obj.children = DEFAULT_AVATARS.map((source, index) => closure_1_5(closure_1_0(1178).Avatar, { source, size: closure_1_0(1178).AvatarSizes.LARGE_48 }, index));
    items1[1] = closure_1_5(Pile.Pile, obj);
    obj = { "aria-label": null, shape: null, size: 48, gap: 2, depthX: null, depthY: null, children: null };
    tmp4Result = ListUtils;
    obj["aria-label"] = tmp4Result.getListSummaryLabel(names2, names2.length);
    obj.shape = ClipView.CutoutShape.RoundedRect;
    obj.depthX = tmp;
    obj.depthY = tmp2;
    obj.children = names2.map((value, index) => {
      const obj = { value, size: closure_1_0(5584).GuildIconSizes.LARGE };
      return closure_1_5(closure_1_1(5584), obj, index);
    });
    items1[2] = closure_1_5(Pile.Pile, obj);
    obj.children = items1;
    return closure_1_6(Stack_Stack.Stack, obj, "" + tmp + "," + tmp2);
  });
  obj5.children = items1;
  items[5] = timestampProducer(SampleCard, obj5);
  obj.children = items;
  obj.children = timestampProducer(React3, obj);
  return hasOwnProperty(React4, obj);
};