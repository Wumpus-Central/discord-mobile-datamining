// discord_app/modules/stage_channels/native/components/SpeakerTileStatuses.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import _modDef6649 from "../../../../../_runtime/metro/06649__.js";
import _modDef11125 from "../../../../../_runtime/metro/11125__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";
import VoiceStateStore from "../../../../stores/VoiceStateStore.tsx";
import StageChannelRoleStore from "../../StageChannelRoleStore.tsx";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj = { voiceStatusWrapper: null, moderatorStatusWrapper: null, restricted: null };
let size = {
  position: "absolute",
  top: 4,
  left: 4,
  backgroundColor: nativeDefault.colors.WHITE,
  borderRadius: nativeDefault.radii.md,
  width: 24,
  height: 24,
  justifyContent: "center",
  alignItems: "center",
};
obj.voiceStatusWrapper = size;
const size1 = {
  position: "absolute",
  top: 4,
  right: 4,
  backgroundColor: nativeDefault.colors.WHITE,
  borderRadius: nativeDefault.radii.md,
  width: 24,
  height: 24,
  justifyContent: "center",
  alignItems: "center",
};
obj.moderatorStatusWrapper = size1;
obj.restricted = { marginEnd: nativeDefault.space.PX_4 };
let closure_8 = createStyles.createStyles(obj);
fn(558);
let obj3 = { marginEnd: nativeDefault.space.PX_4 };
let ReactCompilerGating = fn(558);
const memoResult = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function VoiceStatus(userId) {
        const cResult = userId(576).c(18);
        userId = userId.userId;
        const channelId = userId.channelId;
        const style = userId.style;
        const tmp4 = closure_8();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [MediaEngineStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== userId) {
          class S {
            constructor() {
              return closure_4.isLocalMute(userId);
            }
          }
          const items1 = [userId];
          cResult[1] = userId;
          cResult[2] = S;
          cResult[3] = items1;
          let tmp8 = items1;
        } else {
          class S {
            constructor() {
              return closure_4.isLocalMute(userId);
            }
          }
          tmp8 = cResult[3];
        }
        const obj = userId(576);
        const stateFromStores = userId(504).useStateFromStores(first, S, tmp8);
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          class S {
            constructor() {
              return closure_4.isLocalMute(userId);
            }
          }
          const items2 = [VoiceStateStore];
          cResult[4] = items2;
          const tmp10 = items2;
        } else {
          class S {
            constructor() {
              return closure_4.isLocalMute(userId);
            }
          }
        }
        if (cResult[5] === channelId) {
          class S {
            constructor() {
              return closure_4.isLocalMute(userId);
            }
          }
          const stateFromStores1 = tmp(504).useStateFromStores(tmp10, fn, items4);
          if (stateFromStores1 != null) {
            class S {
              constructor() {
                return closure_4.isLocalMute(userId);
              }
            }
          }
          if (undefined == null) {
            class S {
              constructor() {
                return closure_4.isLocalMute(userId);
              }
            }
          }
          if (stateFromStores1 != null) {
            class S {
              constructor() {
                return closure_4.isLocalMute(userId);
              }
            }
          }
          if (undefined == null) {
            class S {
              constructor() {
                return closure_4.isLocalMute(userId);
              }
            }
          }
          if (stateFromStores) {
            class S {
              constructor() {
                return closure_4.isLocalMute(userId);
              }
            }
            const tmp15 = channelId(11066);
          } else {
            class S {
              constructor() {
                return closure_4.isLocalMute(userId);
              }
            }
          }
          if (null == tmp15) {
            class S {
              constructor() {
                return closure_4.isLocalMute(userId);
              }
            }
          } else {
            class S {
              constructor() {
                return closure_4.isLocalMute(userId);
              }
            }
            const items3 = [tmp4.voiceStatusWrapper, style];
            cResult[9] = style;
            cResult[10] = tmp4.voiceStatusWrapper;
            cResult[11] = items3;
          }
          const tmpResult2 = tmp(504);
        }
        fn = function y() {
          return VoiceStateStore.getVoiceStateForChannel(channelId, userId);
        };
        items4 = [channelId, userId];
        cResult[5] = channelId;
        cResult[6] = userId;
        cResult[7] = fn;
        cResult[8] = items4;
        const tmpResult = userId(504);
      }
    : function VoiceStatus(userId) {
        userId = userId.userId;
        const channelId = userId.channelId;
        const tmp = closure_8();
        const items = [MediaEngineStore];
        const items1 = [userId];
        const stateFromStores = userId(504).useStateFromStores(
          items,
          () => MediaEngineStore.isLocalMute(userId),
          items1,
        );
        const obj = userId(504);
        const items2 = [VoiceStateStore];
        const items3 = [channelId, userId];
        const stateFromStores1 = userId(504).useStateFromStores(
          items2,
          () => VoiceStateStore.getVoiceStateForChannel(channelId, userId),
          items3,
        );
        let flag;
        if (stateFromStores1 != null) {
          flag = stateFromStores1.isVoiceMuted();
        }
        if (flag == null) {
          flag = false;
        }
        let flag2;
        if (stateFromStores1 != null) {
          flag2 = stateFromStores1.isVoiceDeafened();
        }
        if (flag2 == null) {
          flag2 = false;
        }
        if (stateFromStores) {
          let tmp5 = channelId(11066);
          let flag3 = true;
        } else if (flag2) {
          tmp5 = channelId(10873);
          flag3 = false;
        } else {
          flag3 = false;
          if (flag) {
            tmp5 = channelId(5020);
            flag3 = false;
          }
        }
        let tmp9 = null;
        if (null != tmp5) {
          const obj3 = { style: null, children: null };
          const items4 = [tmp.voiceStatusWrapper, userId.style];
          obj3.style = items4;
          const obj4 = {
            source: tmp5,
            size: tmp2(1200).Icon.Sizes.SMALL,
            color: channelId(587).unsafe_rawColors.BLACK,
            disableColor: flag3,
          };
          obj3.children = jsx(tmp2(1200).Icon, {
            source: tmp5,
            size: tmp2(1200).Icon.Sizes.SMALL,
            color: channelId(587).unsafe_rawColors.BLACK,
            disableColor: flag3,
          });
          tmp9 = <View style={null}>{null}</View>;
        }
        return tmp9;
      },
);
ReactCompilerGating = fn(558);
const memoResult1 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ModeratorStatus(userId) {
        const cResult = userId(576).c(13);
        userId = userId.userId;
        const channelId = userId.channelId;
        const style = userId.style;
        const tmp4 = closure_8();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [StageChannelRoleStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === channelId) {
          if (cResult[2] === userId) {
            let tmp7 = cResult[3];
            let tmp8 = cResult[4];
          }
          let tmp9;
          if (tmpResult.useStateFromStores(first, tmp7, tmp8)) {
            tmp9 = channelId(11124);
          }
          if (null == tmp9) {
            return null;
          } else {
            if (cResult[5] === style) {
              if (cResult[6] === tmp4.moderatorStatusWrapper) {
                let tmp12 = cResult[7];
              }
              if (cResult[8] !== tmp9) {
                const obj2 = {
                  source: tmp9,
                  size: tmp(1200).Icon.Sizes.SMALL,
                  color: channelId(587).unsafe_rawColors.BLACK,
                };
                const tmp16 = jsx(tmp(1200).Icon, {
                  source: tmp9,
                  size: tmp(1200).Icon.Sizes.SMALL,
                  color: channelId(587).unsafe_rawColors.BLACK,
                });
                cResult[8] = tmp9;
                cResult[9] = tmp16;
                let tmp13 = tmp16;
              } else {
                tmp13 = cResult[9];
              }
              if (cResult[10] === tmp12) {
              }
              const obj3 = { style: tmp12, children: tmp13 };
              const tmp20 = <View style={tmp12}>{tmp13}</View>;
              cResult[10] = tmp12;
              cResult[11] = tmp13;
              cResult[12] = tmp20;
            }
            const items1 = [tmp4.moderatorStatusWrapper, style];
            cResult[5] = style;
            cResult[6] = tmp4.moderatorStatusWrapper;
            cResult[7] = items1;
            tmp12 = items1;
          }
          tmpResult = tmp(504);
        }
        const fn = function n() {
          return StageChannelRoleStore.isModerator(userId, channelId);
        };
        const items2 = [channelId, userId];
        cResult[1] = channelId;
        cResult[2] = userId;
        cResult[3] = fn;
        cResult[4] = items2;
        tmp8 = items2;
        tmp7 = fn;
        const obj = userId(576);
      }
    : function ModeratorStatus(userId) {
        userId = userId.userId;
        const channelId = userId.channelId;
        const tmp = closure_8();
        const items = [StageChannelRoleStore];
        const items1 = [channelId, userId];
        let tmp4;
        if (obj.useStateFromStores(items, () => StageChannelRoleStore.isModerator(userId, channelId), items1)) {
          tmp4 = channelId(11124);
        }
        let tmp6 = null;
        if (null != tmp4) {
          const obj2 = { style: null, children: null };
          const items2 = [tmp.moderatorStatusWrapper, userId.style];
          obj2.style = items2;
          const obj3 = {
            source: tmp4,
            size: tmp2(1200).Icon.Sizes.SMALL,
            color: channelId(587).unsafe_rawColors.BLACK,
          };
          obj2.children = jsx(tmp2(1200).Icon, {
            source: tmp4,
            size: tmp2(1200).Icon.Sizes.SMALL,
            color: channelId(587).unsafe_rawColors.BLACK,
          });
          tmp6 = <View style={null}>{null}</View>;
        }
        return tmp6;
      },
);
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function BlockedStatus() {
      const cResult = c.c(2);
      const tmp4 = closure_8();
      if (cResult[0] !== tmp4.restricted) {
        const obj2 = {
          style: tmp4.restricted,
          source: _modDef11125,
          size: native.Icon.Sizes.EXTRA_SMALL,
          color: nativeDefault.unsafe_rawColors.RED_400,
        };
        const tmp8 = jsx(native.Icon, {
          style: tmp4.restricted,
          source: _modDef11125,
          size: native.Icon.Sizes.EXTRA_SMALL,
          color: nativeDefault.unsafe_rawColors.RED_400,
        });
        cResult[0] = tmp4.restricted;
        cResult[1] = tmp8;
        let tmp5 = tmp8;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : function BlockedStatus() {
      const tmp = closure_8();
      return jsx(native.Icon, {
        style: closure_8().restricted,
        source: _modDef11125,
        size: native.Icon.Sizes.EXTRA_SMALL,
        color: nativeDefault.unsafe_rawColors.RED_400,
      });
    };
size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/SpeakerTileStatuses.tsx");

export const VoiceStatus = memoResult;
export const ModeratorStatus = memoResult1;
export const BlockedStatus = tmp4;
export const IgnoredStatus = ReactCompilerGating.isReactCompilerEnabled()
  ? function IgnoredStatus() {
      const cResult = c.c(2);
      const tmp4 = closure_8();
      if (cResult[0] !== tmp4.restricted) {
        const obj2 = { style: tmp4.restricted, source: _modDef6649, size: native.Icon.Sizes.EXTRA_SMALL };
        const tmp8 = jsx(native.Icon, {
          style: tmp4.restricted,
          source: _modDef6649,
          size: native.Icon.Sizes.EXTRA_SMALL,
        });
        cResult[0] = tmp4.restricted;
        cResult[1] = tmp8;
        let tmp5 = tmp8;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : function IgnoredStatus() {
      const tmp = closure_8();
      return jsx(native.Icon, {
        style: closure_8().restricted,
        source: _modDef6649,
        size: native.Icon.Sizes.EXTRA_SMALL,
      });
    };
