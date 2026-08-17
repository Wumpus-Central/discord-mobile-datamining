// discord_app/modules/application_commands/native/ContextMenuCommandRootScreen.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_4 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../../stores/GuildStore.tsx";
import TRUE_OPTION_NAME from "../ApplicationCommandConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ CONTEXT_MENU_COMMANDS_QUERY_LIMIT: closure_8, BuiltInSectionId: c9 } = TRUE_OPTION_NAME);
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { content: null, sectionHeader: null };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingTop: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_8, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_13 = createCacheKey.createStyles(createCacheKey);
let obj1 = { paddingTop: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_8, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
const result = require("set").fileFinishedImporting("modules/application_commands/native/ContextMenuCommandRootScreen.tsx");

export default function ContextMenuCommandRootScreen(navigation) {
  navigation = navigation.navigation;
  const params = navigation.route.params;
  const channel = params.channel;
  const commandTargetId = params.commandTargetId;
  const onPressAppCommand = params.onPressAppCommand;
  const onClose = params.onClose;
  let stateFromStores;
  closure_6 = undefined;
  closure_7 = undefined;
  let commands;
  let commandsByActiveSection;
  let sectionDescriptors;
  let loading;
  let sections;
  let callback;
  let callback1;
  let frecencyItems;
  let appItems;
  let memo1;
  closure_18 = undefined;
  c19 = undefined;
  let scaledTextLineHeight;
  let obj = navigation(onPressAppCommand[8]);
  let items = [closure_7];
  stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(channel.guild_id));
  obj1 = stateFromStores;
  closure_6 = stateFromStores.useRef(false);
  const tmp4 = onClose(stateFromStores.useState(""), 2);
  const first = tmp4[0];
  closure_7 = tmp6;
  let items1 = [navigation, onClose];
  const effect = stateFromStores.useEffect(() => navigation.addListener("beforeRemove", () => {
    if (!ref.current) {
      if (closure_4 != null) {
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
  let items2 = [params.commandType];
  obj[1] = { text: tmp8, commandTypes: items2 };
  obj = { limit: commands, includeFrecency: !tmp6, scoreMethod: null };
  let prop;
  if ("" !== first) {
    prop = tmp(tmp2[10]).ScoreMethod.COMMAND_OR_APPLICATION;
  }
  obj[2] = prop;
  obj[2] = obj;
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
  callback = obj1.useCallback((command) => {
    if (onPressAppCommand != null) {
      tmp();
    }
    closure_6.current = true;
    obj = { command, optionValues: {}, context: obj, commandTargetId };
    obj = { channel, guild: stateFromStores };
    channel(onPressAppCommand[11])(obj);
    let parent = navigation.getParent();
    if (parent == null) {
      parent = navigation;
    }
    parent.goBack();
  }, items4);
  let items5 = [commandsByActiveSection, navigation, callback];
  callback1 = obj1.useCallback((section) => {
    navigation = section;
    const found = commandsByActiveSection.find((section) => section.section.id === section.id);
    let data;
    if (found != null) {
      data = found.data;
    }
    if (data == null) {
      data = [];
    }
    navigation.navigate("app", { section, commands: data, onPressCommand: callback });
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
        const obj = { frecencyItems: null, appItems: null };
        obj[0] = mapped;
        obj[1] = found1.map((section) => ({ type: "app", section: section.section }));
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
  const memo2 = obj1.useMemo(() => memo1.map((arg0) => arg0.length), items8);
  const tmp18 = callback();
  closure_18 = tmp18;
  c19 = "text-sm/semibold";
  const tmp16 = channel(onPressAppCommand[13])();
  scaledTextLineHeight = navigation(onPressAppCommand[14]).useScaledTextLineHeight("text-sm/semibold");
  const items9 = [loading, commands.length, "" !== first, frecencyItems.length, tmp18.sectionHeader];
  const items10 = [memo1, callback, callback1, sections];
  const callback2 = obj1.useCallback((arg0) => {
    if (!loading) {
      if (0 !== commands.length) {
        if (!closure_7) {
          if (0 === arg0) {
            if (frecencyItems.length > 0) {
              const intl2 = navigation(onPressAppCommand[15]).intl;
              let stringResult = intl2.string(navigation(onPressAppCommand[15]).t.V0w2ap);
            }
            const obj = { variant: null, color: "text-default", style: null, children: null };
            obj[0] = c19;
            obj[2] = closure_18.sectionHeader;
            obj[3] = stringResult;
            return sectionDescriptors(navigation(onPressAppCommand[16]).Text, obj);
          }
          const intl = navigation(onPressAppCommand[15]).intl;
          stringResult = intl.string(navigation(onPressAppCommand[15]).t.PHjkRE);
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
      let obj = { start: null, end: null };
      obj[0] = tmp2;
      obj[1] = tmp3;
      return sectionDescriptors(navigation(onPressAppCommand[17]).ContextMenuCommandLoadingItem, obj, "placeholder");
    } else if ("no_commands" === type) {
      obj = { start: null, end: null };
      obj[0] = tmp2;
      obj[1] = tmp3;
      return sectionDescriptors(navigation(onPressAppCommand[17]).ContextMenuCommandEmptyItem, obj, "no_commands");
    } else if ("command" === type) {
      obj1 = { item: null, onPress: null, section: null, start: null, end: null };
      obj1[0] = tmp.command;
      obj1[1] = function onPress() {
        return closure_1_13(closure_0.command);
      };
      obj1[2] = sections[tmp.command.applicationId];
      obj1[3] = tmp2;
      obj1[4] = tmp3;
      return sectionDescriptors(channel(onPressAppCommand[17]), obj1, tmp.command.id);
    } else if ("app" === type) {
      obj = { section: null, onPress: null, start: null, end: null };
      obj[0] = tmp.section;
      obj[1] = function onPress() {
        return closure_1_14(closure_0.section);
      };
      obj[2] = tmp2;
      obj[3] = tmp3;
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
    obj1 = { style: null, children: null };
    obj2 = { marginBottom: null };
    obj2[0] = num2;
    items12[1] = obj2;
    obj1[0] = items12;
    const obj3 = { size: "md", onChange: null, placeholder: null };
    obj3[1] = tmp4[1];
    let intl = tmp(tmp2[15]).intl;
    obj3[2] = intl.string(tmp(tmp2[15]).t.m1UwbP);
    obj1[1] = sectionDescriptors(tmp(tmp2[18]).SearchField, obj3);
    tmp27Result = tmp27(closure_6, obj1);
    const tmp28 = closure_6;
  }
  const obj4 = { children: null };
  const items13 = [tmp27Result, ];
  const tmp23 = sections;
  const tmp24 = loading;
  const tmpResult = navigation(onPressAppCommand[14]);
  items13[1] = sectionDescriptors(channel(onPressAppCommand[19]), { sections: memo2, estimatedListSize: "windowSize", itemSize: tmp16, insetEnd: channel(onPressAppCommand[12])({ includeKeyboardHeight: true }).insets.bottom, renderItem: callback3, renderSectionHeader: callback2, sectionHeaderSize: memo3, style: tmp18.content });
  obj4[0] = items13;
  return tmp23(tmp24, obj4);
};