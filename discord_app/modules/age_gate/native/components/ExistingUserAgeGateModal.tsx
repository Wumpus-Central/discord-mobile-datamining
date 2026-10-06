// discord_app/modules/age_gate/native/components/ExistingUserAgeGateModal.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../../Constants.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import AgeGateModalActionCreators from "../../AgeGateModalActionCreators.tsx";
import GuildNSFWDefault from "../../../../components_native/warnings/GuildNSFW.tsx";
import ExistingUserAgeGateConstants from "../ExistingUserAgeGateConstants.tsx";
import ExistingUserAgeGateDefault from "ExistingUserAgeGate.tsx";
import ExistingUserAgeGateConfirmDefault from "ExistingUserAgeGateConfirm.tsx";
import AgeGateVerifyDefault from "AgeGateVerify.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import SelectedGuildStore from "../../../../stores/SelectedGuildStore.tsx";
import AgeGateConstants from "../../AgeGateConstants.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

let metroImportDefault;
let metroRequire;
function onClose() {
  const obj = AgeGateModalActionCreators;
  obj.closeAgeGateModal();
}
function renderHeaderTitle() {
  return null;
}
function getScreens(source, arg1, arg2) {
  let constants2;
  let obj11;
  let obj3;
  let obj6;
  let obj9;
  let tmp5;
  let tmp6;
  let closure_1 = arg1;
  _require = source;
  if (constants.NSFW_SERVER_INVITE !== source) {
    let fn;
    if (constants.NSFW_SERVER_INVITE_EMBED !== source) {
      if (constants.JOIN_LARGE_GUILD_UNDERAGE !== source) {
        if (constants.ACCESS_LARGE_GUILD_UNDERAGE !== source) {
          if (constants.LARGE_GUILD !== source) {
            if (constants.NSFW_SERVER !== source) {
              if (constants.NSFW_CHANNEL === source) {
                fn = () => {
                  const guildId = SelectedGuildStore.getGuildId();
                  if (null != guildId) {
                    const obj = closure_1(fn[12]);
                    obj.nsfwReturnToSafety(guildId);
                  }
                  const obj2 = source(fn[11]);
                  obj2.closeAgeGateModal(source);
                };
              } else if (constants.NSFW_VOICE_CHANNEL === source) {
                fn = () => {
                  const obj = closure_1(fn[13]);
                  obj.popAll();
                  const obj2 = closure_1(fn[14]);
                  const obj3 = { source, action: constants.AGE_GATE_CLOSE };
                  obj2.track(constants2.AGE_GATE_ACTION, obj3);
                };
              } else if (constants.FAMILY_CENTER === source) {
                fn = () => {
                  const obj = source(fn[11]);
                  obj.closeAgeGateModal(source);
                };
              }
            }
          }
        }
      }
      fn = () => {
        const guildId = SelectedGuildStore.getGuildId();
        if (null != guildId) {
          const obj = closure_1(fn[12]);
          obj.nsfwReturnToSafety(guildId);
        }
        const obj2 = source(fn[11]);
        obj2.closeAgeGateModal(source);
        const obj3 = closure_1(fn[13]);
        obj3.popAll();
      };
    }
    let tmp2 = null;
    if (fn == null) {
      fn = () => {};
    }
    let tmp3 = arg2;
    let obj = {};
    let obj2 = {
      fullscreen: true,
      impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.USER_AGE_GATE,
      impressionProperties: { existing_user: true },
      headerLeft: obj3.getHeaderBackButton(fn),
      headerTitle: renderHeaderTitle,
      render(arg0, arg1) {
        let NSFWGateGuild;
        let closure_0 = arg1;
        if (closure_0 === metroImportDefault.NSFW_SERVER_INVITE) {
          let onSuccess;
          let obj = PlatformUtils;
          if (obj.isIOS()) {
            onSuccess = () => {
              let intl;
              closure_0.push(NSFWGateGuild.NSFWGateGuild);
              const tmp2 = closure_2_1(fn[8]);
              const open = tmp2.open;
              const obj = {
                key: "AGE_GATE_AGE_VERIFIED",
                icon: closure_2_1(fn[9]),
                content: intl.string(source(fn[10]).t.gUiIGZ),
              };
              intl = source(fn[10]).intl;
              open(obj);
            };
          }
          return jsx(ExistingUserAgeGateDefault, { onSuccess, onClose, source: tmp });
        }
        onSuccess = () => {
          let intl;
          const obj = source(fn[11]);
          obj.closeAgeGateModal();
          const tmp2 = closure_1_1(fn[8]);
          const open = tmp2.open;
          const obj2 = {
            key: "AGE_GATE_AGE_VERIFIED",
            icon: closure_1_1(fn[9]),
            content: intl.string(source(fn[10]).t.gUiIGZ),
          };
          intl = source(fn[10]).intl;
          open(obj2);
        };
      },
    };
    const AgeGate = closure_8.AgeGate;
    obj3 = require("NavigatorHeader");
    obj[AgeGate] = obj2;
    const obj4 = {
      fullscreen: true,
      headerTitle: renderHeaderTitle,
      render(arg0) {
        ExistingUserAgeGateConfirmDefault;
        const merged = Object.assign(arg0);
        return <tmp source={source} />;
      },
    };
    obj[closure_8.AgeGateConfirm] = obj4;
    const Pawtect = closure_8.Pawtect;
    const obj5 = {
      fullscreen: true,
      headerLeft: obj6.getHeaderBackButton(fn),
      impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.USER_AGE_GATE_VERIFY,
      headerTitle: renderHeaderTitle,
      render() {
        return jsx(AgeGateVerifyDefault, { source });
      },
    };
    obj[Pawtect] = obj5;
    const obj7 = {
      fullscreen: true,
      headerTitle: renderHeaderTitle,
      impressionProperties: { existing_user: true },
      render(arg0) {
        closure_1(fn[20]);
        const merged = Object.assign(arg0);
        return <tmp />;
      },
    };
    obj[closure_8.Blocked] = obj7;
    obj6 = require("NavigatorHeader");
    const NSFWGateGuild = closure_8.NSFWGateGuild;
    const obj8 = {
      headerTitle: renderHeaderTitle,
      headerLeft: obj9.getHeaderBackButton(fn),
      render() {
        return jsx(closure_1(fn[21]), { onClose });
      },
    };
    obj[NSFWGateGuild] = obj8;
    obj9 = require("NavigatorHeader");
    const NSFWVoiceChannel = closure_8.NSFWVoiceChannel;
    const obj10 = {
      fullscreen: true,
      headerLeft: obj11.getHeaderBackButton(fn),
      headerTitle: tmp3,
      impressionName: tmp5(tmp6[15]).ImpressionNames.USER_AGE_GATE_VERIFY,
      render() {
        let tmp7;
        let guild_id;
        if (closure_1 != null) {
          guild_id = closure_1.guild_id;
        }
        if (null == guild_id) {
          tmp7 = jsx(AgeGateVerifyDefault, { source });
        } else {
          const obj = { guildId: null, channelId: null, onReturnToSafety, returnToSafety: false };
          ({ guild_id: obj.guildId, id: obj.channelId } = closure_1);
          tmp7 = jsx(GuildNSFWDefault, { guildId: null, channelId: null, onReturnToSafety, returnToSafety: false });
        }
        return tmp7;
      },
    };
    obj11 = require("NavigatorHeader");
    tmp5 = _require;
    tmp6 = fn;
    if (arg2 == null) {
      tmp3 = renderHeaderTitle;
    }
    obj[NSFWVoiceChannel] = obj10;
    return obj;
  }
  fn = () => {
    const obj = source(fn[11]);
    obj.closeAgeGateModal(source);
  };
}
({ AgeGateAnalyticAction: metroRequire, AgeGateSource: metroImportDefault } = AgeGateConstants);
let closure_8 = ExistingUserAgeGateConstants.ExistingUserAgeGateScreens;
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (source) => {
      let first;
      let ref;
      let tmp7;
      let tmp8;
      let obj = source(576);
      const cResult = obj.c(20);
      source = source.source;
      const channelId = source.channelId;
      const obj2 = source(5106);
      const shouldAgeVerifyForAgeGate = obj2.useShouldAgeVerifyForAgeGate();
      dependencyMap = react.useRef(shouldAgeVerifyForAgeGate);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
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
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = source(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
      if (cResult[4] === stateFromStores) {
        let tmp10;
        if (cResult[5] === source) {
          tmp10 = cResult[6];
        }
        const tmp14 = channelId(5049)(tmp10);
        if (cResult[7] !== source) {
          class I {
            constructor() {
              if (ref.current) {
                const obj = AgeGateModalActionCreators;
                obj.closeAgeGateModal(source);
              }
            }
          }
          cResult[7] = source;
          cResult[8] = I;
        } else {
          class I {
            constructor() {
              if (ref.current) {
                const obj = AgeGateModalActionCreators;
                obj.closeAgeGateModal(source);
              }
            }
          }
        }
        const tmpResult2 = source(5108);
        const watchAgeVerificationStatusChange = tmpResult2.useWatchAgeVerificationStatusChange(I);
        if (cResult[9] === source) {
          class I {
            constructor() {
              if (ref.current) {
                const obj = AgeGateModalActionCreators;
                obj.closeAgeGateModal(source);
              }
            }
          }
        }
        cResult[9] = source;
        cResult[10] = tmp10;
        cResult[11] = tmp14;
        cResult[12] = getScreens(source, tmp10, tmp14);
        const tmp19 = getScreens(source, tmp10, tmp14);
      }
      let tmp11 = null;
      if (source === constants.NSFW_VOICE_CHANNEL) {
        class I {
          constructor() {
            if (ref.current) {
              const obj = AgeGateModalActionCreators;
              obj.closeAgeGateModal(source);
            }
          }
        }
        if (stateFromStores != null) {
          class I {
            constructor() {
              if (ref.current) {
                const obj = AgeGateModalActionCreators;
                obj.closeAgeGateModal(source);
              }
            }
          }
        }
        tmp11 = null;
        if (null != tmp12) {
          class I {
            constructor() {
              if (ref.current) {
                const obj = AgeGateModalActionCreators;
                obj.closeAgeGateModal(source);
              }
            }
          }
        }
      }
      cResult[4] = stateFromStores;
      cResult[5] = source;
      cResult[6] = tmp11;
      tmp10 = tmp11;
    }
  : (source) => {
      let AgeGate;
      let ref;
      source = source.source;
      const channelId = source.channelId;
      let stateFromStores;
      let closure_4;
      let obj = source(5106);
      const shouldAgeVerifyForAgeGate = obj.useShouldAgeVerifyForAgeGate();
      dependencyMap = stateFromStores.useRef(shouldAgeVerifyForAgeGate);
      const items = [closure_4];
      const items1 = [channelId];
      const obj3 = source(504);
      stateFromStores = obj3.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
      let tmp5 = null;
      if (source === constants.NSFW_VOICE_CHANNEL) {
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
      const tmp7 = channelId(5049)(tmp5);
      closure_4 = tmp7;
      const items2 = [source];
      const tmpResult = source(5108);
      const watchAgeVerificationStatusChange = tmpResult.useWatchAgeVerificationStatusChange(
        obj2.useCallback(() => {
          if (ref.current) {
            const obj = AgeGateModalActionCreators;
            obj.closeAgeGateModal(source);
          }
        }, items2),
      );
      const items3 = [source, tmp5, tmp7];
      const Navigator = tmp(6503).Navigator;
      if (shouldAgeVerifyForAgeGate) {
        let Pawtect;
        if (null != tmp5) {
          Pawtect = closure_8.NSFWVoiceChannel;
        } else {
          Pawtect = closure_8.Pawtect;
        }
        AgeGate = Pawtect;
      } else {
        AgeGate = closure_8.AgeGate;
      }
      const intl = tmp(1126).intl;
      return (
        <Navigator
          screens={stateFromStores.useMemo(() => getScreens(source, stateFromStores, closure_4), items3)}
          initialRouteName={AgeGate}
          headerBackTitle={intl.string(source(1126).t["13/7kX"])}
        />
      );
    };
const result = size.fileFinishedImporting("modules/age_gate/native/components/ExistingUserAgeGateModal.tsx");

export default tmp3;
