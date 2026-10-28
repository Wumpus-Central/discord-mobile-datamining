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
let closure_4 = fn(1501).AppLauncherOptionAutoFocusType;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5004);
let obj2 = {
  dismissableOptionWrapper: { flexDirection: "row", alignItems: "center" },
  optionViewContainer: { flex: 1 },
  dismissButton: { marginLeft: 8, marginRight: -4, padding: 4, borderRadius: nativeDefault.radii.round },
};
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { marginLeft: 8, marginRight: -4, padding: 4, borderRadius: nativeDefault.radii.round };
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/options/AppLauncherCommandOption.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function AppLauncherCommandOption(option) {
      const cResult = option(onEndEditing[7]).c(154);
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
              if (cResult[59] === onEndEditing) {
                if (cResult[60] === onOptionValueChange) {
                  if (cResult[61] === option) {
                    let tmp55 = cResult[62];
                  }
                  if (cResult[63] === channel) {
                    if (cResult[64] === hasError) {
                      if (cResult[65] === onPressAttachmentOption) {
                        if (cResult[66] === option) {
                          if (cResult[67] === tmp55) {
                            if (cResult[68] === tmp57) {
                              let tmp58 = cResult[69];
                            }
                            let tmp12 = tmp58;
                          }
                        }
                      }
                    }
                  }
                  let obj2 = {
                    option,
                    onSelectAttachment: tmp55,
                    channel,
                    autoFocus: autoFocusType === onPress.OPTIONAL_OPTION_ADDED,
                    hasError,
                    onPress: onPressAttachmentOption,
                  };
                  const tmp61 = onDismiss(onStartEditing(tmp2[12]), obj2, option.name);
                  cResult[63] = channel;
                  cResult[64] = hasError;
                  cResult[65] = onPressAttachmentOption;
                  cResult[66] = option;
                  cResult[67] = tmp55;
                  cResult[68] = autoFocusType === onPress.OPTIONAL_OPTION_ADDED;
                  cResult[69] = tmp61;
                  tmp58 = tmp61;
                }
              }
              function ee(text) {
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
              cResult[59] = onEndEditing;
              cResult[60] = onOptionValueChange;
              cResult[61] = option;
              cResult[62] = ee;
              tmp55 = ee;
            } else if (tmp(tmp2[8]).ApplicationCommandOptionType.BOOLEAN === type) {
              if (optionValues.current[option.name] != null) {
                const first = tmp47[0];
              }
              if (cResult[70] === onPress) {
                if (cResult[71] === onEndEditing) {
                  if (cResult[72] === onOptionValueChange) {
                    if (cResult[73] === option) {
                      let tmp50 = cResult[74];
                    }
                    if (cResult[75] === hasError) {
                      if (cResult[76] === option) {
                        if (cResult[77] === first) {
                          if (cResult[78] === tmp50) {
                            let tmp51 = cResult[79];
                          }
                          tmp12 = tmp51;
                        }
                      }
                    }
                    let obj3 = { option, initialValue: first, onPress: tmp50, hasError };
                    const tmp54 = onDismiss(onStartEditing(tmp2[13]), obj3, option.name);
                    cResult[75] = hasError;
                    cResult[76] = option;
                    cResult[77] = first;
                    cResult[78] = tmp50;
                    cResult[79] = tmp54;
                    tmp51 = tmp54;
                  }
                }
              }
              function oe(arg0) {
                onPress();
                onEndEditing(option);
                const items = [{ type: "text", text: arg0.toString() }];
                onOptionValueChange(option, items);
              }
              cResult[70] = onPress;
              cResult[71] = onEndEditing;
              cResult[72] = onOptionValueChange;
              cResult[73] = option;
              cResult[74] = oe;
              tmp50 = oe;
            } else if (tmp(tmp2[8]).ApplicationCommandOptionType.MENTIONABLE === type) {
              if (optionValues.current[option.name] != null) {
                const first1 = tmp36[0];
              }
              if (cResult[80] === onOptionValueChange) {
                if (cResult[81] === option) {
                  let tmp39 = cResult[82];
                }
                if (cResult[83] === onEndEditing) {
                  if (cResult[84] === option) {
                    let tmp40 = cResult[85];
                  }
                  if (cResult[86] === channel) {
                    if (cResult[87] === onPress) {
                      if (cResult[88] === hasError) {
                        if (cResult[89] === option) {
                          if (cResult[90] === first1) {
                            if (cResult[91] === tmp39) {
                              if (cResult[92] === tmp40) {
                                if (cResult[93] === tmp42) {
                                  let tmp43 = cResult[94];
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
                  cResult[86] = channel;
                  cResult[87] = onPress;
                  cResult[88] = hasError;
                  cResult[89] = option;
                  cResult[90] = first1;
                  cResult[91] = tmp39;
                  cResult[92] = tmp40;
                  cResult[93] = autoFocusType === onPress.OPTIONAL_OPTION_ADDED;
                  cResult[94] = tmp46;
                  tmp43 = tmp46;
                }
                function re() {
                  return onEndEditing(option);
                }
                cResult[83] = onEndEditing;
                cResult[84] = option;
                cResult[85] = re;
                tmp40 = re;
              }
              function se(mentionable) {
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
              cResult[80] = onOptionValueChange;
              cResult[81] = option;
              cResult[82] = se;
              tmp39 = se;
            } else if (tmp(tmp2[8]).ApplicationCommandOptionType.ROLE === type) {
              if (optionValues.current[option.name] != null) {
                const first2 = tmp25[0];
              }
              if (cResult[95] === onOptionValueChange) {
                if (cResult[96] === option) {
                  let tmp28 = cResult[97];
                }
                if (cResult[98] === onEndEditing) {
                  if (cResult[99] === option) {
                    let tmp29 = cResult[100];
                  }
                  if (cResult[101] === channel) {
                    if (cResult[102] === onPress) {
                      if (cResult[103] === hasError) {
                        if (cResult[104] === option) {
                          if (cResult[105] === first2) {
                            if (cResult[106] === tmp28) {
                              if (cResult[107] === tmp29) {
                                if (cResult[108] === tmp31) {
                                  let tmp32 = cResult[109];
                                }
                                tmp12 = tmp32;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj5 = {
                    option,
                    initialValue: first2,
                    onRolePress: tmp28,
                    onActionSheetDismiss: tmp29,
                    channel,
                    autoFocus: autoFocusType === onPress.OPTIONAL_OPTION_ADDED,
                    hasError,
                    onPress,
                  };
                  const tmp35 = onDismiss(onStartEditing(tmp2[17]), obj5, option.name);
                  cResult[101] = channel;
                  cResult[102] = onPress;
                  cResult[103] = hasError;
                  cResult[104] = option;
                  cResult[105] = first2;
                  cResult[106] = tmp28;
                  cResult[107] = tmp29;
                  cResult[108] = autoFocusType === onPress.OPTIONAL_OPTION_ADDED;
                  cResult[109] = tmp35;
                  tmp32 = tmp35;
                }
                function me() {
                  onEndEditing(option);
                }
                cResult[98] = onEndEditing;
                cResult[99] = option;
                cResult[100] = me;
                tmp29 = me;
              }
              function ue(role) {
                role = role.role;
                if (null == role) {
                  let items = [];
                } else {
                  const obj = { type: "roleMention", roleId: role.id };
                  items = [obj];
                }
                onOptionValueChange(option, items);
              }
              cResult[95] = onOptionValueChange;
              cResult[96] = option;
              cResult[97] = ue;
              tmp28 = ue;
            } else if (tmp(tmp2[8]).ApplicationCommandOptionType.USER === type) {
              if (optionValues.current[option.name] != null) {
                const first3 = tmp15[0];
              }
              if (cResult[110] === onOptionValueChange) {
                if (cResult[111] === option) {
                  let tmp18 = cResult[112];
                }
                if (cResult[113] === onEndEditing) {
                  if (cResult[114] === option) {
                    let tmp19 = cResult[115];
                  }
                  class Ee {
                    constructor() {
                      return onEndEditing(option);
                    }
                  }
                  if (cResult[116] === channel) {
                    if (cResult[117] === onPress) {
                      if (cResult[118] === hasError) {
                        if (cResult[119] === option) {
                          if (cResult[120] === first3) {
                            if (cResult[121] === tmp18) {
                              if (cResult[122] === tmp19) {
                                if (cResult[123] === tmp21) {
                                  let tmp22 = cResult[124];
                                }
                                tmp12 = tmp22;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  class Ae {
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
                  cResult[116] = channel;
                  cResult[117] = onPress;
                  cResult[118] = hasError;
                  cResult[119] = option;
                  cResult[120] = first3;
                  cResult[121] = tmp18;
                  cResult[122] = tmp19;
                  cResult[123] = tmp21;
                  cResult[124] = tmp24;
                  tmp22 = tmp24;
                }
                class Ee {
                  constructor() {
                    return onEndEditing(option);
                  }
                }
                cResult[113] = onEndEditing;
                class Ae {
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
                cResult[114] = option;
                cResult[115] = Ee;
                tmp19 = Ee;
              }
              class Ae {
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
              cResult[110] = onOptionValueChange;
              cResult[111] = option;
              cResult[112] = Ae;
              tmp18 = Ae;
            } else if (tmp(tmp2[8]).ApplicationCommandOptionType.CHANNEL === type) {
              class Ee {
                constructor() {
                  return onEndEditing(option);
                }
              }
              if (optionValues.current[option.name] != null) {
                const first4 = tmp5[0];
              }
              if (cResult[125] === onOptionValueChange) {
                if (cResult[126] === option) {
                  let tmp8 = cResult[127];
                }
                if (cResult[128] === onEndEditing) {
                  if (cResult[129] === option) {
                    let tmp9 = cResult[130];
                  }
                  class Ee {
                    constructor() {
                      return onEndEditing(option);
                    }
                  }
                  if (cResult[131] === channel) {
                    if (cResult[132] === onPress) {
                      if (cResult[133] === hasError) {
                        if (cResult[134] === option) {
                          if (cResult[135] === first4) {
                            if (cResult[136] === tmp8) {
                              if (cResult[137] === tmp9) {
                                if (cResult[138] === tmp11) {
                                  tmp12 = cResult[139];
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  class Ae {
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
                  cResult[131] = channel;
                  cResult[132] = onPress;
                  cResult[133] = hasError;
                  cResult[134] = option;
                  cResult[135] = first4;
                  cResult[136] = tmp8;
                  cResult[137] = tmp9;
                  cResult[138] = tmp11;
                  cResult[139] = tmp14;
                  tmp12 = tmp14;
                }
                class Ee {
                  constructor() {
                    return onEndEditing(option);
                  }
                }
                cResult[128] = onEndEditing;
                class Ae {
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
                cResult[129] = option;
                cResult[130] = Pe;
                tmp9 = Pe;
              }
              class Ae {
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
              cResult[125] = onOptionValueChange;
              cResult[126] = option;
              cResult[127] = De;
              tmp8 = De;
            } else {
              return null;
            }
          }
          if (null == onDismiss) {
            return tmp12;
          } else {
            if (cResult[140] === tmp12) {
              if (cResult[141] === dismissableOptionWrapper.optionViewContainer) {
                let tmp79 = cResult[142];
              }
              if (cResult[143] === onDismiss) {
                if (cResult[144] === option) {
                  let tmp82 = cResult[145];
                }
                class O {
                  constructor() {
                    return onDismiss(option);
                  }
                }
                class Ae {
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
                if (cResult[147] === dismissableOptionWrapper.dismissButton) {
                  if (cResult[148] === tmp82) {
                    let tmp86 = cResult[149];
                  }
                  if (cResult[150] === dismissableOptionWrapper.dismissableOptionWrapper) {
                    if (cResult[151] === tmp79) {
                    }
                  }
                  class O {
                    constructor() {
                      return onDismiss(option);
                    }
                  }
                  const obj8 = { style: null, children: null };
                  class Ae {
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
                  let items = [tmp79, tmp86];
                  obj8.children = items;
                  const tmp91 = closure_6(onOptionValueChange, obj8);
                  dismissableOptionWrapper = dismissableOptionWrapper.dismissableOptionWrapper;
                  cResult[150] = dismissableOptionWrapper;
                  cResult[151] = tmp79;
                  cResult[152] = tmp86;
                  cResult[153] = tmp91;
                }
                const obj9 = { style: dismissableOptionWrapper.dismissButton, onPress: tmp82, children: tmp85 };
                const tmp88 = onDismiss(tmp(tmp2[21]).PressableOpacity, obj9);
                cResult[147] = dismissableOptionWrapper.dismissButton;
                cResult[148] = tmp82;
                cResult[149] = tmp88;
                tmp86 = tmp88;
              }
              class O {
                constructor() {
                  return onDismiss(option);
                }
              }
              cResult[143] = onDismiss;
              class Ae {
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
              cResult[144] = option;
              cResult[145] = O;
              tmp82 = O;
            }
            class Ee {
              constructor() {
                return onEndEditing(option);
              }
            }
            const obj10 = { style: dismissableOptionWrapper.optionViewContainer, children: null };
            class Ae {
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
            const tmp81 = onDismiss(onOptionValueChange, obj10);
            cResult[140] = tmp12;
            cResult[141] = dismissableOptionWrapper.optionViewContainer;
            cResult[142] = tmp81;
            tmp79 = tmp81;
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
              let tmp69 = cResult[3];
            }
            if (cResult[4] === onPress) {
              if (cResult[5] === onStartEditing) {
                if (cResult[6] === option) {
                  let tmp70 = cResult[7];
                }
                if (cResult[8] === onEndEditing) {
                  if (cResult[9] === option) {
                    let tmp71 = cResult[10];
                  }
                  class O {
                    constructor() {
                      return onDismiss(option);
                    }
                  }
                  if (cResult[11] === hasError) {
                    if (cResult[12] === option) {
                      if (cResult[13] === tmp68) {
                        if (cResult[14] === tmp69) {
                          if (cResult[15] === tmp70) {
                            if (cResult[16] === tmp71) {
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
                  class Ae {
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
                  const obj11 = {
                    option,
                    initialValue: tmp68,
                    onSelect: tmp69,
                    onOpenChoicesSheet: tmp70,
                    onDismissChoicesSheet: tmp71,
                    autoFocus: tmp74,
                    hasError,
                  };
                  const tmp76 = onDismiss(onStartEditing(tmp2[9]), obj11, option.name);
                  cResult[11] = hasError;
                  cResult[12] = option;
                  cResult[13] = tmp68;
                  cResult[14] = tmp69;
                  cResult[15] = tmp70;
                  cResult[16] = tmp71;
                  cResult[17] = tmp74;
                  cResult[18] = tmp76;
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
                class Ae {
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
                cResult[10] = tmp72;
                tmp71 = tmp72;
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
            class Ae {
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
            tmp70 = F;
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
        class Ae {
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
        tmp69 = R;
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
        cResult[19] = onEndEditing;
        cResult[20] = onOptionValueChange;
        cResult[21] = option;
        cResult[22] = U;
      } else {
        class O {
          constructor() {
            return onDismiss(option);
          }
        }
        const guild_id = channel.guild_id;
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
        class Q {
          constructor() {
            return onEndEditing(option);
          }
        }
        cResult[41] = onEndEditing;
        cResult[42] = option;
        cResult[43] = Q;
      }
      let obj = option(onEndEditing[7]);
    }
  : function AppLauncherCommandOption(option) {
      let name = option.option;
      ({ onStartEditing: importDefault, onEndEditing: dependencyMap, onOptionValueChange: View, onPress } = option);
      const onDismiss = option.onDismiss;
      ({ channel, autoFocusType, optionValues, hasError } = option);
      ({ onPressAttachmentOption, onFocus, command } = option);
      const tmp = closure_7();
      let type = name.type;
      if (name(1997).ApplicationCommandOptionType.STRING !== type) {
        if (tmp2(1997).ApplicationCommandOptionType.INTEGER !== type) {
          if (tmp2(1997).ApplicationCommandOptionType.NUMBER !== type) {
            if (tmp2(1997).ApplicationCommandOptionType.ATTACHMENT === type) {
              let obj2 = {
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
            } else if (tmp2(1997).ApplicationCommandOptionType.BOOLEAN === type) {
              let obj3 = { option: name, initialValue: null, onPress: null, hasError: null };
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
            } else if (tmp2(1997).ApplicationCommandOptionType.MENTIONABLE === type) {
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
            } else if (tmp2(1997).ApplicationCommandOptionType.ROLE === type) {
              const obj5 = {
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
            } else if (tmp2(1997).ApplicationCommandOptionType.USER === type) {
              const obj6 = {
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
            } else if (tmp2(1997).ApplicationCommandOptionType.CHANNEL === type) {
              let obj = {
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
                children: tmp13(tmp2(7054).CircleXIcon, { size: "md" }),
              };
              items[1] = tmp13(tmp2(6944).PressableOpacity, obj9);
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
