// discord_app/modules/create_guild/native/components/CreateGuildModal.tsx
import noop from "../../../../../_runtime/00019_noop.js";
import { Keyboard } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import comparator from "../../../../stores/GuildChannelStore.tsx";
import NUXGuildTemplatesAnalytics from "../CreateGuildConstants.tsx";
import ME from "../../../../Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
({ CreateGuildModalStates: closure_6, GuildTemplateTriggers: error } = NUXGuildTemplatesAnalytics);
({ AnalyticEvents: closure_8, AnalyticsSections: c9 } = ME);
let obj = { impression_group: require("encodeProperties").ImpressionGroups.GUILD_ADD_FLOW };
let result = require("obj132").fileFinishedImporting("modules/create_guild/native/components/CreateGuildModal.tsx");

export default function CreateGuildModal(channel) {
  channel = channel.channel;
  const initialState = channel.initialState;
  const onSuccess = channel.onSuccess;
  let isWindowSmall;
  let items = [channel, initialState];
  const memo = isWindowSmall.useMemo(() => {
    if (initialState === closure_1_6.JOIN_SERVER) {
      obj = { name: null, param: null };
      obj[0] = closure_1_6.JOIN_SERVER;
      obj = { initialRoute: null };
      obj[0] = closure_1_6.JOIN_SERVER;
      obj[1] = obj;
      const items = [obj];
      let items2 = items;
    } else if (null == channel) {
      obj1 = { name: null };
      obj1[0] = closure_1_6.GUILD_TEMPLATES;
      const items1 = [obj1];
      items2 = items1;
    } else {
      obj = { name: null, param: null };
      obj[0] = closure_1_6.GUILD_INVITE;
      const obj2 = { channel: null, onClose: null };
      obj2[0] = tmp2;
      obj2[1] = initialState(onSuccess[10]).closeCreateGuildModal;
      obj[1] = obj2;
      items2 = [obj];
    }
    return items2;
  }, items);
  obj = channel(onSuccess[22]);
  isWindowSmall = obj.useIsWindowSmall();
  obj = {
    screens: isWindowSmall.useMemo(() => {
      closure_0 = closure_1;
      closure_1 = onSuccess;
      obj = {
        impressionName: channel(onSuccess[11]).ImpressionNames.GUILD_ADD_LANDING,
        impressionProperties: closure_1_11,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        headerLeft: null,
        render: null
      };
      let obj2 = channel(onSuccess[12]);
      obj[4] = obj2.getHeaderCloseButton(initialState(onSuccess[10]).closeCreateGuildModal);
      obj[5] = function render() {
        return callback3(callback2(11883), { trigger: constants.IN_APP });
      };
      obj[closure_1_6.GUILD_TEMPLATES] = obj;
      obj = {
        impressionName: channel(onSuccess[11]).ImpressionNames.GUILD_ADD_INTENT_SELECTION,
        impressionProperties: closure_1_11,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        render(guildTemplate) {
          return callback3(callback2(11885), { guildTemplate: guildTemplate.guildTemplate, trigger: constants.IN_APP });
        }
      };
      obj[closure_1_6.CREATION_INTENT] = obj;
      obj[closure_1_6.CREATE_SERVER] = {
        impressionName: channel(onSuccess[11]).ImpressionNames.GUILD_ADD_CUSTOMIZE,
        impressionProperties: closure_1_11,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        render(arg0, arg1) {
          const callback = arg1;
          obj = {};
          const merged = Object.assign(arg0);
          obj.onCreate = function onCreate(guild) {
            const id = guild.guild.id;
            let arr = callback;
            obj = callback(closure_1_2[6]);
            const guildProgress = obj.createGuildProgress(id);
            const defaultChannel = closure_1_5.getDefaultChannel(id);
            if (null != defaultChannel) {
              closure_1_1(closure_1_2[7]).init(id, defaultChannel.id, { location: "Guild Create Flow" });
              obj = { guildId: null };
              obj[0] = id;
              arr = arr.push(closure_1_6.GUILD_INVITE, obj);
              const obj2 = closure_1_1(closure_1_2[7]);
              obj = { flow_type: null, from_step: null, to_step: null };
              obj[0] = closure_1_9.GUILD_CREATE_MODAL;
              ({ CREATE_SERVER: obj5[1], GUILD_INVITE: obj5[2] } = closure_1_6);
              closure_1_1(closure_1_2[8]).track(closure_1_8.USER_FLOW_TRANSITION, obj);
              const obj4 = closure_1_1(closure_1_2[8]);
            }
          };
          const intl = callback(1236).intl;
          obj.customTitle = intl.string(callback(1236).t["5HZu07"]);
          return callback3(callback2(11500), obj);
        }
      };
      obj2 = {
        impressionName: channel(onSuccess[11]).ImpressionNames.GUILD_ADD_GUILD_INVITE,
        impressionProperties: closure_1_11,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        render(guildId) {
          guildId = guildId.guildId;
          return closure_1_10(callback2(onSuccess[17]), {
            closeOnEditInviteLink: false,
            onClose() {
              const result = callback(onSuccess[9]).transitionToGuildSync(guildId);
              obj = callback(onSuccess[9]);
              const result1 = callback(onSuccess[10]).closeCreateGuildModal();
              if (null != closure_1_1) {
                closure_1_1(guildId);
              }
              const obj2 = callback(onSuccess[10]);
            }
          });
        }
      };
      obj[closure_1_6.GUILD_INVITE] = obj2;
      obj1 = {
        impressionName: channel(onSuccess[11]).ImpressionNames.GUILD_ADD_CUSTOMIZE,
        impressionProperties: closure_1_11,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        render(arg0, arg1) {
          const callback = arg1;
          obj = {};
          const merged = Object.assign(arg0);
          obj.onCreate = function onCreate(guild) {
            const id = guild.guild.id;
            let arr = callback;
            obj = callback(closure_1_2[6]);
            const guildProgress = obj.createGuildProgress(id);
            const defaultChannel = closure_1_5.getDefaultChannel(id);
            if (null != defaultChannel) {
              closure_1_1(closure_1_2[7]).init(id, defaultChannel.id, { location: "Guild Create Flow" });
              obj = { guildId: null };
              obj[0] = id;
              arr = arr.push(closure_1_6.GUILD_INVITE, obj);
              const obj2 = closure_1_1(closure_1_2[7]);
              obj = { flow_type: null, from_step: null, to_step: null };
              obj[0] = closure_1_9.GUILD_CREATE_MODAL;
              ({ CREATE_SERVER: obj5[1], GUILD_INVITE: obj5[2] } = closure_1_6);
              closure_1_1(closure_1_2[8]).track(closure_1_8.USER_FLOW_TRANSITION, obj);
              const obj4 = closure_1_1(closure_1_2[8]);
            }
          };
          const intl = callback(1236).intl;
          obj.customTitle = intl.string(callback(1236).t["5HZu07"]);
          return callback3(callback2(11500), obj);
        }
      };
      obj[closure_1_6.JOIN_SERVER] = {
        impressionName: channel(onSuccess[11]).ImpressionNames.GUILD_ADD_JOIN,
        impressionProperties: closure_1_11,
        fullscreen: true,
        headerTitle: isWindowSmall ? (() => {
          obj = { title: null };
          const intl = callback(1236).intl;
          obj[0] = intl.string(callback(1236).t.jlfuFW);
          return callback3(callback(8492).GenericHeaderTitle, obj);
        }) : (() => null),
        render(arg0) {
          obj = { initialRoute: closure_0 };
          const merged = Object.assign(arg0);
          obj.onClose = callback2(onSuccess[10]).closeCreateGuildModal;
          return closure_1_10(callback2(onSuccess[19]), obj);
        }
      };
      const obj3 = {
        impressionName: channel(onSuccess[11]).ImpressionNames.GUILD_ADD_JOIN,
        impressionProperties: closure_1_11,
        fullscreen: true,
        headerTitle: isWindowSmall ? (() => {
          obj = { title: null };
          const intl = callback(1236).intl;
          obj[0] = intl.string(callback(1236).t.jlfuFW);
          return callback3(callback(8492).GenericHeaderTitle, obj);
        }) : (() => null),
        render(arg0) {
          obj = { initialRoute: closure_0 };
          const merged = Object.assign(arg0);
          obj.onClose = callback2(onSuccess[10]).closeCreateGuildModal;
          return closure_1_10(callback2(onSuccess[19]), obj);
        }
      };
      obj[closure_1_6.ACCEPT_INVITE] = {
        impressionName: channel(onSuccess[11]).ImpressionNames.GUILD_ADD_ACCEPT_INVITE,
        impressionProperties: closure_1_11,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        headerLeft() {
          return null;
        },
        render(code) {
          obj = { code: code.code, onPressClose: callback2(11881).closeCreateGuildModal };
          return callback3(callback2(11894), obj);
        }
      };
      const obj5 = { impressionName: "Array", impressionProperties: true, fullscreen: true, ignoreKeyboard: null, headerTitle: null, headerLeft: null, render: true };
      obj5[1] = closure_1_11;
      obj5[4] = function headerTitle() {
        return null;
      };
      obj5[5] = function headerLeft() {
        return null;
      };
      obj5[6] = function render() {
        return callback3(callback2(11905), { isNestedNavigator: true });
      };
      obj[closure_1_6.JOIN_STUDENT_HUB] = obj5;
      return obj;
    }, items1),
    initialRouteStack: memo,
    headerBackTitle: null,
    onWillFocus: null
  };
  items1 = [initialState, isWindowSmall, onSuccess];
  let intl = channel(onSuccess[16]).intl;
  obj[2] = intl.string(channel(onSuccess[16]).t["13/7kX"]);
  obj[3] = Keyboard.dismiss;
  return jsx(channel(onSuccess[23]).Navigator, {
    screens: isWindowSmall.useMemo(() => {
      closure_0 = closure_1;
      closure_1 = onSuccess;
      obj = {
        impressionName: channel(onSuccess[11]).ImpressionNames.GUILD_ADD_LANDING,
        impressionProperties: closure_1_11,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        headerLeft: null,
        render: null
      };
      let obj2 = channel(onSuccess[12]);
      obj[4] = obj2.getHeaderCloseButton(initialState(onSuccess[10]).closeCreateGuildModal);
      obj[5] = function render() {
        return callback3(callback2(11883), { trigger: constants.IN_APP });
      };
      obj[closure_1_6.GUILD_TEMPLATES] = obj;
      obj = {
        impressionName: channel(onSuccess[11]).ImpressionNames.GUILD_ADD_INTENT_SELECTION,
        impressionProperties: closure_1_11,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        render(guildTemplate) {
          return callback3(callback2(11885), { guildTemplate: guildTemplate.guildTemplate, trigger: constants.IN_APP });
        }
      };
      obj[closure_1_6.CREATION_INTENT] = obj;
      obj[closure_1_6.CREATE_SERVER] = {
        impressionName: channel(onSuccess[11]).ImpressionNames.GUILD_ADD_CUSTOMIZE,
        impressionProperties: closure_1_11,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        render(arg0, arg1) {
          const callback = arg1;
          obj = {};
          const merged = Object.assign(arg0);
          obj.onCreate = function onCreate(guild) {
            const id = guild.guild.id;
            let arr = callback;
            obj = callback(closure_1_2[6]);
            const guildProgress = obj.createGuildProgress(id);
            const defaultChannel = closure_1_5.getDefaultChannel(id);
            if (null != defaultChannel) {
              closure_1_1(closure_1_2[7]).init(id, defaultChannel.id, { location: "Guild Create Flow" });
              obj = { guildId: null };
              obj[0] = id;
              arr = arr.push(closure_1_6.GUILD_INVITE, obj);
              const obj2 = closure_1_1(closure_1_2[7]);
              obj = { flow_type: null, from_step: null, to_step: null };
              obj[0] = closure_1_9.GUILD_CREATE_MODAL;
              ({ CREATE_SERVER: obj5[1], GUILD_INVITE: obj5[2] } = closure_1_6);
              closure_1_1(closure_1_2[8]).track(closure_1_8.USER_FLOW_TRANSITION, obj);
              const obj4 = closure_1_1(closure_1_2[8]);
            }
          };
          const intl = callback(1236).intl;
          obj.customTitle = intl.string(callback(1236).t["5HZu07"]);
          return callback3(callback2(11500), obj);
        }
      };
      obj2 = {
        impressionName: channel(onSuccess[11]).ImpressionNames.GUILD_ADD_GUILD_INVITE,
        impressionProperties: closure_1_11,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        render(guildId) {
          guildId = guildId.guildId;
          return closure_1_10(callback2(onSuccess[17]), {
            closeOnEditInviteLink: false,
            onClose() {
              const result = callback(onSuccess[9]).transitionToGuildSync(guildId);
              obj = callback(onSuccess[9]);
              const result1 = callback(onSuccess[10]).closeCreateGuildModal();
              if (null != closure_1_1) {
                closure_1_1(guildId);
              }
              const obj2 = callback(onSuccess[10]);
            }
          });
        }
      };
      obj[closure_1_6.GUILD_INVITE] = obj2;
      obj1 = {
        impressionName: channel(onSuccess[11]).ImpressionNames.GUILD_ADD_CUSTOMIZE,
        impressionProperties: closure_1_11,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        render(arg0, arg1) {
          const callback = arg1;
          obj = {};
          const merged = Object.assign(arg0);
          obj.onCreate = function onCreate(guild) {
            const id = guild.guild.id;
            let arr = callback;
            obj = callback(closure_1_2[6]);
            const guildProgress = obj.createGuildProgress(id);
            const defaultChannel = closure_1_5.getDefaultChannel(id);
            if (null != defaultChannel) {
              closure_1_1(closure_1_2[7]).init(id, defaultChannel.id, { location: "Guild Create Flow" });
              obj = { guildId: null };
              obj[0] = id;
              arr = arr.push(closure_1_6.GUILD_INVITE, obj);
              const obj2 = closure_1_1(closure_1_2[7]);
              obj = { flow_type: null, from_step: null, to_step: null };
              obj[0] = closure_1_9.GUILD_CREATE_MODAL;
              ({ CREATE_SERVER: obj5[1], GUILD_INVITE: obj5[2] } = closure_1_6);
              closure_1_1(closure_1_2[8]).track(closure_1_8.USER_FLOW_TRANSITION, obj);
              const obj4 = closure_1_1(closure_1_2[8]);
            }
          };
          const intl = callback(1236).intl;
          obj.customTitle = intl.string(callback(1236).t["5HZu07"]);
          return callback3(callback2(11500), obj);
        }
      };
      obj[closure_1_6.JOIN_SERVER] = {
        impressionName: channel(onSuccess[11]).ImpressionNames.GUILD_ADD_JOIN,
        impressionProperties: closure_1_11,
        fullscreen: true,
        headerTitle: isWindowSmall ? (() => {
          obj = { title: null };
          const intl = callback(1236).intl;
          obj[0] = intl.string(callback(1236).t.jlfuFW);
          return callback3(callback(8492).GenericHeaderTitle, obj);
        }) : (() => null),
        render(arg0) {
          obj = { initialRoute: closure_0 };
          const merged = Object.assign(arg0);
          obj.onClose = callback2(onSuccess[10]).closeCreateGuildModal;
          return closure_1_10(callback2(onSuccess[19]), obj);
        }
      };
      const obj3 = {
        impressionName: channel(onSuccess[11]).ImpressionNames.GUILD_ADD_JOIN,
        impressionProperties: closure_1_11,
        fullscreen: true,
        headerTitle: isWindowSmall ? (() => {
          obj = { title: null };
          const intl = callback(1236).intl;
          obj[0] = intl.string(callback(1236).t.jlfuFW);
          return callback3(callback(8492).GenericHeaderTitle, obj);
        }) : (() => null),
        render(arg0) {
          obj = { initialRoute: closure_0 };
          const merged = Object.assign(arg0);
          obj.onClose = callback2(onSuccess[10]).closeCreateGuildModal;
          return closure_1_10(callback2(onSuccess[19]), obj);
        }
      };
      obj[closure_1_6.ACCEPT_INVITE] = {
        impressionName: channel(onSuccess[11]).ImpressionNames.GUILD_ADD_ACCEPT_INVITE,
        impressionProperties: closure_1_11,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        headerLeft() {
          return null;
        },
        render(code) {
          obj = { code: code.code, onPressClose: callback2(11881).closeCreateGuildModal };
          return callback3(callback2(11894), obj);
        }
      };
      const obj5 = { impressionName: "Array", impressionProperties: true, fullscreen: true, ignoreKeyboard: null, headerTitle: null, headerLeft: null, render: true };
      obj5[1] = closure_1_11;
      obj5[4] = function headerTitle() {
        return null;
      };
      obj5[5] = function headerLeft() {
        return null;
      };
      obj5[6] = function render() {
        return callback3(callback2(11905), { isNestedNavigator: true });
      };
      obj[closure_1_6.JOIN_STUDENT_HUB] = obj5;
      return obj;
    }, items1),
    initialRouteStack: memo,
    headerBackTitle: null,
    onWillFocus: null
  });
};