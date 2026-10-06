// discord_app/modules/channel_list_v2/native/components/VocalChannelJoinButton.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import StageIcon from "../../../../design/components/Icon/native/redesign/generated/StageIcon.tsx";
import VoiceNormalIcon2 from "../../../../design/components/Icon/native/redesign/generated/VoiceNormalIcon.tsx";
import react_mod from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import VoiceStateStore from "../../../../stores/VoiceStateStore.tsx";
import Constants from "../../../../Constants.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let channel, importDefault;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let react = react_mod;
({ View: closure_4, Pressable: hasOwnProperty } = react_native);
({ NOOP: metroImportAll, Permissions: c9 } = Constants);
const jsx = Fragment.jsx;
let closure_11 = createStyles.createStyles((arg0, arg1) => {
  let num;
  let num2;
  let num3;
  let str;
  const obj = {
    borderRadius: nativeDefault.radii.xxl,
    paddingHorizontal: nativeDefault.space.PX_8,
    paddingVertical: nativeDefault.space.PX_4,
    marginVertical: -nativeDefault.space.PX_4,
    backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT,
    minHeight: 28,
    justifyContent: "center",
    elevation: num,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: nativeDefault.colors.BLACK,
    shadowOpacity: num2,
    borderColor: str,
    borderWidth: 1,
  };
  num = 1;
  const tmp3 = arg0;
  if (tmp3) {
    num = 0;
  }
  num2 = 0.14;
  if (arg1) {
    num2 = 0.08;
  }
  str = "rgba(255, 255, 255, 0.14)";
  if (arg1) {
    str = "rgba(0, 0, 0, 0.08)";
  }
  const obj2 = {
    joinButton: obj,
    joinButtonContent: { width: "auto", alignItems: "center" },
    joinButtonIconActive: { tintColor: nativeDefault.colors.WHITE },
    joinButtonIconInactive: { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT },
    joinButtonText: { marginTop: num3, alignSelf: "center", maxWidth: 64 },
  };
  ({ tintColor: nativeDefault.colors.WHITE });
  ({ tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT });
  num3 = 0;
  const obj5 = PlatformUtils;
  if (obj5.isAndroid()) {
    num3 = -2;
  }
  return obj2;
});
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        let arr;
        let closure_1;
        let closure_3;
        let isConnectedToVoiceChannel;
        let noIcon;
        let small;
        let tmp10;
        let tmp18;
        let tmp6;
        let voiceStates;
        const obj = channel(isConnectedToVoiceChannel[10]);
        const cResult = obj.c(50);
        channel = channel.channel;
        ({ voiceStates, noIcon, small } = channel);
        if (cResult[0] !== voiceStates) {
          let items = voiceStates;
          if (undefined === voiceStates) {
            items = [];
          }
          cResult[0] = voiceStates;
          cResult[1] = items;
          arr = items;
        } else {
          arr = cResult[1];
        }
        const tmp4 = require("useIsUsingClientTheme")();
        const tmp5 = require("useTheme")();
        if (cResult[2] !== tmp5) {
          const tmpResult = channel(isConnectedToVoiceChannel[13]);
          const isThemeLightResult = tmpResult.isThemeLight(tmp5);
          cResult[2] = tmp5;
          cResult[3] = isThemeLightResult;
          tmp6 = isThemeLightResult;
        } else {
          tmp6 = cResult[3];
        }
        importDefault = closure_11(tmp4, tmp6);
        closure_11(tmp4, tmp6);
        const tmpResult7 = channel(isConnectedToVoiceChannel[14]);
        isConnectedToVoiceChannel = tmpResult7.useIsConnectedToVoiceChannel(channel);
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [PermissionStore];
          cResult[4] = items1;
          tmp10 = items1;
        } else {
          tmp10 = cResult[4];
        }
        if (cResult[5] !== channel) {
          class A {
            constructor() {
              return !closure_6.can(Permissions.CONNECT, channel);
            }
          }
          cResult[5] = channel;
          cResult[6] = A;
        } else {
          class A {
            constructor() {
              return !closure_6.can(Permissions.CONNECT, channel);
            }
          }
        }
        const tmpResult8 = channel(isConnectedToVoiceChannel[15]);
        const stateFromStores = tmpResult8.useStateFromStores(tmp10, A);
        const tmpResult9 = channel(isConnectedToVoiceChannel[16]);
        const stageParticipantsCount = tmpResult9.useStageParticipantsCount(
          channel.id,
          tmp(tmp2[17]).StageChannelParticipantNamedIndex.AUDIENCE,
        );
        if (cResult[7] !== channel) {
          class A {
            constructor() {
              return !closure_6.can(Permissions.CONNECT, channel);
            }
          }
          cResult[7] = channel;
          cResult[8] = tmp16;
        } else {
          class A {
            constructor() {
              return !closure_6.can(Permissions.CONNECT, channel);
            }
          }
        }
        react = tmp16;
        const tmpResult10 = channel(isConnectedToVoiceChannel[18]);
        const tmp17 = tmpResult10.useStageHasMedia(channel.id) && tmp16;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          class A {
            constructor() {
              return !closure_6.can(Permissions.CONNECT, channel);
            }
          }
          const items2 = [VoiceStateStore];
          cResult[9] = items2;
          tmp18 = items2;
        } else {
          class A {
            constructor() {
              return !closure_6.can(Permissions.CONNECT, channel);
            }
          }
        }
        if (cResult[10] !== channel.id) {
          class O {
            constructor() {
              return closure_7.hasVideo(channel.id);
            }
          }
          cResult[10] = channel.id;
          cResult[11] = O;
        } else {
          class O {
            constructor() {
              return closure_7.hasVideo(channel.id);
            }
          }
        }
        const tmpResult11 = channel(isConnectedToVoiceChannel[15]);
        const stateFromStores1 = tmpResult11.useStateFromStores(tmp18, O);
        const sum = stageParticipantsCount + arr.length;
        if (cResult[12] !== arr) {
          class O {
            constructor() {
              return closure_7.hasVideo(channel.id);
            }
          }
          if (arr != null) {
            class O {
              constructor() {
                return closure_7.hasVideo(channel.id);
              }
            }
          }
          cResult[12] = arr;
          cResult[13] = undefined;
        } else {
          class O {
            constructor() {
              return closure_7.hasVideo(channel.id);
            }
          }
        }
        let closure_4 = null != tmp22;
        if (cResult[14] === channel) {
          class O {
            constructor() {
              return closure_7.hasVideo(channel.id);
            }
          }
          channel(isConnectedToVoiceChannel[19]);
          if (cResult[17] === channel) {
            class O {
              constructor() {
                return closure_7.hasVideo(channel.id);
              }
            }
          }
          const obj2 = { channel, video: stateFromStores1 || tmp17, userCount: sum };
          cResult[17] = channel;
          cResult[18] = sum;
          cResult[19] = stateFromStores1 || tmp17;
          cResult[20] = obj2;
        }
        const obj3 = { channel, video: stateFromStores1 || tmp17 };
        cResult[14] = channel;
        cResult[15] = stateFromStores1 || tmp17;
        cResult[16] = obj3;
      }
    : (channel) => {
        let noIcon;
        let small;
        channel = channel.channel;
        let voiceStates = channel.voiceStates;
        if (voiceStates === undefined) {
          voiceStates = [];
        }
        ({ small, noIcon } = channel);
        if (small === undefined) {
          small = false;
        }
        const tmp2 = voiceStates(7519)();
        const tmp3 = voiceStates(4797)();
        const obj = channel(4735);
        const tmp5 = closure_11(tmp2, obj.isThemeLight(tmp3));
        const obj2 = channel(9090);
        const isConnectedToVoiceChannel = obj2.useIsConnectedToVoiceChannel(channel);
        const items = [PermissionStore];
        const obj3 = channel(573);
        const stateFromStores = obj3.useStateFromStores(items, () => !PermissionStore.can(constants.CONNECT, channel));
        const obj4 = channel(5595);
        const stageParticipantsCount = obj4.useStageParticipantsCount(
          channel.id,
          channel(5589).StageChannelParticipantNamedIndex.AUDIENCE,
        );
        const isGuildStageVoiceResult = channel.isGuildStageVoice();
        const obj5 = channel(5581);
        obj5.useStageHasMedia(channel.id) && isGuildStageVoiceResult;
        const items1 = [VoiceStateStore];
        const tmp4Result = channel(573);
        const stateFromStores1 = tmp4Result.useStateFromStores(items1, () => VoiceStateStore.hasVideo(channel.id));
        const sum = stageParticipantsCount + voiceStates.length;
        const items2 = [voiceStates];
        const memo = react.useMemo(() => {
          let found;
          if (voiceStates != null) {
            found = voiceStates.find((voiceState) => voiceState.voiceState.selfStream);
          }
          return null != found;
        }, items2);
        const tmp4Result3 = channel(11936);
        const connectedUserLimit = tmp4Result3.useConnectedUserLimit({ channel, video: tmp14 });
        const tmp4Result4 = channel(11936);
        let connectedUserLimitFormatted = tmp4Result4.useConnectedUserLimitFormatted({
          channel,
          video: tmp14,
          userCount: sum,
        });
        let tmp19 = null;
        const tmp17 =
          !stateFromStores &&
          !isConnectedToVoiceChannel &&
          null != connectedUserLimitFormatted &&
          sum > 0 &&
          sum >= connectedUserLimit / 2 + 1;
        if (!isConnectedToVoiceChannel) {
          let tmp20Result;
          if (small) {
            const Text = tmp4(4892).Text;
            if (connectedUserLimitFormatted == null) {
              const intl2 = tmp4(1126).intl;
              connectedUserLimitFormatted = intl2.string(tmp4(1126).t.VJlc0S);
            }
            tmp20Result = (
              <closure_5
                accessibilityRole="none"
                pointerEvents="none"
                onPress={onPress}
                accessible={false}
                accessibilityElementsHidden
                importantForAccessibility="no"
                style={tmp5.joinButton}
              >
                {null}
              </closure_5>
            );
          } else {
            let tmp21 = connectedUserLimitFormatted;
            const Button = tmp4(5601).Button;
            if (!tmp17) {
              let formatted;
              const intl = tmp4(1126).intl;
              const string = intl.string;
              const t = tmp4(1126).t;
              if (memo) {
                const str = string(t.dI3q4h);
                formatted = str.toUpperCase();
              } else {
                formatted = string(t.VJlc0S);
              }
              tmp21 = formatted;
            }
            let tmp23;
            if (!noIcon) {
              if (!isConnectedToVoiceChannel) {
                let joinButtonIconActive;
                let tmp20Result2;
                if (!memo) {
                  joinButtonIconActive = tmp5.joinButtonIconInactive;
                }
                const items3 = [joinButtonIconActive, { marginRight: 3, marginLeft: -1 }];
                if (!memo) {
                  if (isGuildStageVoiceResult) {
                    let VoiceNormalIcon = tmp4(5888).StageIcon;
                  } else {
                    VoiceNormalIcon = tmp4(5892).VoiceNormalIcon;
                  }
                  tmp20Result2 = <VoiceNormalIcon size="xs" style={items3} />;
                }
                tmp23 = tmp20Result2;
              }
              joinButtonIconActive = tmp5.joinButtonIconActive;
            }
            let str2 = "tertiary";
            if (memo) {
              str2 = "destructive";
            }
            tmp20Result = (
              <Button
                text={tmp21}
                icon={tmp23}
                size="sm"
                variant={str2}
                onPress={onPress}
                pointerEvents="none"
                accessible={false}
                accessibilityElementsHidden
                importantForAccessibility="no"
              />
            );
          }
          tmp19 = tmp20Result;
        }
        return tmp19;
      },
);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/VocalChannelJoinButton.tsx");

export default memoResult;
