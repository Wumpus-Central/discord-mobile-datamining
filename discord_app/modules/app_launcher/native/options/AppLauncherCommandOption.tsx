// discord_app/modules/app_launcher/native/options/AppLauncherCommandOption.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import utils_AutocompleteUtilsDefault from "../../../../utils/native/AutocompleteUtils.tsx";
import AppLauncherChoicesOptionDefault from "choices/AppLauncherChoicesOption.tsx";
import AppLauncherAutocompleteOptionDefault from "autocomplete/AppLauncherAutocompleteOption.tsx";
import AppLauncherTextInputOptionDefault from "text_input/AppLauncherTextInputOption.tsx";
import AppLauncherAttachmentOptionDefault from "attachment/AppLauncherAttachmentOption.tsx";
import AppLauncherBooleanOptionDefault from "boolean/AppLauncherBooleanOption.tsx";
import AppLauncherMentionableOptionDefault from "mentionable/AppLauncherMentionableOption.tsx";
import AppLauncherMentionableListActionSheet from "mentionable/AppLauncherMentionableListActionSheet.tsx";
import AppLauncherRoleOptionDefault from "role/AppLauncherRoleOption.tsx";
import AppLauncherUserOptionDefault from "user/AppLauncherUserOption.tsx";
import AppLauncherChannelOptionDefault from "channel/AppLauncherChannelOption.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
let closure_4 = fn(1483).AppLauncherOptionAutoFocusType;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4639);
let obj2 = {
  dismissableOptionWrapper: { flexDirection: "row", alignItems: "center" },
  optionViewContainer: { flex: 1 },
  dismissButton: { marginLeft: 8, marginRight: -4, padding: 4, borderRadius: nativeDefault.radii.round },
  option: { flex: 1 },
};
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/options/AppLauncherCommandOption.tsx");

export default function AppLauncherCommandOption(option) {
  let name = option.option;
  ({ onStartEditing: importDefault, onEndEditing: dependencyMap, onOptionValueChange: View, onPress } = option);
  const onDismiss = option.onDismiss;
  ({ channel, autoFocusType, optionValues, hasError } = option);
  ({ onPressAttachmentOption, onFocus, command } = option);
  const tmp = closure_7();
  let type = name.type;
  if (name(1895).ApplicationCommandOptionType.STRING !== type) {
    if (tmp2(1895).ApplicationCommandOptionType.INTEGER !== type) {
      if (tmp2(1895).ApplicationCommandOptionType.NUMBER !== type) {
        if (tmp2(1895).ApplicationCommandOptionType.ATTACHMENT === type) {
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
        } else if (tmp2(1895).ApplicationCommandOptionType.BOOLEAN === type) {
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
        } else if (tmp2(1895).ApplicationCommandOptionType.MENTIONABLE === type) {
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
        } else if (tmp2(1895).ApplicationCommandOptionType.ROLE === type) {
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
        } else if (tmp2(1895).ApplicationCommandOptionType.USER === type) {
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
        } else if (tmp2(1895).ApplicationCommandOptionType.CHANNEL === type) {
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
            children: tmp13(tmp2(6721).CircleXIcon, { size: "md" }),
          };
          items[1] = tmp13(tmp2(5207).PressableOpacity, obj9);
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
}
