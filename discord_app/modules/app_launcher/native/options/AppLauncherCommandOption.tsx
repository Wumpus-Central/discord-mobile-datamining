// discord_app/modules/app_launcher/native/options/AppLauncherCommandOption.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import utils_AutocompleteUtilsDefault from "../../../../utils/native/AutocompleteUtils.tsx";
import AppLauncherChoicesOptionDefault from "choices/AppLauncherChoicesOption.tsx";
import AppLauncherAutocompleteOptionDefault from "autocomplete/AppLauncherAutocompleteOption.tsx";
import AppLauncherTextInputOptionDefault from "text_input/AppLauncherTextInputOption.tsx";
import AppLauncherAttachmentOptionDefault from "attachment/AppLauncherAttachmentOption.tsx";
import AppLauncherBooleanOptionDefault from "boolean/AppLauncherBooleanOption.tsx";
import AppLauncherMentionableListActionSheet from "mentionable/AppLauncherMentionableListActionSheet.tsx";
import AppLauncherMentionableOptionDefault from "mentionable/AppLauncherMentionableOption.tsx";
import AppLauncherRoleOptionDefault from "role/AppLauncherRoleOption.tsx";
import AppLauncherUserOptionDefault from "user/AppLauncherUserOption.tsx";
import AppLauncherChannelOptionDefault from "channel/AppLauncherChannelOption.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
let closure_4 = fn(1489).AppLauncherOptionAutoFocusType;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  dismissableOptionWrapper: { flexDirection: "row", alignItems: "center" },
  optionViewContainer: { flex: 1 },
  dismissButton: { marginLeft: 8, marginRight: -4, padding: 4, borderRadius: nativeDefault.radii.round },
  option: { flex: 1 },
};
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { marginLeft: 8, marginRight: -4, padding: 4, borderRadius: nativeDefault.radii.round };
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/options/AppLauncherCommandOption.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (option) => {
      const cResult = option(onEndEditing[7]).c(162);
      option = option.option;
      const onStartEditing = option.onStartEditing;
      onEndEditing = option.onEndEditing;
      const onOptionValueChange = option.onOptionValueChange;
      const onPress = option.onPress;
      ({ onPressAttachmentOption, onDismiss } = option);
      ({ onFocus, channel, autoFocusType, command, optionValues, hasError } = option);
      let dismissableOptionWrapper = closure_7();
      let type = option.type;
      if (option(onEndEditing[8]).ApplicationCommandOptionType.STRING !== type) {
        if (tmp(tmp2[8]).ApplicationCommandOptionType.INTEGER !== type) {
          if (tmp(tmp2[8]).ApplicationCommandOptionType.NUMBER !== type) {
            if (tmp(tmp2[8]).ApplicationCommandOptionType.ATTACHMENT === type) {
              if (cResult[62] === onEndEditing) {
                if (cResult[63] === onOptionValueChange) {
                  if (cResult[64] === option) {
                    let tmp55 = cResult[65];
                  }
                  if (cResult[66] === channel) {
                    if (cResult[67] === hasError) {
                      if (cResult[68] === onPressAttachmentOption) {
                        if (cResult[69] === option) {
                          if (cResult[70] === dismissableOptionWrapper.option) {
                            if (cResult[71] === tmp55) {
                              if (cResult[72] === tmp57) {
                                let tmp58 = cResult[73];
                              }
                              let tmp12 = tmp58;
                            }
                          }
                        }
                      }
                    }
                  }
                  let obj2 = {
                    style: dismissableOptionWrapper.option,
                    option,
                    onSelectAttachment: tmp55,
                    channel,
                    autoFocus: autoFocusType === onPress.OPTIONAL_OPTION_ADDED,
                    hasError,
                    onPress: onPressAttachmentOption,
                  };
                  const tmp61 = onDismiss(onStartEditing(tmp2[12]), obj2, option.name);
                  cResult[66] = channel;
                  cResult[67] = hasError;
                  cResult[68] = onPressAttachmentOption;
                  cResult[69] = option;
                  cResult[70] = dismissableOptionWrapper.option;
                  cResult[71] = tmp55;
                  cResult[72] = autoFocusType === onPress.OPTIONAL_OPTION_ADDED;
                  cResult[73] = tmp61;
                  tmp58 = tmp61;
                }
              }
              function ne(text) {
                onEndEditing(option);
                if (null != text) {
                  const obj = { type: "text", text };
                  const items = [obj];
                  let items1 = items;
                } else {
                  items1 = [];
                }
                onOptionValueChange(option, items1);
              }
              cResult[62] = onEndEditing;
              cResult[63] = onOptionValueChange;
              cResult[64] = option;
              cResult[65] = ne;
              tmp55 = ne;
            } else if (tmp(tmp2[8]).ApplicationCommandOptionType.BOOLEAN === type) {
              if (optionValues.current[option.name] != null) {
                const first = tmp47[0];
              }
              if (cResult[74] === onPress) {
                if (cResult[75] === onEndEditing) {
                  if (cResult[76] === onOptionValueChange) {
                    if (cResult[77] === option) {
                      let tmp50 = cResult[78];
                    }
                    if (cResult[79] === hasError) {
                      if (cResult[80] === option) {
                        if (cResult[81] === dismissableOptionWrapper.option) {
                          if (cResult[82] === first) {
                            if (cResult[83] === tmp50) {
                              let tmp51 = cResult[84];
                            }
                            tmp12 = tmp51;
                          }
                        }
                      }
                    }
                    let obj3 = {
                      style: dismissableOptionWrapper.option,
                      option,
                      initialValue: first,
                      onPress: tmp50,
                      hasError,
                    };
                    const tmp54 = onDismiss(onStartEditing(tmp2[13]), obj3, option.name);
                    cResult[79] = hasError;
                    cResult[80] = option;
                    cResult[81] = dismissableOptionWrapper.option;
                    cResult[82] = first;
                    cResult[83] = tmp50;
                    cResult[84] = tmp54;
                    tmp51 = tmp54;
                  }
                }
              }
              function ie(arg0) {
                onPress();
                onEndEditing(option);
                const items = [{ type: "text", text: arg0.toString() }];
                onOptionValueChange(option, items);
              }
              cResult[74] = onPress;
              cResult[75] = onEndEditing;
              cResult[76] = onOptionValueChange;
              cResult[77] = option;
              cResult[78] = ie;
              tmp50 = ie;
            } else if (tmp(tmp2[8]).ApplicationCommandOptionType.MENTIONABLE === type) {
              if (optionValues.current[option.name] != null) {
                const first1 = tmp36[0];
              }
              if (cResult[85] === onOptionValueChange) {
                if (cResult[86] === option) {
                  let tmp39 = cResult[87];
                }
                if (cResult[88] === onEndEditing) {
                  if (cResult[89] === option) {
                    let tmp40 = cResult[90];
                  }
                  if (cResult[91] === channel) {
                    if (cResult[92] === onPress) {
                      if (cResult[93] === hasError) {
                        if (cResult[94] === option) {
                          if (cResult[95] === first1) {
                            if (cResult[96] === tmp39) {
                              if (cResult[97] === tmp40) {
                                if (cResult[98] === tmp42) {
                                  let tmp43 = cResult[99];
                                }
                                tmp12 = tmp43;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  let obj4 = {
                    option,
                    initialValue: first1,
                    onMentionablePress: tmp39,
                    onActionSheetDismiss: tmp40,
                    channel,
                    autoFocus: autoFocusType === onPress.OPTIONAL_OPTION_ADDED,
                    hasError,
                    onPress,
                  };
                  const tmp46 = onDismiss(onStartEditing(tmp2[16]), obj4);
                  cResult[91] = channel;
                  cResult[92] = onPress;
                  cResult[93] = hasError;
                  cResult[94] = option;
                  cResult[95] = first1;
                  cResult[96] = tmp39;
                  cResult[97] = tmp40;
                  cResult[98] = autoFocusType === onPress.OPTIONAL_OPTION_ADDED;
                  cResult[99] = tmp46;
                  tmp43 = tmp46;
                }
                function le() {
                  return onEndEditing(option);
                }
                cResult[88] = onEndEditing;
                cResult[89] = option;
                cResult[90] = le;
                tmp40 = le;
              }
              function re(mentionable) {
                mentionable = mentionable.mentionable;
                if (null != mentionable) {
                  const type = mentionable.type;
                  if (AppLauncherMentionableListActionSheet.MentionableItemTypes.USER === type) {
                    const obj2 = { type: "userMention", userId: mentionable.result.user.id };
                    const items = [obj2];
                    onOptionValueChange(option, items);
                  } else if (AppLauncherMentionableListActionSheet.MentionableItemTypes.ROLE === type) {
                    const obj3 = { type: "roleMention", roleId: mentionable.result.id };
                    const items1 = [obj3];
                    onOptionValueChange(option, items1);
                  } else if (AppLauncherMentionableListActionSheet.MentionableItemTypes.GLOBAL === type) {
                    const result = mentionable.result;
                    if (result.text === obj4.MENTION_EVERYONE().text) {
                      const items2 = [{ type: "textMention", text: "@everyone" }];
                      onOptionValueChange(option, items2);
                    } else {
                      const obj = { type: "text", text: result.text };
                      const items3 = [obj];
                      onOptionValueChange(option, items3);
                    }
                    obj4 = utils_AutocompleteUtilsDefault;
                  }
                } else {
                  onOptionValueChange(option, []);
                }
              }
              cResult[85] = onOptionValueChange;
              cResult[86] = option;
              cResult[87] = re;
              tmp39 = re;
            } else if (tmp(tmp2[8]).ApplicationCommandOptionType.ROLE === type) {
              if (optionValues.current[option.name] != null) {
                const first2 = tmp25[0];
              }
              if (cResult[100] === onOptionValueChange) {
                if (cResult[101] === option) {
                  let tmp28 = cResult[102];
                }
                if (cResult[103] === onEndEditing) {
                  if (cResult[104] === option) {
                    let tmp29 = cResult[105];
                  }
                  class Oe {
                    constructor() {
                      tmp = onEndEditing(option);
                      return;
                    }
                  }
                  if (cResult[106] === channel) {
                    if (cResult[107] === onPress) {
                      if (cResult[108] === hasError) {
                        if (cResult[109] === option) {
                          if (cResult[110] === dismissableOptionWrapper.option) {
                            if (cResult[111] === first2) {
                              if (cResult[112] === tmp28) {
                                if (cResult[113] === tmp29) {
                                  if (cResult[114] === tmp31) {
                                    let tmp32 = cResult[115];
                                  }
                                  tmp12 = tmp32;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj5 = {
                    style: dismissableOptionWrapper.option,
                    option,
                    initialValue: first2,
                    onRolePress: tmp28,
                    onActionSheetDismiss: tmp29,
                    channel,
                    autoFocus: tmp31,
                    hasError,
                    onPress,
                  };
                  const tmp35 = onDismiss(onStartEditing(tmp2[17]), obj5, option.name);
                  cResult[106] = channel;
                  cResult[107] = onPress;
                  cResult[108] = hasError;
                  cResult[109] = option;
                  cResult[110] = dismissableOptionWrapper.option;
                  cResult[111] = first2;
                  cResult[112] = tmp28;
                  cResult[113] = tmp29;
                  cResult[114] = tmp31;
                  cResult[115] = tmp35;
                  tmp32 = tmp35;
                }
                class Oe {
                  constructor() {
                    tmp = onEndEditing(option);
                    return;
                  }
                }
                cResult[103] = onEndEditing;
                cResult[104] = option;
                cResult[105] = Oe;
                tmp29 = Oe;
              }
              function me(role) {
                role = role.role;
                if (null == role) {
                  let items = [];
                } else {
                  const obj = { type: "roleMention", roleId: role.id };
                  items = [obj];
                }
                onOptionValueChange(option, items);
              }
              cResult[100] = onOptionValueChange;
              cResult[101] = option;
              cResult[102] = me;
              tmp28 = me;
            } else if (tmp(tmp2[8]).ApplicationCommandOptionType.USER === type) {
              class Oe {
                constructor() {
                  tmp = onEndEditing(option);
                  return;
                }
              }
              if (optionValues.current[option.name] != null) {
                const first3 = tmp15[0];
              }
              if (cResult[116] === onOptionValueChange) {
                if (cResult[117] === option) {
                  let tmp18 = cResult[118];
                }
                if (cResult[119] === onEndEditing) {
                  if (cResult[120] === option) {
                    let tmp19 = cResult[121];
                  }
                  class Oe {
                    constructor() {
                      tmp = onEndEditing(option);
                      return;
                    }
                  }
                  if (cResult[122] === channel) {
                    if (cResult[123] === onPress) {
                      if (cResult[124] === hasError) {
                        if (cResult[125] === option) {
                          if (cResult[126] === dismissableOptionWrapper.option) {
                            if (cResult[127] === first3) {
                              if (cResult[128] === tmp18) {
                                if (cResult[129] === tmp19) {
                                  if (cResult[130] === tmp21) {
                                    let tmp22 = cResult[131];
                                  }
                                  tmp12 = tmp22;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  class Ee {
                    constructor(arg0) {
                      user = option.user;
                      tmp = onOptionValueChange;
                      tmp2 = option;
                      if (null == user) {
                        items = [];
                      } else {
                        id = user;
                        if (typeof user !== "string") {
                          id = user.id;
                        }
                        obj = { type: "userMention", userId: null };
                        obj.userId = id;
                        items = [];
                        items[0] = obj;
                      }
                      tmpResult = tmp(tmp2, items);
                      return;
                    }
                  }
                  const obj6 = {
                    style: dismissableOptionWrapper.option,
                    option,
                    initialValue: first3,
                    onUserPress: tmp18,
                    onActionSheetDismiss: tmp19,
                    channel,
                    autoFocus: tmp21,
                    hasError,
                    onPress,
                  };
                  const tmp24 = onDismiss(onStartEditing(tmp2[18]), obj6, option.name);
                  cResult[122] = channel;
                  cResult[123] = onPress;
                  cResult[124] = hasError;
                  cResult[125] = option;
                  cResult[126] = dismissableOptionWrapper.option;
                  cResult[127] = first3;
                  cResult[128] = tmp18;
                  cResult[129] = tmp19;
                  cResult[130] = tmp21;
                  cResult[131] = tmp24;
                  tmp22 = tmp24;
                }
                class Oe {
                  constructor() {
                    tmp = onEndEditing(option);
                    return;
                  }
                }
                cResult[119] = onEndEditing;
                class Ee {
                  constructor(arg0) {
                    user = option.user;
                    tmp = onOptionValueChange;
                    tmp2 = option;
                    if (null == user) {
                      items = [];
                    } else {
                      id = user;
                      if (typeof user !== "string") {
                        id = user.id;
                      }
                      obj = { type: "userMention", userId: null };
                      obj.userId = id;
                      items = [];
                      items[0] = obj;
                    }
                    tmpResult = tmp(tmp2, items);
                    return;
                  }
                }
                cResult[120] = option;
                cResult[121] = Ae;
                tmp19 = Ae;
              }
              class Ee {
                constructor(arg0) {
                  user = option.user;
                  tmp = onOptionValueChange;
                  tmp2 = option;
                  if (null == user) {
                    items = [];
                  } else {
                    id = user;
                    if (typeof user !== "string") {
                      id = user.id;
                    }
                    obj = { type: "userMention", userId: null };
                    obj.userId = id;
                    items = [];
                    items[0] = obj;
                  }
                  tmpResult = tmp(tmp2, items);
                  return;
                }
              }
              cResult[116] = onOptionValueChange;
              cResult[117] = option;
              cResult[118] = Ee;
              tmp18 = Ee;
            } else if (tmp(tmp2[8]).ApplicationCommandOptionType.CHANNEL === type) {
              class Oe {
                constructor() {
                  tmp = onEndEditing(option);
                  return;
                }
              }
              if (optionValues.current[option.name] != null) {
                const first4 = tmp5[0];
              }
              if (cResult[132] === onOptionValueChange) {
                if (cResult[133] === option) {
                  let tmp8 = cResult[134];
                }
                if (cResult[135] === onEndEditing) {
                  if (cResult[136] === option) {
                    let tmp9 = cResult[137];
                  }
                  class Oe {
                    constructor() {
                      tmp = onEndEditing(option);
                      return;
                    }
                  }
                  if (cResult[138] === channel) {
                    if (cResult[139] === onPress) {
                      if (cResult[140] === hasError) {
                        if (cResult[141] === option) {
                          if (cResult[142] === dismissableOptionWrapper.option) {
                            if (cResult[143] === first4) {
                              if (cResult[144] === tmp8) {
                                if (cResult[145] === tmp9) {
                                  if (cResult[146] === tmp11) {
                                    tmp12 = cResult[147];
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  class Ee {
                    constructor(arg0) {
                      user = option.user;
                      tmp = onOptionValueChange;
                      tmp2 = option;
                      if (null == user) {
                        items = [];
                      } else {
                        id = user;
                        if (typeof user !== "string") {
                          id = user.id;
                        }
                        obj = { type: "userMention", userId: null };
                        obj.userId = id;
                        items = [];
                        items[0] = obj;
                      }
                      tmpResult = tmp(tmp2, items);
                      return;
                    }
                  }
                  const obj7 = {
                    style: dismissableOptionWrapper.option,
                    option,
                    initialValue: first4,
                    onChannelPress: tmp8,
                    onActionSheetDismiss: tmp9,
                    channel,
                    autoFocus: tmp11,
                    hasError,
                    onPress,
                  };
                  const tmp14 = onDismiss(onStartEditing(tmp2[19]), obj7, option.name);
                  cResult[138] = channel;
                  cResult[139] = onPress;
                  cResult[140] = hasError;
                  cResult[141] = option;
                  cResult[142] = dismissableOptionWrapper.option;
                  cResult[143] = first4;
                  cResult[144] = tmp8;
                  cResult[145] = tmp9;
                  cResult[146] = tmp11;
                  cResult[147] = tmp14;
                  tmp12 = tmp14;
                }
                class Oe {
                  constructor() {
                    tmp = onEndEditing(option);
                    return;
                  }
                }
                cResult[135] = onEndEditing;
                class Ee {
                  constructor(arg0) {
                    user = option.user;
                    tmp = onOptionValueChange;
                    tmp2 = option;
                    if (null == user) {
                      items = [];
                    } else {
                      id = user;
                      if (typeof user !== "string") {
                        id = user.id;
                      }
                      obj = { type: "userMention", userId: null };
                      obj.userId = id;
                      items = [];
                      items[0] = obj;
                    }
                    tmpResult = tmp(tmp2, items);
                    return;
                  }
                }
                cResult[136] = option;
                cResult[137] = Ne;
                tmp9 = Ne;
              }
              class Ee {
                constructor(arg0) {
                  user = option.user;
                  tmp = onOptionValueChange;
                  tmp2 = option;
                  if (null == user) {
                    items = [];
                  } else {
                    id = user;
                    if (typeof user !== "string") {
                      id = user.id;
                    }
                    obj = { type: "userMention", userId: null };
                    obj.userId = id;
                    items = [];
                    items[0] = obj;
                  }
                  tmpResult = tmp(tmp2, items);
                  return;
                }
              }
              cResult[132] = onOptionValueChange;
              cResult[133] = option;
              cResult[134] = Pe;
              tmp8 = Pe;
            } else {
              return null;
            }
          }
          if (null == onDismiss) {
            return tmp12;
          } else {
            if (cResult[148] === tmp12) {
              if (cResult[149] === dismissableOptionWrapper.optionViewContainer) {
                let tmp89 = cResult[150];
              }
              if (cResult[151] === onDismiss) {
                if (cResult[152] === option) {
                  let tmp92 = cResult[153];
                }
                class O {
                  constructor() {
                    return onDismiss(option);
                  }
                }
                class Ee {
                  constructor(arg0) {
                    user = option.user;
                    tmp = onOptionValueChange;
                    tmp2 = option;
                    if (null == user) {
                      items = [];
                    } else {
                      id = user;
                      if (typeof user !== "string") {
                        id = user.id;
                      }
                      obj = { type: "userMention", userId: null };
                      obj.userId = id;
                      items = [];
                      items[0] = obj;
                    }
                    tmpResult = tmp(tmp2, items);
                    return;
                  }
                }
                if (cResult[155] === dismissableOptionWrapper.dismissButton) {
                  if (cResult[156] === tmp92) {
                    let tmp96 = cResult[157];
                  }
                  if (cResult[158] === dismissableOptionWrapper.dismissableOptionWrapper) {
                    if (cResult[159] === tmp89) {
                    }
                  }
                  class O {
                    constructor() {
                      return onDismiss(option);
                    }
                  }
                  const obj9 = { style: null, children: null };
                  class Ee {
                    constructor(arg0) {
                      user = option.user;
                      tmp = onOptionValueChange;
                      tmp2 = option;
                      if (null == user) {
                        items = [];
                      } else {
                        id = user;
                        if (typeof user !== "string") {
                          id = user.id;
                        }
                        obj = { type: "userMention", userId: null };
                        obj.userId = id;
                        items = [];
                        items[0] = obj;
                      }
                      tmpResult = tmp(tmp2, items);
                      return;
                    }
                  }
                  let items = [tmp89, tmp96];
                  obj9.children = items;
                  const tmp101 = closure_6(onOptionValueChange, obj9);
                  dismissableOptionWrapper = dismissableOptionWrapper.dismissableOptionWrapper;
                  cResult[158] = dismissableOptionWrapper;
                  cResult[159] = tmp89;
                  cResult[160] = tmp96;
                  cResult[161] = tmp101;
                }
                const obj10 = { style: dismissableOptionWrapper.dismissButton, onPress: tmp92, children: tmp95 };
                const tmp98 = onDismiss(tmp(tmp2[21]).PressableOpacity, obj10);
                cResult[155] = dismissableOptionWrapper.dismissButton;
                cResult[156] = tmp92;
                cResult[157] = tmp98;
                tmp96 = tmp98;
              }
              class O {
                constructor() {
                  return onDismiss(option);
                }
              }
              cResult[151] = onDismiss;
              class Ee {
                constructor(arg0) {
                  user = option.user;
                  tmp = onOptionValueChange;
                  tmp2 = option;
                  if (null == user) {
                    items = [];
                  } else {
                    id = user;
                    if (typeof user !== "string") {
                      id = user.id;
                    }
                    obj = { type: "userMention", userId: null };
                    obj.userId = id;
                    items = [];
                    items[0] = obj;
                  }
                  tmpResult = tmp(tmp2, items);
                  return;
                }
              }
              cResult[152] = option;
              cResult[153] = O;
              tmp92 = O;
            }
            class Oe {
              constructor() {
                tmp = onEndEditing(option);
                return;
              }
            }
            const obj11 = { style: dismissableOptionWrapper.optionViewContainer, children: null };
            class Ee {
              constructor(arg0) {
                user = option.user;
                tmp = onOptionValueChange;
                tmp2 = option;
                if (null == user) {
                  items = [];
                } else {
                  id = user;
                  if (typeof user !== "string") {
                    id = user.id;
                  }
                  obj = { type: "userMention", userId: null };
                  obj.userId = id;
                  items = [];
                  items[0] = obj;
                }
                tmpResult = tmp(tmp2, items);
                return;
              }
            }
            const tmp91 = onDismiss(onOptionValueChange, obj11);
            cResult[148] = tmp12;
            cResult[149] = dismissableOptionWrapper.optionViewContainer;
            cResult[150] = tmp91;
            tmp89 = tmp91;
          }
        }
      }
      if (null != option.choices) {
        class O {
          constructor() {
            return onDismiss(option);
          }
        }
        if (cResult[0] === onEndEditing) {
          if (cResult[1] === onOptionValueChange) {
            if (cResult[2] === option) {
              let tmp79 = cResult[3];
            }
            if (cResult[4] === onPress) {
              if (cResult[5] === onStartEditing) {
                if (cResult[6] === option) {
                  let tmp80 = cResult[7];
                }
                if (cResult[8] === onEndEditing) {
                  if (cResult[9] === option) {
                    let tmp81 = cResult[10];
                  }
                  class O {
                    constructor() {
                      return onDismiss(option);
                    }
                  }
                  if (cResult[11] === hasError) {
                    if (cResult[12] === option) {
                      if (cResult[13] === dismissableOptionWrapper.option) {
                        if (cResult[14] === tmp78) {
                          if (cResult[15] === tmp79) {
                            if (cResult[16] === tmp80) {
                              if (cResult[17] === tmp81) {
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  class R {
                    constructor(arg0) {
                      tmp = option;
                      tmp2 = onEndEditing(option);
                      str = undefined;
                      tmp3 = onOptionValueChange;
                      if (option != null) {
                        str = option.displayName;
                      }
                      if (str == null) {
                        str = "";
                      }
                      items = [];
                      items[0] = { type: "text", text: str };
                      tmp3Result = tmp3(tmp, items);
                      return;
                    }
                  }
                  class Ee {
                    constructor(arg0) {
                      user = option.user;
                      tmp = onOptionValueChange;
                      tmp2 = option;
                      if (null == user) {
                        items = [];
                      } else {
                        id = user;
                        if (typeof user !== "string") {
                          id = user.id;
                        }
                        obj = { type: "userMention", userId: null };
                        obj.userId = id;
                        items = [];
                        items[0] = obj;
                      }
                      tmpResult = tmp(tmp2, items);
                      return;
                    }
                  }
                  const obj12 = {
                    style: dismissableOptionWrapper.option,
                    option,
                    initialValue: tmp78,
                    onSelect: tmp79,
                    onOpenChoicesSheet: tmp80,
                    onDismissChoicesSheet: tmp81,
                    autoFocus: tmp84,
                    hasError,
                  };
                  const tmp86 = onDismiss(onStartEditing(tmp2[9]), obj12, option.name);
                  cResult[11] = hasError;
                  cResult[12] = option;
                  hasError = dismissableOptionWrapper.option;
                  cResult[13] = hasError;
                  cResult[14] = tmp78;
                  cResult[15] = tmp79;
                  cResult[16] = tmp80;
                  cResult[17] = tmp81;
                  cResult[18] = tmp84;
                  cResult[19] = tmp86;
                }
                class O {
                  constructor() {
                    return onDismiss(option);
                  }
                }
                class R {
                  constructor(arg0) {
                    tmp = option;
                    tmp2 = onEndEditing(option);
                    str = undefined;
                    tmp3 = onOptionValueChange;
                    if (option != null) {
                      str = option.displayName;
                    }
                    if (str == null) {
                      str = "";
                    }
                    items = [];
                    items[0] = { type: "text", text: str };
                    tmp3Result = tmp3(tmp, items);
                    return;
                  }
                }
                class Ee {
                  constructor(arg0) {
                    user = option.user;
                    tmp = onOptionValueChange;
                    tmp2 = option;
                    if (null == user) {
                      items = [];
                    } else {
                      id = user;
                      if (typeof user !== "string") {
                        id = user.id;
                      }
                      obj = { type: "userMention", userId: null };
                      obj.userId = id;
                      items = [];
                      items[0] = obj;
                    }
                    tmpResult = tmp(tmp2, items);
                    return;
                  }
                }
                cResult[9] = option;
                cResult[10] = tmp82;
                tmp81 = tmp82;
              }
            }
            class O {
              constructor() {
                return onDismiss(option);
              }
            }
            class R {
              constructor(arg0) {
                tmp = option;
                tmp2 = onEndEditing(option);
                str = undefined;
                tmp3 = onOptionValueChange;
                if (option != null) {
                  str = option.displayName;
                }
                if (str == null) {
                  str = "";
                }
                items = [];
                items[0] = { type: "text", text: str };
                tmp3Result = tmp3(tmp, items);
                return;
              }
            }
            class Ee {
              constructor(arg0) {
                user = option.user;
                tmp = onOptionValueChange;
                tmp2 = option;
                if (null == user) {
                  items = [];
                } else {
                  id = user;
                  if (typeof user !== "string") {
                    id = user.id;
                  }
                  obj = { type: "userMention", userId: null };
                  obj.userId = id;
                  items = [];
                  items[0] = obj;
                }
                tmpResult = tmp(tmp2, items);
                return;
              }
            }
            cResult[5] = onStartEditing;
            cResult[6] = option;
            cResult[7] = F;
            tmp80 = F;
          }
        }
        class R {
          constructor(arg0) {
            tmp = option;
            tmp2 = onEndEditing(option);
            str = undefined;
            tmp3 = onOptionValueChange;
            if (option != null) {
              str = option.displayName;
            }
            if (str == null) {
              str = "";
            }
            items = [];
            items[0] = { type: "text", text: str };
            tmp3Result = tmp3(tmp, items);
            return;
          }
        }
        class Ee {
          constructor(arg0) {
            user = option.user;
            tmp = onOptionValueChange;
            tmp2 = option;
            if (null == user) {
              items = [];
            } else {
              id = user;
              if (typeof user !== "string") {
                id = user.id;
              }
              obj = { type: "userMention", userId: null };
              obj.userId = id;
              items = [];
              items[0] = obj;
            }
            tmpResult = tmp(tmp2, items);
            return;
          }
        }
        cResult[0] = onEndEditing;
        cResult[1] = onOptionValueChange;
        cResult[2] = option;
        cResult[3] = R;
        tmp79 = R;
      } else if (option.autocomplete) {
        class O {
          constructor() {
            return onDismiss(option);
          }
        }
        class R {
          constructor(arg0) {
            tmp = option;
            tmp2 = onEndEditing(option);
            str = undefined;
            tmp3 = onOptionValueChange;
            if (option != null) {
              str = option.displayName;
            }
            if (str == null) {
              str = "";
            }
            items = [];
            items[0] = { type: "text", text: str };
            tmp3Result = tmp3(tmp, items);
            return;
          }
        }
        class U {
          constructor(arg0) {
            tmp = option;
            tmp2 = onEndEditing(option);
            str = undefined;
            tmp3 = onOptionValueChange;
            if (option != null) {
              str = option.displayName;
            }
            if (str == null) {
              str = "";
            }
            items = [];
            items[0] = { type: "text", text: str };
            tmp3Result = tmp3(tmp, items);
            return;
          }
        }
        cResult[20] = onEndEditing;
        cResult[21] = onOptionValueChange;
        cResult[22] = option;
        cResult[23] = U;
      } else {
        class O {
          constructor() {
            return onDismiss(option);
          }
        }
        class R {
          constructor(arg0) {
            tmp = option;
            tmp2 = onEndEditing(option);
            str = undefined;
            tmp3 = onOptionValueChange;
            if (option != null) {
              str = option.displayName;
            }
            if (str == null) {
              str = "";
            }
            items = [];
            items[0] = { type: "text", text: str };
            tmp3Result = tmp3(tmp, items);
            return;
          }
        }
        class U {
          constructor(arg0) {
            tmp = option;
            tmp2 = onEndEditing(option);
            str = undefined;
            tmp3 = onOptionValueChange;
            if (option != null) {
              str = option.displayName;
            }
            if (str == null) {
              str = "";
            }
            items = [];
            items[0] = { type: "text", text: str };
            tmp3Result = tmp3(tmp, items);
            return;
          }
        }
        if (cResult[43] === onEndEditing) {
          if (cResult[44] === option) {
            let tmp66 = cResult[45];
          }
          if (cResult[46] === onOptionValueChange) {
            if (cResult[47] === onStartEditing) {
              if (cResult[48] === option) {
                let tmp67 = cResult[49];
              }
              class O {
                constructor() {
                  return onDismiss(option);
                }
              }
              class R {
                constructor(arg0) {
                  tmp = option;
                  tmp2 = onEndEditing(option);
                  str = undefined;
                  tmp3 = onOptionValueChange;
                  if (option != null) {
                    str = option.displayName;
                  }
                  if (str == null) {
                    str = "";
                  }
                  items = [];
                  items[0] = { type: "text", text: str };
                  tmp3Result = tmp3(tmp, items);
                  return;
                }
              }
              class U {
                constructor(arg0) {
                  tmp = option;
                  tmp2 = onEndEditing(option);
                  str = undefined;
                  tmp3 = onOptionValueChange;
                  if (option != null) {
                    str = option.displayName;
                  }
                  if (str == null) {
                    str = "";
                  }
                  items = [];
                  items[0] = { type: "text", text: str };
                  tmp3Result = tmp3(tmp, items);
                  return;
                }
              }
              const hasItem = obj8.includes(autoFocusType);
              class Q {
                constructor() {
                  return onEndEditing(option);
                }
              }
              const obj13 = {
                style: tmp62,
                option,
                guildId: tmp63,
                initialValue: tmp65,
                onEndEditing: tmp66,
                onChangeText: tmp67,
                onFocus,
                autoFocus: hasItem,
                hasError,
                onPressIn: onPress,
              };
              const tmp73 = onDismiss(onStartEditing(tmp2[11]), obj13, option.name);
              cResult[51] = channel.guild_id;
              cResult[52] = onPress;
              cResult[53] = hasError;
              cResult[54] = onFocus;
              cResult[55] = option;
              cResult[56] = dismissableOptionWrapper.option;
              cResult[57] = tmp65;
              cResult[58] = tmp66;
              cResult[59] = tmp67;
              cResult[60] = hasItem;
              cResult[61] = tmp73;
            }
          }
          class O {
            constructor() {
              return onDismiss(option);
            }
          }
          class R {
            constructor(arg0) {
              tmp = option;
              tmp2 = onEndEditing(option);
              str = undefined;
              tmp3 = onOptionValueChange;
              if (option != null) {
                str = option.displayName;
              }
              if (str == null) {
                str = "";
              }
              items = [];
              items[0] = { type: "text", text: str };
              tmp3Result = tmp3(tmp, items);
              return;
            }
          }
          class U {
            constructor(arg0) {
              tmp = option;
              tmp2 = onEndEditing(option);
              str = undefined;
              tmp3 = onOptionValueChange;
              if (option != null) {
                str = option.displayName;
              }
              if (str == null) {
                str = "";
              }
              items = [];
              items[0] = { type: "text", text: str };
              tmp3Result = tmp3(tmp, items);
              return;
            }
          }
          cResult[47] = onStartEditing;
          class Q {
            constructor() {
              return onEndEditing(option);
            }
          }
          cResult[48] = option;
          cResult[49] = X;
          tmp67 = X;
        }
        class Q {
          constructor() {
            return onEndEditing(option);
          }
        }
        cResult[43] = onEndEditing;
        cResult[44] = option;
        cResult[45] = Q;
        tmp66 = Q;
      }
      let obj = option(onEndEditing[7]);
    }
  : (option) => {
      let name = option.option;
      ({ onStartEditing: importDefault, onEndEditing: dependencyMap, onOptionValueChange: View, onPress } = option);
      const onDismiss = option.onDismiss;
      ({ channel, autoFocusType, optionValues, hasError } = option);
      ({ onPressAttachmentOption, onFocus, command } = option);
      const tmp = closure_7();
      let type = name.type;
      if (name(1985).ApplicationCommandOptionType.STRING !== type) {
        if (tmp2(1985).ApplicationCommandOptionType.INTEGER !== type) {
          if (tmp2(1985).ApplicationCommandOptionType.NUMBER !== type) {
            if (tmp2(1985).ApplicationCommandOptionType.ATTACHMENT === type) {
              let obj2 = {
                style: tmp.option,
                option: name,
                onSelectAttachment(text) {
                  dependencyMap(name);
                  if (null != text) {
                    const obj = { type: "text", text };
                    const items = [obj];
                    let items1 = items;
                  } else {
                    items1 = [];
                  }
                  View(name, items1);
                },
                channel,
                autoFocus: autoFocusType === onPress.OPTIONAL_OPTION_ADDED,
                hasError,
                onPress: onPressAttachmentOption,
              };
              let tmp28Result = onDismiss(AppLauncherAttachmentOptionDefault, obj2, name.name);
              let tmp13 = onDismiss;
            } else if (tmp2(1985).ApplicationCommandOptionType.BOOLEAN === type) {
              let obj3 = { style: tmp.option, option: name, initialValue: null, onPress: null, hasError: null };
              let first;
              if (optionValues.current[name.name] != null) {
                first = tmp38[0];
              }
              obj3.initialValue = first;
              obj3.onPress = function onPress(arg0) {
                onPress();
                dependencyMap(name);
                const items = [{ type: "text", text: arg0.toString() }];
                View(name, items);
              };
              obj3.hasError = hasError;
              tmp28Result = tmp35(AppLauncherBooleanOptionDefault, obj3, name.name);
              tmp13 = tmp35;
            } else if (tmp2(1985).ApplicationCommandOptionType.MENTIONABLE === type) {
              let obj4 = {
                option: name,
                initialValue: null,
                onMentionablePress: null,
                onActionSheetDismiss: null,
                channel: null,
                autoFocus: null,
                hasError: null,
                onPress: null,
              };
              let first1;
              if (optionValues.current[name.name] != null) {
                first1 = tmp31[0];
              }
              obj4.initialValue = first1;
              obj4.onMentionablePress = function onMentionablePress(mentionable) {
                mentionable = mentionable.mentionable;
                if (null != mentionable) {
                  const type = mentionable.type;
                  if (AppLauncherMentionableListActionSheet.MentionableItemTypes.USER === type) {
                    const obj2 = { type: "userMention", userId: mentionable.result.user.id };
                    const items = [obj2];
                    View(name, items);
                  } else if (AppLauncherMentionableListActionSheet.MentionableItemTypes.ROLE === type) {
                    const obj3 = { type: "roleMention", roleId: mentionable.result.id };
                    const items1 = [obj3];
                    View(name, items1);
                  } else if (AppLauncherMentionableListActionSheet.MentionableItemTypes.GLOBAL === type) {
                    const result = mentionable.result;
                    if (result.text === obj4.MENTION_EVERYONE().text) {
                      const items2 = [{ type: "textMention", text: "@everyone" }];
                      View(name, items2);
                    } else {
                      const obj = { type: "text", text: result.text };
                      const items3 = [obj];
                      View(name, items3);
                    }
                    obj4 = utils_AutocompleteUtilsDefault;
                  }
                } else {
                  View(name, []);
                }
              };
              obj4.onActionSheetDismiss = function onActionSheetDismiss() {
                return dependencyMap(name);
              };
              obj4.channel = channel;
              obj4.autoFocus = autoFocusType === onPress.OPTIONAL_OPTION_ADDED;
              obj4.hasError = hasError;
              obj4.onPress = onPress;
              tmp28Result = tmp28(AppLauncherMentionableOptionDefault, obj4);
              tmp13 = tmp28;
            } else if (tmp2(1985).ApplicationCommandOptionType.ROLE === type) {
              const obj5 = {
                style: tmp.option,
                option: name,
                initialValue: null,
                onRolePress: null,
                onActionSheetDismiss: null,
                channel: null,
                autoFocus: null,
                hasError: null,
                onPress: null,
              };
              let first2;
              if (optionValues.current[name.name] != null) {
                first2 = tmp24[0];
              }
              obj5.initialValue = first2;
              obj5.onRolePress = function onRolePress(role) {
                role = role.role;
                if (null == role) {
                  let items = [];
                } else {
                  const obj = { type: "roleMention", roleId: role.id };
                  items = [obj];
                }
                View(name, items);
              };
              obj5.onActionSheetDismiss = function onActionSheetDismiss() {
                dependencyMap(name);
              };
              obj5.channel = channel;
              obj5.autoFocus = autoFocusType === onPress.OPTIONAL_OPTION_ADDED;
              obj5.hasError = hasError;
              obj5.onPress = onPress;
              tmp28Result = tmp21(AppLauncherRoleOptionDefault, obj5, name.name);
              tmp13 = tmp21;
            } else if (tmp2(1985).ApplicationCommandOptionType.USER === type) {
              const obj6 = {
                style: tmp.option,
                option: name,
                initialValue: null,
                onUserPress: null,
                onActionSheetDismiss: null,
                channel: null,
                autoFocus: null,
                hasError: null,
                onPress: null,
              };
              let first3;
              if (optionValues.current[name.name] != null) {
                first3 = tmp17[0];
              }
              obj6.initialValue = first3;
              obj6.onUserPress = function onUserPress(user) {
                user = user.user;
                if (null == user) {
                  let items = [];
                } else {
                  let id = user;
                  if (typeof user !== "string") {
                    id = user.id;
                  }
                  const obj = { type: "userMention", userId: id };
                  items = [obj];
                }
                View(name, items);
              };
              obj6.onActionSheetDismiss = function onActionSheetDismiss() {
                return dependencyMap(name);
              };
              obj6.channel = channel;
              obj6.autoFocus = autoFocusType === onPress.OPTIONAL_OPTION_ADDED;
              obj6.hasError = hasError;
              obj6.onPress = onPress;
              tmp28Result = tmp14(AppLauncherUserOptionDefault, obj6, name.name);
              tmp13 = tmp14;
            } else if (tmp2(1985).ApplicationCommandOptionType.CHANNEL === type) {
              let obj = {
                style: tmp.option,
                option: name,
                initialValue: null,
                onChannelPress: null,
                onActionSheetDismiss: null,
                channel: null,
                autoFocus: null,
                hasError: null,
                onPress: null,
              };
              let first4;
              if (optionValues.current[name.name] != null) {
                first4 = tmp8[0];
              }
              obj.initialValue = first4;
              obj.onChannelPress = function onChannelPress(channel) {
                channel = channel.channel;
                if (null != channel) {
                  const obj = { type: "channelMention", channelId: channel.id };
                  const items = [obj];
                  let items1 = items;
                } else {
                  items1 = [];
                }
                View(name, items1);
              };
              obj.onActionSheetDismiss = function onActionSheetDismiss() {
                dependencyMap(name);
              };
              obj.channel = channel;
              obj.autoFocus = autoFocusType === onPress.OPTIONAL_OPTION_ADDED;
              obj.hasError = hasError;
              obj.onPress = onPress;
              tmp28Result = tmp5(AppLauncherChannelOptionDefault, obj, name.name);
              tmp13 = tmp5;
            } else {
              return null;
            }
            let tmp62 = tmp28Result;
            if (null != onDismiss) {
              const obj7 = { style: tmp.dismissableOptionWrapper, children: null };
              const obj8 = { style: tmp.optionViewContainer, children: tmp28Result };
              let items = [tmp13(View, obj8)];
              const obj9 = {
                style: tmp.dismissButton,
                onPress() {
                  return onDismiss(name);
                },
                children: tmp13(tmp2(4797).CircleXIcon, { size: "md" }),
              };
              items[1] = tmp13(tmp2(5909).PressableOpacity, obj9);
              obj7.children = items;
              tmp62 = closure_6(View, obj7);
            }
            return tmp62;
          }
        }
      }
      let tmp44 = null;
      if (null != name.choices) {
        const obj10 = {
          style: tmp.option,
          option: name,
          initialValue: null,
          onSelect: null,
          onOpenChoicesSheet: null,
          onDismissChoicesSheet: null,
          autoFocus: null,
          hasError: null,
        };
        let first5;
        if (optionValues.current[name.name] != tmp44) {
          first5 = tmp58[0];
        }
        obj10.initialValue = first5;
        obj10.onSelect = function onSelect(displayName) {
          dependencyMap(name);
          let str;
          if (displayName != null) {
            str = displayName.displayName;
          }
          if (str == null) {
            str = "";
          }
          const items = [{ type: "text", text: str }];
          View(name, items);
        };
        obj10.onOpenChoicesSheet = function onOpenChoicesSheet() {
          onPress();
          importDefault(name);
        };
        obj10.onDismissChoicesSheet = function onDismissChoicesSheet() {
          return dependencyMap(name);
        };
        optionValues = onPress.OPTIONAL_OPTION_ADDED;
        tmp44 = autoFocusType === optionValues;
        obj10.autoFocus = tmp44;
        obj10.hasError = hasError;
        name = name.name;
        onDismiss(AppLauncherChoicesOptionDefault, obj10, name);
      } else if (name.autocomplete) {
        const obj11 = {
          style: tmp.option,
          channel,
          option: name,
          activeCommand: command,
          optionValues,
          initialValue: null,
          autoFocus: null,
          onSelect: null,
          onOpenAutocompleteSheet: null,
          onDismissAutocompleteSheet: null,
          hasError: null,
        };
        let first6;
        if (optionValues.current[name.name] != tmp44) {
          first6 = tmp52[0];
        }
        obj11.initialValue = first6;
        obj11.autoFocus = autoFocusType === onPress.OPTIONAL_OPTION_ADDED;
        obj11.onSelect = function onSelect(displayName) {
          dependencyMap(name);
          let str;
          if (displayName != null) {
            str = displayName.displayName;
          }
          if (str == null) {
            str = "";
          }
          const items = [{ type: "text", text: str }];
          View(name, items);
        };
        obj11.onOpenAutocompleteSheet = function onOpenAutocompleteSheet() {
          onPress();
          importDefault(name);
        };
        obj11.onDismissAutocompleteSheet = function onDismissAutocompleteSheet() {
          return dependencyMap(name);
        };
        obj11.hasError = hasError;
        tmp63(AppLauncherAutocompleteOptionDefault, obj11, name.name);
        const tmp64Result = AppLauncherAutocompleteOptionDefault;
      } else {
        const obj12 = {
          style: tmp.option,
          option: name,
          guildId: channel.guild_id,
          initialValue: null,
          onEndEditing: null,
          onChangeText: null,
          onFocus: null,
          autoFocus: null,
          hasError: null,
          onPressIn: null,
        };
        let first7;
        if (optionValues.current[name.name] != tmp44) {
          first7 = tmp46[0];
        }
        obj12.initialValue = first7;
        obj12.onEndEditing = function onEndEditing() {
          return dependencyMap(name);
        };
        obj12.onChangeText = function onChangeText(text) {
          importDefault(name);
          const items = [{ type: "text", text }];
          View(name, items);
        };
        obj12.onFocus = onFocus;
        let items1 = [,];
        ({ FIRST_REQUIRED_OPTION: arr[0], OPTIONAL_OPTION_ADDED: arr[1] } = onPress);
        obj12.autoFocus = items1.includes(autoFocusType);
        obj12.hasError = hasError;
        obj12.onPressIn = onPress;
        tmp63(AppLauncherTextInputOptionDefault, obj12, name.name);
        const tmp64Result2 = AppLauncherTextInputOptionDefault;
      }
    };
