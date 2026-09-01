// discord_app/actions/CallActionCreators.tsx
import sendRequest from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import _modDef5355 from "SelectedChannelActionCreators.tsx";
import useCanRingToGuildVoiceChannel from "../modules/calls/useCanRing.tsx";
import closure_3 from "../stores/ChannelStore.tsx";
import closure_4 from "../stores/RelationshipStore.tsx";
import closure_5 from "../stores/UserStore.tsx";
import ME from "../Constants.tsx";

require = arg1;
({ Endpoints: closure_6, AnalyticEvents: error, ChannelTypesSets: closure_8, ChannelTypes: c9 } = ME);
let result = require("set").fileFinishedImporting("actions/CallActionCreators.tsx");

export default {
  call(id, c1) {
    let self = this;
    self = this;
    importDefault = id;
    dependencyMap = c1;
    closure_3 = arg2;
    const blocked = arg3;
    const user = arg4;
    if (null != arg3) {
      if (!blocked.isBlocked(arg3)) {
        const _require = user.getUser(arg3);
        const HTTP = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
        let obj = { url: null, oldFormErrors: true, rejectWithError: true };
        obj[0] = self.CALL(id);
        const value = HTTP.get(obj);
        value.then((body) => {
          let ringable = closure_3;
          if (closure_3) {
            ringable = body.body.ringable;
          }
          const voiceChannel = id(5355).selectVoiceChannel(id, dependencyMap);
          if (ringable) {
            self.ring(tmp2);
          }
          if (callback != null) {
            callback(tmp2);
          }
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
          const intl3 = tmp3(1236).intl;
          obj[2] = intl3.string(lib(1236).t["PMsq/b"]);
          const intl4 = tmp3(1236).intl;
          obj[3] = intl4.string(lib(1236).t.BddRzS);
          obj[4] = function onConfirm() {
            let obj = closure_1_1(closure_1_2[9]);
            obj = { userId: closure_4, context: { location: "Call" } };
            obj.addRelationship(obj);
          };
          id(4857).show(obj);
        });
      }
    } else {
      obj = _modDef5355;
      let voiceChannel = obj.selectVoiceChannel(id, c1);
      if (arg2) {
        self.ring(id);
      }
      if (arg4 != null) {
        arg4(id);
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
        const HTTP = tmp3(530).HTTP;
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
          const obj6 = dispatcherDefault;
        }
      } else if (tmp7) {
        obj1 = dispatcherDefault;
        const obj2 = { type: "CALL_ENQUEUE_RING", channelId: null, recipients: null };
        obj2[1] = channelId;
        obj2[2] = items;
        obj1.dispatch(obj2);
      }
      tmp3 = require;
    }
  },
  stopRinging(channelId, items) {
    const HTTP = sendRequest.HTTP;
    obj = { url: closure_6.CALL_STOP_RINGING(channelId), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { recipients: items };
    return HTTP.post(obj);
  }
};