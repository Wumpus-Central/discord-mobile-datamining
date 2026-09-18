// === Module 9420: CallActionCreators ===

// Module 9420 (CallActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5066 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5581 */;
import useCanRing from "useCanRing" /* 9412 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import RelationshipStore from "RelationshipStore" /* 4371 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

require = fn;
const Constants = fn(1074);
({ Endpoints: metroRequire, AnalyticEvents: closure_7, ChannelTypesSets: closure_8, ChannelTypes: closure_9 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("actions/CallActionCreators.tsx");

export default {
  call(id, MediaEngineStore, arg2, arg3, fn) {
    const self = this;
    importDefault = id;
    dependencyMap = MediaEngineStore;
    closure_3 = arg2;
    RelationshipStore = arg3;
    UserStore = fn;
    if (null != arg3) {
      if (!RelationshipStore.isBlocked(arg3)) {
        _require = UserStore.getUser(arg3);
        const HTTP = require("HTTPUtils").HTTP;
        let obj2 = { url: self.CALL(id), oldFormErrors: true, rejectWithError: true };
        value = HTTP.get(obj2);
        value.then((body) => {
          let ringable = closure_3;
          if (closure_3) {
            ringable = body.body.ringable;
          }
          const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(closure_1, closure_2);
          if (ringable) {
            self.ring(closure_1);
          }
          if (closure_5 != null) {
            closure_5(closure_1);
          }
        }, () => {
          AnalyticsUtilsDefault.track(constants.OPEN_POPOUT, { type: "Not Friend", source: "Call" });
          const obj3 = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null };
          const intl = util.intl;
          obj3.title = intl.string(util.t.My50nf);
          const intl2 = util.intl;
          let str = "";
          if (null != user) {
            str = user.username;
          }
          obj3.body = intl2.format(util.t.IdKo2z, { username: str });
          const intl3 = util.intl;
          obj3.confirmText = intl3.string(util.t["PMsq/b"]);
          const intl4 = util.intl;
          obj3.cancelText = intl4.string(util.t.BddRzS);
          obj3.onConfirm = function onConfirm() {
            closure_1(closure_2[9]).addRelationship({ userId, context: { location: "Call" } });
          };
          AlertActionCreatorsDefault.show(obj3);
        });
      }
    } else {
      let voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(id, MediaEngineStore);
      if (arg2) {
        self.ring(id);
      }
      if (fn != null) {
        fn(id);
      }
    }
  },
  ring(channelId, items, gdm_invite) {
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      const CALLABLE = constants2.CALLABLE;
      const result = useCanRing.canRingUsersInChannel(channel);
      if (result) {
        const HTTP = HTTPUtils.HTTP;
        const request = { url: timestampProducer.CALL_RING(channelId), body: null, oldFormErrors: true, rejectWithError: true };
        const obj3 = { recipients: items, analytics_location: gdm_invite };
        request.body = obj3;
        HTTP.post(request);
        if (tmp14) {
          const obj4 = { type: "GUILD_LOCAL_RING_START", ringing: items, guildId: channel.guild_id };
          DispatcherDefault.dispatch(obj4);
        }
        tmp14 = channel.type === constants3.GUILD_VOICE && null != items;
      } else if (tmp7) {
        const obj5 = { type: "CALL_ENQUEUE_RING", channelId, recipients: items };
        DispatcherDefault.dispatch(obj5);
      }
    }
  },
  stopRinging(channelId, items) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: timestampProducer.CALL_STOP_RINGING(channelId), body: { recipients: items }, oldFormErrors: true, rejectWithError: true };
    return HTTP.post(request);
  }
};