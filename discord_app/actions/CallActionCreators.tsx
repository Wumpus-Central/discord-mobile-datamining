// discord_app/actions/CallActionCreators.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { sendRequest } from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import { dispatcher } from "../Dispatcher.tsx";
import { useCanRingToGuildVoiceChannel } from "../modules/calls/useCanRing.tsx";
import { SelectedChannelActionCreators } from "SelectedChannelActionCreators.tsx";

let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ Endpoints: closure_6, AnalyticEvents: error, ChannelTypesSets: metroImportAll, ChannelTypes: c9 } = ME);
let result = require("mergeGuildAvatar").fileFinishedImporting("actions/CallActionCreators.tsx");

export default {
  call(id, c1) {
    let self = this;
    self = this;
    const importDefault = id;
    const dependencyMap = c1;
    let ensureGuildLoaded = arg2;
    const blocked = arg3;
    const user = arg4;
    if (null != arg3) {
      if (!blocked.isBlocked(arg3)) {
        const _require = user.getUser(arg3);
        const HTTP = _sendRequest.HTTP;
        let obj = { url: null, oldFormErrors: true, rejectWithError: true };
        obj[0] = self.CALL(id);
        const value = HTTP.get(obj);
        value.then((body) => {
          let ringable = ensureGuildLoaded;
          if (ensureGuildLoaded) {
            ringable = body.body.ringable;
          }
          const voiceChannel = id(5081).selectVoiceChannel(id, dependencyMap);
          if (ringable) {
            self.ring(tmp2);
          }
          if (callback != null) {
            callback(tmp2);
          }
        }, () => {
          let obj = id(698);
          obj.track(outer1_7.OPEN_POPOUT, { type: "Not Friend", source: "Call" });
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
            let obj = outer1_1(outer1_2[9]);
            obj = { userId: upsertRelationship, context: { location: "Call" } };
            obj.addRelationship(obj);
          };
          id(4593).show(obj);
        });
      }
    } else {
      obj = SelectedChannelActionCreators;
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
          let obj1 = { type: "GUILD_LOCAL_RING_START", ringing: null, guildId: null };
          obj1[1] = items;
          obj1[2] = channel.guild_id;
          dispatcher.dispatch(obj1);
          const obj6 = dispatcher;
        }
      } else if (tmp7) {
        obj1 = dispatcher;
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