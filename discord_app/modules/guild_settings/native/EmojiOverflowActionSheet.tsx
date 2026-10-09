// discord_app/modules/guild_settings/native/EmojiOverflowActionSheet.tsx
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import EmojiActionCreators from "../../../actions/EmojiActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5091);
let closure_8 = createStyles.createStyles({
  header: { paddingHorizontal: 8, flexDirection: "row", alignItems: "center", gap: 16 },
  emojiImage: { width: 30, height: 30, resizeMode: "contain" },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/EmojiOverflowActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function EmojiOverflowActionSheet(emoji) {
      const cResult = emoji(onEdit[6]).c(42);
      emoji = emoji.emoji;
      const guildId = emoji.guildId;
      const onSelectRolesForEmoji = emoji.onSelectRolesForEmoji;
      onEdit = emoji.onEdit;
      const onClose = emoji.onClose;
      const tmp4 = closure_8();
      if (cResult[0] === emoji.animated) {
        if (cResult[1] === emoji.id) {
          let tmp7 = cResult[2];
        }
        if (cResult[3] !== tmp7) {
          const obj3 = { uri: tmp7 };
          cResult[3] = tmp7;
          cResult[4] = obj3;
          let tmp9 = obj3;
        } else {
          tmp9 = cResult[4];
        }
        if (cResult[5] === tmp4.emojiImage) {
          if (cResult[6] === tmp9) {
            let tmp10 = cResult[7];
          }
          const _HermesInternal = HermesInternal;
          const combined = ":" + emoji.name + ":";
          if (cResult[8] !== combined) {
            const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: combined };
            const tmp18 = closure_6(tmp(tmp2[9]).Text, obj4);
            cResult[8] = combined;
            cResult[9] = tmp18;
            let tmp16 = tmp18;
          } else {
            tmp16 = cResult[9];
          }
          if (cResult[10] === tmp4.header) {
            if (cResult[11] === tmp10) {
              if (cResult[12] === tmp16) {
                let tmp19 = cResult[13];
              }
              const _Symbol = Symbol;
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp25 = closure_6(tmp(tmp2[10]).TrashIcon, { color: "text-feedback-critical" });
                cResult[14] = tmp25;
                let tmp23 = tmp25;
              } else {
                tmp23 = cResult[14];
              }
              const _Symbol2 = Symbol;
              if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                const obj5 = { variant: "text-md/semibold", color: "text-feedback-critical", children: null };
                let intl = tmp(tmp2[11]).intl;
                obj5.children = intl.string(tmp(tmp2[11]).t.oyYWHE);
                const tmp28 = closure_6(tmp(tmp2[9]).Text, obj5);
                cResult[15] = tmp28;
                let tmp26 = tmp28;
              } else {
                tmp26 = cResult[15];
              }
              if (cResult[16] === emoji.id) {
                if (cResult[17] === guildId) {
                  if (cResult[18] === onClose) {
                    let tmp29 = cResult[19];
                  }
                  const _Symbol3 = Symbol;
                  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                    const tmp34 = closure_6(tmp(tmp2[14]).PencilIcon, {});
                    cResult[20] = tmp34;
                    let tmp32 = tmp34;
                  } else {
                    tmp32 = cResult[20];
                  }
                  const _Symbol4 = Symbol;
                  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj6 = { variant: "text-md/semibold", children: null };
                    const intl2 = tmp(tmp2[11]).intl;
                    obj6.children = intl2.string(tmp(tmp2[11]).t.bt75uw);
                    const tmp37 = closure_6(tmp(tmp2[9]).Text, obj6);
                    cResult[21] = tmp37;
                    let tmp35 = tmp37;
                  } else {
                    tmp35 = cResult[21];
                  }
                  if (cResult[22] === onClose) {
                    if (cResult[23] === onEdit) {
                      let tmp38 = cResult[24];
                    }
                    if (cResult[25] === emoji) {
                      if (cResult[26] === guildId) {
                        if (cResult[27] === onClose) {
                          if (cResult[28] === onSelectRolesForEmoji) {
                            let tmp41 = cResult[29];
                          }
                          const _Symbol5 = Symbol;
                          if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                            const tmp47 = closure_6(tmp(tmp2[17]).XSmallIcon, {});
                            cResult[30] = tmp47;
                            let tmp45 = tmp47;
                          } else {
                            tmp45 = cResult[30];
                          }
                          const _Symbol6 = Symbol;
                          if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                            const obj7 = { variant: "text-md/semibold", children: null };
                            const intl4 = tmp(tmp2[11]).intl;
                            obj7.children = intl4.string(tmp(tmp2[11]).t["ETE/oC"]);
                            const tmp50 = closure_6(tmp(tmp2[9]).Text, obj7);
                            cResult[31] = tmp50;
                            let tmp48 = tmp50;
                          } else {
                            tmp48 = cResult[31];
                          }
                          if (cResult[32] !== onClose) {
                            const obj8 = { icon: tmp45, label: tmp48, onPress: onClose };
                            const tmp53 = closure_6(tmp(tmp2[12]).TableRow, obj8);
                            cResult[32] = onClose;
                            cResult[33] = tmp53;
                            let tmp51 = tmp53;
                          } else {
                            tmp51 = cResult[33];
                          }
                          if (cResult[34] === tmp29) {
                            if (cResult[35] === tmp38) {
                              if (cResult[36] === tmp41) {
                                if (cResult[37] === tmp51) {
                                  let tmp54 = cResult[38];
                                }
                                if (cResult[39] === tmp54) {
                                  if (cResult[40] === tmp19) {
                                    let tmp57 = cResult[41];
                                  }
                                  return tmp57;
                                }
                                const obj9 = { children: null };
                                const items = [tmp19, tmp54];
                                obj9.children = items;
                                const tmp59 = closure_7(tmp(tmp2[19]).ActionSheet, obj9);
                                cResult[39] = tmp54;
                                cResult[40] = tmp19;
                                cResult[41] = tmp59;
                                tmp57 = tmp59;
                              }
                            }
                          }
                          const obj10 = { hasIcons: true, children: null };
                          const items1 = [tmp29, tmp38, tmp41, tmp51];
                          obj10.children = items1;
                          const tmp56 = closure_7(tmp(tmp2[18]).TableRowGroup, obj10);
                          cResult[34] = tmp29;
                          cResult[35] = tmp38;
                          cResult[36] = tmp41;
                          cResult[37] = tmp51;
                          cResult[38] = tmp56;
                          tmp54 = tmp56;
                        }
                      }
                    }
                    let tmp42 = null;
                    if (null != onSelectRolesForEmoji) {
                      const obj11 = { icon: closure_6(tmp(tmp2[14]).PencilIcon, {}), label: null, onPress: null };
                      const obj12 = { variant: "text-md/semibold", children: null };
                      const intl3 = tmp(tmp2[11]).intl;
                      obj12.children = intl3.string(tmp(tmp2[11]).t["+riKdA"]);
                      obj11.label = closure_6(tmp(tmp2[9]).Text, obj12);
                      obj11.onPress = onClose(function* () {
                        closure_2 = tmp3;
                        yield onSelectRolesForEmoji(emoji);
                        if (1 === tmp7) {
                          c4 = 0;
                          closure_129_1 = tmp40;
                          if (closure_129_1 instanceof emoji(tmp40[15]).APIError) {
                            const anyErrorMessage = closure_129_1.getAnyErrorMessage();
                            emoji = anyErrorMessage;
                            if (anyErrorMessage == null) {
                              const intl = emoji(tmp40[11]).intl;
                              emoji = intl.string(emoji(tmp40[11]).t.R0RpRX);
                            }
                            emoji(tmp40[16]).presentError(emoji);
                            emoji(tmp40[16]);
                          }
                          closure_130_4();
                          c6 = 3;
                        } else if (2 === tmp7) {
                          if (arg0 === 1) {
                            c6 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c4 = 0;
                            c6 = 3;
                            return { value, done: true };
                          } else {
                            closure_129_0 = value;
                            c5 = 3;
                            c6 = 1;
                            return {
                              value: emoji(tmp40[13]).updateEmoji({
                                guildId: closure_130_1,
                                emojiId: closure_130_0.id,
                                roles: closure_129_0,
                              }),
                              done: false,
                            };
                          }
                        } else if (arg0 === 1) {
                          c6 = 3;
                          throw value;
                        } else if (arg0 !== 2) {
                          c4 = 0;
                        }
                        return value;
                      });
                      tmp42 = closure_6(tmp(tmp2[12]).TableRow, obj11);
                    }
                    cResult[25] = emoji;
                    cResult[26] = guildId;
                    cResult[27] = onClose;
                    cResult[28] = onSelectRolesForEmoji;
                    cResult[29] = tmp42;
                    tmp41 = tmp42;
                  }
                  const obj13 = {
                    icon: tmp32,
                    label: tmp35,
                    onPress() {
                      onEdit();
                      onClose();
                    },
                  };
                  const tmp40 = closure_6(tmp(tmp2[12]).TableRow, obj13);
                  cResult[22] = onClose;
                  cResult[23] = onEdit;
                  cResult[24] = tmp40;
                  tmp38 = tmp40;
                }
              }
              const obj14 = {
                icon: tmp23,
                label: tmp26,
                onPress() {
                  EmojiActionCreators.deleteEmoji(guildId, emoji.id);
                  onClose();
                },
              };
              const tmp31 = closure_6(tmp(tmp2[12]).TableRow, obj14);
              cResult[16] = emoji.id;
              cResult[17] = guildId;
              cResult[18] = onClose;
              cResult[19] = tmp31;
              tmp29 = tmp31;
            }
          }
          const obj15 = { style: tmp5, children: null };
          const items2 = [tmp10, tmp16];
          obj15.children = items2;
          const tmp22 = closure_7(View, obj15);
          cResult[10] = tmp4.header;
          cResult[11] = tmp10;
          cResult[12] = tmp16;
          cResult[13] = tmp22;
          tmp19 = tmp22;
        }
        const obj16 = { style: tmp6, source: tmp9 };
        const tmp13 = closure_6(guildId(tmp2[8]), obj16);
        cResult[5] = tmp4.emojiImage;
        cResult[6] = tmp9;
        cResult[7] = tmp13;
        tmp10 = tmp13;
      }
      const obj = emoji(onEdit[6]);
      const emojiURL = onSelectRolesForEmoji(onEdit[7]).getEmojiURL({
        id: emoji.id,
        animated: emoji.animated,
        size: 48,
      });
      cResult[0] = emoji.animated;
      cResult[1] = emoji.id;
      cResult[2] = emojiURL;
      tmp7 = emojiURL;
      const obj17 = { id: emoji.id, animated: emoji.animated, size: 48 };
      const obj2 = onSelectRolesForEmoji(onEdit[7]);
    }
  : function EmojiOverflowActionSheet(emoji) {
      emoji = emoji.emoji;
      ({ guildId: importDefault, onSelectRolesForEmoji } = emoji);
      ({ onEdit: dependencyMap, onClose } = emoji);
      const tmp = closure_8();
      const obj = { style: tmp.header, children: null };
      const obj2 = { style: tmp.emojiImage, source: null };
      const obj3 = { uri: null };
      const tmp6 = FastImageDefault;
      obj3.uri = onSelectRolesForEmoji(1415).getEmojiURL({ id: emoji.id, animated: emoji.animated, size: 48 });
      obj2.source = obj3;
      const items = [closure_6(tmp6, obj2)];
      const obj4 = onSelectRolesForEmoji(1415);
      const obj5 = { id: emoji.id, animated: emoji.animated, size: 48 };
      items[1] = closure_6(emoji(5087).Text, {
        variant: "text-md/semibold",
        color: "mobile-text-heading-primary",
        children: ":" + emoji.name + ":",
      });
      obj.children = items;
      const items1 = [closure_7(View, obj)];
      const obj7 = {
        icon: closure_6(emoji(5048).TrashIcon, { color: "text-feedback-critical" }),
        label: null,
        onPress: null,
      };
      const obj8 = { variant: "text-md/semibold", color: "text-feedback-critical", children: null };
      let intl = emoji(1126).intl;
      obj8.children = intl.string(emoji(1126).t.oyYWHE);
      obj7.label = closure_6(emoji(5087).Text, obj8);
      obj7.onPress = function onPress() {
        EmojiActionCreators.deleteEmoji(importDefault, emoji.id);
        onClose();
      };
      const items2 = [closure_6(emoji(6186).TableRow, obj7), , ,];
      const obj9 = { icon: closure_6(emoji(9694).PencilIcon, {}), label: null, onPress: null };
      const obj10 = { variant: "text-md/semibold", children: null };
      const intl2 = emoji(1126).intl;
      obj10.children = intl2.string(emoji(1126).t.bt75uw);
      obj9.label = closure_6(emoji(5087).Text, obj10);
      obj9.onPress = function onPress() {
        dependencyMap();
        onClose();
      };
      items2[1] = closure_6(emoji(6186).TableRow, obj9);
      let tmp5Result = null;
      if (null != onSelectRolesForEmoji) {
        const obj11 = { icon: closure_6(tmp3(9694).PencilIcon, {}), label: null, onPress: null };
        const obj12 = { variant: "text-md/semibold", children: null };
        const intl3 = tmp3(1126).intl;
        obj12.children = intl3.string(tmp3(1126).t["+riKdA"]);
        obj11.label = closure_6(tmp3(5087).Text, obj12);
        obj11.onPress = onClose(function* () {
          closure_2 = tmp3;
          yield onSelectRolesForEmoji(emoji);
          if (1 === tmp7) {
            c4 = 0;
            closure_129_1 = tmp40;
            if (closure_129_1 instanceof emoji(tmp40[15]).APIError) {
              const anyErrorMessage = closure_129_1.getAnyErrorMessage();
              emoji = anyErrorMessage;
              if (anyErrorMessage == null) {
                const intl = emoji(tmp40[11]).intl;
                emoji = intl.string(emoji(tmp40[11]).t.R0RpRX);
              }
              emoji(tmp40[16]).presentError(emoji);
              emoji(tmp40[16]);
            }
            closure_130_4();
            c6 = 3;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              return { value, done: true };
            } else {
              closure_129_0 = value;
              c5 = 3;
              c6 = 1;
              return {
                value: emoji(tmp40[13]).updateEmoji({
                  guildId: closure_130_1,
                  emojiId: closure_130_0.id,
                  roles: closure_129_0,
                }),
                done: false,
              };
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            c4 = 0;
          }
          return value;
        });
        tmp5Result = closure_6(tmp3(6186).TableRow, obj11);
      }
      const obj13 = { children: null };
      const obj14 = { hasIcons: true, children: null };
      items2[2] = tmp5Result;
      const obj15 = { icon: closure_6(emoji(6212).XSmallIcon, {}), label: null, onPress: null };
      const obj16 = { variant: "text-md/semibold", children: null };
      const intl4 = tmp3(1126).intl;
      obj16.children = intl4.string(emoji(1126).t["ETE/oC"]);
      obj15.label = closure_6(emoji(5087).Text, obj16);
      obj15.onPress = onClose;
      items2[3] = closure_6(emoji(6186).TableRow, obj15);
      obj14.children = items2;
      items1[1] = closure_7(emoji(6269).TableRowGroup, obj14);
      obj13.children = items1;
      return closure_7(emoji(6892).ActionSheet, obj13);
    };
