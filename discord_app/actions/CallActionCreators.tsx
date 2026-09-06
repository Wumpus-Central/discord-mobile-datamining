// === Module 9182: CallActionCreators ===

// Module 9182 (CallActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5411 */;
import useCanRing from "useCanRing" /* 9174 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

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
        let obj = { url: self.CALL(id), oldFormErrors: true, rejectWithError: true };
        value = HTTP.get(obj);
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
          let obj = AnalyticsUtilsDefault;
          obj.track(constants.OPEN_POPOUT, { type: "Not Friend", source: "Call" });
          obj = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null };
          const intl = util.intl;
          obj.title = intl.string(util.t.My50nf);
          const intl2 = util.intl;
          let str = "";
          if (null != user) {
            str = user.username;
          }
          obj.body = intl2.format(util.t.IdKo2z, { username: str });
          const intl3 = util.intl;
          obj.confirmText = intl3.string(util.t["PMsq/b"]);
          const intl4 = util.intl;
          obj.cancelText = intl4.string(util.t.BddRzS);
          obj.onConfirm = function onConfirm() {
            closure_1(closure_2[9]);
            const obj = { userId, context: { location: "Call" } };
            obj.addRelationship(obj);
          };
          AlertActionCreatorsDefault.show(obj);
        });
      }
    } else {
      obj = SelectedChannelActionCreatorsDefault;
      let voiceChannel = obj.selectVoiceChannel(id, MediaEngineStore);
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
      let obj = useCanRing;
      const CALLABLE = constants2.CALLABLE;
      const result = obj.canRingUsersInChannel(channel);
      if (result) {
        const HTTP = HTTPUtils.HTTP;
        const request = { url: timestampProducer.CALL_RING(channelId), body: null, oldFormErrors: true, rejectWithError: true };
        obj = { recipients: items, analytics_location: gdm_invite };
        request.body = obj;
        HTTP.post(request);
        if (tmp14) {
          obj = { type: "GUILD_LOCAL_RING_START", ringing: items, guildId: channel.guild_id };
          DispatcherDefault.dispatch(obj);
        }
        tmp14 = channel.type === constants3.GUILD_VOICE && null != items;
      } else if (tmp7) {
        const obj1 = { type: "CALL_ENQUEUE_RING", channelId, recipients: items };
        obj1.dispatch(obj1);
      }
    }
  },
  stopRinging(channelId, items) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: timestampProducer.CALL_STOP_RINGING(channelId), body: { recipients: items }, oldFormErrors: true, rejectWithError: true };
    return HTTP.post(request);
  }
};