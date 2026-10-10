// === Module 9557: EmojiGrid ===

// Module 9557 (EmojiGrid)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1415 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4768 */;
import EmojiDefault from "Emoji" /* 6819 */;
import chunkDefault from "chunk" /* 9558 */;
import LayoutUtils from "LayoutUtils" /* 9560 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = { gridEmojiFastImage: null, gridEmojiText: null, emojiGridRowContainer: null, emojiGridContainer: null };
let size = { height: 40, width: 40, borderRadius: nativeDefault.radii.sm };
obj2.gridEmojiFastImage = size;
obj2.gridEmojiText = { fontSize: 18, lineHeight: 44 };
obj2.emojiGridRowContainer = { marginTop: 16, flexDirection: "row" };
obj2.emojiGridContainer = { marginTop: 8, alignItems: "center" };
let closure_5 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? (function Emoji(guildEmoji) {
  const cResult = c.c(8);
  guildEmoji = guildEmoji.guildEmoji;
  const tmp3 = closure_5();
  if (cResult[0] !== guildEmoji) {
    if (null == guildEmoji.id) {
      let uRL = EmojiUtilsDefault.getURL(guildEmoji.name);
    } else {
      ({ id: obj3.id, animated: obj3.animated } = guildEmoji);
      uRL = AvatarUtilsDefault.getEmojiURL({ id: null, animated: null, size: 48 });
      const obj7 = { id: null, animated: null, size: 48 };
    }
    cResult[0] = guildEmoji;
    cResult[1] = uRL;
  } else {
    if (cResult[2] === guildEmoji.id) {
      if (cResult[3] === guildEmoji.name) {
        if (cResult[4] === tmp3.gridEmojiFastImage) {
          if (cResult[5] === tmp3.gridEmojiText) {
            if (cResult[6] === tmp5) {
              let tmp11 = cResult[7];
            }
            return tmp11;
          }
        }
      }
    }
    const obj8 = { src: cResult[1], fastImageStyle: null, textEmojiStyle: null, name: null };
    ({ gridEmojiFastImage: obj5.fastImageStyle, gridEmojiText: obj5.textEmojiStyle } = tmp3);
    obj8.name = guildEmoji.name;
    const tmp14 = jsx(EmojiDefault, { src: cResult[1], fastImageStyle: null, textEmojiStyle: null, name: null }, tmp4);
    cResult[2] = guildEmoji.id;
    cResult[3] = guildEmoji.name;
    cResult[4] = tmp3.gridEmojiFastImage;
    cResult[5] = tmp3.gridEmojiText;
    cResult[6] = cResult[1];
    cResult[7] = tmp14;
    tmp11 = tmp14;
  }
}) : (function Emoji(guildEmoji) {
  guildEmoji = guildEmoji.guildEmoji;
  const tmp = closure_5();
  if (null == guildEmoji.id) {
    let uRL = EmojiUtilsDefault.getURL(guildEmoji.name);
    const tmp3Result = EmojiUtilsDefault;
  } else {
    ({ id: obj2.id, animated: obj2.animated } = guildEmoji);
    uRL = AvatarUtilsDefault.getEmojiURL({ id: null, animated: null, size: 48 });
    const obj = { id: null, animated: null, size: 48 };
    const tmp3Result2 = AvatarUtilsDefault;
  }
  return jsx(EmojiDefault, { src: uRL, fastImageStyle: tmp.gridEmojiFastImage, textEmojiStyle: tmp.gridEmojiText, name: guildEmoji.name }, guildEmoji.id);
});
ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/emoji/EmojiGrid.tsx");

export const EmojiGrid = ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiGrid(arg0) {
  const cResult = require("c").c(28);
  ({ expressionSourceGuild, doNotDisplayEmojiIds, numberToShow, maxPerRow } = arg0);
  if (cResult[0] !== doNotDisplayEmojiIds) {
    let items = doNotDisplayEmojiIds;
    if (undefined === doNotDisplayEmojiIds) {
      items = [];
    }
    cResult[0] = doNotDisplayEmojiIds;
    cResult[1] = items;
    let tmp4 = items;
  } else {
    tmp4 = cResult[1];
  }
  _require = tmp4;
  let num3 = 10;
  if (undefined !== numberToShow) {
    num3 = numberToShow;
  }
  let num4 = 5;
  if (undefined !== maxPerRow) {
    num4 = maxPerRow;
  }
  let obj = require("c");
  const sharedMessageEmojiStyles = require("useSharedMessageEmojiStyles").useSharedMessageEmojiStyles();
  const tmp6 = closure_5();
  if (cResult[2] === sharedMessageEmojiStyles) {
    if (cResult[3] === tmp6) {
      let tmp7 = cResult[4];
    }
    importDefault = tmp7;
    if (cResult[5] === tmp4) {
      let emojis;
      if (expressionSourceGuild != null) {
        emojis = expressionSourceGuild.emojis;
      }
      if (cResult[6] === emojis) {
        if (cResult[7] === num4) {
          if (cResult[8] === num3) {
            if (cResult[9] === tmp7.emojiGridContainer) {
              if (cResult[10] === tmp7.emojiGridRowContainer) {
                let tmp12 = cResult[11];
                let tmp13 = cResult[12];
                let tmp14 = cResult[13];
                let num5 = cResult[14];
                let tmp15 = cResult[15];
              }
              if (cResult[20] === tmp12) {
                if (cResult[21] === num5) {
                  if (cResult[22] === tmp15) {
                    let tmp25 = cResult[23];
                  }
                  if (cResult[24] === tmp13) {
                    if (cResult[25] === tmp14) {
                      if (cResult[26] === tmp25) {
                        let tmp28 = cResult[27];
                      }
                      return tmp28;
                    }
                  }
                  const obj2 = { style: tmp14, children: tmp25 };
                  const tmp30 = <tmp13 style={tmp14}>{tmp25}</tmp13>;
                  cResult[24] = tmp13;
                  cResult[25] = tmp14;
                  cResult[26] = tmp25;
                  cResult[27] = tmp30;
                  tmp28 = tmp30;
                }
              }
              const obj3 = { gap: num5, children: tmp15 };
              const tmp27 = <tmp12 gap={num5}>{tmp15}</tmp12>;
              cResult[20] = tmp12;
              cResult[21] = num5;
              cResult[22] = tmp15;
              cResult[23] = tmp27;
              tmp25 = tmp27;
            }
          }
        }
      }
    }
    if (cResult[16] !== tmp4) {
      class F {
        constructor(arg0) {
          return !closure_0.includes(arg0.id);
        }
      }
      cResult[16] = tmp4;
      cResult[17] = F;
    } else {
      class F {
        constructor(arg0) {
          return !closure_0.includes(arg0.id);
        }
      }
    }
    if (expressionSourceGuild != null) {
      class F {
        constructor(arg0) {
          return !closure_0.includes(arg0.id);
        }
      }
    }
    if (undefined == null) {
      class F {
        constructor(arg0) {
          return !closure_0.includes(arg0.id);
        }
      }
    }
    const substr = tmp18.slice(0, num3 + 1);
    const found = substr.filter(F);
    const substr1 = found.slice(0, num3);
    const emojiGridContainer = tmp7.emojiGridContainer;
    const GappedList = tmp(9560).GappedList;
    if (cResult[18] !== tmp7.emojiGridRowContainer) {
      class U {
        constructor(arg0, arg1) {
          obj = { style: closure_1.emojiGridRowContainer, children: null };
          obj1 = { gap: 32, children: arg0.map(() => { ... }) };
          obj.children = jsx(closure_0(closure_2[12]).GappedList, obj1);
          return jsx(View, obj, arg1);
        }
      }
      cResult[18] = tmp7.emojiGridRowContainer;
      cResult[19] = U;
    } else {
      class U {
        constructor(arg0, arg1) {
          obj = { style: closure_1.emojiGridRowContainer, children: null };
          obj1 = { gap: 32, children: arg0.map(() => { ... }) };
          obj.children = jsx(closure_0(closure_2[12]).GappedList, obj1);
          return jsx(View, obj, arg1);
        }
      }
    }
    const mapped = chunkDefault(substr1, num4).map(U);
    cResult[5] = tmp4;
    if (expressionSourceGuild != null) {
      class U {
        constructor(arg0, arg1) {
          obj = { style: closure_1.emojiGridRowContainer, children: null };
          obj1 = { gap: 32, children: arg0.map(() => { ... }) };
          obj.children = jsx(closure_0(closure_2[12]).GappedList, obj1);
          return jsx(View, obj, arg1);
        }
      }
    }
    cResult[6] = undefined;
    cResult[7] = num4;
    cResult[8] = num3;
    ({ emojiGridContainer: tmp3[9], emojiGridRowContainer: tmp3[10] } = tmp7);
    cResult[11] = GappedList;
    cResult[12] = View;
    cResult[13] = emojiGridContainer;
    cResult[14] = 8;
    cResult[15] = mapped;
    tmp15 = mapped;
    num5 = 8;
    tmp14 = emojiGridContainer;
    tmp13 = View;
    tmp12 = GappedList;
    const arr4 = chunkDefault(substr1, num4);
  }
  const obj4 = {};
  const merged = Object.assign(sharedMessageEmojiStyles);
  const merged1 = Object.assign(tmp6);
  cResult[2] = sharedMessageEmojiStyles;
  cResult[3] = tmp6;
  cResult[4] = obj4;
  tmp7 = obj4;
  const tmpResult = require("useSharedMessageEmojiStyles");
}) : (function EmojiGrid(numberToShow) {
  ({ expressionSourceGuild, doNotDisplayEmojiIds } = numberToShow);
  if (doNotDisplayEmojiIds === undefined) {
    doNotDisplayEmojiIds = [];
  }
  let num = numberToShow.numberToShow;
  if (num === undefined) {
    num = 10;
  }
  let num2 = numberToShow.maxPerRow;
  if (num2 === undefined) {
    num2 = 5;
  }
  let obj = {};
  const merged = Object.assign(doNotDisplayEmojiIds(9542).useSharedMessageEmojiStyles());
  const merged1 = Object.assign(closure_5());
  let emojis;
  if (expressionSourceGuild != null) {
    emojis = expressionSourceGuild.emojis;
  }
  if (emojis == null) {
    emojis = [];
  }
  const substr = emojis.slice(0, num + 1);
  const found = substr.filter((id) => !doNotDisplayEmojiIds.includes(id.id));
  const substr1 = found.slice(0, num);
  const obj2 = doNotDisplayEmojiIds(9542);
  const tmp = doNotDisplayEmojiIds;
  const obj3 = { style: obj.emojiGridContainer, children: null };
  const arr4 = obj(9558)(substr1, num2);
  obj3.children = jsx(tmp(9560).GappedList, {
    gap: 8,
    children: obj(9558)(substr1, num2).map((arr, index) => {
      obj = { style: obj.emojiGridRowContainer, children: jsx(LayoutUtils.GappedList, { gap: 32, children: arr.map((guildEmoji) => closure_1_4(closure_1_6, { guildEmoji }, guildEmoji.id)) }) };
      return <View key={index} style={obj.emojiGridRowContainer}>{jsx(LayoutUtils.GappedList, { gap: 32, children: arr.map((guildEmoji) => closure_1_4(closure_1_6, { guildEmoji }, guildEmoji.id)) })}</View>;
    })
  });
  return <View style={obj.emojiGridContainer}>{null}</View>;
});