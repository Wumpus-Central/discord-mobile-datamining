// discord_app/modules/age_gate/native/components/ExistingUserAgeGateModal.tsx
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import AgeGateModalActionCreators from "../../AgeGateModalActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import GuildActionCreatorsDefault from "../../../../actions/GuildActionCreators.tsx";
import GuildNSFWDefault from "../../../../components_native/warnings/GuildNSFW.tsx";
import ExistingUserAgeGateDefault from "ExistingUserAgeGate.tsx";
import ExistingUserAgeGateConfirmDefault from "ExistingUserAgeGateConfirm.tsx";
import AgeGateVerifyDefault from "AgeGateVerify.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import SelectedGuildStore from "../../../../stores/SelectedGuildStore.tsx";

require = fn;
function onClose() {
  AgeGateModalActionCreators.closeAgeGateModal();
}
function renderHeaderTitle() {
  return null;
}
function getScreens(source, arg1, arg2) {
  _require = source;
  closure_1 = arg1;
  closure_129_0 = source;
  if (constants2.NSFW_SERVER_INVITE !== source) {
    if (constants2.NSFW_SERVER_INVITE_EMBED !== source) {
      if (constants2.JOIN_LARGE_GUILD_UNDERAGE !== source) {
        if (constants2.ACCESS_LARGE_GUILD_UNDERAGE !== source) {
          if (constants2.LARGE_GUILD !== source) {
            if (constants2.NSFW_SERVER !== source) {
              if (constants2.NSFW_CHANNEL === source) {
                let fn = () => {
                  const guildId = SelectedGuildStore.getGuildId();
                  if (null != guildId) {
                    GuildActionCreatorsDefault.nsfwReturnToSafety(guildId);
                  }
                  AgeGateModalActionCreators.closeAgeGateModal(closure_0);
                };
              } else if (constants2.NSFW_VOICE_CHANNEL === source) {
                fn = () => {
                  ModalActionCreatorsDefault.popAll();
                  AnalyticsUtilsDefault.track(AnalyticEvents.AGE_GATE_ACTION, {
                    source,
                    action: constants.AGE_GATE_CLOSE,
                  });
                };
              } else if (constants2.FAMILY_CENTER === source) {
                fn = () => {
                  AgeGateModalActionCreators.closeAgeGateModal(closure_0);
                };
              }
            }
          }
        }
      }
      fn = () => {
        const guildId = SelectedGuildStore.getGuildId();
        if (null != guildId) {
          GuildActionCreatorsDefault.nsfwReturnToSafety(guildId);
        }
        AgeGateModalActionCreators.closeAgeGateModal(closure_0);
        ModalActionCreatorsDefault.popAll();
      };
    }
    if (fn == null) {
      fn = () => {};
    }
    let tmp3 = arg2;
    let obj = {};
    let obj2 = {
      fullscreen: true,
      impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.USER_AGE_GATE,
      impressionProperties: { existing_user: true },
      headerLeft: require("NavigatorHeader").getHeaderBackButton(fn),
      headerTitle: renderHeaderTitle,
      render(arg0, arg1) {
        closure_0 = arg1;
        if (closure_0 === constants2.NSFW_SERVER_INVITE) {
          if (obj.isIOS()) {
            let onSuccess = () => {
              closure_0.push(NSFWGateGuild.NSFWGateGuild);
              const obj2 = { text: null, variant: "success" };
              const intl = closure_0(fn[9]).intl;
              obj2.text = intl.string(closure_0(fn[9]).t.gUiIGZ);
              closure_1(fn[8]).open("AGE_GATE_AGE_VERIFIED", obj2);
            };
          }
          let obj2 = { onSuccess, onClose, source: tmp };
          return jsx(ExistingUserAgeGateDefault, { onSuccess, onClose, source: tmp });
        }
        onSuccess = () => {
          closure_0(5929).closeAgeGateModal();
          const obj = closure_0(5929);
          const obj3 = { text: null, variant: "success" };
          const intl = closure_0(1126).intl;
          obj3.text = intl.string(closure_0(1126).t.gUiIGZ);
          closure_1_1(4809).open("AGE_GATE_AGE_VERIFIED", obj3);
        };
      },
    };
    obj[NSFWGateGuild.AgeGate] = obj2;
    const obj4 = {
      fullscreen: true,
      headerTitle: renderHeaderTitle,
      render(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.source = source;
        return jsx(ExistingUserAgeGateConfirmDefault, {});
      },
    };
    obj[NSFWGateGuild.AgeGateConfirm] = obj4;
    const obj5 = { fullscreen: true, headerLeft: null, impressionName: null, headerTitle: null, render: null };
    let obj3 = require("NavigatorHeader");
    const tmp5 = _require;
    const tmp6 = fn;
    obj5.headerLeft = require("NavigatorHeader").getHeaderBackButton(fn);
    obj5.impressionName = require("discord_common/AnalyticsUtils").ImpressionNames.USER_AGE_GATE_VERIFY;
    obj5.headerTitle = renderHeaderTitle;
    obj5.render = function render() {
      return jsx(AgeGateVerifyDefault, { source });
    };
    obj[NSFWGateGuild.Pawtect] = obj5;
    const obj7 = {
      fullscreen: true,
      headerTitle: renderHeaderTitle,
      impressionProperties: { existing_user: true },
      render(arg0) {
        const merged = Object.assign(arg0);
        return jsx(closure_1(fn[19]), {});
      },
    };
    obj[NSFWGateGuild.Blocked] = obj7;
    const obj8 = { headerTitle: renderHeaderTitle, headerLeft: null, render: null };
    const obj6 = require("NavigatorHeader");
    obj8.headerLeft = require("NavigatorHeader").getHeaderBackButton(fn);
    obj8.render = function render() {
      return jsx(closure_1(fn[20]), { onClose });
    };
    obj[NSFWGateGuild.NSFWGateGuild] = obj8;
    const obj10 = { fullscreen: true, headerLeft: null, headerTitle: null, impressionName: null, render: null };
    const obj9 = require("NavigatorHeader");
    obj10.headerLeft = require("NavigatorHeader").getHeaderBackButton(fn);
    if (arg2 == null) {
      tmp3 = renderHeaderTitle;
    }
    obj10.headerTitle = tmp3;
    obj10.impressionName = tmp5(tmp6[14]).ImpressionNames.USER_AGE_GATE_VERIFY;
    obj10.render = function render() {
      let guild_id;
      if (closure_1 != null) {
        guild_id = closure_1.guild_id;
      }
      if (null == guild_id) {
        const obj2 = { source };
        let tmp7 = jsx(AgeGateVerifyDefault, { source });
      } else {
        const obj = { guildId: null, channelId: null, onReturnToSafety: null, returnToSafety: false };
        ({ guild_id: obj.guildId, id: obj.channelId } = closure_1);
        obj.onReturnToSafety = onReturnToSafety;
        tmp7 = jsx(GuildNSFWDefault, { guildId: null, channelId: null, onReturnToSafety: null, returnToSafety: false });
      }
      return tmp7;
    };
    obj[NSFWGateGuild.NSFWVoiceChannel] = obj10;
    return obj;
  }
  fn = () => {
    AgeGateModalActionCreators.closeAgeGateModal(closure_0);
  };
}
const AgeGateConstants = fn(1110);
({ AgeGateAnalyticAction: metroRequire, AgeGateSource: closure_7 } = AgeGateConstants);
let closure_8 = fn(17983).ExistingUserAgeGateScreens;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/ExistingUserAgeGateModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ExistingUserAgeGateModal(source) {
      const cResult = source(576).c(20);
      source = source.source;
      const channelId = source.channelId;
      let obj = source(576);
      const shouldAgeVerifyForAgeGate = source(5908).useShouldAgeVerifyForAgeGate();
      dependencyMap = noop.useRef(shouldAgeVerifyForAgeGate);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function l() {
          return ChannelStore.getChannel(channelId);
        };
        const items1 = [channelId];
        cResult[1] = channelId;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp8 = items1;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const obj2 = source(5908);
      const stateFromStores = source(504).useStateFromStores(first, tmp7, tmp8);
      if (cResult[4] === stateFromStores) {
        if (cResult[5] === source) {
          let tmp10 = cResult[6];
        }
        const tmp14 = channelId(5421)(tmp10);
        if (cResult[7] !== source) {
          class I {
            constructor() {
              if (closure_2.current) {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = closure_0(closure_2[10]);
                tmp3 = source;
                closeAgeGateModalResult = obj.closeAgeGateModal(source);
              }
              return;
            }
          }
          cResult[7] = source;
          cResult[8] = I;
        } else {
          class I {
            constructor() {
              if (closure_2.current) {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = closure_0(closure_2[10]);
                tmp3 = source;
                closeAgeGateModalResult = obj.closeAgeGateModal(source);
              }
              return;
            }
          }
        }
        const watchAgeVerificationStatusChange = tmp(5909).useWatchAgeVerificationStatusChange(I);
        if (cResult[9] === source) {
          class I {
            constructor() {
              if (closure_2.current) {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = closure_0(closure_2[10]);
                tmp3 = source;
                closeAgeGateModalResult = obj.closeAgeGateModal(source);
              }
              return;
            }
          }
        }
        const tmp19 = getScreens(source, tmp10, tmp14);
        cResult[9] = source;
        cResult[10] = tmp10;
        cResult[11] = tmp14;
        cResult[12] = tmp19;
        const tmpResult2 = tmp(5909);
      }
      let tmp11 = null;
      if (source === constants2.NSFW_VOICE_CHANNEL) {
        class I {
          constructor() {
            if (closure_2.current) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[10]);
              tmp3 = source;
              closeAgeGateModalResult = obj.closeAgeGateModal(source);
            }
            return;
          }
        }
        if (stateFromStores != null) {
          class I {
            constructor() {
              if (closure_2.current) {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = closure_0(closure_2[10]);
                tmp3 = source;
                closeAgeGateModalResult = obj.closeAgeGateModal(source);
              }
              return;
            }
          }
        }
        tmp11 = null;
        if (null != tmp12) {
          class I {
            constructor() {
              if (closure_2.current) {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = closure_0(closure_2[10]);
                tmp3 = source;
                closeAgeGateModalResult = obj.closeAgeGateModal(source);
              }
              return;
            }
          }
        }
      }
      cResult[4] = stateFromStores;
      cResult[5] = source;
      cResult[6] = tmp11;
      tmp10 = tmp11;
      const tmpResult = source(504);
    }
  : function ExistingUserAgeGateModal(source) {
      source = source.source;
      const channelId = source.channelId;
      let stateFromStores;
      closure_4 = undefined;
      const shouldAgeVerifyForAgeGate = source(5908).useShouldAgeVerifyForAgeGate();
      dependencyMap = stateFromStores.useRef(shouldAgeVerifyForAgeGate);
      let obj = source(5908);
      const items = [closure_4];
      const items1 = [channelId];
      stateFromStores = source(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
      let tmp5 = null;
      if (source === constants2.NSFW_VOICE_CHANNEL) {
        let guild_id;
        if (stateFromStores != null) {
          guild_id = stateFromStores.guild_id;
        }
        tmp5 = null;
        if (null != guild_id) {
          tmp5 = stateFromStores;
        }
      }
      stateFromStores = tmp5;
      const tmp7 = channelId(5421)(tmp5);
      closure_4 = tmp7;
      const obj3 = source(504);
      const items2 = [source];
      const watchAgeVerificationStatusChange = source(5909).useWatchAgeVerificationStatusChange(
        obj2.useCallback(() => {
          if (ref.current) {
            AgeGateModalActionCreators.closeAgeGateModal(source);
          }
        }, items2),
      );
      const obj4 = { screens: null, initialRouteName: null, headerBackTitle: null };
      const items3 = [source, tmp5, tmp7];
      obj4.screens = stateFromStores.useMemo(() => getScreens(source, stateFromStores, closure_4), items3);
      if (shouldAgeVerifyForAgeGate) {
        if (null != tmp5) {
          let Pawtect = closure_8.NSFWVoiceChannel;
        } else {
          Pawtect = closure_8.Pawtect;
        }
      } else {
        obj4.initialRouteName = closure_8.AgeGate;
        const intl = tmp(1126).intl;
        obj4.headerBackTitle = intl.string(tmp(1126).t["13/7kX"]);
        return jsx(tmp(6687).Navigator, obj4);
      }
      const tmpResult = source(5909);
    };
