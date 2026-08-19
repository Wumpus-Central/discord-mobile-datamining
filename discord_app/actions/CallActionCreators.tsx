// discord_app/actions/CallActionCreators.tsx
import sendRequest from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import _modDef4975 from "SelectedChannelActionCreators.tsx";
import useCanRingToGuildVoiceChannel from "../modules/calls/useCanRing.tsx";
import ensureGuildLoaded from "../stores/ChannelStore.tsx";
import markAllUserIdListsStale from "../stores/RelationshipStore.tsx";
import mergeGuildAvatar from "../stores/UserStore.tsx";
import ME from "../Constants.tsx";

require = fn;
({ Endpoints: closure_6, AnalyticEvents: error, ChannelTypesSets: closure_8, ChannelTypes: c9 } = ME);
let result = require("obj132").fileFinishedImporting("actions/CallActionCreators.tsx");

export default {
  call(id, c1, arg2, arg3, fn) {
    const self = this;
    importDefault = id;
    dependencyMap = c1;
    closure_3 = arg2;
    const blocked = arg3;
    const user = fn;
    if (null != arg3) {
      if (!blocked.isBlocked(arg3)) {
        const _require = user.getUser(arg3);
        const HTTP = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
        let obj = { url: null, oldFormErrors: true, rejectWithError: true };
        obj[0] = self.CALL(id);
        const value = HTTP.get(obj);
        value.then((result) => {
          let ringable = closure_3;
          if (closure_3) {
            ringable = result.body.ringable;
          }
          const voiceChannel = id(4975).selectVoiceChannel(id, dependencyMap);
          if (ringable) {
            self.ring(id);
          }
          if (callback != null) {
            callback(id);
          }
          const obj = id(4975);
        }, () => {
          let obj = id(698);
          obj.track(closure_1_7.OPEN_POPOUT, { type: "Not Friend", source: "Call" });
          obj = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null };
          const intl = lib(1236).intl;
          obj[0] = intl.string(lib(1236).t.My50nf);
          const intl2 = lib(1236).intl;
          let str = "";
          if (null != lib) {
            str = lib.username;
          }
          obj[1] = intl2.format(lib(1236).t.IdKo2z, { username: str });
          const intl3 = lib(1236).intl;
          obj[2] = intl3.string(lib(1236).t["PMsq/b"]);
          const intl4 = lib(1236).intl;
          obj[3] = intl4.string(lib(1236).t.BddRzS);
          obj[4] = function onConfirm() {
            id(closure_1_2[9]);
            const obj = { userId: closure_4, context: { location: "Call" } };
            obj.addRelationship(obj);
          };
          id(4827).show(obj);
          const obj2 = id(4827);
        });
      }
    } else {
      obj = _modDef4975;
      let voiceChannel = obj.selectVoiceChannel(id, c1);
      if (arg2) {
        self.ring(id);
      }
      if (fn != null) {
        fn(id);
      }
    }
  },
  ring(channelId, items, gdm_invite) {
    channel = channel.getChannel(channelId);
    if (null != channel) {
      let obj = useCanRingToGuildVoiceChannel;
      const CALLABLE = constants.CALLABLE;
      const result = obj.canRingUsersInChannel(channel);
      if (result) {
        const HTTP = sendRequest.HTTP;
        obj = { url: null, body: null, oldFormErrors: true, rejectWithError: true };
        obj[0] = closure_6.CALL_RING(channelId);
        obj = { recipients: null, analytics_location: null };
        obj[0] = items;
        obj[1] = gdm_invite;
        obj[1] = obj;
        HTTP.post(obj);
        if (tmp14) {
          obj1 = { type: "GUILD_LOCAL_RING_START", ringing: null, guildId: null };
          obj1[1] = items;
          obj1[2] = channel.guild_id;
          dispatcherDefault.dispatch(obj1);
        }
        tmp14 = channel.type === constants2.GUILD_VOICE && null != items;
      } else if (tmp7) {
        obj1 = dispatcherDefault;
        const obj2 = { type: "CALL_ENQUEUE_RING", channelId: null, recipients: null };
        obj2[1] = channelId;
        obj2[2] = items;
        obj1.dispatch(obj2);
      }
    }
  },
  stopRinging(channelId, items) {
    const HTTP = sendRequest.HTTP;
    { url: closure_6.CALL_STOP_RINGING(channelId), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { recipients: items };
    return HTTP.post(obj);
  }
};