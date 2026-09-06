// === Module 12709: CreateGuildModal ===

// Module 12709 (CreateGuildModal)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import CreateGuildModalActionCreatorsDefault from "CreateGuildModalActionCreators" /* 12708 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;

require = fn;
const Keyboard = fn(17).Keyboard;
const CreateGuildConstants = fn(6980);
({ CreateGuildModalStates: metroRequire, GuildTemplateTriggers: closure_7 } = CreateGuildConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_8, AnalyticsSections: closure_9 } = Constants);
const jsx = fn(21).jsx;
let obj = { impression_group: fn(1250).ImpressionGroups.GUILD_ADD_FLOW };
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
      let param = { name: constants.JOIN_SERVER, param: null };
      param = { initialRoute: constants.JOIN_SERVER };
      param.param = param;
      const items = [param];
      let items2 = items;
    } else if (null == channel) {
      const obj1 = { name: constants.GUILD_TEMPLATES };
      const items1 = [obj1];
      items2 = items1;
    } else {
      param = { name: constants.GUILD_INVITE, param: null };
      const obj2 = { channel: tmp2, onClose: CreateGuildModalActionCreatorsDefault.closeCreateGuildModal };
      param.param = obj2;
      items2 = [param];
    }
    return items2;
  }, items);
  obj = channel(onSuccess[22]);
  isWindowSmall = obj.useIsWindowSmall();
  obj = { screens: null, initialRouteStack: memo, headerBackTitle: null, onWillFocus: null };
  let items1 = [initialState, isWindowSmall, onSuccess];
  obj.screens = isWindowSmall.useMemo(() => {
    let initialRoute = initialState;
    closure_1 = onSuccess;
    let impressionProperties = {};
    impressionProperties = {
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_LANDING,
      impressionProperties,
      fullscreen: true,
      headerTitle() {
        return null;
      },
      headerLeft: null,
      render: null
    };
    let obj2 = NavigatorHeader;
    impressionProperties.headerLeft = obj2.getHeaderCloseButton(CreateGuildModalActionCreatorsDefault.closeCreateGuildModal);
    impressionProperties.render = function render() {
      return closure_1_10(closure_1(12710), { trigger: constants2.IN_APP });
    };
    impressionProperties[constants.GUILD_TEMPLATES] = impressionProperties;
    impressionProperties = {
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
      impressionProperties,
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(guildTemplate) {
        return closure_1_10(closure_1(12712), { guildTemplate: guildTemplate.guildTemplate, trigger: constants2.IN_APP });
      }
    };
    impressionProperties[constants.CREATION_INTENT] = impressionProperties;
    impressionProperties[constants.CREATE_SERVER] = {
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_CUSTOMIZE,
      impressionProperties,
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(arg0, arg1) {
        initialRoute = arg1;
        obj = {};
        const merged = Object.assign(arg0);
        obj.onCreate = function onCreate(guild) {
          const id = guild.guild.id;
          let arr = closure_0;
          obj = closure_0(12474);
          const guildProgress = obj.createGuildProgress(id);
          defaultChannel = defaultChannel.getDefaultChannel(id);
          if (null != defaultChannel) {
            closure_1(9826).init(id, defaultChannel.id, { location: "Guild Create Flow" });
            obj = { guildId: id };
            arr = arr.push(constants.GUILD_INVITE, obj);
            const obj2 = closure_1(9826);
            obj = { flow_type: constants4.GUILD_CREATE_MODAL, from_step: null, to_step: null };
            ({ CREATE_SERVER: obj5.from_step, GUILD_INVITE: obj5.to_step } = constants);
            closure_1(1242).track(constants3.USER_FLOW_TRANSITION, obj);
            const obj4 = closure_1(1242);
          }
        };
        const intl = initialRoute(1114).intl;
        obj.customTitle = intl.string(initialRoute(1114).t["5HZu07"]);
        return closure_10(closure_1(12333), obj);
      }
    };
    obj2 = {
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_GUILD_INVITE,
      impressionProperties,
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(guildId) {
        guildId = guildId.guildId;
        return closure_1_10(closure_1(12713), {
          closeOnEditInviteLink: false,
          onClose() {
            const result = initialState(onSuccess[9]).transitionToGuildSync(guildId);
            obj = initialState(onSuccess[9]);
            const result1 = initialState(onSuccess[10]).closeCreateGuildModal();
            if (null != closure_1) {
              closure_1(guildId);
            }
            const obj2 = initialState(onSuccess[10]);
          }
        });
      }
    };
    impressionProperties[constants.GUILD_INVITE] = obj2;
    const obj1 = {
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_CUSTOMIZE,
      impressionProperties,
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(arg0, arg1) {
        initialRoute = arg1;
        obj = {};
        const merged = Object.assign(arg0);
        obj.onCreate = function onCreate(guild) {
          const id = guild.guild.id;
          let arr = closure_0;
          obj = closure_0(12474);
          const guildProgress = obj.createGuildProgress(id);
          defaultChannel = defaultChannel.getDefaultChannel(id);
          if (null != defaultChannel) {
            closure_1(9826).init(id, defaultChannel.id, { location: "Guild Create Flow" });
            obj = { guildId: id };
            arr = arr.push(constants.GUILD_INVITE, obj);
            const obj2 = closure_1(9826);
            obj = { flow_type: constants4.GUILD_CREATE_MODAL, from_step: null, to_step: null };
            ({ CREATE_SERVER: obj5.from_step, GUILD_INVITE: obj5.to_step } = constants);
            closure_1(1242).track(constants3.USER_FLOW_TRANSITION, obj);
            const obj4 = closure_1(1242);
          }
        };
        const intl = initialRoute(1114).intl;
        obj.customTitle = intl.string(initialRoute(1114).t["5HZu07"]);
        return closure_10(closure_1(12333), obj);
      }
    };
    impressionProperties[constants.JOIN_SERVER] = {
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_JOIN,
      impressionProperties,
      fullscreen: true,
      headerTitle: isWindowSmall ? (() => {
        obj = { title: null };
        const intl = initialRoute(1114).intl;
        obj.title = intl.string(initialRoute(1114).t.jlfuFW);
        return closure_1_10(initialRoute(7863).GenericHeaderTitle, obj);
      }) : (() => null),
      render(arg0) {
        obj = { initialRoute };
        const merged = Object.assign(arg0);
        obj.onClose = initialState(onSuccess[10]).closeCreateGuildModal;
        return jsx(initialState(onSuccess[19]), { initialRoute });
      }
    };
    const obj3 = {
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_JOIN,
      impressionProperties,
      fullscreen: true,
      headerTitle: isWindowSmall ? (() => {
        obj = { title: null };
        const intl = initialRoute(1114).intl;
        obj.title = intl.string(initialRoute(1114).t.jlfuFW);
        return closure_1_10(initialRoute(7863).GenericHeaderTitle, obj);
      }) : (() => null),
      render(arg0) {
        obj = { initialRoute };
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
        obj = { code: code.code, onPressClose: closure_1(12708).closeCreateGuildModal };
        return closure_1_10(closure_1(12716), obj);
      }
    };
    const obj5 = {
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
        return closure_1_10(closure_1(12727), { isNestedNavigator: true });
      }
    };
    impressionProperties[constants.JOIN_STUDENT_HUB] = obj5;
    return impressionProperties;
  }, items1);
  let intl = channel(onSuccess[16]).intl;
  obj.headerBackTitle = intl.string(channel(onSuccess[16]).t["13/7kX"]);
  obj.onWillFocus = Keyboard.dismiss;
  return jsx(channel(onSuccess[23]).Navigator, { screens: null, initialRouteStack: memo, headerBackTitle: null, onWillFocus: null });
};