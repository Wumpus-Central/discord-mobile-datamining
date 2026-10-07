// discord_app/modules/chat_input/native/guard/ChatInputGuardReturnToGameProfile.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AvatarUtils from "../../../../utils/AvatarUtils.tsx";
import ArrowSmallLeftIcon from "../../../../design/components/Icon/native/redesign/generated/ArrowSmallLeftIcon.tsx";
import ChatInputGuardDefault from "ChatInputGuard.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj = { icon: null };
let size = { height: 40, width: 40, resizeMode: "contain", borderRadius: nativeDefault.radii.md };
obj.icon = size;
let closure_5 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardReturnToGameProfile.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (pendingGameProfileReturn) => {
        const cResult = c.c(11);
        const tmp4 = closure_5();
        if (cResult[0] === pendingGameProfileReturn.pendingGameProfileReturn.gameIconUrl) {
          if (cResult[1] === tmp4) {
            let tmp5 = cResult[2];
          }
          if (cResult[3] !== pendingGameProfileReturn.gameName) {
            const intl = util.intl;
            const obj2 = { gameName: pendingGameProfileReturn.gameName };
            const formatResult = intl.format(util.t.HRHaSF, obj2);
            cResult[3] = pendingGameProfileReturn.gameName;
            cResult[4] = formatResult;
            let tmp9 = formatResult;
          } else {
            tmp9 = cResult[4];
          }
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = util.intl;
            const stringResult = intl2.string(util.t.DjifDP);
            const obj3 = { color: nativeDefault.colors.WHITE };
            const tmp17 = jsx(ArrowSmallLeftIcon.ArrowSmallLeftIcon, { color: nativeDefault.colors.WHITE });
            cResult[5] = stringResult;
            cResult[6] = tmp17;
            let tmp13 = tmp17;
            let tmp12 = stringResult;
          } else {
            tmp12 = cResult[5];
            tmp13 = cResult[6];
          }
          if (cResult[7] === pendingGameProfileReturn.onReturnToGameProfile) {
            if (cResult[8] === tmp5) {
              if (cResult[9] === tmp9) {
                let tmp18 = cResult[10];
              }
              return tmp18;
            }
          }
          const obj4 = {
            type: "simple-action",
            icon: tmp5,
            message: tmp9,
            actionLabel: tmp12,
            actionIcon: tmp13,
            actionOnPress: pendingGameProfileReturn.onReturnToGameProfile,
          };
          const tmp21 = jsx(ChatInputGuardDefault, {
            type: "simple-action",
            icon: tmp5,
            message: tmp9,
            actionLabel: tmp12,
            actionIcon: tmp13,
            actionOnPress: pendingGameProfileReturn.onReturnToGameProfile,
          });
          cResult[7] = pendingGameProfileReturn.onReturnToGameProfile;
          cResult[8] = tmp5;
          cResult[9] = tmp9;
          cResult[10] = tmp21;
          tmp18 = tmp21;
        }
        let tmp6;
        if (null != pendingGameProfileReturn.pendingGameProfileReturn.gameIconUrl) {
          const obj5 = { style: tmp4.icon, source: AvatarUtils.makeSource(pendingGameProfileReturn.gameIconUrl) };
          tmp6 = <Image style={tmp4.icon} source={AvatarUtils.makeSource(pendingGameProfileReturn.gameIconUrl)} />;
          const tmpResult = AvatarUtils;
        }
        cResult[0] = pendingGameProfileReturn.pendingGameProfileReturn.gameIconUrl;
        cResult[1] = tmp4;
        cResult[2] = tmp6;
        tmp5 = tmp6;
      }
    : (pendingGameProfileReturn) => {
        let tmp2Result;
        const tmp = closure_5();
        if (null != pendingGameProfileReturn.pendingGameProfileReturn.gameIconUrl) {
          const obj = { style: tmp.icon, source: AvatarUtils.makeSource(pendingGameProfileReturn.gameIconUrl) };
          tmp2Result = <Image style={tmp.icon} source={AvatarUtils.makeSource(pendingGameProfileReturn.gameIconUrl)} />;
        }
        const obj3 = {
          type: "simple-action",
          icon: tmp2Result,
          message: null,
          actionLabel: null,
          actionIcon: null,
          actionOnPress: null,
        };
        const intl = util.intl;
        obj3.message = intl.format(util.t.HRHaSF, {
          gameName: pendingGameProfileReturn.pendingGameProfileReturn.pendingGameProfileReturn.gameName,
        });
        const intl2 = util.intl;
        obj3.actionLabel = intl2.string(util.t.DjifDP);
        const obj4 = { gameName: pendingGameProfileReturn.pendingGameProfileReturn.gameName };
        obj3.actionIcon = jsx(ArrowSmallLeftIcon.ArrowSmallLeftIcon, { color: nativeDefault.colors.WHITE });
        obj3.actionOnPress = pendingGameProfileReturn.pendingGameProfileReturn.onReturnToGameProfile;
        return (
          <tmp5
            type="simple-action"
            icon={tmp2Result}
            message={null}
            actionLabel={null}
            actionIcon={null}
            actionOnPress={null}
          />
        );
      },
);
