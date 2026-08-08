// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemPile.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { PressableCard } from "../../../../design/components/Card/native/Card.native.tsx";
import { Stack } from "../../../../design/components/Stack/native/Stack.native.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";

let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
function SampleCard(arg0) {
  let children;
  let noScroll;
  let title;
  ({ title, noScroll, children } = arg0);
  const tmp3 = callback(Stack.Stack, { spacing: 16, children });
  let obj = { style: callback3().card, children: null };
  const items = [callback(Text.Text, { variant: "text-lg/bold", children: title }), ];
  let tmp2Result = tmp3;
  if (!noScroll) {
    obj = { horizontal: true, children: null };
    obj[1] = tmp3;
    tmp2Result = callback(closure_4, obj);
  }
  items[1] = tmp2Result;
  obj[1] = items;
  return closure_6(PressableCard.Card, obj);
}
({ View: c3, ScrollView: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ container: { flexDirection: "column", gap: 12, padding: 16 }, card: { gap: 12 } });
let items = [require("Button").AvatarSizes.XSMALL, require("Button").AvatarSizes.REFRESH_MEDIUM_32, require("Button").AvatarSizes.NORMAL, require("Button").AvatarSizes.LARGE_48, require("Button").AvatarSizes.XLARGE];
let items1 = [require("GuildIconSizes").GuildIconSizes.XSMALL, require("GuildIconSizes").GuildIconSizes.SMALL_32, require("GuildIconSizes").GuildIconSizes.NORMAL, require("GuildIconSizes").GuildIconSizes.LARGE, require("GuildIconSizes").GuildIconSizes.XLARGE];
let closure_10 = ["Clyde", "Phibi", "Cap"];
let closure_11 = ["test", "cats", "Evil Marcus", "robot overlords", "not a bug", "O M G"];
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemPile.tsx");

export default function UserSettingsDesignSystemPile() {
  let obj = { children: null };
  obj = { style: callback3().container, children: null };
  obj = {
    title: "Avatar Pile",
    children: items.map((children) => {
      const callback = children;
      let obj = { children: null };
      obj = { variant: "text-md/medium", color: "text-subtle", children };
      const items = [callback2(callback(4299).Text, obj), ];
      obj = { size: children, names: closure_10, totalCount: null, children: null };
      obj[2] = callback(1419).DEFAULT_AVATARS.length;
      const DEFAULT_AVATARS = callback(1419).DEFAULT_AVATARS;
      obj[3] = DEFAULT_AVATARS.map((source) => outer1_5(children(outer1_2[4]).Avatar, { source, size: children }, arg1));
      items[1] = callback2(callback(12302).AvatarPile, obj);
      obj[0] = items;
      return callback3(callback(4712).Stack, obj, children);
    })
  };
  items = [callback(SampleCard, obj), , , , , ];
  items[1] = callback(SampleCard, {
    title: "Avatar Pile (with overflow)",
    children: items.map((children) => {
      const callback = children;
      let obj = { children: null };
      obj = { variant: "text-md/medium", color: "text-subtle", children };
      const items = [callback2(callback(4299).Text, obj), ];
      obj = { size: children, names: closure_10, totalCount: 9500, children: null };
      const DEFAULT_AVATARS = callback(1419).DEFAULT_AVATARS;
      obj[3] = DEFAULT_AVATARS.map((source) => outer1_5(children(outer1_2[4]).Avatar, { source, size: children }, arg1));
      items[1] = callback2(callback(12302).AvatarPile, obj);
      obj[0] = items;
      return callback3(callback(4712).Stack, obj, children);
    })
  });
  let obj1 = {
    title: "Avatar Pile (with overflow)",
    children: items.map((children) => {
      const callback = children;
      let obj = { children: null };
      obj = { variant: "text-md/medium", color: "text-subtle", children };
      const items = [callback2(callback(4299).Text, obj), ];
      obj = { size: children, names: closure_10, totalCount: 9500, children: null };
      const DEFAULT_AVATARS = callback(1419).DEFAULT_AVATARS;
      obj[3] = DEFAULT_AVATARS.map((source) => outer1_5(children(outer1_2[4]).Avatar, { source, size: children }, arg1));
      items[1] = callback2(callback(12302).AvatarPile, obj);
      obj[0] = items;
      return callback3(callback(4712).Stack, obj, children);
    })
  };
  items[2] = callback(SampleCard, {
    title: "Avatar Duo Pile",
    children: items.map((children) => {
      const callback = children;
      let obj = { children: null };
      obj = { variant: "text-md/medium", color: "text-subtle", children };
      const items = [callback2(callback(4299).Text, obj), ];
      obj = { size: children, names: null, children: null };
      obj[1] = arr.slice(0, 2);
      const DEFAULT_AVATARS = callback(1419).DEFAULT_AVATARS;
      const substr = DEFAULT_AVATARS.slice(0, 2);
      obj[2] = substr.map((source) => outer1_5(children(outer1_2[4]).Avatar, { source, size: children }, arg1));
      items[1] = callback2(callback(13428).AvatarDuoPile, obj);
      obj[0] = items;
      return callback3(callback(4712).Stack, obj, children);
    })
  });
  let obj2 = {
    title: "Avatar Duo Pile",
    children: items.map((children) => {
      const callback = children;
      let obj = { children: null };
      obj = { variant: "text-md/medium", color: "text-subtle", children };
      const items = [callback2(callback(4299).Text, obj), ];
      obj = { size: children, names: null, children: null };
      obj[1] = arr.slice(0, 2);
      const DEFAULT_AVATARS = callback(1419).DEFAULT_AVATARS;
      const substr = DEFAULT_AVATARS.slice(0, 2);
      obj[2] = substr.map((source) => outer1_5(children(outer1_2[4]).Avatar, { source, size: children }, arg1));
      items[1] = callback2(callback(13428).AvatarDuoPile, obj);
      obj[0] = items;
      return callback3(callback(4712).Stack, obj, children);
    })
  };
  items[3] = callback(SampleCard, {
    title: "Avatar Duo Pile (different sizes)",
    children: items.map((children) => {
      let obj = { children: null };
      obj = { variant: "text-md/medium", color: "text-subtle", children };
      const items = [callback2(callback(4299).Text, obj), ];
      obj = { size: null, names: null, children: null };
      const items1 = [children, callback(1297).AvatarSizes.NORMAL];
      obj[0] = items1;
      obj[1] = arr.slice(0, 2);
      const obj1 = { source: null, size: null };
      obj1[0] = callback(1419).DEFAULT_AVATARS[0];
      obj1[1] = children;
      const items2 = [callback2(callback(1297).Avatar, obj1), ];
      const obj2 = { source: null, size: null };
      obj2[0] = callback(1419).DEFAULT_AVATARS[1];
      obj2[1] = callback(1297).AvatarSizes.NORMAL;
      items2[1] = callback2(callback(1297).Avatar, obj2);
      obj[2] = items2;
      items[1] = callback3(callback(13428).AvatarDuoPile, obj);
      obj[0] = items;
      return callback3(callback(4712).Stack, obj, children);
    })
  });
  const obj3 = {
    title: "Avatar Duo Pile (different sizes)",
    children: items.map((children) => {
      let obj = { children: null };
      obj = { variant: "text-md/medium", color: "text-subtle", children };
      const items = [callback2(callback(4299).Text, obj), ];
      obj = { size: null, names: null, children: null };
      const items1 = [children, callback(1297).AvatarSizes.NORMAL];
      obj[0] = items1;
      obj[1] = arr.slice(0, 2);
      const obj1 = { source: null, size: null };
      obj1[0] = callback(1419).DEFAULT_AVATARS[0];
      obj1[1] = children;
      const items2 = [callback2(callback(1297).Avatar, obj1), ];
      const obj2 = { source: null, size: null };
      obj2[0] = callback(1419).DEFAULT_AVATARS[1];
      obj2[1] = callback(1297).AvatarSizes.NORMAL;
      items2[1] = callback2(callback(1297).Avatar, obj2);
      obj[2] = items2;
      items[1] = callback3(callback(13428).AvatarDuoPile, obj);
      obj[0] = items;
      return callback3(callback(4712).Stack, obj, children);
    })
  };
  items[4] = callback(SampleCard, {
    title: "Guild Icon Pile (with overflow)",
    children: items1.map((size) => {
      const callback = size;
      let obj = { children: null };
      obj = { variant: "text-md/medium", color: "text-subtle", children: null };
      obj[2] = size.toLowerCase();
      const items = [callback2(callback(4299).Text, obj), ];
      obj = { size, names: closure_11, totalCount: 128, children: null };
      obj[3] = closure_11.map((value) => outer1_5(outer1_1(outer1_2[5]), { value, size: closure_0 }, arg1));
      items[1] = callback2(callback(11974).GuildIconPile, obj);
      obj[0] = items;
      return callback3(callback(4712).Stack, obj, size);
    })
  });
  const obj5 = { title: "Weird Piles", noScroll: true, children: null };
  items1 = [callback2(Text.Text, { variant: "text-md/medium", color: "text-subtle", children: ["These examples explore the edge cases of the underlying ", "<Pile>", " component and aren't recommended uses."] }), ];
  let items2 = [[1, 1], [0.5, 0.5], [null, 0.5], [0.5, null], [0, 0.5], [0.5, 0], [0, 0]];
  items1[1] = items2.map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    let str = tmp;
    if (tmp == null) {
      str = "null";
    }
    const items = ["depthX=", str, ", depthY="];
    let str2 = tmp2;
    if (tmp2 == null) {
      str2 = "null";
    }
    let obj = { children: null };
    items[3] = str2;
    const items1 = [closure_6(callback(4299).Text, { variant: "text-md/medium", color: "text-subtle", children: items }), , ];
    obj = { "aria-label": null, shape: null, size: 48, gap: 2, depthX: null, depthY: null, children: null };
    let tmp4Result = tmp4(11975);
    obj[0] = tmp4Result.getListSummaryLabel(closure_10, callback(1419).DEFAULT_AVATARS.length);
    obj[1] = callback(8293).CutoutShape.Circle;
    obj[4] = tmp;
    obj[5] = tmp2;
    const DEFAULT_AVATARS = tmp4(1419).DEFAULT_AVATARS;
    obj[6] = DEFAULT_AVATARS.map((source) => {
      const obj = { source, size: null };
      obj[1] = callback(1297).AvatarSizes.LARGE_48;
      return callback3(callback(1297).Avatar, obj, arg1);
    });
    items1[1] = callback2(callback(10269).Pile, obj);
    obj = { "aria-label": null, shape: null, size: 48, gap: 2, depthX: null, depthY: null, children: null };
    tmp4Result = tmp4(11975);
    obj[0] = tmp4Result.getListSummaryLabel(closure_11, closure_11.length);
    obj[1] = callback(8293).CutoutShape.RoundedRect;
    obj[4] = tmp;
    obj[5] = tmp2;
    obj[6] = closure_11.map((value) => {
      const obj = { value, size: null };
      obj[1] = callback(5779).GuildIconSizes.LARGE;
      return callback3(callback2(5779), obj, arg1);
    });
    items1[2] = callback2(callback(10269).Pile, obj);
    obj[0] = items1;
    return closure_6(callback(4712).Stack, obj, "" + tmp + "," + tmp2);
  });
  obj5[2] = items1;
  items[5] = callback2(SampleCard, obj5);
  obj[1] = items;
  obj[0] = callback2(closure_3, obj);
  return callback(closure_4, obj);
};