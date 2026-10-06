// === Module 17784: EmojiOverflowActionSheet ===

// Module 17784 (EmojiOverflowActionSheet)
import EmojiActionCreators from "EmojiActionCreators" /* 9952 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c5, c6, closure_3, emoji;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ Image: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ header: { paddingHorizontal: 8, flexDirection: "row", alignItems: "center", gap: 16 }, emojiImage: { width: 30, height: 30, resizeMode: "contain" } });
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((emoji) => {
  let Text3;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  let items2;
  let obj12;
  let onSelectRolesForEmoji;
  const tmp = emoji;
  let obj = emoji(onSelectRolesForEmoji[6]);
  const cResult = obj.c(42);
  emoji = emoji.emoji;
  const guildId = emoji.guildId;
  onSelectRolesForEmoji = emoji.onSelectRolesForEmoji;
  const onEdit = emoji.onEdit;
  const onClose = emoji.onClose;
  const tmp4 = closure_8();
  if (cResult[0] === emoji.animated) {
    let tmp7;
    let tmp9;
    if (cResult[1] === emoji.id) {
      tmp7 = cResult[2];
    }
    if (cResult[3] !== tmp7) {
      let obj3 = { uri: tmp7 };
      cResult[3] = tmp7;
      cResult[4] = obj3;
      tmp9 = obj3;
    } else {
      tmp9 = cResult[4];
    }
    if (cResult[5] === tmp4.emojiImage) {
      let tmp10;
      let tmp16;
      if (cResult[6] === tmp9) {
        tmp10 = cResult[7];
      }
      const _HermesInternal = HermesInternal;
      const combined = ":" + emoji.name + ":";
      if (cResult[8] !== combined) {
        let obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: combined };
        const tmp18 = closure_6(tmp(onSelectRolesForEmoji[8]).Text, obj4);
        cResult[8] = combined;
        cResult[9] = tmp18;
        tmp16 = tmp18;
      } else {
        tmp16 = cResult[9];
      }
      if (cResult[10] === tmp4.header) {
        if (cResult[11] === tmp10) {
          let tmp19;
          let tmp23;
          let tmp26;
          if (cResult[12] === tmp16) {
            tmp19 = cResult[13];
          }
          const _Symbol = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp25 = closure_6(tmp(onSelectRolesForEmoji[9]).TrashIcon, { color: "text-feedback-critical" });
            cResult[14] = tmp25;
            tmp23 = tmp25;
          } else {
            tmp23 = cResult[14];
          }
          const _Symbol2 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            let obj5 = { variant: "text-md/semibold", color: "text-feedback-critical", children: intl.string(tmp(tmp2[10]).t.oyYWHE) };
            const Text = tmp(tmp2[8]).Text;
            intl = tmp(tmp2[10]).intl;
            const tmp28 = closure_6(Text, obj5);
            cResult[15] = tmp28;
            tmp26 = tmp28;
          } else {
            tmp26 = cResult[15];
          }
          if (cResult[16] === emoji.id) {
            if (cResult[17] === guildId) {
              let tmp29;
              let tmp32;
              let tmp35;
              if (cResult[18] === onClose) {
                tmp29 = cResult[19];
              }
              const _Symbol3 = Symbol;
              if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp34 = closure_6(tmp(onSelectRolesForEmoji[13]).PencilIcon, {});
                cResult[20] = tmp34;
                tmp32 = tmp34;
              } else {
                tmp32 = cResult[20];
              }
              const _Symbol4 = Symbol;
              if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                let obj6 = { variant: "text-md/semibold", children: intl2.string(tmp(tmp2[10]).t.bt75uw) };
                const Text2 = tmp(tmp2[8]).Text;
                intl2 = tmp(tmp2[10]).intl;
                const tmp37 = closure_6(Text2, obj6);
                cResult[21] = tmp37;
                tmp35 = tmp37;
              } else {
                tmp35 = cResult[21];
              }
              if (cResult[22] === onClose) {
                let tmp38;
                if (cResult[23] === onEdit) {
                  tmp38 = cResult[24];
                }
                if (cResult[25] === emoji) {
                  if (cResult[26] === guildId) {
                    if (cResult[27] === onClose) {
                      let tmp41;
                      let tmp45;
                      let tmp48;
                      let tmp51;
                      if (cResult[28] === onSelectRolesForEmoji) {
                        tmp41 = cResult[29];
                      }
                      const _Symbol5 = Symbol;
                      if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                        const tmp47 = closure_6(tmp(onSelectRolesForEmoji[16]).XSmallIcon, {});
                        cResult[30] = tmp47;
                        tmp45 = tmp47;
                      } else {
                        tmp45 = cResult[30];
                      }
                      const _Symbol6 = Symbol;
                      if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                        let obj7 = { variant: "text-md/semibold", children: intl4.string(tmp(tmp2[10]).t["ETE/oC"]) };
                        const Text4 = tmp(tmp2[8]).Text;
                        intl4 = tmp(tmp2[10]).intl;
                        const tmp50 = closure_6(Text4, obj7);
                        cResult[31] = tmp50;
                        tmp48 = tmp50;
                      } else {
                        tmp48 = cResult[31];
                      }
                      if (cResult[32] !== onClose) {
                        let obj8 = { icon: tmp45, label: tmp48, onPress: onClose };
                        const tmp53 = closure_6(tmp(onSelectRolesForEmoji[11]).TableRow, obj8);
                        cResult[32] = onClose;
                        cResult[33] = tmp53;
                        tmp51 = tmp53;
                      } else {
                        tmp51 = cResult[33];
                      }
                      if (cResult[34] === tmp29) {
                        if (cResult[35] === tmp38) {
                          if (cResult[36] === tmp41) {
                            let tmp54;
                            if (cResult[37] === tmp51) {
                              tmp54 = cResult[38];
                            }
                            if (cResult[39] === tmp54) {
                              let tmp57;
                              if (cResult[40] === tmp19) {
                                tmp57 = cResult[41];
                              }
                              return tmp57;
                            }
                            const obj9 = { children: items };
                            items = [tmp19, tmp54];
                            const tmp59 = closure_7(tmp(onSelectRolesForEmoji[18]).ActionSheet, obj9);
                            cResult[39] = tmp54;
                            cResult[40] = tmp19;
                            cResult[41] = tmp59;
                            tmp57 = tmp59;
                          }
                        }
                      }
                      const obj10 = { hasIcons: true, children: items1 };
                      items1 = [tmp29, tmp38, tmp41, tmp51];
                      const tmp56 = closure_7(tmp(onSelectRolesForEmoji[17]).TableRowGroup, obj10);
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
                  const obj11 = {
                    icon: closure_6(tmp(onSelectRolesForEmoji[13]).PencilIcon, {}),
                    label: closure_6(Text3, obj12),
                    onPress: onEdit(function*() {
                                      let closure_2;
                                      let obj2;
                                      if (c6 === 2) {
                                        c6 = 3;
                                        throw new TypeError("Generator functions may not be called on executing generators");
                                      } else if (tmp3 === 3) {
                                        if (arg0 === 1) {
                                          throw value;
                                        } else if (arg0 === 2) {
                                          const obj3 = { value, done: true };
                                          return obj3;
                                        } else {
                                          return { value: "IconComponent", done: null };
                                        }
                                      } else {
                                        let c4;
                                        try {
                                          let roles;
                                          let anyErrorMessage;
                                          c6 = 2;
                                          if (0 === c5) {
                                            if (arg0 === 1) {
                                              c6 = 3;
                                              throw value;
                                            } else if (arg0 === 2) {
                                              c6 = 3;
                                              const obj4 = { value, done: true };
                                              return obj4;
                                            } else {
                                              onSelectRolesForEmoji = tmp;
                                              roles = undefined;
                                              anyErrorMessage = undefined;
                                              c4 = 1;
                                              c5 = 2;
                                              c6 = 1;
                                              const obj5 = { value: onSelectRolesForEmoji(emoji), done: false };
                                              return obj5;
                                            }
                                          } else {
                                            if (1 === c5) {
                                              c4 = 0;
                                              anyErrorMessage = closure_3;
                                              if (anyErrorMessage instanceof roles(onSelectRolesForEmoji[14]).APIError) {
                                                const presentError = roles(onSelectRolesForEmoji[15]).presentError;
                                                const tmp23 = roles(onSelectRolesForEmoji[15]);
                                                anyErrorMessage = anyErrorMessage.getAnyErrorMessage();
                                                roles = anyErrorMessage;
                                                if (anyErrorMessage == null) {
                                                  const intl = roles(onSelectRolesForEmoji[10]).intl;
                                                  roles = intl.string(roles(onSelectRolesForEmoji[10]).t.R0RpRX);
                                                }
                                                presentError(roles);
                                              }
                                            } else if (2 === c5) {
                                              if (arg0 === 1) {
                                                c6 = 3;
                                                throw value;
                                              } else if (arg0 === 2) {
                                                c4 = 0;
                                                c6 = 3;
                                                const obj6 = { value, done: true };
                                                return obj6;
                                              } else {
                                                roles = value;
                                                const obj7 = { guildId: closure_130_1, emojiId: closure_130_0.id, roles };
                                                c5 = 3;
                                                c6 = 1;
                                                const obj8 = { value: obj2.updateEmoji(obj7), done: false };
                                                obj2 = roles(onSelectRolesForEmoji[12]);
                                                return obj8;
                                              }
                                            } else if (arg0 === 1) {
                                              c6 = 3;
                                              throw value;
                                            } else if (arg0 === 2) {
                                              c4 = 0;
                                              c6 = 3;
                                              const obj = { value, done: true };
                                              return obj;
                                            } else {
                                              c4 = 0;
                                            }
                                            closure_130_4();
                                            c6 = 3;
                                            return { value: "IconComponent", done: null };
                                          }
                                        } catch (tmp38) {
                                          closure_3 = tmp38;
                                          if (0 === c4) {
                                            c6 = 3;
                                            throw tmp38;
                                          } else {
                                            c5 = 1;
                                          }
                                        }
                                      }
                                    })
                  };
                  const TableRow = tmp(tmp2[11]).TableRow;
                  obj12 = { variant: "text-md/semibold", children: intl3.string(tmp(onSelectRolesForEmoji[10]).t["+riKdA"]) };
                  Text3 = tmp(tmp2[8]).Text;
                  intl3 = tmp(tmp2[10]).intl;
                  tmp42 = closure_6(TableRow, obj11);
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
                            }
              };
              const tmp40 = closure_6(tmp(onSelectRolesForEmoji[11]).TableRow, obj13);
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
                      const obj = EmojiActionCreators;
                      obj.deleteEmoji(guildId, emoji.id);
                      onClose();
                    }
          };
          const tmp31 = closure_6(tmp(onSelectRolesForEmoji[11]).TableRow, obj14);
          cResult[16] = emoji.id;
          cResult[17] = guildId;
          cResult[18] = onClose;
          cResult[19] = tmp31;
          tmp29 = tmp31;
        }
      }
      const obj15 = { style: tmp5, children: items2 };
      items2 = [tmp10, tmp16];
      const tmp22 = closure_7(closure_5, obj15);
      cResult[10] = tmp4.header;
      cResult[11] = tmp10;
      cResult[12] = tmp16;
      cResult[13] = tmp22;
      tmp19 = tmp22;
    }
    const obj16 = { style: tmp6, source: tmp9 };
    const tmp13 = closure_6(onClose, obj16);
    cResult[5] = tmp4.emojiImage;
    cResult[6] = tmp9;
    cResult[7] = tmp13;
    tmp10 = tmp13;
  }
  let obj2 = guildId(tmp2[7]);
  const obj17 = { id: emoji.id, animated: emoji.animated, size: 48 };
  const emojiURL = obj2.getEmojiURL(obj17);
  cResult[0] = emoji.animated;
  cResult[1] = emoji.id;
  cResult[2] = emojiURL;
  tmp7 = emojiURL;
}) : ((emoji) => {
  let Text2;
  let Text3;
  let Text4;
  let Text5;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj10;
  let obj12;
  let obj16;
  let obj3;
  let obj4;
  let obj5;
  let obj8;
  let onClose;
  let onSelectRolesForEmoji;
  emoji = emoji.emoji;
  ({ guildId: importAll, onSelectRolesForEmoji } = emoji);
  ({ onEdit: _asyncToGenerator, onClose } = emoji);
  const tmp = closure_8();
  const tmp3 = emoji;
  let obj = { style: tmp.header, children: items };
  let obj2 = { style: tmp.emojiImage, source: obj3 };
  obj3 = { uri: obj4.getEmojiURL(obj5) };
  const ActionSheet = emoji(onSelectRolesForEmoji[18]).ActionSheet;
  obj4 = require("AvatarUtils");
  obj5 = { id: emoji.id, animated: emoji.animated, size: 48 };
  items = [closure_6(onClose, obj2), ];
  let obj6 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: ":" + emoji.name + ":" };
  const Text = emoji(onSelectRolesForEmoji[8]).Text;
  items[1] = closure_6(Text, obj6);
  const items1 = [closure_7(closure_5, obj), ];
  const TableRowGroup = emoji(onSelectRolesForEmoji[17]).TableRowGroup;
  let obj7 = {
    icon: closure_6(emoji(onSelectRolesForEmoji[9]).TrashIcon, { color: "text-feedback-critical" }),
    label: closure_6(Text2, obj8),
    onPress() {
      const obj = EmojiActionCreators;
      obj.deleteEmoji(importAll, emoji.id);
      onClose();
    }
  };
  const TableRow = emoji(onSelectRolesForEmoji[11]).TableRow;
  obj8 = { variant: "text-md/semibold", color: "text-feedback-critical", children: intl.string(emoji(onSelectRolesForEmoji[10]).t.oyYWHE) };
  Text2 = emoji(onSelectRolesForEmoji[8]).Text;
  intl = emoji(onSelectRolesForEmoji[10]).intl;
  const items2 = [closure_6(TableRow, obj7), , , ];
  const obj9 = {
    icon: closure_6(emoji(onSelectRolesForEmoji[13]).PencilIcon, {}),
    label: closure_6(Text3, obj10),
    onPress() {
      _asyncToGenerator();
      onClose();
    }
  };
  const TableRow2 = emoji(onSelectRolesForEmoji[11]).TableRow;
  obj10 = { variant: "text-md/semibold", children: intl2.string(emoji(onSelectRolesForEmoji[10]).t.bt75uw) };
  Text3 = emoji(onSelectRolesForEmoji[8]).Text;
  intl2 = emoji(onSelectRolesForEmoji[10]).intl;
  items2[1] = closure_6(TableRow2, obj9);
  let tmp5Result = null;
  if (null != onSelectRolesForEmoji) {
    const obj11 = {
      icon: closure_6(tmp3(onSelectRolesForEmoji[13]).PencilIcon, {}),
      label: closure_6(Text4, obj12),
      onPress: _asyncToGenerator(async () => {
          let closure_2;
          let obj2;
          if (c6 === 2) {
            c6 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            let c4;
            try {
              let anyErrorMessage;
              let roles;
              c6 = 2;
              if (0 === c5) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  onSelectRolesForEmoji = tmp;
                  anyErrorMessage = tmp4;
                  roles = undefined;
                  c4 = 1;
                  c5 = 2;
                  c6 = 1;
                  const obj5 = { value: onSelectRolesForEmoji(emoji), done: false };
                  return obj5;
                }
              } else {
                if (1 === c5) {
                  c4 = 0;
                  anyErrorMessage = closure_3;
                  if (anyErrorMessage instanceof roles(onSelectRolesForEmoji[14]).APIError) {
                    const presentError = roles(onSelectRolesForEmoji[15]).presentError;
                    const tmp23 = roles(onSelectRolesForEmoji[15]);
                    anyErrorMessage = anyErrorMessage.getAnyErrorMessage();
                    roles = anyErrorMessage;
                    if (anyErrorMessage == null) {
                      const intl = roles(onSelectRolesForEmoji[10]).intl;
                      roles = intl.string(roles(onSelectRolesForEmoji[10]).t.R0RpRX);
                    }
                    presentError(roles);
                  }
                } else if (2 === c5) {
                  if (arg0 === 1) {
                    c6 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c4 = 0;
                    c6 = 3;
                    const obj6 = { value, done: true };
                    return obj6;
                  } else {
                    roles = value;
                    const obj7 = { guildId: closure_130_1, emojiId: closure_130_0.id, roles };
                    c5 = 3;
                    c6 = 1;
                    const obj8 = { value: obj2.updateEmoji(obj7), done: false };
                    obj2 = roles(onSelectRolesForEmoji[12]);
                    return obj8;
                  }
                } else if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 0;
                  c6 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  c4 = 0;
                }
                closure_130_4();
                c6 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp38) {
              closure_3 = tmp38;
              if (0 === c4) {
                c6 = 3;
                throw tmp38;
              } else {
                c5 = 1;
              }
            }
          }
        })
    };
    const TableRow3 = tmp3(onSelectRolesForEmoji[11]).TableRow;
    obj12 = { variant: "text-md/semibold", children: intl3.string(tmp3(onSelectRolesForEmoji[10]).t["+riKdA"]) };
    Text4 = tmp3(onSelectRolesForEmoji[8]).Text;
    intl3 = tmp3(onSelectRolesForEmoji[10]).intl;
    tmp5Result = closure_6(TableRow3, obj11);
  }
  const obj13 = { children: items1 };
  const obj14 = { hasIcons: true, children: items2 };
  items2[2] = tmp5Result;
  const obj15 = { icon: closure_6(tmp3(onSelectRolesForEmoji[16]).XSmallIcon, {}), label: closure_6(Text5, obj16), onPress: onClose };
  const TableRow4 = tmp3(onSelectRolesForEmoji[11]).TableRow;
  obj16 = { variant: "text-md/semibold", children: intl4.string(tmp3(onSelectRolesForEmoji[10]).t["ETE/oC"]) };
  Text5 = tmp3(onSelectRolesForEmoji[8]).Text;
  intl4 = tmp3(onSelectRolesForEmoji[10]).intl;
  items2[3] = closure_6(TableRow4, obj15);
  items1[1] = closure_7(TableRowGroup, obj14);
  return closure_7(ActionSheet, obj13);
});
const result = size.fileFinishedImporting("modules/guild_settings/native/EmojiOverflowActionSheet.tsx");

export default tmp5;