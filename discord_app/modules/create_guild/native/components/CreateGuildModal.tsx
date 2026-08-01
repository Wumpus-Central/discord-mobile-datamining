// === Module 11814: CreateGuildModal ===

// Module 11814 (CreateGuildModal)
import JoinServerContainer from "JoinServerContainer";
import { Keyboard } from "SeeMoreFooter";
import comparator from "comparator";
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics";
import ME from "ME";
import { jsx } from "HubEmailConnectionModal";

let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ CreateGuildModalStates: closure_6, GuildTemplateTriggers: error } = NUXGuildTemplatesAnalytics);
({ AnalyticEvents: metroImportAll, AnalyticsSections: c9 } = ME);
let obj = { impression_group: require("encodeProperties").ImpressionGroups.GUILD_ADD_FLOW };
let result = require("comparator").fileFinishedImporting("modules/create_guild/native/components/CreateGuildModal.tsx");

export default function CreateGuildModal(channel) {
  channel = channel.channel;
  const initialState = channel.initialState;
  const onSuccess = channel.onSuccess;
  let isWindowSmall;
  let items = [channel, initialState];
  const memo = isWindowSmall.useMemo(() => {
    if (initialState === outer1_6.JOIN_SERVER) {
      let obj = { name: null, param: null };
      obj[0] = tmp.JOIN_SERVER;
      obj = { initialRoute: null };
      obj[0] = tmp.JOIN_SERVER;
      obj[1] = obj;
      const items = [obj];
      let items2 = items;
    } else if (null == channel) {
      const obj1 = { name: null };
      obj1[0] = tmp.GUILD_TEMPLATES;
      const items1 = [obj1];
      items2 = items1;
    } else {
      obj = { name: null, param: null };
      obj[0] = tmp.GUILD_INVITE;
      const obj2 = { channel: null, onClose: null };
      obj2[0] = tmp2;
      obj2[1] = initialState(onSuccess[10]).closeCreateGuildModal;
      obj[1] = obj2;
      items2 = [obj];
    }
    return items2;
  }, items);
  let obj = channel(onSuccess[22]);
  isWindowSmall = obj.useIsWindowSmall();
  obj = { screens: null, initialRouteStack: null, headerBackTitle: null, onWillFocus: null };
  let items1 = [initialState, isWindowSmall, onSuccess];
  obj[0] = isWindowSmall.useMemo(() => {
    let closure_0 = closure_1;
    closure_1 = onSuccess;
    let obj = {};
    obj = {
      impressionName: channel(onSuccess[11]).ImpressionNames.GUILD_ADD_LANDING,
      impressionProperties: outer1_11,
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
      return callback3(callback2(11815), { trigger: constants.IN_APP });
    };
    obj[outer1_6.GUILD_TEMPLATES] = obj;
    obj = {
      impressionName: channel(onSuccess[11]).ImpressionNames.GUILD_ADD_INTENT_SELECTION,
      impressionProperties: outer1_11,
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(guildTemplate) {
        return callback3(callback2(11817), { guildTemplate: guildTemplate.guildTemplate, trigger: constants.IN_APP });
      }
    };
    obj[outer1_6.CREATION_INTENT] = obj;
    obj[outer1_6.CREATE_SERVER] = {
      impressionName: channel(onSuccess[11]).ImpressionNames.GUILD_ADD_CUSTOMIZE,
      impressionProperties: outer1_11,
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(arg0, arg1) {
        const callback = arg1;
        let obj = {};
        const merged = Object.assign(arg0);
        obj.onCreate = function onCreate(guild) {
          const id = guild.guild.id;
          let arr = callback;
          let obj = callback(outer1_2[6]);
          const guildProgress = obj.createGuildProgress(id);
          const defaultChannel = outer1_5.getDefaultChannel(id);
          if (null != defaultChannel) {
            outer1_1(tmp[7]).init(id, defaultChannel.id, { location: "Guild Create Flow" });
            obj = { guildId: null };
            obj[0] = id;
            arr = arr.push(outer1_6.GUILD_INVITE, obj);
            const obj2 = outer1_1(tmp[7]);
            obj = { flow_type: null, from_step: null, to_step: null };
            obj[0] = outer1_9.GUILD_CREATE_MODAL;
            ({ CREATE_SERVER: obj5[1], GUILD_INVITE: obj5[2] } = outer1_6);
            outer1_1(tmp[8]).track(outer1_8.USER_FLOW_TRANSITION, obj);
            const obj4 = outer1_1(tmp[8]);
          }
        };
        const intl = callback(1236).intl;
        obj.customTitle = intl.string(callback(1236).t["5HZu07"]);
        return callback3(callback2(10098), obj);
      }
    };
    obj2 = {
      impressionName: channel(onSuccess[11]).ImpressionNames.GUILD_ADD_GUILD_INVITE,
      impressionProperties: outer1_11,
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(guildId) {
        guildId = guildId.guildId;
        return outer1_10(callback2(outer1_2[17]), {
          closeOnEditInviteLink: false,
          onClose() {
            const result = callback(outer2_2[9]).transitionToGuildSync(guildId);
            const obj = callback(outer2_2[9]);
            const tmp = guildId;
            const tmp2 = outer1_1;
            const result1 = callback(outer2_2[10]).closeCreateGuildModal();
            if (null != outer1_1) {
              tmp2(tmp);
            }
          }
        });
      }
    };
    obj[outer1_6.GUILD_INVITE] = obj2;
    const obj1 = {
      impressionName: channel(onSuccess[11]).ImpressionNames.GUILD_ADD_CUSTOMIZE,
      impressionProperties: outer1_11,
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(arg0, arg1) {
        const callback = arg1;
        let obj = {};
        const merged = Object.assign(arg0);
        obj.onCreate = function onCreate(guild) {
          const id = guild.guild.id;
          let arr = callback;
          let obj = callback(outer1_2[6]);
          const guildProgress = obj.createGuildProgress(id);
          const defaultChannel = outer1_5.getDefaultChannel(id);
          if (null != defaultChannel) {
            outer1_1(tmp[7]).init(id, defaultChannel.id, { location: "Guild Create Flow" });
            obj = { guildId: null };
            obj[0] = id;
            arr = arr.push(outer1_6.GUILD_INVITE, obj);
            const obj2 = outer1_1(tmp[7]);
            obj = { flow_type: null, from_step: null, to_step: null };
            obj[0] = outer1_9.GUILD_CREATE_MODAL;
            ({ CREATE_SERVER: obj5[1], GUILD_INVITE: obj5[2] } = outer1_6);
            outer1_1(tmp[8]).track(outer1_8.USER_FLOW_TRANSITION, obj);
            const obj4 = outer1_1(tmp[8]);
          }
        };
        const intl = callback(1236).intl;
        obj.customTitle = intl.string(callback(1236).t["5HZu07"]);
        return callback3(callback2(10098), obj);
      }
    };
    let tmp2 = channel;
    const tmp3 = onSuccess;
    obj[outer1_6.JOIN_SERVER] = {
      impressionName: channel(onSuccess[11]).ImpressionNames.GUILD_ADD_JOIN,
      impressionProperties: outer1_11,
      fullscreen: true,
      headerTitle: isWindowSmall ? (() => {
        const obj = { title: null };
        const intl = callback(1236).intl;
        obj[0] = intl.string(callback(1236).t.jlfuFW);
        return callback3(callback(9127).GenericHeaderTitle, obj);
      }) : (() => null),
      render(arg0) {
        const obj = { initialRoute: closure_0 };
        const merged = Object.assign(arg0);
        obj.onClose = callback2(outer1_2[10]).closeCreateGuildModal;
        return outer1_10(callback2(outer1_2[19]), obj);
      }
    };
    const obj3 = {
      impressionName: channel(onSuccess[11]).ImpressionNames.GUILD_ADD_JOIN,
      impressionProperties: outer1_11,
      fullscreen: true,
      headerTitle: isWindowSmall ? (() => {
        const obj = { title: null };
        const intl = callback(1236).intl;
        obj[0] = intl.string(callback(1236).t.jlfuFW);
        return callback3(callback(9127).GenericHeaderTitle, obj);
      }) : (() => null),
      render(arg0) {
        const obj = { initialRoute: closure_0 };
        const merged = Object.assign(arg0);
        obj.onClose = callback2(outer1_2[10]).closeCreateGuildModal;
        return outer1_10(callback2(outer1_2[19]), obj);
      }
    };
    obj[outer1_6.ACCEPT_INVITE] = {
      impressionName: tmp2(tmp3[11]).ImpressionNames.GUILD_ADD_ACCEPT_INVITE,
      impressionProperties: outer1_11,
      fullscreen: true,
      headerTitle() {
        return null;
      },
      headerLeft() {
        return null;
      },
      render(code) {
        const obj = { code: code.code, onPressClose: null };
        obj[1] = callback2(11813).closeCreateGuildModal;
        return callback3(callback2(11826), obj);
      }
    };
    const obj5 = { impressionName: "Array", impressionProperties: true, fullscreen: true, ignoreKeyboard: null, headerTitle: null, headerLeft: null, render: true };
    obj5[1] = outer1_11;
    obj5[4] = function headerTitle() {
      return null;
    };
    obj5[5] = function headerLeft() {
      return null;
    };
    obj5[6] = function render() {
      return callback3(callback2(11843), { isNestedNavigator: true });
    };
    obj[outer1_6.JOIN_STUDENT_HUB] = obj5;
    return obj;
  }, items1);
  obj[1] = memo;
  let intl = channel(onSuccess[16]).intl;
  obj[2] = intl.string(channel(onSuccess[16]).t["13/7kX"]);
  obj[3] = Keyboard.dismiss;
  return jsx(channel(onSuccess[23]).Navigator, { screens: null, initialRouteStack: null, headerBackTitle: null, onWillFocus: null });
};