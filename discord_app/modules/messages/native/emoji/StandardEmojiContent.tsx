// discord_app/modules/messages/native/emoji/StandardEmojiContent.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import UnicodeEmojisDefault from "../../../emojis/UnicodeEmojis.tsx";
import EmojiUtilsDefault from "../../../../utils/EmojiUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import useSharedMessageEmojiStyles from "useSharedMessageEmojiStyles.tsx";
import EmojiActionCreators from "../../../../actions/EmojiActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import SelectedGuildStore from "../../../../stores/SelectedGuildStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  emojiSurrogate: { lineHeight: 48, fontSize: 40, margin: 8 },
  ctaContainer: { paddingTop: nativeDefault.space.PX_4 },
};
let closure_9 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (surrogate) => {
      emojiSurrogate = dependencyMap;
      const cResult = c.c(13);
      surrogate = surrogate.surrogate;
      const tmp3 = closure_9();
      const sharedMessageEmojiStyles = useSharedMessageEmojiStyles.useSharedMessageEmojiStyles();
      if (cResult[0] === tmp3) {
        if (cResult[1] === sharedMessageEmojiStyles) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] !== surrogate) {
          const uRL = EmojiUtilsDefault.getURL(surrogate);
          cResult[3] = surrogate;
          cResult[4] = uRL;
          let tmp8 = uRL;
        } else {
          tmp8 = cResult[4];
        }
        if (cResult[5] === tmp5.emojiIcon) {
          if (cResult[6] === tmp5.emojiSurrogate) {
            if (cResult[7] === surrogate) {
              if (cResult[8] === tmp8) {
                if (cResult[10] === tmp5.emojiWrapper) {
                  if (cResult[11] === tmp11) {
                    let tmp17 = cResult[12];
                  }
                  return tmp17;
                }
                const obj3 = { style: tmp5.emojiWrapper, children: cResult[9] };
                const tmp20 = timestampProducer(View, obj3);
                cResult[10] = tmp5.emojiWrapper;
                cResult[11] = cResult[9];
                cResult[12] = tmp20;
                tmp17 = tmp20;
              }
            }
          }
        }
        if ("" !== tmp8) {
          const obj5 = { style: tmp5.emojiIcon, resizeMode: "contain", source: null };
          const obj6 = { uri: tmp8 };
          obj5.source = obj6;
          let tmp13 = timestampProducer(FastImageDefault, obj5);
        } else {
          const obj7 = { style: tmp5.emojiSurrogate, variant: "text-md/medium", children: surrogate };
          tmp13 = timestampProducer(Text_Text.Text, obj7);
        }
        ({ emojiIcon: tmp2[5], emojiSurrogate } = tmp5);
        cResult[6] = emojiSurrogate;
        cResult[7] = surrogate;
        cResult[8] = tmp8;
        cResult[9] = tmp13;
      }
      const obj8 = {};
      const merged = Object.assign(tmp3);
      const merged1 = Object.assign(sharedMessageEmojiStyles);
      cResult[0] = tmp3;
      cResult[1] = sharedMessageEmojiStyles;
      cResult[2] = obj8;
      tmp5 = obj8;
    }
  : (surrogate) => {
      surrogate = surrogate.surrogate;
      const obj = {};
      const merged = Object.assign(closure_9());
      const merged1 = Object.assign(useSharedMessageEmojiStyles.useSharedMessageEmojiStyles());
      const uRL = EmojiUtilsDefault.getURL(surrogate);
      const obj4 = { style: obj.emojiWrapper, children: null };
      if ("" !== uRL) {
        const obj5 = { style: obj.emojiIcon, resizeMode: "contain", source: null };
        const obj6 = { uri: uRL };
        obj5.source = obj6;
        let tmp7Result = timestampProducer(FastImageDefault, obj5);
      } else {
        const obj7 = { style: obj.emojiSurrogate, variant: "text-md/medium", children: surrogate };
        tmp7Result = timestampProducer(Text_Text.Text, obj7);
      }
      obj4.children = tmp7Result;
      return timestampProducer(View, obj4);
    };
ReactCompilerGating = fn(558);
let obj3 = { paddingTop: nativeDefault.space.PX_4 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/emoji/StandardEmojiContent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = require("c").c(38);
      ({ emojiNode, nonce } = arg0);
      const tmp4 = closure_9();
      let obj = require("c");
      const sharedMessageEmojiStyles = require("useSharedMessageEmojiStyles").useSharedMessageEmojiStyles();
      if (cResult[0] === tmp4) {
        if (cResult[1] === sharedMessageEmojiStyles) {
          let tmp6 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const guildId = SelectedGuildStore.getGuildId();
          cResult[3] = guildId;
          let tmp10 = guildId;
        } else {
          tmp10 = cResult[3];
        }
        if (cResult[4] !== nonce) {
          const obj3 = { currentGuildId: tmp10, nonce };
          cResult[4] = nonce;
          cResult[5] = obj3;
          let tmp13 = obj3;
        } else {
          tmp13 = cResult[5];
        }
        const trackOpenPopout = tmp(9936).useTrackOpenPopout(tmp13);
        if (cResult[6] !== emojiNode.surrogate) {
          const result = isFavoriteEmoji(4523).convertSurrogateToBase(emojiNode.surrogate);
          cResult[6] = emojiNode.surrogate;
          cResult[7] = result;
          let tmp15 = result;
          const obj6 = isFavoriteEmoji(4523);
        } else {
          tmp15 = cResult[7];
        }
        _require = tmp15;
        const tmpResult = tmp(9936);
        isFavoriteEmoji = tmp(9870).useIsFavoriteEmoji(tmp10, tmp15);
        const tmp20 = isFavoriteEmoji(9937)(emojiNode.content);
        if (cResult[8] !== emojiNode.surrogate) {
          const obj4 = { surrogate: emojiNode.surrogate };
          const tmp24 = closure_6(closure_10, obj4);
          cResult[8] = emojiNode.surrogate;
          cResult[9] = tmp24;
          let tmp21 = tmp24;
        } else {
          tmp21 = cResult[9];
        }
        if (cResult[10] !== tmp20) {
          const obj5 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: tmp20 };
          const tmp27 = closure_6(tmp(4886).Text, obj5);
          cResult[10] = tmp20;
          cResult[11] = tmp27;
          let tmp25 = tmp27;
        } else {
          tmp25 = cResult[11];
        }
        const _Symbol2 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const obj7 = { variant: "text-sm/medium", children: null };
          const intl = tmp(1126).intl;
          obj7.children = intl.string(tmp(1126).t.sXdH8c);
          const tmp30 = closure_6(tmp(4886).Text, obj7);
          cResult[12] = tmp30;
          let tmp28 = tmp30;
        } else {
          tmp28 = cResult[12];
        }
        if (cResult[13] === tmp6.emojiDescriptionWrapper) {
          if (cResult[14] === tmp25) {
            let tmp31 = cResult[15];
          }
          if (cResult[16] === tmp6.emojiContainer) {
            if (cResult[17] === tmp31) {
              if (cResult[18] === tmp21) {
                let tmp35 = cResult[19];
              }
              if (cResult[20] !== tmp6.divider) {
                const obj8 = { style: tmp6.divider };
                const tmp42 = closure_6(tmp(8895).FormDivider, obj8);
                cResult[20] = tmp6.divider;
                cResult[21] = tmp42;
                let tmp40 = tmp42;
              } else {
                tmp40 = cResult[21];
              }
              if (cResult[22] !== isFavoriteEmoji) {
                const intl2 = tmp(1126).intl;
                const string = intl2.string;
                let Ay49KA = tmp(1126).t;
                if (isFavoriteEmoji) {
                  Ay49KA = Ay49KA.Ay49KA;
                  let stringResult = string(Ay49KA);
                } else {
                  stringResult = string(Ay49KA.nNsr67);
                }
                cResult[22] = isFavoriteEmoji;
                cResult[23] = stringResult;
              } else {
                let str2 = "primary";
                if (isFavoriteEmoji) {
                  str2 = "tertiary";
                }
                if (cResult[24] === tmp15) {
                  if (cResult[25] === isFavoriteEmoji) {
                    let tmp46 = cResult[26];
                  }
                  if (cResult[27] === tmp43) {
                    if (cResult[28] === str2) {
                      if (cResult[29] === tmp46) {
                        let tmp47 = cResult[30];
                      }
                      if (cResult[31] === tmp6.ctaContainer) {
                        if (cResult[32] === tmp47) {
                          let tmp50 = cResult[33];
                        }
                        if (cResult[34] === tmp35) {
                          if (cResult[35] === tmp40) {
                            if (cResult[36] === tmp50) {
                              let tmp55 = cResult[37];
                            }
                            return tmp55;
                          }
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
                        const items = [tmp35, tmp40, tmp50];
                        tmp58[0] = items;
                        const tmp59 = closure_7(closure_8, tmp58);
                        cResult[34] = tmp35;
                        cResult[35] = tmp40;
                        cResult[36] = tmp50;
                        cResult[37] = tmp59;
                        tmp55 = tmp59;
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
                      tmp53[0] = tmp6.ctaContainer;
                      tmp53[1] = tmp47;
                      const tmp54 = closure_6(View, tmp53);
                      cResult[31] = tmp6.ctaContainer;
                      cResult[32] = tmp47;
                      cResult[33] = tmp54;
                      tmp50 = tmp54;
                    }
                  }
                  const obj9 = { text: null, variant: null, onPress: null };
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
                  obj9.variant = str2;
                  obj9.onPress = tmp46;
                  const tmp49 = closure_6(tmp(5594).Button, obj9);
                  cResult[27] = tmp43;
                  cResult[28] = str2;
                  cResult[29] = tmp46;
                  cResult[30] = tmp49;
                  tmp47 = tmp49;
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
                tmp46 = N;
              }
            }
          }
          tmp38[0] = tmp6.emojiContainer;
          const items1 = [tmp21, tmp31];
          tmp38[1] = items1;
          const tmp39 = closure_7(View, tmp38);
          cResult[16] = tmp6.emojiContainer;
          cResult[17] = tmp31;
          cResult[18] = tmp21;
          cResult[19] = tmp39;
          tmp35 = tmp39;
        }
        const obj10 = { style: tmp6.emojiDescriptionWrapper, children: null };
        const items2 = [tmp25, tmp28];
        obj10.children = items2;
        const tmp34 = closure_7(View, obj10);
        cResult[13] = tmp6.emojiDescriptionWrapper;
        cResult[14] = tmp25;
        cResult[15] = tmp34;
        tmp31 = tmp34;
        const tmpResult2 = tmp(9870);
      }
      const obj11 = {};
      const merged = Object.assign(tmp4);
      const merged1 = Object.assign(sharedMessageEmojiStyles);
      cResult[0] = tmp4;
      cResult[1] = sharedMessageEmojiStyles;
      cResult[2] = obj11;
      tmp6 = obj11;
      const obj2 = require("useSharedMessageEmojiStyles");
    }
  : (nonce) => {
      const emojiNode = nonce.emojiNode;
      let isFavoriteEmoji;
      let obj = {};
      const merged = Object.assign(closure_9());
      const merged1 = Object.assign(emojiNode(isFavoriteEmoji[8]).useSharedMessageEmojiStyles());
      const guildId = SelectedGuildStore.getGuildId();
      const obj2 = emojiNode(isFavoriteEmoji[8]);
      const trackOpenPopout = emojiNode(isFavoriteEmoji[12]).useTrackOpenPopout({
        currentGuildId: guildId,
        nonce: nonce.nonce,
      });
      const items = [emojiNode.surrogate];
      const memo = noop.useMemo(() => UnicodeEmojisDefault.convertSurrogateToBase(emojiNode.surrogate), items);
      const obj3 = emojiNode(isFavoriteEmoji[12]);
      isFavoriteEmoji = emojiNode(isFavoriteEmoji[14]).useIsFavoriteEmoji(guildId, memo);
      const obj5 = { style: obj.emojiContainer, children: null };
      const obj4 = emojiNode(isFavoriteEmoji[14]);
      const obj6 = { surrogate: emojiNode.surrogate };
      const items1 = [closure_6(closure_10, obj6)];
      const obj7 = { style: obj.emojiDescriptionWrapper, children: null };
      const items2 = [
        closure_6(emojiNode(isFavoriteEmoji[11]).Text, {
          variant: "text-md/bold",
          color: "mobile-text-heading-primary",
          children: memo(isFavoriteEmoji[15])(emojiNode.content),
        }),
      ];
      const obj8 = { variant: "text-sm/medium", children: null };
      const intl = emojiNode(isFavoriteEmoji[16]).intl;
      obj8.children = intl.string(emojiNode(isFavoriteEmoji[16]).t.sXdH8c);
      items2[1] = closure_6(emojiNode(isFavoriteEmoji[11]).Text, obj8);
      obj7.children = items2;
      items1[1] = closure_7(View, obj7);
      obj5.children = items1;
      const items3 = [
        closure_7(View, obj5),
        closure_6(emojiNode(isFavoriteEmoji[17]).FormDivider, { style: obj.divider }),
      ];
      const obj10 = { style: obj.ctaContainer, children: null };
      const intl2 = emojiNode(isFavoriteEmoji[16]).intl;
      const string = intl2.string;
      const t = emojiNode(isFavoriteEmoji[16]).t;
      if (isFavoriteEmoji) {
        let stringResult = string(t.Ay49KA);
      } else {
        stringResult = string(t.nNsr67);
      }
      const obj11 = { text: stringResult, variant: null, onPress: null };
      let str = "primary";
      if (isFavoriteEmoji) {
        str = "tertiary";
      }
      const obj12 = { children: null };
      obj11.variant = str;
      obj11.onPress = function onPress() {
        const obj = EmojiActionCreators;
        if (isFavoriteEmoji) {
          obj.unfavoriteEmoji(memo);
        } else {
          obj.favoriteEmoji(memo);
        }
      };
      obj10.children = closure_6(emojiNode(isFavoriteEmoji[19]).Button, obj11);
      items3[2] = closure_6(View, obj10);
      obj12.children = items3;
      return closure_7(closure_8, obj12);
    };
