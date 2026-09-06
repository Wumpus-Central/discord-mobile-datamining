// === Module 16868: ContextMenuCommandRootScreen ===

// Module 16868 (ContextMenuCommandRootScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import executeCommandDefault from "executeCommand" /* 9411 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;

require = fn;
const View = fn(17).View;
const ApplicationCommandConstants = fn(4999);
({ CONTEXT_MENU_COMMANDS_QUERY_LIMIT: closure_8, BuiltInSectionId: closure_9 } = ApplicationCommandConstants);
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
fn(4560);
let createStyles = { content: null, sectionHeader: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.content = createStyles;
createStyles.sectionHeader = { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_13 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/native/ContextMenuCommandRootScreen.tsx");

export default function ContextMenuCommandRootScreen(navigation) {
  navigation = navigation.navigation;
  const params = navigation.route.params;
  const channel = params.channel;
  const commandTargetId = params.commandTargetId;
  const onPressAppCommand = params.onPressAppCommand;
  const onClose = params.onClose;
  closure_7 = undefined;
  let commands;
  let commandsByActiveSection;
  let sectionDescriptors;
  let loading;
  let sections;
  let onPressCommand;
  let callback1;
  let frecencyItems;
  let appItems;
  let memo1;
  closure_18 = undefined;
  c19 = undefined;
  let scaledTextLineHeight;
  let obj = navigation(onPressAppCommand[8]);
  let items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id));
  let obj1 = stateFromStores;
  closure_6 = stateFromStores.useRef(false);
  const tmp4 = onClose(stateFromStores.useState(""), 2);
  const first = tmp4[0];
  closure_7 = tmp6;
  let items1 = [navigation, onClose];
  const effect = stateFromStores.useEffect(() => navigation.addListener("beforeRemove", () => {
    if (!ref.current) {
      if (onClose != null) {
        tmp();
      }
    }
  }), items1);
  let obj2 = commandTargetId(onPressAppCommand[9]);
  obj = { context: { channel, type: "channel" }, filters: null, options: null, allowFetch: true };
  let tmp8;
  if ("" !== first) {
    tmp8 = first;
  }
  obj = { text: tmp8, commandTypes: null };
  let items2 = [params.commandType];
  obj.commandTypes = items2;
  obj.filters = obj;
  obj1 = { limit: commands, includeFrecency: !tmp6, scoreMethod: null };
  let prop;
  if ("" !== first) {
    prop = tmp(tmp2[10]).ScoreMethod.COMMAND_OR_APPLICATION;
  }
  obj1.scoreMethod = prop;
  obj.options = obj1;
  const discovery = obj2.useDiscovery(obj);
  commands = discovery.commands;
  commandsByActiveSection = discovery.commandsByActiveSection;
  sectionDescriptors = discovery.sectionDescriptors;
  loading = discovery.loading;
  let items3 = [sectionDescriptors];
  sections = obj1.useMemo(() => {
    sections = {};
    const item = sectionDescriptors.forEach((id) => {
      sections[id.id] = id;
    });
    return { sections };
  }, items3).sections;
  let items4 = [channel, commandTargetId, stateFromStores, navigation, onPressAppCommand];
  onPressCommand = obj1.useCallback((command) => {
    if (onPressAppCommand != null) {
      tmp();
    }
    closure_6.current = true;
    let obj = { command, optionValues: {}, context: null, commandTargetId };
    obj = { channel, guild: stateFromStores };
    obj.context = obj;
    executeCommandDefault(obj);
    let parent = navigation.getParent();
    if (parent == null) {
      parent = navigation;
    }
    parent.goBack();
  }, items4);
  let items5 = [commandsByActiveSection, navigation, onPressCommand];
  callback1 = obj1.useCallback((section) => {
    const found = commandsByActiveSection.find((section) => section.section.id === section.id);
    let data;
    if (found != null) {
      data = found.data;
    }
    if (data == null) {
      data = [];
    }
    navigation.navigate("app", { section, commands: data, onPressCommand });
  }, items5);
  const items6 = [loading, commands.length, commandsByActiveSection];
  const memo = obj1.useMemo(() => {
    if (!loading) {
      if (0 !== commands.length) {
        const found = commandsByActiveSection.find((section) => section.section.id === constants.FRECENCY);
        const found1 = commandsByActiveSection.filter((section) => section.section.id !== constants.FRECENCY);
        let mapped;
        if (found != null) {
          const data = found.data;
          mapped = data.map((command) => ({ type: "command", command }));
        }
        if (mapped == null) {
          mapped = [];
        }
        const obj = { frecencyItems: mapped, appItems: found1.map((section) => ({ type: "app", section: section.section })) };
        return obj;
      }
    }
    return { frecencyItems: [], appItems: [] };
  }, items6);
  frecencyItems = memo.frecencyItems;
  appItems = memo.appItems;
  const items7 = [loading, commands, "" !== first, frecencyItems, appItems];
  memo1 = obj1.useMemo(() => {
    if (loading) {
      const items = [{ type: "placeholder" }];
      const items1 = [items];
      return items1;
    } else {
      let arr = commands;
      if (0 === commands.length) {
        const items2 = [{ type: "no_commands" }];
        const items3 = [items2];
        return items3;
      } else if (closure_7) {
        const items4 = [arr.map((command) => ({ type: "command", command }))];
        return items4;
      } else {
        const items5 = [];
        if (frecencyItems.length > 0) {
          arr = items5.push(tmp2);
        }
        if (appItems.length > 0) {
          arr = items5.push(tmp4);
        }
        return items5;
      }
    }
  }, items7);
  const items8 = [memo1];
  const memo2 = obj1.useMemo(() => memo1.map((item) => item.length), items8);
  const tmp18 = onPressCommand();
  closure_18 = tmp18;
  c19 = "text-sm/semibold";
  const tmp16 = channel(onPressAppCommand[13])();
  scaledTextLineHeight = navigation(onPressAppCommand[14]).useScaledTextLineHeight("text-sm/semibold");
  const items9 = [loading, commands.length, "" !== first, frecencyItems.length, tmp18.sectionHeader];
  const items10 = [memo1, onPressCommand, callback1, sections];
  const callback2 = obj1.useCallback((arg0) => {
    if (!loading) {
      if (0 !== commands.length) {
        if (!closure_7) {
          if (0 === arg0) {
            if (frecencyItems.length > 0) {
              const intl2 = util.intl;
              let stringResult = intl2.string(util.t.V0w2ap);
            }
            const obj = { variant, color: "text-default", style: closure_18.sectionHeader, children: stringResult };
            return closure_2_10(Text_Text.Text, obj);
          }
          const intl = util.intl;
          stringResult = intl.string(util.t.PHjkRE);
        }
      }
    }
    return null;
  }, items9);
  const items11 = [loading, commands.length, "" !== first, scaledTextLineHeight, tmp18.sectionHeader.paddingTop, tmp18.sectionHeader.paddingBottom];
  const callback3 = obj1.useCallback((arg0, arg1) => {
    closure_0 = tmp;
    const type = tmp.type;
    if ("placeholder" === type) {
      let obj = { start: tmp2, end: tmp3 };
      return sectionDescriptors(navigation(onPressAppCommand[17]).ContextMenuCommandLoadingItem, obj, "placeholder");
    } else if ("no_commands" === type) {
      obj = { start: tmp2, end: tmp3 };
      return sectionDescriptors(navigation(onPressAppCommand[17]).ContextMenuCommandEmptyItem, obj, "no_commands");
    } else if ("command" === type) {
      const obj1 = {
        item: tmp.command,
        onPress() {
            return callback(closure_0.command);
          },
        section: sections[tmp.command.applicationId],
        start: tmp2,
        end: tmp3
      };
      return sectionDescriptors(channel(onPressAppCommand[17]), obj1, tmp.command.id);
    } else if ("app" === type) {
      obj = {
        section: tmp.section,
        onPress() {
            return callback1(closure_0.section);
          },
        start: tmp2,
        end: tmp3
      };
      return sectionDescriptors(navigation(onPressAppCommand[17]).ContextMenuCommandAppItem, obj, tmp.section.id);
    }
  }, items10);
  let tmp27Result = tmp6;
  const memo3 = obj1.useMemo(() => {
    let num = 0;
    if (!loading) {
      num = 0;
      if (0 !== commands.length) {
        num = 0;
        if (!closure_7) {
          num = scaledTextLineHeight + closure_18.sectionHeader.paddingTop + closure_18.sectionHeader.paddingBottom;
        }
      }
    }
    return num;
  }, items11);
  if ("" === first) {
    let tmp26 = !loading;
    if (!loading) {
      tmp26 = commands.length > 0;
    }
    tmp27Result = tmp26;
  }
  if (tmp27Result) {
    const items12 = [tmp18.content, ];
    let num2 = 0;
    if (tmp6) {
      num2 = tmp15(tmp2[7]).space.PX_16;
    }
    obj2 = { style: null, children: null };
    const obj3 = { marginBottom: num2 };
    items12[1] = obj3;
    obj2.style = items12;
    const obj4 = { size: "md", onChange: tmp4[1], placeholder: null };
    let intl = tmp(tmp2[15]).intl;
    obj4.placeholder = intl.string(tmp(tmp2[15]).t.m1UwbP);
    obj2.children = sectionDescriptors(tmp(tmp2[18]).SearchField, obj4);
    tmp27Result = tmp27(closure_6, obj2);
  }
  const obj5 = { children: null };
  const items13 = [tmp27Result, ];
  const tmp23 = sections;
  const tmp24 = loading;
  const tmpResult = navigation(onPressAppCommand[14]);
  items13[1] = sectionDescriptors(channel(onPressAppCommand[19]), { sections: memo2, estimatedListSize: "windowSize", itemSize: tmp16, insetEnd: channel(onPressAppCommand[12])({ includeKeyboardHeight: true }).insets.bottom, renderItem: callback3, renderSectionHeader: callback2, sectionHeaderSize: memo3, style: tmp18.content });
  obj5.children = items13;
  return tmp23(tmp24, obj5);
};