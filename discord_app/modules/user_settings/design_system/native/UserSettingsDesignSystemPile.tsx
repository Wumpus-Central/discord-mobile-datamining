// === Module 14939: SampleCard ===

// Module 14939 (SampleCard)
import noopAll from "noop" /* 19 */;
import Stack from "Stack" /* 4733 */;
import Text from "Text" /* 4734 */;
import PressableCard from "PressableCard" /* 6292 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
function SampleCard(arg0) {
  ({ title, noScroll, children } = arg0);
  const tmp3 = callback(Stack.Stack, { spacing: 16, children });
  let obj = { style: callback3().card, children: null };
  items = [callback(Text.Text, { variant: "text-lg/bold", children: title }), ];
  let tmp2Result = tmp3;
  if (!noScroll) {
    obj = { horizontal: true, children: null };
    obj[1] = tmp3;
    tmp2Result = callback(closure_4, obj);
  }
  items[1] = tmp2Result;
  obj[1] = items;
  return callback(PressableCard.Card, obj);
}
noopAll;
({ View: c3, ScrollView: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ container: { flexDirection: "column", gap: 12, padding: 16 }, card: { gap: 12 } });
let items = [require("Button").AvatarSizes.XSMALL, require("Button").AvatarSizes.REFRESH_MEDIUM_32, require("Button").AvatarSizes.NORMAL, require("Button").AvatarSizes.LARGE_48, require("Button").AvatarSizes.XLARGE];
let items1 = [require("GuildIconSizes").GuildIconSizes.XSMALL, require("GuildIconSizes").GuildIconSizes.SMALL_32, require("GuildIconSizes").GuildIconSizes.NORMAL, require("GuildIconSizes").GuildIconSizes.LARGE, require("GuildIconSizes").GuildIconSizes.XLARGE];
let closure_10 = ["Clyde", "Phibi", "Cap"];
let closure_11 = ["test", "cats", "Evil Marcus", "robot overlords", "not a bug", "O M G"];
const result = require("obj132").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemPile.tsx");

export default function UserSettingsDesignSystemPile() {
  { style: callback3().container, children: null };
  let obj = {
    title: "Avatar Pile",
    children: items.map((item, index) => {
      const callback = item;
      let obj = { variant: "text-md/medium", color: "text-subtle", children: item };
      items = [callback2(callback(4734).Text, obj), ];
      obj = { size: item, names: closure_10, totalCount: callback(1438).DEFAULT_AVATARS.length, children: null };
      const DEFAULT_AVATARS = callback(1438).DEFAULT_AVATARS;
      obj[3] = DEFAULT_AVATARS.map((item, index) => closure_1_5(item(closure_1_2[4]).Avatar, { source: item, size: item }, index));
      items[1] = callback2(callback(12124).AvatarPile, obj);
      obj[0] = items;
      return callback3(callback(4733).Stack, obj, item);
    })
  };
  items = [callback(SampleCard, obj), , , , , ];
  items[1] = callback(SampleCard, {
    title: "Avatar Pile (with overflow)",
    children: items.map((item, index) => {
      const callback = item;
      let obj = { variant: "text-md/medium", color: "text-subtle", children: item };
      items = [callback2(callback(4734).Text, obj), ];
      obj = { size: item, names: closure_10, totalCount: 9500, children: null };
      const DEFAULT_AVATARS = callback(1438).DEFAULT_AVATARS;
      obj[3] = DEFAULT_AVATARS.map((item, index) => closure_1_5(item(closure_1_2[4]).Avatar, { source: item, size: item }, index));
      items[1] = callback2(callback(12124).AvatarPile, obj);
      obj[0] = items;
      return callback3(callback(4733).Stack, obj, item);
    })
  });
  obj1 = {
    title: "Avatar Pile (with overflow)",
    children: items.map((item, index) => {
      const callback = item;
      let obj = { variant: "text-md/medium", color: "text-subtle", children: item };
      items = [callback2(callback(4734).Text, obj), ];
      obj = { size: item, names: closure_10, totalCount: 9500, children: null };
      const DEFAULT_AVATARS = callback(1438).DEFAULT_AVATARS;
      obj[3] = DEFAULT_AVATARS.map((item, index) => closure_1_5(item(closure_1_2[4]).Avatar, { source: item, size: item }, index));
      items[1] = callback2(callback(12124).AvatarPile, obj);
      obj[0] = items;
      return callback3(callback(4733).Stack, obj, item);
    })
  };
  items[2] = callback(SampleCard, {
    title: "Avatar Duo Pile",
    children: items.map((item, index) => {
      const callback = item;
      let obj = { variant: "text-md/medium", color: "text-subtle", children: item };
      items = [callback2(callback(4734).Text, obj), ];
      obj = { size: item, names: arr.slice(0, 2), children: null };
      const DEFAULT_AVATARS = callback(1438).DEFAULT_AVATARS;
      const substr = DEFAULT_AVATARS.slice(0, 2);
      obj[2] = substr.map((item, index) => closure_1_5(item(closure_1_2[4]).Avatar, { source: item, size: item }, index));
      items[1] = callback2(callback(13541).AvatarDuoPile, obj);
      obj[0] = items;
      return callback3(callback(4733).Stack, obj, item);
    })
  });
  const obj2 = {
    title: "Avatar Duo Pile",
    children: items.map((item, index) => {
      const callback = item;
      let obj = { variant: "text-md/medium", color: "text-subtle", children: item };
      items = [callback2(callback(4734).Text, obj), ];
      obj = { size: item, names: arr.slice(0, 2), children: null };
      const DEFAULT_AVATARS = callback(1438).DEFAULT_AVATARS;
      const substr = DEFAULT_AVATARS.slice(0, 2);
      obj[2] = substr.map((item, index) => closure_1_5(item(closure_1_2[4]).Avatar, { source: item, size: item }, index));
      items[1] = callback2(callback(13541).AvatarDuoPile, obj);
      obj[0] = items;
      return callback3(callback(4733).Stack, obj, item);
    })
  };
  items[3] = callback(SampleCard, {
    title: "Avatar Duo Pile (different sizes)",
    children: items.map((item, index) => {
      let obj = { variant: "text-md/medium", color: "text-subtle", children: item };
      items = [callback2(callback(4734).Text, obj), ];
      obj = { size: null, names: null, children: null };
      items1 = [item, callback(1297).AvatarSizes.NORMAL];
      obj[0] = items1;
      obj[1] = arr.slice(0, 2);
      const items2 = [callback2(callback(1297).Avatar, { source: callback(1438).DEFAULT_AVATARS[0], size: item }), ];
      obj1 = { source: callback(1438).DEFAULT_AVATARS[0], size: item };
      items2[1] = callback2(callback(1297).Avatar, { source: callback(1438).DEFAULT_AVATARS[1], size: callback(1297).AvatarSizes.NORMAL });
      obj[2] = items2;
      items[1] = callback3(callback(13541).AvatarDuoPile, obj);
      obj[0] = items;
      return callback3(callback(4733).Stack, obj, item);
    })
  });
  const obj3 = {
    title: "Avatar Duo Pile (different sizes)",
    children: items.map((item, index) => {
      let obj = { variant: "text-md/medium", color: "text-subtle", children: item };
      items = [callback2(callback(4734).Text, obj), ];
      obj = { size: null, names: null, children: null };
      items1 = [item, callback(1297).AvatarSizes.NORMAL];
      obj[0] = items1;
      obj[1] = arr.slice(0, 2);
      const items2 = [callback2(callback(1297).Avatar, { source: callback(1438).DEFAULT_AVATARS[0], size: item }), ];
      obj1 = { source: callback(1438).DEFAULT_AVATARS[0], size: item };
      items2[1] = callback2(callback(1297).Avatar, { source: callback(1438).DEFAULT_AVATARS[1], size: callback(1297).AvatarSizes.NORMAL });
      obj[2] = items2;
      items[1] = callback3(callback(13541).AvatarDuoPile, obj);
      obj[0] = items;
      return callback3(callback(4733).Stack, obj, item);
    })
  };
  items[4] = callback(SampleCard, {
    title: "Guild Icon Pile (with overflow)",
    children: items1.map((item, index) => {
      const callback = item;
      let obj = { variant: "text-md/medium", color: "text-subtle", children: item.toLowerCase() };
      items = [callback2(callback(4734).Text, obj), ];
      obj = { size: item, names: closure_11, totalCount: 128, children: closure_11.map((item, index) => closure_1_5(closure_1_1(closure_1_2[5]), { value: item, size: closure_0 }, index)) };
      items[1] = callback2(callback(11787).GuildIconPile, obj);
      obj[0] = items;
      return callback3(callback(4733).Stack, obj, item);
    })
  });
  const obj5 = { title: "Weird Piles", noScroll: true, children: null };
  items1 = [callback2(Text.Text, { variant: "text-md/medium", color: "text-subtle", children: ["These examples explore the edge cases of the underlying ", "<Pile>", " component and aren't recommended uses."] }), ];
  let items2 = [[1, 1], [0.5, 0.5], [null, 0.5], [0.5, null], [0, 0.5], [0.5, 0], [0, 0]];
  items1[1] = items2.map((item, index) => {
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
    items[3] = str2;
    items1 = [callback(callback(4734).Text, { variant: "text-md/medium", color: "text-subtle", children: items }), , ];
    let obj = { "aria-label": null, shape: null, size: 48, gap: 2, depthX: null, depthY: null, children: null };
    let tmp4Result = callback(11790);
    obj[0] = tmp4Result.getListSummaryLabel(closure_10, callback(1438).DEFAULT_AVATARS.length);
    obj[1] = callback(8402).CutoutShape.Circle;
    obj[4] = tmp;
    obj[5] = tmp2;
    const DEFAULT_AVATARS = callback(1438).DEFAULT_AVATARS;
    obj[6] = DEFAULT_AVATARS.map((item, index) => callback3(callback(1297).Avatar, { source: item, size: callback(1297).AvatarSizes.LARGE_48 }, index));
    items1[1] = callback2(callback(11788).Pile, obj);
    obj = { "aria-label": null, shape: null, size: 48, gap: 2, depthX: null, depthY: null, children: null };
    tmp4Result = callback(11790);
    obj[0] = tmp4Result.getListSummaryLabel(closure_11, closure_11.length);
    obj[1] = callback(8402).CutoutShape.RoundedRect;
    obj[4] = tmp;
    obj[5] = tmp2;
    obj[6] = closure_11.map((item, index) => {
      const obj = { value: item, size: callback(7188).GuildIconSizes.LARGE };
      return callback3(callback2(7188), obj, index);
    });
    items1[2] = callback2(callback(11788).Pile, obj);
    obj[0] = items1;
    return callback(callback(4733).Stack, obj, "" + tmp + "," + tmp2);
  });
  obj5[2] = items1;
  items[5] = callback2(SampleCard, obj5);
  obj[1] = items;
  obj[0] = callback2(closure_3, obj);
  return callback(closure_4, obj);
};