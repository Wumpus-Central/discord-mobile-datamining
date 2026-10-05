// discord_app/actions/CallActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import intl5 from "../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators.tsx";
import AlertActionCreatorsDefault from "AlertActionCreators.tsx";
import useCanRing from "../modules/calls/useCanRing.tsx";
import ChannelStore from "../stores/ChannelStore.tsx";
import RelationshipStore_mod from "../stores/RelationshipStore.tsx";
import UserStore_mod from "../stores/UserStore.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let RelationshipStore = RelationshipStore_mod;
let UserStore = UserStore_mod;
({ Endpoints: metroRequire, AnalyticEvents: metroImportDefault, ChannelTypesSets: metroImportAll } = Constants);
let obj = {
  call(id, MediaEngineStore, arg2, arg3, fn) {
    let closure_4;
    let user;
    const self = this;
    importDefault = id;
    dependencyMap = MediaEngineStore;
    let closure_3 = arg2;
    RelationshipStore = arg3;
    UserStore = fn;
    if (null != arg3) {
      if (!RelationshipStore.isBlocked(arg3)) {
        _require = UserStore.getUser(arg3);
        const HTTP = require("HTTPUtils").HTTP;
        let obj2 = { url: self.CALL(id), oldFormErrors: true, rejectWithError: true };
        const get = HTTP.get;
        const value = get(obj2);
        value.then(
          (body) => {
            const ringable = closure_3 && body.body.ringable;
            const obj = SelectedChannelActionCreatorsDefault;
            const voiceChannel = obj.selectVoiceChannel(id, MediaEngineStore);
            if (ringable) {
              self.ring(id);
            }
            if (fn != null) {
              fn(id);
            }
          },
          () => {
            let IdKo2z;
            let format;
            let intl;
            let intl3;
            let intl4;
            let str;
            let userId;
            let obj = AnalyticsUtilsDefault;
            obj.track(metroImportDefault.OPEN_POPOUT, { type: "Not Friend", source: "Call" });
            let obj2 = {
              title: intl.string(intl5.t.My50nf),
              body: format(IdKo2z, { username: str }),
              confirmText: intl3.string(intl5.t["PMsq/b"]),
              cancelText: intl4.string(intl5.t.BddRzS),
              onConfirm() {
                const obj = id(MediaEngineStore[9]);
                const obj2 = { userId, context: { location: "Call" } };
                obj.addRelationship(obj2);
              },
            };
            const show = AlertActionCreatorsDefault.show;
            AlertActionCreatorsDefault;
            intl = intl5.intl;
            const intl2 = intl5.intl;
            format = intl2.format;
            str = "";
            IdKo2z = intl5.t.IdKo2z;
            if (null != user) {
              str = user.username;
            }
            intl3 = intl5.intl;
            intl4 = intl5.intl;
            show(obj2);
          },
        );
      }
    } else {
      let obj = SelectedChannelActionCreatorsDefault;
      let voiceChannel = obj.selectVoiceChannel(id, MediaEngineStore);
      if (arg2) {
        self.ring(id);
      }
      if (fn != null) {
        fn(id);
      }
    }
  },
  ring(channelId, items, voice_panel_floating_cta) {
    let obj2;
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      const CALLABLE = metroImportAll.CALLABLE;
      const obj5 = useCanRing;
      const result = obj5.canRingUsersInChannel(channel);
      if (result) {
        const HTTP = HTTPUtils.HTTP;
        const request = {
          url: metroRequire.CALL_RING(channelId),
          body: obj2,
          oldFormErrors: true,
          rejectWithError: true,
        };
        const post = HTTP.post;
        obj2 = { recipients: items, analytics_location: voice_panel_floating_cta };
        post(request);
      } else if (tmp12) {
        const obj3 = { type: "CALL_ENQUEUE_RING", channelId, recipients: items };
        const obj = DispatcherDefault;
        obj.dispatch(obj3);
      }
    }
  },
  stopRinging(channelId, items) {
    let obj;
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: metroRequire.CALL_STOP_RINGING(channelId),
      body: obj,
      oldFormErrors: true,
      rejectWithError: true,
    };
    obj = { recipients: items };
    return HTTP.post(request);
  },
};
let result = size.fileFinishedImporting("actions/CallActionCreators.tsx");

export default obj;
