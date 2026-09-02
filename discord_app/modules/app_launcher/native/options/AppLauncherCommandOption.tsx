// === Module 11956: AppLauncherCommandOption ===

// Module 11956 (AppLauncherCommandOption)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import AppLauncherChoicesOptionDefault from "AppLauncherChoicesOption" /* 11957 */;
import AttachmentPreviewAppLauncherDefault from "AttachmentPreviewAppLauncher" /* 11968 */;
import AppLauncherBooleanOptionDefault from "AppLauncherBooleanOption" /* 11970 */;
import MentionableIconDefault from "MentionableIcon" /* 11971 */;
import AppLauncherRoleOptionDefault from "AppLauncherRoleOption" /* 11976 */;
import AppLauncherUserOptionDefault from "AppLauncherUserOption" /* 11977 */;
import AppLauncherChannelOptionDefault from "AppLauncherChannelOption" /* 11980 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { AppLauncherOptionAutoFocusType as closure_4 } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON" /* 1497 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { dismissableOptionWrapper: { flexDirection: "row", alignItems: "center" }, optionViewContainer: { flex: 1 }, dismissButton: null, option: null };
createCacheKey = { marginLeft: 8, marginRight: -4, padding: 4, borderRadius: ThemesDefault.radii.round };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { flex: 1 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/app_launcher/native/options/AppLauncherCommandOption.tsx");

export default function AppLauncherCommandOption(option) {
  let name = option.option;
  ({ onStartEditing: importDefault, onEndEditing: dependencyMap, onOptionValueChange: View, onPress } = option);
  const onDismiss = option.onDismiss;
  ({ channel, autoFocusType, optionValues, hasError } = option);
  ({ onPressAttachmentOption, onFocus, command } = option);
  const tmp = callback2();
  let type = name.type;
  if (name(1954).ApplicationCommandOptionType.STRING !== type) {
    if (tmp2(1954).ApplicationCommandOptionType.INTEGER !== type) {
      if (tmp2(1954).ApplicationCommandOptionType.NUMBER !== type) {
        if (tmp2(1954).ApplicationCommandOptionType.ATTACHMENT === type) {
          let obj = { style: null, option: null, onSelectAttachment: null, channel: null, autoFocus: null, hasError: null, onPress: null };
          obj[0] = tmp.option;
          obj[1] = name;
          obj[2] = function onSelectAttachment(arg0) {
            callback2(name);
            if (null != arg0) {
              const obj = { type: "text", text: null };
              obj[1] = arg0;
              const items = [obj];
              let items1 = items;
            } else {
              items1 = [];
            }
            closure_3(name, items1);
          };
          obj[3] = channel;
          obj[4] = autoFocusType === onPress.OPTIONAL_OPTION_ADDED;
          obj[5] = hasError;
          obj[6] = onPressAttachmentOption;
          let tmp28Result = onDismiss(AttachmentPreviewAppLauncherDefault, obj, name.name);
          let tmp13 = onDismiss;
        } else if (tmp2(1954).ApplicationCommandOptionType.BOOLEAN === type) {
          obj = { style: null, option: null, initialValue: null, onPress: null, hasError: null };
          obj[0] = tmp.option;
          obj[1] = name;
          let first;
          if (optionValues.current[name.name] != null) {
            first = tmp38[0];
          }
          obj[2] = first;
          obj[3] = function onPress(arg0) {
            onPress();
            callback2(name);
            const items = [{ type: "text", text: arg0.toString() }];
            callback3(name, items);
          };
          obj[4] = hasError;
          tmp28Result = tmp35(AppLauncherBooleanOptionDefault, obj, name.name);
          tmp13 = tmp35;
          const tmp37 = AppLauncherBooleanOptionDefault;
        } else if (tmp2(1954).ApplicationCommandOptionType.MENTIONABLE === type) {
          obj1 = { option: null, initialValue: null, onMentionablePress: null, onActionSheetDismiss: null, channel: null, autoFocus: null, hasError: null, onPress: null };
          obj1[0] = name;
          let first1;
          if (optionValues.current[name.name] != null) {
            first1 = tmp31[0];
          }
          obj1[1] = first1;
          obj1[2] = function onMentionablePress(mentionable) {
            mentionable = mentionable.mentionable;
            if (null != mentionable) {
              const type = mentionable.type;
              if (name(closure_1_2[13]).MentionableItemTypes.USER === type) {
                let obj = { type: "userMention", userId: null };
                obj[1] = mentionable.result.user.id;
                const items = [obj];
                callback3(name, items);
              } else if (tmp4(tmp5[13]).MentionableItemTypes.ROLE === type) {
                obj = { type: "roleMention", roleId: null };
                obj[1] = mentionable.result.id;
                const items1 = [obj];
                callback3(name, items1);
              } else if (tmp4(tmp5[13]).MentionableItemTypes.GLOBAL === type) {
                const result = mentionable.result;
                if (result.text === obj4.MENTION_EVERYONE().text) {
                  const items2 = [{ type: "textMention", text: "@everyone" }];
                  callback3(name, items2);
                } else {
                  obj = { type: "text", text: null };
                  obj[1] = result.text;
                  const items3 = [obj];
                  callback3(name, items3);
                }
                obj4 = closure_1_1(tmp5[14]);
              }
            } else {
              callback3(name, []);
            }
          };
          obj1[3] = function onActionSheetDismiss() {
            return callback2(name);
          };
          obj1[4] = channel;
          obj1[5] = autoFocusType === onPress.OPTIONAL_OPTION_ADDED;
          obj1[6] = hasError;
          obj1[7] = onPress;
          tmp28Result = tmp28(MentionableIconDefault, obj1);
          tmp13 = tmp28;
          const tmp30 = MentionableIconDefault;
        } else if (tmp2(1954).ApplicationCommandOptionType.ROLE === type) {
          const obj2 = { style: null, option: null, initialValue: null, onRolePress: null, onActionSheetDismiss: null, channel: null, autoFocus: null, hasError: null, onPress: null };
          obj2[0] = tmp.option;
          obj2[1] = name;
          let first2;
          if (optionValues.current[name.name] != null) {
            first2 = tmp24[0];
          }
          obj2[2] = first2;
          obj2[3] = function onRolePress(role) {
            role = role.role;
            if (null == role) {
              let items = [];
            } else {
              const obj = { type: "roleMention", roleId: null };
              obj[1] = role.id;
              items = [obj];
            }
            closure_3(name, items);
          };
          obj2[4] = function onActionSheetDismiss() {
            callback2(name);
          };
          obj2[5] = channel;
          obj2[6] = autoFocusType === onPress.OPTIONAL_OPTION_ADDED;
          obj2[7] = hasError;
          obj2[8] = onPress;
          tmp28Result = tmp21(AppLauncherRoleOptionDefault, obj2, name.name);
          tmp13 = tmp21;
          const tmp23 = AppLauncherRoleOptionDefault;
        } else if (tmp2(1954).ApplicationCommandOptionType.USER === type) {
          const obj3 = { style: null, option: null, initialValue: null, onUserPress: null, onActionSheetDismiss: null, channel: null, autoFocus: null, hasError: null, onPress: null };
          obj3[0] = tmp.option;
          obj3[1] = name;
          let first3;
          if (optionValues.current[name.name] != null) {
            first3 = tmp17[0];
          }
          obj3[2] = first3;
          obj3[3] = function onUserPress(user) {
            user = user.user;
            if (null == user) {
              let items = [];
            } else {
              let id = user;
              if (typeof user !== "string") {
                id = user.id;
              }
              const obj = { type: "userMention", userId: null };
              obj[1] = id;
              items = [obj];
            }
            closure_3(name, items);
          };
          obj3[4] = function onActionSheetDismiss() {
            return callback2(name);
          };
          obj3[5] = channel;
          obj3[6] = autoFocusType === onPress.OPTIONAL_OPTION_ADDED;
          obj3[7] = hasError;
          obj3[8] = onPress;
          tmp28Result = tmp14(AppLauncherUserOptionDefault, obj3, name.name);
          tmp13 = tmp14;
          const tmp16 = AppLauncherUserOptionDefault;
        } else if (tmp2(1954).ApplicationCommandOptionType.CHANNEL === type) {
          obj = { style: null, option: null, initialValue: null, onChannelPress: null, onActionSheetDismiss: null, channel: null, autoFocus: null, hasError: null, onPress: null };
          obj[0] = tmp.option;
          obj[1] = name;
          let first4;
          if (optionValues.current[name.name] != null) {
            first4 = tmp8[0];
          }
          obj[2] = first4;
          obj[3] = function onChannelPress(channel) {
            channel = channel.channel;
            if (null != channel) {
              const obj = { type: "channelMention", channelId: null };
              obj[1] = channel.id;
              const items = [obj];
              let items1 = items;
            } else {
              items1 = [];
            }
            closure_3(name, items1);
          };
          obj[4] = function onActionSheetDismiss() {
            callback2(name);
          };
          obj[5] = channel;
          obj[6] = autoFocusType === onPress.OPTIONAL_OPTION_ADDED;
          obj[7] = hasError;
          obj[8] = onPress;
          tmp28Result = tmp5(AppLauncherChannelOptionDefault, obj, name.name);
          tmp13 = tmp5;
          const tmp7 = AppLauncherChannelOptionDefault;
        } else {
          return null;
        }
        let tmp62 = tmp28Result;
        if (null != onDismiss) {
          let obj4 = { style: null, children: null };
          obj4[0] = tmp.dismissableOptionWrapper;
          const obj5 = { style: null, children: null };
          obj5[0] = tmp.optionViewContainer;
          obj5[1] = tmp28Result;
          let items = [tmp13(View, obj5), ];
          const obj6 = { style: null, onPress: null, children: null };
          obj6[0] = tmp.dismissButton;
          obj6[1] = function onPress() {
            return onDismiss(name);
          };
          obj6[2] = tmp13(tmp2(6234).CircleXIcon, { size: "md" });
          items[1] = tmp13(tmp2(5076).PressableOpacity, obj6);
          obj4[1] = items;
          tmp62 = callback(View, obj4);
        }
        return tmp62;
      }
    }
  }
  let tmp44 = null;
  if (null != name.choices) {
    const obj7 = { style: null, option: null, initialValue: null, onSelect: null, onOpenChoicesSheet: null, onDismissChoicesSheet: null, autoFocus: null, hasError: null };
    obj7[0] = tmp.option;
    obj7[1] = name;
    let first5;
    if (optionValues.current[name.name] != tmp44) {
      first5 = tmp58[0];
    }
    obj7[2] = first5;
    obj7[3] = function onSelect(displayName) {
      callback2(name);
      let str;
      if (displayName != null) {
        str = displayName.displayName;
      }
      if (str == null) {
        str = "";
      }
      const items = [{ type: "text", text: str }];
      closure_3(name, items);
    };
    obj7[4] = function onOpenChoicesSheet(onDismissChoicesSheet, arg1) {
      onPress();
      callback(name);
    };
    obj7[5] = function onDismissChoicesSheet() {
      return callback2(name);
    };
    optionValues = onPress.OPTIONAL_OPTION_ADDED;
    tmp44 = autoFocusType === optionValues;
    obj7[6] = tmp44;
    obj7[7] = hasError;
    name = name.name;
    onDismiss(AppLauncherChoicesOptionDefault, obj7, name);
    const tmp57 = AppLauncherChoicesOptionDefault;
  } else if (name.autocomplete) {
    const obj8 = { style: null, channel: null, option: null, activeCommand: null, optionValues: null, initialValue: null, autoFocus: null, onSelect: null, onOpenAutocompleteSheet: null, onDismissAutocompleteSheet: null, hasError: null };
    obj8[0] = tmp.option;
    obj8[1] = channel;
    obj8[2] = name;
    obj8[3] = command;
    obj8[4] = optionValues;
    let first6;
    let tmp64Result = tmp64(11963);
    if (optionValues.current[name.name] != tmp44) {
      first6 = tmp52[0];
    }
    obj8[5] = first6;
    obj8[6] = autoFocusType === onPress.OPTIONAL_OPTION_ADDED;
    obj8[7] = function onSelect(displayName) {
      callback2(name);
      let str;
      if (displayName != null) {
        str = displayName.displayName;
      }
      if (str == null) {
        str = "";
      }
      const items = [{ type: "text", text: str }];
      closure_3(name, items);
    };
    obj8[8] = function onOpenAutocompleteSheet() {
      onPress();
      callback(name);
    };
    obj8[9] = function onDismissAutocompleteSheet() {
      return callback2(name);
    };
    obj8[10] = hasError;
    tmp63(tmp64Result, obj8, name.name);
  } else {
    const obj9 = { style: null, option: null, guildId: null, initialValue: null, onEndEditing: null, onChangeText: null, onFocus: null, autoFocus: null, hasError: null, onPressIn: null };
    obj9[0] = tmp.option;
    obj9[1] = name;
    obj9[2] = channel.guild_id;
    let first7;
    tmp64Result = tmp64(11965);
    if (optionValues.current[name.name] != tmp44) {
      first7 = tmp46[0];
    }
    obj9[3] = first7;
    obj9[4] = function onEndEditing() {
      return callback2(name);
    };
    obj9[5] = function onChangeText(text) {
      callback(name);
      const items = [{ type: "text", text }];
      callback3(name, items);
    };
    obj9[6] = onFocus;
    let items1 = [, ];
    ({ FIRST_REQUIRED_OPTION: arr[0], OPTIONAL_OPTION_ADDED: arr[1] } = onPress);
    obj9[7] = items1.includes(autoFocusType);
    obj9[8] = hasError;
    obj9[9] = onPress;
    tmp63(tmp64Result, obj9, name.name);
  }
};