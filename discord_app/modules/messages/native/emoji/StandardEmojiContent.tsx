// === Module 9947: StandardEmojiContent ===

// Module 9947 (StandardEmojiContent)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4529 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4533 */;
import Text_Text from "Text/Text" /* 4892 */;
import FastImageDefault from "FastImage" /* 5981 */;
import useSharedMessageEmojiStyles from "useSharedMessageEmojiStyles" /* 9948 */;
import EmojiActionCreators from "EmojiActionCreators" /* 9952 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4705 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, favoriteEmojiResult, surrogate, tmp, unfavoriteEmojiResult;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let obj = { emojiSurrogate: { lineHeight: 48, fontSize: 40, margin: 8 }, ctaContainer: obj2 };
obj2 = { paddingTop: nativeDefault.space.PX_4 };
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((surrogate) => {
  let obj6;
  const obj = react2;
  const cResult = obj.c(13);
  surrogate = surrogate.surrogate;
  const tmp4 = closure_9();
  const obj2 = useSharedMessageEmojiStyles;
  const sharedMessageEmojiStyles = obj2.useSharedMessageEmojiStyles();
  if (cResult[0] === tmp4) {
    let tmp6;
    let tmp9;
    let tmp14;
    if (cResult[1] === sharedMessageEmojiStyles) {
      tmp6 = cResult[2];
    }
    if (cResult[3] !== surrogate) {
      const obj4 = EmojiUtilsDefault;
      const uRL = obj4.getURL(surrogate);
      cResult[3] = surrogate;
      cResult[4] = uRL;
      tmp9 = uRL;
    } else {
      tmp9 = cResult[4];
    }
    if (cResult[5] === tmp6.emojiIcon) {
      if (cResult[6] === tmp6.emojiSurrogate) {
        if (cResult[7] === surrogate) {
          let tmp12;
          if (cResult[8] === tmp9) {
            tmp12 = cResult[9];
          }
          if (cResult[10] === tmp6.emojiWrapper) {
            let tmp17;
            if (cResult[11] === tmp12) {
              tmp17 = cResult[12];
            }
            return tmp17;
          }
          const obj3 = { style: tmp6.emojiWrapper, children: tmp12 };
          const tmp20 = metroRequire(View, obj3);
          cResult[10] = tmp6.emojiWrapper;
          cResult[11] = tmp12;
          cResult[12] = tmp20;
          tmp17 = tmp20;
        }
      }
    }
    if ("" !== tmp9) {
      const obj5 = { style: tmp6.emojiIcon, resizeMode: "contain", source: obj6 };
      obj6 = { uri: tmp9 };
      tmp14 = metroRequire(FastImageDefault, obj5);
    } else {
      const obj7 = { style: tmp6.emojiSurrogate, variant: "text-md/medium", children: surrogate };
      tmp14 = metroRequire(Text_Text.Text, obj7);
    }
    cResult[5] = tmp6.emojiIcon;
    cResult[6] = tmp6.emojiSurrogate;
    cResult[7] = surrogate;
    cResult[8] = tmp9;
    cResult[9] = tmp14;
    tmp12 = tmp14;
  }
  const obj8 = {};
  const merged = Object.assign(tmp4);
  const merged1 = Object.assign(sharedMessageEmojiStyles);
  cResult[0] = tmp4;
  cResult[1] = sharedMessageEmojiStyles;
  cResult[2] = obj8;
  tmp6 = obj8;
}) : ((surrogate) => {
  let obj6;
  let tmp7Result;
  surrogate = surrogate.surrogate;
  const obj = {};
  const merged = Object.assign(closure_9());
  const obj2 = useSharedMessageEmojiStyles;
  const merged1 = Object.assign(obj2.useSharedMessageEmojiStyles());
  const obj3 = EmojiUtilsDefault;
  const uRL = obj3.getURL(surrogate);
  const obj4 = { style: obj.emojiWrapper, children: tmp7Result };
  if ("" !== uRL) {
    const obj5 = { style: obj.emojiIcon, resizeMode: "contain", source: obj6 };
    obj6 = { uri: uRL };
    tmp7Result = metroRequire(FastImageDefault, obj5);
  } else {
    const obj7 = { style: obj.emojiSurrogate, variant: "text-md/medium", children: surrogate };
    tmp7Result = metroRequire(Text_Text.Text, obj7);
  }
  return metroRequire(View, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let emojiNode;
  let intl;
  let isFavoriteEmoji;
  let items;
  let items1;
  let nonce;
  let obj = require("react");
  const cResult = obj.c(38);
  ({ emojiNode, nonce } = arg0);
  const tmp4 = closure_9();
  const obj2 = require("useSharedMessageEmojiStyles");
  const sharedMessageEmojiStyles = obj2.useSharedMessageEmojiStyles();
  if (cResult[0] === tmp4) {
    let tmp6;
    let tmp10;
    let tmp13;
    let tmp15;
    let tmp21;
    let tmp25;
    let tmp28;
    if (cResult[1] === sharedMessageEmojiStyles) {
      tmp6 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const guildId = SelectedGuildStore.getGuildId();
      cResult[3] = guildId;
      tmp10 = guildId;
    } else {
      tmp10 = cResult[3];
    }
    if (cResult[4] !== nonce) {
      const obj3 = { currentGuildId: tmp10, nonce };
      cResult[4] = nonce;
      cResult[5] = obj3;
      tmp13 = obj3;
    } else {
      tmp13 = cResult[5];
    }
    const tmpResult = require("useTrackOpenPopout");
    const trackOpenPopout = tmpResult.useTrackOpenPopout(tmp13);
    if (cResult[6] !== emojiNode.surrogate) {
      const obj6 = isFavoriteEmoji(4529);
      const result = obj6.convertSurrogateToBase(emojiNode.surrogate);
      cResult[6] = emojiNode.surrogate;
      cResult[7] = result;
      tmp15 = result;
    } else {
      tmp15 = cResult[7];
    }
    _require = tmp15;
    const tmpResult2 = require("EmojiPickerUtils");
    isFavoriteEmoji = tmpResult2.useIsFavoriteEmoji(tmp10, tmp15);
    const tmp20 = isFavoriteEmoji(9950)(emojiNode.content);
    if (cResult[8] !== emojiNode.surrogate) {
      const obj4 = { surrogate: emojiNode.surrogate };
      const tmp24 = closure_6(closure_10, obj4);
      cResult[8] = emojiNode.surrogate;
      cResult[9] = tmp24;
      tmp21 = tmp24;
    } else {
      tmp21 = cResult[9];
    }
    if (cResult[10] !== tmp20) {
      const obj5 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: tmp20 };
      const tmp27 = closure_6(require("Text/Text").Text, obj5);
      cResult[10] = tmp20;
      cResult[11] = tmp27;
      tmp25 = tmp27;
    } else {
      tmp25 = cResult[11];
    }
    const _Symbol2 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const obj7 = { variant: "text-sm/medium", children: intl.string(require("intl").t.sXdH8c) };
      const Text = tmp(4892).Text;
      intl = tmp(1126).intl;
      const tmp30 = closure_6(Text, obj7);
      cResult[12] = tmp30;
      tmp28 = tmp30;
    } else {
      tmp28 = cResult[12];
    }
    if (cResult[13] === tmp6.emojiDescriptionWrapper) {
      let tmp31;
      if (cResult[14] === tmp25) {
        tmp31 = cResult[15];
      }
      if (cResult[16] === tmp6.emojiContainer) {
        if (cResult[17] === tmp31) {
          let tmp35;
          let tmp40;
          let tmp43;
          if (cResult[18] === tmp21) {
            tmp35 = cResult[19];
          }
          if (cResult[20] !== tmp6.divider) {
            const obj8 = { style: tmp6.divider };
            const tmp42 = closure_6(require("Form").FormDivider, obj8);
            cResult[20] = tmp6.divider;
            class N {
              constructor() {
                obj = closure_0(closure_2[18]);
                if (closure_1) {
                  tmp3 = closure_0;
                  unfavoriteEmojiResult = obj.unfavoriteEmoji(closure_0);
                } else {
                  tmp = closure_0;
                  favoriteEmojiResult = obj.favoriteEmoji(closure_0);
                }
                return;
              }
            }
            cResult[21] = tmp42;
            tmp40 = tmp42;
          } else {
            tmp40 = cResult[21];
          }
          if (cResult[22] !== isFavoriteEmoji) {
            let stringResult;
            const intl2 = tmp(1126).intl;
            const string = intl2.string;
            const t = tmp(1126).t;
            if (isFavoriteEmoji) {
              stringResult = string(t.Ay49KA);
            } else {
              stringResult = string(t.nNsr67);
            }
            cResult[22] = isFavoriteEmoji;
            class N {
              constructor() {
                obj = closure_0(closure_2[18]);
                if (closure_1) {
                  tmp3 = closure_0;
                  unfavoriteEmojiResult = obj.unfavoriteEmoji(closure_0);
                } else {
                  tmp = closure_0;
                  favoriteEmojiResult = obj.favoriteEmoji(closure_0);
                }
                return;
              }
            }
            cResult[23] = stringResult;
            tmp43 = stringResult;
          } else {
            tmp43 = cResult[23];
          }
          let str2 = "primary";
          if (isFavoriteEmoji) {
            str2 = "tertiary";
          }
          if (cResult[24] === tmp15) {
            let tmp45;
            if (cResult[25] === isFavoriteEmoji) {
              tmp45 = cResult[26];
            }
            if (cResult[27] === tmp43) {
              if (cResult[28] === str2) {
                let tmp46;
                if (cResult[29] === tmp45) {
                  tmp46 = cResult[30];
                }
                if (cResult[31] === tmp6.ctaContainer) {
                  let tmp49;
                  if (cResult[32] === tmp46) {
                    tmp49 = cResult[33];
                  }
                  if (cResult[34] === tmp35) {
                    if (cResult[35] === tmp40) {
                      let tmp53;
                      if (cResult[36] === tmp49) {
                        tmp53 = cResult[37];
                      }
                      return tmp53;
                    }
                  }
                  const obj9 = { children: items };
                  items = [, , ];
                  class N {
                    constructor() {
                      obj = closure_0(closure_2[18]);
                      if (closure_1) {
                        tmp3 = closure_0;
                        unfavoriteEmojiResult = obj.unfavoriteEmoji(closure_0);
                      } else {
                        tmp = closure_0;
                        favoriteEmojiResult = obj.favoriteEmoji(closure_0);
                      }
                      return;
                    }
                  }
                  items[1] = tmp40;
                  items[2] = tmp49;
                  const tmp56 = closure_7(closure_8, obj9);
                  cResult[34] = tmp35;
                  cResult[35] = tmp40;
                  cResult[36] = tmp49;
                  cResult[37] = tmp56;
                  tmp53 = tmp56;
                }
                const obj10 = { style: tmp6.ctaContainer, children: null };
                class N {
                  constructor() {
                    obj = closure_0(closure_2[18]);
                    if (closure_1) {
                      tmp3 = closure_0;
                      unfavoriteEmojiResult = obj.unfavoriteEmoji(closure_0);
                    } else {
                      tmp = closure_0;
                      favoriteEmojiResult = obj.favoriteEmoji(closure_0);
                    }
                    return;
                  }
                }
                const tmp52 = closure_6(View, obj10);
                cResult[31] = tmp6.ctaContainer;
                cResult[32] = tmp46;
                cResult[33] = tmp52;
                tmp49 = tmp52;
              }
            }
            const obj11 = { text: tmp43, variant: str2, onPress: null };
            class N {
              constructor() {
                obj = closure_0(closure_2[18]);
                if (closure_1) {
                  tmp3 = closure_0;
                  unfavoriteEmojiResult = obj.unfavoriteEmoji(closure_0);
                } else {
                  tmp = closure_0;
                  favoriteEmojiResult = obj.favoriteEmoji(closure_0);
                }
                return;
              }
            }
            const tmp48 = closure_6(require("components/Button/Button").Button, obj11);
            cResult[27] = tmp43;
            cResult[28] = str2;
            cResult[29] = tmp45;
            cResult[30] = tmp48;
            tmp46 = tmp48;
          }
          class N {
            constructor() {
              obj = closure_0(closure_2[18]);
              if (closure_1) {
                tmp3 = closure_0;
                unfavoriteEmojiResult = obj.unfavoriteEmoji(closure_0);
              } else {
                tmp = closure_0;
                favoriteEmojiResult = obj.favoriteEmoji(closure_0);
              }
              return;
            }
          }
          cResult[24] = tmp15;
          cResult[25] = isFavoriteEmoji;
          cResult[26] = N;
          tmp45 = N;
        }
      }
      const obj12 = { style: tmp6.emojiContainer, children: tmp38 };
      tmp38[0] = tmp21;
      tmp38[1] = tmp31;
      const tmp39 = closure_7(View, obj12);
      cResult[16] = tmp6.emojiContainer;
      cResult[17] = tmp31;
      cResult[18] = tmp21;
      cResult[19] = tmp39;
      tmp35 = tmp39;
    }
    const obj13 = { style: tmp6.emojiDescriptionWrapper, children: items1 };
    items1 = [tmp25, tmp28];
    const tmp34 = closure_7(View, obj13);
    cResult[13] = tmp6.emojiDescriptionWrapper;
    cResult[14] = tmp25;
    cResult[15] = tmp34;
    tmp31 = tmp34;
  }
  const obj14 = {};
  const merged = Object.assign(tmp4);
  const merged1 = Object.assign(sharedMessageEmojiStyles);
  cResult[0] = tmp4;
  cResult[1] = sharedMessageEmojiStyles;
  cResult[2] = obj14;
  tmp6 = obj14;
}) : ((emojiNode) => {
  let Button;
  let intl;
  let items1;
  let items2;
  let obj11;
  let str;
  let stringResult;
  emojiNode = emojiNode.emojiNode;
  let isFavoriteEmoji;
  let obj = {};
  const nonce = emojiNode.nonce;
  const merged = Object.assign(closure_9());
  const obj2 = emojiNode(isFavoriteEmoji[8]);
  const merged1 = Object.assign(obj2.useSharedMessageEmojiStyles());
  const guildId = SelectedGuildStore.getGuildId();
  const obj3 = emojiNode(isFavoriteEmoji[12]);
  const trackOpenPopout = obj3.useTrackOpenPopout({ currentGuildId: guildId, nonce });
  const items = [emojiNode.surrogate];
  const memo = react.useMemo(() => {
    const obj = UnicodeEmojisDefault;
    return obj.convertSurrogateToBase(emojiNode.surrogate);
  }, items);
  const obj4 = emojiNode(isFavoriteEmoji[14]);
  isFavoriteEmoji = obj4.useIsFavoriteEmoji(guildId, memo);
  const obj5 = { style: obj.emojiContainer, children: items1 };
  items1 = [, ];
  const obj6 = { surrogate: emojiNode.surrogate };
  const tmp7 = memo(isFavoriteEmoji[15])(emojiNode.content);
  items1[0] = closure_6(closure_10, obj6);
  const obj7 = { style: obj.emojiDescriptionWrapper, children: items2 };
  items2 = [closure_6(emojiNode(isFavoriteEmoji[11]).Text, { variant: "text-md/bold", color: "mobile-text-heading-primary", children: tmp7 }), ];
  const obj8 = { variant: "text-sm/medium", children: intl.string(emojiNode(isFavoriteEmoji[16]).t.sXdH8c) };
  const Text = emojiNode(isFavoriteEmoji[11]).Text;
  intl = emojiNode(isFavoriteEmoji[16]).intl;
  items2[1] = closure_6(Text, obj8);
  items1[1] = closure_7(View, obj7);
  const items3 = [closure_7(View, obj5), , ];
  const obj9 = { style: obj.divider };
  items3[1] = closure_6(emojiNode(isFavoriteEmoji[17]).FormDivider, obj9);
  const obj10 = { style: obj.ctaContainer, children: closure_6(Button, obj11) };
  Button = emojiNode(isFavoriteEmoji[19]).Button;
  const intl2 = emojiNode(isFavoriteEmoji[16]).intl;
  const string = intl2.string;
  const t = emojiNode(isFavoriteEmoji[16]).t;
  if (isFavoriteEmoji) {
    stringResult = string(t.Ay49KA);
  } else {
    stringResult = string(t.nNsr67);
  }
  obj11 = {
    text: stringResult,
    variant: str,
    onPress() {
      const obj = EmojiActionCreators;
      if (isFavoriteEmoji) {
        obj.unfavoriteEmoji(memo);
      } else {
        obj.favoriteEmoji(memo);
      }
    }
  };
  str = "primary";
  if (isFavoriteEmoji) {
    str = "tertiary";
  }
  const obj12 = { children: items3 };
  items3[2] = closure_6(View, obj10);
  return closure_7(closure_8, obj12);
});
let result = size.fileFinishedImporting("modules/messages/native/emoji/StandardEmojiContent.tsx");

export default tmp3;