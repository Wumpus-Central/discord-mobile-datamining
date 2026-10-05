// discord_app/modules/app_launcher/native/options/AppLauncherCommandOption.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AppLauncherNativeConstants from "../AppLauncherNativeConstants.tsx";
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
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let option;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
let closure_4 = AppLauncherNativeConstants.AppLauncherOptionAutoFocusType;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = {
  dismissableOptionWrapper: { flexDirection: "row", alignItems: "center" },
  optionViewContainer: { flex: 1 },
  dismissButton: obj2,
  option: { flex: 1 },
};
obj2 = { marginLeft: 8, marginRight: -4, padding: 4, borderRadius: nativeDefault.radii.round };
let closure_7 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (option) => {
      let autoFocusType;
      let channel;
      let command;
      let hasError;
      let items;
      let onDismiss;
      let onEndEditing;
      let onFocus;
      let onPressAttachmentOption;
      let optionValues;
      let tmp13;
      let obj = option(onEndEditing[7]);
      const cResult = obj.c(162);
      option = option.option;
      const onStartEditing = option.onStartEditing;
      onEndEditing = option.onEndEditing;
      const onOptionValueChange = option.onOptionValueChange;
      const onPress = option.onPress;
      ({ onPressAttachmentOption, onDismiss } = option);
      ({ onFocus, channel, autoFocusType, command, optionValues, hasError } = option);
      const tmp4 = closure_7();
      let type = option.type;
      if (option(onEndEditing[8]).ApplicationCommandOptionType.STRING !== type) {
        if (option(onEndEditing[8]).ApplicationCommandOptionType.INTEGER !== type) {
          let tmp89;
          if (option(onEndEditing[8]).ApplicationCommandOptionType.NUMBER !== type) {
            if (option(onEndEditing[8]).ApplicationCommandOptionType.ATTACHMENT === type) {
              if (cResult[62] === onEndEditing) {
                if (cResult[63] === onOptionValueChange) {
                  let tmp56;
                  if (cResult[64] === option) {
                    tmp56 = cResult[65];
                  }
                  if (cResult[66] === channel) {
                    if (cResult[67] === hasError) {
                      if (cResult[68] === onPressAttachmentOption) {
                        if (cResult[69] === option) {
                          if (cResult[70] === tmp4.option) {
                            if (cResult[71] === tmp56) {
                              let tmp59;
                              if ((cResult[72] === autoFocusType) === onPress.OPTIONAL_OPTION_ADDED) {
                                tmp59 = cResult[73];
                              }
                              tmp13 = tmp59;
                            }
                          }
                        }
                      }
                    }
                  }
                  let obj2 = {
                    style: tmp4.option,
                    option,
                    onSelectAttachment: tmp56,
                    channel,
                    autoFocus: autoFocusType === onPress.OPTIONAL_OPTION_ADDED,
                    hasError,
                    onPress: onPressAttachmentOption,
                  };
                  const tmp62 = onDismiss(onStartEditing(onEndEditing[12]), obj2, option.name);
                  cResult[66] = channel;
                  cResult[67] = hasError;
                  cResult[68] = onPressAttachmentOption;
                  cResult[69] = option;
                  cResult[70] = tmp4.option;
                  cResult[71] = tmp56;
                  cResult[72] = autoFocusType === onPress.OPTIONAL_OPTION_ADDED;
                  cResult[73] = tmp62;
                  tmp59 = tmp62;
                }
              }
              function ne(text) {
                let items1;
                onEndEditing(option);
                if (null != text) {
                  const items = [{ type: "text", text }];
                  items1 = items;
                  const obj = { type: "text", text };
                } else {
                  items1 = [];
                }
                onOptionValueChange(option, items1);
              }
              cResult[62] = onEndEditing;
              cResult[63] = onOptionValueChange;
              cResult[64] = option;
              cResult[65] = ne;
              tmp56 = ne;
            } else if (option(onEndEditing[8]).ApplicationCommandOptionType.BOOLEAN === type) {
              let first;
              if (optionValues.current[option.name] != null) {
                first = tmp48[0];
              }
              if (cResult[74] === onPress) {
                if (cResult[75] === onEndEditing) {
                  if (cResult[76] === onOptionValueChange) {
                    let tmp51;
                    if (cResult[77] === option) {
                      tmp51 = cResult[78];
                    }
                    if (cResult[79] === hasError) {
                      if (cResult[80] === option) {
                        if (cResult[81] === tmp4.option) {
                          if (cResult[82] === first) {
                            let tmp52;
                            if (cResult[83] === tmp51) {
                              tmp52 = cResult[84];
                            }
                            tmp13 = tmp52;
                          }
                        }
                      }
                    }
                    let obj3 = { style: tmp4.option, option, initialValue: first, onPress: tmp51, hasError };
                    const tmp55 = onDismiss(onStartEditing(onEndEditing[13]), obj3, option.name);
                    cResult[79] = hasError;
                    cResult[80] = option;
                    cResult[81] = tmp4.option;
                    cResult[82] = first;
                    cResult[83] = tmp51;
                    cResult[84] = tmp55;
                    tmp52 = tmp55;
                  }
                }
              }
              function ie(arg0) {
                onPress();
                onEndEditing(option);
                const items = [{ type: "text", text: arg0.toString() }];
                ({ type: "text", text: arg0.toString() });
                onOptionValueChange(option, items);
              }
              cResult[74] = onPress;
              cResult[75] = onEndEditing;
              cResult[76] = onOptionValueChange;
              cResult[77] = option;
              cResult[78] = ie;
              tmp51 = ie;
            } else if (option(onEndEditing[8]).ApplicationCommandOptionType.MENTIONABLE === type) {
              let first1;
              if (optionValues.current[option.name] != null) {
                first1 = tmp37[0];
              }
              if (cResult[85] === onOptionValueChange) {
                let tmp40;
                if (cResult[86] === option) {
                  tmp40 = cResult[87];
                }
                if (cResult[88] === onEndEditing) {
                  let tmp41;
                  if (cResult[89] === option) {
                    tmp41 = cResult[90];
                  }
                  if (cResult[91] === channel) {
                    if (cResult[92] === onPress) {
                      if (cResult[93] === hasError) {
                        if (cResult[94] === option) {
                          if (cResult[95] === first1) {
                            if (cResult[96] === tmp40) {
                              if (cResult[97] === tmp41) {
                                let tmp44;
                                if ((cResult[98] === autoFocusType) === onPress.OPTIONAL_OPTION_ADDED) {
                                  tmp44 = cResult[99];
                                }
                                tmp13 = tmp44;
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
                    onMentionablePress: tmp40,
                    onActionSheetDismiss: tmp41,
                    channel,
                    autoFocus: autoFocusType === onPress.OPTIONAL_OPTION_ADDED,
                    hasError,
                    onPress,
                  };
                  const tmp47 = onDismiss(onStartEditing(onEndEditing[16]), obj4);
                  cResult[91] = channel;
                  cResult[92] = onPress;
                  cResult[93] = hasError;
                  cResult[94] = option;
                  cResult[95] = first1;
                  cResult[96] = tmp40;
                  cResult[97] = tmp41;
                  cResult[98] = autoFocusType === onPress.OPTIONAL_OPTION_ADDED;
                  cResult[99] = tmp47;
                  tmp44 = tmp47;
                }
                function le() {
                  return onEndEditing(option);
                }
                cResult[88] = onEndEditing;
                cResult[89] = option;
                cResult[90] = le;
                tmp41 = le;
              }
              function re(mentionable) {
                mentionable = mentionable.mentionable;
                if (null != mentionable) {
                  const type = mentionable.type;
                  if (AppLauncherMentionableListActionSheet.MentionableItemTypes.USER === type) {
                    const items = [{ type: "userMention", userId: mentionable.result.user.id }];
                    const obj2 = { type: "userMention", userId: mentionable.result.user.id };
                    onOptionValueChange(option, items);
                  } else if (AppLauncherMentionableListActionSheet.MentionableItemTypes.ROLE === type) {
                    const items1 = [{ type: "roleMention", roleId: mentionable.result.id }];
                    const obj3 = { type: "roleMention", roleId: mentionable.result.id };
                    onOptionValueChange(option, items1);
                  } else if (AppLauncherMentionableListActionSheet.MentionableItemTypes.GLOBAL === type) {
                    const result = mentionable.result;
                    const text = result.text;
                    const obj4 = utils_AutocompleteUtilsDefault;
                    if (text === obj4.MENTION_EVERYONE().text) {
                      const items2 = [{ type: "textMention", text: "@everyone" }];
                      onOptionValueChange(option, items2);
                    } else {
                      const items3 = [{ type: "text", text: result.text }];
                      const obj = { type: "text", text: result.text };
                      onOptionValueChange(option, items3);
                    }
                  }
                } else {
                  onOptionValueChange(option, []);
                }
              }
              cResult[85] = onOptionValueChange;
              cResult[86] = option;
              cResult[87] = re;
              tmp40 = re;
            } else if (option(onEndEditing[8]).ApplicationCommandOptionType.ROLE === type) {
              let first2;
              if (optionValues.current[option.name] != null) {
                first2 = tmp26[0];
              }
              if (cResult[100] === onOptionValueChange) {
                let tmp29;
                if (cResult[101] === option) {
                  tmp29 = cResult[102];
                }
                if (cResult[103] === onEndEditing) {
                  let tmp30;
                  if (cResult[104] === option) {
                    tmp30 = cResult[105];
                  }
                  class Oe {
                    constructor() {
                      onEndEditing(option);
                    }
                  }
                  if (cResult[106] === channel) {
                    if (cResult[107] === onPress) {
                      if (cResult[108] === hasError) {
                        if (cResult[109] === option) {
                          if (cResult[110] === tmp4.option) {
                            if (cResult[111] === first2) {
                              if (cResult[112] === tmp29) {
                                if (cResult[113] === tmp30) {
                                  let tmp33;
                                  if (cResult[114] === tmp32) {
                                    tmp33 = cResult[115];
                                  }
                                  tmp13 = tmp33;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj5 = {
                    style: tmp4.option,
                    option,
                    initialValue: first2,
                    onRolePress: tmp29,
                    onActionSheetDismiss: tmp30,
                    channel,
                    autoFocus: tmp32,
                    hasError,
                    onPress,
                  };
                  const tmp36 = onDismiss(onStartEditing(onEndEditing[17]), obj5, option.name);
                  cResult[106] = channel;
                  cResult[107] = onPress;
                  cResult[108] = hasError;
                  cResult[109] = option;
                  cResult[110] = tmp4.option;
                  cResult[111] = first2;
                  cResult[112] = tmp29;
                  cResult[113] = tmp30;
                  cResult[114] = tmp32;
                  cResult[115] = tmp36;
                  tmp33 = tmp36;
                }
                class Oe {
                  constructor() {
                    onEndEditing(option);
                  }
                }
                cResult[103] = onEndEditing;
                cResult[104] = option;
                cResult[105] = Oe;
                tmp30 = Oe;
              }
              function me(role) {
                let items;
                role = role.role;
                if (null == role) {
                  items = [];
                } else {
                  items = [{ type: "roleMention", roleId: role.id }];
                  const obj = { type: "roleMention", roleId: role.id };
                }
                onOptionValueChange(option, items);
              }
              cResult[100] = onOptionValueChange;
              cResult[101] = option;
              cResult[102] = me;
              tmp29 = me;
            } else if (option(onEndEditing[8]).ApplicationCommandOptionType.USER === type) {
              let first3;
              class Oe {
                constructor() {
                  onEndEditing(option);
                }
              }
              if (optionValues.current[option.name] != null) {
                first3 = tmp16[0];
              }
              if (cResult[116] === onOptionValueChange) {
                let tmp19;
                if (cResult[117] === option) {
                  tmp19 = cResult[118];
                }
                if (cResult[119] === onEndEditing) {
                  let tmp20;
                  if (cResult[120] === option) {
                    tmp20 = cResult[121];
                  }
                  class Oe {
                    constructor() {
                      onEndEditing(option);
                    }
                  }
                  if (cResult[122] === channel) {
                    if (cResult[123] === onPress) {
                      if (cResult[124] === hasError) {
                        if (cResult[125] === option) {
                          if (cResult[126] === tmp4.option) {
                            if (cResult[127] === first3) {
                              if (cResult[128] === tmp19) {
                                if (cResult[129] === tmp20) {
                                  let tmp23;
                                  if (cResult[130] === tmp22) {
                                    tmp23 = cResult[131];
                                  }
                                  tmp13 = tmp23;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  class Ee {
                    constructor(user) {
                      let items;
                      user = user.user;
                      if (null == user) {
                        items = [];
                      } else {
                        let id = user;
                        if (typeof user !== "string") {
                          id = user.id;
                        }
                        items = [{ type: "userMention", userId: id }];
                        const obj = { type: "userMention", userId: id };
                      }
                      onOptionValueChange(option, items);
                    }
                  }
                  const obj6 = {
                    style: tmp4.option,
                    option,
                    initialValue: first3,
                    onUserPress: tmp19,
                    onActionSheetDismiss: tmp20,
                    channel,
                    autoFocus: tmp22,
                    hasError,
                    onPress,
                  };
                  const tmp25 = onDismiss(onStartEditing(onEndEditing[18]), obj6, option.name);
                  cResult[122] = channel;
                  cResult[123] = onPress;
                  cResult[124] = hasError;
                  cResult[125] = option;
                  cResult[126] = tmp4.option;
                  cResult[127] = first3;
                  cResult[128] = tmp19;
                  cResult[129] = tmp20;
                  cResult[130] = tmp22;
                  cResult[131] = tmp25;
                  tmp23 = tmp25;
                }
                class Oe {
                  constructor() {
                    onEndEditing(option);
                  }
                }
                cResult[119] = onEndEditing;
                class Ee {
                  constructor(user) {
                    let items;
                    user = user.user;
                    if (null == user) {
                      items = [];
                    } else {
                      let id = user;
                      if (typeof user !== "string") {
                        id = user.id;
                      }
                      items = [{ type: "userMention", userId: id }];
                      const obj = { type: "userMention", userId: id };
                    }
                    onOptionValueChange(option, items);
                  }
                }
                cResult[120] = option;
                cResult[121] = Ae;
                tmp20 = Ae;
              }
              class Ee {
                constructor(user) {
                  let items;
                  user = user.user;
                  if (null == user) {
                    items = [];
                  } else {
                    let id = user;
                    if (typeof user !== "string") {
                      id = user.id;
                    }
                    items = [{ type: "userMention", userId: id }];
                    const obj = { type: "userMention", userId: id };
                  }
                  onOptionValueChange(option, items);
                }
              }
              cResult[116] = onOptionValueChange;
              cResult[117] = option;
              cResult[118] = Ee;
              tmp19 = Ee;
            } else if (option(onEndEditing[8]).ApplicationCommandOptionType.CHANNEL === type) {
              let first4;
              class Oe {
                constructor() {
                  onEndEditing(option);
                }
              }
              if (optionValues.current[option.name] != null) {
                first4 = tmp6[0];
              }
              if (cResult[132] === onOptionValueChange) {
                let tmp9;
                if (cResult[133] === option) {
                  tmp9 = cResult[134];
                }
                if (cResult[135] === onEndEditing) {
                  let tmp10;
                  if (cResult[136] === option) {
                    tmp10 = cResult[137];
                  }
                  class Oe {
                    constructor() {
                      onEndEditing(option);
                    }
                  }
                  if (cResult[138] === channel) {
                    if (cResult[139] === onPress) {
                      if (cResult[140] === hasError) {
                        if (cResult[141] === option) {
                          if (cResult[142] === tmp4.option) {
                            if (cResult[143] === first4) {
                              if (cResult[144] === tmp9) {
                                if (cResult[145] === tmp10) {
                                  if (cResult[146] === tmp12) {
                                    tmp13 = cResult[147];
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
                    constructor(user) {
                      let items;
                      user = user.user;
                      if (null == user) {
                        items = [];
                      } else {
                        let id = user;
                        if (typeof user !== "string") {
                          id = user.id;
                        }
                        items = [{ type: "userMention", userId: id }];
                        const obj = { type: "userMention", userId: id };
                      }
                      onOptionValueChange(option, items);
                    }
                  }
                  const obj7 = {
                    style: tmp4.option,
                    option,
                    initialValue: first4,
                    onChannelPress: tmp9,
                    onActionSheetDismiss: tmp10,
                    channel,
                    autoFocus: tmp12,
                    hasError,
                    onPress,
                  };
                  const tmp15 = onDismiss(onStartEditing(onEndEditing[19]), obj7, option.name);
                  cResult[138] = channel;
                  cResult[139] = onPress;
                  cResult[140] = hasError;
                  cResult[141] = option;
                  cResult[142] = tmp4.option;
                  cResult[143] = first4;
                  cResult[144] = tmp9;
                  cResult[145] = tmp10;
                  cResult[146] = tmp12;
                  cResult[147] = tmp15;
                  tmp13 = tmp15;
                }
                class Oe {
                  constructor() {
                    onEndEditing(option);
                  }
                }
                cResult[135] = onEndEditing;
                class Ee {
                  constructor(user) {
                    let items;
                    user = user.user;
                    if (null == user) {
                      items = [];
                    } else {
                      let id = user;
                      if (typeof user !== "string") {
                        id = user.id;
                      }
                      items = [{ type: "userMention", userId: id }];
                      const obj = { type: "userMention", userId: id };
                    }
                    onOptionValueChange(option, items);
                  }
                }
                cResult[136] = option;
                cResult[137] = Ne;
                tmp10 = Ne;
              }
              class Ee {
                constructor(user) {
                  let items;
                  user = user.user;
                  if (null == user) {
                    items = [];
                  } else {
                    let id = user;
                    if (typeof user !== "string") {
                      id = user.id;
                    }
                    items = [{ type: "userMention", userId: id }];
                    const obj = { type: "userMention", userId: id };
                  }
                  onOptionValueChange(option, items);
                }
              }
              cResult[132] = onOptionValueChange;
              cResult[133] = option;
              cResult[134] = Pe;
              tmp9 = Pe;
            } else {
              return null;
            }
          }
          if (null != onDismiss) {
            if (cResult[148] === tmp13) {
              let tmp90;
              if (cResult[149] === tmp4.optionViewContainer) {
                tmp90 = cResult[150];
              }
              if (cResult[151] === onDismiss) {
                let tmp93;
                if (cResult[152] === option) {
                  tmp93 = cResult[153];
                }
                class O {
                  constructor() {
                    return onDismiss(option);
                  }
                }
                class Ee {
                  constructor(user) {
                    let items;
                    user = user.user;
                    if (null == user) {
                      items = [];
                    } else {
                      let id = user;
                      if (typeof user !== "string") {
                        id = user.id;
                      }
                      items = [{ type: "userMention", userId: id }];
                      const obj = { type: "userMention", userId: id };
                    }
                    onOptionValueChange(option, items);
                  }
                }
                if (cResult[155] === tmp4.dismissButton) {
                  let tmp97;
                  if (cResult[156] === tmp93) {
                    tmp97 = cResult[157];
                  }
                  if (cResult[158] === tmp4.dismissableOptionWrapper) {
                    if (cResult[159] === tmp90) {
                      let tmp100;
                      if (cResult[160] === tmp97) {
                        tmp100 = cResult[161];
                      }
                      tmp89 = tmp100;
                    }
                  }
                  class O {
                    constructor() {
                      return onDismiss(option);
                    }
                  }
                  const obj9 = { style: null, children: items };
                  class Ee {
                    constructor(user) {
                      let items;
                      user = user.user;
                      if (null == user) {
                        items = [];
                      } else {
                        let id = user;
                        if (typeof user !== "string") {
                          id = user.id;
                        }
                        items = [{ type: "userMention", userId: id }];
                        const obj = { type: "userMention", userId: id };
                      }
                      onOptionValueChange(option, items);
                    }
                  }
                  items = [tmp90, tmp97];
                  const tmp102 = closure_6(onOptionValueChange, obj9);
                  cResult[158] = tmp4.dismissableOptionWrapper;
                  cResult[159] = tmp90;
                  cResult[160] = tmp97;
                  cResult[161] = tmp102;
                  tmp100 = tmp102;
                }
                const obj10 = { style: tmp4.dismissButton, onPress: tmp93, children: tmp96 };
                const tmp99 = onDismiss(option(onEndEditing[21]).PressableOpacity, obj10);
                cResult[155] = tmp4.dismissButton;
                cResult[156] = tmp93;
                cResult[157] = tmp99;
                tmp97 = tmp99;
              }
              class O {
                constructor() {
                  return onDismiss(option);
                }
              }
              cResult[151] = onDismiss;
              class Ee {
                constructor(user) {
                  let items;
                  user = user.user;
                  if (null == user) {
                    items = [];
                  } else {
                    let id = user;
                    if (typeof user !== "string") {
                      id = user.id;
                    }
                    items = [{ type: "userMention", userId: id }];
                    const obj = { type: "userMention", userId: id };
                  }
                  onOptionValueChange(option, items);
                }
              }
              cResult[152] = option;
              cResult[153] = O;
              tmp93 = O;
            }
            class Oe {
              constructor() {
                onEndEditing(option);
              }
            }
            const obj11 = { style: tmp4.optionViewContainer, children: null };
            class Ee {
              constructor(user) {
                let items;
                user = user.user;
                if (null == user) {
                  items = [];
                } else {
                  let id = user;
                  if (typeof user !== "string") {
                    id = user.id;
                  }
                  items = [{ type: "userMention", userId: id }];
                  const obj = { type: "userMention", userId: id };
                }
                onOptionValueChange(option, items);
              }
            }
            const tmp92 = onDismiss(onOptionValueChange, obj11);
            cResult[148] = tmp13;
            cResult[149] = tmp4.optionViewContainer;
            cResult[150] = tmp92;
            tmp90 = tmp92;
          }
          return tmp89;
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
            let tmp80;
            if (cResult[2] === option) {
              tmp80 = cResult[3];
            }
            if (cResult[4] === onPress) {
              if (cResult[5] === onStartEditing) {
                let tmp81;
                if (cResult[6] === option) {
                  tmp81 = cResult[7];
                }
                if (cResult[8] === onEndEditing) {
                  let tmp82;
                  if (cResult[9] === option) {
                    tmp82 = cResult[10];
                  }
                  class O {
                    constructor() {
                      return onDismiss(option);
                    }
                  }
                  if (cResult[11] === hasError) {
                    if (cResult[12] === option) {
                      if (cResult[13] === tmp4.option) {
                        if (cResult[14] === tmp79) {
                          if (cResult[15] === tmp80) {
                            if (cResult[16] === tmp81) {
                              if (cResult[17] === tmp82) {
                                let tmp86;
                                if (cResult[18] === tmp85) {
                                  tmp86 = cResult[19];
                                }
                                tmp13 = tmp86;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  class R {
                    constructor(displayName) {
                      onEndEditing(option);
                      let str;
                      if (displayName != null) {
                        str = displayName.displayName;
                      }
                      if (str == null) {
                        str = "";
                      }
                      const items = [{ type: "text", text: str }];
                      onOptionValueChange(option, items);
                    }
                  }
                  class Ee {
                    constructor(user) {
                      let items;
                      user = user.user;
                      if (null == user) {
                        items = [];
                      } else {
                        let id = user;
                        if (typeof user !== "string") {
                          id = user.id;
                        }
                        items = [{ type: "userMention", userId: id }];
                        const obj = { type: "userMention", userId: id };
                      }
                      onOptionValueChange(option, items);
                    }
                  }
                  const obj12 = {
                    style: tmp4.option,
                    option,
                    initialValue: tmp79,
                    onSelect: tmp80,
                    onOpenChoicesSheet: tmp81,
                    onDismissChoicesSheet: tmp82,
                    autoFocus: tmp85,
                    hasError,
                  };
                  const tmp87 = onDismiss(onStartEditing(onEndEditing[9]), obj12, option.name);
                  cResult[11] = hasError;
                  cResult[12] = option;
                  cResult[13] = tmp4.option;
                  cResult[14] = tmp79;
                  cResult[15] = tmp80;
                  cResult[16] = tmp81;
                  cResult[17] = tmp82;
                  cResult[18] = tmp85;
                  cResult[19] = tmp87;
                  tmp86 = tmp87;
                }
                class O {
                  constructor() {
                    return onDismiss(option);
                  }
                }
                class R {
                  constructor(displayName) {
                    onEndEditing(option);
                    let str;
                    if (displayName != null) {
                      str = displayName.displayName;
                    }
                    if (str == null) {
                      str = "";
                    }
                    const items = [{ type: "text", text: str }];
                    onOptionValueChange(option, items);
                  }
                }
                class Ee {
                  constructor(user) {
                    let items;
                    user = user.user;
                    if (null == user) {
                      items = [];
                    } else {
                      let id = user;
                      if (typeof user !== "string") {
                        id = user.id;
                      }
                      items = [{ type: "userMention", userId: id }];
                      const obj = { type: "userMention", userId: id };
                    }
                    onOptionValueChange(option, items);
                  }
                }
                cResult[9] = option;
                cResult[10] = tmp83;
                tmp82 = tmp83;
              }
            }
            class O {
              constructor() {
                return onDismiss(option);
              }
            }
            class R {
              constructor(displayName) {
                onEndEditing(option);
                let str;
                if (displayName != null) {
                  str = displayName.displayName;
                }
                if (str == null) {
                  str = "";
                }
                const items = [{ type: "text", text: str }];
                onOptionValueChange(option, items);
              }
            }
            class Ee {
              constructor(user) {
                let items;
                user = user.user;
                if (null == user) {
                  items = [];
                } else {
                  let id = user;
                  if (typeof user !== "string") {
                    id = user.id;
                  }
                  items = [{ type: "userMention", userId: id }];
                  const obj = { type: "userMention", userId: id };
                }
                onOptionValueChange(option, items);
              }
            }
            cResult[5] = onStartEditing;
            cResult[6] = option;
            cResult[7] = F;
            tmp81 = F;
          }
        }
        class R {
          constructor(displayName) {
            onEndEditing(option);
            let str;
            if (displayName != null) {
              str = displayName.displayName;
            }
            if (str == null) {
              str = "";
            }
            const items = [{ type: "text", text: str }];
            onOptionValueChange(option, items);
          }
        }
        class Ee {
          constructor(user) {
            let items;
            user = user.user;
            if (null == user) {
              items = [];
            } else {
              let id = user;
              if (typeof user !== "string") {
                id = user.id;
              }
              items = [{ type: "userMention", userId: id }];
              const obj = { type: "userMention", userId: id };
            }
            onOptionValueChange(option, items);
          }
        }
        cResult[0] = onEndEditing;
        cResult[1] = onOptionValueChange;
        cResult[2] = option;
        cResult[3] = R;
        tmp80 = R;
      } else if (option.autocomplete) {
        class O {
          constructor() {
            return onDismiss(option);
          }
        }
        class R {
          constructor(displayName) {
            onEndEditing(option);
            let str;
            if (displayName != null) {
              str = displayName.displayName;
            }
            if (str == null) {
              str = "";
            }
            const items = [{ type: "text", text: str }];
            onOptionValueChange(option, items);
          }
        }
        class U {
          constructor(displayName) {
            onEndEditing(option);
            let str;
            if (displayName != null) {
              str = displayName.displayName;
            }
            if (str == null) {
              str = "";
            }
            const items = [{ type: "text", text: str }];
            onOptionValueChange(option, items);
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
        const name = option.name;
        class R {
          constructor(displayName) {
            onEndEditing(option);
            let str;
            if (displayName != null) {
              str = displayName.displayName;
            }
            if (str == null) {
              str = "";
            }
            const items = [{ type: "text", text: str }];
            onOptionValueChange(option, items);
          }
        }
        class U {
          constructor(displayName) {
            onEndEditing(option);
            let str;
            if (displayName != null) {
              str = displayName.displayName;
            }
            if (str == null) {
              str = "";
            }
            const items = [{ type: "text", text: str }];
            onOptionValueChange(option, items);
          }
        }
        if (cResult[43] === onEndEditing) {
          let tmp67;
          if (cResult[44] === option) {
            tmp67 = cResult[45];
          }
          if (cResult[46] === onOptionValueChange) {
            if (cResult[47] === onStartEditing) {
              let tmp68;
              if (cResult[48] === option) {
                tmp68 = cResult[49];
              }
              class O {
                constructor() {
                  return onDismiss(option);
                }
              }
              let str = "react.memo_cache_sentinel";
              class R {
                constructor(displayName) {
                  onEndEditing(option);
                  let str;
                  if (displayName != null) {
                    str = displayName.displayName;
                  }
                  if (str == null) {
                    str = "";
                  }
                  const items = [{ type: "text", text: str }];
                  onOptionValueChange(option, items);
                }
              }
              class U {
                constructor(displayName) {
                  onEndEditing(option);
                  let str;
                  if (displayName != null) {
                    str = displayName.displayName;
                  }
                  if (str == null) {
                    str = "";
                  }
                  const items = [{ type: "text", text: str }];
                  onOptionValueChange(option, items);
                }
              }
              const hasItem = obj8.includes(autoFocusType);
              class Q {
                constructor() {
                  return onEndEditing(option);
                }
              }
              const obj13 = {
                style: tmp63,
                option,
                guildId: tmp64,
                initialValue: tmp66,
                onEndEditing: tmp67,
                onChangeText: tmp68,
                onFocus,
                autoFocus: hasItem,
                hasError,
                onPressIn: onPress,
              };
              cResult[51] = channel.guild_id;
              cResult[52] = onPress;
              cResult[53] = hasError;
              cResult[54] = onFocus;
              cResult[55] = option;
              cResult[56] = tmp4.option;
              cResult[57] = tmp66;
              cResult[58] = tmp67;
              cResult[59] = tmp68;
              cResult[60] = hasItem;
              cResult[61] = onDismiss(onStartEditing(onEndEditing[11]), obj13, name);
              const tmp74 = onDismiss(onStartEditing(onEndEditing[11]), obj13, name);
            }
          }
          class O {
            constructor() {
              return onDismiss(option);
            }
          }
          class R {
            constructor(displayName) {
              onEndEditing(option);
              let str;
              if (displayName != null) {
                str = displayName.displayName;
              }
              if (str == null) {
                str = "";
              }
              const items = [{ type: "text", text: str }];
              onOptionValueChange(option, items);
            }
          }
          class U {
            constructor(displayName) {
              onEndEditing(option);
              let str;
              if (displayName != null) {
                str = displayName.displayName;
              }
              if (str == null) {
                str = "";
              }
              const items = [{ type: "text", text: str }];
              onOptionValueChange(option, items);
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
          tmp68 = X;
        }
        class Q {
          constructor() {
            return onEndEditing(option);
          }
        }
        cResult[43] = onEndEditing;
        cResult[44] = option;
        cResult[45] = Q;
        tmp67 = Q;
      }
    }
  : (option) => {
      let autoFocusType;
      let channel;
      let command;
      let first;
      let first1;
      let first2;
      let first3;
      let first4;
      let first5;
      let first6;
      let first7;
      let hasError;
      let items;
      let items1;
      let onFocus;
      let onPress;
      let onPressAttachmentOption;
      let optionValues;
      let tmp49;
      let tmp62Result;
      option = option.option;
      ({ onStartEditing: importDefault, onEndEditing: dependencyMap, onOptionValueChange: View, onPress } = option);
      const onDismiss = option.onDismiss;
      ({ channel, autoFocusType, optionValues, hasError } = option);
      ({ onPressAttachmentOption, onFocus, command } = option);
      const tmp = closure_7();
      let type = option.type;
      if (option(1985).ApplicationCommandOptionType.STRING !== type) {
        if (option(1985).ApplicationCommandOptionType.INTEGER !== type) {
          let tmp28Result;
          let tmp13;
          if (option(1985).ApplicationCommandOptionType.NUMBER !== type) {
            if (option(1985).ApplicationCommandOptionType.ATTACHMENT === type) {
              let obj2 = {
                style: tmp.option,
                option,
                onSelectAttachment(text) {
                  let items1;
                  dependencyMap(option);
                  if (null != text) {
                    const items = [{ type: "text", text }];
                    items1 = items;
                    const obj = { type: "text", text };
                  } else {
                    items1 = [];
                  }
                  View(option, items1);
                },
                channel,
                autoFocus: autoFocusType === onPress.OPTIONAL_OPTION_ADDED,
                hasError,
                onPress: onPressAttachmentOption,
              };
              tmp28Result = onDismiss(AppLauncherAttachmentOptionDefault, obj2, option.name);
              tmp13 = onDismiss;
            } else if (option(1985).ApplicationCommandOptionType.BOOLEAN === type) {
              let obj3 = {
                style: tmp.option,
                option,
                initialValue: first,
                onPress(arg0) {
                  onPress();
                  dependencyMap(option);
                  const items = [{ type: "text", text: arg0.toString() }];
                  ({ type: "text", text: arg0.toString() });
                  View(option, items);
                },
                hasError,
              };
              first = undefined;
              const tmp37 = AppLauncherBooleanOptionDefault;
              if (optionValues.current[option.name] != null) {
                first = tmp38[0];
              }
              tmp28Result = tmp35(tmp37, obj3, option.name);
              tmp13 = tmp35;
            } else if (option(1985).ApplicationCommandOptionType.MENTIONABLE === type) {
              let obj4 = {
                option,
                initialValue: first1,
                onMentionablePress(mentionable) {
                  mentionable = mentionable.mentionable;
                  if (null != mentionable) {
                    const type = mentionable.type;
                    if (AppLauncherMentionableListActionSheet.MentionableItemTypes.USER === type) {
                      const items = [{ type: "userMention", userId: mentionable.result.user.id }];
                      const obj2 = { type: "userMention", userId: mentionable.result.user.id };
                      View(option, items);
                    } else if (AppLauncherMentionableListActionSheet.MentionableItemTypes.ROLE === type) {
                      const items1 = [{ type: "roleMention", roleId: mentionable.result.id }];
                      const obj3 = { type: "roleMention", roleId: mentionable.result.id };
                      View(option, items1);
                    } else if (AppLauncherMentionableListActionSheet.MentionableItemTypes.GLOBAL === type) {
                      const result = mentionable.result;
                      const text = result.text;
                      const obj4 = utils_AutocompleteUtilsDefault;
                      if (text === obj4.MENTION_EVERYONE().text) {
                        const items2 = [{ type: "textMention", text: "@everyone" }];
                        View(option, items2);
                      } else {
                        const items3 = [{ type: "text", text: result.text }];
                        const obj = { type: "text", text: result.text };
                        View(option, items3);
                      }
                    }
                  } else {
                    View(option, []);
                  }
                },
                onActionSheetDismiss() {
                  return dependencyMap(option);
                },
                channel,
                autoFocus: autoFocusType === onPress.OPTIONAL_OPTION_ADDED,
                hasError,
                onPress,
              };
              first1 = undefined;
              const tmp30 = AppLauncherMentionableOptionDefault;
              if (optionValues.current[option.name] != null) {
                first1 = tmp31[0];
              }
              tmp28Result = tmp28(tmp30, obj4);
              tmp13 = tmp28;
            } else if (option(1985).ApplicationCommandOptionType.ROLE === type) {
              const obj5 = {
                style: tmp.option,
                option,
                initialValue: first2,
                onRolePress(role) {
                  let items;
                  role = role.role;
                  if (null == role) {
                    items = [];
                  } else {
                    items = [{ type: "roleMention", roleId: role.id }];
                    const obj = { type: "roleMention", roleId: role.id };
                  }
                  View(option, items);
                },
                onActionSheetDismiss() {
                  dependencyMap(option);
                },
                channel,
                autoFocus: autoFocusType === onPress.OPTIONAL_OPTION_ADDED,
                hasError,
                onPress,
              };
              first2 = undefined;
              const tmp23 = AppLauncherRoleOptionDefault;
              if (optionValues.current[option.name] != null) {
                first2 = tmp24[0];
              }
              tmp28Result = tmp21(tmp23, obj5, option.name);
              tmp13 = tmp21;
            } else if (option(1985).ApplicationCommandOptionType.USER === type) {
              const obj6 = {
                style: tmp.option,
                option,
                initialValue: first3,
                onUserPress(user) {
                  let items;
                  user = user.user;
                  if (null == user) {
                    items = [];
                  } else {
                    let id = user;
                    if (typeof user !== "string") {
                      id = user.id;
                    }
                    items = [{ type: "userMention", userId: id }];
                    const obj = { type: "userMention", userId: id };
                  }
                  View(option, items);
                },
                onActionSheetDismiss() {
                  return dependencyMap(option);
                },
                channel,
                autoFocus: autoFocusType === onPress.OPTIONAL_OPTION_ADDED,
                hasError,
                onPress,
              };
              first3 = undefined;
              const tmp16 = AppLauncherUserOptionDefault;
              if (optionValues.current[option.name] != null) {
                first3 = tmp17[0];
              }
              tmp28Result = tmp14(tmp16, obj6, option.name);
              tmp13 = tmp14;
            } else if (option(1985).ApplicationCommandOptionType.CHANNEL === type) {
              let obj = {
                style: tmp.option,
                option,
                initialValue: first4,
                onChannelPress(channel) {
                  let items1;
                  channel = channel.channel;
                  if (null != channel) {
                    const items = [{ type: "channelMention", channelId: channel.id }];
                    items1 = items;
                    const obj = { type: "channelMention", channelId: channel.id };
                  } else {
                    items1 = [];
                  }
                  View(option, items1);
                },
                onActionSheetDismiss() {
                  dependencyMap(option);
                },
                channel,
                autoFocus: autoFocusType === onPress.OPTIONAL_OPTION_ADDED,
                hasError,
                onPress,
              };
              first4 = undefined;
              const tmp7 = AppLauncherChannelOptionDefault;
              if (optionValues.current[option.name] != null) {
                first4 = tmp8[0];
              }
              tmp28Result = tmp5(tmp7, obj, option.name);
              tmp13 = tmp5;
            } else {
              return null;
            }
          }
          let tmp61 = tmp28Result;
          if (null != onDismiss) {
            const obj7 = { style: tmp.dismissableOptionWrapper, children: items };
            const obj8 = { style: tmp.optionViewContainer, children: tmp28Result };
            items = [tmp13(View, obj8)];
            const obj9 = {
              style: tmp.dismissButton,
              onPress() {
                return onDismiss(option);
              },
              children: tmp13(option(4797).CircleXIcon, { size: "md" }),
            };
            const PressableOpacity = tmp2(5909).PressableOpacity;
            items[1] = tmp13(PressableOpacity, obj9);
            tmp61 = closure_6(View, obj7);
          }
          return tmp61;
        }
      }
      if (null != option.choices) {
        const obj10 = {
          style: tmp.option,
          option,
          initialValue: first5,
          onSelect(displayName) {
            dependencyMap(option);
            let str;
            if (displayName != null) {
              str = displayName.displayName;
            }
            if (str == null) {
              str = "";
            }
            const items = [{ type: "text", text: str }];
            View(option, items);
          },
          onOpenChoicesSheet() {
            onPress();
            importDefault(option);
          },
          onDismissChoicesSheet() {
            return dependencyMap(option);
          },
          autoFocus: autoFocusType === onPress.OPTIONAL_OPTION_ADDED,
          hasError,
        };
        first5 = undefined;
        const tmp56 = AppLauncherChoicesOptionDefault;
        if (optionValues.current[option.name] != null) {
          first5 = tmp57[0];
        }
        tmp62Result = tmp54(tmp56, obj10, option.name);
        tmp49 = tmp54;
      } else if (option.autocomplete) {
        const obj11 = {
          style: tmp.option,
          channel,
          option,
          activeCommand: command,
          optionValues,
          initialValue: first6,
          autoFocus: autoFocusType === onPress.OPTIONAL_OPTION_ADDED,
          onSelect(displayName) {
            dependencyMap(option);
            let str;
            if (displayName != null) {
              str = displayName.displayName;
            }
            if (str == null) {
              str = "";
            }
            const items = [{ type: "text", text: str }];
            View(option, items);
          },
          onOpenAutocompleteSheet() {
            onPress();
            importDefault(option);
          },
          onDismissAutocompleteSheet() {
            return dependencyMap(option);
          },
          hasError,
        };
        first6 = undefined;
        const tmp63Result = AppLauncherAutocompleteOptionDefault;
        if (optionValues.current[option.name] != null) {
          first6 = tmp51[0];
        }
        tmp62Result = tmp62(tmp63Result, obj11, option.name);
        tmp49 = tmp62;
      } else {
        const obj12 = {
          style: tmp.option,
          option,
          guildId: channel.guild_id,
          initialValue: first7,
          onEndEditing() {
            return dependencyMap(option);
          },
          onChangeText(text) {
            importDefault(option);
            const items = [];
            const obj = { type: "text", text };
            items[0] = obj;
            View(option, items);
          },
          onFocus,
          autoFocus: items1.includes(autoFocusType),
          hasError,
          onPressIn: onPress,
        };
        first7 = undefined;
        const tmp63Result2 = AppLauncherTextInputOptionDefault;
        if (optionValues.current[option.name] != null) {
          first7 = tmp45[0];
        }
        items1 = [,];
        ({ FIRST_REQUIRED_OPTION: arr[0], OPTIONAL_OPTION_ADDED: arr[1] } = onPress);
        tmp62Result = tmp62(tmp63Result2, obj12, option.name);
        tmp49 = tmp62;
      }
      tmp13 = tmp49;
      tmp28Result = tmp62Result;
    };
let result = size.fileFinishedImporting("modules/app_launcher/native/options/AppLauncherCommandOption.tsx");

export default tmp4;
