// discord_app/modules/messages/native/emoji/EmojiGrid.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import EmojiUtilsDefault from "../../../../utils/EmojiUtils.tsx";
import EmojiDefault from "../../../emojis/native/Emoji.tsx";
import chunkDefault from "../../../../../_runtime/09964_chunk.js";
import LayoutUtils from "../../../guild_role_subscriptions/native/components/LayoutUtils.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, guildEmoji, importDefault, obj1;

let size;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = {
  gridEmojiFastImage: size,
  gridEmojiText: { fontSize: 18, lineHeight: 44 },
  emojiGridRowContainer: { marginTop: 16, flexDirection: "row" },
  emojiGridContainer: { marginTop: 8, alignItems: "center" },
};
size = { height: 40, width: 40, borderRadius: nativeDefault.radii.sm };
let closure_5 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildEmoji) => {
      let tmp4;
      const obj = react2;
      const cResult = obj.c(8);
      guildEmoji = guildEmoji.guildEmoji;
      const tmp3 = closure_5();
      const id = guildEmoji.id;
      if (cResult[0] !== guildEmoji) {
        let uRL;
        if (null == guildEmoji.id) {
          const obj4 = EmojiUtilsDefault;
          uRL = obj4.getURL(guildEmoji.name);
        } else {
          const obj5 = { id: null, animated: null, size: 48 };
          ({ id: obj3.id, animated: obj3.animated } = guildEmoji);
          const obj2 = AvatarUtilsDefault;
          uRL = obj2.getEmojiURL(obj5);
        }
        cResult[0] = guildEmoji;
        cResult[1] = uRL;
        tmp4 = uRL;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === guildEmoji.id) {
        if (cResult[3] === guildEmoji.name) {
          if (cResult[4] === tmp3.gridEmojiFastImage) {
            if (cResult[5] === tmp3.gridEmojiText) {
              let tmp9;
              if (cResult[6] === tmp4) {
                tmp9 = cResult[7];
              }
              return tmp9;
            }
          }
        }
      }
      const tmp10 = jsx(
        EmojiDefault,
        {
          src: tmp4,
          fastImageStyle: tmp3.gridEmojiFastImage,
          textEmojiStyle: tmp3.gridEmojiText,
          name: guildEmoji.name,
        },
        id,
      );
      cResult[2] = guildEmoji.id;
      cResult[3] = guildEmoji.name;
      cResult[4] = tmp3.gridEmojiFastImage;
      cResult[5] = tmp3.gridEmojiText;
      cResult[6] = tmp4;
      cResult[7] = tmp10;
      tmp9 = tmp10;
    }
  : (guildEmoji) => {
      let uRL;
      guildEmoji = guildEmoji.guildEmoji;
      const tmp = closure_5();
      EmojiDefault;
      if (null == guildEmoji.id) {
        const tmp3Result = EmojiUtilsDefault;
        uRL = tmp3Result.getURL(guildEmoji.name);
      } else {
        const obj = { id: null, animated: null, size: 48 };
        ({ id: obj2.id, animated: obj2.animated } = guildEmoji);
        const tmp3Result2 = AvatarUtilsDefault;
        uRL = tmp3Result2.getEmojiURL(obj);
      }
      return (
        <tmp5
          key={guildEmoji.id}
          src={uRL}
          fastImageStyle={tmp.gridEmojiFastImage}
          textEmojiStyle={tmp.gridEmojiText}
          name={guildEmoji.name}
        />
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let closure_1;
      let doNotDisplayEmojiIds;
      let expressionSourceGuild;
      let maxPerRow;
      let numberToShow;
      let tmp4;
      let obj = require("react");
      const cResult = obj.c(28);
      ({ expressionSourceGuild, doNotDisplayEmojiIds, numberToShow, maxPerRow } = arg0);
      if (cResult[0] !== doNotDisplayEmojiIds) {
        let items = doNotDisplayEmojiIds;
        if (undefined === doNotDisplayEmojiIds) {
          items = [];
        }
        cResult[0] = doNotDisplayEmojiIds;
        cResult[1] = items;
        tmp4 = items;
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
      const tmpResult = require("useSharedMessageEmojiStyles");
      const sharedMessageEmojiStyles = tmpResult.useSharedMessageEmojiStyles();
      const tmp6 = closure_5();
      if (cResult[2] === sharedMessageEmojiStyles) {
        let tmp7;
        if (cResult[3] === tmp6) {
          tmp7 = cResult[4];
        }
        importDefault = tmp7;
        if (cResult[5] === tmp4) {
          let emojis;
          const tmp10 = cResult[6];
          if (expressionSourceGuild != null) {
            emojis = expressionSourceGuild.emojis;
          }
          if (tmp10 === emojis) {
            if (cResult[7] === num4) {
              if (cResult[8] === num3) {
                if (cResult[9] === tmp7.emojiGridContainer) {
                  let tmp13;
                  let tmp14;
                  let tmp15;
                  let num5;
                  let tmp16;
                  if (cResult[10] === tmp7.emojiGridRowContainer) {
                    tmp13 = cResult[11];
                    tmp14 = cResult[12];
                    tmp15 = cResult[13];
                    num5 = cResult[14];
                    tmp16 = cResult[15];
                  }
                  if (cResult[20] === tmp13) {
                    if (cResult[21] === num5) {
                      let tmp26;
                      if (cResult[22] === tmp16) {
                        tmp26 = cResult[23];
                      }
                      if (cResult[24] === tmp14) {
                        if (cResult[25] === tmp15) {
                          let tmp29;
                          if (cResult[26] === tmp26) {
                            tmp29 = cResult[27];
                          }
                          return tmp29;
                        }
                      }
                      const tmp31 = <tmp14 style={tmp15}>{tmp26}</tmp14>;
                      cResult[24] = tmp14;
                      cResult[25] = tmp15;
                      cResult[26] = tmp26;
                      cResult[27] = tmp31;
                      tmp29 = tmp31;
                    }
                  }
                  const tmp28 = <tmp13 gap={num5}>{tmp16}</tmp13>;
                  cResult[20] = tmp13;
                  cResult[21] = num5;
                  cResult[22] = tmp16;
                  cResult[23] = tmp28;
                  tmp26 = tmp28;
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
        const substr = tmp19.slice(0, num3 + 1);
        const found = substr.filter(F);
        const substr1 = found.slice(0, num3);
        const emojiGridContainer = tmp7.emojiGridContainer;
        const arr4 = chunkDefault(substr1, num4);
        let GappedList = tmp(9966).GappedList;
        if (cResult[18] !== tmp7.emojiGridRowContainer) {
          class U {
            constructor(arg0, arg1) {
              obj = { style: closure_1.emojiGridRowContainer, children: null };
              obj1 = { gap: 32, children: null };
              GappedList = closure_0(closure_2[12]).GappedList;
              obj1.children = arg0.map(() => {
                /* body not rendered: F140305 */
              });
              obj.children = jsx(GappedList, obj1);
              return jsx(View, obj, arg1);
            }
          }
          cResult[18] = tmp7.emojiGridRowContainer;
          cResult[19] = U;
        } else {
          class U {
            constructor(arg0, arg1) {
              obj = { style: closure_1.emojiGridRowContainer, children: null };
              obj1 = { gap: 32, children: null };
              GappedList = closure_0(closure_2[12]).GappedList;
              obj1.children = arg0.map(() => {
                /* body not rendered: F140305 */
              });
              obj.children = jsx(GappedList, obj1);
              return jsx(View, obj, arg1);
            }
          }
        }
        const mapped = arr4.map(U);
        cResult[5] = tmp4;
        if (expressionSourceGuild != null) {
          class U {
            constructor(arg0, arg1) {
              obj = { style: closure_1.emojiGridRowContainer, children: null };
              obj1 = { gap: 32, children: null };
              GappedList = closure_0(closure_2[12]).GappedList;
              obj1.children = arg0.map(() => {
                /* body not rendered: F140305 */
              });
              obj.children = jsx(GappedList, obj1);
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
        tmp16 = mapped;
        num5 = 8;
        tmp15 = emojiGridContainer;
        tmp14 = View;
        tmp13 = GappedList;
      }
      const obj4 = {};
      const merged = Object.assign(sharedMessageEmojiStyles);
      const merged1 = Object.assign(tmp6);
      cResult[2] = sharedMessageEmojiStyles;
      cResult[3] = tmp6;
      cResult[4] = obj4;
      tmp7 = obj4;
    }
  : (numberToShow) => {
      let arr4;
      let doNotDisplayEmojiIds;
      let expressionSourceGuild;
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
      const obj2 = doNotDisplayEmojiIds(9948);
      const merged = Object.assign(obj2.useSharedMessageEmojiStyles());
      const merged1 = Object.assign(closure_5());
      let emojis;
      const tmp = doNotDisplayEmojiIds;
      if (expressionSourceGuild != null) {
        emojis = expressionSourceGuild.emojis;
      }
      if (emojis == null) {
        emojis = [];
      }
      const substr = emojis.slice(0, num + 1);
      const found = substr.filter((id) => !doNotDisplayEmojiIds.includes(id.id));
      const substr1 = found.slice(0, num);
      ({
        gap: 8,
        children: arr4.map((arr, index) => {
          obj = { style: obj.emojiGridRowContainer, children: null };
          ({
            gap: 32,
            children: arr.map((guildEmoji) => {
              obj = { guildEmoji };
              return closure_1_4(closure_1_6, obj, guildEmoji.id);
            }),
          });
          const GappedList = LayoutUtils.GappedList;
          return (
            <View key={index} style={obj.emojiGridRowContainer}>
              {null}
            </View>
          );
        }),
      });
      arr4 = obj(9964)(substr1, num2);
      let GappedList = tmp(9966).GappedList;
      return <View style={obj.emojiGridContainer}>{null}</View>;
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/messages/native/emoji/EmojiGrid.tsx");

export const EmojiGrid = tmp3;
