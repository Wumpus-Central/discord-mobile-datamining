// === Module 12839: CreateGuildModal ===

// Module 12839 (CreateGuildModal)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1248 */;
import NavigatorHeader from "NavigatorHeader" /* 5705 */;
import CreateGuildModalActionCreatorsDefault from "CreateGuildModalActionCreators" /* 12838 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;

require = fn;
const Keyboard = fn(17).Keyboard;
const CreateGuildConstants = fn(7081);
({ CreateGuildModalStates: metroRequire, GuildTemplateTriggers: closure_7 } = CreateGuildConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_8, AnalyticsSections: closure_9 } = Constants);
const jsx = fn(21).jsx;
let impressionProperties = { impression_group: fn(1248).ImpressionGroups.GUILD_ADD_FLOW };
const size = fn(2);
let result = size.fileFinishedImporting("modules/create_guild/native/components/CreateGuildModal.tsx");

export default function CreateGuildModal(channel) {
  channel = channel.channel;
  const initialState = channel.initialState;
  const onSuccess = channel.onSuccess;
  let isWindowSmall;
  let items = [channel, initialState];
  const memo = isWindowSmall.useMemo(() => {
    if (initialState === constants.JOIN_SERVER) {
      const obj2 = { name: constants.JOIN_SERVER, param: null };
      const obj3 = { initialRoute: constants.JOIN_SERVER };
      obj2.param = obj3;
      const items = [obj2];
      let items2 = items;
    } else if (null == channel) {
      const obj4 = { name: constants.GUILD_TEMPLATES };
      const items1 = [obj4];
      items2 = items1;
    } else {
      const obj = { name: constants.GUILD_INVITE, param: null };
      const obj5 = { channel: tmp2, onClose: CreateGuildModalActionCreatorsDefault.closeCreateGuildModal };
      obj.param = obj5;
      items2 = [obj];
    }
    return items2;
  }, items);
  isWindowSmall = channel(onSuccess[22]).useIsWindowSmall();
  let obj2 = { screens: null, initialRouteStack: memo, headerBackTitle: null, onWillFocus: null };
  let items1 = [initialState, isWindowSmall, onSuccess];
  obj2.screens = isWindowSmall.useMemo(() => {
    let initialRoute = initialState;
    closure_1 = onSuccess;
    impressionProperties = {};
    let obj2 = {
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_LANDING,
      impressionProperties,
      fullscreen: true,
      headerTitle() {
        return null;
      },
      headerLeft: NavigatorHeader.getHeaderCloseButton(CreateGuildModalActionCreatorsDefault.closeCreateGuildModal),
      render() {
        return closure_1_10(closure_1(12840), { trigger: constants2.IN_APP });
      }
    };
    impressionProperties[constants.GUILD_TEMPLATES] = obj2;
    impressionProperties[constants.CREATION_INTENT] = {
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
      impressionProperties,
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(guildTemplate) {
        return closure_1_10(closure_1(12842), { guildTemplate: guildTemplate.guildTemplate, trigger: constants2.IN_APP });
      }
    };
    let obj4 = {
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
      impressionProperties,
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(guildTemplate) {
        return closure_1_10(closure_1(12842), { guildTemplate: guildTemplate.guildTemplate, trigger: constants2.IN_APP });
      }
    };
    impressionProperties[constants.CREATE_SERVER] = {
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_CUSTOMIZE,
      impressionProperties,
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(arg0, arg1) {
        initialRoute = arg1;
        let obj = {};
        const merged = Object.assign(arg0);
        obj.onCreate = function onCreate(guild) {
          const id = guild.guild.id;
          const guildProgress = closure_0(12604).createGuildProgress(id);
          defaultChannel = defaultChannel.getDefaultChannel(id);
          if (null != defaultChannel) {
            closure_1(9956).init(id, defaultChannel.id, { location: "Guild Create Flow" });
            const obj3 = { guildId: id };
            closure_0.push(constants.GUILD_INVITE, obj3);
            const obj2 = closure_1(9956);
            const obj7 = { flow_type: constants4.GUILD_CREATE_MODAL, from_step: null, to_step: null };
            ({ CREATE_SERVER: obj5.from_step, GUILD_INVITE: obj5.to_step } = constants);
            closure_1(1240).track(constants3.USER_FLOW_TRANSITION, obj7);
            const obj4 = closure_1(1240);
          }
          const obj = closure_0(12604);
        };
        const intl = initialRoute(1114).intl;
        obj.customTitle = intl.string(initialRoute(1114).t["5HZu07"]);
        return closure_10(closure_1(12463), obj);
      }
    };
    const obj5 = {
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_CUSTOMIZE,
      impressionProperties,
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(arg0, arg1) {
        initialRoute = arg1;
        let obj = {};
        const merged = Object.assign(arg0);
        obj.onCreate = function onCreate(guild) {
          const id = guild.guild.id;
          const guildProgress = closure_0(12604).createGuildProgress(id);
          defaultChannel = defaultChannel.getDefaultChannel(id);
          if (null != defaultChannel) {
            closure_1(9956).init(id, defaultChannel.id, { location: "Guild Create Flow" });
            const obj3 = { guildId: id };
            closure_0.push(constants.GUILD_INVITE, obj3);
            const obj2 = closure_1(9956);
            const obj7 = { flow_type: constants4.GUILD_CREATE_MODAL, from_step: null, to_step: null };
            ({ CREATE_SERVER: obj5.from_step, GUILD_INVITE: obj5.to_step } = constants);
            closure_1(1240).track(constants3.USER_FLOW_TRANSITION, obj7);
            const obj4 = closure_1(1240);
          }
          const obj = closure_0(12604);
        };
        const intl = initialRoute(1114).intl;
        obj.customTitle = intl.string(initialRoute(1114).t["5HZu07"]);
        return closure_10(closure_1(12463), obj);
      }
    };
    impressionProperties[constants.GUILD_INVITE] = {
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_GUILD_INVITE,
      impressionProperties,
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(guildId) {
        guildId = guildId.guildId;
        return closure_1_10(closure_1(12843), {
          closeOnEditInviteLink: false,
          onClose() {
            const result = initialState(onSuccess[9]).transitionToGuildSync(guildId);
            const obj = initialState(onSuccess[9]);
            const result1 = initialState(onSuccess[10]).closeCreateGuildModal();
            if (null != closure_1) {
              closure_1(guildId);
            }
            const obj2 = initialState(onSuccess[10]);
          }
        });
      }
    };
    const obj6 = {
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_GUILD_INVITE,
      impressionProperties,
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(guildId) {
        guildId = guildId.guildId;
        return closure_1_10(closure_1(12843), {
          closeOnEditInviteLink: false,
          onClose() {
            const result = initialState(onSuccess[9]).transitionToGuildSync(guildId);
            const obj = initialState(onSuccess[9]);
            const result1 = initialState(onSuccess[10]).closeCreateGuildModal();
            if (null != closure_1) {
              closure_1(guildId);
            }
            const obj2 = initialState(onSuccess[10]);
          }
        });
      }
    };
    impressionProperties[constants.JOIN_SERVER] = {
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_JOIN,
      impressionProperties,
      fullscreen: true,
      headerTitle: isWindowSmall ? (() => {
        const obj = { title: null };
        const intl = initialRoute(1114).intl;
        obj.title = intl.string(initialRoute(1114).t.jlfuFW);
        return closure_1_10(initialRoute(7966).GenericHeaderTitle, obj);
      }) : (() => null),
      render(arg0) {
        const obj = { initialRoute };
        const merged = Object.assign(arg0);
        obj.onClose = initialState(onSuccess[10]).closeCreateGuildModal;
        return jsx(initialState(onSuccess[19]), { initialRoute });
      }
    };
    let obj7 = {
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_JOIN,
      impressionProperties,
      fullscreen: true,
      headerTitle: isWindowSmall ? (() => {
        const obj = { title: null };
        const intl = initialRoute(1114).intl;
        obj.title = intl.string(initialRoute(1114).t.jlfuFW);
        return closure_1_10(initialRoute(7966).GenericHeaderTitle, obj);
      }) : (() => null),
      render(arg0) {
        const obj = { initialRoute };
        const merged = Object.assign(arg0);
        obj.onClose = initialState(onSuccess[10]).closeCreateGuildModal;
        return jsx(initialState(onSuccess[19]), { initialRoute });
      }
    };
    impressionProperties[constants.ACCEPT_INVITE] = {
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_ACCEPT_INVITE,
      impressionProperties,
      fullscreen: true,
      headerTitle() {
        return null;
      },
      headerLeft() {
        return null;
      },
      render(code) {
        const obj = { code: code.code, onPressClose: closure_1(12838).closeCreateGuildModal };
        return closure_1_10(closure_1(12846), obj);
      }
    };
    const obj9 = {
      impressionName: "Array",
      impressionProperties,
      fullscreen: true,
      ignoreKeyboard: null,
      headerTitle() {
        return null;
      },
      headerLeft() {
        return null;
      },
      render() {
        return closure_1_10(closure_1(12857), { isNestedNavigator: true });
      }
    };
    impressionProperties[constants.JOIN_STUDENT_HUB] = obj9;
    return impressionProperties;
  }, items1);
  let intl = channel(onSuccess[16]).intl;
  obj2.headerBackTitle = intl.string(channel(onSuccess[16]).t["13/7kX"]);
  obj2.onWillFocus = Keyboard.dismiss;
  return jsx(channel(onSuccess[23]).Navigator, { screens: null, initialRouteStack: memo, headerBackTitle: null, onWillFocus: null });
};