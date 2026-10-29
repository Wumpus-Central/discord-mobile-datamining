// discord_app/modules/checkpoint/native/components/share/CheckpointShareCardStats.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import getDevicePixelRatioDefault from "../../../../../utils/getDevicePixelRatio.native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import UnknownGameIcon2 from "../../../../../design/components/Icon/native/redesign/generated/UnknownGameIcon.tsx";
import ChatIcon from "../../../../../design/components/Icon/native/redesign/generated/ChatIcon.tsx";
import ReactionIcon from "../../../../../design/components/Icon/native/redesign/generated/ReactionIcon.tsx";
import GameControllerIcon from "../../../../../design/components/Icon/native/redesign/generated/GameControllerIcon.tsx";
import ServerIcon from "../../../../../design/components/Icon/native/redesign/generated/ServerIcon.tsx";
import MicrophoneIcon from "../../../../../design/components/Icon/native/redesign/generated/MicrophoneIcon.tsx";
import CheckpointShareCardContext from "CheckpointShareCardContext.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const AvatarUtilsDefault = getEmojiURL(1415);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5005);
let obj2 = {
  statRow: { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_4 },
  statText: null,
  statImage: null,
  guildAcronym: null,
  unicodeEmoji: null,
};
let obj3 = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_4 };
obj2.statText = { flexShrink: 1, color: nativeDefault.colors.BLACK };
let obj4 = { flexShrink: 1, color: nativeDefault.colors.BLACK };
obj2.statImage = {
  borderWidth: 1,
  borderColor: nativeDefault.colors.BLACK,
  alignItems: "center",
  justifyContent: "center",
};
let obj5 = { borderWidth: 1, borderColor: nativeDefault.colors.BLACK, alignItems: "center", justifyContent: "center" };
obj2.guildAcronym = { backgroundColor: nativeDefault.unsafe_rawColors.OPACITY_BLACK_20 };
obj2.unicodeEmoji = { fontSize: 9, lineHeight: 11 };
let closure_7 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function StatIcon(arg0) {
      const cResult = c.c(5);
      ({ Icon, size } = arg0);
      if (cResult[0] !== size) {
        const size1 = { width: size, height: size };
        cResult[0] = size;
        cResult[1] = size1;
        let tmp3 = size1;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] === Icon) {
        if (cResult[3] === tmp3) {
          let tmp4 = cResult[4];
        }
        return tmp4;
      }
      const tmp5 = hasOwnProperty(Icon, { size: "custom", color: nativeDefault.colors.BLACK, style: tmp3 });
      cResult[2] = Icon;
      cResult[3] = tmp3;
      cResult[4] = tmp5;
      tmp4 = tmp5;
      const obj2 = { size: "custom", color: nativeDefault.colors.BLACK, style: tmp3 };
    }
  : function StatIcon(size) {
      size = size.size;
      return hasOwnProperty(size.Icon, {
        size: "custom",
        color: nativeDefault.colors.BLACK,
        style: { width: size, height: size },
      });
    };
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function StatImage(arg0) {
      let UnknownGameIcon = dependencyMap;
      const cResult = c.c(12);
      ({ uri, size } = arg0);
      const tmp3 = closure_7();
      if (null == uri) {
        if (cResult[0] !== size) {
          const obj2 = { Icon: null, size: null };
          UnknownGameIcon = UnknownGameIcon2.UnknownGameIcon;
          obj2.Icon = UnknownGameIcon;
          obj2.size = size;
          const tmp14 = hasOwnProperty(closure_8, obj2);
          cResult[0] = size;
          cResult[1] = tmp14;
        }
      } else {
        if (cResult[2] !== uri) {
          const obj3 = { uri };
          cResult[2] = uri;
          cResult[3] = obj3;
          let tmp4 = obj3;
        } else {
          tmp4 = cResult[3];
        }
        if (cResult[4] !== size) {
          const size1 = { width: size, height: size };
          cResult[4] = size;
          cResult[5] = size1;
          let tmp5 = size1;
        } else {
          tmp5 = cResult[5];
        }
        if (cResult[6] === tmp3.statImage) {
          if (cResult[7] === tmp5) {
            let tmp6 = cResult[8];
          }
          if (cResult[9] === tmp4) {
            if (cResult[10] === tmp6) {
              let tmp7 = cResult[11];
            }
            return tmp7;
          }
          const obj4 = { source: tmp4, style: tmp6 };
          const tmp10 = hasOwnProperty(FastImageDefault, obj4);
          cResult[9] = tmp4;
          cResult[10] = tmp6;
          cResult[11] = tmp10;
          tmp7 = tmp10;
        }
        const items = [tmp3.statImage, tmp5];
        cResult[6] = tmp3.statImage;
        cResult[7] = tmp5;
        cResult[8] = items;
        tmp6 = items;
      }
    }
  : function StatImage(arg0) {
      ({ uri, size } = arg0);
      if (null == uri) {
        const obj2 = { Icon: UnknownGameIcon2.UnknownGameIcon, size };
        let tmp5 = hasOwnProperty(closure_8, obj2);
      } else {
        const obj = { source: null, style: null };
        const obj3 = { uri };
        obj.source = obj3;
        const items = [tmp.statImage];
        const size1 = { width: size, height: size };
        items[1] = size1;
        obj.style = items;
        tmp5 = hasOwnProperty(FastImageDefault, obj);
      }
      return tmp5;
    };
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function StatRow(arg0) {
      const cResult = c.c(14);
      ({ icon, stat, layout, rowStyle } = arg0);
      const tmp4 = closure_7();
      const tertiaryBackgroundColor = noop.useContext(
        CheckpointShareCardContext.CheckpointShareCardColorsContext,
      ).tertiaryBackgroundColor;
      if (null == stat) {
        return null;
      } else {
        if (cResult[0] !== tertiaryBackgroundColor) {
          const obj2 = { backgroundColor: tertiaryBackgroundColor };
          cResult[0] = tertiaryBackgroundColor;
          cResult[1] = obj2;
          let tmp5 = obj2;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] === rowStyle) {
          if (cResult[3] === tmp4.statRow) {
            if (cResult[4] === tmp5) {
              let tmp6 = cResult[5];
            }
            if (cResult[6] === layout.textVariant) {
              if (cResult[7] === stat.text) {
                if (cResult[8] === tmp4.statText) {
                  let tmp7 = cResult[9];
                }
                if (cResult[10] === icon) {
                  if (cResult[11] === tmp6) {
                  }
                }
                const obj3 = { style: tmp6, children: null };
                const items = [icon, tmp7];
                obj3.children = items;
                const tmp13 = timestampProducer(View, obj3);
                cResult[10] = icon;
                cResult[11] = tmp6;
                cResult[12] = tmp7;
                cResult[13] = tmp13;
              }
            }
            const obj4 = {
              variant: layout.textVariant,
              style: tmp4.statText,
              lineClamp: 1,
              allowFontScaling: false,
              children: stat.text,
            };
            const tmp9 = hasOwnProperty(Text_Text.Text, obj4);
            cResult[6] = layout.textVariant;
            cResult[7] = stat.text;
            cResult[8] = tmp4.statText;
            cResult[9] = tmp9;
            tmp7 = tmp9;
          }
        }
        const items1 = [tmp4.statRow, rowStyle, tmp5];
        cResult[2] = rowStyle;
        cResult[3] = tmp4.statRow;
        cResult[4] = tmp5;
        cResult[5] = items1;
        tmp6 = items1;
      }
    }
  : function StatRow(stat) {
      stat = stat.stat;
      ({ icon, layout, rowStyle } = stat);
      const tmp = closure_7();
      let tmp5 = null;
      if (null != stat) {
        const obj = { style: null, children: null };
        const items = [tmp.statRow, rowStyle];
        const obj2 = { backgroundColor: tmp4 };
        items[2] = obj2;
        obj.style = items;
        const items1 = [icon];
        const obj3 = {
          variant: layout.textVariant,
          style: tmp.statText,
          lineClamp: 1,
          allowFontScaling: false,
          children: stat.text,
        };
        items1[1] = hasOwnProperty(Text_Text.Text, obj3);
        obj.children = items1;
        tmp5 = timestampProducer(View, obj);
      }
      return tmp5;
    };
ReactCompilerGating = fn(558);
let obj6 = { backgroundColor: nativeDefault.unsafe_rawColors.OPACITY_BLACK_20 };
let size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardStats.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CheckpointShareCardStats(arg0) {
      const cResult = c.c(77);
      ({ stats, layout, style, rowStyle } = arg0);
      const tmp4 = closure_7();
      const iconSize = layout.iconSize;
      if (cResult[0] === iconSize) {
        if (cResult[1] === stats) {
          if (cResult[2] === tmp4) {
            if (cResult[19] === layout) {
              if (cResult[20] === rowStyle) {
                let tmp35 = cResult[21];
              }
              if (cResult[22] !== iconSize) {
                const obj2 = { Icon: MicrophoneIcon.MicrophoneIcon, size: iconSize };
                const tmp39 = hasOwnProperty(closure_8, obj2);
                cResult[22] = iconSize;
                cResult[23] = tmp39;
                let tmp36 = tmp39;
              } else {
                tmp36 = cResult[23];
              }
              if (cResult[24] === tmp35) {
                if (cResult[25] === stats.voice) {
                  if (cResult[26] === tmp36) {
                    let tmp40 = cResult[27];
                  }
                  if (cResult[28] !== iconSize) {
                    const obj4 = { Icon: ChatIcon.ChatIcon, size: iconSize };
                    const tmp50 = hasOwnProperty(closure_8, obj4);
                    cResult[28] = iconSize;
                    cResult[29] = tmp50;
                    let tmp47 = tmp50;
                  } else {
                    tmp47 = cResult[29];
                  }
                  if (cResult[30] === tmp35) {
                    if (cResult[31] === stats.messages) {
                      if (cResult[32] === tmp47) {
                        let tmp51 = cResult[33];
                      }
                      if (cResult[34] !== iconSize) {
                        const obj6 = { Icon: ServerIcon.ServerIcon, size: iconSize };
                        const tmp61 = hasOwnProperty(closure_8, obj6);
                        cResult[34] = iconSize;
                        cResult[35] = tmp61;
                        let tmp58 = tmp61;
                      } else {
                        tmp58 = cResult[35];
                      }
                      if (cResult[36] === tmp35) {
                        if (cResult[37] === stats.topGuildDaysInteracted) {
                          if (cResult[38] === tmp58) {
                            let tmp62 = cResult[39];
                          }
                          if (cResult[40] === tmp7) {
                            if (cResult[41] === tmp35) {
                              if (cResult[42] === stats.topGuildName) {
                                let tmp69 = cResult[43];
                              }
                              if (cResult[44] !== iconSize) {
                                const obj7 = { Icon: ReactionIcon.ReactionIcon, size: iconSize };
                                const tmp79 = hasOwnProperty(closure_8, obj7);
                                cResult[44] = iconSize;
                                cResult[45] = tmp79;
                                let tmp76 = tmp79;
                              } else {
                                tmp76 = cResult[45];
                              }
                              if (cResult[46] === tmp35) {
                                if (cResult[47] === stats.reactions) {
                                  if (cResult[48] === tmp76) {
                                    let tmp80 = cResult[49];
                                  }
                                  if (cResult[50] === tmp5) {
                                    if (cResult[51] === tmp35) {
                                      if (cResult[52] === stats.topEmojiName) {
                                        let tmp87 = cResult[53];
                                      }
                                      if (cResult[54] !== iconSize) {
                                        const obj8 = { Icon: GameControllerIcon.GameControllerIcon, size: iconSize };
                                        const tmp97 = hasOwnProperty(closure_8, obj8);
                                        cResult[54] = iconSize;
                                        cResult[55] = tmp97;
                                        let tmp94 = tmp97;
                                      } else {
                                        tmp94 = cResult[55];
                                      }
                                      if (cResult[56] === tmp35) {
                                        if (cResult[57] === stats.daysPlayed) {
                                          if (cResult[58] === tmp94) {
                                            let tmp98 = cResult[59];
                                          }
                                          if (cResult[60] === tmp6) {
                                            if (cResult[61] === iconSize) {
                                              let tmp105 = cResult[62];
                                            }
                                            if (cResult[63] === tmp35) {
                                              if (cResult[64] === stats.topGameName) {
                                                if (cResult[65] === tmp105) {
                                                  let tmp109 = cResult[66];
                                                }
                                                if (cResult[67] === style) {
                                                  if (cResult[68] === tmp80) {
                                                    if (cResult[69] === tmp87) {
                                                      if (cResult[70] === tmp98) {
                                                        if (cResult[71] === tmp109) {
                                                          if (cResult[72] === tmp40) {
                                                            if (cResult[73] === tmp51) {
                                                              if (cResult[74] === tmp62) {
                                                                if (cResult[75] === tmp69) {
                                                                  let tmp116 = cResult[76];
                                                                }
                                                                return tmp116;
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                                const obj9 = { style, children: null };
                                                const items = [tmp40, tmp51, tmp62, tmp69, tmp80, tmp87, tmp98, tmp109];
                                                obj9.children = items;
                                                const tmp119 = timestampProducer(View, obj9);
                                                cResult[67] = style;
                                                cResult[68] = tmp80;
                                                cResult[69] = tmp87;
                                                cResult[70] = tmp98;
                                                cResult[71] = tmp109;
                                                cResult[72] = tmp40;
                                                cResult[73] = tmp51;
                                                cResult[74] = tmp62;
                                                cResult[75] = tmp69;
                                                cResult[76] = tmp119;
                                                tmp116 = tmp119;
                                              }
                                            }
                                            const obj10 = { icon: tmp105, stat: stats.topGameName };
                                            const merged = Object.assign(tmp35);
                                            const tmp115 = hasOwnProperty(closure_10, obj10);
                                            cResult[63] = tmp35;
                                            cResult[64] = stats.topGameName;
                                            cResult[65] = tmp105;
                                            cResult[66] = tmp115;
                                            tmp109 = tmp115;
                                          }
                                          const obj11 = { uri: tmp6, size: iconSize };
                                          const tmp108 = hasOwnProperty(closure_9, obj11);
                                          cResult[60] = tmp6;
                                          cResult[61] = iconSize;
                                          cResult[62] = tmp108;
                                          tmp105 = tmp108;
                                        }
                                      }
                                      const obj12 = { icon: tmp94, stat: stats.daysPlayed };
                                      const merged1 = Object.assign(tmp35);
                                      const tmp104 = hasOwnProperty(closure_10, obj12);
                                      cResult[56] = tmp35;
                                      cResult[57] = stats.daysPlayed;
                                      cResult[58] = tmp94;
                                      cResult[59] = tmp104;
                                      tmp98 = tmp104;
                                    }
                                  }
                                  const obj13 = { icon: tmp5, stat: stats.topEmojiName };
                                  const merged2 = Object.assign(tmp35);
                                  const tmp93 = hasOwnProperty(closure_10, obj13);
                                  cResult[50] = tmp5;
                                  cResult[51] = tmp35;
                                  cResult[52] = stats.topEmojiName;
                                  cResult[53] = tmp93;
                                  tmp87 = tmp93;
                                }
                              }
                              const obj14 = { icon: tmp76, stat: stats.reactions };
                              const merged3 = Object.assign(tmp35);
                              const tmp86 = hasOwnProperty(closure_10, obj14);
                              cResult[46] = tmp35;
                              cResult[47] = stats.reactions;
                              cResult[48] = tmp76;
                              cResult[49] = tmp86;
                              tmp80 = tmp86;
                            }
                          }
                          const obj15 = { icon: tmp7, stat: stats.topGuildName };
                          const merged4 = Object.assign(tmp35);
                          const tmp75 = hasOwnProperty(closure_10, obj15);
                          cResult[40] = tmp7;
                          cResult[41] = tmp35;
                          cResult[42] = stats.topGuildName;
                          cResult[43] = tmp75;
                          tmp69 = tmp75;
                        }
                      }
                      const obj16 = { icon: tmp58, stat: stats.topGuildDaysInteracted };
                      const merged5 = Object.assign(tmp35);
                      const tmp68 = hasOwnProperty(closure_10, obj16);
                      cResult[36] = tmp35;
                      cResult[37] = stats.topGuildDaysInteracted;
                      cResult[38] = tmp58;
                      cResult[39] = tmp68;
                      tmp62 = tmp68;
                    }
                  }
                  const obj17 = { icon: tmp47, stat: stats.messages };
                  const merged6 = Object.assign(tmp35);
                  const tmp57 = hasOwnProperty(closure_10, obj17);
                  cResult[30] = tmp35;
                  cResult[31] = stats.messages;
                  cResult[32] = tmp47;
                  cResult[33] = tmp57;
                  tmp51 = tmp57;
                }
              }
              const obj18 = { icon: tmp36, stat: stats.voice };
              const merged7 = Object.assign(tmp35);
              const tmp46 = hasOwnProperty(closure_10, obj18);
              cResult[24] = tmp35;
              cResult[25] = stats.voice;
              cResult[26] = tmp36;
              cResult[27] = tmp46;
              tmp40 = tmp46;
            }
            const obj19 = { layout, rowStyle };
            cResult[19] = layout;
            cResult[20] = rowStyle;
            cResult[21] = obj19;
            tmp35 = obj19;
          }
        }
      }
      let getEmojiURL = importDefault;
      const rounded = Math.round(iconSize * getDevicePixelRatioDefault());
      ({ topGuild, topEmoji, topGame } = stats);
      let guildIcon;
      if (topGuild != null) {
        guildIcon = topGuild.guildIcon;
      }
      let guildIconURL;
      if (null != guildIcon) {
        const emojiURL = AvatarUtilsDefault;
        const obj20 = { id: null, icon: null, size: null };
        ({ guildId: obj3.id, guildIcon: obj3.icon } = topGuild);
        obj20.size = rounded;
        guildIconURL = emojiURL.getGuildIconURL(obj20);
      }
      let applicationImageId;
      if (topGame != null) {
        applicationImageId = topGame.applicationImageId;
      }
      if (null != applicationImageId) {
        const emojiURL1 = AvatarUtilsDefault;
        const obj21 = { id: null, icon: null, size: null };
        ({ applicationId: obj5.id, applicationImageId: obj5.icon } = topGame);
        obj21.size = rounded;
        const applicationIconURL = emojiURL1.getApplicationIconURL(obj21);
      }
      if (null != guildIconURL) {
        const obj22 = { uri: guildIconURL, size: iconSize };
        let tmp16 = hasOwnProperty(closure_9, obj22);
        let tmp15 = hasOwnProperty;
      } else {
        const obj23 = { style: null, children: null };
        const items1 = [, ,];
        ({ statImage: arr[0], guildAcronym: arr[1] } = tmp4);
        const size = { width: iconSize, height: iconSize };
        items1[2] = size;
        obj23.style = items1;
        const obj24 = {
          variant: "text-xxs/normal",
          color: "text-overlay-dark",
          allowFontScaling: false,
          children: stats.topGuildAcronymCharacter,
        };
        obj23.children = hasOwnProperty(Text_Text.Text, obj24);
        tmp15 = hasOwnProperty;
        tmp16 = hasOwnProperty(View, obj23);
      }
      if (null == topEmoji) {
        if (cResult[6] !== iconSize) {
          const obj25 = { Icon: UnknownGameIcon2.UnknownGameIcon, size: iconSize };
          const tmp15Result = tmp15(closure_8, obj25);
          cResult[6] = iconSize;
          cResult[7] = tmp15Result;
        }
      } else {
        if (null != topEmoji.emojiId) {
          const obj26 = { uri: null, size: null };
          const emojiURL2 = AvatarUtilsDefault;
          getEmojiURL = emojiURL2.getEmojiURL;
          const obj27 = { id: null, animated: false, size: null };
          topEmoji = topEmoji.emojiId;
          obj27.id = topEmoji;
          obj27.size = rounded;
          obj26.uri = getEmojiURL(obj27);
          obj26.size = iconSize;
          let tmp15Result4 = tmp15(closure_9, obj26);
        } else {
          if (cResult[8] !== iconSize) {
            const size1 = { width: iconSize, height: iconSize };
            cResult[8] = iconSize;
            cResult[9] = size1;
            let tmp19 = size1;
          } else {
            tmp19 = cResult[9];
          }
          if (cResult[10] === tmp4.statImage) {
            if (cResult[11] === tmp19) {
              let tmp20 = cResult[12];
            }
            if (cResult[13] === tmp4.unicodeEmoji) {
              if (cResult[14] === topEmoji.emojiName) {
                let tmp21 = cResult[15];
              }
              if (cResult[16] === tmp20) {
                if (cResult[17] === tmp21) {
                  tmp15Result4 = cResult[18];
                }
              }
              const obj28 = { style: tmp20, children: tmp21 };
              const tmp15Result5 = tmp15(View, obj28);
              cResult[16] = tmp20;
              cResult[17] = tmp21;
              cResult[18] = tmp15Result5;
              tmp15Result4 = tmp15Result5;
            }
            const obj29 = {
              variant: "text-xs/semibold",
              style: tmp4.unicodeEmoji,
              allowFontScaling: false,
              children: topEmoji.emojiName,
            };
            const tmp15Result6 = tmp15(Text_Text.Text, obj29);
            cResult[13] = tmp4.unicodeEmoji;
            cResult[14] = topEmoji.emojiName;
            cResult[15] = tmp15Result6;
            tmp21 = tmp15Result6;
          }
          const items2 = [tmp4.statImage, tmp19];
          cResult[10] = tmp4.statImage;
          cResult[11] = tmp19;
          cResult[12] = items2;
          tmp20 = items2;
        }
        cResult[0] = iconSize;
        cResult[1] = stats;
        cResult[2] = tmp4;
        cResult[3] = tmp15Result4;
        cResult[4] = applicationIconURL;
        cResult[5] = tmp16;
      }
    }
  : function CheckpointShareCardStats(arg0) {
      ({ stats, layout } = arg0);
      ({ style, rowStyle } = arg0);
      const tmp = closure_7();
      const iconSize = layout.iconSize;
      const rounded = Math.round(iconSize * getDevicePixelRatioDefault());
      ({ topGuild, topEmoji, topGame } = stats);
      let guildIcon;
      if (topGuild != null) {
        guildIcon = topGuild.guildIcon;
      }
      let guildIconURL;
      if (null != guildIcon) {
        const obj = { id: null, icon: null, size: null };
        ({ guildId: obj2.id, guildIcon: obj2.icon } = topGuild);
        obj.size = rounded;
        guildIconURL = AvatarUtilsDefault.getGuildIconURL(obj);
        const tmp2Result = AvatarUtilsDefault;
      }
      let applicationImageId;
      if (topGame != null) {
        applicationImageId = topGame.applicationImageId;
      }
      let applicationIconURL;
      if (null != applicationImageId) {
        const obj3 = { id: null, icon: null, size: null };
        ({ applicationId: obj4.id, applicationImageId: obj4.icon } = topGame);
        obj3.size = rounded;
        applicationIconURL = AvatarUtilsDefault.getApplicationIconURL(obj3);
        const tmp2Result3 = AvatarUtilsDefault;
      }
      if (null != guildIconURL) {
        const obj5 = { uri: guildIconURL, size: iconSize };
        let tmp11 = hasOwnProperty(closure_9, obj5);
        let tmp12 = hasOwnProperty;
      } else {
        const obj6 = { style: null, children: null };
        const items = [, ,];
        ({ statImage: arr3[0], guildAcronym: arr3[1] } = tmp);
        const size = { width: iconSize, height: iconSize };
        items[2] = size;
        obj6.style = items;
        const obj7 = {
          variant: "text-xxs/normal",
          color: "text-overlay-dark",
          allowFontScaling: false,
          children: stats.topGuildAcronymCharacter,
        };
        obj6.children = hasOwnProperty(Text_Text.Text, obj7);
        tmp11 = hasOwnProperty(View, obj6);
        tmp12 = hasOwnProperty;
      }
      if (null == topEmoji) {
        const obj8 = { Icon: UnknownGameIcon2.UnknownGameIcon, size: iconSize };
        let tmp12Result = tmp12(closure_8, obj8);
      } else if (null != topEmoji.emojiId) {
        const obj9 = { uri: null, size: null };
        const obj10 = { id: topEmoji.emojiId, animated: false, size: rounded };
        obj9.uri = AvatarUtilsDefault.getEmojiURL(obj10);
        obj9.size = iconSize;
        tmp12Result = tmp12(closure_9, obj9);
        const tmp2Result4 = AvatarUtilsDefault;
      } else {
        const obj11 = { style: null, children: null };
        const items1 = [tmp.statImage];
        const size1 = { width: iconSize, height: iconSize };
        items1[1] = size1;
        obj11.style = items1;
        const obj12 = {
          variant: "text-xs/semibold",
          style: tmp.unicodeEmoji,
          allowFontScaling: false,
          children: topEmoji.emojiName,
        };
        obj11.children = tmp12(Text_Text.Text, obj12);
        tmp12Result = tmp12(View, obj11);
      }
      const obj13 = { layout, rowStyle };
      const obj14 = { style, children: null };
      const obj15 = {
        icon: tmp12(closure_8, { Icon: MicrophoneIcon.MicrophoneIcon, size: iconSize }),
        stat: stats.voice,
      };
      const merged = Object.assign(obj13);
      const items2 = [tmp12(closure_10, obj15), , , , , , ,];
      const obj17 = { icon: null, stat: null };
      const obj16 = { Icon: MicrophoneIcon.MicrophoneIcon, size: iconSize };
      obj17.icon = tmp12(closure_8, { Icon: ChatIcon.ChatIcon, size: iconSize });
      obj17.stat = stats.messages;
      const merged1 = Object.assign(obj13);
      items2[1] = tmp12(closure_10, obj17);
      const obj19 = { icon: null, stat: null };
      const obj18 = { Icon: ChatIcon.ChatIcon, size: iconSize };
      obj19.icon = tmp12(closure_8, { Icon: ServerIcon.ServerIcon, size: iconSize });
      obj19.stat = stats.topGuildDaysInteracted;
      const merged2 = Object.assign(obj13);
      items2[2] = tmp12(closure_10, obj19);
      const merged3 = Object.assign(obj13);
      items2[3] = tmp12(closure_10, { icon: tmp11, stat: stats.topGuildName });
      const obj22 = { icon: null, stat: null };
      const obj20 = { Icon: ServerIcon.ServerIcon, size: iconSize };
      const obj21 = { icon: tmp11, stat: stats.topGuildName };
      obj22.icon = tmp12(closure_8, { Icon: ReactionIcon.ReactionIcon, size: iconSize });
      obj22.stat = stats.reactions;
      const merged4 = Object.assign(obj13);
      items2[4] = tmp12(closure_10, obj22);
      const merged5 = Object.assign(obj13);
      items2[5] = tmp12(closure_10, { icon: tmp12Result, stat: stats.topEmojiName });
      const obj25 = { icon: null, stat: null };
      const obj23 = { Icon: ReactionIcon.ReactionIcon, size: iconSize };
      const obj24 = { icon: tmp12Result, stat: stats.topEmojiName };
      obj25.icon = tmp12(closure_8, { Icon: GameControllerIcon.GameControllerIcon, size: iconSize });
      obj25.stat = stats.daysPlayed;
      const merged6 = Object.assign(obj13);
      items2[6] = tmp12(closure_10, obj25);
      const obj26 = { Icon: GameControllerIcon.GameControllerIcon, size: iconSize };
      const merged7 = Object.assign(obj13);
      items2[7] = tmp12(closure_10, {
        icon: tmp12(closure_9, { uri: applicationIconURL, size: iconSize }),
        stat: stats.topGameName,
      });
      obj14.children = items2;
      return timestampProducer(View, obj14);
    };
