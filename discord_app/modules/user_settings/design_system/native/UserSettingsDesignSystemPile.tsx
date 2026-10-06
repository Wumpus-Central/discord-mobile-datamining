// === Module 15695: UserSettingsDesignSystemPile ===

// Module 15695 (UserSettingsDesignSystemPile)
import react2 from "react" /* 576 */;
import native from "native" /* 1188 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1405 */;
import Text_Text from "Text/Text" /* 4892 */;
import Stack_Stack from "Stack/Stack" /* 5600 */;
import GuildIcon from "GuildIcon" /* 5978 */;
import Card_Card from "Card/Card" /* 6002 */;
import ClipView from "ClipView" /* 8502 */;
import Pile3 from "Pile" /* 10752 */;
import ListUtils from "ListUtils" /* 12300 */;
import AvatarDuoPile2 from "AvatarDuoPile" /* 14293 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ container: { flexDirection: "column", gap: 12, padding: 16 }, card: { gap: 12 } });
let items = [native.AvatarSizes.XSMALL, native.AvatarSizes.REFRESH_MEDIUM_32, native.AvatarSizes.NORMAL, native.AvatarSizes.LARGE_48, native.AvatarSizes.XLARGE];
let items1 = [GuildIcon.GuildIconSizes.XSMALL, GuildIcon.GuildIconSizes.SMALL_32, GuildIcon.GuildIconSizes.NORMAL, GuildIcon.GuildIconSizes.LARGE, GuildIcon.GuildIconSizes.XLARGE];
let closure_11 = ["Clyde", "Phibi", "Cap"];
let closure_12 = ["test", "cats", "Evil Marcus", "robot overlords", "not a bug", "O M G"];
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let noScroll;
  let title;
  let tmp5;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(11);
  ({ title, noScroll, children } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] !== children) {
    const obj2 = { spacing: 16, children };
    const tmp7 = metroRequire(Stack_Stack.Stack, obj2);
    cResult[0] = children;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== title) {
    const obj3 = { variant: "text-lg/bold", children: title };
    const tmp10 = metroRequire(Text_Text.Text, obj3);
    cResult[2] = title;
    cResult[3] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === tmp5) {
    let tmp11;
    if (cResult[5] === noScroll) {
      tmp11 = cResult[6];
    }
    if (cResult[7] === tmp4.card) {
      if (cResult[8] === tmp8) {
        let tmp15;
        if (cResult[9] === tmp11) {
          tmp15 = cResult[10];
        }
        return tmp15;
      }
    }
    const obj4 = { style: tmp4.card, children: items };
    items = [tmp8, tmp11];
    const tmp17 = metroImportDefault(Card_Card.Card, obj4);
    cResult[7] = tmp4.card;
    cResult[8] = tmp8;
    cResult[9] = tmp11;
    cResult[10] = tmp17;
    tmp15 = tmp17;
  }
  let tmp12 = tmp5;
  if (!noScroll) {
    const obj5 = { horizontal: true, children: tmp5 };
    tmp12 = metroRequire(hasOwnProperty, obj5);
  }
  cResult[4] = tmp5;
  cResult[5] = noScroll;
  cResult[6] = tmp12;
  tmp11 = tmp12;
}) : ((arg0) => {
  let children;
  let noScroll;
  let title;
  ({ title, noScroll, children } = arg0);
  const tmp = closure_8();
  const tmp3 = metroRequire(Stack_Stack.Stack, { spacing: 16, children });
  const obj = { style: tmp.card, children: items };
  const Card = Card_Card.Card;
  items = [metroRequire(Text_Text.Text, { variant: "text-lg/bold", children: title }), ];
  let tmp2Result = tmp3;
  if (!noScroll) {
    const obj2 = { horizontal: true, children: tmp3 };
    tmp2Result = metroRequire(hasOwnProperty, obj2);
  }
  items[1] = tmp2Result;
  return metroImportDefault(Card, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let items2;
  let names;
  let names2;
  let obj10;
  let tmp10;
  let tmp15;
  let tmp20;
  let tmp25;
  let tmp30;
  let tmp34;
  let obj = react2;
  const cResult = obj.c(8);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = {
      title: "Avatar Pile",
      children: items.map((children) => {
          let DEFAULT_AVATARS;
          size = children;
          let obj = { children: items };
          const Stack = size(closure_2[9]).Stack;
          items = [, ];
          const obj2 = { variant: "text-md/medium", color: "text-subtle", children };
          items[0] = closure_6(size(closure_2[10]).Text, obj2);
          const obj3 = {
            size: children,
            names,
            totalCount: size(closure_2[13]).DEFAULT_AVATARS.length,
            children: DEFAULT_AVATARS.map((source, index) => {
              const obj = { source, size };
              return closure_2_6(native.Avatar, obj, index);
            })
          };
          const AvatarPile = size(closure_2[12]).AvatarPile;
          DEFAULT_AVATARS = size(closure_2[13]).DEFAULT_AVATARS;
          items[1] = closure_6(AvatarPile, obj3);
          return closure_7(Stack, obj, children);
        })
    };
    const tmp9 = metroRequire(closure_13, obj2);
    cResult[0] = tmp9;
    first = tmp9;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = {
      title: "Avatar Pile (with overflow)",
      children: items.map((children) => {
          let DEFAULT_AVATARS;
          size = children;
          let obj = { children: items };
          const Stack = size(closure_2[9]).Stack;
          items = [, ];
          const obj2 = { variant: "text-md/medium", color: "text-subtle", children };
          items[0] = closure_6(size(closure_2[10]).Text, obj2);
          const obj3 = {
            size: children,
            names,
            totalCount: 9500,
            children: DEFAULT_AVATARS.map((source, index) => {
              const obj = { source, size };
              return closure_2_6(native.Avatar, obj, index);
            })
          };
          const AvatarPile = size(closure_2[12]).AvatarPile;
          DEFAULT_AVATARS = size(closure_2[13]).DEFAULT_AVATARS;
          items[1] = closure_6(AvatarPile, obj3);
          return closure_7(Stack, obj, children);
        })
    };
    const tmp14 = metroRequire(closure_13, obj3);
    cResult[1] = tmp14;
    tmp10 = tmp14;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj4 = {
      title: "Avatar Duo Pile",
      children: items.map((children) => {
          let substr;
          size = children;
          let obj = { children: items };
          const Stack = size(closure_2[9]).Stack;
          items = [, ];
          const obj2 = { variant: "text-md/medium", color: "text-subtle", children };
          items[0] = closure_6(size(closure_2[10]).Text, obj2);
          const obj3 = {
            size: children,
            names: names.slice(0, 2),
            children: substr.map((source, index) => {
              const obj = { source, size };
              return closure_2_6(native.Avatar, obj, index);
            })
          };
          const AvatarDuoPile = size(closure_2[14]).AvatarDuoPile;
          const DEFAULT_AVATARS = size(closure_2[13]).DEFAULT_AVATARS;
          substr = DEFAULT_AVATARS.slice(0, 2);
          items[1] = closure_6(AvatarDuoPile, obj3);
          return closure_7(Stack, obj, children);
        })
    };
    const tmp19 = metroRequire(closure_13, obj4);
    cResult[2] = tmp19;
    tmp15 = tmp19;
  } else {
    tmp15 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let obj5 = {
      title: "Avatar Duo Pile (different sizes)",
      children: items.map((children) => {
          let items2;
          const obj = { children: items };
          const Stack = Stack_Stack.Stack;
          items = [, ];
          const obj2 = { variant: "text-md/medium", color: "text-subtle", children };
          items[0] = closure_1_6(Text_Text.Text, obj2);
          const obj3 = { size: items1, names: names.slice(0, 2), children: items2 };
          items1 = [children, ];
          const AvatarDuoPile = AvatarDuoPile2.AvatarDuoPile;
          items1[1] = native.AvatarSizes.NORMAL;
          const obj4 = { source: utils_AvatarUtils.DEFAULT_AVATARS[0], size: children };
          const Avatar = native.Avatar;
          items2 = [closure_1_6(Avatar, obj4), ];
          const obj5 = { source: utils_AvatarUtils.DEFAULT_AVATARS[1], size: native.AvatarSizes.NORMAL };
          const Avatar2 = native.Avatar;
          items2[1] = closure_1_6(Avatar2, obj5);
          items[1] = closure_1_7(AvatarDuoPile, obj3);
          return closure_1_7(Stack, obj, children);
        })
    };
    const tmp24 = metroRequire(closure_13, obj5);
    cResult[3] = tmp24;
    tmp20 = tmp24;
  } else {
    tmp20 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = {
      title: "Guild Icon Pile (with overflow)",
      children: items1.map((size) => {
          let obj = { children: items };
          const Stack = size(closure_2[9]).Stack;
          const obj2 = { variant: "text-md/medium", color: "text-subtle", children: size.toLowerCase() };
          const Text = size(closure_2[10]).Text;
          items = [closure_6(Text, obj2), ];
          const obj3 = {
            size,
            names: names2,
            totalCount: 128,
            children: names2.map((value, index) => {
              const obj = { value, size };
              return closure_2_6(GuildIconDefault, obj, index);
            })
          };
          const GuildIconPile = size(closure_2[15]).GuildIconPile;
          items[1] = closure_6(GuildIconPile, obj3);
          return closure_7(Stack, obj, size);
        })
    };
    const tmp29 = metroRequire(closure_13, obj6);
    cResult[4] = tmp29;
    tmp25 = tmp29;
  } else {
    tmp25 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { title: "Weird Piles", noScroll: true, children: items };
    const obj8 = { variant: "text-md/medium", color: "text-subtle", children: ["These examples explore the edge cases of the underlying ", "<Pile>", " component and aren't recommended uses."] };
    items = [metroImportDefault(Text_Text.Text, obj8), ];
    items1 = [[1, 1], [0.5, 0.5], [null, 0.5], [0.5, null], [0, 0.5], [0.5, 0], [0, 0]];
    items[1] = items1.map((item) => {
      let DEFAULT_AVATARS;
      let tmp2;
      let tmp3;
      let tmp5Result;
      let tmp5Result2;
      let tmp = _slicedToArray(item, 2);
      [tmp2, tmp3] = tmp;
      const Stack = Stack_Stack.Stack;
      let str = tmp2;
      const Text = Text_Text.Text;
      if (tmp2 == null) {
        str = "null";
      }
      items = ["depthX=", str, ", depthY="];
      let str2 = tmp3;
      if (tmp3 == null) {
        str2 = "null";
      }
      let obj = { children: items1 };
      items[3] = str2;
      items1 = [closure_1_7(Text, { variant: "text-md/medium", color: "text-subtle", children: items }), , ];
      const obj2 = {
        "aria-label": tmp5Result.getListSummaryLabel(names, utils_AvatarUtils.DEFAULT_AVATARS.length),
        shape: ClipView.CutoutShape.Circle,
        size: 48,
        gap: 2,
        depthX: tmp2,
        depthY: tmp3,
        children: DEFAULT_AVATARS.map((source, index) => {
          const obj = { source, size: closure_1_0(closure_1_2[5]).AvatarSizes.LARGE_48 };
          const Avatar = closure_1_0(closure_1_2[5]).Avatar;
          return closure_1_6(Avatar, obj, index);
        })
      };
      const Pile = Pile3.Pile;
      tmp5Result = ListUtils;
      DEFAULT_AVATARS = utils_AvatarUtils.DEFAULT_AVATARS;
      items1[1] = closure_1_6(Pile, obj2);
      const obj3 = {
        "aria-label": tmp5Result2.getListSummaryLabel(names2, names2.length),
        shape: ClipView.CutoutShape.RoundedRect,
        size: 48,
        gap: 2,
        depthX: tmp2,
        depthY: tmp3,
        children: names2.map((value, index) => {
          const obj = { value, size: closure_1_0(closure_1_2[6]).GuildIconSizes.LARGE };
          const tmp = closure_1_1(closure_1_2[6]);
          return closure_1_6(tmp, obj, index);
        })
      };
      const Pile2 = Pile3.Pile;
      tmp5Result2 = ListUtils;
      items1[2] = closure_1_6(Pile2, obj3);
      return closure_1_7(Stack, obj, "" + tmp2 + "," + tmp3);
    });
    const tmp33 = metroImportDefault(closure_13, obj7);
    cResult[5] = tmp33;
    tmp30 = tmp33;
  } else {
    tmp30 = cResult[5];
  }
  if (cResult[6] !== tmp4.container) {
    const obj9 = { children: metroImportDefault(React3, obj10) };
    obj10 = { style: tmp4.container, children: items2 };
    items2 = [first, tmp10, tmp15, tmp20, tmp25, tmp30];
    const tmp39 = metroRequire(hasOwnProperty, obj9);
    cResult[6] = tmp4.container;
    cResult[7] = tmp39;
    tmp34 = tmp39;
  } else {
    tmp34 = cResult[7];
  }
  return tmp34;
}) : (() => {
  let names;
  let names2;
  let obj2;
  let obj = { children: metroImportDefault(React3, obj2) };
  obj2 = { style: closure_8().container, children: items };
  let obj3 = {
    title: "Avatar Pile",
    children: items.map((children) => {
      let DEFAULT_AVATARS;
      size = children;
      let obj = { children: items };
      const Stack = size(closure_2[9]).Stack;
      items = [, ];
      const obj2 = { variant: "text-md/medium", color: "text-subtle", children };
      items[0] = closure_6(size(closure_2[10]).Text, obj2);
      const obj3 = {
        size: children,
        names,
        totalCount: size(closure_2[13]).DEFAULT_AVATARS.length,
        children: DEFAULT_AVATARS.map((source, index) => {
          const obj = { source, size };
          return closure_2_6(native.Avatar, obj, index);
        })
      };
      const AvatarPile = size(closure_2[12]).AvatarPile;
      DEFAULT_AVATARS = size(closure_2[13]).DEFAULT_AVATARS;
      items[1] = closure_6(AvatarPile, obj3);
      return closure_7(Stack, obj, children);
    })
  };
  items = [metroRequire(closure_13, obj3), , , , , ];
  let obj4 = {
    title: "Avatar Pile (with overflow)",
    children: items.map((children) => {
      let DEFAULT_AVATARS;
      size = children;
      let obj = { children: items };
      const Stack = size(closure_2[9]).Stack;
      items = [, ];
      const obj2 = { variant: "text-md/medium", color: "text-subtle", children };
      items[0] = closure_6(size(closure_2[10]).Text, obj2);
      const obj3 = {
        size: children,
        names,
        totalCount: 9500,
        children: DEFAULT_AVATARS.map((source, index) => {
          const obj = { source, size };
          return closure_2_6(native.Avatar, obj, index);
        })
      };
      const AvatarPile = size(closure_2[12]).AvatarPile;
      DEFAULT_AVATARS = size(closure_2[13]).DEFAULT_AVATARS;
      items[1] = closure_6(AvatarPile, obj3);
      return closure_7(Stack, obj, children);
    })
  };
  items[1] = metroRequire(closure_13, obj4);
  let obj5 = {
    title: "Avatar Duo Pile",
    children: items.map((children) => {
      let substr;
      size = children;
      let obj = { children: items };
      const Stack = size(closure_2[9]).Stack;
      items = [, ];
      const obj2 = { variant: "text-md/medium", color: "text-subtle", children };
      items[0] = closure_6(size(closure_2[10]).Text, obj2);
      const obj3 = {
        size: children,
        names: names.slice(0, 2),
        children: substr.map((source, index) => {
          const obj = { source, size };
          return closure_2_6(native.Avatar, obj, index);
        })
      };
      const AvatarDuoPile = size(closure_2[14]).AvatarDuoPile;
      const DEFAULT_AVATARS = size(closure_2[13]).DEFAULT_AVATARS;
      substr = DEFAULT_AVATARS.slice(0, 2);
      items[1] = closure_6(AvatarDuoPile, obj3);
      return closure_7(Stack, obj, children);
    })
  };
  items[2] = metroRequire(closure_13, obj5);
  const obj6 = {
    title: "Avatar Duo Pile (different sizes)",
    children: items.map((children) => {
      let items2;
      const obj = { children: items };
      const Stack = Stack_Stack.Stack;
      items = [, ];
      const obj2 = { variant: "text-md/medium", color: "text-subtle", children };
      items[0] = closure_1_6(Text_Text.Text, obj2);
      const obj3 = { size: items1, names: names.slice(0, 2), children: items2 };
      items1 = [children, ];
      const AvatarDuoPile = AvatarDuoPile2.AvatarDuoPile;
      items1[1] = native.AvatarSizes.NORMAL;
      const obj4 = { source: utils_AvatarUtils.DEFAULT_AVATARS[0], size: children };
      const Avatar = native.Avatar;
      items2 = [closure_1_6(Avatar, obj4), ];
      const obj5 = { source: utils_AvatarUtils.DEFAULT_AVATARS[1], size: native.AvatarSizes.NORMAL };
      const Avatar2 = native.Avatar;
      items2[1] = closure_1_6(Avatar2, obj5);
      items[1] = closure_1_7(AvatarDuoPile, obj3);
      return closure_1_7(Stack, obj, children);
    })
  };
  items[3] = metroRequire(closure_13, obj6);
  const obj7 = {
    title: "Guild Icon Pile (with overflow)",
    children: items1.map((size) => {
      let obj = { children: items };
      const Stack = size(closure_2[9]).Stack;
      const obj2 = { variant: "text-md/medium", color: "text-subtle", children: size.toLowerCase() };
      const Text = size(closure_2[10]).Text;
      items = [closure_6(Text, obj2), ];
      const obj3 = {
        size,
        names: names2,
        totalCount: 128,
        children: names2.map((value, index) => {
          const obj = { value, size };
          return closure_2_6(GuildIconDefault, obj, index);
        })
      };
      const GuildIconPile = size(closure_2[15]).GuildIconPile;
      items[1] = closure_6(GuildIconPile, obj3);
      return closure_7(Stack, obj, size);
    })
  };
  items[4] = metroRequire(closure_13, obj7);
  const obj8 = { title: "Weird Piles", noScroll: true, children: items1 };
  items1 = [metroImportDefault(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: ["These examples explore the edge cases of the underlying ", "<Pile>", " component and aren't recommended uses."] }), ];
  let items2 = [[1, 1], [0.5, 0.5], [null, 0.5], [0.5, null], [0, 0.5], [0.5, 0], [0, 0]];
  items1[1] = items2.map((item) => {
    let DEFAULT_AVATARS;
    let tmp;
    let tmp2;
    let tmp4Result;
    let tmp4Result2;
    [tmp, tmp2] = item;
    const Stack = Stack_Stack.Stack;
    let str = tmp;
    const Text = Text_Text.Text;
    if (tmp == null) {
      str = "null";
    }
    items = ["depthX=", str, ", depthY="];
    let str2 = tmp2;
    if (tmp2 == null) {
      str2 = "null";
    }
    let obj = { children: items1 };
    items[3] = str2;
    items1 = [closure_1_7(Text, { variant: "text-md/medium", color: "text-subtle", children: items }), , ];
    const obj2 = {
      "aria-label": tmp4Result.getListSummaryLabel(names, utils_AvatarUtils.DEFAULT_AVATARS.length),
      shape: ClipView.CutoutShape.Circle,
      size: 48,
      gap: 2,
      depthX: tmp,
      depthY: tmp2,
      children: DEFAULT_AVATARS.map((source, index) => {
        const obj = { source, size: closure_1_0(closure_1_2[5]).AvatarSizes.LARGE_48 };
        const Avatar = closure_1_0(closure_1_2[5]).Avatar;
        return closure_1_6(Avatar, obj, index);
      })
    };
    const Pile = Pile3.Pile;
    tmp4Result = ListUtils;
    DEFAULT_AVATARS = utils_AvatarUtils.DEFAULT_AVATARS;
    items1[1] = closure_1_6(Pile, obj2);
    const obj3 = {
      "aria-label": tmp4Result2.getListSummaryLabel(names2, names2.length),
      shape: ClipView.CutoutShape.RoundedRect,
      size: 48,
      gap: 2,
      depthX: tmp,
      depthY: tmp2,
      children: names2.map((value, index) => {
        const obj = { value, size: closure_1_0(closure_1_2[6]).GuildIconSizes.LARGE };
        const tmp = closure_1_1(closure_1_2[6]);
        return closure_1_6(tmp, obj, index);
      })
    };
    const Pile2 = Pile3.Pile;
    tmp4Result2 = ListUtils;
    items1[2] = closure_1_6(Pile2, obj3);
    return closure_1_7(Stack, obj, "" + tmp + "," + tmp2);
  });
  items[5] = metroImportDefault(closure_13, obj8);
  return metroRequire(hasOwnProperty, obj);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemPile.tsx");

export default tmp5;