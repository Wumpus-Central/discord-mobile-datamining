// discord_app/actions/CallActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import util from "../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import AlertActionCreatorsDefault from "AlertActionCreators.tsx";
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators.tsx";
import useCanRing from "../modules/calls/useCanRing.tsx";
import ChannelStore from "../stores/ChannelStore.tsx";
import RelationshipStore from "../stores/RelationshipStore.tsx";
import UserStore from "../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
const Constants = fn(1074);
({ Endpoints: metroRequire, AnalyticEvents: closure_7, ChannelTypesSets: closure_8 } = Constants);
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
        value.then(
          (body) => {
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
          },
          () => {
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
          },
        );
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
        const request = {
          url: timestampProducer.CALL_RING(channelId),
          body: null,
          oldFormErrors: true,
          rejectWithError: true,
        };
        const obj2 = { recipients: items, analytics_location: gdm_invite };
        request.body = obj2;
        HTTP.post(request);
      } else if (tmp12) {
        const obj3 = { type: "CALL_ENQUEUE_RING", channelId, recipients: items };
        DispatcherDefault.dispatch(obj3);
      }
    }
  },
  stopRinging(channelId, items) {
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: timestampProducer.CALL_STOP_RINGING(channelId),
      body: { recipients: items },
      oldFormErrors: true,
      rejectWithError: true,
    };
    return HTTP.post(request);
  },
};
